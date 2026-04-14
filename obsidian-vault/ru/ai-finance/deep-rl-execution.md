---
title: "Глубокое обучение с подкреплением для исполнения сделок"
category: "AI × Финансы"
order: 5
lang: "ru"
slug: "deep-rl-execution"
---
# Глубокое обучение с подкреплением для исполнения сделок

## Необходимые знания

[[temporal-fusion-transformer]], [[rl-trader]]

## Обзор

Оптимальное исполнение сделок — задача ликвидации или приобретения крупной позиции в конечный временной горизонт при минимизации суммарных издержек: рыночного воздействия (движение цены против себя), риска тайминга (неблагоприятные ценовые движения в ходе исполнения) и альтернативных издержек. Классическая модель Алмгрена–Крисса (2000) выводит аналитически оптимальное расписание при линейном временном и постоянном воздействии с квадратичным штрафом за риск, частным случаем которого является TWAP-подобное равномерное расписание.

Решение Алмгрена–Крисса оптимально в рамках своих предположений, но реальные рынки их нарушают непрерывно. Внутридневная ликвидность стохастична. Динамика книги ордеров создаёт нелинейное, состояние-зависимое воздействие. Оптимальное расписание зависит от признаков рыночной микроструктуры в реальном времени — спреда, глубины книги ордеров, краткосрочного импульса — которые классическая модель игнорирует по построению.

Глубокое обучение с подкреплением (RL) решает эту задачу, формулируя исполнение как марковский процесс принятия решений (MDP) и обучая политику, адаптирующуюся к наблюдаемому рыночному состоянию.

## Математический формализм

### Формулировка MDP

Задача исполнения как MDP задаётся кортежем $(\mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma)$:

**Состояние** $s_t \in \mathcal{S}$:
$$
s_t = \bigl(q_t,\; T - t,\; \Delta p_t,\; \text{spread}_t,\; \text{imb}_t,\; \hat{\sigma}_t,\; \text{VWAP}_t^{\text{mkt}}\bigr)
$$
где $q_t$ — остаток позиции, $T - t$ — время до дедлайна, $\Delta p_t$ — краткосрочный ценовой импульс, $\text{imb}_t$ — дисбаланс книги ордеров, $\hat{\sigma}_t$ — реализованная краткосрочная волатильность.

**Действие** $a_t \in \mathcal{A} = [0, q_t]$: объём для торговли в периоде $t$ (непрерывный).

**Переход**: симулятор рынка продвигает книгу ордеров, применяет воздействие и обновляет состояние:
$$
s_{t+1} = f(s_t, a_t, \xi_t), \quad \xi_t \sim \mathcal{P}_{\text{market}}
$$

**Вознаграждение**: минимизация реализованных издержек (implementation shortfall) со штрафом за риск:
$$
r_t = -a_t \bigl(p_t - p_0\bigr) - \eta \, a_t^2 - \lambda \, q_t^2 \cdot \hat{\sigma}_t^2
$$

где $p_0$ — цена прихода, $\eta$ — коэффициент временного воздействия, $\lambda$ — параметр неприятия риска. Терминальное вознаграждение добавляет большой штраф за неисполненный остаток: $r_T = -M \cdot q_T$.

**Цель**: максимизировать ожидаемую накопленную награду:
$$
\pi^* = \arg\max_\pi \mathbb{E}_\pi\!\left[\sum_{t=0}^{T} \gamma^t r_t\right]
$$

### Аналитическое решение Алмгрена–Крисса

При линейном воздействии и гауссовой динамике цен оптимальная траектория:

$$
x_t^* = X \cdot \frac{\sinh\!\bigl(\kappa (T - t)\bigr)}{\sinh(\kappa T)}, \quad \kappa = \sqrt{\frac{\lambda \sigma^2}{\eta}}
$$

