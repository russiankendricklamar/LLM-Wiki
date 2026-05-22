---
title: Momentum in Optimization
category: Optimization
order: 132
lang: en
slug: momentum-optimization
---

## Overview
Momentum accelerates SGD in the relevant direction and dampens oscillations by keeping a running average of past gradients.

## Update Rule
$$ v_t = \gamma v_{t-1} + \eta \nabla_{\theta} J(\theta) $$
$$ \theta_{t+1} = \theta_t - v_t $$
where $\gamma$ is the momentum term (usually 0.9). Nesterov Accelerated Gradient (NAG) improves this by calculating the gradient at the "lookahead" position $\theta_t - \gamma v_{t-1}$.