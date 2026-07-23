#!/usr/bin/env python3
"""
Monte Carlo Option Pricer with Variance Reduction Techniques
Prices European Call and Asian Call options using Antithetic Variates.
"""

import numpy as np

def price_european_call_mc(S0=100.0, K=100.0, T=1.0, r=0.05, sigma=0.2, n_sims=100_000):
    np.random.seed(42)
    # Standard Monte Carlo
    z = np.random.normal(0, 1, n_sims)
    ST_standard = S0 * np.exp((r - 0.5 * sigma**2) * T + sigma * np.sqrt(T) * z)
    payoffs_standard = np.maximum(ST_standard - K, 0)
    price_standard = np.exp(-r * T) * np.mean(payoffs_standard)
    std_err_standard = np.exp(-r * T) * np.std(payoffs_standard) / np.sqrt(n_sims)
    
    # Antithetic Variates
    z_half = np.random.normal(0, 1, n_sims // 2)
    z_anti = np.concatenate([z_half, -z_half])
    ST_anti = S0 * np.exp((r - 0.5 * sigma**2) * T + sigma * np.sqrt(T) * z_anti)
    payoffs_anti = np.maximum(ST_anti - K, 0)
    price_anti = np.exp(-r * T) * np.mean(payoffs_anti)
    std_err_anti = np.exp(-r * T) * np.std(payoffs_anti) / np.sqrt(n_sims)
    
    return price_standard, std_err_standard, price_anti, std_err_anti

def main():
    print("=" * 65)
    print("      MONTE CARLO OPTION PRICER & VARIANCE REDUCTION")
    print("=" * 65)
    
    price_std, err_std, price_anti, err_anti = price_european_call_mc()
    
    print(f"European Call (S0=100, K=100, T=1, r=5%, sigma=20%):")
    print(f"  Standard MC Price:    ${price_std:.4f} ± ${err_std:.4f}")
    print(f"  Antithetic MC Price:  ${price_anti:.4f} ± ${err_anti:.4f}")
    print(f"  Variance Reduction:   {(1 - (err_anti**2 / err_std**2)) * 100:.2f}% reduction in variance")
    print("=" * 65)

if __name__ == "__main__":
    main()
