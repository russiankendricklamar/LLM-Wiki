export const aboutMeEn = `
# EGOR GALKIN

**I like to build quantitative models and train LLM agents.**

I am currently a **Principal Economist at the Bank of Russia**, where I focus on macroeconomic modeling and data-driven policy analysis. In my spare time, I work as a **Quantitative Analyst and AI Engineer**, bridging the gap between computational physics, financial mathematics, and state-of-the-art AI.

[GitHub](https://github.com/russiankendricklamar) / [LinkedIn](https://www.linkedin.com/in/russiankendricklamar/?locale=ru) / [Email](mailto:egor@example.com)

---

## Timeline

- **2025 – Present**: **Principal Economist / Risk Analyst**, Bank of Russia (Risk Analysis Service). Fair value of securities and derivatives (IFRS 9/13), process automation for valuation.
- **2024 – 2025**: **Risk Manager**, Bank of Russia (Supervision of Systemically Important Banks). IRB model validation, econometric modeling, statistical testing, and credit risk methodology.
- **2023 – 2024**: **Risk Analyst**, Bank of Russia (Risk Analysis Service). Valuation and risk assessment of financial instruments.
- **2022 – 2023**: **Expert**, Bank of Russia (Banking Supervision). Financial statement analysis (IFRS/RAS), business strategy assessment, and risk monitoring.
- **2019 – 2022**: **Event Manager**, BMSTU (Creative Industries). Financial literacy workshops (ESG, Personal Finance), budget management, and procurement.

---

## Projects

- **Zeta Terminal**: An advanced AI-native workspace for financial analysis and coding. It integrates real-time data, high-performance computing, and LLM assistance into a unified terminal environment.
- **Ultima Thule**: A specialized application designed for seamless travel and exploration.
- **LLM Wiki**: A digital garden for structuring knowledge on AI, Quant Finance, and Quantum Physics.

---

## Interests

- **AI in Finance**: Researching how LLMs (Claude, Gemini, Phi-4) can interpret macroeconomic protocols.
- **Quantum Physics**: Exploring the computational parallels between quantum mechanics and financial derivatives.

---

## Technical Stack

- **Models**: Anthropic (Claude 3.5 Sonnet), Gemini 2.0, Phi-4.
- **Tools**: Python (Pandas, PyTorch, QuantLib), TypeScript, Perplexity.
- **Methodologies**: Numerical Methods, Stochastic Calculus, RAG, AI Agents.
`;

export const aboutMeRu = `
# ГАЛКИН ЕГОР

**Я строю количественные модели и обучаю LLM-агентов.**

В настоящее время я — **главный экономист в Банке России**, где занимаюсь макроэкономическим моделированием и анализом данных для экономической политики. В свободное время я работаю как **количественный аналитик и AI-инженер**, объединяя вычислительную физику, финансовую математику и современные технологии ИИ.

[GitHub](https://github.com/russiankendricklamar) / [LinkedIn](https://www.linkedin.com/in/russiankendricklamar/?locale=ru) / [Email](mailto:egor@example.com)

---

## Таймлайн

- **2025 – Наст. время**: **Главный экономист / Риск-аналитик**, Банк России (Служба анализа рисков). Оценка справедливой стоимости ЦБ и ПФИ (МСФО 9/13), автоматизация процессов оценки.
- **2024 – 2025**: **Риск-менеджер**, Банк России (Департамент надзора за СЗКО). Валидация ПВР-моделей (IRB), эконометрическое моделирование, надзор за расчетом нормативов капитала.
- **2023 – 2024**: **Риск-аналитик**, Банк России (Служба анализа рисков). Оценка рисков вложений в ценные бумаги и подготовка аналитических заключений.
- **2022 – 2023**: **Эксперт**, Банк России (Служба текущего банковского надзора). Анализ отчетности (РСБУ/МСФО), оценка бизнес-моделей банков, мониторинг финансового состояния.
- **2019 – 2022**: **Менеджер по организации мероприятий**, МГТУ им. Н. Э. Баумана. Мастер-классы по финансовой грамотности и ESG, управление бюджетом и закупками.

---

## Проекты

- **Zeta Terminal**: Продвинутое AI-native рабочее пространство для финансового анализа и разработки. Интегрирует данные в реальном времени, высокопроизводительные вычисления и помощь LLM в единую терминальную среду.
- **Ultima Thule**: Специализированное приложение для путешествий и исследований.
- **LLM Wiki**: Персональная база знаний по ИИ, количественным финансам и квантовой физике.

---

## Интересы

- **AI в финансах**: Исследование того, как LLM (Claude, Gemini, Phi-4) могут интерпретировать макроэкономические протоколы.
- **Квантовая физика**: Изучение вычислительных параллелей между квантовой механикой и производными финансовыми инструментами.

---

## Стек технологий

- **Модели**: Anthropic (Claude 3.5 Sonnet), Gemini 2.0, Phi-4.
- **Инструменты**: Python (Pandas, PyTorch, QuantLib), TypeScript, Perplexity.
- **Методологии**: Численные методы, Стохастическое исчисление, RAG, AI-агенты.
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

## Model Parameters

The table below summarizes the key parameters used in the Black-Scholes model:

| Parameter | Symbol | Description |
| :--- | :---: | :--- |
| Spot Price | $S$ | Current price of the underlying asset |
| Strike Price | $K$ | Price at which the option can be exercised |
| Time to Maturity | $T$ | Time remaining until the option expires |
| Risk-free Rate | $r$ | Constant interest rate |
| Volatility | $\\sigma$ | Measure of the asset's price variation |


`;

