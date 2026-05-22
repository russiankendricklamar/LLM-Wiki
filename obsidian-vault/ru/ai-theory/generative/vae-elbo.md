---
title: 'Генеративные модели: VAE и ELBO'
category: AI Theory
order: 160
lang: ru
slug: vae-elbo
---

Вариационные автоэнкодеры (VAE) рассматривают генерацию как вероятностный вывод, связывая данные $x$ со скрытыми переменными $z$.

### Вывод ELBO
Мы хотим максимизировать логарифм правдоподобия $\log p_\theta(x)$. Так как истинное апостериорное распределение $p_\theta(z|x)$ невычислимо, мы аппроксимируем его $q_\phi(z|x)$.
$\log p_\theta(x) = D_{KL}(q_\phi(z|x) || p_\theta(z|x)) + \mathcal{L}(\theta, \phi; x)$
Поскольку KL-дивергенция неотрицательна, $\mathcal{L}$ является нижней оценкой (Evidence Lower Bound, ELBO):
$\mathcal{L}(\theta, \phi; x) = \mathbb{E}_{q_\phi(z|x)}[\log p_\theta(x|z)] - D_{KL}(q_\phi(z|x) || p(z))$

### Трюк репараметризации
Для обратного распространения ошибки через случайную выборку $z \sim \mathcal{N}(\mu, \sigma^2I)$, мы используем:
$z = \mu + \sigma \odot \epsilon, \quad \epsilon \sim \mathcal{N}(0, I)$
Это отделяет случайный шум от параметров сети.
