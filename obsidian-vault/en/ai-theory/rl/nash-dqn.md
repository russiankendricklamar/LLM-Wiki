---
title: "Nash-DQN"
category: "ai-theory/rl"
order: 197
lang: "en"
slug: "nash-dqn"
---

# Nash-DQN

[[Nash-DQN]] extends Q-learning to multi-agent general-sum games. It updates Q-values based on the Nash equilibrium of the stage game defined by current Q-values: $Q_i^{k+1}(s,a) = r_i + \gamma \text{Nash}_i(Q^k(s', \cdot))$.
