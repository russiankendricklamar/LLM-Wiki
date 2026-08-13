# Knowledge Base Aggregate for AI Synthesis

## System Instructions
All agents should refer to [[GEMINI.md]] for project-wide standards and research protocols. New research findings are located in the `research/` category with structured metadata.

## Entity: course-math-for-ai
- Title: Mathematics for Deep Learning: The PhD Path
- Category: AI & Math
- Language: en
- Key Concepts: Week 3 — Multivariable calculus, Prerequisites, Week 7 — Information theory, Goal:, Information bottleneck inside a [[transformer-architecture|transformer]]., Week 1 — Linear algebra in operator form, Week 10 — Differential geometry, Recommended reading, Week 8 — Stochastic processes, Outcomes, Checkpoint:, Week 12 — Optimal transport, Week 6 — Probability theory, Module 0 (optional, 1 week): Warm-up, Week 5 — Measure theory and Lebesgue integral
- References: brownian-bridge, characteristic-functions, connections-curvature, convex-optimization, convexity, distributions-zoo, entropy-information, exponential-families, f-divergences, feynman-kac, finance/shannon-entropy, fisher-information, geometric-deep-learning, gradient-hessian-jacobian, hilbert-banach-spaces, hodge-theory, lagrange-multipliers, laplacian, lie-groups, linear-programming, linear-spaces-basis, linear-systems-gauss, lln-clt, malliavin-calculus, manifold, manifold-learning, martingale, math/analysis-geometry/information-geometry, math/differential-geometry, math/discrete-markov-chains, math/information-theory, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/sde-numerical-methods, math/sigma-algebra-measurability, maximum-entropy, measure-theory, multivariable-calculus, multivariate-normal, optimal-transport, ornstein-uhlenbeck, poisson-process, ricci-flow, stochastic-differential-equations, symplectic-geometry, taylor-series, tensor-decompositions, transformer-architecture

## Entity: bert
- Title: BERT
- Category: AI Architectures
- Language: en
- Key Concepts: Masked Language Modeling (MLM):, Next Sentence Prediction (NSP):, Overview, Pre-training
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
- Key Concepts: Gating Mechanisms, GRU (Gated Recurrent Unit):, LSTM (Long Short-Term Memory):, Overview

## Entity: resnet
- Title: ResNet
- Category: AI Architectures
- Language: en
- Key Concepts: Overview, Mechanism

## Entity: u-net
- Title: U-Net
- Category: AI Architectures
- Language: en
- Key Concepts: Overview, Architecture

## Entity: ai-market-making
- Title: AI Market Making
- Category: AI Finance
- Language: en
- Key Concepts: Adverse Selection Detection via ML, Huang (2023) — SAC for crypto market making, Reward, Related Topics, Action, Spooner et al. (2018) — RL Market Making, Quote Skewing, Python Implementation, Hyperparameter sensitivity, State, Gasperov & Kostanjcar (2021) — RL with adversarial training, RL Market Making MDP, Strategy Performance Comparison, Key Results, Objective
- References: attention-mechanisms, deep-rl-execution, optimal-execution, temporal-fusion-transformer
- Backlinks: market-microstructure

## Entity: alpha-factor-research
- Title: Alpha Factor Research
- Category: AI Finance
- Language: en
- Key Concepts: IC Decay by Factor Type, Gu, Kelly & Xiu (2020), Related Topics, Gradient Boosting Factors, Python Implementation, Capacity constraints, Alpha Factor Research, factor zoo problem, Double ML for Fama-French factors (Oprescu et al., 2023), Regime sensitivity, Auto-Encoder Latent Factors, ML-Based Factor Construction, Key Results, Turnover vs Alpha Trade-off, Double Machine Learning for Causal Factors
- References: deep-rl-execution, llm-financial-analysis, temporal-fusion-transformer
- Backlinks: double-ml, nlp-financial-analysis, vine-copulas

## Entity: ml-options-pricing
- Title: ML for Options Pricing
- Category: AI Finance
- Language: en
- Key Concepts: ML for Options Pricing, implied volatility surface, Buehler et al. (2019) — Deep Hedging, Regime shifts, Pricing Accuracy Comparison, Data sparsity at wings, Black-Scholes Baseline, Related Topics, deep hedging, Volatility Surface Interpolation with LSTMs, Python Implementation, Deep Hedging (Buehler et al., 2019), Key Results, Horvath et al. (2021) — Rough vol surface fitting, Deep hedging simulation dependency
- References: black-scholes, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, temporal-fusion-transformer

## Entity: nlp-financial-analysis
- Title: NLP for Financial Analysis
- Category: AI Finance
- Language: en
- Key Concepts: FinBERT and Domain-Adapted Transformers, Loughran & McDonald (2011), Event-Driven Return Model, NLP for Financial Analysis, Regulatory considerations, Risk factor changes, Bot filtering, Related Topics, MD&A tone, Market impact of signals, Python Implementation, Earnings call staging, 10-K / 8-K Mining, Earnings Call Analysis, Material events (8-K)
- References: alpha-factor-research, finance/shannon-entropy, fine-tuning, llm, llm-financial-analysis, rag, temporal-fusion-transformer, transformer-architecture
- Backlinks: financial-entropy

## Entity: fourier-neural-operators
- Title: Fourier Neural Operators
- Category: AI Physics
- Language: en
- Key Concepts: Non-linearity, Fourier Transform, Operator Neural Network, The Operator Learning Problem, Fourier Neural Operators (FNO), Fourier domain, Linear Transform (Weighting), Inverse Fourier Transform, Fluid Dynamics, Related Topics, physics of the continuous operator, Material Science, Performance: Speed and Accuracy, How FNO Works, Applications
- References: neural-operators, partial-differential-equations, pinns
- Backlinks: fredholm-theory

## Entity: ai-physics/hamiltonian-nn
- Title: Hamiltonian Neural Networks (HNN)
- Category: AI Physics
- Language: en
- Key Concepts: How HNNs Work:, Control Systems:, The Problem with Black-Box Models, Data Efficiency:, Mathematical Core, Related Topics, Auto-Differentiation, Molecular Dynamics:, Celestial Mechanics:, Phase Space Consistency:, Applications, Key Advantages, Hamiltonian, Hamiltonian Neural Networks (HNN), Energy Conservation:
- References: equivariant-nn, math/variational-calculus, pinns
- Backlinks: ai-theory/spatial/equivariant-gnn, equivariant-nn, kuramoto-model, lagrange-multipliers, neural-odes, neural-operators, pinns, symplectic-geometry

## Entity: 3d-gaussian-splatting
- Title: 3D Gaussian Splatting
- Category: AI Theory
- Language: en
- Key Concepts: Representation, Densification, Sorting, Related Topics, Covariance Matrix ($\Sigma$), [[automatic-differentiation|Backpropagation]], 1. The Core Idea: Gaussians as Primitives, Projection, Alpha Blending, Rendering Speed, Spherical Harmonics (SH), Visualization: Gaussian Projections, 4. 3DGS vs. NeRF, 5. Applications, Splatting
- References: automatic-differentiation, convex-optimization, geometric-deep-learning, manifold-learning, nerf, transformer-architecture
- Backlinks: nerf, neural-radiance-fields-math

## Entity: activation-patching
- Title: Activation Patching
- Category: AI Theory
- Language: en
- Key Concepts: patch, Corrupted input, Name Mover Heads, Nonlinearity., Path Patching vs Activation Patching, Related Topics, Path patching, Factual Recall Patching, Activation patching, Duplicate Token Heads, Limitations, Indirect Object Identification (IOI), Correlation ≠ causation., Combinatorial explosion., S-Inhibition Heads
- References: attention-mechanisms, circuit-discovery, mechanistic-interpretability, transformer-architecture
- Backlinks: circuit-discovery, probing-classifiers, superposition

## Entity: ai-theory/adversarial-examples
- Title: Adversarial Examples
- Category: AI Theory
- Language: en
- Key Concepts: Lack of principled theory., PGD (Projected [[convex-optimization|Gradient Descent]]) Attack., Robust overfitting., Transferability and feature alignment., Carlini–Wagner ($\ell_2$) Attack., FGSM (Fast Gradient Sign Method)., Related Topics, Adversarial Examples, LLMs and adversarial robustness., Prompt Injection for LLMs., Strong defences are rare., Advantages and limitations., Standard accuracy–robustness trade-off., Definition of adversarial example., Noise vs. adversarial robustness.
- References: convex-optimization, diffusion-models, math/concentration-inequalities, mechanistic-interpretability, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: differential-privacy, metric-spaces

## Entity: attention-mechanisms
- Title: Attention Mechanisms
- Category: AI Theory
- Language: en
- Key Concepts: Queries ($Q$), Llama 3, Values ($V$), Related Topics, 2. Multi-Head Attention (MHA), single pair of Key and Value heads, Visualization: Attention Matrix, FlashAttention, "Attention Is All You Need", Keys ($K$), Recomputation, Tiling, 4. Hardware Optimization: FlashAttention, Memory-Bound, A. Multi-Query Attention (MQA)
- References: flash-attention, inference-serving, llm, paged-attention, transformer-architecture
- Backlinks: activation-functions-math, activation-patching, ai-market-making, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-linear-kernel, autoregressive-models, circuit-discovery, code-models, context-length, deepseek-v3-mla-compression, diffusion-models, distributed-training-3d, embedding-models, equivariant-diffusion-models, equivariant-nn, finance/adversarial-stress-testing, finance/bachelier-formula, finance/gnn-finance, finance/transformer-timeseries, fine-tuning, flash-attention, geometry-of-attention, gnn-credit-risk, gpt-architecture, gpu-architecture, graph-neural-networks, hardware-io-attention, induction-heads, inference-serving, kan, kv-cache-compression, language-models/mamba-ssm, linear-algebra, llm, long-context-yarn-longrope, math-reasoning-chains-rl, mechanistic-interpretability, mechanistic-interpretability-sae, meta-learning, mixture-of-depths, mla, model-parallelism, moe-routing, neural-scaling-laws, paged-attention, positional-encodings, probing-classifiers, quantization, quantum-machine-learning-kernels, research/mla-financial-reasoning, rl-trader, rope-scaling, slm, speculative-decoding-medusa, state-space-models, temporal-fusion-transformer, tensors-and-contractions, tokenization, tokenization-bpe-unigram, training-dynamics, transformer-architecture, universal-approximation-theory, vision-transformers, vision-transformers-scaling, vlm

## Entity: automatic-differentiation
- Title: Automatic Differentiation
- Category: AI Theory
- Language: en
- Key Concepts: Source-to-source., Numerical considerations, directed acyclic graph (DAG), an entire row of the Jacobian, Dual numbers and operator overloading, Bayesian inference., Related Topics, Mixed precision., Portfolio optimisation., Forward mode, Implicit differentiation, The idea: function as a computational graph, Training neural networks., Example: PyTorch, Applications
- References: black-scholes, convex-optimization, finance/monte-carlo-method, inference-serving, neural-scaling-laws, partial-differential-equations, pinns
- Backlinks: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, category-theory-ml, chain-rule-autodiff, convex-analysis, deep-galerkin, differential-equations, gradient-hessian-jacobian, linear-algebra, mcts, multivariable-calculus, neural-odes, partial-differential-equations, pinns, qat, reinforcement-learning, tensors-and-contractions, variational-autoencoders

## Entity: bayesian-deep-learning
- Title: Bayesian Deep Learning
- Category: AI Theory
- Language: en
- Key Concepts: aleatoric, Financial Forecasting:, Laplace Approximation, temperature scaling, Autonomous Driving:, functional diversity, Epistemic uncertainty, SGLD and MCMC in Neural Networks, Aleatoric uncertainty, Open Frontiers, Medical Imaging:, epistemic, Active Learning:, Deep Ensembles, Variational Inference and the ELBO
- References: evaluation-llms, gaussian-processes, math/kolmogorov-probability-axioms, mcmc, neural-scaling-laws, statistical-mechanics, variational-autoencoders
- Backlinks: ai-theory/in-context-learning, de-finetti-exchangeability, gaussian-processes

## Entity: causal-inference-do-calculus
- Title: Causal Inference: Do-Calculus & SCM
- Category: AI Theory
- Language: en
- Key Concepts: Structural Causal Models (SCM), Causal Effect, Rule 1 (Insertion/Deletion of observations):, Identification Strategies, Action:, Abduction:, Related Topics, DERIVATION: Identification of the Frontdoor Formula, Frontdoor Criterion, Rule 2 (Action/Observation exchange):, Prediction:, The Do-Operator, Rule 3 (Insertion/Deletion of actions):, Causal Inference: Do-Calculus & SCM, Backdoor Criterion
- References: bayesian-networks, causal-inference-trading, graph-theory, math/m-estimators

## Entity: circuit-discovery
- Title: Circuit Discovery
- Category: AI Theory
- Language: en
- Key Concepts: superposition, circuit, Step 4: Verification., QK circuit, Circuit Discovery, features, Related Topics, Superposition and Polysemanticity, Step 2: Activation patching., Circuit discovery, The OV and QK Circuits, circuits, Edge Attribution Patching (EAP), The Circuits Hypothesis, Step 1: Task definition.
- References: activation-patching, attention-mechanisms, mechanistic-interpretability, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching

## Entity: contrastive-learning
- Title: Contrastive Learning
- Category: AI Theory
- Language: en
- Key Concepts: InfoNCE, Zero-shot classification, Critical empirical finding, Target network, Loss, SimCLR: Simplicity at Scale, MoCo: Memory and Momentum, Information maximization, CLIP: Cross-Modal Contrastive Learning, Momentum Contrast, Connections to Other Paradigms, Momentum update rule, CLIP, Label-free invariance, BYOL: Learning Without Negatives
- References: embedding-models, finance/shannon-entropy, fine-tuning, generative-models, neural-scaling-laws, pac-learning, transformer-architecture, variational-autoencoders
- Backlinks: vision-transformers

## Entity: diffusion-models
- Title: Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: probability flow ODE, straight-line paths, Physics simulation., forward process, Advantages over DDPM:, Theoretical understanding., Flow Matching, Reverse process (learned):, Core Idea: Reversing a Forward Process, Score, Related Topics, Scalability and Conditioning, Evidence Lower Bound (ELBO) Connection, Training and Inference, noise prediction
- References: attention-mechanisms, fokker-planck-equation, generative-models, manifold-learning, neural-scaling-laws, ornstein-uhlenbeck-process, stochastic-differential-equations, transformer-architecture, variational-autoencoders
- Backlinks: ai-theory/adversarial-examples, energy-based-models, equivariant-diffusion-models, generative-models, laplacian, math/sde-numerical-methods, nonequilibrium-statmech, variational-autoencoders

## Entity: energy-based-models
- Title: Energy-Based Models
- Category: AI Theory
- Language: en
- Key Concepts: MLE and the Partition Function Problem, Denoising score matching, Joint Energy Modeling (JEM), Connection to [[statistical-mechanics|Statistical Mechanics]], Score Matching: Avoiding the Partition Function, RBM, Contrastive Divergence and Approximation, Modern EBMs and Hybrid Modeling, Restricted Boltzmann Machines, contrastive divergence, direct
- References: convex-optimization, diffusion-models, manifold-learning, statistical-mechanics

## Entity: equivariant-diffusion-models
- Title: Equivariant Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: Invariant Schedulers:, Robustness:, Non-compact Groups:, Euclidean Equivariant Diffusion (E(n)-Diffusion), Challenges:, Symmetry in Generative Modelling, Riemannian Diffusion:, Feature update:, Related Topics, Physical Consistency:, Equivariant [[stochastic-differential-equations|SDE]] Framework, Robotics:, Applications, reverse [[stochastic-differential-equations|SDE]], Euclidean group
- References: ai-theory/spatial/equivariant-gnn, attention-mechanisms, diffusion-models, laplacian, lie-algebras-physics, lie-groups, manifold-learning, stochastic-differential-equations

## Entity: ai-theory/spatial/equivariant-gnn
- Title: Equivariant GNN (E(n)-GNN)
- Category: AI Theory
- Language: en
- Key Concepts: Equivariant Message Passing, Related Topics, Equivariance, Equivariant Graph Neural Networks (E(n)-GNN), Impact and Applications, Coordinate Updates:, Molecular Modeling:, Invariant Messages:, Robotics:, Why Equivariance?, Mathematical Concept, Structural Biology:, Invariance, AI for Science
- References: ai-physics/hamiltonian-nn, math/foundations/group-theory-symmetries, spectral-graph-theory
- Backlinks: equivariant-diffusion-models

## Entity: equivariant-nn
- Title: Equivariant Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: $G$-equivariant, Message passing on point clouds., Prerequisites, SE(3)-[[transformer-architecture|Transformer]] (2020):, SEGNN (2021):, NequIP (2022):, Molecular dynamics:, Protein structure prediction:, Related Topics, Python Implementation, Particle physics:, Key architectures:, MACE (2022):, Sample efficiency:, Message-passing bottleneck.
- References: ai-physics/hamiltonian-nn, attention-mechanisms, group-theory, pinns, qft-basic, scattering-amplitudes, transformer-architecture
- Backlinks: ai-physics/hamiltonian-nn, graph-neural-networks, group-theory, kan, lie-groups, neural-operators, pinns, representation-theory-ml

## Entity: factor-graphs-inference
- Title: Factor Graphs & Sum-Product Algorithm
- Category: AI Theory
- Language: en
- Key Concepts: Sum-Product Algorithm, Junction Tree, Loopy Belief Propagation, DERIVATION: Marginal on a Chain, Variable to Factor Message:, Related Topics, variable nodes, Factor to Variable Message:, Convergence, Message Passing Rules, Bethe Free Energy, treewidth, Beyond Sum-Product: Max-Product, factor nodes, The Sum-Product Algorithm
- References: bayesian-networks, graph-theory, kalman-filter, variational-inference-math

## Entity: gauge-equivariant-nn
- Title: Gauge Equivariant Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Mathematical Formulation, Gauge Equivariant Neural Networks, Fiber Bundles and Connections, Gauge Equivariant Convolution
- References: manifold-learning

## Entity: gaussian-processes
- Title: Gaussian Processes
- Category: AI Theory
- Language: en
- Key Concepts: Financial volatility, Laplace approximation, Scientific ML, GP Regression and Posterior, Sparse GP approximations, Bayesian optimization, Kernels and Positive Semidefiniteness, Inducing points, Neural Tangent Kernel (NTK), ARD (Automatic Relevance Determination), Deep kernels, Marginal Likelihood and Hyperparameter Learning, Gaussian Processes, Uncertainty quantification, Matérn kernel:
- References: bayesian-deep-learning, finance/monte-carlo-method, math/kolmogorov-probability-axioms, neural-scaling-laws, pinns, statistical-mechanics
- Backlinks: ai-theory/neural-tangent-kernel, bayesian-deep-learning, bayesian-nonparametrics, hilbert-banach-spaces, multivariate-normal

## Entity: generative-models
- Title: Generative Models
- Category: AI Theory
- Language: en
- Key Concepts: forward process, Variational Autoencoders (VAE), tractability of density, Evaluate density, Generative Models, Connection with [[schrodinger-equation|the Schrödinger equation]]:, Pharma., Energy-Based Models, Normalizing Flows, Autoregressive Models, Autoregressive models, Related Topics, Encoder, sample quality, GANs
- References: diffusion-models, finance/monte-carlo-method, flow-matching, generative-scenario-models, hamiltonian-mechanics, llm, neural-odes, schrodinger-equation, sparse-autoencoders
- Backlinks: contrastive-learning, diffusion-models, generative-scenario-models, signature-based-models, variational-autoencoders

## Entity: autoregressive-models
- Title: Generative Models: Autoregressive Math
- Category: AI Theory
- Language: en
- Key Concepts: Masked Architectures, Causal [[attention-mechanisms|Attention]] (Transformers):, Masked Convolutions (PixelCNN):, Factorization
- References: attention-mechanisms

## Entity: flow-matching
- Title: Generative Models: Flow Matching
- Category: AI Theory
- Language: en
- Key Concepts: Vector Fields, Conditional Flow Matching
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
- Key Concepts: Flow Composition, Change of Variables

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
- Key Concepts: Neighbour mini-batches, Over-squashing., Graph Convolutional Network (GCN, Kipf & Welling 2017)., Cluster-GCN, Knowledge graphs., aggregates messages, Graph [[transformer-architecture|Transformer]] (Dwivedi & Bresson 2020, Graphormer 2021)., Graph Neural Networks, Structural dependence., LazyGNN / pre-computation, Regression on graph properties, Related Topics, Graph Isomorphism Network (GIN, Xu et al. 2019)., Message Passing Paradigm (MPNN), message passing
- References: attention-mechanisms, copula-models, equivariant-nn, fraud-detection, gnn-credit-risk, neural-odes, spectral-graph-theory, transformer-architecture
- Backlinks: gnn-credit-risk, graph-curvature-oversquashing, graph-theory, laplacian

## Entity: ai-theory/in-context-learning
- Title: In-Context Learning
- Category: AI Theory
- Language: en
- Key Concepts: Few-Shot vs Zero-Shot Scaling, Mechanistic Substrate: Induction Heads, Attend to next token, See Also, Definition and Core Mechanism, In-Context Learning, Task arithmetic, Verbalization sensitivity, Label order effects, Emergence at Scale and Open Questions, Task Vectors and Representation Engineering, induction heads, Prompt distillation, Few-shot, Zero-shot
- References: attention-mechanisms, bayesian-deep-learning, chain-of-thought, fine-tuning, mechanistic-interpretability, neural-scaling-laws, prompt-engineering, transformer-architecture
- Backlinks: ai-theory/neural-tangent-kernel, attention-kernel, induction-heads, training-dynamics

## Entity: induction-heads
- Title: Induction Heads
- Category: AI Theory
- Language: en
- Key Concepts: phase transition, mechanistic interpretability, Increases, In-Context Learning (ICL), Circuit Discovery, Why It Matters, Key (K), Layer 2: Induction Head, Induction Heads, Related Topics, Phase Transition in Training, Visualization: The "Aha!" Moment, Understanding ICL, Identifies, Value (V)
- References: ai-theory/in-context-learning, attention-mechanisms, mechanistic-interpretability, transformer-architecture

## Entity: information-bottleneck-theory
- Title: Information Bottleneck Theory
- Category: AI Theory
- Language: en
- Key Concepts: Exact Solution and the IB Curve, Fitting Phase, IB curve, The Information Bottleneck Objective, Information Bottleneck Theory, Compression Phase, Application to Deep Learning
- References: convex-optimization
- Backlinks: statistical-mechanics-learning

## Entity: ai-theory/knowledge-distillation
- Title: Knowledge Distillation
- Category: AI Theory
- Language: en
- Key Concepts: Student learns both hard and soft targets, Knowledge Distillation, Conditional independence structure., feature-based distillation, Ensemble knowledge:, Model compression:, Adversarial reconstruction:, Architecture mismatch:, Privacy-preserving ML:, QAT ([[quantization]]-Aware Training), The Hinton framework: temperature-scaled softmax and distillation loss, Distillation for large language models, Related Topics, Why it works: information-geometric perspective, Intermediate layer distillation (FitNets, PKD)
- References: attention-mechanisms, evaluation-llms, fine-tuning, manifold-learning, neural-scaling-laws, pac-learning, quantization, transformer-architecture

## Entity: kolmogorov-complexity
- Title: Kolmogorov Complexity
- Category: AI Theory
- Language: en
- Key Concepts: Incompressible strings are "random.", Normalized Information Distance (NID):, Prerequisites, Kolmogorov-random:, Language identification:, Coding theorem:, Anomaly detection:, Related Topics, Python Implementation, How It Works, Conditional complexity:, Shannon-Kolmogorov duality:, Compressibility and randomness., Financial complexity:, Compression-based AGI:
- References: finance/lempel-ziv-complexity, finance/shannon-entropy, pac-learning
- Backlinks: chain-of-thought, math/cantor-diagonal, math/godel-incompleteness, pac-learning

## Entity: learnable-activations
- Title: Learnable Activations and B-splines
- Category: AI Theory
- Language: en
- Key Concepts: Ecosystem maturity., Rational activations., Polynomial activations., Local support., Learnable Activations and B-splines, directly matches the representation in the [[kolmogorov-arnold-theorem|Kolmogorov-Arnold theorem]], Grid refinement., Why not fixed activations, Bayesian neural networks., Parametrisations, KAN: activations on edges, Interpretability., Related Topics, Kolmogorov-Arnold Networks (KANs), B-spline activations.
- References: kan, kolmogorov-arnold-theorem, neural-scaling-laws, pinns, sparse-autoencoders, transformer-architecture
- Backlinks: kan, kolmogorov-arnold-theorem

## Entity: quantization-error-math
- Title: Mathematical Error Analysis in Model Quantization
- Category: AI Theory
- Language: en
- Key Concepts: Error Propagation in Linear Layers, Stochastic Rounding, Mathematical Error Analysis in Model [[quantization]], Uniform Quantization
- References: quantization

## Entity: diffusion-sde-math
- Title: Mathematical Foundations of Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: Forward [[stochastic-differential-equations|SDE]], Reverse [[stochastic-differential-equations|SDE]] and Score Matching, Langevin Dynamics Connection, Mathematical Foundations of Diffusion Models, score function, The Probability Flow ODE
- References: stochastic-differential-equations

## Entity: mechanistic-interpretability
- Title: Mechanistic Interpretability
- Category: AI Theory
- Language: en
- Key Concepts: Implementation Snippet, Mechanistic Interpretability, Mathematical Core, Residual Stream:, Importance for AI Safety, Related Topics, Detecting Deception:, Key Methodology, Superposition Hypothesis:, Model Editing (ROME/MEMIT):, Activation Patching:, Induction Heads:, Sparse Autoencoders (SAE):, Alignment Verification:, Logit Lens:
- References: attention-mechanisms, constitutional-ai, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, chain-of-thought, circuit-discovery, constitutional-ai, induction-heads, language-models/safety/rlhf-dpo, llm, math/godel-incompleteness, mixture-of-experts, neural-scaling-laws, pac-learning, probing-classifiers, rlhf, slm, sparse-autoencoders, superposition

## Entity: meta-learning
- Title: Meta-Learning
- Category: AI Theory
- Language: en
- Key Concepts: second-order derivatives, Limitations:, in-context learning (ICL), Matching Networks, Reptile, Meta-Learning and In-Context Learning, Applications and Limitations, Model-Agnostic Meta-Learning (MAML), Formal Setup, Alternative Meta-Learners, First-Order MAML (FOMAML):, Algorithm:, Prototypical Networks, Applications:
- References: attention-mechanisms, chain-of-thought, convex-optimization, llm, neural-scaling-laws, reinforcement-learning, rlhf, transformer-architecture
- Backlinks: prompt-engineering

## Entity: model-based-rl
- Title: Model-Based Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: Related Topics, MBPO: Model-Based Policy Optimization, Dreamer / DreamerV3, World Models, Model-based RL (MBRL), world model, Monte Carlo Tree Search (MCTS), Model Error Compounding, Probabilistic models., Dyna, MCTS and AlphaZero, Model-Free vs Model-Based, DreamerV3, Model-Based Reinforcement Learning, The Dyna Architecture
- References: offline-rl, ppo, reinforcement-learning, soft-actor-critic
- Backlinks: offline-rl, ppo, soft-actor-critic

## Entity: neural-odes
- Title: Neural ODEs
- Category: AI Theory
- Language: en
- Key Concepts: adaptive compute, Invertibility., Training difficulty., Cost., [[hamiltonian-nn|Hamiltonian Neural Networks (HNNs)]], Generative modelling., Neural SDEs., Neural PDEs., Control and reinforcement learning., Related Topics, Neural Ordinary Differential Equations, Irregularly sampled time series., Advantages of the continuous formulation, Neural ODE, ResNet
- References: ai-physics/hamiltonian-nn, automatic-differentiation, brownian-motion, hamiltonian-mechanics, pinns
- Backlinks: calculus-of-variations, generative-models, graph-neural-networks, math/ode-stability, neural-sdes-finance, operator-semigroups, reinforcement-learning, state-space-models, variational-autoencoders

## Entity: nerf
- Title: Neural Radiance Fields (NeRF)
- Category: AI Theory
- Language: en
- Key Concepts: Instant-NGP, 4. Limitations and Evolution, A. Positional Encoding, Neural Radiance Fields (NeRF): Synthesizing 3D from 2D, Volume Rendering, Output, 3. The NeRF Pipeline, Related Topics, 1. The Core Concept: Volumetric Rendering, Neural Radiance Fields (NeRF), Speed, Inference, Input, 2. Key Innovations, Capture
- References: 3d-gaussian-splatting, manifold-learning, positional-encodings, transformer-architecture
- Backlinks: 3d-gaussian-splatting, neural-radiance-fields-math

## Entity: neural-scaling-laws
- Title: Neural Scaling Laws
- Category: AI Theory
- Language: en
- Key Concepts: Log-linear reliability:, IsoFLOP curves., Prerequisites, Training loss vs. compute curves., Architecture dependence., Related Topics, Python Implementation, How It Works, Performance prediction:, Kaplan et al. (2020) scaling laws., Applications, model size and token count should scale equally, Key Results & Properties, Inference-time scaling (test-time compute)., Emergent abilities.
- References: attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, pac-learning
- Backlinks: ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, automatic-differentiation, bayesian-deep-learning, bitnet, contrastive-learning, curriculum-learning, diffusion-models, gaussian-processes, learnable-activations, llm, meta-learning, mixture-of-experts, pac-learning, positional-encodings, quantization, reasoning-models, rlhf, slm, test-time-scaling, training-dynamics, transformer-architecture

## Entity: ai-theory/neural-tangent-kernel
- Title: Neural Tangent Kernel
- Category: AI Theory
- Language: en
- Key Concepts: feature learning regime, Mean field theory, Finite-Width Corrections and Mean Field Theory, what happens to the function dynamics as the network width (number of hidden units) $m \to \infty$?, Kernel Regime vs. Feature Learning Regime, at infinite width, this kernel becomes deterministic and constant in time, Gradient Flow in Function Space, Convergence Guarantees and Over-Parameterization, PAC-style guarantees, Practical Implications, lazy training regime, Width requirements:, Connection to Gaussian Processes, Learning rate scaling:, decays exponentially
- References: ai-theory/in-context-learning, attention-mechanisms, automatic-differentiation, convex-optimization, finance/shannon-entropy, gaussian-processes, math/concentration-inequalities, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: neural-radiance-fields-math, ntk, statistical-mechanics-learning

## Entity: offline-rl
- Title: Offline Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: CQL, Autonomous driving., Healthcare., The Distributional Shift Problem, Dataset Quality Matters, Related Topics, Conservative Q-Learning (CQL), Implicit Q-Learning (IQL), IQL, Applications, Offline RL, Decision [[transformer-architecture|Transformer]], Offline Reinforcement Learning, Finance., batch RL
- References: deep-rl-execution, model-based-rl, reinforcement-learning, soft-actor-critic, transformer-architecture
- Backlinks: model-based-rl, soft-actor-critic

## Entity: pac-learning
- Title: PAC Learning & VC Dimension
- Category: AI Theory
- Language: en
- Key Concepts: Generalisation bounds., Computational complexity., Scientific learning:, Fundamental Theorem of Statistical Learning., Theoretical foundation for SVMs:, Bias-variance decomposition., PAC Learning & VC Dimension, Deep learning gap., Deep learning paradox:, Sample complexity with VC dimension:, Active learning:, Lower bounds:, Rademacher complexity., Related Topics, Python Implementation
- References: finance/shannon-entropy, kolmogorov-complexity, mechanistic-interpretability, neural-scaling-laws
- Backlinks: ai-theory/adversarial-examples, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, code-models, contrastive-learning, empirical-processes, kolmogorov-complexity, neural-scaling-laws, sparse-autoencoders, statistical-mechanics-learning, vlm

## Entity: probing-classifiers
- Title: Probing Classifiers
- Category: AI Theory
- Language: en
- Key Concepts: Linear vs Nonlinear Probes, Representation quality metrics., CKA (Centered Kernel Alignment):, Probing classifiers, Related Topics, Bias detection., probes, probing selectivity, Applications, Linguistic structure in LLMs., The MDL probe, Representation vs computation., Setup, Layer-Wise Analysis in BERT, Linear probes
- References: activation-patching, attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, sparse-autoencoders

## Entity: ppo
- Title: Proximal Policy Optimization (PPO)
- Category: AI Theory
- Language: en
- Key Concepts: Hyperparameters, Generalized Advantage Estimation (GAE), Proximal Policy Optimization (PPO), PPO vs TRPO, Related Topics, PPO-Clip, Motivation: The Policy Update Problem, Games., Training Dynamics, TRPO, GAE, Full PPO Loss, Applications, Continuous control., [[rlhf]] / [[llm]] alignment.
- References: finance/shannon-entropy, llm, model-based-rl, reinforcement-learning, rlhf, soft-actor-critic
- Backlinks: model-based-rl, soft-actor-critic

## Entity: rlhf
- Title: RLHF (Reinforcement Learning from Human Feedback)
- Category: AI Theory
- Language: en
- Key Concepts: Three-Stage Pipeline, Multi-Objective Alignment:, [[dpo]]: Direct Preference Optimization, Open Problems, alignment tax, Stage 3: PPO Optimization, Advantages:, Why RLHF Works: Human Preference as Orthogonal Signal, Disadvantages:, Why KL Regularization: Preventing Reward Hacking, Alignment Tax: Capability-Alignment Tradeoff, Preference Data Quality:, Reward Model Generalization:, training on human preferences contains information orthogonal to model scale, Stage 1: Supervised [[fine-tuning]] (SFT)
- References: chain-of-thought, dpo, finance/shannon-entropy, fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, reinforcement-learning, transformer-architecture
- Backlinks: causal-inference, chain-of-thought, constitutional-ai, dpo, evaluation-llms, f-divergences, fine-tuning, language-models/safety/rlhf-dpo, llm, mechanism-design, meta-learning, orm-prm, ppo, preference-optimization, preference-optimization-variants, prm, prompt-engineering, reasoning-models, reinforcement-learning, soft-actor-critic, synthetic-data-alignment

## Entity: reinforcement-learning
- Title: Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: Classical Algorithms, Model-based, On-policy, Off-policy, Games., Value Functions and the Bellman Equation, UCB / Thompson sampling, Markov Decision Process (MDP), Resource optimisation., Intrinsic curiosity, Q-learning., Deep Reinforcement Learning, Boltzmann exploration, Markov property, Policy Gradient.
- References: automatic-differentiation, deep-rl-execution, neural-odes, optimal-execution, rl-trader, rlhf
- Backlinks: agents, constitutional-ai, decision-theory, deep-hedging, deep-rl-execution, fixed-point-theorems, math/discrete-markov-chains, math/optimal-stopping-markov, mdp, meta-learning, model-based-rl, offline-rl, online-learning-regret, path-integral-control, ppo, rlhf, soft-actor-critic, stochastic-control, stochastic-control-partial-info, tool-use

## Entity: bellman-equations
- Title: Reinforcement Learning: Bellman Equations
- Category: AI Theory
- Language: en
- Key Concepts: Bellman Expectation Equation, Bellman Optimality Equation

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
- Key Concepts: Soft Bellman Equations, Maximum [[shannon-entropy|Entropy]] Objective
- References: finance/shannon-entropy

## Entity: representation-theory-ml
- Title: Representation Theory for Machine Learning
- Category: AI Theory
- Language: en
- Key Concepts: Group Actions and Equivariance, Tensor Products and Clebsch-Gordan Coefficients, Representation Theory for Machine Learning, $SO(3)$ and $SE(3)$ Representations
- References: equivariant-nn

## Entity: soft-actor-critic
- Title: Soft Actor-Critic (SAC)
- Category: AI Theory
- Language: en
- Key Concepts: Twin critics, Energy systems., Critic Loss, Related Topics, Maximum [[shannon-entropy|Entropy]] RL, Soft Actor-Critic (SAC), Finance., Reparameterization Trick, Automatic Entropy Tuning, Soft Bellman Equations, Actor Loss, MBPO., Sample Efficiency vs PPO, Robotics., Applications
- References: finance/shannon-entropy, model-based-rl, offline-rl, ppo, reinforcement-learning, rlhf
- Backlinks: model-based-rl, offline-rl, ppo

## Entity: sparse-autoencoders
- Title: Sparse Autoencoders (SAE)
- Category: AI Theory
- Language: en
- Key Concepts: Sparse Autoencoders (SAE), Steering vectors:, Feature splitting:, Monosemanticity score:, monosemantic, Training pipeline., Anthropic Claude SAEs (2024):, Model comparison:, Prerequisites, Reconstruction-sparsity tradeoff., Dictionary learning objective., Superposition geometry:, Evaluation metrics:, Related Topics, Knowledge localisation:
- References: finance/shannon-entropy, llm, mechanistic-interpretability, pac-learning, transformer-architecture
- Backlinks: circuit-discovery, generative-models, learnable-activations, mechanistic-interpretability, probing-classifiers, superposition, variational-autoencoders

## Entity: state-space-models
- Title: State Space Models (SSM)
- Category: AI Theory
- Language: en
- Key Concepts: HiPPO: Long-Range Polynomial Approximation, Mamba: Selective SSM, with linear constant factors, Comparison: SSM vs. Attention, Time series, S4: Structured State Matrices, HiPPO, polynomial basis projection, Structured State Space Duality, Zero-Order Hold, $\sim 1000\times$ speedup, parallel prefix scan, Explicit diagonalization, Mamba-2: Structured State Space Duality, Control & robotics
- References: attention-mechanisms, kalman-filter, llm, math/spectral-theory-operators, mixture-of-experts, neural-odes, nonlinear-filtering, transformer-architecture
- Backlinks: attention-kernel, context-length

## Entity: superposition
- Title: Superposition & Linear Representation
- Category: AI Theory
- Language: en
- Key Concepts: Sparse Autoencoders (SAE), What Is It, Related Topics, more features than it has dimensions, polysemantic, Detecting Deception, polytopes, Superposition, Superposition and Linear Representation, The Toy Model of Superposition, Visualizing Dimension vs. Features, Implications for AI Safety, Mathematical Framework, Polysemanticity, Uncovering Hidden Capabilities
- References: activation-patching, llm, mechanistic-interpretability, sparse-autoencoders

## Entity: transformer-architecture
- Title: Transformer Architecture
- Category: AI Theory
- Language: en
- Key Concepts: 3. Positional Embeddings: Giving Time to Space, Feed-Forward Network (FFN), 1. The Core Components, 4. The Softmax Bottleneck, Pre-Norm, Post-Norm, Stability, Decoder-Only (GPT), Related Topics, Sinusoidal, Relative Distance, [[attention-mechanisms|Attention]] Layer, The Bottleneck, RoPE (Rotary Positional Embeddings), Encoder-Only (BERT)
- References: attention-mechanisms, mixture-of-experts, neural-scaling-laws
- Backlinks: 3d-gaussian-splatting, activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-mechanisms, bitnet, chain-of-thought, circuit-discovery, code-models, context-length, contrastive-learning, course-math-for-ai, decision-transformers, deep-hedging, diffusion-models, embedding-models, equivariant-nn, finance/transformer-timeseries, fine-tuning, fraud-detection, gnn-credit-risk, gpt-architecture, graph-neural-networks, induction-heads, inference-serving, kan, kolmogorov-arnold-theorem, language-models/mamba-ssm, learnable-activations, linear-algebra, llm, logistic-regression, lora-peft, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/godel-incompleteness, mechanistic-interpretability, meta-learning, mixture-of-depths, mixture-of-experts, model-parallelism, moe-routing, multi-token-prediction, nerf, neural-radiance-fields-math, news-sentiment-trading, nlp-financial-analysis, offline-rl, portfolio-optimization-ml, positional-encodings, quantization, rlhf, rope-scaling, slm, sparse-autoencoders, state-space-models, temporal-fusion-transformer, tokenization, training-dynamics, universal-approximation-theory, vector-databases, vision-transformers, vlm, volatility-forecasting

## Entity: variational-autoencoders
- Title: Variational Autoencoders (VAE)
- Category: AI Theory
- Language: en
- Key Concepts: The Reparameterization Trick, Theoretical Significance, discrete, Related Articles, Stable Diffusion, β-VAE, decoder, Extensions and Applications, Connection to Diffusion Models, Interpretation:, The Evidence Lower Bound (ELBO), Closed-Form KL Divergence, disentangled, VQ-VAE, encoder
- References: automatic-differentiation, convex-optimization, diffusion-models, generative-models, math/kolmogorov-probability-axioms, neural-odes, sparse-autoencoders, statistical-mechanics
- Backlinks: bayesian-deep-learning, bayesian-inference, change-of-variables, contrastive-learning, convexity, diffusion-models, information-theory-basics, jensens-inequality, manifold, pca, variational-inference

## Entity: vision-transformers
- Title: Vision Transformers (ViT)
- Category: AI Theory
- Language: en
- Key Concepts: [CLS] Token, Position Embeddings, Vision Transformers (ViT), ViT vs. CNNs, [[transformer-architecture|Transformer]] architecture, Related Topics, Learnable Embeddings, Python Implementation (Conceptual), Linear Projection, "An Image is Worth 16x16 Words.", [[transformer-architecture|Transformer]] Encoder, Scaling, Architecture, Inductive Bias, What Is It
- References: attention-mechanisms, contrastive-learning, transformer-architecture, vlm

## Entity: about
- Title: About Me
- Category: About Me
- Language: en
- Key Concepts: Event Manager, Risk Manager, Principal Economist at the Bank of Russia, Quantum Physics, AI in Finance, Timeline, 2024 – 2025, Principal Economist / Risk Analyst, I build quantitative models and [[llm]] agents., Methodologies, Tools, Projects, 2025 – Present, Expert, 2019 – 2022
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
- Key Concepts: Laplace's Method, Asymptotic Analysis of Integrals, Method of Stationary Phase, The Saddle-Point Method (Method of Steepest Descent)

## Entity: calculus-of-variations
- Title: Calculus of Variations
- Category: Advanced Analysis
- Language: en
- Key Concepts: Related Topics, Hamilton's Principle, Lagrangian, Principles of Physics, The Fundamental Problem, Variation and Modern AI, functionals, Variational Inference (VI), Visualization: The Shortest Path (Geodesic), Neural ODEs, Regularization, Euler-Lagrange equation, Calculus of Variations, Geodesics, Euler-Lagrange Equation
- References: functional-analysis, lagrangian-mechanics, neural-odes, variational-inference
- Backlinks: deep-ritz-method, fixed-point-theorems

## Entity: fixed-point-theorems
- Title: Fixed Point Theorems
- Category: Advanced Analysis
- Language: en
- Key Concepts: 1. Banach Contraction Principle (The Engine of Convergence), set-valued functions, 3. Schauder Fixed Point Theorem (The Engine of PDEs), unique, Related Topics, The Intuition, The Theorem, Fixed Point Theorems: The Engines of Existence, Applications, contraction mapping, existence, compact, convex set, Game Theory, 2. Brouwer Fixed Point Theorem (The Engine of Topology), Applications in AI
- References: calculus-of-variations, convexity, hilbert-banach-spaces, reinforcement-learning
- Backlinks: proximal-algorithms-admm

## Entity: fredholm-theory
- Title: Fredholm Theory
- Category: Advanced Analysis
- Language: en
- Key Concepts: Inverse Problems, Spectral Analysis, Index and Fredholm Operators, Why It Matters for AI: Neural Operators, Related Topics, Atiyah-Singer Index Theorem, kernel, Fredholm Theory, Fredholm Alternative, Fredholm operator, integral equations, Kernel Machines, The Integral Equation, Visualization: Kernel Smoothing, index
- References: fourier-neural-operators, functional-analysis, partial-differential-equations

## Entity: microlocal-analysis
- Title: Microlocal Analysis
- Category: Advanced Analysis
- Language: en
- Key Concepts: Inverse Problems, Quantum Chaos, Wave Front Set, Why It Matters, Hörmander, Related Topics, which direction, AI Interpretability, symbol, where, phase space, Visualization: Singularity Propagation, cotangent bundle, Pseudodifferential Operators ($\Psi$DO), The Wave Front Set ($WF$)
- References: schwartz-distributions, symplectic-geometry

## Entity: proximal-algorithms-admm
- Title: Proximal Algorithms & ADMM
- Category: Advanced Analysis
- Language: en
- Key Concepts: What Is It, Related Topics, ADMM: Alternating Direction Method of Multipliers, Augmented Lagrangian, The Proximal Operator, DERIVATION: Proximal Operator of the $L_1$ Norm, Alternating Direction Method of Multipliers (ADMM), Convergence, proximal operator, Proximal Gradient Method, soft-thresholding, Proximal Algorithms & ADMM
- References: convex-optimization, fixed-point-theorems

## Entity: deep-ritz-method
- Title: The Deep Ritz Method
- Category: Advanced Analysis
- Language: en
- Key Concepts: What Is It, Deep Ritz Framework, Architecture: Residual Networks, The Deep Ritz Method, Related Topics, Residual Networks (ResNets), Smoothness:, DERIVATION: Ritz Method for the Heat Equation, Advantages and High Dimensions, Handling Boundary Conditions, variational principle, The Variational Principle, Mesh-free:, Curse of Dimensionality:, Penalty Method
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
- Key Concepts: Lexical Analysis, LR(k) Parsers:, LL(k) Parsers:, Syntax Analysis (Parsing)

## Entity: p-vs-np
- Title: Complexity Theory: P vs NP and Cook-Levin
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: P vs NP problem, Formal Definitions, Cook-Levin Theorem

## Entity: cryptography-math
- Title: Cryptography: RSA and Elliptic Curves
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: RSA (Rivest-Shamir-Adleman), Elliptic Curve Cryptography (ECC)

## Entity: distributed-systems-consensus
- Title: Distributed Systems: CAP and Consensus
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Paxos Consensus, Partition tolerance:, CAP Theorem, Availability:, Consistency:

## Entity: pagerank-math
- Title: Graph Algorithms: PageRank Mathematics
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Random Surfer Model, The PageRank Equation

## Entity: strongly-connected-components
- Title: Graph Algorithms: Strongly Connected Components
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Tarjan's Algorithm, Kosaraju's Algorithm

## Entity: graph-coloring
- Title: Graph Theory: Coloring and Chromatic Number
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Bounds and Theorems, Vertex Coloring, Brooks' Theorem:, chromatic number, Four Color Theorem:

## Entity: max-flow-min-cut
- Title: Graph Theory: Max-Flow Min-Cut Theorem
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Ford-Fulkerson Algorithm, The Theorem, Max-Flow Min-Cut Theorem

## Entity: spectral-clustering
- Title: Machine Learning: Spectral Clustering
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Spectral Relaxation, Graph [[spectral-graph-theory|Laplacian]]
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
- Key Concepts: Overview, Formulation

## Entity: fractional-calculus
- Title: Analysis: Fractional Calculus
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Caputo Derivative, Riemann-Liouville Integral

## Entity: calculus-of-variations-jacobi
- Title: Calculus of Variations: Second Variation
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Jacobi Fields and Conjugate Points, The Second Variation

## Entity: instrumental-variables
- Title: Econometrics: Instrumental Variables
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Relevance:, 2SLS, Exogeneity (Exclusion Restriction):, The IV Estimator

## Entity: sobolev-embeddings
- Title: Functional Analysis: Sobolev Embeddings
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Sobolev Embedding Theorems, The Spaces

## Entity: harmonic-analysis
- Title: Harmonic Analysis: Fourier Convergence
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Carleson's Theorem:, Fourier Series, Convergence Theorems, Pointwise Convergence (Dirichlet/Jordan):, $L^2$ Convergence:
- Backlinks: complex-analysis

## Entity: admm
- Title: Optimization: Alternating Direction Method of Multipliers (ADMM)
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: ADMM Updates, Augmented Lagrangian

## Entity: dual-decomposition
- Title: Optimization: Dual Decomposition
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Iterative Updates, Dual update (gradient ascent):, Primal update (parallelizable):, The Lagrangian Relaxation

## Entity: genetic-algorithms-math
- Title: Optimization: Genetic Algorithms Mathematics
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The Schema Theorem

## Entity: interior-point-methods
- Title: Optimization: Interior Point Methods
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Barrier Functions, Primal-Dual Methods

## Entity: simulated-annealing
- Title: Optimization: Simulated Annealing
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Cooling Schedule, Metropolis-Hastings Acceptance

## Entity: bayesian-inference-exact
- Title: Probabilistic Graphical Models: Exact Inference
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Junction Tree Algorithm, Variable Elimination

## Entity: riemannian-geometry
- Title: Riemannian Geometry: Metric and Curvature
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Metric Tensor, Curvature
- References: manifold-learning

## Entity: kalman-filter-advanced
- Title: Signal Processing: Advanced Kalman Filters
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Extended Kalman Filter (EKF), Unscented Transform, Unscented Kalman Filter (UKF)

## Entity: compressed-sensing
- Title: Signal Processing: Compressed Sensing
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: L1 Minimization, The Problem

## Entity: hidden-markov-models
- Title: Signal Processing: Hidden Markov Models
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The Viterbi Algorithm, Model Parameters
- Backlinks: avellaneda-stoikov, bayesian-black-litterman, conditionally-gaussian-processes, convex-optimization-trading, finance/cointegration, finance/credit-migration, finance/hurst-exponent, finance/lempel-ziv-complexity, finance/multivariate-hmm, finance/particle-filter, finance/phase-space-reconstruction, finance/shannon-entropy, finance/transformer-timeseries, kalman-filter, math/discrete-markov-chains, math/kolmogorov-equations-ctmc, math/martingale-representation, math/sequential-hypothesis-testing, math/stochastic-recursive-sequences, model-free-rl-factors, nonlinear-filtering, numeraire-invariant-hedging, ornstein-uhlenbeck-process, regime-switching-factors, sharpe-ratio-statistics, student-t-hmm-bond-regimes, survival-risk-prediction, ts-cs-factor-analysis

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
- Key Concepts: Orthogonality Principle, Wiener-Hopf Equation

## Entity: gmm-estimation
- Title: Statistics: Generalized Method of Moments (GMM)
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The GMM Objective, Moment Conditions

## Entity: arch-garch
- Title: Time Series: ARCH and GARCH Models
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: ARCH(q), GARCH(p, q)

## Entity: cointegration-johansen
- Title: Time Series: Cointegration & Johansen Test
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Error Correction Model (ECM), Johansen Test

## Entity: differential-forms
- Title: Differential Forms & Exterior Calculus
- Category: Advanced Theory
- Language: en
- Key Concepts: Exterior Derivative, Generalized Stokes' Theorem, exact, Wedge Product, closed
- References: manifold-learning

## Entity: fluid-dynamics
- Title: Fluid Dynamics: Navier-Stokes Foundations
- Category: Advanced Theory
- Language: en
- Key Concepts: Momentum Equation, Conservation of Mass (Continuity)

## Entity: functional-analysis
- Title: Functional Analysis: Hilbert Spaces & Operators
- Category: Advanced Theory
- Language: en
- Key Concepts: Spectral Theorem, Hilbert Spaces and Riesz Representation, Riesz Representation Theorem
- Backlinks: calculus-of-variations, complex-analysis, fredholm-theory, hilbert-banach-spaces, math/algebraic-topology, math/differential-geometry, math/differentiation-of-measures, math/harmonic-analysis, math/lp-spaces, math/nonparametric-regression, math/ode-stability, math/spectral-theory-operators, math/topology-basics, spectral-theorem-unbounded

## Entity: galois-theory
- Title: Galois Theory: Fields and Solvability
- Category: Advanced Theory
- Language: en
- Key Concepts: Galois extension, Solvability by Radicals, solvable group, Field Extensions and Automorphisms, The Fundamental Theorem

## Entity: general-relativity
- Title: General Relativity: Einstein Field Equations
- Category: Advanced Theory
- Language: en
- Key Concepts: Einstein Field Equations, Schwarzschild Metric
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, hawking-radiation, information-paradox, lie-algebras-physics, manifold, math/non-euclidean-geometry

## Entity: hamiltonian-mechanics
- Title: Hamiltonian Mechanics & Poisson Brackets
- Category: Advanced Theory
- Language: en
- Key Concepts: The Hamiltonian, Poisson Brackets
- References: quantization
- Backlinks: generative-models, mcmc, neural-odes, noether-theorem, path-integral

## Entity: lagrangian-mechanics
- Title: Lagrangian Mechanics & Euler-Lagrange
- Category: Advanced Theory
- Language: en
- Key Concepts: The Action Principle, Euler-Lagrange Equations
- Backlinks: calculus-of-variations, math/variational-calculus, maxwell-electromagnetism, noether-theorem, path-integral

## Entity: measure-theoretic-probability
- Title: Measure-Theoretic Probability & Martingales
- Category: Advanced Theory
- Language: en
- Key Concepts: Radon-Nikodym Theorem, martingale, Probability Spaces, Martingales

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
- Key Concepts: Overview, Properties, Optimal Substructure:, Overlapping Subproblems:

## Entity: alpha-factor-discovery
- Title: Alpha Factor Discovery
- Category: Algorithms and ML
- Language: en
- Key Concepts: Non-linearity, Transaction costs, Genetic Programming (GP), Universality, Deep Feature Learning, Orthogonality, Factor Attribution, Alpha Factor Discovery & Mining, IC Decay Profile, Related Topics, Alpha Factor Discovery, Python Implementation, Non-stationarity, Alpha Decay Monitoring, Overfitting
- References: bayesian-black-litterman, finance/alpha-stacking, finance/gan, finance/monte-carlo-method, mcmc
- Backlinks: alpha-orthogonalization, alternative-data-alpha, finance/alpha-stacking, finance/lightgbm-xgboost, finance/meta-labeling, finance/online-learning-mab, finance/shap-interpretability, model-free-rl-factors

## Entity: alpha-orthogonalization
- Title: Alpha Orthogonalization
- Category: Algorithms and ML
- Language: en
- Key Concepts: Currency Neutral, Alpha Decay Analysis, Market Neutral, 1. Residualization, Why Orthogonalization is Critical, Related Topics, Gram-Schmidt process, The Mathematical Process, True Capacity, Performance Attribution, 2. Risk Neutralization, Residual, Sector Neutral, Neutral, decay rate
- References: alpha-factor-discovery, finance/factor-attribution, pca
- Backlinks: causal-inference-trading, pca-statarb

## Entity: alternative-data-alpha
- Title: Alternative Data Alpha
- Category: Algorithms and ML
- Language: en
- Key Concepts: Agriculture, Lead Time, [[mcmc]], Macro, Exclusivity, Consumer Sector, Related Topics, [[gan]]-based augmentation, Python Implementation, NLP + alt-data fusion, Key Metrics, Information Decay, Lead-lag structure, Survivorship and selection bias, Alternative Data Alpha
- References: alpha-factor-discovery, finance/alpha-stacking, finance/gan, finance/value-at-risk, mcmc, news-sentiment-trading
- Backlinks: news-sentiment-trading

## Entity: causal-inference-trading
- Title: Causal Inference in Trading
- Category: Algorithms and ML
- Language: en
- Key Concepts: Related Topics, Control, 1. Directed Acyclic Graphs (DAGs), Policy Evaluation, Structural Causal Model (SCM), Alpha Orthogonalization, Why Citadel uses Causal AI, Visualization: The Confounder Trap, Tools of the Trade, 2. The Do-Calculus (Judea Pearl), Causal Inference in Trading, 3. Granger Causality vs. True Causality, Natural Experiments, Confounders and Spurious Alphas, Granger Causality
- References: alpha-orthogonalization, causal-inference, finance/probability-of-backtest-overfitting
- Backlinks: causal-inference-do-calculus

## Entity: finance/cointegration
- Title: Cointegration
- Category: Algorithms and ML
- Language: en
- Key Concepts: Testing., The error correction model (ECM), error correction representation, Structural breaks, Integration and spurious regression, vector error correction model (VECM), Spurious regression (Granger and Newbold, 1974)., cointegrating rank, error correction term, Yield curve modelling., Near-integration., Overfitting in pairs trading., Applications in finance, adjustment speeds, Portfolio construction.
- References: arima-models, central-limit-theorem, copula-models, finance/value-at-risk, hidden-markov-models, kalman-filter, math/law-of-large-numbers, math/spectral-theory-operators
- Backlinks: arima-models, pairs-trading

## Entity: convolutional-volatility-resolution-clustering
- Title: Convolutional Volatility Resolution Clustering (CVRC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Unsupervised, Prerequisites, Volatility Regime Clusters, Adversarial regime generation, Regime Cluster Characteristics, Structural Contagion, Non-Stationary Risk Modeling, Graph neural networks, Layer 1, Temporal CNN (TCN), Deep Embedding Clustering (DEC), Related Topics, volatility resolution clusters, Python Implementation, Multi-scale
- References: arch-models, finance/gan, finance/spectral-analysis, garch-models, manifold-learning, volatility-forecasting, volatility-modulated-spectral-surface, wavelet-transform

## Entity: deep-galerkin
- Title: Deep Galerkin Method (DGM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Neural Network, The Core Idea: PDE as a Loss Function, Continuous Solution, Curse of Dimensionality, Optimization, Autograd, Related Topics, How It Works, Deep Galerkin Method (DGM), High Dimensions, Automatic Differentiation, Sampling, Deep Galerkin Method (DGM) in Finance, Visualization: The Curse Broken, Why Tier-1 Quants Use It
- References: automatic-differentiation, black-scholes, convex-optimization, neural-sdes-finance, numerical-pde-finance
- Backlinks: deep-ritz-method, schwartz-distributions

## Entity: deep-hedging
- Title: Deep Hedging
- Category: Algorithms and ML
- Language: en
- Key Concepts: Global Optimization, Convex Risk Measure, Related Topics, Continuous Trading, Deep Hedging: Reinforcement Learning for Derivatives, Complete Markets, Visualization: BS Delta vs. Deep Hedging, Model-Agnostic, The Deep Hedging Approach, 2. The Neural Network, 1. The Objective Function, market frictions, Buehler et al. (2019), Universal, Friction-Aware
- References: finance/delta-hedging-practice, finance/rough-volatility, reinforcement-learning, transformer-architecture

## Entity: fama-macbeth-regression
- Title: Fama-MacBeth Regression
- Category: Algorithms and ML
- Language: en
- Key Concepts: Academic asset pricing, Characteristic-based models, Generated regressors, Fama-MacBeth regression, Smart beta validation, Shanken correction, Step 2: Cross-Sectional Regressions (Risk Premia), Related Topics, Python Implementation, Pricing factor discovery, Final Estimate, Non-stationarity, Limitations and Extensions, Portfolios instead of individual assets, Why Fama-MacBeth Standard Errors Work
- References: black-scholes, finance/hierarchical-risk-parity, mcmc, portfolio-optimization-ml, ts-cs-factor-analysis
- Backlinks: causal-inference, finance/apt-ross, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, ts-cs-factor-analysis

## Entity: finance/gan
- Title: GANs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Python: Conceptual Training Loop, WGAN, Risk management (VaR/ES), Privacy-preserving analytics, Evaluation difficulty, Cross-asset dependencies, GAN Architecture, Stylised Facts the GAN Must Capture, Synthetic time series generation, Absence of linear autocorrelation, Generative Adversarial Networks (GANs), FinGAN, Training instability, Applications in Quant Finance, Related Topics
- References: finance/monte-carlo-method, finance/value-at-risk, fraud-detection, heston-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, convolutional-volatility-resolution-clustering, f-divergences, finance/adversarial-stress-testing, fraud-detection, lob-prediction, news-sentiment-trading, portfolio-optimization-ml, timegan, volatility-modulated-spectral-surface

## Entity: finance/gnn-finance
- Title: Graph Neural Networks in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Graph Neural Networks in Finance, Implementation, GNNs (Graph Neural Networks), Financial Applications, Graph Convolutional Networks (GCN), Graph [[attention-mechanisms|Attention]] Networks (GAT), Related Articles
- References: attention-mechanisms, finance/eigenportfolio-rmt, finance/systemic-contagion-debtrank, finance/transformer-timeseries, fraud-detection

## Entity: finance/hidden-markov-models
- Title: Hidden Markov Models (HMM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Dynamic asset allocation, Emission Distribution $B$, Fixed number of states, Trading Applications, Hidden Markov Model (HMM), Transition Matrix $A$, market regime detection, Adaptive strategies, Related Topics, 2. Decoding (Viterbi Algorithm), Hidden Markov Models (HMM), Limitations and Extensions, First-order assumption, Multivariate HMMs, Python: Detecting Market Regimes
- References: avellaneda-stoikov, finance/phase-space-reconstruction, finance/shannon-entropy, garch-models, kalman-filter

## Entity: finance/lightgbm-xgboost
- Title: LightGBM and XGBoost for Factor Signals
- Category: Algorithms and ML
- Language: en
- Key Concepts: Temporality, LightGBM and XGBoost for Factor Signals, Gradient Boosting, Related Articles, Implementation, LightGBM, XGBoost, Financial Data Challenges, Overfitting Controls, Non-stationarity, Class imbalance
- References: alpha-factor-discovery, finance/probability-of-backtest-overfitting, finance/shap-interpretability, finance/transformer-timeseries
- Backlinks: finance/shap-interpretability, finance/transformer-timeseries

## Entity: lob-prediction
- Title: Limit Order Book (LOB) Prediction
- Category: Algorithms and ML
- Language: en
- Key Concepts: Execution Algorithms, Market Making, Realized volatility, Micro-Price Correlation, Level-1 Features (Best Bid/Ask), Mid-price return, Adverse selection, Order imbalance $OI_t$, Precision/Recall, Related Topics, Key Features for LOB Prediction, Python: Full LOB Feature Engineering, Multi-Level Features, Queue imbalance, Non-stationarity
- References: finance/gan, finance/market-impact-scaling, finance/value-at-risk, model-free-rl-factors, optimal-execution
- Backlinks: deep-rl-execution, finance/market-impact-scaling, finance/order-flow-imbalance, finance/transformer-timeseries

## Entity: finance/longstaff-schwartz
- Title: Longstaff-Schwartz Method (LSM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Final Pricing, Simplicity, Prerequisites, Continuation value, Stochastic rates/volatility, LSM Algorithm Steps, Forward Pass, Exercise Now, Visualization: Exercise vs. Continuation, The Challenge of American Options, Related Topics, Terminal Value, Longstaff-Schwartz Method, Optimal stopping boundaries, Advantages
- References: black-scholes, finance/monte-carlo-method, heston-model, numerical-pde-finance, ornstein-uhlenbeck-process
- Backlinks: convertible-bonds, finance/barrier-asian-options, finance/follmer-schweizer, finance/free-boundary-american, finance/monte-carlo-method, finance/oas, numerical-pde-finance

## Entity: finance/meta-labeling
- Title: Meta-Labeling Framework
- Category: Algorithms and ML
- Language: en
- Key Concepts: Trend Following, Prerequisites, Addresses Overfitting, Position sizing, Triple barrier labeling, Financial Application, Improved F1-Score, Background and Motivation, Related Topics, Benefits, Arbitrage, How It Works, Secondary Model, Meta-Labeling, Python: Full Meta-Labeling Pipeline
- References: alpha-factor-discovery, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/random-matrix-theory
- Backlinks: finance/alpha-stacking, finance/probability-of-backtest-overfitting, model-free-rl-factors, news-sentiment-trading

## Entity: model-free-rl-factors
- Title: Model-Free RL for Factor Portfolios
- Category: Algorithms and ML
- Language: en
- Key Concepts: Policy Gradient Methods (PPO/DDPG), Transaction costs, Differential Sharpe Ratio, Prerequisites, Python: Dynamic Factor Allocation with Stable Baselines3, Multi-objective, Action Space, Challenges and Validation, Background and Motivation, Related Topics, Model-Free Reinforcement Learning (RL), DDPG (Deep Deterministic Policy Gradient), PPO (Proximal Policy Optimization), Non-stationarity, Limitations and Extensions
- References: alpha-factor-discovery, black-scholes, finance/hierarchical-risk-parity, finance/meta-labeling, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/shannon-entropy, hidden-markov-models, mcmc, rl-trader
- Backlinks: finance/online-learning-mab, finance/probability-of-backtest-overfitting, lob-prediction, portfolio-optimization-ml

## Entity: finance/monte-carlo-method
- Title: Monte Carlo Method
- Category: Algorithms and ML
- Language: en
- Key Concepts: Simplicity, Pros and Cons, 1. Antithetic Variates, 4. Stratified Sampling, Discount, Related Topics, 2. Control Variates, Quasi-MC, Background and History, Limitations and Extensions, Python: Vectorized Asian Option Pricing with Variance Reduction, Multidimensionality, Generate Random Paths, Steps in Option Pricing, Accuracy and Convergence
- References: black-scholes, finance/longstaff-schwartz, finance/particle-filter, finance/quasi-monte-carlo, finance/value-at-risk, inference-serving, mcmc, qft-basic
- Backlinks: alpha-factor-discovery, automatic-differentiation, avellaneda-stoikov, black-scholes, bootstrap, brownian-bridge, convertible-bonds, copula-models, finance/adversarial-stress-testing, finance/barrier-asian-options, finance/black-swan-scenarios, finance/follmer-schweizer, finance/free-boundary-american, finance/gan, finance/hawkes-process, finance/levy-processes, finance/libor-market-model, finance/longstaff-schwartz, finance/market-impact-scaling, finance/meta-labeling, finance/nash-equilibrium, finance/oas, finance/particle-filter, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/sha-256, finance/shor-algorithm, finance/systemic-contagion-debtrank, finance/value-at-risk, finance/xva, fraud-detection, gaussian-processes, generative-models, generative-scenario-models, kelly-criterion, lln-clt, math/sde-numerical-methods, model-free-rl-factors, numerical-pde-finance, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, qft-basic, quantum-amplitude-estimation, risk-neutral-valuation, rl-trader, volatility-forecasting

## Entity: finance/multivariate-hmm
- Title: Multivariate Hidden Markov Models
- Category: Algorithms and ML
- Language: en
- Key Concepts: Posteriors, Forward, Initial distribution, Interpretation, Model Selection, Related Articles, Baum-Welch (EM) Algorithm, Implementation, Multivariate Hidden Markov Models, Transition matrix, Multivariate HMM, Gaussian emission, Model Structure, M-step, E-step: Forward-Backward
- References: copula-models, hidden-markov-models, kalman-filter, regime-switching-factors, volatility-forecasting

## Entity: finance/nash-equilibrium
- Title: Nash Equilibrium
- Category: Algorithms and ML
- Language: en
- Key Concepts: Rationality assumption, Market Making as a Game, Market Microstructure, Related Topics, Mixed Strategy, Best Response, Background and History, Auction Theory, Oligopoly Models, Dynamic games, Limitations and Extensions, Computing Mixed Strategy Equilibria, Pure Strategy, Multiple equilibria, Evolutionary game theory
- References: avellaneda-stoikov, finance/adversarial-stress-testing, finance/market-impact-scaling, finance/monte-carlo-method, optimal-execution
- Backlinks: finance/systemic-contagion-debtrank

## Entity: neural-sdes-finance
- Title: Neural SDEs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Drift Network, continuous-time generative model, Model Discovery, Related Topics, High-Dimensional Pricing, Neural Stochastic Differential Equations (Neural SDEs), Training via Adjoint Sensitivity, Path-Dependency, Applications, Why Use Neural SDEs?, Neural SDEs in Finance, Generative Market Simulation, The Adjoint Method, Calibration, Stochastic Re-parameterization
- References: finance/rough-volatility, finance/volatility-surface, neural-odes, stochastic-differential-equations
- Backlinks: deep-galerkin, path-dependent-volatility, timegan

## Entity: news-sentiment-trading
- Title: News Sentiment Trading System
- Category: Algorithms and ML
- Language: en
- Key Concepts: Signal Generation, Event-Driven Hedge Funds, Signal decay model, Market impact, Lexicon-based, Signal Decay, Background and Motivation, NLP Pipeline Components, Data Ingestion, BERT/FinBERT, Python: Full Sentiment Pipeline, Related Topics, Regulatory risk, Aspect-Based Sentiment, Limitations and Extensions
- References: alternative-data-alpha, finance/gan, finance/meta-labeling, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: alternative-data-alpha, llm-financial-analysis

## Entity: numerical-pde-finance
- Title: Numerical PDE Methods in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Exotic path-dependent, Real-time risk, Grid Construction, Second-order in both space and time, Comparison: PDE vs Trees vs Monte Carlo, tridiagonal, Greeks, Finite Difference Schemes, Python: Crank-Nicolson for European Put, American option pricing, backward in time, Multi-Asset: ADI Methods, Alternating Direction Implicit, Related Topics, American Options: Free Boundary Problem
- References: black-scholes, convertible-bonds, finance/longstaff-schwartz, finance/monte-carlo-method, finance/optimal-stopping-american, partial-differential-equations
- Backlinks: black-scholes, deep-galerkin, feynman-kac, finance/longstaff-schwartz, neural-operators, stochastic-control

## Entity: finance/online-learning-mab
- Title: Online Learning and Multi-Armed Bandits
- Category: Algorithms and ML
- Language: en
- Key Concepts: Problem and Regret, Online Learning and Multi-Armed Bandits, Related Articles, Lai-Robbins lower bound, Multi-Armed Bandit (MAB), Implementation, UCB1 achieves, cumulative regret, UCB (Upper Confidence Bound), Thompson Sampling, Exp3 for Adversarial Environments
- References: alpha-factor-discovery, model-free-rl-factors, rl-trader

## Entity: finance/alpha-stacking
- Title: Orthogonal Alpha Stacking
- Category: Algorithms and ML
- Language: en
- Key Concepts: Factor Neutralization, Prerequisites, Signal Correlation Before/After Residualization, Regularization, Risk Management, Related Topics, Proprietary Trading, Python Implementation, Order dependence in Gram-Schmidt, Non-stationarity, Robust PCA / [[random-matrix-theory]], Cross-sectional vs. time-series, Multi-Factor Models, ICIR-weighted, Multi-Signal Gram-Schmidt
- References: alpha-factor-discovery, convex-optimization-trading, finance/hierarchical-risk-parity, finance/meta-labeling, finance/random-matrix-theory
- Backlinks: alpha-factor-discovery, alternative-data-alpha, finance/apt-ross, finance/asymptotic-arbitrage-large-markets

## Entity: finance/particle-filter
- Title: Particle Filter (SMC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Online Parameter Estimation, Linearity, Prerequisites, Resample, Degeneracy, SMC², Effective Sample Size, Predict, Normalize, Computation, For each time step $t = 1, 2, \ldots$:, Risk Management, Transition equation, Regime Detection, Background and Motivation
- References: finance/monte-carlo-method, heston-model, hidden-markov-models, mcmc, ornstein-uhlenbeck-process
- Backlinks: conditionally-gaussian-processes, finance/heston-model, finance/monte-carlo-method, finance/phase-space-reconstruction, kalman-filter, nonlinear-filtering, pairs-trading

## Entity: fastest-mean-reversion
- Title: Portfolios of Fastest Mean Reversion
- Category: Algorithms and ML
- Language: en
- Key Concepts: Fastest Mean Reversion, Related Topics, smallest generalized eigenvalue, The Mathematical Objective, Rayleigh Quotient, Ornstein-Uhlenbeck (OU) process, Sparse Mean-Reverting Portfolios, Sparse PCA, Portfolios of Fastest Mean Reversion, The Box-Tiao / Generalized Eigenvalue Approach, speed of mean reversion, Visualization: Reversion Speed, $L_1$-regularization (LASSO), Sparse Portfolio
- References: ornstein-uhlenbeck-process, pairs-trading, pca
- Backlinks: pca-statarb

## Entity: finance/probability-of-backtest-overfitting
- Title: Probability of Backtest Overfitting
- Category: Algorithms and ML
- Language: en
- Key Concepts: Dependent strategies, The "Silent Killer" of Quant Funds, Background and Motivation, Related Topics, Minimum backtest length, Walk-forward validation, Non-stationarity, Limitations and Extensions, Out-of-Sample (OOS), Haircut Sharpe Ratio, Selection Bias under Multiple Testing, In-Sample (IS), Combinatorially Symmetric Cross-Validation (CSCV), CSCV, silent killer
- References: finance/meta-labeling, finance/monte-carlo-method, finance/value-at-risk, model-free-rl-factors
- Backlinks: bayesian-black-litterman, causal-inference-trading, convex-optimization-trading, finance/lightgbm-xgboost, finance/meta-labeling, finance/shap-interpretability, model-free-rl-factors, numeraire-invariant-hedging, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, timegan, ts-cs-factor-analysis

## Entity: finance/quasi-monte-carlo
- Title: Quasi-Monte Carlo Methods
- Category: Algorithms and ML
- Language: en
- Key Concepts: The Koksma-Hlawka inequality, effective dimension in the superposition sense, Sobol' sequence., Effective dimension and ANOVA, Quasi-Monte Carlo Methods, Option pricing., effective dimension, star discrepancy, ANOVA decomposition, Calibration., Applications in finance, variation of $f$ in the sense of Hardy and Krause, QMC vs MC convergence, Niederreiter-Xing., low-discrepancy sequences
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, kalman-filter, math/law-of-large-numbers
- Backlinks: finance/monte-carlo-method

## Entity: finance/random-matrix-theory
- Title: Random Matrix Theory (RMT)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Marchenko-Pastur Distribution, Wigner semicircle, Portfolio optimization, Non-Gaussian returns, Bulk universality, No shrinkage of direction, Step 3 — Reconstruct:, Related Topics, Marchenko-Pastur (MP) law, Step 2 — Separate signal from noise:, Factor model interpretation, Execution cost models, Python Implementation, Wigner Semicircle Law, Deep learning
- References: finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/value-at-risk, math/spectral-theory-operators, quantum-entanglement
- Backlinks: convex-optimization-trading, cross-impact, eigenvalues-eigenvectors, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/meta-labeling, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, nonlinear-shrinkage, portfolio-optimization-ml, quantum-entanglement, regime-switching-factors

## Entity: regime-switching-factors
- Title: Regime-Switching Factor Strategies
- Category: Algorithms and ML
- Language: en
- Key Concepts: Identifiability, Lag in detection, Factor reversals, Options market making, Persistence, Related Topics, Python Implementation, stationary distribution, Regime Persistence and Steady-State, Over-fitting, Macro timing, Credit risk, Limitations and Extensions, Correlation regimes, Regime-Switching Factor Strategies
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc
- Backlinks: finance/multivariate-hmm, hmm-particle-filters, rl-trader

## Entity: rl-trader
- Title: Reinforcement Learning (RL) Trader
- Category: Algorithms and ML
- Language: en
- Key Concepts: Crypto HFT, action-value function, Market impact, Markov Decision Process (MDP), Bellman Equation and Q-Function, Reward, Reinforcement Learning (RL) Trader, Discount, Related Topics, Sample efficiency, Python Implementation, Learning Curve Visualization, Optimal execution, Multi-agent RL (MARL), Offline RL
- References: attention-mechanisms, finance/monte-carlo-method, finance/value-at-risk, mcmc, optimal-execution, regime-switching-factors
- Backlinks: deep-rl-execution, finance/online-learning-mab, model-free-rl-factors, reinforcement-learning

## Entity: finance/sha-256
- Title: SHA-256 (Secure Hash Algorithm)
- Category: Algorithms and ML
- Language: en
- Key Concepts: SHA-256, HMAC-SHA256, Output length, SHA-256 Avalanche Effect, Digital signatures, Bitcoin proof-of-work, Second pre-image resistance, HMAC Construction, Related Topics, Hardware acceleration, Python Implementation, Quantum threat (partial), Davies-Meyer, SHA-3, Limitations and Extensions
- References: finance/lempel-ziv-complexity, finance/monte-carlo-method, finance/shannon-entropy, finance/shor-algorithm, mcmc
- Backlinks: finance/shor-algorithm

## Entity: finance/shap-interpretability
- Title: SHAP and ML Model Interpretability
- Category: Algorithms and ML
- Language: en
- Key Concepts: SHAP (SHapley Additive exPlanations), Financial Use Cases, SHAP and ML Model Interpretability, Properties, Symmetry, SHAP vs LIME vs Permutation Importance, Null player, Efficiency, Related Articles, TreeSHAP, Shapley Values
- References: alpha-factor-discovery, finance/lightgbm-xgboost, finance/probability-of-backtest-overfitting, fraud-detection
- Backlinks: finance/lightgbm-xgboost

## Entity: finance/shannon-entropy
- Title: Shannon Entropy in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Transfer Entropy, Market microstructure, Transfer entropy, mutual information, Kullback-Leibler divergence, Sample Entropy (SampEn), Information-theoretic portfolio construction, maximum entropy, Related Topics, Python Implementation, Approximate Entropy and Sample Entropy, differential entropy, Binning sensitivity, Model validation, Financial Entropy Applications
- References: finance/lempel-ziv-complexity, finance/random-matrix-theory, hidden-markov-models, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ai-theory/neural-tangent-kernel, change-of-variables, contrastive-learning, course-math-for-ai, decision-theory, deep-rl-execution, dirichlet-forms, distributions-zoo, dpo, embedding-models, empirical-processes, entropy-information, entropy-pooling, ergodic-theory, ergodic-theory-markov, f-divergences, finance/coherent-risk-measures, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hidden-markov-models, finance/lempel-ziv-complexity, finance/levy-esscher-continuous, finance/quasi-monte-carlo, finance/sha-256, finance/shor-algorithm, finance/upper-lower-hedging-prices, finance/zeta-field, financial-entropy, free-probability, hydrodynamic-limits, information-geometry-finance, information-theory-basics, jensen-inequality, jensens-inequality, kolmogorov-complexity, language-models/safety/rlhf-dpo, laplacian, logistic-regression, martingale, math/bayesian-asymptotics, math/concentration-inequalities, math/ergodic-theorems-birkhoff, math/gaussian-process-sample-paths, math/harmonic-analysis, math/information-theory, math/interacting-particle-systems, math/large-deviations-cramer, math/m-estimators, math/sigma-algebra-measurability, maximum-entropy, maximum-entropy-irl, mle, model-free-rl-factors, multi-token-prediction, multivariate-normal, mutual-information-divergence, naive-bayes, neural-scaling-laws, nlp-financial-analysis, online-learning-regret, pac-learning, path-integral-control, ppo, probability-distributions, probing-classifiers, quantum-entanglement, quantum-information-entropy, ricci-flow, risk-neutral-valuation, rlhf, sac-math, slm, small-ball-probabilities, soft-actor-critic, sparse-autoencoders, statistical-mechanics, training-dynamics, volatility-modulated-spectral-surface

## Entity: finance/shor-algorithm
- Title: Shor's Algorithm
- Category: Algorithms and ML
- Language: en
- Key Concepts: Qubit requirements, Long-term data security, Quantum Fourier Transform, Total, Related Topics, Python Implementation, elliptic curve cryptography (ECC), Harvest Now, Decrypt Later (HNDL), Discrete Logarithm, RSA Key Size vs. Required Logical Qubits, Probabilistic success, Quantum Order-Finding via QFT, continued fraction algorithm, Limitations and Extensions, discrete logarithm problem
- References: finance/monte-carlo-method, finance/sha-256, finance/shannon-entropy, finance/spectral-analysis, mcmc
- Backlinks: finance/fft, finance/sha-256

## Entity: pca-statarb
- Title: StatArb with PCA (Avellaneda-Lee)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Beta-neutral and Sector-neutral, Statistical Arbitrage, The Problem with Pairs, Factor Regression, Visualization: The S-Score, Related Topics, Principal Component Analysis (PCA), Why it Dominates, Short, Modeling the Residual (The Trade), synthetic market factors, Buy, The Signal (S-score), Extract Factors, The PCA Approach
- References: alpha-orthogonalization, fastest-mean-reversion, ornstein-uhlenbeck-process, pairs-trading, pca

## Entity: ts-cs-factor-analysis
- Title: TS vs CS Factor Analysis
- Category: Algorithms and ML
- Language: en
- Key Concepts: Test statistic, Time-varying betas, Time-Series (TS) regression, Characteristic vs. covariance, Related Topics, Python Implementation, Data requirement, Smart beta product design, Factor Spanning Tests, Risk attribution, Factor model validation, Identifies, SDF framework, Limitations and Extensions, Zoo of factors
- References: black-scholes, fama-macbeth-regression, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: fama-macbeth-regression, finance/factor-attribution

## Entity: timegan
- Title: TimeGAN: Generating Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: TimeGAN: Generating Synthetic Financial Data, Supervised Loss (The Key), Data Augmentation, Privacy, The Magic: Three Loss Functions, Related Topics, temporal dynamics, TimeGAN, Why Quants Use It, Generator, Discriminator, Embedder (Encoder), Reconstruction Loss, The Flaw of Standard GANs, Adversarial Loss
- References: finance/gan, finance/probability-of-backtest-overfitting, neural-sdes-finance

## Entity: finance/transformer-timeseries
- Title: Transformers for Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: Transformers, Normalization, Self-[[attention-mechanisms|Attention]] Mechanism, Key Architectures, Informer (Zhou et al. 2021), Temporal Self-[[attention-mechanisms|Attention]], PatchTST (Nie et al. 2023), Implementation, Gradient clipping, Positional encoding, Variable Selection, Lookback, Temporal Fusion [[transformer-architecture|Transformer]] (TFT, Lim et al. 2021), Gate Residual Networks, Related Articles
- References: attention-mechanisms, finance/lightgbm-xgboost, hidden-markov-models, kalman-filter, lob-prediction, transformer-architecture
- Backlinks: finance/gnn-finance, finance/lightgbm-xgboost

## Entity: vine-copulas
- Title: Vine Copulas for StatArb
- Category: Algorithms and ML
- Language: en
- Key Concepts: Application: Statistical Arbitrage, Why it Beats Linear Models, Sklar's Theorem, Related Topics, Vine Copulas for Statistical Arbitrage, Vine Copulas, What is a Vine Copula?, bivariate (2D) pair-copulas, Conditional Probability (The Signal), The Trade, Fit the Vine, Copulas, The Flaw of Multivariate Normal, Visualization: Bivariate Building Blocks, The Vine Structure
- References: alpha-factor-research, copula-models, pairs-trading

## Entity: clifford-algebras
- Title: Clifford Algebras & Geometric Algebra
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Rotors and Spinors, Applications in Physics, Clifford Algebras & Geometric Algebra, Definition, Multivectors

## Entity: complex-manifolds
- Title: Complex and Kähler Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: must form a Calabi-Yau 3-fold, Complex [[manifold-learning|Manifold]], Hodge Decomposition, 1. Almost Complex Structures, Calabi-Yau Manifold, Related Topics, Hermitian Metric, Almost Complex Structure, Mirror Symmetry, Complex and Kähler Manifolds: The Geometry of String Theory, Visualization: The Intersection of Geometries, Local Potential, integrable, 3. Kähler Manifolds, $J^2 = -I$
- References: hodge-theory, manifold-learning, spectral-graph-theory, symplectic-geometry, tensor-calculus
- Backlinks: manifold, ricci-flow

## Entity: connections-curvature
- Title: Connections and Covariant Derivatives
- Category: Analysis & Geometry
- Language: en
- Key Concepts: 4. Decomposing Curvature: Ricci vs. Weyl, Poincaré Conjecture, Related Topics, 1. The Covariant Derivative and Christoffel Symbols, Levi-Civita Connection, Connections, Curvature, and Holonomy, Torsion-free, 2. Holonomy: The Geometric Signature of Curvature, Ambrose-Singer Theorem, Metric-compatible, 5. Geometric Flow: The Ricci Flow, Ricci Curvature ($R_{\mu\nu}$), 3. The Riemann Curvature Tensor ($R^\rho_{\sigma\mu\nu}$), Affine Connection, Differential (Second) Bianchi Identity
- References: gauge-theory-yang-mills, manifold-learning, ricci-flow, tensor-calculus
- Backlinks: course-math-for-ai, geometric-deep-learning, hodge-theory, ricci-flow, symplectic-geometry, tensor-calculus

## Entity: delay-differential-equations
- Title: Delay Differential Equations in Neural Systems
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Delay Differential Equations in Neural Systems, Linear Stability Analysis, Delay-Induced Bifurcations, Mathematical Formulation, Hopf bifurcation

## Entity: geometric-deep-learning
- Title: Geometric Deep Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Deep Sets, Geometric Deep Learning: The Erlangen Program for ML, Equivariance, The Problem, Non-linear Activation, Manifolds, Gauge Equivariance, Geometric Deep Learning (GDL), GNNs, Related Topics, Gauge Equivariant CNNs, 5. Applications at the PhD Level, Robotics, The Solution, Climate Science
- References: connections-curvature, lie-groups-algebras, manifold-learning, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, course-math-for-ai, graph-curvature-oversquashing, lie-groups-algebras, tensor-calculus

## Entity: graph-curvature-oversquashing
- Title: Graph Curvature & Over-squashing
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Ricci curvature, What Is It, Over-squashing and Sensitivity, MATHEMATICAL DERIVATION: ORC on a Triangle, Related Topics, Positive curvature, Graph Rewiring (SDRF), Spectral Gap and Cheeger Constant, Over-squashing, Negative curvature, Graph Curvature & Over-squashing, Stochastic Discrete Ricci Flow (SDRF), Ollivier-Ricci curvature, Ollivier-Ricci Curvature
- References: geometric-deep-learning, graph-neural-networks, math/spectral-theory-operators, optimal-transport, ricci-flow, spectral-graph-theory

## Entity: hodge-theory
- Title: Hodge Theory and Harmonic Forms
- Category: Analysis & Geometry
- Language: en
- Key Concepts: 3. The Laplace-de Rham Operator, Codifferential, A. Electromagnetism, $k$-th De Rham Cohomology Group, 2. The Hodge Star and Codifferential, Related Topics, Hodge Theory: Bridging Topology and Differential Equations, Divergence, 1. De Rham Cohomology, Visualization: Hodge Decomposition, 4. The Hodge Decomposition Theorem, 5. Applications, one unique harmonic form, The Isomorphism, Hodge Laplacians
- References: connections-curvature, manifold-learning, spectral-graph-theory, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, homological-algebra, tensor-calculus

## Entity: information-geometry-nn
- Title: Information Geometry of Neural Networks
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Information Geometry of Neural Networks, Natural [[convex-optimization|Gradient Descent]], Curvature and Flat Minima, Fisher Information Metric
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: lie-algebras-physics
- Title: Lie Algebras in Physics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Electromagnetism, Related Topics, strangeness, Generators and Observables, Lie-algebra valued 1-forms, 2. Particle Physics and $\mathfrak{su}(3)$, Gauge Theories and Connections, Visualization: Spin Multiplets, isospin, Heisenberg Uncertainty Principle, 1. Angular Momentum and $\mathfrak{su}(2)$, Lie Algebras, Hermitian operator, Lie Algebras in Physics, The Adjoint Representation and Force Carriers
- References: general-relativity, lie-groups
- Backlinks: equivariant-diffusion-models

## Entity: lie-groups
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: [[manifold-learning|Manifold]] Optimization, The Exponential Map, Visualization: Group vs. Algebra, 2. Lie Algebra ($\mathfrak{g}$), tangent space at the identity, Basic Definitions, Related Topics, roots, Dynkin diagrams, Lie Groups and Lie Algebras, Lie Groups in Modern AI, Lie bracket, exponential map, continuous symmetries, Equivariant Neural Networks
- References: equivariant-nn, manifold-learning, math/differential-geometry
- Backlinks: course-math-for-ai, equivariant-diffusion-models, lie-algebras-physics, random-walks-groups

## Entity: lie-groups-algebras
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Visualization: Group vs. Algebra, infinitesimal rotation, $SU(n)$ (Special Unary), Antisymmetry, Lie Group, Physical Intuition, 2. The Exponential Map, Smooth [[manifold-learning|Manifold]], Related Topics, 3. Important Lie Groups, Lie Bracket, Lie Algebra, $SE(3)$ (Special Euclidean), CNNs, Spherical CNNs
- References: gauge-theory-yang-mills, geometric-deep-learning, manifold-learning, tensor-calculus
- Backlinks: geometric-deep-learning

## Entity: manifold-learning
- Title: Manifold Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Image Analysis, Key Algorithms, Manifold Learning, Single-cell RNA Sequencing, The Manifold Hypothesis, Related Topics, 2. Locally Linear Embedding (LLE), Spectral Graph Theory, Applications, Anomaly Detection, 3. [[spectral-graph-theory|Laplacian]] Eigenmaps, geodesic distances, Visualization: Euclidean vs. Geodesic, Laplace-Beltrami operator, Mathematical Engine: The Beltrami Operator
- References: math/analysis-geometry/information-geometry, math/differential-geometry, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, ai-theory/knowledge-distillation, category-theory-ml, complex-manifolds, connections-curvature, convolutional-volatility-resolution-clustering, course-math-for-ai, differential-forms, diffusion-models, energy-based-models, equivariant-diffusion-models, ergodic-theory-sgd, f-divergences, finance/asymptotic-expansion-finance, fisher-information, gauge-equivariant-nn, geometric-deep-learning, geometric-mechanics-lie-groups, geometry-loss-landscapes, geometry-of-attention, hodge-theory, implicit-function-theorem, information-geometry-finance, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lie-groups, lie-groups-algebra, lie-groups-algebras, linear-algebra, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/non-euclidean-geometry, math/ode-stability, math/stratonovich-integral, maximum-entropy, metric-spaces, mle, model-merging-procrustes, morse-theory, multimodal-alignment-clip, nerf, neural-operators-fno, neural-radiance-fields-math, nonlinear-filtering, normalization-layers-math, optimal-transport-gromov-wasserstein, pca, pinns-convergence, regularization-implicit-bias, ricci-flow, riemannian-geometry, semimartingales-on-manifolds, stochastic-calculus-manifolds, stochastic-manifolds, symplectic-geometry, symplectic-hamiltonian-nn, tensor-calculus

## Entity: neural-radiance-fields-math
- Title: Mathematical Foundations of NeRF
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Mip-NeRF:, Extensions and Generalisations, accumulated transmittance, [[pdes|Partial Differential Equations]]:, Plenoxels / Instant NGP:, Related Topics, Signed Distance Function (SDF), differential geometry, Relationship to Other Techniques, Neural Radiance Fields (NeRF), quadrature, positional encoding, NeuS / VolSDF:, Mathematical Foundations of NeRF, Differential Geometry and Inverse Rendering
- References: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, calculus-integration, manifold-learning, nerf, transformer-architecture

## Entity: mean-field-games
- Title: Mean Field Games
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Fokker-Planck (Kolmogorov forward) equation, Hamilton-Jacobi-Bellman (HJB) equation, Mean Field Games, Mathematical Formulation, Variational Structure, The MFG System
- Backlinks: hydrodynamic-limits, mechanism-design, stochastic-games

## Entity: optimal-transport
- Title: Optimal Transport & Wasserstein Metrics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Optimal Transport & Wasserstein Metrics, Introduction, Entropic Regularization and Sinkhorn Divergence, Applications, Kantorovich Relaxation
- Backlinks: convex-analysis, course-math-for-ai, graph-curvature-oversquashing, linear-programming, martingale-optimal-transport, math/analysis-geometry/information-geometry, metric-spaces, radon-nikodym

## Entity: ricci-flow
- Title: Ricci Flow and Geometric Evolution
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Short-time Existence, Visualization: The Smoothing Process, Poincaré Conjecture, Ricci Flow with Surgery, Manifold Learning, Related Topics, Ricci Flow, Perelman's Breakthrough, 3. Perelman's [[shannon-entropy|Entropy]] Functional, Ricci Curvature Tensor, 4. Solving the Poincaré Conjecture, 2. Singularities and Surgery, $\mathcal{W}$-[[shannon-entropy|Entropy]] Functional, 5. Applications in Computer Vision and AI, Ricci Flow: The Evolution of Geometry
- References: complex-manifolds, connections-curvature, finance/shannon-entropy, manifold-learning
- Backlinks: connections-curvature, course-math-for-ai, differential-equations, graph-curvature-oversquashing, stochastic-manifolds

## Entity: spectral-graph-theory
- Title: Spectral Graph Theory
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Spectral Graph Theory, Graph Laplacian, Cheeger's Inequality, Expander Graphs
- References: math/spectral-theory-operators
- Backlinks: ai-theory/spatial/equivariant-gnn, algebraic-geometry-slt, algebraic-topology-persistent, complex-manifolds, differential-galois-theory, ergodic-theory-markov, feller-processes, finance/fractional-fokker-planck, fourier-transform, geometric-deep-learning, gnn-credit-risk, gnn-weisfeiler-lehman, graph-curvature-oversquashing, graph-neural-networks, graph-theory, higher-category-theory-ai, hodge-theory, laplacian, linear-algebra, manifold-learning, map-estimation, math/spdes, math/spectral-theory-operators, non-commutative-geometry, number-theory-l-functions, operator-semigroups, schwartz-distributions, spectral-clustering, spectral-theorem-unbounded, stable-processes, string-theory-calabi-yau, tensor-calculus, topos-neural-networks

## Entity: neural-ode-stability
- Title: Stability Theory for Neural ODEs
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Lipschitz Constants and Uniqueness, Mathematical Formulation, Adjoint Method and Backward Stability, Stability Theory for Neural ODEs, Lyapunov Stability
- References: math/spectral-theory-operators

## Entity: symplectic-geometry
- Title: Symplectic Geometry
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hamilton's Equations, Darboux's Theorem, 4. Key Properties, B. Liouville's Theorem, Symplectic Geometry: The Geometry of Phase Space, Area, 5. Advanced Frontier: Symplectic Integrators, Symplectomorphism, locally indistinguishable, Non-degenerate, Hamiltonian Mechanics, Canonical Transformations, Related Topics, Computational Physics, Symplectic Manifolds
- References: ai-physics/hamiltonian-nn, connections-curvature, manifold-learning, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, manifold, microlocal-analysis

## Entity: tensor-calculus
- Title: Tensor Calculus on Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: 4. The Lie Derivative ($\mathcal{L}_X$), Killing's Equation, Antisymmetric Tensors, Metric Tensor, Hodge Dual, Calculus on Manifolds, 2. Exterior Algebra and Differential Forms, Tensor of type $(r, s)$, A. General Relativity, Smooth [[manifold-learning|Manifold]], 1. Multilinear Algebra and Tensor Spaces, Related Topics, Determinant and Volume, Tensor Calculus: Invariant Descriptions of Curvature and Flow, Wedge Product ($\wedge$)
- References: connections-curvature, geometric-deep-learning, hodge-theory, manifold-learning, spectral-graph-theory
- Backlinks: complex-manifolds, connections-curvature, hodge-theory, lie-groups-algebras, linear-spaces-basis, symplectic-geometry

## Entity: geometry-of-attention
- Title: The Geometry of Attention Mechanisms
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Lipschitz Continuity and Stability, Information Geometry of Softmax, The Geometry of [[attention-mechanisms|Attention]] Mechanisms, Softmax as a Kernel Smoother
- References: attention-mechanisms, manifold-learning, math/spectral-theory-operators

## Entity: tda-mapper-algorithm
- Title: The Mapper Algorithm in TDA
- Category: Analysis & Geometry
- Language: en
- Key Concepts: The Nerve Complex, Algorithm Parameters and Functoriality, filter function, Higher-dimensional simplices ($k$-simplices), The Mapper Algorithm in TDA, Mathematical Formulation, Vertices (0-simplices), Nerve, Edges (1-simplices)

## Entity: math/branching-processes
- Title: Branching Processes
- Category: Applied Probability
- Language: en
- Key Concepts: Subcritical case., 2. Nuclear chain reactions., The martingale $W_n$, iteration relation, Continuous-time branching (Bellman-Harris process)., Branching in random environment., The Galton-Watson process, Supercritical, 4. Viral content propagation., Applications, Examples, Critical, 3. Poisson offspring., Multi-type branching., 1. Binary splitting.
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/renewal-theory, math/wiener-hopf-factorization
- Backlinks: math/percolation, math/point-processes, math/random-graphs, math/renewal-theory, math/subordinators, math/wiener-hopf-factorization

## Entity: clt
- Title: Central Limit Theorem (CLT)
- Category: Applied Probability
- Language: en
- Key Concepts: 4. Role in Modern Systems, Berry–Esseen Theorem, 2. When Does it Fail? (Lindeberg-Feller), Visualization: Convergence to Gaussian, Related Topics, Finance, 3. Rate of Convergence: Berry–Esseen Theorem, always Gaussian, Standard Deviation, Central Limit Theorem (CLT): The Law of Cosmic Order, Fat Tails, Deep Learning, Normal Distribution, Lindeberg Condition, Lévy Distribution
- References: finance/levy-processes, frtb-es, mle
- Backlinks: characteristic-functions, mgf-characteristic-functions

## Entity: change-of-variables
- Title: Change of Variables
- Category: Applied Probability
- Language: en
- Key Concepts: [[gradient-hessian-jacobian|Jacobian Matrix]], Log-Normal, Related Topics, 1. The 1D Case, 3. Key Applications, Generative AI, Mutual Information, C. Differential [[shannon-entropy|Entropy]], Visualization: Stretching the Density, A. The Box-Muller Transform, Change of Variables: The Geometry of Probability, B. Log-Normal Distribution, Scaling Factor, 2. The Multivariate Case (The Jacobian), Normalizing Flows
- References: black-scholes, finance/shannon-entropy, gradient-hessian-jacobian, mle, variational-autoencoders

## Entity: characteristic-functions
- Title: Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: 3. The Lévy Continuity Theorem, [[central-limit-theorem|Central Limit Theorem]], [[fourier-transform|Fourier Transform]], B. Sums of Variables, Fast Fourier Transform (FFT), 1. Definition, A. Fast Option Pricing (FFT), Related Topics, 2. Fundamental Properties, Variance Gamma, A. Uniqueness (Lévy's Inversion Theorem), Universal Existence, 4. Application in Quantitative Finance, Characteristic Functions: The Fourier View of Probability, Characteristic Function
- References: central-limit-theorem, clt, finance/levy-processes, fourier-transform, merton-jump-diffusion, mgf
- Backlinks: copulas, course-math-for-ai, extreme-value-theory, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/contiguity-measures, math/convergence-semimartingales, math/glivenko-cantelli, math/infinitely-divisible-distributions, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/product-measures-fubini, math/renewal-theory, math/stable-convergence, math/stationary-wide-spectral, math/stein-method, math/triangular-arrays-processes, math/u-statistics, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, wiener-chaos

## Entity: math/concentration-inequalities
- Title: Concentration Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: Concentration Inequalities, Azuma–Hoeffding inequality for martingales, adaptive sampling, High-dimensional statistics:, Theorem (Azuma–Hoeffding)., only on the range, independence, distribution-free, Sample complexity for PAC learning:, Randomized algorithms:, Chernoff bound for Bernoulli sums, Hoeffding's inequality, Theorem (McDiarmid, 1989)., Applications and perspective, exponential bounds
- References: central-limit-theorem, characteristic-functions, empirical-processes, finance/shannon-entropy, martingale-clt, math/large-deviations-cramer, math/law-of-large-numbers
- Backlinks: ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, distributions-zoo, extreme-value-theory, fundamental-inequalities, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/markov-chain-mixing, math/minimax-estimation, math/multiple-testing, math/percolation, math/random-graphs, math/stein-method, random-matrices

## Entity: convergence-types
- Title: Convergence of Random Variables
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Convergence Almost Surely (a.s.), Why It Matters for AI, Related Topics, Stability, The Hierarchy of Convergence, 2. Convergence in Probability (p), 3. Convergence in Mean ($L^p$), 4. Convergence in Distribution (d), Relationship Map, Visualization: Convergence Speed, false, Generalization, Convergence of Random Variables, Strong Law of Large Numbers, Central Limit Theorem
- References: central-limit-theorem, math/law-of-large-numbers

## Entity: copulas
- Title: Copulas and Dependence
- Category: Applied Probability
- Language: en
- Key Concepts: Tail Dependence, unique, Sklar's Theorem, linear, zero tail dependence, Visualization: Tail Dependence, Related Topics, isolate the dependency structure, Types of Copulas, asymmetric tail dependence, Why Not Just Use Correlation?, Copulas and Dependence Structures, 1. Gaussian Copula, 2. Student's t-Copula, 3. Archimedean Copulas (Clayton, Gumbel, Frank)
- References: characteristic-functions, extreme-value-theory, statistical-mechanics
- Backlinks: correlation-association, joint-distributions

## Entity: math/coupling-methods
- Title: Coupling Methods
- Category: Applied Probability
- Language: en
- Key Concepts: Grand Coupling, Perfect Simulation, monotone coupling, Rates of Convergence, perfect simulation, Coupling Methods, Markov Chain Coupling and Mixing Time Bounds, Coupling Inequality for Convergence Time, Applications, coupling inequality, Central Limit Theorem Proofs, Strassen's theorem, optimal coupling, maximal coupling strategy, coupling
- References: central-limit-theorem, de-finetti-exchangeability, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/weak-convergence-prokhorov
- Backlinks: math/geometric-ergodicity, math/interacting-particle-systems, math/markov-chain-mixing, math/percolation

## Entity: cramer-rao-bound
- Title: Cramer-Rao Lower Bound
- Category: Applied Probability
- Language: en
- Key Concepts: Cramer-Rao Lower Bound (CRLB), Statistical Efficiency, Related Topics, 4. Importance in Estimation Theory, 2. The Inequality, 1. Fisher Information, Fisher Information, Efficient Estimator, Score Function, Efficiency, MLE, UMVUE, 3. General Form (Biased Estimators)
- References: estimator-properties, fisher-information, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information, math/bayesian-asymptotics, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, mle, mle-estimation, sufficient-statistics, umvue-completeness

## Entity: delta-method
- Title: Delta Method
- Category: Applied Probability
- Language: en
- Key Concepts: Standard Errors, Related Topics, MLE Functions, 3. Applications, 1. Formal Statement, 2. Derivation Idea, Multivariate Delta Method, Delta Method
- References: lln-clt, mle-estimation, statistical-inference
- Backlinks: slutsky-theorem, umvue-completeness

## Entity: entropy-information
- Title: Entropy and Information Gain
- Category: Applied Probability
- Language: en
- Key Concepts: Low Entropy, any kind of dependency, Related Topics, [[shannon-entropy|Entropy]] and Information Gain, 2. Conditional Entropy $H(Y \mid X)$, 1. Shannon [[shannon-entropy|Entropy]] ($H$), 3. Mutual Information ($I$), Visualization: Entropy vs. Probability, highest Information Gain, High [[shannon-entropy|Entropy]], 4. Information Gain (IG)
- References: finance/shannon-entropy, maximum-entropy
- Backlinks: course-math-for-ai

## Entity: ergodic-theory
- Title: Ergodic Theory & Mixing
- Category: Applied Probability
- Language: en
- Key Concepts: Ergodic Theory & Mixing, Measure-Preserving Dynamical Systems, Mixing and [[shannon-entropy|Entropy]], Ergodicity, Birkhoff's Ergodic Theorem
- References: finance/shannon-entropy
- Backlinks: stochastic-processes

## Entity: ergodic-theory-markov
- Title: Ergodic Theory of Markov Chains
- Category: Applied Probability
- Language: en
- Key Concepts: reversible, Time Averages vs Space Averages, Reversibility and Detailed Balance, Unique Equilibrium, Related Topics, Slow Mixing, Visualization: Convergence to Stationarity, Bayesian Inference, Convergence, Applications, Mixing Time, Statistical Physics, Metropolis-Hastings, MCMC (Markov Chain Monte Carlo), The Ergodic Theorem for Markov Chains
- References: finance/shannon-entropy, math/information-theory, spectral-graph-theory
- Backlinks: mdp

## Entity: de-finetti-exchangeability
- Title: Exchangeability and de Finetti's Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: hierarchical Bayesian models, Finite Exchangeability, de Finetti's theorem, Statement:, Proof Sketch, Bayesian Interpretation, exchangeability, empirical measure, Diaconis–Freedman theorem, infinite, Bayesian consistency:, Bayesian modelling, Binary case:, Scaling limits:, exchangeable
- References: bayesian-deep-learning, math/law-of-large-numbers, mcmc
- Backlinks: math/coupling-methods, math/random-graphs, math/stein-method

## Entity: extreme-value-theory
- Title: Extreme Value Theory
- Category: Applied Probability
- Language: en
- Key Concepts: how severe losses can be beyond the VaR level, regularly varying, Fréchet, Domains of Attraction, Weibull, Gumbel Domain (Type I), return periods, Generalized Extreme Value Distribution, Point Process Approach, Reliability and System Design, regular variation, extremal types theorem, $\xi < 0$ (Weibull), Return Levels and Return Periods, Finance
- References: characteristic-functions, finance/coherent-risk-measures, math/concentration-inequalities, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/large-deviations-cramer, math/stable-convergence
- Backlinks: copulas, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/bipower-variation, finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/repo-market-systemic, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, frtb-es, generative-scenario-models, math/lundberg-cramer-ruin, order-statistics, stable-processes

## Entity: free-probability
- Title: Free Probability
- Category: Applied Probability
- Language: en
- Key Concepts: The R-Transform, Related Topics, Optimization, freeness, independence, Free Probability, Visualization: Free vs. Classical Convolution, free convolution, R-transform, freely independent, Wigner Semicircle Distribution, Free Independence, Weight Initialization, Applications in Deep Learning, Signal Propagation
- References: finance/shannon-entropy, math/information-theory, random-matrices

## Entity: math/geometric-ergodicity
- Title: Geometric Ergodicity
- Category: Applied Probability
- Language: en
- Key Concepts: Diagnostics, Harris recurrence and spectral gaps, Langevin diffusion, The minorization condition and Meyn–Tweedie theorem, geometrically ergodic, Geometric Ergodicity, Subgeometric rates and polynomial ergodicity, Connections to related concepts, Applications to MCMC, Burn-in estimation, Harris recurrent, asymptotic variance, polynomial ergodicity, Sampler comparison, uniformly geometrically ergodic
- References: math/coupling-methods, math/discrete-markov-chains, math/large-deviations-cramer, math/markov-chain-mixing, math/stochastic-recursive-sequences
- Backlinks: math/ode-stability

## Entity: hmm
- Title: Hidden Markov Models (HMM)
- Category: Applied Probability
- Language: en
- Key Concepts: Expectation-Maximization (EM), Observations ($X_t$), Viterbi Algorithm, Forward Algorithm, A. The Evaluation Problem (Forward-Backward), Baum-Welch Algorithm, Hidden Markov Model (HMM), Transition Matrix ($A$), Related Topics, [[hmm-particle-filters|Particle Filters]], In Finance, Hidden States ($Z_t$), Emission Probabilities ($B$), Hidden Markov Models (HMM), hidden
- References: hmm-particle-filters, mle
- Backlinks: bayesian-networks, em-algorithm, multivariate-normal

## Entity: hydrodynamic-limits
- Title: Hydrodynamic Limits
- Category: Applied Probability
- Language: en
- Key Concepts: Time Scaling, [[shannon-entropy|Entropy]] Method and Large Deviations, Statistical Mechanics, Visualization: From Particles to Density, [[shannon-entropy|Entropy]] Method (Guo-Papanicolaou-Varadhan), Why It Matters, Related Topics, Hydrodynamic Limits, AI and Neural Mean Fields, The Empirical Measure, Large Deviations, diffusion coefficient, Macroscopic Fluctuation Theory (MFT), Space Scaling, Traffic and Crowd Flow
- References: finance/shannon-entropy, math/interacting-particle-systems, mean-field-games, partial-differential-equations

## Entity: likelihood-ratio-tests
- Title: Hypothesis Testing II: Likelihood Ratio Tests
- Category: Applied Probability
- Language: en
- Key Concepts: 1. The Likelihood Ratio, Hypothesis Testing II: Likelihood Ratio Tests, Related Topics, Wald Test, 2. Wilks' Theorem, Score Test (Lagrange Multiplier), Neyman-Pearson Lemma, Power, Most Powerful, 3. Power of the Test, 4. Relation to Other Tests
- References: fisher-information, mle-estimation, statistical-inference
- Backlinks: rank-tests

## Entity: math/information-theory
- Title: Information Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Related Topics, ELBO (Variational Inference):, Data Processing Inequality:, Applications in AI, 3. Kullback-Leibler (KL) Divergence, Cross-[[shannon-entropy|Entropy]] Loss:, 1. Shannon [[shannon-entropy|Entropy]] $H(X)$, Channel Capacity Theorem:, Information Bottleneck:, Core Concepts, Information Theory, 2. Mutual Information $I(X;Y)$, Source Coding Theorem:, Fundamental Theorems
- References: finance/shannon-entropy, fisher-information, variational-inference
- Backlinks: convex-optimization, course-math-for-ai, ergodic-theory-markov, free-probability, math/harmonic-analysis, maximum-entropy, online-learning-regret, probabilistic-combinatorics, random-matrices, universal-portfolios, wiener-chaos

## Entity: math/interacting-particle-systems
- Title: Interacting Particle Systems
- Category: Applied Probability
- Language: en
- Key Concepts: phase transition, Exact scaling for ASEP, Mixing time bounds, Configuration Space and State Representation, Major Model Classes, Finite-time mean-field theory, Hydrodynamic Limit, Contact Process, local interactions produce collective behavior, relative [[shannon-entropy|entropy]] method, Large deviations, Key Theorems, Exclusion Processes, Applications, mean-field limit
- References: convex-optimization, finance/shannon-entropy, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/percolation, stochastic-differential-equations
- Backlinks: hydrodynamic-limits, math/spdes

## Entity: law-iterated-logarithm
- Title: Law of Iterated Logarithm
- Category: Applied Probability
- Language: en
- Key Concepts: LIL, Related Topics, 2. Interpretation, Law of Iterated Logarithm (LIL), CLT, 1. Formal Statement, 3. Role in Stochastic Processes, LLN, [[brownian-motion|Brownian Motion]]
- References: brownian-motion, lln-clt, stochastic-processes
- Backlinks: math/borel-cantelli-zero-one, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers

## Entity: mcmc
- Title: MCMC (Markov Chain Monte Carlo)
- Category: Applied Probability
- Language: en
- Key Concepts: Derivative Pricing, Mixing, Stationary Distribution, Acceptance Ratio, Related Topics, Bayesian Statistics, Bayesian Neural Networks, 2. Key Algorithms, Bayesian Hierarchical Models, Statistical Physics, 3. Crucial Concepts for Practitioners, 4. Why it Matters for AI and Finance, B. Gibbs Sampling, PyMC, 1. The Core Idea: Sampling by Walking
- References: bayesian-inference, hamiltonian-mechanics, hmm-particle-filters, lsv-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, ar-models, arch-models, arima-models, arma-models, bayesian-black-litterman, bayesian-deep-learning, bayesian-inference, brownian-motion, causal-inference, convex-optimization-trading, cornish-fisher-cvar, de-finetti-exchangeability, fama-macbeth-regression, finance/fractional-fokker-planck, finance/monte-carlo-method, finance/particle-filter, finance/sha-256, finance/shor-algorithm, fraud-detection, hmm-particle-filters, kalman-filter, model-free-rl-factors, monte-carlo-integration, news-sentiment-trading, numeraire-invariant-hedging, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, regime-switching-factors, rl-trader, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis, variational-inference, volatility-forecasting

## Entity: mdp
- Title: Markov Decision Processes (MDP)
- Category: Applied Probability
- Language: en
- Key Concepts: Value Iteration, $\gamma \in [0, 1)$, Policy, State-Value Function $V^\pi(s)$, optimal policy, Visualization: Value Discounting, Related Topics, Solving MDPs, Markov Decision Processes (MDP), Markov Property, Bellman Optimality Equation, $R(s, a, s')$, $P(s' \mid s, a)$, $\mathcal{S}$, Policies and Value Functions
- References: ergodic-theory-markov, reinforcement-learning, stochastic-control
- Backlinks: mcts, multi-armed-bandits

## Entity: markov-chebyshev
- Title: Markov and Chebyshev Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: Chebyshev's Inequality, non-negative, A. Proving the Law of Large Numbers, Related Topics, Proof mechanism, The Theorem, B. PAC Learning and AI Safety, Visualization: The Tail Bounds, 2. Chebyshev's Inequality (The Second Moment Bound), Usage, Weak Law of Large Numbers (WLLN), The Power of the Bound, 3. Applications in Advanced Systems, Concentration inequalities, C. Algorithmic Complexity (Randomized Algorithms)
- References: central-limit-theorem, frtb-es, measure-theory

## Entity: mgf
- Title: Moment Generating Functions (MGF)
- Category: Applied Probability
- Language: en
- Key Concepts: [[central-limit-theorem|Central Limit Theorem]], A. Generating Moments, Moment Generating Function (MGF), 1. Definition, Related Topics, Visualization: MGF of a Gaussian, 3. Relationship to Other Transforms, Probability Generating Function (PGF), Moment Generating Functions (MGF), exact same distribution, Why it's useful, product, C. Uniqueness, Cramér's Bound, Chernoff Bound
- References: central-limit-theorem, fourier-transform, math/large-deviations-cramer
- Backlinks: characteristic-functions

## Entity: mgf-characteristic-functions
- Title: Moment Generating Functions (MGFs) and Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: Related Topics, Linear Transformation, 2. Characteristic Functions, Moment Generation, 3. Applications, 1. Moment Generating Functions (MGF), Properties, always exists, Symmetry, Independent Sums, Summation of Distributions, Limit Theorems, Moment Generating Functions (MGFs) and Characteristic Functions, Uniqueness Theorem, Inversion Formula
- References: clt, fourier-transform, probability-distributions

## Entity: monte-carlo-integration
- Title: Monte Carlo Integration
- Category: Applied Probability
- Language: en
- Key Concepts: Rejection Sampling, Related Topics, high-dimensional spaces, Monte Carlo Integration and Importance Sampling, Law of Large Numbers, importance weight, The Core Concept, Central Limit Theorem, Visualization: Convergence Rate, Importance Sampling
- References: math/law-of-large-numbers, mcmc, variational-inference
- Backlinks: bootstrap-jackknife, deep-ritz-method, mcts

## Entity: multivariate-normal
- Title: Multivariate Normal Distribution
- Category: Applied Probability
- Language: en
- Key Concepts: Gaussian processes, Bayesian linear regression, LDA., 6. [[shannon-entropy|Entropy]], squared Mahalanobis distance, Maximum-[[shannon-entropy|entropy]] principle:, Theorem (Cramér-Wold)., 12. Related topics, 7. KL divergence between normals, Multivariate Normal Distribution, Standardisation., ELBO, Fact., 1. Definition, 8. The multivariate CLT
- References: f-divergences, finance/shannon-entropy, fisher-information, gaussian-processes, hmm, pca
- Backlinks: course-math-for-ai, distributions-zoo, joint-distributions

## Entity: rank-tests
- Title: Non-parametric Statistics: Rank Tests
- Category: Applied Probability
- Language: en
- Key Concepts: Related Topics, 3. Kruskal-Wallis Test, 1. Wilcoxon Signed-Rank Test, 4. Advantages and Limitations, Hypothesis, 2. Mann-Whitney U Test (Wilcoxon Rank-Sum), Procedure, Advantages, Asymptotic Property, Statistic, Non-parametric Statistics: Rank Tests, ranks, Limitations
- References: bootstrap-jackknife, likelihood-ratio-tests, statistical-inference
- Backlinks: order-statistics

## Entity: order-statistics
- Title: Order Statistics
- Category: Applied Probability
- Language: en
- Key Concepts: Maximum $X_{(n)}$, 4. Applications, Related Topics, 2. Distribution of the $i$-th Order Statistic, Extreme Value Theory, Non-parametric Inference, Reliability, Minimum $X_{(1)}$, 3. Joint Distribution, 1. Definition, Order Statistics, Distribution of Min and Max
- References: extreme-value-theory, probability-distributions, rank-tests

## Entity: math/percolation
- Title: Percolation
- Category: Applied Probability
- Language: en
- Key Concepts: phase transition, Smirnov (2001), Site percolation:, connectivity, Oriented percolation and damage spreading, almost surely at most one, bounded away from 0 and 1, Related articles, critical phenomena, Famous exact result (Kesten, 1980):, Theorem (uniqueness, Harris–Seymour):, Definition:, BK inequality, hyperscaling relations, percolation probability
- References: math/branching-processes, math/concentration-inequalities, math/coupling-methods, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/random-graphs
- Backlinks: math/interacting-particle-systems, probabilistic-combinatorics

## Entity: map-estimation
- Title: Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference
- Category: Applied Probability
- Language: en
- Key Concepts: [[spectral-graph-theory|Laplacian]] Prior, Related Topics, 2. MAP Derivation, 1. Bayesian Framework, 3. Relation to MLE and Regularization, Likelihood, 4. Bayesian Credible Intervals, Credible Intervals, Prior, Gaussian Prior, Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference, Posterior
- References: bayes-theorem, linear-regression-ols, mle-estimation, spectral-graph-theory, statistical-inference
- Backlinks: mle-estimation

## Entity: mle-estimation
- Title: Point Estimation: Maximum Likelihood Estimation (MLE)
- Category: Applied Probability
- Language: en
- Key Concepts: Log-Likelihood, 1. Formal Derivation, Related Topics, Consistency, 2. Properties of MLE, 3. Example: Gaussian Mean, Efficiency, Likelihood Function, Invariance, Asymptotic Normality, Point Estimation: Maximum Likelihood Estimation (MLE)
- References: cramer-rao-bound, fisher-information, map-estimation, statistical-inference
- Backlinks: cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, map-estimation, sufficient-statistics

## Entity: probabilistic-combinatorics
- Title: Probabilistic Combinatorics
- Category: Applied Probability
- Language: en
- Key Concepts: Connectivity, Related Topics, Probabilistic Method, Paul Erdős, Probabilistic Combinatorics, Error-Correcting Codes, Ramsey Numbers and Bounds, The Lovász Local Lemma (LLL), Applications in Computer Science, must exist, Randomized Algorithms, The Probabilistic Method, Threshold Phenomena in Random Graphs, threshold, Hashing
- References: math/information-theory, math/percolation, math/random-graphs

## Entity: distributions-zoo
- Title: Probability Distributions Zoo
- Category: Applied Probability
- Language: en
- Key Concepts: Wishart and inverse Wishart, 4. Relationship graph, Dirichlet($\boldsymbol\alpha$), Memorylessness., Mean / variance., 3. Heavy-tailed vs light-tailed, Student's $t_\nu$, Poisson($\lambda$), Stable, Multivariate normal $\mathcal{N}_d(\boldsymbol\mu, \Sigma)$, Polynomial, PMF., Stable., Shapes., Use.
- References: bayesian-inference, central-limit-theorem, exponential-families, finance/shannon-entropy, math/concentration-inequalities, maximum-entropy, multivariate-normal, poisson-process
- Backlinks: course-math-for-ai, poisson-process

## Entity: estimator-properties
- Title: Properties of Estimators: Bias, Variance, and MSE
- Category: Applied Probability
- Language: en
- Key Concepts: Interpretation, Variance, Related Topics, 2. The Bias-Variance Tradeoff, 3. Consistency, consistent, Bias, unbiased, 1. Definitions, Mean Squared Error (MSE), Properties of Estimators: Bias, Variance, and MSE
- References: cramer-rao-bound, linear-regression-ols, mle-estimation, statistical-inference, sufficient-statistics
- Backlinks: bootstrap-jackknife, cramer-rao-bound, sufficient-statistics

## Entity: queuing-theory
- Title: Queuing Theory
- Category: Applied Probability
- Language: en
- Key Concepts: [[inference-serving|GPU]] Scheduling, Network Congestion, Service Rate, Applications in AI/CS, K (System capacity), Related Topics, Average time in system ($W$), API Rate Limiting, Utilization ($\rho$), Average number in system ($L$), Key Results (Little's Law), Probability of $n$ customers, A / S / c / K, Kendall's Notation, Visualization: Queue Length vs. Utilization
- References: inference-serving, math/markov-chain-mixing, poisson-process

## Entity: math/random-graphs
- Title: Random Graphs
- Category: Applied Probability
- Language: en
- Key Concepts: Connectivity and Percolation Thresholds, first moment method, Subcritical regime, Threshold Phenomena and the Phase Transition, Random Regular Graphs and Local Limits, The Erdős–Rényi Models, Stochastic Block Model, Degree Distribution and Chromatic Number, Applications, Subcritical and Supercritical Regimes, local limit, random $d$-regular graph, Stochastic Block Model and Community Detection, Critical window, second moment method
- References: central-limit-theorem, de-finetti-exchangeability, math/branching-processes, math/concentration-inequalities, math/large-deviations-cramer, math/poisson-approximation
- Backlinks: math/high-dimensional-statistics, math/percolation, probabilistic-combinatorics

## Entity: random-matrices
- Title: Random Matrix Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Gaussian Unitary Ensemble (GUE), Stieltjes transform, freely independent, free central limit theorem, Tracy-Widom Distribution, Covariance Matrix Estimation, Literature and Further Study, High-Dimensional Principal Component Analysis, Tracy-Widom distribution, Universality and Altland-Zirnbauer Classification, GUE, Sparse and structured matrices, Gaussian Orthogonal and Unitary Ensembles, Gaussian Orthogonal Ensemble (GOE), Local characteristics
- References: empirical-processes, math/concentration-inequalities, math/high-dimensional-statistics, math/information-theory, math/lp-spaces, math/minimax-estimation, math/spectral-theory-operators
- Backlinks: free-probability

## Entity: random-walks-groups
- Title: Random Walks on Groups
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Recurrence vs. Transience, Cryptography, Poisson Boundary, Probability Theory, Related Topics, Mixing Time, Random Walks on Groups, Algebra, Card Shuffling, 3. Boundary Theory and Poisson Boundary, 2. Convergence to Uniform (Mixing), Geometric Deep Learning, Formal Definition, Geometry, Applications in AI and Science
- References: lie-groups, math/discrete-markov-chains, math/markov-chain-mixing, math/spectral-theory-operators

## Entity: math/renewal-theory
- Title: Renewal Theory
- Category: Applied Probability
- Language: en
- Key Concepts: 5. Reliability theory., Renewal reward theorem, size-biased, renewal measure, Elementary renewal theorem, modified, Overshoot, undershoot, and the inspection paradox, Delayed and stationary renewal processes, The inspection paradox., Direct Riemann integrability, partial sums, Applications, delayed, 3. Insurance and ruin., Related Articles
- References: characteristic-functions, math/branching-processes, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/wiener-hopf-factorization
- Backlinks: math/branching-processes, math/markov-chain-mixing, math/point-processes, math/poisson-approximation, math/random-walks, math/subordinators, math/wiener-hopf-factorization, poisson-process

## Entity: bootstrap-jackknife
- Title: Resampling Methods: Bootstrap & Jackknife
- Category: Applied Probability
- Language: en
- Key Concepts: 3. Comparison, Related Topics, The Bootstrap Principle, Method, Main Use, 1. The Jackknife, with replacement, Procedure, 2. The Bootstrap, Variance Estimation, Computations, Resampling Methods: Bootstrap & Jackknife, Limitation
- References: estimator-properties, monte-carlo-integration, statistical-inference
- Backlinks: rank-tests

## Entity: sle
- Title: Schramm-Loewner Evolution (SLE)
- Category: Applied Probability
- Language: en
- Key Concepts: Conformal Invariance, $\kappa = 2$, Oded Schramm, 2. The Driving Equation, Driving Function, $\kappa = 3$, Conformally Invariant, Related Topics, Schramm-Loewner Evolution (SLE), $\kappa = 6$, $\kappa \geq 8$, Space-filling, $\xi_t = \sqrt{\kappa} B_t$, Famous Values:, 1. The Physical Motivation: Critical Interfaces
- References: brownian-motion, conformal-field-theory, gff, statistical-mechanics
- Backlinks: gff

## Entity: math/stein-method
- Title: Stein's Method
- Category: Applied Probability
- Language: en
- Key Concepts: Local Dependence and Dissociation, Statistical physics, Combinatorics, References and Further Reading, Exchangeable Pairs and Stein Discrepancy, Stein's Method, Concrete Example: Fixed Points in Random Permutations, Bounds and Metrics, Stein equation, Applications and Extensions, local dependence, Number theory, Stein operator, Total variation distance, Kolmogorov distance
- References: central-limit-theorem, characteristic-functions, de-finetti-exchangeability, math/concentration-inequalities, math/local-limit-theorems, math/poisson-approximation

## Entity: sufficient-statistics
- Title: Sufficient Statistics & Factorization Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: 4. Rao-Blackwell Theorem, Related Topics, Rao-Blackwellization, sufficient, Sufficient Statistics & Factorization Theorem, Minimal Sufficient Statistic, 3. Minimal Sufficiency and Completeness, 2. Fisher-Neyman Factorization Theorem, Completeness, 1. Definition
- References: cramer-rao-bound, estimator-properties, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information

## Entity: time-series
- Title: Time Series Analysis
- Category: Applied Probability
- Language: en
- Key Concepts: Weak Stationarity, Stationarity, GARCH(1,1), frequency domain, Classical Models (Box-Jenkins), differences, Related Topics, 1. AR (Auto-Regressive), Spectral Analysis, Spectral Density, Visualization: Stationarity, Autocorrelation Function (ACF) and PACF, Volatility Modeling (ARCH / GARCH), PACF (Partial Autocorrelation), temporal dependence
- References: math/markov-chain-mixing
- Backlinks: garch-models, language-models/mamba-ssm, math/stochastic-calculus/rough-path-signatures

## Entity: total-probability-variance
- Title: Total Probability and Total Variance
- Category: Applied Probability
- Language: en
- Key Concepts: 4. Application in Machine Learning, Stochastic Processes, Generative Models, Related Topics, Bias, Visualization: Variance Decomposition, Bayesian Hierarchical Models, Variance, 1. Law of Total Probability, Variance Decomposition, Component 2 (Variance of Conditional Expectation), Laws of Total Probability and Total Variance, Bias-Variance Decomposition, Intuition, Example: Financial Alpha
- References: bayesian-inference, hmm-particle-filters

## Entity: wentzell-freidlin
- Title: Wentzell-Freidlin Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Related Topics, Wentzell-Freidlin Theory (Large Deviations for SDEs), 1. Metastability and Exit Times, Quasi-potential, The Setting: Small Noise Limits, The Action Functional ($S$), Visualization: The Escape Path, Chemistry, 2. The Quasi-Potential, Key Phenomena, Exit Time, Applications, Instantone, Large Deviation Principles (LDP), Neural Networks
- References: math/large-deviations-cramer, statistical-mechanics, stochastic-differential-equations

## Entity: math/wiener-hopf-factorization
- Title: Wiener-Hopf Factorization
- Category: Applied Probability
- Language: en
- Key Concepts: ascending ladder epoch, Example: symmetric random walk, Theorem (Spitzer)., Connection to integral equations, 5. Boundary crossing problems., Wiener-Hopf Factorization, ascending ladder height, 1. Ruin probabilities., The Spitzer-Baxter identity, Setup and ladder variables, 4. Barrier options in finance., 2. Sequential analysis., Theorem (Wiener-Hopf factorization)., Applications, Corollary (Spitzer's identity for $\mathbb{P}(M_n = 0)$).
- References: brownian-motion, characteristic-functions, finance/levy-processes, math/branching-processes, math/discrete-martingales, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory, math/weak-convergence-prokhorov
- Backlinks: math/branching-processes, math/random-walks, math/renewal-theory, math/subordinators

## Entity: f-divergences
- Title: f-Divergences
- Category: Applied Probability
- Language: en
- Key Concepts: f-divergences, Positivity, Generative Adversarial Networks (GANs), 3. Properties, 1. Definition, Data Processing Inequality, Related Topics, KL Divergence, Visualization: Mode Seeking vs. Mass Covering, Reverse KL, $f$ is a convex function, f-Divergences: Measuring the Distance Between Distributions, Variational Inference, Pearson $\chi^2$, Local Geometry
- References: finance/gan, finance/shannon-entropy, information-geometry-finance, jensens-inequality, llm, manifold-learning, rlhf
- Backlinks: course-math-for-ai, fisher-information, multivariate-normal

## Entity: math/absolute-continuity-process-measures
- Title: Absolute Continuity of Process Measures
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Kazamaki condition, Why Different Volatilities Imply Singularity, The Liptser-Shiryaev Theorem, same diffusion coefficient, Signal detection., The Cramer-Rao Bound for Drift Estimation, Applications, Novikov's Condition, Related Articles, Model comparison in finance., pathwise observable, absolute continuity and singularity, different, The Setup, always
- References: brownian-motion, finance/girsanov-semimartingales, geometric-brownian-motion, heston-model, innovation-process, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering
- Backlinks: math/cameron-martin-formula, math/differentiation-of-measures, math/signed-measures

## Entity: math/bayesian-asymptotics
- Title: Bayesian Asymptotics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Posterior Contraction Rates, Infinite-Dimensional Models, Boundary Issues, Identifiability, Metric [[shannon-entropy|entropy]], Ghosal–Ghosh–van der Vaart (GGvV) Theory, Castillo and Nickl, Prior irrelevance, Prior mass condition, [[empirical-processes]], Prior positivity, Bernstein–von Mises Failure, Bernstein–von Mises theorem, Variational Bayes, Bernstein–von Mises Theorem
- References: cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/m-estimators, math/minimax-estimation
- Backlinks: math/semiparametric-efficiency

## Entity: bayesian-inference
- Title: Bayesian Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: B. Variational Inference (VI), Posterior $P(\theta \mid D)$, Related Topics, Optimization, Variational Autoencoders (VAEs), Random Variables, Frequentist (MLE), Evidence $P(D)$, Metropolis-Hastings, 1. Bayes' Theorem, Bayes' Theorem, 3. Numerical Methods (When Math is Hard), Prior $P(\theta)$, A. MCMC (Markov Chain Monte Carlo), Likelihood $P(D \mid \theta)$
- References: bayesian-black-litterman, bayesian-kelly, mcmc, measure-theory, mle, variational-autoencoders
- Backlinks: decision-theory, distributions-zoo, linear-regression, maximum-entropy, mcmc, mle, multi-armed-bandits, naive-bayes, total-probability-variance, variational-inference

## Entity: causal-inference
- Title: Causal Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: front-door criterion, backdoor criterion, Unconfoundedness and Matching, Doubly robust, randomized controlled trial, average treatment effect on the treated, Exogeneity, local treatment effect, [[rlhf]], Unconfoundedness, Causal Inference, LATE, Relevance, Randomization: The Gold Standard, See Also
- References: fama-macbeth-regression, finance/efficient-market-hypothesis, math/kolmogorov-probability-axioms, math/local-asymptotic-normality, mcmc, rlhf
- Backlinks: bayesian-networks, causal-inference-trading, correlation-association, double-ml, financial-entropy, math/semiparametric-efficiency, math/survival-analysis, probability-paradoxes

## Entity: math/contiguity-measures
- Title: Contiguity and the Le Cam Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: entire separation, local asymptotic normality, Characterization via Likelihood Ratios, Definition of Contiguity, mutually contiguous, tilted, contiguity, Hellinger Distance Connection, first lemma, Contiguity and the Le Cam Theory, Le Cam's Third Lemma, Financial Mathematics Application, entirely separated, Theorem (Jacod-Shiryaev)., sequences
- References: central-limit-theorem, characteristic-functions, finance/girsanov-semimartingales, finance/semimartingale-models, math/large-deviations-cramer, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/hellinger-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: correlation-association
- Title: Correlation and Association
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 4. Distance Correlation (dCor), controlling for, Visualization: Correlation vs. Dependence, 1. Pearson Product-Moment Correlation ($\rho$), Limitation, Related Topics, 3. Kendall's Tau ($\tau$), linear, Use case, monotonic function, discordant, 5. Partial Correlation, Range, Robustness, if and only if
- References: causal-inference, copulas

## Entity: math/cramer-rao-bound
- Title: Cramér–Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Dominated convergence:, standardized squared error, Efficiency and UMVUE, quantum advantage, Biased estimators and general linear forms, Theorem (Cramér-Rao, unbiased case):, Quantum Fisher information, multiparameter Cramér-Rao inequality, Connection to information geometry, The bound is tight (equality) if and only if the score is a linear function of the statistic $T$:, Support independent of $\theta$:, efficient estimators, Fisher information and the score function, Asymptotic efficiency, The Cramér–Rao inequality
- References: empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/conditional-expectation-sigma, math/local-asymptotic-normality, math/neyman-pearson

## Entity: math/density-processes
- Title: Density Processes and Likelihood Ratios
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: optimal, dichotomy, Density Processes and Likelihood Ratios, density process, Girsanov's Theorem as a Corollary, supermartingale, unchanged, log-likelihood, Change-point detection., Singularity and Absolute Continuity Dichotomy, Parameter estimation for diffusions., Fundamental properties:, $P$-martingale, Sequential testing (SPRT)., Representation via Stochastic Exponential
- References: finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/predictable-compensator
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/regular-conditional-probability, math/sequential-hypothesis-testing, math/signed-measures

## Entity: double-ml
- Title: Double Machine Learning
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Model the Outcome, AI Finance, Cross-fitting, Why "Double"?, Related Topics, Causal Estimation, Applications, Model the Treatment, Visualization: Removing the Bias, The DML Procedure (Nuisance Parameter Removal), Double Machine Learning (Causal Inference), Medicine, The Core Problem: Confounding, causal effects, Chernozhukov et al.
- References: alpha-factor-research, causal-inference, mle

## Entity: empirical-processes
- Title: Empirical Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: uniform, The fundamental result, Bracketing number, Donsker's Theorem and Functional CLT, VC dimension, Donsker class, symmetrization, sufficient condition, Metric [[shannon-entropy|Entropy]] and Bracketing Numbers, VC-Classes and Vapnik–Chervonenkis Dimension, A class $\mathcal{F}$ is called Glivenko–Cantelli (GC-class), VC-classes, Glivenko–Cantelli Theorem, Definition and Core Object, generalization bounds
- References: brownian-bridge, central-limit-theorem, finance/shannon-entropy, math/local-asymptotic-normality, math/weak-convergence-prokhorov, pac-learning
- Backlinks: math/bayesian-asymptotics, math/concentration-inequalities, math/cramer-rao-bound, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/survival-analysis, math/u-statistics, random-matrices

## Entity: expectation-maximization
- Title: Expectation-Maximization (EM)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Visualization: Clustering Progress, MAP, Missing Data, Related Topics, 2. M-Step (Maximization), Convergence Properties, The Two Steps, latent variables, local maximum, Natural Language Processing, Maximum Likelihood (MLE), Expectation-Maximization (EM) Algorithm, The Problem: Latent Variables, Applications, 1. E-Step (Expectation)
- References: mle, variational-inference
- Backlinks: gmm, jensen-inequality

## Entity: fisher-information
- Title: Fisher Information and the Cramér-Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Corollary., 11. Related topics, Theorem (Cramér-Rao, scalar)., non-centrality parameter, score, 8.3. Exponential $\text{Exp}(\lambda)$, Riemannian metric, 2. Zero-mean score identity, Caveat., 1. Definition, Regularity, 3. Fisher information as a Riemannian metric, 4. The Cramér-Rao bound, 7. Natural-[[convex-optimization|gradient descent]], Multivariate case.
- References: convex-optimization, cramer-rao-bound, exponential-families, f-divergences, manifold-learning, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, mle, sufficient-statistics
- Backlinks: course-math-for-ai, cramer-rao-bound, likelihood-ratio-tests, math/analysis-geometry/information-geometry, math/information-theory, maximum-entropy, mle-estimation, multivariate-normal

## Entity: math/hellinger-processes
- Title: Hellinger Integrals and Hellinger Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Theorem (Kakutani dichotomy for filtrations)., Statistical testing., Le Cam theory., Hellinger Integrals on a Single $\sigma$-Algebra, filtration, Hellinger Process for Filtered Spaces, Hellinger Integrals and Hellinger Processes, filtration analogue, For Lévy processes., Hellinger affinity, Hellinger process, Applications, Connection to Contiguity, Kakutani's Dichotomy Generalized, Criteria for Absolute Continuity and Singularity
- References: finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/contiguity-measures, math/doleans-dade-exponential, math/sigma-algebra-measurability, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: math/high-dimensional-statistics
- Title: High-Dimensional Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Fano information-theoretic criterion, Minimax Lower Bounds and Information Theory, Restricted Eigenvalue Condition (REC), sparsity, statistical error, Gordon's Theorem, Restricted Isometry Property (RIP), Gaussian sequence model, optimization error, Gaussian width, Theorem (Bickel–Ritov–Tsybakov, 2009)., High-Dimensional Statistics, False Discovery Rate (FDR), Connection to Convex Optimization, knockoffs
- References: convex-analysis, cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/lp-spaces, math/minimax-estimation, math/random-graphs
- Backlinks: math/multiple-testing, math/nonparametric-regression, random-matrices

## Entity: hypothesis-testing
- Title: Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: A/B Testing, p-value, Null Hypothesis ($H_0$), Type II Error, 2. Pearson's Chi-Square Test ($\chi^2$), Type I Error, $\alpha$ (Significance Level), Related Topics, Common Tests, Reject $H_0$, Multiple Testing Problem, Hypothesis Testing Foundations, Test Statistic, FDR (False Discovery Rate), Rule
- References: bootstrap, central-limit-theorem, math/neyman-pearson
- Backlinks: probability-paradoxes, sampling-distributions

## Entity: math/kernel-density-estimation
- Title: Kernel Density Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: kernel function, Normalization, pointwise bias, adaptive KDE, Triangular, Boundedness, Plug-in methods, bandwidth matrix, kernel density estimator, Adaptive Bandwidth, Uniform, Multivariate Kernel Density Estimation, Pointwise MSE and MISE, Minimax Theory and Sobolev Classes, second moment
- References: cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/glivenko-cantelli, math/local-asymptotic-normality, math/u-statistics
- Backlinks: math/minimax-estimation, math/nonparametric-regression

## Entity: kde
- Title: Kernel Density Estimation (KDE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Mean-Shift Clustering, Small $h$ (Under-smoothing), Optimal Bandwidth Selection, No Bin Origin Bias, Continuity and Differentiability, $K$ (The Kernel), 1. The Core Estimator, Volatility Surface Smoothing, Related Topics, Kernel Density Estimation (KDE), 4. Applications in Quantitative Finance and AI, $h$ (The Bandwidth), Cross-Validation, Faster Convergence, 2. The Bias-Variance Tradeoff and Bandwidth ($h$)
- References: kernel-methods-rkhs, math/nonparametric-regression, mle

## Entity: math/local-asymptotic-normality
- Title: Local Asymptotic Normality (LAN)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Local Asymptotic Normality, random, Neyman-Pearson test, Girsanov, LAMN and LAQ Extensions, deterministic, Asymptotic Efficiency, LAN for Diffusion Models, Le Cam's Third Lemma and Contiguity, Optimal Tests, Hajek-Le Cam convolution theorem, Related Articles, asymptotic power, locally asymptotically normal, Definition.
- References: central-limit-theorem, finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/functional-limit-theorems, math/hellinger-processes, math/law-of-large-numbers, math/stable-convergence
- Backlinks: causal-inference, empirical-processes, fisher-information, math/absolute-continuity-process-measures, math/bayesian-asymptotics, math/cameron-martin-formula, math/cramer-rao-bound, math/density-processes, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/sequential-hypothesis-testing, math/survival-analysis

## Entity: math/m-estimators
- Title: M-Estimators and Z-Estimators
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: estimating function, VC-subgraph condition, uniform law of large numbers (uniform LLN), Robust M-estimators, M-estimator, The sandwich form, Identifiability, criterion function, Asymptotic normality of Z-estimators, Quantile regression, Connection to empirical processes and [[shannon-entropy|entropy]], empirical sandwich estimator, covering numbers, Theorem (Consistency via Argmax Theorem):, Theorem (Asymptotic Normality of M-estimators):
- References: bootstrap, cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/concentration-inequalities, math/local-asymptotic-normality, math/neyman-pearson
- Backlinks: causal-inference-do-calculus, convex-optimization, math/bayesian-asymptotics, math/semiparametric-efficiency, math/survival-analysis

## Entity: mle
- Title: Maximum Likelihood Estimation (MLE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Log-Likelihood, 4. Connection to Information Theory, Related Topics, 2. Asymptotic Properties, Consistency, 1. The Likelihood Function, 3. Fisher Information ($I(\theta)$), Fisher Information, Cross-[[shannon-entropy|Entropy]] Loss, Kullback-Leibler (KL) Divergence, Efficiency, Likelihood Function, Cramér-Rao Lower Bound, Maximum Likelihood Estimation (MLE), Asymptotic Normality
- References: bayesian-inference, cramer-rao-bound, finance/shannon-entropy, information-geometry-finance, manifold-learning
- Backlinks: bayesian-inference, change-of-variables, clt, double-ml, expectation-maximization, fisher-information, garch-models, hmm, kde, linear-regression, logistic-regression, maximum-entropy, slutsky-theorem, umvue-completeness

## Entity: math/minimax-estimation
- Title: Minimax Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Fano's Inequality, Fundamental Definitions, minimax optimal estimator, Hellinger Distance and Le Cam Distance, Minimax Rates over Nonparametric Classes, two-point method, Gaussian sequence model, Minimax Estimation and Le Cam's Theory, Connection to Other Frameworks, Matrix recovery, Oracle Inequalities, Assouad's lemma, Assouad's Lemma, Open Problems and Future Directions, asymptotically minimax optimal
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/concentration-inequalities, math/kernel-density-estimation, math/local-asymptotic-normality
- Backlinks: math/bayesian-asymptotics, math/high-dimensional-statistics, math/nonparametric-regression, random-matrices

## Entity: math/multiple-testing
- Title: Multiple Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: multiple testing problem, Knockoff Filter (Candès et al.), Holm's Step-Down Procedure, Adaptive and Modified FDR, positive regression dependence on subset (PRDS), Connections to Empirical Bayes, Benjamini–Hochberg Procedure, Related Topics, independence, Local False Discovery Rate, Key property, mixture model, Multiple Testing, FDR control without distributional assumptions, per-hypothesis error rates
- References: bootstrap, empirical-processes, exponential-families, math/concentration-inequalities, math/high-dimensional-statistics, math/neyman-pearson, math/sequential-hypothesis-testing

## Entity: math/neyman-pearson
- Title: Neyman–Pearson Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Composite nulls, Simple vs. Composite Hypotheses, randomized tests, Karlin–Rubin Theorem, Size and Power, Randomized Tests and Discrete Distributions, Type I error (size), Bahadur efficiency, Theorem, Pitman efficiency, likelihood ratio test, UMP Unbiased Tests and Exponential Families, Limitations and Extensions, P-values as Test Statistics, Simple hypotheses
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/sequential-hypothesis-testing
- Backlinks: hypothesis-testing, math/cramer-rao-bound, math/m-estimators, math/multiple-testing, math/survival-analysis

## Entity: math/nonparametric-regression
- Title: Nonparametric Regression
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: adaptively, Statistical properties, smoothing spline, Gaussian Process Regression, The Bias–Variance Tradeoff, Local Polynomial Regression, Splines, Bandwidth and Smoothness Selection, Conclusion, Lepski method, Key advantages, Bias reduction, Bias, Leave-one-out cross-validation, Oracle Inequalities and Adaptive Rates
- References: bootstrap, functional-analysis, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/minimax-estimation, sobolev-spaces
- Backlinks: kde

## Entity: bootstrap
- Title: Resampling: Bootstrap and Jackknife
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Related Topics, 1. The Bootstrap, sampling with replacement, Resampling: Bootstrap and Jackknife, Bradley Efron, Leave-one-out, bias correction, Main Use, 2. The Jackknife, Robustness, Visualization: Resampling Distribution, Sampling, Complexity, Why it works: The "Plug-in" Principle, The Procedure
- References: central-limit-theorem, finance/monte-carlo-method
- Backlinks: hypothesis-testing, math/m-estimators, math/multiple-testing, math/nonparametric-regression

## Entity: sampling-distributions
- Title: Sampling Distributions
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Comparison to Normal, fatter tails, Visualization: t vs Normal, Related Topics, Normal (Z), 1. The Chi-Square Distribution ($\chi^2$), Use case, Chi-Square ($\chi^2$), ratio of two independent chi-square variables, unknown, Student's t, Fisher's F, sample size is small, 2. Student's t-Distribution, Sampling Distributions: t, χ², and F
- References: anova, central-limit-theorem, hypothesis-testing

## Entity: math/semiparametric-efficiency
- Title: Semiparametric Efficiency
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: one-step estimators, even if one of, Cox model, semiparametric efficiency bound, Pathwise Differentiability and the Tangent Set, Theorem (BKRW Efficiency Bound)., pathwise differentiability, Profile Likelihood, canonical gradient, Cox Proportional Hazards Model, Efficient estimating equations., The Semiparametric Efficiency Bound, An estimator is semiparametrically efficient if its asymptotic variance equals $V$., likelihood-based, partially linear model
- References: causal-inference, cramer-rao-bound, empirical-processes, exponential-families, math/bayesian-asymptotics, math/local-asymptotic-normality, math/m-estimators
- Backlinks: math/survival-analysis

## Entity: math/sequential-hypothesis-testing
- Title: Sequential Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Quality control., closed-form expressions, Sequential Hypothesis Testing, The Sequential Testing Problem, quickest detection problem, sequential test, Sequential Probability Ratio Test, Change-Point Detection, Applications, both, Regime detection in finance., CUSUM procedure., smallest expected sample size, Wald's Identities, Optimality: The Wald-Wolfowitz Theorem
- References: brownian-motion, geometric-brownian-motion, hidden-markov-models, kalman-filter, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality
- Backlinks: math/absolute-continuity-process-measures, math/multiple-testing, math/neyman-pearson

## Entity: slutsky-theorem
- Title: Slutsky's Theorem
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Multiplication, Related Topics, distribution, constant, 1. The Theorem, Division, Z-test, 3. Application: The t-statistic and Wald Tests, 4. Continuous Mapping Theorem (CMT), 2. Why the Difference in Convergence Matters?, Addition, probability, Slutsky's Theorem: The Algebra of Limits, By Slutsky's Theorem, Asymptotic Normality
- References: central-limit-theorem, delta-method, math/law-of-large-numbers, mle

## Entity: math/survival-analysis
- Title: Survival Analysis
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Related topics, Cox model, continuous component, semiparametric efficiency bound, Right-censoring mechanism, Counting process and martingale formulation, discrete component, log-rank test, empirical information matrix, cumulative hazard, Survival function and hazard rate, Greenwood's formula for variance, martingale central limit theorems, Connection to local asymptotic normality and nonparametric theory, Key advantages:
- References: causal-inference, empirical-processes, math/local-asymptotic-normality, math/m-estimators, math/neyman-pearson, math/point-processes, math/semiparametric-efficiency

## Entity: math/u-statistics
- Title: U-Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Strong Consistency:, Role in Hypothesis Testing, Gini Coefficient:, Connections to Empirical Processes and V-Statistics, V-statistic, Jackknife Consistency:, jackknife variance estimation, Definition and Core Concepts, Degenerate U-Statistics, Sample Variance:, Wilcoxon Statistic:, U-statistic, Key Theorems Summary, Central Limit Theorem, quadratic forms
- References: central-limit-theorem, characteristic-functions, cramer-rao-bound, empirical-processes, exponential-families, martingale-clt
- Backlinks: math/kernel-density-estimation

## Entity: umvue-completeness
- Title: UMVUE and Completeness
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: unique UMVUE, UMVUE and Completeness: The Theory of Optimal Estimation, 4. Lehmann-Scheffé Theorem: Finding the UMVUE, Related Topics, less than or equal to, Sufficient, Steps to find the UMVUE, Factorization Theorem, MLE vs UMVUE, Efficiency, 1. Sufficiency and Data Compression, Uniformly Minimum Variance Unbiased Estimator (UMVUE), 3. Completeness and Uniqueness, 2. Rao-Blackwell Theorem: Improving Estimators, Completeness
- References: cramer-rao-bound, delta-method, mle

## Entity: variational-inference
- Title: Variational Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Posteriors, Approach, The Intractability Problem, Optimization, The Variational Idea, Related Topics, Visualization: Approximating a Distribution, The ELBO (Evidence Lower Bound), Accuracy, Variational Inference (VI), VI vs. MCMC, Speed, Kullback-Leibler (KL) Divergence, Scalability, ELBO
- References: bayesian-inference, convex-optimization, mcmc, variational-autoencoders
- Backlinks: bayes-theorem, bayesian-kelly, calculus-of-variations, expectation-maximization, math/information-theory, math/variational-calculus, monte-carlo-integration

## Entity: nonequilibrium-statmech
- Title: Nonequilibrium Statistical Mechanics
- Category: Classical Physics
- Language: en
- Key Concepts: Langevin, erase information, Nonequilibrium Statistical Mechanics: Fluctuation Theorems, Maxwell's Demon, 1. Beyond the Second Law, Related Topics, Fluctuation Theorems, Computational Drug Discovery, 2. The Arrow of Time: Crooks Theorem (1999), Forward [[stochastic-differential-equations|SDE]], Violent, Nonequilibrium, Information as a Physical Commodity, Landauer’s Limit, Visualization: The Thermodynamic Limit, Nonequilibrium
- References: diffusion-models, fokker-planck-equation, gravitational-entropy, statistical-mechanics, stochastic-differential-equations

## Entity: b-trees
- Title: B-Trees
- Category: Data Structures
- Language: en
- Key Concepts: Overview, Properties

## Entity: hash-tables
- Title: Hash Tables
- Category: Data Structures
- Language: en
- Key Concepts: Open Addressing, Chaining, Performance, Overview

## Entity: account-abstraction
- Title: Account Abstraction (ERC-4337)
- Category: DeFi
- Language: en
- Key Concepts: Execution Overhead, Validation Loop, Deployment Cost, Related Topics, 4. Engineering Trade-offs, 1. The ERC-4337 State Machine, Visualization: The ERC-4337 Flow, Granular Permissioning, Paymaster, Bundler, ERC-20 Gas Payment, Session Keys, Execution Loop, Native Multi-sig, Step-by-Step Execution:
- References: cedefi-gateway-architecture, zk-kyc
- Backlinks: course-cedefi

## Entity: amm-mechanics
- Title: Automated Market Makers (AMM)
- Category: DeFi
- Language: en
- Key Concepts: Price Oracles, Visualization: The Bonding Curve, Concentrated Liquidity (Uniswap V3), Related Topics, Impermanent Loss, AMM as an Oracle, Efficiency, Complexity, Oracle Manipulation Attacks, Constant Product Market Maker (CPMM), Concentrated Liquidity, Liquidity Pool, Impermanent Loss (IL), The Constant Product Formula (Uniswap V2), Automated Market Makers (AMM)
- References: optimal-execution, smart-order-routing
- Backlinks: asset-tokenization, cedefi-mechanics, course-cedefi, liquid-staking-restaking, mev, stablecoin-mechanisms

## Entity: bridge-security
- Title: Bridge Security and Settlement Finality
- Category: DeFi
- Language: en
- Key Concepts: 1. The Core Risk: The Bridge as a Vault, 2. Types of Bridge Security, CeDeFi, Mints, Rate Limiting, 4. Implementation for Your Project, Related Topics, A. Trusted (Centralized) Bridges, Hash Time-Lock Contracts (HTLC), Bridge Security and Settlement Finality, 3. The Finality Problem, Pros, Visualization: The Reorg Risk, Bridges, The Attack Scenario
- References: asset-tokenization, cedefi-gateway-architecture, stablecoin-mechanisms
- Backlinks: cedefi-gateway-architecture, cross-chain-interop

## Entity: cedefi-gateway-architecture
- Title: CeDeFi Gateway Architecture
- Category: DeFi
- Language: en
- Key Concepts: B. Dynamic Gas Strategies, Reconciliation Engine, The Problem, MPC (Multi-Party Computation), Related Topics, Drift Detection, CeDeFi Gateway Architecture: High-Performance Institutional Bridging, Global Pause, Cold Storage Interaction, Nonce Queue, The Solution, A. Nonce Management and Concurrency, CeDeFi Gateway, 2. The Indexer and Reconciliation (Data Integrity), Blacklist
- References: bridge-security, cedefi-mechanics, zk-kyc
- Backlinks: account-abstraction, bridge-security, contract-upgradeability, course-cedefi, cross-chain-interop, number-theory-basics, oracle-design, privacy-defi, zk-kyc

## Entity: cedefi-mechanics
- Title: CeDeFi: Centralized Decentralized Finance
- Category: DeFi
- Language: en
- Key Concepts: CeDeFi: The Convergence of Institutional and Decentralized Finance, 2. Technical Architectures, 3. Compliance as Code, CeDeFi, Aave Arc, A. Permissioned Liquidity Pools, DeFi Opportunity, Bridge Risk, Related Topics, KYC, B. Enterprise Blockchains and Layer 2s, Bridges, Centralization Risk, Control, Oracle Vulnerability
- References: amm-mechanics, smart-order-routing
- Backlinks: asset-tokenization, cedefi-gateway-architecture, course-cedefi, number-theory-basics, onchain-credit, stablecoin-mechanisms

## Entity: cross-chain-interop
- Title: Cross-chain Interoperability Protocols
- Category: DeFi
- Language: en
- Key Concepts: Wormhole, Cross-chain Interoperability Protocols, LayerZero, 4. The "Trust Assumption" Risk, Defense-in-Depth, Related Topics, Cross-chain Interoperability Protocols: Beyond Bridges, Cross-chain Governance, Chainlink CCIP, 1. Messaging vs. Bridging, Benefit, arbitrary data and logic, B. Chainlink CCIP: Risk Management Network, Visualization: Omnichain Logic Flow, A. LayerZero: Ultra Light Nodes
- References: asset-tokenization, bridge-security, cedefi-gateway-architecture, smart-order-routing
- Backlinks: course-cedefi

## Entity: lending-mechanics
- Title: Lending and Money Market Mechanics
- Category: DeFi
- Language: en
- Key Concepts: 5. Implementation for CeDeFi, Liquidation, Kinked Interest Rate Curve, Lending and Money Market Mechanics: The Aave Model, 3. Risk Management: LTV and Health Factor, Liquidation Bonus, Related Topics, Reserve Factor, Utilization-based Model, 1. The Liquidity Pool Model, Borrowers, Utilization Rate, 4. The Liquidation Process, LTV (Loan-to-Value), Health Factor ($H_f$)
- References: onchain-credit, stablecoin-mechanisms
- Backlinks: course-cedefi, metric-spaces, oracle-design, yield-aggregators

## Entity: liquid-staking-restaking
- Title: Liquid Staking and Restaking
- Category: DeFi
- Language: en
- Key Concepts: Productivity, EigenLayer, multiple services, 2. The EigenLayer Revolution: Restaking, B. Slashing Risks, Related Topics, 4. Institutional Implications: The "Internet Bond", Lido, Liquid Staking and Restaking: The Yield Layer, 1. Liquid Staking Tokens (LSTs), ether.fi, Visualization: The Yield Pyramid, Restaking, Liquid Staking, Receipt
- References: amm-mechanics, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: mev
- Title: Maximal Extractable Value (MEV)
- Category: DeFi
- Language: en
- Key Concepts: Non-Toxic, Mempool, 3. MEV as an Institutional Risk, Sell, Visualization: The Sandwich Attack, Proposers (Validators), B. Sandwich Attacks, A. Front-running, Private RPCs, Related Topics, High-Frequency Trading (HFT) and Front-Running, Buys, reordering, 2. The Proposer-Builder Separation (PBS), 1. The "Dark Forest" Mechanism
- References: amm-mechanics, latency-arbitrage, smart-order-routing
- Backlinks: contract-upgradeability, course-cedefi, oracle-design, privacy-defi

## Entity: onchain-credit
- Title: On-chain Credit Markets
- Category: DeFi
- Language: en
- Key Concepts: 4. Why it Matters for High-Finance, Undercollateralized (Institutional), Centrifuge, Related Topics, 1. Undercollateralized vs. Asset-Backed Lending, Junior Tranche (Equity), Tranche, Asset-Backed (RWA), Maple, Goldfinch, Senior Tranche (Junior First Loss), Pool Delegates, Visualization: The Credit Pipeline, 2. The Tranche Structure (Waterfall Model), On-chain Credit Markets: Bridging TradFi and DeFi
- References: asset-tokenization, cedefi-mechanics
- Backlinks: course-cedefi, lending-mechanics, zk-kyc

## Entity: onchain-perps
- Title: On-chain Perpetuals and vAMM Mechanics
- Category: DeFi
- Language: en
- Key Concepts: 3. LP-as-Counterparty Model (GMX Model), 4. Order-book Based DEXs (dYdX Model), Oracle Lag, On-chain Perpetuals and vAMM Mechanics, Settlement, Funding Rate, Related Topics, price movement, GLP, Market Makers, Matching Engine, Perpetual Protocol, GMX, If Perp Price > Spot Price, If Perp Price < Spot Price
- References: oracle-design, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: oracle-design
- Title: Oracle Design and Resilience
- Category: DeFi
- Language: en
- Key Concepts: Mitigation, Project Risk, Spot Price, Medianizer, OEV-Share, CeDeFi, Scenario, Oracle Design and Resilience: Engineering Financial Truth, Secondary Source, Primary Source, Related Topics, Safe Mode, 3. Oracle Extractable Value (OEV), 2. Robust Price Discovery: The Medianizer, 4. Resilience Patterns for CeDeFi
- References: cedefi-gateway-architecture, lending-mechanics, mev
- Backlinks: course-cedefi, onchain-perps

## Entity: privacy-defi
- Title: Privacy-Preserving DeFi (Shielded Pools)
- Category: DeFi
- Language: en
- Key Concepts: ZK-SNARKs, Public Ledger Paradox, Anonymity, Shielding, Railgun, Confidentiality, Unshielding, On-chain Dark Pools, Related Topics, Copy-trading bots, Compliance Integration, Privacy-Preserving DeFi: The Shielded Economy, Private Interactions, 2. Institutional Privacy vs. Anonymity, Institutional Confidentiality
- References: cedefi-gateway-architecture, mev, zk-kyc
- Backlinks: course-cedefi

## Entity: asset-tokenization
- Title: Real World Asset (RWA) Tokenization
- Category: DeFi
- Language: en
- Key Concepts: Centralization, Legal Enforceability, Proof of Reserve (PoR), 3. Institutional Use Cases, Compliance Rules, Related Topics, Special Purpose Vehicle (SPV), Real World Asset (RWA) Tokenization, ERC-3643, Visualization: The Tokenization Lifecycle, Asset Tokenization, C. Liquidity for Illiquid Assets, B. Fractional Ownership, Real World Assets (RWA), 4. Risks and the "Off-chain Coupling" Problem
- References: amm-mechanics, cedefi-mechanics, smart-order-routing
- Backlinks: bridge-security, course-cedefi, cross-chain-interop, onchain-credit, stablecoin-mechanisms, zk-kyc

## Entity: contract-upgradeability
- Title: Smart Contract Upgradeability
- Category: DeFi
- Language: en
- Key Concepts: Mitigation, The Problem, 4. Storage Collisions: The Technical Nightmare, 1. The Mechanics of Delegatecall, Visualization: UUPS Architecture, CeDeFi, cannot use constructors, Storage Gaps, Related Topics, Address, 5. Multi-sig and Timelock Governance, Multi-sig, 2. Advanced Upgrade Patterns, B. Transparent Proxy Pattern, Balance
- References: cedefi-gateway-architecture, mev
- Backlinks: course-cedefi

## Entity: stablecoin-mechanisms
- Title: Stablecoin Mechanisms
- Category: DeFi
- Language: en
- Key Concepts: The Death Spiral, Decentralization, 3. Algorithmic and Delta-Neutral, 1. Fiat-Collateralized (Off-chain), Capital Efficiency, Related Topics, Stability, 4. The Stability Trilemma, Delta-Neutral (Ethena), Stability Logic (CDP), 2. Crypto-Collateralized (On-chain Overcollateralization), Liquidated, Seigniorage (Terra/UST), Mechanism, Short Perpetual position
- References: amm-mechanics, asset-tokenization, cedefi-mechanics
- Backlinks: bridge-security, combinatorics-induction, course-cedefi, lending-mechanics, liquid-staking-restaking, onchain-perps, yield-aggregators

## Entity: yield-aggregators
- Title: Yield Aggregators and Strategy Automation
- Category: DeFi
- Language: en
- Key Concepts: Auto-Compounding, Yield Aggregators, 3. Risk Assessment: The Strategy Stack, The Controller, Related Topics, Governance Boosting, Yield Aggregators and Strategy Automation, 1. The Vault Architecture, Protocol Risk, Strategy, Yearn Finance, Aggregator Risk, Delta-Neutral Staking, 2. Auto-Compounding Mechanics, Liquidity Risk
- References: lending-mechanics, smart-order-routing, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: zk-kyc
- Title: ZK-KYC: Privacy-Preserving Compliance
- Category: DeFi
- Language: en
- Key Concepts: 1. The Core Mechanism: Proof of Identity, Commitment, Proof of Accreditation, ZK-Proof Generation, Proof of Funds, CeDeFi, Privacy, Visualization: The ZK-KYC Flow, Proof of Residency, Related Topics, ZK-KYC, 4. Strategic Value for Your Project, On-chain Verification, User Trust, Institutional Access
- References: asset-tokenization, cedefi-gateway-architecture, onchain-credit
- Backlinks: account-abstraction, cedefi-gateway-architecture, course-cedefi, privacy-defi

## Entity: course-cedefi
- Title: CeDeFi Engineering: Institutional Web3
- Category: DeFi & Engineering
- Language: en
- Key Concepts: Course map, Compliance-yield gateway., Kata:, Prerequisites, Week 3 — Lending and risk, Week 1 — EVM and stack architecture, Week 8 — Institutional stack, Goal:, Outcomes, Week 7 — Cross-chain and bridges, Capstone project, Week 6 — ZK and private KYC, Recommended reading, Week 2 — AMM and liquidity microstructure, CeDeFi Engineering — institutional Web3 in 8 weeks
- References: account-abstraction, amm-mechanics, asset-tokenization, cedefi-gateway-architecture, cedefi-mechanics, contract-upgradeability, cross-chain-interop, lending-mechanics, liquid-staking-restaking, mev, onchain-credit, onchain-perps, oracle-design, privacy-defi, smart-order-routing, stablecoin-mechanisms, yield-aggregators, zk-kyc

## Entity: exotic-options-and-structured-products
- Title: Exotic Options & Structured Products
- Category: Derivatives
- Language: en
- Key Concepts: Exotic Options & Structured Products, See Also
- References: course-quant-trading, monte-carlo-option-pricing-and-variance-reduction, option-greeks-and-volatility

## Entity: multi-curve-framework
- Title: Multi-Curve Framework
- Category: Derivatives
- Language: en
- Key Concepts: Credit Risk, OIS (Overnight) curve, The Paradigm Shift, Related Topics, Liquidity Risk, Modern Multi-Curve Framework, Visualization: The Basis Spread, Discounting Curve, Credit Support Annex (CSA), Multi-Curve Framework (Post-2008 Modern Yield Curves), Forward (Projection) Curves, Why Do Curves Diverge?, SOFR, Risk-Free Rates (RFRs), LIBOR Transition (The "End of LIBOR")
- References: finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/xva

## Entity: option-greeks-and-volatility
- Title: Option Greeks, Volatility & Hedging
- Category: Derivatives
- Language: en
- Key Concepts: See Also, Gamma ($\Gamma$):, Theta ($\Theta$):, 1. Put-Call Parity, Vega ($\nu$):, Option Greeks, Volatility & Hedging, 3. Delta Hedging, Delta ($\Delta$):, 2. Option Greeks
- References: course-quant-trading, optimal-stopping-and-kelly, quant-market-making-mechanics
- Backlinks: credit-risk-modeling-and-structural-models, exotic-options-and-structured-products, fixed-income-quant-rates-and-yield-curve, interest-rate-derivatives-swaps-caps-floors, monte-carlo-option-pricing-and-variance-reduction, quant-market-making-mechanics, stochastic-calculus-and-ito-lemma, volatility-surface-sabr-model, volatility-trading-and-variance-swaps

## Entity: volatility-arbitrage
- Title: Volatility Arbitrage and Variance Swaps
- Category: Derivatives
- Language: en
- Key Concepts: No Delta Hedging, Related Topics, Log-Contract Replication, Visualization: The VIX vs. Realized Vol, model-independent, 3. The VIX Index, Variance Swap, 2. Dispersion Trading, implied volatility, 4. Trading Strategies, Volatility Arbitrage and Variance Swaps, Variance Risk Premium, 1. Volatility Carry, VIX Index, variance strike
- References: black-scholes, finance/rough-volatility, volatility-smile

## Entity: volatility-trading-and-variance-swaps
- Title: Volatility Trading & Variance Swaps
- Category: Derivatives
- Language: en
- Key Concepts: 1. Delta-Neutral Gamma Scalping, See Also, Volatility Trading & Variance Swaps
- References: course-quant-trading, option-greeks-and-volatility, quant-market-making-mechanics
- Backlinks: stochastic-volatility-heston-model

## Entity: math/ergodic-theorems-birkhoff
- Title: Birkhoff-Khintchine Ergodic Theorem
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Comparison with the LLN, 3. MCMC methods., dependent, Measure-preserving transformation., "ergodic accessibility", one observation of a large ensemble, If $T$ is ergodic, ergodic theory, Mixing, Birkhoff-Khintchine theorem, 1. Bernoulli shift., Proof (via the maximal theorem), ergodic, physical hypothesis, Birkhoff-Khintchine Ergodic Theorem
- References: arch-models, brownian-motion, central-limit-theorem, finance/shannon-entropy, garch-models, law-iterated-logarithm, math/discrete-markov-chains, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/stochastic-recursive-sequences
- Backlinks: math/borel-cantelli-zero-one, math/branching-processes, math/coupling-methods, math/discrete-markov-chains, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/law-of-large-numbers, math/markov-chain-mixing, math/martingale-clt, math/percolation, math/renewal-theory, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, statistical-mechanics

## Entity: math/discrete-markov-chains
- Title: Discrete Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: transient, Ergodic theorem for chains, Aperiodicity, Communicating states., future depends only on the present, Transition matrix., 3. Hidden Markov models (HMM)., homogeneous, Existence and uniqueness., prescribed, Basic operations, stochastic matrix, Continuous-time chains, stationary distribution, recurrent
- References: brownian-motion, finance/crr-model, hidden-markov-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, reinforcement-learning
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, math/branching-processes, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/geometric-ergodicity, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/markov-chain-mixing, math/optimal-stopping-markov, math/renewal-theory, math/stochastic-recursive-sequences, random-walks-groups, stochastic-processes

## Entity: math/kolmogorov-equations-ctmc
- Title: Kolmogorov Equations and Continuous-Time Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Foster-Lyapunov criteria, M/M/1 queue, Setup and the Q-matrix, rate matrix, minimal, explosion, terminal, Markov property, Matrix exponential solution, Transition probability matrix, Explosion and non-minimal chains, transition semigroup, birth-death process, initial, backward equation
- References: brownian-motion, finance/levy-processes, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms, math/spectral-theory-operators
- Backlinks: fokker-planck-equation, math/discrete-markov-chains, math/point-processes, math/subordinators, stochastic-processes

## Entity: math/spectral-representation-processes
- Title: Spectral Representation of Stationary Processes
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: 4. Speech and image processing., Interpretation., [[hilbert-huang-transform|Hilbert-Huang transform]], uncorrelated, spectral representation, Connection to ARMA models, Locally stationary processes, Ideal low-pass, Lag, finite parametric, deterministic, autocovariance, Wavelet transforms, Theorem (Cramer, 1940; Kolmogorov)., Spectral Representation of Stationary Processes
- References: brownian-motion, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/stationary-wide-spectral, wavelet-transform
- Backlinks: math/spectral-theory-operators, math/stationary-wide-spectral

## Entity: math/stochastic-recursive-sequences
- Title: Stochastic Recursive Sequences
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Theorem (Kesten, 1973; Vervaat, 1979)., The Loynes scheme, Connection to the multiplicative ergodic theorem, top Lyapunov exponent, monotone, The linear case: products of random matrices, Stochastic Recursive Sequences, Theorem (Furstenberg-Kesten, 1960)., Borovkov's renovation approach, contractive, Autoregressive processes., Theorem (Loynes, 1962)., Finance beyond GARCH., Applications, coupling events
- References: arch-models, brownian-motion, finance/levy-processes, garch-models, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/law-of-large-numbers
- Backlinks: math/ergodic-theorems-birkhoff, math/geometric-ergodicity

## Entity: math/stationary-wide-spectral
- Title: Wide-Sense Stationary Processes and Spectral Density
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Theorem (Wiener, 1930; Khintchine, 1934)., 3. Harmonic component., 5. Singular spectrum analysis (SSA)., non-negative, 2. AR(1) process., autocorrelation function, constant, the autocovariance and the spectral measure are two equivalent descriptions, long memory, Herglotz's theorem., Properties of the autocovariance, the first two moments coincide, periodogram, Wiener-Khintchine theorem, Examples
- References: brownian-motion, characteristic-functions, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/self-similarity-fractality, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/spectral-representation-processes
- Backlinks: math/spectral-representation-processes, ornstein-uhlenbeck, stochastic-processes

## Entity: conditionally-gaussian-processes
- Title: Conditionally Gaussian Processes
- Category: Filtering Theory
- Language: en
- Key Concepts: The Filtering Equations, Stochastic volatility filtering., Conditionally Gaussian Processes, Examples and Applications, Proof Sketch, Conditional Gaussianity under $\tilde{P}$., Reference measure., Interest rate models., Comparison with Kalman-Bucy, The Conditionally Gaussian Model, Key structural point:, Theorem (Liptser-Shiryaev)., Derive the equations, Definition., conditionally Gaussian
- References: finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, math/doleans-dade-exponential, nonlinear-filtering, stochastic-differential-equations
- Backlinks: innovation-process, nonlinear-filtering

## Entity: innovation-process
- Title: Innovation Process
- Category: Filtering Theory
- Language: en
- Key Concepts: Likelihood computation., Connection to Girsanov's Theorem, integral representation, whitens, reference measure, Prediction, Consequence., Applications, Filtering, Definition and Basic Properties, Theorem (Liptser-Shiryaev)., invertible causal transformation, The Innovation Representation Theorem, Related Articles, Innovation Process
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, kalman-filter, math/conditional-expectation-sigma, math/discrete-martingales, nonlinear-filtering
- Backlinks: conditionally-gaussian-processes, math/absolute-continuity-process-measures, math/martingale-representation, nonlinear-filtering

## Entity: nonlinear-filtering
- Title: Nonlinear Filtering
- Category: Filtering Theory
- Language: en
- Key Concepts: Why Nonlinear Filtering is Hard, observation process, The Partially Observed System, Examples and Applications, Proof Architecture, Spectral methods., innovation, Particle filters., Linear-Gaussian case., linear, Reference measure method., The Zakai Equation, Derive KS, Stochastic volatility., Kallianpur-Striebel formula.
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, manifold-learning, math/doleans-dade-exponential, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, innovation-process, math/absolute-continuity-process-measures, math/martingale-representation, state-space-models, stochastic-control-partial-info, stochastic-differential-equations

## Entity: bayesian-networks
- Title: Bayesian Networks
- Category: Foundations
- Language: en
- Key Concepts: Structure Learning, Belief Propagation, Fork, dependent, Learning, Bayesian Networks, Acyclicity, Inference and Learning, Related Topics, The Factorization Property, D-Separation (Conditional Independence), Variable Elimination, Collider (V-structure), Inference, Edges
- References: bayes-theorem, causal-inference, hmm
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, graph-theory-basics

## Entity: category-theory
- Title: Category Theory
- Category: Foundations
- Language: en
- Key Concepts: an object is completely determined by its relationships to all other objects., Quantum Physics, Category, Composition, Objects, 5. Applications in AI and Physics, Natural Transformations, 1. Objects and Morphisms, Category Theory: The Mathematics of Mathematics, Functor, Related Topics, Visualization: The Hierarchy of Abstraction, Categorical Quantum Mechanics, Morphisms (Arrows), 4. The Yoneda Lemma: Identity via Relationships
- References: homological-algebra, topos-theory, type-theory
- Backlinks: homological-algebra, homotopy-type-theory, math/algebraic-topology, topos-theory, type-theory

## Entity: probability-paradoxes
- Title: Classic Paradoxes in Probability
- Category: Foundations
- Language: en
- Key Concepts: 1. Simpson's Paradox, Related Topics, Lesson, 4. Survivor Bias, 3. The Birthday Paradox, Visualization: Simpson's Reversal, confounding variables, no holes, Example, 2. Berkson's Paradox (Selection Bias), Reality, Classic Paradoxes in Probability and Statistics, Intuition, Abraham Wald
- References: bayes-theorem, causal-inference, hypothesis-testing

## Entity: convex-optimization
- Title: Convex Optimization
- Category: Foundations
- Language: en
- Key Concepts: Convergence Rates, Strong duality, Jensen's inequality, subdifferential, Conjugate Function, Algorithms, Proximal Method:, Stationarity:, Convex Optimization, Key relations:, proximal operator, conjugate function, Nesterov Accelerated Method:, Portfolio Optimization:, dual function
- References: math/information-theory, math/m-estimators, math/variational-calculus, stochastic-control
- Backlinks: 3d-gaussian-splatting, ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, attention-kernel, automatic-differentiation, convex-analysis, convexity, course-math-for-ai, deep-galerkin, differential-privacy, energy-based-models, ergodic-theory-sgd, fine-tuning, fisher-information, fluid-dynamics-navier-stokes, geometric-mechanics-lie-groups, geometry-loss-landscapes, gradient-hessian-jacobian, information-bottleneck-theory, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lagrange-multipliers, linear-algebra, linear-systems-gauss, logistic-regression, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/interacting-particle-systems, math/large-deviations-cramer, math/martingale-clt, math/ode-stability, meta-learning, model-merging-procrustes, multimodal-alignment-clip, multivariable-calculus, neural-operators-fno, normalization-layers-math, ntk, online-learning-regret, optimal-transport-gromov-wasserstein, optimization-basics, pinns-convergence, proximal-algorithms-admm, qft-curved-spacetime, regularization-implicit-bias, sgd-convergence-theory, sgd-variants, stochastic-calculus-manifolds, string-theory-calabi-yau, symplectic-hamiltonian-nn, training-dynamics, ttt-layers, vae-elbo, variational-autoencoders, variational-inference, variational-inference-math

## Entity: eigenvalues-eigenvectors
- Title: Eigenvalues and Eigenvectors
- Category: Foundations
- Language: en
- Key Concepts: Neural Stability, Google PageRank, Portfolio Risk, Singular Values, Market Factor, 1. The Core Equation, Characteristic Equation, 3. Spectral Decomposition and Theorem, Physical Intuition, 5. Why It Matters in AI and Finance, Interpretation, Statistical Arbitrage, 4. Singular Value Decomposition (SVD), Related Topics, Gershgorin Disc Theorem
- References: finance/random-matrix-theory, linear-spaces-basis, math/discrete-markov-chains, math/spectral-theory-operators, pca
- Backlinks: cross-impact, laplacian, linear-spaces-basis, linear-systems-gauss, matrix-decompositions, nonlinear-shrinkage, vector-spaces-orthogonality

## Entity: math/functional-analysis
- Title: Functional Analysis
- Category: Foundations
- Language: en
- Key Concepts: projection, Normed Spaces:, Related Topics, Kernel Trick:, Functional Analysis, linear operator, Operators and Spectrum, Hilbert Spaces ($\mathcal{H}$):, Eigenfunctions:, Spectral Theorem:, Core Spaces, orthogonality, Banach Spaces:, Reproducing Kernel Hilbert Spaces (RKHS):, Stability Analysis:
- References: hilbert-banach-spaces, linear-algebra, math/spectral-theory-operators, quantum-mechanics

## Entity: graph-theory
- Title: Graph Theory
- Category: Foundations
- Language: en
- Key Concepts: Adjacency Matrix, [[graph-neural-networks]], weakly connected, Key Types of Graphs, Complete Graph ($K_n$), in-degree, Fraud Detection, Bipartite Graph, Network Contagion, edges, strongly connected, Connectivity, out-degree, Related Topics, Important Theorems
- References: finance/systemic-contagion-debtrank, graph-neural-networks, knowledge-graph, linear-algebra, math/spectral-theory-operators, spectral-graph-theory
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, kuramoto-model, linear-algebra, logic-set-theory

## Entity: homological-algebra
- Title: Homological Algebra
- Category: Foundations
- Language: en
- Key Concepts: The Snake Lemma, Algebraic Geometry, homology, Visualization: Long Exact Sequence, Theoretical Physics, 2. Ext (Extension), Related Topics, Homology Groups, Applications, Chain Complexes, The Five Lemma, $n$-th homology group, Category Theory, Diagram Chasing and Lemmas, Abelian Categories
- References: category-theory, hodge-theory, math/algebraic-topology, quantization
- Backlinks: category-theory, topos-theory, tor-ext-functors

## Entity: jensens-inequality
- Title: Jensen's Inequality
- Category: Foundations
- Language: en
- Key Concepts: A. Information Theory (Gibbs' Inequality), Deep Learning, C. Finance: The Volatility Tax, Related Topics, Convex Case, 3. Critical Applications, Kullback-Leibler (KL) Divergence, above, Information Theory, Jensen's Inequality: The Geometry of Averages, Integral Version, Statistical Physics, 1. The Mathematical Statement, Equality Condition, Finite Version
- References: convexity, finance/shannon-entropy, variational-autoencoders
- Backlinks: f-divergences

## Entity: linear-algebra
- Title: Linear Algebra
- Category: Foundations
- Language: en
- Key Concepts: [[attention-mechanisms|Attention]], Rank, Weights, Vectors, Singular Value Decomposition (SVD), Vector Spaces, Related Topics, Key Concepts, Optimization, Linear Independence and Basis, Linear Algebra, Matrices, eigenvalue, Matrix Multiplication, Fundamental Objects
- References: attention-mechanisms, automatic-differentiation, convex-optimization, graph-theory, manifold-learning, math/spectral-theory-operators, quantization, spectral-graph-theory, transformer-architecture
- Backlinks: graph-theory, language-models/mamba-ssm, math/functional-analysis

## Entity: quantum-math
- Title: Math of Quantum Computing
- Category: Foundations
- Language: en
- Key Concepts: Unitary Matrix, tensor product, The Mathematics of Quantum Computing, 3. Unitary Operators (Quantum Gates), Related Topics, Grover's Algorithm, Schmidt Rank, Linear Algebra, Superposition, QAE, Reversibility, Hadamard Gate ($H$), Born Rule, 5. Key Quantum Algorithms, Shor's Algorithm
- References: hilbert-banach-spaces, quantum-amplitude-estimation, quantum-information-entropy, spectral-theorem-unbounded
- Backlinks: hilbert-banach-spaces, path-integral-control, quantum-amplitude-estimation

## Entity: decision-theory
- Title: Statistical Decision Theory
- Category: Foundations
- Language: en
- Key Concepts: Decision Rule, Visualization: Bayes vs. Minimax, The Admissibility Crisis, Loss Function $L(\theta, a)$, Cross-[[shannon-entropy|Entropy]] Loss, A. Bayes Criterion (The Average Case), 4. Connection to Modern AI, Adversarial Machine Learning, Robust Control, Probability Theory, Related Topics, Bellman Equation, 3. Optimal Strategies, Bayesian Inference, Risk Function
- References: bayesian-inference, finance/shannon-entropy, reinforcement-learning
- Backlinks: naive-bayes

## Entity: tensor-decompositions
- Title: Tensor Decompositions
- Category: Foundations
- Language: en
- Key Concepts: Tensor Decompositions: Compressing Multi-dimensional Data, Reducing FLOPs, 1. The Core Problem: Rank of a Tensor, Tensors, Communication, Use Case, Limitation, Interpretation, rank-1 tensors, Related Topics, NP-hard, Visualization: CP vs. Tucker, Tensor Decompositions, Application, Compression Power
- References: distributed-training, many-body-tensor-networks, modern-quantization, pca
- Backlinks: course-math-for-ai, lora-peft

## Entity: maximum-entropy
- Title: The Maximum Entropy Principle
- Category: Foundations
- Language: en
- Key Concepts: E. T. Jaynes, 3. Duality with maximum likelihood, exactly the canonical form of an [[exponential-families|exponential family]], 6. Statistical mechanics: Boltzmann from MaxEnt, 11. Visualisation: entropy decreases with constraints, inverse temperature, 12. Related topics, Rényi entropy, fat-tailed distributions, 9. Information-geometric view, 5. Worked example: deriving the Gaussian, close to the prior, Energy-based models, non-informative prior problem, Tsallis entropy
- References: bayesian-inference, exponential-families, finance/shannon-entropy, fisher-information, manifold-learning, math/analysis-geometry/information-geometry, math/information-theory, mle, statistical-mechanics
- Backlinks: course-math-for-ai, distributions-zoo, entropy-information, information-theory-basics

## Entity: topos-theory
- Title: Topos Theory
- Category: Foundations
- Language: en
- Key Concepts: What is a Topos?, Quantum Logic, Etale Cohomology, Finite Limits and Colimits, 2. As a Logical Universe (Lawvere-Tierney), Holography, Why It Matters for AI and Physics, Two Views of a Topos, Related Topics, Independence Proofs, Exponentials, Intuitionistic Logic, Visualization: Truth Value Spectrum, 1. As a Generalized Space (Grothendieck), AI Semantics
- References: category-theory, homological-algebra, math/algebraic-topology
- Backlinks: category-theory, category-theory-ml, type-theory

## Entity: type-theory
- Title: Type Theory and Formal Logic
- Category: Foundations
- Language: en
- Key Concepts: Dependent types, paths, 1. The Curry-Howard Correspondence, Visualization: The Proof-Program Ladder, Neuro-symbolic AI, Related Topics, 4. Why It Matters for AI, Proofs are Programs, spaces, Lean, Agda, Type Theory and Formal Logic, Programs, AI for Math, 3. Homotopy Type Theory (HoTT)
- References: category-theory, reasoning-models, topos-theory
- Backlinks: category-theory, category-theory-ml, homotopy-type-theory

## Entity: math/variational-calculus
- Title: Variational Calculus
- Category: Foundations
- Language: en
- Key Concepts: 2. Variational Inference, functionals, Variational Calculus, Hamilton's Principle:, symmetries to conservation laws, ELBO, Related Topics, Action, Angular Momentum, The Core Problem, Euler–Lagrange Equation, Lagrangian, Variational Principles in AI, Geodesics:, Noether's Theorem
- References: lagrangian-mechanics, noether-theorem, variational-inference
- Backlinks: ai-physics/hamiltonian-nn, convex-optimization, math/differential-geometry, math/ode-stability

## Entity: math/cantor-diagonal
- Title: Cantor's Diagonal Argument
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Python Demonstration, [[godel-incompleteness|Gödel's incompleteness theorems]], uncountable, Self-reference in [[chain-of-thought|chain-of-thought reasoning]], Theorem: $\mathbb{R}$ is Uncountable, Diagonalization beyond set theory, independent, [[kolmogorov-complexity|Kolmogorov complexity]], Proof., Continuum Hypothesis, countable, Cantor's theorem, Cantor's Diagonal Argument, Turing's halting problem, Cantor's diagonal argument
- References: chain-of-thought, kolmogorov-complexity, llm, math/banach-tarski, math/godel-incompleteness
- Backlinks: chain-of-thought, math/banach-tarski, math/godel-incompleteness

## Entity: math/godel-incompleteness
- Title: Gödel's Incompleteness Theorems
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: incomplete, First Incompleteness Theorem, "I am unprovable in $T$", Python Demonstration, halting problem, Related Articles, Second Incompleteness Theorem, true but unprovable, [[kolmogorov-complexity|Kolmogorov complexity]], Gödel Numbering, Gödel's incompleteness theorems, Diagonalization lemma, Consequences, Connection to computability and AI, cannot prove its own consistency
- References: chain-of-thought, information-paradox, kolmogorov-complexity, llm, math/banach-tarski, math/cantor-diagonal, mechanistic-interpretability, transformer-architecture
- Backlinks: chain-of-thought, homotopy-type-theory, math/banach-tarski, math/cantor-diagonal, math/kolmogorov-probability-axioms, math/non-euclidean-geometry

## Entity: math/non-euclidean-geometry
- Title: Non-Euclidean Geometry
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: [[general-relativity|general relativity]], exactly one, Non-Euclidean geometry, Gauss's Theorema Egregium, Gaussian Curvature, Poincaré Disk Model, Related Articles, Metric, Non-Euclidean Geometry, Three Geometries, Connection to Physics, fifth postulate, The Parallel Postulate, Geodesics
- References: asymptotic-spacetime, bms-group, celestial-holography, general-relativity, gravitational-waves-gr, manifold-learning, math/banach-tarski, math/godel-incompleteness
- Backlinks: math/algebraic-topology, math/banach-tarski, math/differential-geometry

## Entity: math/banach-tarski
- Title: The Banach-Tarski Paradox
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Proof Sketch, The Role of the Axiom of Choice, two copies of itself, non-measurable sets, all subsets of $\mathbb{R}$ are Lebesgue measurable, Banach-Tarski paradox, Why This Is Not a Contradiction, without, Statement, Echoes in physics, free group, The Banach-Tarski Paradox, 2. Hausdorff Paradox (1914), 3. Axiom of Choice, Axiom of Choice
- References: anomalies, math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry
- Backlinks: math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry

## Entity: operator-semigroups
- Title: Operator Semigroups
- Category: Functional Analysis
- Language: en
- Key Concepts: Stochastic Processes, Schrödinger Equation, Contractive, 1. Mathematical Definition, Semigroup Property, Operator Semigroups: The Math of Evolution, Related Topics, One-Parameter Semigroup, Visualization: Smoothing Effect, Identity, The Hille-Yosida Theorem, Generator, Strong Continuity, 3. Physical Examples, Partial Differential Equations (PDEs)
- References: feller-processes, laplacian, neural-odes, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: dirichlet-forms, feller-processes, spectral-theorem-unbounded

## Entity: schwartz-distributions
- Title: Schwartz Distributions
- Category: Functional Analysis
- Language: en
- Key Concepts: 2. Weak Derivatives: Differentiating the Non-Differentiable, Partial Differential Equations (PDEs), Fundamental Solution, Fourier Transform, 3. The Fourier Transform of Distributions, Visualization: Derivative of a Step, Test Functions, 1. The Core Idea: Functions as Linear Maps, Related Topics, Dirac Delta, Tempered Distributions, every distribution has a derivative, Schwartz Distributions, 4. Fundamental Solutions (Green's Functions), Schwartz Space
- References: deep-galerkin, fourier-transform, laplacian, partial-differential-equations, spectral-graph-theory
- Backlinks: gff, microlocal-analysis

## Entity: sobolev-spaces
- Title: Sobolev Spaces & Weak Solutions
- Category: Functional Analysis
- Language: en
- Key Concepts: Weak Derivatives, Sobolev Spaces & Weak Solutions, Sobolev Embeddings, Physics-Informed Neural Networks (PINNs), Rellich-Kondrachov Theorem, Sobolev Spaces $W^{k,p}$
- Backlinks: deep-ritz-method, hilbert-banach-spaces, math/harmonic-analysis, math/lp-spaces, math/nonparametric-regression, math/spectral-theory-operators, math/topology-basics

## Entity: spectral-theorem-unbounded
- Title: Spectral Theorem for Unbounded Operators
- Category: Functional Analysis
- Language: en
- Key Concepts: Stable Processes, Self-Adjointness, Spectral Theorem for Unbounded Operators, Why It Matters in Physics and AI, Visualization: Discrete vs. Continuous Spectrum, Related Topics, Self-Adjointness: The Key Requirement, Quantum Mechanics, unbounded, Stochastic PDEs, Schrödinger equation, Spectral Measure, Functional Calculus, Kernel Methods, The Spectral Decomposition
- References: functional-analysis, math/spectral-theory-operators, operator-semigroups, spectral-graph-theory
- Backlinks: laplacian, operator-semigroups, quantum-math

## Entity: bayes-theorem
- Title: Bayes' Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: Related Topics, $P(A|B)$ (Posterior):, $P(B)$ (Evidence):, Applications in AI, Variational Autoencoders (VAE):, $P(A)$ (Prior):, Base Rate Fallacy, uncertainty, $P(B|A)$ (Likelihood):, Bayes' Theorem, The Formula, Logical Pitfalls, Bayesian Neural Networks:, Bayesian Inference:, Naive Bayes Classifier:
- References: naive-bayes, prm, variational-inference
- Backlinks: bayesian-networks, conditional-probability, map-estimation, probability-distributions, probability-paradoxes, statistical-inference

## Entity: combinatorics-induction
- Title: Combinatorics and Mathematical Induction
- Category: Fundamentals
- Language: en
- Key Concepts: 2. Binomial Theorem, 3. Mathematical Induction, Probability in Deep Learning, Intuition: The Domino Effect, Hardware Design, Combinatorics, Conclusion, 5. Pigeonhole Principle, Binomial Distribution, Permutations ($P_n$), Related Topics, 4. Why it Matters in CS and AI, Combinatorics and Induction: The Tools of Counting and Proving, Base Case, Pascal's Triangle
- References: lln-clt, stablecoin-mechanisms
- Backlinks: number-theory-basics

## Entity: lagrange-multipliers
- Title: Constrained Optimization and Lagrange Multipliers
- Category: Fundamentals
- Language: en
- Key Concepts: Constrained Optimization: The Method of Lagrange Multipliers, A. Support Vector Machines (SVMs), Action, Visualization: Tangent Gradients, Related Topics, 1. The Core Problem, tangent, B. Classical Mechanics, Lagrange Multipliers, Lagrange Multiplier, 3. The Lagrangian Function ($\mathcal{L}$), Euler-Lagrange equations, Support Vectors, 2. Geometric Intuition, Karush-Kuhn-Tucker (KKT)
- References: ai-physics/hamiltonian-nn, convex-optimization, convex-optimization-trading, multivariable-calculus
- Backlinks: course-math-for-ai, linear-programming

## Entity: convexity
- Title: Convexity
- Category: Fundamentals
- Language: en
- Key Concepts: local minimum is the global minimum, Positive Semi-Definite, Non-Convex, C. Log-Concavity in Stats, Strong Convexity, Karush-Kuhn-Tucker (KKT), B. Portfolio Optimization, ELBO, 1. Mathematical Rigor, B. Convex Functions, Related Topics, In Finance, Global Optimality, The Hessian Test, exponentially fast
- References: convex-optimization, convex-optimization-trading, gradient-hessian-jacobian, martingale-optimal-transport, variational-autoencoders
- Backlinks: course-math-for-ai, fixed-point-theorems, jensen-inequality, jensens-inequality, logistic-regression, martingale-optimal-transport

## Entity: differential-equations
- Title: Differential Equations: The Laws of Change
- Category: Fundamentals
- Language: en
- Key Concepts: Linearity, B. Stochastic Differential Equations (SDEs), Wave Equation, Superposition Principle, Differential Equations (DEs), PDE, 4. Analytical vs. Numerical Solutions, Exponential Growth, Visualization: The Vector Field, Runge-Kutta, Related Topics, ODE, Second Order, Numerical, 5. Why it Matters in AI and Finance
- References: automatic-differentiation, geometric-brownian-motion, ricci-flow, stochastic-differential-equations

## Entity: fourier-transform
- Title: Fourier Transform
- Category: Fundamentals
- Language: en
- Key Concepts: 4. Key Properties, Fourier Transform, Convolution Theorem, Time Domain, Fourier Neural Operators (FNO), 2. The Fourier Transform (Continuous Case), Fast Fourier Transform (FFT), Geometric Deep Learning (GNNs), Related Topics, 5. Why it Matters in AI and Science, Inverse Transform, Duality, Visualization: From Time to Frequency, Positional Encodings, Uncertainty Principle
- References: finance/spectral-analysis, spectral-graph-theory
- Backlinks: characteristic-functions, complex-analysis, finance/dft, finance/fft, finance/prony-hankel-spectral, mgf, mgf-characteristic-functions, occupation-measures-local-times, schwartz-distributions

## Entity: gradient-hessian-jacobian
- Title: Gradient, Hessian, and Jacobian
- Category: Fundamentals
- Language: en
- Key Concepts: Local Minimum, Deep Learning, Gradient, Hessian, and Jacobian: The Geometry of Derivatives, Related Topics, Optimization, [[automatic-differentiation|Backpropagation]], Jacobian-Vector Products (JVP), Visualization: Landscape Analysis, Newton's Method, 3. The Hessian ($H$) - The Curvature, [[spectral-theory-operators|Eigenvalues]] and Stability, Hessian-Free & K-FAC, vector-valued, Geometric Meaning, In AI
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, laplacian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, change-of-variables, convexity, course-math-for-ai, laplacian, optimization-basics, qat

## Entity: hilbert-banach-spaces
- Title: Hilbert and Banach Spaces
- Category: Fundamentals
- Language: en
- Key Concepts: 11. Visualisation, Corollary., Operator classes in a Hilbert space, complete, Closed graph theorem, Open mapping theorem, Spectral theorem (compact self-adjoint)., Sobolev spaces, Hilbert and Banach Spaces, Direct-sum decomposition theorem., Moore-Aronszajn theorem., The five pillars of Banach-space theory, 12. Related topics, Normal:, Fourier expansion.
- References: functional-analysis, gaussian-processes, kernel-methods-rkhs, math/lp-spaces, math/spectral-theory-operators, quantum-math, sobolev-spaces
- Backlinks: course-math-for-ai, fixed-point-theorems, math/functional-analysis, quantum-math

## Entity: calculus-integration
- Title: Integration and the Fundamental Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: C. Finance: Risk Accumulation, Integration, Visualization: Accumulation, Antiderivative, B. Physics: Work and Energy, Related Topics, Integration and the Fundamental Theorem of Calculus, 5. Beyond Riemann: Lebesgue Integration, Probability Density Function (PDF), 3. Techniques of Integration, 2. The Fundamental Theorem of Calculus (FTC), 1. The Definite Integral (Riemann Sum), Substitution (u-substitution), Lebesgue Integration, Intuition
- References: measure-theory, taylor-series
- Backlinks: neural-radiance-fields-math

## Entity: lln-clt
- Title: LLN and CLT: The Pillars of Statistics
- Category: Fundamentals
- Language: en
- Key Concepts: 1. Law of Large Numbers (LLN), sum, Hypothesis Testing, 2. Central Limit Theorem (CLT), Intuition: The Casino's Edge, Related Topics, 4. Limitations and "Fat Tails", Law of Large Numbers (LLN), Finance, LLN and CLT: Why Probability Works, $n \geq 30$, Weak LLN, Strong LLN, finite variance, Normal Distribution
- References: black-scholes, finance/black-swan-scenarios, finance/monte-carlo-method
- Backlinks: combinatorics-induction, course-math-for-ai, delta-method, discrete-random-variables, fundamental-inequalities, law-iterated-logarithm, probability-distributions, sequences-series-convergence

## Entity: laplacian
- Title: Laplacian Operator
- Category: Fundamentals
- Language: en
- Key Concepts: B. Curvature and Energy, Laplace Equation, Dirichlet Energy, 1. Mathematical Definition, Related Topics, 3. Role in Modern AI, Spectral Bias in Neural Networks, 2. Physical and Geometric Intuition, Graph Laplacian, Heat Equation, Physics-Informed Neural Networks (PINNs), Trace, A. The Diffusion Engine, into, 4. Relationship to the Hessian
- References: diffusion-models, eigenvalues-eigenvectors, finance/shannon-entropy, gradient-hessian-jacobian, graph-neural-networks, math/spectral-theory-operators, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: course-math-for-ai, equivariant-diffusion-models, gff, gradient-hessian-jacobian, operator-semigroups, schwartz-distributions

## Entity: linear-programming
- Title: Linear Programming and Duality
- Category: Fundamentals
- Language: en
- Key Concepts: Convex Polytope, Visualization: The Feasible Region, Dual, Shadow Prices, B. Portfolio Optimization, 2. The Simplex Method, Linear Programming: The Science of Resource Allocation, 1. The Standard Form, Related Topics, C. Large-Scale Logistics, 3. Duality: The Hidden Logic, A. Optimal Transport, Simplex Algorithm, 4. Why it Matters in AI and Finance, Linear Objective Function
- References: convex-optimization-trading, lagrange-multipliers, optimal-transport
- Backlinks: course-math-for-ai

## Entity: linear-spaces-basis
- Title: Linear Spaces, Basis, and Dimension
- Category: Fundamentals
- Language: en
- Key Concepts: Rank, Commutativity, Subspace, Fourier Transforms, 4. Change of Basis, 2. Linear Independence and Span, Related Topics, Distributivity, Existence of Zero, Visualization: Basis and Span, Uniqueness, Dimension, both, Linear Combination, 1. Defining a Linear Space ($V$)
- References: eigenvalues-eigenvectors, quantum-entanglement, quantum-information-entropy, tensor-calculus
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, linear-systems-gauss, taylor-series

## Entity: linear-systems-gauss
- Title: Linear Systems and Gaussian Elimination
- Category: Fundamentals
- Language: en
- Key Concepts: Rank, Forward Elimination, Free Variables, Back Substitution, 1. Matrix Representation, Reduced Row Echelon Form (RREF), Infinitely Many Solutions, B. Finite Element Method (FEM), Related Topics, Linear Systems and Gaussian Elimination: The Algorithm of Algebra, Swapping, Adding, Gauss-Jordan Elimination, 5. Computational Complexity, No Solution (Inconsistent)
- References: convex-optimization, eigenvalues-eigenvectors, linear-spaces-basis
- Backlinks: course-math-for-ai

## Entity: manifold
- Title: Manifold
- Category: Fundamentals
- Language: en
- Key Concepts: 3. Riemannian Manifolds: Measuring Distance, Atlas, Metric Tensor, Geodesics, Riemannian Manifold, 4. Types of Manifolds in Wiki, Related Topics, [[manifold-learning|Manifold]] Hypothesis, Real-world high-dimensional data is not spread uniformly across space., Riemannian [[convex-optimization|Gradient Descent]], Curvature, Differentiable Manifold, Neural Networks as Coordinate Seekers, Application: Riemannian Optimization, [[manifold-learning|Manifold]]: The Geometry of Data and Spacetime
- References: complex-manifolds, convex-optimization, general-relativity, manifold-learning, math/differential-geometry, math/topology-basics, symplectic-geometry, variational-autoencoders
- Backlinks: course-math-for-ai, information-geometry-finance

## Entity: martingale
- Title: Martingale
- Category: Fundamentals
- Language: en
- Key Concepts: The Fair Property, 2. Types of Martingales, Convergence of Algorithms, Integrability, 1. Definition, 3. Fundamental Theorems, Related Topics, Martingale, Submartingale, In Finance, B. Doob-Meyer Decomposition, 4. Why Tier-1 Quants Care, Supermartingale, Efficient Market Hypothesis, Martingale: The Math of a Fair Game
- References: brownian-motion, feller-processes, finance/shannon-entropy, martingale-optimal-transport, risk-neutral-valuation
- Backlinks: course-math-for-ai, martingale-optimal-transport, measure-theory

## Entity: measure-theory
- Title: Measure Theory Basics
- Category: Fundamentals
- Language: en
- Key Concepts: Likelihood Ratio, Radon-Nikodym Derivative, 3. Crucial Theorems for AI and Finance, Related Topics, In Finance, A. Radon-Nikodym Theorem, B. Fatou's Lemma and Monotone Convergence, Continuous-time Martingales, 4. Why Tier-1 Quants Care, Countable Additivity, Detailed Sections, Stochastic Discount Factor, 1. What is a Measure ($\mu$)?, 2. Key Concepts, Non-negativity
- References: frtb-es, martingale, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: axiomatic-probability, bayesian-inference, calculus-integration, continuous-random-variables, course-math-for-ai, dirichlet-forms, markov-chebyshev

## Entity: metric-spaces
- Title: Metric Spaces and Topology
- Category: Fundamentals
- Language: en
- Key Concepts: B. Completeness, Euclidean ($L_2$), [[manifold-learning|Manifold]] Learning, 3. Key Concepts, Homeomorphism, Embedding Spaces, Triangle Inequality, Related Topics, A. Compactness, 1. What is a Metric?, Cosine Similarity, Topology, Topologically Continuous, Visualization: Continuous Deformation, Metric Spaces and Topology: The Fabric of Continuity
- References: ai-theory/adversarial-examples, lending-mechanics, manifold-learning, optimal-transport

## Entity: multivariable-calculus
- Title: Multivariable Calculus: Jacobians and Hessians
- Category: Fundamentals
- Language: en
- Key Concepts: Gamma, 4. Why it Matters for High-Finance, 5. The Chain Rule in Higher Dimensions, Multivariable Calculus: The Language of Optimization, 2. The Jacobian Matrix ($\mathbf{J}$), Jacobian, 3. The Hessian Matrix ($\mathbf{H}$), Local Minimum, AI Application, Related Topics, Optimization, [[convex-optimization|Gradient Descent]], [[automatic-differentiation|Backpropagation]], Hessian, PyTorch
- References: automatic-differentiation, black-scholes, convex-optimization, math/analysis-geometry/information-geometry, math/spectral-theory-operators, taylor-series
- Backlinks: course-math-for-ai, lagrange-multipliers, taylor-series

## Entity: number-theory-basics
- Title: Number Theory and Cryptography
- Category: Fundamentals
- Language: en
- Key Concepts: Diffie-Hellman Key Exchange, Modular Inverses, 5. Hash Functions and Collisions, 1. Divisibility and Prime Numbers, Prime Number, Related Topics, Greatest Common Divisor (GCD), Euclidean Algorithm, 4. The Euclidean Algorithm, Collision Resistance, Number Theory: Modular Arithmetic and the Foundation of Crypto, Public Key Cryptography, 3. Fermat's Little Theorem, The Discrete Logarithm Problem, 2. Modular Arithmetic (Clock Math)
- References: cedefi-gateway-architecture, cedefi-mechanics, combinatorics-induction

## Entity: taylor-series
- Title: Taylor Series and Approximation
- Category: Fundamentals
- Language: en
- Key Concepts: Sine, 4. Why it Matters in Physics and AI, Second-order Taylor expansion, Taylor Series: The Art of Polynomial Approximation, Maclaurin Series, B. Euler's Identity, Geometric, Related Topics, Taylor Series, C. Optimization, Curvature, A. Small Angle Approximation, Exponential, 2nd Order (Quadratic), 1. The Taylor Formula
- References: black-scholes, linear-spaces-basis, multivariable-calculus
- Backlinks: calculus-integration, course-math-for-ai, multivariable-calculus, sequences-series-convergence

## Entity: ads-cft-deep
- Title: AdS/CFT Correspondence
- Category: Holography
- Language: en
- Key Concepts: Boundary, Anti-de Sitter Space (AdS), Quark-Gluon Plasma, negative cosmological constant, Conformal Field Theory (CFT), gravity is not a fundamental force, Computational Complexity, ER = EPR, Related Topics, 2. The Ryu-Takayanagi Formula: Geometry is Information, Quantum Complexity, EPR, Symmetric under Scaling, 1. The Two Sides of the Bridge, AdS/CFT Correspondence: The Holographic Principle
- References: black-hole-thermodynamics, conformal-field-theory, quantum-information-entropy
- Backlinks: quantum-information-entropy

## Entity: agentic-patterns
- Title: Agentic Design Patterns
- Category: LLM Infrastructure
- Language: en
- Key Concepts: What Is It, Why, Related Topics, 2. Planning, Frameworks, New Standard, Visualization: Single Pass vs. Agentic, Mathematical Perspective: Iterative Refinement, Agentic Design Patterns, 3. Tool Use (Reasoning + Acting), Agentic Workflows, Workflow, 1. Reflection (Self-Correction), 4. Multi-Agent Collaboration, Implementation: Simple Reflection Pattern
- References: agents, llm, mcp, tool-use

## Entity: preference-optimization
- Title: Beyond DPO: KTO & IPO
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Data Efficiency, High, Prospect Theory, Human-Centric, Foundation, Stability, 1. KTO: Kahneman-Tversky Optimization, overfitting problem, KTO, Related Topics, IPO, Advantages, 2. IPO: Identity Preference Optimization, The Key Idea, Which One to Choose?
- References: dpo, fine-tuning, rlhf
- Backlinks: llm

## Entity: chain-of-thought
- Title: Chain-of-Thought Reasoning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Prerequisites, Emergent behavior:, Chain-of-Thought Reasoning, Medical diagnosis:, [[godel-incompleteness|Gödel's incompleteness theorems]], Theoretical limits, Mathematical / Formal Framework, When CoT Helps vs. Hurts, Related Topics, Least-to-most prompting:, Zero-shot CoT:, Educational tutoring:, How It Works, Legal reasoning:, [[kolmogorov-complexity|Kolmogorov complexity]]
- References: fine-tuning, kolmogorov-complexity, llm, math/cantor-diagonal, math/godel-incompleteness, mcp, mechanistic-interpretability, rag, rlhf, speculative-decoding, tool-use, transformer-architecture
- Backlinks: agents, ai-theory/in-context-learning, evaluation-llms, math/cantor-diagonal, math/godel-incompleteness, mcp, meta-learning, prm, reasoning-models, rlhf, test-time-scaling, tool-use

## Entity: context-length
- Title: Context Length Extension
- Category: LLM Infrastructure
- Language: en
- Key Concepts: FlashAttention and Memory-Efficient Long Context, Sliding Window Attention, only on relative position, middle, ALiBi: [[attention-mechanisms|Attention]] with Linear Biases, Context Length Extension, Llama 3, requires no retraining to extend context, The "Lost in the Middle" Problem, RoPE: Rotary Position Embedding, Gemini 1.5, Current Landscape, RoPE Scaling, The Sinusoidal Baseline and Its Limits, head-specific slope
- References: attention-mechanisms, fine-tuning, inference-serving, llm, rag, speculative-decoding, state-space-models, transformer-architecture, vector-databases

## Entity: continuous-batching
- Title: Continuous Batching
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Orca Breakthrough, Visualization: Static vs. Continuous, Eviction, Insertion, padded, Prefill Phase, Related Topics, Operate at the iteration (token) level, not the request level, 10x to 20x, Result, chunked prefill, Continuous Batching (In-Flight Batching), Why It Matters, The Problem with Static Batching, batch
- References: hardware-io-attention, inference-serving, llm, paged-attention
- Backlinks: speculative-decoding

## Entity: curriculum-learning
- Title: Curriculum Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Model-based, Coding, 1. Predefined Curriculum, Zone of Proximal Development, Reasoning, Related Topics, Visualization: Learning Dynamics, Context Length, Better Generalization, Curriculum Learning, Why Ordering Matters, Faster Convergence, Heuristics, Applications in LLMs, Competence Scaling
- References: fine-tuning, neural-scaling-laws, training-dynamics

## Entity: dl-compilers
- Title: Deep Learning Compilers
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Technologies: XLA, Triton, and `torch.compile`, Operator Fusion, Visualization: The Compilation Pipeline, Related Topics, Deep Learning Compilers and Kernel Fusion, 1. XLA (Accelerated Linear Algebra), The Problem: Kernel Launch Overhead and Memory Bound, 2. Triton, Deep Learning Compilers, Why It Matters, 3. `torch.compile` (PyTorch 2.0), The Solution: Operator Fusion
- References: flash-attention, gpu-architecture, hardware-io-attention, inference-serving, moe-routing
- Backlinks: flash-attention, gpu-architecture

## Entity: dpo
- Title: Direct Preference Optimization (DPO)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Compute, [[rlhf]], Likelihood Over-optimization, Reward Model, Related Topics, Stability, Direct Preference Optimization (DPO), Sampling, binary cross-[[shannon-entropy|entropy]] loss, The Mathematical Breakthrough, preferred, Implementation with `trl`, Dataset Quality, Complexity, Reference Model Dependency
- References: agents, finance/shannon-entropy, fine-tuning, llm, rlhf
- Backlinks: language-models/safety/rlhf-dpo, llm, preference-optimization, preference-optimization-variants, rlhf, self-rewarding

## Entity: distributed-training
- Title: Distributed Training
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Check-pointing, Weights, All-Gather, Modern Solution, Problem, Distributed Training: Scaling LLMs to Trillions of Parameters, Use Case, ZeRO-1, Related Topics, ZeRO-3, Efficiency, 2. ZeRO: Zero Redundancy Optimizer, A. Data Parallelism (DP), ZeRO, Bubble Time
- References: fine-tuning, flash-attention, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: fsdp, hardware-io-attention, model-parallelism, tensor-decompositions

## Entity: federated-learning
- Title: Federated Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Upload, 1. Statistical Heterogeneity (Non-IID), LoRA, Federated Learning, Broadcast, Aggregation, Related Topics, Finance, Applications, Federated Averaging (FedAvg), Local Training, Challenges in Federated Learning, Mobile Health, 3. System Heterogeneity, Visualization: Convergence Delay
- References: differential-privacy, fine-tuning, llm, quantization
- Backlinks: differential-privacy

## Entity: flash-attention
- Title: FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Impact, Visualization: Memory Flow, Memory IO, Online Softmax, IO-Aware, 3. Results: Scaling to 1M Tokens, Related Topics, Tri Dao et al. (2022), B. Online Softmax, Speed, does not store it, 1. The Bottleneck: The Memory Wall, 2. The Solution: Tiling and Recomputation, C. Recomputation (Gradient Checkpointing), 16 GB
- References: attention-mechanisms, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, distributed-training, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, language-models/mamba-ssm, paged-attention, rope-scaling

## Entity: fsdp
- Title: Fully Sharded Data Parallel (FSDP)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Backward Pass, Memory usage, Scales down, All-Gather, Weights, Forward Pass, Communication Efficiency, The Lifecycle of a Layer, Related Topics, ZeRO-3, Massive Memory Savings, Max Model Size, Visualization: Memory per GPU, Virtually unlimited, Comparison: DDP vs. FSDP
- References: distributed-training, fine-tuning, inference-serving, model-parallelism
- Backlinks: model-parallelism

## Entity: gpu-architecture
- Title: GPU Architecture for Deep Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 2. Threads and Warps, Mixed Precision, Alignment, Warp, Registers, 1. Streaming Multiprocessors (SMs), must be multiples of 8, 16, or 32, 4. The Memory Hierarchy, Related Topics, Tensor Cores, 3. Tensor Cores, [[flash-attention|HBM]] (Global Memory), [[inference-serving|GPU]] Architecture: SMs, Warps, and Tensor Cores, L1 Cache / Shared Memory, Thread
- References: attention-mechanisms, dl-compilers, flash-attention, hardware-io-attention, inference-serving, modern-quantization
- Backlinks: distributed-training, dl-compilers, flash-attention, modern-quantization

## Entity: hardware-io-attention
- Title: Hardware IO and FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: entirely within SRAM, Related Topics, Hardware IO and the Physics of FlashAttention, Tiling, The Memory Hierarchy of a [[inference-serving|GPU]], The "Memory Wall" Problem, Visualization: Memory Speed vs. Access, Why It Matters for the Future, IO-bound, Speed, [[flash-attention|SRAM]] (Static RAM), Role, 90% of its time waiting, [[flash-attention|HBM]] (High Bandwidth Memory), Size
- References: attention-mechanisms, distributed-training, flash-attention, inference-serving
- Backlinks: continuous-batching, distributed-training, dl-compilers, flash-attention, gpu-architecture, paged-attention

## Entity: agents
- Title: LLM Agents
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Error Propagation, Prerequisites, Context Overflow, Orchestrator + Workers, Parallelism and Cost, Acting, Computation:, Clear descriptions:, Financial analysis:, Action:, Initialization:, Sliding window:, Loop detection:, Reasoning, Knowledge base chat:
- References: chain-of-thought, fine-tuning, llm, mcp, rag, reinforcement-learning, tool-use
- Backlinks: agentic-patterns, dpo, inference-serving, prompt-engineering, vector-databases

## Entity: evaluation-llms
- Title: LLM Evaluation
- Category: LLM Infrastructure
- Language: en
- Key Concepts: orthogonal evaluation across diverse benchmarks never used for training, Chatbot Arena, Membership inference, Goodhart's Law: Measure Becomes Target, Compare to human performance., HELM, BIG-Bench and BIG-Bench Hard, use calibrated, continuous metrics, Test on held-out data never visible to model or hyperparameter search., Exact matching, Genuine emergence, MMLU (Massive Multitask Language Understanding), Multi-Turn Preference Evaluation, MT-Bench, Metric artifact hypothesis
- References: chain-of-thought, llm, rlhf
- Backlinks: ai-theory/knowledge-distillation, bayesian-deep-learning, prompt-engineering

## Entity: fine-tuning
- Title: LLM Fine-Tuning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: LoRA rank, Data, [[rlhf]], Full Fine-Tuning, LoRA, Fine-tune if:, Prompting / [[rag]] if:, PEFT: Parameter-Efficient Fine-Tuning, Instruction tuning, Epochs, Adapter Layers, Supervised Fine-Tuning (SFT), Learning rate, Instruction Tuning vs. [[rlhf]], Monitoring
- References: attention-mechanisms, convex-optimization, inference-serving, quantization, rag, rlhf, transformer-architecture
- Backlinks: adalora, agents, ai-theory/in-context-learning, ai-theory/knowledge-distillation, chain-of-thought, code-models, constitutional-ai, context-length, contrastive-learning, curriculum-learning, distributed-training, dora, dpo, effective-field-theory, federated-learning, fsdp, language-models/safety/rlhf-dpo, llm, llm-financial-analysis, lora-peft, mixture-of-experts, ml-options-pricing, model-merging, modern-quantization, nlp-financial-analysis, positional-encodings, preference-optimization, prompt-engineering, qat, qlora, quantization, rag, rlhf, self-rewarding, slm, synthetic-data-alignment, tool-use, training-dynamics, weight-averaging

## Entity: inference-serving
- Title: LLM Inference Serving
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Prefill vs. decode: asymmetric computational graph, Related topics, Disaggregation, Fragmentation elimination, Prefill, GPU utilization, Production systems, Flash [[attention-mechanisms|Attention]] for long contexts, Text Generation Inference, Ollama, SGLang, vLLM, pages, Tokens/sec/GPU, TBT (time-between-tokens)
- References: agents, attention-mechanisms, flash-attention, llm, mixture-of-experts, quantization, speculative-decoding, transformer-architecture
- Backlinks: attention-mechanisms, automatic-differentiation, context-length, continuous-batching, distributed-training, dl-compilers, finance/monte-carlo-method, finance/xva, fine-tuning, flash-attention, fsdp, gpu-architecture, hardware-io-attention, language-models/mamba-ssm, llm-financial-analysis, lora-peft, mla, model-merging, model-parallelism, modern-quantization, paged-attention, quantization, queuing-theory, rope-scaling, slm, speculative-decoding, temporal-fusion-transformer, tokenization, vector-databases, volatility-modulated-spectral-surface

## Entity: lora-peft
- Title: LoRA and PEFT
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Prompt Tuning, Multi-tenancy, Portability, Other PEFT Techniques, Related Topics, rank $r \ll d$, VRAM Savings, Advantages of LoRA, LoRA and Parameter-Efficient [[fine-tuning]] (PEFT), low intrinsic rank, Prefix Tuning, LoRA, IA3, QLoRA, The Mathematical Intuition
- References: fine-tuning, inference-serving, quantization, tensor-decompositions, transformer-architecture

## Entity: mcp
- Title: MCP (Model Context Protocol)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: MCP with OAuth:, QuantLib-backed pricers, Key Trade-offs, Prerequisites, Primitives, Transport Layer, quantitative finance workflows, Mathematical / Formal Framework, Tools, Related Topics, Versioning:, Internal valuation memos and risk dashboards, MCP for quantitative finance, server, Security:
- References: chain-of-thought, llm, llm-financial-analysis, rag, slm, speculative-decoding, tool-use
- Backlinks: agentic-patterns, agents, chain-of-thought, tool-use

## Entity: model-parallelism
- Title: Model Parallelism: Tensor and Pipeline
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Problem: Pipeline Bubbles, Data Parallelism (DP/ZeRO), 3D Parallelism, Hardware, Model Parallelism: Tensor vs. Pipeline, Communication, Related Topics, 3. Comparison and 3D Parallelism, Tensor Parallelism (TP), NVLink, Visualization: The Pipeline Bubble, Pros, Pipeline Parallelism (PP), The Idea, The Solution: Micro-batching
- References: attention-mechanisms, distributed-training, fsdp, inference-serving, transformer-architecture
- Backlinks: fsdp

## Entity: quantization
- Title: Model Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: uniform, Q5_K_M, signal-to-noise ratio, NF4: 4-Bit Normal Float, Memory Footprint Calculations, See Also, Q8_0, Weight quantization, second-order optimization, GGUF Format and Local Inference, Absmax Quantization, llama.cpp, Activation quantization, symmetric, Integration with Inference Pipelines
- References: attention-mechanisms, fine-tuning, inference-serving, llm, mixture-of-experts, neural-scaling-laws, speculative-decoding, transformer-architecture
- Backlinks: ai-theory/knowledge-distillation, bitnet, conformal-field-theory, federated-learning, fine-tuning, hamiltonian-mechanics, homological-algebra, inference-serving, linear-algebra, lora-peft, modern-quantization, pauli-exclusion-quantization, qat, qft-basic, qlora, quantization-error-math, quantization-ptq-information, research/mla-financial-reasoning, slm, small-ball-probabilities, vector-databases

## Entity: modern-quantization
- Title: Modern Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: FP8, [[quantization]] Error, Result, 2. NormalFloat4 (NF4): Quantization for All, 3. GPTQ: Post-Training Quantization (PTQ), 1% of weights, Visualization: Distribution-Aware Binning, Related Topics, Hessian, Normal (Gaussian) Distribution, bitsandbytes, 5. FP8 and the Future, Modern [[quantization]]: NF4, GPTQ, and AWQ, Hopper (H100), Inversion Problem
- References: fine-tuning, gpu-architecture, inference-serving, quantization
- Backlinks: deep-lob, gpu-architecture, qat, tensor-decompositions

## Entity: orm-prm
- Title: ORM vs PRM: Preference Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: how to reward, Visualization: Reward Density, Excellent, Related Topics, The Pros, False Positives, ORM vs PRM: Two Ways to Reward Reasoning, 1. Outcome Reward Models (ORM), The Signal, The Cons, Yes, each individual step, Implementation in [[rlhf]], final answer, PRM
- References: llm, mcts, prm, reasoning-models, rlhf

## Entity: paged-attention
- Title: PagedAttention and KV Cache
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Fragmentation, KV Cache, share the same physical blocks, vLLM, Related Topics, internal fragmentation, 2. Prompt Sharing, PagedAttention and KV Cache Management, Paging, Logical vs. Physical, Visualization: Paged Memory Allocation, Unpredictability, The Problem: Memory Fragmentation, Blocks, external fragmentation
- References: attention-mechanisms, flash-attention, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, continuous-batching

## Entity: prompt-engineering
- Title: Prompt Engineering
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Zero-shot and Few-shot Learning, Chain-of-Thought Prompting, Tree of Thoughts and Search, System Prompts and Jailbreaking, Tree of Thoughts, Prompt Sensitivity and Optimization, Self-consistency, Reasoning and Acting (ReAct), DSPy, Structured Output and Grammar Constraints, User turn, Assistant turn, APE, System message, Limitations and Trade-offs
- References: agents, evaluation-llms, fine-tuning, llm, meta-learning, rlhf, tool-use
- Backlinks: ai-theory/in-context-learning

## Entity: qat
- Title: Quantization Aware Training (QAT)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Backward Pass, Related Topics, Step Size, Fake [[quantization]], [[quantization]] Aware Training (QAT), PTQ (Post-Training), 2. Straight-Through Estimator (STE), QAT (Aware Training), 3. LSQ: Learned Step Size Quantization, 4. QAT vs. PTQ: When to use which?, 2-bit or 3-bit, QLoRA, Forward Pass, 1. The Simulated [[quantization]] (Fake Quant), 5. Modern Variant: QLoRA
- References: automatic-differentiation, fine-tuning, gradient-hessian-jacobian, modern-quantization, quantization

## Entity: rag
- Title: RAG (Retrieval-Augmented Generation)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Context Compression, Multi-Query, Related Topics, Faithfulness, Architecture Workflow, Context Recall, Vector Search, Mathematical Framework: RRF, RAG (Retrieval-Augmented Generation), Pre-Retrieval (Query Transformation), Retrieval (Hybrid Search), Global Queries, GraphRAG: The Next Frontier, Post-Retrieval (Reranking), Overview
- References: embedding-models, fine-tuning, llm, llm-financial-analysis, tool-use, vector-databases
- Backlinks: about, agents, chain-of-thought, context-length, embedding-models, fine-tuning, llm-financial-analysis, mcp, naive-bayes, nlp-financial-analysis, projects/llm-wiki, research/mla-financial-reasoning, slm, tool-use, vector-databases

## Entity: self-rewarding
- Title: Self-Rewarding Models
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Llama 3, student, Self-Evaluation, Risks and Limitations, Related Topics, Visualization: Performance Scaling, The Iterative Loop, Mathematical Formulation: Iterative [[dpo]], teacher, Real-World Examples, Self-Rewarding Language Models, Reward Hacking, [[dpo]]/[[fine-tuning]], Data Curation, Response Generation
- References: dpo, fine-tuning, prm, reasoning-models

## Entity: speculative-decoding
- Title: Speculative Decoding
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Mathematical Foundation: Rejection Sampling, 3. Self-Speculative Decoding, The Workflow, 1. Medusa (Draft-less Speculative Decoding), Verifying, Code/Prose, Draft Model, Related Topics, Drafting, 2. EAGLE (Extrapolation Algorithm for Greater Language-model Efficiency), Advanced Variations, memory-bound, Performance Gains, The Core Concept, Medusa
- References: continuous-batching, inference-serving, kv-cache-compression, llm, multi-token-prediction, prm
- Backlinks: chain-of-thought, context-length, inference-serving, mcp, multi-token-prediction, quantization, tool-use

## Entity: tokenization
- Title: Tokenization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Why Not Characters or Words?, Numbers, Byte-level models, Vocabulary Size vs. Perplexity, Related Topics, Token Fertility and Inference Cost, Characters, Byte-level BPE, Common Algorithms, likelihood ratio, 2. WordPiece, 1. Byte-Pair Encoding (BPE), prunes, Fertility, 3. Unigram Language Model
- References: attention-mechanisms, inference-serving, transformer-architecture

## Entity: tool-use
- Title: Tool Use / Function Calling
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Tool use with streaming, Step 3 — Tool execution., Key Trade-offs, Calendar and email agents:, Write tools, Mathematical / Formal Framework, [[mcp]] (Model Context Protocol), Financial copilots:, Code interpreters:, Related Topics, Tool Safety Architecture, Latency:, How It Works, Forced tool use, Security:
- References: chain-of-thought, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, mcp, rag, reinforcement-learning, speculative-decoding
- Backlinks: agentic-patterns, agents, chain-of-thought, mcp, prompt-engineering, rag, research/mla-financial-reasoning

## Entity: vector-databases
- Title: Vector Databases
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Chroma, L2 distance, IndexIVFFlat, Problem: Curse of Dimensionality, FAISS: Industry Standard, Layer assignment, IVF: Inverted File Index, Trade-off, IndexIVFPQ, and, [[inference-serving|GPU]] support, Trade-offs, Problem, Similarity Metrics, Pre-filter
- References: agents, embedding-models, inference-serving, llm, quantization, rag, transformer-architecture
- Backlinks: context-length, matryoshka-embeddings, rag

## Entity: weight-averaging
- Title: Weight Averaging and SWA
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Related Topics, flat minima, Polyak-Ruppert Averaging (EMA), Visualization: Converging to the Center, Stochastic Weight Averaging (SWA), The Problem: Sharp Minima, Why It Works: The Flatness Hypothesis, Exponential Moving Average (EMA), flatness, Phase 2, Weight Averaging and Stochastic Weight Averaging (SWA), sharp minimum, Averaging, Phase 1
- References: fine-tuning, model-merging, training-dynamics

## Entity: preference-optimization-variants
- Title: Advanced Preference Optimization
- Category: Language Models
- Language: en
- Key Concepts: 2. IPO (Identity Preference Optimization), 3. ORM and PRM Integration, Related Topics, Process-based, KTO, IPO, PPO, Outcome-based, Step-wise DPO, DPO, Advanced Preference Optimization, 1. KTO (Kahneman-Tversky Optimization), Prospect Theory, unpaired data, PRM (Process Reward Model)
- References: dpo, prm, reasoning-models, rlhf
- Backlinks: synthetic-data-alignment

## Entity: language-models/safety/rlhf-dpo
- Title: Alignment: RLHF and DPO
- Category: Language Models
- Language: en
- Key Concepts: Related Topics, Stability, [[rlhf]] (Reinforcement Learning from Human Feedback), Compute, Alignment, Alignment: [[rlhf]] and [[dpo]], [[dpo]] (Direct Preference Optimization), Constitutional AI, Drawbacks:, Reward Model (RM), PPO (Proximal Policy Optimization):, Reward Modeling:, Complexity, SFT (Supervised [[fine-tuning]]):, [[rlhf]] vs. DPO
- References: constitutional-ai, dpo, finance/shannon-entropy, fine-tuning, llm, math/analysis-geometry/information-geometry, mechanistic-interpretability, rlhf

## Entity: bitnet
- Title: BitNet & 1.58-bit LLMs
- Category: Language Models
- Language: en
- Key Concepts: What Is It, Related Topics, BitLinear, Small Model Gap, Throughput, BitNet & 1.58-bit LLMs (Ternary [[quantization]]), Activation Quantization, How It Works, Visualization, Hardware Optimization, Benefits, Training Complexity, Ternary Weight [[quantization]], Trade-offs, Scaling Laws
- References: llm, mixture-of-experts, neural-scaling-laws, quantization, reasoning-models, slm, transformer-architecture

## Entity: code-models
- Title: Code Language Models
- Category: Language Models
- Language: en
- Key Concepts: Standard next-token prediction, Data composition, Code-focused continued pre-training, Prerequisites, RLEF, Fill-in-the-Middle (FIM), HumanEval pass@k metric, Trade-offs vs Other Types, Deduplication, General pre-training, Related Topics, Multi-stage training, FIM training, Correctness vs. plausibility, Code completion
- References: attention-mechanisms, fine-tuning, llm, mixture-of-experts, pac-learning, slm, transformer-architecture
- Backlinks: multi-token-prediction

## Entity: constitutional-ai
- Title: Constitutional AI and RLAIF
- Category: Language Models
- Language: en
- Key Concepts: Constitutional AI and RLAIF: Self-Aligning Systems, Safety-Efficiency Frontier, [[rlhf]], Expensive, Black-box, Generation, Phase 2: Reinforcement Learning (RLAIF), Constitutional AI (CAI), Revision, Subjective, 1. The Core Problem with [[rlhf]], Visualization: The CAI Feedback Loop, Related Topics, 3. The Constitution, Feedback Model
- References: fine-tuning, llm, mechanistic-interpretability, reinforcement-learning, rlhf
- Backlinks: language-models/safety/rlhf-dpo, mechanistic-interpretability

## Entity: embedding-models
- Title: Embedding Models
- Category: Language Models
- Language: en
- Key Concepts: Trade-offs vs Other Types, Clustering, Retrieval-augmented generation, Multi-vector representations, Long documents, InfoNCE / NT-Xent loss, Hard negative mining, Related Topics, Key Properties & Capabilities, Training Paradigm, In-batch hard negatives, Embedding Models, Semantic vs. factual similarity, Python Usage Pattern, Isotropy collapse
- References: attention-mechanisms, finance/shannon-entropy, llm, mixture-of-experts, rag, transformer-architecture, vlm
- Backlinks: contrastive-learning, llm, matryoshka-embeddings, rag, slm, vector-databases, vlm

## Entity: llm
- Title: Large Language Models (LLMs)
- Category: Language Models
- Language: en
- Key Concepts: 3. Alignment via [[rlhf]] or [[dpo]]., Context compression, emergent abilities, Static knowledge, Large Language Models (LLMs), Trade-offs vs Other Types, Masked multi-head self-[[attention-mechanisms|attention]], Pre-training objective, Knowledge, Feed-forward network (FFN), Instruction following, Grouped Query [[attention-mechanisms|Attention]] (GQA), Related Topics, In-context learning, Chinchilla scaling law
- References: attention-mechanisms, dpo, embedding-models, fine-tuning, mechanistic-interpretability, mixture-of-experts, model-merging, neural-scaling-laws, preference-optimization, prm, reasoning-models, rlhf, slm, transformer-architecture
- Backlinks: about, agentic-patterns, agents, attention-mechanisms, bert, bitnet, chain-of-thought, code-models, constitutional-ai, context-length, continuous-batching, distributed-training, dpo, embedding-models, evaluation-llms, f-divergences, federated-learning, flash-attention, generative-models, gnn-credit-risk, gpt-architecture, inference-serving, language-models/safety/rlhf-dpo, llm-financial-analysis, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/cantor-diagonal, math/godel-incompleteness, matryoshka-embeddings, mcp, mechanism-design, meta-learning, mixture-of-experts, ml-options-pricing, model-merging, multi-token-prediction, naive-bayes, nlp-financial-analysis, orm-prm, paged-attention, positional-encodings, ppo, projects/llm-wiki, prompt-engineering, quantization, rag, reasoning-models, rlhf, slm, sparse-autoencoders, speculative-decoding, state-space-models, superposition, test-time-scaling, tool-use, vector-databases, vlm

## Entity: matryoshka-embeddings
- Title: Matryoshka Embeddings
- Category: Language Models
- Language: en
- Key Concepts: What Is It, Matryoshka Embeddings (MRL), Related Topics, Benefits, Use Cases, Visualization, On-device AI, How It Works, Low Latency, Hierarchical Navigation, Adaptive Accuracy/Efficiency Trade-off, Vector Search, Nested Loss Function, Storage Savings, No Re-indexing
- References: embedding-models, llm, vector-databases, vlm

## Entity: mixture-of-experts
- Title: Mixture of Experts (MoE)
- Category: Language Models
- Language: en
- Key Concepts: Router (gating network), Token dropping and inconsistency, Prerequisites, Load balancing auxiliary loss, Expert utilization and load imbalance, Expert parallelism, Token dropping, Trade-offs vs Other Types, Expert specialization, Memory vs. compute asymmetry, Related Topics, Router initialization, MoE layer, $N$ expert FFNs, Expert routing instability
- References: fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, slm, transformer-architecture
- Backlinks: bayesian-nonparametrics, bitnet, code-models, embedding-models, inference-serving, llm, mla, model-merging, moe-routing, quantization, slm, state-space-models, transformer-architecture

## Entity: moe-routing
- Title: MoE Routing and Specialization
- Category: Language Models
- Language: en
- Key Concepts: Related Topics, MoE Routing and Expert Specialization, How Routing Works, Top-k Routing, 2. Expert Overflow, Advanced Routing Strategies, 3. DeepSeek-V3: Multi-Head Latent [[attention-mechanisms|Attention]] & DeepSeekMoE, Auxiliary Load Balancing Loss, experts choose tokens, 2. Expert Choice Routing, 1. Expert Collapse (Winner-Take-All), Solution, 1. Switch [[transformer-architecture|Transformer]] (Top-1), Visualization: Token Distribution, Router
- References: attention-mechanisms, mixture-of-experts, mla, transformer-architecture
- Backlinks: dl-compilers

## Entity: model-merging
- Title: Model Merging & FrankenMoE
- Category: Language Models
- Language: en
- Key Concepts: FrankenMoE: Creating Sparse Models, Merging Techniques, MergeKit, Compute, 2. TIES-Merging, 3. DARE (Drop And REscale), Reset, FrankenMoE, Model Merging & FrankenMoE, Related Topics, Model Merging, Flexibility, Expert Models, Performance, Advantages and Limitations
- References: fine-tuning, inference-serving, llm, mixture-of-experts
- Backlinks: llm, weight-averaging

## Entity: mla
- Title: Multi-Head Latent Attention (MLA)
- Category: Language Models
- Language: en
- Key Concepts: Content Part, Comparison: KV-Cache Per Token, Why It Matters, ~5% - 10%, MLA, DeepSeek (V2/V3), Related Topics, large-scale MoE, Position Part, 2. Expansion, Grouped-Query [[attention-mechanisms|Attention]] (GQA), Decoupled Rotary Positional Embeddings, 1. Compression, The Architecture: Low-Rank Compression, Multi-Head Latent [[attention-mechanisms|Attention]] (MLA)
- References: attention-mechanisms, inference-serving, mixture-of-experts
- Backlinks: moe-routing, rope-scaling

## Entity: multi-token-prediction
- Title: Multi-Token Prediction
- Category: Language Models
- Language: en
- Key Concepts: Inference Speedup, Related Topics, Sample Efficiency, Architecture: Shared Trunk and Independent Heads, Benefits, Meta AI (2024), Better Long-Term Dependency, Multi-Token Prediction (MTP), $n$ Prediction Heads, The Modified Loss Function, The Core Concept, Why It Works, Improved Reasoning, Shared Trunk
- References: code-models, finance/shannon-entropy, llm, speculative-decoding, training-dynamics, transformer-architecture
- Backlinks: speculative-decoding

## Entity: positional-encodings
- Title: Positional Encodings
- Category: Language Models
- Language: en
- Key Concepts: Absolute Positional Encodings, Related Topics, Positional Encodings, T5 Relative Bias., YaRN, Sinusoidal (Vaswani et al. 2017)., RoPE: Rotary Position Embedding, Context Extension: YaRN, ALiBi (Press et al. 2022)., RoPE, Relative Positional Encodings, Positional encodings, Learned absolute., Comparison Summary, Extrapolation Beyond Training Length
- References: attention-mechanisms, fine-tuning, llm, neural-scaling-laws, transformer-architecture
- Backlinks: nerf, rope-scaling

## Entity: prm
- Title: Process-Based Supervision
- Category: Language Models
- Language: en
- Key Concepts: What Is It, Related Topics, Credit Assignment, Search at Inference Time, OpenAI PRM800K, Real-World Examples, Process Reward Models (PRMs), Outcome-Based Supervision (ORMs), Hallucination Reduction, DeepSeek-R1, ORM, Process-Based Supervision (PRMs), Why PRMs Matter, The Mathematical Intuition, Process-Based Supervision
- References: chain-of-thought, reasoning-models, rlhf
- Backlinks: bayes-theorem, llm, orm-prm, preference-optimization-variants, self-rewarding, speculative-decoding, test-time-scaling

## Entity: reasoning-models
- Title: Reasoning Models
- Category: Language Models
- Language: en
- Key Concepts: Cost, Group Relative Policy Optimization (GRPO), Trade-offs, Related Topics, Complex Mathematics, Reinforcement Learning (RL) on Reasoning Traces, How They Are Trained, Key Capabilities, Self-Correction, Rejection Sampling & Distillation, The "Aha" Moment, Mathematical Framework: GRPO, OpenAI o1, Latency, Reduced Hallucination
- References: chain-of-thought, llm, neural-scaling-laws, rlhf
- Backlinks: bitnet, llm, orm-prm, preference-optimization-variants, prm, self-rewarding, test-time-scaling, type-theory

## Entity: rope-scaling
- Title: RoPE Scaling & YaRN
- Category: Language Models
- Language: en
- Key Concepts: Compute, base frequency, Practical Constraints, FlashAttention-2, Related Topics, RoPE Scaling and Long Context, Techniques, 2. NTK-aware Scaling, Memory, Dimension Sensitivity, PagedAttention, Comparison of Methods, What Is It, Retrieval Accuracy, Ring Attention
- References: attention-mechanisms, flash-attention, inference-serving, mla, positional-encodings, transformer-architecture

## Entity: slm
- Title: Small Language Models (SLMs)
- Category: Language Models
- Language: en
- Key Concepts: Smaller hidden dimensions with more layers vs. fewer layers, Small Language Models (SLMs), Prerequisites, Reasoning ceiling, Trade-offs vs Other Types, Tied embeddings, Privacy, Related Topics, Grouped Query [[attention-mechanisms|Attention]] (GQA), Curated pre-training data, Weaker multi-step reasoning, On-device deployment, Knowledge distillation, Key Properties & Capabilities, [[quantization]]-aware training
- References: attention-mechanisms, embedding-models, finance/shannon-entropy, fine-tuning, inference-serving, llm, mechanistic-interpretability, mixture-of-experts, neural-scaling-laws, quantization, rag, transformer-architecture
- Backlinks: bitnet, code-models, llm, mcp, mixture-of-experts, synthetic-data-alignment

## Entity: language-models/mamba-ssm
- Title: State Space Models (Mamba)
- Category: Language Models
- Language: en
- Key Concepts: Mamba, The [[transformer-architecture|Transformer]] Bottleneck, The SSM Framework, Related Topics, Scalable Context:, linear-time complexity, The Mamba Innovation: Selection Mechanism, Inference Speed:, Hardware-Aware Design:, Selectively, State Space Models and Mamba Architecture, Limitations, Selection, State Space Models (SSM), Why Mamba Matters
- References: attention-mechanisms, flash-attention, inference-serving, linear-algebra, time-series, transformer-architecture

## Entity: synthetic-data-alignment
- Title: Synthetic Data & Self-Alignment
- Category: Language Models
- Language: en
- Key Concepts: Filter, Constitutional AI, Model Collapse, Seed Tasks, Comparison Table, Related Topics, The Data Bottleneck, [[fine-tuning]], 4. Scaling Laws for Synthetic Data, Filtering, Alpaca, Distillation, Supervised Phase, RL Phase, Synthetic Data & Self-Alignment
- References: fine-tuning, preference-optimization-variants, rlhf, slm

## Entity: test-time-scaling
- Title: Test-Time Scaling
- Category: Language Models
- Language: en
- Key Concepts: Look-ahead Search, Cost, Beam Search, 1. Search and Exploration, Trade-offs, Related Topics, Benefits, How It Works, Reasoning Breakthroughs, [[prm|Process Reward Models (PRM)]], 3. Verification-Guided Search, Flexibility, Tree Search (MCTS), Outcome Reward Models (ORM), Complexity
- References: chain-of-thought, llm, neural-scaling-laws, prm, reasoning-models

## Entity: training-dynamics
- Title: Training Dynamics
- Category: Language Models
- Language: en
- Key Concepts: Mitigations, muP, Loss Landscape Geometry, Saddle points, Cosine Decay, Gradient norm per layer, Linear mode connectivity, WSD (Warmup-Stable-Decay), Induction head formation, Middle training, [[attention-mechanisms|Attention]] [[shannon-entropy|entropy]], Train/val loss gap, memorises, Learning Rate Schedule, Sharp vs. flat minima
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, finance/shannon-entropy, fine-tuning, neural-scaling-laws, transformer-architecture
- Backlinks: curriculum-learning, morse-theory, multi-token-prediction, weight-averaging

## Entity: vlm
- Title: Vision-Language Models (VLMs)
- Category: Language Models
- Language: en
- Key Concepts: Prerequisites, Contrastive VLMs, Linear projector, Spatial reasoning, Cross-[[attention-mechanisms|attention]] layers, Trade-offs vs Other Types, SigLIP loss, Related Topics, Visual encoder (ViT), Compositional generalization, Cross-modal connector, Language decoder, Visual hallucination, Hallucination, Key Properties & Capabilities
- References: attention-mechanisms, embedding-models, llm, pac-learning, transformer-architecture
- Backlinks: embedding-models, matryoshka-embeddings, vision-transformers

## Entity: math/large-deviations-cramer
- Title: Large Deviations and Cramer's Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: Theorem (Cramer, 1938)., The Cramer rate function, 5. Financial risk management., Connection to other limit theorems, 6. Algorithms., Large Deviation Principle, 3. Exponential., concentration of measure, Kullback-Leibler divergence, how fast, Lower bound., the probability of ruin, KL divergence, Upper bound (Chernoff)., tilt
- References: central-limit-theorem, characteristic-functions, convex-optimization, cornish-fisher-cvar, finance/shannon-entropy, law-iterated-logarithm, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/lundberg-cramer-ruin
- Backlinks: extreme-value-theory, math/branching-processes, math/concentration-inequalities, math/contiguity-measures, math/coupling-methods, math/doleans-dade-exponential, math/geometric-ergodicity, math/interacting-particle-systems, math/local-limit-theorems, math/lundberg-cramer-ruin, math/percolation, math/poisson-approximation, math/random-graphs, math/random-walks, math/renewal-theory, math/wiener-hopf-factorization, mgf, wentzell-freidlin

## Entity: math/lundberg-cramer-ruin
- Title: Lundberg-Cramer Ruin Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: 3. Financial risk management., 3. Heavy tails., 1. Insurance and reinsurance., Martingale proof, 5. Reliability theory., The Cramer-Lundberg model, The Lundberg coefficient, one of the first applications of [[large-deviations-cramer|large deviations theory]], Heavy-tailed distributions., the probability of a rare event decays exponentially with exponent = Cramer rate function, large deviation principle, Example computations, light-tailed, Connection to large deviations, 4. Queueing theory.
- References: extreme-value-theory, finance/stable-distributions, finance/value-at-risk, math/discrete-martingales, math/large-deviations-cramer
- Backlinks: math/large-deviations-cramer, math/poisson-approximation, math/renewal-theory, math/wiener-hopf-factorization

## Entity: math/central-limit-theorem
- Title: Central Limit Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: Finite variance, Multivariate CLT., What CLT does not cover, Lindeberg's condition., CLT for martingale differences, history of mathematics, practically useful, Berry-Esseen: a quantitative CLT, fail, "functional" version of the CLT, generalized Lévy CLT, independent but not necessarily identically distributed, CLT for geometrically α-mixing processes, Multivariate and functional CLT, independent
- References: arch-models, brownian-motion, characteristic-functions, finance/crr-model, finance/stable-distributions, finance/stylized-facts-returns, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/weak-convergence-prokhorov

## Entity: math/functional-limit-theorems
- Title: Functional Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: Convergence of Discrete to Continuous Semimartingales, Theorem (Aldous-Rebolledo)., Theorem (Rebolledo, 1980)., Rebolledo's Martingale CLT, Diffusion approximations., Convergence via Predictable Characteristics, High-frequency finance., Convergence of Compound Poisson to Levy, Applications, Meta-theorem., Tightness Criteria, Related Articles, Population genetics., functional, Donsker's Invariance Principle
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, martingale-clt, math/convergence-semimartingales, math/skorokhod-topology, math/triangular-arrays-processes, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-problem, math/predictable-compensator, math/random-walks, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/infinitely-divisible-distributions
- Title: Infinitely Divisible Distributions
- Category: Limit Theorems
- Language: en
- Key Concepts: Kolmogorov's Formula and De Finetti's Theorem, Infinitely Divisible Distributions, infinitely divisible, Connection to Processes with Independent Increments, Related Articles, Role in Jacod-Shiryaev's Limit Theory, Kolmogorov's formula., Theorem (Levy-Khintchine)., The Levy-Khintchine Representation, Levy measure, canonical triplet, Key Examples, Relation to Stable Distributions, De Finetti's theorem (for ID distributions)., Theorem.
- References: central-limit-theorem, characteristic-functions, finance/levy-processes, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, levy-ito-decomposition, math/subordinators, math/triangular-arrays-processes

## Entity: math/law-of-large-numbers
- Title: Law of Large Numbers
- Category: Limit Theorems
- Language: en
- Key Concepts: Law of the iterated logarithm, rates, exact rate, Proof of the strong LLN (idea), the trajectory itself, the average return of a diversified portfolio, concentration of measure, Weak law of large numbers, set of trajectories of probability 1, Hoeffding's law of large numbers, What the LLN does not say, independent of the dimension, Birkhoff-Khintchine ergodic theorem, substantially stronger, Proof (Chebyshev)
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/markowitz-mean-variance, law-iterated-logarithm, math/borel-cantelli-zero-one, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms
- Backlinks: convergence-types, de-finetti-exchangeability, finance/coherent-risk-measures, finance/cointegration, finance/quasi-monte-carlo, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-clt, math/poisson-approximation, math/renewal-theory, math/stochastic-recursive-sequences, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, monte-carlo-integration, slutsky-theorem

## Entity: math/local-limit-theorems
- Title: Local Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: Local theorems for large deviations, skewness, point probabilities, Theorem (non-lattice local CLT)., Theorem (Gnedenko, 1948)., Gnedenko's local theorem for lattice distributions, Local Limit Theorems, The de Moivre-Laplace theorem, Combinatorics and asymptotic enumeration., lattice distribution, distribution functions, Number theory., Applications, Random walks on lattices., densities
- References: central-limit-theorem, characteristic-functions, finance/stable-distributions, math/functional-limit-theorems, math/large-deviations-cramer, math/law-of-large-numbers, math/spectral-theory-operators, math/weak-convergence-prokhorov
- Backlinks: math/central-limit-theorem, math/stein-method

## Entity: math/poisson-approximation
- Title: Poisson Approximation
- Category: Limit Theorems
- Language: en
- Key Concepts: rare events, Poisson Approximation, Theorem (Le Cam)., Historical note, Theorem., dependent, Extreme values., Proof sketch (direct calculation)., Proof sketch of Chen-Stein, Stein equation, Classical Poisson limit theorem, Random graphs., Poisson process approximation., Applications, Compound Poisson approximation.
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory
- Backlinks: math/central-limit-theorem, math/random-graphs, math/stein-method

## Entity: math/stable-convergence
- Title: Stable Convergence
- Category: Limit Theorems
- Language: en
- Key Concepts: Realized volatility CLT., random, mixing convergence, Role in Jacod-Shiryaev's Framework, Why Stable Convergence Matters, Proposition., Proof Sketch, Identification:, The Stable CLT for Martingales, joint convergence, Power variations, bipower variation, and other functionals, Stable Convergence, Definition., Definition, stably
- References: characteristic-functions, heston-model, martingale-clt, math/convergence-semimartingales, math/discrete-martingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/local-asymptotic-normality

## Entity: math/weak-convergence-prokhorov
- Title: Weak Convergence and Prokhorov's Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: Why such a strange definition, in a function space, 3. Convergence of the binomial model to Black-Scholes:, Theorem (Skorokhod)., Prokhorov's compactness theorem, fail, Hierarchy of convergences, excludes, relatively compact in the weak topology, Almost surely, Lévy's continuity theorem, Lévy continuity revisited, Applications, 4. Empirical distributions:, converges weakly
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/asymptotic-arbitrage-large-markets, finance/crr-model, math/kolmogorov-probability-axioms, math/law-of-large-numbers
- Backlinks: empirical-processes, math/central-limit-theorem, math/contiguity-measures, math/convergence-semimartingales, math/coupling-methods, math/functional-limit-theorems, math/glivenko-cantelli, math/hellinger-processes, math/infinitely-divisible-distributions, math/local-limit-theorems, math/skorokhod-topology, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/wiener-hopf-factorization

## Entity: determinant-properties
- Title: Determinant Properties
- Category: Linear Algebra
- Language: en
- Key Concepts: Multiplicativity:, Inverse:, Volume:, Transpose:, Key Properties, Overview

## Entity: matrix-exponential
- Title: Matrix Exponential
- Category: Linear Algebra
- Language: en
- Key Concepts: Definition, Overview

## Entity: matrix-norms
- Title: Matrix Norms
- Category: Linear Algebra
- Language: en
- Key Concepts: Induced Norms, Overview, Frobenius Norm

## Entity: trace-identities
- Title: Trace Identities
- Category: Linear Algebra
- Language: en
- Key Concepts: Trace of Derivative:, Eigenvalue Sum:, Linearity:, Cyclic Property:, Identities, Overview

## Entity: vector-norms
- Title: Vector Norms
- Category: Linear Algebra
- Language: en
- Key Concepts: L-p Norms, $L_\infty$ Norm:, $L_1$ Norm:, $L_2$ Norm:, Overview

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
- Key Concepts: Machine Learning for Quant Trading, See Also, 1. Purged Group TimeSeries Cross-Validation
- References: course-quant-trading, order-book-dynamics-and-lOB-modeling, statistical-arbitrage-and-pairs-trading
- Backlinks: deep-reinforcement-learning-for-trading, stat-tests-for-trading-strategies, systematic-alpha-research-and-backtesting

## Entity: systematic-alpha-research-and-backtesting
- Title: Systematic Alpha Research & IC Evaluation
- Category: Machine Learning in Finance
- Language: en
- Key Concepts: Systematic Alpha Research & IC Evaluation, See Also
- References: course-quant-trading, machine-learning-for-quant-trading, stat-tests-for-trading-strategies

## Entity: spread
- Title: Bid-Ask Spread
- Category: Market Microstructure
- Language: en
- Key Concepts: Determinants of Spread, Information Asymmetry, Effective Spread, Forex, Absolute Spread, Market Cap, Spread in Different Markets, Related Topics, Order Processing Costs, Adverse Selection Costs, Bid-Ask Spread, Inventory Risk, Components of the Spread, Crypto, bid
- References: avellaneda-stoikov, finance/kyle-lambda, glosten-milgrom, market-impact, market-microstructure
- Backlinks: market-microstructure

## Entity: high-frequency-market-making-avellaneda-stoikov
- Title: HFT Market Making: HJB Equation & Avellaneda-Stoikov Model
- Category: Market Microstructure
- Language: en
- Key Concepts: HFT Market Making: HJB Equation & Avellaneda-Stoikov Model, See Also
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics

## Entity: hft-order-types-and-dark-pools
- Title: HFT Order Types & Dark Pools
- Category: Market Microstructure
- Language: en
- Key Concepts: See Also, Midpoint Peg:, Post-Only:, Iceberg Orders:, 1. HFT Order Types, HFT Order Types & Dark Pools
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: cryptographic-zero-knowledge-in-finance

## Entity: high-frequency-trading-and-orderbook
- Title: High-Frequency Trading (HFT) & Order Book Infrastructure
- Category: Market Microstructure
- Language: en
- Key Concepts: See Also, Colocation:, 1. HFT Tech Stack, High-Frequency Trading (HFT) & Order Book Infrastructure, FIFO vs Pro-Rata:, VPIN (Volume-Synchronized Probability of Toxicity):, 2. Queue Priority & VPIN, FPGA & ASICs:, Protocols:
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
- Key Concepts: 1. Fundamentals & Spreads, See Also, Market Making Mechanics & Asymmetric Information, Bid-Ask Spread ($\delta$):, 2. Avellaneda-Stoikov Inventory Model, Ask Price ($P_a$):, 3. Asymmetric Information & Adverse Selection, Bid Price ($P_b$):, Mid Price ($P_m$):, Trading Takeaway:
- References: course-quant-trading, optimal-stopping-and-kelly, option-greeks-and-volatility
- Backlinks: algorithmic-execution-twap-vwap, crypto-quant-trading-and-amm-curves, deep-reinforcement-learning-for-trading, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-trading-and-orderbook, limit-order-book-matching-engine-design, market-microstructure-noise-and-realized-volatility, optimal-stopping-and-kelly, option-greeks-and-volatility, order-book-dynamics-and-lOB-modeling, quant-brainteasers-handbook, quant-interview-cheat-sheet, volatility-trading-and-variance-swaps

## Entity: market-microstructure
- Title: Market Microstructure
- Category: Market Microstructure
- Language: en
- Key Concepts: Kyle's Lambda, Permanent Impact, Generative Models, adverse selection risk, Market Microstructure, Depth, Deep LOB, Avellaneda-Stoikov (2008), Related Topics, effective spread, Key Concepts, Order Flow Imbalance (OFI), Glosten-Milgrom Model (1985), Market Makers, Informed Traders
- References: ai-market-making, avellaneda-stoikov, deep-lob, finance/hawkes-process, finance/kyle-lambda, finance/order-flow-imbalance, finance/pin-easley-ohara, generative-scenario-models, market-impact, optimal-execution, spread
- Backlinks: smart-order-routing, spread

## Entity: market-microstructure-noise-and-realized-volatility
- Title: Market Microstructure Noise & Realized Volatility
- Category: Market Microstructure
- Language: en
- Key Concepts: Market Microstructure Noise & Realized Volatility, See Also
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
- Key Concepts: 2. Volume Imbalance Ratio, Order Book Dynamics & LOB Modeling, See Also, 1. Hawkes Processes
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: machine-learning-for-quant-trading

## Entity: math/martingale-clt
- Title: Central Limit Theorem for Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: random, Hall-Heyde theorem (1980)., Important variants, strict generalization, 5. Bayesian algorithms., Link to the classical CLT, 5. Martingale transforms., 4. Stochastic approximation (SGD)., Examples of martingale differences, independence, Functional martingale CLT (invariance principle)., Central Limit Theorem for Martingales, Theorem (Lévy-Doob-Lindeberg for martingales), 3. GARCH and ARCH models., Applications in econometrics and statistics
- References: arch-models, brownian-motion, central-limit-theorem, convex-optimization, garch-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/law-of-large-numbers

## Entity: math/discrete-martingales
- Title: Discrete Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: Existence of limit distributions, Doob's $L^p$ inequality., 1. Financial mathematics., Integrability, 2. Conditional expectation., stopping time, Doob's maximal inequality., Insurance and credit risk theory, American option pricing, exactly equals, 4. Exponential martingale., 5. Actuarial science., discrete analogue of the [[girsanov-semimartingales|Girsanov density]], Submartingale, "fair game"
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/optimal-stopping-american, law-iterated-logarithm, math/conditional-expectation-sigma, math/discrete-markov-chains, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/branching-processes, math/conditional-expectation-sigma, math/discrete-markov-chains, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/lundberg-cramer-ruin, math/martingale-clt, math/martingale-representation, math/optimal-stopping-markov, math/predictable-compensator, math/random-walks, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/stable-convergence, math/wiener-hopf-factorization, stochastic-processes

## Entity: math/doleans-dade-exponential
- Title: Doleans-Dade Stochastic Exponential
- Category: Martingale Theory
- Language: en
- Key Concepts: Explicit Formula, Connection to Girsanov's Theorem, Positivity and Strict Positivity, Yor's Formula, Theorem (Yor)., Geometric Levy models., Consequence., Applications, bridge, Brownian motion with drift., Related Articles, Continuous semimartingale., Definition., Pure jump process., predictable
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, math/discrete-martingales, math/large-deviations-cramer, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, levy-ito-decomposition, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-stochastic-integrals, math/density-processes, math/hellinger-processes, math/martingale-problem, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering, risk-neutral-valuation

## Entity: math/doob-meyer-decomposition
- Title: Doob-Meyer Decomposition
- Category: Martingale Theory
- Language: en
- Key Concepts: Lenglart's Domination Property, Beyond Submartingales: Local Martingales, Theorem (Lenglart)., Historical Remark, dual predictable projection, Uniqueness, Theorem (Doob)., Why this matters:, Discrete-Time Doob Decomposition, Theorem (Doob-Meyer)., Key examples:, Doob-Meyer Decomposition, Class (D) and Uniform Integrability, quadratic variation, Definition.
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability
- Backlinks: local-time-tanaka, math/density-processes, math/martingale-representation, math/predictable-compensator, math/quadratic-variation

## Entity: math/martingale-representation
- Title: Martingale Representation Theorem
- Category: Martingale Theory
- Language: en
- Key Concepts: Connection to Filtering Theory, total, Theorem (Clark-Ocone)., Wiener functionals., Malliavin derivative, Applications, every square-integrable martingale adapted to the Brownian filtration is a stochastic integral with respect to the Brownian motion, fails, market completeness, integrand representation, Theorem (Martingale Representation)., The Clark-Ocone Formula, Hedging and replication., Market Completeness, completeness of the Brownian filtration
- References: black-scholes, brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, hidden-markov-models, innovation-process, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, nonlinear-filtering, stochastic-differential-equations
- Backlinks: clark-ocone, feynman-kac, math/absolute-continuity-process-measures, math/backward-sde, stochastic-processes

## Entity: math/optimal-stopping-markov
- Title: Optimal Stopping of Markov Chains
- Category: Martingale Theory
- Language: en
- Key Concepts: continue one step, optimal, 2. Statistics., Problem., Bellman optimality equation, 3. Economics., Penalty method and variational inequality, value function, Stopping region:, Optimal stopping time:, supermartingale, smallest, variational inequality, Structure of the problem, Observation 1.
- References: finance/black-scholes-derivations, finance/crr-model, finance/optimal-stopping-american, math/discrete-markov-chains, math/discrete-martingales, reinforcement-learning
- Backlinks: local-time-tanaka

## Entity: optimal-stopping-and-kelly
- Title: Kelly Criterion & Optimal Stopping Theory
- Category: Math & Game Theory
- Language: en
- Key Concepts: 1. Kelly Criterion, Kelly Criterion & Optimal Stopping Theory, See Also, 2. Optimal Stopping & Secretary Problem
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
- Key Concepts: Normalization, events, Axiomatic Probability: The Kolmogorov Foundation, Borel $\sigma$-algebra, Related Topics, Andrey Kolmogorov, Probability Measure ($P$), $\sigma$-algebra ($\mathcal{F}$), 1. The Probability Space $(\Omega, \mathcal{F}, P)$, 2. Kolmogorov's Axioms, Empty Set, Countable Additivity ($\sigma$-additivity), Non-negativity, Bertrand's Paradox, Inclusion-Exclusion
- References: conditional-probability, measure-theory

## Entity: bayesian-linear-regression
- Title: Bayesian Linear Regression
- Category: Math Foundations
- Language: en
- Key Concepts: The Model, Bayesian Linear Regression, conjugate, Predictive Distribution, The Posterior Distribution, prior, likelihood

## Entity: boolean-algebra
- Title: Boolean Algebra & Circuit Logic
- Category: Math Foundations
- Language: en
- Key Concepts: Karnaugh Maps, Karnaugh map (K-map), Complexity Basics, Logic Gates, false, AND, true, NOT
- References: recursion-recurrence

## Entity: integration-techniques
- Title: Calculus: Advanced Integration Techniques
- Category: Math Foundations
- Language: en
- Key Concepts: Trigonometric Substitution, Partial Fractions, Integration by Parts
- References: coordinate-systems
- Backlinks: generating-functions

## Entity: category-theory-ml
- Title: Category Theory for Machine Learning
- Category: Math Foundations
- Language: en
- Key Concepts: What Is It, lenses, Related Topics, optics, Forward:, DERIVATION: [[automatic-differentiation|Backpropagation]] as Lens Composition, Open Games, Category Theory for Machine Learning, Lens, The Para Construction, Para, chain rule, Backward:, Categorical Cybernetics, Lenses and [[automatic-differentiation|Backpropagation]]
- References: automatic-differentiation, manifold-learning, topos-theory, type-theory

## Entity: conditional-probability
- Title: Conditional Probability and Total Probability
- Category: Math Foundations
- Language: en
- Key Concepts: Related Topics, Proof, 3.2 The Theorem, 3. Law of Total Probability (LTP), Conditional Probability and the Law of Total Probability, 1. Definition of Conditional Probability, 2. The Multiplication Rule, 4. Bayes' Theorem, 5. Example: Diagnostic Testing, Likelihood, Chain Rule, Bayes' Theorem, 3.1 Definition of a Partition, Prior, 1.1 Intuition: Shrinking the Sample Space
- References: bayes-theorem, markov-chains
- Backlinks: axiomatic-probability

## Entity: continuous-random-variables
- Title: Continuous Random Variables
- Category: Math Foundations
- Language: en
- Key Concepts: Continuous Random Variables, Related Topics, Cauchy($x_0, \gamma$), 5. Common Continuous Distributions, Exponential($\lambda$), Uniform($a, b$), Continuous Random Variable, PDF, 1. Probability Density Function (PDF), 3. Expected Value and Variance, Normal($\mu, \sigma^2$), 4. Transformation of Variables, CDF, 1.1 Properties of the PDF, Intuition
- References: discrete-random-variables, joint-distributions, measure-theory
- Backlinks: discrete-random-variables

## Entity: coordinate-systems
- Title: Coordinate Systems & Transforms
- Category: Math Foundations
- Language: en
- Key Concepts: Jacobian determinant, spherical coordinates, polar coordinates, The Jacobian Determinant, Polar and Spherical Coordinates
- References: implicit-function-theorem
- Backlinks: implicit-function-theorem, integration-techniques

## Entity: covariance-correlation
- Title: Covariance, Correlation, and Independence
- Category: Math Foundations
- Language: en
- Key Concepts: Zero Correlation $\not\implies$ Independence, Covariance, Negative Covariance, 2.1 Properties, Covariance, Correlation, and Independence, Independence $\implies$ Zero Correlation, Related Topics, Units, linear, Positive Covariance, monotonic, 3. Pearson vs. Spearman Correlation, 1. Covariance, 5. Independence, Pearson
- References: joint-distributions, linear-regression-ols
- Backlinks: joint-distributions

## Entity: generating-functions
- Title: Discrete Math: Generating Functions
- Category: Math Foundations
- Language: en
- Key Concepts: Counting and Analogies, generating function, Solving Recurrences
- References: integration-techniques, recursion-recurrence
- Backlinks: recursion-recurrence

## Entity: recursion-recurrence
- Title: Discrete Math: Recursion & Recurrence
- Category: Math Foundations
- Language: en
- Key Concepts: Master Theorem, Fibonacci Sequence
- References: formal-proof-techniques, generating-functions
- Backlinks: boolean-algebra, generating-functions

## Entity: discrete-random-variables
- Title: Discrete Random Variables
- Category: Math Foundations
- Language: en
- Key Concepts: Discrete Random Variables, 6. Common Discrete Distributions, 2.1 Properties of the PMF, Poisson($\lambda$), Law of the Unconscious Statistician (LOTUS), Related Topics, discrete, Geometric($p$), Bernoulli($p$), Linearity of Expectation, CDF, 5. Variance and Standard Deviation, 2. Probability Mass Function (PMF), Binomial($n, p$), Discrete Random Variable
- References: continuous-random-variables, lln-clt
- Backlinks: continuous-random-variables

## Entity: eigendecomposition-vs-svd
- Title: Eigenvalue Decomposition vs. SVD
- Category: Math Foundations
- Language: en
- Key Concepts: Domain and Codomain:, Applicability:, Orthogonality:, left singular vectors, Spectral Theorem:, Eigenvalue Decomposition (EVD), Eigenvalue Decomposition vs. SVD, right singular vectors, Singular Value Decomposition (SVD), singular values, Technical Comparison
- References: math/spectral-theory-operators, pca-math
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: exponential-families
- Title: Exponential Families
- Category: Math Foundations
- Language: en
- Key Concepts: natural (or canonical) parameter, Variance:, sufficient statistic, Exponential Families, Role in Machine Learning, Examples, Properties of the Log-Partition Function, Mean:, log-partition function, Canonical Form
- Backlinks: course-math-for-ai, distributions-zoo, fisher-information, math/bayesian-asymptotics, math/cramer-rao-bound, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, maximum-entropy

## Entity: fundamental-inequalities
- Title: Fundamental Inequalities: Markov & Chebyshev
- Category: Math Foundations
- Language: en
- Key Concepts: Related Topics, Proof, Sharpness, Fundamental Inequalities: Markov & Chebyshev, 3. Tightness and Bounds, 1. Markov's Inequality, Chernoff Bounds, 2. Chebyshev's Inequality
- References: jensen-inequality, lln-clt, math/concentration-inequalities

## Entity: conic-sections
- Title: Geometry: Conic Sections & Quadratic Forms
- Category: Math Foundations
- Language: en
- Key Concepts: Matrix Representation, quadratic forms, Diagonalization
- References: change-of-basis, math/spectral-theory-operators

## Entity: graph-theory-basics
- Title: Graph Theory Basics
- Category: Math Foundations
- Language: en
- Key Concepts: Path:, Tree:, adjacency matrix, Adjacency Matrices, Paths and Trees
- References: bayesian-networks, sparse-matrices
- Backlinks: sparse-matrices

## Entity: group-theory-basics
- Title: Group Theory Basics
- Category: Math Foundations
- Language: en
- Key Concepts: Ring:, Closure:, Inverse:, Field:, Identity:, Rings and Fields, group, Groups, Associativity:
- References: formal-proof-techniques

## Entity: homotopy-type-theory
- Title: Homotopy Type Theory (HoTT)
- Category: Math Foundations
- Language: en
- Key Concepts: MATHEMATICAL CONCEPT: Path Induction, $h=0$ (Sets):, Univalent Foundations, Quotients:, Related Topics, The Circle ($S^1$):, The Univalence Axiom, Relevance to AI and Program Synthesis, $\infty$-groupoid, Program Synthesis:, h-Levels (Homotopy Levels), path induction, Higher Inductive Types (HITs), $h=-1$ (Propositions):, Homotopy Theory
- References: category-theory, math/algebraic-topology, math/godel-incompleteness, type-theory

## Entity: implicit-function-theorem
- Title: Implicit & Inverse Function Theorems
- Category: Math Foundations
- Language: en
- Key Concepts: Implicit Function Theorem, Inverse Function Theorem
- References: convex-sets-functions, coordinate-systems, manifold-learning
- Backlinks: convex-sets-functions, coordinate-systems

## Entity: inner-product-spaces-norms
- Title: Inner Product Spaces & Norms
- Category: Math Foundations
- Language: en
- Key Concepts: $L_p$ Norms, $L_1$ Norm (Manhattan distance):, $L_2$ Norm (Euclidean norm):, $L_\infty$ Norm (Chebyshev norm):, inner product space, Dual Norms, Inner Product Spaces & Norms, Frobenius Norm
- References: eigendecomposition-vs-svd, kkt-conditions, pca-math

## Entity: jensen-inequality
- Title: Jensen's Inequality
- Category: Math Foundations
- Language: en
- Key Concepts: Related Topics, Jensen's Inequality, 3. Applications, 1. Formal Statement, Evidence Lower Bound (ELBO), A. Information Theory, 2. Geometric Proof, B. Machine Learning: ELBO and EM-Algorithm, [[expectation-maximization|EM algorithm]]
- References: convexity, expectation-maximization, finance/shannon-entropy, information-theory-basics
- Backlinks: fundamental-inequalities

## Entity: joint-distributions
- Title: Joint, Marginal, and Conditional Distributions
- Category: Math Foundations
- Language: en
- Key Concepts: Joint CDF, Continuous, 1. Joint Distributions, Double Integrals, 3. Conditional Distributions, Joint, Marginal, and Conditional Distributions, 3.1 Conditional Expectation, Related Topics, 4. Independence, 5. Multivariate Calculus Foundation, 1.1 Discrete Case: Joint PMF, independent, Law of Iterated Expectations, Jacobians, 1.2 Continuous Case: Joint PDF
- References: copulas, covariance-correlation, multivariate-normal
- Backlinks: continuous-random-variables, covariance-correlation

## Entity: kkt-conditions
- Title: Lagrange Multipliers & KKT Conditions
- Category: Math Foundations
- Language: en
- Key Concepts: Lagrange Multipliers (Equality Constraints), Lagrange Multipliers & KKT Conditions, Stationarity:, Primal Feasibility:, KKT Conditions (Inequality Constraints), Dual Feasibility:, Karush-Kuhn-Tucker (KKT), Complementary Slackness:
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: large-deviations
- Title: Large Deviations: Hoeffding & Bernstein Inequalities
- Category: Math Foundations
- Language: en
- Key Concepts: Markov's and Chebyshev's Inequalities, exponentially, Hoeffding's Inequality, Key takeaway:, Markov's:, Bernstein's Inequality, Chebyshev's:, Large Deviations: Hoeffding & Bernstein

## Entity: change-of-basis
- Title: Linear Algebra: Change of Basis
- Category: Math Foundations
- Language: en
- Key Concepts: similar, Similarity Transforms, Coordinate Transformations
- References: math/spectral-theory-operators, rank-nullity-theorem
- Backlinks: conic-sections, rank-nullity-theorem

## Entity: rank-nullity-theorem
- Title: Linear Algebra: Kernel, Image, and Rank-Nullity
- Category: Math Foundations
- Language: en
- Key Concepts: Image (Column Space, $\text{im} A$):, Rank-Nullity Theorem, Fundamental Subspaces, The Rank-Nullity Theorem, Kernel (Null Space, $\ker A$):
- References: change-of-basis
- Backlinks: change-of-basis

## Entity: sparse-matrices
- Title: Linear Algebra: Sparse Matrices
- Category: Math Foundations
- Language: en
- Key Concepts: CSC (Compressed Sparse Column):, sparse, CSR (Compressed Sparse Row):, Storage Formats, Mathematical Properties
- References: graph-theory-basics, numerical-stability
- Backlinks: graph-theory-basics, numerical-stability

## Entity: formal-proof-techniques
- Title: Logic: Formal Proof Techniques
- Category: Math Foundations
- Language: en
- Key Concepts: Direct Proof, Base Case:, Inductive Step:, Mathematical Induction, Proof by Contradiction
- References: lln-proofs
- Backlinks: group-theory-basics, lln-proofs, recursion-recurrence

## Entity: markov-chains
- Title: Markov Chains
- Category: Math Foundations
- Language: en
- Key Concepts: Markov property, Irreducible:, stationary distribution, Aperiodic:, Transition Matrix, Stationary Distributions, The Markov Property, Ergodic Theorem:, Irreducibility and Aperiodicity, stochastic matrix, Markov Chains
- Backlinks: conditional-probability, stochastic-processes

## Entity: matrix-calculus
- Title: Matrix Calculus
- Category: Math Foundations
- Language: en
- Key Concepts: Gradients Involving Traces, denominator layout, Layout Conventions, Gradients Involving Determinants, Gradients of Quadratic Forms, Matrix Calculus
- References: em-algorithm, gmm, multivariate-normal-distribution
- Backlinks: tensors-and-contractions

## Entity: multivariable-taylor-series
- Title: Multivariable Taylor Series
- Category: Math Foundations
- Language: en
- Key Concepts: Local Maximum:, Hessian, Hessian Properties and Optimization, Saddle Point:, Local Minimum:, Multivariable Taylor Series, The Taylor Expansion, Gradient, Newton's Method
- References: math/spectral-theory-operators, positive-definite-matrices

## Entity: multivariate-normal-distribution
- Title: Multivariate Normal Distribution
- Category: Math Foundations
- Language: en
- Key Concepts: Density Function, Conditional Distribution:, Marginal Distribution:, Multivariate Normal Distribution, Marginals and Conditionals, Mahalanobis Distance
- References: kalman-filter, positive-definite-matrices
- Backlinks: matrix-calculus, positive-definite-matrices

## Entity: mutual-information-divergence
- Title: Mutual Information & Divergence
- Category: Math Foundations
- Language: en
- Key Concepts: Data Processing Inequality, Mutual Information, Asymmetry:, Gibbs' Inequality:, Interpretation:, Kullback-Leibler (KL) Divergence, Mutual Information & Divergence
- References: em-algorithm, finance/shannon-entropy

## Entity: numerical-integration
- Title: Numerical Integration
- Category: Math Foundations
- Language: en
- Key Concepts: Monte Carlo Integration, Curse of Dimensionality, Numerical Integration, Gaussian Quadrature, Importance Sampling

## Entity: numerical-stability
- Title: Numerical Stability & Floating Point Math
- Category: Math Foundations
- Language: en
- Key Concepts: Condition Number, condition number, floating-point, numerically stable, Machine Epsilon, Machine epsilon
- References: sparse-matrices
- Backlinks: sparse-matrices

## Entity: convex-sets-functions
- Title: Optimization: Convex Sets & Functions
- Category: Math Foundations
- Language: en
- Key Concepts: convex, Convex Functions, strictly convex, Convex Sets
- References: implicit-function-theorem
- Backlinks: implicit-function-theorem

## Entity: positive-definite-matrices
- Title: Positive Definite Matrices
- Category: Math Foundations
- Language: en
- Key Concepts: positive semi-definite (PSD), Cholesky Decomposition, Optimization:, Properties, [[spectral-theory-operators|Eigenvalues]]:, Kernels:, positive definite (PD), Trace and Determinant:, Invertibility:, Positive Definite Matrices, Role in Kernels and Optimization, Principal Minors:
- References: math/spectral-theory-operators, multivariate-normal-distribution
- Backlinks: multivariable-taylor-series, multivariate-normal-distribution

## Entity: pca-math
- Title: Principal Component Analysis (PCA) Math
- Category: Math Foundations
- Language: en
- Key Concepts: Maximum Variance Formulation, Minimum Error Formulation, Connection to SVD, Principal Component Analysis (PCA)
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
- Key Concepts: transient, random walk, recurrent, Recurrence vs Transience, 1D and 2D Simple Walks
- References: lln-proofs
- Backlinks: lln-proofs, stochastic-processes

## Entity: p-values-effect-size
- Title: Statistics: P-values & Effect Size
- Category: Math Foundations
- Language: en
- Key Concepts: P-Hacking, P-values, Effect Size, Effect size, p-hacking, Cohen's d, p-value
- References: statistical-paradoxes
- Backlinks: statistical-paradoxes

## Entity: statistical-paradoxes
- Title: Statistics: Paradoxes
- Category: Math Foundations
- Language: en
- Key Concepts: Simpson's Paradox, Berkson's Paradox, Monty Hall Problem
- References: p-values-effect-size
- Backlinks: p-values-effect-size

## Entity: advanced-game-theory
- Title: Stochastic Games & Correlated Equilibrium
- Category: Math Foundations
- Language: en
- Key Concepts: Correlated Equilibrium, Stochastic Games, Stochastic Games & Correlated Equilibrium

## Entity: tensors-and-contractions
- Title: Tensors and Contractions
- Category: Math Foundations
- Language: en
- Key Concepts: Inner Product:, Trace:, Tensors and Contractions, Matrix-Vector Product:, Tensor Notation, Tensor Contraction, Matrix Multiplication:, Einstein Summation Convention, Examples:
- References: attention-mechanisms, automatic-differentiation, matrix-calculus

## Entity: em-algorithm
- Title: The EM Algorithm
- Category: Math Foundations
- Language: en
- Key Concepts: The Expectation-Maximization (EM) Algorithm, The EM Steps, latent variables, Problem Setup, Evidence Lower Bound (ELBO), M-step (Maximization):, E-step (Expectation):
- References: gmm, hmm
- Backlinks: matrix-calculus, mutual-information-divergence

## Entity: universal-approximation-theory
- Title: Universal Approximation Theory
- Category: Math Foundations
- Language: en
- Key Concepts: Extension to Deep Networks, Universal Approximation Theory, Barron's Theorem, Classical Formulation, Approximation by Transformers
- References: attention-mechanisms, transformer-architecture

## Entity: information-theory-basics
- Title: Information Theory Basics
- Category: Math Fundamentals
- Language: en
- Key Concepts: 2. KL Divergence: Comparing Distributions, 5. Summary of Terms, Cross-Entropy ($H(p, q)$), Mutual Information ($I(X; Y)$), Related Topics, KL Divergence, Information Theory Basics: Measuring Surprise, 4. Mutual Information, not symmetric, [[shannon-entropy|Entropy]] ($H$), Entropy, Kullback-Leibler (KL) Divergence, Cross-Entropy, 3. Cross-Entropy: The ML Loss Function, Binary Cross-Entropy (BCE)
- References: finance/shannon-entropy, maximum-entropy, probability-distributions, variational-autoencoders
- Backlinks: jensen-inequality, probability-distributions

## Entity: linear-regression-ols
- Title: Linear Regression & OLS
- Category: Math Fundamentals
- Language: en
- Key Concepts: 3. Assumptions of OLS (Gauss-Markov), Linearity, Geometric Interpretation, Exogeneity, orthogonal projection, 2. Ordinary Least Squares (OLS), Residual Sum of Squares (RSS), No Multicollinearity, Related Topics, Mean Squared Error (MSE), Homoscedasticity, 4. Evaluation Metrics, Ridge Regression, Linear Regression & OLS: The Foundation of Predictive Modeling, t-statistic
- References: matrix-decompositions, statistical-inference, vector-spaces-orthogonality
- Backlinks: covariance-correlation, estimator-properties, map-estimation, matrix-decompositions, vector-spaces-orthogonality

## Entity: matrix-decompositions
- Title: Matrix Decompositions: SVD, LU, and QR
- Category: Math Fundamentals
- Language: en
- Key Concepts: Eigenvalue Algorithms, Least Squares, Upper, 3. Singular Value Decomposition (SVD): The Master Key, Lower, 2. QR Decomposition: Stability and Orthogonality, Related Topics, Gram-Schmidt process, 1. LU Decomposition: Solving Linear Systems, Applications, Applications in AI, Matrix Decompositions: The Structural Integrity of Data, Dimensionality Reduction (PCA), SVD, Model Compression
- References: eigenvalues-eigenvectors, linear-regression-ols, math/spectral-theory-operators, pca
- Backlinks: linear-regression-ols, vector-spaces-orthogonality

## Entity: optimization-basics
- Title: Optimization 101: Gradient Descent & Newton's Method
- Category: Math Fundamentals
- Language: en
- Key Concepts: 3. The Hessian Intuition, Optimization 101: Training the Machines, Why avoid it?, Computation, quadratic convergence, Loss Function, Related Topics, Hessian, Vanishing/Exploding Gradients, Convergence, Adam, Variations in ML, No Learning Rate, Positive Definite, Why use it?
- References: chain-rule-autodiff, convex-optimization, gradient-hessian-jacobian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, sequences-series-convergence

## Entity: probability-distributions
- Title: Probability Distributions Encyclopedia
- Category: Math Fundamentals
- Language: en
- Key Concepts: Fourth Moment (Kurtosis), First Moment (Mean), Related Topics, Bernoulli Distribution, PDF, Binomial & Multinomial, Normal (Gaussian) Distribution, Binomial, [[shannon-entropy|Entropy]], Probability Distributions, Probability Distributions Encyclopedia: The Shapes of Randomness, Second Moment (Variance), Central Limit Theorem, Beta Distribution, Parameters
- References: bayes-theorem, finance/shannon-entropy, information-theory-basics, lln-clt
- Backlinks: information-theory-basics, mgf-characteristic-functions, order-statistics, statistical-inference

## Entity: sequences-series-convergence
- Title: Sequences, Series & Convergence
- Category: Math Fundamentals
- Language: en
- Key Concepts: Hessian Intuition, 1. Sequences and Limits, 4. Radius of Convergence, Related Topics, 5. Convergence in Probability, Hessian, partial sums, 2. Infinite Series, Convergence in Probability, Harmonic Series, 3. Taylor Series: Approximating Functions, Series, Sequence, In ML, Geometric Series
- References: lln-clt, optimization-basics, taylor-series

## Entity: logic-set-theory
- Title: Set Theory & Formal Logic
- Category: Math Fundamentals
- Language: en
- Key Concepts: Implication ($\implies$), 4. Boolean Algebra in Computing, Constraint Satisfaction, Function ($f: A \to B$), 3. Relations and Functions, Propositional Logic, 2. Set Theory: The Universal Container, Conjunction ($\land$), Set, Universal Quantifier ($\forall$), False, Subset ($A \subseteq B$), Related Topics, Disjunction ($\lor$), Surjective (Onto)
- References: graph-theory

## Entity: statistical-inference
- Title: Statistical Inference & Hypothesis Testing
- Category: Math Fundamentals
- Language: en
- Key Concepts: p-value, Null Hypothesis ($H_0$), Z-test / T-test, Type II Error, Alternative Hypothesis ($H_a$ or $H_1$), Type I Error, Interpretation, Related Topics, 2. Type I and Type II Errors, Reject $H_0$, ANOVA, Significance Level ($\alpha$), Frequentist, 1. Hypothesis Testing: The Framework, The p-value
- References: bayes-theorem, probability-distributions
- Backlinks: bootstrap-jackknife, cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, linear-regression-ols, map-estimation, mle-estimation, rank-tests, sufficient-statistics

## Entity: chain-rule-autodiff
- Title: The Chain Rule & Auto-Diff Foundations
- Category: Math Fundamentals
- Language: en
- Key Concepts: Backward Pass, Jacobian, Forward Pass, 3. Automatic Differentiation (Auto-Diff), Loss Function, Related Topics, [[automatic-differentiation|Backpropagation]], Optimization, Reverse Mode vs. Forward Mode, 5. Why it Matters in AI, 4. The Computational Graph, Reverse Mode (Backprop), Example, 2. Multivariable Chain Rule, The Chain Rule & Auto-Diff: The Engine of Deep Learning
- References: automatic-differentiation, gradient-hessian-jacobian, optimization-basics
- Backlinks: optimization-basics

## Entity: vector-spaces-orthogonality
- Title: Vector Spaces & Orthogonality
- Category: Math Fundamentals
- Language: en
- Key Concepts: 2. Orthogonality: The Power of 90 Degrees, Orthogonal Complement, orthonormal, AI Context, Vectors, Vector Space, Related Topics, independence, Image (Column Space), 1. Vector Spaces and Bases, 5. Summary of Key Concepts, Projection, Kernel (Nullspace), Dimension, Application
- References: eigenvalues-eigenvectors, linear-regression-ols, matrix-decompositions
- Backlinks: linear-regression-ols

## Entity: math/algebraic-topology
- Title: Algebraic Topology
- Category: Mathematical Foundations
- Language: en
- Key Concepts: contractible, Euler formula for polyhedra, cycles, homotopy, Mayer-Vietoris Sequence, The Fundamental Group, boundary operator, correspondence between coverings and groups, Connection to Other Areas, homology groups, Algebraic Topology, van Kampen's Theorem, loop, Applications: Topological Data Analysis and Persistent Homology, homotopic
- References: category-theory, complex-analysis, functional-analysis, math/differential-geometry, math/non-euclidean-geometry, math/topology-basics
- Backlinks: homological-algebra, homotopy-type-theory, math/differential-geometry, morse-theory, topos-theory

## Entity: complex-analysis
- Title: Complex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: holomorphic, Residue Theorem, Holomorphic Functions and the Cauchy–Riemann Equations, Pole of order $m$, Essential singularity, Maximum Modulus Principle, Laurent series, The Maximum Modulus Principle and Liouville's Theorem, Analytic Continuation and Monodromy, monodromy, Möbius transformations, Liouville's Theorem, Singularities and Laurent Series, Cauchy–Riemann equations, Cauchy integral theorem
- References: fourier-transform, functional-analysis, harmonic-analysis, math/differential-geometry, math/topology-basics
- Backlinks: math/algebraic-topology, math/differential-geometry, math/harmonic-analysis

## Entity: convex-analysis
- Title: Convex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Convex sets and functions, Portfolio optimization, LASSO and sparsification, Variational methods in control, Dual feasibility, Applications across domains, The subdifferential, Primal feasibility, Stationarity, Complementary slackness, Optimal transport, Information geometry, Conjugate functions and duality, KKT conditions and optimality, Proximal operators and algorithms
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, finance/markowitz-mean-variance, math/analysis-geometry/information-geometry, math/kolmogorov-probability-axioms, optimal-transport, stochastic-control
- Backlinks: math/high-dimensional-statistics, math/topology-basics

## Entity: math/differential-geometry
- Title: Differential Geometry
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Information Geometry, Tangent and Cotangent Spaces, Jacobian, Riemann curvature tensor, The Gauss-Bonnet Theorem, geodesic, Curvature and the Riemann Tensor, sectional curvature, Riemannian metric, Hyperbolic spaces, arc length, constant sectional curvature, tangent bundle, Riemannian Metrics, Levi-Civita connection
- References: complex-analysis, convex-optimization, functional-analysis, manifold-learning, math/algebraic-topology, math/analysis-geometry/information-geometry, math/non-euclidean-geometry, math/topology-basics, math/variational-calculus
- Backlinks: asymptotic-spacetime, complex-analysis, course-math-for-ai, fluid-dynamics-navier-stokes, goldstone-modes, gravitational-waves-gr, group-theory, hyperbolic-vol-geometry, lie-groups, manifold, manifold-learning, many-body-tensor-networks, math/algebraic-topology, morse-theory, qft-curved-spacetime, semimartingales-on-manifolds, special-relativity, stochastic-manifolds, string-theory-calabi-yau

## Entity: math/harmonic-analysis
- Title: Harmonic Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Marcinkiewicz interpolation theorem, Fejér kernel, The Schwartz Space and Tempered Distributions, Sobolev spaces, Interpolation: Riesz-Thorin and Marcinkiewicz Theorems, Fourier Series on the Circle $\mathbb{T}$, Heisenberg uncertainty principle, Parseval's formula, Spectral theory, Schwartz space, maximal function, The $L^1 \cap L^2$ Theory: Plancherel's Theorem, Plancherel's theorem, The Convolution Theorem, convolution theorem
- References: complex-analysis, finance/shannon-entropy, functional-analysis, math/information-theory, math/lp-spaces, math/spectral-theory-operators, partial-differential-equations, sobolev-spaces

## Entity: math/ode-stability
- Title: ODE Theory and Lyapunov Stability
- Category: Mathematical Foundations
- Language: en
- Key Concepts: stable in the sense of Lyapunov, Node:, Theorem (LaSalle's Invariance Principle)., Theorem (Hartman-Grobman)., Peano's Theorem, Classification of Singular Points, Definition (Stability)., Theorem (Lyapunov Stability Theorem)., Focus (spiral):, Jordan Normal Form, Conclusion, Bifurcations, Existence and Uniqueness of Solutions, Saddle-Node Bifurcation, Pitchfork Bifurcation
- References: convex-optimization, functional-analysis, manifold-learning, math/geometric-ergodicity, math/spectral-theory-operators, math/variational-calculus, neural-odes, stochastic-control, stochastic-differential-equations

## Entity: math/spectral-theory-operators
- Title: Spectral Theory of Operators
- Category: Mathematical Foundations
- Language: en
- Key Concepts: spectrum, resolvent set, Compact Self-Adjoint Operators, Bounded Self-Adjoint Operators, Singular Value Decomposition (SVD), Spectral Theory of Operators, Sturm–Liouville Theory, spectral theorem, Stability of dynamical systems, Spectrum and Resolvent, resolvent identity, Applications, Continuous spectrum, Spectrum of Markov Operators, Principal Component Analysis (PCA)
- References: functional-analysis, math/lp-spaces, math/markov-chain-mixing, math/spectral-representation-processes, partial-differential-equations, schrodinger-equation, sobolev-spaces, spectral-graph-theory
- Backlinks: algebraic-geometry-slt, algebraic-topology-persistent, ar-models, attention-linear-kernel, brownian-bridge, change-of-basis, conic-sections, eigendecomposition-vs-svd, eigenvalues-eigenvectors, finance/cointegration, finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, fluid-dynamics-navier-stokes, functional-analysis-c-star, geometry-loss-landscapes, geometry-of-attention, gnn-weisfeiler-lehman, gradient-hessian-jacobian, graph-curvature-oversquashing, graph-theory, hilbert-banach-spaces, information-geometry-nn, kernel-methods-rkhs, laplacian, linear-algebra, math/functional-analysis, math/harmonic-analysis, math/kolmogorov-equations-ctmc, math/local-limit-theorems, math/markov-chain-mixing, math/ode-stability, matrix-decompositions, mechanistic-interpretability-sae, morse-theory, multivariable-calculus, multivariable-taylor-series, neural-ode-stability, neural-operators-fno, nonlinear-shrinkage, normalization-layers-math, number-theory-l-functions, optimization-basics, pca, pinns-convergence, portfolio-optimization-ml, positive-definite-matrices, quantum-computing-vqe, quantum-information-entropy, quantum-mechanics, quantum-phase-estimation, random-matrices, random-matrix-theory-marchenko, random-walks-groups, renormalization-group, spectral-clustering, spectral-graph-theory, spectral-theorem-unbounded, spin-glasses-hopfield, state-space-models, weight-initialization-signal

## Entity: math/topology-basics
- Title: Topology and Metric Spaces
- Category: Mathematical Foundations
- Language: en
- Key Concepts: topology, Sequence spaces $\ell^p$, path-connected, complete, Polish space, Convergence and Continuity, sequential compactness, boundary, open, Topological Spaces, open sets, totally bounded, continuous, Applications, $\mathbb{R}^n$ with Euclidean metric
- References: convex-analysis, functional-analysis, math/sigma-algebra-measurability, math/skorokhod-topology, math/weak-convergence-prokhorov, sobolev-spaces
- Backlinks: complex-analysis, manifold, math/algebraic-topology, math/differential-geometry, math/hausdorff-measure, topological-phases

## Entity: math/borel-cantelli-zero-one
- Title: Borel-Cantelli Lemmas and Zero-One Laws
- Category: Measure Theory
- Language: en
- Key Concepts: dichotomy, The "monkey and typewriter" paradox, Borel-Cantelli Lemmas and Zero-One Laws, tail events have no "intermediate" probabilities, Connection to ergodic theory, Bernoulli shifts, Hewitt-Savage zero-one law, Application to the law of the iterated logarithm, Theorem (Kolmogorov 0-1 law, 1933)., $\limsup$, Lemma 2 (reverse Borel-Cantelli)., infinite, independent, zero information, inevitably happen always or never
- References: brownian-motion, characteristic-functions, law-iterated-logarithm, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: math/branching-processes, math/glivenko-cantelli, math/law-of-large-numbers, math/lebesgue-integral, math/poisson-approximation

## Entity: math/cameron-martin-formula
- Title: Cameron-Martin Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: Connection to Girsanov's Theorem, Large Deviations: Freidlin-Wentzell Theory, deterministic special case, The Feldman-Hajek Dichotomy, Signal detection., The Theorem, natural domain for rate functions, Importance sampling., Applications, mutually singular, Cameron-Martin space, shifts Wiener measure by a deterministic function, Abstract Wiener Spaces, Definition., Theorem (Feldman-Hajek).
- References: brownian-motion, finance/girsanov-semimartingales, math/absolute-continuity-process-measures, math/conditional-expectation-sigma, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/sigma-algebra-measurability
- Backlinks: math/absolute-continuity-process-measures, math/gaussian-process-sample-paths, math/sde-numerical-methods, math/sequential-hypothesis-testing, math/stratonovich-integral

## Entity: math/conditional-expectation-sigma
- Title: Conditional Expectation w.r.t. a σ-Algebra
- Category: Measure Theory
- Language: en
- Key Concepts: Linearity, Conditional Expectation w.r.t. a σ-Algebra, Tower of total expectation, Jensen's inequality, orthogonal projection, Regular conditional probability, best mean-square predictor, Tower property, single most useful object, on average, Claim (Radon-Nikodym)., "Pull out what is known", on any σ-algebra, conditional expectation, Independence
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, kalman-filter, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/cameron-martin-formula, math/cramer-rao-bound, math/discrete-martingales, math/doob-meyer-decomposition, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/predictable-compensator, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/differentiation-of-measures
- Title: Differentiation of Measures
- Category: Measure Theory
- Language: en
- Key Concepts: symmetric derivative, Theorem:, Harmonic analysis, Applications and Connections, Differentiation of measures, Vitali covering theorem, Differentiation of Measures, The Besicovitch Covering Lemma, Marcinkiewicz interpolation, Besicovitch covering lemma, pairwise almost disjoint, Core concepts:, Calderón–Zygmund decomposition, Several-variable theory, The Radon–Nikodym Theorem as Differentiation
- References: functional-analysis, math/absolute-continuity-process-measures, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure

## Entity: math/glivenko-cantelli
- Title: Glivenko-Cantelli Theorem and Empirical Processes
- Category: Measure Theory
- Language: en
- Key Concepts: uniform, Nonparametric statistics., The theorem, empirical cumulative distribution function, class of sets, Goodness-of-fit., non-asymptotic, Theorem (Glivenko 1933, Cantelli 1933)., Kolmogorov-Smirnov (KS) statistic, Kolmogorov distribution, Machine learning., distribution-free, The empirical CDF, nonparametric maximum likelihood estimator, Glivenko-Cantelli class
- References: brownian-motion, central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/weak-convergence-prokhorov
- Backlinks: math/borel-cantelli-zero-one, math/kernel-density-estimation

## Entity: math/hausdorff-measure
- Title: Hausdorff Measure and Fractal Dimension
- Category: Measure Theory
- Language: en
- Key Concepts: Key property:, Agreement with Lebesgue Measure, Interpretation via Iterated Function Systems, Computation of Dimension, Iterated Function System (IFS), Box-Counting Dimension, Brownian Motion, standard Brownian motion, References and Further Reading, Application: Differentiation of Measures, Conclusion, General Case: Borel Sets, $s$-dimensional Hausdorff measure, $s$-Dimensional Hausdorff Measure, jump criterion
- References: brownian-motion, math/differentiation-of-measures, math/lebesgue-integral, math/product-measures-fubini, math/sigma-algebra-measurability, math/topology-basics, radon-nikodym

## Entity: math/kolmogorov-probability-axioms
- Title: Kolmogorov's Probability Axioms
- Category: Measure Theory
- Language: en
- Key Concepts: Axiom 3 (countable additivity, σ-additivity)., derivable, Random variable, probability space, invariant under interpretation, measurable map, rigorously, pairwise disjoint, Expectation, smaller, Kolmogorov's Probability Axioms, discrete, Axiom 1 (non-negativity)., σ-algebra of events, continuous
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/ftap-first-fundamental-theorem, math/conditional-expectation-sigma, math/godel-incompleteness, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: bayesian-deep-learning, causal-inference, convex-analysis, course-math-for-ai, gaussian-processes, math/borel-cantelli-zero-one, math/central-limit-theorem, math/conditional-expectation-sigma, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-equations-ctmc, math/large-deviations-cramer, math/law-of-large-numbers, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, math/weak-convergence-prokhorov, measure-theory, radon-nikodym, variational-autoencoders

## Entity: math/lp-spaces
- Title: L^p Spaces
- Category: Measure Theory
- Language: en
- Key Concepts: Minkowski's inequality, Cauchy–Schwarz inequality, Sobolev spaces, Weak $L^p$ Spaces and Marcinkiewicz Interpolation, Sobolev Spaces and Generalizations, Definition and Norm, projection theorem, Riesz–Fischer Theorem, Duality: The Riesz Representation Theorem, essential supremum, Banach space, The Space $L^\infty$ and Essential Supremum, complete normed vector space, Embeddings on Finite Measure Spaces, Hilbert space
- References: functional-analysis, math/conditional-expectation-sigma, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym, sobolev-spaces
- Backlinks: course-math-for-ai, hilbert-banach-spaces, math/differentiation-of-measures, math/harmonic-analysis, math/high-dimensional-statistics, math/lebesgue-integral, math/signed-measures, math/spectral-theory-operators, measure-theory, random-matrices

## Entity: math/lebesgue-integral
- Title: Lebesgue Integral
- Category: Measure Theory
- Language: en
- Key Concepts: Product Integration and Fubini-Tonelli, Additivity, Lebesgue Integral, Comparison with Riemann Integration, Simple Functions and Elementary Integration, simple functions, Fatou's Lemma, Monotone Convergence Theorem (MCT), Extension to Signed and Complex Functions, Homogeneity, Integration of Nonnegative Functions, integrable, Convergence Theorems, References, Lebesgue integral
- References: math/borel-cantelli-zero-one, math/conditional-expectation-sigma, math/lp-spaces, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: course-math-for-ai, math/differentiation-of-measures, math/hausdorff-measure, math/lp-spaces, math/product-measures-fubini, math/signed-measures, measure-theory

## Entity: math/product-measures-fubini
- Title: Product Measures and Fubini's Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: Proof sketch:, Theorem (Tonelli)., Theorem (Fubini)., Remark:, If $f \geq 0$, Independence and Product Measure Factorization, Theorem (Carathéodory Extension)., Characteristic Functions., σ-finiteness requirement:, If $f$ is integrable, product σ-algebra, Existence and Uniqueness of Product Measure, Tonelli's Theorem, Convolution and Characteristic Functions, Key observation:
- References: characteristic-functions, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure, math/lebesgue-integral, math/regular-conditional-probability

## Entity: radon-nikodym
- Title: Radon-Nikodym Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: σ-finiteness:, Duality of $L^p$ Spaces, Radon-Nikodym derivative, Conditional Expectation, Proof sketch (Hilbert space method)., Uniqueness:, measure derivatives, Girsanov Theorem and Measure Change, Risk-Neutral Pricing., The Radon-Nikodym Theorem, Radon-Nikodym multiplicative functional, Chain Rule and Change of Variables, absolute continuity, density, See also:
- References: finance/girsanov-semimartingales, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optimal-transport
- Backlinks: math/differentiation-of-measures, math/hausdorff-measure, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/signed-measures, measure-theory

## Entity: math/regular-conditional-probability
- Title: Regular Conditional Probability
- Category: Measure Theory
- Language: en
- Key Concepts: Markov kernel, Regular conditional probability, References and Further Reading, Markov Kernels and Stochastic Processes, Conditional expectation property, Theorem (Disintegration on Polish Spaces):, The Problem with Naive Conditioning, Disintegration of Measures, Conditional Probability Kernels, Markov processes, Conditional Independence and Bayes' Theorem, Radon-Nikodym theorem, regular version of the conditional probability, conditional probability kernel, Probability measure in the first argument
- References: math/conditional-expectation-sigma, math/density-processes, math/kolmogorov-probability-axioms, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/signed-measures
- Title: Signed Measures and Decomposition Theorems
- Category: Measure Theory
- Language: en
- Key Concepts: Countable additivity, singular, Mutual singularity, minimal, Hahn decomposition, Theorem (Hahn)., Theorem (Jordan)., $\sigma$-finite measures, Absolute Continuity and Singularity, Radon–Nikodym Theorem for Signed Measures, Related Topics, Radon–Nikodym derivative, Total Variation and Variational Norm, [[density-processes|Density Processes]], Banach space
- References: math/absolute-continuity-process-measures, math/contiguity-measures, math/density-processes, math/hellinger-processes, math/lebesgue-integral, math/lp-spaces, radon-nikodym

## Entity: math/sigma-algebra-measurability
- Title: σ-Algebras and Measurability
- Category: Measure Theory
- Language: en
- Key Concepts: can distinguish, Stochastic integral, π-λ systems and Dynkin's theorem, σ-algebra, "representation", filtration, Dynkin's π-λ systems, smallest, Predictability, Closure under complements, π-system, Trivial σ-algebra, disjoint, σ-algebra generated by $X$, random variable
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms
- Backlinks: course-math-for-ai, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/conditional-expectation-sigma, math/differentiation-of-measures, math/discrete-martingales, math/doob-meyer-decomposition, math/hausdorff-measure, math/hellinger-processes, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/topology-basics, measure-theory, radon-nikodym

## Entity: cross-impact
- Title: Cross-Impact Models
- Category: Microstructure
- Language: en
- Key Concepts: Related Topics, ETF Arbitrage, Cross-Impact Models in Microstructure, Cross-Impact Matrix, Direct Impact, The No-Arbitrage Condition, Sector factors, Principal Components, Market factor, The Mechanism of Cross-Impact, Diagonal elements, Mathematical Formulation, Positive Semi-Definite (PSD), Visualization: The Cross-Impact Network, Off-diagonal elements
- References: eigenvalues-eigenvectors, finance/random-matrix-theory, kyle-model, market-impact, optimal-execution
- Backlinks: lead-lag-analysis, market-impact, multivariate-hawkes

## Entity: finance/dark-pools
- Title: Dark Pools and Market Fragmentation
- Category: Microstructure
- Language: en
- Key Concepts: Market Fragmentation, Herfindahl-Hirschman Index, Implementation, Types of Dark Pools, Dark Pools, MiFID II Double Volume Cap (EU), Related Articles, Dark Pools and Market Fragmentation
- References: finance/kyle-lambda, finance/pin-easley-ohara, optimal-execution, vpin

## Entity: deep-lob
- Title: Deep LOB (Order Book CNNs)
- Category: Microstructure
- Language: en
- Key Concepts: Deep LOB, Inception Modules (CNNs), Related Topics, Spoofing Detection, LSTMs, Why it Dominates Handcrafted Features, Liquidity Void Detection, Practical Challenges in Deployment, Stationarity, FPGAs, Visualization: The CNN sliding over LOB, Latency, Deep LOB: Convolutional Networks for the Order Book, The Network Architecture, Limit Order Book (LOB)
- References: finance/order-flow-imbalance, modern-quantization, queue-reactive-models
- Backlinks: market-microstructure

## Entity: glosten-milgrom
- Title: Glosten-Milgrom Model
- Category: Microstructure
- Language: en
- Key Concepts: Related Topics, The Mathematical Mechanism, bid-ask spread, The Core Intuition, Bid Price ($P_B$), Price Discovery, Informed, sell, Key Takeaways, Liquidity Externalities, The Bid-Ask Spread, Noise, Adverse Selection, Ask Price ($P_A$), Visualization: Spread and Information
- References: kyle-model, vpin
- Backlinks: latency-arbitrage, roll-model, spread, vpin

## Entity: lead-lag-analysis
- Title: High-Frequency Lead-Lag Analysis
- Category: Microstructure
- Language: en
- Key Concepts: Mathematical Detection: The Hayashi-Yoshida Estimator, Related Topics, Order Flow Execution, Visualization: Lag Peak, Latency Arbitrage, Finding the Lag ($\theta$), Positive $\theta$, Why Citadel cares, HMM Regime Detection, Lead-Lag Analysis, High-Frequency Lead-Lag Analysis, Hayashi-Yoshida (HY) Estimator, The Epps Effect, Negative $\theta$, Cross-Correlation Function
- References: cross-impact, hmm-particle-filters, latency-arbitrage, vpin
- Backlinks: multivariate-hawkes

## Entity: finance/kyle-lambda
- Title: Kyle's Lambda: The Price Impact Coefficient
- Category: Microstructure
- Language: en
- Key Concepts: market depth decreases toward the close, Equilibrium $\lambda$, Kyle's Lambda, Noise traders, Related Articles, Kyle's Model (1985), Empirical Estimation, Market depth, Multi-Period Extension, market depth, Hasbrouck's (1991) Information Share, Market-maker, Applications, Extensions, Almgren-Chriss Impact Decomposition
- References: amihud-illiquidity, avellaneda-stoikov, finance/order-flow-imbalance, optimal-execution, vpin
- Backlinks: finance/dark-pools, finance/order-flow-imbalance, finance/pin-easley-ohara, finance/repo-market-systemic, finance/vwap-twap, market-microstructure, spread

## Entity: latency-arbitrage
- Title: Latency Arbitrage and Frequent Batch Auctions
- Category: Microstructure
- Language: en
- Key Concepts: Related Topics, Latency Arbitrage and Frequent Batch Auctions, The Flaw of Continuous Time, Continuous Limit Order Book (CLOB), Removes the Liquidity Tax, Frequent Batch Auctions, Latency Arbitrage, The Solution: Frequent Batch Auctions (FBA), The Liquidity Tax, Adverse Selection via Latency, Why FBA fixes the market:, Kills the Footrace, single clearing price, footrace, Visualization: The HFT Race
- References: glosten-milgrom, smart-order-routing
- Backlinks: lead-lag-analysis, mev

## Entity: market-impact
- Title: Market Impact and Square-root Law
- Category: Microstructure
- Language: en
- Key Concepts: 4. Impact in Advanced Trading, Permanent Impact, 1. Permanent vs. Temporary Impact, Price Discovery, 3. Price Discovery as Physics, Latent Liquidity, Market Impact and the Square-root Law, Related Topics, 2. The Square-root Law, Temporary Impact, Cross-Impact, Information Discovery, Illiquid, Cross-Impact Matrix, Incoherent
- References: cross-impact, lob-propagators, optimal-execution, smart-order-routing, vpin
- Backlinks: cross-impact, kyle-model, lob-propagators, market-microstructure, spread

## Entity: lob-propagators
- Title: Mechanical Price Discovery: Propagators
- Category: Microstructure
- Language: en
- Key Concepts: mechanical, Visualization: Response to a Trade, The Efficiency Condition, Propagator function, Related Topics, The Meaning of G(τ), Mean Reversion (Decay), Mechanical Price Discovery and Propagator Models, Permanent Impact, Mechanical vs. Informational, sign of the trade, Immediate Impact, transient and mechanical, Propagator models, The Propagator Equation
- References: finance/hawkes-process, market-impact
- Backlinks: market-impact, queue-reactive-models

## Entity: multivariate-hawkes
- Title: Multivariate Hawkes Processes
- Category: Microstructure
- Language: en
- Key Concepts: Related Topics, Flash Crash Detection, The Intensity Matrix, Excitation Matrix, Application in Algorithmic Trading, Visualization: The Excitation Impulse, Diagonal elements ($\alpha_{ii}$), Market Making, Multivariate Hawkes Processes: Micro-Contagion, Off-diagonal elements ($\alpha_{ij}$), Micro-Price Prediction, cross-excitation, Multivariate Hawkes Process, The Cross-Excitation Network
- References: cross-impact, finance/hawkes-process, lead-lag-analysis

## Entity: liquidation-signals
- Title: Optimal Liquidation with Alpha Signals
- Category: Microstructure
- Language: en
- Key Concepts: Optimal Liquidation with Signals, Related Topics, Optimal Liquidation with Alpha Signals, Opportunistic Execution, Urgency, LOB Imbalance, Trade Flow (Hawkes), Visualization: Signal-Driven Slicing, Key Signals used in Modern Desks, The Optimal Strategy: Drift-Adjusted Schedulling, Alpha Signals, The Augmented Objective Function, Cross-Asset Signals
- References: finance/order-flow-imbalance, optimal-execution, vpin

## Entity: finance/order-flow-imbalance
- Title: Order Flow Imbalance and Microprice
- Category: Microstructure
- Language: en
- Key Concepts: Implementation, Order Flow Imbalance (OFI), Order Flow Imbalance and Microprice, Motivation, Predictive Performance, Predictive Model, Order Flow Imbalance, LOB-Based Definition, Microprice, Spread-Normalized Skew, Stoikov's Generalised Microprice (2018), Related Articles, Multi-Level OFI
- References: avellaneda-stoikov, finance/hawkes-process, finance/kyle-lambda, lob-prediction, vpin
- Backlinks: deep-lob, finance/kyle-lambda, finance/vwap-twap, liquidation-signals, market-microstructure, queue-reactive-models

## Entity: vpin
- Title: Order Flow Toxicity and VPIN
- Category: Microstructure
- Language: en
- Key Concepts: Easley, Lopez de Prado, and O'Hara, Noise Traders, 1. The Informed Trading Risk, Visualization: Toxicity vs. Price, 2. VPIN: The Mechanism, "Volume Time.", VPIN, Regime Detection, Related Topics, Adverse Selection Defense, Low VPIN (< 0.2), Informed Traders, The Flash Crash (2010), C. The VPIN Formula, B. Order Imbalance
- References: finance/pin-easley-ohara, glosten-milgrom, hmm-particle-filters, optimal-execution
- Backlinks: finance/dark-pools, finance/kyle-lambda, finance/order-flow-imbalance, finance/pin-easley-ohara, glosten-milgrom, kyle-model, lead-lag-analysis, liquidation-signals, market-impact, optimal-execution, roll-model

## Entity: finance/pin-easley-ohara
- Title: PIN: Probability of Informed Trading
- Category: Microstructure
- Language: en
- Key Concepts: Implementation, PIN: Probability of Informed Trading, EKOP Model, Single-day likelihood, PIN (Probability of Informed Trading), PIN vs VPIN, Game structure:, PIN, Related Articles
- References: finance/kyle-lambda, roll-model, vpin
- Backlinks: finance/dark-pools, market-microstructure, vpin

## Entity: queue-reactive-models
- Title: Queue-Reactive Models (LOB Dynamics)
- Category: Microstructure
- Language: en
- Key Concepts: Market Orders, Related Topics, Queue-Reactive Models of the Limit Order Book, The Physics of the Queue, The Micro-Price, Why HFTs Use It, The "Reactive" Insight, Market Making, these rates depend strongly on the current size of the queues, Limit Order Book (LOB), Visualization: Transition Intensities, Limit Orders (Arrivals), Cancellations, Micro-Price, Queue-Reactive Models
- References: finance/hawkes-process, finance/order-flow-imbalance, lob-propagators
- Backlinks: deep-lob

## Entity: smart-order-routing
- Title: Smart Order Routing (SOR)
- Category: Microstructure
- Language: en
- Key Concepts: Best Execution, Related Topics, MEV Protection:, Smart Order Routing (SOR), Gas Optimization:, slippage, Liquidity Aggregation:, SOR in Traditional Finance (CeFi), How SOR Works, Multi-hop Paths:, Dark Pools, Price & Volume Analysis:, SOR in Decentralized Finance (DeFi), Dynamic Execution:
- References: market-microstructure
- Backlinks: amm-mechanics, asset-tokenization, cedefi-mechanics, course-cedefi, cross-chain-interop, latency-arbitrage, market-impact, mev, yield-aggregators

## Entity: kyle-model
- Title: The Kyle Model
- Category: Microstructure
- Language: en
- Key Concepts: Related Topics, Market Maker (MM), slowly and linearly, Price Discovery, Visualization: Insider Hiding, informed trader, market liquidity, Informed Trader, Noise Traders, The Kyle Model: Strategic Informed Trading, Market Depth, Strategic Slowing, Kyle's Lambda ($\lambda$), The Three Players, The Equilibrium Solution
- References: market-impact, optimal-execution, vpin
- Backlinks: cross-impact, glosten-milgrom

## Entity: roll-model
- Title: The Roll Model
- Category: Microstructure
- Language: en
- Key Concepts: The Roll Model: Estimating the Effective Spread, 3. Why it Matters, Zero Covariance, 4. Limitations in Modern Markets, Related Topics, Liquidity Proxy, Effective Spread, 2. The Mathematical Derivation, 1. The Bid-Ask Bounce, Hidden Costs, Roll Estimator, Low-Frequency Data, effective bid-ask spread, Visualization: The Bouncing Price, Informed Trading
- References: amihud-illiquidity, glosten-milgrom, vpin
- Backlinks: finance/pin-easley-ohara

## Entity: finance/vwap-twap
- Title: VWAP and TWAP Execution Algorithms
- Category: Microstructure
- Language: en
- Key Concepts: VWAP (Volume-Weighted Average Price), TWAP (Time-Weighted Average Price), VWAP, Implementation, Participation algorithm, TWAP, Market VWAP, VWAP and TWAP Execution Algorithms, Related Articles, Implementation Shortfall
- References: avellaneda-stoikov, finance/kyle-lambda, finance/order-flow-imbalance, optimal-execution

## Entity: kuramoto-model
- Title: Kuramoto Model
- Category: Nonlinear Dynamics
- Language: en
- Key Concepts: Artificial Intelligence, phase transition, 1. Artificial Kuramoto Oscillatory Neurons (AKOrN), Feature Binding:, 3. Solving Combinatorial Problems, Related Topics, Finance, coupling strength, 2. Adversarial Robustness, 1. Market Synchronization & Crises, Unsupervised Discovery:, 2. Systemic Risk, Kuramoto Model, Phase Transition & Order Parameter, Finance Applications
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
- Key Concepts: Overview, Iteration

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
- Key Concepts: L1 (Lasso):, Overview, L1 and L2, L2 (Ridge):

## Entity: sgd-variants
- Title: Stochastic Gradient Descent
- Category: Optimization
- Language: en
- Key Concepts: Overview, Adam:, Vanilla SGD:, RMSProp:, Variants
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
- Key Concepts: $\mathcal N = 4$ super Yang-Mills theory with gauge group $SU(N)$, AdS/CFT & Holographic Principle, Related Topics, [[celestial-holography]], Beyond AdS: celestial holography, The Ryu-Takayanagi formula, Impact, holographic principle, Maldacena's conjecture, Anti-de Sitter space, The holographic idea, Why AdS/CFT is trusted, timelike boundary, type IIB string theory on AdS$_5 \times S^5$, entanglement [[gravitational-entropy|entropy]]
- References: black-hole-soft-hair, bms-group, celestial-holography, conformal-field-theory, general-relativity, gravitational-entropy, hawking-radiation, information-paradox, large-gauge-transformations, pasterski-triangle, soft-theorems
- Backlinks: black-hole-thermodynamics, gravitational-entropy, hawking-radiation, information-paradox

## Entity: anomalies
- Title: Anomalies
- Category: Physics
- Language: en
- Key Concepts: Anomalies, The chiral anomaly, anomaly-free, Scale / trace anomaly, gauge, Related Topics, Anomalously, trace anomaly, non-renormalisation theorem, Explicitly, anomaly, Spontaneously, exact, The general picture, Gauge anomalies and the Standard Model
- References: gauge-theory-yang-mills, goldstone-modes, noether-theorem, path-integral, renormalization-group, ward-identities
- Backlinks: math/banach-tarski, renormalization-group

## Entity: asymptotic-spacetime
- Title: Asymptotic Spacetime
- Category: Physics
- Language: en
- Key Concepts: See Also, Conformal structure, Vacuum degeneracy, ADM mass, Peeling property, Asymptotic Spacetime, Visualization, Theoretical Foundation, Mathematical Formulation, Connections to Information Theory & Holography, Physical Interpretation, Bondi-Sachs mass loss, Key Properties
- References: asymptotic-symmetries, bms-group, celestial-holography, math/differential-geometry
- Backlinks: gravitational-waves-gr, math/non-euclidean-geometry, scattering-amplitudes

## Entity: asymptotic-symmetries
- Title: Asymptotic Symmetries
- Category: Physics
- Language: en
- Key Concepts: Superrotation charges, See Also, Visualization, Theoretical Foundation, Asymptotic Symmetries, Infinite vacuum degeneracy, Mathematical Formulation, Connections to Information Theory & Holography, Matching conditions, Physical Interpretation, Key Properties, Electromagnetic analogy, Large vs. small gauge transformations
- References: bms-group, celestial-holography, soft-theorems
- Backlinks: asymptotic-spacetime, black-hole-soft-hair, bms-group, celestial-holography, goldstone-modes, group-theory, information-paradox, large-gauge-transformations, noether-theorem, pasterski-triangle, pauli-exclusion-quantization, soft-theorems, ward-identities

## Entity: bms-group
- Title: BMS Group
- Category: Physics
- Language: en
- Key Concepts: See Also, Prerequisites, Celestial sphere action, Visualization, Theoretical Foundation, Ward identity = Soft theorem, Infinite vacuum degeneracy, Mathematical Formulation, Connections to Information Theory & Holography, Memory effect, Physical Interpretation, Key Properties, Goldstone interpretation, BMS Group
- References: asymptotic-symmetries, celestial-holography, group-theory, pasterski-triangle
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, conformal-field-theory, gravitational-waves-gr, group-theory, large-gauge-transformations, math/non-euclidean-geometry, noether-theorem, pasterski-triangle, spin-memory, ward-identities

## Entity: information-paradox
- Title: Black Hole Information Paradox
- Category: Physics
- Language: en
- Key Concepts: The Page curve, Related Topics, Information is lost., Remnants., Candidate resolutions, Statement of the paradox, black hole information paradox, Firewall, Page curve, Replica wormholes and the island formula, Soft hair, Why it matters, The island formula, Open questions, Black hole complementarity
- References: ads-cft, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, general-relativity, gravitational-entropy, hawking-radiation, pasterski-triangle, path-integral, qft-basic
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, hawking-radiation, large-gauge-transformations, math/godel-incompleteness

## Entity: black-hole-soft-hair
- Title: Black Hole Soft Hair
- Category: Physics
- Language: en
- Key Concepts: Infinite degeneracy, See Also, Zero energy, The Area Law of [[gravitational-entropy|Entropy]], Prerequisites, Theoretical Foundation, Visualization: [[gravitational-entropy|Entropy]] Scaling, Mathematical Formulation, Connections to Information Theory & Holography, Horizon vs. infinity, Electromagnetic hair, Physical Interpretation, Black Hole Soft Hair, Key Properties, Limitations
- References: asymptotic-symmetries, bms-group, celestial-holography, gravitational-entropy, gravitational-memory, soft-theorems
- Backlinks: ads-cft, information-paradox, large-gauge-transformations, memory-effects, quantum-entanglement, spin-memory

## Entity: black-hole-thermodynamics
- Title: Black Hole Thermodynamics
- Category: Physics
- Language: en
- Key Concepts: firewall, The Penrose Process, Bekenstein-Hawking [[gravitational-entropy|Entropy]], Bekenstein-Hawking entropy, ergosphere, Connection to Holography, Black Hole Thermodynamics, Related Topics, holographic principle, irreducible mass, 3rd, 2nd, The Information Paradox, Hawking Temperature, 1st
- References: ads-cft, general-relativity, gravitational-entropy, gravitational-waves-gr, hawking-radiation, information-paradox
- Backlinks: ads-cft-deep, gravitational-entropy, hawking-radiation, quantum-information-entropy

## Entity: celestial-holography
- Title: Celestial Holography
- Category: Physics
- Language: en
- Key Concepts: Loop corrections, See Also, Prerequisites, Visualization, Theoretical Foundation, $w_{1+\infty}$ symmetry, Lorentz = global conformal group, Mathematical Formulation, Connections to Information Theory & Holography, Soft theorems as Ward identities, Physical Interpretation, Key Properties, Continuous spectrum, Celestial Holography
- References: asymptotic-symmetries, bms-group, conformal-field-theory, gravitational-entropy, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, bms-group, conformal-field-theory, gravitational-entropy, gravitational-waves-gr, group-theory, information-paradox, large-gauge-transformations, math/non-euclidean-geometry, pasterski-triangle, qft-basic, scattering-amplitudes, soft-theorems, spin-memory, wave-particle-duality

## Entity: conformal-field-theory
- Title: Conformal Field Theory (CFT)
- Category: Physics
- Language: en
- Key Concepts: See Also, Prerequisites, Modular invariance, Unitarity bounds, Theoretical Foundation, State-operator correspondence, Mathematical Formulation, Connections to Information Theory & Holography, Conformal blocks, Physical Interpretation, Key Properties, Conformal Field Theory (CFT), Cardy formula
- References: bms-group, celestial-holography, gravitational-entropy, group-theory, qft-basic, quantization, schrodinger-equation
- Backlinks: ads-cft, ads-cft-deep, celestial-holography, kan, renormalization-group, sle

## Entity: dirac-equation
- Title: Dirac Equation
- Category: Physics
- Language: en
- Key Concepts: As a field theory, Dirac Equation, Coupling to gauge fields, positrons, Antimatter., Dirac spinor, Related Topics, Chirality and the Standard Model, Spin $\tfrac{1}{2}$., Dirac equation, Fine structure of hydrogen., left-handed, Predictions, Clifford algebra, Spinors and Lorentz transformations
- References: gauge-theory-yang-mills, maxwell-electromagnetism, pauli-exclusion-quantization, qft-basic, schrodinger-equation, special-relativity
- Backlinks: gauge-theory-yang-mills, maxwell-electromagnetism

## Entity: fokker-planck-equation
- Title: Fokker-Planck Equation
- Category: Physics
- Language: en
- Key Concepts: Boltzmann distribution, probability current, Kramers-Moyal expansion, detailed balance condition, Fokker-Planck Equation, Finite elements:, Computational methods, backward Kolmogorov equation, Direct simulation:, Related Topics, Fokker-Planck equation (FP), Multidimensional generalization, Application to option pricing, Ornstein-Uhlenbeck process, Heat equation as a special case
- References: brownian-motion, geometric-brownian-motion, math/kolmogorov-equations-ctmc, ornstein-uhlenbeck-process, partial-differential-equations, path-integral, stochastic-differential-equations
- Backlinks: diffusion-models, feynman-kac, neural-operators, nonequilibrium-statmech

## Entity: gauge-theory-yang-mills
- Title: Gauge Theory & Yang-Mills
- Category: Physics
- Language: en
- Key Concepts: Gauge Theory & Yang-Mills, Asymptotic freedom and confinement, Related Topics, confines, BRST symmetry, gauge bosons are charged under the gauge symmetry and interact with each other, asymptotic freedom, Renormalisability., Gauge theories, covariant derivative, Non-abelian case: Yang-Mills, Massless spin-1 particles must couple through a conserved current., Quantisation: Faddeev-Popov and BRST, From global to local symmetry, Why gauge theory is inevitable
- References: dirac-equation, goldstone-modes, maxwell-electromagnetism, noether-theorem, path-integral, qft-basic, renormalization-group, ward-identities
- Backlinks: anomalies, connections-curvature, dirac-equation, large-gauge-transformations, lie-groups-algebras, maxwell-electromagnetism, renormalization-group, topological-phases

## Entity: goldstone-modes
- Title: Goldstone Modes
- Category: Physics
- Language: en
- Key Concepts: Soft theorems and the asymptotic connection, soft-pion theorem, Related Topics, The Higgs mechanism: eating Goldstones, gauged, Weinberg soft theorems, spontaneously broken, Goldstone modes of spontaneously broken large gauge transformations and BMS supertranslations, Goldstone Modes, Nambu-Goldstone bosons, Effective field theory of Goldstones, vacuum [[differential-geometry|manifold]], effective Lagrangian, massless modes, Sketch of the proof.
- References: asymptotic-symmetries, math/differential-geometry, noether-theorem, pasterski-triangle, qft-basic, soft-theorems, ward-identities
- Backlinks: anomalies, gauge-theory-yang-mills, large-gauge-transformations

## Entity: gravitational-entropy
- Title: Gravitational Entropy and Holography
- Category: Physics
- Language: en
- Key Concepts: emergent spacetime from entanglement, replica wormholes, After the Page time, Page curve, Bousso-Engelhardt, The Bekenstein Bound, light sheet, island, Quantum Extremal Surfaces and Emergent Spacetime, Holography Beyond AdS, Related Topics, area, holographic principle, The Generalised Second Law, The Holographic Principle
- References: ads-cft, black-hole-thermodynamics, celestial-holography, general-relativity, hawking-radiation, information-paradox
- Backlinks: ads-cft, black-hole-soft-hair, black-hole-thermodynamics, celestial-holography, conformal-field-theory, hawking-radiation, information-paradox, laws-of-thermodynamics, nonequilibrium-statmech, pauli-exclusion-quantization, quantum-entanglement, quantum-information-entropy, statistical-mechanics, uncertainty-principle

## Entity: gravitational-memory
- Title: Gravitational Memory
- Category: Physics
- Language: en
- Key Concepts: Supertranslation transition, Gravitational Memory, See Also, Prerequisites, Theoretical Foundation, Mathematical Formulation, Connections to Information Theory & Holography, DC offset, Spin memory, Physical Interpretation, Key Properties, Two types, Detectable
- References: gravitational-waves-gr, memory-effects, pasterski-triangle, soft-theorems
- Backlinks: black-hole-soft-hair, gravitational-waves-gr, memory-effects, spin-memory

## Entity: gravitational-waves-gr
- Title: Gravitational Waves & General Relativity
- Category: Physics
- Language: en
- Key Concepts: Strain sensitivity, See Also, Theoretical Foundation, Two polarizations, Mathematical Formulation, Speed, Quadrupole emission, Gravitational Waves & General Relativity (GR), Connections to Information Theory & Holography, Peeling, Physical Interpretation, Key Properties
- References: asymptotic-spacetime, bms-group, celestial-holography, gravitational-memory, math/differential-geometry, pasterski-triangle
- Backlinks: black-hole-thermodynamics, gravitational-memory, hawking-radiation, math/non-euclidean-geometry

## Entity: group-theory
- Title: Group Theory
- Category: Physics
- Language: en
- Key Concepts: See Also, Anomalies, Representation theory of the Poincaré group, Visualization, Theoretical Foundation, Spontaneous symmetry breaking, Mathematical Formulation, Key Properties, Connections to Information Theory & Holography, Group Theory in Physics, Peter-Weyl theorem, Schur's lemma, Physical Interpretation, Applications in Machine Learning
- References: asymptotic-symmetries, bms-group, celestial-holography, equivariant-nn, math/differential-geometry, quantum-entanglement
- Backlinks: bms-group, conformal-field-theory, equivariant-nn, noether-theorem, qft-basic

## Entity: hawking-radiation
- Title: Hawking Radiation
- Category: Physics
- Language: en
- Key Concepts: Why This Matters, Related Topics, Bogoliubov transformation, In-modes, The Trans-Planckian Problem, Unruh effect, The Bogoliubov Transformation, evaporation timescale, trans-Planckian problem, Hawking Temperature, Planck spectrum, Black Hole Evaporation, Connection to the Unruh Effect, Virtual Pair Production Near the Horizon, Hawking Radiation
- References: ads-cft, black-hole-thermodynamics, general-relativity, gravitational-entropy, gravitational-waves-gr, information-paradox
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, information-paradox

## Entity: uncertainty-principle
- Title: Heisenberg Uncertainty Principle
- Category: Physics
- Language: en
- Key Concepts: See Also, Fourier duality, Heisenberg Uncertainty Principle, Generalized uncertainty principle (GUP), Zero-point energy, Canonical pairs, Theoretical Foundation, Mathematical Formulation, Connections to Information Theory & Holography, Physical Interpretation, Key Properties, Measurement backaction
- References: gravitational-entropy, quantum-entanglement, schrodinger-equation, wave-particle-duality
- Backlinks: wave-particle-duality

## Entity: kolmogorov-arnold-theorem
- Title: Kolmogorov-Arnold Theorem
- Category: Physics
- Language: en
- Key Concepts: Implications for neural networks, Interpretation., Physical applications., Parametrisation trade-off., universal approximation theorem, Kolmogorov-Arnold theorem, Interpretability., Related Topics, Symbolic regression., Non-constructive., not smooth, exact representation, Decomposition of complexity., Relation to approximation theory, Hilbert's thirteenth problem
- References: finance/spectral-analysis, kan, learnable-activations, partial-differential-equations, pinns, transformer-architecture
- Backlinks: kan, learnable-activations

## Entity: large-gauge-transformations
- Title: Large Gauge Transformations
- Category: Physics
- Language: en
- Key Concepts: small, Large gauge on the horizon: soft hair, Related Topics, [[bms-group|BMS]] group, Small vs. large, Large Gauge Transformations, Ward identities = soft theorems, Large gauge transformations, Spontaneous symmetry breaking of large gauge, Asymptotic charges, spontaneously broken, asymptotic charges, instantons, Why this is a big deal, large
- References: asymptotic-symmetries, black-hole-soft-hair, bms-group, celestial-holography, gauge-theory-yang-mills, goldstone-modes, information-paradox, memory-effects, noether-theorem, pasterski-triangle, soft-theorems, ward-identities
- Backlinks: ads-cft

## Entity: maxwell-electromagnetism
- Title: Maxwell's Electromagnetism
- Category: Physics
- Language: en
- Key Concepts: Related Topics, displacement current, Covariant formulation, Lagrangian, Energy, momentum, and radiation, quantum electrodynamics (QED), $U(1)$ gauge symmetry, The equations, Electromagnetic waves, Lorentz force, Maxwell's Electromagnetism, Larmor power, From Maxwell to QED, Potentials and gauge invariance, Bianchi identity
- References: dirac-equation, gauge-theory-yang-mills, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes, soft-theorems, special-relativity, ward-identities
- Backlinks: dirac-equation, gauge-theory-yang-mills

## Entity: memory-effects
- Title: Memory Effects
- Category: Physics
- Language: en
- Key Concepts: Detectability, See Also, Memory Effects, Prerequisites, Universality, Visualization, Theoretical Foundation, Mathematical Formulation, Connections to Information Theory & Holography, Hierarchy, Physical Interpretation, Key Properties, Infrared origin, Vacuum transitions
- References: black-hole-soft-hair, gravitational-memory, pasterski-triangle, soft-theorems, spin-memory
- Backlinks: gravitational-memory, large-gauge-transformations, spin-memory

## Entity: noether-theorem
- Title: Noether's Theorem
- Category: Physics
- Language: en
- Key Concepts: Noether's Theorem, Example: electric charge from global phase symmetry, Local, Related Topics, conserved current, large gauge transformations, Example: energy from time-translation invariance, Quantum Noether, Noether's theorem, Ward identities, Global vs. local symmetries, Ward-Takahashi identities, The dictionary of symmetries and charges, Bianchi identities, global
- References: asymptotic-symmetries, bms-group, group-theory, hamiltonian-mechanics, lagrangian-mechanics, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, math/variational-calculus, maxwell-electromagnetism, path-integral, ward-identities

## Entity: partial-differential-equations
- Title: Partial Differential Equations
- Category: Physics
- Language: en
- Key Concepts: Initial conditions, Wave equation, Boundary and initial conditions, Finite differences (FDM)., Dirichlet, Spectral methods., stiff, Elliptic, Partial Differential Equations, Einstein equations, Related Topics, Stiffness and multiscale structure, Canonical equations of physics, Solution methods, Schrödinger equation
- References: automatic-differentiation, brownian-motion, finance/fractional-fokker-planck, pinns, schrodinger-equation
- Backlinks: automatic-differentiation, convertible-bonds, feynman-kac, fokker-planck-equation, fourier-neural-operators, fredholm-theory, hydrodynamic-limits, kolmogorov-arnold-theorem, math/harmonic-analysis, math/spdes, math/spectral-theory-operators, mckean-vlasov-sdes, neural-operators, numerical-pde-finance, pinns, risk-neutral-valuation, schwartz-distributions

## Entity: pasterski-triangle
- Title: Pasterski's Triangle Theory
- Category: Physics
- Language: en
- Key Concepts: See Also, Sub-subleading, Leg 1 — Soft Theorems $\leftrightarrow$ Asymptotic Symmetries (Ward identities):, Subleading triangle, Prerequisites, Theoretical Foundation, Leg 2 — Asymptotic Symmetries $\leftrightarrow$ Memory Effects (vacuum transitions):, Quantum level, Mathematical Formulation, Connections to Information Theory & Holography, Universal, Physical Interpretation, Key Properties, Leg 3 — Memory Effects $\leftrightarrow$ Soft Theorems (Fourier transform):, Pasterski's Triangle Theory
- References: asymptotic-symmetries, bms-group, celestial-holography, scattering-amplitudes, soft-theorems, spin-memory
- Backlinks: ads-cft, bms-group, goldstone-modes, gravitational-memory, gravitational-waves-gr, information-paradox, large-gauge-transformations, memory-effects, soft-theorems, ward-identities

## Entity: path-integral
- Title: Path Integral Formulation
- Category: Physics
- Language: en
- Key Concepts: Feynman diagrams, Faddeev-Popov procedure, Why the path integral, classical trajectory, Gauge theories and the Faddeev-Popov trick, Related Topics, Quantum gravity., lattice QFT, Path Integral Formulation, Euclidean path integral and statistical mechanics, Non-perturbative physics., The classical limit, Caveats, Gauge theories., Symmetries are transparent.
- References: hamiltonian-mechanics, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes
- Backlinks: anomalies, feynman-kac, fokker-planck-equation, gauge-theory-yang-mills, information-paradox, path-integrals, renormalization-group, statistical-mechanics, ward-identities

## Entity: pauli-exclusion-quantization
- Title: Pauli Exclusion Principle & Quantization
- Category: Physics
- Language: en
- Key Concepts: See Also, Pauli Exclusion Principle & [[quantization]], Anyons, Theoretical Foundation, Mathematical Formulation, Key Properties, Exchange interaction, Fermi pressure, Connections to Information Theory & Holography, Physical Interpretation, Atomic shell structure, Cooper pairs
- References: asymptotic-symmetries, gravitational-entropy, quantization, quantum-entanglement
- Backlinks: dirac-equation, qft-basic

## Entity: qft-basic
- Title: QFT: Basic Level
- Category: Physics
- Language: en
- Key Concepts: Renormalization, Optical theorem, See Also, Quantum Field Theory (QFT): Basic Level, Prerequisites, CPT theorem, Theoretical Foundation, Crossing symmetry, Spontaneous symmetry breaking, Mathematical Formulation, Connections to Information Theory & Holography, Physical Interpretation, Key Properties
- References: celestial-holography, finance/monte-carlo-method, group-theory, pauli-exclusion-quantization, quantization, scattering-amplitudes, schrodinger-equation, wave-particle-duality
- Backlinks: conformal-field-theory, dirac-equation, equivariant-nn, finance/monte-carlo-method, gauge-theory-yang-mills, goldstone-modes, information-paradox, kan, maxwell-electromagnetism, path-integral, quantum-mechanics, renormalization-group, statistical-mechanics, ward-identities

## Entity: quantum-entanglement
- Title: Quantum Entanglement
- Category: Physics
- Language: en
- Key Concepts: See Also, Area law, Entanglement as resource, Monogamy, Quantum Entanglement, Theoretical Foundation, Entanglement distillation, Mathematical Formulation, Connections to Information Theory & Holography, Physical Interpretation, Key Properties, Non-locality
- References: black-hole-soft-hair, finance/random-matrix-theory, finance/shannon-entropy, gravitational-entropy, schrodinger-equation, superposition-collapse
- Backlinks: finance/random-matrix-theory, finance/shannon-entropy, finance/zeta-field, group-theory, linear-spaces-basis, pauli-exclusion-quantization, quantum-information-entropy, quantum-mechanics, superposition-collapse, uncertainty-principle

## Entity: renormalization-group
- Title: Renormalization Group
- Category: Physics
- Language: en
- Key Concepts: asymptotically safe, Irrelevant, Related Topics, Marginal, asymptotic freedom, Continuum limits and effective field theory, Fixed points and universality, Renormalization Group, fixed point, QED., QCD., beta function, Asymptotic safety and the space of theories, leading-log resummation, Wilson's idea
- References: anomalies, conformal-field-theory, gauge-theory-yang-mills, math/spectral-theory-operators, path-integral, qft-basic, ward-identities
- Backlinks: anomalies, effective-field-theory, gauge-theory-yang-mills, many-body-tensor-networks

## Entity: scattering-amplitudes
- Title: Scattering Amplitudes & S-matrix
- Category: Physics
- Language: en
- Key Concepts: Collinear limits, Soft limits, See Also, Theoretical Foundation, Color decomposition, Mathematical Formulation, Connections to Information Theory & Holography, BCJ duality and double copy, Scattering Amplitudes & S-matrix, Physical Interpretation, Key Properties, On-shell methods
- References: asymptotic-spacetime, celestial-holography, soft-theorems
- Backlinks: celestial-holography, equivariant-nn, maxwell-electromagnetism, pasterski-triangle, path-integral, qft-basic, soft-theorems

## Entity: soft-theorems
- Title: Soft Theorems
- Category: Physics
- Language: en
- Key Concepts: Quantum corrections, See Also, Prerequisites, Universality, Theoretical Foundation, Infrared divergences, Mathematical Formulation, Connections to Information Theory & Holography, Soft photon vs. graviton, Physical Interpretation, Key Properties, Color, Soft Theorems
- References: asymptotic-symmetries, celestial-holography, pasterski-triangle, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-symmetries, black-hole-soft-hair, goldstone-modes, gravitational-memory, large-gauge-transformations, maxwell-electromagnetism, memory-effects, noether-theorem, pasterski-triangle, scattering-amplitudes, ward-identities

## Entity: spin-memory
- Title: Spin Memory
- Category: Physics
- Language: en
- Key Concepts: See Also, Circular orbit detection, Prerequisites, Angular momentum signature, Superrotation Ward identity, Spin Memory, Theoretical Foundation, Mathematical Formulation, Connections to Information Theory & Holography, Amplitude, Physical Interpretation, Key Properties, Subleading order
- References: black-hole-soft-hair, bms-group, celestial-holography, gravitational-memory, memory-effects
- Backlinks: memory-effects, pasterski-triangle

## Entity: statistical-mechanics
- Title: Statistical Mechanics
- Category: Physics
- Language: en
- Key Concepts: Boltzmann distribution, Microcanonical ensemble, Free energy minimization as unifying principle, Grand canonical ensemble, Energy-based models, Wick rotation, principle of minimum free energy, the macroscopic state of an equilibrium system is completely described by a probabilistic ensemble, Gibbs [[gravitational-entropy|entropy]], Wick rotation and connection to quantum mechanics, Introduction, Ensembles and fundamental distributions, Annealing and optimization, Summary, [[gravitational-entropy|Entropy]] and information
- References: finance/shannon-entropy, gravitational-entropy, math/ergodic-theorems-birkhoff, path-integral, qft-basic
- Backlinks: bayesian-deep-learning, convergence-of-semimartingales, copulas, energy-based-models, freidlin-wentzell-theory, gaussian-processes, maximum-entropy, nonequilibrium-statmech, sle, variational-autoencoders, wentzell-freidlin

## Entity: superposition-collapse
- Title: Superposition & Collapse
- Category: Physics
- Language: en
- Key Concepts: Linearity, See Also, Pointer states, Theoretical Foundation, Macroscopic superpositions, Mathematical Formulation, Connections to Information Theory & Holography, Quantum Zeno effect, No-cloning theorem, Superposition & Collapse, Physical Interpretation, Key Properties
- References: quantum-entanglement, schrodinger-equation
- Backlinks: quantum-entanglement

## Entity: ward-identities
- Title: Ward Identities
- Category: Physics
- Language: en
- Key Concepts: Anomalies, Weinberg's soft-photon theorem, Chiral anomaly, Subleading soft-graviton theorem, Related Topics, $Z_1 = Z_2$, Unphysical polarisations of the photon decouple., Weinberg's soft-graviton theorem, every soft theorem in scattering is a Ward identity of an asymptotic symmetry, The basic identity, Conformal / trace anomaly, anomaly, Gauge anomalies, Ward identities, Asymptotic symmetries and soft theorems
- References: asymptotic-symmetries, bms-group, noether-theorem, pasterski-triangle, path-integral, qft-basic, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, maxwell-electromagnetism, renormalization-group

## Entity: wave-particle-duality
- Title: Wave-Particle Duality
- Category: Physics
- Language: en
- Key Concepts: See Also, Coherence length, Thermal de Broglie wavelength, Matter-wave interferometry, Theoretical Foundation, Wave-Particle Duality, Delayed-choice experiments, Mathematical Formulation, Connections to Information Theory & Holography, Complementarity, Physical Interpretation, Key Properties
- References: celestial-holography, schrodinger-equation, uncertainty-principle
- Backlinks: qft-basic, uncertainty-principle

## Entity: heat-equation
- Title: Heat Equation
- Category: Physics Foundations
- Language: en
- Key Concepts: Overview, Formulation

## Entity: laws-of-thermodynamics
- Title: Laws of Thermodynamics
- Category: Physics Foundations
- Language: en
- Key Concepts: Second Law:, Third Law:, The Four Laws, Zeroth Law:, First Law (Conservation of Energy):
- References: gravitational-entropy

## Entity: maxwells-equations
- Title: Maxwell's Equations
- Category: Physics Foundations
- Language: en
- Key Concepts: Faraday's Law:, Ampère-Maxwell Law:, Gauss's Law:, Differential Form, Gauss's Law for Magnetism:, Overview
- Backlinks: stokes-theorem

## Entity: schrodinger-equation
- Title: Schrodinger Equation
- Category: Physics Foundations
- Language: en
- Key Concepts: Overview, Time-Dependent Equation
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
- Key Concepts: The Bayesian Solution, Fractional Kelly as a Heuristic, Bayesian Kelly Criterion and Parameter Uncertainty, mathematical justification for Fractional Kelly, Drawdown Control, Related Topics, Posterior Distribution, The Flaw of Plug-in Estimates, Visualization: The Kelly Cliff, Bayesian Kelly, expected growth across all possible values of $\mu$
- References: kelly-criterion, merton-portfolio, variational-inference
- Backlinks: bayesian-inference, kelly-jump-diffusion

## Entity: entropy-pooling
- Title: Entropy Pooling (Meucci)
- Category: Portfolio
- Language: en
- Key Concepts: Related Topics, [[shannon-entropy|Entropy]] Pooling: Advanced Portfolio Construction, The Core Concept: Minimum Relative [[shannon-entropy|Entropy]], linear, normally distributed, Options and Non-Linearities, Visualization: Shifting the Distribution, [[shannon-entropy|Entropy]] Pooling, Stress Testing, Convex Optimization, The Optimization Problem, Kullback-Leibler (KL) Divergence, Ranking Signals, Prior, Why Tier-1 Funds Use It
- References: bayesian-black-litterman, convex-optimization-trading, finance/shannon-entropy, financial-entropy
- Backlinks: information-geometry-finance

## Entity: kelly-jump-diffusion
- Title: Kelly Criterion with Jump-Diffusion
- Category: Portfolio
- Language: en
- Key Concepts: The Jump-Diffusion Setup, Geometric Brownian Motion (GBM), Kelly Criterion in Jump-Diffusion Models, Jumps, Related Topics, Jump-Diffusion Kelly, You are bankrupt., The Bankruptcy Constraint, Visualization: The Jump-Aware Curve, negative infinity, The Danger of Continuous Leverage, Why Funds Use Fractional Kelly, The Modified Kelly Formula, jumps
- References: bayesian-kelly, frtb-es, kelly-criterion, merton-jump-diffusion, merton-portfolio

## Entity: merton-portfolio
- Title: Merton's Portfolio Problem
- Category: Portfolio
- Language: en
- Key Concepts: Risk-free Bond, Key Insights from the Formula:, Related Topics, constant, Risk Adjustment, Kelly Criterion Limit, Hamilton-Jacobi-Bellman (HJB) Equation, Merton's Portfolio Problem, Solving via the HJB Equation, Risk Premium, Kelly Criterion, The Elegant Solution, Visualization: The Optimal Path, The Mathematical Setup, Myopic Behavior
- References: geometric-brownian-motion, kelly-criterion, stochastic-control, stochastic-differential-equations
- Backlinks: bayesian-kelly, kelly-jump-diffusion, path-integral-control

## Entity: nonlinear-shrinkage
- Title: Nonlinear Shrinkage of Covariance
- Category: Portfolio
- Language: en
- Key Concepts: Visualization: Eigenvalue Cleaning, Linear vs. Nonlinear Shrinkage, Related Topics, Stability, The Mathematical Mechanism, Linear Shrinkage (2004), sample covariance matrix, Transaction Costs, each eigenvalue, Nonlinear Shrinkage, Robustness, Nonlinear Shrinkage of Covariance (Ledoit-Wolf), Random Matrix Theory (RMT), Hilbert Transform, Nonlinear Shrinkage (2017)
- References: eigenvalues-eigenvectors, finance/markowitz-mean-variance, finance/random-matrix-theory, math/spectral-theory-operators

## Entity: universal-portfolios
- Title: Universal Portfolios
- Category: Portfolio
- Language: en
- Key Concepts: The Problem Setup, Related Topics, best constant-rebalanced portfolio (BCRP), Cover's Algorithm, The Guarantee (No Regret), Practical Limitations, Constant-Rebalanced Portfolio (CRP), ensemble method, Universal Portfolios, MCMC sampling, sublinear regret, Visualization: Catching the Optimum, Universal Portfolios (Cover's Algorithm)
- References: kelly-criterion, math/information-theory, online-learning-regret

## Entity: convex-optimization-in-trading
- Title: Convex Optimization in Quantitative Trading
- Category: Portfolio Management
- Language: en
- Key Concepts: Convex Optimization in Quantitative Trading, See Also
- References: algorithmic-execution-twap-vwap, course-quant-trading, portfolio-optimization-and-black-litterman
- Backlinks: portfolio-optimization-and-black-litterman

## Entity: factor-investing-and-fama-french
- Title: Factor Investing & Fama-French Models
- Category: Portfolio Management
- Language: en
- Key Concepts: Factor Investing & Fama-French Models, See Also
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
- Key Concepts: capital, The Model, strategy (portfolio), Strategy and Capital, Connection to the broader theory, Bank account, discounted, admissible, Risky assets, (B,S)-Market and Self-Financing Strategies, Self-Financing, Definition., self-financing strategy, Admissibility, discrete stochastic integral
- References: brownian-motion, finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/self-similarity-fractality, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability, put-call-parity

## Entity: finance/apt-ross
- Title: Arbitrage Pricing Theory (APT)
- Category: Pricing
- Language: en
- Key Concepts: alternative to [[capm|CAPM]], Weakness: choice of factors, first, Comparison with CAPM, Main statement, no asymptotic arbitrage in a large market, Setup, Related Articles, Proof (idea), factor zoo problem, Arbitrage Pricing Theory (APT), Connection to large markets, which, APT theorem (Ross 1976; Huberman 1982)., uncorrelated across assets
- References: fama-macbeth-regression, finance/alpha-stacking, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/markowitz-mean-variance

## Entity: finance/arbitrage-definition
- Title: Arbitrage and Its Absence
- Category: Pricing
- Language: en
- Key Concepts: main filter, first fundamental theorem of financial mathematics (FTAP), Via discounted increments., NA1 / NUPBR (No Unbounded Profit with Bounded Risk), arbitrage-free, Equivalent Formulations, arbitrage opportunity, Strengthenings and Generalizations, Via the set of attainable claims., Arbitrage and Its Absence, continuous, Definition 1., Geometrically., A note on realism, Intuition
- References: finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models
- Backlinks: cost-of-carry, finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/crr-model, finance/ftap-first-fundamental-theorem

## Entity: finance/asymptotic-arbitrage-large-markets
- Title: Asymptotic Arbitrage and Large Markets
- Category: Pricing
- Language: en
- Key Concepts: diversify in the limit, Connection to Ross's APT, large financial market, contiguity, equivalence, Asymptotic Arbitrage and Large Markets, statistical arbitrage, Contiguity as a criterion, Asymptotic arbitrage, formally arbitrage-free, Definition (AA of the first kind)., Definition., The large market, mutual contiguity, Practical significance
- References: black-scholes, fama-macbeth-regression, finance/alpha-stacking, finance/arbitrage-definition, finance/crr-model, finance/ftap-first-fundamental-theorem
- Backlinks: finance/apt-ross, finance/arbitrage-definition, math/weak-convergence-prokhorov

## Entity: finance/asymptotic-expansion-finance
- Title: Asymptotic Expansions in Finance
- Category: Pricing
- Language: en
- Key Concepts: Prerequisites, Asymptotic Expansions in Finance, Small Volatility Expansion, Model intuition, Related Topics, SABR implied volatility formula, geodesic volatility, asymptotic expansion in the vol-of-vol $\nu$ and time $T$, Fast calibration, Analytic Greeks, Asymptotic and perturbation methods, The SABR Formula (Hagan-Woodward), Heat Kernel Expansion, Practical Applications, Smile extrapolation
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/dupire-local-vol, finance/sabr-model, heston-model, manifold-learning
- Backlinks: finance/sabr-model

## Entity: avellaneda-stoikov
- Title: Avellaneda-Stoikov Model
- Category: Pricing
- Language: en
- Key Concepts: Symmetric arrival rates, reservation price, Volatility effect, Inventory risk component, Time effect, The Optimal Spread, Options Market Making, Adverse selection component, Crypto Market Making, Related Topics, Python Implementation, Skewing, Risk aversion duality, FX Spot Market Making, Guéant, Lehalle & Fernandez-Tapia (2013)
- References: brownian-motion, cox-process, finance/monte-carlo-method, hidden-markov-models, optimal-execution
- Backlinks: brownian-motion, cox-process, finance/hidden-markov-models, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/order-flow-imbalance, finance/vwap-twap, market-microstructure, spread, stochastic-control

## Entity: finance/bachelier-formula
- Title: Bachelier Formula
- Category: Pricing
- Language: en
- Key Concepts: arithmetic Brownian motion, absolute, Bachelier as the "small-vol limit" of BS, complete, Bachelier's model, When to use it, Comparison with Black-Scholes, historical predecessor, 73 years, multiplicative, "everything in Black-Scholes is already in Bachelier", Historical significance, can become negative, coexist, 5 years before
- References: attention-mechanisms, black-scholes, brownian-motion, finance/black-scholes-derivations, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, geometric-brownian-motion
- Backlinks: blacks-model, finance/black-scholes-derivations, finance/efficient-market-hypothesis

## Entity: finance/barrier-asian-options
- Title: Barrier and Asian Options
- Category: Pricing
- Language: en
- Key Concepts: Barrier option types:, Asian Options, Down-and-Out Call, Barrier and Asian Options, Related Articles, Implementation, Arithmetic Asian Call, Rubinstein-Reiner Formula (Down-and-Out Call, $H < K$), Exotic options, Geometric Asian, Barrier Options
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/variance-gamma
- Backlinks: brownian-bridge, finance/upper-lower-hedging-prices

## Entity: blacks-model
- Title: Black's Model (1976)
- Category: Pricing
- Language: en
- Key Concepts: payer swaption, Commodity options, Shifted Lognormal Model, Calibration input, Volatility quoting, Derivation Under the Forward Measure, Related Topics, Black's Model (1976), Black's Model for Swaptions, Python Implementation, futures and forward contracts, Applications, Normal (Bachelier) Variant, caplet, normal
- References: black-scholes, finance/bachelier-formula, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/sabr-model, finance/swaps, finance/volatility-surface, heston-model
- Backlinks: cost-of-carry, risk-neutral-valuation

## Entity: black-scholes
- Title: Black-Scholes Model
- Category: Pricing
- Language: en
- Key Concepts: Black-Scholes model, [[sabr-model]], [[monte-carlo-method]], Put-Call Parity, Delta Hedging, Greeks, Constant volatility, Continuous hedging, Risk Management, Related Topics, Python Implementation, Vol Surface Construction, No dividends, implied volatility, Black-Scholes Model
- References: brownian-motion, exotic-options, finance/monte-carlo-method, finance/sabr-model, geometric-brownian-motion, heston-model, numerical-pde-finance
- Backlinks: arma-models, automatic-differentiation, bayesian-black-litterman, blacks-model, brownian-motion, change-of-variables, convertible-bonds, convex-optimization-trading, deep-galerkin, dv01, fama-macbeth-regression, feynman-kac, finance/asymptotic-arbitrage-large-markets, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/barrier-asian-options, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/credit-risk-models, finance/crr-model, finance/delta-hedging-practice, finance/dispersion-trading, finance/energy-commodity-derivatives, finance/follmer-schweizer, finance/free-boundary-american, finance/girsanov-semimartingales, finance/heston-model, finance/levy-esscher-continuous, finance/libor-market-model, finance/longstaff-schwartz, finance/merton-jump-diffusion, finance/monte-carlo-method, finance/nelson-siegel-svensson, finance/optimal-stopping-american, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/stefan-problem-american, finance/swaps, finance/variance-swaps-vix, finance/volatility-surface, garman-kohlhagen, geometric-brownian-motion, greeks-options, lln-clt, math/martingale-representation, ml-options-pricing, model-free-rl-factors, multivariable-calculus, numeraire-invariant-hedging, numerical-pde-finance, option-strategies, ornstein-uhlenbeck-process, pinns, put-call-parity, regime-switching-factors, risk-neutral-valuation, sharpe-ratio-statistics, survival-risk-prediction, svi-model, taylor-series, ts-cs-factor-analysis, volatility-arbitrage, volatility-smile

## Entity: finance/bond-options-gaussian
- Title: Bond Options in Gaussian Models
- Category: Pricing
- Language: en
- Key Concepts: exactly the [[black-scholes|Black-Scholes formula]], The Hull-White model, American bond option, discount rate, negative, Connection to multi-factor models, one-factor Gaussian models, spot martingale measure, Zero-coupon bond price, HJM framework, Bond option, Jacobs-Jones formula (1986), The Vasicek model, Distribution., forward measure
- References: black-scholes, brownian-motion, dv01, finance/cir-hull-white, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american
- Backlinks: finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/interest-rate-term-structure, finance/libor-market-model, finance/short-rate-models, finance/stefan-problem-american

## Entity: finance/bootstrapping-yield-curve
- Title: Bootstrapping the Yield Curve
- Category: Pricing
- Language: en
- Key Concepts: Prerequisites, Curve trades, Bootstrapping the Yield Curve, Dual-Curve Stripping (Post-2008), Model calibration, Input Instruments, Yield Curve Shape, Related Topics, Swap pricing, Interpolation Methods, Curve Sensitivities (Jacobian), turn-of-year jumps, Bond relative value, bootstrap equation, Practical Applications
- References: finance/bond-options-gaussian, finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, libor-market-model
- Backlinks: finance/nelson-siegel-svensson, finance/swaps, multi-curve-framework

## Entity: finance/capm
- Title: CAPM (Capital Asset Pricing Model)
- Category: Pricing
- Language: en
- Key Concepts: Derivation from Markowitz, Security Market Line (SML), Beta vs. return, starting point, "asset risk premium" = "beta" × "market risk premium", alpha, relative market capitalizations, Beta as a risk metric, Homogeneity assumption, CAPM, they all hold the same optimal risky portfolio, Conditional and intertemporal extensions, Value, The core equation, Conditional CAPM.
- References: fama-macbeth-regression, finance/apt-ross, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: finance/apt-ross, finance/efficient-market-hypothesis, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/caps-floors-swaptions
- Title: Caps, Floors and Swaptions
- Category: Pricing
- Language: en
- Key Concepts: European payer swaption, LIBOR Market Model, Prerequisites, Black's Formula for Caplets, cube, Caps, Floors and Swaptions, Cap-Floor Parity, Strike dimension, Skew and smile, Black (1976) model, Interest rate options, Bermudan swaptions, European Swaptions, Black Vol vs Normal Vol, LMM/BGM to Caps and Swaptions
- References: black-scholes, finance/bond-options-gaussian, finance/sabr-model, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, cost-of-carry, finance/change-of-numeraire, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/change-of-numeraire
- Title: Change of Numeraire
- Category: Pricing
- Language: en
- Key Concepts: Quanto Adjustment, The Swap Measure and Swaptions, change of numeraire, Prerequisites, Application to caplets., Radon-Nikodym Derivative Between Measures, The Fundamental Theorem, swaption Black formula, Related Topics, Standard Numeraire Choices, numeraire, Identify the payoff, The T-Forward Measure, quanto adjustment, Compute the Radon-Nikodym derivative
- References: black-scholes, brownian-motion, finance/caps-floors-swaptions, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/complete-incomplete-markets
- Title: Complete and Incomplete Markets. Second Fundamental Theorem
- Category: Pricing
- Language: en
- Key Concepts: equivalent martingale measure is unique, incomplete, Super-hedging, Proof idea, Theorem., complete, $\Leftarrow$ (uniqueness $\Rightarrow$ completeness)., Mean-square error minimization, Second Fundamental Theorem, Complete:, completeness, additional choice, Related Articles, What to do on an incomplete market, Definition.
- References: finance/bs-market-self-financing, finance/crr-model, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion, heston-model, optional-decomposition
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/crr-model, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: convertible-bonds
- Title: Convertible Bonds
- Category: Pricing
- Language: en
- Key Concepts: Gamma, Convertible Bonds, Binomial Tree with Credit Risk, Par (Face Value), Greeks, call condition, Corporate funding, Python: Binomial Tree Pricing, long the convertible, short $\Delta$ shares, Key Terms, Credit-equity relative value, Related Topics, Conversion Ratio, Carry, Balanced
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/xva, heston-model, partial-differential-equations
- Backlinks: numerical-pde-finance

## Entity: finance/copula-models
- Title: Copula Models
- Category: Pricing
- Language: en
- Key Concepts: Sklar's Theorem, Stationarity, Counterparty Credit Risk, Student-t Copula, Gumbel copula, upper tail dependence coefficient, Static parameters, Related Topics, Python Implementation, average correlation, Dynamic copulas (Patton, 2006), Scale invariance, lower tail dependence coefficient, Uniqueness, Portfolio VaR
- References: cornish-fisher-cvar, cox-process, extreme-value-theory, finance/value-at-risk, finance/xva

## Entity: cost-of-carry
- Title: Cost of Carry
- Category: Pricing
- Language: en
- Key Concepts: convexity bias, Currency (covered interest rate parity), Non-dividend-paying stock, Reverse cash-and-carry, No counterparty risk, Forward Curves and Term Structure, Stock with discrete dividends, Stock index futures, The General Formula, Commodity Markets, Related Topics, Index futures fair value, Python Implementation, Contango and Backwardation, convenience yield
- References: blacks-model, finance/arbitrage-definition, finance/caps-floors-swaptions, finance/swaps, finance/xva, risk-neutral-valuation
- Backlinks: finance/swaps

## Entity: finance/crr-model
- Title: Cox-Ross-Rubinstein Binomial Model (CRR)
- Category: Pricing
- Language: en
- Key Concepts: Cox-Ross-Rubinstein Binomial Model (CRR), Model, complete, discrete delta hedging, Claim., No-arbitrage condition, binomial formula, working tool, European option price, Replicating portfolio (hedging), true, Why this matters in practice, Convergence to Black-Scholes, Related Articles, Martingale measure
- References: black-scholes, finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/black-scholes-derivations, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/stefan-problem-american, math/central-limit-theorem, math/discrete-markov-chains, math/optimal-stopping-markov, math/weak-convergence-prokhorov

## Entity: finance/delta-hedging-practice
- Title: Delta Hedging in Practice
- Category: Pricing
- Language: en
- Key Concepts: Gamma Scalping, Gamma scalping, Delta Hedging in Practice, Gap Risk, Pin Risk Near Expiry, Model Risk, Related Topics, Python Implementation, Gamma risk, volga, Greeks-neutral portfolio, Hedging Frequency Optimization, Practical Challenges, The Ideal, The Cost of Rebalancing
- References: black-scholes, finance/variance-swaps-vix, finance/volatility-surface, greeks-options, heston-model, option-strategies
- Backlinks: deep-hedging, greeks-options

## Entity: finance/discrete-girsanov-esscher
- Title: Discrete Girsanov and the Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: Idea., mean shift, Why have both, Related Articles, Discrete Girsanov theorem., Conditional Esscher., arbitrary, how, Esscher, minimum Esscher measure, explicit, Girsanov, Esscher transform, Discrete Girsanov and the Esscher Transform, Discrete Girsanov: the conditionally Gaussian case
- References: finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion
- Backlinks: finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous

## Entity: finance/dupire-local-vol
- Title: Dupire Local Volatility Model
- Category: Pricing
- Language: en
- Key Concepts: Implementation, Dupire Equation, Dupire Local Volatility Model, Local Vol vs Stochastic Vol, Local Volatility (Dupire, 1994), Related Articles, calibrated once
- References: finance/rough-volatility, finance/sabr-model, finance/variance-swaps, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/black-scholes-derivations, finance/variance-swaps, finance/volatility-surface, lsv-model, volatility-smile

## Entity: finance/efficient-market-hypothesis
- Title: Efficient Market Hypothesis (EMH)
- Category: Pricing
- Language: en
- Key Concepts: Herding and bubbles, EMH, if EMH were absolutely true, Connection to the martingale property, Semi-strong form., historical bridge, under the original measure, at any moment financial asset prices fully reflect all available information, Critique and revision, FTAP, Excess volatility, publicly available, behavioural finance, Adaptive Market Hypothesis, Three forms
- References: brownian-motion, fama-macbeth-regression, finance/apt-ross, finance/bachelier-formula, finance/capm, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: causal-inference, finance/apt-ross, finance/capm, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/energy-commodity-derivatives
- Title: Energy & Commodity Derivatives
- Category: Pricing
- Language: en
- Key Concepts: Seasonality, Gibson-Schwartz: Stochastic Convenience Yield, Prerequisites, equilibrium price, Heating Degree Days (HDD), Cumulative HDD/CDD, Emission Permits, Related Topics, option on the spread, convenience yield, Contango, Backwardation, Calibration to Futures Term Structure, Energy & Commodity Derivatives, Cooling Degree Days (CDD)
- References: black-scholes, brownian-motion, finance/levy-processes, finance/optimal-stopping-american, finance/real-options, finance/swaps
- Backlinks: finance/real-options

## Entity: finance/ftap-first-fundamental-theorem
- Title: First Fundamental Theorem (FTAP)
- Category: Pricing
- Language: en
- Key Concepts: Proof idea: sufficiency ($\Leftarrow$), risk-neutral measure, Proof idea: necessity ($\Rightarrow$), Historical note, Pricing a derivative via the martingale measure, fails, arbitrage price, Statement (discrete case), First Fundamental Theorem (FTAP), Construction., Continuous time: NFLVR, The crucial point:, geometric, Theorem (Harrison-Pliska, 1981; Dalang-Morton-Willinger)., Related Articles
- References: finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/apt-ross, finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/capm, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/efficient-market-hypothesis, finance/girsanov-semimartingales, finance/optimal-stopping-american, finance/self-similarity-fractality, finance/semimartingale-models, finance/stefan-problem-american, finance/upper-lower-hedging-prices, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optional-decomposition, risk-neutral-valuation

## Entity: finance/free-boundary-american
- Title: Free Boundary Problem for American Options
- Category: Pricing
- Language: en
- Key Concepts: Problem Formulation, Prerequisites, American constraint, Binomial Tree (CRR), Finite Differences (PDE), Equity options, Related Topics, Mortgage prepayment, Boundary Conditions, Perpetual American Put, Numerical Methods, smooth pasting, The Black-Scholes PDE with Constraint, Early Exercise Premium, Practical Applications
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/longstaff-schwartz, finance/monte-carlo-method
- Backlinks: finance/optimal-stopping-american

## Entity: garman-kohlhagen
- Title: Garman-Kohlhagen Model
- Category: Pricing
- Language: en
- Key Concepts: Put-Call Symmetry in FX, ATM Conventions, Carry trade options, Volatility Smile: Risk Reversals and Butterflies, ATM volatility, Delta Conventions, Garman-Kohlhagen (GK) model, Related Topics, Setup and Assumptions, 25-delta butterfly, Central bank intervention, Pricing Formulas, Emerging market FX, Garman-Kohlhagen Model, Forward Delta
- References: black-scholes, greeks-options, heston-model, option-strategies, put-call-parity
- Backlinks: option-strategies, put-call-parity

## Entity: finance/girsanov-semimartingales
- Title: Girsanov's Theorem for Semimartingales
- Category: Pricing
- Language: en
- Key Concepts: Invariance of $C$, density process, Theorem (Jacod-Mémin)., unchanged, The classical Brownian case, Girsanov's Theorem for Semimartingales, path-wise invariant, Jump part and incompleteness, what exactly, re-intensify, incompleteness, Short formula., Application to Black-Scholes, shifts Brownian motion by a drift, the quadratic variation $C$ is preserved
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/levy-esscher-continuous, finance/semimartingale-models, finance/shannon-entropy, heston-model
- Backlinks: feynman-kac, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/change-of-numeraire, finance/discrete-girsanov-esscher, finance/hjm-framework, finance/levy-esscher-continuous, finance/semimartingale-models, finance/short-rate-models, innovation-process, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/conditional-expectation-sigma, math/contiguity-measures, math/convergence-stochastic-integrals, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, nonlinear-filtering, radon-nikodym, risk-neutral-valuation

## Entity: finance/hjm-framework
- Title: HJM Framework
- Category: Pricing
- Language: en
- Key Concepts: Prerequisites, Practical Limitations, Bond Price Dynamics, Monte Carlo Implementation, Infinite-dimensional state, Negative rates, Short-Rate Models as Special Cases, Related Topics, finite-dimensional Markov process, HJM Framework, Forward Rate Dynamics, Key Result, Heath-Jarrow-Morton (HJM) framework, HJM drift condition, Markovian HJM: Ritchken-Sankarasubramanian
- References: brownian-motion, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps, stochastic-differential-equations

## Entity: finance/heston-model
- Title: Heston Model
- Category: Pricing
- Language: en
- Key Concepts: Heston Model, Prerequisites, Greeks, characteristic function, Negative correlation constraint, Calibration instability, Dynamics (SDEs), Semi-Analytic Pricing via Characteristic Function, Comparison with Black-Scholes, Related Topics, Rough volatility, Volatility Dynamics Visualization, Volatility surface interpolation, Pricing, Jump extensions
- References: black-scholes, finance/particle-filter, finance/sabr-model, garch-models, geometric-brownian-motion
- Backlinks: heston-fourier, heston-model

## Entity: finance/interest-rate-term-structure
- Title: Interest Rate Term Structure
- Category: Pricing
- Language: en
- Key Concepts: Rates and Their Relationships, Derivatives pricing, instantaneous forward rate, Expectations Hypothesis, Market Segmentation, Term Premium Estimation, The Inverted Yield Curve, term structure of interest rates, pure expectations hypothesis, par rate, Monetary policy analysis, bootstrapping, Related Topics, Adrian-Crump-Moench (ACM, 2013), Python Implementation
- References: dv01, finance/bond-options-gaussian, finance/libor-sofr, finance/nelson-siegel-svensson, finance/short-rate-models, finance/swaps
- Backlinks: finance/nelson-siegel-svensson, finance/short-rate-models, multi-curve-framework

## Entity: optional-decomposition
- Title: Kramkov Optional Decomposition
- Category: Pricing
- Language: en
- Key Concepts: Lagrangian duality, Dual, Kramkov Optional Decomposition, the values of these two problems are equal, Doob-Meyer recap, Connection to duality theory, Difference from Doob-Meyer., Related Topics, surely covers, super-hedging duality, self-financing capital, every, universal, Primal, simultaneously under every EMM
- References: finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/complete-incomplete-markets, finance/optimal-stopping-american, finance/upper-lower-hedging-prices, math/backward-sde

## Entity: finance/libor-market-model
- Title: LIBOR Market Model (BGM)
- Category: Pricing
- Language: en
- Key Concepts: Caplet Pricing — Black's Formula, LIBOR Market Model, LIBOR Market Model (BGM), Prerequisites, Forward LIBOR Rates, Volatility and Correlation Parameterization, Black's formula by construction, terminal measure, CMS products, Swaption Pricing — Rebonato's Approximation, Drift under the Terminal Measure, Bermudan swaptions, Related Topics, Comparison with Other Models, Caplet vols
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/monte-carlo-method, finance/swaps, hjm-framework, stochastic-differential-equations

## Entity: lsv-model
- Title: Local Stochastic Volatility (LSV)
- Category: Pricing
- Language: en
- Key Concepts: The LSV Synthesis, Local Stochastic Volatility (LSV), The Calibration Nightmare (Particle Methods), Particle Methods (Monte Carlo with interacting particles), Why Tier-1 Banks Require LSV, Related Topics, The Flaws of Predecessors, Local Leverage Function, Visualization: The Volatility Hierarchy, Stochastic Volatility (SV) e.g., Heston, Local Volatility (LV), Local Volatility (LV) e.g., Dupire, Stochastic Volatility (SV)
- References: finance/dupire-local-vol, heston-model, hmm-particle-filters
- Backlinks: mcmc, path-dependent-volatility

## Entity: finance/levy-esscher-continuous
- Title: Lévy Processes and the Continuous Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: exponentially re-weights, natural canonical choice, Lévy Processes and the Continuous Esscher Transform, implied volatility surface, Esscher measure, continuous-time Esscher transform, Continuous-time Esscher transform, Compound Poisson process, Lévy exponent, time-constant, new, Construction (Gerber-Shiu, 1994)., Lévy financial models, CGMY, Brownian motion
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/fft, finance/girsanov-semimartingales, finance/semimartingale-models, finance/shannon-entropy, geometric-brownian-motion, heston-model
- Backlinks: finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/semimartingale-models, finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/markowitz-mean-variance
- Title: Markowitz Mean-Variance Portfolio Theory
- Category: Pricing
- Language: en
- Key Concepts: Modern extensions:, maximum-Sharpe portfolio, Markowitz problem:, Hierarchical Risk Parity (López de Prado, 2016), Efficient frontier, Capital Market Line (CML), Markowitz Mean-Variance Portfolio Theory, Sharpe ratio, Static., Gaussianity., a rational investor should jointly optimize expected return and risk, heart, Historical role, mathematical discipline, Robust optimization
- References: bayesian-black-litterman, convex-optimization-trading, cornish-fisher-cvar, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/stylized-facts-returns
- Backlinks: convex-analysis, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/stylized-facts-returns, information-geometry-finance, math/law-of-large-numbers, nonlinear-shrinkage, stochastic-control

## Entity: martingale-optimal-transport
- Title: Martingale Optimal Transport
- Category: Pricing
- Language: en
- Key Concepts: Related Topics, Martingale, Martingale Optimal Transport (MOT), model-free, Dual Problem (Super-Replication), Connection to Optimal Transport, Primal Problem, The Setup: Model-Free Pricing, The Primal and Dual Problems, Visualization: Sand vs. Martingale Sand, Martingale Optimal Transport, Why Citadel and Tier-1 Banks Use It
- References: convex-optimization-trading, convexity, martingale, optimal-transport, risk-neutral-valuation
- Backlinks: convexity, martingale

## Entity: finance/nelson-siegel-svensson
- Title: Nelson-Siegel-Svensson Yield Curve Model
- Category: Pricing
- Language: en
- Key Concepts: Duration management, Example, Uses, Related Articles, Bond pricing, Nelson-Siegel (1987), XVA, Nelson-Siegel-Svensson (NSS), Svensson Extension (1994), Calibration, Typical Curve Shapes, Nelson-Siegel-Svensson Yield Curve Model, Instantaneous Forward Rate, Central bank publication
- References: black-scholes, finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/oas, finance/swaps, finance/xva, heston-model
- Backlinks: finance/bootstrapping-yield-curve, finance/cir-hull-white, finance/interest-rate-term-structure, finance/libor-sofr

## Entity: numeraire-invariant-hedging
- Title: Numeraire-Invariant Quadratic Hedging
- Category: Pricing
- Language: en
- Key Concepts: Transaction costs, Numeraire invariance, Deep hedging, Background and Motivation, Galtchouk-Kunita-Watanabe (GKW) Decomposition, Related Topics, Model dependency, Quadratic Hedging, Numeraire-Invariant Quadratic Hedging, Limitations and Extensions, Decomposition additivity, Optimality, Key Properties, Variance-Optimal Martingale Measure (VOMM), Advanced Context
- References: black-scholes, finance/hierarchical-risk-parity, finance/levy-processes, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/follmer-schweizer

## Entity: optimal-execution
- Title: Optimal Execution: Almgren-Chriss
- Category: Pricing
- Language: en
- Key Concepts: Risk-Averse ($\lambda \to \infty$), Almgren-Chriss model, Permanent Impact, Deep RL Execution, Risk-Neutral ($\lambda \to 0$), Related Topics, Temporary Impact, Dark Pools, Exponential Decay, Price Risk (Volatility), The Solution: The Efficient Frontier, The Fundamental Trade-off, Modern Extensions, Price Risk, Market Impact
- References: deep-rl-execution, stochastic-control, vpin
- Backlinks: ai-market-making, amihud-illiquidity, amm-mechanics, avellaneda-stoikov, cross-impact, deep-rl-execution, finance/dark-pools, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/vwap-twap, futures-hedging, kyle-model, liquidation-signals, lob-prediction, market-impact, market-microstructure, path-integral-control, reinforcement-learning, rl-trader, stochastic-control, vpin

## Entity: finance/optimal-stopping-american
- Title: Optimal Stopping and American Options
- Category: Pricing
- Language: en
- Key Concepts: Claim 1., Connection to PDE: the Stefan problem, stopping time, strictly more expensive, The payoff, The Snell envelope, Optimal Stopping and American Options, Hedging an American option, continuous, free boundary, at any time, Proof (sketch)., optimal stopping problem, Related Articles, at every time
- References: black-scholes, finance/crr-model, finance/free-boundary-american, finance/ftap-first-fundamental-theorem, finance/stefan-problem-american, finance/upper-lower-hedging-prices, optional-decomposition
- Backlinks: feynman-kac, finance/crr-model, finance/energy-commodity-derivatives, finance/real-options, finance/stefan-problem-american, math/discrete-martingales, math/optimal-stopping-markov, numerical-pde-finance, optional-decomposition, stochastic-control

## Entity: greeks-options
- Title: Option Greeks
- Category: Pricing
- Language: en
- Key Concepts: Gamma, Transaction costs, Gamma scalping, Greeks, Pin risk, Gamma-Theta Tradeoff and Delta Hedging, Smile effects, Option Greeks, Vega Hedging, Related Topics, Theta, Greeks for Exotic Options, Barrier options, Discrete hedging, Higher-Order Greeks
- References: black-scholes, dv01, exotic-options, finance/delta-hedging-practice, geometric-brownian-motion, heston-model, option-strategies, put-call-parity
- Backlinks: finance/delta-hedging-practice, finance/variance-swaps-vix, frtb-sa-mr, garman-kohlhagen, option-strategies, put-call-parity, volatility-smile

## Entity: option-strategies
- Title: Option Strategies
- Category: Pricing
- Language: en
- Key Concepts: Calendar (Time) Spreads, Greeks, Ratio Spreads, Early exercise, Straddle, Max profit, Related Topics, Payoff Diagram: Bull Call Spread, Butterfly Spread, Iron Condor, Risk Reversal, Vertical Spreads, Bear Put Spread, Liquidity, diagonal spread
- References: black-scholes, garman-kohlhagen, greeks-options, heston-model, put-call-parity
- Backlinks: finance/delta-hedging-practice, garman-kohlhagen, greeks-options, put-call-parity

## Entity: pairs-trading
- Title: Pairs Trading Strategy
- Category: Pricing
- Language: en
- Key Concepts: Non-stationary hedge ratio, Win rate, cointegration breakdown, Risk: Cointegration Breakdown and Crowding, Python: Full Pairs Trading Backtest Pipeline, expected return per trade, Engle-Granger Two-Step Test, Borrow costs, Holding period, Related Topics, Kalman filter, Hedge Ratio ($\beta$), Johansen Test, Background and History, cointegrated
- References: finance/cointegration, finance/monte-carlo-method, finance/particle-filter, finance/value-at-risk, mcmc, ornstein-uhlenbeck-process
- Backlinks: fastest-mean-reversion, fractional-cointegration, ornstein-uhlenbeck-process, pca-statarb, vine-copulas

## Entity: path-dependent-volatility
- Title: Path-Dependent Volatility
- Category: Pricing
- Language: en
- Key Concepts: realized path, Interacting Particle System, Moving Average, 4. Connection to Signature-based Models, Related Topics, path-dependent exotic options, Visualization: Path-Memory effect, 2. Models of Julien Guyon, Julien Guyon, Advantage, Path-Dependent Volatility (PDV), McKean-Vlasov, Running Maximum, Path Signatures, Path-Dependent Volatility: Beyond Local Volatility
- References: hmm-particle-filters, lsv-model, neural-sdes-finance, rough-paths, signature-based-models
- Backlinks: signature-based-models

## Entity: put-call-parity
- Title: Put-Call Parity
- Category: Pricing
- Language: en
- Key Concepts: Put-Call Parity, Put-call parity, Portfolio A, Case 1, Connection to Greeks, Implied dividends, Synthetic Positions, Related Topics, Dividend extraction, Extracting Market Information, The Core Identity, Arbitrage from Violations, Model validation, Conversion/reversal arbitrage, Forward Version
- References: black-scholes, finance/bs-market-self-financing, garman-kohlhagen, greeks-options, option-strategies
- Backlinks: garman-kohlhagen, greeks-options, option-strategies

## Entity: finance/follmer-schweizer
- Title: Quadratic Hedging and the Föllmer-Schweizer Approach
- Category: Pricing
- Language: en
- Key Concepts: Föllmer-Schweizer Decomposition, Minimal Martingale Measure (MMM), Jumps, Key property, Discrete trading, Minimal Martingale Measure, Discrete Approximation, incomplete markets, Cost process, variance-optimal martingale measure, Quadratic Hedging and the Föllmer-Schweizer Approach, Mean-Variance Hedging, Quadratic hedging, Methods Comparison, Related Articles
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, heston-model, numeraire-invariant-hedging
- Backlinks: finance/complete-incomplete-markets, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: quantum-amplitude-estimation
- Title: Quantum Amplitude Estimation (QAE)
- Category: Pricing
- Language: en
- Key Concepts: Payoff Encoding, How QAE Works, State Preparation, Near-Term Implementation (NISQ), Related Topics, Iterative QAE (IQAE), quadratic speedup, The Quadratic Speedup, Quantum Phase Estimation, Maximum Likelihood QAE (ML-QAE), Monte Carlo (MC) Simulation, 1,000 times, Quantum Amplitude Estimation (QAE) in Finance, Visualization: Convergence Speed, Grover Operator ($\mathcal{Q}$)
- References: finance/monte-carlo-method, finance/xva, quantum-math
- Backlinks: quantum-math

## Entity: finance/real-options
- Title: Real Options
- Category: Pricing
- Language: en
- Key Concepts: Binomial trees, Spanning assumption, Prerequisites, Least-squares Monte Carlo, Option to defer, substantial premium, Suboptimal exercise, Pricing Framework, Hysteresis: Entry and Exit, M&A, Types of Real Options, Criticisms and Limitations, hysteresis, Option to switch, option to invest later
- References: black-scholes, brownian-motion, finance/energy-commodity-derivatives, finance/optimal-stopping-american, finance/swaps, heston-model
- Backlinks: finance/energy-commodity-derivatives

## Entity: risk-neutral-valuation
- Title: Risk-Neutral Valuation
- Category: Pricing
- Language: en
- Key Concepts: Connection to Girsanov's Theorem, complete, The Replication Argument, unique, Related Topics, not unique, The Central Formula, Fundamental Theorems of Asset Pricing, Second Fundamental Theorem., computational device, Applications, risk-neutral, Credit derivatives, First Fundamental Theorem., Interest rate derivatives
- References: black-scholes, blacks-model, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/monte-carlo-method, finance/shannon-entropy, finance/swaps, finance/xva, geometric-brownian-motion, heston-model, math/doleans-dade-exponential, partial-differential-equations
- Backlinks: cost-of-carry, feynman-kac, martingale, martingale-optimal-transport, stochastic-processes

## Entity: finance/sabr-model
- Title: SABR Model
- Category: Pricing
- Language: en
- Key Concepts: Real-time risk, Stochastic Interest Rates (SABR-LMM), Stochastic Differential Equations, Approximation breaks down, Swaption vol cube, Prerequisites, Negative rates, CMS products, Hagan's Asymptotic Implied Volatility Formula, Calibration instability, SABR-LV, Smile dynamics, Related Topics, Normal SABR, Python Implementation
- References: black-scholes, finance/asymptotic-expansion-finance, finance/oas, finance/swaps, heston-model, volatility-forecasting
- Backlinks: black-scholes, blacks-model, finance/asymptotic-expansion-finance, finance/caps-floors-swaptions, finance/dispersion-trading, finance/dupire-local-vol, finance/heston-model, finance/oas, finance/rough-volatility, finance/swaps, finance/volatility-surface, hyperbolic-vol-geometry, volatility-smile

## Entity: finance/semimartingale-models
- Title: Semimartingale Models and Predictable Characteristics
- Category: Pricing
- Language: en
- Key Concepts: Predictable characteristic triplet, [[geometric-brownian-motion|GBM]], predictable triplet, minimal, Triplet examples, Connection to Girsanov, continuous-time analogue of [[ftap-first-fundamental-theorem|FTAP]], not unique, special, Theorem (NFLVR-FTAP)., Why this matters, semimartingales, [[brownian-motion|Brownian motion]], Semimartingale market models, Semimartingale Models and Predictable Characteristics
- References: brownian-motion, cox-process, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/hawkes-process, finance/levy-esscher-continuous, geometric-brownian-motion, heston-model
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, math/triangular-arrays-processes, optional-decomposition

## Entity: finance/black-scholes-derivations
- Title: Several Derivations of the Black-Scholes Formula
- Category: Pricing
- Language: en
- Key Concepts: What this shows:, PDE derivation, Equivalence of derivations, Idea (original, 1973)., that, deterministic, constant, Martingale, replicable, pedagogically transparent, limit of elementary computations, Binomial, classical heat equation, Derivation 3: Binomial limit (CRR), same assumptions
- References: black-scholes, finance/bachelier-formula, finance/crr-model, finance/dupire-local-vol, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american, geometric-brownian-motion, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/free-boundary-american, finance/stefan-problem-american, math/optimal-stopping-markov

## Entity: finance/short-rate-models
- Title: Short Rate Models
- Category: Pricing
- Language: en
- Key Concepts: Prerequisites, Connection to HJM, Short rate models, G2++ model, Black-Derman-Toy (BDT, 1990), Multi-Factor Extensions, Equilibrium Models, Vasicek (1977), Lattice Methods, Comparison, affine, Vasicek:, Short Rate Models, Every short rate model implies an HJM model, No-Arbitrage Models
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/girsanov-semimartingales, finance/interest-rate-term-structure, finance/swaps, stochastic-differential-equations
- Backlinks: finance/caps-floors-swaptions, finance/change-of-numeraire, finance/hjm-framework, finance/interest-rate-term-structure

## Entity: finance/stefan-problem-american
- Title: Stefan Problem and American Options
- Category: Pricing
- Language: en
- Key Concepts: Exercise region, [[crr-model|CRR binomial tree with early-exercise check]]., Structure of the Stefan problem, Free-boundary analytics, Setup for the American put, smooth pasting condition, Stefan Problem and American Options, Numerical methods, Integral equations for $S^*(t)$., American call: the trivial case, free boundary, Equivalence to the optimal-stopping formulation, Holding region, PDE form, option price
- References: black-scholes, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/black-scholes-derivations, finance/bond-options-gaussian, finance/optimal-stopping-american

## Entity: svi-model
- Title: Stochastic Volatility Inspired (SVI) Model
- Category: Pricing
- Language: en
- Key Concepts: Eliminating Arbitrage, Visualization: The Hyperbolic Smile, Related Topics, Surface SVI (SSVI), $\sigma > 0$, Stochastic Volatility Inspired (SVI) Model, Why Parameterize the Surface?, Butterfly Arbitrage, Calendar Arbitrage, $a$, Stochastic Volatility Inspired (SVI), $b$, The Raw SVI Formula, SSVI: Surface SVI, $m$
- References: black-scholes, finance/variance-gamma, heston-model

## Entity: finance/swaps
- Title: Types of Swaps
- Category: Pricing
- Language: en
- Key Concepts: Mark-to-Market and DV01, Basis risk, Types of Swaps, PV01, Negative rates, Relative value trading, Model risk for exotics, Equity Swap, Related Topics, Hedge fund leverage, Python Implementation, Convexity, Asset-liability management, Limitations and Extensions, Regulatory capital
- References: black-scholes, copula-models, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/sabr-model, finance/xva
- Backlinks: blacks-model, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/cir-hull-white, finance/energy-commodity-derivatives, finance/hjm-framework, finance/interest-rate-term-structure, finance/isda-simm, finance/libor-market-model, finance/libor-sofr, finance/nelson-siegel-svensson, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/xva, futures-hedging, risk-neutral-valuation

## Entity: finance/upper-lower-hedging-prices
- Title: Upper and Lower Hedging Prices
- Category: Pricing
- Language: en
- Key Concepts: below, Interval of consistent prices, interval, utility indifference pricing, Upper and Lower Hedging Prices, Definitions, independent, surely, Attainability and exact replication, lower price, does, Dual characterization, Theorem (price trichotomy)., Connection to risk aversion, supremum
- References: finance/barrier-asian-options, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, heston-model, optional-decomposition
- Backlinks: finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, optional-decomposition

## Entity: finance/variance-swaps
- Title: Variance Swaps and Volatility Risk Premium
- Category: Pricing
- Language: en
- Key Concepts: Volatility Risk Premium, Variance Swaps and Volatility Risk Premium, Var Swap vs Vol Swap vs VIX Futures, Implementation, variance swap, Carr-Madan Model-Free Replication, Payoff, Related Articles
- References: finance/bipower-variation, finance/dupire-local-vol, heston-model, volatility-forecasting
- Backlinks: finance/dispersion-trading, finance/dupire-local-vol, finance/variance-swaps-vix, finance/volatility-surface

## Entity: volatility-smile
- Title: Volatility Smile
- Category: Pricing
- Language: en
- Key Concepts: Negative skewness, Commodity options, SVI, Historical Origin: The 1987 Crash, Equity markets, Equity options, Definition and Empirical Observation, 1. Stochastic Volatility ([[heston-model|Heston Model]]), Information content, crash risk, Negative skew, FX options, Skew Metrics: Risk Reversal, Sticky delta, Stochastic volatility
- References: black-scholes, finance/dupire-local-vol, finance/rough-volatility, finance/sabr-model, finance/volatility-surface, greeks-options, heston-model, merton-jump-diffusion
- Backlinks: volatility-arbitrage

## Entity: finance/volatility-surface
- Title: Volatility Surface
- Category: Pricing
- Language: en
- Key Concepts: implied volatility surface, Prerequisites, fatter tails, skewness, Lee's moment formula, Connection to Risk-Neutral Density: Breeden-Litzenberger, The Smile and Skew, Term Structure of Skew, Stochastic Volatility Inspired, No-Arbitrage Constraints, SVI Parameterization (Gatheral), Sticky delta, Volatility Surface, flattens with maturity, Practical Calibration Workflow
- References: black-scholes, finance/dupire-local-vol, finance/sabr-model, finance/variance-swaps, geometric-brownian-motion, heston-model
- Backlinks: blacks-model, finance/delta-hedging-practice, finance/variance-swaps-vix, neural-sdes-finance, volatility-smile

## Entity: algorithmic-execution-twap-vwap
- Title: Algorithmic Execution: TWAP, VWAP & Almgren-Chriss
- Category: Pricing & Execution
- Language: en
- Key Concepts: See Also, Market Impact, TWAP:, Timing Risk, VWAP:, 2. Almgren-Chriss Model, 1. TWAP & VWAP Strategies, Algorithmic Execution: TWAP, VWAP & Almgren-Chriss
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
- Key Concepts: Interest Rate Derivatives: Swaps & SOFR, See Also
- References: course-quant-trading, fixed-income-quant-rates-and-yield-curve, option-greeks-and-volatility

## Entity: monte-carlo-option-pricing-and-variance-reduction
- Title: Monte Carlo Option Pricing & Variance Reduction
- Category: Pricing & Execution
- Language: en
- Key Concepts: 1. Monte Carlo Framework, See Also, Monte Carlo Option Pricing & Variance Reduction, 2. Variance Reduction
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
- Key Concepts: Beta Function, Overview, Gamma Function

## Entity: projects/j-cole-fall-off
- Title: J. Cole — The Fall Off Review
- Category: Projects
- Language: en
- Key Concepts: Framer Motion, Brutalism, Vite, Kinetic typography, J. Cole — The Fall Off Review, brutalist, kinetic typography, Stack, The Idea, React 19, Design Language, Status, TypeScript

## Entity: projects/llm-wiki
- Title: LLM-Wiki
- Category: Projects
- Language: en
- Key Concepts: Knowledge Garden, Rendering, Sources, The human, files the finding back into the vault, Content, Bilingual, Ingest, Why this works, Why not [[rag]], Three layers, Query, compounding artifact, Stack, The schema
- References: llm, rag

## Entity: projects/music-results-2025
- Title: Music Results 2025
- Category: Projects
- Language: en
- Key Concepts: Albums, A personal year-in-music archive, GitHub Pages, Editorial brutalism, Foreign, Plain HTML, Statistics, Structure, Discoveries, Stack, The Idea, Artists, Inline CSS + styles.css, Music Results 2025, Status

## Entity: projects/nyquist
- Title: Nyquist
- Category: Projects
- Language: en
- Key Concepts: Development, Technology, Compute, The Problem, Derivatives Pricing, Macro, Fixed Income, Asset managers, Async data architecture., Frontend, Backend, C++ core., Central banks and regulators, What It Can Do, Portfolio & Risk

## Entity: projects/ultima-thule
- Title: Ultima Thule
- Category: Projects
- Language: en
- Key Concepts: Development, Offline navigation rerouting., The Problem, The Dynamic Island contract., Bucket List & POI Discovery, External data, Sync & Auth, Dashboard, Persistence, All API keys are server-side., @State Trip? goes stale., What It Can Do, Dynamic Island Live Activity, Memory Book, AI Trip Generator

## Entity: projects/samizdat
- Title: Кто живёт в панельке Хаски?
- Category: Projects
- Language: en
- Key Concepts: Random rotations:, Imprint, Materials, Tailwind 4, Motion, Vite, Brutal shadows:, Design Language, Typography:, React 19 + TypeScript, GitHub Pages, Palette:, Quotes, Stack, The Idea

## Entity: quant-trading-interview-roadmap
- Title: 30-Day Quant Trading Interview Roadmap
- Category: Quant Trading
- Language: en
- Key Concepts: Days 16–22:, Days 23–27:, See Also, 30-Day Quant Trading Interview Preparation Roadmap, Days 1–7:, Days 28–30:, Weekly Roadmap, Days 8–15:
- References: course-quant-trading, quant-brainteasers-handbook, quant-interview-cheat-sheet
- Backlinks: quant-firm-interview-playbooks, quant-mental-math-tricks-handbook, quant-trading-interview-qna

## Entity: quant-firm-interview-math-brainteasers
- Title: Advanced Quant Interview Math Brainteasers
- Category: Quant Trading
- Language: en
- Key Concepts: Advanced Quant Interview Math Brainteasers, See Also
- References: course-quant-trading, quant-brainteasers-handbook, quant-interview-cheat-sheet

## Entity: quant-coding-interview-leetcode-patterns
- Title: Quant Coding Interview LeetCode Patterns
- Category: Quant Trading
- Language: en
- Key Concepts: Quant Coding Interview LeetCode Patterns, See Also
- References: course-quant-trading, quant-firm-interview-playbooks, quant-interview-cheat-sheet

## Entity: quant-firm-interview-playbooks
- Title: Quant Firm Interview Playbooks
- Category: Quant Trading
- Language: en
- Key Concepts: Quant Firm Interview Playbooks: Top 8 Firms, See Also
- References: course-quant-trading, quant-interview-cheat-sheet, quant-trading-interview-roadmap
- Backlinks: quant-coding-interview-leetcode-patterns

## Entity: quant-interview-cheat-sheet
- Title: Quant Interview Cheat Sheet
- Category: Quant Trading
- Language: en
- Key Concepts: Quant Interview Cheat Sheet: Formulas, Distributions & Shortcuts, See Also, Dice stopping adjustment:, Coupon Collector:, Geometric $Geom(p)$:, Kelly Criterion:, 1. Key Probability Formulas, Put-Call Parity:
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
- Key Concepts: 2.2 Internship Structure, 1.4.7 "If You Make a Small Mistake, You Could Lose Your Job", 2.3 Firm Profiles, Glassdoor & WallStreetOasis, Confidence Intervals:, Hedging:, A Collection of Dice Problems, Flow Traders:, Communication:, Section 4. Complete Problem Repository & Hints, 4.3 STRATEGY GAME PROBLEMS (10 Problems), Fermi problems:, 3.2 Problem Categories, Correlated Skills:, 1.2 What Does a Quant Trader Do?
- Backlinks: algorithmic-execution-twap-vwap, convex-optimization-in-trading, copula-models-and-tail-dependence, credit-risk-modeling-and-structural-models, crypto-quant-trading-and-amm-curves, cryptographic-zero-knowledge-in-finance, deep-reinforcement-learning-for-trading, exotic-options-and-structured-products, factor-investing-and-fama-french, fixed-income-quant-rates-and-yield-curve, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-stat-arb-lead-lag, high-frequency-trading-and-orderbook, interest-rate-derivatives-swaps-caps-floors, limit-order-book-matching-engine-design, machine-learning-for-quant-trading, market-impact-models-square-root-law, market-microstructure-noise-and-realized-volatility, monte-carlo-option-pricing-and-variance-reduction, optimal-stopping-american-options, optimal-stopping-and-kelly, option-greeks-and-volatility, order-book-dynamics-and-lOB-modeling, portfolio-optimization-and-black-litterman, portfolio-risk-decomposition-marginal-var, quant-brainteasers-handbook, quant-coding-interview-leetcode-patterns, quant-firm-interview-math-brainteasers, quant-firm-interview-playbooks, quant-interview-cheat-sheet, quant-market-making-mechanics, quant-mental-math-tricks-handbook, quant-risk-management-var-cvar, quant-trader-mental-math-rapid-trainer, quant-trading-interview-qna, quant-trading-interview-roadmap, stat-tests-for-trading-strategies, statistical-arbitrage-and-pairs-trading, stochastic-calculus-and-ito-lemma, stochastic-volatility-heston-model, systematic-alpha-research-and-backtesting, volatility-surface-sabr-model, volatility-trading-and-variance-swaps

## Entity: information-geometry-finance
- Title: Information Geometry in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: Information Geometry in Finance, Information Geometry, Related Topics, Regime Shifts, Information-Geometric Portfolio Optimization, Application: Distance Between Market Regimes, Connection to [[shannon-entropy|Entropy]], The Statistical [[manifold-learning|Manifold]], Fisher Information Metric (FIM), Riemannian [[manifold-learning|Manifold]], Application: Portfolio Optimization, Visualization: Curved Probability Space
- References: entropy-pooling, finance/fisher-transform, finance/markowitz-mean-variance, finance/shannon-entropy, manifold, manifold-learning
- Backlinks: f-divergences, mle

## Entity: path-integral-control
- Title: Path Integral Control in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: Path Integral Control (Path Integral Differential Dynamic Programming - PI-DDP), Related Topics, High-Dimensional Execution, The Quantum Physics Connection, Maximum [[shannon-entropy|Entropy]] RL, Soft Actor-Critic (SAC), Softmax (or Boltzmann) weighted average, Visualization: The Path Integral, Reinforcement Learning, Path Integral Control in Finance, Feynman-Kac Theorem, Applications in High-Frequency Trading, linear Schrödinger-type PDE, The Mathematical Breakthrough
- References: finance/shannon-entropy, merton-portfolio, optimal-execution, quantum-math, reinforcement-learning, stochastic-control

## Entity: quantum-phase-estimation
- Title: Quantum Phase Estimation & Shor's Algorithm
- Category: Quantum
- Language: en
- Key Concepts: Controlled Unitaries, Quantum Phase Estimation & Shor's Algorithm, Quantum Phase Estimation, Shor's Algorithm, Initialization, Quantum Fourier Transform (QFT), Inverse QFT
- References: math/spectral-theory-operators

## Entity: effective-field-theory
- Title: Effective Field Theory (EFT)
- Category: Quantum Physics
- Language: en
- Key Concepts: Related topics, Core idea, Chiral perturbation theory, Naturalness, Renormalisation, General relativity, Examples, Why it matters, Predictive power without a UV theory, Fermi theory of weak interactions, NRQED / NRQCD, Effective Field Theory (EFT)
- References: fine-tuning, renormalization-group
- Backlinks: quantum-mechanics

## Entity: many-body-tensor-networks
- Title: Many-Body Problem and Tensor Networks
- Category: Quantum Physics
- Language: en
- Key Concepts: surface area, [[llm]] Compression, A. Matrix Product States (MPS), Many-Body Problem and Tensor Networks, Quantum Machine Learning, Related Topics, 1. The Exponential Explosion, 2. Theoretical Foundation: The Area Law, Low-Entanglement [[differential-geometry|Manifold]], Discrete Spacetime, 3. Tensor Network Architectures, Hastings' Area Law Theorem (2007), Bond Dimension ($\chi$), MERA (Multi-scale Entanglement Renormalization Ansatz), 300 qubits
- References: llm, math/differential-geometry, quantum-information-entropy, renormalization-group, transformer-architecture
- Backlinks: tensor-decompositions

## Entity: quantum-information-entropy
- Title: Quantum Information and Entropy
- Category: Quantum Physics
- Language: en
- Key Concepts: Quantum Teleportation, reversible, 1 bit, Holography, 5. The Thermodynamics of Information, Strong Subadditivity, Concavity, Von Neumann [[gravitational-entropy|Entropy]], Data Processing Inequality, Related Topics, Pure States, Holevo's Bound, Thermodynamics, 2. Von Neumann [[gravitational-entropy|Entropy]] ($S$), Quantum Mechanics
- References: ads-cft-deep, black-hole-thermodynamics, finance/shannon-entropy, gravitational-entropy, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ads-cft-deep, gff, linear-spaces-basis, many-body-tensor-networks, quantum-math, quantum-mechanics, topological-phases

## Entity: quantum-mechanics
- Title: Quantum Mechanics
- Category: Quantum Physics
- Language: en
- Key Concepts: MRI, Key Principles, The Wave Function, Semiconductors, Mathematical Formalism, Related Topics, Copenhagen Interpretation, Operators and Observables, Superposition, Quantum Mechanics, Applications, Uncertainty Principle, Born's Rule, Interpretation of Quantum Mechanics, Many-Worlds Interpretation
- References: effective-field-theory, math/spectral-theory-operators, qft-basic, quantum-entanglement, quantum-information-entropy, schrodinger-equation
- Backlinks: math/functional-analysis

## Entity: topological-phases
- Title: Topological Phases of Matter
- Category: Quantum Physics
- Language: en
- Key Concepts: immune to local noise, Matrix Rotation, perfectly conducting states on its Edge, Topological Quantum Computing, Chern Number, Symmetry Breaking, Visualization: The One-Way Street, Related Topics, Braiding, Topological Phases, Topological Photonic Crystals, Conductance as Topology, Bulk, 3. The Bulk-Boundary Correspondence, Berry Phase
- References: gauge-theory-yang-mills, math/topology-basics, quantum-information-entropy

## Entity: finance/adversarial-stress-testing
- Title: Adversarial Stress Testing
- Category: Risk
- Language: en
- Key Concepts: Stress Loss Comparison, Prerequisites, Sequential adversarial testing, GAN-Based Scenario Generation, Conditional adversarial testing, Concentrated Position Management, Related Topics, Regulatory Compliance, Stationarity assumption, Python Implementation, Convexity, Plausibility constraint, Portfolio Robustness Testing, Generator, Model Validation
- References: attention-mechanisms, convex-optimization-trading, copula-models, extreme-value-theory, finance/gan, finance/monte-carlo-method, finance/value-at-risk
- Backlinks: finance/nash-equilibrium, generative-scenario-models

## Entity: amihud-illiquidity
- Title: Amihud Illiquidity Ratio
- Category: Risk
- Language: en
- Key Concepts: Amihud Ratio vs Market Stress, Intraday aggregation, Seasonality, Transaction Cost Estimation, liquidity innovation, Amihud Illiquidity Ratio, Pastor-Stambaugh (2003) liquidity factor, Risk Management, Related Topics, Price impact for a trade of size $Q$ dollars:, Python Implementation, Non-stationarity, Academic Factor Research, Amihud illiquidity ratio, Signed vs. unsigned impact
- References: finance/levy-processes, finance/market-impact-scaling, finance/value-at-risk, optimal-execution, volatility-forecasting
- Backlinks: finance/kyle-lambda, roll-model

## Entity: bayesian-black-litterman
- Title: Bayesian Black-Litterman Portfolio Optimization
- Category: Risk
- Language: en
- Key Concepts: Prerequisites, Subjective Investor Views, Global Asset Allocation, Equity Long/Short, View Confidence via the Idzorek Method, Equilibrium Market Prior, Sensitivity to $\tau$, ESG Integration, Diversification, View consistency, Related Topics, Python Implementation, Step 2: Investor Views, Factor-based views, Step 4: Portfolio Optimization
- References: black-scholes, convex-optimization-trading, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: alpha-factor-discovery, bayesian-inference, convex-optimization-trading, entropy-pooling, finance/markowitz-mean-variance

## Entity: finance/black-swan-scenarios
- Title: Black Swan Scenario Generator
- Category: Risk
- Language: en
- Key Concepts: Peaks Over Threshold (POT), Back-test, Black Swan Scenario Generator, 3. Narrative Hypothetical Scenarios, Use stressed correlations, black swan scenario generator, Best Practices, Scenario Report Template, Refresh EVT parameters, Critical error, Generalised Pareto Distribution (GPD), Never rely solely on VaR, Three Scenario Sources, Generalised Extreme Value (GEV), Extreme Value Theory (EVT)
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/systemic-contagion-debtrank, finance/value-at-risk
- Backlinks: lln-clt

## Entity: finance/cdo-tranches
- Title: CDO Tranches
- Category: Risk
- Language: en
- Key Concepts: Alternative Models, zero tail dependence, Super-senior, Correlation and Pricing, Issuance, Related Topics, Remainder, Tranche Structure, Python Implementation, Collateralized Debt Obligation (CDO), Funding, Cash CDOs vs. Synthetic CDOs, Liquidity, Prepayment risk, Model risk is existential
- References: copula-models, finance/coherent-risk-measures, finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization, finance/value-at-risk
- Backlinks: finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization

## Entity: cs01
- Title: CS01 (Credit Spread 01)
- Category: Risk
- Language: en
- Key Concepts: Risk Limits, Basis risk, CDS CS01 (Risky PV01), Non-linearity for distressed credit, CS01 (Credit Spread 01), Bond CS01 via Duration, CS01, spread duration, Risky PV01, Curve shape assumption, Regulatory Capital, DVCS, positive number representing dollar loss per 1 bp spread widening, spread convexity, Related Topics
- References: copula-models, cox-process, dv01, finance/swaps, finance/xva
- Backlinks: cox-process, dv01, finance/swaps, finance/xva

## Entity: cva-wrong-way-risk
- Title: CVA and Wrong-Way Risk
- Category: Risk
- Language: en
- Key Concepts: positively correlated, Right-Way Risk, Related Topics, Modeling WWR, Jump-to-Default Models, Wrong-Way Risk, Stochastic Correlation, Credit Valuation Adjustment (CVA) and Wrong-Way Risk, Oil Example, Wrong-Way Risk (WWR), Visualization: WWR Exposure Spike, FRTB and WWR, Copulas, Example, expected loss
- References: copula-models, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: network-risk-cascades

## Entity: finance/market-impact-scaling
- Title: Capacity & Market Impact Scaling
- Category: Risk
- Language: en
- Key Concepts: Intraday volume profile, Square Root Law of Impact, Market Impact Scaling, Scaling Laws, Cross-impact, Strategy Capacity Formula, Background and Motivation, Related Topics, Execution Optimization, Fund Sizing, Strategy Selection, Capacity Estimation, Python: Full Capacity Frontier, Limitations and Extensions, Non-stationarity of ADV
- References: avellaneda-stoikov, finance/monte-carlo-method, lob-prediction, optimal-execution
- Backlinks: amihud-illiquidity, deep-rl-execution, finance/nash-equilibrium, lob-prediction

## Entity: finance/coherent-risk-measures
- Title: Coherent Risk Measures
- Category: Risk
- Language: en
- Key Concepts: Tail VaR, 97.5% Expected Shortfall, Elicitability and backtesting, elicitable, 2. Translation invariance., 4. Subadditivity., Conditional VaR, jointly elicitable, Basel II, Coherent Risk Measures, shape of the tail, Value at Risk, Kusuoka representation, dual (robust) representation, ES is not elicitable
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, math/law-of-large-numbers
- Backlinks: extreme-value-theory, finance/cdo-tranches, finance/credit-derivatives-cds, frtb-es

## Entity: cornish-fisher-cvar
- Title: Cornish-Fisher CVaR
- Category: Risk
- Language: en
- Key Concepts: Consistency with normal case, Validity Conditions, Prerequisites, Accuracy breaks down at extremes, [[extreme-value-theory]], Ignores serial correlation, Four-moment summary, Hedge Fund Risk Reporting, Modified VaR, Related Topics, Python Implementation, UCITS KIID, Normal vs Modified VaR by Confidence Level, Cornish-Fisher CVaR, Cornish-Fisher adjusted z-score
- References: copula-models, extreme-value-theory, finance/levy-processes, finance/value-at-risk, mcmc, volatility-forecasting
- Backlinks: finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/hyperbolic-distributions, finance/isda-simm, finance/markowitz-mean-variance, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, math/large-deviations-cramer

## Entity: finance/credit-derivatives-cds
- Title: Credit Default Swaps
- Category: Risk
- Language: en
- Key Concepts: Bootstrapping Hazard Rates, CDS Spread Term Structure, Mark-to-Market of an Existing CDS, cash settlement, premium leg, The Big Bang Protocol (2009), Pricing Framework, CDS spread, physical delivery, Related Topics, CVA hedging, Relative value, Credit Default Swaps, Python Implementation, Pricing
- References: copula-models, finance/cdo-tranches, finance/coherent-risk-measures, finance/credit-risk-models, finance/value-at-risk, finance/xva
- Backlinks: finance/cdo-tranches, finance/credit-migration, finance/credit-risk-models, finance/securitization

## Entity: finance/credit-migration
- Title: Credit Migration and Rating Transitions
- Category: Risk
- Language: en
- Key Concepts: Asset Value Model, Estimation Methods, CreditMetrics Framework, generator matrix, IFRS 9 Staging Application, Related Topics, Python Implementation, CreditMetrics, momentum, Point-in-time (PIT), Credit Migration and Rating Transitions, Continuous-Time Generator Matrix, drift, Discrete-Time Matrix, Through-the-Cycle vs Point-in-Time
- References: copula-models, finance/credit-derivatives-cds, finance/value-at-risk, hidden-markov-models, survival-risk-prediction
- Backlinks: finance/credit-risk-models

## Entity: finance/credit-risk-models
- Title: Credit Risk Models
- Category: Risk
- Language: en
- Key Concepts: Credit Risk Models, rating transitions, Default trigger, Structural models, Expected Default Frequency (EDF), state-dependent intensity, Related Topics, distance to default (DD), CreditMetrics (JP Morgan, 1997), Comparison, Python Implementation, Credit Migration Models, Default Probability Term Structure, Use case, Distance to Default
- References: black-scholes, copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-migration, finance/value-at-risk, finance/xva, gnn-credit-risk, survival-risk-prediction
- Backlinks: finance/cdo-tranches, finance/credit-derivatives-cds, finance/securitization

## Entity: dv01
- Title: DV01 (Dollar Value of a 01)
- Category: Risk
- Language: en
- Key Concepts: convexity, Asset-Liability Management, Tenor dependence, PV01, Additivity, Interest Rate Swap DV01, Related Topics, Sign convention, Units, Relationship to Modified Duration, Python Implementation, receive-fixed swap, Key-Rate DV01, OAS DV01, First-order only
- References: black-scholes, brownian-motion, cs01, finance/oas, finance/swaps
- Backlinks: cs01, finance/bond-options-gaussian, finance/interest-rate-term-structure, finance/oas, finance/swaps, futures-hedging, greeks-options

## Entity: finance/dispersion-trading
- Title: Dispersion Trading
- Category: Risk
- Language: en
- Key Concepts: Basis risk, Prerequisites, Execution Methods, Vega-Weighting, P&L Decomposition, left-tail correlation risk, Risk Management, Related Topics, correlation risk premium, Relative value, Bank dispersion desks, Correlation Risk Premium, Dispersion trading, Correlation spike risk, The Dispersion Trade
- References: black-scholes, copula-models, finance/sabr-model, finance/value-at-risk, finance/variance-swaps, heston-model
- Backlinks: finance/variance-swaps-vix

## Entity: finance/eigenportfolio-rmt
- Title: Eigenportfolio Construction via RMT
- Category: Risk
- Language: en
- Key Concepts: Sparse factor models, Non-Gaussian returns, Eigenportfolio, Rotation ambiguity, Prerequisites, Denoised Correlation Matrix, Python: Extracting Signal Eigenportfolios, Market Factor, Statistical Arbitrage, Alpha Signal Construction, Background and Motivation, Eigenvalue Spectrum Visualization, Related Topics, Subsequent significant vectors, Mathematical Foundation
- References: finance/hierarchical-risk-parity, finance/random-matrix-theory, heston-model, math/spectral-theory-operators
- Backlinks: finance/factor-attribution, finance/gnn-finance, finance/hierarchical-risk-parity, finance/markowitz-mean-variance, finance/random-matrix-theory

## Entity: frtb-sa-mr
- Title: FRTB Standardized Approach (SA-MR)
- Category: Risk
- Language: en
- Key Concepts: Visualization: Capital Stack under FRTB, Related Topics, B. Vega Risk, FRTB Standardized Approach (SA-MR), Con, Standardized Approach for Market Risk (SA-MR), conservative, Pro, Why Banks Hate/Love It, 1. The Sensitivities-Based Method (SBM), The Core Logic: Sensitivities, 3. Residual Risk Add-on (RRAO), A. Delta Risk, FRTB, Greeks (Sensitivities)
- References: finance/xva, frtb-es, greeks-options

## Entity: frtb-es
- Title: FRTB and Expected Shortfall
- Category: Risk
- Language: en
- Key Concepts: Tail Blindness, Related Topics, 3. Non-Modellable Risk Factors (NMRF), Fundamental Review of the Trading Book (FRTB), FRTB and Expected Shortfall (ES), Backtesting, 97.5% confidence level, Lack of Coherence, average loss, Key Features of FRTB, Visualization: VaR vs. ES, coherent risk measure, 1. Liquidity Horizons, P&L Attribution (PLA), 2. Standardized vs. Internal Models (IMA)
- References: extreme-value-theory, finance/coherent-risk-measures, finance/value-at-risk
- Backlinks: clt, frtb-sa-mr, kelly-jump-diffusion, markov-chebyshev, measure-theory

## Entity: finance/frtb
- Title: FRTB: Fundamental Review of the Trading Book
- Category: Risk
- Language: en
- Key Concepts: P&L Attribution Test (PLA), FRTB ES scaled for liquidity horizons, FRTB Liquidity Horizons, Implementation, FRTB: Fundamental Review of the Trading Book, FRTB (Basel IV / BCBS 2019), Expected Shortfall, Key Changes vs Basel 2.5, Related Articles
- References: cornish-fisher-cvar, extreme-value-theory, finance/isda-simm, finance/value-at-risk

## Entity: finance/factor-attribution
- Title: Factor Risk Attribution and Decomposition
- Category: Risk
- Language: en
- Key Concepts: Percent Contribution to Risk, Factor Risk Attribution and Decomposition, Marginal Contribution to Risk (MCTR), Factor attribution, Ex-Post vs Ex-Ante vs Risk Budgeting, Implementation, Factor Risk Decomposition, Brinson-Hood-Beebower (BHB) Decomposition, Related Articles
- References: fama-macbeth-regression, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, ts-cs-factor-analysis
- Backlinks: alpha-orthogonalization, finance/apt-ross, finance/capm

## Entity: fraud-detection
- Title: Fraud Detection for Transactions
- Category: Risk
- Language: en
- Key Concepts: Real-time latency, Insurance fraud, Fraud Detection, Graph Neural Networks, Neural Networks ([[transformer-architecture|MLP]], LSTM), Recall (Sensitivity), Velocity features, False Positive Rate (FPR), Handling Class Imbalance, Account takeover (ATO), Precision-Recall Trade-off Chart, Concept drift, Graph fraud rings, Threshold calibration, Related Topics
- References: finance/gan, finance/monte-carlo-method, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: finance/gan, finance/gnn-finance, finance/shap-interpretability, gnn-credit-risk, graph-neural-networks

## Entity: futures-hedging
- Title: Futures Hedging
- Category: Risk
- Language: en
- Key Concepts: rolls, Basis risk, Duration-Based Hedging, Futures Hedging, Futures hedging, Stack and Roll, Agricultural hedging, Optimal Number of Contracts, Interest rate hedging, Rollover P&L, Portfolio Insurance, Related Topics, Tailing the Hedge, Basis and Basis Risk, Cross-Hedging
- References: dv01, finance/swaps, finance/value-at-risk, geometric-brownian-motion, optimal-execution
- Backlinks: finance/value-at-risk

## Entity: finance/hierarchical-risk-parity
- Title: Hierarchical Risk Parity (HRP)
- Category: Risk
- Language: en
- Key Concepts: inverse of each cluster's variance, Accounts for Hierarchy, Handles Singular $\Sigma$, Hierarchical Risk Parity (HRP), Requires Returns Forecast, Step 1: Hierarchical Clustering, The Three Steps of HRP, Tail risk, Related Topics, graph theory, Allocation Method Comparison, Factor portfolio diversification, Why HRP?, Low, Multi-asset fund construction
- References: finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/value-at-risk, kelly-criterion
- Backlinks: bayesian-black-litterman, convex-optimization-trading, fama-macbeth-regression, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/factor-attribution, finance/markowitz-mean-variance, finance/meta-labeling, finance/random-matrix-theory, model-free-rl-factors, numeraire-invariant-hedging, portfolio-optimization-ml, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis

## Entity: finance/isda-simm
- Title: ISDA SIMM: Standard Initial Margin Model
- Category: Risk
- Language: en
- Key Concepts: 3. Risk-Class Margin, 2. Bucket Margin, ISDA SIMM, Regulatory Context, ISDA SIMM: Standard Initial Margin Model, Risk Classes, Curvature add-on, SIMM Calibration, Vega margin, 10 business days, sensitivity-based, Curvature, Sensitivity Types, back-testing, Margin Formula
- References: copula-models, cornish-fisher-cvar, finance/swaps, finance/value-at-risk, finance/xva
- Backlinks: finance/frtb, finance/repo-market-systemic

## Entity: kelly-criterion
- Title: Kelly Criterion
- Category: Risk
- Language: en
- Key Concepts: Leverage management, Half-Kelly, Interactive Simulation, Wealth Growth Comparison, Proportional Kelly with drawdown control, Quarter-Kelly, Related Topics, Log-Wealth Maximization, Practical constraints, Kelly Criterion, Algorithmic trading position sizing, The Kelly Formula: Discrete Case, Parameter estimation risk, Non-stationarity, Limitations and Extensions
- References: finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, portfolio-optimization-ml
- Backlinks: bayesian-kelly, finance/hierarchical-risk-parity, finance/pe-fund-metrics, kelly-jump-diffusion, merton-portfolio, universal-portfolios

## Entity: finance/libor-sofr
- Title: LIBOR to SOFR Transition
- Category: Risk
- Language: en
- Key Concepts: LIBOR vs SOFR, LIBOR to SOFR Transition, SOFR In Arrears, Related Articles, Rate Types, Implementation, SOFR (Secured Overnight Financing Rate), SOFR Compounded, Replacement Rates, ISDA Fixed Spread Adjustments, Term SOFR, LIBOR (London Interbank Offered Rate), Transition Timeline
- References: finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, finance/xva
- Backlinks: finance/cir-hull-white, finance/interest-rate-term-structure

## Entity: network-risk-cascades
- Title: Network Models and Default Cascades
- Category: Risk
- Language: en
- Key Concepts: more connectivity can be dangerous, Default Cascades and the Domino Effect, Related Topics, The Eisenberg-Noe Model, interconnectedness, Weights ($L_{ij}$), The Paradox of Connectivity, The Financial Network as a Graph, Network Models and Default Cascades, Default Cascade, Edges ($E$), Visualization: Network Contagion, DebtRank, Contagion Threshold, DebtRank: Centrality for Risk
- References: cva-wrong-way-risk, finance/repo-market-systemic, finance/systemic-contagion-debtrank

## Entity: finance/oas
- Title: Option-Adjusted Spread (OAS)
- Category: Risk
- Language: en
- Key Concepts: ASW, Spread Decomposition, Background and Motivation, Related Topics, Prepayment model, Model dependency, Multi-factor models, Limitations and Extensions, For MBS, For Putable Bonds, Hull-White Model for Rate Path Generation, Spread Comparison, OAS stability, Z-Spread, OAS < Z-Spread
- References: dv01, finance/longstaff-schwartz, finance/monte-carlo-method, finance/sabr-model
- Backlinks: dv01, finance/nelson-siegel-svensson, finance/sabr-model, finance/securitization

## Entity: portfolio-optimization-ml
- Title: Portfolio Optimization with ML
- Category: Risk
- Language: en
- Key Concepts: Transaction costs, Hierarchical Risk Parity (HRP), Black-Litterman with ML Views, Classical Markowitz Framework, Step 1: Distance Matrix, Estimation window sensitivity, Sharpe Ratio, Step 4: Recursive Bisection, agglomerative clustering, Background and Motivation, Turnover, Related Topics, No expected return input, Limitations and Extensions, Key Metrics
- References: finance/gan, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/random-matrix-theory, finance/value-at-risk, math/spectral-theory-operators, mcmc, model-free-rl-factors, transformer-architecture
- Backlinks: convex-optimization-trading, fama-macbeth-regression, finance/pe-fund-metrics, kelly-criterion

## Entity: finance/pe-fund-metrics
- Title: Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve
- Category: Risk
- Language: en
- Key Concepts: Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve, Target Benchmarks by Strategy, Example, MOIC — Multiple on Invested Capital, Related Articles, Implementation, RVPI (Residual Value to Paid-In), TVPI = DPI + RVPI = MOIC, PME — Public Market Equivalent, DPI and RVPI, DPI (Distributions to Paid-In), timing, The J-Curve, IRR limitations, Core Metrics
- References: finance/monte-carlo-method, finance/repo-market-systemic, finance/value-at-risk, kelly-criterion, portfolio-optimization-ml

## Entity: finance/repo-market-systemic
- Title: Repo Market and Systemic Risk
- Category: Risk
- Language: en
- Key Concepts: Lehman Brothers, Primary Reserve Fund, Cash lender, Rehypothecation, General vs Special Collateral, Collateral Chains and Rehypothecation, Tri-party repo, Lessons from the 2008 Crisis, Systemic implication, Mechanics, Haircut, Systemic Risk Analysis, Simulation, Cash borrower, FSB haircut floors (2023)
- References: extreme-value-theory, finance/isda-simm, finance/kyle-lambda, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: finance/pe-fund-metrics, network-risk-cascades

## Entity: finance/securitization
- Title: Securitization
- Category: Risk
- Language: en
- Key Concepts: Post-Crisis Regulation, Credit card ABS, Dodd-Frank (2010), OAS — Option-Adjusted Spread, CLOs (Collateralized Loan Obligations), Prepayment Risk, Senior tranche interest, Senior fees, Basel III/IV, Subordination, Mezzanine interest, Prepayment Speed Impact on WAL, The SPV Structure, CDO-squared, Equity/residual
- References: copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-risk-models, finance/oas, finance/value-at-risk
- Backlinks: finance/cdo-tranches

## Entity: sharpe-ratio-statistics
- Title: Statistics of Sharpe Ratios
- Category: Risk
- Language: en
- Key Concepts: Regulatory reporting, Non-spherical distributions, Hierarchical testing, Deflated Sharpe Ratio, Jobson-Korkie Test, Serial correlation inflates SR, Related Topics, Statistics of Sharpe Ratios, Estimation error dominates at short horizons, Multiple testing inflation, Research pipeline, Python Implementation, Deflated SR, Walk-forward validation, Limitations and Extensions
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/value-at-risk, hidden-markov-models, mcmc

## Entity: finance/stylized-facts-returns
- Title: Stylized Facts of Financial Returns
- Category: Risk
- Language: en
- Key Concepts: correlations between assets jump up, empirical foundation, absolute, 11. Multifractality, For option pricing, What these facts exclude, 5. Leverage effect, 4. Long memory of volatility, multifractal, rule out, Modern programme, power law, Canonical list (Rama Cont, 2001), For market making, 8. Volume-volatility nonlinearity
- References: arch-models, copula-models, finance/bipower-variation, finance/capm, finance/efficient-market-hypothesis, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, garch-models, heston-model
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/hyperbolic-distributions, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, math/central-limit-theorem, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: survival-risk-prediction
- Title: Survival-Based Risk Prediction
- Category: Risk
- Language: en
- Key Concepts: Cox model, Limit order survival, Accelerated Failure Time (AFT) Models, risk set, Cox Proportional Hazards Model, Related Topics, Python Implementation, Machine learning extensions, Survival-Based Risk Prediction, partial likelihood, cause-specific hazard, Proportional hazards violation, Fund liquidation risk, censoring, Survival Curves by Risk Group
- References: black-scholes, copula-models, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/credit-migration, finance/credit-risk-models, gnn-credit-risk

## Entity: convex-optimization-trading
- Title: Systematic Portfolio Trading via Convex Optimization
- Category: Risk
- Language: en
- Key Concepts: Covariance estimation, Prerequisites, Currency Overlay, [[mcmc]], Systematic Portfolio Trading via Convex Optimization, Convex Optimization, Options Delta Hedging, Systematic Equity Long/Short, Linear cost, Transaction Cost Models, Related Topics, Python Implementation, Duality, Square-root impact, Non-convex constraints
- References: bayesian-black-litterman, black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc, portfolio-optimization-ml
- Backlinks: bayesian-black-litterman, convex-analysis, convexity, entropy-pooling, finance/adversarial-stress-testing, finance/alpha-stacking, finance/markowitz-mean-variance, gradient-hessian-jacobian, lagrange-multipliers, linear-programming, martingale-optimal-transport

## Entity: finance/systemic-contagion-debtrank
- Title: Systemic Risk and DebtRank
- Category: Risk
- Language: en
- Key Concepts: Example, Related Articles, Implementation, Propagation, DebtRank Algorithm, Comparison with Other Systemic Risk Metrics, DebtRank, State, Relative impact matrix, Financial Networks, Stress level, Systemic Impact Score, Extensions, Dynamic DebtRank, Systemic Risk and DebtRank
- References: cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/nash-equilibrium, finance/value-at-risk
- Backlinks: cva-wrong-way-risk, finance/black-swan-scenarios, finance/gnn-finance, finance/repo-market-systemic, graph-theory, network-risk-cascades

## Entity: finance/value-at-risk
- Title: Value at Risk (VaR)
- Category: Risk
- Language: en
- Key Concepts: Value at Risk (VaR), 3. Monte Carlo Simulation, Regulatory capital (Basel III/IV), Margin requirements, Basel IV (FRTB), Related Topics, Python Implementation, 2. Parametric (Delta-Normal), Normality assumption, Stressed VaR, Limitations and Extensions, Backtesting VaR, VaR vs. CVaR Comparison, Conditional VaR (CVaR), 1. Historical Simulation
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/xva, futures-hedging, garch-models
- Backlinks: alternative-data-alpha, amihud-illiquidity, copula-models, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/copula-models, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/frtb, finance/gan, finance/hierarchical-risk-parity, finance/isda-simm, finance/monte-carlo-method, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/quasi-monte-carlo, finance/random-matrix-theory, finance/realized-kernels, finance/securitization, finance/systemic-contagion-debtrank, finance/xva, fraud-detection, frtb-es, futures-hedging, generative-scenario-models, kelly-criterion, llm-financial-analysis, lob-prediction, math/lundberg-cramer-ruin, news-sentiment-trading, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, rl-trader, sharpe-ratio-statistics, student-t-hmm-bond-regimes, volatility-forecasting

## Entity: finance/variance-swaps-vix
- Title: Variance Swaps and the VIX
- Category: Risk
- Language: en
- Key Concepts: model-independent, The VIX Index, VIX Derivatives, variance risk premium, Variance Swaps and the VIX, Related Topics, Python Implementation, Variance Swap vs Volatility Swap, Dispersion trading, Applications, Model-Free Replication, VIX index, VIX basis, Volatility trading, Variance Swap Mechanics
- References: black-scholes, finance/dispersion-trading, finance/variance-swaps, finance/volatility-surface, garch-models, greeks-options
- Backlinks: finance/delta-hedging-practice

## Entity: finance/xva
- Title: XVA (Valuation Adjustments)
- Category: Risk
- Language: en
- Key Concepts: Expected Exposure, FVA — Funding Valuation Adjustment, FCA, Double-counting, XVA (Valuation Adjustments), FBA, Related Topics, Model dependency, Python Implementation, Trade pricing, KVA — Capital Valuation Adjustment, XVA, Portfolio compression, FRTB-CVA, Limitations and Extensions
- References: copula-models, cs01, finance/monte-carlo-method, finance/swaps, finance/value-at-risk, inference-serving
- Backlinks: convertible-bonds, copula-models, cost-of-carry, cs01, cva-wrong-way-risk, finance/copula-models, finance/credit-derivatives-cds, finance/credit-risk-models, finance/isda-simm, finance/libor-sofr, finance/nelson-siegel-svensson, finance/repo-market-systemic, finance/swaps, finance/value-at-risk, frtb-sa-mr, gnn-credit-risk, multi-curve-framework, quantum-amplitude-estimation, risk-neutral-valuation

## Entity: credit-risk-modeling-and-structural-models
- Title: Credit Risk Modeling & Merton Structural Model
- Category: Risk Management
- Language: en
- Key Concepts: Credit Risk Modeling & Merton Structural Model, See Also
- References: course-quant-trading, option-greeks-and-volatility, quant-risk-management-var-cvar

## Entity: portfolio-risk-decomposition-marginal-var
- Title: Portfolio Risk Decomposition & Risk Parity
- Category: Risk Management
- Language: en
- Key Concepts: Portfolio Risk Decomposition & Risk Parity, See Also
- References: course-quant-trading, portfolio-optimization-and-black-litterman, quant-risk-management-var-cvar

## Entity: quant-risk-management-var-cvar
- Title: Quantitative Risk Management: VaR & CVaR
- Category: Risk Management
- Language: en
- Key Concepts: See Also, 2. Performance Metrics, 1. VaR & Expected Shortfall (CVaR), Quantitative Risk Management: VaR & CVaR, Expected Shortfall ($CVaR_\alpha$):, Value at Risk ($VaR_\alpha$):
- References: course-quant-trading, optimal-stopping-and-kelly, statistical-arbitrage-and-pairs-trading
- Backlinks: copula-models-and-tail-dependence, credit-risk-modeling-and-structural-models, portfolio-optimization-and-black-litterman, portfolio-risk-decomposition-marginal-var, stat-tests-for-trading-strategies, statistical-arbitrage-and-pairs-trading

## Entity: deep-rl-execution
- Title: Deep RL for Trade Execution
- Category: Scientific ML
- Language: en
- Key Concepts: Prerequisites, Cross-venue routing, Performance Comparison, Reward, Sell-side execution desks, Related Topics, Action, Python Implementation, Deep RL for Trade Execution, State, Non-stationarity, High-frequency liquidation, Applications in Practice, Ning et al. (2021), Risk controls
- References: finance/market-impact-scaling, finance/shannon-entropy, generative-scenario-models, lob-prediction, optimal-execution, reinforcement-learning, rl-trader, temporal-fusion-transformer
- Backlinks: ai-market-making, alpha-factor-research, ml-options-pricing, offline-rl, optimal-execution, reinforcement-learning, rough-paths, temporal-fusion-transformer, tool-use

## Entity: generative-scenario-models
- Title: Generative Models for Scenario Generation
- Category: Scientific ML
- Language: en
- Key Concepts: GAN Minimax Objective, Stylised Facts as Validation Targets, Prerequisites, FRTB Internal Models Approach, Regulatory acceptance, Generative Adversarial Networks (GANs), FinGAN, Training instability, Related Topics, Python Implementation, CVaR accuracy, Volatility clustering, Variational Autoencoders (VAEs), TimeGAN for Financial Paths, Distribution Comparison
- References: copula-models, extreme-value-theory, finance/adversarial-stress-testing, finance/monte-carlo-method, finance/value-at-risk, garch-models, generative-models, stochastic-differential-equations, temporal-fusion-transformer
- Backlinks: deep-rl-execution, generative-models, gnn-credit-risk, llm-financial-analysis, market-microstructure, temporal-fusion-transformer

## Entity: gnn-credit-risk
- Title: Graph Neural Networks for Credit Risk
- Category: Scientific ML
- Language: en
- Key Concepts: Prerequisites, Label scarcity, Retail credit fraud, Heterogeneous Credit Graph, Bao et al. (2023), Related Topics, Python Implementation, Graph Convolutional Network (GCN), ESG-linked credit, FICO (2022), Applications in Practice, Yang et al. (2021), Architecture: GraphSAGE for Large Credit Graphs, Key Results and Performance, Performance benchmarks
- References: attention-mechanisms, copula-models, finance/xva, fraud-detection, generative-scenario-models, graph-neural-networks, llm, llm-financial-analysis, spectral-graph-theory, survival-risk-prediction, transformer-architecture
- Backlinks: finance/credit-risk-models, graph-neural-networks, llm-financial-analysis

## Entity: kan
- Title: Kolmogorov-Arnold Networks (KAN)
- Category: Scientific ML
- Language: en
- Key Concepts: Grid resolution choice., Training speed., Theorem:, Neuroscience:, Prerequisites, Kolmogorov-Arnold Theorem (1957)., Sparsification and pruning., Mathematics:, Representation efficiency., refined adaptively, Differential equations:, Symbolic regression fragility., Symbolic regression interface., Related Topics, B-spline activations.
- References: attention-mechanisms, conformal-field-theory, equivariant-nn, finance/spectral-analysis, kolmogorov-arnold-theorem, learnable-activations, pinns, qft-basic, transformer-architecture
- Backlinks: kolmogorov-arnold-theorem, learnable-activations, pinns

## Entity: llm-financial-analysis
- Title: LLM for Financial Analysis
- Category: Scientific ML
- Language: en
- Key Concepts: Architecture / Algorithm, Macro research synthesis, Domain-Specific Models, Hallucination risk, Regulatory liability, Credit covenant surveillance, Timeliness, Counterparty due diligence, Related Topics, Python Implementation, General-Purpose LLMs with Financial Prompting, Structured Output via JSON Schema Enforcement, Hallucination rates in financial tasks, Information Extraction as Conditional Generation, Applications in Practice
- References: finance/value-at-risk, fine-tuning, generative-scenario-models, gnn-credit-risk, inference-serving, llm, news-sentiment-trading, rag, temporal-fusion-transformer
- Backlinks: alpha-factor-research, gnn-credit-risk, mcp, ml-options-pricing, nlp-financial-analysis, rag, research/mla-financial-reasoning, temporal-fusion-transformer, tool-use

## Entity: neural-operators
- Title: Neural Operators
- Category: Scientific ML
- Language: en
- Key Concepts: Inverse problems:, Accumulation of error:, Comparison: DeepONet vs. FNO vs. Graph Neural Operators, Complexity:, Fourier Neural Operators (FNO), Fluid dynamics:, Lift:, Limited to smooth regimes:, The Operator Approximation Problem, Training data, See Also, Weather & climate:, Branch network:, Resolution invariance:, DeepONet: Branch and Trunk Decomposition
- References: ai-physics/hamiltonian-nn, equivariant-nn, fokker-planck-equation, numerical-pde-finance, partial-differential-equations, pinns, stochastic-differential-equations
- Backlinks: fourier-neural-operators

## Entity: pinns
- Title: Physics-Informed Neural Networks (PINNs)
- Category: Scientific ML
- Language: en
- Key Concepts: The two sides of a PINN, Anomalous diffusion:, Collocation sampling., Analytical exactness:, Fluid dynamics:, Related Topics, Scalability., Python Implementation, How It Works, Applications, Convergence theory:, Architecture choice., Key Results & Properties, Spectral bias., Pathological loss landscapes.
- References: ai-physics/hamiltonian-nn, automatic-differentiation, black-scholes, equivariant-nn, finance/fractional-fokker-planck, kan, partial-differential-equations, schrodinger-equation
- Backlinks: ai-physics/hamiltonian-nn, automatic-differentiation, deep-ritz-method, equivariant-nn, fourier-neural-operators, gaussian-processes, kan, kolmogorov-arnold-theorem, kuramoto-model, learnable-activations, neural-odes, neural-operators, partial-differential-equations

## Entity: temporal-fusion-transformer
- Title: Temporal Fusion Transformer
- Category: Scientific ML
- Language: en
- Key Concepts: LSTM, Sequence encoding, P50 forecast error, Volatility surface prediction, Static covariates, Static enrichment, Variable Selection Networks, Observed inputs, Related Topics, No explicit probabilistic model, Stationarity assumption, Input Taxonomy, Python Implementation, Gating Mechanism, Temporal Fusion [[transformer-architecture|Transformer]]
- References: arima-models, attention-mechanisms, deep-rl-execution, garch-models, generative-scenario-models, inference-serving, llm-financial-analysis, transformer-architecture, volatility-forecasting
- Backlinks: ai-market-making, alpha-factor-research, deep-rl-execution, generative-scenario-models, llm-financial-analysis, ml-options-pricing, nlp-financial-analysis

## Entity: ar-models
- Title: AR (Autoregressive) Models
- Category: Signal Analysis
- Language: en
- Key Concepts: Linearity, AR (Autoregressive) Models, ACF/PACF Pattern for AR(2), Unconditional mean, outside, ARIMA, Market Microstructure, Partial Autocorrelation Function (PACF), ARMA, Related Topics, ARCH/GARCH, Python Implementation, Volatility Forecasting, Unconditional variance, Innovation representation
- References: arch-models, arima-models, arma-models, finance/levy-processes, finance/spectral-analysis, math/spectral-theory-operators, mcmc, volatility-forecasting
- Backlinks: arch-models, arima-models, arma-models

## Entity: arima-models
- Title: ARIMA (Integrated ARMA)
- Category: Signal Analysis
- Language: en
- Key Concepts: Linearity, Earnings Forecasting, Prerequisites, VAR/VECM, Unit Root Tests, ARIMA Models, ARIMAX / Transfer Function, Related Topics, Python Implementation, Volatility Forecasting, Spurious stationarity, SARIMA, Invertibility, ARIMA Forecast with Confidence Intervals, Seasonal ARIMA (SARIMA)
- References: ar-models, arma-models, finance/cointegration, finance/hurst-exponent, finance/levy-processes, mcmc, volatility-forecasting
- Backlinks: ar-models, arma-models, finance/cointegration, temporal-fusion-transformer

## Entity: arma-models
- Title: ARMA (Autoregressive Moving Average)
- Category: Signal Analysis
- Language: en
- Key Concepts: Macro Signal Construction, Autoregressive Moving Average (ARMA), Prerequisites, Risk Factor Residuals, Causality, ARIMA, Parameter redundancy, Order Flow, Related Topics, Python Implementation, Kalman filter, Volatility Forecasting, AR models, ARMA Models, ARMA-GARCH
- References: ar-models, arima-models, black-scholes, finance/spectral-analysis, mcmc, volatility-forecasting
- Backlinks: ar-models, arch-models, arima-models

## Entity: finance/dft
- Title: Discrete Fourier Transform (DFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Hann, Outlier sensitivity:, sampling rate, anti-aliasing low-pass filter, Blackman-Harris, window function, Stationarity:, Uniqueness:, Related Topics, Python Implementation, Matrix form:, conjugate-symmetric, Flat-top, Hamming, Nyquist–Shannon Sampling Theorem
- References: finance/fft, finance/hilbert-huang-transform, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/fft, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fft
- Title: Fast Fourier Transform (FFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Cooley-Tukey Algorithm (1965), Digital filtering:, Radix-2 DIF, Fast Fourier Transform (FFT), Stationarity:, primitive $N$-th root of unity, The Butterfly Operation, two, Convolution Theorem via FFT, Image processing:, Related Topics, Numerical precision:, Python Implementation, butterfly, FFTW
- References: finance/dft, finance/shor-algorithm, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/dft, finance/hyperbolic-distributions, finance/levy-esscher-continuous, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fisher-transform
- Title: Fisher Transform
- Category: Signal Analysis
- Language: en
- Key Concepts: Transformation, Signal Generation, Multi-asset ranking, Whipsaw risk, Lag, Background and Motivation, Related Topics, Fisher Transform, Range dependency, Adaptive Fisher, Mathematical Formula, Limitations and Extensions, Normalisation, Trigger Line, Mean-reversion signals
- References: finance/hilbert-huang-transform, finance/hurst-exponent, finance/spectral-analysis
- Backlinks: finance/hilbert-huang-transform, finance/spectral-analysis, information-geometry-finance

## Entity: finance/hilbert-huang-transform
- Title: Hilbert-Huang Transform (HHT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Linearity, Market cycle extraction, HHT vs. Fourier vs. Wavelets, Stationarity, Instantaneous (Local), Ensemble EMD (EEMD), Hilbert-Huang Spectrum, Adaptive (Data-driven), High, Completeness, Cycle-based trading, Time-varying volatility analysis, IMF Decomposition Visualization, Mode mixing, Adaptive denoising
- References: finance/fisher-transform, finance/hurst-exponent, finance/spectral-analysis, wavelet-transform
- Backlinks: finance/dft, finance/fisher-transform, finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/realized-kernels
- Title: Intraday Volatility via Realized Kernels
- Category: Signal Analysis
- Language: en
- Key Concepts: Parzen kernel, Asynchronous trading, Prerequisites, Market Microstructure Noise (MMN), Consistency and Convergence Rate, Execution algorithms, Ultra-high-frequency, Pre-averaging, The Realized Kernel Estimator, Intraday Volatility Forecasting via Realized Kernels, Integrated Variance, signature plot, Related Topics, Python Implementation, Limitations and Extensions
- References: brownian-motion, finance/spectral-analysis, finance/value-at-risk, garch-models, geometric-brownian-motion, volatility-forecasting, wavelet-transform
- Backlinks: finance/bipower-variation, finance/spectral-analysis, finance/wavelet-transform, jump-robust-volatility, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: kalman-filter
- Title: Kalman Filter
- Category: Signal Analysis
- Language: en
- Key Concepts: maximum likelihood estimation, predicted covariance, Log-Likelihood for Parameter Estimation, Related Topics, Kalman filter, Step 1: Prediction, Kalman Filter, State-Space Representation, Kalman gain, state-space form, Step 2: Update, Kalman Smoother (RTS Smoother), Kalman Gain Dynamics, Extended Kalman Filter (EKF), state equation
- References: finance/particle-filter, hidden-markov-models, mcmc, volatility-forecasting
- Backlinks: conditionally-gaussian-processes, factor-graphs-inference, finance/cointegration, finance/hidden-markov-models, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/transformer-timeseries, innovation-process, math/conditional-expectation-sigma, math/sequential-hypothesis-testing, math/spectral-representation-processes, math/stationary-wide-spectral, multivariate-normal-distribution, nonlinear-filtering, state-space-models

## Entity: finance/lempel-ziv-complexity
- Title: Lempel-Ziv Complexity
- Category: Signal Analysis
- Language: en
- Key Concepts: Visualization: Complexity Trends, Lempel-Ziv Complexity (LZ), Non-parametric, Finite-sample applicability, LZ78 vs LZ76, Regime Detection, Core Principle, Related Topics, Binarization choice, Low LZ Complexity, Background and History, Limitations and Extensions, Lempel-Ziv (LZ) Complexity, High LZ Complexity, Algorithmic Trading
- References: finance/hurst-exponent, finance/phase-space-reconstruction, finance/shannon-entropy, hidden-markov-models
- Backlinks: finance/hurst-exponent, finance/phase-space-reconstruction, finance/sha-256, finance/shannon-entropy, financial-entropy, kolmogorov-complexity

## Entity: finance/phase-space-reconstruction
- Title: Phase Space Reconstruction
- Category: Signal Analysis
- Language: en
- Key Concepts: Lyapunov Exponents and Chaos Detection, Noise Sensitivity, Prerequisites, correlation dimension, Stationarity, Embedding as features, Embedding Dimension $m$: False Nearest Neighbors, time delay, Correlation Dimension, Background and Motivation, Related Topics, Data Requirements, Python: Phase Space Reconstruction and FNN, Average Mutual Information, largest Lyapunov exponent
- References: finance/hurst-exponent, finance/lempel-ziv-complexity, finance/particle-filter, finance/spectral-analysis, hidden-markov-models
- Backlinks: finance/hidden-markov-models, finance/hurst-exponent, finance/lempel-ziv-complexity

## Entity: finance/prony-hankel-spectral
- Title: Prony's Method and Hankel Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Step 3: Amplitude Estimation, Hankel SVD Filtering, Problem Formulation, Step 1: Linear Prediction via Hankel System, Hankel matrix, Implementation, Prony's Method and Hankel Spectral Analysis, Step 2: Root Finding, Prony's method, Algorithm, Regime Interpretation, Comparison with FFT, Related Articles
- References: finance/hilbert-huang-transform, finance/singular-spectral-analysis, finance/spectral-analysis, fourier-transform, wavelet-transform

## Entity: finance/singular-spectral-analysis
- Title: Singular Spectral Analysis (SSA)
- Category: Signal Analysis
- Language: en
- Key Concepts: Step 1 — Embedding, SSA-LRF Forecasting, Prerequisites, Identifiability, Price trend extraction, Principal Components, Step 4 — Diagonal Averaging (Hankelization), Related Topics, Linear Recurrence Forecasting (LRF), Python Implementation, W-Correlation, Volatility regime decomposition, Limitations and Extensions, Step 3 — Grouping, Oscillations
- References: finance/random-matrix-theory, finance/spectral-analysis, math/spectral-theory-operators, volatility-forecasting, wavelet-transform
- Backlinks: finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform

## Entity: finance/spectral-analysis
- Title: Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Linearity, Multiple testing, Fast Fourier Transform (FFT), Leakage, phase spectrum, Parseval's theorem, Autoregressive (Parametric) Spectral Estimation, Related Topics, Intraday seasonality, Python Implementation, Slepian sequences, Seasonality adjustment, Cross-Spectral Density and Coherence, Welch's Method, Non-stationarity
- References: finance/fisher-transform, finance/hilbert-huang-transform, finance/realized-kernels, finance/singular-spectral-analysis, wavelet-transform
- Backlinks: ar-models, arma-models, convolutional-volatility-resolution-clustering, finance/dft, finance/fft, finance/fisher-transform, finance/hilbert-huang-transform, finance/phase-space-reconstruction, finance/prony-hankel-spectral, finance/realized-kernels, finance/shor-algorithm, finance/singular-spectral-analysis, finance/wavelet-transform, finance/zeta-field, fourier-transform, kan, kolmogorov-arnold-theorem, volatility-modulated-spectral-surface

## Entity: volatility-modulated-spectral-surface
- Title: Volatility-Modulated Spectral Surface (VMSS)
- Category: Signal Analysis
- Language: en
- Key Concepts: persistent spectral patterns, Prerequisites, Volatility-Modulated Transform, Regime transition signals, Adaptive denoising, Related Topics, Interpretation of absolute levels, Python Implementation, Noise separation, standardized returns, Wigner-Ville Distribution (WVD), Deep learning integration, Pseudo-WVD, Circular dependency, Limitations and Extensions
- References: finance/gan, finance/realized-kernels, finance/shannon-entropy, finance/spectral-analysis, garch-models, inference-serving, volatility-forecasting, wavelet-transform
- Backlinks: convolutional-volatility-resolution-clustering

## Entity: finance/wavelet-transform
- Title: Wavelet Transform (CWT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Choice of mother wavelet, Multi-scale denoising, power spectrum, Orthonormality (DWT), Edge effects, Mexican Hat, Continuous Wavelet Transform, Daubechies wavelets, Discrete Wavelet Transform (DWT), Wavelet Variance and Correlation, Related Topics, Python Implementation, Heisenberg uncertainty, scale, Stationary Wavelet Transform (SWT)
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
- Key Concepts: Overview, Applications

## Entity: nyquist-shannon
- Title: Nyquist-Shannon Theorem
- Category: Signal Processing
- Language: en
- Key Concepts: Overview, Formulation
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
- Key Concepts: Related Topics, Stick-Breaking construction, Uncertainty Quantification, Chinese Restaurant Process (CRP), Gaussian Processes, infinite-dimensional, Gaussian Processes (GP), Bayesian Non-parametrics, latent feature models, Indian Buffet Process (IBP), Visualization: Model Growth, rich-get-richer, Why Use BNP?, Flexibility, Automatic Complexity Selection
- References: gaussian-processes, mixture-of-experts
- Backlinks: gmm

## Entity: dirichlet-processes
- Title: Bayesian Non-parametrics: Dirichlet Processes
- Category: Statistical Learning
- Language: en
- Key Concepts: Stick-Breaking Construction, Bayesian Non-parametrics: Dirichlet Processes, The Chinese Restaurant Process (CRP), Mathematical Definition, Applications in Clustering

## Entity: concentration-of-measure
- Title: Concentration of Measure
- Category: Statistical Learning
- Language: en
- Key Concepts: Talagrand's Concentration Inequality, Rademacher Complexity and Generalization, Concentration of Measure, McDiarmid's Inequality, The Phenomenon

## Entity: sgd-convergence-theory
- Title: Convergence Theory of Stochastic Gradient Descent
- Category: Statistical Learning
- Language: en
- Key Concepts: Convex and Smooth Functions, Non-Convex Optimization and the PL Condition, Problem Formulation, Convergence Theory of Stochastic [[convex-optimization|Gradient Descent]], Strong Convexity
- References: convex-optimization

## Entity: differential-privacy
- Title: Differential Privacy in ML
- Category: Statistical Learning
- Language: en
- Key Concepts: Gradient Clipping, $\delta$, Why It Matters, Compliance, Related Topics, Low Noise, Noise Addition, Differentially Private Stochastic [[convex-optimization|Gradient Descent]] (DP-SGD), $(\epsilon, \delta)$-differential privacy, User Trust, Visualization: Privacy Budget vs. Accuracy, membership inference attacks, Differential Privacy in Machine Learning, $\epsilon$ (Privacy Budget), DP-SGD: Training with Privacy
- References: ai-theory/adversarial-examples, convex-optimization, federated-learning
- Backlinks: federated-learning

## Entity: gmm
- Title: Gaussian Mixture Models (GMM)
- Category: Statistical Learning
- Language: en
- Key Concepts: Related Topics, Visualization: GMM vs K-Means, Fitting the Model: The EM Algorithm, Initialize, Soft Clustering (Responsibilities), soft assignment, The Model Definition, Relationship to K-Means, Gaussian Mixture Models (GMM), responsibility, mixing weight, M-step, E-step, Repeat
- References: bayesian-nonparametrics, expectation-maximization
- Backlinks: em-algorithm, matrix-calculus

## Entity: kernel-methods-rkhs
- Title: Kernel Methods & RKHS
- Category: Statistical Learning
- Language: en
- Key Concepts: reproducing property, Kernel Methods & Reproducing Kernel Hilbert Spaces (RKHS), Mercer's Theorem, characteristic, The Representer Theorem, Kernel Mean Embeddings, Reproducing Kernel Hilbert Space
- References: math/spectral-theory-operators
- Backlinks: attention-kernel, hilbert-banach-spaces, kde

## Entity: linear-regression
- Title: Linear Regression and Gauss-Markov
- Category: Statistical Learning
- Language: en
- Key Concepts: Homoscedasticity, The Model, Related Topics, Visualization: The Bias-Variance Trade-off, exactly zero, Regularization (Ridge and Lasso), 2. Lasso Regression (L1 Penalty), Gauss-Markov Theorem, 1. Ridge Regression (L2 Penalty), Linear Regression and the Gauss-Markov Theorem, BLUE (Best Linear Unbiased Estimator), Normal Equation, No Autocorrelation, The Gauss-Markov Theorem, Ordinary Least Squares (OLS)
- References: bayesian-inference, logistic-regression, mle
- Backlinks: logistic-regression

## Entity: logistic-regression
- Title: Logistic Regression
- Category: Statistical Learning
- Language: en
- Key Concepts: Logistic Function, 3. Interpretation: Odds and Ratios, Binary Cross-[[shannon-entropy|Entropy]], Related Topics, Convexity, Multinomial (Softmax), Sigmoid activation, [[asymptotic-stats/mle|Maximum Likelihood Estimation (MLE)]], Odds Ratio, 2. Estimation: Cross-[[shannon-entropy|Entropy]] Loss, Log-Odds, Linear Hyperplane, Logistic Regression: The Link Between Stats and Neural Networks, Softmax, Decision Boundary
- References: convex-optimization, convexity, finance/shannon-entropy, linear-regression, mle, transformer-architecture
- Backlinks: linear-regression

## Entity: normalizing-flows-math
- Title: Mathematical Foundations of Normalizing Flows
- Category: Statistical Learning
- Language: en
- Key Concepts: Mathematical Foundations of Normalizing Flows, Change of Variables Theorem, Liouville Equation, Continuous Normalizing Flows (CNFs), Composition of Flows

## Entity: mechanism-design
- Title: Mechanism Design
- Category: Statistical Learning
- Language: en
- Key Concepts: The Revelation Principle, Incentive Compatible (IC), second-highest price, Visualization: Revenue vs. Welfare, Famous Examples, 2. Matching Algorithms (Gale-Shapley), Related Topics, AI Alignment, The Goal: Incentive Compatibility, Direct Mechanism, Application in AI: Alignment and Governance, Data Markets, Strategy-proofness, Multi-Agent Systems, stable
- References: llm, mean-field-games, online-learning-regret, rlhf

## Entity: mcts
- Title: Monte Carlo Tree Search (MCTS)
- Category: Statistical Learning
- Language: en
- Key Concepts: Tree Search, AlphaGo and Neural MCTS, Visualization: Tree Search vs. Rollout, UCT, Related Topics, [[automatic-differentiation|Backpropagation]], Monte Carlo simulations, Monte Carlo Tree Search (MCTS), Simulation (Rollout), Value Network, Why MCTS is Revolutionary, Policy Network, $\sqrt{\dots}$ (Exploration), zero domain knowledge, Expansion
- References: automatic-differentiation, mdp, monte-carlo-integration, multi-armed-bandits
- Backlinks: orm-prm

## Entity: multi-armed-bandits
- Title: Multi-Armed Bandits
- Category: Statistical Learning
- Language: en
- Key Concepts: news recommendation, ad placement, sample, The Setup, 3. Thompson Sampling, Exploitation, 1. $\epsilon$-Greedy, Visualization: UCB Action Selection, Related Topics, Exploration vs. Exploitation trade-off, Exploration, Key Algorithms, Contextual Bandits, sublinear regret, Cumulative Regret
- References: bayesian-inference, mdp, online-learning-regret
- Backlinks: mcts

## Entity: naive-bayes
- Title: Naive Bayes Classifier
- Category: Statistical Learning
- Language: en
- Key Concepts: Gaussian Naive Bayes, Related Topics, 3. Why it Works (The Paradox of Naive Bayes), Zero-Shot Baseline, class label, Multinomial Naive Bayes, Bayes' Theorem, Naive Bayes Classifier: The Power of Independence, 4. Modern Use Cases in AI, NLP, 1. The Probabilistic Model, Low Variance, 2. Common Variants, Bernoulli Naive Bayes, Decision Boundary vs. Probability
- References: bayesian-inference, decision-theory, finance/shannon-entropy, llm, rag
- Backlinks: bayes-theorem

## Entity: online-learning-regret
- Title: Online Learning and Regret
- Category: Statistical Learning
- Language: en
- Key Concepts: Visualization: Regret Scaling, Key Algorithms, Ad Placement, Thompson Sampling, Related Topics, Optimization, Online Learning and Regret Minimization, 1. Follow the Leader (FTL), learn, Cumulative Regret, Applications, UCB (Upper Confidence Bound), Exploration-Exploitation Trade-off, 2. Follow the Regularized Leader (FTRL), 3. Multiplicative Weights Update (MWU) / Hedge
- References: convex-optimization, finance/shannon-entropy, math/information-theory, reinforcement-learning
- Backlinks: mechanism-design, multi-armed-bandits, universal-portfolios

## Entity: pca
- Title: Principal Component Analysis (PCA)
- Category: Statistical Learning
- Language: en
- Key Concepts: maximize the variance, Data Compression, unsupervised dimensionality reduction, The Mathematical Objective, eigenvector, explained variance ratio, Principal Component Analysis (PCA), Visualization, Noise Reduction, Explained Variance, Related Topics, SVD (Singular Value Decomposition), Applications, largest eigenvalue, empirical covariance matrix
- References: manifold-learning, math/spectral-theory-operators, variational-autoencoders
- Backlinks: alpha-orthogonalization, eigenvalues-eigenvectors, fastest-mean-reversion, matrix-decompositions, multivariate-normal, pca-statarb, tensor-decompositions

## Entity: attention-kernel
- Title: Self-Attention as a Kernel
- Category: Statistical Learning
- Language: en
- Key Concepts: Related Topics, [[convex-optimization|gradient descent]], feature map, Self-[[attention-mechanisms|Attention]] as a Kernel, Transformers as Non-parametric Learners, Nadaraya-Watson Kernel Regression, Self-[[attention-mechanisms|Attention]], In-Context Learning, The [[attention-mechanisms|Attention]] Mechanism, Linear Transformers and Feature Maps, Visualization: Attention Surface in RKHS, The Kernel Interpretation, Linear Transformers, Kernel Methods, Reproducing Kernel Hilbert Space (RKHS)
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, kernel-methods-rkhs, state-space-models, transformer-architecture

## Entity: singular-learning-theory
- Title: Singular Learning Theory
- Category: Statistical Learning
- Language: en
- Key Concepts: Generalization Error, Resolution of Singularities, Singular Learning Theory, The Free Energy and RLCT, Real Log Canonical Threshold (RLCT)

## Entity: statistical-mechanics-learning
- Title: Statistical Mechanics of Learning
- Category: Statistical Learning
- Language: en
- Key Concepts: Statistical Mechanics of Learning, Replica Trick, SAT/UNSAT Transition:, Related Topics, Information-Theoretic vs. Computational Gap:, Order Parameters and Overlaps, Key Phenomena, Phase Transitions, Replica Symmetry (RS):, Gibbs distribution, Spin-Glass Transition:, What Is It, DERIVATION: The Free Energy of a Linear Perceptron, The Teacher-Student Setup, capacity
- References: ai-theory/neural-tangent-kernel, information-bottleneck-theory, pac-learning

## Entity: variational-inference-math
- Title: Variational Inference
- Category: Statistical Learning
- Language: en
- Key Concepts: Mean-Field Approximation, The Evidence Lower Bound (ELBO), The Reparameterization Trick, Variational Inference
- References: convex-optimization
- Backlinks: factor-graphs-inference

## Entity: anova
- Title: ANOVA (One-way/Two-way)
- Category: Statistics
- Language: en
- Key Concepts: Two-way ANOVA:, One-way vs Two-way, One-way ANOVA:, Overview
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
- Key Concepts: Survival Function $S(t)$:, Key Functions, Overview, Hazard Function $h(t)$:

## Entity: time-series-basics
- Title: Time Series Basics
- Category: Statistics
- Language: en
- Key Concepts: Autocorrelation, Overview, Stationarity

## Entity: signature-based-models
- Title: Signature-based Models
- Category: Stochastic
- Language: en
- Key Concepts: Rough Path Theory, Signature-based Models in Finance, Sig-GANs, Mathematical Rigor, non-linear functional, Related Topics, linear, 2. Pricing and Hedging, 1. Market Simulation (Generative Models), What is a Path Signature?, Signatures in Quantitative Finance, feature map, Visualization: The First Few Terms, Universal Property, Dimensionality Reduction
- References: generative-models, path-dependent-volatility, rough-paths
- Backlinks: path-dependent-volatility

## Entity: copula-models-and-tail-dependence
- Title: Copula Models & Tail Dependence
- Category: Stochastic & Probability
- Language: en
- Key Concepts: Copula Models & Tail Dependence, See Also, 1. Sklar's Theorem
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
- Key Concepts: Regression Monte Carlo, Risk measures:, Malliavin calculus:, nonlinear Feynman–Kac formula, Euler discretization, Historical and contemporary significance, Existence and uniqueness theory, sublinear expectations, Comparison theorem, adapted to the filtration, Definition and basic structure, G-expectation, Numerical methods, martingale representation, Related concepts
- References: feynman-kac, malliavin-calculus, math/martingale-representation, math/quadratic-variation, optional-decomposition, stochastic-control, stochastic-differential-equations
- Backlinks: math/spdes

## Entity: bsdes-nonlinear-pdes
- Title: Backward Stochastic Differential Equations (BSDEs) & Nonlinear PDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Backward Stochastic Differential Equations (BSDEs) & Nonlinear PDEs, Nonlinear Feynman-Kac Formula, Applications, Standard Form

## Entity: clark-ocone-formula
- Title: Clark-Ocone Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Formula, Clark-Ocone Formula, Generalizations, Financial Hedging
- Backlinks: skorokhod-integral

## Entity: math/convergence-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Diffusion approximations in biology., random, stable convergence, Diffusion convergence:, Justification of continuous-time models., deterministic, Step 4: Combine., Extension to Random Characteristics, CLT for stochastic integrals., Step 3: Characteristic function convergence., Convergence of numerical schemes., Applications, Connection to Contiguity, Specialization: Convergence to Levy Processes, Related Articles
- References: brownian-motion, characteristic-functions, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, math/contiguity-measures, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/convergence-stochastic-integrals, math/density-processes, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/martingale-problem, math/predictable-compensator, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/convergence-stochastic-integrals
- Title: Convergence of Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Discrete hedging converges to continuous hedging, any reasonable discrete-time financial model converges to a continuous-time model, and any trading strategy in the discrete model converges to the corresponding continuous-time strategy, The Problem, Convergence of Stochastic Integrals, UT (uniform tightness), Good Sequences and the UT Condition, Application: Euler Scheme Convergence, The Main Theorem, Theorem (Jakubowski-Memin-Pages; Kurtz-Protter)., Definition., Application: Discrete Hedging Convergence, good sequence, The Semimartingale Topology, The Meta-Theorem: Discrete Models Approximate Continuous Models, Related Articles
- References: finance/girsanov-semimartingales, finance/semimartingale-models, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, stochastic-differential-equations
- Backlinks: math/convergence-semimartingales, math/quadratic-variation

## Entity: feynman-kac
- Title: Feynman-Kac Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Feynman-Kac Formula, Example II: The Heat Equation (V=0), survival probability, Structural credit risk models., American option theory., backward Kolmogorov equation, Discounting and the Stochastic Discount Factor, path-integral formulation of quantum mechanics, Example I: The Black-Scholes PDE, infinitesimal generator of the diffusion, Obstacle problems in turbulence., Applications, Formulation: The Main Result, Proof Sketch: The Martingale Approach, Connection to Martingale Representation
- References: black-scholes, finance/girsanov-semimartingales, finance/optimal-stopping-american, fokker-planck-equation, math/martingale-representation, numerical-pde-finance, partial-differential-equations, path-integral, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/backward-sde, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, stochastic-control, stochastic-differential-equations, stochastic-processes

## Entity: hjm-framework
- Title: HJM (Heath-Jarrow-Morton) Framework
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Infinite-Dimensional Perspective, HJM Drift Condition, HJM (Heath-Jarrow-Morton) Framework, Forward Rate Dynamics
- References: math/spdes, stochastic-differential-equations
- Backlinks: finance/cir-hull-white, finance/libor-market-model

## Entity: fractional-brownian-motion-integration
- Title: Integration with Respect to Fractional Brownian Motion
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Integration with Respect to Fractional Brownian Motion, Financial Modeling, Pathwise Young and Rough Path Integration, Malliavin and Wick-Itô Integrals

## Entity: libor-market-model
- Title: LIBOR Market Model (LMM)
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Calibration and Implementation, LIBOR Market Model (LMM), Lognormal Forward Rates, Measure Change and Drift
- Backlinks: finance/bootstrapping-yield-curve

## Entity: local-time-tanaka
- Title: Local Time and Tanaka Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Related Topics, Dupire Local Volatility, Excursion Decomposition, Lévy's Theorem and the Reflection Principle, Yamada-Watanabe Theorem, Occupation Time Formula, Sticky Brownian Motion, Paul Lévy's theorem, Local Time and Tanaka's Formula, density of time, Tanaka's Formula, Definition and Intuition: Measuring Residence, Applications, Local Time, Optimal Stopping
- References: brownian-motion, excursion-theory, math/doob-meyer-decomposition, math/optimal-stopping-markov, stochastic-differential-equations
- Backlinks: math/quadratic-variation

## Entity: levy-ito-decomposition
- Title: Lévy-Itô Decomposition
- Category: Stochastic Calculus
- Language: en
- Key Concepts: 1. Deterministic drift, Poisson random measure is universal, Decomposition isolates sources, compensated random measure, Compound Poisson process, Lévy-Khintchine triplet, 2. Brownian component, Lévy-Khintchine formula, Poisson Random Measure, Small vs. large jump distinction is mathematical, not economic, Large jumps, Lévy process, Small jumps, Poisson process, 4. Large jumps
- References: finance/levy-processes, finance/variance-gamma, math/doleans-dade-exponential, math/infinitely-divisible-distributions, math/predictable-compensator, merton-jump-diffusion, stochastic-differential-equations
- Backlinks: math/point-processes, math/quadratic-variation, math/sde-numerical-methods, math/subordinators

## Entity: malliavin-calculus
- Title: Malliavin Calculus
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Applications: Greeks in Finance, Introduction, Clark-Ocone Formula, Malliavin Derivative, Malliavin Calculus
- Backlinks: course-math-for-ai, fbm-integration, math/backward-sde, math/quadratic-variation, math/spdes, math/stratonovich-integral, wiener-chaos

## Entity: malliavin-greeks
- Title: Malliavin Greeks
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Integration by Parts on Wiener Space, Delta and Gamma Weights, Malliavin Greeks, Advantages

## Entity: mckean-vlasov-sdes
- Title: McKean-Vlasov SDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Definition, Non-linear Fokker-Planck Equation, $N$-Particle System and Propagation of Chaos, McKean-Vlasov SDEs
- References: partial-differential-equations, stochastic-differential-equations

## Entity: numerical-methods-jump-diffusions
- Title: Numerical Methods for Jump-Diffusions
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Numerical Methods for Jump-Diffusions, Higher-Order Milstein Schemes, Euler-Maruyama with Jumps, Infinite Activity Lévy Noise
- References: central-limit-theorem, stochastic-differential-equations

## Entity: math/sde-numerical-methods
- Title: Numerical Methods for SDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Euler–Maruyama Scheme, Milstein scheme, Strong convergence, Strong vs. Weak Convergence, Multilevel Monte Carlo, split-step, The Standard [[stochastic-differential-equations|SDE]], Lie–Trotter, Runge–Kutta Methods for SDEs, Dimension, Applications, Physics Simulations, Wagner–Platen expansion, Semi-implicit, Step-size tuning
- References: brownian-bridge, diffusion-models, feynman-kac, finance/monte-carlo-method, levy-ito-decomposition, math/cameron-martin-formula, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/stratonovich-integral

## Entity: math/predictable-compensator
- Title: Predictable Compensator and Dual Predictable Projection
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Marked point processes., Example: Cox process., Filtering., Levy processes., The Predictable Triplet $(B, C, \nu)$, Compensator of a Point Process, predictable compensator, Diffusions with jumps., Example: Hawkes process., drift, Applications, Compensator of a Random Measure, The Innovation Martingale, Computing Compensators in Practice, Credit risk.
- References: brownian-motion, finance/levy-processes, finance/semimartingale-models, martingale-clt, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-martingales, math/doob-meyer-decomposition, math/functional-limit-theorems
- Backlinks: levy-ito-decomposition, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/density-processes, math/infinitely-divisible-distributions, math/martingale-problem, math/quadratic-variation, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/quadratic-variation
- Title: Quadratic Variation
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Definition and fundamental properties, Tanaka formula, Itô's formula, Path continuity, Applications in mathematical finance, Discontinuous semimartingales and jump decomposition, Quadratic Variation, polarization identity, Bilinearity, local time, Brownian motion: the canonical example, Related foundations, Realized variance, Semimartingale decomposition and predictable quadratic variation, Itô isometry
- References: levy-ito-decomposition, local-time-tanaka, malliavin-calculus, math/convergence-stochastic-integrals, math/doob-meyer-decomposition, math/predictable-compensator, stochastic-differential-equations
- Backlinks: math/backward-sde, math/stratonovich-integral

## Entity: reflected-sdes-skorokhod
- Title: Reflected SDEs & Skorokhod Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Application to American Options, The Skorokhod Problem, Reflected SDEs & Skorokhod Problem, RSDE Dynamics
- References: stochastic-control

## Entity: rough-paths
- Title: Rough Path Theory
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Rough Path Theory, The Signature of a Path, Stochastic Differential Equations (SDEs), Applications in AI: Signature Transforms, Visualization: The Signature Map, Related Topics, The Fundamental Problem, Path Networks, Rough Paths and p-variation, Terry Lyons, Signature Transform, 2 ≤ p < 3, Robustness, 3 ≤ p, Compact Representation
- References: brownian-motion, deep-rl-execution, stochastic-differential-equations
- Backlinks: fbm-integration, math/spdes, math/stratonovich-integral, path-dependent-volatility, signature-based-models

## Entity: math/stochastic-calculus/rough-path-signatures
- Title: Rough Path Theory and Signatures
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Rough Path Theory, Signature Transform, Related Topics, deterministic, Noise Robustness:, The Problem, Quantitative Finance, Rough Path Theory and Signatures, Universal Feature Map:, Invariance to Reparameterization:, Signature, What is a Path Signature?, Dimension Reduction:, Signatures in Machine Learning, Key Properties:
- References: time-series

## Entity: rough-volatility-bergomi
- Title: Rough Volatility: The Rough Bergomi Model
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Rough Bergomi (rBergomi) Model, The Volatility Smile, Rough Volatility: The Rough Bergomi Model, Computational Challenges

## Entity: semimartingales-on-manifolds
- Title: Semimartingales on Manifolds
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stratonovich Calculus, Semimartingales on Manifolds, Stochastic Development and Parallel Transport, Eells-Elworthy-Malliavin Construction
- References: manifold-learning, math/differential-geometry, stochastic-differential-equations

## Entity: math/skorokhod-topology
- Title: Skorokhod Topology and the Space D
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The J1 Topology (Skorokhod's Main Topology), cadlag, values, Tightness and Relative Compactness, Why C-Space Topology Is Insufficient, stable Levy process, completed graph, separable complete metric space, Theorem (Aldous-Rebolledo criterion)., Convergence of Discrete-Time to Continuous-Time Processes, strictly finer, jump times, The M1 Topology, Applications, Key properties of $(\mathbb{D}[0,T], J_1)$:
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, math/discrete-martingales, math/weak-convergence-prokhorov
- Backlinks: math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/martingale-problem, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/triangular-arrays-processes

## Entity: stable-processes
- Title: Stable Processes and Lévy Flights
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Alpha-Stable Distributions, stability index, Financial Crashes, Brownian Motion, Related Topics, Fractional [[spectral-graph-theory|Laplacian]], Optimization, Lévy-flight-based Metaheuristics, Applications, Stable Processes and Lévy Flights, $\alpha = 1$, Foraging Patterns, Lévy Flights vs. Brownian Motion, $\alpha = 2$, Lévy Flights
- References: extreme-value-theory, finance/levy-processes, fractional-brownian-motion, spectral-graph-theory

## Entity: stochastic-manifolds
- Title: Stochastic Calculus on Manifolds
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Information Geometry, Stochastic Calculus on Manifolds, Eells-Elworthy-Malliavin (EEM), Stochastic Differential Equations (SDEs) on Manifolds, Probability Theory, Related Topics, Stratonovich integral, The Challenge of Curvature, Applications, stochastic parallel transport, Biophysics, Itô, Stratonovich, half the Laplace-Beltrami operator, Stratonovich vs. Itô
- References: manifold-learning, math/differential-geometry, ricci-flow, stochastic-differential-equations

## Entity: stochastic-control
- Title: Stochastic Control
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Riccati differential equation, linear in state, singular, value function, [[markowitz-mean-variance|Markowitz portfolio theory]], Stochastic control, Viscosity solution, HJB equation, policy optimization, The optimal risky allocation is constant, [[numerical-pde-finance|Numerical PDE methods]], [[feynman-kac|Feynman-Kac formula]], Optimal Execution and Market Microstructure, Stochastic Control, [[stochastic-differential-equations|Stochastic differential equations]]
- References: avellaneda-stoikov, feynman-kac, finance/markowitz-mean-variance, finance/optimal-stopping-american, numerical-pde-finance, optimal-execution, reinforcement-learning, stochastic-differential-equations
- Backlinks: convex-analysis, convex-optimization, math/backward-sde, math/ode-stability, mdp, merton-portfolio, optimal-execution, path-integral-control, reflected-sdes-skorokhod, stochastic-games, stochastic-maximum-principle

## Entity: stochastic-control-partial-info
- Title: Stochastic Control with Partial Information
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Control:, Separation Principle, The Information State, Filtering:, Stochastic Control with Partial Information, Dual Control
- References: nonlinear-filtering, reinforcement-learning

## Entity: stochastic-differential-equations
- Title: Stochastic Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: drift coefficient, part of the solution, strong solution, Yamada-Watanabe Theorem, 3. Itô's Lemma, Weak Solutions, given, 5. The Martingale Problem (Stroock-Varadhan), 6. Applications, nowhere differentiable, Related Topics, Finance, Physics and Filtering, Wiener process, Physics
- References: brownian-motion, feynman-kac, geometric-brownian-motion, heston-model, math/martingale-problem, nonlinear-filtering
- Backlinks: activation-functions-math, brownian-bridge, computational-complexity-pac-bayes, conditionally-gaussian-processes, course-math-for-ai, differential-equations, diffusion-models, diffusion-sde-math, equivariant-diffusion-models, ergodic-theory-sgd, feller-processes, feynman-kac, finance/hjm-framework, finance/libor-market-model, finance/short-rate-models, fokker-planck-equation, generative-scenario-models, geometric-brownian-motion, hjm-framework, information-theory-rate-distortion, levy-ito-decomposition, local-time-tanaka, math-reasoning-chains-rl, math/backward-sde, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/interacting-particle-systems, math/martingale-problem, math/martingale-representation, math/ode-stability, math/quadratic-variation, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, math/tightness-semimartingales, mckean-vlasov-sdes, merton-portfolio, mixture-of-experts-routing, neural-operators, neural-sdes-finance, nonequilibrium-stat-mech-diffusion, nonequilibrium-statmech, nonlinear-filtering, numerical-methods-jump-diffusions, ornstein-uhlenbeck, ornstein-uhlenbeck-process, pde-hamilton-jacobi, poisson-jump-sdes, quantization-ptq-information, reasoning-models-prm-orm, regularization-implicit-bias, renormalization-group-dl, rough-paths, semimartingales-on-manifolds, speculative-decoding-medusa, spin-glasses-hopfield, stochastic-calculus-manifolds, stochastic-control, stochastic-games, stochastic-manifolds, stochastic-maximum-principle, stochastic-processes, tokenization-bpe-unigram, wentzell-freidlin, wiener-chaos

## Entity: stochastic-games
- Title: Stochastic Differential Games
- Category: Stochastic Calculus
- Language: en
- Key Concepts: saddle-point, Related Topics, Climate Change, Stochastic Differential Equations (SDEs), Isaacs Equation, Cybersecurity, Types of Equilibria, The Master Equation and MFGs, Mathematical Formulation, Visualization: Strategy Interaction, 2. Zero-Sum Games, Stochastic Differential Games, Master Equation, 1. Nash Equilibrium, Applications
- References: mean-field-games, stochastic-control, stochastic-differential-equations

## Entity: fbm-integration
- Title: Stochastic Integration for fBM
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Rough Path Theory, Fractional Volatility, Related Topics, not a semimartingale, 2. The Stratonovich-type Integral (Wick Product), Young Integration, Wick product, Long-Memory Systems, Rough Volatility, Visualization: Integration Regularity, The Challenge, not, 1. The Skorokhod Integral (Malliavin Calculus), Why It Matters for Finance and AI, Malliavin derivative
- References: fractional-brownian-motion, malliavin-calculus, rough-paths

## Entity: stochastic-maximum-principle
- Title: Stochastic Maximum Principle
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Hamiltonian and Adjoint Equations, Stochastic Maximum Principle, Comparison with HJB, Maximum Principle
- References: stochastic-control, stochastic-differential-equations

## Entity: math/spdes
- Title: Stochastic Partial Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: fixed-point arguments, Connections to Interacting Particle Systems, Walsh integral, Kardar–Parisi–Zhang (KPZ) equation, Mathematical biology, Finance, Mild Solutions and the Semigroup Approach, The Stochastic Heat Equation, variational methods, Hairer's Regularity Structures and Paracontrolled Distributions, KPZ universality class, Regularity structures, Applications and Open Problems, Introduction, Burgers Equation with Noise
- References: feynman-kac, malliavin-calculus, math/backward-sde, math/interacting-particle-systems, partial-differential-equations, rough-paths, spectral-graph-theory, stochastic-differential-equations
- Backlinks: hjm-framework

## Entity: math/stratonovich-integral
- Title: Stratonovich Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Conversion Formula: Stratonovich to Itô, calculus, Proof sketch:, without correction, $O(1)$ difference, Quadratic covariation, Rough Paths and the Stratonovich Lift, nonequilibrium dynamics, Stratonovich Integral, Stratonovich integral, kinetic energy cost, Finance, statistical mechanics, The Stratonovich Chain Rule, Itô correction
- References: brownian-motion, feynman-kac, malliavin-calculus, manifold-learning, math/cameron-martin-formula, math/quadratic-variation, math/sde-numerical-methods, rough-paths, stochastic-differential-equations
- Backlinks: wiener-chaos

## Entity: skorokhod-integral
- Title: The Skorokhod Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Skorokhod Integral, Non-Adapted Integration, Anticipative Calculus, Duality with Malliavin Derivative
- References: clark-ocone-formula

## Entity: math/martingale-problem
- Title: The Stroock-Varadhan Martingale Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Proof Sketch of Uniqueness, duality, Examples and Applications, Weak existence and uniqueness in law for the [[stochastic-differential-equations|SDE]] are equivalent to well-posedness of the martingale problem., Interacting particle systems., No reference probability space needed., Semimartingale Perspective, The Stroock-Varadhan Martingale Problem, martingale problem, Why Martingale Problems Are Easier, probability measure, Related Articles, Localization., Financial models., localization principle
- References: brownian-motion, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, stochastic-differential-equations
- Backlinks: stochastic-differential-equations

## Entity: math/tightness-semimartingales
- Title: Tightness of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: reduces tightness of the process to tightness of its characteristics, Tightness in the Skorokhod Space, Converse direction., Aldous's Condition, C-Tightness, Tightness and the Main Convergence Theorem, Tightness of Semimartingales, Diffusion approximations., Numerical schemes., The UT Condition, Applications, Control of oscillations:, Characterization., Rebolledo's Theorem, Theorem (Rebolledo, 1979).
- References: brownian-motion, finance/semimartingale-models, martingale-clt, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov, stochastic-differential-equations
- Backlinks: math/convergence-stochastic-integrals, math/triangular-arrays-processes

## Entity: math/triangular-arrays-processes
- Title: Triangular Arrays and Convergence to Processes with Independent Increments
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Infinitesimal Condition, Applications to High-Frequency Statistics, Realized volatility, Diffusion convergence:, Proof Architecture, The Functional Lindeberg-Feller Theorem, Convergence to Brownian motion (functional CLT)., Infinitesimal condition (Lindeberg):, Convergence to Levy processes., Connection to Classical Results, Uniqueness forces full convergence., Tests for the presence of a continuous martingale component, Related Articles, Identification of limits., Setting: Triangular Arrays of Processes
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/levy-processes, finance/semimartingale-models, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales
- Backlinks: math/functional-limit-theorems

## Entity: wiener-chaos
- Title: Wiener Chaos and Multiple Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Quantum Field Theory, First Wiener Chaos, Product rule, Relation to [[malliavin-calculus|Malliavin calculus]], Malliavin Derivative, Conclusion, Wiener Chaos and Multiple Stochastic Integrals, Multiple Stochastic Integrals, Theorem, Relationship with Other Structures, Wiener-Itô Decomposition, Equivalent definition, Hypercontractivity, Ornstein-Uhlenbeck Operator, [[stratonovich-integral|Stratonovich integrals]]
- References: characteristic-functions, malliavin-calculus, math/information-theory, math/stratonovich-integral, stochastic-differential-equations

## Entity: arch-models
- Title: ARCH Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: ARCH-LM Test, Prerequisites, GARCH(p,q), Tail estimation, Option Pricing, Related Topics, Parameter constraints, volatility clustering, Strict stationarity, Python Implementation, Volatility clustering, conditional, Kurtosis, ARCH Models, unconditional variance
- References: ar-models, arma-models, finance/levy-processes, garch-models, mcmc, volatility-forecasting
- Backlinks: ar-models, convolutional-volatility-resolution-clustering, finance/stylized-facts-returns, math/central-limit-theorem, math/ergodic-theorems-birkhoff, math/martingale-clt, math/stochastic-recursive-sequences

## Entity: bmo-martingales
- Title: BMO Martingales
- Category: Stochastic Processes
- Language: en
- Key Concepts: Definition, BMO Martingales, John-Nirenberg Inequality, Application: Kazamaki and Novikov

## Entity: finance/bipower-variation
- Title: Bipower Variation
- Category: Stochastic Processes
- Language: en
- Key Concepts: Bipower Variation, continuous component, tripower quarticity, Implementation, Jump Test, Bipower Variation (BPV), Convergence, Background: Realised Variance and Jumps, Heterogeneous Autoregressive, HAR-RV-J Model, Definition, Related Articles
- References: extreme-value-theory, finance/levy-processes, finance/realized-kernels, garch-models, volatility-forecasting
- Backlinks: finance/rough-volatility, finance/stylized-facts-returns, finance/variance-swaps, jump-robust-volatility

## Entity: brownian-bridge
- Title: Brownian Bridge
- Category: Stochastic Processes
- Language: en
- Key Concepts: Applications in Finance and Numerical Methods, Barrier option pricing:, Kolmogorov-Smirnov Statistics, Related Constructions, Bridge sampling:, Bridge Between Arbitrary Points, [[stochastic-differential-equations|SDE]] Representation and Numerical Singularity, Definition, Karhunen-Loève Expansion, Sequential testing:, Brownian Meanders and Excursions
- References: finance/barrier-asian-options, finance/monte-carlo-method, math/spectral-theory-operators, ornstein-uhlenbeck-process, stochastic-differential-equations
- Backlinks: course-math-for-ai, empirical-processes, math/gaussian-process-sample-paths, math/random-walks, math/sde-numerical-methods

## Entity: brownian-motion
- Title: Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: standard Wiener process, Derivative Pricing, Brownian Motion, Stationary Gaussian increments, Risk Management, Reflection Principle and Hitting Times, Sample Brownian Paths, Markov property, first passage time, Related Topics, Python Implementation, Martingale, Strong Markov, reflection principle, Constant diffusion coefficient
- References: avellaneda-stoikov, black-scholes, finance/levy-processes, geometric-brownian-motion, mcmc, schrodinger-equation
- Backlinks: avellaneda-stoikov, black-scholes, copula-models, cox-process, dv01, excursion-theory, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/change-of-numeraire, finance/coherent-risk-measures, finance/efficient-market-hypothesis, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/free-boundary-american, finance/girsanov-semimartingales, finance/hjm-framework, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/libor-market-model, finance/quasi-monte-carlo, finance/real-options, finance/realized-kernels, finance/self-similarity-fractality, finance/semimartingale-models, finance/short-rate-models, finance/stable-distributions, fokker-planck-equation, geometric-brownian-motion, innovation-process, law-iterated-logarithm, local-time-tanaka, martingale, math/absolute-continuity-process-measures, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/central-limit-theorem, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-markov-chains, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/ergodic-theorems-birkhoff, math/functional-limit-theorems, math/glivenko-cantelli, math/hausdorff-measure, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/martingale-clt, math/martingale-problem, math/martingale-representation, math/predictable-compensator, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, math/stratonovich-integral, math/tightness-semimartingales, math/triangular-arrays-processes, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, multifractal-processes, neural-odes, nonlinear-filtering, ornstein-uhlenbeck, partial-differential-equations, rough-paths, sle, stochastic-differential-equations, stochastic-processes

## Entity: finance/cir-hull-white
- Title: CIR and Hull-White Interest Rate Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: Zero-coupon bond price, Cox-Ingersoll-Ross Model, Hull-White Model, Implementation, Cox-Ingersoll-Ross (CIR), Hull-White, CIR and Hull-White Interest Rate Models, Related Articles, Feller condition
- References: finance/libor-sofr, finance/nelson-siegel-svensson, finance/swaps, hjm-framework, ornstein-uhlenbeck-process
- Backlinks: finance/bond-options-gaussian, finance/bootstrapping-yield-curve, finance/libor-market-model, finance/libor-sofr, finance/short-rate-models

## Entity: convergence-of-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Processes
- Language: en
- Key Concepts: Tightness and Aldous' Criterion, Convergence of Semimartingales, Skorokhod Space $J_1$ Topology, Convergence of Characteristics
- References: statistical-mechanics

## Entity: cox-process
- Title: Cox Process (Doubly Stochastic)
- Category: Stochastic Processes
- Language: en
- Key Concepts: CIR Intensity Path and Event Arrivals, doubly stochastic Poisson process, overdispersion, stochastic randomness at two levels, CIR Intensity Model, Affine jump-diffusion intensity, Independence assumption, Clustering, Cox Process (Doubly Stochastic), Var / Mean, intensity-based (reduced-form) credit risk models, Use Case, High-Frequency Order Flow, Related Topics, Python Implementation
- References: avellaneda-stoikov, brownian-motion, copula-models, cs01, finance/levy-processes
- Backlinks: avellaneda-stoikov, copula-models, cs01, finance/copula-models, finance/hawkes-process, finance/levy-processes, finance/semimartingale-models, math/point-processes

## Entity: dirichlet-forms
- Title: Dirichlet Forms
- Category: Stochastic Processes
- Language: en
- Key Concepts: Dirichlet form, The Core Concept: Energy and [[shannon-entropy|Entropy]], Markov Process, Related Topics, Stability, Brownian motion, Markovian, Dirichlet Form, Fractals and Manifolds, Visualization: Energy Minimization, Generator, Markov processes, Dirichlet Forms, Closed, energy
- References: finance/shannon-entropy, measure-theory, operator-semigroups

## Entity: excursion-theory
- Title: Excursion Theory
- Category: Stochastic Processes
- Language: en
- Key Concepts: Fluctuation Theory, Related Topics, The Excursion Process, Itô's Excursion Measure ($n$), Stochastic Integration, Fine Structure of Trajectories, Itô Measure, Excursion Theory, The Intuition: Slicing the Path, Kiyosi Itô, Applications, Poisson Point Process, excursions, Visualization: Excursion Decomposition
- References: brownian-motion, poisson-process
- Backlinks: local-time-tanaka

## Entity: feller-processes
- Title: Feller Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: 5. Modern Applications, probability theory, 4. Probabilistic Consequences, 1. The Functional Analytic Definition, Related Topics, Heston stochastic volatility, B. Fractional Kinetics and Anomalous Diffusion, Courrège's Theorem, Feller Processes: The Analytic Foundation of Markov Dynamics, A. Feller Processes in Quantitative Finance, Càdlàg Paths, Strong Continuity, Stopping Times, Feller Property (Invariant Space), functional analysis
- References: finance/levy-processes, operator-semigroups, spectral-graph-theory, stochastic-differential-equations
- Backlinks: martingale, operator-semigroups

## Entity: finance/fractional-fokker-planck
- Title: Fractional Fokker-Planck Equation
- Category: Stochastic Processes
- Language: en
- Key Concepts: Prerequisites, Stationarity, Option pricing under anomalous diffusion, Multiscaling, Related Topics, Visualization: Standard vs. Fractional Variance Scaling, Anomalous Diffusion in Markets, Tempered Lévy processes, Non-stationarity, Limitations and Extensions, Continuous Time Random Walks (CTRW), anomalous diffusion, VaR with memory, Parameter identification, Lévy flights
- References: brownian-motion, finance/hurst-exponent, finance/levy-processes, garch-models, geometric-brownian-motion, mcmc, spectral-graph-theory
- Backlinks: finance/hurst-exponent, finance/levy-processes, finance/self-similarity-fractality, partial-differential-equations, pinns

## Entity: freidlin-wentzell-theory
- Title: Freidlin-Wentzell Theory
- Category: Stochastic Processes
- Language: en
- Key Concepts: Small Noise Perturbation, Freidlin-Wentzell Theory, Exit Problem and Kramers' Law, Action Functional (Rate Function)
- References: statistical-mechanics

## Entity: gff
- Title: Gaussian Free Field (GFF)
- Category: Stochastic Processes
- Language: en
- Key Concepts: [[sle|Schramm-Loewner Evolution]], Statistical Mechanics, Brownian Motion, 5. Why Tier-1 Quants care, Dirichlet Energy, 1. Mathematical Definition, Spatial Correlation Structures, Related Topics, 3. The Link to SLE and Geometry, Effective Field Theory, Gaussian Free Field (GFF), 4. Discrete GFF and Algorithms, Quantum Gravity, Graph Theory, Intuition
- References: laplacian, quantum-information-entropy, schwartz-distributions, sle
- Backlinks: sle

## Entity: math/gaussian-process-sample-paths
- Title: Gaussian Process Sample Paths
- Category: Stochastic Processes
- Language: en
- Key Concepts: Application to Brownian motion, reproducing kernel Hilbert space, mean-square differentiable, Sketch of proof, Dudley's [[shannon-entropy|Entropy]] Integral, [[Brownian bridge]], Talagrand majorizing measure theorem, [[Concentration inequalities]], Key Takeaways, Talagrand, Dudley's entropy integral, Example (Brownian motion), Cameron–Martin formula, metric structure, Kolmogorov continuity theorem
- References: brownian-bridge, empirical-processes, finance/shannon-entropy, fractional-brownian-motion, math/cameron-martin-formula, math/concentration-inequalities
- Backlinks: math/nonparametric-regression

## Entity: geometric-brownian-motion
- Title: Geometric Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Prerequisites, No mean reversion, Constant volatility, Correlation structure, Related Topics, Itô's Lemma and the Closed-Form Solution, Python Implementation, Simulated Path Fan, Gaussian log-returns, Real options analysis, Itô correction, Limitations and Extensions, log-normally distributed, Euler-Maruyama Discretization, Key Statistical Properties
- References: black-scholes, brownian-motion, finance/levy-processes, heston-model, stochastic-differential-equations, volatility-forecasting
- Backlinks: black-scholes, brownian-motion, differential-equations, finance/bachelier-formula, finance/black-scholes-derivations, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hurst-exponent, finance/levy-esscher-continuous, finance/realized-kernels, finance/semimartingale-models, finance/stefan-problem-american, finance/volatility-surface, fokker-planck-equation, futures-hedging, greeks-options, math/absolute-continuity-process-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/functional-limit-theorems, math/martingale-problem, math/sequential-hypothesis-testing, merton-portfolio, risk-neutral-valuation, stochastic-differential-equations, stochastic-processes

## Entity: finance/hawkes-process
- Title: Hawkes Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Credit default cascades, Hawkes with inhibition, Flash crashes, Zumbach effect, Exponential kernel assumption, Related Topics, Volatility clustering, Python: Simulating a Hawkes Process, Mathematical Definition, Limitations and Extensions, Neural Hawkes, Multivariate Extension, Stationarity requirement, Stationarity Condition, Calibration
- References: cox-process, finance/monte-carlo-method, garch-models, geometric-brownian-motion
- Backlinks: finance/order-flow-imbalance, finance/semimartingale-models, lob-propagators, market-microstructure, multivariate-hawkes, queue-reactive-models

## Entity: finance/hurst-exponent
- Title: Hurst Exponent
- Category: Stochastic Processes
- Language: en
- Key Concepts: Multifractal Detrended Fluctuation Analysis (MFDFA), Market Regimes Visualization, Market efficiency testing, Mathematical Foundation: R/S Analysis, Time-varying H, Related Topics, $H = 0.5$, Spurious long memory, $0.5 < H < 1$, Detrended Fluctuation Analysis (DFA), Non-stationarity, Multifractal Model of Asset Returns (MMAR), Limitations and Extensions, Regime classification, Strategy selection
- References: finance/fractional-fokker-planck, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, geometric-brownian-motion, hidden-markov-models
- Backlinks: arima-models, finance/fisher-transform, finance/fractional-fokker-planck, finance/hilbert-huang-transform, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, finance/self-similarity-fractality, finance/stable-distributions, finance/stylized-facts-returns, fractional-cointegration

## Entity: finance/hyperbolic-distributions
- Title: Hyperbolic Distributions and Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Lévy process with GH increments, semi-heavy tails, Normal, Financial application, Hyperbolic Distributions and Processes, Generalized hyperbolic distributions, heavy tails, finite moments of all orders, and analytical formulas, infinitely divisible, [[stable-distributions|Stable]], Tail behaviour, Credit models, Pricing model calibration, Variance Gamma, Generalized Hyperbolic (GH), VaR and CVaR
- References: brownian-motion, cornish-fisher-cvar, finance/fft, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/levy-processes
- Title: Lévy Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Diffusion, Variance Gamma (VG) Process, Lévy Processes, The Lévy-Khintchine Representation, Drift, Lévy triplet, Correlation structure, Compound Poisson Process, Background and Motivation, Related Topics, Lévy process, Mathematical Framework: The Lévy-Itô Decomposition, Limitations and Extensions, Martingale condition, Definition and Properties
- References: cox-process, finance/fractional-fokker-planck, finance/monte-carlo-method, heston-model, ornstein-uhlenbeck-process
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, brownian-motion, characteristic-functions, clt, cornish-fisher-cvar, cox-process, feller-processes, finance/bipower-variation, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/merton-jump-diffusion, finance/variance-gamma, finance/zeta-field, geometric-brownian-motion, kelly-criterion, levy-ito-decomposition, levy-structured-products, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/martingale-representation, math/predictable-compensator, math/skorokhod-topology, math/stochastic-recursive-sequences, math/subordinators, math/triangular-arrays-processes, math/wiener-hopf-factorization, multifractal-processes, numeraire-invariant-hedging, occupation-measures-local-times, ornstein-uhlenbeck-process, stable-processes, stochastic-processes

## Entity: math/markov-chain-mixing
- Title: Markov Chain Mixing Times
- Category: Stochastic Processes
- Language: en
- Key Concepts: Spectral Gap and Convergence Rate, Conductance, Minimum stationary probability, Upper Bounds and Hitting Times, reversible, total variation distance, MCMC and Convergence Diagnostics, detailed balance condition, Mixing Time Definition, preconditioning, Total Variation Distance and Stationarity, Card Shuffling: Diaconis' Classical Result, spectral gap $\approx 1 / \log n$, Geometry of state space:, Summary of Key Results
- References: central-limit-theorem, math/concentration-inequalities, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/renewal-theory, math/spectral-theory-operators
- Backlinks: math/coupling-methods, math/geometric-ergodicity, math/interacting-particle-systems, math/spectral-theory-operators, queuing-theory, random-walks-groups, time-series

## Entity: finance/merton-jump-diffusion
- Title: Merton Jump-Diffusion Model
- Category: Stochastic Processes
- Language: en
- Key Concepts: Model, Implementation, Option Pricing Formula, Merton (1976) Jump-Diffusion model, Merton Jump-Diffusion Model, Related Articles
- References: black-scholes, finance/levy-processes, finance/variance-gamma, heston-model

## Entity: multifractal-processes
- Title: Multifractal Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Related Topics, Brownian motion, Fluid Turbulence, Multifractal Spectrum ($f(\alpha)$), Network Traffic, Financial Markets (MSMR), Multifractal Process, Applications in Finance and Physics, Multifractal Processes, Visualization: Monofractal vs. Multifractal, Multifractal Random Walk, The Limitation of Monofractals, Multifractal Cascade Models, Multiplicative Cascade
- References: brownian-motion, finance/levy-processes, fractional-brownian-motion

## Entity: occupation-measures-local-times
- Title: Occupation Measures and Local Times of Lévy Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Occupation Measures and Local Times of Lévy Processes, Tanaka's Formula and Discontinuities, Fourier Analytic Conditions, Occupation Measure
- References: finance/levy-processes, fourier-transform

## Entity: ornstein-uhlenbeck
- Title: Ornstein-Uhlenbeck Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Related Topics, $W_t$, mean-reverting, Ornstein-Uhlenbeck Process, AI (Diffusion Models), Finance (Vasicek Model), Physics, stationary Gaussian distribution, $\sigma > 0$ (Volatility), Key Properties, 1. Mean Reversion, 3. Autocovariance, $\theta > 0$ (Rate of mean reversion), Applications, The [[stochastic-differential-equations|SDE]] Definition
- References: brownian-motion, math/stationary-wide-spectral, stochastic-differential-equations
- Backlinks: course-math-for-ai, stochastic-processes

## Entity: ornstein-uhlenbeck-process
- Title: Ornstein-Uhlenbeck Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Multidimensional OU, Negative values, Ornstein-Uhlenbeck Process, Mean-Reverting Property, half-life, Stationary Distribution, Vasicek (1977), long-term mean, Related Topics, Python: Simulation and Parameter Estimation, Exact Solution via Integrating Factor, Background and History, Limitations and Extensions, Pairs Trading Spread Model, stationary (invariant) distribution
- References: black-scholes, finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, heston-model, hidden-markov-models, mcmc, pairs-trading, stochastic-differential-equations
- Backlinks: brownian-bridge, diffusion-models, fastest-mean-reversion, finance/cir-hull-white, finance/levy-processes, finance/longstaff-schwartz, finance/particle-filter, fokker-planck-equation, pairs-trading, pca-statarb

## Entity: math/point-processes
- Title: Point Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Papangelou conditional intensity, intensity function, moment measure, Palm distribution, stationary and ergodic, Queueing theory, Campbell's Theorem and Moment Measures, Poisson marginals, Hawkes Processes: Self-Exciting Dynamics, Janossy Densities and Papangelou Intensity, kernel, Finance, Superposition and Thinning Theorems, Superposition, Spatial statistics
- References: cox-process, levy-ito-decomposition, math/branching-processes, math/kolmogorov-equations-ctmc, math/renewal-theory
- Backlinks: math/survival-analysis, poisson-process

## Entity: poisson-process
- Title: Poisson Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Start, Reliability, Independent Increments, Related Topics, Finance, Superposition, 2. Waiting Times (Arrival Times), Applications, counting random events, Exponential Distribution, 3. Superposition and Thinning, Physics, Thinning, memoryless, Definition
- References: distributions-zoo, math/point-processes, math/renewal-theory
- Backlinks: course-math-for-ai, distributions-zoo, excursion-theory, exponential-distribution, queuing-theory, stochastic-processes

## Entity: math/random-walks
- Title: Random Walks
- Category: Stochastic Processes
- Language: en
- Key Concepts: transient, random walk, Electrical networks, Simple Symmetric Random Walk, characteristic function, Pólya's Theorem, Wiener–Hopf factorization, return probability, Donsker's Theorem and Functional Limit Theory, Renewal theory, recurrent, Arc-sine Law I, Strassen's law of the iterated logarithm, Reflection Principle and Ballot Problem, General Random Walks and Cramér Condition
- References: brownian-bridge, central-limit-theorem, math/discrete-martingales, math/functional-limit-theorems, math/large-deviations-cramer, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/rough-volatility
- Title: Rough Volatility and Fractional Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Rough Volatility and Fractional Brownian Motion, Rough Bergomi Model (Bayer, Friz, Gatheral 2016), Related Articles, Implementation, Empirical finding, Rough Volatility, Implied vol skew, Fractional Brownian Motion
- References: finance/bipower-variation, finance/sabr-model, finance/variance-gamma, heston-model
- Backlinks: deep-hedging, finance/dupire-local-vol, garch-models, neural-sdes-finance, volatility-arbitrage, volatility-smile

## Entity: finance/self-similarity-fractality
- Title: Self-Similarity and Fractality of Financial Series
- Category: Stochastic Processes
- Language: en
- Key Concepts: financial time series are self-similar, rough volatility, prices themselves, Regularization, Log-absolute returns, Main theoretical issue with fBm as a price model:, Empirical $H$ in finance:, R/S analysis, "Modelling without arbitrage", not a semimartingale, The Hurst exponent and memory, Rough volatility, Self-similar processes, pure, long memory
- References: brownian-motion, finance/bs-market-self-financing, finance/fractional-fokker-planck, finance/ftap-first-fundamental-theorem, finance/hurst-exponent, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns, math/stationary-wide-spectral

## Entity: small-ball-probabilities
- Title: Small Ball Probabilities for Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Small Ball Probabilities for Stochastic Processes, Asymptotic Definition, Applications, Connection to [[shannon-entropy|Entropy]] and Spectra
- References: finance/shannon-entropy, quantization

## Entity: finance/stable-distributions
- Title: Stable Distributions and α-Stable Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: asymmetry, characteristic function, Calibration complexity., Financial application, Parametric heavy tails, Infinite variance., Key property., No unique EMM., α-stable Lévy processes, first mathematically rigorous way, The stability property, Generalized Central Limit Theorem, stable distribution, heavy tails, Characteristic function
- References: brownian-motion, cornish-fisher-cvar, extreme-value-theory, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/self-similarity-fractality, finance/stylized-facts-returns
- Backlinks: finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/stylized-facts-returns, math/central-limit-theorem, math/infinitely-divisible-distributions, math/local-limit-theorems, math/lundberg-cramer-ruin, math/triangular-arrays-processes

## Entity: stochastic-processes
- Title: Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Key Classes of Processes, Stochastic Processes, Lévy Processes, Mathematical Tools, Engineering, Filtrations, Discrete-time processes, Continuous state space, Related Topics, Martingales, Finance, [[poisson-process]], By State Space $S$, Applications, [[brownian-motion]] (Wiener Process)
- References: brownian-motion, ergodic-theory, feynman-kac, finance/levy-processes, geometric-brownian-motion, markov-chains, math/discrete-markov-chains, math/discrete-martingales, math/kolmogorov-equations-ctmc, math/martingale-representation, math/stationary-wide-spectral, ornstein-uhlenbeck, poisson-process, random-walks, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: kuramoto-model, law-iterated-logarithm

## Entity: math/subordinators
- Title: Subordinators
- Category: Stochastic Processes
- Language: en
- Key Concepts: inverse, Connection to Renewal Theory, stochastic time clocks, Stable subordinator., renewal process, Bochner Subordination, Inverse Subordinators and Mittag-Leffler Processes, Time-deformed models, The Laplace Exponent, Bochner subordination, Subordinators, Poisson process., Lévy measure, Compound Poisson process., Laplace exponent
- References: finance/levy-processes, fractional-brownian-motion, levy-ito-decomposition, math/branching-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/variance-gamma
- Title: Variance Gamma Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Characteristic function, Variance Gamma Process, Related Articles, Parameter Effects, Option Pricing via FFT, Definition, Variance Gamma (VG)
- References: finance/levy-processes, heston-model, merton-jump-diffusion
- Backlinks: finance/barrier-asian-options, finance/merton-jump-diffusion, finance/rough-volatility, levy-ito-decomposition, svi-model

## Entity: volatility-forecasting
- Title: Volatility Forecasting (GARCH, HAR)
- Category: Stochastic Processes
- Language: en
- Key Concepts: QLIKE Loss Function, Intraday risk, bipower variation, Stationarity, GARCH(1,1), HAR stationarity, Persistence, VaR/ES computation, GARCH tail underestimation, Jump contamination, ML forecasting, Variance risk premium, Related Topics, volatility clustering, Asymmetry (leverage effect)
- References: finance/monte-carlo-method, finance/realized-kernels, finance/value-at-risk, garch-models, heston-model, mcmc, transformer-architecture
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, arma-models, convolutional-volatility-resolution-clustering, cornish-fisher-cvar, finance/bipower-variation, finance/multivariate-hmm, finance/realized-kernels, finance/sabr-model, finance/singular-spectral-analysis, finance/variance-swaps, finance/wavelet-transform, geometric-brownian-motion, kalman-filter, temporal-fusion-transformer, volatility-modulated-spectral-surface

## Entity: finance/zeta-field
- Title: Zeta Field
- Category: Stochastic Processes
- Language: en
- Key Concepts: Empirical testing, Multifractal scaling, Zeros, Connection to RMT, Cross-disciplinary research, GUE Statistics and Eigenvalue Spacing, Multifractal risk, Dirichlet Series Model for Asset Prices, Critical strip, critical strip, Non-Hermitian extensions, Long-memory modeling, Euler product, Riemann-Siegel Z-Function, Related Topics
- References: finance/levy-processes, finance/random-matrix-theory, finance/shannon-entropy, finance/spectral-analysis, math/spectral-theory-operators, quantum-entanglement

## Entity: financial-entropy
- Title: Entropy and Market Complexity
- Category: Time Series
- Language: en
- Key Concepts: Transfer Entropy, 3. Approximate Entropy (ApEn) and Sample Entropy, structure, market regime indicator, 1. Shannon [[shannon-entropy|Entropy]] as Predictability, Anomalies, 4. Transfer Entropy and Causality, Related Topics, LZ = 1, Visualization: Entropy during a Crash, variance, [[shannon-entropy|Entropy]] in Finance: Lempel-Ziv and Market Complexity, Lempel-Ziv complexity, predictability, LZ is High
- References: causal-inference, finance/lempel-ziv-complexity, finance/shannon-entropy, nlp-financial-analysis
- Backlinks: entropy-pooling

## Entity: fractional-cointegration
- Title: Fractional Cointegration
- Category: Time Series
- Language: en
- Key Concepts: Fractional Cointegration Mechanism, Related Topics, Long Memory, ARFIMA, The Long Memory Problem, fractionally cointegrated, half-life of mean reversion, long-range dependence, Fractional Cointegration, ARFIMA Models, Trading Application, Visualization: Decay Speeds
- References: finance/hurst-exponent, fractional-brownian-motion, pairs-trading

## Entity: garch-models
- Title: GARCH and ARCH Models
- Category: Time Series
- Language: en
- Key Concepts: Related Topics, The Persistence, IGARCH, ARCH, Deep GARCH, 4. Estimation and AI Integration, Insight, 1. ARCH Model (Engle, 1982), GARCH, Leverage Effect, 3. Asymmetric GARCH (GJR-GARCH), 2. GARCH Model (Bollerslev, 1986), Maximum Likelihood (MLE), ARCH and GARCH Models: Volatility Clustering, Visualization: Volatility Spikes
- References: finance/rough-volatility, mle, time-series
- Backlinks: arch-models, convolutional-volatility-resolution-clustering, finance/bipower-variation, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hidden-markov-models, finance/realized-kernels, finance/stylized-facts-returns, finance/value-at-risk, finance/variance-swaps-vix, generative-scenario-models, math/ergodic-theorems-birkhoff, math/martingale-clt, math/stochastic-recursive-sequences, temporal-fusion-transformer, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: hmm-particle-filters
- Title: Hidden Markov Models & Particle Filters
- Category: Time Series
- Language: en
- Key Concepts: Update (Weight), Resample (Darwinian Selection), Particle Filters, Related Topics, Hidden Markov Models & Particle Filters, Particle Filter (Sequential Monte Carlo), Transition Matrix, Kalman Filter, Hidden Markov Models (HMM), Filtering, Pairs Trading, The Algorithm:, Visualization: Particle Survival, Viterbi algorithm, Application in HFT and StatArb
- References: mcmc, regime-switching-factors
- Backlinks: hmm, lead-lag-analysis, lsv-model, mcmc, path-dependent-volatility, total-probability-variance, vpin

## Entity: jump-robust-volatility
- Title: Jump-Robust Realized Variance
- Category: Time Series
- Language: en
- Key Concepts: Why It Matters: Identifying Jumps, 1. Bipower Variation (BV), Related Topics, MedRV, The Problem with Standard RV, Jump-Robust Estimators, Visualization: Volatility vs. Jumps, volatility risk premium, Realized Variance (RV), Jump-Robust Realized Variance (MinRV and MedRV), 2. MinRV and MedRV (Andersen et al., 2012), MinRV, Price Jumps
- References: finance/bipower-variation, finance/realized-kernels, merton-jump-diffusion

## Entity: morse-theory
- Title: Morse Theory
- Category: Topology
- Language: en
- Key Concepts: loss landscape, The Fundamental Theorem, Gradient Flows, index, Related Topics, topology of a [[manifold-learning|manifold]], The Morse Index, Mode Connectivity, Morse Theory and Neural Networks, Visualization: Reconstructing a Torus, CW complex, Index $n$, non-degenerate, Topology of Loss Surfaces, Morse Functions
- References: manifold-learning, math/algebraic-topology, math/differential-geometry, math/spectral-theory-operators, training-dynamics

## Entity: persistent-homology
- Title: Persistent Homology
- Category: Topology
- Language: en
- Key Concepts: Persistent Homology, Stability Theorem, Topology of Data, Filtration and Homology, Barcodes and Persistence Diagrams

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
- Key Concepts: High-Frequency Lead-Lag StatArb, See Also
- References: course-quant-trading, high-frequency-trading-and-orderbook, statistical-arbitrage-and-pairs-trading

## Entity: quant-brainteasers-handbook
- Title: Quant Brainteasers Python Handbook
- Category: Trading Theory
- Language: en
- Key Concepts: Quant Brainteasers Python Handbook, See Also, 1. Dice Re-roll Game Simulation
- References: course-quant-trading, optimal-stopping-and-kelly, quant-market-making-mechanics
- Backlinks: optimal-stopping-and-kelly, quant-firm-interview-math-brainteasers, quant-interview-cheat-sheet, quant-trading-interview-roadmap, statistical-arbitrage-and-pairs-trading

## Entity: statistical-arbitrage-and-pairs-trading
- Title: Statistical Arbitrage & Pairs Trading
- Category: Trading Theory
- Language: en
- Key Concepts: See Also, Cointegration:, Tests:, 1. Cointegration vs Correlation, Correlation:, Statistical Arbitrage & Pairs Trading, 2. Ornstein-Uhlenbeck Process
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
- Key Concepts: Closure:, representations, Why does it matter for Deep Learning?, Identity:, mathematically embedding equivariance into the architecture, physically correct guarantees, 2. Equivariance, Important Lie Groups (Continuous Groups) in AI:, Translation group, Steerable CNNs, Group Equivariant Neural Networks (G-CNNs), Inductive Bias, Geometric Deep Learning, What is a Group?, Sample Efficiency
- Backlinks: ai-theory/spatial/equivariant-gnn

## Entity: math/analysis-geometry/information-geometry
- Title: Information Geometry
- Category: Unknown
- Language: en
- Key Concepts: K-FAC, Information Geometry, [[llm]] Latent Spaces:, Statistical [[manifold-learning|Manifold]] and Fisher Metric, Related Topics, Riemannian manifolds, Cramér-Rao Bound:, TRPO/PPO, Information Bottleneck:, Dual Connections and $\alpha$-Geometry, dual connections, m-connection ($\alpha=-1$):, Fisher Information Matrix, Amari-Chentsov tensor, e-connection ($\alpha=1$):
- References: convex-optimization, fisher-information, llm, manifold-learning, optimal-transport, transformer-architecture
- Backlinks: convex-analysis, course-math-for-ai, fisher-information, language-models/safety/rlhf-dpo, manifold-learning, math/bayesian-asymptotics, math/cramer-rao-bound, math/differential-geometry, math/minimax-estimation, math/neyman-pearson, maximum-entropy, multivariable-calculus

## Entity: geometric-mechanics-lie-groups
- Title: Geometric Mechanics: Control on Lie Groups
- Category: ai-physics
- Language: en
- Key Concepts: Geometric Mechanics: Control on Lie Groups, Conclusion, Differential and Information Geometry, Symplectic Geometry and Hamiltonian Mechanics
- References: convex-optimization, manifold-learning

## Entity: neural-operators-fno
- Title: Neural Operators: FNO vs. DeepONet
- Category: ai-physics
- Language: en
- Key Concepts: Neural Operators: FNO vs. DeepONet, Conclusion, Random Matrix Theory and Spectral Dynamics, Differential and Information Geometry
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: pinns-convergence
- Title: Physics-Informed Neural Networks (PINNs)
- Category: ai-physics
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Conclusion, Physics-Informed Neural Networks (PINNs), Differential and Information Geometry
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: symplectic-hamiltonian-nn
- Title: Symplectic Geometry & Hamiltonian Neural Networks
- Category: ai-physics
- Language: en
- Key Concepts: Symplectic Geometry & Hamiltonian Neural Networks, Conclusion, Differential and Information Geometry, Symplectic Geometry and Hamiltonian Mechanics
- References: convex-optimization, manifold-learning

## Entity: mechanistic-interpretability-sae
- Title: AI Safety: Mechanistic Interpretability of SAEs
- Category: ai-theory
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, AI Safety: Mechanistic Interpretability of SAEs, Random Matrix Theory and Spectral Dynamics
- References: attention-mechanisms, math/spectral-theory-operators

## Entity: activation-functions-math
- Title: Activation Functions: SwiGLU & GeLU
- Category: ai-theory
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Activation Functions: SwiGLU & GeLU, Stochastic Dynamics and Statistical Mechanics
- References: attention-mechanisms, stochastic-differential-equations

## Entity: ergodic-theory-sgd
- Title: Ergodic Theory of Stochastic Gradient Descent
- Category: ai-theory
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Conclusion, Ergodic Theory of Stochastic [[convex-optimization|Gradient Descent]], Differential and Information Geometry
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: gnn-weisfeiler-lehman
- Title: Graph Neural Networks: Weisfeiler-Lehman
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Algebraic Topology, Sheaves, and Category Theory, Graph Neural Networks: Weisfeiler-Lehman, Random Matrix Theory and Spectral Dynamics
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: higher-category-theory-ai
- Title: Higher Category Theory: N-categories in AI
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Higher Category Theory: N-categories in AI, Algebraic Topology, Sheaves, and Category Theory
- References: spectral-graph-theory

## Entity: multimodal-alignment-clip
- Title: Multimodal Alignment: CLIP Math
- Category: ai-theory
- Language: en
- Key Concepts: Optimal Transport and Wasserstein Metrics, Conclusion, Differential and Information Geometry, Multimodal Alignment: CLIP Math
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
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Conclusion, Normalization Layers: BatchNorm vs RMSNorm, Differential and Information Geometry
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: regularization-implicit-bias
- Title: Regularization: Implicit Bias of GD
- Category: ai-theory
- Language: en
- Key Concepts: Regularization: Implicit Bias of GD, Conclusion, Stochastic Dynamics and Statistical Mechanics, Differential and Information Geometry
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: renormalization-group-dl
- Title: Renormalization Group in Deep Learning
- Category: ai-theory
- Language: en
- Key Concepts: Renormalization Group in Deep Learning, Quantum Field Theory and Renormalization Group, Conclusion, Stochastic Dynamics and Statistical Mechanics
- References: stochastic-differential-equations

## Entity: spin-glasses-hopfield
- Title: Spin Glasses & Hopfield Networks
- Category: ai-theory
- Language: en
- Key Concepts: Spin Glasses & Hopfield Networks, Conclusion, Stochastic Dynamics and Statistical Mechanics, Random Matrix Theory and Spectral Dynamics
- References: math/spectral-theory-operators, stochastic-differential-equations

## Entity: geometry-loss-landscapes
- Title: The Geometry of Deep Learning Loss Landscapes
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, The Geometry of Deep Learning Loss Landscapes, Random Matrix Theory and Spectral Dynamics, Differential and Information Geometry
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: math-reasoning-chains-rl
- Title: The Mathematics of Reasoning Chains: RL Reward Modeling
- Category: ai-theory
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Stochastic Dynamics and Statistical Mechanics, The Mathematics of Reasoning Chains: RL Reward Modeling
- References: attention-mechanisms, stochastic-differential-equations

## Entity: topos-neural-networks
- Title: Topos Theory for Neural Networks
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Topos Theory for Neural Networks, Algebraic Topology, Sheaves, and Category Theory
- References: spectral-graph-theory

## Entity: vision-transformers-scaling
- Title: Vision Transformers: Scaling Laws of ViT
- Category: ai-theory
- Language: en
- Key Concepts: Quantum Field Theory and Renormalization Group, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Vision Transformers: Scaling Laws of ViT
- References: attention-mechanisms

## Entity: weight-initialization-signal
- Title: Weight Initialization: Signal Propagation
- Category: ai-theory
- Language: en
- Key Concepts: Quantum Field Theory and Renormalization Group, Conclusion, Weight Initialization: Signal Propagation, Random Matrix Theory and Spectral Dynamics
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
- Key Concepts: Optimal Transport and Wasserstein Metrics, Conclusion, Computational Complexity: PAC-Bayes Bounds, Stochastic Dynamics and Statistical Mechanics
- References: stochastic-differential-equations

## Entity: distributed-training-3d
- Title: Distributed Training: 3D Parallelism Math
- Category: cs
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Optimal Transport and Wasserstein Metrics, Conclusion, Distributed Training: 3D Parallelism Math
- References: attention-mechanisms

## Entity: information-theory-rate-distortion
- Title: Information Theory: Rate-Distortion & VAEs
- Category: cs
- Language: en
- Key Concepts: Conclusion, Information Theory: Rate-Distortion & VAEs, Stochastic Dynamics and Statistical Mechanics, Differential and Information Geometry
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: quantum-computing-vqe
- Title: Quantum Computing: VQE Math
- Category: cs
- Language: en
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Symplectic Geometry and Hamiltonian Mechanics, Quantum Computing: VQE Math
- References: math/spectral-theory-operators
- Backlinks: research/quantum-risk-management

## Entity: quantum-machine-learning-kernels
- Title: Quantum Machine Learning: Quantum Kernels
- Category: cs
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Quantum Machine Learning: Quantum Kernels, Symplectic Geometry and Hamiltonian Mechanics
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

## Entity: quant-interview-roadmap
- Title: Дорожная Карта Подготовки Quant Researcher / Trader
- Category: finance
- Language: ru
- Key Concepts: Дорожная Карта Подготовки Quant Researcher / Analyst / Trader, 2. Блок Программирования (Python & Алгоритмы), Работа со строками и логами:, Order Book (Биржевой стакан):, Adverse Selection (Неблагоприятный выбор):, 1. Блок Математики и Вероятностей, 3.2 Рекомендуемые видеокурсы и книги, Обработка временных рядов в `pandas` & `numpy`:, Условная вероятность и формула Байеса:, 2.1 Обязательный стек алгоритмов и структур данных, Bid-Ask Spread:, Базовые структуры (сложность операций):, Предельные теоремы:, 3. Блок Трейдинга и Микроструктуры Рынка, 3.1 Ключевые понятия

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
- Backlinks: black-scholes, blacks-model, conditionally-gaussian-processes, convertible-bonds, finance/asymptotic-expansion-finance, finance/black-scholes-derivations, finance/complete-incomplete-markets, finance/delta-hedging-practice, finance/dispersion-trading, finance/dupire-local-vol, finance/eigenportfolio-rmt, finance/follmer-schweizer, finance/gan, finance/girsanov-semimartingales, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/levy-processes, finance/longstaff-schwartz, finance/merton-jump-diffusion, finance/nelson-siegel-svensson, finance/particle-filter, finance/real-options, finance/rough-volatility, finance/sabr-model, finance/self-similarity-fractality, finance/semimartingale-models, finance/stylized-facts-returns, finance/upper-lower-hedging-prices, finance/variance-gamma, finance/variance-swaps, finance/volatility-surface, garman-kohlhagen, geometric-brownian-motion, greeks-options, hyperbolic-vol-geometry, lsv-model, math/absolute-continuity-process-measures, math/convergence-semimartingales, math/functional-limit-theorems, math/stable-convergence, nonlinear-filtering, option-strategies, ornstein-uhlenbeck-process, risk-neutral-valuation, stochastic-differential-equations, svi-model, volatility-forecasting, volatility-smile

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
- Key Concepts: [[attention-mechanisms|Attention]] Mechanisms: Linear [[attention-mechanisms|Attention]], Architecture Mechanics: Attention and Dimensionality, Conclusion, Random Matrix Theory and Spectral Dynamics
- References: attention-mechanisms, math/spectral-theory-operators

## Entity: deepseek-v3-mla-compression
- Title: DeepSeek-V3 Architecture: MLA & Deep-Compression
- Category: language-models
- Language: en
- Key Concepts: DeepSeek-V3 Architecture: MLA & Deep-Compression, Conclusion, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality
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
- Key Concepts: Long Context: YaRN and LongRoPE, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Differential and Information Geometry
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
- Key Concepts: Mixture of Experts: Routing Math, Conclusion, Optimal Transport and Wasserstein Metrics, Stochastic Dynamics and Statistical Mechanics
- References: stochastic-differential-equations

## Entity: model-merging-procrustes
- Title: Model Merging: Geometry of Weight Space Alignment
- Category: language-models
- Language: en
- Key Concepts: Model Merging: Geometry of Weight Space Alignment, Optimal Transport and Wasserstein Metrics, Conclusion, Differential and Information Geometry
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
- Key Concepts: Reasoning Models: PRM vs. ORM, Conclusion, Stochastic Dynamics and Statistical Mechanics
- References: stochastic-differential-equations

## Entity: speculative-decoding-medusa
- Title: Speculative Decoding: Medusa vs. EAGLE
- Category: language-models
- Language: en
- Key Concepts: Speculative Decoding: Medusa vs. EAGLE, Conclusion, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Stochastic Dynamics and Statistical Mechanics
- References: attention-mechanisms, stochastic-differential-equations

## Entity: tokenization-bpe-unigram
- Title: Tokenization: BPE vs. Unigram
- Category: language-models
- Language: en
- Key Concepts: Tokenization: BPE vs. Unigram, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Stochastic Dynamics and Statistical Mechanics
- References: attention-mechanisms, stochastic-differential-equations

## Entity: quantization-ptq-information
- Title: Quantization: Information Loss in PTQ
- Category: llm-infra
- Language: en
- Key Concepts: [[quantization]]: Information Loss in PTQ, Optimal Transport and Wasserstein Metrics, Conclusion, Stochastic Dynamics and Statistical Mechanics
- References: quantization, stochastic-differential-equations

## Entity: algebraic-geometry-slt
- Title: Algebraic Geometry in Singular Learning Theory
- Category: math
- Language: en
- Key Concepts: Conclusion, Algebraic Topology, Sheaves, and Category Theory, Algebraic Geometry in Singular Learning Theory, Random Matrix Theory and Spectral Dynamics
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: algebraic-topology-persistent
- Title: Algebraic Topology: Persistent Laplacian & Persistent Bundles
- Category: math
- Language: en
- Key Concepts: Conclusion, Algebraic Topology: Persistent [[spectral-graph-theory|Laplacian]] & Persistent Bundles, Algebraic Topology, Sheaves, and Category Theory, Random Matrix Theory and Spectral Dynamics
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
- Key Concepts: Conclusion, Functional Analysis: C*-algebras, Random Matrix Theory and Spectral Dynamics, Symplectic Geometry and Hamiltonian Mechanics
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
- Key Concepts: Information Geometry: Natural Gradient, Conclusion, Differential and Information Geometry
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
- Key Concepts: Conclusion, Non-commutative Geometry, Algebraic Topology, Sheaves, and Category Theory, Symplectic Geometry and Hamiltonian Mechanics
- References: spectral-graph-theory

## Entity: number-theory-l-functions
- Title: Number Theory: L-functions & Langlands
- Category: math
- Language: en
- Key Concepts: Conclusion, Algebraic Topology, Sheaves, and Category Theory, Random Matrix Theory and Spectral Dynamics, Number Theory: L-functions & Langlands
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: optimal-transport-gromov-wasserstein
- Title: Optimal Transport: Gromov-Wasserstein Distance
- Category: math
- Language: en
- Key Concepts: Optimal Transport: Gromov-Wasserstein Distance, Optimal Transport and Wasserstein Metrics, Conclusion, Differential and Information Geometry
- References: convex-optimization, manifold-learning

## Entity: pde-hamilton-jacobi
- Title: Partial Differential Equations: Hamilton-Jacobi
- Category: math
- Language: en
- Key Concepts: Conclusion, Partial Differential Equations: Hamilton-Jacobi, Stochastic Dynamics and Statistical Mechanics, Symplectic Geometry and Hamiltonian Mechanics
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
- Key Concepts: Random Matrix Theory: Marchenko-Pastur Law, Conclusion, Random Matrix Theory and Spectral Dynamics
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
- Key Concepts: Conclusion, Stochastic Calculus on Manifolds, Stochastic Dynamics and Statistical Mechanics, Differential and Information Geometry
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
- Key Concepts: Conclusion, Fluid Dynamics: Navier-Stokes Existence, Random Matrix Theory and Spectral Dynamics, Differential and Information Geometry
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
- Key Concepts: Quantum Field Theory and Renormalization Group, Conclusion, Quantum Field Theory on Curved Spacetime, Differential and Information Geometry
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
- Key Concepts: Conclusion, String Theory: Calabi-Yau Manifolds, Algebraic Topology, Sheaves, and Category Theory, Differential and Information Geometry
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
- Key Concepts: Supersymmetry (SUSY): Formalism, Quantum Field Theory and Renormalization Group, Conclusion, Symplectic Geometry and Hamiltonian Mechanics

## Entity: yang-mills-mass-gap
- Title: Yang-Mills Mass Gap
- Category: physics
- Language: en
- Key Concepts: Yang-Mills Mass Gap

## Entity: hyperbolic-vol-geometry
- Title: Correlation Is a Hyperbolic Distance
- Category: research
- Language: en
- Key Concepts: Open Questions, Insights for AI, Context, Objective, Methodology, Theoretical:, Tools:, Current Findings, References, Numerical:
- References: finance/sabr-model, heston-model, math/differential-geometry

## Entity: research/mla-financial-reasoning
- Title: Impact of MLA Compression on Financial Time-Series Reasoning
- Category: research
- Language: en
- Key Concepts: Open Questions, Models, Insights for AI, Context, Objective, Metric, Methodology, Dataset, Current Findings, References
- References: attention-mechanisms, deepseek-v3-mla-compression, kv-cache-compression, llm-financial-analysis, quantization, rag, tool-use

## Entity: levy-structured-products
- Title: Lévy Processes and Stochastic-Volatility Models for Structured-Product Pricing
- Category: research
- Language: en
- Key Concepts: Open Questions, Insights for AI, Context, Objective, Simulation:, Methodology, Pricing:, Tools:, Current Findings, References, Calibration:
- References: finance/levy-processes

## Entity: student-t-hmm-bond-regimes
- Title: Student-t HMM for Bank Bond Portfolio Regimes
- Category: research
- Language: en
- Key Concepts: Open Questions, Model:, Data:, Insights for AI, Context, Objective, Methodology, Tools:, Current Findings, References, Validation:
- References: finance/value-at-risk, hidden-markov-models

## Entity: research/quantum-risk-management
- Title: Квантовые алгоритмы в риск-менеджменте
- Category: research
- Language: ru
- Key Concepts: Инсайты для ИИ, Открытые вопросы, Результаты, Методология, Ссылки, Цель, Контекст
- References: quantum-computing-vqe, quantum-machine-learning-kernels

## Entity: copula-models
- Title: Копула-модели
- Category: Модели ценообразования
- Language: ru
- Key Concepts: Хвостовые коэффициенты зависимости по типам копул, Копула, Обзор и предпосылки, Пар-трейдинг, Основные семейства копул, Ключевые свойства, Портфельный VaR, Ограничения и расширения, Теорема Скляра, Копула-модели, Стресс-тестирование, Ценообразование кредитных корзин (CDO, CLN), Математическая база, Хвостовые коэффициенты зависимости, Ограничения:
- References: brownian-motion, cox-process, finance/monte-carlo-method, finance/value-at-risk, finance/xva
- Backlinks: cornish-fisher-cvar, cox-process, cs01, cva-wrong-way-risk, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/isda-simm, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/securitization, finance/stylized-facts-returns, finance/swaps, finance/value-at-risk, finance/xva, generative-scenario-models, gnn-credit-risk, graph-neural-networks, survival-risk-prediction, vine-copulas