export const blackScholesMarkdownRu = `
# Модель Блэка-Шоулза


**Модель Блэка-Шоулза** (Black-Scholes model), также известная как модель Блэка-Шоулза-Мертона, представляет собой математическую модель динамики финансового рынка, содержащего производные инвестиционные инструменты.

## Уравнение Блэка-Шоулза

Уравнение Блэка-Шоулза — это параболическое дифференциальное уравнение в частных производных, которое описывает цену опциона во времени. Уравнение имеет вид:

$$
\\frac{\\partial V}{\\partial t} + \\frac{1}{2}\\sigma^2 S^2 \\frac{\\partial^2 V}{\\partial S^2} + rS \\frac{\\partial V}{\\partial S} - rV = 0
$$

Где:
- $V$ — цена опциона как функция цены акции $S$ и времени $t$
- $r$ — безрисковая процентная ставка
- $\\sigma$ — волатильность доходности акций

## Формула Блэка-Шоулза

Формулы для европейского колл-опциона $C$ и пут-опциона $P$ имеют вид:

$$
\\begin{aligned}
C(S, t) &= N(d_1)S - N(d_2)Ke^{-r(T-t)} \\\\
P(S, t) &= N(-d_2)Ke^{-r(T-t)} - N(-d_1)S
\\end{aligned}
$$

Где $d_1$ и $d_2$ определяются как:

$$
\\begin{aligned}
d_1 &= \\frac{\\ln(S/K) + (r + \\sigma^2/2)(T-t)}{\\sigma\\sqrt{T-t}} \\\\
d_2 &= d_1 - \\sigma\\sqrt{T-t}
\\end{aligned}
$$

А $N(x)$ — кумулятивная функция распределения стандартного нормального распределения.

## Реализация на Python

Ниже представлена реализация на Python для расчета цен европейских колл и пут опционов по формуле Блэка-Шоулза:

\`\`\`python
import numpy as np
from scipy.stats import norm

def black_scholes(S, K, T, r, sigma, option_type='call'):
    """
    Рассчитать цену опциона по модели Блэка-Шоулза.
    """
    d1 = (np.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)

    if option_type == 'call':
        price = S * norm.cdf(d1) - K * np.exp(-r * T) * norm.cdf(d2)
    elif option_type == 'put':
        price = K * np.exp(-r * T) * norm.cdf(-d2) - S * norm.cdf(-d1)
    else:
        raise ValueError("option_type должен быть 'call' или 'put'")

    return price
\`\`\`

## Визуализация цены опциона

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
    {"dataKey": "call", "stroke": "#10b981", "name": "Цена Call"},
    {"dataKey": "put", "stroke": "#ef4444", "name": "Цена Put"}
  ]
}
\`\`\`


## Параметры модели

В таблице ниже приведены основные параметры, используемые в модели Блэка-Шоулза:

| Параметр | Символ | Описание |
| :--- | :---: | :--- |
| Цена спот | $S$ | Текущая цена базового актива |
| Цена страйк | $K$ | Цена, по которой может быть исполнен опцион |
| Время до погашения | $T$ | Время, оставшееся до истечения срока действия опциона |
| Безрисковая ставка | $r$ | Постоянная процентная ставка |
| Волатильность | $\\sigma$ | Мера изменения цены актива |


`;

