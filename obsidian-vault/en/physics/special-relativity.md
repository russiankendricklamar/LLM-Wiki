---
title: "Special Relativity"
category: "Physics"
order: 26
lang: "en"
slug: "special-relativity"
---

# Special Relativity

**Special relativity** (Einstein, 1905) is the theory of spacetime in the absence of gravity. Starting from two postulates — the laws of physics are the same in all inertial frames, and the speed of light $c$ is the same for all inertial observers — it replaces Newton's absolute space and time with a single four-dimensional **Minkowski spacetime** and recasts mechanics in terms of the invariant geometry of that spacetime.

## The postulates and their consequences

1. **Relativity.** The laws of physics take the same form in every inertial frame.
2. **Invariance of $c$.** Light propagates at the same speed $c$ in every inertial frame, independent of the source.

Together these force events that are simultaneous in one frame to be non-simultaneous in another, and the familiar Galilean velocity addition $u' = u - v$ to be replaced by the relativistic formula

$$
u' = \frac{u - v}{1 - uv/c^2}.
$$

No material object can exceed $c$.

## Lorentz transformations

The coordinate change between two inertial frames related by a boost with velocity $v$ along $x$ is the **Lorentz transformation**:

$$
t' = \gamma\!\left(t - \tfrac{v}{c^2} x\right), \qquad x' = \gamma(x - v t), \qquad y' = y, \qquad z' = z,
$$

with $\gamma = 1/\sqrt{1 - v^2/c^2}$. Two immediate consequences:

- **Time dilation.** A clock at rest in the primed frame ticks at rate $\Delta t = \gamma \, \Delta t'$ as seen from the unprimed frame.
- **Length contraction.** A rod of rest length $L_0$ along the direction of motion has length $L = L_0 / \gamma$.

Both effects are symmetric between frames — neither observer is "really" the one whose clocks run slow.

## Minkowski spacetime

Spacetime is $\mathbb{R}^{1,3}$ equipped with the **Minkowski metric**

$$
ds^2 = -c^2 \, dt^2 + dx^2 + dy^2 + dz^2.
$$

The quantity $ds^2$ is Lorentz-invariant: all observers agree on it. Intervals are classified as

- **Timelike** ($ds^2 < 0$) — there is a frame in which the two events occur at the same location; a massive particle can connect them.
- **Null / lightlike** ($ds^2 = 0$) — connected by a light ray.
- **Spacelike** ($ds^2 > 0$) — no signal can connect them; causally disjoint.

The **light cone** at each event partitions spacetime into future, past, and elsewhere, and it is the fundamental object controlling causality.

## Four-vectors and relativistic mechanics

Mechanical quantities are promoted to four-vectors. The four-momentum of a particle of rest mass $m$ is

$$
p^\mu = m \frac{dx^\mu}{d\tau} = (E/c, \, \mathbf p), \qquad p^\mu p_\mu = -m^2 c^2,
$$

where $\tau$ is proper time. Expanding gives the most famous identity in physics,

$$
E^2 = (\mathbf p c)^2 + (m c^2)^2,
$$

which for a particle at rest reduces to $E = m c^2$: mass and energy are two sides of the same thing, and nuclear, chemical, and gravitational binding energies all contribute to inertia.

## Proper time and the twin paradox

The **proper time** $\tau$ measured by a clock moving along a worldline $x^\mu(\lambda)$ is

$$
\tau = \int \sqrt{-ds^2}\big/c.
$$

Two twins who start and end at the same event accumulate different proper times if their worldlines differ: the one who accelerated (left the inertial frame) ages less. There is no paradox — only two different path lengths in Minkowski spacetime, with the inequality reversed relative to Euclidean geometry: *straight* worldlines maximise $\tau$.

## Electromagnetism as a relativistic theory

Historically, special relativity was born from Maxwell's equations, which are already Lorentz-invariant in disguise. The scalar and vector potentials combine into a four-vector $A^\mu = (\phi/c, \mathbf A)$, and the electric and magnetic fields into a single antisymmetric tensor

$$
F^{\mu\nu} = \partial^\mu A^\nu - \partial^\nu A^\mu.
$$

Maxwell's equations become $\partial_\mu F^{\mu\nu} = \mu_0 j^\nu$, manifestly covariant under Lorentz transformations.

## Limitations and the road to general relativity

Special relativity is exact only in the absence of gravity. Attempts to include a Newtonian gravitational potential into a Lorentz-invariant theory fail — gravity cannot be a scalar force field on Minkowski spacetime without propagating faster than light or violating equivalence. This forced Einstein to promote the metric itself to a dynamical object and produced [[gravitational-waves-gr|general relativity]] ten years later.

## Related Topics

- [[gravitational-waves-gr]] — general relativity, built on the SR framework
- [[qft-basic]] — relativistic quantum theory built on Minkowski spacetime
- [[lagrangian-mechanics]] — relativistic point-particle Lagrangian $L = -mc^2\sqrt{1 - v^2/c^2}$
- [[pasterski-triangle]] — asymptotic structure of Minkowski spacetime
