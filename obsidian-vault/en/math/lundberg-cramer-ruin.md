---
title: "Lundberg-Cramer Ruin Theorem"
category: "Large Deviations"
order: 2
lang: "en"
---

# Lundberg-Cramer Ruin Theorem

Ruin theory is the classical branch of actuarial mathematics studying the probability that an insurance company's capital falls below zero under random claim payments. It is one of the earliest examples of probabilistic methods applied to finance and **one of the first applications of [[large-deviations-cramer|large deviations theory]]** before it was formally established.

Lundberg's result (1903) and its modern formulation by Cramer (1930s) gives the base formula linking the probability of ruin to the exponential moment of the claim distribution. A beautiful example of martingale theory and exponential bounds answering a question of practical importance.

Shiryaev includes this theorem in [[shiryaev-probability|"Probability"]] as an application of martingale methods.

## The Cramer-Lundberg model

The insurance company's capital at time $t$:

$$U(t) = u + ct - S(t),$$

where:

- $u$ is the initial capital,
- $c$ is the constant premium income rate,
- $S(t) = \sum_{i=1}^{N(t)} X_i$ is the aggregate claim amount up to time $t$,
- $N(t)$ is a Poisson process with intensity $\lambda$ (claim arrival times),
- $X_i$ are i.i.d. positive random variables (individual claim sizes) with distribution function $F$ and mean $\mu$.

**Probability of ruin:**
$$\psi(u) = \mathbb{P}(U(t) < 0 \text{ for some } t \geq 0 \mid U(0) = u).$$

**Net profit condition:** $c > \lambda \mu$ (premiums are collected faster than claims are paid on average). Without it $\psi(u) = 1$ for every $u$, i.e. ruin is certain.

## The Lundberg coefficient

**Definition.** The **Lundberg coefficient** $R > 0$ is the unique positive root of the equation

$$\lambda \cdot (\mathbb{E}[e^{R X}] - 1) = c R.$$

Geometrically: the point where the moment generating function of the claims balances the premium rate. Equivalently:

$$\mathbb{E}[e^{R(X - c/\lambda \cdot T)}] = 1,$$

where $T$ is the inter-arrival time (exponential).

For $R$ to exist, the exponential moments $\mathbb{E}[e^{\theta X}]$ must be finite in a neighbourhood of zero. This holds for all **light-tailed** distributions (exponential, Gaussian, gamma, log-normal with small parameters).

## Lundberg-Cramer theorem

**Theorem (Lundberg inequality).** For every $u > 0$:

$$\psi(u) \leq e^{-R u}.$$

The probability of ruin decays **exponentially** in the initial capital, with exponent $R$.

**Exact asymptotics (Cramer, 1930s).** For exponential claim distributions (and under technical conditions, for any light-tailed distributions):

$$\psi(u) \sim C \cdot e^{-R u}, \quad u \to \infty,$$

with an explicitly computable constant $C$.

This is exactly the **large deviation principle** for the capital process: the probability of "catastrophe" decays like $e^{-Ru}$, with $R$ being the rate function at zero.

## Martingale proof

The modern argument is martingale-based. The process

$$M(t) = e^{-R \cdot U(t)}$$

is a martingale thanks to the precise definition of $R$. Applying the optional stopping theorem to the ruin time $\tau = \inf\{t : U(t) < 0\}$ (with suitable regularization) gives:

$$e^{-R u} = \mathbb{E}[M(0)] = \mathbb{E}[M(\tau) \mathbb{1}_{\tau < \infty}] + \mathbb{E}[M(\infty) \mathbb{1}_{\tau = \infty}].$$

The second term vanishes (under positive net profit $U(t) \to \infty$), the first is bounded below by $\psi(u)$, and one obtains the inequality $\psi(u) \leq e^{-Ru}$.

## Connection to large deviations

The Lundberg coefficient $R$ is exactly the **Cramer rate function** for the process $U(t)/t$ at the ruin point. This is an instance of the general principle: **the probability of a rare event decays exponentially with exponent = Cramer rate function**.

