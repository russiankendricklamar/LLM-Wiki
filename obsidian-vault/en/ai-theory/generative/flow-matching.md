---
title: "Flow Matching"
category: "Generative Models"
date: 2026-04-28
tags:
  - generative-models
  - optimal-transport
  - diffusion
  - ai-theory
aliases:
  - Flow Matching
  - Continuous Normalizing Flows
---

# Flow Matching

**Flow Matching (FM)** is a state-of-the-art framework for training Continuous Normalizing Flows (CNFs). It has recently emerged as a powerful successor to Diffusion Models, powering models like **Stable Diffusion 3**, **Flux**, and **Sora**.

## Beyond Diffusion

Traditional Diffusion Models learn to reverse a stochastic process (SDE) by predicting noise (the score function). This often results in curved, complex trajectories that require many sampling steps.

Flow Matching, instead, learns to approximate a **vector field** $v_t(x)$ that transports a simple base distribution (noise) $p_0$ to the complex data distribution $p_1$ along efficient paths.

## Mathematical Foundation

Given a trajectory $x_t$ starting from noise $x_0 \sim p_0$ and ending at data $x_1 \sim p_1$, FM seeks a vector field $v_t$ such that:
$$ \frac{dx_t}{dt} = v_t(x_t) $$

### Optimal Transport Paths
A key innovation in FM is the use of **Conditional Flow Matching**. By choosing a linear interpolation:
$$ x_t = (1 - t)x_0 + t x_1 $$
we obtain **straight-line trajectories**. This aligns with the principles of **Optimal Transport**, allowing the model to bridge the gap between noise and data in the most efficient way possible.

## Why Flow Matching?

1. **Efficiency:** Straight paths allow for much faster sampling. Higher-quality images can be generated in fewer steps compared to traditional DDPMs.
2. **ODE-based Inference:** Since the process is a deterministic ODE, we can use advanced numerical solvers with error control.
3. **Simpler Training:** FM provides a simulation-free objective that is often more stable to train than score-matching or GANs.

## Current Impact
- **Rectified Flows:** A specific type of FM used in industry-leading image generators to achieve high fidelity with minimal inference cost.
- **Consistency:** FM's smooth vector fields are ideal for video generation, ensuring that objects don't "flicker" or morph unnaturally between frames.

## Related Topics
[[optimal-transport|Optimal Transport]] | [[sde-ito|SDE & Itô]] | [[transformer-architecture|DiT (Diffusion Transformers)]]
