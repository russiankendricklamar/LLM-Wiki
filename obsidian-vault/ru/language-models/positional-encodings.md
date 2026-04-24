---
title: "Позиционные кодировки"
category: "Language Models"
order: 7
lang: "ru"
slug: "positional-encodings"
growth: "seedling"
---

# Позиционные кодировки

[[attention-mechanisms|Attention]] по построению эквивариантен к перестановкам: без позиционной информации трансформер не различает порядок токенов. **Позиционные кодировки** встраивают порядок последовательности в модель. Выбор кодировки существенно влияет на экстраполяцию длины контекста и производительность.

## Абсолютные позиционные кодировки

**Синусоидальные (Vaswani et al. 2017).** Фиксированные кодировки добавляются к токен-эмбеддингам:

$$
\text{PE}(pos, 2i) = \sin\!\left(\frac{pos}{10000^{2i/d}}\right), \quad \text{PE}(pos, 2i+1) = \cos\!\left(\frac{pos}{10000^{2i/d}}\right).
$$

Без обучаемых параметров, но плохо экстраполирует за пределы тренировочной длины.

**Обученные абсолютные.** BERT, GPT-2: матрица позиций $P \in \mathbb{R}^{T_\text{max} \times d}$ обучается end-to-end. Жёстко ограничена $T_\text{max}$.

## Относительные позиционные кодировки

**T5 Relative Bias.** Обученное скалярное смещение $b_{i-j}$ добавляется к каждому attention score:
$$
e_{ij} = \frac{(x_i W_Q)(x_j W_K)^\top}{\sqrt{d_k}} + b_{i-j}.
$$

**ALiBi (Press et al. 2022).** Фиксированный линейный штраф пропорционально расстоянию:
$$
e_{ij} = (x_i W_Q)(x_j W_K)^\top - m \cdot (i - j).
$$

Линейный штраф делает модель предпочитающей близкие токены, обеспечивая экстраполяцию.

## RoPE: Rotary Position Embedding

**RoPE** (Su et al. 2021) — доминирующий подход в современных [[llm|LLM]] (LLaMA, Mistral, Qwen, Gemma). Вместо добавления кодировок RoPE *вращает* векторы query и key:

$$
(R_m q)^\top (R_n k) = q^\top R_{n-m} k,
$$

где $R_\theta$ — блочно-диагональная матрица вращения. Скалярное произведение зависит только от относительной позиции $n-m$.

Для 2D подпространства с углом $\theta_i = 10000^{-2i/d}$:

$$
R_m = \begin{pmatrix} \cos m\theta_i & -\sin m\theta_i \\ \sin m\theta_i & \cos m\theta_i \end{pmatrix}.
$$

## Экстраполяция за пределы тренировочной длины

```chart
{
  "type": "line",
  "xAxis": "context_length",
  "data": [
    {"context_length": 512, "absolute": 5.2, "alibi": 5.2, "rope": 5.2},
    {"context_length": 1024, "absolute": 5.8, "alibi": 5.3, "rope": 5.4},
    {"context_length": 2048, "absolute": 7.5, "alibi": 5.5, "rope": 5.6},
    {"context_length": 4096, "absolute": 12.0, "alibi": 5.8, "rope": 5.9},
    {"context_length": 8192, "absolute": 25.0, "alibi": 6.2, "rope": 6.8}
  ],
  "lines": [
    {"dataKey": "absolute", "stroke": "#f59e0b", "name": "Absolute (обученные)"},
    {"dataKey": "alibi", "stroke": "#3b82f6", "name": "ALiBi"},
    {"dataKey": "rope", "stroke": "#10b981", "name": "RoPE"}
  ]
}
```

Perplexity при оценке за пределами тренировочной длины 2048 токенов.

## YaRN — расширение контекста

**YaRN** (Peng et al. 2023): масштабирование частот вращения для расширения RoPE-моделей на более длинные контексты. Высокочастотные измерения RoPE не могут экстраполировать — YaRN применяет разное масштабирование к разным частотным диапазонам. LLaMA-2 (4096 токенов) расширяется до 128K.

## Сравнение

| Метод | Тип | Экстраполяция | Параметры | Используется в |
|-------|-----|--------------|-----------|---------------|
| Синусоидальные | Абсолютные | Плохая | 0 | Оригинальный [[transformer-architecture|Transformer]] |
| Обученные | Абсолютные | Нет | $T_\text{max} \times d$ | BERT, GPT-2 |
| T5 Bias | Относительные | Умеренная | Малые | T5 |
| ALiBi | Относительные | Хорошая | 0 | BLOOM, MPT |
| RoPE | Относительные | Хорошая | 0 | LLaMA, Mistral |

## Связанные темы

- large-language-models — обзор архитектур LLM
- [[transformer-architecture]] — полный механизм attention
- [[attention-mechanisms]] — вывод self-attention
- [[neural-scaling-laws]] — взаимодействие длины контекста с масштабированием
