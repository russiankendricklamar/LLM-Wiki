---
slug: "/finance/multivariate-hmm"
title: "Multivariate Hidden Markov Models"
category: "Algorithms and ML"
order: 82
lang: "en"
---

# Multivariate Hidden Markov Models

A **Multivariate HMM** extends the classical scalar HMM to observation vectors $\mathbf{x}_t \in \mathbb{R}^d$. In finance this enables joint regime detection across multiple assets: a single hidden state simultaneously captures the mean returns *and* covariance structure of a portfolio — including the correlation spike that characterises financial crises.

## Model Structure

Hidden state $z_t \in \{1,\ldots,K\}$ with:
- **Initial distribution**: $\pi_k = P(z_1 = k)$
- **Transition matrix**: $A_{kl} = P(z_t=l \mid z_{t-1}=k)$
- **Gaussian emission** for state $k$:

$$
p(\mathbf{x}_t \mid z_t=k) = \mathcal{N}(\mathbf{x}_t; \boldsymbol{\mu}_k, \boldsymbol{\Sigma}_k)
$$

The covariance $\boldsymbol{\Sigma}_k$ captures regime-specific correlation structure — a key advantage over scalar models.

## Baum-Welch (EM) Algorithm

### E-step: Forward-Backward

**Forward** ($\alpha_t(k)$):

$$
\alpha_t(k) = p(\mathbf{x}_{1:t}, z_t=k) = \mathcal{N}(\mathbf{x}_t;\boldsymbol{\mu}_k,\boldsymbol{\Sigma}_k) \sum_l A_{lk}\alpha_{t-1}(l)
$$

**Posteriors**:

$$
\gamma_t(k) = \frac{\alpha_t(k)\beta_t(k)}{\sum_l \alpha_t(l)\beta_t(l)}, \quad \xi_t(k,l) \propto \alpha_t(k)A_{kl}\mathcal{N}(\mathbf{x}_{t+1};\boldsymbol{\mu}_l,\boldsymbol{\Sigma}_l)\beta_{t+1}(l)
$$

### M-step

$$
A_{kl}^{\text{new}} = \frac{\sum_t \xi_t(k,l)}{\sum_t \gamma_t(k)}, \quad \boldsymbol{\mu}_k^{\text{new}} = \frac{\sum_t \gamma_t(k)\mathbf{x}_t}{\sum_t \gamma_t(k)}
$$

$$
\boldsymbol{\Sigma}_k^{\text{new}} = \frac{\sum_t \gamma_t(k)(\mathbf{x}_t-\boldsymbol{\mu}_k)(\mathbf{x}_t-\boldsymbol{\mu}_k)^\top}{\sum_t \gamma_t(k)}
$$

## Implementation

