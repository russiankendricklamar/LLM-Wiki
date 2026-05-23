---
title: 'Geometry: Conic Sections & Quadratic Forms'
category: Math Foundations
order: 87
lang: en
slug: conic-sections
---

Conic sections (ellipses, parabolas, hyperbolas) are curves formed by intersecting a cone with a plane.

### Matrix Representation
A general conic equation $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$ can be represented using **quadratic forms**:
$\mathbf{x}^T Q \mathbf{x} + \mathbf{p}^T \mathbf{x} + F = 0$
where $Q$ is a symmetric matrix.

### Diagonalization
By applying a [[change-of-basis|Change of Basis]] (specifically, orthogonal diagonalization of $Q$), we eliminate the cross-term $Bxy$. The [[spectral-theory-operators|eigenvalues]] of $Q$ dictate the shape:
- Both positive/negative: Ellipse.
- Opposite signs: Hyperbola.
- One zero: Parabola.
