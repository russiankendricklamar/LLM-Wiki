# Knowledge Base Aggregate for AI Synthesis

## System Instructions
All agents should refer to [[GEMINI.md]] for project-wide standards and research protocols. New research findings are located in the `research/` category with structured metadata.

## Entity: course-math-for-ai
- Title: Mathematics for Deep Learning: The PhD Path
- Category: AI & Math
- Language: en
- Key Concepts: Week 6 — Probability theory, Week 9 — Stochastic calculus, Information bottleneck inside a [[transformer-architecture|transformer]]., Exercise:, Capstone project, Week 1 — Linear algebra in operator form, Week 7 — Information theory, Week 4 — Optimisation and convexity, Outcomes, Module 0, Checkpoint:, Course map, Module 0 (optional, 1 week): Warm-up, Goal:, 12-week
- References: brownian-bridge, characteristic-functions, connections-curvature, convex-optimization, convexity, distributions-zoo, entropy-information, exponential-families, f-divergences, feynman-kac, finance/shannon-entropy, fisher-information, geometric-deep-learning, gradient-hessian-jacobian, hilbert-banach-spaces, hodge-theory, lagrange-multipliers, laplacian, lie-groups, linear-programming, linear-spaces-basis, linear-systems-gauss, lln-clt, malliavin-calculus, manifold, manifold-learning, martingale, math/analysis-geometry/information-geometry, math/differential-geometry, math/discrete-markov-chains, math/information-theory, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/sde-numerical-methods, math/sigma-algebra-measurability, maximum-entropy, measure-theory, multivariable-calculus, multivariate-normal, optimal-transport, ornstein-uhlenbeck, poisson-process, ricci-flow, stochastic-differential-equations, symplectic-geometry, taylor-series, tensor-decompositions, transformer-architecture

## Entity: bert
- Title: BERT
- Category: AI Architectures
- Language: en
- Key Concepts: Pre-training, Masked Language Modeling (MLM):, Overview, Next Sentence Prediction (NSP):
- References: llm

## Entity: gpt-architecture
- Title: GPT
- Category: AI Architectures
- Language: en
- Key Concepts: Mechanism, Overview
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
- Key Concepts: Mechanism, Overview

## Entity: u-net
- Title: U-Net
- Category: AI Architectures
- Language: en
- Key Concepts: Architecture, Overview

## Entity: ai-market-making
- Title: AI Market Making
- Category: AI Finance
- Language: en
- Key Concepts: Simulator gap, Huang (2023) — SAC for crypto market making, Overview, Action, Spooner et al. (2018) — RL Market Making, AI Market Making, Mathematical Framework, Limitations, Strategy Performance Comparison, Avellaneda-Stoikov Model, Gasperov & Kostanjcar (2021) — RL with adversarial training, Quote Skewing, Key Results, Objective, skew
- References: attention-mechanisms, deep-rl-execution, optimal-execution, temporal-fusion-transformer
- Backlinks: market-microstructure

## Entity: alpha-factor-research
- Title: Alpha Factor Research
- Category: AI Finance
- Language: en
- Key Concepts: Double ML for Fama-French factors (Oprescu et al., 2023), non-linear, interaction-rich factors, Overview, Multiple testing / overfitting, ML-Based Factor Construction, Capacity constraints, Mathematical Framework, Auto-Encoder Latent Factors, Limitations, Deep Factor Models, Gu, Kelly & Xiu (2020), Turnover vs Alpha Trade-off, Key Results, Information Coefficient, Factor decay study (Hansis et al., 2022)
- References: deep-rl-execution, llm-financial-analysis, temporal-fusion-transformer
- Backlinks: double-ml, nlp-financial-analysis, vine-copulas

## Entity: ml-options-pricing
- Title: ML for Options Pricing
- Category: AI Finance
- Language: en
- Key Concepts: Gaussian Process Pricing, Overview, implied volatility surface, Mathematical Framework, Limitations, No-Arbitrage Constraints as Regularisation, Buehler et al. (2019) — Deep Hedging, Black-Scholes Baseline, deep hedging, Key Results, Interpretability, Regime shifts, Data sparsity at wings, Neural Network Pricing, Cohen et al. (2023) — No-arbitrage neural vol surface
- References: black-scholes, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, temporal-fusion-transformer

## Entity: nlp-financial-analysis
- Title: NLP for Financial Analysis
- Category: AI Finance
- Language: en
- Key Concepts: Regulatory considerations, [[llm]]-Based Information Extraction, Survivorship bias, Overview, alternative data, FinBERT (Yang et al., 2020), Mathematical Framework, FinBERT and Domain-Adapted Transformers, Risk factor changes, Key NLP Approaches, Bot filtering, Event-Driven Return Model, Sentiment Signal Accuracy by Model, Earnings Call Analysis, MD&A tone
- References: alpha-factor-research, finance/shannon-entropy, fine-tuning, llm, llm-financial-analysis, rag, temporal-fusion-transformer, transformer-architecture
- Backlinks: financial-entropy

## Entity: fourier-neural-operators
- Title: Fourier Neural Operators
- Category: AI Physics
- Language: en
- Key Concepts: Non-linearity, Material Science, Weather Forecasting, How FNO Works, Partial Differential Equations (PDEs), infinite-dimensional function spaces, Operator Neural Network, Fourier Transform, Inverse Fourier Transform, Performance: Speed and Accuracy, Fourier Neural Operators (FNO), Linear Transform (Weighting), Local Skip Connection, Fluid Dynamics, Applications
- References: neural-operators, partial-differential-equations, pinns
- Backlinks: fredholm-theory

## Entity: ai-physics/hamiltonian-nn
- Title: Hamiltonian Neural Networks (HNN)
- Category: AI Physics
- Language: en
- Key Concepts: Key Advantages, Hamiltonian Neural Networks (HNN), Related Topics, Auto-Differentiation, Energy Conservation:, Molecular Dynamics:, The Problem with Black-Box Models, Applications, Celestial Mechanics:, Phase Space Consistency:, Control Systems:, Mathematical Core, Data Efficiency:, Hamiltonian, How HNNs Work:
- References: equivariant-nn, math/variational-calculus, pinns
- Backlinks: ai-theory/spatial/equivariant-gnn, equivariant-nn, kuramoto-model, lagrange-multipliers, neural-odes, neural-operators, pinns, symplectic-geometry

## Entity: 3d-gaussian-splatting
- Title: 3D Gaussian Splatting
- Category: AI Theory
- Language: en
- Key Concepts: 2. The Rendering Pipeline: Splatting, 3. Optimization and Learning, 3D Gaussian Splatting (3DGS), Opacity ($\alpha$), Splatting, 5. Applications, 4. 3DGS vs. NeRF, Robotics, Color, Storage, Projection, Position ($x, y, z$), 3D Gaussian Splatting: Real-Time Radiance Fields, Rendering Speed, Spherical Harmonics (SH)
- References: automatic-differentiation, convex-optimization, geometric-deep-learning, manifold-learning, nerf, transformer-architecture
- Backlinks: nerf, neural-radiance-fields-math

## Entity: activation-patching
- Title: Activation Patching
- Category: AI Theory
- Language: en
- Key Concepts: Clean input, Name Mover Heads, Combinatorial explosion., The IOI Task, Nonlinearity., Correlation ≠ causation., Corrupted input, Formalisation, Duplicate Token Heads, Symmetry assumption., S-Inhibition Heads, Limitations, Path Patching vs Activation Patching, Path patching, Indirect Object Identification (IOI)
- References: attention-mechanisms, circuit-discovery, mechanistic-interpretability, transformer-architecture
- Backlinks: circuit-discovery, probing-classifiers, superposition

## Entity: ai-theory/adversarial-examples
- Title: Adversarial Examples
- Category: AI Theory
- Language: en
- Key Concepts: Transferability., Carlini–Wagner ($\ell_2$) Attack., PGD (Projected [[convex-optimization|Gradient Descent]]) Attack., Overview, Certification Radius., Lack of principled theory., Prompt Injection for LLMs., Adversarial Examples, Mathematical Framework, Computational cost., Transferability and feature alignment., Advantages and limitations., Noise vs. adversarial robustness., Key Results and Hypotheses, Randomized Smoothing.
- References: convex-optimization, diffusion-models, math/concentration-inequalities, mechanistic-interpretability, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: differential-privacy, metric-spaces

## Entity: attention-mechanisms
- Title: Attention Mechanisms
- Category: AI Theory
- Language: en
- Key Concepts: Queries ($Q$), Recomputation, Visualization: Attention Matrix, Values ($V$), Keys ($K$), 1. Scaled Dot-Product Attention, FlashAttention, $\sqrt{d_k}$, Llama 3, B. Grouped-Query Attention (GQA), 2. Multi-Head Attention (MHA), 4. Hardware Optimization: FlashAttention, 3. Efficient Variants ([[llm]] Optimization), Related Topics, "Attention Is All You Need"
- References: flash-attention, inference-serving, llm, paged-attention, transformer-architecture
- Backlinks: activation-functions-math, activation-patching, ai-market-making, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-linear-kernel, autoregressive-models, circuit-discovery, code-models, context-length, deepseek-v3-mla-compression, diffusion-models, distributed-training-3d, embedding-models, equivariant-diffusion-models, equivariant-nn, finance/adversarial-stress-testing, finance/bachelier-formula, finance/gnn-finance, finance/transformer-timeseries, fine-tuning, flash-attention, geometry-of-attention, gnn-credit-risk, gpt-architecture, gpu-architecture, graph-neural-networks, hardware-io-attention, induction-heads, inference-serving, kan, kv-cache-compression, language-models/mamba-ssm, linear-algebra, llm, long-context-yarn-longrope, math-reasoning-chains-rl, mechanistic-interpretability, mechanistic-interpretability-sae, meta-learning, mixture-of-depths, mla, model-parallelism, moe-routing, neural-scaling-laws, paged-attention, positional-encodings, probing-classifiers, quantization, quantum-machine-learning-kernels, research/mla-financial-reasoning, rl-trader, rope-scaling, slm, speculative-decoding-medusa, state-space-models, temporal-fusion-transformer, tensors-and-contractions, tokenization, tokenization-bpe-unigram, training-dynamics, transformer-architecture, universal-approximation-theory, vision-transformers, vision-transformers-scaling, vlm

## Entity: automatic-differentiation
- Title: Automatic Differentiation
- Category: AI Theory
- Language: en
- Key Concepts: Higher-order derivatives, Automatic differentiation (AD, autodiff), PDE residuals in [[pinns]]:, Differentiable physics., Forward mode, directed acyclic graph (DAG), Implicit differentiation, dual numbers, Reverse mode, Example: PyTorch, Efficient when $n \ll m$, Tracing (dynamic AD)., Training neural networks., Source-to-source., Automatic Differentiation
- References: black-scholes, convex-optimization, finance/monte-carlo-method, inference-serving, neural-scaling-laws, partial-differential-equations, pinns
- Backlinks: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, category-theory-ml, chain-rule-autodiff, convex-analysis, deep-galerkin, differential-equations, gradient-hessian-jacobian, linear-algebra, mcts, multivariable-calculus, neural-odes, partial-differential-equations, pinns, qat, reinforcement-learning, tensors-and-contractions, variational-autoencoders

## Entity: bayesian-deep-learning
- Title: Bayesian Deep Learning
- Category: AI Theory
- Language: en
- Key Concepts: MC Dropout: Variational Inference via Dropout, epistemic, Laplace Approximation, Epistemic versus Aleatoric Uncertainty, Active Learning:, functional diversity, temperature scaling, Autonomous Driving:, Medical Imaging:, Kronecker-Factored Laplace (KFAC-Laplace), SGLD and MCMC in Neural Networks, Epistemic uncertainty, Aleatoric uncertainty, aleatoric, Applications and Impact
- References: evaluation-llms, gaussian-processes, math/kolmogorov-probability-axioms, mcmc, neural-scaling-laws, statistical-mechanics, variational-autoencoders
- Backlinks: ai-theory/in-context-learning, de-finetti-exchangeability, gaussian-processes

## Entity: causal-inference-do-calculus
- Title: Causal Inference: Do-Calculus & SCM
- Category: AI Theory
- Language: en
- Key Concepts: Identification Strategies, Rule 1 (Insertion/Deletion of observations):, DERIVATION: Identification of the Frontdoor Formula, Abduction:, Backdoor Criterion, Structural Causal Models (SCM), do-calculus, Rule 2 (Action/Observation exchange):, The Do-Operator, Frontdoor Criterion, Counterfactuals, Rule 3 (Insertion/Deletion of actions):, Causal Effect, Prediction:, Related Topics
- References: bayesian-networks, causal-inference-trading, graph-theory, math/m-estimators

## Entity: circuit-discovery
- Title: Circuit Discovery
- Category: AI Theory
- Language: en
- Key Concepts: Negative heads., Edge Attribution Patching (EAP), Circuit Discovery, The OV and QK Circuits, Copy heads., Step 2: Activation patching., Induction heads, Automated Circuit Discovery (ACDC), circuits, Superposition and Polysemanticity, Step 1: Task definition., Step 3: Path patching., OV circuit, [[attention-mechanisms|Attention]] Head Roles, Circuit discovery
- References: activation-patching, attention-mechanisms, mechanistic-interpretability, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching

## Entity: contrastive-learning
- Title: Contrastive Learning
- Category: AI Theory
- Language: en
- Key Concepts: Dual encoders, Metric learning, Information-theoretic view, InfoNCE, Bootstrap Your Own Latent, Projections and normalization, Sentence embeddings, MoCo: Memory and Momentum, Why Contrastive Learning Works, Information maximization, Financial time series, CLIP: Cross-Modal Contrastive Learning, CLIP, Online network, Momentum update rule
- References: embedding-models, finance/shannon-entropy, fine-tuning, generative-models, neural-scaling-laws, pac-learning, transformer-architecture, variational-autoencoders
- Backlinks: vision-transformers

## Entity: diffusion-models
- Title: Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: Score-based generative modelling, Score, Flow Matching: Deterministic Paths to Data, Diffusion Models, Memory of training data., Audio., noise prediction, denoising score matching, Reverse process (learned):, Inference (sampling):, iterative denoising, Why Diffusion Surpassed GANs, Molecular design., Training, Computational cost.
- References: attention-mechanisms, fokker-planck-equation, generative-models, manifold-learning, neural-scaling-laws, ornstein-uhlenbeck-process, stochastic-differential-equations, transformer-architecture, variational-autoencoders
- Backlinks: ai-theory/adversarial-examples, energy-based-models, equivariant-diffusion-models, generative-models, laplacian, math/sde-numerical-methods, nonequilibrium-statmech, variational-autoencoders

## Entity: energy-based-models
- Title: Energy-Based Models
- Category: AI Theory
- Language: en
- Key Concepts: Modern EBMs and Hybrid Modeling, Score Matching: Avoiding the Partition Function, MLE and the Partition Function Problem, Contrastive Divergence and Approximation, Denoising score matching, Connection to [[statistical-mechanics|Statistical Mechanics]], contrastive divergence, direct, Restricted Boltzmann Machines, Joint Energy Modeling (JEM), RBM
- References: convex-optimization, diffusion-models, manifold-learning, statistical-mechanics

## Entity: equivariant-diffusion-models
- Title: Equivariant Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: Riemannian Diffusion:, Feature update:, Robotics:, Challenges:, Invariant Schedulers:, Equivariant Graph Neural Network (EGNN), reverse [[stochastic-differential-equations|SDE]], Robustness:, Computational Complexity:, Special Euclidean group, Protein Folding and Design:, Equivariant Diffusion Models (EDMs), Isotropic Gaussian, Computer Vision:, Position update:
- References: ai-theory/spatial/equivariant-gnn, attention-mechanisms, diffusion-models, laplacian, lie-algebras-physics, lie-groups, manifold-learning, stochastic-differential-equations

## Entity: ai-theory/spatial/equivariant-gnn
- Title: Equivariant GNN (E(n)-GNN)
- Category: AI Theory
- Language: en
- Key Concepts: Structural Biology:, AI for Science, Related Topics, Molecular Modeling:, Mathematical Concept, Equivariant Graph Neural Networks (E(n)-GNN), Equivariance, Invariant Messages:, Why Equivariance?, Equivariant Message Passing, Robotics:, Coordinate Updates:, Invariance, Impact and Applications
- References: ai-physics/hamiltonian-nn, math/foundations/group-theory-symmetries, spectral-graph-theory
- Backlinks: equivariant-diffusion-models

## Entity: equivariant-nn
- Title: Equivariant Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Parity subtleties., Equivariant Neural Networks, Particle physics:, SE(3)-[[transformer-architecture|Transformer]] (2020):, Key architectures:, Wigner D-matrices, Robotics:, Tensor product layers., Message passing on point clouds., SchNet (2017):, Overview, Exact symmetry:, How It Works, Mathematical Framework, Limitations
- References: ai-physics/hamiltonian-nn, attention-mechanisms, group-theory, pinns, qft-basic, scattering-amplitudes, transformer-architecture
- Backlinks: ai-physics/hamiltonian-nn, graph-neural-networks, group-theory, kan, lie-groups, neural-operators, pinns, representation-theory-ml

## Entity: factor-graphs-inference
- Title: Factor Graphs & Sum-Product Algorithm
- Category: AI Theory
- Language: en
- Key Concepts: treewidth, Convergence, DERIVATION: Marginal on a Chain, Sum-Product Algorithm, The Sum-Product Algorithm, Factor Graphs & Sum-Product Algorithm, Message Passing Rules, Max-Product Algorithm, Variable to Factor Message:, Loopy Belief Propagation, Bethe Free Energy, Junction Tree Algorithm, Mathematical Formulation, factor nodes, Junction Tree
- References: bayesian-networks, graph-theory, kalman-filter, variational-inference-math

## Entity: gauge-equivariant-nn
- Title: Gauge Equivariant Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Mathematical Formulation, Gauge Equivariant Convolution, Fiber Bundles and Connections, Gauge Equivariant Neural Networks
- References: manifold-learning

## Entity: gaussian-processes
- Title: Gaussian Processes
- Category: AI Theory
- Language: en
- Key Concepts: Gaussian Processes, ARD (Automatic Relevance Determination), Scientific ML, Deep kernels, Nyström approximation, Uncertainty quantification, Kernels and Positive Semidefiniteness, Laplace approximation, Inducing points, Further Reading, Sparse GP approximations, Kernel Engineering and Knowledge Encoding, Matérn kernel:, Marginal Likelihood and Hyperparameter Learning, Financial volatility
- References: bayesian-deep-learning, finance/monte-carlo-method, math/kolmogorov-probability-axioms, neural-scaling-laws, pinns, statistical-mechanics
- Backlinks: ai-theory/neural-tangent-kernel, bayesian-deep-learning, bayesian-nonparametrics, hilbert-banach-spaces, multivariate-normal

## Entity: generative-models
- Title: Generative Models
- Category: AI Theory
- Language: en
- Key Concepts: Learn latent representations, tractability of density, Generator, Variational Autoencoders (VAE), Diffusion Models, Energy-Based Models (EBM), Generative Models, variational autoencoder, Text generation., Quality:, Autoregressive models, Training stability:, Encoder, Properties:, Sample
- References: diffusion-models, finance/monte-carlo-method, flow-matching, generative-scenario-models, hamiltonian-mechanics, llm, neural-odes, schrodinger-equation, sparse-autoencoders
- Backlinks: contrastive-learning, diffusion-models, generative-scenario-models, signature-based-models, variational-autoencoders

## Entity: autoregressive-models
- Title: Generative Models: Autoregressive Math
- Category: AI Theory
- Language: en
- Key Concepts: Masked Architectures, Factorization, Causal [[attention-mechanisms|Attention]] (Transformers):, Masked Convolutions (PixelCNN):
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
- Key Concepts: Minimax Objective, Optimal Discriminator and JSD

## Entity: normalizing-flows
- Title: Generative Models: Normalizing Flows
- Category: AI Theory
- Language: en
- Key Concepts: Change of Variables, Flow Composition

## Entity: vae-elbo
- Title: Generative Models: VAEs and ELBO
- Category: AI Theory
- Language: en
- Key Concepts: Reparameterization Trick, The ELBO Derivation
- References: convex-optimization

## Entity: graph-neural-networks
- Title: Graph Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Neighbour mini-batches, Message Passing Paradigm (MPNN), Graph classification, Regression on graph properties, Graph Neural Networks, Node classification, Graph [[transformer-architecture|Transformer]] (Dwivedi & Bresson 2020, Graphormer 2021)., Graph Isomorphism Network (GIN, Xu et al. 2019)., Message Passing Neural Networks (MPNN)., Graph [[attention-mechanisms|Attention]] Network (GAT, Veličković et al. 2018)., Limitations, Over-smoothing and Over-squashing, Training complexity., Formulation and Notation, message passing
- References: attention-mechanisms, copula-models, equivariant-nn, fraud-detection, gnn-credit-risk, neural-odes, spectral-graph-theory, transformer-architecture
- Backlinks: gnn-credit-risk, graph-curvature-oversquashing, graph-theory, laplacian

## Entity: ai-theory/in-context-learning
- Title: In-Context Learning
- Category: AI Theory
- Language: en
- Key Concepts: Few-Shot vs Zero-Shot Scaling, induction heads, Task arithmetic, Zero-shot, Sensitivity to Prompt Format and Label Permutation, Chain-of-Thought as Extended In-Context Learning, Emergence at Scale and Open Questions, demo–query, Task Vectors and Representation Engineering, Mechanistic Substrate: Induction Heads, Attend to next token, task vectors, In-Context Learning, Label order effects, Few-shot
- References: attention-mechanisms, bayesian-deep-learning, chain-of-thought, fine-tuning, mechanistic-interpretability, neural-scaling-laws, prompt-engineering, transformer-architecture
- Backlinks: ai-theory/neural-tangent-kernel, attention-kernel, induction-heads, training-dynamics

## Entity: induction-heads
- Title: Induction Heads
- Category: AI Theory
- Language: en
- Key Concepts: Identifies, Why It Matters, Model Scaling, In-Context Learning (ICL), Circuit Discovery, Layer 2: Induction Head, Value (V), Query (Q), Understanding ICL, Key (K), phase transition, Induction Heads, two layers, Increases, Searches
- References: ai-theory/in-context-learning, attention-mechanisms, mechanistic-interpretability, transformer-architecture

## Entity: information-bottleneck-theory
- Title: Information Bottleneck Theory
- Category: AI Theory
- Language: en
- Key Concepts: Application to Deep Learning, Compression Phase, IB curve, Exact Solution and the IB Curve, The Information Bottleneck Objective, Fitting Phase, Information Bottleneck Theory
- References: convex-optimization
- Backlinks: statistical-mechanics-learning

## Entity: ai-theory/knowledge-distillation
- Title: Knowledge Distillation
- Category: AI Theory
- Language: en
- Key Concepts: QAT ([[quantization]]-Aware Training), Trade-offs and design choices, Theoretical analysis: PAC-Bayes bounds, mode-seeking, Why soft labels work: dark knowledge, Alpaca-style distillation:, student network, prior or constraint, Example: vision, [[quantization]]-aware distillation, Implicit regularization., Knowledge Distillation, Self-distillation and born-again networks, Model compression:, Curriculum learning:
- References: attention-mechanisms, evaluation-llms, fine-tuning, manifold-learning, neural-scaling-laws, pac-learning, quantization, transformer-architecture

## Entity: kolmogorov-complexity
- Title: Kolmogorov Complexity
- Category: AI Theory
- Language: en
- Key Concepts: Anomaly detection:, No finite-sample guarantees., Shannon-Kolmogorov duality:, Overview, Coding theorem:, How It Works, Connection to Shannon [[shannon-entropy|entropy]]., NCD works in practice:, Bioinformatics:, Mathematical Framework, Limitations, Kolmogorov Complexity, Kolmogorov-random:, Invariance theorem., Compression-based AGI:
- References: finance/lempel-ziv-complexity, finance/shannon-entropy, pac-learning
- Backlinks: chain-of-thought, math/cantor-diagonal, math/godel-incompleteness, pac-learning

## Entity: learnable-activations
- Title: Learnable Activations and B-splines
- Category: AI Theory
- Language: en
- Key Concepts: Smoothness., Rational activations., Grid refinement., B-splines: essence, Learnable activation functions, Limitations, Shape-preserving., Adaptive refinement., Computational cost., KAN: activations on edges, Hyperparameter choices., Parametric ReLU (PReLU)., B-spline activations., Initialisation., Symbolic regression.
- References: kan, kolmogorov-arnold-theorem, neural-scaling-laws, pinns, sparse-autoencoders, transformer-architecture
- Backlinks: kan, kolmogorov-arnold-theorem

## Entity: quantization-error-math
- Title: Mathematical Error Analysis in Model Quantization
- Category: AI Theory
- Language: en
- Key Concepts: Mathematical Error Analysis in Model [[quantization]], Error Propagation in Linear Layers, Uniform Quantization, Stochastic Rounding
- References: quantization

## Entity: diffusion-sde-math
- Title: Mathematical Foundations of Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: score function, Langevin Dynamics Connection, Reverse [[stochastic-differential-equations|SDE]] and Score Matching, Forward [[stochastic-differential-equations|SDE]], Mathematical Foundations of Diffusion Models, The Probability Flow ODE
- References: stochastic-differential-equations

## Entity: mechanistic-interpretability
- Title: Mechanistic Interpretability
- Category: AI Theory
- Language: en
- Key Concepts: Model Editing (ROME/MEMIT):, Logit Lens:, Related Topics, Sparse Autoencoders (SAE):, Mechanistic Interpretability, Activation Patching:, Detecting Deception:, Residual Stream:, Importance for AI Safety, polysemanticity, Alignment Verification:, Mathematical Core, Superposition Hypothesis:, Implementation Snippet, Key Methodology
- References: attention-mechanisms, constitutional-ai, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, chain-of-thought, circuit-discovery, constitutional-ai, induction-heads, language-models/safety/rlhf-dpo, llm, math/godel-incompleteness, mixture-of-experts, neural-scaling-laws, pac-learning, probing-classifiers, rlhf, slm, sparse-autoencoders, superposition

## Entity: meta-learning
- Title: Meta-Learning
- Category: AI Theory
- Language: en
- Key Concepts: second-order derivatives, in-context learning (ICL), Matching Networks, Limitations:, Reptile, Meta-Learning and In-Context Learning, Algorithm:, Prototypical Networks, Model-Agnostic Meta-Learning (MAML), Applications:, Formal Setup, First-Order MAML (FOMAML):, Applications and Limitations, Alternative Meta-Learners
- References: attention-mechanisms, chain-of-thought, convex-optimization, llm, neural-scaling-laws, reinforcement-learning, rlhf, transformer-architecture
- Backlinks: prompt-engineering

## Entity: model-based-rl
- Title: Model-Based Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: Monte Carlo Tree Search (MCTS), Model-based RL (MBRL), Related Topics, Recurrent world models., World Models, Model-Free vs Model-Based, MBPO: Model-Based Policy Optimization, Ensembles., Model Error Compounding, Dreamer / DreamerV3, The Dyna Architecture, Neural Network World Models, MCTS and AlphaZero, Probabilistic models., Dyna
- References: offline-rl, ppo, reinforcement-learning, soft-actor-critic
- Backlinks: offline-rl, ppo, soft-actor-critic

## Entity: neural-odes
- Title: Neural ODEs
- Category: AI Theory
- Language: en
- Key Concepts: Computer vision., Adjoint method for [[automatic-differentiation|backpropagation]], Physics and scientific models., Variants and extensions, Neural ODE, Irregularly sampled time series., Neural Ordinary Differential Equations (Neural ODEs), Limitations, Latent ODE., Training difficulty., Stiff dynamics., Generative modelling., [[hamiltonian-nn|Hamiltonian Neural Networks (HNNs)]], Neural SDEs., adjoint sensitivity method
- References: ai-physics/hamiltonian-nn, automatic-differentiation, brownian-motion, hamiltonian-mechanics, pinns
- Backlinks: calculus-of-variations, generative-models, graph-neural-networks, math/ode-stability, neural-sdes-finance, operator-semigroups, reinforcement-learning, state-space-models, variational-autoencoders

## Entity: nerf
- Title: Neural Radiance Fields (NeRF)
- Category: AI Theory
- Language: en
- Key Concepts: Neural Radiance Fields (NeRF), Mip-NeRF, Capture, Pose Estimation, Output, Visualization: The NeRF Ray Casting, Training, Inference, 1. The Core Concept: Volumetric Rendering, Instant-NGP, Speed, 4. Limitations and Evolution, A. Positional Encoding, Input, 2. Key Innovations
- References: 3d-gaussian-splatting, manifold-learning, positional-encodings, transformer-architecture
- Backlinks: 3d-gaussian-splatting, neural-radiance-fields-math

## Entity: neural-scaling-laws
- Title: Neural Scaling Laws
- Category: AI Theory
- Language: en
- Key Concepts: Quality metrics., Chinchilla (Hoffmann et al. 2022)., model size and token count should scale equally, Architecture dependence., Kaplan et al. (2020) scaling laws., Neural Scaling Laws, Overview, Distribution shift., How It Works, Mathematical Framework, Data scaling and token repetition., Limitations, Power law mechanistic interpretation., IsoFLOP curves., Inference-time scaling (test-time compute).
- References: attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, pac-learning
- Backlinks: ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, automatic-differentiation, bayesian-deep-learning, bitnet, contrastive-learning, curriculum-learning, diffusion-models, gaussian-processes, learnable-activations, llm, meta-learning, mixture-of-experts, pac-learning, positional-encodings, quantization, reasoning-models, rlhf, slm, test-time-scaling, training-dynamics, transformer-architecture

## Entity: ai-theory/neural-tangent-kernel
- Title: Neural Tangent Kernel
- Category: AI Theory
- Language: en
- Key Concepts: lazy training regime, [[transformer-architecture|transformer]] architectures, Practical Implications, Convergence Guarantees and Over-Parameterization, Kernel Regime vs. Feature Learning Regime, The NTK Definition, Gradient Flow in Function Space, Further Reading, Limitations:, feature learning regime, NTK for Transformers and Modern Architectures, Width requirements:, Neural Tangent Kernel, Finite-Width Corrections and Mean Field Theory, at infinite width, this kernel becomes deterministic and constant in time
- References: ai-theory/in-context-learning, attention-mechanisms, automatic-differentiation, convex-optimization, finance/shannon-entropy, gaussian-processes, math/concentration-inequalities, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: neural-radiance-fields-math, ntk, statistical-mechanics-learning

## Entity: offline-rl
- Title: Offline Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: Implicit Q-Learning (IQL), Healthcare., IQL, expectile loss, Dataset Quality Matters, Autonomous driving., batch RL, Conservative Q-Learning (CQL), CQL, Offline Reinforcement Learning, Offline RL, Applications, Robotics., TD3+BC, Finance.
- References: deep-rl-execution, model-based-rl, reinforcement-learning, soft-actor-critic, transformer-architecture
- Backlinks: model-based-rl, soft-actor-critic

## Entity: pac-learning
- Title: PAC Learning & VC Dimension
- Category: AI Theory
- Language: en
- Key Concepts: Fundamental theorem:, Sample complexity with VC dimension:, Rademacher complexity., Overview, How It Works, Bias-variance decomposition., MDL and Occam's Razor., shattered, Mathematical Framework, PAC Learning & VC Dimension, Limitations, Lower bounds:, Theoretical foundation for SVMs:, Scientific learning:, Tight bounds for SVMs:
- References: finance/shannon-entropy, kolmogorov-complexity, mechanistic-interpretability, neural-scaling-laws
- Backlinks: ai-theory/adversarial-examples, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, code-models, contrastive-learning, empirical-processes, kolmogorov-complexity, neural-scaling-laws, sparse-autoencoders, statistical-mechanics-learning, vlm

## Entity: probing-classifiers
- Title: Probing Classifiers
- Category: AI Theory
- Language: en
- Key Concepts: Nonlinear probes, The MDL probe, Probing classifiers, probing selectivity, Representation quality metrics., CKA (Centered Kernel Alignment):, Limitations, Linear vs Nonlinear Probes, Probing Classifiers, Setup, Linguistic structure in LLMs., LEACE (Least-squares Concept Erasure):, Causality gap., Layer-Wise Analysis in BERT, Bias detection.
- References: activation-patching, attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, sparse-autoencoders

## Entity: ppo
- Title: Proximal Policy Optimization (PPO)
- Category: AI Theory
- Language: en
- Key Concepts: Proximal Policy Optimization (PPO), Hyperparameters, PPO vs TRPO, Related Topics, Training Dynamics, TRPO, PPO-Clip, The Clipped Surrogate Objective, Full PPO Loss, Applications, Games., Continuous control., GAE, Motivation: The Policy Update Problem, Generalized Advantage Estimation (GAE)
- References: finance/shannon-entropy, llm, model-based-rl, reinforcement-learning, rlhf, soft-actor-critic
- Backlinks: model-based-rl, soft-actor-critic

## Entity: rlhf
- Title: RLHF (Reinforcement Learning from Human Feedback)
- Category: AI Theory
- Language: en
- Key Concepts: Three-Stage Pipeline, Preference Data Quality:, alignment tax, training on human preferences contains information orthogonal to model scale, Stage 2: Reward Model Training, Open Problems, Advantages:, Multi-Objective Alignment:, [[dpo]]: Direct Preference Optimization, Alignment Tax: Capability-Alignment Tradeoff, Stage 3: PPO Optimization, Constitutional AI: AI Critique Instead of Human Labels, Why RLHF Works: Human Preference as Orthogonal Signal, Why KL Regularization: Preventing Reward Hacking, Reward Model Generalization:
- References: chain-of-thought, dpo, finance/shannon-entropy, fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, reinforcement-learning, transformer-architecture
- Backlinks: causal-inference, chain-of-thought, constitutional-ai, dpo, evaluation-llms, f-divergences, fine-tuning, language-models/safety/rlhf-dpo, llm, mechanism-design, meta-learning, orm-prm, ppo, preference-optimization, preference-optimization-variants, prm, prompt-engineering, reasoning-models, reinforcement-learning, soft-actor-critic, synthetic-data-alignment

## Entity: reinforcement-learning
- Title: Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: Markov Decision Process (MDP), replay buffer, Q-learning., Deep Reinforcement Learning, Model-based, explore/exploit, Boltzmann exploration, UCB / Thompson sampling, Bellman equation, SARSA., Off-policy, On-policy, Markov Decision Process, Reinforcement Learning (RL), Soft Actor-Critic (SAC)
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
- Key Concepts: The Objective Function, Why it works

## Entity: policy-gradient-theorem
- Title: Reinforcement Learning: Policy Gradient Theorem
- Category: AI Theory
- Language: en
- Key Concepts: The Theorem, REINFORCE

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
- Key Concepts: Representation Theory for Machine Learning, Group Actions and Equivariance, $SO(3)$ and $SE(3)$ Representations, Tensor Products and Clebsch-Gordan Coefficients
- References: equivariant-nn

## Entity: soft-actor-critic
- Title: Soft Actor-Critic (SAC)
- Category: AI Theory
- Language: en
- Key Concepts: Reparameterization Trick, Energy systems., Related Topics, Twin critics, Critic Loss, Actor Loss, Applications, Architecture: Three Networks, Soft Actor-Critic (SAC), Maximum [[shannon-entropy|Entropy]] RL, Robotics., policy [[shannon-entropy|entropy]], MBPO., Sample Efficiency vs PPO, SAC vs TD3 vs PPO
- References: finance/shannon-entropy, model-based-rl, offline-rl, ppo, reinforcement-learning, rlhf
- Backlinks: model-based-rl, offline-rl, ppo

## Entity: sparse-autoencoders
- Title: Sparse Autoencoders (SAE)
- Category: AI Theory
- Language: en
- Key Concepts: Knowledge localisation:, Dictionary learning objective., Causal role unknown., Superposition geometry:, Evaluation metrics:, Steering vectors:, Overview, L0 sparsity:, How It Works, Circuit analysis:, Mathematical Framework, Limitations, Superposition geometry., Feature splitting:, Computational cost.
- References: finance/shannon-entropy, llm, mechanistic-interpretability, pac-learning, transformer-architecture
- Backlinks: circuit-discovery, generative-models, learnable-activations, mechanistic-interpretability, probing-classifiers, superposition, variational-autoencoders

## Entity: state-space-models
- Title: State Space Models (SSM)
- Category: AI Theory
- Language: en
- Key Concepts: Language modeling, Mamba, fixed, Genomics, Classical State Space Formulation, unrolled as a convolution, with linear constant factors, S4: Structured State Matrices, polynomial basis projection, Cauchy kernel trick, Convolutional View: Kernel Representation, Hybrid architectures, References, Explicit diagonalization, parallel prefix scan
- References: attention-mechanisms, kalman-filter, llm, math/spectral-theory-operators, mixture-of-experts, neural-odes, nonlinear-filtering, transformer-architecture
- Backlinks: attention-kernel, context-length

## Entity: superposition
- Title: Superposition & Linear Representation
- Category: AI Theory
- Language: en
- Key Concepts: Mathematical Framework, polysemantic, The Toy Model of Superposition, Detecting Deception, more features than it has dimensions, Model Steerability, Uncovering Hidden Capabilities, Superposition and Linear Representation, Sparse Autoencoders (SAE), polytopes, Polysemanticity, Related Topics, Visualizing Dimension vs. Features, What Is It, Linear Representation Hypothesis
- References: activation-patching, llm, mechanistic-interpretability, sparse-autoencoders

## Entity: transformer-architecture
- Title: Transformer Architecture
- Category: AI Theory
- Language: en
- Key Concepts: 1. The Core Components, 5. Architectural Variants, Encoder-Decoder (T5), Feed-Forward Network (FFN), Post-Norm, Pre-Norm, Transformer Architecture: The Foundation of LLMs, Encoder-Only (BERT), RoPE (Rotary Positional Embeddings), The Bottleneck, Relative Distance, Stability, RMSNorm, 4. The Softmax Bottleneck, Decoder-Only (GPT)
- References: attention-mechanisms, mixture-of-experts, neural-scaling-laws
- Backlinks: 3d-gaussian-splatting, activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-mechanisms, bitnet, chain-of-thought, circuit-discovery, code-models, context-length, contrastive-learning, course-math-for-ai, decision-transformers, deep-hedging, diffusion-models, embedding-models, equivariant-nn, finance/transformer-timeseries, fine-tuning, fraud-detection, gnn-credit-risk, gpt-architecture, graph-neural-networks, induction-heads, inference-serving, kan, kolmogorov-arnold-theorem, language-models/mamba-ssm, learnable-activations, linear-algebra, llm, logistic-regression, lora-peft, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/godel-incompleteness, mechanistic-interpretability, meta-learning, mixture-of-depths, mixture-of-experts, model-parallelism, moe-routing, multi-token-prediction, nerf, neural-radiance-fields-math, news-sentiment-trading, nlp-financial-analysis, offline-rl, portfolio-optimization-ml, positional-encodings, quantization, rlhf, rope-scaling, slm, sparse-autoencoders, state-space-models, temporal-fusion-transformer, tokenization, training-dynamics, universal-approximation-theory, vector-databases, vision-transformers, vlm, volatility-forecasting

## Entity: variational-autoencoders
- Title: Variational Autoencoders (VAE)
- Category: AI Theory
- Language: en
- Key Concepts: disentangled, Theoretical Significance, Related Articles, Interpretation:, Variational Autoencoder, encoder, Closed-Form KL Divergence, The Reparameterization Trick, decoder, Connection to Diffusion Models, Extensions and Applications, reparameterization trick, discrete, β-VAE, The Evidence Lower Bound (ELBO)
- References: automatic-differentiation, convex-optimization, diffusion-models, generative-models, math/kolmogorov-probability-axioms, neural-odes, sparse-autoencoders, statistical-mechanics
- Backlinks: bayesian-deep-learning, bayesian-inference, change-of-variables, contrastive-learning, convexity, diffusion-models, information-theory-basics, jensens-inequality, manifold, pca, variational-inference

## Entity: vision-transformers
- Title: Vision Transformers (ViT)
- Category: AI Theory
- Language: en
- Key Concepts: Position Embeddings, Learnable Embeddings, Architecture, Mathematical Framework, Scaling, Python Implementation (Conceptual), [[transformer-architecture|Transformer]] architecture, ViT vs. CNNs, [CLS] Token, [[transformer-architecture|Transformer]] Encoder, Data Requirement, Inductive Bias, Receptive Field, Related Topics, "An Image is Worth 16x16 Words."
- References: attention-mechanisms, contrastive-learning, transformer-architecture, vlm

## Entity: about
- Title: About Me
- Category: About Me
- Language: en
- Key Concepts: Risk Manager, Technical Stack, Models, Principal Economist / Risk Analyst, Tools, EGOR GALKIN, Event Manager, Nyquist, 2025 – Present, 2022 – 2023, Quantum Physics, Expert, Quantitative Analyst and AI Engineer, [[llm]] Wiki, Risk Analyst
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
- Key Concepts: Method of Stationary Phase, Laplace's Method, Asymptotic Analysis of Integrals, The Saddle-Point Method (Method of Steepest Descent)

## Entity: calculus-of-variations
- Title: Calculus of Variations
- Category: Advanced Analysis
- Language: en
- Key Concepts: Variation and Modern AI, Euler-Lagrange equation, Hamilton's Principle, Euler-Lagrange Equation, Related Topics, Regularization, Geodesics, Calculus of Variations, functionals, Neural ODEs, The Fundamental Problem, Visualization: The Shortest Path (Geodesic), Lagrangian, Variational Inference (VI), Principles of Physics
- References: functional-analysis, lagrangian-mechanics, neural-odes, variational-inference
- Backlinks: deep-ritz-method, fixed-point-theorems

## Entity: fixed-point-theorems
- Title: Fixed Point Theorems
- Category: Advanced Analysis
- Language: en
- Key Concepts: existence, Visualization: The Contraction Map, Solving ODEs, constructive method, set-valued functions, 3. Schauder Fixed Point Theorem (The Engine of PDEs), compact, Applications in AI, 4. Kakutani Fixed Point Theorem (Set-Valued Mappings), The Intuition, Economics, 1. Banach Contraction Principle (The Engine of Convergence), Game Theory, contraction mapping, 2. Brouwer Fixed Point Theorem (The Engine of Topology)
- References: calculus-of-variations, convexity, hilbert-banach-spaces, reinforcement-learning
- Backlinks: proximal-algorithms-admm

## Entity: fredholm-theory
- Title: Fredholm Theory
- Category: Advanced Analysis
- Language: en
- Key Concepts: Kernel Machines, Why It Matters for AI: Neural Operators, Spectral Analysis, Inverse Problems, Visualization: Kernel Smoothing, Related Topics, index, Fredholm operator, kernel, The Integral Equation, Index and Fredholm Operators, Fredholm Theory, Fredholm Alternative, integral equations, Atiyah-Singer Index Theorem
- References: fourier-neural-operators, functional-analysis, partial-differential-equations

## Entity: microlocal-analysis
- Title: Microlocal Analysis
- Category: Advanced Analysis
- Language: en
- Key Concepts: Why It Matters, Propagation of Singularities, Quantum Chaos, AI Interpretability, where, Microlocal Analysis, cotangent bundle, Pseudodifferential Operators ($\Psi$DO), Hörmander, Visualization: Singularity Propagation, phase space, Pseudodifferential Operators, Inverse Problems, The Wave Front Set ($WF$), Hamiltonian trajectories
- References: schwartz-distributions, symplectic-geometry

## Entity: proximal-algorithms-admm
- Title: Proximal Algorithms & ADMM
- Category: Advanced Analysis
- Language: en
- Key Concepts: DERIVATION: Proximal Operator of the $L_1$ Norm, Proximal Gradient Method, Related Topics, Proximal Algorithms & ADMM, proximal operator, What Is It, soft-thresholding, Augmented Lagrangian, ADMM: Alternating Direction Method of Multipliers, Convergence, The Proximal Operator, Alternating Direction Method of Multipliers (ADMM)
- References: convex-optimization, fixed-point-theorems

## Entity: deep-ritz-method
- Title: The Deep Ritz Method
- Category: Advanced Analysis
- Language: en
- Key Concepts: The Deep Ritz Method, DERIVATION: Ritz Method for the Heat Equation, Related Topics, The Variational Principle, Curse of Dimensionality:, Smoothness:, Penalty Method, Handling Boundary Conditions, variational principle, What Is It, Mesh-free:, Architecture: Residual Networks, Advantages and High Dimensions, Residual Networks (ResNets), Deep Ritz Framework
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
- Key Concepts: Lexical Analysis, Syntax Analysis (Parsing), LL(k) Parsers:, LR(k) Parsers:

## Entity: p-vs-np
- Title: Complexity Theory: P vs NP and Cook-Levin
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: P vs NP problem, Cook-Levin Theorem, Formal Definitions

## Entity: cryptography-math
- Title: Cryptography: RSA and Elliptic Curves
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: RSA (Rivest-Shamir-Adleman), Elliptic Curve Cryptography (ECC)

## Entity: distributed-systems-consensus
- Title: Distributed Systems: CAP and Consensus
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: CAP Theorem, Paxos Consensus, Partition tolerance:, Consistency:, Availability:

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
- Key Concepts: Bounds and Theorems, Vertex Coloring, Four Color Theorem:, Brooks' Theorem:, chromatic number

## Entity: max-flow-min-cut
- Title: Graph Theory: Max-Flow Min-Cut Theorem
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: The Theorem, Ford-Fulkerson Algorithm, Max-Flow Min-Cut Theorem

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
- Key Concepts: Overview, Scalar and Vector Fields

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
- Key Concepts: Jacobi Fields and Conjugate Points, The Second Variation

## Entity: instrumental-variables
- Title: Econometrics: Instrumental Variables
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The IV Estimator, Exogeneity (Exclusion Restriction):, 2SLS, Relevance:

## Entity: sobolev-embeddings
- Title: Functional Analysis: Sobolev Embeddings
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The Spaces, Sobolev Embedding Theorems

## Entity: harmonic-analysis
- Title: Harmonic Analysis: Fourier Convergence
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Pointwise Convergence (Dirichlet/Jordan):, $L^2$ Convergence:, Convergence Theorems, Carleson's Theorem:, Fourier Series
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
- Key Concepts: Iterative Updates, The Lagrangian Relaxation, Primal update (parallelizable):, Dual update (gradient ascent):

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
- Key Concepts: Unscented Transform, Unscented Kalman Filter (UKF), Extended Kalman Filter (EKF)

## Entity: compressed-sensing
- Title: Signal Processing: Compressed Sensing
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The Problem, L1 Minimization

## Entity: hidden-markov-models
- Title: Signal Processing: Hidden Markov Models
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Model Parameters, The Viterbi Algorithm
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
- Key Concepts: exact, Exterior Derivative, closed, Wedge Product, Generalized Stokes' Theorem
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
- Key Concepts: Riesz Representation Theorem, Hilbert Spaces and Riesz Representation, Spectral Theorem
- Backlinks: calculus-of-variations, complex-analysis, fredholm-theory, hilbert-banach-spaces, math/algebraic-topology, math/differential-geometry, math/differentiation-of-measures, math/harmonic-analysis, math/lp-spaces, math/nonparametric-regression, math/ode-stability, math/spectral-theory-operators, math/topology-basics, spectral-theorem-unbounded

## Entity: galois-theory
- Title: Galois Theory: Fields and Solvability
- Category: Advanced Theory
- Language: en
- Key Concepts: Field Extensions and Automorphisms, Solvability by Radicals, Galois extension, solvable group, The Fundamental Theorem

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
- Key Concepts: Poisson Brackets, The Hamiltonian
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
- Key Concepts: Probability Spaces, Radon-Nikodym Theorem, martingale, Martingales

## Entity: special-relativity
- Title: Special Relativity: Minkowski Space and Lorentz Transforms
- Category: Advanced Theory
- Language: en
- Key Concepts: Four-Vectors, Minkowski space, Lorentz Transformations
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
- Key Concepts: Mechanism, Overview

## Entity: dynamic-programming
- Title: Dynamic Programming Basics
- Category: Algorithms
- Language: en
- Key Concepts: Properties, Overlapping Subproblems:, Optimal Substructure:, Overview

## Entity: alpha-factor-discovery
- Title: Alpha Factor Discovery
- Category: Algorithms and ML
- Language: en
- Key Concepts: Non-linearity, Multi-Factor Model Construction, Limitations & Extensions, Alpha Decay Monitoring, Extensions:, Survivorship bias, Alpha Factor Discovery & Mining, Mathematical Framework, Factor Attribution, Universality, Limitations:, Decay analysis, Genetic Programming (GP), Orthogonality, IC Decay Profile
- References: bayesian-black-litterman, finance/alpha-stacking, finance/gan, finance/monte-carlo-method, mcmc
- Backlinks: alpha-orthogonalization, alternative-data-alpha, finance/alpha-stacking, finance/lightgbm-xgboost, finance/meta-labeling, finance/online-learning-mab, finance/shap-interpretability, model-free-rl-factors

## Entity: alpha-orthogonalization
- Title: Alpha Orthogonalization
- Category: Algorithms and ML
- Language: en
- Key Concepts: 1. Residualization, Alpha Decay Analysis, The Mathematical Process, decay rate, True Capacity, Alphas, Alpha Orthogonalization: Factor Independence, Market Neutral, Performance Attribution, The Problem: Factor Crowding, Neutral, Alpha Orthogonalization, Incremental Information, 2. Risk Neutralization, Currency Neutral
- References: alpha-factor-discovery, finance/factor-attribution, pca
- Backlinks: causal-inference-trading, pca-statarb

## Entity: alternative-data-alpha
- Title: Alternative Data Alpha
- Category: Algorithms and ML
- Language: en
- Key Concepts: Energy, Lead Time, Limitations & Extensions, [[gan]]-based augmentation, Legal and regulatory risk, Extensions:, Consumer Sector, Real Estate, Signal-to-noise decomposition, IC vs. Crowding, Key Metrics, Crowding risk, NLP + alt-data fusion, Mathematical Framework, Lead-lag structure
- References: alpha-factor-discovery, finance/alpha-stacking, finance/gan, finance/value-at-risk, mcmc, news-sentiment-trading
- Backlinks: news-sentiment-trading

## Entity: causal-inference-trading
- Title: Causal Inference in Trading
- Category: Algorithms and ML
- Language: en
- Key Concepts: Causal Inference, 2. The Do-Calculus (Judea Pearl), Why Citadel uses Causal AI, Backtest Overfitting, Related Topics, Policy Evaluation, Structural Causal Model (SCM), Tools of the Trade, Alpha Orthogonalization, Natural Experiments, Control, correlation, Causal Inference in Trading, 1. Directed Acyclic Graphs (DAGs), Granger Causality
- References: alpha-orthogonalization, causal-inference, finance/probability-of-backtest-overfitting
- Backlinks: causal-inference-do-calculus

## Entity: finance/cointegration
- Title: Cointegration
- Category: Algorithms and ML
- Language: en
- Key Concepts: augmented Dickey-Fuller (ADF), Granger Representation Theorem., Pairs trading and statistical arbitrage., Yield curve modelling., Engle-Granger two-step method, Cointegration, cointegration, vector error correction model (VECM), trace test, Purchasing power parity (PPP)., Step 1., Near-integration., Spurious regression (Granger and Newbold, 1974)., Related Articles, Portfolio construction.
- References: arima-models, central-limit-theorem, copula-models, finance/value-at-risk, hidden-markov-models, kalman-filter, math/law-of-large-numbers, math/spectral-theory-operators
- Backlinks: arima-models, pairs-trading

## Entity: convolutional-volatility-resolution-clustering
- Title: Convolutional Volatility Resolution Clustering (CVRC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Limitations & Extensions, Regime-Adaptive Trading, Extensions:, Multi-scale, Low-Frequency Equilibrium, Volatility Surface as an Image, Transient Turbulence, Variational Autoencoder (VAE), Mathematical Framework, Exotic Options Pricing, Layer 3, Limitations:, Layer 1, Adversarial regime generation, Convolutional Feature Extraction
- References: arch-models, finance/gan, finance/spectral-analysis, garch-models, manifold-learning, volatility-forecasting, volatility-modulated-spectral-surface, wavelet-transform

## Entity: deep-galerkin
- Title: Deep Galerkin Method (DGM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Why Tier-1 Quants Use It, Automatic Differentiation, Deep Galerkin Method (DGM), Curse of Dimensionality, Sampling, Visualization: The Curse Broken, The Core Idea: PDE as a Loss Function, Related Topics, Autograd, Neural Network, How It Works, Optimization, Deep Galerkin Method (DGM) in Finance, High Dimensions, Continuous Solution
- References: automatic-differentiation, black-scholes, convex-optimization, neural-sdes-finance, numerical-pde-finance
- Backlinks: deep-ritz-method, schwartz-distributions

## Entity: deep-hedging
- Title: Deep Hedging
- Category: Algorithms and ML
- Language: en
- Key Concepts: Zero Transaction Costs, The Failure of Black-Scholes Hedging, Model-Agnostic, The Deep Hedging Approach, Buehler et al. (2019), Global Optimization, Visualization: BS Delta vs. Deep Hedging, Complete Markets, 2. The Neural Network, Universal, market frictions, 1. The Objective Function, Deep Hedging: Reinforcement Learning for Derivatives, Convex Risk Measure, Continuous Trading
- References: finance/delta-hedging-practice, finance/rough-volatility, reinforcement-learning, transformer-architecture

## Entity: fama-macbeth-regression
- Title: Fama-MacBeth Regression
- Category: Algorithms and ML
- Language: en
- Key Concepts: Shanken correction, Generated regressors, Characteristic-based models, Risk Premia Simulation Chart, Newey-West adjustment, Step 1: Time-Series Regressions (Factor Loadings), Alpha attribution, errors-in-variables (EIV), Fama-MacBeth Regression, The Two-Step Procedure, Small cross-section, Pricing factor discovery, Fama-MacBeth regression, Academic asset pricing, Why Fama-MacBeth Standard Errors Work
- References: black-scholes, finance/hierarchical-risk-parity, mcmc, portfolio-optimization-ml, ts-cs-factor-analysis
- Backlinks: causal-inference, finance/apt-ross, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, ts-cs-factor-analysis

## Entity: finance/gan
- Title: GANs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: GAN Architecture, Mode collapse, Volatility clustering, Absence of linear autocorrelation, WGAN, Generative Adversarial Networks (GANs), FinGAN, Stylised Facts the GAN Must Capture, Data augmentation, Applications in Quant Finance, Visualization: Real vs. Synthetic Paths, Background, Mathematical Concept: Minimax Game, Limitations and Extensions, The Discriminator ($D$)
- References: finance/monte-carlo-method, finance/value-at-risk, fraud-detection, heston-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, convolutional-volatility-resolution-clustering, f-divergences, finance/adversarial-stress-testing, fraud-detection, lob-prediction, news-sentiment-trading, portfolio-optimization-ml, timegan, volatility-modulated-spectral-surface

## Entity: finance/gnn-finance
- Title: Graph Neural Networks in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Graph Neural Networks in Finance, Related Articles, Graph Convolutional Networks (GCN), Financial Applications, Implementation, Graph [[attention-mechanisms|Attention]] Networks (GAT), GNNs (Graph Neural Networks)
- References: attention-mechanisms, finance/eigenportfolio-rmt, finance/systemic-contagion-debtrank, finance/transformer-timeseries, fraud-detection

## Entity: finance/hidden-markov-models
- Title: Hidden Markov Models (HMM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Gaussian emissions, The Three Fundamental Problems, Fixed number of states, Risk management, Multivariate HMMs, 2. Decoding (Viterbi Algorithm), 3. Learning (Baum-Welch / EM Algorithm), The Markov Property, 1. Evaluation (Forward-Backward Algorithm), Adaptive strategies, Hidden Markov Models (HMM), Initial Distribution $\pi$, E-step, Hidden Markov Model (HMM), market regime detection
- References: avellaneda-stoikov, finance/phase-space-reconstruction, finance/shannon-entropy, garch-models, kalman-filter

## Entity: finance/lightgbm-xgboost
- Title: LightGBM and XGBoost for Factor Signals
- Category: Algorithms and ML
- Language: en
- Key Concepts: Financial Data Challenges, Non-stationarity, Related Articles, LightGBM, LightGBM and XGBoost for Factor Signals, Temporality, XGBoost, Overfitting Controls, Gradient Boosting, Class imbalance, Implementation
- References: alpha-factor-discovery, finance/probability-of-backtest-overfitting, finance/shap-interpretability, finance/transformer-timeseries
- Backlinks: finance/shap-interpretability, finance/transformer-timeseries

## Entity: lob-prediction
- Title: Limit Order Book (LOB) Prediction
- Category: Algorithms and ML
- Language: en
- Key Concepts: Derived Features, Trade flow imbalance (TFI), Depth imbalance at level $k$, Execution Algorithms, Micro-Price Correlation, Bid-ask spread, Limit Order Book (LOB) Prediction, Python: Full LOB Feature Engineering, Model Architectures, Price pressure, natural 2D structure, Key Metrics, Level-1 Features (Best Bid/Ask), Weighted Mid-price, Mid-price return
- References: finance/gan, finance/market-impact-scaling, finance/value-at-risk, model-free-rl-factors, optimal-execution
- Backlinks: deep-rl-execution, finance/market-impact-scaling, finance/order-flow-imbalance, finance/transformer-timeseries

## Entity: finance/longstaff-schwartz
- Title: Longstaff-Schwartz Method (LSM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Advantages, Dimensionality, Mathematical Framework, Visualization: Exercise vs. Continuation, Optimal stopping boundaries, Multi-Asset Extension, Regression bias, Continue Holding, Terminal Value, Backward Induction, Background, Limitations and Extensions, The Challenge of American Options, Continuation value, Intrinsic value
- References: black-scholes, finance/monte-carlo-method, heston-model, numerical-pde-finance, ornstein-uhlenbeck-process
- Backlinks: convertible-bonds, finance/barrier-asian-options, finance/follmer-schweizer, finance/free-boundary-american, finance/monte-carlo-method, finance/oas, numerical-pde-finance

## Entity: finance/meta-labeling
- Title: Meta-Labeling Framework
- Category: Algorithms and ML
- Language: en
- Key Concepts: Primary Model, Arbitrage, Position sizing, Earnings Plays, Meta-Labeling Framework (Marcos Lopez de Prado), Improved F1-Score, Triple barrier labeling, How It Works, size, Mathematical Framework, Secondary Model, Stacking, Trend Following, Benefits, Sizing
- References: alpha-factor-discovery, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/random-matrix-theory
- Backlinks: finance/alpha-stacking, finance/probability-of-backtest-overfitting, model-free-rl-factors, news-sentiment-trading

## Entity: model-free-rl-factors
- Title: Model-Free RL for Factor Portfolios
- Category: Algorithms and ML
- Language: en
- Key Concepts: State Space, DDPG (Deep Deterministic Policy Gradient), Action Space, Mathematical Framework, Python: Dynamic Factor Allocation with Stable Baselines3, Hierarchical RL, Model-Free Reinforcement Learning (RL), Challenges and Validation, Reward Shaping, Limitations and Extensions, Non-stationarity, Differential Sharpe Ratio, Visualization, PPO (Proximal Policy Optimization), Key Design Choices
- References: alpha-factor-discovery, black-scholes, finance/hierarchical-risk-parity, finance/meta-labeling, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/shannon-entropy, hidden-markov-models, mcmc, rl-trader
- Backlinks: finance/online-learning-mab, finance/probability-of-backtest-overfitting, lob-prediction, portfolio-optimization-ml

## Entity: finance/monte-carlo-method
- Title: Monte Carlo Method
- Category: Algorithms and ML
- Language: en
- Key Concepts: Average, 1. Antithetic Variates, Quasi-Monte Carlo, Quasi-MC, 4. Stratified Sampling, Pros and Cons, 2. Control Variates, 3. Importance Sampling, Multidimensionality, Core Concept, Multi-Asset Correlation via Cholesky Decomposition, Python: Vectorized Asian Option Pricing with Variance Reduction, Limitations and Extensions, Discount, Variance Reduction Techniques
- References: black-scholes, finance/longstaff-schwartz, finance/particle-filter, finance/quasi-monte-carlo, finance/value-at-risk, inference-serving, mcmc, qft-basic
- Backlinks: alpha-factor-discovery, automatic-differentiation, avellaneda-stoikov, black-scholes, bootstrap, brownian-bridge, convertible-bonds, copula-models, finance/adversarial-stress-testing, finance/barrier-asian-options, finance/black-swan-scenarios, finance/follmer-schweizer, finance/free-boundary-american, finance/gan, finance/hawkes-process, finance/levy-processes, finance/libor-market-model, finance/longstaff-schwartz, finance/market-impact-scaling, finance/meta-labeling, finance/nash-equilibrium, finance/oas, finance/particle-filter, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/sha-256, finance/shor-algorithm, finance/systemic-contagion-debtrank, finance/value-at-risk, finance/xva, fraud-detection, gaussian-processes, generative-models, generative-scenario-models, kelly-criterion, lln-clt, math/sde-numerical-methods, model-free-rl-factors, numerical-pde-finance, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, qft-basic, quantum-amplitude-estimation, risk-neutral-valuation, rl-trader, volatility-forecasting

## Entity: finance/multivariate-hmm
- Title: Multivariate Hidden Markov Models
- Category: Algorithms and ML
- Language: en
- Key Concepts: Model Selection, Transition matrix, Forward, Initial distribution, Multivariate Hidden Markov Models, Model Structure, Interpretation, E-step: Forward-Backward, M-step, Related Articles, Gaussian emission, Multivariate HMM, Implementation, Baum-Welch (EM) Algorithm, Posteriors
- References: copula-models, hidden-markov-models, kalman-filter, regime-switching-factors, volatility-forecasting

## Entity: finance/nash-equilibrium
- Title: Nash Equilibrium
- Category: Algorithms and ML
- Language: en
- Key Concepts: Mean-field games, Auction Theory, Practical Relevance in Finance, Python: Finding Equilibria in a 2x2 Game, Zero-Sum Game, Best Response, Nash Equilibrium, Oligopoly Models, Systemic Risk, Rationality assumption, Dynamic games, Limitations and Extensions, Market Making as a Game, Algorithmic Trading, Visualization
- References: avellaneda-stoikov, finance/adversarial-stress-testing, finance/market-impact-scaling, finance/monte-carlo-method, optimal-execution
- Backlinks: finance/systemic-contagion-debtrank

## Entity: neural-sdes-finance
- Title: Neural SDEs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Stochastic Re-parameterization, Why Use Neural SDEs?, Visualization: Neural vs. Classical Diffusion, The Adjoint Method, Calibration, Training via Adjoint Sensitivity, Drift Network, continuous-time generative model, Neural Stochastic Differential Equations (Neural SDEs), Applications, Neural SDEs in Finance, The Mathematical Framework, Path-Dependency, Diffusion Network, Related Topics
- References: finance/rough-volatility, finance/volatility-surface, neural-odes, stochastic-differential-equations
- Backlinks: deep-galerkin, path-dependent-volatility, timegan

## Entity: news-sentiment-trading
- Title: News Sentiment Trading System
- Category: Algorithms and ML
- Language: en
- Key Concepts: Sarcasm and irony, Signal decay model, Python: Full Sentiment Pipeline, Entity Linking, Practical Implementation Guide, NLP Pipeline Components, Key Metrics, Lexicon-based, Market impact, Latency, Coverage, Sentiment Scoring, Sentiment Dispersion, Data Ingestion, Multilingual news
- References: alternative-data-alpha, finance/gan, finance/meta-labeling, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: alternative-data-alpha, llm-financial-analysis

## Entity: numerical-pde-finance
- Title: Numerical PDE Methods in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Finite Difference Schemes, Penalty method, Greeks, American Options: Free Boundary Problem, Multi-Asset: ADI Methods, Uniform in log-space, Barrier options, Convergence, General $\Theta$-Scheme, Comparison: PDE vs Trees vs Monte Carlo, Crank-Nicolson ($\theta = 1/2$), complementarity condition, American option pricing, Python: Crank-Nicolson for European Put, [[convertible-bonds]]
- References: black-scholes, convertible-bonds, finance/longstaff-schwartz, finance/monte-carlo-method, finance/optimal-stopping-american, partial-differential-equations
- Backlinks: black-scholes, deep-galerkin, feynman-kac, finance/longstaff-schwartz, neural-operators, stochastic-control

## Entity: finance/online-learning-mab
- Title: Online Learning and Multi-Armed Bandits
- Category: Algorithms and ML
- Language: en
- Key Concepts: Online Learning and Multi-Armed Bandits, Problem and Regret, Exp3 for Adversarial Environments, Related Articles, Thompson Sampling, Multi-Armed Bandit (MAB), UCB (Upper Confidence Bound), UCB1 achieves, Implementation, Lai-Robbins lower bound, cumulative regret
- References: alpha-factor-discovery, model-free-rl-factors, rl-trader

## Entity: finance/alpha-stacking
- Title: Orthogonal Alpha Stacking
- Category: Algorithms and ML
- Language: en
- Key Concepts: Orthogonal Alpha Stacking & Residualization, Factor Neutralization, Limitations & Extensions, Extensions:, Risk Management, Dynamic residualization, Multi-Signal Gram-Schmidt, Mathematical Framework, ICIR-weighted, Robust PCA / [[random-matrix-theory]], Regularization, Limitations:, Regulatory Reporting, Signal Correlation Before/After Residualization, residualization via OLS regression
- References: alpha-factor-discovery, convex-optimization-trading, finance/hierarchical-risk-parity, finance/meta-labeling, finance/random-matrix-theory
- Backlinks: alpha-factor-discovery, alternative-data-alpha, finance/apt-ross, finance/asymptotic-arbitrage-large-markets

## Entity: finance/particle-filter
- Title: Particle Filter (SMC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Initialize, Distributions, Resample, Risk Management, Degeneracy, Particle Filter, State-Space Formulation, Regime Detection, For each time step $t = 1, 2, \ldots$:, Mathematical Framework, Predict, Curse of dimensionality, Python: Stochastic Volatility Tracking, Volatility Estimation, Algorithm: Bootstrap Particle Filter
- References: finance/monte-carlo-method, heston-model, hidden-markov-models, mcmc, ornstein-uhlenbeck-process
- Backlinks: conditionally-gaussian-processes, finance/heston-model, finance/monte-carlo-method, finance/phase-space-reconstruction, kalman-filter, nonlinear-filtering, pairs-trading

## Entity: fastest-mean-reversion
- Title: Portfolios of Fastest Mean Reversion
- Category: Algorithms and ML
- Language: en
- Key Concepts: Ornstein-Uhlenbeck (OU) process, Fastest Mean Reversion, Rayleigh Quotient, Visualization: Reversion Speed, Related Topics, $L_1$-regularization (LASSO), smallest generalized eigenvalue, Sparse Mean-Reverting Portfolios, Sparse PCA, Sparse Portfolio, The Box-Tiao / Generalized Eigenvalue Approach, Portfolios of Fastest Mean Reversion, The Mathematical Objective, speed of mean reversion
- References: ornstein-uhlenbeck-process, pairs-trading, pca
- Backlinks: pca-statarb

## Entity: finance/probability-of-backtest-overfitting
- Title: Probability of Backtest Overfitting
- Category: Algorithms and ML
- Language: en
- Key Concepts: Walk-forward validation, The Deflated Sharpe Ratio, Selection Bias under Multiple Testing (SBM), Dependent strategies, Deflated Sharpe Ratio (DSR), Combinatorially Symmetric Cross-Validation (CSCV), silent killer, The PBO Formula, Probability of Backtest Overfitting (PBO), Limitations and Extensions, Non-stationarity, Visualization, Out-of-Sample (OOS), Background and Motivation, Related Topics
- References: finance/meta-labeling, finance/monte-carlo-method, finance/value-at-risk, model-free-rl-factors
- Backlinks: bayesian-black-litterman, causal-inference-trading, convex-optimization-trading, finance/lightgbm-xgboost, finance/meta-labeling, finance/shap-interpretability, model-free-rl-factors, numeraire-invariant-hedging, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, timegan, ts-cs-factor-analysis

## Entity: finance/quasi-monte-carlo
- Title: Quasi-Monte Carlo Methods
- Category: Algorithms and ML
- Language: en
- Key Concepts: Scrambled (randomized) QMC, ANOVA decomposition, variation of $f$ in the sense of Hardy and Krause, From random to deterministic: discrepancy, QMC vs MC convergence, Related Articles, Quasi-Monte Carlo Methods, The Koksma-Hlawka inequality, Effective dimension and ANOVA, Niederreiter-Xing., Sobol' sequence., Koksma-Hlawka inequality, Halton sequence., low-discrepancy sequences, CVA/XVA computation.
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, kalman-filter, math/law-of-large-numbers
- Backlinks: finance/monte-carlo-method

## Entity: finance/random-matrix-theory
- Title: Random Matrix Theory (RMT)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Portfolio optimization, Random Matrix Theory (RMT), Step 2 — Separate signal from noise:, Bulk universality, No shrinkage of direction, Marchenko-Pastur Distribution, Risk factor discovery, condition number, Eigenvector noise, IID assumption, Execution cost models, Mathematical Framework, Wigner semicircle, Non-Gaussian returns, Large-$N$ limit
- References: finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/value-at-risk, math/spectral-theory-operators, quantum-entanglement
- Backlinks: convex-optimization-trading, cross-impact, eigenvalues-eigenvectors, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/meta-labeling, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, nonlinear-shrinkage, portfolio-optimization-ml, quantum-entanglement, regime-switching-factors

## Entity: regime-switching-factors
- Title: Regime-Switching Factor Strategies
- Category: Algorithms and ML
- Language: en
- Key Concepts: filtered probability, Filtering and Smoothing, Risk management, Dynamic factor allocation, stationary distribution, Regime-Switching Factor Strategies, smoothed probability, Mathematical Framework, Regime-conditional optimization, Non-Gaussian emissions, Options market making, Regime-Conditional Factor Betas, Factor reversals, Background, Limitations and Extensions
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc
- Backlinks: finance/multivariate-hmm, hmm-particle-filters, rl-trader

## Entity: rl-trader
- Title: Reinforcement Learning (RL) Trader
- Category: Algorithms and ML
- Language: en
- Key Concepts: Markov Decision Process (MDP), Reward shaping, State space, Position-Based Formulation, Adversarial market, Transition, Mathematical Framework, Policy Gradient (PPO), Market impact, Bellman Equation and Q-Function, Action space, Crypto HFT, Multi-agent RL (MARL), Reward Functions, action-value function
- References: attention-mechanisms, finance/monte-carlo-method, finance/value-at-risk, mcmc, optimal-execution, regime-switching-factors
- Backlinks: deep-rl-execution, finance/online-learning-mab, model-free-rl-factors, reinforcement-learning

## Entity: finance/sha-256
- Title: SHA-256 (Secure Hash Algorithm)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Collision resistance, Merkle-Damgård construction, Merkle proofs, Proof-of-Work, Efficiency, Mathematical Framework, Length extension attacks, Compression Function, Quantum resistance, Background, Avalanche effect, SHA-256 (Secure Hash Algorithm), Limitations and Extensions, Output length, Practical Applications
- References: finance/lempel-ziv-complexity, finance/monte-carlo-method, finance/shannon-entropy, finance/shor-algorithm, mcmc
- Backlinks: finance/shor-algorithm

## Entity: finance/shap-interpretability
- Title: SHAP and ML Model Interpretability
- Category: Algorithms and ML
- Language: en
- Key Concepts: Efficiency, SHAP vs LIME vs Permutation Importance, Financial Use Cases, TreeSHAP, Related Articles, Properties, SHAP and ML Model Interpretability, SHAP (SHapley Additive exPlanations), Symmetry, Shapley Values, Null player
- References: alpha-factor-discovery, finance/lightgbm-xgboost, finance/probability-of-backtest-overfitting, fraud-detection
- Backlinks: finance/lightgbm-xgboost

## Entity: finance/shannon-entropy
- Title: Shannon Entropy in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Regime detection, Maximum Entropy Portfolios, Mutual Information, Axiomatic Derivation, Transfer Entropy, mutual information, Market Efficiency via Entropy, Chain rule, Binning sensitivity, Data processing inequality, Mathematical Framework, Shannon Entropy, Feature selection, Non-negativity, Topological entropy
- References: finance/lempel-ziv-complexity, finance/random-matrix-theory, hidden-markov-models, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ai-theory/neural-tangent-kernel, change-of-variables, contrastive-learning, course-math-for-ai, decision-theory, deep-rl-execution, dirichlet-forms, distributions-zoo, dpo, embedding-models, empirical-processes, entropy-information, entropy-pooling, ergodic-theory, ergodic-theory-markov, f-divergences, finance/coherent-risk-measures, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hidden-markov-models, finance/lempel-ziv-complexity, finance/levy-esscher-continuous, finance/quasi-monte-carlo, finance/sha-256, finance/shor-algorithm, finance/upper-lower-hedging-prices, finance/zeta-field, financial-entropy, free-probability, hydrodynamic-limits, information-geometry-finance, information-theory-basics, jensen-inequality, jensens-inequality, kolmogorov-complexity, language-models/safety/rlhf-dpo, laplacian, logistic-regression, martingale, math/bayesian-asymptotics, math/concentration-inequalities, math/ergodic-theorems-birkhoff, math/gaussian-process-sample-paths, math/harmonic-analysis, math/information-theory, math/interacting-particle-systems, math/large-deviations-cramer, math/m-estimators, math/sigma-algebra-measurability, maximum-entropy, maximum-entropy-irl, mle, model-free-rl-factors, multi-token-prediction, multivariate-normal, mutual-information-divergence, naive-bayes, neural-scaling-laws, nlp-financial-analysis, online-learning-regret, pac-learning, path-integral-control, ppo, probability-distributions, probing-classifiers, quantum-entanglement, quantum-information-entropy, ricci-flow, risk-neutral-valuation, rlhf, sac-math, slm, small-ball-probabilities, soft-actor-critic, sparse-autoencoders, statistical-mechanics, training-dynamics, volatility-modulated-spectral-surface

## Entity: finance/shor-algorithm
- Title: Shor's Algorithm
- Category: Algorithms and ML
- Language: en
- Key Concepts: Complexity Analysis, Probabilistic success, Shor's Algorithm, Reduction to Order-Finding, Quantum Order-Finding via QFT, Timeline uncertainty, Mathematical Framework, elliptic curve cryptography (ECC), Total, Error correction overhead, discrete logarithm problem, Post-quantum cryptography (PQC), Discrete Logarithm, Long-term data security, Quantum risk premium
- References: finance/monte-carlo-method, finance/sha-256, finance/shannon-entropy, finance/spectral-analysis, mcmc
- Backlinks: finance/fft, finance/sha-256

## Entity: pca-statarb
- Title: StatArb with PCA (Avellaneda-Lee)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Buy, The Residual ($\tilde{R}_i$), synthetic market factors, Related Topics, Why it Dominates, Statistical Arbitrage with PCA (Avellaneda-Lee), Execution, Modeling the Residual (The Trade), Beta-neutral and Sector-neutral, Factor Regression, Principal Component Analysis (PCA), The PCA Approach, The Signal (S-score), Extract Factors, Visualization: The S-Score
- References: alpha-orthogonalization, fastest-mean-reversion, ornstein-uhlenbeck-process, pairs-trading, pca

## Entity: ts-cs-factor-analysis
- Title: TS vs CS Factor Analysis
- Category: Algorithms and ML
- Language: en
- Key Concepts: Identifies, Jensen's alpha, errors-in-variables (EIV) bias, Estimation risk in betas, Factor model validation, EIV bias, Risk attribution, Mathematical Framework, Data requirement, Time-Series (TS) Regression, Assumption, Long-short factor portfolios, Errors-in-Variables (EIV) Problem, Testing, Zoo of factors
- References: black-scholes, fama-macbeth-regression, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: fama-macbeth-regression, finance/factor-attribution

## Entity: timegan
- Title: TimeGAN: Generating Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: Reconstruction Loss, there is only one history, Visualization: Autocorrelation Preservation, Generator, Embedder (Encoder), The TimeGAN Architecture, Data Augmentation, The Flaw of Standard GANs, TimeGAN: Generating Synthetic Financial Data, Discriminator, TimeGAN, Supervised Loss (The Key), temporal dynamics, Privacy, The Magic: Three Loss Functions
- References: finance/gan, finance/probability-of-backtest-overfitting, neural-sdes-finance

## Entity: finance/transformer-timeseries
- Title: Transformers for Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: Key Architectures, Transformers for Time Series, Temporal Fusion [[transformer-architecture|Transformer]] (TFT, Lim et al. 2021), Related Articles, Practical Advice, Gradient clipping, Variable Selection, Temporal Self-[[attention-mechanisms|Attention]], PatchTST (Nie et al. 2023), Transformers, Normalization, Lookback, Positional encoding, Self-[[attention-mechanisms|Attention]] Mechanism, Gate Residual Networks
- References: attention-mechanisms, finance/lightgbm-xgboost, hidden-markov-models, kalman-filter, lob-prediction, transformer-architecture
- Backlinks: finance/gnn-finance, finance/lightgbm-xgboost

## Entity: vine-copulas
- Title: Vine Copulas for StatArb
- Category: Algorithms and ML
- Language: en
- Key Concepts: Application: Statistical Arbitrage, Related Topics, Why it Beats Linear Models, The Trade, The Flaw of Multivariate Normal, What is a Vine Copula?, bivariate (2D) pair-copulas, Sklar's Theorem, Copulas, Conditional Probability (The Signal), Vine Copulas, Vine Copulas for Statistical Arbitrage, Fit the Vine, Visualization: Bivariate Building Blocks, The Vine Structure
- References: alpha-factor-research, copula-models, pairs-trading

## Entity: clifford-algebras
- Title: Clifford Algebras & Geometric Algebra
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Definition, Clifford Algebras & Geometric Algebra, Rotors and Spinors, Applications in Physics, Multivectors

## Entity: complex-manifolds
- Title: Complex and Kähler Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Almost Complex Structure, Visualization: The Intersection of Geometries, Mirror Symmetry, Fundamental 2-form, 2. Hermitian Metrics, Hermitian Metric, Newlander-Nirenberg Theorem, 1. Almost Complex Structures, Complex manifold, 5. Mirror Symmetry, Calabi-Yau Manifold, Riemannian manifold, integrable, Symplectic manifold, Complex [[manifold-learning|Manifold]]
- References: hodge-theory, manifold-learning, spectral-graph-theory, symplectic-geometry, tensor-calculus
- Backlinks: manifold, ricci-flow

## Entity: connections-curvature
- Title: Connections and Covariant Derivatives
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Einstein Tensor, Ricci Flow, Weyl Tensor ($C_{\rho\sigma\mu\nu}$), Levi-Civita Connection, Holonomy Group, Connections, Curvature, and Holonomy, Covariant Derivative, Metric-compatible, 2. Holonomy: The Geometric Signature of Curvature, 3. The Riemann Curvature Tensor ($R^\rho_{\sigma\mu\nu}$), Christoffel Symbols, 5. Geometric Flow: The Ricci Flow, 4. Decomposing Curvature: Ricci vs. Weyl, Ricci Curvature ($R_{\mu\nu}$), Poincaré Conjecture
- References: gauge-theory-yang-mills, manifold-learning, ricci-flow, tensor-calculus
- Backlinks: course-math-for-ai, geometric-deep-learning, hodge-theory, ricci-flow, symplectic-geometry, tensor-calculus

## Entity: delay-differential-equations
- Title: Delay Differential Equations in Neural Systems
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hopf bifurcation, Delay-Induced Bifurcations, Linear Stability Analysis, Delay Differential Equations in Neural Systems, Mathematical Formulation

## Entity: geometric-deep-learning
- Title: Geometric Deep Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Pooling / Coarsening, The Solution, Equivariance, Deep Sets, Drug Discovery, 2. The 5 Domains of GDL, Robotics, Groups (Homogeneous Spaces), Geometric Deep Learning (GDL), 4. Mathematical Implementation, Grids (Euclidean Space), Non-linear Activation, Sets, Symmetry, Geometric Deep Learning: The Erlangen Program for ML
- References: connections-curvature, lie-groups-algebras, manifold-learning, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, course-math-for-ai, graph-curvature-oversquashing, lie-groups-algebras, tensor-calculus

## Entity: graph-curvature-oversquashing
- Title: Graph Curvature & Over-squashing
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Ollivier-Ricci curvature, Stochastic Discrete Ricci Flow (SDRF), Related Topics, Graph Curvature & Over-squashing, Over-squashing, What Is It, Positive curvature, MATHEMATICAL DERIVATION: ORC on a Triangle, Ollivier-Ricci Curvature, Graph Rewiring (SDRF), Negative curvature, Ricci curvature, Over-squashing and Sensitivity, Spectral Gap and Cheeger Constant
- References: geometric-deep-learning, graph-neural-networks, math/spectral-theory-operators, optimal-transport, ricci-flow, spectral-graph-theory

## Entity: hodge-theory
- Title: Hodge Theory and Harmonic Forms
- Category: Analysis & Geometry
- Language: en
- Key Concepts: exact, 5. Applications, Visualization: Hodge Decomposition, A. Electromagnetism, The Isomorphism, Hodge Theory, [[spectral-graph-theory|Laplacian]], Codifferential, one unique harmonic form, $k$-th De Rham Cohomology Group, B. Topological Data Analysis (TDA), 2. The Hodge Star and Codifferential, Hodge Theory: Bridging Topology and Differential Equations, Betti Number, Hodge Laplacians
- References: connections-curvature, manifold-learning, spectral-graph-theory, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, homological-algebra, tensor-calculus

## Entity: information-geometry-nn
- Title: Information Geometry of Neural Networks
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Natural [[convex-optimization|Gradient Descent]], Curvature and Flat Minima, Information Geometry of Neural Networks, Fisher Information Metric
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: lie-algebras-physics
- Title: Lie Algebras in Physics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hermitian operator, Lie Algebras, Electromagnetism, isospin, Generators and Observables, Gauge Theories and Connections, Heisenberg Uncertainty Principle, Related Topics, strangeness, Strong Force (QCD), Lie Algebras in Physics, 1. Angular Momentum and $\mathfrak{su}(2)$, The Adjoint Representation and Force Carriers, Adjoint Representation, Visualization: Spin Multiplets
- References: general-relativity, lie-groups
- Backlinks: equivariant-diffusion-models

## Entity: lie-groups
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Equivariant Neural Networks, roots, Dynkin diagrams, Representations and Root Systems, Pose Estimation, 2. Lie Algebra ($\mathfrak{g}$), 1. Lie Group ($G$), Examples:, tangent space at the identity, exponential map, Visualization: Group vs. Algebra, Basic Definitions, The Exponential Map, Lie Groups and Lie Algebras, Related Topics
- References: equivariant-nn, manifold-learning, math/differential-geometry
- Backlinks: course-math-for-ai, equivariant-diffusion-models, lie-algebras-physics, random-walks-groups

## Entity: lie-groups-algebras
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Strong Nuclear Force, Equivariant Neural Networks, Robotics, 2. The Exponential Map, Lie Bracket, 1. The Lie Algebra ($\mathfrak{g}$), Lie Algebra, $SE(3)$ (Special Euclidean), 5. Applications in Machine Learning, Exponential Map, 4. Adjoint Representation ($Ad$), $SO(n)$ (Special Orthogonal), Visualization: Group vs. Algebra, Spherical CNNs, Group
- References: gauge-theory-yang-mills, geometric-deep-learning, manifold-learning, tensor-calculus
- Backlinks: geometric-deep-learning

## Entity: manifold-learning
- Title: Manifold Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Image Analysis, Manifold Learning, The Manifold Hypothesis, Key Algorithms, UMAP, 3. [[spectral-graph-theory|Laplacian]] Eigenmaps, Laplace-Beltrami operator, geodesic distances, Applications, Spectral Graph Theory, Visualization: Euclidean vs. Geodesic, Related Topics, Anomaly Detection, 1. Isomap (Isometric Mapping), Mathematical Engine: The Beltrami Operator
- References: math/analysis-geometry/information-geometry, math/differential-geometry, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, ai-theory/knowledge-distillation, category-theory-ml, complex-manifolds, connections-curvature, convolutional-volatility-resolution-clustering, course-math-for-ai, differential-forms, diffusion-models, energy-based-models, equivariant-diffusion-models, ergodic-theory-sgd, f-divergences, finance/asymptotic-expansion-finance, fisher-information, gauge-equivariant-nn, geometric-deep-learning, geometric-mechanics-lie-groups, geometry-loss-landscapes, geometry-of-attention, hodge-theory, implicit-function-theorem, information-geometry-finance, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lie-groups, lie-groups-algebra, lie-groups-algebras, linear-algebra, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/non-euclidean-geometry, math/ode-stability, math/stratonovich-integral, maximum-entropy, metric-spaces, mle, model-merging-procrustes, morse-theory, multimodal-alignment-clip, nerf, neural-operators-fno, neural-radiance-fields-math, nonlinear-filtering, normalization-layers-math, optimal-transport-gromov-wasserstein, pca, pinns-convergence, regularization-implicit-bias, ricci-flow, riemannian-geometry, semimartingales-on-manifolds, stochastic-calculus-manifolds, stochastic-manifolds, symplectic-geometry, symplectic-hamiltonian-nn, tensor-calculus

## Entity: neural-radiance-fields-math
- Title: Mathematical Foundations of NeRF
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Volume Rendering Equation, Mathematical Foundations of NeRF, differential geometry, inverse problem, Relationship to Other Techniques, Neural Radiance Fields (NeRF), [[pdes|Partial Differential Equations]]:, volume rendering, The Radiance Field Function, Plenoxels / Instant NGP:, Positional Encoding and Harmonic Analysis, [[manifold-learning|Manifold Learning]]:, accumulated transmittance, positional encoding, Integrated Positional Encoding (IPE)
- References: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, calculus-integration, manifold-learning, nerf, transformer-architecture

## Entity: mean-field-games
- Title: Mean Field Games
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hamilton-Jacobi-Bellman (HJB) equation, The MFG System, Variational Structure, Mean Field Games, Mathematical Formulation, Fokker-Planck (Kolmogorov forward) equation
- Backlinks: hydrodynamic-limits, mechanism-design, stochastic-games

## Entity: optimal-transport
- Title: Optimal Transport & Wasserstein Metrics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Kantorovich Relaxation, Applications, Entropic Regularization and Sinkhorn Divergence, Optimal Transport & Wasserstein Metrics, Introduction
- Backlinks: convex-analysis, course-math-for-ai, graph-curvature-oversquashing, linear-programming, martingale-optimal-transport, math/analysis-geometry/information-geometry, metric-spaces, radon-nikodym

## Entity: ricci-flow
- Title: Ricci Flow and Geometric Evolution
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Mesh Parameterization, Ricci Flow, Neck-pinch, 5. Applications in Computer Vision and AI, Graph Curvature, Manifold Learning, Ricci Flow: The Evolution of Geometry, 3. Perelman's [[shannon-entropy|Entropy]] Functional, 2. Singularities and Surgery, Intuition, Short-time Existence, Ricci Flow with Surgery, Geometrization Conjecture, Perelman's Breakthrough, 1. The Evolution Equation
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
- Key Concepts: Lyapunov Stability, Lipschitz Constants and Uniqueness, Mathematical Formulation, Stability Theory for Neural ODEs, Adjoint Method and Backward Stability
- References: math/spectral-theory-operators

## Entity: symplectic-geometry
- Title: Symplectic Geometry
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Poisson Bracket, Machine Learning, 3. Poisson Brackets, even-dimensional, Noether's Theorem, Symplectic Geometry, 4. Key Properties, Hamiltonian Mechanics, Darboux's Theorem, Symplectic Integrators, 2. Hamiltonian Vector Fields, Canonical Transformations, locally indistinguishable, Visualization: The Area Preserving Flow, Non-degenerate
- References: ai-physics/hamiltonian-nn, connections-curvature, manifold-learning, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, manifold, microlocal-analysis

## Entity: tensor-calculus
- Title: Tensor Calculus on Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Exterior Derivative ($d$), Levi-Civita Symbol ($\epsilon_{\mu\nu\rho\sigma}$), Antisymmetric Tensors, Killing's Equation, Wedge Product ($\wedge$), Lie Derivative, Calculus on Manifolds, Determinant and Volume, Property, Geometric Deep Learning, 2. Exterior Algebra and Differential Forms, 5. Advanced Applications, 3. The Metric Tensor and the Levi-Civita Symbol, Metric Tensor, Smooth [[manifold-learning|Manifold]]
- References: connections-curvature, geometric-deep-learning, hodge-theory, manifold-learning, spectral-graph-theory
- Backlinks: complex-manifolds, connections-curvature, hodge-theory, lie-groups-algebras, linear-spaces-basis, symplectic-geometry

## Entity: geometry-of-attention
- Title: The Geometry of Attention Mechanisms
- Category: Analysis & Geometry
- Language: en
- Key Concepts: The Geometry of [[attention-mechanisms|Attention]] Mechanisms, Softmax as a Kernel Smoother, Information Geometry of Softmax, Lipschitz Continuity and Stability
- References: attention-mechanisms, manifold-learning, math/spectral-theory-operators

## Entity: tda-mapper-algorithm
- Title: The Mapper Algorithm in TDA
- Category: Analysis & Geometry
- Language: en
- Key Concepts: filter function, Nerve, The Mapper Algorithm in TDA, Higher-dimensional simplices ($k$-simplices), Mathematical Formulation, Algorithm Parameters and Functoriality, The Nerve Complex, Vertices (0-simplices), Edges (1-simplices)

## Entity: math/branching-processes
- Title: Branching Processes
- Category: Applied Probability
- Language: en
- Key Concepts: Critical, Multi-type branching., 2. Nuclear chain reactions., 1. Binary splitting., Theorem., Subcritical case., 2. Geometric offspring., iteration relation, Asymptotic behaviour, 3. Poisson offspring., Related Articles, 1. Population genetics., Supercritical case (Kesten-Stigum theorem)., 4. Viral content propagation., The Galton-Watson process
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/renewal-theory, math/wiener-hopf-factorization
- Backlinks: math/percolation, math/point-processes, math/random-graphs, math/renewal-theory, math/subordinators, math/wiener-hopf-factorization

## Entity: clt
- Title: Central Limit Theorem (CLT)
- Category: Applied Probability
- Language: en
- Key Concepts: Finance, Lindeberg Condition, 4. Role in Modern Systems, always Gaussian, Central Limit Theorem (CLT): The Law of Cosmic Order, Related Topics, Visualization: Convergence to Gaussian, 2. When Does it Fail? (Lindeberg-Feller), Fat Tails, Deep Learning, 3. Rate of Convergence: Berry–Esseen Theorem, Normal Distribution, Berry–Esseen Theorem, Standard Deviation, 1. The Classical CLT (Lindeberg–Lévy)
- References: finance/levy-processes, frtb-es, mle
- Backlinks: characteristic-functions, mgf-characteristic-functions

## Entity: change-of-variables
- Title: Change of Variables
- Category: Applied Probability
- Language: en
- Key Concepts: Related Topics, [[gradient-hessian-jacobian|Jacobian Matrix]], Mutual Information, 3. Key Applications, Generative AI, 1. The 1D Case, Visualization: Stretching the Density, Intuition, Normalizing Flows, A. The Box-Muller Transform, 2. The Multivariate Case (The Jacobian), Log-Normal, C. Differential [[shannon-entropy|Entropy]], Change of Variables: The Geometry of Probability, Scaling Factor
- References: black-scholes, finance/shannon-entropy, gradient-hessian-jacobian, mle, variational-autoencoders

## Entity: characteristic-functions
- Title: Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: 4. Application in Quantitative Finance, Fast Fourier Transform (FFT), always exists, Characteristic Functions: The Fourier View of Probability, Characteristic Function, Universal Existence, B. Sums of Variables, 2. Fundamental Properties, 3. The Lévy Continuity Theorem, C. Moment Generation, [[fourier-transform|Fourier Transform]], A. Uniqueness (Lévy's Inversion Theorem), [[central-limit-theorem|Central Limit Theorem]], Related Topics, A. Fast Option Pricing (FFT)
- References: central-limit-theorem, clt, finance/levy-processes, fourier-transform, merton-jump-diffusion, mgf
- Backlinks: copulas, course-math-for-ai, extreme-value-theory, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/contiguity-measures, math/convergence-semimartingales, math/glivenko-cantelli, math/infinitely-divisible-distributions, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/product-measures-fubini, math/renewal-theory, math/stable-convergence, math/stationary-wide-spectral, math/stein-method, math/triangular-arrays-processes, math/u-statistics, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, wiener-chaos

## Entity: math/concentration-inequalities
- Title: Concentration Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: distribution-free, Sample complexity for PAC learning:, Markov's inequality., only on the range, sub-Gaussian, Chernoff bound, Concentration Inequalities, any function, Related Articles, High-dimensional statistics:, change of measure, Examples:, exponential bounds, Exponential in $n$, bounded i.i.d. random variables
- References: central-limit-theorem, characteristic-functions, empirical-processes, finance/shannon-entropy, martingale-clt, math/large-deviations-cramer, math/law-of-large-numbers
- Backlinks: ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, distributions-zoo, extreme-value-theory, fundamental-inequalities, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/markov-chain-mixing, math/minimax-estimation, math/multiple-testing, math/percolation, math/random-graphs, math/stein-method, random-matrices

## Entity: convergence-types
- Title: Convergence of Random Variables
- Category: Applied Probability
- Language: en
- Key Concepts: Relationship Map, 4. Convergence in Distribution (d), 1. Convergence Almost Surely (a.s.), Central Limit Theorem, Weak Law of Large Numbers, 3. Convergence in Mean ($L^p$), Related Topics, Generalization, Why It Matters for AI, Consistency, The Hierarchy of Convergence, Visualization: Convergence Speed, Convergence of Random Variables, 2. Convergence in Probability (p), false
- References: central-limit-theorem, math/law-of-large-numbers

## Entity: copulas
- Title: Copulas and Dependence
- Category: Applied Probability
- Language: en
- Key Concepts: 2. Student's t-Copula, Related Topics, 3. Archimedean Copulas (Clayton, Gumbel, Frank), Copulas and Dependence Structures, Why Not Just Use Correlation?, Visualization: Tail Dependence, linear, Sklar's Theorem, unique, asymmetric tail dependence, Types of Copulas, zero tail dependence, 1. Gaussian Copula, isolate the dependency structure, Tail Dependence
- References: characteristic-functions, extreme-value-theory, statistical-mechanics
- Backlinks: correlation-association, joint-distributions

## Entity: math/coupling-methods
- Title: Coupling Methods
- Category: Applied Probability
- Language: en
- Key Concepts: Coupling Methods, Definition of Coupling, Coupling Inequality for Convergence Time, optimal coupling, Grand Coupling, coupling, Rates of Convergence, monotone coupling, coupling inequality, Grand coupling, Strassen's theorem, [[weak-convergence-prokhorov|Weak Convergence]] and [[de-finetti-exchangeability|Exchangeability]], Monotone Coupling and Stochastic Ordering, Applications, Central Limit Theorem Proofs
- References: central-limit-theorem, de-finetti-exchangeability, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/weak-convergence-prokhorov
- Backlinks: math/geometric-ergodicity, math/interacting-particle-systems, math/markov-chain-mixing, math/percolation

## Entity: cramer-rao-bound
- Title: Cramer-Rao Lower Bound
- Category: Applied Probability
- Language: en
- Key Concepts: Efficiency, MLE, Efficient Estimator, Related Topics, Cramer-Rao Lower Bound (CRLB), Statistical Efficiency, Score Function, 2. The Inequality, 1. Fisher Information, 4. Importance in Estimation Theory, Fisher Information, UMVUE, 3. General Form (Biased Estimators)
- References: estimator-properties, fisher-information, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information, math/bayesian-asymptotics, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, mle, mle-estimation, sufficient-statistics, umvue-completeness

## Entity: delta-method
- Title: Delta Method
- Category: Applied Probability
- Language: en
- Key Concepts: 2. Derivation Idea, MLE Functions, Multivariate Delta Method, Related Topics, 1. Formal Statement, Standard Errors, Delta Method, 3. Applications
- References: lln-clt, mle-estimation, statistical-inference
- Backlinks: slutsky-theorem, umvue-completeness

## Entity: entropy-information
- Title: Entropy and Information Gain
- Category: Applied Probability
- Language: en
- Key Concepts: Visualization: Entropy vs. Probability, High [[shannon-entropy|Entropy]], Low Entropy, Related Topics, 4. Information Gain (IG), [[shannon-entropy|Entropy]] and Information Gain, 1. Shannon [[shannon-entropy|Entropy]] ($H$), 3. Mutual Information ($I$), any kind of dependency, 2. Conditional Entropy $H(Y \mid X)$, highest Information Gain
- References: finance/shannon-entropy, maximum-entropy
- Backlinks: course-math-for-ai

## Entity: ergodic-theory
- Title: Ergodic Theory & Mixing
- Category: Applied Probability
- Language: en
- Key Concepts: Birkhoff's Ergodic Theorem, Ergodic Theory & Mixing, Ergodicity, Measure-Preserving Dynamical Systems, Mixing and [[shannon-entropy|Entropy]]
- References: finance/shannon-entropy
- Backlinks: stochastic-processes

## Entity: ergodic-theory-markov
- Title: Ergodic Theory of Markov Chains
- Category: Applied Probability
- Language: en
- Key Concepts: aperiodic, Convergence, The Ergodic Theorem for Markov Chains, PageRank, spectral gap, Visualization: Convergence to Stationarity, Time Averages vs Space Averages, Rapid Mixing, Ergodic Theory of Markov Chains, reversible, Applications, Reversibility and Detailed Balance, Statistical Physics, Stationary Distribution ($\pi$), Does the chain settle into a stable equilibrium (stationary distribution), regardless of where it started?
- References: finance/shannon-entropy, math/information-theory, spectral-graph-theory
- Backlinks: mdp

## Entity: de-finetti-exchangeability
- Title: Exchangeability and de Finetti's Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: infinite, de Finetti's Theorem (1931), exchangeability, Exchangeability, mixing measure, de Finetti's theorem, Diaconis–Freedman theorem, Bayesian modelling, Finite Exchangeability, Partial Exchangeability and Hierarchical Models, Chinese Restaurant Process, Scaling limits:, Partial exchangeability, Connections and Applications, empirical measure
- References: bayesian-deep-learning, math/law-of-large-numbers, mcmc
- Backlinks: math/coupling-methods, math/random-graphs, math/stein-method

## Entity: extreme-value-theory
- Title: Extreme Value Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Asymptotic Stability and Functional Limits, [[large-deviations-cramer]], $\xi = 0$ (Gumbel), Fisher-Tippett-Gnedenko theorem, Fréchet Domain (Type II), exponentially decaying tails, Return Levels and Return Periods, heavy, power-law tails, centering and scaling sequences, regular variation, Peaks-Over-Threshold and the Pareto Approximation, Gumbel, peaks-over-threshold, Related Concepts, fluctuations
- References: characteristic-functions, finance/coherent-risk-measures, math/concentration-inequalities, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/large-deviations-cramer, math/stable-convergence
- Backlinks: copulas, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/bipower-variation, finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/repo-market-systemic, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, frtb-es, generative-scenario-models, math/lundberg-cramer-ruin, order-statistics, stable-processes

## Entity: free-probability
- Title: Free Probability
- Category: Applied Probability
- Language: en
- Key Concepts: independence, Related Topics, The R-Transform, freely independent, R-transform, Free Independence, free convolution, Visualization: Free vs. Classical Convolution, freeness, Wigner Semicircle Distribution, Signal Propagation, Weight Initialization, The Free Central Limit Theorem, Applications in Deep Learning, Optimization
- References: finance/shannon-entropy, math/information-theory, random-matrices

## Entity: math/geometric-ergodicity
- Title: Geometric Ergodicity
- Category: Applied Probability
- Language: en
- Key Concepts: subgeometric convergence rates, The Foster–Lyapunov drift condition, polynomial ergodicity, Heavy-tailed or jump processes, Meyn–Tweedie Theorem, Applications to MCMC, Construction of Lyapunov functions, spectral gap, Diagnostics, Harris recurrence and spectral gaps, uniformly geometrically ergodic, Gibbs and Metropolis–Hastings, Sample size planning, Central Limit Theorem (CLT), geometrically ergodic
- References: math/coupling-methods, math/discrete-markov-chains, math/large-deviations-cramer, math/markov-chain-mixing, math/stochastic-recursive-sequences
- Backlinks: math/ode-stability

## Entity: hmm
- Title: Hidden Markov Models (HMM)
- Category: Applied Probability
- Language: en
- Key Concepts: [[hmm-particle-filters|Particle Filters]], 1. The Model Structure, Baum-Welch Algorithm, Visualization: HMM State Transition, 3. Beyond Discrete States: Particle Filters, Hidden Markov Models (HMM), 2. The Three Fundamental Problems, B. The Decoding Problem (Viterbi), Hidden Markov Model (HMM), Expectation-Maximization (EM), Forward Algorithm, hidden, Emission Probabilities ($B$), A. The Evaluation Problem (Forward-Backward), In Finance
- References: hmm-particle-filters, mle
- Backlinks: bayesian-networks, em-algorithm, multivariate-normal

## Entity: hydrodynamic-limits
- Title: Hydrodynamic Limits
- Category: Applied Probability
- Language: en
- Key Concepts: Why It Matters, Macroscopic Fluctuation Theory (MFT), AI and Neural Mean Fields, Time Scaling, empirical density, Traffic and Crowd Flow, microscopic world, Space Scaling, [[shannon-entropy|Entropy]] Method and Large Deviations, Statistical Mechanics, Visualization: From Particles to Density, Large Deviations, The Scaling Idea, Related Topics, diffusion coefficient
- References: finance/shannon-entropy, math/interacting-particle-systems, mean-field-games, partial-differential-equations

## Entity: likelihood-ratio-tests
- Title: Hypothesis Testing II: Likelihood Ratio Tests
- Category: Applied Probability
- Language: en
- Key Concepts: 4. Relation to Other Tests, Related Topics, Wald Test, Hypothesis Testing II: Likelihood Ratio Tests, 3. Power of the Test, Neyman-Pearson Lemma, Power, Most Powerful, 2. Wilks' Theorem, Score Test (Lagrange Multiplier), 1. The Likelihood Ratio
- References: fisher-information, mle-estimation, statistical-inference
- Backlinks: rank-tests

## Entity: math/information-theory
- Title: Information Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Related Topics, Source Coding Theorem:, 3. Kullback-Leibler (KL) Divergence, ELBO (Variational Inference):, Core Concepts, Fundamental Theorems, Channel Capacity Theorem:, Information Theory, 2. Mutual Information $I(X;Y)$, 1. Shannon [[shannon-entropy|Entropy]] $H(X)$, Applications in AI, Information Bottleneck:, Data Processing Inequality:, Cross-[[shannon-entropy|Entropy]] Loss:
- References: finance/shannon-entropy, fisher-information, variational-inference
- Backlinks: convex-optimization, course-math-for-ai, ergodic-theory-markov, free-probability, math/harmonic-analysis, maximum-entropy, online-learning-regret, probabilistic-combinatorics, random-matrices, universal-portfolios, wiener-chaos

## Entity: math/interacting-particle-systems
- Title: Interacting Particle Systems
- Category: Applied Probability
- Language: en
- Key Concepts: Open Problems, Mixing time bounds, mean-field limit, [[ergodic-theorems-birkhoff|Birkhoff Ergodic Theorem]], Configuration Space and State Representation, Distributed Algorithms, Contact Process, Finite-time mean-field theory, Overview, Large deviations, symmetric exclusion process (SEP), Voter Model, Key Theorems, asymmetric simple exclusion process (ASEP), Phase transitions in high dimensions
- References: convex-optimization, finance/shannon-entropy, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/percolation, stochastic-differential-equations
- Backlinks: hydrodynamic-limits, math/spdes

## Entity: law-iterated-logarithm
- Title: Law of Iterated Logarithm
- Category: Applied Probability
- Language: en
- Key Concepts: [[brownian-motion|Brownian Motion]], Law of Iterated Logarithm (LIL), Related Topics, 1. Formal Statement, LLN, 2. Interpretation, 3. Role in Stochastic Processes, CLT, LIL
- References: brownian-motion, lln-clt, stochastic-processes
- Backlinks: math/borel-cantelli-zero-one, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers

## Entity: mcmc
- Title: MCMC (Markov Chain Monte Carlo)
- Category: Applied Probability
- Language: en
- Key Concepts: C. Hamiltonian Monte Carlo (HMC), Derivative Pricing, Stan, Stationary Distribution, 4. Why it Matters for AI and Finance, Sample, Bayesian Neural Networks, 2. Key Algorithms, Bayesian Statistics, Burn-in, Bayesian Hierarchical Models, MCMC: Markov Chain Monte Carlo, B. Gibbs Sampling, 1. The Core Idea: Sampling by Walking, Statistical Physics
- References: bayesian-inference, hamiltonian-mechanics, hmm-particle-filters, lsv-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, ar-models, arch-models, arima-models, arma-models, bayesian-black-litterman, bayesian-deep-learning, bayesian-inference, brownian-motion, causal-inference, convex-optimization-trading, cornish-fisher-cvar, de-finetti-exchangeability, fama-macbeth-regression, finance/fractional-fokker-planck, finance/monte-carlo-method, finance/particle-filter, finance/sha-256, finance/shor-algorithm, fraud-detection, hmm-particle-filters, kalman-filter, model-free-rl-factors, monte-carlo-integration, news-sentiment-trading, numeraire-invariant-hedging, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, regime-switching-factors, rl-trader, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis, variational-inference, volatility-forecasting

## Entity: mdp
- Title: Markov Decision Processes (MDP)
- Category: Applied Probability
- Language: en
- Key Concepts: Visualization: Value Discounting, The Bellman Equations, Value Iteration, Markov Decision Processes (MDP), $R(s, a, s')$, optimal policy, Markov Property, $\gamma \in [0, 1)$, $P(s' \mid s, a)$, Reinforcement Learning (RL), Policies and Value Functions, $\mathcal{S}$, Action-Value Function $Q^\pi(s, a)$, The Mathematical Framework, Policy Iteration
- References: ergodic-theory-markov, reinforcement-learning, stochastic-control
- Backlinks: mcts, multi-armed-bandits

## Entity: markov-chebyshev
- Title: Markov and Chebyshev Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: 3. Applications in Advanced Systems, 1. Markov's Inequality (The First Moment Bound), C. Algorithmic Complexity (Randomized Algorithms), The Power of the Bound, Intuition, Weak Law of Large Numbers (WLLN), Proof mechanism, Usage, A. Proving the Law of Large Numbers, B. PAC Learning and AI Safety, Visualization: The Tail Bounds, non-negative, Probably Approximately Correct (PAC), 2. Chebyshev's Inequality (The Second Moment Bound), Related Topics
- References: central-limit-theorem, frtb-es, measure-theory

## Entity: mgf
- Title: Moment Generating Functions (MGF)
- Category: Applied Probability
- Language: en
- Key Concepts: Chernoff Bound, 4. Application in Finance: Portfolio Tail Risk, Moment Generating Function (MGF), always exists, Characteristic Function, Cramér's Bound, exact same distribution, A. Generating Moments, Why it's useful, Probability Generating Function (PGF), product, B. Sums of Independent Variables, Visualization: MGF of a Gaussian, [[central-limit-theorem|Central Limit Theorem]], Related Topics
- References: central-limit-theorem, fourier-transform, math/large-deviations-cramer
- Backlinks: characteristic-functions

## Entity: mgf-characteristic-functions
- Title: Moment Generating Functions (MGFs) and Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: Linear Transformation, Uniqueness Theorem, always exists, 1. Moment Generating Functions (MGF), Related Topics, Properties, Moment Generating Functions (MGFs) and Characteristic Functions, Independent Sums, Moment Generation, Limit Theorems, Symmetry, Summation of Distributions, Inversion Formula, 3. Applications, 2. Characteristic Functions
- References: clt, fourier-transform, probability-distributions

## Entity: monte-carlo-integration
- Title: Monte Carlo Integration
- Category: Applied Probability
- Language: en
- Key Concepts: Importance Sampling, Monte Carlo Integration and Importance Sampling, Visualization: Convergence Rate, Central Limit Theorem, Related Topics, Law of Large Numbers, Rejection Sampling, The Core Concept, importance weight, high-dimensional spaces
- References: math/law-of-large-numbers, mcmc, variational-inference
- Backlinks: bootstrap-jackknife, deep-ritz-method, mcts

## Entity: multivariate-normal
- Title: Multivariate Normal Distribution
- Category: Applied Probability
- Language: en
- Key Concepts: squared Mahalanobis distance, 3. Affine closure, Consequences, Theorem., 9. Density from the characteristic function, closed under affine transformations, under conditioning, and under independent products, Gaussian processes, Kalman filter, 7. KL divergence between normals, Maximum-[[shannon-entropy|entropy]] principle:, 4. Conditional distribution, ELBO, 10. Applications, Fact., Gaussian processes.
- References: f-divergences, finance/shannon-entropy, fisher-information, gaussian-processes, hmm, pca
- Backlinks: course-math-for-ai, distributions-zoo, joint-distributions

## Entity: rank-tests
- Title: Non-parametric Statistics: Rank Tests
- Category: Applied Probability
- Language: en
- Key Concepts: Limitations, 2. Mann-Whitney U Test (Wilcoxon Rank-Sum), Related Topics, 4. Advantages and Limitations, Hypothesis, Non-parametric Statistics: Rank Tests, ranks, Advantages, Statistic, Asymptotic Property, 3. Kruskal-Wallis Test, Procedure, 1. Wilcoxon Signed-Rank Test
- References: bootstrap-jackknife, likelihood-ratio-tests, statistical-inference
- Backlinks: order-statistics

## Entity: order-statistics
- Title: Order Statistics
- Category: Applied Probability
- Language: en
- Key Concepts: Related Topics, 3. Joint Distribution, Extreme Value Theory, Maximum $X_{(n)}$, Order Statistics, 1. Definition, 2. Distribution of the $i$-th Order Statistic, Distribution of Min and Max, Non-parametric Inference, 4. Applications, Reliability, Minimum $X_{(1)}$
- References: extreme-value-theory, probability-distributions, rank-tests

## Entity: math/percolation
- Title: Percolation
- Category: Applied Probability
- Language: en
- Key Concepts: conformally invariant, Percolation Theory, Related articles, connectivity, Connections to the Ising model and random cluster model, occupied, Theorem., Russo–Seymour–Welsh theorem, subcritical, not, Scaling relations:, critical, BK inequality, Critical probability and phase transitions, Bond and site percolation on $\mathbb{Z}^d$
- References: math/branching-processes, math/concentration-inequalities, math/coupling-methods, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/random-graphs
- Backlinks: math/interacting-particle-systems, probabilistic-combinatorics

## Entity: map-estimation
- Title: Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference
- Category: Applied Probability
- Language: en
- Key Concepts: 4. Bayesian Credible Intervals, Likelihood, Prior, Related Topics, Posterior, 1. Bayesian Framework, Gaussian Prior, [[spectral-graph-theory|Laplacian]] Prior, Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference, Credible Intervals, 2. MAP Derivation, 3. Relation to MLE and Regularization
- References: bayes-theorem, linear-regression-ols, mle-estimation, spectral-graph-theory, statistical-inference
- Backlinks: mle-estimation

## Entity: mle-estimation
- Title: Point Estimation: Maximum Likelihood Estimation (MLE)
- Category: Applied Probability
- Language: en
- Key Concepts: Efficiency, Asymptotic Normality, Related Topics, Point Estimation: Maximum Likelihood Estimation (MLE), 3. Example: Gaussian Mean, Consistency, Log-Likelihood, Likelihood Function, Invariance, 1. Formal Derivation, 2. Properties of MLE
- References: cramer-rao-bound, fisher-information, map-estimation, statistical-inference
- Backlinks: cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, map-estimation, sufficient-statistics

## Entity: probabilistic-combinatorics
- Title: Probabilistic Combinatorics
- Category: Applied Probability
- Language: en
- Key Concepts: Visualization: The Giant Component Transition, Related Topics, Paul Erdős, The Lovász Local Lemma (LLL), Probabilistic Method, Giant Component, Error-Correcting Codes, threshold, Probabilistic Combinatorics, Applications in Computer Science, Hashing, Randomized Algorithms, The Probabilistic Method, Ramsey Numbers and Bounds, Threshold Phenomena in Random Graphs
- References: math/information-theory, math/percolation, math/random-graphs

## Entity: distributions-zoo
- Title: Probability Distributions Zoo
- Category: Applied Probability
- Language: en
- Key Concepts: MGF., 5. Conjugate-prior pairs, Multivariate normal $\mathcal{N}_d(\boldsymbol\mu, \Sigma)$, equi-dispersion, Multinomial / Categorical, Binomial($n, p$), Exponential($\lambda$), Cauchy, Negative binomial., Limit., Exponential family., 7. Related topics, Memorylessness., MaxEnt., PMF.
- References: bayesian-inference, central-limit-theorem, exponential-families, finance/shannon-entropy, math/concentration-inequalities, maximum-entropy, multivariate-normal, poisson-process
- Backlinks: course-math-for-ai, poisson-process

## Entity: estimator-properties
- Title: Properties of Estimators: Bias, Variance, and MSE
- Category: Applied Probability
- Language: en
- Key Concepts: Mean Squared Error (MSE), Interpretation, Related Topics, 2. The Bias-Variance Tradeoff, Properties of Estimators: Bias, Variance, and MSE, 3. Consistency, Variance, unbiased, 1. Definitions, consistent, Bias
- References: cramer-rao-bound, linear-regression-ols, mle-estimation, statistical-inference, sufficient-statistics
- Backlinks: bootstrap-jackknife, cramer-rao-bound, sufficient-statistics

## Entity: queuing-theory
- Title: Queuing Theory
- Category: Applied Probability
- Language: en
- Key Concepts: c (Number of servers), [[inference-serving|GPU]] Scheduling, S (Service time distribution), Visualization: Queue Length vs. Utilization, A / S / c / K, Network Congestion, K (System capacity), The M/M/1 Queue, Little's Law, Utilization ($\rho$), Key Results (Little's Law), Average number in system ($L$), Arrival Rate, API Rate Limiting, Probability of $n$ customers
- References: inference-serving, math/markov-chain-mixing, poisson-process

## Entity: math/random-graphs
- Title: Random Graphs
- Category: Applied Probability
- Language: en
- Key Concepts: Stochastic Block Model, Degree Distribution and Chromatic Number, Subcritical regime, Further reading, Critical window, Connectivity and Percolation Thresholds, Stochastic Block Model and Community Detection, random $d$-regular graph, Random Graphs, Supercritical regime, Threshold Methods: First and Second Moment, threshold phenomenon, Random Regular Graphs and Local Limits, Applications, The Erdős–Rényi Models
- References: central-limit-theorem, de-finetti-exchangeability, math/branching-processes, math/concentration-inequalities, math/large-deviations-cramer, math/poisson-approximation
- Backlinks: math/high-dimensional-statistics, math/percolation, probabilistic-combinatorics

## Entity: random-matrices
- Title: Random Matrix Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Neural Network Spectra, Universality and Altland-Zirnbauer Classification, universality, R-transform, free central limit theorem, Tracy-Widom Distribution, Gaussian Unitary Ensemble (GUE), Non-linear models, self-consistent equation, Stieltjes Transform and Self-Consistent Equations, GOE, Gaussian Orthogonal and Unitary Ensembles, freely independent, Non-symmetric matrices, Sparse and structured matrices
- References: empirical-processes, math/concentration-inequalities, math/high-dimensional-statistics, math/information-theory, math/lp-spaces, math/minimax-estimation, math/spectral-theory-operators
- Backlinks: free-probability

## Entity: random-walks-groups
- Title: Random Walks on Groups
- Category: Applied Probability
- Language: en
- Key Concepts: Random Walks on Groups, Visualization: Return Probabilities, Probability Theory, 1. Recurrence vs. Transience, Algebra, 3. Boundary Theory and Poisson Boundary, Geometric Deep Learning, Applications in AI and Science, Poisson Boundary, Key Questions and Concepts, Cryptography, Related Topics, Mixing Time, Geometry, Card Shuffling
- References: lie-groups, math/discrete-markov-chains, math/markov-chain-mixing, math/spectral-theory-operators

## Entity: math/renewal-theory
- Title: Renewal Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Renewal Theory, current life, Example., excess life, equilibrium, renewal counting process, renewal function, Theorem., The renewal process, Elementary renewal theorem, Overshoot, undershoot, and the inspection paradox, renewal equation, delayed, modified, Related Articles
- References: characteristic-functions, math/branching-processes, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/wiener-hopf-factorization
- Backlinks: math/branching-processes, math/markov-chain-mixing, math/point-processes, math/poisson-approximation, math/random-walks, math/subordinators, math/wiener-hopf-factorization, poisson-process

## Entity: bootstrap-jackknife
- Title: Resampling Methods: Bootstrap & Jackknife
- Category: Applied Probability
- Language: en
- Key Concepts: Resampling Methods: Bootstrap & Jackknife, Related Topics, with replacement, Variance Estimation, Procedure, Main Use, 3. Comparison, Computations, 1. The Jackknife, The Bootstrap Principle, Limitation, Method, 2. The Bootstrap
- References: estimator-properties, monte-carlo-integration, statistical-inference
- Backlinks: rank-tests

## Entity: sle
- Title: Schramm-Loewner Evolution (SLE)
- Category: Applied Probability
- Language: en
- Key Concepts: Conformally Invariant, $4 < \kappa < 8$, 1. The Physical Motivation: Critical Interfaces, Conformal Invariance, Oded Schramm, $\xi_t = \sqrt{\kappa} B_t$, Loewner Equation, $\kappa \geq 8$, $\kappa = 2$, [[gff|Gaussian Free Field (GFF)]], $g_t(z)$, 2. The Driving Equation, Space-filling, $\kappa = 8$, Visualization: The Growing Curve
- References: brownian-motion, conformal-field-theory, gff, statistical-mechanics
- Backlinks: gff

## Entity: math/stein-method
- Title: Stein's Method
- Category: Applied Probability
- Language: en
- Key Concepts: Statistical physics, Wasserstein distance, Combinatorics, Graph theory, Chen–Stein Method for Poisson Approximation, local dependence, The Stein Operator and Stein Equation, Stein operator, Kolmogorov distance, Concrete Example: Fixed Points in Random Permutations, Applications and Extensions, References and Further Reading, Exchangeable Pairs and Stein Discrepancy, Local Dependence and Dissociation, Total variation distance
- References: central-limit-theorem, characteristic-functions, de-finetti-exchangeability, math/concentration-inequalities, math/local-limit-theorems, math/poisson-approximation

## Entity: sufficient-statistics
- Title: Sufficient Statistics & Factorization Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: 3. Minimal Sufficiency and Completeness, Completeness, 4. Rao-Blackwell Theorem, sufficient, 2. Fisher-Neyman Factorization Theorem, Related Topics, Minimal Sufficient Statistic, Sufficient Statistics & Factorization Theorem, Rao-Blackwellization, 1. Definition
- References: cramer-rao-bound, estimator-properties, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information

## Entity: time-series
- Title: Time Series Analysis
- Category: Applied Probability
- Language: en
- Key Concepts: PACF (Partial Autocorrelation), 2. MA (Moving Average), frequency domain, ACF, temporal dependence, Volatility Modeling (ARCH / GARCH), Classical Models (Box-Jenkins), 1. AR (Auto-Regressive), Time Series Analysis, differences, Visualization: Stationarity, Spectral Density, Weak Stationarity, Autocorrelation Function (ACF) and PACF, Stationarity
- References: math/markov-chain-mixing
- Backlinks: garch-models, language-models/mamba-ssm, math/stochastic-calculus/rough-path-signatures

## Entity: total-probability-variance
- Title: Total Probability and Total Variance
- Category: Applied Probability
- Language: en
- Key Concepts: Example: Financial Alpha, Visualization: Variance Decomposition, 1. Law of Total Probability, Component 1 (Expected Conditional Variance), Generative Models, Bias-Variance Decomposition, Stochastic Processes, Laws of Total Probability and Total Variance, Intuition, Bias, Bayesian Hierarchical Models, Component 2 (Variance of Conditional Expectation), Variance Decomposition, 4. Application in Machine Learning, In AI
- References: bayesian-inference, hmm-particle-filters

## Entity: wentzell-freidlin
- Title: Wentzell-Freidlin Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Wentzell-Freidlin Theory (Large Deviations for SDEs), The Action Functional ($S$), Rate Function, Related Topics, Instantone, Visualization: The Escape Path, Large Deviation Principles (LDP), 1. Metastability and Exit Times, Applications, Chemistry, 2. The Quasi-Potential, Neural Networks, Quasi-potential, The Setting: Small Noise Limits, Exit Time
- References: math/large-deviations-cramer, statistical-mechanics, stochastic-differential-equations

## Entity: math/wiener-hopf-factorization
- Title: Wiener-Hopf Factorization
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Ruin probabilities., Historical notes, ascending ladder height, Example: symmetric random walk, Theorem (Spitzer)., 5. Boundary crossing problems., Setup and ladder variables, Pollaczek-Khinchine formula, Related Articles, 3. GI/G/1 queueing., Baxter combinatorial lemma, 4. Barrier options in finance., Connection to integral equations, Applications, ascending ladder epoch
- References: brownian-motion, characteristic-functions, finance/levy-processes, math/branching-processes, math/discrete-martingales, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory, math/weak-convergence-prokhorov
- Backlinks: math/branching-processes, math/random-walks, math/renewal-theory, math/subordinators

## Entity: f-divergences
- Title: f-Divergences
- Category: Applied Probability
- Language: en
- Key Concepts: 2. Famous Special Cases, Fisher Information Metric, f-divergences, 3. Properties, Total Variation, Data Processing Inequality, Generative Adversarial Networks (GANs), Positivity, Intuition, f-GANs, $f$ is a convex function, Reverse KL, Monotonicity, f-Divergences: Measuring the Distance Between Distributions, 4. Why Tier-1 ML Researchers care
- References: finance/gan, finance/shannon-entropy, information-geometry-finance, jensens-inequality, llm, manifold-learning, rlhf
- Backlinks: course-math-for-ai, fisher-information, multivariate-normal

## Entity: math/absolute-continuity-process-measures
- Title: Absolute Continuity of Process Measures
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Novikov's Condition, Signal detection., same diffusion coefficient, Theorem., Why Different Volatilities Imply Singularity, Absolute Continuity of Process Measures, Related Articles, The Setup, always, Connection to Filtering, The Liptser-Shiryaev Theorem, [[contiguity-measures|Contiguity]] analysis., true martingale, absolute continuity and singularity, Model comparison in finance.
- References: brownian-motion, finance/girsanov-semimartingales, geometric-brownian-motion, heston-model, innovation-process, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering
- Backlinks: math/cameron-martin-formula, math/differentiation-of-measures, math/signed-measures

## Entity: math/bayesian-asymptotics
- Title: Bayesian Asymptotics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Credible sets ≈ confidence sets, Bayesian Asymptotics, [[local-asymptotic-normality]], posterior contraction rates, GGvV framework, [[exponential-families]], Key Implications, Efficiency, Variational Bayes Asymptotics, [[information-geometry]], [[m-estimators]], Bernstein–von Mises Failure, Model Misspecification, References, Bernstein–von Mises theorem
- References: cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/m-estimators, math/minimax-estimation
- Backlinks: math/semiparametric-efficiency

## Entity: bayesian-inference
- Title: Bayesian Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 2. Conjugate Priors, Bayes' Theorem, Variational Autoencoders (VAEs), B. Variational Inference (VI), Posterior $P(\theta \mid D)$, Hamiltonian Monte Carlo (HMC), A. MCMC (Markov Chain Monte Carlo), Prior $P(\theta)$, Bayesian Inference: Updating Knowledge with Data, 4. Bayesian vs. Frequentist (MLE), Random Variables, 3. Numerical Methods (When Math is Hard), Optimization, Evidence $P(D)$, Likelihood $P(D \mid \theta)$
- References: bayesian-black-litterman, bayesian-kelly, mcmc, measure-theory, mle, variational-autoencoders
- Backlinks: decision-theory, distributions-zoo, linear-regression, maximum-entropy, mcmc, mle, multi-armed-bandits, naive-bayes, total-probability-variance, variational-inference

## Entity: causal-inference
- Title: Causal Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Regression discontinuity, Matching, local treatment effect, Potential Outcomes Framework, average treatment effect on the treated, directed acyclic graph, Exclusion, Regression Discontinuity, compliers, Exogeneity, Unconfoundedness, Relevance, randomized controlled trial, backdoor criterion, [[rlhf]]
- References: fama-macbeth-regression, finance/efficient-market-hypothesis, math/kolmogorov-probability-axioms, math/local-asymptotic-normality, mcmc, rlhf
- Backlinks: bayesian-networks, causal-inference-trading, correlation-association, double-ml, financial-entropy, math/semiparametric-efficiency, math/survival-analysis, probability-paradoxes

## Entity: math/contiguity-measures
- Title: Contiguity and the Le Cam Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: tilted, entire separation, Characterization via Likelihood Ratios, local asymptotic normality, Applications in Jacod-Shiryaev Framework, Le Cam's Third Lemma, Theorem., Local Asymptotic Normality (LAN), Theorem (Le Cam's first lemma)., LAN, Hellinger Distance Connection, Hajek-Le Cam bound, contiguous, Related Articles, mutually contiguous
- References: central-limit-theorem, characteristic-functions, finance/girsanov-semimartingales, finance/semimartingale-models, math/large-deviations-cramer, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/hellinger-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: correlation-association
- Title: Correlation and Association
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: ranks, 5. Partial Correlation, Range, concordant, 3. Kendall's Tau ($\tau$), 1. Pearson Product-Moment Correlation ($\rho$), Robustness, discordant, monotonic function, Best for, if and only if, linear, Limitation, Related Topics, controlling for
- References: causal-inference, copulas

## Entity: math/cramer-rao-bound
- Title: Cramér–Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Dominated convergence:, Asymptotic efficiency, efficiency, multiparameter Cramér-Rao inequality, standardized squared error, Connection to information geometry, Fisher information matrix, Three derivatives exist:, efficient, asymptotically efficient, Fisher information, Regularity conditions (Cramér regularity), The bound is tight (equality) if and only if the score is a linear function of the statistic $T$:, efficient estimators, Biased estimators and general linear forms
- References: empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/conditional-expectation-sigma, math/local-asymptotic-normality, math/neyman-pearson

## Entity: math/density-processes
- Title: Density Processes and Likelihood Ratios
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Sequential testing (SPRT)., log-likelihood, Log-likelihood process., unchanged, Theorem., Fisher information, Density Processes and Likelihood Ratios, innovation martingale, supermartingale, Related Articles, Representation via Stochastic Exponential, Fundamental properties:, Change-point detection., Girsanov's Theorem as a Corollary, Singularity and Absolute Continuity Dichotomy
- References: finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/predictable-compensator
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/regular-conditional-probability, math/sequential-hypothesis-testing, math/signed-measures

## Entity: double-ml
- Title: Double Machine Learning
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: causal effects, Marketing, AI Finance, Cross-fitting, Double Machine Learning (Causal Inference), Visualization: Removing the Bias, Medicine, Cross-Fitting, biased, The DML Procedure (Nuisance Parameter Removal), The Core Problem: Confounding, Applications, true causal effect, Related Topics, Model the Outcome
- References: alpha-factor-research, causal-inference, mle

## Entity: empirical-processes
- Title: Empirical Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: VC-classes are Donsker classes, generalization bounds, Related Concepts, shattered, Glivenko–Cantelli Theorem, bootstrap sample, Bootstrap for Empirical Processes, Donsker's theorem, Metric [[shannon-entropy|Entropy]] and Bracketing Numbers, VC-Classes and Vapnik–Chervonenkis Dimension, Bracketing number, Donsker class, Connection to Machine Learning Generalization, uniform, A class $\mathcal{F}$ is called Glivenko–Cantelli (GC-class)
- References: brownian-bridge, central-limit-theorem, finance/shannon-entropy, math/local-asymptotic-normality, math/weak-convergence-prokhorov, pac-learning
- Backlinks: math/bayesian-asymptotics, math/concentration-inequalities, math/cramer-rao-bound, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/survival-analysis, math/u-statistics, random-matrices

## Entity: expectation-maximization
- Title: Expectation-Maximization (EM)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: latent variables, Natural Language Processing, The Two Steps, Missing Data, 1. E-Step (Expectation), MAP, Related Topics, The Problem: Latent Variables, 2. M-Step (Maximization), Applications, Visualization: Clustering Progress, Expectation-Maximization (EM) Algorithm, Convergence Properties, local maximum, Gaussian Mixture Models
- References: mle, variational-inference
- Backlinks: gmm, jensen-inequality

## Entity: fisher-information
- Title: Fisher Information and the Cramér-Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Fisher information matrix (FIM), 8. Examples, 9. Fisher information and the chi-squared test, Regularity, 7. Natural-[[convex-optimization|gradient descent]], additive, tighter finite-sample confidence intervals, efficient, Theorem., asymptotically efficient, 8.1. Normal $\mathcal{N}(\mu, \sigma^2)$, Claim., 4. The Cramér-Rao bound, Efficient estimators, Corollary.
- References: convex-optimization, cramer-rao-bound, exponential-families, f-divergences, manifold-learning, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, mle, sufficient-statistics
- Backlinks: course-math-for-ai, cramer-rao-bound, likelihood-ratio-tests, math/analysis-geometry/information-geometry, math/information-theory, maximum-entropy, mle-estimation, multivariate-normal

## Entity: math/hellinger-processes
- Title: Hellinger Integrals and Hellinger Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: filtration analogue, For point processes., Hellinger Process for Filtered Spaces, Hellinger integral, For diffusions., Hellinger Integrals on a Single $\sigma$-Algebra, filtration, Related Articles, Kakutani's Dichotomy Generalized, Statistical testing., Theorem (Kakutani dichotomy for filtrations)., Applications, Hellinger Integrals and Hellinger Processes, Connection to Likelihood Ratios, Definition.
- References: finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/contiguity-measures, math/doleans-dade-exponential, math/sigma-algebra-measurability, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: math/high-dimensional-statistics
- Title: High-Dimensional Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Matrix Estimation and Nuclear Norm Minimization, Connection to Convex Optimization, compressed sensing, Gaussian width, Minimax Lower Bounds and Information Theory, Gaussian sequence model, sparsity, Gordon's Theorem, Gaussian Width and Gordon's Theorem, optimization error, statistical error, LASSO and the Restricted Eigenvalue Condition, Restricted Isometry Property and Compressed Sensing, Multiple Testing Control: Knockoffs, The Gaussian Sequence Model
- References: convex-analysis, cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/lp-spaces, math/minimax-estimation, math/random-graphs
- Backlinks: math/multiple-testing, math/nonparametric-regression, random-matrices

## Entity: hypothesis-testing
- Title: Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: A/B Testing, Multiple Testing Problem, Rule, Type I Error, The Framework, not, Null Hypothesis ($H_0$), The P-Value Misinterpretation, p-value, Power ($1-\beta$), 1. Student's t-test, $\alpha$ (Significance Level), 3. Kolmogorov-Smirnov Test, Alternative Hypothesis ($H_1$), Common Tests
- References: bootstrap, central-limit-theorem, math/neyman-pearson
- Backlinks: probability-paradoxes, sampling-distributions

## Entity: math/kernel-density-estimation
- Title: Kernel Density Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Nadaraya–Watson estimator, Minimax Theory and Sobolev Classes, Least Squares Cross-Validation, Bandwidth Selection, kernel function, Epanechnikov, Normalization, Plug-in methods, adaptive KDE, Overview, Diffusion methods, Adaptive Bandwidth, Uniform, Connection to Nonparametric Regression Smoothing, Symmetry
- References: cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/glivenko-cantelli, math/local-asymptotic-normality, math/u-statistics
- Backlinks: math/minimax-estimation, math/nonparametric-regression

## Entity: kde
- Title: Kernel Density Estimation (KDE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Small $h$ (Under-smoothing), 2. The Bias-Variance Tradeoff and Bandwidth ($h$), 4. Applications in Quantitative Finance and AI, 1. The Core Estimator, Low Bias but High Variance, Volatility Surface Smoothing, Large $h$ (Over-smoothing), Kernel Density Estimation (KDE), Anomaly Detection (Fraud), $h$ (The Bandwidth), 3. Advantages over Histograms, Mean-Shift Clustering, Cross-Validation, High Bias but Low Variance, Related Topics
- References: kernel-methods-rkhs, math/nonparametric-regression, mle

## Entity: math/local-asymptotic-normality
- Title: Local Asymptotic Normality (LAN)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: deterministic, asymptotic Cramer-Rao bound, Theorem., Local Asymptotic Normality (LAN), asymptotically efficient, Rao score test, Related Articles, central sequence, locally asymptotically normal, random, regular, Optimal Tests, LAQ (Locally Asymptotically Quadratic)., Girsanov, Gaussian shift approximation
- References: central-limit-theorem, finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/functional-limit-theorems, math/hellinger-processes, math/law-of-large-numbers, math/stable-convergence
- Backlinks: causal-inference, empirical-processes, fisher-information, math/absolute-continuity-process-measures, math/bayesian-asymptotics, math/cameron-martin-formula, math/cramer-rao-bound, math/density-processes, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/sequential-hypothesis-testing, math/survival-analysis

## Entity: math/m-estimators
- Title: M-Estimators and Z-Estimators
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Z-estimators: Definition and theory, Z-estimator, Sandwich variance estimation, breakdown point, M-estimator, Huber's robust regression, iteratively reweighted least squares, covering numbers, Theorem (Consistency via Uniform Law of Large Numbers):, VC-subgraph condition, influence function, objective function, not, Huber's estimator, Donsker condition
- References: bootstrap, cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/concentration-inequalities, math/local-asymptotic-normality, math/neyman-pearson
- Backlinks: causal-inference-do-calculus, convex-optimization, math/bayesian-asymptotics, math/semiparametric-efficiency, math/survival-analysis

## Entity: mle
- Title: Maximum Likelihood Estimation (MLE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Efficiency, 4. Connection to Information Theory, Asymptotic Normality, 1. The Likelihood Function, Cramér-Rao Lower Bound, Related Topics, Cross-[[shannon-entropy|Entropy]] Loss, Maximum Likelihood Estimation (MLE), Consistency, Log-Likelihood, Likelihood Function, 2. Asymptotic Properties, 3. Fisher Information ($I(\theta)$), Kullback-Leibler (KL) Divergence, Fisher Information
- References: bayesian-inference, cramer-rao-bound, finance/shannon-entropy, information-geometry-finance, manifold-learning
- Backlinks: bayesian-inference, change-of-variables, clt, double-ml, expectation-maximization, fisher-information, garch-models, hmm, kde, linear-regression, logistic-regression, maximum-entropy, slutsky-theorem, umvue-completeness

## Entity: math/minimax-estimation
- Title: Minimax Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Fundamental Definitions, Assouad's lemma, Rate-Optimal Estimators: Examples, Lower Bounds: Le Cam's Two-Point Method, Minimax risk, oracle inequality, minimax optimal estimator, Hellinger Distance and Le Cam Distance, Local polynomials, Gordon's inequality, gap between information-theoretic and computational limits, Open Problems and Future Directions, Gaussian sequence model, two-point method, Minimax Rates over Nonparametric Classes
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/concentration-inequalities, math/kernel-density-estimation, math/local-asymptotic-normality
- Backlinks: math/bayesian-asymptotics, math/high-dimensional-statistics, math/nonparametric-regression, random-matrices

## Entity: math/multiple-testing
- Title: Multiple Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Efron's local FDR, empirical Bayes, Summary Table, Holm, Knockoff, Benjamini–Hochberg Procedure, Extensions and Refinements, Connections to Empirical Bayes, FWER, Multiple Testing, uniformly valid, Valid, False Discovery Rate, Bonferroni, Storey
- References: bootstrap, empirical-processes, exponential-families, math/concentration-inequalities, math/high-dimensional-statistics, math/neyman-pearson, math/sequential-hypothesis-testing

## Entity: math/neyman-pearson
- Title: Neyman–Pearson Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Bahadur efficiency, Neyman–Pearson theory, The Neyman–Pearson Lemma, power, Karlin–Rubin Theorem, p-value, Relation to [[Information-Geometry]], Randomized Tests and Discrete Distributions, Connections to [[Sequential-Hypothesis-Testing]] and [[Cramer-Rao-Bound]], Type II error (power), randomized tests, Simple vs. Composite Hypotheses, Neyman–Pearson Theory, Composite hypotheses, Type I error (size)
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/sequential-hypothesis-testing
- Backlinks: hypothesis-testing, math/cramer-rao-bound, math/m-estimators, math/multiple-testing, math/survival-analysis

## Entity: math/nonparametric-regression
- Title: Nonparametric Regression
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Nadaraya–Watson Kernel Estimator, smoothing splines are equivalent to GP regression, smoothing spline, References & Wikilinks, Smoothing Splines and RKHS, Bias reduction, The Bias–Variance Tradeoff, Gaussian Process Regression, Oracle Inequalities and Adaptive Rates, Key advantages, Green's functions, Reproducing Kernel Hilbert Space (RKHS), Local polynomial regression, adaptively, Splines
- References: bootstrap, functional-analysis, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/minimax-estimation, sobolev-spaces
- Backlinks: kde

## Entity: bootstrap
- Title: Resampling: Bootstrap and Jackknife
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: bias correction, Why it works: The "Plug-in" Principle, Bradley Efron, sampling with replacement, Sampling, Related Topics, Visualization: Resampling Distribution, Robustness, When to Use Which?, The Procedure, Main Use, Resampling: Bootstrap and Jackknife, 2. The Jackknife, Complexity, 1. The Bootstrap
- References: central-limit-theorem, finance/monte-carlo-method
- Backlinks: hypothesis-testing, math/m-estimators, math/multiple-testing, math/nonparametric-regression

## Entity: sampling-distributions
- Title: Sampling Distributions
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Normal (Z), Summary Table, Chi-Square ($\chi^2$), fatter tails, Fisher's F, sample size is small, Comparison to Normal, sum of squares, Property, Intuition, Sampling Distribution, Student's t, 2. Student's t-Distribution, ratio of two independent chi-square variables, Visualization: t vs Normal
- References: anova, central-limit-theorem, hypothesis-testing

## Entity: math/semiparametric-efficiency
- Title: Semiparametric Efficiency
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Robinson estimator, orthogonal/Neyman-robust, One-Step Estimators and Efficient Estimating Equations, augmented inverse-probability-weighted, Connections to Causal Inference, Theorem (BKRW Efficiency Bound)., Tangent space $\mathcal{T}_{\theta_0, \eta_0}$., Efficient estimating equations., pathwise differentiability, Pathwise Differentiability and the Tangent Set, debiased machine learning, Cox Proportional Hazards Model, semiparametric efficiency bound, Doubly robust estimators, pathwise differentiable
- References: causal-inference, cramer-rao-bound, empirical-processes, exponential-families, math/bayesian-asymptotics, math/local-asymptotic-normality, math/m-estimators
- Backlinks: math/survival-analysis

## Entity: math/sequential-hypothesis-testing
- Title: Sequential Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Shiryaev-Roberts procedure., Signal processing., The Sequential Testing Problem, Theorem (Wald-Wolfowitz)., Connection to Optimal Stopping, The SPRT, smallest expected sample size, Wald's Identities, Related Articles, both, quickest detection problem, sequential test, Change-Point Detection, CUSUM procedure., Sequential Probability Ratio Test
- References: brownian-motion, geometric-brownian-motion, hidden-markov-models, kalman-filter, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality
- Backlinks: math/absolute-continuity-process-measures, math/multiple-testing, math/neyman-pearson

## Entity: slutsky-theorem
- Title: Slutsky's Theorem
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Asymptotic Normality, constant, Slutsky's Theorem: The Algebra of Limits, Related Topics, Division, Addition, 3. Application: The t-statistic and Wald Tests, 4. Continuous Mapping Theorem (CMT), distribution, By Slutsky's Theorem, 1. The Theorem, probability, Continuous Mapping Theorem, Multiplication, Z-test
- References: central-limit-theorem, delta-method, math/law-of-large-numbers, mle

## Entity: math/survival-analysis
- Title: Survival Analysis
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: censoring, hazard ratio, Breslow estimator for baseline hazard, influence function, continuous component, Connection to local asymptotic normality and nonparametric theory, semiparametric efficiency bound, Martingale residuals, Survival Analysis, Semiparametric efficiency and influence functions, empirical information matrix, Nelson–Aalen estimator, Cox model, Related topics, Log-rank test for comparing groups
- References: causal-inference, empirical-processes, math/local-asymptotic-normality, math/m-estimators, math/neyman-pearson, math/point-processes, math/semiparametric-efficiency

## Entity: math/u-statistics
- Title: U-Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Hoeffding's projection theorem, projected U-statistic, Degenerate Convergence:, Degenerate U-Statistics, degenerate case, Hoeffding's Decomposition, Strong Law, unbiased, V-statistic, Variance Estimation and the Jackknife, Connections to Empirical Processes and V-Statistics, Gini Coefficient:, Kendall's Tau:, quadratic forms, Central Limit Theorem
- References: central-limit-theorem, characteristic-functions, cramer-rao-bound, empirical-processes, exponential-families, martingale-clt
- Backlinks: math/kernel-density-estimation

## Entity: umvue-completeness
- Title: UMVUE and Completeness
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Efficiency, Completeness, Complete Sufficient Statistic, 4. Lehmann-Scheffé Theorem: Finding the UMVUE, Related Topics, Factorization Theorem, less than or equal to, Uniformly Minimum Variance Unbiased Estimator (UMVUE), 5. Why Tier-1 Quants care, Sufficient Statistics, MLE vs UMVUE, Steps to find the UMVUE, unique UMVUE, 3. Completeness and Uniqueness, 2. Rao-Blackwell Theorem: Improving Estimators
- References: cramer-rao-bound, delta-method, mle

## Entity: variational-inference
- Title: Variational Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Speed, Related Topics, Approach, Accuracy, Scalability, The ELBO (Evidence Lower Bound), The Intractability Problem, Visualization: Approximating a Distribution, The Variational Idea, Application in AI: Variational Autoencoders (VAE), Kullback-Leibler (KL) Divergence, Optimization, Posteriors, Variational Inference (VI), VI vs. MCMC
- References: bayesian-inference, convex-optimization, mcmc, variational-autoencoders
- Backlinks: bayes-theorem, bayesian-kelly, calculus-of-variations, expectation-maximization, math/information-theory, math/variational-calculus, monte-carlo-integration

## Entity: nonequilibrium-statmech
- Title: Nonequilibrium Statistical Mechanics
- Category: Classical Physics
- Language: en
- Key Concepts: Maxwell's Demon, 4. Landauer’s Principle and the Demon, Information as a Physical Commodity, Fokker-Planck, Forward [[stochastic-differential-equations|SDE]], Equilibrium Free Energy, Violent, Nonequilibrium, Computational Drug Discovery, Landauer’s Limit, Nonequilibrium Statistical Mechanics: Fluctuation Theorems, Arrow of Time, 2. The Arrow of Time: Crooks Theorem (1999), Nonequilibrium Physics, 3. The Jarzynski Equality: Equilibrium from Chaos, 1. Beyond the Second Law
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
- Key Concepts: Chaining, Performance, Overview, Open Addressing

## Entity: account-abstraction
- Title: Account Abstraction (ERC-4337)
- Category: DeFi
- Language: en
- Key Concepts: Native Multi-sig, Paymaster, Execution Loop, Validation Loop, ERC-20 Gas Payment, 3. Session Keys and Security Policies, Gasless Onboarding, Step-by-Step Execution:, EntryPoint, Bundler, 2. Advanced Paymaster Mechanics, Signature Aggregation, Session Keys, 1. The ERC-4337 State Machine, UserOperation
- References: cedefi-gateway-architecture, zk-kyc
- Backlinks: course-cedefi

## Entity: amm-mechanics
- Title: Automated Market Makers (AMM)
- Category: DeFi
- Language: en
- Key Concepts: Efficiency, AMM as an Oracle, Related Topics, Impermanent Loss (IL), Visualization: The Bonding Curve, Constant Product Market Maker (CPMM), Impermanent Loss, Price Oracles, Concentrated Liquidity (Uniswap V3), Concentrated Liquidity, Automated Market Makers (AMM), Liquidity Pool, The Constant Product Formula (Uniswap V2), Oracle Manipulation Attacks, Complexity
- References: optimal-execution, smart-order-routing
- Backlinks: asset-tokenization, cedefi-mechanics, course-cedefi, liquid-staking-restaking, mev, stablecoin-mechanisms

## Entity: bridge-security
- Title: Bridge Security and Settlement Finality
- Category: DeFi
- Language: en
- Key Concepts: Instant Finality, 2. Types of Bridge Security, A. Trusted (Centralized) Bridges, Blockchain Reorg, CeDeFi, The Attack Scenario, Visualization: The Reorg Risk, Locks, Probabilistic Finality, Bridges, Pros, Settlement Finality, Mints, 3. The Finality Problem, B. Trustless (Decentralized) Bridges
- References: asset-tokenization, cedefi-gateway-architecture, stablecoin-mechanisms
- Backlinks: cedefi-gateway-architecture, cross-chain-interop

## Entity: cedefi-gateway-architecture
- Title: CeDeFi Gateway Architecture
- Category: DeFi
- Language: en
- Key Concepts: Reconciliation Engine, MPC (Multi-Party Computation), The Solution, 1. The Transaction Management Layer (Relayer), Visualization: The "Double-Check" Architecture, 4. Operational Resilience: Circuit Breakers, CeDeFi Gateway Architecture: High-Performance Institutional Bridging, Implementation Tip: Idempotency, Nonce Queue, Event Logs, 3. Custody Architecture: MPC vs. Multi-sig, Global Pause, EIP-1559 Support, Exponential Bump, A. Nonce Management and Concurrency
- References: bridge-security, cedefi-mechanics, zk-kyc
- Backlinks: account-abstraction, bridge-security, contract-upgradeability, course-cedefi, cross-chain-interop, number-theory-basics, oracle-design, privacy-defi, zk-kyc

## Entity: cedefi-mechanics
- Title: CeDeFi: Centralized Decentralized Finance
- Category: DeFi
- Language: en
- Key Concepts: 3. Compliance as Code, Oracle Vulnerability, Bridge Risk, Low Latency, CeDeFi, Sanction Screening, Bridges, DeFi Opportunity, A. Permissioned Liquidity Pools, Visualization: The Hybrid Stack, Binance Smart Chain (BSC), 1. The Core Paradox, 4. Risks and Trade-offs, 2. Technical Architectures, Control
- References: amm-mechanics, smart-order-routing
- Backlinks: asset-tokenization, cedefi-gateway-architecture, course-cedefi, number-theory-basics, onchain-credit, stablecoin-mechanisms

## Entity: cross-chain-interop
- Title: Cross-chain Interoperability Protocols
- Category: DeFi
- Language: en
- Key Concepts: Solution, Unified Liquidity, arbitrary data and logic, Omnichain Lending, Relayer, LayerZero, Visualization: Omnichain Logic Flow, Messaging, Chainlink CCIP, Cross-chain Interoperability Protocols, Wormhole, Bridging, 2. Key Architectures, Defense-in-Depth, Oracle
- References: asset-tokenization, bridge-security, cedefi-gateway-architecture, smart-order-routing
- Backlinks: course-cedefi

## Entity: lending-mechanics
- Title: Lending and Money Market Mechanics
- Category: DeFi
- Language: en
- Key Concepts: Liquidation Threshold, LTV (Loan-to-Value), Health Factor ($H_f$), Aave, Liquidation Bonus, 1. The Liquidity Pool Model, Reserve Factor, 3. Risk Management: LTV and Health Factor, Rate Parameters, Borrowers, Peer-to-Pool, Visualization: The Kinked Rate Curve, Liquidation, Utilization-based Model, Kinked Interest Rate Curve
- References: onchain-credit, stablecoin-mechanisms
- Backlinks: course-cedefi, metric-spaces, oracle-design, yield-aggregators

## Entity: liquid-staking-restaking
- Title: Liquid Staking and Restaking
- Category: DeFi
- Language: en
- Key Concepts: Renzo, Restaking, Lido, ether.fi, Liquid Staking, Visualization: The Yield Pyramid, Deposit, Liquid Staking and Restaking: The Yield Layer, stETH, A. Shared Security, Receipt, multiple services, complex correlation of risk, The Systemic Risk, EigenLayer
- References: amm-mechanics, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: mev
- Title: Maximal Extractable Value (MEV)
- Category: DeFi
- Language: en
- Key Concepts: Buy, High-Frequency Trading (HFT) and Front-Running, Information Leakage, Solution, C. Arbitrage, Implementation Shortfall, 4. Toxic vs. Non-Toxic MEV, PBS, 3. MEV as an Institutional Risk, Flashbots, Builders, reordering, Mempool, 2. The Proposer-Builder Separation (PBS), Maximal Extractable Value (MEV)
- References: amm-mechanics, latency-arbitrage, smart-order-routing
- Backlinks: contract-upgradeability, course-cedefi, oracle-design, privacy-defi

## Entity: onchain-credit
- Title: On-chain Credit Markets
- Category: DeFi
- Language: en
- Key Concepts: Composability, Maple, 3. The Role of Underwriters (Delegates), Tranche, Visualization: The Credit Pipeline, Efficiency, Overcollateralized, Transparency, 2. The Tranche Structure (Waterfall Model), Asset-Backed (RWA), 1. Undercollateralized vs. Asset-Backed Lending, Goldfinch, Junior Tranche (Equity), Undercollateralized (Institutional), Senior Tranche (Junior First Loss)
- References: asset-tokenization, cedefi-mechanics
- Backlinks: course-cedefi, lending-mechanics, zk-kyc

## Entity: onchain-perps
- Title: On-chain Perpetuals and vAMM Mechanics
- Category: DeFi
- Language: en
- Key Concepts: Funding Rate, Settlement, Bad Debt, 5. Risk for Your Project, Perpetual Protocol, Perpetual Swaps (Perps), Liquidation Cascades, Oracle Lag, 1. Funding Rates: The Peg Mechanism, 4. Order-book Based DEXs (dYdX Model), price movement, If Perp Price > Spot Price, On-chain Perpetuals and vAMM Mechanics, GLP, If Perp Price < Spot Price
- References: oracle-design, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: oracle-design
- Title: Oracle Design and Resilience
- Category: DeFi
- Language: en
- Key Concepts: Logic, Math, Scenario, OEV-Share, Flashbots, Secondary Source, CeDeFi, Median, Project Risk, Oracle Design and Resilience: Engineering Financial Truth, Multi-Oracle Consensus, 3. Oracle Extractable Value (OEV), Spot Price, Primary Source, Heartbeat
- References: cedefi-gateway-architecture, lending-mechanics, mev
- Backlinks: course-cedefi, onchain-perps

## Entity: privacy-defi
- Title: Privacy-Preserving DeFi (Shielded Pools)
- Category: DeFi
- Language: en
- Key Concepts: Privacy-Preserving DeFi: The Shielded Economy, Confidentiality, 4. Risks and Regulatory Pressure, Panther, 3. Dark Pools (The Institutional Dream), Unshielding, Copy-trading bots, Visualization: The Shielding Process, 2. Institutional Privacy vs. Anonymity, Privacy DeFi, MEV bots, On-chain Dark Pools, Dark Pool, 1. How Shielded Pools Work, 5. Value for Your Project
- References: cedefi-gateway-architecture, mev, zk-kyc
- Backlinks: course-cedefi

## Entity: asset-tokenization
- Title: Real World Asset (RWA) Tokenization
- Category: DeFi
- Language: en
- Key Concepts: Real World Asset (RWA) Tokenization, C. The Oracle Problem, A. Atomic Settlement, ERC-3643, Tokenized Treasuries, C. Liquidity for Illiquid Assets, Centralization, Real World Assets (RWA), Asset Tokenization, BUIDL, Commodities, 4. Risks and the "Off-chain Coupling" Problem, 3. Institutional Use Cases, Special Purpose Vehicle (SPV), Private Credit
- References: amm-mechanics, cedefi-mechanics, smart-order-routing
- Backlinks: bridge-security, course-cedefi, cross-chain-interop, onchain-credit, stablecoin-mechanisms, zk-kyc

## Entity: contract-upgradeability
- Title: Smart Contract Upgradeability
- Category: DeFi
- Language: en
- Key Concepts: cannot use constructors, Logic, Drawback, Upgradeability Patterns, Timelock, V1 Layout, Storage, CeDeFi, Gas, A. UUPS (Universal Upgradeable Proxy Standard), Proxy, 2. Advanced Upgrade Patterns, Security, Visualization: UUPS Architecture, Multi-sig
- References: cedefi-gateway-architecture, mev
- Backlinks: course-cedefi

## Entity: stablecoin-mechanisms
- Title: Stablecoin Mechanisms
- Category: DeFi
- Language: en
- Key Concepts: PSM (Peg Stability Module), 2. Crypto-Collateralized (On-chain Overcollateralization), Mechanism, Overcollateralized, Short Perpetual position, Seigniorage (Terra/UST), Capital Efficiency, 3. Algorithmic and Delta-Neutral, Liquidated, Stablecoin Mechanisms: The Infrastructure of Value, 1. Fiat-Collateralized (Off-chain), Visualization: Collateral vs. Stability, Stability, Risk, Related Topics
- References: amm-mechanics, asset-tokenization, cedefi-mechanics
- Backlinks: bridge-security, combinatorics-induction, course-cedefi, lending-mechanics, liquid-staking-restaking, onchain-perps, yield-aggregators

## Entity: yield-aggregators
- Title: Yield Aggregators and Strategy Automation
- Category: DeFi
- Language: en
- Key Concepts: Beefy, 4. Institutional Customization, Liquidity Risk, Strategy, 1. The Vault Architecture, Aggregator Risk, Yield Aggregators, Vaults, Yearn Finance, 3. Risk Assessment: The Strategy Stack, Compounded APY, Visualization: The Harvest Loop, Curated Strategies, Protocol Risk, The Strategy
- References: lending-mechanics, smart-order-routing, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: zk-kyc
- Title: ZK-KYC: Privacy-Preserving Compliance
- Category: DeFi
- Language: en
- Key Concepts: Soulbound Tokens, Proof of Residency, CeDeFi, Verification, 4. Strategic Value for Your Project, Legal Compliance, Visualization: The ZK-KYC Flow, Issuer, Transparency, Wallet Address, Proof of Funds, 2. Selective Disclosure, 1. The Core Mechanism: Proof of Identity, ZK-KYC, Commitment
- References: asset-tokenization, cedefi-gateway-architecture, onchain-credit
- Backlinks: account-abstraction, cedefi-gateway-architecture, course-cedefi, privacy-defi

## Entity: course-cedefi
- Title: CeDeFi Engineering: Institutional Web3
- Category: DeFi & Engineering
- Language: en
- Key Concepts: Week 3 — Lending and risk, Prerequisites, Course map, Week 5 — Smart-contract security, Compliance-yield gateway., Capstone project, Goal:, Week 8 — Institutional stack, Week 1 — EVM and stack architecture, Week 4 — Stablecoins, Oracles, MEV, Week 7 — Cross-chain and bridges, Kata:, fully private, Week 6 — ZK and private KYC, Outcomes
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
- Key Concepts: Modern Multi-Curve Framework, Discounting Curve, OIS (Overnight) curve, Risk-Free Rates (RFRs), Multi-Curve Framework (Post-2008 Modern Yield Curves), LIBOR Transition (The "End of LIBOR"), Liquidity Risk, CSA and Collateral Discounting, Related Topics, Credit Risk, Visualization: The Basis Spread, SOFR, Credit Support Annex (CSA), Why Do Curves Diverge?, The Paradigm Shift
- References: finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/xva

## Entity: option-greeks-and-volatility
- Title: Option Greeks, Volatility & Hedging
- Category: Derivatives
- Language: en
- Key Concepts: Delta ($\Delta$):, Vega ($\nu$):, See Also, Theta ($\Theta$):, 3. Delta Hedging, Option Greeks, Volatility & Hedging, Gamma ($\Gamma$):, 1. Put-Call Parity, 2. Option Greeks
- References: course-quant-trading, optimal-stopping-and-kelly, quant-market-making-mechanics
- Backlinks: credit-risk-modeling-and-structural-models, exotic-options-and-structured-products, fixed-income-quant-rates-and-yield-curve, interest-rate-derivatives-swaps-caps-floors, monte-carlo-option-pricing-and-variance-reduction, quant-market-making-mechanics, stochastic-calculus-and-ito-lemma, volatility-surface-sabr-model, volatility-trading-and-variance-swaps

## Entity: volatility-arbitrage
- Title: Volatility Arbitrage and Variance Swaps
- Category: Derivatives
- Language: en
- Key Concepts: Log-Contract Replication, model-independent, Related Topics, implied volatility, 4. Trading Strategies, variance strike, No Delta Hedging, 2. Variance Swaps, forecasted future volatility, Volatility Arbitrage and Variance Swaps, 3. The VIX Index, Variance Swap, 2. Dispersion Trading, VIX Index, Variance Risk Premium
- References: black-scholes, finance/rough-volatility, volatility-smile

## Entity: volatility-trading-and-variance-swaps
- Title: Volatility Trading & Variance Swaps
- Category: Derivatives
- Language: en
- Key Concepts: 1. Delta-Neutral Gamma Scalping, Volatility Trading & Variance Swaps, See Also
- References: course-quant-trading, option-greeks-and-volatility, quant-market-making-mechanics
- Backlinks: stochastic-volatility-heston-model

## Entity: math/ergodic-theorems-birkhoff
- Title: Birkhoff-Khintchine Ergodic Theorem
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Lemma (maximal ergodic theorem, Garcia)., Theorem., "ergodic accessibility", invariant, Comparison with the LLN, 1. Statistical mechanics., much stronger, If $T$ is ergodic, Related Articles, Birkhoff-Khintchine Ergodic Theorem, stationary (in the strict sense), Connection to information and [[shannon-entropy|entropy]], time averages, time average equals ensemble average, ensemble averages
- References: arch-models, brownian-motion, central-limit-theorem, finance/shannon-entropy, garch-models, law-iterated-logarithm, math/discrete-markov-chains, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/stochastic-recursive-sequences
- Backlinks: math/borel-cantelli-zero-one, math/branching-processes, math/coupling-methods, math/discrete-markov-chains, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/law-of-large-numbers, math/markov-chain-mixing, math/martingale-clt, math/percolation, math/renewal-theory, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, statistical-mechanics

## Entity: math/discrete-markov-chains
- Title: Discrete Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Markov property., State classification, Convergence of averages, aperiodic, Connection to martingales, 1. PageRank., Communicating states., Theorem., null recurrent, stochastic matrix, stationary distribution, Continuous-time chains, invariant, spectral gap, communicate
- References: brownian-motion, finance/crr-model, hidden-markov-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, reinforcement-learning
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, math/branching-processes, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/geometric-ergodicity, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/markov-chain-mixing, math/optimal-stopping-markov, math/renewal-theory, math/stochastic-recursive-sequences, random-walks-groups, stochastic-processes

## Entity: math/kolmogorov-equations-ctmc
- Title: Kolmogorov Equations and Continuous-Time Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: boundary condition, forward equation, transition semigroup, generator, Kolmogorov backward equation, Explosion and non-minimal chains, spectral gap, Setup and the Q-matrix, Related Articles, Q-matrix, Kolmogorov's forward and backward equations, birth-death process, Foster-Lyapunov criteria, Comparison with discrete chains, Detailed balance
- References: brownian-motion, finance/levy-processes, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms, math/spectral-theory-operators
- Backlinks: fokker-planck-equation, math/discrete-markov-chains, math/point-processes, math/subordinators, stochastic-processes

## Entity: math/spectral-representation-processes
- Title: Spectral Representation of Stationary Processes
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Connection to ARMA models, 1. Frequency-structure analysis of financial series., Random measures and Brownian motion, deterministic, 3. Wavelets., Interpretation., The spectral representation theorem, autocovariance, Limitations, Related Articles, every, Integrator, Linear transformations, Examples:, [[hilbert-huang-transform|Hilbert-Huang transform]]
- References: brownian-motion, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/stationary-wide-spectral, wavelet-transform
- Backlinks: math/spectral-theory-operators, math/stationary-wide-spectral

## Entity: math/stochastic-recursive-sequences
- Title: Stochastic Recursive Sequences
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: The GARCH connection, The linear case: products of random matrices, Borovkov's renovation approach, Theorem (Loynes, 1962)., Theorem (Kesten, 1973; Vervaat, 1979)., Iterated function systems., Theorem., renovation events, Connection to the multiplicative ergodic theorem, Related Articles, Autoregressive processes., heavy (Pareto) tails, Lindley recursion, top Lyapunov exponent, Theorem (Furstenberg-Kesten, 1960).
- References: arch-models, brownian-motion, finance/levy-processes, garch-models, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/law-of-large-numbers
- Backlinks: math/ergodic-theorems-birkhoff, math/geometric-ergodicity

## Entity: math/stationary-wide-spectral
- Title: Wide-Sense Stationary Processes and Spectral Density
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: 5. Singular spectrum analysis (SSA)., Herglotz-Bochner decomposition, Connection to the Kalman filter, Non-negative definiteness, wide-sense stationary, periodogram, squared, Herglotz's theorem., Limitations, constant, Related Articles, autocorrelation function, 1. Analysis of financial time series., Symmetry, right language
- References: brownian-motion, characteristic-functions, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/self-similarity-fractality, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/spectral-representation-processes
- Backlinks: math/spectral-representation-processes, ornstein-uhlenbeck, stochastic-processes

## Entity: conditionally-gaussian-processes
- Title: Conditionally Gaussian Processes
- Category: Filtering Theory
- Language: en
- Key Concepts: Multivariate Extensions, Derive the equations, Comparison with Kalman-Bucy, linear in $\theta$, conditionally Gaussian, log-linear in $\theta$, Target tracking with range-dependent noise., Related Articles, Theorem (Liptser-Shiryaev)., Absolute continuity., Conditionally Gaussian Processes, Stochastic volatility filtering., The Filtering Equations, Conditional Gaussianity under $\tilde{P}$., Key structural point:
- References: finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, math/doleans-dade-exponential, nonlinear-filtering, stochastic-differential-equations
- Backlinks: innovation-process, nonlinear-filtering

## Entity: innovation-process
- Title: Innovation Process
- Category: Filtering Theory
- Language: en
- Key Concepts: Kushner-Stratonovich equation, Recursive estimation., whitens, The Innovation Representation Theorem, Theorem., Control theory., reference measure, Related Articles, Theorem (Liptser-Shiryaev)., Causal vs. Non-Causal Estimation, Likelihood computation., innovation process, Example: Scalar Linear Model, Smoothing, The Innovation Approach to Filtering
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, kalman-filter, math/conditional-expectation-sigma, math/discrete-martingales, nonlinear-filtering
- Backlinks: conditionally-gaussian-processes, math/absolute-continuity-process-measures, math/martingale-representation, nonlinear-filtering

## Entity: nonlinear-filtering
- Title: Nonlinear Filtering
- Category: Filtering Theory
- Language: en
- Key Concepts: Nonlinear Filtering, Linear-Gaussian case., observation process, Particle filters., Zakai equation, Theorem (Benes-Hazewinkel-Marcus)., The Kushner-Stratonovich Equation, Why Nonlinear Filtering is Hard, Extended Kalman filter (EKF)., innovation, Benes filter., Derive the Zakai equation, Stochastic volatility., Reference measure method., Related Articles
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, manifold-learning, math/doleans-dade-exponential, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, innovation-process, math/absolute-continuity-process-measures, math/martingale-representation, state-space-models, stochastic-control-partial-info, stochastic-differential-equations

## Entity: bayesian-networks
- Title: Bayesian Networks
- Category: Foundations
- Language: en
- Key Concepts: Acyclicity, Inference and Learning, Belief Propagation, Parameter Learning, Visualization: A Simple Network, Inference, The DAG Structure, Chain Rule for Bayesian Networks, Variable Elimination, Collider (V-structure), Directed Acyclic Graph (DAG), Nodes, Bayesian Networks, Chain, Structure Learning
- References: bayes-theorem, causal-inference, hmm
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, graph-theory-basics

## Entity: category-theory
- Title: Category Theory
- Category: Foundations
- Language: en
- Key Concepts: 2. Functors: Moving Between Worlds, Category, 5. Applications in AI and Physics, Functor, Functional Programming, Natural Transformations, Objects, an object is completely determined by its relationships to all other objects., 3. Natural Transformations, Distributed Representations, Quantum Physics, 4. The Yoneda Lemma: Identity via Relationships, Category Theory: The Mathematics of Mathematics, Categorical Quantum Mechanics, Morphisms (Arrows)
- References: homological-algebra, topos-theory, type-theory
- Backlinks: homological-algebra, homotopy-type-theory, math/algebraic-topology, topos-theory, type-theory

## Entity: probability-paradoxes
- Title: Classic Paradoxes in Probability
- Category: Foundations
- Language: en
- Key Concepts: Reality, Related Topics, 2. Berkson's Paradox (Selection Bias), Lesson, 4. Survivor Bias, no holes, Intuition, Classic Paradoxes in Probability and Statistics, 3. The Birthday Paradox, 1. Simpson's Paradox, Abraham Wald, confounding variables, Visualization: Simpson's Reversal, Example
- References: bayes-theorem, causal-inference, hypothesis-testing

## Entity: convex-optimization
- Title: Convex Optimization
- Category: Foundations
- Language: en
- Key Concepts: Weak duality, Convex Sets and Functions, Alternating Direction Method of Multipliers, SVM (Support Vector Machine):, Complementary slackness:, First-order optimality condition:, Convex Optimization, Proximal Gradient (ISTA/FISTA), KKT conditions, Algorithms, Jensen's inequality, Dual feasibility:, Examples:, Conjugate Function, conjugate function
- References: math/information-theory, math/m-estimators, math/variational-calculus, stochastic-control
- Backlinks: 3d-gaussian-splatting, ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, attention-kernel, automatic-differentiation, convex-analysis, convexity, course-math-for-ai, deep-galerkin, differential-privacy, energy-based-models, ergodic-theory-sgd, fine-tuning, fisher-information, fluid-dynamics-navier-stokes, geometric-mechanics-lie-groups, geometry-loss-landscapes, gradient-hessian-jacobian, information-bottleneck-theory, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lagrange-multipliers, linear-algebra, linear-systems-gauss, logistic-regression, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/interacting-particle-systems, math/large-deviations-cramer, math/martingale-clt, math/ode-stability, meta-learning, model-merging-procrustes, multimodal-alignment-clip, multivariable-calculus, neural-operators-fno, normalization-layers-math, ntk, online-learning-regret, optimal-transport-gromov-wasserstein, optimization-basics, pinns-convergence, proximal-algorithms-admm, qft-curved-spacetime, regularization-implicit-bias, sgd-convergence-theory, sgd-variants, stochastic-calculus-manifolds, string-theory-calabi-yau, symplectic-hamiltonian-nn, training-dynamics, ttt-layers, vae-elbo, variational-autoencoders, variational-inference, variational-inference-math

## Entity: eigenvalues-eigenvectors
- Title: Eigenvalues and Eigenvectors
- Category: Foundations
- Language: en
- Key Concepts: model compression, SVD, Trace, Normal Modes, Eigendecomposition, 2. Theoretical Gems, 4. Singular Value Decomposition (SVD), Neural Stability, Google PageRank, 3. Spectral Decomposition and Theorem, Interpretation, The Characteristic Equation, eigenvalue, Statistical Arbitrage, 5. Why It Matters in AI and Finance
- References: finance/random-matrix-theory, linear-spaces-basis, math/discrete-markov-chains, math/spectral-theory-operators, pca
- Backlinks: cross-impact, laplacian, linear-spaces-basis, linear-systems-gauss, matrix-decompositions, nonlinear-shrinkage, vector-spaces-orthogonality

## Entity: math/functional-analysis
- Title: Functional Analysis
- Category: Foundations
- Language: en
- Key Concepts: Eigenfunctions:, Reproducing Kernel Hilbert Spaces (RKHS):, Related Topics, Applications in Machine Learning, Hilbert Spaces ($\mathcal{H}$):, Normed Spaces:, linear operator, Core Spaces, Banach Spaces:, Functional Analysis, Stability Analysis:, orthogonality, Spectral Theorem:, Kernel Trick:, Operators and Spectrum
- References: hilbert-banach-spaces, linear-algebra, math/spectral-theory-operators, quantum-mechanics

## Entity: graph-theory
- Title: Graph Theory
- Category: Foundations
- Language: en
- Key Concepts: Path, Key Types of Graphs, Directed Graph (Digraph), connected, Handshaking Lemma, Overview, Degree, vertices, Adjacency Matrix, Complete Graph ($K_n$), Important Theorems, Connectivity, directed graph, strongly connected, out-degree
- References: finance/systemic-contagion-debtrank, graph-neural-networks, knowledge-graph, linear-algebra, math/spectral-theory-operators, spectral-graph-theory
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, kuramoto-model, linear-algebra, logic-set-theory

## Entity: homological-algebra
- Title: Homological Algebra
- Category: Foundations
- Language: en
- Key Concepts: exact, homology, The Snake Lemma, Category Theory, The Five Lemma, chain complex, Theoretical Physics, Derived Functors: Ext and Tor, Homology Groups, Visualization: Long Exact Sequence, Diagram Chasing and Lemmas, Algebraic Geometry, 2. Ext (Extension), Applications, 1. Tor (Torsion)
- References: category-theory, hodge-theory, math/algebraic-topology, quantization
- Backlinks: category-theory, topos-theory, tor-ext-functors

## Entity: jensens-inequality
- Title: Jensen's Inequality
- Category: Foundations
- Language: en
- Key Concepts: Concave Case, Equality Condition, B. Variational Inference and VAEs, C. Finance: The Volatility Tax, Deep Learning, A. Information Theory (Gibbs' Inequality), 1. The Mathematical Statement, Convex Case, Kullback-Leibler (KL) Divergence, Finite Version, above, 3. Critical Applications, 4. Generalizations, Evidence Lower Bound (ELBO), Information Theory
- References: convexity, finance/shannon-entropy, variational-autoencoders
- Backlinks: f-divergences

## Entity: linear-algebra
- Title: Linear Algebra
- Category: Foundations
- Language: en
- Key Concepts: Weights, Rank, Matrix Multiplication, Singular Value Decomposition (SVD), dimension, linearly independent, Overview, Applications in AI, Fundamental Objects, Low-rank approximations, Matrices, eigenvalue, [[spectral-theory-operators|Eigenvalues]] and Eigenvectors, Key Concepts, Vectors
- References: attention-mechanisms, automatic-differentiation, convex-optimization, graph-theory, manifold-learning, math/spectral-theory-operators, quantization, spectral-graph-theory, transformer-architecture
- Backlinks: graph-theory, language-models/mamba-ssm, math/functional-analysis

## Entity: quantum-math
- Title: Math of Quantum Computing
- Category: Foundations
- Language: en
- Key Concepts: Shor's Algorithm, Grover's Algorithm, 4. Measurement as Projection, Unitary Matrix, 2. Tensor Products and Entanglement, 5. Key Quantum Algorithms, Reversibility, Schmidt Rank, Linear Algebra, Visualization: The Bloch Sphere, 1. The Qubit as a Hilbert Space Vector, 3. Unitary Operators (Quantum Gates), Superposition, Born Rule, The Mathematics of Quantum Computing
- References: hilbert-banach-spaces, quantum-amplitude-estimation, quantum-information-entropy, spectral-theorem-unbounded
- Backlinks: hilbert-banach-spaces, path-integral-control, quantum-amplitude-estimation

## Entity: decision-theory
- Title: Statistical Decision Theory
- Category: Foundations
- Language: en
- Key Concepts: Bellman Equation, Dominant, Parameter Space ($\Theta$), Visualization: Bayes vs. Minimax, Probability Theory, Action Space ($\mathcal{A}$), Loss Function $L(\theta, a)$, 1. The Formal Setup, A. Bayes Criterion (The Average Case), Bayes Rule, 2. Decision Rules and Risk, Risk Function, Adversarial Machine Learning, Decision Rule, 3. Optimal Strategies
- References: bayesian-inference, finance/shannon-entropy, reinforcement-learning
- Backlinks: naive-bayes

## Entity: tensor-decompositions
- Title: Tensor Decompositions
- Category: Foundations
- Language: en
- Key Concepts: Application, Core Tensor, 2. CP Decomposition (CANDECOMP/PARAFAC), 5. Why it Matters for AI Infrastructure, Large Language Models, Tensor Decompositions: Compressing Multi-dimensional Data, 1. The Core Problem: Rank of a Tensor, Interpretation, 3. Tucker Decomposition (Higher-Order SVD), Tensors, Communication, rank-1 tensors, Use Case, Compression Power, Limitation
- References: distributed-training, many-body-tensor-networks, modern-quantization, pca
- Backlinks: course-math-for-ai, lora-peft

## Entity: maximum-entropy
- Title: The Maximum Entropy Principle
- Category: Foundations
- Language: en
- Key Concepts: 3. Duality with maximum likelihood, 9. Information-geometric view, 7. Bayesian priors via MaxEnt, Variational auto-encoders, fat-tailed distributions, Student's $t$-distribution, The Maximum [[shannon-entropy|Entropy]] Principle, not a postulate, Key takeaway., m-flat, maximally uncertain, Kullback's principle of minimum discrimination information, Tsallis entropy, MaxEnt RL, Logistic regression
- References: bayesian-inference, exponential-families, finance/shannon-entropy, fisher-information, manifold-learning, math/analysis-geometry/information-geometry, math/information-theory, mle, statistical-mechanics
- Backlinks: course-math-for-ai, distributions-zoo, entropy-information, information-theory-basics

## Entity: topos-theory
- Title: Topos Theory
- Category: Foundations
- Language: en
- Key Concepts: Exponentials, 1. As a Generalized Space (Grothendieck), Holography, Sheaves, What is a Topos?, Synthetic Differential Geometry, Quantum Logic, Finite Limits and Colimits, Subobject Classifier ($\Omega$), Visualization: Truth Value Spectrum, Alexandre Grothendieck, Independence Proofs, Why It Matters for AI and Physics, Etale Cohomology, Related Topics
- References: category-theory, homological-algebra, math/algebraic-topology
- Backlinks: category-theory, category-theory-ml, type-theory

## Entity: type-theory
- Title: Type Theory and Formal Logic
- Category: Foundations
- Language: en
- Key Concepts: Dependent types, Software Safety, Agda, 2. Dependent Types, paths, Type, Proofs are Programs, Visualization: The Proof-Program Ladder, 1. The Curry-Howard Correspondence, Lean, AI for Math, Propositions are Types, Coq, 4. Why It Matters for AI, Neuro-symbolic AI
- References: category-theory, reasoning-models, topos-theory
- Backlinks: category-theory, category-theory-ml, homotopy-type-theory

## Entity: math/variational-calculus
- Title: Variational Calculus
- Category: Foundations
- Language: en
- Key Concepts: Energy, 1. Physics-Informed Neural Networks (PINNs), Noether's Theorem, Action, Hamilton's Principle:, Lagrangian, ELBO, Variational Principles in AI, The Core Problem, Angular Momentum, functionals, 2. Variational Inference, Geodesics:, Related Topics, symmetries to conservation laws
- References: lagrangian-mechanics, noether-theorem, variational-inference
- Backlinks: ai-physics/hamiltonian-nn, convex-optimization, math/differential-geometry, math/ode-stability

## Entity: math/cantor-diagonal
- Title: Cantor's Diagonal Argument
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Theorem: $\mathbb{R}$ is Uncountable, Python Demonstration, Cantor's theorem, Countability, Proof., Turing's halting problem, Cardinal Numbers, Related Articles, [[kolmogorov-complexity|Kolmogorov complexity]], countable, uncountable, Cantor's Diagonal Argument, [[godel-incompleteness|Gödel's incompleteness theorems]], between, Diagonalization beyond set theory
- References: chain-of-thought, kolmogorov-complexity, llm, math/banach-tarski, math/godel-incompleteness
- Backlinks: chain-of-thought, math/banach-tarski, math/godel-incompleteness

## Entity: math/godel-incompleteness
- Title: Gödel's Incompleteness Theorems
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Gödel's Incompleteness Theorems, halting problem, Python Demonstration, incomplete, Second Incompleteness Theorem, Gödel's incompleteness theorems, Gödel Numbering, "I am unprovable in $T$", Related Articles, [[kolmogorov-complexity|Kolmogorov complexity]], The Gödel Sentence, Consequences, Connection to computability and AI, Diagonalization lemma, First Incompleteness Theorem
- References: chain-of-thought, information-paradox, kolmogorov-complexity, llm, math/banach-tarski, math/cantor-diagonal, mechanistic-interpretability, transformer-architecture
- Backlinks: chain-of-thought, homotopy-type-theory, math/banach-tarski, math/cantor-diagonal, math/kolmogorov-probability-axioms, math/non-euclidean-geometry

## Entity: math/non-euclidean-geometry
- Title: Non-Euclidean Geometry
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: fifth postulate, Related Articles, The Parallel Postulate, Gaussian Curvature, Geodesics, Non-Euclidean geometry, Metric, [[general-relativity|general relativity]], exactly one, Connection to Physics, Poincaré Disk Model, Three Geometries, Non-Euclidean Geometry, Gauss's Theorema Egregium
- References: asymptotic-spacetime, bms-group, celestial-holography, general-relativity, gravitational-waves-gr, manifold-learning, math/banach-tarski, math/godel-incompleteness
- Backlinks: math/algebraic-topology, math/banach-tarski, math/differential-geometry

## Entity: math/banach-tarski
- Title: The Banach-Tarski Paradox
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: without, 1. Free Group on Two Generators, two copies of itself, Related Articles, all subsets of $\mathbb{R}$ are Lebesgue measurable, measure theory and symmetry transformations break down at the quantum level, 3. Axiom of Choice, Proof Sketch, Banach-Tarski paradox, Statement, non-measurable sets, Why This Is Not a Contradiction, The Banach-Tarski Paradox, The Role of the Axiom of Choice, 2. Hausdorff Paradox (1914)
- References: anomalies, math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry
- Backlinks: math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry

## Entity: operator-semigroups
- Title: Operator Semigroups
- Category: Functional Analysis
- Language: en
- Key Concepts: Generator, Schrödinger Equation, 4. Contractive Semigroups and Stability, Contractive, Partial Differential Equations (PDEs), Operator Semigroups: The Math of Evolution, Stochastic Processes, One-Parameter Semigroup, Markov Processes, Heat Equation, 2. The Infinitesimal Generator ($A$), 1. Mathematical Definition, 3. Physical Examples, spectral properties, Identity
- References: feller-processes, laplacian, neural-odes, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: dirichlet-forms, feller-processes, spectral-theorem-unbounded

## Entity: schwartz-distributions
- Title: Schwartz Distributions
- Category: Functional Analysis
- Language: en
- Key Concepts: Convolution, Related Topics, Partial Differential Equations (PDEs), Tempered Distributions, 2. Weak Derivatives: Differentiating the Non-Differentiable, Fundamental Solution, Schwartz Distributions: Generalized Functions, Schwartz Distributions, Dirac Delta, every distribution has a derivative, Fourier Transform, Visualization: Derivative of a Step, 3. The Fourier Transform of Distributions, 4. Fundamental Solutions (Green's Functions), Test Functions
- References: deep-galerkin, fourier-transform, laplacian, partial-differential-equations, spectral-graph-theory
- Backlinks: gff, microlocal-analysis

## Entity: sobolev-spaces
- Title: Sobolev Spaces & Weak Solutions
- Category: Functional Analysis
- Language: en
- Key Concepts: Sobolev Embeddings, Weak Derivatives, Sobolev Spaces $W^{k,p}$, Physics-Informed Neural Networks (PINNs), Rellich-Kondrachov Theorem, Sobolev Spaces & Weak Solutions
- Backlinks: deep-ritz-method, hilbert-banach-spaces, math/harmonic-analysis, math/lp-spaces, math/nonparametric-regression, math/spectral-theory-operators, math/topology-basics

## Entity: spectral-theorem-unbounded
- Title: Spectral Theorem for Unbounded Operators
- Category: Functional Analysis
- Language: en
- Key Concepts: Related Topics, Functional Calculus, The Spectral Decomposition, Stochastic PDEs, Quantum Mechanics, Visualization: Discrete vs. Continuous Spectrum, Schrödinger equation, Kernel Methods, Why It Matters in Physics and AI, Self-Adjointness, Stable Processes, Spectral Theorem for Unbounded Operators, Spectral Measure, unbounded, Self-Adjointness: The Key Requirement
- References: functional-analysis, math/spectral-theory-operators, operator-semigroups, spectral-graph-theory
- Backlinks: laplacian, operator-semigroups, quantum-math

## Entity: bayes-theorem
- Title: Bayes' Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: Applications in AI, $P(B|A)$ (Likelihood):, Related Topics, $P(A|B)$ (Posterior):, Bayesian Neural Networks:, The Formula, $P(B)$ (Evidence):, Logical Pitfalls, Variational Autoencoders (VAE):, Bayes' Theorem, Naive Bayes Classifier:, Bayesian Inference:, uncertainty, $P(A)$ (Prior):, Base Rate Fallacy
- References: naive-bayes, prm, variational-inference
- Backlinks: bayesian-networks, conditional-probability, map-estimation, probability-distributions, probability-paradoxes, statistical-inference

## Entity: combinatorics-induction
- Title: Combinatorics and Mathematical Induction
- Category: Fundamentals
- Language: en
- Key Concepts: Complexity Analysis, 1. The Rules of Counting, Inductive Step, not, Intuition: The Domino Effect, Binomial Distribution, Combinatorics, Combinatorics and Induction: The Tools of Counting and Proving, Hardware Design, Visualization: Pascal's Triangle (Combinations), Pascal's Triangle, 4. Why it Matters in CS and AI, Permutations ($P_n$), 5. Pigeonhole Principle, Base Case
- References: lln-clt, stablecoin-mechanisms
- Backlinks: number-theory-basics

## Entity: lagrange-multipliers
- Title: Constrained Optimization and Lagrange Multipliers
- Category: Fundamentals
- Language: en
- Key Concepts: Karush-Kuhn-Tucker (KKT), Related Topics, 4. Why it Matters in AI and Physics, B. Classical Mechanics, Constrained Optimization: The Method of Lagrange Multipliers, 3. The Lagrangian Function ($\mathcal{L}$), 1. The Core Problem, Lagrange Multipliers, Support Vectors, Lagrange Multiplier, tangent, A. Support Vector Machines (SVMs), C. Advanced: KKT Conditions, Action, subject to
- References: ai-physics/hamiltonian-nn, convex-optimization, convex-optimization-trading, multivariable-calculus
- Backlinks: course-math-for-ai, linear-programming

## Entity: convexity
- Title: Convexity
- Category: Fundamentals
- Language: en
- Key Concepts: Log-Concave, 1. Mathematical Rigor, B. Portfolio Optimization, Non-Convex, A. Convex Sets, 2. Why it is the "Holy Grail", A. Support Vector Machines (SVM), Global Optimality, ELBO, 3. Applications, 4. Jensen's Inequality, The Hessian Test, Convexity: The Safety Net of Optimization, C. Log-Concavity in Stats, In Finance
- References: convex-optimization, convex-optimization-trading, gradient-hessian-jacobian, martingale-optimal-transport, variational-autoencoders
- Backlinks: course-math-for-ai, fixed-point-theorems, jensen-inequality, jensens-inequality, logistic-regression, martingale-optimal-transport

## Entity: differential-equations
- Title: Differential Equations: The Laws of Change
- Category: Fundamentals
- Language: en
- Key Concepts: Geometric Brownian Motion, Euler methods, A. Neural ODEs, Second Order, 1. Ordinary Differential Equations (ODEs), First Order, B. Stochastic Differential Equations (SDEs), Wave Equation, Runge-Kutta, ODE, Differential Equations: Modeling Dynamic Systems, 4. Analytical vs. Numerical Solutions, PDE, Analytical, 2. Partial Differential Equations (PDEs)
- References: automatic-differentiation, geometric-brownian-motion, ricci-flow, stochastic-differential-equations

## Entity: fourier-transform
- Title: Fourier Transform
- Category: Fundamentals
- Language: en
- Key Concepts: Fast Fourier Transform (FFT), 2. The Fourier Transform (Continuous Case), 4. Key Properties, Visualization: From Time to Frequency, 5. Why it Matters in AI and Science, Fourier Transform: The Language of Waves, Positional Encodings, Intuition, 1. Fourier Series (Periodic Signals), Fourier Transform, Time Domain, Frequency Domain, Geometric Deep Learning (GNNs), Fourier Neural Operators (FNO), Inverse Transform
- References: finance/spectral-analysis, spectral-graph-theory
- Backlinks: characteristic-functions, complex-analysis, finance/dft, finance/fft, finance/prony-hankel-spectral, mgf, mgf-characteristic-functions, occupation-measures-local-times, schwartz-distributions

## Entity: gradient-hessian-jacobian
- Title: Gradient, Hessian, and Jacobian
- Category: Fundamentals
- Language: en
- Key Concepts: Local Maximum, Deep Learning, 2. The Jacobian ($J$) - The Linearizer, Visualization: Landscape Analysis, Hessian-Free & K-FAC, Gradient, Hessian, and Jacobian: The Geometry of Derivatives, Newton's Method, 3. The Hessian ($H$) - The Curvature, Linearization, [[automatic-differentiation|Backpropagation]], Saddle Point, Jacobian-Vector Products (JVP), Optimization, 1. The Gradient ($\nabla f$) - The Compass, In AI
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, laplacian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, change-of-variables, convexity, course-math-for-ai, laplacian, optimization-basics, qat

## Entity: hilbert-banach-spaces
- Title: Hilbert and Banach Spaces
- Category: Fundamentals
- Language: en
- Key Concepts: Uniform boundedness principle (Banach-Steinhaus), Direct-sum decomposition theorem., 2. Banach space, RKHS, Unitary:, unique closest point, 9. RKHS and the kernel trick, Compact:, Corollary., 5. Orthonormal bases, 3. Hilbert space, Hahn-Banach theorem, Reflexivity., Sobolev spaces, Self-adjoint:
- References: functional-analysis, gaussian-processes, kernel-methods-rkhs, math/lp-spaces, math/spectral-theory-operators, quantum-math, sobolev-spaces
- Backlinks: course-math-for-ai, fixed-point-theorems, math/functional-analysis, quantum-math

## Entity: calculus-integration
- Title: Integration and the Fundamental Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: Substitution (u-substitution), A. Probability and AI, 1. The Definite Integral (Riemann Sum), Lebesgue Integration, B. Physics: Work and Energy, Intuition, Antiderivative, 3. Techniques of Integration, Part 1, Probability Density Function (PDF), 2. The Fundamental Theorem of Calculus (FTC), 5. Beyond Riemann: Lebesgue Integration, Integration, Integration by Parts, Related Topics
- References: measure-theory, taylor-series
- Backlinks: neural-radiance-fields-math

## Entity: lln-clt
- Title: LLN and CLT: The Pillars of Statistics
- Category: Fundamentals
- Language: en
- Key Concepts: Strong LLN, Lognormal, Error Modeling, LLN and CLT: Why Probability Works, Finance, Intuition: The Casino's Edge, Central Limit Theorem (CLT), Visualization: Convergence to Normal, Normal Distribution, Power Laws, 3. Why the CLT is the "Magic" of the Universe, $n \geq 30$, sum, finite variance, 4. Limitations and "Fat Tails"
- References: black-scholes, finance/black-swan-scenarios, finance/monte-carlo-method
- Backlinks: combinatorics-induction, course-math-for-ai, delta-method, discrete-random-variables, fundamental-inequalities, law-iterated-logarithm, probability-distributions, sequences-series-convergence

## Entity: laplacian
- Title: Laplacian Operator
- Category: Fundamentals
- Language: en
- Key Concepts: Laplace Equation, Trace, Diffusion Models, The Discrete [[spectral-graph-theory|Laplacian]] (Graphs), B. Curvature and Energy, Harmonic Functions, 4. Relationship to the Hessian, Graph Laplacian, equilibrium, diffusion, and smoothness, A. The Diffusion Engine, Spectral Bias in Neural Networks, Physics-Informed Neural Networks (PINNs), into, 3. Role in Modern AI, Heat Equation
- References: diffusion-models, eigenvalues-eigenvectors, finance/shannon-entropy, gradient-hessian-jacobian, graph-neural-networks, math/spectral-theory-operators, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: course-math-for-ai, equivariant-diffusion-models, gff, gradient-hessian-jacobian, operator-semigroups, schwartz-distributions

## Entity: linear-programming
- Title: Linear Programming and Duality
- Category: Fundamentals
- Language: en
- Key Concepts: B. Portfolio Optimization, 4. Why it Matters in AI and Finance, Convex Polytope, Linear Programming: The Science of Resource Allocation, Primal, 3. Duality: The Hidden Logic, Intuition, Shadow Prices, 2. The Simplex Method, Linear Objective Function, Dual, A. Optimal Transport, Strong Duality Theorem, Visualization: The Feasible Region, Linear Equality and Inequality Constraints
- References: convex-optimization-trading, lagrange-multipliers, optimal-transport
- Backlinks: course-math-for-ai

## Entity: linear-spaces-basis
- Title: Linear Spaces, Basis, and Dimension
- Category: Fundamentals
- Language: en
- Key Concepts: Linear Spaces, Basis, and Dimension: The Scaffold of Algebra, Rank, 1. Defining a Linear Space ($V$), Linear Combination, Dimension, Uniqueness, Subspace, PCA, Fourier Transforms, Existence of Zero, Span, both, Visualization: Basis and Span, Commutativity, 2. Linear Independence and Span
- References: eigenvalues-eigenvectors, quantum-entanglement, quantum-information-entropy, tensor-calculus
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, linear-systems-gauss, taylor-series

## Entity: linear-systems-gauss
- Title: Linear Systems and Gaussian Elimination
- Category: Fundamentals
- Language: en
- Key Concepts: Iterative Methods, Linear Systems and Gaussian Elimination: The Algorithm of Algebra, Rank, Forward Elimination, 2. Gaussian Elimination, Gaussian Elimination, 1. Matrix Representation, No Solution (Inconsistent), A. Computer Graphics, 4. Why it Matters in the Digital Age, The Process:, One Unique Solution, Free Variables, C. Large Language Models (LLMs), Back Substitution
- References: convex-optimization, eigenvalues-eigenvectors, linear-spaces-basis
- Backlinks: course-math-for-ai

## Entity: manifold
- Title: Manifold
- Category: Fundamentals
- Language: en
- Key Concepts: Transition Maps, [[manifold-learning|Manifold]]: The Geometry of Data and Spacetime, [[manifold-learning|Manifold]] Hypothesis, Curvature, 3. Riemannian Manifolds: Measuring Distance, Atlas, 1. The Intuition: Atlas and Charts, Geodesics, 2. The Manifold Hypothesis in AI, Differentiable Manifold, Application: Riemannian Optimization, Metric Tensor, Neural Networks as Coordinate Seekers, Riemannian Manifold, Charts
- References: complex-manifolds, convex-optimization, general-relativity, manifold-learning, math/differential-geometry, math/topology-basics, symplectic-geometry, variational-autoencoders
- Backlinks: course-math-for-ai, information-geometry-finance

## Entity: martingale
- Title: Martingale
- Category: Fundamentals
- Language: en
- Key Concepts: Risk-Neutral Valuation, Visualization: The Expectations, Integrability, A. The Optional Stopping Theorem, Adaptation, Martingale, Submartingale, The Fair Property, Risk-Neutral Pricing, Martingale: The Math of a Fair Game, B. Doob-Meyer Decomposition, Convergence of Algorithms, In Finance, Martingale Optimal Transport (MOT), 4. Why Tier-1 Quants Care
- References: brownian-motion, feller-processes, finance/shannon-entropy, martingale-optimal-transport, risk-neutral-valuation
- Backlinks: course-math-for-ai, martingale-optimal-transport, measure-theory

## Entity: measure-theory
- Title: Measure Theory Basics
- Category: Fundamentals
- Language: en
- Key Concepts: A. Sigma-Algebras ($\mathcal{F}$), Expected Shortfall (ES), B. Fatou's Lemma and Monotone Convergence, 3. Crucial Theorems for AI and Finance, Continuous-time Martingales, Measure Theory Basics: The Foundation of Probability, Non-negativity, Countable Additivity, 1. What is a Measure ($\mu$)?, Radon-Nikodym Derivative, 2. Key Concepts, Likelihood Ratio, In Finance, B. The Lebesgue Integral, 4. Why Tier-1 Quants Care
- References: frtb-es, martingale, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: axiomatic-probability, bayesian-inference, calculus-integration, continuous-random-variables, course-math-for-ai, dirichlet-forms, markov-chebyshev

## Entity: metric-spaces
- Title: Metric Spaces and Topology
- Category: Fundamentals
- Language: en
- Key Concepts: Euclidean ($L_2$), Metric Spaces and Topology: The Fabric of Continuity, 1. What is a Metric?, [[manifold-learning|Manifold]] Learning, Metric Space, Manhattan ($L_1$), [[manifold-learning|Manifold]], 2. Topology: Geometry without Measuring, Identity of Indiscernibles, Robustness, Symmetry, Non-negativity, B. Completeness, Topology, A. Compactness
- References: ai-theory/adversarial-examples, lending-mechanics, manifold-learning, optimal-transport

## Entity: multivariable-calculus
- Title: Multivariable Calculus: Jacobians and Hessians
- Category: Fundamentals
- Language: en
- Key Concepts: Local Maximum, Matrix Multiplication, 5. The Chain Rule in Higher Dimensions, 3. The Hessian Matrix ($\mathbf{H}$), Curvature, Multivariable Calculus, Linear Approximation, AI Application, PyTorch, Delta, 1. The Gradient ($\nabla f$), Jacobian, steepest ascent, [[automatic-differentiation|Backpropagation]], Hessian
- References: automatic-differentiation, black-scholes, convex-optimization, math/analysis-geometry/information-geometry, math/spectral-theory-operators, taylor-series
- Backlinks: course-math-for-ai, lagrange-multipliers, taylor-series

## Entity: number-theory-basics
- Title: Number Theory and Cryptography
- Category: Fundamentals
- Language: en
- Key Concepts: 5. Hash Functions and Collisions, Euclidean Algorithm, Elliptic Curve Cryptography (ECC), Diffie-Hellman Key Exchange, Public Key Cryptography, Modular Inverses, Collision Resistance, 2. Modular Arithmetic (Clock Math), Number Theory: Modular Arithmetic and the Foundation of Crypto, Visualization: Modular Cycles, Cryptographic Hash Functions, Number Theory, The Discrete Logarithm Problem, Modulus, Extended Version
- References: cedefi-gateway-architecture, cedefi-mechanics, combinatorics-induction

## Entity: taylor-series
- Title: Taylor Series and Approximation
- Category: Fundamentals
- Language: en
- Key Concepts: Taylor Series: The Art of Polynomial Approximation, A. Small Angle Approximation, 4. Why it Matters in Physics and AI, Curvature, 1st Order (Linear), Exponential, 0th Order, Geometric, 1. The Taylor Formula, 2nd Order (Quadratic), Maclaurin Series, Taylor Series, Second-order Taylor expansion, 3. Important Expansions to Memorize, Sine
- References: black-scholes, linear-spaces-basis, multivariable-calculus
- Backlinks: calculus-integration, course-math-for-ai, multivariable-calculus, sequences-series-convergence

## Entity: ads-cft-deep
- Title: AdS/CFT Correspondence
- Category: Holography
- Language: en
- Key Concepts: AdS/CFT Correspondence: The Holographic Principle, 2. The Ryu-Takayanagi Formula: Geometry is Information, Spacetime and Entanglement, Computational Complexity, 3. ER = EPR: The Wormhole Paradox, Strange Metals, Holographic Principle, Juan Maldacena, Quark-Gluon Plasma, AdS/CFT correspondence, gravity is not a fundamental force, Visualization: The AdS Tin Can, Symmetric under Scaling, Boundary, 4. Why Tier-1 Scientists Care
- References: black-hole-thermodynamics, conformal-field-theory, quantum-information-entropy
- Backlinks: quantum-information-entropy

## Entity: agentic-patterns
- Title: Agentic Design Patterns
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Implementation: Simple Reflection Pattern, 1. Reflection (Self-Correction), ReAct, Mathematical Perspective: Iterative Refinement, New Standard, 3. Tool Use (Reasoning + Acting), Frameworks, Related Topics, 4. Multi-Agent Collaboration, What Is It, Agentic Design Patterns, Why, Visualization: Single Pass vs. Agentic, Core Patterns, Workflow
- References: agents, llm, mcp, tool-use

## Entity: preference-optimization
- Title: Beyond DPO: KTO & IPO
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Beyond [[dpo]]: KTO and IPO, Human-Centric, Foundation, The Key Idea, Advantages, Data Efficiency, overfitting problem, Unpaired (Binary), Diversity, 2. IPO: Identity Preference Optimization, Which One to Choose?, IPO, 1. KTO: Kahneman-Tversky Optimization, Data Requirement, Direct Preference Optimization ([[dpo]])
- References: dpo, fine-tuning, rlhf
- Backlinks: llm

## Entity: chain-of-thought
- Title: Chain-of-Thought Reasoning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Extended thinking:, search-time amortisation of a fixed information budget, Code generation:, Helps:, Tree of Thoughts (ToT):, Faithful CoT:, Program of Thought (PoT):, [[cantor-diagonal|Cantor's diagonal argument]], Overview, How It Works, Chain-of-Thought Reasoning, Self-consistency:, Scratchpad [[fine-tuning]]:, Process reward models (PRMs):, [[kolmogorov-complexity|Kolmogorov complexity]]
- References: fine-tuning, kolmogorov-complexity, llm, math/cantor-diagonal, math/godel-incompleteness, mcp, mechanistic-interpretability, rag, rlhf, speculative-decoding, tool-use, transformer-architecture
- Backlinks: agents, ai-theory/in-context-learning, evaluation-llms, math/cantor-diagonal, math/godel-incompleteness, mcp, meta-learning, prm, reasoning-models, rlhf, test-time-scaling, tool-use

## Entity: context-length
- Title: Context Length Extension
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The "Lost in the Middle" Problem, RoPE: Rotary Position Embedding, RoPE Scaling, Claude 3, Gemini 1.5, only on relative position, Llama 3, Current Landscape, GPT-4, Context Length Extension, middle, Sliding Window Attention, ALiBi: [[attention-mechanisms|Attention]] with Linear Biases, requires no retraining to extend context, Retrieval-Augmented Context
- References: attention-mechanisms, fine-tuning, inference-serving, llm, rag, speculative-decoding, state-space-models, transformer-architecture, vector-databases

## Entity: continuous-batching
- Title: Continuous Batching
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Two Phases of Generation, chunked prefill, Why It Matters, Decode Phase, Related Topics, The Problem with Static Batching, Insertion, Visualization: Static vs. Continuous, Operate at the iteration (token) level, not the request level, padded, Prefill Phase, Result, Eviction, The Orca Breakthrough, batch
- References: hardware-io-attention, inference-serving, llm, paged-attention
- Backlinks: speculative-decoding

## Entity: curriculum-learning
- Title: Curriculum Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Better Generalization, Reasoning, Applications in LLMs, Types of Curricula, Model-based, Curriculum Learning, Coding, Context Length, 1. Predefined Curriculum, 2. Automated Curriculum Learning (ACL), Why Ordering Matters, Mathematical Formulation, Zone of Proximal Development, Heuristics, Competence Scaling
- References: fine-tuning, neural-scaling-laws, training-dynamics

## Entity: dl-compilers
- Title: Deep Learning Compilers
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Why It Matters, Operator Fusion, Deep Learning Compilers and Kernel Fusion, Related Topics, 2. Triton, Visualization: The Compilation Pipeline, The Problem: Kernel Launch Overhead and Memory Bound, Deep Learning Compilers, The Solution: Operator Fusion, 1. XLA (Accelerated Linear Algebra), Technologies: XLA, Triton, and `torch.compile`, 3. `torch.compile` (PyTorch 2.0)
- References: flash-attention, gpu-architecture, hardware-io-attention, inference-serving, moe-routing
- Backlinks: flash-attention, gpu-architecture

## Entity: dpo
- Title: Direct Preference Optimization (DPO)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Limitations, Sampling, Direct Preference Optimization (DPO), Reward Model, Reference Model Dependency, Compute, Likelihood Over-optimization, [[rlhf]], Implementation with `trl`, preferred, DPO Loss Function, Stability, Comparison: DPO vs. [[rlhf]], The Mathematical Breakthrough, Related Topics
- References: agents, finance/shannon-entropy, fine-tuning, llm, rlhf
- Backlinks: language-models/safety/rlhf-dpo, llm, preference-optimization, preference-optimization-variants, rlhf, self-rewarding

## Entity: distributed-training
- Title: Distributed Training
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Solution, Weights, 4. Why Tier-1 Engineers care, Distributed Training, ZeRO, ZeRO-1, ZeRO-2, Check-pointing, 3. Communication Collectives, ZeRO-3, Efficiency, Modern Solution, DDP (Distributed Data Parallel), 2. ZeRO: Zero Redundancy Optimizer, All-Gather
- References: fine-tuning, flash-attention, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: fsdp, hardware-io-attention, model-parallelism, tensor-decompositions

## Entity: federated-learning
- Title: Federated Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Federated Averaging (FedAvg), 2. Communication Efficiency, 3. System Heterogeneity, Challenges in Federated Learning, Smart Keyboards, Finance, Visualization: Convergence Delay, Aggregation, Local Training, Upload, Broadcast, Applications, Mobile Health, The Core Algorithm: FedAvg, [[quantization]]
- References: differential-privacy, fine-tuning, llm, quantization
- Backlinks: differential-privacy

## Entity: flash-attention
- Title: FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Claude 3, B. Online Softmax, 3. Results: Scaling to 1M Tokens, Impact, A. Tiling (SRAM Management), 16 GB, C. Recomputation (Gradient Checkpointing), Gemini 1.5, Memory IO, IO-Aware, Speed, Online Softmax, SRAM, 2. The Solution: Tiling and Recomputation, Streaming Multiprocessors (SMs)
- References: attention-mechanisms, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, distributed-training, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, language-models/mamba-ssm, paged-attention, rope-scaling

## Entity: fsdp
- Title: Fully Sharded Data Parallel (FSDP)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Weights, Discard, Max Model Size, ZeRO-3, Backward Pass, Virtually unlimited, Visualization: Memory per GPU, Comparison: DDP vs. FSDP, All-Gather, Scales down, Communication Efficiency, Fully Sharded Data Parallel (FSDP), How FSDP Works, Memory usage, Forward Pass
- References: distributed-training, fine-tuning, inference-serving, model-parallelism
- Backlinks: model-parallelism

## Entity: gpu-architecture
- Title: GPU Architecture for Deep Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 1. Streaming Multiprocessors (SMs), Visualization: Matrix Multiplication, single clock cycle, must be multiples of 8, 16, or 32, Alignment, L1 Cache / Shared Memory, Mixed Precision, 4. The Memory Hierarchy, Warp, [[flash-attention|HBM]] (Global Memory), Tensor Cores, Registers, L2 Cache, Streaming Multiprocessors (SMs), 2. Threads and Warps
- References: attention-mechanisms, dl-compilers, flash-attention, hardware-io-attention, inference-serving, modern-quantization
- Backlinks: distributed-training, dl-compilers, flash-attention, modern-quantization

## Entity: hardware-io-attention
- Title: Hardware IO and FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Hardware IO and the Physics of FlashAttention, IO-bound, Communication-Avoiding, Speed, The Memory Hierarchy of a [[inference-serving|GPU]], The "Memory Wall" Problem, Why It Matters for the Future, [[flash-attention|HBM]] (High Bandwidth Memory), 90% of its time waiting, FlashAttention: IO-Awareness, entirely within SRAM, Visualization: Memory Speed vs. Access, Related Topics, [[flash-attention|SRAM]] (Static RAM), Tiling
- References: attention-mechanisms, distributed-training, flash-attention, inference-serving
- Backlinks: continuous-batching, distributed-training, dl-compilers, flash-attention, gpu-architecture, paged-attention

## Entity: agents
- Title: LLM Agents
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Reflection and Debate, Simulation and execution sandboxes:, Max steps:, Planning and Tree of Thoughts, Tool-use [[fine-tuning]]:, Code generation:, Critique:, Action parsing:, Hallucinated Tool Calls, Reasoning, Pseudocode:, Consensus:, The Agent Loop, Propose:, Overview
- References: chain-of-thought, fine-tuning, llm, mcp, rag, reinforcement-learning, tool-use
- Backlinks: agentic-patterns, dpo, inference-serving, prompt-engineering, vector-databases

## Entity: evaluation-llms
- Title: LLM Evaluation
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Multi-Turn Preference Evaluation, Membership inference, orthogonal evaluation across diverse benchmarks never used for training, Exact matching, Holistic Evaluation: HELM, Calibration, pass@k, Compare to human performance., Chatbot Arena, Perplexity: Information-Theoretic Foundation, Contamination: Structural Problem, Genuine emergence, Run A/B tests with real users., Best Practices for Honest Evaluation, HELM
- References: chain-of-thought, llm, rlhf
- Backlinks: ai-theory/knowledge-distillation, bayesian-deep-learning, prompt-engineering

## Entity: fine-tuning
- Title: LLM Fine-Tuning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: When to Fine-Tune, Parameter reduction:, Epochs, LoRA rank, only on response tokens, Fine-tune if:, Prompt Tuning, catastrophic forgetting, LoRA: Low-Rank Adaptation, Supervised Fine-Tuning (SFT), Data, [[rlhf]], Prefix Tuning, Instruction Tuning vs. [[rlhf]], Instruction tuning
- References: attention-mechanisms, convex-optimization, inference-serving, quantization, rag, rlhf, transformer-architecture
- Backlinks: adalora, agents, ai-theory/in-context-learning, ai-theory/knowledge-distillation, chain-of-thought, code-models, constitutional-ai, context-length, contrastive-learning, curriculum-learning, distributed-training, dora, dpo, effective-field-theory, federated-learning, fsdp, language-models/safety/rlhf-dpo, llm, llm-financial-analysis, lora-peft, mixture-of-experts, ml-options-pricing, model-merging, modern-quantization, nlp-financial-analysis, positional-encodings, preference-optimization, prompt-engineering, qat, qlora, quantization, rag, rlhf, self-rewarding, slm, synthetic-data-alignment, tool-use, training-dynamics, weight-averaging

## Entity: inference-serving
- Title: LLM Inference Serving
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 3-4× throughput, Key metrics and SLO, vLLM, Disaggregation, Key benefits:, Dynamic index remapping, Text Generation Inference, Prefix sharing, Fragmentation elimination, Flash [[attention-mechanisms|Attention]] for long contexts, Speculative decoding, GPU utilization, Continuous batching: asynchronous pipeline, Dynamic batch size, Related topics
- References: agents, attention-mechanisms, flash-attention, llm, mixture-of-experts, quantization, speculative-decoding, transformer-architecture
- Backlinks: attention-mechanisms, automatic-differentiation, context-length, continuous-batching, distributed-training, dl-compilers, finance/monte-carlo-method, finance/xva, fine-tuning, flash-attention, fsdp, gpu-architecture, hardware-io-attention, language-models/mamba-ssm, llm-financial-analysis, lora-peft, mla, model-merging, model-parallelism, modern-quantization, paged-attention, quantization, queuing-theory, rope-scaling, slm, speculative-decoding, temporal-fusion-transformer, tokenization, vector-databases, volatility-modulated-spectral-surface

## Entity: lora-peft
- Title: LoRA and PEFT
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Advantages of LoRA, Prompt Tuning, IA3, low intrinsic rank, Parameter-Efficient [[fine-tuning]] (PEFT), Related Topics, Portability, Prefix Tuning, Visualization: Rank vs. Parameters, VRAM Savings, LoRA and Parameter-Efficient [[fine-tuning]] (PEFT), The Mathematical Intuition, Zero Inference Latency, LoRA, Other PEFT Techniques
- References: fine-tuning, inference-serving, quantization, tensor-decompositions, transformer-architecture

## Entity: mcp
- Title: MCP (Model Context Protocol)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Resources, Multi-agent MCP:, capability-based access control, quantitative finance workflows, Enterprise knowledge access:, Architecture, Market-data feeds, Implementation, Overview, stdio:, Tools, Internal valuation memos and risk dashboards, Real-world MCP servers (community ecosystem):, HTTP + SSE (Server-Sent Events):, Key Trade-offs
- References: chain-of-thought, llm, llm-financial-analysis, rag, slm, speculative-decoding, tool-use
- Backlinks: agentic-patterns, agents, chain-of-thought, tool-use

## Entity: model-parallelism
- Title: Model Parallelism: Tensor and Pipeline
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Problem: Pipeline Bubbles, Model Parallelism: Tensor vs. Pipeline, Pipeline Parallelism (PP), Hardware, Split unit, Efficiency, Pros, Visualization: The Pipeline Bubble, Communication, 1. Tensor Parallelism (TP), Tensor Parallelism (TP), 2. Pipeline Parallelism (PP), Model Parallelism, 3D Parallelism, Cons
- References: attention-mechanisms, distributed-training, fsdp, inference-serving, transformer-architecture
- Backlinks: fsdp

## Entity: quantization
- Title: Model Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Activation-Aware Weight Quantization: AWQ, Weight quantization, symmetric, Q5_K_M, Post-Training Quantization: GPTQ, GGUF Format and Local Inference, signal-to-noise ratio, Weight vs. Activation Quantization, Integration with Inference Pipelines, Accuracy Trade-offs, Memory Footprint Calculations, Absmax Quantization, NF4: 4-Bit Normal Float, NF4, activation scales
- References: attention-mechanisms, fine-tuning, inference-serving, llm, mixture-of-experts, neural-scaling-laws, speculative-decoding, transformer-architecture
- Backlinks: ai-theory/knowledge-distillation, bitnet, conformal-field-theory, federated-learning, fine-tuning, hamiltonian-mechanics, homological-algebra, inference-serving, linear-algebra, lora-peft, modern-quantization, pauli-exclusion-quantization, qat, qft-basic, qlora, quantization-error-math, quantization-ptq-information, research/mla-financial-reasoning, slm, small-ball-probabilities, vector-databases

## Entity: modern-quantization
- Title: Modern Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 4. AWQ: Activation-aware Quantization, Inversion Problem, 3. GPTQ: Post-Training Quantization (PTQ), Visualization: Distribution-Aware Binning, Training, Hopper (H100), bitsandbytes, FP8, 1% of weights, [[quantization]] Error, Hessian, Modern [[quantization]]: NF4, GPTQ, and AWQ, Normal (Gaussian) Distribution, 2. NormalFloat4 (NF4): Quantization for All, Related Topics
- References: fine-tuning, gpu-architecture, inference-serving, quantization
- Backlinks: deep-lob, gpu-architecture, qat, tensor-decompositions

## Entity: orm-prm
- Title: ORM vs PRM: Preference Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Comparison: Accuracy on Complex Tasks, Visualization: Reward Density, The Pros, The Signal, final answer, False Positives, PRM, 1. Outcome Reward Models (ORM), Implementation in [[rlhf]], Excellent, Related Topics, The Cons, ORM vs PRM: Two Ways to Reward Reasoning, Yes, 2. Process Reward Models (PRM)
- References: llm, mcts, prm, reasoning-models, rlhf

## Entity: paged-attention
- Title: PagedAttention and KV Cache
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Visualization: Paged Memory Allocation, vLLM, Unpredictability, Fragmentation, Logical vs. Physical, The Solution: Operating System Inspiration, external fragmentation, Contiguous Allocation, 1. Near-Zero Waste, 2x to 4x, share the same physical blocks, Copy-on-Write (CoW), 2. Prompt Sharing, Block Tables, PagedAttention and KV Cache Management
- References: attention-mechanisms, flash-attention, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, continuous-batching

## Entity: prompt-engineering
- Title: Prompt Engineering
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Chain-of-Thought Prompting, Tree of Thoughts and Search, System Prompts and Jailbreaking, Zero-shot and Few-shot Learning, Prompt Sensitivity and Optimization, Limitations and Trade-offs, Reasoning and Acting (ReAct), Assistant turn, prompt optimization, DSPy, Structured Output and Grammar Constraints, User turn, System message, Self-consistency, APE
- References: agents, evaluation-llms, fine-tuning, llm, meta-learning, rlhf, tool-use
- Backlinks: ai-theory/in-context-learning

## Entity: qat
- Title: Quantization Aware Training (QAT)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Forward Pass, The Core Problem, 3. LSQ: Learned Step Size Quantization, 4. QAT vs. PTQ: When to use which?, Related Topics, PTQ (Post-Training), QAT (Aware Training), 1. The Simulated [[quantization]] (Fake Quant), [[quantization]] Aware Training (QAT), Straight-Through Estimator (STE), Visualization: STE Gradient Flow, Fake [[quantization]], 2-bit or 3-bit, 2. Straight-Through Estimator (STE), 5. Modern Variant: QLoRA
- References: automatic-differentiation, fine-tuning, gradient-hessian-jacobian, modern-quantization, quantization

## Entity: rag
- Title: RAG (Retrieval-Augmented Generation)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: GraphRAG: The Next Frontier, Reciprocal Rank Fusion (RRF), Overview, Retrieval (Hybrid Search), RAG (Retrieval-Augmented Generation), Keyword Search, Context Precision, Pre-Retrieval (Query Transformation), The Advanced Pipeline, Answer Relevance, Vector Search, Evaluation: RAGAS, Post-Retrieval (Reranking), HyDE (Hypothetical Document Embeddings), Cross-Encoder Reranker
- References: embedding-models, fine-tuning, llm, llm-financial-analysis, tool-use, vector-databases
- Backlinks: about, agents, chain-of-thought, context-length, embedding-models, fine-tuning, llm-financial-analysis, mcp, naive-bayes, nlp-financial-analysis, projects/llm-wiki, research/mla-financial-reasoning, slm, tool-use, vector-databases

## Entity: self-rewarding
- Title: Self-Rewarding Models
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Echo Chambers, Visualization: Performance Scaling, Reward Hacking, Risks and Limitations, Why It Works, Llama 3, Data Curation, Real-World Examples, Evaluation is easier than Generation, [[dpo]]/[[fine-tuning]], teacher, DeepSeek-R1, Response Generation, Related Topics, Self-Evaluation
- References: dpo, fine-tuning, prm, reasoning-models

## Entity: speculative-decoding
- Title: Speculative Decoding
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 2. EAGLE (Extrapolation Algorithm for Greater Language-model Efficiency), Code/Prose, Mathematical Reasoning, Advanced Variations, The Workflow, Accepting, lossless, Verifying, memory-bound, Drafting, Mathematical Foundation: Rejection Sampling, Medusa, Speculative Decoding, 3. Self-Speculative Decoding, Acceptance Rate
- References: continuous-batching, inference-serving, kv-cache-compression, llm, multi-token-prediction, prm
- Backlinks: chain-of-thought, context-length, inference-serving, mcp, multi-token-prediction, quantization, tool-use

## Entity: tokenization
- Title: Tokenization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Words, Common Algorithms, Artifacts and Challenges, Characters, 1. Byte-Pair Encoding (BPE), Why Not Characters or Words?, Tokenization, Byte-level models, Sub-word, likelihood ratio, Numbers, Byte-level BPE, 2. WordPiece, Fertility, Vocabulary Size vs. Perplexity
- References: attention-mechanisms, inference-serving, transformer-architecture

## Entity: tool-use
- Title: Tool Use / Function Calling
- Category: LLM Infrastructure
- Language: en
- Key Concepts: [[mcp]] (Model Context Protocol), Code interpreters:, Destructive tools, Multi-agent tool delegation, Tool Safety Architecture, Overview, How It Works, Step 2 — Model decision., Key Trade-offs, Step 4 — Result injection., Tool Use / Function Calling, Latency:, Calendar and email agents:, Forced tool use, Does not solve:
- References: chain-of-thought, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, mcp, rag, reinforcement-learning, speculative-decoding
- Backlinks: agentic-patterns, agents, chain-of-thought, mcp, prompt-engineering, rag, research/mla-financial-reasoning

## Entity: vector-databases
- Title: Vector Databases
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Approximate Nearest Neighbor (ANN), Chroma, Advantages, Architecture, Context, IndexIVFFlat, Construction, Reconstruction loss, Trade-offs, Malkov & Yashunin, 2016, Storage, IndexFlatL2, Pre-filter, Retrieval, Pinecone
- References: agents, embedding-models, inference-serving, llm, quantization, rag, transformer-architecture
- Backlinks: context-length, matryoshka-embeddings, rag

## Entity: weight-averaging
- Title: Weight Averaging and SWA
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Visualization: Converging to the Center, sharp minimum, Phase 1, flatness, Weight Averaging and Stochastic Weight Averaging (SWA), Polyak-Ruppert Averaging (EMA), flat minima, Why It Works: The Flatness Hypothesis, Related Topics, Stochastic Weight Averaging (SWA), Exponential Moving Average (EMA), Averaging, The Problem: Sharp Minima, Phase 2
- References: fine-tuning, model-merging, training-dynamics

## Entity: preference-optimization-variants
- Title: Advanced Preference Optimization
- Category: Language Models
- Language: en
- Key Concepts: 1. KTO (Kahneman-Tversky Optimization), PPO, Related Topics, Advanced Preference Optimization, KTO, unpaired data, 3. ORM and PRM Integration, Beyond [[dpo]], Outcome-based, Comparison of Methods, IPO, Process-based, Step-wise DPO, 2. IPO (Identity Preference Optimization), ORM (Outcome Reward Model)
- References: dpo, prm, reasoning-models, rlhf
- Backlinks: synthetic-data-alignment

## Entity: language-models/safety/rlhf-dpo
- Title: Alignment: RLHF and DPO
- Category: Language Models
- Language: en
- Key Concepts: SFT (Supervised [[fine-tuning]]):, [[rlhf]] (Reinforcement Learning from Human Feedback), Related Topics, Reward Model (RM), Alignment: [[rlhf]] and [[dpo]], [[rlhf]] vs. DPO, PPO (Proximal Policy Optimization):, Reward Modeling:, Safety and Constitutional AI, [[dpo]] (Direct Preference Optimization), Constitutional AI, Drawbacks:, Compute, Complexity, Stability
- References: constitutional-ai, dpo, finance/shannon-entropy, fine-tuning, llm, math/analysis-geometry/information-geometry, mechanistic-interpretability, rlhf

## Entity: bitnet
- Title: BitNet & 1.58-bit LLMs
- Category: Language Models
- Language: en
- Key Concepts: Related Topics, Throughput, Ternary Weight [[quantization]], Activation Quantization, BitNet & 1.58-bit LLMs (Ternary [[quantization]]), BitLinear, What Is It, Visualization, Training Complexity, Energy Efficiency, Small Model Gap, Benefits, Trade-offs, How It Works, Memory Footprint
- References: llm, mixture-of-experts, neural-scaling-laws, quantization, reasoning-models, slm, transformer-architecture

## Entity: code-models
- Title: Code Language Models
- Category: Language Models
- Language: en
- Key Concepts: Execution feedback objective (RLEF), Data composition, Deduplication, Architecture, RLEF, Benchmark overfitting, Long-range dependencies, General pre-training, Mathematical Framework, Repository-level understanding, Limitations, FIM training, Tokenization sensitivity, Rare languages and frameworks, Multi-file awareness
- References: attention-mechanisms, fine-tuning, llm, mixture-of-experts, pac-learning, slm, transformer-architecture
- Backlinks: multi-token-prediction

## Entity: constitutional-ai
- Title: Constitutional AI and RLAIF
- Category: Language Models
- Language: en
- Key Concepts: Feedback Model, Subjective, Expensive, Phase 2: Reinforcement Learning (RLAIF), RLAIF, Safety-Efficiency Frontier, Transparency, 4. Strategic Benefits, Phase 1: Supervised Learning (Critique and Revision), 2. The CAI Process, [[rlhf]], Generation, Scalability, Constitutional AI and RLAIF: Self-Aligning Systems, [[fine-tuning]]
- References: fine-tuning, llm, mechanistic-interpretability, reinforcement-learning, rlhf
- Backlinks: language-models/safety/rlhf-dpo, mechanistic-interpretability

## Entity: embedding-models
- Title: Embedding Models
- Category: Language Models
- Language: en
- Key Concepts: Cross-encoder-mined negatives, Asymmetric architectures, Architecture, Embedding Models, InfoNCE / NT-Xent loss, Contrastive loss on triplets, bidirectional [[transformer-architecture|transformer]] encoder, In-batch hard negatives, Out-of-domain generalization, Multi-vector representations, Clustering, Mathematical Framework, Limitations, Semantic vs. factual similarity, Training Paradigm
- References: attention-mechanisms, finance/shannon-entropy, llm, mixture-of-experts, rag, transformer-architecture, vlm
- Backlinks: contrastive-learning, llm, matryoshka-embeddings, rag, slm, vector-databases, vlm

## Entity: llm
- Title: Large Language Models (LLMs)
- Category: Language Models
- Language: en
- Key Concepts: Masked multi-head self-[[attention-mechanisms|attention]], Residual connections, Architecture, Instruction following, Large Language Models (LLMs), Knowledge, Hallucination, Reasoning gaps, 3. Alignment via [[rlhf]] or [[dpo]]., Mathematical Framework, Limitations, Pre-training objective, Training Paradigm, Rotary Position Embedding (RoPE), Static knowledge
- References: attention-mechanisms, dpo, embedding-models, fine-tuning, mechanistic-interpretability, mixture-of-experts, model-merging, neural-scaling-laws, preference-optimization, prm, reasoning-models, rlhf, slm, transformer-architecture
- Backlinks: about, agentic-patterns, agents, attention-mechanisms, bert, bitnet, chain-of-thought, code-models, constitutional-ai, context-length, continuous-batching, distributed-training, dpo, embedding-models, evaluation-llms, f-divergences, federated-learning, flash-attention, generative-models, gnn-credit-risk, gpt-architecture, inference-serving, language-models/safety/rlhf-dpo, llm-financial-analysis, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/cantor-diagonal, math/godel-incompleteness, matryoshka-embeddings, mcp, mechanism-design, meta-learning, mixture-of-experts, ml-options-pricing, model-merging, multi-token-prediction, naive-bayes, nlp-financial-analysis, orm-prm, paged-attention, positional-encodings, ppo, projects/llm-wiki, prompt-engineering, quantization, rag, reasoning-models, rlhf, slm, sparse-autoencoders, speculative-decoding, state-space-models, superposition, test-time-scaling, tool-use, vector-databases, vlm

## Entity: matryoshka-embeddings
- Title: Matryoshka Embeddings
- Category: Language Models
- Language: en
- Key Concepts: Hierarchical Navigation, Matryoshka Embeddings (MRL), Nested Loss Function, Adaptive Accuracy/Efficiency Trade-off, Related Topics, Use Cases, Storage Savings, Low Latency, No Re-indexing, What Is It, Visualization, Benefits, On-device AI, How It Works, Vector Search
- References: embedding-models, llm, vector-databases, vlm

## Entity: mixture-of-experts
- Title: Mixture of Experts (MoE)
- Category: Language Models
- Language: en
- Key Concepts: Parameter efficiency, Architecture, Capacity factor, Token dropping, Token dropping and inconsistency, Mathematical Framework, Limitations, Mixture of Experts (MoE), Scaling, Expert dropout, Training Paradigm, MoE layer, Gradient flow, [[fine-tuning]] difficulty, Trade-offs vs Other Types
- References: fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, slm, transformer-architecture
- Backlinks: bayesian-nonparametrics, bitnet, code-models, embedding-models, inference-serving, llm, mla, model-merging, moe-routing, quantization, slm, state-space-models, transformer-architecture

## Entity: moe-routing
- Title: MoE Routing and Specialization
- Category: Language Models
- Language: en
- Key Concepts: Mixture of Experts (MoE), 1. Expert Collapse (Winner-Take-All), Solution, experts choose tokens, 3. DeepSeek-V3: Multi-Head Latent [[attention-mechanisms|Attention]] & DeepSeekMoE, 2. Expert Overflow, Advanced Routing Strategies, 2. Expert Choice Routing, Related Topics, Router, MoE Routing and Expert Specialization, Auxiliary Load Balancing Loss, shared experts, Visualization: Token Distribution, 1. Switch [[transformer-architecture|Transformer]] (Top-1)
- References: attention-mechanisms, mixture-of-experts, mla, transformer-architecture
- Backlinks: dl-compilers

## Entity: model-merging
- Title: Model Merging & FrankenMoE
- Category: Language Models
- Language: en
- Key Concepts: Reset, 1. SLERP (Spherical Linear Interpolation), Merging Techniques, Performance, Gate/Router, Merge, Compute, FrankenMoE, FrankenMoE: Creating Sparse Models, Model Merging, Advantages and Limitations, MergeKit, Base Model, Related Topics, Expert Models
- References: fine-tuning, inference-serving, llm, mixture-of-experts
- Backlinks: llm, weight-averaging

## Entity: mla
- Title: Multi-Head Latent Attention (MLA)
- Category: Language Models
- Language: en
- Key Concepts: Why It Matters, Position Part, 2. Expansion, better compression than GQA, latent vector, Visualization: Memory Efficiency, Decoupled Rotary Positional Embeddings, GQA, The Architecture: Low-Rank Compression, Grouped-Query [[attention-mechanisms|Attention]] (GQA), 1. Compression, MLA, Comparison: KV-Cache Per Token, Multi-Head Latent [[attention-mechanisms|Attention]] (MLA), RoPE
- References: attention-mechanisms, inference-serving, mixture-of-experts
- Backlinks: moe-routing, rope-scaling

## Entity: multi-token-prediction
- Title: Multi-Token Prediction
- Category: Language Models
- Language: en
- Key Concepts: The Modified Loss Function, Related Topics, Why It Works, Shared Trunk, Meta AI (2024), Sample Efficiency, Multi-Token Prediction (MTP), The Core Concept, Benefits, Improved Reasoning, Better Long-Term Dependency, $n$ Prediction Heads, Architecture: Shared Trunk and Independent Heads, Inference Speedup
- References: code-models, finance/shannon-entropy, llm, speculative-decoding, training-dynamics, transformer-architecture
- Backlinks: speculative-decoding

## Entity: positional-encodings
- Title: Positional Encodings
- Category: Language Models
- Language: en
- Key Concepts: RoPE: Rotary Position Embedding, Relative Positional Encodings, Absolute Positional Encodings, Positional Encodings, Extrapolation Beyond Training Length, Related Topics, Positional encodings, Learned absolute., Context Extension: YaRN, T5 Relative Bias., Comparison Summary, Sinusoidal (Vaswani et al. 2017)., YaRN, ALiBi (Press et al. 2022)., RoPE
- References: attention-mechanisms, fine-tuning, llm, neural-scaling-laws, transformer-architecture
- Backlinks: nerf, rope-scaling

## Entity: prm
- Title: Process-Based Supervision
- Category: Language Models
- Language: en
- Key Concepts: Search at Inference Time, Process-Based Supervision (PRMs), Related Topics, Process-Based Supervision, PRM, Why PRMs Matter, OpenAI PRM800K, Process Reward Models (PRMs), Outcome-Based Supervision (ORMs), Hallucination Reduction, What Is It, Credit Assignment, The Mathematical Intuition, Real-World Examples, PRM vs. ORM Performance
- References: chain-of-thought, reasoning-models, rlhf
- Backlinks: bayes-theorem, llm, orm-prm, preference-optimization-variants, self-rewarding, speculative-decoding, test-time-scaling

## Entity: reasoning-models
- Title: Reasoning Models
- Category: Language Models
- Language: en
- Key Concepts: Visualization: Inference Scaling, Trade-offs, Reasoning Models (o1/R1 Style), User Experience, Rejection Sampling & Distillation, Latency, The "Aha" Moment, Key Capabilities, Mathematical Framework: GRPO, OpenAI o1, DeepSeek-R1, Chain-of-Thought (CoT), Group Relative Policy Optimization (GRPO), Complex Mathematics, How They Are Trained
- References: chain-of-thought, llm, neural-scaling-laws, rlhf
- Backlinks: bitnet, llm, orm-prm, preference-optimization-variants, prm, self-rewarding, test-time-scaling, type-theory

## Entity: rope-scaling
- Title: RoPE Scaling & YaRN
- Category: Language Models
- Language: en
- Key Concepts: Comparison of Methods, Dimension Sensitivity, FlashAttention-2, RoPE Scaling and Long Context, Techniques, 3. YaRN (Yet another RoPE extensioN), Compute, RoPE Scaling, PagedAttention, 2. NTK-aware Scaling, [[attention-mechanisms|Attention]] Logit Decay, Practical Constraints, Retrieval Accuracy, Memory, base frequency
- References: attention-mechanisms, flash-attention, inference-serving, mla, positional-encodings, transformer-architecture

## Entity: slm
- Title: Small Language Models (SLMs)
- Category: Language Models
- Language: en
- Key Concepts: Curated pre-training data, Sliding Window [[attention-mechanisms|Attention]] (SWA), Reasoning ceiling, Knowledge distillation, Architecture, Domain specialization, Weaker multi-step reasoning, Mathematical Framework, Distillation ceiling, Limitations, Training Paradigm, Latency, Small Language Models (SLMs), Smaller hidden dimensions with more layers vs. fewer layers, Trade-offs vs Other Types
- References: attention-mechanisms, embedding-models, finance/shannon-entropy, fine-tuning, inference-serving, llm, mechanistic-interpretability, mixture-of-experts, neural-scaling-laws, quantization, rag, transformer-architecture
- Backlinks: bitnet, code-models, llm, mcp, mixture-of-experts, synthetic-data-alignment

## Entity: language-models/mamba-ssm
- Title: State Space Models (Mamba)
- Category: Language Models
- Language: en
- Key Concepts: Selectively, The Mamba Innovation: Selection Mechanism, Limitations, The [[transformer-architecture|Transformer]] Bottleneck, Why Mamba Matters, Related Topics, Mamba, Inference Speed:, Hardware-Aware Design:, Selection, The SSM Framework, linear-time complexity, State Space Models and Mamba Architecture, Scalable Context:, State Space Models (SSM)
- References: attention-mechanisms, flash-attention, inference-serving, linear-algebra, time-series, transformer-architecture

## Entity: synthetic-data-alignment
- Title: Synthetic Data & Self-Alignment
- Category: Language Models
- Language: en
- Key Concepts: Alpaca, The Data Bottleneck, Constitutional AI, Generate, Synthetic Data & Self-Alignment, RLAIF, RL Phase, Input/Output Generation, Supervised Phase, Filter, Model Collapse, 3. ReST (Reinforced Self-Training), Task Generation, Seed Tasks, Self-Instruct
- References: fine-tuning, preference-optimization-variants, rlhf, slm

## Entity: test-time-scaling
- Title: Test-Time Scaling
- Category: Language Models
- Language: en
- Key Concepts: Best-of-N (Rejection Sampling), Beam Search, Trade-offs, How It Works, Efficiency, 2. Verification and Reward Models, [[prm|Process Reward Models (PRM)]], Latency, Reasoning Breakthroughs, Benefits, Tree Search (MCTS), 3. Verification-Guided Search, 1. Search and Exploration, Look-ahead Search, Error Correction
- References: chain-of-thought, llm, neural-scaling-laws, prm, reasoning-models

## Entity: training-dynamics
- Title: Training Dynamics
- Category: Language Models
- Language: en
- Key Concepts: [[attention-mechanisms|Attention]] [[shannon-entropy|entropy]], Cosine Decay, barriers, proxy model hyperparameter search, Gradient Norm Evolution, Learning Rate Schedule, Linear mode connectivity, WSD (Warmup-Stable-Decay), memorises, Layer-Wise Learning Rate Decay, Warmup, Monitoring and Diagnostics, Early training, Saddle points, Loss spikes
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, finance/shannon-entropy, fine-tuning, neural-scaling-laws, transformer-architecture
- Backlinks: curriculum-learning, morse-theory, multi-token-prediction, weight-averaging

## Entity: vlm
- Title: Vision-Language Models (VLMs)
- Category: Language Models
- Language: en
- Key Concepts: Contrastive objective (CLIP), High-resolution details, Compositional generalization, Architecture, Visual hallucination, Linear projector, Hallucination, Video temporal reasoning, Mathematical Framework, [[transformer-architecture|MLP]] projector, Limitations, Q-Former, Cross-[[attention-mechanisms|attention]] layers, Training Paradigm, Stage 1 — Visual-language alignment.
- References: attention-mechanisms, embedding-models, llm, pac-learning, transformer-architecture
- Backlinks: embedding-models, matryoshka-embeddings, vision-transformers

## Entity: math/large-deviations-cramer
- Title: Large Deviations and Cramer's Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: 3. Machine learning., Upper and lower bounds, Lower bound., exponentially, 1. Binomial., how fast, 5. Financial risk management., Chernoff bound, Cramer rate function, Sanov's theorem (1957)., 1. Statistical mechanics., cumulant generating function, the probability of ruin, Related Articles, Large deviation principle
- References: central-limit-theorem, characteristic-functions, convex-optimization, cornish-fisher-cvar, finance/shannon-entropy, law-iterated-logarithm, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/lundberg-cramer-ruin
- Backlinks: extreme-value-theory, math/branching-processes, math/concentration-inequalities, math/contiguity-measures, math/coupling-methods, math/doleans-dade-exponential, math/geometric-ergodicity, math/interacting-particle-systems, math/local-limit-theorems, math/lundberg-cramer-ruin, math/percolation, math/poisson-approximation, math/random-graphs, math/random-walks, math/renewal-theory, math/wiener-hopf-factorization, mgf, wentzell-freidlin

## Entity: math/lundberg-cramer-ruin
- Title: Lundberg-Cramer Ruin Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: Modern formulations, 3. Heavy tails., exponentially, 1. Insurance and reinsurance., Cramer rate function, light-tailed, Lundberg coefficient, Exact asymptotics (Cramer, 1930s)., Harald Cramer (1893-1985), 2. Operational risk (Basel III)., Limitations, 3. Financial risk management., Related Articles, large deviation principle, Probability of ruin:
- References: extreme-value-theory, finance/stable-distributions, finance/value-at-risk, math/discrete-martingales, math/large-deviations-cramer
- Backlinks: math/large-deviations-cramer, math/poisson-approximation, math/renewal-theory, math/wiener-hopf-factorization

## Entity: math/central-limit-theorem
- Title: Central Limit Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: Independence, Classical statement, Historical significance, fail, rate, generalized Lévy CLT, CLT for martingale differences, practically useful, Finite variance, Theorem (classical CLT)., Lindeberg's condition., Berry-Esseen: a quantitative CLT, CLT for geometrically α-mixing processes, their large sums look the same, the normal distribution is everywhere
- References: arch-models, brownian-motion, characteristic-functions, finance/crr-model, finance/stable-distributions, finance/stylized-facts-returns, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/weak-convergence-prokhorov

## Entity: math/functional-limit-theorems
- Title: Functional Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: Convergence of Discrete to Continuous Semimartingales, The Role of Skorokhod Topology, Theorem., Diffusion approximations., process, Related Articles, Theorem (Aldous-Rebolledo)., Tightness Criteria, Theorem (Rebolledo, 1980)., read off from the predictable triplets, High-frequency finance., Meta-theorem., Theorem (Donsker, 1951)., functional, Convergence via Predictable Characteristics
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, martingale-clt, math/convergence-semimartingales, math/skorokhod-topology, math/triangular-arrays-processes, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-problem, math/predictable-compensator, math/random-walks, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/infinitely-divisible-distributions
- Title: Infinitely Divisible Distributions
- Category: Limit Theorems
- Language: en
- Key Concepts: Levy measure, Connection to Processes with Independent Increments, Infinitely Divisible Distributions, The Levy-Khintchine Representation, canonical triplet, infinitely divisible, Kolmogorov's formula., The Levy Measure, Related Articles, Theorem., Role in Jacod-Shiryaev's Limit Theory, Kolmogorov's Formula and De Finetti's Theorem, De Finetti's theorem (for ID distributions)., Key Examples, Relation to Stable Distributions
- References: central-limit-theorem, characteristic-functions, finance/levy-processes, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, levy-ito-decomposition, math/subordinators, math/triangular-arrays-processes

## Entity: math/law-of-large-numbers
- Title: Law of Large Numbers
- Category: Limit Theorems
- Language: en
- Key Concepts: Strengthenings and generalizations, Strong law of large numbers, Birkhoff-Khintchine ergodic theorem, does not say, exponential, the average loss across a portfolio of policies, Connection to finance, Hájek-Rényi inequality, What the LLN does not say, Proof (Chebyshev), independent of the dimension, exact rate, the average return of a diversified portfolio, Law of the iterated logarithm, Related Articles
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/markowitz-mean-variance, law-iterated-logarithm, math/borel-cantelli-zero-one, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms
- Backlinks: convergence-types, de-finetti-exchangeability, finance/coherent-risk-measures, finance/cointegration, finance/quasi-monte-carlo, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-clt, math/poisson-approximation, math/renewal-theory, math/stochastic-recursive-sequences, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, monte-carlo-integration, slutsky-theorem

## Entity: math/local-limit-theorems
- Title: Local Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: Theorem (non-lattice local CLT)., Combinatorics and asymptotic enumeration., densities, Local Limit Theorems, lattice distribution, Number theory., Theorem (de Moivre-Laplace, local form)., Related Articles, point probabilities, Gnedenko's local theorem for lattice distributions, Applications, Theorem (Stone)., Cramer's condition., skewness, distribution functions
- References: central-limit-theorem, characteristic-functions, finance/stable-distributions, math/functional-limit-theorems, math/large-deviations-cramer, math/law-of-large-numbers, math/spectral-theory-operators, math/weak-convergence-prokhorov
- Backlinks: math/central-limit-theorem, math/stein-method

## Entity: math/poisson-approximation
- Title: Poisson Approximation
- Category: Limit Theorems
- Language: en
- Key Concepts: Proof sketch of Chen-Stein, Insurance mathematics., Classical Poisson limit theorem, Compound Poisson approximation., rare events, Theorem (Chen-Stein bound)., Theorem., The Le Cam inequality, Historical note, Random graphs., Poisson process approximation., Related Articles, Poisson Approximation, Negative binomial and mixed Poisson., Coupon collector.
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory
- Backlinks: math/central-limit-theorem, math/random-graphs, math/stein-method

## Entity: math/stable-convergence
- Title: Stable Convergence
- Category: Limit Theorems
- Language: en
- Key Concepts: joint convergence, Realized volatility CLT., Characteristic function method:, Proposition., Theorem (Stable CLT)., Tightness, Related Articles, random, Applications in High-Frequency Statistics, Comparison., mixing convergence, stably, Proof Sketch, Role in Jacod-Shiryaev's Framework, Mixing Convergence
- References: characteristic-functions, heston-model, martingale-clt, math/convergence-semimartingales, math/discrete-martingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/local-asymptotic-normality

## Entity: math/weak-convergence-prokhorov
- Title: Weak Convergence and Prokhorov's Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: Prokhorov's compactness theorem, Skorokhod's representation theorem, 2. Functional CLT (Donsker):, weak convergence of distributions, 4. Empirical distributions:, fail, 3. Convergence of the binomial model to Black-Scholes:, Lévy's continuity theorem, Hierarchy of convergences, Prokhorov's theorem (1956)., Equivalent forms:, Prokhorov's theorem, Related Articles, tight, excludes
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/asymptotic-arbitrage-large-markets, finance/crr-model, math/kolmogorov-probability-axioms, math/law-of-large-numbers
- Backlinks: empirical-processes, math/central-limit-theorem, math/contiguity-measures, math/convergence-semimartingales, math/coupling-methods, math/functional-limit-theorems, math/glivenko-cantelli, math/hellinger-processes, math/infinitely-divisible-distributions, math/local-limit-theorems, math/skorokhod-topology, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/wiener-hopf-factorization

## Entity: determinant-properties
- Title: Determinant Properties
- Category: Linear Algebra
- Language: en
- Key Concepts: Inverse:, Key Properties, Transpose:, Volume:, Overview, Multiplicativity:

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
- Key Concepts: Cyclic Property:, Trace of Derivative:, Linearity:, Identities, Eigenvalue Sum:, Overview

## Entity: vector-norms
- Title: Vector Norms
- Category: Linear Algebra
- Language: en
- Key Concepts: $L_1$ Norm:, $L_2$ Norm:, $L_\infty$ Norm:, Overview, L-p Norms

## Entity: deep-reinforcement-learning-for-trading
- Title: Deep Reinforcement Learning (Deep RL) in Trading
- Category: Machine Learning in Finance
- Language: en
- Key Concepts: Deep Reinforcement Learning (Deep RL) in Trading, See Also
- References: course-quant-trading, machine-learning-for-quant-trading, quant-market-making-mechanics

## Entity: machine-learning-for-quant-trading
- Title: Machine Learning for Quant Trading
- Category: Machine Learning in Finance
- Language: en
- Key Concepts: 1. Purged Group TimeSeries Cross-Validation, Machine Learning for Quant Trading, See Also
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
- Key Concepts: Trading Volume, Crypto, Spread in Different Markets, Absolute Spread, Adverse Selection Costs, Overview, Metrics, Inventory Risk, Relative (Percentage) Spread, Effective Spread, Bid-Ask Spread, Information Asymmetry, Forex, Market Cap, Volatility
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
- Key Concepts: Midpoint Peg:, HFT Order Types & Dark Pools, Post-Only:, See Also, 1. HFT Order Types, Iceberg Orders:
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: cryptographic-zero-knowledge-in-finance

## Entity: high-frequency-trading-and-orderbook
- Title: High-Frequency Trading (HFT) & Order Book Infrastructure
- Category: Market Microstructure
- Language: en
- Key Concepts: 1. HFT Tech Stack, 2. Queue Priority & VPIN, Protocols:, VPIN (Volume-Synchronized Probability of Toxicity):, FPGA & ASICs:, See Also, FIFO vs Pro-Rata:, Colocation:, High-Frequency Trading (HFT) & Order Book Infrastructure
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
- Key Concepts: Bid-Ask Spread ($\delta$):, 3. Asymmetric Information & Adverse Selection, Trading Takeaway:, Bid Price ($P_b$):, Mid Price ($P_m$):, 2. Avellaneda-Stoikov Inventory Model, See Also, 1. Fundamentals & Spreads, Ask Price ($P_a$):, Market Making Mechanics & Asymmetric Information
- References: course-quant-trading, optimal-stopping-and-kelly, option-greeks-and-volatility
- Backlinks: algorithmic-execution-twap-vwap, crypto-quant-trading-and-amm-curves, deep-reinforcement-learning-for-trading, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-trading-and-orderbook, limit-order-book-matching-engine-design, market-microstructure-noise-and-realized-volatility, optimal-stopping-and-kelly, option-greeks-and-volatility, order-book-dynamics-and-lOB-modeling, quant-brainteasers-handbook, quant-interview-cheat-sheet, volatility-trading-and-variance-swaps

## Entity: market-microstructure
- Title: Market Microstructure
- Category: Market Microstructure
- Language: en
- Key Concepts: Limit Order Book, Arbitrageurs, square-root law, Microstructure and AI, The Limit Order Book (LOB), Deep LOB, Kyle's Lambda, Avellaneda-Stoikov (2008), Limit Order, Generative Models, Overview, Adverse Selection, Informed Traders, Temporary Impact, Tightness
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
- Key Concepts: 1. Hawkes Processes, 2. Volume Imbalance Ratio, Order Book Dynamics & LOB Modeling, See Also
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: machine-learning-for-quant-trading

## Entity: math/martingale-clt
- Title: Central Limit Theorem for Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: strict generalization, 5. Bayesian algorithms., Important variants, 3. GARCH and ARCH models., Related Articles, Central Limit Theorem for Martingales, Theorem (martingale CLT)., random, Lindeberg condition, Setup, 5. Martingale transforms., 1. Asymptotic normality of maximum-likelihood estimators., Examples of martingale differences, martingale differences, Link to the classical CLT
- References: arch-models, brownian-motion, central-limit-theorem, convex-optimization, garch-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/law-of-large-numbers

## Entity: math/discrete-martingales
- Title: Discrete Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: 3. Machine learning., Insurance and credit risk theory, 2. Algorithm theory., Discrete Martingales, exactly equals, Optional stopping, martingale, Discrete Itô formula, the origin, stopping time, discrete analogue of the Doob-Meyer decomposition, 1. Symmetric random walk., Integrability, 3. Product of independent unit-mean variables., Martingale property
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/optimal-stopping-american, law-iterated-logarithm, math/conditional-expectation-sigma, math/discrete-markov-chains, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/branching-processes, math/conditional-expectation-sigma, math/discrete-markov-chains, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/lundberg-cramer-ruin, math/martingale-clt, math/martingale-representation, math/optimal-stopping-markov, math/predictable-compensator, math/random-walks, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/stable-convergence, math/wiener-hopf-factorization, stochastic-processes

## Entity: math/doleans-dade-exponential
- Title: Doleans-Dade Stochastic Exponential
- Category: Martingale Theory
- Language: en
- Key Concepts: Positivity and Strict Positivity, Theorem (Yor)., Exponential martingales., Likelihood ratios in statistics., Theorem., not, Related Articles, Proof idea., Special Cases, Explicit Formula, Brownian motion with drift., predictable, Yor's Formula, stochastic exponential, Pure jump process.
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, math/discrete-martingales, math/large-deviations-cramer, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, levy-ito-decomposition, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-stochastic-integrals, math/density-processes, math/hellinger-processes, math/martingale-problem, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering, risk-neutral-valuation

## Entity: math/doob-meyer-decomposition
- Title: Doob-Meyer Decomposition
- Category: Martingale Theory
- Language: en
- Key Concepts: class (D), Theorem (Doob-Meyer)., Connection to Semimartingale Theory, Why this matters:, Uniqueness, The Compensator, optional decomposition, Key examples:, Theorem (Doob)., optional, Related Articles, Examples:, The Continuous-Time Theorem, dual predictable projection, predictable
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability
- Backlinks: local-time-tanaka, math/density-processes, math/martingale-representation, math/predictable-compensator, math/quadratic-variation

## Entity: math/martingale-representation
- Title: Martingale Representation Theorem
- Category: Martingale Theory
- Language: en
- Key Concepts: Theorem (Martingale Representation)., every square-integrable martingale adapted to the Brownian filtration is a stochastic integral with respect to the Brownian motion, completeness of the Brownian filtration, integrand representation, market completeness, innovation representation, Hedging and replication., Connection to Filtering Theory, Multiple Brownian Motions, Related Articles, Market Completeness, The Clark-Ocone Formula, Failure Beyond Brownian Filtrations, Theorem (Clark-Ocone)., market incompleteness
- References: black-scholes, brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, hidden-markov-models, innovation-process, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, nonlinear-filtering, stochastic-differential-equations
- Backlinks: clark-ocone, feynman-kac, math/absolute-continuity-process-measures, math/backward-sde, stochastic-processes

## Entity: math/optimal-stopping-markov
- Title: Optimal Stopping of Markov Chains
- Category: Martingale Theory
- Language: en
- Key Concepts: Optimal Stopping of Markov Chains, best, 4. Quality control and maintenance., Connection to martingales, stop now, 5. Machine learning., main practical motivation, Stopping region:, 6. Defense and medicine., continue one step, Theorem., Optimal strategy:, supermartingale, variational inequality, 2. Statistics.
- References: finance/black-scholes-derivations, finance/crr-model, finance/optimal-stopping-american, math/discrete-markov-chains, math/discrete-martingales, reinforcement-learning
- Backlinks: local-time-tanaka

## Entity: optimal-stopping-and-kelly
- Title: Kelly Criterion & Optimal Stopping Theory
- Category: Math & Game Theory
- Language: en
- Key Concepts: 2. Optimal Stopping & Secretary Problem, See Also, 1. Kelly Criterion, Kelly Criterion & Optimal Stopping Theory
- References: course-quant-trading, quant-brainteasers-handbook, quant-market-making-mechanics
- Backlinks: optimal-stopping-american-options, option-greeks-and-volatility, quant-brainteasers-handbook, quant-market-making-mechanics, quant-risk-management-var-cvar

## Entity: stochastic-calculus-and-ito-lemma
- Title: Stochastic Calculus & Ito's Lemma
- Category: Math & Game Theory
- Language: en
- Key Concepts: 1. Ito's Lemma, Stochastic Calculus & Ito's Lemma, See Also
- References: course-quant-trading, monte-carlo-option-pricing-and-variance-reduction, option-greeks-and-volatility
- Backlinks: fixed-income-quant-rates-and-yield-curve, monte-carlo-option-pricing-and-variance-reduction, stochastic-volatility-heston-model

## Entity: axiomatic-probability
- Title: Axiomatic Probability
- Category: Math Foundations
- Language: en
- Key Concepts: Countable Additivity ($\sigma$-additivity), Normalization, 1. The Probability Space $(\Omega, \mathcal{F}, P)$, Complement Rule, Non-negativity, Empty Set, 1.1 The $\sigma$-algebra $\mathcal{F}$, $\sigma$-algebra ($\mathcal{F}$), Monotonicity, Borel $\sigma$-algebra, Probability Measure ($P$), Andrey Kolmogorov, Continuity from below, events, Inclusion-Exclusion
- References: conditional-probability, measure-theory

## Entity: bayesian-linear-regression
- Title: Bayesian Linear Regression
- Category: Math Foundations
- Language: en
- Key Concepts: The Model, prior, likelihood, Predictive Distribution, The Posterior Distribution, conjugate, Bayesian Linear Regression

## Entity: boolean-algebra
- Title: Boolean Algebra & Circuit Logic
- Category: Math Foundations
- Language: en
- Key Concepts: AND, Karnaugh map (K-map), Complexity Basics, Karnaugh Maps, true, Logic Gates, false, NOT
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
- Key Concepts: chain rule, Categorical Cybernetics, DERIVATION: [[automatic-differentiation|Backpropagation]] as Lens Composition, Backward:, Related Topics, lenses, Category Theory for Machine Learning, Lenses and [[automatic-differentiation|Backpropagation]], optics, What Is It, The Para Construction, Optics, Lens, Para, Forward:
- References: automatic-differentiation, manifold-learning, topos-theory, type-theory

## Entity: conditional-probability
- Title: Conditional Probability and Total Probability
- Category: Math Foundations
- Language: en
- Key Concepts: Likelihood, 3. Law of Total Probability (LTP), Prior, Conditional Probability and the Law of Total Probability, 3.2 The Theorem, Posterior, 4. Bayes' Theorem, Related Topics, 1.1 Intuition: Shrinking the Sample Space, 2. The Multiplication Rule, Proof, conditional probability of $A$ given $B$, Bayes' Theorem, 5. Example: Diagnostic Testing, 3.1 Definition of a Partition
- References: bayes-theorem, markov-chains
- Backlinks: axiomatic-probability

## Entity: continuous-random-variables
- Title: Continuous Random Variables
- Category: Math Foundations
- Language: en
- Key Concepts: Uniform($a, b$), CDF, 4. Transformation of Variables, Related Topics, 5. Common Continuous Distributions, Cauchy($x_0, \gamma$), PDF, Intuition, Exponential($\lambda$), 1.1 Properties of the PDF, 3. Expected Value and Variance, Continuous Random Variables, Continuous Random Variable, Normal($\mu, \sigma^2$), 2. Cumulative Distribution Function (CDF)
- References: discrete-random-variables, joint-distributions, measure-theory
- Backlinks: discrete-random-variables

## Entity: coordinate-systems
- Title: Coordinate Systems & Transforms
- Category: Math Foundations
- Language: en
- Key Concepts: Jacobian determinant, polar coordinates, Polar and Spherical Coordinates, The Jacobian Determinant, spherical coordinates
- References: implicit-function-theorem
- Backlinks: implicit-function-theorem, integration-techniques

## Entity: covariance-correlation
- Title: Covariance, Correlation, and Independence
- Category: Math Foundations
- Language: en
- Key Concepts: ranks, Independence $\implies$ Zero Correlation, Units, 3. Pearson vs. Spearman Correlation, Covariance, Correlation, and Independence, 1. Covariance, 2. Pearson Correlation Coefficient, monotonic, 2.1 Properties, Pearson, Zero Correlation $\not\implies$ Independence, linear, Spearman ($\rho_s$), Example, Covariance
- References: joint-distributions, linear-regression-ols
- Backlinks: joint-distributions

## Entity: generating-functions
- Title: Discrete Math: Generating Functions
- Category: Math Foundations
- Language: en
- Key Concepts: generating function, Solving Recurrences, Counting and Analogies
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
- Key Concepts: Geometric($p$), Binomial($n, p$), discrete, 3. Cumulative Distribution Function (CDF), 2. Probability Mass Function (PMF), CDF, Linearity of Expectation, Discrete Random Variable, 2.1 Properties of the PMF, Discrete Random Variables, Poisson($\lambda$), Bernoulli($p$), 4. Expected Value (Mean), 6. Common Discrete Distributions, Related Topics
- References: continuous-random-variables, lln-clt
- Backlinks: continuous-random-variables

## Entity: eigendecomposition-vs-svd
- Title: Eigenvalue Decomposition vs. SVD
- Category: Math Foundations
- Language: en
- Key Concepts: singular values, Eigenvalue Decomposition (EVD), right singular vectors, Singular Value Decomposition (SVD), Eigenvalue Decomposition vs. SVD, Orthogonality:, Technical Comparison, Spectral Theorem:, Domain and Codomain:, Applicability:, left singular vectors
- References: math/spectral-theory-operators, pca-math
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: exponential-families
- Title: Exponential Families
- Category: Math Foundations
- Language: en
- Key Concepts: Role in Machine Learning, log-partition function, Mean:, Canonical Form, Exponential Families, Properties of the Log-Partition Function, sufficient statistic, natural (or canonical) parameter, Variance:, Examples
- Backlinks: course-math-for-ai, distributions-zoo, fisher-information, math/bayesian-asymptotics, math/cramer-rao-bound, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, maximum-entropy

## Entity: fundamental-inequalities
- Title: Fundamental Inequalities: Markov & Chebyshev
- Category: Math Foundations
- Language: en
- Key Concepts: Chernoff Bounds, Fundamental Inequalities: Markov & Chebyshev, 2. Chebyshev's Inequality, Sharpness, Related Topics, 1. Markov's Inequality, Proof, 3. Tightness and Bounds
- References: jensen-inequality, lln-clt, math/concentration-inequalities

## Entity: conic-sections
- Title: Geometry: Conic Sections & Quadratic Forms
- Category: Math Foundations
- Language: en
- Key Concepts: Diagonalization, Matrix Representation, quadratic forms
- References: change-of-basis, math/spectral-theory-operators

## Entity: graph-theory-basics
- Title: Graph Theory Basics
- Category: Math Foundations
- Language: en
- Key Concepts: Path:, adjacency matrix, Tree:, Adjacency Matrices, Paths and Trees
- References: bayesian-networks, sparse-matrices
- Backlinks: sparse-matrices

## Entity: group-theory-basics
- Title: Group Theory Basics
- Category: Math Foundations
- Language: en
- Key Concepts: Closure:, Rings and Fields, Associativity:, Inverse:, group, Ring:, Identity:, Field:, Groups
- References: formal-proof-techniques

## Entity: homotopy-type-theory
- Title: Homotopy Type Theory (HoTT)
- Category: Math Foundations
- Language: en
- Key Concepts: $h=-1$ (Propositions):, The Circle ($S^1$):, Structural Learning:, Intensional Type Theory, $h=0$ (Sets):, h-Levels (Homotopy Levels), Univalent Foundations, $\infty$-groupoid, $h=1$ (Groupoids):, The Identity Type as a Path Space, Quotients:, The Univalence Axiom, MATHEMATICAL CONCEPT: Path Induction, path, path induction
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
- Key Concepts: Inner Product Spaces & Norms, $L_\infty$ Norm (Chebyshev norm):, Dual Norms, $L_p$ Norms, $L_1$ Norm (Manhattan distance):, inner product space, Frobenius Norm, $L_2$ Norm (Euclidean norm):
- References: eigendecomposition-vs-svd, kkt-conditions, pca-math

## Entity: jensen-inequality
- Title: Jensen's Inequality
- Category: Math Foundations
- Language: en
- Key Concepts: 2. Geometric Proof, [[expectation-maximization|EM algorithm]], Evidence Lower Bound (ELBO), Related Topics, 1. Formal Statement, A. Information Theory, Jensen's Inequality, B. Machine Learning: ELBO and EM-Algorithm, 3. Applications
- References: convexity, expectation-maximization, finance/shannon-entropy, information-theory-basics
- Backlinks: fundamental-inequalities

## Entity: joint-distributions
- Title: Joint, Marginal, and Conditional Distributions
- Category: Math Foundations
- Language: en
- Key Concepts: Jacobians, 3. Conditional Distributions, 2. Marginal Distributions, 5. Multivariate Calculus Foundation, Related Topics, 1.2 Continuous Case: Joint PDF, 4. Independence, Joint CDF, 1. Joint Distributions, Continuous, independent, 3.1 Conditional Expectation, Law of Iterated Expectations, Double Integrals, 1.1 Discrete Case: Joint PMF
- References: copulas, covariance-correlation, multivariate-normal
- Backlinks: continuous-random-variables, covariance-correlation

## Entity: kkt-conditions
- Title: Lagrange Multipliers & KKT Conditions
- Category: Math Foundations
- Language: en
- Key Concepts: Dual Feasibility:, Karush-Kuhn-Tucker (KKT), Stationarity:, Primal Feasibility:, KKT Conditions (Inequality Constraints), Lagrange Multipliers (Equality Constraints), Lagrange Multipliers & KKT Conditions, Complementary Slackness:
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: large-deviations
- Title: Large Deviations: Hoeffding & Bernstein Inequalities
- Category: Math Foundations
- Language: en
- Key Concepts: Markov's:, Markov's and Chebyshev's Inequalities, exponentially, Bernstein's Inequality, Chebyshev's:, Hoeffding's Inequality, Large Deviations: Hoeffding & Bernstein, Key takeaway:

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
- Key Concepts: The Rank-Nullity Theorem, Rank-Nullity Theorem, Fundamental Subspaces, Kernel (Null Space, $\ker A$):, Image (Column Space, $\text{im} A$):
- References: change-of-basis
- Backlinks: change-of-basis

## Entity: sparse-matrices
- Title: Linear Algebra: Sparse Matrices
- Category: Math Foundations
- Language: en
- Key Concepts: CSC (Compressed Sparse Column):, Mathematical Properties, CSR (Compressed Sparse Row):, sparse, Storage Formats
- References: graph-theory-basics, numerical-stability
- Backlinks: graph-theory-basics, numerical-stability

## Entity: formal-proof-techniques
- Title: Logic: Formal Proof Techniques
- Category: Math Foundations
- Language: en
- Key Concepts: Mathematical Induction, Inductive Step:, Base Case:, Direct Proof, Proof by Contradiction
- References: lln-proofs
- Backlinks: group-theory-basics, lln-proofs, recursion-recurrence

## Entity: markov-chains
- Title: Markov Chains
- Category: Math Foundations
- Language: en
- Key Concepts: Ergodic Theorem:, Transition Matrix, Irreducible:, Stationary Distributions, Markov Chains, Irreducibility and Aperiodicity, stochastic matrix, stationary distribution, Markov property, Aperiodic:, The Markov Property
- Backlinks: conditional-probability, stochastic-processes

## Entity: matrix-calculus
- Title: Matrix Calculus
- Category: Math Foundations
- Language: en
- Key Concepts: Layout Conventions, Gradients Involving Traces, Gradients Involving Determinants, Matrix Calculus, Gradients of Quadratic Forms, denominator layout
- References: em-algorithm, gmm, multivariate-normal-distribution
- Backlinks: tensors-and-contractions

## Entity: multivariable-taylor-series
- Title: Multivariable Taylor Series
- Category: Math Foundations
- Language: en
- Key Concepts: Multivariable Taylor Series, Hessian, Saddle Point:, The Taylor Expansion, Hessian Properties and Optimization, Local Minimum:, Gradient, Newton's Method, Local Maximum:
- References: math/spectral-theory-operators, positive-definite-matrices

## Entity: multivariate-normal-distribution
- Title: Multivariate Normal Distribution
- Category: Math Foundations
- Language: en
- Key Concepts: Marginal Distribution:, Mahalanobis Distance, Marginals and Conditionals, Density Function, Conditional Distribution:, Multivariate Normal Distribution
- References: kalman-filter, positive-definite-matrices
- Backlinks: matrix-calculus, positive-definite-matrices

## Entity: mutual-information-divergence
- Title: Mutual Information & Divergence
- Category: Math Foundations
- Language: en
- Key Concepts: Interpretation:, Mutual Information, Asymmetry:, Gibbs' Inequality:, Mutual Information & Divergence, Kullback-Leibler (KL) Divergence, Data Processing Inequality
- References: em-algorithm, finance/shannon-entropy

## Entity: numerical-integration
- Title: Numerical Integration
- Category: Math Foundations
- Language: en
- Key Concepts: Importance Sampling, Curse of Dimensionality, Monte Carlo Integration, Numerical Integration, Gaussian Quadrature

## Entity: numerical-stability
- Title: Numerical Stability & Floating Point Math
- Category: Math Foundations
- Language: en
- Key Concepts: Machine epsilon, Machine Epsilon, floating-point, condition number, numerically stable, Condition Number
- References: sparse-matrices
- Backlinks: sparse-matrices

## Entity: convex-sets-functions
- Title: Optimization: Convex Sets & Functions
- Category: Math Foundations
- Language: en
- Key Concepts: strictly convex, Convex Functions, Convex Sets, convex
- References: implicit-function-theorem
- Backlinks: implicit-function-theorem

## Entity: positive-definite-matrices
- Title: Positive Definite Matrices
- Category: Math Foundations
- Language: en
- Key Concepts: [[spectral-theory-operators|Eigenvalues]]:, Cholesky Decomposition, Positive Definite Matrices, Properties, Role in Kernels and Optimization, Invertibility:, positive definite (PD), Kernels:, Optimization:, positive semi-definite (PSD), Trace and Determinant:, Principal Minors:
- References: math/spectral-theory-operators, multivariate-normal-distribution
- Backlinks: multivariable-taylor-series, multivariate-normal-distribution

## Entity: pca-math
- Title: Principal Component Analysis (PCA) Math
- Category: Math Foundations
- Language: en
- Key Concepts: Minimum Error Formulation, Principal Component Analysis (PCA), Connection to SVD, Maximum Variance Formulation
- References: eigendecomposition-vs-svd, kkt-conditions
- Backlinks: eigendecomposition-vs-svd, inner-product-spaces-norms

## Entity: lln-proofs
- Title: Probability: Law of Large Numbers
- Category: Math Foundations
- Language: en
- Key Concepts: Strong LLN, Weak LLN
- References: formal-proof-techniques, random-walks
- Backlinks: formal-proof-techniques, random-walks

## Entity: random-walks
- Title: Probability: Random Walks
- Category: Math Foundations
- Language: en
- Key Concepts: transient, random walk, Recurrence vs Transience, recurrent, 1D and 2D Simple Walks
- References: lln-proofs
- Backlinks: lln-proofs, stochastic-processes

## Entity: p-values-effect-size
- Title: Statistics: P-values & Effect Size
- Category: Math Foundations
- Language: en
- Key Concepts: Cohen's d, p-value, Effect size, P-Hacking, Effect Size, p-hacking, P-values
- References: statistical-paradoxes
- Backlinks: statistical-paradoxes

## Entity: statistical-paradoxes
- Title: Statistics: Paradoxes
- Category: Math Foundations
- Language: en
- Key Concepts: Berkson's Paradox, Monty Hall Problem, Simpson's Paradox
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
- Key Concepts: Tensors and Contractions, Matrix-Vector Product:, Tensor Contraction, Matrix Multiplication:, Examples:, Inner Product:, Einstein Summation Convention, Trace:, Tensor Notation
- References: attention-mechanisms, automatic-differentiation, matrix-calculus

## Entity: em-algorithm
- Title: The EM Algorithm
- Category: Math Foundations
- Language: en
- Key Concepts: latent variables, E-step (Expectation):, Evidence Lower Bound (ELBO), Problem Setup, M-step (Maximization):, The Expectation-Maximization (EM) Algorithm, The EM Steps
- References: gmm, hmm
- Backlinks: matrix-calculus, mutual-information-divergence

## Entity: universal-approximation-theory
- Title: Universal Approximation Theory
- Category: Math Foundations
- Language: en
- Key Concepts: Classical Formulation, Approximation by Transformers, Universal Approximation Theory, Extension to Deep Networks, Barron's Theorem
- References: attention-mechanisms, transformer-architecture

## Entity: information-theory-basics
- Title: Information Theory Basics
- Category: Math Fundamentals
- Language: en
- Key Concepts: Cross-Entropy, 2. KL Divergence: Comparing Distributions, Related Topics, not symmetric, Mutual Information ($I(X; Y)$), Cross-Entropy ($H(p, q)$), Intuition, 1. [[shannon-entropy|Entropy]]: The Measure of Uncertainty, KL Divergence, Binary Cross-Entropy (BCE), 5. Summary of Terms, 3. Cross-Entropy: The ML Loss Function, 4. Mutual Information, Kullback-Leibler (KL) Divergence, Information Theory Basics: Measuring Surprise
- References: finance/shannon-entropy, maximum-entropy, probability-distributions, variational-autoencoders
- Backlinks: jensen-inequality, probability-distributions

## Entity: linear-regression-ols
- Title: Linear Regression & OLS
- Category: Math Fundamentals
- Language: en
- Key Concepts: Exogeneity, Homoscedasticity, Mean Squared Error (MSE), Ordinary Least Squares (OLS), No Multicollinearity, t-statistic, 3. Assumptions of OLS (Gauss-Markov), 4. Evaluation Metrics, 5. Beyond OLS: Regularization, R-squared ($R^2$), 1. The Model Equation, The Normal Equation, 2. Ordinary Least Squares (OLS), Residual Sum of Squares (RSS), Linear Regression & OLS: The Foundation of Predictive Modeling
- References: matrix-decompositions, statistical-inference, vector-spaces-orthogonality
- Backlinks: covariance-correlation, estimator-properties, map-estimation, matrix-decompositions, vector-spaces-orthogonality

## Entity: matrix-decompositions
- Title: Matrix Decompositions: SVD, LU, and QR
- Category: Math Fundamentals
- Language: en
- Key Concepts: SVD, 3. Singular Value Decomposition (SVD): The Master Key, Model Compression, Upper, Applications in AI, The Geometric Intuition, Dimensionality Reduction (PCA), Efficiency, Orthogonal, Geometric Intuition, 1. LU Decomposition: Solving Linear Systems, 4. Comparison Summary, 2. QR Decomposition: Stability and Orthogonality, Eigenvalue Algorithms, Applications
- References: eigenvalues-eigenvectors, linear-regression-ols, math/spectral-theory-operators, pca
- Backlinks: linear-regression-ols, vector-spaces-orthogonality

## Entity: optimization-basics
- Title: Optimization 101: Gradient Descent & Newton's Method
- Category: Math Fundamentals
- Language: en
- Key Concepts: Local Minima, Stochastic [[convex-optimization|Gradient Descent]] (SGD), Convergence, Positive Definite, Why avoid it?, 3. The Hessian Intuition, Vanishing/Exploding Gradients, quadratic convergence, Adam, 2. Newton's Method: The Second-Order Specialist, Hessian, Loss Function, 4. Key Challenges, 1. [[convex-optimization|Gradient Descent]]: The First-Order Workhorse, Computation
- References: chain-rule-autodiff, convex-optimization, gradient-hessian-jacobian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, sequences-series-convergence

## Entity: probability-distributions
- Title: Probability Distributions Encyclopedia
- Category: Math Fundamentals
- Language: en
- Key Concepts: Fourth Moment (Kurtosis), Binomial, Parameters, 1. Discrete Distributions, PDF, Bernoulli Distribution, Probability Distributions Encyclopedia: The Shapes of Randomness, PMF, Central Limit Theorem, Third Moment (Skewness), Probability Distributions, First Moment (Mean), [[shannon-entropy|Entropy]], 3. Moments of a Distribution, 4. Key Relationships
- References: bayes-theorem, finance/shannon-entropy, information-theory-basics, lln-clt
- Backlinks: information-theory-basics, mgf-characteristic-functions, order-statistics, statistical-inference

## Entity: sequences-series-convergence
- Title: Sequences, Series & Convergence
- Category: Math Fundamentals
- Language: en
- Key Concepts: In ML, 4. Radius of Convergence, Convergence in Probability, Radius of Convergence, Sequences, Series & Convergence: The Math of Infinite Approximation, Hessian Intuition, Linear Approximation, 1. Sequences and Limits, Harmonic Series, Linearization, Sequence, 5. Convergence in Probability, Hessian, partial sums, Geometric Series
- References: lln-clt, optimization-basics, taylor-series

## Entity: logic-set-theory
- Title: Set Theory & Formal Logic
- Category: Math Fundamentals
- Language: en
- Key Concepts: Subset ($A \subseteq B$), Cartesian Product ($A \times B$), Universal Quantifier ($\forall$), Existential Quantifier ($\exists$), Relation, Intersection ($A \cap B$), Predicate Logic (Quantifiers), 2. Set Theory: The Universal Container, Conjunction ($\land$), 4. Boolean Algebra in Computing, Function ($f: A \to B$), True, 3. Relations and Functions, Injective (One-to-One), 1. Formal Logic: The Rules of Thought
- References: graph-theory

## Entity: statistical-inference
- Title: Statistical Inference & Hypothesis Testing
- Category: Math Fundamentals
- Language: en
- Key Concepts: Significance Level ($\alpha$), 1. Hypothesis Testing: The Framework, Type I Error, Null Hypothesis ($H_0$), Alternative Hypothesis ($H_a$ or $H_1$), Power ($1 - \beta$), 2. Type I and Type II Errors, Interpretation, p-value, 4. Common Tests, Chi-Squared Test, 3. Confidence Intervals (CI), Crucial, The p-value, 5. Bayesian Inference vs. Frequentist
- References: bayes-theorem, probability-distributions
- Backlinks: bootstrap-jackknife, cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, linear-regression-ols, map-estimation, mle-estimation, rank-tests, sufficient-statistics

## Entity: chain-rule-autodiff
- Title: The Chain Rule & Auto-Diff Foundations
- Category: Math Fundamentals
- Language: en
- Key Concepts: The Chain Rule & Auto-Diff: The Engine of Deep Learning, Reverse Mode vs. Forward Mode, Backward Pass, Efficiency, Reverse Mode (Backprop), Jacobian, 3. Automatic Differentiation (Auto-Diff), [[automatic-differentiation|Backpropagation]], 2. Multivariable Chain Rule, Loss Function, 1. The Single Variable Chain Rule, Optimization, Example, Forward Pass, 4. The Computational Graph
- References: automatic-differentiation, gradient-hessian-jacobian, optimization-basics
- Backlinks: optimization-basics

## Entity: vector-spaces-orthogonality
- Title: Vector Spaces & Orthogonality
- Category: Math Fundamentals
- Language: en
- Key Concepts: Application, 5. Summary of Key Concepts, Dimension, Vector Spaces & Orthogonality: The Geometry of Data, Projection, Stability Note, Orthogonal, orthonormal, Orthogonal Complement, Orthonormal, 4. The Gram-Schmidt Process, Vectors, 1. Vector Spaces and Bases, Orthonormal Basis, Vector Space
- References: eigenvalues-eigenvectors, linear-regression-ols, matrix-decompositions
- Backlinks: linear-regression-ols

## Entity: math/algebraic-topology
- Title: Algebraic Topology
- Category: Mathematical Foundations
- Language: en
- Key Concepts: homotopy equivalent, correspondence between coverings and groups, universal covering, Algebraic Topology, Covering Spaces, is independent of the choice of basepoint, Applications: Topological Data Analysis and Persistent Homology, contractible, chain complex, singular $n$-simplex, amalgamated free product, Euler formula for polyhedra, cycles, Persistent homology, homology groups
- References: category-theory, complex-analysis, functional-analysis, math/differential-geometry, math/non-euclidean-geometry, math/topology-basics
- Backlinks: homological-algebra, homotopy-type-theory, math/differential-geometry, morse-theory, topos-theory

## Entity: complex-analysis
- Title: Complex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: holomorphic, Residue Theorem, Liouville's Theorem, Singularities and Laurent Series, Connection to Harmonic Functions and Partial Differential Equations, The Maximum Modulus Principle and Liouville's Theorem, Möbius transformations, Laurent series, Cauchy integral formula, Cauchy–Riemann equations, Pole of order $m$, Removable singularity, analytic continuation, The Residue Theorem, Riemann Mapping Theorem
- References: fourier-transform, functional-analysis, harmonic-analysis, math/differential-geometry, math/topology-basics
- Backlinks: math/algebraic-topology, math/differential-geometry, math/harmonic-analysis

## Entity: convex-analysis
- Title: Convex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Applications across domains, Portfolio optimization, Information geometry, The subdifferential, Conjugate functions and duality, Primal feasibility, KKT conditions and optimality, Optimal transport, Variational methods in control, LASSO and sparsification, Complementary slackness, Proximal operators and algorithms, Stationarity, Dual feasibility, Convex sets and functions
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, finance/markowitz-mean-variance, math/analysis-geometry/information-geometry, math/kolmogorov-probability-axioms, optimal-transport, stochastic-control
- Backlinks: math/high-dimensional-statistics, math/topology-basics

## Entity: math/differential-geometry
- Title: Differential Geometry
- Category: Mathematical Foundations
- Language: en
- Key Concepts: volume form, Machine Learning, Parallel transport, pushforward, arc length, connection, Hopf–Rinow theorem, length, Fisher metric, Sectional Curvature and Space Forms, holonomy group, constant sectional curvature, space form, tangent bundle, charts
- References: complex-analysis, convex-optimization, functional-analysis, manifold-learning, math/algebraic-topology, math/analysis-geometry/information-geometry, math/non-euclidean-geometry, math/topology-basics, math/variational-calculus
- Backlinks: asymptotic-spacetime, complex-analysis, course-math-for-ai, fluid-dynamics-navier-stokes, goldstone-modes, gravitational-waves-gr, group-theory, hyperbolic-vol-geometry, lie-groups, manifold, manifold-learning, many-body-tensor-networks, math/algebraic-topology, morse-theory, qft-curved-spacetime, semimartingales-on-manifolds, special-relativity, stochastic-manifolds, string-theory-calabi-yau

## Entity: math/harmonic-analysis
- Title: Harmonic Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: convolution theorem, Plancherel's theorem, The Schwartz Space and Tempered Distributions, Applications: Heat Equation and Spectral Theory, Interpolation: Riesz-Thorin and Marcinkiewicz Theorems, Marcinkiewicz interpolation theorem, weak $L^1$ bound, Heisenberg uncertainty principle, Spectral theory, Dirichlet kernel, The $L^1 \cap L^2$ Theory: Plancherel's Theorem, Schrödinger equation, Sobolev spaces, The inversion formula, Sobolev Spaces via Fourier
- References: complex-analysis, finance/shannon-entropy, functional-analysis, math/information-theory, math/lp-spaces, math/spectral-theory-operators, partial-differential-equations, sobolev-spaces

## Entity: math/ode-stability
- Title: ODE Theory and Lyapunov Stability
- Category: Mathematical Foundations
- Language: en
- Key Concepts: The Picard-Lindelöf Theorem, Definition (Instability)., Lyapunov Stability, [[convex-optimization|Gradient Descent]] as Gradient Flow, Peano's Theorem, Theorem (Picard-Lindelöf)., Further Development, Spectral Classification, Functional analysis, Introduction, Lyapunov Functions in Linear Systems, Theorem (Lyapunov Stability Theorem)., asymptotically stable, Center:, Classification of Singular Points
- References: convex-optimization, functional-analysis, manifold-learning, math/geometric-ergodicity, math/spectral-theory-operators, math/variational-calculus, neural-odes, stochastic-control, stochastic-differential-equations

## Entity: math/spectral-theory-operators
- Title: Spectral Theory of Operators
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Point spectrum, spectral theorem, Singular Value Decomposition (SVD), Fredholm Alternative, Residual spectrum, Continuous spectrum, Spectrum and Resolvent, spectral gap, resolvent identity, Stability of dynamical systems, Functional Calculus, spectrum, resolvent, References, Bounded Self-Adjoint Operators
- References: functional-analysis, math/lp-spaces, math/markov-chain-mixing, math/spectral-representation-processes, partial-differential-equations, schrodinger-equation, sobolev-spaces, spectral-graph-theory
- Backlinks: algebraic-geometry-slt, algebraic-topology-persistent, ar-models, attention-linear-kernel, brownian-bridge, change-of-basis, conic-sections, eigendecomposition-vs-svd, eigenvalues-eigenvectors, finance/cointegration, finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, fluid-dynamics-navier-stokes, functional-analysis-c-star, geometry-loss-landscapes, geometry-of-attention, gnn-weisfeiler-lehman, gradient-hessian-jacobian, graph-curvature-oversquashing, graph-theory, hilbert-banach-spaces, information-geometry-nn, kernel-methods-rkhs, laplacian, linear-algebra, math/functional-analysis, math/harmonic-analysis, math/kolmogorov-equations-ctmc, math/local-limit-theorems, math/markov-chain-mixing, math/ode-stability, matrix-decompositions, mechanistic-interpretability-sae, morse-theory, multivariable-calculus, multivariable-taylor-series, neural-ode-stability, neural-operators-fno, nonlinear-shrinkage, normalization-layers-math, number-theory-l-functions, optimization-basics, pca, pinns-convergence, portfolio-optimization-ml, positive-definite-matrices, quantum-computing-vqe, quantum-information-entropy, quantum-mechanics, quantum-phase-estimation, random-matrices, random-matrix-theory-marchenko, random-walks-groups, renormalization-group, spectral-clustering, spectral-graph-theory, spectral-theorem-unbounded, spin-glasses-hopfield, state-space-models, weight-initialization-signal

## Entity: math/topology-basics
- Title: Topology and Metric Spaces
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Connectedness, Baire Category Theorem, connected, open ball, compact, Canonical Examples, $\mathbb{R}^n$ with Euclidean metric, Triangle inequality, Polish Spaces and Probability, Tychonoff's Theorem, metric space, Introduction, Prokhorov's theorem, Urysohn's Lemma, Metric Spaces
- References: convex-analysis, functional-analysis, math/sigma-algebra-measurability, math/skorokhod-topology, math/weak-convergence-prokhorov, sobolev-spaces
- Backlinks: complex-analysis, manifold, math/algebraic-topology, math/differential-geometry, math/hausdorff-measure, topological-phases

## Entity: math/borel-cantelli-zero-one
- Title: Borel-Cantelli Lemmas and Zero-One Laws
- Category: Measure Theory
- Language: en
- Key Concepts: ergodicity, infinite, The Borel-Cantelli lemmas, Tail σ-algebra., Example., symmetric, Bernoulli shifts, Theorem., tail σ-algebra, Lemma 2 (reverse Borel-Cantelli)., Related Articles, Theorem (Kolmogorov 0-1 law, 1933)., The 0/1 dichotomy, Connection to ergodic theory, Hewitt-Savage zero-one law
- References: brownian-motion, characteristic-functions, law-iterated-logarithm, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: math/branching-processes, math/glivenko-cantelli, math/law-of-large-numbers, math/lebesgue-integral, math/poisson-approximation

## Entity: math/cameron-martin-formula
- Title: Cameron-Martin Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: The Feldman-Hajek Dichotomy, Signal detection., not, Wiener measure zero, shifts Wiener measure by a deterministic function, Cameron-Martin space, Importance sampling., Related Articles, The Cameron-Martin Space, reproducing kernel Hilbert space, mutually singular, abstract Wiener space, Applications, deterministic special case, Abstract Wiener Spaces
- References: brownian-motion, finance/girsanov-semimartingales, math/absolute-continuity-process-measures, math/conditional-expectation-sigma, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/sigma-algebra-measurability
- Backlinks: math/absolute-continuity-process-measures, math/gaussian-process-sample-paths, math/sde-numerical-methods, math/sequential-hypothesis-testing, math/stratonovich-integral

## Entity: math/conditional-expectation-sigma
- Title: Conditional Expectation w.r.t. a σ-Algebra
- Category: Measure Theory
- Language: en
- Key Concepts: Independence, Connection to martingales, average, conditional expectation, measurable with respect to $\mathcal{G}$, regular conditional probability, martingale, globally, best mean-square predictor, Tower of total expectation, Martingale property, Related Articles, Jensen's inequality, Intuition, In finance
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, kalman-filter, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/cameron-martin-formula, math/cramer-rao-bound, math/discrete-martingales, math/doob-meyer-decomposition, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/predictable-compensator, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/differentiation-of-measures
- Title: Differentiation of Measures
- Category: Measure Theory
- Language: en
- Key Concepts: Lebesgue differentiation theorem, The Radon–Nikodym Theorem as Differentiation, Besicovitch covering lemma, The Vitali Covering Theorem, Vitali covering theorem, Differentiation of General Measures, Proof of the Lebesgue Theorem via the Maximal Function, Differentiation of Measures, The Lebesgue Differentiation Theorem, The Besicovitch Covering Lemma, Radon–Nikodym theorem, Harmonic analysis, The Hardy–Littlewood Maximal Function, Applications and Connections, symmetric derivative
- References: functional-analysis, math/absolute-continuity-process-measures, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure

## Entity: math/glivenko-cantelli
- Title: Glivenko-Cantelli Theorem and Empirical Processes
- Category: Measure Theory
- Language: en
- Key Concepts: VC dimension and uniform convergence, distribution-free, The Kolmogorov-Smirnov test, Vapnik-Chervonenkis (VC) dimension, Glivenko-Cantelli class, Dvoretzky-Kiefer-Wolfowitz (1956) inequality, Machine learning., The empirical CDF, Related Articles, The theorem, Kolmogorov-Smirnov (KS) statistic, Nonparametric statistics., fundamental theorem of statistics, Empirical processes, The DKW inequality
- References: brownian-motion, central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/weak-convergence-prokhorov
- Backlinks: math/borel-cantelli-zero-one, math/kernel-density-estimation

## Entity: math/hausdorff-measure
- Title: Hausdorff Measure and Fractal Dimension
- Category: Measure Theory
- Language: en
- Key Concepts: Application: Differentiation of Measures, Box-counting dimension, Self-Similar Sets and Hutchinson's Theorem, Box-Counting Dimension, General Case: Borel Sets, box-counting dimension, Normalization Constant, Iterated Function System (IFS), Fundamental Properties, Hausdorff dimension, Introduction, Besicovitch Covering Theorem, Definition via $\delta$-Covers, metric outer measure, open set condition (OSC)
- References: brownian-motion, math/differentiation-of-measures, math/lebesgue-integral, math/product-measures-fubini, math/sigma-algebra-measurability, math/topology-basics, radon-nikodym

## Entity: math/kolmogorov-probability-axioms
- Title: Kolmogorov's Probability Axioms
- Category: Measure Theory
- Language: en
- Key Concepts: Kolmogorov's Probability Axioms, Historical significance, discrete, separating formal structure from interpretation, pairwise disjoint, smaller, Connection to mathematical modernism, separated, impossible, probability space, entire, Related Articles, Distribution of a random variable:, Axiom 2 (normalization)., crucial
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/ftap-first-fundamental-theorem, math/conditional-expectation-sigma, math/godel-incompleteness, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: bayesian-deep-learning, causal-inference, convex-analysis, course-math-for-ai, gaussian-processes, math/borel-cantelli-zero-one, math/central-limit-theorem, math/conditional-expectation-sigma, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-equations-ctmc, math/large-deviations-cramer, math/law-of-large-numbers, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, math/weak-convergence-prokhorov, measure-theory, radon-nikodym, variational-autoencoders

## Entity: math/lp-spaces
- Title: L^p Spaces
- Category: Measure Theory
- Language: en
- Key Concepts: Hölder's inequality, Riesz–Fischer Theorem, weak $L^p$ space, Riesz representation theorem, Sobolev Spaces and Generalizations, Completeness and the Riesz–Fischer Theorem, Minkowski's inequality, Hölder's Inequality, The Space $L^\infty$ and Essential Supremum, Related Concepts, Marcinkiewicz Interpolation Theorem, projection theorem, Hilbert Structure of $L^2$, Duality: The Riesz Representation Theorem, Sobolev spaces
- References: functional-analysis, math/conditional-expectation-sigma, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym, sobolev-spaces
- Backlinks: course-math-for-ai, hilbert-banach-spaces, math/differentiation-of-measures, math/harmonic-analysis, math/high-dimensional-statistics, math/lebesgue-integral, math/signed-measures, math/spectral-theory-operators, measure-theory, random-matrices

## Entity: math/lebesgue-integral
- Title: Lebesgue Integral
- Category: Measure Theory
- Language: en
- Key Concepts: Simple Functions and Elementary Integration, Related Concepts, Fatou's Lemma, Homogeneity, Additivity, References, Change of Variables, Approximation Results, integrable, Monotonicity, Lebesgue Integral, Convergence Theorems, $L^1$ as a Banach Space, Product Integration and Fubini-Tonelli, Lebesgue integral
- References: math/borel-cantelli-zero-one, math/conditional-expectation-sigma, math/lp-spaces, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: course-math-for-ai, math/differentiation-of-measures, math/hausdorff-measure, math/lp-spaces, math/product-measures-fubini, math/signed-measures, measure-theory

## Entity: math/product-measures-fubini
- Title: Product Measures and Fubini's Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: Theorem (Fubini)., Remark:, Key observation:, See also:, Counterexample (Fubini failure)., If $f$ is integrable, Measurability:, Integration order:, σ-finiteness requirement:, Infinite Product Measures and Kolmogorov Extension Theorem, Independence and Product Measure Factorization, product measure, Proof sketch:, Existence and Uniqueness of Product Measure, Theorem (Tonelli).
- References: characteristic-functions, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure, math/lebesgue-integral, math/regular-conditional-probability

## Entity: radon-nikodym
- Title: Radon-Nikodym Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: Absolute Continuity, Extensions:, absolute continuity, See also:, σ-finiteness:, Theorem., Proof sketch (Hilbert space method)., The Radon-Nikodym Theorem, Radon-Nikodym multiplicative functional, $\nu$-almost everywhere, Duality of $L^p$ Spaces, market price of risk, Applications in Quantitative Finance, Uniqueness:, Essential properties:
- References: finance/girsanov-semimartingales, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optimal-transport
- Backlinks: math/differentiation-of-measures, math/hausdorff-measure, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/signed-measures, measure-theory

## Entity: math/regular-conditional-probability
- Title: Regular Conditional Probability
- Category: Measure Theory
- Language: en
- Key Concepts: likelihood kernel, Conditional Independence and Bayes' Theorem, Disintegration of Measures, Theorem (Borel):, Measurability in the second argument, Markov Kernels and Stochastic Processes, conditional probability kernel, Probability measure in the first argument, The Borel Isomorphism Theorem, Markov kernel, Theorem (Disintegration on Polish Spaces):, Regular conditional probability, Markov processes, regular version of the conditional probability, measure disintegration
- References: math/conditional-expectation-sigma, math/density-processes, math/kolmogorov-probability-axioms, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/signed-measures
- Title: Signed Measures and Decomposition Theorems
- Category: Measure Theory
- Language: en
- Key Concepts: Riesz representation theorem, Jordan Decomposition, Theorem (Hahn)., Chain rule, Radon–Nikodym Theorem for Signed Measures, Theorem (Jordan)., [[absolute-continuity-process-measures|Absolute Continuity of Processes and Measures]], Density processes, Remark on uniqueness, measure change process, [[lp-spaces|$L^p$ Spaces]], Hahn decomposition, [[hellinger-processes|Hellinger Processes]], Complex Measures, absolutely continuous
- References: math/absolute-continuity-process-measures, math/contiguity-measures, math/density-processes, math/hellinger-processes, math/lebesgue-integral, math/lp-spaces, radon-nikodym

## Entity: math/sigma-algebra-measurability
- Title: σ-Algebras and Measurability
- Category: Measure Theory
- Language: en
- Key Concepts: Examples., Closure under complements, Dynkin's π-λ systems, σ-algebra, filtration, measurable, Measurable functions, Trivial σ-algebra, strictly before, Stochastic integral, Related Articles, every, algebra, random variable, Generated σ-algebra
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms
- Backlinks: course-math-for-ai, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/conditional-expectation-sigma, math/differentiation-of-measures, math/discrete-martingales, math/doob-meyer-decomposition, math/hausdorff-measure, math/hellinger-processes, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/topology-basics, measure-theory, radon-nikodym

## Entity: cross-impact
- Title: Cross-Impact Models
- Category: Microstructure
- Language: en
- Key Concepts: Diagonal elements, Related Topics, Direct Impact, eigen-space, ETF Arbitrage, Positive Semi-Definite (PSD), Off-diagonal elements, Cross-Impact Models in Microstructure, Mathematical Formulation, The No-Arbitrage Condition, Cross-Impact Matrix, Eigen-Impact and Risk Models, Sector factors, The Mechanism of Cross-Impact, Market factor
- References: eigenvalues-eigenvectors, finance/random-matrix-theory, kyle-model, market-impact, optimal-execution
- Backlinks: lead-lag-analysis, market-impact, multivariate-hawkes

## Entity: finance/dark-pools
- Title: Dark Pools and Market Fragmentation
- Category: Microstructure
- Language: en
- Key Concepts: MiFID II Double Volume Cap (EU), Types of Dark Pools, Dark Pools and Market Fragmentation, Related Articles, Dark Pools, Implementation, Market Fragmentation, Herfindahl-Hirschman Index
- References: finance/kyle-lambda, finance/pin-easley-ohara, optimal-execution, vpin

## Entity: deep-lob
- Title: Deep LOB (Order Book CNNs)
- Category: Microstructure
- Language: en
- Key Concepts: Inception Modules (CNNs), LSTMs, Liquidity Void Detection, The Network Architecture, Related Topics, Why it Dominates Handcrafted Features, The Order Book as an Image, Spoofing Detection, Limit Order Book (LOB), Latency, Deep LOB, Deep LOB: Convolutional Networks for the Order Book, FPGAs, Visualization: The CNN sliding over LOB, Stationarity
- References: finance/order-flow-imbalance, modern-quantization, queue-reactive-models
- Backlinks: market-microstructure

## Entity: glosten-milgrom
- Title: Glosten-Milgrom Model
- Category: Microstructure
- Language: en
- Key Concepts: Noise, Related Topics, Key Takeaways, The Bid-Ask Spread, Informed, The Mathematical Mechanism, Bid-Ask Spread, The Core Intuition, sell, bid-ask spread, Ask Price ($P_A$), Visualization: Spread and Information, Liquidity Externalities, Bid Price ($P_B$), buy
- References: kyle-model, vpin
- Backlinks: latency-arbitrage, roll-model, spread, vpin

## Entity: lead-lag-analysis
- Title: High-Frequency Lead-Lag Analysis
- Category: Microstructure
- Language: en
- Key Concepts: Hayashi-Yoshida (HY) Estimator, The Epps Effect, Lead-Lag Analysis, Order Flow Execution, Negative $\theta$, HMM Regime Detection, High-Frequency Lead-Lag Analysis, Why Citadel cares, Related Topics, Finding the Lag ($\theta$), Positive $\theta$, Visualization: Lag Peak, Mathematical Detection: The Hayashi-Yoshida Estimator, Latency Arbitrage, Cross-Correlation Function
- References: cross-impact, hmm-particle-filters, latency-arbitrage, vpin
- Backlinks: multivariate-hawkes

## Entity: finance/kyle-lambda
- Title: Kyle's Lambda: The Price Impact Coefficient
- Category: Microstructure
- Language: en
- Key Concepts: Multi-Period Extension, Market-maker, Market depth, Equilibrium $\lambda$, Related Articles, Insider, Hasbrouck's (1991) Information Share, Kyle's Model (1985), Noise traders, Kyle's Lambda, Almgren-Chriss Impact Decomposition, Applications, market depth decreases toward the close, Extensions, basis points per million USD
- References: amihud-illiquidity, avellaneda-stoikov, finance/order-flow-imbalance, optimal-execution, vpin
- Backlinks: finance/dark-pools, finance/order-flow-imbalance, finance/pin-easley-ohara, finance/repo-market-systemic, finance/vwap-twap, market-microstructure, spread

## Entity: latency-arbitrage
- Title: Latency Arbitrage and Frequent Batch Auctions
- Category: Microstructure
- Language: en
- Key Concepts: The Flaw of Continuous Time, widening the bid-ask spread, Related Topics, footrace, Removes the Liquidity Tax, single clearing price, Frequent Batch Auctions, Latency Arbitrage and Frequent Batch Auctions, Continuous Limit Order Book (CLOB), Adverse Selection via Latency, The Solution: Frequent Batch Auctions (FBA), Visualization: The HFT Race, Latency Arbitrage, Why FBA fixes the market:, Kills the Footrace
- References: glosten-milgrom, smart-order-routing
- Backlinks: lead-lag-analysis, mev

## Entity: market-impact
- Title: Market Impact and Square-root Law
- Category: Microstructure
- Language: en
- Key Concepts: 2. The Square-root Law, Why is this surprising?, 3. Price Discovery as Physics, Cross-Impact, square root, Temporary Impact, Visualization: Impact vs. Order Size, Information Discovery, Price Discovery, 1. Permanent vs. Temporary Impact, Incoherent, 4. Impact in Advanced Trading, Square-root Law, Permanent Impact, Cross-Impact Matrix
- References: cross-impact, lob-propagators, optimal-execution, smart-order-routing, vpin
- Backlinks: cross-impact, kyle-model, lob-propagators, market-microstructure, spread

## Entity: lob-propagators
- Title: Mechanical Price Discovery: Propagators
- Category: Microstructure
- Language: en
- Key Concepts: Propagator function, Propagator models, The Meaning of G(τ), Related Topics, Immediate Impact, The Efficiency Condition, transient and mechanical, sign of the trade, Visualization: Response to a Trade, mechanical, Permanent Impact, Mean Reversion (Decay), Mechanical vs. Informational, Mechanical Price Discovery and Propagator Models, The Propagator Equation
- References: finance/hawkes-process, market-impact
- Backlinks: market-impact, queue-reactive-models

## Entity: multivariate-hawkes
- Title: Multivariate Hawkes Processes
- Category: Microstructure
- Language: en
- Key Concepts: Visualization: The Excitation Impulse, Excitation Matrix, Diagonal elements ($\alpha_{ii}$), Related Topics, The Cross-Excitation Network, Application in Algorithmic Trading, Market Making, Multivariate Hawkes Process, cross-excitation, Multivariate Hawkes Processes: Micro-Contagion, Flash Crash Detection, Off-diagonal elements ($\alpha_{ij}$), Micro-Price Prediction, The Intensity Matrix
- References: cross-impact, finance/hawkes-process, lead-lag-analysis

## Entity: liquidation-signals
- Title: Optimal Liquidation with Alpha Signals
- Category: Microstructure
- Language: en
- Key Concepts: Urgency, LOB Imbalance, Cross-Asset Signals, Visualization: Signal-Driven Slicing, Optimal Liquidation with Signals, Related Topics, The Augmented Objective Function, Optimal Liquidation with Alpha Signals, Opportunistic Execution, Key Signals used in Modern Desks, Trade Flow (Hawkes), Alpha Signals, The Optimal Strategy: Drift-Adjusted Schedulling
- References: finance/order-flow-imbalance, optimal-execution, vpin

## Entity: finance/order-flow-imbalance
- Title: Order Flow Imbalance and Microprice
- Category: Microstructure
- Language: en
- Key Concepts: Predictive Performance, Microprice, Spread-Normalized Skew, Related Articles, Order Flow Imbalance and Microprice, LOB-Based Definition, Order Flow Imbalance (OFI), Stoikov's Generalised Microprice (2018), Motivation, Predictive Model, Multi-Level OFI, Implementation, Order Flow Imbalance
- References: avellaneda-stoikov, finance/hawkes-process, finance/kyle-lambda, lob-prediction, vpin
- Backlinks: deep-lob, finance/kyle-lambda, finance/vwap-twap, liquidation-signals, market-microstructure, queue-reactive-models

## Entity: vpin
- Title: Order Flow Toxicity and VPIN
- Category: Microstructure
- Language: en
- Key Concepts: Optimal Execution, Noise Traders, Regime Detection, Informed Traders, "Volume Time.", 3. Interpretation and Usage, Visualization: Toxicity vs. Price, 2. VPIN: The Mechanism, Order Flow Toxicity, 4. Why it Matters for AI and HFT, The Flash Crash (2010), B. Order Imbalance, VPIN, High VPIN (> 0.8), 1. The Informed Trading Risk
- References: finance/pin-easley-ohara, glosten-milgrom, hmm-particle-filters, optimal-execution
- Backlinks: finance/dark-pools, finance/kyle-lambda, finance/order-flow-imbalance, finance/pin-easley-ohara, glosten-milgrom, kyle-model, lead-lag-analysis, liquidation-signals, market-impact, optimal-execution, roll-model

## Entity: finance/pin-easley-ohara
- Title: PIN: Probability of Informed Trading
- Category: Microstructure
- Language: en
- Key Concepts: PIN, Related Articles, PIN (Probability of Informed Trading), EKOP Model, PIN: Probability of Informed Trading, Single-day likelihood, PIN vs VPIN, Game structure:, Implementation
- References: finance/kyle-lambda, roll-model, vpin
- Backlinks: finance/dark-pools, market-microstructure, vpin

## Entity: queue-reactive-models
- Title: Queue-Reactive Models (LOB Dynamics)
- Category: Microstructure
- Language: en
- Key Concepts: Queue-Reactive Models of the Limit Order Book, The Micro-Price, Why HFTs Use It, Related Topics, Micro-Price, Limit Order Book (LOB), Market Making, The Physics of the Queue, Market Orders, Visualization: Transition Intensities, Cancellations, these rates depend strongly on the current size of the queues, Limit Orders (Arrivals), Queue-Reactive Models, The "Reactive" Insight
- References: finance/hawkes-process, finance/order-flow-imbalance, lob-propagators
- Backlinks: deep-lob

## Entity: smart-order-routing
- Title: Smart Order Routing (SOR)
- Category: Microstructure
- Language: en
- Key Concepts: SOR in Decentralized Finance (DeFi), Related Topics, Dark Pools, slippage, Liquidity Aggregation:, Multi-hop Paths:, How SOR Works, Smart Order Routing (SOR), Dynamic Execution:, Price & Volume Analysis:, MEV Protection:, Gas Optimization:, SOR in Traditional Finance (CeFi), Best Execution
- References: market-microstructure
- Backlinks: amm-mechanics, asset-tokenization, cedefi-mechanics, course-cedefi, cross-chain-interop, latency-arbitrage, market-impact, mev, yield-aggregators

## Entity: kyle-model
- Title: The Kyle Model
- Category: Microstructure
- Language: en
- Key Concepts: informed trader, Market Depth, Related Topics, Visualization: Insider Hiding, The Equilibrium Solution, Noise Traders, The Kyle Model: Strategic Informed Trading, slowly and linearly, The Three Players, Kyle's Lambda ($\lambda$), market liquidity, Market Maker (MM), Informed Trader, Price Discovery, Strategic Slowing
- References: market-impact, optimal-execution, vpin
- Backlinks: cross-impact, glosten-milgrom

## Entity: roll-model
- Title: The Roll Model
- Category: Microstructure
- Language: en
- Key Concepts: Informed Trading, negatively correlated, Effective Spread, Low-Frequency Data, The Roll Model: Estimating the Effective Spread, 2. The Mathematical Derivation, 3. Why it Matters, Related Topics, Liquidity Proxy, 4. Limitations in Modern Markets, 1. The Bid-Ask Bounce, Zero Covariance, effective bid-ask spread, Roll Estimator, Hidden Costs
- References: amihud-illiquidity, glosten-milgrom, vpin
- Backlinks: finance/pin-easley-ohara

## Entity: finance/vwap-twap
- Title: VWAP and TWAP Execution Algorithms
- Category: Microstructure
- Language: en
- Key Concepts: Market VWAP, Participation algorithm, Related Articles, VWAP (Volume-Weighted Average Price), VWAP and TWAP Execution Algorithms, VWAP, TWAP (Time-Weighted Average Price), Implementation Shortfall, TWAP, Implementation
- References: avellaneda-stoikov, finance/kyle-lambda, finance/order-flow-imbalance, optimal-execution

## Entity: kuramoto-model
- Title: Kuramoto Model
- Category: Nonlinear Dynamics
- Language: en
- Key Concepts: extreme synchronization, Overview, Kuramoto Model, Mathematical Framework, Finance, Incoherence, Visualization of Synchronization, complex order parameter, 1. Artificial Kuramoto Oscillatory Neurons (AKOrN), 2. Systemic Risk, phase transition, coupling strength, Finance Applications, 3. Solving Combinatorial Problems, Artificial Intelligence
- References: ai-physics/hamiltonian-nn, graph-theory, pinns, stochastic-processes

## Entity: conjugate-gradient
- Title: Conjugate Gradient Method
- Category: Numerical Methods
- Language: en
- Key Concepts: Mechanism, Overview

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
- Key Concepts: RK4, Overview

## Entity: dropout-math
- Title: Dropout Math
- Category: Optimization
- Language: en
- Key Concepts: Mechanism, Overview

## Entity: momentum-optimization
- Title: Momentum in Optimization
- Category: Optimization
- Language: en
- Key Concepts: Overview, Update Rule

## Entity: regularization-math
- Title: Regularization
- Category: Optimization
- Language: en
- Key Concepts: L1 and L2, L2 (Ridge):, Overview, L1 (Lasso):

## Entity: sgd-variants
- Title: Stochastic Gradient Descent
- Category: Optimization
- Language: en
- Key Concepts: Adam:, Variants, Vanilla SGD:, RMSProp:, Overview
- References: convex-optimization

## Entity: weight-initialization
- Title: Weight Initialization
- Category: Optimization
- Language: en
- Key Concepts: Techniques, Xavier/Glorot Initialization:, He (Kaiming) Initialization:, Overview

## Entity: ads-cft
- Title: AdS/CFT & Holographic Principle
- Category: Physics
- Language: en
- Key Concepts: AdS/CFT, Anti-de Sitter space, The holographic idea, Maldacena's conjecture, Why AdS/CFT is trusted, Related Topics, type IIB string theory on AdS$_5 \times S^5$, Beyond AdS: celestial holography, entanglement [[gravitational-entropy|entropy]], holographic principle, $\mathcal N = 4$ super Yang-Mills theory with gauge group $SU(N)$, [[celestial-holography]], Impact, AdS/CFT & Holographic Principle, timelike boundary
- References: black-hole-soft-hair, bms-group, celestial-holography, conformal-field-theory, general-relativity, gravitational-entropy, hawking-radiation, information-paradox, large-gauge-transformations, pasterski-triangle, soft-theorems
- Backlinks: black-hole-thermodynamics, gravitational-entropy, hawking-radiation, information-paradox

## Entity: anomalies
- Title: Anomalies
- Category: Physics
- Language: en
- Key Concepts: exact, Why anomalies matter, Gravitational and mixed anomalies, Spontaneously, Anomalously, anomaly matching, Scale / trace anomaly, Explicitly, global, The chiral anomaly, non-renormalisation theorem, Anomaly matching and 't Hooft's constraint, anomaly, The general picture, anomaly-free
- References: gauge-theory-yang-mills, goldstone-modes, noether-theorem, path-integral, renormalization-group, ward-identities
- Backlinks: math/banach-tarski, renormalization-group

## Entity: asymptotic-spacetime
- Title: Asymptotic Spacetime
- Category: Physics
- Language: en
- Key Concepts: Vacuum degeneracy, Physical Interpretation, Key Properties, Bondi-Sachs mass loss, Visualization, See Also, Mathematical Formulation, Asymptotic Spacetime, Peeling property, Connections to Information Theory & Holography, ADM mass, Conformal structure, Theoretical Foundation
- References: asymptotic-symmetries, bms-group, celestial-holography, math/differential-geometry
- Backlinks: gravitational-waves-gr, math/non-euclidean-geometry, scattering-amplitudes

## Entity: asymptotic-symmetries
- Title: Asymptotic Symmetries
- Category: Physics
- Language: en
- Key Concepts: Superrotation charges, Physical Interpretation, Asymptotic Symmetries, Key Properties, Infinite vacuum degeneracy, Visualization, See Also, Mathematical Formulation, Electromagnetic analogy, Matching conditions, Connections to Information Theory & Holography, Large vs. small gauge transformations, Theoretical Foundation
- References: bms-group, celestial-holography, soft-theorems
- Backlinks: asymptotic-spacetime, black-hole-soft-hair, bms-group, celestial-holography, goldstone-modes, group-theory, information-paradox, large-gauge-transformations, noether-theorem, pasterski-triangle, pauli-exclusion-quantization, soft-theorems, ward-identities

## Entity: bms-group
- Title: BMS Group
- Category: Physics
- Language: en
- Key Concepts: BMS Group, Prerequisites, Physical Interpretation, Ward identity = Soft theorem, Key Properties, Infinite vacuum degeneracy, Memory effect, Goldstone interpretation, Visualization, Celestial sphere action, Mathematical Formulation, See Also, Connections to Information Theory & Holography, Theoretical Foundation
- References: asymptotic-symmetries, celestial-holography, group-theory, pasterski-triangle
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, conformal-field-theory, gravitational-waves-gr, group-theory, large-gauge-transformations, math/non-euclidean-geometry, noether-theorem, pasterski-triangle, spin-memory, ward-identities

## Entity: information-paradox
- Title: Black Hole Information Paradox
- Category: Physics
- Language: en
- Key Concepts: black hole information paradox, Remnants., Replica wormholes and the island formula, Statement of the paradox, Candidate resolutions, Related Topics, Black Hole Information Paradox, Open questions, Black hole complementarity, Page time, The island formula, unitary, Information is lost., Firewall, Why it matters
- References: ads-cft, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, general-relativity, gravitational-entropy, hawking-radiation, pasterski-triangle, path-integral, qft-basic
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, hawking-radiation, large-gauge-transformations, math/godel-incompleteness

## Entity: black-hole-soft-hair
- Title: Black Hole Soft Hair
- Category: Physics
- Language: en
- Key Concepts: Prerequisites, Limitations, Physical Interpretation, The Area Law of [[gravitational-entropy|Entropy]], Key Properties, See Also, Black Hole Soft Hair, Mathematical Formulation, Zero energy, Infinite degeneracy, Electromagnetic hair, Visualization: [[gravitational-entropy|Entropy]] Scaling, Connections to Information Theory & Holography, Horizon vs. infinity, Theoretical Foundation
- References: asymptotic-symmetries, bms-group, celestial-holography, gravitational-entropy, gravitational-memory, soft-theorems
- Backlinks: ads-cft, information-paradox, large-gauge-transformations, memory-effects, quantum-entanglement, spin-memory

## Entity: black-hole-thermodynamics
- Title: Black Hole Thermodynamics
- Category: Physics
- Language: en
- Key Concepts: 0th, 1st, The Penrose Process, Bekenstein-Hawking [[gravitational-entropy|Entropy]], Bekenstein-Hawking entropy, Entropy vs Mass Chart, ergosphere, Black Hole Thermodynamics, Hawking's Area Theorem (Second Law), The Firewall Paradox, holographic principle, Hawking Temperature, 3rd, The Four Laws of Black Hole Mechanics, Penrose process
- References: ads-cft, general-relativity, gravitational-entropy, gravitational-waves-gr, hawking-radiation, information-paradox
- Backlinks: ads-cft-deep, gravitational-entropy, hawking-radiation, quantum-information-entropy

## Entity: celestial-holography
- Title: Celestial Holography
- Category: Physics
- Language: en
- Key Concepts: Prerequisites, Physical Interpretation, Loop corrections, Soft theorems as Ward identities, Key Properties, Visualization, See Also, Lorentz = global conformal group, $w_{1+\infty}$ symmetry, Mathematical Formulation, Celestial Holography, Connections to Information Theory & Holography, Continuous spectrum, Theoretical Foundation
- References: asymptotic-symmetries, bms-group, conformal-field-theory, gravitational-entropy, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, bms-group, conformal-field-theory, gravitational-entropy, gravitational-waves-gr, group-theory, information-paradox, large-gauge-transformations, math/non-euclidean-geometry, pasterski-triangle, qft-basic, scattering-amplitudes, soft-theorems, spin-memory, wave-particle-duality

## Entity: conformal-field-theory
- Title: Conformal Field Theory (CFT)
- Category: Physics
- Language: en
- Key Concepts: Prerequisites, Unitarity bounds, Physical Interpretation, Conformal blocks, Conformal Field Theory (CFT), Key Properties, See Also, Mathematical Formulation, State-operator correspondence, Connections to Information Theory & Holography, Cardy formula, Modular invariance, Theoretical Foundation
- References: bms-group, celestial-holography, gravitational-entropy, group-theory, qft-basic, quantization, schrodinger-equation
- Backlinks: ads-cft, ads-cft-deep, celestial-holography, kan, renormalization-group, sle

## Entity: dirac-equation
- Title: Dirac Equation
- Category: Physics
- Language: en
- Key Concepts: As a field theory, Dirac spinor, Dirac's problem, Dirac Equation, Spinors and Lorentz transformations, left-handed, Coupling to gauge fields, Chirality and the Standard Model, Gyromagnetic ratio $g = 2$., Antimatter., quantum field, Spin $\tfrac{1}{2}$., positrons, Clifford algebra, Related Topics
- References: gauge-theory-yang-mills, maxwell-electromagnetism, pauli-exclusion-quantization, qft-basic, schrodinger-equation, special-relativity
- Backlinks: gauge-theory-yang-mills, maxwell-electromagnetism

## Entity: fokker-planck-equation
- Title: Fokker-Planck Equation
- Category: Physics
- Language: en
- Key Concepts: Application to option pricing, Boltzmann distribution, Spectral methods:, Kramers-Moyal expansion, Computational methods, Path integral representation, Fokker-Planck equation (FP), Fokker-Planck Equation, Derivation from the Kramers-Moyal expansion, probability current, Multidimensional generalization, backward Kolmogorov equation, heat equation, Forward and backward Kolmogorov equations, Finite differences:
- References: brownian-motion, geometric-brownian-motion, math/kolmogorov-equations-ctmc, ornstein-uhlenbeck-process, partial-differential-equations, path-integral, stochastic-differential-equations
- Backlinks: diffusion-models, feynman-kac, neural-operators, nonequilibrium-statmech

## Entity: gauge-theory-yang-mills
- Title: Gauge Theory & Yang-Mills
- Category: Physics
- Language: en
- Key Concepts: Why gauge theory is inevitable, Gauge theories, confines, Massless spin-1 particles must couple through a conserved current., The three forces of the Standard Model, Related Topics, Quantisation: Faddeev-Popov and BRST, covariant derivative, Asymptotic freedom and confinement, Non-abelian case: Yang-Mills, Renormalisability., From global to local symmetry, global, BRST symmetry, Gauge Theory & Yang-Mills
- References: dirac-equation, goldstone-modes, maxwell-electromagnetism, noether-theorem, path-integral, qft-basic, renormalization-group, ward-identities
- Backlinks: anomalies, connections-curvature, dirac-equation, large-gauge-transformations, lie-groups-algebras, maxwell-electromagnetism, renormalization-group, topological-phases

## Entity: goldstone-modes
- Title: Goldstone Modes
- Category: Physics
- Language: en
- Key Concepts: effective Lagrangian, Physical examples, Example., spontaneously broken, Nambu-Goldstone bosons, soft-pion theorem, Weinberg soft theorems, Goldstone's theorem, gauged, Effective field theory of Goldstones, Soft theorems and the asymptotic connection, pseudo-Goldstone bosons, non-linear sigma model, Goldstone modes of spontaneously broken large gauge transformations and BMS supertranslations, The Higgs mechanism: eating Goldstones
- References: asymptotic-symmetries, math/differential-geometry, noether-theorem, pasterski-triangle, qft-basic, soft-theorems, ward-identities
- Backlinks: anomalies, gauge-theory-yang-mills, large-gauge-transformations

## Entity: gravitational-entropy
- Title: Gravitational Entropy and Holography
- Category: Physics
- Language: en
- Key Concepts: The Island Formula, Covariant Entropy Bound (Bousso), Ryu-Takayanagi Formula, The Generalised Second Law, Holography Beyond AdS, not, light sheet, island, Bousso-Engelhardt, emergent spacetime from entanglement, quantum extremal surface, replica wormholes, Early times, After the Page time, The Holographic Principle
- References: ads-cft, black-hole-thermodynamics, celestial-holography, general-relativity, hawking-radiation, information-paradox
- Backlinks: ads-cft, black-hole-soft-hair, black-hole-thermodynamics, celestial-holography, conformal-field-theory, hawking-radiation, information-paradox, laws-of-thermodynamics, nonequilibrium-statmech, pauli-exclusion-quantization, quantum-entanglement, quantum-information-entropy, statistical-mechanics, uncertainty-principle

## Entity: gravitational-memory
- Title: Gravitational Memory
- Category: Physics
- Language: en
- Key Concepts: Prerequisites, Physical Interpretation, Two types, Spin memory, Supertranslation transition, Gravitational Memory, Key Properties, See Also, Mathematical Formulation, Detectable, Connections to Information Theory & Holography, DC offset, Theoretical Foundation
- References: gravitational-waves-gr, memory-effects, pasterski-triangle, soft-theorems
- Backlinks: black-hole-soft-hair, gravitational-waves-gr, memory-effects, spin-memory

## Entity: gravitational-waves-gr
- Title: Gravitational Waves & General Relativity
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, Speed, Two polarizations, Strain sensitivity, Key Properties, See Also, Quadrupole emission, Mathematical Formulation, Peeling, Gravitational Waves & General Relativity (GR), Connections to Information Theory & Holography, Theoretical Foundation
- References: asymptotic-spacetime, bms-group, celestial-holography, gravitational-memory, math/differential-geometry, pasterski-triangle
- Backlinks: black-hole-thermodynamics, gravitational-memory, hawking-radiation, math/non-euclidean-geometry

## Entity: group-theory
- Title: Group Theory
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, Applications in Machine Learning, Group Theory in Physics, Key Properties, Visualization, See Also, Mathematical Formulation, Peter-Weyl theorem, Representation theory of the Poincaré group, Spontaneous symmetry breaking, Theoretical Foundation, Connections to Information Theory & Holography, Schur's lemma, Anomalies
- References: asymptotic-symmetries, bms-group, celestial-holography, equivariant-nn, math/differential-geometry, quantum-entanglement
- Backlinks: bms-group, conformal-field-theory, equivariant-nn, noether-theorem, qft-basic

## Entity: hawking-radiation
- Title: Hawking Radiation
- Category: Physics
- Language: en
- Key Concepts: The Bogoliubov Transformation, Out-modes, Black Hole Evaporation, Connection to the Unruh Effect, The Trans-Planckian Problem, In-modes, Related Topics, trans-Planckian problem, Hawking Temperature, Planck spectrum, Hawking Radiation, Virtual Pair Production Near the Horizon, Why This Matters, evaporation timescale, Unruh effect
- References: ads-cft, black-hole-thermodynamics, general-relativity, gravitational-entropy, gravitational-waves-gr, information-paradox
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, information-paradox

## Entity: uncertainty-principle
- Title: Heisenberg Uncertainty Principle
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, Heisenberg Uncertainty Principle, Zero-point energy, Key Properties, Generalized uncertainty principle (GUP), See Also, Mathematical Formulation, Measurement backaction, Canonical pairs, Connections to Information Theory & Holography, Fourier duality, Theoretical Foundation
- References: gravitational-entropy, quantum-entanglement, schrodinger-equation, wave-particle-duality
- Backlinks: wave-particle-duality

## Entity: kolmogorov-arnold-theorem
- Title: Kolmogorov-Arnold Theorem
- Category: Physics
- Language: en
- Key Concepts: not smooth, Physical applications., Implications for neural networks, Relation to approximation theory, Decomposition of complexity., Interpretation., Kolmogorov-Arnold theorem, Kolmogorov-Arnold Theorem, negative answer to Hilbert's thirteenth problem, a number of neurons that grows with accuracy, Limitations, Non-smoothness of inner functions., Symbolic regression., Theorem (Kolmogorov, 1957; Arnold, 1957)., independently of $f$
- References: finance/spectral-analysis, kan, learnable-activations, partial-differential-equations, pinns, transformer-architecture
- Backlinks: kan, learnable-activations

## Entity: large-gauge-transformations
- Title: Large Gauge Transformations
- Category: Physics
- Language: en
- Key Concepts: Spontaneous symmetry breaking of large gauge, large, small, Large Gauge Transformations, Related Topics, Asymptotic charges, spontaneously broken, Large gauge in non-abelian theories and instantons, Small vs. large, Ward identities = soft theorems, Large gauge on the horizon: soft hair, instantons, Large gauge transformations, strong CP problem, asymptotic charges
- References: asymptotic-symmetries, black-hole-soft-hair, bms-group, celestial-holography, gauge-theory-yang-mills, goldstone-modes, information-paradox, memory-effects, noether-theorem, pasterski-triangle, soft-theorems, ward-identities
- Backlinks: ads-cft

## Entity: maxwell-electromagnetism
- Title: Maxwell's Electromagnetism
- Category: Physics
- Language: en
- Key Concepts: The equations, displacement current, Liénard-Wiechert potentials, Related Topics, Potentials and gauge invariance, Maxwell's equations, $U(1)$ gauge symmetry, Lorentz force, Larmor power, quantum electrodynamics (QED), From Maxwell to QED, Lagrangian, Bianchi identity, Maxwell's Electromagnetism, Covariant formulation
- References: dirac-equation, gauge-theory-yang-mills, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes, soft-theorems, special-relativity, ward-identities
- Backlinks: dirac-equation, gauge-theory-yang-mills

## Entity: memory-effects
- Title: Memory Effects
- Category: Physics
- Language: en
- Key Concepts: Prerequisites, Physical Interpretation, Universality, Memory Effects, Key Properties, Visualization, Detectability, Mathematical Formulation, Vacuum transitions, See Also, Infrared origin, Connections to Information Theory & Holography, Hierarchy, Theoretical Foundation
- References: black-hole-soft-hair, gravitational-memory, pasterski-triangle, soft-theorems, spin-memory
- Backlinks: gravitational-memory, large-gauge-transformations, spin-memory

## Entity: noether-theorem
- Title: Noether's Theorem
- Category: Physics
- Language: en
- Key Concepts: large gauge transformations, Global vs. local symmetries, Related Topics, Noether's theorem, Example: electric charge from global phase symmetry, Bianchi identities, Noether's Theorem, Statement, Ward identities, Example: energy from time-translation invariance, Quantum Noether, Ward-Takahashi identities, conserved current, global, The dictionary of symmetries and charges
- References: asymptotic-symmetries, bms-group, group-theory, hamiltonian-mechanics, lagrangian-mechanics, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, math/variational-calculus, maxwell-electromagnetism, path-integral, ward-identities

## Entity: partial-differential-equations
- Title: Partial Differential Equations
- Category: Physics
- Language: en
- Key Concepts: stiff, Spectral bias in PINNs:, Partial Differential Equations, Inverse problems, identifying, Canonical equations of physics, Analytic., Solution methods, Navier-Stokes, Hyperbolic, Mesh-based vs mesh-free., Neumann, Stiffness and multiscale structure, Finite differences (FDM)., Boundary and initial conditions
- References: automatic-differentiation, brownian-motion, finance/fractional-fokker-planck, pinns, schrodinger-equation
- Backlinks: automatic-differentiation, convertible-bonds, feynman-kac, fokker-planck-equation, fourier-neural-operators, fredholm-theory, hydrodynamic-limits, kolmogorov-arnold-theorem, math/harmonic-analysis, math/spdes, math/spectral-theory-operators, mckean-vlasov-sdes, neural-operators, numerical-pde-finance, pinns, risk-neutral-valuation, schwartz-distributions

## Entity: pasterski-triangle
- Title: Pasterski's Triangle Theory
- Category: Physics
- Language: en
- Key Concepts: Prerequisites, Sub-subleading, Physical Interpretation, Leg 2 — Asymptotic Symmetries $\leftrightarrow$ Memory Effects (vacuum transitions):, Leg 1 — Soft Theorems $\leftrightarrow$ Asymptotic Symmetries (Ward identities):, Key Properties, Quantum level, Universal, See Also, Cross-theory, Subleading triangle, Mathematical Formulation, Pasterski's Triangle Theory, Leg 3 — Memory Effects $\leftrightarrow$ Soft Theorems (Fourier transform):, Connections to Information Theory & Holography
- References: asymptotic-symmetries, bms-group, celestial-holography, scattering-amplitudes, soft-theorems, spin-memory
- Backlinks: ads-cft, bms-group, goldstone-modes, gravitational-memory, gravitational-waves-gr, information-paradox, large-gauge-transformations, memory-effects, soft-theorems, ward-identities

## Entity: path-integral
- Title: Path Integral Formulation
- Category: Physics
- Language: en
- Key Concepts: Feynman diagrams, Euclidean path integral and statistical mechanics, Non-perturbative physics., path integral formulation, Why the path integral, classical trajectory, lattice QFT, partition function, The basic idea, Field theory, ghost fields, Gauge theories., Faddeev-Popov procedure, The classical limit, Caveats
- References: hamiltonian-mechanics, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes
- Backlinks: anomalies, feynman-kac, fokker-planck-equation, gauge-theory-yang-mills, information-paradox, path-integrals, renormalization-group, statistical-mechanics, ward-identities

## Entity: pauli-exclusion-quantization
- Title: Pauli Exclusion Principle & Quantization
- Category: Physics
- Language: en
- Key Concepts: Anyons, Physical Interpretation, Pauli Exclusion Principle & [[quantization]], Exchange interaction, Key Properties, See Also, Mathematical Formulation, Cooper pairs, Theoretical Foundation, Connections to Information Theory & Holography, Atomic shell structure, Fermi pressure
- References: asymptotic-symmetries, gravitational-entropy, quantization, quantum-entanglement
- Backlinks: dirac-equation, qft-basic

## Entity: qft-basic
- Title: QFT: Basic Level
- Category: Physics
- Language: en
- Key Concepts: Prerequisites, Physical Interpretation, CPT theorem, Connections to Information Theory & Holography, Key Properties, Renormalization, See Also, Mathematical Formulation, Quantum Field Theory (QFT): Basic Level, Spontaneous symmetry breaking, Crossing symmetry, Optical theorem, Theoretical Foundation
- References: celestial-holography, finance/monte-carlo-method, group-theory, pauli-exclusion-quantization, quantization, scattering-amplitudes, schrodinger-equation, wave-particle-duality
- Backlinks: conformal-field-theory, dirac-equation, equivariant-nn, finance/monte-carlo-method, gauge-theory-yang-mills, goldstone-modes, information-paradox, kan, maxwell-electromagnetism, path-integral, quantum-mechanics, renormalization-group, statistical-mechanics, ward-identities

## Entity: quantum-entanglement
- Title: Quantum Entanglement
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, Quantum Entanglement, Entanglement distillation, Key Properties, Non-locality, See Also, Mathematical Formulation, Monogamy, Connections to Information Theory & Holography, Area law, Entanglement as resource, Theoretical Foundation
- References: black-hole-soft-hair, finance/random-matrix-theory, finance/shannon-entropy, gravitational-entropy, schrodinger-equation, superposition-collapse
- Backlinks: finance/random-matrix-theory, finance/shannon-entropy, finance/zeta-field, group-theory, linear-spaces-basis, pauli-exclusion-quantization, quantum-information-entropy, quantum-mechanics, superposition-collapse, uncertainty-principle

## Entity: renormalization-group
- Title: Renormalization Group
- Category: Physics
- Language: en
- Key Concepts: universality, QCD., beta function, Renormalization Group, asymptotic freedom, Running couplings in QFT, Wilsonian RG transformation, non-renormalisable, Continuum limits and effective field theory, Irrelevant, Asymptotic safety and the space of theories, Scalar $\phi^4$., effective field theories, The Callan-Symanzik equation, renormalization group
- References: anomalies, conformal-field-theory, gauge-theory-yang-mills, math/spectral-theory-operators, path-integral, qft-basic, ward-identities
- Backlinks: anomalies, effective-field-theory, gauge-theory-yang-mills, many-body-tensor-networks

## Entity: scattering-amplitudes
- Title: Scattering Amplitudes & S-matrix
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, BCJ duality and double copy, Scattering Amplitudes & S-matrix, Key Properties, Collinear limits, See Also, Mathematical Formulation, Color decomposition, On-shell methods, Connections to Information Theory & Holography, Soft limits, Theoretical Foundation
- References: asymptotic-spacetime, celestial-holography, soft-theorems
- Backlinks: celestial-holography, equivariant-nn, maxwell-electromagnetism, pasterski-triangle, path-integral, qft-basic, soft-theorems

## Entity: soft-theorems
- Title: Soft Theorems
- Category: Physics
- Language: en
- Key Concepts: Quantum corrections, Prerequisites, Physical Interpretation, Universality, Infrared divergences, Soft Theorems, Key Properties, Soft photon vs. graviton, See Also, Mathematical Formulation, Color, Connections to Information Theory & Holography, Theoretical Foundation
- References: asymptotic-symmetries, celestial-holography, pasterski-triangle, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-symmetries, black-hole-soft-hair, goldstone-modes, gravitational-memory, large-gauge-transformations, maxwell-electromagnetism, memory-effects, noether-theorem, pasterski-triangle, scattering-amplitudes, ward-identities

## Entity: spin-memory
- Title: Spin Memory
- Category: Physics
- Language: en
- Key Concepts: Spin Memory, Prerequisites, Physical Interpretation, Circular orbit detection, Subleading order, Angular momentum signature, Key Properties, See Also, Mathematical Formulation, Superrotation Ward identity, Amplitude, Connections to Information Theory & Holography, Theoretical Foundation
- References: black-hole-soft-hair, bms-group, celestial-holography, gravitational-memory, memory-effects
- Backlinks: memory-effects, pasterski-triangle

## Entity: statistical-mechanics
- Title: Statistical Mechanics
- Category: Physics
- Language: en
- Key Concepts: Summary, Grand canonical ensemble, Ensembles and fundamental distributions, [[gravitational-entropy|Entropy]] and information, Boltzmann distribution, Microcanonical ensemble, Introduction, Free energy minimization as unifying principle, The ergodic hypothesis, partition function, the macroscopic state of an equilibrium system is completely described by a probabilistic ensemble, Wick rotation, Boltzmann machines, Canonical ensemble, Annealing and optimization
- References: finance/shannon-entropy, gravitational-entropy, math/ergodic-theorems-birkhoff, path-integral, qft-basic
- Backlinks: bayesian-deep-learning, convergence-of-semimartingales, copulas, energy-based-models, freidlin-wentzell-theory, gaussian-processes, maximum-entropy, nonequilibrium-statmech, sle, variational-autoencoders, wentzell-freidlin

## Entity: superposition-collapse
- Title: Superposition & Collapse
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, Quantum Zeno effect, Pointer states, Superposition & Collapse, Key Properties, See Also, Mathematical Formulation, Macroscopic superpositions, No-cloning theorem, Linearity, Connections to Information Theory & Holography, Theoretical Foundation
- References: quantum-entanglement, schrodinger-equation
- Backlinks: quantum-entanglement

## Entity: ward-identities
- Title: Ward Identities
- Category: Physics
- Language: en
- Key Concepts: The basic identity, Unphysical polarisations of the photon decouple., From classical conservation to exact quantum identities, Slavnov-Taylor identities, QED Ward-Takahashi identity, Gauge anomalies, Conformal / trace anomaly, Subleading soft-graviton theorem, Weinberg's soft-photon theorem, Weinberg's soft-graviton theorem, Ward Identities, anomaly, Asymptotic symmetries and soft theorems, Related Topics, every soft theorem in scattering is a Ward identity of an asymptotic symmetry
- References: asymptotic-symmetries, bms-group, noether-theorem, pasterski-triangle, path-integral, qft-basic, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, maxwell-electromagnetism, renormalization-group

## Entity: wave-particle-duality
- Title: Wave-Particle Duality
- Category: Physics
- Language: en
- Key Concepts: Coherence length, Physical Interpretation, Key Properties, Delayed-choice experiments, Complementarity, See Also, Mathematical Formulation, Thermal de Broglie wavelength, Matter-wave interferometry, Connections to Information Theory & Holography, Wave-Particle Duality, Theoretical Foundation
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
- Key Concepts: Zeroth Law:, The Four Laws, Third Law:, Second Law:, First Law (Conservation of Energy):
- References: gravitational-entropy

## Entity: maxwells-equations
- Title: Maxwell's Equations
- Category: Physics Foundations
- Language: en
- Key Concepts: Gauss's Law for Magnetism:, Faraday's Law:, Gauss's Law:, Ampère-Maxwell Law:, Overview, Differential Form
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
- Key Concepts: Bayesian Kelly Criterion and Parameter Uncertainty, mathematical justification for Fractional Kelly, Related Topics, Posterior Distribution, Fractional Kelly as a Heuristic, Visualization: The Kelly Cliff, expected growth across all possible values of $\mu$, The Bayesian Solution, The Flaw of Plug-in Estimates, Drawdown Control, Bayesian Kelly
- References: kelly-criterion, merton-portfolio, variational-inference
- Backlinks: bayesian-inference, kelly-jump-diffusion

## Entity: entropy-pooling
- Title: Entropy Pooling (Meucci)
- Category: Portfolio
- Language: en
- Key Concepts: Stress Testing, Prior, Related Topics, Posterior, The Optimization Problem, Visualization: Shifting the Distribution, [[shannon-entropy|Entropy]] Pooling, The Core Concept: Minimum Relative [[shannon-entropy|Entropy]], linear, [[shannon-entropy|Entropy]] Pooling: Advanced Portfolio Construction, Ranking Signals, Kullback-Leibler (KL) Divergence, Convex Optimization, Why Tier-1 Funds Use It, Options and Non-Linearities
- References: bayesian-black-litterman, convex-optimization-trading, finance/shannon-entropy, financial-entropy
- Backlinks: information-geometry-finance

## Entity: kelly-jump-diffusion
- Title: Kelly Criterion with Jump-Diffusion
- Category: Portfolio
- Language: en
- Key Concepts: Geometric Brownian Motion (GBM), The Jump-Diffusion Setup, Kelly Criterion in Jump-Diffusion Models, jumps, Related Topics, Jump-Diffusion Kelly, The Danger of Continuous Leverage, Visualization: The Jump-Aware Curve, Jumps, You are bankrupt., Why Funds Use Fractional Kelly, The Modified Kelly Formula, The Bankruptcy Constraint, negative infinity
- References: bayesian-kelly, frtb-es, kelly-criterion, merton-jump-diffusion, merton-portfolio

## Entity: merton-portfolio
- Title: Merton's Portfolio Problem
- Category: Portfolio
- Language: en
- Key Concepts: Risky Asset (Stock), constant, Solving via the HJB Equation, Related Topics, Risk-free Bond, Myopic Behavior, Kelly Criterion, Merton's Portfolio Problem, Risk Premium, Kelly Criterion Limit, Hamilton-Jacobi-Bellman (HJB) Equation, The Mathematical Setup, The Elegant Solution, Key Insights from the Formula:, Visualization: The Optimal Path
- References: geometric-brownian-motion, kelly-criterion, stochastic-control, stochastic-differential-equations
- Backlinks: bayesian-kelly, kelly-jump-diffusion, path-integral-control

## Entity: nonlinear-shrinkage
- Title: Nonlinear Shrinkage of Covariance
- Category: Portfolio
- Language: en
- Key Concepts: Hilbert Transform, Linear Shrinkage (2004), each eigenvalue, Related Topics, Random Matrix Theory (RMT), Nonlinear Shrinkage (2017), Robustness, Linear vs. Nonlinear Shrinkage, Why Citadel Uses It, The Mathematical Mechanism, Nonlinear Shrinkage of Covariance (Ledoit-Wolf), Visualization: Eigenvalue Cleaning, The Eigenvalue Distortion (Marchenko-Pastur), sample covariance matrix, Stability
- References: eigenvalues-eigenvectors, finance/markowitz-mean-variance, finance/random-matrix-theory, math/spectral-theory-operators

## Entity: universal-portfolios
- Title: Universal Portfolios
- Category: Portfolio
- Language: en
- Key Concepts: The Problem Setup, Universal Portfolios (Cover's Algorithm), Related Topics, Constant-Rebalanced Portfolio (CRP), The Guarantee (No Regret), ensemble method, Practical Limitations, Visualization: Catching the Optimum, best constant-rebalanced portfolio (BCRP), MCMC sampling, Cover's Algorithm, sublinear regret, Universal Portfolios
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
- Key Concepts: Portfolio Optimization & Black-Litterman Model, See Also, 1. Black-Litterman Formula
- References: convex-optimization-in-trading, course-quant-trading, quant-risk-management-var-cvar
- Backlinks: convex-optimization-in-trading, copula-models-and-tail-dependence, factor-investing-and-fama-french, portfolio-risk-decomposition-marginal-var

## Entity: finance/bs-market-self-financing
- Title: (B,S)-Market and Self-Financing Strategies
- Category: Pricing
- Language: en
- Key Concepts: Bank account, strategy (portfolio), Definition., The Model, capital, Self-Financing, Strategy and Capital, Related Articles, self-financing strategy, discrete stochastic integral, admissible, Connection to the broader theory, discounted, Admissibility, (B,S)-Market and Self-Financing Strategies
- References: brownian-motion, finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/self-similarity-fractality, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability, put-call-parity

## Entity: finance/apt-ross
- Title: Arbitrage Pricing Theory (APT)
- Category: Pricing
- Language: en
- Key Concepts: Weakness: choice of factors, Related Articles, uncorrelated across assets, alternative to [[capm|CAPM]], first, which, APT theorem (Ross 1976; Huberman 1982)., Main statement, Setup, Comparison with CAPM, Connection to large markets, Arbitrage Pricing Theory (APT), weaker but more universal, most assets, Proof (idea)
- References: fama-macbeth-regression, finance/alpha-stacking, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/markowitz-mean-variance

## Entity: finance/arbitrage-definition
- Title: Arbitrage and Its Absence
- Category: Pricing
- Language: en
- Key Concepts: arbitrage-free, NA1 / NUPBR (No Unbounded Profit with Bounded Risk), modelling axiom, Strengthenings and Generalizations, Related Articles, Arbitrage and Its Absence, Intuition, main filter, Via discounted increments., Via the set of attainable claims., Why bother: the first fundamental theorem, arbitrage opportunity, NFLVR (No Free Lunch with Vanishing Risk), Equivalent Formulations, continuous
- References: finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models
- Backlinks: cost-of-carry, finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/crr-model, finance/ftap-first-fundamental-theorem

## Entity: finance/asymptotic-arbitrage-large-markets
- Title: Asymptotic Arbitrage and Large Markets
- Category: Pricing
- Language: en
- Key Concepts: diversify in the limit, mutual contiguity, formally arbitrage-free, model convergence, Related Articles, Contiguity as a criterion, Connection to Ross's APT, contiguity, Model convergence and contiguity, asymptotic arbitrage, large financial market, equivalence, Theorem (Kabanov-Kramkov, 1994)., Definition (AA of the second kind)., asymptotic arbitrage of the first kind
- References: black-scholes, fama-macbeth-regression, finance/alpha-stacking, finance/arbitrage-definition, finance/crr-model, finance/ftap-first-fundamental-theorem
- Backlinks: finance/apt-ross, finance/arbitrage-definition, math/weak-convergence-prokhorov

## Entity: finance/asymptotic-expansion-finance
- Title: Asymptotic Expansions in Finance
- Category: Pricing
- Language: en
- Key Concepts: Large/Small Strike Asymptotics (Lee's Moment Formula), Analytic Greeks, Small Volatility Expansion, Asymptotic Expansions in Finance, Asymptotic and perturbation methods, Comparison of Methods, Heat Kernel Expansion, Fast calibration, Model intuition, Practical Applications, SABR implied volatility formula, Smile extrapolation, Small-Time Expansion for Local Volatility, geodesic volatility, asymptotic expansion in the vol-of-vol $\nu$ and time $T$
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/dupire-local-vol, finance/sabr-model, heston-model, manifold-learning
- Backlinks: finance/sabr-model

## Entity: avellaneda-stoikov
- Title: Avellaneda-Stoikov Model
- Category: Pricing
- Language: en
- Key Concepts: Skewing, Limitations & Extensions, The Reservation Price, spread income, Extensions:, HJB Equation, Guéant, Lehalle & Fernandez-Tapia (2013), Options Market Making, Reservation Price vs. Inventory, reservation price, Mathematical Framework, Bond Market Making, Crypto Market Making, Avellaneda-Stoikov model, Limitations:
- References: brownian-motion, cox-process, finance/monte-carlo-method, hidden-markov-models, optimal-execution
- Backlinks: brownian-motion, cox-process, finance/hidden-markov-models, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/order-flow-imbalance, finance/vwap-twap, market-microstructure, spread, stochastic-control

## Entity: finance/bachelier-formula
- Title: Bachelier Formula
- Category: Pricing
- Language: en
- Key Concepts: coexist, naturally, Historical significance, additive, Derivation, arithmetic Brownian motion, Bachelier as the "small-vol limit" of BS, Bachelier's model, revived, Bachelier Formula, Related Articles, can become negative, "everything in Black-Scholes is already in Bachelier", Comparison with Black-Scholes, April 2020 episode
- References: attention-mechanisms, black-scholes, brownian-motion, finance/black-scholes-derivations, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, geometric-brownian-motion
- Backlinks: blacks-model, finance/black-scholes-derivations, finance/efficient-market-hypothesis

## Entity: finance/barrier-asian-options
- Title: Barrier and Asian Options
- Category: Pricing
- Language: en
- Key Concepts: Asian Options, Exotic options, Down-and-Out Call, Related Articles, Barrier and Asian Options, Barrier Options, Arithmetic Asian Call, Geometric Asian, Barrier option types:, Rubinstein-Reiner Formula (Down-and-Out Call, $H < K$), Implementation
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/variance-gamma
- Backlinks: brownian-bridge, finance/upper-lower-hedging-prices

## Entity: blacks-model
- Title: Black's Model (1976)
- Category: Pricing
- Language: en
- Key Concepts: Energy markets, Black's Model for Swaptions, caplet, Normal (Bachelier) Variant, The Black Formula, Volatility quoting, Black's model, cap, Interest rate derivatives, Shifted Lognormal Model, shifted, Commodity options, Applications, Derivation Under the Forward Measure, payer swaption
- References: black-scholes, finance/bachelier-formula, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/sabr-model, finance/swaps, finance/volatility-surface, heston-model
- Backlinks: cost-of-carry, risk-neutral-valuation

## Entity: black-scholes
- Title: Black-Scholes Model
- Category: Pricing
- Language: en
- Key Concepts: Geometric Brownian Motion, Greeks, Volatility smile/skew, Limitations & Extensions, Extensions:, The Greeks, Constant volatility, Risk Management, Delta Hedging, Vol Surface Construction, Black-Scholes Model, Local volatility (Dupire, 1994), Closed-Form Pricing Formulas, Mathematical Framework, implied volatility
- References: brownian-motion, exotic-options, finance/monte-carlo-method, finance/sabr-model, geometric-brownian-motion, heston-model, numerical-pde-finance
- Backlinks: arma-models, automatic-differentiation, bayesian-black-litterman, blacks-model, brownian-motion, change-of-variables, convertible-bonds, convex-optimization-trading, deep-galerkin, dv01, fama-macbeth-regression, feynman-kac, finance/asymptotic-arbitrage-large-markets, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/barrier-asian-options, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/credit-risk-models, finance/crr-model, finance/delta-hedging-practice, finance/dispersion-trading, finance/energy-commodity-derivatives, finance/follmer-schweizer, finance/free-boundary-american, finance/girsanov-semimartingales, finance/heston-model, finance/levy-esscher-continuous, finance/libor-market-model, finance/longstaff-schwartz, finance/merton-jump-diffusion, finance/monte-carlo-method, finance/nelson-siegel-svensson, finance/optimal-stopping-american, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/stefan-problem-american, finance/swaps, finance/variance-swaps-vix, finance/volatility-surface, garman-kohlhagen, geometric-brownian-motion, greeks-options, lln-clt, math/martingale-representation, ml-options-pricing, model-free-rl-factors, multivariable-calculus, numeraire-invariant-hedging, numerical-pde-finance, option-strategies, ornstein-uhlenbeck-process, pinns, put-call-parity, regime-switching-factors, risk-neutral-valuation, sharpe-ratio-statistics, survival-risk-prediction, svi-model, taylor-series, ts-cs-factor-analysis, volatility-arbitrage, volatility-smile

## Entity: finance/bond-options-gaussian
- Title: Bond Options in Gaussian Models
- Category: Pricing
- Language: en
- Key Concepts: spot martingale measure, Bond Options in Gaussian Models, The Vasicek model, American bond option, Zero-coupon bond price, Bond option, The Hull-White model, observed zero-coupon yield curve, calibrated, Related Articles, American, discount rate, HJM framework, Connection to multi-factor models, Change of measure: the forward measure $T$
- References: black-scholes, brownian-motion, dv01, finance/cir-hull-white, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american
- Backlinks: finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/interest-rate-term-structure, finance/libor-market-model, finance/short-rate-models, finance/stefan-problem-american

## Entity: finance/bootstrapping-yield-curve
- Title: Bootstrapping the Yield Curve
- Category: Pricing
- Language: en
- Key Concepts: Projection curve, Turn-of-Year Effects, Swap pricing, Input Instruments, Dual-Curve Stripping (Post-2008), turn-of-year jumps, Middle: Futures or FRAs (3M to 2Y), Bond relative value, Curve Sensitivities (Jacobian), Curve trades, Interpolation Methods, bootstrap equation, Practical Applications, Monotone convex, Bootstrapping the Yield Curve
- References: finance/bond-options-gaussian, finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, libor-market-model
- Backlinks: finance/nelson-siegel-svensson, finance/swaps, multi-curve-framework

## Entity: finance/capm
- Title: CAPM (Capital Asset Pricing Model)
- Category: Pricing
- Language: en
- Key Concepts: Fama-French three-factor model (1992), The core equation, first quantitative formula, [[ftap-first-fundamental-theorem|FTAP]], Alpha is the bread and butter of the active management industry, "asset risk premium" = "beta" × "market risk premium", Homogeneity assumption, Related Articles, Beta vs. return, Value, Derivation from Markowitz, Alpha and active management, Conditional CAPM., beta remains the standard risk metric, [[apt-ross|APT]]
- References: fama-macbeth-regression, finance/apt-ross, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: finance/apt-ross, finance/efficient-market-hypothesis, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/caps-floors-swaptions
- Title: Caps, Floors and Swaptions
- Category: Pricing
- Language: en
- Key Concepts: Black Vol vs Normal Vol, LIBOR Market Model, LMM/BGM to Caps and Swaptions, caplet, Bachelier model, Black volatility, Black (1976) model, swaption matrix, Swaption vol matrix, Related Articles, cube, European Swaptions, cap, floor, Black's Formula for Swaptions
- References: black-scholes, finance/bond-options-gaussian, finance/sabr-model, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, cost-of-carry, finance/change-of-numeraire, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/change-of-numeraire
- Title: Change of Numeraire
- Category: Pricing
- Language: en
- Key Concepts: The Swap Measure and Swaptions, Adjust drifts, Evaluate, Practical Recipe, Key Identities Summary, numeraire, Change of Numeraire, change of numeraire, Application to caplets., Choose the numeraire, The T-Forward Measure, Standard Numeraire Choices, Drift Change via Girsanov, Compute the Radon-Nikodym derivative, Identify the payoff
- References: black-scholes, brownian-motion, finance/caps-floors-swaptions, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/complete-incomplete-markets
- Title: Complete and Incomplete Markets. Second Fundamental Theorem
- Category: Pricing
- Language: en
- Key Concepts: Second Fundamental Theorem, Complete:, Proof idea, Complete and Incomplete Markets. Second Fundamental Theorem, Mean-square error minimization, or an entire convex set, Theorem., Incomplete:, either a single point, Related Articles, $\Leftarrow$ (uniqueness $\Rightarrow$ completeness)., second, attainable, Examples of complete and incomplete markets, incomplete
- References: finance/bs-market-self-financing, finance/crr-model, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion, heston-model, optional-decomposition
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/crr-model, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: convertible-bonds
- Title: Convertible Bonds
- Category: Pricing
- Language: en
- Key Concepts: Busted, Premium, Conversion Ratio, Payoff Structure, continuation value, Greeks, Vega, Corporate funding, Dilution Effect, Hard call protection, Embedded Features, put condition, call condition, Hedge fund strategies, Par (Face Value)
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/xva, heston-model, partial-differential-equations
- Backlinks: numerical-pde-finance

## Entity: finance/copula-models
- Title: Copula Models
- Category: Pricing
- Language: en
- Key Concepts: Limitations & Extensions, Extensions:, Portfolio VaR, tail dependence, Tail Dependence Coefficients, Uniqueness, Gumbel, Tail Dependence Comparison, Dimensionality, marginal distributions, Mathematical Framework, Dynamic copulas (Patton, 2006), Gaussian Copula, Archimedean Copulas, Limitations:
- References: cornish-fisher-cvar, cox-process, extreme-value-theory, finance/value-at-risk, finance/xva

## Entity: cost-of-carry
- Title: Cost of Carry
- Category: Pricing
- Language: en
- Key Concepts: When Cost of Carry Breaks Down, Currency (covered interest rate parity), Reverse cash-and-carry, Stock with discrete dividends, Stock index futures, convexity bias, Stock with continuous dividend yield $q$, Options pricing, cost of carry, Non-dividend-paying stock, Equity financing, Commodity forward curves, Contango, No counterparty risk, The General Formula
- References: blacks-model, finance/arbitrage-definition, finance/caps-floors-swaptions, finance/swaps, finance/xva, risk-neutral-valuation
- Backlinks: finance/swaps

## Entity: finance/crr-model
- Title: Cox-Ross-Rubinstein Binomial Model (CRR)
- Category: Pricing
- Language: en
- Key Concepts: Claim., Martingale measure, working tool, Replicating portfolio (hedging), Related Articles, discrete delta hedging, European option price, Cox-Ross-Rubinstein Binomial Model (CRR), Model, true, complete, No-arbitrage condition, Convergence to Black-Scholes, Why this matters in practice, binomial formula
- References: black-scholes, finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/black-scholes-derivations, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/stefan-problem-american, math/central-limit-theorem, math/discrete-markov-chains, math/optimal-stopping-markov, math/weak-convergence-prokhorov

## Entity: finance/delta-hedging-practice
- Title: Delta Hedging in Practice
- Category: Pricing
- Language: en
- Key Concepts: Whalley-Wilmott Hedging Bandwidth, Hedging Frequency Optimization, Model Risk, Delta Hedging in Practice, Greeks-neutral portfolio, volga, Hedging Error vs Rebalancing Frequency, The Cost of Rebalancing, Practical Challenges, no-transaction band, Vanna, Discrete Rebalancing Error, The Ideal, Transaction Costs and Leland's Adjustment, total P&L of a delta-hedged position
- References: black-scholes, finance/variance-swaps-vix, finance/volatility-surface, greeks-options, heston-model, option-strategies
- Backlinks: deep-hedging, greeks-options

## Entity: finance/discrete-girsanov-esscher
- Title: Discrete Girsanov and the Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: Girsanov, The Esscher transform: general case, explicit, Related Articles, Why have both, Idea., Connection to [[ftap-first-fundamental-theorem|FTAP]], Conditional Esscher., Discrete Girsanov: the conditionally Gaussian case, minimum Esscher measure, A note on incomplete markets, Discrete Girsanov theorem., Discrete Girsanov and the Esscher Transform, Esscher, arbitrary
- References: finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion
- Backlinks: finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous

## Entity: finance/dupire-local-vol
- Title: Dupire Local Volatility Model
- Category: Pricing
- Language: en
- Key Concepts: Local Volatility (Dupire, 1994), Local Vol vs Stochastic Vol, Related Articles, Dupire Local Volatility Model, Dupire Equation, calibrated once, Implementation
- References: finance/rough-volatility, finance/sabr-model, finance/variance-swaps, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/black-scholes-derivations, finance/variance-swaps, finance/volatility-surface, lsv-model, volatility-smile

## Entity: finance/efficient-market-hypothesis
- Title: Efficient Market Hypothesis (EMH)
- Category: Pricing
- Language: en
- Key Concepts: evolutionarily adaptive, Adaptive Market Hypothesis (AMH), EMH, Value anomaly, January effect, historical bridge, under the original measure, martingale, there exists, Related Articles, Strong form., Adaptive Market Hypothesis, Efficient Market Hypothesis (EMH), at any moment financial asset prices fully reflect all available information, constant effort by inefficient traders
- References: brownian-motion, fama-macbeth-regression, finance/apt-ross, finance/bachelier-formula, finance/capm, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: causal-inference, finance/apt-ross, finance/capm, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/energy-commodity-derivatives
- Title: Energy & Commodity Derivatives
- Category: Pricing
- Language: en
- Key Concepts: option on the spread, Electricity Markets, Storage as a Real Option, Burn analysis, Heating Degree Days (HDD), Weather Derivatives, Seasonality, Banking and borrowing, Gibson-Schwartz: Stochastic Convenience Yield, Contango, short-term deviation, Schwartz-Smith Two-Factor Model, Calibration to Futures Term Structure, Cooling Degree Days (CDD), Price spikes
- References: black-scholes, brownian-motion, finance/levy-processes, finance/optimal-stopping-american, finance/real-options, finance/swaps
- Backlinks: finance/real-options

## Entity: finance/ftap-first-fundamental-theorem
- Title: First Fundamental Theorem (FTAP)
- Category: Pricing
- Language: en
- Key Concepts: Related Articles, equivalent martingale measure, risk-neutral measure, Theorem (Harrison-Pliska, 1981; Dalang-Morton-Willinger)., Continuous time: NFLVR, Construction., First Fundamental Theorem (FTAP), Proof idea: sufficiency ($\Leftarrow$), Historical note, Proof idea: necessity ($\Rightarrow$), conditional Esscher transforms, Pricing a derivative via the martingale measure, The crucial point:, Statement (discrete case), geometric
- References: finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/apt-ross, finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/capm, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/efficient-market-hypothesis, finance/girsanov-semimartingales, finance/optimal-stopping-american, finance/self-similarity-fractality, finance/semimartingale-models, finance/stefan-problem-american, finance/upper-lower-hedging-prices, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optional-decomposition, risk-neutral-valuation

## Entity: finance/free-boundary-american
- Title: Free Boundary Problem for American Options
- Category: Pricing
- Language: en
- Key Concepts: Exercise Boundary Shape, The Black-Scholes PDE with Constraint, continuation region, exercise region, Free Boundary Problem for American Options, Connection to Optimal Stopping, free boundary problem, Longstaff-Schwartz (Monte Carlo), Early Exercise Premium, Binomial Tree (CRR), Finite Differences (PDE), Numerical Methods, value matching, perpetual, Real options
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/longstaff-schwartz, finance/monte-carlo-method
- Backlinks: finance/optimal-stopping-american

## Entity: garman-kohlhagen
- Title: Garman-Kohlhagen Model
- Category: Pricing
- Language: en
- Key Concepts: Volatility Smile: Risk Reversals and Butterflies, ATM volatility, 25-delta risk reversal, 25-delta butterfly, Corporate hedging, Setup and Assumptions, Carry trade options, Delta Conventions, Practical Applications, Garman-Kohlhagen (GK) model, Garman-Kohlhagen Model, Central bank intervention, Put-Call Symmetry in FX, Pricing Formulas, Garman-Kohlhagen Greeks
- References: black-scholes, greeks-options, heston-model, option-strategies, put-call-parity
- Backlinks: option-strategies, put-call-parity

## Entity: finance/girsanov-semimartingales
- Title: Girsanov's Theorem for Semimartingales
- Category: Pricing
- Language: en
- Key Concepts: incompleteness, unchanged, shifts Brownian motion by a drift, Theorem (Jacod-Mémin)., The semimartingale version, Novikov's condition, Invariance of $C$, Girsanov's Theorem for Semimartingales, Related Articles, path-wise invariant, Application to Black-Scholes, Novikov's condition and its analogues, what exactly, Jump part and incompleteness, density process
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/levy-esscher-continuous, finance/semimartingale-models, finance/shannon-entropy, heston-model
- Backlinks: feynman-kac, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/change-of-numeraire, finance/discrete-girsanov-esscher, finance/hjm-framework, finance/levy-esscher-continuous, finance/semimartingale-models, finance/short-rate-models, innovation-process, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/conditional-expectation-sigma, math/contiguity-measures, math/convergence-stochastic-integrals, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, nonlinear-filtering, radon-nikodym, risk-neutral-valuation

## Entity: finance/hjm-framework
- Title: HJM Framework
- Category: Pricing
- Language: en
- Key Concepts: Key Result, The HJM Drift Condition, Calibration, Infinite-dimensional state, Short-Rate Models as Special Cases, Monte Carlo Implementation, Practical Limitations, Markovian HJM: Ritchken-Sankarasubramanian, Forward Rate Dynamics, The LIBOR Market Model Connection, Heath-Jarrow-Morton (HJM) framework, HJM drift restriction, Computational cost, finite-dimensional Markov process, Prerequisites
- References: brownian-motion, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps, stochastic-differential-equations

## Entity: finance/heston-model
- Title: Heston Model
- Category: Pricing
- Language: en
- Key Concepts: characteristic function, Greeks, Parameters, Risk management, Pricing, Calibration, Jump extensions, Python: Path Simulation and Option Pricing, Heston Model, Volatility Dynamics Visualization, Volatility Smile, The Feller Condition, Comparison with Black-Scholes, Exotic options pricing, Background
- References: black-scholes, finance/particle-filter, finance/sabr-model, garch-models, geometric-brownian-motion
- Backlinks: heston-fourier, heston-model

## Entity: finance/interest-rate-term-structure
- Title: Interest Rate Term Structure
- Category: Pricing
- Language: en
- Key Concepts: Derivatives pricing, The Inverted Yield Curve, Risk management, Preferred Habitat (Modigliani-Sutch, 1966), Market Segmentation, pure expectations hypothesis, Theories of the Term Structure, Affine Term Structure Models, Bond relative value, Conversion Relations, Par Rates, Monetary policy analysis, term premium, affine, instantaneous forward rate
- References: dv01, finance/bond-options-gaussian, finance/libor-sofr, finance/nelson-siegel-svensson, finance/short-rate-models, finance/swaps
- Backlinks: finance/nelson-siegel-svensson, finance/short-rate-models, multi-curve-framework

## Entity: optional-decomposition
- Title: Kramkov Optional Decomposition
- Category: Pricing
- Language: en
- Key Concepts: Doob-Meyer recap, upper price, Lagrangian duality, Overview, Primal, Difference from Doob-Meyer., every, Connection to duality theory, super-hedging strategy, universal, predictable, Dual, surely covers, Optional decomposition, Theorem (Kramkov, Föllmer-Kabanov).
- References: finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/complete-incomplete-markets, finance/optimal-stopping-american, finance/upper-lower-hedging-prices, math/backward-sde

## Entity: finance/libor-market-model
- Title: LIBOR Market Model (BGM)
- Category: Pricing
- Language: en
- Key Concepts: Volatility and Correlation Parameterization, LIBOR Market Model, Black's formula by construction, CMS products, Swaption vols, Correlation, LIBOR Market Model (BGM), Range accruals, Drift under the Terminal Measure, Brace-Gatarek-Musiela (BGM) model, spot measure, Caplet Pricing — Black's Formula, Caplet vols, Practical Applications, Swaption Pricing — Rebonato's Approximation
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/monte-carlo-method, finance/swaps, hjm-framework, stochastic-differential-equations

## Entity: lsv-model
- Title: Local Stochastic Volatility (LSV)
- Category: Pricing
- Language: en
- Key Concepts: Particle Methods (Monte Carlo with interacting particles), Stochastic Volatility (SV) e.g., Heston, Stochastic Volatility (SV), Visualization: The Volatility Hierarchy, Local Stochastic Volatility (LSV), Related Topics, The Flaws of Predecessors, Local Volatility (LV) e.g., Dupire, Local Leverage Function, The Calibration Nightmare (Particle Methods), The LSV Synthesis, Why Tier-1 Banks Require LSV, Local Volatility (LV)
- References: finance/dupire-local-vol, heston-model, hmm-particle-filters
- Backlinks: mcmc, path-dependent-volatility

## Entity: finance/levy-esscher-continuous
- Title: Lévy Processes and the Continuous Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: Lévy-Khintchine formula., incompleteness, new, Compound Poisson process, Stationary increments, The Esscher martingale measure, Lévy process, The Lévy triplet, implied volatility surface, Lévy measure, Construction (Gerber-Shiu, 1994)., Lévy Processes and the Continuous Esscher Transform, Claim., Option pricing in Lévy models, Related Articles
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/fft, finance/girsanov-semimartingales, finance/semimartingale-models, finance/shannon-entropy, geometric-brownian-motion, heston-model
- Backlinks: finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/semimartingale-models, finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/markowitz-mean-variance
- Title: Markowitz Mean-Variance Portfolio Theory
- Category: Pricing
- Language: en
- Key Concepts: Black-Litterman (1992), a rational investor should jointly optimize expected return and risk, heart, Sensitivity to inputs., "market portfolio", Markowitz problem:, mathematical discipline, Weaknesses of classical Markowitz:, straight line, Markowitz Mean-Variance Portfolio Theory, Modern extensions:, Historical role, Related Articles, maximum-Sharpe portfolio, pre-stochastic
- References: bayesian-black-litterman, convex-optimization-trading, cornish-fisher-cvar, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/stylized-facts-returns
- Backlinks: convex-analysis, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/stylized-facts-returns, information-geometry-finance, math/law-of-large-numbers, nonlinear-shrinkage, stochastic-control

## Entity: martingale-optimal-transport
- Title: Martingale Optimal Transport
- Category: Pricing
- Language: en
- Key Concepts: Connection to Optimal Transport, Related Topics, Martingale Optimal Transport, Martingale, Why Citadel and Tier-1 Banks Use It, Primal Problem, The Setup: Model-Free Pricing, The Primal and Dual Problems, Visualization: Sand vs. Martingale Sand, Dual Problem (Super-Replication), model-free, Martingale Optimal Transport (MOT)
- References: convex-optimization-trading, convexity, martingale, optimal-transport, risk-neutral-valuation
- Backlinks: convexity, martingale

## Entity: finance/nelson-siegel-svensson
- Title: Nelson-Siegel-Svensson Yield Curve Model
- Category: Pricing
- Language: en
- Key Concepts: Nelson-Siegel-Svensson Yield Curve Model, Central bank publication, Related Articles, XVA, Typical Curve Shapes, Bond pricing, Instantaneous Forward Rate, Svensson Extension (1994), Duration management, Calibration, Uses, Example, Nelson-Siegel-Svensson (NSS), Nelson-Siegel (1987)
- References: black-scholes, finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/oas, finance/swaps, finance/xva, heston-model
- Backlinks: finance/bootstrapping-yield-curve, finance/cir-hull-white, finance/interest-rate-term-structure, finance/libor-sofr

## Entity: numeraire-invariant-hedging
- Title: Numeraire-Invariant Quadratic Hedging
- Category: Pricing
- Language: en
- Key Concepts: Model dependency, Optimality, Deep hedging, Minimal Martingale Measure (MMM), Change of Numeraire, Decomposition additivity, Advanced Context, Numeraire Invariance, Limitations and Extensions, Quadratic Hedging, Numeraire-Invariant Quadratic Hedging, Key Properties, Galtchouk-Kunita-Watanabe (GKW) Decomposition, Visualization, Python: Simulating and Measuring Hedging Error
- References: black-scholes, finance/hierarchical-risk-parity, finance/levy-processes, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/follmer-schweizer

## Entity: optimal-execution
- Title: Optimal Execution: Almgren-Chriss
- Category: Pricing
- Language: en
- Key Concepts: Deep RL Execution, Risk-Averse ($\lambda \to \infty$), Price Risk (Volatility), Visualization: Trading Trajectories, The Fundamental Trade-off, Temporary Impact, Dark Pools, The Solution: The Efficient Frontier, Modern Extensions, Permanent Impact, Exponential Decay, Risk-Neutral ($\lambda \to 0$), The Mathematical Framework, Almgren-Chriss model, Related Topics
- References: deep-rl-execution, stochastic-control, vpin
- Backlinks: ai-market-making, amihud-illiquidity, amm-mechanics, avellaneda-stoikov, cross-impact, deep-rl-execution, finance/dark-pools, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/vwap-twap, futures-hedging, kyle-model, liquidation-signals, lob-prediction, market-impact, market-microstructure, path-integral-control, reinforcement-learning, rl-trader, stochastic-control, vpin

## Entity: finance/optimal-stopping-american
- Title: Optimal Stopping and American Options
- Category: Pricing
- Language: en
- Key Concepts: Optimal Stopping and American Options, Stefan problem, optimal stopping problem, supermartingale characterization, Snell envelope, Theorem., The Snell envelope, put, stopping time, Related Articles, Hedging an American option, Claim 2 (Doob-Meyer)., continuous, Proof (sketch)., call
- References: black-scholes, finance/crr-model, finance/free-boundary-american, finance/ftap-first-fundamental-theorem, finance/stefan-problem-american, finance/upper-lower-hedging-prices, optional-decomposition
- Backlinks: feynman-kac, finance/crr-model, finance/energy-commodity-derivatives, finance/real-options, finance/stefan-problem-american, math/discrete-martingales, math/optimal-stopping-markov, numerical-pde-finance, optional-decomposition, stochastic-control

## Entity: greeks-options
- Title: Option Greeks
- Category: Pricing
- Language: en
- Key Concepts: First-Order Greeks, Greeks, Barrier options, Vega, Option Greeks, Greeks for Exotic Options, Higher-Order Greeks, Second-Order Greeks, Discrete hedging, Delta, Theta, Digital options, Smile effects, Vega Hedging, Pin risk
- References: black-scholes, dv01, exotic-options, finance/delta-hedging-practice, geometric-brownian-motion, heston-model, option-strategies, put-call-parity
- Backlinks: finance/delta-hedging-practice, finance/variance-swaps-vix, frtb-sa-mr, garman-kohlhagen, option-strategies, put-call-parity, volatility-smile

## Entity: option-strategies
- Title: Option Strategies
- Category: Pricing
- Language: en
- Key Concepts: Ratio Spreads, Greeks, Risk Reversal, Payoff Diagram: Bull Call Spread, Dividends, Margin, Calendar (Time) Spreads, Bear Put Spread, Butterfly Spread, Vol smile, Volatility Strategies, Greeks of Combinations, Straddle, Liquidity, Max profit
- References: black-scholes, garman-kohlhagen, greeks-options, heston-model, put-call-parity
- Backlinks: finance/delta-hedging-practice, garman-kohlhagen, greeks-options, put-call-parity

## Entity: pairs-trading
- Title: Pairs Trading Strategy
- Category: Pricing
- Language: en
- Key Concepts: Pairs Trading, Cointegration, Cointegration P-Value, Spread Modeling as OU Process, Key Metrics, Crowding risk, Kalman filter, Z-Score, Entry/Exit Signal Framework, cointegration rank, expected return per trade, Johansen Test, Multivariate, Limitations and Extensions, Engle-Granger Two-Step Test
- References: finance/cointegration, finance/monte-carlo-method, finance/particle-filter, finance/value-at-risk, mcmc, ornstein-uhlenbeck-process
- Backlinks: fastest-mean-reversion, fractional-cointegration, ornstein-uhlenbeck-process, pca-statarb, vine-copulas

## Entity: path-dependent-volatility
- Title: Path-Dependent Volatility
- Category: Pricing
- Language: en
- Key Concepts: Running Maximum, McKean-Vlasov, 2. Models of Julien Guyon, Advantage, Visualization: Path-Memory effect, Related Topics, 1. The Limitation of Dupire's Model, realized path, Moving Average, Path-Dependent Volatility: Beyond Local Volatility, Julien Guyon, Local Volatility (LV), Interacting Particle System, Path Signatures, 4. Connection to Signature-based Models
- References: hmm-particle-filters, lsv-model, neural-sdes-finance, rough-paths, signature-based-models
- Backlinks: signature-based-models

## Entity: put-call-parity
- Title: Put-Call Parity
- Category: Pricing
- Language: en
- Key Concepts: Extracting Market Information, Put-call parity, No-Arbitrage Proof, Dividend extraction, Synthetic Positions, Implied dividends, Synthetic positions, Futures Options, Portfolio A, Extensions, Practical Applications, Dividend-Paying Stocks, Forward Version, American Options, Connection to Greeks
- References: black-scholes, finance/bs-market-self-financing, garman-kohlhagen, greeks-options, option-strategies
- Backlinks: garman-kohlhagen, greeks-options, option-strategies

## Entity: finance/follmer-schweizer
- Title: Quadratic Hedging and the Föllmer-Schweizer Approach
- Category: Pricing
- Language: en
- Key Concepts: Methods Comparison, Föllmer-Schweizer Decomposition, Key property, Cost process, Related Articles, Local Risk-Minimisation (Schweizer 1991), Stochastic volatility, Discrete Approximation, incomplete markets, Discrete trading, Minimal Martingale Measure, Minimal Martingale Measure (MMM), Jumps, Motivation: Incomplete Markets, Quadratic hedging
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, heston-model, numeraire-invariant-hedging
- Backlinks: finance/complete-incomplete-markets, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: quantum-amplitude-estimation
- Title: Quantum Amplitude Estimation (QAE)
- Category: Pricing
- Language: en
- Key Concepts: Related Topics, Iterative QAE (IQAE), Grover Operator ($\mathcal{Q}$), Quantum Amplitude Estimation (QAE), Quantum Phase Estimation, Quantum Amplitude Estimation (QAE) in Finance, How QAE Works, Payoff Encoding, 1,000 times, State Preparation, Visualization: Convergence Speed, quadratic speedup, Maximum Likelihood QAE (ML-QAE), Monte Carlo (MC) Simulation, The Quadratic Speedup
- References: finance/monte-carlo-method, finance/xva, quantum-math
- Backlinks: quantum-math

## Entity: finance/real-options
- Title: Real Options
- Category: Pricing
- Language: en
- Key Concepts: Criticisms and Limitations, dividend-like yield, Real Options, Marketed Asset Disclaimer (MAD), Spanning assumption, substantial premium, Option to expand, Pharmaceutical R&D, Suboptimal exercise, Binomial trees, Finite difference PDE, Types of Real Options, Model risk, Real options, Parameter sensitivity
- References: black-scholes, brownian-motion, finance/energy-commodity-derivatives, finance/optimal-stopping-american, finance/swaps, heston-model
- Backlinks: finance/energy-commodity-derivatives

## Entity: risk-neutral-valuation
- Title: Risk-Neutral Valuation
- Category: Pricing
- Language: en
- Key Concepts: equivalent martingale measure, Incomplete Markets, The Central Formula, $T$-forward measure, Risk-Neutral Valuation, Fundamental Theorems of Asset Pricing, Multi-Asset and Numeraire Changes, The Replication Argument, Interest rate derivatives, Option pricing, market price of risk, Risk-neutral valuation, PDE methods, Monte Carlo simulation, Second Fundamental Theorem.
- References: black-scholes, blacks-model, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/monte-carlo-method, finance/shannon-entropy, finance/swaps, finance/xva, geometric-brownian-motion, heston-model, math/doleans-dade-exponential, partial-differential-equations
- Backlinks: cost-of-carry, feynman-kac, martingale, martingale-optimal-transport, stochastic-processes

## Entity: finance/sabr-model
- Title: SABR Model
- Category: Pricing
- Language: en
- Key Concepts: SABR Model, Parameters, Normal SABR, SABR-LV, CMS products, Stochastic Differential Equations, Arbitrage violations, $\nu$ controls smile curvature, Volatility Smile Visualization, Mathematical Framework, density-projection, Cap/floor stripping, $\rho$ controls skew, Smile dynamics, Model risk
- References: black-scholes, finance/asymptotic-expansion-finance, finance/oas, finance/swaps, heston-model, volatility-forecasting
- Backlinks: black-scholes, blacks-model, finance/asymptotic-expansion-finance, finance/caps-floors-swaptions, finance/dispersion-trading, finance/dupire-local-vol, finance/heston-model, finance/oas, finance/rough-volatility, finance/swaps, finance/volatility-surface, hyperbolic-vol-geometry, volatility-smile

## Entity: finance/semimartingale-models
- Title: Semimartingale Models and Predictable Characteristics
- Category: Pricing
- Language: en
- Key Concepts: Semimartingale market models, quadratic variation $C$ is invariant, special, "stochastic DNA", Connection to Girsanov, [[levy-esscher-continuous|Lévy process]], Related Articles, semimartingales, Semimartingale Models and Predictable Characteristics, continuous-time analogue of [[ftap-first-fundamental-theorem|FTAP]], Why this matters, [[cox-process|Poisson process]], Theorem (NFLVR-FTAP)., minimal, single language
- References: brownian-motion, cox-process, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/hawkes-process, finance/levy-esscher-continuous, geometric-brownian-motion, heston-model
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, math/triangular-arrays-processes, optional-decomposition

## Entity: finance/black-scholes-derivations
- Title: Several Derivations of the Black-Scholes Formula
- Category: Pricing
- Language: en
- Key Concepts: Binomial, Several Derivations of the Black-Scholes Formula, deterministic, limit of elementary computations, constant, Equivalence of derivations, Related Articles, Martingale, Idea., Derivation 4: Change of variables and the heat equation, baseline reference, Derivation 2: Martingale (risk-neutral measure), why, Derivation 1: BS PDE (replication and hedging), What this shows:
- References: black-scholes, finance/bachelier-formula, finance/crr-model, finance/dupire-local-vol, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american, geometric-brownian-motion, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/free-boundary-american, finance/stefan-problem-american, math/optimal-stopping-markov

## Entity: finance/short-rate-models
- Title: Short Rate Models
- Category: Pricing
- Language: en
- Key Concepts: non-negativity, Lattice Methods, Vasicek:, Equilibrium Models, Volatility calibration, No-Arbitrage Models, Calibration, Curve fitting, Cox-Ingersoll-Ross (CIR, 1985), Related Articles, affine, Short Rate Models, Affine Bond Pricing, Gaussian, Connection to HJM
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/girsanov-semimartingales, finance/interest-rate-term-structure, finance/swaps, stochastic-differential-equations
- Backlinks: finance/caps-floors-swaptions, finance/change-of-numeraire, finance/hjm-framework, finance/interest-rate-term-structure

## Entity: finance/stefan-problem-american
- Title: Stefan Problem and American Options
- Category: Pricing
- Language: en
- Key Concepts: Free-boundary analytics, American call: the trivial case, Setup for the American put, Stefan problem, Numerical methods, Equations, obstacle, Claim., [[crr-model|CRR binomial tree with early-exercise check]]., Related Articles, option price, Monte Carlo regression (Longstaff-Schwartz, 2001)., Equivalence to the optimal-stopping formulation, Structure of the Stefan problem, degenerate
- References: black-scholes, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/black-scholes-derivations, finance/bond-options-gaussian, finance/optimal-stopping-american

## Entity: svi-model
- Title: Stochastic Volatility Inspired (SVI) Model
- Category: Pricing
- Language: en
- Key Concepts: Visualization: The Hyperbolic Smile, $m$, Related Topics, Surface SVI (SSVI), $a$, Stochastic Volatility Inspired (SVI), SSVI: Surface SVI, $\sigma > 0$, Calendar Arbitrage, $\rho \in [-1, 1]$, Eliminating Arbitrage, Stochastic Volatility Inspired (SVI) Model, The Raw SVI Formula, $b$, Butterfly Arbitrage
- References: black-scholes, finance/variance-gamma, heston-model

## Entity: finance/swaps
- Title: Types of Swaps
- Category: Pricing
- Language: en
- Key Concepts: swap, Fixed leg, Relative value trading, plain vanilla IRS, Market risk, Par Swap Rate, Cash Flow Visualization, DV01, Basis risk, CVA on an IRS, Mathematical Framework, Corporate hedging, Counterparty risk, Digital/binary swaps, Types of Swaps
- References: black-scholes, copula-models, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/sabr-model, finance/xva
- Backlinks: blacks-model, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/cir-hull-white, finance/energy-commodity-derivatives, finance/hjm-framework, finance/interest-rate-term-structure, finance/isda-simm, finance/libor-market-model, finance/libor-sofr, finance/nelson-siegel-svensson, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/xva, futures-hedging, risk-neutral-valuation

## Entity: finance/upper-lower-hedging-prices
- Title: Upper and Lower Hedging Prices
- Category: Pricing
- Language: en
- Key Concepts: upper price, lower price, interval, backward induction, infimum, below, Related Articles, supremum, Definitions, upper and lower hedging prices, Attainability and exact replication, attainable, Connection to risk aversion, utility indifference pricing, Dual characterization
- References: finance/barrier-asian-options, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, heston-model, optional-decomposition
- Backlinks: finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, optional-decomposition

## Entity: finance/variance-swaps
- Title: Variance Swaps and Volatility Risk Premium
- Category: Pricing
- Language: en
- Key Concepts: Related Articles, Var Swap vs Vol Swap vs VIX Futures, Volatility Risk Premium, Variance Swaps and Volatility Risk Premium, variance swap, Carr-Madan Model-Free Replication, Implementation, Payoff
- References: finance/bipower-variation, finance/dupire-local-vol, heston-model, volatility-forecasting
- Backlinks: finance/dispersion-trading, finance/dupire-local-vol, finance/variance-swaps-vix, finance/volatility-surface

## Entity: volatility-smile
- Title: Volatility Smile
- Category: Pricing
- Language: en
- Key Concepts: SABR, Sticky delta, Connections and Further Topics, Definition and Empirical Observation, Theory: Risk-Neutral Density and Breeden-Litzenberger, Excess kurtosis, FX markets, 25-delta risk reversal, 1. Stochastic Volatility ([[heston-model|Heston Model]]), SVI, 3. Local Volatility ([[dupire-local-vol|Dupire's Local Volatility]]), Why Black-Scholes Fails: Fat Tails and Skewness, Negative skewness, 2. Jump Diffusion ([[merton-jump-diffusion|Merton Jump-Diffusion]]), Information content
- References: black-scholes, finance/dupire-local-vol, finance/rough-volatility, finance/sabr-model, finance/volatility-surface, greeks-options, heston-model, merton-jump-diffusion
- Backlinks: volatility-arbitrage

## Entity: finance/volatility-surface
- Title: Volatility Surface
- Category: Pricing
- Language: en
- Key Concepts: Term Structure of Skew, Sticky delta, FX markets, fatter tails, implied volatility surface, Local Volatility via Dupire, Related Articles, Lee's moment formula, Volatility Surface, Commodity markets, Equity indices, Breeden-Litzenberger, The Smile and Skew, No-Arbitrage Constraints, Connection to Risk-Neutral Density: Breeden-Litzenberger
- References: black-scholes, finance/dupire-local-vol, finance/sabr-model, finance/variance-swaps, geometric-brownian-motion, heston-model
- Backlinks: blacks-model, finance/delta-hedging-practice, finance/variance-swaps-vix, neural-sdes-finance, volatility-smile

## Entity: algorithmic-execution-twap-vwap
- Title: Algorithmic Execution: TWAP, VWAP & Almgren-Chriss
- Category: Pricing & Execution
- Language: en
- Key Concepts: VWAP:, Market Impact, Algorithmic Execution: TWAP, VWAP & Almgren-Chriss, See Also, 1. TWAP & VWAP Strategies, 2. Almgren-Chriss Model, TWAP:, Timing Risk
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
- Key Concepts: Fixed Income: Rates & Yield Curves, See Also
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
- Key Concepts: Monte Carlo Option Pricing & Variance Reduction, 1. Monte Carlo Framework, 2. Variance Reduction, See Also
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
- Key Concepts: brutalist, kinetic typography, The Idea, React 19, Brutalism, Framer Motion, J. Cole — The Fall Off Review, TypeScript, Stack, Kinetic typography, Vite, Status, Design Language

## Entity: projects/llm-wiki
- Title: LLM-Wiki
- Category: Projects
- Language: en
- Key Concepts: Implementation architecture, The schema, compounding artifact, Ingest, Lint, The human, Three layers, Knowledge Garden, The vault, updates 10–15 notes in the vault, Three operations, Content, Rendering, Why not [[rag]], Knowledge graph
- References: llm, rag

## Entity: projects/music-results-2025
- Title: Music Results 2025
- Category: Projects
- Language: en
- Key Concepts: Videos, Inline CSS + styles.css, Plain HTML, GitHub Pages, The Idea, A personal year-in-music archive, Artists, Discoveries, Stack, Albums, Editorial brutalism, Structure, `.nojekyll`, Statistics, Music Results 2025

## Entity: projects/nyquist
- Title: Nyquist
- Category: Projects
- Language: en
- Key Concepts: Frontend, Harry Nyquist, The Name, Market Regimes, Market Data, Central banks and regulators, 89 API routers, 437 HTTP endpoints, 118+ services., Development, Nyquist, Execution & Trading, Asset managers, Systemic Risk, Compute, Who It's For, Technology

## Entity: projects/ultima-thule
- Title: Ultima Thule
- Category: Projects
- Language: en
- Key Concepts: @State Trip? goes stale., Map, Turn-by-Turn Navigation, Theme, Flight Tracking, Dynamic Island Live Activity, Architecture, One Context, Five Views, AI Trip Generator, Travel Stats, Journal, AR Navigation, The map is a state machine, not a sheet., Sync & Auth, Smart Packing

## Entity: projects/samizdat
- Title: Кто живёт в панельке Хаски?
- Category: Projects
- Language: en
- Key Concepts: GitHub Pages, Structure, Typography:, Hero, Кто живёт в панельке Хаски?, React 19 + TypeScript, Tailwind 4, Palette:, Random rotations:, Status, Quotes, Design Language, Motion, Brutal shadows:, Materials

## Entity: quant-trading-interview-roadmap
- Title: 30-Day Quant Trading Interview Roadmap
- Category: Quant Trading
- Language: en
- Key Concepts: 30-Day Quant Trading Interview Preparation Roadmap, Days 23–27:, Days 8–15:, Days 16–22:, Weekly Roadmap, See Also, Days 1–7:, Days 28–30:
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
- Key Concepts: Geometric $Geom(p)$:, Kelly Criterion:, 1. Key Probability Formulas, Dice stopping adjustment:, Coupon Collector:, Put-Call Parity:, See Also, Quant Interview Cheat Sheet: Formulas, Distributions & Shortcuts
- References: course-quant-trading, quant-brainteasers-handbook, quant-market-making-mechanics
- Backlinks: quant-coding-interview-leetcode-patterns, quant-firm-interview-math-brainteasers, quant-firm-interview-playbooks, quant-mental-math-tricks-handbook, quant-trader-mental-math-rapid-trainer, quant-trading-interview-qna, quant-trading-interview-roadmap

## Entity: quant-trading-interview-qna
- Title: Quant Interview Q&A Bank
- Category: Quant Trading
- Language: en
- Key Concepts: Quant Interview Q&A Bank, See Also
- References: course-quant-trading, quant-interview-cheat-sheet, quant-trading-interview-roadmap

## Entity: quant-mental-math-tricks-handbook
- Title: Quant Mental Math Tricks Handbook
- Category: Quant Trading
- Language: en
- Key Concepts: Quant Mental Math Tricks Handbook, See Also
- References: course-quant-trading, quant-interview-cheat-sheet, quant-trading-interview-roadmap
- Backlinks: quant-trader-mental-math-rapid-trainer

## Entity: quant-trader-mental-math-rapid-trainer
- Title: Quant Trader Mental Math Rapid Trainer
- Category: Quant Trading
- Language: en
- Key Concepts: Quant Trader Mental Math Rapid Trainer, See Also
- References: course-quant-trading, quant-interview-cheat-sheet, quant-mental-math-tricks-handbook

## Entity: course-quant-trading
- Title: Quant Trading & Interview Prep: Verbatim Guide
- Category: Quant Trading
- Language: en
- Key Concepts: 3.5 Fit Questions, Fermi Problems PDF, 1.3 Quant Trading vs. Quant Research, Flow Traders:, IMC:, Correlated Skills:, 2.3 Firm Profiles, 2.1 What is an Internship Like?, 1.4.1 "Finance Culture is Terrible", Prop Trading (Proprietary Trading):, Fermi problems:, Author's Request:, 4.3 STRATEGY GAME PROBLEMS (10 Problems), 1.2 What Does a Quant Trader Do?, Bid-Ask Spread:
- Backlinks: algorithmic-execution-twap-vwap, convex-optimization-in-trading, copula-models-and-tail-dependence, credit-risk-modeling-and-structural-models, crypto-quant-trading-and-amm-curves, cryptographic-zero-knowledge-in-finance, deep-reinforcement-learning-for-trading, exotic-options-and-structured-products, factor-investing-and-fama-french, fixed-income-quant-rates-and-yield-curve, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-stat-arb-lead-lag, high-frequency-trading-and-orderbook, interest-rate-derivatives-swaps-caps-floors, limit-order-book-matching-engine-design, machine-learning-for-quant-trading, market-impact-models-square-root-law, market-microstructure-noise-and-realized-volatility, monte-carlo-option-pricing-and-variance-reduction, optimal-stopping-american-options, optimal-stopping-and-kelly, option-greeks-and-volatility, order-book-dynamics-and-lOB-modeling, portfolio-optimization-and-black-litterman, portfolio-risk-decomposition-marginal-var, quant-brainteasers-handbook, quant-coding-interview-leetcode-patterns, quant-firm-interview-math-brainteasers, quant-firm-interview-playbooks, quant-interview-cheat-sheet, quant-market-making-mechanics, quant-mental-math-tricks-handbook, quant-risk-management-var-cvar, quant-trader-mental-math-rapid-trainer, quant-trading-interview-qna, quant-trading-interview-roadmap, stat-tests-for-trading-strategies, statistical-arbitrage-and-pairs-trading, stochastic-calculus-and-ito-lemma, stochastic-volatility-heston-model, systematic-alpha-research-and-backtesting, volatility-surface-sabr-model, volatility-trading-and-variance-swaps

## Entity: information-geometry-finance
- Title: Information Geometry in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: Visualization: Curved Probability Space, Related Topics, Information Geometry, Information-Geometric Portfolio Optimization, The Statistical [[manifold-learning|Manifold]], Information Geometry in Finance, Riemannian [[manifold-learning|Manifold]], Application: Portfolio Optimization, Fisher Information Metric (FIM), Connection to [[shannon-entropy|Entropy]], Regime Shifts, Application: Distance Between Market Regimes
- References: entropy-pooling, finance/fisher-transform, finance/markowitz-mean-variance, finance/shannon-entropy, manifold, manifold-learning
- Backlinks: f-divergences, mle

## Entity: path-integral-control
- Title: Path Integral Control in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: Reinforcement Learning, Applications in High-Frequency Trading, Related Topics, The Quantum Physics Connection, High-Dimensional Execution, Feynman-Kac Theorem, Maximum [[shannon-entropy|Entropy]] RL, The Mathematical Breakthrough, Path Integral Control (Path Integral Differential Dynamic Programming - PI-DDP), Path Integral Control in Finance, Softmax (or Boltzmann) weighted average, linear Schrödinger-type PDE, Visualization: The Path Integral, Soft Actor-Critic (SAC)
- References: finance/shannon-entropy, merton-portfolio, optimal-execution, quantum-math, reinforcement-learning, stochastic-control

## Entity: quantum-phase-estimation
- Title: Quantum Phase Estimation & Shor's Algorithm
- Category: Quantum
- Language: en
- Key Concepts: Quantum Phase Estimation, Shor's Algorithm, Quantum Fourier Transform (QFT), Quantum Phase Estimation & Shor's Algorithm, Initialization, Inverse QFT, Controlled Unitaries
- References: math/spectral-theory-operators

## Entity: effective-field-theory
- Title: Effective Field Theory (EFT)
- Category: Quantum Physics
- Language: en
- Key Concepts: Related topics, Chiral perturbation theory, Core idea, Naturalness, Effective Field Theory (EFT), NRQED / NRQCD, Fermi theory of weak interactions, Why it matters, Renormalisation, Predictive power without a UV theory, Examples, General relativity
- References: fine-tuning, renormalization-group
- Backlinks: quantum-mechanics

## Entity: many-body-tensor-networks
- Title: Many-Body Problem and Tensor Networks
- Category: Quantum Physics
- Language: en
- Key Concepts: Hastings' Area Law Theorem (2007), B. Projected Entangled Pair States (PEPS), 300 qubits, DMRG Algorithm, [[llm]] Compression, Tensor Networks, 3. Tensor Network Architectures, 5. Applications in Machine Learning, Holographic Principle, MERA (Multi-scale Entanglement Renormalization Ansatz), Many-Body Problem, 4. MERA and the Geometry of Renormalization, A. Matrix Product States (MPS), Many-Body Problem and Tensor Networks, 2. Theoretical Foundation: The Area Law
- References: llm, math/differential-geometry, quantum-information-entropy, renormalization-group, transformer-architecture
- Backlinks: tensor-decompositions

## Entity: quantum-information-entropy
- Title: Quantum Information and Entropy
- Category: Quantum Physics
- Language: en
- Key Concepts: 3. Entanglement Entropy: Measuring "Spooky" Links, Entanglement Entropy, Visualization: Pure vs. Mixed State, Quantum Teleportation, Holography, Data Processing Inequality, Concavity, Pure State, Thermodynamics, Key Mathematical Axioms:, 1 bit, Landauer's Principle, Strong Subadditivity, 1. The Density Matrix ($\rho$) and Purity, Holevo's Bound
- References: ads-cft-deep, black-hole-thermodynamics, finance/shannon-entropy, gravitational-entropy, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ads-cft-deep, gff, linear-spaces-basis, many-body-tensor-networks, quantum-math, quantum-mechanics, topological-phases

## Entity: quantum-mechanics
- Title: Quantum Mechanics
- Category: Quantum Physics
- Language: en
- Key Concepts: Many-Worlds Interpretation, Operators and Observables, Overview, Copenhagen Interpretation, Lasers, MRI, Quantum Computing, Quantum Decoherence, Wave-Particle Duality, Semiconductors, The Schrödinger Equation, Key Principles, Applications, Superposition, Interpretation of Quantum Mechanics
- References: effective-field-theory, math/spectral-theory-operators, qft-basic, quantum-entanglement, quantum-information-entropy, schrodinger-equation
- Backlinks: math/functional-analysis

## Entity: topological-phases
- Title: Topological Phases of Matter
- Category: Quantum Physics
- Language: en
- Key Concepts: 1. What is Topological Order?, Visualization: The One-Way Street, Chern Number, Zero Resistance, 2. The TKNN Invariant and Chern Numbers, 3. The Bulk-Boundary Correspondence, Topological Invariant, Matrix Rotation, Topological Photonic Crystals, Abelian Anyons, Non-Abelian Anyons, Braiding, Integer Quantum Hall Effect, Bulk, Topological Quantum Computing
- References: gauge-theory-yang-mills, math/topology-basics, quantum-information-entropy

## Entity: finance/adversarial-stress-testing
- Title: Adversarial Stress Testing
- Category: Risk
- Language: en
- Key Concepts: Limitations & Extensions, Generator, Extensions:, Adversarial Stress Testing, Stress Loss Comparison, Dimensionality, Wasserstein distance, Distributional robustness, Mathematical Framework, Model Validation, Limitations:, Discriminator, Convexity, Practical Applications, Adversarial Stress Testing via Generative Models
- References: attention-mechanisms, convex-optimization-trading, copula-models, extreme-value-theory, finance/gan, finance/monte-carlo-method, finance/value-at-risk
- Backlinks: finance/nash-equilibrium, generative-scenario-models

## Entity: amihud-illiquidity
- Title: Amihud Illiquidity Ratio
- Category: Risk
- Language: en
- Key Concepts: Limitations & Extensions, Pastor-Stambaugh (2003) liquidity factor, Extensions:, liquidity risk premium, Signed vs. unsigned impact, Risk Management, Amihud Illiquidity Ratio, Availability, Amihud illiquidity ratio, Mathematical Framework, Limitations:, Liquidity Risk Factor, Liquidity-Adjusted Portfolio Construction, Emerging Markets, Benchmark sensitivity
- References: finance/levy-processes, finance/market-impact-scaling, finance/value-at-risk, optimal-execution, volatility-forecasting
- Backlinks: finance/kyle-lambda, roll-model

## Entity: bayesian-black-litterman
- Title: Bayesian Black-Litterman Portfolio Optimization
- Category: Risk
- Language: en
- Key Concepts: Equilibrium Market Prior, Limitations & Extensions, Extensions:, Step 2: Investor Views, Views dominate with high confidence, Bayesian Black-Litterman Portfolio Optimization, Mathematical Framework, Theil-Goldberger mixed estimator, Factor-based views, BL posterior, Step 3: Posterior via Bayes' Theorem, Limitations:, Sensitivity to $\tau$, [[hierarchical-risk-parity]], Equilibrium prior may be wrong
- References: black-scholes, convex-optimization-trading, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: alpha-factor-discovery, bayesian-inference, convex-optimization-trading, entropy-pooling, finance/markowitz-mean-variance

## Entity: finance/black-swan-scenarios
- Title: Black Swan Scenario Generator
- Category: Risk
- Language: en
- Key Concepts: Use stressed correlations, black swan scenario generator, Refresh EVT parameters, Back-test, Stressed Correlations, Generalised Pareto Distribution (GPD), Best Practices, Scenario Report Template, Generalised Extreme Value (GEV), 2. Scaled Historical Scenarios, T-copula, Never rely solely on VaR, Black Swan Scenario Generator, Peaks Over Threshold (POT), Related Articles
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/systemic-contagion-debtrank, finance/value-at-risk
- Backlinks: lln-clt

## Entity: finance/cdo-tranches
- Title: CDO Tranches
- Category: Risk
- Language: en
- Key Concepts: Base correlation, Tail dependence matters, Compound Correlation, Tranche Structure, The Li (2000) Framework, CDO Tranches, Stochastic recovery, Equity, detachment, Student-t copula, Marshall-Olkin copula, Conditional Independence, Lessons from the Crisis, Random factor loading, Gaussian Copula Model
- References: copula-models, finance/coherent-risk-measures, finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization, finance/value-at-risk
- Backlinks: finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization

## Entity: cs01
- Title: CS01 (Credit Spread 01)
- Category: Risk
- Language: en
- Key Concepts: spread duration, Spread Duration, key-rate CS01, Limitations & Extensions, Recovery rate sensitivity, Extensions:, Relative Value, Basis risk, Duration approximation breaks down, CDS CS01 (Risky PV01), Non-linearity for distressed credit, Risk Limits, Mathematical Framework, spread convexity, Limitations:
- References: copula-models, cox-process, dv01, finance/swaps, finance/xva
- Backlinks: cox-process, dv01, finance/swaps, finance/xva

## Entity: cva-wrong-way-risk
- Title: CVA and Wrong-Way Risk
- Category: Risk
- Language: en
- Key Concepts: Modeling WWR, What is CVA?, Visualization: WWR Exposure Spike, Right-Way Risk, Related Topics, FRTB and WWR, Oil Example, Jump-to-Default Models, Wrong-Way Risk, Credit Valuation Adjustment (CVA), expected loss, Copulas, Credit Valuation Adjustment (CVA) and Wrong-Way Risk, Stochastic Correlation, Wrong-Way Risk (WWR)
- References: copula-models, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: network-risk-cascades

## Entity: finance/market-impact-scaling
- Title: Capacity & Market Impact Scaling
- Category: Risk
- Language: en
- Key Concepts: Cross-impact, square-root law, Alpha Erosion Chart, Square Root Law of Impact, Non-stationarity of ADV, Mathematical Framework, Execution Optimization, Strategy Capacity, Permanent vs. Temporary Impact, Scaling Laws, Regime dependence, Limitations and Extensions, Capacity Estimation, Capacity & Market Impact Scaling Laws, Financial Application
- References: avellaneda-stoikov, finance/monte-carlo-method, lob-prediction, optimal-execution
- Backlinks: amihud-illiquidity, deep-rl-execution, finance/nash-equilibrium, lob-prediction

## Entity: finance/coherent-risk-measures
- Title: Coherent Risk Measures
- Category: Risk
- Language: en
- Key Concepts: Regulatory evolution, VaR is elicitable, 97.5% Expected Shortfall, Theorem., not, Spectral risk measures, diversification axiom, Related Articles, Kusuoka representation, Coherent Risk Measures, convex risk measures, increased, shape of the tail, entropic risk, The four axioms
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, math/law-of-large-numbers
- Backlinks: extreme-value-theory, finance/cdo-tranches, finance/credit-derivatives-cds, frtb-es

## Entity: cornish-fisher-cvar
- Title: Cornish-Fisher CVaR
- Category: Risk
- Language: en
- Key Concepts: Four-moment summary, The Cornish-Fisher Expansion, Limitations & Extensions, Term-by-term interpretation, Gram-Charlier expansion, Extensions:, Portfolio Screening, Modified VaR, Parameter estimation error, Portfolio-level application, Mathematical Framework, Modified VaR (mVaR), Hedge Fund Risk Reporting, Modified CVaR (Expected Shortfall), Limitations:
- References: copula-models, extreme-value-theory, finance/levy-processes, finance/value-at-risk, mcmc, volatility-forecasting
- Backlinks: finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/hyperbolic-distributions, finance/isda-simm, finance/markowitz-mean-variance, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, math/large-deviations-cramer

## Entity: finance/credit-derivatives-cds
- Title: Credit Default Swaps
- Category: Risk
- Language: en
- Key Concepts: Mark-to-Market of an Existing CDS, Relative value, Pricing, upfront payment, Roll, Bootstrapping Hazard Rates, CDS spread, physical delivery, Index roll trades, CDS Spread Term Structure, Credit hedging, fair CDS spread, CVA Connection, CDX, Credit Default Swap (CDS)
- References: copula-models, finance/cdo-tranches, finance/coherent-risk-measures, finance/credit-risk-models, finance/value-at-risk, finance/xva
- Backlinks: finance/cdo-tranches, finance/credit-migration, finance/credit-risk-models, finance/securitization

## Entity: finance/credit-migration
- Title: Credit Migration and Rating Transitions
- Category: Risk
- Language: en
- Key Concepts: Typical One-Year Transition Probabilities (%), Credit Migration and Rating Transitions, transition matrix, Estimation Methods, drift, Asset Value Model, Through-the-Cycle vs Point-in-Time, Point-in-time (PIT), Bond Revaluation, Credit migration, CreditMetrics Framework, Transition Matrix Framework, Rating Momentum, Duration (Hazard Rate) Method, Cohort Method
- References: copula-models, finance/credit-derivatives-cds, finance/value-at-risk, hidden-markov-models, survival-risk-prediction
- Backlinks: finance/credit-risk-models

## Entity: finance/credit-risk-models
- Title: Credit Risk Models
- Category: Risk
- Language: en
- Key Concepts: structural models, Intensity-Based Framework, Reduced-form models, Structural models, Black-Cox (1976), Correlation, Cox process, Calibration, Basel IRB Formula, Default trigger, Merton (1974), Distance to Default, reduced-form (intensity) models, Structural Models, Jarrow-Turnbull (1995)
- References: black-scholes, copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-migration, finance/value-at-risk, finance/xva, gnn-credit-risk, survival-risk-prediction
- Backlinks: finance/cdo-tranches, finance/credit-derivatives-cds, finance/securitization

## Entity: dv01
- Title: DV01 (Dollar Value of a 01)
- Category: Risk
- Language: en
- Key Concepts: Limitations & Extensions, Extensions:, Curve Trading, DV01, [[cs01]], Portfolio DV01 by Tenor, Sign convention, Convexity Correction, Units, key-rate DV01, Parallel shift only, Mathematical Framework, receive-fixed swap, Relationship to Modified Duration, Futures DV01
- References: black-scholes, brownian-motion, cs01, finance/oas, finance/swaps
- Backlinks: cs01, finance/bond-options-gaussian, finance/interest-rate-term-structure, finance/oas, finance/swaps, futures-hedging, greeks-options

## Entity: finance/dispersion-trading
- Title: Dispersion Trading
- Category: Risk
- Language: en
- Key Concepts: Systematic vol strategies, Relative value, Implied Correlation, Correlation spike risk, Risk Management, Basis risk, Correlation Risk Premium, Execution Methods, The Dispersion Trade, short index variance, long single-stock variance, Cross-gamma, Bank dispersion desks, Practical Applications, left-tail correlation risk, Dispersion Trading
- References: black-scholes, copula-models, finance/sabr-model, finance/value-at-risk, finance/variance-swaps, heston-model
- Backlinks: finance/variance-swaps-vix

## Entity: finance/eigenportfolio-rmt
- Title: Eigenportfolio Construction via RMT
- Category: Risk
- Language: en
- Key Concepts: Random Matrix Theory (RMT), Rotation ambiguity, Python: Extracting Signal Eigenportfolios, First Eigenvector, Style Factors, denoised, Denoised Correlation Matrix, Sector Factors, Eigenvalue Spectrum Visualization, Non-Gaussian returns, Financial Applications, Risk Decomposition, Alpha Signal Construction, Eigenportfolios, Statistical Arbitrage
- References: finance/hierarchical-risk-parity, finance/random-matrix-theory, heston-model, math/spectral-theory-operators
- Backlinks: finance/factor-attribution, finance/gnn-finance, finance/hierarchical-risk-parity, finance/markowitz-mean-variance, finance/random-matrix-theory

## Entity: frtb-sa-mr
- Title: FRTB Standardized Approach (SA-MR)
- Category: Risk
- Language: en
- Key Concepts: Standardized Approach for Market Risk (SA-MR), Pro, The Core Logic: Sensitivities, 1. The Sensitivities-Based Method (SBM), Visualization: Capital Stack under FRTB, Related Topics, 3. Residual Risk Add-on (RRAO), B. Vega Risk, FRTB, Greeks (Sensitivities), C. Curvature Risk, Con, FRTB Standardized Approach (SA-MR), A. Delta Risk, 2. Default Risk Charge (DRC)
- References: finance/xva, frtb-es, greeks-options

## Entity: frtb-es
- Title: FRTB and Expected Shortfall
- Category: Risk
- Language: en
- Key Concepts: Expected Shortfall (ES), Fundamental Review of the Trading Book (FRTB), P&L Attribution (PLA), Related Topics, 2. Standardized vs. Internal Models (IMA), Tail Blindness, Key Features of FRTB, 3. Non-Modellable Risk Factors (NMRF), Lack of Coherence, 1. Liquidity Horizons, Liquidity Horizons, coherent risk measure, Visualization: VaR vs. ES, Backtesting, average loss
- References: extreme-value-theory, finance/coherent-risk-measures, finance/value-at-risk
- Backlinks: clt, frtb-sa-mr, kelly-jump-diffusion, markov-chebyshev, measure-theory

## Entity: finance/frtb
- Title: FRTB: Fundamental Review of the Trading Book
- Category: Risk
- Language: en
- Key Concepts: P&L Attribution Test (PLA), Related Articles, FRTB ES scaled for liquidity horizons, Implementation, Key Changes vs Basel 2.5, FRTB Liquidity Horizons, FRTB: Fundamental Review of the Trading Book, FRTB (Basel IV / BCBS 2019), Expected Shortfall
- References: cornish-fisher-cvar, extreme-value-theory, finance/isda-simm, finance/value-at-risk

## Entity: finance/factor-attribution
- Title: Factor Risk Attribution and Decomposition
- Category: Risk
- Language: en
- Key Concepts: Factor Risk Decomposition, Factor Risk Attribution and Decomposition, Marginal Contribution to Risk (MCTR), Related Articles, Brinson-Hood-Beebower (BHB) Decomposition, Percent Contribution to Risk, Ex-Post vs Ex-Ante vs Risk Budgeting, Factor attribution, Implementation
- References: fama-macbeth-regression, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, ts-cs-factor-analysis
- Backlinks: alpha-orthogonalization, finance/apt-ross, finance/capm

## Entity: fraud-detection
- Title: Fraud Detection for Transactions
- Category: Risk
- Language: en
- Key Concepts: Device/channel features, Isolation Forest, Feature Engineering, Precision-Recall Trade-off Chart, Undersampling, Graph Neural Networks, Explainability, Bayesian Online Learning, Threshold calibration, Geographic features, Key Metrics, Temporal features, Amount features, Concept drift, Adversarial attacks
- References: finance/gan, finance/monte-carlo-method, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: finance/gan, finance/gnn-finance, finance/shap-interpretability, gnn-credit-risk, graph-neural-networks

## Entity: futures-hedging
- Title: Futures Hedging
- Category: Risk
- Language: en
- Key Concepts: Basis and Basis Risk, Duration-Based Hedging, Basis risk, Agricultural hedging, Futures Hedging, Cross-Hedging, basis, Hedge Effectiveness Chart, Optimal Number of Contracts, Stack and Roll, Equity portfolio insurance, Interest rate hedging, Futures hedging, Practical Applications, Minimum Variance Hedge Ratio
- References: dv01, finance/swaps, finance/value-at-risk, geometric-brownian-motion, optimal-execution
- Backlinks: finance/value-at-risk

## Entity: finance/hierarchical-risk-parity
- Title: Hierarchical Risk Parity (HRP)
- Category: Risk
- Language: en
- Key Concepts: No expected returns, Matrix Inversion, Weight Stability, dendrogram, Requires Returns Forecast, The Three Steps of HRP, graph theory, HERC extension, recursive risk allocation, Robustness, Sensitivity to Noise, Alternative to equal-weight, Dynamic rebalancing, Crisis resilience, Mathematical Properties
- References: finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/value-at-risk, kelly-criterion
- Backlinks: bayesian-black-litterman, convex-optimization-trading, fama-macbeth-regression, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/factor-attribution, finance/markowitz-mean-variance, finance/meta-labeling, finance/random-matrix-theory, model-free-rl-factors, numeraire-invariant-hedging, portfolio-optimization-ml, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis

## Entity: finance/isda-simm
- Title: ISDA SIMM: Standard Initial Margin Model
- Category: Risk
- Language: en
- Key Concepts: Risk Classes, 1. Weighted Sensitivity, 4. Total SIMM, ISDA SIMM, Vega, Architecture, Curvature add-on, Curvature, sensitivity-based, Sensitivity Types, Related Articles, Margin Formula, Delta, 10 business days, 2. Bucket Margin
- References: copula-models, cornish-fisher-cvar, finance/swaps, finance/value-at-risk, finance/xva
- Backlinks: finance/frtb, finance/repo-market-systemic

## Entity: kelly-criterion
- Title: Kelly Criterion
- Category: Risk
- Language: en
- Key Concepts: Sports betting and prediction markets, Parameter estimation risk, Wealth Growth Comparison, Sharpe ratio divided by $\sigma$, Kelly Criterion, Correlation, The Kelly Formula: Discrete Case, Discrete vs. continuous time, Leverage management, Background, Non-stationarity, Limitations and Extensions, Practical Applications, Practical constraints, Log-Wealth Maximization
- References: finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, portfolio-optimization-ml
- Backlinks: bayesian-kelly, finance/hierarchical-risk-parity, finance/pe-fund-metrics, kelly-jump-diffusion, merton-portfolio, universal-portfolios

## Entity: finance/libor-sofr
- Title: LIBOR to SOFR Transition
- Category: Risk
- Language: en
- Key Concepts: SOFR In Arrears, Replacement Rates, LIBOR (London Interbank Offered Rate), Related Articles, ISDA Fixed Spread Adjustments, SOFR (Secured Overnight Financing Rate), LIBOR to SOFR Transition, LIBOR vs SOFR, Transition Timeline, SOFR Compounded, Rate Types, Implementation, Term SOFR
- References: finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, finance/xva
- Backlinks: finance/cir-hull-white, finance/interest-rate-term-structure

## Entity: network-risk-cascades
- Title: Network Models and Default Cascades
- Category: Risk
- Language: en
- Key Concepts: Edges ($E$), Default Cascade, DebtRank, Related Topics, Visualization: Network Contagion, Contagion Threshold, more connectivity can be dangerous, Directed Graph, The Paradox of Connectivity, Nodes ($V$), Network Models and Default Cascades, The Financial Network as a Graph, DebtRank: Centrality for Risk, Default Cascades and the Domino Effect, interconnectedness
- References: cva-wrong-way-risk, finance/repo-market-systemic, finance/systemic-contagion-debtrank

## Entity: finance/oas
- Title: Option-Adjusted Spread (OAS)
- Category: Risk
- Language: en
- Key Concepts: Prepayment model, Model dependency, Python: OAS Calculation via Monte Carlo, OAS in Mortgage-Backed Securities (MBS), For MBS, Why Adjust for Options?, Mathematical Framework, For Putable Bonds, ASW, Volatility sensitivity, Negative convexity, Limitations and Extensions, OAS < Z-Spread, For Callable Bonds, OAS > Z-Spread
- References: dv01, finance/longstaff-schwartz, finance/monte-carlo-method, finance/sabr-model
- Backlinks: dv01, finance/nelson-siegel-svensson, finance/sabr-model, finance/securitization

## Entity: portfolio-optimization-ml
- Title: Portfolio Optimization with ML
- Category: Risk
- Language: en
- Key Concepts: Estimation window sensitivity, Diversification Ratio, Python: Full HRP Implementation, agglomerative clustering, Key Metrics, Black-Litterman with ML Views, Sharpe Ratio, Step 4: Recursive Bisection, Maximum Drawdown, Portfolio Optimization, Classical Markowitz Framework, CVaR optimization, Limitations and Extensions, Hierarchical Risk Parity (HRP), Visualization
- References: finance/gan, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/random-matrix-theory, finance/value-at-risk, math/spectral-theory-operators, mcmc, model-free-rl-factors, transformer-architecture
- Backlinks: convex-optimization-trading, fama-macbeth-regression, finance/pe-fund-metrics, kelly-criterion

## Entity: finance/pe-fund-metrics
- Title: Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve
- Category: Risk
- Language: en
- Key Concepts: TVPI = DPI + RVPI = MOIC, Core Metrics, timing, Related Articles, DPI (Distributions to Paid-In), Target Benchmarks by Strategy, IRR limitations, The J-Curve, DPI and RVPI, Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve, Implementation, IRR — Internal Rate of Return, MOIC — Multiple on Invested Capital, Example, PME — Public Market Equivalent
- References: finance/monte-carlo-method, finance/repo-market-systemic, finance/value-at-risk, kelly-criterion, portfolio-optimization-ml

## Entity: finance/repo-market-systemic
- Title: Repo Market and Systemic Risk
- Category: Risk
- Language: en
- Key Concepts: Cash lender, Primary Reserve Fund, Tri-party repo, repo (repurchase agreement), Repo Market and Systemic Risk, Lessons from the 2008 Crisis, Simulation, Cash borrower, Dodd-Frank / EMIR, Related Articles, GCF Repo, Cash Flows, Haircut, Mechanics, General vs Special Collateral
- References: extreme-value-theory, finance/isda-simm, finance/kyle-lambda, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: finance/pe-fund-metrics, network-risk-cascades

## Entity: finance/securitization
- Title: Securitization
- Category: Risk
- Language: en
- Key Concepts: Non-agency MBS, Dodd-Frank (2010), Senior tranche interest, Mezzanine principal, Auto loan ABS, OAS — Option-Adjusted Spread, Agency vs. Non-Agency, Agency MBS, CLOs (Collateralized Loan Obligations), Senior fees, Mortgage-Backed Securities (MBS), Correlation breakdown, Rating agency failures, Asset-Backed Securities (ABS), Synthetic Securitization
- References: copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-risk-models, finance/oas, finance/value-at-risk
- Backlinks: finance/cdo-tranches

## Entity: sharpe-ratio-statistics
- Title: Statistics of Sharpe Ratios
- Category: Risk
- Language: en
- Key Concepts: Walk-forward validation, Research pipeline, Non-spherical distributions, Asymptotic Distribution, Serial correlation inflates SR, IID assumption, Mathematical Framework, PSR, Short samples, Deflated SR, Hierarchical testing, Minimum Track Record Length, Estimation error dominates at short horizons, Performance attribution, Background
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/value-at-risk, hidden-markov-models, mcmc

## Entity: finance/stylized-facts-returns
- Title: Stylized Facts of Financial Returns
- Category: Risk
- Language: en
- Key Concepts: not a theoretical defect, 6. Aggregational Gaussianity, multifractal models, returns, empirical foundation, For volatility forecasting, 3. Volatility clustering, becomes closer to normal, squared, 11. Multifractality, 5. Leverage effect, Related Articles, For market making, For option pricing, Modern programme
- References: arch-models, copula-models, finance/bipower-variation, finance/capm, finance/efficient-market-hypothesis, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, garch-models, heston-model
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/hyperbolic-distributions, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, math/central-limit-theorem, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: survival-risk-prediction
- Title: Survival-Based Risk Prediction
- Category: Risk
- Language: en
- Key Concepts: Limit order survival, censoring, Cox Proportional Hazards Model, cause-specific hazard, cumulative hazard function, Survival Analysis, Multi-state models, Mathematical Framework, Cox model, Machine learning extensions, Portfolio credit risk, PD term structure, cumulative incidence function, Survival and Hazard Functions, Competing Risks
- References: black-scholes, copula-models, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/credit-migration, finance/credit-risk-models, gnn-credit-risk

## Entity: convex-optimization-trading
- Title: Systematic Portfolio Trading via Convex Optimization
- Category: Risk
- Language: en
- Key Concepts: Linear cost, Index Replication, Convexity guarantee, Limitations & Extensions, Extensions:, Model Predictive Control, Convex Optimization, Mathematical Framework, Robust Optimization, Limitations:, Non-convex constraints, Covariance estimation, [[hierarchical-risk-parity]], Systematic Equity Long/Short, Systematic Portfolio Trading via Convex Optimization
- References: bayesian-black-litterman, black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc, portfolio-optimization-ml
- Backlinks: bayesian-black-litterman, convex-analysis, convexity, entropy-pooling, finance/adversarial-stress-testing, finance/alpha-stacking, finance/markowitz-mean-variance, gradient-hessian-jacobian, lagrange-multipliers, linear-programming, martingale-optimal-transport

## Entity: finance/systemic-contagion-debtrank
- Title: Systemic Risk and DebtRank
- Category: Risk
- Language: en
- Key Concepts: Propagation, DebtRank, Comparison with Other Systemic Risk Metrics, State, Related Articles, Node States, Stress level, Dynamic DebtRank, Relative impact matrix, DebtRank Algorithm, Financial Networks, Extensions, Systemic Impact Score, Example, Implementation
- References: cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/nash-equilibrium, finance/value-at-risk
- Backlinks: cva-wrong-way-risk, finance/black-swan-scenarios, finance/gnn-finance, finance/repo-market-systemic, graph-theory, network-risk-cascades

## Entity: finance/value-at-risk
- Title: Value at Risk (VaR)
- Category: Risk
- Language: en
- Key Concepts: Expected Shortfall (ES), Regulatory capital (Basel III/IV), Non-subadditivity, Christoffersen Conditional Coverage Test, Risk limits, Conditional VaR (CVaR), Value at Risk (VaR), Parametric (Variance-Covariance) VaR, 1. Historical Simulation, Mathematical Framework, Basel III Traffic Light System, coherent risk measure, Model risk, 2. Parametric (Delta-Normal), Expected Shortfall (CVaR)
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/xva, futures-hedging, garch-models
- Backlinks: alternative-data-alpha, amihud-illiquidity, copula-models, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/copula-models, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/frtb, finance/gan, finance/hierarchical-risk-parity, finance/isda-simm, finance/monte-carlo-method, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/quasi-monte-carlo, finance/random-matrix-theory, finance/realized-kernels, finance/securitization, finance/systemic-contagion-debtrank, finance/xva, fraud-detection, frtb-es, futures-hedging, generative-scenario-models, kelly-criterion, llm-financial-analysis, lob-prediction, math/lundberg-cramer-ruin, news-sentiment-trading, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, rl-trader, sharpe-ratio-statistics, student-t-hmm-bond-regimes, volatility-forecasting

## Entity: finance/variance-swaps-vix
- Title: Variance Swaps and the VIX
- Category: Risk
- Language: en
- Key Concepts: VIX futures, model-independent, Variance Swap Mechanics, VIX index, P&L of a Delta-Hedged Option, Payoff, variance risk premium, The VIX Index, VIX term structure, VIX options, Variance Swaps and the VIX, Carry strategies, VIX Derivatives, Variance Swap vs Volatility Swap, VIX basis
- References: black-scholes, finance/dispersion-trading, finance/variance-swaps, finance/volatility-surface, garch-models, greeks-options
- Backlinks: finance/delta-hedging-practice

## Entity: finance/xva
- Title: XVA (Valuation Adjustments)
- Category: Risk
- Language: en
- Key Concepts: DVA, CSA negotiations, XVA (Valuation Adjustments), Model dependency, XVA, FRTB-CVA, Stress testing, Mathematical Framework, KVA — Capital Valuation Adjustment, Wrong-way risk (WWR), MVA, Capital optimization, FVA — Funding Valuation Adjustment, Trade pricing, Expected Exposure
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
- Key Concepts: Value at Risk ($VaR_\alpha$):, 1. VaR & Expected Shortfall (CVaR), Expected Shortfall ($CVaR_\alpha$):, 2. Performance Metrics, Quantitative Risk Management: VaR & CVaR, See Also
- References: course-quant-trading, optimal-stopping-and-kelly, statistical-arbitrage-and-pairs-trading
- Backlinks: copula-models-and-tail-dependence, credit-risk-modeling-and-structural-models, portfolio-optimization-and-black-litterman, portfolio-risk-decomposition-marginal-var, stat-tests-for-trading-strategies, statistical-arbitrage-and-pairs-trading

## Entity: deep-rl-execution
- Title: Deep RL for Trade Execution
- Category: Scientific ML
- Language: en
- Key Concepts: Simulator gap, Implementation Shortfall, Almgren-Chriss Closed-Form Baseline, Sell-side execution desks, Overview, Deep RL for Trade Execution, MDP Formulation, Action, Transition, Mathematical Framework, Risk controls, Limitations, Performance Comparison, Finance:, Nevmyvaka et al. (2006)
- References: finance/market-impact-scaling, finance/shannon-entropy, generative-scenario-models, lob-prediction, optimal-execution, reinforcement-learning, rl-trader, temporal-fusion-transformer
- Backlinks: ai-market-making, alpha-factor-research, ml-options-pricing, offline-rl, optimal-execution, reinforcement-learning, rough-paths, temporal-fusion-transformer, tool-use

## Entity: generative-scenario-models
- Title: Generative Models for Scenario Generation
- Category: Scientific ML
- Language: en
- Key Concepts: CCR stress testing, VAE Training Objective, Volatility clustering, Distribution Comparison, Architecture, TimeGAN for Financial Paths, Excess kurtosis, Overview, Variational Autoencoders (VAEs), Generative Adversarial Networks (GANs), Diffusion models for equity returns, FinGAN, Mathematical Framework, stylised facts, FRTB Internal Models Approach
- References: copula-models, extreme-value-theory, finance/adversarial-stress-testing, finance/monte-carlo-method, finance/value-at-risk, garch-models, generative-models, stochastic-differential-equations, temporal-fusion-transformer
- Backlinks: deep-rl-execution, generative-models, gnn-credit-risk, llm-financial-analysis, market-microstructure, temporal-fusion-transformer

## Entity: gnn-credit-risk
- Title: Graph Neural Networks for Credit Risk
- Category: Scientific ML
- Language: en
- Key Concepts: Architecture: GraphSAGE for Large Credit Graphs, Overview, Graph construction is the bottleneck, Retail credit fraud, Mathematical Framework, Graph Neural Networks for Credit Risk, Label scarcity, Limitations, Finance:, Interbank contagion analysis, Graph [[attention-mechanisms|Attention]] Network (GAT), FICO (2022), Two Sides, AI:, Bao et al. (2023)
- References: attention-mechanisms, copula-models, finance/xva, fraud-detection, generative-scenario-models, graph-neural-networks, llm, llm-financial-analysis, spectral-graph-theory, survival-risk-prediction, transformer-architecture
- Backlinks: finance/credit-risk-models, graph-neural-networks, llm-financial-analysis

## Entity: kan
- Title: Kolmogorov-Arnold Networks (KAN)
- Category: Scientific ML
- Language: en
- Key Concepts: vs [[transformer-architecture|MLP]]:, Spectral analysis:, Overview, How It Works, Mathematical Framework, Mathematics:, Limitations, Symbolic regression interface., Representation efficiency., Symbolic regression fragility., B-spline activations., Scalability to high dimensions., Grid resolution choice., AI:, Physics equation discovery:
- References: attention-mechanisms, conformal-field-theory, equivariant-nn, finance/spectral-analysis, kolmogorov-arnold-theorem, learnable-activations, pinns, qft-basic, transformer-architecture
- Backlinks: kolmogorov-arnold-theorem, learnable-activations, pinns

## Entity: llm-financial-analysis
- Title: LLM for Financial Analysis
- Category: Scientific ML
- Language: en
- Key Concepts: Counterparty due diligence, [[rag]] Pipeline for SEC Filings, Timeliness, Hallucination risk, Adversarial inputs, Regulatory liability, Domain-Specific Models, Overview, Tool Use for Live Data, Mathematical Framework, Information Extraction as Conditional Generation, Limitations, Finance:, Credit covenant surveillance, Sentiment classification
- References: finance/value-at-risk, fine-tuning, generative-scenario-models, gnn-credit-risk, inference-serving, llm, news-sentiment-trading, rag, temporal-fusion-transformer
- Backlinks: alpha-factor-research, gnn-credit-risk, mcp, ml-options-pricing, nlp-financial-analysis, rag, research/mla-financial-reasoning, temporal-fusion-transformer, tool-use

## Entity: neural-operators
- Title: Neural Operators
- Category: Scientific ML
- Language: en
- Key Concepts: Resolution invariance:, Universal Approximation for Operators, FNO Architecture in Practice, Workflow:, DeepONet: Branch and Trunk Decomposition, Output:, Fourier layers:, Weather & climate:, Lift:, Grid type, Resolution transfer, Fluid dynamics:, DeepONet, Training data, Trunk network:
- References: ai-physics/hamiltonian-nn, equivariant-nn, fokker-planck-equation, numerical-pde-finance, partial-differential-equations, pinns, stochastic-differential-equations
- Backlinks: fourier-neural-operators

## Entity: pinns
- Title: Physics-Informed Neural Networks (PINNs)
- Category: Scientific ML
- Language: en
- Key Concepts: Analytical exactness:, Architecture choice., Automatic differentiation., Overview, How It Works, Quantum mechanics:, Mathematical Framework, The two sides of a PINN, Limitations, Scalability., Finance:, Geophysics:, Fluid dynamics:, Heat transfer:, Physics-Informed Neural Networks (PINNs)
- References: ai-physics/hamiltonian-nn, automatic-differentiation, black-scholes, equivariant-nn, finance/fractional-fokker-planck, kan, partial-differential-equations, schrodinger-equation
- Backlinks: ai-physics/hamiltonian-nn, automatic-differentiation, deep-ritz-method, equivariant-nn, fourier-neural-operators, gaussian-processes, kan, kolmogorov-arnold-theorem, kuramoto-model, learnable-activations, neural-odes, neural-operators, partial-differential-equations

## Entity: temporal-fusion-transformer
- Title: Temporal Fusion Transformer
- Category: Scientific ML
- Language: en
- Key Concepts: Volatility surface prediction, Architecture, Temporal Fusion [[transformer-architecture|Transformer]] (TFT), Overview, Observed inputs, Position-wise feed-forward + gating, Gating Mechanism, Sequence encoding, P50 forecast error, Factor return forecasting, Mathematical Framework, Limitations, Finance:, Temporal self-[[attention-mechanisms|attention]], Variable selection
- References: arima-models, attention-mechanisms, deep-rl-execution, garch-models, generative-scenario-models, inference-serving, llm-financial-analysis, transformer-architecture, volatility-forecasting
- Backlinks: ai-market-making, alpha-factor-research, deep-rl-execution, generative-scenario-models, llm-financial-analysis, ml-options-pricing, nlp-financial-analysis

## Entity: ar-models
- Title: AR (Autoregressive) Models
- Category: Signal Analysis
- Language: en
- Key Concepts: lag operator, Stationarity Condition, ARCH/GARCH, Forecasting, Limitations & Extensions, Extensions:, Pairs Trading, Yule-Walker equations, ARIMA, outside, VAR (Vector AR), Unconditional variance, Interest Rate Modeling, Mathematical Framework, AR (Autoregressive) Models
- References: arch-models, arima-models, arma-models, finance/levy-processes, finance/spectral-analysis, math/spectral-theory-operators, mcmc, volatility-forecasting
- Backlinks: arch-models, arima-models, arma-models

## Entity: arima-models
- Title: ARIMA (Integrated ARMA)
- Category: Signal Analysis
- Language: en
- Key Concepts: Limitations & Extensions, Spurious stationarity, Special cases, Cointegration, Long memory, Extensions:, Unit Root Tests, Macro Forecasting, Invertibility, Full ARIMA specification, Mathematical Framework, Yield Curve Dynamics, Integration order, Limitations:, ARFIMA
- References: ar-models, arma-models, finance/cointegration, finance/hurst-exponent, finance/levy-processes, mcmc, volatility-forecasting
- Backlinks: ar-models, arma-models, finance/cointegration, temporal-fusion-transformer

## Entity: arma-models
- Title: ARMA (Autoregressive Moving Average)
- Category: Signal Analysis
- Language: en
- Key Concepts: Limitations & Extensions, Long memory, Extensions:, Stationarity condition, Box-Jenkins Identification, ARMA-GARCH, MA models, ARIMA, Interest Rate Modeling, Invertibility condition, Mathematical Framework, Kalman filter, Autocovariance structure, AR models, Risk Factor Residuals
- References: ar-models, arima-models, black-scholes, finance/spectral-analysis, mcmc, volatility-forecasting
- Backlinks: ar-models, arch-models, arima-models

## Entity: finance/dft
- Title: Discrete Fourier Transform (DFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Spectral Leakage and Window Functions, Nyquist frequency, not, Periodic extension:, anti-aliasing low-pass filter, Limitations, Window Comparison, Zero-Padding, Blackman, Matrix form:, Uniqueness:, Hamming, spectral interpolation, Interpreting the Coefficients, Outlier sensitivity:
- References: finance/fft, finance/hilbert-huang-transform, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/fft, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fft
- Title: Fast Fourier Transform (FFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Split-radix, Complexity Analysis, Convolution Theorem via FFT, Spectral analysis:, Fast Fourier Transform (FFT), $N = 2^m$:, Linear convolution, The Butterfly Operation, Radix-2 DIT, two, Correlation and autocorrelation:, Limitations, Radix-2 DIF, Neural networks:, bit-reversed
- References: finance/dft, finance/shor-algorithm, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/dft, finance/hyperbolic-distributions, finance/levy-esscher-continuous, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fisher-transform
- Title: Fisher Transform
- Category: Signal Analysis
- Language: en
- Key Concepts: Mean-reversion signals, Fisher Transform, Trigger Line, Mathematical Formula, The Fisher Transform, Python: Fisher Transform Implementation, Trading Logic, Options positioning, Lag, Limitations and Extensions, Practical Applications, Range dependency, Normalisation, Visualization: Sharpening the Peaks, Transformation
- References: finance/hilbert-huang-transform, finance/hurst-exponent, finance/spectral-analysis
- Backlinks: finance/hilbert-huang-transform, finance/spectral-analysis, information-geometry-finance

## Entity: finance/hilbert-huang-transform
- Title: Hilbert-Huang Transform (HHT)
- Category: Signal Analysis
- Language: en
- Key Concepts: End effects, Intrinsic Mode Functions (IMFs), instantaneous frequency, Mode mixing, Non-uniqueness, Adaptive denoising, Basis Functions, Physical interpretability, Financial Applications, Instantaneous (Local), Market cycle extraction, Completeness, Stage 2: Hilbert Spectral Analysis, Hilbert-Huang Transform (HHT), IMF Decomposition Visualization
- References: finance/fisher-transform, finance/hurst-exponent, finance/spectral-analysis, wavelet-transform
- Backlinks: finance/dft, finance/fisher-transform, finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/realized-kernels
- Title: Intraday Volatility via Realized Kernels
- Category: Signal Analysis
- Language: en
- Key Concepts: Parzen Kernel, refresh-time, VaR models, Market Microstructure Noise (MMN), HAR-RK model, Realized Kernels, The Realized Kernel Estimator, Mathematical Framework, Intraday Volatility Forecasting via Realized Kernels, signature plot, Options pricing, Execution algorithms, Optimal Sampling via Signature Plots, Tukey-Hanning Kernel, Robustness
- References: brownian-motion, finance/spectral-analysis, finance/value-at-risk, garch-models, geometric-brownian-motion, volatility-forecasting, wavelet-transform
- Backlinks: finance/bipower-variation, finance/spectral-analysis, finance/wavelet-transform, jump-robust-volatility, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: kalman-filter
- Title: Kalman Filter
- Category: Signal Analysis
- Language: en
- Key Concepts: Python: Full Implementation, Kalman Gain Dynamics, Unscented Kalman Filter (UKF), Kalman Smoother (RTS Smoother), Extended Kalman Filter (EKF), Rauch-Tung-Striebel (RTS), Kalman filter, Kalman gain, state equation, Kalman Filter, Step 2: Update, Extensions, Log-Likelihood for Parameter Estimation, Background, Factor model estimation
- References: finance/particle-filter, hidden-markov-models, mcmc, volatility-forecasting
- Backlinks: conditionally-gaussian-processes, factor-graphs-inference, finance/cointegration, finance/hidden-markov-models, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/transformer-timeseries, innovation-process, math/conditional-expectation-sigma, math/sequential-hypothesis-testing, math/spectral-representation-processes, math/stationary-wide-spectral, multivariate-normal-distribution, nonlinear-filtering, state-space-models

## Entity: finance/lempel-ziv-complexity
- Title: Lempel-Ziv Complexity
- Category: Signal Analysis
- Language: en
- Key Concepts: Multidimensional extension, Lempel-Ziv Complexity (LZ), Alternative complexity measures, Regime Detection, Low LZ Complexity, Mathematical Framework, LZ78 vs LZ76, Market Efficiency, High LZ Complexity, Visualization: Complexity Trends, Python: LZ Complexity with Rolling Analysis, Financial Applications, Short sequences, Lempel-Ziv (LZ) Complexity, Sensitivity to order
- References: finance/hurst-exponent, finance/phase-space-reconstruction, finance/shannon-entropy, hidden-markov-models
- Backlinks: finance/hurst-exponent, finance/phase-space-reconstruction, finance/sha-256, finance/shannon-entropy, financial-entropy, kolmogorov-complexity

## Entity: finance/phase-space-reconstruction
- Title: Phase Space Reconstruction
- Category: Signal Analysis
- Language: en
- Key Concepts: Lyapunov Exponents and Chaos Detection, largest Lyapunov exponent, Average Mutual Information, Takens' Embedding Theorem, Time Delay $\tau$: Mutual Information Method, The Method of Delays, Parameter Selection, Noise Sensitivity, Skepticism in finance, Chaos vs. Noise, Embedding Dimension $m$: False Nearest Neighbors, Financial Applications, embedding dimension, time delay, correlation dimension
- References: finance/hurst-exponent, finance/lempel-ziv-complexity, finance/particle-filter, finance/spectral-analysis, hidden-markov-models
- Backlinks: finance/hidden-markov-models, finance/hurst-exponent, finance/lempel-ziv-complexity

## Entity: finance/prony-hankel-spectral
- Title: Prony's Method and Hankel Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Comparison with FFT, Regime Interpretation, Related Articles, Hankel SVD Filtering, Hankel matrix, Step 3: Amplitude Estimation, Algorithm, Step 1: Linear Prediction via Hankel System, Problem Formulation, Prony's Method and Hankel Spectral Analysis, Step 2: Root Finding, Prony's method, Implementation
- References: finance/hilbert-huang-transform, finance/singular-spectral-analysis, finance/spectral-analysis, fourier-transform, wavelet-transform

## Entity: finance/singular-spectral-analysis
- Title: Singular Spectral Analysis (SSA)
- Category: Signal Analysis
- Language: en
- Key Concepts: Oscillations, Data-adaptive, Forecasting limitations, trajectory matrix, Step 3 — Grouping, Window length choice, Empirical Orthogonal Functions, Volatility regime decomposition, Window choice, Principal Components, Mathematical Framework, Noise, Non-uniqueness of grouping, singular spectrum, Trend
- References: finance/random-matrix-theory, finance/spectral-analysis, math/spectral-theory-operators, volatility-forecasting, wavelet-transform
- Backlinks: finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform

## Entity: finance/spectral-analysis
- Title: Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Intraday seasonality, Multiple testing, Fast Fourier Transform (FFT), Power Spectrum Visualization, Nyquist frequency, Aliasing, phase spectrum, Welch's Method, cross-spectrum, Cross-market lead-lag, Leakage, squared coherence, Parseval's theorem, Mathematical Framework, inconsistent
- References: finance/fisher-transform, finance/hilbert-huang-transform, finance/realized-kernels, finance/singular-spectral-analysis, wavelet-transform
- Backlinks: ar-models, arma-models, convolutional-volatility-resolution-clustering, finance/dft, finance/fft, finance/fisher-transform, finance/hilbert-huang-transform, finance/phase-space-reconstruction, finance/prony-hankel-spectral, finance/realized-kernels, finance/shor-algorithm, finance/singular-spectral-analysis, finance/wavelet-transform, finance/zeta-field, fourier-transform, kan, kolmogorov-arnold-theorem, volatility-modulated-spectral-surface

## Entity: volatility-modulated-spectral-surface
- Title: Volatility-Modulated Spectral Surface (VMSS)
- Category: Signal Analysis
- Language: en
- Key Concepts: Noise separation, Regime detection, spectral [[shannon-entropy|entropy]], Volatility-Modulated Transform, Circular dependency, Multidimensional extension, VMSS Spectral Entropy Over Time, Spectral [[shannon-entropy|Entropy]] of VMSS, Adaptive Window Selection, Mathematical Framework, persistent spectral patterns, Adaptive denoising, adaptive window, Invariance to volatility level, volatility-adjusted spectral power
- References: finance/gan, finance/realized-kernels, finance/shannon-entropy, finance/spectral-analysis, garch-models, inference-serving, volatility-forecasting, wavelet-transform
- Backlinks: convolutional-volatility-resolution-clustering

## Entity: finance/wavelet-transform
- Title: Wavelet Transform (CWT)
- Category: Signal Analysis
- Language: en
- Key Concepts: fast wavelet algorithm, admissibility constant, wavelet correlation, Multi-Scale Wavelet Power, Discrete Wavelet Transform (DWT), Choice of mother wavelet, Mexican Hat, 2D wavelets, wavelet coherence, wavelet variance, Stationary Wavelet Transform (SWT), Cross-market lead-lag, Mathematical Framework, Continuous Wavelet Transform, Wavelet Variance and Correlation
- References: finance/hilbert-huang-transform, finance/realized-kernels, finance/singular-spectral-analysis, finance/spectral-analysis, volatility-forecasting

## Entity: convolution-math
- Title: Convolution
- Category: Signal Processing
- Language: en
- Key Concepts: Continuous and Discrete, Overview

## Entity: dct-math
- Title: Discrete Cosine Transform (DCT)
- Category: Signal Processing
- Language: en
- Key Concepts: Overview, Applications

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
- Key Concepts: Overview, Anti-Aliasing
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
- Key Concepts: Gaussian Processes, infinite-dimensional, Related Topics, Why Use BNP?, Automatic Complexity Selection, The Dirichlet Process (DP), Indian Buffet Process (IBP), Bayesian Non-parametrics, Flexibility, latent feature models, Stick-Breaking construction, Uncertainty Quantification, Chinese Restaurant Process (CRP), Gaussian Processes (GP), Visualization: Model Growth
- References: gaussian-processes, mixture-of-experts
- Backlinks: gmm

## Entity: dirichlet-processes
- Title: Bayesian Non-parametrics: Dirichlet Processes
- Category: Statistical Learning
- Language: en
- Key Concepts: Stick-Breaking Construction, Mathematical Definition, The Chinese Restaurant Process (CRP), Applications in Clustering, Bayesian Non-parametrics: Dirichlet Processes

## Entity: concentration-of-measure
- Title: Concentration of Measure
- Category: Statistical Learning
- Language: en
- Key Concepts: Concentration of Measure, Talagrand's Concentration Inequality, Rademacher Complexity and Generalization, The Phenomenon, McDiarmid's Inequality

## Entity: sgd-convergence-theory
- Title: Convergence Theory of Stochastic Gradient Descent
- Category: Statistical Learning
- Language: en
- Key Concepts: Strong Convexity, Convergence Theory of Stochastic [[convex-optimization|Gradient Descent]], Convex and Smooth Functions, Problem Formulation, Non-Convex Optimization and the PL Condition
- References: convex-optimization

## Entity: differential-privacy
- Title: Differential Privacy in ML
- Category: Statistical Learning
- Language: en
- Key Concepts: Why It Matters, Differentially Private Stochastic [[convex-optimization|Gradient Descent]] (DP-SGD), Noise Addition, Gradient Clipping, The Privacy-Utility Trade-off, Differential Privacy in Machine Learning, High Noise, Visualization: Privacy Budget vs. Accuracy, The Definition: (ε, δ)-Privacy, DP-SGD: Training with Privacy, Robustness, $\epsilon$ (Privacy Budget), $\delta$, Low Noise, membership inference attacks
- References: ai-theory/adversarial-examples, convex-optimization, federated-learning
- Backlinks: federated-learning

## Entity: gmm
- Title: Gaussian Mixture Models (GMM)
- Category: Statistical Learning
- Language: en
- Key Concepts: Fitting the Model: The EM Algorithm, Initialize, Related Topics, The Model Definition, M-step, soft assignment, responsibility, Repeat, Soft Clustering (Responsibilities), Visualization: GMM vs K-Means, E-step, mixing weight, Relationship to K-Means, Gaussian Mixture Models (GMM)
- References: bayesian-nonparametrics, expectation-maximization
- Backlinks: em-algorithm, matrix-calculus

## Entity: kernel-methods-rkhs
- Title: Kernel Methods & RKHS
- Category: Statistical Learning
- Language: en
- Key Concepts: The Representer Theorem, Kernel Methods & Reproducing Kernel Hilbert Spaces (RKHS), Reproducing Kernel Hilbert Space, reproducing property, characteristic, Kernel Mean Embeddings, Mercer's Theorem
- References: math/spectral-theory-operators
- Backlinks: attention-kernel, hilbert-banach-spaces, kde

## Entity: linear-regression
- Title: Linear Regression and Gauss-Markov
- Category: Statistical Learning
- Language: en
- Key Concepts: Homoscedasticity, The Model, Ordinary Least Squares (OLS), Gauss-Markov Theorem, Related Topics, Zero Mean, Linear Regression and the Gauss-Markov Theorem, 1. Ridge Regression (L2 Penalty), No Autocorrelation, Visualization: The Bias-Variance Trade-off, 2. Lasso Regression (L1 Penalty), BLUE (Best Linear Unbiased Estimator), Normal Equation, The Gauss-Markov Theorem, exactly zero
- References: bayesian-inference, logistic-regression, mle
- Backlinks: logistic-regression

## Entity: logistic-regression
- Title: Logistic Regression
- Category: Statistical Learning
- Language: en
- Key Concepts: Binary Cross-[[shannon-entropy|Entropy]], Regularization (LASSO/Ridge), 1. The Logistic Model, Logistic Function, Log-Odds, Sigmoid activation, [[asymptotic-stats/mle|Maximum Likelihood Estimation (MLE)]], 3. Interpretation: Odds and Ratios, Decision Boundary, 2. Estimation: Cross-[[shannon-entropy|Entropy]] Loss, Odds Ratio, Logistic Regression: The Link Between Stats and Neural Networks, Multinomial (Softmax), Convexity, Online Learning
- References: convex-optimization, convexity, finance/shannon-entropy, linear-regression, mle, transformer-architecture
- Backlinks: linear-regression

## Entity: normalizing-flows-math
- Title: Mathematical Foundations of Normalizing Flows
- Category: Statistical Learning
- Language: en
- Key Concepts: Liouville Equation, Continuous Normalizing Flows (CNFs), Composition of Flows, Change of Variables Theorem, Mathematical Foundations of Normalizing Flows

## Entity: mechanism-design
- Title: Mechanism Design
- Category: Statistical Learning
- Language: en
- Key Concepts: Data Markets, Famous Examples, stable, Incentive Compatible (IC), "Reverse Game Theory.", 1. Second-Price Auction (Vickrey Auction), Application in AI: Alignment and Governance, AI Alignment, Direct Mechanism, rules, Mechanism Design, 2. Matching Algorithms (Gale-Shapley), Visualization: Revenue vs. Welfare, The Goal: Incentive Compatibility, second-highest price
- References: llm, mean-field-games, online-learning-regret, rlhf

## Entity: mcts
- Title: Monte Carlo Tree Search (MCTS)
- Category: Statistical Learning
- Language: en
- Key Concepts: zero domain knowledge, Monte Carlo Tree Search (MCTS), Policy Network, $\sqrt{\dots}$ (Exploration), Tree Search, Simulation (Rollout), Why MCTS is Revolutionary, Monte Carlo simulations, Expansion, Visualization: Tree Search vs. Rollout, UCT, AlphaGo, $Q(v)/N(v)$ (Exploitation), [[automatic-differentiation|Backpropagation]], Value Network
- References: automatic-differentiation, mdp, monte-carlo-integration, multi-armed-bandits
- Backlinks: orm-prm

## Entity: multi-armed-bandits
- Title: Multi-Armed Bandits
- Category: Statistical Learning
- Language: en
- Key Concepts: Exploration vs. Exploitation trade-off, Multi-Armed Bandits, 3. Thompson Sampling, Regret, 2. UCB (Upper Confidence Bound), Related Topics, Exploration, ad placement, The Setup, Contextual Bandits, Visualization: UCB Action Selection, 1. $\epsilon$-Greedy, sample, Cumulative Regret, Key Algorithms
- References: bayesian-inference, mdp, online-learning-regret
- Backlinks: mcts

## Entity: naive-bayes
- Title: Naive Bayes Classifier
- Category: Statistical Learning
- Language: en
- Key Concepts: NLP, Naive Bayes Classifier: The Power of Independence, Multinomial Naive Bayes, Decision Boundary vs. Probability, Low Variance, 2. Common Variants, 3. Why it Works (The Paradox of Naive Bayes), Related Topics, Real-time Filtering, Zero-Shot Baseline, 4. Modern Use Cases in AI, Bernoulli Naive Bayes, Bayes' Theorem, 1. The Probabilistic Model, Gaussian Naive Bayes
- References: bayesian-inference, decision-theory, finance/shannon-entropy, llm, rag
- Backlinks: bayes-theorem

## Entity: online-learning-regret
- Title: Online Learning and Regret
- Category: Statistical Learning
- Language: en
- Key Concepts: The Online Protocol, Visualization: Regret Scaling, Key Algorithms, Regret, Ad Placement, Exploration-Exploitation Trade-off, Definition of Regret, 2. Follow the Regularized Leader (FTRL), Online Learning and Regret Minimization, learn, Applications, Optimization, 1. Follow the Leader (FTL), UCB (Upper Confidence Bound), Related Topics
- References: convex-optimization, finance/shannon-entropy, math/information-theory, reinforcement-learning
- Backlinks: mechanism-design, multi-armed-bandits, universal-portfolios

## Entity: pca
- Title: Principal Component Analysis (PCA)
- Category: Statistical Learning
- Language: en
- Key Concepts: empirical covariance matrix, eigenvector, unsupervised dimensionality reduction, Data Compression, Spectral Theorem Connection, Visualization: Finding the Projection, Related Topics, Noise Reduction, principal components, SVD (Singular Value Decomposition), Visualization, Applications, maximize the variance, Principal Component Analysis (PCA), Explained Variance
- References: manifold-learning, math/spectral-theory-operators, variational-autoencoders
- Backlinks: alpha-orthogonalization, eigenvalues-eigenvectors, fastest-mean-reversion, matrix-decompositions, multivariate-normal, pca-statarb, tensor-decompositions

## Entity: attention-kernel
- Title: Self-Attention as a Kernel
- Category: Statistical Learning
- Language: en
- Key Concepts: feature map, Related Topics, Linear Transformers and Feature Maps, Kernel Methods, In-Context Learning, The [[attention-mechanisms|Attention]] Mechanism, Linear Transformers, Transformers as Non-parametric Learners, The Kernel Interpretation, Nadaraya-Watson Kernel Regression, Reproducing Kernel Hilbert Space (RKHS), Self-[[attention-mechanisms|Attention]], Self-[[attention-mechanisms|Attention]] as a Kernel, [[convex-optimization|gradient descent]], Visualization: Attention Surface in RKHS
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, kernel-methods-rkhs, state-space-models, transformer-architecture

## Entity: singular-learning-theory
- Title: Singular Learning Theory
- Category: Statistical Learning
- Language: en
- Key Concepts: Resolution of Singularities, Singular Learning Theory, The Free Energy and RLCT, Generalization Error, Real Log Canonical Threshold (RLCT)

## Entity: statistical-mechanics-learning
- Title: Statistical Mechanics of Learning
- Category: Statistical Learning
- Language: en
- Key Concepts: Spin-Glass Transition:, Mathematical Framework, Replica Symmetry Breaking (RSB):, Replica Trick, Key Phenomena, Replica Symmetry (RS):, Phase Transitions, Gibbs distribution, SAT/UNSAT Transition:, capacity, The Replica Trick, Statistical Mechanics of Learning, Related Topics, Information-Theoretic vs. Computational Gap:, Order Parameters and Overlaps
- References: ai-theory/neural-tangent-kernel, information-bottleneck-theory, pac-learning

## Entity: variational-inference-math
- Title: Variational Inference
- Category: Statistical Learning
- Language: en
- Key Concepts: The Reparameterization Trick, Variational Inference, The Evidence Lower Bound (ELBO), Mean-Field Approximation
- References: convex-optimization
- Backlinks: factor-graphs-inference

## Entity: anova
- Title: ANOVA (One-way/Two-way)
- Category: Statistics
- Language: en
- Key Concepts: Two-way ANOVA:, Overview, One-way ANOVA:, One-way vs Two-way
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
- Key Concepts: Hazard Function $h(t)$:, Survival Function $S(t)$:, Key Functions, Overview

## Entity: time-series-basics
- Title: Time Series Basics
- Category: Statistics
- Language: en
- Key Concepts: Stationarity, Overview, Autocorrelation

## Entity: signature-based-models
- Title: Signature-based Models
- Category: Stochastic
- Language: en
- Key Concepts: Path Signature, Sig-GANs, What is a Path Signature?, linear regression, 2. Pricing and Hedging, Dimensionality Reduction, Universal Property, Mathematical Rigor, feature map, Rough Path Theory, non-linear functional, linear, 1. Market Simulation (Generative Models), Why It's a "Game Changer", Sig-VAEs
- References: generative-models, path-dependent-volatility, rough-paths
- Backlinks: path-dependent-volatility

## Entity: copula-models-and-tail-dependence
- Title: Copula Models & Tail Dependence
- Category: Stochastic & Probability
- Language: en
- Key Concepts: Copula Models & Tail Dependence, 1. Sklar's Theorem, See Also
- References: course-quant-trading, portfolio-optimization-and-black-litterman, quant-risk-management-var-cvar

## Entity: stochastic-volatility-heston-model
- Title: Stochastic Volatility & Heston Model
- Category: Stochastic & Probability
- Language: en
- Key Concepts: Stochastic Volatility & Heston Model, See Also
- References: course-quant-trading, stochastic-calculus-and-ito-lemma, volatility-trading-and-variance-swaps
- Backlinks: volatility-surface-sabr-model

## Entity: volatility-surface-sabr-model
- Title: Volatility Surface & SABR Model
- Category: Stochastic & Probability
- Language: en
- Key Concepts: Volatility Surface & SABR Model, See Also
- References: course-quant-trading, option-greeks-and-volatility, stochastic-volatility-heston-model

## Entity: math/backward-sde
- Title: Backward Stochastic Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Reflected BSDEs, $(Y_t, Z_t)$ is the unknown pair, G-expectation, Numerical methods, generator, Malliavin calculus:, Polynomial chaos, Reflected BSDEs and optimal stopping, Historical and contemporary significance, nonlinear Feynman–Kac formula, Backward Stochastic Differential Equations, Existence and uniqueness theory, Deep neural networks, Core applications, Related concepts
- References: feynman-kac, malliavin-calculus, math/martingale-representation, math/quadratic-variation, optional-decomposition, stochastic-control, stochastic-differential-equations
- Backlinks: math/spdes

## Entity: bsdes-nonlinear-pdes
- Title: Backward Stochastic Differential Equations (BSDEs) & Nonlinear PDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Nonlinear Feynman-Kac Formula, Backward Stochastic Differential Equations (BSDEs) & Nonlinear PDEs, Standard Form, Applications

## Entity: clark-ocone-formula
- Title: Clark-Ocone Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Financial Hedging, Clark-Ocone Formula, The Formula, Generalizations
- Backlinks: skorokhod-integral

## Entity: math/convergence-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Main Convergence Theorem, Specialization: Convergence to Levy Processes, Theorem (Emery)., The Semimartingale Topology, deterministic, Drift convergence:, Step 4: Combine., High-frequency econometrics., convergence of the predictable triplets implies convergence of the processes, Step 2: Identification of limits., Related Articles, Convergence of Semimartingales, Key point:, random, Step 3: Characteristic function convergence.
- References: brownian-motion, characteristic-functions, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, math/contiguity-measures, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/convergence-stochastic-integrals, math/density-processes, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/martingale-problem, math/predictable-compensator, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/convergence-stochastic-integrals
- Title: Convergence of Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: UT (uniform tightness), good sequence, Definition., Theorem (Jakubowski-Memin-Pages; Kurtz-Protter)., Related Articles, Good Sequences and the UT Condition, Stronger version., any reasonable discrete-time financial model converges to a continuous-time model, and any trading strategy in the discrete model converges to the corresponding continuous-time strategy, Convergence of Stochastic Integrals, The Main Theorem, The Semimartingale Topology, Application: Euler Scheme Convergence, Application: Discrete Hedging Convergence, Discrete hedging converges to continuous hedging, The Problem
- References: finance/girsanov-semimartingales, finance/semimartingale-models, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, stochastic-differential-equations
- Backlinks: math/convergence-semimartingales, math/quadratic-variation

## Entity: feynman-kac
- Title: Feynman-Kac Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: dimension-independent, Taking expectations:, survival probability, stochastic discount factor, Related Articles, Connection to the Backward Kolmogorov Equation, Discounting and the Stochastic Discount Factor, Numerical Solution: Monte Carlo Instead of Finite Differences, backward Kolmogorov equation, Key step:, Example II: The Heat Equation (V=0), Structural credit risk models., path-integral formulation of quantum mechanics, Applications, Feynman-Kac Formula
- References: black-scholes, finance/girsanov-semimartingales, finance/optimal-stopping-american, fokker-planck-equation, math/martingale-representation, numerical-pde-finance, partial-differential-equations, path-integral, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/backward-sde, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, stochastic-control, stochastic-differential-equations, stochastic-processes

## Entity: hjm-framework
- Title: HJM (Heath-Jarrow-Morton) Framework
- Category: Stochastic Calculus
- Language: en
- Key Concepts: HJM Drift Condition, Infinite-Dimensional Perspective, Forward Rate Dynamics, HJM (Heath-Jarrow-Morton) Framework
- References: math/spdes, stochastic-differential-equations
- Backlinks: finance/cir-hull-white, finance/libor-market-model

## Entity: fractional-brownian-motion-integration
- Title: Integration with Respect to Fractional Brownian Motion
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Pathwise Young and Rough Path Integration, Financial Modeling, Malliavin and Wick-Itô Integrals, Integration with Respect to Fractional Brownian Motion

## Entity: libor-market-model
- Title: LIBOR Market Model (LMM)
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Calibration and Implementation, Lognormal Forward Rates, LIBOR Market Model (LMM), Measure Change and Drift
- Backlinks: finance/bootstrapping-yield-curve

## Entity: local-time-tanaka
- Title: Local Time and Tanaka Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: density of time, Yamada-Watanabe Theorem, Paul Lévy's theorem, Local Time and Tanaka's Formula, Definition and Intuition: Measuring Residence, Visualization: The Occupation Density, Related Topics, Optimal Stopping, Lévy's Theorem and the Reflection Principle, Sticky Brownian Motion, Occupation Time Formula, Applications, Itô calculus of non-smooth functions, Local Time, Dupire Local Volatility
- References: brownian-motion, excursion-theory, math/doob-meyer-decomposition, math/optimal-stopping-markov, stochastic-differential-equations
- Backlinks: math/quadratic-variation

## Entity: levy-ito-decomposition
- Title: Lévy-Itô Decomposition
- Category: Stochastic Calculus
- Language: en
- Key Concepts: 3. Compensated small jumps, Small vs. large jump distinction is mathematical, not economic, Stable process, Small jumps, Compound Poisson process, Poisson Random Measure, Advantages, CGMY Model, Variance-Gamma, Merton Jump-Diffusion, Lévy process, Lévy measure, The Four Components, Definition of Lévy Processes, Lévy-Khintchine triplet
- References: finance/levy-processes, finance/variance-gamma, math/doleans-dade-exponential, math/infinitely-divisible-distributions, math/predictable-compensator, merton-jump-diffusion, stochastic-differential-equations
- Backlinks: math/point-processes, math/quadratic-variation, math/sde-numerical-methods, math/subordinators

## Entity: malliavin-calculus
- Title: Malliavin Calculus
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Malliavin Calculus, Applications: Greeks in Finance, Malliavin Derivative, Clark-Ocone Formula, Introduction
- Backlinks: course-math-for-ai, fbm-integration, math/backward-sde, math/quadratic-variation, math/spdes, math/stratonovich-integral, wiener-chaos

## Entity: malliavin-greeks
- Title: Malliavin Greeks
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Delta and Gamma Weights, Advantages, Integration by Parts on Wiener Space, Malliavin Greeks

## Entity: mckean-vlasov-sdes
- Title: McKean-Vlasov SDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Definition, Non-linear Fokker-Planck Equation, McKean-Vlasov SDEs, $N$-Particle System and Propagation of Chaos
- References: partial-differential-equations, stochastic-differential-equations

## Entity: numerical-methods-jump-diffusions
- Title: Numerical Methods for Jump-Diffusions
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Infinite Activity Lévy Noise, Numerical Methods for Jump-Diffusions, Higher-Order Milstein Schemes, Euler-Maruyama with Jumps
- References: central-limit-theorem, stochastic-differential-equations

## Entity: math/sde-numerical-methods
- Title: Numerical Methods for SDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: split-step, Runge–Kutta Methods for SDEs, Physics Simulations, Semi-implicit, The Standard [[stochastic-differential-equations|SDE]], Dimension, Related Concepts, Mathematical Finance, Verification, Milstein scheme, Weak convergence, Multilevel Monte Carlo, Wagner–Platen expansion, Strong order of convergence, Implicit Euler
- References: brownian-bridge, diffusion-models, feynman-kac, finance/monte-carlo-method, levy-ito-decomposition, math/cameron-martin-formula, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/stratonovich-integral

## Entity: math/predictable-compensator
- Title: Predictable Compensator and Dual Predictable Projection
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Predictable Compensator and Dual Predictable Projection, Levy processes., drift, foundation, compensator of the jump measure, Neuroscience., innovation martingale, Related Articles, Diffusions with jumps., Marked point processes., the law of a semimartingale with independent increments is completely determined by its triplet, Example: Hawkes process., Filtering., Computing Compensators in Practice, Example: Cox process.
- References: brownian-motion, finance/levy-processes, finance/semimartingale-models, martingale-clt, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-martingales, math/doob-meyer-decomposition, math/functional-limit-theorems
- Backlinks: levy-ito-decomposition, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/density-processes, math/infinitely-divisible-distributions, math/martingale-problem, math/quadratic-variation, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/quadratic-variation
- Title: Quadratic Variation
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Semimartingale decomposition and predictable quadratic variation, Itô isometry, local time, Applications in mathematical finance, Definition and fundamental properties, Brownian motion: the canonical example, Path continuity, Quadratic Variation, polarization identity, The Itô isometry through quadratic variation, Related foundations, Itô's formula, Monotonicity, Bilinearity, Itô's formula through quadratic variation
- References: levy-ito-decomposition, local-time-tanaka, malliavin-calculus, math/convergence-stochastic-integrals, math/doob-meyer-decomposition, math/predictable-compensator, stochastic-differential-equations
- Backlinks: math/backward-sde, math/stratonovich-integral

## Entity: reflected-sdes-skorokhod
- Title: Reflected SDEs & Skorokhod Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: RSDE Dynamics, Reflected SDEs & Skorokhod Problem, The Skorokhod Problem, Application to American Options
- References: stochastic-control

## Entity: rough-paths
- Title: Rough Path Theory
- Category: Stochastic Calculus
- Language: en
- Key Concepts: p-rough path, Applications in AI: Signature Transforms, Signature Transform, 2 ≤ p < 3, The Signature of a Path, Robustness, Path Networks, The Fundamental Problem, Compact Representation, Visualization: The Signature Map, iterated integrals, Rough Path Theory, Rough Paths and p-variation, Terry Lyons, 3 ≤ p
- References: brownian-motion, deep-rl-execution, stochastic-differential-equations
- Backlinks: fbm-integration, math/spdes, math/stratonovich-integral, path-dependent-volatility, signature-based-models

## Entity: math/stochastic-calculus/rough-path-signatures
- Title: Rough Path Theory and Signatures
- Category: Stochastic Calculus
- Language: en
- Key Concepts: What is a Path Signature?, Signature, Rough Path Theory, Noise Robustness:, Related Topics, Invariance to Reparameterization:, Signatures in Machine Learning, Quantitative Finance, deterministic, Signature Transforms, Rough Path Theory and Signatures, Key Properties:, Signature Transform, The Problem, Dimension Reduction:
- References: time-series

## Entity: rough-volatility-bergomi
- Title: Rough Volatility: The Rough Bergomi Model
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Computational Challenges, Rough Volatility: The Rough Bergomi Model, The Volatility Smile, The Rough Bergomi (rBergomi) Model

## Entity: semimartingales-on-manifolds
- Title: Semimartingales on Manifolds
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Eells-Elworthy-Malliavin Construction, Stochastic Development and Parallel Transport, Stratonovich Calculus, Semimartingales on Manifolds
- References: manifold-learning, math/differential-geometry, stochastic-differential-equations

## Entity: math/skorokhod-topology
- Title: Skorokhod Topology and the Space D
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Diffusion approximation., strictly finer, Key properties of $(\mathbb{D}[0,T], J_1)$:, The J1 Topology (Skorokhod's Main Topology), Identify the limit, Tightness and Relative Compactness, The M1 Topology, M1 topology, Donsker's theorem., Related Articles, completed graph, The Space $\mathbb{D}[0,T]$, The Multidimensional Case, values, predictable characteristics
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, math/discrete-martingales, math/weak-convergence-prokhorov
- Backlinks: math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/martingale-problem, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/triangular-arrays-processes

## Entity: stable-processes
- Title: Stable Processes and Lévy Flights
- Category: Stochastic Calculus
- Language: en
- Key Concepts: stability index, Lévy Flights vs. Brownian Motion, Fractional [[spectral-graph-theory|Laplacian]], Stable Processes, stable, The Fractional [[spectral-graph-theory|Laplacian]], Lévy Flights, $\alpha = 2$, Lévy Flight, Financial Crashes, Alpha-Stable Distributions, $\alpha < 2$, Lévy-flight-based Metaheuristics, Brownian Motion, Stable Processes and Lévy Flights
- References: extreme-value-theory, finance/levy-processes, fractional-brownian-motion, spectral-graph-theory

## Entity: stochastic-manifolds
- Title: Stochastic Calculus on Manifolds
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stochastic Differential Equations (SDEs) on Manifolds, Eells-Elworthy-Malliavin (EEM), Probability Theory, Brownian Motion on a [[manifold-learning|Manifold]], Stratonovich, Information Geometry, Visualization: Random Walk on a Sphere, Applications, Stratonovich vs. Itô, half the Laplace-Beltrami operator, Related Topics, Stochastic Calculus on Manifolds, stochastic parallel transport, Robotics and Control, The Challenge of Curvature
- References: manifold-learning, math/differential-geometry, ricci-flow, stochastic-differential-equations

## Entity: stochastic-control
- Title: Stochastic Control
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Viscosity Solutions and Singular Control, [[feynman-kac|Feynman-Kac formula]], portfolio optimization, HJB equation, The optimal risky allocation is constant, free boundary problem, Verification theorem, Further Reading, Bellman equation, value function, policy optimization, adapted control process, Viscosity solution, The Merton Portfolio Problem (1969), [[stochastic-differential-equations|Stochastic differential equations]]
- References: avellaneda-stoikov, feynman-kac, finance/markowitz-mean-variance, finance/optimal-stopping-american, numerical-pde-finance, optimal-execution, reinforcement-learning, stochastic-differential-equations
- Backlinks: convex-analysis, convex-optimization, math/backward-sde, math/ode-stability, mdp, merton-portfolio, optimal-execution, path-integral-control, reflected-sdes-skorokhod, stochastic-games, stochastic-maximum-principle

## Entity: stochastic-control-partial-info
- Title: Stochastic Control with Partial Information
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Separation Principle, Stochastic Control with Partial Information, Dual Control, Control:, The Information State, Filtering:
- References: nonlinear-filtering, reinforcement-learning

## Entity: stochastic-differential-equations
- Title: Stochastic Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Yamada-Watanabe Theorem, Forward SDE, strong solution, Reverse SDE, 3. Itô's Lemma, Mathematical Finance, 4. Theory of Solutions, nowhere differentiable, 1. Foundations: Brownian Motion, Finance, 2. General Form of an SDE, Physics, Itô integral, part of the solution, drift coefficient
- References: brownian-motion, feynman-kac, geometric-brownian-motion, heston-model, math/martingale-problem, nonlinear-filtering
- Backlinks: activation-functions-math, brownian-bridge, computational-complexity-pac-bayes, conditionally-gaussian-processes, course-math-for-ai, differential-equations, diffusion-models, diffusion-sde-math, equivariant-diffusion-models, ergodic-theory-sgd, feller-processes, feynman-kac, finance/hjm-framework, finance/libor-market-model, finance/short-rate-models, fokker-planck-equation, generative-scenario-models, geometric-brownian-motion, hjm-framework, information-theory-rate-distortion, levy-ito-decomposition, local-time-tanaka, math-reasoning-chains-rl, math/backward-sde, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/interacting-particle-systems, math/martingale-problem, math/martingale-representation, math/ode-stability, math/quadratic-variation, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, math/tightness-semimartingales, mckean-vlasov-sdes, merton-portfolio, mixture-of-experts-routing, neural-operators, neural-sdes-finance, nonequilibrium-stat-mech-diffusion, nonequilibrium-statmech, nonlinear-filtering, numerical-methods-jump-diffusions, ornstein-uhlenbeck, ornstein-uhlenbeck-process, pde-hamilton-jacobi, poisson-jump-sdes, quantization-ptq-information, reasoning-models-prm-orm, regularization-implicit-bias, renormalization-group-dl, rough-paths, semimartingales-on-manifolds, speculative-decoding-medusa, spin-glasses-hopfield, stochastic-calculus-manifolds, stochastic-control, stochastic-games, stochastic-manifolds, stochastic-maximum-principle, stochastic-processes, tokenization-bpe-unigram, wentzell-freidlin, wiener-chaos

## Entity: stochastic-games
- Title: Stochastic Differential Games
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stochastic Differential Games, 1. Nash Equilibrium, saddle-point, Related Topics, Isaacs Equation, Climate Change, The Master Equation and MFGs, Quantitative Finance, Cybersecurity, Mathematical Formulation, Types of Equilibria, Applications, 2. Zero-Sum Games, Master Equation, Stochastic Differential Equations (SDEs)
- References: mean-field-games, stochastic-control, stochastic-differential-equations

## Entity: fbm-integration
- Title: Stochastic Integration for fBM
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Long-Memory Systems, Malliavin derivative, 2. The Stratonovich-type Integral (Wick Product), Rough Path Theory, Related Topics, not a semimartingale, Wick product, Visualization: Integration Regularity, 1. The Skorokhod Integral (Malliavin Calculus), Divergence Operator (Skorokhod Integral), Young Integration, Fractional Volatility, not, Stochastic Integration for Fractional Brownian Motion, Why It Matters for Finance and AI
- References: fractional-brownian-motion, malliavin-calculus, rough-paths

## Entity: stochastic-maximum-principle
- Title: Stochastic Maximum Principle
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Maximum Principle, Comparison with HJB, Hamiltonian and Adjoint Equations, Stochastic Maximum Principle
- References: stochastic-control, stochastic-differential-equations

## Entity: math/spdes
- Title: Stochastic Partial Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Stochastic Heat Equation, stochastic heat equation, Applications and Open Problems, Materials science, asymmetric simple exclusion process, Introduction, Finance, stochastic Burgers equation, Martin Hairer, Regularity structures, variational methods, The KPZ Equation and Universality, References, paracontrolled distributions, Cole–Hopf transformation
- References: feynman-kac, malliavin-calculus, math/backward-sde, math/interacting-particle-systems, partial-differential-equations, rough-paths, spectral-graph-theory, stochastic-differential-equations
- Backlinks: hjm-framework

## Entity: math/stratonovich-integral
- Title: Stratonovich Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Malliavin calculus, Example: Geometric Brownian Motion., Stratonovich Integral, Stratonovich lift, Chain rule, not, The Stratonovich Chain Rule, geometric structure, without correction, Stratonovich [[stochastic-differential-equations|SDE]], Martingale property, Finance, Related Articles, Wong-Zakai, Proof sketch:
- References: brownian-motion, feynman-kac, malliavin-calculus, manifold-learning, math/cameron-martin-formula, math/quadratic-variation, math/sde-numerical-methods, rough-paths, stochastic-differential-equations
- Backlinks: wiener-chaos

## Entity: skorokhod-integral
- Title: The Skorokhod Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Anticipative Calculus, The Skorokhod Integral, Duality with Malliavin Derivative, Non-Adapted Integration
- References: clark-ocone-formula

## Entity: math/martingale-problem
- Title: The Stroock-Varadhan Martingale Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Localization., Theorem., Why Martingale Problems Are Easier, diffusion approximation, Weak existence and uniqueness in law for the [[stochastic-differential-equations|SDE]] are equivalent to well-posedness of the martingale problem., duality, localization principle, Related Articles, Formulation, martingale problem, Theorem (Stroock-Varadhan)., The Stroock-Varadhan Martingale Problem, Proof Sketch of Uniqueness, Semimartingale Perspective, solves the martingale problem
- References: brownian-motion, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, stochastic-differential-equations
- Backlinks: stochastic-differential-equations

## Entity: math/tightness-semimartingales
- Title: Tightness of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Theorem (Aldous, 1978)., Control of oscillations:, Converse direction., High-frequency limits., Diffusion approximations., The UT Condition, Characterization., Related Articles, Numerical schemes., tight, C-Tightness, Tightness of Semimartingales, Rebolledo's Theorem, Bounded initial values:, C-tight
- References: brownian-motion, finance/semimartingale-models, martingale-clt, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov, stochastic-differential-equations
- Backlinks: math/convergence-stochastic-integrals, math/triangular-arrays-processes

## Entity: math/triangular-arrays-processes
- Title: Triangular Arrays and Convergence to Processes with Independent Increments
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Multivariate Extensions, functional Lindeberg-Feller theorem, Convergence to Brownian motion (functional CLT)., Theorem., Drift convergence:, Tightness., Related Articles, Infinitesimal condition (Lindeberg):, The Functional Lindeberg-Feller Theorem, Tests for the presence of a continuous martingale component, Realized volatility, Diffusion convergence:, The Infinitesimal Condition, Jump measure convergence:, Convergence to Levy processes.
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/levy-processes, finance/semimartingale-models, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales
- Backlinks: math/functional-limit-theorems

## Entity: wiener-chaos
- Title: Wiener Chaos and Multiple Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Relationship with Other Structures, Quantum Field Theory, Integration by parts, Applications in Financial Mathematics, Malliavin Derivative, Equivalent definition, Multiple Stochastic Integrals, Hermite Polynomials and Orthogonality, Hypercontractivity, Ornstein-Uhlenbeck Operator, Wiener Chaos and Multiple Stochastic Integrals, Number-operator approach, Wiener-Itô Decomposition, [[characteristic-functions|Characteristic functions]], First Wiener Chaos
- References: characteristic-functions, malliavin-calculus, math/information-theory, math/stratonovich-integral, stochastic-differential-equations

## Entity: arch-models
- Title: ARCH Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: GJR-GARCH, Autoregressive Conditional Heteroskedasticity (ARCH), EGARCH, Limitations & Extensions, Conditional Volatility: ARCH(1) Simulation, ARCH Models, Volatility clustering, Extensions:, volatility clustering, unconditional variance, FIGARCH, Mathematical Framework, Option Pricing, Risk Model Backtesting, Limitations:
- References: ar-models, arma-models, finance/levy-processes, garch-models, mcmc, volatility-forecasting
- Backlinks: ar-models, convolutional-volatility-resolution-clustering, finance/stylized-facts-returns, math/central-limit-theorem, math/ergodic-theorems-birkhoff, math/martingale-clt, math/stochastic-recursive-sequences

## Entity: bmo-martingales
- Title: BMO Martingales
- Category: Stochastic Processes
- Language: en
- Key Concepts: Definition, John-Nirenberg Inequality, Application: Kazamaki and Novikov, BMO Martingales

## Entity: finance/bipower-variation
- Title: Bipower Variation
- Category: Stochastic Processes
- Language: en
- Key Concepts: Definition, HAR-RV-J Model, Related Articles, Bipower Variation (BPV), Heterogeneous Autoregressive, Bipower Variation, Convergence, continuous component, Jump Test, Implementation, tripower quarticity, Background: Realised Variance and Jumps
- References: extreme-value-theory, finance/levy-processes, finance/realized-kernels, garch-models, volatility-forecasting
- Backlinks: finance/rough-volatility, finance/stylized-facts-returns, finance/variance-swaps, jump-robust-volatility

## Entity: brownian-bridge
- Title: Brownian Bridge
- Category: Stochastic Processes
- Language: en
- Key Concepts: Definition, Barrier option pricing:, Sequential testing:, Brownian Meanders and Excursions, Kolmogorov-Smirnov Statistics, Karhunen-Loève Expansion, Applications in Finance and Numerical Methods, Bridge sampling:, Related Constructions, [[stochastic-differential-equations|SDE]] Representation and Numerical Singularity, Bridge Between Arbitrary Points
- References: finance/barrier-asian-options, finance/monte-carlo-method, math/spectral-theory-operators, ornstein-uhlenbeck-process, stochastic-differential-equations
- Backlinks: course-math-for-ai, empirical-processes, math/gaussian-process-sample-paths, math/random-walks, math/sde-numerical-methods

## Entity: brownian-motion
- Title: Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Geometric Brownian Motion, Limitations & Extensions, Portfolio Simulation, Optimal Execution, Extensions:, [[levy-processes]], total variation, Derivative Pricing, Risk Management, Reflection Principle and Hitting Times, reflection principle, Multidimensional Brownian Motion, Axiomatic Definition, Mathematical Framework, Martingale
- References: avellaneda-stoikov, black-scholes, finance/levy-processes, geometric-brownian-motion, mcmc, schrodinger-equation
- Backlinks: avellaneda-stoikov, black-scholes, copula-models, cox-process, dv01, excursion-theory, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/change-of-numeraire, finance/coherent-risk-measures, finance/efficient-market-hypothesis, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/free-boundary-american, finance/girsanov-semimartingales, finance/hjm-framework, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/libor-market-model, finance/quasi-monte-carlo, finance/real-options, finance/realized-kernels, finance/self-similarity-fractality, finance/semimartingale-models, finance/short-rate-models, finance/stable-distributions, fokker-planck-equation, geometric-brownian-motion, innovation-process, law-iterated-logarithm, local-time-tanaka, martingale, math/absolute-continuity-process-measures, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/central-limit-theorem, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-markov-chains, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/ergodic-theorems-birkhoff, math/functional-limit-theorems, math/glivenko-cantelli, math/hausdorff-measure, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/martingale-clt, math/martingale-problem, math/martingale-representation, math/predictable-compensator, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, math/stratonovich-integral, math/tightness-semimartingales, math/triangular-arrays-processes, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, multifractal-processes, neural-odes, nonlinear-filtering, ornstein-uhlenbeck, partial-differential-equations, rough-paths, sle, stochastic-differential-equations, stochastic-processes

## Entity: finance/cir-hull-white
- Title: CIR and Hull-White Interest Rate Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: Hull-White Model, Related Articles, Cox-Ingersoll-Ross Model, Zero-coupon bond price, Cox-Ingersoll-Ross (CIR), CIR and Hull-White Interest Rate Models, Hull-White, Feller condition, Implementation
- References: finance/libor-sofr, finance/nelson-siegel-svensson, finance/swaps, hjm-framework, ornstein-uhlenbeck-process
- Backlinks: finance/bond-options-gaussian, finance/bootstrapping-yield-curve, finance/libor-market-model, finance/libor-sofr, finance/short-rate-models

## Entity: convergence-of-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Processes
- Language: en
- Key Concepts: Skorokhod Space $J_1$ Topology, Tightness and Aldous' Criterion, Convergence of Characteristics, Convergence of Semimartingales
- References: statistical-mechanics

## Entity: cox-process
- Title: Cox Process (Doubly Stochastic)
- Category: Stochastic Processes
- Language: en
- Key Concepts: Vasicek (OU) Intensity, Limitations & Extensions, Extensions:, Unconditional Distribution, Var / Mean, Cox process, No memory given intensity, Clustering, doubly stochastic Poisson process, Calibration, Marked Cox process, intensity-based (reduced-form) credit risk models, Mathematical Framework, Intensity unobservability, overdispersion
- References: avellaneda-stoikov, brownian-motion, copula-models, cs01, finance/levy-processes
- Backlinks: avellaneda-stoikov, copula-models, cs01, finance/copula-models, finance/hawkes-process, finance/levy-processes, finance/semimartingale-models, math/point-processes

## Entity: dirichlet-forms
- Title: Dirichlet Forms
- Category: Stochastic Processes
- Language: en
- Key Concepts: Generator, energy, Dirichlet Forms, Markovian, Markov processes, The Core Concept: Energy and [[shannon-entropy|Entropy]], Fractals and Manifolds, Closed, Dirichlet Form, Dirichlet form, Stability, Related Topics, SDEs with Bad Drift, Markov Process, Formal Definition
- References: finance/shannon-entropy, measure-theory, operator-semigroups

## Entity: excursion-theory
- Title: Excursion Theory
- Category: Stochastic Processes
- Language: en
- Key Concepts: Itô Measure, Itô's Excursion Measure ($n$), Poisson Point Process, Stochastic Integration, Fluctuation Theory, Related Topics, Visualization: Excursion Decomposition, excursions, Applications, Kiyosi Itô, The Excursion Process, Fine Structure of Trajectories, Excursion Theory, The Intuition: Slicing the Path
- References: brownian-motion, poisson-process
- Backlinks: local-time-tanaka

## Entity: feller-processes
- Title: Feller Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Drift vector $b_i(x)$, B. Fractional Kinetics and Anomalous Diffusion, 5. Modern Applications, Càdlàg Paths, 4. Probabilistic Consequences, Lévy jump kernel $\nu(x, dy)$, Stopping Times, functional analysis, Feller process, Lévy-type operator, Feller Property (Invariant Space), pseudo-differential operator, Strong Markov Property, Infinitesimal Generator, Cox-Ingersoll-Ross (CIR)
- References: finance/levy-processes, operator-semigroups, spectral-graph-theory, stochastic-differential-equations
- Backlinks: martingale, operator-semigroups

## Entity: finance/fractional-fokker-planck
- Title: Fractional Fokker-Planck Equation
- Category: Stochastic Processes
- Language: en
- Key Concepts: Multiscaling, Lévy flights, Option pricing under anomalous diffusion, non-Markovian, Fractional Fokker-Planck Equation (FFPE), fractional generalization, Visualization: Standard vs. Fractional Variance Scaling, Crypto and emerging markets, Anomalous Diffusion in Markets, Continuous Time Random Walks (CTRW), Sub-diffusion, Parameter identification, entire history, non-Gaussian, Non-stationarity
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
- Key Concepts: [[sle|Schramm-Loewner Evolution]], Effective Field Theory, Random Surfaces, Green's Function, Intuition, SLE curves, Quantum Gravity, Gaussian Free Field (GFF), 2. Physical Significance, Brownian Motion, 4. Discrete GFF and Algorithms, Statistical Mechanics, Markov Random Fields, 1. Mathematical Definition, Roughness
- References: laplacian, quantum-information-entropy, schwartz-distributions, sle
- Backlinks: sle

## Entity: math/gaussian-process-sample-paths
- Title: Gaussian Process Sample Paths
- Category: Stochastic Processes
- Language: en
- Key Concepts: metric [[shannon-entropy|entropy]], Application to Brownian motion, [[Concentration inequalities]], integrability of the supremum, The Canonical Metric, sub-Gaussian, RKHS, Theorem (Dudley, 1967), Corollary, Talagrand, Talagrand's majorizing measures, Overview, Dudley's [[shannon-entropy|Entropy]] Integral, not, Example (Brownian motion)
- References: brownian-bridge, empirical-processes, finance/shannon-entropy, fractional-brownian-motion, math/cameron-martin-formula, math/concentration-inequalities
- Backlinks: math/nonparametric-regression

## Entity: geometric-brownian-motion
- Title: Geometric Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Geometric Brownian Motion, Correlation structure, log-normally distributed, Constant volatility, Gaussian log-returns, Options pricing, Euler-Maruyama Discretization, Itô correction, Risk-Neutral Pricing, Continuous paths, Key Statistical Properties, Geometric Brownian Motion (GBM), Background, Limitations and Extensions, Practical Applications
- References: black-scholes, brownian-motion, finance/levy-processes, heston-model, stochastic-differential-equations, volatility-forecasting
- Backlinks: black-scholes, brownian-motion, differential-equations, finance/bachelier-formula, finance/black-scholes-derivations, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hurst-exponent, finance/levy-esscher-continuous, finance/realized-kernels, finance/semimartingale-models, finance/stefan-problem-american, finance/volatility-surface, fokker-planck-equation, futures-hedging, greeks-options, math/absolute-continuity-process-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/functional-limit-theorems, math/martingale-problem, math/sequential-hypothesis-testing, merton-portfolio, risk-neutral-valuation, stochastic-differential-equations, stochastic-processes

## Entity: finance/hawkes-process
- Title: Hawkes Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Compensator and Likelihood, Hawkes Process, Stationarity Condition, Volatility clustering, Flash crashes, branching ratio, Calibration, Multivariate Extension, Order book dynamics, excitation kernel, Hawkes with inhibition, Stationarity requirement, Neural Hawkes, Financial Applications, Zumbach effect
- References: cox-process, finance/monte-carlo-method, garch-models, geometric-brownian-motion
- Backlinks: finance/order-flow-imbalance, finance/semimartingale-models, lob-propagators, market-microstructure, multivariate-hawkes, queue-reactive-models

## Entity: finance/hurst-exponent
- Title: Hurst Exponent
- Category: Stochastic Processes
- Language: en
- Key Concepts: Market Regimes Visualization, Python: Multiple Hurst Estimators, Variance Ratio Test, Hurst Exponent (H), Random Walk (Brownian Motion), Detrended Fluctuation Analysis (DFA), Mathematical Foundation: R/S Analysis, $H = 0.5$, Financial Applications, Spurious long memory, Market efficiency testing, Fractal analysis, Background, Non-stationarity, Limitations and Extensions
- References: finance/fractional-fokker-planck, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, geometric-brownian-motion, hidden-markov-models
- Backlinks: arima-models, finance/fisher-transform, finance/fractional-fokker-planck, finance/hilbert-huang-transform, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, finance/self-similarity-fractality, finance/stable-distributions, finance/stylized-facts-returns, fractional-cointegration

## Entity: finance/hyperbolic-distributions
- Title: Hyperbolic Distributions and Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Student $t$, [[stable-distributions|Stable]], semi-heavy tails, Tail behaviour, heavy tails, finite moments of all orders, and analytical formulas, not stable, Financial application, Hyperbolic, Generalized Hyperbolic (GH), infinitely divisible, Related Articles, Normal, NIG, Lévy process with GH increments, "hand-crafted" compromise
- References: brownian-motion, cornish-fisher-cvar, finance/fft, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/levy-processes
- Title: Lévy Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Correlation structure, Martingale condition, Model Parameters, No path continuity, Variance Gamma (VG) Process, Stationary increments, Diffusion, Poisson Process, Lévy process, Calibration complexity, Key Examples, Scaling, Compound Poisson Process, Independent increments, Lévy Processes
- References: cox-process, finance/fractional-fokker-planck, finance/monte-carlo-method, heston-model, ornstein-uhlenbeck-process
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, brownian-motion, characteristic-functions, clt, cornish-fisher-cvar, cox-process, feller-processes, finance/bipower-variation, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/merton-jump-diffusion, finance/variance-gamma, finance/zeta-field, geometric-brownian-motion, kelly-criterion, levy-ito-decomposition, levy-structured-products, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/martingale-representation, math/predictable-compensator, math/skorokhod-topology, math/stochastic-recursive-sequences, math/subordinators, math/triangular-arrays-processes, math/wiener-hopf-factorization, multifractal-processes, numeraire-invariant-hedging, occupation-measures-local-times, ornstein-uhlenbeck-process, stable-processes, stochastic-processes

## Entity: math/markov-chain-mixing
- Title: Markov Chain Mixing Times
- Category: Stochastic Processes
- Language: en
- Key Concepts: Poincaré inequality, Reversibility:, MCMC and Convergence Diagnostics, Upper Bounds and Hitting Times, burn-in period, lazy, spectral gap, preconditioning, Spectral Gap and Convergence Rate, Mixing Time Definition, Card Shuffling: Diaconis' Classical Result, mixing time at tolerance $\varepsilon$, Geometry of state space:, Coupon Collector Example, Cheeger constant
- References: central-limit-theorem, math/concentration-inequalities, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/renewal-theory, math/spectral-theory-operators
- Backlinks: math/coupling-methods, math/geometric-ergodicity, math/interacting-particle-systems, math/spectral-theory-operators, queuing-theory, random-walks-groups, time-series

## Entity: finance/merton-jump-diffusion
- Title: Merton Jump-Diffusion Model
- Category: Stochastic Processes
- Language: en
- Key Concepts: Merton (1976) Jump-Diffusion model, Related Articles, Merton Jump-Diffusion Model, Model, Option Pricing Formula, Implementation
- References: black-scholes, finance/levy-processes, finance/variance-gamma, heston-model

## Entity: multifractal-processes
- Title: Multifractal Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Network Traffic, Multifractal Process, Multifractal Random Walk, Applications in Finance and Physics, Fluid Turbulence, Multiplicative Cascade, Related Topics, Multifractal Processes, Financial Markets (MSMR), Multifractal Cascade Models, Multifractal Spectrum ($f(\alpha)$), Visualization: Monofractal vs. Multifractal, Brownian motion, The Limitation of Monofractals
- References: brownian-motion, finance/levy-processes, fractional-brownian-motion

## Entity: occupation-measures-local-times
- Title: Occupation Measures and Local Times of Lévy Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Occupation Measure, Tanaka's Formula and Discontinuities, Occupation Measures and Local Times of Lévy Processes, Fourier Analytic Conditions
- References: finance/levy-processes, fourier-transform

## Entity: ornstein-uhlenbeck
- Title: Ornstein-Uhlenbeck Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: $W_t$, mean-reverting, Finance (Vasicek Model), AI (Diffusion Models), 1. Mean Reversion, Related Topics, Physics, The [[stochastic-differential-equations|SDE]] Definition, $\mu$ (Long-term mean), Key Properties, stationary Gaussian distribution, Applications, 2. Stationarity and Normality, $\sigma > 0$ (Volatility), $\theta > 0$ (Rate of mean reversion)
- References: brownian-motion, math/stationary-wide-spectral, stochastic-differential-equations
- Backlinks: course-math-for-ai, stochastic-processes

## Entity: ornstein-uhlenbeck-process
- Title: Ornstein-Uhlenbeck Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: mean-reverting, Stationary Distribution, Non-Gaussian noise, Python: Simulation and Parameter Estimation, Pairs Trading Spread Model, Stochastic Differential Equation ([[stochastic-differential-equations|SDE]]), Connection to Vasicek Interest Rate Model, volatility, Limitations and Extensions, Ornstein-Uhlenbeck (OU) process, Exact Solution via Integrating Factor, stationary (invariant) distribution, Mean-Reverting Property, Negative values, Visualization
- References: black-scholes, finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, heston-model, hidden-markov-models, mcmc, pairs-trading, stochastic-differential-equations
- Backlinks: brownian-bridge, diffusion-models, fastest-mean-reversion, finance/cir-hull-white, finance/levy-processes, finance/longstaff-schwartz, finance/particle-filter, fokker-planck-equation, pairs-trading, pca-statarb

## Entity: math/point-processes
- Title: Point Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: point process, Poisson process with intensity, kernel, Daley & Vere-Jones, Thinning, Campbell's theorem, excitation function, Cox process, Cox Processes (Doubly Stochastic Poisson), Point Processes, Void probabilities, intensity measure, Papangelou conditional intensity, Finance, Spatial statistics
- References: cox-process, levy-ito-decomposition, math/branching-processes, math/kolmogorov-equations-ctmc, math/renewal-theory
- Backlinks: math/survival-analysis, poisson-process

## Entity: poisson-process
- Title: Poisson Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Start, 2. Waiting Times (Arrival Times), Thinning, Gamma Distribution, Poisson Process, Reliability, Exponential Distribution, Finance, Physics, Poisson Processes, Queueing Theory, 3. Superposition and Thinning, Visualization: Arrivals over Time, 1. Inter-arrival Times, Key Properties
- References: distributions-zoo, math/point-processes, math/renewal-theory
- Backlinks: course-math-for-ai, distributions-zoo, excursion-theory, exponential-distribution, queuing-theory, stochastic-processes

## Entity: math/random-walks
- Title: Random Walks
- Category: Stochastic Processes
- Language: en
- Key Concepts: characteristic function, return probability, First Passage Times and Spitzer's Identity, reflection principle, martingale, Donsker's Theorem and Functional Limit Theory, spectral gap, Strassen's law of the iterated logarithm, Arc-sine Law I, trace, Queuing theory, Simple Symmetric Random Walk, recurrent, Recurrence and Transience (Pólya's Theorem), Electrical networks
- References: brownian-bridge, central-limit-theorem, math/discrete-martingales, math/functional-limit-theorems, math/large-deviations-cramer, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/rough-volatility
- Title: Rough Volatility and Fractional Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Rough Volatility and Fractional Brownian Motion, Rough Bergomi Model (Bayer, Friz, Gatheral 2016), Related Articles, Implied vol skew, Implementation, Fractional Brownian Motion, Empirical finding, Rough Volatility
- References: finance/bipower-variation, finance/sabr-model, finance/variance-gamma, heston-model
- Backlinks: deep-hedging, finance/dupire-local-vol, garch-models, neural-sdes-finance, volatility-arbitrage, volatility-smile

## Entity: finance/self-similarity-fractality
- Title: Self-Similarity and Fractality of Financial Series
- Category: Stochastic Processes
- Language: en
- Key Concepts: Trading volumes, Main theoretical issue with fBm as a price model:, The Hurst exponent and memory, their volatility, anti-persistence, Estimation methods for $H$, prices themselves, financial time series are self-similar, DFA, pure, Log-absolute returns, scale invariance, Self-similar processes, rough Heston, "Modelling without arbitrage"
- References: brownian-motion, finance/bs-market-self-financing, finance/fractional-fokker-planck, finance/ftap-first-fundamental-theorem, finance/hurst-exponent, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns, math/stationary-wide-spectral

## Entity: small-ball-probabilities
- Title: Small Ball Probabilities for Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Connection to [[shannon-entropy|Entropy]] and Spectra, Asymptotic Definition, Small Ball Probabilities for Stochastic Processes, Applications
- References: finance/shannon-entropy, quantization

## Entity: finance/stable-distributions
- Title: Stable Distributions and α-Stable Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: characteristic function, Stable Distributions and α-Stable Processes, Infinite variance., EVT, Financial application, only, classical CLT, Generalized CLT (Lévy-Khintchine)., No unique EMM., Generalized Central Limit Theorem, Related Articles, α-Stable Lévy processes, Characteristic function, Calibration complexity., conceptual starting point
- References: brownian-motion, cornish-fisher-cvar, extreme-value-theory, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/self-similarity-fractality, finance/stylized-facts-returns
- Backlinks: finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/stylized-facts-returns, math/central-limit-theorem, math/infinitely-divisible-distributions, math/local-limit-theorems, math/lundberg-cramer-ruin, math/triangular-arrays-processes

## Entity: stochastic-processes
- Title: Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: By Index Set $T$, Key Classes of Processes, Mathematical Tools, Overview, Fundamental Examples, Finance, Engineering, Physics, Stochastic Processes, Continuous-time processes, Markov Processes, Lévy Processes, Discrete state space, Continuous state space, Applications
- References: brownian-motion, ergodic-theory, feynman-kac, finance/levy-processes, geometric-brownian-motion, markov-chains, math/discrete-markov-chains, math/discrete-martingales, math/kolmogorov-equations-ctmc, math/martingale-representation, math/stationary-wide-spectral, ornstein-uhlenbeck, poisson-process, random-walks, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: kuramoto-model, law-iterated-logarithm

## Entity: math/subordinators
- Title: Subordinators
- Category: Stochastic Processes
- Language: en
- Key Concepts: The Laplace Exponent, Subordinators, variance-gamma process, stochastic time clocks, Bochner Subordination, not, fractional Riemann-Liouville differential equation, Lévy measure, Key Examples, subordinator, Applications: Finance and Stochastic Volatility, Related Articles, Compound Poisson process., Laplace exponent, Variance-Gamma model
- References: finance/levy-processes, fractional-brownian-motion, levy-ito-decomposition, math/branching-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/variance-gamma
- Title: Variance Gamma Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Variance Gamma (VG), Definition, Related Articles, Characteristic function, Parameter Effects, Option Pricing via FFT, Variance Gamma Process
- References: finance/levy-processes, heston-model, merton-jump-diffusion
- Backlinks: finance/barrier-asian-options, finance/merton-jump-diffusion, finance/rough-volatility, levy-ito-decomposition, svi-model

## Entity: volatility-forecasting
- Title: Volatility Forecasting (GARCH, HAR)
- Category: Stochastic Processes
- Language: en
- Key Concepts: GJR-GARCH, Jump contamination, EGARCH, Long memory, Volatility Forecasting (GARCH, HAR), Variance risk premium, volatility clustering, Volatility targeting, Intraday risk, Generalized ARCH(1,1), QLIKE, Mathematical Framework, Realized GARCH, Options pricing, Heterogeneous Autoregressive Realized Volatility (HAR-RV)
- References: finance/monte-carlo-method, finance/realized-kernels, finance/value-at-risk, garch-models, heston-model, mcmc, transformer-architecture
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, arma-models, convolutional-volatility-resolution-clustering, cornish-fisher-cvar, finance/bipower-variation, finance/multivariate-hmm, finance/realized-kernels, finance/sabr-model, finance/singular-spectral-analysis, finance/variance-swaps, finance/wavelet-transform, geometric-brownian-motion, kalman-filter, temporal-fusion-transformer, volatility-modulated-spectral-surface

## Entity: finance/zeta-field
- Title: Zeta Field
- Category: Stochastic Processes
- Language: en
- Key Concepts: Empirical testing, GUE pair correlation, Euler product, Critical strip, Cross-disciplinary research, Zeta Field Spectral Landscape, Pole, level repulsion, The Riemann Zeta Function, Quantum computing connection, Mathematical Framework, Explicit Formula and Market Fluctuations, Connection to RMT, Zeta Regularization, Riemann-Siegel Z-function
- References: finance/levy-processes, finance/random-matrix-theory, finance/shannon-entropy, finance/spectral-analysis, math/spectral-theory-operators, quantum-entanglement

## Entity: financial-entropy
- Title: Entropy and Market Complexity
- Category: Time Series
- Language: en
- Key Concepts: structure, Shannon [[shannon-entropy|Entropy]], Lempel-Ziv complexity, Transfer Entropy, variance, 3. Approximate Entropy (ApEn) and Sample Entropy, LZ is High, drop, Granger Causality, 1. Shannon [[shannon-entropy|Entropy]] as Predictability, [[shannon-entropy|Entropy]] in Finance: Lempel-Ziv and Market Complexity, LZ = 1, Visualization: Entropy during a Crash, 2. Lempel-Ziv Complexity (LZ), 4. Transfer Entropy and Causality
- References: causal-inference, finance/lempel-ziv-complexity, finance/shannon-entropy, nlp-financial-analysis
- Backlinks: entropy-pooling

## Entity: fractional-cointegration
- Title: Fractional Cointegration
- Category: Time Series
- Language: en
- Key Concepts: Fractional Cointegration Mechanism, ARFIMA Models, Related Topics, ARFIMA, fractionally cointegrated, Fractional Cointegration, Trading Application, The Long Memory Problem, long-range dependence, Visualization: Decay Speeds, half-life of mean reversion, Long Memory
- References: finance/hurst-exponent, fractional-brownian-motion, pairs-trading

## Entity: garch-models
- Title: GARCH and ARCH Models
- Category: Time Series
- Language: en
- Key Concepts: Visualization: Volatility Spikes, 4. Estimation and AI Integration, IGARCH, Related Topics, Insight, Deep GARCH, The Persistence, 3. Asymmetric GARCH (GJR-GARCH), GARCH, 1. ARCH Model (Engle, 1982), ARCH and GARCH Models: Volatility Clustering, 2. GARCH Model (Bollerslev, 1986), Neural GARCH, ARCH, Leverage Effect
- References: finance/rough-volatility, mle, time-series
- Backlinks: arch-models, convolutional-volatility-resolution-clustering, finance/bipower-variation, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hidden-markov-models, finance/realized-kernels, finance/stylized-facts-returns, finance/value-at-risk, finance/variance-swaps-vix, generative-scenario-models, math/ergodic-theorems-birkhoff, math/martingale-clt, math/stochastic-recursive-sequences, temporal-fusion-transformer, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: hmm-particle-filters
- Title: Hidden Markov Models & Particle Filters
- Category: Time Series
- Language: en
- Key Concepts: The Non-Linear Problem: Particle Filters, Transition Matrix, Pairs Trading, Hidden Markov Models & Particle Filters, Dynamic Spread Quoting, Predict (Mutate), Application in HFT and StatArb, Viterbi algorithm, Update (Weight), Visualization: Particle Survival, Hidden Markov Models (HMM), Kalman Filter, Resample (Darwinian Selection), latent, Emission Probability
- References: mcmc, regime-switching-factors
- Backlinks: hmm, lead-lag-analysis, lsv-model, mcmc, path-dependent-volatility, total-probability-variance, vpin

## Entity: jump-robust-volatility
- Title: Jump-Robust Realized Variance
- Category: Time Series
- Language: en
- Key Concepts: Price Jumps, The Problem with Standard RV, Visualization: Volatility vs. Jumps, Related Topics, MedRV, Jump-Robust Estimators, 2. MinRV and MedRV (Andersen et al., 2012), Why It Matters: Identifying Jumps, MinRV, Realized Variance (RV), volatility risk premium, 1. Bipower Variation (BV), Jump-Robust Realized Variance (MinRV and MedRV)
- References: finance/bipower-variation, finance/realized-kernels, merton-jump-diffusion

## Entity: morse-theory
- Title: Morse Theory
- Category: Topology
- Language: en
- Key Concepts: Index 1, Index 0, non-degenerate, loss landscape, Morse Inequalities, Mode Connectivity, Morse Theory, Gradient Flows, The Morse Index, index, Morse function, critical points, Related Topics, CW complex, The Fundamental Theorem
- References: manifold-learning, math/algebraic-topology, math/differential-geometry, math/spectral-theory-operators, training-dynamics

## Entity: persistent-homology
- Title: Persistent Homology
- Category: Topology
- Language: en
- Key Concepts: Stability Theorem, Persistent Homology, Topology of Data, Filtration and Homology, Barcodes and Persistence Diagrams

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
- Key Concepts: Cryptographic Zero-Knowledge (ZK) in Institutional Finance, See Also
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
- Key Concepts: 1. Dice Re-roll Game Simulation, Quant Brainteasers Python Handbook, See Also
- References: course-quant-trading, optimal-stopping-and-kelly, quant-market-making-mechanics
- Backlinks: optimal-stopping-and-kelly, quant-firm-interview-math-brainteasers, quant-interview-cheat-sheet, quant-trading-interview-roadmap, statistical-arbitrage-and-pairs-trading

## Entity: statistical-arbitrage-and-pairs-trading
- Title: Statistical Arbitrage & Pairs Trading
- Category: Trading Theory
- Language: en
- Key Concepts: 1. Cointegration vs Correlation, 2. Ornstein-Uhlenbeck Process, See Also, Cointegration:, Tests:, Statistical Arbitrage & Pairs Trading, Correlation:
- References: course-quant-trading, quant-brainteasers-handbook, quant-risk-management-var-cvar
- Backlinks: factor-investing-and-fama-french, high-frequency-stat-arb-lead-lag, machine-learning-for-quant-trading, quant-risk-management-var-cvar

## Entity: stat-tests-for-trading-strategies
- Title: Strategy Validation & Deflated Sharpe Ratio
- Category: Trading Theory
- Language: en
- Key Concepts: Strategy Validation & Deflated Sharpe Ratio, See Also
- References: course-quant-trading, machine-learning-for-quant-trading, quant-risk-management-var-cvar
- Backlinks: systematic-alpha-research-and-backtesting

## Entity: math/foundations/group-theory-symmetries
- Title: Group Theory and Symmetries in Deep Learning
- Category: Unknown
- Language: en
- Key Concepts: Closure:, Group Theory, Special Orthogonal group, mathematically embedding equivariance into the architecture, What is a Group?, Inverse:, Important Lie Groups (Continuous Groups) in AI:, Geometric Deep Learning, Special Euclidean group, Invariance and Equivariance, 2. Equivariance, Group Equivariant Neural Networks (G-CNNs), Associativity:, Translation group, 1. Invariance
- Backlinks: ai-theory/spatial/equivariant-gnn

## Entity: math/analysis-geometry/information-geometry
- Title: Information Geometry
- Category: Unknown
- Language: en
- Key Concepts: Statistical [[manifold-learning|Manifold]] and Fisher Metric, dual connections, Dual Connections and $\alpha$-Geometry, Related Topics, Fisher Information Matrix, m-connection ($\alpha=-1$):, [[llm]] Latent Spaces:, Information Geometry, TRPO/PPO, Riemannian manifolds, K-FAC, e-connection ($\alpha=1$):, Generalized Pythagorean Theorem, Natural [[convex-optimization|Gradient Descent]] (NGD), Cramér-Rao Bound:
- References: convex-optimization, fisher-information, llm, manifold-learning, optimal-transport, transformer-architecture
- Backlinks: convex-analysis, course-math-for-ai, fisher-information, language-models/safety/rlhf-dpo, manifold-learning, math/bayesian-asymptotics, math/cramer-rao-bound, math/differential-geometry, math/minimax-estimation, math/neyman-pearson, maximum-entropy, multivariable-calculus

## Entity: geometric-mechanics-lie-groups
- Title: Geometric Mechanics: Control on Lie Groups
- Category: ai-physics
- Language: en
- Key Concepts: Differential and Information Geometry, Symplectic Geometry and Hamiltonian Mechanics, Conclusion, Geometric Mechanics: Control on Lie Groups
- References: convex-optimization, manifold-learning

## Entity: neural-operators-fno
- Title: Neural Operators: FNO vs. DeepONet
- Category: ai-physics
- Language: en
- Key Concepts: Neural Operators: FNO vs. DeepONet, Differential and Information Geometry, Random Matrix Theory and Spectral Dynamics, Conclusion
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
- Key Concepts: Symplectic Geometry & Hamiltonian Neural Networks, Differential and Information Geometry, Symplectic Geometry and Hamiltonian Mechanics, Conclusion
- References: convex-optimization, manifold-learning

## Entity: mechanistic-interpretability-sae
- Title: AI Safety: Mechanistic Interpretability of SAEs
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Random Matrix Theory and Spectral Dynamics, AI Safety: Mechanistic Interpretability of SAEs
- References: attention-mechanisms, math/spectral-theory-operators

## Entity: activation-functions-math
- Title: Activation Functions: SwiGLU & GeLU
- Category: ai-theory
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Stochastic Dynamics and Statistical Mechanics, Activation Functions: SwiGLU & GeLU, Conclusion
- References: attention-mechanisms, stochastic-differential-equations

## Entity: ergodic-theory-sgd
- Title: Ergodic Theory of Stochastic Gradient Descent
- Category: ai-theory
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Ergodic Theory of Stochastic [[convex-optimization|Gradient Descent]], Differential and Information Geometry, Conclusion
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: gnn-weisfeiler-lehman
- Title: Graph Neural Networks: Weisfeiler-Lehman
- Category: ai-theory
- Language: en
- Key Concepts: Graph Neural Networks: Weisfeiler-Lehman, Random Matrix Theory and Spectral Dynamics, Conclusion, Algebraic Topology, Sheaves, and Category Theory
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: higher-category-theory-ai
- Title: Higher Category Theory: N-categories in AI
- Category: ai-theory
- Language: en
- Key Concepts: Higher Category Theory: N-categories in AI, Conclusion, Algebraic Topology, Sheaves, and Category Theory
- References: spectral-graph-theory

## Entity: multimodal-alignment-clip
- Title: Multimodal Alignment: CLIP Math
- Category: ai-theory
- Language: en
- Key Concepts: Optimal Transport and Wasserstein Metrics, Differential and Information Geometry, Conclusion, Multimodal Alignment: CLIP Math
- References: convex-optimization, manifold-learning

## Entity: nonequilibrium-stat-mech-diffusion
- Title: Non-equilibrium Statistical Mechanics of Diffusion Models
- Category: ai-theory
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Conclusion, Non-equilibrium Statistical Mechanics of Diffusion Models
- References: stochastic-differential-equations

## Entity: normalization-layers-math
- Title: Normalization Layers: BatchNorm vs RMSNorm
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Differential and Information Geometry, Normalization Layers: BatchNorm vs RMSNorm
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: regularization-implicit-bias
- Title: Regularization: Implicit Bias of GD
- Category: ai-theory
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Differential and Information Geometry, Regularization: Implicit Bias of GD, Conclusion
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: renormalization-group-dl
- Title: Renormalization Group in Deep Learning
- Category: ai-theory
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Quantum Field Theory and Renormalization Group, Renormalization Group in Deep Learning, Conclusion
- References: stochastic-differential-equations

## Entity: spin-glasses-hopfield
- Title: Spin Glasses & Hopfield Networks
- Category: ai-theory
- Language: en
- Key Concepts: Spin Glasses & Hopfield Networks, Stochastic Dynamics and Statistical Mechanics, Random Matrix Theory and Spectral Dynamics, Conclusion
- References: math/spectral-theory-operators, stochastic-differential-equations

## Entity: geometry-loss-landscapes
- Title: The Geometry of Deep Learning Loss Landscapes
- Category: ai-theory
- Language: en
- Key Concepts: The Geometry of Deep Learning Loss Landscapes, Random Matrix Theory and Spectral Dynamics, Differential and Information Geometry, Conclusion
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: math-reasoning-chains-rl
- Title: The Mathematics of Reasoning Chains: RL Reward Modeling
- Category: ai-theory
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Conclusion, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, The Mathematics of Reasoning Chains: RL Reward Modeling
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
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Quantum Field Theory and Renormalization Group, Vision Transformers: Scaling Laws of ViT, Conclusion
- References: attention-mechanisms

## Entity: weight-initialization-signal
- Title: Weight Initialization: Signal Propagation
- Category: ai-theory
- Language: en
- Key Concepts: Quantum Field Theory and Renormalization Group, Random Matrix Theory and Spectral Dynamics, Conclusion, Weight Initialization: Signal Propagation
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
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Computational Complexity: PAC-Bayes Bounds, Conclusion, Optimal Transport and Wasserstein Metrics
- References: stochastic-differential-equations

## Entity: distributed-training-3d
- Title: Distributed Training: 3D Parallelism Math
- Category: cs
- Language: en
- Key Concepts: Optimal Transport and Wasserstein Metrics, Conclusion, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Distributed Training: 3D Parallelism Math
- References: attention-mechanisms

## Entity: information-theory-rate-distortion
- Title: Information Theory: Rate-Distortion & VAEs
- Category: cs
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Information Theory: Rate-Distortion & VAEs, Differential and Information Geometry, Conclusion
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: quantum-computing-vqe
- Title: Quantum Computing: VQE Math
- Category: cs
- Language: en
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Quantum Computing: VQE Math, Symplectic Geometry and Hamiltonian Mechanics
- References: math/spectral-theory-operators
- Backlinks: research/quantum-risk-management

## Entity: quantum-machine-learning-kernels
- Title: Quantum Machine Learning: Quantum Kernels
- Category: cs
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Quantum Machine Learning: Quantum Kernels, Symplectic Geometry and Hamiltonian Mechanics, Conclusion
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
- Key Concepts: Day in the Life of a Quantitative Researcher at Citadel Securities:, Видеокурс по Алготрейдингу (osa.net — Лекции 1–3):, Emanuel Derman — *My Life as a Quant: Reflections on Physics and Finance, Iceberg Orders (Айсберги):, Dan Stefanica — *A Primer for the Mathematics of Financial Engineering, Справочник распределений:, Callum McDougall — *Quant Trading Guide, Sheldon Ross — *A First Course in Probability, Алгоритмические шаблоны:, Adverse Selection (Неблагоприятный выбор):, OpenQuant & QuantConnect (`quantconnect.com` / `openquant.co`):, 3. Блок Трейдинга и Микроструктуры Рынка, Optiver Mental Math Trainer:, 1.1 Основные математические дисциплины, Order Book (Биржевой стакан):

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
- Key Concepts: [[attention-mechanisms|Attention]] Mechanisms: Linear [[attention-mechanisms|Attention]], Random Matrix Theory and Spectral Dynamics, Architecture Mechanics: Attention and Dimensionality, Conclusion
- References: attention-mechanisms, math/spectral-theory-operators

## Entity: deepseek-v3-mla-compression
- Title: DeepSeek-V3 Architecture: MLA & Deep-Compression
- Category: language-models
- Language: en
- Key Concepts: DeepSeek-V3 Architecture: MLA & Deep-Compression, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion
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
- Key Concepts: KV Cache Compression: Token Eviction, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion
- References: attention-mechanisms
- Backlinks: research/mla-financial-reasoning, speculative-decoding

## Entity: long-context-yarn-longrope
- Title: Long Context: YaRN and LongRoPE
- Category: language-models
- Language: en
- Key Concepts: Conclusion, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Differential and Information Geometry, Long Context: YaRN and LongRoPE
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
- Key Concepts: Mixture of Experts: Routing Math, Stochastic Dynamics and Statistical Mechanics, Conclusion, Optimal Transport and Wasserstein Metrics
- References: stochastic-differential-equations

## Entity: model-merging-procrustes
- Title: Model Merging: Geometry of Weight Space Alignment
- Category: language-models
- Language: en
- Key Concepts: Optimal Transport and Wasserstein Metrics, Conclusion, Differential and Information Geometry, Model Merging: Geometry of Weight Space Alignment
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
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Conclusion, Reasoning Models: PRM vs. ORM
- References: stochastic-differential-equations

## Entity: speculative-decoding-medusa
- Title: Speculative Decoding: Medusa vs. EAGLE
- Category: language-models
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Speculative Decoding: Medusa vs. EAGLE
- References: attention-mechanisms, stochastic-differential-equations

## Entity: tokenization-bpe-unigram
- Title: Tokenization: BPE vs. Unigram
- Category: language-models
- Language: en
- Key Concepts: Tokenization: BPE vs. Unigram, Stochastic Dynamics and Statistical Mechanics, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion
- References: attention-mechanisms, stochastic-differential-equations

## Entity: quantization-ptq-information
- Title: Quantization: Information Loss in PTQ
- Category: llm-infra
- Language: en
- Key Concepts: Optimal Transport and Wasserstein Metrics, Conclusion, Stochastic Dynamics and Statistical Mechanics, [[quantization]]: Information Loss in PTQ
- References: quantization, stochastic-differential-equations

## Entity: algebraic-geometry-slt
- Title: Algebraic Geometry in Singular Learning Theory
- Category: math
- Language: en
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Algebraic Geometry in Singular Learning Theory, Algebraic Topology, Sheaves, and Category Theory
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: algebraic-topology-persistent
- Title: Algebraic Topology: Persistent Laplacian & Persistent Bundles
- Category: math
- Language: en
- Key Concepts: Algebraic Topology, Sheaves, and Category Theory, Random Matrix Theory and Spectral Dynamics, Conclusion, Algebraic Topology: Persistent [[spectral-graph-theory|Laplacian]] & Persistent Bundles
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: differential-galois-theory
- Title: Differential Galois Theory
- Category: math
- Language: en
- Key Concepts: Differential Galois Theory, Conclusion, Algebraic Topology, Sheaves, and Category Theory
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
- Key Concepts: Conclusion, Differential and Information Geometry, Information Geometry: Natural Gradient
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
- Key Concepts: Non-commutative Geometry, Symplectic Geometry and Hamiltonian Mechanics, Conclusion, Algebraic Topology, Sheaves, and Category Theory
- References: spectral-graph-theory

## Entity: number-theory-l-functions
- Title: Number Theory: L-functions & Langlands
- Category: math
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Number Theory: L-functions & Langlands, Conclusion, Algebraic Topology, Sheaves, and Category Theory
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: optimal-transport-gromov-wasserstein
- Title: Optimal Transport: Gromov-Wasserstein Distance
- Category: math
- Language: en
- Key Concepts: Optimal Transport and Wasserstein Metrics, Optimal Transport: Gromov-Wasserstein Distance, Differential and Information Geometry, Conclusion
- References: convex-optimization, manifold-learning

## Entity: pde-hamilton-jacobi
- Title: Partial Differential Equations: Hamilton-Jacobi
- Category: math
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Partial Differential Equations: Hamilton-Jacobi, Symplectic Geometry and Hamiltonian Mechanics, Conclusion
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
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Conclusion, Random Matrix Theory: Marchenko-Pastur Law
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
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Differential and Information Geometry, Conclusion, Stochastic Calculus on Manifolds
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
- Key Concepts: Fluid Dynamics: Navier-Stokes Existence, Random Matrix Theory and Spectral Dynamics, Differential and Information Geometry, Conclusion
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
- Key Concepts: Quantum Field Theory and Renormalization Group, Differential and Information Geometry, Conclusion, Quantum Field Theory on Curved Spacetime
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
- Key Concepts: String Theory: Calabi-Yau Manifolds, Differential and Information Geometry, Conclusion, Algebraic Topology, Sheaves, and Category Theory
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
- Key Concepts: Supersymmetry (SUSY): Formalism, Quantum Field Theory and Renormalization Group, Symplectic Geometry and Hamiltonian Mechanics, Conclusion

## Entity: yang-mills-mass-gap
- Title: Yang-Mills Mass Gap
- Category: physics
- Language: en
- Key Concepts: Yang-Mills Mass Gap

## Entity: hyperbolic-vol-geometry
- Title: Correlation Is a Hyperbolic Distance
- Category: research
- Language: en
- Key Concepts: Objective, Tools:, Open Questions, Context, Insights for AI, Theoretical:, References, Methodology, Current Findings, Numerical:
- References: finance/sabr-model, heston-model, math/differential-geometry

## Entity: research/mla-financial-reasoning
- Title: Impact of MLA Compression on Financial Time-Series Reasoning
- Category: research
- Language: en
- Key Concepts: Objective, Open Questions, Context, Metric, Models, Methodology, Insights for AI, References, Dataset, Current Findings
- References: attention-mechanisms, deepseek-v3-mla-compression, kv-cache-compression, llm-financial-analysis, quantization, rag, tool-use

## Entity: levy-structured-products
- Title: Lévy Processes and Stochastic-Volatility Models for Structured-Product Pricing
- Category: research
- Language: en
- Key Concepts: Objective, Simulation:, Tools:, Pricing:, Calibration:, Open Questions, Context, Insights for AI, References, Methodology, Current Findings
- References: finance/levy-processes

## Entity: student-t-hmm-bond-regimes
- Title: Student-t HMM for Bank Bond Portfolio Regimes
- Category: research
- Language: en
- Key Concepts: Objective, Data:, Tools:, Model:, Validation:, Open Questions, Context, Insights for AI, References, Methodology, Current Findings
- References: finance/value-at-risk, hidden-markov-models

## Entity: research/quantum-risk-management
- Title: Квантовые алгоритмы в риск-менеджменте
- Category: research
- Language: ru
- Key Concepts: Открытые вопросы, Методология, Контекст, Инсайты для ИИ, Цель, Ссылки, Результаты
- References: quantum-computing-vqe, quantum-machine-learning-kernels

## Entity: copula-models
- Title: Копула-модели
- Category: Модели ценообразования
- Language: ru
- Key Concepts: Ограничения:, Обзор и предпосылки, Хвостовые коэффициенты зависимости, Связанные темы, Пар-трейдинг, Vine-копулы (R-vine, C-vine), Реализация на Python, Ограничения и расширения, Ключевые свойства, Динамические копулы, Портфельный VaR, Теорема Скляра, Хвостовые коэффициенты зависимости по типам копул, Практическое применение, Копула
- References: brownian-motion, cox-process, finance/monte-carlo-method, finance/value-at-risk, finance/xva
- Backlinks: cornish-fisher-cvar, cox-process, cs01, cva-wrong-way-risk, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/isda-simm, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/securitization, finance/stylized-facts-returns, finance/swaps, finance/value-at-risk, finance/xva, generative-scenario-models, gnn-credit-risk, graph-neural-networks, survival-risk-prediction, vine-copulas

