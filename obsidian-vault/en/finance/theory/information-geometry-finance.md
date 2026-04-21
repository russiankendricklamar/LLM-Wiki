---
title: "Information Geometry in Finance"
category: "Quantitative Theory"
order: 35
lang: "en"
slug: "information-geometry-finance"
---

# Information Geometry in Finance

**Information Geometry**, pioneered by Shun-ichi Amari, applies the tools of differential geometry ([[manifold|Manifolds]], metrics, curvature) to probability theory. In top-tier quantitative finance, it is used to measure the true "distance" between market states and to construct radically robust portfolios.

## The Statistical Manifold

In classic geometry, the distance between two points $x$ and $y$ is Euclidean. But what if the "points" are actually probability distributions (e.g., the distribution of market returns)?
Information Geometry treats the space of all probability distributions as a **Riemannian Manifold**. 

The natural metric on this manifold is the **Fisher Information Metric (FIM)**.
- If two normal distributions have the same variance but different means, the Euclidean distance between their parameters might be small, but the Fisher distance measures how much they *statistically overlap*.

## Application: Distance Between Market Regimes

Quants use the Fisher distance to detect **Regime Shifts** (e.g., moving from a bull market to a crash). 
Instead of looking at simple volatility spikes, they calculate the geodesic distance on the statistical manifold between the probability distribution of returns last week and this week. A large Fisher distance indicates a fundamental structural break in the market.

## Application: Portfolio Optimization

Standard [[markowitz-mean-variance|Markowitz Optimization]] uses the Euclidean distance on the covariance matrix, which assumes the market is "flat." This leads to brittle portfolios.
**Information-Geometric Portfolio Optimization** restricts the portfolio weights to move along the geodesics (shortest curved paths) of the statistical manifold. 
- It naturally handles non-linearities and tail risks.
- It prevents the optimizer from stepping into "impossible" regions of the probability space, leading to out-of-sample performance that heavily beats standard Mean-Variance.

## Connection to Entropy

The Fisher Information Metric is intimately connected to [[shannon-entropy|Shannon Entropy]] and the Kullback-Leibler (KL) divergence. In fact, locally, the KL divergence behaves exactly like the squared distance measured by the Fisher Metric. This unifies Information Geometry with [[entropy-pooling|Entropy Pooling]].

## Visualization: Curved Probability Space

```mermaid
graph TD
    subgraph Euclidean View (Naive)
        P1[Distribution A] ---|Straight Line Distance| P2[Distribution B]
    end
    
    subgraph Information Geometry View
        P3[Distribution A] -.->|Geodesic Curve| P4[Distribution B]
        P3 --> Space((Fisher Information Manifold))
        P4 --> Space
    end
    
    style Space fill:#8b5cf6,color:#fff
```
*In the Euclidean view, transitioning from state A to B seems linear. On the statistical manifold, the shortest path (geodesic) curves around areas of high uncertainty, providing a safer path for dynamic portfolio rebalancing.*

## Related Topics

[[manifold]] — the geometric foundation  
[[entropy-pooling]] — using KL divergence for portfolio views  
[[fisher-transform]] — a 1D application of these geometric ideas
---
