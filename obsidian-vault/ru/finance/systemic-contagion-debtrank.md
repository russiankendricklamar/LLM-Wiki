---
title: "Системный риск и DebtRank"
category: "Управление рисками"
order: 87
lang: "ru"
---

# Системный риск и DebtRank

**DebtRank** — алгоритм для измерения системного риска в финансовых сетях, предложенный Баттистоном и др. (2012) как улучшение классического PageRank. В отличие от PageRank, DebtRank распространяет «экономический стресс» пропорционально долговой нагрузке, а не просто структуре ссылок, и ограничивает повторную передачу стресса (избегая двойного счёта).

## Финансовые сети и системный риск

Банки связаны через взаимное кредитование, производные инструменты и общие активы. Если банк $i$ терпит убытки, это ослабляет $j$ (который кредитовал $i$), что в свою очередь ослабляет $k$... — цепная реакция.

**Матрица экспозиций**: $E_{ij}$ — сумма, которую банк $j$ потеряет при дефолте банка $i$ (= кредит $j$ банку $i$).

**Матрица относительного воздействия**:

$$
A_{ij} = \frac{E_{ij}}{\text{EC}_j}
$$

где $\text{EC}_j$ — собственный капитал (equity capital) банка $j$. Если $A_{ij} = 0.3$, дефолт $i$ «съедает» 30% капитала $j$.

## Алгоритм DebtRank

### Состояния узлов

Каждый банк $i$ в момент $t$ описывается:
- Уровень стресса: $h_i(t) \in [0, 1]$, где 0 = здоров, 1 = дефолт
- Состояние: $s_i(t) \in \{\text{Undistressed}, \text{Distressed}, \text{Inactive}\}$

Начальный шок: узлы из множества $S$ получают $h_i(0) = 1$ (дефолт).

### Рекуррентное уравнение распространения

$$
h_i(t+1) = \min\!\left(1,\; h_i(t) + \sum_{j: s_j(t) = D} A_{ji} \cdot h_j(t)\right)
$$

Стресс передаётся только от **Distressed** узлов. После передачи стресса узел переходит в **Inactive** — это предотвращает двойной счёт.

### Метрика DebtRank

После стабилизации системы:

$$
R = \frac{\sum_i (h_i^* - h_i^0) \cdot \text{EC}_i}{\sum_i \text{EC}_i}
$$

где $h_i^*$ — финальный стресс, $h_i^0$ — начальный (0 для незатронутых). $R \in [0, 1]$ — доля совокупного капитала системы, «поглощённая» распространением стресса.

## Реализация

```python
import numpy as np
from enum import Enum
from typing import Optional

class NodeState(Enum):
    UNDISTRESSED = 0
    DISTRESSED = 1
    INACTIVE = 2


def debtrank(A: np.ndarray,
             equity: np.ndarray,
             initial_shock: dict[int, float],
             max_iter: int = 100) -> dict:
    """
    Вычисляет DebtRank для финансовой сети.

    Параметры:
        A: матрица относительного воздействия (n x n)
           A[i,j] = E[i,j] / EC[j]: доля капитала j, теряемая при дефолте i
        equity: вектор капиталов (n,)
        initial_shock: {node_id: stress_level} — начальные шоки
        max_iter: максимум итераций

    Возвращает:
        {'debtrank': float, 'stress': np.ndarray, 'iterations': int}
    """
    n = len(equity)
    h = np.zeros(n)           # уровень стресса
    state = np.full(n, NodeState.UNDISTRESSED)

    # Начальный шок
    for node, level in initial_shock.items():
        h[node] = min(1.0, level)
        state[node] = NodeState.DISTRESSED

    h0 = h.copy()   # начальный вектор для расчёта R
    total_equity = equity.sum()

    for iteration in range(max_iter):
        h_new = h.copy()
        state_new = state.copy()
        changed = False

        for j in range(n):
            if state[j] == NodeState.UNDISTRESSED:
                # Получение стресса от Distressed соседей
                incoming = sum(
                    A[i, j] * h[i]
                    for i in range(n)
                    if state[i] == NodeState.DISTRESSED
                )
                if incoming > 0:
                    h_new[j] = min(1.0, h[j] + incoming)
                    state_new[j] = NodeState.DISTRESSED
                    changed = True

        # Distressed → Inactive (завершили передачу стресса)
        for i in range(n):
            if state[i] == NodeState.DISTRESSED:
                state_new[i] = NodeState.INACTIVE

        h = h_new
        state = state_new

        if not changed:
            break

    # DebtRank
    R = np.dot(h - h0, equity) / total_equity

    return {
        'debtrank': float(R),
        'stress': h,
        'final_state': state,
        'iterations': iteration + 1
    }


def systemic_importance(A: np.ndarray, equity: np.ndarray) -> np.ndarray:
    """
    Системная значимость каждого банка = DebtRank при его дефолте.
    """
    n = len(equity)
    importance = np.zeros(n)
    for i in range(n):
        result = debtrank(A, equity, initial_shock={i: 1.0})
        importance[i] = result['debtrank']
    return importance
```

### Пример: 4 банка

```python
# Матрица кредитов (строка i → банк i кредитует j)
loans = np.array([
    [0,  500, 200, 0  ],
    [0,  0,   300, 100],
    [0,  0,   0,   400],
    [200, 0,  0,   0  ],
], dtype=float)

equity = np.array([1000, 800, 600, 500], dtype=float)

# A[i,j] = loans[i,j] / equity[j]
A = loans / equity[np.newaxis, :]

# Шок: дефолт банка 0
result = debtrank(A, equity, initial_shock={0: 1.0})
print(f"DebtRank (дефолт банка 0): {result['debtrank']:.3f}")
print(f"Стресс по банкам: {result['stress']}")

# Системная значимость всех банков
importance = systemic_importance(A, equity)
print("\nСистемная значимость (DebtRank при дефолте):")
for i, imp in enumerate(importance):
    print(f"  Банк {i}: {imp:.3f}")
```

## Сравнение с альтернативами

| Метод | Идея | Ограничение |
|-------|------|-------------|
| DebtRank | Распространение стресса без двойного счёта | Не учитывает пожарные продажи |
| Network VaR | VaR портфеля с учётом сетевых эффектов | Сложная калибровка |
| CoVaR (Adrian & Brunnermeier) | $\Delta$CoVaR: вклад в хвостовой риск | Нет явной сетевой структуры |
| SRISK (Brownlees & Engle) | Дефицит капитала при системном кризисе | Требует рыночных данных |

## Расширения DebtRank

**Dynamic DebtRank** (Bardoscia et al., 2017): непрерывное время, учёт пожарных продаж (fire sales). Банк, теряющий капитал, продаёт активы, снижая их цену и ударяя по другим держателям.

**Endogenous DebtRank**: матрица экспозиций $A$ обновляется в процессе распространения стресса (банки de-leverage).

## Связанные статьи

- [[nash-equilibrium|Равновесие Нэша]] — теоретические основы межбанковской стратегической игры
- [[value-at-risk|Value at Risk]] — регуляторная метрика, не учитывающая сетевые эффекты
- [[cornish-fisher-cvar|CVaR и EVT]] — альтернативные хвостовые метрики
- [[extreme-value-theory|Теория экстремальных значений]] — моделирование системных шоков
- [[monte-carlo-method|Метод Монте-Карло]] — симуляция сценариев распространения
