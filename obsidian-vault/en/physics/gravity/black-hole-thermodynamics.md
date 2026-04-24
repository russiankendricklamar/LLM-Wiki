---
title: "Black Hole Thermodynamics"
category: "Physics"
order: 4
lang: "en"
slug: "black-hole-thermodynamics"
growth: "seedling"
---

# Black Hole Thermodynamics

Black holes are not merely regions of spacetime from which nothing escapes — they are thermodynamic objects, obeying laws structurally identical to the four laws of ordinary thermodynamics. This correspondence, initially thought to be a formal analogy, was elevated to a physical identity by Hawking's 1974 discovery that black holes radiate. The temperature and [[gravitational-entropy|entropy]] of a black hole are not metaphors: they govern real physical processes, from the Penrose extraction of rotational energy to the ultimate evaporation of the hole itself.

## The Four Laws of Black Hole Mechanics

Bardeen, Carter, and Hawking (1973) proved four theorems about stationary black holes that mirror classical thermodynamics with uncanny precision:

| Thermodynamics | Black Hole Mechanics |
|---|---|
| **0th**: $T$ uniform in thermal equilibrium | **0th**: Surface gravity $\kappa$ is constant over the horizon of a stationary black hole |
| **1st**: $dE = T\,dS - p\,dV + \ldots$ | **1st**: $dM = \frac{\kappa}{8\pi G}\,dA + \Omega_H\,dJ + \Phi_H\,dQ$ |
| **2nd**: $dS \ge 0$ (total entropy never decreases) | **2nd**: $dA \ge 0$ (horizon area never decreases — Hawking's area theorem) |
| **3rd**: $T = 0$ unreachable in finite steps | **3rd**: $\kappa = 0$ unreachable in finite steps |

The analogy assigns $\kappa \leftrightarrow T$ and $A \leftrightarrow S$. Before Hawking's calculation, the temperature was purely formal. After it, the identification became quantitative.

## Bekenstein-Hawking Entropy

Bekenstein (1972) argued that thermodynamic consistency requires black holes to carry genuine entropy proportional to their horizon area. Swallowing a high-entropy object into a black hole would otherwise decrease the total entropy of the universe — violating the second law. The only candidate quantity that never decreases is the area.

Hawking's calculation fixed the coefficient: the **Bekenstein-Hawking entropy** is

$$
S_\text{BH} = \frac{k_B\, c^3\, A}{4\, G\, \hbar} = \frac{k_B\, A}{4\, \ell_P^2},
\qquad \ell_P = \sqrt{\frac{\hbar G}{c^3}} \approx 1.6 \times 10^{-35}\,\text{m}.
$$

For a Schwarzschild black hole of mass $M$, the Schwarzschild radius is $r_s = 2GM/c^2$ and the area $A = 4\pi r_s^2$, giving

$$
S_\text{BH} = \frac{4\pi k_B G M^2}{\hbar c}.
$$

The entropy scales as $M^2$ — quadratically, not extensively. A solar-mass black hole has $S \sim 10^{77} k_B$, orders of magnitude larger than the entropy of the Sun itself. This is the largest entropy achievable for any object of that mass-energy, placing black holes at the thermodynamic extremes of nature.

## Hawking Temperature

From $dM c^2 = T\,dS$ and the expression for $S_\text{BH}$:

$$
T_H = \frac{\hbar\, c^3}{8\pi\, G\, M\, k_B}.
$$

Black holes are colder when more massive. A solar-mass black hole has $T_H \approx 60\,\text{nK}$ — far below the cosmic microwave background ($2.7\,\text{K}$), so it cannot cool by radiating. A black hole smaller than $\sim 10^{23}$ kg would be hotter than the CMB and actively evaporate.

## Entropy vs Mass Chart

```chart
{
  "type": "line",
  "xAxis": "mass_solar",
  "data": [
    {"mass_solar": 0.001, "entropy_log": 71},
    {"mass_solar": 0.01, "entropy_log": 73},
    {"mass_solar": 0.1, "entropy_log": 75},
    {"mass_solar": 1, "entropy_log": 77},
    {"mass_solar": 10, "entropy_log": 79},
    {"mass_solar": 100, "entropy_log": 81},
    {"mass_solar": 1000, "entropy_log": 83}
  ],
  "lines": [
    {"dataKey": "entropy_log", "stroke": "#14b8a6", "name": "log₁₀(S / k_B)"}
  ]
}
```

## Hawking's Area Theorem (Second Law)

Hawking proved (1971) that under the assumptions of the null energy condition and cosmic censorship, the total area of all black hole horizons is non-decreasing:

$$
\frac{dA}{dt} \ge 0.
$$

This is the gravitational analogue of the second law of thermodynamics. Two merging black holes produce a single hole whose area exceeds the sum of the original areas — confirmed observationally by LIGO (GW150914), where the final Kerr black hole area was verified to exceed the sum of the initial areas.

When quantum effects (Hawking evaporation) are included, $A$ can decrease. The **generalised second law** (Bekenstein) replaces the statement: the total entropy $S_\text{BH} + S_\text{outside matter}$ never decreases, restoring consistency.

## The Penrose Process

Rotating (Kerr) black holes possess an **ergosphere** — a region outside the horizon where the Killing vector $\partial_t$ is spacelike and no observer can remain stationary. Inside the ergosphere, a particle can have negative energy relative to infinity.

The **Penrose process** (1971): a body enters the ergosphere and splits into two fragments; one falls in with negative energy, the other escapes to infinity with energy *exceeding* the original. The black hole loses rotational energy and its spin decreases. The extracted energy is bounded by the reduction in **irreducible mass** $M_\text{irr} = \sqrt{A/(16\pi G^2/c^4)}$, which corresponds to the area theorem: $A$ does not decrease.

The maximum efficiency of energy extraction from a Kerr black hole is

$$
\eta_\text{max} = 1 - \frac{1}{\sqrt{2}} \approx 29\%
$$

for a maximally rotating hole. Astrophysical jets from AGN are likely powered by this mechanism (Blandford-Znajek process).

## The Information Paradox

Hawking radiation is exactly thermal to all orders in the semi-classical expansion: it carries no information about the matter that formed the black hole beyond its total mass, charge, and angular momentum. If the black hole evaporates completely, a pure quantum state appears to have evolved into a mixed thermal state — a violation of unitarity.

This is the **information paradox**. See [[information-paradox]] for the detailed statement, candidate resolutions (complementarity, firewalls, island formula), and the Page curve.

## The Firewall Paradox

The AMPS argument (Almheiri-Marolf-Polchinski-Sully, 2012) sharpened the paradox: unitarity + monogamy of entanglement + the equivalence principle at the horizon are jointly inconsistent. If the late Hawking radiation is maximally entangled with the early radiation (required by unitarity), it cannot also be entangled with modes just inside the horizon (required by smoothness of the infalling vacuum). Cutting the interior entanglement implies high-energy excitations at the horizon — a **firewall** that burns infalling observers.

The firewall paradox forces a choice: give up unitarity, give up locality/equivalence principle at the horizon, or accept firewalls. No consensus resolution exists.

## Connection to Holography

The area law $S \propto A$ rather than $S \propto V$ is the seed of the **holographic principle**: the maximum entropy of any region is bounded by the area of its boundary. Black holes saturate this bound. This motivates [[ads-cft]] (Maldacena, 1997), where the entropy of a bulk black hole is reproduced by the thermal density matrix of a boundary CFT, and the Ryu-Takayanagi formula generalises $S = A/4G$ to arbitrary surfaces.

## Related Topics

- [[general-relativity]] — the classical theory of black holes
- [[hawking-radiation]] — quantum derivation of the black hole temperature
- [[gravitational-entropy]] — holographic entropy bounds and the island formula
- [[ads-cft]] — where black hole thermodynamics is exactly reproduced by a CFT
- [[information-paradox]] — unitarity vs thermal radiation
- [[gravitational-waves-gr|gravitational waves]] — observational tests of the area theorem
