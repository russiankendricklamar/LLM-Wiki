---
title: "The Maximum Entropy Principle"
category: "Foundations"
order: 22
lang: "en"
slug: "maximum-entropy"
growth: "evergreen"
---

# The Maximum Entropy Principle

The Maximum Entropy (MaxEnt) principle, formulated by **E. T. Jaynes** in 1957, is a constructive answer to the question: *given partial information about a random variable, which distribution should we choose?* Jaynes' answer: choose the distribution that is **maximally uncertain** subject to the known constraints. Any other choice smuggles in unstated assumptions.

This single principle generates almost every standard distribution in statistics, justifies Boltzmann's distribution in physics, builds the bridge between exponential families and information theory, and supplies a non-arbitrary recipe for constructing Bayesian priors.

## 1. Formal statement

Given a measurable space $(\mathcal{X}, \mathcal{F}, \mu)$ and a finite collection of test functions $f_1,\dots,f_d : \mathcal{X} \to \mathbb{R}$ with prescribed expectations $\mu_1,\dots,\mu_d$, the MaxEnt distribution solves

$$
\max_{p \in \mathcal{P}} \quad H(p) = -\int p(x)\log p(x)\, d\mu(x)
$$

subject to

$$
\int p(x)\, d\mu = 1, \qquad \int f_j(x)\, p(x)\, d\mu = \mu_j,\ j=1,\dots,d.
$$

