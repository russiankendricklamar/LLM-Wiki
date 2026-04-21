---
title: "Statistical Decision Theory"
category: "Foundations"
order: 21
lang: "en"
slug: "decision-theory"
---

# Statistical Decision Theory

Statistical Decision Theory provides a formal framework for making choices under uncertainty. It unifies estimation, hypothesis testing, and prediction into a single mathematical problem: minimizing a **Risk Function**.

## The Basic Components

1.  **State Space ($\Theta$)**: The set of possible true values of a parameter (the state of nature).
2.  **Action Space ($\mathcal{A}$)**: The set of possible decisions (e.g., an estimate $\hat{\theta}$).
3.  **Loss Function $L(\theta, a)$**: A non-negative function that measures the "cost" of taking action $a$ when the true state is $\theta$.
    - *Squared Error*: $L(\theta, a) = (\theta - a)^2$
    - *Absolute Error*: $L(\theta, a) = |\theta - a|$
    - *0-1 Loss*: $L(\theta, a) = 1$ if $\theta \neq a$, else 0.

## The Risk Function ($R$)

The **Risk** of a decision rule (estimator) $\delta(X)$ is the expected loss over all possible data samples:
$$R(\theta, \delta) = \mathbb{E}_{X \mid \theta} [ L(\theta, \delta(X)) ]$$

A good decision rule is one that has "low risk."

## Admissibility and Dominance

- A rule $\delta_1$ **dominates** $\delta_2$ if $R(\theta, \delta_1) \leq R(\theta, \delta_2)$ for all $\theta$, and the inequality is strict for at least one $\theta$.
- A rule is **Admissible** if it is not dominated by any other rule. Admissibility is the bare minimum requirement for a statistical method.

## Two Paradigms for Choice

How do we pick a single "best" rule if no rule dominates all others?

### 1. Minimax Strategy (Frequentist)
Choose the rule that minimizes the *maximum* possible risk (preparing for the worst-case scenario):
$$\delta_{minimax} = \arg\min_\delta \sup_\theta R(\theta, \delta)$$

### 2. Bayes Strategy (Bayesian)
Assign a prior $p(\theta)$ and minimize the **Bayes Risk** (average risk):
$$r(p, \delta) = \int R(\theta, \delta) p(\theta) d\theta$$

## Connection to Machine Learning

Decision theory is the foundation of **Empirical Risk Minimization (ERM)**. In ML, we don't know $p(x, y)$, so we minimize the risk over the training data (Empirical Risk) and use regularization to ensure the rule is admissible and generalizes well.

## Related Topics

[[mle]] — a specific decision rule  
[[bayesian-inference]] — the source of Bayes rules  
[[mechanism-design]] — decision theory with multiple self-interested agents
---
