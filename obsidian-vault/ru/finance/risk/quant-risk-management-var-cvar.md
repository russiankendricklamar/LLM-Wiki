---
title: "Количественное Управление Рисками: VaR и CVaR"
category: "Управление Рисками"
order: 1
lang: "ru"
slug: "quant-risk-management-var-cvar"
type: "article"
growth: "evergreen"
---

# Количественное Управление Рисками: VaR и CVaR

Количественное управление рисками — это системная оценка потенциальных убытков портфеля при нормальных и экстремальных рыночных условиях.

---

## 1. Value at Risk (VaR) и Expected Shortfall (CVaR)

### 1.1 Value at Risk ($VaR_\alpha$)
Максимальный убыток портфеля с доверительным уровнем $\alpha$ (например, 95% или 99%) за временной горизонт $T$:
$$P(L > VaR_\alpha) = 1 - \alpha$$

- **Параметрический VaR:** При нормальном распределении $L \sim N(\mu, \sigma^2)$:
  $$VaR_\alpha = - (\mu + z_\alpha \cdot \sigma)$$

### 1.2 Expected Shortfall ($CVaR_\alpha$)
Ожидаемый размер убытка при условии, что убыток превысил уровень $VaR$:
$$CVaR_\alpha = E[L \mid L > VaR_\alpha]$$
*Преимущество:* CVaR является **когерентной мерой риска** (удовлетворяет условию субэддитивности), в отличие от VaR.

---

## 2. Коэффициенты Эффективности Портфеля

- **Sharpe Ratio:** $\frac{E[R_p - R_f]}{\sigma_p}$
- **Sortino Ratio:** $\frac{E[R_p - R_f]}{\sigma_{\text{downside}}}$
- **Calmar Ratio:** $\frac{E[R_p - R_f]}{\text{Max Drawdown}}$

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[optimal-stopping-and-kelly|Критерий Келли]]
- [[statistical-arbitrage-and-pairs-trading|Статистический Арбитраж]]
