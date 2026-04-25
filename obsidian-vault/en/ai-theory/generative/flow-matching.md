---
title: "Flow Matching"
category: "AI Theory"
order: 15
lang: "en"
slug: "flow-matching"
---

# Flow Matching

## What Is It

Flow Matching (FM) is a generative modeling framework that unifies and generalizes Diffusion Models and Normalizing Flows. While diffusion models rely on a stochastic differential equation ([[stochastic-differential-equations|SDE]]) to transform noise into data, Flow Matching focuses on learning the **deterministic vector field** that generates a probability flow.

In essence, Flow Matching defines a path in the space of probability distributions $p_t$ that connects a simple noise distribution $p_0$ (e.g., Gaussian) to the data distribution $p_1$. Instead of simulating complex diffusion steps, we train a neural network $v_\theta(x, t)$ to "match" the ideal velocity that would move samples along this path.

## Visualization

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": 0.0, "path": 0.0, "variance": 1.0},
    {"t": 0.2, "path": 0.2, "variance": 0.8},
    {"t": 0.4, "path": 0.4, "variance": 0.6},
    {"t": 0.6, "path": 0.6, "variance": 0.4},
    {"t": 0.8, "path": 0.8, "variance": 0.2},
    {"t": 1.0, "path": 1.0, "variance": 0.0}
  ],
  "lines": [
    {"dataKey": "path", "stroke": "#3b82f6", "name": "Optimal Transport Path"},
    {"dataKey": "variance", "stroke": "#ef4444", "name": "Noise Level"}
  ]
}
```

## Mathematical Framework

The core idea is to find a vector field $v_t(x)$ such that the Ordinary Differential Equation (ODE) $\frac{dx}{dt} = v_t(x)$ pushes the distribution $p_0$ to $p_1$.

**Optimal Transport (OT) Displacement**: In the simplest case of "Conditional Flow Matching", we define a straight-line path between a noise sample $x_0 \sim p_0$ and a data sample $x_1 \sim p_1$:

$$x_t = (1 - t)x_0 + t x_1$$

The velocity of this path is constant: $\dot{x}_t = x_1 - x_0$. 

**Flow Matching Objective**: We train a network $v_\theta(x, t)$ to minimize the expected distance between its prediction and the ideal velocity:

$$\mathcal{L}_{\text{CFM}}(\theta) = \mathbb{E}_{t, q(x_1), p(x_0)} \| v_\theta(x_t, t) - (x_1 - x_0) \|^2$$

At inference time, we generate data by solving the ODE:
$$x_1 = x_0 + \int_0^1 v_\theta(x_t, t) dt$$

## Why It Matters (vs Diffusion)

1. **Straight Paths**: Unlike Diffusion, which takes a "curvy" stochastic path, Flow Matching (specifically Optimal Transport FM) learns to move in straight lines. This makes the ODE much easier to solve.
2. **Speed**: Because the paths are straighter, we can use much larger steps during inference. Models like *Flux* can produce high-quality images in just 1-4 steps.
3. **No [[stochastic-differential-equations|SDE]]**: FM is fundamentally deterministic. While you can add noise (stochasticity), the base formulation is a clean ODE, making it more stable and easier to analyze.

## Related Topics

[[diffusion-models]] — the stochastic predecessor  
[[normalizing-flows]] — the deterministic foundation  
[[neural-odes]] — the underlying mathematical engine  
[[generative-models]] — the broader family
