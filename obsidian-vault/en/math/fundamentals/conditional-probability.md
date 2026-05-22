---
title: "Conditional Probability and Total Probability"
category: "Math Foundations"
order: 21
lang: "en"
slug: "conditional-probability"
---

# Conditional Probability and the Law of Total Probability

Conditional probability is the bedrock of Bayesian inference and stochastic modeling. It describes how the probability of an event changes when we acquire new information.

## 1. Definition of Conditional Probability

For two events $A$ and $B$ in a probability space $(\Omega, \mathcal{F}, P)$, where $P(B) > 0$, the **conditional probability of $A$ given $B$** is defined as:
$$ P(A|B) = \frac{P(A \cap B)}{P(B)} $$

### 1.1 Intuition: Shrinking the Sample Space
When we are told that event $B$ has occurred, our "world" shrinks from $\Omega$ to $B$. The only way for $A$ to occur now is if the outcome is in the intersection $A \cap B$. We normalize by $P(B)$ because $B$ is our new universal set.

## 2. The Multiplication Rule

Rearranging the definition gives the multiplication rule:
$$ P(A \cap B) = P(A|B)P(B) $$
For multiple events, this generalizes to the **Chain Rule**:
$$ P(A_1 \cap A_2 \cap \dots \cap A_n) = P(A_1)P(A_2|A_1)P(A_3|A_1 \cap A_2) \dots P(A_n|A_1 \cap \dots \cap A_{n-1}) $$

## 3. Law of Total Probability (LTP)

The LTP allows us to calculate the probability of an event by "partitioning" the sample space.

### 3.1 Definition of a Partition
A collection of events $\{B_1, B_2, \dots, B_n\}$ is a partition of $\Omega$ if:
1.  They are mutually exclusive: $B_i \cap B_j = \emptyset$ for $i \neq j$.
2.  They are collectively exhaustive: $\bigcup_{i=1}^n B_i = \Omega$.
3.  $P(B_i) > 0$ for all $i$.

### 3.2 The Theorem
For any event $A$:
$$ P(A) = \sum_{i=1}^n P(A \cap B_i) = \sum_{i=1}^n P(A|B_i)P(B_i) $$

**Proof**:
Since $\Omega = \bigcup B_i$, we can write $A = A \cap \Omega = A \cap (\bigcup B_i) = \bigcup (A \cap B_i)$.
Since the $B_i$ are disjoint, the sets $(A \cap B_i)$ are also disjoint.
By the axiom of countable additivity: $P(A) = \sum P(A \cap B_i)$.
Applying the multiplication rule $P(A \cap B_i) = P(A|B_i)P(B_i)$ yields the result.

## 4. Bayes' Theorem

Combining conditional probability and the LTP gives **Bayes' Theorem**:
$$ P(B_k|A) = \frac{P(A|B_k)P(B_k)}{\sum_{i=1}^n P(A|B_i)P(B_i)} $$
- **Prior**: $P(B_k)$ (Our belief before seeing $A$)
- **Likelihood**: $P(A|B_k)$ (How likely $A$ is if $B_k$ is true)
- **Posterior**: $P(B_k|A)$ (Our updated belief after seeing $A$)

## 5. Example: Diagnostic Testing

Suppose a disease affects 1% of the population ($P(D) = 0.01$). A test is 99% accurate:
- $P(T^+|D) = 0.99$ (True Positive Rate)
- $P(T^-|D^c) = 0.99$ (True Negative Rate)

What is $P(D|T^+)$?
Using Bayes' Theorem:
$$ P(D|T^+) = \frac{P(T^+|D)P(D)}{P(T^+|D)P(D) + P(T^+|D^c)P(D^c)} $$
$$ P(D|T^+) = \frac{0.99 \cdot 0.01}{0.99 \cdot 0.01 + 0.01 \cdot 0.99} = \frac{0.0099}{0.0099 + 0.0099} = 0.5 $$
Even with a 99% accurate test, there is only a 50% chance the person actually has the disease due to its rarity.

## Related Topics

[[bayes-theorem]] — application in statistical inference  
[[independence]] — when $P(A|B) = P(A)$  
[[markov-chains]] — sequences of conditional probabilities
