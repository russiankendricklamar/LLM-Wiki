---
title: "Contiguity and the Le Cam Theory"
category: "Asymptotic Statistics"
order: 1
lang: "en"
---

# Contiguity and the Le Cam Theory

Absolute continuity of probability measures ($Q \ll P$) means that every $P$-null set is also $Q$-null. But in asymptotic statistics and in Jacod and Shiryaev's "Limit Theorems for Stochastic Processes," one rarely deals with a single pair of measures; instead, one has **sequences** $(P_n)$ and $(Q_n)$ on expanding probability spaces, and the question becomes: does the asymptotic behavior under $Q_n$ resemble that under $P_n$? Le Cam's theory of **contiguity** provides the precise framework. Contiguity is "asymptotic absolute continuity" — it captures when a sequence of alternative hypotheses remains statistically close to the null.

This theory is the bridge between the abstract limit theorems of probability (convergence of semimartingales, functional CLT) and the concrete needs of mathematical statistics (power of tests, efficiency of estimators). It also connects to financial mathematics, where contiguity governs when discrete-time models can approximate continuous-time ones without introducing asymptotic arbitrage.

## Definition of Contiguity

**Definition.** Let $(P_n)$ and $(Q_n)$ be sequences of probability measures on measurable spaces $(\Omega_n, \mathcal{F}_n)$.

- $(Q_n)$ is **contiguous** with respect to $(P_n)$, written $Q_n \triangleleft P_n$, if for every sequence of events $A_n \in \mathcal{F}_n$:
$$P_n(A_n) \to 0 \implies Q_n(A_n) \to 0.$$

- $(P_n)$ and $(Q_n)$ are **mutually contiguous**, written $P_n \trianglelefteq Q_n$, if both $Q_n \triangleleft P_n$ and $P_n \triangleleft Q_n$.

Contiguity says: if an event is asymptotically negligible under $P_n$, it is also asymptotically negligible under $Q_n$. This is weaker than requiring $Q_n \ll P_n$ for each $n$, but it is an asymptotic condition that has powerful consequences.

## Entire Separation

The opposite of contiguity is **entire separation**.

**Definition.** $(P_n)$ and $(Q_n)$ are **entirely separated** if there exist events $A_n$ such that $P_n(A_n) \to 1$ and $Q_n(A_n) \to 0$.

Entire separation means one can construct a sequence of tests that asymptotically distinguishes $P_n$ from $Q_n$ with probability approaching 1. In statistical terms, the power of the best test converges to 1.

**Dichotomy:** For any two sequences $(P_n)$ and $(Q_n)$, one of the following holds:
1. Every subsequence of $(Q_n)$ has a further subsequence that is contiguous to the corresponding subsequence of $(P_n)$, or
2. There exist subsequences along which $(P_n)$ and $(Q_n)$ are entirely separated.

This is Le Cam's **first lemma** in its subsequential form.

## Characterization via Likelihood Ratios

The log-likelihood ratio is $\Lambda_n = \log(dQ_n/dP_n)$ (assuming $Q_n \ll P_n$ for each $n$; the general case uses truncated likelihood ratios).

