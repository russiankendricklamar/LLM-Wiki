---
title: "Percolation"
category: "Applied Probability"
order: 22
lang: "en"
slug: "/math/percolation"
growth: "seedling"
---

# Percolation Theory

Percolation theory studies the emergence of large-scale **connectivity** in random spatial networks. The fundamental question: when does a **random graph** on a lattice undergo a **phase transition** from a regime of small, isolated clusters to one containing a giant connected component? The answer is remarkably precise — controlled by a **critical probability** $p_c$ that depends on the lattice dimension $d$ and the connectivity rule.

Beyond abstract graph theory, percolation models real phenomena: fluid flow through porous media, epidemic spread in populations, forest fires, network robustness, and quantum Anderson localization. The theory provides one of the cleanest examples of **critical phenomena** in probability and statistical mechanics.

## Bond and site percolation on $\mathbb{Z}^d$

Fix a $d$-dimensional integer lattice $\mathbb{Z}^d$ with edges connecting nearest neighbors.

**Bond percolation:** Each edge is **open** (present) independently with probability $p \in [0,1]$, and **closed** (absent) with probability $1-p$. An open cluster $C$ is a maximal connected component of open edges. Let $|C|$ denote its size.

**Site percolation:** Each vertex is **occupied** with probability $p$ independently. We consider the connected component of occupied vertices (using occupied neighbors).

For each model, define the **percolation probability** $\theta(p) = \mathbb{P}(|C| = \infty)$, where $C$ is the cluster containing a fixed origin vertex (say the origin of $\mathbb{Z}^d$). Clearly $\theta(0) = 0$ and $\theta(1) = 1$. The question is whether $\theta$ jumps discontinuously or increases continuously.

## Critical probability and phase transitions

**Definition:** The **critical probability** is
$$p_c = p_c(d, \text{model}) = \inf\{ p : \theta(p) > 0 \}.$$

For $p < p_c$ (**subcritical**): $\theta(p) = 0$. All clusters are finite.

For $p > p_c$ (**supercritical**): $\theta(p) > 0$. There exists a unique infinite cluster almost surely.

For $p = p_c$ (**critical**): $\theta(p_c) = 0$ in $d \geq 2$ (proven by Harris, 1960), but clusters become arbitrarily large.

**Famous exact result (Kesten, 1980):** For bond percolation on the 2D square lattice $\mathbb{Z}^2$:
$$p_c(\mathbb{Z}^2, \text{bond}) = \frac{1}{2}.$$

This is one of the few lattices where $p_c$ is known exactly. The proof uses self-duality and the **RSW theorem** (Russo–Seymour–Welsh), described below.

## Subcritical regime: exponential decay

For $p < p_c$, the cluster of the origin is finite with probability 1. How fast does its size tail off?

**Theorem.** For $p < p_c$ (bond percolation on $\mathbb{Z}^d$, $d \geq 2$):
$$\mathbb{P}(|C_0| \geq n) \leq e^{-c(p) n}$$
for some constant $c(p) > 0$. Moreover, the **correlation length** $\xi(p)$ satisfies
$$\mathbb{P}(0 \leftrightarrow x) \sim e^{-|x|/\xi(p)}, \quad |x| \to \infty,$$
where $0 \leftrightarrow x$ denotes that 0 and $x$ are in the same open cluster.

The correlation length diverges as $p \uparrow p_c$:
$$\xi(p) \sim (p_c - p)^{-\nu}$$
where $\nu = 4/3$ in $d = 2$ (conjectured; proven for some models), and $\nu = 1/2$ in $d \geq 6$.

## Supercritical regime: unique infinite cluster

For $p > p_c$, there exists a unique infinite cluster $C_\infty$, and:
$$\theta(p) = \mathbb{P}(\text{origin belongs to } C_\infty) > 0.$$

**Theorem (uniqueness, Harris–Seymour):** For $p > p_c$ in $d \geq 2$, there is **almost surely at most one** infinite cluster. The probability of belonging to an infinite cluster is $\theta(p)$, and $\theta$ is **strictly increasing** on $(p_c, 1]$.

The **backbone** — the infinite cluster minus its dead-end branches — has dimension $d - 1/2$ in $d = 2$, reflecting a subtle fractal structure.

## The RSW theorem and crossing probabilities

