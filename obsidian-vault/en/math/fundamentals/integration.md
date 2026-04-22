---
title: "Integration and the Fundamental Theorem"
category: "Fundamentals"
order: 14
lang: "en"
slug: "calculus-integration"
---

# Integration and the Fundamental Theorem of Calculus

**Integration** is the mathematical process of accumulation. While differentiation breaks a function down into tiny pieces to find its slope, integration sums those tiny pieces back together to find the total "content"—whether that be area, volume, or probability.

## 1. The Definite Integral (Riemann Sum)

The integral of a function $f(x)$ from $a$ to $b$ is defined as the limit of a sum of tiny rectangles (Riemann Sum):
$$ \int_{a}^{b} f(x) \, dx = \lim_{\Delta x \to 0} \sum_{i=1}^n f(x_i) \Delta x $$
- **Intuition**: We are adding up an infinite number of infinitely thin slices.

## 2. The Fundamental Theorem of Calculus (FTC)

This is the most important bridge in mathematics. It connects the two main branches of calculus:
1.  **Part 1**: The derivative of an integral is the original function.
    $$ \frac{d}{dx} \int_{a}^{x} f(t) \, dt = f(x) $$
2.  **Part 2**: The integral can be calculated using the **Antiderivative** $F(x)$ (where $F' = f$):
    $$ \int_{a}^{b} f(x) \, dx = F(b) - F(a) $$
This theorem allows us to calculate areas without doing infinite sums, simply by finding the "reverse" of a derivative.

## 3. Techniques of Integration

- **Substitution (u-substitution)**: The reverse of the Chain Rule. Used to simplify an integral by changing variables.
- **Integration by Parts**: The reverse of the Product Rule:
  $$ \int u \, dv = uv - \int v \, du $$
  Essential for solving equations in quantum mechanics and finance.

## 4. Why it Matters in Science

### A. Probability and AI
A **Probability Density Function (PDF)** tells us the likelihood of a value. To find the probability that a variable falls in a range $[a, b]$, we must integrate the PDF:
$$ P(a \leq X \leq b) = \int_{a}^{b} p(x) \, dx $$
This is why Gaussians and normal distributions involve complex integrals.

### B. Physics: Work and Energy
Work is the integral of Force over Distance: $W = \int F \, ds$. Integration allows us to calculate the energy required to launch a satellite or the path of a planet.

### C. Finance: Risk Accumulation
In quantitative finance, the price of an option is often expressed as the integral of expected payoffs weighted by their risk-neutral probabilities.

## 5. Beyond Riemann: Lebesgue Integration

In 1st-year calculus, we use Riemann integration (summing vertical slices). In advanced PhD-level math ([[measure-theory|Measure Theory]]), we use **Lebesgue Integration** (summing horizontal slices). Lebesgue integration is more robust and can handle functions that are too "wiggly" or disconnected for Riemann's method, providing the rigorous foundation for modern probability.

## Visualization: Accumulation

```mermaid
graph LR
    P[Tiny Slices: dx] -->|Summation| Area[Total Integral]
    Area -->|FTC| Anti[Antiderivative F]
    Anti -->|Derivative| Original[Original Function f]
    
    style Area fill:#3b82f6,color:#fff
```

## Related Topics

[[taylor-series]] — integration of power series  
[[measure-theory]] — the advanced view of integration  
[[stochastic-calculus]] — integrating over random paths (Itô Integral)
---
