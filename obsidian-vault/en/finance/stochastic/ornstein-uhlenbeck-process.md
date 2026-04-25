---
title: "Ornstein-Uhlenbeck Process"
category: "Stochastic Processes"
order: 3
lang: "en"
slug: "ornstein-uhlenbeck-process"
---
# Ornstein-Uhlenbeck Process

The **Ornstein-Uhlenbeck (OU) process** is a stochastic process that describes the velocity of a massive Brownian particle under the influence of friction. In finance, it is the standard model for **mean-reverting** behavior in spreads, interest rates, and volatility.

## Visualization

A simulated OU path ($\theta=2.0$, $\mu=0.5$, $\sigma=0.3$, $X_0=1.5$) illustrating mean reversion: large deviations are pulled back toward $\mu=0.5$ exponentially, with a half-life of $\approx 0.35$ years. The stationary band $\mu \pm \sigma_\infty$ contains roughly 68% of the probability mass.

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": "0.00", "X": 1.50, "mean": 0.50},
    {"t": "0.10", "X": 1.31, "mean": 0.50},
    {"t": "0.20", "X": 1.05, "mean": 0.50},
    {"t": "0.30", "X": 0.92, "mean": 0.50},
    {"t": "0.40", "X": 0.78, "mean": 0.50},
    {"t": "0.50", "X": 0.63, "mean": 0.50},
    {"t": "0.60", "X": 0.71, "mean": 0.50},
    {"t": "0.70", "X": 0.44, "mean": 0.50},
    {"t": "0.80", "X": 0.38, "mean": 0.50},
    {"t": "0.90", "X": 0.55, "mean": 0.50},
    {"t": "1.00", "X": 0.62, "mean": 0.50},
    {"t": "1.10", "X": 0.49, "mean": 0.50},
    {"t": "1.20", "X": 0.53, "mean": 0.50},
    {"t": "1.30", "X": 0.41, "mean": 0.50},
    {"t": "1.40", "X": 0.58, "mean": 0.50}
  ],
  "lines": [
    {"dataKey": "X", "stroke": "#3b82f6", "name": "OU path X(t)"},
    {"dataKey": "mean", "stroke": "#ef4444", "name": "Long-run mean μ"}
  ]
}
```

## Background and History

The OU process was introduced by Leonard Ornstein and George Uhlenbeck in 1930 to model the velocity of a Brownian particle subject to friction — the first mathematically rigorous model of a stationary Gaussian process. Its application to interest rate modeling was pioneered by Oldrich Vasicek (1977), who proposed an identical [[stochastic-differential-equations|SDE]] for the short rate, producing the first analytically tractable term structure model.

In quantitative finance, the OU process underlies pairs trading (spread dynamics), stochastic volatility models (volatility mean-reversion), commodity pricing (mean-reversion of convenience yields), and FX carry strategies (interest rate differential dynamics). Its analytical tractability — exact simulation, closed-form moments, and MLE estimation — makes it the default first model for any mean-reverting quantity.

## Mean-Reverting Property

Unlike Standard Brownian Motion, which has no tendency to return to a central value, the OU process is pulled back towards a long-term mean. The further the process drifts from the mean, the stronger the pull.

## Stochastic Differential Equation ([[stochastic-differential-equations|SDE]])

The OU process $X_t$ is defined by the following SDE:

$$
dX_t = \theta(\mu - X_t)\,dt + \sigma\, dW_t
$$

Where:
- $\theta > 0$ is the **rate of mean reversion** (speed of adjustment).
- $\mu$ is the **long-term mean** (level to which the process reverts).
- $\sigma > 0$ is the **volatility** (degree of randomness).
- $W_t$ is a standard Wiener process.

## Exact Solution via Integrating Factor

Multiplying both sides by the integrating factor $e^{\theta t}$ and applying Itô's formula:

$$
d(e^{\theta t} X_t) = \theta \mu e^{\theta t}\,dt + \sigma e^{\theta t}\,dW_t
$$

Integrating from $0$ to $t$:

$$
X_t = X_0\, e^{-\theta t} + \mu(1 - e^{-\theta t}) + \sigma \int_0^t e^{-\theta(t-s)}\,dW_s
$$

The stochastic integral $\int_0^t e^{-\theta(t-s)}\,dW_s$ is Gaussian with mean zero and variance $\frac{1 - e^{-2\theta t}}{2\theta}$, so the full solution is:

$$
X_t \sim \mathcal{N}\!\left(X_0 e^{-\theta t} + \mu(1-e^{-\theta t}),\; \frac{\sigma^2}{2\theta}(1-e^{-2\theta t})\right)
$$

## Stationary Distribution

As $t \to \infty$, the process converges to the **stationary (invariant) distribution**:

$$
X_\infty \sim \mathcal{N}\!\left(\mu,\; \frac{\sigma^2}{2\theta}\right)
$$

The long-run variance $\sigma^2/(2\theta)$ increases with volatility and decreases with mean-reversion speed — a highly mean-reverting process has a tight stationary distribution.

## Autocorrelation Function

The autocorrelation between $X_t$ and $X_{t+\tau}$ in stationarity decays exponentially:

$$
\rho(\tau) = \text{Corr}(X_t, X_{t+\tau}) = e^{-\theta \tau}
$$

This implies a characteristic **half-life** of mean reversion:

$$
t_{1/2} = \frac{\ln 2}{\theta}
$$

If $\theta = 0.7$ per year, the half-life is $\approx 1$ year — a spread deviation is expected to halve in approximately one year.

## MLE Parameter Estimation

Given discrete observations $\{X_{t_i}\}$ at equally spaced intervals $\Delta t$, the exact transition density is Gaussian:

$$
X_{t+\Delta t} | X_t \sim \mathcal{N}\!\left(X_t e^{-\theta \Delta t} + \mu(1-e^{-\theta \Delta t}),\; \frac{\sigma^2}{2\theta}(1-e^{-2\theta\Delta t})\right)
$$

This gives the log-likelihood:

$$
\ell(\theta, \mu, \sigma) = -\frac{n}{2}\ln(2\pi s^2) - \frac{1}{2s^2}\sum_{i=1}^n (X_{i} - a - b X_{i-1})^2
$$

where $b = e^{-\theta\Delta t}$, $a = \mu(1-b)$, $s^2 = \frac{\sigma^2}{2\theta}(1-b^2)$.

The MLE closed-form solutions are:

$$
\hat{b} = \frac{\sum X_i X_{i-1} - n^{-1}\sum X_i \sum X_{i-1}}{\sum X_{i-1}^2 - n^{-1}(\sum X_{i-1})^2}, \quad \hat{\mu} = \frac{\bar{X} - \hat{b}\bar{X}_{-1}}{1 - \hat{b}}
$$

$$
\hat{\theta} = -\frac{\ln \hat{b}}{\Delta t}, \quad \hat{\sigma}^2 = \frac{2\hat{\theta}\,\hat{s}^2}{1 - \hat{b}^2}
$$

## Connection to Vasicek Interest Rate Model

The **Vasicek (1977)** model for the short rate $r_t$ is identical to the OU process:

$$
dr_t = \kappa(\bar{r} - r_t)\,dt + \sigma\,dW_t^{\mathbb{Q}}
$$

under the risk-neutral measure $\mathbb{Q}$. It produces closed-form bond prices:

$$
P(t,T) = A(t,T)\,e^{-B(t,T)r_t}
$$

where $B(t,T) = \frac{1-e^{-\kappa(T-t)}}{\kappa}$ and $A$ absorbs the drift correction. The main criticism is that rates can go negative — addressed by the Cox-Ingersoll-Ross (CIR) model which replaces $\sigma$ with $\sigma\sqrt{r_t}$.

## Python: Simulation and Parameter Estimation

```python
import numpy as np
from scipy.optimize import minimize_scalar


