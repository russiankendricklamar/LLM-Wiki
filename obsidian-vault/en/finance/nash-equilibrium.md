---
title: "Nash Equilibrium"
category: "Algorithms and ML"
order: 113
lang: "en"
---
# Nash Equilibrium

**Nash Equilibrium** is a fundamental concept in game theory where no player can benefit by changing their strategy while the other players keep theirs unchanged. It represents a state of stability in a non-cooperative game.

## Background and History

John Nash proved in his 1950 doctoral dissertation that every finite game has at least one equilibrium in mixed strategies — a result that earned him the Nobel Memorial Prize in Economic Sciences in 1994. Prior work by von Neumann and Morgenstern (1944) had established the minimax theorem for zero-sum games, but Nash's contribution extended equilibrium analysis to the far richer class of non-zero-sum games.

In financial markets, Nash equilibrium provides the theoretical underpinning for understanding strategic interactions between market participants: competing market makers, HFT firms in a latency arms race, institutional investors coordinating (or failing to coordinate) during a crisis, and regulators designing rules that account for strategic regulatory arbitrage.

## Theoretical Foundation

Named after John Nash, this concept applies to situations where multiple decision-makers (players) interact. A set of strategies is a Nash Equilibrium if each player's strategy is an optimal response to the strategies of all other players.

Key definitions:
- **Pure Strategy**: A complete deterministic plan of action for a player.
- **Mixed Strategy**: A probability distribution over pure strategies.
- **Zero-Sum Game**: A game where one player's gain is exactly equal to another's loss.
- **Best Response**: The strategy that maximizes a player's payoff given the strategies of others.

## Mathematical Formulation

In a game with $n$ players, let $S_i$ be the set of strategies for player $i$, and $u_i(s_1, \dots, s_n)$ be the payoff for player $i$. A strategy profile $s^* = (s_1^*, \dots, s_n^*)$ is a Nash Equilibrium if:

$$ \forall i, \forall s_i \in S_i : u_i(s_i^*, s_{-i}^*) \geq u_i(s_i, s_{-i}^*) $$

Where $s_{-i}^*$ represents the strategies of all players except $i$.

For mixed strategies, each player $i$ randomizes over $S_i$ with probability distribution $\sigma_i$. At equilibrium, every pure strategy that is played with positive probability must be a best response:

$$
\sigma_i(s_i) > 0 \implies s_i \in \arg\max_{s_i'} u_i(s_i', \sigma_{-i}^*)
$$

## Computing Mixed Strategy Equilibria

