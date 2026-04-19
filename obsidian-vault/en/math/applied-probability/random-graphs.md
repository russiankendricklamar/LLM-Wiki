---
title: "Random Graphs"
category: "Applied Probability"
order: 21
lang: "en"
slug: "/math/random-graphs"
growth: "seedling"
---

# Random Graphs

Random graph theory provides a probabilistic framework for understanding the structural properties of networks with billions of edges. The Erdős–Rényi model, introduced in the 1950s, remains the foundational model for studying phase transitions, connectivity, and component structure in sparse networks. Modern applications span biological networks, the World Wide Web, social networks, and statistical physics.

## The Erdős–Rényi Models

There are two equivalent formulations. The $G(n,p)$ model constructs a random graph on $n$ labeled vertices by independently including each edge with probability $p$. The $G(n,m)$ model uniformly samples a graph with exactly $m$ edges from all $\binom{n}{2}$ possible edges. For $m = p \binom{n}{2}$, these models are asymptotically equivalent when $m = \Theta(n)$.

The typical edge probability regime of interest is sparse: $p = c/n$ for fixed $c > 0$. When $p$ is constant, the expected degree $\mathbb{E}[D_v] = (n-1)p \approx np \to \infty$, leading to trivial connectivity; sparse asymptotics are essential for rich structural behavior.

## Threshold Phenomena and the Phase Transition

A fundamental result in random graph theory is the **threshold phenomenon**: there exists a critical value $p^* = 1/n$ such that the graph transitions from having all components of size $O(\log n)$ to containing a giant component of size $\Theta(n)$.

More precisely, if $p = (1 + \varepsilon)/n$ with $\varepsilon > 0$ fixed, then with high probability (w.h.p.), the graph contains a unique connected component of size $\Theta(n)$, while all other components have size $O(\log n)$. The size of this giant component is approximately $2n\varepsilon + o(n)$. Conversely, if $p = (1 - \varepsilon)/n$, all components have size $O(\log n)$ w.h.p.

This transition is explained by branching process theory. The neighborhood exploration starting from any vertex approximately follows a Galton-Watson process with offspring distribution $\text{Poisson}(np)$. When $np < 1$, the branching process dies out w.h.p., producing components of logarithmic size. When $np > 1$, the branching process survives w.h.p., giving rise to a linear-sized component. See [[branching-processes]] for detailed analysis.

## Subcritical and Supercritical Regimes

**Subcritical regime** ($p = c/n$ with $c < 1$): All connected components have size $O(\log n)$. The number of vertices in components of size $k$ is approximately Poisson with mean $\lambda_k = c^k / k$. The [[branching-processes|branching process]] viewpoint shows that component sizes follow a size-biased Poisson distribution. The average component size is finite and well-characterized.

**Supercritical regime** ($p = c/n$ with $c > 1$): A unique giant component of size $\beta(c) \cdot n$ emerges, where $\beta(c)$ is the survival probability of the Galton-Watson branching process with mean $c$. The other components remain small: $O(\log n)$ in expectation. The function $\beta(c)$ satisfies $\beta(c) = 1 - e^{-c\beta(c)}$, which can be derived from branching process extinction probabilities.

**Critical window** ($p = (1 + \varepsilon)/n$ with fixed $\varepsilon$, or $p = 1/n + \lambda n^{-4/3}$ for fine structure): The transition is not abrupt but spread over a range. The scaling window has width $n^{-1/3}$, and within this window, the rescaled component sizes converge to random variables related to Brownian motion and stable processes. This critical phenomena analysis uses [[large-deviations-cramer|large deviations]] and refined saddle-point methods.

## Threshold Methods: First and Second Moment

Proving threshold results relies on moment methods. The **first moment method** (Markov inequality) shows: if $\mathbb{E}[X] \to 0$, then $X = 0$ w.h.p. For example, the expected number of isolated vertices when $p = \omega(\log n) / n$ is $\mathbb{E}[\text{# isolated}] = n(1-p)^{n-1} \approx ne^{-np} \to 0$, implying no isolated vertices w.h.p.

The **second moment method** is more powerful. If $\text{Var}(X) = o(\mathbb{E}[X]^2)$, then $X > 0$ w.h.p. by Chebyshev's inequality. This is formalized via [[concentration-inequalities|concentration inequalities]]: for instance, proving the giant component threshold uses second moment bounds on the number of vertices reachable within distance 2 from a seed vertex.

## Connectivity and Percolation Thresholds

Graph connectivity—the threshold $p_c$ such that $G(n,p)$ is connected w.h.p. when $p > p_c$—occurs at $p = \frac{\log n + \log \log n}{n}$. Below this, isolated vertices exist w.h.p.; above it, the graph becomes connected w.h.p.

More generally, consider the $k$-vertex connectivity threshold: the minimum $p$ such that w.h.p., removing any $k-1$ vertices leaves a connected graph. This threshold is $p = \frac{\log n + (k-1) \log \log n}{n}$, generalizing the connectivity result.

These thresholds are closely related to [[poisson-approximation|Poisson approximation]]: the number of isolated vertices is approximately Poisson when $p$ is near the critical window, making Poisson-based analysis precise.

## Degree Distribution and Chromatic Number

In the regime $p = c/n$, the degree distribution of any fixed vertex converges to $\text{Poisson}(c)$ as $n \to \infty$. More globally, the empirical degree distribution converges to Poisson: the number of vertices of degree $k$ is approximately $n \cdot e^{-c} c^k / k!$.

The chromatic number—minimum colors needed to color vertices such that adjacent vertices have different colors—exhibits phase transition. For $p = c/n$ with small constant $c$, the chromatic number is $\Theta(\log n / \log \log n)$ w.h.p. This follows from the presence of a balanced partition into independent sets via probabilistic methods.

## Random Regular Graphs and Local Limits

A **random $d$-regular graph** is uniformly sampled from all $d$-regular graphs on $n$ vertices. These are sparser than $G(n, d/n)$ due to the regularity constraint but share similar properties in the limit. The configuration model is a standard construction: create $nd$ half-edges, randomly pair them into edges, and ignore the small fraction of self-loops and multi-edges. As $n \to \infty$ with $d$ fixed, the local neighborhood of any vertex converges to an infinite $d$-regular tree (the **local limit**), allowing use of [[branching-processes|branching process]] theory.

## Stochastic Block Model and Community Detection

The **Stochastic Block Model** (SBM) extends $G(n,p)$ to incorporate community structure. Partition vertices into $k$ communities; edge probability is $p$ within communities and $q$ between them. This model exhibits a detectability threshold: when the community signal is weak ($p \approx q$), no algorithm can distinguish the block structure from pure randomness; when the signal exceeds this threshold, efficient algorithms exist.

The signal-to-noise ratio controlling detectability is related to the second eigenvalue of the expected adjacency matrix. The [[poisson-approximation|Poisson approximation]] to the SBM's spectrum reveals that detection is possible if and only if the Kullback–Leibler divergence between the block model and its null model exceeds a critical value.

## Applications

Random graph theory underpins network science: modeling disease spread (percolation on networks), robustness of infrastructure networks to failures, and emergence of global properties from local randomness. In statistical physics, random graphs serve as null models for analyzing real-world networks via [[de-finetti-exchangeability|exchangeability]] and [[central-limit-theorem|limit theorems]]. The theory also grounds modern machine learning on graphs, providing intuition for why random initialization is effective.

---

**Further reading**: Bollobás, *Random Graphs* (2ed, 2001); Frieze & Karoński, *Introduction to Random Graphs* (2016); Garland & Newman, stochastic block models in statistical physics.
