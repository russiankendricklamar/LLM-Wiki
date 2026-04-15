---
title: "Stylized Facts of Financial Returns"
category: "Risk Management"
order: 144
lang: "en"
slug: "stylized-facts-returns"
---

# Stylized Facts of Financial Returns

## Overview

"Stylized facts" are robust statistical regularities observed across financial markets — different assets, different exchanges, and different epochs. They are called "stylized" because they hold **universally** — despite the specifics of every individual market, the basic properties of log-returns are the same.

[[shiryaev-stochastic-finance|Shiryaev]] (Vol. 1, Ch. IV) devotes an entire chapter to a systematic exposition of these facts as the **empirical foundation** on which any reasonable price model must rest. The canonical 11-point list was compiled by Rama Cont in a 2001 review and has since become an industry standard.

Understanding the stylized facts is critical because they **rule out** specific models: the classical Gaussian Black-Scholes model contradicts almost every one of them.

## Canonical list (Rama Cont, 2001)

### 1. Absence of autocorrelation in returns

The linear autocorrelation $\text{Corr}(r_t, r_{t+\tau})$ is essentially zero for $\tau \geq$ a few minutes. This is consistent with the weak form of [[efficient-market-hypothesis|EMH]] and justifies martingale modelling of prices.

**Exception:** at very short scales (ticks) there is negative microstructure autocorrelation (bid-ask bounce), but it disappears at daily resolution.

### 2. Heavy tails

The log-return distribution has tails decaying as a **power law**: $\mathbb{P}(|r| > x) \sim C/x^\alpha$ with $\alpha \in (3, 5)$ for most assets. Much slower than the exponential decay of the normal distribution.

Consequence: "6σ events" happen on stock markets several times a year, not once per million years as the normal law predicts. The crises of 1987, 2008, and 2020 are the obvious illustrations.

### 3. Volatility clustering

"Large changes are followed by large changes of either sign, and small by small" (Mandelbrot, 1963). Despite zero autocorrelation in **returns**, the **squared** or **absolute** returns are strongly autocorrelated, and that correlation decays slowly (power law, not exponential).

This birthed the conditional heteroscedasticity literature: ARCH (Engle, 1982), GARCH, EGARCH, and stochastic volatility (Heston, SABR, rough volatility). See [[arch-models]], [[garch-models]], [[heston-model]].

### 4. Long memory of volatility

The autocorrelation of $|r_t|$ or $r_t^2$ decays as a power:

$$\text{Corr}(|r_t|, |r_{t+\tau}|) \sim \tau^{-\beta}, \quad \beta \in (0.2, 0.4),$$

corresponding to a [[hurst-exponent|Hurst exponent]] $H \approx 0.7{-}0.9$ for volatility. This long memory is not captured by simple GARCH(1,1) and requires FIGARCH or [[self-similarity-fractality|fractional]] processes.

### 5. Leverage effect

Past negative returns increase future volatility more than past positive ones. That is, $\text{Corr}(r_t, |r_{t+\tau}|) < 0$ for $\tau > 0$.

This is the asymmetry of "bad news": markets react more strongly to drops than to rises. Explained via financial leverage theory (a leveraged firm becomes "riskier" when its share price falls). EGARCH and GJR-GARCH add this effect explicitly.

### 6. Aggregational Gaussianity

As the time interval grows (from ticks to minutes, minutes to hours, hours to months) the return distribution **becomes closer to normal**. CLT in action: at large scales independent pieces average out.

But convergence is slow: even monthly returns have visible heavy tails, and the normal approximation only works well at annual scales and above.

### 7. Intermittency

Volatility has a "jumpy" structure: periods of relative calm are punctuated by short bursts. This empirically distinguishes from smooth constant-volatility models.

Related to **quadratic variation**: realized volatility measured on high-frequency data shows clear "jumps," giving rise to econometric jumps literature — bipower variation, Barndorff-Nielsen-Shephard jump tests. See [[bipower-variation]].

### 8. Volume-volatility nonlinearity

Trading volume and volatility are strongly positively correlated — the "volume-volatility relationship." High volumes happen on high volatility and vice versa. Explanation: both volume and volatility are functions of the flow of new information.

### 9. Calendar effects

Volatility is seasonal: higher at the start and end of trading sessions (U-shaped intraday volatility profile), higher on Mondays, lower in summer. These effects are systematic but small.

### 10. Tail dependence

Cross-sectionally, in moments of market stress **correlations between assets jump up** (correlation breakdown). This means diversification works worst exactly when needed most. Modelled via [[copula-models|copulas]] and multivariate t-distributions.

### 11. Multifractality

Log-returns have a **multifractal** scaling spectrum: different moments $\mathbb{E}[|r_t|^q]$ scale differently with $t$. This is a finer property than simple self-similarity and points to the fact that volatility-of-volatility is also non-constant.

Plain fBm is monofractal; real data is multifractal. This led to **multifractal models** (Mandelbrot-Calvet-Fisher, 1997).

## What these facts exclude

The 1-11 list essentially kills the classical Gaussian Black-Scholes model:

- (2) kills normality.
- (3) and (4) kill constant volatility.
- (5) adds asymmetry.
- (8) and (10) show complex multivariate structure.
- (11) adds multifractality.

All modern models are descended from these facts: ARCH/GARCH (facts 3, 4), stochastic volatility (Heston, 3-5), [[levy-esscher-continuous|Lévy processes]] (2), [[heston-model|Heston]] and [[hyperbolic-distributions|GH distributions]] (2-5), rough volatility (4, 11), copulas (10).

Each extension of the classical model is an attempt to "stitch" one or more stylized facts into the formalism.

## Modern programme

In practical modelling no one tries to build a "single correct" model that captures all 11 facts at once. Instead:

- **For risk-management purposes** — heavy-tail models and copulas (facts 2, 10).
- **For option pricing** — stochastic volatility or Lévy processes (facts 2-5).
- **For volatility forecasting** — GARCH or HAR-RV (facts 3, 4, 6).
- **For market making** — high-frequency models with intermittency (fact 7) and microstructure.

This is **not a theoretical defect** but a recognition that different tasks require different approximations to reality.

## Related Topics

- [[efficient-market-hypothesis]] — theoretical context that fact 1 supports while facts 3-5 challenge.
- [[stable-distributions]] — theoretical motivation for heavy tails via the generalized CLT.
- [[hyperbolic-distributions]] — practical heavy-tail model.
- [[self-similarity-fractality]] — fractal foundation of facts 4 and 11.
- [[arch-models]], [[garch-models]] — models for fact 3.
- [[heston-model]] — stochastic volatility.
- [[hurst-exponent]] — long-memory estimation.
- [[bipower-variation]] — measuring jumps (fact 7).
- [[copula-models]] — modelling tail dependence (fact 10).
- [[markowitz-mean-variance]] — model broken by facts 2 and 10.
- [[capm]] — also broken by facts 5 and 11.
