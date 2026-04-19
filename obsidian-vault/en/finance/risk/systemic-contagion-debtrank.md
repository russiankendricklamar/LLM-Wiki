---
slug: "/finance/systemic-contagion-debtrank"
title: "Systemic Risk and DebtRank"
category: "Risk Management"
order: 87
lang: "en"
---

# Systemic Risk and DebtRank

**DebtRank** is a network-based algorithm for measuring systemic risk in financial systems, proposed by Battiston et al. (2012). Unlike PageRank, it propagates *economic distress* proportional to balance-sheet exposure, and prevents double-counting by deactivating nodes after they have transmitted stress — giving a clean measure of how much capital would be destroyed by a given shock.

## Financial Networks

Banks are linked through interbank lending, derivatives, and common asset holdings. Let:

- $E_{ij}$ = exposure of bank $j$ to bank $i$ (amount $j$ loses if $i$ defaults)
- $\text{EC}_j$ = equity capital of bank $j$

**Relative impact matrix**:

$$
A_{ij} = \frac{E_{ij}}{\text{EC}_j}
$$

$A_{ij} = 0.3$ means a default of $i$ destroys 30% of $j$'s capital.

## DebtRank Algorithm

### Node States

Each bank $i$ at time $t$:
- **Stress level** $h_i(t) \in [0,1]$: 0 = healthy, 1 = default
- **State** $s_i(t) \in \{\text{Undistressed (U)},\;\text{Distressed (D)},\;\text{Inactive (I)}\}$

Initial shock: nodes in set $S$ get $h_i(0) = 1$, state = D.

### Propagation

$$
h_i(t+1) = \min\!\left(1,\; h_i(t) + \sum_{\substack{j:\,s_j(t)=D}} A_{ji}\,h_j(t)\right)
$$

After transmitting, Distressed → Inactive (prevents cascade double-counting).

### Systemic Impact Score

$$
R = \frac{\sum_i (h_i^* - h_i^0)\,\text{EC}_i}{\sum_i \text{EC}_i} \in [0,1]
$$

$R$ is the fraction of total system capital absorbed by the cascade.

## Implementation

```python
import numpy as np
from enum import Enum

class State(Enum):
    U = 0   # Undistressed
    D = 1   # Distressed
    I = 2   # Inactive

def debtrank(A: np.ndarray,
             equity: np.ndarray,
             initial_shock: dict[int, float],
             max_iter: int = 100) -> dict:
    """
    A[i,j] = E[i,j] / EC[j]: fraction of j's capital lost if i defaults.
    equity: capital vector (n,)
    initial_shock: {node_id: stress ∈ [0,1]}
    """
    n = len(equity)
    h = np.zeros(n)
    state = np.full(n, State.U)

    for node, level in initial_shock.items():
        h[node] = min(1.0, level)
        state[node] = State.D
    h0 = h.copy()

    for it in range(max_iter):
        h_new = h.copy(); state_new = state.copy(); changed = False

        for j in range(n):
            if state[j] == State.U:
                incoming = sum(A[i,j]*h[i] for i in range(n)
                               if state[i] == State.D)
                if incoming > 0:
                    h_new[j] = min(1.0, h[j] + incoming)
                    state_new[j] = State.D; changed = True

        for i in range(n):
            if state[i] == State.D:
                state_new[i] = State.I

        h, state = h_new, state_new
        if not changed: break

    R = float(np.dot(h - h0, equity) / equity.sum())
    return {'debtrank': R, 'stress': h, 'state': state, 'iters': it+1}


def systemic_importance(A: np.ndarray, equity: np.ndarray) -> np.ndarray:
    """Per-node DebtRank under individual default scenario."""
    return np.array([
        debtrank(A, equity, {i: 1.0})['debtrank']
        for i in range(len(equity))
    ])
```

### Example

```python
loans = np.array([[0,  500, 200, 0  ],
                  [0,  0,   300, 100],
                  [0,  0,   0,   400],
                  [200,0,   0,   0  ]], dtype=float)
equity = np.array([1000, 800, 600, 500], dtype=float)
A = loans / equity          # broadcast over columns

res = debtrank(A, equity, {0: 1.0})
print(f"DebtRank (bank 0 defaults): {res['debtrank']:.3f}")
imp = systemic_importance(A, equity)
for i, v in enumerate(imp):
    print(f"  Bank {i}: {v:.3f}")
```

## Comparison with Other Systemic Risk Metrics

| Method | Key idea | Limitation |
|--------|---------|-----------|
| DebtRank | Distress propagation, no double-counting | Ignores fire-sale channels |
| CoVaR (Adrian-Brunnermeier) | $\Delta$CoVaR: tail spillover | No explicit network |
| SRISK (Brownlees-Engle) | Capital shortfall in systemic crisis | Requires equity market data |
| Network VaR | Portfolio VaR with network effects | Complex calibration |

## Extensions

**Dynamic DebtRank** (Bardoscia et al. 2017) adds continuous time and fire-sale channels: capital loss forces deleveraging → asset prices fall → other holders suffer mark-to-market losses.

## Related Articles

- [[value-at-risk|Value at Risk]] — regulatory metric that misses network effects
- [[cornish-fisher-cvar|CVaR and Cornish-Fisher]] — alternative tail metrics
- [[extreme-value-theory|Extreme Value Theory]] — modelling systemic shock magnitudes
- [[monte-carlo-method|Monte Carlo Method]] — simulating cascade scenarios
- [[nash-equilibrium|Nash Equilibrium]] — strategic interaction between banks
