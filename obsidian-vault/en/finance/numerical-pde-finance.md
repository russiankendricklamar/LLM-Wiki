---
title: "Numerical PDE Methods in Finance"
category: "Algorithms and ML"
order: 42
lang: "en"
---
# Numerical PDE Methods in Finance

The [[black-scholes]] PDE and its extensions are rarely solvable in closed form beyond vanilla Europeans. **Finite difference methods** (FDMs) discretise the PDE on a grid and solve it backward from the terminal condition, providing fast, accurate prices for American options, barrier options, and multi-factor problems where [[monte-carlo-method]] is either slow or requires regression (see [[longstaff-schwartz]]).

## The Black-Scholes PDE

For a derivative $V(S,t)$ on an asset following GBM under $\mathbb{Q}$:

$$
\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + rS\frac{\partial V}{\partial S} - rV = 0
$$

with terminal condition $V(S,T) = H(S)$ (e.g., $\max(S-K,0)$ for a call). This is solved **backward in time** from $t = T$ to $t = 0$.

## Transformation to the Heat Equation

The substitution $x = \ln(S/K)$, $\tau = \frac{1}{2}\sigma^2(T-t)$, $V = K\,e^{-\alpha x - \beta\tau}\,u(x,\tau)$ with appropriate $\alpha, \beta$ reduces the BS PDE to the standard heat equation:

$$
\frac{\partial u}{\partial \tau} = \frac{\partial^2 u}{\partial x^2}
$$

This is useful for theoretical analysis and for applying known results from mathematical physics. See [[partial-differential-equations]].

## Finite Difference Schemes

Discretise $S$ on a grid $S_0, S_1, \ldots, S_M$ and time on $t_0, t_1, \ldots, t_N$ with $\Delta S = S_{j+1} - S_j$, $\Delta t = t_{n+1} - t_n$. Denote $V_j^n \approx V(S_j, t_n)$.

### Explicit (Forward Euler)

$$
\frac{V_j^{n+1} - V_j^n}{\Delta t} = \frac{1}{2}\sigma^2 S_j^2 \frac{V_{j+1}^n - 2V_j^n + V_{j-1}^n}{\Delta S^2} + rS_j\frac{V_{j+1}^n - V_{j-1}^n}{2\Delta S} - rV_j^n
$$

Each $V_j^{n+1}$ is computed directly from the previous time step — no linear system to solve. However, the **CFL stability condition** constrains the time step:

$$
\Delta t \leq \frac{\Delta S^2}{\sigma^2 S_{\max}^2}
$$

In the log-coordinate $x = \ln S$ with uniform spacing $\Delta x$: $\Delta t \leq \Delta x^2 / \sigma^2$. Violation leads to catastrophic oscillations.

### Implicit (Backward Euler)

$$
\frac{V_j^{n+1} - V_j^n}{\Delta t} = \frac{1}{2}\sigma^2 S_j^2 \frac{V_{j+1}^{n+1} - 2V_j^{n+1} + V_{j-1}^{n+1}}{\Delta S^2} + rS_j\frac{V_{j+1}^{n+1} - V_{j-1}^{n+1}}{2\Delta S} - rV_j^{n+1}
$$

Requires solving a **tridiagonal** linear system at each time step (Thomas algorithm, $O(M)$). **Unconditionally stable** — any $\Delta t$ works, though accuracy requires reasonable step sizes. First-order in time, second-order in space.

### Crank-Nicolson ($\theta = 1/2$)

Averages explicit and implicit:

$$
V_j^{n+1} - V_j^n = \frac{\Delta t}{2}\bigl[\mathcal{L}V^{n+1} + \mathcal{L}V^n\bigr]
$$

where $\mathcal{L}$ is the spatial differential operator. **Second-order in both space and time**, unconditionally stable but can produce **spurious oscillations** near discontinuities (e.g., the kink at $S = K$ for digital options). A common fix: use a few initial implicit steps before switching to Crank-Nicolson (the Rannacher trick).

### General $\Theta$-Scheme

$$
V^{n+1} = V^n + \Delta t\bigl[\theta\,\mathcal{L}V^{n+1} + (1-\theta)\,\mathcal{L}V^n\bigr]
$$

| $\theta$ | Scheme | Accuracy | Stability |
|:---------:|:-------|:---------|:----------|
| 0 | Explicit | $O(\Delta t, \Delta S^2)$ | Conditional (CFL) |
| 1 | Fully Implicit | $O(\Delta t, \Delta S^2)$ | Unconditional |
| 1/2 | Crank-Nicolson | $O(\Delta t^2, \Delta S^2)$ | Unconditional |

## Grid Construction

**Uniform in log-space**: $x_j = \ln S_{\min} + j\,\Delta x$ concentrates points near the strike in $S$-space where gamma is largest.

**Non-uniform (stretched)**: place finer mesh near $S = K$ and coarser mesh near boundaries. Sinh or tanh transformations:

$$
S(x) = K + \alpha\sinh\!\bigl(\beta(x - x_0)\bigr)
$$

This reduces the number of grid points needed for a given accuracy by a factor of 3-5.

## Boundary Conditions