```python
import numpy as np
from scipy.stats import multivariate_normal
from typing import Optional

class MultivariateHMM:
    def __init__(self, n_states: int, n_features: int,
                 n_iter: int = 100, tol: float = 1e-4,
                 random_state: Optional[int] = None):
        self.K = n_states; self.d = n_features
        self.n_iter = n_iter; self.tol = tol
        rng = np.random.default_rng(random_state)
        self.pi    = np.full(self.K, 1./self.K)
        self.A     = rng.dirichlet(np.ones(self.K), size=self.K)
        self.mu    = rng.randn(self.K, self.d) * 0.01
        self.sigma = np.stack([np.eye(self.d)] * self.K)

    def _emission(self, X: np.ndarray) -> np.ndarray:
        T = len(X)
        logB = np.zeros((T, self.K))
        for k in range(self.K):
            try:
                logB[:,k] = multivariate_normal.logpdf(
                    X, mean=self.mu[k], cov=self.sigma[k])
            except np.linalg.LinAlgError:
                logB[:,k] = -1e10
        B = np.exp(logB - logB.max(axis=1, keepdims=True))
        return B

    def _forward_backward(self, X):
        T = len(X); B = self._emission(X)
        alpha = np.zeros((T, self.K)); scale = np.zeros(T)
        alpha[0] = self.pi * B[0]; scale[0] = alpha[0].sum()
        alpha[0] /= scale[0] + 1e-300
        for t in range(1, T):
            alpha[t] = (alpha[t-1] @ self.A) * B[t]
            scale[t] = alpha[t].sum(); alpha[t] /= scale[t] + 1e-300
        beta = np.zeros((T, self.K)); beta[-1] = 1.
        for t in range(T-2, -1, -1):
            beta[t] = (self.A * B[t+1] * beta[t+1]).sum(axis=1)
            beta[t] /= scale[t+1] + 1e-300
        return alpha, beta, B, np.sum(np.log(scale + 1e-300))

    def fit(self, X: np.ndarray) -> "MultivariateHMM":
        prev_ll = -np.inf
        for _ in range(self.n_iter):
            alpha, beta, B, ll = self._forward_backward(X)
            T = len(X)
            gamma = alpha * beta
            gamma /= gamma.sum(axis=1, keepdims=True) + 1e-300
            xi = np.zeros((T-1, self.K, self.K))
            for t in range(T-1):
                xi[t] = alpha[t,:,None] * self.A * B[t+1] * beta[t+1]
                xi[t] /= xi[t].sum() + 1e-300
            self.pi = gamma[0]
            self.A  = xi.sum(0); self.A /= self.A.sum(1, keepdims=True) + 1e-300
            gs = gamma.sum(0)
            self.mu = (gamma.T @ X) / (gs[:,None] + 1e-300)
            for k in range(self.K):
                diff = X - self.mu[k]
                self.sigma[k] = (gamma[:,k,None]*diff).T @ diff / (gs[k]+1e-300)
                self.sigma[k] += 1e-6 * np.eye(self.d)
            if abs(ll - prev_ll) < self.tol: break
            prev_ll = ll
        return self

    def predict(self, X: np.ndarray) -> np.ndarray:
        """Viterbi decoding."""
        T = len(X); B = self._emission(X)
        delta = np.zeros((T, self.K)); psi = np.zeros((T, self.K), int)
        delta[0] = np.log(self.pi+1e-300) + np.log(B[0]+1e-300)
        for t in range(1, T):
            trans = delta[t-1,:,None] + np.log(self.A+1e-300)
            psi[t] = trans.argmax(0); delta[t] = trans.max(0) + np.log(B[t]+1e-300)
        states = np.zeros(T, int); states[-1] = delta[-1].argmax()
        for t in range(T-2,-1,-1): states[t] = psi[t+1, states[t+1]]
        return states

    def predict_proba(self, X: np.ndarray) -> np.ndarray:
        alpha, beta, _, _ = self._forward_backward(X)
        gamma = alpha * beta; gamma /= gamma.sum(1, keepdims=True) + 1e-300
        return gamma
```

## Model Selection

| Criterion | Formula | Penalty |
|-----------|---------|---------|
| AIC | $-2\ln L + 2p$ | Soft |
| BIC | $-2\ln L + p\ln T$ | Moderate |

For $K=3$, $d=5$: $p = K(K-1) + Kd + Kd(d+1)/2 = 6+15+75 = 96$ params.

## Interpretation

For each regime $k$ inspect $\boldsymbol{\mu}_k$ (expected returns) and correlation matrix extracted from $\boldsymbol{\Sigma}_k$. A "crisis" regime typically shows $\boldsymbol{\mu}_k < 0$ and inter-asset correlations near 0.8–0.95.

## Related Articles

- [[hidden-markov-models|Hidden Markov Models]] — scalar version
- [[regime-switching-factors|Regime-Switching Factors]] — HMM in factor models
- [[kalman-filter|Kalman Filter]] — linear-Gaussian continuous-state alternative
- [[copula-models|Copula Models]] — alternative for stress-period dependence
- [[volatility-forecasting|Volatility Forecasting]] — HMM as regime detector
