---
title: "Fourier Neural Operators"
category: "AI Physics"
order: 6
lang: "en"
slug: "fourier-neural-operators"
---

# Fourier Neural Operators (FNO)

Fourier Neural Operators (FNO), introduced by Li et al. (2020), represent a revolutionary approach to solving **Partial Differential Equations (PDEs)** using deep learning. Unlike standard neural networks that learn mappings between finite-dimensional spaces, FNOs learn mappings between **infinite-dimensional function spaces**.

## The Operator Learning Problem

Traditional PDE solvers (Finite Elements, Finite Difference) are mesh-dependent: if you change the resolution, you must recompute the solution. An **Operator Neural Network** aims to learn the operator $G: \mathcal{A} \to \mathcal{U}$ that maps an input function (e.g., initial conditions) to the solution function, regardless of the discretization.

## How FNO Works

The key innovation of FNO is to perform the integral kernel operation in the **Fourier domain**.

The FNO layer architecture:
1.  **Fourier Transform**: Transform the input $v(x)$ to the spectral domain: $\hat{v}(k) = \mathcal{F}(v)(k)$.
2.  **Linear Transform (Weighting)**: Multiply the lowest frequency modes by a learnable complex weight matrix $R$: $\hat{v}_{out}(k) = R \hat{v}(k)$. This acts as a global convolution.
3.  **Inverse Fourier Transform**: Transform back to the spatial domain: $v_{out}(x) = \mathcal{F}^{-1}(\hat{v}_{out})(x)$.
4.  **Local Skip Connection**: Add a local linear transformation of the input (like a ResNet connection).
5.  **Non-linearity**: Apply an activation function (ReLU, GeLU).

## Why It Matters: Resolution Invariance

Because the weights are learned in the frequency domain, an FNO trained on a $64 \times 64$ grid can be evaluated on a $256 \times 256$ grid (or any resolution) without retraining. It captures the **physics of the continuous operator**, not just the statistics of the grid.

## Performance: Speed and Accuracy

FNOs are often **100x to 1000x faster** than traditional numerical solvers like Crank-Nicolson or spectral methods for fluid dynamics (Navier-Stokes), while maintaining high accuracy.

## Visualization: Spectral Filtering

```chart
{
  "type": "bar",
  "xAxis": "frequency",
  "data": [
    {"frequency": "Low (k=1)", "energy": 0.85, "learned_weight": 1.2},
    {"frequency": "Med (k=4)", "energy": 0.40, "learned_weight": 0.5},
    {"frequency": "High (k=16)", "energy": 0.10, "learned_weight": 0.05},
    {"frequency": "Noise (k=64)", "energy": 0.02, "learned_weight": 0.0}
  ],
  "lines": [
    {"dataKey": "learned_weight", "stroke": "#ef4444", "name": "FNO Learnable Modes"}
  ]
}
```
*FNOs focus on learning the most important low-frequency modes of the solution, effectively acting as a physics-informed low-pass filter that generalizes across scales.*

## Applications

1.  **Weather Forecasting**: Models like FourCastNet use FNOs to predict global atmospheric dynamics.
2.  **Fluid Dynamics**: Solving Navier-Stokes equations for turbulence modeling.
3.  **Material Science**: Predicting stress and strain fields in complex structures.

## Related Topics

[[neural-operators]] — the broader family of operators  
[[pinns]] — the alternative approach (Physics-Informed NNs)  
[[physics/classical/partial-differential-equations]] — the mathematical target
---
