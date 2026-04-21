---
title: "Hidden Markov Models (HMM)"
category: "Applied Probability"
order: 33
lang: "en"
slug: "hmm"
---

# Hidden Markov Models (HMM)

A Hidden Markov Model (HMM) is a statistical Markov model in which the system being modeled is assumed to be a Markov process with **unobserved (hidden) states**. HMMs were the foundational technology for speech recognition and natural language processing before the deep learning era (RNNs, Transformers).

## The Model Structure

An HMM consists of two linked sequences:
1.  **Hidden States ($Z_t$)**: A sequence of unobserved states forming a Markov chain. The probability of moving to the next state depends only on the current state: $P(Z_t \mid Z_{t-1})$.
2.  **Observations ($X_t$)**: A sequence of visible outputs. The observation at time $t$ depends *only* on the hidden state at time $t$: $P(X_t \mid Z_t)$.

The model is fully defined by three parameters:
- **$\pi$ (Initial Probabilities)**: $P(Z_1 = i)$
- **$A$ (Transition Matrix)**: $A_{ij} = P(Z_t = j \mid Z_{t-1} = i)$
- **$B$ (Emission Matrix/Densities)**: $B_i(x) = P(X_t = x \mid Z_t = i)$

## The Three Fundamental Problems

To use HMMs practically, we must solve three computational problems. Fortunately, all three have efficient dynamic programming solutions.

### 1. Likelihood (Evaluation)
*Given an HMM and an observation sequence $X$, what is the probability that the model generated $X$?*
**Solution**: The **Forward Algorithm** computes this in $O(N^2 T)$ time (where $N$ is the number of states, $T$ is sequence length) instead of the naive $O(N^T)$ time.

### 2. Decoding (Inference)
*Given an HMM and an observation sequence $X$, what is the most likely sequence of hidden states $Z$ that produced it?*
**Solution**: The **Viterbi Algorithm**. It recursively calculates the highest probability path leading to each state at each time step.

### 3. Learning (Training)
*Given an observation sequence $X$, how do we find the parameters $(\pi, A, B)$ that maximize the likelihood of the data?*
**Solution**: The **Baum-Welch Algorithm**, which is a specific instance of the [[expectation-maximization|EM Algorithm]] adapted for sequential data using the Forward-Backward passes.

## Visualization: The Viterbi Path

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": 1, "path_A": 0.8, "path_B": 0.2},
    {"time": 2, "path_A": 0.3, "path_B": 0.7},
    {"time": 3, "path_A": 0.1, "path_B": 0.9},
    {"time": 4, "path_A": 0.6, "path_B": 0.4}
  ],
  "lines": [
    {"dataKey": "path_B", "stroke": "#ef4444", "name": "Most Probable State Sequence (Viterbi)"}
  ]
}
```
*The Viterbi algorithm doesn't just pick the most likely state at each step independently; it finds the globally optimal sequence, accounting for the transition probabilities between states.*

## Modern Context

While large neural networks have replaced HMMs in raw performance for NLP, HMMs remain vital because they are **interpretable**, highly data-efficient, and mathematically rigorous. They are still widely used in bioinformatics (gene finding), finance (regime-switching models), and robotics.

## Related Topics

[[discrete-markov-chains]] — the underlying process for the hidden states  
[[expectation-maximization]] — the engine behind Baum-Welch  
[[stochastic-processes]] — continuous-time equivalents
---
