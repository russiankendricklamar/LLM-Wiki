---
title: "Coherent Risk Measures"
category: "Risk Management"
order: 75
lang: "en"
---

# Coherent Risk Measures

The 1999 paper by Artzner, Delbaen, Eber, and Heath transformed risk management from an ad hoc practice into an axiomatic discipline. They proposed four axioms that any "reasonable" risk measure should satisfy and showed that the industry standard [[value-at-risk|Value at Risk (VaR)]] violates one of them — **subadditivity** — meaning that diversification can, perversely, increase measured risk. This led to the adoption of **Expected Shortfall (ES / CVaR)** as the coherent alternative and ultimately to its enshrinement in the Basel III regulatory framework.

## The four axioms

A risk measure $\rho: \mathcal{X} \to \mathbb{R}$ on a space of financial positions (random variables) is **coherent** if it satisfies:

**1. Monotonicity.** If $X \leq Y$ almost surely, then $\rho(X) \geq \rho(Y)$. Worse outcomes mean higher risk.

**2. Translation invariance.** $\rho(X + c) = \rho(X) - c$ for any constant $c \in \mathbb{R}$. Adding cash $c$ reduces risk by exactly $c$. Equivalently, $\rho(X) - X$ requires no additional capital.

**3. Positive homogeneity.** $\rho(\lambda X) = \lambda \rho(X)$ for $\lambda > 0$. Doubling a position doubles the risk. No diversification benefit from scaling.

**4. Subadditivity.** $\rho(X + Y) \leq \rho(X) + \rho(Y)$. Merging portfolios cannot increase total risk. This is the **diversification axiom**: combining risks is no worse than the sum of parts.

## VaR fails subadditivity

The $\alpha$-level **Value at Risk** is:

$$\text{VaR}_\alpha(X) = -\inf\{x : F_X(x) > \alpha\} = F_X^{-1}(\alpha).$$

VaR satisfies axioms 1, 2, and 3 but **not** subadditivity. The classic counterexample: two independent bonds, each defaulting with probability 0.02, loss = 100. At $\alpha = 0.04$:

$$\text{VaR}_{0.04}(X_i) = 0, \qquad \text{VaR}_{0.04}(X_1 + X_2) = 100.$$

Each bond individually has zero VaR (default probability below threshold), but the portfolio has positive VaR. Diversification **increased** measured risk — a pathology that the axioms were designed to prevent.

More generally, VaR ignores the **shape of the tail** beyond the quantile. Two portfolios with the same VaR can have vastly different tail losses. See [[value-at-risk]] for a full treatment.

## Expected Shortfall (CVaR)

**Expected Shortfall** (also called **Conditional VaR** or **Tail VaR**) at level $\alpha$ is:

$$\text{ES}_\alpha(X) = -\frac{1}{\alpha} \int_0^{\alpha} F_X^{-1}(u)\, du = -\mathbb{E}[X \mid X \leq -\text{VaR}_\alpha(X)].$$

For continuous distributions, ES is simply the expected loss given that the loss exceeds VaR. It averages the entire tail, not just the boundary.

**Theorem.** ES is a coherent risk measure. In particular, it satisfies subadditivity: $\text{ES}_\alpha(X + Y) \leq \text{ES}_\alpha(X) + \text{ES}_\alpha(Y)$.

The proof uses the representation of ES as the supremum over a set of probability measures (see dual representation below), which immediately yields subadditivity.

## Dual representation

Every coherent risk measure on a finite probability space admits a **dual (robust) representation**:

$$\rho(X) = \sup_{\mathbb{Q} \in \mathcal{Q}} \mathbb{E}_\mathbb{Q}[-X],$$

where $\mathcal{Q}$ is a convex, closed set of probability measures. Risk is the worst-case expected loss over a family of "stress scenarios" $\mathcal{Q}$.

For ES at level $\alpha$: the set $\mathcal{Q}$ consists of all measures absolutely continuous with respect to $\mathbb{P}$ with Radon-Nikodym density bounded by $1/\alpha$. This connects risk measurement to robust optimization and minimax decision theory.

## Spectral risk measures

A **spectral risk measure** is:

$$\rho_\phi(X) = -\int_0^1 \phi(u) F_X^{-1}(u)\, du,$$

where $\phi: [0,1] \to [0,\infty)$ is a non-increasing, right-continuous weight function with $\int_0^1 \phi(u)\, du = 1$.

Spectral measures are coherent if and only if $\phi$ is non-increasing (Acerbi, 2002): more weight on worse outcomes. ES corresponds to the uniform weight $\phi(u) = (1/\alpha)\mathbf{1}_{u \leq \alpha}$. VaR corresponds to a Dirac mass at $\alpha$ — which is not non-increasing on $(0,1)$, confirming VaR is not coherent.

## Kusuoka representation

**Kusuoka's theorem (2001)** shows that on atomless probability spaces, every law-invariant coherent risk measure is a supremum of spectral risk measures. This provides a complete characterization: coherent + law-invariant = mixtures of ES at different levels.

## Elicitability and backtesting

A risk measure is **elicitable** if there exists a scoring function $S(x, y)$ such that the risk measure minimizes the expected score: $\rho(X) = \arg\min_r \mathbb{E}[S(r, X)]$.

**VaR is elicitable** (the scoring function is the "check loss" $S(r, x) = (\mathbf{1}\{x \leq r\} - \alpha)(r - x)$). This makes VaR easy to backtest: compare forecasted VaR to realized losses using Kupiec or Christoffersen tests.

**ES is not elicitable** (Gneiting, 2011). There is no scoring function for which ES is the unique minimizer. This creates a fundamental **backtesting problem**: regulators cannot use standard forecast comparison tools to validate ES models. However, ES is **jointly elicitable** with VaR (Fissler and Ziegel, 2016): the pair (VaR, ES) admits a bivariate scoring function, enabling joint backtesting.

## Regulatory evolution

**Basel II** (2004): risk capital based on 99% VaR (10-day). Despite known subadditivity failures, VaR was chosen for its simplicity and elicitability.

**Basel III / FRTB** (2016-2019): the Fundamental Review of the Trading Book replaced VaR with **97.5% Expected Shortfall** for market risk capital. The switch acknowledged that ES better captures tail risk and respects diversification. The elicitability gap is addressed through joint VaR-ES backtesting.

## Convex risk measures

Dropping positive homogeneity from the axioms yields **convex risk measures** (Follmer and Schied, 2002): $\rho(\lambda X + (1-\lambda)Y) \leq \lambda\rho(X) + (1-\lambda)\rho(Y)$. These admit a **penalty representation**:

$$\rho(X) = \sup_{\mathbb{Q}} \left(\mathbb{E}_\mathbb{Q}[-X] - \alpha(\mathbb{Q})\right),$$

where $\alpha(\mathbb{Q})$ is a penalty function. This framework accommodates **entropic risk** ($\rho(X) = \frac{1}{\theta}\log\mathbb{E}[e^{-\theta X}]$) and connects risk measurement to utility theory and [[shannon-entropy|information-theoretic]] divergences.

## Related Articles

- [[value-at-risk]] — the non-coherent industry standard that motivated the axiomatic approach.
- [[copula-models]] — modelling dependence structures where VaR subadditivity failure is most acute.
- [[shannon-entropy]] — entropic risk measures bridge information theory and risk.
- [[central-limit-theorem]] — asymptotic normality underlies many VaR/ES estimators.
- [[law-of-large-numbers]] — consistency of empirical ES estimators.
- [[brownian-motion]] — continuous-time models where VaR and ES are computed analytically.
