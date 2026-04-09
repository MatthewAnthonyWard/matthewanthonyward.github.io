# AdS/QCD: Quantum Dynamics from Classical Gravity

## Modelling the Subatomic World
Protons and neutrons, the building blocks of atomic matter, are comprised of quarks bound together by the strong nuclear force. This force is mediated by gluons, the strength of which is set by the gauge coupling $g$. As $g$ increases, the quarks stick together, forming bound states like the proton and neutron. For small $g$, the quarks and gluons are effectively free, producing a state of matter known as the quark-gluon plasma (QGP).
<br>
<br>
The value of $g$ where this transistion occurs, as well as whether the transition is smooth (second-order) or discontinuous (first-order), is a question of great interest when modelling the strong force. However, despite the field theoretic description of electromagnetism (known as quantum electrodynamics or QED) has been incredibly successful in describing electron-photon interactions, the field theory description of the strong force (known as quantum chromodynamics or QCD) breaks down in the crucial regime where quarks confine. This makes it impossible to compute observables such as the proton/neutron masses from first principles, much less understand the origin of most of the mass in the observable Universe.
<br>
<br>
To break this impasse, we must formulate an alternate description of quark-gluon interactions that is valid for large $g$, the discovery of which takes us to the strangest objects in the Universe - black holes.


## Black Holes & the Information Paradox
Einstein's theory of general relativity describes gravity as the curvature of spacetime in the presence of mass. Whilst typically only significant over large distances, the extreme density of a black hole can cause dramatic changes in the curvature of spacetime across the width of a single atom. As such, black holes are ideal objects for studying phenomena affected by both gravity and quantum mechanics.
<br>
<br>
<div class="img-text">
    <div>
        One example is Hawking radiation. Quantum field theory describes particles as local excitations of space-filling matter fields. Since the quantum vacuum has a non-zero energy density, virtual particles constantly appear from empty space, a phenomena known as vacuum fluctuations. To preserve charge, these fluctuations always come in the form of particle-antiparticle pairs, quickly re-annihilating with one another and returning their energy to the vacuum. However, with a source of energy and a mechanism for the particles to propogate independently, these virtual particles can become physical.
        <br>
        <br>
        In black hole, these requirements are fulfilled by the gravitational potential and the event horizon respectively. Vacuum fluctuations at the horizon of a black hole produce these particle pairs, with one falling into the black hole whilst the other, the Hawking radiation, escapes to infinity. Since the energy of the Hawking radiation is sourced by the gravitational field, an outside observer interprets this as particle emission, a process that gradually reduces the mass of the black hole until it eventually (after billions of years) evaporates.
        <br>
        <br>
    </div>
    <figure>
        <img src="../images/hawking-radiation.jpg" alt="AdS QCD">
        <figcaption>Hawking radiation arising from vacuum fluctuations about a black hole's event horizon. Adpated from S. Weinfurtner, Nature 569, 634-635 (2019)</figcaption>
    </figure>
</div>
Since the Hawking radiation was sourced just outside the event horizon, and we know that nothing from inside the horizon can escape outside, one must conclude that this radiation carries no information from the interior. But, if the black hole evaporates and disappears, what has become of the information that made it up? This is the <em>black hole information paradox</em>. To circumvent this paradox, we need to carefully consider what an outside observer actually sees as an object approaches a black hole.


## Our World as a Hologram
We know that the warping of spacetime around a black hole slows the internal clock of an infalling object relative to an outside observer, making the object appear frozen at the event horizon as the Lorentz $\gamma$ factor diverges to infinity. In contrast, the object observes nothing significant as it passes this critical radius; it continues its journey towards the singularity unaware that it has just become disconnected from the outside universe.
<br>
<br>
<div class="img-text">
    <figure>
        <img src="../images/holographic_principal.webp" alt="the holographic principle">
        <figcaption>The holographic principle proposes that the information within a black hole exists on the boundary of its event horizon. Adapted from A.Popli, Medium magazine (2025)</figcaption>
    </figure>
    <div>
        This suggests two complementary descriptions of the same physics: the bulk (interior) and the boundary (exterior). From the outside, infalling information isn't lost inside the black hole but is preserved on the horizon, spreading out and entangling with existing degrees of freedom on the black hole's boundary. This is corroborated by the Bekenstein-Hawking entropy, which states that the information held by a black hole scales with its surface area, not its volume. The boundary description encodes the same information as the bulk, albeit in a scrambled, lower-dimensional form. Due to the difference in dimensionality, this concept is known as the <em>holographic principle</em>.
        <br>
        <br>
        As for quantum fluctuations at the event horizon, the Hawking radiation becomes entangled with the degrees of freedom present on the boundary, carrying this information away as the black hole evaporates. In principle, collecting all this radiation would allow one to reconstruct everything that fell into the black hole, resolving the information paradox. 
    </div>
