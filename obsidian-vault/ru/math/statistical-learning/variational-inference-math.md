---
title: Вариационный байесовский вывод
category: Statistical Learning
order: 67
lang: ru
slug: variational-inference-math
---

# Вариационный байесовский вывод

## Нижняя оценка обоснованности (ELBO)
Для аппроксимации апостериорного распределения $p(z|x)$ распределением $q_\theta(z)$ минимизируется дивергенция Кульбака-Лейблера.
Из тождества $\log p(x) = \text{KL}(q_\theta(z) \| p(z|x)) + \mathcal{L}(\theta)$ следует необходимость максимизации ELBO:
$$ \mathcal{L}(\theta) = \mathbb{E}_{q_\theta}[\log p(x|z)] - \text{KL}(q_\theta(z) \| p(z)) $$

## Приближение среднего поля (Mean-Field)
Семейство среднего поля предполагает независимость скрытых переменных:
$$ q(z) = \prod_{j=1}^m q_j(z_j) $$
Оптимальное обновление для $q_j$ при фиксации остальных:
$$ q_j^*(z_j) \propto \exp\left( \mathbb{E}_{i \neq j} [\log p(x, z)] \right) $$

## Трюк репараметризации (Reparameterization Trick)
Для вычисления $\nabla_\theta \mathbb{E}_{q_\theta(z)}[f(z)]$ при стохастическом градиентном спуске (например, в VAE). Если $q_\theta \sim \mathcal{N}(\mu, \sigma^2)$, переменная представляется как $z = \mu + \sigma \epsilon$, где $\epsilon \sim \mathcal{N}(0, 1)$.
$$ \nabla_\theta \mathbb{E}_{q_\theta}[f(z)] = \mathbb{E}_{\epsilon}[\nabla_\theta f(\mu + \sigma \epsilon)] $$
Это позволяет пропускать градиенты через случайное семплирование.

