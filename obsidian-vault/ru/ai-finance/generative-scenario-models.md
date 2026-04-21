---
title: "Генеративные модели для сценарного анализа"
category: "Scientific ML"
order: 4
lang: "ru"
slug: "generative-scenario-models"
---
# Генеративные модели для сценарного анализа

## Две стороны

Этот метод — пересечение двух больших тем, каждой из которых посвящена отдельная статья:

- **Финансы:** [[adversarial-stress-testing]] — стресс-тестирование и построение неблагоприятных сценариев для VaR, CVaR и регуляторных требований (FRTB, ICAAP).
- **AI:** [[generative-models]] — общий класс генеративных моделей (VAE, GAN, Normalizing Flows, Diffusion), обучающихся представлять распределения данных.

## Необходимые знания

[[temporal-fusion-transformer]], [[monte-carlo-method]]

## Обзор

Управление финансовым риском предполагает возможность охарактеризовать полное распределение будущих результатов портфеля, а не только его среднее и дисперсию. Классические подходы — гауссов метод Монте-Карло, историческое моделирование и параметрические копулы — не способны точно воспроизвести **стилизованные факты** финансовых доходностей: толстые хвосты, кластеризацию волатильности, асимметричную зависимость в кризисы и эффект левереджа.

Глубокие генеративные модели предлагают альтернативу: обучаться на эмпирическом распределении доходностей и сэмплировать из него синтетические сценарии для оценки VaR, CVaR, стресс-тестирования и кредитного риска контрагента (CCR) в рамках FRTB. Три архитектуры доминируют в современных исследованиях и практике:

- **Генеративно-состязательные сети (GAN)** — FinGAN, CGAN, TimeGAN
- **Вариационные автоэнкодеры (VAE)** — исследование латентного пространства с учётом режимов
- **Диффузионные модели** — генерация на основе score для многомерных траекторий доходностей

## Математический формализм

### Стилизованные факты как цели валидации

Генератор синтетических сценариев считается валидным, если его выборки воспроизводят:

1. **Избыточный эксцесс**: $\kappa = E[(r - \mu)^4] / \sigma^4 > 3$ (толстые хвосты)
2. **Кластеризацию волатильности**: $\text{Corr}(|r_t|, |r_{t-k}|) > 0$ для многих лагов $k$
3. **Эффект левереджа**: $\text{Corr}(r_t, \sigma^2_{t+k}) < 0$
4. **Близкую к нулю автокорреляцию доходностей**: $\text{Corr}(r_t, r_{t-k}) \approx 0$
5. **Хвостовую зависимость**: коэффициент хвостовой зависимости $\lambda_U > 0$

### Целевая функция VAE

VAE кодирует доходности $\mathbf{x}$ в латентный вектор $\mathbf{z} \in \mathbb{R}^d$ и декодирует обратно. Обучение максимизирует нижнюю оценку правдоподобия (ELBO):

$$
\mathcal{L}(\theta, \phi) = \mathbb{E}_{q_\phi(\mathbf{z}|\mathbf{x})}\!\bigl[\log p_\theta(\mathbf{x}|\mathbf{z})\bigr] - D_{\text{KL}}\!\bigl(q_\phi(\mathbf{z}|\mathbf{x}) \;\|\; p(\mathbf{z})\bigr)
$$

Член KL регуляризует апостериорное распределение к $\mathcal{N}(\mathbf{0}, \mathbf{I})$, обеспечивая плавную интерполяцию в латентном пространстве — полезно для интерполяции режимов.

### Состязательная функция потерь GAN

Генератор $G_\theta$ и дискриминатор $D_\phi$ играют игру с нулевой суммой:

$$
\min_\theta \max_\phi \; \mathbb{E}_{\mathbf{x} \sim p_{\text{data}}}\!\bigl[\log D_\phi(\mathbf{x})\bigr] + \mathbb{E}_{\mathbf{z} \sim p(\mathbf{z})}\!\bigl[\log(1 - D_\phi(G_\theta(\mathbf{z})))\bigr]
$$

На практике для финансовых данных предпочтителен Wasserstein GAN с градиентным штрафом (WGAN-GP):

