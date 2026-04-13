---
title: Conformal Field Theory (CFT)
category: Theoretical Physics
lang: en
order: 220
slug: conformal-field-theory
---

# Conformal Field Theory (CFT)

## Overview
Conformal Field Theory (CFT) is a quantum field theory that is invariant under conformal transformations—mappings that preserve angles locally. In 2D, the conformal group is infinite-dimensional, leading to powerful constraints on the theory's dynamics. CFTs are essential in describing critical phenomena, string theory, and the [[celestial-holography]] program.

## Conformal Symmetry and Virasoro Algebra
The generators of local conformal transformations in 2D, $L_n$ and $\bar{L}_n$, satisfy the Virasoro algebra:
$$ [L_m, L_n] = (m-n)L_{m+n} + \frac{c}{12}m(m^2-1)\delta_{m+n,0} $$
where $c$ is the **central charge**, representing the quantum anomaly of the conformal symmetry.

## Operator Product Expansion (OPE)
In a CFT, the product of two local operators can be expanded as a sum of local operators:
$$ \mathcal{O}_i(z, \bar{z}) \mathcal{O}_j(0,0) = \sum_k C_{ijk} z^{\Delta_k - \Delta_i - \Delta_j} \bar{z}^{\bar{\Delta}_k - \bar{\Delta}_i - \bar{\Delta}_j} \mathcal{O}_k(0,0) $$
This OPE structure allows for the non-perturbative calculation of correlation functions.

## Applications
* **Statistical Mechanics:** Describes the fixed points of the Renormalization Group (RG) flow and critical exponents.
* **String Theory:** The worldsheet of a string is described by a 2D CFT.
* **Holography:** The AdS/CFT correspondence and the more recent [[celestial-holography]] utilize the symmetries of CFT to describe gravity in higher dimensions.

## See Also
* [[celestial-holography]]
* [[bms-group]]
* [[schrodinger-equation]]
