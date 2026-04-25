---
title: "Renormalization Group"
category: "Physics"
order: 34
lang: "en"
slug: "renormalization-group"
---

# Renormalization Group

The **renormalization group** (RG) is the framework that explains how physical descriptions of a system depend on the scale at which you look. It was born out of perturbative QFT (Gell-Mann-Low, 1954) as a way to make sense of infinities, reinterpreted by Kadanoff (1966) and Wilson (1971) as a geometric flow on the space of theories, and is now the single most important conceptual tool in theoretical physics — underlying universality in critical phenomena, the running of coupling constants, asymptotic freedom in QCD, and the entire modern understanding of what a quantum field theory *is*.

## Wilson's idea

Imagine a quantum field theory defined with a short-distance cutoff $\Lambda$. Integrate out momentum modes with $\Lambda/b < |p| < \Lambda$ for some $b > 1$. The result is a new effective theory with cutoff $\Lambda/b$ — same low-energy physics, different Lagrangian. The map

$$
\mathcal L(\Lambda) \;\longrightarrow\; \mathcal L(\Lambda/b)
$$

is the **Wilsonian RG transformation**. Iterating it traces out a flow on the infinite-dimensional space of possible Lagrangians.

The coupling constants $g_i$ of the theory therefore become *scale-dependent*: $g_i = g_i(\mu)$, where $\mu$ is the renormalisation scale. Their evolution is governed by the **beta function**

$$
\beta_i(g) = \mu\,\frac{\partial g_i}{\partial \mu}.
$$

## Fixed points and universality

Repeatedly integrating out modes can either make couplings blow up, drive them to zero, or approach a non-trivial **fixed point** $g^*$ where $\beta(g^*) = 0$. Near a fixed point, theories organise themselves into:

- **Relevant** directions ([[spectral-theory-operators|eigenvalues]] $> 0$): couplings grow under the flow towards low energies. These are the handful of parameters that matter macroscopically.
- **Irrelevant** directions ([[spectral-theory-operators|eigenvalues]] $< 0$): couplings shrink. Microscopic details get washed out.
- **Marginal** directions (eigenvalues $= 0$): require two-loop analysis to resolve.

This is the mechanism behind **universality**: vastly different microscopic systems (a fluid near its critical point, a ferromagnet near the Curie temperature, a binary alloy near its ordering transition) all flow to the *same* fixed point and therefore exhibit *identical* critical exponents. Microscopic details are irrelevant; only the symmetry and dimensionality of the order parameter matter. Wilson received the 1982 Nobel Prize for this picture.

## Running couplings in QFT

In perturbative QFT the beta function can be computed loop by loop. Canonical examples:

**QED.** $\beta(e) = \frac{e^3}{12\pi^2} + \ldots > 0$. The electric charge *grows* at short distances, because virtual electron-positron pairs screen the bare charge. Extrapolated naively, QED hits a "Landau pole" at an astronomically high energy — probably signalling that QED is not a standalone theory at the deepest level but only a low-energy description.

**QCD.** $\beta(g_s) = -\frac{g_s^3}{16\pi^2}\!\left(\tfrac{11}{3}N_c - \tfrac{2}{3}N_f\right) < 0$ for the physical quark and colour counts. The sign is negative — the coupling *decreases* at short distances. This is **asymptotic freedom** (Gross-Wilczek-Politzer, Nobel 2004), and it is the reason deep inelastic scattering sees quarks behaving as almost-free particles inside protons while protons themselves are strongly bound. Conversely, the coupling grows at low energies and drives confinement.

**Scalar $\phi^4$.** $\beta(\lambda) = \frac{3\lambda^2}{16\pi^2}$, positive and slowly growing. The theory has a Landau pole; in four dimensions, pure $\phi^4$ is believed to be trivial (no interacting continuum limit).

## The Callan-Symanzik equation

For any correlator $G^{(n)}(p_i; g, \mu)$, changing the renormalisation scale $\mu$ at fixed physics gives the **Callan-Symanzik equation**

$$
\left[\mu\frac{\partial}{\partial\mu} + \beta(g)\frac{\partial}{\partial g} + n\,\gamma(g)\right] G^{(n)} = 0,
$$

where $\gamma(g)$ is the anomalous dimension of the field. This is an exact statement about the full quantum theory and packages the content of the Ward identities ([[ward-identities]]) of scale invariance at the quantum level. Solving it gives the famous **leading-log resummation**: corrections $\alpha_s \log(Q/\mu)$ are resummed into the running coupling $\alpha_s(Q)$.

## Continuum limits and effective field theory

Wilson's second great insight: most quantum field theories we use are **effective field theories**, valid below some cutoff $\Lambda$. Their Lagrangians contain infinitely many terms, but all higher-dimension operators are suppressed by powers of $E/\Lambda$ (they are *irrelevant* in RG language). At low energies, only a few relevant and marginal operators survive, and that is why physics is predictive despite our ignorance of UV.

A renormalisable theory is one where the number of relevant and marginal couplings is finite — the rest is irrelevant and self-organises out. A **non-renormalisable** theory (like the Fermi theory of weak interactions, or general relativity as a QFT) has infinitely many couplings that grow at high energy and must be UV-completed. This is the modern, Wilsonian meaning of "renormalisable": not a statement about the absence of infinities, but about which operators matter.

## Asymptotic safety and the space of theories

If the RG flow has a non-Gaussian UV fixed point with finitely many relevant directions, the corresponding theory is **asymptotically safe** and well-defined up to arbitrarily high energies, even if naive power-counting calls it non-renormalisable. Weinberg conjectured in 1976 that gravity might be asymptotically safe — still an open question, actively explored.

More broadly: the RG picture reframes what a quantum field theory is. A QFT is not a Lagrangian; it is a *point in the space of theories that is connected to a UV fixed point by RG flow*. Many Lagrangians describe the same theory; many theories flow to the same IR fixed point.

## Related Topics

- [[qft-basic]] — the setting in which the RG lives
- [[gauge-theory-yang-mills]] — asymptotic freedom of QCD from the beta function
- [[ward-identities]] — scale Ward identity leading to Callan-Symanzik
- [[conformal-field-theory]] — what a theory looks like *at* a fixed point
- [[anomalies]] — scale anomaly as quantum breaking of classical conformal symmetry
- [[path-integral]] — the formalism in which integrating out modes is literal
