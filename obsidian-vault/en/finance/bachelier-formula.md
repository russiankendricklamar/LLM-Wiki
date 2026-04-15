---
title: "Bachelier Formula"
category: "Pricing Models"
order: 133
lang: "en"
---

# Bachelier Formula

The Bachelier formula is the **historical predecessor** of the [[black-scholes|Black-Scholes formula]], published by Louis Bachelier in his doctoral thesis "Théorie de la spéculation" in 1900 — **73 years** before Black, Scholes, and Merton. It is the first rational option-pricing formula in history derived from a stochastic model of the underlying.

[[shiryaev-stochastic-finance|Shiryaev]] (Vol. 2, Ch. VIII, §1a) opens the continuous-time chapter with Bachelier — partly out of historical respect, partly because the Bachelier model has been **revived** in modern practice for markets where prices can go negative (e.g. oil in 2020 or interest rates near zero).

## Bachelier's model

Bachelier assumed the stock price follows **arithmetic Brownian motion**:

$$S_t = S_0 + \sigma W_t + \mu t,$$

where $W$ is standard Brownian motion, $\sigma > 0$ is volatility (in **absolute** price units), and $\mu$ is the drift. In modern terms this is a process with independent Gaussian increments.

The fundamental difference from Black-Scholes (where $S_t = S_0 e^{(\mu - \sigma^2/2)t + \sigma W_t}$): Bachelier prices are **additive** in the Brownian noise; BS prices are **multiplicative**. Consequences:

- In Bachelier, $S_t$ is normally distributed and **can become negative**.
- In BS, $S_t$ is log-normally distributed and **strictly positive**.

In 1900 negative prices looked like an obvious modelling defect; a century later they are the model's main advantage in some markets.

## Derivation

A European call with strike $K$ and maturity $T$ has payoff $H = (S_T - K)^+$. Under the martingale measure (where the drift $\mu$ is replaced by the risk-free rate $r$; Bachelier usually takes $r = 0$ for simplicity) the expectation of this payoff is a direct integral of the normal density.

Let $S_T \sim \mathcal{N}(S_0, \sigma^2 T)$ (under $\mathbb{Q}$, $r = 0$). Set $d = (S_0 - K)/(\sigma\sqrt{T})$. Then

$$C_0 = \mathbb{E}^\mathbb{Q}[(S_T - K)^+] = \int_K^\infty (s - K) \cdot \frac{1}{\sigma\sqrt{T}} \phi\!\left( \frac{s - S_0}{\sigma\sqrt{T}} \right) ds,$$

where $\phi$ is the standard normal density. Computing the integral (standard trick: split into $\int s \, dF$ and $-K \int dF$):

$$\boxed{C_0^{\text{Bach}} = (S_0 - K) \cdot \Phi(d) + \sigma\sqrt{T} \cdot \phi(d).}$$

Here $\Phi$ is the CDF and $\phi$ is the PDF of the standard normal.

This formula is comparable to the [[black-scholes|BS formula]] $C_0^{\text{BS}} = S_0 \Phi(d_1) - K e^{-rT} \Phi(d_2)$. Structurally similar: a "probability" piece and a "tail premium." But the inputs are normal vs. log-normal.

## When to use it

The Bachelier model is **naturally** appropriate where:

- prices can be negative (oil futures, spreads),
- prices are near zero and BS is numerically unstable (rates near zero),
- absolute volatility is approximately constant (forward rates in "normal" markets).

The famous **April 2020 episode**: WTI crude futures traded for the first time in history at a negative price ($-37$ \$/bbl). CME switched to the Bachelier model for option pricing on these futures within hours — because BS in log coordinates fundamentally cannot model negative prices.

## Comparison with Black-Scholes

| Aspect | Bachelier | Black-Scholes |
|---|---|---|
| Dynamics | $dS = \sigma \, dW + \mu \, dt$ | $dS = \sigma S \, dW + \mu S \, dt$ |
| Distribution of $S_T$ | Normal | Log-normal |
| Negative prices | Possible | Impossible |
| Volatility $\sigma$ | Absolute (\$) | Relative (\%) |
| Suitable markets | Oil-2020, rates near 0 | Equities, FX |
| Completeness | Yes | Yes |

Both models are **complete**: one source of noise (Brownian motion), one traded asset, unique EMM, unique option price.

## Bachelier as the "small-vol limit" of BS

For small $\sigma\sqrt{T}$ and $S_0$ far from $K$ both formulas give close numerical results — visible from a Taylor expansion of BS. The difference becomes meaningful for deep-in-the-money or long-dated options. The two models thus **coexist** in practice and are applied depending on market behaviour.

## Historical significance

Bachelier was a student of Henri Poincaré and worked **5 years before** Einstein published his famous paper on Brownian motion (1905). His thesis was the first place where the following appeared:

- the notion of a random walk for asset prices,
- the notion of a fair option price as an expected value,
- consequences of self-consistency of an "arbitrage-free" price.

The work was ignored by his contemporaries: by mathematicians (as insufficiently rigorous), by economists (as disconnected from reality). It was rediscovered only in the 1950s by Savage and brought to Samuelson's attention, and two decades later it became the foundation of modern financial mathematics.

Samuelson himself acknowledged that **"everything in Black-Scholes is already in Bachelier"** — except for one decisive change: the use of a logarithmic rather than additive scale.

## Related Articles

- [[black-scholes]] — log-normal heir of Bachelier.
- [[brownian-motion]] — stochastic foundation of both models.
- [[black-scholes-derivations]] — several BS derivations, none of which transfers directly to Bachelier.
- [[ftap-first-fundamental-theorem]] — general theory of which Bachelier is a special case.
- [[girsanov-semimartingales]] — change of measure in Bachelier is a simple drift shift.
- [[geometric-brownian-motion]] — multiplicative alternative.
