---
title: "Information Theory"
category: "Applied Probability"
order: 25
lang: "en"
slug: "/math/information-theory"
growth: "seedling"
---

# Information Theory

Information theory, founded by Claude Shannon in 1948, formalizes the notion of information as a quantitative measure of uncertainty and data compressibility. It establishes fundamental limits on the transmission, storage, and processing of information in the presence of noise, and reveals deep connections to statistical mechanics, machine learning, and quantum mechanics.

## Shannon [[shannon-entropy|Entropy]]

**Entropy** of a discrete random variable $X$ with probability distribution $p(x) = \mathbb{P}(X = x)$ is defined as:

$$H(X) = -\sum_{x \in \mathcal{X}} p(x) \log p(x)$$

where the logarithm is typically base 2 (bits) or natural logarithm (nats). Entropy measures the expected number of bits of information (uncertainty) required to describe a realization of $X$.

**Fundamental properties of entropy:**

1. **Non-negativity**: $H(X) \geq 0$, with equality if and only if $X$ is deterministic (supported on a single point).

2. **Upper bound**: $H(X) \leq \log |\mathcal{X}|$, where the maximum is attained by the uniform distribution. Intuitively, maximum uncertainty arises when all outcomes are equally likely.

3. **Concavity**: Entropy is a concave function of the probability distribution:
$$H(\lambda p + (1-\lambda) q) \geq \lambda H(p) + (1-\lambda) H(q)$$
for $\lambda \in [0,1]$.

4. **Chain rule**: For a joint random variable $(X_1, \ldots, X_n)$:
$$H(X_1, \ldots, X_n) = \sum_{i=1}^n H(X_i | X_1, \ldots, X_{i-1})$$

## Joint and Conditional Entropy

**Joint entropy** of two random variables $X$ and $Y$ is defined as:

$$H(X, Y) = -\sum_{x,y} p(x,y) \log p(x,y)$$

**Conditional entropy** of $X$ given $Y$ measures the average remaining uncertainty in $X$ after observing $Y$:

$$H(X|Y) = \sum_y p(y) H(X|Y=y) = -\sum_{x,y} p(x,y) \log p(x|y)$$

The fundamental relationship between these quantities is:

$$H(X, Y) = H(Y) + H(X|Y) = H(X) + H(Y|X)$$

Conditional entropy satisfies the important property: $H(X|Y) \leq H(X)$, with equality if and only if $X$ and $Y$ are independent. This formalizes the intuition that information about $Y$ cannot increase uncertainty in $X$.

## Mutual Information

**Mutual information** $I(X;Y)$ measures the amount of information that $Y$ contains about $X$:

$$I(X;Y) = H(X) - H(X|Y) = H(Y) - H(Y|X) = H(X) + H(Y) - H(X,Y)$$

Equivalently, mutual information can be expressed as the **Kullback-Leibler divergence** between the joint distribution and the product of marginals:

$$I(X;Y) = D_{\text{KL}}(P_{X,Y} \| P_X \otimes P_Y) = \sum_{x,y} p(x,y) \log \frac{p(x,y)}{p(x)p(y)}$$

**Properties of mutual information:**

- Non-negativity: $I(X;Y) \geq 0$
- Symmetry: $I(X;Y) = I(Y;X)$
- Vanishes under independence: $I(X;Y) = 0$ $\Leftrightarrow$ $X \perp Y$
- Upper bound: $I(X;Y) \leq \min(H(X), H(Y))$

## Kullback-Leibler Divergence

The Kullback-Leibler divergence (KL divergence) measures the dissimilarity between two probability distributions $P$ and $Q$ over the same space $\mathcal{X}$:

$$D_{\text{KL}}(P \| Q) = \sum_x p(x) \log \frac{p(x)}{q(x)} = \mathbb{E}_{x \sim P}\left[\log \frac{dP}{dQ}(x)\right]$$

**Gibbs' inequality** establishes a fundamental result:

$$D_{\text{KL}}(P \| Q) \geq 0$$

with equality if and only if $P = Q$ almost everywhere. The proof follows from Jensen's inequality applied to the concavity of the logarithm.

**Key properties:**

1. **Asymmetry**: $D_{\text{KL}}(P \| Q) \neq D_{\text{KL}}(Q \| P)$ in general. KL divergence is not a metric.

2. **Relation to entropy**: 
$$D_{\text{KL}}(P \| Q) = H(P, Q) - H(P)$$
where $H(P,Q) = -\sum_x p(x) \log q(x)$ is the cross-entropy.

3. **Information inequality**: 
$$\mathbb{E}_P[\phi(X)] \geq \mathbb{E}_Q[\phi(X)] + D_{\text{KL}}(P \| Q) \cdot |\phi'(x)|$$

## Data Processing Inequality

The **data processing inequality** formalizes a fundamental principle: information cannot be recovered under processing.

