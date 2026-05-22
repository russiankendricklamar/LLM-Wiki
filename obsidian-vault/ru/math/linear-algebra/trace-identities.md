---
title: Свойства следа
category: Linear Algebra
order: 119
lang: ru
slug: trace-identities
---

## Обзор
След квадратной матрицы $A$ (обозначается $\text{Tr}(A)$) — это сумма элементов главной диагонали.

## Свойства и тождества
1. **Циклическая перестановка:** $\text{Tr}(ABCD) = \text{Tr}(BCDA) = \text{Tr}(CDAB)$
2. **Сумма собственных значений:** $\text{Tr}(A) = \sum_{i} \lambda_i$
3. **Линейность:** $\text{Tr}(aA + bB) = a\text{Tr}(A) + b\text{Tr}(B)$
4. **След производной:** $\frac{\partial}{\partial X} \text{Tr}(AX) = A^T$