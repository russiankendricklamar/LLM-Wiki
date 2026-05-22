---
title: Криволинейные интегралы
category: Advanced Calculus
order: 94
lang: ru
slug: line-integrals
---

## Обзор
Криволинейный интеграл — это интеграл от функции, вычисляемый вдоль некоторой кривой. Применяется для скалярных полей (например, масса нити) и векторных полей (работа силы).

## Скалярные и векторные поля
Для скалярного поля $f$ и кривой $C$, параметризованной $\mathbf{r}(t)$:
$$ \int_C f \, ds = \int_a^b f(\mathbf{r}(t)) \|\mathbf{r}'(t)\| \, dt $$

Для векторного поля $\mathbf{F}$:
$$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt $$