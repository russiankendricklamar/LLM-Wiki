#!/usr/bin/env python3
"""
Deflated Sharpe Ratio (DSR) Calculator
Implementation of Marcos López de Prado's DSR framework testing for backtest overfitting.
"""

import numpy as np
from scipy.stats import norm

def deflated_sharpe_ratio(sr_est, sr_benchmark, n_trials, n_samples, skew=0.0, kurt=3.0):
    """
    Computes DSR probability that estimated SR exceeds benchmark after adjusting for multiple trials.
    """
    # Euler-Mascheroni constant approximation for max expected SR among N trials
    em_gamma = 0.5772156649
    exp_max_sr = (1 - em_gamma) * norm.ppf(1 - 1/n_trials) + em_gamma * norm.ppf(1 - 1/(n_trials * np.e))
    
    sr_threshold = sr_benchmark + exp_max_sr * np.sqrt(1 / n_samples)
    
    # Standard deviation of Sharpe ratio estimation
    sigma_sr = np.sqrt((1 + 0.5 * sr_est**2 - skew * sr_est + (kurt - 3)/4 * sr_est**2) / (n_samples - 1))
    
    dsr_stat = (sr_est - sr_threshold) / sigma_sr
    dsr_prob = norm.cdf(dsr_stat)
    
    return dsr_prob, sr_threshold

def main():
    print("=" * 65)
    print("      DEFLATED SHARPE RATIO (DSR) BACKTEST VALIDATOR")
    print("=" * 65)
    
    sr_est = 1.8         # Estimated annual Sharpe Ratio
    sr_benchmark = 0.0   # Zero benchmark
    n_trials = 100       # Number of strategy variations tested
    n_samples = 252      # Daily observations (1 year)
    
    dsr_prob, threshold = deflated_sharpe_ratio(sr_est, sr_benchmark, n_trials, n_samples)
    
    print(f"Estimated Sharpe Ratio:     {sr_est:.2f}")
    print(f"Number of Tested Trials:    {n_trials}")
    print(f"Backtest Length:            {n_samples} daily bars")
    print(f"Overfitting Threshold SR:   {threshold:.4f}")
    print(f"Deflated Sharpe Ratio Prob: {dsr_prob * 100:.2f}%\n")
    
    if dsr_prob >= 0.95:
        print("VERDICT: PASSED! Strategy is statistically significant after adjusting for overfitting.")
    else:
        print("VERDICT: FAILED (Overfitting Risk). High chance of false discovery due to multiple testing.")
    print("=" * 65)

if __name__ == "__main__":
    main()
