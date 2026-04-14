---
title: "Kolmogorov-Arnold Theorem"
category: "Physics"
order: 1
lang: "en"
slug: "kolmogorov-arnold-theorem"
---

# Kolmogorov-Arnold Theorem

## Visualization

```chart
{
  "type": "line",
  "xAxis": "n",
  "data": [
    {"n": 1, "ka_nodes": 3, "mlp_neurons": 10, "curse": 2},
    {"n": 2, "ka_nodes": 5, "mlp_neurons": 30, "curse": 4},
    {"n": 3, "ka_nodes": 7, "mlp_neurons": 80, "curse": 8},
    {"n": 4, "ka_nodes": 9, "mlp_neurons": 180, "curse": 16},
    {"n": 5, "ka_nodes": 11, "mlp_neurons": 350, "curse": 32},
    {"n": 6, "ka_nodes": 13, "mlp_neurons": 600, "curse": 64},
    {"n": 7, "ka_nodes": 15, "mlp_neurons": 950, "curse": 128},
    {"n": 8, "ka_nodes": 17, "mlp_neurons": 1400, "curse": 256}
  ],
  "lines": [
    {"dataKey": "ka_nodes", "stroke": "#10b981", "name": "KA inner nodes (2n+1)"},
    {"dataKey": "curse", "stroke": "#ef4444", "name": "Curse of dimensionality (2ⁿ)"}
  ]
}
```

The **Kolmogorov-Arnold theorem** (1957) is a foundational result in function theory: every continuous function of several variables can be written as a finite superposition of functions of one variable. The theorem gave an unexpected resolution to Hilbert's thirteenth problem and reshaped our view of which computational operations are "fundamental". In the 21st century it has been revived as the theoretical backbone of [[kan|Kolmogorov-Arnold Networks]] in machine learning.

## Hilbert's thirteenth problem

In 1900 David Hilbert posed a list of 23 problems that would define mathematical progress for the century. The thirteenth concerned the solution of degree-seven polynomial equations and can be phrased: are there continuous functions of three variables that cannot be represented as a superposition of continuous functions of two variables?

Hilbert was thinking about high-degree algebraic equations and leaned toward a negative answer: more complicated multivariate functions, intuitively, should not reduce to simpler ones. The question remained open for over half a century.

## Statement

**Theorem (Kolmogorov, 1957; Arnold, 1957).** Every continuous function $f: [0,1]^n \to \mathbb{R}$ admits a representation

$$
f(x_1, \ldots, x_n) = \sum_{q=0}^{2n} \Phi_q\!\left(\sum_{p=1}^{n} \varphi_{q,p}(x_p)\right),
$$

where $\Phi_q: \mathbb{R} \to \mathbb{R}$ and $\varphi_{q,p}: [0,1] \to \mathbb{R}$ are continuous functions of one variable. Moreover, the $\varphi_{q,p}$ can be chosen **independently of $f$** — they are universal.

**Interpretation.** Any multivariate continuity is merely a suitable sum of univariate ones. There are two layers: an inner layer that transforms each coordinate through universal "basis" functions $\varphi_{q,p}$, and an outer layer that glues the results together through $\Phi_q$, which depends on $f$. The total number of inner nodes is $2n+1$.

This gave a **negative answer to Hilbert's thirteenth problem**: any continuous multivariate function reduces to univariate ones.

## History and original proof

Kolmogorov first showed in 1956 that $n$ "active" variables suffice in the form of non-monotonic functions. His student Arnold simplified this in 1957 to the form with $2n+1$ nodes and universal inner functions, giving the final version of the theorem.

The proof constructs Cantor-like continuous functions: the inner $\varphi_{q,p}$ are cleverly designed continuous but nowhere-differentiable functions that "split" the domain into a dense set of disjoint curves. On each curve, the outer function is defined by the values of $f$.

The classical inner functions are **not smooth**. Smooth versions for narrower classes of $f$ were later constructed (Lorentz 1966, Sprecher 1965, Hedberg 1971).

## Relation to approximation theory

The Kolmogorov-Arnold theorem gives **exact representation** but does not provide a constructive algorithm for building the inner functions for a given $f$. It states that dimensionality is not a fundamental obstacle — contrary to intuition, multivariate functions are not inherently "harder" than univariate ones under superposition.

This contrasts with the **curse of dimensionality** in statistics and numerical analysis: for smooth (as opposed to merely continuous) functions, the number of parameters needed to approximate them to accuracy $\epsilon$ grows exponentially in dimension. The KA theorem shows that if we relax the smoothness requirement on inner functions, the curse can be avoided.

## Implications for neural networks

In 1989 Cybenko and Hornik proved the **universal approximation theorem**: a two-layer perceptron with sufficiently many neurons can approximate any continuous function. For many years this was considered the strongest neural-network analogue of the KA theorem.

The relationship is subtle: universal approximation guarantees approximation but requires **a number of neurons that grows with accuracy**. The KA theorem gives **exact representation** with a fixed number of inner nodes ($2n+1$), but shifts the complexity to the choice of univariate functions.

Liu et al. (2024) used this idea to build [[kan|Kolmogorov-Arnold Networks (KANs)]]: instead of fixed activations at nodes (as in MLPs), they place **learnable univariate functions on edges**, parametrised by B-splines. The architecture directly instantiates the representation structure of the KA theorem.

## Why it matters

- **Decomposition of complexity.** Any continuous multivariate dependence decomposes into univariate ones, giving an alternative to standard MLP architectures.
- **Interpretability.** After training, the univariate functions can be visualised and compared to known mathematical expressions ($\sin$, $\exp$, polynomials).
- **Symbolic regression.** Decomposing into univariate components makes automated formula discovery more meaningful.
- **Physical applications.** Many physical laws have the form of compositions of univariate dependencies — conservation laws, equations of state, functional relations. The KA representation finds them naturally.

## Limitations

**Non-smoothness of inner functions.** The classical proof yields $\varphi_{q,p}$ that are fractal and nowhere differentiable. For numerical methods this is a problem.

**Non-constructive.** There is no general algorithm to build $\Phi_q, \varphi_{q,p}$ for a given $f$ with proven convergence guarantees.

**Parametrisation trade-off.** In real KANs the smooth approximations ($\varphi$ as B-splines) do not coincide with the original proof; deep KANs are a heuristic extension.

## Related Topics

- [[kan]] — direct instantiation of the theorem as a neural architecture
- [[learnable-activations]] — learnable activation functions as an applied realisation
- [[partial-differential-equations]] — many PDEs are solved by decomposition into one-variable functions
- [[spectral-analysis]] — a related approach with a fixed instead of learnable basis
- [[pinns]] — alternative architecture for PDE solving
