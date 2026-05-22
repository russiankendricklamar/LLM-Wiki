---
title: 'Signal Processing: Advanced Kalman Filters'
category: Advanced Math and Stats
order: 181
lang: en
slug: kalman-filter-advanced
---

The standard Kalman Filter estimates the state of a linear dynamical system corrupted by Gaussian noise.

### Extended Kalman Filter (EKF)
For non-linear systems $x_{k} = f(x_{k-1}) + w_k$ and $z_k = h(x_k) + v_k$, the EKF linearizes the models around the current estimate using the Jacobians:
$F_k = \left. \frac{\partial f}{\partial x} \right|_{\hat{x}_{k-1}}, \quad H_k = \left. \frac{\partial h}{\partial x} \right|_{\hat{x}_{k|k-1}}$
These Jacobians replace the linear transition matrices in the covariance update steps.

### Unscented Kalman Filter (UKF)
Linearization in EKF can be highly inaccurate for strongly non-linear systems. The UKF uses the **Unscented Transform**: it deterministically selects a minimal set of "sigma points" around the mean, propagates them through the exact non-linear function, and reconstructs the new mean and covariance. It achieves 3rd-order Taylor series accuracy without calculating Jacobians.
