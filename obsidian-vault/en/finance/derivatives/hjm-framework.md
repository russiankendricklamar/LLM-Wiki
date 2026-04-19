---
slug: "/finance/hjm-framework"
title: "HJM Framework"
category: "Pricing Models"
order: 145
lang: "en"
---
# HJM Framework

The **Heath-Jarrow-Morton (HJM) framework** (1992) models the entire forward rate curve $f(t,T)$ directly, rather than specifying a short-rate process. Its central result -- the **HJM drift condition** -- shows that no-arbitrage uniquely determines the drift of forward rates in terms of their volatility. Every arbitrage-free term structure model is a special case of HJM, making it the unifying framework for interest rate modelling.

## Prerequisites

[[brownian-motion]], [[girsanov-semimartingales]], [[short-rate-models]]

## Forward Rate Dynamics

The instantaneous forward rate $f(t,T)$ -- the rate at time $t$ for instantaneous borrowing at future time $T$ -- evolves under the physical measure $\mathbb{P}$ as:

$$
df(t,T) = \alpha(t,T)\,dt + \sigma(t,T)\cdot dW_t^{\mathbb{P}}
$$

where $\sigma(t,T)$ may be vector-valued (multiple Brownian drivers) and $W_t^{\mathbb{P}}$ is a $d$-dimensional Brownian motion.

The zero-coupon bond price is:

$$
P(t,T) = \exp\!\left(-\int_t^T f(t,u)\,du\right)
$$

and the short rate is $r_t = f(t,t)$.

## The HJM Drift Condition

Under the risk-neutral measure $\mathbb{Q}$, no-arbitrage forces:

$$
\boxed{\alpha^{\mathbb{Q}}(t,T) = \sigma(t,T)\cdot\int_t^T \sigma(t,s)\,ds}
$$

This is the **HJM drift restriction**: once the volatility structure $\sigma(t,T)$ is specified, the drift is fully determined. There is no freedom in choosing the drift under $\mathbb{Q}$ -- it is a consequence of the volatility and no-arbitrage alone.

Under $\mathbb{Q}$ the forward rate SDE becomes:

$$
df(t,T) = \sigma(t,T)\cdot\int_t^T \sigma(t,s)\,ds\,dt + \sigma(t,T)\cdot dW_t^{\mathbb{Q}}
$$

## Bond Price Dynamics

Applying Ito's lemma to $P(t,T) = \exp(-\int_t^T f(t,u)\,du)$:

$$
\frac{dP(t,T)}{P(t,T)} = r_t\,dt - \Sigma(t,T)\cdot dW_t^{\mathbb{Q}}
$$

where the bond volatility is $\Sigma(t,T) = -\int_t^T \sigma(t,s)\,ds$. Under $\mathbb{Q}$, the discounted bond price is a martingale, consistent with the fundamental theorem.

## Short-Rate Models as Special Cases

Every short-rate model corresponds to a particular choice of $\sigma(t,T)$:

| Model | $\sigma(t,T)$ | Markovian? |
|:------|:--------------|:-----------|
| Ho-Lee | $\sigma$ (constant) | Yes (1 factor) |
| Hull-White | $\sigma e^{-a(T-t)}$ | Yes (1 factor) |
| Vasicek | $\sigma e^{-a(T-t)}$ | Yes (1 factor) |
| CIR | $\sigma\sqrt{r_t}\,e^{-a(T-t)}$ | Yes (1 factor) |

The exponential decay $e^{-a(T-t)}$ produces mean-reverting short rates. General HJM volatilities can yield non-Markovian dynamics.

## Markovian HJM: Ritchken-Sankarasubramanian

The HJM model is infinite-dimensional in general (the entire curve is the state). Ritchken and Sankarasubramanian (1995) showed that the model reduces to a **finite-dimensional Markov process** if and only if the volatility has the separable form:

$$
\sigma(t,T) = h(t)\,g(T)
$$

for scalar functions $h, g$. More generally, for $n$ factors with this separability, the state is $(r_t, \phi_1(t), \ldots, \phi_n(t))$ where $\phi_i$ are auxiliary variance state variables satisfying ODEs. This enables PDE-based pricing (lattices, finite differences) rather than requiring Monte Carlo.

## The LIBOR Market Model Connection

The LIBOR Market Model (LMM, Brace-Gatarek-Musiela 1997) is a discrete-tenor HJM: it models forward LIBOR rates $L(t, T_i, T_{i+1})$ directly. Each forward rate is a martingale under its own $T_{i+1}$-forward measure. The HJM drift condition, discretised to tenor intervals, produces the well-known LMM drift:

$$
\mu_i^{T_j}(t) = -\sum_{k=i+1}^{j} \frac{\delta_k L_k(t) \sigma_i(t)\cdot\sigma_k(t)}{1 + \delta_k L_k(t)}
$$

where the drift of $L_i$ under $\mathbb{Q}^{T_j}$ depends on all forward rates between $i$ and $j$.

## Monte Carlo Implementation

Since general HJM is non-Markovian, Monte Carlo is the standard numerical method:

1. Discretise the forward curve on a grid $0 = T_0 < T_1 < \cdots < T_N$.
2. At each time step, update all forward rates using the HJM drift condition.
3. Compute $r_t = f(t,t)$ by interpolation for discounting.
4. Payoff evaluation and averaging.

**Computational cost**: $O(N_{\text{steps}} \times N_{\text{tenors}} \times N_{\text{paths}})$, which can be expensive for exotic rate products.

## Practical Limitations

- **Infinite-dimensional state**: general HJM cannot be solved by PDE methods; lattice pricing is impossible without Markovian restrictions.
- **Volatility specification**: the entire function $\sigma(t,T)$ must be specified or calibrated -- a much richer object than a few parameters.
- **Calibration**: fitting to swaption and cap surfaces simultaneously is challenging; the LMM (a discrete HJM) is preferred in practice.
- **Negative rates**: Gaussian HJM allows negative rates; shifted-lognormal or stochastic volatility extensions are needed post-2010.

## Key Result

$$
\boxed{df(t,T) = \sigma(t,T)\!\left(\int_t^T \sigma(t,s)\,ds\right)dt + \sigma(t,T)\,dW_t^{\mathbb{Q}}}
$$

The drift of every forward rate is slaved to the volatility function -- this single equation encodes the entire no-arbitrage term structure theory.

## Related Topics

- [[short-rate-models]]
- [[change-of-numeraire]]
- [[caps-floors-swaptions]]
- [[swaps]]
- [[brownian-motion]]