**Theorem (Le Cam's first lemma).** $Q_n \triangleleft P_n$ if and only if the sequence of likelihood ratios $L_n = dQ_n/dP_n$ is **uniformly integrable** under $(P_n)$.

Equivalently, $Q_n \triangleleft P_n$ if and only if for every subsequence, there is a further subsequence along which $L_n$ converges in distribution (under $P_n$) to a limit $L$ with $\mathbb{E}[L] = 1$.

**Proof idea.** If $L_n$ is uniformly integrable under $P_n$ and $P_n(A_n) \to 0$, then $Q_n(A_n) = \mathbb{E}_{P_n}[L_n \mathbb{1}_{A_n}] \to 0$ by uniform integrability. Conversely, failure of uniform integrability means one can find sets where $L_n$ concentrates mass, violating contiguity.

## Le Cam's Third Lemma

The most powerful tool for applications is Le Cam's third lemma, which describes how the limit distribution of a statistic changes when one switches from $P_n$ to $Q_n$.

**Theorem (Le Cam's third lemma).** Suppose $Q_n \triangleleft P_n$ and under $P_n$:

$$\begin{pmatrix} T_n \\ \Lambda_n \end{pmatrix} \xrightarrow{d} \begin{pmatrix} T \\ \Lambda \end{pmatrix}$$

where $\Lambda_n = \log(dQ_n/dP_n)$ is the log-likelihood ratio. Assume $\mathbb{E}[e^\Lambda] = 1$ (which holds when contiguity is satisfied). Then under $Q_n$:

$$T_n \xrightarrow{d} T^*,$$

where the distribution of $T^*$ is the **tilted** distribution: $\mathbb{E}[f(T^*)] = \mathbb{E}[f(T) e^\Lambda]$ for all bounded continuous $f$.

**The Gaussian case.** If the joint limit is Gaussian:

$$\begin{pmatrix} T \\ \Lambda \end{pmatrix} \sim \mathcal{N}\!\left(\begin{pmatrix} \mu \\ -\sigma^2/2 \end{pmatrix}, \begin{pmatrix} \Sigma_{TT} & \Sigma_{T\Lambda} \\ \Sigma_{T\Lambda}^\top & \sigma^2 \end{pmatrix}\right),$$

then under $Q_n$, $T_n \xrightarrow{d} \mathcal{N}(\mu + \Sigma_{T\Lambda}, \Sigma_{TT})$. The variance is unchanged; only the mean shifts by $\Sigma_{T\Lambda}$, the covariance of the statistic with the log-likelihood ratio.

This is the fundamental tool for computing the **asymptotic power** of statistical tests: one computes the joint limit of the test statistic and log-likelihood under the null, then reads off the power under the alternative via the mean shift.

## Hellinger Distance Connection

The **Hellinger distance** between two probability measures is:

$$H^2(P, Q) = \frac{1}{2} \int \left(\sqrt{dP} - \sqrt{dQ}\right)^2.$$

It is related to contiguity as follows:

**Theorem.** $Q_n \triangleleft P_n$ implies $H^2(P_n, Q_n) \not\to 1$. Conversely, if $H^2(P_n, Q_n) \to 0$, then $P_n$ and $Q_n$ are mutually contiguous.

The Hellinger distance provides a computable criterion: when it stays bounded away from 1, contiguity holds; when it tends to 0, the measures become asymptotically indistinguishable.

For product measures $P_n = \bigotimes_{k=1}^n p_k$ and $Q_n = \bigotimes_{k=1}^n q_k$, the Hellinger distance satisfies:

$$H^2(P_n, Q_n) = 1 - \prod_{k=1}^n (1 - H^2(p_k, q_k)).$$

This multiplicative structure makes Hellinger distances particularly tractable for independent observations.

## Local Asymptotic Normality (LAN)

The deepest application of contiguity in statistics is Le Cam's theory of **local asymptotic normality**.

**Definition.** A statistical model $\{P_{\theta,n}\}$ is **LAN** at $\theta_0$ if for local perturbations $\theta_n = \theta_0 + h/\sqrt{n}$:

$$\log \frac{dP_{\theta_n,n}}{dP_{\theta_0,n}} = h^\top \Delta_n - \frac{1}{2} h^\top I(\theta_0) h + o_{P_{\theta_0,n}}(1),$$

where $\Delta_n \xrightarrow{d} \mathcal{N}(0, I(\theta_0))$ under $P_{\theta_0,n}$ and $I(\theta_0)$ is the Fisher information matrix.

Under LAN, the local alternatives $P_{\theta_n,n}$ are contiguous to $P_{\theta_0,n}$, and Le Cam's third lemma immediately gives:

- The **asymptotic power** of any test at level $\alpha$ against $\theta_n$,
- The **asymptotic minimax theorem**: no estimator can beat the maximum likelihood estimator in asymptotic risk (the convolution theorem),
- The **Hajek-Le Cam bound** on the asymptotic variance of regular estimators.

## Applications in Jacod-Shiryaev Framework

Jacod and Shiryaev develop contiguity theory in the context of sequences of semimartingale experiments. Their main results characterize contiguity in terms of the **predictable characteristics** of the log-likelihood process.

**Theorem (Jacod-Shiryaev).** Let $P_n$ and $Q_n$ be probability measures under which the observation process is a semimartingale, and let $Z_n$ be the likelihood ratio process. Then $Q_n \triangleleft P_n$ if and only if the predictable characteristics of $\log Z_n$ satisfy explicit convergence conditions (involving the drift, diffusion coefficient, and jump compensator of the log-likelihood process).

This connects the abstract statistical theory to the concrete semimartingale calculus, making it possible to verify contiguity for processes with jumps, not just for i.i.d. observations.

## Financial Mathematics Application

In mathematical finance, contiguity governs the passage from discrete to continuous time. If $(P_n)$ are the physical measures for a sequence of discrete-time models and $(Q_n)$ are the corresponding risk-neutral measures, then:

- $Q_n \triangleleft P_n$ means no asymptotic arbitrage (in the sense that events with vanishing physical probability also have vanishing risk-neutral probability).
- Failure of contiguity (entire separation) corresponds to the possibility of constructing asymptotically riskless profits — a form of asymptotic arbitrage.

This connection, explored in the works of Kabanov and Kramkov, shows that contiguity is the natural condition ensuring that discrete hedging strategies converge to their continuous-time counterparts.

## Related Articles

- [[weak-convergence-prokhorov]] — weak convergence of measures, the framework underlying contiguity.
- [[characteristic-functions]] — convergence in distribution via characteristic functions.
- [[central-limit-theorem]] — the Gaussian limits that appear in LAN theory.
- [[girsanov-semimartingales]] — change of measure for semimartingales, related to likelihood ratios.
- [[semimartingale-models]] — predictable characteristics and the Jacod-Shiryaev framework.
- [[large-deviations-cramer]] — large deviations complement contiguity (local vs. global alternatives).
- [[skorokhod-topology]] — the space in which functional limit theorems for contiguous experiments are stated.
