---
title: "Hamiltonian Neural Networks"
category: "AI × Physics"
order: 3
lang: "en"
slug: "hamiltonian-nn"
---

# Hamiltonian Neural Networks

## Prerequisites

[[pinns]]

## Overview

Hamiltonian Neural Networks (HNNs), introduced by Greydanus et al. (2019), learn the Hamiltonian function $H(q, p)$ of a physical system from trajectory data, rather than directly learning the vector field $(\dot{q}, \dot{p})$. Because Hamilton's equations govern all evolution, the learned model automatically conserves energy and satisfies the symplectic structure of phase space — properties that vanilla ODE networks systematically violate over long time horizons.

This architecture is a landmark example of _inductive bias from physics_: instead of hoping the network learns energy conservation from data, the architecture encodes it by design. The result is dramatic improvement in long-horizon prediction and far better generalisation to out-of-distribution energies.

## Mathematical Framework

**Hamiltonian mechanics.** For a system with generalised coordinates $q \in \mathbb{R}^n$ and momenta $p \in \mathbb{R}^n$, the Hamiltonian $H(q, p)$ generates evolution via Hamilton's equations:

$$\dot{q}_i = \frac{\partial H}{\partial p_i}, \qquad \dot{p}_i = -\frac{\partial H}{\partial q_i}$$

In matrix form, with $\mathbf{z} = (q, p)^T$:

$$\dot{\mathbf{z}} = J \nabla_{\mathbf{z}} H, \qquad J = \begin{pmatrix} 0 & I \\ -I & 0 \end{pmatrix}$$

where $J$ is the symplectic matrix. The total energy $H$ is conserved: $\dot{H} = \nabla H \cdot \dot{\mathbf{z}} = \nabla H \cdot J \nabla H = 0$ (since $J$ is antisymmetric).

**HNN training objective.** A neural network $H_\theta: \mathbb{R}^{2n} \to \mathbb{R}$ is trained to match observed time derivatives:

$$\mathcal{L}(\theta) = \sum_i \left\|\frac{\partial H_\theta}{\partial p}(\mathbf{z}_i) - \dot{q}_i\right\|^2 + \left\|\frac{\partial H_\theta}{\partial q}(\mathbf{z}_i) + \dot{p}_i\right\|^2$$

The gradients $\partial H_\theta / \partial q$ and $\partial H_\theta / \partial p$ are computed via automatic differentiation, ensuring the symplectic structure is exact.

**Legendre transform — Lagrangian Neural Networks.** The Lagrangian $L(q, \dot{q}) = p \cdot \dot{q} - H(q, p)$ is related to $H$ via Legendre transform. Lagrangian Neural Networks (LNNs, Cranmer et al. 2020) learn $L_\theta(q, \dot{q})$ and derive the Euler-Lagrange equations:

$$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}} - \frac{\partial L}{\partial q} = 0 \implies \ddot{q} = \left(\frac{\partial^2 L}{\partial \dot{q}^2}\right)^{-1}\!\left(\frac{\partial L}{\partial q} - \frac{\partial^2 L}{\partial \dot{q} \partial q}\dot{q}\right)$$

## How It Works

**Architecture.** $H_\theta$ is a standard MLP with input $(q, p) \in \mathbb{R}^{2n}$ and scalar output. The key is using the output only through its gradients with respect to the input — the forward pass produces the Hamiltonian, and Hamilton's equations produce the dynamics.

**Integration.** After learning $H_\theta$, trajectories are rolled out with a symplectic integrator (leapfrog / Störmer-Verlet) rather than standard Runge-Kutta. The Störmer-Verlet scheme:

$$p_{n+1/2} = p_n - \frac{h}{2}\frac{\partial H}{\partial q}(q_n, p_{n+1/2})$$
$$q_{n+1} = q_n + h \frac{\partial H}{\partial p}(q_n, p_{n+1/2})$$
$$p_{n+1} = p_{n+1/2} - \frac{h}{2}\frac{\partial H}{\partial q}(q_{n+1}, p_{n+1/2})$$

Symplectic integrators preserve the symplectic 2-form $\sum_i dq_i \wedge dp_i$, leading to bounded energy errors over exponentially long times (in contrast to Runge-Kutta, where energy drifts).

**Energy conservation in practice.** Vanilla neural ODE: energy error grows linearly with simulation time. HNN + symplectic integrator: energy error oscillates but is bounded.

## Python Implementation

