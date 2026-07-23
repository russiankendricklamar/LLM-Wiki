#!/usr/bin/env python3
"""
Square Root Market Impact Law Calculator
Estimates order execution slippage and market impact using Barra / Barra-style square root models.
"""

import numpy as np

def square_root_impact(order_volume, daily_volume, daily_volatility, Y_constant=0.75):
    """
    Impact = Y * sigma * sqrt(Q / V_daily)
    """
    participation_rate = order_volume / daily_volume
    impact_pct = Y_constant * daily_volatility * np.sqrt(participation_rate)
    return impact_pct

def main():
    print("=" * 65)
    print("      SQUARE ROOT MARKET IMPACT LAW CALCULATOR")
    print("=" * 65)
    
    daily_volume = 1_000_000 # 1 Million shares daily volume
    daily_volatility = 0.02  # 2% daily volatility
    stock_price = 100.0
    
    order_sizes = [5_000, 10_000, 50_000, 100_000]
    
    print(f"Daily Volume: {daily_volume:,} | Daily Vol: {daily_volatility*100:.1f}% | Stock Price: ${stock_price:.2f}\n")
    print(f"{'Order Size':<12} | {'Participation':<15} | {'Market Impact (%)':<20} | {'Slippage ($)':<15}")
    print("-" * 65)
    
    for Q in order_sizes:
        part_rate = Q / daily_volume
        impact = square_root_impact(Q, daily_volume, daily_volatility)
        slippage_dollars = stock_price * impact
        print(f"{Q:<12,} | {part_rate*100:<14.2f}% | {impact*100:<19.4f}% | ${slippage_dollars:<14.4f}")
        
    print("=" * 65)

if __name__ == "__main__":
    main()
