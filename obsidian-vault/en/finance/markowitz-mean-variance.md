---
title: "Markowitz Mean-Variance Portfolio Theory"
category: "Pricing Models"
order: 138
lang: "en"
---

# Markowitz Mean-Variance Portfolio Theory

Markowitz portfolio theory (1952) is the first mathematically rigorous theory of diversification. Harry Markowitz proposed that **a rational investor should jointly optimize expected return and risk** (interpreted as variance) and showed how to do so as a quadratic optimization problem. He received the Nobel Prize in 1990 for this work.

[[shiryaev-stochastic-finance|Shiryaev]] includes Markowitz as the first "calculation" in the neoclassical theory of finance. It is a **pre-arbitrage** model: it does not invoke no-arbitrage or martingale measures, relying only on statistical moments of returns.

## Setup

Suppose $n$ assets trade with (random) returns $r_1, \ldots, r_n$. The investor forms a portfolio with weights $w = (w_1, \ldots, w_n)$, $\sum_i w_i = 1$. Portfolio return:

$$r_p = \sum_{i=1}^n w_i r_i = w^\top r.$$

Mean and variance:

$$\mu_p = w^\top \mu, \qquad \sigma_p^2 = w^\top \Sigma w,$$

where $\mu = \mathbb{E}[r]$ is the vector of mean returns and $\Sigma = \text{Cov}(r)$ the covariance matrix.

**Markowitz problem:** at a fixed expected return $\mu_p = \mu_0$ minimize variance:

$$\min_w \; w^\top \Sigma w \quad \text{s.t.} \quad w^\top \mu = \mu_0, \; w^\top \mathbf{1} = 1.$$

This is a **quadratic optimization** with two linear constraints. The Lagrangian solution:

$$w^* = \frac{1}{D} \big((C \cdot \mu_0 - B) \, \Sigma^{-1} \mathbf{1} + (A - B \cdot \mu_0) \, \Sigma^{-1} \mu \big),$$

with $A = \mathbf{1}^\top \Sigma^{-1} \mathbf{1}$, $B = \mathbf{1}^\top \Sigma^{-1} \mu$, $C = \mu^\top \Sigma^{-1} \mu$, $D = AC - B^2$.

## Efficient frontier

As the target $\mu_0$ varies, the optimal variances $\sigma_p^*(\mu_0)^2$ trace out a **hyperbola** in the $(\sigma, \mu)$ plane. Its upper branch is the **efficient frontier**: the set of portfolios delivering maximum expected return at a given risk level (or minimum risk at a given return).

Frontier equation:

$$\sigma_p^2 = \frac{A \cdot \mu_p^2 - 2B \cdot \mu_p + C}{D}.$$

The minimum-variance portfolio (vertex of the hyperbola) sits at $\mu_{\min} = B/A$ with variance $\sigma_{\min}^2 = 1/A$.

## Adding a risk-free asset

If a risk-free asset with return $r_f$ is available, the efficient frontier becomes a **straight line** in the $(\sigma, \mu)$ plane — the **Capital Market Line (CML)**:

$$\mu_p = r_f + \frac{\mu_M - r_f}{\sigma_M} \cdot \sigma_p,$$

where $(\sigma_M, \mu_M)$ is the tangency point of the CML with the Markowitz hyperbola. This point corresponds to the **"market portfolio"** $w_M$. Its existence is the foundation of [[capm|CAPM]]: every rational investor holds a combination of the risk-free asset and the market portfolio in proportions determined by their risk appetite.

## Sharpe ratio

The portfolio **Sharpe ratio**:

$$\text{SR} = \frac{\mu_p - r_f}{\sigma_p}.$$

This is "excess return per unit of risk." The market portfolio $w_M$ is the **maximum-Sharpe portfolio** among all admissible:

$$w_M = \arg\max_w \frac{w^\top \mu - r_f}{\sqrt{w^\top \Sigma w}}.$$

In matrix form: $w_M \propto \Sigma^{-1}(\mu - r_f \mathbf{1})$. This formula is the **heart** not only of Markowitz but of all factor literature, risk parity, and many practical allocators.

## Limitations and extensions

**Weaknesses of classical Markowitz:**

1. **Sensitivity to inputs.** Small errors in estimates of $\mu$ produce huge changes in $w^*$. In practice optimal weights often turn out extreme (large shorts, concentration in one or two assets).
2. **Variance as a risk measure.** Symmetric and quadratic — fails to capture the asymmetry of real distributions and underestimates rare catastrophic losses.
3. **Static.** A one-period model that does not account for market evolution over time.
4. **Gaussianity.** Correctness of mean-variance optimization requires returns to be elliptically distributed (e.g. normal); real returns have heavy tails — see [[stylized-facts-returns]].

**Modern extensions:**

- **Black-Litterman (1992)** — Bayesian approach combining CAPM equilibrium expectations with the investor's subjective "views." Solves the $\mu$-sensitivity problem. See [[bayesian-black-litterman]].
- **Hierarchical Risk Parity (López de Prado, 2016)** — hierarchical clustering of assets and risk allocation along the tree, without inverting $\Sigma$. See [[hierarchical-risk-parity]].
- **CVaR/ES optimization** — replace variance by conditional expected loss (tail beyond a quantile). See [[cornish-fisher-cvar]].
- **Robust optimization** — incorporates uncertainty in $\mu, \Sigma$ via a minimax formulation.

## Historical role

Markowitz launched a conceptual revolution: before him "investment analysis" was a collection of stories about specific stocks; after him it became a **mathematical discipline** with an explicit optimality criterion. This opened the way to [[capm|CAPM]] (Sharpe-Lintner-Mossin, 1964), [[apt-ross|APT]] (Ross, 1976), and all of modern factor investing.

From [[shiryaev-stochastic-finance|Shiryaev's]] viewpoint Markowitz is the prototypical **pre-stochastic** theory: everything formulated via moments, no processes, no martingales. This is the "statics" of financial mathematics that was later embedded in the dynamic martingale language.

## Related Articles

- [[capm]] — equilibrium pricing model, a direct consequence of adding a risk-free asset to Markowitz.
- [[apt-ross]] — arbitrage alternative not requiring equilibrium.
- [[efficient-market-hypothesis]] — theoretical context in which Markowitz makes sense.
- [[bayesian-black-litterman]] — modern Bayesian version.
- [[hierarchical-risk-parity]] — alternative bypassing $\Sigma$ inversion.
- [[eigenportfolio-rmt]] — spectral approach to large-dimension covariance matrices.
- [[convex-optimization-trading]] — numerical methods for the Markowitz problem.
