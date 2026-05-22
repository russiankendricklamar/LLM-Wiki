---
title: Метод Ньютона-Рафсона (многомерный)
category: Numerical Methods
order: 98
lang: ru
slug: newton-raphson-multi
---

## Обзор
Метод Ньютона-Рафсона обобщается для поиска корней систем нелинейных уравнений $\mathbf{F}(\mathbf{x}) = \mathbf{0}$.

## Итерация
Для текущего приближения $\mathbf{x}_n$ следующий шаг вычисляется как:
$$ \mathbf{x}_{n+1} = \mathbf{x}_n - J^{-1}(\mathbf{x}_n) \mathbf{F}(\mathbf{x}_n) $$
где $J$ — матрица Якоби:
$$ J_{i,j} = \frac{\partial F_i}{\partial x_j} $$
Метод обладает квадратичной сходимостью, но требует вычисления и обращения якобиана.