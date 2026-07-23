---
title: "Шпаргалка Квант-Интервью: Формулы и Лайфхаки"
category: "Количественный Трейдинг"
order: 4
lang: "ru"
slug: "quant-interview-cheat-sheet"
type: "article"
growth: "evergreen"
---

# Шпаргалка Квант-Интервью: Формулы, Распределения и Лайфхаки

Компактная экспресс-шпаргалка для быстрой повторки перед собеседованием в проп-фирмы.

---

## 1. Главные вероятностные формулы

- **Геометрическое $Geom(p)$:** $E[X] = 1/p$.
- **Равномерное $Unif[a, b]$:** $E[X] = \frac{a+b}{2}$, $Var(X) = \frac{(b-a)^2}{12}$.
- **Купонщик (Coupon Collector):** $E[\text{rolls for } N \text{ items}] = N \sum_{k=1}^N \frac{1}{k} \approx N \ln(N) + \gamma N$.
- **Поправка на непрерывность броска кости $X \ge K$:** $E[\text{stopping value}] \approx K + 5/3 \approx K + 1.67$.
- **Правило $1/e$ в задаче о секретаре:** Пропустить первые $N/e \approx 37\%$, выбрать первого превосходящего.
- **Критерий Келли:** $f^* = \frac{p(b+1)-1}{b} = p - \frac{q}{b}$.
- **Put-Call Parity:** $C - P = S - K e^{-rT}$.

---

## 2. Быстрые ориентиры Optiver Test

- $\frac{1}{8} = 0.125$, $\frac{3}{8} = 0.375$, $\frac{5}{8} = 0.625$, $\frac{7}{8} = 0.875$.
- $\frac{1}{16} = 0.0625$, $\frac{1}{25} = 0.04$, $\frac{1}{50} = 0.02$.
- $2^{10} = 1024 \approx 10^3$.

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[quant-market-making-mechanics|Механика Market Making]]
- [[quant-brainteasers-handbook|Задачник Квант-Головоломок]]
