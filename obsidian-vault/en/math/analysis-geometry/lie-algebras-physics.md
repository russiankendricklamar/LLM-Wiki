---
title: "Lie Algebras in Physics"
category: "Analysis & Geometry"
order: 7
lang: "en"
slug: "lie-algebras-physics"
---

# Lie Algebras in Physics

While [[lie-groups|Lie Groups]] represent global symmetries, **Lie Algebras** describe the local, infinitesimal generators of these symmetries. In physics, these generators often correspond to observable physical quantities like angular momentum, energy, or charge.

## Generators and Observables

In quantum mechanics, a symmetry transformation $U = \exp(i \theta X)$ must be unitary. This implies that the generator $X$ must be a **Hermitian operator**, which is a measurable observable.

### 1. Angular Momentum and $\mathfrak{su}(2)$
The rotation group $SO(3)$ (and its double cover $SU(2)$) has generators $J_x, J_y, J_z$ that satisfy the commutation relations:
$$[J_i, J_j] = i \hbar \epsilon_{ijk} J_k$$
This is the Lie algebra $\mathfrak{su}(2)$. The fact that these generators don't commute leads directly to the **Heisenberg Uncertainty Principle** for angular momentum.

### 2. Particle Physics and $\mathfrak{su}(3)$
The "Eightfold Way" of Murray Gell-Mann uses the $\mathfrak{su}(3)$ algebra to classify hadrons. The generators (Gell-Mann matrices) represent properties like **isospin** and **strangeness**.

## Gauge Theories and Connections

In General Relativity and Yang-Mills theories (the basis of the Standard Model), force fields are represented as **Lie-algebra valued 1-forms** (connections).
- **Electromagnetism**: Based on the $U(1)$ group (commutative).
- **Strong Force (QCD)**: Based on the $SU(3)$ group (non-commutative/non-Abelian).

The curvature of these connections (the force field strength) is given by:
$$F = dA + A \wedge A$$
where $[A, A]$ (implicit in the wedge) is the Lie bracket.

## The Adjoint Representation and Force Carriers

The particles that carry forces (photons, gluons, $W/Z$ bosons) always live in the **Adjoint Representation** of the Lie algebra. The number of force carriers equals the dimension of the Lie algebra:
- $SU(3)$ has dimension 8 $\to$ there are 8 gluons.
- $SU(2)$ has dimension 3 $\to$ there are 3 weak bosons ($W^+, W^-, Z$).

## Visualization: Spin Multiplets

```chart
{
  "type": "scatter",
  "xAxis": "I3",
  "data": [
    {"I3": -1.0, "Y": 0.0, "label": "π⁻"},
    {"I3": 0.0, "y": 0.0, "label": "π⁰"},
    {"I3": 1.0, "y": 0.0, "label": "π⁺"},
    {"I3": -0.5, "y": 1.0, "label": "K⁰"},
    {"I3": 0.5, "y": 1.0, "label": "K⁺"}
  ],
  "lines": [
    {"dataKey": "y", "stroke": "#8b5cf6", "name": "Hypercharge (Y)"}
  ]
}
```
*The weight diagrams of Lie algebra representations (like this Meson Octet) predict the properties and existence of subatomic particles based purely on symmetry.*

## Related Topics

[[lie-groups]] — the global symmetry groups  
[[quantum-mechanics]] — where generators become operators  
[[physics/gravity/general-relativity]] — gravity as a gauge theory
---
