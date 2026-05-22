---
title: "Markov Chains"
category: "Math Foundations"
order: 66
lang: "en"
slug: "markov-chains"
---

# Markov Chains

A Markov Chain is a stochastic process that transitions from one state to another within a finite or countable state space $\mathcal{S}$, characterized by the memoryless **Markov property**.

## The Markov Property
The probability of transitioning to the next state depends only on the current state, not on the sequence of events that preceded it:
$$ P(X_{t+1} = j | X_t = i, X_{t-1} = i_{t-1}, \dots, X_0 = i_0) = P(X_{t+1} = j | X_t = i) $$

## Transition Matrix
For a time-homogeneous Markov chain with $N$ states, the transition probabilities are organized in an $N \times N$ transition matrix $P$, where $P_{ij} = P(X_{t+1} = j | X_t = i)$.
Because probabilities must sum to 1, each row of $P$ sums to 1 (a **stochastic matrix**): $\sum_{j} P_{ij} = 1$.

The probability distribution over states at time $t$ is represented by a row vector $\pi^{(t)}$. The state evolves as:
$$ \pi^{(t+1)} = \pi^{(t)} P $$
Over $k$ steps, $\pi^{(t+k)} = \pi^{(t)} P^k$.

## Stationary Distributions
A distribution $\pi$ is a **stationary distribution** if it remains unchanged after a transition:
$$ \pi = \pi P $$
Mathematically, $\pi$ is a left eigenvector of $P$ corresponding to the eigenvalue $\lambda = 1$.

## Irreducibility and Aperiodicity
- **Irreducible:** A chain is irreducible if it is possible to get to any state from any other state (not necessarily in one step).
- **Aperiodic:** A state is aperiodic if the greatest common divisor of the lengths of its cycles is 1. If all states are aperiodic, the chain is aperiodic.

**Ergodic Theorem:** If a finite Markov chain is irreducible and aperiodic, it has a unique stationary distribution $\pi^*$, and for any initial distribution $\pi^{(0)}$, the chain converges to $\pi^*$:
$$ \lim_{t \to \infty} \pi^{(t)} = \pi^* $$
This convergence is the foundation of Markov Chain Monte Carlo (MCMC) algorithms, such as Metropolis-Hastings.
