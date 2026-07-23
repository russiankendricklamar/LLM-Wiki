---
title: "Выпуклая Оптимизация в Количественном Трейдинге"
category: "Портфельное Инвестирование"
order: 2
lang: "ru"
slug: "convex-optimization-in-trading"
type: "article"
growth: "evergreen"
---

# Выпуклая Оптимизация в Количественном Трейдинге

Задачи ребалансировки портфелей с учетом линейных и квадратичных издержек формулируются в виде задач выпуклого программирования (Convex Optimization).

---

## 1. Постановка Задачи Квадратичного Программирования (QP)

$$\min_{w} \left( \frac{1}{2} w^T \Sigma w - \lambda \cdot w^T \mu + \gamma_1 \|w - w_0\|_1 + \gamma_2 \|w - w_0\|_2^2 \right)$$
при ограничениях:
- $\sum w_i = 1$ (Полное инвестирование).
- $w_i \ge 0$ (Запрет коротких позиций / Long-only).

- Штраф $\|w - w_0\|_1$ ограничивает оборачиваемость портфеля (Turnover Penalty) и транзакционные издержки.
- Штраф $L_1$-номы $\|w\|_1 \le C$ (Lasso) способствует отбору узкого числа эффективных активов (Sparse Portfolio).

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[portfolio-optimization-and-black-litterman|Модель Блэка-Литтермана]]
- [[algorithmic-execution-twap-vwap|Алгоритмы Исполнения]]