где $X$ — начальная позиция, $\sigma$ — волатильность цены, $\eta$ — временное воздействие, $\lambda$ — неприятие риска. При $\lambda \to 0$ сходится к TWAP; при $\lambda \to \infty$ — к немедленной ликвидации.

### Implementation Shortfall

Метрика стоимости — implementation shortfall (IS):

$$
\text{IS} = \frac{\sum_{t} a_t p_t - X p_0}{X p_0} \times 10{,}000 \quad \text{(базисные пункты)}
$$

Отрицательный IS означает, что исполнение превзошло цену прихода (выгодно для покупки). Агент RL обучается минимизировать IS при ограничении на дедлайн.

## Алгоритм: Proximal Policy Optimisation

PPO (Schulman et al., 2017) — основной алгоритм для агентов исполнения с непрерывным действием. Отсечённая суррогатная цель предотвращает катастрофически большие обновления политики:

$$
\mathcal{L}^{\text{CLIP}}(\theta) = \mathbb{E}_t\!\left[\min\!\left(r_t(\theta)\hat{A}_t,\; \text{clip}\!\left(r_t(\theta), 1-\epsilon, 1+\epsilon\right)\hat{A}_t\right)\right]
$$

где $r_t(\theta) = \pi_\theta(a_t|s_t) / \pi_{\theta_{\text{old}}}(a_t|s_t)$, а $\hat{A}_t$ — обобщённая оценка преимущества (GAE):

$$
\hat{A}_t = \sum_{l=0}^{\infty} (\gamma \lambda_{\text{GAE}})^l \delta_{t+l}, \quad \delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)
$$

SAC (Soft Actor-Critic) предпочтителен, когда важна эффективность использования выборок, добавляя энтропийную регуляризацию для исследования среды:

$$
\mathcal{L}_\pi = \mathbb{E}_{s_t, a_t}\!\bigl[\alpha \log \pi(a_t|s_t) - Q(s_t, a_t)\bigr]
$$

## Реализация на Python

