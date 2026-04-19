---
slug: "/finance/put-call-parity"
title: "Put-Call Parity"
category: "Pricing Models"
order: 151
lang: "en"
---
# Put-Call Parity

**Put-call parity** is a fundamental no-arbitrage relationship linking European call and put prices to the underlying and the risk-free rate. It holds independently of any pricing model and is one of the most robust results in financial theory.

## The Core Identity

For European options on a non-dividend-paying stock with the same strike $K$ and expiry $T$:

$$
C - P = S - Ke^{-rT}
$$

where $C$ is the call price, $P$ is the put price, $S$ is the current spot, $r$ is the continuously compounded risk-free rate, and $T$ is the time to expiry.

## No-Arbitrage Proof

Consider two portfolios at time $t = 0$:

- **Portfolio A**: Long one call + invest $Ke^{-rT}$ in the risk-free bond
- **Portfolio B**: Long one put + long one share of stock

At expiry $T$:

| Scenario | Portfolio A | Portfolio B |
|:---------|:------------|:------------|
| $S_T > K$ | $(S_T - K) + K = S_T$ | $0 + S_T = S_T$ |
| $S_T \leq K$ | $0 + K = K$ | $(K - S_T) + S_T = K$ |

Both portfolios have identical payoffs in all states. By no-arbitrage, their current values must be equal:

$$
C + Ke^{-rT} = P + S \quad \Longrightarrow \quad C - P = S - Ke^{-rT}
$$

## Extensions

### Dividend-Paying Stocks

For a stock paying known discrete dividends with present value $D$:

$$
C - P = S - D - Ke^{-rT}
$$

For continuous dividend yield $q$:

$$
C - P = Se^{-qT} - Ke^{-rT}
$$

This form connects directly to the [[black-scholes]] model with dividends and to [[garman-kohlhagen]] for FX options (where $q = r_f$).

### Forward Version

Using the forward price $F = Se^{(r-q)T}$:

$$
C - P = e^{-rT}(F - K)
$$

This is the most general form and works for any underlying with a well-defined forward. When $K = F$, the call and put have equal value (ATM-forward parity).

### Futures Options

For options on futures contracts (Black's model):

$$
C - P = e^{-rT}(F - K)
$$

identical to the forward version, since the futures price $F$ already incorporates cost of carry.

## American Options

Put-call parity does not hold as an equality for American options because early exercise creates an asymmetry. Instead, we have bounds:

$$
S - K \leq C_A - P_A \leq S - Ke^{-rT}
$$

The upper bound comes from the fact that the American call on a non-dividend-paying stock is never exercised early (equal to the European call). The lower bound reflects that the American put may be exercised early, making $P_A \geq P_E$.

## Arbitrage from Violations

If the parity is violated, arbitrage opportunities arise:

**Case 1**: $C - P > S - Ke^{-rT}$ (call overpriced relative to put)
- Sell call, buy put, buy stock, borrow $Ke^{-rT}$
- Lock in riskless profit $= (C - P) - (S - Ke^{-rT}) > 0$

**Case 2**: $C - P < S - Ke^{-rT}$ (put overpriced relative to call)
- Buy call, sell put, short stock, invest $Ke^{-rT}$
- Lock in riskless profit $= (S - Ke^{-rT}) - (C - P) > 0$

In practice, transaction costs, borrowing constraints, and short-selling restrictions create a **no-arbitrage band** around parity.

## Synthetic Positions

Put-call parity enables the construction of synthetic instruments:

$$
\text{Synthetic long stock} = \text{Long call} + \text{Short put} + Ke^{-rT} \text{ in bonds}
$$

$$
\text{Synthetic long call} = \text{Long put} + \text{Long stock} - Ke^{-rT} \text{ borrowed}
$$

$$
\text{Synthetic long put} = \text{Long call} - \text{Long stock} + Ke^{-rT} \text{ in bonds}
$$

**Conversion**: Long stock + long put + short call = risk-free bond. This is the basis of **conversion/reversal arbitrage**, the bread and butter of options market makers.

## Extracting Market Information

Rearranging parity yields:

**Implied dividends**: Given observed $C$, $P$, $S$, $K$, $r$, $T$:

$$
D_{\text{impl}} = S - (C - P) - Ke^{-rT}
$$

**Implied interest rate**: From futures options or when dividends are known:

$$
r_{\text{impl}} = -\frac{1}{T}\ln\!\left(\frac{C - P + Ke^{-rT_{\text{guess}}}}{S - D}\right) \cdot \frac{1}{\text{iteration}}
$$

These extractions are used by traders to verify consistency of option prices with the term structure of rates and dividend expectations.

## Connection to Greeks

Taking partial derivatives of the parity relation:

$$
\Delta_C - \Delta_P = 1, \qquad \Gamma_C = \Gamma_P, \qquad \mathcal{V}_C = \mathcal{V}_P
$$

These identities (see [[greeks-options]]) hold exactly and provide a consistency check for any pricing model. The equality of vega and gamma between calls and puts is a direct consequence of parity.

## Practical Applications

1. **Synthetic positions**: Construct any leg from the other two; critical when one instrument is illiquid.
2. **Conversion/reversal arbitrage**: Market makers trade mispricings between calls, puts, and the underlying.
3. **Dividend extraction**: Implied dividends from options are often more accurate than analyst forecasts.
4. **Model validation**: Any option pricing model must satisfy parity; violation indicates a bug.
5. **Vol surface construction**: Parity ensures call and put implied vols at the same strike are identical.

## Related Topics
- [[black-scholes]]
- [[greeks-options]]
- [[option-strategies]]
- [[garman-kohlhagen]]
- [[bs-market-self-financing]]
