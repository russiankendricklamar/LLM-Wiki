---
title: Поверхностные интегралы
category: Advanced Calculus
order: 95
lang: ru
slug: surface-integrals
---

## Обзор
Поверхностный интеграл обобщает двойные интегралы на случай интегрирования по криволинейным поверхностям.

## Формулировка
Для скалярной функции $f$ на поверхности $S$, заданной как $\mathbf{r}(u,v)$:
$$ \iint_S f \, dS = \iint_D f(\mathbf{r}(u,v)) \left\| \frac{\partial \mathbf{r}}{\partial u} \times \frac{\partial \mathbf{r}}{\partial v} \right\| \, du \, dv $$

Для векторного поля $\mathbf{F}$ (поток через поверхность):
$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \mathbf{F}(\mathbf{r}(u,v)) \cdot \left( \frac{\partial \mathbf{r}}{\partial u} \times \frac{\partial \mathbf{r}}{\partial v} \right) \, du \, dv $$