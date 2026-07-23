#!/usr/bin/env python3
"""
Black-Litterman Portfolio Optimization
Blends market equilibrium implied returns with subjective investor views using Bayesian inference.
"""

import numpy as np

def main():
    print("=" * 65)
    print("       BLACK-LITTERMAN PORTFOLIO OPTIMIZATION MODEL")
    print("=" * 65)
    
    # 3 assets: Asset A, Asset B, Asset C
    weights_eq = np.array([0.5, 0.3, 0.2]) # Market weights
    cov_matrix = np.array([
        [0.04, 0.015, 0.01],
        [0.015, 0.05, 0.02],
        [0.01, 0.02, 0.06]
    ])
    delta = 2.5 # Risk aversion coefficient
    
    # Implied Equilibrium Returns pi = delta * Cov * w_eq
    pi = delta * cov_matrix @ weights_eq
    
    print("Implied Equilibrium Returns (Prior):")
    for idx, r in enumerate(pi):
        print(f"  Asset {chr(65+idx)}: {r*100:.2f}%")
        
    # View: Asset A will outperform Asset C by 2%
    P = np.array([[1, 0, -1]]) # View matrix
    Q = np.array([0.02])       # View vector
    tau = 0.05                 # Scalar scaling uncertainty of prior
    Omega = np.array([[tau * P @ cov_matrix @ P.T]]) # Uncertainty of views
    
    # Posterior expected returns using Black-Litterman formula
    inv_tau_cov = np.linalg.inv(tau * cov_matrix)
    inv_omega = np.linalg.inv(Omega)
    
    post_cov = np.linalg.inv(inv_tau_cov + P.T @ inv_omega @ P)
    post_er = post_cov @ (inv_tau_cov @ pi + P.T @ inv_omega @ Q)
    
    # Posterior Optimal Weights
    w_post = np.linalg.inv(delta * cov_matrix) @ post_er
    w_post /= np.sum(w_post)
    
    print("\nPosterior Expected Returns (After Investor View):")
    for idx, r in enumerate(post_er):
        print(f"  Asset {chr(65+idx)}: {r*100:.2f}%")
        
    print("\nOptimal Black-Litterman Portfolio Weights:")
    for idx, w in enumerate(w_post):
        print(f"  Asset {chr(65+idx)}: {w*100:.2f}% (Prior: {weights_eq[idx]*100:.2f}%)")
    print("=" * 65)

if __name__ == "__main__":
    main()
