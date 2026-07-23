#!/usr/bin/env python3
"""
Merton Structural Credit Risk Model
Prices corporate debt equity call option and computes Probability of Default (PD).
"""

import numpy as np
from scipy.stats import norm

def merton_credit_risk(E=10.0, E_vol=0.40, D=80.0, r=0.05, T=1.0):
    """
    Solves for Firm Asset Value V and Asset Volatility sigma_V using Merton's model.
    """
    # Initial guess V = E + D
    V = E + D
    sigma_V = E_vol * (E / V)
    
    for _ in range(20):
        d1 = (np.log(V / D) + (r + 0.5 * sigma_V**2) * T) / (sigma_V * np.sqrt(T))
        d2 = d1 - sigma_V * np.sqrt(T)
        
        # Black-Scholes call option formula for equity E
        E_calc = V * norm.cdf(d1) - D * np.exp(-r * T) * norm.cdf(d2)
        sigma_V_calc = E_vol * E / (V * norm.cdf(d1))
        
        V += (E - E_calc)
        sigma_V = sigma_V_calc
        
    distance_to_default = d2
    probability_of_default = norm.cdf(-d2)
    
    return V, sigma_V, distance_to_default, probability_of_default

def main():
    print("=" * 65)
    print("        MERTON STRUCTURAL CREDIT RISK MODEL")
    print("=" * 65)
    
    V, sigma_V, dd, pd = merton_credit_risk()
    
    print(f"Firm Asset Value (V):          ${V:.2f}")
    print(f"Asset Volatility (sigma_V):     {sigma_V*100:.2f}%")
    print(f"Distance to Default (DD):      {dd:.4f} std devs")
    print(f"Probability of Default (PD):    {pd*100:.4f}%")
    print("=" * 65)

if __name__ == "__main__":
    main()
