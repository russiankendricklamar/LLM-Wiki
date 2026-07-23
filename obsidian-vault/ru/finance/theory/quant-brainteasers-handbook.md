---
title: "Справочник и Практикум Квант-Головоломок на Python"
category: "Теория Трейдинга"
order: 1
lang: "ru"
slug: "quant-brainteasers-handbook"
type: "article"
growth: "evergreen"
---

# Справочник и Практикум Квант-Головоломок на Python

Настоящий справочник содержит численные скрипты на Python (метод Монте-Карло и динамическое программирование) для автоматической проверки вычислений главных задач квант-интервью из курса [[quant-trading-guide]].

---

## 1. Симуляция игры с переброской d6 (Random Dice Game #1)

```python
import numpy as np

def simulate_dice_reroll(n_sims=1_000_000):
    first_rolls = np.random.randint(1, 7, size=n_sims)
    # Стратегия: перебрасываем на 1 и 2 (стоимость £1)
    final_payouts = np.where(first_rolls <= 2, np.random.randint(1, 7, size=n_sims) - 1, first_rolls)
    return np.mean(final_payouts)

print(f"Simulated EV: {simulate_dice_reroll():.4f}") # Теоретическое EV = 3.8333
```

---

## 2. Численный расчет 100 подбрасываний монет (> 55 орлов)

```python
from scipy.stats import binom, norm

n, p = 100, 0.5
prob_exact = 1 - binom.cdf(55, n, p)
mu, sigma = n * p, np.sqrt(n * p * (1 - p))
prob_norm = 1 - norm.cdf(55.5, mu, sigma) # С непрерывной поправкой

print(f"Точная вероятность: {prob_exact:.4f}") # ~13.56%
print(f"ЦПТ Аппроксимация: {prob_norm:.4f}")   # ~13.57%
```

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[optimal-stopping-and-kelly|Критерий Келли]]
- [[quant-market-making-mechanics|Механика Market Making]]
