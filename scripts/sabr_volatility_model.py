#!/usr/bin/env python3
"""
SABR Implied Volatility Model
Calculates Hagan's asymptotic Black implied volatility smile across strikes.
"""

import numpy as np

def sabr_implied_volatility(F, K, T, alpha, beta, rho, nu):
    """
    Hagan's asymptotic SABR implied volatility formula for Black volatility.
    """
    if F == K:
        # At-the-money (ATM) formula simplification
        term1 = alpha / (F ** (1 - beta))
        term2 = 1 + (((1 - beta)**2 / 24) * (alpha**2 / (F**(2 - 2*beta))) + 
                     (0.25 * rho * beta * nu * alpha / (F**(1 - beta))) + 
                     ((2 - 3 * rho**2) / 24) * nu**2) * T
        return term1 * term2
        
    fk_beta = (F * K) ** ((1 - beta) / 2)
    log_fk = np.log(F / K)
    
    z = (nu / alpha) * fk_beta * log_fk
    x_z = np.log((np.sqrt(1 - 2 * rho * z + z**2) + z - rho) / (1 - rho))
    
    term1 = alpha / (fk_beta * (1 + ((1 - beta)**2 / 24) * (log_fk**2) + ((1 - beta)**4 / 1920) * (log_fk**4)))
    term2 = z / x_z if z != 0 else 1.0
    term3 = 1 + (((1 - beta)**2 / 24) * (alpha**2 / (fk_beta**2)) + 
                 (0.25 * rho * beta * nu * alpha / fk_beta) + 
                 ((2 - 3 * rho**2) / 24) * nu**2) * T
                 
    return term1 * term2 * term3

def main():
    print("=" * 65)
    print("      SABR STOCHASTIC VOLATILITY MODEL (HAGAN FORMULA)")
    print("=" * 65)
    
    F = 100.0   # Forward price
    T = 1.0     # Time to expiry (1 year)
    alpha = 0.2 # Initial volatility
    beta = 0.5  # Constant Elasticity of Variance parameter
    rho = -0.3  # Correlation (skew)
    nu = 0.4    # Volatility of volatility (smile curvature)
    
    strikes = [80, 90, 100, 110, 120]
    
    print(f"Forward Price (F): {F} | Expiry (T): {T}y | Beta: {beta} | Rho: {rho} | Nu: {nu}\n")
    print(f"{'Strike (K)':<12} | {'Moneyness (K/F)':<18} | {'SABR Implied Volatility':<25}")
    print("-" * 65)
    
    for K in strikes:
        vol = sabr_implied_volatility(F, K, T, alpha, beta, rho, nu)
        print(f"${K:<11} | {K/F:<18.2f} | {vol*100:<24.2f}%")
        
    print("=" * 65)

if __name__ == "__main__":
    main()