$$
\mathcal{L}_{\text{WGAN-GP}} = \mathbb{E}_{\tilde{\mathbf{x}}}[D(\tilde{\mathbf{x}})] - \mathbb{E}_{\mathbf{x}}[D(\mathbf{x})] + \lambda \mathbb{E}_{\hat{\mathbf{x}}}\!\bigl[(\|\nabla_{\hat{\mathbf{x}}} D(\hat{\mathbf{x}})\|_2 - 1)^2\bigr]
$$

### Диффузионные модели на основе score

Диффузионные модели определяют прямой процесс, добавляющий гауссов шум за $T$ шагов, и обучают обратный процесс. Score-функция $s_\theta(\mathbf{x}_t, t) \approx \nabla_{\mathbf{x}_t} \log p_t(\mathbf{x}_t)$ обучается методом деноизинг score matching:

$$
\mathcal{L}_{\text{DSM}} = \mathbb{E}_{t, \mathbf{x}_0, \boldsymbol{\epsilon}}\!\left[\left\| s_\theta(\mathbf{x}_t, t) + \frac{\boldsymbol{\epsilon}}{\sigma_t} \right\|^2\right]
$$

Генерация выполняется интегрированием обратного стохастического дифференциального уравнения от $\mathbf{x}_T \sim \mathcal{N}(\mathbf{0}, \sigma_T^2 \mathbf{I})$ до $\mathbf{x}_0$.

## Архитектура

### TimeGAN для финансовых траекторий

TimeGAN (Yoon et al., NeurIPS 2019) добавляет обучаемый с учителем компонент потерь, обязывающий латентную динамику генератора совпадать с динамикой энкодера:

$$
\mathcal{L}_{\text{TimeGAN}} = \mathcal{L}_{\text{GAN}} + \lambda_s \mathcal{L}_{\text{supervised}} + \lambda_r \mathcal{L}_{\text{reconstruction}}
$$

Компонент с учителем штрафует за разницу между одношаговым латентным переходом $G$ и таким же переходом в модели, обученной на реальных данных, сохраняя структуру временной автокорреляции.

### Условный GAN для режимных сценариев

CGAN обусловливает генератор и дискриминатор меткой режима $c$ (например, низкая волатильность / высокая волатильность / кризис):

$$
G_\theta(\mathbf{z}, c), \quad D_\phi(\mathbf{x}, c)
$$

Метки режима могут предоставляться внешним классификатором режимов (HMM, GMM, пороговые значения макроиндикаторов), что позволяет сэмплировать стресс-сценарии непосредственно из «кризисного» условного распределения.

## Реализация на Python

