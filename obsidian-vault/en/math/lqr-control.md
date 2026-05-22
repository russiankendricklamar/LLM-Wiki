---
title: "LQR Control"
category: "math"
order: 219
lang: "en"
slug: "lqr-control"
---

# LQR Control

[[LQR]] (Linear Quadratic Regulator) minimizes a cost $J = \int (x^T Q x + u^T R u) dt$ for $\dot{x} = Ax + Bu$. The optimal control is $u = -Kx$, where $K = R^{-1}B^T P$ and $P$ solves the Algebraic Riccati Equation.