For a two-player zero-sum game with payoff matrix $A$ (player 1's payoffs), the Nash equilibrium is the solution to a linear program:

$$
\max_{p \in \Delta^m} \min_{q \in \Delta^n} p^\top A q
$$

This is equivalent to the minimax theorem: $\max_p \min_q p^\top A q = \min_q \max_p p^\top A q$.

For general-sum games, the Lemke-Howson algorithm or support enumeration finds equilibria, though finding all equilibria is PPAD-complete.

## Practical Relevance in Finance

Nash Equilibrium is vital for understanding market dynamics and institutional behavior:
- **Market Microstructure**: Modeling the interaction between liquidity providers and aggressive traders in an order book.
- **Algorithmic Trading**: Analyzing "arms races" in HFT where firms compete for latency advantages.
- **Auction Theory**: Designing and bidding in Treasury auctions or private equity buyouts.
- **Systemic Risk**: Understanding bank runs or liquidity crises as a shift between multiple equilibria.
- **Oligopoly Models**: Predicting price wars and production levels in markets with few dominant players (Cournot or Bertrand competition).

## Market Making as a Game

In the Avellaneda-Stoikov market making model, the bid-ask spread set by a market maker can be analyzed through a game-theoretic lens. If $N$ identical market makers compete, at equilibrium each quotes a spread that balances adverse selection risk against the risk of losing order flow to competitors. As $N \to \infty$, the equilibrium spread approaches the minimum viable spread (covering adverse selection costs only), explaining why fragmented markets with many market makers exhibit tight spreads.

## Python: Finding Equilibria in a 2x2 Game

```python
import numpy as np
from scipy.optimize import linprog


def find_pure_nash(payoff_matrix_a, payoff_matrix_b):
    """Find all pure strategy Nash equilibria of a bimatrix game."""
    n_rows, n_cols = payoff_matrix_a.shape
    equilibria = []

    for i in range(n_rows):
        for j in range(n_cols):
            is_a_best = payoff_matrix_a[i, j] == np.max(payoff_matrix_a[:, j])
            is_b_best = payoff_matrix_b[i, j] == np.max(payoff_matrix_b[i, :])
            if is_a_best and is_b_best:
                equilibria.append((i, j))

    return equilibria


def find_mixed_nash_zerosum(A):
    """
    Find the mixed strategy Nash equilibrium of a zero-sum game.
    A: payoff matrix for row player (column player gets -A).
    Returns (p_opt, q_opt, value).
    """
    m, n = A.shape

    # Maximize v subject to A^T p >= v*1, p in simplex
    # Reformulate: min -v; A^T p - v*1 >= 0; sum(p)=1, p>=0
    # Variables: [p_1,...,p_m, v]
    c = np.zeros(m + 1)
    c[-1] = -1.0  # minimize -v = maximize v

    # A^T p - v >= 0 => -A^T p + v*1 <= 0
    A_ub = np.hstack([-A.T, np.ones((n, 1))])
    b_ub = np.zeros(n)

    A_eq = np.ones((1, m + 1))
    A_eq[0, -1] = 0  # sum(p) = 1
    b_eq = np.array([1.0])

    bounds = [(0, None)] * m + [(None, None)]

    res = linprog(c, A_ub=A_ub, b_ub=b_ub, A_eq=A_eq, b_eq=b_eq,
                  bounds=bounds, method='highs')

    p_opt = res.x[:m]
    value = res.x[-1]

    # Column player's optimal mixed strategy (solve dual)
    c2 = np.zeros(n + 1)
    c2[-1] = 1.0  # minimize v (= column player maximizes their payoff)

    A_ub2 = np.hstack([A, -np.ones((m, 1))])
    b_ub2 = np.zeros(m)

    A_eq2 = np.ones((1, n + 1))
    A_eq2[0, -1] = 0
    b_eq2 = np.array([1.0])

    bounds2 = [(0, None)] * n + [(None, None)]
    res2 = linprog(c2, A_ub=A_ub2, b_ub=b_ub2, A_eq=A_eq2, b_eq=b_eq2,
                   bounds=bounds2, method='highs')
    q_opt = res2.x[:n]

    return p_opt, q_opt, value


# Prisoner's Dilemma (non-zero-sum)
A = np.array([[-1.0, -3.0], [0.0, -2.0]])
B = np.array([[-1.0,  0.0], [-3.0, -2.0]])
print("Pure Nash Equilibria:", find_pure_nash(A, B))

# Matching Pennies (zero-sum)
# Row: Heads/Tails; Column: Heads/Tails
M = np.array([[1.0, -1.0], [-1.0, 1.0]])
p, q, v = find_mixed_nash_zerosum(M)
print(f"\nMatching Pennies mixed NE: p={p}, q={q}, value={v:.4f}")
# Expected: p=[0.5, 0.5], q=[0.5, 0.5], value=0
```

## Parameter Table

| Concept | Description | Financial Example |
|:---|:---|:---|
| Pure strategy NE | Deterministic equilibrium | Dominant strategy in auction |
| Mixed strategy NE | Randomized equilibrium | Market maker quote selection |
| Pareto optimal | No player can improve without hurting another | Cooperative outcome in crisis |
| Dominant strategy | Best regardless of others | HFT co-location arms race |
| Focal point | Equilibrium selected by convention | Round-number price clustering |

## Limitations and Extensions

- **Multiple equilibria**: Most games have many Nash equilibria; equilibrium selection (risk dominance, payoff dominance, trembling-hand perfection) is needed to predict which one emerges.
- **Rationality assumption**: Nash equilibrium assumes common knowledge of rationality — violated in behavioral finance by cognitive biases, herding, and limited computation.
- **Dynamic games**: Repeated games exhibit cooperation through the "folk theorem" (infinite repetition allows Pareto-superior outcomes), explaining long-term market maker relationships.
- **Evolutionary game theory**: Replaces rationality with selection pressure — fitter strategies survive. Relevant for modeling algorithmic strategy evolution in competitive markets.
- **Mean-field games**: When $N \to \infty$ players are identical and interact only through aggregate statistics, the equilibrium problem reduces to a coupled system of PDEs, applicable to large-population trading models.

## Related Topics
- [[optimal-execution]]
- [[market-impact-scaling]]
- [[adversarial-stress-testing]]
- [[monte-carlo-method]]
- [[avellaneda-stoikov]]
