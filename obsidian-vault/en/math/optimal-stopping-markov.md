---
title: "Optimal Stopping of Markov Chains"
category: "Martingale Theory"
order: 3
lang: "en"
---

# Optimal Stopping of Markov Chains

Optimal stopping theory sits at the intersection of probability, dynamic programming, and finance. Given a random process $(X_n)$ and a payoff function $g$, find a stopping time $\tau$ (a random time depending on the observed history) maximizing the expected payoff $\mathbb{E}[g(X_\tau)]$.

This is the precise mathematical framework for problems like "when to sell a stock," "when to exercise an American option," "when to stop an experiment." Shiryaev's [[shiryaev-probability|"Probability"]] contains a complete treatment for Markov chains — and Shiryaev himself was one of the main classics of the theory (his book "Statistical Sequential Analysis" is an early monograph on the subject).

## Setup

Let $(X_n)_{n \geq 0}$ be a [[discrete-markov-chains|Markov chain]] on a state space $S$ with transition matrix $P$, and $g : S \to \mathbb{R}$ a payoff function. The **value function** at state $i$ is

$$V(i) = \sup_\tau \mathbb{E}_i[g(X_\tau)],$$

where the supremum runs over all finite stopping times $\tau$ with respect to the natural filtration $(\mathcal{F}_n)$.

A stopping time $\tau^*$ is **optimal** if $\mathbb{E}_i[g(X_{\tau^*})] = V(i)$ for every $i$.

## Structure of the problem

**Observation 1.** $V(i) \geq g(i)$ always (one can stop immediately, $\tau = 0$).

**Observation 2.** $V(i) \geq \sum_j p_{ij} V(j)$ (one can take one step and then continue optimally).

So $V$ is a **superharmonic** function for the operator $P$: $V \geq P V$. Moreover $V \geq g$. This suggests the definition:

**Definition.** The **optimal value** $V$ is the **smallest** superharmonic function dominating $g$:

$$V = \inf \{h : h \geq g, h \geq Ph\}.$$

A generalization of the Snell envelope for Markov chains.

## Bellman equation

**Theorem.** The value $V$ satisfies the **Bellman optimality equation**:

$$V(i) = \max\!\left(g(i), \sum_j p_{ij} V(j) \right).$$

Two choices: **stop now** (value $g(i)$) or **continue one step** (expected value $\sum_j p_{ij} V(j)$). Take the max.

**Stopping region:** the states where it is optimal to stop:
$$D = \{i : V(i) = g(i)\}.$$

**Continuation region:**
$$C = \{i : V(i) > g(i)\}.$$

**Optimal stopping time:**
$$\tau^* = \inf\{n \geq 0 : X_n \in D\}$$
— the first time the chain hits the stopping region.

## Backward induction (finite horizon)

For a finite horizon $n$ the problem is solved by direct backward induction:

$$V_n(i) = g(i), \quad V_{k-1}(i) = \max\!\left(g(i), \sum_j p_{ij} V_k(j) \right).$$

Start at the last moment, work backwards. This is **dynamic programming** in its purest form. The connection to Bellman, Bollob ás, Howard comes from here.

## Infinite horizon

For the infinite horizon, the Bellman equation is a **fixed point** of the operator

$$(T V)(i) = \max\!\left(g(i), \sum_j p_{ij} V(j) \right).$$

**Theorem.** If $g$ is bounded and the chain is "sufficiently regular" (e.g. finite), then the iterations $V_{n+1} = T V_n$, starting from $V_0 = g$, converge to $V$.

## Connection to martingales

**Theorem (martingale representation).** If $V$ is the value of the optimal stopping problem, the process $V(X_n)$ is itself a **supermartingale**, and the stopped process $V(X_{n \wedge \tau^*})$ is a martingale.

This is the core link between optimal stopping and martingales: the optimal $\tau^*$ is precisely the time at which the supermartingale $V(X_n)$ stops strictly decreasing and becomes "frozen." Snell envelope theory systematizes this link.

## Classical example: the secretary problem

$n$ candidates arrive in random order. After each candidate one must decide — accept or continue. No going back. The goal is to select the **best** candidate.

Optimal strategy:
- Reject the first $n/e \approx 37\%$ of candidates (pure observation).
- Then pick the first one better than all seen so far.

Probability of success: $1/e \approx 0.368$.

This is a classical result (Gardner, 1960s). It is formulated precisely as an optimal stopping problem on a Markov chain of "ranks." The method is the Bellman equation with backward induction.

## American options

**Problem.** An American option gives the right (but not the obligation) to realize a payoff $g(X_n)$ at any time $n \leq T$. The option price is

$$V = \sup_{\tau \leq T} \mathbb{E}^\mathbb{Q}[e^{-r\tau} g(X_\tau)],$$

where $\mathbb{Q}$ is the risk-neutral measure and $r$ the rate. This is exactly an optimal stopping problem for the discounted process.

**Optimal strategy:** hold the option while $V(X_n) > g(X_n)$ and exercise when $V(X_n) = g(X_n)$.

This is the **main practical motivation** for studying optimal stopping: American call/put in the CRR model (see [[crr-model]]) or the binomial model is the standard application.

## Shiryaev's "best candidate" problems

Shiryaev is known for his optimal stopping problems in sequential analysis:

- **Selecting the best observation** (variation of the secretary problem).
- **Stopping Wald's statistical test** — when to stop collecting data and make a decision?
- **Quickest detection of a regime change** — in a stream of observations, when is the moment of "change"?

All of these are formulated as optimal stopping on Markov chains with specific state-space structure.

## Penalty method and variational inequality

In continuous time the Bellman equation becomes a **variational inequality**:

$$\max(L V, g - V) = 0,$$

where $L$ is the generator of the continuous Markov process. This is the PDE formulation of American options in the Black-Scholes model: a free boundary defining the continuation region.

Numerical methods for VIs: PSOR, projection methods, finite differences with early-exercise checks.

## Applications

**1. Finance.** American options, capped options, early-exercise features. The main industrial problem.

**2. Statistics.** Wald's sequential analysis — when to stop an experiment? Optimal stopping for SPRT.

**3. Economics.** The theory of real options (Dixit-Pindyck): when to invest in a project? Optimal stopping for stochastic NPV.

**4. Quality control and maintenance.** When to replace equipment? When to audit? Problems of Markov optimal stopping.

**5. Machine learning.** Early stopping in model training, choosing when to terminate an A/B test. Bayesian exploration/exploitation algorithms (bandit problems) are optimal stopping with partial information.

**6. Defense and medicine.** When to stop a statistical study of a drug? When to launch an interceptor?

## Limitations

- In complex state spaces the curse of dimensionality strikes: $V$ must be computed at every state.
- For continuous state spaces one needs discretization or an analytic solution to the VI — nontrivial numerical problems.
- Optimal stopping assumes a known process structure; under uncertainty one needs Bayesian extensions.
- Problems with multi-component payoffs (multi-stopping, stopping of multiple processes) require more elaborate techniques.

## Related Articles

- [[discrete-markov-chains]] — base structure (value functions are defined for Markov chains).
- [[discrete-martingales]] — supermartingale representation of the value.
- dynamic programming — general methodology.
- [[optimal-stopping-american]] — main financial application.
- [[crr-model]] — binomial model for discrete optimal stopping.
- [[black-scholes-derivations]] — continuous analogue as a variational inequality.
- [[reinforcement-learning]] — generalization to MDPs with actions and rewards.
- [[shiryaev-probability]] — source textbook, rich in examples.
