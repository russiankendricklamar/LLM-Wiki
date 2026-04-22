---
slug: "/finance/pin-easley-ohara"
title: "PIN: Probability of Informed Trading"
category: "Microstructure"
order: 111
lang: "en"
---

# PIN: Probability of Informed Trading

**PIN (Probability of Informed Trading)** is the structural model by Easley, Kiefer, O'Hara, and Paperman (1996) for estimating the fraction of informed traders in a market. PIN is extracted from buy and sell order flows and is the precursor to VPIN.

## EKOP Model

**Game structure:**
- With probability $\alpha$, an information event occurs: good news (prob. $\delta$) or bad news ($1-\delta$)
- Informed traders arrive at rate $\mu$ (only on information days)
- Uninformed: buys $\varepsilon_b$, sells $\varepsilon_s$ (Poisson)

**Single-day likelihood** ($B$ buys, $S$ sells):

$$
L(B, S|\Theta) = (1-\alpha) e^{-\varepsilon_b}\frac{\varepsilon_b^B}{B!} \cdot e^{-\varepsilon_s}\frac{\varepsilon_s^S}{S!}
$$
$$
+ \alpha\delta \cdot e^{-(\varepsilon_b+\mu)}\frac{(\varepsilon_b+\mu)^B}{B!} \cdot e^{-\varepsilon_s}\frac{\varepsilon_s^S}{S!}
$$
$$
+ \alpha(1-\delta) \cdot e^{-\varepsilon_b}\frac{\varepsilon_b^B}{B!} \cdot e^{-(\varepsilon_s+\mu)}\frac{(\varepsilon_s+\mu)^S}{S!}
$$

**PIN**:

$$
\text{PIN} = \frac{\alpha\mu}{\alpha\mu + \varepsilon_b + \varepsilon_s}
$$

## Implementation

```python
import numpy as np
from scipy.optimize import minimize
from scipy.special import gammaln
from dataclasses import dataclass

@dataclass
class PINParams:
    alpha: float
    delta: float
    mu: float
    eps_b: float
    eps_s: float

    @property
    def pin(self) -> float:
        return self.alpha * self.mu / (self.alpha * self.mu + self.eps_b + self.eps_s)


def _log_likelihood(params, B_days, S_days):
    alpha, delta, mu, eps_b, eps_s = params
    if any(p <= 0 for p in [alpha, mu, eps_b, eps_s]) or not 0 < alpha < 1 or not 0 < delta < 1:
        return 1e10
    ll = 0.0
    for B, S in zip(B_days, S_days):
        def lp(lb, ls):
            return (-lb + B*np.log(lb) - gammaln(B+1)
                    -ls + S*np.log(ls) - gammaln(S+1))
        l0 = (1 - alpha) * np.exp(lp(eps_b, eps_s))
        lg = alpha * delta * np.exp(lp(eps_b + mu, eps_s))
        lb = alpha * (1 - delta) * np.exp(lp(eps_b, eps_s + mu))
        ll += np.log(l0 + lg + lb + 1e-300)
    return -ll


def fit_pin(B_days: list[int], S_days: list[int],
            n_starts: int = 10) -> PINParams:
    """MLE PIN estimation from daily order flow counts."""
    best = None
    rng = np.random.default_rng(42)
    for _ in range(n_starts):
        x0 = [rng.uniform(0.1, 0.9), rng.uniform(0.1, 0.9),
              rng.uniform(10, 200), rng.uniform(10, 200), rng.uniform(10, 200)]
        res = minimize(_log_likelihood, x0, args=(B_days, S_days),
                       method='Nelder-Mead', options={'maxiter': 5000})
        if best is None or res.fun < best.fun:
            best = res
    a, d, m, eb, es = best.x
    return PINParams(alpha=a, delta=d, mu=m, eps_b=eb, eps_s=es)


def rolling_pin(B_days: list[int], S_days: list[int],
                window: int = 60) -> list[float]:
    """Rolling PIN for flow toxicity monitoring."""
    pins = []
    for i in range(window, len(B_days)):
        try:
            p = fit_pin(B_days[i-window:i], S_days[i-window:i], n_starts=5)
            pins.append(p.pin)
        except Exception:
            pins.append(float('nan'))
    return pins
```

## PIN vs VPIN

| Metric | PIN | VPIN |
|--------|-----|------|
| Method | Structural MLE | Volume-synchronized BVC |
| Speed | Slow (optimization) | Fast (real-time) |
| Data | Daily | Tick-level |
| Application | Research | HFT monitoring |

## Related Articles

- [[vpin|VPIN]] — high-frequency alternative to PIN
- [[roll-model|Roll's Model]] — simple spread estimation
- [[kyle-lambda|Kyle's Lambda]] — linear price impact
