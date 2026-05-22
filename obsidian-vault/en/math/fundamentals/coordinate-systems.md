---
title: Coordinate Systems & Transforms
category: Math Foundations
order: 70
lang: en
slug: coordinate-systems
---

Coordinate systems are foundational for describing geometric spaces and physical phenomena. Beyond the standard Cartesian coordinates, alternative systems simplify specific classes of problems.

### Polar and Spherical Coordinates
In 2D, **polar coordinates** $(r, \theta)$ relate to Cartesian $(x,y)$ by:
$x = r \cos\theta, \quad y = r \sin\theta$

In 3D, **spherical coordinates** $(r, \theta, \phi)$ are used:
$x = r \sin\theta \cos\phi, \quad y = r \sin\theta \sin\phi, \quad z = r \cos\theta$

### The Jacobian Determinant
When transforming integrals between coordinate systems, the scaling factor for the volume element is the absolute value of the **Jacobian determinant**:
$J = \det \left( \frac{\partial (x_1, \dots, x_n)}{\partial (u_1, \dots, u_n)} \right)$
For polar coordinates, $J = r$. For spherical, $J = r^2 \sin\theta$.

These transforms are critical in physics, graphics, and [[implicit-function-theorem|Implicit Functions]].
