---
slug: "/finance/bond-options-gaussian"
title: "Bond Options in Gaussian Models"
category: "Pricing"
order: 136
lang: "en"
---

# Bond Options in Gaussian Models

Stock options are priced in Black-Scholes under the assumption that the **asset** is random while the **discount rate** is deterministic. For bond options both these assumptions must be inverted: the bond price at any moment is rigidly determined by the short rate, and the rate itself is a stochastic process. This requires a completely different modelling approach.

Shiryaev devotes a separate section to this, focusing on **one-factor Gaussian models** — Vasicek and Hull-White — where the rate evolves as an Ornstein-Uhlenbeck process and admits closed-form bond-option formulas.

## The Vasicek model

Proposed by Oldřich Vašíček in 1977:

$$dr_t = \kappa(\theta - r_t) \, dt + \sigma \, dW_t,$$

where $r_t$ is the short rate, $\kappa > 0$ is the speed of mean reversion, $\theta$ is the long-run level, and $\sigma > 0$ is volatility.

This is the **Ornstein-Uhlenbeck** process — Gaussian mean-reverting noise around $\theta$. Crucial feature: $r_t$ can become **negative**, considered a defect until the 2010s and a feature thereafter.

**Distribution.** $r_t$ conditional on $r_0$ is normal:

$$r_t \sim \mathcal{N}\!\left(\theta + (r_0 - \theta) e^{-\kappa t}, \; \frac{\sigma^2}{2\kappa}(1 - e^{-2\kappa t}) \right).$$

## Zero-coupon bond price

In the Vasicek model the price of a zero-coupon bond $P(t, T)$ maturing at $T$ has a closed form:

$$P(t, T) = e^{A(t,T) - B(t,T) \cdot r_t},$$

with

$$B(t, T) = \frac{1 - e^{-\kappa(T-t)}}{\kappa},$$

$$A(t, T) = \left(\theta - \frac{\sigma^2}{2\kappa^2} \right) (B(t,T) - (T-t)) - \frac{\sigma^2}{4\kappa} B(t,T)^2.$$

This formula follows from the representation $P(t, T) = \mathbb{E}^\mathbb{Q}\!\left[ \exp\!\left(-\int_t^T r_s \, ds \right) \,\big|\, \mathcal{F}_t \right]$ and the fact that $\int r_s \, ds$ of a Gaussian process is itself Gaussian, with a moment generating function in closed form.

## Bond option

A European call with strike $K$ and expiry $T_O$ on a zero-coupon bond with maturity $T_B > T_O$ has payoff $(P(T_O, T_B) - K)^+$.

**Jacobs-Jones formula (1986)** for the Vasicek model:

$$C_0 = P(0, T_B) \cdot \Phi(d_1) - K \cdot P(0, T_O) \cdot \Phi(d_2),$$

with

$$d_1 = \frac{1}{\sigma_P} \log\!\frac{P(0, T_B)}{K \cdot P(0, T_O)} + \frac{\sigma_P}{2}, \qquad d_2 = d_1 - \sigma_P,$$

and

$$\sigma_P^2 = \frac{\sigma^2}{2\kappa^3} \left(1 - e^{-2\kappa T_O} \right) \left(1 - e^{-\kappa(T_B - T_O)} \right)^2.$$

Structurally this is **exactly the [[black-scholes|Black-Scholes formula]]** with substitutions:

- $S_0 \leftrightarrow P(0, T_B)$,
- $K e^{-rT} \leftrightarrow K \cdot P(0, T_O)$,
- $\sigma\sqrt{T} \leftrightarrow \sigma_P$.

So a bond option is priced as "BS in correctly chosen variables." This follows from $P(t, T_B)$ being a log-normal process under the forward measure $\mathbb{Q}^{T_O}$.

## The Hull-White model

An extension of Vasicek consistent with the **observed zero-coupon yield curve** at time 0:

$$dr_t = \kappa(\theta(t) - r_t) \, dt + \sigma \, dW_t,$$

where $\theta(t)$ is chosen so that model prices $P(0, T)$ match the market. This is "no-arbitrage term structure" — the model does not guess but is **calibrated**.

All Vasicek formulas carry over with minimal change: $A(t, T)$ now depends on the observed curve, everything else stays. This made Hull-White the workhorse of interest-rate derivatives pricing in the 1990s.

## Change of measure: the forward measure $T$

The key to formula simplicity is the move from the **spot martingale measure** $\mathbb{Q}$ (whose numéraire is the bank account $B_t = \exp(\int r_s ds)$) to the **forward measure** $\mathbb{Q}^T$ (whose numéraire is the $T$-bond $P(t, T)$).

Under $\mathbb{Q}^T$:

$$\frac{P(t, T_B)}{P(t, T)} \quad \text{is a martingale}.$$

This means option prices with expiry $T$ on any underlying can be computed as $\mathbb{E}^{\mathbb{Q}^T}[\text{payoff}] \cdot P(0, T)$ — without needing to integrate the stochastic short rate. The change of measure via [[girsanov-semimartingales|Girsanov]] is transparent because the density $d\mathbb{Q}^T/d\mathbb{Q}$ is an exponential martingale.

This trick (introduced by El Karoui and Geman-Rochet in 1995) turned interest-rate derivative pricing from horrific stochastic integrals into a problem solvable in the forward measure.

## American bond option

For an **American** bond option the problem reduces again to a [[stefan-problem-american|Stefan problem]] — but with extra complication: the underlying "price" here is itself a non-linear function of the short rate $r_t$. The free boundary lives in the $(t, r)$ plane, and the PDE is a one-factor diffusion (Kolmogorov backward equation in $r$).

No closed-form analytics; finite differences or a binomial tree on the rate (Ho-Lee model as the simplest variant) are used.

## Connection to multi-factor models

One-factor Gaussian models (Vasicek, Hull-White) are only the starting point. Multi-factor extensions (Hull-White 2-factor, Cox-Ingersoll-Ross, [[cir-hull-white|CIR]]) admit correlated shocks at different parts of the yield curve. The fully general framework is the **HJM framework** (Heath-Jarrow-Morton, 1992), modelling the evolution of the entire forward curve as a multi-dimensional diffusion. Gaussian models are the special case of HJM with deterministic volatility.

## Related Articles

- [[black-scholes]] — canonical formula whose analogue is obtained for bonds.
- [[cir-hull-white]] — close cousins among short-rate models.
- [[brownian-motion]] — stochastic foundation of the OU process.
- [[girsanov-semimartingales]] — technique for changing to the forward measure.
- [[stefan-problem-american]] — extension to American bond options.
- [[ftap-first-fundamental-theorem]] — theoretical foundation for the existence of the forward measure.
- [[dv01]] — practical sensitivity measure of a bond to the rate.
