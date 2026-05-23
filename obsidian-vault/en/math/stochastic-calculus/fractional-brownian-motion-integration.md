---
title: Integration with Respect to Fractional Brownian Motion
category: Stochastic Calculus
order: 155
lang: en
slug: fractional-brownian-motion-integration
---

# Integration with Respect to Fractional Brownian Motion

Fractional Brownian motion (fBm) $B^H_t$ is a Gaussian process with Hurst parameter $H \in (0, 1)$. For $H \neq 1/2$, it is neither a semimartingale nor a Markov process, making standard Itô calculus inapplicable.

## Pathwise Young and Rough Path Integration

When $H > 1/2$, the paths of fBm are Hölder continuous with index $> 1/2$. Integration can be defined deterministically path-by-path using the Young integral:
$$ \int_0^T Y_t dB^H_t = \lim_{|\pi| \to 0} \sum_{i=0}^{n-1} Y_{t_i} (B^H_{t_{i+1}} - B^H_{t_i}) $$
For $H < 1/2$, paths are too rough for Young integration, requiring the heavy machinery of [[rough-paths-theory]] (Lyons) to define stochastic integrals systematically.

## Malliavin and Wick-Itô Integrals

An alternative probabilistic approach uses the Skorokhod integral (divergence operator) from Malliavin calculus. The resulting Wick-Itô integral is defined as:
$$ \int_0^T Y_t \diamond dB^H_t = \delta_H(Y) $$
where $\diamond$ denotes the Wick product. This integral has zero expectation $\mathbb{E}[\int Y \diamond dB^H] = 0$, mimicking the martingale property, but lacks the standard pathwise interpretation.

## Financial Modeling

While fBm captures long-range dependence ($H > 1/2$) observed in markets, pathwise integration permits arbitrage. The Wick-Itô approach prevents arbitrage but makes hedging strategies difficult to implement physically, sparking debate in [[mathematical-finance]].
