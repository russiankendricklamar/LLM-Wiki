---
title: "Rough Path Theory and Signatures"
category: "Stochastic Calculus"
date: 2026-04-28
tags:
  - math
  - stochastic
  - signatures
  - time-series
aliases:
  - Signatures
  - Path Signatures
---

# Rough Path Theory and Signatures

**Rough Path Theory**, pioneered by Terry Lyons in the 1990s, provides a robust mathematical framework for analyzing continuous but highly irregular paths, such as Brownian motion or financial time series. The central concept of this theory is the **Signature**—an infinite sequence of statistics that uniquely characterizes the shape of a path.

## The Problem

Traditional calculus requires paths to be differentiable. Stochastic calculus (Itô) relaxes this but relies heavily on probability measures. Rough Path Theory offers a **deterministic** way to handle non-differentiable paths, focusing on the geometric information encoded in the trajectory itself.

## What is a Path Signature?

The signature of a path $X: [0, T] \rightarrow \mathbb{R}^d$ is a collection of iterated integrals:

$$ S(X) = (1, \mathbf{X}^{(1)}, \mathbf{X}^{(2)}, \dots, \mathbf{X}^{(k)}, \dots) $$

Where each level $\mathbf{X}^{(k)}$ consists of integrals of the form $\int_{0 < t_1 < \dots < t_k < T} dX_{t_1} \otimes \dots \otimes dX_{t_k}$.

### Key Properties:
1. **Invariance to Reparameterization:** The signature is independent of the speed at which the path is traversed. It captures the *intrinsic geometry*.
2. **Universal Feature Map:** Any continuous function of a path can be approximated to arbitrary precision by a linear function of its signature. This makes signatures an ideal "bridge" between paths and machine learning models.

## Signatures in Machine Learning

### Signature Transforms
Instead of feeding raw, high-dimensional time series into a model (like an RNN), we can compute the **Signature Transform** over sliding windows.
- **Dimension Reduction:** Thousands of time steps are compressed into a fixed-length feature vector.
- **Noise Robustness:** Signatures are naturally resilient to sampling irregularities and high-frequency noise.

### Quantitative Finance
Signatures are widely used in finance to identify market regimes and build predictive models. They excel at capturing lead-lag relationships between different assets by looking at cross-iterated integrals, which standard correlation measures often miss.

## Related Topics
[[sde-ito|SDE & Itô Calculus]] | [[time-series|Time Series Analysis]] | [[topology|Topological Data Analysis]]
