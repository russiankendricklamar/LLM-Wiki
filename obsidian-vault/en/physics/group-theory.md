---
title: Group Theory
category: "Physics"
lang: en
order: 7
slug: group-theory
---

# Group Theory in Physics

## Theoretical Foundation
Group theory is the mathematical language of symmetry in physics. A group is a set $G$ with a binary operation satisfying closure, associativity, identity, and invertibility. When symmetry groups act on physical systems, they constrain the allowed dynamics, relate apparently distinct phenomena, and organize the spectrum of particles and fields.

The systematic application of group theory to physics was developed by Weyl, Wigner, and van der Waerden in the late 1920s, in direct response to the new quantum mechanics. Wigner's theorem establishes that every symmetry of a quantum system is represented either by a unitary or anti-unitary operator on the Hilbert space. This guarantees that the irreducible representations (irreps) of the symmetry group classify all possible quantum states: a particle is an irrep of the Poincaré group, labeled by mass $m$ and spin $s$.

In modern physics, gauge symmetries — local symmetry groups — are the foundation of all known fundamental interactions. The Standard Model is built on the gauge group $SU(3)_c \times SU(2)_L \times U(1)_Y$; general relativity is (in a precise sense) a gauge theory of the local Poincaré group. The requirement of local gauge invariance uniquely determines the form of all interactions, making group theory not just a classification tool but a constructive principle.

## Mathematical Formulation
A Lie group $G$ is a differentiable manifold with a smooth group structure. Near the identity, elements are written $g(\theta) = e^{i\theta^a T^a}$ where $T^a$ are the generators forming the Lie algebra $\mathfrak{g}$:
$$ [T^a, T^b] = i f^{abc} T^c $$
The structure constants $f^{abc}$ completely characterize the algebra. For $SU(2)$: $f^{abc} = \epsilon^{abc}$ (Levi-Civita symbol); for $SU(3)$: $f^{abc}$ are the antisymmetric structure constants of the Gell-Mann matrices.

The Killing form $\kappa^{ab} = f^{acd}f^{bdc}$ defines an invariant inner product on $\mathfrak{g}$; for semisimple groups it is non-degenerate. The quadratic Casimir operator $C_2 = \kappa_{ab}T^aT^b$ commutes with all generators and takes a constant value $C_2(R)$ in each irrep $R$, labeling the representation.

For a gauge theory based on group $G$, the covariant derivative is:
$$ D_\mu = \partial_\mu - igA_\mu^a T^a $$
and the field strength tensor is:
$$ F_{\mu\nu}^a = \partial_\mu A_\nu^a - \partial_\nu A_\mu^a + gf^{abc}A_\mu^b A_\nu^c $$
The Yang-Mills Lagrangian $\mathcal{L} = -\frac{1}{4}F_{\mu\nu}^aF^{a\mu\nu}$ is invariant under local $G$ transformations.

For the rotation group $SO(3) \cong SU(2)/\mathbb{Z}_2$, the irreps are labeled by spin $j = 0, \frac{1}{2}, 1, \frac{3}{2}, \ldots$ with dimension $2j+1$. Spin-$\frac{1}{2}$ representations require going to the double cover $SU(2)$, explaining why fermions pick up a sign under $2\pi$ rotation.

## Key Properties
- **Schur's lemma**: Any operator commuting with all elements of an irrep is proportional to the identity. This implies selection rules: matrix elements of operators between states in different irreps vanish.
- **Peter-Weyl theorem**: For compact groups, $L^2(G)$ decomposes as a direct sum of all irreps, each appearing with multiplicity equal to its dimension.
- **Spontaneous symmetry breaking**: When the ground state is not invariant under the full symmetry group $G$ but only a subgroup $H \subset G$, Goldstone's theorem guarantees $\dim(G/H)$ massless bosons.
- **Anomalies**: Quantum corrections can break classical symmetries (anomalies); gauge anomalies must cancel for consistency of the theory, constraining the matter content of the Standard Model.
- **Representation theory of the Poincaré group**: Wigner's classification gives all elementary particles: massive particles by $(m, s)$ and massless particles by $(0, h)$ where $h$ is the helicity.

## Physical Interpretation
The power of group theory is that symmetry alone, without detailed dynamical calculation, predicts the existence and degeneracy of energy levels, selection rules for transitions, and the form of interactions. The eight gluons of QCD correspond to the adjoint representation of $SU(3)$ (dimension 8 = $3^2 - 1$); the three $W$ and $Z$ bosons to the adjoint of $SU(2) \times U(1)$ after symmetry breaking.

Wigner's classification of elementary particles as irreps of the Poincaré group is the deepest statement: a "particle" is simply a unitary irreducible representation labeled by mass and spin. Interactions are then constrained by demanding that the S-matrix respect these symmetries, leading directly to Weinberg's construction of quantum field theory from symmetry principles alone.

## Connections to Information Theory & Holography
Group theory underlies the symmetry structure of holographic dualities. In AdS$_d$/CFT$_{d-1}$, the isometry group of anti-de Sitter space $SO(d,2)$ equals the conformal group of the $(d-1)$-dimensional boundary — the group-theoretic origin of the duality. In [[celestial-holography]], the 4D Lorentz group $SL(2,\mathbb{C})$ acts as the 2D global conformal group on the celestial sphere.

The infinite-dimensional [[bms-group]] is the asymptotic symmetry group of flat spacetime; its representation theory classifies the soft degrees of freedom. Understanding the unitary representations of the BMS group is a key open problem in quantum gravity, directly connected to the classification of scattering states and the information content of gravitational radiation.

## Applications in Machine Learning

Lie-group representation theory has found direct application in deep learning. [[equivariant-nn|Equivariant neural networks]] build symmetry constraints into their architecture: features transform as irreducible representations of $SO(3)$ and convolutions are defined via Clebsch-Gordan tensor products. This allows models for molecular dynamics (NequIP, MACE), protein structure prediction (AlphaFold), and particle physics to achieve high precision from very little training data — the symmetry group is known exactly and does not need to be learned.

## See Also
* [[bms-group]]
* [[asymptotic-symmetries]]
* [[quantum-entanglement]]
* [[equivariant-nn]]