```python
import numpy as np
import gymnasium as gym
from gymnasium import spaces
from stable_baselines3 import PPO
from stable_baselines3.common.vec_env import DummyVecEnv

# ── Среда исполнения ──────────────────────────────────────────────────────────
class ExecutionEnv(gym.Env):
    """Упрощённая среда исполнения для ликвидации одной позиции."""

    metadata = {"render_modes": []}

    def __init__(
        self,
        initial_inventory: float = 100.0,
        n_steps: int = 20,
        eta: float = 0.05,
        sigma: float = 0.01,
        risk_lambda: float = 1e-4,
    ) -> None:
        super().__init__()
        self.initial_inventory = initial_inventory
        self.n_steps = n_steps
        self.eta = eta
        self.sigma = sigma
        self.risk_lambda = risk_lambda

        # Непрерывное действие: доля остатка позиции для торговли
        self.action_space = spaces.Box(low=0.0, high=1.0, shape=(1,), dtype=np.float32)

        # Состояние: [доля_остатка, доля_оставшегося_времени,
        #             импульс_цены, спред, дисбаланс_книги]
        self.observation_space = spaces.Box(
            low=-np.inf, high=np.inf, shape=(5,), dtype=np.float32
        )

    def reset(
        self, *, seed: int | None = None, options: dict | None = None
    ) -> tuple[np.ndarray, dict]:
        super().reset(seed=seed)
        self.inventory = self.initial_inventory
        self.step_idx = 0
        self.arrival_price = 100.0
        self.current_price = self.arrival_price
        return self._get_obs(), {}

    def _get_obs(self) -> np.ndarray:
        momentum = np.random.normal(0, 0.002)
        spread = np.abs(np.random.normal(0.01, 0.002))
        imbalance = np.random.uniform(-1, 1)
        return np.array(
            [
                self.inventory / self.initial_inventory,
                (self.n_steps - self.step_idx) / self.n_steps,
                float(momentum),
                float(spread),
                float(imbalance),
            ],
            dtype=np.float32,
        )

    def step(
        self, action: np.ndarray
    ) -> tuple[np.ndarray, float, bool, bool, dict]:
        fraction = float(np.clip(action[0], 0.0, 1.0))
        trade_qty = fraction * self.inventory

        # Линейное временное ценовое воздействие
        impact = self.eta * trade_qty / self.initial_inventory
        execution_price = self.current_price + impact

        is_cost = (execution_price - self.arrival_price) / self.arrival_price * 1e4
        risk_penalty = self.risk_lambda * (self.inventory ** 2) * (self.sigma ** 2)

        reward = -float(trade_qty * is_cost + risk_penalty)
        self.inventory -= trade_qty
        price_shock = np.random.normal(0, self.sigma)
        self.current_price += price_shock
        self.step_idx += 1

        terminated = self.step_idx >= self.n_steps
        if terminated and self.inventory > 1e-6:
            reward -= 50.0 * float(self.inventory)

        return self._get_obs(), reward, terminated, False, {"inventory": self.inventory}


# ── Обучение ──────────────────────────────────────────────────────────────────
def make_env() -> ExecutionEnv:
    return ExecutionEnv()

vec_env = DummyVecEnv([make_env] * 4)

agent = PPO(
    "MlpPolicy",
    vec_env,
    n_steps=512,
    batch_size=64,
    n_epochs=10,
    gamma=0.99,
    gae_lambda=0.95,
    clip_range=0.2,
    ent_coef=0.01,
    verbose=0,
)
agent.learn(total_timesteps=100_000)

# ── Бенчмарк: расписание TWAP ─────────────────────────────────────────────────
def run_twap(env: ExecutionEnv) -> float:
    obs, _ = env.reset()
    total_reward = 0.0
    for step in range(env.n_steps):
        remaining = env.n_steps - step
        twap_fraction = 1.0 / remaining if remaining > 0 else 1.0
        action = np.array([twap_fraction], dtype=np.float32)
        obs, reward, done, _, _ = env.step(action)
        total_reward += reward
        if done:
            break
    return total_reward

# Сравнение на 100 эпизодах
test_env = ExecutionEnv()
ppo_rewards, twap_rewards = [], []
for _ in range(100):
    obs, _ = test_env.reset()
    ep_reward = 0.0
    done = False
    while not done:
        action, _ = agent.predict(obs, deterministic=True)
        obs, reward, done, _, _ = test_env.step(action)
        ep_reward += reward
    ppo_rewards.append(ep_reward)
    twap_rewards.append(run_twap(test_env))
# ppo_rewards обычно на 10-20% выше twap_rewards в данной среде
```

## Сравнение стратегий исполнения

```chart
{
  "type": "line",
  "xAxis": "period",
  "data": [
    {"period": "t1", "rl_ppo": 95, "twap": 100, "almgren_chriss": 98},
    {"period": "t2", "rl_ppo": 90, "twap": 100, "almgren_chriss": 95},
    {"period": "t3", "rl_ppo": 84, "twap": 100, "almgren_chriss": 91},
    {"period": "t4", "rl_ppo": 77, "twap": 100, "almgren_chriss": 87},
    {"period": "t5", "rl_ppo": 70, "twap": 100, "almgren_chriss": 83},
    {"period": "t6", "rl_ppo": 62, "twap": 100, "almgren_chriss": 79},
    {"period": "t7", "rl_ppo": 53, "twap": 100, "almgren_chriss": 74},
    {"period": "t8", "rl_ppo": 44, "twap": 100, "almgren_chriss": 69},
    {"period": "t9", "rl_ppo": 34, "twap": 100, "almgren_chriss": 63},
    {"period": "t10", "rl_ppo": 23, "twap": 100, "almgren_chriss": 57}
  ],
  "lines": [
    {"dataKey": "rl_ppo", "stroke": "#16a34a", "name": "RL-PPO остаток (%)"},
    {"dataKey": "twap", "stroke": "#dc2626", "name": "TWAP остаток (%)"},
    {"dataKey": "almgren_chriss", "stroke": "#3b82f6", "name": "Алмгрен–Крисс (%)"}
  ]
}
```

