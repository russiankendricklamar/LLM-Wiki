---
title: "Causal Inference"
category: "Asymptotic Statistics"
order: 31
lang: "en"
slug: "causal-inference"
growth: "seedling"
---

# Causal Inference

Causal inference asks: what happens when we intervene? Observation alone cannot answer this. The fundamental problem is that we never observe both potential outcomes for the same unit. The Rubin causal model formalizes treatment effects; do-calculus and graphical methods reveal when and how to identify them from observational data.

## Potential Outcomes Framework

The Neyman-Rubin model formalizes causality. Each unit has two potential outcomes: $Y_i(0)$ and $Y_i(1)$, fixed characteristics of the unit. Only one is observed—the **consistency assumption** states:
$$Y_i = T_i Y_i(1) + (1-T_i) Y_i(0).$$

The **average treatment effect** is $\text{ATE} = \mathbb{E}[Y_i(1) - Y_i(0)]$, the population average gain from treatment. The **average treatment effect on the treated** (ATT) isolates units actually treated:
$$\text{ATT} = \mathbb{E}[Y_i(1) - Y_i(0) \mid T_i=1].$$

The fundamental problem: $Y_i(1) - Y_i(0)$ is never observed for any unit. Naive subtraction $\mathbb{E}[Y_i|T_i=1] - \mathbb{E}[Y_i|T_i=0]$ conflates treatment effect with selection bias:
$$\mathbb{E}[Y|T=1] - \mathbb{E}[Y|T=0] = \underbrace{\mathbb{E}[Y(1) - Y(0)]}_{\text{ATE}} + \underbrace{\mathbb{E}[Y(0)|T=1] - \mathbb{E}[Y(0)|T=0]}_{\text{selection bias}}.$$

Identifying ATE requires either randomization or conditioning on confounders.

## Randomization: The Gold Standard

A **randomized controlled trial** (RCT) assigns treatment independent of potential outcomes:
$$T \perp (Y(0), Y(1)).$$

Then selection bias vanishes: $\mathbb{E}[Y(0)|T=1] = \mathbb{E}[Y(0)]$. The difference-in-means is unbiased:
$$\mathbb{E}[Y|T=1] - \mathbb{E}[Y|T=0] = \mathbb{E}[Y(1)] - \mathbb{E}[Y(0)] = \text{ATE}.$$

RCTs are the causal gold standard but often infeasible: ethical constraints, cost, or interference (one unit's treatment affects another's outcome). Observational data dominates real practice.

## Unconfoundedness and Matching

**Unconfoundedness** (or conditional independence) assumes:
$$T \perp (Y(0), Y(1)) \mid X$$
where $X$ are measured confounders. Given $X$, treatment assignment is "as good as random." This requires that all variables affecting both $T$ and $Y$ are observed—a strong assumption untestable from data.

Under unconfoundedness, the **backdoor criterion** (Pearl) formalizes which covariates $X$ to adjust for. In a **directed acyclic graph** (DAG), $X$ blocks all backdoor paths (non-causal paths via common causes) from $T$ to $Y$ if:
1. Every path from $T$ to $Y$ that does not go through the causal arrow $T \to Y$ contains at least one node in $X$, and
2. No node in $X$ is a descendant of $T$.

**Matching** pairs treated and control units with similar $X$, then compares outcomes:
$$\widehat{\text{ATE}} = \frac{1}{n} \sum_{i=1}^{n} (Y_i^{\text{treated},i} - Y_i^{\text{control},i})$$
where matched pairs have identical or very close $X$ values. Matching is simple but suffers in high dimensions (curse of dimensionality).

## Inverse Probability Weighting

Define the **propensity score** as $e(X) = P(T=1|X)$, the probability of treatment given covariates. **Inverse probability weighting** (IPW) reweights observations to create a pseudopopulation in which $T$ is independent of $X$:
$$\widehat{\text{ATE}}_{\text{IPW}} = \mathbb{E}\left[\frac{T \cdot Y}{e(X)}\right] - \mathbb{E}\left[\frac{(1-T) \cdot Y}{1-e(X)}\right].$$

