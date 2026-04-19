---
slug: "/finance/black-scholes-derivations"
title: "Several Derivations of the Black-Scholes Formula"
category: "Pricing Models"
order: 134
lang: "en"
---

# Several Derivations of the Black-Scholes Formula

The [[black-scholes|Black-Scholes formula]] is the most studied object in financial mathematics, and at least **four fundamentally different derivations** of it are known. Each illuminates a different facet of the model and arrives at the same answer

$$C_0 = S_0 \Phi(d_1) - K e^{-rT} \Phi(d_2),$$

with

$$d_1 = \frac{\log(S_0/K) + (r + \sigma^2/2) T}{\sigma\sqrt{T}}, \qquad d_2 = d_1 - \sigma\sqrt{T}.$$

Shiryaev gives several derivations in parallel to show that the BS formula is not tied to one axiomatization but is a robust consequence of completely different lines of reasoning.

A tour of the four derivations follows.

## Derivation 1: BS PDE (replication and hedging)

**Idea (original, 1973).** Build a riskless portfolio out of the option and the underlying and apply no-arbitrage: its return must equal $r$.

Let $V(t, S)$ be the option price as a function of time and underlying. By Itô:

$$dV = \left(\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} \right) dt + \frac{\partial V}{\partial S} \, dS.$$

The portfolio "long option − delta shares": $\Pi = V - \frac{\partial V}{\partial S} S$. Holding $\partial V/\partial S$ momentarily constant:

$$d\Pi = dV - \frac{\partial V}{\partial S} dS = \left(\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} \right) dt.$$

This is **deterministic** (no $dW$), hence riskless, hence $d\Pi/\Pi = r \, dt$. Plugging in yields the Black-Scholes equation:

$$\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + r S \frac{\partial V}{\partial S} - r V = 0.$$

With terminal condition $V(T, S) = (S - K)^+$ it solves by Fourier methods or reduction to the heat equation — the answer is exactly $S_0 \Phi(d_1) - K e^{-rT} \Phi(d_2)$.

**What this shows:** the option is **replicable** (an identical portfolio can be built), and its price is determined by the no-arbitrage requirement. Delta hedging is physically realisable.

## Derivation 2: Martingale (risk-neutral measure)

**Idea.** By [[ftap-first-fundamental-theorem|FTAP]] the option price is the expectation of the payoff under the unique [[girsanov-semimartingales|EMM]]:

$$C_0 = e^{-rT} \mathbb{E}^\mathbb{Q}[(S_T - K)^+].$$

Under $\mathbb{Q}$ the price $S_T$ is log-normal:

$$\log S_T \sim \mathcal{N}\!\left(\log S_0 + (r - \sigma^2/2) T, \; \sigma^2 T \right).$$

Direct integration:

$$\mathbb{E}^\mathbb{Q}[(S_T - K)^+] = S_0 e^{rT} \Phi(d_1) - K \Phi(d_2).$$

Discounting by $e^{-rT}$ gives BS. This derivation is **one page**. It does not explain **why** delta hedging works, but it shows **that** the price is unique.

**What this shows:** the structure "BS formula = log-normal expectation." It generalizes immediately to any payoff $h(S_T)$:

$$C_0(h) = e^{-rT} \int_0^\infty h(s) \cdot \frac{1}{s\sigma\sqrt{T}} \phi\!\left(\frac{\log s - \log S_0 - (r-\sigma^2/2)T}{\sigma\sqrt{T}} \right) ds.$$

## Derivation 3: Binomial limit (CRR)

**Idea.** The discrete [[crr-model|Cox-Ross-Rubinstein model]] with $N$ steps gives an explicit binomial price. As $N \to \infty$ with the right parametrization $u = e^{\sigma\sqrt{\Delta t}}$, $d = e^{-\sigma\sqrt{\Delta t}}$ the binomial law converges to the normal one (CLT) and the binomial formula converges to BS.

This derivation is the most **pedagogically transparent**: it is built on the single equation $qu + (1-q)d = e^{r\Delta t}$, and every step can be traced explicitly. It uses no Itô, no martingales, no PDE — only school-level probability and a limit transition.

**What this shows:** BS is a **limit of elementary computations**, not magic from continuous time. This derivation also yields a numerical method (binomial tree) for cases where the formula breaks (American options, dividends).

## Derivation 4: Change of variables and the heat equation

**Idea.** The substitution $u = \log(S/K) + (r - \sigma^2/2)(T - t)$, $\tau = \frac{\sigma^2}{2}(T - t)$ turns the BS PDE into the **classical heat equation**

$$\frac{\partial v}{\partial \tau} = \frac{\partial^2 v}{\partial u^2}.$$

The fundamental solution (convolution with the Gaussian kernel) and back-substitution recover the BS formula.

**What this shows:** the BS formula belongs to the broad class of heat-equation solutions. This connection is the bridge to PDE theory, the Feynman-Kac formula, and numerical analysis. It also underpins the extension to American options via the [[stefan-problem-american|Stefan problem]].

## Equivalence of derivations

All four routes give the same formula — this is the meaning of BS "robustness." Each highlights a different aspect:

- **PDE derivation** — explicit hedging, the trader's actual strategy.
- **Martingale** — theoretical foundation via FTAP.
- **Binomial** — numerical method and discrete intuition.
- **Heat equation** — connection to classical analysis and PDE.

In real practice all four are used: the PDE supplies the Greeks (delta, gamma, vega), the martingale view extends to exotic payoffs, the binomial tree handles American options, and the heat equation underpins finite-difference solvers.

## Robustness and weaknesses

All four derivations rely on the **same assumptions**: $S$ is [[geometric-brownian-motion|GBM]] with **constant** volatility $\sigma$, the risk-free rate $r$ is constant, no dividends, trading is continuous and frictionless.

In reality **none** of these assumptions holds exactly. So the BS formula is used as a **baseline reference** (via the implied-volatility concept) rather than literal truth. All more elaborate models are corrections to BS that explain how observed prices deviate from it.

## Related Articles

- [[black-scholes]] — main article on the formula and the Greeks.
- [[bachelier-formula]] — historical and additive analogue.
- [[ftap-first-fundamental-theorem]] — theoretical justification of the martingale derivation.
- [[girsanov-semimartingales]] — technical basis for the change of measure in derivation 2.
- [[crr-model]] — discrete limit of derivation 3.
- [[geometric-brownian-motion]] — the model on which all four derivations stand.
- [[dupire-local-vol]] — extension of BS to variable volatility.
- [[heston-model]] — stochastic volatility as a correction to BS.
