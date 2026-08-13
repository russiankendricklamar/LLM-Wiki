---
title: "AdaLoRA: Адаптивная низкоранговая адаптация"
category: "language-models"
order: 244
lang: "ru"
slug: "adalora"
---

# AdaLoRA: Adaptive Low-Rank Adaptation

**AdaLoRA (Zhang et al., ICLR 2023)** — это усовершенствованный метод эффективной тонкой настройки (PEFT) больших языковых моделей, который обобщает классический метод LoRA. В отличие от стандартного LoRA, где ранг адаптера $r$ фиксирован одинаковым для всех слоев, AdaLoRA **динамически распределяет бюджет параметров** между слоями модели, отдавая высший ранг более важным слоям (например, глубоким слоям внимания) и отсекая неважные сингулярные значения.

---

## 1. Проблема классического LoRA
В стандартном LoRA приращение весов задается факторизацией $\Delta W = B \cdot A$, где $B \in \mathbb{R}^{d_1 \times r}, A \in \mathbb{R}^{r \times d_2}$.
Недостатки:
1. Фиксированный ранг $r$ субоптимален: разные слои трансформера требуют разной емкости адаптации.
2. Неэффективное расходование бюджетов параметров на начальные слои сети.

---

## 2. Математическая факторизация в форме SVD

В AdaLoRA приращение матриц весов явно формулируется в форме сингулярного разложения (SVD):

$$\Delta W = P \cdot \Lambda \cdot Q$$

где:
- $P \in \mathbb{R}^{d_1 \times r}$ —левая ортогональная матрица ($P^T P = I$),
- $\Lambda \in \mathbb{R}^{r \times r}$ — диагональная матрица сингулярных чисел $\lambda_i$,
- $Q \in \mathbb{R}^{r \times d_2}$ — правая ортогональная матрица ($Q Q^T = I$).

Чтобы гарантировать ортогональность матриц $P$ и $Q$ без явного дорогостоящего SVD на каждом шаге, в функцию потерь добавляется специальный регуляризатор **ортогональности**:

$$\mathcal{R}(P, Q) = \|P^T P - I\|_F^2 + \|Q Q^T - I\|_F^2$$

---

## 3. Оценка важности сингулярных троек (Importance Score)

Для каждого $k$-го сингулярного значения $\lambda_k$ и соответствующих векторов $P_{*,k}, Q_{k,*}$ вычисляется показатель важности (Importance Metric) $S_k$ на основе градиентов по методу чувствительности первого порядка (First-Order Sensitivity):

$$S_k = s(\lambda_k) + \frac{1}{d_1} \sum_{i=1}^{d_1} s(P_{ik}) + \frac{1}{d_2} \sum_{j=1}^{d_2} s(Q_{kj})$$

где $s(\theta) = |\theta \cdot \nabla_\theta \mathcal{L}|$ — взвешенная абсолютная чувствительность параметра.

На шаге прунинга (Pruning Step) сингулярные значения с наименьшим $S_k$ зануляются ($\lambda_k = 0$), что позволяет перераспределить высвободившийся ранг на другие слои.

---

## 4. Реализация на Python / PyTorch

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class AdaLoRALinear(nn.Module):
    def __init__(self, in_features: int, out_features: int, r: int = 12):
        super().__init__()
        self.in_features = in_features
        self.out_features = out_features
        self.r = r
        
        # Замороженный основной вес
        self.weight = nn.Parameter(torch.Tensor(out_features, in_features), requires_grad=False)
        
        # SVD-компоненты AdaLoRA
        self.lora_P = nn.Parameter(torch.randn(out_features, r) * 0.01)
        self.lora_E = nn.Parameter(torch.randn(r, 1) * 0.01)  # Диагональ Λ
        self.lora_Q = nn.Parameter(torch.randn(r, in_features) * 0.01)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # 1. Выход базвого слоя
        base_out = F.linear(x, self.weight)
        
        # 2. Адаптивное SVD приращение: ΔW = P @ diag(E) @ Q
        effective_weight = self.lora_P @ (self.lora_E * self.lora_Q)
        lora_out = F.linear(x, effective_weight)
        
        return base_out + lora_out

    def calc_orthogonality_regularizer(self) -> torch.Tensor:
        """Регуляризатор ортогональности ||P^T P - I||^2 + ||Q Q^T - I||^2."""
        I_r = torch.eye(self.r, device=self.lora_P.device)
        reg_P = torch.norm(self.lora_P.T @ self.lora_P - I_r, p='fro')**2
        reg_Q = torch.norm(self.lora_Q @ self.lora_Q.T - I_r, p='fro')**2
        return reg_P + reg_Q
```
