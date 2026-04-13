export const aboutMeEn = `
# EGOR GALKIN

**I like to build quantitative models and train LLM agents.**

I am currently a **Principal Economist at the Bank of Russia**, where I focus on macroeconomic modeling and data-driven policy analysis. In my spare time, I work as a **Quantitative Analyst and AI Engineer**, bridging the gap between computational physics, financial mathematics, and state-of-the-art AI.

[GitHub](https://github.com/russiankendricklamar) / [LinkedIn](https://www.linkedin.com/in/russiankendricklamar/?locale=ru) / [Email](mailto:egor@example.com)

---

## Bio

Egor Galkin is an economist and engineer specializing in the intersection of macroeconomics, quantitative finance, and artificial intelligence. He currently serves as a Principal Economist at the Bank of Russia. Egor holds a degree in Computational Mathematics and Mathematical Physics from Bauman Moscow State Technical University. His work focuses on leveraging Large Language Models (LLMs) to automate financial analysis and developing rigorous quantitative frameworks for market modeling.

---

## Timeline

- **2023 – Present**: **Principal Economist**, Bank of Russia. Macro-modeling and economic research.
- **2021 – 2023**: **Quantitative Researcher**. Deep dive into stochastic calculus and volatility modeling.
- **2017 – 2021**: **Student**, Bauman Moscow State Technical University. Focused on Computational Mathematics and Mathematical Physics (Department FN-11).

---

## Projects & Interests

- **LLM Wiki**: A digital garden for structuring knowledge on AI and Quant Finance.
- **AI in Finance**: Researching how LLMs (Claude, Gemini, Phi-4) can interpret macroeconomic protocols.
- **Quantum Physics**: Exploring the computational parallels between quantum mechanics and financial derivatives.

---

## Technical Stack

- **Models**: Anthropic (Claude 3.5 Sonnet), Gemini 2.0, Phi-4.
- **Tools**: Python (Pandas, PyTorch, QuantLib), TypeScript, Perplexity.
- **Methodologies**: Numerical Methods, Stochastic Calculus, RAG, AI Agents.

---

## Misc

- **Reading**: Sci-fi, Macro-history, Technical papers.
- **Interests**: Physics, Chess, Complexity science.
`;

export const aboutMeRu = `
# ГАЛКИН ЕГОР

**Я строю количественные модели и обучаю LLM-агентов.**

В настоящее время я — **главный экономист в Банке России**, где занимаюсь макроэкономическим моделированием и анализом данных для экономической политики. В свободное время я работаю как **количественный аналитик и AI-инженер**, объединяя вычислительную физику, финансовую математику и современные технологии ИИ.

[GitHub](https://github.com/russiankendricklamar) / [LinkedIn](https://www.linkedin.com/in/russiankendricklamar/?locale=ru) / [Email](mailto:egor@example.com)

---

## Биография

Егор Галкин — экономист и инженер, специализирующийся на стыке макроэкономики, количественных финансов и искусственного интеллекта. Занимает должность главного экономиста в Банке России. Окончил МГТУ им. Н. Э. Баумана по специальности «Вычислительная математика и математическая физика». Его работа сосредоточена на использовании больших языковых моделей (LLM) для автоматизации финансового анализа и разработке строгих количественных фреймворков для моделирования рынков.

---

## Таймлайн

- **2023 – Наст. время**: **Главный экономист**, Банк России. Макромоделирование и экономические исследования.
- **2021 – 2023**: **Quantitative Researcher**. Глубокое изучение стохастического исчисления и моделирования волатильности.
- **2017 – 2021**: **Студент**, МГТУ им. Н. Э. Баумана. Кафедра «Вычислительная математика и математическая физика» (ФН-11).

---

## Проекты и интересы

- **LLM Wiki**: Персональная база знаний по ИИ и количественным финансам.
- **AI в финансах**: Исследование того, как LLM (Claude, Gemini, Phi-4) могут интерпретировать макроэкономические протоколы.
- **Квантовая физика**: Изучение вычислительных параллелей между квантовой механикой и производными финансовыми инструментами.

---

## Стек технологий

- **Модели**: Anthropic (Claude 3.5 Sonnet), Gemini 2.0, Phi-4.
- **Инструменты**: Python (Pandas, PyTorch, QuantLib), TypeScript, Perplexity.
- **Методологии**: Численные методы, Стохастическое исчисление, RAG, AI-агенты.

---

## Разное

- **Чтение**: Научная фантастика, Макроистория, Технические статьи.
- **Интересы**: Физика, Шахматы, Наука о сложности.
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
