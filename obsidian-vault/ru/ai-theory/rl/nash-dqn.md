---
title: "Nash-DQN"
category: "ai-theory/rl"
order: 197
lang: "ru"
slug: "nash-dqn"
---

# Nash-DQN

[[Nash-DQN]] расширяет Q-обучение на многоагентные игры с произвольной суммой. Q-значения обновляются на основе равновесия Нэша: $Q_i^{k+1}(s,a) = r_i + \gamma \text{Nash}_i(Q^k(s', \cdot))$.
