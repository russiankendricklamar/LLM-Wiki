---
title: 'Generative Models: GAN Minimax Math'
category: AI Theory
order: 161
lang: en
slug: gan-minimax
---

Generative Adversarial Networks (GANs) utilize a two-player zero-sum game between a Generator $G$ and a Discriminator $D$.

### Minimax Objective
The discriminator aims to distinguish real data $x \sim p_{data}$ from generated data $G(z)$ where $z \sim p_z$. The generator tries to fool the discriminator. The objective is:
$\min_G \max_D V(D, G) = \mathbb{E}_{x \sim p_{data}}[\log D(x)] + \mathbb{E}_{z \sim p_z}[\log(1 - D(G(z)))]$

### Optimal Discriminator and JSD
For a fixed $G$, the optimal discriminator is:
$D^*_G(x) = \frac{p_{data}(x)}{p_{data}(x) + p_g(x)}$
Plugging $D^*_G$ back into the objective yields:
$V(D^*_G, G) = -\log 4 + 2 \cdot D_{JS}(p_{data} || p_g)$
Thus, the optimal $G$ perfectly minimizes the Jensen-Shannon Divergence between the data distribution and the generated distribution.
