---
title: "Anomalies"
category: "Physics"
order: 35
lang: "en"
slug: "anomalies"
---

# Anomalies

An **anomaly** in quantum field theory is a classical symmetry of an action that fails to survive quantisation. The Lagrangian is invariant; the classical equations of motion conserve a Noether current; but the full quantum theory — encoded in the [[path-integral]] measure — does *not* respect the symmetry, and the [[ward-identities|Ward identity]] $\partial_\mu j^\mu = 0$ is violated by specific, calculable, finite quantum terms. Anomalies are not failures of the theory. They are real physical effects: the $\pi^0 \to 2\gamma$ decay rate, the absence of extra generations of quarks, and the internal consistency of the Standard Model are all controlled by them.

## The general picture

A continuous symmetry can be broken in three different ways:

1. **Explicitly** — by adding non-invariant terms to the Lagrangian.
2. **Spontaneously** — the Lagrangian is invariant but the vacuum is not (see [[goldstone-modes]]).
3. **Anomalously** — both the Lagrangian *and* the vacuum are invariant, but the path-integral measure is not.

The third kind is the anomaly. Formally, under a symmetry transformation $\phi \to \phi + \epsilon\,\delta\phi$, the measure transforms as $\mathcal D\phi \to |J|\,\mathcal D\phi$ with a Jacobian $|J| = \exp\!\left(i\int d^4x\,\epsilon(x)\,\mathcal A(x)\right)$. If $\mathcal A \ne 0$, the Ward identity becomes

$$
\partial_\mu j^\mu = \mathcal A,
$$

a nonzero, gauge-invariant local operator built out of the fields.

## The chiral anomaly

The most famous anomaly, discovered by Adler, Bell, and Jackiw (1969). Classically, massless QED has a $U(1)_A$ "axial" symmetry $\psi \to e^{i\alpha\gamma^5}\psi$ with axial current $j^\mu_5 = \bar\psi\gamma^\mu\gamma^5\psi$. At the quantum level,

$$
\partial_\mu j^\mu_5 = \frac{e^2}{16\pi^2}\,\epsilon^{\mu\nu\rho\sigma} F_{\mu\nu} F_{\rho\sigma}.
$$

The coefficient on the right is **exact** — it is computed by a single triangle diagram and receives no corrections from higher-loop perturbation theory or from non-perturbative effects. This is an early instance of the **non-renormalisation theorem** for anomalies.

Physically, the anomaly fixes the $\pi^0 \to 2\gamma$ decay rate:

$$
\Gamma(\pi^0 \to \gamma\gamma) = \frac{\alpha^2 m_{\pi^0}^3}{64\pi^3 f_\pi^2},
$$

which agrees with experiment to better than a percent. Without the anomaly, the decay would be forbidden at the relevant order. The fact that experiment sees it is one of the clearest pieces of evidence that anomalies are real.

## Scale / trace anomaly

Classically, a massless [[renormalization-group|scale-invariant]] theory has a traceless stress-energy tensor $T^\mu{}_\mu = 0$. Quantum-mechanically, the need to regulate UV divergences introduces a scale (the RG scale $\mu$), and the trace becomes

$$
T^\mu{}_\mu = \frac{\beta(g)}{2g}\, F_{\mu\nu}^a F^{a\,\mu\nu} + \ldots
$$

proportional to the beta function. This is the **trace anomaly** — scale invariance is broken by quantum effects whenever the beta function is nonzero. It is the reason coupling constants *have* to run, and it connects the RG picture of [[renormalization-group]] to the symmetry language of QFT.

## Gauge anomalies and the Standard Model

Anomalies in **global** symmetries (like $U(1)_A$) are physical: they produce observable decay rates and selection rules. Anomalies in **gauge** symmetries are catastrophic: they destroy the Ward identities that keep gauge theories unitary and renormalisable, so a consistent gauge theory must be **anomaly-free**.

In the Standard Model, the $SU(2)_L$, $U(1)_Y$, $SU(3)_C$ gauge anomalies all cancel — but only because of delicate relations between the hypercharges and representations of quarks and leptons in a single generation. For example, the $[SU(2)_L]^2 U(1)_Y$ anomaly cancels only when

$$
3 Y_{Q_L} + Y_{L_L} = 0,
$$

which is satisfied by the measured hypercharges. This is a highly non-trivial consistency check: the electric charge of the proton exactly cancels that of the electron because anomaly cancellation demands it. Remove a single fermion from a generation and the Standard Model breaks.

Anomaly cancellation is also why there are exactly 3 colours of quarks: with a different number of colours, the $[SU(2)_L]^2 U(1)_Y$ and $[U(1)_Y]^3$ anomalies would not cancel.

## Anomaly matching and 't Hooft's constraint

't Hooft (1980) noticed that anomalies in global symmetries must *match* between a UV description of a theory and any IR description of the same theory, even when the IR degrees of freedom are completely different from the UV ones. This **anomaly matching** is one of the strongest constraints on the low-energy content of strongly-coupled gauge theories like QCD: it forces the existence of massless composite states (like pions) or dictates which symmetries must be spontaneously broken.

Anomaly matching is one of the few non-perturbative tools that survives into strongly-coupled regimes, and it has become central to the study of dualities, confinement, and exotic phases of gauge theories.

## Gravitational and mixed anomalies

There are also anomalies involving gravitational backgrounds: currents coupled to spacetime curvature can fail to be conserved with coefficients involving $R_{\mu\nu\rho\sigma}$. These are rarer in the Standard Model but central to string theory — anomaly cancellation in the heterotic string (Green-Schwarz, 1984) is what singled out $SO(32)$ and $E_8 \times E_8$ as the only consistent gauge groups, triggering the first superstring revolution.

## Why anomalies matter

Anomalies turn symmetry — a soft concept about how a theory *might* behave — into a sharp, quantitative constraint on what theories are internally consistent. They link:

- The number of quark colours to $\pi^0 \to 2\gamma$.
- The hypercharge of every Standard Model fermion to gauge-invariance of electroweak theory.
- The running of coupling constants to the trace anomaly.
- The UV/IR duality of strongly-coupled gauge theories to 't Hooft anomaly matching.
- The allowed gauge groups in string theory to Green-Schwarz cancellation.

They are, arguably, the most precise and predictive fingerprint of quantum field theory — the place where symmetries, representations, and the path-integral measure meet.

## Related Topics

- [[noether-theorem]] — classical conservation that fails for anomalous currents
- [[ward-identities]] — the quantum identities anomalies modify
- [[gauge-theory-yang-mills]] — anomaly cancellation as a constraint
- [[renormalization-group]] — trace anomaly and beta function
- [[goldstone-modes]] — pseudo-Goldstone pion and anomalous $\pi^0 \to 2\gamma$
- [[path-integral]] — where the anomaly literally lives: the measure
