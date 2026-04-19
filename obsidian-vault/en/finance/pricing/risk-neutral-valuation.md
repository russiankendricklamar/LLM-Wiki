---
slug: "/finance/risk-neutral-valuation"
title: "Risk-Neutral Valuation"
category: "Pricing Models"
order: 153
lang: "en"
---
# Risk-Neutral Valuation

**Risk-neutral valuation** is the foundational principle of modern derivatives pricing: in a complete, arbitrage-free market, the fair price of any contingent claim equals the discounted expectation of its payoff under a special probability measure $\mathbb{Q}$, called the **risk-neutral** or **equivalent martingale measure**. This insight eliminates the need to estimate the real-world drift $\mu$ of the underlying asset — the single most difficult parameter in finance — and replaces it with the observable risk-free rate $r$.

## The Central Formula

For a European claim with payoff $H(S_T)$ at maturity $T$:

$$
V_0 = e^{-rT}\,\mathbb{E}^{\mathbb{Q}}[H(S_T)]
$$

Under $\mathbb{Q}$ the discounted asset price $e^{-rt}S_t$ is a martingale. For [[geometric-brownian-motion]]:

$$
\frac{dS_t}{S_t} = r\,dt + \sigma\,dW_t^{\mathbb{Q}}
$$

so the drift is exactly the risk-free rate, regardless of investors' risk preferences or the physical drift $\mu$.

## Fundamental Theorems of Asset Pricing

The theoretical underpinning comes from the work of Harrison, Kreps (1979), and Harrison, Pliska (1981).

**First Fundamental Theorem.** A market is arbitrage-free if and only if there exists at least one equivalent martingale measure $\mathbb{Q} \sim \mathbb{P}$ such that discounted asset prices are $\mathbb{Q}$-martingales:

$$
\mathbb{E}^{\mathbb{Q}}\!\left[\frac{S_T}{B_T}\,\Big|\,\mathcal{F}_t\right] = \frac{S_t}{B_t}, \quad B_t = e^{rt}
$$

**Second Fundamental Theorem.** The market is **complete** — every contingent claim can be replicated by trading the underlying and the bond — if and only if $\mathbb{Q}$ is **unique**. Completeness implies that the no-arbitrage price is the only price consistent with absence of arbitrage.

## The Replication Argument

Consider a self-financing portfolio $\Pi_t = \Delta_t S_t + \beta_t B_t$ that replicates $H(S_T)$. By [[black-scholes]] delta-hedging:

$$
d\Pi_t = \Delta_t\,dS_t + \beta_t\,dB_t
$$

Because the hedge eliminates all randomness, the portfolio is locally riskless. No-arbitrage then forces $d\Pi_t = r\Pi_t\,dt$, which implies the drift of $S$ under the pricing measure must be $r$. The real-world drift $\mu$ cancels entirely — it never enters the pricing PDE or the expectation formula.

## Connection to Girsanov's Theorem

The measure change $\mathbb{P} \to \mathbb{Q}$ is performed via [[girsanov-semimartingales]]. Define the **market price of risk**:

$$
\lambda = \frac{\mu - r}{\sigma}
$$

The Radon-Nikodym derivative (likelihood ratio) is the [[doleans-dade-exponential]]:

$$
\frac{d\mathbb{Q}}{d\mathbb{P}}\bigg|_{\mathcal{F}_T} = \mathcal{E}\!\left(-\lambda W\right)_T = \exp\!\left(-\lambda W_T - \tfrac{1}{2}\lambda^2 T\right)
$$

Under $\mathbb{Q}$, $W_t^{\mathbb{Q}} = W_t + \lambda t$ is a standard Brownian motion. The drift shifts from $\mu$ to $r$, but the volatility $\sigma$ is unchanged — this is why options depend on $\sigma$ but not on $\mu$.

## Risk-Neutral Does Not Mean Risk-Indifferent

A common misconception: "risk-neutral pricing assumes investors are indifferent to risk." This is false. The measure $\mathbb{Q}$ is a **computational device**. Real investors are risk-averse (under $\mathbb{P}$, risky assets earn a premium $\mu > r$). The trick is that by constructing a replicating portfolio, we eliminate risk entirely, so the pricing formula holds regardless of risk preferences. The measure $\mathbb{Q}$ encodes the risk premium implicitly through the Radon-Nikodym derivative.

## Incomplete Markets

When the market is incomplete — more sources of randomness than tradeable assets — the equivalent martingale measure is **not unique**. The no-arbitrage price is no longer a single number but an interval:

$$
V_{\text{sub}} \leq V_0 \leq V_{\text{super}}
$$

where $V_{\text{sub}}$ and $V_{\text{super}}$ are the infimum and supremum over all equivalent martingale measures. Pricing requires choosing a specific $\mathbb{Q}$, which involves economic criteria: minimal entropy, variance-optimal, or [[follmer-schweizer]] decomposition.

Stochastic volatility models like [[heston-model]] are incomplete (volatility risk is not directly tradeable). The market "completes" itself by trading options, which effectively pins down the risk premium for volatility.

## Multi-Asset and Numeraire Changes

For multiple assets or stochastic interest rates, [[change-of-numeraire]] generalises the framework. Choosing numeraire $N_t$:

$$
V_0 = N_0\,\mathbb{E}^{\mathbb{Q}^N}\!\left[\frac{H(S_T)}{N_T}\right]
$$

For example, choosing the zero-coupon bond $P(t,T)$ as numeraire yields the **$T$-forward measure**, under which the forward price $F(t,T) = S_t / P(t,T)$ is a martingale — the basis for [[blacks-model]].

## Applications

1. **Option pricing**: The [[black-scholes]] formula is $e^{-rT}\mathbb{E}^{\mathbb{Q}}[\max(S_T - K, 0)]$ evaluated analytically.
2. **Monte Carlo simulation**: Simulate paths under $\mathbb{Q}$ (drift $r$, not $\mu$) and average discounted payoffs — see [[monte-carlo-method]].
3. **PDE methods**: The risk-neutral drift enters the [[partial-differential-equations]] as $rS\,\partial V/\partial S$.
4. **Interest rate derivatives**: Forward rates are martingales under appropriate measures — see [[caps-floors-swaptions]], [[swaps]].
5. **Credit derivatives**: Default-adjusted discounting via risk-neutral default intensity — see [[xva]].

## Related Topics
- [[black-scholes]]
- [[girsanov-semimartingales]]
- [[change-of-numeraire]]
- [[doleans-dade-exponential]]
- [[ftap-first-fundamental-theorem]]
- [[complete-incomplete-markets]]
