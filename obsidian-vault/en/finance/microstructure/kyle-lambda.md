---
slug: "/finance/kyle-lambda"
title: "Kyle's Lambda: The Price Impact Coefficient"
category: "Microstructure"
order: 90
lang: "en"
---

# Kyle's Lambda: The Price Impact Coefficient

**Kyle's Lambda** ($\lambda$) measures how much an asset's price moves per unit of net order flow. Introduced by Albert Kyle (1985) in his landmark model of insider trading, it has become the standard measure of **market depth** — and a core input to optimal execution, market-making, and liquidity risk management.

## Kyle's Model (1985)

Three agent types:
- **Insider** — knows fundamental value $v$, maximises profit
- **Noise traders** — trade volume $u \sim \mathcal{N}(0, \sigma_u^2)$
- **Market-maker** — observes total flow $y = x + u$, sets price

The market-maker's optimal pricing rule is linear:

$$
p = \mu + \lambda \cdot y
$$

where $\mu = E[v]$ is the prior value estimate and $y$ is total signed order flow.

### Equilibrium $\lambda$

The insider solves $\max_x (v - \mu - \lambda x) \cdot x$, giving $x^* = (v-\mu)/(2\lambda)$.

The market-maker, knowing the insider's strategy, sets:

$$
\boxed{\lambda = \frac{\sigma_v}{2\sigma_u}}
$$

**Market depth**: $D = 1/\lambda = 2\sigma_u / \sigma_v$ — the quantity that can be traded per unit of price impact. More noise trading → deeper market.

## Empirical Estimation

Regress price changes on signed order flow:

$$
\Delta p_t = \alpha + \lambda \cdot \text{OF}_t + \varepsilon_t
$$

Common unit: **basis points per million USD** (bps/$M).

```python
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

def estimate_kyle_lambda(trades: pd.DataFrame,
                         interval: str = '1min') -> dict:
    """
    trades: DataFrame with ['timestamp','price','volume','side']
            side in {'buy','sell'}
    Returns: {'lambda': float, 'r2': float, 'depth': float}
    """
    t = trades.copy()
    t['timestamp'] = pd.to_datetime(t['timestamp'])
    t = t.set_index('timestamp')
    t['signed_vol'] = np.where(t['side']=='buy', t['volume'], -t['volume'])

    bars = t.resample(interval).agg(
        order_flow=('signed_vol', 'sum'),
        price_change=('price', lambda x: x.iloc[-1]-x.iloc[0]
                      if len(x)>0 else 0)
    ).dropna()

    model = LinearRegression().fit(bars[['order_flow']], bars['price_change'])
    lam = float(model.coef_[0])
    r2  = model.score(bars[['order_flow']], bars['price_change'])
    return {'lambda': lam, 'r2': r2,
            'depth': 1/lam if lam > 0 else np.inf}
```

## Multi-Period Extension

In a $N$-period model, equilibrium $\lambda$ evolves as:

$$
\lambda_n = \frac{\sigma_v}{2\sigma_u} \cdot \frac{1}{\sqrt{N-n+1}}
$$

Prediction: **market depth decreases toward the close** (informed trading is more aggressive), consistent with empirical NYSE evidence.

## Extensions

### Almgren-Chriss Impact Decomposition

Optimal execution splits impact into:

$$
\text{Cost} = \underbrace{\eta \dot{x}}_{\text{temporary}} + \underbrace{\lambda x}_{\text{permanent}}
$$

where $\eta$ governs instantaneous impact and $\lambda$ governs lasting price dislocation.

### Hasbrouck's (1991) Information Share

Fraction of price variance attributable to informed flow:

$$
IS = \frac{\lambda^2 \sigma_x^2}{\sigma_v^2}
$$

## Applications

| Application | How $\lambda$ is used |
|------------|----------------------|
| Optimal execution | Minimize $\lambda x^2$ in cost function |
| Market-making | Set half-spread = $\lambda \cdot$ expected inventory |
| Liquidity monitoring | Compare $\lambda$ across instruments and regimes |
| Stress testing | Scenario analysis with elevated $\lambda$ |

## Related Articles

- [[vpin|VPIN]] — informed-flow fraction; $\text{VPIN} \approx 2\lambda\sigma_u/\sigma_v$
- [[order-flow-imbalance|Order Flow Imbalance & Microprice]] — empirical OFI metric
- [[optimal-execution|Cross-Impact and Optimal Execution]] — lambda in execution cost models
- [[avellaneda-stoikov|Avellaneda-Stoikov Model]] — quoting with inventory and lambda
- [[amihud-illiquidity|Amihud Illiquidity]] — daily-frequency liquidity alternative
