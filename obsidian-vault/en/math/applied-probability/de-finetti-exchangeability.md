---
title: "Exchangeability and de Finetti's Theorem"
category: "Applied Probability"
order: 10
lang: "en"
slug: "de-finetti-exchangeability"
growth: "seedling"
---

## Exchangeability

A sequence of random variables $(X_1, X_2, \ldots)$ is called **exchangeable** if its finite-dimensional distributions are invariant under permutations. Formally: for every $n$ and every permutation $\sigma$ of $\{1, \ldots, n\}$, we have

$$
(X_1, \ldots, X_n) \stackrel{d}{=} (X_{\sigma(1)}, \ldots, X_{\sigma(n)})
$$

Exchangeability is significantly weaker than independence and identical distribution (i.i.d.): every i.i.d. sequence is exchangeable, but not conversely. The crucial difference: exchangeability does not imply independence of coordinates. For example, $X_i = Z$ (all variables equal a single random variable) is exchangeable but coordinates are completely dependent.

Exchangeability expresses the absence of a privileged ordering: no permutation of indices changes the joint distribution. This is a natural condition when modelling data where the order of observations carries no information (e.g., classification, parameter estimation).

## de Finetti's Theorem (1931)

**de Finetti's theorem** provides a complete characterization of exchangeable sequences through mixtures of i.i.d. sequences. Let $(X_i)_{i=1}^{\infty}$ be an infinitely exchangeable sequence with values in a measurable space $(E, \mathcal{E})$.

**Statement:** There exists a random probability measure $\mu$ on $(E, \mathcal{E})$ such that conditioned on $\mu$, the variables $X_1, X_2, \ldots$ are independent and identically distributed according to $\mu$:

$$
X_1, X_2, \ldots \mid \mu \sim \text{i.i.d.}(\mu)
$$

Equivalently: there exists a probability measure $\pi$ (called the **mixing measure**) such that

$$
P(X_1 = x_1, \ldots, X_n = x_n) = \int_{\mathcal{M}} \mu(x_1) \cdots \mu(x_n) \, d\pi(\mu)
$$

where the integral is over the space of all measures.

**Binary case:** if $X_i \in \{0, 1\}$, then there exists a prior $\pi$ on $[0, 1]$ such that

$$
P(X_1 = 1, \ldots, X_k = 1, X_{k+1} = 0, \ldots, X_n = 0) = \int_0^1 p^k (1-p)^{n-k} \, d\pi(p)
$$

## Bayesian Interpretation

de Finetti's theorem establishes a fundamental correspondence between **exchangeability** and **Bayesian modelling**. If we observe an exchangeable sequence, there exists a hidden parameter $\mu$ (or $p$ in the binary case) about which we hold uncertainty, expressed by a prior $\pi$. The observations $X_i$ are conditionally independent given the parameter but unconditionally correlated.

This means that **every Bayesian model** (a choice of prior on the space of parameters) generates an exchangeable sequence of observations. Conversely, every exchangeable sequence admits a Bayesian representation via a prior on measures.

The posterior distribution of the parameter is given by Bayes' rule:

$$
\pi(\mu \mid X_1, \ldots, X_n) \propto \mu(X_1) \cdots \mu(X_n) \, \pi(\mu)
$$

As $n \to \infty$, the posterior concentrates on the true measure (under regularity conditions), expressing **Bayesian consistency**.

## Proof Sketch

The key tool is the **empirical measure**

$$
\hat{\mu}_n = \frac{1}{n} \sum_{i=1}^n \delta_{X_i}
$$

where $\delta_x$ is the point mass at $x$. Exchangeability ensures that $\hat{\mu}_n$ converges almost surely to a random limit $\mu$. This limit is precisely the mixing measure: conditioned on $\mu$, the variables $X_i$ are independent and distributed as $\mu$. The formal proof uses the strong [[law-of-large-numbers|law of large numbers]] along subsequences and compactness of the measure space.

## Finite Exchangeability

An important limitation: de Finetti's theorem requires **infinite** exchangeability. A finitely exchangeable sequence (exchangeable for some finite $n$) need not be a mixture of i.i.d. sequences. **Diaconis–Freedman theorem** provides approximate versions for finite sequences: a finitely exchangeable sequence is close (in variation distance) to a mixture of i.i.d. This distinction matters in practice when data is limited.

## Partial Exchangeability and Hierarchical Models

**Partial exchangeability** generalizes the concept: a sequence is exchangeable within groups but not necessarily across them. For example, $((X_{i,1}, X_{i,2}, \ldots))_{i=1}^{\infty}$ may be exchangeable within each row independently. This gives rise to **hierarchical Bayesian models**: each group has its own parameter $\mu_i$, and these parameters themselves follow a distribution $\pi$.

## Dirichlet Process and Nonparametric Bayesian Models

The **Dirichlet process** $P \sim \text{DP}(\alpha, H)$ is a nonparametric prior on distributions that generates exchangeable sequences of a special form. If $X_i \sim P$ i.i.d., then $(X_i)$ is automatically exchangeable. The Dirichlet process defines exchangeable partitions through the **Chinese Restaurant Process**: the probability that $X_i$ joins an existing cluster is proportional to the cluster size.

The **Pólya urn** generates exchangeable sequences explicitly: begin with an urn containing $b$ red and $w$ white balls. Draw a ball, return it together with $s$ balls of the same colour. The colours of successive draws form an exchangeable sequence, with the mixing measure being the limiting proportion of red balls.

The entire apparatus of [[bayesian-deep-learning|Bayesian nonparametric learning]] rests on de Finetti: a prior on measures plus exchangeable data yields posterior updating and predictions.

## Connections and Applications

- **Bayesian consistency:** exchangeability is equivalent to the existence of an informative prior; de Finetti justifies the Bayesian approach axiomatically.
- **Random partition theory:** exchangeable partitions connect to Kingman's paintbox process; this underpins nonparametric clustering models.
- **Markov chain Monte Carlo:** all [[mcmc|MCMC]] methods for Bayesian models implicitly work with posteriors of exchangeable sequences.
- **Scaling limits:** de Finetti grounds controlled scaling of Bayesian systems—the posterior remains exchangeable under new data.

Exchangeability is the fundamental language of probabilistic statistics, and de Finetti's theorem is the jewel connecting frequentist and Bayesian perspectives.
