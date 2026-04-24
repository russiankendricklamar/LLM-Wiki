---
slug: "/finance/repo-market-systemic"
title: "Репо-рынок и системный риск"
category: "Управление рисками"
order: 93
lang: "ru"
---

# Репо-рынок и системный риск

**Репо (Repo — Repurchase Agreement)** — операция, при которой одна сторона продаёт ценные бумаги с обязательством выкупить их обратно в фиксированный срок по заранее оговорённой цене. Де-факто это **краткосрочный обеспеченный кредит**. Репо-рынок — один из крупнейших в мире: ≈\$10 трлн в США и ≈€9 трлн в Европе. Его системная хрупкость стала главным каналом распространения кризиса 2008 года.

## Механика репо

### Стандартная сделка

**Продавец репо** (Cash borrower) продаёт облигации → получает наличные.  
**Покупатель репо** (Cash lender) платит наличные → получает обеспечение.  
На следующий день/через неделю: обратная операция.

**Ставка репо** $r_{\text{repo}}$:

$$
\text{Repurchase Price} = \text{Purchase Price} \times (1 + r_{\text{repo}} \times d/360)
$$

Репо-ставка ≈ ставка овернайт (SOFR, ESTR) ± несколько бп в зависимости от типа обеспечения.

### Стрижка (Haircut)

Покупатель репо принимает обеспечение с дисконтом:

$$
\text{Loan} = \frac{\text{Market Value of Collateral}}{1 + h}
$$

где $h$ — haircut. Если $h = 0.02$, облигации за $100 обеспечивают кредит $98. Haircut защищает кредитора от падения стоимости залога.

Типичные haircut по типу залога (кризисные периоды в скобках):

| Залог | Нормальный рынок | Стресс (GFC 2008) |
|-------|-----------------|-------------------|
| US Treasuries | 0–2% | 2–5% |
| Agency MBS | 3–5% | 10–15% |
| IG корпоративные | 5–10% | 25–40% |
| ABS | 5–15% | 50%+ |

### GCF Repo (General Collateral Finance)

**GCF Repo** — стандартизированный рынок репо через центрального контрагента (FICC в США), где конкретный тип залога не указывается — только категория («General Collateral»). Ставки SOFR и GCF Repo — основные ориентиры.

**Special Repo** — репо под конкретную бумагу. Ставка может быть ниже GCF (бумага «в спросе» как залог, её владелец платит меньше).

## Цепи залогов и «rehypothecation»

**Цепь залогов (collateral chain)**: одни и те же ценные бумаги последовательно используются в нескольких репо.

```
Хедж-фонд A → Первичный брокер B → Банк C → Центральный банк D
     (залог: UST)      (залог: UST)    (залог: UST)
```

**Rehypothecation** — право брокера использовать залог клиента в собственных сделках. Мультипликатор: одни и те же активы обеспечивают \$3–5 кредитов одновременно.

**Системный риск**: если брокер B испытывает трудности, вся цепь разрывается — кризис ликвидности распространяется быстро.

## Спираль ликвидности (Liquidity Spiral)

Механизм самоусиливающегося кризиса (Brunnermeier & Pedersen, 2009):

1. Стоимость залога падает → haircut растёт
2. Кредитоёмкость портфеля падает → принудительные продажи
3. Цены падают дальше → haircut растёт ещё

Формально: если активы финансируются через репо, маржин-требование:

$$
m_t = h_t(S_t) \cdot \frac{W_t}{S_t}
$$

где $W_t$ — капитал, $S_t$ — цена актива, $h_t(S_t)$ — возрастающий haircut. Ceteris paribus: снижение $S_t$ вызывает рост $m_t$, что может опустошить $W_t$.

## Анализ системного риска

### Матрица экспозиций репо-рынка

