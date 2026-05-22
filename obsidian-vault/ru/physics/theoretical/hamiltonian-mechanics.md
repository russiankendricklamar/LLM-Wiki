---
title: Гамильтонова механика и скобки Пуассона
category: Advanced Theory
order: 144
lang: ru
slug: hamiltonian-mechanics
---

Гамильтонова механика переходит от конфигурационного пространства $(q, \dot{q})$ к фазовому $(q, p)$ через преобразование Лежандра.

### Гамильтониан
Сопряженный импульс $p_i = \frac{\partial L}{\partial \dot{q}_i}$. Гамильтониан:
$H(\mathbf{q}, \mathbf{p}, t) = \sum_i p_i \dot{q}_i - L$
Уравнения Гамильтона описывают симплектический поток:
$\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}$

### Скобки Пуассона
Эволюция наблюдаемой величины $f$ задается уравнением:
$\frac{df}{dt} = \{f, H\} + \frac{\partial f}{\partial t}$
где $\{f, g\} = \sum_i \left( \frac{\partial f}{\partial q_i}\frac{\partial g}{\partial p_i} - \frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q_i} \right)$.
В квантовой механике Дирак заменил скобки коммутаторами, заложив основы канонического квантования.
