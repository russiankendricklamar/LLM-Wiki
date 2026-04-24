---
title: "Многомерное нормальное распределение"
category: "Applied Probability"
order: 44
lang: "ru"
slug: "multivariate-normal"
growth: "evergreen"
---

# Многомерное нормальное распределение

Многомерное нормальное (MVN) — единственное распределение, которое **замкнуто относительно аффинных преобразований, условных распределений и произведений по независимым компонентам** одновременно. Эта тройная замкнутость делает его backbone'ом гауссовских процессов, фильтра Калмана, PCA, факторного анализа, LDA, вариационного вывода и диффузионных моделей.

## 1. Определение

Случайный вектор $\mathbf{X} \in \mathbb{R}^k$ называется **нормальным**, если для любого $\mathbf{a} \in \mathbb{R}^k$ линейная комбинация $\mathbf{a}^\top \mathbf{X}$ одномерно нормальна. При невырожденной ковариации имеет плотность:

$$
f(\mathbf{x}) = \frac{1}{\sqrt{(2\pi)^k |\boldsymbol{\Sigma}|}}\, \exp\!\left(-\tfrac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^\top \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right),
$$

где $\boldsymbol{\mu} = \mathbb{E}[\mathbf{X}]$, $\boldsymbol{\Sigma} = \operatorname{Cov}(\mathbf{X}) \succ 0$.

В вырожденном случае (когда $\boldsymbol{\Sigma}$ неполного ранга) плотности относительно $\lambda$-меры не существует; используют плотность относительно меры Лебега на аффинном подпространстве или характеристическую функцию:

$$
\varphi_{\mathbf{X}}(\mathbf{t}) = \mathbb{E}[e^{i\mathbf{t}^\top \mathbf{X}}] = \exp\!\left(i\mathbf{t}^\top \boldsymbol{\mu} - \tfrac{1}{2} \mathbf{t}^\top \boldsymbol{\Sigma}\,\mathbf{t}\right).
$$

Определение через характеристическую функцию универсально и распространяется на вырожденный случай.

## 2. Геометрия: эллипсоиды Махаланобиса

**Квадратичная форма** в экспоненте:

$$
d_M^2(\mathbf{x}) = (\mathbf{x}-\boldsymbol{\mu})^\top \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})
$$

называется **квадратом расстояния Махаланобиса**. Уровни $d_M^2 = c$ — эллипсоиды с центром в $\boldsymbol{\mu}$, главные оси — собственные векторы $\boldsymbol{\Sigma}$, длины полуосей — $\sqrt{c \lambda_i}$, где $\lambda_i$ — собственные числа.

**Факт.** $d_M^2(\mathbf{X}) \sim \chi^2_k$. Следствие: $\Pr(d_M^2 \leq c_\alpha) = \alpha$, где $c_\alpha$ — $\alpha$-квантиль $\chi^2_k$. Это даёт **точные доверительные эллипсоиды** для $\boldsymbol{\mu}$.

## 3. Аффинная замкнутость

**Теорема.** Если $\mathbf{X} \sim \mathcal{N}(\boldsymbol{\mu},\boldsymbol{\Sigma})$ и $\mathbf{Y} = A\mathbf{X} + \mathbf{b}$, то

$$
\mathbf{Y} \sim \mathcal{N}(A\boldsymbol{\mu} + \mathbf{b},\; A\boldsymbol{\Sigma} A^\top).
$$

*Доказательство:* через характеристическую функцию.

$$
\varphi_{\mathbf{Y}}(\mathbf{t}) = e^{i\mathbf{t}^\top \mathbf{b}}\, \varphi_{\mathbf{X}}(A^\top \mathbf{t}) = \exp\!\left(i\mathbf{t}^\top(A\boldsymbol{\mu}+\mathbf{b}) - \tfrac{1}{2}\mathbf{t}^\top A\boldsymbol{\Sigma} A^\top \mathbf{t}\right).
$$

### Следствия

- **Стандартизация.** Если $\boldsymbol{\Sigma} = LL^\top$ (Cholesky), то $L^{-1}(\mathbf{X}-\boldsymbol{\mu}) \sim \mathcal{N}(0, I_k)$.
- **Сэмплинг.** $\mathbf{X} = \boldsymbol{\mu} + L\mathbf{Z}$, $\mathbf{Z} \sim \mathcal{N}(0, I_k)$.
- **Маргиналы.** Любой подвектор $\mathbf{X}$ снова нормален.

