---
slug: "/finance/caps-floors-swaptions"
title: "Caps, Floors and Swaptions"
category: "Pricing Models"
order: 143
lang: "en"
---

# Caps, Floors and Swaptions

**Interest rate options** -- caps, floors, and swaptions -- are the most liquid non-linear derivatives in the rates market. They serve as primary calibration instruments for term structure models and as building blocks for structured products.

## Prerequisites

[[swaps]], [[black-scholes]], [[short-rate-models]]

## Caplets and Caps

A **caplet** is a European call on a forward interest rate $L(T_k, T_{k+1})$ (historically LIBOR, now SOFR-based). Settlement at $T_{k+1}$:

$$
\text{Caplet payoff} = \delta \cdot \max(L_k - K, 0)
$$

where $\delta = T_{k+1} - T_k$ is the day-count fraction and $K$ is the cap strike. A **cap** is a portfolio of caplets over successive periods $[T_0, T_1], [T_1, T_2], \ldots, [T_{n-1}, T_n]$.

A **floorlet** is the corresponding put: payoff $\delta \cdot \max(K - L_k, 0)$. A **floor** is a strip of floorlets.

## Cap-Floor Parity

At each reset date:

$$
\text{Caplet} - \text{Floorlet} = \delta \cdot (L_k - K) \cdot P(0, T_{k+1})^{-1} \cdot P(0, T_{k+1})
$$

Summing over all periods:

$$
\text{Cap} - \text{Floor} = \text{Payer Swap}
$$

with the same strike $K$, tenor, and frequency. This is the interest rate analogue of put-call parity.

## Black's Formula for Caplets

Under the **Black (1976) model**, the forward rate $F_k = L(0; T_k, T_{k+1})$ follows a geometric Brownian motion under the $T_{k+1}$-forward measure. The caplet price at time 0:

$$
C_k = \delta \cdot P(0, T_{k+1})\!\left[F_k N(d_1) - K N(d_2)\right]
$$

$$
d_1 = \frac{\ln(F_k/K) + \frac{1}{2}\sigma_k^2 T_k}{\sigma_k \sqrt{T_k}}, \quad d_2 = d_1 - \sigma_k\sqrt{T_k}
$$

where $\sigma_k$ is the **Black volatility** of the $k$-th forward rate. Each caplet has its own implied Black vol; the term structure $\sigma_k(T_k)$ is the **cap vol curve**.

## European Swaptions

A **European payer swaption** gives the holder the right at time $T_0$ to enter a payer swap (pay fixed $K$, receive floating) with payment dates $T_1, \ldots, T_n$. The payoff at $T_0$:

$$
\text{Payoff} = \left[\sum_{j=1}^n \delta_j P(T_0, T_j)\right] \cdot \max(S_{T_0} - K, 0)
$$

where $S_{T_0}$ is the par swap rate at $T_0$ and the sum is the annuity factor $A(T_0)$.

### Black's Formula for Swaptions

Under the annuity measure $\mathbb{Q}^A$ (numeraire $A(t) = \sum \delta_j P(t, T_j)$), the forward swap rate $S_0$ is a martingale. Black's swaption formula:

$$
V_{\text{swaption}} = A(0)\!\left[S_0 N(d_1) - K N(d_2)\right]
$$

$$
d_1 = \frac{\ln(S_0/K) + \frac{1}{2}\sigma_S^2 T_0}{\sigma_S\sqrt{T_0}}, \quad d_2 = d_1 - \sigma_S\sqrt{T_0}
$$

where $\sigma_S$ is the Black swaption volatility for the $(T_0 \times (T_n - T_0))$ swaption (e.g., 5Y into 10Y).

## Normal (Bachelier) Model

When rates can be negative, the lognormal assumption fails. The **Bachelier model** assumes the forward rate follows arithmetic Brownian motion. The caplet price becomes:

