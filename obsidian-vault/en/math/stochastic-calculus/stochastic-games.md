---
title: "Stochastic Differential Games"
category: "Stochastic Calculus"
order: 20
lang: "en"
slug: "stochastic-games"
---

# Stochastic Differential Games

Stochastic Differential Games (SDG) generalize game theory to continuous-time systems governed by **Stochastic Differential Equations (SDEs)**. In these games, multiple players interact over time, each trying to optimize their own objective function while the state of the system evolves under the influence of both the players' actions and random noise.

## Mathematical Formulation

Consider $N$ players. The state $X_t$ evolves according to:
$$dX_t = f(t, X_t, u_1, u_2, \dots, u_N) dt + \sigma(t, X_t) dW_t$$
where $u_i$ is the control (strategy) of player $i$, and $W_t$ is a Wiener process.

Each player $i$ aims to minimize a cost functional:
$$J_i(u_1, \dots, u_N) = \mathbb{E} \left[ \int_0^T L_i(t, X_t, u_1, \dots, u_N) dt + \Psi_i(X_T) \right]$$

## Types of Equilibria

### 1. Nash Equilibrium
A set of strategies $(u_1^*, \dots, u_N^*)$ is a Nash equilibrium if no player can reduce their cost by unilaterally changing their strategy:
$$J_i(u_i^*, u_{-i}^*) \leq J_i(u_i, u_{-i}^*) \quad \forall u_i, i$$

### 2. Zero-Sum Games
In a two-player zero-sum game, $J_1 = -J_2$. This leads to a **saddle-point** problem:
$$\min_{u_1} \max_{u_2} J(u_1, u_2)$$
These games are solved using the **Isaacs Equation**, a stochastic version of the Hamilton-Jacobi-Bellman equation.

## The Master Equation and MFGs

As the number of players $N \to \infty$, stochastic differential games transition into [[mean-field-games|Mean Field Games]]. The limit is described by the **Master Equation**, an infinite-dimensional PDE that characterizes the value function for a continuum of players.

## Visualization: Strategy Interaction

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": 0, "player1": 10, "player2": 10, "noise": 0},
    {"t": 1, "player1": 8, "player2": 12, "noise": 0.5},
    {"t": 2, "player1": 7, "player2": 15, "noise": -1.2},
    {"t": 3, "player1": 9, "player2": 14, "noise": 0.2},
    {"t": 4, "player1": 6, "player2": 18, "noise": 1.5}
  ],
  "lines": [
    {"dataKey": "player1", "stroke": "#3b82f6", "name": "Strategy P1 (Conservative)"},
    {"dataKey": "player2", "stroke": "#ef4444", "name": "Strategy P2 (Aggressive)"}
  ]
}
```
*In a stochastic game, players adjust their controls in real-time based on the observed state and the realization of noise, leading to dynamic, coupled trajectories.*

## Applications

1.  **Quantitative Finance**: Modeling competition between market makers or large institutional investors (Predatory Trading).
2.  **Cybersecurity**: Defense-attack games on network infrastructure where the state of the network is stochastic.
3.  **Climate Change**: International games where countries decide on carbon emission taxes under uncertain economic growth.

## Related Topics

[[stochastic-differential-equations]] — the motion law  
[[mean-field-games]] — the $N \to \infty$ limit  
[[stochastic-control]] — the single-player version
---
