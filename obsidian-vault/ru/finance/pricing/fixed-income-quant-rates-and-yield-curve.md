---
title: "Fixed Income: Процентные Ставки и Кривая Доходности"
category: "Ценообразование и Исполнение"
order: 4
lang: "ru"
slug: "fixed-income-quant-rates-and-yield-curve"
type: "article"
growth: "evergreen"
---

# Fixed Income: Процентные Ставки и Кривая Доходности

Анализ облигаций и инструментов процентных ставок (Interest Rate Swaps, Futures).

---

## 1. Дюрация и Выпуклость (Duration & Convexity)

- **Модифицированная Дюрация ($D_{\text{mod}}$):** ЧSensitivity цены облигации к изменению процентной ставки $y$:
  $$D_{\text{mod}} = -\frac{1}{P} \frac{dP}{dy}$$
- **Выпуклость (Convexity):** Вторая производная цены:
  $$\frac{\Delta P}{P} \approx -D_{\text{mod}} \Delta y + \frac{1}{2} C (\Delta y)^2$$

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[option-greeks-and-volatility|Опционные Греки]]
- [[stochastic-calculus-and-ito-lemma|Стохастический Анализ]]
