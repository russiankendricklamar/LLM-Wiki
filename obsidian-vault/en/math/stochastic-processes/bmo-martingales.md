---
title: BMO Martingales
category: Stochastic Processes
order: 155
lang: en
slug: bmo-martingales
---

# BMO Martingales

BMO (Bounded Mean Oscillation) martingales play a crucial role in stochastic analysis, particularly in characterizing the integrability of stochastic exponentials and Girsanov transformations.

## Definition

A continuous martingale $M$ is in $\text{BMO}$ if there exists a constant $C > 0$ such that for all stopping times $\tau$:
$$ \mathbb{E} \left[ \langle M \rangle_\infty - \langle M \rangle_\tau \mid \mathcal{F}_\tau \right] \le C^2 \quad \text{a.s.} $$
The BMO norm is defined as $\|M\|_{\text{BMO}} = \sup_\tau \| \mathbb{E}[\langle M \rangle_\infty - \langle M \rangle_\tau | \mathcal{F}_\tau]^{1/2} \|_\infty$.

## John-Nirenberg Inequality

A fundamental property of BMO martingales is the John-Nirenberg inequality, which states that for an optimal choice of $C$, the tail distribution decays exponentially:
$$ \mathbb{P} \left( |M_\infty - M_\tau| > \lambda \mid \mathcal{F}_\tau \right) \le C_1 \exp\left(- \frac{C_2 \lambda}{\|M\|_{\text{BMO}}}\right) $$
This implies that $M_\infty - M_\tau$ has finite moments of all orders.

## Application: Kazamaki and Novikov

If $M \in \text{BMO}$, the stochastic exponential $\mathcal{E}(M)_t = \exp(M_t - \frac{1}{2}\langle M \rangle_t)$ is a uniformly integrable martingale. This provides a simpler, structural condition for the [[girsanov-theorem]] to apply, bypassing the pointwise integrability check of Novikov's or Kazamaki's conditions. BMO martingales are also heavily utilized in the theory of [[bsdes]] with quadratic growth.
