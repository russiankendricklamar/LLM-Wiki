---
title: Poisson Process
category: Probability
order: 121
lang: en
slug: poisson-process
---

## Overview
A Poisson process is a stochastic process that models a sequence of events occurring randomly over time or space.

## Properties
The number of events $N(t)$ in time interval $[0, t]$ follows a Poisson distribution with parameter $\lambda t$:
$$ P(N(t) = k) = \frac{(\lambda t)^k e^{-\lambda t}}{k!} $$
The inter-arrival times between events are independent and exponentially distributed with rate $\lambda$.