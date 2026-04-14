---
title: "Графовые нейронные сети для кредитного риска"
category: "Научное ML"
order: 3
lang: "ru"
slug: "gnn-credit-risk"
---
# Графовые нейронные сети для кредитного риска

## Две стороны

Этот метод — пересечение двух больших тем, каждой из которых посвящена отдельная статья:

- **Финансы:** [[copula-models]] — классический параметрический подход к зависимости дефолтов и системному риску; копулы моделируют совместные хвосты, но игнорируют сетевую структуру экспозиций.
- **AI:** [[graph-neural-networks]] — общий класс GNN (GCN, GraphSAGE, GAT, GIN), передача сообщений на произвольной реляционной структуре.

## Необходимые знания

[[llm-financial-analysis]]

## Обзор

Кредитное моделирование исторически рассматривало заёмщиков как независимые сущности, предсказывая вероятность дефолта по собственным финансовым коэффициентам каждого обязата (левередж, покрытие, ликвидность) и макроэкономическим факторам. Тем не менее финансовые системы глубоко взаимосвязаны: вероятность дефолта заёмщика зависит от его поставщиков, клиентов, акционеров и кредитующих банков. Системный риск — коррелированный отказ множества институтов — возникает именно из этих сетевых зависимостей, которые одномерные модели игнорируют.

Графовые нейронные сети (GNN) обеспечивают принципиальный фреймворк для обучения на реляционных данных. Представляя обязатов как узлы, а экспозиции, гарантии и связи собственности — как рёбра, GNN могут распространять информацию вдоль кредитной сети и производить оценки вероятности дефолта на уровне узлов, учитывающие финансовое состояние окружения — прямое кодирование каналов заражения.

## Визуализация

```chart
{
  "type": "bar",
  "xAxis": "model",
  "data": [
    {"model": "Logistic Reg", "AUC": 0.74},
    {"model": "XGBoost", "AUC": 0.79},
    {"model": "GCN 2-layer", "AUC": 0.82},
    {"model": "GAT 4-head", "AUC": 0.84},
    {"model": "GraphSAGE", "AUC": 0.83},
    {"model": "HGT", "AUC": 0.87}
  ],
  "lines": [
    {"dataKey": "AUC", "stroke": "#3b82f6", "name": "AUC Score"}
  ]
}
```

## Математический формализм

### Формулировка графа

Кредитный граф $\mathcal{G} = (\mathcal{V}, \mathcal{E}, \mathbf{X}, \mathbf{W})$ состоит из:

- $\mathcal{V}$: множество $N$ обязатов (компании, банки, физические лица)
- $\mathcal{E}$: рёбра $(i, j)$, представляющие кредитные экспозиции, гарантии или связи собственности
- $\mathbf{X} \in \mathbb{R}^{N \times d}$: матрица признаков узлов (финансовые коэффициенты, кредитные баллы, секторные индикаторы)
- $\mathbf{W} \in \mathbb{R}^{N \times N}$: матрица весов рёбер (суммы экспозиций, нормализованные)

Матрица смежности $\mathbf{A}$ с собственными петлями нормализуется:

$$
\hat{\mathbf{A}} = \tilde{\mathbf{D}}^{-1/2} \tilde{\mathbf{A}} \tilde{\mathbf{D}}^{-1/2}, \quad \tilde{\mathbf{A}} = \mathbf{A} + \mathbf{I}
$$

где $\tilde{\mathbf{D}}_{ii} = \sum_j \tilde{\mathbf{A}}_{ij}$ — матрица степеней.

### Графовая свёрточная сеть (GCN)

Каждый слой GCN распространяет и трансформирует признаки узлов:

$$
\mathbf{H}^{(l+1)} = \sigma\!\bigl(\hat{\mathbf{A}} \mathbf{H}^{(l)} \mathbf{W}^{(l)}\bigr)
$$

где $\mathbf{H}^{(0)} = \mathbf{X}$, $\mathbf{W}^{(l)}$ — обучаемая матрица весов, $\sigma$ — функция активации. После $K$ слоёв представление каждого узла включает информацию из его $K$-шагового окружения.

