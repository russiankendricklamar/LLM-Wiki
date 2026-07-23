---
title: "Поверхность Волатильности и Модель SABR"
category: "Стохастика и Вероятности"
order: 3
lang: "ru"
slug: "volatility-surface-sabr-model"
type: "article"
growth: "evergreen"
---

# Поверхность Волатильности и Модель SABR

Модель SABR (Stochastic Alpha Beta Rho) описывает динамику поверхности имплицитной волатильности (Volatility Surface) и кривую улыбки (Smile).

---

## 1. Системные Уравнения SABR

$$dF_t = \sigma_t F_t^\beta dW_t^F$$
$$d\sigma_t = \alpha \sigma_t dW_t^\sigma$$
с корреляцией $d\langle W^F, W^\sigma \rangle_t = \rho dt$.

---

## 2. Безарбитражность Поверхности

Для предотвращения статического арбитража на поверхности волатильности проверяется отсутствие:
1. **Календарного арбитража (Calendar Spread Arbitrage):** Дисперсия должна расти по времени $\frac{\partial w}{\partial T} \ge 0$.
2. **Бабочка-арбитража (Butterfly Arbitrage):** Плотность вероятностей должна быть везде положительной.

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[stochastic-volatility-heston-model|Модель Хестона]]
- [[option-greeks-and-volatility|Опционные Греки]]
