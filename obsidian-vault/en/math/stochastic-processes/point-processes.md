---
title: "Point Processes"
category: "Stochastic Processes"
order: 23
lang: "en"
slug: "/math/point-processes"
growth: "seedling"
---

# Point Processes

A **point process** is a random locally finite measure on a measurable space, naturally arising as a distribution of discrete events in time and space. Formally, a point process $N$ on a locally compact Polish space $(E, \mathcal{E})$ is a random measure representable as:

$$N = \sum_{i=1}^{\infty} \delta_{X_i}$$

where $\delta_x$ denotes the Dirac measure at $x \in E$, and $(X_i)$ are random points. Locally finiteness means $N(K) < \infty$ almost surely for every compact $K \subseteq E$. The measure $N$ is characterized by its **counting function**: for measurable sets $A$, the count $N(A) \in \mathbb{N} \cup \{\infty\}$ records the number of points in $A$. This duality between points and measures unifies discrete events with continuous-space analysis.

## The Poisson Process as Canonical Reference

The **Poisson point process** is the fundamental example, serving as the baseline for all others. It is characterized by:

1. **Independent increments**: For disjoint sets $A_1, \ldots, A_n$, the counts $N(A_1), \ldots, N(A_n)$ are independent random variables.
2. **Poisson marginals**: $N(A) \sim \text{Poisson}(\Lambda(A))$ for a measure $\Lambda$, called the **intensity measure**.
3. **Void probabilities**: $\mathbb{P}(N(A) = 0) = e^{-\Lambda(A)}$.

When $\Lambda$ is absolutely continuous with density $\lambda: E \to \mathbb{R}_{\geq 0}$, called the **intensity function**, the process is called a **Poisson process with intensity** $\lambda$. In one dimension with constant $\lambda(t) = \lambda > 0$, arrivals form a Poisson process in continuous time—a cornerstone of queueing theory.

## Campbell's Theorem and Moment Measures

A fundamental identity relates functionals of point processes to the intensity measure. **Campbell's theorem** states: for a measurable function $f: E \to \mathbb{R}$ with $\int |f| \, d\Lambda < \infty$,

$$\mathbb{E}\left[\sum_{i} f(X_i)\right] = \int_E f(x) \, \Lambda(dx).$$

This extends naturally to higher moments. The **moment measure** of order $k$ is defined via:

$$\mathbb{E}[N(dx_1) \, \cdots \, N(dx_k)] = \Lambda^{(k)}(dx_1, \ldots, dx_k),$$

where $\Lambda^{(1)} = \Lambda$ and higher-order measures encode second-order and higher correlations. For Poisson processes, $\Lambda^{(k)} = \Lambda^{\otimes k}$ (complete independence), making Poisson processes maximally "random."

## Palm Distributions and Conditioning

A subtle but powerful concept: given that a point exists at location $x$, what is the conditional distribution of the rest of the process? The **Palm distribution** $P^x$ answers this rigorously. It is defined implicitly via:

$$\mathbb{E}\left[\sum_i f(X_i, \omega)\right] = \int_E \mathbb{E}^x\left[f(x, \omega)\right] \Lambda(dx),$$

where $\mathbb{E}^x$ denotes expectation under $P^x$. Palm distributions are indispensable for analyzing **cluster structure** and for understanding conditional dependence in point patterns.

## Cox Processes (Doubly Stochastic Poisson)

A **Cox process** (or doubly stochastic Poisson process) arises when the intensity measure $\Lambda$ itself is random. More precisely, conditional on a random measure $\tilde{\Lambda}$, the process is Poisson with intensity $\tilde{\Lambda}$:

$$\mathbb{P}(N \in \cdot \mid \tilde{\Lambda}) = \text{PoissonPointProcess}(\tilde{\Lambda}).$$

Cox processes model **modulated heterogeneity**: if $\tilde{\Lambda}(dx) = \lambda(x, \Theta) \, dx$ where $\Theta$ is random (e.g., a random field), the process exhibits clustering and non-Poisson variance. They appear naturally in [[cox-process]] models, spatial ecology, and disease mapping.

## Hawkes Processes: Self-Exciting Dynamics

A **Hawkes process** is a point process with positive feedback: arrival of a point increases the instantaneous intensity, creating clustering. The intensity at time $t$ is:

$$\lambda(t) = \mu + \int_0^t h(t - s) \, dN(s),$$

where $\mu > 0$ is the **baseline intensity** and $h: \mathbb{R}_{\geq 0} \to \mathbb{R}_{\geq 0}$ is the **kernel** or **excitation function**. If $\int_0^{\infty} h(u) \, du < 1$, the process is **stationary and ergodic**. Hawkes processes model earthquakes (main shocks trigger aftershocks), order flow in finance, and neural spike trains.

## Janossy Densities and Papangelou Intensity

For finite point patterns (bounded domain), the **Janossy density** $j_n$ describes the joint density of $n$ points:

$$\mathbb{P}(N = n, (X_1, \ldots, X_n) \in dA) = j_n(x_1, \ldots, x_n) \, dx_1 \cdots dx_n.$$

The **Papangelou conditional intensity** (or **conditional intensity function**) is defined as:

$$\lambda_P(x \mid \mathcal{H}_x) = \lim_{\epsilon \to 0} \frac{\mathbb{P}(N(dx) > 0 \mid \mathcal{H}_x)}{|dx|},$$

where $\mathcal{H}_x$ is the history (configuration of points outside a neighborhood of $x$). For Poisson processes, $\lambda_P$ equals $\lambda(x)$ (no dependence on history); for Hawkes, it depends on past arrivals.

## Superposition and Thinning Theorems

**Superposition**: If $N_1, N_2$ are independent point processes with intensities $\Lambda_1, \Lambda_2$, their superposition $N = N_1 + N_2$ has intensity $\Lambda = \Lambda_1 + \Lambda_2$. If both are Poisson, so is the superposition.

**Thinning**: If each point of $N$ is deleted independently with probability $1 - p(x)$ (dependent on location), the thinned process $\tilde{N}$ has intensity $\tilde{\Lambda}(A) = \int_A p(x) \, \Lambda(dx)$. For Poisson input, the thinned process remains Poisson with reduced intensity.

## Applications

- **Queueing theory**: Customer arrivals and departures modeled as Poisson or Hawkes processes; see [[renewal-theory]].
- **Neuroscience**: Neural spike trains exhibit self-excitation captured by Hawkes models.
- **Spatial statistics**: Point patterns in ecology and seismology analyzed via Cox and cluster processes.
- **Finance**: Order flow, high-frequency trading, and price impacts modeled as self-exciting point processes.

## References

Point processes form a mature field; the classical reference is **Daley & Vere-Jones** (2003). Modern applications benefit from [[branching-processes]] (trees of ancestors) and connections to [[levy-ito-decomposition]]. Advanced theory leverages [[kolmogorov-equations-ctmc]] for intensity-driven dynamics.
