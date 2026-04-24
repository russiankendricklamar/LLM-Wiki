---
title: "Complex Analysis"
category: "Mathematical Foundations"
order: 11
lang: "en"
slug: "complex-analysis"
growth: "seedling"
---

Complex analysis is one of the richest domains in mathematics, studying functions of a complex variable and their differentiability. In stark contrast to real analysis, the requirement of complex differentiability is extraordinarily strong: a holomorphic function is automatically smooth, infinitely differentiable, expressible as a power series, and satisfies a host of remarkable properties. This subject forms the foundation of modern [[functional-analysis|functional analysis]], [[harmonic-analysis|harmonic analysis]], and maintains deep connections to [[differential-geometry|differential geometry]].

## Holomorphic Functions and the Cauchy–Riemann Equations

Let $f: \mathbb{C} \to \mathbb{C}$ be a complex-valued function. Write $z = x + iy$ and $f(z) = u(x,y) + iv(x,y)$, where $u$ and $v$ are real-valued functions of two real variables. The function $f$ is called **holomorphic** (or analytic) at a point $z_0$ if the limit

$$\lim_{h \to 0} \frac{f(z_0 + h) - f(z_0)}{h}$$

exists in $\mathbb{C}$. The key point: the approach $h \to 0$ occurs along all directions in the complex plane simultaneously.

This condition, which appears modest, nevertheless imposes stringent requirements on the partial derivatives of $u$ and $v$. If $f$ is differentiable in the complex sense, then the limits taken as $h = \Delta x$ (along the real axis) and $h = i\Delta y$ (along the imaginary axis) must coincide:

$$\frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$$

Equating real and imaginary parts yields the **Cauchy–Riemann equations**:

$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}.$$

The converse holds as well: if $u$ and $v$ possess continuous first-order partial derivatives and satisfy the Cauchy–Riemann equations, then $f = u + iv$ is holomorphic. Thus, holomorphicity represents an exceptionally specialized form of smoothness in two real variables.

The derivative of a holomorphic function is given by $f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$ and admits an alternative representation via the Cauchy–Riemann operator. Note that the requirement of holomorphicity is far stronger than mere real differentiability.

## The Cauchy Integral Theorem and Formula

One of the central statements in complex analysis is the **Cauchy integral theorem**. If $f$ is holomorphic in a simply connected region $D$, and $\gamma$ is a closed rectifiable contour in $D$, then

$$\oint_\gamma f(z) \, dz = 0.$$

This expresses a profound fact: the integral of a function depending solely on the complex variable (in the holomorphic sense) around a closed path vanishes.

From the integral theorem follows the **Cauchy integral formula**, one of the most fruitful formulas in mathematics:

$$f(z_0) = \frac{1}{2\pi i} \oint_\gamma \frac{f(z)}{z - z_0} dz,$$

where $z_0$ lies inside the contour $\gamma$, and $f$ is holomorphic in a neighborhood of $\gamma$ and its entire interior. This formula asserts that the value of a holomorphic function at any interior point is entirely determined by its values on the boundary contour. This remarkable property is unique to the complex plane.

A more general form yields all derivatives:

$$f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_\gamma \frac{f(z)}{(z - z_0)^{n+1}} dz.$$

Consequently, a holomorphic function is infinitely differentiable, and all its derivatives are expressible as integrals of the function on a boundary contour.

## Power Series and Analyticity

A holomorphic function admits an expansion in a power series. If $f$ is holomorphic in the disk $|z - z_0| < R$, then

$$f(z) = \sum_{n=0}^\infty a_n (z - z_0)^n,$$

where the coefficients $a_n = \frac{f^{(n)}(z_0)}{n!}$ are determined by the Cauchy integral formula. The radius of convergence of this series equals $R$—the distance from $z_0$ to the nearest singularity of $f$. The Hadamard formula for the radius of convergence is:

$$\frac{1}{R} = \limsup_{n \to \infty} \sqrt[n]{|a_n|}.$$

An important observation: a function is holomorphic in a region if and only if it is analytic (locally expandable as a power series). This identification of holomorphicity with analyticity is the defining characteristic of complex analysis, lacking an analog in real analysis.

## Singularities and Laurent Series

A holomorphic function may possess singularities—points where it is undefined or fails to be differentiable. The natural generalization of power series is the **Laurent series**:

$$f(z) = \sum_{n=-\infty}^\infty a_n (z - z_0)^n,$$

which converges in an annulus $r < |z - z_0| < R$ and allows representation of a function near an isolated singularity.

Isolated singularities at a point $z_0$ are classified as follows:

1. **Removable singularity**: all coefficients $a_n$ for $n < 0$ vanish. The function can be extended to a holomorphic function at $z_0$. Example: $\sin z / z$ has a removable singularity at $z = 0$.

2. **Pole of order $m$**: finitely many nonzero coefficients for negative powers, with $a_{-m} \neq 0$ but $a_n = 0$ for all $n < -m$. The function has the form $f(z) = \frac{P(z)}{(z-z_0)^m}$, where $P$ is holomorphic and $P(z_0) \neq 0$. The residue at the pole is the coefficient $a_{-1}$ in the Laurent expansion.

