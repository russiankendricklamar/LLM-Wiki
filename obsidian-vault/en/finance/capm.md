---
title: "CAPM (Capital Asset Pricing Model)"
category: "Pricing Models"
order: 139
lang: "en"
---

# CAPM (Capital Asset Pricing Model)

The Capital Asset Pricing Model (CAPM) is an equilibrium theory of asset pricing independently proposed by Sharpe (1964), Lintner (1965), and Mossin (1966) on top of [[markowitz-mean-variance|Markowitz's portfolio theory]]. CAPM gives the **first quantitative formula** for the expected return of a risky asset in terms of a single factor — market risk.

[[shiryaev-stochastic-finance|Shiryaev]] presents CAPM as the "second chapter" of neoclassical financial theory, after Markowitz and before Ross's arbitrage theory. It remains the **starting point** of any work on factor investing: alpha, beta, the Treynor ratio, Jensen's alpha — all of these belong to CAPM's vocabulary.

## The core equation

**CAPM claim.** In equilibrium the expected (excess) return of any asset $i$ is proportional to its "market beta":

$$\mathbb{E}[r_i] - r_f = \beta_i \cdot (\mathbb{E}[r_M] - r_f),$$

where:

- $r_f$ — risk-free rate,
- $r_M$ — return of the market portfolio,
- $\beta_i = \text{Cov}(r_i, r_M) / \text{Var}(r_M)$ — sensitivity of the asset to the market.

The equation reads: **"asset risk premium" = "beta" × "market risk premium"**. This linear relationship between $\beta_i$ and $\mathbb{E}[r_i]$ is the **Security Market Line (SML)**.

## Derivation from Markowitz

CAPM follows from mean-variance optimization in three steps:

1. The market has a risk-free asset with return $r_f$. Then the [[markowitz-mean-variance|efficient frontier]] becomes a straight line — the Capital Market Line (CML) — tangent to the Markowitz hyperbola at the "market portfolio" $w_M$.
2. **Homogeneity assumption**: all investors see the same $\mu, \Sigma$ and optimize mean-variance. Then **they all hold the same optimal risky portfolio** — the market portfolio $w_M$.
3. In equilibrium, the total supply of each asset must equal demand. This forces the weights of $w_M$ to coincide with the **relative market capitalizations** of the assets.

The requirement that "asset + risk-free" combinations lie on the CML gives the SML equation — i.e. the CAPM formula.

## Alpha and active management

If the empirical return of an asset is higher than CAPM predicts, the difference is called **alpha**:

$$\alpha_i = \mathbb{E}[r_i] - r_f - \beta_i (\mathbb{E}[r_M] - r_f).$$

Positive alpha is return that CAPM does not explain by "market risk." Under EMH alpha should be zero on long horizons; anything above is either premium for an unmeasured risk factor, an illusion, or the result of active management whose expected effect is also zero (see [[efficient-market-hypothesis]]).

**Alpha is the bread and butter of the active management industry**: funds earn fees for promising positive alpha. Empirically, after fees the average alpha of active funds is negative, and only a tiny fraction shows persistent positive alpha.

## Empirical critique

CAPM in its pure form is empirically rejected:

- **Beta vs. return** — the relation between $\beta$ and realized returns is weak and often flat (Black, Jensen, Scholes 1972). This contradicts the SML.
- **Size** — small-cap stocks systematically deliver returns above CAPM predictions (small-cap effect).
- **Value** — high book-to-market gives excess return over CAPM (value effect).

These anomalies led to the **Fama-French three-factor model (1992)**: $\mathbb{E}[r_i] - r_f = \beta_i^{MKT}(r_M - r_f) + \beta_i^{SMB} \cdot \text{SMB} + \beta_i^{HML} \cdot \text{HML}$, where SMB is the size factor, HML the value factor. Later momentum (Carhart) and profitability and investment (Fama-French 5-factor) were added. Each new factor "eats" some of the residual alpha.

CAPM in this hierarchy is the **single-factor special case** where the only factor is the market. Multi-factor extensions correspond to [[apt-ross|Ross's APT]].

## Beta as a risk metric

Despite the empirical weakness, **beta remains the standard risk metric** in industry:

- Hedge funds report "S&P beta" as a measure of systematic risk.
- Regulators use beta in market-risk capital calculation (e.g. SCR in Solvency II).
- Performance attribution decomposes fund return into a "beta component" (matching the market) and "alpha" (excess).

In CAPM beta is the only risk measure; all idiosyncratic volatility is diversified away and uncompensated.

## Conditional and intertemporal extensions

**Conditional CAPM.** Beta and premium are allowed to vary in time: $\mathbb{E}[r_i \mid \mathcal{F}_t] - r_f = \beta_{i,t} \cdot (\mathbb{E}[r_M \mid \mathcal{F}_t] - r_f)$. This lets CAPM "breathe" with the market cycle.

**Intertemporal CAPM (ICAPM)** of Merton (1973). A multi-period extension where investors care not only about current return but also about future reinvestment opportunities. ICAPM is one of the bridges between CAPM and dynamic hedging theory (which leads to [[ftap-first-fundamental-theorem|FTAP]]).

## CAPM vs. APT vs. FTAP

| Model | Requires | Yields |
|---|---|---|
| **CAPM** | equilibrium, mean-variance, homogeneity | $\mathbb{E}[r] = r_f + \beta \cdot (r_M - r_f)$ |
| **[[apt-ross\|APT]]** | no asymptotic arbitrage, factor representation | $\mathbb{E}[r] = r_f + \sum_k \beta_k \lambda_k$ |
| **[[ftap-first-fundamental-theorem\|FTAP]]** | no arbitrage | $\mathbb{E}[r] = r_f + \text{premium via martingale measure}$ |

CAPM requires the strongest assumptions and gives the most concrete answer. APT is weaker and less concrete. FTAP is the most general and not tied to equilibrium.

## Related Articles

- [[markowitz-mean-variance]] — the foundation on which CAPM is built.
- [[apt-ross]] — multi-factor generalization without equilibrium.
- [[ftap-first-fundamental-theorem]] — the probability-theoretic continuation of this line.
- [[fama-macbeth-regression]] — standard empirical test of CAPM and multi-factor models.
- [[efficient-market-hypothesis]] — the context where "risk premium" makes sense.
- [[factor-attribution]] — decomposing fund returns into factor contributions.
- [[stylized-facts-returns]] — empirical facts CAPM only partially explains.