One of the deepest tools is the **Russo–Seymour–Welsh theorem** (Seymour & Welsh, 1978; building on Russo's work). It applies to **crossing events**: does an open path connect one side of a rectangle to the opposite side?

**RSW Theorem (informal):** For a rectangle $R = [0, m] \times [0, n]$ in $\mathbb{Z}^2$ with bond percolation at $p = 1/2$ (the critical point), the probability that there exists an open path from the left edge to the right edge is **bounded away from 0 and 1** as $m, n \to \infty$. More precisely, under suitable aspect ratio conditions, this crossing probability converges to a non-trivial limit $P_{\text{cross}} \in (0,1)$.

**Key consequence:** This implies that $p_c = 1/2$ for $\mathbb{Z}^2$. If $p < 1/2$, the dual lattice dominates, forbidding long crossings; if $p > 1/2$, crossings occur with positive density.

The RSW theorem is a pillar of 2D percolation theory and enabled the proof that scaling limits are described by **Schramm–Loewner Evolution** (SLE).

## Harris–van den Berg–Kesten inequality

The **BK inequality** (van den Berg & Kesten, 1985) quantifies how open paths interact. For increasing events $A$ and $B$ (events preserved under adding more open edges):

$$\mathbb{P}(A \cap B) \leq \mathbb{P}(A) \cdot \mathbb{P}(B).$$

This is **not** true for all events, but holds for "path" and "connection" events in percolation. Together with the **FKG inequality** (Harris, 1960; Fortuin–Kasteleyn–Ginibre, 1971):

$$\mathbb{P}(A \cap B) \geq \mathbb{P}(A) \cdot \mathbb{P}(B) \quad \text{for increasing events } A, B,$$

these give precise control over correlations in percolation.

**Application:** The density of the infinite cluster (number of infinite-cluster edges per vertex) at $p = 0.6$ in $\mathbb{Z}^2$ can be estimated by intersecting these inequalities with exact bounds on crossing probabilities.

## Scaling limits and SLE$_6$

A landmark result: **Smirnov (2001)** proved that the scaling limit of bond percolation on $\mathbb{Z}^2$ at criticality ($p = 1/2$) is described by **Schramm–Loewner Evolution with parameter $\kappa = 6$** (SLE$_6$). This means that cluster boundaries, when rescaled by a factor $\epsilon^{-1}$ as lattice spacing $\epsilon \to 0$, converge in distribution to random curves generated by SLE$_6$.

SLE is a conformal-invariant random curve model, and its emergence proves that percolation is a **conformally invariant** critical phenomenon — a property that held only as a conjecture for decades.

## Connections to the Ising model and random cluster model

The **random cluster model** (Fortuin–Kasteleyn representation, 1969) unifies percolation and the Ising model via:
$$\mu_q(\omega) \propto q^{c(\omega)},$$
where $\omega$ is a bond configuration and $c(\omega)$ is the number of clusters. For $q = 1$, this is Bernoulli bond percolation; for $q = 2$, it couples to the Ising model's low-temperature phase.

This duality has revealed that percolation and magnetic models exhibit the **same critical exponents**:
- $\beta$ (magnetization exponent)
- $\gamma$ (susceptibility exponent)
- $\delta$ (critical isotherm exponent)
- $\nu$ (correlation length exponent)

These satisfy **hyperscaling relations** like $d\nu = 2 - \alpha$ (where $\alpha$ is the specific heat exponent), valid across $d = 2, 3, \ldots$

## Oriented percolation and damage spreading

**Oriented percolation** orients edges in time: cluster connectivity is directional, modeling epidemics or information spread in discrete time. The critical dimension is $d_c = 1 + 1 = 2$ (oriented percolation is supercritical for $d \geq 2$).

A key application is **damage spreading**: in a dynamical system with a slight perturbation, do errors propagate forever or decay? Oriented percolation provides the critical threshold.

## First and second moment methods

Foundational tools for proving existence/absence of infinite clusters:

**First moment (union bound):**
$$\mathbb{P}(|C_0| \geq n) \leq \mathbb{E}[|C_0 \cap \partial B(n)|],$$
where $\partial B(n)$ is the boundary of a ball of radius $n$. If the expected number of $n$-sized clusters through the origin vanishes, then $\theta(p) = 0$.

**Second moment:**
$$\text{Var}(|C_0|) = \mathbb{E}[|C_0|^2] - \mathbb{E}[|C_0|]^2 \approx \chi(p)^2 \cdot \text{(corrections)}.$$
Critical behavior emerges when $\chi(p) = \mathbb{E}[|C_0|]$ diverges. The second moment method detects this transition sharply.

## Summary and modern directions

Percolation theory remains intensely active. Recent progress includes:
- **Universality:** Critical exponents are determined by dimension $d$ and symmetry, not lattice details.
- **Scaling relations:** Connecting microscopic ($p_c$, critical exponents) to macroscopic (continuum limits).
- **Multifractal properties:** Describing how the infinite cluster's geometry varies locally.
- **Higher dimensions:** In $d \geq 19$, mean-field (Gaussian) exponents apply exactly; for $2 \leq d \leq 6$, corrections must be computed.

Understanding percolation — the threshold for connectivity — has implications across physics, computer science, and network science: how much redundancy must a network have to survive targeted failures?

## Related articles

[[random-graphs]], [[concentration-inequalities]], [[branching-processes]], [[large-deviations-cramer]], [[coupling-methods]], [[ergodic-theorems-birkhoff]]
