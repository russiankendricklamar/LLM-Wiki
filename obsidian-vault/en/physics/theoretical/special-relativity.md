---
title: 'Special Relativity: Minkowski Space and Lorentz Transforms'
category: Advanced Theory
order: 140
lang: en
slug: special-relativity
---

Special Relativity reformulates kinematics by unifying space and time into a 4-dimensional [[differential-geometry|manifold]] called **Minkowski space** $\mathcal{M}$.

### Lorentz Transformations
The fundamental invariant is the spacetime interval:
$ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2 = \eta_{\mu\nu} dx^\mu dx^\nu$
where $\eta_{\mu\nu} = \text{diag}(-1, 1, 1, 1)$ is the Minkowski metric. Transformations that leave this metric invariant are Lorentz transformations $\Lambda^\mu_\nu$, satisfying:
$\Lambda^\alpha_\mu \eta_{\alpha\beta} \Lambda^\beta_\nu = \eta_{\mu\nu}$
For a boost in the $x$-direction with velocity $v$:
$\begin{pmatrix} ct' \\ x' \\ y' \\ z' \end{pmatrix} = \begin{pmatrix} \gamma & -\beta\gamma & 0 & 0 \\ -\beta\gamma & \gamma & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} ct \\ x \\ y \\ z \end{pmatrix}$
where $\beta = v/c$ and $\gamma = (1-\beta^2)^{-1/2}$.

### Four-Vectors
Dynamics is described by four-vectors, such as four-momentum $p^\mu = m_0 U^\mu = (\gamma m_0 c, \gamma m_0 \mathbf{v})$, leading to the mass-shell condition:
$p_\mu p^\mu = -m_0^2 c^2 \implies E^2 = (pc)^2 + (m_0 c^2)^2$.
