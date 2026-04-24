---
slug: "/finance/repo-market-systemic"
title: "Repo Market and Systemic Risk"
category: "Risk"
order: 93
lang: "en"
---

# Repo Market and Systemic Risk

A **repo (repurchase agreement)** is a short-term secured loan: one party sells securities with a contractual obligation to repurchase them at a specified date and price. The repo market — roughly \$10 trillion daily in the US and €9 trillion in Europe — is the plumbing of the global financial system. Its structural fragility was the primary transmission channel of the 2008 crisis.

## Mechanics

### Cash Flows

**Cash borrower** (repo seller): sells securities, receives cash.  
**Cash lender** (repo buyer): pays cash, receives collateral.

On the repurchase date the flows reverse. The implied repo rate:

$$
r_{\text{repo}} \approx r_{\text{overnight}} + \text{spread}
$$

### Haircut

The lender accepts collateral at a discount:

$$
\text{Loan} = \frac{\text{Market Value}}{1+h}
$$

$h$ is the **haircut** — protection against collateral price falls.

| Collateral | Normal | Crisis (GFC 2008) |
|-----------|--------|-------------------|
| US Treasuries | 0–2% | 2–5% |
| Agency MBS | 3–5% | 10–15% |
| IG Corporate | 5–10% | 25–40% |
| ABS | 5–15% | 50%+ |

### General vs Special Collateral

**GCF Repo**: standardised cleared market; any eligible security counts. The GCF rate ≈ SOFR.

**Special Repo**: for a specific security in high demand. Rate trades *below* GCF — the owner of a "special" security gets paid to lend it.

## Collateral Chains and Rehypothecation

The same security can underpin multiple consecutive repos:

```
Hedge Fund → Prime Broker → Bank → Central Bank
 (posts UST)   (pledges UST)  (pledges UST)
```

**Rehypothecation**: the broker reuses the client's pledged collateral in its own transactions, creating a multiplier effect where the same assets support 3–5× their face value in funding.

**Systemic implication**: if any link breaks, the whole chain unwinds simultaneously — a rapid, correlated liquidity shock.

## Liquidity Spiral

(Brunnermeier & Pedersen 2009)

1. Collateral value falls → haircut rises
2. Borrowing capacity shrinks → forced selling
3. Prices fall further → haircut rises again

Margin requirement on leveraged assets:

$$
m_t = h_t(S_t) \cdot \frac{W_t}{S_t}
$$

where $h_t$ is an increasing function of falling $S_t$. A sufficiently bad shock depletes capital $W_t$ entirely — triggering insolvency.

## Systemic Risk Analysis

```python
import numpy as np
import pandas as pd
from typing import NamedTuple

class RepoExposure(NamedTuple):
    lender:    str
    borrower:  str
    amount:    float
    collateral: str
    haircut:   float
    maturity_days: int


def exposure_matrix(exposures: list[RepoExposure],
                    participants: list[str]) -> np.ndarray:
    """E[i,j] = amount lender i has advanced to borrower j."""
    n   = len(participants)
    idx = {p:i for i,p in enumerate(participants)}
    E   = np.zeros((n,n))
    for e in exposures:
        i = idx.get(e.lender); j = idx.get(e.borrower)
        if i is not None and j is not None:
            E[i,j] += e.amount
    return E


def stressed_haircut(collateral: str, vix: float) -> float:
    base = {'Treasury':0.01,'Agency':0.04,'IG_Corp':0.07,'ABS':0.10}.get(collateral,0.10)
    mult = 1 + max(0, (vix-20)/20)
    return min(base*mult, 0.80)


def rollover_risk(exposures: list[RepoExposure],
                  pd: dict[str,float]) -> pd.DataFrame:
    """Expected loss for each repo leg given daily default probabilities."""
    rows = []
    for e in exposures:
        p_fail = 1 - (1 - pd.get(e.borrower, 0.001))**e.maturity_days
        el = e.amount * p_fail * e.haircut   # recovery via haircut
        rows.append({'lender': e.lender, 'borrower': e.borrower,
                     'amount': e.amount, 'p_fail': round(p_fail,5),
                     'expected_loss': round(el,2)})
    return pd.DataFrame(rows).sort_values('expected_loss', ascending=False)


def fire_sale_price_impact(assets_sold: float,
                           kyle_lambda: float) -> float:
    """Price impact of forced selling in bps."""
    return kyle_lambda * (assets_sold / 1e6)   # lambda in bps/$M
```

### Simulation

```python
participants = ['HF_A','PB_B','Bank_C','MMF_D']
equity = {'HF_A':5e9,'PB_B':20e9,'Bank_C':50e9,'MMF_D':100e9}

book = [
    RepoExposure('MMF_D','Bank_C',30e9,'Treasury',0.01,1),
    RepoExposure('Bank_C','PB_B',15e9,'Agency',0.04,7),
    RepoExposure('PB_B','HF_A',8e9,'IG_Corp',0.08,14),
]
E = exposure_matrix(book, participants)

pds = {'HF_A':0.02,'PB_B':0.005,'Bank_C':0.001,'MMF_D':0.0001}
print(rollover_risk(book, pds))
```

## Lessons from the 2008 Crisis

- **Lehman Brothers**: ~\$600 bn in repo positions unwound in 48 hours
- **Primary Reserve Fund**: broke the buck after Lehman commercial paper losses → money-market freeze
- **Tri-party repo**: concentration of operational infrastructure at JP Morgan and BNY Mellon created single points of failure

## Regulatory Response

- **Dodd-Frank / EMIR**: mandatory central clearing through FICC / EUREX
- **FSB haircut floors (2023)**: minimum regulatory haircuts for non-centrally-cleared SFTs
- **EU SFTR**: reporting of all securities financing transactions; transparency data published by ESMA

## Related Articles

- [[systemic-contagion-debtrank|Systemic Risk and DebtRank]] — network-based contagion model
- [[kyle-lambda|Kyle's Lambda]] — price impact of fire sales
- [[isda-simm|ISDA SIMM]] — initial margin for OTC derivatives (analogous to haircuts)
- [[extreme-value-theory|Extreme Value Theory]] — modelling tail moves in repo rates
- [[xva|XVA]] — FVA incorporates cost of repo-based funding
