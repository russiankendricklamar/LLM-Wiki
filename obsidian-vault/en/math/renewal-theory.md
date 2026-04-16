---
title: "Renewal Theory"
category: "Applied Probability"
order: 1
lang: "en"
---

# Renewal Theory

Renewal theory studies the behaviour of counting processes built from i.i.d. positive random variables. The framework is deceptively simple — partial sums of non-negative increments — yet it produces limit theorems, integral equations, and paradoxes that permeate queueing theory, reliability engineering, and insurance mathematics. Borovkov develops the theory systematically as a tool for analysing regenerative phenomena, connecting it to the [[law-of-large-numbers|law of large numbers]], [[large-deviations-cramer|large deviations]], and the [[lundberg-cramer-ruin|ruin problem]].

## The renewal process

Let $X_1, X_2, \ldots$ be i.i.d. positive random variables (inter-renewal times) with distribution $F$ and finite mean $\mu = \mathbb{E}[X_1] > 0$. The **partial sums** $S_n = X_1 + \cdots + X_n$ are the renewal epochs. The **renewal counting process** is

$$N(t) = \max\{n \geq 0 : S_n \leq t\}, \quad t \geq 0.$$

The **renewal function** $U(t) = \mathbb{E}[N(t)]$ encodes the expected number of renewals up to time $t$. It satisfies the fundamental **renewal equation**:

$$U(t) = F(t) + \int_0^t U(t - s)\, dF(s).$$

This is a convolution equation whose solution is the **renewal measure** $U = \sum_{n=0}^{\infty} F^{*n}$, where $F^{*n}$ denotes the $n$-fold convolution of $F$.

## Elementary renewal theorem

**Theorem.** As $t \to \infty$,

$$\frac{N(t)}{t} \to \frac{1}{\mu} \quad \text{a.s.}, \qquad \frac{U(t)}{t} \to \frac{1}{\mu}.$$

The first statement is an immediate consequence of the [[law-of-large-numbers|strong law of large numbers]] applied to $S_n / n \to \mu$, inverted to $N(t)/t \to 1/\mu$. The second extends convergence to expectations and requires a uniform integrability argument.

**Proof sketch.** Since $S_{N(t)} \leq t < S_{N(t)+1}$, dividing by $N(t)$ and using $S_n/n \to \mu$ a.s. gives $\mu \leq \liminf t/N(t) \leq \limsup t/N(t) \leq \mu$. The passage from a.s. convergence of $N(t)/t$ to convergence of $U(t)/t = \mathbb{E}[N(t)]/t$ uses Wald's identity and the finiteness of $\mathbb{E}[X_1^2]$ (or a truncation argument when only $\mathbb{E}[X_1] < \infty$).

## Blackwell's theorem and the key renewal theorem

**Blackwell's theorem.** If $F$ is non-lattice, then for every $h > 0$,

$$U(t + h) - U(t) \to \frac{h}{\mu}, \quad t \to \infty.$$

In the lattice case (support on $d\mathbb{Z}$), one has $U(nd) - U((n-1)d) \to d/\mu$.

**Key renewal theorem (Smith).** If $g$ is a directly Riemann integrable function, then the solution of the renewal equation $Z(t) = g(t) + \int_0^t Z(t-s)\,dF(s)$ satisfies

$$Z(t) \to \frac{1}{\mu} \int_0^\infty g(s)\, ds, \quad t \to \infty.$$

Smith's theorem follows from Blackwell's theorem and is the principal tool for extracting asymptotics from renewal-type convolution equations. The proof relies on coupling or Fourier-analytic arguments combined with the structure of the renewal measure.

**Direct Riemann integrability** means that $g$ is Riemann integrable on every finite interval and $\sum_{n=0}^{\infty} \sup_{x \in [nh, (n+1)h]} |g(x)| \cdot h < \infty$ for some (hence every) $h > 0$. This is a mild regularity condition satisfied by all bounded $g$ that decay at infinity.

## Overshoot, undershoot, and the inspection paradox

Define the **excess life** (overshoot) $\gamma(t) = S_{N(t)+1} - t$ and the **current life** (age) $\delta(t) = t - S_{N(t)}$. The **spread** is $\gamma(t) + \delta(t) = X_{N(t)+1}$.

**Theorem.** Under the key renewal theorem hypotheses,

$$\mathbb{P}(\gamma(t) > x) \to \frac{1}{\mu}\int_x^\infty \overline{F}(u)\, du, \quad t \to \infty,$$

where $\overline{F} = 1 - F$. The limiting distribution of the spread is the **size-biased** distribution $F_s$ with density $f_s(x) = x f(x)/\mu$.

**The inspection paradox.** If one arrives at a "random" time $t$ (large), the interval containing $t$ has expected length $\mathbb{E}[X^2]/(2\mu)$, which exceeds $\mu$ whenever $\text{Var}(X) > 0$. Longer intervals are more likely to be "hit" by a random inspection — a manifestation of length-biased sampling.

