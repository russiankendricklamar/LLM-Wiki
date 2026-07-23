#!/usr/bin/env python3
"""
Delta-Neutral Gamma Scalping Simulator
Simulates purchasing a long straddle/call and dynamically hedging delta to capture volatility.
"""

import numpy as np

def main():
    print("=" * 65)
    print("      DELTA-NEUTRAL GAMMA SCALPING SIMULATOR")
    print("=" * 65)
    
    S0 = 100.0
    dt = 1/252.0  # Daily step
    n_days = 20
    sigma_realized = 0.35 # High realized volatility
    
    np.random.seed(42)
    daily_returns = np.random.normal(0, sigma_realized * np.sqrt(dt), n_days)
    price_path = S0 * np.exp(np.cumsum(daily_returns))
    
    cash = 0.0
    stock_pos = 0.0
    gamma_pnl = 0.0
    
    # Initial long call option with delta = 0.5, gamma = 0.05
    initial_delta = 0.5
    gamma = 0.05
    
    # Sell initial delta shares to be Delta-Neutral
    stock_pos = -initial_delta
    cash += initial_delta * S0
    
    print(f"Day 0: Stock Price = ${S0:.2f} | Initial Delta = {initial_delta:.2f} | Short Stock = {stock_pos:.2f}")
    
    for day in range(1, n_days + 1):
        p_curr = price_path[day-1]
        p_prev = S0 if day == 1 else price_path[day-2]
        dS = p_curr - p_prev
        
        # Delta shift due to Gamma: dDelta = Gamma * dS
        delta_shift = gamma * dS
        new_delta = initial_delta + gamma * (p_curr - S0)
        
        # Rebalance stock position to maintain zero total delta
        desired_stock_pos = -new_delta
        trade_stock = desired_stock_pos - stock_pos
        
        cash -= trade_stock * p_curr
        stock_pos = desired_stock_pos
        
        # Approximate PnL captured by Gamma scalping: 0.5 * Gamma * (dS)^2
        scalp_profit = 0.5 * gamma * (dS ** 2)
        gamma_pnl += scalp_profit
        
        print(f"Day {day:02d}: Stock = ${p_curr:.2f} (dS = {dS:+.2f}) | Scalped Profit: +${scalp_profit:.4f}")

    print("=" * 65)
    print("               GAMMA SCALPING RESULTS SUMMARY")
    print("=" * 65)
    print(f"Realized Volatility:       {sigma_realized*100:.1f}% p.a.")
    print(f"Cumulative Scalped P&L:   +${gamma_pnl:.4f}")
    print("=" * 65)

if __name__ == "__main__":
    main()