If we replace $\mu$ by a reference measure $q$, the same machinery maximises $-\mathrm{KL}(p\|q)$ — i.e. it picks $p$ as **close to the prior** $q$ as possible while satisfying the constraints (this is **Kullback's principle of minimum discrimination information**).

## 2. Solution by Lagrange multipliers

Form the Lagrangian

$$
\mathcal{L}(p, \lambda_0, \boldsymbol\lambda) = -\int p\log p\, d\mu - \lambda_0\!\left(\int p\, d\mu - 1\right) - \sum_{j=1}^d \lambda_j\!\left(\int f_j p\, d\mu - \mu_j\right).
$$

Variational derivative w.r.t. $p$:

$$
\frac{\delta \mathcal{L}}{\delta p}(x) = -\log p(x) - 1 - \lambda_0 - \sum_j \lambda_j f_j(x) = 0.
$$

Solving for $p$:

$$
\boxed{p^*(x) = \frac{1}{Z(\boldsymbol\lambda)}\exp\!\left(\sum_{j=1}^d \lambda_j f_j(x)\right)}, \qquad Z(\boldsymbol\lambda) = \int e^{\sum_j \lambda_j f_j(x)}\, d\mu(x).
$$

This is **exactly the canonical form of an [[exponential-families|exponential family]]** with sufficient statistic $T = (f_1,\dots,f_d)$ and natural parameter $\eta = (\lambda_1,\dots,\lambda_d)$. The log-partition $A(\boldsymbol\lambda) = \log Z(\boldsymbol\lambda)$.

## 3. Duality with maximum likelihood

The MaxEnt problem is the **convex dual** of MLE in the exponential family. The Lagrange multipliers $\boldsymbol\lambda$ are precisely the natural parameters $\eta$, and the constraints $\mu_j = \mathbb{E}[f_j]$ are the moment conditions $\nabla A(\eta) = \bar T_n$ that MLE satisfies. Formally:

$$
\max_p H(p) \text{ s.t. moments fixed} \quad \equiv \quad \max_\eta \ell(\eta) \text{ over the exponential family}.
$$

This is the **MaxEnt ↔ MLE equivalence**: the most "honest" distribution fitting the data and the most likely model are the same object.

## 4. The MaxEnt zoo

Different choices of $(\mathcal{X}, \mu, T)$ generate the standard distributions:

| Sample space | Constraints | MaxEnt distribution |
|---|---|---|
| $\{x_1,\dots,x_n\}$ (counting) | none beyond normalisation | Uniform |
| $[a, b]$ (Lebesgue) | none | Uniform on $[a,b]$ |
| $\mathbb{R}$ | $\mathbb{E}[X], \operatorname{Var}(X)$ fixed | $\mathcal{N}(\mu, \sigma^2)$ |
| $\mathbb{R}_+$ | $\mathbb{E}[X]$ fixed | Exponential$(\lambda)$ |
| $\mathbb{R}_+$ | $\mathbb{E}[X], \mathbb{E}[\log X]$ fixed | Gamma$(\alpha, \beta)$ |
| $\{0,1\}$ | $\mathbb{E}[X]$ fixed | Bernoulli$(p)$ |
| $\mathbb{N}$ | $\mathbb{E}[X]$ fixed | Geometric / Poisson (depending on reference $\mu$) |
| Simplex $\Delta^{K-1}$ | $\mathbb{E}[\log X_i]$ fixed | Dirichlet$(\alpha)$ |
| $\mathbb{R}^d$ | $\mathbb{E}[X], \operatorname{Cov}(X)$ fixed | $\mathcal{N}_d(\boldsymbol\mu, \Sigma)$ |

**Key takeaway.** The "default" distribution for each domain is *forced* by the MaxEnt principle once you specify which moments you care about. There is nothing arbitrary about Gaussianity given mean and variance.

## 5. Worked example: deriving the Gaussian

On $\mathcal{X} = \mathbb{R}$ with constraints $\mathbb{E}[X] = \mu$, $\mathbb{E}[X^2] = \mu^2 + \sigma^2$, the MaxEnt density takes the form

$$
p(x) = \frac{1}{Z}\exp(\lambda_1 x + \lambda_2 x^2).
$$

Completing the square inside the exponent gives a quadratic $-\frac{(x-\mu)^2}{2\sigma^2}$ (with $\lambda_2 < 0$ enforcing integrability), and the normaliser yields $Z = \sigma\sqrt{2\pi}$. Result:

$$
p(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right).
$$

The Gaussian is **not a postulate** — it is the unique maximum-uncertainty distribution on $\mathbb{R}$ with given mean and variance.

## 6. Statistical mechanics: Boltzmann from MaxEnt

In thermodynamics, the constraint is fixed energy $\mathbb{E}[E] = \langle E \rangle$. MaxEnt over microstates gives

$$
p(\text{state } i) = \frac{1}{Z(\beta)} e^{-\beta E_i},
$$

with $\beta$ identified as **inverse temperature** $1/(k_B T)$. The log-partition $\log Z(\beta)$ becomes the negative Helmholtz free energy. The whole apparatus of statistical mechanics — Boltzmann distribution, partition functions, free energy — is one application of MaxEnt with energy as the constraint.

This is the deepest sense in which **entropy is a unifying concept**: the same variational principle governs information theory, statistical inference, and thermodynamics.

## 7. Bayesian priors via MaxEnt

When you need a prior but have only weak structural information, MaxEnt gives a principled construction:

- No information at all → uniform prior.
- Known mean of a positive quantity → exponential prior.
- Known mean and variance on $\mathbb{R}$ → Gaussian prior.

This is Jaynes' answer to the **non-informative prior problem** that plagued early Bayesian statistics: instead of arbitrary "Jeffreys priors", choose the prior with maximum entropy under the structural constraints you actually believe in.

## 8. Generalisations: Tsallis and Rényi

Replacing Shannon entropy with $q$-deformed entropies generates whole families of distributions:

- **Rényi entropy** $H_\alpha(p) = \frac{1}{1-\alpha}\log\int p^\alpha$. MaxEnt under Rényi gives **stretched exponentials** and **power laws**.
- **Tsallis entropy** $S_q(p) = \frac{1-\int p^q}{q-1}$. MaxEnt under Tsallis with variance constraint gives the **Student's $t$-distribution** ("$q$-Gaussian"), explaining why heavy tails appear in non-extensive systems.

These generalisations explain why **fat-tailed distributions** are natural — they are MaxEnt under a different uncertainty measure.

## 9. Information-geometric view

The space of probability distributions on $\mathcal{X}$ forms a Riemannian manifold under the Fisher metric. MaxEnt under linear constraints projects orthogonally (in the **m-flat** sense) onto an affine subspace, while MLE projects orthogonally (in the **e-flat** sense). The Pythagorean theorem of information geometry then gives the duality from §3 a clean geometric meaning.

## 10. Applications in modern ML

- **Logistic regression** is the MaxEnt classifier subject to feature-expectation matching constraints. This is *why* it generalises: it is the most non-committal model consistent with the training moments.
- **MaxEnt RL** (Soft Actor-Critic, Soft Q-Learning) augments the reward with an entropy bonus, biasing the policy towards maximum-uncertainty solutions and dramatically improving exploration.
- **Energy-based models** (Boltzmann machines, modern EBMs) parametrise $p(x) \propto e^{-E_\theta(x)}$ — exactly the MaxEnt form, with the energy function learned.
- **Variational auto-encoders** include an entropy term in the ELBO, directly preventing posterior collapse.

## 11. Visualisation: entropy decreases with constraints

```chart
{
  "type": "line",
  "xAxis": "constraint_strictness",
  "data": [
    {"constraint_strictness": 0,  "entropy": 10.0},
    {"constraint_strictness": 1,  "entropy": 9.2},
    {"constraint_strictness": 2,  "entropy": 8.0},
    {"constraint_strictness": 3,  "entropy": 6.5},
    {"constraint_strictness": 5,  "entropy": 4.2},
    {"constraint_strictness": 8,  "entropy": 1.5},
    {"constraint_strictness": 10, "entropy": 0.1}
  ],
  "lines": [
    {"dataKey": "entropy", "stroke": "#ef4444", "name": "max H(p) under k constraints"}
  ]
}
```

*Each additional moment constraint lowers the maximum entropy — the model becomes more committed. With zero constraints we get the uniform; with infinitely many we collapse to a point mass.*

## 12. Related topics

- [[information-theory|Information theory]] — the Shannon entropy being maximised.
- [[exponential-families|Exponential families]] — the universal form of MaxEnt solutions.
- [[fisher-information|Fisher information]] — the curvature of the manifold MaxEnt lives on.
- [[bayesian-inference|Bayesian inference]] — non-informative priors via MaxEnt.
- [[information-geometry|Information geometry]] — Pythagorean duality of MaxEnt and MLE.
- [[mle|Maximum likelihood]] — convex dual of the MaxEnt problem.
- [[statistical-mechanics|Statistical mechanics]] — Boltzmann distribution as energy-constrained MaxEnt.
