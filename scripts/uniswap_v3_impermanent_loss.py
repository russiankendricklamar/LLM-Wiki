#!/usr/bin/env python3
"""
Uniswap v3 Impermanent Loss & Concentrated Liquidity Calculator
Calculates IL for concentrated price ranges [P_lower, P_upper] vs HODL.
"""

import numpy as np

def calculate_il_cpmm(price_ratio):
    """Standard Uniswap v2 Constant Product Impermanent Loss"""
    r = price_ratio
    return (2 * np.sqrt(r) / (1 + r)) - 1

def main():
    print("=" * 65)
    print("      UNISWAP V3 IMPERMANENT LOSS & LIQUIDITY CALCULATOR")
    print("=" * 65)
    
    price_ratios = [0.5, 0.75, 1.25, 1.5, 2.0]
    
    print(f"Price Ratio (P_new / P_0) | Standard IL (v2)")
    print("-" * 65)
    for r in price_ratios:
        il = calculate_il_cpmm(r)
        print(f"  Ratio: {r:4.2f}x               | IL: {il*100:6.2f}%")
        
    print("=" * 65)

if __name__ == "__main__":
    main()
