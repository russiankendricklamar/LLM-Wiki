---
title: "Securitization"
category: "Risk Management"
order: 80
lang: "en"
---
# Securitization

**Securitization** is the process of pooling illiquid assets — mortgages, auto loans, credit card receivables, student loans — into a **Special Purpose Vehicle (SPV)** that issues tradeable securities (tranches) backed by the pool's cash flows. By transforming balance-sheet assets into capital-market instruments, securitization provides originators with funding and risk transfer, while offering investors access to diversified credit exposures with tailored risk-return profiles.

## Mechanics

### The SPV Structure

The originator (bank, finance company) sells a pool of assets to a bankruptcy-remote SPV. The SPV funds the purchase by issuing tranches of asset-backed securities (ABS). Cash flows (principal and interest payments from borrowers) are distributed to tranches according to a **waterfall** — a contractual priority of payments.

### Waterfall Structure

A typical sequential-pay waterfall:

1. **Senior fees**: Trustee, servicer, and administrative fees
2. **Senior tranche interest**: Class A receives interest first
3. **Mezzanine interest**: Class B receives interest next
4. **Senior principal**: Class A receives scheduled and prepaid principal
5. **Mezzanine principal**: Class B receives principal after A is fully repaid
6. **Equity/residual**: Remainder flows to the equity tranche (first-loss position)

The **overcollateralization (OC) test** diverts cash from junior to senior tranches if collateral coverage falls below a threshold.

## Mortgage-Backed Securities (MBS)

### Agency vs. Non-Agency

**Agency MBS** (Ginnie Mae, Fannie Mae, Freddie Mac): Government-guaranteed principal and interest; prepayment risk is the primary concern; enormous market (~$9 trillion outstanding).

**Non-agency MBS**: No government guarantee; credit risk is material; structured into tranches with credit enhancement. Subprime and Alt-A non-agency MBS were at the center of the 2007-08 crisis.

### Prepayment Risk

Borrowers can refinance or move, creating **prepayment risk**. The **PSA (Public Securities Association)** model benchmarks prepayment speed:

$$
\text{CPR}(t) = \min(0.06, \; 0.002 \cdot t) \quad \text{(100% PSA)}
$$

where CPR is the conditional prepayment rate and $t$ is the loan age in months. The single monthly mortality:

$$
\text{SMM}(t) = 1 - (1 - \text{CPR}(t))^{1/12}
$$

### OAS — Option-Adjusted Spread

Because MBS contain an embedded prepayment option, the correct spread measure is the **OAS**: the constant spread over the risk-free curve that equates the model price (averaging over interest rate paths and path-dependent prepayment) to the market price:

$$
P_{\text{market}} = \frac{1}{N}\sum_{k=1}^{N} \sum_{t=1}^{T} \frac{CF_t^{(k)}}{(1 + r_t^{(k)} + \text{OAS})^t}
$$

where $CF_t^{(k)}$ are cash flows on path $k$ and $r_t^{(k)}$ are the simulated short rates. See [[oas]] for the full derivation.

## Credit Enhancement

Mechanisms to protect senior tranches from losses:

| Technique | Description |
|:---|:---|
| **Subordination** | Junior tranches absorb losses before senior |
| **Overcollateralization** | Pool principal exceeds issued securities |
| **Excess spread** | Pool coupon exceeds weighted-average tranche coupon |
| **Reserve account** | Cash set aside from initial proceeds |
| **Monoline insurance** | Third-party guarantee (pre-crisis) |

The credit enhancement level determines the rating: 30% subordination might yield AAA for the senior tranche.

## Asset-Backed Securities (ABS)

Beyond mortgages, securitization covers diverse collateral:

- **Auto loan ABS**: Short duration (3-5 years), low prepayment, predictable losses
- **Credit card ABS**: Revolving structure with controlled amortization; master trust issues multiple series
- **Student loan ABS**: Long duration, government-guaranteed (FFELP) or private; income-driven repayment adds uncertainty
- **CLOs (Collateralized Loan Obligations)**: Leveraged loan pools with actively managed collateral; the largest structured credit market post-crisis

## CDO-Squared

A **CDO-squared** (CDO$^2$) is a CDO whose collateral consists of tranches from other CDOs. The re-tranching creates extreme leverage and concentration: a small increase in the underlying default rate can cascade through two layers of subordination, wiping out inner CDO equity and then the CDO$^2$ equity. These instruments amplified losses during 2007-08 and are now rare.

## Synthetic Securitization

Instead of physically transferring assets to an SPV, the originator uses **CDS contracts** (see [[credit-derivatives-cds]]) to transfer credit risk synthetically. The SPV sells protection on the reference portfolio and issues credit-linked notes to investors. Advantages: no need to transfer legal ownership of loans; faster execution; regulatory capital relief under Basel III/IV.