The moment generating function $\mathbb{E}[e^{\theta X}]$ appearing in the definition of $R$ is the cumulant function from [[large-deviations-cramer|Cramer's theorem]]. This connection is not accidental: Lundberg-Cramer and the classical large deviations theorem are the same mathematical result in different languages.

## Example computations

**1. Exponential claims.** If $X_i \sim \text{Exp}(1/\mu)$, then $\mathbb{E}[e^{\theta X}] = 1/(1 - \mu\theta)$ for $\theta < 1/\mu$. Substituting into the definition of $R$:

$$\lambda \left(\frac{1}{1 - \mu R} - 1 \right) = c R,$$

which after simplification gives

$$R = \frac{1}{\mu} - \frac{\lambda}{c}.$$

Probability of ruin: $\psi(u) = \frac{\lambda\mu}{c} e^{-R u}$. This is the only case with a fully explicit formula.

**2. Mixture of exponentials.** For a mixture of two exponentials $R$ is found numerically, but $\psi(u) \sim C e^{-R u}$ still holds.

**3. Heavy tails.** For heavy-tailed distributions (Pareto, log-normal with large variance) $\mathbb{E}[e^{\theta X}] = \infty$ for every $\theta > 0$, so $R$ **does not exist**. The probability of ruin then decays **not exponentially**, but like the tail of the claim distribution — a qualitatively different regime.

## Applications

**1. Insurance and reinsurance.** Direct computation of required capital: to have $\psi(u) < \delta$ one needs $u \geq \ln(1/\delta) / R$. This is the basis of reserve capital calculation.

**2. Operational risk (Basel III).** VaR and CVaR for bank operational losses are often modelled via Cramer-Lundberg: claims arrive according to Poisson, sizes are heavy-tailed.

**3. Financial risk management.** For hedge funds and trading strategies, an analogous model applies: P&L = premiums − losses. The probability of drawdown $u$ is $\psi(u)$.

**4. Queueing theory.** Queueing theory uses dual formulas for waiting times in an M/G/1 queue, closely related to Cramer-Lundberg.

**5. Reliability theory.** For systems with exponential failures and constant "repair" the same technique gives probabilities of catastrophic failure.

## Extensions

- **Investment models.** If free capital earns interest, the model becomes more complex but the general exponents are preserved.
- **Non-Poisson claim arrivals.** Renewal processes instead of Poisson: the Lundberg formula generalizes, but $R$ is defined in a more subtle way.
- **Stochastic premiums.** If premiums are random rather than constant, additional conditions are needed.
- **Heavy-tailed distributions.** One uses the theory of regularly varying functions and the "one-big-jump" principle: $\psi(u) \sim \lambda \mu \bar{F}_e(u) / (c - \lambda\mu)$, where $\bar{F}_e$ is the integrated tail.

## Historical context

- **Filip Lundberg (1876-1965)** — Swedish actuary, thesis of 1903 containing the first formulation of the inequality. Worked before the formal emergence of martingale theory.
- **Harald Cramer (1893-1985)** — generalized and proved the asymptotic formulas in the 1930s, within the Swedish actuarial school.
- **Modern formulations** (via martingales and large deviations) — 1960-1970s, by Grimmett, Asmussen, Embrechts.

## Limitations

- The light-tail requirement is essential: for heavy tails $R$ does not exist and the formula is replaced by another.
- The model is purely diffusive: random fluctuations of capital from investments are ignored.
- A deterministic premium rate is a simplification; in reality premiums depend on market conditions.

## Related Articles

- [[large-deviations-cramer]] — general theory to which Lundberg-Cramer reduces.
- Poisson process — base ingredient of the model.
- [[discrete-martingales]] — the martingale $e^{-RU(t)}$ is the key to the proof.
- [[stable-distributions]] — heavy-tail regime, alternative approach.
- [[extreme-value-theory]] — another paradigm for rare events.
- [[value-at-risk]] — practical application in risk management.
- [[shiryaev-probability]] — source textbook.