```python
import torch
import torch.nn as nn
import numpy as np
import matplotlib.pyplot as plt

class HNN(nn.Module):
    """Hamiltonian Neural Network for a 1D pendulum: H = p^2/2 - cos(q)"""

    def __init__(self, hidden=64):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(2, hidden), nn.Tanh(),
            nn.Linear(hidden, hidden), nn.Tanh(),
            nn.Linear(hidden, 1),
        )

    def forward(self, q, p):
        z = torch.cat([q, p], dim=-1)
        return self.net(z)

    def time_derivative(self, q, p):
        q = q.requires_grad_(True)
        p = p.requires_grad_(True)
        H = self.forward(q, p)
        dH_dq = torch.autograd.grad(H.sum(), q, create_graph=True)[0]
        dH_dp = torch.autograd.grad(H.sum(), p, create_graph=True)[0]
        return dH_dp, -dH_dq   # (q_dot, p_dot)


def generate_pendulum_data(n_traj=50, t_steps=50, dt=0.1):
    """Pendulum: H = p^2/2 - cos(q), true dynamics."""
    trajs = []
    for _ in range(n_traj):
        q = (torch.rand(1) - 0.5) * 2 * 2.5   # q in [-2.5, 2.5]
        p = (torch.rand(1) - 0.5) * 2 * 1.5
        qs, ps = [q.clone()], [p.clone()]
        for _ in range(t_steps):
            q_dot = p.clone()
            p_dot = -torch.sin(q)
            q = q + dt * q_dot
            p = p + dt * p_dot
            qs.append(q.clone())
            ps.append(p.clone())
        trajs.append((torch.stack(qs[:-1]), torch.stack(ps[:-1]),
                      torch.stack(qs[1:]),  torch.stack(ps[1:])))
    return trajs


model = HNN()
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)
trajs = generate_pendulum_data()

for epoch in range(3000):
    optimizer.zero_grad()
    total_loss = torch.tensor(0.0)
    for q, p, q_next, p_next in trajs:
        q_dot_pred, p_dot_pred = model.time_derivative(q, p)
        q_dot_true = (q_next - q) / 0.1
        p_dot_true = (p_next - p) / 0.1
        loss = ((q_dot_pred - q_dot_true) ** 2 + (p_dot_pred - p_dot_true) ** 2).mean()
        total_loss = total_loss + loss
    total_loss.backward()
    optimizer.step()
    if epoch % 500 == 0:
        print(f"Epoch {epoch}: loss={total_loss.item():.4e}")


def symplectic_rollout(model, q0, p0, n_steps=200, dt=0.05):
    """Leapfrog integrator using learned Hamiltonian."""
    q, p = q0.clone(), p0.clone()
    traj = [(q.item(), p.item())]
    for _ in range(n_steps):
        _, p_dot = model.time_derivative(q.detach(), p.detach())
        p = p + 0.5 * dt * p_dot.detach()
        q_dot, _ = model.time_derivative(q.detach(), p.detach())
        q = q + dt * q_dot.detach()
        _, p_dot = model.time_derivative(q.detach(), p.detach())
        p = p + 0.5 * dt * p_dot.detach()
        traj.append((q.item(), p.item()))
    return traj
```

## Key Results & Properties

- **Energy conservation:** HNN trajectories conserve energy to within training error for thousands of steps; baseline neural ODEs drift by orders of magnitude.
- **Symplectic structure:** The Jacobian of the learned flow satisfies $J_\phi^T J J_\phi = J$ approximately, preserving phase-space volume.
- **Data efficiency:** Because the Hamiltonian parameterises the entire energy landscape, HNNs generalise to energies outside the training distribution, unlike direct vector field learners.
- **Benchmark results:** Pendulum, mass-spring, two-body gravitational system — HNNs achieve $10-100\times$ lower long-horizon errors vs. black-box baselines.
- **Quantum extension:** Neural network quantum states can be viewed through the lens of Hamiltonian learning for the [[schrodinger-equation]].

## Limitations

**Requires $(q, p)$ coordinates.** The user must identify canonical coordinates. For systems described in non-canonical variables (e.g., Euler angles, redundant coordinates), one must either convert or use port-Hamiltonian formulations.

**Velocity vs. momentum.** Observed data is often in $(q, \dot{q})$ space (velocities), not $(q, p)$ space (momenta). Converting requires knowing the mass matrix or learning it simultaneously (handled by LNNs but at higher cost).

**Stiffness.** For stiff systems (fast oscillations), leapfrog requires tiny step sizes. Adaptive symplectic integrators (e.g., RATTLE) are needed.

**Dissipative systems.** Pure Hamiltonian mechanics conserves energy; real systems often have damping. Port-Hamiltonian networks or Metriplectic networks extend HNNs to dissipative dynamics.

**Chaotic systems.** In chaotic regimes ($\lambda_{\max} > 0$), exponential divergence is unavoidable. HNNs conserve statistical invariants (invariant measures) but cannot track individual trajectories.

## Applications

- **Molecular dynamics:** Learning interatomic potentials that respect energy conservation for long-timescale simulations.
- **Multi-body celestial mechanics:** Accurate orbital mechanics without numerical energy drift, relevant for long-duration space mission design.
- **Plasma physics:** Learning Hamiltonian structures in particle-in-cell simulations.
- **Quantum systems:** Variational Monte Carlo with neural network wave functions under Hamiltonian operators from [[schrodinger-equation]].
- **Robotics:** Control of Hamiltonian mechanical systems (robot arms, legged robots) with provable energy bounds.
- **Finance:** Leveraging Hamiltonian structures in stochastic volatility models; connections to [[geometric-brownian-motion]] via symplectic geometry of the path space.

## Related Topics

- [[schrodinger-equation]] — quantum Hamiltonian; HNN ideas extend to quantum systems
- [[uncertainty-principle]] — phase-space uncertainty connects to symplectic geometry
- [[geometric-brownian-motion]] — stochastic version of Hamiltonian dynamics in finance
- [[pinns]] — complementary: learn PDE solutions rather than conserved quantities
- [[equivariant-nn]] — symmetry-aware networks, often combined with HNNs
