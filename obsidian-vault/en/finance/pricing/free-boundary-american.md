---
slug: "/finance/free-boundary-american"
title: "Free Boundary Problem for American Options"
category: "Pricing"
order: 137
lang: "en"
---
# Free Boundary Problem for American Options

The pricing of **American options** — options exercisable at any time up to maturity — constitutes a **free boundary problem**: one must simultaneously determine the option value $V(S,t)$ and the optimal exercise boundary $S^*(t)$ separating the continuation region from the exercise region. Unlike European options, no general closed-form solution exists for finite-horizon Americans, making this one of the richest problems in mathematical finance at the intersection of PDE theory, optimal stopping, and numerical methods.

## Prerequisites

[[black-scholes]], [[black-scholes-derivations]], [[monte-carlo-method]], [[brownian-motion]]

## Problem Formulation

### The Black-Scholes PDE with Constraint

An American put with strike $K$ and maturity $T$ satisfies the Black-Scholes PDE in the **continuation region** $\{(S,t): V(S,t) > (K-S)^+\}$:

$$
\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + rS\frac{\partial V}{\partial S} - rV = 0
$$

with the **American constraint** (no-arbitrage):

$$
V(S,t) \ge (K - S)^+, \qquad \forall\, S > 0,\; t \in [0,T]
$$

The **exercise region** is $\{(S,t): V(S,t) = (K-S)^+\}$. The boundary between the two regions is the unknown curve $S^*(t)$.

### Smooth Pasting Conditions

At the free boundary $S = S^*(t)$, both the value and its first derivative are continuous:

$$
V(S^*(t), t) = K - S^*(t), \qquad \frac{\partial V}{\partial S}(S^*(t), t) = -1
$$

The first condition is **value matching**; the second is **smooth pasting** (or high-contact condition). Together they pin down $S^*(t)$ uniquely.

### Boundary Conditions

$$
V(0, t) = K, \quad V(S, t) \to 0 \text{ as } S \to \infty, \quad V(S, T) = (K - S)^+
$$

## Perpetual American Put

The **perpetual** case ($T = \infty$) is time-independent, reducing the PDE to an ODE. The solution admits a closed form:

$$
V(S) = (K - S^*)\left(\frac{S}{S^*}\right)^{-\gamma}, \quad S > S^*
$$

where the optimal exercise boundary is constant:

$$
S^* = \frac{\gamma}{\gamma + 1} K, \qquad \gamma = \frac{2r}{\sigma^2}
$$

The option is exercised immediately when $S \le S^*$. For $r > 0$, $S^* < K$: early exercise occurs below the strike, not at it.

## Finite Horizon: No Closed Form

For $T < \infty$, the free boundary $S^*(t)$ is a decreasing function of time-to-maturity with:

$$
S^*(T) = K \quad \text{(at expiry)}, \qquad S^*(0) = S^*_{\text{perpetual}} \quad \text{(as } T \to \infty\text{)}
$$

No closed-form expression exists. Near expiry, the boundary behaves as:

$$
K - S^*(t) \sim \sigma\sqrt{(T-t) \cdot 2|\ln(T-t)|}
$$

## Early Exercise Premium

The American option value decomposes as:

$$
V^{\text{Am}}(S,t) = V^{\text{Eu}}(S,t) + \underbrace{e(S,t)}_{\text{early exercise premium}}
$$

The early exercise premium for the put satisfies the integral representation (Kim, 1990; Jacka, 1991; Carr, Jarrow, Myneni, 1992):

$$
e(S,t) = \int_t^T r K \, e^{-r(u-t)} \, \Phi\!\left(-d_2(S, S^*(u), u-t)\right) du
$$

where $d_2$ is the Black-Scholes $d_2$ with $S^*(u)$ as the "strike." This is an integral equation because $S^*(u)$ appears both in the integrand and must satisfy the boundary condition — solved iteratively.

## Numerical Methods

### Binomial Tree (CRR)

The Cox-Ross-Rubinstein tree naturally handles early exercise. At each node $(i,j)$:

$$
V_{i,j} = \max\!\left((K - S_{i,j})^+,\; e^{-r\Delta t}[p \cdot V_{i+1,j+1} + (1-p) \cdot V_{i+1,j}]\right)
$$

The exercise boundary is extracted as the critical stock price at each time step where exercise becomes optimal.

### Finite Differences (PDE)

Discretize the PDE on a grid $(S_i, t_j)$ and at each time step enforce:

$$
V_i^j = \max\left(V_i^{j,\text{PDE}},\; (K - S_i)^+\right)
$$

Crank-Nicolson with projected SOR (successive over-relaxation) is standard. The PSOR algorithm simultaneously solves the linear system and enforces the constraint.

### Longstaff-Schwartz (Monte Carlo)

For path-dependent or high-dimensional American options, the [[monte-carlo-method]] with least-squares regression estimates the continuation value at each exercise date, enabling backward-induction exercise decisions.

## Put-Call Symmetry

For American options under geometric Brownian motion, the put-call symmetry relates the American put $P^{\text{Am}}$ with parameters $(S, K, r, q, \sigma)$ to an American call:

$$
P^{\text{Am}}(S, K, r, q, \sigma, T) = C^{\text{Am}}(K, S, q, r, \sigma, T)
$$

This allows pricing American calls (which are never early-exercised absent dividends) to be transformed into put problems.

## Connection to Optimal Stopping

The American option price is the solution to an optimal stopping problem:

$$
V(S,t) = \sup_{\tau \in [t,T]} \mathbb{E}^{\mathbb{Q}}\!\left[e^{-r(\tau - t)} (K - S_\tau)^+ \;\middle|\; S_t = S\right]
$$

where $\tau$ ranges over all stopping times. The optimal $\tau^*$ is the first hitting time of the exercise region: $\tau^* = \inf\{u \ge t : S_u \le S^*(u)\}$. The Snell envelope theory guarantees existence and uniqueness.

## Exercise Boundary Shape

```chart
{
  "type": "line",
  "xAxis": "time_to_maturity",
  "data": [
    {"time_to_maturity": "0.0", "boundary": 100.0},
    {"time_to_maturity": "0.1", "boundary": 89.5},
    {"time_to_maturity": "0.3", "boundary": 84.2},
    {"time_to_maturity": "0.5", "boundary": 81.5},
    {"time_to_maturity": "1.0", "boundary": 78.0},
    {"time_to_maturity": "2.0", "boundary": 75.2},
    {"time_to_maturity": "3.0", "boundary": 74.0},
    {"time_to_maturity": "5.0", "boundary": 72.8},
    {"time_to_maturity": "10.0", "boundary": 71.5}
  ],
  "lines": [
    {"dataKey": "boundary", "stroke": "#3b82f6", "name": "Exercise Boundary S*(t), K=100"}
  ]
}
```

## Practical Applications

1. **Equity options**: Most listed equity options in the US are American-style; the free boundary determines early exercise strategy around dividends.
2. **Convertible bonds**: The conversion feature is an American call on the issuer's stock, requiring free boundary methods.
3. **Real options**: Investment timing decisions (when to exercise an irreversible investment) are mathematically equivalent to American options.
4. **Mortgage prepayment**: Homeowners' right to refinance is an American interest rate option; prepayment models use similar free boundary techniques.

## Related Topics
- [[black-scholes]]
- [[black-scholes-derivations]]
- [[monte-carlo-method]]
- [[brownian-motion]]
- [[longstaff-schwartz]]
