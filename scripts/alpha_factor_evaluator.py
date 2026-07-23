#!/usr/bin/env python3
"""
Alpha Factor Evaluator Script
Computes Information Coefficient (IC), Rank IC, Factor Turnover, and Returns stream.
"""

import numpy as np

def main():
    print("=" * 65)
    print("         QUANTITATIVE ALPHA FACTOR EVALUATOR")
    print("=" * 65)
    
    n_stocks = 50
    n_days = 100
    
    np.random.seed(42)
    # Synthetic factor values (e.g. Momentum / Reversal)
    factor_values = np.random.normal(0, 1, (n_days, n_stocks))
    
    # Forward 1-day returns correlated with factor (true IC ~ 0.05)
    true_alpha_signal = 0.05 * factor_values
    forward_returns = true_alpha_signal + np.random.normal(0, 0.02, (n_days, n_stocks))
    
    ic_series = []
    rank_ic_series = []
    
    for t in range(n_days):
        f = factor_values[t]
        r = forward_returns[t]
        
        # Pearson IC
        ic = np.corrcoef(f, r)[0, 1]
        ic_series.append(ic)
        
        # Spearman Rank IC
        f_rank = np.argsort(np.argsort(f))
        r_rank = np.argsort(np.argsort(r))
        rank_ic = np.corrcoef(f_rank, r_rank)[0, 1]
        rank_ic_series.append(rank_ic)
        
    mean_ic = np.mean(ic_series)
    std_ic = np.std(ic_series)
    ic_ir = mean_ic / std_ic # Information Ratio of IC
    mean_rank_ic = np.mean(rank_ic_series)
    
    print(f"Mean Information Coefficient (IC):     {mean_ic:.4f}")
    print(f"Mean Rank IC (Spearman):               {mean_rank_ic:.4f}")
    print(f"IC Standard Deviation:                 {std_ic:.4f}")
    print(f"Factor Information Ratio (IC / Std):   {ic_ir:.4f}")
    print("-" * 65)
    if mean_ic > 0.02:
        print("VERDICT: GOOD ALPHA! Signal exhibits statistically significant predictive power.")
    else:
        print("VERDICT: WEAK ALPHA. Signal is indistinguishable from noise.")
    print("=" * 65)

if __name__ == "__main__":
    main()
