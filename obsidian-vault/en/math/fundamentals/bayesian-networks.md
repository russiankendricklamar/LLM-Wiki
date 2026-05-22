---
title: 'Probability: Bayesian Networks'
category: Math Foundations
order: 89
lang: en
slug: bayesian-networks
---

A **Bayesian Network** is a probabilistic graphical model representing a set of variables and their conditional dependencies via a Directed Acyclic Graph (DAG).

### DAGs and d-separation
In the DAG, edges represent direct probabilistic influence. **d-separation** is a criterion for deciding, from a given causal graph, whether a set of variables $X$ is independent of $Y$ given $Z$. 

### Belief Propagation
Inference in these networks often uses algorithms like Belief Propagation (message passing), updating marginal probabilities based on new evidence. It heavily utilizes [[graph-theory-basics|Graph Theory]].
