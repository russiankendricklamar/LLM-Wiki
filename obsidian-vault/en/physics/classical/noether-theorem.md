---
title: "Noether's Theorem"
category: "Physics"
order: 25
lang: "en"
slug: "noether-theorem"
---

# Noether's Theorem

**Noether's theorem** (Emmy Noether, 1918) is the statement that every continuous symmetry of the action of a physical system corresponds to a locally conserved current — and, when integrated, a globally conserved charge. It is the single deepest organising principle of classical and quantum field theory: conservation of energy, momentum, angular momentum, electric charge, and every other global conservation law in physics is an instance of it.

## Statement

Consider an action $S[\phi] = \int d^4x \, \mathcal L(\phi, \partial_\mu \phi)$ and an infinitesimal transformation

$$
\phi \to \phi + \epsilon\, \delta\phi, \qquad x^\mu \to x^\mu + \epsilon\, \delta x^\mu,
$$

under which the Lagrangian density changes by a total derivative: $\delta\mathcal L = \partial_\mu K^\mu$. If the equations of motion are satisfied, there exists a **conserved current**

$$
j^\mu = \frac{\partial \mathcal L}{\partial(\partial_\mu \phi)}\,\delta\phi - K^\mu
$$

satisfying

$$
\partial_\mu j^\mu = 0.
$$

Integrating over a spacelike slice gives a conserved charge $Q = \int d^3x \, j^0$ with $dQ/dt = 0$.

## The dictionary of symmetries and charges

| Symmetry of the action | Conserved quantity |
|---|---|
| Time translation $t \to t + a$ | Energy |
| Spatial translation $x^i \to x^i + a^i$ | Linear momentum |
| Spatial rotation | Angular momentum |
| Lorentz boost | Centre-of-mass motion |
| Internal phase $\phi \to e^{i\alpha}\phi$ | Electric charge / particle number |
| $SU(N)$ flavour rotation | Isospin, colour, … |

The theorem is constructive: given the symmetry, you can *write down* the current from the formula above.

## Example: energy from time-translation invariance

For a Lagrangian $L(q, \dot q)$ with no explicit time dependence, the shift $t \to t + \epsilon$ leaves the action invariant. Noether's theorem gives the conserved quantity

$$
E = \dot q \frac{\partial L}{\partial \dot q} - L,
$$

which is exactly the Hamiltonian $H$ built via the Legendre transform in [[hamiltonian-mechanics]]. Energy conservation is thus not an axiom — it is a consequence of the fact that the laws of physics do not depend on *when* you apply them.

## Example: electric charge from global phase symmetry

A complex scalar $\phi$ with $\mathcal L = (\partial_\mu \phi^*)(\partial^\mu \phi) - m^2 |\phi|^2$ is invariant under $\phi \to e^{i\alpha}\phi$. The conserved current is

$$
j^\mu = i\big( \phi^*\, \partial^\mu \phi - \phi\, \partial^\mu \phi^* \big),
$$

and $Q = \int d^3x\, j^0$ is the (electric) charge. Gauging this symmetry — making $\alpha$ depend on $x$ — forces the introduction of a gauge field $A_\mu$ and gives QED.

## Global vs. local symmetries

Noether's theorem applies to **global** symmetries — the transformation parameter is a constant. **Local** (gauge) symmetries, in which the parameter is a function of spacetime, are a very different beast: they are redundancies of description, not physical symmetries, and Noether's theorem in its naive form gives trivial currents. Their role is not to produce conserved charges but to constrain the dynamics via **Ward identities** and **Bianchi identities**.

At infinity, however, gauge transformations that do not die off — **large gauge transformations** — become physical again and generate asymptotic symmetries, tying Noether's theorem to [[asymptotic-symmetries]], [[bms-group]], and [[soft-theorems]].

## Quantum Noether

In the quantum theory, conservation of $j^\mu$ becomes the operator statement $\partial_\mu \hat j^\mu = 0$, and its insertion into correlation functions produces **Ward-Takahashi identities** — exact relations between Green's functions that persist to all orders in perturbation theory. These are the quantum fingerprint of classical symmetries and are the reason gauge theories are renormalisable.

Symmetries can also be broken by quantisation itself (anomalies): a classical Noether current can fail to be conserved at one loop. Anomalies are physical — the $\pi^0 \to \gamma\gamma$ decay rate, the 't Hooft anomaly matching, and the chiral anomaly all follow from them.

## Related Topics

- [[lagrangian-mechanics]] — the action principle Noether's theorem acts on
- [[hamiltonian-mechanics]] — energy conservation as the Hamiltonian
- [[asymptotic-symmetries]] — Noether charges for symmetries at null infinity
- [[soft-theorems]] — Ward identities of asymptotic symmetries
- [[group-theory]] — the classification of continuous symmetries
