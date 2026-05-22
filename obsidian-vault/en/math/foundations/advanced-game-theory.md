---
title: Stochastic Games & Correlated Equilibrium
category: Math Foundations
order: 69
lang: en
slug: advanced-game-theory
---

# Stochastic Games & Correlated Equilibrium

## Correlated Equilibrium
A correlated equilibrium (Aumann, 1974) generalizes Nash equilibrium by allowing players to base their decisions on a shared randomization device. A probability distribution $p$ over the set of joint action profiles $S = \prod_i S_i$ is a correlated equilibrium if for every player $i$ and all actions $s_i, s_i' \in S_i$:
$$ \sum_{s_{-i} \in S_{-i}} p(s_i, s_{-i}) u_i(s_i, s_{-i}) \ge \sum_{s_{-i} \in S_{-i}} p(s_i, s_{-i}) u_i(s_i', s_{-i}) $$
The set of correlated equilibria is a convex polytope, making it computationally easier to find (via linear programming) than Nash equilibria.

## Stochastic Games
A stochastic game (Shapley, 1953) transitions through states based on the players' joint actions. It is defined by a tuple $\langle \mathcal{S}, \mathcal{N}, (A_i)_{i \in \mathcal{N}}, P, R, \gamma \rangle$:
- $\mathcal{S}$ is the state space.
- $\mathcal{N}$ is the set of players.
- $P(s' \mid s, a)$ is the transition probability given state $s$ and joint action $a$.
- $R_i(s, a)$ is the reward for player $i$.

The value of the game for player $i$ follows a generalized Bellman equation. In zero-sum games, Shapley proved the existence of a unique value vector $V^*$ satisfying:
$$ V^*(s) = \text{val}\left[ R(s, \cdot) + \gamma \sum_{s'} P(s' \mid s, \cdot) V^*(s') \right] $$
where $\text{val}[M]$ is the minimax value of the matrix game $M$.