### Сеть графового внимания (GAT)

GAT заменяет равномерную агрегацию обученными весами внимания. Для узла $i$ коэффициент внимания к соседу $j$:

$$
\alpha_{ij} = \frac{\exp\!\bigl(\text{LeakyReLU}(\mathbf{a}^\top [\mathbf{W} \mathbf{h}_i \|\mathbf{W} \mathbf{h}_j])\bigr)}{\sum_{k \in \mathcal{N}(i)} \exp\!\bigl(\text{LeakyReLU}(\mathbf{a}^\top [\mathbf{W} \mathbf{h}_i \|\mathbf{W} \mathbf{h}_k])\bigr)}
$$

Обновлённое представление:

$$
\mathbf{h}'_i = \sigma\!\left(\sum_{j \in \mathcal{N}(i)} \alpha_{ij} \mathbf{W} \mathbf{h}_j\right)
$$

Многоголовое внимание с $K$ головами и конкатенацией обеспечивает более богатые представления:

$$
\mathbf{h}'_i = \Big\|_{k=1}^{K} \sigma\!\left(\sum_{j \in \mathcal{N}(i)} \alpha_{ij}^{(k)} \mathbf{W}^{(k)} \mathbf{h}_j\right)
$$

### Системный риск через спектральную теорию графов

Спектральный разрыв $\lambda_2$ (второе наименьшее собственное значение лапласиана $\mathbf{L} = \mathbf{D} - \mathbf{A}$) измеряет связность сети:

$$
\mathbf{L} = \mathbf{D} - \mathbf{A}, \quad 0 = \lambda_1 \leq \lambda_2 \leq \cdots \leq \lambda_N
$$

Малое $\lambda_2$ указывает на почти несвязный граф, где локальные дефолты остаются локальными; большое $\lambda_2$ — на высокую связность и быстрое распространение заражения. Оценки системного риска на основе GNN можно калибровать по $\lambda_2$ как теоретическому якорю.

## Архитектура: GraphSAGE для крупных кредитных графов

Для корпоративных кредитных сетей с миллионами узлов полноразмерный GCN вычислительно нереализуем. GraphSAGE (Hamilton et al., 2017) использует выборку окружений:

$$
\mathbf{h}_{\mathcal{N}(v)}^l = \text{AGGREGATE}\bigl(\{\mathbf{h}_u^{l-1} : u \in \tilde{\mathcal{N}}(v)\}\bigr)
$$

$$
\mathbf{h}_v^l = \sigma\!\bigl(\mathbf{W}^l \cdot \text{CONCAT}(\mathbf{h}_v^{l-1}, \mathbf{h}_{\mathcal{N}(v)}^l)\bigr)
$$

где $\tilde{\mathcal{N}}(v)$ — выборка фиксированного размера из окружения $v$. Это снижает память с $O(N)$ до $O(\text{fanout}^K)$, позволяя мини-батч-обучение на промышленных кредитных графах.

### Гетерогенный кредитный граф

Реальные кредитные сети содержат несколько типов узлов (корпоративный заёмщик, банк, суверен, гарант) и рёбер (кредит, облигация, акция, гарантия). Трансформер гетерогенных графов (HGT) назначает тип-специфичные проекции:

$$
\mathbf{h}_{t(v)}^{l+1} = \text{Aggregate}\!\!\bigl(\{f_{r}(\mathbf{h}_u^l, \mathbf{h}_v^l) : u \in \mathcal{N}_r(v), r \in \mathcal{R}\}\bigr)
$$

где $\mathcal{R}$ — множество типов отношений, $f_r$ — тип-специфичное преобразование.

## Реализация на Python

