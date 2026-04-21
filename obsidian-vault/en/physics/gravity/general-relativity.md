---
title: "General Relativity"
category: "Physics"
order: 27
lang: "en"
slug: "general-relativity"
---

# General Relativity

**General relativity** (Einstein, 1915) is the theory of gravity as the curvature of spacetime. It replaces Newton's gravitational force with a geometric statement: mass-energy tells spacetime how to curve, and curved spacetime tells matter how to move. Everything from the perihelion of Mercury and the bending of starlight to black holes, gravitational lensing, gravitational waves, and modern cosmology is a consequence of a single equation.

## The equivalence principle

General relativity starts from a simple observation: inside a freely-falling laboratory, gravity disappears. An astronaut drifting in a falling elevator cannot, by any local experiment, tell that gravity is acting. This is the **strong equivalence principle** — locally, a gravitational field is indistinguishable from an accelerated frame.

Consequences:

- Inertial and gravitational mass are equal (verified to $10^{-13}$).
- Light falls in a gravitational field — photons bend near the Sun.
- Clocks run slower deeper in a gravitational well — **gravitational time dilation**.

Taken seriously, the principle says: there are no global inertial frames in the presence of gravity. Only freely-falling frames, and only locally. Spacetime cannot be flat.

## Spacetime as a curved [[differential-geometry|manifold]]

Spacetime becomes a 4-dimensional pseudo-Riemannian manifold $(M, g_{\mu\nu})$. The invariant line element is

$$
ds^2 = g_{\mu\nu}(x) \, dx^\mu dx^\nu,
$$

with $g_{\mu\nu}$ a symmetric tensor field of signature $(-,+,+,+)$. In the absence of gravity, $g_{\mu\nu}$ reduces to the Minkowski metric $\eta_{\mu\nu}$ of [[special-relativity|special relativity]]; in the presence of mass-energy it does not.

Free particles follow **geodesics** — extrema of the proper time

$$
\tau = \int \sqrt{-g_{\mu\nu}\dot x^\mu \dot x^\nu}\,d\lambda,
$$

which generalise straight lines. The geodesic equation is

$$
\frac{d^2 x^\mu}{d\tau^2} + \Gamma^\mu_{\nu\rho}\frac{dx^\nu}{d\tau}\frac{dx^\rho}{d\tau} = 0,
$$

where $\Gamma^\mu_{\nu\rho}$ are the Christoffel symbols built from $g_{\mu\nu}$ and its derivatives.

## Curvature

The degree to which spacetime departs from flat is encoded in the **Riemann tensor** $R^\rho{}_{\sigma\mu\nu}$, built from second derivatives of the metric. Its contractions are the **Ricci tensor** $R_{\mu\nu} = R^\rho{}_{\mu\rho\nu}$ and the **Ricci scalar** $R = g^{\mu\nu} R_{\mu\nu}$.

Geodesic deviation — the relative acceleration of neighbouring freely-falling particles — is proportional to $R^\rho{}_{\sigma\mu\nu}$. This is the covariant way of saying: tidal forces are the real, frame-independent signature of gravity.

## Einstein's field equations

The dynamical law of general relativity is

$$
G_{\mu\nu} + \Lambda\, g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu},
$$

where $G_{\mu\nu} = R_{\mu\nu} - \tfrac{1}{2}R\, g_{\mu\nu}$ is the **Einstein tensor**, $T_{\mu\nu}$ the **stress-energy tensor** of matter and radiation, and $\Lambda$ the cosmological constant. Ten coupled non-linear PDEs for the metric components.

They follow from the **Einstein-Hilbert action**

$$
S = \frac{c^4}{16\pi G}\int d^4 x\,\sqrt{-g}\, R + S_\text{matter}
$$

by the [[lagrangian-mechanics|variational principle]] $\delta S / \delta g^{\mu\nu} = 0$. GR is an ordinary Lagrangian field theory — the dynamical field is just the metric itself.

## Classical tests and predictions

| Prediction | Observation |
|---|---|
| Perihelion precession of Mercury | $43''$ per century — explained exactly |
| Light deflection by the Sun | $1.75''$ — measured by Eddington, 1919 |
| Gravitational redshift | Pound-Rebka (1959); GPS correction |
| Shapiro time delay | Cassini probe, relative accuracy $10^{-5}$ |
| Frame dragging (Lense-Thirring) | Gravity Probe B, 2011 |
| Gravitational waves | LIGO, GW150914 (2015) |
| Black hole shadow | Event Horizon Telescope, M87* (2019), Sgr A* (2022) |

## Black holes and singularities

The simplest vacuum solution is the **Schwarzschild metric**, describing a non-rotating uncharged black hole of mass $M$:

$$
ds^2 = -\left(1 - \frac{2GM}{c^2 r}\right) c^2 dt^2 + \left(1 - \frac{2GM}{c^2 r}\right)^{-1} dr^2 + r^2 d\Omega^2.
$$

At $r = 2GM/c^2$ — the **Schwarzschild radius** — coordinates become singular, but the geometry is regular: this is the event horizon. At $r = 0$ there is a true curvature singularity where $R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma} \to \infty$. Rotating black holes are described by the Kerr solution; charged ones by Reissner-Nordström.

The **Penrose-Hawking singularity theorems** show that singularities are generic consequences of gravitational collapse within GR, not artefacts of special symmetry.

## Cosmology

Applying Einstein's equations to a homogeneous, isotropic universe gives the **FLRW metric** and the **Friedmann equations**

$$
\left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2} + \frac{\Lambda c^2}{3},
$$

which describe the expansion history of the universe. Combined with the Standard Model of particle physics, they yield the $\Lambda\text{CDM}$ cosmology that fits CMB, BAO, supernova, and large-scale structure data.

## The asymptotic structure of spacetime

Far from isolated sources, gravity becomes weak and spacetime approaches Minkowski — but not trivially. The detailed asymptotic structure at null infinity is the subject of [[asymptotic-spacetime]], [[bms-group]], [[gravitational-memory]], and [[celestial-holography]], where Noether charges of large diffeomorphisms, soft gravitons, and black-hole information intersect.

## Related Topics

- [[special-relativity]] — the flat-spacetime limit GR reduces to locally
- [[gravitational-waves-gr]] — propagating ripples in the metric
- [[lagrangian-mechanics]] — the Einstein-Hilbert action
- [[asymptotic-spacetime]] — asymptotic structure of solutions
- [[black-hole-soft-hair]] — soft hair on black hole horizons
