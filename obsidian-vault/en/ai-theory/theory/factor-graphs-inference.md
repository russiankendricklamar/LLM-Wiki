---
title: "Factor Graphs & Sum-Product Algorithm"
category: "AI Theory"
order: 107
lang: "en"
slug: "factor-graphs-inference"
---

# Factor Graphs & Sum-Product Algorithm

## What Is It

A Factor Graph is a bipartite graph that represents the factorization of a global function (typically a probability distribution) into a product of local functions. It consists of **variable nodes** (representing random variables) and **factor nodes** (representing constraints or local potentials). The **Sum-Product Algorithm**, also known as Belief Propagation, is an efficient message-passing algorithm for computing marginal distributions or the partition function of the system.

## Mathematical Formulation

Consider a global function $f(x_1, \dots, x_n)$ that factorizes as:
$$f(X) = \prod_{s \in S} f_s(X_s)$$
where $X_s$ is a subset of the variables $\{x_1, \dots, x_n\}$.
In the factor graph:
- For each variable $x_i$, there is a variable node.
- For each factor $f_s$, there is a factor node.
- An edge exists between factor $f_s$ and variable $x_i$ if and only if $x_i \in X_s$.

## The Sum-Product Algorithm

The algorithm computes the marginal $p(x_i) = \sum_{X \setminus \{x_i\}} f(X)$ by passing messages along the edges of the factor graph.

### Message Passing Rules
1. **Variable to Factor Message:**
   $$m_{x \to f}(x) = \prod_{h \in n(x) \setminus \{f\}} m_{h \to x}(x)$$
   A variable node sends a message to a factor node by multiplying all incoming messages from its other neighboring factors.

2. **Factor to Variable Message:**
   $$m_{f \to x}(x) = \sum_{X_s \setminus \{x\}} f_s(X_s) \prod_{y \in n(f) \setminus \{x\}} m_{y \to f}(y)$$
   A factor node sends a message to a variable node by multiplying its local function with incoming messages from all other neighboring variables, and then summing (marginalizing) over those variables.

### Convergence
On a tree-structured graph, the Sum-Product algorithm converges to the exact marginals in a finite number of steps (proportional to the diameter). On graphs with cycles, it becomes **Loopy Belief Propagation**, which provides an approximation often related to the stationary points of the **Bethe Free Energy**.

## Beyond Sum-Product: Max-Product

By replacing the summation with a maximum operator, we obtain the **Max-Product Algorithm** (or Viterbi algorithm in HMMs), which computes the Maximum A Posteriori (MAP) assignment:
$$X^* = \arg\max_X f(X)$$

## Junction Tree Algorithm

For graphs with many cycles, the factor graph can be transformed into a tree of cliques called a **Junction Tree**. Inference on this tree provides exact results but the complexity scales exponentially with the **treewidth** of the original graph.

## DERIVATION: Marginal on a Chain

Consider $f(x_1, x_2, x_3) = f_a(x_1, x_2)f_b(x_2, x_3)$. To find $p(x_1)$:
$p(x_1) = \sum_{x_2, x_3} f_a(x_1, x_2)f_b(x_2, x_3)$
Using the distributive law:
$p(x_1) = \sum_{x_2} f_a(x_1, x_2) \left[ \sum_{x_3} f_b(x_2, x_3) \right]$
In message passing terms:
- $m_{x_3 \to f_b}(x_3) = 1$
- $m_{f_b \to x_2}(x_2) = \sum_{x_3} f_b(x_2, x_3) \cdot 1$
- $m_{x_2 \to f_a}(x_2) = m_{f_b \to x_2}(x_2)$
- $m_{f_a \to x_1}(x_1) = \sum_{x_2} f_a(x_1, x_2) m_{x_2 \to f_a}(x_2)$
The final marginal is $p(x_1) = m_{f_a \to x_1}(x_1)$, which matches the manual derivation.

## Related Topics
[[bayesian-networks|Bayesian Networks]] — a directed alternative  
[[markov-random-fields|Markov Random Fields]] — the undirected counterpart  
[[variational-inference-math|Variational Inference]] — the approximation framework  
[[kalman-filter|Kalman Filter]] — Sum-Product in continuous Gaussian space  
[[graph-theory|Graph Theory]] — treewidth and cliques