export const levyProcessMarkdownEn = `
# Lévy Processes

A **Lévy process** is a stochastic process with independent and stationary increments. It represents the continuous-time analog of a random walk. Lévy processes are fundamental in quantitative finance for modeling asset prices that exhibit jumps and "fat tails."

## Definition and Properties

A stochastic process $X = \\{X_t : t \\ge 0\\}$ is a Lévy process if:
1. $X_0 = 0$ almost surely.
2. **Independent increments**: For any $s < t$, $X_t - X_s$ is independent of $\\{X_u : u \\le s\\}$.
3. **Stationary increments**: For any $s < t$, $X_t - X_s$ is equal in distribution to $X_{t-s}$.
4. **Continuity in probability**: For any $\\epsilon > 0$, $\\lim_{h \\to 0} P(|X_{t+h} - X_t| > \\epsilon) = 0$.

## The Lévy-Khintchine Representation

Every Lévy process is uniquely determined by its characteristic exponent $\\psi(\\theta)$, defined by $E[e^{i\\theta X_t}] = e^{t\\psi(\\theta)}$. The Lévy-Khintchine formula states:

$$
\\psi(\\theta) = i\\gamma\\theta - \\frac{1}{2}\\sigma^2\\theta^2 + \\int_{\\mathbb{R}\\setminus\\{0\\}} (e^{i\\theta x} - 1 - i\\theta x \\mathbf{1}_{|x|<1}) \\nu(dx)
$$

Where:
- $\\gamma$ is the drift parameter.
- $\\sigma^2$ is the Gaussian (diffusion) variance.
- $\\nu$ is the Lévy measure, describing the jump intensity and size.

## Key Examples

- **Wiener Process (Brownian Motion)**: $\\nu = 0$. The only continuous Lévy process.
- **Poisson Process**: $\\sigma = 0$, $\\nu = \\lambda \\delta_1$. Represents counting events.
- **Compound Poisson Process**: Jumps occur at Poisson-distributed times with random sizes.

## Python: Jump-Diffusion Simulation

Lévy processes are often simulated using the Merton Jump-Diffusion model:

\`\`\`python
import numpy as np

def simulate_jump_diffusion(S0, T, r, sigma, lamb, mu_j, sigma_j, steps):
    dt = T / steps
    t = np.linspace(0, T, steps)
    
    # Brownian component
    W = np.random.standard_normal(steps)
    
    # Jump component
    N = np.random.poisson(lamb * dt, steps)
    J = np.where(N > 0, np.random.normal(mu_j, sigma_j, steps), 0)
    
    # Log-return calculation
    log_S = np.zeros(steps)
    log_S[0] = np.log(S0)
    
    for i in range(1, steps):
        drift = (r - 0.5 * sigma**2 - lamb * (np.exp(mu_j + 0.5 * sigma_j**2) - 1)) * dt
        diffusion = sigma * np.sqrt(dt) * W[i]
        jumps = N[i] * J[i]
        log_S[i] = log_S[i-1] + drift + diffusion + jumps
        
    return t, np.exp(log_S)
\`\`\`

## Jump Process Visualization

The following chart illustrates a Lévy process with both a continuous diffusion component and discrete jumps (Jump-Diffusion).

\`\`\`chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0.0", "price": 100.0},
    {"time": "0.1", "price": 101.2},
    {"time": "0.2", "price": 99.8},
    {"time": "0.3", "price": 100.5},
    {"time": "0.4", "price": 106.2},
    {"time": "0.5", "price": 105.4},
    {"time": "0.6", "price": 104.1},
    {"time": "0.7", "price": 95.8},
    {"time": "0.8", "price": 96.5},
    {"time": "0.9", "price": 97.2},
    {"time": "1.0", "price": 98.0}
  ],
  "lines": [
    {"dataKey": "price", "stroke": "#3b82f6", "name": "Asset Price (with Jumps)"}
  ]
}
\`\`\`

## Model Parameters

| Component | Description | Financial Impact |
| :--- | :--- | :--- |
| **Diffusion** | Continuous price movement | Normal market volatility |
| **Jumps** | Sudden price discontinuities | Market shocks / news |
| **Drift** | Average rate of return | Expected growth |

`;

