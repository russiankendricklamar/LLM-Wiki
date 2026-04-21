---
title: "Microlocal Analysis"
category: "Advanced Analysis"
order: 4
lang: "en"
slug: "microlocal-analysis"
---

# Microlocal Analysis

Microlocal analysis is a powerful branch of analysis that studies functions and operators not just in physical space, but in **phase space** (position and frequency simultaneously). It generalizes the Fourier transform to allow for the study of singularities of functions with extreme precision.

## The Wave Front Set ($WF$)

The central concept of microlocal analysis is the **Wave Front Set**. 
- In standard analysis, we know *where* a function is singular (not smooth).
- In microlocal analysis, the Wave Front Set tells us **where** the singularity is AND in **which direction** (frequency) it is oscillating or blowing up.

If $u$ is a distribution, $WF(u)$ is a subset of the **cotangent bundle** $T^*M$. This directional information allows us to track how singularities propagate through differential equations.

## Pseudodifferential Operators ($\Psi$DO)

Microlocal analysis replaced standard differential operators with **Pseudodifferential Operators**. 
A $\Psi$DO $P$ is defined via its **symbol** $p(x, \xi)$:
$$Pu(x) = \int e^{ix\xi} p(x, \xi) \hat{u}(\xi) d\xi$$
- If $p(x, \xi)$ is a polynomial in $\xi$, $P$ is a normal differential operator.
- If $p(x, \xi)$ is a more general function, $P$ can represent fractional derivatives, inverses of operators, or complex filters.

## Propagation of Singularities

A major theorem by **Hörmander** states that for a broad class of operators, singularities of the solution "flow" along the **Hamiltonian trajectories** associated with the operator's principal symbol. This creates a deep link between linear PDEs and classical Hamiltonian mechanics.

## Why It Matters

1.  **Inverse Problems**: Used in seismic imaging and medical tomography to reconstruct internal structures from boundary measurements.
2.  **Quantum Chaos**: Studying the behavior of high-frequency wave functions in complex domains.
3.  **AI Interpretability**: Some emerging theories use microlocal analysis to study how neural networks learn "edges" and "textures" by analyzing the wave front sets of the learned feature maps.

## Visualization: Singularity Propagation

```chart
{
  "type": "line",
  "xAxis": "x",
  "data": [
    {"x": -2, "source": 0.0, "propagated": 0.0},
    {"x": -1, "source": 1.0, "propagated": 0.1},
    {"x": 0,  "source": 0.0, "propagated": 0.5},
    {"x": 1,  "source": 0.0, "propagated": 1.0},
    {"x": 2,  "source": 0.0, "propagated": 0.1}
  ],
  "lines": [
    {"dataKey": "source", "stroke": "#ef4444", "name": "Initial Impulse"},
    {"dataKey": "propagated", "stroke": "#3b82f6", "name": "Wave Front Movement"}
  ]
}
```
*Standard analysis sees the spike (red). Microlocal analysis tracks the energy and direction of the spike as it moves through the medium (blue), allowing us to predict where the "sharp edge" will be at a future time.*

## Related Topics

[[schwartz-distributions]] — the language of singularities  
[[symplectic-geometry]] — the geometry of phase space  
[[fourier-analysis]] — the global tool that microlocal analysis localizes
---