## Renewal reward theorem

Suppose rewards $R_n$ are collected at each renewal, with $\mathbb{E}[|R_1|] < \infty$. Then

$$\frac{\sum_{k=1}^{N(t)} R_k}{t} \to \frac{\mathbb{E}[R_1]}{\mu} \quad \text{a.s.}$$

This "rate = expected reward per cycle / expected cycle length" identity is the workhorse of applied probability: average cost in replacement policies, throughput in production systems, long-run server utilisation.

**Example.** A light bulb has random lifetime $X$ with $\mathbb{E}[X] = 1000$ hours. A burned-out bulb costs \$5 to replace; a preventive replacement at age $T$ costs \$1. The long-run cost rate is $C(T) = [\$1 \cdot \mathbb{P}(X > T) + \$5 \cdot \mathbb{P}(X \leq T)] / \mathbb{E}[\min(X, T)]$. Minimising $C(T)$ over $T$ gives the optimal age-replacement policy.

## Delayed and stationary renewal processes

In a **delayed** (or **modified**) renewal process, the first inter-renewal time $X_0$ has a different distribution $G$ while subsequent ones follow $F$. This is natural when the process is observed from an arbitrary time rather than from a renewal epoch.

A renewal process is **stationary** (or **equilibrium**) if $G(x) = \mu^{-1}\int_0^x \overline{F}(u)\,du$, i.e., the first interval follows the equilibrium distribution. In this case $\mathbb{E}[N(t)] = t/\mu$ exactly for all $t$ — not just asymptotically — and the process is time-stationary in the sense that the renewal times form a stationary point process. The equilibrium renewal process arises naturally as the Palm version of renewal theory and connects to [[ergodic-theorems-birkhoff|ergodic theory]].

## Applications

**1. Replacement and maintenance policies.** A component with lifetime distribution $F$ is replaced upon failure (cost $c_f$) or at a planned age $T$ (cost $c_p < c_f$). The renewal reward theorem yields the optimal $T$ minimising long-run cost rate.

**2. The M/G/1 queue.** Service completions form a renewal process embedded in the busy cycle. Renewal arguments give the Pollaczek-Khinchine formula for the mean waiting time $\mathbb{E}[W] = \lambda \mathbb{E}[S^2] / (2(1-\rho))$, connecting to [[wiener-hopf-factorization|Wiener-Hopf methods]].

**3. Insurance and ruin.** Claim arrivals in the Cramer-Lundberg model form a Poisson (hence renewal) process. Renewal equations underlie the derivation of the ruin probability, linking directly to the [[lundberg-cramer-ruin|Lundberg-Cramer theorem]].

**4. Regenerative simulation.** A regenerative process is one that probabilistically restarts at renewal times. The renewal reward theorem justifies ratio estimators for steady-state quantities in MCMC and discrete-event simulation.

**5. Reliability theory.** System availability = fraction of time in the "up" state = $\mathbb{E}[\text{uptime}] / (\mathbb{E}[\text{uptime}] + \mathbb{E}[\text{repair time}])$, a direct application of the renewal reward theorem.

## Laplace transform methods

The renewal equation is most naturally solved via the Laplace transform. Writing $\hat{U}(s) = \int_0^\infty e^{-st}\, dU(t)$ and $\hat{F}(s) = \mathbb{E}[e^{-sX_1}]$, the renewal equation becomes

$$\hat{U}(s) = \frac{\hat{F}(s)}{1 - \hat{F}(s)}.$$

This algebraic identity encodes the full renewal measure. Tauberian theorems (Karamata, de Haan) then translate the behaviour of $\hat{U}(s)$ as $s \to 0$ into the asymptotic behaviour of $U(t)$ as $t \to \infty$, providing an alternative route to the elementary and key renewal theorems.

For heavy-tailed inter-renewal distributions with $\overline{F}(t) \sim t^{-\alpha} L(t)$ for $\alpha \in (0,1)$ and $L$ slowly varying, the renewal function satisfies $U(t) \sim t^\alpha / (\Gamma(1+\alpha) L(t))$ — a qualitatively different regime from the light-tailed $U(t) \sim t/\mu$.

## Related Articles

- [[law-of-large-numbers]] — the SLLN is the engine behind the elementary renewal theorem.
- [[lundberg-cramer-ruin]] — ruin probabilities via renewal equations.
- [[wiener-hopf-factorization]] — deeper analysis of random walk maxima arising in queueing.
- [[discrete-markov-chains]] — regeneration times in Markov chains are renewal times.
- [[ergodic-theorems-birkhoff]] — Birkhoff's theorem generalises the renewal reward idea.
- [[large-deviations-cramer]] — large deviations refine the LLN underlying renewal theory.
- [[characteristic-functions]] — Fourier methods in the proof of Blackwell's theorem.
- [[branching-processes]] — renewal structure appears in branching with immigration.
