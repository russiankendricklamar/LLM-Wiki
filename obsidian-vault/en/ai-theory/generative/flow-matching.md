---
title: 'Generative Models: Flow Matching'
category: AI Theory
order: 164
lang: en
slug: flow-matching
---

Flow Matching offers a simulation-free approach to training Continuous Normalizing Flows (CNFs), bypassing the costly integration required by Neural ODEs.

### Vector Fields
We define a target probability path $p_t(x)$ transitioning from a base distribution $p_0$ to the data distribution $p_1$. The evolution is governed by a target vector field $u_t(x)$.
The objective is to train a neural vector field $v_\theta(t, x)$ to match $u_t(x)$:
$\mathcal{L}_{FM}(\theta) = \mathbb{E}_{t, x}[\|v_\theta(t, x) - u_t(x)\|^2]$

### Conditional Flow Matching
Since the marginal vector field $u_t$ is unknown, Conditional Flow Matching (CFM) conditions on individual data points $x_1$:
$\mathcal{L}_{CFM}(\theta) = \mathbb{E}_{t, q(x_1), p_t(x|x_1)}[\|v_\theta(t, x) - u_t(x|x_1)\|^2]$
This provides a highly stable, deterministic alternative to Score-Based diffusion models, directly defining optimal transport paths between distributions.
