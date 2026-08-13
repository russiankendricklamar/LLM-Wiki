---
title: "JEPA: Совместно-внедренная прогностическая архитектура"
category: "ai-theory/architectures"
order: 242
lang: "ru"
slug: "jepa"
---

# JEPA: Joint Embedding Predictive Architecture

**JEPA (Joint Embedding Predictive Architecture)** — это архитектурный парадигмальный сдвиг в самообучении (Self-Supervised Learning, SSL), предложенный Яном Лекуном (Yann LeCun, Meta AI) в 2022 году в манифесте *«A Path Towards Autonomous Machine Intelligence»*.

Ключевая идея JEPA заключается в отказе от генерации сырых пикселей или токенов (как в Autoencoders и Generative AI) и отказе от отрицательных пар (как в контрастивном обучении SimCLR). JEPA учится **предсказывать представления в абстрактном латентном пространстве** с помощью предиктора, что делает модели устойчивыми к несущественному шуму и позволяет формировать мировые модели (World Models).

---

## 1. Сравнение парадигм самообучения (SSL)

```
1. Генеративные модели (MAE / Autoencoders):
   Вход x -> Энкодер -> Декодер -> Реконструкция пикселей x^ (Слишком детально, тратит емкость на шум)

2. Контрастивные модели (SimCLR / CLIP):
   Вход x, y -> Энкодеры -> Сближение положительных и отталкивание отрицательных пар (Требует огромных батчей)

3. JEPA (Ян Лекун):
   Контекст x -> Контекстный Энкодер -> z_x ───┐
                                              ├──> Предиктор P -> ẑ_y (Сравнение в латентном пространстве!)
   Цель y     -> Таргет Энкодер    -> z_y ───┘
```

---

## 2. Математика JEPA и Борьба с Схлопыванием (Collapse Prevention)

Пусть $x$ — видимый контекст (например, случайный патч изображения), а $y$ — скрытая целевая область.

1. **Контекстный энкодер:** $s_x = E_\theta(x)$
2. **Таргетный энкодер (учитель):** $s_y = E_\phi(y)$, где параметры $\phi$ обновляются через экспоненциальное скользящее среднее (EMA): $\phi \leftarrow \tau \phi + (1 - \tau) \theta$.
3. **Предиктор:** $\hat{s}_y = P_\psi(s_x, z)$, где $z$ — переменная условия (например, пространственные координаты патча $y$).

**Функция потерь потерь L1 в латентном пространстве:**

$$\mathcal{L}_{JEPA} = \|\hat{s}_y - s_y\|_1 = \|P_\psi(E_\theta(x), z) - E_\phi(y)\|_1$$

### Проблема схлопывания (Representation Collapse)
Без специальных мер сети могут найти тривиальное решение: $E_\theta(x) = \text{const}$. 
Для предотвращения схлопывания в I-JEPA и V-JEPA используются:
- **Stop-Gradient на таргетном энкодере:** Градиенты протекают только через предиктор и контекстный энкодер.
- **VICReg регуляризация:** Явное добавление потерь дисперсии (Variance) и ковариации (Covariance) для выравнивания распределения репрезентаций.

---

## 3. Реализация I-JEPA на Python / PyTorch

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class JEPALoss(nn.Module):
    def __init__(self, context_encoder: nn.Module, target_encoder: nn.Module, predictor: nn.Module, momentum: float = 0.996):
        super().__init__()
        self.context_encoder = context_encoder
        self.target_encoder = target_encoder
        self.predictor = predictor
        self.momentum = momentum
        
        # Замораживаем таргетный энкодер (градиенты отключаются)
        for param in self.target_encoder.parameters():
            param.requires_grad = False

    @torch.no_grad()
    def update_target_encoder(self):
        """EMA обновление весов таргетного энкодера."""
        for param_c, param_t in zip(self.context_encoder.parameters(), self.target_encoder.parameters()):
            param_t.data = self.momentum * param_t.data + (1.0 - self.momentum) * param_c.data

    def forward(self, context_x: torch.Tensor, target_y: torch.Tensor, target_masks: torch.Tensor) -> torch.Tensor:
        # 1. Получаем латентные представления
        s_x = self.context_encoder(context_x)
        
        with torch.no_grad():
            s_y = self.target_encoder(target_y)
            
        # 2. Предиктор предсказывает s_y по s_x и маске позиций
        pred_s_y = self.predictor(s_x, target_masks)
        
        # 3. L1 Loss в латентном пространстве
        loss = F.l1_loss(pred_s_y, s_y)
        return loss
```