def simulate_ou_exact(X0, mu, theta, sigma, T, dt, seed=None):
    """
    Exact simulation of OU process using the transition density.
    More accurate than Euler-Maruyama for large dt.
    """
    if seed is not None:
        np.random.seed(seed)
    n_steps = int(T / dt)
    t = np.linspace(0, T, n_steps + 1)
    X = np.zeros(n_steps + 1)
    X[0] = X0

    b = np.exp(-theta * dt)
    a = mu * (1 - b)
    s = np.sqrt(sigma**2 / (2 * theta) * (1 - b**2))

    for i in range(1, n_steps + 1):
        X[i] = a + b * X[i-1] + s * np.random.standard_normal()

    return t, X


def estimate_ou_mle(X, dt):
    """
    MLE estimation of OU parameters from discrete observations.
    Returns (theta, mu, sigma).
    """
    n = len(X) - 1
    Sx  = np.sum(X[:-1])
    Sy  = np.sum(X[1:])
    Sxx = np.sum(X[:-1]**2)
    Sxy = np.sum(X[:-1] * X[1:])
    Syy = np.sum(X[1:]**2)

    b_hat = (n * Sxy - Sx * Sy) / (n * Sxx - Sx**2)
    a_hat = (Sy - b_hat * Sx) / n
    mu_hat = a_hat / (1 - b_hat)
    theta_hat = -np.log(b_hat) / dt

    s2_hat = (Syy - 2 * b_hat * Sxy + b_hat**2 * Sxx
              - n * (a_hat + (b_hat - 1) * mu_hat)**2) / n
    sigma_hat = np.sqrt(s2_hat * 2 * theta_hat / (1 - b_hat**2))

    return theta_hat, mu_hat, sigma_hat