```python
import torch
import torch.nn as nn
import numpy as np
from torch.utils.data import DataLoader, TensorDataset
from scipy import stats

# ── Синтетические данные о доходностях ───────────────────────────────────────
torch.manual_seed(42)
np.random.seed(42)
n_samples, n_assets, seq_len = 2000, 5, 20

# Симуляция доходностей с толстыми хвостами через распределение Стьюдента (df=4)
df = 4
raw = np.random.standard_t(df, size=(n_samples, seq_len, n_assets))
scale = np.sqrt(df / (df - 2))
returns = torch.tensor(raw / scale, dtype=torch.float32)

dataset = TensorDataset(returns)
loader = DataLoader(dataset, batch_size=128, shuffle=True)

# ── VAE для генерации траекторий доходностей ─────────────────────────────────
class ReturnEncoder(nn.Module):
    def __init__(self, n_assets: int, seq_len: int, latent_dim: int) -> None:
        super().__init__()
        input_dim = n_assets * seq_len
        self.fc_hidden = nn.Linear(input_dim, 128)
        self.fc_mu = nn.Linear(128, latent_dim)
        self.fc_logvar = nn.Linear(128, latent_dim)

    def forward(self, x: torch.Tensor) -> tuple[torch.Tensor, torch.Tensor]:
        h = torch.relu(self.fc_hidden(x.view(x.size(0), -1)))
        return self.fc_mu(h), self.fc_logvar(h)


class ReturnDecoder(nn.Module):
    def __init__(self, latent_dim: int, n_assets: int, seq_len: int) -> None:
        super().__init__()
        output_dim = n_assets * seq_len
        self.net = nn.Sequential(
            nn.Linear(latent_dim, 128),
            nn.ReLU(),
            nn.Linear(128, output_dim),
        )
        self._n_assets = n_assets
        self._seq_len = seq_len

    def forward(self, z: torch.Tensor) -> torch.Tensor:
        return self.net(z).view(-1, self._seq_len, self._n_assets)


class ReturnVAE(nn.Module):
    def __init__(self, n_assets: int = 5, seq_len: int = 20, latent_dim: int = 8) -> None:
        super().__init__()
        self.encoder = ReturnEncoder(n_assets, seq_len, latent_dim)
        self.decoder = ReturnDecoder(latent_dim, n_assets, seq_len)

    def reparameterise(self, mu: torch.Tensor, logvar: torch.Tensor) -> torch.Tensor:
        std = torch.exp(0.5 * logvar)
        eps = torch.randn_like(std)
        return mu + eps * std

    def forward(
        self, x: torch.Tensor
    ) -> tuple[torch.Tensor, torch.Tensor, torch.Tensor]:
        mu, logvar = self.encoder(x)
        z = self.reparameterise(mu, logvar)
        return self.decoder(z), mu, logvar


def vae_loss(
    recon: torch.Tensor,
    x: torch.Tensor,
    mu: torch.Tensor,
    logvar: torch.Tensor,
    beta: float = 1.0,
) -> torch.Tensor:
    recon_loss = nn.functional.mse_loss(recon, x, reduction="sum")
    kl_loss = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp())
    return recon_loss + beta * kl_loss


# ── Обучение ──────────────────────────────────────────────────────────────────
model = ReturnVAE(n_assets=n_assets, seq_len=seq_len, latent_dim=8)
optimiser = torch.optim.Adam(model.parameters(), lr=1e-3)

for epoch in range(30):
    total_loss = 0.0
    for (batch,) in loader:
        optimiser.zero_grad()
        recon, mu, logvar = model(batch)
        loss = vae_loss(recon, batch, mu, logvar, beta=1.0)
        loss.backward()
        optimiser.step()
        total_loss += loss.item()

# ── Генерация сценариев ───────────────────────────────────────────────────────
model.train(False)
with torch.no_grad():
    z_samples = torch.randn(1000, 8)
    synthetic_paths = model.decoder(z_samples).numpy()
    # Форма: (1000, seq_len=20, n_assets=5)

# ── Проверка стилизованных фактов ─────────────────────────────────────────────
real_flat = returns.numpy().reshape(-1, n_assets)
synth_flat = synthetic_paths.reshape(-1, n_assets)

for i in range(n_assets):
    real_kurt = stats.kurtosis(real_flat[:, i], fisher=False)
    synth_kurt = stats.kurtosis(synth_flat[:, i], fisher=False)
    # Эксцесс >3 подтверждает сохранение толстых хвостов
```

## Сравнение распределений

```chart
{
  "type": "bar",
  "xAxis": "bucket",
  "data": [
    {"bucket": "<-3s", "historical": 2.1, "gaussian": 0.1, "vae": 1.8},
    {"bucket": "-3s..-2s", "historical": 4.3, "gaussian": 2.1, "vae": 4.0},
    {"bucket": "-2s..-1s", "historical": 15.2, "gaussian": 13.6, "vae": 14.9},
    {"bucket": "-1s..0", "historical": 28.9, "gaussian": 34.1, "vae": 29.3},
    {"bucket": "0..1s", "historical": 27.6, "gaussian": 34.1, "vae": 27.8},
    {"bucket": "1s..2s", "historical": 14.8, "gaussian": 13.6, "vae": 14.6},
    {"bucket": "2s..3s", "historical": 4.9, "gaussian": 2.1, "vae": 4.7},
    {"bucket": ">3s", "historical": 2.2, "gaussian": 0.1, "vae": 2.9}
  ],
  "lines": [
    {"dataKey": "historical", "stroke": "#1d4ed8", "name": "Историч. (%)"},
    {"dataKey": "gaussian", "stroke": "#dc2626", "name": "Гауссово (%)"},
    {"dataKey": "vae", "stroke": "#16a34a", "name": "VAE-сгенер. (%)"}
  ]
}
```