</div>

Whilst important for our physical understanding of black holes, the holographic principle makes a deeper statement regarding the nature of reality itself. If all of the information contained within a given volume can be captured on its surface, is dimensionality a basic property of our universe or does it emerge from a more fundamental description with fewer dimensions? If so, what does this lower-dimensional theory look like? For a specific theory of quantum gravity (type IIb superstring theory) in the bulk, the answer turned out to be none other than a special type of quantum field theory.


## The AdS/CFT Correspondance
Named the AdS/CFT correspondance, the first practical implementation of the holographic principle proposed a duality between quantum gravity in a bulk Anti de Sitter (AdS) spacetime and a conformal field theory (CFT) living on its boundary. Crucially, the equivalence pairs a gravitating theory in $n$ dimensions with a purely quantum theory (no gravity) in $n-1$ dimensions, implying that the fabric of space and time might actually <em>emerge</em> from quantum interactions. 
 <br>
 <br>
 Better yet, the AdS/CFT correspondance is a strong-weak duality, meaning the dual description of a highly quantum (stringy) theory of gravity is a weakly-coupled CFT for which the techniques used to solve problems in QED (namely perturbation theory) can be applied. For our purposes however, we are more interested in the reverse situation; the mapping of a strongly-coupled quantum field theory like QCD to a non-quantum (classical) theory of gravity. In the so-called <em>supergravity limit</em>, the statement of the correspondance takes the weak form:
<br>
<br>
> a supersymmetric four-dimensional strongly-coupled conformal field theory with a large number of colour (gauge) charges is equivalent to classical supergravity on a ten-dimensional $AdS_5\times S_5$ background

This statement contains terminology that will not be described in detail here. Instead, it sufficies to highlight the additional assumptions and symmetries present in this definition that we wish to break in order to describe a theory more like real-world QCD.

## CFT $\rightarrow$ QCD
There are three features of the weak form of the AdS/CFT correspondance that are most at odds with QCD. They are:
<br>
<br>
* the presence of conformal symmetry
* the inclusion of supersymmetry
* the requirement of a large number of colour charges
<br>
The first difference is conformal symmetry, which implies that a physical system is invariant under changes in scale. Objects in the theory can be blown up or shrunk down without effecting the outcome of physical measurements, which certainly isn't the case for quark-gluon interactions. More importantly, there can be no concept of mass in a conformal field theory, since the existance of a massive object introduces an inherent energy scale into the description.
<br>
<br>
The second difference is supersymmetry, which is a symmetry between matter particles (fermions) and force carriers (bosons) that effectively doubles the particle content of the standard model. This appears because supergravity is the low-energy limit of string theory, which requires supersymmetry to avoid tachyons and describe matter.
<br>
<br>
Finally there is the matter of colour charges. Much like QED has one charge, the electric charge, QCD has three charges; red, blue and green (hence the name <em>chromo</em>dynamics). The CFT in this correspondance has an infinte number of such charges, an assumption that allows the string theory to be weakly-coupled and thus described by classical (tree level) supergravity.

## My Research
In my research, I construct specific configurations of string-theoretic objects in five-dimensional AdS space that, in the supergravity limit, produce dual descriptions of strongly-coupled quark-gluon interactions, including those at finite temperature attained by the insertion of a Schwarzchild black hole into the bulk gravitating geometry. These objects include hypersurfaces called D-branes that act as a source of gravitons (the quanta of gravity) as well as momentum conserving endpoints for the open strings that describe quarks and gluons. This dual interpretation of D-branes actually lies at the heart of the AdS/CFT correspondance, the intuition for which can be seen in the image to the right.


My first paper, published in 2023, used the perturbative running coupling constant $g$ from QCD to calculate the mass of a generic $n$-quark state, attaining an improved prediction for the proton mass compared to other holographic models. My recent work explores the phase transition of the quark-gluon plasma, predicting the lifetime of quark-based dark matter candidates such as the sexaquark.





