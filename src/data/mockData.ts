export const aboutMeMarkdown = `
# Галкин Егор

### Главный экономист в Банке России | Количественный аналитик | AI-инженер

Привет! Я занимаюсь исследованиями и разработкой на стыке макроэкономики, количественных финансов и современных технологий искусственного интеллекта. Моя работа сосредоточена на создании инструментов и моделей, которые объединяют строгость математического анализа с возможностями современных LLM.

## Специализация

- **Экономический анализ:** Работа в Банке России над макроэкономическим моделированием и анализом данных.
- **Quantitative Finance:** Разработка математических моделей для финансовых рынков, анализ временных рядов и численные методы.
- **Artificial Intelligence:** Проектирование систем на базе LLM, разработка AI-агентов и внедрение машинного обучения в аналитические процессы.

## О проекте LLM Wiki

Этот ресурс — моя персональная база знаний (Digital Garden). Здесь я структурирую информацию по темам, которые находятся в фокусе моих интересов:
- Архитектуры современных языковых моделей.
- Методы количественного анализа (Quantitative Finance).
- Математика и алгоритмы.

## Контакты

Если вам интересны совместные проекты или обсуждение технологий на стыке финансов и AI, вы можете найти меня здесь:

- **GitHub:** [github.com/russiankendricklamar](https://github.com/russiankendricklamar)
- **LinkedIn:** [linkedin.com/in/egor-galkin](https://linkedin.com/in/egor-galkin)
`;


export const blackScholesMarkdown = `
# Black-Scholes Model

The **Black-Scholes model**, also known as the Black-Scholes-Merton model, is a mathematical model for the dynamics of a financial market containing derivative investment instruments.

## The Black-Scholes Equation

The Black-Scholes equation is a parabolic partial differential equation, which describes the price of the option over time. The equation is:

$$
\\frac{\\partial V}{\\partial t} + \\frac{1}{2}\\sigma^2 S^2 \\frac{\\partial^2 V}{\\partial S^2} + rS \\frac{\\partial V}{\\partial S} - rV = 0
$$

Where:
- $V$ is the price of the option as a function of stock price $S$ and time $t$
- $r$ is the risk-free interest rate
- $\\sigma$ is the volatility of the stock's returns

## The Black-Scholes Formula

The formula for a European call option $C$ and put option $P$ are:

$$
\\begin{aligned}
C(S, t) &= N(d_1)S - N(d_2)Ke^{-r(T-t)} \\\\
P(S, t) &= N(-d_2)Ke^{-r(T-t)} - N(-d_1)S
\\end{aligned}
$$

Where $d_1$ and $d_2$ are given by:

$$
\\begin{aligned}
d_1 &= \\frac{\\ln(S/K) + (r + \\sigma^2/2)(T-t)}{\\sigma\\sqrt{T-t}} \\\\
d_2 &= d_1 - \\sigma\\sqrt{T-t}
\\end{aligned}
$$

And $N(x)$ is the cumulative distribution function of the standard normal distribution.

## Python Implementation

Here is a Python implementation to calculate the European call and put option prices using the Black-Scholes formula:

\`\`\`python
import numpy as np
from scipy.stats import norm

def black_scholes(S, K, T, r, sigma, option_type='call'):
    """
    Calculate the Black-Scholes option price.
    """
    d1 = (np.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)
    
    if option_type == 'call':
        price = S * norm.cdf(d1) - K * np.exp(-r * T) * norm.cdf(d2)
    elif option_type == 'put':
        price = K * np.exp(-r * T) * norm.cdf(-d2) - S * norm.cdf(-d1)
    else:
        raise ValueError("option_type must be 'call' or 'put'")
        
    return price
\`\`\`

## Option Price Visualization

Below is an interactive visualization of Call and Put option prices across different underlying Spot Prices ($S$), assuming $K=100$, $T=1$, $r=0.05$, and $\sigma=0.2$.

\`\`\`chart
{
  "type": "line",
  "xAxis": "spot",
  "data": [
    {"spot": "80", "call": 2.8, "put": 18.0},
    {"spot": "90", "call": 6.5, "put": 11.5},
    {"spot": "100", "call": 12.3, "put": 7.4},
    {"spot": "110", "call": 19.8, "put": 4.5},
    {"spot": "120", "call": 28.4, "put": 2.6}
  ],
  "lines": [
    {"dataKey": "call", "stroke": "#10b981", "name": "Call Price"},
    {"dataKey": "put", "stroke": "#ef4444", "name": "Put Price"}
  ]
}
\`\`\`

## Tables Support

We also support GitHub Flavored Markdown tables:

| Parameter | Symbol | Description |
| :--- | :---: | :--- |
| Spot Price | $S$ | Current price of the underlying asset |
| Strike Price | $K$ | Price at which the option can be exercised |
| Time to Maturity | $T$ | Time remaining until the option expires |
| Risk-free Rate | $r$ | Constant interest rate |
| Volatility | $\\sigma$ | Measure of the asset's price variation |

`;

export const mockNavigation = [
  {
    title: "Главная",
    items: [
      { title: "Обо мне", href: "/" },
    ],
  },
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/intro" },
      { title: "Installation", href: "/install" },
    ],
  },
  {
    title: "Quantitative Finance",
    items: [
      { title: "Black-Scholes Model", href: "/finance/black-scholes" },
      { title: "Lévy Processes", href: "/finance/levy" },
    ],
  },
];
