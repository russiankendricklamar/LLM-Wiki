#!/usr/bin/env python3
"""
Avellaneda-Stoikov HFT Market Making Simulator
Solves the Hamilton-Jacobi-Bellman (HJB) reservation price and quotes optimal spreads.
"""

import numpy as np

def reservation_price(s, q, gamma, sigma_sq, T_minus_t):
    """r(s, q, t) = s - q * gamma * sigma^2 * (T - t)"""
    return s - q * gamma * sigma_sq * T_minus_t

def optimal_spread(gamma, kappa):
    """half_spread = 1/gamma * ln(1 + gamma/kappa)"""
    return (1.0 / gamma) * np.log(1.0 + gamma / kappa)

def main():
    print("=" * 65)
    print("     AVELLANEDA-STOIKOV HFT OPTIMAL MARKET MAKING SIMULATOR")
    print("=" * 65)
    
    s = 100.0        # Mid Price
    gamma = 0.1      # Risk aversion parameter
    sigma_sq = 0.04  # Price variance
    kappa = 1.5      # Intensity parameter for order fill rates
    T_minus_t = 1.0  # Time remaining
    
    print(f"Mid Price (s): ${s:.2f} | Risk Aversion (gamma): {gamma} | Volatility (sigma): {np.sqrt(sigma_sq)*100:.1f}%\n")
    print(f"{'Inventory (q)':<15} | {'Reservation Price r(s,q,t)':<28} | {'Optimal Bid @ Ask':<20}")
    print("-" * 65)
    
    half_spread = optimal_spread(gamma, kappa)
    
    for q in [-5, -2, 0, 2, 5]:
        r = reservation_price(s, q, gamma, sigma_sq, T_minus_t)
        bid = r - half_spread
        ask = r + half_spread
        print(f"{q:<15} | ${r:<27.4f} | ${bid:.2f} @ ${ask:.2f}")
        
    print("=" * 65)

if __name__ == "__main__":
    main()
