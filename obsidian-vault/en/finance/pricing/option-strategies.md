---
slug: "/finance/option-strategies"
title: "Option Strategies"
category: "Pricing"
order: 150
lang: "en"
---
# Option Strategies

Option strategies combine multiple legs — calls, puts, and the underlying — to construct payoff profiles tailored to specific market views. Understanding these structures requires fluency in the [[greeks-options]] and [[put-call-parity]].

## Vertical Spreads

### Bull Call Spread

Buy a call at strike $K_1$, sell a call at $K_2 > K_1$, same expiry.

$$
\text{Payoff} = \max(S_T - K_1, 0) - \max(S_T - K_2, 0)
$$

- **Max profit**: $(K_2 - K_1) - \text{net premium}$, achieved when $S_T \geq K_2$
- **Max loss**: net premium paid
- **Breakeven**: $K_1 + \text{net premium}$
- **Greeks**: net long delta (but smaller than naked call), reduced vega exposure

### Bear Put Spread

Buy a put at $K_2$, sell a put at $K_1 < K_2$. Mirror image of the bull call; profits from decline.

$$
\text{Max profit} = (K_2 - K_1) - \text{net premium}, \qquad \text{Max loss} = \text{net premium}
$$

## Volatility Strategies

### Straddle

Buy a call and a put at the same strike $K$ and expiry. Profits from large moves in either direction.

$$
\text{Payoff} = |S_T - K|, \qquad \text{Breakevens}: K \pm \text{premium}
$$

The position is initially delta-neutral ($\Delta_C + \Delta_P \approx 0$ for ATM) but has large positive gamma and vega. The trader pays significant theta and needs realised volatility to exceed implied to profit (see [[greeks-options]]).

### Strangle

Buy an OTM call at $K_2$ and an OTM put at $K_1 < K_2$. Cheaper than a straddle but requires a larger move to profit.

$$
\text{Breakevens}: K_1 - \text{premium},\; K_2 + \text{premium}
$$

### Risk Reversal

Long OTM call + short OTM put (or vice versa). Net premium is small or zero. Expresses a directional view with skew exposure:

$$
\Delta_{\text{RR}} \approx \Delta_C - |\Delta_P|, \qquad \mathcal{V}_{\text{RR}} = \mathcal{V}_C - \mathcal{V}_P
$$

Risk reversals are the standard instrument for trading the volatility skew in FX markets (see [[garman-kohlhagen]]).

## Butterfly and Condor

### Butterfly Spread

Buy 1 call at $K_1$, sell 2 calls at $K_2$, buy 1 call at $K_3$, where $K_2 = (K_1 + K_3)/2$.

$$
\text{Max profit} = (K_2 - K_1) - \text{net premium}, \quad \text{at } S_T = K_2
$$

The butterfly is short gamma and short vega: it profits if the price stays near $K_2$. It can be decomposed as a bull spread plus a bear spread sharing the middle strike.

### Iron Condor

Sell a strangle (short OTM call at $K_3$, short OTM put at $K_2$) and buy a wider strangle (long OTM call at $K_4 > K_3$, long OTM put at $K_1 < K_2$).

$$
\text{Max profit} = \text{net credit}, \qquad \text{Max loss} = (K_4 - K_3) - \text{credit}
$$

Short vega, short gamma — the most popular retail income strategy. Benefits from low realised vol and time decay.

## Calendar (Time) Spreads

Sell a near-dated option and buy a longer-dated option at the same strike.

$$
\text{Profit driver}: \Theta_{\text{short}} > \Theta_{\text{long}} \quad (\text{faster decay on short leg})
$$

The position is long vega (the back month has more vega) and profits if vol rises or the underlying stays near the strike. A **diagonal spread** uses different strikes on top of different expiries.

## Ratio Spreads

Buy $m$ options at $K_1$, sell $n > m$ options at $K_2$. For a 1x2 ratio call spread:

$$
\text{Payoff} = \max(S_T - K_1,0) - 2\max(S_T - K_2,0)
$$

This can be entered for zero cost but carries unlimited risk above $2K_2 - K_1$. The position is short gamma above $K_2$.

## Greeks of Combinations

| Strategy | $\Delta$ | $\Gamma$ | $\Theta$ | $\mathcal{V}$ |
|:---------|:--------:|:--------:|:--------:|:--------------:|
| Bull call spread | + small | mixed | mixed | + small |
| Straddle (long) | $\approx 0$ | ++ | $--$ | ++ |
| Strangle (long) | $\approx 0$ | + | $-$ | + |
| Butterfly (long) | $\approx 0$ | $-$ | + | $-$ |
| Iron condor | $\approx 0$ | $-$ | + | $-$ |
| Calendar spread | $\approx 0$ | $-$ | + | + |

## Payoff Diagram: Bull Call Spread

```chart
{
  "type": "line",
  "xAxis": "spot",
  "data": [
    {"spot": "85", "payoff": -3.2},
    {"spot": "90", "payoff": -3.2},
    {"spot": "93.2", "payoff": 0},
    {"spot": "95", "payoff": 1.8},
    {"spot": "100", "payoff": 6.8},
    {"spot": "105", "payoff": 6.8},
    {"spot": "110", "payoff": 6.8}
  ],
  "lines": [
    {"dataKey": "payoff", "stroke": "#10b981", "name": "P&L at Expiry"}
  ]
}
```

## Practical Considerations

1. **Margin**: Naked short options require margin; defined-risk structures (spreads, condors) have known maximum loss and lower margin.
2. **Early exercise**: American-style options introduce early exercise risk on short legs, especially near ex-dividend dates. Short ITM calls on dividend-paying stocks are vulnerable.
3. **Dividends**: Discrete dividends shift effective strikes and can trigger early exercise; adjust breakevens accordingly.
4. **Liquidity**: Bid-ask spreads on multi-leg structures compound; wide markets on individual legs make execution costly.
5. **Vol smile**: Strikes at different points on the vol surface have different implied vols, affecting relative pricing of legs (see [[heston-model]]).

## Related Topics
- [[greeks-options]]
- [[put-call-parity]]
- [[black-scholes]]
- [[garman-kohlhagen]]
- [[heston-model]]
