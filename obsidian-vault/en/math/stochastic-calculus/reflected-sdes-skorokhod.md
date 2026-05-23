---
title: Reflected SDEs & Skorokhod Problem
category: Stochastic Calculus
order: 155
lang: en
slug: reflected-sdes-skorokhod
---

# Reflected SDEs & Skorokhod Problem

Reflected Stochastic Differential Equations (RSDEs) restrict the state space of a stochastic process to a domain $D$, introducing a "push" term that activates only at the boundary to keep the process inside.

## The Skorokhod Problem

For a continuous path $w$ and domain $D = [0, \infty)$, the Skorokhod problem seeks a pair $(x, k)$ such that:
1. $x(t) = w(t) + k(t) \ge 0$
2. $k$ is non-decreasing, $k(0)=0$
3. $\int_0^t x(s) dk(s) = 0$ (the compensator $k$ only grows when $x=0$).
The explicit solution is $k(t) = \sup_{0 \le s \le t} \max(-w(s), 0)$.

## RSDE Dynamics

In multidimensional domains $D \subset \mathbb{R}^d$, an RSDE is formulated as:
$$ dX_t = b(t, X_t) dt + \sigma(t, X_t) dW_t + n(X_t) dK_t $$
where $n(x)$ is the inward normal vector at the boundary $\partial D$, and $K_t$ is a non-decreasing local time process that increases only when $X_t \in \partial D$.

## Application to American Options

Reflected BSDEs (RBSDEs) involve a lower barrier $L_t$. The solution satisfies $Y_t \ge L_t$ with an added compensator $K_t$ pushing $Y_t$ up. This perfectly models the valuation of American options, where early exercise represents the boundary of the stopping region, deeply connected to optimal stopping in [[stochastic-control]].
