---
title: "Модели Стохастической Волатильности и Модель Хестона"
category: "Стохастика и Вероятности"
order: 2
lang: "ru"
slug: "stochastic-volatility-heston-model"
type: "article"
growth: "evergreen"
---

# Модели Стохастической Волатильности и Модель Хестона

Модель Блэка-Шоулза предполагает постоянство волатильности $\sigma$, что противоречит реальному скосу волатильности (Volatility Skew & Smile). Модель Хестона устраняет этот недостаток, задавая волатильность в виде стохастического процесса возврата к среднему.

---

## 1. Уравнения Модели Хестона

$$dS_t = \mu S_t dt + \sqrt{v_t} S_t dW_t^S$$
$$dv_t = \kappa (\theta - v_t) dt + \xi \sqrt{v_t} dW_t^v$$
с корреляцией брауновских движений $d\langle W^S, W^v \rangle_t = \rho dt$.

---

## 2. Условие Феллера (Feller Condition)

Для предотвращения достижения дисперсией $v_t$ нулевого значения необходимо выполнение условия:
$$2\kappa\theta > \xi^2$$

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[stochastic-calculus-and-ito-lemma|Стохастический Анализ и Лемма Ито]]
- [[volatility-trading-and-variance-swaps|Трейдинг Волатильностью]]
