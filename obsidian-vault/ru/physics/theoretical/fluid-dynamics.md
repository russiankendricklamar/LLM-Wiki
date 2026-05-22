---
title: 'Гидродинамика: Уравнения Навье-Стокса'
category: Advanced Theory
order: 142
lang: ru
slug: fluid-dynamics
---

Уравнения Навье-Стокса описывают движение вязких жидкостей, вытекая из законов сохранения.

### Уравнение неразрывности
$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{u}) = 0$
Для несжимаемой жидкости $\nabla \cdot \mathbf{u} = 0$.

### Уравнение импульса
Применяя второй закон Ньютона к элементу жидкости:
$\rho \left( \frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla) \mathbf{u} \right) = -\nabla p + \nabla \cdot \boldsymbol{\tau} + \rho \mathbf{g}$
где $\boldsymbol{\tau}$ — тензор вязких напряжений. Для ньютоновской жидкости и при условии несжимаемости уравнение принимает вид:
$\rho \left( \frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla) \mathbf{u} \right) = -\nabla p + \mu \nabla^2 \mathbf{u} + \rho \mathbf{g}$
Строгое доказательство существования гладких решений в 3D — задача тысячелетия.
