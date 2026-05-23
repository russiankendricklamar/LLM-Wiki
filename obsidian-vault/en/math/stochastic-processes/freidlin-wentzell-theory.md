---
title: Freidlin-Wentzell Theory
category: Stochastic Processes
order: 155
lang: en
slug: freidlin-wentzell-theory
---

# Freidlin-Wentzell Theory

Freidlin-Wentzell theory provides a large deviation principle (LDP) for randomly perturbed dynamical systems, describing the probabilities of rare events, such as escaping a potential well.

## Small Noise Perturbation

Consider a system with small noise $\epsilon > 0$:
$$ dX^\epsilon_t = b(X^\epsilon_t) dt + \sqrt{\epsilon} \sigma(X^\epsilon_t) dW_t $$
As $\epsilon \to 0$, $X^\epsilon$ converges to the deterministic ODE $\dot{x} = b(x)$. The theory quantifies the rate of exponential decay of the probability that $X^\epsilon$ deviates significantly from $x$.

## Action Functional (Rate Function)

The large deviation principle is governed by the action functional (or rate function):
$$ I_T(\phi) = \frac{1}{2} \int_0^T \left\| \sigma^{-1}(\phi_t) (\dot{\phi}_t - b(\phi_t)) \right\|^2 dt $$
for absolutely continuous paths $\phi$, and $I_T(\phi) = \infty$ otherwise. Roughly, $\mathbb{P}(X^\epsilon \approx \phi) \asymp \exp\left( -\frac{I_T(\phi)}{\epsilon} \right)$.

## Exit Problem and Kramers' Law

For a domain $D$ containing a stable equilibrium $x^*$, the most likely exit path minimizes the action functional over paths connecting $x^*$ to $\partial D$. The quasi-potential is:
$$ V(x^*, y) = \inf_{T>0} \inf_{\phi: \phi_0=x^*, \phi_T=y} I_T(\phi) $$
The exit time $\tau^\epsilon$ scales as $\mathbb{E}[\tau^\epsilon] \sim \exp\left(\frac{\min_{y \in \partial D} V(x^*, y)}{\epsilon}\right)$, formalizing Kramers' escape rate in [[statistical-mechanics]].
