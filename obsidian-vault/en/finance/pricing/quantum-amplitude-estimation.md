---
title: "Quantum Amplitude Estimation (QAE)"
category: "Pricing"
order: 40
lang: "en"
slug: "quantum-amplitude-estimation"
---

# Quantum Amplitude Estimation (QAE) in Finance

The fundamental computational engine of modern quantitative finance is **Monte Carlo (MC) Simulation**. It is used to price complex derivatives and calculate Risk (VaR/CVaR). However, the error of classical MC converges at a rate of $\mathcal{O}(1/\sqrt{N})$, meaning to get 10x more accuracy, you need 100x more compute time.

**Quantum Amplitude Estimation (QAE)** is a quantum algorithm that offers a **quadratic speedup** over classical Monte Carlo, converging at a rate of $\mathcal{O}(1/N)$.

## How QAE Works

In finance, we often want to compute the expected value of a payoff function $\mathbb{E}[f(X)]$. 
In QAE, this problem is mapped onto a quantum circuit:

1.  **State Preparation**: A quantum operator $\mathcal{A}$ is constructed to encode the probability distribution of the asset $X$ into the amplitudes of a quantum state.
2.  **Payoff Encoding**: An extra qubit (the objective qubit) is rotated such that the probability of measuring it in the state $|1\rangle$ is exactly proportional to the expected payoff $\mathbb{E}[f(X)] = a$.
3.  **Grover Operator ($\mathcal{Q}$)**: Instead of measuring the circuit millions of times (which would just be classical Monte Carlo), the algorithm applies the Grover operator repeatedly. This physically rotates the quantum state in Hilbert space, amplifying the amplitude of the desired state.
4.  **Quantum Phase Estimation**: By measuring the phase accumulated during these rotations, the algorithm extracts the exact value of the amplitude $a$ with exponentially fewer samples than classical methods.

## The Quadratic Speedup

If a bank runs 1,000,000 simulations overnight to calculate its $XVA$ metrics, a quantum computer using QAE would only need to run the quantum circuit **1,000 times** to achieve the exact same accuracy. This turns overnight batch jobs into real-time calculations.

## Near-Term Implementation (NISQ)

Original QAE requires Quantum Phase Estimation, which demands thousands of perfect, error-corrected qubits (currently unavailable). To run on today's Noisy Intermediate-Scale Quantum (NISQ) hardware, researchers have developed **Maximum Likelihood QAE (ML-QAE)** and **Iterative QAE (IQAE)**, which strip out the heavy Phase Estimation logic and use classical optimizers to extract the amplitude from shorter quantum circuits.

## Visualization: Convergence Speed

```chart
{
  "type": "line",
  "xAxis": "samples",
  "data": [
    {"samples": 10, "classical_error": 0.31, "quantum_error": 0.10},
    {"samples": 100, "classical_error": 0.10, "quantum_error": 0.01},
    {"samples": 1000, "classical_error": 0.031, "quantum_error": 0.001},
    {"samples": 10000, "classical_error": 0.01, "quantum_error": 0.0001}
  ],
  "lines": [
    {"dataKey": "classical_error", "stroke": "#ef4444", "name": "Classical MC Error (1/√N)"},
    {"dataKey": "quantum_error", "stroke": "#3b82f6", "name": "Quantum QAE Error (1/N)"}
  ]
}
```
*Notice how the quantum error (blue) drops to near-zero with only 100 samples, whereas the classical method (red) requires 10,000 samples to reach the same level of precision.*

## Related Topics

[[quantum-math]] — the linear algebra behind qubits and states  
[[monte-carlo-method]] — the classical baseline being replaced  
[[xva]] — the most compute-heavy area where QAE will be applied
---
