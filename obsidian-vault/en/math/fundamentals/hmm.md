---
title: "Hidden Markov Models (HMM)"
category: "Math Foundations"
order: 67
lang: "en"
slug: "hmm"
---

# Hidden Markov Models (HMM)

A Hidden Markov Model is a statistical Markov model in which the system being modeled is assumed to be a [[markov-chains|Markov process]] with unobservable ("hidden") states. HMMs are fundamentally used for sequential data like time series or speech.

## The Model Architecture
An HMM is defined by:
1. **Hidden States:** $Z = \{z_1, z_2, \dots, z_T\}$, taking values in a finite set $\{1, \dots, K\}$.
2. **Observations:** $X = \{x_1, x_2, \dots, x_T\}$.
3. **Initial Probabilities:** $\pi_k = P(z_1 = k)$.
4. **Transition Probabilities:** $A_{ij} = P(z_t = j | z_{t-1} = i)$.
5. **Emission Probabilities:** $B_{k}(x_t) = P(x_t | z_t = k)$. This can be discrete or continuous (e.g., Gaussian).

The joint probability of a sequence of states and observations is:
$$ P(X, Z) = P(z_1) P(x_1 | z_1) \prod_{t=2}^T P(z_t | z_{t-1}) P(x_t | z_t) $$

## Three Fundamental Problems

### 1. Evaluation (Forward Algorithm)
**Goal:** Compute the probability of the observation sequence $P(X)$.
Because marginalizing over all possible paths $Z$ takes $O(K^T)$ time, we use dynamic programming. We define the forward variable $\alpha_t(i) = P(x_1, \dots, x_t, z_t = i)$.
$$ \alpha_{t}(j) = B_j(x_t) \sum_{i=1}^K \alpha_{t-1}(i) A_{ij} $$
This reduces the complexity to $O(T K^2)$.

### 2. Decoding (Viterbi Algorithm)
**Goal:** Find the most likely sequence of hidden states $Z^* = \arg\max_Z P(Z | X)$.
Instead of summing probabilities like the Forward algorithm, Viterbi takes the maximum. We define $\delta_t(j)$ as the maximum probability of a path ending in state $j$ at time $t$.
$$ \delta_{t}(j) = B_j(x_t) \max_{i} [\delta_{t-1}(i) A_{ij}] $$
We keep track of the argmax to backtrace the optimal path.

### 3. Learning (Baum-Welch Algorithm)
**Goal:** Given $X$, learn parameters $\pi, A, B$ that maximize $P(X)$.
This is an application of the [[em-algorithm|EM Algorithm]]. We use the Forward-Backward algorithm to compute the required expectations (E-step), then update the parameters (M-step).