```python
import torch
import torch.nn as nn
import torch.nn.functional as F
from torch_geometric.data import Data
from torch_geometric.nn import GATConv
from torch_geometric.utils import to_undirected
import numpy as np

torch.manual_seed(42)
np.random.seed(42)

# ── Синтетический кредитный граф ─────────────────────────────────────────────
n_nodes = 500        # обязаты
n_features = 12      # финансовые коэффициенты
n_edges = 1500       # кредитные связи

node_features = torch.randn(n_nodes, n_features)

# Матрица рёбер: случайная разреженная кредитная сеть
src = torch.randint(0, n_nodes, (n_edges,))
dst = torch.randint(0, n_nodes, (n_edges,))
edge_index = torch.stack([src, dst], dim=0)
edge_index = to_undirected(edge_index, num_nodes=n_nodes)

# Бинарные метки: 1 = дефолт в течение 12 месяцев (частота дефолта 10%)
risk_score = node_features[:, 0] - node_features[:, 3]
threshold = torch.quantile(risk_score, 0.90)
labels = (risk_score > threshold).long()

# Маски обучения/валидации/теста
perm = torch.randperm(n_nodes)
train_mask = torch.zeros(n_nodes, dtype=torch.bool)
val_mask = torch.zeros(n_nodes, dtype=torch.bool)
test_mask = torch.zeros(n_nodes, dtype=torch.bool)
train_mask[perm[:300]] = True
val_mask[perm[300:400]] = True
test_mask[perm[400:]] = True

graph_data = Data(
    x=node_features,
    edge_index=edge_index,
    y=labels,
    train_mask=train_mask,
    val_mask=val_mask,
    test_mask=test_mask,
)

# ── Модель GAT для прогнозирования дефолта ───────────────────────────────────
class CreditGAT(nn.Module):
    def __init__(
        self,
        in_channels: int,
        hidden_channels: int,
        out_channels: int,
        heads: int = 4,
        dropout: float = 0.3,
    ) -> None:
        super().__init__()
        self.conv1 = GATConv(in_channels, hidden_channels, heads=heads, dropout=dropout)
        self.conv2 = GATConv(
            hidden_channels * heads, out_channels, heads=1, concat=False, dropout=dropout
        )
        self.dropout = dropout

    def forward(self, x: torch.Tensor, edge_index: torch.Tensor) -> torch.Tensor:
        x = F.dropout(x, p=self.dropout, training=self.training)
        x = F.elu(self.conv1(x, edge_index))
        x = F.dropout(x, p=self.dropout, training=self.training)
        return self.conv2(x, edge_index)


# ── Логистическая регрессия как базовая линия ─────────────────────────────────
class LogisticBaseline(nn.Module):
    def __init__(self, in_channels: int) -> None:
        super().__init__()
        self.linear = nn.Linear(in_channels, 2)

    def forward(self, x: torch.Tensor, _edge_index: torch.Tensor) -> torch.Tensor:
        return self.linear(x)


def train_and_assess(
    net: nn.Module, data: Data, n_epochs: int = 100
) -> dict[str, float]:
    """Обучение модели и возврат точности и полноты на тесте."""
    optimiser = torch.optim.Adam(net.parameters(), lr=5e-3, weight_decay=5e-4)
    # Вес класса для балансировки: дефолт встречается реже
    class_weight = torch.tensor([1.0, 9.0])

    net.train()
    for _ in range(n_epochs):
        optimiser.zero_grad()
        logits = net(data.x, data.edge_index)
        loss = F.cross_entropy(
            logits[data.train_mask], data.y[data.train_mask], weight=class_weight
        )
        loss.backward()
        optimiser.step()

    net.train(False)
    with torch.no_grad():
        logits = net(data.x, data.edge_index)
        preds = logits.argmax(dim=1)
        test_acc = float(
            (preds[data.test_mask] == data.y[data.test_mask]).float().mean()
        )
        default_mask = data.test_mask & (data.y == 1)
        default_recall = (
            float((preds[default_mask] == 1).float().mean())
            if default_mask.sum() > 0
            else 0.0
        )

    return {"test_accuracy": test_acc, "default_recall": default_recall}


model = CreditGAT(
    in_channels=n_features,
    hidden_channels=32,
    out_channels=2,
    heads=4,
    dropout=0.3,
)

gat_results = train_and_assess(model, graph_data, n_epochs=100)
lr_results = train_and_assess(LogisticBaseline(n_features), graph_data, n_epochs=100)
# gat_results["default_recall"] обычно выше lr_results["default_recall"]
```