export const levyProcessMarkdownRu = `
# Процессы Леви

**Процесс Леви** — это стохастический процесс с независимыми и стационарными приращениями. Он представляет собой непрерывный аналог случайного блуждания. Процессы Леви фундаментальны в количественных финансах для моделирования цен активов, которые демонстрируют скачки и «тяжелые хвосты».

## Определение и свойства

Стохастический процесс $X = \\{X_t : t \\ge 0\\}$ является процессом Леви, если:
1. $X_0 = 0$ (почти наверное).
2. **Независимые приращения**: Для любых $s < t$ приращение $X_t - X_s$ не зависит от траектории процесса до момента $s$ (от $\\{X_u : u \\le s\\}$).
3. **Стационарные приращения**: Для любых $s < t$ распределение приращения $X_t - X_s$ зависит только от длины интервала $t-s$.
4. **Непрерывность по вероятности**: Для любого $\\epsilon > 0$, $\\lim_{h \\to 0} P(|X_{t+h} - X_t| > \\epsilon) = 0$.

## Представление Леви-Хинчина

Каждый процесс Леви однозначно определяется своим характеристическим показателем $\\psi(\\theta)$, задаваемым уравнением $E[e^{i\\theta X_t}] = e^{t\\psi(\\theta)}$. Формула Леви-Хинчина гласит:

$$
\\psi(\\theta) = i\\gamma\\theta - \\frac{1}{2}\\sigma^2\\theta^2 + \\int_{\\mathbb{R}\\setminus\\{0\\}} (e^{i\\theta x} - 1 - i\\theta x \\mathbf{1}_{|x|<1}) \\nu(dx)
$$

Где:
- $\\gamma$ — параметр дрейфа.
- $\\sigma^2$ — гауссовская (диффузионная) дисперсия.
- $\\nu$ — мера Леви, описывающая интенсивность и размер скачков.

## Основные примеры

- **Винеровский процесс (Броуновское движение)**: $\\nu = 0$. Единственный непрерывный процесс Леви.
- **Пуассоновский процесс**: $\\sigma = 0$, $\\nu = \\lambda \\delta_1$. Описывает подсчет дискретных событий.
- **Сложный пуассоновский процесс**: Скачки происходят в моменты времени, распределенные по Пуассону, и имеют случайный размер.

## Python: Симуляция скачкообразной диффузии

Процессы Леви часто моделируются с использованием модели скачкообразной диффузии Мертона (Merton Jump-Diffusion):

\`\`\`python
import numpy as np

def simulate_jump_diffusion(S0, T, r, sigma, lamb, mu_j, sigma_j, steps):
    dt = T / steps
    t = np.linspace(0, T, steps)
    
    # Броуновская компонента
    W = np.random.standard_normal(steps)
    
    # Компонента скачков
    N = np.random.poisson(lamb * dt, steps)
    J = np.where(N > 0, np.random.normal(mu_j, sigma_j, steps), 0)
    
    # Расчет лог-доходности
    log_S = np.zeros(steps)
    log_S[0] = np.log(S0)
    
    for i in range(1, steps):
        drift = (r - 0.5 * sigma**2 - lamb * (np.exp(mu_j + 0.5 * sigma_j**2) - 1)) * dt
        diffusion = sigma * np.sqrt(dt) * W[i]
        jumps = N[i] * J[i]
        log_S[i] = log_S[i-1] + drift + diffusion + jumps
        
    return t, np.exp(log_S)
\`\`\`

## Визуализация процесса со скачками

Ниже представлен график процесса Леви, сочетающий непрерывную диффузию и дискретные скачки (Jump-Diffusion).

\`\`\`chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0.0", "price": 100.0},
    {"time": "0.1", "price": 101.2},
    {"time": "0.2", "price": 99.8},
    {"time": "0.3", "price": 100.5},
    {"time": "0.4", "price": 106.2},
    {"time": "0.5", "price": 105.4},
    {"time": "0.6", "price": 104.1},
    {"time": "0.7", "price": 95.8},
    {"time": "0.8", "price": 96.5},
    {"time": "0.9", "price": 97.2},
    {"time": "1.0", "price": 98.0}
  ],
  "lines": [
    {"dataKey": "price", "stroke": "#3b82f6", "name": "Цена актива (со скачками)"}
  ]
}
\`\`\`

## Параметры модели

| Компонента | Описание | Финансовое влияние |
| :--- | :--- | :--- |
| **Диффузия** | Непрерывное движение цены | Обычная рыночная волатильность |
| **Скачки** | Внезапные разрывы в цене | Рыночные шоки / новости |
| **Дрейф** | Средняя скорость доходности | Ожидаемый рост |

`;

export const mockNavigationRu = [
  {
    title: "Меню",
    items: [
      { title: "Обо мне", href: "/" },
    ],
  },
  {
    title: "Количественные финансы",
    items: [
      { title: "Модель Блэка-Шоулза", href: "/finance/black-scholes" },
      { title: "Процессы Леви", href: "/finance/levy-processes" },
    ],
  },
];

export const mockNavigationEn = [
  {
    title: "Menu",
    items: [
      { title: "About Me", href: "/" },
    ],
  },
  {
    title: "Quantitative Finance",
    items: [
      { title: "Black-Scholes Model", href: "/finance/black-scholes" },
      { title: "Lévy Processes", href: "/finance/levy-processes" },
    ],
  },
];
