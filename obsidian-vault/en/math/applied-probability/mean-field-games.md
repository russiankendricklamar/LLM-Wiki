---
title: "Mean Field Games"
category: "Applied Probability"
order: 28
lang: "en"
slug: "mean-field-games"
---

# Mean Field Games

Mean Field Games (MFG) is a theory introduced by Lasry and Lions (2006) and independently by Huang, Caines, and Malhamé. It studies the behavior of large populations of small, interacting agents who make decisions to optimize their own objectives. The key insight is that as the number of agents $N \to \infty$, the influence of any single agent becomes negligible, and the system can be described by a **continuum limit**.

## The Core Concept

In an MFG, each agent is influenced by the **mean field** (the collective distribution) of all other agents. This transforms a complex $N$-player game into a simpler problem involving a single representative agent interacting with a global density $\rho(t, x)$.

## The MFG System of Equations

The equilibrium of a mean field game is typically described by a coupled system of two partial differential equations (PDEs):

### 1. Hamilton-Jacobi-Bellman (HJB) Equation
This equation describes the **optimal strategy** (value function $u$) of a representative agent, moving backward in time:
$$-\partial_t u - \Delta u + H(x, \nabla u) = F(x, \rho)$$
where $H$ is the Hamiltonian and $F$ is the coupling term representing the interaction with the population.

### 2. Fokker-Planck (Kolmogorov) Equation
This equation describes the **evolution of the population density** $\rho$, moving forward in time, given that agents follow the optimal strategy:
$$\partial_t \rho - \Delta \rho - \text{div}(\rho \nabla_p H(x, \nabla u)) = 0$$

## Equilibrium: The Nash Limit

A solution $(u, \rho)$ to this system represents a **Mean Field Equilibrium**. At this state, the density $\rho$ is consistent with the optimal choices of individuals, and no single agent can improve their outcome by changing their strategy.

## Connection to AI and Physics

1.  **Reinforcement Learning**: MFG provides a framework for Multi-Agent RL (MARL) with thousands or millions of agents, avoiding the exponential complexity of traditional game theory.
2.  **Generative Modeling**: There is a deep link between MFGs and **Score-based Generative Models** (Diffusion). The process of transforming noise into data can be viewed as an optimal transport problem or a mean field control problem.
3.  **Economics**: Modeling wealth distribution, market crowd dynamics, and the propagation of shocks in financial networks.

## Visualization: Density Evolution

```chart
{
  "type": "line",
  "xAxis": "x",
  "data": [
    {"x": -2, "initial": 0.05, "equilibrium": 0.01},
    {"x": -1, "initial": 0.15, "equilibrium": 0.10},
    {"x": 0, "initial": 0.60, "equilibrium": 0.78},
    {"x": 1, "initial": 0.15, "equilibrium": 0.10},
    {"x": 2, "initial": 0.05, "equilibrium": 0.01}
  ],
  "lines": [
    {"dataKey": "initial", "stroke": "#94a3b8", "name": "Initial Distribution"},
    {"dataKey": "equilibrium", "stroke": "#3b82f6", "name": "MFG Equilibrium Density"}
  ]
}
```
*In many MFGs, agents are attracted to a common goal or repelled from crowded areas, leading to a highly structured equilibrium density.*

## Related Topics

[[stochastic-control]] — the single-agent foundation  
[[interacting-particle-systems]] — the discrete counterpart  
[[optimal-transport]] — MFG with specific cost functions
---
