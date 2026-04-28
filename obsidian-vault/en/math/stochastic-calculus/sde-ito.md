---
title: Stochastic Differential Equations (SDE)
date: 2026-04-28
tags:
  - math
  - stochastic
  - calculus
  - diffusion-models
aliases:
  - SDE
  - Itô Calculus
---

# Stochastic Differential Equations (SDE)

Stochastic Differential Equations (SDEs) describe the dynamics of systems subject to random influences (noise). Unlike Ordinary Differential Equations (ODEs), SDE trajectories are not smooth. They are the backbone of **Mathematical Finance** (Black-Scholes model) and **Generative AI** (Score-based Generative Models / Diffusion).

## Foundations: Brownian Motion

The central element of an SDE is the **Wiener process** (Brownian Motion) $W_t$. Its properties are:
1. $W_0 = 0$.
2. Increments $W_{t+s} - W_t$ are independent and normally distributed $\mathcal{N}(0, s)$.
3. Trajectories are continuous but **nowhere differentiable** and have infinite variation.

## General Form of an SDE

A typical Itô equation is written in differential form:
$$
dX_t = \mu(X_t, t) dt + \sigma(X_t, t) dW_t
$$
Where:
- $\mu(X_t, t)$ is the **drift coefficient**, the deterministic part.
- $\sigma(X_t, t)$ is the **diffusion coefficient**, the amplitude of the noise.

Integral form:
$$
X_t = X_0 + \int_0^t \mu(X_s, s) ds + \int_0^t \sigma(X_s, s) dW_s
$$
The second integral is the **Itô integral**, which cannot be computed like a standard Riemann integral due to the infinite variation of $W_t$.

## Itô's Lemma

The primary tool for SDEs is the analog of the chain rule. If $X_t$ satisfies an SDE and $f(X, t)$ is a twice-differentiable function, the differential $df$ is:

$$
df(X_t, t) = \left( \frac{\partial f}{\partial t} + \mu \frac{\partial f}{\partial X} + \frac{1}{2} \sigma^2 \frac{\partial^2 f}{\partial X^2} \right) dt + \sigma \frac{\partial f}{\partial X} dW_t
$$

Note the second-order term $\frac{1}{2} \sigma^2 \frac{\partial^2 f}{\partial X^2}$. This is a consequence of $(dW_t)^2 \approx dt$.

## Fokker-Planck Equation

If a particle moves according to an SDE, the evolution of its probability density $p(x, t)$ is described by a deterministic Partial Differential Equation (PDE):

$$
\frac{\partial p}{\partial t} = - \frac{\partial}{\partial x} [\mu(x, t) p] + \frac{1}{2} \frac{\partial^2}{\partial x^2} [\sigma^2(x, t) p]
$$

This is the bridge between individual random trajectories (micro-level) and system-wide distributions (macro-level).

## Application in AI: Diffusion Models

Modern diffusion models (Stable Diffusion, Imagen) are essentially SDE reversals.
1. **Forward SDE**: We gradually add noise to an image $x_0 \rightarrow x_T$ until it becomes pure Gaussian noise.
2. **Reverse SDE**: A neural network learns to approximate the **Score function** $\nabla_x \ln p(x, t)$. Knowing this, we can run the process backwards:
   $$
   dx = [ \mu(x, t) - \sigma(t)^2 \nabla_x \ln p(x, t) ] dt + \sigma(x, t) d\bar{W}
   $$
This allows us to generate data by literally "sculpting" order out of chaos.
