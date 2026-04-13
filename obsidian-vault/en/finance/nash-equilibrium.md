---
title: "Nash Equilibrium"
category: "Algorithms and ML"
order: 113
lang: "en"
---
# Nash Equilibrium

**Nash Equilibrium** is a fundamental concept in game theory where no player can benefit by changing their strategy while the other players keep theirs unchanged. It represents a state of stability in a non-cooperative game.

## Theoretical Foundation

Named after John Nash, this concept applies to situations where multiple decision-makers (players) interact. A set of strategies is a Nash Equilibrium if each player's strategy is an optimal response to the strategies of all other players.

Key definitions:
- **Pure Strategy**: A complete plan of action for a player.
- **Mixed Strategy**: A probability distribution over pure strategies.
- **Zero-Sum Game**: A game where one player's gain is exactly equal to another's loss.

## Mathematical Formulation

In a game with $n$ players, let $S_i$ be the set of strategies for player $i$, and $u_i(s_1, \dots, s_n)$ be the payoff for player $i$. A strategy profile $s^* = (s_1^*, \dots, s_n^*)$ is a Nash Equilibrium if:

$$ \forall i, \forall s_i \in S_i : u_i(s_i^*, s_{-i}^*) \geq u_i(s_i, s_{-i}^*) $$

Where $s_{-i}^*$ represents the strategies of all players except $i$. Nash proved that every finite game has at least one equilibrium in mixed strategies.

## Practical Relevance in Finance

Nash Equilibrium is vital for understanding market dynamics and institutional behavior:
- **Market Microstructure**: Modeling the interaction between liquidity providers and aggressive traders in an order book.
- **Algorithmic Trading**: Analyzing "arms races" in HFT where firms compete for latency advantages.
- **Auction Theory**: Designing and bidding in Treasury auctions or private equity buyouts.
- **Systemic Risk**: Understanding bank runs or liquidity crises as a shift between multiple equilibria.
- **Oligopoly Models**: Predicting price wars and production levels in markets with few dominant players (e.g., Cournot or Bertrand competition).

## Python: Finding Equilibrium in a 2x2 Game

```python
import numpy as np

def find_pure_nash(payoff_matrix_a, payoff_matrix_b):
    # payoff_matrix_a: payoffs for player A
    # payoff_matrix_b: payoffs for player B
    
    n_rows, n_cols = payoff_matrix_a.shape
    equilibria = []
    
    for i in range(n_rows):
        for j in range(n_cols):
            # Check if A's choice is best response to B's j
            is_a_best = payoff_matrix_a[i, j] == np.max(payoff_matrix_a[:, j])
            # Check if B's choice is best response to A's i
            is_b_best = payoff_matrix_b[i, j] == np.max(payoff_matrix_b[i, :])
            
            if is_a_best and is_b_best:
                equilibria.append((i, j))
                
    return equilibria

# Prisoner's Dilemma Example
# (C, C) -> (-1, -1), (D, C) -> (0, -3), (C, D) -> (-3, 0), (D, D) -> (-2, -2)
A = np.array([[-1, -3], [0, -2]])
B = np.array([[-1, 0], [-3, -2]])

print(f"Nash Equilibrium (indices): {find_pure_nash(A, B)}")
```

## Related Topics
- [[optimal-execution]]
- [[market-impact-scaling]]
- [[adversarial-stress-testing]]
- [[monte-carlo-method]]
