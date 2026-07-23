#!/usr/bin/env python3
"""
Risk Parity / Equal Risk Contribution (ERC) Portfolio Optimizer
Computes asset weights where each asset contributes equally to total portfolio variance risk.
"""

import numpy as np
from scipy.optimize import minimize

def risk_budget_objective(weights, cov_matrix):
    """
    Objective function: minimize sum of squared differences between asset risk contributions.
    """
    portfolio_vol = np.sqrt(weights.T @ cov_matrix @ weights)
    marginal_risk_contribution = (cov_matrix @ weights) / portfolio_vol
    risk_contribution = weights * marginal_risk_contribution
    
    # Target equal risk contribution = 1 / N of total portfolio risk
    target_risk = portfolio_vol / len(weights)
    return np.sum((risk_contribution - target_risk)**2)

def main():
    print("=" * 65)
    print("   RISK PARITY / EQUAL RISK CONTRIBUTION (ERC) OPTIMIZER")
    print("=" * 65)
    
    # 3 assets with different volatilities (Stock, Bond, Commodity)
    cov_matrix = np.array([
        [0.04, 0.002, 0.01],   # Asset 1 (High vol stock ~20%)
        [0.002, 0.0025, 0.001], # Asset 2 (Low vol bond ~5%)
        [0.01, 0.001, 0.0225]   # Asset 3 (Medium vol commodity ~15%)
    ])
    
    n_assets = len(cov_matrix)
    init_weights = np.ones(n_assets) / n_assets
    
    bounds = tuple((0.0, 1.0) for _ in range(n_assets))
    constraints = ({'type': 'eq', 'fun': lambda w: np.sum(w) - 1.0})
    
    res = minimize(risk_budget_objective, init_weights, args=(cov_matrix,),
                   method='SLSQP', bounds=bounds, constraints=constraints)
                   
    w_erc = res.x
    port_vol = np.sqrt(w_erc.T @ cov_matrix @ w_erc)
    risk_contribs = w_erc * ((cov_matrix @ w_erc) / port_vol)
    
    print(f"Total Portfolio Volatility: {port_vol*100:.2f}%\n")
    print(f"{'Asset':<10} | {'Volatility':<12} | {'ERC Weight':<15} | {'Risk Contribution':<20}")
    print("-" * 65)
    for i in range(n_assets):
        asset_vol = np.sqrt(cov_matrix[i, i])
        print(f"Asset {i+1:<4} | {asset_vol*100:<11.1f}% | {w_erc[i]*100:<14.2f}% | {risk_contribs[i]/port_vol*100:<19.2f}%")
        
    print("=" * 65)

if __name__ == "__main__":
    main()
