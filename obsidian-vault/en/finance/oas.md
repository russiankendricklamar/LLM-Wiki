---
title: "Option-Adjusted Spread (OAS)"
category: "Quantitative Finance"
order: 10
lang: "en"
---
# Option-Adjusted Spread (OAS)

The **Option-Adjusted Spread (OAS)** is the yield spread relative to a benchmark yield curve (usually the risk-free curve) that is adjusted to account for the value of embedded options, such as call or put features.

OAS is a critical metric for fixed-income investors as it allows for the comparison of bonds with different optionality on an "apples-to-apples" basis by isolating the pure credit and liquidity risk premium.

## Why Adjust for Options?

A standard Z-spread (Zero-volatility spread) measures the spread over the yield curve assuming fixed cash flows. However, embedded options make cash flows uncertain and dependent on future interest rate paths.

- **For Callable Bonds**: The issuer has the right to buy back the bond when rates fall. Investors demand a higher yield to compensate for this reinvestment risk. Thus, for callable bonds: **OAS < Z-Spread**.
- **For Putable Bonds**: The investor has the right to sell the bond back to the issuer when rates rise. This feature is valuable to the investor. Thus, for putable bonds: **OAS > Z-Spread**.

## Mathematical Concept

OAS is calculated using stochastic interest rate models (e.g., Hull-White or Black-Derman-Toy). The model generates multiple interest rate paths. The OAS is the constant spread $s$ that, when added to all short rates in the model, makes the average present value of the bond's cash flows equal to its market price:

$$
P_{market} = \frac{1}{N} \sum_{path=1}^{N} \text{PV}(path, r + s)
$$

Where $s$ is the OAS.

## OAS in Mortgage-Backed Securities (MBS)

OAS is the primary valuation tool for MBS because homeowners have the option to prepay their mortgages when rates drop (prepayment risk). OAS helps investors determine if the yield of an MBS sufficiently compensates them for credit risk after accounting for the volatility of prepayments.

## Python: Conceptual Relationship

While a real OAS calculation requires a binomial tree or Monte Carlo simulation, the relationship is defined as:

```python
def calculate_oas_simple(z_spread, option_cost):
    """
    Conceptual relationship for a callable bond.
    Option cost is expressed in basis points of yield.
    """
    return z_spread - option_cost

z_spread = 150 # bps
option_cost = 40 # bps (value of issuer's call right)
oas = calculate_oas_simple(z_spread, option_cost)

print(f"Option-Adjusted Spread: {oas} bps")
```

## Spread Comparison

| Spread Type | Uses Yield Curve? | Accounts for Options? | Primary Use |
| :--- | :---: | :---: | :--- |
| **G-Spread** | No | No | Simple Corporate Bonds |
| **Z-Spread** | Yes | No | Bullet Bonds |
| **OAS** | Yes | Yes | MBS, Callable/Putable Bonds |

## Summary

OAS is the "clean" spread. If the OAS of a bond is significantly higher than that of peers with similar credit ratings, the bond may be considered undervalued, as the higher spread isn't just a reflection of the embedded option's cost.


## Related Topics
- [[dv01]]
- [[sabr-model]]
