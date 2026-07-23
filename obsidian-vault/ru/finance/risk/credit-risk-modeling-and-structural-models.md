---
title: "Моделирование Кредитного Риска и Структурная Модель Мертона"
category: "Управление Рисками"
order: 2
lang: "ru"
slug: "credit-risk-modeling-and-structural-models"
type: "article"
growth: "evergreen"
---

# Моделирование Кредитного Риска и Структурная Модель Мертона

Структурная модель Мертона (Merton Model) рассматривает собственный капитал фирмы как европейский опцион Call на ее активы.

---

## 1. Математика Модели Мертона

Капитал фирмы $E$:
$$E = V N(d_1) - D e^{-rT} N(d_2)$$
где $V$ — стоимость активов фирмы, $D$ — номинал долга.

Вероятность дефолта (Probability of Default / PD):
$$\text{PD} = N(-d_2) = N \left( -\frac{\ln(V/D) + (r - \frac{1}{2}\sigma_V^2)T}{\sigma_V \sqrt{T}} \right)$$

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[quant-risk-management-var-cvar|Управление Рисками VaR/CVaR]]
- [[option-greeks-and-volatility|Опционные Греки]]
