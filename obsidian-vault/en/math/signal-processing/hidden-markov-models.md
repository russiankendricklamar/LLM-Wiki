---
title: 'Signal Processing: Hidden Markov Models'
category: Advanced Math and Stats
order: 182
lang: en
slug: hidden-markov-models
---

An HMM models a system assumed to be a Markov process with unobservable (hidden) states, but observable emissions.

### Model Parameters
Defined by $\lambda = (A, B, \pi)$ where $A$ is the transition matrix, $B$ is the emission probability matrix, and $\pi$ is the initial state distribution.

### The Viterbi Algorithm
To find the most likely sequence of hidden states $X = (x_1, \dots, x_T)$ given observations $Y = (y_1, \dots, y_T)$, we use dynamic programming:
$V_{t, k} = \max_{x \in X} P(x_1 \dots x_{t-1}, x_t = k, y_1 \dots y_t | \lambda)$
$V_{t, k} = P(y_t | k) \cdot \max_{j} (A_{j,k} V_{t-1, j})$
The complexity is $O(T \cdot |S|^2)$. The Forward-Backward (Baum-Welch) algorithm is used to compute marginal probabilities and train the model via Expectation-Maximization.
