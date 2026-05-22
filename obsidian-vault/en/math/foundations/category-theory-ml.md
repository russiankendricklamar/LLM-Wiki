---
title: "Category Theory for Machine Learning"
category: "Math Foundations"
order: 104
lang: "en"
slug: "category-theory-ml"
---

# Category Theory for Machine Learning

## What Is It

Category Theory provides a high-level, compositional framework for understanding the structural foundations of machine learning. Rather than focusing on specific architectures, the categorical approach views learning systems as morphisms in specialized categories. This perspective enables the rigorous definition of complex architectures (like neural networks) as compositions of simpler, independent components, and formalizes the process of backpropagation through **lenses** and **optics**.

## Learning as a Morphism

A learner can be modeled as a morphism in a category $\text{Learn}$. A morphism $L: A \to B$ consists of:
1. A parameter space $P$.
2. An implementation function $I: P \times A \to B$.
3. An update function $U: P \times A \times B^* \to P$ (where $B^*$ is the space of gradients/errors).
4. A request function $R: P \times A \times B^* \to A^*$.

This structure captures how a model produces an output, updates its internal parameters, and propagates the error back to its inputs.

## Lenses and Backpropagation

The fundamental mechanism of gradient-based learning is mathematically equivalent to a **Lens**. In the category of sets, a lens $L: X \rightleftarrows Y$ consists of:
- A forward map $f: X \to Y$ (the "get" or forward pass).
- A backward map $b: X \times Y^* \to X^*$ (the "put" or backward pass).

Lenses compose naturally: if $L_1: X \to Y$ and $L_2: Y \to Z$, their composition $L_2 \circ L_1$ has the forward pass $f_2 \circ f_1$ and a backward pass that implements the **chain rule**. This makes the entire architecture of a neural network a single morphism in a category of lenses.

## The Para Construction

To handle parameters explicitly, we use the **Para** construction. Given a symmetric monoidal category $\mathcal{C}$, $\text{Para}(\mathcal{C})$ is a category where:
- Objects are the same as in $\mathcal{C}$.
- A morphism $f: A \to B$ is a pair $(P, \hat{f})$ where $P$ is an object (parameter space) and $\hat{f}: P \otimes A \to B$ is a morphism in $\mathcal{C}$.

Composition in $\text{Para}(\mathcal{C})$ involves tensor products of parameter spaces, reflecting how the parameters of sub-networks combine.

## Categorical Cybernetics

Modern ML is increasingly viewed through the lens of **Categorical Cybernetics**, which models systems that interact with an environment and adapt. This framework unifies supervised learning, reinforcement learning, and game theory under the umbrella of **Open Games** and **Optics**.

## DERIVATION: Backpropagation as Lens Composition

Let $L_1 = (f_1, b_1)$ and $L_2 = (f_2, b_2)$ be two lenses representing layers.
The composition $L = L_2 \circ L_1 = (f, b)$ is defined as:
1. **Forward:** $f(x) = f_2(f_1(x))$.
2. **Backward:** $b(x, \Delta z) = b_1(x, b_2(f_1(x), \Delta z))$.

In the context of differentiable manifolds, $f$ is the function and $b$ is the pullback of the differential. If $f$ is a layer $y = \sigma(Wx)$, then:
$\Delta x = b(x, \Delta y) = \left(\frac{\partial f}{\partial x}\right)^T \Delta y$.
The composition law exactly recovers the backpropagation algorithm:
$$\frac{\partial(f_2 \circ f_1)}{\partial x} = \frac{\partial f_2}{\partial y} \cdot \frac{\partial f_1}{\partial x}$$

## Related Topics
[[automatic-differentiation|Automatic Differentiation]] — the algorithmic implementation  
[[topos-theory|Topos Theory]] — for logical foundations  
[[type-theory|Type Theory]] — the computer science dual  
[[manifold-learning|Manifold Learning]] — the geometric side  
[[compositionality|Compositionality]] — the core philosophical goal