## Ключевые результаты и производительность

**Yang et al. (2021)** — GNN для корпоративного прогнозирования дефолта на китайском рынке акций A-share: модель GNN достигает AUC 0.84 против XGBoost 0.78 и логистической регрессии 0.74 на горизонте 3 года. Улучшение сконцентрировано в компаниях с высокой промежуточной центральностью в цепочке поставок.

**FICO (2022)** — GNN для потребительского кредита: графовые признаки, полученные из сетей общих устройств/IP-адресов, снижают частоту ложноотрицательных срабатываний на мошенничество на 18% по сравнению с XGBoost.

**Bao et al. (2023)** — гетерогенный GNN для системного банковского риска: GAT на графе межбанковских экспозиций предсказывает SRISK с на 12% меньшим RMSE, чем метод главных компонент на балансовых данных.

Сравнительная таблица AUC на корпоративных датасетах дефолтов:

| Модель | AUC |
|---|---|
| Логистическая регрессия | 0.74 |
| XGBoost | 0.79 |
| GCN (2 слоя) | 0.82 |
| GAT (4 головы) | 0.84 |
| GraphSAGE (индуктивный) | 0.83 |
| HGT (гетерогенный) | 0.87 |

## Ограничения

**Построение графа — узкое место**: качество GNN ограничено полнотой и точностью кредитной сети. Пропущенные рёбра (нераскрытые гарантии, забалансовые экспозиции) снижают качество, иногда ниже табличных базовых линий.

**Временна́я динамика**: стандартные GNN работают на статических графах; кредитные сети эволюционируют. Временные GNN (T-GNN, EvolveGCN) решают эту проблему, но увеличивают требования к данным.

**Масштабируемость**: полноразмерный GAT на сети из 10 млн обязатов вычислительно запретителен. GraphSAGE с мини-батч-выборкой — практическая альтернатива.

**Интерпретируемость**: веса внимания в GAT указывают, какие соседи повлияли на предсказание, но регуляторы требуют объяснений в терминах бизнес-переменных. Гибридные подходы совмещают GNN-эмбеддинги с интерпретируемым классификатором.

**Дефицит меток**: события дефолта редки. Частота корпоративных дефолтов 1–2% за 3 года означает, что большинство положительных меток встречается только в фазах кредитного цикла-спада.

## Применение на практике

**Корпоративный кредитный рейтинг**: дополнение фундаментального анализа признаками цепочки поставок и графа собственности для прогнозирования миграций рейтинга до объявлений агентств.

**Мошенничество в розничном кредите**: графы общих устройств, счетов и социальных связей выявляют мошеннические кольца, которые индивидуальные модели не обнаруживают.

**Анализ межбанковского заражения**: регуляторы (ЕЦБ, Banco de Mexico) используют GNN на графах межбанковских экспозиций для симуляции каскадов заражения в стрессовых условиях.

**Риск неттинг-сетов XVA**: картирование сетей контрагентов по деривативам для выявления концентраций wrong-way risk.

**ESG-связанный кредит**: отраслевые GNN с графами выбросов цепочки поставок для оценки распространения переходного риска от углеродоёмких поставщиков к заёмщикам.

## Связанные темы

[[survival-risk-prediction]] — анализ выживаемости для тайминга дефолта, дополняющий подход GNN

[[copula-models]] — совместное моделирование дефолтов через копулы, классическая альтернатива GNN-зависимости

[[xva]] — модели XVA, потребляющие оценки сетевого риска контрагентов от GNN

[[fraud-detection]] — смежная методология; обнаружение мошенничества разделяет техники построения графов

[[llm-financial-analysis]] — признаки, извлечённые LLM из ковенантов и финансового текста, как атрибуты узлов GNN

[[generative-scenario-models]] — генеративные модели для коррелированных сценариев дефолта
