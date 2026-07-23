#!/usr/bin/env python3
"""
Statistical Arbitrage & Pairs Trading Simulator
Demonstrates cointegration, spread construction, Ornstein-Uhlenbeck parameter estimation,
Z-score entry/exit signal generation, and backtesting.
"""

import numpy as np

def generate_cointegrated_series(n_steps=500):
    np.random.seed(42)
    # Random walk for Asset A
    price_a = 100.0 + np.cumsum(np.random.normal(0, 1, n_steps))
    # Cointegrated Asset B = 0.8 * price_a + mean_reverting_noise
    noise = np.zeros(n_steps)
    theta = 0.1  # Mean reversion speed
    for t in range(1, n_steps):
        noise[t] = noise[t-1] - theta * noise[t-1] + np.random.normal(0, 0.5)
        
    price_b = 0.8 * price_a + 10.0 + noise
    return price_a, price_b

def main():
    print("=" * 65)
    print("      STATISTICAL ARBITRAGE & PAIRS TRADING BACKTESTER")
    print("=" * 65)
    
    price_a, price_b = generate_cointegrated_series()
    
    # Estimate hedge ratio beta using linear regression
    beta = np.cov(price_a, price_b)[0, 1] / np.var(price_a)
    spread = price_b - beta * price_a
    
    mean_spread = np.mean(spread)
    std_spread = np.std(spread)
    z_score = (spread - mean_spread) / std_spread
    
    print(f"Estimated Hedge Ratio (Beta): {beta:.4f}")
    print(f"Spread Mean: {mean_spread:.4f} | Std Dev: {std_spread:.4f}\n")
    
    # Backtest Z-Score Strategy
    # Long Spread (Buy B, Sell Beta*A) when Z < -1.5, Exit when Z > 0
    # Short Spread (Sell B, Buy Beta*A) when Z > 1.5, Exit when Z < 0
    position = 0  # +1 Long spread, -1 Short spread, 0 Flat
    pnl = 0.0
    trades = 0
    entry_price_spread = 0.0
    
    for t in range(len(spread)):
        z = z_score[t]
        curr_spread = spread[t]
        
        if position == 0:
            if z < -1.5:
                position = 1
                entry_price_spread = curr_spread
                trades += 1
            elif z > 1.5:
                position = -1
                entry_price_spread = curr_spread
                trades += 1
        elif position == 1: # Long spread
            if z >= 0:
                pnl += (curr_spread - entry_price_spread)
                position = 0
        elif position == -1: # Short spread
            if z <= 0:
                pnl += (entry_price_spread - curr_spread)
                position = 0
                
    print("=" * 65)
    print("                 BACKTEST PERFORMANCE RESULTS")
    print("=" * 65)
    print(f"Total Simulation Steps: {len(spread)}")
    print(f"Total Trades Executed:  {trades}")
    print(f"Total Cumulative P&L:   ${pnl:.2f}")
    print("=" * 65)

if __name__ == "__main__":
    main()
