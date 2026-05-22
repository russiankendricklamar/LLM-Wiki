---
title: 'Probabilistic Graphical Models: Exact Inference'
category: Advanced Math and Stats
order: 179
lang: en
slug: bayesian-inference-exact
---

Exact inference in Bayesian Networks requires computing marginal distributions $P(X | E=e)$.

### Variable Elimination
The naive marginalization $\sum_{X \setminus \{Q\}} P(X)$ is $O(2^N)$. Variable Elimination algebraically manipulates the sum of products by "pushing" sums inward:
$\sum_A \sum_B P(A) P(B|A) = \sum_A P(A) \sum_B P(B|A)$
Intermediate factors $\tau$ are generated. The complexity is $O(2^w)$ where $w$ is the induced width of the elimination ordering. Finding the optimal ordering is NP-hard.

### Junction Tree Algorithm
For multiple queries, the Junction Tree (or Clique Tree) algorithm is used. The DAG is moralized, triangulated, and converted into a tree of cliques. Message passing (Belief Propagation) is then run on this tree, calculating all marginals in two passes (Upward/Downward), effectively caching Variable Elimination steps.