## The 2007-08 Crisis

The crisis exposed systemic failures across the securitization chain:

- **Originate-to-distribute**: Originators had no incentive to screen borrowers because loans were immediately securitized — NINJA (No Income, No Job, No Assets) loans proliferated
- **Rating agency failures**: Models used Gaussian copulas with low correlation assumptions (see [[cdo-tranches]]), producing inflated AAA ratings on subprime-backed tranches
- **Mark-to-market spirals**: Falling MBS prices forced leveraged holders to sell, depressing prices further — a classic fire-sale externality
- **Correlation breakdown**: Subprime defaults were far more correlated than historical data suggested, because house prices had never declined nationally before
- **Liquidity evaporation**: SIVs and ABCP conduits that funded long-term MBS with short-term paper faced overnight rollover crises

## Post-Crisis Regulation

**Dodd-Frank (2010)**: Risk retention rule — securitizers must retain at least 5% of credit risk ("skin in the game"). Qualified Residential Mortgages (QRM) are exempt.

**EU Securitisation Regulation (2019)**: Simple, Transparent, and Standardised (STS) framework for preferential capital treatment. Mandatory due diligence, transparency templates, and ban on re-securitization.

**Basel III/IV**: Higher risk weights for securitization exposures; hierarchy of approaches (SEC-IRBA, SEC-ERBA, SEC-SA) with look-through to underlying pool quality.

## Python Implementation

```python
import numpy as np

def psa_prepayment(age_months: int, psa_speed: float = 1.0) -> float:
    """Conditional prepayment rate under PSA model."""
    cpr = min(0.06, 0.002 * age_months) * psa_speed
    smm = 1 - (1 - cpr) ** (1 / 12)
    return smm

def mbs_cash_flows(
    balance: float, wac: float, wam: int,
    psa_speed: float = 1.0
) -> np.ndarray:
    """Project MBS cash flows with PSA prepayment."""
    monthly_rate = wac / 12
    cash_flows = np.zeros(wam)
    remaining = balance

    for t in range(1, wam + 1):
        if remaining <= 0:
            break
        interest = remaining * monthly_rate
        scheduled_principal = (remaining * monthly_rate /
            (1 - (1 + monthly_rate) ** -(wam - t + 1))) - interest
        smm = psa_prepayment(t, psa_speed)
        prepayment = (remaining - scheduled_principal) * smm
        total_principal = scheduled_principal + prepayment
        cash_flows[t - 1] = interest + total_principal
        remaining -= total_principal

    return cash_flows

def sequential_waterfall(
    cash_flows: np.ndarray,
    tranche_sizes: list[float],
    tranche_coupons: list[float]
) -> dict:
    """Distribute cash flows through a sequential-pay waterfall."""
    n_tranches = len(tranche_sizes)
    balances = list(tranche_sizes)
    tranche_cf = {i: np.zeros(len(cash_flows)) for i in range(n_tranches)}

    for t, cf in enumerate(cash_flows):
        remaining_cf = cf
        # Interest payments (senior first)
        for i in range(n_tranches):
            interest = balances[i] * tranche_coupons[i] / 12
            paid = min(interest, remaining_cf)
            tranche_cf[i][t] += paid
            remaining_cf -= paid
        # Principal payments (senior first)
        for i in range(n_tranches):
            principal = min(balances[i], remaining_cf)
            tranche_cf[i][t] += principal
            balances[i] -= principal
            remaining_cf -= principal

    return tranche_cf

# Example: $100M pool, 5.5% WAC, 360 months, 150% PSA
cfs = mbs_cash_flows(100_000_000, 0.055, 360, psa_speed=1.5)
print(f"Total cash flows: ${cfs.sum():,.0f}")
print(f"WAL: {sum((t+1)/12 * cfs[t] for t in range(len(cfs))) / cfs.sum():.1f} years")
```

## Prepayment Speed Impact on WAL

```chart
{
  "type": "bar",
  "xAxis": "psa",
  "data": [
    {"psa": "50% PSA", "wal_years": 14.2},
    {"psa": "100% PSA", "wal_years": 10.5},
    {"psa": "150% PSA", "wal_years": 7.8},
    {"psa": "200% PSA", "wal_years": 5.9},
    {"psa": "300% PSA", "wal_years": 4.1}
  ],
  "bars": [
    {"dataKey": "wal_years", "fill": "#3b82f6", "name": "Weighted Average Life (years)"}
  ]
}
```

## Related Topics
- [[cdo-tranches]]
- [[credit-derivatives-cds]]
- [[credit-risk-models]]
- [[copula-models]]
- [[oas]]
- [[value-at-risk]]