## 4. Условное распределение

Разобьём $\mathbf{X} = (\mathbf{X}_1, \mathbf{X}_2)$ с блочной структурой:

$$
\boldsymbol{\mu} = \begin{pmatrix}\boldsymbol{\mu}_1\\\boldsymbol{\mu}_2\end{pmatrix},\qquad \boldsymbol{\Sigma} = \begin{pmatrix}\boldsymbol{\Sigma}_{11}&\boldsymbol{\Sigma}_{12}\\\boldsymbol{\Sigma}_{21}&\boldsymbol{\Sigma}_{22}\end{pmatrix}.
$$

**Теорема.** $\mathbf{X}_1 \mid \mathbf{X}_2 = \mathbf{x}_2 \sim \mathcal{N}(\boldsymbol{\mu}_{1|2}, \boldsymbol{\Sigma}_{1|2})$, где

$$
\boldsymbol{\mu}_{1|2} = \boldsymbol{\mu}_1 + \boldsymbol{\Sigma}_{12}\boldsymbol{\Sigma}_{22}^{-1}(\mathbf{x}_2 - \boldsymbol{\mu}_2),\qquad
\boldsymbol{\Sigma}_{1|2} = \boldsymbol{\Sigma}_{11} - \boldsymbol{\Sigma}_{12}\boldsymbol{\Sigma}_{22}^{-1}\boldsymbol{\Sigma}_{21}.
$$

Ключевые наблюдения:

1. **Условное среднее — линейная функция** наблюдаемых. Это фундамент **байесовской линейной регрессии** и **гауссовских процессов**.
2. **Условная ковариация не зависит от $\mathbf{x}_2$.** Это уникальное свойство нормального.
3. $\boldsymbol{\Sigma}_{1|2}$ — **дополнение Шура** $\boldsymbol{\Sigma}_{22}$ в $\boldsymbol{\Sigma}$.

Это тот же формализм, что и в **фильтре Калмана**: prediction step $\to$ $\boldsymbol{\Sigma}_{1|2}$.

## 5. Прецизионная матрица и условная независимость

Обозначим $\boldsymbol{\Omega} = \boldsymbol{\Sigma}^{-1}$ — **прецизионная матрица**. 

**Теорема (Lauritzen).** В MVN $X_i \perp X_j \mid X_{V\setminus\{i,j\}}$ тогда и только тогда, когда $\boldsymbol{\Omega}_{ij} = 0$.

Следовательно, структура нулей в $\boldsymbol{\Omega}$ задаёт **гауссовский графический модель** — направление исследования, давшее graphical LASSO и современные Bayesian networks.

## 6. Энтропия и дифференциальная энтропия

$$
H(\mathbf{X}) = -\int f(\mathbf{x})\log f(\mathbf{x})\, d\mathbf{x} = \tfrac{1}{2}\log\bigl((2\pi e)^k |\boldsymbol{\Sigma}|\bigr).
$$

**Принцип максимальной энтропии:** среди всех распределений на $\mathbb{R}^k$ с фиксированными $\boldsymbol{\mu},\boldsymbol{\Sigma}$, максимум энтропии достигается на нормальном. Это обоснование, почему MaxEnt дает гауссиану, когда ограничения — первые два момента.

## 7. KL-дивергенция между нормальными

Для $p = \mathcal{N}(\boldsymbol{\mu}_1,\boldsymbol{\Sigma}_1)$ и $q = \mathcal{N}(\boldsymbol{\mu}_2,\boldsymbol{\Sigma}_2)$:

$$
D_{\mathrm{KL}}(p\,\|\,q) = \tfrac{1}{2}\!\left[\operatorname{tr}(\boldsymbol{\Sigma}_2^{-1}\boldsymbol{\Sigma}_1) + (\boldsymbol{\mu}_2-\boldsymbol{\mu}_1)^\top\boldsymbol{\Sigma}_2^{-1}(\boldsymbol{\mu}_2-\boldsymbol{\mu}_1) - k + \log\frac{|\boldsymbol{\Sigma}_2|}{|\boldsymbol{\Sigma}_1|}\right].
$$

Эта формула — ключевой компонент **ELBO** в вариационных авто-энкодерах.

## 8. Многомерная ЦПТ

**Теорема (Крамер-Волд).** Пусть $\mathbf{X}_1,\dots,\mathbf{X}_n$ i.i.d. в $\mathbb{R}^k$, $\mathbb{E}[\mathbf{X}_1] = \boldsymbol{\mu}$, $\operatorname{Cov}(\mathbf{X}_1) = \boldsymbol{\Sigma}$. Тогда

