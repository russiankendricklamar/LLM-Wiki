---
title: 'Riemannian Geometry: Metric and Curvature'
category: Advanced Math and Stats
order: 170
lang: en
slug: riemannian-geometry
---

Riemannian geometry studies smooth manifolds equipped with a Riemannian metric, an inner product on the tangent space varying smoothly from point to point.

### Metric Tensor
The metric tensor $g_{\mu\nu}$ allows measurement of distances and angles:
$ds^2 = g_{\mu\nu} dx^\mu dx^\nu$
The Levi-Civita connection is the unique affine connection that is torsion-free and metric-compatible. Its connection coefficients are the Christoffel symbols:
$\Gamma^\lambda_{\mu\nu} = \frac{1}{2} g^{\lambda\rho} \left( \partial_\mu g_{\nu\rho} + \partial_\nu g_{\rho\mu} - \partial_\rho g_{\mu\nu} \right)$

### Curvature
The Riemann curvature tensor measures the failure of the manifold to be locally Euclidean (or how vectors change when parallel-transported around a loop):
$R^\rho_{\sigma\mu\nu} = \partial_\mu \Gamma^\rho_{\nu\sigma} - \partial_\nu \Gamma^\rho_{\mu\sigma} + \Gamma^\rho_{\mu\lambda}\Gamma^\lambda_{\nu\sigma} - \Gamma^\rho_{\nu\lambda}\Gamma^\lambda_{\mu\sigma}$
Contracting this yields the Ricci tensor $R_{\mu\nu} = R^\lambda_{\mu\lambda\nu}$, central to General Relativity.
