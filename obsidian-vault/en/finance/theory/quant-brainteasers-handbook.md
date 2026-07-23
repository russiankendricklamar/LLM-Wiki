---
title: "Quant Brainteasers Python Handbook"
category: "Trading Theory"
order: 1
lang: "en"
slug: "quant-brainteasers-handbook"
type: "article"
growth: "evergreen"
---

# Quant Brainteasers Python Handbook

Numerical verification scripts in Python (Monte Carlo & Dynamic Programming) for standard quantitative trading interview questions.

---

## 1. Dice Re-roll Game Simulation

```python
import numpy as np

def simulate_dice_reroll(n_sims=1_000_000):
    first_rolls = np.random.randint(1, 7, size=n_sims)
    final_payouts = np.where(first_rolls <= 2, np.random.randint(1, 7, size=n_sims) - 1, first_rolls)
    return np.mean(final_payouts)

print(f"Simulated EV: {simulate_dice_reroll():.4f}") # Theoretical EV = 3.8333
```

---

## See Also
- [[quant-trading-guide|Quant Trading & Interview Prep Course]]
- [[optimal-stopping-and-kelly|Kelly Criterion]]
- [[quant-market-making-mechanics|Market Making Mechanics]]
