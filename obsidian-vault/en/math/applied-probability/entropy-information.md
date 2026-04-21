---
title: "Entropy and Information Gain"
category: "Applied Probability"
order: 47
lang: "en"
slug: "entropy-information"
---

# Entropy and Information Gain

Information theory provides a mathematical way to quantify "surprise," "uncertainty," and "information." These concepts are fundamental to everything from data compression to the training of decision trees and neural networks.

## 1. Shannon Entropy ($H$)

Entropy measures the average level of "uncertainty" or "surprise" inherent in a variable's possible outcomes. For a discrete random variable $X$ with outcomes $x_1, \dots, x_n$:

$$H(X) = -\sum_{i=1}^n p(x_i) \log_2 p(x_i)$$

- **High Entropy**: Uniform distribution (everything is equally likely, maximum uncertainty).
- **Low Entropy**: Spiky distribution (one outcome is very likely, almost no uncertainty).

## 2. Conditional Entropy $H(Y \mid X)$

Measures how much uncertainty remains in $Y$ after we already know the value of $X$. If $X$ and $Y$ are perfectly correlated, $H(Y \mid X) = 0$.

## 3. Mutual Information ($I$)

Mutual Information measures the amount of information that can be obtained about one random variable by observing another. It is the reduction in uncertainty of $Y$ after $X$ is known:

$$I(X; Y) = H(Y) - H(Y \mid X)$$

Unlike correlation, mutual information can capture **any kind of dependency**, including non-linear and complex relationships.

## 4. Information Gain (IG)

In Machine Learning (Decision Trees), Information Gain is the change in entropy from a state before a split to a state after a split on an attribute $A$:

$$IG(S, A) = H(S) - \sum_{v \in Values(A)} \frac{|S_v|}{|S|} H(S_v)$$

The algorithm chooses to split on the attribute that provides the **highest Information Gain** (maximally reduces uncertainty about the class label).

## Visualization: Entropy vs. Probability

```chart
{
  "type": "line",
  "xAxis": "p",
  "data": [
    {"p": 0.00, "entropy": 0.00},
    {"p": 0.10, "entropy": 0.47},
    {"p": 0.30, "entropy": 0.88},
    {"p": 0.50, "entropy": 1.00},
    {"p": 0.70, "entropy": 0.88},
    {"p": 0.90, "entropy": 0.47},
    {"p": 1.00, "entropy": 0.00}
  ],
  "lines": [
    {"dataKey": "entropy", "stroke": "#ef4444", "name": "Binary Entropy H(p)"}
  ]
}
```
*For a coin flip, entropy is maximized (1 bit) when the coin is fair (p=0.5). If the coin is double-headed (p=1.0), there is zero uncertainty and zero entropy.*

## Related Topics

[[kullback-leibler-divergence]] — measuring the difference between entropies  
[[maximum-entropy]] — a principle for choosing distributions  
[[cross-entropy]] — used as a loss function in Deep Learning
---
