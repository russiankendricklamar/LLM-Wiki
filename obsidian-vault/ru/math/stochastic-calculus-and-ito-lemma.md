---
title: "Стохастический Анализ и Лемма Ито"
category: "Математика и Теория Игр"
order: 2
lang: "ru"
slug: "stochastic-calculus-and-ito-lemma"
type: "article"
growth: "evergreen"
---

# Стохастический Анализ и Лемма Ито

Стохастический анализ — это математический фундамент непрерывного ценообразования активов и дифференциальных уравнений Блэка-Шоулза.

---

## 1. Процесс Ито и Лемма Ито

Пусть случайный процесс $X_t$ удовлетворяет стохастическому дифференциальному уравнению (СДУ):
$$dX_t = \mu_t dt + \sigma_t dW_t$$

Тогда для гладкой функции $f(t, X_t)$ дифференциал $df$ по **Лемме Ито** равен:
$$df(t, X_t) = \left( \frac{\partial f}{\partial t} + \mu_t \frac{\partial f}{\partial x} + \frac{1}{2} \sigma_t^2 \frac{\partial^2 f}{\partial x^2} \right) dt + \sigma_t \frac{\partial f}{\partial x} dW_t$$

> **Правила дифференцирования Ито:**
> $dt \cdot dt = 0$, $dt \cdot dW_t = 0$, $(dW_t)^2 = dt$.

---

## 2. Теорема Фейнмана-Каца (Feynman-Kac Theorem)

Устанавливает эквивалентность между решением дифференциальных уравнений в частных производных (PDE) и математическим ожиданием стохастических процессов (SDE).

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[option-greeks-and-volatility|Опционные Греки]]
- [[monte-carlo-option-pricing-and-variance-reduction|Оценка Опционов Монте-Карло]]
