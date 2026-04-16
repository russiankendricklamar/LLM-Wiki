---
title: "Garman-Kohlhagen Model"
category: "Pricing Models"
order: 152
lang: "en"
---
# Garman-Kohlhagen Model

The **Garman-Kohlhagen (GK) model** (1983) extends [[black-scholes]] to price European options on foreign exchange. The key insight is that holding foreign currency earns the foreign risk-free rate $r_f$, making it analogous to a stock paying a continuous dividend yield $q = r_f$.

## Setup and Assumptions

The spot FX rate $S_t$ is quoted as domestic currency per unit of foreign currency (e.g., USD/EUR = 1.10 means 1 EUR costs 1.10 USD). Under the domestic risk-neutral measure $\mathbb{Q}^d$:

$$
dS_t = (r_d - r_f)S_t\,dt + \sigma S_t\,dW_t
$$

where $r_d$ is the domestic risk-free rate, $r_f$ is the foreign risk-free rate, and $\sigma$ is the volatility of the exchange rate.

## Pricing Formulas

The European call (right to buy foreign currency) and put prices are:

$$
C = S e^{-r_f T} N(d_1) - K e^{-r_d T} N(d_2)
$$

$$
P = K e^{-r_d T} N(-d_2) - S e^{-r_f T} N(-d_1)
$$

where:

$$
d_1 = \frac{\ln(S/K) + (r_d - r_f + \sigma^2/2)T}{\sigma\sqrt{T}}, \qquad d_2 = d_1 - \sigma\sqrt{T}
$$

The forward FX rate is $F = S e^{(r_d - r_f)T}$, so the formulas can be rewritten in terms of $F$:

$$
C = e^{-r_d T}\bigl[F N(d_1) - K N(d_2)\bigr]
$$

## Put-Call Symmetry in FX

A domestic call on foreign currency is simultaneously a foreign put on domestic currency. Specifically, a call to buy 1 EUR at $K$ USD/EUR is equivalent to a put to sell $K$ USD at $1/K$ EUR/USD, with notional adjustment:

$$
C_d(S, K, \sigma, r_d, r_f) = K \cdot S \cdot P_f\!\left(\frac{1}{S}, \frac{1}{K}, \sigma, r_f, r_d\right)
$$

This symmetry is unique to FX and has no direct analogue in equity options.

## Delta Conventions

FX markets use multiple delta conventions, unlike equity markets:

### Spot Delta

$$
\Delta_{\text{spot}} = e^{-r_f T} N(d_1) \quad (\text{call}), \qquad \Delta_{\text{spot}} = -e^{-r_f T} N(-d_1) \quad (\text{put})
$$

### Forward Delta

$$
\Delta_{\text{fwd}} = N(d_1) \quad (\text{call}), \qquad \Delta_{\text{fwd}} = -N(-d_1) \quad (\text{put})
$$

### Premium-Adjusted Delta

When the option premium is paid in foreign currency (common for EM pairs), the effective hedge is:

$$
\Delta_{\text{pa}} = \Delta_{\text{spot}} - \frac{C}{S} \quad (\text{call})
$$

The premium-adjusted 25-delta call has a different strike than the unadjusted 25-delta call, which affects smile construction.

## ATM Conventions

| Convention | Definition | Usage |
|:-----------|:-----------|:------|
| ATMF (at-the-money forward) | $K = F = Se^{(r_d - r_f)T}$ | Most common in interbank |
| DNS (delta-neutral straddle) | $K$ such that $\Delta_C + \Delta_P = 0$ | Straddle quote convention |
| ATMS (at-the-money spot) | $K = S$ | Retail, some EM markets |

For ATMF, $\Delta_{\text{fwd}} = N(\sigma\sqrt{T}/2) \approx 0.50 + 0.20\sigma\sqrt{T}$ for small $\sigma\sqrt{T}$.

## Volatility Smile: Risk Reversals and Butterflies

The FX options market quotes the volatility smile through three instruments:

**ATM volatility** ($\sigma_{\text{ATM}}$): sets the overall level.

**25-delta risk reversal**:

$$
\text{RR}_{25} = \sigma_{25\Delta C} - \sigma_{25\Delta P}
$$

Measures the skew — positive RR means the market prices upside moves (foreign currency appreciation) more expensively.

**25-delta butterfly**:

$$
\text{BF}_{25} = \frac{\sigma_{25\Delta C} + \sigma_{25\Delta P}}{2} - \sigma_{\text{ATM}}
$$

Measures the convexity (smile curvature). A positive butterfly indicates fat tails relative to Black-Scholes.

From $(\sigma_{\text{ATM}}, \text{RR}_{25}, \text{BF}_{25})$, one recovers individual strikes' implied vols and builds the full smile surface.

## Vanna-Volga Method

For pricing exotic FX options consistently with the smile, the **vanna-volga** approach adds corrections to the GK price using three vanillas (25$\Delta$ put, ATM, 25$\Delta$ call):

$$
V_{\text{exotic}} \approx V_{\text{BS}} + \sum_{i=1}^{3} x_i \bigl(\tilde{V}_i - V_i^{\text{BS}}\bigr)
$$

where $x_i$ are weights chosen to match the exotic's vanna and volga to the replicating portfolio's. This is computationally efficient and widely used for first-cut pricing of barriers and digitals.

## Garman-Kohlhagen Greeks

$$
\Delta = e^{-r_f T} N(d_1), \qquad \Gamma = \frac{e^{-r_f T} N'(d_1)}{S\sigma\sqrt{T}}
$$

$$
\Theta = -\frac{Se^{-r_f T}N'(d_1)\sigma}{2\sqrt{T}} + r_f S e^{-r_f T}N(d_1) - r_d K e^{-r_d T}N(d_2)
$$

$$
\mathcal{V} = Se^{-r_f T}\sqrt{T}\,N'(d_1), \qquad \rho_d = KTe^{-r_d T}N(d_2)
$$

The foreign rate rho is $\rho_f = -STe^{-r_f T}N(d_1)$. See [[greeks-options]] for the general framework.

## Practical Applications

1. **Corporate hedging**: Exporters buy puts, importers buy calls on foreign revenue/cost streams. The GK model provides the benchmark price.
2. **Carry trade options**: Selling vol on high-carry pairs (long the high-yielder) and buying protection via OTM puts — the interest rate differential enters through $r_d - r_f$.
3. **Emerging market FX**: Premium-adjusted deltas, wide bid-ask, and large RR/BF quotes dominate; the vanna-volga method handles smile pricing efficiently.
4. **Central bank intervention**: Sudden FX moves create discontinuous gamma for barrier options, requiring dynamic risk limits.

## Related Topics
- [[black-scholes]]
- [[put-call-parity]]
- [[greeks-options]]
- [[option-strategies]]
- [[heston-model]]