def halflife(theta):
    """Half-life of mean reversion in same time units as theta."""
    return np.log(2) / theta


# Simulate and estimate
true_theta, true_mu, true_sigma = 2.0, 0.5, 0.3
dt = 1 / 252  # daily
T = 3.0       # 3 years

t, X = simulate_ou_exact(true_mu, true_mu, true_theta, true_sigma, T, dt, seed=42)

theta_est, mu_est, sigma_est = estimate_ou_mle(X, dt)

print(f"True parameters:      theta={true_theta:.3f}, mu={true_mu:.3f}, sigma={true_sigma:.3f}")
print(f"Estimated parameters: theta={theta_est:.3f}, mu={mu_est:.3f}, sigma={sigma_est:.3f}")
print(f"Half-life: {halflife(theta_est)*252:.1f} trading days")
print(f"Stationary std dev: {true_sigma / np.sqrt(2 * true_theta):.4f}")
```

## Pairs Trading Spread Model

In pairs trading, the spread $S_t = \ln P_t^A - \beta \ln P_t^B$ is modeled as an OU process. The z-score signal is:

$$
z_t = \frac{S_t - \mu}{\sigma / \sqrt{2\theta}}
$$

Entry rules: open position when $|z_t| > z_{\text{entry}}$ (typically 2.0); close when $|z_t| < z_{\text{exit}}$ (typically 0.5). Stop-loss when $|z_t| > z_{\text{stop}}$ (typically 3.5).

The expected holding time until the spread crosses $z_{\text{exit}}$ from $z_{\text{entry}}$ is related to the first passage time of the OU process, approximately:

$$
\mathbb{E}[\tau] \approx \frac{1}{\theta} \ln\!\left(\frac{z_{\text{entry}}}{z_{\text{exit}}}\right)
$$

## Parameter Table

| Symbol | Name | Description | Typical Range (Finance) |
|:---|:---|:---|:---|
| $\theta$ | Mean reversion speed | Rate of pull toward $\mu$ | $0.5 – 10$ per year |
| $\mu$ | Long-run mean | Equilibrium level | Asset/spread-specific |
| $\sigma$ | Diffusion coefficient | Instantaneous volatility | $0.01 – 0.5$ |
| $t_{1/2}$ | Half-life | Time for half-deviation to decay | $0.07 – 1.4$ years |
| $\sigma_\infty$ | Stationary std dev | $\sigma/\sqrt{2\theta}$ | Spread-specific |

## Limitations and Extensions

- **Negative values**: The OU process can go negative, which is appropriate for spreads and interest differentials but not for asset prices. The geometric OU (exponential OU) $Y_t = e^{X_t}$ stays positive.
- **Time-varying parameters**: Regime-switching OU with [[hidden-markov-models]] allows $(\theta, \mu, \sigma)$ to switch between states, capturing structural breaks in spread relationships.
- **Multidimensional OU**: For a vector $\mathbf{X}_t$, the SDE is $d\mathbf{X}_t = A(\mu - \mathbf{X}_t)\,dt + \Sigma\,d\mathbf{W}_t$ with matrix $A$. Used in multi-pair trading and multi-factor interest rate models.
- **Non-Gaussian noise**: Replacing $dW_t$ with a Lévy process yields an OU-type process with jumps, appropriate for spread dynamics around earnings events.

## Related Topics
- [[levy-processes]]
- [[pairs-trading]]
- [[monte-carlo-method]]
- [[value-at-risk]]
- [[heston-model]]
- [[black-scholes]]
- [[mcmc]]
