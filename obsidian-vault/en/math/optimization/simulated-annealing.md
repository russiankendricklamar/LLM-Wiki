---
title: 'Optimization: Simulated Annealing'
category: Advanced Math and Stats
order: 185
lang: en
slug: simulated-annealing
---

Simulated Annealing (SA) is a probabilistic technique for approximating the global optimum of a given function, escaping local minima.

### Metropolis-Hastings Acceptance
At each step, SA considers a neighboring state $s'$. If the energy (objective function) $E(s')$ is lower than $E(s)$, the state is accepted. If it is higher, it is accepted with a probability depending on the temperature $T$:
$P(s \to s') = \exp \left( -\frac{E(s') - E(s)}{T} \right)$

### Cooling Schedule
The temperature $T$ gradually decreases according to a cooling schedule (e.g., $T_{k+1} = \alpha T_k$ with $\alpha < 1$). Initially, at high $T$, the system explores widely. As $T \to 0$, it behaves like a greedy hill-climbing algorithm, converging to a minimum. Logarithmic cooling schedules theoretically guarantee convergence to the global minimum, but are impractically slow.
