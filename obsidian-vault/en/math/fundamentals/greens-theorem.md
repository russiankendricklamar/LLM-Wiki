---
title: Green's Theorem
category: Advanced Calculus
order: 91
lang: en
slug: greens-theorem
---

## Overview
Green's Theorem relates a line integral around a simple closed curve $C$ to a double integral over the plane region $D$ bounded by $C$. It is a fundamental result in vector calculus.

## Mathematical Formulation
Let $C$ be a positively oriented, piecewise-smooth, simple closed curve in a plane, and let $D$ be the region bounded by $C$. If $L$ and $M$ are functions of $(x, y)$ defined on an open region containing $D$ and have continuous partial derivatives there, then:
$$ \oint_C (L \, dx + M \, dy) = \iint_D \left( \frac{\partial M}{\partial x} - \frac{\partial L}{\partial y} \right) dA $$

It connects macroscopic circulation to microscopic circulation ([[stokes-theorem]]).