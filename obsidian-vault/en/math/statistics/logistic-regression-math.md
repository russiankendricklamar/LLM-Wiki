---
title: Logistic Regression Math
category: Statistics
order: 104
lang: en
slug: logistic-regression-math
---

## Overview
Logistic regression models the probability of a binary outcome using a logistic function.

## Mathematical Formulation
The log-odds (logit) is modeled as a linear combination of features:
$$ \ln\left(\frac{p}{1-p}\right) = \mathbf{w}^T \mathbf{x} + b $$
Solving for probability $p$:
$$ p = \frac{1}{1 + e^{-(\mathbf{w}^T \mathbf{x} + b)}} $$
The parameters $\mathbf{w}$ are typically estimated using Maximum Likelihood Estimation (MLE).