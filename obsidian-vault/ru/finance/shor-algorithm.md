---
title: "Алгоритм Шора"
category: "Алгоритмы и ML"
order: 76
lang: "ru"
---
# Алгоритм Шора

**Алгоритм Шора** — квантовый алгоритм факторизации целых чисел, разработанный Питером Шором в 1994 году. Работает за полиномиальное время $O((\log N)^3)$, что экспоненциально превосходит лучшие классические алгоритмы ($O(e^{N^{1/3}})$ для решета числового поля). Угрожает RSA-шифрованию, защищающему банковские транзакции и блокчейн.

## Математический аппарат

### Классическое сведение к задаче поиска порядка

Чтобы факторизовать $N$:
1. Выбрать случайное $a \in (1, N)$ с $\gcd(a, N) = 1$.
2. Найти **порядок** $r$ — минимальное $r > 0$: $a^r \equiv 1 \pmod{N}$.
3. Если $r$ чётно и $a^{r/2} \not\equiv -1 \pmod{N}$:
$$
\gcd(a^{r/2} - 1, N) \text{ и } \gcd(a^{r/2} + 1, N) \text{ — нетривиальные делители.}
$$

### Квантовое преобразование Фурье (QFT)

QFT над $\mathbb{Z}_Q$ ($Q = 2^n$) — унитарное преобразование:

$$
\text{QFT}|x\rangle = \frac{1}{\sqrt{Q}}\sum_{y=0}^{Q-1} e^{2\pi i xy/Q}|y\rangle
$$

Реализуется за $O(n^2)$ квантовых вентилей против $O(N \log N)$ классического FFT.

### Квантовый поиск порядка

1. Подготовить суперпозицию: $\frac{1}{\sqrt{Q}}\sum_{x=0}^{Q-1}|x\rangle|0\rangle$
2. Применить модульное возведение в степень: $|x\rangle|0\rangle \to |x\rangle|a^x \bmod N\rangle$
3. Измерить второй регистр → первый коллапсирует в состояние с периодом $r$
4. Применить обратный QFT → измерение даёт $k/r$ для случайного $k$
5. Извлечь $r$ методом **непрерывных дробей**

### Сложность и сравнение

| Алгоритм | Сложность | Тип |
| :--- | :--- | :--- |
| Алгоритм Шора | $O((\log N)^3)$ | Квантовый |
| Решето числового поля | $O\!\left(\exp(c(\log N)^{1/3}(\log\log N)^{2/3})\right)$ | Классический |
| Пробные делители | $O(\sqrt{N})$ | Классический |

## Python-реализация

```python
import numpy as np
from math import gcd, isqrt
from fractions import Fraction

def quantum_fourier_transform_matrix(n: int) -> np.ndarray:
    """
    Матрица QFT размера n×n (классическая симуляция).
    QFT[j,k] = exp(2πi·j·k/n) / sqrt(n)
    """
    j = np.arange(n)
    k = np.arange(n)
    omega = np.exp(2j * np.pi / n)
    return omega**(np.outer(j, k)) / np.sqrt(n)

def classical_order_finding(a: int, N: int, max_iter: int = 10_000) -> int | None:
    """Классический поиск порядка r: a^r ≡ 1 (mod N)."""
    val = a % N
    for r in range(1, max_iter):
        if val == 1:
            return r
        val = (val * a) % N
    return None

def shor_factor(N: int, attempts: int = 20) -> int | None:
    """
    Классическая симуляция алгоритма Шора.
    На реальном квантовом компьютере шаг order_finding выполняется квантово.

    Args:
        N: составное нечётное число, не являющееся степенью простого
        attempts: число случайных выборов a

    Returns:
        нетривиальный делитель N или None
    """
    if N % 2 == 0:
        return 2
    # Проверка на идеальный квадрат
    s = isqrt(N)
    if s * s == N:
        return s

    rng = np.random.default_rng(42)
    for _ in range(attempts):
        a = int(rng.integers(2, N))
        g = gcd(a, N)
        if g > 1:
            return g   # повезло

        r = classical_order_finding(a, N)
        if r is None or r % 2 != 0:
            continue
        x = pow(a, r // 2, N)
        if x == N - 1:
            continue

        p = gcd(x - 1, N)
        q = gcd(x + 1, N)
        if 1 < p < N:
            return p
        if 1 < q < N:
            return q
    return None

def continued_fraction_convergents(
    num: int, denom: int, max_terms: int = 20
) -> list[tuple[int, int]]:
    """
    Разложение в цепную дробь для извлечения периода из измерения QFT.
    Возвращает список подходящих дробей p/q.
    """
    convergents = []
    a, b = num, denom
    for _ in range(max_terms):
        if b == 0:
            break
        q_coeff = a // b
        convergents.append((a // b, b))
        a, b = b, a - q_coeff * b
    # Реконструкция подходящих дробей
    p_prev, p_curr = 1, convergents[0][0] if convergents else 0
    q_prev, q_curr = 0, 1
    result = [(p_curr, q_curr)]
    for coeff, _ in convergents[1:]:
        p_prev, p_curr = p_curr, coeff * p_curr + p_prev
        q_prev, q_curr = q_curr, coeff * q_curr + q_prev
        result.append((p_curr, q_curr))
    return result

# ---- Пример ----
N = 15
factor = shor_factor(N)
print(f"Шор факторизует {N} = {factor} × {N // factor}")

N2 = 21
factor2 = shor_factor(N2)
print(f"Шор факторизует {N2} = {factor2} × {N2 // factor2}")

# QFT для n=8
QFT8 = quantum_fourier_transform_matrix(8)
print(f"\nQFT(8) унитарна: ||QFT†QFT - I||_F = {np.linalg.norm(QFT8.conj().T @ QFT8 - np.eye(8)):.2e}")
```

