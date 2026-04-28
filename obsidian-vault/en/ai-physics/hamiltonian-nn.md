---
title: "Hamiltonian Neural Networks (HNN)"
category: "AI Physics"
date: 2026-04-28
tags:
  - physics-ai
  - hamiltonian
  - deep-learning
  - sympletic
aliases:
  - HNN
---

# Hamiltonian Neural Networks (HNN)

**Hamiltonian Neural Networks (HNN)** are a class of deep learning architectures designed to model physical systems while strictly respecting conservation laws, specifically the conservation of energy. Instead of learning to predict system states directly, HNNs learn the **Hamiltonian** (total energy) of the system.

## The Problem with Black-Box Models

Standard neural networks (like MLPs or RNNs) trained on physical data (e.g., a pendulum) often struggle with long-term stability. They tend to "leak" or "gain" energy over time, causing trajectories to spiral inward or outward. This is because they lack an understanding of phase space and symplectic geometry.

## Mathematical Core

In classical mechanics, the state of a system is described by coordinates $q$ (position) and $p$ (momentum). The dynamics are governed by Hamilton's equations:
$$ \dot{q} = \frac{\partial \mathcal{H}}{\partial p}, \quad \dot{p} = -\frac{\partial \mathcal{H}}{\partial q} $$
Where $\mathcal{H}(q, p)$ is the Hamiltonian representing the total energy.

### How HNNs Work:
1. A neural network approximates the scalar function $\mathcal{H}_\theta(q, p)$.
2. During the forward pass, the network's output is differentiated with respect to its inputs using **Auto-Differentiation** to obtain $\dot{q}$ and $\dot{p}$.
3. The loss function compares these predicted time derivatives to the observed ground truth derivatives.

## Key Advantages

1. **Energy Conservation:** HNNs preserve the total energy of the system by design, leading to physically plausible long-term simulations.
2. **Data Efficiency:** By embedding physical priors (inductive bias), HNNs require significantly less training data than purely black-box models.
3. **Phase Space Consistency:** The model naturally respects the volume-preserving (symplectic) nature of physical flows.

## Applications
- **Celestial Mechanics:** Predicting planetary orbits with high precision.
- **Molecular Dynamics:** Simulating protein folding and atomic interactions.
- **Control Systems:** Designing energy-efficient controllers for robotics.

## Related Topics
[[variational-calculus|Variational Calculus]] | [[pinns|Physics-Informed NN]] | [[equivariant-nn|Equivariant NN]]
