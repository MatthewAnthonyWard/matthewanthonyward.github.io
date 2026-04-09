

// ── String Theory Background ──
const canvas = document.getElementById('string-canvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

function rand(min, max) { return min + Math.random() * (max - min); }

async function initMarkdown() {
  const blocks = document.querySelectorAll('[data-markdown]');

  for (const el of blocks) {
    const file = el.getAttribute('data-markdown');
    const res = await fetch(file);
    const md = await res.text();

    el.innerHTML = marked.parse(md);
  }
}

const strings = [];
const NUM_STRINGS = 12;

function makeString() {
  const edge = Math.floor(rand(0, 4));
  const W = canvas.width, H = canvas.height;
  const margin = 300;

  let cx, cy, travelAngle;
  if (edge === 0)      { cx = rand(0, W); cy = -margin;    travelAngle = rand(0.2, Math.PI - 0.2); }
  else if (edge === 1) { cx = W + margin; cy = rand(0, H); travelAngle = rand(0.7 * Math.PI, 1.3 * Math.PI); }
  else if (edge === 2) { cx = rand(0, W); cy = H + margin; travelAngle = rand(Math.PI + 0.2, 2 * Math.PI - 0.2); }
  else                 { cx = -margin;    cy = rand(0, H); travelAngle = rand(-0.3 * Math.PI, 0.3 * Math.PI); }

  const speed = rand(0.08, 0.22);
  const numPoints = Math.floor(rand(5, 9));
  const radius = rand(80, 220);
  const squish = rand(0.4, 1.0);
  const tilt = rand(0, Math.PI * 2);

  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2 + tilt;
    const r = radius * rand(0.7, 1.3);
    points.push({
      bx:     Math.cos(angle) * r,
      by:     Math.sin(angle) * r * squish,
      baseBx: Math.cos(angle) * r,
      baseBy: Math.sin(angle) * r * squish,
      phase:  rand(0, Math.PI * 2),
      freq:   rand(0.0004, 0.0012),
      amp:    rand(8, 40),
    });
  }

  return {
    cx, cy,
    vcx: Math.cos(travelAngle) * speed,
    vcy: Math.sin(travelAngle) * speed,
    points,
    opacity:   rand(0.2, 0.5),
    lineWidth: rand(3, 8),
    hue:       rand(200, 230),
    phase:     rand(0, Math.PI * 2),
  };
}

for (let i = 0; i < NUM_STRINGS; i++) {
  const s = makeString();
  s.cx = rand(-200, canvas.width  + 200);
  s.cy = rand(-200, canvas.height + 200);
  strings.push(s);
}

function isOffScreen(s) {
  const margin = 500;
  return s.cx < -margin || s.cx > canvas.width  + margin
      || s.cy < -margin || s.cy > canvas.height + margin;
}

function drawString(s, t) {
  const pts = s.points;
  if (pts.length < 2) return;

  const shimmer = s.opacity * (0.7 + 0.3 * Math.sin(t * 0.0008 + s.phase));

  ctx.save();
  ctx.translate(s.cx, s.cy);
  ctx.strokeStyle = `hsla(${s.hue}, 80%, 85%, ${shimmer})`;
  ctx.lineWidth = s.lineWidth;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.shadowColor = `hsla(${s.hue}, 100%, 90%, 0.35)`;
  ctx.shadowBlur = 10;
  ctx.beginPath();

  const n = pts.length;
  const wp = pts.map(p => ({
    x: p.baseBx + Math.cos(p.phase + t * p.freq) * p.amp,
    y: p.baseBy + Math.sin(p.phase + t * p.freq * 1.3) * p.amp * 0.6,
  }));

  for (let i = 0; i < n; i++) {
    const p0 = wp[(i - 1 + n) % n];
    const p1 = wp[i];
    const p2 = wp[(i + 1) % n];
    const p3 = wp[(i + 2) % n];
    if (i === 0) ctx.moveTo(p1.x, p1.y);
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function update(s) {
  s.cx += s.vcx;
  s.cy += s.vcy;
  const drift = 0.0003;
  const newVcx = s.vcx * Math.cos(drift) - s.vcy * Math.sin(drift);
  const newVcy = s.vcx * Math.sin(drift) + s.vcy * Math.cos(drift);
  s.vcx = newVcx;
  s.vcy = newVcy;
}

function animate(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < strings.length; i++) {
    update(strings[i]);
    drawString(strings[i], t);
    if (isOffScreen(strings[i])) {
      strings[i] = makeString();
    }
  }
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// ── Counter animation ──
function initCounters() {
  const nums = document.querySelectorAll('.fact-num');
  if (!nums.length) return;
  let animated = false;
  function runCounters() {
    if (animated) return;
    animated = true;
    nums.forEach(el => {
      const target = parseInt(el.dataset.val);
      let cur = 0;
      const step = target / (1500 / 16);
      const t = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = Math.floor(cur).toLocaleString();
        if (cur >= target) clearInterval(t);
      }, 16);
    });
  }
  const io = new IntersectionObserver(e => {
    if (e[0].isIntersecting) runCounters();
  }, { threshold: 0.3 });
  io.observe(nums[0].closest('.facts'));
}

// ── Scroll to top ──
function initScrollTop() {
  const btn = document.querySelector('.scrolltop');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

async function loadPage(url) {
  const res = await fetch(url);
  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');

  document.querySelector('.card').innerHTML =
    doc.querySelector('.card').innerHTML;

  const match = html.match(/<title>(.*?)<\/title>/);
  if (match && match[1]) {
    document.title = match[1];
  }

  initCounters();
  initScrollTop();

  // Dynamically load MathJax if the new page needs it
  const needsMathJax = doc.querySelector('script[src*="mathjax"]');
  if (needsMathJax && !window.MathJax?.startup?.promise) {
    // Set config BEFORE loading the script
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
      },
      startup: { typeset: false }
    };
    await new Promise(resolve => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
      script.onload = resolve;
      document.head.appendChild(script);
    });
  }

  await initMarkdown();

  if (window.MathJax) {
    await MathJax.startup.promise;
    MathJax.typesetPromise();
  }
}

document.addEventListener('click', async e => {
  const link = e.target.closest('a');
  if (!link) return;
  if (link.hostname !== location.hostname) return;
  if (link.hasAttribute('download')) return;

  e.preventDefault();
  const url = link.href;
  if (url !== location.href) {
    history.pushState({}, '', url);
  }
  await loadPage(url);
});

window.addEventListener('popstate', async () => {
  await loadPage(location.href);
});

window.addEventListener('message', async e => {
  if (!e.data?.navigate) return;
  const url = e.data.navigate;
  history.pushState({}, '', url);
  await loadPage(url);
});

// Initialise on first load
initCounters();
initScrollTop();

(async () => {
  await initMarkdown();

  await new Promise(resolve => {
    if (window.MathJax?.startup?.promise) {
      resolve();
    } else {
      // Poll until MathJax startup promise exists
      const interval = setInterval(() => {
        if (window.MathJax?.startup?.promise) {
          clearInterval(interval);
          resolve();
        }
      }, 50);
    }
  });

  await MathJax.startup.promise;
  MathJax.typesetPromise();
})();