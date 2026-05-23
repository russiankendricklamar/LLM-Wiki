---
title: Stability Theory for Neural ODEs
category: Analysis & Geometry
order: 48
lang: en
slug: neural-ode-stability
---

# Stability Theory for Neural ODEs

Neural Ordinary Differential Equations (Neural ODEs) represent deep residual networks in the continuous-depth limit. Understanding their stability is paramount to prevent gradient vanishing/exploding and to ensure robustness against adversarial perturbations.

## Mathematical Formulation

A Neural ODE is defined by:

$$
rac{dz(t)}{dt} = f(z(t), t, 	heta), \quad z(0) = x
$$

The forward pass is the solution of the Initial Value Problem (IVP) evaluated at $T$.

## Lyapunov Stability

To ensure the mapping $x \mapsto z(T)$ is robust to small perturbations $\delta x$ in the input, we analyze the Jacobian flow $J(t) = rac{\partial z(t)}{\partial z(0)}$. The evolution of this Jacobian is governed by the variational equation:

$$
rac{d}{dt} J(t) = rac{\partial f}{\partial z}(z(t), t, 	heta) J(t)
$$

The spectral abscissa (the largest real part of the [[spectral-theory-operators|eigenvalues]]) of $rac{\partial f}{\partial z}$ dictates the exponential growth or decay of perturbations. For the system to be *Lyapunov stable*, we require:

$$
\lambda_{max} \left( rac{\partial f}{\partial z} + \left(rac{\partial f}{\partial z}
ight)^T 
ight) \leq 0
$$

This ensures the ODE flow is contractive or volume-preserving.

## Lipschitz Constants and Uniqueness

By the Picard-Lindelöf theorem, the ODE has a unique solution if $f$ is uniformly Lipschitz continuous in $z$:

$$
\|f(z_1, t, 	heta) - f(z_2, t, 	heta)\| \leq L \|z_1 - z_2\|
$$

By Grönwall's inequality, the distance between two trajectories bounded by perturbations grows at most exponentially:

$$
\|z_1(t) - z_2(t)\| \leq \|z_1(0) - z_2(0)\| e^{L t}
$$

To constrain $L$, one can enforce weight normalization or spectral normalization on $	heta$.

## Adjoint Method and Backward Stability

Gradients are computed using the adjoint state $a(t) = rac{\partial L}{\partial z(t)}$, which satisfies the adjoint ODE:

$$
rac{da(t)}{dt} = -a(t) rac{\partial f}{\partial z}(z(t), t, 	heta)
$$

If the forward dynamics are contractive (stable), the backward adjoint dynamics expand. Thus, strongly contractive Neural ODEs suffer from vanishing gradients in the adjoint pass. A trade-off between forward robustness and backward gradient flow must be managed via orthogonal regularizations.
