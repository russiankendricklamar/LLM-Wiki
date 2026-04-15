---
title: "First Fundamental Theorem (FTAP)"
category: "Pricing Models"
order: 122
lang: "en"
---

# First Fundamental Theorem (FTAP)

The First Fundamental Theorem of Asset Pricing (FTAP) is the central result of [[shiryaev-stochastic-finance|Shiryaev Vol. 2]], linking two notions that at first sight live in different universes: the economic condition of [[arbitrage-definition|no-arbitrage]] and the probabilistic existence of a martingale measure. The theorem says they are equivalent.

This statement is so foundational that the entire modern theory of derivative pricing is built on top of it: every time you see a formula "option price = $\mathbb{E}^\mathbb{Q}[\text{payoff}]$," you are seeing FTAP at work.

## Statement (discrete case)

Let a discrete [[bs-market-self-financing|(B,S)-model]] be given on a filtered probability space $(\Omega, \mathcal{F}, (\mathcal{F}_n)_{n=0}^N, \mathbb{P})$ with discounted price $\widetilde{S}_n = S_n / B_n$.

**Theorem (Harrison-Pliska, 1981; Dalang-Morton-Willinger).** The following are equivalent:

1. The market is arbitrage-free (NA).
2. There exists a probability measure $\mathbb{Q} \sim \mathbb{P}$ (equivalent to the original) under which the discounted process $\widetilde{S}$ is a martingale:

$$\mathbb{E}^\mathbb{Q}\big[ \widetilde{S}_{n+1} \mid \mathcal{F}_n \big] = \widetilde{S}_n.$$

The measure $\mathbb{Q}$ is called an **equivalent martingale measure** (EMM) or **risk-neutral measure**.

## Proof idea: sufficiency ($\Leftarrow$)

Assume an EMM $\mathbb{Q}$ exists and let $\pi$ be a self-financing strategy with $X^\pi_0 = 0$ and $\mathbb{P}(X^\pi_N \geq 0) = 1$.

The discounted capital $\widetilde{X}^\pi_n = \sum_{k=1}^n \gamma_k \cdot \Delta \widetilde{S}_k$ is a stochastic integral of the predictable $\gamma$ against the $\mathbb{Q}$-martingale $\widetilde{S}$, hence itself a $\mathbb{Q}$-martingale (or at least local, under admissibility).

Therefore $\mathbb{E}^\mathbb{Q}[\widetilde{X}^\pi_N] = \widetilde{X}^\pi_0 = 0$. But $\widetilde{X}^\pi_N \geq 0$ a.s. under $\mathbb{P}$, hence under $\mathbb{Q}$ (the measures are equivalent). A non-negative random variable with zero mean is a.s. zero. Thus no arbitrage opportunity exists.

**The crucial point:** equivalence $\mathbb{Q} \sim \mathbb{P}$ is not a technical detail but the strongest leverage point of the proof. If $\mathbb{Q}$ were merely absolutely continuous w.r.t. $\mathbb{P}$, the loss of "null sets" would let arbitrage hide inside events of positive $\mathbb{P}$-measure but zero $\mathbb{Q}$-measure.

## Proof idea: necessity ($\Rightarrow$)

This is significantly more delicate. In discrete time the standard route is **geometric**, via a separation theorem.

**Construction.** Consider the cone of attainable claims:

$$\mathcal{K} = \{X^\pi_N : \pi \text{ self-fin., admiss., } X^\pi_0 = 0\}.$$

NA means $\mathcal{K} \cap L^0_+ = \{0\}$. After suitable truncation (to land in $L^1$) $\mathcal{K}$ becomes a closed convex cone, and the Hahn-Banach theorem provides a continuous linear functional separating $\mathcal{K}$ from the positive orthant.

This functional, normalised, is the Radon-Nikodym density $d\mathbb{Q}/d\mathbb{P}$ of the desired measure. The separation condition rewrites exactly as the martingale property of $\widetilde{S}$ under $\mathbb{Q}$.

Shiryaev's alternative path ([[shiryaev-stochastic-finance|Vol. 2, Ch. V, §2d]]) goes through **conditional Esscher transforms**: at each time $n$ a conditionally equivalent measure is built making $\Delta \widetilde{S}_{n+1}$ a martingale increment; these conditional measures are then glued into a global EMM.

## Pricing a derivative via the martingale measure

Let $H$ be a European payoff at time $N$. If the market is arbitrage-free (FTAP $\Rightarrow$ an EMM exists), then the **arbitrage price** of $H$ at time 0 is

$$\Pi_0(H) = B_0 \cdot \mathbb{E}^\mathbb{Q}\!\left[ \frac{H}{B_N} \right].$$

In the [[complete-incomplete-markets|complete-market]] case the EMM is unique and this price is uniquely determined. In the incomplete case there is an entire interval of consistent prices (see [[upper-lower-hedging-prices|upper and lower prices]]).

## Continuous time: NFLVR

In continuous time the literal "NA $\iff$ EMM" statement **fails** — stronger conditions are needed. The correct continuous analogue is the Delbaen-Schachermayer theorem (1994):

$$\text{NFLVR} \iff \exists \mathbb{Q} \sim \mathbb{P} : \widetilde{S} \text{ is a } \sigma\text{-martingale under } \mathbb{Q}.$$

Discussed in the article on [[semimartingale-models|semimartingale models]].

## Historical note

The idea "no-arbitrage prices = expectations under a risk-neutral measure" was first formulated by Cox-Ross-Rubinstein (1979) for the binomial [[crr-model|CRR model]] and extended to general discrete settings by Harrison and Pliska (1981). The full continuous-time theory belongs to Delbaen and Schachermayer (1994-2006). Shiryaev in Vol. 2 gives an elegant self-contained discrete treatment via conditional Esscher.

## Related Articles

- [[arbitrage-definition]] — the definition the whole theorem rests on.
- [[bs-market-self-financing]] — the model in which FTAP is formulated.
- [[crr-model]] — the simplest example where the EMM is found explicitly.
- [[complete-incomplete-markets]] — completeness and uniqueness of EMM (second theorem).
- [[discrete-girsanov-esscher]] — technique for constructing EMMs in discrete time.
- [[semimartingale-models]] — continuous-time analogue and NFLVR.
- [[upper-lower-hedging-prices]] — what to do when the EMM is not unique.
