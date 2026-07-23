#!/usr/bin/env python3
"""
Algorithmic Execution Simulator (TWAP & VWAP)
Simulates order slicing strategies against market impact and synthetic orderbook volume profiles.
"""

import numpy as np

def main():
    print("=" * 65)
    print("      ALGORITHMIC EXECUTION SIMULATOR (TWAP vs VWAP)")
    print("=" * 65)
    
    total_volume_to_buy = 10_000
    n_slices = 10
    
    # Typical U-shaped intraday volume profile
    vol_profile = np.array([0.15, 0.10, 0.08, 0.06, 0.05, 0.05, 0.07, 0.09, 0.15, 0.20])
    vol_profile /= np.sum(vol_profile)
    
    base_price = 100.0
    price_noise = np.random.normal(0, 0.2, n_slices)
    market_prices = base_price + np.cumsum(price_noise)
    
    # 1. TWAP Strategy: Equal slicing across time
    twap_slice_size = total_volume_to_buy / n_slices
    twap_exec_prices = []
    
    # 2. VWAP Strategy: Slicing proportional to market volume profile
    vwap_exec_prices = []
    
    # Temporary market impact coefficient
    gamma_impact = 0.0005 
    
    for i in range(n_slices):
        p_mkt = market_prices[i]
        
        # TWAP execution with impact
        twap_impact = gamma_impact * twap_slice_size
        twap_exec_prices.append(p_mkt + twap_impact)
        
        # VWAP execution with impact
        vwap_slice_size = total_volume_to_buy * vol_profile[i]
        vwap_impact = gamma_impact * vwap_slice_size
        vwap_exec_prices.append(p_mkt + vwap_impact)
        
    avg_twap_price = np.mean(twap_exec_prices)
    avg_vwap_price = np.sum(np.array(vwap_exec_prices) * vol_profile)
    benchmark_vwap = np.sum(market_prices * vol_profile)
    
    print(f"Total Order Size:       {total_volume_to_buy:,} shares")
    print(f"Market Benchmark VWAP:  ${benchmark_vwap:.4f}\n")
    print(f"TWAP Execution Avg:     ${avg_twap_price:.4f} (Slippage: +${avg_twap_price - benchmark_vwap:.4f})")
    print(f"VWAP Execution Avg:     ${avg_vwap_price:.4f} (Slippage: +${avg_vwap_price - benchmark_vwap:.4f})")
    print("=" * 65)

if __name__ == "__main__":
    main()