$$
\sqrt{n}(\bar{\mathbf{X}}_n - \boldsymbol{\mu}) \xrightarrow{d} \mathcal{N}(0, \boldsymbol{\Sigma}).
$$

Метод доказательства: свести к одномерной ЦПТ, применив её к любой линейной комбинации $\mathbf{a}^\top(\bar{\mathbf{X}}_n - \boldsymbol{\mu})$.

## 9. Вывод плотности из характеристической функции

Рассмотрим стандартный $\mathbf{Z} \sim \mathcal{N}(0, I_k)$. Его компоненты независимы, плотность — произведение одномерных:

$$
f_{\mathbf{Z}}(\mathbf{z}) = \prod_{i=1}^k (2\pi)^{-1/2} e^{-z_i^2/2} = (2\pi)^{-k/2} e^{-\|\mathbf{z}\|^2/2}.
$$

Для $\mathbf{X} = \boldsymbol{\mu} + L\mathbf{Z}$ с $LL^\top = \boldsymbol{\Sigma}$ по формуле замены переменных (якобиан $|L| = |\boldsymbol{\Sigma}|^{1/2}$):

$$
f_{\mathbf{X}}(\mathbf{x}) = |\boldsymbol{\Sigma}|^{-1/2}\, f_{\mathbf{Z}}\bigl(L^{-1}(\mathbf{x}-\boldsymbol{\mu})\bigr) = (2\pi)^{-k/2} |\boldsymbol{\Sigma}|^{-1/2} \exp\!\bigl(-\tfrac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^\top \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\bigr).
$$

## 10. Приложения

- **Гауссовские процессы.** Условное распределение конечного поднабора точек — это та же формула, что в разделе 4. GP predictive mean / variance — это $\boldsymbol{\mu}_{1|2}$ / $\boldsymbol{\Sigma}_{1|2}$.
- **Фильтр Калмана.** State-space модель с линейной динамикой и гауссовским шумом → all posterior'ы нормальны. Prediction и update steps используют тождества раздела 4.
- **VAE / диффузионные модели.** Reparametrization trick: $\mathbf{X} = \boldsymbol{\mu}(\theta) + \operatorname{diag}(\boldsymbol{\sigma}(\theta))\odot\mathbf{Z}$, $\mathbf{Z} \sim \mathcal{N}(0,I)$.
- **PCA.** Собственные векторы $\boldsymbol{\Sigma}$ — главные оси эллипсоида плотности. PCA эквивалентна нахождению MLE для низкоранговой модели вида $\mathbf{X} = W\mathbf{Z} + \boldsymbol{\epsilon}$.
- **LDA.** Фишеровская линейная дискриминация предполагает MVN с общей $\boldsymbol{\Sigma}$ для всех классов.

## 11. Визуализация корреляции

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": 0, "rho_0": 0, "rho_0_5": 0, "rho_0_9": 0},
    {"t": 1, "rho_0": 0.8, "rho_0_5": 0.6, "rho_0_9": 0.4},
    {"t": 2, "rho_0": 1.0, "rho_0_5": 1.0, "rho_0_9": 1.0},
    {"t": 3, "rho_0": 0.8, "rho_0_5": 0.6, "rho_0_9": 0.4},
    {"t": 4, "rho_0": 0, "rho_0_5": 0, "rho_0_9": 0}
  ],
  "lines": [
    {"dataKey": "rho_0", "stroke": "#94a3b8", "name": "ρ = 0 (круговая плотность)"},
    {"dataKey": "rho_0_5", "stroke": "#3b82f6", "name": "ρ = 0.5"},
    {"dataKey": "rho_0_9", "stroke": "#ef4444", "name": "ρ = 0.9 (узкий эллипс)"}
  ]
}
```

## 12. Связи

- [[multivariate-clt|Многомерная ЦПТ]] — почему MVN всюду.
- [[gaussian-processes|Гауссовские процессы]] — бесконечномерный MVN.
- [[pca|PCA]] — диагонализация $\boldsymbol{\Sigma}$.
- [[fisher-information|Информация Фишера]] — для MVN FIM имеет блочную форму.
- [[hmm|Скрытые марковские модели]] — линейно-гауссовские частные случаи → фильтр Калмана.
- [[f-divergences|f-дивергенции]] — все они закрытой формы для пары MVN.