At $S = 0$: for a call, $V(0, t) = 0$; for a put, $V(0, t) = Ke^{-r(T-t)}$.

At $S = S_{\max}$ (far boundary): for a call, $V(S_{\max}, t) \approx S_{\max} - Ke^{-r(T-t)}$; for a put, $V(S_{\max}, t) = 0$. The boundary must be placed far enough that truncation error is negligible (typically $S_{\max} \geq 4K$).

## American Options: Free Boundary Problem

American early exercise introduces a **complementarity condition**:

$$
V(S,t) \geq H(S), \qquad \bigl(V - H\bigr)\bigl(\mathcal{L}V\bigr) = 0
$$

At each time step, after computing the continuation value, enforce $V_j^{n+1} = \max(V_j^{n+1}, H(S_j))$. Methods:

- **Projected SOR**: iterative solver that projects onto the constraint at each iteration.
- **Penalty method**: add a large penalty term $\rho\,\max(H - V, 0)$ to the PDE, converting the free boundary problem into a nonlinear PDE. See [[optimal-stopping-american]].

## Multi-Asset: ADI Methods

For a two-asset option $V(S_1, S_2, t)$, the PDE has cross-derivative terms. **Alternating Direction Implicit** (ADI) methods split each time step:

1. Solve implicitly in $S_1$, explicitly in $S_2$ (half-step).
2. Solve implicitly in $S_2$, explicitly in $S_1$ (half-step).

Douglas-Rachford and Hundsdorfer-Verwer schemes extend ADI to 3+ dimensions. Beyond 3 assets, FDM becomes impractical and [[monte-carlo-method]] is preferred.

## Comparison: PDE vs Trees vs Monte Carlo

| Criterion | FDM/PDE | Binomial Tree | Monte Carlo |
|:----------|:--------|:-------------|:------------|
| **Dimensions** | 1-3 | 1 (multi-asset: very slow) | Any |
| **American exercise** | Natural (free boundary) | Natural | Regression needed (LSM) |
| **Convergence** | $O(\Delta t^p + \Delta S^q)$ | $O(1/N)$ | $O(1/\sqrt{N})$ |
| **Greeks** | Direct (finite diff on grid) | Bump-and-reprice | Pathwise / LR |
| **Exotic path-dependent** | Difficult | Difficult | Natural |

## Python: Crank-Nicolson for European Put

```python
import numpy as np
from scipy.linalg import solve_banded

def cn_put(S0: float, K: float, T: float, r: float, sigma: float,
           M: int = 200, N: int = 200) -> float:
    """Crank-Nicolson finite difference for a European put."""
    x_min, x_max = np.log(S0 / 5), np.log(S0 * 5)
    dx = (x_max - x_min) / M
    dt = T / N
    x = np.linspace(x_min, x_max, M + 1)

    # Terminal condition
    S = np.exp(x)
    V = np.maximum(K - S, 0.0)

    # Coefficients in log-space
    alpha = 0.5 * dt * (sigma**2 / dx**2 - (r - 0.5 * sigma**2) / dx)
    beta  = -dt * (sigma**2 / dx**2 + r)
    gamma = 0.5 * dt * (sigma**2 / dx**2 + (r - 0.5 * sigma**2) / dx)

    # Tridiagonal matrices (banded storage)
    for n in range(N):
        # RHS: explicit part
        rhs = np.copy(V)
        rhs[1:-1] += 0.5 * (alpha * V[:-2] + beta * V[1:-1] + gamma * V[2:])

        # LHS: implicit part (tridiagonal solve)
        lower = np.zeros(M + 1)
        diag  = np.ones(M + 1)
        upper = np.zeros(M + 1)
        lower[2:]   = -0.5 * alpha
        diag[1:-1]  = 1 - 0.5 * beta
        upper[:-2]  = -0.5 * gamma

        # Boundary conditions
        rhs[0]  = K * np.exp(-r * (N - n) * dt)
        rhs[-1] = 0.0

        ab = np.array([np.append(0, upper[:-1]), diag, np.append(lower[1:], 0)])
        V = solve_banded((1, 1), ab, rhs)

    # Interpolate at S0
    idx = np.searchsorted(x, np.log(S0))
    w = (np.log(S0) - x[idx - 1]) / dx
    return V[idx - 1] * (1 - w) + V[idx] * w

put_price = cn_put(S0=100, K=100, T=1.0, r=0.05, sigma=0.20)
```

## Applications

1. **American option pricing**: FDM is the method of choice for American puts/calls where analytical solutions do not exist.
2. **Barrier options**: natural handling of knock-in/knock-out boundaries on the grid.
3. **[[convertible-bonds]]**: PDE with credit-adjusted discounting and free boundaries for call/put/conversion.
4. **Local volatility**: Dupire's $\sigma(S,t)$ enters the PDE coefficients directly — no simulation overhead.
5. **Real-time risk**: pre-computed PDE grids enable sub-millisecond Greeks via interpolation.

## Related Topics
- [[black-scholes]]
- [[partial-differential-equations]]
- [[monte-carlo-method]]
- [[longstaff-schwartz]]
- [[optimal-stopping-american]]
- [[convertible-bonds]]
