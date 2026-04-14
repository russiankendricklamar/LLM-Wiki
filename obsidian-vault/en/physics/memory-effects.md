---
title: Memory Effects
category: "Physics"
lang: en
order: 16
slug: memory-effects
---

# Memory Effects

## Prerequisites

[[gravitational-memory]], [[soft-theorems]]

## Theoretical Foundation
Memory effects refer to the permanent changes in the state of a detector or the geometry of spacetime after the passage of a radiation burst. These are infrared phenomena, occurring at zero frequency, and represent genuine physical transitions between distinct vacuum states of the theory. While [[gravitational-memory]] is the most famous, there exist analogous effects in all gauge theories: electromagnetic memory (a permanent velocity kick to charged particles), color memory in QCD (a permanent rotation in color space), and even a proposed supertranslation memory in superstring theory.

The systematic study of memory effects was unified by Strominger and Zhiboedov (2014) and Pasterski, Strominger, and Zhiboedov (2016), who established that memory effects, soft theorems, and asymptotic symmetries form a single interconnected structure — the Pasterski triangle. Each side of the triangle in each gauge theory (electromagnetism, Yang-Mills, gravity) gives three equivalent descriptions of the same physical content: the infrared structure of the S-matrix.

The universality of memory effects across different force carriers reflects the deep geometric origin of the phenomenon: whenever a gauge theory has large gauge transformations (asymptotic symmetries) that shift the vacuum, there is a corresponding memory effect that physically manifests this vacuum transition. The memory is literally the change in the physical observable that diagnoses which vacuum the system is in.

## Mathematical Formulation
The general structure of a memory effect $\Delta\mathcal{O}$ is the time-integrated flux of the radiated field:
$$ \Delta\mathcal{O} = \int_{-\infty}^{+\infty} dt\, \mathcal{F}(t) $$

For electromagnetic memory, a free test particle of charge $e$ and mass $m$ receives a permanent velocity kick from the radiation field $\mathbf{E}^{\rm rad}(t)$:
$$ \Delta \mathbf{v} = \frac{e}{m}\int_{-\infty}^{+\infty} dt\, \mathbf{E}^{\rm rad}(t) = \frac{e}{m}\tilde{\mathbf{E}}^{\rm rad}(\omega=0) $$
This is precisely the zero-frequency (soft) limit of the radiated electric field — the electromagnetic memory is the Fourier transform of the soft photon amplitude.

For color memory in QCD, a heavy test quark in representation $R$ experiences a permanent rotation in color space:
$$ U_{\rm color} = \mathcal{P}\exp\left(ig\int_{-\infty}^{+\infty} dt\, A_\mu^a T^a_R\, \dot{x}^\mu\right) \neq \mathbf{1} $$
after the passage of a gluon burst. This non-abelian memory is related to the soft gluon theorem via the non-abelian generalization of the Pasterski triangle.

For gravitational memory, the permanent displacement of test masses is:
$$ \Delta x^i = \frac{1}{2}\Delta h^{ij}_{\rm TT} x_j $$
where $\Delta h^{ij}_{\rm TT}$ is the permanent change in the TT metric perturbation, related to the soft graviton amplitude at zero frequency.

## Key Properties
- **Universality**: Memory effects exist for every gauge theory with large gauge symmetries — electromagnetism (spin 1), Yang-Mills (spin 1, non-abelian), gravity (spin 2), and potentially higher-spin theories.
- **Infrared origin**: Memory effects arise from the $\omega \to 0$ limit of radiation; they are controlled by the soft theorems of the corresponding theory.
- **Vacuum transitions**: Each memory event represents a physical transition $|{\rm vac}_-\rangle \to |{\rm vac}_+\rangle$ between degenerate vacua related by a large gauge transformation.
- **Hierarchy**: In gravity, there is a hierarchy of memory effects at each order in the soft expansion: displacement memory (leading, supertranslations), [[spin-memory]] (subleading, superrotations), and center-of-mass memory (sub-subleading).
- **Detectability**: Electromagnetic memory has been argued to be detectable in ultrarelativistic heavy-ion collisions (color memory) and in laser-plasma experiments. Gravitational memory is targeted by LISA and pulsar timing arrays.

## Physical Interpretation
Memory effects make the vacuum degeneracy of gauge theories physically observable. The infinite number of degenerate vacua in gravity (parametrized by functions on $S^2$) are not just a mathematical curiosity — they are distinct physical states that a sufficiently sensitive detector can distinguish. A gravitational wave detector that is sensitive to DC displacements (rather than just oscillating strains) can measure which vacuum transition occurred during a gravitational wave event.

The electromagnetic analog is more intuitive: a burst of electromagnetic radiation passes through a region of space. After the burst, free charged test particles have been permanently accelerated — they remember the passage of the radiation. The same principle operates in gravity, but now spacetime geometry itself is permanently altered.

## Connections to Information Theory & Holography
Memory effects encode the total amount of integrated flux — the "charge" — that has escaped to infinity. From an information-theoretic perspective, each memory event records a conserved quantity that cannot be erased: it is the physical imprint of the infinite-dimensional asymptotic symmetry charges.

This makes memory effects central to the proposed resolution of the black hole information paradox through [[black-hole-soft-hair]]: the soft charges imprinted on the horizon as infalling matter passes through are the horizon analogs of the memory effect. When the black hole evaporates, these soft charges are transferred to outgoing radiation as memory, providing a mechanism for information escape.

## See Also
* [[gravitational-memory]]
* [[spin-memory]]
* [[pasterski-triangle]]
