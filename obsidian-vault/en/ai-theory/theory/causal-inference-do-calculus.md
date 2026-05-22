---
title: "Causal Inference: Do-Calculus & SCM"
category: "AI Theory"
order: 101
lang: "en"
slug: "causal-inference-do-calculus"
---

# Causal Inference: Do-Calculus & SCM

## What Is It

Causal inference is the formal study of how interventions and counterfactuals can be derived from data and structural assumptions. Unlike standard statistics, which deals with associations ($P(y \mid x)$), causal inference seeks to answer "what if" questions ($P(y \mid do(x))$). The framework established by Judea Pearl centers on **Structural Causal Models (SCM)** and the **do-calculus**, providing a complete logic for identifying causal effects from observational data.

## Structural Causal Models (SCM)

An SCM consists of a set of endogenous variables $V$, exogenous (latent) variables $U$, and functions $F$:
$$X_i = f_i(PA_i, U_i)$$
where $PA_i$ are the parents of $X_i$ in the associated Directed Acyclic Graph (DAG). The SCM represents the mechanism by which nature assigns values to variables.

## The Do-Operator

The $do(X=x)$ operator represents a physical intervention that sets $X$ to $x$, overriding its natural functional dependencies. This corresponds to modifying the DAG by removing all edges pointing into $X$.

The **Causal Effect** of $X$ on $Y$ is:
$$P(Y \mid do(X=x)) = \int P(Y \mid x, pa_X) P(pa_X) d pa_X$$
(provided $PA_X$ is observable).

## The Rules of Do-Calculus

Do-calculus consists of three rules that allow transforming expressions involving the $do$ operator into purely observational expressions. Let $G_{\bar{X}}$ be the DAG with edges into $X$ removed, and $G_{\underline{X}}$ be the DAG with edges out of $X$ removed.

1. **Rule 1 (Insertion/Deletion of observations):**
   $$P(y \mid do(x), z, w) = P(y \mid do(x), w) \quad \text{if } (Y \perp Z \mid X, W)_{G_{\bar{X}}}$$
2. **Rule 2 (Action/Observation exchange):**
   $$P(y \mid do(x), do(z), w) = P(y \mid do(x), z, w) \quad \text{if } (Y \perp Z \mid X, W)_{G_{\bar{X}\underline{Z}}}$$
3. **Rule 3 (Insertion/Deletion of actions):**
   $$P(y \mid do(x), do(z), w) = P(y \mid do(x), w) \quad \text{if } (Y \perp Z \mid X, W)_{G_{\bar{X}\bar{Z}(W)}}$$

## Identification Strategies

### Backdoor Criterion
A set $Z$ satisfies the backdoor criterion for $(X, Y)$ if no node in $Z$ is a descendant of $X$, and $Z$ blocks every path between $X$ and $Y$ that contains an arrow into $X$. If $Z$ satisfies it:
$$P(y \mid do(x)) = \sum_z P(y \mid x, z) P(z)$$

### Frontdoor Criterion
If a mediator $M$ exists such that $X \to M \to Y$ and all paths between $X$ and $Y$ are blocked by $M$, while $X$ blocks backdoor paths to $M$:
$$P(y \mid do(x)) = \sum_m P(m \mid x) \sum_{x'} P(y \mid m, x') P(x')$$

## Counterfactuals

Counterfactuals ("What would $Y$ have been if $X$ had been $x$, given that we observed $X=x', Y=y'$?") are computed in three steps:
1. **Abduction:** Update $P(U)$ given observations $(x', y')$.
2. **Action:** Perform intervention $do(X=x)$ by replacing $f_X$ in the SCM.
3. **Prediction:** Compute $P(Y \mid do(x))$ using the updated $P(U \mid x', y')$.

## DERIVATION: Identification of the Frontdoor Formula

Assume $X \to M \to Y$ and an unobserved confounder $U \to X$ and $U \to Y$.
By Rule 3: $P(y \mid do(x)) = \sum_m P(y \mid do(x), do(m)) P(m \mid do(x))$.
By Rule 3, $P(m \mid do(x)) = P(m \mid x)$ since there's no backdoor path to $M$.
By Rule 2, $P(y \mid do(x), do(m)) = P(y \mid x, do(m))$.
By Rule 2, $P(y \mid x, do(m)) = P(y \mid do(m))$ because $X \perp Y \mid M$ in $G_{\underline{M}}$.
Now identify $P(y \mid do(m))$ via backdoor on $X$: $P(y \mid do(m)) = \sum_{x'} P(y \mid m, x') P(x')$.
Combining gives the Frontdoor Formula.

## Related Topics
[[bayesian-networks|Bayesian Networks]] — the probabilistic foundation  
[[causal-inference-trading|Causal Inference in Trading]] — practical applications  
[[potential-outcomes|Potential Outcomes]] — the Rubin causal model  
[[graph-theory|Graph Theory]] — d-separation and paths  
[[m-estimators|M-estimators]] — statistical estimation of effects
