---
title: "Локальная волатильность Дюпира"
category: "Модели ценообразования"
order: 102
lang: "ru"
---

# Локальная волатильность Дюпира

**Локальная волатильность (Local Volatility, LV)** — модель, предложенная Дюпиром (1994) и Дерманом-Кани (1994), в которой волатильность является детерминированной функцией текущей цены и времени: $\sigma = \sigma_{\text{loc}}(S, t)$. Модель точно воспроизводит всю поверхность подразумеваемой волатильности и является мостом между моделью Блэка-Шоулза и стохастическими SV-моделями.

## Уравнение Дюпира

Из условия отсутствия арбитража для рыночных цен опционов $C(K, T)$:

$$
\boxed{\sigma_{\text{loc}}^2(K, T) = \frac{\partial C/\partial T + rK\,\partial C/\partial K}{\frac{1}{2}K^2\,\partial^2 C/\partial K^2}}
$$

Числитель — «время-стоимость» изменения опциона; знаменатель — гамма, масштабированная страйком.

Альтернативная формулировка через подразумеваемую волатильность $\sigma_\text{impl}(K,T)$:

$$
\sigma_{\text{loc}}^2(K,T) = \frac{\sigma_{\text{impl}}^2 + 2T\sigma_{\text{impl}}\left(\partial\sigma_{\text{impl}}/\partial T + r K\,\partial\sigma_{\text{impl}}/\partial K\right)}{\left(1 + Kd_1\sqrt{T}\,\partial\sigma_{\text{impl}}/\partial K\right)^2 + K^2 T\sigma_{\text{impl}}\left(\partial^2\sigma_{\text{impl}}/\partial K^2 - d_1\sqrt{T}\left(\partial\sigma_{\text{impl}}/\partial K\right)^2\right)}
$$

где $d_1 = \frac{\ln(S/K) + (r + \sigma_{\text{impl}}^2/2)T}{\sigma_{\text{impl}}\sqrt{T}}$.

## Прямое уравнение Колмогорова (Fokker-Planck)

Плотность риск-нейтрального распределения $p(S, T)$:

$$
\frac{\partial p}{\partial T} = \frac{1}{2}\frac{\partial^2}{\partial S^2}\!\left[\sigma_{\text{loc}}^2(S,T)S^2 p\right] - r\frac{\partial}{\partial S}[Sp]
$$

Из этого уравнения и получается формула Дюпира.

## Реализация

```python
import numpy as np
from scipy.interpolate import RectBivariateSpline
from scipy.stats import norm

def black_scholes_call(S, K, T, r, sigma):
    d1 = (np.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma*np.sqrt(T))
    d2 = d1 - sigma*np.sqrt(T)
    return S*norm.cdf(d1) - K*np.exp(-r*T)*norm.cdf(d2)


class DupireLocalVol:
    """
    Поверхность локальной волатильности из сетки подразумеваемых волатильностей.
    """
    def __init__(self, strikes: np.ndarray, maturities: np.ndarray,
                 impl_vols: np.ndarray, S0: float, r: float):
        """
        strikes: (nK,) log-moneyness или абсолютные страйки
        maturities: (nT,)
        impl_vols: (nT, nK) — поверхность σ_impl
        """
        self.S0 = S0
        self.r  = r
        self.K  = strikes
        self.T  = maturities
        # Интерполируем опционные цены
        C = np.array([[black_scholes_call(S0, K, T, r, v)
                       for K, v in zip(strikes, impl_vols[i])]
                      for i, T in enumerate(maturities)])
        self._C_spline = RectBivariateSpline(maturities, strikes, C, kx=3, ky=3)

    def local_vol(self, K: float, T: float) -> float:
        """Вычисление σ_loc(K, T) по формуле Дюпира."""
        eps_K = K * 1e-4
        eps_T = T * 1e-4

        C   = self._C_spline(T, K)[0, 0]
        C_T = (self._C_spline(T+eps_T, K)[0,0] -
               self._C_spline(T-eps_T, K)[0,0]) / (2*eps_T)
        C_K = (self._C_spline(T, K+eps_K)[0,0] -
               self._C_spline(T, K-eps_K)[0,0]) / (2*eps_K)
        C_KK = (self._C_spline(T, K+eps_K)[0,0] -
                2*C + self._C_spline(T, K-eps_K)[0,0]) / eps_K**2

        num   = C_T + self.r * K * C_K
        denom = 0.5 * K**2 * C_KK
        if denom <= 1e-10:
            return float('nan')
        var = num / denom
        return float(np.sqrt(max(var, 0)))

    def vol_surface(self, K_grid: np.ndarray, T_grid: np.ndarray) -> np.ndarray:
        return np.array([[self.local_vol(K, T) for K in K_grid]
                         for T in T_grid])

    def simulate(self, T: float, n_steps: int, n_paths: int) -> np.ndarray:
        """МК-симуляция с локальной волатильностью."""
        dt = T / n_steps
        rng = np.random.default_rng(42)
        S = np.full(n_paths, self.S0)
        t = 0.0
        for _ in range(n_steps):
            t += dt
            lv = np.array([self.local_vol(s, t) for s in S])
            lv = np.where(np.isnan(lv), 0.2, lv)
            dW = rng.normal(0, np.sqrt(dt), n_paths)
            S = S * np.exp((self.r - 0.5*lv**2)*dt + lv*dW)
        return S
```

## Ограничения

- **Нереалистичная динамика волатильности**: $\sigma_{\text{loc}}$ — детерминированная функция, поэтому форвардная улыбка «уплощается» в будущем — противоречит рынку
- **Чувствительность к интерполяции**: второй численной производной по $K$ нужна плавная поверхность
- **Нет vol-of-vol**: не воспроизводит динамику VIX

**Решение**: **Stochastic Local Volatility (SLV)** — смесь LV и SV (Heston), используется в банках.

## Связанные статьи

- [[heston-model|Модель Хестона]] — SV без точной подгонки улыбки
- [[black-scholes|Модель Блэка-Шоулза]] — $\sigma_{\text{loc}} = \text{const}$
- [[rough-volatility|Грубая волатильность]] — альтернативный подход к форвардной улыбке
- [[sabr-model|Модель SABR]] — аналитическая приближение улыбки для IR-деривативов