If $X \to Y \to Z$ form a Markov chain (i.e., $P(X, Y, Z) = P(X) P(Y|X) P(Z|Y)$), then:

$$I(X;Z) \leq I(X;Y)$$

Intuitively, any statistic $Z$ that depends only on $Y$ cannot contain more information about $X$ than $Y$ itself. This inequality has profound implications in estimation theory and machine learning.

The proof follows from the non-negativity of mutual information:
$$I(X;Y) - I(X;Z) = I(X;Y|Z) \geq 0$$

## Differential Entropy

For a continuous distribution with probability density $p(x)$, **differential entropy** is defined as:

$$h(X) = -\int_{\mathcal{X}} p(x) \log p(x) \, dx$$

Differential entropy shares similar properties with discrete entropy, but with an important distinction: it can be negative. For example, the differential entropy of a Gaussian distribution $\mathcal{N}(\mu, \sigma^2)$ is:

$$h(X) = \frac{1}{2} \log(2\pi e \sigma^2)$$

which is negative for $\sigma < (2\pi e)^{-1/2} \approx 0.242$.

## Channel Capacity

The central result of information theory — **Shannon's channel coding theorem** — establishes the maximum rate of information transmission over a noisy channel such that arbitrarily small error probability can be achieved.

**Channel capacity** is defined as:

$$C = \max_{P_X} I(X;Y)$$

where the maximum is taken over all input distributions $P_X$, and $I(X;Y)$ is the mutual information between input $X$ and output $Y$ of the channel.

**Shannon's channel coding theorem**: For any rate $R < C$ there exists a code of length $n$ with error probability tending to zero as $n \to \infty$. Conversely, for any rate $R > C$ the error probability is bounded below by a positive constant.

## Source Coding

**Lossless source coding** addresses the opposite problem: data compression.

**Shannon's source coding theorem** (noiseless coding theorem): The average number of bits required to encode a symbol from distribution $P(X)$ is bounded by:

$$H(X) \leq \mathbb{E}[\text{code length}] < H(X) + 1$$

Entropy $H(X)$ is the fundamental limit of compression. Huffman codes achieve this bound asymptotically up to one bit.

## Connection to Fisher Information

**Fisher information** in statistical estimation theory is defined as:

$$I_F(\theta) = \mathbb{E}_{x \sim p(x|\theta)}\left[\left(\frac{\partial}{\partial \theta} \log p(x|\theta)\right)^2\right]$$

There exists a deep relationship between Fisher information and differential entropy. **Van Trees' inequality** relates the mean squared error of an estimator and Fisher information through the entropy of a prior distribution:

$$\mathbb{E}\left[(\hat{\theta} - \theta)^2\right] \geq \frac{h(\theta)}{I_F(\theta) + I_F(\pi)}$$

where $h(\theta) = 1$ (normalization) and $I_F(\pi)$ is the Fisher information of the posterior distribution.

## Applications in Machine Learning

### Cross-Entropy and Logistic Regression

When training a classifier, minimizing cross-entropy loss:

$$\mathcal{L} = -\sum_i y_i \log p_i + (1-y_i) \log(1-p_i)$$

is equivalent to minimizing $D_{\text{KL}}(P_{\text{true}} \| P_{\text{model}})$, which is directly connected to information theory.

### Variational Inference and ELBO

In variational inference we minimize the Kullback-Leibler divergence between the true posterior and a variational approximation, which is equivalent to maximizing the Evidence Lower Bound (ELBO):

$$\log p(x) = \mathbb{E}_{q(\theta)}\left[\log \frac{p(x,\theta)}{q(\theta)}\right] + D_{\text{KL}}(q(\theta) \| p(\theta|x))$$

### Maximum Entropy Principle

The maximum entropy principle states that given marginal constraints, the least informative (most uncertain) distribution is the one with maximum entropy. This principle underlies [[exponential-families|exponential families]] and regularization methods.

## Advanced Topics

Information-theoretic concepts connect to numerous areas. The [[cramer-rao-bound|Cramér-Rao bound]] establishes lower bounds on estimator variance through Fisher information. [[concentration-inequalities|Concentration inequalities]] provide tail bounds using KL divergence. Large deviations theory, related to [[large-deviations-cramer|Cramér's theorem]], quantifies the exponential decay of probabilities under [[m-estimators|M-estimation]]. 

The role of information geometry extends through [[characteristic-functions|characteristic functions]] and their Fourier duality. [[minimax-estimation|Minimax estimation]] requires understanding the interplay between information and estimation complexity. [[harmonic-analysis|Harmonic analysis]] provides tools for understanding information propagation in Fourier domains.

## Conclusion

Information theory provides a universal language for analyzing the transmission, storage, and processing of information. From fundamental limits to modern applications in deep learning and quantum information, information-theoretic tools remain central to theoretical statistics, machine learning, and beyond. The axiomatic foundations laid by Shannon continue to reveal new insights into the structure of data and the limits of inference.
