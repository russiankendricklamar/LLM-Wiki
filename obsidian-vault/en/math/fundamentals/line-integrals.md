---
title: Line Integrals
category: Advanced Calculus
order: 94
lang: en
slug: line-integrals
---

## Overview
A line integral integrates a function along a curve. It can evaluate scalar fields (e.g., calculating mass of a wire) or vector fields (e.g., calculating work).

## Scalar and Vector Fields
For a scalar field $f$, the integral along curve $C$ parameterized by $\mathbf{r}(t)$ is:
$$ \int_C f \, ds = \int_a^b f(\mathbf{r}(t)) \|\mathbf{r}'(t)\| \, dt $$

For a vector field $\mathbf{F}$:
$$ \int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt $$