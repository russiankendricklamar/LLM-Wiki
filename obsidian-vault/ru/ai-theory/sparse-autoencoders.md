---
title: "Разреженные автоэнкодеры (SAE)"
category: "Теория AI"
order: 5
lang: "ru"
slug: "sparse-autoencoders"
---

# Разреженные автоэнкодеры (SAE)

## Необходимые знания

[[mechanistic-interpretability]]

## Обзор

Разреженные автоэнкодеры (Sparse Autoencoders, SAE) — метод декомпозиции плотных полисемантических активаций слоёв нейронной сети — в частности, остаточных потоков трансформеров — в более широкий набор разреженных, в идеале моносемантических признаков. Основная идея — обучение словаря: найти набор «направлений признаков» такой, что каждый вектор активаций можно приближённо восстановить как разреженную линейную комбинацию этих направлений.

SAE стали главным инструментом механистической интерпретируемости для анализа суперпозиции: явления, при котором нейронные сети упаковывают больше «концепций» в свои матрицы весов, чем существует нейронов, представляя каждую концепцию как направление в пространстве активаций, а не выделенный нейрон.

Работа Anthropic 2024 года по масштабированию SAE на активации Claude обнаружила миллионы интерпретируемых признаков — включая эмоции, синтаксические роли, именованные сущности и даже абстрактные концепции вроде «обмана».

## Математическая основа

**Задача обучения словаря.** Для векторов активаций $\{x_i\}_{i=1}^N$, $x_i \in \mathbb{R}^d$, обучаем:
- Кодировщик $\mathbf{W}_{\text{enc}} \in \mathbb{R}^{m \times d}$, смещение $\mathbf{b}_{\text{enc}} \in \mathbb{R}^m$
- Декодировщик $\mathbf{W}_{\text{dec}} \in \mathbb{R}^{d \times m}$ с единично-нормированными столбцами
- Восстановление $\hat{x} = \mathbf{W}_{\text{dec}} f(x)$

где $m \gg d$ (избыточный словарь) и $f(x)$ — разреженный код.

**SAE с L1-штрафом.** Стандартная функция потерь:

$$\mathcal{L}(x) = \|x - \hat{x}\|_2^2 + \lambda \|f(x)\|_1$$

$$f(x) = \text{ReLU}(\mathbf{W}_{\text{enc}} x + \mathbf{b}_{\text{enc}})$$

Штраф L1 на активации признаков $f(x)$ индуцирует разреженность: большинство признаков равно нулю для данного входа.

**Top-K SAE.** Альтернатива: ровно $K$ ненулевых признаков на вход:

$$f_{\text{TopK}}(x) = \text{TopK}(\text{ReLU}(\mathbf{W}_{\text{enc}} x + \mathbf{b}_{\text{enc}}))$$

Top-K SAE избегают патологии «подавления признаков L1» (L1 занижает величины признаков).

**Геометрия суперпозиции.** Лемма Джонсона-Линденштрауса гарантирует, что в $\mathbb{R}^d$ существуют $m = O(d \log m)$ почти ортогональных направлений. Для разреженных признаков (одновременно активны лишь $s \ll m$) интерференция ограничена:

$$\text{средняя интерференция} \leq \frac{s-1}{d}$$

Это теоретическая основа суперпозиции: разреженные признаки с малой интерференцией могут сосуществовать в низкоразмерном пространстве.

## Принцип работы

**Процесс обучения.** SAE обучаются на больших коллекциях активаций замороженной LLM:
1. Прогнать много прямых проходов через разнообразный текстовый корпус
2. Сохранить активации на конкретном слое (например, остаточный поток после слоя 12)
3. Обучить SAE на этих активациях с L1-потерями
4. Оценить качество восстановления (объяснённая дисперсия) и разреженность (средняя L0-норма)

**Идентификация признаков.** После обучения:
1. Для каждого признака словаря $j$ найти примеры с наибольшей активацией
2. Признак **моносемантический**, если все топ-примеры разделяют единую семантическую концепцию
3. Признак **полисемантический**, если топ-примеры охватывают несвязанные концепции