## Сложность vs число кубитов

```chart
{
  "type": "bar",
  "xAxis": "rsa_bits",
  "data": [
    {"rsa_bits": "RSA-512",  "qubits": 1054,  "classical_years": 0.001},
    {"rsa_bits": "RSA-1024", "qubits": 2048,  "classical_years": 300},
    {"rsa_bits": "RSA-2048", "qubits": 4096,  "classical_years": 1e13},
    {"rsa_bits": "RSA-4096", "qubits": 8192,  "classical_years": 1e25}
  ],
  "bars": [
    {"dataKey": "qubits", "fill": "#8b5cf6", "name": "Логических кубитов (Shor)"}
  ]
}
```

## Справочник параметров

| Символ | Название | Описание | Значение |
| :--- | :--- | :--- | :--- |
| $N$ | Факторизуемое число | Произведение двух простых | RSA: $2^{512}$ – $2^{4096}$ |
| $Q$ | Размер регистра QFT | $Q \ge N^2$ для точности | $2^{2\lceil\log_2 N\rceil}$ |
| $r$ | Порядок функции | Период $a^r \equiv 1 \pmod N$ | 1 – $N$ |
| $n$ | Число кубитов | $n = \lceil\log_2 N\rceil$ | 512 – 4096 |

## Ограничения и расширения

- **Текущее состояние:** Для взлома RSA-2048 требуется ~4 000 логических кубитов при коррекции ошибок ($\approx 4\times10^6$ физических при текущем качестве); реальные машины имеют $\le 1000$ физических кубитов.
- **Постквантовая криптография:** NIST стандартизировал CRYSTALS-Kyber (решёточное), CRYSTALS-Dilithium и SPHINCS+ как замену RSA/ECDSA.
- **Эллиптические кривые:** ECDSA (Bitcoin, Ethereum) уязвим к квантовому алгоритму дискретного логарифма — расширению Шора. Требуется 2-кратно больше кубитов, чем для RSA той же битовой длины.

## Практические применения

1. **Оценка квантового риска:** Финансовые институты оценивают срок жизни шифрования существующих данных с горизонтом угрозы 10–15 лет.
2. **Постквантовый переход:** Переход TLS, S/MIME и HSM на PQC-алгоритмы требует замены инфраструктуры открытых ключей.
3. **Безопасность блокчейна:** Биткоин-адреса на основе ECDSA уязвимы; квантово-устойчивые подписи (Lamport, XMSS) рассматриваются как замена.

## Связанные темы
- [[sha-256]]
- [[mcmc]]
- [[spectral-analysis]]
- [[monte-carlo-method]]