Treated units with low propensity score (rare among treated) are upweighted; high-propensity controls are upweighted. IPW is efficient and works in high dimensions, but is sensitive to misspecification of $e(X)$ and can have high variance if propensity scores are near 0 or 1 (positivity violation).

**Doubly robust** estimators combine a model of $Y$ given $X$ and a model of $T$ given $X$: they remain consistent if either model is correct, reducing sensitivity to misspecification.

## Do-Calculus and Causal Graphs

Judea Pearl's **do-calculus** provides rules for identifying $P(Y|do(T=t))$ from observational distributions $P(\cdot)$. In a DAG, $do(T=t)$ means removing all edges *into* $T$ and setting $T=t$:
$$P(Y|do(T=t)) = \sum_x P(Y|T=t, X=x) P(X=x)$$
when $X$ satisfies the backdoor criterion. The back-door adjustment formula directly follows: we standardize over $X$.

The **front-door criterion** (Pearl) identifies causal effects even when unmeasured confounders affect $T \to Y$, provided a mediator $M$ with no unmeasured confounders affecting $M \to Y$. The formula reconstructs $P(Y|do(T=t))$ via $M$.

## Instrumental Variables

An **instrument** $Z$ satisfies three conditions:
1. **Relevance**: $Z$ causally affects $T$ ($Z \to T$).
2. **Exogeneity**: $Z \perp U$ where $U$ is all confounding of $T$ and $Y$.
3. **Exclusion**: $Z$ affects $Y$ only through $T$.

Under these conditions, the **Wald estimand** or **LATE** (Local Average Treatment Effect) recovers a causal effect:
$$\text{LATE} = \frac{\text{Cov}(Y, Z)}{\text{Cov}(T, Z)}.$$

LATE is the average effect for **compliers** (units whose treatment status is affected by the instrument). In a fully compliant population, LATE = ATE. IV relaxes unconfoundedness by requiring only that $Z \perp U$, but is fragile to violation of exclusion.

## Regression Discontinuity

**Regression discontinuity** (RD) exploits arbitrary thresholds in treatment assignment. If treatment $T_i = \mathbb{1}[X_i \geq c]$ for a running variable $X$ and cutoff $c$, units just above and just below $c$ differ in treatment but are otherwise identical. The **local treatment effect** is:
$$\tau_{\text{RD}} = \lim_{x \to c^+} \mathbb{E}[Y|X=x] - \lim_{x \to c^-} \mathbb{E}[Y|X=x].$$

RD is quasi-experimental: units cannot manipulate $X$ to land on the favored side of $c$ (if assignment is transparent and binding). Sharp RD (deterministic threshold) is strongest; fuzzy RD (threshold affects probability) requires IV logic. RD is local—generalizes only to units near the cutoff.

## Applications: Causality in Large Language Models

Understanding causality in AI systems is emerging. Does **RLHF** (reinforcement learning from human feedback) cause alignment, or merely superficial compliance? Causal framing clarifies: RLHF intervenes on reward signal; does the distribution of aligned behaviors change under $do(\text{RLHF}=\text{on})$ vs. $do(\text{RLHF}=\text{off})$? Or is alignment a latent feature already present in pretraining, with confounding variables (size, data) driving both?

Do capability emergences ($\text{do}(\text{scale}=n)$) truly cause new abilities, or are they artifacts of evaluation metrics and training data selection? Causal investigation requires intervening on scale while holding confounders constant—a true experiment.

Observational causal inference (DAGs, do-calculus, IPW) provides vocabulary for designing such interventions and interpreting their results scientifically.

## See Also

- [[local-asymptotic-normality|LAN]] for asymptotic theory of estimators
- [[kolmogorov-probability-axioms]] for foundational probability
- [[rlhf|RLHF]] for application to language models
- [[mcmc|MCMC]] for posterior inference under model uncertainty
- [[efficient-market-hypothesis]] for causal mechanisms in finance
- [[fama-macbeth-regression]] for controlling confounders in panel data
