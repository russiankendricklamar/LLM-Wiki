---
title: "Efficient Market Hypothesis (EMH)"
category: "Pricing Models"
order: 137
lang: "en"
---

# Efficient Market Hypothesis (EMH)

The Efficient Market Hypothesis (EMH) is the central classical theory of financial economics, formulated by Eugene Fama in the 1960s on top of earlier ideas of Cootner, Samuelson, and Bachelier. Its content: **at any moment financial asset prices fully reflect all available information**, so no information-based strategy can systematically generate excess returns.

Shiryaev uses EMH in Volume 1, as a **historical bridge** between the descriptive economic tradition and the mathematical one: the "random walk" hypothesis of prices, which Bachelier already formalized, is the mathematical consequence of EMH. The modern martingale approach via [[ftap-first-fundamental-theorem|FTAP]] is its probability-theoretic generalization.

## Three forms

Fama (1970) introduced three forms by the size of the information set:

**Weak form.** Price reflects all information from the **historical prices** of the asset. Technical analysis (charts, indicators, patterns) yields no systematic edge. Prices behave as a [[brownian-motion|random walk]].

**Semi-strong form.** Price reflects all **publicly available** information: historical prices, financial statements, news, analyst reports. No fundamental-analysis strategy gives sustained excess returns. Reaction to new events is instantaneous.

**Strong form.** Price reflects **all** information, including insider knowledge. Even insiders cannot systematically profit from their advantage.

Each form is strictly stronger than the preceding one. In academic literature one usually tests the weak form (random-walk tests) and the semi-strong (event studies); the strong form is rejected by data (insiders do profit).

## Connection to the martingale property

The mathematical expression of EMH: the discounted price $\widetilde{S}_t = S_t / B_t$ is a **martingale** under the "information" filtration $\mathcal{F}_t$:

$$\mathbb{E}[\widetilde{S}_{t+1} \mid \mathcal{F}_t] = \widetilde{S}_t.$$

This is exactly the condition that [[ftap-first-fundamental-theorem|FTAP]] links to the absence of arbitrage — but **under the original measure** $\mathbb{P}$, not the risk-neutral $\mathbb{Q}$. The distinction matters:

- **EMH** says discounted prices are a martingale under $\mathbb{P}$. This is the requirement "no one can predict the future better than the market."
- **FTAP** says **there exists** a measure $\mathbb{Q} \sim \mathbb{P}$ under which $\widetilde{S}$ is a martingale. This is weaker: $\mathbb{Q}$ may differ from $\mathbb{P}$ substantially, reflecting risk premium.

EMH is a special case of FTAP with the additional assumption "risk premium is zero." In reality markets demand a non-zero premium (Equity Risk Premium ≈ 5–7% historically), so strict EMH is empirically rejected while the weaker FTAP survives.

## Critique and revision

Since the 1970s a long list of empirical anomalies has accumulated that EMH in its pure form fails to explain:

- **January effect** — small-cap stocks rise systematically in January.
- **Momentum** — stocks that rose strongly in the past 3–12 months tend to keep rising; the long-winners-short-losers strategy historically generates excess returns (Jegadeesh-Titman, 1993).
- **Value anomaly** — stocks with low P/E and high book-to-market historically deliver higher returns (Fama-French, 1992).
- **Excess volatility** — Shiller showed that index price volatility is too large to be explained by fluctuations in fundamental dividends.
- **Herding and bubbles** — dot-com (2000), housing (2008), GameStop (2021) — episodes where prices clearly detached from fundamentals.

These anomalies birthed **behavioural finance** — the program explaining departures from EMH via cognitive biases of traders: overconfidence, anchoring, herding, prospect theory (Kahneman-Tversky).

## Adaptive Market Hypothesis

Andrew Lo (2004) proposed the **Adaptive Market Hypothesis (AMH)**: markets are not statically "efficient" but **evolutionarily adaptive**. Algorithmic traders and arbitrageurs exploit new inefficiencies as they appear, leading to their rapid disappearance; the market "learns." The result is that markets are on average efficient, with temporary inefficiency windows — especially after structural shifts (pandemics, regulatory changes, new asset classes).

AMH reconciles EMH with empirics: statistical arbitrage works, but the "alpha share" is constantly shrinking and strategies need to be refreshed.

## EMH and algorithmic trading

The Grossman-Stiglitz paradox (1980): **if EMH were absolutely true**, no one would have an incentive to gather information (it is already in the price), so prices would stop reflecting it. Market efficiency requires **constant effort by inefficient traders**, who are compensated for their work. This paradox is the theoretical explanation for why the analyst and active-management industry continues to exist.

Modern high-frequency and stat-arb strategies are a practical confirmation of AMH: they make money on tiny and rapidly disappearing inefficiencies, and each successful strategy shrinks the remaining "pie."

## Related Articles

- [[ftap-first-fundamental-theorem]] — mathematical generalization of EMH via martingale measures.
- [[bachelier-formula]] — historical origin of the random-walk-of-prices idea.
- [[brownian-motion]] — simplest stochastic realization of EMH.
- [[markowitz-mean-variance]] — portfolio theory built on EMH-style return assumptions.
- [[capm]] — equilibrium pricing model where EMH operates at the factor level.
- [[apt-ross]] — arbitrage alternative to CAPM, also relying on EMH.
- [[stylized-facts-returns]] — empirical regularities challenging EMH.
- [[fama-macbeth-regression]] — standard empirical tool for testing EMH consequences.