**Метрики оценки:**
- **MSE восстановления:** Должна быть малой
- **L0-разреженность:** Среднее число ненулевых признаков — должно быть $\ll m$
- **Оценка моносемантичности:** Доля признаков, признанных моносемантическими экспертами
- **Частота активации:** Распределение активности признаков; «мёртвые признаки» (никогда не активируемые) указывают на избыточный словарь

## Реализация на Python

```python
import torch
import torch.nn as nn

class SparseAutoencoder(nn.Module):
    """SAE с L1-штрафом для декомпозиции активаций LLM."""

    def __init__(self, d_model: int, n_features: int, l1_coeff: float = 1e-3):
        super().__init__()
        self.d_model = d_model
        self.n_features = n_features
        self.l1_coeff = l1_coeff

        self.W_enc = nn.Linear(d_model, n_features, bias=True)
        self.W_dec = nn.Linear(n_features, d_model, bias=False)

        nn.init.orthogonal_(self.W_dec.weight)
        self._normalise_decoder()

    def _normalise_decoder(self):
        with torch.no_grad():
            norms = self.W_dec.weight.norm(dim=0, keepdim=True).clamp(min=1e-8)
            self.W_dec.weight.copy_(self.W_dec.weight / norms)

    def encode(self, x: torch.Tensor) -> torch.Tensor:
        return torch.relu(self.W_enc(x))

    def decode(self, f: torch.Tensor) -> torch.Tensor:
        return self.W_dec(f)

    def forward(self, x: torch.Tensor):
        f = self.encode(x)
        x_hat = self.decode(f)
        return x_hat, f

    def loss(self, x: torch.Tensor):
        x_hat, f = self.forward(x)
        recon_loss = ((x - x_hat) ** 2).sum(dim=-1).mean()
        sparsity_loss = self.l1_coeff * f.abs().sum(dim=-1).mean()
        return recon_loss + sparsity_loss, recon_loss, sparsity_loss


class TopKSparseAutoencoder(nn.Module):
    """Top-K SAE: ровно K признаков активно на каждый вход."""

    def __init__(self, d_model: int, n_features: int, k: int):
        super().__init__()
        self.k = k
        self.W_enc = nn.Linear(d_model, n_features, bias=True)
        self.W_dec = nn.Linear(n_features, d_model, bias=False)
        nn.init.orthogonal_(self.W_dec.weight)

    def encode(self, x: torch.Tensor) -> torch.Tensor:
        pre_acts = torch.relu(self.W_enc(x))
        topk_vals, topk_idx = pre_acts.topk(self.k, dim=-1)
        sparse = torch.zeros_like(pre_acts)
        sparse.scatter_(-1, topk_idx, topk_vals)
        return sparse

    def forward(self, x: torch.Tensor):
        f = self.encode(x)
        x_hat = self.W_dec(f)
        return x_hat, f

    def loss(self, x: torch.Tensor):
        x_hat, f = self.forward(x)
        recon_loss = ((x - x_hat) ** 2).sum(dim=-1).mean()
        return recon_loss, f


def train_sae(model, activations, n_epochs=50, lr=2e-4, batch_size=512):
    """Обучение SAE на заранее собранных активациях LLM."""
    optimizer = torch.optim.Adam(model.parameters(), lr=lr)
    dataset_size = activations.shape[0]

    for epoch in range(n_epochs):
        indices = torch.randperm(dataset_size)
        total_recon = 0.0
        n_batches = 0

        for start in range(0, dataset_size, batch_size):
            batch = activations[indices[start:start + batch_size]]
            optimizer.zero_grad()

            if isinstance(model, SparseAutoencoder):
                loss, recon, sparsity = model.loss(batch)
            else:
                recon, _ = model.loss(batch)
                loss = recon

            loss.backward()
            torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
            optimizer.step()

            if hasattr(model, '_normalise_decoder'):
                model._normalise_decoder()

            total_recon += recon.item() if isinstance(recon, torch.Tensor) else recon
            n_batches += 1

        if epoch % 10 == 0:
            print(f"Эпоха {epoch}: recon_loss={total_recon / n_batches:.4f}")


# Демонстрация на синтетических активациях
torch.manual_seed(0)
d_model = 512
n_features = 2048    # Словарь с избыточностью 4x
n_samples = 10000
k = 20

# Синтетические активации: разреженные комбинации истинных признаков
true_features = torch.randn(n_features, d_model)
true_features = true_features / true_features.norm(dim=1, keepdim=True)
true_codes = torch.zeros(n_samples, n_features)
for i in range(n_samples):
    active_idx = torch.randperm(n_features)[:k]
    true_codes[i, active_idx] = torch.rand(k).abs()
activations = true_codes @ true_features + 0.01 * torch.randn(n_samples, d_model)

sae_l1 = SparseAutoencoder(d_model, n_features, l1_coeff=5e-4)
sae_topk = TopKSparseAutoencoder(d_model, n_features, k=k)

print("Обучение L1 SAE:")
train_sae(sae_l1, activations, n_epochs=30)
print("\nОбучение Top-K SAE:")
train_sae(sae_topk, activations, n_epochs=30)

with torch.no_grad():
    _, f_l1 = sae_l1(activations[:1000])
    l0_l1 = (f_l1 > 0).float().sum(dim=-1).mean()
    print(f"\nL1 SAE средняя L0-разреженность: {l0_l1:.1f} (целевая: {k})")
```