$$
C_k = \delta \cdot P(0, T_{k+1})\!\left[(F_k - K)N(d) + \sigma_n\sqrt{T_k}\,\phi(d)\right], \quad d = \frac{F_k - K}{\sigma_n\sqrt{T_k}}
$$

where $\sigma_n$ is the **normal (basis-point) volatility** and $\phi$ is the standard normal density. Normal vol is quoted in basis points per annum (e.g., 50 bps/annum).

## Black Vol vs Normal Vol

| Property | Black (Lognormal) | Bachelier (Normal) |
|----------|-------------------|-------------------|
| Distribution | Lognormal $F_T$ | Normal $F_T$ |
| Negative rates | Not supported | Supported |
| ATM approximation | $\sigma_n \approx \sigma_B \cdot F$ | $\sigma_B \approx \sigma_n / F$ |
| Smile shape | Smile | Smile (different shape) |
| Market convention | Pre-2014 standard | Post-2014, especially EUR/JPY |

The conversion between Black and normal vol for ATM options: $\sigma_n \approx \sigma_B \cdot F_{\text{ATM}}$, exact only at the money.

## The Volatility Cube

The full set of calibration instruments forms a three-dimensional object:

1. **Cap vol surface**: Black/normal vol indexed by cap strike $K$ and maturity $T$.
2. **Swaption vol matrix**: Black/normal vol indexed by option expiry $T_0$ and swap tenor $(T_n - T_0)$, usually at ATM. The grid (e.g., expiries 1M, 3M, 6M, ..., 30Y and tenors 1Y, 2Y, ..., 30Y) is the **swaption matrix**.
3. **Strike dimension**: For each $(T_0, \text{tenor})$, the smile across strikes completes the **cube**.

The cube is the definitive input to any rates model calibration.

## Calibration of Term Structure Models

### Hull-White to Caps

Hull-White provides a closed-form caplet formula via the Jamshidian trick (decompose each caplet as a bond option). Parameters $a$ (mean reversion) and $\sigma$ (volatility) are fitted to the cap vol curve.

### LMM/BGM to Caps and Swaptions

The **LIBOR Market Model** (Brace-Gatarek-Musiela, 1997) models each forward rate $F_k(t)$ directly under its own forward measure. The LMM naturally prices caplets via Black's formula (by construction). Calibrating to swaptions requires specifying the correlation structure between forward rates. Common parameterizations:

$$
\rho_{ij} = \exp(-\beta|T_i - T_j|)
$$

The LMM is calibrated by:
1. Fitting caplet vols to determine each $\sigma_k(t)$.
2. Adjusting the correlation $\beta$ and possibly time-dependent vol components to match the swaption matrix.

### HJM to the Full Cube

The Heath-Jarrow-Morton framework, with volatility functions $\sigma_f(t, T)$ chosen appropriately, can reproduce the entire volatility cube. In practice, parametric forms for $\sigma_f$ with 3--6 parameters are fitted to caps and swaptions jointly.

## Practical Considerations

- **Day count conventions**: Actual/360 for USD LIBOR/SOFR, Actual/365 for GBP SONIA. Mismatch causes pricing errors.
- **SOFR transition**: Post-LIBOR, caplets reference backward-looking SOFR compounding rather than forward-looking term rates, changing the timing of information revelation.
- **Bermudan swaptions**: Priced by backward induction on trees (Hull-White) or by Longstaff-Schwartz regression in LMM Monte Carlo.
- **Skew and smile**: ATM Black's formula is a starting point; the full smile requires SABR, displaced diffusion, or local vol overlays.

## Related Articles

- [[swaps|Interest Rate Swaps]] -- the underlying linear instruments
- [[short-rate-models|Short Rate Models]] -- Vasicek, CIR, Hull-White
- [[bond-options-gaussian|Bond Options in Gaussian Models]] -- closed-form bond options
- [[black-scholes|Black-Scholes]] -- the option pricing framework
- [[sabr-model|SABR Model]] -- smile model for rates
