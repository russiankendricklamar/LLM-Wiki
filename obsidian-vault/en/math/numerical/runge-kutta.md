---
title: Runge-Kutta Methods
category: Numerical Methods
order: 96
lang: en
slug: runge-kutta
---

## Overview
Runge-Kutta methods are a family of implicit and explicit iterative methods for solving ordinary differential equations (ODEs).

## RK4
The most widely known is the 4th-order Runge-Kutta method (RK4). For an ODE $y' = f(t, y)$:
$$ k_1 = f(t_n, y_n) $$
$$ k_2 = f(t_n + \frac{h}{2}, y_n + h\frac{k_1}{2}) $$
$$ k_3 = f(t_n + \frac{h}{2}, y_n + h\frac{k_2}{2}) $$
$$ k_4 = f(t_n + h, y_n + h k_3) $$
$$ y_{n+1} = y_n + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4) $$