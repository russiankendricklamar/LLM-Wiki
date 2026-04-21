---
title: "Direct Preference Optimization (DPO)"
category: "LLM Infrastructure"
order: 7
lang: "ru"
slug: "dpo"
---

# Direct Preference Optimization (DPO)

## Что это такое

Direct Preference Optimization (DPO) — это стабильный и эффективный метод выравнивания (alignment) больших языковых моделей с человеческими предпочтениями. До появления DPO стандартом был **[[rlhf|RLHF]]** (Reinforcement Learning from Human Feedback), который требовал обучения отдельной модели вознаграждения (Reward Model) и использования сложных алгоритмов обучения с подкреплением, таких как PPO.

DPO упрощает этот процесс, доказывая, что задачу RL можно решить с помощью простой **бинарной кросс-энтропии** (binary cross-entropy loss) непосредственно на данных о предпочтениях. Это устраняет необходимость в модели вознаграждения, сети ценности (value network) и решает проблему нестабильности RL.

## Математический прорыв

В RLHF мы максимизируем вознаграждение $r(x, y)$, стараясь не уходить далеко от референсной модели $\pi_{ref}$:
$$\max_{\pi_\theta} \mathbb{E}_{x, y \sim \pi_\theta} [r(x, y)] - \beta \mathbb{D}_{KL}(\pi_\theta \| \pi_{ref})$$

Авторы DPO (Rafailov et al., 2023) вывели, что оптимальная политика $\pi^*$ для любой функции вознаграждения $r$ имеет аналитическое решение. Подставив его в модель предпочтений Брэдли-Терри, они получили **функцию потерь DPO**:

$$\mathcal{L}_{\text{DPO}}(\pi_\theta; \pi_{ref}) = -\mathbb{E}_{(x, y_w, y_l) \sim \mathcal{D}} \left[ \log \sigma \left( \beta \log \frac{\pi_\theta(y_w \mid x)}{\pi_{ref}(y_w \mid x)} - \beta \log \frac{\pi_\theta(y_l \mid x)}{\pi_{ref}(y_l \mid x)} \right) \right]$$

Где:
- $y_w$ — **предпочтительный** ответ (chosen).
- $y_l$ — **отклоненный** ответ (rejected).
- $\sigma$ — сигмоида.
- $\beta$ — гиперпараметр, контролирующий силу штрафа за отклонение от референсной модели.

## Сравнение: DPO vs. RLHF

| Характеристика | RLHF (PPO) | DPO |
|---|---|---|
| **Модель вознаграждения** | Нужна (отдельное обучение) | Не нужна |
| **Сложность** | Высокая (4 модели в памяти) | Низкая (2 модели: Policy, Ref) |
| **Стабильность** | Очень чувствителен к гиперпараметрам | Высокая |
| **Compute** | Высокий (нужен инференс при обучении) | Низкий (стандартное обучение) |
| **Сэмплирование** | Online (медленно) | Offline (быстро) |

## Реализация с помощью `trl`

```python
from trl import DPOConfig, DPOTrainer
from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("base_model_path")
ref_model = AutoModelForCausalLM.from_pretrained("base_model_path")
tokenizer = AutoTokenizer.from_pretrained("base_model_path")

training_args = DPOConfig(
    output_dir="./dpo_results",
    beta=0.1,
    learning_rate=5e-7,
    per_device_train_batch_size=4,
)

dpo_trainer = DPOTrainer(
    model,
    ref_model,
    args=training_args,
    train_dataset=train_dataset, # Датасет с 'prompt', 'chosen', 'rejected'
    tokenizer=tokenizer,
)

dpo_trainer.train()
```

## Ограничения

- **Качество данных**: DPO очень чувствителен к шуму в разметке предпочтений.
- **Зависимость от референса**: Требуется качественная базовая модель (обычно SFT чекпоинт).
- **Переобучение вероятности**: В некоторых случаях DPO может заставить модель «забыть» разнообразие ответов, слишком сильно фокусируясь на парах предпочтений.

## Родственные темы

[[llm|Языковые модели]] — что мы выравниваем  
[[fine-tuning|Fine-tuning]] — этап перед DPO  
[[agents|Агенты]] — выровненные модели лучше работают как агенты
