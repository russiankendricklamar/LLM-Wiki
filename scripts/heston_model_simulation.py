#!/usr/bin/env python3
"""
Heston Stochastic Volatility Model Simulator
Simulates asset price and volatility paths using Euler-Maruyama discretization.
"""

import numpy as np

def simulate_heston(S0=100.0, v0=0.04, kappa=2.0, theta=0.04, xi=0.3, rho=-0.7, r=0.03, T=1.0, n_steps=252):
    dt = T / n_steps
    
    # Check Feller condition: 2*kappa*theta > xi^2
    feller_stat = 2 * kappa * theta - xi**2
    feller_pass = feller_stat > 0
    
    np.random.seed(42)
    
    prices = np.zeros(n_steps + 1)
    volatilities = np.zeros(n_steps + 1)
    
    prices[0] = S0
    volatilities[0] = v0
    
    cov_matrix = np.array([[1.0, rho], [rho, 1.0]])
    
    for t in range(1, n_steps + 1):
        z_s, z_v = np.random.multivariate_normal([0, 0], cov_matrix)
        
        v_prev = max(volatilities[t-1], 0) # Full truncation for stability
        
        # Volatility SDE: dv = kappa*(theta - v)*dt + xi*sqrt(v)*dW_v
        dv = kappa * (theta - v_prev) * dt + xi * np.sqrt(v_prev * dt) * z_v
        volatilities[t] = max(volatilities[t-1] + dv, 0)
        
        # Price SDE: dS = r*S*dt + sqrt(v)*S*dW_s
        dS = r * prices[t-1] * dt + np.sqrt(v_prev * dt) * prices[t-1] * z_s
        prices[t] = prices[t-1] + dS
        
    return prices, volatilities, feller_pass, feller_stat

def main():
    print("=" * 65)
    print("      HESTON STOCHASTIC VOLATILITY SIMULATOR")
    print("=" * 65)
    
    prices, vols, feller_pass, feller_stat = simulate_heston()
    
    print(f"Feller Condition (2*kappa*theta > xi^2): {'PASSED' if feller_pass else 'FAILED'} ({feller_stat:.4f})")
    print(f"Initial Price: ${prices[0]:.2f} | Final Price: ${prices[-1]:.2f}")
    print(f"Initial Vol:   {np.sqrt(vols[0])*100:.1f}% | Final Vol:   {np.sqrt(vols[-1])*100:.1f}%")
    print("=" * 65)

if __name__ == "__main__":
    main()
