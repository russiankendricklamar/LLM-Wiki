---
title: "Convexity"
category: "Fundamentals"
order: 9
lang: "en"
slug: "convexity"
---

# Convexity

Convexity is the property that makes optimization "well-behaved." In machine learning and quantitative finance, we almost always strive to formulate problems as convex optimizations because they guarantee a **global optimum**.

## Convex Sets and Functions

- **Convex Set**: A set where the line segment connecting any two points in the set lies entirely within the set. (No "dents" or "caves").
- **Convex Function**: A function where the line segment between any two points on the graph lies **above** or on the graph. 
  - *Mathematical test*: The [[gradient-hessian-jacobian|Hessian]] matrix is Positive Semi-Definite (all eigenvalues $\geq 0$).

## Why It Matters

1.  **Global vs. Local**: For a non-convex function (like the loss landscape of a deep neural network), an optimizer might get stuck in a "local minimum" (a shallow dip). For a convex function, any local minimum is automatically the **global minimum**.
2.  **Duality**: Every convex optimization problem has a "Dual" problem. Often, the dual is easier to solve and provides deep insights (like the relationship between risk and return or the "shadow prices" in economics).

## Examples in AI and Finance

- **SVM (Support Vector Machines)**: Finding the maximum margin is a convex problem.
- **Markowitz Portfolio Theory**: Minimizing variance for a given return is a quadratic convex optimization.
- **Log-Likelihood**: Many statistical models (like Logistic Regression) have convex log-likelihoods, making them easy to train.

## Visualization: The "Bowl" Property

```chart
{
  "type": "line",
  "xAxis": "x",
  "data": [
    {"x": -2, "convex": 4, "non_convex": 2},
    {"x": -1, "convex": 1, "non_convex": -1},
    {"x": 0,  "convex": 0, "non_convex": 2},
    {"x": 1,  "convex": 1, "non_convex": -1},
    {"x": 2,  "convex": 4, "non_convex": 2}
  ],
  "lines": [
    {"dataKey": "convex", "stroke": "#10b981", "name": "Convex (Safe)"},
    {"dataKey": "non_convex", "stroke": "#ef4444", "name": "Non-Convex (Dangeous)"}
  ]
}
```
*A convex function (green) is like a bowl: a ball dropped anywhere will always roll to the same lowest point. A non-convex function (red) has multiple traps.*

## Related Topics

[[convex-optimization-trading]] — the primary applied field  
[[gradient-hessian-jacobian]] — using the Hessian to check convexity  
[[martingale-optimal-transport]] — a high-dimensional convex problem
---
