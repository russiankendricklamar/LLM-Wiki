---
title: Gamma & Beta Functions
category: Probability
order: 123
lang: en
slug: gamma-beta-functions
---

## Overview
The Gamma and Beta functions are special functions extensively used in probability distributions.

## Gamma Function
Generalizes the factorial function to complex and real numbers:
$$ \Gamma(z) = \int_0^\infty x^{z-1} e^{-x} \, dx $$
For integers, $\Gamma(n) = (n-1)!$.

## Beta Function
Closely related to the Gamma function:
$$ B(x, y) = \int_0^1 t^{x-1} (1-t)^{y-1} \, dt = \frac{\Gamma(x)\Gamma(y)}{\Gamma(x+y)} $$