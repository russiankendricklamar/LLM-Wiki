---
title: "Глубокое Обучение с Подкреплением (Deep RL) в Трейдинге"
category: "Машинное Обучение в Финансах"
order: 2
lang: "ru"
slug: "deep-reinforcement-learning-for-trading"
type: "article"
growth: "evergreen"
---

# Глубокое Обучение с Подкреплением (Deep RL) в Трейдинге

Обучение агентов маркет-мейкинга и оптимального исполнения через алгоритмы Deep Reinforcement Learning (PPO, DQN, SAC).

---

## 1. Формулировка MDP (Марковского Процесса Принятия Решений)

- **State Space ($S_t$):** Микроструктурный стакан ордеров L3, текущий инвентарь $q$, нереализованный P&L.
- **Action Space ($A_t$):** Изменение Bid-Ask котировок или нарезка ордеров.
- **Reward Function ($R_t$):** Дифференциальный коэффициент Шарпа (Differential Sharpe Ratio) или PnL с учетом штрафа за инвентарный риск:
  $$R_t = \Delta \text{PnL}_t - \lambda q_t^2 \sigma^2$$

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[machine-learning-for-quant-trading|ML в Квант-Трейдинге]]
- [[quant-market-making-mechanics|Механика Market Making]]
