---
slug: "/finance/change-of-numeraire"
title: "Change of Numeraire"
category: "Pricing Models"
order: 144
lang: "en"
---
# Change of Numeraire

The **change of numeraire** technique is one of the most powerful tools in derivative pricing. It states that the price of any traded asset divided by a chosen numeraire becomes a martingale under the measure associated with that numeraire. By switching numeraires, intractable pricing problems reduce to simple expectations, eliminating the need to model discount factors inside the conditional expectation.

## Prerequisites

[[black-scholes]], [[girsanov-semimartingales]], [[brownian-motion]]

## The Fundamental Theorem

Let $N_t > 0$ be a traded asset (the **numeraire**) and $\mathbb{Q}^N$ the associated equivalent martingale measure. For any traded asset $V_t$:

$$
\frac{V_t}{N_t} = \mathbb{E}^{\mathbb{Q}^N}\!\left[\frac{V_T}{N_T}\;\middle|\;\mathcal{F}_t\right]
$$

This is the **numeraire-invariance principle**: the choice of numeraire changes the measure but not the arbitrage-free price. Different numeraires simplify different problems.

## Standard Numeraire Choices

| Numeraire $N_t$ | Measure | Drift of $S_t$ | Primary Use |
|:----------------|:--------|:----------------|:------------|
| Money market $B_t = e^{\int_0^t r_s\,ds}$ | Risk-neutral $\mathbb{Q}$ | $r_t S_t$ | General pricing |
| Zero-coupon bond $P(t,T)$ | $T$-forward $\mathbb{Q}^T$ | $(r_t + \sigma_S \sigma_P \rho)S_t$ | Bond options, caplets |
| Stock $S_t$ | Stock measure $\mathbb{Q}^S$ | $(r_t + \sigma_S^2)S_t$ | Exchange options |
| Annuity $A(t)$ | Swap measure $\mathbb{Q}^A$ | — | Swaptions |

## Radon-Nikodym Derivative Between Measures

The change from measure $\mathbb{Q}^M$ (numeraire $M$) to $\mathbb{Q}^N$ (numeraire $N$) is governed by:

$$
\frac{d\mathbb{Q}^N}{d\mathbb{Q}^M}\bigg|_{\mathcal{F}_t} = \frac{N_t / N_0}{M_t / M_0}
$$

This is a positive $\mathbb{Q}^M$-martingale with expectation one, guaranteeing equivalence of the two measures.

## The T-Forward Measure

Choose $N_t = P(t,T)$, the price of a zero-coupon bond maturing at $T$. Since $P(T,T) = 1$:

$$
V_0 = P(0,T)\,\mathbb{E}^{\mathbb{Q}^T}[V_T \mid \mathcal{F}_0]
$$

The discount factor $P(0,T)$ exits the expectation. Under $\mathbb{Q}^T$ the forward price $F(t,T) = S_t / P(t,T)$ is a martingale, so:

$$
\mathbb{E}^{\mathbb{Q}^T}[S_T] = F(0,T) = \frac{S_0}{P(0,T)}
$$

**Application to caplets.** A caplet pays $\delta(L(T,T,T+\delta) - K)^+$ at $T+\delta$. Under $\mathbb{Q}^{T+\delta}$ the forward LIBOR rate $L(t,T,T+\delta)$ is a martingale, and the caplet price is:

$$
\text{Caplet} = \delta\, P(0,T+\delta)\,\mathbb{E}^{\mathbb{Q}^{T+\delta}}\!\left[(L_T - K)^+\right]
$$

If $L$ is lognormal under $\mathbb{Q}^{T+\delta}$, this is Black's formula directly.

## Drift Change via Girsanov

Under $\mathbb{Q}^M$, let $W_t^M$ be Brownian. Under $\mathbb{Q}^N$:

$$
dW_t^N = dW_t^M - \sigma_t^{N/M}\,dt
$$

where $\sigma_t^{N/M}$ is the volatility of the ratio $N_t/M_t$. This drift adjustment is the concrete mechanism by which the numeraire change modifies SDEs.

## The Swap Measure and Swaptions

For a payer swaption with swap rate $S_{\alpha,\beta}(t)$ and annuity $A_{\alpha,\beta}(t) = \sum_{i=\alpha+1}^{\beta} \delta_i P(t,T_i)$:

$$
\text{Swaption} = A_{\alpha,\beta}(0)\,\mathbb{E}^{\mathbb{Q}^A}\!\left[(S_{\alpha,\beta}(T_\alpha) - K)^+\right]
$$

Under the annuity measure $\mathbb{Q}^A$, the swap rate is a martingale. Assuming lognormality yields the **swaption Black formula**.

## Quanto Adjustment

For a foreign asset $S^f$ with domestic numeraire, the change from foreign $T$-forward measure to domestic $T$-forward measure introduces:

$$
\mathbb{E}^{\mathbb{Q}^T_d}[S^f_T] = \mathbb{E}^{\mathbb{Q}^T_f}[S^f_T] \cdot e^{-\rho_{S,X}\sigma_S \sigma_X T}
$$

where $\rho_{S,X}$ is the correlation between the foreign asset and the exchange rate, and $\sigma_X$ is the exchange rate volatility. This **quanto adjustment** arises naturally from the Girsanov drift shift.

## Practical Recipe

To price a derivative $V_T$ using numeraire change:

1. **Identify the payoff** and which random variables appear.
2. **Choose the numeraire** that makes the key variable a martingale (e.g., $P(t,T)$ for forward rates, annuity for swap rates).
3. **Compute the Radon-Nikodym derivative** $dQ^N/dQ$.
4. **Adjust drifts** of all SDEs using Girsanov.
5. **Evaluate** $V_0 = N_0 \cdot \mathbb{E}^{\mathbb{Q}^N}[V_T / N_T]$.

## Key Identities Summary

$$
\boxed{V_0 = N_0\,\mathbb{E}^{\mathbb{Q}^N}\!\left[\frac{V_T}{N_T}\;\middle|\;\mathcal{F}_0\right]}
$$

$$
\boxed{\frac{d\mathbb{Q}^N}{d\mathbb{Q}^M}\bigg|_{\mathcal{F}_T} = \frac{N_T\, M_0}{M_T\, N_0}}
$$

$$
\boxed{\text{Forward price } F^N(t,T) = \frac{V_t}{N_t} \text{ is a } \mathbb{Q}^N\text{-martingale}}
$$

## Related Topics

- [[black-scholes]]
- [[girsanov-semimartingales]]
- [[caps-floors-swaptions]]
- [[short-rate-models]]
- [[swaps]]
