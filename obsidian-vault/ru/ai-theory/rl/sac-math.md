---
title: 'Обучение с подкреплением: Soft Actor-Critic (SAC)'
category: AI Theory
order: 166
lang: ru
slug: sac-math
---

Soft Actor-Critic (SAC) — это off-policy алгоритм, основанный на принципе максимальной энтропии.

### Цель максимальной энтропии
SAC максимизирует и ожидаемую награду, и энтропию политики:
$J(\pi) = \sum_{t=0}^T \mathbb{E}_{(s_t, a_t) \sim \rho_\pi} [r(s_t, a_t) + \alpha \mathcal{H}(\pi(\cdot|s_t))]$
где $\alpha$ — параметр температуры, контролирующий исследование среды.

### Мягкие уравнения Беллмана
Мягкая Q-функция включает энтропию:
$Q(s_t, a_t) = r_t + \gamma \mathbb{E}_{s_{t+1}}[V(s_{t+1})]$
$V(s_t) = \mathbb{E}_{a_t \sim \pi}[Q(s_t, a_t) - \alpha \log \pi(a_t|s_t)]$
Политика $\pi_\phi$ обучается путем минимизации KL-дивергенции к экспонированной мягкой Q-функции.
