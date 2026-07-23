# Knowledge Base Aggregate for AI Synthesis

## System Instructions
All agents should refer to [[GEMINI.md]] for project-wide standards and research protocols. New research findings are located in the `research/` category with structured metadata.

## Entity: course-math-for-ai
- Title: Mathematics for Deep Learning: The PhD Path
- Category: AI & Math
- Language: en
- Key Concepts: Week 3 — Multivariable calculus, Capstone project, Module 0, Week 5 — Measure theory and Lebesgue integral, Week 10 — Differential geometry, Week 2 — Spectrum, SVD, tensor decompositions, Course map, Week 8 — Stochastic processes, Week 12 — Optimal transport, Mathematics for Deep Learning — a PhD-grade syllabus, Week 11 — Information geometry, Goal:, Week 4 — Optimisation and convexity, Week 6 — Probability theory, Week 9 — Stochastic calculus
- References: brownian-bridge, characteristic-functions, connections-curvature, convex-optimization, convexity, distributions-zoo, entropy-information, exponential-families, f-divergences, feynman-kac, finance/shannon-entropy, fisher-information, geometric-deep-learning, gradient-hessian-jacobian, hilbert-banach-spaces, hodge-theory, lagrange-multipliers, laplacian, lie-groups, linear-programming, linear-spaces-basis, linear-systems-gauss, lln-clt, malliavin-calculus, manifold, manifold-learning, martingale, math/analysis-geometry/information-geometry, math/differential-geometry, math/discrete-markov-chains, math/information-theory, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/sde-numerical-methods, math/sigma-algebra-measurability, maximum-entropy, measure-theory, multivariable-calculus, multivariate-normal, optimal-transport, ornstein-uhlenbeck, poisson-process, ricci-flow, stochastic-differential-equations, symplectic-geometry, taylor-series, tensor-decompositions, transformer-architecture

## Entity: bert
- Title: BERT
- Category: AI Architectures
- Language: en
- Key Concepts: Next Sentence Prediction (NSP):, Pre-training, Overview, Masked Language Modeling (MLM):
- References: llm

## Entity: gpt-architecture
- Title: GPT
- Category: AI Architectures
- Language: en
- Key Concepts: Overview, Mechanism
- References: attention-mechanisms, llm, transformer-architecture

## Entity: lstm-gru
- Title: LSTM and GRU
- Category: AI Architectures
- Language: en
- Key Concepts: LSTM (Long Short-Term Memory):, GRU (Gated Recurrent Unit):, Overview, Gating Mechanisms

## Entity: resnet
- Title: ResNet
- Category: AI Architectures
- Language: en
- Key Concepts: Overview, Mechanism

## Entity: u-net
- Title: U-Net
- Category: AI Architectures
- Language: en
- Key Concepts: Architecture, Overview

## Entity: ai-market-making
- Title: AI Market Making
- Category: AI Finance
- Language: en
- Key Concepts: Avellaneda-Stoikov Model, Action, Huang (2023) — SAC for crypto market making, State, RL Market Making MDP, Inventory risk management, Reward, Key Results, Related Topics, AI Market Making, Limitations, Adverse Selection Detection via ML, Quote Skewing, Gasperov & Kostanjcar (2021) — RL with adversarial training, Overview
- References: attention-mechanisms, deep-rl-execution, optimal-execution, temporal-fusion-transformer
- Backlinks: market-microstructure

## Entity: alpha-factor-research
- Title: Alpha Factor Research
- Category: AI Finance
- Language: en
- Key Concepts: Regime sensitivity, Auto-Encoder Latent Factors, ML-Based Factor Construction, The Factor Model, Turnover vs Alpha Trade-off, Alpha Factor Research, Gu, Kelly & Xiu (2020), IC Decay by Factor Type, Key Results, Related Topics, non-linear, interaction-rich factors, Limitations, Double ML for Fama-French factors (Oprescu et al., 2023), factor zoo problem, Information Ratio
- References: deep-rl-execution, llm-financial-analysis, temporal-fusion-transformer
- Backlinks: double-ml, nlp-financial-analysis, vine-copulas

## Entity: ml-options-pricing
- Title: ML for Options Pricing
- Category: AI Finance
- Language: en
- Key Concepts: No-Arbitrage Constraints as Regularisation, deep hedging, Neural Network Pricing, Horvath et al. (2021) — Rough vol surface fitting, Volatility Surface Interpolation with LSTMs, Data sparsity at wings, Key Results, Related Topics, Limitations, Black-Scholes Baseline, Interpretability, Deep hedging simulation dependency, Overview, Deep Hedging (Buehler et al., 2019), implied volatility surface
- References: black-scholes, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, temporal-fusion-transformer

## Entity: nlp-financial-analysis
- Title: NLP for Financial Analysis
- Category: AI Finance
- Language: en
- Key Concepts: NLP for Financial Analysis, Bot filtering, Market impact of signals, Limitations and Challenges, Survivorship bias, Language and locale, Risk factor changes, Earnings call staging, Loughran-McDonald Dictionary, Sentiment Signal Accuracy by Model, alternative data, FinBERT (Yang et al., 2020), Earnings Call Analysis, Key Results, Related Topics
- References: alpha-factor-research, finance/shannon-entropy, fine-tuning, llm, llm-financial-analysis, rag, temporal-fusion-transformer, transformer-architecture
- Backlinks: financial-entropy

## Entity: fourier-neural-operators
- Title: Fourier Neural Operators
- Category: AI Physics
- Language: en
- Key Concepts: Material Science, Linear Transform (Weighting), Applications, Non-linearity, Visualization: Spectral Filtering, Performance: Speed and Accuracy, The Operator Learning Problem, physics of the continuous operator, Related Topics, Partial Differential Equations (PDEs), Fourier domain, Weather Forecasting, Fluid Dynamics, Why It Matters: Resolution Invariance, Fourier Transform
- References: neural-operators, partial-differential-equations, pinns
- Backlinks: fredholm-theory

## Entity: ai-physics/hamiltonian-nn
- Title: Hamiltonian Neural Networks (HNN)
- Category: AI Physics
- Language: en
- Key Concepts: Energy Conservation:, Mathematical Core, Applications, Auto-Differentiation, The Problem with Black-Box Models, Hamiltonian, Data Efficiency:, Control Systems:, Hamiltonian Neural Networks (HNN), Key Advantages, Phase Space Consistency:, Celestial Mechanics:, How HNNs Work:, Related Topics, Molecular Dynamics:
- References: equivariant-nn, math/variational-calculus, pinns
- Backlinks: ai-theory/spatial/equivariant-gnn, equivariant-nn, kuramoto-model, lagrange-multipliers, neural-odes, neural-operators, pinns, symplectic-geometry

## Entity: 3d-gaussian-splatting
- Title: 3D Gaussian Splatting
- Category: AI Theory
- Language: en
- Key Concepts: Representation, 5. Applications, Editing, Virtual Reality, Visualization: Gaussian Projections, 3D Gaussian Splatting (3DGS), 3. Optimization and Learning, Projection, Sorting, Rendering Speed, Splatting, E-commerce, Opacity ($\alpha$), Related Topics, Spherical Harmonics (SH)
- References: automatic-differentiation, convex-optimization, geometric-deep-learning, manifold-learning, nerf, transformer-architecture
- Backlinks: nerf, neural-radiance-fields-math

## Entity: activation-patching
- Title: Activation Patching
- Category: AI Theory
- Language: en
- Key Concepts: Path patching, Path Patching vs Activation Patching, Correlation ≠ causation., Duplicate Token Heads, The Clean/Corrupted Paradigm, Nonlinearity., patch, Factual Recall Patching, Corrupted input, Related Topics, Indirect Object Identification (IOI), Limitations, Name Mover Heads, Symmetry assumption., Activation Patching
- References: attention-mechanisms, circuit-discovery, mechanistic-interpretability, transformer-architecture
- Backlinks: circuit-discovery, probing-classifiers, superposition

## Entity: ai-theory/adversarial-examples
- Title: Adversarial Examples
- Category: AI Theory
- Language: en
- Key Concepts: Real-world examples:, Carlini–Wagner ($\ell_2$) Attack., LLMs and adversarial robustness., Transferability and feature alignment., Lack of principled theory., Adversarial Examples, Scalability of randomized smoothing., Definition of adversarial example., Limitations and Open Questions, Min-Max Formulation., Key Results and Hypotheses, Standard accuracy–robustness trade-off., Applications and Threats, Robust overfitting., Certification Radius.
- References: convex-optimization, diffusion-models, math/concentration-inequalities, mechanistic-interpretability, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: differential-privacy, metric-spaces

## Entity: attention-mechanisms
- Title: Attention Mechanisms
- Category: AI Theory
- Language: en
- Key Concepts: $\sqrt{d_k}$, B. Grouped-Query Attention (GQA), A. Multi-Query Attention (MQA), 3. Efficient Variants ([[llm]] Optimization), Values ($V$), Keys ($K$), Related Topics, Queries ($Q$), Memory-Bound, FlashAttention, 1. Scaled Dot-Product Attention, Tiling, 4. Hardware Optimization: FlashAttention, 2. Multi-Head Attention (MHA), Recomputation
- References: flash-attention, inference-serving, llm, paged-attention, transformer-architecture
- Backlinks: activation-functions-math, activation-patching, ai-market-making, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-linear-kernel, autoregressive-models, circuit-discovery, code-models, context-length, deepseek-v3-mla-compression, diffusion-models, distributed-training-3d, embedding-models, equivariant-diffusion-models, equivariant-nn, finance/adversarial-stress-testing, finance/bachelier-formula, finance/gnn-finance, finance/transformer-timeseries, fine-tuning, flash-attention, geometry-of-attention, gnn-credit-risk, gpt-architecture, gpu-architecture, graph-neural-networks, hardware-io-attention, induction-heads, inference-serving, kan, kv-cache-compression, language-models/mamba-ssm, linear-algebra, llm, long-context-yarn-longrope, math-reasoning-chains-rl, mechanistic-interpretability, mechanistic-interpretability-sae, meta-learning, mixture-of-depths, mla, model-parallelism, moe-routing, neural-scaling-laws, paged-attention, positional-encodings, probing-classifiers, quantization, quantum-machine-learning-kernels, research/mla-financial-reasoning, rl-trader, rope-scaling, slm, speculative-decoding-medusa, state-space-models, temporal-fusion-transformer, tensors-and-contractions, tokenization, tokenization-bpe-unigram, training-dynamics, transformer-architecture, universal-approximation-theory, vision-transformers, vision-transformers-scaling, vlm

## Entity: automatic-differentiation
- Title: Automatic Differentiation
- Category: AI Theory
- Language: en
- Key Concepts: backpropagation, dual numbers, Automatic differentiation (AD, autodiff), Numerical considerations, Automatic Differentiation, directed acyclic graph (DAG), Implicit differentiation, Two modes: forward and reverse, adjoints, Source-to-source vs tracing, Example: PyTorch, Meta-learning., Applications, an entire row of the Jacobian, Mixed precision.
- References: black-scholes, convex-optimization, finance/monte-carlo-method, inference-serving, neural-scaling-laws, partial-differential-equations, pinns
- Backlinks: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, category-theory-ml, chain-rule-autodiff, convex-analysis, deep-galerkin, differential-equations, gradient-hessian-jacobian, linear-algebra, mcts, multivariable-calculus, neural-odes, partial-differential-equations, pinns, qat, reinforcement-learning, tensors-and-contractions, variational-autoencoders

## Entity: bayesian-deep-learning
- Title: Bayesian Deep Learning
- Category: AI Theory
- Language: en
- Key Concepts: temperature scaling, functional diversity, Mean-field variational inference, Deep Ensembles, Applications and Impact, Epistemic versus Aleatoric Uncertainty, Variational Inference and the ELBO, Active Learning:, Aleatoric uncertainty, Financial Forecasting:, Open Frontiers, Medical Imaging:, epistemic, SGLD and MCMC in Neural Networks, Laplace Approximation
- References: evaluation-llms, gaussian-processes, math/kolmogorov-probability-axioms, mcmc, neural-scaling-laws, statistical-mechanics, variational-autoencoders
- Backlinks: ai-theory/in-context-learning, de-finetti-exchangeability, gaussian-processes

## Entity: causal-inference-do-calculus
- Title: Causal Inference: Do-Calculus & SCM
- Category: AI Theory
- Language: en
- Key Concepts: Identification Strategies, Frontdoor Criterion, do-calculus, Causal Inference: Do-Calculus & SCM, Rule 3 (Insertion/Deletion of actions):, Prediction:, Rule 1 (Insertion/Deletion of observations):, Backdoor Criterion, Related Topics, Causal Effect, Rule 2 (Action/Observation exchange):, Action:, The Rules of Do-Calculus, Structural Causal Models (SCM), What Is It
- References: bayesian-networks, causal-inference-trading, graph-theory, math/m-estimators

## Entity: circuit-discovery
- Title: Circuit Discovery
- Category: AI Theory
- Language: en
- Key Concepts: Sparse autoencoders (SAEs), Negative heads., Step 4: Verification., polysemantic, superposition, The OV and QK Circuits, circuit, circuits, features, Superposition and Polysemanticity, Edge Attribution Patching (EAP), Related Topics, Induction heads, Copy heads., QK circuit
- References: activation-patching, attention-mechanisms, mechanistic-interpretability, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching

## Entity: contrastive-learning
- Title: Contrastive Learning
- Category: AI Theory
- Language: en
- Key Concepts: SimCLR, CLIP and computer vision, SimCLR: Simplicity at Scale, Momentum update rule, Zero-shot classification, Information maximization, Applications and Transfer Gap, Financial time series, Network design, NT-Xent Loss and Information Maximization, Collapse prevention, Memory queue, CLIP, Sentence embeddings, Information-theoretic view
- References: embedding-models, finance/shannon-entropy, fine-tuning, generative-models, neural-scaling-laws, pac-learning, transformer-architecture, variational-autoencoders
- Backlinks: vision-transformers

## Entity: diffusion-models
- Title: Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: iterative denoising, Limitations and Future Directions, straight-line paths, marginal distribution, Theoretical understanding., reverse process, Audio., Reverse process (learned):, reverse [[stochastic-differential-equations|SDE]], Memory of training data., Advantages over DDPM:, Applications, Score, Connection to Stochastic Differential Equations, Flow Matching
- References: attention-mechanisms, fokker-planck-equation, generative-models, manifold-learning, neural-scaling-laws, ornstein-uhlenbeck-process, stochastic-differential-equations, transformer-architecture, variational-autoencoders
- Backlinks: ai-theory/adversarial-examples, energy-based-models, equivariant-diffusion-models, generative-models, laplacian, math/sde-numerical-methods, nonequilibrium-statmech, variational-autoencoders

## Entity: energy-based-models
- Title: Energy-Based Models
- Category: AI Theory
- Language: en
- Key Concepts: RBM, contrastive divergence, Restricted Boltzmann Machines, Contrastive Divergence and Approximation, Connection to [[statistical-mechanics|Statistical Mechanics]], Score Matching: Avoiding the Partition Function, Modern EBMs and Hybrid Modeling, direct, Denoising score matching, MLE and the Partition Function Problem, Joint Energy Modeling (JEM)
- References: convex-optimization, diffusion-models, manifold-learning, statistical-mechanics

## Entity: equivariant-diffusion-models
- Title: Equivariant Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: Sample Efficiency:, reverse [[stochastic-differential-equations|SDE]], Special Euclidean group, Isotropic Gaussian, Position update:, Applications, Geodesic Random Walks:, Molecular Generation:, Advantages:, Advantages and Challenges, Related Topics, Non-compact Groups:, Equivariant Diffusion Models, Riemannian Diffusion:, Euclidean Equivariant Diffusion (E(n)-Diffusion)
- References: ai-theory/spatial/equivariant-gnn, attention-mechanisms, diffusion-models, laplacian, lie-algebras-physics, lie-groups, manifold-learning, stochastic-differential-equations

## Entity: ai-theory/spatial/equivariant-gnn
- Title: Equivariant GNN (E(n)-GNN)
- Category: AI Theory
- Language: en
- Key Concepts: Structural Biology:, Molecular Modeling:, Mathematical Concept, Related Topics, Invariance, Impact and Applications, Equivariant Message Passing, Invariant Messages:, Equivariant Graph Neural Networks (E(n)-GNN), AI for Science, Robotics:, Coordinate Updates:, Equivariance, Why Equivariance?
- References: ai-physics/hamiltonian-nn, math/foundations/group-theory-symmetries, spectral-graph-theory
- Backlinks: equivariant-diffusion-models

## Entity: equivariant-nn
- Title: Equivariant Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Physical consistency:, MACE (2022):, AI:, Crystal property prediction:, $G$-equivariant, Exact symmetry:, Protein structure prediction:, Applications, SEGNN (2021):, SchNet (2017):, $G$-invariant, Drug discovery:, The two sides, Parity subtleties., Non-compact groups.
- References: ai-physics/hamiltonian-nn, attention-mechanisms, group-theory, pinns, qft-basic, scattering-amplitudes, transformer-architecture
- Backlinks: ai-physics/hamiltonian-nn, graph-neural-networks, group-theory, kan, lie-groups, neural-operators, pinns, representation-theory-ml

## Entity: factor-graphs-inference
- Title: Factor Graphs & Sum-Product Algorithm
- Category: AI Theory
- Language: en
- Key Concepts: factor nodes, Message Passing Rules, Variable to Factor Message:, Junction Tree, Beyond Sum-Product: Max-Product, Factor to Variable Message:, Sum-Product Algorithm, DERIVATION: Marginal on a Chain, Factor Graphs & Sum-Product Algorithm, Junction Tree Algorithm, Convergence, Related Topics, Max-Product Algorithm, variable nodes, Mathematical Formulation
- References: bayesian-networks, graph-theory, kalman-filter, variational-inference-math

## Entity: gauge-equivariant-nn
- Title: Gauge Equivariant Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Gauge Equivariant Convolution, Fiber Bundles and Connections, Gauge Equivariant Neural Networks, Mathematical Formulation
- References: manifold-learning

## Entity: gaussian-processes
- Title: Gaussian Processes
- Category: AI Theory
- Language: en
- Key Concepts: Inducing points, Variational inference, Deep kernels, Scientific ML, expectation propagation, Neural Tangent Kernel (NTK), Matérn kernel:, ARD (Automatic Relevance Determination), Applications, Computational Bottlenecks and Sparse Approximations, Gaussian Processes, Marginal Likelihood and Hyperparameter Learning, Uncertainty quantification, Nyström approximation, RBF (squared exponential) kernel:
- References: bayesian-deep-learning, finance/monte-carlo-method, math/kolmogorov-probability-axioms, neural-scaling-laws, pinns, statistical-mechanics
- Backlinks: ai-theory/neural-tangent-kernel, bayesian-deep-learning, bayesian-nonparametrics, hilbert-banach-spaces, multivariate-normal

## Entity: generative-models
- Title: Generative Models
- Category: AI Theory
- Language: en
- Key Concepts: exact density, Generative models, tractability of density, synthesise, reverse process, Prior, variational autoencoder, exact sampling, Energy-Based Models (EBM), sample quality, Applications, Pharma., Generative Adversarial Networks (GAN), GANs, Evaluate density
- References: diffusion-models, finance/monte-carlo-method, flow-matching, generative-scenario-models, hamiltonian-mechanics, llm, neural-odes, schrodinger-equation, sparse-autoencoders
- Backlinks: contrastive-learning, diffusion-models, generative-scenario-models, signature-based-models, variational-autoencoders

## Entity: autoregressive-models
- Title: Generative Models: Autoregressive Math
- Category: AI Theory
- Language: en
- Key Concepts: Masked Convolutions (PixelCNN):, Masked Architectures, Factorization, Causal [[attention-mechanisms|Attention]] (Transformers):
- References: attention-mechanisms

## Entity: flow-matching
- Title: Generative Models: Flow Matching
- Category: AI Theory
- Language: en
- Key Concepts: Conditional Flow Matching, Vector Fields
- Backlinks: generative-models

## Entity: gan-minimax
- Title: Generative Models: GAN Minimax Math
- Category: AI Theory
- Language: en
- Key Concepts: Optimal Discriminator and JSD, Minimax Objective

## Entity: normalizing-flows
- Title: Generative Models: Normalizing Flows
- Category: AI Theory
- Language: en
- Key Concepts: Change of Variables, Flow Composition

## Entity: vae-elbo
- Title: Generative Models: VAEs and ELBO
- Category: AI Theory
- Language: en
- Key Concepts: The ELBO Derivation, Reparameterization Trick
- References: convex-optimization

## Entity: graph-neural-networks
- Title: Graph Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Over-smoothing and Over-squashing, message passing, Equivariant GNNs., Expressiveness., Node classification, Message Passing Neural Networks (MPNN)., pooling, Applications, Particle physics., Scaling to Large Graphs, LazyGNN / pre-computation, Cluster-GCN, Graph Neural Networks (GNN), Message Passing Paradigm (MPNN), Over-smoothing.
- References: attention-mechanisms, copula-models, equivariant-nn, fraud-detection, gnn-credit-risk, neural-odes, spectral-graph-theory, transformer-architecture
- Backlinks: gnn-credit-risk, graph-curvature-oversquashing, graph-theory, laplacian

## Entity: ai-theory/in-context-learning
- Title: In-Context Learning
- Category: AI Theory
- Language: en
- Key Concepts: Definition and Core Mechanism, Copy mechanism, Zero-shot, Few-shot, Attend to next token, task vectors, induction heads, See Also, Task arithmetic, Sensitivity to Prompt Format and Label Permutation, Task Vectors and Representation Engineering, Emergence at Scale and Open Questions, Mechanistic Substrate: Induction Heads, Prompt distillation, Bayesian Interpretation and Posterior Inference
- References: attention-mechanisms, bayesian-deep-learning, chain-of-thought, fine-tuning, mechanistic-interpretability, neural-scaling-laws, prompt-engineering, transformer-architecture
- Backlinks: ai-theory/neural-tangent-kernel, attention-kernel, induction-heads, training-dynamics

## Entity: induction-heads
- Title: Induction Heads
- Category: AI Theory
- Language: en
- Key Concepts: Increases, phase transition, Induction Heads, Searches, Understanding ICL, Query (Q), Related Topics, Identifies, Layer 1: Previous Token Head, mechanistic interpretability, The Two-Layer Mechanism, Model Scaling, Key (K), two layers, Mathematical Formulation
- References: ai-theory/in-context-learning, attention-mechanisms, mechanistic-interpretability, transformer-architecture

## Entity: information-bottleneck-theory
- Title: Information Bottleneck Theory
- Category: AI Theory
- Language: en
- Key Concepts: Information Bottleneck Theory, The Information Bottleneck Objective, Exact Solution and the IB Curve, Fitting Phase, Application to Deep Learning, IB curve, Compression Phase
- References: convex-optimization
- Backlinks: statistical-mechanics-learning

## Entity: ai-theory/knowledge-distillation
- Title: Knowledge Distillation
- Category: AI Theory
- Language: en
- Key Concepts: FitNet (Romero et al., 2015), Self-distillation, Compression ratio:, student network, [[quantization]]-aware distillation, temperature, mode-seeking, Soft targets from teacher, Distillation for large language models, PAC-Bayes theory, KL-regularized SFT:, Temperature selection:, Theoretical analysis: PAC-Bayes bounds, Knowledge distillation (KD), feature-based distillation
- References: attention-mechanisms, evaluation-llms, fine-tuning, manifold-learning, neural-scaling-laws, pac-learning, quantization, transformer-architecture

## Entity: kolmogorov-complexity
- Title: Kolmogorov Complexity
- Category: AI Theory
- Language: en
- Key Concepts: Language identification:, Definition., Financial complexity:, Compressible:, Anomaly detection:, Applications, Mutual information (algorithmic):, Solomonoff's algorithmic probability:, Compression-based AGI:, Related Topics, No finite-sample guarantees., Model selection:, Connection to Shannon [[shannon-entropy|entropy]]., Limitations, Incomputability.
- References: finance/lempel-ziv-complexity, finance/shannon-entropy, pac-learning
- Backlinks: chain-of-thought, math/cantor-diagonal, math/godel-incompleteness, pac-learning

## Entity: learnable-activations
- Title: Learnable Activations and B-splines
- Category: AI Theory
- Language: en
- Key Concepts: Practical considerations, Symbolic regression., Hyperparameter choices., Kernel activation function (KAF)., Scientific tasks., Swish., Regularisation., Initialisation., B-splines: essence, Applications, Grid refinement., Kolmogorov-Arnold Networks (KANs), universal approximation, Local support., Learnable activations
- References: kan, kolmogorov-arnold-theorem, neural-scaling-laws, pinns, sparse-autoencoders, transformer-architecture
- Backlinks: kan, kolmogorov-arnold-theorem

## Entity: quantization-error-math
- Title: Mathematical Error Analysis in Model Quantization
- Category: AI Theory
- Language: en
- Key Concepts: Stochastic Rounding, Uniform Quantization, Error Propagation in Linear Layers, Mathematical Error Analysis in Model [[quantization]]
- References: quantization

## Entity: diffusion-sde-math
- Title: Mathematical Foundations of Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: The Probability Flow ODE, Reverse [[stochastic-differential-equations|SDE]] and Score Matching, Langevin Dynamics Connection, Forward [[stochastic-differential-equations|SDE]], Mathematical Foundations of Diffusion Models, score function
- References: stochastic-differential-equations

## Entity: mechanistic-interpretability
- Title: Mechanistic Interpretability
- Category: AI Theory
- Language: en
- Key Concepts: Mathematical Core, Logit Lens:, Mechanistic Interpretability, Key Methodology, Circuit Analysis:, polysemanticity, Residual Stream:, Superposition Hypothesis:, Activation Patching:, Alignment Verification:, Importance for AI Safety, Sparse Autoencoders (SAE):, Induction Heads:, Related Topics, Model Editing (ROME/MEMIT):
- References: attention-mechanisms, constitutional-ai, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, chain-of-thought, circuit-discovery, constitutional-ai, induction-heads, language-models/safety/rlhf-dpo, llm, math/godel-incompleteness, mixture-of-experts, neural-scaling-laws, pac-learning, probing-classifiers, rlhf, slm, sparse-autoencoders, superposition

## Entity: meta-learning
- Title: Meta-Learning
- Category: AI Theory
- Language: en
- Key Concepts: Algorithm:, Applications and Limitations, Reptile, Formal Setup, Applications:, Alternative Meta-Learners, second-order derivatives, Prototypical Networks, Model-Agnostic Meta-Learning (MAML), Limitations:, Meta-Learning and In-Context Learning, in-context learning (ICL), First-Order MAML (FOMAML):, Matching Networks
- References: attention-mechanisms, chain-of-thought, convex-optimization, llm, neural-scaling-laws, reinforcement-learning, rlhf, transformer-architecture
- Backlinks: prompt-engineering

## Entity: model-based-rl
- Title: Model-Based Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: Related Topics, Model-Free vs Model-Based, MBPO: Model-Based Policy Optimization, Neural Network World Models, Monte Carlo Tree Search (MCTS), DreamerV3, Ensembles., MCTS and AlphaZero, Probabilistic models., The Dyna Architecture, Dreamer / DreamerV3, Dyna, world model, Model-based RL (MBRL), Model-Based Reinforcement Learning
- References: offline-rl, ppo, reinforcement-learning, soft-actor-critic
- Backlinks: offline-rl, ppo, soft-actor-critic

## Entity: neural-odes
- Title: Neural ODEs
- Category: AI Theory
- Language: en
- Key Concepts: ODE-RNN / GRU-ODE-Bayes., Advantages of the continuous formulation, Cost., Continuous normalising flows (CNFs)., Control and reinforcement learning., Adjoint method for [[automatic-differentiation|backpropagation]], adjoint sensitivity method, Latent ODE., Applications, Neural PDEs., Neural Ordinary Differential Equations (Neural ODEs), From ResNet to continuous depth, Physics and scientific models., Computer vision., Time series.
- References: ai-physics/hamiltonian-nn, automatic-differentiation, brownian-motion, hamiltonian-mechanics, pinns
- Backlinks: calculus-of-variations, generative-models, graph-neural-networks, math/ode-stability, neural-sdes-finance, operator-semigroups, reinforcement-learning, state-space-models, variational-autoencoders

## Entity: nerf
- Title: Neural Radiance Fields (NeRF)
- Category: AI Theory
- Language: en
- Key Concepts: Speed, Visualization: The NeRF Ray Casting, A. Positional Encoding, Volume Rendering, B. View-Dependent Effects, Input, Capture, Mip-NeRF, Related Topics, Training, Neural Radiance Fields (NeRF), 3. The NeRF Pipeline, Output, Inference, Neural Radiance Fields (NeRF): Synthesizing 3D from 2D
- References: 3d-gaussian-splatting, manifold-learning, positional-encodings, transformer-architecture
- Backlinks: 3d-gaussian-splatting, neural-radiance-fields-math

## Entity: neural-scaling-laws
- Title: Neural Scaling Laws
- Category: AI Theory
- Language: en
- Key Concepts: Inference-time compute allocation:, Kaplan et al. (2020) scaling laws., Extrapolation uncertainty., Architecture dependence., Quality metrics., Performance prediction:, Inference-time scaling (test-time compute)., Applications, Research prioritisation:, Cost and efficiency improvements., Mathematical Framework, Modality scaling., IsoFLOP curves., Related Topics, Power law mechanistic interpretation.
- References: attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, pac-learning
- Backlinks: ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, automatic-differentiation, bayesian-deep-learning, bitnet, contrastive-learning, curriculum-learning, diffusion-models, gaussian-processes, learnable-activations, llm, meta-learning, mixture-of-experts, pac-learning, positional-encodings, quantization, reasoning-models, rlhf, slm, test-time-scaling, training-dynamics, transformer-architecture

## Entity: ai-theory/neural-tangent-kernel
- Title: Neural Tangent Kernel
- Category: AI Theory
- Language: en
- Key Concepts: PAC-style guarantees, Gradient Flow in Function Space, Motivation: The Infinite-Width Limit, Mean field theory, decays exponentially, Neural Tangent Kernel, at infinite width, this kernel becomes deterministic and constant in time, Finite-Width Corrections and Mean Field Theory, feature learning regime, [[transformer-architecture|transformer]] architectures, Convergence Guarantees and Over-Parameterization, NTK for Transformers and Modern Architectures, Limitations:, Learning rate scaling:, lazy training regime
- References: ai-theory/in-context-learning, attention-mechanisms, automatic-differentiation, convex-optimization, finance/shannon-entropy, gaussian-processes, math/concentration-inequalities, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: neural-radiance-fields-math, ntk, statistical-mechanics-learning

## Entity: offline-rl
- Title: Offline Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: expectile loss, Healthcare., extrapolation errors, Offline RL, Applications, Decision [[transformer-architecture|Transformer]], Related Topics, TD3+BC, IQL, batch RL, Robotics., The Distributional Shift Problem, Finance., Conservative Q-Learning (CQL), Behaviour Cloning Baseline
- References: deep-rl-execution, model-based-rl, reinforcement-learning, soft-actor-critic, transformer-architecture
- Backlinks: model-based-rl, soft-actor-critic

## Entity: pac-learning
- Title: PAC Learning & VC Dimension
- Category: AI Theory
- Language: en
- Key Concepts: Worst-case nature., Sample complexity with VC dimension:, PAC Learning & VC Dimension, Scientific learning:, MDL and Occam's Razor., shattered, Boosting:, Applications, PAC learning definition., Sauer's Lemma., Related Topics, Differential privacy:, Computational complexity., Limitations, Tight bounds for SVMs:
- References: finance/shannon-entropy, kolmogorov-complexity, mechanistic-interpretability, neural-scaling-laws
- Backlinks: ai-theory/adversarial-examples, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, code-models, contrastive-learning, empirical-processes, kolmogorov-complexity, neural-scaling-laws, sparse-autoencoders, statistical-mechanics-learning, vlm

## Entity: probing-classifiers
- Title: Probing Classifiers
- Category: AI Theory
- Language: en
- Key Concepts: Layer-Wise Analysis in BERT, Bias detection., Linear vs Nonlinear Probes, Applications, probes, Probing classifiers, The MDL probe, Related Topics, Probing Classifiers, LEACE (Least-squares Concept Erasure):, Multitask representations., Representation vs computation., probing selectivity, Limitations, Linear probes
- References: activation-patching, attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, sparse-autoencoders

## Entity: ppo
- Title: Proximal Policy Optimization (PPO)
- Category: AI Theory
- Language: en
- Key Concepts: Full PPO Loss, Applications, Motivation: The Policy Update Problem, Continuous control., Generalized Advantage Estimation (GAE), Training Dynamics, PPO-Clip, [[rlhf]] / [[llm]] alignment., Hyperparameters, GAE, The Clipped Surrogate Objective, TRPO, PPO vs TRPO, Proximal Policy Optimization (PPO), Related Topics
- References: finance/shannon-entropy, llm, model-based-rl, reinforcement-learning, rlhf, soft-actor-critic
- Backlinks: model-based-rl, soft-actor-critic

## Entity: rlhf
- Title: RLHF (Reinforcement Learning from Human Feedback)
- Category: AI Theory
- Language: en
- Key Concepts: Constitutional AI: AI Critique Instead of Human Labels, Stage 1: Supervised [[fine-tuning]] (SFT), Stage 3: PPO Optimization, Advantages:, Why RLHF Works: Human Preference as Orthogonal Signal, Open Problems, Why KL Regularization: Preventing Reward Hacking, Reward Model Generalization:, Preference Data Quality:, Disadvantages:, [[dpo]]: Direct Preference Optimization, Alignment Tax: Capability-Alignment Tradeoff, training on human preferences contains information orthogonal to model scale, Multi-Objective Alignment:, alignment tax
- References: chain-of-thought, dpo, finance/shannon-entropy, fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, reinforcement-learning, transformer-architecture
- Backlinks: causal-inference, chain-of-thought, constitutional-ai, dpo, evaluation-llms, f-divergences, fine-tuning, language-models/safety/rlhf-dpo, llm, mechanism-design, meta-learning, orm-prm, ppo, preference-optimization, preference-optimization-variants, prm, prompt-engineering, reasoning-models, reinforcement-learning, soft-actor-critic, synthetic-data-alignment

## Entity: reinforcement-learning
- Title: Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: On-policy, Model-free, Soft Actor-Critic (SAC), target network, Classical Algorithms, Temporal Difference (TD)., Markov property, Language models., Proximal Policy Optimization (PPO, Schulman et al. 2017)., UCB / Thompson sampling, Off-policy, Reinforcement Learning, DQN (Deep Q-Network, Mnih et al. 2015)., explore/exploit, Applications
- References: automatic-differentiation, deep-rl-execution, neural-odes, optimal-execution, rl-trader, rlhf
- Backlinks: agents, constitutional-ai, decision-theory, deep-hedging, deep-rl-execution, fixed-point-theorems, math/discrete-markov-chains, math/optimal-stopping-markov, mdp, meta-learning, model-based-rl, offline-rl, online-learning-regret, path-integral-control, ppo, rlhf, soft-actor-critic, stochastic-control, stochastic-control-partial-info, tool-use

## Entity: bellman-equations
- Title: Reinforcement Learning: Bellman Equations
- Category: AI Theory
- Language: en
- Key Concepts: Bellman Optimality Equation, Bellman Expectation Equation

## Entity: ppo-math
- Title: Reinforcement Learning: PPO Mathematics
- Category: AI Theory
- Language: en
- Key Concepts: Why it works, The Objective Function

## Entity: policy-gradient-theorem
- Title: Reinforcement Learning: Policy Gradient Theorem
- Category: AI Theory
- Language: en
- Key Concepts: REINFORCE, The Theorem

## Entity: q-learning-convergence
- Title: Reinforcement Learning: Q-Learning Convergence
- Category: AI Theory
- Language: en
- Key Concepts: Contraction Mapping and Convergence, The Update Rule

## Entity: sac-math
- Title: Reinforcement Learning: Soft Actor-Critic (SAC)
- Category: AI Theory
- Language: en
- Key Concepts: Maximum [[shannon-entropy|Entropy]] Objective, Soft Bellman Equations
- References: finance/shannon-entropy

## Entity: representation-theory-ml
- Title: Representation Theory for Machine Learning
- Category: AI Theory
- Language: en
- Key Concepts: Group Actions and Equivariance, $SO(3)$ and $SE(3)$ Representations, Representation Theory for Machine Learning, Tensor Products and Clebsch-Gordan Coefficients
- References: equivariant-nn

## Entity: soft-actor-critic
- Title: Soft Actor-Critic (SAC)
- Category: AI Theory
- Language: en
- Key Concepts: Actor Loss, Applications, Sample Efficiency vs PPO, Soft Actor-Critic (SAC), Reparameterization Trick, Maximum [[shannon-entropy|Entropy]] RL, Critic Loss, Automatic Entropy Tuning, SAC vs TD3 vs PPO, Robotics., Twin critics, Energy systems., Related Topics, Architecture: Three Networks, Finance.
- References: finance/shannon-entropy, model-based-rl, offline-rl, ppo, reinforcement-learning, rlhf
- Backlinks: model-based-rl, offline-rl, ppo

## Entity: sparse-autoencoders
- Title: Sparse Autoencoders (SAE)
- Category: AI Theory
- Language: en
- Key Concepts: Training pipeline., Circuit analysis:, L1-penalty SAE., Superposition geometry:, polysemantic, L0 sparsity:, Sparse Autoencoders (SAE), Feature splitting:, Applications, Superposition geometry., monosemantic, Mathematical Framework, Evaluation metrics:, Cross-layer universality:, Related Topics
- References: finance/shannon-entropy, llm, mechanistic-interpretability, pac-learning, transformer-architecture
- Backlinks: circuit-discovery, generative-models, learnable-activations, mechanistic-interpretability, probing-classifiers, superposition, variational-autoencoders

## Entity: state-space-models
- Title: State Space Models (SSM)
- Category: AI Theory
- Language: en
- Key Concepts: Memory, Time series, Language modeling, Mamba: Selective SSM, Control & robotics, polynomial basis projection, Applications, Explicit diagonalization, $\sim 1000\times$ speedup, Time complexity, HiPPO: Long-Range Polynomial Approximation, Mamba-2: Structured State Space Duality, Theoretical understanding, Audio & music, References
- References: attention-mechanisms, kalman-filter, llm, math/spectral-theory-operators, mixture-of-experts, neural-odes, nonlinear-filtering, transformer-architecture
- Backlinks: attention-kernel, context-length

## Entity: superposition
- Title: Superposition & Linear Representation
- Category: AI Theory
- Language: en
- Key Concepts: Superposition and Linear Representation, Visualizing Dimension vs. Features, Uncovering Hidden Capabilities, Implications for AI Safety, Related Topics, Model Steerability, Detecting Deception, more features than it has dimensions, What Is It, Polysemanticity, Superposition, Linear Representation Hypothesis, polysemantic, The Toy Model of Superposition, polytopes
- References: activation-patching, llm, mechanistic-interpretability, sparse-autoencoders

## Entity: transformer-architecture
- Title: Transformer Architecture
- Category: AI Theory
- Language: en
- Key Concepts: Sinusoidal, Transformer Architecture: The Foundation of LLMs, Feed-Forward Network (FFN), 4. The Softmax Bottleneck, 5. Architectural Variants, 2. Normalization: Stability at Scale, RoPE (Rotary Positional Embeddings), Related Topics, Encoder-Decoder (T5), The Bottleneck, 1. The Core Components, Post-Norm, 3. Positional Embeddings: Giving Time to Space, Visualization: The Layer Stack, Pre-Norm
- References: attention-mechanisms, mixture-of-experts, neural-scaling-laws
- Backlinks: 3d-gaussian-splatting, activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-mechanisms, bitnet, chain-of-thought, circuit-discovery, code-models, context-length, contrastive-learning, course-math-for-ai, decision-transformers, deep-hedging, diffusion-models, embedding-models, equivariant-nn, finance/transformer-timeseries, fine-tuning, fraud-detection, gnn-credit-risk, gpt-architecture, graph-neural-networks, induction-heads, inference-serving, kan, kolmogorov-arnold-theorem, language-models/mamba-ssm, learnable-activations, linear-algebra, llm, logistic-regression, lora-peft, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/godel-incompleteness, mechanistic-interpretability, meta-learning, mixture-of-depths, mixture-of-experts, model-parallelism, moe-routing, multi-token-prediction, nerf, neural-radiance-fields-math, news-sentiment-trading, nlp-financial-analysis, offline-rl, portfolio-optimization-ml, positional-encodings, quantization, rlhf, rope-scaling, slm, sparse-autoencoders, state-space-models, temporal-fusion-transformer, tokenization, training-dynamics, universal-approximation-theory, vector-databases, vision-transformers, vlm, volatility-forecasting

## Entity: variational-autoencoders
- Title: Variational Autoencoders (VAE)
- Category: AI Theory
- Language: en
- Key Concepts: Extensions and Applications, Interpretation:, Architecture: Encoder and Decoder, decoder, Closed-Form KL Divergence, β-VAE, Related Articles, encoder, disentangled, The Reparameterization Trick, VQ-VAE, Theoretical Significance, Stable Diffusion, The Evidence Lower Bound (ELBO), discrete
- References: automatic-differentiation, convex-optimization, diffusion-models, generative-models, math/kolmogorov-probability-axioms, neural-odes, sparse-autoencoders, statistical-mechanics
- Backlinks: bayesian-deep-learning, bayesian-inference, change-of-variables, contrastive-learning, convexity, diffusion-models, information-theory-basics, jensens-inequality, manifold, pca, variational-inference

## Entity: vision-transformers
- Title: Vision Transformers (ViT)
- Category: AI Theory
- Language: en
- Key Concepts: "An Image is Worth 16x16 Words.", ViT vs. CNNs, Learnable Embeddings, Data Requirement, Vision Transformers (ViT), Receptive Field, Architecture, Linear Projection, Related Topics, [[transformer-architecture|Transformer]] architecture, Inductive Bias, [CLS] Token, Position Embeddings, What Is It, [[transformer-architecture|Transformer]] Encoder
- References: attention-mechanisms, contrastive-learning, transformer-architecture, vlm

## Entity: about
- Title: About Me
- Category: About Me
- Language: en
- Key Concepts: Event Manager, Ultima Thule, Nyquist, 2024 – 2025, Risk Analyst, Methodologies, Tools, Quantitative Analyst and AI Engineer, Risk Manager, Projects, Principal Economist / Risk Analyst, Expert, Quantum Physics, Principal Economist at the Bank of Russia, 2025 – Present
- References: llm, rag

## Entity: knowledge-graph
- Title: Knowledge Map
- Category: About Me
- Language: en
- Backlinks: graph-theory

## Entity: asymptotic-expansion-integrals
- Title: Asymptotic Analysis of Integrals
- Category: Advanced Analysis
- Language: en
- Key Concepts: Laplace's Method, The Saddle-Point Method (Method of Steepest Descent), Asymptotic Analysis of Integrals, Method of Stationary Phase

## Entity: calculus-of-variations
- Title: Calculus of Variations
- Category: Advanced Analysis
- Language: en
- Key Concepts: Principles of Physics, Related Topics, Neural ODEs, Euler-Lagrange equation, Visualization: The Shortest Path (Geodesic), Regularization, Calculus of Variations, Variation and Modern AI, The Fundamental Problem, Lagrangian, Euler-Lagrange Equation, Geodesics, functionals, Variational Inference (VI), Hamilton's Principle
- References: functional-analysis, lagrangian-mechanics, neural-odes, variational-inference
- Backlinks: deep-ritz-method, fixed-point-theorems

## Entity: fixed-point-theorems
- Title: Fixed Point Theorems
- Category: Advanced Analysis
- Language: en
- Key Concepts: unique, Economics, Game Theory, Solving ODEs, compact, convex set, set-valued functions, Visualization: The Contraction Map, Reinforcement Learning, 1. Banach Contraction Principle (The Engine of Convergence), contraction mapping, Applications, Fixed Point Theorems: The Engines of Existence, 2. Brouwer Fixed Point Theorem (The Engine of Topology), "engines of existence", constructive method
- References: calculus-of-variations, convexity, hilbert-banach-spaces, reinforcement-learning
- Backlinks: proximal-algorithms-admm

## Entity: fredholm-theory
- Title: Fredholm Theory
- Category: Advanced Analysis
- Language: en
- Key Concepts: Spectral Analysis, Kernel Machines, index, Visualization: Kernel Smoothing, integral equations, The Integral Equation, kernel, Fredholm Theory, Related Topics, Fredholm operator, Why It Matters for AI: Neural Operators, Fredholm Alternative, Inverse Problems, Atiyah-Singer Index Theorem, Index and Fredholm Operators
- References: fourier-neural-operators, functional-analysis, partial-differential-equations

## Entity: microlocal-analysis
- Title: Microlocal Analysis
- Category: Advanced Analysis
- Language: en
- Key Concepts: cotangent bundle, Quantum Chaos, where, Hamiltonian trajectories, Visualization: Singularity Propagation, symbol, Related Topics, Wave Front Set, Inverse Problems, Pseudodifferential Operators, Pseudodifferential Operators ($\Psi$DO), Microlocal Analysis, which direction, Propagation of Singularities, phase space
- References: schwartz-distributions, symplectic-geometry

## Entity: proximal-algorithms-admm
- Title: Proximal Algorithms & ADMM
- Category: Advanced Analysis
- Language: en
- Key Concepts: Proximal Gradient Method, DERIVATION: Proximal Operator of the $L_1$ Norm, Alternating Direction Method of Multipliers (ADMM), What Is It, Augmented Lagrangian, ADMM: Alternating Direction Method of Multipliers, Convergence, Proximal Algorithms & ADMM, The Proximal Operator, Related Topics, proximal operator, soft-thresholding
- References: convex-optimization, fixed-point-theorems

## Entity: deep-ritz-method
- Title: The Deep Ritz Method
- Category: Advanced Analysis
- Language: en
- Key Concepts: What Is It, Advantages and High Dimensions, variational principle, Curse of Dimensionality:, Deep Ritz Framework, The Variational Principle, Residual Networks (ResNets), Mesh-free:, Smoothness:, Penalty Method, The Deep Ritz Method, DERIVATION: Ritz Method for the Heat Equation, Related Topics, Handling Boundary Conditions, Architecture: Residual Networks
- References: calculus-of-variations, deep-galerkin, monte-carlo-integration, pinns, sobolev-spaces

## Entity: automata-theory
- Title: Automata Theory & Computability
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Finite Automata, Turing Machines

## Entity: compiler-theory
- Title: Compiler Theory: Lexing and Parsing
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: LR(k) Parsers:, LL(k) Parsers:, Lexical Analysis, Syntax Analysis (Parsing)

## Entity: p-vs-np
- Title: Complexity Theory: P vs NP and Cook-Levin
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Formal Definitions, P vs NP problem, Cook-Levin Theorem

## Entity: cryptography-math
- Title: Cryptography: RSA and Elliptic Curves
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: RSA (Rivest-Shamir-Adleman), Elliptic Curve Cryptography (ECC)

## Entity: distributed-systems-consensus
- Title: Distributed Systems: CAP and Consensus
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Paxos Consensus, CAP Theorem, Partition tolerance:, Availability:, Consistency:

## Entity: pagerank-math
- Title: Graph Algorithms: PageRank Mathematics
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: The PageRank Equation, Random Surfer Model

## Entity: strongly-connected-components
- Title: Graph Algorithms: Strongly Connected Components
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Tarjan's Algorithm, Kosaraju's Algorithm

## Entity: graph-coloring
- Title: Graph Theory: Coloring and Chromatic Number
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Brooks' Theorem:, Bounds and Theorems, Vertex Coloring, Four Color Theorem:, chromatic number

## Entity: max-flow-min-cut
- Title: Graph Theory: Max-Flow Min-Cut Theorem
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Max-Flow Min-Cut Theorem, Ford-Fulkerson Algorithm, The Theorem

## Entity: spectral-clustering
- Title: Machine Learning: Spectral Clustering
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Graph [[spectral-graph-theory|Laplacian]], Spectral Relaxation
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: divergence-theorem
- Title: Divergence Theorem
- Category: Advanced Calculus
- Language: en
- Key Concepts: Mathematical Formulation, Overview

## Entity: greens-theorem
- Title: Green's Theorem
- Category: Advanced Calculus
- Language: en
- Key Concepts: Mathematical Formulation, Overview
- References: stokes-theorem

## Entity: line-integrals
- Title: Line Integrals
- Category: Advanced Calculus
- Language: en
- Key Concepts: Scalar and Vector Fields, Overview

## Entity: stokes-theorem
- Title: Stokes' Theorem
- Category: Advanced Calculus
- Language: en
- Key Concepts: Mathematical Formulation, Overview
- References: maxwells-equations
- Backlinks: greens-theorem

## Entity: surface-integrals
- Title: Surface Integrals
- Category: Advanced Calculus
- Language: en
- Key Concepts: Formulation, Overview

## Entity: fractional-calculus
- Title: Analysis: Fractional Calculus
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Riemann-Liouville Integral, Caputo Derivative

## Entity: calculus-of-variations-jacobi
- Title: Calculus of Variations: Second Variation
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The Second Variation, Jacobi Fields and Conjugate Points

## Entity: instrumental-variables
- Title: Econometrics: Instrumental Variables
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: 2SLS, The IV Estimator, Exogeneity (Exclusion Restriction):, Relevance:

## Entity: sobolev-embeddings
- Title: Functional Analysis: Sobolev Embeddings
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The Spaces, Sobolev Embedding Theorems

## Entity: harmonic-analysis
- Title: Harmonic Analysis: Fourier Convergence
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Fourier Series, Carleson's Theorem:, Convergence Theorems, Pointwise Convergence (Dirichlet/Jordan):, $L^2$ Convergence:
- Backlinks: complex-analysis

## Entity: admm
- Title: Optimization: Alternating Direction Method of Multipliers (ADMM)
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Augmented Lagrangian, ADMM Updates

## Entity: dual-decomposition
- Title: Optimization: Dual Decomposition
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The Lagrangian Relaxation, Primal update (parallelizable):, Dual update (gradient ascent):, Iterative Updates

## Entity: genetic-algorithms-math
- Title: Optimization: Genetic Algorithms Mathematics
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The Schema Theorem

## Entity: interior-point-methods
- Title: Optimization: Interior Point Methods
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Primal-Dual Methods, Barrier Functions

## Entity: simulated-annealing
- Title: Optimization: Simulated Annealing
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Metropolis-Hastings Acceptance, Cooling Schedule

## Entity: bayesian-inference-exact
- Title: Probabilistic Graphical Models: Exact Inference
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Junction Tree Algorithm, Variable Elimination

## Entity: riemannian-geometry
- Title: Riemannian Geometry: Metric and Curvature
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Curvature, Metric Tensor
- References: manifold-learning

## Entity: kalman-filter-advanced
- Title: Signal Processing: Advanced Kalman Filters
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Unscented Kalman Filter (UKF), Extended Kalman Filter (EKF), Unscented Transform

## Entity: compressed-sensing
- Title: Signal Processing: Compressed Sensing
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The Problem, L1 Minimization

## Entity: hidden-markov-models
- Title: Signal Processing: Hidden Markov Models
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The Viterbi Algorithm, Model Parameters
- Backlinks: avellaneda-stoikov, bayesian-black-litterman, conditionally-gaussian-processes, convex-optimization-trading, finance/cointegration, finance/credit-migration, finance/hurst-exponent, finance/lempel-ziv-complexity, finance/multivariate-hmm, finance/particle-filter, finance/phase-space-reconstruction, finance/shannon-entropy, finance/transformer-timeseries, kalman-filter, math/discrete-markov-chains, math/kolmogorov-equations-ctmc, math/martingale-representation, math/sequential-hypothesis-testing, math/stochastic-recursive-sequences, model-free-rl-factors, nonlinear-filtering, numeraire-invariant-hedging, ornstein-uhlenbeck-process, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis

## Entity: wavelet-transform
- Title: Signal Processing: Wavelet Transforms
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Continuous Wavelet Transform (CWT), Discrete Wavelet Transform (DWT)
- Backlinks: convolutional-volatility-resolution-clustering, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/prony-hankel-spectral, finance/realized-kernels, finance/singular-spectral-analysis, finance/spectral-analysis, math/spectral-representation-processes, volatility-modulated-spectral-surface

## Entity: wiener-filter
- Title: Signal Processing: Wiener Filter
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Wiener-Hopf Equation, Orthogonality Principle

## Entity: gmm-estimation
- Title: Statistics: Generalized Method of Moments (GMM)
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The GMM Objective, Moment Conditions

## Entity: arch-garch
- Title: Time Series: ARCH and GARCH Models
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: GARCH(p, q), ARCH(q)

## Entity: cointegration-johansen
- Title: Time Series: Cointegration & Johansen Test
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Johansen Test, Error Correction Model (ECM)

## Entity: differential-forms
- Title: Differential Forms & Exterior Calculus
- Category: Advanced Theory
- Language: en
- Key Concepts: Wedge Product, Exterior Derivative, Generalized Stokes' Theorem, exact, closed
- References: manifold-learning

## Entity: fluid-dynamics
- Title: Fluid Dynamics: Navier-Stokes Foundations
- Category: Advanced Theory
- Language: en
- Key Concepts: Conservation of Mass (Continuity), Momentum Equation

## Entity: functional-analysis
- Title: Functional Analysis: Hilbert Spaces & Operators
- Category: Advanced Theory
- Language: en
- Key Concepts: Riesz Representation Theorem, Spectral Theorem, Hilbert Spaces and Riesz Representation
- Backlinks: calculus-of-variations, complex-analysis, fredholm-theory, hilbert-banach-spaces, math/algebraic-topology, math/differential-geometry, math/differentiation-of-measures, math/harmonic-analysis, math/lp-spaces, math/nonparametric-regression, math/ode-stability, math/spectral-theory-operators, math/topology-basics, spectral-theorem-unbounded

## Entity: galois-theory
- Title: Galois Theory: Fields and Solvability
- Category: Advanced Theory
- Language: en
- Key Concepts: solvable group, Solvability by Radicals, Galois extension, The Fundamental Theorem, Field Extensions and Automorphisms

## Entity: general-relativity
- Title: General Relativity: Einstein Field Equations
- Category: Advanced Theory
- Language: en
- Key Concepts: Schwarzschild Metric, Einstein Field Equations
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, hawking-radiation, information-paradox, lie-algebras-physics, manifold, math/non-euclidean-geometry

## Entity: hamiltonian-mechanics
- Title: Hamiltonian Mechanics & Poisson Brackets
- Category: Advanced Theory
- Language: en
- Key Concepts: Poisson Brackets, The Hamiltonian
- References: quantization
- Backlinks: generative-models, mcmc, neural-odes, noether-theorem, path-integral

## Entity: lagrangian-mechanics
- Title: Lagrangian Mechanics & Euler-Lagrange
- Category: Advanced Theory
- Language: en
- Key Concepts: Euler-Lagrange Equations, The Action Principle
- Backlinks: calculus-of-variations, math/variational-calculus, maxwell-electromagnetism, noether-theorem, path-integral

## Entity: measure-theoretic-probability
- Title: Measure-Theoretic Probability & Martingales
- Category: Advanced Theory
- Language: en
- Key Concepts: martingale, Martingales, Radon-Nikodym Theorem, Probability Spaces

## Entity: special-relativity
- Title: Special Relativity: Minkowski Space and Lorentz Transforms
- Category: Advanced Theory
- Language: en
- Key Concepts: Minkowski space, Lorentz Transformations, Four-Vectors
- References: math/differential-geometry
- Backlinks: dirac-equation, maxwell-electromagnetism

## Entity: a-star-search
- Title: A* Search
- Category: Algorithms
- Language: en
- Key Concepts: Heuristics, Overview

## Entity: dijkstras-algorithm
- Title: Dijkstra's Algorithm
- Category: Algorithms
- Language: en
- Key Concepts: Overview, Mechanism

## Entity: dynamic-programming
- Title: Dynamic Programming Basics
- Category: Algorithms
- Language: en
- Key Concepts: Properties, Overlapping Subproblems:, Overview, Optimal Substructure:

## Entity: alpha-factor-discovery
- Title: Alpha Factor Discovery
- Category: Algorithms and ML
- Language: en
- Key Concepts: [[mcmc]] sampling, IC Decay Profile, Extensions:, Non-stationarity, Deep Feature Learning, IC Information Ratio (ICIR), Alpha Decay Monitoring, Reinforcement Learning, Transaction costs, Survivorship bias, Multiple testing bias, Non-linearity, Practical Applications, Overview & Background, Look-ahead bias
- References: bayesian-black-litterman, finance/alpha-stacking, finance/gan, finance/monte-carlo-method, mcmc
- Backlinks: alpha-orthogonalization, alternative-data-alpha, finance/alpha-stacking, finance/lightgbm-xgboost, finance/meta-labeling, finance/online-learning-mab, finance/shap-interpretability, model-free-rl-factors

## Entity: alpha-orthogonalization
- Title: Alpha Orthogonalization
- Category: Algorithms and ML
- Language: en
- Key Concepts: Market Neutral, The Mathematical Process, Alpha Orthogonalization: Factor Independence, Performance Attribution, Residual, Alpha Orthogonalization, Incremental Information, The Problem: Factor Crowding, Related Topics, decay rate, 2. Risk Neutralization, True Capacity, Visualization: Vector Orthogonalization, Sector Neutral, 1. Residualization
- References: alpha-factor-discovery, finance/factor-attribution, pca
- Backlinks: causal-inference-trading, pca-statarb

## Entity: alternative-data-alpha
- Title: Alternative Data Alpha
- Category: Algorithms and ML
- Language: en
- Key Concepts: Extensions:, Alt-Data Signal Decay Profile, [[gan]]-based augmentation, Signal-to-noise decomposition, Information Decay, NLP + alt-data fusion, Alternative Data Alpha, Practical Applications, Overview & Background, Limitations:, Consumer Sector, Related Topics, Missing data mechanics, Energy, Lead Time
- References: alpha-factor-discovery, finance/alpha-stacking, finance/gan, finance/value-at-risk, mcmc, news-sentiment-trading
- Backlinks: news-sentiment-trading

## Entity: causal-inference-trading
- Title: Causal Inference in Trading
- Category: Algorithms and ML
- Language: en
- Key Concepts: Related Topics, Granger Causality, Alpha Orthogonalization, Backtest Overfitting, Causal Inference, Confounders and Spurious Alphas, Structural Causal Model (SCM), Policy Evaluation, 1. Directed Acyclic Graphs (DAGs), 2. The Do-Calculus (Judea Pearl), Visualization: The Confounder Trap, Tools of the Trade, Natural Experiments, 3. Granger Causality vs. True Causality, Why Citadel uses Causal AI
- References: alpha-orthogonalization, causal-inference, finance/probability-of-backtest-overfitting
- Backlinks: causal-inference-do-calculus

## Entity: finance/cointegration
- Title: Cointegration
- Category: Algorithms and ML
- Language: en
- Key Concepts: Pairs trading and statistical arbitrage., cointegrating rank, Near-integration., Definition., Related Articles, Definition, trace test, Pitfalls, error correction term, stable long-run equilibrium, Step 1., Overfitting in pairs trading., cointegrating vector, Yield curve modelling., Spurious regression (Granger and Newbold, 1974).
- References: arima-models, central-limit-theorem, copula-models, finance/value-at-risk, hidden-markov-models, kalman-filter, math/law-of-large-numbers, math/spectral-theory-operators
- Backlinks: arima-models, pairs-trading

## Entity: convolutional-volatility-resolution-clustering
- Title: Convolutional Volatility Resolution Clustering (CVRC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Extensions:, Adversarial regime generation, Non-stationarity, Data requirements, Graph neural networks, Volatility Surface as an Image, Structural Contagion, Layer 1, Volatility Regime Clusters, volatility resolution clusters, Vol Surface Imputation, Unsupervised, Practical Applications, Overview & Background, Convolutional Feature Extraction
- References: arch-models, finance/gan, finance/spectral-analysis, garch-models, manifold-learning, volatility-forecasting, volatility-modulated-spectral-surface, wavelet-transform

## Entity: deep-galerkin
- Title: Deep Galerkin Method (DGM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Sampling, Autograd, Related Topics, Deep Galerkin Method (DGM) in Finance, Automatic Differentiation, Curse of Dimensionality, How It Works, Optimization, Continuous Solution, Neural Network, High Dimensions, The Core Idea: PDE as a Loss Function, Why Tier-1 Quants Use It, Deep Galerkin Method (DGM), Visualization: The Curse Broken
- References: automatic-differentiation, black-scholes, convex-optimization, neural-sdes-finance, numerical-pde-finance
- Backlinks: deep-ritz-method, schwartz-distributions

## Entity: deep-hedging
- Title: Deep Hedging
- Category: Algorithms and ML
- Language: en
- Key Concepts: Visualization: BS Delta vs. Deep Hedging, Complete Markets, Zero Transaction Costs, Deep Hedging: Reinforcement Learning for Derivatives, Global Optimization, The Deep Hedging Approach, Model-Agnostic, Key Advantages, Related Topics, optimal hedge ratio, Buehler et al. (2019), 2. The Neural Network, 1. The Objective Function, Universal, Continuous Trading
- References: finance/delta-hedging-practice, finance/rough-volatility, reinforcement-learning, transformer-architecture

## Entity: fama-macbeth-regression
- Title: Fama-MacBeth Regression
- Category: Algorithms and ML
- Language: en
- Key Concepts: Background, Parameter Reference, Non-stationarity, Alpha attribution, Small cross-section, Why Fama-MacBeth Standard Errors Work, Practical Applications, errors-in-variables (EIV), Final Estimate, Related Topics, risk premium, Errors-in-Variables Problem, Generated regressors, Pricing factor discovery, Fama-MacBeth regression
- References: black-scholes, finance/hierarchical-risk-parity, mcmc, portfolio-optimization-ml, ts-cs-factor-analysis
- Backlinks: causal-inference, finance/apt-ross, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, ts-cs-factor-analysis

## Entity: finance/gan
- Title: GANs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Cross-asset dependencies, Privacy-preserving analytics, Background, Distributional shift, Parameter Reference, CGAN, Data requirements, Data augmentation, Mathematical Concept: Minimax Game, WGAN, Visualization: Real vs. Synthetic Paths, Evaluation difficulty, Related Topics, Fat tails, The Generator ($G$)
- References: finance/monte-carlo-method, finance/value-at-risk, fraud-detection, heston-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, convolutional-volatility-resolution-clustering, f-divergences, finance/adversarial-stress-testing, fraud-detection, lob-prediction, news-sentiment-trading, portfolio-optimization-ml, timegan, volatility-modulated-spectral-surface

## Entity: finance/gnn-finance
- Title: Graph Neural Networks in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Graph Convolutional Networks (GCN), Implementation, Graph [[attention-mechanisms|Attention]] Networks (GAT), Related Articles, Graph Neural Networks in Finance, Financial Applications, GNNs (Graph Neural Networks)
- References: attention-mechanisms, finance/eigenportfolio-rmt, finance/systemic-contagion-debtrank, finance/transformer-timeseries, fraud-detection

## Entity: finance/hidden-markov-models
- Title: Hidden Markov Models (HMM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Background, M-step, Core Components, Gaussian emissions, The Markov Property, Parameter Reference, Initial Distribution $\pi$, Dynamic asset allocation, Hidden Markov Models (HMM), 1. Evaluation (Forward-Backward Algorithm), Volatility forecasting, 3. Learning (Baum-Welch / EM Algorithm), Risk management, E-step, The Three Fundamental Problems
- References: avellaneda-stoikov, finance/phase-space-reconstruction, finance/shannon-entropy, garch-models, kalman-filter

## Entity: finance/lightgbm-xgboost
- Title: LightGBM and XGBoost for Factor Signals
- Category: Algorithms and ML
- Language: en
- Key Concepts: LightGBM, Gradient Boosting, Implementation, LightGBM and XGBoost for Factor Signals, Temporality, XGBoost, Related Articles, Overfitting Controls, Non-stationarity, Financial Data Challenges, Class imbalance
- References: alpha-factor-discovery, finance/probability-of-backtest-overfitting, finance/shap-interpretability, finance/transformer-timeseries
- Backlinks: finance/shap-interpretability, finance/transformer-timeseries

## Entity: lob-prediction
- Title: Limit Order Book (LOB) Prediction
- Category: Algorithms and ML
- Language: en
- Key Concepts: Background, Extensions, Non-stationarity, Realized volatility, Python: Full LOB Feature Engineering, Depth imbalance at level $k$, Latency, Price pressure, Precision/Recall, natural 2D structure, Colocation dependency, Key Features for LOB Prediction, Related Topics, Weighted Mid-price, F1-Score
- References: finance/gan, finance/market-impact-scaling, finance/value-at-risk, model-free-rl-factors, optimal-execution
- Backlinks: deep-rl-execution, finance/market-impact-scaling, finance/order-flow-imbalance, finance/transformer-timeseries

## Entity: finance/longstaff-schwartz
- Title: Longstaff-Schwartz Method (LSM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Background, LSM Algorithm Steps, Continuation value, The Challenge of American Options, Flexibility, Backward Induction, Regression bias, Intrinsic value, Forward Pass, Related Topics, Dimensionality, Final Pricing, Terminal Value, Stochastic rates/volatility, Simplicity
- References: black-scholes, finance/monte-carlo-method, heston-model, numerical-pde-finance, ornstein-uhlenbeck-process
- Backlinks: convertible-bonds, finance/barrier-asian-options, finance/follmer-schweizer, finance/free-boundary-american, finance/monte-carlo-method, finance/oas, numerical-pde-finance

## Entity: finance/meta-labeling
- Title: Meta-Labeling Framework
- Category: Algorithms and ML
- Language: en
- Key Concepts: Financial Application, Stacking, Earnings Plays, Python: Full Meta-Labeling Pipeline, Arbitrage, side, Trend Following, Primary Model, Addresses Overfitting, Look-ahead bias, Position sizing, Related Topics, Meta-Labeling, Imbalanced classes, Interpretability
- References: alpha-factor-discovery, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/random-matrix-theory
- Backlinks: finance/alpha-stacking, finance/probability-of-backtest-overfitting, model-free-rl-factors, news-sentiment-trading

## Entity: model-free-rl-factors
- Title: Model-Free RL for Factor Portfolios
- Category: Algorithms and ML
- Language: en
- Key Concepts: Action Space, Policy Gradient Methods (PPO/DDPG), PPO (Proximal Policy Optimization), Non-stationarity, Key Design Choices, Differential Sharpe Ratio, Transaction costs, SAC (Soft Actor-Critic), Mathematical Framework, Model-Free Reinforcement Learning (RL), Related Topics, State Space, Challenges and Validation, DDPG (Deep Deterministic Policy Gradient), Python: Dynamic Factor Allocation with Stable Baselines3
- References: alpha-factor-discovery, black-scholes, finance/hierarchical-risk-parity, finance/meta-labeling, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/shannon-entropy, hidden-markov-models, mcmc, rl-trader
- Backlinks: finance/online-learning-mab, finance/probability-of-backtest-overfitting, lob-prediction, portfolio-optimization-ml

## Entity: finance/monte-carlo-method
- Title: Monte Carlo Method
- Category: Algorithms and ML
- Language: en
- Key Concepts: Quasi-Monte Carlo, Average, Monte Carlo Method, Steps in Option Pricing, American options, Flexibility, Greeks computation, Background and History, Core Concept, Quasi-MC, Generate Random Paths, 3. Importance Sampling, Multidimensionality, 4. Stratified Sampling, Related Topics
- References: black-scholes, finance/longstaff-schwartz, finance/particle-filter, finance/quasi-monte-carlo, finance/value-at-risk, inference-serving, mcmc, qft-basic
- Backlinks: alpha-factor-discovery, automatic-differentiation, avellaneda-stoikov, black-scholes, bootstrap, brownian-bridge, convertible-bonds, copula-models, finance/adversarial-stress-testing, finance/barrier-asian-options, finance/black-swan-scenarios, finance/follmer-schweizer, finance/free-boundary-american, finance/gan, finance/hawkes-process, finance/levy-processes, finance/libor-market-model, finance/longstaff-schwartz, finance/market-impact-scaling, finance/meta-labeling, finance/nash-equilibrium, finance/oas, finance/particle-filter, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/sha-256, finance/shor-algorithm, finance/systemic-contagion-debtrank, finance/value-at-risk, finance/xva, fraud-detection, gaussian-processes, generative-models, generative-scenario-models, kelly-criterion, lln-clt, math/sde-numerical-methods, model-free-rl-factors, numerical-pde-finance, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, qft-basic, quantum-amplitude-estimation, risk-neutral-valuation, rl-trader, volatility-forecasting

## Entity: finance/multivariate-hmm
- Title: Multivariate Hidden Markov Models
- Category: Algorithms and ML
- Language: en
- Key Concepts: Multivariate HMM, Implementation, Initial distribution, E-step: Forward-Backward, Forward, Posteriors, Multivariate Hidden Markov Models, Baum-Welch (EM) Algorithm, M-step, Related Articles, Transition matrix, Model Structure, Model Selection, Interpretation, Gaussian emission
- References: copula-models, hidden-markov-models, kalman-filter, regime-switching-factors, volatility-forecasting

## Entity: finance/nash-equilibrium
- Title: Nash Equilibrium
- Category: Algorithms and ML
- Language: en
- Key Concepts: Market Microstructure, Auction Theory, Mean-field games, Market Making as a Game, Best Response, Background and History, Systemic Risk, Mixed Strategy, Algorithmic Trading, Dynamic games, Related Topics, Rationality assumption, Multiple equilibria, Practical Relevance in Finance, Zero-Sum Game
- References: avellaneda-stoikov, finance/adversarial-stress-testing, finance/market-impact-scaling, finance/monte-carlo-method, optimal-execution
- Backlinks: finance/systemic-contagion-debtrank

## Entity: neural-sdes-finance
- Title: Neural SDEs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Visualization: Neural vs. Classical Diffusion, Drift Network, Neural Stochastic Differential Equations (Neural SDEs), Applications, Neural ODEs, continuous-time generative model, Model Discovery, Related Topics, Diffusion Network, Neural SDEs in Finance, Stochastic Re-parameterization, The Adjoint Method, Why Use Neural SDEs?, Generative Market Simulation, Training via Adjoint Sensitivity
- References: finance/rough-volatility, finance/volatility-surface, neural-odes, stochastic-differential-equations
- Backlinks: deep-galerkin, path-dependent-volatility, timegan

## Entity: news-sentiment-trading
- Title: News Sentiment Trading System
- Category: Algorithms and ML
- Language: en
- Key Concepts: Aspect-Based Sentiment, Python: Full Sentiment Pipeline, Regulatory risk, Lexicon-based, Practical Implementation Guide, Relevance Scoring, Latency, Sentiment Dispersion, Sentiment Accuracy, Coverage, Multilingual news, Signal decay model, Related Topics, Event-Driven Hedge Funds, Signal Decay
- References: alternative-data-alpha, finance/gan, finance/meta-labeling, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: alternative-data-alpha, llm-financial-analysis

## Entity: numerical-pde-finance
- Title: Numerical PDE Methods in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Unconditionally stable, Boundary Conditions, Barrier options, Numerical PDE Methods in Finance, Multi-Asset: ADI Methods, spurious oscillations, Implicit (Backward Euler), Penalty method, Applications, Comparison: PDE vs Trees vs Monte Carlo, Finite Difference Schemes, Explicit (Forward Euler), American Options: Free Boundary Problem, American exercise, CFL stability condition
- References: black-scholes, convertible-bonds, finance/longstaff-schwartz, finance/monte-carlo-method, finance/optimal-stopping-american, partial-differential-equations
- Backlinks: black-scholes, deep-galerkin, feynman-kac, finance/longstaff-schwartz, neural-operators, stochastic-control

## Entity: finance/online-learning-mab
- Title: Online Learning and Multi-Armed Bandits
- Category: Algorithms and ML
- Language: en
- Key Concepts: Implementation, Lai-Robbins lower bound, Thompson Sampling, Multi-Armed Bandit (MAB), UCB1 achieves, Related Articles, Online Learning and Multi-Armed Bandits, cumulative regret, Problem and Regret, Exp3 for Adversarial Environments, UCB (Upper Confidence Bound)
- References: alpha-factor-discovery, model-free-rl-factors, rl-trader

## Entity: finance/alpha-stacking
- Title: Orthogonal Alpha Stacking
- Category: Algorithms and ML
- Language: en
- Key Concepts: Dynamic residualization, Extensions:, ICIR-weighted, Non-stationarity, Residualization via Regression, Order dependence in Gram-Schmidt, Factor Neutralization, Signal Correlation Before/After Residualization, Multi-Factor Models, Robust PCA / [[random-matrix-theory]], Orthogonal Alpha Stacking & Residualization, Proprietary Trading, Risk Management, Cross-sectional vs. time-series, Regularization
- References: alpha-factor-discovery, convex-optimization-trading, finance/hierarchical-risk-parity, finance/meta-labeling, finance/random-matrix-theory
- Backlinks: alpha-factor-discovery, alternative-data-alpha, finance/apt-ross, finance/asymptotic-arbitrage-large-markets

## Entity: finance/particle-filter
- Title: Particle Filter (SMC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Distributions, State-Space Formulation, Applications in Finance, Online Parameter Estimation, For each time step $t = 1, 2, \ldots$:, Accuracy, Volatility Estimation, Degeneracy, Risk Management, Algorithm: Bootstrap Particle Filter, Update, Hidden State Tracking, Regime Detection, Normalize, Auxiliary particle filter
- References: finance/monte-carlo-method, heston-model, hidden-markov-models, mcmc, ornstein-uhlenbeck-process
- Backlinks: conditionally-gaussian-processes, finance/heston-model, finance/monte-carlo-method, finance/phase-space-reconstruction, kalman-filter, nonlinear-filtering, pairs-trading

## Entity: fastest-mean-reversion
- Title: Portfolios of Fastest Mean Reversion
- Category: Algorithms and ML
- Language: en
- Key Concepts: The Box-Tiao / Generalized Eigenvalue Approach, smallest generalized eigenvalue, Fastest Mean Reversion, speed of mean reversion, Visualization: Reversion Speed, $L_1$-regularization (LASSO), Sparse Portfolio, The Mathematical Objective, Sparse PCA, Rayleigh Quotient, Sparse Mean-Reverting Portfolios, Related Topics, Portfolios of Fastest Mean Reversion, Ornstein-Uhlenbeck (OU) process
- References: ornstein-uhlenbeck-process, pairs-trading, pca
- Backlinks: pca-statarb

## Entity: finance/probability-of-backtest-overfitting
- Title: Probability of Backtest Overfitting
- Category: Algorithms and ML
- Language: en
- Key Concepts: Walk-forward validation, Non-stationarity, Deflated Sharpe Ratio (DSR), Python: Full PBO Calculation with CSCV, Out-of-Sample (OOS), silent killer, Related Topics, The Deflated Sharpe Ratio, The "Silent Killer" of Quant Funds, The PBO Formula, In-Sample (IS), Selection Bias under Multiple Testing, Dependent strategies, Combinatorially Symmetric Cross-Validation (CSCV), CSCV
- References: finance/meta-labeling, finance/monte-carlo-method, finance/value-at-risk, model-free-rl-factors
- Backlinks: bayesian-black-litterman, causal-inference-trading, convex-optimization-trading, finance/lightgbm-xgboost, finance/meta-labeling, finance/shap-interpretability, model-free-rl-factors, numeraire-invariant-hedging, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, timegan, ts-cs-factor-analysis

## Entity: finance/quasi-monte-carlo
- Title: Quasi-Monte Carlo Methods
- Category: Algorithms and ML
- Language: en
- Key Concepts: Low-discrepancy sequences, The Koksma-Hlawka inequality, Related Articles, variation of $f$ in the sense of Hardy and Krause, Calibration., Quasi-Monte Carlo Methods, Koksma-Hlawka inequality, low-discrepancy sequences, Scrambled (randomized) QMC, Sobol' sequence., Applications in finance, Scrambled QMC and error estimation, effective dimension, effective dimension in the superposition sense, Risk aggregation.
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, kalman-filter, math/law-of-large-numbers
- Backlinks: finance/monte-carlo-method

## Entity: finance/random-matrix-theory
- Title: Random Matrix Theory (RMT)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Parameter Reference, Non-stationarity, Oracle Shrinkage, Risk factor discovery, The Problem of Noisy Correlations, Portfolio optimization, Step 3 — Reconstruct:, condition number, Non-Gaussian returns, Practical Applications, Eigenvector noise, Wigner semicircle, Mathematical Framework, Large-$N$ limit, Related Topics
- References: finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/value-at-risk, math/spectral-theory-operators, quantum-entanglement
- Backlinks: convex-optimization-trading, cross-impact, eigenvalues-eigenvectors, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/meta-labeling, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, nonlinear-shrinkage, portfolio-optimization-ml, quantum-entanglement, regime-switching-factors

## Entity: regime-switching-factors
- Title: Regime-Switching Factor Strategies
- Category: Algorithms and ML
- Language: en
- Key Concepts: smoothed probability, Background, Parameter Reference, Non-Gaussian emissions, Macro timing, Regime-Switching Factor Strategies, Risk management, Practical Applications, Regime Persistence and Steady-State, Options market making, Identifiability, filtered probability, Related Topics, Filtering and Smoothing, Continuous-time extensions
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc
- Backlinks: finance/multivariate-hmm, hmm-particle-filters, rl-trader

## Entity: rl-trader
- Title: Reinforcement Learning (RL) Trader
- Category: Algorithms and ML
- Language: en
- Key Concepts: Background, Reward Functions, Reinforcement Learning (RL) Trader, Learning Curve Visualization, Parameter Reference, Non-stationarity, Offline RL, Reward shaping, Practical Applications, Transition, Reward, Multi-agent RL (MARL), Proximal Policy Optimization (PPO), Related Topics, Key Properties
- References: attention-mechanisms, finance/monte-carlo-method, finance/value-at-risk, mcmc, optimal-execution, regime-switching-factors
- Backlinks: deep-rl-execution, finance/online-learning-mab, model-free-rl-factors, reinforcement-learning

## Entity: finance/sha-256
- Title: SHA-256 (Secure Hash Algorithm)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Bitcoin proof-of-work, Background, Second pre-image resistance, Parameter Reference, Compression Function, SHA-256, HMAC Construction, Digital signatures, SHA-256 (Secure Hash Algorithm), Length extension attacks, Hardware acceleration, Davies-Meyer, Practical Applications, Quantum threat (partial), SHA-256 Avalanche Effect
- References: finance/lempel-ziv-complexity, finance/monte-carlo-method, finance/shannon-entropy, finance/shor-algorithm, mcmc
- Backlinks: finance/shor-algorithm

## Entity: finance/shap-interpretability
- Title: SHAP and ML Model Interpretability
- Category: Algorithms and ML
- Language: en
- Key Concepts: Properties, SHAP and ML Model Interpretability, Efficiency, TreeSHAP, SHAP vs LIME vs Permutation Importance, Related Articles, Null player, Financial Use Cases, SHAP (SHapley Additive exPlanations), Shapley Values, Symmetry
- References: alpha-factor-discovery, finance/lightgbm-xgboost, finance/probability-of-backtest-overfitting, fraud-detection
- Backlinks: finance/lightgbm-xgboost

## Entity: finance/shannon-entropy
- Title: Shannon Entropy in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Transfer Entropy, Market Efficiency via Entropy, differential entropy, Parameter Reference, Non-stationarity, Entropy Over Market Regimes, Topological entropy, Binning sensitivity, Maximality, Sample Entropy (SampEn), Practical Applications, maximum entropy, Shannon Entropy in Finance, Relative Entropy (KL Divergence), Related Topics
- References: finance/lempel-ziv-complexity, finance/random-matrix-theory, hidden-markov-models, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ai-theory/neural-tangent-kernel, change-of-variables, contrastive-learning, course-math-for-ai, decision-theory, deep-rl-execution, dirichlet-forms, distributions-zoo, dpo, embedding-models, empirical-processes, entropy-information, entropy-pooling, ergodic-theory, ergodic-theory-markov, f-divergences, finance/coherent-risk-measures, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hidden-markov-models, finance/lempel-ziv-complexity, finance/levy-esscher-continuous, finance/quasi-monte-carlo, finance/sha-256, finance/shor-algorithm, finance/upper-lower-hedging-prices, finance/zeta-field, financial-entropy, free-probability, hydrodynamic-limits, information-geometry-finance, information-theory-basics, jensen-inequality, jensens-inequality, kolmogorov-complexity, language-models/safety/rlhf-dpo, laplacian, logistic-regression, martingale, math/bayesian-asymptotics, math/concentration-inequalities, math/ergodic-theorems-birkhoff, math/gaussian-process-sample-paths, math/harmonic-analysis, math/information-theory, math/interacting-particle-systems, math/large-deviations-cramer, math/m-estimators, math/sigma-algebra-measurability, maximum-entropy, maximum-entropy-irl, mle, model-free-rl-factors, multi-token-prediction, multivariate-normal, mutual-information-divergence, naive-bayes, neural-scaling-laws, nlp-financial-analysis, online-learning-regret, pac-learning, path-integral-control, ppo, probability-distributions, probing-classifiers, quantum-entanglement, quantum-information-entropy, ricci-flow, risk-neutral-valuation, rlhf, sac-math, slm, small-ball-probabilities, soft-actor-critic, sparse-autoencoders, statistical-mechanics, training-dynamics, volatility-modulated-spectral-surface

## Entity: finance/shor-algorithm
- Title: Shor's Algorithm
- Category: Algorithms and ML
- Language: en
- Key Concepts: Background, Parameter Reference, Fault tolerance gap, Post-quantum cryptography (PQC), Blockchain quantum risk, Practical Applications, RSA Key Size vs. Required Logical Qubits, Elliptic curve extension, Shor's Algorithm, Mathematical Framework, Long-term data security, Related Topics, Harvest Now, Decrypt Later (HNDL), Timeline uncertainty, Key Properties
- References: finance/monte-carlo-method, finance/sha-256, finance/shannon-entropy, finance/spectral-analysis, mcmc
- Backlinks: finance/fft, finance/sha-256

## Entity: pca-statarb
- Title: StatArb with PCA (Avellaneda-Lee)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Statistical Arbitrage, Related Topics, synthetic market factors, Visualization: The S-Score, The Residual ($\tilde{R}_i$), The PCA Approach, Statistical Arbitrage with PCA (Avellaneda-Lee), Principal Component Analysis (PCA), Factor Regression, Short, Buy, Beta-neutral and Sector-neutral, The Signal (S-score), The Problem with Pairs, Extract Factors
- References: alpha-orthogonalization, fastest-mean-reversion, ornstein-uhlenbeck-process, pairs-trading, pca

## Entity: ts-cs-factor-analysis
- Title: TS vs CS Factor Analysis
- Category: Algorithms and ML
- Language: en
- Key Concepts: Estimation risk in betas, errors-in-variables (EIV) bias, Testing, Background, Assumption, Smart beta product design, Cross-Sectional (CS) Regression, Factor Spanning Tests, Parameter Reference, Characteristic vs. covariance, EIV bias, Primary output, Weak identification, Time-Series (TS) regression, Time-Series (TS) Regression
- References: black-scholes, fama-macbeth-regression, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: fama-macbeth-regression, finance/factor-attribution

## Entity: timegan
- Title: TimeGAN: Generating Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: Data Augmentation, The Flaw of Standard GANs, Embedder (Encoder), Why Quants Use It, Privacy, there is only one history, Adversarial Loss, Related Topics, Recovery (Decoder), Supervised Loss (The Key), TimeGAN: Generating Synthetic Financial Data, Reconstruction Loss, TimeGAN, Generator, temporal dynamics
- References: finance/gan, finance/probability-of-backtest-overfitting, neural-sdes-finance

## Entity: finance/transformer-timeseries
- Title: Transformers for Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: Implementation, Self-[[attention-mechanisms|Attention]] Mechanism, Transformers, Variable Selection, Informer (Zhou et al. 2021), Positional encoding, Temporal Self-[[attention-mechanisms|Attention]], Related Articles, Transformers for Time Series, Gradient clipping, Key Architectures, Gate Residual Networks, Normalization, Lookback, Temporal Fusion [[transformer-architecture|Transformer]] (TFT, Lim et al. 2021)
- References: attention-mechanisms, finance/lightgbm-xgboost, hidden-markov-models, kalman-filter, lob-prediction, transformer-architecture
- Backlinks: finance/gnn-finance, finance/lightgbm-xgboost

## Entity: vine-copulas
- Title: Vine Copulas for StatArb
- Category: Algorithms and ML
- Language: en
- Key Concepts: Vine Copulas, Vine Copulas for Statistical Arbitrage, The Trade, Fit the Vine, Sklar's Theorem, Application: Statistical Arbitrage, The Vine Structure, bivariate (2D) pair-copulas, Visualization: Bivariate Building Blocks, What is a Vine Copula?, Why it Beats Linear Models, Related Topics, Conditional Probability (The Signal), The Flaw of Multivariate Normal, Copulas
- References: alpha-factor-research, copula-models, pairs-trading

## Entity: clifford-algebras
- Title: Clifford Algebras & Geometric Algebra
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Clifford Algebras & Geometric Algebra, Rotors and Spinors, Definition, Multivectors, Applications in Physics

## Entity: complex-manifolds
- Title: Complex and Kähler Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: String Theory Connection, 3. Kähler Manifolds, Mirror Symmetry, must form a Calabi-Yau 3-fold, Complex manifold, $J^2 = -I$, Local Potential, 2. Hermitian Metrics, Kähler Manifold, 5. Mirror Symmetry, Symplectic manifold, Nijenhuis Tensor, Complex Manifold, Related Topics, Visualization: The Intersection of Geometries
- References: hodge-theory, manifold-learning, spectral-graph-theory, symplectic-geometry, tensor-calculus
- Backlinks: manifold, ricci-flow

## Entity: connections-curvature
- Title: Connections and Covariant Derivatives
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Poincaré Conjecture, Physical Implication: Energy Conservation, Algebraic Bianchi Identity, Affine Connection, Levi-Civita Connection, Differential (Second) Bianchi Identity, 3. The Riemann Curvature Tensor ($R^\rho_{\sigma\mu\nu}$), 5. Geometric Flow: The Ricci Flow, Metric-compatible, 2. Holonomy: The Geometric Signature of Curvature, Einstein Tensor, Weyl Tensor ($C_{\rho\sigma\mu\nu}$), Ricci Curvature ($R_{\mu\nu}$), Related Topics, 4. Decomposing Curvature: Ricci vs. Weyl
- References: gauge-theory-yang-mills, manifold-learning, ricci-flow, tensor-calculus
- Backlinks: course-math-for-ai, geometric-deep-learning, hodge-theory, ricci-flow, symplectic-geometry, tensor-calculus

## Entity: delay-differential-equations
- Title: Delay Differential Equations in Neural Systems
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hopf bifurcation, Delay-Induced Bifurcations, Delay Differential Equations in Neural Systems, Linear Stability Analysis, Mathematical Formulation

## Entity: geometric-deep-learning
- Title: Geometric Deep Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Gauge Equivariant CNNs, GNNs, Gauge Equivariance, Pooling / Coarsening, 5. Applications at the PhD Level, Visualization: Symmetry Hierarchy, Deep Sets, CNNs, Groups (Homogeneous Spaces), 1. The Core Principles: Invariance and Equivariance, The Solution, 3. Gauge Equivariant CNNs (Geodesic CNNs), Linear Propagation, Geometric Deep Learning: The Erlangen Program for ML, Related Topics
- References: connections-curvature, lie-groups-algebras, manifold-learning, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, course-math-for-ai, graph-curvature-oversquashing, lie-groups-algebras, tensor-calculus

## Entity: graph-curvature-oversquashing
- Title: Graph Curvature & Over-squashing
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Graph Curvature & Over-squashing, Stochastic Discrete Ricci Flow (SDRF), Negative curvature, Over-squashing, What Is It, Ollivier-Ricci curvature, Graph Rewiring (SDRF), Ollivier-Ricci Curvature, Over-squashing and Sensitivity, Spectral Gap and Cheeger Constant, MATHEMATICAL DERIVATION: ORC on a Triangle, Ricci curvature, Related Topics, Positive curvature
- References: geometric-deep-learning, graph-neural-networks, math/spectral-theory-operators, optimal-transport, ricci-flow, spectral-graph-theory

## Entity: hodge-theory
- Title: Hodge Theory and Harmonic Forms
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hodge Theory, 5. Applications, A. Electromagnetism, 4. The Hodge Decomposition Theorem, Harmonic, one unique harmonic form, 3. The Laplace-de Rham Operator, exact, Related Topics, Harmonic form, The Isomorphism, $k$-th De Rham Cohomology Group, Hodge Star Operator, Betti Number, Hodge Theory: Bridging Topology and Differential Equations
- References: connections-curvature, manifold-learning, spectral-graph-theory, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, homological-algebra, tensor-calculus

## Entity: information-geometry-nn
- Title: Information Geometry of Neural Networks
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Curvature and Flat Minima, Natural [[convex-optimization|Gradient Descent]], Fisher Information Metric, Information Geometry of Neural Networks
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: lie-algebras-physics
- Title: Lie Algebras in Physics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Electromagnetism, Gauge Theories and Connections, strangeness, Adjoint Representation, Strong Force (QCD), 1. Angular Momentum and $\mathfrak{su}(2)$, 2. Particle Physics and $\mathfrak{su}(3)$, Heisenberg Uncertainty Principle, Generators and Observables, The Adjoint Representation and Force Carriers, Lie Algebras, Visualization: Spin Multiplets, Lie Algebras in Physics, Related Topics, Lie-algebra valued 1-forms
- References: general-relativity, lie-groups
- Backlinks: equivariant-diffusion-models

## Entity: lie-groups
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: tangent space at the identity, [[manifold-learning|Manifold]] Optimization, Basic Definitions, Representations and Root Systems, Lie bracket, Lie Groups in Modern AI, Visualization: Group vs. Algebra, continuous symmetries, Related Topics, Examples:, Lie Groups and Lie Algebras, Equivariant Neural Networks, Pose Estimation, 1. Lie Group ($G$), exponential map
- References: equivariant-nn, manifold-learning, math/differential-geometry
- Backlinks: course-math-for-ai, equivariant-diffusion-models, lie-algebras-physics, random-walks-groups

## Entity: lie-groups-algebras
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: $SO(n)$ (Special Orthogonal), Baker-Campbell-Hausdorff (BCH) Formula, 4. Adjoint Representation ($Ad$), $SE(3)$ (Special Euclidean), Spherical CNNs, CNNs, Lie Algebra, Smooth [[manifold-learning|Manifold]], infinitesimal rotation, Visualization: Group vs. Algebra, Related Topics, Lie Bracket, 2. The Exponential Map, Equivariant Neural Networks, $SU(n)$ (Special Unary)
- References: gauge-theory-yang-mills, geometric-deep-learning, manifold-learning, tensor-calculus
- Backlinks: geometric-deep-learning

## Entity: manifold-learning
- Title: Manifold Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Visualization: Euclidean vs. Geodesic, Manifold Learning, geodesic distances, Key Algorithms, Laplace-Beltrami operator, Applications, Manifold Hypothesis, Spectral Graph Theory, Single-cell RNA Sequencing, Related Topics, UMAP, Anomaly Detection, 1. Isomap (Isometric Mapping), 3. [[spectral-graph-theory|Laplacian]] Eigenmaps, Mathematical Engine: The Beltrami Operator
- References: math/analysis-geometry/information-geometry, math/differential-geometry, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, ai-theory/knowledge-distillation, category-theory-ml, complex-manifolds, connections-curvature, convolutional-volatility-resolution-clustering, course-math-for-ai, differential-forms, diffusion-models, energy-based-models, equivariant-diffusion-models, ergodic-theory-sgd, f-divergences, finance/asymptotic-expansion-finance, fisher-information, gauge-equivariant-nn, geometric-deep-learning, geometric-mechanics-lie-groups, geometry-loss-landscapes, geometry-of-attention, hodge-theory, implicit-function-theorem, information-geometry-finance, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lie-groups, lie-groups-algebra, lie-groups-algebras, linear-algebra, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/non-euclidean-geometry, math/ode-stability, math/stratonovich-integral, maximum-entropy, metric-spaces, mle, model-merging-procrustes, morse-theory, multimodal-alignment-clip, nerf, neural-operators-fno, neural-radiance-fields-math, nonlinear-filtering, normalization-layers-math, optimal-transport-gromov-wasserstein, pca, pinns-convergence, regularization-implicit-bias, ricci-flow, riemannian-geometry, semimartingales-on-manifolds, stochastic-calculus-manifolds, stochastic-manifolds, symplectic-geometry, symplectic-hamiltonian-nn, tensor-calculus

## Entity: neural-radiance-fields-math
- Title: Mathematical Foundations of NeRF
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Volume Rendering Equation, accumulated transmittance, [[gaussian-splatting|Gaussian Splatting]]:, Signed Distance Function (SDF), positional encoding, volume rendering equation, Plenoxels / Instant NGP:, inverse problem, volume rendering, Related Topics, Neural Radiance Fields (NeRF), NeuS / VolSDF:, differential geometry, [[manifold-learning|Manifold Learning]]:, Mip-NeRF:
- References: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, calculus-integration, manifold-learning, nerf, transformer-architecture

## Entity: mean-field-games
- Title: Mean Field Games
- Category: Analysis & Geometry
- Language: en
- Key Concepts: The MFG System, Fokker-Planck (Kolmogorov forward) equation, Hamilton-Jacobi-Bellman (HJB) equation, Variational Structure, Mean Field Games, Mathematical Formulation
- Backlinks: hydrodynamic-limits, mechanism-design, stochastic-games

## Entity: optimal-transport
- Title: Optimal Transport & Wasserstein Metrics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Applications, Introduction, Entropic Regularization and Sinkhorn Divergence, Kantorovich Relaxation, Optimal Transport & Wasserstein Metrics
- Backlinks: convex-analysis, course-math-for-ai, graph-curvature-oversquashing, linear-programming, martingale-optimal-transport, math/analysis-geometry/information-geometry, metric-spaces, radon-nikodym

## Entity: ricci-flow
- Title: Ricci Flow and Geometric Evolution
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Poincaré Conjecture, Geometrization Conjecture, Short-time Existence, Neck-pinch, Manifold Learning, 2. Singularities and Surgery, Visualization: The Smoothing Process, Proof Strategy, 5. Applications in Computer Vision and AI, Perelman's Breakthrough, Related Topics, Ricci Curvature Tensor, Ricci Flow, Intuition, 1. The Evolution Equation
- References: complex-manifolds, connections-curvature, finance/shannon-entropy, manifold-learning
- Backlinks: connections-curvature, course-math-for-ai, differential-equations, graph-curvature-oversquashing, stochastic-manifolds

## Entity: spectral-graph-theory
- Title: Spectral Graph Theory
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Spectral Graph Theory, Cheeger's Inequality, Graph Laplacian, Expander Graphs
- References: math/spectral-theory-operators
- Backlinks: ai-theory/spatial/equivariant-gnn, algebraic-geometry-slt, algebraic-topology-persistent, complex-manifolds, differential-galois-theory, ergodic-theory-markov, feller-processes, finance/fractional-fokker-planck, fourier-transform, geometric-deep-learning, gnn-credit-risk, gnn-weisfeiler-lehman, graph-curvature-oversquashing, graph-neural-networks, graph-theory, higher-category-theory-ai, hodge-theory, laplacian, linear-algebra, manifold-learning, map-estimation, math/spdes, math/spectral-theory-operators, non-commutative-geometry, number-theory-l-functions, operator-semigroups, schwartz-distributions, spectral-clustering, spectral-theorem-unbounded, stable-processes, string-theory-calabi-yau, tensor-calculus, topos-neural-networks

## Entity: neural-ode-stability
- Title: Stability Theory for Neural ODEs
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Stability Theory for Neural ODEs, Adjoint Method and Backward Stability, Lyapunov Stability, Lipschitz Constants and Uniqueness, Mathematical Formulation
- References: math/spectral-theory-operators

## Entity: symplectic-geometry
- Title: Symplectic Geometry
- Category: Analysis & Geometry
- Language: en
- Key Concepts: 1. The Symplectic Form ($\omega$), Noether's Theorem, Darboux's Theorem, A. Symplectomorphisms, Hamiltonian Mechanics, Area, Hamiltonian, even-dimensional, Visualization: The Area Preserving Flow, Machine Learning, Closed, 3. Poisson Brackets, Poisson Bracket, Symplectic Integrators, Non-degenerate
- References: ai-physics/hamiltonian-nn, connections-curvature, manifold-learning, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, manifold, microlocal-analysis

## Entity: tensor-calculus
- Title: Tensor Calculus on Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: 2. Exterior Algebra and Differential Forms, 3. The Metric Tensor and the Levi-Civita Symbol, Hodge Dual, Geometric Deep Learning, Killing's Equation, Smooth [[manifold-learning|Manifold]], Tensor Calculus: Invariant Descriptions of Curvature and Flow, Related Topics, Levi-Civita Symbol ($\epsilon_{\mu\nu\rho\sigma}$), A. General Relativity, Property, Lie Derivative, Wedge Product ($\wedge$), B. Fluid Dynamics (Navier-Stokes on Manifolds), 5. Advanced Applications
- References: connections-curvature, geometric-deep-learning, hodge-theory, manifold-learning, spectral-graph-theory
- Backlinks: complex-manifolds, connections-curvature, hodge-theory, lie-groups-algebras, linear-spaces-basis, symplectic-geometry

## Entity: geometry-of-attention
- Title: The Geometry of Attention Mechanisms
- Category: Analysis & Geometry
- Language: en
- Key Concepts: The Geometry of [[attention-mechanisms|Attention]] Mechanisms, Lipschitz Continuity and Stability, Softmax as a Kernel Smoother, Information Geometry of Softmax
- References: attention-mechanisms, manifold-learning, math/spectral-theory-operators

## Entity: tda-mapper-algorithm
- Title: The Mapper Algorithm in TDA
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Higher-dimensional simplices ($k$-simplices), Nerve, The Nerve Complex, Algorithm Parameters and Functoriality, Vertices (0-simplices), Edges (1-simplices), The Mapper Algorithm in TDA, filter function, Mathematical Formulation

## Entity: math/branching-processes
- Title: Branching Processes
- Category: Applied Probability
- Language: en
- Key Concepts: Critical, Extensions, Related Articles, The martingale $W_n$, 3. Epidemic modelling., mean offspring number, Applications, Examples, 1. Binary splitting., Multi-type branching., 4. Viral content propagation., Extinction probability, iteration relation, 2. Nuclear chain reactions., 2. Geometric offspring.
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/renewal-theory, math/wiener-hopf-factorization
- Backlinks: math/percolation, math/point-processes, math/random-graphs, math/renewal-theory, math/subordinators, math/wiener-hopf-factorization

## Entity: clt
- Title: Central Limit Theorem (CLT)
- Category: Applied Probability
- Language: en
- Key Concepts: 2. When Does it Fail? (Lindeberg-Feller), Related Topics, 4. Role in Modern Systems, always Gaussian, Normal Distribution, Deep Learning, 3. Rate of Convergence: Berry–Esseen Theorem, 1. The Classical CLT (Lindeberg–Lévy), Central Limit Theorem (CLT): The Law of Cosmic Order, Lindeberg Condition, Lévy Distribution, Finance, The Miracle, Standard Deviation, Visualization: Convergence to Gaussian
- References: finance/levy-processes, frtb-es, mle
- Backlinks: characteristic-functions, mgf-characteristic-functions

## Entity: change-of-variables
- Title: Change of Variables
- Category: Applied Probability
- Language: en
- Key Concepts: B. Log-Normal Distribution, Scaling Factor, Intuition, A. The Box-Muller Transform, 1. The 1D Case, [[gradient-hessian-jacobian|Jacobian Matrix]], 3. Key Applications, Normalizing Flows, Change of Variables: The Geometry of Probability, Log-Normal, C. Differential [[shannon-entropy|Entropy]], Related Topics, Generative AI, Mutual Information, 2. The Multivariate Case (The Jacobian)
- References: black-scholes, finance/shannon-entropy, gradient-hessian-jacobian, mle, variational-autoencoders

## Entity: characteristic-functions
- Title: Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: Fast Fourier Transform (FFT), [[fourier-transform|Fourier Transform]], A. Uniqueness (Lévy's Inversion Theorem), 1. Definition, Universal Existence, C. Moment Generation, B. Sums of Variables, Related Topics, B. Infinite Divisibility, Carr-Madan method, Variance Gamma, 4. Application in Quantitative Finance, [[central-limit-theorem|Central Limit Theorem]], Characteristic Functions: The Fourier View of Probability, always exists
- References: central-limit-theorem, clt, finance/levy-processes, fourier-transform, merton-jump-diffusion, mgf
- Backlinks: copulas, course-math-for-ai, extreme-value-theory, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/contiguity-measures, math/convergence-semimartingales, math/glivenko-cantelli, math/infinitely-divisible-distributions, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/product-measures-fubini, math/renewal-theory, math/stable-convergence, math/stationary-wide-spectral, math/stein-method, math/triangular-arrays-processes, math/u-statistics, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, wiener-chaos

## Entity: math/concentration-inequalities
- Title: Concentration Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: Exponential in $n$, Theorem (McDiarmid, 1989)., distribution-free, Chebyshev's inequality., McDiarmid's bounded differences inequality, Related Articles, exponential bounds, Moment generating function method, Markov's inequality., tails, independence, Theorem (Hoeffding)., shape, adaptive sampling, sub-Gaussian
- References: central-limit-theorem, characteristic-functions, empirical-processes, finance/shannon-entropy, martingale-clt, math/large-deviations-cramer, math/law-of-large-numbers
- Backlinks: ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, distributions-zoo, extreme-value-theory, fundamental-inequalities, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/markov-chain-mixing, math/minimax-estimation, math/multiple-testing, math/percolation, math/random-graphs, math/stein-method, random-matrices

## Entity: convergence-types
- Title: Convergence of Random Variables
- Category: Applied Probability
- Language: en
- Key Concepts: Related Topics, Relationship Map, false, Generalization, 2. Convergence in Probability (p), 3. Convergence in Mean ($L^p$), 4. Convergence in Distribution (d), Visualization: Convergence Speed, Consistency, The Hierarchy of Convergence, 1. Convergence Almost Surely (a.s.), Strong Law of Large Numbers, Weak Law of Large Numbers, Why It Matters for AI, Stability
- References: central-limit-theorem, math/law-of-large-numbers

## Entity: copulas
- Title: Copulas and Dependence
- Category: Applied Probability
- Language: en
- Key Concepts: Related Topics, unique, Types of Copulas, Visualization: Tail Dependence, Sklar's Theorem, zero tail dependence, asymmetric tail dependence, Tail Dependence, 1. Gaussian Copula, 3. Archimedean Copulas (Clayton, Gumbel, Frank), Copulas and Dependence Structures, 2. Student's t-Copula, linear, Why Not Just Use Correlation?, isolate the dependency structure
- References: characteristic-functions, extreme-value-theory, statistical-mechanics
- Backlinks: correlation-association, joint-distributions

## Entity: math/coupling-methods
- Title: Coupling Methods
- Category: Applied Probability
- Language: en
- Key Concepts: Strassen's theorem, Applications, Optimal Coupling and Strassen's Theorem, [[weak-convergence-prokhorov|Weak Convergence]] and [[de-finetti-exchangeability|Exchangeability]], Monotone Coupling and Stochastic Ordering, Central Limit Theorem Proofs, Definition of Coupling, Grand coupling, coupling, Coupling Methods, maximal coupling strategy, Markov Chain Coupling and Mixing Time Bounds, coupling inequality, perfect simulation, Perfect Simulation
- References: central-limit-theorem, de-finetti-exchangeability, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/weak-convergence-prokhorov
- Backlinks: math/geometric-ergodicity, math/interacting-particle-systems, math/markov-chain-mixing, math/percolation

## Entity: cramer-rao-bound
- Title: Cramer-Rao Lower Bound
- Category: Applied Probability
- Language: en
- Key Concepts: 2. The Inequality, Fisher Information, Efficient Estimator, Cramer-Rao Lower Bound (CRLB), Score Function, MLE, 1. Fisher Information, 4. Importance in Estimation Theory, UMVUE, 3. General Form (Biased Estimators), Related Topics, Efficiency, Statistical Efficiency
- References: estimator-properties, fisher-information, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information, math/bayesian-asymptotics, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, mle, mle-estimation, sufficient-statistics, umvue-completeness

## Entity: delta-method
- Title: Delta Method
- Category: Applied Probability
- Language: en
- Key Concepts: MLE Functions, 3. Applications, Multivariate Delta Method, 2. Derivation Idea, 1. Formal Statement, Standard Errors, Related Topics, Delta Method
- References: lln-clt, mle-estimation, statistical-inference
- Backlinks: slutsky-theorem, umvue-completeness

## Entity: entropy-information
- Title: Entropy and Information Gain
- Category: Applied Probability
- Language: en
- Key Concepts: any kind of dependency, High [[shannon-entropy|Entropy]], 4. Information Gain (IG), Visualization: Entropy vs. Probability, [[shannon-entropy|Entropy]] and Information Gain, Low Entropy, 3. Mutual Information ($I$), highest Information Gain, Related Topics, 1. Shannon [[shannon-entropy|Entropy]] ($H$), 2. Conditional Entropy $H(Y \mid X)$
- References: finance/shannon-entropy, maximum-entropy
- Backlinks: course-math-for-ai

## Entity: ergodic-theory
- Title: Ergodic Theory & Mixing
- Category: Applied Probability
- Language: en
- Key Concepts: Ergodicity, Ergodic Theory & Mixing, Measure-Preserving Dynamical Systems, Birkhoff's Ergodic Theorem, Mixing and [[shannon-entropy|Entropy]]
- References: finance/shannon-entropy
- Backlinks: stochastic-processes

## Entity: ergodic-theory-markov
- Title: Ergodic Theory of Markov Chains
- Category: Applied Probability
- Language: en
- Key Concepts: aperiodic, detailed balance, The Ergodic Theorem for Markov Chains, Unique Equilibrium, Applications, Mixing Time, Stationary Distribution ($\pi$), Convergence, irreducible, PageRank, Related Topics, Ergodic Theory of Markov Chains, Reversibility and Detailed Balance, Metropolis-Hastings, Bayesian Inference
- References: finance/shannon-entropy, math/information-theory, spectral-graph-theory
- Backlinks: mdp

## Entity: de-finetti-exchangeability
- Title: Exchangeability and de Finetti's Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: Chinese Restaurant Process, infinite, hierarchical Bayesian models, Random partition theory:, empirical measure, Bayesian Interpretation, Scaling limits:, Statement:, Exchangeability, Connections and Applications, Finite Exchangeability, Pólya urn, every Bayesian model, Partial exchangeability, Diaconis–Freedman theorem
- References: bayesian-deep-learning, math/law-of-large-numbers, mcmc
- Backlinks: math/coupling-methods, math/random-graphs, math/stein-method

## Entity: extreme-value-theory
- Title: Extreme Value Theory
- Category: Applied Probability
- Language: en
- Key Concepts: extremal types theorem, $\xi > 0$ (Fréchet), fluctuations, Climate and Weather, Fréchet Domain (Type II), regular variation, Pickands-Balkema-de Haan theorem, $F$ is in the Fréchet domain if and only if its tail is regularly varying with some index $\alpha > 0$, Gumbel Domain (Type I), Environmental Engineering, Applications and Relevance, centering and scaling sequences, Value-at-Risk, $\xi < 0$ (Weibull), Conditional Value-at-Risk
- References: characteristic-functions, finance/coherent-risk-measures, math/concentration-inequalities, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/large-deviations-cramer, math/stable-convergence
- Backlinks: copulas, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/bipower-variation, finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/repo-market-systemic, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, frtb-es, generative-scenario-models, math/lundberg-cramer-ruin, order-statistics, stable-processes

## Entity: free-probability
- Title: Free Probability
- Category: Applied Probability
- Language: en
- Key Concepts: R-transform, independence, Wigner Semicircle Distribution, Signal Propagation, The R-Transform, The Free Central Limit Theorem, free convolution, Weight Initialization, freeness, freely independent, Applications in Deep Learning, Related Topics, Optimization, Visualization: Free vs. Classical Convolution, Free Probability
- References: finance/shannon-entropy, math/information-theory, random-matrices

## Entity: math/geometric-ergodicity
- Title: Geometric Ergodicity
- Category: Applied Probability
- Language: en
- Key Concepts: Subgeometric rates and polynomial ergodicity, Meyn–Tweedie Theorem, geometrically ergodic, Convergence diagnostics, Sample size planning, Burn-in estimation, Geometric Ergodicity, uniformly geometrically ergodic, Central Limit Theorem (CLT), [[markov-chain-mixing|Mixing time]], Construction of Lyapunov functions, Diagnostics, The Foster–Lyapunov drift condition, Gibbs samplers and conditional models, Connections to related concepts
- References: math/coupling-methods, math/discrete-markov-chains, math/large-deviations-cramer, math/markov-chain-mixing, math/stochastic-recursive-sequences
- Backlinks: math/ode-stability

## Entity: hmm
- Title: Hidden Markov Models (HMM)
- Category: Applied Probability
- Language: en
- Key Concepts: Baum-Welch Algorithm, C. The Learning Problem (Baum-Welch), A. The Evaluation Problem (Forward-Backward), Observations ($X_t$), Forward Algorithm, Hidden Markov Models (HMM), 1. The Model Structure, hidden, Related Topics, In Finance, 2. The Three Fundamental Problems, 3. Beyond Discrete States: Particle Filters, Viterbi Algorithm, Visualization: HMM State Transition, [[hmm-particle-filters|Particle Filters]]
- References: hmm-particle-filters, mle
- Backlinks: bayesian-networks, em-algorithm, multivariate-normal

## Entity: hydrodynamic-limits
- Title: Hydrodynamic Limits
- Category: Applied Probability
- Language: en
- Key Concepts: The Scaling Idea, [[shannon-entropy|Entropy]] Method (Guo-Papanicolaou-Varadhan), macroscopic world, The Empirical Measure, AI and Neural Mean Fields, diffusion coefficient, empirical density, Related Topics, Statistical Mechanics, [[shannon-entropy|Entropy]] Method and Large Deviations, Space Scaling, Traffic and Crowd Flow, Time Scaling, microscopic world, Macroscopic Fluctuation Theory (MFT)
- References: finance/shannon-entropy, math/interacting-particle-systems, mean-field-games, partial-differential-equations

## Entity: likelihood-ratio-tests
- Title: Hypothesis Testing II: Likelihood Ratio Tests
- Category: Applied Probability
- Language: en
- Key Concepts: Neyman-Pearson Lemma, Related Topics, 3. Power of the Test, Most Powerful, Power, 1. The Likelihood Ratio, Hypothesis Testing II: Likelihood Ratio Tests, Wald Test, Score Test (Lagrange Multiplier), 2. Wilks' Theorem, 4. Relation to Other Tests
- References: fisher-information, mle-estimation, statistical-inference
- Backlinks: rank-tests

## Entity: math/information-theory
- Title: Information Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Source Coding Theorem:, 3. Kullback-Leibler (KL) Divergence, 2. Mutual Information $I(X;Y)$, Fundamental Theorems, Information Bottleneck:, Core Concepts, Related Topics, Channel Capacity Theorem:, Information Theory, 1. Shannon [[shannon-entropy|Entropy]] $H(X)$, ELBO (Variational Inference):, Data Processing Inequality:, Cross-[[shannon-entropy|Entropy]] Loss:, Applications in AI
- References: finance/shannon-entropy, fisher-information, variational-inference
- Backlinks: convex-optimization, course-math-for-ai, ergodic-theory-markov, free-probability, math/harmonic-analysis, maximum-entropy, online-learning-regret, probabilistic-combinatorics, random-matrices, universal-portfolios, wiener-chaos

## Entity: math/interacting-particle-systems
- Title: Interacting Particle Systems
- Category: Applied Probability
- Language: en
- Key Concepts: Fokker–Planck equation, Hydrodynamic Limit, Major Model Classes, phase transition, Comparison coupling, Configuration Space and State Representation, Finite-time mean-field theory, symmetric exclusion process (SEP), Neural Mean Field, Applications, Propagation of chaos, Traffic Flow, local interactions produce collective behavior, Open Problems, Path coupling
- References: convex-optimization, finance/shannon-entropy, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/percolation, stochastic-differential-equations
- Backlinks: hydrodynamic-limits, math/spdes

## Entity: law-iterated-logarithm
- Title: Law of Iterated Logarithm
- Category: Applied Probability
- Language: en
- Key Concepts: LLN, Law of Iterated Logarithm (LIL), [[brownian-motion|Brownian Motion]], CLT, 2. Interpretation, Related Topics, 1. Formal Statement, LIL, 3. Role in Stochastic Processes
- References: brownian-motion, lln-clt, stochastic-processes
- Backlinks: math/borel-cantelli-zero-one, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers

## Entity: mcmc
- Title: MCMC (Markov Chain Monte Carlo)
- Category: Applied Probability
- Language: en
- Key Concepts: Derivative Pricing, Acceptance Ratio, Uncertainty, Stationary Distribution, Mixing, PyMC, MCMC: Markov Chain Monte Carlo, Related Topics, A. Metropolis-Hastings, Stan, Bayesian Neural Networks, 4. Why it Matters for AI and Finance, B. Gibbs Sampling, Bayesian Hierarchical Models, 2. Key Algorithms
- References: bayesian-inference, hamiltonian-mechanics, hmm-particle-filters, lsv-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, ar-models, arch-models, arima-models, arma-models, bayesian-black-litterman, bayesian-deep-learning, bayesian-inference, brownian-motion, causal-inference, convex-optimization-trading, cornish-fisher-cvar, de-finetti-exchangeability, fama-macbeth-regression, finance/fractional-fokker-planck, finance/monte-carlo-method, finance/particle-filter, finance/sha-256, finance/shor-algorithm, fraud-detection, hmm-particle-filters, kalman-filter, model-free-rl-factors, monte-carlo-integration, news-sentiment-trading, numeraire-invariant-hedging, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, regime-switching-factors, rl-trader, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis, variational-inference, volatility-forecasting

## Entity: mdp
- Title: Markov Decision Processes (MDP)
- Category: Applied Probability
- Language: en
- Key Concepts: Visualization: Value Discounting, $\mathcal{A}$, Reinforcement Learning, Bellman Optimality Equation, Solving MDPs, The Bellman Equations, Related Topics, $P(s' \mid s, a)$, Policy Iteration, Action-Value Function $Q^\pi(s, a)$, $\mathcal{S}$, Policy, optimal policy, Markov Property, Policies and Value Functions
- References: ergodic-theory-markov, reinforcement-learning, stochastic-control
- Backlinks: mcts, multi-armed-bandits

## Entity: markov-chebyshev
- Title: Markov and Chebyshev Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: Chebyshev's Inequality, B. PAC Learning and AI Safety, Visualization: The Tail Bounds, The Power of the Bound, non-negative, Concentration inequalities, Markov and Chebyshev Inequalities: Bounding the Unknown, Usage, Markov's Inequality, Probably Approximately Correct (PAC), 2. Chebyshev's Inequality (The Second Moment Bound), Related Topics, Weak Law of Large Numbers (WLLN), Intuition, A. Proving the Law of Large Numbers
- References: central-limit-theorem, frtb-es, measure-theory

## Entity: mgf
- Title: Moment Generating Functions (MGF)
- Category: Applied Probability
- Language: en
- Key Concepts: 4. Application in Finance: Portfolio Tail Risk, Why it's useful, 1. Definition, Visualization: MGF of a Gaussian, product, B. Sums of Independent Variables, Cramér's Bound, 2. The Power of MGFs, C. Uniqueness, Related Topics, A. Generating Moments, 3. Relationship to Other Transforms, [[central-limit-theorem|Central Limit Theorem]], always exists, Moment Generating Functions (MGF)
- References: central-limit-theorem, fourier-transform, math/large-deviations-cramer
- Backlinks: characteristic-functions

## Entity: mgf-characteristic-functions
- Title: Moment Generating Functions (MGFs) and Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: Properties, Independent Sums, 3. Applications, Uniqueness Theorem, Inversion Formula, Linear Transformation, Summation of Distributions, 2. Characteristic Functions, Limit Theorems, always exists, Moment Generation, Related Topics, Moment Generating Functions (MGFs) and Characteristic Functions, Symmetry, 1. Moment Generating Functions (MGF)
- References: clt, fourier-transform, probability-distributions

## Entity: monte-carlo-integration
- Title: Monte Carlo Integration
- Category: Applied Probability
- Language: en
- Key Concepts: importance weight, Importance Sampling, Law of Large Numbers, Monte Carlo Integration and Importance Sampling, Visualization: Convergence Rate, Rejection Sampling, high-dimensional spaces, The Core Concept, Related Topics, Central Limit Theorem
- References: math/law-of-large-numbers, mcmc, variational-inference
- Backlinks: bootstrap-jackknife, deep-ritz-method, mcts

## Entity: multivariate-normal
- Title: Multivariate Normal Distribution
- Category: Applied Probability
- Language: en
- Key Concepts: 4. Conditional distribution, Theorem (Cramér-Wold)., Gaussian processes., Consequences, Gaussian graphical model, 6. [[shannon-entropy|Entropy]], ELBO, 8. The multivariate CLT, Sampling., 1. Definition, Fact., conditional covariance does not depend on $\mathbf{x}_2$, Schur complement, Theorem (Lauritzen)., 11. Correlation visualisation
- References: f-divergences, finance/shannon-entropy, fisher-information, gaussian-processes, hmm, pca
- Backlinks: course-math-for-ai, distributions-zoo, joint-distributions

## Entity: rank-tests
- Title: Non-parametric Statistics: Rank Tests
- Category: Applied Probability
- Language: en
- Key Concepts: Advantages, Limitations, 4. Advantages and Limitations, Hypothesis, Statistic, Asymptotic Property, Non-parametric Statistics: Rank Tests, 2. Mann-Whitney U Test (Wilcoxon Rank-Sum), 3. Kruskal-Wallis Test, ranks, 1. Wilcoxon Signed-Rank Test, Procedure, Related Topics
- References: bootstrap-jackknife, likelihood-ratio-tests, statistical-inference
- Backlinks: order-statistics

## Entity: order-statistics
- Title: Order Statistics
- Category: Applied Probability
- Language: en
- Key Concepts: 4. Applications, Minimum $X_{(1)}$, Non-parametric Inference, Extreme Value Theory, Maximum $X_{(n)}$, Order Statistics, 2. Distribution of the $i$-th Order Statistic, Reliability, Distribution of Min and Max, 3. Joint Distribution, Related Topics, 1. Definition
- References: extreme-value-theory, probability-distributions, rank-tests

## Entity: math/percolation
- Title: Percolation
- Category: Applied Probability
- Language: en
- Key Concepts: Connections to the Ising model and random cluster model, phase transition, RSW theorem, Schramm–Loewner Evolution with parameter $\kappa = 6$, BK inequality, Multifractal properties:, connectivity, Critical probability and phase transitions, Scaling limits and SLE$_6$, subcritical, same critical exponents, Definition:, critical, conformally invariant, strictly increasing
- References: math/branching-processes, math/concentration-inequalities, math/coupling-methods, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/random-graphs
- Backlinks: math/interacting-particle-systems, probabilistic-combinatorics

## Entity: map-estimation
- Title: Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference
- Category: Applied Probability
- Language: en
- Key Concepts: Gaussian Prior, 4. Bayesian Credible Intervals, 2. MAP Derivation, Likelihood, 1. Bayesian Framework, [[spectral-graph-theory|Laplacian]] Prior, Prior, 3. Relation to MLE and Regularization, Posterior, Credible Intervals, Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference, Related Topics
- References: bayes-theorem, linear-regression-ols, mle-estimation, spectral-graph-theory, statistical-inference
- Backlinks: mle-estimation

## Entity: mle-estimation
- Title: Point Estimation: Maximum Likelihood Estimation (MLE)
- Category: Applied Probability
- Language: en
- Key Concepts: Likelihood Function, 3. Example: Gaussian Mean, Point Estimation: Maximum Likelihood Estimation (MLE), Asymptotic Normality, Log-Likelihood, Invariance, 2. Properties of MLE, 1. Formal Derivation, Consistency, Related Topics, Efficiency
- References: cramer-rao-bound, fisher-information, map-estimation, statistical-inference
- Backlinks: cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, map-estimation, sufficient-statistics

## Entity: probabilistic-combinatorics
- Title: Probabilistic Combinatorics
- Category: Applied Probability
- Language: en
- Key Concepts: Applications in Computer Science, Giant Component, Paul Erdős, Connectivity, threshold, must exist, Probabilistic Combinatorics, Randomized Algorithms, The Lovász Local Lemma (LLL), Visualization: The Giant Component Transition, Error-Correcting Codes, Ramsey Numbers and Bounds, Related Topics, Threshold Phenomena in Random Graphs, The Probabilistic Method
- References: math/information-theory, math/percolation, math/random-graphs

## Entity: distributions-zoo
- Title: Probability Distributions Zoo
- Category: Applied Probability
- Language: en
- Key Concepts: Stable distributions, Heavy tails:, Stable, Probability Distributions Zoo, Multinomial / Categorical, 4. Relationship graph, MGF., PMF., Chi-squared $\chi^2_k$, Multivariate normal $\mathcal{N}_d(\boldsymbol\mu, \Sigma)$, Cauchy, 3. Heavy-tailed vs light-tailed, Limit., Shapes., Memorylessness.
- References: bayesian-inference, central-limit-theorem, exponential-families, finance/shannon-entropy, math/concentration-inequalities, maximum-entropy, multivariate-normal, poisson-process
- Backlinks: course-math-for-ai, poisson-process

## Entity: estimator-properties
- Title: Properties of Estimators: Bias, Variance, and MSE
- Category: Applied Probability
- Language: en
- Key Concepts: 2. The Bias-Variance Tradeoff, 1. Definitions, Mean Squared Error (MSE), Variance, Related Topics, Properties of Estimators: Bias, Variance, and MSE, consistent, unbiased, 3. Consistency, Interpretation, Bias
- References: cramer-rao-bound, linear-regression-ols, mle-estimation, statistical-inference, sufficient-statistics
- Backlinks: bootstrap-jackknife, cramer-rao-bound, sufficient-statistics

## Entity: queuing-theory
- Title: Queuing Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Average time in system ($W$), Utilization ($\rho$), A (Arrival process), A / S / c / K, Visualization: Queue Length vs. Utilization, Service Rate, Related Topics, Average number in system ($L$), [[inference-serving|GPU]] Scheduling, S (Service time distribution), Kendall's Notation, The M/M/1 Queue, Applications in AI/CS, Network Congestion, Queuing Theory
- References: inference-serving, math/markov-chain-mixing, poisson-process

## Entity: math/random-graphs
- Title: Random Graphs
- Category: Applied Probability
- Language: en
- Key Concepts: The Erdős–Rényi Models, Supercritical regime, Connectivity and Percolation Thresholds, Critical window, Subcritical regime, Applications, Stochastic Block Model, Degree Distribution and Chromatic Number, Random Graphs, second moment method, random $d$-regular graph, Random Regular Graphs and Local Limits, local limit, threshold phenomenon, Threshold Phenomena and the Phase Transition
- References: central-limit-theorem, de-finetti-exchangeability, math/branching-processes, math/concentration-inequalities, math/large-deviations-cramer, math/poisson-approximation
- Backlinks: math/high-dimensional-statistics, math/percolation, probabilistic-combinatorics

## Entity: random-matrices
- Title: Random Matrix Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Sparse and structured matrices, Universality and Altland-Zirnbauer Classification, Tracy-Widom distribution, Gaussian Unitary Ensemble (GUE), Ledoit-Wolf shrinkage, Marchenko-Pastur Law, Gaussian Orthogonal and Unitary Ensembles, free convolution, Gaussian Orthogonal Ensemble (GOE), Stieltjes Transform and Self-Consistent Equations, Applications in Statistics and Machine Learning, free central limit theorem, Current Research Directions, Free Probability, GOE
- References: empirical-processes, math/concentration-inequalities, math/high-dimensional-statistics, math/information-theory, math/lp-spaces, math/minimax-estimation, math/spectral-theory-operators
- Backlinks: free-probability

## Entity: random-walks-groups
- Title: Random Walks on Groups
- Category: Applied Probability
- Language: en
- Key Concepts: Applications in AI and Science, Probability Theory, Key Questions and Concepts, Geometric Deep Learning, Algebra, Visualization: Return Probabilities, Mixing Time, Related Topics, Poisson Boundary, 2. Convergence to Uniform (Mixing), Polya's Theorem, Card Shuffling, 1. Recurrence vs. Transience, Cryptography, Geometry
- References: lie-groups, math/discrete-markov-chains, math/markov-chain-mixing, math/spectral-theory-operators

## Entity: math/renewal-theory
- Title: Renewal Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Laplace transform methods, Related Articles, excess life, stationary, The renewal process, 5. Reliability theory., Applications, Renewal reward theorem, Renewal Theory, Example., Overshoot, undershoot, and the inspection paradox, equilibrium, delayed, renewal measure, Key renewal theorem (Smith).
- References: characteristic-functions, math/branching-processes, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/wiener-hopf-factorization
- Backlinks: math/branching-processes, math/markov-chain-mixing, math/point-processes, math/poisson-approximation, math/random-walks, math/subordinators, math/wiener-hopf-factorization, poisson-process

## Entity: bootstrap-jackknife
- Title: Resampling Methods: Bootstrap & Jackknife
- Category: Applied Probability
- Language: en
- Key Concepts: Variance Estimation, Main Use, 2. The Bootstrap, Method, 1. The Jackknife, Limitation, The Bootstrap Principle, Computations, with replacement, 3. Comparison, Procedure, Related Topics, Resampling Methods: Bootstrap & Jackknife
- References: estimator-properties, monte-carlo-integration, statistical-inference
- Backlinks: rank-tests

## Entity: sle
- Title: Schramm-Loewner Evolution (SLE)
- Category: Applied Probability
- Language: en
- Key Concepts: $\kappa = 8$, 4. Connection to 2D Quantum Gravity, Driving Function, $\kappa = 3$, Famous Values:, $g_t(z)$, 3. The Kappa Parameter ($\kappa$) and Universality Classes, Conformal Invariance, Space-filling, Oded Schramm, Loewner Equation, Related Topics, $\kappa = 2$, 1. The Physical Motivation: Critical Interfaces, Liouville Quantum Gravity
- References: brownian-motion, conformal-field-theory, gff, statistical-mechanics
- Backlinks: gff

## Entity: math/stein-method
- Title: Stein's Method
- Category: Applied Probability
- Language: en
- Key Concepts: Kolmogorov distance, Statistical physics, Wasserstein distance, Total variation distance, Stein's Method, Exchangeable Pairs and Stein Discrepancy, Graph theory, Local Dependence and Dissociation, Concrete Example: Fixed Points in Random Permutations, Stein equation, Applications and Extensions, Chen–Stein Method for Poisson Approximation, Bounds and Metrics, The Stein Operator and Stein Equation, local dependence
- References: central-limit-theorem, characteristic-functions, de-finetti-exchangeability, math/concentration-inequalities, math/local-limit-theorems, math/poisson-approximation

## Entity: sufficient-statistics
- Title: Sufficient Statistics & Factorization Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: Completeness, sufficient, 2. Fisher-Neyman Factorization Theorem, Rao-Blackwellization, 4. Rao-Blackwell Theorem, Sufficient Statistics & Factorization Theorem, 3. Minimal Sufficiency and Completeness, Related Topics, Minimal Sufficient Statistic, 1. Definition
- References: cramer-rao-bound, estimator-properties, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information

## Entity: time-series
- Title: Time Series Analysis
- Category: Applied Probability
- Language: en
- Key Concepts: Volatility Modeling (ARCH / GARCH), Autocorrelation Function (ACF) and PACF, ACF, Spectral Analysis, frequency domain, Time Series Analysis, Weak Stationarity, Spectral Density, Related Topics, differences, Classical Models (Box-Jenkins), temporal dependence, GARCH(1,1), PACF (Partial Autocorrelation), 2. MA (Moving Average)
- References: math/markov-chain-mixing
- Backlinks: garch-models, language-models/mamba-ssm, math/stochastic-calculus/rough-path-signatures

## Entity: total-probability-variance
- Title: Total Probability and Total Variance
- Category: Applied Probability
- Language: en
- Key Concepts: Stochastic Processes, Laws of Total Probability and Total Variance, In AI, 1. Law of Total Probability, Bias-Variance Decomposition, Generative Models, Related Topics, Component 2 (Variance of Conditional Expectation), Bias, 2. Law of Total Expectation (Adam's Law), Intuition, Variance Decomposition, Bayesian Hierarchical Models, Variance, Component 1 (Expected Conditional Variance)
- References: bayesian-inference, hmm-particle-filters

## Entity: wentzell-freidlin
- Title: Wentzell-Freidlin Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Applications, Wentzell-Freidlin Theory (Large Deviations for SDEs), 2. The Quasi-Potential, Rate Function, Instantone, Visualization: The Escape Path, Chemistry, Large Deviation Principles (LDP), The Action Functional ($S$), The Setting: Small Noise Limits, Key Phenomena, Exit Time, Quasi-potential, Neural Networks, Related Topics
- References: math/large-deviations-cramer, statistical-mechanics, stochastic-differential-equations

## Entity: math/wiener-hopf-factorization
- Title: Wiener-Hopf Factorization
- Category: Applied Probability
- Language: en
- Key Concepts: Example: symmetric random walk, 1. Ruin probabilities., 2. Sequential analysis., Pollaczek-Khinchine formula, Related Articles, Corollary (Spitzer's identity for $\mathbb{P}(M_n = 0)$)., ascending ladder height, Applications, 4. Barrier options in finance., Setup and ladder variables, Historical notes, ascending ladder epoch, Theorem (Wiener-Hopf factorization)., The Wiener-Hopf identity, Baxter combinatorial lemma
- References: brownian-motion, characteristic-functions, finance/levy-processes, math/branching-processes, math/discrete-martingales, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory, math/weak-convergence-prokhorov
- Backlinks: math/branching-processes, math/random-walks, math/renewal-theory, math/subordinators

## Entity: f-divergences
- Title: f-Divergences
- Category: Applied Probability
- Language: en
- Key Concepts: $f$ is a convex function, Fisher Information Metric, f-GANs, Variational Inference, Positivity, Hellinger Distance, Visualization: Mode Seeking vs. Mass Covering, 3. Properties, 1. Definition, 2. Famous Special Cases, Data Processing Inequality, Pearson $\chi^2$, Local Geometry, KL Divergence, Reverse KL
- References: finance/gan, finance/shannon-entropy, information-geometry-finance, jensens-inequality, llm, manifold-learning, rlhf
- Backlinks: course-math-for-ai, fisher-information, multivariate-normal

## Entity: math/absolute-continuity-process-measures
- Title: Absolute Continuity of Process Measures
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: always, Related Articles, different, Model comparison in finance., Why Different Volatilities Imply Singularity, Connection to Filtering, absolute continuity and singularity, Kazamaki condition, Applications, Structure Theorem, The Liptser-Shiryaev Theorem, The Setup, same diffusion coefficient, Novikov's Condition, Theorem.
- References: brownian-motion, finance/girsanov-semimartingales, geometric-brownian-motion, heston-model, innovation-process, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering
- Backlinks: math/cameron-martin-formula, math/differentiation-of-measures, math/signed-measures

## Entity: math/bayesian-asymptotics
- Title: Bayesian Asymptotics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Infinite-Dimensional Models, Prior positivity, Prior irrelevance, Castillo and Nickl, Prior mass condition, [[empirical-processes]], [[minimax-estimation]], Bernstein–von Mises Theorem, Bernstein–von Mises theorem, Kullback–Leibler divergence, Statement, Identifiability, [[cramer-rao-bound]], References, [[information-geometry]]
- References: cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/m-estimators, math/minimax-estimation
- Backlinks: math/semiparametric-efficiency

## Entity: bayesian-inference
- Title: Bayesian Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 4. Bayesian vs. Frequentist (MLE), Frequentist (MLE), 3. Numerical Methods (When Math is Hard), Optimization, Random Variables, Variational Autoencoders (VAEs), Bayes' Theorem, Evidence $P(D)$, Hamiltonian Monte Carlo (HMC), 2. Conjugate Priors, Related Topics, B. Variational Inference (VI), Posterior $P(\theta \mid D)$, Metropolis-Hastings, Prior $P(\theta)$
- References: bayesian-black-litterman, bayesian-kelly, mcmc, measure-theory, mle, variational-autoencoders
- Backlinks: decision-theory, distributions-zoo, linear-regression, maximum-entropy, mcmc, mle, multi-armed-bandits, naive-bayes, total-probability-variance, variational-inference

## Entity: causal-inference
- Title: Causal Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: do-calculus, Exogeneity, Inverse Probability Weighting, Regression discontinuity, average treatment effect, Unconfoundedness and Matching, See Also, Do-Calculus and Causal Graphs, Wald estimand, randomized controlled trial, compliers, backdoor criterion, Applications: Causality in Large Language Models, local treatment effect, [[rlhf]]
- References: fama-macbeth-regression, finance/efficient-market-hypothesis, math/kolmogorov-probability-axioms, math/local-asymptotic-normality, mcmc, rlhf
- Backlinks: bayesian-networks, causal-inference-trading, correlation-association, double-ml, financial-entropy, math/semiparametric-efficiency, math/survival-analysis, probability-paradoxes

## Entity: math/contiguity-measures
- Title: Contiguity and the Le Cam Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Definition., Related Articles, predictable characteristics, Theorem (Le Cam's first lemma)., sequences, local asymptotic normality, contiguous, Characterization via Likelihood Ratios, Dichotomy:, contiguity, asymptotic minimax theorem, mutually contiguous, first lemma, Proof idea., Hellinger distance
- References: central-limit-theorem, characteristic-functions, finance/girsanov-semimartingales, finance/semimartingale-models, math/large-deviations-cramer, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/hellinger-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: correlation-association
- Title: Correlation and Association
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Visualization: Correlation vs. Dependence, ranks, linear, 2. Spearman's Rank Correlation ($r_s$), monotonic function, Limitation, Range, Correlation and Association Measures, Related Topics, if and only if, 4. Distance Correlation (dCor), 1. Pearson Product-Moment Correlation ($\rho$), controlling for, 5. Partial Correlation, discordant
- References: causal-inference, copulas

## Entity: math/cramer-rao-bound
- Title: Cramér–Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Related concepts, Biased estimators and general linear forms, Fisher information matrix, efficient estimators, Cramér regularity conditions, quantum advantage, Dominated convergence:, asymptotically efficient, Regularity conditions (Cramér regularity), Support independent of $\theta$:, Fisher information and the score function, Quantum Fisher information, quantum Fisher information, Efficiency and UMVUE, Theorem (Cramér-Rao, unbiased case):
- References: empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/conditional-expectation-sigma, math/local-asymptotic-normality, math/neyman-pearson

## Entity: math/density-processes
- Title: Density Processes and Likelihood Ratios
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Sequential testing (SPRT)., unchanged, Definition., Related Articles, log-likelihood, density process, Hellinger Process Connection, optimal, Applications, Log-likelihood process., Density Processes and Likelihood Ratios, Definition and Basic Properties, Fundamental properties:, Singularity and Absolute Continuity Dichotomy, dichotomy
- References: finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/predictable-compensator
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/regular-conditional-probability, math/sequential-hypothesis-testing, math/signed-measures

## Entity: double-ml
- Title: Double Machine Learning
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: true causal effect, The DML Procedure (Nuisance Parameter Removal), Visualization: Removing the Bias, Medicine, Applications, Cross-fitting, Related Topics, Causal Estimation, causal effects, Model the Treatment, Chernozhukov et al., AI Finance, Double Machine Learning (Causal Inference), Cross-Fitting, Marketing
- References: alpha-factor-research, causal-inference, mle

## Entity: empirical-processes
- Title: Empirical Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Bootstrap for Empirical Processes, Bracketing number, generalization bounds, VC-classes, shattered, Covering number, The fundamental result, VC-classes are Donsker classes, symmetrization, empirical process, Gaussian process, VC dimension, bootstrap sample, Connection to Machine Learning Generalization, sets
- References: brownian-bridge, central-limit-theorem, finance/shannon-entropy, math/local-asymptotic-normality, math/weak-convergence-prokhorov, pac-learning
- Backlinks: math/bayesian-asymptotics, math/concentration-inequalities, math/cramer-rao-bound, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/survival-analysis, math/u-statistics, random-matrices

## Entity: expectation-maximization
- Title: Expectation-Maximization (EM)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Applications, Visualization: Clustering Progress, local maximum, MAP, Missing Data, Maximum Likelihood (MLE), Expectation-Maximization (EM) Algorithm, Natural Language Processing, The Two Steps, latent variables, 1. E-Step (Expectation), 2. M-Step (Maximization), Related Topics, Gaussian Mixture Models, The Problem: Latent Variables
- References: mle, variational-inference
- Backlinks: gmm, jensen-inequality

## Entity: fisher-information
- Title: Fisher Information and the Cramér-Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: observed Fisher information, 9. Fisher information and the chi-squared test, regular, Riemannian metric, Theorem (Cramér-Rao, scalar)., Efficient estimators, asymptotic efficiency, score, 3. Fisher information as a Riemannian metric, not reparameterisation-invariant, asymptotically efficient, TRPO, 2. Zero-mean score identity, 4. The Cramér-Rao bound, Multivariate case.
- References: convex-optimization, cramer-rao-bound, exponential-families, f-divergences, manifold-learning, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, mle, sufficient-statistics
- Backlinks: course-math-for-ai, cramer-rao-bound, likelihood-ratio-tests, math/analysis-geometry/information-geometry, math/information-theory, maximum-entropy, mle-estimation, multivariate-normal

## Entity: math/hellinger-processes
- Title: Hellinger Integrals and Hellinger Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Definition., Hellinger integral, Related Articles, Criteria for Absolute Continuity and Singularity, Hellinger Process for Filtered Spaces, Applications, For Lévy processes., Le Cam theory., Kakutani's Dichotomy Generalized, Statistical testing., accumulates over time, Hellinger Integrals on a Single $\sigma$-Algebra, rate at which the two measures separate, Hellinger distance, For point processes.
- References: finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/contiguity-measures, math/doleans-dade-exponential, math/sigma-algebra-measurability, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: math/high-dimensional-statistics
- Title: High-Dimensional Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: statistical error, Restricted Isometry Property and Compressed Sensing, Matrix Estimation and Nuclear Norm Minimization, Gordon's Theorem, Gaussian width, LASSO and the Restricted Eigenvalue Condition, Failure of Classical Methods and Regularization, Restricted Isometry Property (RIP), LASSO, compressed sensing, Nuclear norm minimization, knockoffs, Fano information-theoretic criterion, Multiple Testing Control: Knockoffs, Gaussian sequence model
- References: convex-analysis, cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/lp-spaces, math/minimax-estimation, math/random-graphs
- Backlinks: math/multiple-testing, math/nonparametric-regression, random-matrices

## Entity: hypothesis-testing
- Title: Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: The P-Value Misinterpretation, Hypothesis Testing Foundations, Alternative Hypothesis ($H_1$), Common Tests, A/B Testing, Null Hypothesis ($H_0$), Rule, Power ($1-\beta$), not, $\alpha$ (Significance Level), Related Topics, Test Statistic, Type I and Type II Errors, Bonferroni Correction, The Framework
- References: bootstrap, central-limit-theorem, math/neyman-pearson
- Backlinks: probability-paradoxes, sampling-distributions

## Entity: math/kernel-density-estimation
- Title: Kernel Density Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Adaptive Bandwidth, Silverman's Rule of Thumb, Connection to Nonparametric Regression Smoothing, curse of dimensionality, Normalization, Kernel Density Estimation (KDE), Plug-in methods, Parzen–Rosenblatt Estimator, pointwise bias, bandwidth, Multivariate Kernel Density Estimation, Gaussian, Silverman's rule-of-thumb, Mean Integrated Squared Error, kernel density estimator
- References: cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/glivenko-cantelli, math/local-asymptotic-normality, math/u-statistics
- Backlinks: math/minimax-estimation, math/nonparametric-regression

## Entity: kde
- Title: Kernel Density Estimation (KDE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Silverman's Rule of Thumb, 4. Applications in Quantitative Finance and AI, Volatility Surface Smoothing, Continuity and Differentiability, Small $h$ (Under-smoothing), Kernel Density Estimation (KDE), Optimal Bandwidth Selection, 2. The Bias-Variance Tradeoff and Bandwidth ($h$), 1. The Core Estimator, Large $h$ (Over-smoothing), High Bias but Low Variance, $h$ (The Bandwidth), Related Topics, 3. Advantages over Histograms, Anomaly Detection (Fraud)
- References: kernel-methods-rkhs, math/nonparametric-regression, mle

## Entity: math/local-asymptotic-normality
- Title: Local Asymptotic Normality (LAN)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Asymptotic Efficiency, Definition., regular, The LAN Condition, Hajek-Le Cam convolution theorem, LAMN and LAQ Extensions, Related Articles, random, asymptotically efficient, Neyman-Pearson test, Local Asymptotic Normality, asymptotic Cramer-Rao bound, LAMN (Locally Asymptotically Mixed Normal)., Wald test, Rao score test
- References: central-limit-theorem, finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/functional-limit-theorems, math/hellinger-processes, math/law-of-large-numbers, math/stable-convergence
- Backlinks: causal-inference, empirical-processes, fisher-information, math/absolute-continuity-process-measures, math/bayesian-asymptotics, math/cameron-martin-formula, math/cramer-rao-bound, math/density-processes, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/sequential-hypothesis-testing, math/survival-analysis

## Entity: math/m-estimators
- Title: M-Estimators and Z-Estimators
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: VC-dimension, Connection to empirical processes and [[shannon-entropy|entropy]], Proof sketch, heteroscedasticity-consistent covariance matrix, M-estimator, Regularity in the limit, Asymptotic normality of Z-estimators, iteratively reweighted least squares, Theorem (Consistency via Uniform Law of Large Numbers):, Maximum likelihood, Consistency of Z-estimators, Huber sandwich estimator, Robust M-estimators, uniform law of large numbers (uniform LLN), Donsker condition
- References: bootstrap, cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/concentration-inequalities, math/local-asymptotic-normality, math/neyman-pearson
- Backlinks: causal-inference-do-calculus, convex-optimization, math/bayesian-asymptotics, math/semiparametric-efficiency, math/survival-analysis

## Entity: mle
- Title: Maximum Likelihood Estimation (MLE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Likelihood Function, 4. Connection to Information Theory, Fisher Information, Related Topics, 1. The Likelihood Function, Asymptotic Normality, Log-Likelihood, Maximum Likelihood Estimation (MLE), 3. Fisher Information ($I(\theta)$), Consistency, 2. Asymptotic Properties, Kullback-Leibler (KL) Divergence, Efficiency, Cross-[[shannon-entropy|Entropy]] Loss, Cramér-Rao Lower Bound
- References: bayesian-inference, cramer-rao-bound, finance/shannon-entropy, information-geometry-finance, manifold-learning
- Backlinks: bayesian-inference, change-of-variables, clt, double-ml, expectation-maximization, fisher-information, garch-models, hmm, kde, linear-regression, logistic-regression, maximum-entropy, slutsky-theorem, umvue-completeness

## Entity: math/minimax-estimation
- Title: Minimax Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Le Cam Distance and Normal Approximation, Rate-Optimal Estimators: Examples, Le Cam distance, Minimax Estimation and Le Cam's Theory, asymptotically minimax optimal, two-point method, Computational Considerations, Assouad's lemma, Hellinger distance, Gordon's inequality, Lower Bounds: Le Cam's Two-Point Method, Oracle Inequalities, Fano's inequality, Minimax risk, Lepski's method
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/concentration-inequalities, math/kernel-density-estimation, math/local-asymptotic-normality
- Backlinks: math/bayesian-asymptotics, math/high-dimensional-statistics, math/nonparametric-regression, random-matrices

## Entity: math/multiple-testing
- Title: Multiple Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Knockoff, per-hypothesis error rates, Summary Table, Benjamini–Hochberg Procedure, model-X knockoff, Advantages over FWER, Multiple Testing, uniformly valid, empirical Bayes, Adaptive and Modified FDR, The Multiple Testing Problem, independence, Knockoff Filter (Candès et al.), Storey's $q$-Values, Local False Discovery Rate
- References: bootstrap, empirical-processes, exponential-families, math/concentration-inequalities, math/high-dimensional-statistics, math/neyman-pearson, math/sequential-hypothesis-testing

## Entity: math/neyman-pearson
- Title: Neyman–Pearson Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Proof sketch, Type II error (power), likelihood ratio test, Composite nulls, P-values as Test Statistics, Neyman–Pearson Theory, Pitman efficiency, randomized tests, Neyman–Pearson theory, Connections to [[Sequential-Hypothesis-Testing]] and [[Cramer-Rao-Bound]], Bahadur efficiency, Composite Hypotheses: Uniformly Most Powerful Tests, Neyman–Pearson Lemma, Karlin–Rubin Theorem, Simple vs. Composite Hypotheses
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/sequential-hypothesis-testing
- Backlinks: hypothesis-testing, math/cramer-rao-bound, math/m-estimators, math/multiple-testing, math/survival-analysis

## Entity: math/nonparametric-regression
- Title: Nonparametric Regression
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: adaptively, Splines, choice of kernel, smoothing splines are equivalent to GP regression, Higher-order rates, Nadaraya–Watson Kernel Estimator, References & Wikilinks, Bandwidth and Smoothness Selection, Bias reduction, B-spline basis, Key advantages, Regression Splines, Gaussian Process Regression, Lepski method, Conclusion
- References: bootstrap, functional-analysis, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/minimax-estimation, sobolev-spaces
- Backlinks: kde

## Entity: bootstrap
- Title: Resampling: Bootstrap and Jackknife
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Sampling, Visualization: Resampling Distribution, Main Use, Why it works: The "Plug-in" Principle, sampling with replacement, Complexity, Bradley Efron, When to Use Which?, bias correction, The Procedure, 2. The Jackknife, Resampling: Bootstrap and Jackknife, Related Topics, 1. The Bootstrap, Leave-one-out
- References: central-limit-theorem, finance/monte-carlo-method
- Backlinks: hypothesis-testing, math/m-estimators, math/multiple-testing, math/nonparametric-regression

## Entity: sampling-distributions
- Title: Sampling Distributions
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Summary Table, 1. The Chi-Square Distribution ($\chi^2$), Chi-Square ($\chi^2$), 2. Student's t-Distribution, ratio of two independent chi-square variables, Visualization: t vs Normal, Comparison to Normal, Student's t, fatter tails, Normal (Z), Related Topics, 3. The F-Distribution, sample size is small, Property, sum of squares
- References: anova, central-limit-theorem, hypothesis-testing

## Entity: math/semiparametric-efficiency
- Title: Semiparametric Efficiency
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Definition., Doubly robust estimators, nuisance tangent space, partially linear model, Related Articles, semiparametric efficiency bound, The Efficient Influence Function, One-step estimator., Connections to Causal Inference, Doubly Robust Estimation and AIPW, one-step estimators, augmented inverse-probability-weighted, Tangent space $\mathcal{T}_{\theta_0, \eta_0}$., tangent space, Partially Linear Model
- References: causal-inference, cramer-rao-bound, empirical-processes, exponential-families, math/bayesian-asymptotics, math/local-asymptotic-normality, math/m-estimators
- Backlinks: math/survival-analysis

## Entity: math/sequential-hypothesis-testing
- Title: Sequential Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Theorem (Wald-Wolfowitz)., Connection to Optimal Stopping, Definition., Related Articles, Wald's Identities, The SPRT, Signal processing., Sequential Hypothesis Testing, smallest expected sample size, Sequential Probability Ratio Test (SPRT), Applications, quickest detection problem, both, Regime detection in finance., Quality control.
- References: brownian-motion, geometric-brownian-motion, hidden-markov-models, kalman-filter, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality
- Backlinks: math/absolute-continuity-process-measures, math/multiple-testing, math/neyman-pearson

## Entity: slutsky-theorem
- Title: Slutsky's Theorem
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: probability, constant, 4. Continuous Mapping Theorem (CMT), Multiplication, 1. The Theorem, Continuous Mapping Theorem, 3. Application: The t-statistic and Wald Tests, By Slutsky's Theorem, Asymptotic Normality, Slutsky's Theorem: The Algebra of Limits, distribution, Related Topics, Division, 2. Why the Difference in Convergence Matters?, Z-test
- References: central-limit-theorem, delta-method, math/law-of-large-numbers, mle

## Entity: math/survival-analysis
- Title: Survival Analysis
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Related topics, Survival function and hazard rate, semiparametric efficiency bound, discrete component, Right-censoring mechanism, survival function, Counting process and martingale formulation, Mantel–Haenszel test, partial likelihood, proportionality assumption, Semiparametric efficiency and influence functions, log-rank test statistic, Nelson–Aalen estimator, empirical information matrix, martingale central limit theorems
- References: causal-inference, empirical-processes, math/local-asymptotic-normality, math/m-estimators, math/neyman-pearson, math/point-processes, math/semiparametric-efficiency

## Entity: math/u-statistics
- Title: U-Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Classical Examples, Wilcoxon Statistic:, Unbiasedness:, Degenerate U-Statistics, Asymptotic Normality, projected U-statistic, V-statistic, Degenerate Convergence:, Strong Consistency:, Jackknife Consistency:, Asymptotic Normality (non-degenerate):, Definition and Core Concepts, Connections to Empirical Processes and V-Statistics, Variance Estimation and the Jackknife, U-statistic
- References: central-limit-theorem, characteristic-functions, cramer-rao-bound, empirical-processes, exponential-families, martingale-clt
- Backlinks: math/kernel-density-estimation

## Entity: umvue-completeness
- Title: UMVUE and Completeness
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: UMVUE and Completeness: The Theory of Optimal Estimation, Completeness, 1. Sufficiency and Data Compression, less than or equal to, 5. Why Tier-1 Quants care, MLE vs UMVUE, Complete Sufficient Statistic, Uniformly Minimum Variance Unbiased Estimator (UMVUE), Steps to find the UMVUE, 3. Completeness and Uniqueness, 4. Lehmann-Scheffé Theorem: Finding the UMVUE, Related Topics, Factorization Theorem, Efficiency, Sufficient
- References: cramer-rao-bound, delta-method, mle

## Entity: variational-inference
- Title: Variational Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Approach, Accuracy, The ELBO (Evidence Lower Bound), Related Topics, Speed, Scalability, Posteriors, ELBO, The Intractability Problem, Application in AI: Variational Autoencoders (VAE), Visualization: Approximating a Distribution, VI vs. MCMC, The Variational Idea, Kullback-Leibler (KL) Divergence, Variational Inference (VI)
- References: bayesian-inference, convex-optimization, mcmc, variational-autoencoders
- Backlinks: bayes-theorem, bayesian-kelly, calculus-of-variations, expectation-maximization, math/information-theory, math/variational-calculus, monte-carlo-integration

## Entity: nonequilibrium-statmech
- Title: Nonequilibrium Statistical Mechanics
- Category: Classical Physics
- Language: en
- Key Concepts: Fluctuation Theorems, erase information, Information as a Physical Commodity, Langevin, 1. Beyond the Second Law, Visualization: The Thermodynamic Limit, Equilibrium Free Energy, 5. Application in Machine Learning: Diffusion Models, Computational Drug Discovery, Nonequilibrium Physics, Related Topics, Arrow of Time, 3. The Jarzynski Equality: Equilibrium from Chaos, Reverse [[stochastic-differential-equations|SDE]], Maxwell's Demon
- References: diffusion-models, fokker-planck-equation, gravitational-entropy, statistical-mechanics, stochastic-differential-equations

## Entity: b-trees
- Title: B-Trees
- Category: Data Structures
- Language: en
- Key Concepts: Properties, Overview

## Entity: hash-tables
- Title: Hash Tables
- Category: Data Structures
- Language: en
- Key Concepts: Open Addressing, Performance, Chaining, Overview

## Entity: account-abstraction
- Title: Account Abstraction (ERC-4337)
- Category: DeFi
- Language: en
- Key Concepts: Bundler, 3. Session Keys and Security Policies, UserOperation, Visualization: The ERC-4337 Flow, Validation Loop, Paymaster, Account Abstraction (ERC-4337): The Modular Wallet Standard, Signature Aggregation, Related Topics, Account Abstraction (AA), Gasless Onboarding, Execution Overhead, 1. The ERC-4337 State Machine, 2. Advanced Paymaster Mechanics, Native Multi-sig
- References: cedefi-gateway-architecture, zk-kyc
- Backlinks: course-cedefi

## Entity: amm-mechanics
- Title: Automated Market Makers (AMM)
- Category: DeFi
- Language: en
- Key Concepts: Complexity, Automated Market Makers (AMM), Visualization: The Bonding Curve, Liquidity Pool, Price Oracles, Oracle Manipulation Attacks, Impermanent Loss (IL), The Constant Product Formula (Uniswap V2), Concentrated Liquidity, AMM as an Oracle, Concentrated Liquidity (Uniswap V3), Impermanent Loss, Related Topics, Efficiency, Constant Product Market Maker (CPMM)
- References: optimal-execution, smart-order-routing
- Backlinks: asset-tokenization, cedefi-mechanics, course-cedefi, liquid-staking-restaking, mev, stablecoin-mechanisms

## Entity: bridge-security
- Title: Bridge Security and Settlement Finality
- Category: DeFi
- Language: en
- Key Concepts: Instant Finality, Hash Time-Lock Contracts (HTLC), Probabilistic Finality, A. Trusted (Centralized) Bridges, 2. Types of Bridge Security, Locks, Visualization: The Reorg Risk, 1. The Core Risk: The Bridge as a Vault, Safety Buffer, Pros, Bridge Security and Settlement Finality, Rate Limiting, Related Topics, CeDeFi use case, 3. The Finality Problem
- References: asset-tokenization, cedefi-gateway-architecture, stablecoin-mechanisms
- Backlinks: cedefi-gateway-architecture, cross-chain-interop

## Entity: cedefi-gateway-architecture
- Title: CeDeFi Gateway Architecture
- Category: DeFi
- Language: en
- Key Concepts: 3. Custody Architecture: MPC vs. Multi-sig, Visualization: The "Double-Check" Architecture, Exponential Bump, Cold Storage Interaction, 2. The Indexer and Reconciliation (Data Integrity), The Solution, CeDeFi Gateway Architecture: High-Performance Institutional Bridging, CeDeFi Gateway, Related Topics, Global Pause, Double Spend Protection, Implementation Tip: Idempotency, Drift Detection, Blacklist, EIP-1559 Support
- References: bridge-security, cedefi-mechanics, zk-kyc
- Backlinks: account-abstraction, bridge-security, contract-upgradeability, course-cedefi, cross-chain-interop, number-theory-basics, oracle-design, privacy-defi, zk-kyc

## Entity: cedefi-mechanics
- Title: CeDeFi: Centralized Decentralized Finance
- Category: DeFi
- Language: en
- Key Concepts: Regional Restrictions, A. Permissioned Liquidity Pools, Transaction Limits, 1. The Core Paradox, Sanction Screening, Oracle Vulnerability, Low Latency, Related Topics, Control, Binance Smart Chain (BSC), Aave Arc, DeFi Opportunity, CeDeFi, CeDeFi: The Convergence of Institutional and Decentralized Finance, Bridge Risk
- References: amm-mechanics, smart-order-routing
- Backlinks: asset-tokenization, cedefi-gateway-architecture, course-cedefi, number-theory-basics, onchain-credit, stablecoin-mechanisms

## Entity: cross-chain-interop
- Title: Cross-chain Interoperability Protocols
- Category: DeFi
- Language: en
- Key Concepts: LayerZero, Cross-chain Interoperability Protocols, 1. Messaging vs. Bridging, 3. Use Cases for CeDeFi, Risk Management Network, Visualization: Omnichain Logic Flow, Messaging, Cross-chain Interoperability Protocols: Beyond Bridges, Unified Liquidity, Relayer, Defense-in-Depth, Wormhole, Chainlink CCIP, Related Topics, Cross-chain Governance
- References: asset-tokenization, bridge-security, cedefi-gateway-architecture, smart-order-routing
- Backlinks: course-cedefi

## Entity: lending-mechanics
- Title: Lending and Money Market Mechanics
- Category: DeFi
- Language: en
- Key Concepts: 2. Interest Rate Models (The Utilization Curve), Aave, 4. The Liquidation Process, Utilization Rate, Compound, After the Kink ($U > U_{optimal}$), 3. Risk Management: LTV and Health Factor, Health Factor ($H_f$), 1. The Liquidity Pool Model, Utilization-based Model, Related Topics, Liquidation, Reserve Factor, Kinked Interest Rate Curve, 5. Implementation for CeDeFi
- References: onchain-credit, stablecoin-mechanisms
- Backlinks: course-cedefi, metric-spaces, oracle-design, yield-aggregators

## Entity: liquid-staking-restaking
- Title: Liquid Staking and Restaking
- Category: DeFi
- Language: en
- Key Concepts: 2. The EigenLayer Revolution: Restaking, 4. Institutional Implications: The "Internet Bond", The Systemic Risk, 3. Liquid Restaking Tokens (LRTs), Restaking, A. Shared Security, Related Topics, Treasury Bills, complex correlation of risk, B. Slashing Risks, Liquid Staking and Restaking: The Yield Layer, stETH, Lido, Liquid Staking, ether.fi
- References: amm-mechanics, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: mev
- Title: Maximal Extractable Value (MEV)
- Category: DeFi
- Language: en
- Key Concepts: Visualization: The Sandwich Attack, reordering, 4. Toxic vs. Non-Toxic MEV, A. Front-running, B. Sandwich Attacks, Private RPCs, Mempool, Implementation Shortfall, Proposers (Validators), Flashbots, Related Topics, Maximal Extractable Value (MEV), High-Frequency Trading (HFT) and Front-Running, C. Arbitrage, Information Leakage
- References: amm-mechanics, latency-arbitrage, smart-order-routing
- Backlinks: contract-upgradeability, course-cedefi, oracle-design, privacy-defi

## Entity: onchain-credit
- Title: On-chain Credit Markets
- Category: DeFi
- Language: en
- Key Concepts: Visualization: The Credit Pipeline, Undercollateralized (Institutional), Asset-Backed (RWA), Goldfinch, On-chain Credit Markets: Bridging TradFi and DeFi, 3. The Role of Underwriters (Delegates), Transparency, 1. Undercollateralized vs. Asset-Backed Lending, Related Topics, Composability, 4. Why it Matters for High-Finance, Tranche, Maple, Efficiency, 2. The Tranche Structure (Waterfall Model)
- References: asset-tokenization, cedefi-mechanics
- Backlinks: course-cedefi, lending-mechanics, zk-kyc

## Entity: onchain-perps
- Title: On-chain Perpetuals and vAMM Mechanics
- Category: DeFi
- Language: en
- Key Concepts: Matching Engine, Perpetual Protocol, GMX, Funding Rate, Jupiter, If Perp Price > Spot Price, 2. vAMM (Virtual Automated Market Maker), Visualization: vAMM vs. Oracle Model, GLP, 3. LP-as-Counterparty Model (GMX Model), 4. Order-book Based DEXs (dYdX Model), Related Topics, Perpetual Swaps (Perps), Bad Debt, 1. Funding Rates: The Peg Mechanism
- References: oracle-design, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: oracle-design
- Title: Oracle Design and Resilience
- Category: DeFi
- Language: en
- Key Concepts: Safe Mode, Spot Price, Medianizer, Primary Source, Cost Analysis, The Fix, Multi-Oracle Consensus, OEV-Share, Math, 1. Triggering Mechanisms: Heartbeat and Deviation, Median, 3. Oracle Extractable Value (OEV), 5. Defense against Flash Loan Attacks, Related Topics, Flashbots
- References: cedefi-gateway-architecture, lending-mechanics, mev
- Backlinks: course-cedefi, onchain-perps

## Entity: privacy-defi
- Title: Privacy-Preserving DeFi (Shielded Pools)
- Category: DeFi
- Language: en
- Key Concepts: Confidentiality, Institutional Confidentiality, 4. Risks and Regulatory Pressure, Panther, Regulatory Scrutiny, Public Ledger Paradox, Privacy-Preserving DeFi: The Shielded Economy, Copy-trading bots, 3. Dark Pools (The Institutional Dream), Visualization: The Shielding Process, ZK-SNARKs, Unshielding, View Keys, Related Topics, Privacy DeFi
- References: cedefi-gateway-architecture, mev, zk-kyc
- Backlinks: course-cedefi

## Entity: asset-tokenization
- Title: Real World Asset (RWA) Tokenization
- Category: DeFi
- Language: en
- Key Concepts: 4. Risks and the "Off-chain Coupling" Problem, 1. The Architecture of Tokenization, Counterparty Risk, Private Credit, 2. Strategic Benefits, Real World Asset (RWA) Tokenization, Identity Registry, A. The Legal Wrapper (SPV), Real World Assets (RWA), atomically, Legal Enforceability, Compliance Rules, Proof of Reserve (PoR), Related Topics, Tokenized Treasuries
- References: amm-mechanics, cedefi-mechanics, smart-order-routing
- Backlinks: bridge-security, course-cedefi, cross-chain-interop, onchain-credit, stablecoin-mechanisms, zk-kyc

## Entity: contract-upgradeability
- Title: Smart Contract Upgradeability
- Category: DeFi
- Language: en
- Key Concepts: Smart Contract Upgradeability: Patterns, Risks, and Storage Layout, B. Transparent Proxy Pattern, Storage Gaps, Upgradeability Patterns, Visualization: UUPS Architecture, The Fix, Balance, 2. Advanced Upgrade Patterns, Proxy, Related Topics, Address, 3. The Initialization Paradox, 4. Storage Collisions: The Technical Nightmare, CeDeFi, Broken V2 Layout
- References: cedefi-gateway-architecture, mev
- Backlinks: course-cedefi

## Entity: stablecoin-mechanisms
- Title: Stablecoin Mechanisms
- Category: DeFi
- Language: en
- Key Concepts: Delta-Neutral (Ethena), 3. Algorithmic and Delta-Neutral, Stability Logic (CDP), Stablecoin Mechanisms: The Infrastructure of Value, Seigniorage (Terra/UST), PSM (Peg Stability Module), Mechanism, Decentralization, Stability, Related Topics, Liquidated, 4. The Stability Trilemma, Short Perpetual position, 2. Crypto-Collateralized (On-chain Overcollateralization), 1. Fiat-Collateralized (Off-chain)
- References: amm-mechanics, asset-tokenization, cedefi-mechanics
- Backlinks: bridge-security, combinatorics-induction, course-cedefi, lending-mechanics, liquid-staking-restaking, onchain-perps, yield-aggregators

## Entity: yield-aggregators
- Title: Yield Aggregators and Strategy Automation
- Category: DeFi
- Language: en
- Key Concepts: 3. Risk Assessment: The Strategy Stack, Beefy, Protocol Risk, 4. Institutional Customization, The Controller, Governance Boosting, Curated Strategies, 1. The Vault Architecture, Yield Aggregators, Yearn Finance, Compounded APY, Delta-Neutral Staking, Visualization: The Harvest Loop, Liquidity Risk, Related Topics
- References: lending-mechanics, smart-order-routing, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: zk-kyc
- Title: ZK-KYC: Privacy-Preserving Compliance
- Category: DeFi
- Language: en
- Key Concepts: Proof of Accreditation, ZK-KYC: Privacy-Preserving Compliance in CeDeFi, Institutional Access, Proof, Proof of Residency, 2. Selective Disclosure, Issuer, Soulbound Tokens, ZK-KYC, Transparency, Privacy, Verification, 4. Strategic Value for Your Project, Legal Compliance, Related Topics
- References: asset-tokenization, cedefi-gateway-architecture, onchain-credit
- Backlinks: account-abstraction, cedefi-gateway-architecture, course-cedefi, privacy-defi

## Entity: course-cedefi
- Title: CeDeFi Engineering: Institutional Web3
- Category: DeFi & Engineering
- Language: en
- Key Concepts: Capstone project, Recommended reading, Week 6 — ZK and private KYC, Kata:, Week 8 — Institutional stack, CeDeFi Engineering — institutional Web3 in 8 weeks, Course map, Week 3 — Lending and risk, Week 4 — Stablecoins, Oracles, MEV, Week 2 — AMM and liquidity microstructure, Prerequisites, fully private, Week 5 — Smart-contract security, Week 1 — EVM and stack architecture, Week 7 — Cross-chain and bridges
- References: account-abstraction, amm-mechanics, asset-tokenization, cedefi-gateway-architecture, cedefi-mechanics, contract-upgradeability, cross-chain-interop, lending-mechanics, liquid-staking-restaking, mev, onchain-credit, onchain-perps, oracle-design, privacy-defi, smart-order-routing, stablecoin-mechanisms, yield-aggregators, zk-kyc

## Entity: exotic-options-and-structured-products
- Title: Exotic Options & Structured Products
- Category: Derivatives
- Language: en
- Key Concepts: See Also, Exotic Options & Structured Products
- References: course-quant-trading, monte-carlo-option-pricing-and-variance-reduction, option-greeks-and-volatility

## Entity: multi-curve-framework
- Title: Multi-Curve Framework
- Category: Derivatives
- Language: en
- Key Concepts: OIS (Overnight) curve, Credit Support Annex (CSA), The Paradigm Shift, Visualization: The Basis Spread, CSA and Collateral Discounting, Multi-Curve Framework (Post-2008 Modern Yield Curves), Forward (Projection) Curves, Risk-Free Rates (RFRs), Liquidity Risk, Modern Multi-Curve Framework, Related Topics, Credit Risk, Why Do Curves Diverge?, LIBOR Transition (The "End of LIBOR"), SOFR
- References: finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/xva

## Entity: option-greeks-and-volatility
- Title: Option Greeks, Volatility & Hedging
- Category: Derivatives
- Language: en
- Key Concepts: Option Greeks, Volatility & Hedging, See Also, 2. Option Greeks, 1. Put-Call Parity, Gamma ($\Gamma$):, Delta ($\Delta$):, Theta ($\Theta$):, Vega ($\nu$):, 3. Delta Hedging
- References: course-quant-trading, optimal-stopping-and-kelly, quant-market-making-mechanics
- Backlinks: credit-risk-modeling-and-structural-models, exotic-options-and-structured-products, fixed-income-quant-rates-and-yield-curve, interest-rate-derivatives-swaps-caps-floors, monte-carlo-option-pricing-and-variance-reduction, quant-market-making-mechanics, stochastic-calculus-and-ito-lemma, volatility-surface-sabr-model, volatility-trading-and-variance-swaps

## Entity: volatility-arbitrage
- Title: Volatility Arbitrage and Variance Swaps
- Category: Derivatives
- Language: en
- Key Concepts: 2. Variance Swaps, Log-Contract Replication, Variance Risk Premium, VIX Index, model-independent, Volatility Arbitrage and Variance Swaps, Variance Swap, 1. The Variance Risk Premium (VRP), 2. Dispersion Trading, 1. Volatility Carry, forecasted future volatility, 3. The VIX Index, Related Topics, No Delta Hedging, implied volatility
- References: black-scholes, finance/rough-volatility, volatility-smile

## Entity: volatility-trading-and-variance-swaps
- Title: Volatility Trading & Variance Swaps
- Category: Derivatives
- Language: en
- Key Concepts: See Also, 1. Delta-Neutral Gamma Scalping, Volatility Trading & Variance Swaps
- References: course-quant-trading, option-greeks-and-volatility, quant-market-making-mechanics
- Backlinks: stochastic-volatility-heston-model

## Entity: math/ergodic-theorems-birkhoff
- Title: Birkhoff-Khintchine Ergodic Theorem
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Connection to information and [[shannon-entropy|entropy]], Stationary process., dependent, Related Articles, time averages, measure-preserving, 2. Markov chain with a unique stationary measure., ergodic theory, Comparison with the LLN, stationary, Measure-preserving transformation., Applications, Ergodicity, stationary (in the strict sense), maximal ergodic theorem
- References: arch-models, brownian-motion, central-limit-theorem, finance/shannon-entropy, garch-models, law-iterated-logarithm, math/discrete-markov-chains, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/stochastic-recursive-sequences
- Backlinks: math/borel-cantelli-zero-one, math/branching-processes, math/coupling-methods, math/discrete-markov-chains, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/law-of-large-numbers, math/markov-chain-mixing, math/martingale-clt, math/percolation, math/renewal-theory, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, statistical-mechanics

## Entity: math/discrete-markov-chains
- Title: Discrete Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: communicate, transient, Convergence to stationary, Definition., aperiodic, Transition matrix., Continuous-time chains, future depends only on the present, Related Articles, stochastic matrix, Communicating states., Convergence rate, Definition, stationary, Chapman-Kolmogorov equations.
- References: brownian-motion, finance/crr-model, hidden-markov-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, reinforcement-learning
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, math/branching-processes, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/geometric-ergodicity, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/markov-chain-mixing, math/optimal-stopping-markov, math/renewal-theory, math/stochastic-recursive-sequences, random-walks-groups, stochastic-processes

## Entity: math/kolmogorov-equations-ctmc
- Title: Kolmogorov Equations and Continuous-Time Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: backward equation, total departure rate, Related Articles, Comparison with discrete chains, generator, Markov property, Foster-Lyapunov criteria, stationary, minimal, Explosion and non-minimal chains, Matrix exponential solution, Ergodicity, Kolmogorov forward equation (Fokker-Planck), initial, uniformization
- References: brownian-motion, finance/levy-processes, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms, math/spectral-theory-operators
- Backlinks: fokker-planck-equation, math/discrete-markov-chains, math/point-processes, math/subordinators, stochastic-processes

## Entity: math/spectral-representation-processes
- Title: Spectral Representation of Stationary Processes
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: 2. Hodrick-Prescott filter., Definition., process itself, Related Articles, Wold's theorem., stationary, 1. Frequency-structure analysis of financial series., The spectral representation theorem, Applications, orthogonal random measure, [[hilbert-huang-transform|Hilbert-Huang transform]], Linear prediction problem., Ideal low-pass, Interpretation., Locally stationary processes
- References: brownian-motion, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/stationary-wide-spectral, wavelet-transform
- Backlinks: math/spectral-theory-operators, math/stationary-wide-spectral

## Entity: math/stochastic-recursive-sequences
- Title: Stochastic Recursive Sequences
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: top Lyapunov exponent, Definition., Theorem (Kesten, 1973; Vervaat, 1979)., Contractivity and the key condition, Connection to the multiplicative ergodic theorem, Related Articles, Lindley recursion, contractivity in mean, Theorem (Loynes, 1962)., Finance beyond GARCH., heavy (Pareto) tails, contractive, Applications, The linear case: products of random matrices, The Loynes scheme
- References: arch-models, brownian-motion, finance/levy-processes, garch-models, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/law-of-large-numbers
- Backlinks: math/ergodic-theorems-birkhoff, math/geometric-ergodicity

## Entity: math/stationary-wide-spectral
- Title: Wide-Sense Stationary Processes and Spectral Density
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: spectral measure, 4. ARMA($p$, $q$)., Definition., squared, 1. White noise., Related Articles, autocorrelation function, Definition, Theorem (Wiener, 1930; Khintchine, 1934)., 2. Filtering., Wiener-Khintchine theorem, 2. AR(1) process., non-negative, Non-negative definiteness, right language
- References: brownian-motion, characteristic-functions, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/self-similarity-fractality, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/spectral-representation-processes
- Backlinks: math/spectral-representation-processes, ornstein-uhlenbeck, stochastic-processes

## Entity: conditionally-gaussian-processes
- Title: Conditionally Gaussian Processes
- Category: Filtering Theory
- Language: en
- Key Concepts: Definition., Reference measure., Related Articles, Examples and Applications, Stochastic volatility filtering., Key structural point:, Conditionally Gaussian Processes, Credit risk with latent state., Comparison with Kalman-Bucy, matrix Riccati equation, The Filtering Equations, Derive the equations, Target tracking with range-dependent noise., Absolute continuity., The Conditionally Gaussian Model
- References: finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, math/doleans-dade-exponential, nonlinear-filtering, stochastic-differential-equations
- Backlinks: innovation-process, nonlinear-filtering

## Entity: innovation-process
- Title: Innovation Process
- Category: Filtering Theory
- Language: en
- Key Concepts: The Innovation Representation Theorem, Consequence., Kushner-Stratonovich equation, invertible causal transformation, Related Articles, Whitening Interpretation, innovation process, reference measure, Filtering, Control theory., Applications, Connection to Girsanov's Theorem, Definition and Basic Properties, Smoothing, Causal vs. Non-Causal Estimation
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, kalman-filter, math/conditional-expectation-sigma, math/discrete-martingales, nonlinear-filtering
- Backlinks: conditionally-gaussian-processes, math/absolute-continuity-process-measures, math/martingale-representation, nonlinear-filtering

## Entity: nonlinear-filtering
- Title: Nonlinear Filtering
- Category: Filtering Theory
- Language: en
- Key Concepts: Reference measure method., Spectral methods., Related Articles, curse of dimensionality, Examples and Applications, Linear-Gaussian case., Derive KS, linear, Kallianpur-Striebel formula., Kushner-Stratonovich (KS) equation, Projection filters., Benes filter., Particle filters., signal, Why Nonlinear Filtering is Hard
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, manifold-learning, math/doleans-dade-exponential, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, innovation-process, math/absolute-continuity-process-measures, math/martingale-representation, state-space-models, stochastic-control-partial-info, stochastic-differential-equations

## Entity: bayesian-networks
- Title: Bayesian Networks
- Category: Foundations
- Language: en
- Key Concepts: Edges, Structure Learning, Collider (V-structure), Belief Propagation, Acyclicity, dependent, Directed Acyclic Graph (DAG), The Factorization Property, Parameter Learning, Visualization: A Simple Network, Related Topics, Inference, Variable Elimination, Nodes, Chain Rule for Bayesian Networks
- References: bayes-theorem, causal-inference, hmm
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, graph-theory-basics

## Entity: category-theory
- Title: Category Theory
- Category: Foundations
- Language: en
- Key Concepts: Morphisms (Arrows), Composition, Functor, Relationships (Morphisms), Monads, Quantum Physics, Related Topics, 2. Functors: Moving Between Worlds, Functional Programming, Visualization: The Hierarchy of Abstraction, Objects, Natural Transformations, Category, Topos Theory, Distributed Representations
- References: homological-algebra, topos-theory, type-theory
- Backlinks: homological-algebra, homotopy-type-theory, math/algebraic-topology, topos-theory, type-theory

## Entity: probability-paradoxes
- Title: Classic Paradoxes in Probability
- Category: Foundations
- Language: en
- Key Concepts: Example, Visualization: Simpson's Reversal, 4. Survivor Bias, Intuition, Lesson, 1. Simpson's Paradox, Abraham Wald, 2. Berkson's Paradox (Selection Bias), no holes, confounding variables, Related Topics, 3. The Birthday Paradox, Reality, Classic Paradoxes in Probability and Statistics
- References: bayes-theorem, causal-inference, hypothesis-testing

## Entity: convex-optimization
- Title: Convex Optimization
- Category: Foundations
- Language: en
- Key Concepts: dual function, epigraph, Proximal Gradient (ISTA/FISTA), Slater's condition, KKT conditions, Proximal Operator, dual problem, Convex Sets and Functions, Strongly Convex Smooth:, Conjugate Function, ADMM, subdifferential, proximal operator, Applications, Weak duality
- References: math/information-theory, math/m-estimators, math/variational-calculus, stochastic-control
- Backlinks: 3d-gaussian-splatting, ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, attention-kernel, automatic-differentiation, convex-analysis, convexity, course-math-for-ai, deep-galerkin, differential-privacy, energy-based-models, ergodic-theory-sgd, fine-tuning, fisher-information, fluid-dynamics-navier-stokes, geometric-mechanics-lie-groups, geometry-loss-landscapes, gradient-hessian-jacobian, information-bottleneck-theory, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lagrange-multipliers, linear-algebra, linear-systems-gauss, logistic-regression, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/interacting-particle-systems, math/large-deviations-cramer, math/martingale-clt, math/ode-stability, meta-learning, model-merging-procrustes, multimodal-alignment-clip, multivariable-calculus, neural-operators-fno, normalization-layers-math, ntk, online-learning-regret, optimal-transport-gromov-wasserstein, optimization-basics, pinns-convergence, proximal-algorithms-admm, qft-curved-spacetime, regularization-implicit-bias, sgd-convergence-theory, sgd-variants, stochastic-calculus-manifolds, string-theory-calabi-yau, symplectic-hamiltonian-nn, training-dynamics, ttt-layers, vae-elbo, variational-autoencoders, variational-inference, variational-inference-math

## Entity: eigenvalues-eigenvectors
- Title: Eigenvalues and Eigenvectors
- Category: Foundations
- Language: en
- Key Concepts: Statistical Arbitrage, Determinant, Eigendecomposition, Singular Values, 5. Why It Matters in AI and Finance, eigenvector, Google PageRank, In AI, SVD, Characteristic Equation, 4. Singular Value Decomposition (SVD), Normal Modes, Related Topics, Gershgorin Disc Theorem, 3. Spectral Decomposition and Theorem
- References: finance/random-matrix-theory, linear-spaces-basis, math/discrete-markov-chains, math/spectral-theory-operators, pca
- Backlinks: cross-impact, laplacian, linear-spaces-basis, linear-systems-gauss, matrix-decompositions, nonlinear-shrinkage, vector-spaces-orthogonality

## Entity: math/functional-analysis
- Title: Functional Analysis
- Category: Foundations
- Language: en
- Key Concepts: linear operator, Reproducing Kernel Hilbert Spaces (RKHS):, Functional Analysis, Core Spaces, Operators and Spectrum, Spectral Theorem:, Applications in Machine Learning, Stability Analysis:, Kernel Trick:, Related Topics, Hilbert Spaces ($\mathcal{H}$):, orthogonality, Normed Spaces:, projection, Banach Spaces:
- References: hilbert-banach-spaces, linear-algebra, math/spectral-theory-operators, quantum-mechanics

## Entity: graph-theory
- Title: Graph Theory
- Category: Foundations
- Language: en
- Key Concepts: [[graph-neural-networks]], Fundamental Concepts, strongly connected, Path, Degree, [[knowledge-graph]], directed graph, Directed Acyclic Graph (DAG), weakly connected, Adjacency Matrix, Spectral Graph Theory, Important Theorems, Related Topics, graphs, Four Color Theorem
- References: finance/systemic-contagion-debtrank, graph-neural-networks, knowledge-graph, linear-algebra, math/spectral-theory-operators, spectral-graph-theory
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, kuramoto-model, linear-algebra, logic-set-theory

## Entity: homological-algebra
- Title: Homological Algebra
- Category: Foundations
- Language: en
- Key Concepts: Chain Complexes, Category Theory, Abelian Categories, Applications, exact, Homology Groups, Theoretical Physics, Algebraic Geometry, Related Topics, derived functors, extensions, The Five Lemma, $n$-th homology group, Derived Functors: Ext and Tor, 2. Ext (Extension)
- References: category-theory, hodge-theory, math/algebraic-topology, quantization
- Backlinks: category-theory, topos-theory, tor-ext-functors

## Entity: jensens-inequality
- Title: Jensen's Inequality
- Category: Foundations
- Language: en
- Key Concepts: Finite Version, Convex Case, Deep Learning, Concave Case, Kullback-Leibler (KL) Divergence, 2. Geometric Intuition, 4. Generalizations, A. Information Theory (Gibbs' Inequality), B. Variational Inference and VAEs, Equality Condition, Related Topics, Jensen's Inequality: The Geometry of Averages, above, C. Finance: The Volatility Tax, 1. The Mathematical Statement
- References: convexity, finance/shannon-entropy, variational-autoencoders
- Backlinks: f-divergences

## Entity: linear-algebra
- Title: Linear Algebra
- Category: Foundations
- Language: en
- Key Concepts: Determinant, Weights, Vectors, linearly independent, eigenvector, Spectral Theory, Linear Independence and Basis, Optimization, [[attention-mechanisms|Attention]], linear transformation, Embeddings, Matrices, Related Topics, Rank, Determinant and Inverse
- References: attention-mechanisms, automatic-differentiation, convex-optimization, graph-theory, manifold-learning, math/spectral-theory-operators, quantization, spectral-graph-theory, transformer-architecture
- Backlinks: graph-theory, language-models/mamba-ssm, math/functional-analysis

## Entity: quantum-math
- Title: Math of Quantum Computing
- Category: Foundations
- Language: en
- Key Concepts: Schmidt Rank, Born Rule, tensor product, Visualization: The Bloch Sphere, Shor's Algorithm, QAE, 1. The Qubit as a Hilbert Space Vector, Related Topics, 3. Unitary Operators (Quantum Gates), 4. Measurement as Projection, Reversibility, Linear Algebra, 5. Key Quantum Algorithms, 2. Tensor Products and Entanglement, The Mathematics of Quantum Computing
- References: hilbert-banach-spaces, quantum-amplitude-estimation, quantum-information-entropy, spectral-theorem-unbounded
- Backlinks: hilbert-banach-spaces, path-integral-control, quantum-amplitude-estimation

## Entity: decision-theory
- Title: Statistical Decision Theory
- Category: Foundations
- Language: en
- Key Concepts: Probability Theory, Bayes Rule, Classification, Action Space ($\mathcal{A}$), Reinforcement Learning, Parameter Space ($\Theta$), Quantitative Risk Management, Observation $X$, 2. Decision Rules and Risk, Dominant, A. Bayes Criterion (The Average Case), The Admissibility Crisis, Adversarial Machine Learning, Visualization: Bayes vs. Minimax, Related Topics
- References: bayesian-inference, finance/shannon-entropy, reinforcement-learning
- Backlinks: naive-bayes

## Entity: tensor-decompositions
- Title: Tensor Decompositions
- Category: Foundations
- Language: en
- Key Concepts: 5. Why it Matters for AI Infrastructure, NP-hard, Visualization: CP vs. Tucker, Reducing FLOPs, 1. The Core Problem: Rank of a Tensor, Limitation, Core Tensor, 2. CP Decomposition (CANDECOMP/PARAFAC), Large Language Models, 4. Tensor-Train (TT) Decomposition, Related Topics, Application, Tensor Decompositions, rank-1 tensors, Tensors
- References: distributed-training, many-body-tensor-networks, modern-quantization, pca
- Backlinks: course-math-for-ai, lora-peft

## Entity: maximum-entropy
- Title: The Maximum Entropy Principle
- Category: Foundations
- Language: en
- Key Concepts: Key takeaway., m-flat, Energy-based models, 11. Visualisation: entropy decreases with constraints, The Maximum [[shannon-entropy|Entropy]] Principle, e-flat, Tsallis entropy, 6. Statistical mechanics: Boltzmann from MaxEnt, stretched exponentials, convex dual, 4. The MaxEnt zoo, 8. Generalisations: Tsallis and Rényi, Student's $t$-distribution, E. T. Jaynes, power laws
- References: bayesian-inference, exponential-families, finance/shannon-entropy, fisher-information, manifold-learning, math/analysis-geometry/information-geometry, math/information-theory, mle, statistical-mechanics
- Backlinks: course-math-for-ai, distributions-zoo, entropy-information, information-theory-basics

## Entity: topos-theory
- Title: Topos Theory
- Category: Foundations
- Language: en
- Key Concepts: AI Semantics, Alexandre Grothendieck, Etale Cohomology, Visualization: Truth Value Spectrum, Quantum Logic, Synthetic Differential Geometry, Holography, Exponentials, Related Topics, Independence Proofs, Finite Limits and Colimits, 1. As a Generalized Space (Grothendieck), Topos Theory, 2. As a Logical Universe (Lawvere-Tierney), Sheaves
- References: category-theory, homological-algebra, math/algebraic-topology
- Backlinks: category-theory, category-theory-ml, type-theory

## Entity: type-theory
- Title: Type Theory and Formal Logic
- Category: Foundations
- Language: en
- Key Concepts: Proofs are Programs, Curry-Howard isomorphism, Programs, 1. The Curry-Howard Correspondence, Univalence Axiom, 3. Homotopy Type Theory (HoTT), Lean, 4. Why It Matters for AI, Coq, Type, Software Safety, Related Topics, Propositions are Types, Dependent types, Neuro-symbolic AI
- References: category-theory, reasoning-models, topos-theory
- Backlinks: category-theory, category-theory-ml, homotopy-type-theory

## Entity: math/variational-calculus
- Title: Variational Calculus
- Category: Foundations
- Language: en
- Key Concepts: Noether's Theorem, Action, Brachistochrone:, Euler–Lagrange Equation, symmetries to conservation laws, Variational Calculus, ELBO, Classical Examples, Variational Principles in AI, functionals, The Core Problem, Hamilton's Principle:, 1. Physics-Informed Neural Networks (PINNs), Lagrangian, Related Topics
- References: lagrangian-mechanics, noether-theorem, variational-inference
- Backlinks: ai-physics/hamiltonian-nn, convex-optimization, math/differential-geometry, math/ode-stability

## Entity: math/cantor-diagonal
- Title: Cantor's Diagonal Argument
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Continuum Hypothesis, Related Articles, countable, Cantor's Diagonal Argument, Turing's halting problem, [[kolmogorov-complexity|Kolmogorov complexity]], Theorem: $\mathbb{R}$ is Uncountable, Cantor's theorem, Proof., Diagonalization beyond set theory, Python Demonstration, [[godel-incompleteness|Gödel's incompleteness theorems]], independent, Self-reference in [[chain-of-thought|chain-of-thought reasoning]], between
- References: chain-of-thought, kolmogorov-complexity, llm, math/banach-tarski, math/godel-incompleteness
- Backlinks: chain-of-thought, math/banach-tarski, math/godel-incompleteness

## Entity: math/godel-incompleteness
- Title: Gödel's Incompleteness Theorems
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Consequences, incomplete, halting problem, Gödel Numbering, cannot prove its own consistency, Related Articles, "I am unprovable in $T$", true but unprovable, Second Incompleteness Theorem, [[kolmogorov-complexity|Kolmogorov complexity]], Diagonalization lemma, First Incompleteness Theorem, Python Demonstration, Gödel's incompleteness theorems, The Gödel Sentence
- References: chain-of-thought, information-paradox, kolmogorov-complexity, llm, math/banach-tarski, math/cantor-diagonal, mechanistic-interpretability, transformer-architecture
- Backlinks: chain-of-thought, homotopy-type-theory, math/banach-tarski, math/cantor-diagonal, math/kolmogorov-probability-axioms, math/non-euclidean-geometry

## Entity: math/non-euclidean-geometry
- Title: Non-Euclidean Geometry
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: exactly one, Non-Euclidean geometry, [[general-relativity|general relativity]], Related Articles, The Parallel Postulate, Metric, Non-Euclidean Geometry, Three Geometries, Gaussian Curvature, Geodesics, Poincaré Disk Model, fifth postulate, Connection to Physics, Gauss's Theorema Egregium
- References: asymptotic-spacetime, bms-group, celestial-holography, general-relativity, gravitational-waves-gr, manifold-learning, math/banach-tarski, math/godel-incompleteness
- Backlinks: math/algebraic-topology, math/banach-tarski, math/differential-geometry

## Entity: math/banach-tarski
- Title: The Banach-Tarski Paradox
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Echoes in physics, without, Why This Is Not a Contradiction, Related Articles, non-measurable sets, Statement, Banach-Tarski paradox, The Role of the Axiom of Choice, measure theory and symmetry transformations break down at the quantum level, 1. Free Group on Two Generators, 3. Axiom of Choice, The Banach-Tarski Paradox, Axiom of Choice, two copies of itself, all subsets of $\mathbb{R}$ are Lebesgue measurable
- References: anomalies, math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry
- Backlinks: math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry

## Entity: operator-semigroups
- Title: Operator Semigroups
- Category: Functional Analysis
- Language: en
- Key Concepts: Markov Processes, Identity, Neural ODEs, spectral properties, The Hille-Yosida Theorem, Heat Equation, Related Topics, 3. Physical Examples, Partial Differential Equations (PDEs), Semigroup Property, Visualization: Smoothing Effect, 2. The Infinitesimal Generator ($A$), 4. Contractive Semigroups and Stability, Operator Semigroups: The Math of Evolution, Schrödinger Equation
- References: feller-processes, laplacian, neural-odes, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: dirichlet-forms, feller-processes, spectral-theorem-unbounded

## Entity: schwartz-distributions
- Title: Schwartz Distributions
- Category: Functional Analysis
- Language: en
- Key Concepts: Fundamental Solution, 4. Fundamental Solutions (Green's Functions), Fourier Transform, 1. The Core Idea: Functions as Linear Maps, 3. The Fourier Transform of Distributions, Tempered Distributions, Schwartz Space, every distribution has a derivative, Schwartz Distributions, Partial Differential Equations (PDEs), Convolution, Visualization: Derivative of a Step, Related Topics, Dirac Delta, Schwartz Distributions: Generalized Functions
- References: deep-galerkin, fourier-transform, laplacian, partial-differential-equations, spectral-graph-theory
- Backlinks: gff, microlocal-analysis

## Entity: sobolev-spaces
- Title: Sobolev Spaces & Weak Solutions
- Category: Functional Analysis
- Language: en
- Key Concepts: Weak Derivatives, Rellich-Kondrachov Theorem, Sobolev Embeddings, Sobolev Spaces $W^{k,p}$, Physics-Informed Neural Networks (PINNs), Sobolev Spaces & Weak Solutions
- Backlinks: deep-ritz-method, hilbert-banach-spaces, math/harmonic-analysis, math/lp-spaces, math/nonparametric-regression, math/spectral-theory-operators, math/topology-basics

## Entity: spectral-theorem-unbounded
- Title: Spectral Theorem for Unbounded Operators
- Category: Functional Analysis
- Language: en
- Key Concepts: Stochastic PDEs, Self-Adjointness: The Key Requirement, Functional Calculus, Kernel Methods, Visualization: Discrete vs. Continuous Spectrum, Stable Processes, Quantum Mechanics, Why It Matters in Physics and AI, unbounded, Related Topics, The Spectral Decomposition, Self-Adjointness, Spectral Theorem for Unbounded Operators, Spectral Measure, Schrödinger equation
- References: functional-analysis, math/spectral-theory-operators, operator-semigroups, spectral-graph-theory
- Backlinks: laplacian, operator-semigroups, quantum-math

## Entity: bayes-theorem
- Title: Bayes' Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: Logical Pitfalls, Related Topics, The Formula, uncertainty, Bayes' Theorem, $P(A|B)$ (Posterior):, Variational Autoencoders (VAE):, $P(B|A)$ (Likelihood):, Naive Bayes Classifier:, $P(B)$ (Evidence):, Bayesian Neural Networks:, Bayesian Inference:, Applications in AI, $P(A)$ (Prior):, Base Rate Fallacy
- References: naive-bayes, prm, variational-inference
- Backlinks: bayesian-networks, conditional-probability, map-estimation, probability-distributions, probability-paradoxes, statistical-inference

## Entity: combinatorics-induction
- Title: Combinatorics and Mathematical Induction
- Category: Fundamentals
- Language: en
- Key Concepts: Probability in Deep Learning, Pascal's Triangle, Permutations ($P_n$), 4. Why it Matters in CS and AI, Conclusion, Combinations ($C_n^k$), Mathematical Induction, not, 3. Mathematical Induction, Visualization: Pascal's Triangle (Combinations), Related Topics, 5. Pigeonhole Principle, Combinatorics and Induction: The Tools of Counting and Proving, Intuition: The Domino Effect, Hardware Design
- References: lln-clt, stablecoin-mechanisms
- Backlinks: number-theory-basics

## Entity: lagrange-multipliers
- Title: Constrained Optimization and Lagrange Multipliers
- Category: Fundamentals
- Language: en
- Key Concepts: tangent, B. Classical Mechanics, Action, Euler-Lagrange equations, C. Advanced: KKT Conditions, 1. The Core Problem, Visualization: Tangent Gradients, Karush-Kuhn-Tucker (KKT), Support Vectors, subject to, Constrained Optimization: The Method of Lagrange Multipliers, A. Support Vector Machines (SVMs), Lagrange Multipliers, 3. The Lagrangian Function ($\mathcal{L}$), Lagrange Multiplier
- References: ai-physics/hamiltonian-nn, convex-optimization, convex-optimization-trading, multivariable-calculus
- Backlinks: course-math-for-ai, linear-programming

## Entity: convexity
- Title: Convexity
- Category: Fundamentals
- Language: en
- Key Concepts: Log-Concave, C. Log-Concavity in Stats, 3. Applications, ELBO, Positive Semi-Definite, In AI, A. Support Vector Machines (SVM), Related Topics, In Finance, 4. Jensen's Inequality, The Hessian Test, 1. Mathematical Rigor, Non-Convex, 2. Why it is the "Holy Grail", Quadratic Convex Program
- References: convex-optimization, convex-optimization-trading, gradient-hessian-jacobian, martingale-optimal-transport, variational-autoencoders
- Backlinks: course-math-for-ai, fixed-point-theorems, jensen-inequality, jensens-inequality, logistic-regression, martingale-optimal-transport

## Entity: differential-equations
- Title: Differential Equations: The Laws of Change
- Category: Fundamentals
- Language: en
- Key Concepts: Euler methods, Exponential Growth, Second Order, ODE, 3. Linearity and Superposition, Decay, Harmonic Oscillator, Black-Scholes PDE, Analytical, Superposition Principle, Runge-Kutta, Numerical, Heat Equation, Differential Equations (DEs), Linearity
- References: automatic-differentiation, geometric-brownian-motion, ricci-flow, stochastic-differential-equations

## Entity: fourier-transform
- Title: Fourier Transform
- Category: Fundamentals
- Language: en
- Key Concepts: Fast Fourier Transform (FFT), 1. Fourier Series (Periodic Signals), Inverse Transform, Convolution Theorem, Frequency Domain, Geometric Deep Learning (GNNs), Positional Encodings, 2. The Fourier Transform (Continuous Case), 5. Why it Matters in AI and Science, Related Topics, Parseval's Theorem, 3. Discrete and Fast Transform (FFT), Intuition, 4. Key Properties, Uncertainty Principle
- References: finance/spectral-analysis, spectral-graph-theory
- Backlinks: characteristic-functions, complex-analysis, finance/dft, finance/fft, finance/prony-hankel-spectral, mgf, mgf-characteristic-functions, occupation-measures-local-times, schwartz-distributions

## Entity: gradient-hessian-jacobian
- Title: Gradient, Hessian, and Jacobian
- Category: Fundamentals
- Language: en
- Key Concepts: 1. The Gradient ($\nabla f$) - The Compass, Deep Learning, Newton's Method, Optimization, 2. The Jacobian ($J$) - The Linearizer, In AI, 4. Advanced Optimization: Beyond SGD, Linearization, Related Topics, Hessian-Free & K-FAC, Jacobian-Vector Products (JVP), Saddle Point, [[spectral-theory-operators|Eigenvalues]] and Stability, Local Minimum, Geometric Meaning
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, laplacian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, change-of-variables, convexity, course-math-for-ai, laplacian, optimization-basics, qat

## Entity: hilbert-banach-spaces
- Title: Hilbert and Banach Spaces
- Category: Fundamentals
- Language: en
- Key Concepts: Reflexivity., 3. Hilbert space, Uniform boundedness principle (Banach-Steinhaus), Definition., 6. Duality, Sobolev spaces, weak topology, kernel trick, 10. Quantum mechanics, Operator classes in a Hilbert space, 1. Normed space, reproducing kernel, Key Hilbert spaces, Spectral theorem (compact self-adjoint)., Open mapping theorem
- References: functional-analysis, gaussian-processes, kernel-methods-rkhs, math/lp-spaces, math/spectral-theory-operators, quantum-math, sobolev-spaces
- Backlinks: course-math-for-ai, fixed-point-theorems, math/functional-analysis, quantum-math

## Entity: calculus-integration
- Title: Integration and the Fundamental Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: Part 1, Visualization: Accumulation, Part 2, 5. Beyond Riemann: Lebesgue Integration, 4. Why it Matters in Science, B. Physics: Work and Energy, Integration and the Fundamental Theorem of Calculus, C. Finance: Risk Accumulation, 1. The Definite Integral (Riemann Sum), Related Topics, A. Probability and AI, Integration by Parts, Substitution (u-substitution), Intuition, Probability Density Function (PDF)
- References: measure-theory, taylor-series
- Backlinks: neural-radiance-fields-math

## Entity: lln-clt
- Title: LLN and CLT: The Pillars of Statistics
- Category: Fundamentals
- Language: en
- Key Concepts: 4. Limitations and "Fat Tails", 2. Central Limit Theorem (CLT), Lognormal, Hypothesis Testing, Normal Distribution, Finance, 1. Law of Large Numbers (LLN), 3. Why the CLT is the "Magic" of the Universe, Law of Large Numbers (LLN), Central Limit Theorem (CLT), sum, Related Topics, Error Modeling, finite variance, Strong LLN
- References: black-scholes, finance/black-swan-scenarios, finance/monte-carlo-method
- Backlinks: combinatorics-induction, course-math-for-ai, delta-method, discrete-random-variables, fundamental-inequalities, law-iterated-logarithm, probability-distributions, sequences-series-convergence

## Entity: laplacian
- Title: Laplacian Operator
- Category: Fundamentals
- Language: en
- Key Concepts: B. Curvature and Energy, 4. Relationship to the Hessian, into, Laplace Equation, Dirichlet Energy, 3. Role in Modern AI, The [[spectral-graph-theory|Laplacian]] Operator ($\Delta$), equilibrium, diffusion, and smoothness, Heat Equation, Physics-Informed Neural Networks (PINNs), Related Topics, Spectral Bias in Neural Networks, A. The Diffusion Engine, 2. Physical and Geometric Intuition, Diffusion Models
- References: diffusion-models, eigenvalues-eigenvectors, finance/shannon-entropy, gradient-hessian-jacobian, graph-neural-networks, math/spectral-theory-operators, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: course-math-for-ai, equivariant-diffusion-models, gff, gradient-hessian-jacobian, operator-semigroups, schwartz-distributions

## Entity: linear-programming
- Title: Linear Programming and Duality
- Category: Fundamentals
- Language: en
- Key Concepts: Simplex Algorithm, 3. Duality: The Hidden Logic, 4. Why it Matters in AI and Finance, C. Large-Scale Logistics, Linear Objective Function, 1. The Standard Form, Convex Polytope, Linear Equality and Inequality Constraints, Related Topics, Dual, Intuition, Linear Programming (LP), Visualization: The Feasible Region, Algorithm, 2. The Simplex Method
- References: convex-optimization-trading, lagrange-multipliers, optimal-transport
- Backlinks: course-math-for-ai

## Entity: linear-spaces-basis
- Title: Linear Spaces, Basis, and Dimension
- Category: Fundamentals
- Language: en
- Key Concepts: Commutativity, The Rank-Nullity Theorem, Visualization: Basis and Span, Existence of Zero, Uniqueness, Dimension, Linear Combination, Basis, Distributivity, Related Topics, both, Rank, 2. Linear Independence and Span, Span, Linear Spaces, Basis, and Dimension: The Scaffold of Algebra
- References: eigenvalues-eigenvectors, quantum-entanglement, quantum-information-entropy, tensor-calculus
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, linear-systems-gauss, taylor-series

## Entity: linear-systems-gauss
- Title: Linear Systems and Gaussian Elimination
- Category: Fundamentals
- Language: en
- Key Concepts: Gaussian Elimination, Gauss-Jordan Elimination, A. Computer Graphics, Reduced Row Echelon Form (RREF), 3. Existence and Uniqueness of Solutions, B. Finite Element Method (FEM), 4. Why it Matters in the Digital Age, 1. Matrix Representation, 2. Gaussian Elimination, Row Echelon Form (REF), Related Topics, Forward Elimination, Rank, Free Variables, Iterative Methods
- References: convex-optimization, eigenvalues-eigenvectors, linear-spaces-basis
- Backlinks: course-math-for-ai

## Entity: manifold
- Title: Manifold
- Category: Fundamentals
- Language: en
- Key Concepts: low-dimensional manifold, Neural Networks as Coordinate Seekers, 2. The Manifold Hypothesis in AI, Transition Maps, 3. Riemannian Manifolds: Measuring Distance, Atlas, 1. The Intuition: Atlas and Charts, Riemannian [[convex-optimization|Gradient Descent]], Riemannian Manifold, Differentiable Manifold, Related Topics, Real-world high-dimensional data is not spread uniformly across space., 4. Types of Manifolds in Wiki, Application: Riemannian Optimization, Geodesics
- References: complex-manifolds, convex-optimization, general-relativity, manifold-learning, math/differential-geometry, math/topology-basics, symplectic-geometry, variational-autoencoders
- Backlinks: course-math-for-ai, information-geometry-finance

## Entity: martingale
- Title: Martingale
- Category: Fundamentals
- Language: en
- Key Concepts: 3. Fundamental Theorems, B. Doob-Meyer Decomposition, Risk-Neutral Valuation, A. The Optional Stopping Theorem, 1. Definition, 2. Types of Martingales, Supermartingale, Risk-Neutral Pricing, 4. Why Tier-1 Quants Care, Related Topics, In Finance, The Fair Property, Submartingale, Efficient Market Hypothesis, Convergence of Algorithms
- References: brownian-motion, feller-processes, finance/shannon-entropy, martingale-optimal-transport, risk-neutral-valuation
- Backlinks: course-math-for-ai, martingale-optimal-transport, measure-theory

## Entity: measure-theory
- Title: Measure Theory Basics
- Category: Fundamentals
- Language: en
- Key Concepts: Expected Shortfall (ES), A. Radon-Nikodym Theorem, Measure Theory Basics: The Foundation of Probability, B. Fatou's Lemma and Monotone Convergence, 3. Crucial Theorems for AI and Finance, Continuous-time Martingales, Radon-Nikodym Derivative, Countable Additivity, 4. Why Tier-1 Quants Care, Related Topics, In Finance, A. Sigma-Algebras ($\mathcal{F}$), Null empty set, 2. Key Concepts, Detailed Sections
- References: frtb-es, martingale, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: axiomatic-probability, bayesian-inference, calculus-integration, continuous-random-variables, course-math-for-ai, dirichlet-forms, markov-chebyshev

## Entity: metric-spaces
- Title: Metric Spaces and Topology
- Category: Fundamentals
- Language: en
- Key Concepts: A. Compactness, Cosine Similarity, Topologically Continuous, Metric Spaces, Compact, Metric Space, 3. Key Concepts, Open Sets, [[manifold-learning|Manifold]], [[manifold-learning|Manifold]] Learning, Complete, 1. What is a Metric?, Manhattan ($L_1$), Metric Spaces and Topology: The Fabric of Continuity, Related Topics
- References: ai-theory/adversarial-examples, lending-mechanics, manifold-learning, optimal-transport

## Entity: multivariable-calculus
- Title: Multivariable Calculus: Jacobians and Hessians
- Category: Fundamentals
- Language: en
- Key Concepts: Multivariable Calculus: The Language of Optimization, Linear Approximation, AI Application, TensorFlow, Multivariable Calculus, Optimization, Jacobian, [[convex-optimization|Gradient Descent]], 3. The Hessian Matrix ($\mathbf{H}$), steepest ascent, Related Topics, Delta, 4. Why it Matters for High-Finance, 5. The Chain Rule in Higher Dimensions, Gamma
- References: automatic-differentiation, black-scholes, convex-optimization, math/analysis-geometry/information-geometry, math/spectral-theory-operators, taylor-series
- Backlinks: course-math-for-ai, lagrange-multipliers, taylor-series

## Entity: number-theory-basics
- Title: Number Theory and Cryptography
- Category: Fundamentals
- Language: en
- Key Concepts: Greatest Common Divisor (GCD), 4. The Euclidean Algorithm, Extended Version, Diffie-Hellman Key Exchange, Elliptic Curve Cryptography (ECC), Modular Arithmetic, 3. Fermat's Little Theorem, 5. Hash Functions and Collisions, Visualization: Modular Cycles, Related Topics, Modulus, 1. Divisibility and Prime Numbers, Public Key Cryptography, Euclidean Algorithm, 2. Modular Arithmetic (Clock Math)
- References: cedefi-gateway-architecture, cedefi-mechanics, combinatorics-induction

## Entity: taylor-series
- Title: Taylor Series and Approximation
- Category: Fundamentals
- Language: en
- Key Concepts: C. Optimization, B. Euler's Identity, Second-order Taylor expansion, Taylor Series: The Art of Polynomial Approximation, 2. Intuition: Local Linearization and Beyond, Related Topics, 2nd Order (Quadratic), Geometric, Maclaurin Series, 1st Order (Linear), 1. The Taylor Formula, A. Small Angle Approximation, 4. Why it Matters in Physics and AI, Tangent Line, Curvature
- References: black-scholes, linear-spaces-basis, multivariable-calculus
- Backlinks: calculus-integration, course-math-for-ai, multivariable-calculus, sequences-series-convergence

## Entity: ads-cft-deep
- Title: AdS/CFT Correspondence
- Category: Holography
- Language: en
- Key Concepts: Computational Complexity, Strange Metals, Holographic Principle, EPR, Boundary, gravity is not a fundamental force, negative cosmological constant, 1. The Two Sides of the Bridge, 4. Why Tier-1 Scientists Care, AdS/CFT Correspondence: The Holographic Principle, Spacetime and Entanglement, Symmetric under Scaling, Quantum Complexity, Related Topics, Anti-de Sitter Space (AdS)
- References: black-hole-thermodynamics, conformal-field-theory, quantum-information-entropy
- Backlinks: quantum-information-entropy

## Entity: agentic-patterns
- Title: Agentic Design Patterns
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Agentic Design Patterns, ReAct, Why, What Is It, 3. Tool Use (Reasoning + Acting), Mathematical Perspective: Iterative Refinement, Workflow, 4. Multi-Agent Collaboration, Agentic Workflows, Core Patterns, 2. Planning, New Standard, Related Topics, Visualization: Single Pass vs. Agentic, 1. Reflection (Self-Correction)
- References: agents, llm, mcp, tool-use

## Entity: preference-optimization
- Title: Beyond DPO: KTO & IPO
- Category: LLM Infrastructure
- Language: en
- Key Concepts: IPO, 1. KTO: Kahneman-Tversky Optimization, Unpaired (Binary), overfitting problem, High, Prospect Theory, Direct Preference Optimization ([[dpo]]), Diversity, Data Requirement, The Key Idea, Data Efficiency, Beyond [[dpo]]: KTO and IPO, Best For, Human-Centric, Which One to Choose?
- References: dpo, fine-tuning, rlhf
- Backlinks: llm

## Entity: chain-of-thought
- Title: Chain-of-Thought Reasoning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Standard few-shot CoT:, Multi-step quantitative finance:, Zero-shot CoT:, Theoretical limits, Tree of Thoughts (ToT):, Extended thinking:, [[kolmogorov-complexity|Kolmogorov complexity]], Variants & Extensions, Medical diagnosis:, Emergent behavior:, Mathematical / Formal Framework, Process reward models (PRMs):, Practical Applications, Code generation:, Related Topics
- References: fine-tuning, kolmogorov-complexity, llm, math/cantor-diagonal, math/godel-incompleteness, mcp, mechanistic-interpretability, rag, rlhf, speculative-decoding, tool-use, transformer-architecture
- Backlinks: agents, ai-theory/in-context-learning, evaluation-llms, math/cantor-diagonal, math/godel-incompleteness, mcp, meta-learning, prm, reasoning-models, rlhf, test-time-scaling, tool-use

## Entity: context-length
- Title: Context Length Extension
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Current Landscape, only on relative position, Context Length Extension, GPT-4, Claude 3, RoPE Scaling, Gemini 1.5, RoPE: Rotary Position Embedding, FlashAttention and Memory-Efficient Long Context, Sliding Window Attention, Retrieval-Augmented Context, The "Lost in the Middle" Problem, requires no retraining to extend context, The Sinusoidal Baseline and Its Limits, Llama 3
- References: attention-mechanisms, fine-tuning, inference-serving, llm, rag, speculative-decoding, state-space-models, transformer-architecture, vector-databases

## Entity: continuous-batching
- Title: Continuous Batching
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Decode Phase, Visualization: Static vs. Continuous, Related Topics, chunked prefill, Eviction, Operate at the iteration (token) level, not the request level, The Problem with Static Batching, The Orca Breakthrough, Prefill Phase, Insertion, 10x to 20x, Continuous Batching (In-Flight Batching), padded, The Two Phases of Generation, Why It Matters
- References: hardware-io-attention, inference-serving, llm, paged-attention
- Backlinks: speculative-decoding

## Entity: curriculum-learning
- Title: Curriculum Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Competence Scaling, Curriculum Learning, 1. Predefined Curriculum, Zone of Proximal Development, Related Topics, Better Generalization, Applications in LLMs, Context Length, Visualization: Learning Dynamics, Types of Curricula, Reasoning, Mathematical Formulation, 2. Automated Curriculum Learning (ACL), Coding, complexity
- References: fine-tuning, neural-scaling-laws, training-dynamics

## Entity: dl-compilers
- Title: Deep Learning Compilers
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Visualization: The Compilation Pipeline, 1. XLA (Accelerated Linear Algebra), The Problem: Kernel Launch Overhead and Memory Bound, Deep Learning Compilers, Deep Learning Compilers and Kernel Fusion, 3. `torch.compile` (PyTorch 2.0), 2. Triton, Why It Matters, Related Topics, The Solution: Operator Fusion, Operator Fusion, Technologies: XLA, Triton, and `torch.compile`
- References: flash-attention, gpu-architecture, hardware-io-attention, inference-serving, moe-routing
- Backlinks: flash-attention, gpu-architecture

## Entity: dpo
- Title: Direct Preference Optimization (DPO)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Likelihood Over-optimization, The Mathematical Breakthrough, Complexity, Direct Preference Optimization (DPO), Sampling, Comparison: DPO vs. [[rlhf]], binary cross-[[shannon-entropy|entropy]] loss, rejected, Implementation with `trl`, [[rlhf]], Related Topics, Dataset Quality, Limitations, Compute, Reference Model Dependency
- References: agents, finance/shannon-entropy, fine-tuning, llm, rlhf
- Backlinks: language-models/safety/rlhf-dpo, llm, preference-optimization, preference-optimization-variants, rlhf, self-rewarding

## Entity: distributed-training
- Title: Distributed Training
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 1. The Three Pillars of Parallelism, ZeRO-2, Gradients, Weights, Micro-batching, Distributed Training: Scaling LLMs to Trillions of Parameters, Modern Solution, Problem, 4. Why Tier-1 Engineers care, DDP (Distributed Data Parallel), Distributed Training, ZeRO, 3. Communication Collectives, Optimizer States, Related Topics
- References: fine-tuning, flash-attention, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: fsdp, hardware-io-attention, model-parallelism, tensor-decompositions

## Entity: federated-learning
- Title: Federated Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 3. System Heterogeneity, LoRA, Broadcast, Upload, Applications, 2. Communication Efficiency, Federated Averaging (FedAvg), Finance, Aggregation, Related Topics, The Core Algorithm: FedAvg, Smart Keyboards, Mobile Health, [[quantization]], Federated Learning
- References: differential-privacy, fine-tuning, llm, quantization
- Backlinks: differential-privacy

## Entity: flash-attention
- Title: FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Speed, Memory, Claude 3, HBM (High Bandwidth Memory), FlashAttention: Fast and Memory-Efficient [[attention-mechanisms|Attention]] with Tiling, does not store it, SRAM, 1. The Bottleneck: The Memory Wall, Streaming Multiprocessors (SMs), 16 GB, Tri Dao et al. (2022), IO-Aware, Related Topics, 4. FlashAttention-2 and Beyond, 2. The Solution: Tiling and Recomputation
- References: attention-mechanisms, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, distributed-training, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, language-models/mamba-ssm, paged-attention, rope-scaling

## Entity: fsdp
- Title: Fully Sharded Data Parallel (FSDP)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Distributed Data Parallel (DDP), Complexity, How FSDP Works, Weights, Communication Efficiency, Sharded, The Lifecycle of a Layer, Discard, Virtually unlimited, Backward Pass, Fully Sharded Data Parallel (FSDP), Key Advantages, Forward Pass, Related Topics, Massive Memory Savings
- References: distributed-training, fine-tuning, inference-serving, model-parallelism
- Backlinks: model-parallelism

## Entity: gpu-architecture
- Title: GPU Architecture for Deep Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 3. Tensor Cores, 2. Threads and Warps, Alignment, [[inference-serving|GPU]] Architecture: SMs, Warps, and Tensor Cores, Warp, Tensor Cores, must be multiples of 8, 16, or 32, Streaming Multiprocessors (SMs), Visualization: Matrix Multiplication, L1 Cache / Shared Memory, single clock cycle, Related Topics, Mixed Precision, Thread, 32 threads
- References: attention-mechanisms, dl-compilers, flash-attention, hardware-io-attention, inference-serving, modern-quantization
- Backlinks: distributed-training, dl-compilers, flash-attention, modern-quantization

## Entity: hardware-io-attention
- Title: Hardware IO and FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Related Topics, [[flash-attention|HBM]] (High Bandwidth Memory), 90% of its time waiting, Speed, Tiling, Size, The Memory Hierarchy of a [[inference-serving|GPU]], Why It Matters for the Future, entirely within SRAM, Hardware IO and the Physics of FlashAttention, FlashAttention: IO-Awareness, Communication-Avoiding, Role, Visualization: Memory Speed vs. Access, The "Memory Wall" Problem
- References: attention-mechanisms, distributed-training, flash-attention, inference-serving
- Backlinks: continuous-batching, distributed-training, dl-compilers, flash-attention, gpu-architecture, paged-attention

## Entity: agents
- Title: LLM Agents
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Action parsing:, Hallucinated Tool Calls, Information retrieval:, reliability remains unsolved, Current Frontier and Reliability, Computation:, Compression:, max_steps, Pseudocode:, Failure Modes and Challenges, Propose:, Model invocation:, Reflection and Debate, Reasoning models (o1/o3):, Critique:
- References: chain-of-thought, fine-tuning, llm, mcp, rag, reinforcement-learning, tool-use
- Backlinks: agentic-patterns, dpo, inference-serving, prompt-engineering, vector-databases

## Entity: evaluation-llms
- Title: LLM Evaluation
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Membership inference, HELM, Genuine emergence, BIG-Bench and BIG-Bench Hard, N-gram overlap, Multi-Turn Preference Evaluation, Chatbot Arena, Knowledge & Reasoning Benchmarks, Best Practices for Honest Evaluation, Rotate benchmarks monthly., use calibrated, continuous metrics, Emergence and Scaling: Artifact or Reality?, Contamination: Structural Problem, MT-Bench, Code Generation: Pass@k Metric
- References: chain-of-thought, llm, rlhf
- Backlinks: ai-theory/knowledge-distillation, bayesian-deep-learning, prompt-engineering

## Entity: fine-tuning
- Title: LLM Fine-Tuning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Adapter Layers, LoRA, Full Fine-Tuning, Practical Guidelines, Data, Instruction tuning, Instruction Tuning vs. [[rlhf]], Prompt Tuning, Parameter reduction:, LoRA rank, When to Fine-Tune, Fine-tune if:, [[rlhf]], Learning rate, PEFT: Parameter-Efficient Fine-Tuning
- References: attention-mechanisms, convex-optimization, inference-serving, quantization, rag, rlhf, transformer-architecture
- Backlinks: adalora, agents, ai-theory/in-context-learning, ai-theory/knowledge-distillation, chain-of-thought, code-models, constitutional-ai, context-length, contrastive-learning, curriculum-learning, distributed-training, dora, dpo, effective-field-theory, federated-learning, fsdp, language-models/safety/rlhf-dpo, llm, llm-financial-analysis, lora-peft, mixture-of-experts, ml-options-pricing, model-merging, modern-quantization, nlp-financial-analysis, positional-encodings, preference-optimization, prompt-engineering, qat, qlora, quantization, rag, rlhf, self-rewarding, slm, synthetic-data-alignment, tool-use, training-dynamics, weight-averaging

## Entity: inference-serving
- Title: LLM Inference Serving
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Continuous batching: asynchronous pipeline, Related topics, GPU utilization, Text Generation Inference, TensorRT-[[llm]], continuous batching, Token budgets, Flash [[attention-mechanisms|Attention]] for long contexts, block table, Fragmentation elimination, pages, Production systems, time-to-first-token (TTFT), KV-cache: the memory-compute trade-off, memory-bound
- References: agents, attention-mechanisms, flash-attention, llm, mixture-of-experts, quantization, speculative-decoding, transformer-architecture
- Backlinks: attention-mechanisms, automatic-differentiation, context-length, continuous-batching, distributed-training, dl-compilers, finance/monte-carlo-method, finance/xva, fine-tuning, flash-attention, fsdp, gpu-architecture, hardware-io-attention, language-models/mamba-ssm, llm-financial-analysis, lora-peft, mla, model-merging, model-parallelism, modern-quantization, paged-attention, quantization, queuing-theory, rope-scaling, slm, speculative-decoding, temporal-fusion-transformer, tokenization, vector-databases, volatility-modulated-spectral-surface

## Entity: lora-peft
- Title: LoRA and PEFT
- Category: LLM Infrastructure
- Language: en
- Key Concepts: low intrinsic rank, Related Topics, Prompt Tuning, Advantages of LoRA, LoRA, Visualization: Rank vs. Parameters, Multi-tenancy, QLoRA, Portability, The Mathematical Intuition, Parameter-Efficient [[fine-tuning]] (PEFT), VRAM Savings, Prefix Tuning, rank $r \ll d$, LoRA and Parameter-Efficient [[fine-tuning]] (PEFT)
- References: fine-tuning, inference-serving, quantization, tensor-decompositions, transformer-architecture

## Entity: mcp
- Title: MCP (Model Context Protocol)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Enterprise knowledge access:, capability-based access control, Multi-agent MCP:, Overhead:, Remote MCP over HTTP:, Solves:, QuantLib-backed pricers, Variants & Extensions, Data science workflows:, Prompts, MCP vs. Direct Function Calling, MCP for quantitative finance, HTTP + SSE (Server-Sent Events):, Sampling, Does not solve:
- References: chain-of-thought, llm, llm-financial-analysis, rag, slm, speculative-decoding, tool-use
- Backlinks: agentic-patterns, agents, chain-of-thought, tool-use

## Entity: model-parallelism
- Title: Model Parallelism: Tensor and Pipeline
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Solution: Micro-batching, The Idea, 3D Parallelism, Visualization: The Pipeline Bubble, Data Parallelism (DP/ZeRO), Hardware, Pros, Tensor Parallelism (TP), Related Topics, The Problem: Pipeline Bubbles, Model Parallelism, NVLink, Split unit, 3. Comparison and 3D Parallelism, Efficiency
- References: attention-mechanisms, distributed-training, fsdp, inference-serving, transformer-architecture
- Backlinks: fsdp

## Entity: quantization
- Title: Model Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: llama.cpp, Post-Training Quantization: GPTQ, See Also, activation scales, Integration with Inference Pipelines, second-order optimization, Q8_0, symmetric, Accuracy Trade-offs, equal quantile spacing, Weight vs. Activation Quantization, NF4: 4-Bit Normal Float, Memory Footprint Calculations, Absmax Quantization, Activation-Aware Weight Quantization: AWQ
- References: attention-mechanisms, fine-tuning, inference-serving, llm, mixture-of-experts, neural-scaling-laws, speculative-decoding, transformer-architecture
- Backlinks: ai-theory/knowledge-distillation, bitnet, conformal-field-theory, federated-learning, fine-tuning, hamiltonian-mechanics, homological-algebra, inference-serving, linear-algebra, lora-peft, modern-quantization, pauli-exclusion-quantization, qat, qft-basic, qlora, quantization-error-math, quantization-ptq-information, research/mla-financial-reasoning, slm, small-ball-probabilities, vector-databases

## Entity: modern-quantization
- Title: Modern Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Hopper (H100), bitsandbytes, 1% of weights, Normal (Gaussian) Distribution, FP8, Modern [[quantization]]: NF4, GPTQ, and AWQ, Mechanism, 4. AWQ: Activation-aware Quantization, 5. FP8 and the Future, Related Topics, Training, 3. GPTQ: Post-Training Quantization (PTQ), 1. The Challenge of Low Precision, 2. NormalFloat4 (NF4): Quantization for All, Visualization: Distribution-Aware Binning
- References: fine-tuning, gpu-architecture, inference-serving, quantization
- Backlinks: deep-lob, gpu-architecture, qat, tensor-decompositions

## Entity: orm-prm
- Title: ORM vs PRM: Preference Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Excellent, The Cons, final answer, 1. Outcome Reward Models (ORM), 2. Process Reward Models (PRM), Implementation in [[rlhf]], The Signal, each individual step, ORM vs PRM: Two Ways to Reward Reasoning, how to reward, Inference-time Search, Related Topics, PRM, Yes, False Positives
- References: llm, mcts, prm, reasoning-models, rlhf

## Entity: paged-attention
- Title: PagedAttention and KV Cache
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Solution: Operating System Inspiration, Block Tables, Paging, 2. Prompt Sharing, external fragmentation, Fragmentation, KV Cache, PagedAttention and KV Cache Management, share the same physical blocks, Key Advantages, The Problem: Memory Fragmentation, Visualization: Paged Memory Allocation, Related Topics, Logical vs. Physical, internal fragmentation
- References: attention-mechanisms, flash-attention, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, continuous-batching

## Entity: prompt-engineering
- Title: Prompt Engineering
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Assistant turn, Prompt Sensitivity and Optimization, APE, prompt optimization, Chain-of-Thought Prompting, Zero-shot and Few-shot Learning, System Prompts and Jailbreaking, DSPy, Tree of Thoughts, User turn, Structured Output and Grammar Constraints, Reasoning and Acting (ReAct), Tree of Thoughts and Search, System message, Self-consistency
- References: agents, evaluation-llms, fine-tuning, llm, meta-learning, rlhf, tool-use
- Backlinks: ai-theory/in-context-learning

## Entity: qat
- Title: Quantization Aware Training (QAT)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: QAT (Aware Training), Fake [[quantization]], 5. Modern Variant: QLoRA, Backward Pass, 3. LSQ: Learned Step Size Quantization, 4. QAT vs. PTQ: When to use which?, 2-bit or 3-bit, Related Topics, QLoRA, Straight-Through Estimator (STE), Step Size, 2. Straight-Through Estimator (STE), Visualization: STE Gradient Flow, Forward Pass, 1. The Simulated [[quantization]] (Fake Quant)
- References: automatic-differentiation, fine-tuning, gradient-hessian-jacobian, modern-quantization, quantization

## Entity: rag
- Title: RAG (Retrieval-Augmented Generation)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Global Queries, Context Precision, The Advanced Pipeline, Keyword Search, Evaluation: RAGAS, HyDE (Hypothetical Document Embeddings), Faithfulness, Knowledge Graphs, Retrieval (Hybrid Search), Context Recall, RAG (Retrieval-Augmented Generation), Cross-Encoder Reranker, Related Topics, Multi-Query, Vector Search
- References: embedding-models, fine-tuning, llm, llm-financial-analysis, tool-use, vector-databases
- Backlinks: about, agents, chain-of-thought, context-length, embedding-models, fine-tuning, llm-financial-analysis, mcp, naive-bayes, nlp-financial-analysis, projects/llm-wiki, research/mla-financial-reasoning, slm, tool-use, vector-databases

## Entity: self-rewarding
- Title: Self-Rewarding Models
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Mathematical Formulation: Iterative [[dpo]], Data Curation, Self-Rewarding Language Models, Echo Chambers, DeepSeek-R1, Real-World Examples, Visualization: Performance Scaling, Self-Evaluation, Related Topics, Risks and Limitations, Why It Works, Response Generation, Repeat, student, [[dpo]]/[[fine-tuning]]
- References: dpo, fine-tuning, prm, reasoning-models

## Entity: speculative-decoding
- Title: Speculative Decoding
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Verifying, lossless, Drafting, Visualization: Parallel Verification, Target Model, Mathematical Reasoning, Performance Gains, The Core Concept, Related Topics, 1. Medusa (Draft-less Speculative Decoding), memory-bound, The Workflow, Accepting, 3. Self-Speculative Decoding, Acceptance Rate
- References: continuous-batching, inference-serving, kv-cache-compression, llm, multi-token-prediction, prm
- Backlinks: chain-of-thought, context-length, inference-serving, mcp, multi-token-prediction, quantization, tool-use

## Entity: tokenization
- Title: Tokenization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: likelihood ratio, Characters, Byte-level BPE, Common Algorithms, 2. WordPiece, prunes, Whitespace, Byte-level models, Related Topics, Why Not Characters or Words?, Tokenization, Fertility, Artifacts and Challenges, 1. Byte-Pair Encoding (BPE), 3. Unigram Language Model
- References: attention-mechanisms, inference-serving, transformer-architecture

## Entity: tool-use
- Title: Tool Use / Function Calling
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Cost:, Tool Safety Architecture, Forced tool use, agent, Solves:, Step 3 — Tool execution., Step 4 — Result injection., Tool use with streaming, Variants & Extensions, [[mcp]] (Model Context Protocol), Does not solve:, Mathematical / Formal Framework, Write tools, Read-only tools, Practical Applications
- References: chain-of-thought, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, mcp, rag, reinforcement-learning, speculative-decoding
- Backlinks: agentic-patterns, agents, chain-of-thought, mcp, prompt-engineering, rag, research/mla-financial-reasoning

## Entity: vector-databases
- Title: Vector Databases
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Idea, Complexity, IVF: Inverted File Index, Trade-off, IndexFlatL2, IndexIVFPQ, Retrieval, IndexIVFFlat, HNSW: Hierarchical Navigable Small World, and, See Also, Problem, Pinecone, Product [[quantization]] (PQ), Architecture
- References: agents, embedding-models, inference-serving, llm, quantization, rag, transformer-architecture
- Backlinks: context-length, matryoshka-embeddings, rag

## Entity: weight-averaging
- Title: Weight Averaging and SWA
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Stochastic Weight Averaging (SWA), Polyak-Ruppert Averaging (EMA), flatness, Exponential Moving Average (EMA), flat minima, sharp minimum, Weight Averaging and Stochastic Weight Averaging (SWA), The Problem: Sharp Minima, Visualization: Converging to the Center, Related Topics, Phase 1, Why It Works: The Flatness Hypothesis, Phase 2, Averaging
- References: fine-tuning, model-merging, training-dynamics

## Entity: preference-optimization-variants
- Title: Advanced Preference Optimization
- Category: Language Models
- Language: en
- Key Concepts: unpaired data, IPO, Related Topics, Step-wise DPO, 1. KTO (Kahneman-Tversky Optimization), DPO, Comparison of Methods, Beyond [[dpo]], Advanced Preference Optimization, 3. ORM and PRM Integration, 2. IPO (Identity Preference Optimization), Prospect Theory, Process-based, KTO, PRM (Process Reward Model)
- References: dpo, prm, reasoning-models, rlhf
- Backlinks: synthetic-data-alignment

## Entity: language-models/safety/rlhf-dpo
- Title: Alignment: RLHF and DPO
- Category: Language Models
- Language: en
- Key Concepts: SFT (Supervised [[fine-tuning]]):, Constitutional AI, [[dpo]] (Direct Preference Optimization), Complexity, Reward Modeling:, Compute, Alignment: [[rlhf]] and [[dpo]], [[rlhf]] vs. DPO, Alignment, The Core Idea:, PPO (Proximal Policy Optimization):, Drawbacks:, Related Topics, [[rlhf]] (Reinforcement Learning from Human Feedback), Reward Model (RM)
- References: constitutional-ai, dpo, finance/shannon-entropy, fine-tuning, llm, math/analysis-geometry/information-geometry, mechanistic-interpretability, rlhf

## Entity: bitnet
- Title: BitNet & 1.58-bit LLMs
- Category: Language Models
- Language: en
- Key Concepts: Related Topics, BitNet & 1.58-bit LLMs (Ternary [[quantization]]), Small Model Gap, What Is It, Memory Footprint, Activation Quantization, How It Works, Scaling Laws, Training Complexity, Trade-offs, Hardware Optimization, Benefits, Energy Efficiency, Visualization, BitLinear
- References: llm, mixture-of-experts, neural-scaling-laws, quantization, reasoning-models, slm, transformer-architecture

## Entity: code-models
- Title: Code Language Models
- Category: Language Models
- Language: en
- Key Concepts: Long-range dependencies, Docstring and comment generation, Positional encoding, RLEF, Execution environment unawareness, Test generation, Rare languages and frameworks, Code Language Models, Architecture, Execution feedback objective (RLEF), Key Properties & Capabilities, Supervised [[fine-tuning]] (SFT), Multi-file awareness, Related Topics, FIM training
- References: attention-mechanisms, fine-tuning, llm, mixture-of-experts, pac-learning, slm, transformer-architecture
- Backlinks: multi-token-prediction

## Entity: constitutional-ai
- Title: Constitutional AI and RLAIF
- Category: Language Models
- Language: en
- Key Concepts: Subjective, Constitutional AI (CAI), Expensive, Transparency, 3. The Constitution, 2. The CAI Process, [[rlhf]], Related Topics, Critique, Feedback Model, RLAIF, Black-box, Generation, Phase 1: Supervised Learning (Critique and Revision), [[fine-tuning]]
- References: fine-tuning, llm, mechanistic-interpretability, reinforcement-learning, rlhf
- Backlinks: language-models/safety/rlhf-dpo, mechanistic-interpretability

## Entity: embedding-models
- Title: Embedding Models
- Category: Language Models
- Language: en
- Key Concepts: Language and script coverage, Embedding Models, Long documents, Anomaly detection, Hard negative mining, bidirectional [[transformer-architecture|transformer]] encoder, Architecture, Key Properties & Capabilities, Semantic search, Mathematical Framework, Related Topics, Matryoshka Representation Learning (MRL), Multi-vector representations, Limitations, Clustering
- References: attention-mechanisms, finance/shannon-entropy, llm, mixture-of-experts, rag, transformer-architecture, vlm
- Backlinks: contrastive-learning, llm, matryoshka-embeddings, rag, slm, vector-databases, vlm

## Entity: llm
- Title: Large Language Models (LLMs)
- Category: Language Models
- Language: en
- Key Concepts: Positional encoding, Pre-training objective, Prompt sensitivity, Instruction following, Hallucination, Knowledge, Layer normalization, Chinchilla scaling law, Static knowledge, Architecture, Key Properties & Capabilities, Rotary Position Embedding (RoPE), Autoregressive generation, Related Topics, Large Language Models (LLMs)
- References: attention-mechanisms, dpo, embedding-models, fine-tuning, mechanistic-interpretability, mixture-of-experts, model-merging, neural-scaling-laws, preference-optimization, prm, reasoning-models, rlhf, slm, transformer-architecture
- Backlinks: about, agentic-patterns, agents, attention-mechanisms, bert, bitnet, chain-of-thought, code-models, constitutional-ai, context-length, continuous-batching, distributed-training, dpo, embedding-models, evaluation-llms, f-divergences, federated-learning, flash-attention, generative-models, gnn-credit-risk, gpt-architecture, inference-serving, language-models/safety/rlhf-dpo, llm-financial-analysis, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/cantor-diagonal, math/godel-incompleteness, matryoshka-embeddings, mcp, mechanism-design, meta-learning, mixture-of-experts, ml-options-pricing, model-merging, multi-token-prediction, naive-bayes, nlp-financial-analysis, orm-prm, paged-attention, positional-encodings, ppo, projects/llm-wiki, projects/vibefix, prompt-engineering, quantization, rag, reasoning-models, rlhf, slm, sparse-autoencoders, speculative-decoding, state-space-models, superposition, test-time-scaling, tool-use, vector-databases, vlm

## Entity: matryoshka-embeddings
- Title: Matryoshka Embeddings
- Category: Language Models
- Language: en
- Key Concepts: Storage Savings, What Is It, Low Latency, Nested Loss Function, How It Works, Adaptive Accuracy/Efficiency Trade-off, Use Cases, Benefits, On-device AI, No Re-indexing, Visualization, Related Topics, Hierarchical Navigation, Matryoshka Embeddings (MRL), Vector Search
- References: embedding-models, llm, vector-databases, vlm

## Entity: mixture-of-experts
- Title: Mixture of Experts (MoE)
- Category: Language Models
- Language: en
- Key Concepts: Gradient flow, Expert dropout, Router initialization, Architecture, Memory cost, Router (gating network), Key Properties & Capabilities, Load balancing auxiliary loss, [[fine-tuning]] difficulty, Related Topics, Parameter efficiency, Memory vs. compute asymmetry, Token dropping and inconsistency, Expert utilization and load imbalance, MoE layer
- References: fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, slm, transformer-architecture
- Backlinks: bayesian-nonparametrics, bitnet, code-models, embedding-models, inference-serving, llm, mla, model-merging, moe-routing, quantization, slm, state-space-models, transformer-architecture

## Entity: moe-routing
- Title: MoE Routing and Specialization
- Category: Language Models
- Language: en
- Key Concepts: Advanced Routing Strategies, Mixture of Experts (MoE), 3. DeepSeek-V3: Multi-Head Latent [[attention-mechanisms|Attention]] & DeepSeekMoE, 1. Switch [[transformer-architecture|Transformer]] (Top-1), 2. Expert Overflow, How Routing Works, shared experts, Solution, MoE Routing and Expert Specialization, Visualization: Token Distribution, Top-k Routing, experts choose tokens, Routing Challenges, 2. Expert Choice Routing, Related Topics
- References: attention-mechanisms, mixture-of-experts, mla, transformer-architecture
- Backlinks: dl-compilers

## Entity: model-merging
- Title: Model Merging & FrankenMoE
- Category: Language Models
- Language: en
- Key Concepts: Model Merging & FrankenMoE, Reset, Model Merging, Flexibility, Performance, FrankenMoE, Advantages and Limitations, 1. SLERP (Spherical Linear Interpolation), Merging Techniques, 3. DARE (Drop And REscale), Related Topics, Expert Models, MergeKit, Compute, Resolve signs
- References: fine-tuning, inference-serving, llm, mixture-of-experts
- Backlinks: llm, weight-averaging

## Entity: mla
- Title: Multi-Head Latent Attention (MLA)
- Category: Language Models
- Language: en
- Key Concepts: RoPE, Comparison: KV-Cache Per Token, DeepSeek (V2/V3), latent vector, Multi-Head Latent [[attention-mechanisms|Attention]] (MLA), Decoupled Rotary Positional Embeddings, GQA, better compression than GQA, MLA, The Architecture: Low-Rank Compression, Content Part, Related Topics, ~5% - 10%, Grouped-Query [[attention-mechanisms|Attention]] (GQA), large-scale MoE
- References: attention-mechanisms, inference-serving, mixture-of-experts
- Backlinks: moe-routing, rope-scaling

## Entity: multi-token-prediction
- Title: Multi-Token Prediction
- Category: Language Models
- Language: en
- Key Concepts: Sample Efficiency, Better Long-Term Dependency, Improved Reasoning, $n$ Prediction Heads, Benefits, Meta AI (2024), Architecture: Shared Trunk and Independent Heads, The Core Concept, Related Topics, Multi-Token Prediction (MTP), Inference Speedup, Shared Trunk, Why It Works, The Modified Loss Function
- References: code-models, finance/shannon-entropy, llm, speculative-decoding, training-dynamics, transformer-architecture
- Backlinks: speculative-decoding

## Entity: positional-encodings
- Title: Positional Encodings
- Category: Language Models
- Language: en
- Key Concepts: RoPE, Absolute Positional Encodings, ALiBi (Press et al. 2022)., Learned absolute., YaRN, Positional Encodings, RoPE: Rotary Position Embedding, Extrapolation Beyond Training Length, T5 Relative Bias., Positional encodings, Context Extension: YaRN, Related Topics, Comparison Summary, Sinusoidal (Vaswani et al. 2017)., Relative Positional Encodings
- References: attention-mechanisms, fine-tuning, llm, neural-scaling-laws, transformer-architecture
- Backlinks: nerf, rope-scaling

## Entity: prm
- Title: Process-Based Supervision
- Category: Language Models
- Language: en
- Key Concepts: ORM, Outcome-Based Supervision (ORMs), DeepSeek-R1, What Is It, Real-World Examples, Process-Based Supervision, PRM vs. ORM Performance, Hallucination Reduction, Search at Inference Time, Credit Assignment, Why PRMs Matter, The Mathematical Intuition, OpenAI PRM800K, Process-Based Supervision (PRMs), Process Reward Models (PRMs)
- References: chain-of-thought, reasoning-models, rlhf
- Backlinks: bayes-theorem, llm, orm-prm, preference-optimization-variants, self-rewarding, speculative-decoding, test-time-scaling

## Entity: reasoning-models
- Title: Reasoning Models
- Category: Language Models
- Language: en
- Key Concepts: Self-Correction, Systematic Coding, Cost, Group Relative Policy Optimization (GRPO), How They Are Trained, Chain-of-Thought (CoT), Latency, DeepSeek-R1, Reinforcement Learning (RL) on Reasoning Traces, Trade-offs, Best For, Visualization: Inference Scaling, Related Topics, Mathematical Framework: GRPO, OpenAI o1
- References: chain-of-thought, llm, neural-scaling-laws, rlhf
- Backlinks: bitnet, llm, orm-prm, preference-optimization-variants, prm, self-rewarding, test-time-scaling, type-theory

## Entity: rope-scaling
- Title: RoPE Scaling & YaRN
- Category: Language Models
- Language: en
- Key Concepts: Memory, RoPE Scaling and Long Context, 2. NTK-aware Scaling, Comparison of Methods, [[attention-mechanisms|Attention]] Logit Decay, Related Topics, Practical Constraints, Ring Attention, Compute, Retrieval Accuracy, Dimension Sensitivity, FlashAttention-2, 1. Linear Interpolation, base frequency, RoPE Scaling
- References: attention-mechanisms, flash-attention, inference-serving, mla, positional-encodings, transformer-architecture

## Entity: slm
- Title: Small Language Models (SLMs)
- Category: Language Models
- Language: en
- Key Concepts: Tied embeddings, Curriculum training, LoRA [[fine-tuning]], Reasoning ceiling, Prompt sensitivity, Knowledge breadth, Smaller knowledge base, Knowledge distillation, Latency, Small Language Models (SLMs), Privacy, Weaker multi-step reasoning, Architecture, On-device deployment, Key Properties & Capabilities
- References: attention-mechanisms, embedding-models, finance/shannon-entropy, fine-tuning, inference-serving, llm, mechanistic-interpretability, mixture-of-experts, neural-scaling-laws, quantization, rag, transformer-architecture
- Backlinks: bitnet, code-models, llm, mcp, mixture-of-experts, synthetic-data-alignment

## Entity: language-models/mamba-ssm
- Title: State Space Models (Mamba)
- Category: Language Models
- Language: en
- Key Concepts: Limitations, State Space Models (SSM), Selection, Scalable Context:, Inference Speed:, The SSM Framework, The [[transformer-architecture|Transformer]] Bottleneck, The Mamba Innovation: Selection Mechanism, Selectively, State Space Models and Mamba Architecture, Related Topics, linear-time complexity, Hardware-Aware Design:, Mamba, Why Mamba Matters
- References: attention-mechanisms, flash-attention, inference-serving, linear-algebra, time-series, transformer-architecture

## Entity: synthetic-data-alignment
- Title: Synthetic Data & Self-Alignment
- Category: Language Models
- Language: en
- Key Concepts: Constitutional AI, Comparison Table, Distillation, Supervised Phase, Task Generation, Filtering, Self-Alignment, Alpaca, Self-Instruct, RL Phase, Model Collapse, Related Topics, Synthetic Data, 1. Self-Instruct, 2. Constitutional AI (Self-Correction)
- References: fine-tuning, preference-optimization-variants, rlhf, slm

## Entity: test-time-scaling
- Title: Test-Time Scaling
- Category: Language Models
- Language: en
- Key Concepts: [[prm|Process Reward Models (PRM)]], Complexity, Cost, 3. Verification-Guided Search, Best-of-N (Rejection Sampling), Flexibility, Latency, 2. Verification and Reward Models, Outcome Reward Models (ORM), Trade-offs, Related Topics, Step-wise Beam Search, Error Correction, Look-ahead Search, How It Works
- References: chain-of-thought, llm, neural-scaling-laws, prm, reasoning-models

## Entity: training-dynamics
- Title: Training Dynamics
- Category: Language Models
- Language: en
- Key Concepts: Warmup, WSD (Warmup-Stable-Decay), Activation statistics, Layer-Wise Learning Rate Decay, Train/val loss gap, Gradient Norm Evolution, See Also, Near convergence, [[attention-mechanisms|Attention]] [[shannon-entropy|entropy]], Maximal Update Parameterisation (muP), muP, barriers, Training Dynamics, Phase Transitions, Induction head formation
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, finance/shannon-entropy, fine-tuning, neural-scaling-laws, transformer-architecture
- Backlinks: curriculum-learning, morse-theory, multi-token-prediction, weight-averaging

## Entity: vlm
- Title: Vision-Language Models (VLMs)
- Category: Language Models
- Language: en
- Key Concepts: Visual encoder (ViT), SigLIP loss, Stage 1 — Visual-language alignment., Contrastive objective (CLIP), Visual question answering (VQA), Hallucination, Visual hallucination, Cross-modal connector, Architecture, Key Properties & Capabilities, Linear projector, Spatial reasoning, Related Topics, Generative objective, Language decoder
- References: attention-mechanisms, embedding-models, llm, pac-learning, transformer-architecture
- Backlinks: embedding-models, matryoshka-embeddings, vision-transformers

## Entity: math/large-deviations-cramer
- Title: Large Deviations and Cramer's Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: Definition., cumulant generating function, Large Deviation Principle, Related Articles, Theorem (Cramer, 1938)., concentration of measure, Upper bound (Chernoff)., 3. Exponential., Applications, exponentially, KL divergence, Examples, Sanov's theorem (1957)., Sanov's theorem, 5. Financial risk management.
- References: central-limit-theorem, characteristic-functions, convex-optimization, cornish-fisher-cvar, finance/shannon-entropy, law-iterated-logarithm, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/lundberg-cramer-ruin
- Backlinks: extreme-value-theory, math/branching-processes, math/concentration-inequalities, math/contiguity-measures, math/coupling-methods, math/doleans-dade-exponential, math/geometric-ergodicity, math/interacting-particle-systems, math/local-limit-theorems, math/lundberg-cramer-ruin, math/percolation, math/poisson-approximation, math/random-graphs, math/random-walks, math/renewal-theory, math/wiener-hopf-factorization, mgf, wentzell-freidlin

## Entity: math/lundberg-cramer-ruin
- Title: Lundberg-Cramer Ruin Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: one of the first applications of [[large-deviations-cramer|large deviations theory]], Definition., Exact asymptotics (Cramer, 1930s)., large deviation principle, Extensions, Related Articles, 2. Operational risk (Basel III)., Example computations, not exponentially, 4. Queueing theory., Modern formulations, 5. Reliability theory., Applications, Lundberg-Cramer theorem, exponentially
- References: extreme-value-theory, finance/stable-distributions, finance/value-at-risk, math/discrete-martingales, math/large-deviations-cramer
- Backlinks: math/large-deviations-cramer, math/poisson-approximation, math/renewal-theory, math/wiener-hopf-factorization

## Entity: math/central-limit-theorem
- Title: Central Limit Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: What CLT does not cover, Related Articles, Lindeberg's condition., Functional CLT (Donsker, 1951)., weakly dependent, Theorem (classical CLT)., generalized Lévy CLT, Finite variance, their large sums look the same, Lindeberg-Feller theorem., in distribution, Berry-Esseen theorem (1941)., practically useful, Proof via characteristic functions, the normal distribution is everywhere
- References: arch-models, brownian-motion, characteristic-functions, finance/crr-model, finance/stable-distributions, finance/stylized-facts-returns, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/weak-convergence-prokhorov

## Entity: math/functional-limit-theorems
- Title: Functional Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: Tightness Criteria, Related Articles, tightness, Diffusion approximations., functional, Applications, Population genetics., Donsker's Invariance Principle, Queueing theory., Meta-theorem., The Role of Skorokhod Topology, Functional Limit Theorems, Theorem (Aldous-Rebolledo)., Theorem., Convergence via Predictable Characteristics
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, martingale-clt, math/convergence-semimartingales, math/skorokhod-topology, math/triangular-arrays-processes, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-problem, math/predictable-compensator, math/random-walks, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/infinitely-divisible-distributions
- Title: Infinitely Divisible Distributions
- Category: Limit Theorems
- Language: en
- Key Concepts: Key Examples, The Levy Measure, The Levy-Khintchine Representation, Connection to Processes with Independent Increments, Relation to Stable Distributions, Kolmogorov's Formula and De Finetti's Theorem, Related Articles, Kolmogorov's formula., canonical triplet, Role in Jacod-Shiryaev's Limit Theory, Theorem., Infinitely Divisible Distributions, infinitely divisible, De Finetti's theorem (for ID distributions)., Theorem (Levy-Khintchine).
- References: central-limit-theorem, characteristic-functions, finance/levy-processes, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, levy-ito-decomposition, math/subordinators, math/triangular-arrays-processes

## Entity: math/law-of-large-numbers
- Title: Law of Large Numbers
- Category: Limit Theorems
- Language: en
- Key Concepts: the trajectory itself, Law of Large Numbers, the average return of a diversified portfolio, Empirical frequency converges to probability, Related Articles, Theorem (strong LLN, Kolmogorov 1933)., concentration of measure, mean is infinite, What the LLN does not say, strong, Hoeffding's law of large numbers, does not say, Proof of the strong LLN (idea), substantially stronger, Monte Carlo
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/markowitz-mean-variance, law-iterated-logarithm, math/borel-cantelli-zero-one, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms
- Backlinks: convergence-types, de-finetti-exchangeability, finance/coherent-risk-measures, finance/cointegration, finance/quasi-monte-carlo, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-clt, math/poisson-approximation, math/renewal-theory, math/stochastic-recursive-sequences, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, monte-carlo-integration, slutsky-theorem

## Entity: math/local-limit-theorems
- Title: Local Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: inversion formula, Related Articles, lattice distribution, Historical development, Random walks on lattices., The non-lattice (density) case, Theorem (Gnedenko, 1948)., Rates of convergence, skewness, Applications, Theorem (de Moivre-Laplace, local form)., Gnedenko's local theorem for lattice distributions, Theorem (non-lattice local CLT)., The de Moivre-Laplace theorem, Stone's general local theorem
- References: central-limit-theorem, characteristic-functions, finance/stable-distributions, math/functional-limit-theorems, math/large-deviations-cramer, math/law-of-large-numbers, math/spectral-theory-operators, math/weak-convergence-prokhorov
- Backlinks: math/central-limit-theorem, math/stein-method

## Entity: math/poisson-approximation
- Title: Poisson Approximation
- Category: Limit Theorems
- Language: en
- Key Concepts: rare events, Theorem (Le Cam)., dependent, Coupon collector., The Le Cam inequality, Related Articles, Random graphs., Theorem (Chen-Stein bound)., Beyond the basics, Birthday problem., local dependence structure, Historical note, Applications, Proof sketch (direct calculation)., Hashing and computer science.
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory
- Backlinks: math/central-limit-theorem, math/random-graphs, math/stein-method

## Entity: math/stable-convergence
- Title: Stable Convergence
- Category: Limit Theorems
- Language: en
- Key Concepts: Definition., Related Articles, random, Mixing Convergence, Definition, mixed Gaussian, Applications in High-Frequency Statistics, Identification:, Tightness, Proposition., stably, Power variations, bipower variation, and other functionals, Characteristic function method:, Proof Sketch, Role in Jacod-Shiryaev's Framework
- References: characteristic-functions, heston-model, martingale-clt, math/convergence-semimartingales, math/discrete-martingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/local-asymptotic-normality

## Entity: math/weak-convergence-prokhorov
- Title: Weak Convergence and Prokhorov's Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: Almost surely, Definition., relatively compact in the weak topology, In probability, Related Articles, converges weakly, Bolzano-Weierstrass analogue, Skorokhod's representation theorem, functional central limit theorem, Definition, weak convergence of distributions, In distribution, Applications, 5. Bayesian statistics:, Lévy's continuity theorem
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/asymptotic-arbitrage-large-markets, finance/crr-model, math/kolmogorov-probability-axioms, math/law-of-large-numbers
- Backlinks: empirical-processes, math/central-limit-theorem, math/contiguity-measures, math/convergence-semimartingales, math/coupling-methods, math/functional-limit-theorems, math/glivenko-cantelli, math/hellinger-processes, math/infinitely-divisible-distributions, math/local-limit-theorems, math/skorokhod-topology, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/wiener-hopf-factorization

## Entity: determinant-properties
- Title: Determinant Properties
- Category: Linear Algebra
- Language: en
- Key Concepts: Inverse:, Overview, Transpose:, Volume:, Multiplicativity:, Key Properties

## Entity: matrix-exponential
- Title: Matrix Exponential
- Category: Linear Algebra
- Language: en
- Key Concepts: Definition, Overview

## Entity: matrix-norms
- Title: Matrix Norms
- Category: Linear Algebra
- Language: en
- Key Concepts: Induced Norms, Frobenius Norm, Overview

## Entity: trace-identities
- Title: Trace Identities
- Category: Linear Algebra
- Language: en
- Key Concepts: Linearity:, Identities, Overview, Cyclic Property:, Trace of Derivative:, Eigenvalue Sum:

## Entity: vector-norms
- Title: Vector Norms
- Category: Linear Algebra
- Language: en
- Key Concepts: $L_1$ Norm:, L-p Norms, Overview, $L_\infty$ Norm:, $L_2$ Norm:

## Entity: deep-reinforcement-learning-for-trading
- Title: Deep Reinforcement Learning (Deep RL) in Trading
- Category: Machine Learning in Finance
- Language: en
- Key Concepts: See Also, Deep Reinforcement Learning (Deep RL) in Trading
- References: course-quant-trading, machine-learning-for-quant-trading, quant-market-making-mechanics

## Entity: machine-learning-for-quant-trading
- Title: Machine Learning for Quant Trading
- Category: Machine Learning in Finance
- Language: en
- Key Concepts: See Also, Machine Learning for Quant Trading, 1. Purged Group TimeSeries Cross-Validation
- References: course-quant-trading, order-book-dynamics-and-lOB-modeling, statistical-arbitrage-and-pairs-trading
- Backlinks: deep-reinforcement-learning-for-trading, stat-tests-for-trading-strategies, systematic-alpha-research-and-backtesting

## Entity: systematic-alpha-research-and-backtesting
- Title: Systematic Alpha Research & IC Evaluation
- Category: Machine Learning in Finance
- Language: en
- Key Concepts: See Also, Systematic Alpha Research & IC Evaluation
- References: course-quant-trading, machine-learning-for-quant-trading, stat-tests-for-trading-strategies

## Entity: spread
- Title: Bid-Ask Spread
- Category: Market Microstructure
- Language: en
- Key Concepts: Forex, Metrics, Equities, bid, Information Asymmetry, Order Processing Costs, Spread in Different Markets, Crypto, Related Topics, offer, Trading Volume, Adverse Selection Costs, Volatility, Market Cap, Effective Spread
- References: avellaneda-stoikov, finance/kyle-lambda, glosten-milgrom, market-impact, market-microstructure
- Backlinks: market-microstructure

## Entity: high-frequency-market-making-avellaneda-stoikov
- Title: HFT Market Making: HJB Equation & Avellaneda-Stoikov Model
- Category: Market Microstructure
- Language: en
- Key Concepts: See Also, HFT Market Making: HJB Equation & Avellaneda-Stoikov Model
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics

## Entity: hft-order-types-and-dark-pools
- Title: HFT Order Types & Dark Pools
- Category: Market Microstructure
- Language: en
- Key Concepts: See Also, Iceberg Orders:, HFT Order Types & Dark Pools, Post-Only:, Midpoint Peg:, 1. HFT Order Types
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: cryptographic-zero-knowledge-in-finance

## Entity: high-frequency-trading-and-orderbook
- Title: High-Frequency Trading (HFT) & Order Book Infrastructure
- Category: Market Microstructure
- Language: en
- Key Concepts: See Also, Protocols:, High-Frequency Trading (HFT) & Order Book Infrastructure, 1. HFT Tech Stack, FPGA & ASICs:, Colocation:, VPIN (Volume-Synchronized Probability of Toxicity):, 2. Queue Priority & VPIN, FIFO vs Pro-Rata:
- References: algorithmic-execution-twap-vwap, course-quant-trading, quant-market-making-mechanics
- Backlinks: algorithmic-execution-twap-vwap, crypto-quant-trading-and-amm-curves, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-stat-arb-lead-lag, limit-order-book-matching-engine-design, market-impact-models-square-root-law, market-microstructure-noise-and-realized-volatility, order-book-dynamics-and-lOB-modeling

## Entity: market-impact-models-square-root-law
- Title: Market Impact Models & Square Root Law
- Category: Market Microstructure
- Language: en
- Key Concepts: Market Impact Models & Square Root Law, See Also
- References: algorithmic-execution-twap-vwap, course-quant-trading, high-frequency-trading-and-orderbook

## Entity: quant-market-making-mechanics
- Title: Market Making Mechanics & Asymmetric Information
- Category: Market Microstructure
- Language: en
- Key Concepts: Bid-Ask Spread ($\delta$):, See Also, Bid Price ($P_b$):, Trading Takeaway:, 3. Asymmetric Information & Adverse Selection, Mid Price ($P_m$):, Ask Price ($P_a$):, Market Making Mechanics & Asymmetric Information, 2. Avellaneda-Stoikov Inventory Model, 1. Fundamentals & Spreads
- References: course-quant-trading, optimal-stopping-and-kelly, option-greeks-and-volatility
- Backlinks: algorithmic-execution-twap-vwap, crypto-quant-trading-and-amm-curves, deep-reinforcement-learning-for-trading, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-trading-and-orderbook, limit-order-book-matching-engine-design, market-microstructure-noise-and-realized-volatility, optimal-stopping-and-kelly, option-greeks-and-volatility, order-book-dynamics-and-lOB-modeling, quant-brainteasers-handbook, quant-interview-cheat-sheet, volatility-trading-and-variance-swaps

## Entity: market-microstructure
- Title: Market Microstructure
- Category: Market Microstructure
- Language: en
- Key Concepts: Market Microstructure, Mathematical Models, Informed Traders, Reinforcement Learning, Market Order, Depth, Market Impact, effective spread, adverse selection risk, Adverse Selection, Liquidity, Order Flow Imbalance (OFI), Market Participants, Generative Models, Tightness
- References: ai-market-making, avellaneda-stoikov, deep-lob, finance/hawkes-process, finance/kyle-lambda, finance/order-flow-imbalance, finance/pin-easley-ohara, generative-scenario-models, market-impact, optimal-execution, spread
- Backlinks: smart-order-routing, spread

## Entity: market-microstructure-noise-and-realized-volatility
- Title: Market Microstructure Noise & Realized Volatility
- Category: Market Microstructure
- Language: en
- Key Concepts: See Also, Market Microstructure Noise & Realized Volatility
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics

## Entity: limit-order-book-matching-engine-design
- Title: Matching Engine Design & Kernel Bypass
- Category: Market Microstructure
- Language: en
- Key Concepts: See Also, Matching Engine Design & Kernel Bypass
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics

## Entity: order-book-dynamics-and-lOB-modeling
- Title: Order Book Dynamics & LOB Modeling
- Category: Market Microstructure
- Language: en
- Key Concepts: See Also, 1. Hawkes Processes, 2. Volume Imbalance Ratio, Order Book Dynamics & LOB Modeling
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: machine-learning-for-quant-trading

## Entity: math/martingale-clt
- Title: Central Limit Theorem for Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: Theorem (Lévy-Doob-Lindeberg for martingales), Quadratic variation (Doob):, Related Articles, random, Conditional variance:, 3. GARCH and ARCH models., 3. Maximum-likelihood score., Hall-Heyde theorem (1980)., Functional martingale CLT (invariance principle)., martingale approximation, clean assumptions, independence, martingale differences, Comparison with CLT for stationary processes, 5. Martingale transforms.
- References: arch-models, brownian-motion, central-limit-theorem, convex-optimization, garch-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/law-of-large-numbers

## Entity: math/discrete-martingales
- Title: Discrete Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: Doob's $L^p$ inequality., Doob's optional stopping theorem., 1. Symmetric random walk., Definition., 2. Conditional expectation., 5. Actuarial science., exactly equals, Doob's maximal inequality., Related Articles, Adaptedness, Theorem (Doob decomposition)., Definition, $L^1$-bounded submartingales converge almost surely, the origin, Doob decomposition
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/optimal-stopping-american, law-iterated-logarithm, math/conditional-expectation-sigma, math/discrete-markov-chains, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/branching-processes, math/conditional-expectation-sigma, math/discrete-markov-chains, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/lundberg-cramer-ruin, math/martingale-clt, math/martingale-representation, math/optimal-stopping-markov, math/predictable-compensator, math/random-walks, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/stable-convergence, math/wiener-hopf-factorization, stochastic-processes

## Entity: math/doleans-dade-exponential
- Title: Doleans-Dade Stochastic Exponential
- Category: Martingale Theory
- Language: en
- Key Concepts: Special Cases, Definition., Consequence., Related Articles, predictable, Applications, Connection to Girsanov's Theorem, Yor's Formula, Definition and the Equation, Proof idea., Likelihood ratios in statistics., not, Exponential martingales., Proof sketch., stochastic exponential
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, math/discrete-martingales, math/large-deviations-cramer, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, levy-ito-decomposition, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-stochastic-integrals, math/density-processes, math/hellinger-processes, math/martingale-problem, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering, risk-neutral-valuation

## Entity: math/doob-meyer-decomposition
- Title: Doob-Meyer Decomposition
- Category: Martingale Theory
- Language: en
- Key Concepts: class (D), optional decomposition, Definition., Class (D) and Uniform Integrability, Related Articles, Uniqueness, Why this matters:, Theorem (Doob-Meyer)., predictable, The Continuous-Time Theorem, optional, The Compensator, Beyond Submartingales: Local Martingales, Key examples:, Examples:
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability
- Backlinks: local-time-tanaka, math/density-processes, math/martingale-representation, math/predictable-compensator, math/quadratic-variation

## Entity: math/martingale-representation
- Title: Martingale Representation Theorem
- Category: Martingale Theory
- Language: en
- Key Concepts: Theorem (Martingale Representation)., Related Articles, Connection to Filtering Theory, total, Martingale Representation Theorem, Applications, market incompleteness, Multiple Brownian Motions, market completeness, Backward SDEs., Market Completeness, integrand representation, innovation representation, Clark-Ocone formula, Malliavin derivative
- References: black-scholes, brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, hidden-markov-models, innovation-process, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, nonlinear-filtering, stochastic-differential-equations
- Backlinks: clark-ocone, feynman-kac, math/absolute-continuity-process-measures, math/backward-sde, stochastic-processes

## Entity: math/optimal-stopping-markov
- Title: Optimal Stopping of Markov Chains
- Category: Martingale Theory
- Language: en
- Key Concepts: Definition., Infinite horizon, Related Articles, 6. Defense and medicine., Optimal strategy:, Observation 2., optimal, stop now, dynamic programming, superharmonic, American options, Applications, Optimal stopping time:, Penalty method and variational inequality, Shiryaev's "best candidate" problems
- References: finance/black-scholes-derivations, finance/crr-model, finance/optimal-stopping-american, math/discrete-markov-chains, math/discrete-martingales, reinforcement-learning
- Backlinks: local-time-tanaka

## Entity: optimal-stopping-and-kelly
- Title: Kelly Criterion & Optimal Stopping Theory
- Category: Math & Game Theory
- Language: en
- Key Concepts: See Also, 1. Kelly Criterion, 2. Optimal Stopping & Secretary Problem, Kelly Criterion & Optimal Stopping Theory
- References: course-quant-trading, quant-brainteasers-handbook, quant-market-making-mechanics
- Backlinks: optimal-stopping-american-options, option-greeks-and-volatility, quant-brainteasers-handbook, quant-market-making-mechanics, quant-risk-management-var-cvar

## Entity: stochastic-calculus-and-ito-lemma
- Title: Stochastic Calculus & Ito's Lemma
- Category: Math & Game Theory
- Language: en
- Key Concepts: Stochastic Calculus & Ito's Lemma, 1. Ito's Lemma, See Also
- References: course-quant-trading, monte-carlo-option-pricing-and-variance-reduction, option-greeks-and-volatility
- Backlinks: fixed-income-quant-rates-and-yield-curve, monte-carlo-option-pricing-and-variance-reduction, stochastic-volatility-heston-model

## Entity: axiomatic-probability
- Title: Axiomatic Probability
- Category: Math Foundations
- Language: en
- Key Concepts: Andrey Kolmogorov, Normalization, Empty Set, Countable Additivity ($\sigma$-additivity), Axiomatic Probability: The Kolmogorov Foundation, 4. Why Measure Theory?, Sample Space ($\Omega$), Borel $\sigma$-algebra, 1. The Probability Space $(\Omega, \mathcal{F}, P)$, Monotonicity, Bertrand's Paradox, Related Topics, 2. Kolmogorov's Axioms, events, Probability Measure ($P$)
- References: conditional-probability, measure-theory

## Entity: bayesian-linear-regression
- Title: Bayesian Linear Regression
- Category: Math Foundations
- Language: en
- Key Concepts: The Posterior Distribution, prior, The Model, Bayesian Linear Regression, likelihood, Predictive Distribution, conjugate

## Entity: boolean-algebra
- Title: Boolean Algebra & Circuit Logic
- Category: Math Foundations
- Language: en
- Key Concepts: true, AND, false, NOT, Karnaugh Maps, Karnaugh map (K-map), Complexity Basics, Logic Gates
- References: recursion-recurrence

## Entity: integration-techniques
- Title: Calculus: Advanced Integration Techniques
- Category: Math Foundations
- Language: en
- Key Concepts: Integration by Parts, Partial Fractions, Trigonometric Substitution
- References: coordinate-systems
- Backlinks: generating-functions

## Entity: category-theory-ml
- Title: Category Theory for Machine Learning
- Category: Math Foundations
- Language: en
- Key Concepts: Related Topics, What Is It, DERIVATION: [[automatic-differentiation|Backpropagation]] as Lens Composition, Category Theory for Machine Learning, lenses, Lens, Categorical Cybernetics, optics, chain rule, Optics, Forward:, Para, Learning as a Morphism, Open Games, The Para Construction
- References: automatic-differentiation, manifold-learning, topos-theory, type-theory

## Entity: conditional-probability
- Title: Conditional Probability and Total Probability
- Category: Math Foundations
- Language: en
- Key Concepts: 5. Example: Diagnostic Testing, 3.2 The Theorem, 4. Bayes' Theorem, conditional probability of $A$ given $B$, 2. The Multiplication Rule, Proof, 3. Law of Total Probability (LTP), Bayes' Theorem, Likelihood, Prior, Posterior, Related Topics, 1.1 Intuition: Shrinking the Sample Space, Chain Rule, 3.1 Definition of a Partition
- References: bayes-theorem, markov-chains
- Backlinks: axiomatic-probability

## Entity: continuous-random-variables
- Title: Continuous Random Variables
- Category: Math Foundations
- Language: en
- Key Concepts: Related Topics, 1.1 Properties of the PDF, CDF, Exponential($\lambda$), Continuous Random Variables, Intuition, 5. Common Continuous Distributions, Cauchy($x_0, \gamma$), 3. Expected Value and Variance, 2. Cumulative Distribution Function (CDF), 1. Probability Density Function (PDF), Continuous Random Variable, 4. Transformation of Variables, Normal($\mu, \sigma^2$), PDF
- References: discrete-random-variables, joint-distributions, measure-theory
- Backlinks: discrete-random-variables

## Entity: coordinate-systems
- Title: Coordinate Systems & Transforms
- Category: Math Foundations
- Language: en
- Key Concepts: Jacobian determinant, spherical coordinates, The Jacobian Determinant, polar coordinates, Polar and Spherical Coordinates
- References: implicit-function-theorem
- Backlinks: implicit-function-theorem, integration-techniques

## Entity: covariance-correlation
- Title: Covariance, Correlation, and Independence
- Category: Math Foundations
- Language: en
- Key Concepts: ranks, linear, Negative Covariance, Covariance, 4. Independence vs. Zero Correlation, Related Topics, Example, Positive Covariance, Zero Correlation $\not\implies$ Independence, 2. Pearson Correlation Coefficient, 2.1 Properties, Spearman ($\rho_s$), Covariance, Correlation, and Independence, 3. Pearson vs. Spearman Correlation, Units
- References: joint-distributions, linear-regression-ols
- Backlinks: joint-distributions

## Entity: generating-functions
- Title: Discrete Math: Generating Functions
- Category: Math Foundations
- Language: en
- Key Concepts: Counting and Analogies, Solving Recurrences, generating function
- References: integration-techniques, recursion-recurrence
- Backlinks: recursion-recurrence

## Entity: recursion-recurrence
- Title: Discrete Math: Recursion & Recurrence
- Category: Math Foundations
- Language: en
- Key Concepts: Fibonacci Sequence, Master Theorem
- References: formal-proof-techniques, generating-functions
- Backlinks: boolean-algebra, generating-functions

## Entity: discrete-random-variables
- Title: Discrete Random Variables
- Category: Math Foundations
- Language: en
- Key Concepts: Linearity of Expectation, 2.1 Properties of the PMF, Discrete Random Variable, 3. Cumulative Distribution Function (CDF), Probability Mass Function (PMF), step function, 1. Formal Definition, 2. Probability Mass Function (PMF), Related Topics, 4. Expected Value (Mean), Bernoulli($p$), discrete, Law of the Unconscious Statistician (LOTUS), 5. Variance and Standard Deviation, Geometric($p$)
- References: continuous-random-variables, lln-clt
- Backlinks: continuous-random-variables

## Entity: eigendecomposition-vs-svd
- Title: Eigenvalue Decomposition vs. SVD
- Category: Math Foundations
- Language: en
- Key Concepts: Eigenvalue Decomposition vs. SVD, Eigenvalue Decomposition (EVD), Orthogonality:, Applicability:, Domain and Codomain:, singular values, right singular vectors, Spectral Theorem:, left singular vectors, Technical Comparison, Singular Value Decomposition (SVD)
- References: math/spectral-theory-operators, pca-math
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: exponential-families
- Title: Exponential Families
- Category: Math Foundations
- Language: en
- Key Concepts: Properties of the Log-Partition Function, Role in Machine Learning, Exponential Families, Examples, natural (or canonical) parameter, log-partition function, Mean:, sufficient statistic, Canonical Form, Variance:
- Backlinks: course-math-for-ai, distributions-zoo, fisher-information, math/bayesian-asymptotics, math/cramer-rao-bound, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, maximum-entropy

## Entity: fundamental-inequalities
- Title: Fundamental Inequalities: Markov & Chebyshev
- Category: Math Foundations
- Language: en
- Key Concepts: Proof, Fundamental Inequalities: Markov & Chebyshev, 1. Markov's Inequality, Sharpness, 3. Tightness and Bounds, Related Topics, Chernoff Bounds, 2. Chebyshev's Inequality
- References: jensen-inequality, lln-clt, math/concentration-inequalities

## Entity: conic-sections
- Title: Geometry: Conic Sections & Quadratic Forms
- Category: Math Foundations
- Language: en
- Key Concepts: quadratic forms, Diagonalization, Matrix Representation
- References: change-of-basis, math/spectral-theory-operators

## Entity: graph-theory-basics
- Title: Graph Theory Basics
- Category: Math Foundations
- Language: en
- Key Concepts: Adjacency Matrices, Tree:, Paths and Trees, adjacency matrix, Path:
- References: bayesian-networks, sparse-matrices
- Backlinks: sparse-matrices

## Entity: group-theory-basics
- Title: Group Theory Basics
- Category: Math Foundations
- Language: en
- Key Concepts: Inverse:, Ring:, Rings and Fields, Groups, group, Field:, Identity:, Associativity:, Closure:
- References: formal-proof-techniques

## Entity: homotopy-type-theory
- Title: Homotopy Type Theory (HoTT)
- Category: Math Foundations
- Language: en
- Key Concepts: Program Synthesis:, $h=1$ (Groupoids):, Homotopy Type Theory (HoTT), $\infty$-groupoid, Homotopy Theory, path, Intensional Type Theory, Univalence Axiom, Relevance to AI and Program Synthesis, h-Levels (Homotopy Levels), Quotients:, Related Topics, The Univalence Axiom, Formal Verification:, $h=-1$ (Propositions):
- References: category-theory, math/algebraic-topology, math/godel-incompleteness, type-theory

## Entity: implicit-function-theorem
- Title: Implicit & Inverse Function Theorems
- Category: Math Foundations
- Language: en
- Key Concepts: Inverse Function Theorem, Implicit Function Theorem
- References: convex-sets-functions, coordinate-systems, manifold-learning
- Backlinks: convex-sets-functions, coordinate-systems

## Entity: inner-product-spaces-norms
- Title: Inner Product Spaces & Norms
- Category: Math Foundations
- Language: en
- Key Concepts: $L_2$ Norm (Euclidean norm):, Frobenius Norm, Dual Norms, Inner Product Spaces & Norms, $L_p$ Norms, inner product space, $L_1$ Norm (Manhattan distance):, $L_\infty$ Norm (Chebyshev norm):
- References: eigendecomposition-vs-svd, kkt-conditions, pca-math

## Entity: jensen-inequality
- Title: Jensen's Inequality
- Category: Math Foundations
- Language: en
- Key Concepts: Evidence Lower Bound (ELBO), Jensen's Inequality, 3. Applications, B. Machine Learning: ELBO and EM-Algorithm, [[expectation-maximization|EM algorithm]], A. Information Theory, Related Topics, 2. Geometric Proof, 1. Formal Statement
- References: convexity, expectation-maximization, finance/shannon-entropy, information-theory-basics
- Backlinks: fundamental-inequalities

## Entity: joint-distributions
- Title: Joint, Marginal, and Conditional Distributions
- Category: Math Foundations
- Language: en
- Key Concepts: independent, 1. Joint Distributions, Discrete, Double Integrals, Joint CDF, 4. Independence, 3. Conditional Distributions, Joint, Marginal, and Conditional Distributions, Jacobians, Continuous, Related Topics, 2. Marginal Distributions, 1.1 Discrete Case: Joint PMF, 1.2 Continuous Case: Joint PDF, 5. Multivariate Calculus Foundation
- References: copulas, covariance-correlation, multivariate-normal
- Backlinks: continuous-random-variables, covariance-correlation

## Entity: kkt-conditions
- Title: Lagrange Multipliers & KKT Conditions
- Category: Math Foundations
- Language: en
- Key Concepts: Lagrange Multipliers & KKT Conditions, Karush-Kuhn-Tucker (KKT), Stationarity:, Primal Feasibility:, Complementary Slackness:, Dual Feasibility:, KKT Conditions (Inequality Constraints), Lagrange Multipliers (Equality Constraints)
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: large-deviations
- Title: Large Deviations: Hoeffding & Bernstein Inequalities
- Category: Math Foundations
- Language: en
- Key Concepts: Hoeffding's Inequality, Bernstein's Inequality, Chebyshev's:, exponentially, Key takeaway:, Markov's and Chebyshev's Inequalities, Markov's:, Large Deviations: Hoeffding & Bernstein

## Entity: change-of-basis
- Title: Linear Algebra: Change of Basis
- Category: Math Foundations
- Language: en
- Key Concepts: Coordinate Transformations, similar, Similarity Transforms
- References: math/spectral-theory-operators, rank-nullity-theorem
- Backlinks: conic-sections, rank-nullity-theorem

## Entity: rank-nullity-theorem
- Title: Linear Algebra: Kernel, Image, and Rank-Nullity
- Category: Math Foundations
- Language: en
- Key Concepts: The Rank-Nullity Theorem, Image (Column Space, $\text{im} A$):, Rank-Nullity Theorem, Fundamental Subspaces, Kernel (Null Space, $\ker A$):
- References: change-of-basis
- Backlinks: change-of-basis

## Entity: sparse-matrices
- Title: Linear Algebra: Sparse Matrices
- Category: Math Foundations
- Language: en
- Key Concepts: Storage Formats, CSR (Compressed Sparse Row):, sparse, CSC (Compressed Sparse Column):, Mathematical Properties
- References: graph-theory-basics, numerical-stability
- Backlinks: graph-theory-basics, numerical-stability

## Entity: formal-proof-techniques
- Title: Logic: Formal Proof Techniques
- Category: Math Foundations
- Language: en
- Key Concepts: Base Case:, Proof by Contradiction, Mathematical Induction, Inductive Step:, Direct Proof
- References: lln-proofs
- Backlinks: group-theory-basics, lln-proofs, recursion-recurrence

## Entity: markov-chains
- Title: Markov Chains
- Category: Math Foundations
- Language: en
- Key Concepts: Aperiodic:, Ergodic Theorem:, stochastic matrix, The Markov Property, Markov property, stationary distribution, Markov Chains, Irreducible:, Irreducibility and Aperiodicity, Stationary Distributions, Transition Matrix
- Backlinks: conditional-probability, stochastic-processes

## Entity: matrix-calculus
- Title: Matrix Calculus
- Category: Math Foundations
- Language: en
- Key Concepts: Gradients of Quadratic Forms, denominator layout, Gradients Involving Determinants, Matrix Calculus, Layout Conventions, Gradients Involving Traces
- References: em-algorithm, gmm, multivariate-normal-distribution
- Backlinks: tensors-and-contractions

## Entity: multivariable-taylor-series
- Title: Multivariable Taylor Series
- Category: Math Foundations
- Language: en
- Key Concepts: The Taylor Expansion, Gradient, Saddle Point:, Newton's Method, Local Maximum:, Hessian Properties and Optimization, Multivariable Taylor Series, Hessian, Local Minimum:
- References: math/spectral-theory-operators, positive-definite-matrices

## Entity: multivariate-normal-distribution
- Title: Multivariate Normal Distribution
- Category: Math Foundations
- Language: en
- Key Concepts: Density Function, Marginal Distribution:, Marginals and Conditionals, Mahalanobis Distance, Multivariate Normal Distribution, Conditional Distribution:
- References: kalman-filter, positive-definite-matrices
- Backlinks: matrix-calculus, positive-definite-matrices

## Entity: mutual-information-divergence
- Title: Mutual Information & Divergence
- Category: Math Foundations
- Language: en
- Key Concepts: Interpretation:, Data Processing Inequality, Mutual Information & Divergence, Kullback-Leibler (KL) Divergence, Gibbs' Inequality:, Mutual Information, Asymmetry:
- References: em-algorithm, finance/shannon-entropy

## Entity: numerical-integration
- Title: Numerical Integration
- Category: Math Foundations
- Language: en
- Key Concepts: Gaussian Quadrature, Importance Sampling, Curse of Dimensionality, Numerical Integration, Monte Carlo Integration

## Entity: numerical-stability
- Title: Numerical Stability & Floating Point Math
- Category: Math Foundations
- Language: en
- Key Concepts: condition number, floating-point, Condition Number, Machine epsilon, numerically stable, Machine Epsilon
- References: sparse-matrices
- Backlinks: sparse-matrices

## Entity: convex-sets-functions
- Title: Optimization: Convex Sets & Functions
- Category: Math Foundations
- Language: en
- Key Concepts: Convex Functions, convex, Convex Sets, strictly convex
- References: implicit-function-theorem
- Backlinks: implicit-function-theorem

## Entity: positive-definite-matrices
- Title: Positive Definite Matrices
- Category: Math Foundations
- Language: en
- Key Concepts: Properties, Trace and Determinant:, positive semi-definite (PSD), Principal Minors:, Positive Definite Matrices, [[spectral-theory-operators|Eigenvalues]]:, positive definite (PD), Invertibility:, Role in Kernels and Optimization, Kernels:, Optimization:, Cholesky Decomposition
- References: math/spectral-theory-operators, multivariate-normal-distribution
- Backlinks: multivariable-taylor-series, multivariate-normal-distribution

## Entity: pca-math
- Title: Principal Component Analysis (PCA) Math
- Category: Math Foundations
- Language: en
- Key Concepts: Maximum Variance Formulation, Minimum Error Formulation, Principal Component Analysis (PCA), Connection to SVD
- References: eigendecomposition-vs-svd, kkt-conditions
- Backlinks: eigendecomposition-vs-svd, inner-product-spaces-norms

## Entity: lln-proofs
- Title: Probability: Law of Large Numbers
- Category: Math Foundations
- Language: en
- Key Concepts: Weak LLN, Strong LLN
- References: formal-proof-techniques, random-walks
- Backlinks: formal-proof-techniques, random-walks

## Entity: random-walks
- Title: Probability: Random Walks
- Category: Math Foundations
- Language: en
- Key Concepts: transient, recurrent, 1D and 2D Simple Walks, Recurrence vs Transience, random walk
- References: lln-proofs
- Backlinks: lln-proofs, stochastic-processes

## Entity: p-values-effect-size
- Title: Statistics: P-values & Effect Size
- Category: Math Foundations
- Language: en
- Key Concepts: Effect size, Effect Size, p-value, P-values, p-hacking, Cohen's d, P-Hacking
- References: statistical-paradoxes
- Backlinks: statistical-paradoxes

## Entity: statistical-paradoxes
- Title: Statistics: Paradoxes
- Category: Math Foundations
- Language: en
- Key Concepts: Simpson's Paradox, Monty Hall Problem, Berkson's Paradox
- References: p-values-effect-size
- Backlinks: p-values-effect-size

## Entity: advanced-game-theory
- Title: Stochastic Games & Correlated Equilibrium
- Category: Math Foundations
- Language: en
- Key Concepts: Stochastic Games & Correlated Equilibrium, Stochastic Games, Correlated Equilibrium

## Entity: tensors-and-contractions
- Title: Tensors and Contractions
- Category: Math Foundations
- Language: en
- Key Concepts: Tensor Notation, Matrix Multiplication:, Inner Product:, Trace:, Tensors and Contractions, Matrix-Vector Product:, Tensor Contraction, Einstein Summation Convention, Examples:
- References: attention-mechanisms, automatic-differentiation, matrix-calculus

## Entity: em-algorithm
- Title: The EM Algorithm
- Category: Math Foundations
- Language: en
- Key Concepts: E-step (Expectation):, Evidence Lower Bound (ELBO), M-step (Maximization):, Problem Setup, The Expectation-Maximization (EM) Algorithm, latent variables, The EM Steps
- References: gmm, hmm
- Backlinks: matrix-calculus, mutual-information-divergence

## Entity: universal-approximation-theory
- Title: Universal Approximation Theory
- Category: Math Foundations
- Language: en
- Key Concepts: Classical Formulation, Universal Approximation Theory, Extension to Deep Networks, Approximation by Transformers, Barron's Theorem
- References: attention-mechanisms, transformer-architecture

## Entity: information-theory-basics
- Title: Information Theory Basics
- Category: Math Fundamentals
- Language: en
- Key Concepts: Related Topics, Entropy, Mutual Information ($I(X; Y)$), 1. [[shannon-entropy|Entropy]]: The Measure of Uncertainty, [[shannon-entropy|Entropy]] ($H$), Binary Cross-Entropy (BCE), Intuition, 5. Summary of Terms, Information Theory Basics: Measuring Surprise, KL Divergence, 4. Mutual Information, 3. Cross-Entropy: The ML Loss Function, Kullback-Leibler (KL) Divergence, 2. KL Divergence: Comparing Distributions, Cross-Entropy
- References: finance/shannon-entropy, maximum-entropy, probability-distributions, variational-autoencoders
- Backlinks: jensen-inequality, probability-distributions

## Entity: linear-regression-ols
- Title: Linear Regression & OLS
- Category: Math Fundamentals
- Language: en
- Key Concepts: Mean Squared Error (MSE), Exogeneity, Geometric Interpretation, 1. The Model Equation, Residual Sum of Squares (RSS), R-squared ($R^2$), 5. Beyond OLS: Regularization, Ordinary Least Squares (OLS), The Normal Equation, Homoscedasticity, Linearity, Related Topics, orthogonal projection, Ridge Regression, No Multicollinearity
- References: matrix-decompositions, statistical-inference, vector-spaces-orthogonality
- Backlinks: covariance-correlation, estimator-properties, map-estimation, matrix-decompositions, vector-spaces-orthogonality

## Entity: matrix-decompositions
- Title: Matrix Decompositions: SVD, LU, and QR
- Category: Math Fundamentals
- Language: en
- Key Concepts: Geometric Intuition, Dimensionality Reduction (PCA), Orthogonal, 4. Comparison Summary, Applications, SVD, Lower, Matrix Decompositions: The Structural Integrity of Data, Model Compression, Upper, 1. LU Decomposition: Solving Linear Systems, Related Topics, 2. QR Decomposition: Stability and Orthogonality, 3. Singular Value Decomposition (SVD): The Master Key, Why it matters
- References: eigenvalues-eigenvectors, linear-regression-ols, math/spectral-theory-operators, pca
- Backlinks: linear-regression-ols, vector-spaces-orthogonality

## Entity: optimization-basics
- Title: Optimization 101: Gradient Descent & Newton's Method
- Category: Math Fundamentals
- Language: en
- Key Concepts: quadratic convergence, Why use it?, No Learning Rate, Loss Function, Conditioning, Optimization 101: Training the Machines, Convergence, Related Topics, Variations in ML, Vanishing/Exploding Gradients, Local Minima, Adam, 2. Newton's Method: The Second-Order Specialist, The Update Rule, 1. [[convex-optimization|Gradient Descent]]: The First-Order Workhorse
- References: chain-rule-autodiff, convex-optimization, gradient-hessian-jacobian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, sequences-series-convergence

## Entity: probability-distributions
- Title: Probability Distributions Encyclopedia
- Category: Math Fundamentals
- Language: en
- Key Concepts: 4. Key Relationships, Normal (Gaussian) Distribution, 1. Discrete Distributions, PMF, Bernoulli Distribution, Beta Distribution, [[shannon-entropy|Entropy]], Multinomial, First Moment (Mean), Fourth Moment (Kurtosis), Related Topics, Second Moment (Variance), Use, Probability Distributions, 3. Moments of a Distribution
- References: bayes-theorem, finance/shannon-entropy, information-theory-basics, lln-clt
- Backlinks: information-theory-basics, mgf-characteristic-functions, order-statistics, statistical-inference

## Entity: sequences-series-convergence
- Title: Sequences, Series & Convergence
- Category: Math Fundamentals
- Language: en
- Key Concepts: 3. Taylor Series: Approximating Functions, Geometric Series, Convergence in Distribution, Linear Approximation, converges, Hessian Intuition, Linearization, Related Topics, 5. Convergence in Probability, Convergence in Probability, In ML, 1. Sequences and Limits, 2. Infinite Series, Why it matters in AI, partial sums
- References: lln-clt, optimization-basics, taylor-series

## Entity: logic-set-theory
- Title: Set Theory & Formal Logic
- Category: Math Fundamentals
- Language: en
- Key Concepts: 4. Boolean Algebra in Computing, Union ($A \cup B$), Propositional Logic, Intersection ($A \cap B$), Boolean Algebra, Subset ($A \subseteq B$), Constraint Satisfaction, 1. Formal Logic: The Rules of Thought, Negation ($\neg$), Relation, Set Theory in Databases, Complement ($A^c$ or $\bar{A}$), Set, Function ($f: A \to B$), Surjective (Onto)
- References: graph-theory

## Entity: statistical-inference
- Title: Statistical Inference & Hypothesis Testing
- Category: Math Fundamentals
- Language: en
- Key Concepts: Power ($1 - \beta$), Significance Level ($\alpha$), Crucial, 3. Confidence Intervals (CI), 1. Hypothesis Testing: The Framework, Frequentist, Null Hypothesis ($H_0$), ANOVA, Related Topics, Chi-Squared Test, Example, Z-test / T-test, 4. Common Tests, 2. Type I and Type II Errors, Bayesian
- References: bayes-theorem, probability-distributions
- Backlinks: bootstrap-jackknife, cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, linear-regression-ols, map-estimation, mle-estimation, rank-tests, sufficient-statistics

## Entity: chain-rule-autodiff
- Title: The Chain Rule & Auto-Diff Foundations
- Category: Math Fundamentals
- Language: en
- Key Concepts: Forward Mode, 1. The Single Variable Chain Rule, Optimization, 3. Automatic Differentiation (Auto-Diff), Jacobian, Loss Function, Backward Pass, Reverse Mode vs. Forward Mode, 4. The Computational Graph, The Chain Rule & Auto-Diff: The Engine of Deep Learning, Related Topics, Forward Pass, Chain Rule, Example, 2. Multivariable Chain Rule
- References: automatic-differentiation, gradient-hessian-jacobian, optimization-basics
- Backlinks: optimization-basics

## Entity: vector-spaces-orthogonality
- Title: Vector Spaces & Orthogonality
- Category: Math Fundamentals
- Language: en
- Key Concepts: Orthonormal, 2. Orthogonality: The Power of 90 Degrees, 4. The Gram-Schmidt Process, Vectors, Orthogonal, Vector Spaces & Orthogonality: The Geometry of Data, Dimension, AI Context, independence, Basis, Projection, Orthonormal Basis, Orthogonal Complement, Related Topics, Application
- References: eigenvalues-eigenvectors, linear-regression-ols, matrix-decompositions
- Backlinks: linear-regression-ols

## Entity: math/algebraic-topology
- Title: Algebraic Topology
- Category: Mathematical Foundations
- Language: en
- Key Concepts: universal covering, singular $n$-simplex, connecting homomorphism, homotopic relative to the basepoint, is independent of the choice of basepoint, van Kampen's Theorem, Homotopy and Homotopy Equivalence, homotopy equivalent, cycles, Deck transformations, Euler formula for polyhedra, loop, Euler Characteristic and Betti Numbers, correspondence between coverings and groups, Singular Homology
- References: category-theory, complex-analysis, functional-analysis, math/differential-geometry, math/non-euclidean-geometry, math/topology-basics
- Backlinks: homological-algebra, homotopy-type-theory, math/differential-geometry, morse-theory, topos-theory

## Entity: complex-analysis
- Title: Complex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: conformal, monodromy, Cauchy integral theorem, Casorati–Weierstrass theorem, Conformal Mappings, Removable singularity, Analytic Continuation and Monodromy, Connection to Harmonic Functions and Partial Differential Equations, The Maximum Modulus Principle and Liouville's Theorem, The Residue Theorem, Cauchy integral formula, Singularities and Laurent Series, Riemann Mapping Theorem, analytic continuation, Maximum Modulus Principle
- References: fourier-transform, functional-analysis, harmonic-analysis, math/differential-geometry, math/topology-basics
- Backlinks: math/algebraic-topology, math/differential-geometry, math/harmonic-analysis

## Entity: convex-analysis
- Title: Convex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Information geometry, Complementary slackness, Dual feasibility, LASSO and sparsification, Convex sets and functions, Applications across domains, Primal feasibility, KKT conditions and optimality, Proximal operators and algorithms, The subdifferential, Conjugate functions and duality, Stationarity, Optimal transport, Variational methods in control, Portfolio optimization
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, finance/markowitz-mean-variance, math/analysis-geometry/information-geometry, math/kolmogorov-probability-axioms, optimal-transport, stochastic-control
- Backlinks: math/high-dimensional-statistics, math/topology-basics

## Entity: math/differential-geometry
- Title: Differential Geometry
- Category: Mathematical Foundations
- Language: en
- Key Concepts: acceleration, scalar curvature, cotangent bundle, References and Further Study, Riemannian metric, covariant derivative, arc length, sectional curvature, Machine Learning, tangent space, Jacobian, constant sectional curvature, Parallel transport, Gaussian curvature, geodesic
- References: complex-analysis, convex-optimization, functional-analysis, manifold-learning, math/algebraic-topology, math/analysis-geometry/information-geometry, math/non-euclidean-geometry, math/topology-basics, math/variational-calculus
- Backlinks: asymptotic-spacetime, complex-analysis, course-math-for-ai, fluid-dynamics-navier-stokes, goldstone-modes, gravitational-waves-gr, group-theory, lie-groups, manifold, manifold-learning, many-body-tensor-networks, math/algebraic-topology, morse-theory, qft-curved-spacetime, semimartingales-on-manifolds, special-relativity, stochastic-manifolds, string-theory-calabi-yau

## Entity: math/harmonic-analysis
- Title: Harmonic Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Marcinkiewicz interpolation theorem, weak $L^1$ bound, The $L^1 \cap L^2$ Theory: Plancherel's Theorem, The Convolution Theorem, Fejér kernel, Fourier Series on the Circle $\mathbb{T}$, convolution theorem, Sobolev spaces, Sobolev Spaces via Fourier, Fourier series, The inversion formula, Applications: Heat Equation and Spectral Theory, Information-Theoretic Connections, Concluding Remarks, The Gibbs phenomenon
- References: complex-analysis, finance/shannon-entropy, functional-analysis, math/information-theory, math/lp-spaces, math/spectral-theory-operators, partial-differential-equations, sobolev-spaces

## Entity: math/ode-stability
- Title: ODE Theory and Lyapunov Stability
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Definition., asymptotically stable, Theorem (LaSalle's Invariance Principle)., Classification of Singular Points, Pitchfork Bifurcation, Theorem (Picard-Lindelöf)., Theorem (Lyapunov Asymptotic Stability Theorem)., Node:, Control and Optimal Control, Hartman-Grobman Theorem, Jordan Normal Form, Existence and Uniqueness of Solutions, Applications, Unstable subspace:, Structure of Solutions
- References: convex-optimization, functional-analysis, manifold-learning, math/geometric-ergodicity, math/spectral-theory-operators, math/variational-calculus, neural-odes, stochastic-control, stochastic-differential-equations

## Entity: math/spectral-theory-operators
- Title: Spectral Theory of Operators
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Functional Calculus, Spectrum of Markov Operators, Stability of dynamical systems, resolvent set, Fredholm alternative, projection-valued measure, Fredholm Alternative, Applications, resolvent, Point spectrum, Sturm–Liouville Theory, Spectral Theorem, Bounded Self-Adjoint Operators, Quantum mechanics, References
- References: functional-analysis, math/lp-spaces, math/markov-chain-mixing, math/spectral-representation-processes, partial-differential-equations, schrodinger-equation, sobolev-spaces, spectral-graph-theory
- Backlinks: algebraic-geometry-slt, algebraic-topology-persistent, ar-models, attention-linear-kernel, brownian-bridge, change-of-basis, conic-sections, eigendecomposition-vs-svd, eigenvalues-eigenvectors, finance/cointegration, finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, fluid-dynamics-navier-stokes, functional-analysis-c-star, geometry-loss-landscapes, geometry-of-attention, gnn-weisfeiler-lehman, gradient-hessian-jacobian, graph-curvature-oversquashing, graph-theory, hilbert-banach-spaces, information-geometry-nn, kernel-methods-rkhs, laplacian, linear-algebra, math/functional-analysis, math/harmonic-analysis, math/kolmogorov-equations-ctmc, math/local-limit-theorems, math/markov-chain-mixing, math/ode-stability, matrix-decompositions, mechanistic-interpretability-sae, morse-theory, multivariable-calculus, multivariable-taylor-series, neural-ode-stability, neural-operators-fno, nonlinear-shrinkage, normalization-layers-math, number-theory-l-functions, optimization-basics, pca, pinns-convergence, portfolio-optimization-ml, positive-definite-matrices, quantum-computing-vqe, quantum-information-entropy, quantum-mechanics, quantum-phase-estimation, random-matrices, random-matrix-theory-marchenko, random-walks-groups, renormalization-group, spectral-clustering, spectral-graph-theory, spectral-theorem-unbounded, spin-glasses-hopfield, state-space-models, weight-initialization-signal

## Entity: math/topology-basics
- Title: Topology and Metric Spaces
- Category: Mathematical Foundations
- Language: en
- Key Concepts: metric, $\mathbb{R}^n$ with Euclidean metric, Heine–Borel Theorem, Sequence spaces $\ell^p$, Cantor Intersection Theorem, Metric Spaces, Connectedness, Tietze Extension Theorem, converges, metric space, interior, Canonical Examples, Applications, Polish space, Topological Spaces
- References: convex-analysis, functional-analysis, math/sigma-algebra-measurability, math/skorokhod-topology, math/weak-convergence-prokhorov, sobolev-spaces
- Backlinks: complex-analysis, manifold, math/algebraic-topology, math/differential-geometry, math/hausdorff-measure, topological-phases

## Entity: math/borel-cantelli-zero-one
- Title: Borel-Cantelli Lemmas and Zero-One Laws
- Category: Measure Theory
- Language: en
- Key Concepts: infinite, tail σ-algebra, Connection to information theory, The 0/1 dichotomy, Proof, The "monkey and typewriter" paradox, Related Articles, Hewitt and Savage (1955), tail events have no "intermediate" probabilities, Borel-Cantelli Lemmas and Zero-One Laws, Lemma 1 (Borel-Cantelli)., Lemma 2 (reverse Borel-Cantelli)., Hewitt-Savage zero-one law, inevitably happen always or never, Example.
- References: brownian-motion, characteristic-functions, law-iterated-logarithm, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: math/branching-processes, math/glivenko-cantelli, math/law-of-large-numbers, math/lebesgue-integral, math/poisson-approximation

## Entity: math/cameron-martin-formula
- Title: Cameron-Martin Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: mutually singular, abstract Wiener space, Definition., reproducing kernel Hilbert space, Related Articles, Cameron-Martin Theorem, Applications, Connection to Girsanov's Theorem, Importance sampling., Theorem (Cameron-Martin)., Cameron-Martin space, Abstract Wiener Spaces, not, Wiener measure zero, deterministic special case
- References: brownian-motion, finance/girsanov-semimartingales, math/absolute-continuity-process-measures, math/conditional-expectation-sigma, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/sigma-algebra-measurability
- Backlinks: math/absolute-continuity-process-measures, math/gaussian-process-sample-paths, math/sde-numerical-methods, math/sequential-hypothesis-testing, math/stratonovich-integral

## Entity: math/conditional-expectation-sigma
- Title: Conditional Expectation w.r.t. a σ-Algebra
- Category: Measure Theory
- Language: en
- Key Concepts: Contractivity, Definition., Related Articles, not make sense, Claim (Radon-Nikodym)., Definition, regular conditional probability, Tower property, conditional distribution, average, best mean-square predictor, "Pull out what is known", martingale, Linearity, orthogonal projection
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, kalman-filter, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/cameron-martin-formula, math/cramer-rao-bound, math/discrete-martingales, math/doob-meyer-decomposition, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/predictable-compensator, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/differentiation-of-measures
- Title: Differentiation of Measures
- Category: Measure Theory
- Language: en
- Key Concepts: Differentiation of Measures, Stochastic calculus, Harmonic analysis, The Radon–Nikodym Theorem as Differentiation, The Hardy–Littlewood Maximal Function, The Calderón–Zygmund Decomposition, Related topics:, The Lebesgue Differentiation Theorem, Differentiation of General Measures, Proof of the Lebesgue Theorem via the Maximal Function, Calderón–Zygmund decomposition, pairwise almost disjoint, Several-variable theory, The Vitali Covering Theorem, symmetric derivative
- References: functional-analysis, math/absolute-continuity-process-measures, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure

## Entity: math/glivenko-cantelli
- Title: Glivenko-Cantelli Theorem and Empirical Processes
- Category: Measure Theory
- Language: en
- Key Concepts: Proof sketch, distribution-free, Related Articles, The DKW inequality, learning theory, Glivenko-Cantelli Theorem and Empirical Processes, empirical cumulative distribution function, fundamental theorem of statistics, Applications, The Kolmogorov-Smirnov test, empirical process, nonparametric maximum likelihood estimator, Glivenko-Cantelli class, Theorem (Glivenko 1933, Cantelli 1933)., Empirical processes
- References: brownian-motion, central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/weak-convergence-prokhorov
- Backlinks: math/borel-cantelli-zero-one, math/kernel-density-estimation

## Entity: math/hausdorff-measure
- Title: Hausdorff Measure and Fractal Dimension
- Category: Measure Theory
- Language: en
- Key Concepts: $\delta$-Approximation to Hausdorff Measure, Key property:, Definition and Jump Criterion, Comparison with Hausdorff Dimension, $\mathcal{H}^s$-measurable, Definition, Box-Counting Dimension, Agreement with Lebesgue Measure, $s$-dimensional Hausdorff measure, Hausdorff dimension, Besicovitch covering theorem, The Koch Snowflake, Application: Differentiation of Measures, Conclusion, The Standard Cantor Set in $[0,1]$
- References: brownian-motion, math/differentiation-of-measures, math/lebesgue-integral, math/product-measures-fubini, math/sigma-algebra-measurability, math/topology-basics, radon-nikodym

## Entity: math/kolmogorov-probability-axioms
- Title: Kolmogorov's Probability Axioms
- Category: Measure Theory
- Language: en
- Key Concepts: Distribution of a random variable:, Axiom 1 (non-negativity)., event, Related Articles, entire, Axiom 2 (normalization)., The axioms, What follows, measurable map, Random variable, probability space, Axiom 3 (countable additivity, σ-additivity)., σ-algebra of events, pairwise disjoint, The basic construction
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/ftap-first-fundamental-theorem, math/conditional-expectation-sigma, math/godel-incompleteness, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: bayesian-deep-learning, causal-inference, convex-analysis, course-math-for-ai, gaussian-processes, math/borel-cantelli-zero-one, math/central-limit-theorem, math/conditional-expectation-sigma, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-equations-ctmc, math/large-deviations-cramer, math/law-of-large-numbers, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, math/weak-convergence-prokhorov, measure-theory, radon-nikodym, variational-autoencoders

## Entity: math/lp-spaces
- Title: L^p Spaces
- Category: Measure Theory
- Language: en
- Key Concepts: complete normed vector space, Minkowski's inequality, Sobolev spaces, Hölder's Inequality, The Space $L^\infty$ and Essential Supremum, Sobolev Spaces and Generalizations, Hilbert space, Embeddings on Finite Measure Spaces, Weak $L^p$ Spaces and Marcinkiewicz Interpolation, Riesz representation theorem, Definition and Norm, Hölder's inequality, Related Concepts, Hilbert Structure of $L^2$, Duality: The Riesz Representation Theorem
- References: functional-analysis, math/conditional-expectation-sigma, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym, sobolev-spaces
- Backlinks: course-math-for-ai, hilbert-banach-spaces, math/differentiation-of-measures, math/harmonic-analysis, math/high-dimensional-statistics, math/lebesgue-integral, math/signed-measures, math/spectral-theory-operators, measure-theory, random-matrices

## Entity: math/lebesgue-integral
- Title: Lebesgue Integral
- Category: Measure Theory
- Language: en
- Key Concepts: Change of Variables, Monotonicity, References, Homogeneity, Product Integration and Fubini-Tonelli, Lebesgue integral, Related Concepts, Comparison with Riemann Integration, Monotone Convergence Theorem (MCT), Simple Functions and Elementary Integration, Approximation Results, Lebesgue Integral, Extension to Signed and Complex Functions, Additivity, simple functions
- References: math/borel-cantelli-zero-one, math/conditional-expectation-sigma, math/lp-spaces, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: course-math-for-ai, math/differentiation-of-measures, math/hausdorff-measure, math/lp-spaces, math/product-measures-fubini, math/signed-measures, measure-theory

## Entity: math/product-measures-fubini
- Title: Product Measures and Fubini's Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: Definition., product measure, If $f \geq 0$, Necessity of Integrability, Key observation:, Characteristic Functions., Convolution., Theorem (Fubini)., Convolution and Characteristic Functions, See also:, Measurability:, Integration order:, measurable with respect to the product σ-algebra, If $f$ is integrable, Tensor Products in Hilbert Spaces
- References: characteristic-functions, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure, math/lebesgue-integral, math/regular-conditional-probability

## Entity: radon-nikodym
- Title: Radon-Nikodym Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: Definition., Radon-Nikodym multiplicative functional, Extensions:, Lebesgue Decomposition, σ-finiteness:, Applications in Quantitative Finance, Proof sketch (Hilbert space method)., $\nu$-almost everywhere, Girsanov Theorem and Measure Change, See also:, Risk-Neutral Pricing., absolute continuity, measure derivatives, Absolute Continuity, Radon-Nikodym Theorem
- References: finance/girsanov-semimartingales, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optimal-transport
- Backlinks: math/differentiation-of-measures, math/hausdorff-measure, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/signed-measures, measure-theory

## Entity: math/regular-conditional-probability
- Title: Regular Conditional Probability
- Category: Measure Theory
- Language: en
- Key Concepts: conditionally independent given $C$, conditional probability kernel, Gaussian Conditional Distributions, transition probability, Markov Kernels and Stochastic Processes, Conditional Independence and Bayes' Theorem, Conditional expectation property, Theorem (Disintegration on Polish Spaces):, likelihood kernel, Existence and Uniqueness, Disintegration of Measures, The Borel Isomorphism Theorem, measure disintegration, The Problem with Naive Conditioning, regular version of the conditional probability
- References: math/conditional-expectation-sigma, math/density-processes, math/kolmogorov-probability-axioms, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/signed-measures
- Title: Signed Measures and Decomposition Theorems
- Category: Measure Theory
- Language: en
- Key Concepts: Absolute Continuity and Singularity, Proof sketch, Hahn Decomposition Theorem, Definition., [[contiguity-measures|Contiguity of Measures]], upper and lower variations, Complex Measures, Density processes, Lebesgue Decomposition, [[lebesgue-integral|Lebesgue Integral]], likelihood ratio, singular, Radon–Nikodym derivative, minimal, Definition and Basic Properties
- References: math/absolute-continuity-process-measures, math/contiguity-measures, math/density-processes, math/hellinger-processes, math/lebesgue-integral, math/lp-spaces, radon-nikodym

## Entity: math/sigma-algebra-measurability
- Title: σ-Algebras and Measurability
- Category: Measure Theory
- Language: en
- Key Concepts: λ-system, random variable, Connection to information theory, Definition., can distinguish, Examples., Related Articles, Closure under complements, standard, Closure under countable unions, Adaptedness, Definition, algebra, strictly before, σ-Algebras and Measurability
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms
- Backlinks: course-math-for-ai, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/conditional-expectation-sigma, math/differentiation-of-measures, math/discrete-martingales, math/doob-meyer-decomposition, math/hausdorff-measure, math/hellinger-processes, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/topology-basics, measure-theory, radon-nikodym

## Entity: cross-impact
- Title: Cross-Impact Models
- Category: Microstructure
- Language: en
- Key Concepts: Cross-Impact, Principal Components, Cross-Impact Models in Microstructure, Positive Semi-Definite (PSD), Eigen-Impact and Risk Models, ETF Arbitrage, The Mechanism of Cross-Impact, Diagonal elements, Market factor, Direct Impact, Visualization: The Cross-Impact Network, eigen-space, Related Topics, Sector factors, Off-diagonal elements
- References: eigenvalues-eigenvectors, finance/random-matrix-theory, kyle-model, market-impact, optimal-execution
- Backlinks: lead-lag-analysis, market-impact, multivariate-hawkes

## Entity: finance/dark-pools
- Title: Dark Pools and Market Fragmentation
- Category: Microstructure
- Language: en
- Key Concepts: Market Fragmentation, MiFID II Double Volume Cap (EU), Dark Pools and Market Fragmentation, Implementation, Herfindahl-Hirschman Index, Related Articles, Dark Pools, Types of Dark Pools
- References: finance/kyle-lambda, finance/pin-easley-ohara, optimal-execution, vpin

## Entity: deep-lob
- Title: Deep LOB (Order Book CNNs)
- Category: Microstructure
- Language: en
- Key Concepts: Latency, The Order Book as an Image, Inception Modules (CNNs), Output, Stationarity, Deep LOB: Convolutional Networks for the Order Book, Visualization: The CNN sliding over LOB, Deep LOB, The Network Architecture, LSTMs, Liquidity Void Detection, FPGAs, Convolutional Neural Networks (CNNs), Related Topics, Why it Dominates Handcrafted Features
- References: finance/order-flow-imbalance, modern-quantization, queue-reactive-models
- Backlinks: market-microstructure

## Entity: glosten-milgrom
- Title: Glosten-Milgrom Model
- Category: Microstructure
- Language: en
- Key Concepts: sell, Noise, Informed, Glosten-Milgrom Model: Adverse Selection Spread, Bid-Ask Spread, Price Discovery, Adverse Selection, The Bid-Ask Spread, Visualization: Spread and Information, Related Topics, Ask Price ($P_A$), buy, bid-ask spread, The Mathematical Mechanism, The Core Intuition
- References: kyle-model, vpin
- Backlinks: latency-arbitrage, roll-model, spread, vpin

## Entity: lead-lag-analysis
- Title: High-Frequency Lead-Lag Analysis
- Category: Microstructure
- Language: en
- Key Concepts: Negative $\theta$, Latency Arbitrage, HMM Regime Detection, Visualization: Lag Peak, Lead-Lag Analysis, Finding the Lag ($\theta$), High-Frequency Lead-Lag Analysis, Why Citadel cares, Related Topics, Cross-Correlation Function, Positive $\theta$, Hayashi-Yoshida (HY) Estimator, Mathematical Detection: The Hayashi-Yoshida Estimator, Order Flow Execution, The Epps Effect
- References: cross-impact, hmm-particle-filters, latency-arbitrage, vpin
- Backlinks: multivariate-hawkes

## Entity: finance/kyle-lambda
- Title: Kyle's Lambda: The Price Impact Coefficient
- Category: Microstructure
- Language: en
- Key Concepts: Applications, Hasbrouck's (1991) Information Share, Market-maker, Extensions, Insider, Related Articles, Kyle's Model (1985), Almgren-Chriss Impact Decomposition, Noise traders, market depth, Kyle's Lambda, basis points per million USD, market depth decreases toward the close, Market depth, Empirical Estimation
- References: amihud-illiquidity, avellaneda-stoikov, finance/order-flow-imbalance, optimal-execution, vpin
- Backlinks: finance/dark-pools, finance/order-flow-imbalance, finance/pin-easley-ohara, finance/repo-market-systemic, finance/vwap-twap, market-microstructure, spread

## Entity: latency-arbitrage
- Title: Latency Arbitrage and Frequent Batch Auctions
- Category: Microstructure
- Language: en
- Key Concepts: Related Topics, Latency Arbitrage, The Flaw of Continuous Time, The Solution: Frequent Batch Auctions (FBA), Latency Arbitrage and Frequent Batch Auctions, Why FBA fixes the market:, Visualization: The HFT Race, widening the bid-ask spread, Adverse Selection via Latency, Kills the Footrace, Removes the Liquidity Tax, single clearing price, Continuous Limit Order Book (CLOB), The Liquidity Tax, footrace
- References: glosten-milgrom, smart-order-routing
- Backlinks: lead-lag-analysis, mev

## Entity: market-impact
- Title: Market Impact and Square-root Law
- Category: Microstructure
- Language: en
- Key Concepts: 4. Impact in Advanced Trading, Square-root Law, 3. Price Discovery as Physics, Why is this surprising?, Price Discovery, Related Topics, Visualization: Impact vs. Order Size, Permanent Impact, 1. Permanent vs. Temporary Impact, 2. The Square-root Law, Meta-order Slicing, Temporary Impact, Latent Liquidity, Cross-Impact Matrix, Cross-Impact
- References: cross-impact, lob-propagators, optimal-execution, smart-order-routing, vpin
- Backlinks: cross-impact, kyle-model, lob-propagators, market-microstructure, spread

## Entity: lob-propagators
- Title: Mechanical Price Discovery: Propagators
- Category: Microstructure
- Language: en
- Key Concepts: Propagator function, Visualization: Response to a Trade, mechanical, Propagator models, The Propagator Equation, The Meaning of G(τ), Mechanical vs. Informational, Mechanical Price Discovery and Propagator Models, The Efficiency Condition, sign of the trade, Related Topics, Immediate Impact, Mean Reversion (Decay), Permanent Impact, transient and mechanical
- References: finance/hawkes-process, market-impact
- Backlinks: market-impact, queue-reactive-models

## Entity: multivariate-hawkes
- Title: Multivariate Hawkes Processes
- Category: Microstructure
- Language: en
- Key Concepts: Micro-Price Prediction, The Cross-Excitation Network, Visualization: The Excitation Impulse, Diagonal elements ($\alpha_{ii}$), Multivariate Hawkes Process, Market Making, Excitation Matrix, Flash Crash Detection, The Intensity Matrix, Multivariate Hawkes Processes: Micro-Contagion, cross-excitation, Application in Algorithmic Trading, Related Topics, Off-diagonal elements ($\alpha_{ij}$)
- References: cross-impact, finance/hawkes-process, lead-lag-analysis

## Entity: liquidation-signals
- Title: Optimal Liquidation with Alpha Signals
- Category: Microstructure
- Language: en
- Key Concepts: Related Topics, Opportunistic Execution, The Optimal Strategy: Drift-Adjusted Schedulling, LOB Imbalance, Cross-Asset Signals, Alpha Signals, The Augmented Objective Function, Optimal Liquidation with Signals, Urgency, Key Signals used in Modern Desks, Visualization: Signal-Driven Slicing, Trade Flow (Hawkes), Optimal Liquidation with Alpha Signals
- References: finance/order-flow-imbalance, optimal-execution, vpin

## Entity: finance/order-flow-imbalance
- Title: Order Flow Imbalance and Microprice
- Category: Microstructure
- Language: en
- Key Concepts: Predictive Performance, Implementation, Motivation, Order Flow Imbalance, Related Articles, Order Flow Imbalance and Microprice, Order Flow Imbalance (OFI), LOB-Based Definition, Multi-Level OFI, Spread-Normalized Skew, Stoikov's Generalised Microprice (2018), Predictive Model, Microprice
- References: avellaneda-stoikov, finance/hawkes-process, finance/kyle-lambda, lob-prediction, vpin
- Backlinks: deep-lob, finance/kyle-lambda, finance/vwap-twap, liquidation-signals, market-microstructure, queue-reactive-models

## Entity: vpin
- Title: Order Flow Toxicity and VPIN
- Category: Microstructure
- Language: en
- Key Concepts: Optimal Execution, Order Flow Toxicity, Informed Traders, 2. VPIN: The Mechanism, Adverse Selection Defense, 3. Interpretation and Usage, Noise Traders, Regime Detection, Easley, Lopez de Prado, and O'Hara, High VPIN (> 0.8), Low VPIN (< 0.2), Related Topics, The Flash Crash (2010), Order Flow Toxicity and VPIN, 1. The Informed Trading Risk
- References: finance/pin-easley-ohara, glosten-milgrom, hmm-particle-filters, optimal-execution
- Backlinks: finance/dark-pools, finance/kyle-lambda, finance/order-flow-imbalance, finance/pin-easley-ohara, glosten-milgrom, kyle-model, lead-lag-analysis, liquidation-signals, market-impact, optimal-execution, roll-model

## Entity: finance/pin-easley-ohara
- Title: PIN: Probability of Informed Trading
- Category: Microstructure
- Language: en
- Key Concepts: Implementation, PIN vs VPIN, Single-day likelihood, Related Articles, Game structure:, PIN (Probability of Informed Trading), PIN, PIN: Probability of Informed Trading, EKOP Model
- References: finance/kyle-lambda, roll-model, vpin
- Backlinks: finance/dark-pools, market-microstructure, vpin

## Entity: queue-reactive-models
- Title: Queue-Reactive Models (LOB Dynamics)
- Category: Microstructure
- Language: en
- Key Concepts: The Micro-Price, Why HFTs Use It, Market Making, Cancellations, Market Orders, Queue-Reactive Models of the Limit Order Book, Micro-Price, The "Reactive" Insight, The Physics of the Queue, Visualization: Transition Intensities, these rates depend strongly on the current size of the queues, Related Topics, Limit Orders (Arrivals), Limit Order Book (LOB), Queue-Reactive Models
- References: finance/hawkes-process, finance/order-flow-imbalance, lob-propagators
- Backlinks: deep-lob

## Entity: smart-order-routing
- Title: Smart Order Routing (SOR)
- Category: Microstructure
- Language: en
- Key Concepts: MEV Protection:, Liquidity Aggregation:, Dynamic Execution:, Price & Volume Analysis:, Gas Optimization:, Smart Order Routing (SOR), Multi-hop Paths:, SOR in Traditional Finance (CeFi), SOR in Decentralized Finance (DeFi), Dark Pools, Best Execution, slippage, Related Topics, How SOR Works
- References: market-microstructure
- Backlinks: amm-mechanics, asset-tokenization, cedefi-mechanics, course-cedefi, cross-chain-interop, latency-arbitrage, market-impact, mev, yield-aggregators

## Entity: kyle-model
- Title: The Kyle Model
- Category: Microstructure
- Language: en
- Key Concepts: informed trader, Informed Trader, Market Depth, Price Discovery, The Three Players, Visualization: Insider Hiding, Kyle's Lambda ($\lambda$), slowly and linearly, Market Maker (MM), Noise Traders, The Equilibrium Solution, Related Topics, Strategic Slowing, The Kyle Model: Strategic Informed Trading, market liquidity
- References: market-impact, optimal-execution, vpin
- Backlinks: cross-impact, glosten-milgrom

## Entity: roll-model
- Title: The Roll Model
- Category: Microstructure
- Language: en
- Key Concepts: 4. Limitations in Modern Markets, Related Topics, Hidden Costs, Effective Spread, negatively correlated, Zero Covariance, Roll Estimator, The Roll Model: Estimating the Effective Spread, Liquidity Proxy, Informed Trading, Visualization: The Bouncing Price, effective bid-ask spread, 3. Why it Matters, Low-Frequency Data, 2. The Mathematical Derivation
- References: amihud-illiquidity, glosten-milgrom, vpin
- Backlinks: finance/pin-easley-ohara

## Entity: finance/vwap-twap
- Title: VWAP and TWAP Execution Algorithms
- Category: Microstructure
- Language: en
- Key Concepts: TWAP (Time-Weighted Average Price), Implementation, Related Articles, Market VWAP, VWAP, Implementation Shortfall, VWAP and TWAP Execution Algorithms, VWAP (Volume-Weighted Average Price), TWAP, Participation algorithm
- References: avellaneda-stoikov, finance/kyle-lambda, finance/order-flow-imbalance, optimal-execution

## Entity: kuramoto-model
- Title: Kuramoto Model
- Category: Nonlinear Dynamics
- Language: en
- Key Concepts: 2. Adversarial Robustness, phase transition, Global Synchrony, Feature Binding:, 1. Artificial Kuramoto Oscillatory Neurons (AKOrN), Incoherence, Finance, Kuramoto Model, Related Topics, Artificial Intelligence, Phase Transition & Order Parameter, AI Applications, 2. Systemic Risk, Finance Applications, Overview
- References: ai-physics/hamiltonian-nn, graph-theory, pinns, stochastic-processes

## Entity: conjugate-gradient
- Title: Conjugate Gradient Method
- Category: Numerical Methods
- Language: en
- Key Concepts: Overview, Mechanism

## Entity: fft-math
- Title: Fast Fourier Transform (FFT)
- Category: Numerical Methods
- Language: en
- Key Concepts: Mathematical Basis (Cooley-Tukey), Overview

## Entity: newton-raphson-multi
- Title: Newton-Raphson (Multivariate)
- Category: Numerical Methods
- Language: en
- Key Concepts: Iteration, Overview

## Entity: power-iteration
- Title: Power Iteration
- Category: Numerical Methods
- Language: en
- Key Concepts: Algorithm, Overview

## Entity: runge-kutta
- Title: Runge-Kutta Methods
- Category: Numerical Methods
- Language: en
- Key Concepts: Overview, RK4

## Entity: dropout-math
- Title: Dropout Math
- Category: Optimization
- Language: en
- Key Concepts: Overview, Mechanism

## Entity: momentum-optimization
- Title: Momentum in Optimization
- Category: Optimization
- Language: en
- Key Concepts: Overview, Update Rule

## Entity: regularization-math
- Title: Regularization
- Category: Optimization
- Language: en
- Key Concepts: L2 (Ridge):, L1 and L2, L1 (Lasso):, Overview

## Entity: sgd-variants
- Title: Stochastic Gradient Descent
- Category: Optimization
- Language: en
- Key Concepts: Adam:, Variants, Overview, RMSProp:, Vanilla SGD:
- References: convex-optimization

## Entity: weight-initialization
- Title: Weight Initialization
- Category: Optimization
- Language: en
- Key Concepts: Techniques, Xavier/Glorot Initialization:, Overview, He (Kaiming) Initialization:

## Entity: ads-cft
- Title: AdS/CFT & Holographic Principle
- Category: Physics
- Language: en
- Key Concepts: Why AdS/CFT is trusted, Anti-de Sitter space, Related Topics, Impact, holographic principle, The holographic idea, Maldacena's conjecture, AdS/CFT & Holographic Principle, timelike boundary, type IIB string theory on AdS$_5 \times S^5$, [[celestial-holography]], $\mathcal N = 4$ super Yang-Mills theory with gauge group $SU(N)$, Beyond AdS: celestial holography, The Ryu-Takayanagi formula, entanglement [[gravitational-entropy|entropy]]
- References: black-hole-soft-hair, bms-group, celestial-holography, conformal-field-theory, general-relativity, gravitational-entropy, hawking-radiation, information-paradox, large-gauge-transformations, pasterski-triangle, soft-theorems
- Backlinks: black-hole-thermodynamics, gravitational-entropy, hawking-radiation, information-paradox

## Entity: anomalies
- Title: Anomalies
- Category: Physics
- Language: en
- Key Concepts: The chiral anomaly, Spontaneously, Anomalies, Explicitly, trace anomaly, The general picture, Gauge anomalies and the Standard Model, global, Anomalously, anomaly matching, anomaly, exact, Related Topics, Why anomalies matter, Anomaly matching and 't Hooft's constraint
- References: gauge-theory-yang-mills, goldstone-modes, noether-theorem, path-integral, renormalization-group, ward-identities
- Backlinks: math/banach-tarski, renormalization-group

## Entity: asymptotic-spacetime
- Title: Asymptotic Spacetime
- Category: Physics
- Language: en
- Key Concepts: See Also, Connections to Information Theory & Holography, Asymptotic Spacetime, Bondi-Sachs mass loss, Physical Interpretation, Peeling property, ADM mass, Vacuum degeneracy, Conformal structure, Theoretical Foundation, Visualization, Key Properties, Mathematical Formulation
- References: asymptotic-symmetries, bms-group, celestial-holography, math/differential-geometry
- Backlinks: gravitational-waves-gr, math/non-euclidean-geometry, scattering-amplitudes

## Entity: asymptotic-symmetries
- Title: Asymptotic Symmetries
- Category: Physics
- Language: en
- Key Concepts: See Also, Asymptotic Symmetries, Connections to Information Theory & Holography, Infinite vacuum degeneracy, Matching conditions, Large vs. small gauge transformations, Superrotation charges, Electromagnetic analogy, Physical Interpretation, Theoretical Foundation, Visualization, Key Properties, Mathematical Formulation
- References: bms-group, celestial-holography, soft-theorems
- Backlinks: asymptotic-spacetime, black-hole-soft-hair, bms-group, celestial-holography, goldstone-modes, group-theory, information-paradox, large-gauge-transformations, noether-theorem, pasterski-triangle, pauli-exclusion-quantization, soft-theorems, ward-identities

## Entity: bms-group
- Title: BMS Group
- Category: Physics
- Language: en
- Key Concepts: See Also, Goldstone interpretation, Infinite vacuum degeneracy, Connections to Information Theory & Holography, Physical Interpretation, Prerequisites, Memory effect, Celestial sphere action, BMS Group, Theoretical Foundation, Visualization, Key Properties, Mathematical Formulation, Ward identity = Soft theorem
- References: asymptotic-symmetries, celestial-holography, group-theory, pasterski-triangle
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, conformal-field-theory, gravitational-waves-gr, group-theory, large-gauge-transformations, math/non-euclidean-geometry, noether-theorem, pasterski-triangle, spin-memory, ward-identities

## Entity: information-paradox
- Title: Black Hole Information Paradox
- Category: Physics
- Language: en
- Key Concepts: Why it matters, Open questions, Statement of the paradox, Black hole complementarity, Page time, Information is lost., Page curve, Firewall, The Page curve, Remnants., black hole information paradox, Black Hole Information Paradox, Candidate resolutions, Related Topics, The island formula
- References: ads-cft, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, general-relativity, gravitational-entropy, hawking-radiation, pasterski-triangle, path-integral, qft-basic
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, hawking-radiation, large-gauge-transformations, math/godel-incompleteness

## Entity: black-hole-soft-hair
- Title: Black Hole Soft Hair
- Category: Physics
- Language: en
- Key Concepts: The Area Law of [[gravitational-entropy|Entropy]], Limitations, Black Hole Soft Hair, Visualization: [[gravitational-entropy|Entropy]] Scaling, Connections to Information Theory & Holography, See Also, Electromagnetic hair, Physical Interpretation, Prerequisites, Infinite degeneracy, Zero energy, Theoretical Foundation, Horizon vs. infinity, Key Properties, Mathematical Formulation
- References: asymptotic-symmetries, bms-group, celestial-holography, gravitational-entropy, gravitational-memory, soft-theorems
- Backlinks: ads-cft, information-paradox, large-gauge-transformations, memory-effects, quantum-entanglement, spin-memory

## Entity: black-hole-thermodynamics
- Title: Black Hole Thermodynamics
- Category: Physics
- Language: en
- Key Concepts: The Information Paradox, Black Hole Thermodynamics, Bekenstein-Hawking [[gravitational-entropy|Entropy]], 0th, ergosphere, Penrose process, information paradox, The Penrose Process, 1st, firewall, Connection to Holography, irreducible mass, holographic principle, The Firewall Paradox, Bekenstein-Hawking entropy
- References: ads-cft, general-relativity, gravitational-entropy, gravitational-waves-gr, hawking-radiation, information-paradox
- Backlinks: ads-cft-deep, gravitational-entropy, hawking-radiation, quantum-information-entropy

## Entity: celestial-holography
- Title: Celestial Holography
- Category: Physics
- Language: en
- Key Concepts: See Also, Connections to Information Theory & Holography, Lorentz = global conformal group, Physical Interpretation, Prerequisites, Celestial Holography, Theoretical Foundation, $w_{1+\infty}$ symmetry, Visualization, Key Properties, Soft theorems as Ward identities, Mathematical Formulation, Loop corrections, Continuous spectrum
- References: asymptotic-symmetries, bms-group, conformal-field-theory, gravitational-entropy, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, bms-group, conformal-field-theory, gravitational-entropy, gravitational-waves-gr, group-theory, information-paradox, large-gauge-transformations, math/non-euclidean-geometry, pasterski-triangle, qft-basic, scattering-amplitudes, soft-theorems, spin-memory, wave-particle-duality

## Entity: conformal-field-theory
- Title: Conformal Field Theory (CFT)
- Category: Physics
- Language: en
- Key Concepts: See Also, Connections to Information Theory & Holography, Physical Interpretation, Conformal blocks, Prerequisites, Theoretical Foundation, Conformal Field Theory (CFT), Modular invariance, Unitarity bounds, State-operator correspondence, Mathematical Formulation, Cardy formula, Key Properties
- References: bms-group, celestial-holography, gravitational-entropy, group-theory, qft-basic, quantization, schrodinger-equation
- Backlinks: ads-cft, ads-cft-deep, celestial-holography, kan, renormalization-group, sle

## Entity: dirac-equation
- Title: Dirac Equation
- Category: Physics
- Language: en
- Key Concepts: right-handed, Antimatter., Dirac equation, As a field theory, positrons, Coupling to gauge fields, quantum field, Related Topics, Spin $\tfrac{1}{2}$., Chirality and the Standard Model, Spinors and Lorentz transformations, left-handed, Dirac's problem, Predictions, Clifford algebra
- References: gauge-theory-yang-mills, maxwell-electromagnetism, pauli-exclusion-quantization, qft-basic, schrodinger-equation, special-relativity
- Backlinks: gauge-theory-yang-mills, maxwell-electromagnetism

## Entity: fokker-planck-equation
- Title: Fokker-Planck Equation
- Category: Physics
- Language: en
- Key Concepts: Computational methods, Boltzmann distribution, detailed balance condition, Finite differences:, forward equation (FP), Spectral methods:, Fokker-Planck equation (FP), Direct simulation:, Related Topics, probability current, Stationary distribution, Detailed balance and statistical mechanics, Derivation from the Kramers-Moyal expansion, Path integral representation, Multidimensional generalization
- References: brownian-motion, geometric-brownian-motion, math/kolmogorov-equations-ctmc, ornstein-uhlenbeck-process, partial-differential-equations, path-integral, stochastic-differential-equations
- Backlinks: diffusion-models, feynman-kac, neural-operators, nonequilibrium-statmech

## Entity: gauge-theory-yang-mills
- Title: Gauge Theory & Yang-Mills
- Category: Physics
- Language: en
- Key Concepts: asymptotic freedom, Non-abelian case: Yang-Mills, The three forces of the Standard Model, Quantisation: Faddeev-Popov and BRST, covariant derivative, Gauge Theory & Yang-Mills, confines, ghost fields, gauge bosons are charged under the gauge symmetry and interact with each other, Gauge theories, Why gauge theory is inevitable, Massless spin-1 particles must couple through a conserved current., BRST symmetry, Asymptotic freedom and confinement, Renormalisability.
- References: dirac-equation, goldstone-modes, maxwell-electromagnetism, noether-theorem, path-integral, qft-basic, renormalization-group, ward-identities
- Backlinks: anomalies, connections-curvature, dirac-equation, large-gauge-transformations, lie-groups-algebras, maxwell-electromagnetism, renormalization-group, topological-phases

## Entity: goldstone-modes
- Title: Goldstone Modes
- Category: Physics
- Language: en
- Key Concepts: Spontaneous symmetry breaking, massless modes, effective Lagrangian, soft-pion theorem, pseudo-Goldstone bosons, Goldstone's theorem, Example., The Higgs mechanism: eating Goldstones, spontaneously broken, Related Topics, Sketch of the proof., Nambu-Goldstone bosons, Soft theorems and the asymptotic connection, Weinberg soft theorems, Physical examples
- References: asymptotic-symmetries, math/differential-geometry, noether-theorem, pasterski-triangle, qft-basic, soft-theorems, ward-identities
- Backlinks: anomalies, gauge-theory-yang-mills, large-gauge-transformations

## Entity: gravitational-entropy
- Title: Gravitational Entropy and Holography
- Category: Physics
- Language: en
- Key Concepts: Covariant Entropy Bound (Bousso), The Page Curve, Page curve, Gravitational Entropy and Holography, replica wormholes, holographic principle, island, area, Bousso-Engelhardt, not, Related Topics, The Bekenstein Bound, After the Page time, Ryu-Takayanagi Formula, Bousso bound
- References: ads-cft, black-hole-thermodynamics, celestial-holography, general-relativity, hawking-radiation, information-paradox
- Backlinks: ads-cft, black-hole-soft-hair, black-hole-thermodynamics, celestial-holography, conformal-field-theory, hawking-radiation, information-paradox, laws-of-thermodynamics, nonequilibrium-statmech, pauli-exclusion-quantization, quantum-entanglement, quantum-information-entropy, statistical-mechanics, uncertainty-principle

## Entity: gravitational-memory
- Title: Gravitational Memory
- Category: Physics
- Language: en
- Key Concepts: Gravitational Memory, See Also, Connections to Information Theory & Holography, Two types, Supertranslation transition, Spin memory, Detectable, Physical Interpretation, Prerequisites, Theoretical Foundation, DC offset, Key Properties, Mathematical Formulation
- References: gravitational-waves-gr, memory-effects, pasterski-triangle, soft-theorems
- Backlinks: black-hole-soft-hair, gravitational-waves-gr, memory-effects, spin-memory

## Entity: gravitational-waves-gr
- Title: Gravitational Waves & General Relativity
- Category: Physics
- Language: en
- Key Concepts: See Also, Connections to Information Theory & Holography, Speed, Gravitational Waves & General Relativity (GR), Physical Interpretation, Two polarizations, Strain sensitivity, Theoretical Foundation, Quadrupole emission, Key Properties, Peeling, Mathematical Formulation
- References: asymptotic-spacetime, bms-group, celestial-holography, gravitational-memory, math/differential-geometry, pasterski-triangle
- Backlinks: black-hole-thermodynamics, gravitational-memory, hawking-radiation, math/non-euclidean-geometry

## Entity: group-theory
- Title: Group Theory
- Category: Physics
- Language: en
- Key Concepts: See Also, Group Theory in Physics, Representation theory of the Poincaré group, Spontaneous symmetry breaking, Connections to Information Theory & Holography, Peter-Weyl theorem, Applications in Machine Learning, Schur's lemma, Physical Interpretation, Theoretical Foundation, Anomalies, Visualization, Key Properties, Mathematical Formulation
- References: asymptotic-symmetries, bms-group, celestial-holography, equivariant-nn, math/differential-geometry, quantum-entanglement
- Backlinks: bms-group, conformal-field-theory, equivariant-nn, noether-theorem, qft-basic

## Entity: hawking-radiation
- Title: Hawking Radiation
- Category: Physics
- Language: en
- Key Concepts: Why This Matters, Related Topics, Planck spectrum, Bogoliubov transformation, trans-Planckian problem, Black Hole Evaporation, The Trans-Planckian Problem, Virtual Pair Production Near the Horizon, Unruh effect, Hawking Radiation, evaporation timescale, The Bogoliubov Transformation, In-modes, Hawking Temperature, Out-modes
- References: ads-cft, black-hole-thermodynamics, general-relativity, gravitational-entropy, gravitational-waves-gr, information-paradox
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, information-paradox

## Entity: uncertainty-principle
- Title: Heisenberg Uncertainty Principle
- Category: Physics
- Language: en
- Key Concepts: See Also, Connections to Information Theory & Holography, Fourier duality, Measurement backaction, Physical Interpretation, Heisenberg Uncertainty Principle, Theoretical Foundation, Generalized uncertainty principle (GUP), Canonical pairs, Key Properties, Mathematical Formulation, Zero-point energy
- References: gravitational-entropy, quantum-entanglement, schrodinger-equation, wave-particle-duality
- Backlinks: wave-particle-duality

## Entity: kolmogorov-arnold-theorem
- Title: Kolmogorov-Arnold Theorem
- Category: Physics
- Language: en
- Key Concepts: Parametrisation trade-off., Symbolic regression., curse of dimensionality, Kolmogorov-Arnold theorem, Relation to approximation theory, exact representation, universal approximation theorem, Statement, Implications for neural networks, learnable univariate functions on edges, Non-constructive., Interpretation., Related Topics, not smooth, Hilbert's thirteenth problem
- References: finance/spectral-analysis, kan, learnable-activations, partial-differential-equations, pinns, transformer-architecture
- Backlinks: kan, learnable-activations

## Entity: large-gauge-transformations
- Title: Large Gauge Transformations
- Category: Physics
- Language: en
- Key Concepts: asymptotic charges, Related Topics, small, Large gauge transformations, strong CP problem, Small vs. large, Large gauge in non-abelian theories and instantons, Spontaneous symmetry breaking of large gauge, [[bms-group|BMS]] group, spontaneously broken, Why this is a big deal, Large Gauge Transformations, Ward identities = soft theorems, large, instantons
- References: asymptotic-symmetries, black-hole-soft-hair, bms-group, celestial-holography, gauge-theory-yang-mills, goldstone-modes, information-paradox, memory-effects, noether-theorem, pasterski-triangle, soft-theorems, ward-identities
- Backlinks: ads-cft

## Entity: maxwell-electromagnetism
- Title: Maxwell's Electromagnetism
- Category: Physics
- Language: en
- Key Concepts: Maxwell's equations, Covariant formulation, Lorentz force, Energy, momentum, and radiation, Liénard-Wiechert potentials, From Maxwell to QED, The equations, Larmor power, Maxwell's Electromagnetism, Lagrangian, quantum electrodynamics (QED), Bianchi identity, displacement current, Electromagnetic waves, Related Topics
- References: dirac-equation, gauge-theory-yang-mills, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes, soft-theorems, special-relativity, ward-identities
- Backlinks: dirac-equation, gauge-theory-yang-mills

## Entity: memory-effects
- Title: Memory Effects
- Category: Physics
- Language: en
- Key Concepts: See Also, Universality, Infrared origin, Connections to Information Theory & Holography, Detectability, Physical Interpretation, Prerequisites, Memory Effects, Theoretical Foundation, Visualization, Key Properties, Mathematical Formulation, Hierarchy, Vacuum transitions
- References: black-hole-soft-hair, gravitational-memory, pasterski-triangle, soft-theorems, spin-memory
- Backlinks: gravitational-memory, large-gauge-transformations, spin-memory

## Entity: noether-theorem
- Title: Noether's Theorem
- Category: Physics
- Language: en
- Key Concepts: large gauge transformations, Noether's Theorem, Ward-Takahashi identities, Related Topics, conserved current, The dictionary of symmetries and charges, Statement, Example: electric charge from global phase symmetry, Example: energy from time-translation invariance, Ward identities, Noether's theorem, Bianchi identities, Quantum Noether, Local, Global vs. local symmetries
- References: asymptotic-symmetries, bms-group, group-theory, hamiltonian-mechanics, lagrangian-mechanics, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, math/variational-calculus, maxwell-electromagnetism, path-integral, ward-identities

## Entity: partial-differential-equations
- Title: Partial Differential Equations
- Category: Physics
- Language: en
- Key Concepts: Finite elements (FEM)., Mesh-based vs mesh-free., Hyperbolic, Robin / mixed, Spectral methods., Initial conditions, Neumann, Spectral bias in PINNs:, Reaction-diffusion systems:, Partial Differential Equations, Inverse problems, Partial differential equations (PDEs), Dirichlet, Stiffness and multiscale structure, Related Topics
- References: automatic-differentiation, brownian-motion, finance/fractional-fokker-planck, pinns, schrodinger-equation
- Backlinks: automatic-differentiation, convertible-bonds, feynman-kac, fokker-planck-equation, fourier-neural-operators, fredholm-theory, hydrodynamic-limits, kolmogorov-arnold-theorem, math/harmonic-analysis, math/spdes, math/spectral-theory-operators, mckean-vlasov-sdes, neural-operators, numerical-pde-finance, pinns, risk-neutral-valuation, schwartz-distributions

## Entity: pasterski-triangle
- Title: Pasterski's Triangle Theory
- Category: Physics
- Language: en
- Key Concepts: See Also, Connections to Information Theory & Holography, Pasterski's Triangle Theory, Physical Interpretation, Quantum level, Leg 3 — Memory Effects $\leftrightarrow$ Soft Theorems (Fourier transform):, Subleading triangle, Sub-subleading, Cross-theory, Prerequisites, Leg 1 — Soft Theorems $\leftrightarrow$ Asymptotic Symmetries (Ward identities):, Theoretical Foundation, Leg 2 — Asymptotic Symmetries $\leftrightarrow$ Memory Effects (vacuum transitions):, Key Properties, Mathematical Formulation
- References: asymptotic-symmetries, bms-group, celestial-holography, scattering-amplitudes, soft-theorems, spin-memory
- Backlinks: ads-cft, bms-group, goldstone-modes, gravitational-memory, gravitational-waves-gr, information-paradox, large-gauge-transformations, memory-effects, soft-theorems, ward-identities

## Entity: path-integral
- Title: Path Integral Formulation
- Category: Physics
- Language: en
- Key Concepts: Feynman diagrams, partition function, Numerical computation., Non-perturbative physics., ghost fields, Caveats, Ward identities, Related Topics, The basic idea, Faddeev-Popov procedure, Euclidean path integral and statistical mechanics, Path Integral Formulation, Manifest Lorentz invariance., The classical limit, path integral formulation
- References: hamiltonian-mechanics, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes
- Backlinks: anomalies, feynman-kac, fokker-planck-equation, gauge-theory-yang-mills, information-paradox, path-integrals, renormalization-group, statistical-mechanics, ward-identities

## Entity: pauli-exclusion-quantization
- Title: Pauli Exclusion Principle & Quantization
- Category: Physics
- Language: en
- Key Concepts: Exchange interaction, See Also, Connections to Information Theory & Holography, Anyons, Fermi pressure, Cooper pairs, Pauli Exclusion Principle & [[quantization]], Physical Interpretation, Theoretical Foundation, Atomic shell structure, Key Properties, Mathematical Formulation
- References: asymptotic-symmetries, gravitational-entropy, quantization, quantum-entanglement
- Backlinks: dirac-equation, qft-basic

## Entity: qft-basic
- Title: QFT: Basic Level
- Category: Physics
- Language: en
- Key Concepts: See Also, Quantum Field Theory (QFT): Basic Level, Spontaneous symmetry breaking, Connections to Information Theory & Holography, Crossing symmetry, Physical Interpretation, Optical theorem, Prerequisites, Renormalization, Theoretical Foundation, CPT theorem, Key Properties, Mathematical Formulation
- References: celestial-holography, finance/monte-carlo-method, group-theory, pauli-exclusion-quantization, quantization, scattering-amplitudes, schrodinger-equation, wave-particle-duality
- Backlinks: conformal-field-theory, dirac-equation, equivariant-nn, finance/monte-carlo-method, gauge-theory-yang-mills, goldstone-modes, information-paradox, kan, maxwell-electromagnetism, path-integral, quantum-mechanics, renormalization-group, statistical-mechanics, ward-identities

## Entity: quantum-entanglement
- Title: Quantum Entanglement
- Category: Physics
- Language: en
- Key Concepts: See Also, Entanglement distillation, Connections to Information Theory & Holography, Entanglement as resource, Monogamy, Physical Interpretation, Area law, Theoretical Foundation, Quantum Entanglement, Key Properties, Mathematical Formulation, Non-locality
- References: black-hole-soft-hair, finance/random-matrix-theory, finance/shannon-entropy, gravitational-entropy, schrodinger-equation, superposition-collapse
- Backlinks: finance/random-matrix-theory, finance/shannon-entropy, finance/zeta-field, group-theory, linear-spaces-basis, pauli-exclusion-quantization, quantum-information-entropy, quantum-mechanics, superposition-collapse, uncertainty-principle

## Entity: renormalization-group
- Title: Renormalization Group
- Category: Physics
- Language: en
- Key Concepts: Marginal, Callan-Symanzik equation, Fixed points and universality, non-renormalisable, leading-log resummation, Asymptotic safety and the space of theories, Running couplings in QFT, effective field theories, Renormalization Group, fixed point, asymptotically safe, Related Topics, Irrelevant, Wilsonian RG transformation, asymptotic freedom
- References: anomalies, conformal-field-theory, gauge-theory-yang-mills, math/spectral-theory-operators, path-integral, qft-basic, ward-identities
- Backlinks: anomalies, effective-field-theory, gauge-theory-yang-mills, many-body-tensor-networks

## Entity: scattering-amplitudes
- Title: Scattering Amplitudes & S-matrix
- Category: Physics
- Language: en
- Key Concepts: See Also, Connections to Information Theory & Holography, On-shell methods, Soft limits, Physical Interpretation, Scattering Amplitudes & S-matrix, BCJ duality and double copy, Color decomposition, Collinear limits, Theoretical Foundation, Key Properties, Mathematical Formulation
- References: asymptotic-spacetime, celestial-holography, soft-theorems
- Backlinks: celestial-holography, equivariant-nn, maxwell-electromagnetism, pasterski-triangle, path-integral, qft-basic, soft-theorems

## Entity: soft-theorems
- Title: Soft Theorems
- Category: Physics
- Language: en
- Key Concepts: See Also, Universality, Quantum corrections, Connections to Information Theory & Holography, Physical Interpretation, Prerequisites, Infrared divergences, Soft photon vs. graviton, Theoretical Foundation, Soft Theorems, Key Properties, Mathematical Formulation, Color
- References: asymptotic-symmetries, celestial-holography, pasterski-triangle, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-symmetries, black-hole-soft-hair, goldstone-modes, gravitational-memory, large-gauge-transformations, maxwell-electromagnetism, memory-effects, noether-theorem, pasterski-triangle, scattering-amplitudes, ward-identities

## Entity: spin-memory
- Title: Spin Memory
- Category: Physics
- Language: en
- Key Concepts: See Also, Superrotation Ward identity, Connections to Information Theory & Holography, Spin Memory, Amplitude, Physical Interpretation, Prerequisites, Angular momentum signature, Subleading order, Theoretical Foundation, Circular orbit detection, Key Properties, Mathematical Formulation
- References: black-hole-soft-hair, bms-group, celestial-holography, gravitational-memory, memory-effects
- Backlinks: memory-effects, pasterski-triangle

## Entity: statistical-mechanics
- Title: Statistical Mechanics
- Category: Physics
- Language: en
- Key Concepts: partition function, Boltzmann distribution, Energy-based models, Summary, principle of minimum free energy, Boltzmann machines, Free energy minimization as unifying principle, [[gravitational-entropy|Entropy]] and information, the macroscopic state of an equilibrium system is completely described by a probabilistic ensemble, Microcanonical ensemble, Gibbs [[gravitational-entropy|entropy]], Annealing and optimization, Wick rotation and connection to quantum mechanics, Applications to machine learning, The ergodic hypothesis
- References: finance/shannon-entropy, gravitational-entropy, math/ergodic-theorems-birkhoff, path-integral, qft-basic
- Backlinks: bayesian-deep-learning, convergence-of-semimartingales, copulas, energy-based-models, freidlin-wentzell-theory, gaussian-processes, maximum-entropy, nonequilibrium-statmech, sle, variational-autoencoders, wentzell-freidlin

## Entity: superposition-collapse
- Title: Superposition & Collapse
- Category: Physics
- Language: en
- Key Concepts: See Also, Connections to Information Theory & Holography, Superposition & Collapse, Quantum Zeno effect, Physical Interpretation, Pointer states, No-cloning theorem, Theoretical Foundation, Linearity, Key Properties, Mathematical Formulation, Macroscopic superpositions
- References: quantum-entanglement, schrodinger-equation
- Backlinks: quantum-entanglement

## Entity: ward-identities
- Title: Ward Identities
- Category: Physics
- Language: en
- Key Concepts: $Z_1 = Z_2$, Ward Identities, Anomalies, Chiral anomaly, Conformal / trace anomaly, Ward identities for gauge symmetries: Slavnov-Taylor, anomaly, Ward identities, Related Topics, Weinberg's soft-graviton theorem, Weinberg's soft-photon theorem, Asymptotic symmetries and soft theorems, QED Ward-Takahashi identity, Unphysical polarisations of the photon decouple., Slavnov-Taylor identities
- References: asymptotic-symmetries, bms-group, noether-theorem, pasterski-triangle, path-integral, qft-basic, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, maxwell-electromagnetism, renormalization-group

## Entity: wave-particle-duality
- Title: Wave-Particle Duality
- Category: Physics
- Language: en
- Key Concepts: See Also, Coherence length, Connections to Information Theory & Holography, Thermal de Broglie wavelength, Matter-wave interferometry, Physical Interpretation, Complementarity, Theoretical Foundation, Key Properties, Delayed-choice experiments, Mathematical Formulation, Wave-Particle Duality
- References: celestial-holography, schrodinger-equation, uncertainty-principle
- Backlinks: qft-basic, uncertainty-principle

## Entity: heat-equation
- Title: Heat Equation
- Category: Physics Foundations
- Language: en
- Key Concepts: Formulation, Overview

## Entity: laws-of-thermodynamics
- Title: Laws of Thermodynamics
- Category: Physics Foundations
- Language: en
- Key Concepts: First Law (Conservation of Energy):, Zeroth Law:, Second Law:, Third Law:, The Four Laws
- References: gravitational-entropy

## Entity: maxwells-equations
- Title: Maxwell's Equations
- Category: Physics Foundations
- Language: en
- Key Concepts: Gauss's Law:, Faraday's Law:, Overview, Gauss's Law for Magnetism:, Differential Form, Ampère-Maxwell Law:
- Backlinks: stokes-theorem

## Entity: schrodinger-equation
- Title: Schrodinger Equation
- Category: Physics Foundations
- Language: en
- Key Concepts: Time-Dependent Equation, Overview
- Backlinks: brownian-motion, conformal-field-theory, dirac-equation, generative-models, math/spectral-theory-operators, partial-differential-equations, pinns, qft-basic, quantum-entanglement, quantum-mechanics, superposition-collapse, uncertainty-principle, wave-particle-duality

## Entity: wave-equation
- Title: Wave Equation
- Category: Physics Foundations
- Language: en
- Key Concepts: Mathematical Formulation, Overview

## Entity: bayesian-kelly
- Title: Bayesian Kelly Criterion
- Category: Portfolio
- Language: en
- Key Concepts: Fractional Kelly as a Heuristic, Bayesian Kelly, Bayesian Kelly Criterion and Parameter Uncertainty, expected growth across all possible values of $\mu$, mathematical justification for Fractional Kelly, Posterior Distribution, The Flaw of Plug-in Estimates, Visualization: The Kelly Cliff, Related Topics, Drawdown Control, The Bayesian Solution
- References: kelly-criterion, merton-portfolio, variational-inference
- Backlinks: bayesian-inference, kelly-jump-diffusion

## Entity: entropy-pooling
- Title: Entropy Pooling (Meucci)
- Category: Portfolio
- Language: en
- Key Concepts: The Optimization Problem, Related Topics, Why Tier-1 Funds Use It, Visualization: Shifting the Distribution, Options and Non-Linearities, The Core Concept: Minimum Relative [[shannon-entropy|Entropy]], Prior, Kullback-Leibler (KL) Divergence, normally distributed, [[shannon-entropy|Entropy]] Pooling: Advanced Portfolio Construction, Posterior, Stress Testing, linear, Ranking Signals, Convex Optimization
- References: bayesian-black-litterman, convex-optimization-trading, finance/shannon-entropy, financial-entropy
- Backlinks: information-geometry-finance

## Entity: kelly-jump-diffusion
- Title: Kelly Criterion with Jump-Diffusion
- Category: Portfolio
- Language: en
- Key Concepts: Related Topics, Geometric Brownian Motion (GBM), You are bankrupt., Why Funds Use Fractional Kelly, negative infinity, Visualization: The Jump-Aware Curve, The Modified Kelly Formula, jumps, Jumps, The Jump-Diffusion Setup, Jump-Diffusion Kelly, Kelly Criterion in Jump-Diffusion Models, The Bankruptcy Constraint, The Danger of Continuous Leverage
- References: bayesian-kelly, frtb-es, kelly-criterion, merton-jump-diffusion, merton-portfolio

## Entity: merton-portfolio
- Title: Merton's Portfolio Problem
- Category: Portfolio
- Language: en
- Key Concepts: Kelly Criterion Limit, constant, Myopic Behavior, Key Insights from the Formula:, Risk-free Bond, The Mathematical Setup, Risk Adjustment, Hamilton-Jacobi-Bellman (HJB) Equation, The Elegant Solution, Risky Asset (Stock), Merton's Portfolio Problem, Visualization: The Optimal Path, Related Topics, Risk Premium, Solving via the HJB Equation
- References: geometric-brownian-motion, kelly-criterion, stochastic-control, stochastic-differential-equations
- Backlinks: bayesian-kelly, kelly-jump-diffusion, path-integral-control

## Entity: nonlinear-shrinkage
- Title: Nonlinear Shrinkage of Covariance
- Category: Portfolio
- Language: en
- Key Concepts: Related Topics, Robustness, Why Citadel Uses It, Transaction Costs, Linear vs. Nonlinear Shrinkage, Nonlinear Shrinkage (2017), sample covariance matrix, Stability, The Eigenvalue Distortion (Marchenko-Pastur), Visualization: Eigenvalue Cleaning, Nonlinear Shrinkage, The Mathematical Mechanism, Nonlinear Shrinkage of Covariance (Ledoit-Wolf), each eigenvalue, Hilbert Transform
- References: eigenvalues-eigenvectors, finance/markowitz-mean-variance, finance/random-matrix-theory, math/spectral-theory-operators

## Entity: universal-portfolios
- Title: Universal Portfolios
- Category: Portfolio
- Language: en
- Key Concepts: Related Topics, Universal Portfolios, sublinear regret, ensemble method, Constant-Rebalanced Portfolio (CRP), MCMC sampling, The Problem Setup, Cover's Algorithm, Practical Limitations, best constant-rebalanced portfolio (BCRP), Universal Portfolios (Cover's Algorithm), The Guarantee (No Regret), Visualization: Catching the Optimum
- References: kelly-criterion, math/information-theory, online-learning-regret

## Entity: convex-optimization-in-trading
- Title: Convex Optimization in Quantitative Trading
- Category: Portfolio Management
- Language: en
- Key Concepts: See Also, Convex Optimization in Quantitative Trading
- References: algorithmic-execution-twap-vwap, course-quant-trading, portfolio-optimization-and-black-litterman
- Backlinks: portfolio-optimization-and-black-litterman

## Entity: factor-investing-and-fama-french
- Title: Factor Investing & Fama-French Models
- Category: Portfolio Management
- Language: en
- Key Concepts: See Also, Factor Investing & Fama-French Models
- References: course-quant-trading, portfolio-optimization-and-black-litterman, statistical-arbitrage-and-pairs-trading

## Entity: portfolio-optimization-and-black-litterman
- Title: Portfolio Optimization & Black-Litterman Model
- Category: Portfolio Management
- Language: en
- Key Concepts: See Also, Portfolio Optimization & Black-Litterman Model, 1. Black-Litterman Formula
- References: convex-optimization-in-trading, course-quant-trading, quant-risk-management-var-cvar
- Backlinks: convex-optimization-in-trading, copula-models-and-tail-dependence, factor-investing-and-fama-french, portfolio-risk-decomposition-marginal-var

## Entity: finance/bs-market-self-financing
- Title: (B,S)-Market and Self-Financing Strategies
- Category: Pricing
- Language: en
- Key Concepts: The Model, Definition., discrete stochastic integral, strategy (portfolio), Admissibility, Risky assets, Strategy and Capital, Related Articles, capital, Bank account, admissible, Self-Financing, Connection to the broader theory, (B,S)-Market and Self-Financing Strategies, discounted
- References: brownian-motion, finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/self-similarity-fractality, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability, put-call-parity

## Entity: finance/apt-ross
- Title: Arbitrage Pricing Theory (APT)
- Category: Pricing
- Language: en
- Key Concepts: no asymptotic arbitrage in a large market, weaker but more universal, Main statement, factor zoo problem, Related Articles, first, uncorrelated across assets, most assets, APT theorem (Ross 1976; Huberman 1982)., Weakness: choice of factors, Comparison with CAPM, which, Connection to large markets, alternative to [[capm|CAPM]], Arbitrage Pricing Theory (APT)
- References: fama-macbeth-regression, finance/alpha-stacking, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/markowitz-mean-variance

## Entity: finance/arbitrage-definition
- Title: Arbitrage and Its Absence
- Category: Pricing
- Language: en
- Key Concepts: main filter, Geometrically., Why bother: the first fundamental theorem, Related Articles, NFLVR (No Free Lunch with Vanishing Risk), Definition 2., modelling axiom, Equivalent Formulations, Strengthenings and Generalizations, arbitrage opportunity, Via the set of attainable claims., discounted, Via discounted increments., Intuition, Definition 1.
- References: finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models
- Backlinks: cost-of-carry, finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/crr-model, finance/ftap-first-fundamental-theorem

## Entity: finance/asymptotic-arbitrage-large-markets
- Title: Asymptotic Arbitrage and Large Markets
- Category: Pricing
- Language: en
- Key Concepts: Definition., Related Articles, diversify in the limit, contiguity, Asymptotic Arbitrage and Large Markets, Asymptotic arbitrage, asymptotic arbitrage of the second kind, formally arbitrage-free, Connection to Ross's APT, Definition (AA of the second kind)., equivalence, asymptotic arbitrage, statistical arbitrage, mutual contiguity, Contiguity as a criterion
- References: black-scholes, fama-macbeth-regression, finance/alpha-stacking, finance/arbitrage-definition, finance/crr-model, finance/ftap-first-fundamental-theorem
- Backlinks: finance/apt-ross, finance/arbitrage-definition, math/weak-convergence-prokhorov

## Entity: finance/asymptotic-expansion-finance
- Title: Asymptotic Expansions in Finance
- Category: Pricing
- Language: en
- Key Concepts: Singular Perturbation: Fast Mean-Reverting Stochastic Vol, Smile extrapolation, SABR implied volatility formula, Fast calibration, The SABR Formula (Hagan-Woodward), Small-Time Expansion for Local Volatility, Comparison of Methods, Practical Applications, Analytic Greeks, Small Volatility Expansion, asymptotic expansion in the vol-of-vol $\nu$ and time $T$, Model intuition, Related Topics, geodesic volatility, Asymptotic Expansions in Finance
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/dupire-local-vol, finance/sabr-model, heston-model, manifold-learning
- Backlinks: finance/sabr-model

## Entity: avellaneda-stoikov
- Title: Avellaneda-Stoikov Model
- Category: Pricing
- Language: en
- Key Concepts: Avellaneda-Stoikov Model, HJB Equation, Cartea & Jaimungal, Extensions:, Model Setup, Crypto Market Making, Skewing, FX Spot Market Making, Practical Applications, The Optimal Spread, Overview & Background, Limitations:, Symmetric arrival rates, Inventory risk component, Related Topics
- References: brownian-motion, cox-process, finance/monte-carlo-method, hidden-markov-models, optimal-execution
- Backlinks: brownian-motion, cox-process, finance/hidden-markov-models, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/order-flow-imbalance, finance/vwap-twap, market-microstructure, spread, stochastic-control

## Entity: finance/bachelier-formula
- Title: Bachelier Formula
- Category: Pricing
- Language: en
- Key Concepts: revived, Bachelier's model, Related Articles, naturally, Bachelier as the "small-vol limit" of BS, additive, "everything in Black-Scholes is already in Bachelier", can become negative, strictly positive, April 2020 episode, Derivation, historical predecessor, 5 years before, arithmetic Brownian motion, absolute
- References: attention-mechanisms, black-scholes, brownian-motion, finance/black-scholes-derivations, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, geometric-brownian-motion
- Backlinks: blacks-model, finance/black-scholes-derivations, finance/efficient-market-hypothesis

## Entity: finance/barrier-asian-options
- Title: Barrier and Asian Options
- Category: Pricing
- Language: en
- Key Concepts: Down-and-Out Call, Geometric Asian, Implementation, Related Articles, Exotic options, Barrier and Asian Options, Rubinstein-Reiner Formula (Down-and-Out Call, $H < K$), Asian Options, Arithmetic Asian Call, Barrier Options, Barrier option types:
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/variance-gamma
- Backlinks: brownian-bridge, finance/upper-lower-hedging-prices

## Entity: blacks-model
- Title: Black's Model (1976)
- Category: Pricing
- Language: en
- Key Concepts: Volatility quoting, Normal (Bachelier) Variant, The Black Formula, Black's Model for Swaptions, shifted, Applications, Implied Volatility Conventions, Related Topics, Commodity options, cap, Derivation Under the Forward Measure, Black's model, payer swaption, Black's Model for Caplets, Energy markets
- References: black-scholes, finance/bachelier-formula, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/sabr-model, finance/swaps, finance/volatility-surface, heston-model
- Backlinks: cost-of-carry, risk-neutral-valuation

## Entity: black-scholes
- Title: Black-Scholes Model
- Category: Pricing
- Language: en
- Key Concepts: [[sabr-model]], Extensions:, Black-Scholes model, Constant volatility, implied volatility, Risk Management, Practical Applications, Overview & Background, Closed-Form Pricing Formulas, Limitations:, Volatility smile/skew, Related Topics, Vol Surface Construction, Put-Call Parity, [[monte-carlo-method]]
- References: brownian-motion, exotic-options, finance/monte-carlo-method, finance/sabr-model, geometric-brownian-motion, heston-model, numerical-pde-finance
- Backlinks: arma-models, automatic-differentiation, bayesian-black-litterman, blacks-model, brownian-motion, change-of-variables, convertible-bonds, convex-optimization-trading, deep-galerkin, dv01, fama-macbeth-regression, feynman-kac, finance/asymptotic-arbitrage-large-markets, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/barrier-asian-options, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/credit-risk-models, finance/crr-model, finance/delta-hedging-practice, finance/dispersion-trading, finance/energy-commodity-derivatives, finance/follmer-schweizer, finance/free-boundary-american, finance/girsanov-semimartingales, finance/heston-model, finance/levy-esscher-continuous, finance/libor-market-model, finance/longstaff-schwartz, finance/merton-jump-diffusion, finance/monte-carlo-method, finance/nelson-siegel-svensson, finance/optimal-stopping-american, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/stefan-problem-american, finance/swaps, finance/variance-swaps-vix, finance/volatility-surface, garman-kohlhagen, geometric-brownian-motion, greeks-options, lln-clt, math/martingale-representation, ml-options-pricing, model-free-rl-factors, multivariable-calculus, numeraire-invariant-hedging, numerical-pde-finance, option-strategies, ornstein-uhlenbeck-process, pinns, put-call-parity, regime-switching-factors, risk-neutral-valuation, sharpe-ratio-statistics, survival-risk-prediction, svi-model, taylor-series, ts-cs-factor-analysis, volatility-arbitrage, volatility-smile

## Entity: finance/bond-options-gaussian
- Title: Bond Options in Gaussian Models
- Category: Pricing
- Language: en
- Key Concepts: exactly the [[black-scholes|Black-Scholes formula]], forward measure, Distribution., Change of measure: the forward measure $T$, Related Articles, observed zero-coupon yield curve, HJM framework, Connection to multi-factor models, Bond option, discount rate, The Hull-White model, asset, The Vasicek model, negative, American
- References: black-scholes, brownian-motion, dv01, finance/cir-hull-white, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american
- Backlinks: finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/interest-rate-term-structure, finance/libor-market-model, finance/short-rate-models, finance/stefan-problem-american

## Entity: finance/bootstrapping-yield-curve
- Title: Bootstrapping the Yield Curve
- Category: Pricing
- Language: en
- Key Concepts: Monotone convex, bootstrap equation, Practical Applications, Swap pricing, Curve Sensitivities (Jacobian), Related Topics, Yield Curve Shape, Bond relative value, separate curves, Model calibration, Input Instruments, turn-of-year jumps, Projection curve, Bootstrapping the Yield Curve, Discount Factors and Zero Rates
- References: finance/bond-options-gaussian, finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, libor-market-model
- Backlinks: finance/nelson-siegel-svensson, finance/swaps, multi-curve-framework

## Entity: finance/capm
- Title: CAPM (Capital Asset Pricing Model)
- Category: Pricing
- Language: en
- Key Concepts: CAPM (Capital Asset Pricing Model), Related Articles, Conditional CAPM., CAPM, Alpha and active management, Security Market Line (SML), Alpha is the bread and butter of the active management industry, starting point, Size, they all hold the same optimal risky portfolio, Beta vs. return, CAPM claim., first quantitative formula, Homogeneity assumption, beta remains the standard risk metric
- References: fama-macbeth-regression, finance/apt-ross, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: finance/apt-ross, finance/efficient-market-hypothesis, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/caps-floors-swaptions
- Title: Caps, Floors and Swaptions
- Category: Pricing
- Language: en
- Key Concepts: Strike dimension, Cap vol surface, Related Articles, Normal (Bachelier) Model, Caps, Floors and Swaptions, cube, Black Vol vs Normal Vol, Calibration of Term Structure Models, Black (1976) model, Interest rate options, Day count conventions, LMM/BGM to Caps and Swaptions, SOFR transition, Caplets and Caps, Hull-White to Caps
- References: black-scholes, finance/bond-options-gaussian, finance/sabr-model, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, cost-of-carry, finance/change-of-numeraire, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/change-of-numeraire
- Title: Change of Numeraire
- Category: Pricing
- Language: en
- Key Concepts: The Swap Measure and Swaptions, quanto adjustment, numeraire, Adjust drifts, Drift Change via Girsanov, Identify the payoff, Evaluate, Related Topics, Choose the numeraire, Application to caplets., Compute the Radon-Nikodym derivative, The T-Forward Measure, change of numeraire, Key Identities Summary, Standard Numeraire Choices
- References: black-scholes, brownian-motion, finance/caps-floors-swaptions, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/complete-incomplete-markets
- Title: Complete and Incomplete Markets. Second Fundamental Theorem
- Category: Pricing
- Language: en
- Key Concepts: or an entire convex set, Definition., $\Leftarrow$ (uniqueness $\Rightarrow$ completeness)., second, Related Articles, completeness, Definition, Minimal martingale measure, $\Rightarrow$ (completeness $\Rightarrow$ uniqueness)., Complete:, Second Fundamental Theorem, either a single point, Examples of complete and incomplete markets, Mean-square error minimization, Theorem.
- References: finance/bs-market-self-financing, finance/crr-model, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion, heston-model, optional-decomposition
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/crr-model, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: convertible-bonds
- Title: Convertible Bonds
- Category: Pricing
- Language: en
- Key Concepts: convertible bond, Python: Binomial Tree Pricing, Credit-equity relative value, Payoff Structure, Convertible Arbitrage, Embedded Features, The Credit-Equity Correlation Problem, Binomial Tree with Credit Risk, Premium, Pricing Approaches, time value, Applications, Hedge fund strategies, Structured products, put condition
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/xva, heston-model, partial-differential-equations
- Backlinks: numerical-pde-finance

## Entity: finance/copula-models
- Title: Copula Models
- Category: Pricing
- Language: en
- Key Concepts: Extensions:, Clayton copula, Sklar's Theorem, Uniqueness, upper tail dependence coefficient, Gaussian, Frank copula, Student-t Copula, marginal distributions, Practical Applications, Overview & Background, Dynamic copulas (Patton, 2006), Limitations:, Scale invariance, Insurance Cat Bonds
- References: cornish-fisher-cvar, cox-process, extreme-value-theory, finance/value-at-risk, finance/xva

## Entity: cost-of-carry
- Title: Cost of Carry
- Category: Pricing
- Language: en
- Key Concepts: fair value, Forward Curves and Term Structure, Index Arbitrage, Sufficient liquidity, Stock with continuous dividend yield $q$, Currency (covered interest rate parity), Cash-and-Carry Arbitrage, Cost of Carry, Futures vs Forwards: Convexity Adjustment, Backwardation, Applications, Reverse cash-and-carry, Cost of Carry Components, When Cost of Carry Breaks Down, No short-selling constraints
- References: blacks-model, finance/arbitrage-definition, finance/caps-floors-swaptions, finance/swaps, finance/xva, risk-neutral-valuation
- Backlinks: finance/swaps

## Entity: finance/crr-model
- Title: Cox-Ross-Rubinstein Binomial Model (CRR)
- Category: Pricing
- Language: en
- Key Concepts: true, Claim., Replicating portfolio (hedging), working tool, discrete delta hedging, Convergence to Black-Scholes, Why this matters in practice, binomial formula, Model, Related Articles, Cox-Ross-Rubinstein Binomial Model (CRR), European option price, Martingale measure, No-arbitrage condition, complete
- References: black-scholes, finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/black-scholes-derivations, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/stefan-problem-american, math/central-limit-theorem, math/discrete-markov-chains, math/optimal-stopping-markov, math/weak-convergence-prokhorov

## Entity: finance/delta-hedging-practice
- Title: Delta Hedging in Practice
- Category: Pricing
- Language: en
- Key Concepts: Leland (1985) Adjusted Volatility, Hedging Frequency Optimization, Model Risk, Continuous vs Discrete Hedging, no-transaction band, Vanna, Greeks-neutral portfolio, The Ideal, Gamma risk, volga, Gamma Scalping, Practical Challenges, Related Topics, Delta Hedging in Practice, Whalley-Wilmott Hedging Bandwidth
- References: black-scholes, finance/variance-swaps-vix, finance/volatility-surface, greeks-options, heston-model, option-strategies
- Backlinks: deep-hedging, greeks-options

## Entity: finance/discrete-girsanov-esscher
- Title: Discrete Girsanov and the Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: Esscher, Conditional Esscher., Connection to [[ftap-first-fundamental-theorem|FTAP]], explicit, minimum Esscher measure, A note on incomplete markets, The Esscher transform: general case, Why have both, how, Related Articles, Esscher transform, Idea., Discrete Girsanov theorem., mean shift, Discrete Girsanov and the Esscher Transform
- References: finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion
- Backlinks: finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous

## Entity: finance/dupire-local-vol
- Title: Dupire Local Volatility Model
- Category: Pricing
- Language: en
- Key Concepts: Implementation, Dupire Equation, Related Articles, Local Vol vs Stochastic Vol, calibrated once, Local Volatility (Dupire, 1994), Dupire Local Volatility Model
- References: finance/rough-volatility, finance/sabr-model, finance/variance-swaps, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/black-scholes-derivations, finance/variance-swaps, finance/volatility-surface, lsv-model, volatility-smile

## Entity: finance/efficient-market-hypothesis
- Title: Efficient Market Hypothesis (EMH)
- Category: Pricing
- Language: en
- Key Concepts: Connection to the martingale property, publicly available, January effect, Strong form., Related Articles, Three forms, EMH and algorithmic trading, Semi-strong form., evolutionarily adaptive, EMH, historical bridge, martingale, if EMH were absolutely true, there exists, Excess volatility
- References: brownian-motion, fama-macbeth-regression, finance/apt-ross, finance/bachelier-formula, finance/capm, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: causal-inference, finance/apt-ross, finance/capm, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/energy-commodity-derivatives
- Title: Energy & Commodity Derivatives
- Category: Pricing
- Language: en
- Key Concepts: Banking and borrowing, Regime switching, equilibrium price, Price spikes, Backwardation, Schwartz-Smith Two-Factor Model, Cumulative HDD/CDD, Storage as a Real Option, convenience yield, Burn analysis, short-term deviation, Related Topics, Energy & Commodity Derivatives, price ceiling, Gibson-Schwartz: Stochastic Convenience Yield
- References: black-scholes, brownian-motion, finance/levy-processes, finance/optimal-stopping-american, finance/real-options, finance/swaps
- Backlinks: finance/real-options

## Entity: finance/ftap-first-fundamental-theorem
- Title: First Fundamental Theorem (FTAP)
- Category: Pricing
- Language: en
- Key Concepts: Pricing a derivative via the martingale measure, risk-neutral measure, Statement (discrete case), Theorem (Harrison-Pliska, 1981; Dalang-Morton-Willinger)., Construction., Related Articles, Proof idea: sufficiency ($\Leftarrow$), The crucial point:, equivalent martingale measure, geometric, conditional Esscher transforms, fails, Proof idea: necessity ($\Rightarrow$), First Fundamental Theorem (FTAP), Continuous time: NFLVR
- References: finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/apt-ross, finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/capm, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/efficient-market-hypothesis, finance/girsanov-semimartingales, finance/optimal-stopping-american, finance/self-similarity-fractality, finance/semimartingale-models, finance/stefan-problem-american, finance/upper-lower-hedging-prices, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optional-decomposition, risk-neutral-valuation

## Entity: finance/free-boundary-american
- Title: Free Boundary Problem for American Options
- Category: Pricing
- Language: en
- Key Concepts: perpetual, Boundary Conditions, Connection to Optimal Stopping, Exercise Boundary Shape, Equity options, Perpetual American Put, Finite Horizon: No Closed Form, Binomial Tree (CRR), American options, exercise region, Real options, continuation region, Early Exercise Premium, Practical Applications, Convertible bonds
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/longstaff-schwartz, finance/monte-carlo-method
- Backlinks: finance/optimal-stopping-american

## Entity: garman-kohlhagen
- Title: Garman-Kohlhagen Model
- Category: Pricing
- Language: en
- Key Concepts: ATM Conventions, Put-Call Symmetry in FX, Forward Delta, Garman-Kohlhagen Model, ATM volatility, Central bank intervention, Carry trade options, Corporate hedging, Garman-Kohlhagen (GK) model, Practical Applications, Premium-Adjusted Delta, Volatility Smile: Risk Reversals and Butterflies, 25-delta butterfly, Related Topics, vanna-volga
- References: black-scholes, greeks-options, heston-model, option-strategies, put-call-parity
- Backlinks: option-strategies, put-call-parity

## Entity: finance/girsanov-semimartingales
- Title: Girsanov's Theorem for Semimartingales
- Category: Pricing
- Language: en
- Key Concepts: unchanged, the quadratic variation $C$ is preserved, Novikov's condition, Related Articles, Jump part and incompleteness, what exactly, density process, Theorem (Girsanov, 1960)., the same, Girsanov's Theorem for Semimartingales, The semimartingale version, Theorem (Jacod-Mémin)., re-intensify, drift $B$ and jump compensator $\nu$ change, Short formula.
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/levy-esscher-continuous, finance/semimartingale-models, finance/shannon-entropy, heston-model
- Backlinks: feynman-kac, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/change-of-numeraire, finance/discrete-girsanov-esscher, finance/hjm-framework, finance/levy-esscher-continuous, finance/semimartingale-models, finance/short-rate-models, innovation-process, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/conditional-expectation-sigma, math/contiguity-measures, math/convergence-stochastic-integrals, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, nonlinear-filtering, radon-nikodym, risk-neutral-valuation

## Entity: finance/hjm-framework
- Title: HJM Framework
- Category: Pricing
- Language: en
- Key Concepts: HJM drift restriction, HJM drift condition, Bond Price Dynamics, finite-dimensional Markov process, Monte Carlo Implementation, The HJM Drift Condition, Heath-Jarrow-Morton (HJM) framework, Related Topics, Computational cost, Markovian HJM: Ritchken-Sankarasubramanian, Forward Rate Dynamics, Negative rates, The LIBOR Market Model Connection, Short-Rate Models as Special Cases, Infinite-dimensional state
- References: brownian-motion, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps, stochastic-differential-equations

## Entity: finance/heston-model
- Title: Heston Model
- Category: Pricing
- Language: en
- Key Concepts: Volatility Dynamics Visualization, Background, Carr-Madan FFT Pricing, Volatility surface interpolation, Negative correlation constraint, Jump extensions, Pricing, Risk management, Practical Applications, Structured products, volatility smile and skew, Python: Path Simulation and Option Pricing, Carr-Madan method, Related Topics, characteristic function
- References: black-scholes, finance/particle-filter, finance/sabr-model, garch-models, geometric-brownian-motion
- Backlinks: heston-fourier, heston-model

## Entity: finance/interest-rate-term-structure
- Title: Interest Rate Term Structure
- Category: Pricing
- Language: en
- Key Concepts: bootstrapping, pure expectations hypothesis, term premium, Theories of the Term Structure, Expectations Hypothesis, term structure of interest rates, Applications, inverted, Risk management, Preferred Habitat (Modigliani-Sutch, 1966), Rates and Their Relationships, Par Rates, instantaneous forward rate, Forward Rates, Yield Curve Shapes
- References: dv01, finance/bond-options-gaussian, finance/libor-sofr, finance/nelson-siegel-svensson, finance/short-rate-models, finance/swaps
- Backlinks: finance/nelson-siegel-svensson, finance/short-rate-models, multi-curve-framework

## Entity: optional-decomposition
- Title: Kramkov Optional Decomposition
- Category: Pricing
- Language: en
- Key Concepts: Application to super-hedging, Difference from Doob-Meyer., self-financing capital, super-hedging duality, super-hedging strategy, Proof (sketch), Lagrangian duality, predictable, Connection to duality theory, Optional decomposition, upper price, surely covers, universal, simultaneously under every EMM, Related Topics
- References: finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/complete-incomplete-markets, finance/optimal-stopping-american, finance/upper-lower-hedging-prices, math/backward-sde

## Entity: finance/libor-market-model
- Title: LIBOR Market Model (BGM)
- Category: Pricing
- Language: en
- Key Concepts: Drift under the Terminal Measure, Correlation, Comparison with Other Models, Joint optimization, Black's formula by construction, Caplet Pricing — Black's Formula, SOFR transition, Practical Applications, LIBOR Market Model (BGM), Bermudan swaptions, [[stochastic-differential-equations|SDE]] under the Forward Measure, Related Topics, cap/floor calibration is trivial, Volatility and Correlation Parameterization, Caplet vols
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/monte-carlo-method, finance/swaps, hjm-framework, stochastic-differential-equations

## Entity: lsv-model
- Title: Local Stochastic Volatility (LSV)
- Category: Pricing
- Language: en
- Key Concepts: The Calibration Nightmare (Particle Methods), Why Tier-1 Banks Require LSV, Local Volatility (LV), Local Volatility (LV) e.g., Dupire, Local Stochastic Volatility (LSV), Particle Methods (Monte Carlo with interacting particles), Stochastic Volatility (SV), The Flaws of Predecessors, Related Topics, Stochastic Volatility (SV) e.g., Heston, The LSV Synthesis, Visualization: The Volatility Hierarchy, Local Leverage Function
- References: finance/dupire-local-vol, heston-model, hmm-particle-filters
- Backlinks: mcmc, path-dependent-volatility

## Entity: finance/levy-esscher-continuous
- Title: Lévy Processes and the Continuous Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: Definition., Brownian motion, Related Articles, standard, Lévy exponent, Definition, Independent increments, The Esscher martingale measure, Lévy measure, Symmetric $\alpha$-stable process, continuous-time Esscher transform, Lévy-Khintchine formula., Esscher measure, Examples, Stationary increments
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/fft, finance/girsanov-semimartingales, finance/semimartingale-models, finance/shannon-entropy, geometric-brownian-motion, heston-model
- Backlinks: finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/semimartingale-models, finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/markowitz-mean-variance
- Title: Markowitz Mean-Variance Portfolio Theory
- Category: Pricing
- Language: en
- Key Concepts: Markowitz Mean-Variance Portfolio Theory, quadratic optimization, Capital Market Line (CML), Related Articles, Efficient frontier, "market portfolio", Markowitz problem:, Weaknesses of classical Markowitz:, Gaussianity., Sharpe ratio, Historical role, efficient frontier, maximum-Sharpe portfolio, straight line, Adding a risk-free asset
- References: bayesian-black-litterman, convex-optimization-trading, cornish-fisher-cvar, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/stylized-facts-returns
- Backlinks: convex-analysis, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/stylized-facts-returns, information-geometry-finance, math/law-of-large-numbers, nonlinear-shrinkage, stochastic-control

## Entity: martingale-optimal-transport
- Title: Martingale Optimal Transport
- Category: Pricing
- Language: en
- Key Concepts: model-free, Related Topics, Primal Problem, The Setup: Model-Free Pricing, The Primal and Dual Problems, Connection to Optimal Transport, Martingale Optimal Transport, Martingale, Visualization: Sand vs. Martingale Sand, Dual Problem (Super-Replication), Martingale Optimal Transport (MOT), Why Citadel and Tier-1 Banks Use It
- References: convex-optimization-trading, convexity, martingale, optimal-transport, risk-neutral-valuation
- Backlinks: convexity, martingale

## Entity: finance/nelson-siegel-svensson
- Title: Nelson-Siegel-Svensson Yield Curve Model
- Category: Pricing
- Language: en
- Key Concepts: Example, Bond pricing, Nelson-Siegel (1987), Related Articles, Nelson-Siegel-Svensson (NSS), Svensson Extension (1994), Duration management, XVA, Instantaneous Forward Rate, Uses, Typical Curve Shapes, Nelson-Siegel-Svensson Yield Curve Model, Calibration, Central bank publication
- References: black-scholes, finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/oas, finance/swaps, finance/xva, heston-model
- Backlinks: finance/bootstrapping-yield-curve, finance/cir-hull-white, finance/interest-rate-term-structure, finance/libor-sofr

## Entity: numeraire-invariant-hedging
- Title: Numeraire-Invariant Quadratic Hedging
- Category: Pricing
- Language: en
- Key Concepts: Quadratic Hedging, Python: Simulating and Measuring Hedging Error, Transaction costs, Utility-based alternatives, Numeraire Invariance, Decomposition additivity, Optimality, Deep hedging, Model dependency, Related Topics, Key Properties, Numeraire-Invariant Quadratic Hedging, Galtchouk-Kunita-Watanabe (GKW) Decomposition, Limitations and Extensions, Minimal Martingale Measure (MMM)
- References: black-scholes, finance/hierarchical-risk-parity, finance/levy-processes, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/follmer-schweizer

## Entity: optimal-execution
- Title: Optimal Execution: Almgren-Chriss
- Category: Pricing
- Language: en
- Key Concepts: Price Risk (Volatility), Deep RL Execution, Risk-Neutral ($\lambda \to 0$), Risk-Averse ($\lambda \to \infty$), Modern Extensions, Market Impact, Related Topics, Permanent Impact, Expected Cost + Risk Aversion $\times$ Variance, The Solution: The Efficient Frontier, Dark Pools, Exponential Decay, The Fundamental Trade-off, Temporary Impact, Almgren-Chriss model
- References: deep-rl-execution, stochastic-control, vpin
- Backlinks: ai-market-making, amihud-illiquidity, amm-mechanics, avellaneda-stoikov, cross-impact, deep-rl-execution, finance/dark-pools, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/vwap-twap, futures-hedging, kyle-model, liquidation-signals, lob-prediction, market-impact, market-microstructure, path-integral-control, reinforcement-learning, rl-trader, stochastic-control, vpin

## Entity: finance/optimal-stopping-american
- Title: Optimal Stopping and American Options
- Category: Pricing
- Language: en
- Key Concepts: Connection to PDE: the Stefan problem, Definition., Related Articles, put, Hedging an American option, Snell envelope, stopping time, The Snell envelope, optimal stopping problem, supermartingale characterization, strictly more expensive, The optimal stopping time, at any time, Claim 1., free boundary
- References: black-scholes, finance/crr-model, finance/free-boundary-american, finance/ftap-first-fundamental-theorem, finance/stefan-problem-american, finance/upper-lower-hedging-prices, optional-decomposition
- Backlinks: feynman-kac, finance/crr-model, finance/energy-commodity-derivatives, finance/real-options, finance/stefan-problem-american, math/discrete-martingales, math/optimal-stopping-markov, numerical-pde-finance, optional-decomposition, stochastic-control

## Entity: greeks-options
- Title: Option Greeks
- Category: Pricing
- Language: en
- Key Concepts: Barrier options, First-Order Greeks, Transaction costs, Greeks for Exotic Options, Vega Hedging, Gamma-Theta Tradeoff and Delta Hedging, Related Topics, Option Greeks, Delta, Greeks, Gamma, Digital options, Theta, Discrete hedging, Second-Order Greeks
- References: black-scholes, dv01, exotic-options, finance/delta-hedging-practice, geometric-brownian-motion, heston-model, option-strategies, put-call-parity
- Backlinks: finance/delta-hedging-practice, finance/variance-swaps-vix, frtb-sa-mr, garman-kohlhagen, option-strategies, put-call-parity, volatility-smile

## Entity: option-strategies
- Title: Option Strategies
- Category: Pricing
- Language: en
- Key Concepts: Margin, Butterfly and Condor, diagonal spread, Bear Put Spread, Max profit, Liquidity, Ratio Spreads, Related Topics, Early exercise, Max loss, Vol smile, Greeks, Breakeven, Straddle, Strangle
- References: black-scholes, garman-kohlhagen, greeks-options, heston-model, put-call-parity
- Backlinks: finance/delta-hedging-practice, garman-kohlhagen, greeks-options, put-call-parity

## Entity: pairs-trading
- Title: Pairs Trading Strategy
- Category: Pricing
- Language: en
- Key Concepts: Risk: Cointegration Breakdown and Crowding, P&L Attribution, Entry/Exit Signal Framework, Engle-Granger Two-Step Test, Non-stationary hedge ratio, Background and History, Holding period, Johansen Test, Cointegration Theory, Related Topics, cointegration rank, Borrow costs, cointegration breakdown, Half-Life of Mean Reversion, expected return per trade
- References: finance/cointegration, finance/monte-carlo-method, finance/particle-filter, finance/value-at-risk, mcmc, ornstein-uhlenbeck-process
- Backlinks: fastest-mean-reversion, fractional-cointegration, ornstein-uhlenbeck-process, pca-statarb, vine-copulas

## Entity: path-dependent-volatility
- Title: Path-Dependent Volatility
- Category: Pricing
- Language: en
- Key Concepts: Julien Guyon, Path Signatures, 1. The Limitation of Dupire's Model, Visualization: Path-Memory effect, Local Volatility (LV), Interacting Particle System, Path-Dependent Volatility: Beyond Local Volatility, realized path, Path-Dependent Volatility (PDV), McKean-Vlasov, Moving Average, 4. Connection to Signature-based Models, 3. Calibration via Particle Methods, Related Topics, 2. Models of Julien Guyon
- References: hmm-particle-filters, lsv-model, neural-sdes-finance, rough-paths, signature-based-models
- Backlinks: signature-based-models

## Entity: put-call-parity
- Title: Put-Call Parity
- Category: Pricing
- Language: en
- Key Concepts: Case 1, Extensions, Synthetic positions, Conversion/reversal arbitrage, Implied dividends, Practical Applications, Arbitrage from Violations, Put-call parity, Vol surface construction, The Core Identity, American Options, Dividend-Paying Stocks, Related Topics, Put-Call Parity, Futures Options
- References: black-scholes, finance/bs-market-self-financing, garman-kohlhagen, greeks-options, option-strategies
- Backlinks: garman-kohlhagen, greeks-options, option-strategies

## Entity: finance/follmer-schweizer
- Title: Quadratic Hedging and the Föllmer-Schweizer Approach
- Category: Pricing
- Language: en
- Key Concepts: Methods Comparison, Minimal Martingale Measure (MMM), Stochastic volatility, variance-optimal martingale measure, Quadratic Hedging and the Föllmer-Schweizer Approach, Föllmer-Schweizer Decomposition, Local Risk-Minimisation (Schweizer 1991), Cost process, Related Articles, Quadratic hedging, Discrete Approximation, Minimal Martingale Measure, Key property, Jumps, Mean-Variance Hedging
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, heston-model, numeraire-invariant-hedging
- Backlinks: finance/complete-incomplete-markets, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: quantum-amplitude-estimation
- Title: Quantum Amplitude Estimation (QAE)
- Category: Pricing
- Language: en
- Key Concepts: Quantum Amplitude Estimation (QAE), The Quadratic Speedup, 1,000 times, State Preparation, Near-Term Implementation (NISQ), Visualization: Convergence Speed, Iterative QAE (IQAE), Monte Carlo (MC) Simulation, quadratic speedup, How QAE Works, Maximum Likelihood QAE (ML-QAE), Related Topics, Payoff Encoding, Quantum Phase Estimation, Quantum Amplitude Estimation (QAE) in Finance
- References: finance/monte-carlo-method, finance/xva, quantum-math
- Backlinks: quantum-math

## Entity: finance/real-options
- Title: Real Options
- Category: Pricing
- Language: en
- Key Concepts: substantial premium, Option to abandon, Model risk, flexibility, hysteresis, Technology investment, Pricing Framework, Option to defer, Pharmaceutical R&D, Real options, Applications, M&A, Option to expand, Criticisms and Limitations, Related Topics
- References: black-scholes, brownian-motion, finance/energy-commodity-derivatives, finance/optimal-stopping-american, finance/swaps, heston-model
- Backlinks: finance/energy-commodity-derivatives

## Entity: risk-neutral-valuation
- Title: Risk-Neutral Valuation
- Category: Pricing
- Language: en
- Key Concepts: unique, Risk-Neutral Valuation, risk-neutral, The Replication Argument, Applications, PDE methods, Connection to Girsanov's Theorem, Credit derivatives, The Central Formula, Incomplete Markets, Fundamental Theorems of Asset Pricing, Multi-Asset and Numeraire Changes, not unique, Related Topics, Option pricing
- References: black-scholes, blacks-model, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/monte-carlo-method, finance/shannon-entropy, finance/swaps, finance/xva, geometric-brownian-motion, heston-model, math/doleans-dade-exponential, partial-differential-equations
- Backlinks: cost-of-carry, feynman-kac, martingale, martingale-optimal-transport, stochastic-processes

## Entity: finance/sabr-model
- Title: SABR Model
- Category: Pricing
- Language: en
- Key Concepts: Background, $\beta$ determines backbone, $\nu$ controls smile curvature, Hagan's Asymptotic Implied Volatility Formula, SABR Model, Normal SABR, Model risk, Stochastic Differential Equations, density-projection, Stochastic Interest Rates (SABR-LMM), Practical Applications, Cap/floor stripping, Swaption vol cube, Arbitrage violations, Related Topics
- References: black-scholes, finance/asymptotic-expansion-finance, finance/oas, finance/swaps, heston-model, volatility-forecasting
- Backlinks: black-scholes, blacks-model, finance/asymptotic-expansion-finance, finance/caps-floors-swaptions, finance/dispersion-trading, finance/dupire-local-vol, finance/heston-model, finance/oas, finance/rough-volatility, finance/swaps, finance/volatility-surface, volatility-smile

## Entity: finance/semimartingale-models
- Title: Semimartingale Models and Predictable Characteristics
- Category: Pricing
- Language: en
- Key Concepts: special, Definition., semimartingale, Related Articles, Definition, Predictable characteristic triplet, Why this matters, [[levy-esscher-continuous|Lévy process]], [[geometric-brownian-motion|GBM]], minimal, [[cox-process|Poisson process]], not unique, Triplet examples, single language, Theorem (NFLVR-FTAP).
- References: brownian-motion, cox-process, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/hawkes-process, finance/levy-esscher-continuous, geometric-brownian-motion, heston-model
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, math/triangular-arrays-processes, optional-decomposition

## Entity: finance/black-scholes-derivations
- Title: Several Derivations of the Black-Scholes Formula
- Category: Pricing
- Language: en
- Key Concepts: Related Articles, Idea (original, 1973)., Derivation 1: BS PDE (replication and hedging), Robustness and weaknesses, four fundamentally different derivations, Derivation 3: Binomial limit (CRR), that, baseline reference, one page, why, classical heat equation, Several Derivations of the Black-Scholes Formula, Idea., What this shows:, PDE derivation
- References: black-scholes, finance/bachelier-formula, finance/crr-model, finance/dupire-local-vol, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american, geometric-brownian-motion, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/free-boundary-american, finance/stefan-problem-american, math/optimal-stopping-markov

## Entity: finance/short-rate-models
- Title: Short Rate Models
- Category: Pricing
- Language: en
- Key Concepts: Hull-White (1990), Related Articles, Connection to HJM, CIR:, Multi-Factor Extensions, Every short rate model implies an HJM model, Gaussian, exactly fit the initial term structure, non-negativity, Volatility calibration, Curve fitting, Affine Bond Pricing, Comparison, affine, Black-Derman-Toy (BDT, 1990)
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/girsanov-semimartingales, finance/interest-rate-term-structure, finance/swaps, stochastic-differential-equations
- Backlinks: finance/caps-floors-swaptions, finance/change-of-numeraire, finance/hjm-framework, finance/interest-rate-term-structure

## Entity: finance/stefan-problem-american
- Title: Stefan Problem and American Options
- Category: Pricing
- Language: en
- Key Concepts: Equations, American call: the trivial case, Related Articles, Numerical methods, PDE form, Equivalence to the optimal-stopping formulation, Monte Carlo regression (Longstaff-Schwartz, 2001)., No closed form for $S^*(t)$ exists., Structure of the Stefan problem, option price, Free-boundary analytics, Claim., free boundary, Holding region, Exercise region
- References: black-scholes, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/black-scholes-derivations, finance/bond-options-gaussian, finance/optimal-stopping-american

## Entity: svi-model
- Title: Stochastic Volatility Inspired (SVI) Model
- Category: Pricing
- Language: en
- Key Concepts: $\sigma > 0$, Related Topics, Eliminating Arbitrage, Butterfly Arbitrage, Surface SVI (SSVI), Stochastic Volatility Inspired (SVI), Stochastic Volatility Inspired (SVI) Model, Visualization: The Hyperbolic Smile, Why Parameterize the Surface?, SSVI: Surface SVI, $b$, The Raw SVI Formula, $a$, $m$, Calendar Arbitrage
- References: black-scholes, finance/variance-gamma, heston-model

## Entity: finance/swaps
- Title: Types of Swaps
- Category: Pricing
- Language: en
- Key Concepts: Types of Swaps, Asset-liability management, Par Swap Rate, Discount Curve Bootstrapping, Parameter Reference, Background and Market Structure, Cross-Currency Swap (CCS), Mark-to-Market and DV01, Corporate hedging, Regulatory capital, Digital/binary swaps, Credit Default Swap (CDS), Equity Swap, Practical Applications, Key Swap Types
- References: black-scholes, copula-models, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/sabr-model, finance/xva
- Backlinks: blacks-model, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/cir-hull-white, finance/energy-commodity-derivatives, finance/hjm-framework, finance/interest-rate-term-structure, finance/isda-simm, finance/libor-market-model, finance/libor-sofr, finance/nelson-siegel-svensson, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/xva, futures-hedging, risk-neutral-valuation

## Entity: finance/upper-lower-hedging-prices
- Title: Upper and Lower Hedging Prices
- Category: Pricing
- Language: en
- Key Concepts: interval, Related Articles, Attainability and exact replication, infimum, upper and lower hedging prices, Upper and Lower Hedging Prices, upper price, utility indifference pricing, Theorem (price trichotomy)., Connection to risk aversion, supremum, surely, does, Interval of consistent prices, independent
- References: finance/barrier-asian-options, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, heston-model, optional-decomposition
- Backlinks: finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, optional-decomposition

## Entity: finance/variance-swaps
- Title: Variance Swaps and Volatility Risk Premium
- Category: Pricing
- Language: en
- Key Concepts: Implementation, Var Swap vs Vol Swap vs VIX Futures, Related Articles, Carr-Madan Model-Free Replication, Payoff, Volatility Risk Premium, variance swap, Variance Swaps and Volatility Risk Premium
- References: finance/bipower-variation, finance/dupire-local-vol, heston-model, volatility-forecasting
- Backlinks: finance/dispersion-trading, finance/dupire-local-vol, finance/variance-swaps-vix, finance/volatility-surface

## Entity: volatility-smile
- Title: Volatility Smile
- Category: Pricing
- Language: en
- Key Concepts: Information content, crash risk, 1. Stochastic Volatility ([[heston-model|Heston Model]]), Skew Metrics: Risk Reversal, Calibration and the Volatility Surface, Equity options, The smile shape varies by asset class:, Sticky dynamics, FX markets, Why Black-Scholes Fails: Fat Tails and Skewness, Equity markets, SVI, Commodity options, Excess kurtosis, Negative skew
- References: black-scholes, finance/dupire-local-vol, finance/rough-volatility, finance/sabr-model, finance/volatility-surface, greeks-options, heston-model, merton-jump-diffusion
- Backlinks: volatility-arbitrage

## Entity: finance/volatility-surface
- Title: Volatility Surface
- Category: Pricing
- Language: en
- Key Concepts: Lee's moment formula, Related Articles, SVI Parameterization (Gatheral), flattens with maturity, FX markets, Commodity markets, skewness, Connection to Risk-Neutral Density: Breeden-Litzenberger, No-Arbitrage Constraints, The Smile and Skew, Term Structure of Skew, fatter tails, Practical Calibration Workflow, symmetric smile, Stochastic Volatility Inspired
- References: black-scholes, finance/dupire-local-vol, finance/sabr-model, finance/variance-swaps, geometric-brownian-motion, heston-model
- Backlinks: blacks-model, finance/delta-hedging-practice, finance/variance-swaps-vix, neural-sdes-finance, volatility-smile

## Entity: algorithmic-execution-twap-vwap
- Title: Algorithmic Execution: TWAP, VWAP & Almgren-Chriss
- Category: Pricing & Execution
- Language: en
- Key Concepts: 1. TWAP & VWAP Strategies, See Also, Timing Risk, Market Impact, Algorithmic Execution: TWAP, VWAP & Almgren-Chriss, VWAP:, TWAP:, 2. Almgren-Chriss Model
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: convex-optimization-in-trading, high-frequency-trading-and-orderbook, market-impact-models-square-root-law

## Entity: optimal-stopping-american-options
- Title: American Options & Optimal Stopping
- Category: Pricing & Execution
- Language: en
- Key Concepts: American Options & Optimal Stopping, See Also
- References: course-quant-trading, monte-carlo-option-pricing-and-variance-reduction, optimal-stopping-and-kelly

## Entity: fixed-income-quant-rates-and-yield-curve
- Title: Fixed Income: Rates & Yield Curves
- Category: Pricing & Execution
- Language: en
- Key Concepts: See Also, Fixed Income: Rates & Yield Curves
- References: course-quant-trading, option-greeks-and-volatility, stochastic-calculus-and-ito-lemma
- Backlinks: interest-rate-derivatives-swaps-caps-floors

## Entity: interest-rate-derivatives-swaps-caps-floors
- Title: Interest Rate Derivatives: Swaps & SOFR
- Category: Pricing & Execution
- Language: en
- Key Concepts: See Also, Interest Rate Derivatives: Swaps & SOFR
- References: course-quant-trading, fixed-income-quant-rates-and-yield-curve, option-greeks-and-volatility

## Entity: monte-carlo-option-pricing-and-variance-reduction
- Title: Monte Carlo Option Pricing & Variance Reduction
- Category: Pricing & Execution
- Language: en
- Key Concepts: Monte Carlo Option Pricing & Variance Reduction, 2. Variance Reduction, See Also, 1. Monte Carlo Framework
- References: course-quant-trading, option-greeks-and-volatility, stochastic-calculus-and-ito-lemma
- Backlinks: exotic-options-and-structured-products, optimal-stopping-american-options, stochastic-calculus-and-ito-lemma

## Entity: central-limit-theorem
- Title: Central Limit Theorem
- Category: Probability
- Language: en
- Key Concepts: Mathematical Formulation, Overview
- Backlinks: bootstrap, characteristic-functions, convergence-types, distributions-zoo, empirical-processes, finance/coherent-risk-measures, finance/cointegration, finance/quasi-monte-carlo, hypothesis-testing, markov-chebyshev, math/branching-processes, math/concentration-inequalities, math/contiguity-measures, math/coupling-methods, math/ergodic-theorems-birkhoff, math/functional-limit-theorems, math/glivenko-cantelli, math/infinitely-divisible-distributions, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/law-of-large-numbers, math/local-asymptotic-normality, math/local-limit-theorems, math/markov-chain-mixing, math/martingale-clt, math/poisson-approximation, math/random-graphs, math/random-walks, math/skorokhod-topology, math/stein-method, math/triangular-arrays-processes, math/u-statistics, math/weak-convergence-prokhorov, mgf, numerical-methods-jump-diffusions, sampling-distributions, slutsky-theorem

## Entity: exponential-distribution
- Title: Exponential Distribution
- Category: Probability
- Language: en
- Key Concepts: Mathematical Formulation, Overview
- References: poisson-process

## Entity: gamma-beta-functions
- Title: Gamma & Beta Functions
- Category: Probability
- Language: en
- Key Concepts: Gamma Function, Overview, Beta Function

## Entity: projects/j-cole-fall-off
- Title: J. Cole — The Fall Off Review
- Category: Projects
- Language: en
- Key Concepts: React 19, Stack, Kinetic typography, Design Language, Framer Motion, Status, brutalist, kinetic typography, J. Cole — The Fall Off Review, The Idea, Brutalism, Vite, TypeScript

## Entity: projects/llm-wiki
- Title: LLM-Wiki
- Category: Projects
- Language: en
- Key Concepts: files the finding back into the vault, Knowledge graph, Lint, Why not [[rag]], updates 10–15 notes in the vault, Ingest, The schema, Content, Query, Knowledge Garden, The human, The [[llm]], Three layers, Three operations, Role separation
- References: llm, rag

## Entity: projects/music-results-2025
- Title: Music Results 2025
- Category: Projects
- Language: en
- Key Concepts: Music Results 2025, Design, Inline CSS + styles.css, Structure, Stack, Plain HTML, Albums, Foreign, Editorial brutalism, Status, A personal year-in-music archive, Statistics, `.nojekyll`, The Idea, GitHub Pages

## Entity: projects/nyquist
- Title: Nyquist
- Category: Projects
- Language: en
- Key Concepts: Technology, What It Can Do, Who It's For, Nyquist, Portfolio & Risk, Central banks and regulators, Deployment, Systemic Risk, Market Data, Harry Nyquist, Fixed Income, Micro, Development, Scale of models., Meso

## Entity: projects/ultima-thule
- Title: Ultima Thule
- Category: Projects
- Language: en
- Key Concepts: Dynamic Island Live Activity, What It Can Do, Ultima Thule, Offline navigation rerouting., Theme, Bucket List & POI Discovery, Turn-by-Turn Navigation, @State Trip? goes stale., Smart Packing, The map is a state machine, not a sheet., AI Trip Generator, Journal, Dashboard, Travel Journal, GPS Route Tracking

## Entity: projects/vibefix
- Title: VibeFix
- Category: Projects
- Language: en
- Key Concepts: Get the result., Infrastructure, Escrow payments, Problem, Notifications & email, The code doesn't work., Storage & sessions, Architecture, Backend, Target audience, VibeFix, Categories & tags, Task lifecycle, Dispute arbitration, Ratings & reviews
- References: llm

## Entity: projects/samizdat
- Title: Кто живёт в панельке Хаски?
- Category: Projects
- Language: en
- Key Concepts: Palette:, Materials, React 19 + TypeScript, The Idea, Quotes, Vite, Hero, Motion, Structure, Кто живёт в панельке Хаски?, Design Language, Status, A brutalist samizdat zine about Russian rap., GitHub Pages, Imprint

## Entity: quant-trading-interview-roadmap
- Title: 30-Day Quant Trading Interview Roadmap
- Category: Quant Trading
- Language: en
- Key Concepts: Days 8–15:, See Also, 30-Day Quant Trading Interview Preparation Roadmap, Weekly Roadmap, Days 28–30:, Days 16–22:, Days 1–7:, Days 23–27:
- References: course-quant-trading, quant-brainteasers-handbook, quant-interview-cheat-sheet
- Backlinks: quant-firm-interview-playbooks, quant-mental-math-tricks-handbook, quant-trading-interview-qna

## Entity: quant-firm-interview-math-brainteasers
- Title: Advanced Quant Interview Math Brainteasers
- Category: Quant Trading
- Language: en
- Key Concepts: See Also, Advanced Quant Interview Math Brainteasers
- References: course-quant-trading, quant-brainteasers-handbook, quant-interview-cheat-sheet

## Entity: quant-coding-interview-leetcode-patterns
- Title: Quant Coding Interview LeetCode Patterns
- Category: Quant Trading
- Language: en
- Key Concepts: See Also, Quant Coding Interview LeetCode Patterns
- References: course-quant-trading, quant-firm-interview-playbooks, quant-interview-cheat-sheet

## Entity: quant-firm-interview-playbooks
- Title: Quant Firm Interview Playbooks
- Category: Quant Trading
- Language: en
- Key Concepts: See Also, Quant Firm Interview Playbooks: Top 8 Firms
- References: course-quant-trading, quant-interview-cheat-sheet, quant-trading-interview-roadmap
- Backlinks: quant-coding-interview-leetcode-patterns

## Entity: quant-interview-cheat-sheet
- Title: Quant Interview Cheat Sheet
- Category: Quant Trading
- Language: en
- Key Concepts: See Also, Put-Call Parity:, 1. Key Probability Formulas, Coupon Collector:, Dice stopping adjustment:, Kelly Criterion:, Geometric $Geom(p)$:, Quant Interview Cheat Sheet: Formulas, Distributions & Shortcuts
- References: course-quant-trading, quant-brainteasers-handbook, quant-market-making-mechanics
- Backlinks: quant-coding-interview-leetcode-patterns, quant-firm-interview-math-brainteasers, quant-firm-interview-playbooks, quant-mental-math-tricks-handbook, quant-trader-mental-math-rapid-trainer, quant-trading-interview-qna, quant-trading-interview-roadmap

## Entity: quant-trading-interview-qna
- Title: Quant Interview Q&A Bank
- Category: Quant Trading
- Language: en
- Key Concepts: See Also, Quant Interview Q&A Bank
- References: course-quant-trading, quant-interview-cheat-sheet, quant-trading-interview-roadmap

## Entity: quant-mental-math-tricks-handbook
- Title: Quant Mental Math Tricks Handbook
- Category: Quant Trading
- Language: en
- Key Concepts: See Also, Quant Mental Math Tricks Handbook
- References: course-quant-trading, quant-interview-cheat-sheet, quant-trading-interview-roadmap
- Backlinks: quant-trader-mental-math-rapid-trainer

## Entity: quant-trader-mental-math-rapid-trainer
- Title: Quant Trader Mental Math Rapid Trainer
- Category: Quant Trading
- Language: en
- Key Concepts: See Also, Quant Trader Mental Math Rapid Trainer
- References: course-quant-trading, quant-interview-cheat-sheet, quant-mental-math-tricks-handbook

## Entity: course-quant-trading
- Title: Quant Trading & Interview Prep: Verbatim Guide
- Category: Quant Trading
- Language: en
- Key Concepts: Logic problems:, Maths problems:, 100% of the text, footnotes, examples, problems, hints, and mathematical solutions, Section 1. What is Quant Trading?, Author's Anecdote:, Section 3. How to Prepare for Interviews, Mock Trading:, Ask / Offer Price:, Quant Trading Guide (Callum McDougall, November 2020) — Complete Verbatim Course, Section 2. Quant Trading Firms & Internships, Five Rings:, 1.4.4 "You Need to be a Really Good Coder", 3.2 Problem Categories, Jane Street:, Author's Request:
- Backlinks: algorithmic-execution-twap-vwap, convex-optimization-in-trading, copula-models-and-tail-dependence, credit-risk-modeling-and-structural-models, crypto-quant-trading-and-amm-curves, cryptographic-zero-knowledge-in-finance, deep-reinforcement-learning-for-trading, exotic-options-and-structured-products, factor-investing-and-fama-french, fixed-income-quant-rates-and-yield-curve, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-stat-arb-lead-lag, high-frequency-trading-and-orderbook, interest-rate-derivatives-swaps-caps-floors, limit-order-book-matching-engine-design, machine-learning-for-quant-trading, market-impact-models-square-root-law, market-microstructure-noise-and-realized-volatility, monte-carlo-option-pricing-and-variance-reduction, optimal-stopping-american-options, optimal-stopping-and-kelly, option-greeks-and-volatility, order-book-dynamics-and-lOB-modeling, portfolio-optimization-and-black-litterman, portfolio-risk-decomposition-marginal-var, quant-brainteasers-handbook, quant-coding-interview-leetcode-patterns, quant-firm-interview-math-brainteasers, quant-firm-interview-playbooks, quant-interview-cheat-sheet, quant-market-making-mechanics, quant-mental-math-tricks-handbook, quant-risk-management-var-cvar, quant-trader-mental-math-rapid-trainer, quant-trading-interview-qna, quant-trading-interview-roadmap, stat-tests-for-trading-strategies, statistical-arbitrage-and-pairs-trading, stochastic-calculus-and-ito-lemma, stochastic-volatility-heston-model, systematic-alpha-research-and-backtesting, volatility-surface-sabr-model, volatility-trading-and-variance-swaps

## Entity: information-geometry-finance
- Title: Information Geometry in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: Application: Portfolio Optimization, Fisher Information Metric (FIM), Information-Geometric Portfolio Optimization, Visualization: Curved Probability Space, The Statistical [[manifold-learning|Manifold]], Information Geometry in Finance, Application: Distance Between Market Regimes, Related Topics, Riemannian [[manifold-learning|Manifold]], Information Geometry, Regime Shifts, Connection to [[shannon-entropy|Entropy]]
- References: entropy-pooling, finance/fisher-transform, finance/markowitz-mean-variance, finance/shannon-entropy, manifold, manifold-learning
- Backlinks: f-divergences, mle

## Entity: path-integral-control
- Title: Path Integral Control in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: Visualization: The Path Integral, High-Dimensional Execution, The Quantum Physics Connection, The Mathematical Breakthrough, Related Topics, Soft Actor-Critic (SAC), Path Integral Control in Finance, Maximum [[shannon-entropy|Entropy]] RL, Applications in High-Frequency Trading, Feynman-Kac Theorem, Path Integral Control (Path Integral Differential Dynamic Programming - PI-DDP), Softmax (or Boltzmann) weighted average, Reinforcement Learning, linear Schrödinger-type PDE
- References: finance/shannon-entropy, merton-portfolio, optimal-execution, quantum-math, reinforcement-learning, stochastic-control

## Entity: quantum-phase-estimation
- Title: Quantum Phase Estimation & Shor's Algorithm
- Category: Quantum
- Language: en
- Key Concepts: Controlled Unitaries, Initialization, Quantum Fourier Transform (QFT), Inverse QFT, Shor's Algorithm, Quantum Phase Estimation & Shor's Algorithm, Quantum Phase Estimation
- References: math/spectral-theory-operators

## Entity: effective-field-theory
- Title: Effective Field Theory (EFT)
- Category: Quantum Physics
- Language: en
- Key Concepts: Chiral perturbation theory, Why it matters, Related topics, Naturalness, Examples, General relativity, Predictive power without a UV theory, Effective Field Theory (EFT), Core idea, Renormalisation, Fermi theory of weak interactions, NRQED / NRQCD
- References: fine-tuning, renormalization-group
- Backlinks: quantum-mechanics

## Entity: many-body-tensor-networks
- Title: Many-Body Problem and Tensor Networks
- Category: Quantum Physics
- Language: en
- Key Concepts: Discrete Spacetime, Bond Dimension ($\chi$), Quantum Machine Learning, Holographic Principle, 1. The Exponential Explosion, MERA (Multi-scale Entanglement Renormalization Ansatz), 2. Theoretical Foundation: The Area Law, Tensor Networks, Hastings' Area Law Theorem (2007), Related Topics, Many-Body Problem and Tensor Networks, B. Projected Entangled Pair States (PEPS), 300 qubits, 4. MERA and the Geometry of Renormalization, [[llm]] Compression
- References: llm, math/differential-geometry, quantum-information-entropy, renormalization-group, transformer-architecture
- Backlinks: tensor-decompositions

## Entity: quantum-information-entropy
- Title: Quantum Information and Entropy
- Category: Quantum Physics
- Language: en
- Key Concepts: 4. Quantum Communication Limits, Strong Subadditivity, 2. Von Neumann [[gravitational-entropy|Entropy]] ($S$), Data Processing Inequality, Mixed States, Key Mathematical Axioms:, Von Neumann [[gravitational-entropy|Entropy]], 1 bit, Quantum Teleportation, Holography, Thermodynamics, Pure State, Concavity, Holevo's Bound, Entanglement Entropy
- References: ads-cft-deep, black-hole-thermodynamics, finance/shannon-entropy, gravitational-entropy, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ads-cft-deep, gff, linear-spaces-basis, many-body-tensor-networks, quantum-math, quantum-mechanics, topological-phases

## Entity: quantum-mechanics
- Title: Quantum Mechanics
- Category: Quantum Physics
- Language: en
- Key Concepts: The Wave Function, Born's Rule, Wave-Particle Duality, Applications, The Schrödinger Equation, Quantum Computing, Key Principles, Mathematical Formalism, Related Topics, Copenhagen Interpretation, Many-Worlds Interpretation, Quantum Decoherence, MRI, Overview, Interpretation of Quantum Mechanics
- References: effective-field-theory, math/spectral-theory-operators, qft-basic, quantum-entanglement, quantum-information-entropy, schrodinger-equation
- Backlinks: math/functional-analysis

## Entity: topological-phases
- Title: Topological Phases of Matter
- Category: Quantum Physics
- Language: en
- Key Concepts: Chern Number, Topological Photonic Crystals, Integer Quantum Hall Effect, Abelian Anyons, Conductance as Topology, Topological Data Analysis (TDA), Anyons, Braiding, Topological Phases of Matter, Bulk, Topological Invariant, Related Topics, Visualization: The One-Way Street, Matrix Rotation, immune to local noise
- References: gauge-theory-yang-mills, math/topology-basics, quantum-information-entropy

## Entity: finance/adversarial-stress-testing
- Title: Adversarial Stress Testing
- Category: Risk
- Language: en
- Key Concepts: Counterparty Risk, Extensions:, Distributional robustness, Model Validation, GAN-Based Scenario Generation, Portfolio Robustness Testing, Wasserstein distance, Adversarial Stress Testing, Practical Applications, Conditional adversarial testing, Overview & Background, Limitations:, Related Topics, Dimensionality, Sequential adversarial testing
- References: attention-mechanisms, convex-optimization-trading, copula-models, extreme-value-theory, finance/gan, finance/monte-carlo-method, finance/value-at-risk
- Backlinks: finance/nash-equilibrium, generative-scenario-models

## Entity: amihud-illiquidity
- Title: Amihud Illiquidity Ratio
- Category: Risk
- Language: en
- Key Concepts: Extensions:, Non-stationarity, Key Properties & Assumptions, Pastor-Stambaugh (2003) liquidity factor, Intraday aggregation, Liquidity Risk Factor, Transaction Cost Estimation, liquidity innovation, Risk Management, Practical Applications, Scale sensitivity, Overview & Background, Academic Factor Research, Limitations:, Related Topics
- References: finance/levy-processes, finance/market-impact-scaling, finance/value-at-risk, optimal-execution, volatility-forecasting
- Backlinks: finance/kyle-lambda, roll-model

## Entity: bayesian-black-litterman
- Title: Bayesian Black-Litterman Portfolio Optimization
- Category: Risk
- Language: en
- Key Concepts: [[mcmc]] sampling, prior, Views dominate with high confidence, Shrinkage interpretation, Extensions:, Equilibrium Market Prior, View consistency, Bayesian Black-Litterman Portfolio Optimization, Practical Applications, Subjective Investor Views, Black-Litterman (BL) model, Theil-Goldberger mixed estimator, ESG Integration, Limitations:, Overview & Background
- References: black-scholes, convex-optimization-trading, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: alpha-factor-discovery, bayesian-inference, convex-optimization-trading, entropy-pooling, finance/markowitz-mean-variance

## Entity: finance/black-swan-scenarios
- Title: Black Swan Scenario Generator
- Category: Risk
- Language: en
- Key Concepts: Scenario Report Template, Related Articles, 2. Scaled Historical Scenarios, Critical error, Refresh EVT parameters, black swan scenario generator, Generalised Pareto Distribution (GPD), Stressed Correlations, Three Scenario Sources, 1. EVT Statistical Extrapolation, T-copula, Best Practices, 3. Narrative Hypothetical Scenarios, Black Swan Scenario Generator, Back-test
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/systemic-contagion-debtrank, finance/value-at-risk
- Backlinks: lln-clt

## Entity: finance/cdo-tranches
- Title: CDO Tranches
- Category: Risk
- Language: en
- Key Concepts: attachment, Tranche Structure, Conditional Independence, Mezzanine, Collateralized Debt Obligation (CDO), Student-t copula, correlation smile, Base Correlation, Transparency, Funding, Liquidity, Base correlation, Stochastic recovery, Senior, Related Topics
- References: copula-models, finance/coherent-risk-measures, finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization, finance/value-at-risk
- Backlinks: finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization

## Entity: cs01
- Title: CS01 (Credit Spread 01)
- Category: Risk
- Language: en
- Key Concepts: Orthogonality to DV01, Full Spread Curve CS01, DVCS, P&L Attribution, Extensions:, CS01, Relative Value, Bond CS01 via Duration, Non-linearity for distressed credit, key-rate CS01, Duration approximation breaks down, positive number representing dollar loss per 1 bp spread widening, Practical Applications, CDS CS01 (Risky PV01), Overview & Background
- References: copula-models, cox-process, dv01, finance/swaps, finance/xva
- Backlinks: cox-process, dv01, finance/swaps, finance/xva

## Entity: cva-wrong-way-risk
- Title: CVA and Wrong-Way Risk
- Category: Risk
- Language: en
- Key Concepts: Example, What is CVA?, Right-Way Risk, Modeling WWR, FRTB and WWR, Credit Valuation Adjustment (CVA) and Wrong-Way Risk, Wrong-Way Risk (WWR), Wrong-Way Risk, Oil Example, Stochastic Correlation, Related Topics, Jump-to-Default Models, expected loss, positively correlated, Credit Valuation Adjustment (CVA)
- References: copula-models, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: network-risk-cascades

## Entity: finance/market-impact-scaling
- Title: Capacity & Market Impact Scaling
- Category: Risk
- Language: en
- Key Concepts: Capacity & Market Impact Scaling Laws, Non-stationarity of ADV, Permanent vs. Temporary Impact, Alpha Erosion Chart, Market Impact Scaling, Financial Application, Backtest Correction, Execution Optimization, Strategy Capacity, Cross-impact, Scaling Laws, Square Root Law of Impact, Strategy Capacity Formula, Related Topics, Intraday volume profile
- References: avellaneda-stoikov, finance/monte-carlo-method, lob-prediction, optimal-execution
- Backlinks: amihud-illiquidity, deep-rl-execution, finance/nash-equilibrium, lob-prediction

## Entity: finance/coherent-risk-measures
- Title: Coherent Risk Measures
- Category: Risk
- Language: en
- Key Concepts: shape of the tail, backtesting problem, Related Articles, Regulatory evolution, 3. Positive homogeneity., elicitable, Kusuoka representation, Value at Risk, VaR fails subadditivity, Expected Shortfall, penalty representation, 4. Subadditivity., convex risk measures, not, Basel III / FRTB
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, math/law-of-large-numbers
- Backlinks: extreme-value-theory, finance/cdo-tranches, finance/credit-derivatives-cds, frtb-es

## Entity: cornish-fisher-cvar
- Title: Cornish-Fisher CVaR
- Category: Risk
- Language: en
- Key Concepts: [[mcmc]] sampling, Extensions:, Normal vs Modified VaR by Confidence Level, Ignores serial correlation, The Cornish-Fisher Expansion, Only four moments, Cornish-Fisher adjusted z-score, Gram-Charlier expansion, Practical Applications, [[extreme-value-theory]], Overview & Background, Monotonicity, Limitations:, Related Topics, Cornish-Fisher expansion
- References: copula-models, extreme-value-theory, finance/levy-processes, finance/value-at-risk, mcmc, volatility-forecasting
- Backlinks: finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/hyperbolic-distributions, finance/isda-simm, finance/markowitz-mean-variance, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, math/large-deviations-cramer

## Entity: finance/credit-derivatives-cds
- Title: Credit Default Swaps
- Category: Risk
- Language: en
- Key Concepts: physical delivery, Hazard Rate and Survival Probability, CVA hedging, protection leg, CDS Mechanics, Mark-to-Market of an Existing CDS, Pricing Framework, Bootstrapping Hazard Rates, Pricing, Applications, Credit Default Swap (CDS), Basis trading, Credit Default Swaps, premium leg, Roll
- References: copula-models, finance/cdo-tranches, finance/coherent-risk-measures, finance/credit-risk-models, finance/value-at-risk, finance/xva
- Backlinks: finance/cdo-tranches, finance/credit-migration, finance/credit-risk-models, finance/securitization

## Entity: finance/credit-migration
- Title: Credit Migration and Rating Transitions
- Category: Risk
- Language: en
- Key Concepts: Point-in-time (PIT), Transition Matrix Framework, Bond Revaluation, drift, Cohort Method, IFRS 9 Staging Application, Estimation Methods, Rating Momentum, CreditMetrics, Typical One-Year Transition Probabilities (%), Related Topics, momentum, Credit Migration and Rating Transitions, transition matrix, Continuous-Time Generator Matrix
- References: copula-models, finance/credit-derivatives-cds, finance/value-at-risk, hidden-markov-models, survival-risk-prediction
- Backlinks: finance/credit-risk-models

## Entity: finance/credit-risk-models
- Title: Credit Risk Models
- Category: Risk
- Language: en
- Key Concepts: Credit Risk Models, Basel IRB Formula, Merton (1974), Correlation, Reduced-form models, First-Passage Extensions, Jarrow-Turnbull (1995), Reduced-Form Models, CreditMetrics (JP Morgan, 1997), Calibration, Comparison, Related Topics, Inputs, Credit Migration Models, Structural models
- References: black-scholes, copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-migration, finance/value-at-risk, finance/xva, gnn-credit-risk, survival-risk-prediction
- Backlinks: finance/cdo-tranches, finance/credit-derivatives-cds, finance/securitization

## Entity: dv01
- Title: DV01 (Dollar Value of a 01)
- Category: Risk
- Language: en
- Key Concepts: Yield Curve Key-Rate DV01, Bond Pricing and Yield, key-rate DV01, Extensions:, Tenor dependence, Curve Trading, Credit-contaminated yield, Definition, Relationship to Modified Duration, convexity, OAS DV01, FRTB Capital, Key-Rate DV01, Practical Applications, Risk Aggregation
- References: black-scholes, brownian-motion, cs01, finance/oas, finance/swaps
- Backlinks: cs01, finance/bond-options-gaussian, finance/interest-rate-term-structure, finance/oas, finance/swaps, futures-hedging, greeks-options

## Entity: finance/dispersion-trading
- Title: Dispersion Trading
- Category: Risk
- Language: en
- Key Concepts: Dispersion Trading, Correlation Risk Premium, Dispersion trading, Execution Methods, Dispersion P&L Profile, short index variance, long single-stock variance, Risk Management, Vega-Weighting, Practical Applications, Basis risk, Related Topics, P&L Decomposition, Tail hedging, Gap risk, Implied Correlation
- References: black-scholes, copula-models, finance/sabr-model, finance/value-at-risk, finance/variance-swaps, heston-model
- Backlinks: finance/variance-swaps-vix

## Entity: finance/eigenportfolio-rmt
- Title: Eigenportfolio Construction via RMT
- Category: Risk
- Language: en
- Key Concepts: Alpha Signal Construction, Statistical Arbitrage, Subsequent significant vectors, Mathematical Foundation, Risk Decomposition, Non-stationarity, Parameter Reference, Denoised Correlation Matrix, Sparse factor models, First Eigenvector, Python: Extracting Signal Eigenportfolios, Non-Gaussian returns, Denoised Optimization, Related Topics, Random Matrix Theory (RMT)
- References: finance/hierarchical-risk-parity, finance/random-matrix-theory, heston-model, math/spectral-theory-operators
- Backlinks: finance/factor-attribution, finance/gnn-finance, finance/hierarchical-risk-parity, finance/markowitz-mean-variance, finance/random-matrix-theory

## Entity: frtb-sa-mr
- Title: FRTB Standardized Approach (SA-MR)
- Category: Risk
- Language: en
- Key Concepts: Related Topics, Standardized Approach for Market Risk (SA-MR), conservative, Pro, Greeks (Sensitivities), FRTB Standardized Approach (SA-MR), 2. Default Risk Charge (DRC), C. Curvature Risk, 1. The Sensitivities-Based Method (SBM), The Core Logic: Sensitivities, A. Delta Risk, 3. Residual Risk Add-on (RRAO), Why Banks Hate/Love It, B. Vega Risk, Visualization: Capital Stack under FRTB
- References: finance/xva, frtb-es, greeks-options

## Entity: frtb-es
- Title: FRTB and Expected Shortfall
- Category: Risk
- Language: en
- Key Concepts: Fundamental Review of the Trading Book (FRTB), FRTB and Expected Shortfall (ES), Expected Shortfall (ES), P&L Attribution (PLA), 1. Liquidity Horizons, Lack of Coherence, 97.5% confidence level, Tail Blindness, 3. Non-Modellable Risk Factors (NMRF), Key Features of FRTB, coherent risk measure, 2. Standardized vs. Internal Models (IMA), average loss, Related Topics, Backtesting
- References: extreme-value-theory, finance/coherent-risk-measures, finance/value-at-risk
- Backlinks: clt, frtb-sa-mr, kelly-jump-diffusion, markov-chebyshev, measure-theory

## Entity: finance/frtb
- Title: FRTB: Fundamental Review of the Trading Book
- Category: Risk
- Language: en
- Key Concepts: Implementation, Expected Shortfall, Key Changes vs Basel 2.5, P&L Attribution Test (PLA), Related Articles, FRTB ES scaled for liquidity horizons, FRTB Liquidity Horizons, FRTB: Fundamental Review of the Trading Book, FRTB (Basel IV / BCBS 2019)
- References: cornish-fisher-cvar, extreme-value-theory, finance/isda-simm, finance/value-at-risk

## Entity: finance/factor-attribution
- Title: Factor Risk Attribution and Decomposition
- Category: Risk
- Language: en
- Key Concepts: Implementation, Percent Contribution to Risk, Brinson-Hood-Beebower (BHB) Decomposition, Factor Risk Attribution and Decomposition, Related Articles, Factor attribution, Ex-Post vs Ex-Ante vs Risk Budgeting, Marginal Contribution to Risk (MCTR), Factor Risk Decomposition
- References: fama-macbeth-regression, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, ts-cs-factor-analysis
- Backlinks: alpha-orthogonalization, finance/apt-ross, finance/capm

## Entity: fraud-detection
- Title: Fraud Detection for Transactions
- Category: Risk
- Language: en
- Key Concepts: Background, Merchant features, Bayesian Online Learning, Parameter Reference, False Positive Rate (FPR), Precision-Recall Trade-off Chart, Card-not-present (CNP) fraud, Velocity features, AUC-ROC / AUC-PR, Handling Class Imbalance, Recall (Sensitivity), Adversarial attacks, Temporal features, Explainability, Practical Applications
- References: finance/gan, finance/monte-carlo-method, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: finance/gan, finance/gnn-finance, finance/shap-interpretability, gnn-credit-risk, graph-neural-networks

## Entity: futures-hedging
- Title: Futures Hedging
- Category: Risk
- Language: en
- Key Concepts: Tailing the Hedge, Metallgesellschaft case, Duration-Based Hedging, rolls, Equity portfolio insurance, Portfolio Insurance, Practical Applications, Equity Portfolio Hedging, Basis risk, Related Topics, Beta Hedging, Airline fuel hedging, Stack and Roll, Basis and Basis Risk, stacks
- References: dv01, finance/swaps, finance/value-at-risk, geometric-brownian-motion, optimal-execution
- Backlinks: finance/value-at-risk

## Entity: finance/hierarchical-risk-parity
- Title: Hierarchical Risk Parity (HRP)
- Category: Risk
- Language: en
- Key Concepts: Tree-structural diversification, Very High, recursive risk allocation, Multi-asset fund construction, Alternative to equal-weight, HERC extension, Parameter Reference, No expected returns, Hierarchical Risk Parity (HRP), Requires Returns Forecast, Matrix Inversion, Crisis resilience, Dynamic rebalancing, Sensitivity to Noise, Risk Contribution Visualization
- References: finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/value-at-risk, kelly-criterion
- Backlinks: bayesian-black-litterman, convex-optimization-trading, fama-macbeth-regression, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/factor-attribution, finance/markowitz-mean-variance, finance/meta-labeling, finance/random-matrix-theory, model-free-rl-factors, numeraire-invariant-hedging, portfolio-optimization-ml, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis

## Entity: finance/isda-simm
- Title: ISDA SIMM: Standard Initial Margin Model
- Category: Risk
- Language: en
- Key Concepts: Margin Formula, 10 business days, 3. Risk-Class Margin, Related Articles, Operational Details, sensitivity-based, ISDA SIMM: Standard Initial Margin Model, Vega margin, Curvature add-on, back-testing, Architecture, ISDA SIMM, SIMM Calibration, Vega and Curvature, 2. Bucket Margin
- References: copula-models, cornish-fisher-cvar, finance/swaps, finance/value-at-risk, finance/xva
- Backlinks: finance/frtb, finance/repo-market-systemic

## Entity: kelly-criterion
- Title: Kelly Criterion
- Category: Risk
- Language: en
- Key Concepts: Quarter-Kelly, Half-Kelly, Discrete vs. continuous time, Correlation, Background, Parameter Reference, Non-stationarity, Leverage management, Kelly Criterion, Fractional Kelly, Drawdown Analysis, Expected Utility Foundation, Sharpe ratio divided by $\sigma$, Practical Applications, Parameter estimation risk
- References: finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, portfolio-optimization-ml
- Backlinks: bayesian-kelly, finance/hierarchical-risk-parity, finance/pe-fund-metrics, kelly-jump-diffusion, merton-portfolio, universal-portfolios

## Entity: finance/libor-sofr
- Title: LIBOR to SOFR Transition
- Category: Risk
- Language: en
- Key Concepts: Term SOFR, Implementation, LIBOR (London Interbank Offered Rate), LIBOR to SOFR Transition, Transition Timeline, Replacement Rates, SOFR In Arrears, SOFR Compounded, Related Articles, ISDA Fixed Spread Adjustments, Rate Types, SOFR (Secured Overnight Financing Rate), LIBOR vs SOFR
- References: finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, finance/xva
- Backlinks: finance/cir-hull-white, finance/interest-rate-term-structure

## Entity: network-risk-cascades
- Title: Network Models and Default Cascades
- Category: Risk
- Language: en
- Key Concepts: DebtRank, DebtRank: Centrality for Risk, Visualization: Network Contagion, Default Cascades and the Domino Effect, The Paradox of Connectivity, Network Models and Default Cascades, Weights ($L_{ij}$), Contagion Threshold, Directed Graph, Nodes ($V$), Default Cascade, Related Topics, The Financial Network as a Graph, interconnectedness, The Eisenberg-Noe Model
- References: cva-wrong-way-risk, finance/repo-market-systemic, finance/systemic-contagion-debtrank

## Entity: finance/oas
- Title: Option-Adjusted Spread (OAS)
- Category: Risk
- Language: en
- Key Concepts: OAS, G-Spread, Spread Decomposition, Volatility sensitivity, OAS < Z-Spread, Prepayment model, Model dependency, Option-Adjusted Spread (OAS), Python: OAS Calculation via Monte Carlo, Spread Comparison, Related Topics, ASW, Z-Spread, OAS > Z-Spread, For Putable Bonds
- References: dv01, finance/longstaff-schwartz, finance/monte-carlo-method, finance/sabr-model
- Backlinks: dv01, finance/nelson-siegel-svensson, finance/sabr-model, finance/securitization

## Entity: portfolio-optimization-ml
- Title: Portfolio Optimization with ML
- Category: Risk
- Language: en
- Key Concepts: Turnover, Step 4: Recursive Bisection, Hierarchical Risk Parity (HRP), Python: Full HRP Implementation, Portfolio Optimization with Machine Learning, Transaction costs, Concentration, efficient frontier, Classical Markowitz Framework, Diversification Ratio, Portfolio Optimization, Step 3: Quasi-Diagonalization, Related Topics, Step 1: Distance Matrix, Black-Litterman with ML Views
- References: finance/gan, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/random-matrix-theory, finance/value-at-risk, math/spectral-theory-operators, mcmc, model-free-rl-factors, transformer-architecture
- Backlinks: convex-optimization-trading, fama-macbeth-regression, finance/pe-fund-metrics, kelly-criterion

## Entity: finance/pe-fund-metrics
- Title: Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve
- Category: Risk
- Language: en
- Key Concepts: Core Metrics, Example, Implementation, DPI (Distributions to Paid-In), TVPI = DPI + RVPI = MOIC, DPI and RVPI, Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve, Related Articles, IRR — Internal Rate of Return, timing, MOIC — Multiple on Invested Capital, RVPI (Residual Value to Paid-In), The J-Curve, PME — Public Market Equivalent, Target Benchmarks by Strategy
- References: finance/monte-carlo-method, finance/repo-market-systemic, finance/value-at-risk, kelly-criterion, portfolio-optimization-ml

## Entity: finance/repo-market-systemic
- Title: Repo Market and Systemic Risk
- Category: Risk
- Language: en
- Key Concepts: EU SFTR, Related Articles, Systemic Risk Analysis, Cash borrower, Mechanics, Liquidity Spiral, Lehman Brothers, FSB haircut floors (2023), Systemic implication, Dodd-Frank / EMIR, Cash Flows, Special Repo, GCF Repo, Collateral Chains and Rehypothecation, repo (repurchase agreement)
- References: extreme-value-theory, finance/isda-simm, finance/kyle-lambda, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: finance/pe-fund-metrics, network-risk-cascades

## Entity: finance/securitization
- Title: Securitization
- Category: Risk
- Language: en
- Key Concepts: Mortgage-Backed Securities (MBS), The SPV Structure, OAS, Liquidity evaporation, Dodd-Frank (2010), OAS — Option-Adjusted Spread, CDO-squared, Waterfall Structure, Mechanics, Overcollateralization, Mezzanine interest, Originate-to-distribute, Credit Enhancement, CDS contracts, Agency MBS
- References: copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-risk-models, finance/oas, finance/value-at-risk
- Backlinks: finance/cdo-tranches

## Entity: sharpe-ratio-statistics
- Title: Statistics of Sharpe Ratios
- Category: Risk
- Language: en
- Key Concepts: Asymptotic Distribution, Hierarchical testing, Background, Jobson-Korkie Test, Walk-forward validation, Parameter Reference, Probabilistic Sharpe Ratio (PSR), Capital allocation, Definition, Non-normality matters, Multiple testing inflation, Short samples, Practical Applications, Estimation error dominates at short horizons, Mertens Correction for Non-Normal Returns
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/value-at-risk, hidden-markov-models, mcmc

## Entity: finance/stylized-facts-returns
- Title: Stylized Facts of Financial Returns
- Category: Risk
- Language: en
- Key Concepts: Canonical list (Rama Cont, 2001), squared, multifractal, 2. Heavy tails, Related Articles, 8. Volume-volatility nonlinearity, returns, universally, 4. Long memory of volatility, For market making, 5. Leverage effect, power law, not a theoretical defect, multifractal models, 7. Intermittency
- References: arch-models, copula-models, finance/bipower-variation, finance/capm, finance/efficient-market-hypothesis, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, garch-models, heston-model
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/hyperbolic-distributions, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, math/central-limit-theorem, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: survival-risk-prediction
- Title: Survival-Based Risk Prediction
- Category: Risk
- Language: en
- Key Concepts: Background, Parameter Reference, Kaplan-Meier Estimator, survival function, Portfolio credit risk, cumulative incidence function, Survival and Hazard Functions, partial likelihood, cumulative hazard function, Survival Analysis, Time-Varying Covariates, Practical Applications, Accelerated Failure Time (AFT) Models, Fund liquidation risk, Survival-Based Risk Prediction
- References: black-scholes, copula-models, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/credit-migration, finance/credit-risk-models, gnn-credit-risk

## Entity: convex-optimization-trading
- Title: Systematic Portfolio Trading via Convex Optimization
- Category: Risk
- Language: en
- Key Concepts: Index Replication, Extensions:, Systematic Portfolio Trading via Convex Optimization, Model Predictive Control, Non-convex constraints, Covariance estimation, Multi-Period Optimization, Convexity guarantee, Practical Applications, Systematic Equity Long/Short, Overview & Background, Efficient Frontier: Return vs Risk, Limitations:, Related Topics, Key Properties
- References: bayesian-black-litterman, black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc, portfolio-optimization-ml
- Backlinks: bayesian-black-litterman, convex-analysis, convexity, entropy-pooling, finance/adversarial-stress-testing, finance/alpha-stacking, finance/markowitz-mean-variance, gradient-hessian-jacobian, lagrange-multipliers, linear-programming, martingale-optimal-transport

## Entity: finance/systemic-contagion-debtrank
- Title: Systemic Risk and DebtRank
- Category: Risk
- Language: en
- Key Concepts: Propagation, Implementation, DebtRank, DebtRank Algorithm, Example, Comparison with Other Systemic Risk Metrics, Node States, Extensions, Related Articles, Relative impact matrix, Stress level, State, Systemic Risk and DebtRank, Systemic Impact Score, Financial Networks
- References: cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/nash-equilibrium, finance/value-at-risk
- Backlinks: cva-wrong-way-risk, finance/black-swan-scenarios, finance/gnn-finance, finance/repo-market-systemic, graph-theory, network-risk-cascades

## Entity: finance/value-at-risk
- Title: Value at Risk (VaR)
- Category: Risk
- Language: en
- Key Concepts: Expected Shortfall (ES), Parameter Reference, Model risk, Non-subadditivity, Backtesting VaR, VaR vs. CVaR Comparison, Practical Applications, Regulatory capital (Basel III/IV), 3. Monte Carlo Simulation, coherent risk measure, Margin requirements, Related Topics, Stress testing, Portfolio construction, Basel III Traffic Light System
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/xva, futures-hedging, garch-models
- Backlinks: alternative-data-alpha, amihud-illiquidity, copula-models, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/copula-models, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/frtb, finance/gan, finance/hierarchical-risk-parity, finance/isda-simm, finance/monte-carlo-method, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/quasi-monte-carlo, finance/random-matrix-theory, finance/realized-kernels, finance/securitization, finance/systemic-contagion-debtrank, finance/xva, fraud-detection, frtb-es, futures-hedging, generative-scenario-models, kelly-criterion, llm-financial-analysis, lob-prediction, math/lundberg-cramer-ruin, news-sentiment-trading, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, rl-trader, sharpe-ratio-statistics, volatility-forecasting

## Entity: finance/variance-swaps-vix
- Title: Variance Swaps and the VIX
- Category: Risk
- Language: en
- Key Concepts: VIX futures, Dispersion trading, VIX term structure, Variance Swaps and the VIX, The VIX Index, VIX index, Variance Swap vs Volatility Swap, P&L of a Delta-Hedged Option, Applications, VIX options, Tail-risk hedging, Related Topics, Volatility Risk Premium, Volatility trading, VIX basis
- References: black-scholes, finance/dispersion-trading, finance/variance-swaps, finance/volatility-surface, garch-models, greeks-options
- Backlinks: finance/delta-hedging-practice

## Entity: finance/xva
- Title: XVA (Valuation Adjustments)
- Category: Risk
- Language: en
- Key Concepts: Background, DVA, CSA negotiations, XVA Greeks, FVA, XVA netting, XVA Component Summary, Portfolio compression, MVA — Margin Valuation Adjustment, negative exposure, XVA (Valuation Adjustments), Expected Exposure, Exposure Profile Visualization, Practical Applications, Model dependency
- References: copula-models, cs01, finance/monte-carlo-method, finance/swaps, finance/value-at-risk, inference-serving
- Backlinks: convertible-bonds, copula-models, cost-of-carry, cs01, cva-wrong-way-risk, finance/copula-models, finance/credit-derivatives-cds, finance/credit-risk-models, finance/isda-simm, finance/libor-sofr, finance/nelson-siegel-svensson, finance/repo-market-systemic, finance/swaps, finance/value-at-risk, frtb-sa-mr, gnn-credit-risk, multi-curve-framework, quantum-amplitude-estimation, risk-neutral-valuation

## Entity: credit-risk-modeling-and-structural-models
- Title: Credit Risk Modeling & Merton Structural Model
- Category: Risk Management
- Language: en
- Key Concepts: See Also, Credit Risk Modeling & Merton Structural Model
- References: course-quant-trading, option-greeks-and-volatility, quant-risk-management-var-cvar

## Entity: portfolio-risk-decomposition-marginal-var
- Title: Portfolio Risk Decomposition & Risk Parity
- Category: Risk Management
- Language: en
- Key Concepts: See Also, Portfolio Risk Decomposition & Risk Parity
- References: course-quant-trading, portfolio-optimization-and-black-litterman, quant-risk-management-var-cvar

## Entity: quant-risk-management-var-cvar
- Title: Quantitative Risk Management: VaR & CVaR
- Category: Risk Management
- Language: en
- Key Concepts: See Also, Expected Shortfall ($CVaR_\alpha$):, 2. Performance Metrics, 1. VaR & Expected Shortfall (CVaR), Quantitative Risk Management: VaR & CVaR, Value at Risk ($VaR_\alpha$):
- References: course-quant-trading, optimal-stopping-and-kelly, statistical-arbitrage-and-pairs-trading
- Backlinks: copula-models-and-tail-dependence, credit-risk-modeling-and-structural-models, portfolio-optimization-and-black-litterman, portfolio-risk-decomposition-marginal-var, stat-tests-for-trading-strategies, statistical-arbitrage-and-pairs-trading

## Entity: deep-rl-execution
- Title: Deep RL for Trade Execution
- Category: Scientific ML
- Language: en
- Key Concepts: Action, Non-stationarity, Two Sides, Ning et al. (2021), AI:, Ritter (2022), Cross-venue routing, High-frequency liquidation, State, Performance Comparison, Applications in Practice, MDP Formulation, Key Results and Performance, Risk controls, Sell-side execution desks
- References: finance/market-impact-scaling, finance/shannon-entropy, generative-scenario-models, lob-prediction, optimal-execution, reinforcement-learning, rl-trader, temporal-fusion-transformer
- Backlinks: ai-market-making, alpha-factor-research, ml-options-pricing, offline-rl, optimal-execution, reinforcement-learning, rough-paths, temporal-fusion-transformer, tool-use

## Entity: generative-scenario-models
- Title: Generative Models for Scenario Generation
- Category: Scientific ML
- Language: en
- Key Concepts: stylised facts, Non-stationarity, Two Sides, Validation difficulty, VAE Training Objective, AI:, Applications in Practice, Regulatory stress scenarios, CCR stress testing, Key Results and Performance, Variational Autoencoders (VAEs), Architecture, Regulatory acceptance, Distribution Comparison, Related Topics
- References: copula-models, extreme-value-theory, finance/adversarial-stress-testing, finance/monte-carlo-method, finance/value-at-risk, garch-models, generative-models, stochastic-differential-equations, temporal-fusion-transformer
- Backlinks: deep-rl-execution, generative-models, gnn-credit-risk, llm-financial-analysis, market-microstructure, temporal-fusion-transformer

## Entity: gnn-credit-risk
- Title: Graph Neural Networks for Credit Risk
- Category: Scientific ML
- Language: en
- Key Concepts: Graph [[attention-mechanisms|Attention]] Network (GAT), Retail credit fraud, Two Sides, Heterogeneous Credit Graph, Corporate credit rating, AI:, Applications in Practice, Temporal dynamics, Yang et al. (2021), Graph Neural Networks for Credit Risk, Performance benchmarks, Key Results and Performance, Interbank contagion analysis, Related Topics, XVA netting set risk
- References: attention-mechanisms, copula-models, finance/xva, fraud-detection, generative-scenario-models, graph-neural-networks, llm, llm-financial-analysis, spectral-graph-theory, survival-risk-prediction, transformer-architecture
- Backlinks: finance/credit-risk-models, graph-neural-networks, llm-financial-analysis

## Entity: kan
- Title: Kolmogorov-Arnold Networks (KAN)
- Category: Scientific ML
- Language: en
- Key Concepts: The two sides of KAN, AI:, KAN architecture., Compositional structure., Sparsification and pruning., vs [[transformer-architecture|MLP]]:, Applications, Extrapolation:, Spectral analysis:, Symbolic regression interface., Training speed., Symbolic regression fragility., Still maturing., Related Topics, Scientific discovery benchmark.
- References: attention-mechanisms, conformal-field-theory, equivariant-nn, finance/spectral-analysis, kolmogorov-arnold-theorem, learnable-activations, pinns, qft-basic, transformer-architecture
- Backlinks: kolmogorov-arnold-theorem, learnable-activations, pinns

## Entity: llm-financial-analysis
- Title: LLM for Financial Analysis
- Category: Scientific ML
- Language: en
- Key Concepts: Retrieval-Augmented Generation, Context window economics, Earnings event trading, Two Sides, AI:, Applications in Practice, [[rag]] Pipeline for SEC Filings, FinBERT, FinQA benchmark, Key Results and Performance, Domain-Specific Models, Regulatory filing monitoring, Related Topics, Sentiment classification, Adversarial inputs
- References: finance/value-at-risk, fine-tuning, generative-scenario-models, gnn-credit-risk, inference-serving, llm, news-sentiment-trading, rag, temporal-fusion-transformer
- Backlinks: alpha-factor-research, gnn-credit-risk, mcp, ml-options-pricing, nlp-financial-analysis, rag, research/mla-financial-reasoning, temporal-fusion-transformer, tool-use

## Entity: neural-operators
- Title: Neural Operators
- Category: Scientific ML
- Language: en
- Key Concepts: Complexity, Training data, DeepONet, Inverse problems:, Data hunger:, Weather & climate:, Output:, Applications, Workflow:, Extrapolation:, Key operation:, The Operator Approximation Problem, Material science:, See Also, Limitations and Outlook
- References: ai-physics/hamiltonian-nn, equivariant-nn, fokker-planck-equation, numerical-pde-finance, partial-differential-equations, pinns, stochastic-differential-equations
- Backlinks: fourier-neural-operators

## Entity: pinns
- Title: Physics-Informed Neural Networks (PINNs)
- Category: Scientific ML
- Language: en
- Key Concepts: AI:, Convergence theory:, Quantum mechanics:, Applications, Adaptive loss weighting., Heat transfer:, Pathological loss landscapes., Physics-Informed Neural Networks (PINNs), Data assimilation:, Related Topics, Anomalous diffusion:, Analytical exactness:, Limitations, Requires known PDE., The two sides of a PINN
- References: ai-physics/hamiltonian-nn, automatic-differentiation, black-scholes, equivariant-nn, finance/fractional-fokker-planck, kan, partial-differential-equations, schrodinger-equation
- Backlinks: ai-physics/hamiltonian-nn, automatic-differentiation, deep-ritz-method, equivariant-nn, fourier-neural-operators, gaussian-processes, kan, kolmogorov-arnold-theorem, kuramoto-model, learnable-activations, neural-odes, neural-operators, partial-differential-equations

## Entity: temporal-fusion-transformer
- Title: Temporal Fusion Transformer
- Category: Scientific ML
- Language: en
- Key Concepts: Variable Selection Networks, Sequence encoding, Temporal Fusion [[transformer-architecture|Transformer]] (TFT), Temporal [[attention-mechanisms|attention]] patterns, Data hunger, Static covariates, Two Sides, AI:, Gating Mechanism, Applications in Practice, Variable selection, Interpretability Surface, P50 forecast error, Macro regime-conditional forecasting, Key Results and Performance
- References: arima-models, attention-mechanisms, deep-rl-execution, garch-models, generative-scenario-models, inference-serving, llm-financial-analysis, transformer-architecture, volatility-forecasting
- Backlinks: ai-market-making, alpha-factor-research, deep-rl-execution, generative-scenario-models, llm-financial-analysis, ml-options-pricing, nlp-financial-analysis

## Entity: ar-models
- Title: AR (Autoregressive) Models
- Category: Signal Analysis
- Language: en
- Key Concepts: ARIMA, Market Microstructure, Extensions:, Stationarity requirement, outside, weakly stationary, Volatility Forecasting, ARCH/GARCH, Practical Applications, ARMA, lag operator, Overview & Background, VAR (Vector AR), Limitations:, Linearity
- References: arch-models, arima-models, arma-models, finance/levy-processes, finance/spectral-analysis, math/spectral-theory-operators, mcmc, volatility-forecasting
- Backlinks: arch-models, arima-models, arma-models

## Entity: arima-models
- Title: ARIMA (Integrated ARMA)
- Category: Signal Analysis
- Language: en
- Key Concepts: Spurious stationarity, Extensions:, Integration order, Macro Forecasting, Special cases, Volatility Forecasting, ARIMAX / Transfer Function, ARIMA Models, Full ARIMA specification, SARIMA, Algorithmic Trading, Practical Applications, Unit Root Tests, Overview & Background, Limitations:
- References: ar-models, arma-models, finance/cointegration, finance/hurst-exponent, finance/levy-processes, mcmc, volatility-forecasting
- Backlinks: ar-models, arma-models, finance/cointegration, temporal-fusion-transformer

## Entity: arma-models
- Title: ARMA (Autoregressive Moving Average)
- Category: Signal Analysis
- Language: en
- Key Concepts: [[mcmc]] sampling, ARIMA, Estimation: Maximum Likelihood, Extensions:, Autoregressive Moving Average (ARMA), Stationarity requirement, Macro Signal Construction, Volatility Forecasting, ARMA-GARCH, Autocovariance structure, Box-Jenkins Identification, Invertibility condition, Practical Applications, Overview & Background, Parsimony
- References: ar-models, arima-models, black-scholes, finance/spectral-analysis, mcmc, volatility-forecasting
- Backlinks: ar-models, arch-models, arima-models

## Entity: finance/dft
- Title: Discrete Fourier Transform (DFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Power Spectral Density (PSD), conjugate-symmetric, Nyquist frequency, anti-aliasing low-pass filter, Definition, Rectangular, Spectral leakage, Nyquist–Shannon Sampling Theorem, Matrix form:, Blackman, Stationarity:, not, Blackman-Harris, Related Topics, Interpreting the Coefficients
- References: finance/fft, finance/hilbert-huang-transform, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/fft, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fft
- Title: Fast Fourier Transform (FFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Radix-4, decimation-in-time (DIT), The Butterfly Operation, Fast Fourier Transform (FFT), Mixed-radix, Bit-Reversal Permutation, Digital filtering:, $N = 2^m$:, Algorithm Variants, Applications, butterfly, bit-reversed, Large integer multiplication:, Radix-2 DIF, Stationarity:
- References: finance/dft, finance/shor-algorithm, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/dft, finance/hyperbolic-distributions, finance/levy-esscher-continuous, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fisher-transform
- Title: Fisher Transform
- Category: Signal Analysis
- Language: en
- Key Concepts: Momentum confirmation, Parameter Reference, Statistical Interpretation, Transformation, Signal normalisation, Practical Applications, Python: Fisher Transform Implementation, Mathematical Formula, Related Topics, Lag, Adaptive Fisher, The Fisher Transform, Fisher Transform, Multi-asset ranking, Trigger Line
- References: finance/hilbert-huang-transform, finance/hurst-exponent, finance/spectral-analysis
- Backlinks: finance/hilbert-huang-transform, finance/spectral-analysis, information-geometry-finance

## Entity: finance/hilbert-huang-transform
- Title: Hilbert-Huang Transform (HHT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Parameter Reference, High, Adaptive denoising, Physical interpretability, Market cycle extraction, instantaneous frequency, Intrinsic Mode Functions (IMFs), Completeness, End effects, Time-varying volatility analysis, Ensemble EMD (EEMD), Linearity, Related Topics, Computational cost, Hilbert-Huang Spectrum
- References: finance/fisher-transform, finance/hurst-exponent, finance/spectral-analysis, wavelet-transform
- Backlinks: finance/dft, finance/fisher-transform, finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/realized-kernels
- Title: Intraday Volatility via Realized Kernels
- Category: Signal Analysis
- Language: en
- Key Concepts: Tukey-Hanning Kernel, HAR-RK model, Background, Parameter Reference, Integrated Variance, refresh-time, The Realized Kernel Estimator, Volatility risk premia, Ultra-high-frequency, Consistency and Convergence Rate, Intraday Volatility Forecasting via Realized Kernels, Pre-averaging, Optimal Sampling via Signature Plots, Unbiasedness, Practical Applications
- References: brownian-motion, finance/spectral-analysis, finance/value-at-risk, garch-models, geometric-brownian-motion, volatility-forecasting, wavelet-transform
- Backlinks: finance/bipower-variation, finance/spectral-analysis, finance/wavelet-transform, jump-robust-volatility, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: kalman-filter
- Title: Kalman Filter
- Category: Signal Analysis
- Language: en
- Key Concepts: Kalman Gain Dynamics, Background, Extensions, Parameter Reference, State (transition) equation:, maximum likelihood estimation, sigma points, observation equation, Factor model estimation, Python: Full Implementation, state-space form, The Two-Step Algorithm, Step 1: Prediction, Kalman Filter, state equation
- References: finance/particle-filter, hidden-markov-models, mcmc, volatility-forecasting
- Backlinks: conditionally-gaussian-processes, factor-graphs-inference, finance/cointegration, finance/hidden-markov-models, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/transformer-timeseries, innovation-process, math/conditional-expectation-sigma, math/sequential-hypothesis-testing, math/spectral-representation-processes, math/stationary-wide-spectral, multivariate-normal-distribution, nonlinear-filtering, state-space-models

## Entity: finance/lempel-ziv-complexity
- Title: Lempel-Ziv Complexity
- Category: Signal Analysis
- Language: en
- Key Concepts: Model-free, Cross-Asset Synchronization, Lempel-Ziv (LZ) Complexity, Core Principle, Binarization choice, Background and History, Algorithmic Trading, Practical Applications, Regime Detection, Related Topics, Python: LZ Complexity with Rolling Analysis, Asymptotic consistency, Key Properties, Visualization: Complexity Trends, Multidimensional extension
- References: finance/hurst-exponent, finance/phase-space-reconstruction, finance/shannon-entropy, hidden-markov-models
- Backlinks: finance/hurst-exponent, finance/phase-space-reconstruction, finance/sha-256, finance/shannon-entropy, financial-entropy, kolmogorov-complexity

## Entity: finance/phase-space-reconstruction
- Title: Phase Space Reconstruction
- Category: Signal Analysis
- Language: en
- Key Concepts: embedding dimension, Embedding Dimension $m$: False Nearest Neighbors, Attractor Identification, Python: Phase Space Reconstruction and FNN, time delay, Data Requirements, Takens' Embedding Theorem, Correlation Dimension, Non-linear Forecasting, Embedding as features, Average Mutual Information, largest Lyapunov exponent, Related Topics, Key Limitations, Skepticism in finance
- References: finance/hurst-exponent, finance/lempel-ziv-complexity, finance/particle-filter, finance/spectral-analysis, hidden-markov-models
- Backlinks: finance/hidden-markov-models, finance/hurst-exponent, finance/lempel-ziv-complexity

## Entity: finance/prony-hankel-spectral
- Title: Prony's Method and Hankel Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Hankel matrix, Implementation, Prony's Method and Hankel Spectral Analysis, Step 1: Linear Prediction via Hankel System, Related Articles, Hankel SVD Filtering, Prony's method, Step 3: Amplitude Estimation, Regime Interpretation, Algorithm, Comparison with FFT, Step 2: Root Finding, Problem Formulation
- References: finance/hilbert-huang-transform, finance/singular-spectral-analysis, finance/spectral-analysis, fourier-transform, wavelet-transform

## Entity: finance/singular-spectral-analysis
- Title: Singular Spectral Analysis (SSA)
- Category: Signal Analysis
- Language: en
- Key Concepts: W-correlation, Background, Parameter Reference, trajectory matrix, Multivariate SSA (M-SSA), singular spectrum, Principal Components, Volatility regime decomposition, Practical Applications, Macro forecasting, Step 2 — Singular Value Decomposition, Identifiability, No stationarity assumption, Related Topics, Computational cost
- References: finance/random-matrix-theory, finance/spectral-analysis, math/spectral-theory-operators, volatility-forecasting, wavelet-transform
- Backlinks: finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform

## Entity: finance/spectral-analysis
- Title: Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Autoregressive (Parametric) Spectral Estimation, Background, inconsistent, Power Spectral Density (PSD), Fast Fourier Transform (FFT), Non-stationarity, Nyquist frequency, Business cycle detection, Intraday seasonality, Cross-market lead-lag, Stationarity requirement, Cross-Spectral Density and Coherence, Parameter Reference, squared coherence, Lomb-Scargle periodogram
- References: finance/fisher-transform, finance/hilbert-huang-transform, finance/realized-kernels, finance/singular-spectral-analysis, wavelet-transform
- Backlinks: ar-models, arma-models, convolutional-volatility-resolution-clustering, finance/dft, finance/fft, finance/fisher-transform, finance/hilbert-huang-transform, finance/phase-space-reconstruction, finance/prony-hankel-spectral, finance/realized-kernels, finance/shor-algorithm, finance/singular-spectral-analysis, finance/wavelet-transform, finance/zeta-field, fourier-transform, kan, kolmogorov-arnold-theorem, volatility-modulated-spectral-surface

## Entity: volatility-modulated-spectral-surface
- Title: Volatility-Modulated Spectral Surface (VMSS)
- Category: Signal Analysis
- Language: en
- Key Concepts: Background, Parameter Reference, Noise separation, Adaptive denoising, Online computation, Pseudo-WVD, Volatility-Modulated Spectral Surface (VMSS), Practical Applications, volatility-adjusted spectral power, Resonance Zones, Circular dependency, persistent spectral patterns, Deep learning integration, Wigner-Ville Distribution (WVD), VMSS Spectral Entropy Over Time
- References: finance/gan, finance/realized-kernels, finance/shannon-entropy, finance/spectral-analysis, garch-models, inference-serving, volatility-forecasting, wavelet-transform
- Backlinks: convolutional-volatility-resolution-clustering

## Entity: finance/wavelet-transform
- Title: Wavelet Transform (CWT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Morlet wavelet, Multi-Scale Wavelet Power, Background, Edge effects, Parameter Reference, translation, Scale-dependent correlation, Sparse representation, MODWT, wavelet variance, scaling function, Practical Applications, Discrete Wavelet Transform (DWT), Multi-scale denoising, 2D wavelets
- References: finance/hilbert-huang-transform, finance/realized-kernels, finance/singular-spectral-analysis, finance/spectral-analysis, volatility-forecasting

## Entity: convolution-math
- Title: Convolution
- Category: Signal Processing
- Language: en
- Key Concepts: Overview, Continuous and Discrete

## Entity: dct-math
- Title: Discrete Cosine Transform (DCT)
- Category: Signal Processing
- Language: en
- Key Concepts: Applications, Overview

## Entity: nyquist-shannon
- Title: Nyquist-Shannon Theorem
- Category: Signal Processing
- Language: en
- Key Concepts: Formulation, Overview
- References: sampling-aliasing

## Entity: sampling-aliasing
- Title: Sampling & Aliasing
- Category: Signal Processing
- Language: en
- Key Concepts: Anti-Aliasing, Overview
- Backlinks: nyquist-shannon

## Entity: z-transform
- Title: Z-Transform
- Category: Signal Processing
- Language: en
- Key Concepts: Definition, Overview

## Entity: bayesian-nonparametrics
- Title: Bayesian Non-parametrics
- Category: Statistical Learning
- Language: en
- Key Concepts: Chinese Restaurant Process (CRP), Related Topics, Bayesian Non-parametrics, infinite-dimensional, Visualization: Model Growth, latent feature models, rich-get-richer, The Dirichlet Process (DP), Gaussian Processes, Automatic Complexity Selection, Gaussian Processes (GP), Flexibility, Stick-Breaking construction, Why Use BNP?, Uncertainty Quantification
- References: gaussian-processes, mixture-of-experts
- Backlinks: gmm

## Entity: dirichlet-processes
- Title: Bayesian Non-parametrics: Dirichlet Processes
- Category: Statistical Learning
- Language: en
- Key Concepts: The Chinese Restaurant Process (CRP), Mathematical Definition, Bayesian Non-parametrics: Dirichlet Processes, Applications in Clustering, Stick-Breaking Construction

## Entity: concentration-of-measure
- Title: Concentration of Measure
- Category: Statistical Learning
- Language: en
- Key Concepts: The Phenomenon, Talagrand's Concentration Inequality, Rademacher Complexity and Generalization, Concentration of Measure, McDiarmid's Inequality

## Entity: sgd-convergence-theory
- Title: Convergence Theory of Stochastic Gradient Descent
- Category: Statistical Learning
- Language: en
- Key Concepts: Convergence Theory of Stochastic [[convex-optimization|Gradient Descent]], Convex and Smooth Functions, Strong Convexity, Non-Convex Optimization and the PL Condition, Problem Formulation
- References: convex-optimization

## Entity: differential-privacy
- Title: Differential Privacy in ML
- Category: Statistical Learning
- Language: en
- Key Concepts: membership inference attacks, DP-SGD: Training with Privacy, $\epsilon$ (Privacy Budget), Visualization: Privacy Budget vs. Accuracy, Compliance, Differentially Private Stochastic [[convex-optimization|Gradient Descent]] (DP-SGD), Related Topics, $\delta$, $(\epsilon, \delta)$-differential privacy, Differential Privacy in Machine Learning, Noise Addition, Gradient Clipping, User Trust, Low Noise, The Privacy-Utility Trade-off
- References: ai-theory/adversarial-examples, convex-optimization, federated-learning
- Backlinks: federated-learning

## Entity: gmm
- Title: Gaussian Mixture Models (GMM)
- Category: Statistical Learning
- Language: en
- Key Concepts: soft assignment, Soft Clustering (Responsibilities), mixing weight, Initialize, M-step, Gaussian Mixture Models (GMM), E-step, Repeat, Fitting the Model: The EM Algorithm, The Model Definition, responsibility, Relationship to K-Means, Related Topics, Visualization: GMM vs K-Means
- References: bayesian-nonparametrics, expectation-maximization
- Backlinks: em-algorithm, matrix-calculus

## Entity: kernel-methods-rkhs
- Title: Kernel Methods & RKHS
- Category: Statistical Learning
- Language: en
- Key Concepts: Kernel Mean Embeddings, The Representer Theorem, Kernel Methods & Reproducing Kernel Hilbert Spaces (RKHS), reproducing property, Reproducing Kernel Hilbert Space, Mercer's Theorem, characteristic
- References: math/spectral-theory-operators
- Backlinks: attention-kernel, hilbert-banach-spaces, kde

## Entity: linear-regression
- Title: Linear Regression and Gauss-Markov
- Category: Statistical Learning
- Language: en
- Key Concepts: No Autocorrelation, Ordinary Least Squares (OLS), The Model, The Gauss-Markov Theorem, Regularization (Ridge and Lasso), exactly zero, Normal Equation, Zero Mean, BLUE (Best Linear Unbiased Estimator), Homoscedasticity, Linear Regression and the Gauss-Markov Theorem, Visualization: The Bias-Variance Trade-off, Related Topics, Gauss-Markov Theorem, 1. Ridge Regression (L2 Penalty)
- References: bayesian-inference, logistic-regression, mle
- Backlinks: logistic-regression

## Entity: logistic-regression
- Title: Logistic Regression
- Category: Statistical Learning
- Language: en
- Key Concepts: 1. The Logistic Model, Log-Odds, Logistic Function, Online Learning, Linear Hyperplane, 3. Interpretation: Odds and Ratios, 2. Estimation: Cross-[[shannon-entropy|Entropy]] Loss, Decision Boundary, Related Topics, Multinomial (Softmax), Binary Cross-[[shannon-entropy|Entropy]], Sigmoid activation, Regularization (LASSO/Ridge), 4. Modern Scaling, [[asymptotic-stats/mle|Maximum Likelihood Estimation (MLE)]]
- References: convex-optimization, convexity, finance/shannon-entropy, linear-regression, mle, transformer-architecture
- Backlinks: linear-regression

## Entity: normalizing-flows-math
- Title: Mathematical Foundations of Normalizing Flows
- Category: Statistical Learning
- Language: en
- Key Concepts: Change of Variables Theorem, Liouville Equation, Mathematical Foundations of Normalizing Flows, Composition of Flows, Continuous Normalizing Flows (CNFs)

## Entity: mechanism-design
- Title: Mechanism Design
- Category: Statistical Learning
- Language: en
- Key Concepts: 1. Second-Price Auction (Vickrey Auction), Incentive Compatible (IC), Direct Mechanism, rules, Application in AI: Alignment and Governance, The Goal: Incentive Compatibility, The Revelation Principle, Related Topics, Famous Examples, Mechanism Design, AI Alignment, Strategy-proofness, stable, Multi-Agent Systems, second-highest price
- References: llm, mean-field-games, online-learning-regret, rlhf

## Entity: mcts
- Title: Monte Carlo Tree Search (MCTS)
- Category: Statistical Learning
- Language: en
- Key Concepts: AlphaGo and Neural MCTS, $\sqrt{\dots}$ (Exploration), The Four Stages of MCTS, $Q(v)/N(v)$ (Exploitation), Monte Carlo simulations, The UCT Formula, Related Topics, heuristic evaluation functions, Visualization: Tree Search vs. Rollout, UCT, Policy Network, AlphaGo, Monte Carlo Tree Search (MCTS), Simulation (Rollout), Tree Search
- References: automatic-differentiation, mdp, monte-carlo-integration, multi-armed-bandits
- Backlinks: orm-prm

## Entity: multi-armed-bandits
- Title: Multi-Armed Bandits
- Category: Statistical Learning
- Language: en
- Key Concepts: Regret, Related Topics, Exploration, Exploitation, sublinear regret, 2. UCB (Upper Confidence Bound), Visualization: UCB Action Selection, news recommendation, Multi-Armed Bandits, 3. Thompson Sampling, Exploration vs. Exploitation trade-off, Contextual Bandits, 1. $\epsilon$-Greedy, sample, Cumulative Regret
- References: bayesian-inference, mdp, online-learning-regret
- Backlinks: mcts

## Entity: naive-bayes
- Title: Naive Bayes Classifier
- Category: Statistical Learning
- Language: en
- Key Concepts: class label, NLP, Gaussian Naive Bayes, 3. Why it Works (The Paradox of Naive Bayes), Bayes' Theorem, Bernoulli Naive Bayes, "Naive" Assumption, Real-time Filtering, Naive Bayes Classifier: The Power of Independence, Low Variance, 2. Common Variants, 4. Modern Use Cases in AI, Related Topics, Decision Boundary vs. Probability, Zero-Shot Baseline
- References: bayesian-inference, decision-theory, finance/shannon-entropy, llm, rag
- Backlinks: bayes-theorem

## Entity: online-learning-regret
- Title: Online Learning and Regret
- Category: Statistical Learning
- Language: en
- Key Concepts: Visualization: Regret Scaling, Exploration-Exploitation Trade-off, Online Learning and Regret Minimization, Key Algorithms, Optimization, 1. Follow the Leader (FTL), Applications, Multi-armed Bandits (MAB), Thompson Sampling, Portfolio Selection, Related Topics, UCB (Upper Confidence Bound), Regret, 3. Multiplicative Weights Update (MWU) / Hedge, The Online Protocol
- References: convex-optimization, finance/shannon-entropy, math/information-theory, reinforcement-learning
- Backlinks: mechanism-design, multi-armed-bandits, universal-portfolios

## Entity: pca
- Title: Principal Component Analysis (PCA)
- Category: Statistical Learning
- Language: en
- Key Concepts: Visualization: Finding the Projection, Applications, Related Topics, SVD (Singular Value Decomposition), The Mathematical Objective, explained variance ratio, principal components, maximize the variance, eigenvector, unsupervised dimensionality reduction, Spectral Theorem Connection, Principal Component Analysis (PCA), empirical covariance matrix, Visualization, Noise Reduction
- References: manifold-learning, math/spectral-theory-operators, variational-autoencoders
- Backlinks: alpha-orthogonalization, eigenvalues-eigenvectors, fastest-mean-reversion, matrix-decompositions, multivariate-normal, pca-statarb, tensor-decompositions

## Entity: attention-kernel
- Title: Self-Attention as a Kernel
- Category: Statistical Learning
- Language: en
- Key Concepts: Related Topics, Self-[[attention-mechanisms|Attention]], Kernel Methods, Visualization: Attention Surface in RKHS, Reproducing Kernel Hilbert Space (RKHS), The Kernel Interpretation, Nadaraya-Watson Kernel Regression, Linear Transformers, Transformers as Non-parametric Learners, feature map, The [[attention-mechanisms|Attention]] Mechanism, Linear Transformers and Feature Maps, [[convex-optimization|gradient descent]], Self-[[attention-mechanisms|Attention]] as a Kernel, In-Context Learning
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, kernel-methods-rkhs, state-space-models, transformer-architecture

## Entity: singular-learning-theory
- Title: Singular Learning Theory
- Category: Statistical Learning
- Language: en
- Key Concepts: Singular Learning Theory, Resolution of Singularities, Real Log Canonical Threshold (RLCT), The Free Energy and RLCT, Generalization Error

## Entity: statistical-mechanics-learning
- Title: Statistical Mechanics of Learning
- Category: Statistical Learning
- Language: en
- Key Concepts: capacity, Gardner Volume and Capacity, The Teacher-Student Setup, Gibbs distribution, Phase Transitions, SAT/UNSAT Transition:, Spin-Glass Transition:, Key Phenomena, Mathematical Framework, Related Topics, Order Parameters and Overlaps, The Replica Trick, What Is It, Replica Symmetry Breaking (RSB):, Replica Trick
- References: ai-theory/neural-tangent-kernel, information-bottleneck-theory, pac-learning

## Entity: variational-inference-math
- Title: Variational Inference
- Category: Statistical Learning
- Language: en
- Key Concepts: Variational Inference, Mean-Field Approximation, The Reparameterization Trick, The Evidence Lower Bound (ELBO)
- References: convex-optimization
- Backlinks: factor-graphs-inference

## Entity: anova
- Title: ANOVA (One-way/Two-way)
- Category: Statistics
- Language: en
- Key Concepts: One-way ANOVA:, One-way vs Two-way, Overview, Two-way ANOVA:
- Backlinks: sampling-distributions

## Entity: chi-squared-tests
- Title: Chi-Squared Tests
- Category: Statistics
- Language: en
- Key Concepts: Test Statistic, Overview

## Entity: logistic-regression-math
- Title: Logistic Regression Math
- Category: Statistics
- Language: en
- Key Concepts: Mathematical Formulation, Overview

## Entity: survival-analysis
- Title: Survival Analysis Basics
- Category: Statistics
- Language: en
- Key Concepts: Key Functions, Survival Function $S(t)$:, Overview, Hazard Function $h(t)$:

## Entity: time-series-basics
- Title: Time Series Basics
- Category: Statistics
- Language: en
- Key Concepts: Stationarity, Overview, Autocorrelation

## Entity: signature-based-models
- Title: Signature-based Models
- Category: Stochastic
- Language: en
- Key Concepts: What is a Path Signature?, Dimensionality Reduction, Signature-based Models in Finance, feature map, 2. Pricing and Hedging, linear, non-linear functional, 3. Lead-Lag Relationships, Signatures in Quantitative Finance, Visualization: The First Few Terms, Sig-GANs, linear regression, Related Topics, Universal Property, Path Signature
- References: generative-models, path-dependent-volatility, rough-paths
- Backlinks: path-dependent-volatility

## Entity: copula-models-and-tail-dependence
- Title: Copula Models & Tail Dependence
- Category: Stochastic & Probability
- Language: en
- Key Concepts: 1. Sklar's Theorem, See Also, Copula Models & Tail Dependence
- References: course-quant-trading, portfolio-optimization-and-black-litterman, quant-risk-management-var-cvar

## Entity: stochastic-volatility-heston-model
- Title: Stochastic Volatility & Heston Model
- Category: Stochastic & Probability
- Language: en
- Key Concepts: See Also, Stochastic Volatility & Heston Model
- References: course-quant-trading, stochastic-calculus-and-ito-lemma, volatility-trading-and-variance-swaps
- Backlinks: volatility-surface-sabr-model

## Entity: volatility-surface-sabr-model
- Title: Volatility Surface & SABR Model
- Category: Stochastic & Probability
- Language: en
- Key Concepts: See Also, Volatility Surface & SABR Model
- References: course-quant-trading, option-greeks-and-volatility, stochastic-volatility-heston-model

## Entity: math/backward-sde
- Title: Backward Stochastic Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Related concepts, Backward Stochastic Differential Equations, adapted to the filtration, $(Y_t, Z_t)$ is the unknown pair, Numerical methods, generator, Reflected BSDEs, Utility maximization:, Core applications, sublinear expectations, Stochastic control:, Option pricing under incompleteness:, Comparison theorem, Euler discretization, G-expectation and sublinear expectations
- References: feynman-kac, malliavin-calculus, math/martingale-representation, math/quadratic-variation, optional-decomposition, stochastic-control, stochastic-differential-equations
- Backlinks: math/spdes

## Entity: bsdes-nonlinear-pdes
- Title: Backward Stochastic Differential Equations (BSDEs) & Nonlinear PDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Nonlinear Feynman-Kac Formula, Backward Stochastic Differential Equations (BSDEs) & Nonlinear PDEs, Applications, Standard Form

## Entity: clark-ocone-formula
- Title: Clark-Ocone Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Formula, Generalizations, Financial Hedging, Clark-Ocone Formula
- Backlinks: skorokhod-integral

## Entity: math/convergence-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Step 1: Tightness., Related Articles, random, The Semimartingale Topology, Diffusion convergence:, Proof Strategy, Setup and Notation, The Main Convergence Theorem, Applications, Step 2: Identification of limits., CLT for stochastic integrals., Theorem (Emery)., stable convergence, Step 3: Characteristic function convergence., Specialization: Convergence to Levy Processes
- References: brownian-motion, characteristic-functions, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, math/contiguity-measures, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/convergence-stochastic-integrals, math/density-processes, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/martingale-problem, math/predictable-compensator, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/convergence-stochastic-integrals
- Title: Convergence of Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stronger version., Application: Euler Scheme Convergence, Definition., any reasonable discrete-time financial model converges to a continuous-time model, and any trading strategy in the discrete model converges to the corresponding continuous-time strategy, The Meta-Theorem: Discrete Models Approximate Continuous Models, good sequence, Related Articles, The Main Theorem, The Problem, Application: Discrete Hedging Convergence, Convergence of Stochastic Integrals, The Semimartingale Topology, Theorem (Jakubowski-Memin-Pages; Kurtz-Protter)., UT (uniform tightness), Good Sequences and the UT Condition
- References: finance/girsanov-semimartingales, finance/semimartingale-models, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, stochastic-differential-equations
- Backlinks: math/convergence-semimartingales, math/quadratic-variation

## Entity: feynman-kac
- Title: Feynman-Kac Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Example II: The Heat Equation (V=0), infinitesimal generator of the diffusion, Related Articles, curse of dimensionality, Theorem (Feynman-Kac)., Taking expectations:, Proof Sketch: The Martingale Approach, path-integral formulation of quantum mechanics, Numerical Solution: Monte Carlo Instead of Finite Differences, Applications, Formulation: The Main Result, Key step:, stochastic discount factor, Discounting and the Stochastic Discount Factor, Example I: The Black-Scholes PDE
- References: black-scholes, finance/girsanov-semimartingales, finance/optimal-stopping-american, fokker-planck-equation, math/martingale-representation, numerical-pde-finance, partial-differential-equations, path-integral, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/backward-sde, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, stochastic-control, stochastic-differential-equations, stochastic-processes

## Entity: hjm-framework
- Title: HJM (Heath-Jarrow-Morton) Framework
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Forward Rate Dynamics, HJM Drift Condition, HJM (Heath-Jarrow-Morton) Framework, Infinite-Dimensional Perspective
- References: math/spdes, stochastic-differential-equations
- Backlinks: finance/cir-hull-white, finance/libor-market-model

## Entity: fractional-brownian-motion-integration
- Title: Integration with Respect to Fractional Brownian Motion
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Malliavin and Wick-Itô Integrals, Pathwise Young and Rough Path Integration, Integration with Respect to Fractional Brownian Motion, Financial Modeling

## Entity: libor-market-model
- Title: LIBOR Market Model (LMM)
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Lognormal Forward Rates, Measure Change and Drift, LIBOR Market Model (LMM), Calibration and Implementation
- Backlinks: finance/bootstrapping-yield-curve

## Entity: local-time-tanaka
- Title: Local Time and Tanaka Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Visualization: The Occupation Density, Applications, Occupation Time Formula, Dupire Local Volatility, Definition and Intuition: Measuring Residence, Lévy's Theorem and the Reflection Principle, Tanaka's Formula, Optimal Stopping, Local Time and Tanaka's Formula, density of time, Yamada-Watanabe Theorem, Excursion Decomposition, Related Topics, Sticky Brownian Motion, Itô calculus of non-smooth functions
- References: brownian-motion, excursion-theory, math/doob-meyer-decomposition, math/optimal-stopping-markov, stochastic-differential-equations
- Backlinks: math/quadratic-variation

## Entity: levy-ito-decomposition
- Title: Lévy-Itô Decomposition
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Gamma-Variance process, 3. Compensated small jumps, References and Related Topics, Stable process, Theorem (Lévy-Itô), CGMY Model, Poisson random measure is universal, Poisson Random Measure, Large jumps, Merton Jump-Diffusion, Lévy measure, 4. Large jumps, martingale random measure, Normal Inverse Gaussian (NIG), Quadratic variation is discontinuous
- References: finance/levy-processes, finance/variance-gamma, math/doleans-dade-exponential, math/infinitely-divisible-distributions, math/predictable-compensator, merton-jump-diffusion, stochastic-differential-equations
- Backlinks: math/point-processes, math/quadratic-variation, math/sde-numerical-methods, math/subordinators

## Entity: malliavin-calculus
- Title: Malliavin Calculus
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Applications: Greeks in Finance, Introduction, Malliavin Derivative, Malliavin Calculus, Clark-Ocone Formula
- Backlinks: course-math-for-ai, fbm-integration, math/backward-sde, math/quadratic-variation, math/spdes, math/stratonovich-integral, wiener-chaos

## Entity: malliavin-greeks
- Title: Malliavin Greeks
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Advantages, Integration by Parts on Wiener Space, Malliavin Greeks, Delta and Gamma Weights

## Entity: mckean-vlasov-sdes
- Title: McKean-Vlasov SDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Definition, McKean-Vlasov SDEs, Non-linear Fokker-Planck Equation, $N$-Particle System and Propagation of Chaos
- References: partial-differential-equations, stochastic-differential-equations

## Entity: numerical-methods-jump-diffusions
- Title: Numerical Methods for Jump-Diffusions
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Euler-Maruyama with Jumps, Higher-Order Milstein Schemes, Infinite Activity Lévy Noise, Numerical Methods for Jump-Diffusions
- References: central-limit-theorem, stochastic-differential-equations

## Entity: math/sde-numerical-methods
- Title: Numerical Methods for SDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Weak order of convergence, Milstein Scheme, Strang splitting, Physics Simulations, Semi-implicit, Multilevel Monte Carlo, Implicit Methods for Stiff SDEs, Dimension, Milstein scheme, split-step, Applications, Verification, Euler–Maruyama, Lie–Trotter, The Standard [[stochastic-differential-equations|SDE]]
- References: brownian-bridge, diffusion-models, feynman-kac, finance/monte-carlo-method, levy-ito-decomposition, math/cameron-martin-formula, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/stratonovich-integral

## Entity: math/predictable-compensator
- Title: Predictable Compensator and Dual Predictable Projection
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Theorem (Dual predictable projection)., Marked point processes., Compensator of a Point Process, The Predictable Triplet $(B, C, \nu)$, Role in Convergence Theory, Related Articles, Compensator of a Random Measure, Levy processes., drift, Applications, foundation, compensated jump measure, the law of a semimartingale with independent increments is completely determined by its triplet, Predictable Compensator and Dual Predictable Projection, compensator of the jump measure
- References: brownian-motion, finance/levy-processes, finance/semimartingale-models, martingale-clt, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-martingales, math/doob-meyer-decomposition, math/functional-limit-theorems
- Backlinks: levy-ito-decomposition, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/density-processes, math/infinitely-divisible-distributions, math/martingale-problem, math/quadratic-variation, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/quadratic-variation
- Title: Quadratic Variation
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Tanaka formula, quadratic covariation, semimartingale, Discontinuous semimartingales and jump decomposition, The Itô isometry through quadratic variation, The Kunita–Watanabe inequality, Quadratic Variation, Monotonicity, Brownian motion: the canonical example, polarization identity, Path continuity, Covariation and the polarization identity, local time, Realized variance, predictable quadratic variation
- References: levy-ito-decomposition, local-time-tanaka, malliavin-calculus, math/convergence-stochastic-integrals, math/doob-meyer-decomposition, math/predictable-compensator, stochastic-differential-equations
- Backlinks: math/backward-sde, math/stratonovich-integral

## Entity: reflected-sdes-skorokhod
- Title: Reflected SDEs & Skorokhod Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: RSDE Dynamics, Application to American Options, Reflected SDEs & Skorokhod Problem, The Skorokhod Problem
- References: stochastic-control

## Entity: rough-paths
- Title: Rough Path Theory
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Applications in AI: Signature Transforms, 2 ≤ p < 3, p-rough path, Signature Transform, Visualization: The Signature Map, iterated integrals, Compact Representation, Related Topics, Path Networks, Rough Paths and p-variation, Terry Lyons, Stochastic Differential Equations (SDEs), The Fundamental Problem, Rough Path Theory, Signature
- References: brownian-motion, deep-rl-execution, stochastic-differential-equations
- Backlinks: fbm-integration, math/spdes, math/stratonovich-integral, path-dependent-volatility, signature-based-models

## Entity: math/stochastic-calculus/rough-path-signatures
- Title: Rough Path Theory and Signatures
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Quantitative Finance, Invariance to Reparameterization:, What is a Path Signature?, Key Properties:, deterministic, Signature, Signature Transforms, Signatures in Machine Learning, Noise Robustness:, Signature Transform, The Problem, Dimension Reduction:, Related Topics, Rough Path Theory and Signatures, Rough Path Theory
- References: time-series

## Entity: rough-volatility-bergomi
- Title: Rough Volatility: The Rough Bergomi Model
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Rough Volatility: The Rough Bergomi Model, The Rough Bergomi (rBergomi) Model, Computational Challenges, The Volatility Smile

## Entity: semimartingales-on-manifolds
- Title: Semimartingales on Manifolds
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stratonovich Calculus, Eells-Elworthy-Malliavin Construction, Stochastic Development and Parallel Transport, Semimartingales on Manifolds
- References: manifold-learning, math/differential-geometry, stochastic-differential-equations

## Entity: math/skorokhod-topology
- Title: Skorokhod Topology and the Space D
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Definition., Related Articles, predictable characteristics, Identify the limit, Skorokhod Representation Theorem, values, Theorem (Aldous-Rebolledo criterion)., Convergence to Levy processes., Tightness and Relative Compactness, separable complete metric space, The M1 Topology, Applications, Key properties of $(\mathbb{D}[0,T], J_1)$:, completed graph, The J1 Topology (Skorokhod's Main Topology)
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, math/discrete-martingales, math/weak-convergence-prokhorov
- Backlinks: math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/martingale-problem, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/triangular-arrays-processes

## Entity: stable-processes
- Title: Stable Processes and Lévy Flights
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Visualization: Trajectory Comparison, Optimization, $\alpha = 1$, Applications, Super-diffusion, infinite variance, Related Topics, Lévy Flights vs. Brownian Motion, Stable Processes and Lévy Flights, $\alpha = 2$, Foraging Patterns, stable, $\alpha < 2$, Stable Processes, Brownian Motion
- References: extreme-value-theory, finance/levy-processes, fractional-brownian-motion, spectral-graph-theory

## Entity: stochastic-manifolds
- Title: Stochastic Calculus on Manifolds
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Brownian Motion on a [[manifold-learning|Manifold]], half the Laplace-Beltrami operator, Probability Theory, Stratonovich integral, Applications, Biophysics, Itô, Stratonovich vs. Itô, Related Topics, Visualization: Random Walk on a Sphere, Eells-Elworthy-Malliavin (EEM), Stochastic Calculus on Manifolds, Stochastic Differential Equations (SDEs) on Manifolds, stochastic parallel transport, Differential Geometry
- References: manifold-learning, math/differential-geometry, ricci-flow, stochastic-differential-equations

## Entity: stochastic-control
- Title: Stochastic Control
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Hamilton-Jacobi-Bellman Equation, Connections to Reinforcement Learning, Linear-Quadratic-Gaussian (LQG) Control, Riccati differential equation, [[markowitz-mean-variance|Markowitz portfolio theory]], linear in state, policy optimization, The Merton Portfolio Problem (1969), Viscosity solution, Optimal Execution and Market Microstructure, [[numerical-pde-finance|Numerical PDE methods]], adapted control process, Stochastic control, free boundary problem, portfolio optimization
- References: avellaneda-stoikov, feynman-kac, finance/markowitz-mean-variance, finance/optimal-stopping-american, numerical-pde-finance, optimal-execution, reinforcement-learning, stochastic-differential-equations
- Backlinks: convex-analysis, convex-optimization, math/backward-sde, math/ode-stability, mdp, merton-portfolio, optimal-execution, path-integral-control, reflected-sdes-skorokhod, stochastic-games, stochastic-maximum-principle

## Entity: stochastic-control-partial-info
- Title: Stochastic Control with Partial Information
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Information State, Stochastic Control with Partial Information, Separation Principle, Filtering:, Control:, Dual Control
- References: nonlinear-filtering, reinforcement-learning

## Entity: stochastic-differential-equations
- Title: Stochastic Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: part of the solution, Physics, 4. Theory of Solutions, Forward SDE, 3. Itô's Lemma, Itô integral, Weak Solutions, 5. The Martingale Problem (Stroock-Varadhan), Stochastic Differential Equations (SDE), Finance, diffusion coefficient, given, drift coefficient, Generative AI, weak solution
- References: brownian-motion, feynman-kac, geometric-brownian-motion, heston-model, math/martingale-problem, nonlinear-filtering
- Backlinks: activation-functions-math, brownian-bridge, computational-complexity-pac-bayes, conditionally-gaussian-processes, course-math-for-ai, differential-equations, diffusion-models, diffusion-sde-math, equivariant-diffusion-models, ergodic-theory-sgd, feller-processes, feynman-kac, finance/hjm-framework, finance/libor-market-model, finance/short-rate-models, fokker-planck-equation, generative-scenario-models, geometric-brownian-motion, hjm-framework, information-theory-rate-distortion, levy-ito-decomposition, local-time-tanaka, math-reasoning-chains-rl, math/backward-sde, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/interacting-particle-systems, math/martingale-problem, math/martingale-representation, math/ode-stability, math/quadratic-variation, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, math/tightness-semimartingales, mckean-vlasov-sdes, merton-portfolio, mixture-of-experts-routing, neural-operators, neural-sdes-finance, nonequilibrium-stat-mech-diffusion, nonequilibrium-statmech, nonlinear-filtering, numerical-methods-jump-diffusions, ornstein-uhlenbeck, ornstein-uhlenbeck-process, pde-hamilton-jacobi, poisson-jump-sdes, quantization-ptq-information, reasoning-models-prm-orm, regularization-implicit-bias, renormalization-group-dl, rough-paths, semimartingales-on-manifolds, speculative-decoding-medusa, spin-glasses-hopfield, stochastic-calculus-manifolds, stochastic-control, stochastic-games, stochastic-manifolds, stochastic-maximum-principle, stochastic-processes, tokenization-bpe-unigram, wentzell-freidlin, wiener-chaos

## Entity: stochastic-games
- Title: Stochastic Differential Games
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Quantitative Finance, Applications, Stochastic Differential Games, Visualization: Strategy Interaction, Cybersecurity, 1. Nash Equilibrium, Climate Change, The Master Equation and MFGs, Types of Equilibria, Isaacs Equation, Stochastic Differential Equations (SDEs), saddle-point, 2. Zero-Sum Games, Related Topics, Master Equation
- References: mean-field-games, stochastic-control, stochastic-differential-equations

## Entity: fbm-integration
- Title: Stochastic Integration for fBM
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Wick product, Long-Memory Systems, Young Integration, Rough Volatility, 1. The Skorokhod Integral (Malliavin Calculus), Visualization: Integration Regularity, Why It Matters for Finance and AI, Divergence Operator (Skorokhod Integral), not a semimartingale, not, Stochastic Integration for Fractional Brownian Motion, Related Topics, Fractional Volatility, Rough Path Theory, The Challenge
- References: fractional-brownian-motion, malliavin-calculus, rough-paths

## Entity: stochastic-maximum-principle
- Title: Stochastic Maximum Principle
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Hamiltonian and Adjoint Equations, Stochastic Maximum Principle, Maximum Principle, Comparison with HJB
- References: stochastic-control, stochastic-differential-equations

## Entity: math/spdes
- Title: Stochastic Partial Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: asymmetric simple exclusion process, paracontrolled distributions, The Stochastic Heat Equation, The Semilinear SPDE Framework, Hairer's Regularity Structures and Paracontrolled Distributions, KPZ universality class, mild solution, variational methods, Finance, References, Applications and Open Problems, fixed-point arguments, stochastic Burgers equation, Kardar–Parisi–Zhang (KPZ) equation, Walsh integral
- References: feynman-kac, malliavin-calculus, math/backward-sde, math/interacting-particle-systems, partial-differential-equations, rough-paths, spectral-graph-theory, stochastic-differential-equations
- Backlinks: hjm-framework

## Entity: math/stratonovich-integral
- Title: Stratonovich Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: rough paths theory, quadratic covariation, Definition., kinetic energy cost, Evaluation point, Stratonovich Integral, Related Articles, Wong-Zakai, Physics, Rough Paths and the Stratonovich Lift, Malliavin Calculus and Functional Derivatives, Theorem (Wong-Zakai)., Stratonovich SDE, Stratonovich integral, Definition via Midpoint Riemann Sums
- References: brownian-motion, feynman-kac, malliavin-calculus, manifold-learning, math/cameron-martin-formula, math/quadratic-variation, math/sde-numerical-methods, rough-paths, stochastic-differential-equations
- Backlinks: wiener-chaos

## Entity: skorokhod-integral
- Title: The Skorokhod Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Skorokhod Integral, Duality with Malliavin Derivative, Anticipative Calculus, Non-Adapted Integration
- References: clark-ocone-formula

## Entity: math/martingale-problem
- Title: The Stroock-Varadhan Martingale Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: localization principle, Related Articles, Localization., Weak convergence is natural., Examples and Applications, Connection to SDEs, diffusion approximation, Weak existence and uniqueness in law for the [[stochastic-differential-equations|SDE]] are equivalent to well-posedness of the martingale problem., martingale problem, duality, Why Martingale Problems Are Easier, Formulation, Proof Sketch of Uniqueness, Interacting particle systems., No reference probability space needed.
- References: brownian-motion, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, stochastic-differential-equations
- Backlinks: stochastic-differential-equations

## Entity: math/tightness-semimartingales
- Title: Tightness of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Aldous's Condition, Definition., Related Articles, tightness, Diffusion approximations., Rebolledo's Theorem, Applications, Theorem (Rebolledo, 1979)., The UT Condition, Donsker's invariance principle., Control of oscillations:, Bounded initial values:, Numerical schemes., reduces tightness of the process to tightness of its characteristics, C-Tightness
- References: brownian-motion, finance/semimartingale-models, martingale-clt, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov, stochastic-differential-equations
- Backlinks: math/convergence-stochastic-integrals, math/triangular-arrays-processes

## Entity: math/triangular-arrays-processes
- Title: Triangular Arrays and Convergence to Processes with Independent Increments
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Convergence to Brownian motion (functional CLT)., Related Articles, Tightness., Realized volatility, Diffusion convergence:, Convergence to Levy processes., infinitesimal, functional Lindeberg-Feller theorem, Power variations, Connection to Classical Results, Setting: Triangular Arrays of Processes, The Infinitesimal Condition, Infinitesimal condition (Lindeberg):, Uniqueness forces full convergence., Applications to High-Frequency Statistics
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/levy-processes, finance/semimartingale-models, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales
- Backlinks: math/functional-limit-theorems

## Entity: wiener-chaos
- Title: Wiener Chaos and Multiple Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Hypercontractivity, Number-operator approach, Malliavin Derivative, First Wiener Chaos, Ornstein-Uhlenbeck Operator, Integration by parts, Multiple Stochastic Integrals, Applications in Financial Mathematics, Hermite Polynomials and Orthogonality, Product rule, Conclusion, Wiener-Itô Decomposition, Itô Isometry for Multiple Integrals, [[stratonovich-integral|Stratonovich integrals]], Fourth Moment Theorem (Nualart-Peccati)
- References: characteristic-functions, malliavin-calculus, math/information-theory, math/stratonovich-integral, stochastic-differential-equations

## Entity: arch-models
- Title: ARCH Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: ARCH Models, Non-negativity constraints, No leverage effect, conditional, Extensions:, EGARCH, FIGARCH, Heavy tails, Risk Model Backtesting, GARCH(p,q), Tail estimation, Conditional Volatility: ARCH(1) Simulation, Algorithmic Trading, unconditional variance, Practical Applications
- References: ar-models, arma-models, finance/levy-processes, garch-models, mcmc, volatility-forecasting
- Backlinks: ar-models, convolutional-volatility-resolution-clustering, finance/stylized-facts-returns, math/central-limit-theorem, math/ergodic-theorems-birkhoff, math/martingale-clt, math/stochastic-recursive-sequences

## Entity: bmo-martingales
- Title: BMO Martingales
- Category: Stochastic Processes
- Language: en
- Key Concepts: Application: Kazamaki and Novikov, Definition, John-Nirenberg Inequality, BMO Martingales

## Entity: finance/bipower-variation
- Title: Bipower Variation
- Category: Stochastic Processes
- Language: en
- Key Concepts: Jump Test, tripower quarticity, Implementation, Related Articles, Background: Realised Variance and Jumps, HAR-RV-J Model, Bipower Variation, Convergence, Definition, Bipower Variation (BPV), continuous component, Heterogeneous Autoregressive
- References: extreme-value-theory, finance/levy-processes, finance/realized-kernels, garch-models, volatility-forecasting
- Backlinks: finance/rough-volatility, finance/stylized-facts-returns, finance/variance-swaps, jump-robust-volatility

## Entity: brownian-bridge
- Title: Brownian Bridge
- Category: Stochastic Processes
- Language: en
- Key Concepts: Related Constructions, Bridge Between Arbitrary Points, Karhunen-Loève Expansion, [[stochastic-differential-equations|SDE]] Representation and Numerical Singularity, Definition, Sequential testing:, Kolmogorov-Smirnov Statistics, Bridge sampling:, Brownian Meanders and Excursions, Applications in Finance and Numerical Methods, Barrier option pricing:
- References: finance/barrier-asian-options, finance/monte-carlo-method, math/spectral-theory-operators, ornstein-uhlenbeck-process, stochastic-differential-equations
- Backlinks: course-math-for-ai, empirical-processes, math/gaussian-process-sample-paths, math/random-walks, math/sde-numerical-methods

## Entity: brownian-motion
- Title: Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Optimal Execution, Multidimensional Brownian Motion, Continuous paths, Reflection Principle and Hitting Times, Portfolio Simulation, Extensions:, Itô's Lemma, Derivative Pricing, Markov property, Axiomatic Definition, standard Wiener process, Independent increments, Quadratic Variation, Normal increments, Sample Brownian Paths
- References: avellaneda-stoikov, black-scholes, finance/levy-processes, geometric-brownian-motion, mcmc, schrodinger-equation
- Backlinks: avellaneda-stoikov, black-scholes, copula-models, cox-process, dv01, excursion-theory, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/change-of-numeraire, finance/coherent-risk-measures, finance/efficient-market-hypothesis, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/free-boundary-american, finance/girsanov-semimartingales, finance/hjm-framework, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/libor-market-model, finance/quasi-monte-carlo, finance/real-options, finance/realized-kernels, finance/self-similarity-fractality, finance/semimartingale-models, finance/short-rate-models, finance/stable-distributions, fokker-planck-equation, geometric-brownian-motion, innovation-process, law-iterated-logarithm, local-time-tanaka, martingale, math/absolute-continuity-process-measures, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/central-limit-theorem, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-markov-chains, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/ergodic-theorems-birkhoff, math/functional-limit-theorems, math/glivenko-cantelli, math/hausdorff-measure, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/martingale-clt, math/martingale-problem, math/martingale-representation, math/predictable-compensator, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, math/stratonovich-integral, math/tightness-semimartingales, math/triangular-arrays-processes, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, multifractal-processes, neural-odes, nonlinear-filtering, ornstein-uhlenbeck, partial-differential-equations, rough-paths, sle, stochastic-differential-equations, stochastic-processes

## Entity: finance/cir-hull-white
- Title: CIR and Hull-White Interest Rate Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: Cox-Ingersoll-Ross (CIR), Implementation, Feller condition, Hull-White Model, Related Articles, Cox-Ingersoll-Ross Model, Zero-coupon bond price, Hull-White, CIR and Hull-White Interest Rate Models
- References: finance/libor-sofr, finance/nelson-siegel-svensson, finance/swaps, hjm-framework, ornstein-uhlenbeck-process
- Backlinks: finance/bond-options-gaussian, finance/bootstrapping-yield-curve, finance/libor-market-model, finance/libor-sofr, finance/short-rate-models

## Entity: convergence-of-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Processes
- Language: en
- Key Concepts: Convergence of Semimartingales, Skorokhod Space $J_1$ Topology, Tightness and Aldous' Criterion, Convergence of Characteristics
- References: statistical-mechanics

## Entity: cox-process
- Title: Cox Process (Doubly Stochastic)
- Category: Stochastic Processes
- Language: en
- Key Concepts: Cox-Ingersoll-Ross (CIR), affine expression, Vasicek (OU) Intensity, Extensions:, Insurance Catastrophe, Unconditional Distribution, Filtering, Independence assumption, hazard rate, Credit Default Swaps, stochastic randomness at two levels, No memory given intensity, Practical Applications, Marked Cox process, Overview & Background
- References: avellaneda-stoikov, brownian-motion, copula-models, cs01, finance/levy-processes
- Backlinks: avellaneda-stoikov, copula-models, cs01, finance/copula-models, finance/hawkes-process, finance/levy-processes, finance/semimartingale-models, math/point-processes

## Entity: dirichlet-forms
- Title: Dirichlet Forms
- Category: Stochastic Processes
- Language: en
- Key Concepts: SDEs with Bad Drift, Brownian motion, Closed, The Core Concept: Energy and [[shannon-entropy|Entropy]], Fractals and Manifolds, Markov Process, Related Topics, energy, Dirichlet form, Dirichlet Forms, Markovian, Visualization: Energy Minimization, Dirichlet Form, Connection to Operators and Processes, Markov processes
- References: finance/shannon-entropy, measure-theory, operator-semigroups

## Entity: excursion-theory
- Title: Excursion Theory
- Category: Stochastic Processes
- Language: en
- Key Concepts: Applications, Kiyosi Itô, The Excursion Process, Excursion Theory, Fine Structure of Trajectories, Poisson Point Process, Stochastic Integration, Related Topics, excursions, The Intuition: Slicing the Path, Fluctuation Theory, Visualization: Excursion Decomposition, Itô's Excursion Measure ($n$), Itô Measure
- References: brownian-motion, poisson-process
- Backlinks: local-time-tanaka

## Entity: feller-processes
- Title: Feller Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Courrège's Theorem, Feller Property (Invariant Space), Cox-Ingersoll-Ross (CIR), pseudo-differential operator, B. Fractional Kinetics and Anomalous Diffusion, Feller process, Lévy-type operator, functional analysis, Lévy jump kernel $\nu(x, dy)$, 5. Modern Applications, Infinitesimal Generator, Hille-Yosida Theorem, Stopping Times, A. Feller Processes in Quantitative Finance, Heston stochastic volatility
- References: finance/levy-processes, operator-semigroups, spectral-graph-theory, stochastic-differential-equations
- Backlinks: martingale, operator-semigroups

## Entity: finance/fractional-fokker-planck
- Title: Fractional Fokker-Planck Equation
- Category: Stochastic Processes
- Language: en
- Key Concepts: Space-Fractional FPE (Lévy Flights), anomalous diffusion, VaR with memory, Background, Practical Applications in Quant Finance, Parameter Reference, Non-stationarity, fractional generalization, Crypto and emerging markets, Anomalous Diffusion in Markets, Continuous Time Random Walks (CTRW), Tempered Lévy processes, non-Gaussian, Python: Numerical Concept (CTRW Simulation), Super-diffusion
- References: brownian-motion, finance/hurst-exponent, finance/levy-processes, garch-models, geometric-brownian-motion, mcmc, spectral-graph-theory
- Backlinks: finance/hurst-exponent, finance/levy-processes, finance/self-similarity-fractality, partial-differential-equations, pinns

## Entity: freidlin-wentzell-theory
- Title: Freidlin-Wentzell Theory
- Category: Stochastic Processes
- Language: en
- Key Concepts: Small Noise Perturbation, Exit Problem and Kramers' Law, Action Functional (Rate Function), Freidlin-Wentzell Theory
- References: statistical-mechanics

## Entity: gff
- Title: Gaussian Free Field (GFF)
- Category: Stochastic Processes
- Language: en
- Key Concepts: 3. The Link to SLE and Geometry, Random Surfaces, [[sle|Schramm-Loewner Evolution]], 4. Discrete GFF and Algorithms, Roughness, Dirichlet Energy, Markov Random Fields, Effective Field Theory, Spatial Correlation Structures, Related Topics, Statistical Mechanics, Green's Function, 2. Physical Significance, Intuition, Brownian Motion
- References: laplacian, quantum-information-entropy, schwartz-distributions, sle
- Backlinks: sle

## Entity: math/gaussian-process-sample-paths
- Title: Gaussian Process Sample Paths
- Category: Stochastic Processes
- Language: en
- Key Concepts: Proof sketch, reproducing kernel Hilbert space, truncation and rescaling, [[Martingale representation]], Theorem (Dudley, 1967), Definition, smooth, [[cameron-martin-formula]], Sketch of proof, Key insight, Dudley's entropy integral, Hölder Exponents and Fractional Brownian Motion, Connections to Other Processes, Dudley's theorem, Example (Brownian motion)
- References: brownian-bridge, empirical-processes, finance/shannon-entropy, fractional-brownian-motion, math/cameron-martin-formula, math/concentration-inequalities
- Backlinks: math/nonparametric-regression

## Entity: geometric-brownian-motion
- Title: Geometric Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Portfolio simulation, Background, log-normally distributed, Continuous paths, Parameter Reference, The Stochastic Differential Equation, Constant volatility, Correlation structure, Simulated Path Fan, Practical Applications, Gaussian log-returns, Risk-Neutral Pricing, No mean reversion, Related Topics, Key Statistical Properties
- References: black-scholes, brownian-motion, finance/levy-processes, heston-model, stochastic-differential-equations, volatility-forecasting
- Backlinks: black-scholes, brownian-motion, differential-equations, finance/bachelier-formula, finance/black-scholes-derivations, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hurst-exponent, finance/levy-esscher-continuous, finance/realized-kernels, finance/semimartingale-models, finance/stefan-problem-american, finance/volatility-surface, fokker-planck-equation, futures-hedging, greeks-options, math/absolute-continuity-process-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/functional-limit-theorems, math/martingale-problem, math/sequential-hypothesis-testing, merton-portfolio, risk-neutral-valuation, stochastic-differential-equations, stochastic-processes

## Entity: finance/hawkes-process
- Title: Hawkes Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Background, Parameter Reference, excitation kernel, Stationarity requirement, Exponential kernel assumption, Neural Hawkes, baseline intensity, Compensator and Likelihood, Mathematical Definition, Hawkes Process, Order book dynamics, News impact, Python: Simulating a Hawkes Process, Credit default cascades, Event Intensity Over Time
- References: cox-process, finance/monte-carlo-method, garch-models, geometric-brownian-motion
- Backlinks: finance/order-flow-imbalance, finance/semimartingale-models, lob-propagators, market-microstructure, multivariate-hawkes, queue-reactive-models

## Entity: finance/hurst-exponent
- Title: Hurst Exponent
- Category: Stochastic Processes
- Language: en
- Key Concepts: Variance Ratio Test, Market efficiency testing, Background, Parameter Reference, Hurst Exponent (H), $0 < H < 0.5$, Anti-persistent (Mean-Reverting) Series, Non-stationarity, Fractal analysis, Multifractal markets, Market Regimes Visualization, Estimation bias, Mathematical Foundation: R/S Analysis, $H = 0.5$, Multifractal Detrended Fluctuation Analysis (MFDFA)
- References: finance/fractional-fokker-planck, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, geometric-brownian-motion, hidden-markov-models
- Backlinks: arima-models, finance/fisher-transform, finance/fractional-fokker-planck, finance/hilbert-huang-transform, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, finance/self-similarity-fractality, finance/stable-distributions, finance/stylized-facts-returns, fractional-cointegration

## Entity: finance/hyperbolic-distributions
- Title: Hyperbolic Distributions and Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: semi-heavy tails, all moments are finite, Hyperbolic, VaR and CVaR, Generalized hyperbolic distributions, Related Articles, Definition, Pricing model calibration, Normal Inverse Gaussian (NIG), Normal, golden middle, Variance Gamma, infinitely divisible, hyperbolic distribution, "hand-crafted" compromise
- References: brownian-motion, cornish-fisher-cvar, finance/fft, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/levy-processes
- Title: Lévy Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Diffusion, Correlation structure, Independent increments, Normal Inverse Gaussian (NIG), Time-inhomogeneity, Key Examples, Martingale condition, Infinite divisibility, CGMY / KoBoL Process, Practical Applications, Stationary increments, Wiener Process (Brownian Motion), Poisson Process, Lévy Processes, Compound Poisson Process
- References: cox-process, finance/fractional-fokker-planck, finance/monte-carlo-method, heston-model, ornstein-uhlenbeck-process
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, brownian-motion, characteristic-functions, clt, cornish-fisher-cvar, cox-process, feller-processes, finance/bipower-variation, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/merton-jump-diffusion, finance/variance-gamma, finance/zeta-field, geometric-brownian-motion, kelly-criterion, levy-ito-decomposition, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/martingale-representation, math/predictable-compensator, math/skorokhod-topology, math/stochastic-recursive-sequences, math/subordinators, math/triangular-arrays-processes, math/wiener-hopf-factorization, multifractal-processes, numeraire-invariant-hedging, occupation-measures-local-times, ornstein-uhlenbeck-process, stable-processes, stochastic-processes

## Entity: math/markov-chain-mixing
- Title: Markov Chain Mixing Times
- Category: Stochastic Processes
- Language: en
- Key Concepts: Cheeger's inequality, Spectral Gap and Convergence Rate, Reversibility:, Spectral gap, detailed balance condition, Total Variation Distance and Stationarity, mixing time at tolerance $\varepsilon$, Card Shuffling: Diaconis' Classical Result, total variation distance, $n$-step total variation distance to stationarity, Summary of Key Results, Upper Bounds and Hitting Times, Cheeger constant, Mixing Time Definition, Coupon Collector Example
- References: central-limit-theorem, math/concentration-inequalities, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/renewal-theory, math/spectral-theory-operators
- Backlinks: math/coupling-methods, math/geometric-ergodicity, math/interacting-particle-systems, math/spectral-theory-operators, queuing-theory, random-walks-groups, time-series

## Entity: finance/merton-jump-diffusion
- Title: Merton Jump-Diffusion Model
- Category: Stochastic Processes
- Language: en
- Key Concepts: Implementation, Model, Option Pricing Formula, Related Articles, Merton Jump-Diffusion Model, Merton (1976) Jump-Diffusion model
- References: black-scholes, finance/levy-processes, finance/variance-gamma, heston-model

## Entity: multifractal-processes
- Title: Multifractal Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Fluid Turbulence, Related Topics, Multiplicative Cascade, Network Traffic, Brownian motion, Multifractal Cascade Models, Applications in Finance and Physics, Financial Markets (MSMR), Visualization: Monofractal vs. Multifractal, Multifractal Processes, Multifractal Spectrum ($f(\alpha)$), The Limitation of Monofractals, Multifractal Process, Multifractal Random Walk
- References: brownian-motion, finance/levy-processes, fractional-brownian-motion

## Entity: occupation-measures-local-times
- Title: Occupation Measures and Local Times of Lévy Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Fourier Analytic Conditions, Occupation Measure, Tanaka's Formula and Discontinuities, Occupation Measures and Local Times of Lévy Processes
- References: finance/levy-processes, fourier-transform

## Entity: ornstein-uhlenbeck
- Title: Ornstein-Uhlenbeck Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Applications, Related Topics, 2. Stationarity and Normality, 3. Autocovariance, $W_t$, AI (Diffusion Models), Ornstein-Uhlenbeck Process, The [[stochastic-differential-equations|SDE]] Definition, $\theta > 0$ (Rate of mean reversion), $\sigma > 0$ (Volatility), Physics, 1. Mean Reversion, stationary Gaussian distribution, mean-reverting, Finance (Vasicek Model)
- References: brownian-motion, math/stationary-wide-spectral, stochastic-differential-equations
- Backlinks: course-math-for-ai, stochastic-processes

## Entity: ornstein-uhlenbeck-process
- Title: Ornstein-Uhlenbeck Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: MLE Parameter Estimation, Mean-Reverting Property, stationary (invariant) distribution, Stationary Distribution, Exact Solution via Integrating Factor, Background and History, Negative values, Ornstein-Uhlenbeck Process, Connection to Vasicek Interest Rate Model, Related Topics, mean-reverting, Multidimensional OU, Autocorrelation Function, Vasicek (1977), Ornstein-Uhlenbeck (OU) process
- References: black-scholes, finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, heston-model, hidden-markov-models, mcmc, pairs-trading, stochastic-differential-equations
- Backlinks: brownian-bridge, diffusion-models, fastest-mean-reversion, finance/cir-hull-white, finance/levy-processes, finance/longstaff-schwartz, finance/particle-filter, fokker-planck-equation, pairs-trading, pca-statarb

## Entity: math/point-processes
- Title: Point Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: point process, Queueing theory, Palm Distributions and Conditioning, stationary and ergodic, counting function, baseline intensity, Independent increments, moment measure, Palm distribution, Applications, Papangelou conditional intensity, Daley & Vere-Jones, Campbell's theorem, Void probabilities, Poisson marginals
- References: cox-process, levy-ito-decomposition, math/branching-processes, math/kolmogorov-equations-ctmc, math/renewal-theory
- Backlinks: math/survival-analysis, poisson-process

## Entity: poisson-process
- Title: Poisson Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: 3. Superposition and Thinning, Physics, memoryless, Definition, 2. Waiting Times (Arrival Times), Gamma Distribution, Visualization: Arrivals over Time, counting random events, Applications, Poisson Process, Finance, Exponential Distribution, Related Topics, Poisson Processes, Key Properties
- References: distributions-zoo, math/point-processes, math/renewal-theory
- Backlinks: course-math-for-ai, distributions-zoo, excursion-theory, exponential-distribution, queuing-theory, stochastic-processes

## Entity: math/random-walks
- Title: Random Walks
- Category: Stochastic Processes
- Language: en
- Key Concepts: transient, Wald's Identity, Queuing theory, Wiener–Hopf factorization, Lévy's arc-sine laws, General Random Walks and Cramér Condition, functional central limit theorem, ballot problem, Simple Symmetric Random Walk, Reflection Principle and Ballot Problem, Biophysics, reflection principle, Donsker's Invariance Principle, Recurrence and Transience (Pólya's Theorem), Donsker's Theorem and Functional Limit Theory
- References: brownian-bridge, central-limit-theorem, math/discrete-martingales, math/functional-limit-theorems, math/large-deviations-cramer, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/rough-volatility
- Title: Rough Volatility and Fractional Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Implementation, Rough Volatility, Related Articles, Empirical finding, Implied vol skew, Rough Bergomi Model (Bayer, Friz, Gatheral 2016), Fractional Brownian Motion, Rough Volatility and Fractional Brownian Motion
- References: finance/bipower-variation, finance/sabr-model, finance/variance-gamma, heston-model
- Backlinks: deep-hedging, finance/dupire-local-vol, garch-models, neural-sdes-finance, volatility-arbitrage, volatility-smile

## Entity: finance/self-similarity-fractality
- Title: Self-Similarity and Fractality of Financial Series
- Category: Stochastic Processes
- Language: en
- Key Concepts: Self-similar processes, Definition., Hurst exponent, pure, Related Articles, Empirical $H$ in finance:, self-similar with exponent $H \in (0, 1)$, Fractional Brownian motion (fBm), technical tool, Log-absolute returns, Trading volumes, arbitrage exists, Self-Similarity and Fractality of Financial Series, Regularization, Wavelet methods
- References: brownian-motion, finance/bs-market-self-financing, finance/fractional-fokker-planck, finance/ftap-first-fundamental-theorem, finance/hurst-exponent, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns, math/stationary-wide-spectral

## Entity: small-ball-probabilities
- Title: Small Ball Probabilities for Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Connection to [[shannon-entropy|Entropy]] and Spectra, Small Ball Probabilities for Stochastic Processes, Asymptotic Definition, Applications
- References: finance/shannon-entropy, quantization

## Entity: finance/stable-distributions
- Title: Stable Distributions and α-Stable Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: EVT, Definition., first mathematically rigorous way, Related Articles, Generalized CLT (Lévy-Khintchine)., conceptual starting point, stable distribution with the same $\alpha$, Stable Distributions and α-Stable Processes, Characteristic function, The parameter $\alpha$ and tails, Connection to risk management practice, infinite variance, No unique EMM., heavy tails, Truncated stable
- References: brownian-motion, cornish-fisher-cvar, extreme-value-theory, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/self-similarity-fractality, finance/stylized-facts-returns
- Backlinks: finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/stylized-facts-returns, math/central-limit-theorem, math/infinitely-divisible-distributions, math/local-limit-theorems, math/lundberg-cramer-ruin, math/triangular-arrays-processes

## Entity: stochastic-processes
- Title: Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Markov Processes, [[ornstein-uhlenbeck]], Physics, Classification, Continuous state space, [[stochastic-calculus]], Stationary Processes, Applications, Discrete state space, [[poisson-process]], Biology, Lévy Processes, Finance, [[brownian-motion]] (Wiener Process), Related Topics
- References: brownian-motion, ergodic-theory, feynman-kac, finance/levy-processes, geometric-brownian-motion, markov-chains, math/discrete-markov-chains, math/discrete-martingales, math/kolmogorov-equations-ctmc, math/martingale-representation, math/stationary-wide-spectral, ornstein-uhlenbeck, poisson-process, random-walks, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: kuramoto-model, law-iterated-logarithm

## Entity: math/subordinators
- Title: Subordinators
- Category: Stochastic Processes
- Language: en
- Key Concepts: Stable subordinator., Subordinators, Applications: Finance and Stochastic Volatility, Compound Poisson process., Related Articles, Lévy measure, subordinator, Key Examples, renewal process, time-change, Time-deformed models, $\alpha$-stable subordinator, not, stochastic time clocks, Connection to Renewal Theory
- References: finance/levy-processes, fractional-brownian-motion, levy-ito-decomposition, math/branching-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/variance-gamma
- Title: Variance Gamma Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Option Pricing via FFT, Characteristic function, Variance Gamma (VG), Related Articles, Variance Gamma Process, Definition, Parameter Effects
- References: finance/levy-processes, heston-model, merton-jump-diffusion
- Backlinks: finance/barrier-asian-options, finance/merton-jump-diffusion, finance/rough-volatility, levy-ito-decomposition, svi-model

## Entity: volatility-forecasting
- Title: Volatility Forecasting (GARCH, HAR)
- Category: Stochastic Processes
- Language: en
- Key Concepts: Background, Volatility targeting, EGARCH, Parameter Reference, Generalized ARCH(1,1), GARCH Extensions, Volatility forecasting, Asymmetry (leverage effect), Roughness, VaR/ES computation, HAR-RV Model, Practical Applications, Student-t GARCH, ML forecasting, HAR-CJ
- References: finance/monte-carlo-method, finance/realized-kernels, finance/value-at-risk, garch-models, heston-model, mcmc, transformer-architecture
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, arma-models, convolutional-volatility-resolution-clustering, cornish-fisher-cvar, finance/bipower-variation, finance/multivariate-hmm, finance/realized-kernels, finance/sabr-model, finance/singular-spectral-analysis, finance/variance-swaps, finance/wavelet-transform, geometric-brownian-motion, kalman-filter, temporal-fusion-transformer, volatility-modulated-spectral-surface

## Entity: finance/zeta-field
- Title: Zeta Field
- Category: Stochastic Processes
- Language: en
- Key Concepts: Empirical testing, Level repulsion, Background, GUE spacing, Spectral risk measure design, Cross-disciplinary research, Euler product, Long-memory modeling, Riemann Hypothesis, Connection to RMT, Hilbert-Pólya conjecture, Riemann explicit formula, Zeros, level repulsion, Zeta Regularization
- References: finance/levy-processes, finance/random-matrix-theory, finance/shannon-entropy, finance/spectral-analysis, math/spectral-theory-operators, quantum-entanglement

## Entity: financial-entropy
- Title: Entropy and Market Complexity
- Category: Time Series
- Language: en
- Key Concepts: Transfer Entropy, [[shannon-entropy|Entropy]] in Finance: Lempel-Ziv and Market Complexity, Anomalies, predictability, LZ is High, variance, market regime indicator, Related Topics, 1. Shannon [[shannon-entropy|Entropy]] as Predictability, Granger Causality, Lempel-Ziv complexity, structure, 2. Lempel-Ziv Complexity (LZ), 3. Approximate Entropy (ApEn) and Sample Entropy, Shannon [[shannon-entropy|Entropy]]
- References: causal-inference, finance/lempel-ziv-complexity, finance/shannon-entropy, nlp-financial-analysis
- Backlinks: entropy-pooling

## Entity: fractional-cointegration
- Title: Fractional Cointegration
- Category: Time Series
- Language: en
- Key Concepts: half-life of mean reversion, Related Topics, Fractional Cointegration Mechanism, Fractional Cointegration, Visualization: Decay Speeds, long-range dependence, Long Memory, ARFIMA Models, Trading Application, The Long Memory Problem, ARFIMA, fractionally cointegrated
- References: finance/hurst-exponent, fractional-brownian-motion, pairs-trading

## Entity: garch-models
- Title: GARCH and ARCH Models
- Category: Time Series
- Language: en
- Key Concepts: 1. ARCH Model (Engle, 1982), 4. Estimation and AI Integration, 3. Asymmetric GARCH (GJR-GARCH), The Persistence, Related Topics, Insight, 2. GARCH Model (Bollerslev, 1986), Visualization: Volatility Spikes, Neural GARCH, ARCH, Maximum Likelihood (MLE), GARCH, Leverage Effect, Deep GARCH, ARCH and GARCH Models: Volatility Clustering
- References: finance/rough-volatility, mle, time-series
- Backlinks: arch-models, convolutional-volatility-resolution-clustering, finance/bipower-variation, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hidden-markov-models, finance/realized-kernels, finance/stylized-facts-returns, finance/value-at-risk, finance/variance-swaps-vix, generative-scenario-models, math/ergodic-theorems-birkhoff, math/martingale-clt, math/stochastic-recursive-sequences, temporal-fusion-transformer, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: hmm-particle-filters
- Title: Hidden Markov Models & Particle Filters
- Category: Time Series
- Language: en
- Key Concepts: Update (Weight), Filtering, latent, Hidden Markov Models (HMM), Dynamic Spread Quoting, Transition Matrix, Predict (Mutate), Viterbi algorithm, Application in HFT and StatArb, Emission Probability, Kalman Filter, Related Topics, Visualization: Particle Survival, Resample (Darwinian Selection), Hidden Markov Models & Particle Filters
- References: mcmc, regime-switching-factors
- Backlinks: hmm, lead-lag-analysis, lsv-model, mcmc, path-dependent-volatility, total-probability-variance, vpin

## Entity: jump-robust-volatility
- Title: Jump-Robust Realized Variance
- Category: Time Series
- Language: en
- Key Concepts: Related Topics, The Problem with Standard RV, 1. Bipower Variation (BV), MinRV, Visualization: Volatility vs. Jumps, Jump-Robust Estimators, 2. MinRV and MedRV (Andersen et al., 2012), volatility risk premium, Price Jumps, Jump-Robust Realized Variance (MinRV and MedRV), Why It Matters: Identifying Jumps, Realized Variance (RV), MedRV
- References: finance/bipower-variation, finance/realized-kernels, merton-jump-diffusion

## Entity: morse-theory
- Title: Morse Theory
- Category: Topology
- Language: en
- Key Concepts: non-degenerate, Index 1, index, Index 0, Morse function, Gradient Flows, critical points, CW complex, Related Topics, The Morse Index, Morse Theory, Mode Connectivity, Index $n$, Morse Functions, topology of a [[manifold-learning|manifold]]
- References: manifold-learning, math/algebraic-topology, math/differential-geometry, math/spectral-theory-operators, training-dynamics

## Entity: persistent-homology
- Title: Persistent Homology
- Category: Topology
- Language: en
- Key Concepts: Barcodes and Persistence Diagrams, Topology of Data, Persistent Homology, Stability Theorem, Filtration and Homology

## Entity: crypto-quant-trading-and-amm-curves
- Title: Crypto Quant Trading, AMM Curves & MEV
- Category: Trading Theory
- Language: en
- Key Concepts: See Also, Crypto Quant Trading, AMM Curves & MEV
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: cryptographic-zero-knowledge-in-finance

## Entity: cryptographic-zero-knowledge-in-finance
- Title: Cryptographic Zero-Knowledge (ZK) in Institutional Finance
- Category: Trading Theory
- Language: en
- Key Concepts: See Also, Cryptographic Zero-Knowledge (ZK) in Institutional Finance
- References: course-quant-trading, crypto-quant-trading-and-amm-curves, hft-order-types-and-dark-pools

## Entity: high-frequency-stat-arb-lead-lag
- Title: High-Frequency Lead-Lag StatArb
- Category: Trading Theory
- Language: en
- Key Concepts: See Also, High-Frequency Lead-Lag StatArb
- References: course-quant-trading, high-frequency-trading-and-orderbook, statistical-arbitrage-and-pairs-trading

## Entity: quant-brainteasers-handbook
- Title: Quant Brainteasers Python Handbook
- Category: Trading Theory
- Language: en
- Key Concepts: See Also, 1. Dice Re-roll Game Simulation, Quant Brainteasers Python Handbook
- References: course-quant-trading, optimal-stopping-and-kelly, quant-market-making-mechanics
- Backlinks: optimal-stopping-and-kelly, quant-firm-interview-math-brainteasers, quant-interview-cheat-sheet, quant-trading-interview-roadmap, statistical-arbitrage-and-pairs-trading

## Entity: statistical-arbitrage-and-pairs-trading
- Title: Statistical Arbitrage & Pairs Trading
- Category: Trading Theory
- Language: en
- Key Concepts: See Also, 1. Cointegration vs Correlation, Cointegration:, Correlation:, 2. Ornstein-Uhlenbeck Process, Statistical Arbitrage & Pairs Trading, Tests:
- References: course-quant-trading, quant-brainteasers-handbook, quant-risk-management-var-cvar
- Backlinks: factor-investing-and-fama-french, high-frequency-stat-arb-lead-lag, machine-learning-for-quant-trading, quant-risk-management-var-cvar

## Entity: stat-tests-for-trading-strategies
- Title: Strategy Validation & Deflated Sharpe Ratio
- Category: Trading Theory
- Language: en
- Key Concepts: See Also, Strategy Validation & Deflated Sharpe Ratio
- References: course-quant-trading, machine-learning-for-quant-trading, quant-risk-management-var-cvar
- Backlinks: systematic-alpha-research-and-backtesting

## Entity: math/foundations/group-theory-symmetries
- Title: Group Theory and Symmetries in Deep Learning
- Category: Unknown
- Language: en
- Key Concepts: Geometric Deep Learning, Translation group, 1. Invariance, Group Theory and Symmetries in Deep Learning, Special Euclidean group, Closure:, Sample Efficiency, Steerable CNNs, Identity:, physically correct guarantees, mathematically embedding equivariance into the architecture, Inverse:, Important Lie Groups (Continuous Groups) in AI:, Associativity:, Inductive Bias
- Backlinks: ai-theory/spatial/equivariant-gnn

## Entity: math/analysis-geometry/information-geometry
- Title: Information Geometry
- Category: Unknown
- Language: en
- Key Concepts: e-connection ($\alpha=1$):, Related Topics, Information Bottleneck:, [[llm]] Latent Spaces:, K-FAC, Statistical [[manifold-learning|Manifold]] and Fisher Metric, dual connections, m-connection ($\alpha=-1$):, Cramér-Rao Bound:, Applications in Deep Learning, Dual Connections and $\alpha$-Geometry, Natural [[convex-optimization|Gradient Descent]] (NGD), Information Geometry, TRPO/PPO, Fisher Information Matrix
- References: convex-optimization, fisher-information, llm, manifold-learning, optimal-transport, transformer-architecture
- Backlinks: convex-analysis, course-math-for-ai, fisher-information, language-models/safety/rlhf-dpo, manifold-learning, math/bayesian-asymptotics, math/cramer-rao-bound, math/differential-geometry, math/minimax-estimation, math/neyman-pearson, maximum-entropy, multivariable-calculus

## Entity: geometric-mechanics-lie-groups
- Title: Geometric Mechanics: Control on Lie Groups
- Category: ai-physics
- Language: en
- Key Concepts: Symplectic Geometry and Hamiltonian Mechanics, Conclusion, Geometric Mechanics: Control on Lie Groups, Differential and Information Geometry
- References: convex-optimization, manifold-learning

## Entity: neural-operators-fno
- Title: Neural Operators: FNO vs. DeepONet
- Category: ai-physics
- Language: en
- Key Concepts: Conclusion, Differential and Information Geometry, Random Matrix Theory and Spectral Dynamics, Neural Operators: FNO vs. DeepONet
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: pinns-convergence
- Title: Physics-Informed Neural Networks (PINNs)
- Category: ai-physics
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Physics-Informed Neural Networks (PINNs), Differential and Information Geometry, Conclusion
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: symplectic-hamiltonian-nn
- Title: Symplectic Geometry & Hamiltonian Neural Networks
- Category: ai-physics
- Language: en
- Key Concepts: Symplectic Geometry and Hamiltonian Mechanics, Symplectic Geometry & Hamiltonian Neural Networks, Differential and Information Geometry, Conclusion
- References: convex-optimization, manifold-learning

## Entity: mechanistic-interpretability-sae
- Title: AI Safety: Mechanistic Interpretability of SAEs
- Category: ai-theory
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Random Matrix Theory and Spectral Dynamics, AI Safety: Mechanistic Interpretability of SAEs
- References: attention-mechanisms, math/spectral-theory-operators

## Entity: activation-functions-math
- Title: Activation Functions: SwiGLU & GeLU
- Category: ai-theory
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Stochastic Dynamics and Statistical Mechanics, Activation Functions: SwiGLU & GeLU
- References: attention-mechanisms, stochastic-differential-equations

## Entity: ergodic-theory-sgd
- Title: Ergodic Theory of Stochastic Gradient Descent
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Ergodic Theory of Stochastic [[convex-optimization|Gradient Descent]], Differential and Information Geometry, Stochastic Dynamics and Statistical Mechanics
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: gnn-weisfeiler-lehman
- Title: Graph Neural Networks: Weisfeiler-Lehman
- Category: ai-theory
- Language: en
- Key Concepts: Graph Neural Networks: Weisfeiler-Lehman, Algebraic Topology, Sheaves, and Category Theory, Random Matrix Theory and Spectral Dynamics, Conclusion
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: higher-category-theory-ai
- Title: Higher Category Theory: N-categories in AI
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Algebraic Topology, Sheaves, and Category Theory, Higher Category Theory: N-categories in AI
- References: spectral-graph-theory

## Entity: multimodal-alignment-clip
- Title: Multimodal Alignment: CLIP Math
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Multimodal Alignment: CLIP Math, Optimal Transport and Wasserstein Metrics, Differential and Information Geometry
- References: convex-optimization, manifold-learning

## Entity: nonequilibrium-stat-mech-diffusion
- Title: Non-equilibrium Statistical Mechanics of Diffusion Models
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Stochastic Dynamics and Statistical Mechanics, Non-equilibrium Statistical Mechanics of Diffusion Models
- References: stochastic-differential-equations

## Entity: normalization-layers-math
- Title: Normalization Layers: BatchNorm vs RMSNorm
- Category: ai-theory
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Normalization Layers: BatchNorm vs RMSNorm, Differential and Information Geometry, Conclusion
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: regularization-implicit-bias
- Title: Regularization: Implicit Bias of GD
- Category: ai-theory
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Conclusion, Regularization: Implicit Bias of GD, Differential and Information Geometry
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: renormalization-group-dl
- Title: Renormalization Group in Deep Learning
- Category: ai-theory
- Language: en
- Key Concepts: Quantum Field Theory and Renormalization Group, Conclusion, Stochastic Dynamics and Statistical Mechanics, Renormalization Group in Deep Learning
- References: stochastic-differential-equations

## Entity: spin-glasses-hopfield
- Title: Spin Glasses & Hopfield Networks
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Spin Glasses & Hopfield Networks, Random Matrix Theory and Spectral Dynamics, Stochastic Dynamics and Statistical Mechanics
- References: math/spectral-theory-operators, stochastic-differential-equations

## Entity: geometry-loss-landscapes
- Title: The Geometry of Deep Learning Loss Landscapes
- Category: ai-theory
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, The Geometry of Deep Learning Loss Landscapes, Differential and Information Geometry, Conclusion
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: math-reasoning-chains-rl
- Title: The Mathematics of Reasoning Chains: RL Reward Modeling
- Category: ai-theory
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, The Mathematics of Reasoning Chains: RL Reward Modeling, Stochastic Dynamics and Statistical Mechanics
- References: attention-mechanisms, stochastic-differential-equations

## Entity: topos-neural-networks
- Title: Topos Theory for Neural Networks
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Algebraic Topology, Sheaves, and Category Theory, Topos Theory for Neural Networks
- References: spectral-graph-theory

## Entity: vision-transformers-scaling
- Title: Vision Transformers: Scaling Laws of ViT
- Category: ai-theory
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Vision Transformers: Scaling Laws of ViT, Quantum Field Theory and Renormalization Group
- References: attention-mechanisms

## Entity: weight-initialization-signal
- Title: Weight Initialization: Signal Propagation
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Weight Initialization: Signal Propagation, Quantum Field Theory and Renormalization Group
- References: math/spectral-theory-operators

## Entity: nonlinear-dim-reduction
- Title: Non-linear Dimensionality Reduction
- Category: ai-theory/algorithms
- Language: en
- Key Concepts: Non-linear Dimensionality Reduction

## Entity: jepa
- Title: JEPA
- Category: ai-theory/architectures
- Language: en
- Key Concepts: JEPA

## Entity: ttt-layers
- Title: TTT-Layers
- Category: ai-theory/architectures
- Language: en
- Key Concepts: TTT-Layers
- References: convex-optimization

## Entity: vision-mamba
- Title: Vision Mamba
- Category: ai-theory/architectures
- Language: en
- Key Concepts: Vision Mamba

## Entity: grokking
- Title: Grokking Phenomenon
- Category: ai-theory/interpretability
- Language: en
- Key Concepts: Grokking Phenomenon

## Entity: interior-point
- Title: Interior Point Methods
- Category: ai-theory/optimization
- Language: en
- Key Concepts: Interior Point Methods

## Entity: ellipsoidal-uncertainty
- Title: Robust Ellipsoidal Sets
- Category: ai-theory/optimization
- Language: en
- Key Concepts: Robust Ellipsoidal Sets
- References: robust-optimization

## Entity: robust-optimization
- Title: Robust Optimization
- Category: ai-theory/optimization
- Language: en
- Key Concepts: Robust Optimization
- Backlinks: ellipsoidal-uncertainty

## Entity: socp
- Title: Second-Order Cone Programming
- Category: ai-theory/optimization
- Language: en
- Key Concepts: Second-Order Cone Programming

## Entity: semidefinite-programming
- Title: Semidefinite Programming
- Category: ai-theory/optimization
- Language: en
- Key Concepts: Semidefinite Programming

## Entity: curiosity-driven-rl
- Title: Curiosity-driven Exploration
- Category: ai-theory/rl
- Language: en
- Key Concepts: Curiosity-driven Exploration

## Entity: decision-sdes
- Title: Decision SDEs
- Category: ai-theory/rl
- Language: en
- Key Concepts: Decision SDEs

## Entity: decision-transformers
- Title: Decision Transformers
- Category: ai-theory/rl
- Language: en
- Key Concepts: Decision Transformers
- References: transformer-architecture

## Entity: dreamerv3
- Title: DreamerV3
- Category: ai-theory/rl
- Language: en
- Key Concepts: DreamerV3

## Entity: maximum-entropy-irl
- Title: Maximum Entropy IRL
- Category: ai-theory/rl
- Language: en
- Key Concepts: Maximum [[shannon-entropy|Entropy]] IRL
- References: finance/shannon-entropy

## Entity: nash-dqn
- Title: Nash-DQN
- Category: ai-theory/rl
- Language: en
- Key Concepts: Nash-DQN

## Entity: td3
- Title: TD3
- Category: ai-theory/rl
- Language: en
- Key Concepts: TD3

## Entity: ntk
- Title: Neural Tangent Kernel
- Category: ai-theory/theory
- Language: en
- Key Concepts: Neural Tangent Kernel
- References: ai-theory/neural-tangent-kernel, convex-optimization

## Entity: computational-complexity-pac-bayes
- Title: Computational Complexity: PAC-Bayes Bounds
- Category: cs
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Conclusion, Optimal Transport and Wasserstein Metrics, Computational Complexity: PAC-Bayes Bounds
- References: stochastic-differential-equations

## Entity: distributed-training-3d
- Title: Distributed Training: 3D Parallelism Math
- Category: cs
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Distributed Training: 3D Parallelism Math, Optimal Transport and Wasserstein Metrics, Conclusion
- References: attention-mechanisms

## Entity: information-theory-rate-distortion
- Title: Information Theory: Rate-Distortion & VAEs
- Category: cs
- Language: en
- Key Concepts: Information Theory: Rate-Distortion & VAEs, Differential and Information Geometry, Stochastic Dynamics and Statistical Mechanics, Conclusion
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: quantum-computing-vqe
- Title: Quantum Computing: VQE Math
- Category: cs
- Language: en
- Key Concepts: Symplectic Geometry and Hamiltonian Mechanics, Conclusion, Random Matrix Theory and Spectral Dynamics, Quantum Computing: VQE Math
- References: math/spectral-theory-operators
- Backlinks: research/quantum-risk-management

## Entity: quantum-machine-learning-kernels
- Title: Quantum Machine Learning: Quantum Kernels
- Category: cs
- Language: en
- Key Concepts: Symplectic Geometry and Hamiltonian Mechanics, Quantum Machine Learning: Quantum Kernels, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion
- References: attention-mechanisms
- Backlinks: research/quantum-risk-management

## Entity: lattice-crypto
- Title: Lattice-based Cryptography
- Category: cs/crypto
- Language: en
- Key Concepts: Lattice-based Cryptography

## Entity: lwe-crypto
- Title: Learning With Errors (LWE)
- Category: cs/crypto
- Language: en
- Key Concepts: Learning With Errors (LWE)

## Entity: zk-proofs
- Title: Zero-Knowledge Proofs
- Category: cs/crypto
- Language: en
- Key Concepts: Zero-Knowledge Proofs

## Entity: zk-starks
- Title: zk-STARKs
- Category: cs/crypto
- Language: en
- Key Concepts: zk-STARKs

## Entity: pbft
- Title: Byzantine Agreement (PBFT)
- Category: cs/systems
- Language: en
- Key Concepts: Byzantine Agreement (PBFT)
- Backlinks: pbft-consensus

## Entity: digital-filters
- Title: Digital Filter Design
- Category: cs/systems
- Language: en
- Key Concepts: Digital Filter Design

## Entity: iir-filters
- Title: IIR Filter Design
- Category: cs/systems
- Language: en
- Key Concepts: IIR Filter Design

## Entity: pbft-consensus
- Title: PBFT Consensus
- Category: cs/systems
- Language: en
- Key Concepts: PBFT Consensus
- References: pbft

## Entity: convex-hull-chan
- Title: Chan's Algorithm
- Category: cs/theory
- Language: en
- Key Concepts: Chan's Algorithm
- References: computational-geometry

## Entity: computational-geometry
- Title: Computational Geometry
- Category: cs/theory
- Language: en
- Key Concepts: Computational Geometry
- Backlinks: convex-hull-chan

## Entity: cook-levin
- Title: Cook-Levin Theorem
- Category: cs/theory
- Language: en
- Key Concepts: Cook-Levin Theorem

## Entity: error-correcting-codes
- Title: Error Correcting Codes
- Category: cs/theory
- Language: en
- Key Concepts: Error Correcting Codes

## Entity: sketching-hyperloglog
- Title: HyperLogLog & Sketching
- Category: cs/theory
- Language: en
- Key Concepts: HyperLogLog & Sketching

## Entity: ldpc-codes
- Title: LDPC Codes
- Category: cs/theory
- Language: en
- Key Concepts: LDPC Codes

## Entity: mac-bc-channels
- Title: MAC and BC Channels
- Category: cs/theory
- Language: en
- Key Concepts: MAC and BC Channels

## Entity: max-cut-goemans
- Title: Max-Cut Approximation
- Category: cs/theory
- Language: en
- Key Concepts: Max-Cut Approximation

## Entity: network-coding
- Title: Network Coding
- Category: cs/theory
- Language: en
- Key Concepts: Network Coding
- Backlinks: max-flow-network-coding

## Entity: max-flow-network-coding
- Title: Network Coding Max-Flow
- Category: cs/theory
- Language: en
- Key Concepts: Network Coding Max-Flow
- References: network-coding

## Entity: p-completeness
- Title: P-completeness
- Category: cs/theory
- Language: en
- Key Concepts: P-completeness

## Entity: randomized-algorithms
- Title: Randomized Algorithms
- Category: cs/theory
- Language: en
- Key Concepts: Randomized Algorithms

## Entity: shannon-capacity
- Title: Shannon Capacity
- Category: cs/theory
- Language: en
- Key Concepts: Shannon Capacity

## Entity: streaming-algorithms
- Title: Streaming Algorithms
- Category: cs/theory
- Language: en
- Key Concepts: Streaming Algorithms

## Entity: black-litterman
- Title: Black-Litterman Model
- Category: finance/portfolio
- Language: en
- Key Concepts: Black-Litterman Model

## Entity: fama-french-5
- Title: Fama-French 5-Factor
- Category: finance/portfolio
- Language: en
- Key Concepts: Fama-French 5-Factor

## Entity: exotic-options
- Title: Barrier & Lookback Options
- Category: finance/pricing
- Language: en
- Key Concepts: Barrier & Lookback Options
- Backlinks: black-scholes, greeks-options

## Entity: heston-fourier
- Title: Heston Fourier Pricing
- Category: finance/pricing
- Language: en
- Key Concepts: Heston Fourier Pricing
- References: finance/heston-model

## Entity: vanna-volga
- Title: Vanna & Volga
- Category: finance/pricing
- Language: en
- Key Concepts: Vanna & Volga

## Entity: hjb-equation
- Title: Dynamic Programming (HJB)
- Category: finance/stochastic
- Language: en
- Key Concepts: Dynamic Programming (HJB)

## Entity: fractional-brownian-motion
- Title: Fractional Brownian Motion
- Category: finance/stochastic
- Language: en
- Key Concepts: Fractional Brownian Motion
- Backlinks: fbm-integration, fractional-cointegration, math/gaussian-process-sample-paths, math/subordinators, multifractal-processes, stable-processes

## Entity: heston-model
- Title: Heston Model
- Category: finance/stochastic
- Language: en
- Key Concepts: Heston Model
- References: finance/heston-model
- Backlinks: black-scholes, blacks-model, conditionally-gaussian-processes, convertible-bonds, finance/asymptotic-expansion-finance, finance/black-scholes-derivations, finance/complete-incomplete-markets, finance/delta-hedging-practice, finance/dispersion-trading, finance/dupire-local-vol, finance/eigenportfolio-rmt, finance/follmer-schweizer, finance/gan, finance/girsanov-semimartingales, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/levy-processes, finance/longstaff-schwartz, finance/merton-jump-diffusion, finance/nelson-siegel-svensson, finance/particle-filter, finance/real-options, finance/rough-volatility, finance/sabr-model, finance/self-similarity-fractality, finance/semimartingale-models, finance/stylized-facts-returns, finance/upper-lower-hedging-prices, finance/variance-gamma, finance/variance-swaps, finance/volatility-surface, garman-kohlhagen, geometric-brownian-motion, greeks-options, lsv-model, math/absolute-continuity-process-measures, math/convergence-semimartingales, math/functional-limit-theorems, math/stable-convergence, nonlinear-filtering, option-strategies, ornstein-uhlenbeck-process, risk-neutral-valuation, stochastic-differential-equations, svi-model, volatility-forecasting, volatility-smile

## Entity: itos-lemma
- Title: Ito's Lemma
- Category: finance/stochastic
- Language: en
- Key Concepts: Ito's Lemma

## Entity: martingale-clt
- Title: Martingale Central Limit Theorem
- Category: finance/stochastic
- Language: en
- Key Concepts: Martingale Central Limit Theorem
- Backlinks: math/concentration-inequalities, math/functional-limit-theorems, math/predictable-compensator, math/stable-convergence, math/tightness-semimartingales, math/u-statistics

## Entity: clark-ocone
- Title: Martingale Representation (Clark-Ocone)
- Category: finance/stochastic
- Language: en
- Key Concepts: Martingale Representation (Clark-Ocone)
- References: math/martingale-representation

## Entity: merton-jump-diffusion
- Title: Merton Jump-Diffusion
- Category: finance/stochastic
- Language: en
- Key Concepts: Merton Jump-Diffusion
- Backlinks: characteristic-functions, finance/variance-gamma, jump-robust-volatility, kelly-jump-diffusion, levy-ito-decomposition, volatility-smile

## Entity: jump-diffusions
- Title: SDEs with Jumps
- Category: finance/stochastic
- Language: en
- Key Concepts: SDEs with Jumps

## Entity: poisson-jump-sdes
- Title: SDEs with Poisson Jumps
- Category: finance/stochastic
- Language: en
- Key Concepts: SDEs with Poisson Jumps
- References: stochastic-differential-equations

## Entity: figarch
- Title: FIGARCH
- Category: finance/time-series
- Language: en
- Key Concepts: FIGARCH
- Backlinks: figarch-model

## Entity: figarch-model
- Title: FIGARCH Modeling
- Category: finance/time-series
- Language: en
- Key Concepts: FIGARCH Modeling
- References: figarch

## Entity: hawkes-likelihood
- Title: Hawkes Likelihood Estimation
- Category: finance/time-series
- Language: en
- Key Concepts: Hawkes Likelihood Estimation
- References: hawkes-processes

## Entity: hawkes-processes
- Title: Hawkes Processes
- Category: finance/time-series
- Language: en
- Key Concepts: Hawkes Processes
- Backlinks: hawkes-likelihood

## Entity: var-models
- Title: Vector Autoregression (VAR)
- Category: finance/time-series
- Language: en
- Key Concepts: Vector Autoregression (VAR)

## Entity: adalora
- Title: AdaLoRA
- Category: language-models
- Language: en
- Key Concepts: AdaLoRA
- References: fine-tuning

## Entity: attention-linear-kernel
- Title: Attention Mechanisms: Linear Attention
- Category: language-models
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Architecture Mechanics: Attention and Dimensionality, [[attention-mechanisms|Attention]] Mechanisms: Linear [[attention-mechanisms|Attention]], Conclusion
- References: attention-mechanisms, math/spectral-theory-operators

## Entity: deepseek-v3-mla-compression
- Title: DeepSeek-V3 Architecture: MLA & Deep-Compression
- Category: language-models
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, DeepSeek-V3 Architecture: MLA & Deep-Compression
- References: attention-mechanisms
- Backlinks: research/mla-financial-reasoning

## Entity: dora
- Title: DoRA: Weight-Decomposed Low-Rank Adaptation
- Category: language-models
- Language: en
- Key Concepts: DoRA: Weight-Decomposed Low-Rank Adaptation
- References: fine-tuning

## Entity: kv-cache-compression
- Title: KV Cache Compression: Token Eviction
- Category: language-models
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, KV Cache Compression: Token Eviction
- References: attention-mechanisms
- Backlinks: research/mla-financial-reasoning, speculative-decoding

## Entity: long-context-yarn-longrope
- Title: Long Context: YaRN and LongRoPE
- Category: language-models
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Long Context: YaRN and LongRoPE, Differential and Information Geometry
- References: attention-mechanisms, convex-optimization, manifold-learning

## Entity: longrope
- Title: LongRoPE
- Category: language-models
- Language: en
- Key Concepts: LongRoPE

## Entity: mixture-of-depths
- Title: Mixture of Depths
- Category: language-models
- Language: en
- Key Concepts: Mixture of Depths
- References: attention-mechanisms, transformer-architecture

## Entity: mixture-of-experts-routing
- Title: Mixture of Experts: Routing Math
- Category: language-models
- Language: en
- Key Concepts: Conclusion, Mixture of Experts: Routing Math, Optimal Transport and Wasserstein Metrics, Stochastic Dynamics and Statistical Mechanics
- References: stochastic-differential-equations

## Entity: model-merging-procrustes
- Title: Model Merging: Geometry of Weight Space Alignment
- Category: language-models
- Language: en
- Key Concepts: Conclusion, Optimal Transport and Wasserstein Metrics, Differential and Information Geometry, Model Merging: Geometry of Weight Space Alignment
- References: convex-optimization, manifold-learning

## Entity: qlora
- Title: QLoRA
- Category: language-models
- Language: en
- Key Concepts: QLoRA
- References: fine-tuning, quantization

## Entity: reasoning-models-prm-orm
- Title: Reasoning Models: PRM vs. ORM
- Category: language-models
- Language: en
- Key Concepts: Conclusion, Reasoning Models: PRM vs. ORM, Stochastic Dynamics and Statistical Mechanics
- References: stochastic-differential-equations

## Entity: speculative-decoding-medusa
- Title: Speculative Decoding: Medusa vs. EAGLE
- Category: language-models
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Speculative Decoding: Medusa vs. EAGLE, Stochastic Dynamics and Statistical Mechanics
- References: attention-mechanisms, stochastic-differential-equations

## Entity: tokenization-bpe-unigram
- Title: Tokenization: BPE vs. Unigram
- Category: language-models
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Tokenization: BPE vs. Unigram, Stochastic Dynamics and Statistical Mechanics, Conclusion
- References: attention-mechanisms, stochastic-differential-equations

## Entity: quantization-ptq-information
- Title: Quantization: Information Loss in PTQ
- Category: llm-infra
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Conclusion, Optimal Transport and Wasserstein Metrics, [[quantization]]: Information Loss in PTQ
- References: quantization, stochastic-differential-equations

## Entity: algebraic-geometry-slt
- Title: Algebraic Geometry in Singular Learning Theory
- Category: math
- Language: en
- Key Concepts: Algebraic Geometry in Singular Learning Theory, Algebraic Topology, Sheaves, and Category Theory, Random Matrix Theory and Spectral Dynamics, Conclusion
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: algebraic-topology-persistent
- Title: Algebraic Topology: Persistent Laplacian & Persistent Bundles
- Category: math
- Language: en
- Key Concepts: Conclusion, Algebraic Topology, Sheaves, and Category Theory, Random Matrix Theory and Spectral Dynamics, Algebraic Topology: Persistent [[spectral-graph-theory|Laplacian]] & Persistent Bundles
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: differential-galois-theory
- Title: Differential Galois Theory
- Category: math
- Language: en
- Key Concepts: Conclusion, Algebraic Topology, Sheaves, and Category Theory, Differential Galois Theory
- References: spectral-graph-theory

## Entity: erdos-renyi
- Title: Erdos-Renyi & Scale-Free
- Category: math
- Language: en
- Key Concepts: Erdos-Renyi & Scale-Free

## Entity: functional-analysis-c-star
- Title: Functional Analysis: C*-algebras
- Category: math
- Language: en
- Key Concepts: Symplectic Geometry and Hamiltonian Mechanics, Conclusion, Functional Analysis: C*-algebras, Random Matrix Theory and Spectral Dynamics
- References: math/spectral-theory-operators

## Entity: group-representation
- Title: Group Representation Theory
- Category: math
- Language: en
- Key Concepts: Group Representation Theory

## Entity: h-infinity-control
- Title: H-infinity Control
- Category: math
- Language: en
- Key Concepts: H-infinity Control

## Entity: information-geometry-natural-gradient
- Title: Information Geometry: Natural Gradient
- Category: math
- Language: en
- Key Concepts: Conclusion, Information Geometry: Natural Gradient, Differential and Information Geometry
- References: convex-optimization, manifold-learning

## Entity: lqr-control
- Title: LQR Control
- Category: math
- Language: en
- Key Concepts: LQR Control

## Entity: lie-groups-algebra
- Title: Lie Groups & Algebras
- Category: math
- Language: en
- Key Concepts: Lie Groups & Algebras
- References: manifold-learning

## Entity: navier-stokes
- Title: Navier-Stokes Regularity
- Category: math
- Language: en
- Key Concepts: Navier-Stokes Regularity

## Entity: non-commutative-geometry
- Title: Non-commutative Geometry
- Category: math
- Language: en
- Key Concepts: Symplectic Geometry and Hamiltonian Mechanics, Conclusion, Algebraic Topology, Sheaves, and Category Theory, Non-commutative Geometry
- References: spectral-graph-theory

## Entity: number-theory-l-functions
- Title: Number Theory: L-functions & Langlands
- Category: math
- Language: en
- Key Concepts: Number Theory: L-functions & Langlands, Algebraic Topology, Sheaves, and Category Theory, Random Matrix Theory and Spectral Dynamics, Conclusion
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: optimal-transport-gromov-wasserstein
- Title: Optimal Transport: Gromov-Wasserstein Distance
- Category: math
- Language: en
- Key Concepts: Conclusion, Optimal Transport and Wasserstein Metrics, Optimal Transport: Gromov-Wasserstein Distance, Differential and Information Geometry
- References: convex-optimization, manifold-learning

## Entity: pde-hamilton-jacobi
- Title: Partial Differential Equations: Hamilton-Jacobi
- Category: math
- Language: en
- Key Concepts: Partial Differential Equations: Hamilton-Jacobi, Conclusion, Symplectic Geometry and Hamiltonian Mechanics, Stochastic Dynamics and Statistical Mechanics
- References: stochastic-differential-equations

## Entity: pollaczek-khinchine
- Title: Pollaczek-Khinchine Formula
- Category: math
- Language: en
- Key Concepts: Pollaczek-Khinchine Formula

## Entity: prime-number-theorem
- Title: Prime Number Theorem
- Category: math
- Language: en
- Key Concepts: Prime Number Theorem

## Entity: random-matrix-theory-marchenko
- Title: Random Matrix Theory: Marchenko-Pastur Law
- Category: math
- Language: en
- Key Concepts: Random Matrix Theory: Marchenko-Pastur Law, Random Matrix Theory and Spectral Dynamics, Conclusion
- References: math/spectral-theory-operators

## Entity: riemann-hypothesis
- Title: Riemann Hypothesis
- Category: math
- Language: en
- Key Concepts: Riemann Hypothesis

## Entity: zeta-function
- Title: Riemann Zeta Function
- Category: math
- Language: en
- Key Concepts: Riemann Zeta Function

## Entity: shapley-value
- Title: Shapley Value
- Category: math
- Language: en
- Key Concepts: Shapley Value

## Entity: stochastic-calculus-manifolds
- Title: Stochastic Calculus on Manifolds
- Category: math
- Language: en
- Key Concepts: Conclusion, Differential and Information Geometry, Stochastic Dynamics and Statistical Mechanics, Stochastic Calculus on Manifolds
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: tempered-distributions
- Title: Tempered Distributions
- Category: math
- Language: en
- Key Concepts: Tempered Distributions

## Entity: tor-ext-functors
- Title: Tor and Ext Functors
- Category: math
- Language: en
- Key Concepts: Tor and Ext Functors
- References: homological-algebra

## Entity: wavelets
- Title: Wavelets
- Category: math
- Language: en
- Key Concepts: Wavelets

## Entity: fluid-dynamics-navier-stokes
- Title: Fluid Dynamics: Navier-Stokes Existence
- Category: physics
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Fluid Dynamics: Navier-Stokes Existence, Differential and Information Geometry, Conclusion
- References: convex-optimization, math/differential-geometry, math/spectral-theory-operators

## Entity: fluid-turbulence
- Title: Fluid Turbulence
- Category: physics
- Language: en
- Key Concepts: Fluid Turbulence

## Entity: gauge-theory
- Title: Gauge Theory & Fiber Bundles
- Category: physics
- Language: en
- Key Concepts: Gauge Theory & Fiber Bundles

## Entity: grovers-algorithm
- Title: Grover's Algorithm
- Category: physics
- Language: en
- Key Concepts: Grover's Algorithm

## Entity: hawking-penrose
- Title: Hawking-Penrose Theorems
- Category: physics
- Language: en
- Key Concepts: Hawking-Penrose Theorems

## Entity: holographic-principle
- Title: Holographic Principle
- Category: physics
- Language: en
- Key Concepts: Holographic Principle

## Entity: nlse-solitons
- Title: NLSE Solitons
- Category: physics
- Language: en
- Key Concepts: NLSE Solitons
- References: solitons

## Entity: path-integrals
- Title: Path Integrals in QM
- Category: physics
- Language: en
- Key Concepts: Path Integrals in QM
- References: path-integral

## Entity: percolation-theory
- Title: Percolation Theory
- Category: physics
- Language: en
- Key Concepts: Percolation Theory

## Entity: qcd
- Title: Quantum Chromodynamics
- Category: physics
- Language: en
- Key Concepts: Quantum Chromodynamics

## Entity: quantum-error-correction
- Title: Quantum Error Correction
- Category: physics
- Language: en
- Key Concepts: Quantum Error Correction

## Entity: qft-curved-spacetime
- Title: Quantum Field Theory on Curved Spacetime
- Category: physics
- Language: en
- Key Concepts: Quantum Field Theory on Curved Spacetime, Conclusion, Differential and Information Geometry, Quantum Field Theory and Renormalization Group
- References: convex-optimization, math/differential-geometry

## Entity: solitons
- Title: Solitons
- Category: physics
- Language: en
- Key Concepts: Solitons
- Backlinks: nlse-solitons

## Entity: string-theory-calabi-yau
- Title: String Theory: Calabi-Yau Manifolds
- Category: physics
- Language: en
- Key Concepts: Conclusion, Algebraic Topology, Sheaves, and Category Theory, Differential and Information Geometry, String Theory: Calabi-Yau Manifolds
- References: convex-optimization, math/differential-geometry, spectral-graph-theory

## Entity: supergravity
- Title: Supergravity
- Category: physics
- Language: en
- Key Concepts: Supergravity

## Entity: supersymmetry-formalism
- Title: Supersymmetry (SUSY): Formalism
- Category: physics
- Language: en
- Key Concepts: Symplectic Geometry and Hamiltonian Mechanics, Supersymmetry (SUSY): Formalism, Conclusion, Quantum Field Theory and Renormalization Group

## Entity: yang-mills-mass-gap
- Title: Yang-Mills Mass Gap
- Category: physics
- Language: en
- Key Concepts: Yang-Mills Mass Gap

## Entity: research/mla-financial-reasoning
- Title: Impact of MLA Compression on Financial Time-Series Reasoning
- Category: research
- Language: en
- Key Concepts: Objective, Models, Open Questions, Context, Metric, Dataset, References, Methodology, Current Findings, Insights for AI
- References: attention-mechanisms, deepseek-v3-mla-compression, kv-cache-compression, llm-financial-analysis, quantization, rag, tool-use

## Entity: research/quantum-risk-management
- Title: Квантовые алгоритмы в риск-менеджменте
- Category: research
- Language: ru
- Key Concepts: Контекст, Инсайты для ИИ, Цель, Методология, Открытые вопросы, Ссылки, Результаты
- References: quantum-computing-vqe, quantum-machine-learning-kernels

## Entity: copula-models
- Title: Копула-модели
- Category: Модели ценообразования
- Language: ru
- Key Concepts: Реализация на Python, Теорема Скляра, Расширения:, Хвостовая зависимость t-копулы, Динамические копулы, Пар-трейдинг, Математическая база, Портфельный VaR, Ценообразование кредитных корзин (CDO, CLN), Обзор и предпосылки, Хвостовые коэффициенты зависимости, Таблица параметров, Ограничения:, Ключевые свойства, Основные семейства копул
- References: brownian-motion, cox-process, finance/monte-carlo-method, finance/value-at-risk, finance/xva
- Backlinks: cornish-fisher-cvar, cox-process, cs01, cva-wrong-way-risk, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/isda-simm, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/securitization, finance/stylized-facts-returns, finance/swaps, finance/value-at-risk, finance/xva, generative-scenario-models, gnn-credit-risk, graph-neural-networks, survival-risk-prediction, vine-copulas