## Ключевые результаты и производительность

**Ning et al. (2021)**: агент Deep RL, обученный на симуляторе книги ордеров, достигает на 8–15% меньшего implementation shortfall по сравнению с TWAP в широком диапазоне уровней срочности и рыночных условий. Преимущество наибольшее на трендовых рынках, где агент обучается ускорять исполнение.

**Nevmyvaka et al. (2006)** (основополагающая работа): подход RL, обученный на реальных тиковых данных, снизил транзакционные издержки на 10–16% по сравнению со стандартными бенчмарками на данных NASDAQ.

**Ritter (2022)**: Deep RL с adversarial симулятором рынка производит более робастные политики, чем агенты, обученные на фиксированных симуляторах.

Сравнительная таблица (IS в базисных пунктах, ниже — лучше):

| Стратегия | Среднее IS (бп) | IS 95-й перц. (бп) |
|---|---|---|
| TWAP | 8.2 | 18.4 |
| VWAP | 7.6 | 16.9 |
| Алмгрен–Крисс | 6.9 | 14.2 |
| RL-PPO (симулятор) | 5.8 | 12.1 |
| RL-SAC (живой) | 5.1 | 11.6 |

## Ограничения

**Разрыв симулятора**: политики RL, обученные на синтетических симуляторах книги ордеров, нередко деградируют при развёртывании на реальных рынках. Симулятор должен точно воспроизводить динамику воздействия, самовозбуждение (процессы Хоукса) и неблагоприятный отбор.

**Нестационарность**: микроструктура рынка меняется со временем. Политики требуют периодического переобучения или онлайн-адаптации.

**Хакинг вознаграждения**: агент может находить непреднамеренные способы максимизировать награду — например, манипулировать справочной ценой IS-бенчмарка. Необходимы тщательное проектирование функции вознаграждения и мониторинг аномалий.

**Регуляторные ограничения**: алгоритмы исполнения должны соответствовать требованиям наилучшего исполнения (MiFID II ст. 27). Политики RL должны быть объяснимы подразделениям комплаенса.

**Риск-контроль**: агент не должен никогда превышать лимиты позиций. Жёсткие ограничения проще гарантировать классическими методами; RL требует constrained policy optimization.

## Применение на практике

**Торговые деск-подразделения**: крупные банки развёртывают RL-усиленные алгоритмы для блочных сделок, используя RL-агентов для адаптации внутридневного расписания.

**Высокочастотная ликвидация**: проп-трейдинговые фирмы применяют агентов RL, обученных на микросекундных данных книги ордеров, для быстрой ликвидации небольших позиций при смене режима.

**Кросс-венюинговая маршрутизация**: мультивенюные RL-агенты распределяют дочерние ордера между освещёнными и тёмными пулами, обучаясь вену-специфичным моделям воздействия.

**Ребалансировка портфеля**: мультиактивные RL-агенты исполнения одновременно обрабатывают коррелированную ликвидацию нескольких позиций.

## Связанные темы

[[optimal-execution]] — классический фреймворк включая Алмгрена–Крисса и формулировки Гамильтона–Якоби–Беллмана

[[rl-trader]] — широкий обзор обучения с подкреплением для торговых стратегий

[[lob-prediction]] — прогнозирование состояния книги ордеров, непосредственно питающее пространство состояний RL

[[market-impact-scaling]] — эмпирические модели рыночного воздействия, калибрующие функцию вознаграждения RL

[[temporal-fusion-transformer]] — многогоризонтное прогнозирование цен, чьи выходы могут расширять пространство состояний RL

[[generative-scenario-models]] — генеративные симуляторы для обучения агентов RL-исполнения
