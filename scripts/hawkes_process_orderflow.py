#!/usr/bin/env python3
"""
Hawkes Process Order Flow Simulator
Simulates self-exciting point processes used in HFT for order arrival modeling.
"""

import numpy as np

def simulate_hawkes(mu=0.5, alpha=0.8, beta=1.2, T=100.0):
    """
    Ogata's thinning algorithm for univariate Hawkes process:
    Intensity lambda(t) = mu + sum_{t_i < t} alpha * exp(-beta * (t - t_i))
    """
    t = 0.0
    timestamps = []
    
    while t < T:
        # Calculate maximum current intensity
        history_sum = np.sum(alpha * np.exp(-beta * (t - np.array(timestamps)))) if timestamps else 0.0
        lambda_max = mu + history_sum
        
        # Draw exponential step
        dt = np.random.exponential(1.0 / lambda_max)
        t += dt
        
        if t >= T:
            break
            
        # Re-evaluate intensity at candidate time t
        history_sum_t = np.sum(alpha * np.exp(-beta * (t - np.array(timestamps)))) if timestamps else 0.0
        lambda_t = mu + history_sum_t
        
        # Accept/reject step
        if np.random.uniform(0, 1) <= lambda_t / lambda_max:
            timestamps.append(t)
            
    return np.array(timestamps)

def main():
    print("=" * 65)
    print("        HAWKES PROCESS ORDER FLOW ARRIVAL SIMULATOR")
    print("=" * 65)
    
    timestamps = simulate_hawkes()
    print(f"Simulation Horizon: T = 100 seconds")
    print(f"Total Generated Orders: {len(timestamps)}")
    print(f"Average Order Arrival Rate: {len(timestamps)/100.0:.2f} orders/sec")
    print(f"First 10 Order Event Timestamps (s): {np.round(timestamps[:10], 3)}")
    print("=" * 65)

if __name__ == "__main__":
    main()
