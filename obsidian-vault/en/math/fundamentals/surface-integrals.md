---
title: Surface Integrals
category: Advanced Calculus
order: 95
lang: en
slug: surface-integrals
---

## Overview
A surface integral generalizes double integrals to integration over surfaces.

## Formulation
For a scalar function $f$ over a surface $S$ parameterized by $\mathbf{r}(u,v)$:
$$ \iint_S f \, dS = \iint_D f(\mathbf{r}(u,v)) \left\| \frac{\partial \mathbf{r}}{\partial u} \times \frac{\partial \mathbf{r}}{\partial v} \right\| \, du \, dv $$

For a vector field $\mathbf{F}$ (flux integral):
$$ \iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \mathbf{F}(\mathbf{r}(u,v)) \cdot \left( \frac{\partial \mathbf{r}}{\partial u} \times \frac{\partial \mathbf{r}}{\partial v} \right) \, du \, dv $$