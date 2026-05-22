---
title: Regularization
category: Optimization
order: 133
lang: en
slug: regularization-math
---

## Overview
Regularization adds a penalty term to the loss function to prevent overfitting and improve generalization.

## L1 and L2
- **L1 (Lasso):** Penalty proportional to the sum of absolute weights. Induces sparsity (some weights become exactly zero).
  $$ L_{total} = L(\theta) + \lambda \sum |\theta_i| $$
- **L2 (Ridge):** Penalty proportional to the sum of squared weights. Keeps weights small but non-zero. Weight decay in neural networks is mathematically equivalent to L2 for standard SGD.