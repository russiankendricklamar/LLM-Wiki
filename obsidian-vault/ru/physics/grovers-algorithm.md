---
title: "Алгоритм Гровера: Квантовый поиск"
category: "physics"
order: 279
lang: "ru"
slug: "grovers-algorithm"
---

# Алгоритм Гровера (Grover's Quantum Search Algorithm)

Алгоритм Гровера — это квантовый алгоритм, разработанный Ловом Гровером в 1996 году. Он обеспечивает **квадратичное квантовое ускорение** для задачи неструктурированного поиска. На классическом компьютере поиск целевого элемента в неотсортированном массиве из $N = 2^n$ элементов требует $O(N)$ обращений к функции. Алгоритм Гровера находит решение за $O(\sqrt{N})$ квантовых запросов.

---

## 1. Постановка задачи и Квантовый Оракул

Пусть дана функция $f: \{0, 1\}^n \to \{0, 1\}$, такая что $f(x) = 1$ только для одного «искомого» элемента $x = \omega$, и $f(x) = 0$ для всех остальных $x \neq \omega$.

**Квантовый оракул ($U_\omega$)** инвертирует фазу целевого состояния $|\omega\rangle$:

$$U_\omega |x\rangle = (-1)^{f(x)} |x\rangle = \begin{cases} -|\omega\rangle, & x = \omega \\ |x\rangle, & x \neq \omega \end{cases}$$

В матричной форме: $U_\omega = I - 2|\omega\rangle\langle\omega|$.

---

## 2. Инициализация и Суперпозиция

Начальное состояние кубитов создается применением операторов Адамара $H^{\otimes n}$ к кубитам $|0\rangle^{\otimes n}$, образуя равную суперпозицию всех $N$ состояний:

$$|s\rangle = H^{\otimes n} |0\rangle^{\otimes n} = \frac{1}{\sqrt{N}} \sum_{x=0}^{N-1} |x\rangle$$

---

## 3. Оператор диффузии Гровера (Инверсия относительно среднего)

Оператор диффузии $U_s$ отражает амплитуды квантовых состояний относительно среднего значения всех амплитуд:

$$U_s = 2|s\rangle\langle s| - I = H^{\otimes n} \left( 2|0\rangle\langle 0| - I \right) H^{\otimes n}$$

---

## 4. Геометрическая интерпретация: Вращение на плоскости

Операция $G = U_s U_\omega$ называется **оператором Гровера**.

Состояние системы всегда остается на 2D-плоскости, натянутой на вектор искомого состояния $|\omega\rangle$ и ортогональный вектор суммарного шума $|s'\rangle = \frac{1}{\sqrt{N-1}} \sum_{x \neq \omega} |x\rangle$:

$$|s\rangle = \sin\left(\frac{\theta}{2}\right) |\omega\rangle + \cos\left(\frac{\theta}{2}\right) |s'\rangle, \quad \text{где } \sin\left(\frac{\theta}{2}\right) = \frac{1}{\sqrt{N}}$$

Каждое применение итератора Гровера $G$ поворачивает вектор состояния на угол $\theta \approx \frac{2}{\sqrt{N}}$ в сторону $|\omega\rangle$.

Оптимальное число итераций Гровера для максимальной вероятности измерения $|\omega\rangle$:

$$R \approx \frac{\pi}{4} \sqrt{N}$$

---

## 5. Реализация на Python / Qiskit

```python
from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_histogram
import numpy as np

def create_grover_circuit(n_qubits: int, target_state: str) -> QuantumCircuit:
    """Создает квантовую схему Гровера для n кубитов и целевого состояния."""
    qc = QuantumCircuit(n_qubits, n_qubits)
    
    # 1. Инициализация: Равная суперпозиция H^⊗n
    qc.h(range(n_qubits))
    
    # Вычисляем оптимальное число итераций R ≈ (π/4) * √N
    N = 2**n_qubits
    iterations = int(np.floor((np.pi / 4) * np.sqrt(N)))
    
    for _ in range(iterations):
        # 2. Квантовый Оракул U_ω (для целевого состояния |11...1>)
        qc.cz(0, 1)  # Оракул Phase-flip для |11>
        
        # 3. Оператор диффузии U_s (Инверсия относительно среднего)
        qc.h(range(n_qubits))
        qc.z(range(n_qubits))
        qc.cz(0, 1)
        qc.h(range(n_qubits))
        
    # Измерение
    qc.measure(range(n_qubits), range(n_qubits))
    return qc

# Создаем схему для 2 кубитов (N = 4, целевое состояние |11>)
qc = create_grover_circuit(n_qubits=2, target_state="11")
print(qc.draw())
```
