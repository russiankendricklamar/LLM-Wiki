---
title: Экспоненциальное распределение
category: Probability
order: 122
lang: ru
slug: exponential-distribution
---

## Обзор
Экспоненциальное распределение моделирует время между событиями в [[poisson-process]].

## Математическая формулировка
Плотность вероятности (PDF):
$$ f(x; \lambda) = \begin{cases} \lambda e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases} $$
Это единственное непрерывное распределение, обладающее свойством "отсутствия памяти":
$$ P(T > s + t \mid T > s) = P(T > t) $$