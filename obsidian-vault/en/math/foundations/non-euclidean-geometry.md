---
slug: "/math/non-euclidean-geometry"
title: "Non-Euclidean Geometry"
category: "Foundations of Mathematics"
order: 4
lang: "en"
---

# Non-Euclidean Geometry

**Non-Euclidean geometry** emerged in the 19th century when Bolyai, Lobachevsky, and Riemann independently showed that Euclid's **fifth postulate** is independent of the other four — and that consistent geometries exist where it fails.

## The Parallel Postulate

> Through a point not on a line, there passes **exactly one** parallel line.

For 2000 years mathematicians tried to prove this from the first four postulates. It turned out to be impossible — the postulate is logically independent.

## Three Geometries

| | Euclidean | Hyperbolic | Elliptic |
|--|-----------|------------|---------|
| Parallels | Exactly one | Infinitely many | None |
| Curvature $K$ | $K = 0$ | $K < 0$ | $K > 0$ |
| Triangle angles | $= \pi$ | $< \pi$ | $> \pi$ |
| Model | Plane | Poincaré disk | Sphere |

## Gaussian Curvature

For a surface in $\mathbb{R}^3$: $K = \kappa_1 \cdot \kappa_2$ (product of principal curvatures).

**Gauss's Theorema Egregium**: $K$ is intrinsic — it depends only on distances measured within the surface, not on how it is embedded in $\mathbb{R}^3$.

## Poincaré Disk Model

The hyperbolic plane represented as the open unit disk $\mathbb{D} = \{z \in \mathbb{C} : |z| < 1\}$:

- **Geodesics**: arcs of circles orthogonal to the boundary $|z|=1$
- **Metric**: $ds^2 = \frac{4|dz|^2}{(1-|z|^2)^2}$
- Distance from center to boundary: $\infty$

$$d(0, r) = 2\tanh^{-1}(r) \xrightarrow{r \to 1} \infty$$

```python
import numpy as np

def poincare_distance(z1: complex, z2: complex) -> float:
    """Hyperbolic distance in the Poincaré disk."""
    num = abs(z1 - z2)
    den = abs(1 - z1.conjugate() * z2)
    return 2 * np.arctanh(num / den)

def mobius(z: complex, a: complex) -> complex:
    """Isometry of the Poincaré disk (Möbius transformation)."""
    return (z - a) / (1 - a.conjugate() * z)

def hyperbolic_triangle_angle_sum(a: complex, b: complex, c: complex) -> float:
    """Sum of angles of a hyperbolic triangle (always < π)."""
    def angle_at(v, u, w):
        return abs(np.angle(mobius(w, v) / mobius(u, v)))
    return angle_at(a, b, c) + angle_at(b, a, c) + angle_at(c, a, b)

def gaussian_curvature(f, x: float, y: float, h: float = 1e-5) -> float:
    """Numerical Gaussian curvature of surface z=f(x,y) at point (x,y)."""
    fxx = (f(x+h,y) - 2*f(x,y) + f(x-h,y)) / h**2
    fyy = (f(x,y+h) - 2*f(x,y) + f(x,y-h)) / h**2
    fxy = (f(x+h,y+h) - f(x+h,y-h) - f(x-h,y+h) + f(x-h,y-h)) / (4*h**2)
    fx  = (f(x+h,y) - f(x-h,y)) / (2*h)
    fy  = (f(x,y+h) - f(x,y-h)) / (2*h)
    E, F, G = 1+fx**2, fx*fy, 1+fy**2
    L, M, N = fxx, fxy, fyy
    return (L*N - M**2) / (E*G - F**2)
```

## Connection to Physics

The deepest application of non-Euclidean geometry is **[[general-relativity|general relativity]]** (Einstein, 1915), in which spacetime is a 4-dimensional pseudo-Riemannian [[manifold-learning|manifold]] whose curvature is determined by mass-energy:

$$G_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}$$

Geodesics in curved spacetime are the trajectories of freely falling bodies. Riemannian geometry — built precisely to handle the intrinsic curvature described by Gauss's *Theorema Egregium* — turned out to be the natural language of gravity. Without the work of Riemann, [[gravitational-waves-gr|gravitational waves]] and the [[asymptotic-spacetime|asymptotic structure of spacetime]] would have no formalism.

The conformal compactifications underlying [[bms-group|the BMS group]] and [[celestial-holography|celestial holography]] also live in non-Euclidean territory: the celestial sphere at null infinity is a Riemann sphere with its own conformal geometry.

## Related Articles

- [[general-relativity]] — the physical theory built on Riemannian geometry
- [[gravitational-waves-gr]] — propagating curvature of spacetime
- [[godel-incompleteness|Gödel's Incompleteness Theorems]] — axiomatic independence
- [[banach-tarski|Banach-Tarski Paradox]] — geometry and the Axiom of Choice
- [[asymptotic-spacetime]] — conformal completion at null infinity