## Ключевые результаты и свойства

- **SAE для Claude от Anthropic (2024):** SAE, обученные на Claude 3 Sonnet, находят ~34 миллиона признаков, большинство моносемантических. Признаки включают «Атлантический океан», «моральное осуждение» и «концепцию обмана».
- **Разбиение признаков:** Удвоение размера словаря стабильно разбивает широкие признаки на более специфические подпризнаки — свидетельство иерархической структуры.
- **Геометрия суперпозиции:** Мёртвые признаки часты при малом $m$; слишком большой $m$ приводит к плато разбиения.
- **Преимущество Top-K:** Top-K SAE достигают лучшего восстановления при одинаковом L0 по сравнению с L1-SAE, без подавления признаков.
- **Универсальность между моделями:** Похожие признаки появляются на похожих позициях в разных размерах и семействах моделей.

## Ограничения

**Вычислительные затраты.** Обучение SAE для большой модели требует хранения миллионов векторов активаций и многих эпох. Масштабирование на все слои модели 70B+ дорогостоящее.

**Полнота.** Неизвестно, находят ли SAE все признаки или лишь наиболее выраженные.

**Разрыв интерпретируемости.** Не все обнаруженные признаки имеют очевидные интерпретации. «Тёмные признаки» — стабильно активные для определённых входов, но без чёткого семантического паттерна.

**Компромисс восстановление-разреженность.** Меньшая L0-разреженность требует большего $m$ или хуже восстановления.

**Неизвестная причинная роль.** Активация признака не означает, что он причинно ответственен за вывод модели. Нужны исследования с патчингом активаций.

## Применения

- **Мониторинг безопасности:** Обнаружение активации признаков «обмана» или «вредного намерения» в развёрнутых моделях.
- **Вектора управления:** Усиление или подавление конкретных SAE-признаков для направления поведения модели.
- **Анализ схем:** Использование SAE-признаков как единицы анализа в схемах вместо сырых нейронов.
- **Сравнение моделей:** Сравнение словарей признаков между версиями модели для понимания изменений.
- **Локализация знаний:** Поиск признаков, хранящих конкретные факты, для редактирования моделей.

## Связанные темы

- [[mechanistic-interpretability]] — более широкий проект, которому SAE служат ключевым инструментом
- [[pac-learning]] — обучение словарей связано с разреженным восстановлением и сжатым зондированием
- [[shannon-entropy]] — информационно-теоретические ограничения на эффективность разреженного кодирования
