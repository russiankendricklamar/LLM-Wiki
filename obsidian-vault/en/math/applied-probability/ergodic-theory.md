---
title: Ergodic Theory & Mixing
category: Applied Probability
order: 66
lang: en
slug: ergodic-theory
---

# Ergodic Theory & Mixing

## Measure-Preserving Dynamical Systems
A dynamical system $(X, \mathcal{B}, \mu, T)$ consists of a probability space and a measurable map $T: X \to X$ such that $\mu(T^{-1}(A)) = \mu(A)$ for all $A \in \mathcal{B}$.

## Ergodicity
The system is ergodic if any invariant set $A$ (where $T^{-1}(A) = A$) satisfies $\mu(A) = 0$ or $\mu(A) = 1$. This implies that time averages equal space averages almost everywhere.

## Birkhoff's Ergodic Theorem
Let $f \in L^1(X, \mu)$. For almost every $x \in X$, the time average converges to the spatial average:
$$ \lim_{n \to \infty} \frac{1}{n} \sum_{k=0}^{n-1} f(T^k(x)) = \int_X f \,d\mu $$
If the system is not ergodic, it converges to the conditional expectation $\mathbb{E}[f \mid \mathcal{I}]$, where $\mathcal{I}$ is the $\sigma$-algebra of invariant sets.

## Mixing and [[shannon-entropy|Entropy]]
Strong mixing implies that events become asymptotically independent:
$$ \lim_{n \to \infty} \mu(A \cap T^{-n}(B)) = \mu(A)\mu(B) $$
Kolmogorov-Sinai entropy $h_\mu(T)$ measures the average rate of information production of the system, taking values from the Shannon entropy of measurable partitions:
$$ H_\mu(P) = -\sum_{A \in P} \mu(A) \log \mu(A) $$
$$ h_\mu(T) = \sup_P \lim_{n \to \infty} \frac{1}{n} H_\mu\left(\bigvee_{k=0}^{n-1} T^{-k} P\right) $$