## Ключевые результаты и производительность

**TimeGAN** (Yoon et al., 2019): на данных фондового рынка дискриминативная оценка (насколько хорошо классификатор отличает реальные данные от синтетических) падает до 0.5 (неразличимо), тогда как у обычного GAN остаётся 0.65. Предсказательная оценка (RMSE модели, обученной на синтетических данных и протестированной на реальных) совпадает с аналогичным показателем модели, обученной на реальных данных, с отклонением в пределах 5%.

**FinGAN** (Wiese et al., 2020): применительно к FX-доходностям воспроизводит все пять стилизованных фактов, включая эффект левереджа. Оценки CVaR по сценариям FinGAN отличаются от исторического моделирования не более чем на 3% на 99-м перцентиле.

**Диффузионные модели для акций** (литература 2023–2024): достигают лучших показателей воспроизведения стилизованных фактов для многоактивных портфелей, превосходя GAN по репликации хвостовой зависимости. Время генерации выше, но поддаётся распараллеливанию.

**Точность CVaR**: сценарии от хорошо обученных генеративных моделей снижают дисперсию оценки CVaR на 30–50% по сравнению с историческим моделированием при одинаковом количестве путей.

## Ограничения

**Нестабильность обучения**: GAN подвержены схлопыванию мод — генератор может обучиться воспроизводить лишь узкое подмножество распределения. WGAN-GP смягчает, но не устраняет эту проблему для финансовых данных с малым числом наблюдений относительно размерности.

**Нестационарность**: генеративные модели, обученные на одном рыночном режиме, могут отказывать в другом. Режимно-условные модели частично решают эту проблему, но требуют точной классификации режимов в реальном времени.

**Сложность валидации**: в отличие от обучаемых с учителем моделей, у генеративных моделей нет единой метрики точности на удержанных данных.

**Регуляторное принятие**: регуляторы (BCBS, ЕЦБ) требуют документированных методологий валидации для внутренних моделей. Генераторы синтетических сценариев должны демонстрировать пригодность согласно стандартам бэктестинга.

**Проклятие размерности**: по мере роста $n_{\text{assets}}$ для точного обучения совместным хвостовым распределениям требуется экспоненциально больше данных и всё более сложные архитектуры.

## Применение на практике

**Подход внутренних моделей FRTB**: банки используют синтетические сценарии для пополнения ограниченных исторических данных при вычислении ожидаемого дефицита (Expected Shortfall) с доверием 97.5%.

**Стресс-тестирование CCR**: генерация коррелированных многоактивных траекторий для CVA (Credit Valuation Adjustment) в стрессовых условиях, где исторических кризисов слишком мало для надёжного Монте-Карло.

**Регуляторные стресс-сценарии**: генерация правдоподобных неблагоприятных макропутей для представления ICAAP.

**Ценообразование опционов**: режимно-условные сценарии позволяют оценивать путезависимые деривативы с реалистичными распределениями.

**Оптимизация портфеля при толстых хвостах**: CVaR-оптимальные портфели на основе генеративных сценариев более устойчивы к хвостовым событиям, чем портфели среднее–дисперсия с гауссовыми доходностями.

## Связанные темы

[[monte-carlo-method]] — классический метод симуляции, который генеративные модели дополняют

[[value-at-risk]] — основной потребитель наборов сценариев

[[extreme-value-theory]] — параметрический подход к моделированию хвостов, дополняющий генеративные методы

[[garch-models]] — классическая модель кластеризации волатильности как базовая линия для проверки стилизованных фактов

[[copula-models]] — параметрическое моделирование зависимостей, сравниваемое с GAN-генерацией совместных распределений

[[temporal-fusion-transformer]] — вероятностная модель прогнозирования, которая может обусловливать сэмплирование генеративных сценариев
