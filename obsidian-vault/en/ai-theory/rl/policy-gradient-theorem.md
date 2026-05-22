---
title: 'Reinforcement Learning: Policy Gradient Theorem'
category: AI Theory
order: 168
lang: en
slug: policy-gradient-theorem
---

Policy gradient methods directly optimize the policy parameters $\theta$.

### The Theorem
The expected return is $J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta}[R(\tau)]$. The Policy Gradient Theorem states that the derivative of the expected reward with respect to the policy parameters does not depend on the derivative of the state distribution:
$\nabla_\theta J(\theta) = \int_S d^\pi(s) \int_A \nabla_\theta \pi_\theta(a|s) Q^\pi(s, a) da ds$
$\nabla_\theta J(\theta) = \mathbb{E}_{\pi_\theta} [ \nabla_\theta \log \pi_\theta(a|s) Q^\pi(s, a) ]$

### REINFORCE
The REINFORCE algorithm uses Monte Carlo returns $G_t$ as an unbiased estimate of $Q^\pi(s_t, a_t)$. To reduce high variance, a baseline $b(s)$ (like the value function $V(s)$) is subtracted, yielding the Advantage function $A(s, a) = Q(s, a) - V(s)$.