```python
import numpy as np
import pandas as pd
from typing import NamedTuple

class RepoExposure(NamedTuple):
    lender: str           # кто даёт деньги
    borrower: str         # кто берёт деньги
    amount: float         # в долларах
    collateral_type: str
    haircut: float
    maturity_days: int


def build_exposure_matrix(exposures: list[RepoExposure],
                           participants: list[str]) -> np.ndarray:
    """
    E[i,j] = сумма, которую i одолжил j (без залога).
    """
    n = len(participants)
    idx = {p: i for i, p in enumerate(participants)}
    E = np.zeros((n, n))
    for exp in exposures:
        i = idx.get(exp.lender)
        j = idx.get(exp.borrower)
        if i is not None and j is not None:
            E[i, j] += exp.amount
    return E


def stressed_haircut(collateral_type: str,
                     vix_level: float) -> float:
    """
    Стрессовый haircut в зависимости от уровня VIX.
    """
    base_haircuts = {
        'Treasury': 0.01,
        'Agency': 0.04,
        'IG_Corp': 0.07,
        'HY_Corp': 0.15,
        'ABS': 0.10,
    }
    base = base_haircuts.get(collateral_type, 0.10)
    # Масштабирование: VIX 30 → ×1.5, VIX 50 → ×3
    multiplier = 1 + max(0, (vix_level - 20) / 20)
    return min(base * multiplier, 0.80)


def rollover_risk(exposures: list[RepoExposure],
                  default_probability: dict[str, float]) -> pd.DataFrame:
    """
    Оценка риска роловера: вероятность того, что заёмщик
    не сможет перекатить репо при наступлении срока.

    default_probability: {participant: daily_default_prob}
    """
    rows = []
    for exp in exposures:
        pd_borrower = default_probability.get(exp.borrower, 0.001)
        # Вероятность дефолта до наступления срока
        prob_fail = 1 - (1 - pd_borrower) ** exp.maturity_days
        # Ожидаемый убыток кредитора (с учётом haircut)
        recovery = exp.amount * (1 - exp.haircut) / exp.amount
        el = exp.amount * prob_fail * (1 - recovery)

        rows.append({
            'lender': exp.lender,
            'borrower': exp.borrower,
            'amount': exp.amount,
            'maturity_days': exp.maturity_days,
            'prob_default_to_maturity': round(prob_fail, 5),
            'expected_loss': round(el, 2),
            'haircut': exp.haircut,
        })
    return pd.DataFrame(rows).sort_values('expected_loss', ascending=False)


def fire_sale_impact(assets_sold: float,
                     market_depth: float,
                     kyle_lambda: float) -> float:
    """
    Ценовой импакт пожарных продаж.
    assets_sold: объём продаж ($)
    market_depth: глубина рынка (ед. в $)
    kyle_lambda: коэффициент ценового импакта (bps/$M)
    """
    price_impact_bps = kyle_lambda * (assets_sold / 1e6)
    return price_impact_bps / 10_000   # в долях


class RepoSystemicAnalyzer:
    """
    Агрегированный анализ системного риска репо-рынка.
    """
    def __init__(self,
                 exposures: list[RepoExposure],
                 participants: list[str],
                 equity: dict[str, float]):
        self.exposures = exposures
        self.participants = participants
        self.equity = equity
        self.E = build_exposure_matrix(exposures, participants)

    def leverage_ratios(self) -> pd.Series:
        """Кредитное плечо каждого участника."""
        idx = {p: i for i, p in enumerate(self.participants)}
        total_borrowed = {p: 0.0 for p in self.participants}
        for exp in self.exposures:
            total_borrowed[exp.borrower] += exp.amount

        return pd.Series({
            p: total_borrowed[p] / self.equity.get(p, 1)
            for p in self.participants
        }, name='leverage')

    def concentration_risk(self) -> pd.Series:
        """
        HHI-концентрация на стороне заёмщика.
        Высокая концентрация → системная уязвимость.
        """
        totals = self.E.sum(axis=0)   # суммарные займы каждого участника
        shares = totals / (totals.sum() + 1e-10)
        hhi = np.sum(shares**2)
        return pd.Series({
            'HHI': hhi,
            'Effective_N': 1 / hhi if hhi > 0 else 0,
            'top1_share': shares.max(),
        })
```

### Симуляция кризиса

```python
participants = ['HF_A', 'PB_B', 'Bank_C', 'MMF_D']
equity = {'HF_A': 5e9, 'PB_B': 20e9, 'Bank_C': 50e9, 'MMF_D': 100e9}

repo_book = [
    RepoExposure('MMF_D', 'Bank_C', 30e9, 'Treasury', 0.01, 1),
    RepoExposure('Bank_C', 'PB_B', 15e9, 'Agency', 0.04, 7),
    RepoExposure('PB_B', 'HF_A', 8e9, 'IG_Corp', 0.08, 14),
]

analyzer = RepoSystemicAnalyzer(repo_book, participants, equity)
print(analyzer.leverage_ratios())
print(analyzer.concentration_risk())

# Rollover risk при кризисе
default_probs = {'HF_A': 0.02, 'PB_B': 0.005, 'Bank_C': 0.001, 'MMF_D': 0.0001}
risk_df = rollover_risk(repo_book, default_probs)
print(risk_df)
```

## Уроки кризиса 2008

- **Lehman Brothers**: \$600 млрд репо-задолженности, «испарившихся» за 48 часов
- **Primary Reserve Fund**: money-market fund «сломал бакс» из-за потерь на коммерческих бумагах Lehman
- **Трёхстороннее репо**: JP Morgan и Bank of NY Mellon как tri-party agents — концентрация операционного риска

## Регуляторный ответ

- **EMIR/Dodd-Frank**: обязательный центральный клиринг для репо через FICC/EUREX
- **Haircut floors** (FSB 2023): минимальные haircut для нецентрально-клиринговых сделок
- **Mandatory margin**: SFT (Securities Financing Transactions) Regulation в ЕС

## Связанные статьи

- [[systemic-contagion-debtrank|Системный риск и DebtRank]] — сетевая передача кризиса
- [[kyle-lambda|Лямбда Кайла]] — ценовой импакт пожарных продаж
- [[isda-simm|ISDA SIMM]] — маржинирование OTC-деривативов (аналогия с репо-хейркатами)
- [[extreme-value-theory|Теория экстремальных значений]] — моделирование хвостов в репо-ставках
- [[xva|XVA: корректировки оценки]] — FVA учитывает стоимость репо-финансирования
