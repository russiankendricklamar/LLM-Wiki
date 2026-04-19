---
slug: "/finance/stefan-problem-american"
title: "Stefan Problem and American Options"
category: "Pricing Models"
order: 135
lang: "en"
---

# Stefan Problem and American Options

In continuous time, [[optimal-stopping-american|optimal stopping]] for an American option becomes a Black-Scholes PDE with an **obstacle** — the classical **Stefan problem**. The free boundary separating the "holding region" from the "exercise region" is itself an unknown function whose location is determined simultaneously with the price.

Shiryaev devotes a detailed section to this. The Stefan problem is one of the oldest topics in applied mathematics (going back to Joseph Stefan's 1889 work on melting ice), and financial options are a modern application of it on equal footing with the classical heat-transfer problems.

## Setup for the American put

Consider an American put on a stock in the Black-Scholes model: $S_t$ is [[geometric-brownian-motion|GBM]] with volatility $\sigma$ and drift $r$ under the martingale measure. Payoff if exercised at time $\tau$:

$$G(\tau, S_\tau) = (K - S_\tau)^+.$$

The **option price** $V(t, S)$ is a function of time $t \in [0, T]$ and current price $S$. Free exercise means that at every point $(t, S)$ the holder chooses: "hold for one more instant" or "exercise now." This choice splits the $(t, S)$ plane into two regions:

- **Holding region** $\mathcal{C} = \{(t, S) \,:\, V(t, S) > G(t, S)\}$ — wait optimal.
- **Exercise region** $\mathcal{E} = \{(t, S) \,:\, V(t, S) = G(t, S)\}$ — exercise optimal.

The boundary between them is the **free boundary** $S^*(t)$.

## Equations

In the holding region the price satisfies the Black-Scholes PDE:

$$\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + r S \frac{\partial V}{\partial S} - r V = 0, \quad (t, S) \in \mathcal{C}.$$

In the exercise region the price is identically the payoff:

$$V(t, S) = K - S, \quad (t, S) \in \mathcal{E}.$$

On the free boundary $S = S^*(t)$ two matching conditions hold (smooth pasting):

$$V(t, S^*(t)) = K - S^*(t) \quad \text{(continuity of value)},$$

$$\frac{\partial V}{\partial S}(t, S^*(t)) = -1 \quad \text{(continuity of delta)}.$$

The second condition — the **smooth pasting condition** (Samuelson-McKean, 1965) — guarantees optimality; without it the boundary would not be the optimal exercise point.

## Structure of the Stefan problem

In the classical melting-ice Stefan problem the "free boundary" is the interface between ice and water; its location depends on the temperature, which itself satisfies the heat equation. In the American put:

- "Ice" $\equiv$ exercise region,
- "Water" $\equiv$ holding region,
- "Temperature" $\equiv$ option price $V(t, S)$,
- "Heat equation" $\equiv$ Black-Scholes PDE,
- "Latent heat" (Stefan condition on the boundary) $\equiv$ smooth pasting.

This analogy is not superficial: after a standard change of variables the BS PDE becomes the [[black-scholes-derivations|heat equation]] outright, and the boundary conditions become Stefan conditions.

## Free-boundary analytics

**Claim.** For an American put on a non-dividend stock the free boundary $S^*(t)$ is a monotone increasing function of $t$, with terminal value $S^*(T) = K$ and

$$\lim_{t \to -\infty} S^*(t) = \frac{2r}{2r + \sigma^2} \cdot K$$

in the infinitely long maturity limit (this is the well-known "perpetual" exercise price found by McKean in 1965).

**No closed form for $S^*(t)$ exists.** This is rare in financial mathematics: the problem is elementary to state but not to solve. Numerical methods (finite differences, binomial trees, integral equations) are essential.

## Numerical methods

1. **[[crr-model|CRR binomial tree with early-exercise check]].** At every tree node take the maximum of "hold" and "exercise." This is the discrete analogue of the Snell envelope. Converges to the true solution at rate $O(1/N)$.
2. **Finite differences (PSOR).** Solve the obstacle PDE on a $(t, S)$ grid with explicit $V \geq K - S$ checks at every step. Uses Projected Successive Over-Relaxation.
3. **Integral equations for $S^*(t)$.** Carr-Jarrow-Myneni (1992) derive a Volterra integral equation for the free boundary and solve it numerically. The fastest method for one-dimensional options.
4. **Monte Carlo regression (Longstaff-Schwartz, 2001).** Key idea: "holding" is estimated by regression of expected payoff on basis functions of the current state. The standard method for high-dimensional American options.

## Equivalence to the optimal-stopping formulation

The Stefan problem is the **PDE form** of the same object the Snell envelope gives in discrete time. The link is made rigorous through the Mayer-Schuttenberg theorem:

$$V(t, S) = \sup_{\tau \in \mathcal{T}_{[t,T]}} \mathbb{E}^\mathbb{Q}_{(t,S)}\!\left[ e^{-r(\tau-t)} (K - S_\tau)^+ \right],$$

with the supremum over stopping times. This variational formulation is equivalent to the PDE with obstacle — this is "optimal stopping $\Leftrightarrow$ free boundary."

## American call: the trivial case

On a non-dividend stock the American **call** has the same price as the European one — the Stefan problem for it is **degenerate**: the exercise region is empty, $S^*(t) = +\infty$. Reason: $(S - K)^+$ grows faster than $r$ can "eat" via discounting, and waiting always pays.

With dividends the situation changes: dividends can make early exercise of a call optimal, and a non-trivial free boundary appears.

## Related Articles

- [[optimal-stopping-american]] — discrete version (Snell) and theoretical foundation.
- [[black-scholes]] — the PDE solved by $V$ in the holding region.
- [[black-scholes-derivations]] — four routes to BS, one through the heat equation — the basis for Stefan.
- [[crr-model]] — simplest numerical method via the tree.
- [[geometric-brownian-motion]] — model of the underlying.
- [[bond-options-gaussian]] — Stefan problem for bond options.
- [[ftap-first-fundamental-theorem]] — foundation of all pricing through the martingale measure.