3. **Essential singularity**: infinitely many nonzero coefficients $a_n$ for $n < 0$. The behavior of the function near an essential singularity is chaotic. The **Casorati–Weierstrass theorem** states that in any neighborhood of an essential singularity, a holomorphic function assumes values dense in $\mathbb{C}$.

## The Residue Theorem

The **residue** of a function $f$ at an isolated singularity $z_k$ is defined as the coefficient $a_{-1}$ in the Laurent expansion:

$$\mathrm{Res}(f, z_k) = a_{-1} = \frac{1}{2\pi i} \oint_\gamma f(z) dz,$$

where the integral is taken around a small contour encircling $z_k$. The **Residue Theorem** generalizes this observation:

$$\oint_\gamma f(z) \, dz = 2\pi i \sum_{k=1}^n \mathrm{Res}(f, z_k),$$

where the sum is over all poles and essential singularities of $f$ inside the contour $\gamma$.

The residue at a pole of order $m$ is computed via:

$$\mathrm{Res}(f, z_k) = \frac{1}{(m-1)!} \lim_{z \to z_k} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_k)^m f(z) \right].$$

The Residue Theorem enables computation of real integrals of an enormous class. For instance, the integral $\int_{-\infty}^\infty \frac{dx}{1+x^2}$ can be evaluated by closing the contour in the upper half-plane and applying the Residue Theorem to $f(z) = \frac{1}{1+z^2}$ with a pole at $z = i$. This becomes a powerful tool in applied mathematics, physics, and engineering.

## Conformal Mappings

A function $f$ is called **conformal** at a point if it is holomorphic and $f'(z) \neq 0$. Geometrically, a conformal mapping preserves angles between curves. The classical example is **Möbius transformations**:

$$f(z) = \frac{az + b}{cz + d}, \quad ad - bc \neq 0.$$

These rational functions form a group under composition and possess triple transitivity: any three distinct points can be mapped to any other three distinct points by a unique Möbius transformation.

The **Riemann Mapping Theorem**—one of the fundamental results—states: for any simply connected domain $D \subset \mathbb{C}$ distinct from the entire plane, there exists a unique conformal mapping $f: D \to \mathbb{D}$ (where $\mathbb{D}$ is the unit disk), normalized by the conditions $f(z_0) = 0$ and $f'(z_0) > 0$ for a fixed point $z_0 \in D$. While the theorem guarantees existence, explicit determination of $f$ may be extraordinarily difficult.

## The Maximum Modulus Principle and Liouville's Theorem

The **Maximum Modulus Principle**: if $f$ is holomorphic in a region $D$ and continuous on its closure $\overline{D}$, then the maximum of $|f|$ is attained on the boundary $\partial D$, not at interior points (unless $f$ is constant).

From this follows **Liouville's Theorem**: if $f$ is entire (holomorphic on all of $\mathbb{C}$) and bounded, then $f$ is constant. The proof uses the Cauchy integral formula: the estimate $|f'(z)| \leq \frac{M}{R}$ for all radii $R$ implies $f'(z) = 0$, whence $f$ is constant.

This result has profound consequences, such as the Fundamental Theorem of Algebra: every polynomial of degree $n \geq 1$ has at least one root in $\mathbb{C}$.

## Analytic Continuation and Monodromy

If two holomorphic functions $f$ and $g$ coincide on an open subset of a region $D$, they coincide everywhere in $D$—this is the principle of **analytic continuation**. This means a holomorphic function is entirely determined by its values in a small neighborhood.

Analytic continuation studies how a locally defined holomorphic function can be extended along various paths in the complex plane. If there exists a point around which the function becomes multivalued after traversing a closed path (as with $\log z$ or $\sqrt{z}$), the phenomenon of **monodromy** arises. Points around which the function is multivalued are called branch points and require introduction of a Riemann surface for globalization.

The Riemann surface naturally connects complex analysis to [[topology-basics|topology]]: it explains why logarithms and roots behave as they do on the complex plane.

## Connection to Harmonic Functions and Partial Differential Equations

A holomorphic function $f = u + iv$ has the property that both $u$ and $v$ are harmonic: they satisfy the Laplace equation $\Delta u = 0$ and $\Delta v = 0$. This follows immediately from the Cauchy–Riemann equations: differentiating the first equation with respect to $x$ and the second with respect to $y$ yields

$$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0.$$

Conversely, for any harmonic function $u$, one can find a "conjugate" harmonic function $v$ such that $f = u + iv$ is holomorphic. This makes complex analysis a powerful instrument for studying [[harmonic-analysis|harmonic analysis]] and solving boundary value problems for the Laplace equation.

In the context of partial differential equations, holomorphic functions provide explicit solutions to Laplace's equation in two-dimensional domains, permitting conformal mapping techniques to transform boundary conditions.

Complex analysis remains a vibrant field of research, linked to [[functional-analysis|functional analysis]], [[fourier-transform|Fourier analysis]], and numerous branches of modern mathematics and theoretical physics.
