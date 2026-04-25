---
title: "Naive Bayes Classifier"
category: "Statistical Learning"
order: 5
lang: "en"
slug: "naive-bayes"
---

# Naive Bayes Classifier: The Power of Independence

The Naive Bayes classifier is a simple but highly effective probabilistic model based on **Bayes' Theorem**. Despite its "naive" assumption of feature independence, it remains a strong baseline for text classification, spam filtering, and medical diagnosis.

## 1. The Probabilistic Model

For a class $y$ and features $X = [x_1, \dots, x_n]$, the classifier predicts the probability:
$$P(y \mid x_1, \dots, x_n) = \frac{P(x_1, \dots, x_n \mid y) P(y)}{P(x_1, \dots, x_n)}$$

The **"Naive" Assumption**: We assume that all features are conditionally independent given the class:
$$P(x_1, \dots, x_n \mid y) = \prod_{i=1}^n P(x_i \mid y)$$

The final classification rule is:
$$\hat{y} = \arg \max_y P(y) \prod_{i=1}^n P(x_i \mid y)$$

## 2. Common Variants

Depending on the nature of the data, we use different likelihood models $P(x_i \mid y)$:
- **Gaussian Naive Bayes**: Used when features are continuous. It assumes each feature follows a normal distribution within each class.
- **Multinomial Naive Bayes**: Used for discrete counts (e.g., word counts in a document). This is the workhorse of **NLP**.
- **Bernoulli Naive Bayes**: Used for binary/boolean features (e.g., "does the word exist in the text?").

## 3. Why it Works (The Paradox of Naive Bayes)

Even when features are highly correlated (violating the "naive" assumption), Naive Bayes often performs as well as complex models like Gradient Boosted Trees.
- **Decision Boundary vs. Probability**: Naive Bayes might get the probability wrong (it tends to be overconfident, pushing probabilities to 0 or 1), but it often gets the **class label** right. As long as the correct class has the highest probability, the classifier succeeds.
- **Low Variance**: Because it has very few parameters to estimate, it is extremely robust to overfitting and performs well on small datasets where deep learning would fail.

## 4. Modern Use Cases in AI

- **Real-time Filtering**: Due to its speed, it is used in production systems to filter millions of messages for toxicity or spam in milliseconds.
- **Zero-Shot Baseline**: In many [[llm-infra/applications/rag|RAG]] systems, a quick Naive Bayes check can filter out irrelevant documents before they are sent to an expensive [[llm]].

## Related Topics

[[asymptotic-stats/bayesian-inference]] — the underlying logic  
[[decision-theory]] — how we choose the class label  
[[shannon-entropy]] — evaluating classifier performance
---