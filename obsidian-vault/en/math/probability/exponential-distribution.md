---
title: Exponential Distribution
category: Probability
order: 122
lang: en
slug: exponential-distribution
---

## Overview
The exponential distribution models the time between events in a [[poisson-process]].

## Mathematical Formulation
The probability density function (PDF) is:
$$ f(x; \lambda) = \begin{cases} \lambda e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases} $$
It is the only continuous probability distribution that possesses the "memoryless" property:
$$ P(T > s + t \mid T > s) = P(T > t) $$