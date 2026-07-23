---
title: "Декомпозиция Рисков Портфеля и Risk Parity"
category: "Управление Рисками"
order: 3
lang: "ru"
slug: "portfolio-risk-decomposition-marginal-var"
type: "article"
growth: "evergreen"
---

# Декомпозиция Рисков Портфеля и Risk Parity

Распределение риска между активами на основе принципа равного вклада в риск (Equal Risk Contribution / ERC).

---

## 1. Маржинальный и Компонентный VaR

- **Marginal VaR (MVaR):** $\text{MVaR}_i = \frac{\partial \text{VaR}}{\partial w_i}$.
- **Component VaR ($\text{CVaR}_i$):** $\text{CVaR}_i = w_i \cdot \text{MVaR}_i$.
- **Теорема Эйлера:** Сумма компонентных рисков равна общему VaR портфеля:
  $$\sum_{i=1}^N \text{CVaR}_i = \text{VaR}_{\text{portfolio}}$$

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[quant-risk-management-var-cvar|Управление Рисками VaR/CVaR]]
- [[portfolio-optimization-and-black-litterman|Модель Блэка-Литтермана]]
