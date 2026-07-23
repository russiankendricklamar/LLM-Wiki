---
title: "Longstaff-Schwartz American Option Pricer"
category: "Pricing & Execution"
---
#!/usr/bin/env python3
"""
Longstaff-Schwartz Least Squares Monte Carlo (LSM)
Prices American Put options with early exercise features.
"""

import numpy as np

def price_american_put_lsm(S0=100.0, K=100.0, T=1.0, r=0.05, sigma=0.2, n_steps=50, n_paths=10_000):
    np.random.seed(42)
    dt = T / n_steps
    df = np.exp(-r * dt)
    
    # Simulate price paths under GBM
    price_paths = np.zeros((n_steps + 1, n_paths))
    price_paths[0] = S0
    for t in range(1, n_steps + 1):
        z = np.random.normal(0, 1, n_paths)
        price_paths[t] = price_paths[t-1] * np.exp((r - 0.5 * sigma**2) * dt + sigma * np.sqrt(dt) * z)
        
    # Cash flow matrix initialized to terminal payoff
    cash_flows = np.maximum(K - price_paths[-1], 0)
    
    # Backward induction
    for t in range(n_steps - 1, 0, -1):
        st = price_paths[t]
        itm_indices = np.where(K - st > 0)[0]
        
        if len(itm_indices) == 0:
            cash_flows *= df
            continue
            
        x_itm = st[itm_indices]
        y_continuation = cash_flows[itm_indices] * df
        
        # Basis functions for regression: 1, x, x^2
        poly_matrix = np.vstack([np.ones_like(x_itm), x_itm, x_itm**2]).T
        coeffs = np.linalg.lstsq(poly_matrix, y_continuation, rcond=None)[0]
        continuation_values = poly_matrix @ coeffs
        
        immediate_exercise = K - x_itm
        exercise_decisions = immediate_exercise > continuation_values
        
        # Update cash flows
        cash_flows *= df
        cash_flows[itm_indices[exercise_decisions]] = immediate_exercise[exercise_decisions]
        
    american_price = np.mean(cash_flows * df)
    return american_price

def main():
    print("=" * 65)
    print("      LONGSTAFF-SCHWARTZ AMERICAN PUT OPTION PRICER (LSM)")
    print("=" * 65)
    
    price = price_american_put_lsm()
    print(f"American Put Option Price (S0=100, K=100, T=1.0, r=5%, sigma=20%):")
    print(f"  Estimated Value: ${price:.4f}")
    print("=" * 65)

if __name__ == "__main__":
    main()
