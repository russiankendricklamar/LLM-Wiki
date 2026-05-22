---
title: "Kalman Filter"
category: "Math Foundations"
order: 68
lang: "en"
slug: "kalman-filter"
---

# Kalman Filter

The Kalman Filter is an optimal recursive algorithm for estimating the internal state of a linear dynamic system from a series of noisy measurements. It is the continuous-state analog of the [[hmm|Hidden Markov Model]] where all distributions are [[multivariate-normal-distribution|Multivariate Normal]].

## Linear State-Space Model
The system is modeled by two linear equations with additive Gaussian noise:
1. **State Transition (Dynamics):**
   $$ x_t = F x_{t-1} + B u_t + w_t, \quad w_t \sim \mathcal{N}(0, Q) $$
   where $x_t$ is the hidden state, $F$ is the state transition matrix, $u_t$ is a control input, and $w_t$ is process noise with covariance $Q$.
   
2. **Observation (Measurement):**
   $$ z_t = H x_t + v_t, \quad v_t \sim \mathcal{N}(0, R) $$
   where $z_t$ is the measurement, $H$ is the observation matrix, and $v_t$ is measurement noise with covariance $R$.

## Recursive Bayesian Update
The filter maintains a belief about the state as a Gaussian distribution $\mathcal{N}(\hat{x}_t, P_t)$. It alternates between two steps:

### 1. Predict Step (Prior)
We project the current state estimate forward in time.
- **Predicted State Estimate:** $\hat{x}_{t|t-1} = F \hat{x}_{t-1|t-1} + B u_t$
- **Predicted Covariance Estimate:** $P_{t|t-1} = F P_{t-1|t-1} F^T + Q$

### 2. Update Step (Posterior)
We incorporate the new measurement $z_t$.
- **Innovation (Measurement Residual):** $y_t = z_t - H \hat{x}_{t|t-1}$
- **Innovation Covariance:** $S_t = H P_{t|t-1} H^T + R$
- **Optimal Kalman Gain:** $K_t = P_{t|t-1} H^T S_t^{-1}$
- **Updated State Estimate:** $\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t y_t$
- **Updated Covariance Estimate:** $P_{t|t} = (I - K_t H) P_{t|t-1}$

## Optimality
For linear systems with Gaussian noise, the Kalman Filter is the exact Bayesian optimal estimator. For non-linear systems, extensions like the **Extended Kalman Filter (EKF)** (using [[multivariable-taylor-series|Taylor series]] linearization) or **Unscented Kalman Filter (UKF)** are used.
