---
title: "Volatility Smile"
category: "Pricing"
order: 150
lang: "en"
slug: "volatility-smile"
growth: "seedling"
---

## Definition and Empirical Observation

Implied volatility $\sigma_{\text{impl}}(K, T)$ is the value of volatility that, when plugged into the [[black-scholes|Black-Scholes]] formula, reproduces the market price of an option:

$$C_{\text{BS}}(S, K, T, \sigma_{\text{impl}}) = C_{\text{market}}$$

The Black-Scholes model assumes that all options with the same maturity $T$ should have a single, strike-independent volatility $\sigma$. Yet empirically, $\sigma_{\text{impl}}(K)$ is a non-flat function that exhibits a striking pattern.

**The smile shape varies by asset class:**
- **FX options**: symmetric U-shaped smile; OTM calls and OTM puts carry similar premiums
- **Equity options**: asymmetric smile (skew); OTM puts are noticeably more expensive than OTM calls
- **Commodity options**: sometimes inverted skew (OTM calls pricier than puts)

## Historical Origin: The 1987 Crash

Prior to October 1987, implied volatility was approximately flat: $\sigma_{\text{impl}}(K) \approx \sigma$ across all strikes. After the largest single-day market crash (Black Monday, −22.6%), the pricing structure of options underwent a fundamental regime shift.

**Negative skew** became a persistent feature of equity option markets. Out-of-the-money puts acquired a premium for **crash risk**: the market reconsidered whether log-normal returns truly capture the tail behavior. The left tail of actual returns is fatter than log-normal theory predicts.

This structural break is a rare, documented inflection point where an exogenous shock permanently altered the shape of derivative prices. It remains the clearest evidence that volatility smile encodes learned market risk.

## Skew Metrics: Risk Reversal

A standard quantitative measure of smile asymmetry is the **25-delta risk reversal**:

$$\text{RR}_{25} = \sigma_{\text{impl}}(25\Delta \text{ call}) - \sigma_{\text{impl}}(25\Delta \text{ put})$$

where deltas are defined in standard option convention.

- **Equity markets**: $\text{RR}_{25} < 0$ (puts are more expensive)
- **FX markets**: typically near zero or slightly positive in quiet periods
- **Information content**: directly reflects asymmetric tail expectations; used as a barometer of market sentiment and tail risk premium

## Why Black-Scholes Fails: Fat Tails and Skewness

The Black-Scholes model assumes log-normal returns:

$$\ln(S_T / S_0) \sim \mathcal{N}(\mu T, \sigma^2 T)$$

In reality, actual returns deviate in three critical ways:

1. **Excess kurtosis** (leptokurtosis): extreme moves occur with higher probability than the normal distribution predicts. Tail probability is heavier.

2. **Negative skewness**: the left tail (downward moves) is thicker than the right tail (upward moves). This creates demand for downside insurance (puts) against tail events.

3. **Stochastic volatility**: volatility itself evolves randomly over time; large returns often coincide with volatility jumps, violating the constant $\sigma$ assumption.

The smile is the market's pragmatic response: it prices these fat-tail and skew effects implicitly *within* the deterministic Black-Scholes framework.

## Theory: Risk-Neutral Density and Breeden-Litzenberger

The shape of the smile directly encodes the shape of the market's risk-neutral density of future spot prices. By the Breeden-Litzenberger formula:

$$q(S_T) = e^{rT} \frac{\partial^2 C(K)}{\partial K^2}\bigg|_{K=S_T}$$

If the risk-neutral distribution has fat tails and/or negative skew, then the second derivative of call price with respect to strike is elevated on the wings, producing an implied volatility smile.

The smile is a visible signature of the option market's collective belief about the true distribution of returns — more sophisticated than the simple log-normal.

## Explanatory Models

### 1. Stochastic Volatility ([[heston-model|Heston Model]])

The volatility process $v_t$ itself follows a diffusion:

$$dS_t = \mu S_t \, dt + \sqrt{v_t} S_t \, dW_t^{(1)}$$
$$dv_t = \kappa(\bar{v} - v_t) \, dt + \xi\sqrt{v_t} \, dW_t^{(2)}$$

with correlation $\rho$ between the two Brownian motions. Negative correlation $(\rho < 0)$ is key: when the spot declines, volatility spikes, making further downside cheaper from a diffusion standpoint but more expensive in insurance terms — puts rise sharply, generating negative skew.

### 2. Jump Diffusion ([[merton-jump-diffusion|Merton Jump-Diffusion]])

The spot dynamics include clustered jumps:

$$dS_t = (\mu - \lambda \kappa) S_t \, dt + \sigma S_t \, dW_t + J_t \, dN_t$$

where $N_t$ is a Poisson process and $J_t$ is the jump size. If the average jump is negative, the left tail thickens and OTM puts become expensive.

### 3. Local Volatility ([[dupire-local-vol|Dupire's Local Volatility]])

$\sigma(S, t)$ becomes a deterministic, state-dependent function calibrated to exactly reproduce the observed smile surface:

$$\sigma_{\text{local}}(K, T) = \sqrt{\frac{2\frac{\partial C}{\partial T} + \mu S \frac{\partial C}{\partial S}}{S^2 \frac{\partial^2 C}{\partial K^2}}}$$

Local volatility perfectly reproduces today's smile by construction but is model-agnostic and loses predictive power about how the smile will evolve. It typically underprices distant-dated or far-OTM options.

## Sticky Strike vs. Sticky Delta

When the spot price moves, traders follow two competing conventions about how implied volatility evolves:

- **Sticky strike**: $\sigma_{\text{impl}}(K, T)$ remains fixed at an absolute strike level $K$. As the spot rises 1%, the ATM IV shifts downward (sticky strike convention).

- **Sticky delta**: volatility stays a function of delta. When the spot rises, the strike corresponding to a fixed delta (e.g., 25Δ) also drifts upward.

This distinction matters for gamma and vega hedging. The choice encodes implicit assumptions about the mechanism driving the smile. In equity markets with strong negative skew, behavior is closer to sticky strike (see [[greeks-options]]).

## Calibration and the Volatility Surface

In production systems, the entire matrix of option prices across strikes and maturities is parameterized by a single smooth function — the [[volatility-surface|volatility surface]] $\Sigma(K, T)$.

Common parametrizations include **SABR** ([[sabr-model]]) and **SVI** (Stochastic Volatility Inspired):

$$\sigma_{\text{impl}}(k) = \sigma_{\text{atm}} \left[ 1 + \rho \zeta k + \frac{\zeta^2 + \rho^2}{2} k^2 + \frac{\zeta^3 + 3\rho^2\zeta}{6} k^3 + \ldots \right]$$

where $k = \ln(K/F)$ is log-moneyness relative to the forward $F$.

Calibration must satisfy:
- **No-arbitrage constraints**: the surface must be monotone-increasing in strike
- **Sticky dynamics**: the surface tomorrow must evolve consistently with tomorrow's spot, avoiding calendar arbitrage

## Connections and Further Topics

The volatility smile connects to:
- [[rough-volatility|Rough volatility]] and microstructure of realized volatility
- [[greeks-options|Greeks]] (vega, volga) and hedging strategies
- Jump-diffusion stochastic volatility models (SVJD)
- Optimal hedging problems under smile conditions

The smile is not a flaw in the model — it is a feature, a window into the true risk distribution that the market collectively prices.
