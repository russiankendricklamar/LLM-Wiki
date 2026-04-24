---
title: "Bayesian Inference and Bayes' Theorem"
category: "Fundamentals"
order: 5
lang: "en"
slug: "bayes-theorem"
---

# Bayesian Inference: The Logic of Science

**Bayes' Theorem** is a mathematical formula for determining conditional probability. It provides a way to update our beliefs ($Prior$) in light of new evidence ($Evidence$), resulting in a new belief ($Posterior$). This iterative process is the foundation of scientific reasoning, medical diagnosis, and modern Machine Learning.

## 1. The Formula

$$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

- **$P(A|B)$ (Posterior)**: The probability of hypothesis $A$ being true *after* seeing evidence $B$.
- **$P(B|A)$ (Likelihood)**: The probability of seeing evidence $B$ *if* hypothesis $A$ were true.
- **$P(A)$ (Prior)**: Our initial belief about hypothesis $A$ before seeing any evidence.
- **$P(B)$ (Evidence/Marginal)**: The total probability of seeing evidence $B$ under all possible hypotheses.

## 2. Intuition: Belief Updating

Bayesian reasoning is different from Frequentist reasoning. Frequentists look at "how often an event occurs in the long run." Bayesians look at "how much we should trust our current hypothesis."
- **Example**: If a medical test is 99% accurate, but the disease is very rare (1 in 10,000), a positive test result doesn't mean you are 99% likely to have the disease. Your **Prior** is so low that even a positive result only brings your **Posterior** to around 1%.

## 3. Bayesian Inference in Machine Learning

### A. Naive Bayes Classifier
One of the simplest and most effective algorithms for text classification (e.g., Spam detection). It calculates the probability that a message is spam by multiplying the Bayesian probabilities of each word appearing in the text.

### B. Variational Inference and VAEs
In complex neural networks ([[variational-autoencoders|VAEs]]), we use Bayesian inference to map data to a latent distribution. Since the true posterior is impossible to calculate, we approximate it using simpler distributions.

### C. Bayesian Neural Networks
Instead of having fixed weights, a Bayesian NN treats every weight as a probability distribution. This allows the model to output its **Uncertainty**—it can say "I think this is a cat, but I'm only 60% sure."

## 4. Conjugate Priors

Calculating the denominator $P(B)$ is often impossible (it requires integrating over all possibilities). To solve this, mathematicians use **Conjugate Priors**—pairs of distributions where the Posterior belongs to the same family as the Prior (e.g., Beta-Binomial or Gaussian-Gaussian), making the update a simple matter of addition.

## Visualization: The Update Cycle

```mermaid
graph LR
    Prior[Initial Belief: P(A)] --> Evidence[New Data: B]
    Evidence --> Update[Bayes Formula]
    Update --> Posterior[Updated Belief: P(A|B)]
    Posterior -->|Next Iteration| Prior
    
    style Prior fill:#f59e0b,color:#fff
    style Update fill:#3b82f6,color:#fff
    style Posterior fill:#10b981,color:#fff
```

## Related Topics

asymptotic-stats — properties of estimators as data grows  
[[variational-autoencoders]] — applying Bayes to deep learning  
stochastic-calculus — Bayesian filtering in continuous time
---
