---
title: ResNet
category: AI Architectures
order: 126
lang: en
slug: resnet
---

## Overview
ResNet (Residual Network) allows training of extremely deep neural networks by utilizing skip connections or shortcuts.

## Mechanism
Instead of learning a direct mapping $H(x)$, residual blocks learn a residual mapping $F(x) = H(x) - x$. The output of the block becomes:
$$ y = F(x) + x $$
This mitigates the vanishing gradient problem, allowing networks with over 100 layers to be trained efficiently. It is foundational for [[cnn]] architectures.