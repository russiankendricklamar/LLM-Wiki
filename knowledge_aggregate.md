# Knowledge Base Aggregate for AI Synthesis

## System Instructions
All agents should refer to [[GEMINI.md]] for project-wide standards and research protocols. New research findings are located in the `research/` category with structured metadata.

## Entity: course-math-for-ai
- Title: Mathematics for Deep Learning: The PhD Path
- Category: AI & Math
- Language: en
- Key Concepts: Week 11 — Information geometry, Week 12 — Optimal transport, Week 6 — Probability theory, 12-week, Mathematics for Deep Learning — a PhD-grade syllabus, Information bottleneck inside a [[transformer-architecture|transformer]]., Module 0, Week 3 — Multivariable calculus, Prerequisites, Module 0 (optional, 1 week): Warm-up, Week 10 — Differential geometry, Week 5 — Measure theory and Lebesgue integral, Checkpoint:, Week 4 — Optimisation and convexity, Capstone project
- References: brownian-bridge, characteristic-functions, connections-curvature, convex-optimization, convexity, distributions-zoo, entropy-information, exponential-families, f-divergences, feynman-kac, finance/shannon-entropy, fisher-information, geometric-deep-learning, gradient-hessian-jacobian, hilbert-banach-spaces, hodge-theory, lagrange-multipliers, laplacian, lie-groups, linear-programming, linear-spaces-basis, linear-systems-gauss, lln-clt, malliavin-calculus, manifold, manifold-learning, martingale, math/analysis-geometry/information-geometry, math/differential-geometry, math/discrete-markov-chains, math/information-theory, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/sde-numerical-methods, math/sigma-algebra-measurability, maximum-entropy, measure-theory, multivariable-calculus, multivariate-normal, optimal-transport, ornstein-uhlenbeck, poisson-process, ricci-flow, stochastic-differential-equations, symplectic-geometry, taylor-series, tensor-decompositions, transformer-architecture

## Entity: bert
- Title: BERT
- Category: AI Architectures
- Language: en
- Key Concepts: Next Sentence Prediction (NSP):, Pre-training, Masked Language Modeling (MLM):, Overview
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
- Key Concepts: LSTM (Long Short-Term Memory):, Gating Mechanisms, GRU (Gated Recurrent Unit):, Overview

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
- Key Concepts: State, AI Market Making, Regulatory constraints, Overview, Reward, skew, Hyperparameter sensitivity, Objective, Key Results, Mathematical Framework, Quote Skewing, Avellaneda-Stoikov Model, Gasperov & Kostanjcar (2021) — RL with adversarial training, Spooner et al. (2018) — RL Market Making, Strategy Performance Comparison
- References: attention-mechanisms, deep-rl-execution, optimal-execution, temporal-fusion-transformer
- Backlinks: market-microstructure

## Entity: alpha-factor-research
- Title: Alpha Factor Research
- Category: AI Finance
- Language: en
- Key Concepts: Information Coefficient, Overview, Turnover vs Alpha Trade-off, IC Decay by Factor Type, non-linear, interaction-rich factors, Gu, Kelly & Xiu (2020), Multiple testing / overfitting, The Factor Model, Key Results, Auto-Encoder Latent Factors, Double Machine Learning for Causal Factors, Mathematical Framework, Capacity constraints, ML-Based Factor Construction, Alpha Factor Research
- References: deep-rl-execution, llm-financial-analysis, temporal-fusion-transformer
- Backlinks: double-ml, nlp-financial-analysis, vine-copulas

## Entity: ml-options-pricing
- Title: ML for Options Pricing
- Category: AI Finance
- Language: en
- Key Concepts: Neural Network Pricing, Deep Hedging (Buehler et al., 2019), Overview, neural network pricing, deep hedging, Cohen et al. (2023) — No-arbitrage neural vol surface, Key Results, Mathematical Framework, Horvath et al. (2021) — Rough vol surface fitting, Pricing Accuracy Comparison, Interpretability, No-Arbitrage Constraints as Regularisation, Deep hedging simulation dependency, Regime shifts, implied volatility surface
- References: black-scholes, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, temporal-fusion-transformer

## Entity: nlp-financial-analysis
- Title: NLP for Financial Analysis
- Category: AI Finance
- Language: en
- Key Concepts: Sentiment Signal Accuracy by Model, 10-K / 8-K Mining, Survivorship bias, Earnings call staging, Language and locale, Overview, Risk factor changes, MD&A tone, Material events (8-K), Key Results, Earnings call NLP alpha (Li et al., 2021), Mathematical Framework, Event-Driven Return Model, Loughran-McDonald Dictionary, [[llm]]-Based Information Extraction
- References: alpha-factor-research, finance/shannon-entropy, fine-tuning, llm, llm-financial-analysis, rag, temporal-fusion-transformer, transformer-architecture
- Backlinks: financial-entropy

## Entity: fourier-neural-operators
- Title: Fourier Neural Operators
- Category: AI Physics
- Language: en
- Key Concepts: 100x to 1000x faster, Operator Neural Network, Applications, Why It Matters: Resolution Invariance, Linear Transform (Weighting), Fourier domain, Performance: Speed and Accuracy, Fourier Neural Operators (FNO), Fourier Transform, How FNO Works, Non-linearity, Local Skip Connection, physics of the continuous operator, Inverse Fourier Transform, Visualization: Spectral Filtering
- References: neural-operators, partial-differential-equations, pinns
- Backlinks: fredholm-theory

## Entity: ai-physics/hamiltonian-nn
- Title: Hamiltonian Neural Networks (HNN)
- Category: AI Physics
- Language: en
- Key Concepts: Molecular Dynamics:, Related Topics, How HNNs Work:, Control Systems:, Key Advantages, Applications, Phase Space Consistency:, Data Efficiency:, Energy Conservation:, Hamiltonian Neural Networks (HNN), Celestial Mechanics:, The Problem with Black-Box Models, Mathematical Core, Auto-Differentiation, Hamiltonian
- References: equivariant-nn, math/variational-calculus, pinns
- Backlinks: ai-theory/spatial/equivariant-gnn, equivariant-nn, kuramoto-model, lagrange-multipliers, neural-odes, neural-operators, pinns, symplectic-geometry

## Entity: 3d-gaussian-splatting
- Title: 3D Gaussian Splatting
- Category: AI Theory
- Language: en
- Key Concepts: Opacity ($\alpha$), Rendering Speed, Alpha Blending, 100+ FPS, Covariance Matrix ($\Sigma$), Pruning, Virtual Reality, Spherical Harmonics (SH), Densification, E-commerce, Robotics, Visualization: Gaussian Projections, 3D Gaussian Splatting (3DGS), Representation, 5. Applications
- References: automatic-differentiation, convex-optimization, geometric-deep-learning, manifold-learning, nerf, transformer-architecture
- Backlinks: nerf, neural-radiance-fields-math

## Entity: activation-patching
- Title: Activation Patching
- Category: AI Theory
- Language: en
- Key Concepts: Activation patching, Name Mover Heads, Activation Patching, Nonlinearity., Corrupted input, Path patching, Duplicate Token Heads, Combinatorial explosion., Path Patching vs Activation Patching, Indirect Object Identification (IOI), Formalisation, Clean input, Correlation ≠ causation., Related Topics, S-Inhibition Heads
- References: attention-mechanisms, circuit-discovery, mechanistic-interpretability, transformer-architecture
- Backlinks: circuit-discovery, probing-classifiers, superposition

## Entity: ai-theory/adversarial-examples
- Title: Adversarial Examples
- Category: AI Theory
- Language: en
- Key Concepts: Prompt Injection for LLMs., Accuracy trade-off., Standard accuracy–robustness trade-off., Overview, Certified Robustness, Definition of adversarial example., Min-Max Formulation., FGSM (Fast Gradient Sign Method)., Scalability of randomized smoothing., Mathematical Framework, Adversarial Examples, Key Results and Hypotheses, Robust overfitting., Lack of principled theory., Linear hypothesis.
- References: convex-optimization, diffusion-models, math/concentration-inequalities, mechanistic-interpretability, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: differential-privacy, metric-spaces

## Entity: attention-mechanisms
- Title: Attention Mechanisms
- Category: AI Theory
- Language: en
- Key Concepts: Memory-Bound, 2. Multi-Head Attention (MHA), 4. Hardware Optimization: FlashAttention, 1. Scaled Dot-Product Attention, $\sqrt{d_k}$, Queries ($Q$), A. Multi-Query Attention (MQA), single pair of Key and Value heads, Attention Mechanisms: The Engine of Modern AI, Keys ($K$), Recomputation, B. Grouped-Query Attention (GQA), FlashAttention, Llama 3, Related Topics
- References: flash-attention, inference-serving, llm, paged-attention, transformer-architecture
- Backlinks: activation-functions-math, activation-patching, ai-market-making, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-linear-kernel, autoregressive-models, circuit-discovery, code-models, context-length, deepseek-v3-mla-compression, diffusion-models, distributed-training-3d, embedding-models, equivariant-diffusion-models, equivariant-nn, finance/adversarial-stress-testing, finance/bachelier-formula, finance/gnn-finance, finance/transformer-timeseries, fine-tuning, flash-attention, geometry-of-attention, gnn-credit-risk, gpt-architecture, gpu-architecture, graph-neural-networks, hardware-io-attention, induction-heads, inference-serving, kan, kv-cache-compression, language-models/mamba-ssm, linear-algebra, llm, long-context-yarn-longrope, math-reasoning-chains-rl, mechanistic-interpretability, mechanistic-interpretability-sae, meta-learning, mixture-of-depths, mla, model-parallelism, moe-routing, neural-scaling-laws, paged-attention, positional-encodings, probing-classifiers, quantization, quantum-machine-learning-kernels, research/mla-financial-reasoning, rl-trader, rope-scaling, slm, speculative-decoding-medusa, state-space-models, temporal-fusion-transformer, tensors-and-contractions, tokenization, tokenization-bpe-unigram, training-dynamics, transformer-architecture, universal-approximation-theory, vision-transformers, vision-transformers-scaling, vlm

## Entity: automatic-differentiation
- Title: Automatic Differentiation
- Category: AI Theory
- Language: en
- Key Concepts: Implicit differentiation, adjoints, Applications, Forward mode, PDE residuals in [[pinns]]:, Automatic differentiation (AD, autodiff), Checkpointing., an entire row of the Jacobian, Two modes: forward and reverse, Scientific ML., dual numbers, Automatic Differentiation, Tracing (dynamic AD)., Numerical considerations, Source-to-source vs tracing
- References: black-scholes, convex-optimization, finance/monte-carlo-method, inference-serving, neural-scaling-laws, partial-differential-equations, pinns
- Backlinks: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, category-theory-ml, chain-rule-autodiff, convex-analysis, deep-galerkin, differential-equations, gradient-hessian-jacobian, linear-algebra, mcts, multivariable-calculus, neural-odes, partial-differential-equations, pinns, qat, reinforcement-learning, tensors-and-contractions, variational-autoencoders

## Entity: bayesian-deep-learning
- Title: Bayesian Deep Learning
- Category: AI Theory
- Language: en
- Key Concepts: Autonomous Driving:, Epistemic versus Aleatoric Uncertainty, Kronecker-Factored Laplace (KFAC-Laplace), Deep Ensembles, temperature scaling, Aleatoric uncertainty, Medical Imaging:, SGLD and MCMC in Neural Networks, aleatoric, Mean-field variational inference, functional diversity, Variational Inference and the ELBO, Active Learning:, Financial Forecasting:, Applications and Impact
- References: evaluation-llms, gaussian-processes, math/kolmogorov-probability-axioms, mcmc, neural-scaling-laws, statistical-mechanics, variational-autoencoders
- Backlinks: ai-theory/in-context-learning, de-finetti-exchangeability, gaussian-processes

## Entity: causal-inference-do-calculus
- Title: Causal Inference: Do-Calculus & SCM
- Category: AI Theory
- Language: en
- Key Concepts: Causal Effect, Rule 1 (Insertion/Deletion of observations):, The Do-Operator, Frontdoor Criterion, The Rules of Do-Calculus, What Is It, Causal Inference: Do-Calculus & SCM, Abduction:, do-calculus, Rule 2 (Action/Observation exchange):, DERIVATION: Identification of the Frontdoor Formula, Identification Strategies, Counterfactuals, Structural Causal Models (SCM), Backdoor Criterion
- References: bayesian-networks, causal-inference-trading, graph-theory, math/m-estimators

## Entity: circuit-discovery
- Title: Circuit Discovery
- Category: AI Theory
- Language: en
- Key Concepts: circuit, circuits, Step 1: Task definition., ACDC, Circuit Discovery Methodology, Circuit Discovery, OV circuit, Negative heads., Step 3: Path patching., The IOI Circuit, polysemantic, [[attention-mechanisms|Attention]] Head Roles, features, Edge Attribution Patching (EAP), Induction heads
- References: activation-patching, attention-mechanisms, mechanistic-interpretability, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching

## Entity: contrastive-learning
- Title: Contrastive Learning
- Category: AI Theory
- Language: en
- Key Concepts: BYOL: Learning Without Negatives, InfoNCE, Bootstrap Your Own Latent, Information-theoretic view, Financial time series, Loss, Collapse prevention, Zero-shot classification, CLIP and computer vision, Symmetric contrastive loss, Sentence embeddings, Critical empirical finding, CLIP: Cross-Modal Contrastive Learning, Connections to Other Paradigms, Momentum Contrast
- References: embedding-models, finance/shannon-entropy, fine-tuning, generative-models, neural-scaling-laws, pac-learning, transformer-architecture, variational-autoencoders
- Backlinks: vision-transformers

## Entity: diffusion-models
- Title: Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: forward [[stochastic-differential-equations|SDE]], Applications, Classifier-free guidance, Diffusion models, denoising score matching, iterative denoising, Training, Score-based generative modelling, noise prediction, Memory of training data., Reverse process (learned):, Flow Matching: Deterministic Paths to Data, Why Diffusion Surpassed GANs, reverse [[stochastic-differential-equations|SDE]], reverse process
- References: attention-mechanisms, fokker-planck-equation, generative-models, manifold-learning, neural-scaling-laws, ornstein-uhlenbeck-process, stochastic-differential-equations, transformer-architecture, variational-autoencoders
- Backlinks: ai-theory/adversarial-examples, energy-based-models, equivariant-diffusion-models, generative-models, laplacian, math/sde-numerical-methods, nonequilibrium-statmech, variational-autoencoders

## Entity: energy-based-models
- Title: Energy-Based Models
- Category: AI Theory
- Language: en
- Key Concepts: Joint Energy Modeling (JEM), Connection to [[statistical-mechanics|Statistical Mechanics]], Contrastive Divergence and Approximation, Score Matching: Avoiding the Partition Function, Restricted Boltzmann Machines, direct, MLE and the Partition Function Problem, Modern EBMs and Hybrid Modeling, Denoising score matching, contrastive divergence, RBM
- References: convex-optimization, diffusion-models, manifold-learning, statistical-mechanics

## Entity: equivariant-diffusion-models
- Title: Equivariant Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: Molecular Generation:, Applications, Equivariant Diffusion Models, Position update:, Advantages:, Advantages and Challenges, reverse [[stochastic-differential-equations|SDE]], Riemannian Diffusion:, Robotics:, Invariant Schedulers:, Physical Consistency:, Robustness:, Challenges:, Special Euclidean group, Symmetry in Generative Modelling
- References: ai-theory/spatial/equivariant-gnn, attention-mechanisms, diffusion-models, laplacian, lie-algebras-physics, lie-groups, manifold-learning, stochastic-differential-equations

## Entity: ai-theory/spatial/equivariant-gnn
- Title: Equivariant GNN (E(n)-GNN)
- Category: AI Theory
- Language: en
- Key Concepts: Robotics:, Related Topics, Why Equivariance?, Molecular Modeling:, Mathematical Concept, Invariance, Equivariant Graph Neural Networks (E(n)-GNN), AI for Science, Impact and Applications, Coordinate Updates:, Structural Biology:, Equivariant Message Passing, Invariant Messages:, Equivariance
- References: ai-physics/hamiltonian-nn, math/foundations/group-theory-symmetries, spectral-graph-theory
- Backlinks: equivariant-diffusion-models

## Entity: equivariant-nn
- Title: Equivariant Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Physics / mathematics:, NequIP (2022):, Protein structure prediction:, Drug discovery:, Applications, Overview, Tensor product layers., Crystal property prediction:, How It Works, Robotics:, SE(3)-[[transformer-architecture|Transformer]] (2020):, Mathematical Framework, Prerequisites, Key architectures:, type-$\ell$ features
- References: ai-physics/hamiltonian-nn, attention-mechanisms, group-theory, pinns, qft-basic, scattering-amplitudes, transformer-architecture
- Backlinks: ai-physics/hamiltonian-nn, graph-neural-networks, group-theory, kan, lie-groups, neural-operators, pinns, representation-theory-ml

## Entity: factor-graphs-inference
- Title: Factor Graphs & Sum-Product Algorithm
- Category: AI Theory
- Language: en
- Key Concepts: What Is It, DERIVATION: Marginal on a Chain, Factor to Variable Message:, Junction Tree Algorithm, Variable to Factor Message:, treewidth, Bethe Free Energy, Max-Product Algorithm, Message Passing Rules, Sum-Product Algorithm, Convergence, The Sum-Product Algorithm, Beyond Sum-Product: Max-Product, Loopy Belief Propagation, factor nodes
- References: bayesian-networks, graph-theory, kalman-filter, variational-inference-math

## Entity: gauge-equivariant-nn
- Title: Gauge Equivariant Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Gauge Equivariant Convolution, Gauge Equivariant Neural Networks, Mathematical Formulation, Fiber Bundles and Connections
- References: manifold-learning

## Entity: gaussian-processes
- Title: Gaussian Processes
- Category: AI Theory
- Language: en
- Key Concepts: Scientific ML, Applications, Classification and Approximate Posteriors, RBF (squared exponential) kernel:, Deep kernels, Sparse GP approximations, Bayesian optimization, Matérn kernel:, Kernel Engineering and Knowledge Encoding, ARD (Automatic Relevance Determination), Neural Tangent Kernel (NTK), Marginal Likelihood and Hyperparameter Learning, Nyström approximation, Further Reading, Inducing points
- References: bayesian-deep-learning, finance/monte-carlo-method, math/kolmogorov-probability-axioms, neural-scaling-laws, pinns, statistical-mechanics
- Backlinks: ai-theory/neural-tangent-kernel, bayesian-deep-learning, bayesian-nonparametrics, hilbert-banach-spaces, multivariate-normal

## Entity: generative-models
- Title: Generative Models
- Category: AI Theory
- Language: en
- Key Concepts: Slow sampling:, sample quality, exact density, Text generation., exact sampling, Pharma., Audio and speech., Applications, Diffusion models, Finance., training is unstable, GANs, Problem Setup, reverse process, Energy-Based Models (EBM)
- References: diffusion-models, finance/monte-carlo-method, flow-matching, generative-scenario-models, hamiltonian-mechanics, llm, neural-odes, schrodinger-equation, sparse-autoencoders
- Backlinks: contrastive-learning, diffusion-models, generative-scenario-models, signature-based-models, variational-autoencoders

## Entity: autoregressive-models
- Title: Generative Models: Autoregressive Math
- Category: AI Theory
- Language: en
- Key Concepts: Masked Convolutions (PixelCNN):, Masked Architectures, Causal [[attention-mechanisms|Attention]] (Transformers):, Factorization
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
- Key Concepts: Flow Composition, Change of Variables

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
- Key Concepts: message passing, Neighbour mini-batches, LazyGNN / pre-computation, Applications, Edge prediction, Transport., Message Passing Neural Networks (MPNN)., Structural dependence., Pharmacology and materials., Finance., Message Passing Neural Networks, Node classification, Graph Neural Networks, Graph [[transformer-architecture|Transformer]] (Dwivedi & Bresson 2020, Graphormer 2021)., Knowledge graphs.
- References: attention-mechanisms, copula-models, equivariant-nn, fraud-detection, gnn-credit-risk, neural-odes, spectral-graph-theory, transformer-architecture
- Backlinks: gnn-credit-risk, graph-curvature-oversquashing, graph-theory, laplacian

## Entity: ai-theory/in-context-learning
- Title: In-Context Learning
- Category: AI Theory
- Language: en
- Key Concepts: Sensitivity to Prompt Format and Label Permutation, Few-shot, Chain-of-Thought as Extended In-Context Learning, Bayesian Interpretation and Posterior Inference, Label order effects, Prompt distillation, task vectors, Few-Shot vs Zero-Shot Scaling, Mechanistic Substrate: Induction Heads, Attend to next token, Task arithmetic, Emergence at Scale and Open Questions, In-Context Learning vs [[fine-tuning]], Verbalization sensitivity, induction heads
- References: attention-mechanisms, bayesian-deep-learning, chain-of-thought, fine-tuning, mechanistic-interpretability, neural-scaling-laws, prompt-engineering, transformer-architecture
- Backlinks: ai-theory/neural-tangent-kernel, attention-kernel, induction-heads, training-dynamics

## Entity: induction-heads
- Title: Induction Heads
- Category: AI Theory
- Language: en
- Key Concepts: Layer 1: Previous Token Head, The Two-Layer Mechanism, In-Context Learning (ICL), Searches, What Is It, Induction Heads, Circuit Discovery, Phase Transition in Training, phase transition, Increases, Layer 2: Induction Head, Query (Q), Value (V), Visualization: The "Aha!" Moment, Identifies
- References: ai-theory/in-context-learning, attention-mechanisms, mechanistic-interpretability, transformer-architecture

## Entity: information-bottleneck-theory
- Title: Information Bottleneck Theory
- Category: AI Theory
- Language: en
- Key Concepts: Information Bottleneck Theory, Compression Phase, The Information Bottleneck Objective, Fitting Phase, Application to Deep Learning, Exact Solution and the IB Curve, IB curve
- References: convex-optimization
- Backlinks: statistical-mechanics-learning

## Entity: ai-theory/knowledge-distillation
- Title: Knowledge Distillation
- Category: AI Theory
- Language: en
- Key Concepts: Ensemble knowledge:, Why it works: information-geometric perspective, Applications, Data-free distillation, Temperature selection:, Student learns both hard and soft targets, Self-distillation and born-again networks, PAC-Bayes theory, Model compression:, Prototypical activation patterns:, Distillation for large language models, Knowledge Distillation, Knowledge distillation (KD), Pedagogical Knowledge Distillation (PKD), The Hinton framework: temperature-scaled softmax and distillation loss
- References: attention-mechanisms, evaluation-llms, fine-tuning, manifold-learning, neural-scaling-laws, pac-learning, quantization, transformer-architecture

## Entity: kolmogorov-complexity
- Title: Kolmogorov Complexity
- Category: AI Theory
- Language: en
- Key Concepts: Conditional complexity:, Kolmogorov-Levin theorem:, Compression-based AGI:, Financial complexity:, Applications, Connection to Shannon [[shannon-entropy|entropy]]., No finite-sample guarantees., Mutual information (algorithmic):, Shannon-Kolmogorov duality:, Overview, Compressibility and randomness., Kolmogorov-random:, How It Works, Constant dependence on UTM., Minimum Description Length (MDL).
- References: finance/lempel-ziv-complexity, finance/shannon-entropy, pac-learning
- Backlinks: chain-of-thought, math/cantor-diagonal, math/godel-incompleteness, pac-learning

## Entity: learnable-activations
- Title: Learnable Activations and B-splines
- Category: AI Theory
- Language: en
- Key Concepts: Learnable activations, Normalising flows., Learnable Activations and B-splines, Grid refinement., Applications, Speed., Initialisation., Symbolic regression., Swish., Kolmogorov-Arnold Networks (KANs), Ecosystem maturity., Parametrisations, Local support., KAN: activations on edges, Regularisation.
- References: kan, kolmogorov-arnold-theorem, neural-scaling-laws, pinns, sparse-autoencoders, transformer-architecture
- Backlinks: kan, kolmogorov-arnold-theorem

## Entity: quantization-error-math
- Title: Mathematical Error Analysis in Model Quantization
- Category: AI Theory
- Language: en
- Key Concepts: Error Propagation in Linear Layers, Uniform Quantization, Stochastic Rounding, Mathematical Error Analysis in Model [[quantization]]
- References: quantization

## Entity: diffusion-sde-math
- Title: Mathematical Foundations of Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: score function, Reverse [[stochastic-differential-equations|SDE]] and Score Matching, The Probability Flow ODE, Forward [[stochastic-differential-equations|SDE]], Langevin Dynamics Connection, Mathematical Foundations of Diffusion Models
- References: stochastic-differential-equations

## Entity: mechanistic-interpretability
- Title: Mechanistic Interpretability
- Category: AI Theory
- Language: en
- Key Concepts: Importance for AI Safety, Related Topics, Key Methodology, Detecting Deception:, Superposition Hypothesis:, Model Editing (ROME/MEMIT):, Logit Lens:, Activation Patching:, Residual Stream:, Sparse Autoencoders (SAE):, Mechanistic Interpretability, Implementation Snippet, Mathematical Core, Alignment Verification:, Circuit Analysis:
- References: attention-mechanisms, constitutional-ai, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, chain-of-thought, circuit-discovery, constitutional-ai, induction-heads, language-models/safety/rlhf-dpo, llm, math/godel-incompleteness, mixture-of-experts, neural-scaling-laws, pac-learning, probing-classifiers, rlhf, slm, sparse-autoencoders, superposition

## Entity: meta-learning
- Title: Meta-Learning
- Category: AI Theory
- Language: en
- Key Concepts: Algorithm:, Applications:, First-Order MAML (FOMAML):, Model-Agnostic Meta-Learning (MAML), Alternative Meta-Learners, Meta-Learning and In-Context Learning, Limitations:, Formal Setup, Prototypical Networks, Matching Networks, Reptile, second-order derivatives, Applications and Limitations, in-context learning (ICL)
- References: attention-mechanisms, chain-of-thought, convex-optimization, llm, neural-scaling-laws, reinforcement-learning, rlhf, transformer-architecture
- Backlinks: prompt-engineering

## Entity: model-based-rl
- Title: Model-Based Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: World Models, Related Topics, world model, Ensembles., The Dyna Architecture, MBPO: Model-Based Policy Optimization, Dyna, Probabilistic models., Monte Carlo Tree Search (MCTS), Model-based RL (MBRL), Model-Free vs Model-Based, MCTS and AlphaZero, Model-Based Reinforcement Learning, Model Error Compounding, Dreamer / DreamerV3
- References: offline-rl, ppo, reinforcement-learning, soft-actor-critic
- Backlinks: offline-rl, ppo, soft-actor-critic

## Entity: neural-odes
- Title: Neural ODEs
- Category: AI Theory
- Language: en
- Key Concepts: Physics and scientific models., Control and reinforcement learning., Cost., Neural Ordinary Differential Equations (Neural ODEs), Applications, Irregularly sampled time series., Neural ODE, adaptive compute, Latent ODE., ResNet, Adjoint method for [[automatic-differentiation|backpropagation]], Computer vision., Variants and extensions, adjoint sensitivity method, Invertibility.
- References: ai-physics/hamiltonian-nn, automatic-differentiation, brownian-motion, hamiltonian-mechanics, pinns
- Backlinks: calculus-of-variations, generative-models, graph-neural-networks, math/ode-stability, neural-sdes-finance, operator-semigroups, reinforcement-learning, state-space-models, variational-autoencoders

## Entity: nerf
- Title: Neural Radiance Fields (NeRF)
- Category: AI Theory
- Language: en
- Key Concepts: Visualization: The NeRF Ray Casting, Input, Training, B. View-Dependent Effects, Volume Rendering, 3. The NeRF Pipeline, 4. Limitations and Evolution, A. Positional Encoding, Speed, Output, 2. Key Innovations, Capture, 1. The Core Concept: Volumetric Rendering, Neural Radiance Fields (NeRF), Mip-NeRF
- References: 3d-gaussian-splatting, manifold-learning, positional-encodings, transformer-architecture
- Backlinks: 3d-gaussian-splatting, neural-radiance-fields-math

## Entity: neural-scaling-laws
- Title: Neural Scaling Laws
- Category: AI Theory
- Language: en
- Key Concepts: Inference-time scaling (test-time compute)., Applications, Overview, model size and token count should scale equally, Emergent abilities., Extrapolation uncertainty., Architecture dependence., Emergent abilities controversy:, Modality scaling., Performance prediction:, How It Works, Training loss vs. compute curves., Mathematical Framework, Prerequisites, Irreducible [[shannon-entropy|entropy]]:
- References: attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, pac-learning
- Backlinks: ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, automatic-differentiation, bayesian-deep-learning, bitnet, contrastive-learning, curriculum-learning, diffusion-models, gaussian-processes, learnable-activations, llm, meta-learning, mixture-of-experts, pac-learning, positional-encodings, quantization, reasoning-models, rlhf, slm, test-time-scaling, training-dynamics, transformer-architecture

## Entity: ai-theory/neural-tangent-kernel
- Title: Neural Tangent Kernel
- Category: AI Theory
- Language: en
- Key Concepts: at infinite width, this kernel becomes deterministic and constant in time, Connection to Gaussian Processes, Motivation: The Infinite-Width Limit, Practical Implications, Mean field theory, Width requirements:, Kernel Regime vs. Feature Learning Regime, decays exponentially, Convergence Guarantees and Over-Parameterization, Finite-Width Corrections and Mean Field Theory, PAC-style guarantees, Further Reading, Learning rate scaling:, Gradient Flow in Function Space, [[transformer-architecture|transformer]] architectures
- References: ai-theory/in-context-learning, attention-mechanisms, automatic-differentiation, convex-optimization, finance/shannon-entropy, gaussian-processes, math/concentration-inequalities, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: neural-radiance-fields-math, ntk, statistical-mechanics-learning

## Entity: offline-rl
- Title: Offline Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: Applications, Robotics., IQL, Finance., Implicit Q-Learning (IQL), Healthcare., TD3+BC, Offline Reinforcement Learning, Decision [[transformer-architecture|Transformer]], CQL, The Distributional Shift Problem, Conservative Q-Learning (CQL), Autonomous driving., Dataset Quality Matters, extrapolation errors
- References: deep-rl-execution, model-based-rl, reinforcement-learning, soft-actor-critic, transformer-architecture
- Backlinks: model-based-rl, soft-actor-critic

## Entity: pac-learning
- Title: PAC Learning & VC Dimension
- Category: AI Theory
- Language: en
- Key Concepts: Fundamental Theorem of Statistical Learning., Generalisation bounds., shattered, Applications, Overview, Sauer's Lemma., Active learning:, How It Works, Computational complexity., Sample complexity with VC dimension:, Realizable assumption., Fundamental theorem:, Mathematical Framework, Deep learning paradox:, Deep learning gap.
- References: finance/shannon-entropy, kolmogorov-complexity, mechanistic-interpretability, neural-scaling-laws
- Backlinks: ai-theory/adversarial-examples, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, code-models, contrastive-learning, empirical-processes, kolmogorov-complexity, neural-scaling-laws, sparse-autoencoders, statistical-mechanics-learning, vlm

## Entity: probing-classifiers
- Title: Probing Classifiers
- Category: AI Theory
- Language: en
- Key Concepts: LEACE (Least-squares Concept Erasure):, Applications, Linguistic structure in LLMs., Causality gap., Setup, Bias detection., Representation quality metrics., The MDL probe, Linear probes, Probing classifiers, probing selectivity, Linear vs Nonlinear Probes, Representation vs computation., Limitations, Nonlinear probes
- References: activation-patching, attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, sparse-autoencoders

## Entity: ppo
- Title: Proximal Policy Optimization (PPO)
- Category: AI Theory
- Language: en
- Key Concepts: Hyperparameters, TRPO, PPO-Clip, [[rlhf]] / [[llm]] alignment., Related Topics, Proximal Policy Optimization (PPO), The Clipped Surrogate Objective, Applications, Continuous control., Training Dynamics, Games., Full PPO Loss, PPO vs TRPO, GAE, Motivation: The Policy Update Problem
- References: finance/shannon-entropy, llm, model-based-rl, reinforcement-learning, rlhf, soft-actor-critic
- Backlinks: model-based-rl, soft-actor-critic

## Entity: rlhf
- Title: RLHF (Reinforcement Learning from Human Feedback)
- Category: AI Theory
- Language: en
- Key Concepts: Alignment Tax: Capability-Alignment Tradeoff, Stage 3: PPO Optimization, Three-Stage Pipeline, Multi-Objective Alignment:, Why KL Regularization: Preventing Reward Hacking, [[dpo]]: Direct Preference Optimization, Advantages:, alignment tax, Reward Model Generalization:, Preference Data Quality:, Stage 1: Supervised [[fine-tuning]] (SFT), Disadvantages:, Why RLHF Works: Human Preference as Orthogonal Signal, Open Problems, Stage 2: Reward Model Training
- References: chain-of-thought, dpo, finance/shannon-entropy, fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, reinforcement-learning, transformer-architecture
- Backlinks: causal-inference, chain-of-thought, constitutional-ai, dpo, evaluation-llms, f-divergences, fine-tuning, language-models/safety/rlhf-dpo, llm, mechanism-design, meta-learning, orm-prm, ppo, preference-optimization, preference-optimization-variants, prm, prompt-engineering, reasoning-models, reinforcement-learning, soft-actor-critic, synthetic-data-alignment

## Entity: reinforcement-learning
- Title: Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: Off-policy, Model-based, Markov Decision Process, SARSA., Applications, Soft Actor-Critic (SAC), Games., On-policy, Robotics., Finance., explore/exploit, Exploration vs Exploitation, Intrinsic curiosity, Actor-Critic., DQN (Deep Q-Network, Mnih et al. 2015).
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
- Key Concepts: Maximum [[shannon-entropy|Entropy]] Objective, Soft Bellman Equations
- References: finance/shannon-entropy

## Entity: representation-theory-ml
- Title: Representation Theory for Machine Learning
- Category: AI Theory
- Language: en
- Key Concepts: Tensor Products and Clebsch-Gordan Coefficients, $SO(3)$ and $SE(3)$ Representations, Group Actions and Equivariance, Representation Theory for Machine Learning
- References: equivariant-nn

## Entity: soft-actor-critic
- Title: Soft Actor-Critic (SAC)
- Category: AI Theory
- Language: en
- Key Concepts: SAC vs TD3 vs PPO, Maximum [[shannon-entropy|Entropy]] RL, Related Topics, Architecture: Three Networks, Energy systems., Automatic Entropy Tuning, Critic Loss, Applications, Actor Loss, Soft Actor-Critic (SAC), Finance., Robotics., Twin critics, Reparameterization Trick, Sample Efficiency vs PPO
- References: finance/shannon-entropy, model-based-rl, offline-rl, ppo, reinforcement-learning, rlhf
- Backlinks: model-based-rl, offline-rl, ppo

## Entity: sparse-autoencoders
- Title: Sparse Autoencoders (SAE)
- Category: AI Theory
- Language: en
- Key Concepts: Applications, Overview, Completeness., Geometry of feature space., Dictionary learning objective., How It Works, Feature splitting:, Evaluation metrics:, Mathematical Framework, Top-K SAEs., Top-K advantage:, Prerequisites, L0 sparsity:, Sparse Autoencoders (SAE), Training pipeline.
- References: finance/shannon-entropy, llm, mechanistic-interpretability, pac-learning, transformer-architecture
- Backlinks: circuit-discovery, generative-models, learnable-activations, mechanistic-interpretability, probing-classifiers, superposition, variational-autoencoders

## Entity: state-space-models
- Title: State Space Models (SSM)
- Category: AI Theory
- Language: en
- Key Concepts: HiPPO, Control & robotics, unrolled as a convolution, Applications, Language modeling, Time series, Time complexity, polynomial basis projection, Convolutional View: Kernel Representation, fixed, $\sim 1000\times$ speedup, SOTA language models, References, Interpretability, with linear constant factors
- References: attention-mechanisms, kalman-filter, llm, math/spectral-theory-operators, mixture-of-experts, neural-odes, nonlinear-filtering, transformer-architecture
- Backlinks: attention-kernel, context-length

## Entity: superposition
- Title: Superposition & Linear Representation
- Category: AI Theory
- Language: en
- Key Concepts: Superposition, more features than it has dimensions, Polysemanticity, Related Topics, What Is It, Linear Representation Hypothesis, The Toy Model of Superposition, Mathematical Framework, polytopes, Superposition and Linear Representation, Sparse Autoencoders (SAE), Detecting Deception, Visualizing Dimension vs. Features, Implications for AI Safety, Uncovering Hidden Capabilities
- References: activation-patching, llm, mechanistic-interpretability, sparse-autoencoders

## Entity: transformer-architecture
- Title: Transformer Architecture
- Category: AI Theory
- Language: en
- Key Concepts: RoPE (Rotary Positional Embeddings), Feed-Forward Network (FFN), Post-Norm, Relative Distance, 3. Positional Embeddings: Giving Time to Space, 2. Normalization: Stability at Scale, Sinusoidal, Pre-Norm, 1. The Core Components, Stability, Decoder-Only (GPT), RMSNorm, 4. The Softmax Bottleneck, Encoder-Only (BERT), The Bottleneck
- References: attention-mechanisms, mixture-of-experts, neural-scaling-laws
- Backlinks: 3d-gaussian-splatting, activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-mechanisms, bitnet, chain-of-thought, circuit-discovery, code-models, context-length, contrastive-learning, course-math-for-ai, decision-transformers, deep-hedging, diffusion-models, embedding-models, equivariant-nn, finance/transformer-timeseries, fine-tuning, fraud-detection, gnn-credit-risk, gpt-architecture, graph-neural-networks, induction-heads, inference-serving, kan, kolmogorov-arnold-theorem, language-models/mamba-ssm, learnable-activations, linear-algebra, llm, logistic-regression, lora-peft, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/godel-incompleteness, mechanistic-interpretability, meta-learning, mixture-of-depths, mixture-of-experts, model-parallelism, moe-routing, multi-token-prediction, nerf, neural-radiance-fields-math, news-sentiment-trading, nlp-financial-analysis, offline-rl, portfolio-optimization-ml, positional-encodings, quantization, rlhf, rope-scaling, slm, sparse-autoencoders, state-space-models, temporal-fusion-transformer, tokenization, training-dynamics, universal-approximation-theory, vector-databases, vision-transformers, vlm, volatility-forecasting

## Entity: variational-autoencoders
- Title: Variational Autoencoders (VAE)
- Category: AI Theory
- Language: en
- Key Concepts: reparameterization trick, disentangled, The Reparameterization Trick, Extensions and Applications, The Evidence Lower Bound (ELBO), Architecture: Encoder and Decoder, Closed-Form KL Divergence, Related Articles, β-VAE, discrete, Connection to Diffusion Models, Stable Diffusion, encoder, Theoretical Significance, VQ-VAE
- References: automatic-differentiation, convex-optimization, diffusion-models, generative-models, math/kolmogorov-probability-axioms, neural-odes, sparse-autoencoders, statistical-mechanics
- Backlinks: bayesian-deep-learning, bayesian-inference, change-of-variables, contrastive-learning, convexity, diffusion-models, information-theory-basics, jensens-inequality, manifold, pca, variational-inference

## Entity: vision-transformers
- Title: Vision Transformers (ViT)
- Category: AI Theory
- Language: en
- Key Concepts: Architecture, Learnable Embeddings, [CLS] Token, "An Image is Worth 16x16 Words.", Linear Projection, What Is It, Scaling, Position Embeddings, Mathematical Framework, [[transformer-architecture|Transformer]] Encoder, Data Requirement, Inductive Bias, Patch Partitioning, Vision Transformers (ViT), [[transformer-architecture|Transformer]] architecture
- References: attention-mechanisms, contrastive-learning, transformer-architecture, vlm

## Entity: about
- Title: About Me
- Category: About Me
- Language: en
- Key Concepts: 2024 – 2025, Interests, Risk Manager, Nyquist, Event Manager, Principal Economist at the Bank of Russia, Quantum Physics, Tools, Ultima Thule, 2023 – 2024, Timeline, Risk Analyst, 2019 – 2022, 2025 – Present, Methodologies
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
- Key Concepts: Asymptotic Analysis of Integrals, Method of Stationary Phase, The Saddle-Point Method (Method of Steepest Descent), Laplace's Method

## Entity: calculus-of-variations
- Title: Calculus of Variations
- Category: Advanced Analysis
- Language: en
- Key Concepts: Lagrangian, Principles of Physics, functionals, Visualization: The Shortest Path (Geodesic), Related Topics, Variational Inference (VI), Regularization, Neural ODEs, Hamilton's Principle, Variation and Modern AI, Calculus of Variations, The Fundamental Problem, Euler-Lagrange equation, Geodesics, Euler-Lagrange Equation
- References: functional-analysis, lagrangian-mechanics, neural-odes, variational-inference
- Backlinks: deep-ritz-method, fixed-point-theorems

## Entity: fixed-point-theorems
- Title: Fixed Point Theorems
- Category: Advanced Analysis
- Language: en
- Key Concepts: "engines of existence", Applications, Visualization: The Contraction Map, Game Theory, existence, 3. Schauder Fixed Point Theorem (The Engine of PDEs), Reinforcement Learning, The Theorem, set-valued functions, 2. Brouwer Fixed Point Theorem (The Engine of Topology), Fixed Point Theorems: The Engines of Existence, 1. Banach Contraction Principle (The Engine of Convergence), Nash Equilibria, Economics, Related Topics
- References: calculus-of-variations, convexity, hilbert-banach-spaces, reinforcement-learning
- Backlinks: proximal-algorithms-admm

## Entity: fredholm-theory
- Title: Fredholm Theory
- Category: Advanced Analysis
- Language: en
- Key Concepts: index, Related Topics, kernel, Kernel Machines, The Integral Equation, Spectral Analysis, Fredholm Alternative, Fredholm Theory, Why It Matters for AI: Neural Operators, Inverse Problems, Visualization: Kernel Smoothing, Atiyah-Singer Index Theorem, integral equations, Index and Fredholm Operators, Fredholm operator
- References: fourier-neural-operators, functional-analysis, partial-differential-equations

## Entity: microlocal-analysis
- Title: Microlocal Analysis
- Category: Advanced Analysis
- Language: en
- Key Concepts: Microlocal Analysis, Propagation of Singularities, phase space, Wave Front Set, cotangent bundle, where, Pseudodifferential Operators, Hamiltonian trajectories, Hörmander, Visualization: Singularity Propagation, Inverse Problems, Quantum Chaos, The Wave Front Set ($WF$), which direction, Pseudodifferential Operators ($\Psi$DO)
- References: schwartz-distributions, symplectic-geometry

## Entity: proximal-algorithms-admm
- Title: Proximal Algorithms & ADMM
- Category: Advanced Analysis
- Language: en
- Key Concepts: Proximal Algorithms & ADMM, The Proximal Operator, Related Topics, Alternating Direction Method of Multipliers (ADMM), proximal operator, Augmented Lagrangian, ADMM: Alternating Direction Method of Multipliers, DERIVATION: Proximal Operator of the $L_1$ Norm, Convergence, soft-thresholding, What Is It, Proximal Gradient Method
- References: convex-optimization, fixed-point-theorems

## Entity: deep-ritz-method
- Title: The Deep Ritz Method
- Category: Advanced Analysis
- Language: en
- Key Concepts: Deep Ritz Framework, Handling Boundary Conditions, Related Topics, Advantages and High Dimensions, Residual Networks (ResNets), The Variational Principle, variational principle, DERIVATION: Ritz Method for the Heat Equation, Smoothness:, Architecture: Residual Networks, What Is It, Mesh-free:, Penalty Method, Curse of Dimensionality:, The Deep Ritz Method
- References: calculus-of-variations, deep-galerkin, monte-carlo-integration, pinns, sobolev-spaces

## Entity: automata-theory
- Title: Automata Theory & Computability
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Turing Machines, Finite Automata

## Entity: compiler-theory
- Title: Compiler Theory: Lexing and Parsing
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: LL(k) Parsers:, Lexical Analysis, LR(k) Parsers:, Syntax Analysis (Parsing)

## Entity: p-vs-np
- Title: Complexity Theory: P vs NP and Cook-Levin
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Cook-Levin Theorem, Formal Definitions, P vs NP problem

## Entity: cryptography-math
- Title: Cryptography: RSA and Elliptic Curves
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Elliptic Curve Cryptography (ECC), RSA (Rivest-Shamir-Adleman)

## Entity: distributed-systems-consensus
- Title: Distributed Systems: CAP and Consensus
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Availability:, Consistency:, Paxos Consensus, CAP Theorem, Partition tolerance:

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
- Key Concepts: Brooks' Theorem:, Four Color Theorem:, Bounds and Theorems, chromatic number, Vertex Coloring

## Entity: max-flow-min-cut
- Title: Graph Theory: Max-Flow Min-Cut Theorem
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Ford-Fulkerson Algorithm, The Theorem, Max-Flow Min-Cut Theorem

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
- Key Concepts: Jacobi Fields and Conjugate Points, The Second Variation

## Entity: instrumental-variables
- Title: Econometrics: Instrumental Variables
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Exogeneity (Exclusion Restriction):, The IV Estimator, Relevance:, 2SLS

## Entity: sobolev-embeddings
- Title: Functional Analysis: Sobolev Embeddings
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Sobolev Embedding Theorems, The Spaces

## Entity: harmonic-analysis
- Title: Harmonic Analysis: Fourier Convergence
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: $L^2$ Convergence:, Fourier Series, Carleson's Theorem:, Convergence Theorems, Pointwise Convergence (Dirichlet/Jordan):
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
- Key Concepts: Dual update (gradient ascent):, The Lagrangian Relaxation, Iterative Updates, Primal update (parallelizable):

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
- Key Concepts: Variable Elimination, Junction Tree Algorithm

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
- Key Concepts: Extended Kalman Filter (EKF), Unscented Transform, Unscented Kalman Filter (UKF)

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
- Key Concepts: Moment Conditions, The GMM Objective

## Entity: arch-garch
- Title: Time Series: ARCH and GARCH Models
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: GARCH(p, q), ARCH(q)

## Entity: cointegration-johansen
- Title: Time Series: Cointegration & Johansen Test
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Error Correction Model (ECM), Johansen Test

## Entity: differential-forms
- Title: Differential Forms & Exterior Calculus
- Category: Advanced Theory
- Language: en
- Key Concepts: Generalized Stokes' Theorem, closed, exact, Exterior Derivative, Wedge Product
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
- Key Concepts: The Fundamental Theorem, Solvability by Radicals, solvable group, Galois extension, Field Extensions and Automorphisms

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
- Key Concepts: Martingales, martingale, Probability Spaces, Radon-Nikodym Theorem

## Entity: special-relativity
- Title: Special Relativity: Minkowski Space and Lorentz Transforms
- Category: Advanced Theory
- Language: en
- Key Concepts: Minkowski space, Four-Vectors, Lorentz Transformations
- References: math/differential-geometry
- Backlinks: dirac-equation, maxwell-electromagnetism

## Entity: a-star-search
- Title: A* Search
- Category: Algorithms
- Language: en
- Key Concepts: Overview, Heuristics

## Entity: dijkstras-algorithm
- Title: Dijkstra's Algorithm
- Category: Algorithms
- Language: en
- Key Concepts: Mechanism, Overview

## Entity: dynamic-programming
- Title: Dynamic Programming Basics
- Category: Algorithms
- Language: en
- Key Concepts: Overlapping Subproblems:, Optimal Substructure:, Properties, Overview

## Entity: alpha-factor-discovery
- Title: Alpha Factor Discovery
- Category: Algorithms and ML
- Language: en
- Key Concepts: Universality, Multi-Factor Model Construction, Factor Attribution, Alpha Decay Monitoring, Survivorship bias, Overfitting, Cross-Sectional Signal Combination, Genetic Programming (GP), IC Decay Profile, Transaction costs, Reinforcement Learning, Alpha Factor Discovery, Mathematical Framework, Non-linearity, Fundamental Law of Active Management
- References: bayesian-black-litterman, finance/alpha-stacking, finance/gan, finance/monte-carlo-method, mcmc
- Backlinks: alpha-orthogonalization, alternative-data-alpha, finance/alpha-stacking, finance/lightgbm-xgboost, finance/meta-labeling, finance/online-learning-mab, finance/shap-interpretability, model-free-rl-factors

## Entity: alpha-orthogonalization
- Title: Alpha Orthogonalization
- Category: Algorithms and ML
- Language: en
- Key Concepts: The Mathematical Process, Neutral, Alpha Orthogonalization: Factor Independence, Alpha Orthogonalization, Why Orthogonalization is Critical, 2. Risk Neutralization, Alphas, Gram-Schmidt process, True Capacity, The Problem: Factor Crowding, Visualization: Vector Orthogonalization, Sector Neutral, Market Neutral, Related Topics, Currency Neutral
- References: alpha-factor-discovery, finance/factor-attribution, pca
- Backlinks: causal-inference-trading, pca-statarb

## Entity: alternative-data-alpha
- Title: Alternative Data Alpha
- Category: Algorithms and ML
- Language: en
- Key Concepts: [[mcmc]], Survivorship and selection bias, Energy, Alt-Data Signal Decay Profile, Missing data mechanics, NLP + alt-data fusion, Consumer Sector, Mathematical Framework, IC vs. Crowding, Limitations & Extensions, Lead-lag structure, Real Estate, Exclusivity, Extensions:, Overview & Background
- References: alpha-factor-discovery, finance/alpha-stacking, finance/gan, finance/value-at-risk, mcmc, news-sentiment-trading
- Backlinks: news-sentiment-trading

## Entity: causal-inference-trading
- Title: Causal Inference in Trading
- Category: Algorithms and ML
- Language: en
- Key Concepts: 3. Granger Causality vs. True Causality, Visualization: The Confounder Trap, Related Topics, Causal Inference in Trading, Confounders and Spurious Alphas, 2. The Do-Calculus (Judea Pearl), Natural Experiments, correlation, Control, Tools of the Trade, Why Citadel uses Causal AI, Backtest Overfitting, Granger Causality, Policy Evaluation, Alpha Orthogonalization
- References: alpha-orthogonalization, causal-inference, finance/probability-of-backtest-overfitting
- Backlinks: causal-inference-do-calculus

## Entity: finance/cointegration
- Title: Cointegration
- Category: Algorithms and ML
- Language: en
- Key Concepts: Step 2., Engle-Granger two-step method, Pairs trading and statistical arbitrage., Step 1., Portfolio construction., The error correction model (ECM), Yield curve modelling., stable long-run equilibrium, trace test, cointegration, Spurious regression (Granger and Newbold, 1974)., Definition., error correction representation, cointegrated, Related Articles
- References: arima-models, central-limit-theorem, copula-models, finance/value-at-risk, hidden-markov-models, kalman-filter, math/law-of-large-numbers, math/spectral-theory-operators
- Backlinks: arima-models, pairs-trading

## Entity: convolutional-volatility-resolution-clustering
- Title: Convolutional Volatility Resolution Clustering (CVRC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Volatility Surface as an Image, Variational Autoencoder (VAE), Overfitting, Non-Stationary Risk Modeling, Temporal CNN (TCN), Layer 2, Layer 1, Structural Contagion, Mathematical Framework, Multi-scale, Prerequisites, Interpretability, Limitations & Extensions, Interpretable latent space, Regime-Adaptive Trading
- References: arch-models, finance/gan, finance/spectral-analysis, garch-models, manifold-learning, volatility-forecasting, volatility-modulated-spectral-surface, wavelet-transform

## Entity: deep-galerkin
- Title: Deep Galerkin Method (DGM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Deep Galerkin Method (DGM) in Finance, Deep Galerkin Method (DGM), High Dimensions, Automatic Differentiation, Continuous Solution, Related Topics, Neural Network, Curse of Dimensionality, Sampling, Optimization, The Core Idea: PDE as a Loss Function, Why Tier-1 Quants Use It, Visualization: The Curse Broken, How It Works, Autograd
- References: automatic-differentiation, black-scholes, convex-optimization, neural-sdes-finance, numerical-pde-finance
- Backlinks: deep-ritz-method, schwartz-distributions

## Entity: deep-hedging
- Title: Deep Hedging
- Category: Algorithms and ML
- Language: en
- Key Concepts: Complete Markets, market frictions, Zero Transaction Costs, Global Optimization, Universal, Key Advantages, Friction-Aware, Visualization: BS Delta vs. Deep Hedging, Model-Agnostic, optimal hedge ratio, 2. The Neural Network, Convex Risk Measure, Deep Hedging: Reinforcement Learning for Derivatives, Related Topics, Buehler et al. (2019)
- References: finance/delta-hedging-practice, finance/rough-volatility, reinforcement-learning, transformer-architecture

## Entity: fama-macbeth-regression
- Title: Fama-MacBeth Regression
- Category: Algorithms and ML
- Language: en
- Key Concepts: Generated regressors, Small cross-section, risk premium, Why Fama-MacBeth Standard Errors Work, Fama-MacBeth regression, Step 1: Time-Series Regressions (Factor Loadings), Parameter Reference, Risk Premia Simulation Chart, errors-in-variables (EIV), Characteristic-based models, Step 2: Cross-Sectional Regressions (Risk Premia), Multifactor Extension, Pricing factor discovery, Background, Portfolios instead of individual assets
- References: black-scholes, finance/hierarchical-risk-parity, mcmc, portfolio-optimization-ml, ts-cs-factor-analysis
- Backlinks: causal-inference, finance/apt-ross, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, ts-cs-factor-analysis

## Entity: finance/gan
- Title: GANs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Data augmentation, Stylised Facts the GAN Must Capture, FinGAN, The Generator ($G$), Applications in Quant Finance, GAN Architecture, Absence of linear autocorrelation, Parameter Reference, WGAN, Python: Conceptual Training Loop, Risk management (VaR/ES), Mode collapse, Visualization: Real vs. Synthetic Paths, Leverage effect, Background
- References: finance/monte-carlo-method, finance/value-at-risk, fraud-detection, heston-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, convolutional-volatility-resolution-clustering, f-divergences, finance/adversarial-stress-testing, fraud-detection, lob-prediction, news-sentiment-trading, portfolio-optimization-ml, timegan, volatility-modulated-spectral-surface

## Entity: finance/gnn-finance
- Title: Graph Neural Networks in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Financial Applications, GNNs (Graph Neural Networks), Graph Neural Networks in Finance, Related Articles, Graph [[attention-mechanisms|Attention]] Networks (GAT), Graph Convolutional Networks (GCN), Implementation
- References: attention-mechanisms, finance/eigenportfolio-rmt, finance/systemic-contagion-debtrank, finance/transformer-timeseries, fraud-detection

## Entity: finance/hidden-markov-models
- Title: Hidden Markov Models (HMM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Volatility forecasting, The Markov Property, Regime Switching Visualization, Parameter Reference, 1. Evaluation (Forward-Backward Algorithm), Gaussian emissions, Trading Applications, M-step, Transition Matrix $A$, Background, Initial Distribution $\pi$, Adaptive strategies, First-order assumption, Hidden Markov Model (HMM), Dynamic asset allocation
- References: avellaneda-stoikov, finance/phase-space-reconstruction, finance/shannon-entropy, garch-models, kalman-filter

## Entity: finance/lightgbm-xgboost
- Title: LightGBM and XGBoost for Factor Signals
- Category: Algorithms and ML
- Language: en
- Key Concepts: Temporality, Class imbalance, Financial Data Challenges, LightGBM, Overfitting Controls, LightGBM and XGBoost for Factor Signals, XGBoost, Related Articles, Gradient Boosting, Implementation, Non-stationarity
- References: alpha-factor-discovery, finance/probability-of-backtest-overfitting, finance/shap-interpretability, finance/transformer-timeseries
- Backlinks: finance/shap-interpretability, finance/transformer-timeseries

## Entity: lob-prediction
- Title: Limit Order Book (LOB) Prediction
- Category: Algorithms and ML
- Language: en
- Key Concepts: Colocation dependency, Order Imbalance, Financial Context, Queue imbalance, Mid-price return, Multi-Level Features, Realized volatility, Adverse selection, Model Architectures, Background, Python: Full LOB Feature Engineering, Parameter Table, Precision/Recall, Market Making, Execution Algorithms
- References: finance/gan, finance/market-impact-scaling, finance/value-at-risk, model-free-rl-factors, optimal-execution
- Backlinks: deep-rl-execution, finance/market-impact-scaling, finance/order-flow-imbalance, finance/transformer-timeseries

## Entity: finance/longstaff-schwartz
- Title: Longstaff-Schwartz Method (LSM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Regression bias, Longstaff-Schwartz Method, Simplicity, Longstaff-Schwartz Method (LSM), Stochastic rates/volatility, Final Pricing, Backward Induction, Terminal Value, Mathematical Framework, Python: Pricing an American Put Option, Prerequisites, Dimensionality, Background, Flexibility, Optimal stopping boundaries
- References: black-scholes, finance/monte-carlo-method, heston-model, numerical-pde-finance, ornstein-uhlenbeck-process
- Backlinks: convertible-bonds, finance/barrier-asian-options, finance/follmer-schweizer, finance/free-boundary-american, finance/monte-carlo-method, finance/oas, numerical-pde-finance

## Entity: finance/meta-labeling
- Title: Meta-Labeling Framework
- Category: Algorithms and ML
- Language: en
- Key Concepts: Position sizing, Addresses Overfitting, Triple barrier labeling, Background and Motivation, Meta-Labeling, How It Works, Arbitrage, Mathematical Framework, Sizing, Prerequisites, Interpretability, Earnings Plays, Secondary Model, Benefits, Trend Following
- References: alpha-factor-discovery, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/random-matrix-theory
- Backlinks: finance/alpha-stacking, finance/probability-of-backtest-overfitting, model-free-rl-factors, news-sentiment-trading

## Entity: model-free-rl-factors
- Title: Model-Free RL for Factor Portfolios
- Category: Algorithms and ML
- Language: en
- Key Concepts: Action Space, Background and Motivation, Model-Free RL for Factor Portfolios, Policy Gradient Methods (PPO/DDPG), Transaction costs, Mathematical Framework, Prerequisites, Differential Sharpe Ratio, DDPG (Deep Deterministic Policy Gradient), Visualization, Hierarchical RL, SAC (Soft Actor-Critic), Limitations and Extensions, Model-Free Reinforcement Learning (RL), Multi-objective
- References: alpha-factor-discovery, black-scholes, finance/hierarchical-risk-parity, finance/meta-labeling, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/shannon-entropy, hidden-markov-models, mcmc, rl-trader
- Backlinks: finance/online-learning-mab, finance/probability-of-backtest-overfitting, lob-prediction, portfolio-optimization-ml

## Entity: finance/monte-carlo-method
- Title: Monte Carlo Method
- Category: Algorithms and ML
- Language: en
- Key Concepts: Background and History, Steps in Option Pricing, Multidimensionality, 1. Antithetic Variates, Quasi-MC, Average, Simplicity, Monte Carlo Method, [[inference-serving|GPU]] acceleration, Greeks computation, Multi-Asset Correlation via Cholesky Decomposition, Calculate Payoffs, American options, Quasi-Monte Carlo, 3. Importance Sampling
- References: black-scholes, finance/longstaff-schwartz, finance/particle-filter, finance/quasi-monte-carlo, finance/value-at-risk, inference-serving, mcmc, qft-basic
- Backlinks: alpha-factor-discovery, automatic-differentiation, avellaneda-stoikov, black-scholes, bootstrap, brownian-bridge, convertible-bonds, copula-models, finance/adversarial-stress-testing, finance/barrier-asian-options, finance/black-swan-scenarios, finance/follmer-schweizer, finance/free-boundary-american, finance/gan, finance/hawkes-process, finance/levy-processes, finance/libor-market-model, finance/longstaff-schwartz, finance/market-impact-scaling, finance/meta-labeling, finance/nash-equilibrium, finance/oas, finance/particle-filter, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/sha-256, finance/shor-algorithm, finance/systemic-contagion-debtrank, finance/value-at-risk, finance/xva, fraud-detection, gaussian-processes, generative-models, generative-scenario-models, kelly-criterion, lln-clt, math/sde-numerical-methods, model-free-rl-factors, numerical-pde-finance, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, qft-basic, quantum-amplitude-estimation, risk-neutral-valuation, rl-trader, volatility-forecasting

## Entity: finance/multivariate-hmm
- Title: Multivariate Hidden Markov Models
- Category: Algorithms and ML
- Language: en
- Key Concepts: E-step: Forward-Backward, Multivariate HMM, Baum-Welch (EM) Algorithm, M-step, Related Articles, Model Structure, Forward, Initial distribution, Transition matrix, Interpretation, Posteriors, Multivariate Hidden Markov Models, Implementation, Model Selection, Gaussian emission
- References: copula-models, hidden-markov-models, kalman-filter, regime-switching-factors, volatility-forecasting

## Entity: finance/nash-equilibrium
- Title: Nash Equilibrium
- Category: Algorithms and ML
- Language: en
- Key Concepts: Background and History, Mixed Strategy, Auction Theory, Systemic Risk, Pure Strategy, Nash Equilibrium, Zero-Sum Game, Python: Finding Equilibria in a 2x2 Game, Best Response, Visualization, Evolutionary game theory, Market Making as a Game, Theoretical Foundation, Limitations and Extensions, Practical Relevance in Finance
- References: avellaneda-stoikov, finance/adversarial-stress-testing, finance/market-impact-scaling, finance/monte-carlo-method, optimal-execution
- Backlinks: finance/systemic-contagion-debtrank

## Entity: neural-sdes-finance
- Title: Neural SDEs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Drift Network, The Adjoint Method, Applications, Neural Stochastic Differential Equations (Neural SDEs), continuous-time generative model, Neural SDEs in Finance, Diffusion Network, The Mathematical Framework, Path-Dependency, High-Dimensional Pricing, Generative Market Simulation, Why Use Neural SDEs?, Model Discovery, Stochastic Re-parameterization, Related Topics
- References: finance/rough-volatility, finance/volatility-surface, neural-odes, stochastic-differential-equations
- Backlinks: deep-galerkin, path-dependent-volatility, timegan

## Entity: news-sentiment-trading
- Title: News Sentiment Trading System
- Category: Algorithms and ML
- Language: en
- Key Concepts: BERT/FinBERT, Market impact, Event-Driven Hedge Funds, Background and Motivation, Practical Implementation Guide, Sentiment Scoring, Data Ingestion, Multilingual news, Python: Full Sentiment Pipeline, NLP Pipeline Components, Financial Context, Sentiment Dispersion, Signal Decay, Lexicon-based, Sentiment shock signal
- References: alternative-data-alpha, finance/gan, finance/meta-labeling, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: alternative-data-alpha, llm-financial-analysis

## Entity: numerical-pde-finance
- Title: Numerical PDE Methods in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Local volatility, tridiagonal, Boundary Conditions, Applications, Transformation to the Heat Equation, Multi-Asset: ADI Methods, Exotic path-dependent, CFL stability condition, Dimensions, Comparison: PDE vs Trees vs Monte Carlo, Explicit (Forward Euler), Implicit (Backward Euler), spurious oscillations, Crank-Nicolson ($\theta = 1/2$), Grid Construction
- References: black-scholes, convertible-bonds, finance/longstaff-schwartz, finance/monte-carlo-method, finance/optimal-stopping-american, partial-differential-equations
- Backlinks: black-scholes, deep-galerkin, feynman-kac, finance/longstaff-schwartz, neural-operators, stochastic-control

## Entity: finance/online-learning-mab
- Title: Online Learning and Multi-Armed Bandits
- Category: Algorithms and ML
- Language: en
- Key Concepts: UCB1 achieves, cumulative regret, Thompson Sampling, Problem and Regret, UCB (Upper Confidence Bound), Online Learning and Multi-Armed Bandits, Related Articles, Multi-Armed Bandit (MAB), Exp3 for Adversarial Environments, Implementation, Lai-Robbins lower bound
- References: alpha-factor-discovery, model-free-rl-factors, rl-trader

## Entity: finance/alpha-stacking
- Title: Orthogonal Alpha Stacking
- Category: Algorithms and ML
- Language: en
- Key Concepts: Signal Correlation Before/After Residualization, ICIR-weighted, Orthogonal Alpha Stacking & Residualization, Multi-Factor Models, Proprietary Trading, Non-linear neutralization, Orthogonal Alpha Stacking, Mathematical Framework, Prerequisites, Limitations & Extensions, Weighted Combination, Order dependence in Gram-Schmidt, Extensions:, Key Properties & Assumptions, Factor Neutralization
- References: alpha-factor-discovery, convex-optimization-trading, finance/hierarchical-risk-parity, finance/meta-labeling, finance/random-matrix-theory
- Backlinks: alpha-factor-discovery, alternative-data-alpha, finance/apt-ross, finance/asymptotic-arbitrage-large-markets

## Entity: finance/particle-filter
- Title: Particle Filter (SMC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Normalize, Hidden State Tracking, Update, Algorithm: Bootstrap Particle Filter, Background and Motivation, Observation equation, Resample, Degeneracy, Comparison, Predict, Particle Filter (SMC), Mathematical Framework, Sequential Monte Carlo, SMC², Prerequisites
- References: finance/monte-carlo-method, heston-model, hidden-markov-models, mcmc, ornstein-uhlenbeck-process
- Backlinks: conditionally-gaussian-processes, finance/heston-model, finance/monte-carlo-method, finance/phase-space-reconstruction, kalman-filter, nonlinear-filtering, pairs-trading

## Entity: fastest-mean-reversion
- Title: Portfolios of Fastest Mean Reversion
- Category: Algorithms and ML
- Language: en
- Key Concepts: Visualization: Reversion Speed, Rayleigh Quotient, Sparse Portfolio, Portfolios of Fastest Mean Reversion, Related Topics, speed of mean reversion, $L_1$-regularization (LASSO), Sparse PCA, Ornstein-Uhlenbeck (OU) process, The Mathematical Objective, smallest generalized eigenvalue, Sparse Mean-Reverting Portfolios, Fastest Mean Reversion, The Box-Tiao / Generalized Eigenvalue Approach
- References: ornstein-uhlenbeck-process, pairs-trading, pca
- Backlinks: pca-statarb

## Entity: finance/probability-of-backtest-overfitting
- Title: Probability of Backtest Overfitting
- Category: Algorithms and ML
- Language: en
- Key Concepts: Probability of Backtest Overfitting (PBO), In-Sample (IS), Background and Motivation, Python: Full PBO Calculation with CSCV, Out-of-Sample (OOS), Combinatorially Symmetric Cross-Validation (CSCV), The Deflated Sharpe Ratio, The PBO Formula, silent killer, Selection Bias under Multiple Testing (SBM), Visualization, Limitations and Extensions, Dependent strategies, Non-stationarity, Related Topics
- References: finance/meta-labeling, finance/monte-carlo-method, finance/value-at-risk, model-free-rl-factors
- Backlinks: bayesian-black-litterman, causal-inference-trading, convex-optimization-trading, finance/lightgbm-xgboost, finance/meta-labeling, finance/shap-interpretability, model-free-rl-factors, numeraire-invariant-hedging, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, timegan, ts-cs-factor-analysis

## Entity: finance/quasi-monte-carlo
- Title: Quasi-Monte Carlo Methods
- Category: Algorithms and ML
- Language: en
- Key Concepts: Quasi-Monte Carlo (QMC), Calibration., Option pricing., From random to deterministic: discrepancy, Brownian bridge construction, The Koksma-Hlawka inequality, Niederreiter-Xing., Quasi-Monte Carlo Methods, Halton sequence., star discrepancy, Effective dimension and ANOVA, Koksma-Hlawka inequality, Risk aggregation., CVA/XVA computation., Low-discrepancy sequences
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, kalman-filter, math/law-of-large-numbers
- Backlinks: finance/monte-carlo-method

## Entity: finance/random-matrix-theory
- Title: Random Matrix Theory (RMT)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Wigner Semicircle Law, Marchenko-Pastur (MP) law, Systemic risk monitoring, Execution cost models, Parameter Reference, Factor model interpretation, Mathematical Framework, Bulk universality, condition number, Large-$N$ limit, Factor structure, Random Matrix Theory (RMT), Deep learning, Non-Gaussian returns, Risk factor discovery
- References: finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/value-at-risk, math/spectral-theory-operators, quantum-entanglement
- Backlinks: convex-optimization-trading, cross-impact, eigenvalues-eigenvectors, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/meta-labeling, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, nonlinear-shrinkage, portfolio-optimization-ml, quantum-entanglement, regime-switching-factors

## Entity: regime-switching-factors
- Title: Regime-Switching Factor Strategies
- Category: Algorithms and ML
- Language: en
- Key Concepts: Persistence, Identifiability, Parameter Reference, Regime Persistence and Steady-State, smoothed probability, Regime-Conditional Factor Betas, Mathematical Framework, Continuous-time extensions, Regime-conditional optimization, Background, Lag in detection, Non-Gaussian emissions, Regime-Dependent Factor Returns, regimes, Dynamic factor allocation
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc
- Backlinks: finance/multivariate-hmm, hmm-particle-filters, rl-trader

## Entity: rl-trader
- Title: Reinforcement Learning (RL) Trader
- Category: Algorithms and ML
- Language: en
- Key Concepts: Market impact, Proximal Policy Optimization (PPO), Transition, Overfitting, Reward, Multi-agent RL (MARL), State space, Parameter Reference, Optimal execution, Mathematical Framework, Adversarial market, Interpretability, Policy Gradient (PPO), Position-Based Formulation, Reward shaping
- References: attention-mechanisms, finance/monte-carlo-method, finance/value-at-risk, mcmc, optimal-execution, regime-switching-factors
- Backlinks: deep-rl-execution, finance/online-learning-mab, model-free-rl-factors, reinforcement-learning

## Entity: finance/sha-256
- Title: SHA-256 (Secure Hash Algorithm)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Proof-of-Work, Second pre-image resistance, Quantum threat (partial), Parameter Reference, Quantum resistance, No known weaknesses, Mathematical Framework, Data integrity, Message Schedule, Hardware acceleration, Security Properties, Background, Merkle-Damgård construction, HMAC Construction, Collision resistance
- References: finance/lempel-ziv-complexity, finance/monte-carlo-method, finance/shannon-entropy, finance/shor-algorithm, mcmc
- Backlinks: finance/shor-algorithm

## Entity: finance/shap-interpretability
- Title: SHAP and ML Model Interpretability
- Category: Algorithms and ML
- Language: en
- Key Concepts: Null player, SHAP vs LIME vs Permutation Importance, Efficiency, SHAP (SHapley Additive exPlanations), Properties, Related Articles, Symmetry, Shapley Values, Financial Use Cases, SHAP and ML Model Interpretability, TreeSHAP
- References: alpha-factor-discovery, finance/lightgbm-xgboost, finance/probability-of-backtest-overfitting, fraud-detection
- Backlinks: finance/lightgbm-xgboost

## Entity: finance/shannon-entropy
- Title: Shannon Entropy in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Regime detection, Von Neumann Entropy, Shannon Entropy in Finance, Market Efficiency via Entropy, Approximate Entropy and Sample Entropy, Parameter Reference, Maximum Entropy Portfolios, Mutual Information, Maximality, Model validation, differential entropy, Mathematical Framework, Market microstructure, Transfer Entropy, Channel capacity
- References: finance/lempel-ziv-complexity, finance/random-matrix-theory, hidden-markov-models, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ai-theory/neural-tangent-kernel, change-of-variables, contrastive-learning, course-math-for-ai, decision-theory, deep-rl-execution, dirichlet-forms, distributions-zoo, dpo, embedding-models, empirical-processes, entropy-information, entropy-pooling, ergodic-theory, ergodic-theory-markov, f-divergences, finance/coherent-risk-measures, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hidden-markov-models, finance/lempel-ziv-complexity, finance/levy-esscher-continuous, finance/quasi-monte-carlo, finance/sha-256, finance/shor-algorithm, finance/upper-lower-hedging-prices, finance/zeta-field, financial-entropy, free-probability, hydrodynamic-limits, information-geometry-finance, information-theory-basics, jensen-inequality, jensens-inequality, kolmogorov-complexity, language-models/safety/rlhf-dpo, laplacian, logistic-regression, martingale, math/bayesian-asymptotics, math/concentration-inequalities, math/ergodic-theorems-birkhoff, math/gaussian-process-sample-paths, math/harmonic-analysis, math/information-theory, math/interacting-particle-systems, math/large-deviations-cramer, math/m-estimators, math/sigma-algebra-measurability, maximum-entropy, maximum-entropy-irl, mle, model-free-rl-factors, multi-token-prediction, multivariate-normal, mutual-information-divergence, naive-bayes, neural-scaling-laws, nlp-financial-analysis, online-learning-regret, pac-learning, path-integral-control, ppo, probability-distributions, probing-classifiers, quantum-entanglement, quantum-information-entropy, ricci-flow, risk-neutral-valuation, rlhf, sac-math, slm, small-ball-probabilities, soft-actor-critic, sparse-autoencoders, statistical-mechanics, training-dynamics, volatility-modulated-spectral-surface

## Entity: finance/shor-algorithm
- Title: Shor's Algorithm
- Category: Algorithms and ML
- Language: en
- Key Concepts: Discrete Logarithm, elliptic curve cryptography (ECC), Error correction overhead, Long-term data security, Quantum risk premium, Timeline uncertainty, Parameter Reference, Blockchain quantum risk, Symmetric key safety, Probabilistic success, Total, Mathematical Framework, Cryptographic migration planning, continued fraction algorithm, Elliptic curve extension
- References: finance/monte-carlo-method, finance/sha-256, finance/shannon-entropy, finance/spectral-analysis, mcmc
- Backlinks: finance/fft, finance/sha-256

## Entity: pca-statarb
- Title: StatArb with PCA (Avellaneda-Lee)
- Category: Algorithms and ML
- Language: en
- Key Concepts: The Problem with Pairs, The PCA Approach, Related Topics, Buy, Statistical Arbitrage with PCA (Avellaneda-Lee), Modeling the Residual (The Trade), Short, synthetic market factors, Factor Regression, Principal Component Analysis (PCA), The Residual ($\tilde{R}_i$), The Signal (S-score), Execution, Beta-neutral and Sector-neutral, Visualization: The S-Score
- References: alpha-orthogonalization, fastest-mean-reversion, ornstein-uhlenbeck-process, pairs-trading, pca

## Entity: ts-cs-factor-analysis
- Title: TS vs CS Factor Analysis
- Category: Algorithms and ML
- Language: en
- Key Concepts: Smart beta product design, risk premium, errors-in-variables (EIV) bias, SDF (Stochastic Discount Factor) Formulation, Factor Spanning Tests, Weak identification, Parameter Reference, Regulatory stress testing, Mathematical Framework, Time-Series (TS) regression, Test statistic, Cross-Sectional (CS) regression, Risk attribution, Background, Errors-in-Variables (EIV) Problem
- References: black-scholes, fama-macbeth-regression, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: fama-macbeth-regression, finance/factor-attribution

## Entity: timegan
- Title: TimeGAN: Generating Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: TimeGAN: Generating Synthetic Financial Data, Recovery (Decoder), The Flaw of Standard GANs, Embedder (Encoder), The Magic: Three Loss Functions, Privacy, The TimeGAN Architecture, Reconstruction Loss, Discriminator, TimeGAN, Visualization: Autocorrelation Preservation, Adversarial Loss, Why Quants Use It, Related Topics, Supervised Loss (The Key)
- References: finance/gan, finance/probability-of-backtest-overfitting, neural-sdes-finance

## Entity: finance/transformer-timeseries
- Title: Transformers for Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: Gate Residual Networks, Lookback, Practical Advice, Key Architectures, Normalization, Gradient clipping, Informer (Zhou et al. 2021), Temporal Self-[[attention-mechanisms|Attention]], Related Articles, PatchTST (Nie et al. 2023), Positional encoding, Temporal Fusion [[transformer-architecture|Transformer]] (TFT, Lim et al. 2021), Transformers, Self-[[attention-mechanisms|Attention]] Mechanism, Implementation
- References: attention-mechanisms, finance/lightgbm-xgboost, hidden-markov-models, kalman-filter, lob-prediction, transformer-architecture
- Backlinks: finance/gnn-finance, finance/lightgbm-xgboost

## Entity: vine-copulas
- Title: Vine Copulas for StatArb
- Category: Algorithms and ML
- Language: en
- Key Concepts: Sklar's Theorem, The Vine Structure, bivariate (2D) pair-copulas, Related Topics, Application: Statistical Arbitrage, The Trade, Visualization: Bivariate Building Blocks, Vine Copulas, Conditional Probability (The Signal), Fit the Vine, Copulas, What is a Vine Copula?, Why it Beats Linear Models, The Flaw of Multivariate Normal, Vine Copulas for Statistical Arbitrage
- References: alpha-factor-research, copula-models, pairs-trading

## Entity: clifford-algebras
- Title: Clifford Algebras & Geometric Algebra
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Clifford Algebras & Geometric Algebra, Multivectors, Applications in Physics, Definition, Rotors and Spinors

## Entity: complex-manifolds
- Title: Complex and Kähler Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hodge Theory on Kähler Manifolds, String Theory Connection, 5. Mirror Symmetry, Newlander-Nirenberg Theorem, Complex and Kähler Manifolds: The Geometry of String Theory, Fundamental 2-form, must form a Calabi-Yau 3-fold, Mirror Symmetry, 4. Calabi-Yau Manifolds, Almost Complex Structure, Complex Manifold, 1. Almost Complex Structures, Hermitian Metric, Hodge Decomposition, integrable
- References: hodge-theory, manifold-learning, spectral-graph-theory, symplectic-geometry, tensor-calculus
- Backlinks: manifold, ricci-flow

## Entity: connections-curvature
- Title: Connections and Covariant Derivatives
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Gravitational Waves, Weyl Tensor ($C_{\rho\sigma\mu\nu}$), 5. Geometric Flow: The Ricci Flow, Einstein Tensor, 3. The Riemann Curvature Tensor ($R^\rho_{\sigma\mu\nu}$), 1. The Covariant Derivative and Christoffel Symbols, Holonomy Group, 4. Decomposing Curvature: Ricci vs. Weyl, Levi-Civita Connection, 2. Holonomy: The Geometric Signature of Curvature, Poincaré Conjecture, Ricci Curvature ($R_{\mu\nu}$), Covariant Derivative, Christoffel Symbols, Physical Implication: Energy Conservation
- References: gauge-theory-yang-mills, manifold-learning, ricci-flow, tensor-calculus
- Backlinks: course-math-for-ai, geometric-deep-learning, hodge-theory, ricci-flow, symplectic-geometry, tensor-calculus

## Entity: delay-differential-equations
- Title: Delay Differential Equations in Neural Systems
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Delay Differential Equations in Neural Systems, Delay-Induced Bifurcations, Linear Stability Analysis, Hopf bifurcation, Mathematical Formulation

## Entity: geometric-deep-learning
- Title: Geometric Deep Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Climate Science, Sets, Gauge Equivariance, 2. The 5 Domains of GDL, Gauge Equivariant CNNs, Symmetry, Transformers, Group Equivariant CNNs, Deep Sets, Grids (Euclidean Space), Pooling / Coarsening, CNNs, Graphs, The Problem, The Solution
- References: connections-curvature, lie-groups-algebras, manifold-learning, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, course-math-for-ai, graph-curvature-oversquashing, lie-groups-algebras, tensor-calculus

## Entity: graph-curvature-oversquashing
- Title: Graph Curvature & Over-squashing
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Stochastic Discrete Ricci Flow (SDRF), Graph Curvature & Over-squashing, Graph Rewiring (SDRF), Related Topics, Over-squashing, Positive curvature, Ollivier-Ricci Curvature, MATHEMATICAL DERIVATION: ORC on a Triangle, What Is It, Ollivier-Ricci curvature, Over-squashing and Sensitivity, Ricci curvature, Spectral Gap and Cheeger Constant, Negative curvature
- References: geometric-deep-learning, graph-neural-networks, math/spectral-theory-operators, optimal-transport, ricci-flow, spectral-graph-theory

## Entity: hodge-theory
- Title: Hodge Theory and Harmonic Forms
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Harmonic form, A. Electromagnetism, [[spectral-graph-theory|Laplacian]], 4. The Hodge Decomposition Theorem, 2. The Hodge Star and Codifferential, Divergence, Hodge Theory: Bridging Topology and Differential Equations, co-exact, closed, exact, The Isomorphism, Hodge Decomposition, Hodge Theory, 5. Applications, B. Topological Data Analysis (TDA)
- References: connections-curvature, manifold-learning, spectral-graph-theory, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, homological-algebra, tensor-calculus

## Entity: information-geometry-nn
- Title: Information Geometry of Neural Networks
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Fisher Information Metric, Natural [[convex-optimization|Gradient Descent]], Information Geometry of Neural Networks, Curvature and Flat Minima
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: lie-algebras-physics
- Title: Lie Algebras in Physics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Strong Force (QCD), Adjoint Representation, Generators and Observables, Related Topics, Hermitian operator, Electromagnetism, 1. Angular Momentum and $\mathfrak{su}(2)$, 2. Particle Physics and $\mathfrak{su}(3)$, Gauge Theories and Connections, strangeness, Visualization: Spin Multiplets, isospin, Heisenberg Uncertainty Principle, Lie Algebras in Physics, The Adjoint Representation and Force Carriers
- References: general-relativity, lie-groups
- Backlinks: equivariant-diffusion-models

## Entity: lie-groups
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: tangent space at the identity, The Exponential Map, Visualization: Group vs. Algebra, Representations and Root Systems, Lie Groups in Modern AI, exponential map, Examples:, 1. Lie Group ($G$), Equivariant Neural Networks, Lie bracket, 2. Lie Algebra ($\mathfrak{g}$), continuous symmetries, Dynkin diagrams, Related Topics, roots
- References: equivariant-nn, manifold-learning, math/differential-geometry
- Backlinks: course-math-for-ai, equivariant-diffusion-models, lie-algebras-physics, random-walks-groups

## Entity: lie-groups-algebras
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Baker-Campbell-Hausdorff (BCH) Formula, Exponential Map, infinitesimal rotation, 3. Important Lie Groups, Lie Bracket, Visualization: Group vs. Algebra, 2. The Exponential Map, Group, CNNs, Lie Algebra, Jacobi Identity, $SU(n)$ (Special Unary), Antisymmetry, Lie Group, Robotics
- References: gauge-theory-yang-mills, geometric-deep-learning, manifold-learning, tensor-calculus
- Backlinks: geometric-deep-learning

## Entity: manifold-learning
- Title: Manifold Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Anomaly Detection, The Manifold Hypothesis, Manifold Hypothesis, Applications, Spectral Graph Theory, Manifold Learning, 1. Isomap (Isometric Mapping), UMAP, Mathematical Engine: The Beltrami Operator, geodesic distances, Key Algorithms, 3. [[spectral-graph-theory|Laplacian]] Eigenmaps, Image Analysis, Laplace-Beltrami operator, 4. UMAP and t-SNE
- References: math/analysis-geometry/information-geometry, math/differential-geometry, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, ai-theory/knowledge-distillation, category-theory-ml, complex-manifolds, connections-curvature, convolutional-volatility-resolution-clustering, course-math-for-ai, differential-forms, diffusion-models, energy-based-models, equivariant-diffusion-models, ergodic-theory-sgd, f-divergences, finance/asymptotic-expansion-finance, fisher-information, gauge-equivariant-nn, geometric-deep-learning, geometric-mechanics-lie-groups, geometry-loss-landscapes, geometry-of-attention, hodge-theory, implicit-function-theorem, information-geometry-finance, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lie-groups, lie-groups-algebra, lie-groups-algebras, linear-algebra, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/non-euclidean-geometry, math/ode-stability, math/stratonovich-integral, maximum-entropy, metric-spaces, mle, model-merging-procrustes, morse-theory, multimodal-alignment-clip, nerf, neural-operators-fno, neural-radiance-fields-math, nonlinear-filtering, normalization-layers-math, optimal-transport-gromov-wasserstein, pca, pinns-convergence, regularization-implicit-bias, ricci-flow, riemannian-geometry, semimartingales-on-manifolds, stochastic-calculus-manifolds, stochastic-manifolds, symplectic-geometry, symplectic-hamiltonian-nn, tensor-calculus

## Entity: neural-radiance-fields-math
- Title: Mathematical Foundations of NeRF
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Signed Distance Function (SDF), Mathematical Foundations of NeRF, Volume Rendering Equation, quadrature, Plenoxels / Instant NGP:, Extensions and Generalisations, accumulated transmittance, Positional Encoding and Harmonic Analysis, [[manifold-learning|Manifold Learning]]:, harmonic analysis, Relationship to Other Techniques, Radiative Transfer Equation (RTE), positional encoding, Integrated Positional Encoding (IPE), Mip-NeRF:
- References: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, calculus-integration, manifold-learning, nerf, transformer-architecture

## Entity: mean-field-games
- Title: Mean Field Games
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hamilton-Jacobi-Bellman (HJB) equation, Mean Field Games, Mathematical Formulation, Variational Structure, Fokker-Planck (Kolmogorov forward) equation, The MFG System
- Backlinks: hydrodynamic-limits, mechanism-design, stochastic-games

## Entity: optimal-transport
- Title: Optimal Transport & Wasserstein Metrics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Entropic Regularization and Sinkhorn Divergence, Applications, Kantorovich Relaxation, Introduction, Optimal Transport & Wasserstein Metrics
- Backlinks: convex-analysis, course-math-for-ai, graph-curvature-oversquashing, linear-programming, martingale-optimal-transport, math/analysis-geometry/information-geometry, metric-spaces, radon-nikodym

## Entity: ricci-flow
- Title: Ricci Flow and Geometric Evolution
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Graph Curvature, $\mathcal{W}$-[[shannon-entropy|Entropy]] Functional, 2. Singularities and Surgery, Manifold Learning, Neck-pinch, Geometrization Conjecture, 5. Applications in Computer Vision and AI, Ricci Flow: The Evolution of Geometry, 4. Solving the Poincaré Conjecture, Poincaré Conjecture, Ricci Flow with Surgery, 3. Perelman's [[shannon-entropy|Entropy]] Functional, Visualization: The Smoothing Process, Intuition, 1. The Evolution Equation
- References: complex-manifolds, connections-curvature, finance/shannon-entropy, manifold-learning
- Backlinks: connections-curvature, course-math-for-ai, differential-equations, graph-curvature-oversquashing, stochastic-manifolds

## Entity: spectral-graph-theory
- Title: Spectral Graph Theory
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Graph Laplacian, Expander Graphs, Cheeger's Inequality, Spectral Graph Theory
- References: math/spectral-theory-operators
- Backlinks: ai-theory/spatial/equivariant-gnn, algebraic-geometry-slt, algebraic-topology-persistent, complex-manifolds, differential-galois-theory, ergodic-theory-markov, feller-processes, finance/fractional-fokker-planck, fourier-transform, geometric-deep-learning, gnn-credit-risk, gnn-weisfeiler-lehman, graph-curvature-oversquashing, graph-neural-networks, graph-theory, higher-category-theory-ai, hodge-theory, laplacian, linear-algebra, manifold-learning, map-estimation, math/spdes, math/spectral-theory-operators, non-commutative-geometry, number-theory-l-functions, operator-semigroups, schwartz-distributions, spectral-clustering, spectral-theorem-unbounded, stable-processes, string-theory-calabi-yau, tensor-calculus, topos-neural-networks

## Entity: neural-ode-stability
- Title: Stability Theory for Neural ODEs
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Lipschitz Constants and Uniqueness, Lyapunov Stability, Adjoint Method and Backward Stability, Mathematical Formulation, Stability Theory for Neural ODEs
- References: math/spectral-theory-operators

## Entity: symplectic-geometry
- Title: Symplectic Geometry
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Symplectic Manifolds, B. Liouville's Theorem, Machine Learning, Symplectomorphism, Symplectic Geometry, Hamilton's Equations, Symplectic Integrators, Canonical Transformations, Noether's Theorem, Darboux's Theorem, Closed, Non-degenerate, Computational Physics, Symplectic Form, Poisson Bracket
- References: ai-physics/hamiltonian-nn, connections-curvature, manifold-learning, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, manifold, microlocal-analysis

## Entity: tensor-calculus
- Title: Tensor Calculus on Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: C. Differential Geometric ML, Determinant and Volume, Levi-Civita Symbol ($\epsilon_{\mu\nu\rho\sigma}$), Killing Vector Field, Hodge Dual, Property, Tensor of type $(r, s)$, B. Fluid Dynamics (Navier-Stokes on Manifolds), Tensor Calculus, Metric Tensor, Killing's Equation, Wedge Product ($\wedge$), 5. Advanced Applications, Lie Derivative, Antisymmetric Tensors
- References: connections-curvature, geometric-deep-learning, hodge-theory, manifold-learning, spectral-graph-theory
- Backlinks: complex-manifolds, connections-curvature, hodge-theory, lie-groups-algebras, linear-spaces-basis, symplectic-geometry

## Entity: geometry-of-attention
- Title: The Geometry of Attention Mechanisms
- Category: Analysis & Geometry
- Language: en
- Key Concepts: The Geometry of [[attention-mechanisms|Attention]] Mechanisms, Softmax as a Kernel Smoother, Lipschitz Continuity and Stability, Information Geometry of Softmax
- References: attention-mechanisms, manifold-learning, math/spectral-theory-operators

## Entity: tda-mapper-algorithm
- Title: The Mapper Algorithm in TDA
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Edges (1-simplices), filter function, Nerve, The Mapper Algorithm in TDA, Mathematical Formulation, Vertices (0-simplices), Algorithm Parameters and Functoriality, Higher-dimensional simplices ($k$-simplices), The Nerve Complex

## Entity: math/branching-processes
- Title: Branching Processes
- Category: Applied Probability
- Language: en
- Key Concepts: 2. Geometric offspring., Applications, The Galton-Watson process, 4. Viral content propagation., 1. Population genetics., Theorem., Multi-type branching., Asymptotic behaviour, Extinction probability, Branching Processes, functional equation, Subcritical case., Examples, 1. Binary splitting., Proof sketch.
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/renewal-theory, math/wiener-hopf-factorization
- Backlinks: math/percolation, math/point-processes, math/random-graphs, math/renewal-theory, math/subordinators, math/wiener-hopf-factorization

## Entity: clt
- Title: Central Limit Theorem (CLT)
- Category: Applied Probability
- Language: en
- Key Concepts: always Gaussian, 2. When Does it Fail? (Lindeberg-Feller), Lévy Distribution, Related Topics, 4. Role in Modern Systems, The Miracle, Berry–Esseen Theorem, Finance, Visualization: Convergence to Gaussian, Central Limit Theorem (CLT): The Law of Cosmic Order, Deep Learning, Standard Deviation, 3. Rate of Convergence: Berry–Esseen Theorem, 1. The Classical CLT (Lindeberg–Lévy), Fat Tails
- References: finance/levy-processes, frtb-es, mle
- Backlinks: characteristic-functions, mgf-characteristic-functions

## Entity: change-of-variables
- Title: Change of Variables
- Category: Applied Probability
- Language: en
- Key Concepts: 2. The Multivariate Case (The Jacobian), Related Topics, C. Differential [[shannon-entropy|Entropy]], Scaling Factor, 3. Key Applications, B. Log-Normal Distribution, A. The Box-Muller Transform, Visualization: Stretching the Density, Generative AI, [[gradient-hessian-jacobian|Jacobian Matrix]], Intuition, Log-Normal, 1. The 1D Case, Normalizing Flows, Change of Variables: The Geometry of Probability
- References: black-scholes, finance/shannon-entropy, gradient-hessian-jacobian, mle, variational-autoencoders

## Entity: characteristic-functions
- Title: Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Definition, always exists, [[fourier-transform|Fourier Transform]], Characteristic Function, C. Moment Generation, B. Infinite Divisibility, 3. The Lévy Continuity Theorem, A. Fast Option Pricing (FFT), 4. Application in Quantitative Finance, B. Sums of Variables, Universal Existence, Variance Gamma, Carr-Madan method, Related Topics, Fast Fourier Transform (FFT)
- References: central-limit-theorem, clt, finance/levy-processes, fourier-transform, merton-jump-diffusion, mgf
- Backlinks: copulas, course-math-for-ai, extreme-value-theory, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/contiguity-measures, math/convergence-semimartingales, math/glivenko-cantelli, math/infinitely-divisible-distributions, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/product-measures-fubini, math/renewal-theory, math/stable-convergence, math/stationary-wide-spectral, math/stein-method, math/triangular-arrays-processes, math/u-statistics, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, wiener-chaos

## Entity: math/concentration-inequalities
- Title: Concentration Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: statistical sample complexity, Azuma–Hoeffding inequality for martingales, Chernoff bound, distribution-free, Theorem (Hoeffding)., Sum of sub-Gaussians:, Theorem (McDiarmid, 1989)., rate function, moment generating function, exponential bounds, only on the range, Randomized algorithms:, Exponential in $n$, Markov and Chebyshev: warm-up bounds, Sub-Gaussian random variables
- References: central-limit-theorem, characteristic-functions, empirical-processes, finance/shannon-entropy, martingale-clt, math/large-deviations-cramer, math/law-of-large-numbers
- Backlinks: ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, distributions-zoo, extreme-value-theory, fundamental-inequalities, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/markov-chain-mixing, math/minimax-estimation, math/multiple-testing, math/percolation, math/random-graphs, math/stein-method, random-matrices

## Entity: convergence-types
- Title: Convergence of Random Variables
- Category: Applied Probability
- Language: en
- Key Concepts: Weak Law of Large Numbers, Related Topics, Generalization, Strong Law of Large Numbers, false, Consistency, Stability, Convergence of Random Variables, 4. Convergence in Distribution (d), Relationship Map, Visualization: Convergence Speed, The Hierarchy of Convergence, 1. Convergence Almost Surely (a.s.), 3. Convergence in Mean ($L^p$), 2. Convergence in Probability (p)
- References: central-limit-theorem, math/law-of-large-numbers

## Entity: copulas
- Title: Copulas and Dependence
- Category: Applied Probability
- Language: en
- Key Concepts: Sklar's Theorem, 1. Gaussian Copula, Why Not Just Use Correlation?, 2. Student's t-Copula, Related Topics, zero tail dependence, Copulas and Dependence Structures, Types of Copulas, isolate the dependency structure, Tail Dependence, Visualization: Tail Dependence, unique, asymmetric tail dependence, 3. Archimedean Copulas (Clayton, Gumbel, Frank), linear
- References: characteristic-functions, extreme-value-theory, statistical-mechanics
- Backlinks: correlation-association, joint-distributions

## Entity: math/coupling-methods
- Title: Coupling Methods
- Category: Applied Probability
- Language: en
- Key Concepts: coupling inequality, optimal coupling, Perfect Simulation, Applications, monotone coupling, [[weak-convergence-prokhorov|Weak Convergence]] and [[de-finetti-exchangeability|Exchangeability]], Central Limit Theorem Proofs, Monotone Coupling and Stochastic Ordering, Coupling Inequality for Convergence Time, maximal coupling strategy, perfect simulation, Strassen's theorem, Rates of Convergence, Markov Chain Coupling and Mixing Time Bounds, Coupling Methods
- References: central-limit-theorem, de-finetti-exchangeability, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/weak-convergence-prokhorov
- Backlinks: math/geometric-ergodicity, math/interacting-particle-systems, math/markov-chain-mixing, math/percolation

## Entity: cramer-rao-bound
- Title: Cramer-Rao Lower Bound
- Category: Applied Probability
- Language: en
- Key Concepts: 2. The Inequality, Related Topics, Statistical Efficiency, Efficient Estimator, 3. General Form (Biased Estimators), 1. Fisher Information, Efficiency, 4. Importance in Estimation Theory, MLE, Score Function, Fisher Information, UMVUE, Cramer-Rao Lower Bound (CRLB)
- References: estimator-properties, fisher-information, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information, math/bayesian-asymptotics, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, mle, mle-estimation, sufficient-statistics, umvue-completeness

## Entity: delta-method
- Title: Delta Method
- Category: Applied Probability
- Language: en
- Key Concepts: Standard Errors, Related Topics, 3. Applications, Multivariate Delta Method, 1. Formal Statement, MLE Functions, 2. Derivation Idea, Delta Method
- References: lln-clt, mle-estimation, statistical-inference
- Backlinks: slutsky-theorem, umvue-completeness

## Entity: entropy-information
- Title: Entropy and Information Gain
- Category: Applied Probability
- Language: en
- Key Concepts: High [[shannon-entropy|Entropy]], Related Topics, Visualization: Entropy vs. Probability, 2. Conditional Entropy $H(Y \mid X)$, highest Information Gain, 3. Mutual Information ($I$), 4. Information Gain (IG), Low Entropy, any kind of dependency, 1. Shannon [[shannon-entropy|Entropy]] ($H$), [[shannon-entropy|Entropy]] and Information Gain
- References: finance/shannon-entropy, maximum-entropy
- Backlinks: course-math-for-ai

## Entity: ergodic-theory
- Title: Ergodic Theory & Mixing
- Category: Applied Probability
- Language: en
- Key Concepts: Birkhoff's Ergodic Theorem, Ergodicity, Ergodic Theory & Mixing, Measure-Preserving Dynamical Systems, Mixing and [[shannon-entropy|Entropy]]
- References: finance/shannon-entropy
- Backlinks: stochastic-processes

## Entity: ergodic-theory-markov
- Title: Ergodic Theory of Markov Chains
- Category: Applied Probability
- Language: en
- Key Concepts: Metropolis-Hastings, Applications, Ergodic Theory of Markov Chains, Visualization: Convergence to Stationarity, detailed balance, Rapid Mixing, Bayesian Inference, MCMC (Markov Chain Monte Carlo), reversible, irreducible, The Ergodic Theorem for Markov Chains, Slow Mixing, Unique Equilibrium, Convergence, PageRank
- References: finance/shannon-entropy, math/information-theory, spectral-graph-theory
- Backlinks: mdp

## Entity: de-finetti-exchangeability
- Title: Exchangeability and de Finetti's Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: mixing measure, Chinese Restaurant Process, Dirichlet process, Binary case:, Bayesian consistency:, empirical measure, de Finetti's Theorem (1931), infinite, Partial exchangeability, Bayesian modelling, Finite Exchangeability, Exchangeability, Partial Exchangeability and Hierarchical Models, Dirichlet Process and Nonparametric Bayesian Models, exchangeable
- References: bayesian-deep-learning, math/law-of-large-numbers, mcmc
- Backlinks: math/coupling-methods, math/random-graphs, math/stein-method

## Entity: extreme-value-theory
- Title: Extreme Value Theory
- Category: Applied Probability
- Language: en
- Key Concepts: [[large-deviations-cramer]], Weibull, Pickands-Balkema-de Haan theorem, $\xi < 0$ (Weibull), heavy, power-law tails, Insurance and Reinsurance, return periods, domain of attraction, Gumbel Domain (Type I), regularly varying, Block Maxima and the Central Problem, Gumbel, regular variation, Asymptotic Stability and Functional Limits, Return Levels and Return Periods
- References: characteristic-functions, finance/coherent-risk-measures, math/concentration-inequalities, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/large-deviations-cramer, math/stable-convergence
- Backlinks: copulas, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/bipower-variation, finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/repo-market-systemic, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, frtb-es, generative-scenario-models, math/lundberg-cramer-ruin, order-statistics, stable-processes

## Entity: free-probability
- Title: Free Probability
- Category: Applied Probability
- Language: en
- Key Concepts: Applications in Deep Learning, Related Topics, Weight Initialization, The R-Transform, independence, R-transform, Signal Propagation, The Free Central Limit Theorem, Visualization: Free vs. Classical Convolution, Wigner Semicircle Distribution, freely independent, Free Probability, Optimization, freeness, Free Independence
- References: finance/shannon-entropy, math/information-theory, random-matrices

## Entity: math/geometric-ergodicity
- Title: Geometric Ergodicity
- Category: Applied Probability
- Language: en
- Key Concepts: Sampler comparison, The Foster–Lyapunov drift condition, Connections to related concepts, uniformly geometrically ergodic, Harris recurrent, Diagnostics, The minorization condition and Meyn–Tweedie theorem, Burn-in estimation, Convergence diagnostics, Practical significance, Subgeometric rates and polynomial ergodicity, Geometric Ergodicity, Definition and convergence rate, [[markov-chain-mixing|Mixing time]], geometrically ergodic
- References: math/coupling-methods, math/discrete-markov-chains, math/large-deviations-cramer, math/markov-chain-mixing, math/stochastic-recursive-sequences
- Backlinks: math/ode-stability

## Entity: hmm
- Title: Hidden Markov Models (HMM)
- Category: Applied Probability
- Language: en
- Key Concepts: Expectation-Maximization (EM), C. The Learning Problem (Baum-Welch), Emission Probabilities ($B$), A. The Evaluation Problem (Forward-Backward), 2. The Three Fundamental Problems, B. The Decoding Problem (Viterbi), Baum-Welch Algorithm, Hidden States ($Z_t$), Observations ($X_t$), Viterbi Algorithm, Hidden Markov Model (HMM), Transition Matrix ($A$), Hidden Markov Models (HMM), 3. Beyond Discrete States: Particle Filters, 1. The Model Structure
- References: hmm-particle-filters, mle
- Backlinks: bayesian-networks, em-algorithm, multivariate-normal

## Entity: hydrodynamic-limits
- Title: Hydrodynamic Limits
- Category: Applied Probability
- Language: en
- Key Concepts: [[shannon-entropy|Entropy]] Method (Guo-Papanicolaou-Varadhan), empirical density, Time Scaling, Hydrodynamic Limits, macroscopic world, Traffic and Crowd Flow, Macroscopic Fluctuation Theory (MFT), Space Scaling, The Empirical Measure, The Scaling Idea, diffusion coefficient, Related Topics, Why It Matters, [[shannon-entropy|Entropy]] Method and Large Deviations, Visualization: From Particles to Density
- References: finance/shannon-entropy, math/interacting-particle-systems, mean-field-games, partial-differential-equations

## Entity: likelihood-ratio-tests
- Title: Hypothesis Testing II: Likelihood Ratio Tests
- Category: Applied Probability
- Language: en
- Key Concepts: Related Topics, Score Test (Lagrange Multiplier), 1. The Likelihood Ratio, 2. Wilks' Theorem, Wald Test, Neyman-Pearson Lemma, 4. Relation to Other Tests, 3. Power of the Test, Most Powerful, Power, Hypothesis Testing II: Likelihood Ratio Tests
- References: fisher-information, mle-estimation, statistical-inference
- Backlinks: rank-tests

## Entity: math/information-theory
- Title: Information Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Fundamental Theorems, Information Bottleneck:, Related Topics, 1. Shannon [[shannon-entropy|Entropy]] $H(X)$, Applications in AI, ELBO (Variational Inference):, Data Processing Inequality:, Source Coding Theorem:, Information Theory, 2. Mutual Information $I(X;Y)$, 3. Kullback-Leibler (KL) Divergence, Cross-[[shannon-entropy|Entropy]] Loss:, Channel Capacity Theorem:, Core Concepts
- References: finance/shannon-entropy, fisher-information, variational-inference
- Backlinks: convex-optimization, course-math-for-ai, ergodic-theory-markov, free-probability, math/harmonic-analysis, maximum-entropy, online-learning-regret, probabilistic-combinatorics, random-matrices, universal-portfolios, wiener-chaos

## Entity: math/interacting-particle-systems
- Title: Interacting Particle Systems
- Category: Applied Probability
- Language: en
- Key Concepts: coalescence, heat equation, [[ergodic-theorems-birkhoff|Birkhoff Ergodic Theorem]], Voter Model, Contact Process, Major Model Classes, Applications, Overview, Neural Mean Field, symmetric exclusion process (SEP), Configuration Space and State Representation, only if that site is empty, hydrodynamic limit, asymmetric simple exclusion process (ASEP), Path coupling
- References: convex-optimization, finance/shannon-entropy, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/percolation, stochastic-differential-equations
- Backlinks: hydrodynamic-limits, math/spdes

## Entity: law-iterated-logarithm
- Title: Law of Iterated Logarithm
- Category: Applied Probability
- Language: en
- Key Concepts: 3. Role in Stochastic Processes, Related Topics, Law of Iterated Logarithm (LIL), [[brownian-motion|Brownian Motion]], 1. Formal Statement, CLT, 2. Interpretation, LLN, LIL
- References: brownian-motion, lln-clt, stochastic-processes
- Backlinks: math/borel-cantelli-zero-one, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers

## Entity: mcmc
- Title: MCMC (Markov Chain Monte Carlo)
- Category: Applied Probability
- Language: en
- Key Concepts: C. Hamiltonian Monte Carlo (HMC), 3. Crucial Concepts for Practitioners, PyMC, Derivative Pricing, B. Gibbs Sampling, Mixing, Burn-in, 1. The Core Idea: Sampling by Walking, MCMC: Markov Chain Monte Carlo, Bayesian Statistics, Bayesian Neural Networks, A. Metropolis-Hastings, Stationary Distribution, 4. Why it Matters for AI and Finance, 2. Key Algorithms
- References: bayesian-inference, hamiltonian-mechanics, hmm-particle-filters, lsv-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, ar-models, arch-models, arima-models, arma-models, bayesian-black-litterman, bayesian-deep-learning, bayesian-inference, brownian-motion, causal-inference, convex-optimization-trading, cornish-fisher-cvar, de-finetti-exchangeability, fama-macbeth-regression, finance/fractional-fokker-planck, finance/monte-carlo-method, finance/particle-filter, finance/sha-256, finance/shor-algorithm, fraud-detection, hmm-particle-filters, kalman-filter, model-free-rl-factors, monte-carlo-integration, news-sentiment-trading, numeraire-invariant-hedging, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, regime-switching-factors, rl-trader, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis, variational-inference, volatility-forecasting

## Entity: mdp
- Title: Markov Decision Processes (MDP)
- Category: Applied Probability
- Language: en
- Key Concepts: Policy Iteration, The Mathematical Framework, Bellman Optimality Equation, Markov Property, $\mathcal{A}$, Value Iteration, Policy, Reinforcement Learning, $\gamma \in [0, 1)$, $P(s' \mid s, a)$, Action-Value Function $Q^\pi(s, a)$, $R(s, a, s')$, Solving MDPs, Related Topics, Policies and Value Functions
- References: ergodic-theory-markov, reinforcement-learning, stochastic-control
- Backlinks: mcts, multi-armed-bandits

## Entity: markov-chebyshev
- Title: Markov and Chebyshev Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Markov's Inequality (The First Moment Bound), B. PAC Learning and AI Safety, C. Algorithmic Complexity (Randomized Algorithms), The Theorem, Visualization: The Tail Bounds, Usage, The Power of the Bound, 3. Applications in Advanced Systems, Chebyshev's Inequality, Concentration inequalities, Proof mechanism, Probably Approximately Correct (PAC), Intuition, Markov and Chebyshev Inequalities: Bounding the Unknown, Markov's Inequality
- References: central-limit-theorem, frtb-es, measure-theory

## Entity: mgf
- Title: Moment Generating Functions (MGF)
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Definition, 3. Relationship to Other Transforms, Chernoff Bound, always exists, product, Moment Generating Function (MGF), Moment Generating Functions (MGF), Characteristic Function, exact same distribution, Why it's useful, Visualization: MGF of a Gaussian, Probability Generating Function (PGF), C. Uniqueness, B. Sums of Independent Variables, A. Generating Moments
- References: central-limit-theorem, fourier-transform, math/large-deviations-cramer
- Backlinks: characteristic-functions

## Entity: mgf-characteristic-functions
- Title: Moment Generating Functions (MGFs) and Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: Limit Theorems, Related Topics, Linear Transformation, Inversion Formula, always exists, 2. Characteristic Functions, 3. Applications, Moment Generating Functions (MGFs) and Characteristic Functions, Uniqueness Theorem, Independent Sums, Properties, Moment Generation, Symmetry, 1. Moment Generating Functions (MGF), Summation of Distributions
- References: clt, fourier-transform, probability-distributions

## Entity: monte-carlo-integration
- Title: Monte Carlo Integration
- Category: Applied Probability
- Language: en
- Key Concepts: The Core Concept, Related Topics, high-dimensional spaces, Rejection Sampling, Law of Large Numbers, Visualization: Convergence Rate, Importance Sampling, importance weight, Monte Carlo Integration and Importance Sampling, Central Limit Theorem
- References: math/law-of-large-numbers, mcmc, variational-inference
- Backlinks: bootstrap-jackknife, deep-ritz-method, mcts

## Entity: multivariate-normal
- Title: Multivariate Normal Distribution
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Definition, Consequences, Standardisation., Theorem., Marginals., squared Mahalanobis distance, 12. Related topics, conditional covariance does not depend on $\mathbf{x}_2$, 2. Geometry: Mahalanobis ellipsoids, 9. Density from the characteristic function, Kalman filter, Theorem (Cramér-Wold)., normal, 8. The multivariate CLT, Sampling.
- References: f-divergences, finance/shannon-entropy, fisher-information, gaussian-processes, hmm, pca
- Backlinks: course-math-for-ai, distributions-zoo, joint-distributions

## Entity: rank-tests
- Title: Non-parametric Statistics: Rank Tests
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Wilcoxon Signed-Rank Test, Statistic, Advantages, Related Topics, Hypothesis, Procedure, Non-parametric Statistics: Rank Tests, 2. Mann-Whitney U Test (Wilcoxon Rank-Sum), Asymptotic Property, ranks, 3. Kruskal-Wallis Test, 4. Advantages and Limitations, Limitations
- References: bootstrap-jackknife, likelihood-ratio-tests, statistical-inference
- Backlinks: order-statistics

## Entity: order-statistics
- Title: Order Statistics
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Definition, 3. Joint Distribution, Related Topics, Extreme Value Theory, Non-parametric Inference, 2. Distribution of the $i$-th Order Statistic, Maximum $X_{(n)}$, Distribution of Min and Max, Minimum $X_{(1)}$, Order Statistics, 4. Applications, Reliability
- References: extreme-value-theory, probability-distributions, rank-tests

## Entity: math/percolation
- Title: Percolation
- Category: Applied Probability
- Language: en
- Key Concepts: Schramm–Loewner Evolution, Application:, Supercritical regime: unique infinite cluster, critical, The RSW theorem and crossing probabilities, Theorem (uniqueness, Harris–Seymour):, First and second moment methods, Definition:, RSW theorem, Theorem., FKG inequality, Bond and site percolation on $\mathbb{Z}^d$, critical phenomena, supercritical, Higher dimensions:
- References: math/branching-processes, math/concentration-inequalities, math/coupling-methods, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/random-graphs
- Backlinks: math/interacting-particle-systems, probabilistic-combinatorics

## Entity: map-estimation
- Title: Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference
- Category: Applied Probability
- Language: en
- Key Concepts: Credible Intervals, Related Topics, 2. MAP Derivation, 3. Relation to MLE and Regularization, 1. Bayesian Framework, Posterior, Prior, Gaussian Prior, 4. Bayesian Credible Intervals, Likelihood, Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference, [[spectral-graph-theory|Laplacian]] Prior
- References: bayes-theorem, linear-regression-ols, mle-estimation, spectral-graph-theory, statistical-inference
- Backlinks: mle-estimation

## Entity: mle-estimation
- Title: Point Estimation: Maximum Likelihood Estimation (MLE)
- Category: Applied Probability
- Language: en
- Key Concepts: 3. Example: Gaussian Mean, Related Topics, Log-Likelihood, Consistency, Invariance, Likelihood Function, Efficiency, Asymptotic Normality, 1. Formal Derivation, 2. Properties of MLE, Point Estimation: Maximum Likelihood Estimation (MLE)
- References: cramer-rao-bound, fisher-information, map-estimation, statistical-inference
- Backlinks: cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, map-estimation, sufficient-statistics

## Entity: probabilistic-combinatorics
- Title: Probabilistic Combinatorics
- Category: Applied Probability
- Language: en
- Key Concepts: Giant Component, Related Topics, Hashing, The Probabilistic Method, Ramsey Numbers and Bounds, Visualization: The Giant Component Transition, must exist, threshold, Error-Correcting Codes, Applications in Computer Science, The Lovász Local Lemma (LLL), Threshold Phenomena in Random Graphs, Randomized Algorithms, Probabilistic Combinatorics, Paul Erdős
- References: math/information-theory, math/percolation, math/random-graphs

## Entity: distributions-zoo
- Title: Probability Distributions Zoo
- Category: Applied Probability
- Language: en
- Key Concepts: Poisson($\lambda$), Multinomial / Categorical, Mean / variance., 1. Discrete distributions, PDF., 7. Related topics, Exponential($\lambda$), Geometric($p$)., No mean, no variance., Exponential family., Stable., Gamma($\alpha, \beta$), Sub-Gaussian, 3. Heavy-tailed vs light-tailed, Limit.
- References: bayesian-inference, central-limit-theorem, exponential-families, finance/shannon-entropy, math/concentration-inequalities, maximum-entropy, multivariate-normal, poisson-process
- Backlinks: course-math-for-ai, poisson-process

## Entity: estimator-properties
- Title: Properties of Estimators: Bias, Variance, and MSE
- Category: Applied Probability
- Language: en
- Key Concepts: Variance, Related Topics, unbiased, 2. The Bias-Variance Tradeoff, consistent, 1. Definitions, Bias, Properties of Estimators: Bias, Variance, and MSE, Mean Squared Error (MSE), Interpretation, 3. Consistency
- References: cramer-rao-bound, linear-regression-ols, mle-estimation, statistical-inference, sufficient-statistics
- Backlinks: bootstrap-jackknife, cramer-rao-bound, sufficient-statistics

## Entity: queuing-theory
- Title: Queuing Theory
- Category: Applied Probability
- Language: en
- Key Concepts: S (Service time distribution), Visualization: Queue Length vs. Utilization, [[inference-serving|GPU]] Scheduling, API Rate Limiting, Probability of $n$ customers, Network Congestion, c (Number of servers), Utilization ($\rho$), Average time in system ($W$), Average number in system ($L$), Service Rate, Kendall's Notation, Arrival Rate, The M/M/1 Queue, Applications in AI/CS
- References: inference-serving, math/markov-chain-mixing, poisson-process

## Entity: math/random-graphs
- Title: Random Graphs
- Category: Applied Probability
- Language: en
- Key Concepts: first moment method, Applications, Stochastic Block Model and Community Detection, Random Graphs, Supercritical regime, Random Regular Graphs and Local Limits, Stochastic Block Model, Subcritical and Supercritical Regimes, Degree Distribution and Chromatic Number, Subcritical regime, Connectivity and Percolation Thresholds, local limit, The Erdős–Rényi Models, Critical window, second moment method
- References: central-limit-theorem, de-finetti-exchangeability, math/branching-processes, math/concentration-inequalities, math/large-deviations-cramer, math/poisson-approximation
- Backlinks: math/high-dimensional-statistics, math/percolation, probabilistic-combinatorics

## Entity: random-matrices
- Title: Random Matrix Theory
- Category: Applied Probability
- Language: en
- Key Concepts: GUE, Wigner Semi-Circle Law, Gaussian Unitary Ensemble (GUE), Signal Detection and Information Theory, universality, GOE, freely independent, High-Dimensional Principal Component Analysis, [[Concentration-inequalities|Concentration of Measure]] and Spectral Regularization, Gaussian Orthogonal Ensemble (GOE), Marchenko-Pastur Law, Literature and Further Study, Tracy-Widom Distribution, Non-symmetric matrices, Universality and Altland-Zirnbauer Classification
- References: empirical-processes, math/concentration-inequalities, math/high-dimensional-statistics, math/information-theory, math/lp-spaces, math/minimax-estimation, math/spectral-theory-operators
- Backlinks: free-probability

## Entity: random-walks-groups
- Title: Random Walks on Groups
- Category: Applied Probability
- Language: en
- Key Concepts: Applications in AI and Science, Probability Theory, Key Questions and Concepts, Polya's Theorem, Poisson Boundary, 3. Boundary Theory and Poisson Boundary, Card Shuffling, 2. Convergence to Uniform (Mixing), Algebra, Molecular Dynamics, Visualization: Return Probabilities, 1. Recurrence vs. Transience, Cryptography, Formal Definition, Mixing Time
- References: lie-groups, math/discrete-markov-chains, math/markov-chain-mixing, math/spectral-theory-operators

## Entity: math/renewal-theory
- Title: Renewal Theory
- Category: Applied Probability
- Language: en
- Key Concepts: partial sums, Direct Riemann integrability, Renewal reward theorem, Applications, Laplace transform methods, Theorem., renewal function, Blackwell's theorem., Elementary renewal theorem, delayed, equilibrium, Key renewal theorem (Smith)., renewal equation, renewal measure, current life
- References: characteristic-functions, math/branching-processes, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/wiener-hopf-factorization
- Backlinks: math/branching-processes, math/markov-chain-mixing, math/point-processes, math/poisson-approximation, math/random-walks, math/subordinators, math/wiener-hopf-factorization, poisson-process

## Entity: bootstrap-jackknife
- Title: Resampling Methods: Bootstrap & Jackknife
- Category: Applied Probability
- Language: en
- Key Concepts: Limitation, Related Topics, 2. The Bootstrap, Resampling Methods: Bootstrap & Jackknife, with replacement, Procedure, The Bootstrap Principle, Main Use, 1. The Jackknife, 3. Comparison, Method, Variance Estimation, Computations
- References: estimator-properties, monte-carlo-integration, statistical-inference
- Backlinks: rank-tests

## Entity: sle
- Title: Schramm-Loewner Evolution (SLE)
- Category: Applied Probability
- Language: en
- Key Concepts: $\kappa = 6$, $\kappa = 8$, Schramm-Loewner Evolution (SLE), $\kappa = 3$, $4 < \kappa < 8$, Famous Values:, 1. The Physical Motivation: Critical Interfaces, Liouville Quantum Gravity, Visualization: The Growing Curve, $\xi_t = \sqrt{\kappa} B_t$, [[gff|Gaussian Free Field (GFF)]], $g_t(z)$, Conformal Invariance, 4. Connection to 2D Quantum Gravity, $\kappa \leq 4$
- References: brownian-motion, conformal-field-theory, gff, statistical-mechanics
- Backlinks: gff

## Entity: math/stein-method
- Title: Stein's Method
- Category: Applied Probability
- Language: en
- Key Concepts: The Stein Operator and Stein Equation, Local Dependence and Dissociation, Stein's Method, References and Further Reading, Applications and Extensions, Number theory, Exchangeable Pairs and Stein Discrepancy, Combinatorics, Concrete Example: Fixed Points in Random Permutations, Statistical physics, Chen–Stein Method for Poisson Approximation, Graph theory, Total variation distance, Kolmogorov distance, local dependence
- References: central-limit-theorem, characteristic-functions, de-finetti-exchangeability, math/concentration-inequalities, math/local-limit-theorems, math/poisson-approximation

## Entity: sufficient-statistics
- Title: Sufficient Statistics & Factorization Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Definition, 4. Rao-Blackwell Theorem, Related Topics, Completeness, Sufficient Statistics & Factorization Theorem, 2. Fisher-Neyman Factorization Theorem, 3. Minimal Sufficiency and Completeness, Rao-Blackwellization, Minimal Sufficient Statistic, sufficient
- References: cramer-rao-bound, estimator-properties, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information

## Entity: time-series
- Title: Time Series Analysis
- Category: Applied Probability
- Language: en
- Key Concepts: temporal dependence, 2. MA (Moving Average), Spectral Analysis, frequency domain, differences, Stationarity, Visualization: Stationarity, Spectral Density, 3. ARIMA (Auto-Regressive Integrated Moving Average), Time Series Analysis, Classical Models (Box-Jenkins), PACF (Partial Autocorrelation), ACF, Volatility Modeling (ARCH / GARCH), GARCH(1,1)
- References: math/markov-chain-mixing
- Backlinks: garch-models, language-models/mamba-ssm, math/stochastic-calculus/rough-path-signatures

## Entity: total-probability-variance
- Title: Total Probability and Total Variance
- Category: Applied Probability
- Language: en
- Key Concepts: Stochastic Processes, Example: Financial Alpha, Generative Models, Variance Decomposition, 1. Law of Total Probability, 4. Application in Machine Learning, Laws of Total Probability and Total Variance, Component 2 (Variance of Conditional Expectation), Bias-Variance Decomposition, Bias, Bayesian Hierarchical Models, Intuition, Visualization: Variance Decomposition, Component 1 (Expected Conditional Variance), Variance
- References: bayesian-inference, hmm-particle-filters

## Entity: wentzell-freidlin
- Title: Wentzell-Freidlin Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Quasi-potential, Climate Science, 2. The Quasi-Potential, Related Topics, Large Deviation Principles (LDP), Rate Function, Neural Networks, The Setting: Small Noise Limits, Applications, The Action Functional ($S$), 1. Metastability and Exit Times, Visualization: The Escape Path, Exit Time, Instantone, Wentzell-Freidlin Theory (Large Deviations for SDEs)
- References: math/large-deviations-cramer, statistical-mechanics, stochastic-differential-equations

## Entity: math/wiener-hopf-factorization
- Title: Wiener-Hopf Factorization
- Category: Applied Probability
- Language: en
- Key Concepts: Applications, The Wiener-Hopf identity, Corollary (Spitzer's identity for $\mathbb{P}(M_n = 0)$)., Historical notes, Wiener-Hopf Factorization, ascending ladder epoch, 1. Ruin probabilities., 4. Barrier options in finance., Example: symmetric random walk, The Spitzer-Baxter identity, 5. Boundary crossing problems., Connection to integral equations, Theorem (Wiener-Hopf factorization)., 3. GI/G/1 queueing., Baxter combinatorial lemma
- References: brownian-motion, characteristic-functions, finance/levy-processes, math/branching-processes, math/discrete-martingales, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory, math/weak-convergence-prokhorov
- Backlinks: math/branching-processes, math/random-walks, math/renewal-theory, math/subordinators

## Entity: f-divergences
- Title: f-Divergences
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Definition, Reverse KL, Visualization: Mode Seeking vs. Mass Covering, Pearson $\chi^2$, f-divergences, 2. Famous Special Cases, f-GANs, $f$ is a convex function, Monotonicity, Generative Adversarial Networks (GANs), 3. Properties, Variational Inference, f-Divergences: Measuring the Distance Between Distributions, 4. Why Tier-1 ML Researchers care, Positivity
- References: finance/gan, finance/shannon-entropy, information-geometry-finance, jensens-inequality, llm, manifold-learning, rlhf
- Backlinks: course-math-for-ai, fisher-information, multivariate-normal

## Entity: math/absolute-continuity-process-measures
- Title: Absolute Continuity of Process Measures
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Connection to Filtering, Applications, Theorem., Novikov's condition., Novikov's Condition, pathwise observable, same diffusion coefficient, absolute continuity and singularity, The Cramer-Rao Bound for Drift Estimation, [[contiguity-measures|Contiguity]] analysis., true martingale, Structure Theorem, Why Different Volatilities Imply Singularity, The Liptser-Shiryaev Theorem, Signal detection.
- References: brownian-motion, finance/girsanov-semimartingales, geometric-brownian-motion, heston-model, innovation-process, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering
- Backlinks: math/cameron-martin-formula, math/differentiation-of-measures, math/signed-measures

## Entity: math/bayesian-asymptotics
- Title: Bayesian Asymptotics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Variational Bayes, Identifiability, Metric [[shannon-entropy|entropy]], [[cramer-rao-bound]], Prior positivity, Kullback–Leibler divergence, Regularity Conditions, Prior irrelevance, Prior mass condition, GGvV framework, Credible sets ≈ confidence sets, Key Implications, [[empirical-processes]], [[m-estimators]], References
- References: cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/m-estimators, math/minimax-estimation
- Backlinks: math/semiparametric-efficiency

## Entity: bayesian-inference
- Title: Bayesian Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Likelihood $P(D \mid \theta)$, Metropolis-Hastings, Posterior $P(\theta \mid D)$, Optimization, B. Variational Inference (VI), 1. Bayes' Theorem, Bayes' Theorem, Prior $P(\theta)$, Bayesian Inference: Updating Knowledge with Data, 2. Conjugate Priors, Bayesian, Evidence $P(D)$, 4. Bayesian vs. Frequentist (MLE), 3. Numerical Methods (When Math is Hard), Frequentist (MLE)
- References: bayesian-black-litterman, bayesian-kelly, mcmc, measure-theory, mle, variational-autoencoders
- Backlinks: decision-theory, distributions-zoo, linear-regression, maximum-entropy, mcmc, mle, multi-armed-bandits, naive-bayes, total-probability-variance, variational-inference

## Entity: causal-inference
- Title: Causal Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Applications: Causality in Large Language Models, average treatment effect on the treated, [[rlhf]], consistency assumption, backdoor criterion, compliers, Do-Calculus and Causal Graphs, Relevance, propensity score, Exclusion, do-calculus, Regression Discontinuity, Regression discontinuity, Doubly robust, Causal Inference
- References: fama-macbeth-regression, finance/efficient-market-hypothesis, math/kolmogorov-probability-axioms, math/local-asymptotic-normality, mcmc, rlhf
- Backlinks: bayesian-networks, causal-inference-trading, correlation-association, double-ml, financial-entropy, math/semiparametric-efficiency, math/survival-analysis, probability-paradoxes

## Entity: math/contiguity-measures
- Title: Contiguity and the Le Cam Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Proof idea., Contiguity and the Le Cam Theory, Theorem., mutually contiguous, Applications in Jacod-Shiryaev Framework, Characterization via Likelihood Ratios, Local Asymptotic Normality (LAN), Definition., entirely separated, Hellinger distance, predictable characteristics, Dichotomy:, first lemma, Hajek-Le Cam bound, uniformly integrable
- References: central-limit-theorem, characteristic-functions, finance/girsanov-semimartingales, finance/semimartingale-models, math/large-deviations-cramer, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/hellinger-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: correlation-association
- Title: Correlation and Association
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 4. Distance Correlation (dCor), 5. Partial Correlation, Robustness, Visualization: Correlation vs. Dependence, Best for, Use case, Limitation, Correlation and Association Measures, concordant, 3. Kendall's Tau ($\tau$), Range, 1. Pearson Product-Moment Correlation ($\rho$), controlling for, linear, Related Topics
- References: causal-inference, copulas

## Entity: math/cramer-rao-bound
- Title: Cramér–Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Fisher information finite and positive:, Regularity conditions (Cramér regularity), asymptotically efficient, Fisher information, efficiency, Connection to information geometry, Fisher information matrix, Cramér–Rao Bound, Support independent of $\theta$:, asymptotic theory, Efficiency and UMVUE, Biased estimators and general linear forms, quantum Fisher information, Cramér regularity conditions, Dominated convergence:
- References: empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/conditional-expectation-sigma, math/local-asymptotic-normality, math/neyman-pearson

## Entity: math/density-processes
- Title: Density Processes and Likelihood Ratios
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: dichotomy, density process, supermartingale, Applications, Parameter estimation for diffusions., Fisher information, Fisher Information and the Density Process, Theorem., Girsanov's Theorem as a Corollary, optimal, unchanged, Change-point detection., Definition., log-likelihood, Singularity and Absolute Continuity Dichotomy
- References: finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/predictable-compensator
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/regular-conditional-probability, math/sequential-hypothesis-testing, math/signed-measures

## Entity: double-ml
- Title: Double Machine Learning
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Chernozhukov et al., causal effects, Cross-Fitting, Applications, The Core Problem: Confounding, Cross-fitting, Marketing, true causal effect, biased, Causal Estimation, Why "Double"?, The DML Procedure (Nuisance Parameter Removal), Double Machine Learning (Causal Inference), AI Finance, Visualization: Removing the Bias
- References: alpha-factor-research, causal-inference, mle

## Entity: empirical-processes
- Title: Empirical Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Bootstrap for Empirical Processes, VC-Classes and Vapnik–Chervonenkis Dimension, sets, Brownian bridge, Donsker Condition via [[shannon-entropy|Entropy]] Integral, Covering number, Rademacher complexity, A class $\mathcal{F}$ is called Glivenko–Cantelli (GC-class), symmetrization, complexity, VC-classes are Donsker classes, Metric [[shannon-entropy|Entropy]] and Bracketing Numbers, Related Concepts, Glivenko–Cantelli Theorem, VC dimension
- References: brownian-bridge, central-limit-theorem, finance/shannon-entropy, math/local-asymptotic-normality, math/weak-convergence-prokhorov, pac-learning
- Backlinks: math/bayesian-asymptotics, math/concentration-inequalities, math/cramer-rao-bound, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/survival-analysis, math/u-statistics, random-matrices

## Entity: expectation-maximization
- Title: Expectation-Maximization (EM)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: latent variables, Expectation-Maximization (EM) Algorithm, Maximum Likelihood (MLE), Related Topics, Applications, Gaussian Mixture Models, local maximum, 1. E-Step (Expectation), Convergence Properties, MAP, 2. M-Step (Maximization), Natural Language Processing, The Two Steps, Visualization: Clustering Progress, Missing Data
- References: mle, variational-inference
- Backlinks: gmm, jensen-inequality

## Entity: fisher-information
- Title: Fisher Information and the Cramér-Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 1. Definition, hard lower bound, asymptotic efficiency, 9. Fisher information and the chi-squared test, asymptotically efficient, negative expected Hessian, Theorem., 10. Observed vs. expected information, 7. Natural-[[convex-optimization|gradient descent]], K-FAC, regular, on the statistical [[manifold-learning|manifold]], reparameterisation-invariant, Regularity, 8. Examples
- References: convex-optimization, cramer-rao-bound, exponential-families, f-divergences, manifold-learning, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, mle, sufficient-statistics
- Backlinks: course-math-for-ai, cramer-rao-bound, likelihood-ratio-tests, math/analysis-geometry/information-geometry, math/information-theory, maximum-entropy, mle-estimation, multivariate-normal

## Entity: math/hellinger-processes
- Title: Hellinger Integrals and Hellinger Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Applications, Kakutani's Dichotomy Generalized, Hellinger Integrals and Hellinger Processes, Connection to Likelihood Ratios, Hellinger Integrals on a Single $\sigma$-Algebra, Le Cam theory., Definition., Hellinger Process for Filtered Spaces, Hellinger distance, For point processes., Mathematical finance., Criteria for Absolute Continuity and Singularity, Hellinger affinity, Hellinger integral, Theorem (Kakutani dichotomy for filtrations).
- References: finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/contiguity-measures, math/doleans-dade-exponential, math/sigma-algebra-measurability, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: math/high-dimensional-statistics
- Title: High-Dimensional Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: LASSO and the Restricted Eigenvalue Condition, The Gaussian Sequence Model, compressed sensing, knockoffs, Minimax Lower Bounds and Information Theory, Connection to Convex Optimization, Gaussian Width and Gordon's Theorem, Failure of Classical Methods and Regularization, Gaussian width, LASSO, False Discovery Rate (FDR), Gaussian sequence model, High-Dimensional Statistics, Restricted Eigenvalue Condition (REC), Fano information-theoretic criterion
- References: convex-analysis, cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/lp-spaces, math/minimax-estimation, math/random-graphs
- Backlinks: math/multiple-testing, math/nonparametric-regression, random-matrices

## Entity: hypothesis-testing
- Title: Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Power ($1-\beta$), Alternative Hypothesis ($H_1$), Hypothesis Testing Foundations, FDR (False Discovery Rate), Multiple Testing Problem, Reject $H_0$, 3. Kolmogorov-Smirnov Test, p-value, The P-Value Misinterpretation, 1. Student's t-test, 2. Pearson's Chi-Square Test ($\chi^2$), not, Type II Error, Type I and Type II Errors, Fail to Reject $H_0$
- References: bootstrap, central-limit-theorem, math/neyman-pearson
- Backlinks: probability-paradoxes, sampling-distributions

## Entity: math/kernel-density-estimation
- Title: Kernel Density Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Triangular, second moment, Mean Integrated Squared Error, Pointwise Asymptotics, Nadaraya–Watson estimator, Boundedness, Kernel Conditions, Plug-in and Diffusion Methods, Overview, Epanechnikov, Symmetry, bandwidth matrix, curse of dimensionality, optimal bandwidth scales as $h^* \sim n^{-1/5}$, Optimal Bandwidth
- References: cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/glivenko-cantelli, math/local-asymptotic-normality, math/u-statistics
- Backlinks: math/minimax-estimation, math/nonparametric-regression

## Entity: kde
- Title: Kernel Density Estimation (KDE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Visualization: The Smoothing Effect, Small $h$ (Under-smoothing), Continuity and Differentiability, $K$ (The Kernel), Kernel Density Estimation (KDE), Cross-Validation, $h$ (The Bandwidth), 1. The Core Estimator, High Bias but Low Variance, 2. The Bias-Variance Tradeoff and Bandwidth ($h$), Mean-Shift Clustering, Volatility Surface Smoothing, No Bin Origin Bias, Low Bias but High Variance, Faster Convergence
- References: kernel-methods-rkhs, math/nonparametric-regression, mle

## Entity: math/local-asymptotic-normality
- Title: Local Asymptotic Normality (LAN)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: locally asymptotically normal, asymptotically efficient, random, Theorem., Girsanov, Local Asymptotic Normality (LAN), LAMN and LAQ Extensions, Le Cam's Third Lemma and Contiguity, Hajek-Le Cam convolution theorem, Definition., regular, Local Asymptotic Normality, Asymptotic Efficiency, Optimal Tests, LAN for Diffusion Models
- References: central-limit-theorem, finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/functional-limit-theorems, math/hellinger-processes, math/law-of-large-numbers, math/stable-convergence
- Backlinks: causal-inference, empirical-processes, fisher-information, math/absolute-continuity-process-measures, math/bayesian-asymptotics, math/cameron-martin-formula, math/cramer-rao-bound, math/density-processes, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/sequential-hypothesis-testing, math/survival-analysis

## Entity: math/m-estimators
- Title: M-Estimators and Z-Estimators
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Identifiability, Jacobian non-singular, Sandwich variance estimation, iteratively reweighted least squares, Maximum likelihood, Non-singularity, Robust M-estimators, M-estimator, The sandwich form, Special case: Maximum likelihood and local asymptotic normality, Huber's estimator, empirical sandwich estimator, Proof sketch, argmax theorem, uniform law of large numbers (uniform LLN)
- References: bootstrap, cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/concentration-inequalities, math/local-asymptotic-normality, math/neyman-pearson
- Backlinks: causal-inference-do-calculus, convex-optimization, math/bayesian-asymptotics, math/semiparametric-efficiency, math/survival-analysis

## Entity: mle
- Title: Maximum Likelihood Estimation (MLE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Kullback-Leibler (KL) Divergence, Related Topics, 1. The Likelihood Function, Cross-[[shannon-entropy|Entropy]] Loss, Log-Likelihood, Consistency, 2. Asymptotic Properties, Likelihood Function, Efficiency, Asymptotic Normality, Cramér-Rao Lower Bound, Fisher Information, 4. Connection to Information Theory, Maximum Likelihood Estimation (MLE), 3. Fisher Information ($I(\theta)$)
- References: bayesian-inference, cramer-rao-bound, finance/shannon-entropy, information-geometry-finance, manifold-learning
- Backlinks: bayesian-inference, change-of-variables, clt, double-ml, expectation-maximization, fisher-information, garch-models, hmm, kde, linear-regression, logistic-regression, maximum-entropy, slutsky-theorem, umvue-completeness

## Entity: math/minimax-estimation
- Title: Minimax Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Lepski's method, Gordon's inequality, Computational Considerations, Lower Bounds: Le Cam's Two-Point Method, Assouad's Lemma, Gaussian comparison principle, Minimax Estimation and Le Cam's Theory, Assouad's lemma, minimax optimal estimator, Connection to Other Frameworks, Gaussian sequence model, Local polynomials, two-point method, Fundamental Definitions, Hellinger distance
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/concentration-inequalities, math/kernel-density-estimation, math/local-asymptotic-normality
- Backlinks: math/bayesian-asymptotics, math/high-dimensional-statistics, math/nonparametric-regression, random-matrices

## Entity: math/multiple-testing
- Title: Multiple Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: model-X knockoff, per-hypothesis error rates, Local False Discovery Rate, Summary Table, multiple testing problem, FDR control without distributional assumptions, FWER, Connections to Empirical Bayes, Storey, Extensions and Refinements, False Discovery Rate (FDR), The Multiple Testing Problem, empirical Bayes, Holm (1979), Knockoff Filter (Candès et al.)
- References: bootstrap, empirical-processes, exponential-families, math/concentration-inequalities, math/high-dimensional-statistics, math/neyman-pearson, math/sequential-hypothesis-testing

## Entity: math/neyman-pearson
- Title: Neyman–Pearson Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Neyman–Pearson theory, P-values as Test Statistics, Randomized Tests and Discrete Distributions, Test Efficiency and Power Asymptotics, Karlin–Rubin Theorem, Simple vs. Composite Hypotheses, Neyman–Pearson Theory, Proof sketch, Non-regular models, Composite hypotheses, p-value, likelihood ratio test, Type I error (size), Theorem, Pitman efficiency
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/sequential-hypothesis-testing
- Backlinks: hypothesis-testing, math/cramer-rao-bound, math/m-estimators, math/multiple-testing, math/survival-analysis

## Entity: math/nonparametric-regression
- Title: Nonparametric Regression
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: choice of kernel, Bandwidth and Smoothness Selection, Local Polynomial Regression, Green's functions, References & Wikilinks, The Bias–Variance Tradeoff, Local polynomial regression, adaptively, Nonparametric Regression, Regression Splines, smoothing spline, Generalized cross-validation (GCV), Bias reduction, Nadaraya–Watson Kernel Estimator, Statistical properties
- References: bootstrap, functional-analysis, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/minimax-estimation, sobolev-spaces
- Backlinks: kde

## Entity: bootstrap
- Title: Resampling: Bootstrap and Jackknife
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Bradley Efron, Complexity, Leave-one-out, sampling with replacement, Related Topics, Why it works: The "Plug-in" Principle, When to Use Which?, 1. The Bootstrap, Robustness, Resampling: Bootstrap and Jackknife, Sampling, Main Use, 2. The Jackknife, The Procedure, Visualization: Resampling Distribution
- References: central-limit-theorem, finance/monte-carlo-method
- Backlinks: hypothesis-testing, math/m-estimators, math/multiple-testing, math/nonparametric-regression

## Entity: sampling-distributions
- Title: Sampling Distributions
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Sampling Distributions: t, χ², and F, Summary Table, Property, unknown, Use case, Normal (Z), fatter tails, Visualization: t vs Normal, 2. Student's t-Distribution, Comparison to Normal, Chi-Square ($\chi^2$), Fisher's F, Student's t, Intuition, sum of squares
- References: anova, central-limit-theorem, hypothesis-testing

## Entity: math/semiparametric-efficiency
- Title: Semiparametric Efficiency
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: debiased machine learning, Profile Likelihood, One-step estimator., An estimator is semiparametrically efficient if its asymptotic variance equals $V$., augmented inverse-probability-weighted, Semiparametric efficiency theory, debiased, Theorem (BKRW Efficiency Bound)., partially linear model, doubly robust, One-Step Estimators and Efficient Estimating Equations, likelihood-based, Semiparametric Efficiency, pathwise differentiable, even if one of
- References: causal-inference, cramer-rao-bound, empirical-processes, exponential-families, math/bayesian-asymptotics, math/local-asymptotic-normality, math/m-estimators
- Backlinks: math/survival-analysis

## Entity: math/sequential-hypothesis-testing
- Title: Sequential Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Optimality: The Wald-Wolfowitz Theorem, Sequential Probability Ratio Test (SPRT), Applications, Clinical trials., Connection to Optimal Stopping, quickest detection problem, Quality control., Regime detection in finance., Definition., Signal processing., The Sequential Testing Problem, Wald's Identities, Theorem (Wald-Wolfowitz)., both, smallest expected sample size
- References: brownian-motion, geometric-brownian-motion, hidden-markov-models, kalman-filter, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality
- Backlinks: math/absolute-continuity-process-measures, math/multiple-testing, math/neyman-pearson

## Entity: slutsky-theorem
- Title: Slutsky's Theorem
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: probability, Related Topics, Addition, Continuous Mapping Theorem, Z-test, 1. The Theorem, Asymptotic Normality, 2. Why the Difference in Convergence Matters?, Multiplication, 4. Continuous Mapping Theorem (CMT), constant, By Slutsky's Theorem, 3. Application: The t-statistic and Wald Tests, Division, distribution
- References: central-limit-theorem, delta-method, math/law-of-large-numbers, mle

## Entity: math/survival-analysis
- Title: Survival Analysis
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: log-rank test statistic, Asymptotic normality of $\hat{\beta}$:, Survival function and hazard rate, Greenwood's formula for variance, proportionality assumption, log-rank test, Kaplan–Meier estimator, hazard rate, Log-rank test for comparing groups, Connection to local asymptotic normality and nonparametric theory, counting processes, partial likelihood, Cox proportional hazards model, Nelson–Aalen estimator, cumulative hazard
- References: causal-inference, empirical-processes, math/local-asymptotic-normality, math/m-estimators, math/neyman-pearson, math/point-processes, math/semiparametric-efficiency

## Entity: math/u-statistics
- Title: U-Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: variance structure, Role in Hypothesis Testing, quadratic forms, projected U-statistic, unbiased, Definition and Core Concepts, jackknife variance estimation, Strong Consistency:, Central Limit Theorem, Hoeffding's projection theorem, Classical Examples, Strong Law of Large Numbers, References, Degenerate U-Statistics, Hoeffding's Decomposition
- References: central-limit-theorem, characteristic-functions, cramer-rao-bound, empirical-processes, exponential-families, martingale-clt
- Backlinks: math/kernel-density-estimation

## Entity: umvue-completeness
- Title: UMVUE and Completeness
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: unique UMVUE, Uniformly Minimum Variance Unbiased Estimator (UMVUE), Steps to find the UMVUE, Factorization Theorem, Completeness, Related Topics, 5. Why Tier-1 Quants care, 3. Completeness and Uniqueness, 2. Rao-Blackwell Theorem: Improving Estimators, MLE vs UMVUE, less than or equal to, Efficiency, Sufficient Statistics, UMVUE and Completeness: The Theory of Optimal Estimation, Complete Sufficient Statistic
- References: cramer-rao-bound, delta-method, mle

## Entity: variational-inference
- Title: Variational Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Application in AI: Variational Autoencoders (VAE), Kullback-Leibler (KL) Divergence, Related Topics, The Variational Idea, Variational Inference (VI), The ELBO (Evidence Lower Bound), VI vs. MCMC, Visualization: Approximating a Distribution, Speed, Approach, Optimization, Posteriors, Accuracy, Scalability, ELBO
- References: bayesian-inference, convex-optimization, mcmc, variational-autoencoders
- Backlinks: bayes-theorem, bayesian-kelly, calculus-of-variations, expectation-maximization, math/information-theory, math/variational-calculus, monte-carlo-integration

## Entity: nonequilibrium-statmech
- Title: Nonequilibrium Statistical Mechanics
- Category: Classical Physics
- Language: en
- Key Concepts: 2. The Arrow of Time: Crooks Theorem (1999), Fokker-Planck, 5. Application in Machine Learning: Diffusion Models, Arrow of Time, Information as a Physical Commodity, Reverse [[stochastic-differential-equations|SDE]], 3. The Jarzynski Equality: Equilibrium from Chaos, Nonequilibrium Statistical Mechanics: Fluctuation Theorems, Visualization: The Thermodynamic Limit, Maxwell's Demon, Nonequilibrium Physics, Violent, Nonequilibrium, Fluctuation Theorems, Equilibrium Free Energy, Nonequilibrium
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
- Key Concepts: Chaining, Open Addressing, Overview, Performance

## Entity: account-abstraction
- Title: Account Abstraction (ERC-4337)
- Category: DeFi
- Language: en
- Key Concepts: Paymaster, ERC-20 Gas Payment, Execution Loop, Account Abstraction (AA), Granular Permissioning, Gasless Onboarding, Deployment Cost, 2. Advanced Paymaster Mechanics, Signature Aggregation, 4. Engineering Trade-offs, Session Keys, Visualization: The ERC-4337 Flow, 3. Session Keys and Security Policies, Execution Overhead, Validation Loop
- References: cedefi-gateway-architecture, zk-kyc
- Backlinks: course-cedefi

## Entity: amm-mechanics
- Title: Automated Market Makers (AMM)
- Category: DeFi
- Language: en
- Key Concepts: Constant Product Market Maker (CPMM), Complexity, Related Topics, Liquidity Pool, Automated Market Makers (AMM), Oracle Manipulation Attacks, Impermanent Loss (IL), Concentrated Liquidity, Efficiency, Price Oracles, Impermanent Loss, The Constant Product Formula (Uniswap V2), AMM as an Oracle, Visualization: The Bonding Curve, Concentrated Liquidity (Uniswap V3)
- References: optimal-execution, smart-order-routing
- Backlinks: asset-tokenization, cedefi-mechanics, course-cedefi, liquid-staking-restaking, mev, stablecoin-mechanisms

## Entity: bridge-security
- Title: Bridge Security and Settlement Finality
- Category: DeFi
- Language: en
- Key Concepts: Safety Buffer, Locks, Mints, 3. The Finality Problem, 4. Implementation for Your Project, CeDeFi use case, Hash Time-Lock Contracts (HTLC), Instant Finality, Bridge Security and Settlement Finality, A. Trusted (Centralized) Bridges, Probabilistic Finality, Pros, Blockchain Reorg, Rate Limiting, 1. The Core Risk: The Bridge as a Vault
- References: asset-tokenization, cedefi-gateway-architecture, stablecoin-mechanisms
- Backlinks: cedefi-gateway-architecture, cross-chain-interop

## Entity: cedefi-gateway-architecture
- Title: CeDeFi Gateway Architecture
- Category: DeFi
- Language: en
- Key Concepts: Reconciliation Engine, Event Logs, A. Nonce Management and Concurrency, CeDeFi Gateway, Cold Storage Interaction, B. Dynamic Gas Strategies, EIP-1559 Support, Blacklist, 1. The Transaction Management Layer (Relayer), Visualization: The "Double-Check" Architecture, Double Spend Protection, The Problem, The Solution, MPC (Multi-Party Computation), Global Pause
- References: bridge-security, cedefi-mechanics, zk-kyc
- Backlinks: account-abstraction, bridge-security, contract-upgradeability, course-cedefi, cross-chain-interop, number-theory-basics, oracle-design, privacy-defi, zk-kyc

## Entity: cedefi-mechanics
- Title: CeDeFi: Centralized Decentralized Finance
- Category: DeFi
- Language: en
- Key Concepts: Visualization: The Hybrid Stack, Binance Smart Chain (BSC), CeFi Constraint, Control, Bridge Risk, 3. Compliance as Code, Sanction Screening, B. Enterprise Blockchains and Layer 2s, KYC, AML, 2. Technical Architectures, CeDeFi: The Convergence of Institutional and Decentralized Finance, Centralization Risk, Regional Restrictions, Coinbase's Base
- References: amm-mechanics, smart-order-routing
- Backlinks: asset-tokenization, cedefi-gateway-architecture, course-cedefi, number-theory-basics, onchain-credit, stablecoin-mechanisms

## Entity: cross-chain-interop
- Title: Cross-chain Interoperability Protocols
- Category: DeFi
- Language: en
- Key Concepts: LayerZero, B. Chainlink CCIP: Risk Management Network, Risk Management Network, A. LayerZero: Ultra Light Nodes, arbitrary data and logic, Oracle, Solution, 2. Key Architectures, Chainlink CCIP, 4. The "Trust Assumption" Risk, Visualization: Omnichain Logic Flow, Cross-chain Interoperability Protocols, 3. Use Cases for CeDeFi, Omnichain Lending, Unified Liquidity
- References: asset-tokenization, bridge-security, cedefi-gateway-architecture, smart-order-routing
- Backlinks: course-cedefi

## Entity: lending-mechanics
- Title: Lending and Money Market Mechanics
- Category: DeFi
- Language: en
- Key Concepts: After the Kink ($U > U_{optimal}$), Borrowers, 3. Risk Management: LTV and Health Factor, Reserve Factor, 5. Implementation for CeDeFi, Before the Kink ($U < U_{optimal}$), Utilization Rate, LTV (Loan-to-Value), Visualization: The Kinked Rate Curve, 1. The Liquidity Pool Model, Liquidation, 2. Interest Rate Models (The Utilization Curve), Liquidation Bonus, 4. The Liquidation Process, Peer-to-Pool
- References: onchain-credit, stablecoin-mechanisms
- Backlinks: course-cedefi, metric-spaces, oracle-design, yield-aggregators

## Entity: liquid-staking-restaking
- Title: Liquid Staking and Restaking
- Category: DeFi
- Language: en
- Key Concepts: Restaking, 4. Institutional Implications: The "Internet Bond", Lido, ether.fi, B. Slashing Risks, Visualization: The Yield Pyramid, multiple services, Renzo, 1. Liquid Staking Tokens (LSTs), 2. The EigenLayer Revolution: Restaking, Liquid Staking, Liquid Staking and Restaking: The Yield Layer, stETH, 3. Liquid Restaking Tokens (LRTs), Productivity
- References: amm-mechanics, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: mev
- Title: Maximal Extractable Value (MEV)
- Category: DeFi
- Language: en
- Key Concepts: PBS, 2. The Proposer-Builder Separation (PBS), B. Sandwich Attacks, Buys, Toxic, Proposers (Validators), Mempool, 3. MEV as an Institutional Risk, A. Front-running, Solution, Maximal Extractable Value (MEV), Visualization: The Sandwich Attack, Builders, Flashbots, Buy
- References: amm-mechanics, latency-arbitrage, smart-order-routing
- Backlinks: contract-upgradeability, course-cedefi, oracle-design, privacy-defi

## Entity: onchain-credit
- Title: On-chain Credit Markets
- Category: DeFi
- Language: en
- Key Concepts: Visualization: The Credit Pipeline, Composability, On-chain Credit Markets: Bridging TradFi and DeFi, Tranche, Junior Tranche (Equity), Senior Tranche (Junior First Loss), 4. Why it Matters for High-Finance, Goldfinch, 3. The Role of Underwriters (Delegates), Maple, Pool Delegates, 2. The Tranche Structure (Waterfall Model), Efficiency, Undercollateralized (Institutional), Transparency
- References: asset-tokenization, cedefi-mechanics
- Backlinks: course-cedefi, lending-mechanics, zk-kyc

## Entity: onchain-perps
- Title: On-chain Perpetuals and vAMM Mechanics
- Category: DeFi
- Language: en
- Key Concepts: 4. Order-book Based DEXs (dYdX Model), Oracle Lag, Funding Rate, Visualization: vAMM vs. Oracle Model, 1. Funding Rates: The Peg Mechanism, If Perp Price < Spot Price, 2. vAMM (Virtual Automated Market Maker), Market Makers, GMX, On-chain Perpetuals and vAMM Mechanics, Settlement, Matching Engine, Perpetual Swaps (Perps), 3. LP-as-Counterparty Model (GMX Model), GLP
- References: oracle-design, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: oracle-design
- Title: Oracle Design and Resilience
- Category: DeFi
- Language: en
- Key Concepts: The Fix, OEV, Medianizer, Primary Source, 2. Robust Price Discovery: The Medianizer, Visualization: The Multi-Layer Oracle, 3. Oracle Extractable Value (OEV), Multi-Oracle Consensus, Secondary Source, 5. Defense against Flash Loan Attacks, OEV-Share, Median, Oracle, Scenario, Cost Analysis
- References: cedefi-gateway-architecture, lending-mechanics, mev
- Backlinks: course-cedefi, onchain-perps

## Entity: privacy-defi
- Title: Privacy-Preserving DeFi (Shielded Pools)
- Category: DeFi
- Language: en
- Key Concepts: Compliance Integration, Unshielding, Privacy-Preserving DeFi: The Shielded Economy, 1. How Shielded Pools Work, Regulatory Scrutiny, Visualization: The Shielding Process, Dark Pool, View Keys, Copy-trading bots, Shielded Pools, 3. Dark Pools (The Institutional Dream), Confidentiality, On-chain Dark Pools, 5. Value for Your Project, 4. Risks and Regulatory Pressure
- References: cedefi-gateway-architecture, mev, zk-kyc
- Backlinks: course-cedefi

## Entity: asset-tokenization
- Title: Real World Asset (RWA) Tokenization
- Category: DeFi
- Language: en
- Key Concepts: Counterparty Risk, Oracle Manipulation, ERC-3643, Visualization: The Tokenization Lifecycle, B. Fractional Ownership, Proof of Reserve (PoR), A. Atomic Settlement, Real World Assets (RWA), atomically, Real World Asset (RWA) Tokenization, Tokenized Treasuries, Asset Tokenization, Legal Enforceability, Commodities, Identity Registry
- References: amm-mechanics, cedefi-mechanics, smart-order-routing
- Backlinks: bridge-security, course-cedefi, cross-chain-interop, onchain-credit, stablecoin-mechanisms, zk-kyc

## Entity: contract-upgradeability
- Title: Smart Contract Upgradeability
- Category: DeFi
- Language: en
- Key Concepts: 4. Storage Collisions: The Technical Nightmare, 2. Advanced Upgrade Patterns, The Fix, Multi-sig, cannot use constructors, Address, Balance, 3. The Initialization Paradox, Storage Gaps, The Problem, B. Transparent Proxy Pattern, Smart Contract Upgradeability: Patterns, Risks, and Storage Layout, Logic, Mitigation, Gas
- References: cedefi-gateway-architecture, mev
- Backlinks: course-cedefi

## Entity: stablecoin-mechanisms
- Title: Stablecoin Mechanisms
- Category: DeFi
- Language: en
- Key Concepts: 3. Algorithmic and Delta-Neutral, Short Perpetual position, PSM (Peg Stability Module), The Death Spiral, 2. Crypto-Collateralized (On-chain Overcollateralization), 4. The Stability Trilemma, Delta-Neutral (Ethena), Visualization: Collateral vs. Stability, 1. Fiat-Collateralized (Off-chain), Liquidated, Risk, Stability, Mechanism, Related Topics, Capital Efficiency
- References: amm-mechanics, asset-tokenization, cedefi-mechanics
- Backlinks: bridge-security, combinatorics-induction, course-cedefi, lending-mechanics, liquid-staking-restaking, onchain-perps, yield-aggregators

## Entity: yield-aggregators
- Title: Yield Aggregators and Strategy Automation
- Category: DeFi
- Language: en
- Key Concepts: 2. Auto-Compounding Mechanics, Aggregator Risk, Visualization: The Harvest Loop, The Controller, Beefy, Yield Aggregators and Strategy Automation, Low-Volatility Farming, Yearn Finance, Protocol Risk, 3. Risk Assessment: The Strategy Stack, Vaults, Governance Boosting, Liquidity Risk, Yield Aggregators, The Vault
- References: lending-mechanics, smart-order-routing, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: zk-kyc
- Title: ZK-KYC: Privacy-Preserving Compliance
- Category: DeFi
- Language: en
- Key Concepts: Proof, Soulbound Tokens, 3. The Technical Stack: Soulbound Tokens (SBTs), Verification, ZK-KYC: Privacy-Preserving Compliance in CeDeFi, 4. Strategic Value for Your Project, ZK-KYC, Issuer, ZK-Proof Generation, Privacy, Proof of Accreditation, Legal Compliance, Visualization: The ZK-KYC Flow, Proof of Funds, Proof of Residency
- References: asset-tokenization, cedefi-gateway-architecture, onchain-credit
- Backlinks: account-abstraction, cedefi-gateway-architecture, course-cedefi, privacy-defi

## Entity: course-cedefi
- Title: CeDeFi Engineering: Institutional Web3
- Category: DeFi & Engineering
- Language: en
- Key Concepts: Week 2 — AMM and liquidity microstructure, Course map, Week 1 — EVM and stack architecture, Kata:, Week 4 — Stablecoins, Oracles, MEV, Compliance-yield gateway., Prerequisites, Week 7 — Cross-chain and bridges, Week 8 — Institutional stack, CeDeFi Engineering — institutional Web3 in 8 weeks, Week 5 — Smart-contract security, Week 6 — ZK and private KYC, Capstone project, Recommended reading, fully private
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
- Key Concepts: Discounting Curve, Related Topics, LIBOR Transition (The "End of LIBOR"), Multi-Curve Framework (Post-2008 Modern Yield Curves), Risk-Free Rates (RFRs), Modern Multi-Curve Framework, Liquidity Risk, Forward (Projection) Curves, OIS (Overnight) curve, SOFR, The Paradigm Shift, Why Do Curves Diverge?, Visualization: The Basis Spread, Credit Risk, Credit Support Annex (CSA)
- References: finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/xva

## Entity: option-greeks-and-volatility
- Title: Option Greeks, Volatility & Hedging
- Category: Derivatives
- Language: en
- Key Concepts: See Also, Delta ($\Delta$):, Option Greeks, Volatility & Hedging, Theta ($\Theta$):, 3. Delta Hedging, Vega ($\nu$):, Gamma ($\Gamma$):, 1. Put-Call Parity, 2. Option Greeks
- References: course-quant-trading, optimal-stopping-and-kelly, quant-market-making-mechanics
- Backlinks: credit-risk-modeling-and-structural-models, exotic-options-and-structured-products, fixed-income-quant-rates-and-yield-curve, interest-rate-derivatives-swaps-caps-floors, monte-carlo-option-pricing-and-variance-reduction, quant-market-making-mechanics, stochastic-calculus-and-ito-lemma, volatility-surface-sabr-model, volatility-trading-and-variance-swaps

## Entity: volatility-arbitrage
- Title: Volatility Arbitrage and Variance Swaps
- Category: Derivatives
- Language: en
- Key Concepts: VIX Index, Variance Risk Premium, model-independent, Related Topics, Visualization: The VIX vs. Realized Vol, Volatility Arbitrage and Variance Swaps, Variance Swap, Log-Contract Replication, 4. Trading Strategies, 1. The Variance Risk Premium (VRP), 1. Volatility Carry, No Delta Hedging, variance strike, implied volatility, 2. Variance Swaps
- References: black-scholes, finance/rough-volatility, volatility-smile

## Entity: volatility-trading-and-variance-swaps
- Title: Volatility Trading & Variance Swaps
- Category: Derivatives
- Language: en
- Key Concepts: See Also, Volatility Trading & Variance Swaps, 1. Delta-Neutral Gamma Scalping
- References: course-quant-trading, option-greeks-and-volatility, quant-market-making-mechanics
- Backlinks: stochastic-volatility-heston-model

## Entity: math/ergodic-theorems-birkhoff
- Title: Birkhoff-Khintchine Ergodic Theorem
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Examples of ergodic systems, Ergodicity, invariant, Applications, 3. MCMC methods., 3. Circle rotation., Stationarity and ergodicity, dependent, Theorem., time averages, Ergodicity., If $T$ is ergodic, physical hypothesis, ergodic theory, 2. Markov chain with a unique stationary measure.
- References: arch-models, brownian-motion, central-limit-theorem, finance/shannon-entropy, garch-models, law-iterated-logarithm, math/discrete-markov-chains, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/stochastic-recursive-sequences
- Backlinks: math/borel-cantelli-zero-one, math/branching-processes, math/coupling-methods, math/discrete-markov-chains, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/law-of-large-numbers, math/markov-chain-mixing, math/martingale-clt, math/percolation, math/renewal-theory, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, statistical-mechanics

## Entity: math/discrete-markov-chains
- Title: Discrete Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Convergence rate, Stationary distribution, invariant, Convergence to stationary, 2. MCMC (Markov Chain Monte Carlo)., 5. Classical physics and chemistry., 6. Reinforcement learning., Applications, Markov property., Theorem., prescribed, period $d$, Distribution after $n$ steps., Definition., Time-homogeneity.
- References: brownian-motion, finance/crr-model, hidden-markov-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, reinforcement-learning
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, math/branching-processes, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/geometric-ergodicity, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/markov-chain-mixing, math/optimal-stopping-markov, math/renewal-theory, math/stochastic-recursive-sequences, random-walks-groups, stochastic-processes

## Entity: math/kolmogorov-equations-ctmc
- Title: Kolmogorov Equations and Continuous-Time Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Ergodicity, Kolmogorov's forward and backward equations, Matrix exponential solution, Stationary distribution and detailed balance, initial, Comparison with discrete chains, explosion, Setup and the Q-matrix, birth-death process, Birth-death processes, Fokker-Planck equation, Q-matrix, forward equation, M/M/1 queue, rate matrix
- References: brownian-motion, finance/levy-processes, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms, math/spectral-theory-operators
- Backlinks: fokker-planck-equation, math/discrete-markov-chains, math/point-processes, math/subordinators, stochastic-processes

## Entity: math/spectral-representation-processes
- Title: Spectral Representation of Stationary Processes
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Random measures and Brownian motion, spectral representation, purely non-deterministic, Applications, orthogonal random measure, Interpretation., 4. Speech and image processing., linear filter, Wold's theorem., process itself, Wavelet transforms, Theorem (Cramer, 1940; Kolmogorov)., Definition., Linear transformations, uncorrelated
- References: brownian-motion, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/stationary-wide-spectral, wavelet-transform
- Backlinks: math/spectral-theory-operators, math/stationary-wide-spectral

## Entity: math/stochastic-recursive-sequences
- Title: Stochastic Recursive Sequences
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Connection to the multiplicative ergodic theorem, The linear case: products of random matrices, Applications, renovation events, monotone, The Loynes scheme, Theorem., Theorem (Furstenberg-Kesten, 1960)., contractive, coupling events, Autoregressive processes., Finance beyond GARCH., Definition., Lindley recursion, heavy (Pareto) tails
- References: arch-models, brownian-motion, finance/levy-processes, garch-models, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/law-of-large-numbers
- Backlinks: math/ergodic-theorems-birkhoff, math/geometric-ergodicity

## Entity: math/stationary-wide-spectral
- Title: Wide-Sense Stationary Processes and Spectral Density
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Spectral density, 5. Singular spectrum analysis (SSA)., 2. AR(1) process., squared, some, Symmetry, right language, insufficient, autocovariance function, autocorrelation function, the autocovariance and the spectral measure are two equivalent descriptions, 3. Harmonic component., Definition., Wide-Sense Stationary Processes and Spectral Density, Herglotz-Bochner decomposition
- References: brownian-motion, characteristic-functions, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/self-similarity-fractality, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/spectral-representation-processes
- Backlinks: math/spectral-representation-processes, ornstein-uhlenbeck, stochastic-processes

## Entity: conditionally-gaussian-processes
- Title: Conditionally Gaussian Processes
- Category: Filtering Theory
- Language: en
- Key Concepts: Credit risk with latent state., Reference measure., The Filtering Equations, Definition., Absolute continuity., linear in $\theta$, Derive the equations, Proof Sketch, Target tracking with range-dependent noise., Stochastic volatility filtering., Interest rate models., Comparison with Kalman-Bucy, Key structural point:, The Conditionally Gaussian Model, matrix Riccati equation
- References: finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, math/doleans-dade-exponential, nonlinear-filtering, stochastic-differential-equations
- Backlinks: innovation-process, nonlinear-filtering

## Entity: innovation-process
- Title: Innovation Process
- Category: Filtering Theory
- Language: en
- Key Concepts: Consequence., The Innovation Approach to Filtering, Applications, reference measure, Recursive estimation., Causal vs. Non-Causal Estimation, Theorem., Kushner-Stratonovich equation, whitens, Connection to Girsanov's Theorem, Smoothing, Control theory., innovation process, Related Articles, The Innovation Representation Theorem
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, kalman-filter, math/conditional-expectation-sigma, math/discrete-martingales, nonlinear-filtering
- Backlinks: conditionally-gaussian-processes, math/absolute-continuity-process-measures, math/martingale-representation, nonlinear-filtering

## Entity: nonlinear-filtering
- Title: Nonlinear Filtering
- Category: Filtering Theory
- Language: en
- Key Concepts: Kushner-Stratonovich (KS) equation, Reference measure method., Why Nonlinear Filtering is Hard, Nonlinear Filtering, Kallianpur-Striebel formula., Stochastic volatility., The Kushner-Stratonovich Equation, Derive the Zakai equation, curse of dimensionality, innovation, Target tracking and navigation., signal, Related Articles, The Zakai Equation, observation process
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, manifold-learning, math/doleans-dade-exponential, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, innovation-process, math/absolute-continuity-process-measures, math/martingale-representation, state-space-models, stochastic-control-partial-info, stochastic-differential-equations

## Entity: bayesian-networks
- Title: Bayesian Networks
- Category: Foundations
- Language: en
- Key Concepts: Chain Rule for Bayesian Networks, Edges, Variable Elimination, Inference and Learning, Fork, dependent, Parameter Learning, Directed Acyclic Graph (DAG), The Factorization Property, Structure Learning, D-Separation (Conditional Independence), Acyclicity, Collider (V-structure), Belief Propagation, Visualization: A Simple Network
- References: bayes-theorem, causal-inference, hmm
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, graph-theory-basics

## Entity: category-theory
- Title: Category Theory
- Category: Foundations
- Language: en
- Key Concepts: Topos Theory, Morphisms (Arrows), Natural Transformations, Objects, Visualization: The Hierarchy of Abstraction, Quantum Physics, Composition, 5. Applications in AI and Physics, Haskell, 2. Functors: Moving Between Worlds, 3. Natural Transformations, Functor, Category Theory: The Mathematics of Mathematics, Relationships (Morphisms), Related Topics
- References: homological-algebra, topos-theory, type-theory
- Backlinks: homological-algebra, homotopy-type-theory, math/algebraic-topology, topos-theory, type-theory

## Entity: probability-paradoxes
- Title: Classic Paradoxes in Probability
- Category: Foundations
- Language: en
- Key Concepts: Related Topics, Visualization: Simpson's Reversal, no holes, Abraham Wald, 1. Simpson's Paradox, Reality, Lesson, Classic Paradoxes in Probability and Statistics, 4. Survivor Bias, 3. The Birthday Paradox, Example, Intuition, 2. Berkson's Paradox (Selection Bias), confounding variables
- References: bayes-theorem, causal-inference, hypothesis-testing

## Entity: convex-optimization
- Title: Convex Optimization
- Category: Foundations
- Language: en
- Key Concepts: Applications, Slater's condition, dual problem, Complementary slackness:, proximal operator, ADMM, subgradient, Nesterov Accelerated Method:, KKT conditions, Proximal Method:, Proximal Operator, First-order optimality condition:, Subdifferential, LASSO, Weak duality
- References: math/information-theory, math/m-estimators, math/variational-calculus, stochastic-control
- Backlinks: 3d-gaussian-splatting, ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, attention-kernel, automatic-differentiation, convex-analysis, convexity, course-math-for-ai, deep-galerkin, differential-privacy, energy-based-models, ergodic-theory-sgd, fine-tuning, fisher-information, fluid-dynamics-navier-stokes, geometric-mechanics-lie-groups, geometry-loss-landscapes, gradient-hessian-jacobian, information-bottleneck-theory, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lagrange-multipliers, linear-algebra, linear-systems-gauss, logistic-regression, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/interacting-particle-systems, math/large-deviations-cramer, math/martingale-clt, math/ode-stability, meta-learning, model-merging-procrustes, multimodal-alignment-clip, multivariable-calculus, neural-operators-fno, normalization-layers-math, ntk, online-learning-regret, optimal-transport-gromov-wasserstein, optimization-basics, pinns-convergence, proximal-algorithms-admm, qft-curved-spacetime, regularization-implicit-bias, sgd-convergence-theory, sgd-variants, stochastic-calculus-manifolds, string-theory-calabi-yau, symplectic-hamiltonian-nn, training-dynamics, ttt-layers, vae-elbo, variational-autoencoders, variational-inference, variational-inference-math

## Entity: eigenvalues-eigenvectors
- Title: Eigenvalues and Eigenvectors
- Category: Foundations
- Language: en
- Key Concepts: 5. Why It Matters in AI and Finance, 2. Theoretical Gems, Principal Component Analysis (PCA), Neural Stability, Trace, eigenvector, The Characteristic Equation, Singular Values, The Spectral Theorem, Portfolio Risk, Google PageRank, Characteristic Equation, 4. Singular Value Decomposition (SVD), Statistical Arbitrage, Interpretation
- References: finance/random-matrix-theory, linear-spaces-basis, math/discrete-markov-chains, math/spectral-theory-operators, pca
- Backlinks: cross-impact, laplacian, linear-spaces-basis, linear-systems-gauss, matrix-decompositions, nonlinear-shrinkage, vector-spaces-orthogonality

## Entity: math/functional-analysis
- Title: Functional Analysis
- Category: Foundations
- Language: en
- Key Concepts: Core Spaces, Related Topics, Spectral Theorem:, Operators and Spectrum, Applications in Machine Learning, Hilbert Spaces ($\mathcal{H}$):, Eigenfunctions:, Normed Spaces:, Kernel Trick:, projection, orthogonality, linear operator, Banach Spaces:, Stability Analysis:, Functional Analysis
- References: hilbert-banach-spaces, linear-algebra, math/spectral-theory-operators, quantum-mechanics

## Entity: graph-theory
- Title: Graph Theory
- Category: Foundations
- Language: en
- Key Concepts: Directed Graph (Digraph), Path, directed graph, Path and Cycle, Overview, Spectral Graph Theory, Euler's Theorem, Directed Acyclic Graph (DAG), weakly connected, Degree, Undirected Graph, Weighted Graph, edges, Four Color Theorem, [[spectral-graph-theory|Laplacian]] Matrix
- References: finance/systemic-contagion-debtrank, graph-neural-networks, knowledge-graph, linear-algebra, math/spectral-theory-operators, spectral-graph-theory
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, kuramoto-model, linear-algebra, logic-set-theory

## Entity: homological-algebra
- Title: Homological Algebra
- Category: Foundations
- Language: en
- Key Concepts: Applications, Visualization: Long Exact Sequence, derived functors, Algebraic Geometry, 1. Tor (Torsion), The Snake Lemma, exact, 2. Ext (Extension), Abelian Categories, Category Theory, Derived Functors: Ext and Tor, The Five Lemma, homology, chain complex, Diagram Chasing and Lemmas
- References: category-theory, hodge-theory, math/algebraic-topology, quantization
- Backlinks: category-theory, topos-theory, tor-ext-functors

## Entity: jensens-inequality
- Title: Jensen's Inequality
- Category: Foundations
- Language: en
- Key Concepts: Kullback-Leibler (KL) Divergence, 3. Critical Applications, B. Variational Inference and VAEs, Information Theory, above, Finite Version, C. Finance: The Volatility Tax, 2. Geometric Intuition, Concave Case, Integral Version, A. Information Theory (Gibbs' Inequality), Jensen's Inequality: The Geometry of Averages, Evidence Lower Bound (ELBO), Related Topics, Equality Condition
- References: convexity, finance/shannon-entropy, variational-autoencoders
- Backlinks: f-divergences

## Entity: linear-algebra
- Title: Linear Algebra
- Category: Foundations
- Language: en
- Key Concepts: Matrix Multiplication, [[spectral-theory-operators|Eigenvalues]] and Eigenvectors, Overview, Optimization, Rank, Determinant and Inverse, eigenvector, linearly independent, [[attention-mechanisms|Attention]], Low-rank approximations, Weights, Singular Value Decomposition (SVD), Matrices, Linear Algebra, linear transformation
- References: attention-mechanisms, automatic-differentiation, convex-optimization, graph-theory, manifold-learning, math/spectral-theory-operators, quantization, spectral-graph-theory, transformer-architecture
- Backlinks: graph-theory, language-models/mamba-ssm, math/functional-analysis

## Entity: quantum-math
- Title: Math of Quantum Computing
- Category: Foundations
- Language: en
- Key Concepts: 5. Key Quantum Algorithms, Entanglement, Grover's Algorithm, Visualization: The Bloch Sphere, Superposition, 1. The Qubit as a Hilbert Space Vector, Born Rule, Reversibility, Linear Algebra, Hadamard Gate ($H$), 3. Unitary Operators (Quantum Gates), 4. Measurement as Projection, Unitary Matrix, tensor product, Related Topics
- References: hilbert-banach-spaces, quantum-amplitude-estimation, quantum-information-entropy, spectral-theorem-unbounded
- Backlinks: hilbert-banach-spaces, path-integral-control, quantum-amplitude-estimation

## Entity: decision-theory
- Title: Statistical Decision Theory
- Category: Foundations
- Language: en
- Key Concepts: Admissible, 4. Connection to Modern AI, Decision Rule, Adversarial Machine Learning, Probability Theory, Bayesian Inference, Reinforcement Learning, Quantitative Risk Management, Utility Theory, A. Bayes Criterion (The Average Case), Parameter Space ($\Theta$), Loss Function $L(\theta, a)$, Bayes Rule, Risk Function, Bellman Equation
- References: bayesian-inference, finance/shannon-entropy, reinforcement-learning
- Backlinks: naive-bayes

## Entity: tensor-decompositions
- Title: Tensor Decompositions
- Category: Foundations
- Language: en
- Key Concepts: Compression Power, Visualization: CP vs. Tucker, Tensor Decompositions, Large Language Models, 5. Why it Matters for AI Infrastructure, Application, Tensors, Limitation, 3. Tucker Decomposition (Higher-Order SVD), 4. Tensor-Train (TT) Decomposition, Interpretation, 2. CP Decomposition (CANDECOMP/PARAFAC), 1. The Core Problem: Rank of a Tensor, rank-1 tensors, Use Case
- References: distributed-training, many-body-tensor-networks, modern-quantization, pca
- Backlinks: course-math-for-ai, lora-peft

## Entity: maximum-entropy
- Title: The Maximum Entropy Principle
- Category: Foundations
- Language: en
- Key Concepts: 3. Duality with maximum likelihood, 8. Generalisations: Tsallis and Rényi, [[shannon-entropy|entropy]] is a unifying concept, convex dual, 12. Related topics, 7. Bayesian priors via MaxEnt, maximally uncertain, non-informative prior problem, Logistic regression, close to the prior, stretched exponentials, m-flat, Variational auto-encoders, 11. Visualisation: entropy decreases with constraints, 6. Statistical mechanics: Boltzmann from MaxEnt
- References: bayesian-inference, exponential-families, finance/shannon-entropy, fisher-information, manifold-learning, math/analysis-geometry/information-geometry, math/information-theory, mle, statistical-mechanics
- Backlinks: course-math-for-ai, distributions-zoo, entropy-information, information-theory-basics

## Entity: topos-theory
- Title: Topos Theory
- Category: Foundations
- Language: en
- Key Concepts: Finite Limits and Colimits, AI Semantics, Alexandre Grothendieck, Topos Theory, Quantum Logic, Visualization: Truth Value Spectrum, Synthetic Differential Geometry, What is a Topos?, Etale Cohomology, Sheaves, Exponentials, 2. As a Logical Universe (Lawvere-Tierney), Subobject Classifier ($\Omega$), Holography, Intuitionistic Logic
- References: category-theory, homological-algebra, math/algebraic-topology
- Backlinks: category-theory, category-theory-ml, type-theory

## Entity: type-theory
- Title: Type Theory and Formal Logic
- Category: Foundations
- Language: en
- Key Concepts: Simplification is Computation, spaces, Proofs are Programs, 3. Homotopy Type Theory (HoTT), Coq, Agda, Curry-Howard isomorphism, AI for Math, Neuro-symbolic AI, Propositions are Types, Dependent types, 1. The Curry-Howard Correspondence, paths, 4. Why It Matters for AI, Type Theory and Formal Logic
- References: category-theory, reasoning-models, topos-theory
- Backlinks: category-theory, category-theory-ml, homotopy-type-theory

## Entity: math/variational-calculus
- Title: Variational Calculus
- Category: Foundations
- Language: en
- Key Concepts: 2. Variational Inference, Angular Momentum, Energy, Euler–Lagrange Equation, Classical Examples, Geodesics:, Noether's Theorem, Variational Calculus, Variational Principles in AI, The Core Problem, symmetries to conservation laws, Lagrangian, Brachistochrone:, functionals, Action
- References: lagrangian-mechanics, noether-theorem, variational-inference
- Backlinks: ai-physics/hamiltonian-nn, convex-optimization, math/differential-geometry, math/ode-stability

## Entity: math/cantor-diagonal
- Title: Cantor's Diagonal Argument
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Cardinal Numbers, Continuum Hypothesis, [[kolmogorov-complexity|Kolmogorov complexity]], countable, Cantor's Diagonal Argument, [[godel-incompleteness|Gödel's incompleteness theorems]], Cantor's diagonal argument, Countability, independent, uncountable, Turing's halting problem, Cantor's theorem, Proof., Python Demonstration, Self-reference in [[chain-of-thought|chain-of-thought reasoning]]
- References: chain-of-thought, kolmogorov-complexity, llm, math/banach-tarski, math/godel-incompleteness
- Backlinks: chain-of-thought, math/banach-tarski, math/godel-incompleteness

## Entity: math/godel-incompleteness
- Title: Gödel's Incompleteness Theorems
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Consequences, First Incompleteness Theorem, Connection to computability and AI, "I am unprovable in $T$", Python Demonstration, Diagonalization lemma, cannot prove its own consistency, incomplete, Gödel's incompleteness theorems, true but unprovable, The Gödel Sentence, Gödel's Incompleteness Theorems, Second Incompleteness Theorem, [[kolmogorov-complexity|Kolmogorov complexity]], halting problem
- References: chain-of-thought, information-paradox, kolmogorov-complexity, llm, math/banach-tarski, math/cantor-diagonal, mechanistic-interpretability, transformer-architecture
- Backlinks: chain-of-thought, homotopy-type-theory, math/banach-tarski, math/cantor-diagonal, math/kolmogorov-probability-axioms, math/non-euclidean-geometry

## Entity: math/non-euclidean-geometry
- Title: Non-Euclidean Geometry
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Metric, Non-Euclidean Geometry, The Parallel Postulate, Poincaré Disk Model, Three Geometries, exactly one, Gaussian Curvature, fifth postulate, Gauss's Theorema Egregium, [[general-relativity|general relativity]], Connection to Physics, Related Articles, Non-Euclidean geometry, Geodesics
- References: asymptotic-spacetime, bms-group, celestial-holography, general-relativity, gravitational-waves-gr, manifold-learning, math/banach-tarski, math/godel-incompleteness
- Backlinks: math/algebraic-topology, math/banach-tarski, math/differential-geometry

## Entity: math/banach-tarski
- Title: The Banach-Tarski Paradox
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: non-measurable sets, 1. Free Group on Two Generators, measure theory and symmetry transformations break down at the quantum level, all subsets of $\mathbb{R}$ are Lebesgue measurable, two copies of itself, Why This Is Not a Contradiction, Proof Sketch, without, two balls of the same size, free group, 2. Hausdorff Paradox (1914), The Banach-Tarski Paradox, Axiom of Choice, The Role of the Axiom of Choice, Statement
- References: anomalies, math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry
- Backlinks: math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry

## Entity: operator-semigroups
- Title: Operator Semigroups
- Category: Functional Analysis
- Language: en
- Key Concepts: Stochastic Processes, 4. Contractive Semigroups and Stability, spectral properties, Contractive, Strong Continuity, 1. Mathematical Definition, Visualization: Smoothing Effect, Operator Semigroups: The Math of Evolution, 3. Physical Examples, One-Parameter Semigroup, The Hille-Yosida Theorem, 2. The Infinitesimal Generator ($A$), Semigroup Property, Related Topics, Neural ODEs
- References: feller-processes, laplacian, neural-odes, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: dirichlet-forms, feller-processes, spectral-theorem-unbounded

## Entity: schwartz-distributions
- Title: Schwartz Distributions
- Category: Functional Analysis
- Language: en
- Key Concepts: every distribution has a derivative, Fourier Transform, Fundamental Solution, Test Functions, 2. Weak Derivatives: Differentiating the Non-Differentiable, 3. The Fourier Transform of Distributions, Related Topics, Dirac Delta, 4. Fundamental Solutions (Green's Functions), Tempered Distributions, Partial Differential Equations (PDEs), Schwartz Distributions: Generalized Functions, Visualization: Derivative of a Step, Schwartz Space, Convolution
- References: deep-galerkin, fourier-transform, laplacian, partial-differential-equations, spectral-graph-theory
- Backlinks: gff, microlocal-analysis

## Entity: sobolev-spaces
- Title: Sobolev Spaces & Weak Solutions
- Category: Functional Analysis
- Language: en
- Key Concepts: Rellich-Kondrachov Theorem, Sobolev Embeddings, Sobolev Spaces & Weak Solutions, Weak Derivatives, Sobolev Spaces $W^{k,p}$, Physics-Informed Neural Networks (PINNs)
- Backlinks: deep-ritz-method, hilbert-banach-spaces, math/harmonic-analysis, math/lp-spaces, math/nonparametric-regression, math/spectral-theory-operators, math/topology-basics

## Entity: spectral-theorem-unbounded
- Title: Spectral Theorem for Unbounded Operators
- Category: Functional Analysis
- Language: en
- Key Concepts: Spectral Measure, Self-Adjointness: The Key Requirement, Visualization: Discrete vs. Continuous Spectrum, Related Topics, Stable Processes, unbounded, The Spectral Decomposition, Stochastic PDEs, Schrödinger equation, Quantum Mechanics, Functional Calculus, Self-Adjointness, Kernel Methods, Spectral Theorem for Unbounded Operators, Why It Matters in Physics and AI
- References: functional-analysis, math/spectral-theory-operators, operator-semigroups, spectral-graph-theory
- Backlinks: laplacian, operator-semigroups, quantum-math

## Entity: bayes-theorem
- Title: Bayes' Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: Variational Autoencoders (VAE):, Related Topics, $P(B|A)$ (Likelihood):, Bayesian Inference:, uncertainty, Applications in AI, The Formula, Naive Bayes Classifier:, Base Rate Fallacy, $P(A|B)$ (Posterior):, Bayes' Theorem, Logical Pitfalls, Bayesian Neural Networks:, $P(A)$ (Prior):, $P(B)$ (Evidence):
- References: naive-bayes, prm, variational-inference
- Backlinks: bayesian-networks, conditional-probability, map-estimation, probability-distributions, probability-paradoxes, statistical-inference

## Entity: combinatorics-induction
- Title: Combinatorics and Mathematical Induction
- Category: Fundamentals
- Language: en
- Key Concepts: Visualization: Pascal's Triangle (Combinations), Intuition: The Domino Effect, 5. Pigeonhole Principle, Base Case, Mathematical Induction, Binomial Distribution, Inductive Step, Combinatorics, Hash Functions, Permutations ($P_n$), Hardware Design, 3. Mathematical Induction, 2. Binomial Theorem, 1. The Rules of Counting, Product Rule
- References: lln-clt, stablecoin-mechanisms
- Backlinks: number-theory-basics

## Entity: lagrange-multipliers
- Title: Constrained Optimization and Lagrange Multipliers
- Category: Fundamentals
- Language: en
- Key Concepts: Euler-Lagrange equations, Action, 1. The Core Problem, 3. The Lagrangian Function ($\mathcal{L}$), Visualization: Tangent Gradients, 4. Why it Matters in AI and Physics, Lagrange Multiplier, Support Vectors, tangent, Related Topics, subject to, A. Support Vector Machines (SVMs), B. Classical Mechanics, 2. Geometric Intuition, Lagrange Multipliers
- References: ai-physics/hamiltonian-nn, convex-optimization, convex-optimization-trading, multivariable-calculus
- Backlinks: course-math-for-ai, linear-programming

## Entity: convexity
- Title: Convexity
- Category: Fundamentals
- Language: en
- Key Concepts: 3. Applications, Log-Concave, Positive Semi-Definite, ELBO, Karush-Kuhn-Tucker (KKT), Strong Convexity, Global Optimality, A. Support Vector Machines (SVM), Duality and KKT Conditions, A. Convex Sets, Convexity: The Safety Net of Optimization, Quadratic Convex Program, exponentially fast, 4. Jensen's Inequality, local minimum is the global minimum
- References: convex-optimization, convex-optimization-trading, gradient-hessian-jacobian, martingale-optimal-transport, variational-autoencoders
- Backlinks: course-math-for-ai, fixed-point-theorems, jensen-inequality, jensens-inequality, logistic-regression, martingale-optimal-transport

## Entity: differential-equations
- Title: Differential Equations: The Laws of Change
- Category: Fundamentals
- Language: en
- Key Concepts: 5. Why it Matters in AI and Finance, Differential Equations: Modeling Dynamic Systems, 2. Partial Differential Equations (PDEs), Geometric Brownian Motion, Euler methods, 4. Analytical vs. Numerical Solutions, B. Stochastic Differential Equations (SDEs), Superposition Principle, Visualization: The Vector Field, 3. Linearity and Superposition, Harmonic Oscillator, Exponential Growth, Second Order, Differential Equations (DEs), Runge-Kutta
- References: automatic-differentiation, geometric-brownian-motion, ricci-flow, stochastic-differential-equations

## Entity: fourier-transform
- Title: Fourier Transform
- Category: Fundamentals
- Language: en
- Key Concepts: Frequency Domain, Duality, 5. Why it Matters in AI and Science, Geometric Deep Learning (GNNs), Fourier Transform: The Language of Waves, 3. Discrete and Fast Transform (FFT), Parseval's Theorem, Fourier Neural Operators (FNO), Fourier Transform, 1. Fourier Series (Periodic Signals), Inverse Transform, Discrete Fourier Transform (DFT), Positional Encodings, Intuition, Quantitative Finance
- References: finance/spectral-analysis, spectral-graph-theory
- Backlinks: characteristic-functions, complex-analysis, finance/dft, finance/fft, finance/prony-hankel-spectral, mgf, mgf-characteristic-functions, occupation-measures-local-times, schwartz-distributions

## Entity: gradient-hessian-jacobian
- Title: Gradient, Hessian, and Jacobian
- Category: Fundamentals
- Language: en
- Key Concepts: Gradient, Hessian, and Jacobian: The Geometry of Derivatives, Geometric Meaning, Linearization, 3. The Hessian ($H$) - The Curvature, Optimization, 2. The Jacobian ($J$) - The Linearizer, Jacobian-Vector Products (JVP), Visualization: Landscape Analysis, Local Minimum, [[automatic-differentiation|Backpropagation]], 1. The Gradient ($\nabla f$) - The Compass, Local Maximum, Newton's Method, vector-valued, Related Topics
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, laplacian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, change-of-variables, convexity, course-math-for-ai, laplacian, optimization-basics, qat

## Entity: hilbert-banach-spaces
- Title: Hilbert and Banach Spaces
- Category: Fundamentals
- Language: en
- Key Concepts: 8. Linear operators, Unitary:, Key Hilbert spaces, Self-adjoint:, weak topology, Hahn-Banach theorem, Reflexivity., kernel trick, bounded, never norm-compact, 5. Orthonormal bases, 12. Related topics, Banach fixed-point theorem, 10. Quantum mechanics, Canonical examples
- References: functional-analysis, gaussian-processes, kernel-methods-rkhs, math/lp-spaces, math/spectral-theory-operators, quantum-math, sobolev-spaces
- Backlinks: course-math-for-ai, fixed-point-theorems, math/functional-analysis, quantum-math

## Entity: calculus-integration
- Title: Integration and the Fundamental Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: B. Physics: Work and Energy, 5. Beyond Riemann: Lebesgue Integration, 2. The Fundamental Theorem of Calculus (FTC), Integration and the Fundamental Theorem of Calculus, Antiderivative, A. Probability and AI, 3. Techniques of Integration, 1. The Definite Integral (Riemann Sum), 4. Why it Matters in Science, Intuition, Lebesgue Integration, Probability Density Function (PDF), C. Finance: Risk Accumulation, Part 2, Integration by Parts
- References: measure-theory, taylor-series
- Backlinks: neural-radiance-fields-math

## Entity: lln-clt
- Title: LLN and CLT: The Pillars of Statistics
- Category: Fundamentals
- Language: en
- Key Concepts: Law of Large Numbers (LLN), 3. Why the CLT is the "Magic" of the Universe, sum, Intuition: The Casino's Edge, Normal Distribution, Hypothesis Testing, 4. Limitations and "Fat Tails", Finance, Power Laws, Weak LLN, 2. Central Limit Theorem (CLT), finite variance, 1. Law of Large Numbers (LLN), Visualization: Convergence to Normal, Error Modeling
- References: black-scholes, finance/black-swan-scenarios, finance/monte-carlo-method
- Backlinks: combinatorics-induction, course-math-for-ai, delta-method, discrete-random-variables, fundamental-inequalities, law-iterated-logarithm, probability-distributions, sequences-series-convergence

## Entity: laplacian
- Title: Laplacian Operator
- Category: Fundamentals
- Language: en
- Key Concepts: Spectral Bias in Neural Networks, 2. Physical and Geometric Intuition, Laplace Equation, Trace, equilibrium, diffusion, and smoothness, Harmonic Functions, into, 4. Relationship to the Hessian, Graph Laplacian, 1. Mathematical Definition, Diffusion Models, The [[spectral-graph-theory|Laplacian]] Operator ($\Delta$), 3. Role in Modern AI, B. Curvature and Energy, A. The Diffusion Engine
- References: diffusion-models, eigenvalues-eigenvectors, finance/shannon-entropy, gradient-hessian-jacobian, graph-neural-networks, math/spectral-theory-operators, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: course-math-for-ai, equivariant-diffusion-models, gff, gradient-hessian-jacobian, operator-semigroups, schwartz-distributions

## Entity: linear-programming
- Title: Linear Programming and Duality
- Category: Fundamentals
- Language: en
- Key Concepts: 3. Duality: The Hidden Logic, C. Large-Scale Logistics, Visualization: The Feasible Region, A. Optimal Transport, Dual, Linear Equality and Inequality Constraints, Linear Programming: The Science of Resource Allocation, 1. The Standard Form, Linear Objective Function, Linear Programming (LP), Shadow Prices, Primal, Intuition, 2. The Simplex Method, 4. Why it Matters in AI and Finance
- References: convex-optimization-trading, lagrange-multipliers, optimal-transport
- Backlinks: course-math-for-ai

## Entity: linear-spaces-basis
- Title: Linear Spaces, Basis, and Dimension
- Category: Fundamentals
- Language: en
- Key Concepts: Dimension, PCA, Fourier Transforms, Linear Spaces, Basis, and Dimension: The Scaffold of Algebra, Rank, The Rank-Nullity Theorem, Visualization: Basis and Span, 3. Basis and Dimension, 1. Defining a Linear Space ($V$), Linear Space, Distributivity, Subspace, Commutativity, 5. Subspaces and Rank, both
- References: eigenvalues-eigenvectors, quantum-entanglement, quantum-information-entropy, tensor-calculus
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, linear-systems-gauss, taylor-series

## Entity: linear-systems-gauss
- Title: Linear Systems and Gaussian Elimination
- Category: Fundamentals
- Language: en
- Key Concepts: 4. Why it Matters in the Digital Age, The Process:, Adding, 3. Existence and Uniqueness of Solutions, A. Computer Graphics, Rank, B. Finite Element Method (FEM), Swapping, Row Echelon Form (REF), System of Linear Equations (SLE), Reduced Row Echelon Form (RREF), 1. Matrix Representation, One Unique Solution, Multiplying, 2. Gaussian Elimination
- References: convex-optimization, eigenvalues-eigenvectors, linear-spaces-basis
- Backlinks: course-math-for-ai

## Entity: manifold
- Title: Manifold
- Category: Fundamentals
- Language: en
- Key Concepts: 4. Types of Manifolds in Wiki, 1. The Intuition: Atlas and Charts, Application: Riemannian Optimization, Curvature, Riemannian Manifold, Atlas, low-dimensional manifold, [[manifold-learning|Manifold]] Hypothesis, Neural Networks as Coordinate Seekers, Metric Tensor, 3. Riemannian Manifolds: Measuring Distance, [[manifold-learning|Manifold]]: The Geometry of Data and Spacetime, 2. The Manifold Hypothesis in AI, Riemannian [[convex-optimization|Gradient Descent]], Charts
- References: complex-manifolds, convex-optimization, general-relativity, manifold-learning, math/differential-geometry, math/topology-basics, symplectic-geometry, variational-autoencoders
- Backlinks: course-math-for-ai, information-geometry-finance

## Entity: martingale
- Title: Martingale
- Category: Fundamentals
- Language: en
- Key Concepts: 1. Definition, Convergence of Algorithms, 3. Fundamental Theorems, Supermartingale, Submartingale, Martingale Optimal Transport (MOT), Risk-Neutral Valuation, Martingale, Risk-Neutral Pricing, 2. Types of Martingales, Integrability, A. The Optional Stopping Theorem, Visualization: The Expectations, B. Doob-Meyer Decomposition, Adaptation
- References: brownian-motion, feller-processes, finance/shannon-entropy, martingale-optimal-transport, risk-neutral-valuation
- Backlinks: course-math-for-ai, martingale-optimal-transport, measure-theory

## Entity: measure-theory
- Title: Measure Theory Basics
- Category: Fundamentals
- Language: en
- Key Concepts: A. Sigma-Algebras ($\mathcal{F}$), Change of Measure, Measure Theory Basics: The Foundation of Probability, Countable Additivity, Null empty set, Radon-Nikodym Derivative, Likelihood Ratio, B. The Lebesgue Integral, A. Radon-Nikodym Theorem, 1. What is a Measure ($\mu$)?, Expected Shortfall (ES), Stochastic Discount Factor, Detailed Sections, 4. Why Tier-1 Quants Care, In Finance
- References: frtb-es, martingale, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: axiomatic-probability, bayesian-inference, calculus-integration, continuous-random-variables, course-math-for-ai, dirichlet-forms, markov-chebyshev

## Entity: metric-spaces
- Title: Metric Spaces and Topology
- Category: Fundamentals
- Language: en
- Key Concepts: 1. What is a Metric?, [[manifold-learning|Manifold]] Learning, Robustness, Symmetry, 2. Topology: Geometry without Measuring, Open Sets, A. Compactness, Metric Spaces, Metric Spaces and Topology: The Fabric of Continuity, Metric Space, Complete, [[manifold-learning|Manifold]], Manhattan ($L_1$), 3. Key Concepts, Identity of Indiscernibles
- References: ai-theory/adversarial-examples, lending-mechanics, manifold-learning, optimal-transport

## Entity: multivariable-calculus
- Title: Multivariable Calculus: Jacobians and Hessians
- Category: Fundamentals
- Language: en
- Key Concepts: 5. The Chain Rule in Higher Dimensions, Curvature, Matrix Multiplication, Jacobian, Optimization, 4. Why it Matters for High-Finance, Gamma, [[convex-optimization|Gradient Descent]], Jacobian Matrix, steepest ascent, Delta, Visualization: Steepest Descent, PyTorch, Hessian, TensorFlow
- References: automatic-differentiation, black-scholes, convex-optimization, math/analysis-geometry/information-geometry, math/spectral-theory-operators, taylor-series
- Backlinks: course-math-for-ai, lagrange-multipliers, taylor-series

## Entity: number-theory-basics
- Title: Number Theory and Cryptography
- Category: Fundamentals
- Language: en
- Key Concepts: Modular Inverses, Number Theory, Prime Number, Fundamental Theorem of Arithmetic, Modulus, The Discrete Logarithm Problem, 5. Hash Functions and Collisions, Visualization: Modular Cycles, 1. Divisibility and Prime Numbers, 2. Modular Arithmetic (Clock Math), RSA encryption, Cryptographic Hash Functions, The Difficulty of Factoring, Number Theory: Modular Arithmetic and the Foundation of Crypto, Public Key Cryptography
- References: cedefi-gateway-architecture, cedefi-mechanics, combinatorics-induction

## Entity: taylor-series
- Title: Taylor Series and Approximation
- Category: Fundamentals
- Language: en
- Key Concepts: 1st Order (Linear), Taylor Polynomial of degree $n$, Curvature, 3. Important Expansions to Memorize, Sine, 2. Intuition: Local Linearization and Beyond, 4. Why it Matters in Physics and AI, Taylor Series: The Art of Polynomial Approximation, Maclaurin Series, Exponential, 1. The Taylor Formula, Taylor Series, 2nd Order (Quadratic), Tangent Line, C. Optimization
- References: black-scholes, linear-spaces-basis, multivariable-calculus
- Backlinks: calculus-integration, course-math-for-ai, multivariable-calculus, sequences-series-convergence

## Entity: ads-cft-deep
- Title: AdS/CFT Correspondence
- Category: Holography
- Language: en
- Key Concepts: Spacetime and Entanglement, gravity is not a fundamental force, ER = EPR, AdS/CFT correspondence, Anti-de Sitter Space (AdS), Quantum Complexity, Computational Complexity, 2. The Ryu-Takayanagi Formula: Geometry is Information, Conformal Field Theory (CFT), EPR, 3. ER = EPR: The Wormhole Paradox, Symmetric under Scaling, AdS/CFT Correspondence: The Holographic Principle, Boundary, Strange Metals
- References: black-hole-thermodynamics, conformal-field-theory, quantum-information-entropy
- Backlinks: quantum-information-entropy

## Entity: agentic-patterns
- Title: Agentic Design Patterns
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Mathematical Perspective: Iterative Refinement, Agentic Design Patterns, Implementation: Simple Reflection Pattern, Related Topics, What Is It, Agentic Workflows, 2. Planning, 1. Reflection (Self-Correction), 4. Multi-Agent Collaboration, ReAct, Workflow, Why, Visualization: Single Pass vs. Agentic, New Standard, Core Patterns
- References: agents, llm, mcp, tool-use

## Entity: preference-optimization
- Title: Beyond DPO: KTO & IPO
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Prospect Theory, Data Efficiency, IPO, High, 2. IPO: Identity Preference Optimization, The Key Idea, Best For, Unpaired (Binary), Direct Preference Optimization ([[dpo]]), Data Requirement, Visualization: Loss Landscape Comparison, Foundation, Stability, 1. KTO: Kahneman-Tversky Optimization, Advantages
- References: dpo, fine-tuning, rlhf
- Backlinks: llm

## Entity: chain-of-thought
- Title: Chain-of-Thought Reasoning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Extended thinking:, Theoretical limits, Faithful CoT:, Hurts or is neutral:, Overview, [[cantor-diagonal|Cantor's diagonal argument]], Process reward models (PRMs):, Code generation:, Chain-of-Thought Reasoning, How It Works, Educational tutoring:, Prerequisites, Emergent behavior:, Program of Thought (PoT):, Standard few-shot CoT:
- References: fine-tuning, kolmogorov-complexity, llm, math/cantor-diagonal, math/godel-incompleteness, mcp, mechanistic-interpretability, rag, rlhf, speculative-decoding, tool-use, transformer-architecture
- Backlinks: agents, ai-theory/in-context-learning, evaluation-llms, math/cantor-diagonal, math/godel-incompleteness, mcp, meta-learning, prm, reasoning-models, rlhf, test-time-scaling, tool-use

## Entity: context-length
- Title: Context Length Extension
- Category: LLM Infrastructure
- Language: en
- Key Concepts: requires no retraining to extend context, Llama 3, Retrieval-Augmented Context, GPT-4, middle, The Sinusoidal Baseline and Its Limits, The "Lost in the Middle" Problem, head-specific slope, Context Length Extension, RoPE Scaling, only on relative position, Sliding Window Attention, ALiBi: [[attention-mechanisms|Attention]] with Linear Biases, RoPE: Rotary Position Embedding, Gemini 1.5
- References: attention-mechanisms, fine-tuning, inference-serving, llm, rag, speculative-decoding, state-space-models, transformer-architecture, vector-databases

## Entity: continuous-batching
- Title: Continuous Batching
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Problem with Static Batching, Insertion, Continuous Batching (In-Flight Batching), Related Topics, Visualization: Static vs. Continuous, padded, Why It Matters, Operate at the iteration (token) level, not the request level, The Orca Breakthrough, Result, 10x to 20x, The Two Phases of Generation, chunked prefill, Decode Phase, batch
- References: hardware-io-attention, inference-serving, llm, paged-attention
- Backlinks: speculative-decoding

## Entity: curriculum-learning
- Title: Curriculum Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Model-based, Coding, Zone of Proximal Development, Heuristics, Types of Curricula, complexity, Curriculum Learning, Competence Scaling, Better Generalization, Context Length, Visualization: Learning Dynamics, Why Ordering Matters, Applications in LLMs, Faster Convergence, Related Topics
- References: fine-tuning, neural-scaling-laws, training-dynamics

## Entity: dl-compilers
- Title: Deep Learning Compilers
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Visualization: The Compilation Pipeline, Operator Fusion, The Solution: Operator Fusion, 1. XLA (Accelerated Linear Algebra), Why It Matters, Related Topics, 3. `torch.compile` (PyTorch 2.0), The Problem: Kernel Launch Overhead and Memory Bound, Technologies: XLA, Triton, and `torch.compile`, Deep Learning Compilers and Kernel Fusion, 2. Triton, Deep Learning Compilers
- References: flash-attention, gpu-architecture, hardware-io-attention, inference-serving, moe-routing
- Backlinks: flash-attention, gpu-architecture

## Entity: dpo
- Title: Direct Preference Optimization (DPO)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Complexity, Compute, Dataset Quality, [[rlhf]], Sampling, What Is It, Likelihood Over-optimization, binary cross-[[shannon-entropy|entropy]] loss, Direct Preference Optimization (DPO), Comparison: DPO vs. [[rlhf]], The Mathematical Breakthrough, Stability, Implementation with `trl`, Related Topics, Reward Model
- References: agents, finance/shannon-entropy, fine-tuning, llm, rlhf
- Backlinks: language-models/safety/rlhf-dpo, llm, preference-optimization, preference-optimization-variants, rlhf, self-rewarding

## Entity: distributed-training
- Title: Distributed Training
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Visualization: Parallelism Spectrum, Distributed Training, 4. Why Tier-1 Engineers care, DDP (Distributed Data Parallel), 1. The Three Pillars of Parallelism, Weights, ZeRO, Bubble Time, All-Gather, 2. ZeRO: Zero Redundancy Optimizer, ZeRO-2, Solution, A. Data Parallelism (DP), Gradients, Distributed Training: Scaling LLMs to Trillions of Parameters
- References: fine-tuning, flash-attention, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: fsdp, hardware-io-attention, model-parallelism, tensor-decompositions

## Entity: federated-learning
- Title: Federated Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Local Training, Applications, Sparsification, LoRA, Smart Keyboards, Upload, Finance, Mobile Health, Visualization: Convergence Delay, Federated Averaging (FedAvg), Aggregation, Federated Learning, 1. Statistical Heterogeneity (Non-IID), [[quantization]], 3. System Heterogeneity
- References: differential-privacy, fine-tuning, llm, quantization
- Backlinks: differential-privacy

## Entity: flash-attention
- Title: FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 1. The Bottleneck: The Memory Wall, Tri Dao et al. (2022), 16 GB, does not store it, Gemini 1.5, Streaming Multiprocessors (SMs), HBM (High Bandwidth Memory), Impact, 4. FlashAttention-2 and Beyond, A. Tiling (SRAM Management), Speed, C. Recomputation (Gradient Checkpointing), IO-Aware, Online Softmax, Visualization: Memory Flow
- References: attention-mechanisms, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, distributed-training, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, language-models/mamba-ssm, paged-attention, rope-scaling

## Entity: fsdp
- Title: Fully Sharded Data Parallel (FSDP)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Complexity, Discard, Virtually unlimited, Memory usage, Weights, Max Model Size, Hybrid Sharding, Key Advantages, All-Gather, Visualization: Memory per GPU, Communication Efficiency, Distributed Data Parallel (DDP), Forward Pass, Massive Memory Savings, Backward Pass
- References: distributed-training, fine-tuning, inference-serving, model-parallelism
- Backlinks: model-parallelism

## Entity: gpu-architecture
- Title: GPU Architecture for Deep Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Registers, Streaming Multiprocessors (SMs), Warp, Thread, 32 threads, single clock cycle, L1 Cache / Shared Memory, L2 Cache, 3. Tensor Cores, 2. Threads and Warps, 4. The Memory Hierarchy, Mixed Precision, Alignment, Tensor Cores, Related Topics
- References: attention-mechanisms, dl-compilers, flash-attention, hardware-io-attention, inference-serving, modern-quantization
- Backlinks: distributed-training, dl-compilers, flash-attention, modern-quantization

## Entity: hardware-io-attention
- Title: Hardware IO and FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Communication-Avoiding, Role, Why It Matters for the Future, Related Topics, [[flash-attention|HBM]] (High Bandwidth Memory), The Memory Hierarchy of a [[inference-serving|GPU]], Visualization: Memory Speed vs. Access, The "Memory Wall" Problem, Size, FlashAttention: IO-Awareness, Hardware IO and the Physics of FlashAttention, IO-bound, Speed, entirely within SRAM, 90% of its time waiting
- References: attention-mechanisms, distributed-training, flash-attention, inference-serving
- Backlinks: continuous-batching, distributed-training, dl-compilers, flash-attention, gpu-architecture, paged-attention

## Entity: agents
- Title: LLM Agents
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Initialization:, Parallelism and Cost, Penalty:, Reasoning models (o1/o3):, External Memory via [[rag]], Error Propagation, Overview, Max steps:, Loop detection:, Code generation:, reliability remains unsolved, ReAct: Reasoning and Acting, Execution:, Simulation and execution sandboxes:, timeout
- References: chain-of-thought, fine-tuning, llm, mcp, rag, reinforcement-learning, tool-use
- Backlinks: agentic-patterns, dpo, inference-serving, prompt-engineering, vector-databases

## Entity: evaluation-llms
- Title: LLM Evaluation
- Category: LLM Infrastructure
- Language: en
- Key Concepts: MMLU (Massive Multitask Language Understanding), Contamination: Structural Problem, Never optimize for a single metric., HELM, Holistic Evaluation: HELM, Rotate benchmarks monthly., Genuine emergence, BIG-Bench and BIG-Bench Hard, Knowledge & Reasoning Benchmarks, Code Generation: Pass@k Metric, Perplexity: Information-Theoretic Foundation, Compare to human performance., Multi-Turn Preference Evaluation, Emergence and Scaling: Artifact or Reality?, Membership inference
- References: chain-of-thought, llm, rlhf
- Backlinks: ai-theory/knowledge-distillation, bayesian-deep-learning, prompt-engineering

## Entity: fine-tuning
- Title: LLM Fine-Tuning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: [[rlhf]], Data, Prompt Tuning, When to Fine-Tune, LoRA rank, LoRA: Low-Rank Adaptation, catastrophic forgetting, only on response tokens, Prompting / [[rag]] if:, LoRA, Learning rate, Full Fine-Tuning, Parameter reduction:, Instruction Tuning vs. [[rlhf]], QLoRA: Quantized LoRA
- References: attention-mechanisms, convex-optimization, inference-serving, quantization, rag, rlhf, transformer-architecture
- Backlinks: adalora, agents, ai-theory/in-context-learning, ai-theory/knowledge-distillation, chain-of-thought, code-models, constitutional-ai, context-length, contrastive-learning, curriculum-learning, distributed-training, dora, dpo, effective-field-theory, federated-learning, fsdp, language-models/safety/rlhf-dpo, llm, llm-financial-analysis, lora-peft, mixture-of-experts, ml-options-pricing, model-merging, modern-quantization, nlp-financial-analysis, positional-encodings, preference-optimization, prompt-engineering, qat, qlora, quantization, rag, rlhf, self-rewarding, slm, synthetic-data-alignment, tool-use, training-dynamics, weight-averaging

## Entity: inference-serving
- Title: LLM Inference Serving
- Category: LLM Infrastructure
- Language: en
- Key Concepts: GPU utilization, Dynamic batch size, Tokens/sec/GPU, time-to-first-token (TTFT), Speculative decoding, memory-bound, Dynamic index remapping, Prefill, TensorRT-[[llm]], Continuous batching, SGLang, Text Generation Inference, Disaggregation, Ollama, Production systems
- References: agents, attention-mechanisms, flash-attention, llm, mixture-of-experts, quantization, speculative-decoding, transformer-architecture
- Backlinks: attention-mechanisms, automatic-differentiation, context-length, continuous-batching, distributed-training, dl-compilers, finance/monte-carlo-method, finance/xva, fine-tuning, flash-attention, fsdp, gpu-architecture, hardware-io-attention, language-models/mamba-ssm, llm-financial-analysis, lora-peft, mla, model-merging, model-parallelism, modern-quantization, paged-attention, quantization, queuing-theory, rope-scaling, slm, speculative-decoding, temporal-fusion-transformer, tokenization, vector-databases, volatility-modulated-spectral-surface

## Entity: lora-peft
- Title: LoRA and PEFT
- Category: LLM Infrastructure
- Language: en
- Key Concepts: VRAM Savings, Related Topics, QLoRA, Visualization: Rank vs. Parameters, Prompt Tuning, The Mathematical Intuition, Portability, Multi-tenancy, Other PEFT Techniques, Advantages of LoRA, rank $r \ll d$, LoRA and Parameter-Efficient [[fine-tuning]] (PEFT), IA3, low intrinsic rank, Prefix Tuning
- References: fine-tuning, inference-serving, quantization, tensor-decompositions, transformer-architecture

## Entity: mcp
- Title: MCP (Model Context Protocol)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Market-data feeds, Architecture, stdio:, Real-world MCP servers (community ecosystem):, Overview, Sampling, Overhead:, Multi-agent MCP:, MCP for quantitative finance, Tools, client, server, MCP with OAuth:, Prerequisites, DevOps agents:
- References: chain-of-thought, llm, llm-financial-analysis, rag, slm, speculative-decoding, tool-use
- Backlinks: agentic-patterns, agents, chain-of-thought, tool-use

## Entity: model-parallelism
- Title: Model Parallelism: Tensor and Pipeline
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 3D Parallelism, Model Parallelism, Hardware, 3. Comparison and 3D Parallelism, Tensor Parallelism (TP), NVLink, Pipeline Parallelism (PP), Data Parallelism (DP/ZeRO), Pros, 1. Tensor Parallelism (TP), 2. Pipeline Parallelism (PP), Split unit, The Solution: Micro-batching, Efficiency, The Problem: Pipeline Bubbles
- References: attention-mechanisms, distributed-training, fsdp, inference-serving, transformer-architecture
- Backlinks: fsdp

## Entity: quantization
- Title: Model Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Q8_0, llama.cpp, Memory Footprint Calculations, Q4_K_M, Integration with Inference Pipelines, Activation-Aware Weight Quantization: AWQ, Q5_K_M, equal quantile spacing, NF4: 4-Bit Normal Float, symmetric, Absmax Quantization, activation scales, NF4, Accuracy Trade-offs, Weight vs. Activation Quantization
- References: attention-mechanisms, fine-tuning, inference-serving, llm, mixture-of-experts, neural-scaling-laws, speculative-decoding, transformer-architecture
- Backlinks: ai-theory/knowledge-distillation, bitnet, conformal-field-theory, federated-learning, fine-tuning, hamiltonian-mechanics, homological-algebra, inference-serving, linear-algebra, lora-peft, modern-quantization, pauli-exclusion-quantization, qat, qft-basic, qlora, quantization-error-math, quantization-ptq-information, research/mla-financial-reasoning, slm, small-ball-probabilities, vector-databases

## Entity: modern-quantization
- Title: Modern Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Visualization: Distribution-Aware Binning, Inversion Problem, 4. AWQ: Activation-aware Quantization, Training, 3. GPTQ: Post-Training Quantization (PTQ), FP8, Result, bitsandbytes, 1. The Challenge of Low Precision, Normal (Gaussian) Distribution, [[quantization]] Error, Hessian, Modern [[quantization]]: NF4, GPTQ, and AWQ, 5. FP8 and the Future, 1% of weights
- References: fine-tuning, gpu-architecture, inference-serving, quantization
- Backlinks: deep-lob, gpu-architecture, qat, tensor-decompositions

## Entity: orm-prm
- Title: ORM vs PRM: Preference Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: each individual step, The Signal, Excellent, Related Topics, False Positives, The Pros, how to reward, Yes, ORM vs PRM: Two Ways to Reward Reasoning, 1. Outcome Reward Models (ORM), Comparison: Accuracy on Complex Tasks, PRM, Inference-time Search, Implementation in [[rlhf]], 2. Process Reward Models (PRM)
- References: llm, mcts, prm, reasoning-models, rlhf

## Entity: paged-attention
- Title: PagedAttention and KV Cache
- Category: LLM Infrastructure
- Language: en
- Key Concepts: KV Cache, Fragmentation, Contiguous Allocation, internal fragmentation, 1. Near-Zero Waste, Blocks, Key Advantages, The Problem: Memory Fragmentation, Logical vs. Physical, Paging, share the same physical blocks, Block Tables, external fragmentation, vLLM, Visualization: Paged Memory Allocation
- References: attention-mechanisms, flash-attention, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, continuous-batching

## Entity: prompt-engineering
- Title: Prompt Engineering
- Category: LLM Infrastructure
- Language: en
- Key Concepts: System Prompts and Jailbreaking, Self-consistency, Assistant turn, Reasoning and Acting (ReAct), Limitations and Trade-offs, Tree of Thoughts and Search, Tree of Thoughts, Chain-of-Thought Prompting, User turn, APE, DSPy, prompt optimization, Zero-shot and Few-shot Learning, Prompt Sensitivity and Optimization, System message
- References: agents, evaluation-llms, fine-tuning, llm, meta-learning, rlhf, tool-use
- Backlinks: ai-theory/in-context-learning

## Entity: qat
- Title: Quantization Aware Training (QAT)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Straight-Through Estimator (STE), Step Size, QAT (Aware Training), QLoRA, 3. LSQ: Learned Step Size Quantization, PTQ (Post-Training), Visualization: STE Gradient Flow, Related Topics, The Core Problem, 1. The Simulated [[quantization]] (Fake Quant), Forward Pass, 4. QAT vs. PTQ: When to use which?, 2-bit or 3-bit, 2. Straight-Through Estimator (STE), Fake [[quantization]]
- References: automatic-differentiation, fine-tuning, gradient-hessian-jacobian, modern-quantization, quantization

## Entity: rag
- Title: RAG (Retrieval-Augmented Generation)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Knowledge Graphs, Pre-Retrieval (Query Transformation), RAG (Retrieval-Augmented Generation), Overview, Architecture Workflow, Reciprocal Rank Fusion (RRF), GraphRAG: The Next Frontier, Cross-Encoder Reranker, HyDE (Hypothetical Document Embeddings), Multi-Query, Relational Reasoning, Context Recall, Faithfulness, Retrieval (Hybrid Search), Visualization: Retrieval Precision
- References: embedding-models, fine-tuning, llm, llm-financial-analysis, tool-use, vector-databases
- Backlinks: about, agents, chain-of-thought, context-length, embedding-models, fine-tuning, llm-financial-analysis, mcp, naive-bayes, nlp-financial-analysis, projects/llm-wiki, research/mla-financial-reasoning, slm, tool-use, vector-databases

## Entity: self-rewarding
- Title: Self-Rewarding Models
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Echo Chambers, Data Curation, Visualization: Performance Scaling, Risks and Limitations, Real-World Examples, The Iterative Loop, student, Self-Rewarding Language Models, teacher, Response Generation, DeepSeek-R1, [[dpo]]/[[fine-tuning]], Llama 3, Related Topics, Repeat
- References: dpo, fine-tuning, prm, reasoning-models

## Entity: speculative-decoding
- Title: Speculative Decoding
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Core Concept, Advanced Variations, Accepting, Verifying, memory-bound, Drafting, 2. EAGLE (Extrapolation Algorithm for Greater Language-model Efficiency), Visualization: Parallel Verification, 1. Medusa (Draft-less Speculative Decoding), 3. Self-Speculative Decoding, Target Model, The Workflow, Draft Model, Mathematical Foundation: Rejection Sampling, Acceptance Rate
- References: continuous-batching, inference-serving, kv-cache-compression, llm, multi-token-prediction, prm
- Backlinks: chain-of-thought, context-length, inference-serving, mcp, multi-token-prediction, quantization, tool-use

## Entity: tokenization
- Title: Tokenization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Why Not Characters or Words?, Characters, Fertility, Byte-level BPE, Whitespace, likelihood ratio, Token Fertility and Inference Cost, Numbers, Vocabulary Size vs. Perplexity, 1. Byte-Pair Encoding (BPE), Byte-level models, Words, prunes, Related Topics, 3. Unigram Language Model
- References: attention-mechanisms, inference-serving, transformer-architecture

## Entity: tool-use
- Title: Tool Use / Function Calling
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Step 3 — Tool execution., Database query generation:, Tool Use / Function Calling, Overview, [[mcp]] (Model Context Protocol), Multi-agent tool delegation, agent, Step 2 — Model decision., How It Works, Cost:, Tool Safety Architecture, [[deep-rl-execution|Deep RL for execution]], inference-time planning, DevOps agents:, Step 1 — Tool schema definition.
- References: chain-of-thought, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, mcp, rag, reinforcement-learning, speculative-decoding
- Backlinks: agentic-patterns, agents, chain-of-thought, mcp, prompt-engineering, rag, research/mla-financial-reasoning

## Entity: vector-databases
- Title: Vector Databases
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Complexity, Weaviate, Indexing, Architecture, IndexFlatL2, Filtered Search, IndexIVFFlat, L2 distance, Retrieval, Chroma, Layer assignment, IVF: Inverted File Index, Product [[quantization]] (PQ), Trade-offs, Managed vs. Self-hosted
- References: agents, embedding-models, inference-serving, llm, quantization, rag, transformer-architecture
- Backlinks: context-length, matryoshka-embeddings, rag

## Entity: weight-averaging
- Title: Weight Averaging and SWA
- Category: LLM Infrastructure
- Language: en
- Key Concepts: sharp minimum, Exponential Moving Average (EMA), Weight Averaging and Stochastic Weight Averaging (SWA), Why It Works: The Flatness Hypothesis, Stochastic Weight Averaging (SWA), Related Topics, Polyak-Ruppert Averaging (EMA), Phase 2, flatness, Visualization: Converging to the Center, Averaging, Phase 1, flat minima, The Problem: Sharp Minima
- References: fine-tuning, model-merging, training-dynamics

## Entity: preference-optimization-variants
- Title: Advanced Preference Optimization
- Category: Language Models
- Language: en
- Key Concepts: unpaired data, Beyond [[dpo]], Related Topics, PRM (Process Reward Model), Step-wise DPO, Advanced Preference Optimization, 3. ORM and PRM Integration, Comparison of Methods, KTO, 2. IPO (Identity Preference Optimization), Outcome-based, DPO, Prospect Theory, 1. KTO (Kahneman-Tversky Optimization), ORM (Outcome Reward Model)
- References: dpo, prm, reasoning-models, rlhf
- Backlinks: synthetic-data-alignment

## Entity: language-models/safety/rlhf-dpo
- Title: Alignment: RLHF and DPO
- Category: Language Models
- Language: en
- Key Concepts: [[dpo]] (Direct Preference Optimization), Complexity, Compute, Drawbacks:, Alignment: [[rlhf]] and [[dpo]], Related Topics, Reward Model (RM), Constitutional AI, Stability, Reward Modeling:, SFT (Supervised [[fine-tuning]]):, PPO (Proximal Policy Optimization):, [[rlhf]] (Reinforcement Learning from Human Feedback), [[rlhf]] vs. DPO, Safety and Constitutional AI
- References: constitutional-ai, dpo, finance/shannon-entropy, fine-tuning, llm, math/analysis-geometry/information-geometry, mechanistic-interpretability, rlhf

## Entity: bitnet
- Title: BitNet & 1.58-bit LLMs
- Category: Language Models
- Language: en
- Key Concepts: BitNet & 1.58-bit LLMs (Ternary [[quantization]]), Related Topics, Scaling Laws, Visualization, Energy Efficiency, Hardware Optimization, Trade-offs, Training Complexity, Ternary Weight [[quantization]], Throughput, Activation Quantization, What Is It, BitLinear, How It Works, Memory Footprint
- References: llm, mixture-of-experts, neural-scaling-laws, quantization, reasoning-models, slm, transformer-architecture

## Entity: code-models
- Title: Code Language Models
- Category: Language Models
- Language: en
- Key Concepts: Architecture, Cross-language translation, Execution feedback objective (RLEF), What Is It, Docstring and comment generation, Long-range dependencies, Multi-stage training, Tokenization sensitivity, Code completion, Mathematical Framework, Multi-file awareness, Prerequisites, Test generation, Rare languages and frameworks, Benchmark overfitting
- References: attention-mechanisms, fine-tuning, llm, mixture-of-experts, pac-learning, slm, transformer-architecture
- Backlinks: multi-token-prediction

## Entity: constitutional-ai
- Title: Constitutional AI and RLAIF
- Category: Language Models
- Language: en
- Key Concepts: [[rlhf]], Safety-Efficiency Frontier, [[fine-tuning]], Generation, Critique, Feedback Model, Constitutional AI (CAI), 4. Strategic Benefits, Expensive, Black-box, RLAIF, Revision, Phase 1: Supervised Learning (Critique and Revision), Transparency, Subjective
- References: fine-tuning, llm, mechanistic-interpretability, reinforcement-learning, rlhf
- Backlinks: language-models/safety/rlhf-dpo, mechanistic-interpretability

## Entity: embedding-models
- Title: Embedding Models
- Category: Language Models
- Language: en
- Key Concepts: Sentence similarity, Matryoshka Representation Learning (MRL), Architecture, Anomaly detection, Language and script coverage, In-batch hard negatives, Asymmetric architectures, What Is It, Retrieval-augmented generation, Contrastive loss on triplets, Out-of-domain generalization, Long documents, Mathematical Framework, Clustering, Cross-lingual transfer
- References: attention-mechanisms, finance/shannon-entropy, llm, mixture-of-experts, rag, transformer-architecture, vlm
- Backlinks: contrastive-learning, llm, matryoshka-embeddings, rag, slm, vector-databases, vlm

## Entity: llm
- Title: Large Language Models (LLMs)
- Category: Language Models
- Language: en
- Key Concepts: Static knowledge, Architecture, Residual connections, Autoregressive generation, What Is It, Context window, 1. Pre-training., Feed-forward network (FFN), Mathematical Framework, Masked multi-head self-[[attention-mechanisms|attention]], Knowledge, emergent abilities, decoder-only [[transformer-architecture|transformer]], Context compression, 3. Alignment via [[rlhf]] or [[dpo]].
- References: attention-mechanisms, dpo, embedding-models, fine-tuning, mechanistic-interpretability, mixture-of-experts, model-merging, neural-scaling-laws, preference-optimization, prm, reasoning-models, rlhf, slm, transformer-architecture
- Backlinks: about, agentic-patterns, agents, attention-mechanisms, bert, bitnet, chain-of-thought, code-models, constitutional-ai, context-length, continuous-batching, distributed-training, dpo, embedding-models, evaluation-llms, f-divergences, federated-learning, flash-attention, generative-models, gnn-credit-risk, gpt-architecture, inference-serving, language-models/safety/rlhf-dpo, llm-financial-analysis, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/cantor-diagonal, math/godel-incompleteness, matryoshka-embeddings, mcp, mechanism-design, meta-learning, mixture-of-experts, ml-options-pricing, model-merging, multi-token-prediction, naive-bayes, nlp-financial-analysis, orm-prm, paged-attention, positional-encodings, ppo, projects/llm-wiki, projects/vibefix, prompt-engineering, quantization, rag, reasoning-models, rlhf, slm, sparse-autoencoders, speculative-decoding, state-space-models, superposition, test-time-scaling, tool-use, vector-databases, vlm

## Entity: matryoshka-embeddings
- Title: Matryoshka Embeddings
- Category: Language Models
- Language: en
- Key Concepts: Adaptive Accuracy/Efficiency Trade-off, Storage Savings, Related Topics, Visualization, Use Cases, Nested Loss Function, Matryoshka Embeddings (MRL), Low Latency, On-device AI, What Is It, Benefits, How It Works, Hierarchical Navigation, Vector Search, No Re-indexing
- References: embedding-models, llm, vector-databases, vlm

## Entity: mixture-of-experts
- Title: Mixture of Experts (MoE)
- Category: Language Models
- Language: en
- Key Concepts: Router (gating network), Memory vs. compute asymmetry, Architecture, What Is It, Memory cost, Scaling, MoE layer, Expert routing instability, Mathematical Framework, $N$ expert FFNs, Communication overhead, Prerequisites, Gradient flow, Expert utilization and load imbalance, Expert parallelism
- References: fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, slm, transformer-architecture
- Backlinks: bayesian-nonparametrics, bitnet, code-models, embedding-models, inference-serving, llm, mla, model-merging, moe-routing, quantization, slm, state-space-models, transformer-architecture

## Entity: moe-routing
- Title: MoE Routing and Specialization
- Category: Language Models
- Language: en
- Key Concepts: Related Topics, Top-k Routing, Auxiliary Load Balancing Loss, shared experts, Advanced Routing Strategies, Routing Challenges, 3. DeepSeek-V3: Multi-Head Latent [[attention-mechanisms|Attention]] & DeepSeekMoE, 2. Expert Choice Routing, Visualization: Token Distribution, 1. Switch [[transformer-architecture|Transformer]] (Top-1), Router, Solution, 2. Expert Overflow, 1. Expert Collapse (Winner-Take-All), experts choose tokens
- References: attention-mechanisms, mixture-of-experts, mla, transformer-architecture
- Backlinks: dl-compilers

## Entity: model-merging
- Title: Model Merging & FrankenMoE
- Category: Language Models
- Language: en
- Key Concepts: Compute, Advantages and Limitations, FrankenMoE, Base Model, Reset, Resolve signs, What Is It, Gate/Router, Performance, 1. SLERP (Spherical Linear Interpolation), Model Merging & FrankenMoE, 2. TIES-Merging, 3. DARE (Drop And REscale), Expert Models, Flexibility
- References: fine-tuning, inference-serving, llm, mixture-of-experts
- Backlinks: llm, weight-averaging

## Entity: mla
- Title: Multi-Head Latent Attention (MLA)
- Category: Language Models
- Language: en
- Key Concepts: Decoupled Rotary Positional Embeddings, What Is It, latent vector, MLA, ~5% - 10%, Comparison: KV-Cache Per Token, large-scale MoE, Visualization: Memory Efficiency, GQA, DeepSeek (V2/V3), 1. Compression, 2. Expansion, better compression than GQA, MHA, Content Part
- References: attention-mechanisms, inference-serving, mixture-of-experts
- Backlinks: moe-routing, rope-scaling

## Entity: multi-token-prediction
- Title: Multi-Token Prediction
- Category: Language Models
- Language: en
- Key Concepts: Meta AI (2024), Multi-Token Prediction (MTP), Improved Reasoning, The Core Concept, Inference Speedup, The Modified Loss Function, Related Topics, Sample Efficiency, Architecture: Shared Trunk and Independent Heads, Why It Works, Better Long-Term Dependency, $n$ Prediction Heads, Shared Trunk, Benefits
- References: code-models, finance/shannon-entropy, llm, speculative-decoding, training-dynamics, transformer-architecture
- Backlinks: speculative-decoding

## Entity: positional-encodings
- Title: Positional Encodings
- Category: Language Models
- Language: en
- Key Concepts: Related Topics, Learned absolute., Context Extension: YaRN, Sinusoidal (Vaswani et al. 2017)., Positional encodings, T5 Relative Bias., Positional Encodings, Absolute Positional Encodings, RoPE, RoPE: Rotary Position Embedding, Extrapolation Beyond Training Length, Relative Positional Encodings, Comparison Summary, YaRN, ALiBi (Press et al. 2022).
- References: attention-mechanisms, fine-tuning, llm, neural-scaling-laws, transformer-architecture
- Backlinks: nerf, rope-scaling

## Entity: prm
- Title: Process-Based Supervision
- Category: Language Models
- Language: en
- Key Concepts: Credit Assignment, PRM vs. ORM Performance, Related Topics, Process-Based Supervision (PRMs), Process Reward Models (PRMs), DeepSeek-R1, Real-World Examples, Hallucination Reduction, Search at Inference Time, The Mathematical Intuition, PRM, Outcome-Based Supervision (ORMs), Why PRMs Matter, Process-Based Supervision, OpenAI PRM800K
- References: chain-of-thought, reasoning-models, rlhf
- Backlinks: bayes-theorem, llm, orm-prm, preference-optimization-variants, self-rewarding, speculative-decoding, test-time-scaling

## Entity: reasoning-models
- Title: Reasoning Models
- Category: Language Models
- Language: en
- Key Concepts: Complex Mathematics, Reduced Hallucination, How They Are Trained, Reasoning Models (o1/R1 Style), Rejection Sampling & Distillation, Cost, Group Relative Policy Optimization (GRPO), What Is It, Trade-offs, Key Capabilities, Visualization: Inference Scaling, OpenAI o1, The "Aha" Moment, Best For, User Experience
- References: chain-of-thought, llm, neural-scaling-laws, rlhf
- Backlinks: bitnet, llm, orm-prm, preference-optimization-variants, prm, self-rewarding, test-time-scaling, type-theory

## Entity: rope-scaling
- Title: RoPE Scaling & YaRN
- Category: Language Models
- Language: en
- Key Concepts: Compute, 1. Linear Interpolation, Comparison of Methods, Ring Attention, What Is It, RoPE Scaling and Long Context, FlashAttention-2, Practical Constraints, RoPE Scaling, Techniques, Memory, PagedAttention, Related Topics, [[attention-mechanisms|Attention]] Logit Decay, 3. YaRN (Yet another RoPE extensioN)
- References: attention-mechanisms, flash-attention, inference-serving, mla, positional-encodings, transformer-architecture

## Entity: slm
- Title: Small Language Models (SLMs)
- Category: Language Models
- Language: en
- Key Concepts: Curriculum training, [[quantization]]-aware training, Architecture, Smaller knowledge base, Curated pre-training data, What Is It, Knowledge breadth, Mathematical Framework, Prerequisites, Privacy, Weaker multi-step reasoning, Context length, Grouped Query [[attention-mechanisms|Attention]] (GQA), Key Properties & Capabilities, Visualization
- References: attention-mechanisms, embedding-models, finance/shannon-entropy, fine-tuning, inference-serving, llm, mechanistic-interpretability, mixture-of-experts, neural-scaling-laws, quantization, rag, transformer-architecture
- Backlinks: bitnet, code-models, llm, mcp, mixture-of-experts, synthetic-data-alignment

## Entity: language-models/mamba-ssm
- Title: State Space Models (Mamba)
- Category: Language Models
- Language: en
- Key Concepts: Selection, The Mamba Innovation: Selection Mechanism, linear-time complexity, Related Topics, Inference Speed:, Hardware-Aware Design:, The [[transformer-architecture|Transformer]] Bottleneck, Selectively, Mamba, State Space Models and Mamba Architecture, Why Mamba Matters, State Space Models (SSM), The SSM Framework, Scalable Context:, Limitations
- References: attention-mechanisms, flash-attention, inference-serving, linear-algebra, time-series, transformer-architecture

## Entity: synthetic-data-alignment
- Title: Synthetic Data & Self-Alignment
- Category: Language Models
- Language: en
- Key Concepts: ReST, Filter, Synthetic Data, Input/Output Generation, [[fine-tuning]], Alpaca, 2. Constitutional AI (Self-Correction), Comparison Table, 3. ReST (Reinforced Self-Training), Self-Alignment, Generate, RL Phase, 1. Self-Instruct, Distillation, Seed Tasks
- References: fine-tuning, preference-optimization-variants, rlhf, slm

## Entity: test-time-scaling
- Title: Test-Time Scaling
- Category: Language Models
- Language: en
- Key Concepts: 1. Search and Exploration, Complexity, Error Correction, Cost, Beam Search, What Is It, How It Works, Trade-offs, 3. Verification-Guided Search, Reasoning Breakthroughs, Flexibility, 2. Verification and Reward Models, Outcome Reward Models (ORM), [[prm|Process Reward Models (PRM)]], Benefits
- References: chain-of-thought, llm, neural-scaling-laws, prm, reasoning-models

## Entity: training-dynamics
- Title: Training Dynamics
- Category: Language Models
- Language: en
- Key Concepts: continual training, Near convergence, proxy model hyperparameter search, barriers, Early training, Gradient norm per layer, Warmup, Loss Landscape Geometry, Activation statistics, generalises, Cosine Decay, [[attention-mechanisms|Attention]] [[shannon-entropy|entropy]], Training Dynamics, Induction head formation, Weight norm per layer
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, finance/shannon-entropy, fine-tuning, neural-scaling-laws, transformer-architecture
- Backlinks: curriculum-learning, morse-theory, multi-token-prediction, weight-averaging

## Entity: vlm
- Title: Vision-Language Models (VLMs)
- Category: Language Models
- Language: en
- Key Concepts: Cross-modal connector, Architecture, Contrastive VLMs, What Is It, Stage 2 — Visual instruction tuning., High-resolution details, Q-Former, Mathematical Framework, Visual encoder (ViT), Prerequisites, Generative VLMs, Vision-Language Models (VLMs), [[transformer-architecture|MLP]] projector, Video temporal reasoning, Generative objective
- References: attention-mechanisms, embedding-models, llm, pac-learning, transformer-architecture
- Backlinks: embedding-models, matryoshka-embeddings, vision-transformers

## Entity: math/large-deviations-cramer
- Title: Large Deviations and Cramer's Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: cumulant generating function, Chernoff bound, Applications, 5. Financial risk management., large, rate function, Setup, The Cramer rate function, the probability of ruin, Cramer's theorem, Definition., tilt, Large deviation principle, Upper bound (Chernoff)., 1. Statistical mechanics.
- References: central-limit-theorem, characteristic-functions, convex-optimization, cornish-fisher-cvar, finance/shannon-entropy, law-iterated-logarithm, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/lundberg-cramer-ruin
- Backlinks: extreme-value-theory, math/branching-processes, math/concentration-inequalities, math/contiguity-measures, math/coupling-methods, math/doleans-dade-exponential, math/geometric-ergodicity, math/interacting-particle-systems, math/local-limit-theorems, math/lundberg-cramer-ruin, math/percolation, math/poisson-approximation, math/random-graphs, math/random-walks, math/renewal-theory, math/wiener-hopf-factorization, mgf, wentzell-freidlin

## Entity: math/lundberg-cramer-ruin
- Title: Lundberg-Cramer Ruin Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: Applications, Theorem (Lundberg inequality)., the probability of a rare event decays exponentially with exponent = Cramer rate function, 1. Insurance and reinsurance., Lundberg-Cramer theorem, The Lundberg coefficient, Historical context, 2. Mixture of exponentials., Exact asymptotics (Cramer, 1930s)., Definition., Non-Poisson claim arrivals., Lundberg coefficient, not exponentially, light-tailed, 4. Queueing theory.
- References: extreme-value-theory, finance/stable-distributions, finance/value-at-risk, math/discrete-martingales, math/large-deviations-cramer
- Backlinks: math/large-deviations-cramer, math/poisson-approximation, math/renewal-theory, math/wiener-hopf-factorization

## Entity: math/central-limit-theorem
- Title: Central Limit Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: independent but not necessarily identically distributed, "functional" version of the CLT, practically useful, Historical significance, Multivariate CLT., Central Limit Theorem, Multivariate and functional CLT, Proof via characteristic functions, their large sums look the same, Classical statement, the normal distribution is everywhere, generalized Lévy CLT, in distribution, function of time, rate
- References: arch-models, brownian-motion, characteristic-functions, finance/crr-model, finance/stable-distributions, finance/stylized-facts-returns, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/weak-convergence-prokhorov

## Entity: math/functional-limit-theorems
- Title: Functional Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: Applications, Convergence via Predictable Characteristics, Theorem (Donsker, 1951)., Theorem., The Role of Skorokhod Topology, Rebolledo's Martingale CLT, Convergence of Discrete to Continuous Semimartingales, Theorem (Aldous-Rebolledo)., tightness, Diffusion approximations., Queueing theory., Functional Limit Theorems, Tightness Criteria, functional, Donsker's Invariance Principle
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, martingale-clt, math/convergence-semimartingales, math/skorokhod-topology, math/triangular-arrays-processes, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-problem, math/predictable-compensator, math/random-walks, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/infinitely-divisible-distributions
- Title: Infinitely Divisible Distributions
- Category: Limit Theorems
- Language: en
- Key Concepts: The Levy-Khintchine Representation, Infinitely Divisible Distributions, The Levy Measure, Relation to Stable Distributions, Theorem (Levy-Khintchine)., Theorem., Key Examples, Kolmogorov's Formula and De Finetti's Theorem, Connection to Processes with Independent Increments, Related Articles, infinitely divisible, canonical triplet, Role in Jacod-Shiryaev's Limit Theory, De Finetti's theorem (for ID distributions)., Levy measure
- References: central-limit-theorem, characteristic-functions, finance/levy-processes, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, levy-ito-decomposition, math/subordinators, math/triangular-arrays-processes

## Entity: math/law-of-large-numbers
- Title: Law of Large Numbers
- Category: Limit Theorems
- Language: en
- Key Concepts: Kronecker's lemma, Law of the iterated logarithm, rates, Theorem (strong LLN, Kolmogorov 1933)., Law of Large Numbers, Proof (Chebyshev), strong, Empirical frequency converges to probability, What the LLN does not say, Kolmogorov's inequality, substantially stronger, Strong law of large numbers, the trajectory itself, Hájek-Rényi inequality, mean is infinite
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/markowitz-mean-variance, law-iterated-logarithm, math/borel-cantelli-zero-one, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms
- Backlinks: convergence-types, de-finetti-exchangeability, finance/coherent-risk-measures, finance/cointegration, finance/quasi-monte-carlo, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-clt, math/poisson-approximation, math/renewal-theory, math/stochastic-recursive-sequences, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, monte-carlo-integration, slutsky-theorem

## Entity: math/local-limit-theorems
- Title: Local Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: Local theorems for large deviations, Applications, Gnedenko's local theorem for lattice distributions, Random walks on lattices., lattice distribution, Theorem (Stone)., Theorem (non-lattice local CLT)., point probabilities, Theorem (de Moivre-Laplace, local form)., distribution functions, Theorem (Gnedenko, 1948)., Proof sketch., The non-lattice (density) case, inversion formula, Historical development
- References: central-limit-theorem, characteristic-functions, finance/stable-distributions, math/functional-limit-theorems, math/large-deviations-cramer, math/law-of-large-numbers, math/spectral-theory-operators, math/weak-convergence-prokhorov
- Backlinks: math/central-limit-theorem, math/stein-method

## Entity: math/poisson-approximation
- Title: Poisson Approximation
- Category: Limit Theorems
- Language: en
- Key Concepts: Extreme values., Coupon collector., Applications, Relation to the Central Limit Theorem, Random graphs., Theorem., dependent, Proof sketch of Chen-Stein, The Le Cam inequality, Random permutations., Negative binomial and mixed Poisson., Theorem (Chen-Stein bound)., Poisson Approximation, The Chen-Stein method, Birthday problem.
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory
- Backlinks: math/central-limit-theorem, math/random-graphs, math/stein-method

## Entity: math/stable-convergence
- Title: Stable Convergence
- Category: Limit Theorems
- Language: en
- Key Concepts: Comparison., mixed Gaussian, random, Power variations, bipower variation, and other functionals, The Stable CLT for Martingales, Tightness, Applications in High-Frequency Statistics, Definition., Role in Jacod-Shiryaev's Framework, Proof Sketch, Stable Convergence, Identification:, mixing convergence, Proposition., Realized volatility CLT.
- References: characteristic-functions, heston-model, martingale-clt, math/convergence-semimartingales, math/discrete-martingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/local-asymptotic-normality

## Entity: math/weak-convergence-prokhorov
- Title: Weak Convergence and Prokhorov's Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: Applications, Prokhorov's compactness theorem, Prokhorov's theorem (1956)., functional central limit theorem, converges weakly, 3. Convergence of the binomial model to Black-Scholes:, too restrictive, in a function space, In $L^p$, Definition., 4. Empirical distributions:, Why such a strange definition, Equivalent forms:, excludes, In probability
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/asymptotic-arbitrage-large-markets, finance/crr-model, math/kolmogorov-probability-axioms, math/law-of-large-numbers
- Backlinks: empirical-processes, math/central-limit-theorem, math/contiguity-measures, math/convergence-semimartingales, math/coupling-methods, math/functional-limit-theorems, math/glivenko-cantelli, math/hellinger-processes, math/infinitely-divisible-distributions, math/local-limit-theorems, math/skorokhod-topology, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/wiener-hopf-factorization

## Entity: determinant-properties
- Title: Determinant Properties
- Category: Linear Algebra
- Language: en
- Key Concepts: Multiplicativity:, Overview, Volume:, Transpose:, Inverse:, Key Properties

## Entity: matrix-exponential
- Title: Matrix Exponential
- Category: Linear Algebra
- Language: en
- Key Concepts: Overview, Definition

## Entity: matrix-norms
- Title: Matrix Norms
- Category: Linear Algebra
- Language: en
- Key Concepts: Frobenius Norm, Induced Norms, Overview

## Entity: trace-identities
- Title: Trace Identities
- Category: Linear Algebra
- Language: en
- Key Concepts: Cyclic Property:, Identities, Trace of Derivative:, Overview, Eigenvalue Sum:, Linearity:

## Entity: vector-norms
- Title: Vector Norms
- Category: Linear Algebra
- Language: en
- Key Concepts: $L_\infty$ Norm:, Overview, $L_1$ Norm:, L-p Norms, $L_2$ Norm:

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
- Key Concepts: 1. Purged Group TimeSeries Cross-Validation, See Also, Machine Learning for Quant Trading
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
- Key Concepts: Absolute Spread, Adverse Selection Costs, Spread in Different Markets, bid, Overview, Crypto, Determinants of Spread, Information Asymmetry, Order Processing Costs, offer, Effective Spread, Components of the Spread, Inventory Risk, Bid-Ask Spread, Volatility
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
- Key Concepts: See Also, Midpoint Peg:, 1. HFT Order Types, Post-Only:, HFT Order Types & Dark Pools, Iceberg Orders:
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: cryptographic-zero-knowledge-in-finance

## Entity: high-frequency-trading-and-orderbook
- Title: High-Frequency Trading (HFT) & Order Book Infrastructure
- Category: Market Microstructure
- Language: en
- Key Concepts: FPGA & ASICs:, See Also, VPIN (Volume-Synchronized Probability of Toxicity):, FIFO vs Pro-Rata:, 1. HFT Tech Stack, High-Frequency Trading (HFT) & Order Book Infrastructure, Colocation:, 2. Queue Priority & VPIN, Protocols:
- References: algorithmic-execution-twap-vwap, course-quant-trading, quant-market-making-mechanics
- Backlinks: algorithmic-execution-twap-vwap, crypto-quant-trading-and-amm-curves, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-stat-arb-lead-lag, limit-order-book-matching-engine-design, market-impact-models-square-root-law, market-microstructure-noise-and-realized-volatility, order-book-dynamics-and-lOB-modeling

## Entity: market-impact-models-square-root-law
- Title: Market Impact Models & Square Root Law
- Category: Market Microstructure
- Language: en
- Key Concepts: See Also, Market Impact Models & Square Root Law
- References: algorithmic-execution-twap-vwap, course-quant-trading, high-frequency-trading-and-orderbook

## Entity: quant-market-making-mechanics
- Title: Market Making Mechanics & Asymmetric Information
- Category: Market Microstructure
- Language: en
- Key Concepts: See Also, 2. Avellaneda-Stoikov Inventory Model, Bid Price ($P_b$):, Mid Price ($P_m$):, 1. Fundamentals & Spreads, 3. Asymmetric Information & Adverse Selection, Bid-Ask Spread ($\delta$):, Ask Price ($P_a$):, Trading Takeaway:, Market Making Mechanics & Asymmetric Information
- References: course-quant-trading, optimal-stopping-and-kelly, option-greeks-and-volatility
- Backlinks: algorithmic-execution-twap-vwap, crypto-quant-trading-and-amm-curves, deep-reinforcement-learning-for-trading, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-trading-and-orderbook, limit-order-book-matching-engine-design, market-microstructure-noise-and-realized-volatility, optimal-stopping-and-kelly, option-greeks-and-volatility, order-book-dynamics-and-lOB-modeling, quant-brainteasers-handbook, quant-interview-cheat-sheet, volatility-trading-and-variance-swaps

## Entity: market-microstructure
- Title: Market Microstructure
- Category: Market Microstructure
- Language: en
- Key Concepts: Kyle's Model (1985), adverse selection risk, effective spread, Market Impact, Overview, Glosten-Milgrom Model (1985), Informed Traders, Tightness, Market Makers, Reinforcement Learning, Mathematical Models, Limit Order, Kyle's Lambda, The Limit Order Book (LOB), Generative Models
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
- Key Concepts: Order Book Dynamics & LOB Modeling, 2. Volume Imbalance Ratio, See Also, 1. Hawkes Processes
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: machine-learning-for-quant-trading

## Entity: math/martingale-clt
- Title: Central Limit Theorem for Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: Quadratic variation (Doob):, 4. Prediction errors., random, Setup, martingale differences, Brown's theorem (1971)., Central Limit Theorem for Martingales, Hall-Heyde theorem (1980)., 2. GMM estimators., Normalization condition, Lindeberg condition, clean assumptions, 4. Stochastic approximation (SGD)., 2. Squares minus conditional variances., Related Articles
- References: arch-models, brownian-motion, central-limit-theorem, convex-optimization, garch-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/law-of-large-numbers

## Entity: math/discrete-martingales
- Title: Discrete Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: discrete analogue of Itô's formula, Doob's optional stopping theorem., Martingale property, Supermartingale, Doob's convergence theorem., Theorem (Doob decomposition)., Applications, Submartingale, $L^p$ convergence theorem., Adaptedness, 3. Product of independent unit-mean variables., Existence of limit distributions, the origin, 5. Actuarial science., Discrete Martingales
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/optimal-stopping-american, law-iterated-logarithm, math/conditional-expectation-sigma, math/discrete-markov-chains, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/branching-processes, math/conditional-expectation-sigma, math/discrete-markov-chains, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/lundberg-cramer-ruin, math/martingale-clt, math/martingale-representation, math/optimal-stopping-markov, math/predictable-compensator, math/random-walks, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/stable-convergence, math/wiener-hopf-factorization, stochastic-processes

## Entity: math/doleans-dade-exponential
- Title: Doleans-Dade Stochastic Exponential
- Category: Martingale Theory
- Language: en
- Key Concepts: Consequence., Applications, Pure jump process., Proof idea., Exponential martingales., Yor's Formula, Theorem., Novikov's condition., Connection to Girsanov's Theorem, Geometric Levy models., predictable, Definition., Doleans-Dade Stochastic Exponential, Definition and the Equation, Theorem (Yor).
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, math/discrete-martingales, math/large-deviations-cramer, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, levy-ito-decomposition, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-stochastic-integrals, math/density-processes, math/hellinger-processes, math/martingale-problem, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering, risk-neutral-valuation

## Entity: math/doob-meyer-decomposition
- Title: Doob-Meyer Decomposition
- Category: Martingale Theory
- Language: en
- Key Concepts: The Optional Decomposition, Discrete-Time Doob Decomposition, The Compensator, quadratic variation, Definition., predictable, Theorem (Doob)., special semimartingale, Theorem (Lenglart)., optional, class (D), Examples:, Why this matters:, The Continuous-Time Theorem, Key examples:
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability
- Backlinks: local-time-tanaka, math/density-processes, math/martingale-representation, math/predictable-compensator, math/quadratic-variation

## Entity: math/martingale-representation
- Title: Martingale Representation Theorem
- Category: Martingale Theory
- Language: en
- Key Concepts: Applications, market completeness, completeness of the Brownian filtration, market incompleteness, The Clark-Ocone Formula, Malliavin derivative, total, [[innovation-process|innovation process]], Theorem (Martingale Representation)., Backward SDEs., The Representation Theorem, every square-integrable martingale adapted to the Brownian filtration is a stochastic integral with respect to the Brownian motion, Failure Beyond Brownian Filtrations, Wiener functionals., innovation representation
- References: black-scholes, brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, hidden-markov-models, innovation-process, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, nonlinear-filtering, stochastic-differential-equations
- Backlinks: clark-ocone, feynman-kac, math/absolute-continuity-process-measures, math/backward-sde, stochastic-processes

## Entity: math/optimal-stopping-markov
- Title: Optimal Stopping of Markov Chains
- Category: Martingale Theory
- Language: en
- Key Concepts: dynamic programming, optimal value, Optimal stopping time:, supermartingale, Quickest detection of a regime change, main practical motivation, Penalty method and variational inequality, Applications, smallest, fixed point, variational inequality, Theorem., Setup, Backward induction (finite horizon), optimal
- References: finance/black-scholes-derivations, finance/crr-model, finance/optimal-stopping-american, math/discrete-markov-chains, math/discrete-martingales, reinforcement-learning
- Backlinks: local-time-tanaka

## Entity: optimal-stopping-and-kelly
- Title: Kelly Criterion & Optimal Stopping Theory
- Category: Math & Game Theory
- Language: en
- Key Concepts: Kelly Criterion & Optimal Stopping Theory, 1. Kelly Criterion, 2. Optimal Stopping & Secretary Problem, See Also
- References: course-quant-trading, quant-brainteasers-handbook, quant-market-making-mechanics
- Backlinks: optimal-stopping-american-options, option-greeks-and-volatility, quant-brainteasers-handbook, quant-market-making-mechanics, quant-risk-management-var-cvar

## Entity: stochastic-calculus-and-ito-lemma
- Title: Stochastic Calculus & Ito's Lemma
- Category: Math & Game Theory
- Language: en
- Key Concepts: See Also, 1. Ito's Lemma, Stochastic Calculus & Ito's Lemma
- References: course-quant-trading, monte-carlo-option-pricing-and-variance-reduction, option-greeks-and-volatility
- Backlinks: fixed-income-quant-rates-and-yield-curve, monte-carlo-option-pricing-and-variance-reduction, stochastic-volatility-heston-model

## Entity: axiomatic-probability
- Title: Axiomatic Probability
- Category: Math Foundations
- Language: en
- Key Concepts: Countable Additivity ($\sigma$-additivity), Empty Set, Borel $\sigma$-algebra, Inclusion-Exclusion, Monotonicity, Andrey Kolmogorov, Complement Rule, Continuity from below, 1. The Probability Space $(\Omega, \mathcal{F}, P)$, 2. Kolmogorov's Axioms, Sample Space ($\Omega$), $\sigma$-algebra ($\mathcal{F}$), 3. Derived Properties, events, 4. Why Measure Theory?
- References: conditional-probability, measure-theory

## Entity: bayesian-linear-regression
- Title: Bayesian Linear Regression
- Category: Math Foundations
- Language: en
- Key Concepts: likelihood, conjugate, Bayesian Linear Regression, The Posterior Distribution, prior, The Model, Predictive Distribution

## Entity: boolean-algebra
- Title: Boolean Algebra & Circuit Logic
- Category: Math Foundations
- Language: en
- Key Concepts: Karnaugh Maps, AND, Logic Gates, NOT, false, true, Karnaugh map (K-map), Complexity Basics
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
- Key Concepts: optics, Learning as a Morphism, Optics, lenses, Forward:, Backward:, Related Topics, The Para Construction, Lenses and [[automatic-differentiation|Backpropagation]], Open Games, Lens, Category Theory for Machine Learning, DERIVATION: [[automatic-differentiation|Backpropagation]] as Lens Composition, Categorical Cybernetics, What Is It
- References: automatic-differentiation, manifold-learning, topos-theory, type-theory

## Entity: conditional-probability
- Title: Conditional Probability and Total Probability
- Category: Math Foundations
- Language: en
- Key Concepts: 3.1 Definition of a Partition, Proof, Related Topics, 2. The Multiplication Rule, 1.1 Intuition: Shrinking the Sample Space, Chain Rule, 5. Example: Diagnostic Testing, Posterior, Prior, 1. Definition of Conditional Probability, 3.2 The Theorem, 4. Bayes' Theorem, Conditional Probability and the Law of Total Probability, 3. Law of Total Probability (LTP), Likelihood
- References: bayes-theorem, markov-chains
- Backlinks: axiomatic-probability

## Entity: continuous-random-variables
- Title: Continuous Random Variables
- Category: Math Foundations
- Language: en
- Key Concepts: Continuous Random Variables, 4. Transformation of Variables, Continuous Random Variable, PDF, 3. Expected Value and Variance, Related Topics, Normal($\mu, \sigma^2$), Cauchy($x_0, \gamma$), 1.1 Properties of the PDF, 2. Cumulative Distribution Function (CDF), 5. Common Continuous Distributions, Exponential($\lambda$), Uniform($a, b$), Intuition, CDF
- References: discrete-random-variables, joint-distributions, measure-theory
- Backlinks: discrete-random-variables

## Entity: coordinate-systems
- Title: Coordinate Systems & Transforms
- Category: Math Foundations
- Language: en
- Key Concepts: polar coordinates, Jacobian determinant, Polar and Spherical Coordinates, The Jacobian Determinant, spherical coordinates
- References: implicit-function-theorem
- Backlinks: implicit-function-theorem, integration-techniques

## Entity: covariance-correlation
- Title: Covariance, Correlation, and Independence
- Category: Math Foundations
- Language: en
- Key Concepts: 2.1 Properties, 2. Pearson Correlation Coefficient, Covariance, Correlation, and Independence, Covariance, 3. Pearson vs. Spearman Correlation, Negative Covariance, Spearman ($\rho_s$), Positive Covariance, Independence $\implies$ Zero Correlation, 4. Independence vs. Zero Correlation, 5. Independence, monotonic, 1. Covariance, linear, Related Topics
- References: joint-distributions, linear-regression-ols
- Backlinks: joint-distributions

## Entity: generating-functions
- Title: Discrete Math: Generating Functions
- Category: Math Foundations
- Language: en
- Key Concepts: Solving Recurrences, Counting and Analogies, generating function
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
- Key Concepts: Poisson($\lambda$), 2. Probability Mass Function (PMF), 3. Cumulative Distribution Function (CDF), Law of the Unconscious Statistician (LOTUS), Geometric($p$), Properties, 4. Expected Value (Mean), Discrete Random Variable, 5. Variance and Standard Deviation, discrete, Bernoulli($p$), 1. Formal Definition, step function, Binomial($n, p$), 6. Common Discrete Distributions
- References: continuous-random-variables, lln-clt
- Backlinks: continuous-random-variables

## Entity: eigendecomposition-vs-svd
- Title: Eigenvalue Decomposition vs. SVD
- Category: Math Foundations
- Language: en
- Key Concepts: Orthogonality:, Eigenvalue Decomposition vs. SVD, Eigenvalue Decomposition (EVD), Spectral Theorem:, left singular vectors, Singular Value Decomposition (SVD), Technical Comparison, Domain and Codomain:, right singular vectors, Applicability:, singular values
- References: math/spectral-theory-operators, pca-math
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: exponential-families
- Title: Exponential Families
- Category: Math Foundations
- Language: en
- Key Concepts: Examples, Exponential Families, log-partition function, Mean:, sufficient statistic, Properties of the Log-Partition Function, natural (or canonical) parameter, Variance:, Role in Machine Learning, Canonical Form
- Backlinks: course-math-for-ai, distributions-zoo, fisher-information, math/bayesian-asymptotics, math/cramer-rao-bound, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, maximum-entropy

## Entity: fundamental-inequalities
- Title: Fundamental Inequalities: Markov & Chebyshev
- Category: Math Foundations
- Language: en
- Key Concepts: Proof, Related Topics, Fundamental Inequalities: Markov & Chebyshev, Chernoff Bounds, Sharpness, 3. Tightness and Bounds, 1. Markov's Inequality, 2. Chebyshev's Inequality
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
- Key Concepts: adjacency matrix, Path:, Tree:, Paths and Trees, Adjacency Matrices
- References: bayesian-networks, sparse-matrices
- Backlinks: sparse-matrices

## Entity: group-theory-basics
- Title: Group Theory Basics
- Category: Math Foundations
- Language: en
- Key Concepts: Identity:, Rings and Fields, Closure:, Field:, Inverse:, Ring:, Associativity:, Groups, group
- References: formal-proof-techniques

## Entity: homotopy-type-theory
- Title: Homotopy Type Theory (HoTT)
- Category: Math Foundations
- Language: en
- Key Concepts: Homotopy Type Theory (HoTT), Higher Inductive Types (HITs), $h=0$ (Sets):, path, $\infty$-groupoid, Univalent Foundations, What Is It, The Identity Type as a Path Space, $h=1$ (Groupoids):, path induction, Relevance to AI and Program Synthesis, Homotopy Theory, The Univalence Axiom, Intensional Type Theory, Formal Verification:
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
- Key Concepts: $L_\infty$ Norm (Chebyshev norm):, $L_p$ Norms, Inner Product Spaces & Norms, Frobenius Norm, $L_1$ Norm (Manhattan distance):, Dual Norms, $L_2$ Norm (Euclidean norm):, inner product space
- References: eigendecomposition-vs-svd, kkt-conditions, pca-math

## Entity: jensen-inequality
- Title: Jensen's Inequality
- Category: Math Foundations
- Language: en
- Key Concepts: Evidence Lower Bound (ELBO), Related Topics, 3. Applications, 1. Formal Statement, A. Information Theory, Jensen's Inequality, B. Machine Learning: ELBO and EM-Algorithm, [[expectation-maximization|EM algorithm]], 2. Geometric Proof
- References: convexity, expectation-maximization, finance/shannon-entropy, information-theory-basics
- Backlinks: fundamental-inequalities

## Entity: joint-distributions
- Title: Joint, Marginal, and Conditional Distributions
- Category: Math Foundations
- Language: en
- Key Concepts: 1.1 Discrete Case: Joint PMF, Related Topics, Law of Iterated Expectations, 5. Multivariate Calculus Foundation, Joint CDF, 1.2 Continuous Case: Joint PDF, 4. Independence, Continuous, 3. Conditional Distributions, 3.1 Conditional Expectation, Joint, Marginal, and Conditional Distributions, 2. Marginal Distributions, Discrete, independent, Double Integrals
- References: copulas, covariance-correlation, multivariate-normal
- Backlinks: continuous-random-variables, covariance-correlation

## Entity: kkt-conditions
- Title: Lagrange Multipliers & KKT Conditions
- Category: Math Foundations
- Language: en
- Key Concepts: KKT Conditions (Inequality Constraints), Dual Feasibility:, Lagrange Multipliers & KKT Conditions, Primal Feasibility:, Complementary Slackness:, Karush-Kuhn-Tucker (KKT), Lagrange Multipliers (Equality Constraints), Stationarity:
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: large-deviations
- Title: Large Deviations: Hoeffding & Bernstein Inequalities
- Category: Math Foundations
- Language: en
- Key Concepts: Markov's and Chebyshev's Inequalities, Chebyshev's:, Markov's:, Key takeaway:, Hoeffding's Inequality, Bernstein's Inequality, Large Deviations: Hoeffding & Bernstein, exponentially

## Entity: change-of-basis
- Title: Linear Algebra: Change of Basis
- Category: Math Foundations
- Language: en
- Key Concepts: similar, Coordinate Transformations, Similarity Transforms
- References: math/spectral-theory-operators, rank-nullity-theorem
- Backlinks: conic-sections, rank-nullity-theorem

## Entity: rank-nullity-theorem
- Title: Linear Algebra: Kernel, Image, and Rank-Nullity
- Category: Math Foundations
- Language: en
- Key Concepts: Fundamental Subspaces, Kernel (Null Space, $\ker A$):, Rank-Nullity Theorem, The Rank-Nullity Theorem, Image (Column Space, $\text{im} A$):
- References: change-of-basis
- Backlinks: change-of-basis

## Entity: sparse-matrices
- Title: Linear Algebra: Sparse Matrices
- Category: Math Foundations
- Language: en
- Key Concepts: Storage Formats, CSR (Compressed Sparse Row):, CSC (Compressed Sparse Column):, Mathematical Properties, sparse
- References: graph-theory-basics, numerical-stability
- Backlinks: graph-theory-basics, numerical-stability

## Entity: formal-proof-techniques
- Title: Logic: Formal Proof Techniques
- Category: Math Foundations
- Language: en
- Key Concepts: Base Case:, Proof by Contradiction, Inductive Step:, Direct Proof, Mathematical Induction
- References: lln-proofs
- Backlinks: group-theory-basics, lln-proofs, recursion-recurrence

## Entity: markov-chains
- Title: Markov Chains
- Category: Math Foundations
- Language: en
- Key Concepts: Ergodic Theorem:, Markov Chains, stationary distribution, The Markov Property, Transition Matrix, Irreducibility and Aperiodicity, Aperiodic:, Irreducible:, Markov property, Stationary Distributions, stochastic matrix
- Backlinks: conditional-probability, stochastic-processes

## Entity: matrix-calculus
- Title: Matrix Calculus
- Category: Math Foundations
- Language: en
- Key Concepts: Gradients Involving Determinants, denominator layout, Matrix Calculus, Gradients Involving Traces, Layout Conventions, Gradients of Quadratic Forms
- References: em-algorithm, gmm, multivariate-normal-distribution
- Backlinks: tensors-and-contractions

## Entity: multivariable-taylor-series
- Title: Multivariable Taylor Series
- Category: Math Foundations
- Language: en
- Key Concepts: Local Minimum:, Hessian, Multivariable Taylor Series, The Taylor Expansion, Newton's Method, Gradient, Hessian Properties and Optimization, Local Maximum:, Saddle Point:
- References: math/spectral-theory-operators, positive-definite-matrices

## Entity: multivariate-normal-distribution
- Title: Multivariate Normal Distribution
- Category: Math Foundations
- Language: en
- Key Concepts: Density Function, Marginal Distribution:, Multivariate Normal Distribution, Conditional Distribution:, Marginals and Conditionals, Mahalanobis Distance
- References: kalman-filter, positive-definite-matrices
- Backlinks: matrix-calculus, positive-definite-matrices

## Entity: mutual-information-divergence
- Title: Mutual Information & Divergence
- Category: Math Foundations
- Language: en
- Key Concepts: Mutual Information & Divergence, Kullback-Leibler (KL) Divergence, Data Processing Inequality, Gibbs' Inequality:, Interpretation:, Mutual Information, Asymmetry:
- References: em-algorithm, finance/shannon-entropy

## Entity: numerical-integration
- Title: Numerical Integration
- Category: Math Foundations
- Language: en
- Key Concepts: Gaussian Quadrature, Monte Carlo Integration, Curse of Dimensionality, Numerical Integration, Importance Sampling

## Entity: numerical-stability
- Title: Numerical Stability & Floating Point Math
- Category: Math Foundations
- Language: en
- Key Concepts: Machine epsilon, numerically stable, condition number, Condition Number, floating-point, Machine Epsilon
- References: sparse-matrices
- Backlinks: sparse-matrices

## Entity: convex-sets-functions
- Title: Optimization: Convex Sets & Functions
- Category: Math Foundations
- Language: en
- Key Concepts: convex, strictly convex, Convex Sets, Convex Functions
- References: implicit-function-theorem
- Backlinks: implicit-function-theorem

## Entity: positive-definite-matrices
- Title: Positive Definite Matrices
- Category: Math Foundations
- Language: en
- Key Concepts: Optimization:, Principal Minors:, positive semi-definite (PSD), Cholesky Decomposition, Role in Kernels and Optimization, Invertibility:, Positive Definite Matrices, Properties, [[spectral-theory-operators|Eigenvalues]]:, positive definite (PD), Kernels:, Trace and Determinant:
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
- Key Concepts: Strong LLN, Weak LLN
- References: formal-proof-techniques, random-walks
- Backlinks: formal-proof-techniques, random-walks

## Entity: random-walks
- Title: Probability: Random Walks
- Category: Math Foundations
- Language: en
- Key Concepts: Recurrence vs Transience, random walk, transient, 1D and 2D Simple Walks, recurrent
- References: lln-proofs
- Backlinks: lln-proofs, stochastic-processes

## Entity: p-values-effect-size
- Title: Statistics: P-values & Effect Size
- Category: Math Foundations
- Language: en
- Key Concepts: P-Hacking, P-values, Cohen's d, p-hacking, p-value, Effect Size, Effect size
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
- Key Concepts: Stochastic Games, Correlated Equilibrium, Stochastic Games & Correlated Equilibrium

## Entity: tensors-and-contractions
- Title: Tensors and Contractions
- Category: Math Foundations
- Language: en
- Key Concepts: Matrix Multiplication:, Trace:, Einstein Summation Convention, Inner Product:, Matrix-Vector Product:, Examples:, Tensor Notation, Tensors and Contractions, Tensor Contraction
- References: attention-mechanisms, automatic-differentiation, matrix-calculus

## Entity: em-algorithm
- Title: The EM Algorithm
- Category: Math Foundations
- Language: en
- Key Concepts: latent variables, E-step (Expectation):, Evidence Lower Bound (ELBO), M-step (Maximization):, The EM Steps, The Expectation-Maximization (EM) Algorithm, Problem Setup
- References: gmm, hmm
- Backlinks: matrix-calculus, mutual-information-divergence

## Entity: universal-approximation-theory
- Title: Universal Approximation Theory
- Category: Math Foundations
- Language: en
- Key Concepts: Classical Formulation, Universal Approximation Theory, Barron's Theorem, Approximation by Transformers, Extension to Deep Networks
- References: attention-mechanisms, transformer-architecture

## Entity: information-theory-basics
- Title: Information Theory Basics
- Category: Math Fundamentals
- Language: en
- Key Concepts: 3. Cross-Entropy: The ML Loss Function, 4. Mutual Information, Kullback-Leibler (KL) Divergence, Related Topics, Binary Cross-Entropy (BCE), 5. Summary of Terms, Information Theory Basics: Measuring Surprise, 1. [[shannon-entropy|Entropy]]: The Measure of Uncertainty, [[shannon-entropy|Entropy]] ($H$), Cross-Entropy ($H(p, q)$), 2. KL Divergence: Comparing Distributions, Intuition, Cross-Entropy, Entropy, Mutual Information ($I(X; Y)$)
- References: finance/shannon-entropy, maximum-entropy, probability-distributions, variational-autoencoders
- Backlinks: jensen-inequality, probability-distributions

## Entity: linear-regression-ols
- Title: Linear Regression & OLS
- Category: Math Fundamentals
- Language: en
- Key Concepts: Geometric Interpretation, No Multicollinearity, t-statistic, Ordinary Least Squares (OLS), 3. Assumptions of OLS (Gauss-Markov), Ridge Regression, Lasso Regression, The Normal Equation, orthogonal projection, Linear Regression & OLS: The Foundation of Predictive Modeling, Homoscedasticity, 4. Evaluation Metrics, Residual Sum of Squares (RSS), Exogeneity, Related Topics
- References: matrix-decompositions, statistical-inference, vector-spaces-orthogonality
- Backlinks: covariance-correlation, estimator-properties, map-estimation, matrix-decompositions, vector-spaces-orthogonality

## Entity: matrix-decompositions
- Title: Matrix Decompositions: SVD, LU, and QR
- Category: Math Fundamentals
- Language: en
- Key Concepts: 1. LU Decomposition: Solving Linear Systems, Applications, 2. QR Decomposition: Stability and Orthogonality, Why it matters, The Geometric Intuition, Gram-Schmidt process, Matrix Decompositions: The Structural Integrity of Data, Upper, Orthogonal, Geometric Intuition, Eigenvalue Algorithms, SVD, Least Squares, Efficiency, 4. Comparison Summary
- References: eigenvalues-eigenvectors, linear-regression-ols, math/spectral-theory-operators, pca
- Backlinks: linear-regression-ols, vector-spaces-orthogonality

## Entity: optimization-basics
- Title: Optimization 101: Gradient Descent & Newton's Method
- Category: Math Fundamentals
- Language: en
- Key Concepts: Why use it?, Stochastic [[convex-optimization|Gradient Descent]] (SGD), 1. [[convex-optimization|Gradient Descent]]: The First-Order Workhorse, Vanishing/Exploding Gradients, Saddle Points, Variations in ML, No Learning Rate, Learning Rate, Why avoid it?, Computation, 4. Key Challenges, Hessian, Adam, quadratic convergence, Convergence
- References: chain-rule-autodiff, convex-optimization, gradient-hessian-jacobian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, sequences-series-convergence

## Entity: probability-distributions
- Title: Probability Distributions Encyclopedia
- Category: Math Fundamentals
- Language: en
- Key Concepts: Parameters, 1. Discrete Distributions, Beta Distribution, 2. Continuous Distributions, Central Limit Theorem, Multinomial, Use, Second Moment (Variance), [[shannon-entropy|Entropy]], First Moment (Mean), Normal (Gaussian) Distribution, PMF, Binomial, Third Moment (Skewness), Fourth Moment (Kurtosis)
- References: bayes-theorem, finance/shannon-entropy, information-theory-basics, lln-clt
- Backlinks: information-theory-basics, mgf-characteristic-functions, order-statistics, statistical-inference

## Entity: sequences-series-convergence
- Title: Sequences, Series & Convergence
- Category: Math Fundamentals
- Language: en
- Key Concepts: partial sums, Hessian Intuition, converges, Linearization, 1. Sequences and Limits, Radius of Convergence, In ML, 5. Convergence in Probability, 2. Infinite Series, 3. Taylor Series: Approximating Functions, Convergence in Distribution, Harmonic Series, Hessian, Why it matters in AI, Convergence in Probability
- References: lln-clt, optimization-basics, taylor-series

## Entity: logic-set-theory
- Title: Set Theory & Formal Logic
- Category: Math Fundamentals
- Language: en
- Key Concepts: Implication ($\implies$), Existential Quantifier ($\exists$), Universal Quantifier ($\forall$), 3. Relations and Functions, Predicate Logic (Quantifiers), Cartesian Product ($A \times B$), Negation ($\neg$), Bijective, Function ($f: A \to B$), Injective (One-to-One), True, Boolean Algebra, Membership ($x \in A$), Intersection ($A \cap B$), 4. Boolean Algebra in Computing
- References: graph-theory

## Entity: statistical-inference
- Title: Statistical Inference & Hypothesis Testing
- Category: Math Fundamentals
- Language: en
- Key Concepts: Power ($1 - \beta$), Statistical Inference: Drawing Conclusions from Data, 1. Hypothesis Testing: The Framework, Crucial, Reject $H_0$, p-value, Bayesian, 5. Bayesian Inference vs. Frequentist, Frequentist, Significance Level ($\alpha$), Z-test / T-test, Interpretation, 2. Type I and Type II Errors, ANOVA, The p-value
- References: bayes-theorem, probability-distributions
- Backlinks: bootstrap-jackknife, cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, linear-regression-ols, map-estimation, mle-estimation, rank-tests, sufficient-statistics

## Entity: chain-rule-autodiff
- Title: The Chain Rule & Auto-Diff Foundations
- Category: Math Fundamentals
- Language: en
- Key Concepts: Jacobian, Chain Rule, Optimization, 2. Multivariable Chain Rule, Reverse Mode (Backprop), 4. The Computational Graph, Reverse Mode vs. Forward Mode, [[automatic-differentiation|Backpropagation]], Forward Pass, Efficiency, 3. Automatic Differentiation (Auto-Diff), The Chain Rule & Auto-Diff: The Engine of Deep Learning, Backward Pass, 1. The Single Variable Chain Rule, Related Topics
- References: automatic-differentiation, gradient-hessian-jacobian, optimization-basics
- Backlinks: optimization-basics

## Entity: vector-spaces-orthogonality
- Title: Vector Spaces & Orthogonality
- Category: Math Fundamentals
- Language: en
- Key Concepts: Dimension, 3. Projection Matrices, Application, Kernel (Nullspace), Stability Note, 1. Vector Spaces and Bases, Orthonormal Basis, orthonormal, Image (Column Space), Vector Space, Orthogonal, 5. Summary of Key Concepts, Basis, 2. Orthogonality: The Power of 90 Degrees, Projection
- References: eigenvalues-eigenvectors, linear-regression-ols, matrix-decompositions
- Backlinks: linear-regression-ols

## Entity: math/algebraic-topology
- Title: Algebraic Topology
- Category: Mathematical Foundations
- Language: en
- Key Concepts: loop, contractible, Euler characteristic, Euler Characteristic and Betti Numbers, boundary operator, Homotopy and Homotopy Equivalence, homology groups, Singular Homology, Covering Spaces, homotopy equivalent, homotopic relative to the basepoint, chain complex, singular $n$-simplex, covering space, Connection to Other Areas
- References: category-theory, complex-analysis, functional-analysis, math/differential-geometry, math/non-euclidean-geometry, math/topology-basics
- Backlinks: homological-algebra, homotopy-type-theory, math/differential-geometry, morse-theory, topos-theory

## Entity: complex-analysis
- Title: Complex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Essential singularity, residue, The Cauchy Integral Theorem and Formula, Connection to Harmonic Functions and Partial Differential Equations, Möbius transformations, Cauchy integral formula, analytic continuation, Analytic Continuation and Monodromy, Power Series and Analyticity, Singularities and Laurent Series, monodromy, holomorphic, Maximum Modulus Principle, Laurent series, Conformal Mappings
- References: fourier-transform, functional-analysis, harmonic-analysis, math/differential-geometry, math/topology-basics
- Backlinks: math/algebraic-topology, math/differential-geometry, math/harmonic-analysis

## Entity: convex-analysis
- Title: Convex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Dual feasibility, Variational methods in control, The subdifferential, Conjugate functions and duality, Information geometry, LASSO and sparsification, Convex sets and functions, KKT conditions and optimality, Complementary slackness, Proximal operators and algorithms, Applications across domains, Portfolio optimization, Stationarity, Primal feasibility, Optimal transport
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, finance/markowitz-mean-variance, math/analysis-geometry/information-geometry, math/kolmogorov-probability-axioms, optimal-transport, stochastic-control
- Backlinks: math/high-dimensional-statistics, math/topology-basics

## Entity: math/differential-geometry
- Title: Differential Geometry
- Category: Mathematical Foundations
- Language: en
- Key Concepts: geodesic, Gaussian curvature, Riemann curvature tensor, Fisher metric, Jacobian, charts, Tangent and Cotangent Spaces, atlas, Hopf–Rinow theorem, Gauss-Bonnet theorem, Levi-Civita connection, covariant derivative, geodesically complete, Geodesics and the Exponential Map, length
- References: complex-analysis, convex-optimization, functional-analysis, manifold-learning, math/algebraic-topology, math/analysis-geometry/information-geometry, math/non-euclidean-geometry, math/topology-basics, math/variational-calculus
- Backlinks: asymptotic-spacetime, complex-analysis, course-math-for-ai, fluid-dynamics-navier-stokes, goldstone-modes, gravitational-waves-gr, group-theory, hyperbolic-vol-geometry, lie-groups, manifold, manifold-learning, many-body-tensor-networks, math/algebraic-topology, morse-theory, qft-curved-spacetime, semimartingales-on-manifolds, special-relativity, stochastic-manifolds, string-theory-calabi-yau

## Entity: math/harmonic-analysis
- Title: Harmonic Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: The Gibbs phenomenon, heat equation, Riesz-Thorin interpolation theorem, The $L^1 \cap L^2$ Theory: Plancherel's Theorem, Concluding Remarks, Schrödinger equation, Plancherel's theorem, Information-Theoretic Connections, Marcinkiewicz interpolation theorem, The Uncertainty Principle, Parseval's formula, The Schwartz Space and Tempered Distributions, Applications: Heat Equation and Spectral Theory, convolution theorem, Fourier series
- References: complex-analysis, finance/shannon-entropy, functional-analysis, math/information-theory, math/lp-spaces, math/spectral-theory-operators, partial-differential-equations, sobolev-spaces

## Entity: math/ode-stability
- Title: ODE Theory and Lyapunov Stability
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Phase Plane Analysis, asymptotically stable, Lyapunov Stability, Stable subspace:, Peano's Theorem, Applications, Center:, Existence and Uniqueness of Solutions, Hopf Bifurcation, Hartman-Grobman Theorem, Lyapunov Functions in Linear Systems, Spectral Classification, Theorem (Lyapunov Asymptotic Stability Theorem)., Subspaces:, Stable [[manifold-learning|Manifold]] Theorem
- References: convex-optimization, functional-analysis, manifold-learning, math/geometric-ergodicity, math/spectral-theory-operators, math/variational-calculus, neural-odes, stochastic-control, stochastic-differential-equations

## Entity: math/spectral-theory-operators
- Title: Spectral Theory of Operators
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Quantum mechanics, Applications, Principal Component Analysis (PCA), Spectral Theorem, Continuous spectrum, spectral theorem, Fredholm Alternative, Singular Value Decomposition (SVD), References, resolvent, Spectrum and Resolvent, Classification of Spectrum, Spectrum of Markov Operators, Spectral clustering, Fredholm alternative
- References: functional-analysis, math/lp-spaces, math/markov-chain-mixing, math/spectral-representation-processes, partial-differential-equations, schrodinger-equation, sobolev-spaces, spectral-graph-theory
- Backlinks: algebraic-geometry-slt, algebraic-topology-persistent, ar-models, attention-linear-kernel, brownian-bridge, change-of-basis, conic-sections, eigendecomposition-vs-svd, eigenvalues-eigenvectors, finance/cointegration, finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, fluid-dynamics-navier-stokes, functional-analysis-c-star, geometry-loss-landscapes, geometry-of-attention, gnn-weisfeiler-lehman, gradient-hessian-jacobian, graph-curvature-oversquashing, graph-theory, hilbert-banach-spaces, information-geometry-nn, kernel-methods-rkhs, laplacian, linear-algebra, math/functional-analysis, math/harmonic-analysis, math/kolmogorov-equations-ctmc, math/local-limit-theorems, math/markov-chain-mixing, math/ode-stability, matrix-decompositions, mechanistic-interpretability-sae, morse-theory, multivariable-calculus, multivariable-taylor-series, neural-ode-stability, neural-operators-fno, nonlinear-shrinkage, normalization-layers-math, number-theory-l-functions, optimization-basics, pca, pinns-convergence, portfolio-optimization-ml, positive-definite-matrices, quantum-computing-vqe, quantum-information-entropy, quantum-mechanics, quantum-phase-estimation, random-matrices, random-matrix-theory-marchenko, random-walks-groups, renormalization-group, spectral-clustering, spectral-graph-theory, spectral-theorem-unbounded, spin-glasses-hopfield, state-space-models, weight-initialization-signal

## Entity: math/topology-basics
- Title: Topology and Metric Spaces
- Category: Mathematical Foundations
- Language: en
- Key Concepts: metric space, Tychonoff's Theorem, closure, Applications, Polish Spaces and Probability, converges, Triangle inequality, Universal Results, $\mathbb{R}^n$ with Euclidean metric, Heine–Borel Theorem, Baire Category Theorem, metric, Symmetry, Compactness Criterion, Polish space
- References: convex-analysis, functional-analysis, math/sigma-algebra-measurability, math/skorokhod-topology, math/weak-convergence-prokhorov, sobolev-spaces
- Backlinks: complex-analysis, manifold, math/algebraic-topology, math/differential-geometry, math/hausdorff-measure, topological-phases

## Entity: math/borel-cantelli-zero-one
- Title: Borel-Cantelli Lemmas and Zero-One Laws
- Category: Measure Theory
- Language: en
- Key Concepts: dichotomy, The Borel-Cantelli lemmas, $\limsup$, Proof, Connection to ergodic theory, Connection to information theory, Theorem., Borel-Cantelli Lemmas and Zero-One Laws, infinite, Lemma 2 (reverse Borel-Cantelli)., "stationary" features, Bernoulli shifts, Lemma 1 (Borel-Cantelli)., ergodicity, Theorem (Kolmogorov 0-1 law, 1933).
- References: brownian-motion, characteristic-functions, law-iterated-logarithm, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: math/branching-processes, math/glivenko-cantelli, math/law-of-large-numbers, math/lebesgue-integral, math/poisson-approximation

## Entity: math/cameron-martin-formula
- Title: Cameron-Martin Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: mutually singular, Applications, deterministic special case, shifts Wiener measure by a deterministic function, Abstract Wiener Spaces, Wiener measure zero, Theorem (Feldman-Hajek)., Connection to Girsanov's Theorem, Large Deviations: Freidlin-Wentzell Theory, natural domain for rate functions, The Theorem, Definition., Importance sampling., abstract Wiener space, Cameron-Martin space
- References: brownian-motion, finance/girsanov-semimartingales, math/absolute-continuity-process-measures, math/conditional-expectation-sigma, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/sigma-algebra-measurability
- Backlinks: math/absolute-continuity-process-measures, math/gaussian-process-sample-paths, math/sde-numerical-methods, math/sequential-hypothesis-testing, math/stratonovich-integral

## Entity: math/conditional-expectation-sigma
- Title: Conditional Expectation w.r.t. a σ-Algebra
- Category: Measure Theory
- Language: en
- Key Concepts: Claim (Radon-Nikodym)., Martingale property, measurable with respect to $\mathcal{G}$, average, Tower of total expectation, In finance, regular conditional probability, Properties, Definition., Related Articles, Motivation: conditioning on a null event, Tower property, "Pull out what is known", martingale, Connection to martingales
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, kalman-filter, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/cameron-martin-formula, math/cramer-rao-bound, math/discrete-martingales, math/doob-meyer-decomposition, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/predictable-compensator, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/differentiation-of-measures
- Title: Differentiation of Measures
- Category: Measure Theory
- Language: en
- Key Concepts: The Calderón–Zygmund Decomposition, The Besicovitch Covering Lemma, Proof of the Lebesgue Theorem via the Maximal Function, Differentiation of Measures, Besicovitch covering lemma, The Vitali Covering Theorem, pairwise almost disjoint, Several-variable theory, Radon–Nikodym theorem, Marcinkiewicz interpolation, Theorem:, Stochastic calculus, symmetric derivative, Geometric measure theory, upper density
- References: functional-analysis, math/absolute-continuity-process-measures, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure

## Entity: math/glivenko-cantelli
- Title: Glivenko-Cantelli Theorem and Empirical Processes
- Category: Measure Theory
- Language: en
- Key Concepts: Dvoretzky-Kiefer-Wolfowitz (1956) inequality, distribution-free, Machine learning., Applications, Kolmogorov distribution, Glivenko-Cantelli Theorem and Empirical Processes, class of sets, Bootstrap validity., Theorem (Glivenko 1933, Cantelli 1933)., Proof sketch, The theorem, learning theory, Nonparametric statistics., The empirical CDF, Donsker classes
- References: brownian-motion, central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/weak-convergence-prokhorov
- Backlinks: math/borel-cantelli-zero-one, math/kernel-density-estimation

## Entity: math/hausdorff-measure
- Title: Hausdorff Measure and Fractal Dimension
- Category: Measure Theory
- Language: en
- Key Concepts: $s$-dimensional $\delta$-approximation to Hausdorff measure, countably additive regular measure, Iterated Function System (IFS), Besicovitch covering theorem, General Case: Borel Sets, $\delta$-Approximation to Hausdorff Measure, Normalization Constant, Hausdorff Dimension, Self-Similar Sets and Hutchinson's Theorem, Besicovitch Covering Theorem, References and Further Reading, countable disjoint cover, Box-counting dimension, $\mathcal{H}^s$-measurable, Introduction
- References: brownian-motion, math/differentiation-of-measures, math/lebesgue-integral, math/product-measures-fubini, math/sigma-algebra-measurability, math/topology-basics, radon-nikodym

## Entity: math/kolmogorov-probability-axioms
- Title: Kolmogorov's Probability Axioms
- Category: Measure Theory
- Language: en
- Key Concepts: Axiom 1 (non-negativity)., crucial, What follows, Historical significance, probability measure, smaller, Axiom 3 (countable additivity, σ-additivity)., impossible, invariant under interpretation, The basic construction, Continuity from above and below:, Kolmogorov's Probability Axioms, rigorously, Why a σ-algebra, discrete
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/ftap-first-fundamental-theorem, math/conditional-expectation-sigma, math/godel-incompleteness, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: bayesian-deep-learning, causal-inference, convex-analysis, course-math-for-ai, gaussian-processes, math/borel-cantelli-zero-one, math/central-limit-theorem, math/conditional-expectation-sigma, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-equations-ctmc, math/large-deviations-cramer, math/law-of-large-numbers, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, math/weak-convergence-prokhorov, measure-theory, radon-nikodym, variational-autoencoders

## Entity: math/lp-spaces
- Title: L^p Spaces
- Category: Measure Theory
- Language: en
- Key Concepts: Cauchy–Schwarz inequality, Banach space, weak $L^p$ space, Hölder's Inequality, Minkowski's inequality, inner product, Hölder's inequality, The Space $L^\infty$ and Essential Supremum, essential supremum, Weak $L^p$ Spaces and Marcinkiewicz Interpolation, Riesz representation theorem, Marcinkiewicz Interpolation Theorem, Riesz–Fischer Theorem, Related Concepts, complete normed vector space
- References: functional-analysis, math/conditional-expectation-sigma, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym, sobolev-spaces
- Backlinks: course-math-for-ai, hilbert-banach-spaces, math/differentiation-of-measures, math/harmonic-analysis, math/high-dimensional-statistics, math/lebesgue-integral, math/signed-measures, math/spectral-theory-operators, measure-theory, random-matrices

## Entity: math/lebesgue-integral
- Title: Lebesgue Integral
- Category: Measure Theory
- Language: en
- Key Concepts: Fubini's theorem, Lebesgue Integral, simple functions, $L^1$ as a Banach Space, References, Monotonicity, Approximation Results, Related Concepts, Additivity, integrable, Homogeneity, Monotone Convergence Theorem (MCT), Comparison with Riemann Integration, Dominated Convergence Theorem (DCT), Simple Functions and Elementary Integration
- References: math/borel-cantelli-zero-one, math/conditional-expectation-sigma, math/lp-spaces, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: course-math-for-ai, math/differentiation-of-measures, math/hausdorff-measure, math/lp-spaces, math/product-measures-fubini, math/signed-measures, measure-theory

## Entity: math/product-measures-fubini
- Title: Product Measures and Fubini's Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: Integration order:, Infinite Product Measures and Kolmogorov Extension Theorem, Necessity of Integrability, Kolmogorov Extension Theorem., Theorem (Tonelli)., Convolution., Tensor Products in Hilbert Spaces, product measure, Proof sketch:, Key observation:, Existence and Uniqueness of Product Measure, If $f \geq 0$, Convolution and Characteristic Functions, Remark:, Measurability:
- References: characteristic-functions, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure, math/lebesgue-integral, math/regular-conditional-probability

## Entity: radon-nikodym
- Title: Radon-Nikodym Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: measure derivatives, Theorem., Radon-Nikodym Theorem, Conditional Expectation, Girsanov Theorem and Measure Change, Lebesgue Decomposition, Definition., density, Essential properties:, Radon-Nikodym multiplicative functional, Risk-Neutral Pricing., σ-finiteness:, The Radon-Nikodym Theorem, Uniqueness:, Proof sketch (Hilbert space method).
- References: finance/girsanov-semimartingales, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optimal-transport
- Backlinks: math/differentiation-of-measures, math/hausdorff-measure, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/signed-measures, measure-theory

## Entity: math/regular-conditional-probability
- Title: Regular Conditional Probability
- Category: Measure Theory
- Language: en
- Key Concepts: conditionally independent given $C$, Theorem (Borel):, measure disintegration, Gaussian Conditional Distributions, Conditional expectation property, Disintegration of Measures, References and Further Reading, Markov Kernels and Stochastic Processes, Existence and Uniqueness, likelihood kernel, Bayes' formula, Markov processes, Theorem (Disintegration on Polish Spaces):, Probability measure in the first argument, conditional probability kernel
- References: math/conditional-expectation-sigma, math/density-processes, math/kolmogorov-probability-axioms, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/signed-measures
- Title: Signed Measures and Decomposition Theorems
- Category: Measure Theory
- Language: en
- Key Concepts: Banach space, Jordan Decomposition, Hahn Decomposition Theorem, Complex Measures, measure change process, $\sigma$-finite measures, Proof sketch, Theorem (Hahn)., [[absolute-continuity-process-measures|Absolute Continuity of Processes and Measures]], [[contiguity-measures|Contiguity of Measures]], Lebesgue Decomposition, Radon–Nikodym derivative, Definition., likelihood ratio, upper and lower variations
- References: math/absolute-continuity-process-measures, math/contiguity-measures, math/density-processes, math/hellinger-processes, math/lebesgue-integral, math/lp-spaces, radon-nikodym

## Entity: math/sigma-algebra-measurability
- Title: σ-Algebras and Measurability
- Category: Measure Theory
- Language: en
- Key Concepts: disjoint, π-system, Measurable functions, Stochastic integral, Closure under countable unions, adapted, σ-algebra generated by $X$, smallest, strictly before, partition, Adaptedness, Predictability, Connection to information theory, standard, can distinguish
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms
- Backlinks: course-math-for-ai, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/conditional-expectation-sigma, math/differentiation-of-measures, math/discrete-martingales, math/doob-meyer-decomposition, math/hausdorff-measure, math/hellinger-processes, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/topology-basics, measure-theory, radon-nikodym

## Entity: cross-impact
- Title: Cross-Impact Models
- Category: Microstructure
- Language: en
- Key Concepts: Related Topics, Diagonal elements, Cross-Impact Matrix, Market factor, Cross-Impact, Positive Semi-Definite (PSD), Cross-Impact Models in Microstructure, eigen-space, Eigen-Impact and Risk Models, Visualization: The Cross-Impact Network, Sector factors, Mathematical Formulation, The No-Arbitrage Condition, The Mechanism of Cross-Impact, Direct Impact
- References: eigenvalues-eigenvectors, finance/random-matrix-theory, kyle-model, market-impact, optimal-execution
- Backlinks: lead-lag-analysis, market-impact, multivariate-hawkes

## Entity: finance/dark-pools
- Title: Dark Pools and Market Fragmentation
- Category: Microstructure
- Language: en
- Key Concepts: Herfindahl-Hirschman Index, Types of Dark Pools, Dark Pools, Dark Pools and Market Fragmentation, Related Articles, MiFID II Double Volume Cap (EU), Market Fragmentation, Implementation
- References: finance/kyle-lambda, finance/pin-easley-ohara, optimal-execution, vpin

## Entity: deep-lob
- Title: Deep LOB (Order Book CNNs)
- Category: Microstructure
- Language: en
- Key Concepts: Convolutional Neural Networks (CNNs), Related Topics, Visualization: The CNN sliding over LOB, Spoofing Detection, Liquidity Void Detection, Latency, Deep LOB, The Network Architecture, FPGAs, LSTMs, Deep LOB: Convolutional Networks for the Order Book, Stationarity, Inception Modules (CNNs), Output, Limit Order Book (LOB)
- References: finance/order-flow-imbalance, modern-quantization, queue-reactive-models
- Backlinks: market-microstructure

## Entity: glosten-milgrom
- Title: Glosten-Milgrom Model
- Category: Microstructure
- Language: en
- Key Concepts: sell, Informed, Liquidity Externalities, Related Topics, bid-ask spread, Bid-Ask Spread, Bid Price ($P_B$), Visualization: Spread and Information, Ask Price ($P_A$), Noise, Adverse Selection, Price Discovery, The Mathematical Mechanism, Key Takeaways, The Bid-Ask Spread
- References: kyle-model, vpin
- Backlinks: latency-arbitrage, roll-model, spread, vpin

## Entity: lead-lag-analysis
- Title: High-Frequency Lead-Lag Analysis
- Category: Microstructure
- Language: en
- Key Concepts: Negative $\theta$, Related Topics, Lead-Lag Analysis, Cross-Correlation Function, Order Flow Execution, Hayashi-Yoshida (HY) Estimator, Positive $\theta$, The Epps Effect, High-Frequency Lead-Lag Analysis, Why Citadel cares, HMM Regime Detection, Finding the Lag ($\theta$), Mathematical Detection: The Hayashi-Yoshida Estimator, Latency Arbitrage, Visualization: Lag Peak
- References: cross-impact, hmm-particle-filters, latency-arbitrage, vpin
- Backlinks: multivariate-hawkes

## Entity: finance/kyle-lambda
- Title: Kyle's Lambda: The Price Impact Coefficient
- Category: Microstructure
- Language: en
- Key Concepts: Equilibrium $\lambda$, Empirical Estimation, Kyle's Model (1985), market depth decreases toward the close, Insider, Kyle's Lambda, basis points per million USD, Almgren-Chriss Impact Decomposition, Applications, Related Articles, market depth, Extensions, Market depth, Noise traders, Multi-Period Extension
- References: amihud-illiquidity, avellaneda-stoikov, finance/order-flow-imbalance, optimal-execution, vpin
- Backlinks: finance/dark-pools, finance/order-flow-imbalance, finance/pin-easley-ohara, finance/repo-market-systemic, finance/vwap-twap, market-microstructure, spread

## Entity: latency-arbitrage
- Title: Latency Arbitrage and Frequent Batch Auctions
- Category: Microstructure
- Language: en
- Key Concepts: Visualization: The HFT Race, widening the bid-ask spread, The Liquidity Tax, The Solution: Frequent Batch Auctions (FBA), Related Topics, single clearing price, Why FBA fixes the market:, Removes the Liquidity Tax, footrace, Continuous Limit Order Book (CLOB), Latency Arbitrage and Frequent Batch Auctions, The Flaw of Continuous Time, Frequent Batch Auctions, Adverse Selection via Latency, Kills the Footrace
- References: glosten-milgrom, smart-order-routing
- Backlinks: lead-lag-analysis, mev

## Entity: market-impact
- Title: Market Impact and Square-root Law
- Category: Microstructure
- Language: en
- Key Concepts: Meta-order Slicing, Market Impact and the Square-root Law, Latent Liquidity, 2. The Square-root Law, Why is this surprising?, Information Discovery, 1. Permanent vs. Temporary Impact, Illiquid, Square-root Law, 4. Impact in Advanced Trading, Cause, 3. Price Discovery as Physics, Cross-Impact Matrix, Visualization: Impact vs. Order Size, Price Discovery
- References: cross-impact, lob-propagators, optimal-execution, smart-order-routing, vpin
- Backlinks: cross-impact, kyle-model, lob-propagators, market-microstructure, spread

## Entity: lob-propagators
- Title: Mechanical Price Discovery: Propagators
- Category: Microstructure
- Language: en
- Key Concepts: Related Topics, Permanent Impact, transient and mechanical, Mechanical Price Discovery and Propagator Models, Mechanical vs. Informational, The Efficiency Condition, Visualization: Response to a Trade, mechanical, Propagator function, Mean Reversion (Decay), Propagator models, The Meaning of G(τ), The Propagator Equation, Immediate Impact, sign of the trade
- References: finance/hawkes-process, market-impact
- Backlinks: market-impact, queue-reactive-models

## Entity: multivariate-hawkes
- Title: Multivariate Hawkes Processes
- Category: Microstructure
- Language: en
- Key Concepts: Excitation Matrix, Diagonal elements ($\alpha_{ii}$), Multivariate Hawkes Process, Related Topics, Micro-Price Prediction, Off-diagonal elements ($\alpha_{ij}$), The Cross-Excitation Network, The Intensity Matrix, Multivariate Hawkes Processes: Micro-Contagion, Flash Crash Detection, Application in Algorithmic Trading, Visualization: The Excitation Impulse, cross-excitation, Market Making
- References: cross-impact, finance/hawkes-process, lead-lag-analysis

## Entity: liquidation-signals
- Title: Optimal Liquidation with Alpha Signals
- Category: Microstructure
- Language: en
- Key Concepts: Optimal Liquidation with Signals, The Optimal Strategy: Drift-Adjusted Schedulling, Related Topics, LOB Imbalance, The Augmented Objective Function, Alpha Signals, Key Signals used in Modern Desks, Visualization: Signal-Driven Slicing, Urgency, Optimal Liquidation with Alpha Signals, Trade Flow (Hawkes), Cross-Asset Signals, Opportunistic Execution
- References: finance/order-flow-imbalance, optimal-execution, vpin

## Entity: finance/order-flow-imbalance
- Title: Order Flow Imbalance and Microprice
- Category: Microstructure
- Language: en
- Key Concepts: Multi-Level OFI, Order Flow Imbalance and Microprice, Microprice, Related Articles, LOB-Based Definition, Motivation, Spread-Normalized Skew, Stoikov's Generalised Microprice (2018), Order Flow Imbalance, Predictive Performance, Order Flow Imbalance (OFI), Implementation, Predictive Model
- References: avellaneda-stoikov, finance/hawkes-process, finance/kyle-lambda, lob-prediction, vpin
- Backlinks: deep-lob, finance/kyle-lambda, finance/vwap-twap, liquidation-signals, market-microstructure, queue-reactive-models

## Entity: vpin
- Title: Order Flow Toxicity and VPIN
- Category: Microstructure
- Language: en
- Key Concepts: "Volume Time.", Easley, Lopez de Prado, and O'Hara, 4. Why it Matters for AI and HFT, 2. VPIN: The Mechanism, Informed Traders, Order Flow Toxicity, High VPIN (> 0.8), C. The VPIN Formula, Noise Traders, 3. Interpretation and Usage, Order Flow Toxicity and VPIN, A. Volume Bucketing, Regime Detection, The Flash Crash (2010), B. Order Imbalance
- References: finance/pin-easley-ohara, glosten-milgrom, hmm-particle-filters, optimal-execution
- Backlinks: finance/dark-pools, finance/kyle-lambda, finance/order-flow-imbalance, finance/pin-easley-ohara, glosten-milgrom, kyle-model, lead-lag-analysis, liquidation-signals, market-impact, optimal-execution, roll-model

## Entity: finance/pin-easley-ohara
- Title: PIN: Probability of Informed Trading
- Category: Microstructure
- Language: en
- Key Concepts: Game structure:, PIN vs VPIN, PIN (Probability of Informed Trading), Related Articles, PIN: Probability of Informed Trading, Implementation, Single-day likelihood, EKOP Model, PIN
- References: finance/kyle-lambda, roll-model, vpin
- Backlinks: finance/dark-pools, market-microstructure, vpin

## Entity: queue-reactive-models
- Title: Queue-Reactive Models (LOB Dynamics)
- Category: Microstructure
- Language: en
- Key Concepts: these rates depend strongly on the current size of the queues, Why HFTs Use It, Related Topics, Market Orders, The Micro-Price, Limit Orders (Arrivals), Queue-Reactive Models, The "Reactive" Insight, Visualization: Transition Intensities, The Physics of the Queue, Cancellations, Queue-Reactive Models of the Limit Order Book, Limit Order Book (LOB), Micro-Price, Market Making
- References: finance/hawkes-process, finance/order-flow-imbalance, lob-propagators
- Backlinks: deep-lob

## Entity: smart-order-routing
- Title: Smart Order Routing (SOR)
- Category: Microstructure
- Language: en
- Key Concepts: Liquidity Aggregation:, How SOR Works, SOR in Decentralized Finance (DeFi), Related Topics, Multi-hop Paths:, Dynamic Execution:, MEV Protection:, Best Execution, Smart Order Routing (SOR), Gas Optimization:, Dark Pools, SOR in Traditional Finance (CeFi), Price & Volume Analysis:, slippage
- References: market-microstructure
- Backlinks: amm-mechanics, asset-tokenization, cedefi-mechanics, course-cedefi, cross-chain-interop, latency-arbitrage, market-impact, mev, yield-aggregators

## Entity: kyle-model
- Title: The Kyle Model
- Category: Microstructure
- Language: en
- Key Concepts: Related Topics, Market Depth, Strategic Slowing, The Three Players, Price Discovery, Market Maker (MM), Noise Traders, The Kyle Model: Strategic Informed Trading, The Equilibrium Solution, Informed Trader, informed trader, slowly and linearly, market liquidity, Visualization: Insider Hiding, Kyle's Lambda ($\lambda$)
- References: market-impact, optimal-execution, vpin
- Backlinks: cross-impact, glosten-milgrom

## Entity: roll-model
- Title: The Roll Model
- Category: Microstructure
- Language: en
- Key Concepts: Visualization: The Bouncing Price, Related Topics, effective bid-ask spread, Effective Spread, 3. Why it Matters, Roll Estimator, The Roll Model: Estimating the Effective Spread, Zero Covariance, Low-Frequency Data, Hidden Costs, 1. The Bid-Ask Bounce, 2. The Mathematical Derivation, Informed Trading, 4. Limitations in Modern Markets, negatively correlated
- References: amihud-illiquidity, glosten-milgrom, vpin
- Backlinks: finance/pin-easley-ohara

## Entity: finance/vwap-twap
- Title: VWAP and TWAP Execution Algorithms
- Category: Microstructure
- Language: en
- Key Concepts: TWAP, VWAP (Volume-Weighted Average Price), Market VWAP, Implementation, Participation algorithm, VWAP and TWAP Execution Algorithms, VWAP, Related Articles, Implementation Shortfall, TWAP (Time-Weighted Average Price)
- References: avellaneda-stoikov, finance/kyle-lambda, finance/order-flow-imbalance, optimal-execution

## Entity: kuramoto-model
- Title: Kuramoto Model
- Category: Nonlinear Dynamics
- Language: en
- Key Concepts: Feature Binding:, Visualization of Synchronization, Artificial Intelligence, Overview, complex order parameter, 2. Adversarial Robustness, Finance Applications, phase transition, Mathematical Framework, Incoherence, Finance, 1. Market Synchronization & Crises, 2. Systemic Risk, Kuramoto Model, AI Applications
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
- Key Concepts: Overview, Mathematical Basis (Cooley-Tukey)

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
- Key Concepts: Mechanism, Overview

## Entity: momentum-optimization
- Title: Momentum in Optimization
- Category: Optimization
- Language: en
- Key Concepts: Update Rule, Overview

## Entity: regularization-math
- Title: Regularization
- Category: Optimization
- Language: en
- Key Concepts: L1 and L2, L1 (Lasso):, Overview, L2 (Ridge):

## Entity: sgd-variants
- Title: Stochastic Gradient Descent
- Category: Optimization
- Language: en
- Key Concepts: Variants, Adam:, Vanilla SGD:, Overview, RMSProp:
- References: convex-optimization

## Entity: weight-initialization
- Title: Weight Initialization
- Category: Optimization
- Language: en
- Key Concepts: He (Kaiming) Initialization:, Overview, Techniques, Xavier/Glorot Initialization:

## Entity: ads-cft
- Title: AdS/CFT & Holographic Principle
- Category: Physics
- Language: en
- Key Concepts: holographic principle, The Ryu-Takayanagi formula, Why AdS/CFT is trusted, Impact, Anti-de Sitter space, Related Topics, AdS/CFT & Holographic Principle, $\mathcal N = 4$ super Yang-Mills theory with gauge group $SU(N)$, The holographic idea, timelike boundary, Maldacena's conjecture, Beyond AdS: celestial holography, entanglement [[gravitational-entropy|entropy]], [[celestial-holography]], AdS/CFT
- References: black-hole-soft-hair, bms-group, celestial-holography, conformal-field-theory, general-relativity, gravitational-entropy, hawking-radiation, information-paradox, large-gauge-transformations, pasterski-triangle, soft-theorems
- Backlinks: black-hole-thermodynamics, gravitational-entropy, hawking-radiation, information-paradox

## Entity: anomalies
- Title: Anomalies
- Category: Physics
- Language: en
- Key Concepts: anomaly-free, Why anomalies matter, Gauge anomalies and the Standard Model, Anomalies, anomaly, trace anomaly, Scale / trace anomaly, exact, non-renormalisation theorem, The chiral anomaly, gauge, Anomalously, Explicitly, anomaly matching, The general picture
- References: gauge-theory-yang-mills, goldstone-modes, noether-theorem, path-integral, renormalization-group, ward-identities
- Backlinks: math/banach-tarski, renormalization-group

## Entity: asymptotic-spacetime
- Title: Asymptotic Spacetime
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Connections to Information Theory & Holography, Visualization, Conformal structure, Theoretical Foundation, Mathematical Formulation, Peeling property, Vacuum degeneracy, Bondi-Sachs mass loss, Key Properties, Asymptotic Spacetime, ADM mass
- References: asymptotic-symmetries, bms-group, celestial-holography, math/differential-geometry
- Backlinks: gravitational-waves-gr, math/non-euclidean-geometry, scattering-amplitudes

## Entity: asymptotic-symmetries
- Title: Asymptotic Symmetries
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Infinite vacuum degeneracy, Connections to Information Theory & Holography, Electromagnetic analogy, Visualization, Matching conditions, Theoretical Foundation, Asymptotic Symmetries, Mathematical Formulation, Superrotation charges, Key Properties, Large vs. small gauge transformations
- References: bms-group, celestial-holography, soft-theorems
- Backlinks: asymptotic-spacetime, black-hole-soft-hair, bms-group, celestial-holography, goldstone-modes, group-theory, information-paradox, large-gauge-transformations, noether-theorem, pasterski-triangle, pauli-exclusion-quantization, soft-theorems, ward-identities

## Entity: bms-group
- Title: BMS Group
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Goldstone interpretation, Infinite vacuum degeneracy, Connections to Information Theory & Holography, Visualization, Prerequisites, BMS Group, Celestial sphere action, Theoretical Foundation, Memory effect, Mathematical Formulation, Key Properties, Ward identity = Soft theorem
- References: asymptotic-symmetries, celestial-holography, group-theory, pasterski-triangle
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, conformal-field-theory, gravitational-waves-gr, group-theory, large-gauge-transformations, math/non-euclidean-geometry, noether-theorem, pasterski-triangle, spin-memory, ward-identities

## Entity: information-paradox
- Title: Black Hole Information Paradox
- Category: Physics
- Language: en
- Key Concepts: Information is lost., Replica wormholes and the island formula, Open questions, Black hole complementarity, Related Topics, Black Hole Information Paradox, black hole information paradox, unitary, The Page curve, Soft hair, Page curve, Why it matters, Remnants., The island formula, Statement of the paradox
- References: ads-cft, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, general-relativity, gravitational-entropy, hawking-radiation, pasterski-triangle, path-integral, qft-basic
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, hawking-radiation, large-gauge-transformations, math/godel-incompleteness

## Entity: black-hole-soft-hair
- Title: Black Hole Soft Hair
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Electromagnetic hair, Horizon vs. infinity, Connections to Information Theory & Holography, Prerequisites, The Area Law of [[gravitational-entropy|Entropy]], Visualization: [[gravitational-entropy|Entropy]] Scaling, Theoretical Foundation, Mathematical Formulation, Infinite degeneracy, Key Properties, Zero energy, Black Hole Soft Hair, Limitations
- References: asymptotic-symmetries, bms-group, celestial-holography, gravitational-entropy, gravitational-memory, soft-theorems
- Backlinks: ads-cft, information-paradox, large-gauge-transformations, memory-effects, quantum-entanglement, spin-memory

## Entity: black-hole-thermodynamics
- Title: Black Hole Thermodynamics
- Category: Physics
- Language: en
- Key Concepts: holographic principle, 1st, Entropy vs Mass Chart, firewall, Black Hole Thermodynamics, Bekenstein-Hawking entropy, generalised second law, The Firewall Paradox, Connection to Holography, 3rd, Penrose process, irreducible mass, Hawking's Area Theorem (Second Law), 0th, Bekenstein-Hawking [[gravitational-entropy|Entropy]]
- References: ads-cft, general-relativity, gravitational-entropy, gravitational-waves-gr, hawking-radiation, information-paradox
- Backlinks: ads-cft-deep, gravitational-entropy, hawking-radiation, quantum-information-entropy

## Entity: celestial-holography
- Title: Celestial Holography
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, Lorentz = global conformal group, Key Properties, See Also, Continuous spectrum, Connections to Information Theory & Holography, Loop corrections, Prerequisites, Visualization, Celestial Holography, Theoretical Foundation, Soft theorems as Ward identities, Mathematical Formulation, $w_{1+\infty}$ symmetry
- References: asymptotic-symmetries, bms-group, conformal-field-theory, gravitational-entropy, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, bms-group, conformal-field-theory, gravitational-entropy, gravitational-waves-gr, group-theory, information-paradox, large-gauge-transformations, math/non-euclidean-geometry, pasterski-triangle, qft-basic, scattering-amplitudes, soft-theorems, spin-memory, wave-particle-duality

## Entity: conformal-field-theory
- Title: Conformal Field Theory (CFT)
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Connections to Information Theory & Holography, Prerequisites, Unitarity bounds, Theoretical Foundation, Conformal blocks, Modular invariance, State-operator correspondence, Mathematical Formulation, Key Properties, Cardy formula, Conformal Field Theory (CFT)
- References: bms-group, celestial-holography, gravitational-entropy, group-theory, qft-basic, quantization, schrodinger-equation
- Backlinks: ads-cft, ads-cft-deep, celestial-holography, kan, renormalization-group, sle

## Entity: dirac-equation
- Title: Dirac Equation
- Category: Physics
- Language: en
- Key Concepts: Clifford algebra, Dirac equation, Spin $\tfrac{1}{2}$., Dirac spinor, Coupling to gauge fields, positrons, quantum field, Dirac Equation, As a field theory, Predictions, Dirac's problem, Gyromagnetic ratio $g = 2$., Chirality and the Standard Model, left-handed, right-handed
- References: gauge-theory-yang-mills, maxwell-electromagnetism, pauli-exclusion-quantization, qft-basic, schrodinger-equation, special-relativity
- Backlinks: gauge-theory-yang-mills, maxwell-electromagnetism

## Entity: fokker-planck-equation
- Title: Fokker-Planck Equation
- Category: Physics
- Language: en
- Key Concepts: heat equation, Fokker-Planck equation (FP), Stationary distribution, Ornstein-Uhlenbeck process, Direct simulation:, Computational methods, Fokker-Planck equation, forward equation (FP), Derivation from the Kramers-Moyal expansion, Multidimensional generalization, Finite differences:, Application to option pricing, Finite elements:, Heat equation as a special case, Path integral representation
- References: brownian-motion, geometric-brownian-motion, math/kolmogorov-equations-ctmc, ornstein-uhlenbeck-process, partial-differential-equations, path-integral, stochastic-differential-equations
- Backlinks: diffusion-models, feynman-kac, neural-operators, nonequilibrium-statmech

## Entity: gauge-theory-yang-mills
- Title: Gauge Theory & Yang-Mills
- Category: Physics
- Language: en
- Key Concepts: BRST symmetry, Why gauge theory is inevitable, Related Topics, confines, gauge bosons are charged under the gauge symmetry and interact with each other, Massless spin-1 particles must couple through a conserved current., Asymptotic freedom and confinement, global, ghost fields, Gauge Theory & Yang-Mills, asymptotic freedom, Quantisation: Faddeev-Popov and BRST, Gauge theories, Renormalisability., The three forces of the Standard Model
- References: dirac-equation, goldstone-modes, maxwell-electromagnetism, noether-theorem, path-integral, qft-basic, renormalization-group, ward-identities
- Backlinks: anomalies, connections-curvature, dirac-equation, large-gauge-transformations, lie-groups-algebras, maxwell-electromagnetism, renormalization-group, topological-phases

## Entity: goldstone-modes
- Title: Goldstone Modes
- Category: Physics
- Language: en
- Key Concepts: Goldstone Modes, massless modes, effective Lagrangian, Goldstone's theorem, Weinberg soft theorems, pseudo-Goldstone bosons, non-linear sigma model, gauged, Effective field theory of Goldstones, Sketch of the proof., Physical examples, Soft theorems and the asymptotic connection, Nambu-Goldstone bosons, The Higgs mechanism: eating Goldstones, soft-pion theorem
- References: asymptotic-symmetries, math/differential-geometry, noether-theorem, pasterski-triangle, qft-basic, soft-theorems, ward-identities
- Backlinks: anomalies, gauge-theory-yang-mills, large-gauge-transformations

## Entity: gravitational-entropy
- Title: Gravitational Entropy and Holography
- Category: Physics
- Language: en
- Key Concepts: holographic principle, Bousso-Engelhardt, island, The Island Formula, Gravitational Entropy and Holography, The Bekenstein Bound, Holography Beyond AdS, The Holographic Principle, The Generalised Second Law, Bousso bound, The Page Curve, Quantum Extremal Surfaces and Emergent Spacetime, Page curve, not, After the Page time
- References: ads-cft, black-hole-thermodynamics, celestial-holography, general-relativity, hawking-radiation, information-paradox
- Backlinks: ads-cft, black-hole-soft-hair, black-hole-thermodynamics, celestial-holography, conformal-field-theory, hawking-radiation, information-paradox, laws-of-thermodynamics, nonequilibrium-statmech, pauli-exclusion-quantization, quantum-entanglement, quantum-information-entropy, statistical-mechanics, uncertainty-principle

## Entity: gravitational-memory
- Title: Gravitational Memory
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Key Properties, Detectable, Connections to Information Theory & Holography, Prerequisites, Spin memory, Theoretical Foundation, DC offset, Gravitational Memory, Supertranslation transition, Mathematical Formulation, Two types
- References: gravitational-waves-gr, memory-effects, pasterski-triangle, soft-theorems
- Backlinks: black-hole-soft-hair, gravitational-waves-gr, memory-effects, spin-memory

## Entity: gravitational-waves-gr
- Title: Gravitational Waves & General Relativity
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Key Properties, Connections to Information Theory & Holography, Quadrupole emission, Strain sensitivity, Peeling, Theoretical Foundation, Speed, Mathematical Formulation, Gravitational Waves & General Relativity (GR), Two polarizations
- References: asymptotic-spacetime, bms-group, celestial-holography, gravitational-memory, math/differential-geometry, pasterski-triangle
- Backlinks: black-hole-thermodynamics, gravitational-memory, hawking-radiation, math/non-euclidean-geometry

## Entity: group-theory
- Title: Group Theory
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Connections to Information Theory & Holography, Applications in Machine Learning, Visualization, Representation theory of the Poincaré group, Spontaneous symmetry breaking, Group Theory in Physics, Schur's lemma, Theoretical Foundation, Mathematical Formulation, Anomalies, Peter-Weyl theorem, Key Properties
- References: asymptotic-symmetries, bms-group, celestial-holography, equivariant-nn, math/differential-geometry, quantum-entanglement
- Backlinks: bms-group, conformal-field-theory, equivariant-nn, noether-theorem, qft-basic

## Entity: hawking-radiation
- Title: Hawking Radiation
- Category: Physics
- Language: en
- Key Concepts: In-modes, Related Topics, trans-Planckian problem, Unruh effect, Hawking Radiation, Hawking Temperature, Black Hole Evaporation, evaporation timescale, The Trans-Planckian Problem, Planck spectrum, Out-modes, Connection to the Unruh Effect, Bogoliubov transformation, Why This Matters, Virtual Pair Production Near the Horizon
- References: ads-cft, black-hole-thermodynamics, general-relativity, gravitational-entropy, gravitational-waves-gr, information-paradox
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, information-paradox

## Entity: uncertainty-principle
- Title: Heisenberg Uncertainty Principle
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Connections to Information Theory & Holography, Fourier duality, Measurement backaction, Zero-point energy, Theoretical Foundation, Canonical pairs, Mathematical Formulation, Heisenberg Uncertainty Principle, Key Properties, Generalized uncertainty principle (GUP)
- References: gravitational-entropy, quantum-entanglement, schrodinger-equation, wave-particle-duality
- Backlinks: wave-particle-duality

## Entity: kolmogorov-arnold-theorem
- Title: Kolmogorov-Arnold Theorem
- Category: Physics
- Language: en
- Key Concepts: Kolmogorov-Arnold theorem, Kolmogorov-Arnold Theorem, Hilbert's thirteenth problem, Implications for neural networks, Interpretation., Symbolic regression., Non-smoothness of inner functions., learnable univariate functions on edges, Why it matters, a number of neurons that grows with accuracy, independently of $f$, curse of dimensionality, not smooth, Non-constructive., Decomposition of complexity.
- References: finance/spectral-analysis, kan, learnable-activations, partial-differential-equations, pinns, transformer-architecture
- Backlinks: kan, learnable-activations

## Entity: large-gauge-transformations
- Title: Large Gauge Transformations
- Category: Physics
- Language: en
- Key Concepts: Small vs. large, Spontaneous symmetry breaking of large gauge, Related Topics, Asymptotic charges, large, Large gauge transformations, [[bms-group|BMS]] group, strong CP problem, asymptotic charges, spontaneously broken, Large Gauge Transformations, Large gauge in non-abelian theories and instantons, small, Large gauge on the horizon: soft hair, Why this is a big deal
- References: asymptotic-symmetries, black-hole-soft-hair, bms-group, celestial-holography, gauge-theory-yang-mills, goldstone-modes, information-paradox, memory-effects, noether-theorem, pasterski-triangle, soft-theorems, ward-identities
- Backlinks: ads-cft

## Entity: maxwell-electromagnetism
- Title: Maxwell's Electromagnetism
- Category: Physics
- Language: en
- Key Concepts: From Maxwell to QED, Maxwell's equations, Energy, momentum, and radiation, Related Topics, $U(1)$ gauge symmetry, Electromagnetic waves, displacement current, Maxwell's Electromagnetism, Potentials and gauge invariance, Lorentz force, Liénard-Wiechert potentials, The equations, quantum electrodynamics (QED), Bianchi identity, Covariant formulation
- References: dirac-equation, gauge-theory-yang-mills, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes, soft-theorems, special-relativity, ward-identities
- Backlinks: dirac-equation, gauge-theory-yang-mills

## Entity: memory-effects
- Title: Memory Effects
- Category: Physics
- Language: en
- Key Concepts: Infrared origin, Physical Interpretation, Key Properties, Universality, See Also, Memory Effects, Connections to Information Theory & Holography, Visualization, Prerequisites, Hierarchy, Detectability, Theoretical Foundation, Mathematical Formulation, Vacuum transitions
- References: black-hole-soft-hair, gravitational-memory, pasterski-triangle, soft-theorems, spin-memory
- Backlinks: gravitational-memory, large-gauge-transformations, spin-memory

## Entity: noether-theorem
- Title: Noether's Theorem
- Category: Physics
- Language: en
- Key Concepts: Bianchi identities, Ward identities, Related Topics, The dictionary of symmetries and charges, Example: electric charge from global phase symmetry, global, large gauge transformations, Ward-Takahashi identities, Noether's Theorem, Global vs. local symmetries, Statement, Local, Example: energy from time-translation invariance, conserved current, Noether's theorem
- References: asymptotic-symmetries, bms-group, group-theory, hamiltonian-mechanics, lagrangian-mechanics, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, math/variational-calculus, maxwell-electromagnetism, path-integral, ward-identities

## Entity: partial-differential-equations
- Title: Partial Differential Equations
- Category: Physics
- Language: en
- Key Concepts: identifying, Schrödinger equation, Wave equation, Neumann, Mesh-based vs mesh-free., Initial conditions, Elliptic, Fokker-Planck equation, stiff, Canonical equations of physics, Navier-Stokes boundary layers:, Finite elements (FEM)., Spectral bias in PINNs:, Solution methods, Heat equation
- References: automatic-differentiation, brownian-motion, finance/fractional-fokker-planck, pinns, schrodinger-equation
- Backlinks: automatic-differentiation, convertible-bonds, feynman-kac, fokker-planck-equation, fourier-neural-operators, fredholm-theory, hydrodynamic-limits, kolmogorov-arnold-theorem, math/harmonic-analysis, math/spdes, math/spectral-theory-operators, mckean-vlasov-sdes, neural-operators, numerical-pde-finance, pinns, risk-neutral-valuation, schwartz-distributions

## Entity: pasterski-triangle
- Title: Pasterski's Triangle Theory
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, Universal, Key Properties, Sub-subleading, Pasterski's Triangle Theory, See Also, Subleading triangle, Leg 3 — Memory Effects $\leftrightarrow$ Soft Theorems (Fourier transform):, Connections to Information Theory & Holography, Prerequisites, Cross-theory, Theoretical Foundation, Mathematical Formulation, Leg 2 — Asymptotic Symmetries $\leftrightarrow$ Memory Effects (vacuum transitions):, Quantum level
- References: asymptotic-symmetries, bms-group, celestial-holography, scattering-amplitudes, soft-theorems, spin-memory
- Backlinks: ads-cft, bms-group, goldstone-modes, gravitational-memory, gravitational-waves-gr, information-paradox, large-gauge-transformations, memory-effects, soft-theorems, ward-identities

## Entity: path-integral
- Title: Path Integral Formulation
- Category: Physics
- Language: en
- Key Concepts: Feynman diagrams, Non-perturbative physics., Caveats, Ward identities, lattice QFT, ghost fields, Quantum gravity., Path Integral Formulation, Symmetries are transparent., Why the path integral, Field theory, The basic idea, The classical limit, classical trajectory, Related Topics
- References: hamiltonian-mechanics, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes
- Backlinks: anomalies, feynman-kac, fokker-planck-equation, gauge-theory-yang-mills, information-paradox, path-integrals, renormalization-group, statistical-mechanics, ward-identities

## Entity: pauli-exclusion-quantization
- Title: Pauli Exclusion Principle & Quantization
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Connections to Information Theory & Holography, Cooper pairs, Exchange interaction, Pauli Exclusion Principle & [[quantization]], Fermi pressure, Anyons, Theoretical Foundation, Mathematical Formulation, Key Properties, Atomic shell structure
- References: asymptotic-symmetries, gravitational-entropy, quantization, quantum-entanglement
- Backlinks: dirac-equation, qft-basic

## Entity: qft-basic
- Title: QFT: Basic Level
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Key Properties, Connections to Information Theory & Holography, CPT theorem, Spontaneous symmetry breaking, Crossing symmetry, Prerequisites, Theoretical Foundation, Quantum Field Theory (QFT): Basic Level, Mathematical Formulation, Optical theorem, Renormalization
- References: celestial-holography, finance/monte-carlo-method, group-theory, pauli-exclusion-quantization, quantization, scattering-amplitudes, schrodinger-equation, wave-particle-duality
- Backlinks: conformal-field-theory, dirac-equation, equivariant-nn, finance/monte-carlo-method, gauge-theory-yang-mills, goldstone-modes, information-paradox, kan, maxwell-electromagnetism, path-integral, quantum-mechanics, renormalization-group, statistical-mechanics, ward-identities

## Entity: quantum-entanglement
- Title: Quantum Entanglement
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Entanglement distillation, Entanglement as resource, Connections to Information Theory & Holography, Quantum Entanglement, Theoretical Foundation, Non-locality, Monogamy, Mathematical Formulation, Key Properties, Area law
- References: black-hole-soft-hair, finance/random-matrix-theory, finance/shannon-entropy, gravitational-entropy, schrodinger-equation, superposition-collapse
- Backlinks: finance/random-matrix-theory, finance/shannon-entropy, finance/zeta-field, group-theory, linear-spaces-basis, pauli-exclusion-quantization, quantum-information-entropy, quantum-mechanics, superposition-collapse, uncertainty-principle

## Entity: renormalization-group
- Title: Renormalization Group
- Category: Physics
- Language: en
- Key Concepts: Scalar $\phi^4$., universality, Wilsonian RG transformation, Renormalization Group, fixed point, Marginal, asymptotic freedom, asymptotically safe, Wilson's idea, Fixed points and universality, beta function, The Callan-Symanzik equation, Continuum limits and effective field theory, QCD., Relevant
- References: anomalies, conformal-field-theory, gauge-theory-yang-mills, math/spectral-theory-operators, path-integral, qft-basic, ward-identities
- Backlinks: anomalies, effective-field-theory, gauge-theory-yang-mills, many-body-tensor-networks

## Entity: scattering-amplitudes
- Title: Scattering Amplitudes & S-matrix
- Category: Physics
- Language: en
- Key Concepts: Scattering Amplitudes & S-matrix, Physical Interpretation, See Also, Connections to Information Theory & Holography, Collinear limits, On-shell methods, Color decomposition, Theoretical Foundation, BCJ duality and double copy, Mathematical Formulation, Soft limits, Key Properties
- References: asymptotic-spacetime, celestial-holography, soft-theorems
- Backlinks: celestial-holography, equivariant-nn, maxwell-electromagnetism, pasterski-triangle, path-integral, qft-basic, soft-theorems

## Entity: soft-theorems
- Title: Soft Theorems
- Category: Physics
- Language: en
- Key Concepts: Infrared divergences, Physical Interpretation, See Also, Universality, Connections to Information Theory & Holography, Color, Soft Theorems, Prerequisites, Theoretical Foundation, Mathematical Formulation, Quantum corrections, Key Properties, Soft photon vs. graviton
- References: asymptotic-symmetries, celestial-holography, pasterski-triangle, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-symmetries, black-hole-soft-hair, goldstone-modes, gravitational-memory, large-gauge-transformations, maxwell-electromagnetism, memory-effects, noether-theorem, pasterski-triangle, scattering-amplitudes, ward-identities

## Entity: spin-memory
- Title: Spin Memory
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Subleading order, Connections to Information Theory & Holography, Superrotation Ward identity, Circular orbit detection, Prerequisites, Amplitude, Spin Memory, Angular momentum signature, Theoretical Foundation, Mathematical Formulation, Key Properties
- References: black-hole-soft-hair, bms-group, celestial-holography, gravitational-memory, memory-effects
- Backlinks: memory-effects, pasterski-triangle

## Entity: statistical-mechanics
- Title: Statistical Mechanics
- Category: Physics
- Language: en
- Key Concepts: Annealing and optimization, Diffusion models, [[gravitational-entropy|Entropy]] and information, Introduction, principle of minimum free energy, Applications to machine learning, Summary, Grand canonical ensemble, the macroscopic state of an equilibrium system is completely described by a probabilistic ensemble, Canonical ensemble, Gibbs [[gravitational-entropy|entropy]], Microcanonical ensemble, Wick rotation and connection to quantum mechanics, Boltzmann distribution, Energy-based models
- References: finance/shannon-entropy, gravitational-entropy, math/ergodic-theorems-birkhoff, path-integral, qft-basic
- Backlinks: bayesian-deep-learning, convergence-of-semimartingales, copulas, energy-based-models, freidlin-wentzell-theory, gaussian-processes, maximum-entropy, nonequilibrium-statmech, sle, variational-autoencoders, wentzell-freidlin

## Entity: superposition-collapse
- Title: Superposition & Collapse
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Connections to Information Theory & Holography, Pointer states, Superposition & Collapse, Theoretical Foundation, Quantum Zeno effect, Mathematical Formulation, No-cloning theorem, Key Properties, Linearity, Macroscopic superpositions
- References: quantum-entanglement, schrodinger-equation
- Backlinks: quantum-entanglement

## Entity: ward-identities
- Title: Ward Identities
- Category: Physics
- Language: en
- Key Concepts: Asymptotic symmetries and soft theorems, Ward Identities, Anomalies, every soft theorem in scattering is a Ward identity of an asymptotic symmetry, Subleading soft-graviton theorem, Ward identities, anomaly, Weinberg's soft-graviton theorem, From classical conservation to exact quantum identities, Unphysical polarisations of the photon decouple., The basic identity, Ward identities for gauge symmetries: Slavnov-Taylor, Chiral anomaly, $Z_1 = Z_2$, Related Topics
- References: asymptotic-symmetries, bms-group, noether-theorem, pasterski-triangle, path-integral, qft-basic, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, maxwell-electromagnetism, renormalization-group

## Entity: wave-particle-duality
- Title: Wave-Particle Duality
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Connections to Information Theory & Holography, Thermal de Broglie wavelength, Complementarity, Theoretical Foundation, Delayed-choice experiments, Coherence length, Mathematical Formulation, Matter-wave interferometry, Key Properties, Wave-Particle Duality
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
- Key Concepts: Second Law:, Third Law:, First Law (Conservation of Energy):, Zeroth Law:, The Four Laws
- References: gravitational-entropy

## Entity: maxwells-equations
- Title: Maxwell's Equations
- Category: Physics Foundations
- Language: en
- Key Concepts: Faraday's Law:, Ampère-Maxwell Law:, Differential Form, Overview, Gauss's Law:, Gauss's Law for Magnetism:
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
- Key Concepts: expected growth across all possible values of $\mu$, mathematical justification for Fractional Kelly, The Bayesian Solution, Related Topics, Fractional Kelly as a Heuristic, Bayesian Kelly, Bayesian Kelly Criterion and Parameter Uncertainty, Visualization: The Kelly Cliff, Posterior Distribution, The Flaw of Plug-in Estimates, Drawdown Control
- References: kelly-criterion, merton-portfolio, variational-inference
- Backlinks: bayesian-inference, kelly-jump-diffusion

## Entity: entropy-pooling
- Title: Entropy Pooling (Meucci)
- Category: Portfolio
- Language: en
- Key Concepts: The Core Concept: Minimum Relative [[shannon-entropy|Entropy]], Kullback-Leibler (KL) Divergence, Related Topics, [[shannon-entropy|Entropy]] Pooling, normally distributed, The Optimization Problem, Posterior, Why Tier-1 Funds Use It, Prior, Convex Optimization, Stress Testing, [[shannon-entropy|Entropy]] Pooling: Advanced Portfolio Construction, Visualization: Shifting the Distribution, Ranking Signals, Options and Non-Linearities
- References: bayesian-black-litterman, convex-optimization-trading, finance/shannon-entropy, financial-entropy
- Backlinks: information-geometry-finance

## Entity: kelly-jump-diffusion
- Title: Kelly Criterion with Jump-Diffusion
- Category: Portfolio
- Language: en
- Key Concepts: Why Funds Use Fractional Kelly, Related Topics, Visualization: The Jump-Aware Curve, The Danger of Continuous Leverage, Geometric Brownian Motion (GBM), Jump-Diffusion Kelly, jumps, Jumps, Kelly Criterion in Jump-Diffusion Models, The Modified Kelly Formula, The Bankruptcy Constraint, negative infinity, The Jump-Diffusion Setup, You are bankrupt.
- References: bayesian-kelly, frtb-es, kelly-criterion, merton-jump-diffusion, merton-portfolio

## Entity: merton-portfolio
- Title: Merton's Portfolio Problem
- Category: Portfolio
- Language: en
- Key Concepts: Kelly Criterion, Related Topics, Key Insights from the Formula:, Merton's Portfolio Problem, The Mathematical Setup, The Elegant Solution, Visualization: The Optimal Path, Risk Adjustment, Solving via the HJB Equation, constant, Risky Asset (Stock), Hamilton-Jacobi-Bellman (HJB) Equation, Myopic Behavior, Kelly Criterion Limit, Risk Premium
- References: geometric-brownian-motion, kelly-criterion, stochastic-control, stochastic-differential-equations
- Backlinks: bayesian-kelly, kelly-jump-diffusion, path-integral-control

## Entity: nonlinear-shrinkage
- Title: Nonlinear Shrinkage of Covariance
- Category: Portfolio
- Language: en
- Key Concepts: The Eigenvalue Distortion (Marchenko-Pastur), Linear Shrinkage (2004), Related Topics, sample covariance matrix, Transaction Costs, Nonlinear Shrinkage of Covariance (Ledoit-Wolf), Linear vs. Nonlinear Shrinkage, Visualization: Eigenvalue Cleaning, Stability, Robustness, each eigenvalue, Random Matrix Theory (RMT), Nonlinear Shrinkage (2017), Why Citadel Uses It, Nonlinear Shrinkage
- References: eigenvalues-eigenvectors, finance/markowitz-mean-variance, finance/random-matrix-theory, math/spectral-theory-operators

## Entity: universal-portfolios
- Title: Universal Portfolios
- Category: Portfolio
- Language: en
- Key Concepts: Related Topics, sublinear regret, best constant-rebalanced portfolio (BCRP), The Problem Setup, Constant-Rebalanced Portfolio (CRP), Visualization: Catching the Optimum, Practical Limitations, MCMC sampling, Universal Portfolios, Universal Portfolios (Cover's Algorithm), The Guarantee (No Regret), Cover's Algorithm, ensemble method
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
- Key Concepts: See Also, 1. Black-Litterman Formula, Portfolio Optimization & Black-Litterman Model
- References: convex-optimization-in-trading, course-quant-trading, quant-risk-management-var-cvar
- Backlinks: convex-optimization-in-trading, copula-models-and-tail-dependence, factor-investing-and-fama-french, portfolio-risk-decomposition-marginal-var

## Entity: finance/bs-market-self-financing
- Title: (B,S)-Market and Self-Financing Strategies
- Category: Pricing
- Language: en
- Key Concepts: self-financing strategy, capital, Admissibility, discrete stochastic integral, Definition., admissible, Connection to the broader theory, Bank account, Risky assets, Strategy and Capital, discounted, Self-Financing, Related Articles, (B,S)-Market and Self-Financing Strategies, The Model
- References: brownian-motion, finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/self-similarity-fractality, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability, put-call-parity

## Entity: finance/apt-ross
- Title: Arbitrage Pricing Theory (APT)
- Category: Pricing
- Language: en
- Key Concepts: first, alternative to [[capm|CAPM]], Weakness: choice of factors, Main statement, which, Related Articles, Proof (idea), uncorrelated across assets, APT theorem (Ross 1976; Huberman 1982)., Setup, no asymptotic arbitrage in a large market, factor zoo problem, Arbitrage Pricing Theory (APT), most assets, weaker but more universal
- References: fama-macbeth-regression, finance/alpha-stacking, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/markowitz-mean-variance

## Entity: finance/arbitrage-definition
- Title: Arbitrage and Its Absence
- Category: Pricing
- Language: en
- Key Concepts: arbitrage-free, discounted, NA1 / NUPBR (No Unbounded Profit with Bounded Risk), Geometrically., Arbitrage and Its Absence, Why bother: the first fundamental theorem, Via the set of attainable claims., main filter, A note on realism, modelling axiom, Definition 2., Equivalent Formulations, arbitrage opportunity, first fundamental theorem of financial mathematics (FTAP), NFLVR (No Free Lunch with Vanishing Risk)
- References: finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models
- Backlinks: cost-of-carry, finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/crr-model, finance/ftap-first-fundamental-theorem

## Entity: finance/asymptotic-arbitrage-large-markets
- Title: Asymptotic Arbitrage and Large Markets
- Category: Pricing
- Language: en
- Key Concepts: asymptotic arbitrage, Definition (AA of the first kind)., asymptotic arbitrage of the first kind, equivalence, Definition., large financial market, Practical significance, Definition (AA of the second kind)., The large market, statistical arbitrage, asymptotic arbitrage of the second kind, Model convergence and contiguity, model convergence, Theorem (Kabanov-Kramkov, 1994)., Asymptotic arbitrage
- References: black-scholes, fama-macbeth-regression, finance/alpha-stacking, finance/arbitrage-definition, finance/crr-model, finance/ftap-first-fundamental-theorem
- Backlinks: finance/apt-ross, finance/arbitrage-definition, math/weak-convergence-prokhorov

## Entity: finance/asymptotic-expansion-finance
- Title: Asymptotic Expansions in Finance
- Category: Pricing
- Language: en
- Key Concepts: Singular Perturbation: Fast Mean-Reverting Stochastic Vol, Asymptotic and perturbation methods, Analytic Greeks, Comparison of Methods, Smile extrapolation, Model intuition, Large/Small Strike Asymptotics (Lee's Moment Formula), The SABR Formula (Hagan-Woodward), Prerequisites, Small-Time Expansion for Local Volatility, Asymptotic Expansions in Finance, Practical Applications, asymptotic expansion in the vol-of-vol $\nu$ and time $T$, Related Topics, geodesic volatility
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/dupire-local-vol, finance/sabr-model, heston-model, manifold-learning
- Backlinks: finance/sabr-model

## Entity: avellaneda-stoikov
- Title: Avellaneda-Stoikov Model
- Category: Pricing
- Language: en
- Key Concepts: Arithmetic Brownian motion, Cartea & Jaimungal, Symmetric arrival rates, Skewing, Constant parameters, Time effect, Avellaneda-Stoikov model, Symmetry, Guéant, Lehalle & Fernandez-Tapia (2013), FX Spot Market Making, Mathematical Framework, The Optimal Spread, Reservation Price vs. Inventory, Model Setup, Limitations & Extensions
- References: brownian-motion, cox-process, finance/monte-carlo-method, hidden-markov-models, optimal-execution
- Backlinks: brownian-motion, cox-process, finance/hidden-markov-models, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/order-flow-imbalance, finance/vwap-twap, market-microstructure, spread, stochastic-control

## Entity: finance/bachelier-formula
- Title: Bachelier Formula
- Category: Pricing
- Language: en
- Key Concepts: April 2020 episode, Historical significance, "everything in Black-Scholes is already in Bachelier", Bachelier as the "small-vol limit" of BS, arithmetic Brownian motion, Related Articles, complete, Bachelier's model, naturally, Derivation, historical predecessor, 73 years, can become negative, Bachelier Formula, When to use it
- References: attention-mechanisms, black-scholes, brownian-motion, finance/black-scholes-derivations, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, geometric-brownian-motion
- Backlinks: blacks-model, finance/black-scholes-derivations, finance/efficient-market-hypothesis

## Entity: finance/barrier-asian-options
- Title: Barrier and Asian Options
- Category: Pricing
- Language: en
- Key Concepts: Asian Options, Geometric Asian, Barrier option types:, Down-and-Out Call, Barrier Options, Rubinstein-Reiner Formula (Down-and-Out Call, $H < K$), Arithmetic Asian Call, Related Articles, Exotic options, Implementation, Barrier and Asian Options
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/variance-gamma
- Backlinks: brownian-bridge, finance/upper-lower-hedging-prices

## Entity: blacks-model
- Title: Black's Model (1976)
- Category: Pricing
- Language: en
- Key Concepts: Commodity options, Applications, caplet, shifted, futures and forward contracts, Shifted Lognormal Model, normal, Interest rate derivatives, Black's model, Calibration input, The Black Formula, Black's Model for Caplets, cap, Implied Volatility Conventions, payer swaption
- References: black-scholes, finance/bachelier-formula, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/sabr-model, finance/swaps, finance/volatility-surface, heston-model
- Backlinks: cost-of-carry, risk-neutral-valuation

## Entity: black-scholes
- Title: Black-Scholes Model
- Category: Pricing
- Language: en
- Key Concepts: heat equation, No dividends, Geometric Brownian Motion, Continuous hedging, Interest rate risk, Mathematical Framework, Stochastic volatility, Vanilla Options Trading, Delta Hedging, Limitations & Extensions, Volatility smile/skew, Jump risk, Convertible Bond Pricing, Parameter Table, Closed-Form Pricing Formulas
- References: brownian-motion, exotic-options, finance/monte-carlo-method, finance/sabr-model, geometric-brownian-motion, heston-model, numerical-pde-finance
- Backlinks: arma-models, automatic-differentiation, bayesian-black-litterman, blacks-model, brownian-motion, change-of-variables, convertible-bonds, convex-optimization-trading, deep-galerkin, dv01, fama-macbeth-regression, feynman-kac, finance/asymptotic-arbitrage-large-markets, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/barrier-asian-options, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/credit-risk-models, finance/crr-model, finance/delta-hedging-practice, finance/dispersion-trading, finance/energy-commodity-derivatives, finance/follmer-schweizer, finance/free-boundary-american, finance/girsanov-semimartingales, finance/heston-model, finance/levy-esscher-continuous, finance/libor-market-model, finance/longstaff-schwartz, finance/merton-jump-diffusion, finance/monte-carlo-method, finance/nelson-siegel-svensson, finance/optimal-stopping-american, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/stefan-problem-american, finance/swaps, finance/variance-swaps-vix, finance/volatility-surface, garman-kohlhagen, geometric-brownian-motion, greeks-options, lln-clt, math/martingale-representation, ml-options-pricing, model-free-rl-factors, multivariable-calculus, numeraire-invariant-hedging, numerical-pde-finance, option-strategies, ornstein-uhlenbeck-process, pinns, put-call-parity, regime-switching-factors, risk-neutral-valuation, sharpe-ratio-statistics, survival-risk-prediction, svi-model, taylor-series, ts-cs-factor-analysis, volatility-arbitrage, volatility-smile

## Entity: finance/bond-options-gaussian
- Title: Bond Options in Gaussian Models
- Category: Pricing
- Language: en
- Key Concepts: exactly the [[black-scholes|Black-Scholes formula]], one-factor Gaussian models, observed zero-coupon yield curve, calibrated, forward measure, spot martingale measure, Zero-coupon bond price, asset, Distribution., discount rate, The Vasicek model, Jacobs-Jones formula (1986), The Hull-White model, Connection to multi-factor models, HJM framework
- References: black-scholes, brownian-motion, dv01, finance/cir-hull-white, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american
- Backlinks: finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/interest-rate-term-structure, finance/libor-market-model, finance/short-rate-models, finance/stefan-problem-american

## Entity: finance/bootstrapping-yield-curve
- Title: Bootstrapping the Yield Curve
- Category: Pricing
- Language: en
- Key Concepts: Interpolation Methods, Yield Curve Shape, Short End: Deposits (O/N to 12M), Model calibration, Input Instruments, Projection curve, Dual-Curve Stripping (Post-2008), Monotone convex, Middle: Futures or FRAs (3M to 2Y), Prerequisites, Curve Sensitivities (Jacobian), Discounting curve, Bootstrapping the Yield Curve, Yield curve bootstrapping, turn-of-year jumps
- References: finance/bond-options-gaussian, finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, libor-market-model
- Backlinks: finance/nelson-siegel-svensson, finance/swaps, multi-curve-framework

## Entity: finance/capm
- Title: CAPM (Capital Asset Pricing Model)
- Category: Pricing
- Language: en
- Key Concepts: beta remains the standard risk metric, CAPM (Capital Asset Pricing Model), Conditional CAPM., Beta vs. return, CAPM, Beta as a risk metric, Derivation from Markowitz, Empirical critique, relative market capitalizations, Homogeneity assumption, starting point, alpha, Security Market Line (SML), [[ftap-first-fundamental-theorem|FTAP]], CAPM vs. APT vs. FTAP
- References: fama-macbeth-regression, finance/apt-ross, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: finance/apt-ross, finance/efficient-market-hypothesis, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/caps-floors-swaptions
- Title: Caps, Floors and Swaptions
- Category: Pricing
- Language: en
- Key Concepts: Interest rate options, Cap-Floor Parity, caplet, Black's Formula for Swaptions, Cap vol surface, Calibration of Term Structure Models, floor, The Volatility Cube, Caps, Floors and Swaptions, Hull-White to Caps, SOFR transition, floorlet, Prerequisites, Strike dimension, LIBOR Market Model
- References: black-scholes, finance/bond-options-gaussian, finance/sabr-model, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, cost-of-carry, finance/change-of-numeraire, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/change-of-numeraire
- Title: Change of Numeraire
- Category: Pricing
- Language: en
- Key Concepts: The Fundamental Theorem, Evaluate, The Swap Measure and Swaptions, Practical Recipe, Choose the numeraire, Application to caplets., Compute the Radon-Nikodym derivative, change of numeraire, Change of Numeraire, Prerequisites, Radon-Nikodym Derivative Between Measures, Drift Change via Girsanov, Identify the payoff, numeraire, quanto adjustment
- References: black-scholes, brownian-motion, finance/caps-floors-swaptions, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/complete-incomplete-markets
- Title: Complete and Incomplete Markets. Second Fundamental Theorem
- Category: Pricing
- Language: en
- Key Concepts: Examples of complete and incomplete markets, What to do on an incomplete market, Theorem., either a single point, equivalent martingale measure is unique, $\Leftarrow$ (uniqueness $\Rightarrow$ completeness)., Complete:, Definition., Minimal martingale measure, Second Fundamental Theorem, Pricing a claim, Related Articles, complete, incomplete, Mean-square error minimization
- References: finance/bs-market-self-financing, finance/crr-model, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion, heston-model, optional-decomposition
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/crr-model, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: convertible-bonds
- Title: Convertible Bonds
- Category: Pricing
- Language: en
- Key Concepts: conversion condition, Python: Binomial Tree Pricing, Conversion Ratio, Busted, Applications, Reduced-Form Credit Model, Corporate funding, Pricing Approaches, Soft call (conditional call), Gamma, Credit mispricing, Credit-equity relative value, Equity-like, The Credit-Equity Correlation Problem, puttable convertible
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/xva, heston-model, partial-differential-equations
- Backlinks: numerical-pde-finance

## Entity: finance/copula-models
- Title: Copula Models
- Category: Pricing
- Language: en
- Key Concepts: Sklar's Theorem, Student-t, Tail Dependence Coefficients, Copula Estimation, Limitations:, Stationarity, Clayton copula, Gumbel, Copula, Frank, Estimation noise, Portfolio VaR, Mathematical Framework, Gaussian Copula, Dimensionality
- References: cornish-fisher-cvar, cox-process, extreme-value-theory, finance/value-at-risk, finance/xva

## Entity: cost-of-carry
- Title: Cost of Carry
- Category: Pricing
- Language: en
- Key Concepts: No short-selling constraints, Applications, Index futures fair value, arbitrage, fair value, Contango, Futures vs Forwards: Convexity Adjustment, Cost of Carry Components, Reverse cash-and-carry, Forward Curves and Term Structure, Backwardation, cost of carry, Commodity Markets, The General Formula, FX forwards
- References: blacks-model, finance/arbitrage-definition, finance/caps-floors-swaptions, finance/swaps, finance/xva, risk-neutral-valuation
- Backlinks: finance/swaps

## Entity: finance/crr-model
- Title: Cox-Ross-Rubinstein Binomial Model (CRR)
- Category: Pricing
- Language: en
- Key Concepts: No-arbitrage condition, working tool, Replicating portfolio (hedging), Martingale measure, Cox-Ross-Rubinstein Binomial Model (CRR), Convergence to Black-Scholes, European option price, Related Articles, true, complete, Claim., binomial formula, Why this matters in practice, discrete delta hedging, Model
- References: black-scholes, finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/black-scholes-derivations, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/stefan-problem-american, math/central-limit-theorem, math/discrete-markov-chains, math/optimal-stopping-markov, math/weak-convergence-prokhorov

## Entity: finance/delta-hedging-practice
- Title: Delta Hedging in Practice
- Category: Pricing
- Language: en
- Key Concepts: The Ideal, Leland (1985) Adjusted Volatility, Vega Hedging and Greeks-Neutral Portfolios, Practical Challenges, The Cost of Rebalancing, Model Risk, Discrete Rebalancing Error, no-transaction band, Hedging Error vs Rebalancing Frequency, Gamma scalping, Continuous vs Discrete Hedging, Gamma Scalping, Greeks-neutral portfolio, Transaction Costs and Leland's Adjustment, Gamma risk
- References: black-scholes, finance/variance-swaps-vix, finance/volatility-surface, greeks-options, heston-model, option-strategies
- Backlinks: deep-hedging, greeks-options

## Entity: finance/discrete-girsanov-esscher
- Title: Discrete Girsanov and the Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: Discrete Girsanov: the conditionally Gaussian case, Conditional Esscher., Idea., Discrete Girsanov and the Esscher Transform, Esscher, A note on incomplete markets, Esscher transform, mean shift, Girsanov, arbitrary, The Esscher transform: general case, Why have both, minimum Esscher measure, Related Articles, how
- References: finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion
- Backlinks: finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous

## Entity: finance/dupire-local-vol
- Title: Dupire Local Volatility Model
- Category: Pricing
- Language: en
- Key Concepts: calibrated once, Local Vol vs Stochastic Vol, Dupire Local Volatility Model, Related Articles, Dupire Equation, Implementation, Local Volatility (Dupire, 1994)
- References: finance/rough-volatility, finance/sabr-model, finance/variance-swaps, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/black-scholes-derivations, finance/variance-swaps, finance/volatility-surface, lsv-model, volatility-smile

## Entity: finance/efficient-market-hypothesis
- Title: Efficient Market Hypothesis (EMH)
- Category: Pricing
- Language: en
- Key Concepts: Herding and bubbles, EMH, Critique and revision, Efficient Market Hypothesis (EMH), Connection to the martingale property, January effect, at any moment financial asset prices fully reflect all available information, Excess volatility, Three forms, martingale, Weak form., under the original measure, constant effort by inefficient traders, publicly available, evolutionarily adaptive
- References: brownian-motion, fama-macbeth-regression, finance/apt-ross, finance/bachelier-formula, finance/capm, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: causal-inference, finance/apt-ross, finance/capm, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/energy-commodity-derivatives
- Title: Energy & Commodity Derivatives
- Category: Pricing
- Language: en
- Key Concepts: option on the spread, Contango, Backwardation, Seasonality, Price floor at zero, equilibrium price, Energy & Commodity Derivatives, Electricity Markets, Prerequisites, short-term deviation, Regime switching, non-storable, convenience yield, Schwartz One-Factor Model, Weather Derivatives
- References: black-scholes, brownian-motion, finance/levy-processes, finance/optimal-stopping-american, finance/real-options, finance/swaps
- Backlinks: finance/real-options

## Entity: finance/ftap-first-fundamental-theorem
- Title: First Fundamental Theorem (FTAP)
- Category: Pricing
- Language: en
- Key Concepts: Proof idea: necessity ($\Rightarrow$), geometric, conditional Esscher transforms, Statement (discrete case), Pricing a derivative via the martingale measure, Continuous time: NFLVR, The crucial point:, equivalent martingale measure, Proof idea: sufficiency ($\Leftarrow$), Historical note, Theorem (Harrison-Pliska, 1981; Dalang-Morton-Willinger)., Related Articles, fails, First Fundamental Theorem (FTAP), risk-neutral measure
- References: finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/apt-ross, finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/capm, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/efficient-market-hypothesis, finance/girsanov-semimartingales, finance/optimal-stopping-american, finance/self-similarity-fractality, finance/semimartingale-models, finance/stefan-problem-american, finance/upper-lower-hedging-prices, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optional-decomposition, risk-neutral-valuation

## Entity: finance/free-boundary-american
- Title: Free Boundary Problem for American Options
- Category: Pricing
- Language: en
- Key Concepts: perpetual, Boundary Conditions, Perpetual American Put, Finite Horizon: No Closed Form, Connection to Optimal Stopping, Real options, Finite Differences (PDE), smooth pasting, free boundary problem, American options, Mortgage prepayment, Prerequisites, Binomial Tree (CRR), Smooth Pasting Conditions, Problem Formulation
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/longstaff-schwartz, finance/monte-carlo-method
- Backlinks: finance/optimal-stopping-american

## Entity: garman-kohlhagen
- Title: Garman-Kohlhagen Model
- Category: Pricing
- Language: en
- Key Concepts: ATM Conventions, Corporate hedging, Setup and Assumptions, Garman-Kohlhagen (GK) model, Premium-Adjusted Delta, Central bank intervention, Emerging market FX, Volatility Smile: Risk Reversals and Butterflies, Delta Conventions, Put-Call Symmetry in FX, Garman-Kohlhagen Greeks, 25-delta risk reversal, Forward Delta, 25-delta butterfly, Vanna-Volga Method
- References: black-scholes, greeks-options, heston-model, option-strategies, put-call-parity
- Backlinks: option-strategies, put-call-parity

## Entity: finance/girsanov-semimartingales
- Title: Girsanov's Theorem for Semimartingales
- Category: Pricing
- Language: en
- Key Concepts: Novikov's condition, density process, The semimartingale version, re-intensify, The classical Brownian case, Application to Black-Scholes, unchanged, Novikov's condition and its analogues, Theorem (Jacod-Mémin)., incompleteness, shifts Brownian motion by a drift, the same, drift $B$ and jump compensator $\nu$ change, the quadratic variation $C$ is preserved, what exactly
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/levy-esscher-continuous, finance/semimartingale-models, finance/shannon-entropy, heston-model
- Backlinks: feynman-kac, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/change-of-numeraire, finance/discrete-girsanov-esscher, finance/hjm-framework, finance/levy-esscher-continuous, finance/semimartingale-models, finance/short-rate-models, innovation-process, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/conditional-expectation-sigma, math/contiguity-measures, math/convergence-stochastic-integrals, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, nonlinear-filtering, radon-nikodym, risk-neutral-valuation

## Entity: finance/hjm-framework
- Title: HJM Framework
- Category: Pricing
- Language: en
- Key Concepts: HJM drift restriction, Negative rates, The LIBOR Market Model Connection, Infinite-dimensional state, HJM Framework, Volatility specification, Prerequisites, Markovian HJM: Ritchken-Sankarasubramanian, Computational cost, Key Result, Heath-Jarrow-Morton (HJM) framework, Practical Limitations, finite-dimensional Markov process, Related Topics, Bond Price Dynamics
- References: brownian-motion, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps, stochastic-differential-equations

## Entity: finance/heston-model
- Title: Heston Model
- Category: Pricing
- Language: en
- Key Concepts: Carr-Madan FFT Pricing, characteristic function, Asset Distribution, Negative correlation constraint, Rough volatility, Volatility surface interpolation, Parameters, The Feller Condition, Prerequisites, Structured products, Python: Path Simulation and Option Pricing, Volatility Dynamics Visualization, Background, Heston Model, Heston model
- References: black-scholes, finance/particle-filter, finance/sabr-model, garch-models, geometric-brownian-motion
- Backlinks: heston-fourier, heston-model

## Entity: finance/interest-rate-term-structure
- Title: Interest Rate Term Structure
- Category: Pricing
- Language: en
- Key Concepts: term structure of interest rates, Spot Rates, Applications, Nelson-Siegel Empirical Model, Monetary policy analysis, par rate, Interest Rate Term Structure, Rates and Their Relationships, Preferred Habitat (Modigliani-Sutch, 1966), zero-coupon (spot) rate, Term Premium Estimation, pure expectations hypothesis, instantaneous forward rate, Market Segmentation, Derivatives pricing
- References: dv01, finance/bond-options-gaussian, finance/libor-sofr, finance/nelson-siegel-svensson, finance/short-rate-models, finance/swaps
- Backlinks: finance/nelson-siegel-svensson, finance/short-rate-models, multi-curve-framework

## Entity: optional-decomposition
- Title: Kramkov Optional Decomposition
- Category: Pricing
- Language: en
- Key Concepts: Optional decomposition, Application to super-hedging, adapted, simultaneously under every EMM, Difference from Doob-Meyer., Dual, Overview, self-financing capital, universal, the values of these two problems are equal, predictable, super-hedging duality, Connection to duality theory, Doob-Meyer recap, Optional decomposition and American options
- References: finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/complete-incomplete-markets, finance/optimal-stopping-american, finance/upper-lower-hedging-prices, math/backward-sde

## Entity: finance/libor-market-model
- Title: LIBOR Market Model (BGM)
- Category: Pricing
- Language: en
- Key Concepts: Drift under the Terminal Measure, Brace-Gatarek-Musiela (BGM) model, Forward LIBOR Rates, Black's formula by construction, cap/floor calibration is trivial, Comparison with Other Models, SOFR transition, Range accruals, Prerequisites, [[stochastic-differential-equations|SDE]] under the Forward Measure, spot measure, LIBOR Market Model, Volatility and Correlation Parameterization, Swaption Pricing — Rebonato's Approximation, LIBOR Market Model (BGM)
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/monte-carlo-method, finance/swaps, hjm-framework, stochastic-differential-equations

## Entity: lsv-model
- Title: Local Stochastic Volatility (LSV)
- Category: Pricing
- Language: en
- Key Concepts: Stochastic Volatility (SV) e.g., Heston, Related Topics, Local Leverage Function, Particle Methods (Monte Carlo with interacting particles), Local Volatility (LV), The LSV Synthesis, Why Tier-1 Banks Require LSV, The Calibration Nightmare (Particle Methods), Visualization: The Volatility Hierarchy, Local Volatility (LV) e.g., Dupire, Local Stochastic Volatility (LSV), The Flaws of Predecessors, Stochastic Volatility (SV)
- References: finance/dupire-local-vol, heston-model, hmm-particle-filters
- Backlinks: mcmc, path-dependent-volatility

## Entity: finance/levy-esscher-continuous
- Title: Lévy Processes and the Continuous Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: natural canonical choice, time-constant, Stationary increments, new, standard, Lévy-Khintchine formula., Esscher measure, price models with heavy tails and jumps, Independent increments, Calibration to the market, Definition., Construction (Gerber-Shiu, 1994)., exponentially re-weights, Related Articles, The Esscher martingale measure
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/fft, finance/girsanov-semimartingales, finance/semimartingale-models, finance/shannon-entropy, geometric-brownian-motion, heston-model
- Backlinks: finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/semimartingale-models, finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/markowitz-mean-variance
- Title: Markowitz Mean-Variance Portfolio Theory
- Category: Pricing
- Language: en
- Key Concepts: "market portfolio", heart, Setup, mathematical discipline, a rational investor should jointly optimize expected return and risk, Markowitz Mean-Variance Portfolio Theory, Modern extensions:, Static., Related Articles, efficient frontier, Sharpe ratio, Weaknesses of classical Markowitz:, Gaussianity., quadratic optimization, Markowitz problem:
- References: bayesian-black-litterman, convex-optimization-trading, cornish-fisher-cvar, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/stylized-facts-returns
- Backlinks: convex-analysis, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/stylized-facts-returns, information-geometry-finance, math/law-of-large-numbers, nonlinear-shrinkage, stochastic-control

## Entity: martingale-optimal-transport
- Title: Martingale Optimal Transport
- Category: Pricing
- Language: en
- Key Concepts: Martingale Optimal Transport, Related Topics, model-free, Martingale Optimal Transport (MOT), Dual Problem (Super-Replication), Primal Problem, Visualization: Sand vs. Martingale Sand, Connection to Optimal Transport, Why Citadel and Tier-1 Banks Use It, Martingale, The Primal and Dual Problems, The Setup: Model-Free Pricing
- References: convex-optimization-trading, convexity, martingale, optimal-transport, risk-neutral-valuation
- Backlinks: convexity, martingale

## Entity: finance/nelson-siegel-svensson
- Title: Nelson-Siegel-Svensson Yield Curve Model
- Category: Pricing
- Language: en
- Key Concepts: Central bank publication, Svensson Extension (1994), Duration management, Nelson-Siegel (1987), Typical Curve Shapes, Nelson-Siegel-Svensson (NSS), Uses, Bond pricing, Nelson-Siegel-Svensson Yield Curve Model, XVA, Instantaneous Forward Rate, Example, Related Articles, Calibration
- References: black-scholes, finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/oas, finance/swaps, finance/xva, heston-model
- Backlinks: finance/bootstrapping-yield-curve, finance/cir-hull-white, finance/interest-rate-term-structure, finance/libor-sofr

## Entity: numeraire-invariant-hedging
- Title: Numeraire-Invariant Quadratic Hedging
- Category: Pricing
- Language: en
- Key Concepts: Connection to delta hedging, Minimal Martingale Measure (MMM), Galtchouk-Kunita-Watanabe (GKW) Decomposition, Background and Motivation, Advanced Context, Decomposition additivity, Quadratic Hedging, Transaction costs, Change of Numeraire, Deep hedging, Utility-based alternatives, Model dependency, Visualization, Limitations and Extensions, Numeraire invariance
- References: black-scholes, finance/hierarchical-risk-parity, finance/levy-processes, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/follmer-schweizer

## Entity: optimal-execution
- Title: Optimal Execution: Almgren-Chriss
- Category: Pricing
- Language: en
- Key Concepts: The Fundamental Trade-off, Market Impact, The Mathematical Framework, Visualization: Trading Trajectories, The Solution: The Efficient Frontier, Risk-Averse ($\lambda \to \infty$), Optimal Execution: The Almgren-Chriss Model, Price Risk, Modern Extensions, Expected Cost + Risk Aversion $\times$ Variance, Risk-Neutral ($\lambda \to 0$), Almgren-Chriss model, Temporary Impact, Price Risk (Volatility), Related Topics
- References: deep-rl-execution, stochastic-control, vpin
- Backlinks: ai-market-making, amihud-illiquidity, amm-mechanics, avellaneda-stoikov, cross-impact, deep-rl-execution, finance/dark-pools, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/vwap-twap, futures-hedging, kyle-model, liquidation-signals, lob-prediction, market-impact, market-microstructure, path-integral-control, reinforcement-learning, rl-trader, stochastic-control, vpin

## Entity: finance/optimal-stopping-american
- Title: Optimal Stopping and American Options
- Category: Pricing
- Language: en
- Key Concepts: Difference from European, The payoff, strictly more expensive, The Snell envelope, Theorem., Claim 1., stopping time, Snell envelope, Definition., The optimal stopping time, supermartingale characterization, at every time, Connection to PDE: the Stefan problem, at any time, Proof (sketch).
- References: black-scholes, finance/crr-model, finance/free-boundary-american, finance/ftap-first-fundamental-theorem, finance/stefan-problem-american, finance/upper-lower-hedging-prices, optional-decomposition
- Backlinks: feynman-kac, finance/crr-model, finance/energy-commodity-derivatives, finance/real-options, finance/stefan-problem-american, math/discrete-martingales, math/optimal-stopping-markov, numerical-pde-finance, optional-decomposition, stochastic-control

## Entity: greeks-options
- Title: Option Greeks
- Category: Pricing
- Language: en
- Key Concepts: Second-Order Greeks, Discrete hedging, Higher-Order Greeks, Gamma, Transaction costs, Gamma scalping, Delta, Option Greeks, Vega Hedging, Vega, Rho, The Fundamental PDE Relationship, Pin risk, First-Order Greeks, Digital options
- References: black-scholes, dv01, exotic-options, finance/delta-hedging-practice, geometric-brownian-motion, heston-model, option-strategies, put-call-parity
- Backlinks: finance/delta-hedging-practice, finance/variance-swaps-vix, frtb-sa-mr, garman-kohlhagen, option-strategies, put-call-parity, volatility-smile

## Entity: option-strategies
- Title: Option Strategies
- Category: Pricing
- Language: en
- Key Concepts: Max profit, Early exercise, Butterfly and Condor, Max loss, Payoff Diagram: Bull Call Spread, Dividends, Risk Reversal, Vol smile, diagonal spread, Volatility Strategies, Liquidity, Bull Call Spread, Greeks of Combinations, Vertical Spreads, Butterfly Spread
- References: black-scholes, garman-kohlhagen, greeks-options, heston-model, put-call-parity
- Backlinks: finance/delta-hedging-practice, garman-kohlhagen, greeks-options, put-call-parity

## Entity: pairs-trading
- Title: Pairs Trading Strategy
- Category: Pricing
- Language: en
- Key Concepts: Background and History, Cointegration P-Value, Transaction costs and borrow, Kalman filter, Risk: Cointegration Breakdown and Crowding, P&L Attribution, Borrow costs, cointegrated, Cointegration Theory, Engle-Granger Two-Step Test, cointegration rank, Multivariate, Z-Score, Pairs Trading Strategy, Cointegration
- References: finance/cointegration, finance/monte-carlo-method, finance/particle-filter, finance/value-at-risk, mcmc, ornstein-uhlenbeck-process
- Backlinks: fastest-mean-reversion, fractional-cointegration, ornstein-uhlenbeck-process, pca-statarb, vine-copulas

## Entity: path-dependent-volatility
- Title: Path-Dependent Volatility
- Category: Pricing
- Language: en
- Key Concepts: Path Signatures, McKean-Vlasov, Related Topics, Path-Dependent Volatility: Beyond Local Volatility, Local Volatility (LV), Path-Dependent Volatility (PDV), Interacting Particle System, 3. Calibration via Particle Methods, 4. Connection to Signature-based Models, Visualization: Path-Memory effect, path-dependent exotic options, Moving Average, 2. Models of Julien Guyon, Julien Guyon, realized path
- References: hmm-particle-filters, lsv-model, neural-sdes-finance, rough-paths, signature-based-models
- Backlinks: signature-based-models

## Entity: put-call-parity
- Title: Put-Call Parity
- Category: Pricing
- Language: en
- Key Concepts: No-Arbitrage Proof, Portfolio A, no-arbitrage band, Put-call parity, Synthetic Positions, Model validation, Portfolio B, Synthetic positions, conversion/reversal arbitrage, American Options, Implied interest rate, Connection to Greeks, Arbitrage from Violations, Forward Version, Dividend-Paying Stocks
- References: black-scholes, finance/bs-market-self-financing, garman-kohlhagen, greeks-options, option-strategies
- Backlinks: garman-kohlhagen, greeks-options, option-strategies

## Entity: finance/follmer-schweizer
- Title: Quadratic Hedging and the Föllmer-Schweizer Approach
- Category: Pricing
- Language: en
- Key Concepts: Motivation: Incomplete Markets, Minimal Martingale Measure (MMM), Discrete trading, Stochastic volatility, Quadratic Hedging and the Föllmer-Schweizer Approach, variance-optimal martingale measure, Local Risk-Minimisation (Schweizer 1991), Mean-Variance Hedging, Key property, incomplete markets, Minimal Martingale Measure, Discrete Approximation, Methods Comparison, Jumps, Cost process
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, heston-model, numeraire-invariant-hedging
- Backlinks: finance/complete-incomplete-markets, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: quantum-amplitude-estimation
- Title: Quantum Amplitude Estimation (QAE)
- Category: Pricing
- Language: en
- Key Concepts: Iterative QAE (IQAE), Related Topics, Maximum Likelihood QAE (ML-QAE), Payoff Encoding, How QAE Works, Near-Term Implementation (NISQ), 1,000 times, Visualization: Convergence Speed, Grover Operator ($\mathcal{Q}$), Quantum Amplitude Estimation (QAE) in Finance, The Quadratic Speedup, quadratic speedup, Monte Carlo (MC) Simulation, Quantum Amplitude Estimation (QAE), State Preparation
- References: finance/monte-carlo-method, finance/xva, quantum-math
- Backlinks: quantum-math

## Entity: finance/real-options
- Title: Real Options
- Category: Pricing
- Language: en
- Key Concepts: Pharmaceutical R&D, Option to switch, Applications, Least-squares Monte Carlo, Hysteresis: Entry and Exit, Criticisms and Limitations, Spanning assumption, Real options, Suboptimal exercise, Binomial trees, Option to abandon, Finite difference PDE, Parameter sensitivity, Technology investment, Pricing Framework
- References: black-scholes, brownian-motion, finance/energy-commodity-derivatives, finance/optimal-stopping-american, finance/swaps, heston-model
- Backlinks: finance/energy-commodity-derivatives

## Entity: risk-neutral-valuation
- Title: Risk-Neutral Valuation
- Category: Pricing
- Language: en
- Key Concepts: Fundamental Theorems of Asset Pricing, Applications, not unique, Risk-Neutral Valuation, $T$-forward measure, Connection to Girsanov's Theorem, Risk-Neutral Does Not Mean Risk-Indifferent, Monte Carlo simulation, computational device, Option pricing, Interest rate derivatives, complete, The Central Formula, Credit derivatives, Incomplete Markets
- References: black-scholes, blacks-model, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/monte-carlo-method, finance/shannon-entropy, finance/swaps, finance/xva, geometric-brownian-motion, heston-model, math/doleans-dade-exponential, partial-differential-equations
- Backlinks: cost-of-carry, feynman-kac, martingale, martingale-optimal-transport, stochastic-processes

## Entity: finance/sabr-model
- Title: SABR Model
- Category: Pricing
- Language: en
- Key Concepts: Negative rates, Stochastic Differential Equations, Parameters, Normal SABR, $\beta$ determines backbone, Volatility Smile Visualization, Cap/floor stripping, Mathematical Framework, Approximation breaks down, Free Boundary SABR, Prerequisites, Background, Swaption vol cube, Real-time risk, Arbitrage violations
- References: black-scholes, finance/asymptotic-expansion-finance, finance/oas, finance/swaps, heston-model, volatility-forecasting
- Backlinks: black-scholes, blacks-model, finance/asymptotic-expansion-finance, finance/caps-floors-swaptions, finance/dispersion-trading, finance/dupire-local-vol, finance/heston-model, finance/oas, finance/rough-volatility, finance/swaps, finance/volatility-surface, hyperbolic-vol-geometry, volatility-smile

## Entity: finance/semimartingale-models
- Title: Semimartingale Models and Predictable Characteristics
- Category: Pricing
- Language: en
- Key Concepts: [[geometric-brownian-motion|GBM]], not unique, "stochastic DNA", [[cox-process|Poisson process]], Definition., continuous-time analogue of [[ftap-first-fundamental-theorem|FTAP]], Predictable characteristic triplet, Connection to Girsanov, semimartingales, Theorem (NFLVR-FTAP)., semimartingale, predictable triplet, Semimartingale Models and Predictable Characteristics, quadratic variation $C$ is invariant, minimal
- References: brownian-motion, cox-process, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/hawkes-process, finance/levy-esscher-continuous, geometric-brownian-motion, heston-model
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, math/triangular-arrays-processes, optional-decomposition

## Entity: finance/black-scholes-derivations
- Title: Several Derivations of the Black-Scholes Formula
- Category: Pricing
- Language: en
- Key Concepts: What this shows:, limit of elementary computations, Robustness and weaknesses, Martingale, four fundamentally different derivations, baseline reference, classical heat equation, Heat equation, Derivation 1: BS PDE (replication and hedging), Binomial, Idea., same assumptions, Equivalence of derivations, pedagogically transparent, PDE derivation
- References: black-scholes, finance/bachelier-formula, finance/crr-model, finance/dupire-local-vol, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american, geometric-brownian-motion, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/free-boundary-american, finance/stefan-problem-american, math/optimal-stopping-markov

## Entity: finance/short-rate-models
- Title: Short Rate Models
- Category: Pricing
- Language: en
- Key Concepts: Vasicek (1977), No-Arbitrage Models, Affine Bond Pricing, non-negativity, Lattice Methods, Comparison, Volatility calibration, Cox-Ingersoll-Ross (CIR, 1985), Calibration, Short rate models, CIR:, Prerequisites, Related Articles, Every short rate model implies an HJM model, Hull-White (1990)
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/girsanov-semimartingales, finance/interest-rate-term-structure, finance/swaps, stochastic-differential-equations
- Backlinks: finance/caps-floors-swaptions, finance/change-of-numeraire, finance/hjm-framework, finance/interest-rate-term-structure

## Entity: finance/stefan-problem-american
- Title: Stefan Problem and American Options
- Category: Pricing
- Language: en
- Key Concepts: American call: the trivial case, Numerical methods, [[crr-model|CRR binomial tree with early-exercise check]]., Exercise region, Monte Carlo regression (Longstaff-Schwartz, 2001)., Equivalence to the optimal-stopping formulation, Related Articles, Structure of the Stefan problem, Free-boundary analytics, obstacle, Stefan problem, free boundary, Equations, Integral equations for $S^*(t)$., Holding region
- References: black-scholes, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/black-scholes-derivations, finance/bond-options-gaussian, finance/optimal-stopping-american

## Entity: svi-model
- Title: Stochastic Volatility Inspired (SVI) Model
- Category: Pricing
- Language: en
- Key Concepts: $\rho \in [-1, 1]$, $a$, Stochastic Volatility Inspired (SVI), Eliminating Arbitrage, Related Topics, Visualization: The Hyperbolic Smile, SSVI: Surface SVI, Stochastic Volatility Inspired (SVI) Model, $\sigma > 0$, Calendar Arbitrage, The Raw SVI Formula, Butterfly Arbitrage, Surface SVI (SSVI), $b$, Why Parameterize the Surface?
- References: black-scholes, finance/variance-gamma, heston-model

## Entity: finance/swaps
- Title: Types of Swaps
- Category: Pricing
- Language: en
- Key Concepts: Negative rates, Discount Curve Bootstrapping, Convexity, Market risk, Model risk for exotics, Cross-Currency Swap (CCS), Corporate hedging, Floating leg, Parameter Reference, DV01, Mark-to-Market and DV01, plain vanilla IRS, CVA on an IRS, Mathematical Framework, Digital/binary swaps
- References: black-scholes, copula-models, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/sabr-model, finance/xva
- Backlinks: blacks-model, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/cir-hull-white, finance/energy-commodity-derivatives, finance/hjm-framework, finance/interest-rate-term-structure, finance/isda-simm, finance/libor-market-model, finance/libor-sofr, finance/nelson-siegel-svensson, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/xva, futures-hedging, risk-neutral-valuation

## Entity: finance/upper-lower-hedging-prices
- Title: Upper and Lower Hedging Prices
- Category: Pricing
- Language: en
- Key Concepts: Upper and Lower Hedging Prices, lower price, Constructive computation, supremum, utility indifference pricing, backward induction, Theorem (price trichotomy)., Attainability and exact replication, Connection to risk aversion, does, independent, surely, upper price, infimum, attainable
- References: finance/barrier-asian-options, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, heston-model, optional-decomposition
- Backlinks: finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, optional-decomposition

## Entity: finance/variance-swaps
- Title: Variance Swaps and Volatility Risk Premium
- Category: Pricing
- Language: en
- Key Concepts: Carr-Madan Model-Free Replication, Payoff, Variance Swaps and Volatility Risk Premium, Var Swap vs Vol Swap vs VIX Futures, Related Articles, variance swap, Implementation, Volatility Risk Premium
- References: finance/bipower-variation, finance/dupire-local-vol, heston-model, volatility-forecasting
- Backlinks: finance/dispersion-trading, finance/dupire-local-vol, finance/variance-swaps-vix, finance/volatility-surface

## Entity: volatility-smile
- Title: Volatility Smile
- Category: Pricing
- Language: en
- Key Concepts: The smile shape varies by asset class:, Commodity options, Calibration and the Volatility Surface, Sticky Strike vs. Sticky Delta, Sticky delta, Historical Origin: The 1987 Crash, Sticky strike, Equity markets, Why Black-Scholes Fails: Fat Tails and Skewness, Negative skew, Connections and Further Topics, 1. Stochastic Volatility ([[heston-model|Heston Model]]), Stochastic volatility, Sticky dynamics, SABR
- References: black-scholes, finance/dupire-local-vol, finance/rough-volatility, finance/sabr-model, finance/volatility-surface, greeks-options, heston-model, merton-jump-diffusion
- Backlinks: volatility-arbitrage

## Entity: finance/volatility-surface
- Title: Volatility Surface
- Category: Pricing
- Language: en
- Key Concepts: symmetric smile, Stochastic Volatility Inspired, The Smile and Skew, Sticky delta, Sticky Strike vs Sticky Delta, No-Arbitrage Constraints, Sticky strike, skew, Practical Calibration Workflow, Volatility Surface, Breeden-Litzenberger, Prerequisites, Term Structure of Skew, fatter tails, SVI Parameterization (Gatheral)
- References: black-scholes, finance/dupire-local-vol, finance/sabr-model, finance/variance-swaps, geometric-brownian-motion, heston-model
- Backlinks: blacks-model, finance/delta-hedging-practice, finance/variance-swaps-vix, neural-sdes-finance, volatility-smile

## Entity: algorithmic-execution-twap-vwap
- Title: Algorithmic Execution: TWAP, VWAP & Almgren-Chriss
- Category: Pricing & Execution
- Language: en
- Key Concepts: See Also, 2. Almgren-Chriss Model, 1. TWAP & VWAP Strategies, Market Impact, Algorithmic Execution: TWAP, VWAP & Almgren-Chriss, TWAP:, Timing Risk, VWAP:
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: convex-optimization-in-trading, high-frequency-trading-and-orderbook, market-impact-models-square-root-law

## Entity: optimal-stopping-american-options
- Title: American Options & Optimal Stopping
- Category: Pricing & Execution
- Language: en
- Key Concepts: See Also, American Options & Optimal Stopping
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
- Key Concepts: See Also, Interest Rate Derivatives: Swaps & SOFR
- References: course-quant-trading, fixed-income-quant-rates-and-yield-curve, option-greeks-and-volatility

## Entity: monte-carlo-option-pricing-and-variance-reduction
- Title: Monte Carlo Option Pricing & Variance Reduction
- Category: Pricing & Execution
- Language: en
- Key Concepts: See Also, Monte Carlo Option Pricing & Variance Reduction, 2. Variance Reduction, 1. Monte Carlo Framework
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
- Key Concepts: Gamma Function, Beta Function, Overview

## Entity: projects/j-cole-fall-off
- Title: J. Cole — The Fall Off Review
- Category: Projects
- Language: en
- Key Concepts: Stack, Design Language, J. Cole — The Fall Off Review, React 19, Vite, Kinetic typography, brutalist, kinetic typography, Status, TypeScript, The Idea, Brutalism, Framer Motion

## Entity: projects/llm-wiki
- Title: LLM-Wiki
- Category: Projects
- Language: en
- Key Concepts: updates 10–15 notes in the vault, The [[llm]], The vault, compounding artifact, Lint, Bilingual, Knowledge Garden, Sources, Query, Implementation architecture, Role separation, Ingest, Three layers, [[llm]]-Wiki, Knowledge graph
- References: llm, rag

## Entity: projects/music-results-2025
- Title: Music Results 2025
- Category: Projects
- Language: en
- Key Concepts: Stack, Artists, Foreign, GitHub Pages, Inline CSS + styles.css, `.nojekyll`, Design, Statistics, Editorial brutalism, Structure, A personal year-in-music archive, Status, Music Results 2025, The Idea, Plain HTML

## Entity: projects/nyquist
- Title: Nyquist
- Category: Projects
- Language: en
- Key Concepts: Compute, Execution & Trading, Market Regimes, Asset managers, Systemic Risk, Status, Why It's Hard to Build, Development, Nyquist, The Telescope Principle, Banks, The Name, C++ core., The Problem, Market Data

## Entity: projects/ultima-thule
- Title: Ultima Thule
- Category: Projects
- Language: en
- Key Concepts: Persistence, Dashboard, Architecture, Status, The map is a state machine, not a sheet., Why It's Hard to Build, Development, All API keys are server-side., Offline navigation rerouting., Expenses, Map, Smart Packing, Ultima Thule, AI Trip Generator, The Problem

## Entity: projects/vibefix
- Title: VibeFix
- Category: Projects
- Language: en
- Key Concepts: Architecture, Describe the problem., Notifications & email, Built-in chat, Task lifecycle, No deal protection., Get the result., Target audience, VibeFix, A coder picks it up., Backend, Stack, Ratings & reviews, Storage & sessions, Categories & tags
- References: llm

## Entity: projects/samizdat
- Title: Кто живёт в панельке Хаски?
- Category: Projects
- Language: en
- Key Concepts: React 19 + TypeScript, Vite, Structure, Tailwind 4, Random rotations:, Status, Hero, A brutalist samizdat zine about Russian rap., Brutal shadows:, Stack, Motion, Materials, Quotes, Design Language, GitHub Pages

## Entity: quant-trading-interview-roadmap
- Title: 30-Day Quant Trading Interview Roadmap
- Category: Quant Trading
- Language: en
- Key Concepts: See Also, Days 28–30:, Days 8–15:, 30-Day Quant Trading Interview Preparation Roadmap, Days 23–27:, Days 16–22:, Days 1–7:, Weekly Roadmap
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
- Key Concepts: Quant Coding Interview LeetCode Patterns, See Also
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
- Key Concepts: See Also, 1. Key Probability Formulas, Geometric $Geom(p)$:, Kelly Criterion:, Coupon Collector:, Quant Interview Cheat Sheet: Formulas, Distributions & Shortcuts, Dice stopping adjustment:, Put-Call Parity:
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
- Key Concepts: Time Conditions:, Five Rings:, 3.1 Core Competencies, Logic problems:, Liquidity:, Prop Trading (Proprietary Trading):, 1.5 Good Things About Quant Trading, 4.1 LOGIC PROBLEMS (16 Problems), 100% of the text, footnotes, examples, problems, hints, and mathematical solutions, 1.4.7 "If You Make a Small Mistake, You Could Lose Your Job", 2.2 Internship Structure, Market Making:, Author's Anecdote:, 3.6 Finance Glossary, Asymmetric Information:
- Backlinks: algorithmic-execution-twap-vwap, convex-optimization-in-trading, copula-models-and-tail-dependence, credit-risk-modeling-and-structural-models, crypto-quant-trading-and-amm-curves, cryptographic-zero-knowledge-in-finance, deep-reinforcement-learning-for-trading, exotic-options-and-structured-products, factor-investing-and-fama-french, fixed-income-quant-rates-and-yield-curve, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-stat-arb-lead-lag, high-frequency-trading-and-orderbook, interest-rate-derivatives-swaps-caps-floors, limit-order-book-matching-engine-design, machine-learning-for-quant-trading, market-impact-models-square-root-law, market-microstructure-noise-and-realized-volatility, monte-carlo-option-pricing-and-variance-reduction, optimal-stopping-american-options, optimal-stopping-and-kelly, option-greeks-and-volatility, order-book-dynamics-and-lOB-modeling, portfolio-optimization-and-black-litterman, portfolio-risk-decomposition-marginal-var, quant-brainteasers-handbook, quant-coding-interview-leetcode-patterns, quant-firm-interview-math-brainteasers, quant-firm-interview-playbooks, quant-interview-cheat-sheet, quant-market-making-mechanics, quant-mental-math-tricks-handbook, quant-risk-management-var-cvar, quant-trader-mental-math-rapid-trainer, quant-trading-interview-qna, quant-trading-interview-roadmap, stat-tests-for-trading-strategies, statistical-arbitrage-and-pairs-trading, stochastic-calculus-and-ito-lemma, stochastic-volatility-heston-model, systematic-alpha-research-and-backtesting, volatility-surface-sabr-model, volatility-trading-and-variance-swaps

## Entity: information-geometry-finance
- Title: Information Geometry in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: The Statistical [[manifold-learning|Manifold]], Application: Distance Between Market Regimes, Information Geometry, Fisher Information Metric (FIM), Related Topics, Information Geometry in Finance, Riemannian [[manifold-learning|Manifold]], Information-Geometric Portfolio Optimization, Connection to [[shannon-entropy|Entropy]], Visualization: Curved Probability Space, Application: Portfolio Optimization, Regime Shifts
- References: entropy-pooling, finance/fisher-transform, finance/markowitz-mean-variance, finance/shannon-entropy, manifold, manifold-learning
- Backlinks: f-divergences, mle

## Entity: path-integral-control
- Title: Path Integral Control in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: Reinforcement Learning, linear Schrödinger-type PDE, Maximum [[shannon-entropy|Entropy]] RL, Applications in High-Frequency Trading, Related Topics, Softmax (or Boltzmann) weighted average, Visualization: The Path Integral, Feynman-Kac Theorem, Soft Actor-Critic (SAC), Path Integral Control (Path Integral Differential Dynamic Programming - PI-DDP), Path Integral Control in Finance, The Quantum Physics Connection, High-Dimensional Execution, The Mathematical Breakthrough
- References: finance/shannon-entropy, merton-portfolio, optimal-execution, quantum-math, reinforcement-learning, stochastic-control

## Entity: quantum-phase-estimation
- Title: Quantum Phase Estimation & Shor's Algorithm
- Category: Quantum
- Language: en
- Key Concepts: Inverse QFT, Controlled Unitaries, Quantum Fourier Transform (QFT), Quantum Phase Estimation & Shor's Algorithm, Shor's Algorithm, Initialization, Quantum Phase Estimation
- References: math/spectral-theory-operators

## Entity: effective-field-theory
- Title: Effective Field Theory (EFT)
- Category: Quantum Physics
- Language: en
- Key Concepts: Examples, Effective Field Theory (EFT), Related topics, NRQED / NRQCD, Predictive power without a UV theory, General relativity, Why it matters, Chiral perturbation theory, Core idea, Fermi theory of weak interactions, Naturalness, Renormalisation
- References: fine-tuning, renormalization-group
- Backlinks: quantum-mechanics

## Entity: many-body-tensor-networks
- Title: Many-Body Problem and Tensor Networks
- Category: Quantum Physics
- Language: en
- Key Concepts: A. Matrix Product States (MPS), Discrete Spacetime, 300 qubits, MERA (Multi-scale Entanglement Renormalization Ansatz), 1. The Exponential Explosion, Entanglement, DMRG Algorithm, 3. Tensor Network Architectures, [[llm]] Compression, 4. MERA and the Geometry of Renormalization, Low-Entanglement [[differential-geometry|Manifold]], B. Projected Entangled Pair States (PEPS), Many-Body Problem and Tensor Networks, Many-Body Problem, Tensor Networks
- References: llm, math/differential-geometry, quantum-information-entropy, renormalization-group, transformer-architecture
- Backlinks: tensor-decompositions

## Entity: quantum-information-entropy
- Title: Quantum Information and Entropy
- Category: Quantum Physics
- Language: en
- Key Concepts: Key Mathematical Axioms:, Strong Subadditivity, Quantum Teleportation, Entanglement Entropy, Information Theory, Concavity, 4. Quantum Communication Limits, Pure State, reversible, Reduced Density Matrix, 1. The Density Matrix ($\rho$) and Purity, Thermodynamics, Mixed State, 2. Von Neumann [[gravitational-entropy|Entropy]] ($S$), 5. The Thermodynamics of Information
- References: ads-cft-deep, black-hole-thermodynamics, finance/shannon-entropy, gravitational-entropy, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ads-cft-deep, gff, linear-spaces-basis, many-body-tensor-networks, quantum-math, quantum-mechanics, topological-phases

## Entity: quantum-mechanics
- Title: Quantum Mechanics
- Category: Quantum Physics
- Language: en
- Key Concepts: Applications, Overview, Copenhagen Interpretation, Key Principles, Born's Rule, Entanglement, Wave-Particle Duality, MRI, Superposition, Many-Worlds Interpretation, Lasers, Mathematical Formalism, Quantum Mechanics, Semiconductors, The Schrödinger Equation
- References: effective-field-theory, math/spectral-theory-operators, qft-basic, quantum-entanglement, quantum-information-entropy, schrodinger-equation
- Backlinks: math/functional-analysis

## Entity: topological-phases
- Title: Topological Phases of Matter
- Category: Quantum Physics
- Language: en
- Key Concepts: Symmetry Breaking, Abelian Anyons, Braiding, immune to local noise, Topological Quantum Computing, Topological Photonic Crystals, Non-Abelian Anyons, perfectly conducting states on its Edge, 5. Topological AI and Robotics, Matrix Rotation, Protection, Topological Invariant, Topological Phases, Chern Number, 2. The TKNN Invariant and Chern Numbers
- References: gauge-theory-yang-mills, math/topology-basics, quantum-information-entropy

## Entity: finance/adversarial-stress-testing
- Title: Adversarial Stress Testing
- Category: Risk
- Language: en
- Key Concepts: Convexity, Counterparty Risk, Regulatory Compliance, Stress Loss Comparison, Stationarity assumption, Portfolio Robustness Testing, Portfolio-specificity, GAN-Based Scenario Generation, Concentrated Position Management, Sequential adversarial testing, Plausibility constraint, Distributional robustness, Mathematical Framework, Prerequisites, Dimensionality
- References: attention-mechanisms, convex-optimization-trading, copula-models, extreme-value-theory, finance/gan, finance/monte-carlo-method, finance/value-at-risk
- Backlinks: finance/nash-equilibrium, generative-scenario-models

## Entity: amihud-illiquidity
- Title: Amihud Illiquidity Ratio
- Category: Risk
- Language: en
- Key Concepts: liquidity premium, Benchmark sensitivity, Seasonality, Liquidity-Adjusted Portfolio Construction, Pastor-Stambaugh (2003) liquidity factor, Mathematical Framework, Amihud illiquidity ratio, Price impact for a trade of size $Q$ dollars:, High-frequency noise, Transaction Cost Estimation, Limitations & Extensions, Intraday aggregation, Emerging Markets, Academic Factor Research, Positive return-volume correlation
- References: finance/levy-processes, finance/market-impact-scaling, finance/value-at-risk, optimal-execution, volatility-forecasting
- Backlinks: finance/kyle-lambda, roll-model

## Entity: bayesian-black-litterman
- Title: Bayesian Black-Litterman Portfolio Optimization
- Category: Risk
- Language: en
- Key Concepts: Shrinkage interpretation, Theil-Goldberger mixed estimator, Subjective Investor Views, Step 1: Market Equilibrium Prior, Bayesian Black-Litterman Portfolio Optimization, pick matrix, Factor Investing, Step 2: Investor Views, Mathematical Framework, View consistency, Prior vs Posterior Returns, Prerequisites, Global Asset Allocation, [[hierarchical-risk-parity]], Limitations & Extensions
- References: black-scholes, convex-optimization-trading, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: alpha-factor-discovery, bayesian-inference, convex-optimization-trading, entropy-pooling, finance/markowitz-mean-variance

## Entity: finance/black-swan-scenarios
- Title: Black Swan Scenario Generator
- Category: Risk
- Language: en
- Key Concepts: Extreme Value Theory (EVT), Use stressed correlations, black swan scenario generator, Critical error, Never rely solely on VaR, Refresh EVT parameters, Best Practices, Stressed Correlations, 2. Scaled Historical Scenarios, T-copula, Three Scenario Sources, Generalised Pareto Distribution (GPD), 3. Narrative Hypothetical Scenarios, Back-test, 1. EVT Statistical Extrapolation
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/systemic-contagion-debtrank, finance/value-at-risk
- Backlinks: lln-clt

## Entity: finance/cdo-tranches
- Title: CDO Tranches
- Category: Risk
- Language: en
- Key Concepts: Base Correlation, Alternative Models, Funding, attachment, zero tail dependence, Compound Correlation, Stochastic recovery, Conditional Independence, Equity, Collateral, Model risk is existential, Rating reliance, Super-senior, Base correlation, Issuance
- References: copula-models, finance/coherent-risk-measures, finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization, finance/value-at-risk
- Backlinks: finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization

## Entity: cs01
- Title: CS01 (Credit Spread 01)
- Category: Risk
- Language: en
- Key Concepts: CS01, Convexity, Risky PV01, key-rate CS01, CS01 (Credit Spread 01), Duration approximation breaks down, Orthogonality to DV01, Regulatory Capital, spread convexity, CS02, DVCS, Curve shape assumption, Risk Limits, Mathematical Framework, P&L Attribution
- References: copula-models, cox-process, dv01, finance/swaps, finance/xva
- Backlinks: cox-process, dv01, finance/swaps, finance/xva

## Entity: cva-wrong-way-risk
- Title: CVA and Wrong-Way Risk
- Category: Risk
- Language: en
- Key Concepts: Credit Valuation Adjustment (CVA) and Wrong-Way Risk, Stochastic Correlation, Wrong-Way Risk (WWR), expected loss, Wrong-Way Risk, Related Topics, FRTB and WWR, Right-Way Risk, Copulas, Oil Example, positively correlated, Example, Jump-to-Default Models, Modeling WWR, Visualization: WWR Exposure Spike
- References: copula-models, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: network-risk-cascades

## Entity: finance/market-impact-scaling
- Title: Capacity & Market Impact Scaling
- Category: Risk
- Language: en
- Key Concepts: Market Impact Scaling, Strategy Capacity, Background and Motivation, Scaling Laws, Regime dependence, Mathematical Framework, Strategy Capacity Formula, Square Root Law of Impact, Execution Optimization, Backtest Correction, Power-Law Generalization, Intraday volume profile, Limitations and Extensions, Non-stationarity of ADV, Capacity Estimation
- References: avellaneda-stoikov, finance/monte-carlo-method, lob-prediction, optimal-execution
- Backlinks: amihud-illiquidity, deep-rl-execution, finance/nash-equilibrium, lob-prediction

## Entity: finance/coherent-risk-measures
- Title: Coherent Risk Measures
- Category: Risk
- Language: en
- Key Concepts: Value at Risk, Basel III / FRTB, Coherent Risk Measures, penalty representation, Theorem., Dual representation, Basel II, entropic risk, Convex risk measures, 4. Subadditivity., Kusuoka's theorem (2001), Elicitability and backtesting, VaR is elicitable, Related Articles, jointly elicitable
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, math/law-of-large-numbers
- Backlinks: extreme-value-theory, finance/cdo-tranches, finance/credit-derivatives-cds, frtb-es

## Entity: cornish-fisher-cvar
- Title: Cornish-Fisher CVaR
- Category: Risk
- Language: en
- Key Concepts: UCITS KIID, Carry Trade Monitoring, Modified VaR (mVaR), Portfolio-level application, Ignores serial correlation, Mathematical Framework, Accuracy breaks down at extremes, Gram-Charlier expansion, Prerequisites, Limitations & Extensions, Four-moment summary, Parameter estimation error, Hedge Fund Risk Reporting, Options Portfolios, Monotonicity
- References: copula-models, extreme-value-theory, finance/levy-processes, finance/value-at-risk, mcmc, volatility-forecasting
- Backlinks: finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/hyperbolic-distributions, finance/isda-simm, finance/markowitz-mean-variance, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, math/large-deviations-cramer

## Entity: finance/credit-derivatives-cds
- Title: Credit Default Swaps
- Category: Risk
- Language: en
- Key Concepts: Roll, risky duration, CDS Spread Term Structure, Applications, Bootstrapping Hazard Rates, CDX, premium leg, Pricing Framework, Mark-to-Market of an Existing CDS, Credit hedging, Premium and Protection Legs, Single-name vs. index basis, CVA Connection, The Big Bang Protocol (2009), Index roll trades
- References: copula-models, finance/cdo-tranches, finance/coherent-risk-measures, finance/credit-risk-models, finance/value-at-risk, finance/xva
- Backlinks: finance/cdo-tranches, finance/credit-migration, finance/credit-risk-models, finance/securitization

## Entity: finance/credit-migration
- Title: Credit Migration and Rating Transitions
- Category: Risk
- Language: en
- Key Concepts: Transition Matrix Framework, Continuous-Time Generator Matrix, transition matrix, Asset Value Model, Bond Revaluation, Credit Migration and Rating Transitions, Estimation Methods, Typical One-Year Transition Probabilities (%), Credit migration, CreditMetrics, Through-the-Cycle vs Point-in-Time, IFRS 9 Staging Application, drift, CreditMetrics Framework, Duration (Hazard Rate) Method
- References: copula-models, finance/credit-derivatives-cds, finance/value-at-risk, hidden-markov-models, survival-risk-prediction
- Backlinks: finance/credit-risk-models

## Entity: finance/credit-risk-models
- Title: Credit Risk Models
- Category: Risk
- Language: en
- Key Concepts: Merton (1974), Short-term PD, Intensity-Based Framework, state-dependent intensity, Cox process, Black-Cox (1976), equity is a call option on firm value, Distance to Default, Comparison, Use case, rating transitions, Default trigger, Reduced-form models, structural models, Economic intuition
- References: black-scholes, copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-migration, finance/value-at-risk, finance/xva, gnn-credit-risk, survival-risk-prediction
- Backlinks: finance/cdo-tranches, finance/credit-derivatives-cds, finance/securitization

## Entity: dv01
- Title: DV01 (Dollar Value of a 01)
- Category: Risk
- Language: en
- Key Concepts: full price, Portfolio DV01 by Tenor, Credit-contaminated yield, Asset-Liability Management, Key-Rate DV01, DV01, Scaling, Convexity Correction, Sign convention, [[cs01]], Bond Pricing and Yield, Futures DV01, Callable/putable bonds, Mathematical Framework, First-order only
- References: black-scholes, brownian-motion, cs01, finance/oas, finance/swaps
- Backlinks: cs01, finance/bond-options-gaussian, finance/interest-rate-term-structure, finance/oas, finance/swaps, futures-hedging, greeks-options

## Entity: finance/dispersion-trading
- Title: Dispersion Trading
- Category: Risk
- Language: en
- Key Concepts: correlation risk premium, Bank dispersion desks, Execution Methods, Dispersion Trading, implied correlation, Dispersion trading, Tail hedging, Prerequisites, Basis risk, Gap risk, Vega-Weighting, left-tail correlation risk, Dispersion P&L Profile, P&L Decomposition, Cross-gamma
- References: black-scholes, copula-models, finance/sabr-model, finance/value-at-risk, finance/variance-swaps, heston-model
- Backlinks: finance/variance-swaps-vix

## Entity: finance/eigenportfolio-rmt
- Title: Eigenportfolio Construction via RMT
- Category: Risk
- Language: en
- Key Concepts: Risk Decomposition, Background and Motivation, Denoised Correlation Matrix, Sector Factors, Parameter Reference, Subsequent significant vectors, Prerequisites, Random Matrix Theory (RMT), Statistical Arbitrage, Alpha Signal Construction, Style Factors, Denoised Optimization, Eigenportfolios, The Marchenko-Pastur Bound, First Eigenvector
- References: finance/hierarchical-risk-parity, finance/random-matrix-theory, heston-model, math/spectral-theory-operators
- Backlinks: finance/factor-attribution, finance/gnn-finance, finance/hierarchical-risk-parity, finance/markowitz-mean-variance, finance/random-matrix-theory

## Entity: frtb-sa-mr
- Title: FRTB Standardized Approach (SA-MR)
- Category: Risk
- Language: en
- Key Concepts: Pro, B. Vega Risk, A. Delta Risk, Why Banks Hate/Love It, 1. The Sensitivities-Based Method (SBM), The Core Logic: Sensitivities, Visualization: Capital Stack under FRTB, Related Topics, FRTB Standardized Approach (SA-MR), conservative, Con, Standardized Approach for Market Risk (SA-MR), Greeks (Sensitivities), 2. Default Risk Charge (DRC), 3. Residual Risk Add-on (RRAO)
- References: finance/xva, frtb-es, greeks-options

## Entity: frtb-es
- Title: FRTB and Expected Shortfall
- Category: Risk
- Language: en
- Key Concepts: Related Topics, average loss, Lack of Coherence, P&L Attribution (PLA), Expected Shortfall (ES), Liquidity Horizons, Backtesting, Key Features of FRTB, FRTB and Expected Shortfall (ES), Why Replace VaR?, 1. Liquidity Horizons, Visualization: VaR vs. ES, Fundamental Review of the Trading Book (FRTB), 97.5% confidence level, 2. Standardized vs. Internal Models (IMA)
- References: extreme-value-theory, finance/coherent-risk-measures, finance/value-at-risk
- Backlinks: clt, frtb-sa-mr, kelly-jump-diffusion, markov-chebyshev, measure-theory

## Entity: finance/frtb
- Title: FRTB: Fundamental Review of the Trading Book
- Category: Risk
- Language: en
- Key Concepts: FRTB (Basel IV / BCBS 2019), FRTB: Fundamental Review of the Trading Book, Related Articles, FRTB ES scaled for liquidity horizons, FRTB Liquidity Horizons, Key Changes vs Basel 2.5, P&L Attribution Test (PLA), Implementation, Expected Shortfall
- References: cornish-fisher-cvar, extreme-value-theory, finance/isda-simm, finance/value-at-risk

## Entity: finance/factor-attribution
- Title: Factor Risk Attribution and Decomposition
- Category: Risk
- Language: en
- Key Concepts: Factor Risk Decomposition, Ex-Post vs Ex-Ante vs Risk Budgeting, Factor attribution, Factor Risk Attribution and Decomposition, Percent Contribution to Risk, Related Articles, Brinson-Hood-Beebower (BHB) Decomposition, Marginal Contribution to Risk (MCTR), Implementation
- References: fama-macbeth-regression, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, ts-cs-factor-analysis
- Backlinks: alpha-orthogonalization, finance/apt-ross, finance/capm

## Entity: fraud-detection
- Title: Fraud Detection for Transactions
- Category: Risk
- Language: en
- Key Concepts: Undersampling, Device/channel features, Python: Anomaly Detection with Isolation Forest, KS Statistic, Adversarial attacks, Real-time latency, Concept drift, AUC-ROC / AUC-PR, Parameter Reference, Graph fraud rings, Model Selection, Explainability, Account takeover (ATO), Geographic features, Neural Networks ([[transformer-architecture|MLP]], LSTM)
- References: finance/gan, finance/monte-carlo-method, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: finance/gan, finance/gnn-finance, finance/shap-interpretability, gnn-credit-risk, graph-neural-networks

## Entity: futures-hedging
- Title: Futures Hedging
- Category: Risk
- Language: en
- Key Concepts: Basis and Basis Risk, Futures hedging, Minimum Variance Hedge Ratio, Metallgesellschaft case, rolls, Stack and Roll, Beta Hedging, Optimal Number of Contracts, Equity Portfolio Hedging, Cross-Hedging, Portfolio Insurance, Basis risk, stacks, Tailing the Hedge, tailed hedge
- References: dv01, finance/swaps, finance/value-at-risk, geometric-brownian-motion, optimal-execution
- Backlinks: finance/value-at-risk

## Entity: finance/hierarchical-risk-parity
- Title: Hierarchical Risk Parity (HRP)
- Category: Risk
- Language: en
- Key Concepts: Crisis resilience, Handles Singular $\Sigma$, Step 3: Recursive Bisection, Robustness, recursive risk allocation, Requires Returns Forecast, No matrix inversion, Parameter Reference, Mathematical Properties, Why HRP?, Accounts for Hierarchy, Full Python Implementation, Alternative to equal-weight, Weight Stability, graph theory
- References: finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/value-at-risk, kelly-criterion
- Backlinks: bayesian-black-litterman, convex-optimization-trading, fama-macbeth-regression, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/factor-attribution, finance/markowitz-mean-variance, finance/meta-labeling, finance/random-matrix-theory, model-free-rl-factors, numeraire-invariant-hedging, portfolio-optimization-ml, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis

## Entity: finance/isda-simm
- Title: ISDA SIMM: Standard Initial Margin Model
- Category: Risk
- Language: en
- Key Concepts: Operational Details, Architecture, Curvature, Vega margin, 3. Risk-Class Margin, sensitivity-based, Margin Formula, Delta, 2. Bucket Margin, back-testing, Vega, Implementation (IR Delta), 4. Total SIMM, ISDA SIMM: Standard Initial Margin Model, Sensitivity Types
- References: copula-models, cornish-fisher-cvar, finance/swaps, finance/value-at-risk, finance/xva
- Backlinks: finance/frtb, finance/repo-market-systemic

## Entity: kelly-criterion
- Title: Kelly Criterion
- Category: Risk
- Language: en
- Key Concepts: Proportional Kelly with drawdown control, The Kelly Formula: Discrete Case, Discrete vs. continuous time, Drawdown Analysis, Parameter estimation risk, Interactive Simulation, Venture capital allocation, Python Implementation: Growth Simulation, Parameter Reference, Sharpe ratio divided by $\sigma$, Background, Correlation, logarithmic utility function, The Kelly Formula: Continuous Case, Half-Kelly
- References: finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, portfolio-optimization-ml
- Backlinks: bayesian-kelly, finance/hierarchical-risk-parity, finance/pe-fund-metrics, kelly-jump-diffusion, merton-portfolio, universal-portfolios

## Entity: finance/libor-sofr
- Title: LIBOR to SOFR Transition
- Category: Risk
- Language: en
- Key Concepts: LIBOR vs SOFR, Replacement Rates, LIBOR (London Interbank Offered Rate), Transition Timeline, Related Articles, ISDA Fixed Spread Adjustments, Term SOFR, Rate Types, LIBOR to SOFR Transition, SOFR (Secured Overnight Financing Rate), Implementation, SOFR Compounded, SOFR In Arrears
- References: finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, finance/xva
- Backlinks: finance/cir-hull-white, finance/interest-rate-term-structure

## Entity: network-risk-cascades
- Title: Network Models and Default Cascades
- Category: Risk
- Language: en
- Key Concepts: Default Cascade, Related Topics, Default Cascades and the Domino Effect, Contagion Threshold, The Eisenberg-Noe Model, Edges ($E$), Directed Graph, more connectivity can be dangerous, The Paradox of Connectivity, DebtRank: Centrality for Risk, Network Models and Default Cascades, Visualization: Network Contagion, interconnectedness, Nodes ($V$), DebtRank
- References: cva-wrong-way-risk, finance/repo-market-systemic, finance/systemic-contagion-debtrank

## Entity: finance/oas
- Title: Option-Adjusted Spread (OAS)
- Category: Risk
- Language: en
- Key Concepts: Python: OAS Calculation via Monte Carlo, ASW, Background and Motivation, For MBS, Prepayment model, Multi-factor models, Mathematical Framework, Option-Adjusted Spread (OAS), OAS, Negative convexity, For Callable Bonds, Z-Spread, G-Spread, Model dependency, Visualization
- References: dv01, finance/longstaff-schwartz, finance/monte-carlo-method, finance/sabr-model
- Backlinks: dv01, finance/nelson-siegel-svensson, finance/sabr-model, finance/securitization

## Entity: portfolio-optimization-ml
- Title: Portfolio Optimization with ML
- Category: Risk
- Language: en
- Key Concepts: Portfolio Optimization with Machine Learning, Maximum Drawdown, Background and Motivation, Step 1: Distance Matrix, Black-Litterman with ML Views, Turnover, Transaction costs, Sharpe Ratio, Financial Context, Step 2: Hierarchical Clustering, efficient frontier, Concentration, Visualization, Step 4: Recursive Bisection, Step 3: Quasi-Diagonalization
- References: finance/gan, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/random-matrix-theory, finance/value-at-risk, math/spectral-theory-operators, mcmc, model-free-rl-factors, transformer-architecture
- Backlinks: convex-optimization-trading, fama-macbeth-regression, finance/pe-fund-metrics, kelly-criterion

## Entity: finance/pe-fund-metrics
- Title: Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve
- Category: Risk
- Language: en
- Key Concepts: timing, IRR limitations, Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve, IRR — Internal Rate of Return, The J-Curve, RVPI (Residual Value to Paid-In), Target Benchmarks by Strategy, Related Articles, Core Metrics, TVPI = DPI + RVPI = MOIC, DPI (Distributions to Paid-In), PME — Public Market Equivalent, Example, MOIC — Multiple on Invested Capital, Implementation
- References: finance/monte-carlo-method, finance/repo-market-systemic, finance/value-at-risk, kelly-criterion, portfolio-optimization-ml

## Entity: finance/repo-market-systemic
- Title: Repo Market and Systemic Risk
- Category: Risk
- Language: en
- Key Concepts: EU SFTR, Collateral Chains and Rehypothecation, Tri-party repo, General vs Special Collateral, Liquidity Spiral, Cash lender, Dodd-Frank / EMIR, Simulation, Systemic Risk Analysis, Haircut, FSB haircut floors (2023), Primary Reserve Fund, Cash borrower, Regulatory Response, Rehypothecation
- References: extreme-value-theory, finance/isda-simm, finance/kyle-lambda, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: finance/pe-fund-metrics, network-risk-cascades

## Entity: finance/securitization
- Title: Securitization
- Category: Risk
- Language: en
- Key Concepts: The SPV Structure, Equity/residual, Prepayment Speed Impact on WAL, Agency vs. Non-Agency, Liquidity evaporation, Mezzanine interest, prepayment risk, Credit card ABS, CDO-Squared, Monoline insurance, Rating agency failures, Mark-to-market spirals, Mortgage-Backed Securities (MBS), OAS, Dodd-Frank (2010)
- References: copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-risk-models, finance/oas, finance/value-at-risk
- Backlinks: finance/cdo-tranches

## Entity: sharpe-ratio-statistics
- Title: Statistics of Sharpe Ratios
- Category: Risk
- Language: en
- Key Concepts: Deflated Sharpe Ratio, Asymptotic Distribution, Jobson-Korkie Test, Non-spherical distributions, SR Confidence Interval by Track Record Length, Estimation error dominates at short horizons, Statistics of Sharpe Ratios, Parameter Reference, Probabilistic Sharpe Ratio (PSR), Non-normality matters, Capital allocation, Research pipeline, Deflated SR, Hierarchical testing, Mathematical Framework
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/value-at-risk, hidden-markov-models, mcmc

## Entity: finance/stylized-facts-returns
- Title: Stylized Facts of Financial Returns
- Category: Risk
- Language: en
- Key Concepts: 11. Multifractality, 6. Aggregational Gaussianity, Stylized Facts of Financial Returns, For risk-management purposes, 1. Absence of autocorrelation in returns, squared, quadratic variation, Modern programme, 4. Long memory of volatility, For market making, power law, 10. Tail dependence, 3. Volatility clustering, rule out, Canonical list (Rama Cont, 2001)
- References: arch-models, copula-models, finance/bipower-variation, finance/capm, finance/efficient-market-hypothesis, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, garch-models, heston-model
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/hyperbolic-distributions, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, math/central-limit-theorem, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: survival-risk-prediction
- Title: Survival-Based Risk Prediction
- Category: Risk
- Language: en
- Key Concepts: Kaplan-Meier Estimator, Frailty models, PD term structure, Proportional hazards violation, Time-Varying Covariates, Parameter Reference, Discrete-Time Hazard Models, Survival-Based Risk Prediction, partial likelihood, Competing Risks, Mathematical Framework, discrete-time logistic hazard model, Fund liquidation risk, Censoring types, Breslow estimator
- References: black-scholes, copula-models, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/credit-migration, finance/credit-risk-models, gnn-credit-risk

## Entity: convex-optimization-trading
- Title: Systematic Portfolio Trading via Convex Optimization
- Category: Risk
- Language: en
- Key Concepts: [[mcmc]], Robust Optimization, Duality, Square-root impact, Warm starting, Systematic Equity Long/Short, Multi-Period Optimization, Parameter sensitivity, Mathematical Framework, Prerequisites, [[hierarchical-risk-parity]], Limitations & Extensions, Non-convex constraints, Transaction Cost Models, [[bayesian-black-litterman]]
- References: bayesian-black-litterman, black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc, portfolio-optimization-ml
- Backlinks: bayesian-black-litterman, convex-analysis, convexity, entropy-pooling, finance/adversarial-stress-testing, finance/alpha-stacking, finance/markowitz-mean-variance, gradient-hessian-jacobian, lagrange-multipliers, linear-programming, martingale-optimal-transport

## Entity: finance/systemic-contagion-debtrank
- Title: Systemic Risk and DebtRank
- Category: Risk
- Language: en
- Key Concepts: Relative impact matrix, Dynamic DebtRank, State, Financial Networks, Related Articles, Comparison with Other Systemic Risk Metrics, Propagation, Node States, Extensions, Systemic Impact Score, Stress level, Example, DebtRank, Implementation, Systemic Risk and DebtRank
- References: cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/nash-equilibrium, finance/value-at-risk
- Backlinks: cva-wrong-way-risk, finance/black-swan-scenarios, finance/gnn-finance, finance/repo-market-systemic, graph-theory, network-risk-cascades

## Entity: finance/value-at-risk
- Title: Value at Risk (VaR)
- Category: Risk
- Language: en
- Key Concepts: 2. Parametric (Delta-Normal), Parametric (Variance-Covariance) VaR, VaR vs. CVaR Comparison, Non-subadditivity, Basel IV (FRTB), Parameter Reference, 1. Historical Simulation, Backtesting VaR, Three Calculation Methods, Mathematical Framework, Stressed VaR, Conditional VaR (CVaR), Normality assumption, Kupiec Unconditional Coverage Test, Basel III Traffic Light System
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/xva, futures-hedging, garch-models
- Backlinks: alternative-data-alpha, amihud-illiquidity, copula-models, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/copula-models, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/frtb, finance/gan, finance/hierarchical-risk-parity, finance/isda-simm, finance/monte-carlo-method, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/quasi-monte-carlo, finance/random-matrix-theory, finance/realized-kernels, finance/securitization, finance/systemic-contagion-debtrank, finance/xva, fraud-detection, frtb-es, futures-hedging, generative-scenario-models, kelly-criterion, llm-financial-analysis, lob-prediction, math/lundberg-cramer-ruin, news-sentiment-trading, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, rl-trader, sharpe-ratio-statistics, student-t-hmm-bond-regimes, volatility-forecasting

## Entity: finance/variance-swaps-vix
- Title: Variance Swaps and the VIX
- Category: Risk
- Language: en
- Key Concepts: VIX Term Structure (Typical Contango), Applications, Carry strategies, VIX futures, Dispersion trading, Variance Swap Mechanics, The VIX Index, model-independent, Volatility Risk Premium, Payoff, Risk budgeting, VIX index, Volatility trading, VIX basis, Variance Swap vs Volatility Swap
- References: black-scholes, finance/dispersion-trading, finance/variance-swaps, finance/volatility-surface, garch-models, greeks-options
- Backlinks: finance/delta-hedging-practice

## Entity: finance/xva
- Title: XVA (Valuation Adjustments)
- Category: Risk
- Language: en
- Key Concepts: CVA, initial margin (IM), Wrong-way risk (WWR), KVA — Capital Valuation Adjustment, FRTB-CVA, Trade pricing, FCA, negative exposure, Mathematical Framework, FVA, Capital optimization, XVA, MVA, XVA netting, FBA
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
- Key Concepts: See Also, Expected Shortfall ($CVaR_\alpha$):, 1. VaR & Expected Shortfall (CVaR), Quantitative Risk Management: VaR & CVaR, Value at Risk ($VaR_\alpha$):, 2. Performance Metrics
- References: course-quant-trading, optimal-stopping-and-kelly, statistical-arbitrage-and-pairs-trading
- Backlinks: copula-models-and-tail-dependence, credit-risk-modeling-and-structural-models, portfolio-optimization-and-black-litterman, portfolio-risk-decomposition-marginal-var, stat-tests-for-trading-strategies, statistical-arbitrage-and-pairs-trading

## Entity: deep-rl-execution
- Title: Deep RL for Trade Execution
- Category: Scientific ML
- Language: en
- Key Concepts: State, Risk controls, Algorithm: Proximal Policy Optimisation, Transition, Regulatory constraints, Overview, Almgren-Chriss Closed-Form Baseline, Performance Comparison, Applications in Practice, Reward, Portfolio rebalancing, Objective, Finance:, Mathematical Framework, Ning et al. (2021)
- References: finance/market-impact-scaling, finance/shannon-entropy, generative-scenario-models, lob-prediction, optimal-execution, reinforcement-learning, rl-trader, temporal-fusion-transformer
- Backlinks: ai-market-making, alpha-factor-research, ml-options-pricing, offline-rl, optimal-execution, reinforcement-learning, rough-paths, temporal-fusion-transformer, tool-use

## Entity: generative-scenario-models
- Title: Generative Models for Scenario Generation
- Category: Scientific ML
- Language: en
- Key Concepts: Architecture, Generative Models for Scenario Generation, Regulatory acceptance, Conditional GAN for Regime-Conditional Scenarios, Diffusion models, Overview, FinGAN, Applications in Practice, VAE Training Objective, Validation difficulty, GAN Minimax Objective, Score-Based Diffusion, TimeGAN for Financial Paths, Finance:, Diffusion models for equity returns
- References: copula-models, extreme-value-theory, finance/adversarial-stress-testing, finance/monte-carlo-method, finance/value-at-risk, garch-models, generative-models, stochastic-differential-equations, temporal-fusion-transformer
- Backlinks: deep-rl-execution, generative-models, gnn-credit-risk, llm-financial-analysis, market-microstructure, temporal-fusion-transformer

## Entity: gnn-credit-risk
- Title: Graph Neural Networks for Credit Risk
- Category: Scientific ML
- Language: en
- Key Concepts: Label scarcity, Overview, Corporate credit rating, ESG-linked credit, Applications in Practice, Graph Formulation, Finance:, Mathematical Framework, Prerequisites, Interpretability, Graph Neural Networks for Credit Risk, AI:, Performance benchmarks, Systemic Risk via Spectral Graph Theory, Interbank contagion analysis
- References: attention-mechanisms, copula-models, finance/xva, fraud-detection, generative-scenario-models, graph-neural-networks, llm, llm-financial-analysis, spectral-graph-theory, survival-risk-prediction, transformer-architecture
- Backlinks: finance/credit-risk-models, graph-neural-networks, llm-financial-analysis

## Entity: kan
- Title: Kolmogorov-Arnold Networks (KAN)
- Category: Scientific ML
- Language: en
- Key Concepts: Mathematics:, Still maturing., Grid resolution choice., Applications, Sparsification and pruning., Overview, learnable activation functions on edges, Physics equation discovery:, learnable univariate function, Scalability to high dimensions., How It Works, Compositional structure., Differential equations:, Mathematical Framework, Theorem:
- References: attention-mechanisms, conformal-field-theory, equivariant-nn, finance/spectral-analysis, kolmogorov-arnold-theorem, learnable-activations, pinns, qft-basic, transformer-architecture
- Backlinks: kolmogorov-arnold-theorem, learnable-activations, pinns

## Entity: llm-financial-analysis
- Title: LLM for Financial Analysis
- Category: Scientific ML
- Language: en
- Key Concepts: FinBERT, Hallucination risk, Adversarial inputs, BloombergGPT, Regulatory filing monitoring, Overview, Applications in Practice, Finance:, Mathematical Framework, Macro research synthesis, Tool Use for Live Data, [[rag]] Pipeline for SEC Filings, AI:, Regulatory liability, Retrieval-Augmented Generation
- References: finance/value-at-risk, fine-tuning, generative-scenario-models, gnn-credit-risk, inference-serving, llm, news-sentiment-trading, rag, temporal-fusion-transformer
- Backlinks: alpha-factor-research, gnn-credit-risk, mcp, ml-options-pricing, nlp-financial-analysis, rag, research/mla-financial-reasoning, temporal-fusion-transformer, tool-use

## Entity: neural-operators
- Title: Neural Operators
- Category: Scientific ML
- Language: en
- Key Concepts: Complexity, Applications, Accumulation of error:, DeepONet: Branch and Trunk Decomposition, Fourier layers:, Weather & climate:, Best for, Fourier Neural Operators (FNO), Training and Data Generation, Comparison: DeepONet vs. FNO vs. Graph Neural Operators, Fluid dynamics:, Lift:, Key operation:, Branch network:, Resolution transfer
- References: ai-physics/hamiltonian-nn, equivariant-nn, fokker-planck-equation, numerical-pde-finance, partial-differential-equations, pinns, stochastic-differential-equations
- Backlinks: fourier-neural-operators

## Entity: pinns
- Title: Physics-Informed Neural Networks (PINNs)
- Category: Scientific ML
- Language: en
- Key Concepts: Collocation sampling., Applications, Overview, Data assimilation:, Anomalous diffusion:, How It Works, Scalability., The two sides of a PINN, Finance:, Mathematical Framework, Fluid dynamics:, AI:, Convergence theory:, Key Results & Properties, Architecture choice.
- References: ai-physics/hamiltonian-nn, automatic-differentiation, black-scholes, equivariant-nn, finance/fractional-fokker-planck, kan, partial-differential-equations, schrodinger-equation
- Backlinks: ai-physics/hamiltonian-nn, automatic-differentiation, deep-ritz-method, equivariant-nn, fourier-neural-operators, gaussian-processes, kan, kolmogorov-arnold-theorem, kuramoto-model, learnable-activations, neural-odes, neural-operators, partial-differential-equations

## Entity: temporal-fusion-transformer
- Title: Temporal Fusion Transformer
- Category: Scientific ML
- Language: en
- Key Concepts: Sequence encoding, Quantile calibration, Volatility surface prediction, Architecture, Temporal self-[[attention-mechanisms|attention]], Stationarity assumption, Overview, Applications in Practice, Attention does not equal causation, Finance:, Observed inputs, Static enrichment, Temporal Fusion [[transformer-architecture|Transformer]], Mathematical Framework, AI:
- References: arima-models, attention-mechanisms, deep-rl-execution, garch-models, generative-scenario-models, inference-serving, llm-financial-analysis, transformer-architecture, volatility-forecasting
- Backlinks: ai-market-making, alpha-factor-research, deep-rl-execution, generative-scenario-models, llm-financial-analysis, ml-options-pricing, nlp-financial-analysis

## Entity: ar-models
- Title: AR (Autoregressive) Models
- Category: Signal Analysis
- Language: en
- Key Concepts: Unconditional variance, Interest Rate Modeling, Innovation representation, Autoregressive (AR) model, weakly stationary, Mathematical Framework, ARIMA, AR (Autoregressive) Models, Limitations & Extensions, Homoskedasticity, Yule-Walker equations, Lag selection uncertainty, Stationarity requirement, outside, ARMA
- References: arch-models, arima-models, arma-models, finance/levy-processes, finance/spectral-analysis, math/spectral-theory-operators, mcmc, volatility-forecasting
- Backlinks: arch-models, arima-models, arma-models

## Entity: arima-models
- Title: ARIMA (Integrated ARMA)
- Category: Signal Analysis
- Language: en
- Key Concepts: ARFIMA, Information criteria, Differencing operator, Mathematical Framework, Prerequisites, Yield Curve Dynamics, Limitations & Extensions, Normality of residuals, Unit Root Tests, Special cases, Parameter Table, Cointegration, VAR/VECM, Earnings Forecasting, Seasonal ARIMA (SARIMA)
- References: ar-models, arma-models, finance/cointegration, finance/hurst-exponent, finance/levy-processes, mcmc, volatility-forecasting
- Backlinks: ar-models, arma-models, finance/cointegration, temporal-fusion-transformer

## Entity: arma-models
- Title: ARMA (Autoregressive Moving Average)
- Category: Signal Analysis
- Language: en
- Key Concepts: Spectral density, Box-Jenkins Identification, Interest Rate Modeling, MA models, Linear mean dynamics, ARMA-GARCH, Autocovariance structure, Kalman filter, Mathematical Framework, Macro Signal Construction, Prerequisites, ARIMA, Invertibility condition, AR models, Causality
- References: ar-models, arima-models, black-scholes, finance/spectral-analysis, mcmc, volatility-forecasting
- Backlinks: ar-models, arch-models, arima-models

## Entity: finance/dft
- Title: Discrete Fourier Transform (DFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Interpreting the Coefficients, Spectral leakage, Fixed resolution:, Nyquist–Shannon Sampling Theorem, spectral interpolation, Blackman-Harris, Hamming, Matrix form:, sampling rate, conjugate-symmetric, Discrete Fourier Transform (DFT), Stationarity:, Window Comparison, Hann, Outlier sensitivity:
- References: finance/fft, finance/hilbert-huang-transform, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/fft, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fft
- Title: Fast Fourier Transform (FFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Split-radix, Applications, FFTW, Digital filtering:, The Butterfly Operation, primitive $N$-th root of unity, Convolution Theorem via FFT, Shor's algorithm:, Large integer multiplication:, Radix-4, butterfly, two, Radix-2 DIF, Radix-2 DIT, Stationarity:
- References: finance/dft, finance/shor-algorithm, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/dft, finance/hyperbolic-distributions, finance/levy-esscher-continuous, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fisher-transform
- Title: Fisher Transform
- Category: Signal Analysis
- Language: en
- Key Concepts: The Fisher Transform, Background and Motivation, Visualization: Sharpening the Peaks, Statistical Interpretation, Mathematical Formula, Multi-asset ranking, Fisher Transform, Python: Fisher Transform Implementation, Parameter Reference, Whipsaw risk, Momentum confirmation, Signal normalisation, Transformation, Lag, Signal Generation
- References: finance/hilbert-huang-transform, finance/hurst-exponent, finance/spectral-analysis
- Backlinks: finance/hilbert-huang-transform, finance/spectral-analysis, information-geometry-finance

## Entity: finance/hilbert-huang-transform
- Title: Hilbert-Huang Transform (HHT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Hilbert-Huang Transform (HHT), HHT vs. Fourier vs. Wavelets, Completeness, Python: EMD Workflow, Background and Motivation, Physical interpretability, Stage 1: Empirical Mode Decomposition (EMD), instantaneous frequency, Stage 2: Hilbert Spectral Analysis, Stationarity, Adaptive denoising, Ensemble EMD (EEMD), Parameter Reference, Frequency Resolution, Instantaneous (Local)
- References: finance/fisher-transform, finance/hurst-exponent, finance/spectral-analysis, wavelet-transform
- Backlinks: finance/dft, finance/fisher-transform, finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/realized-kernels
- Title: Intraday Volatility via Realized Kernels
- Category: Signal Analysis
- Language: en
- Key Concepts: Execution algorithms, Robustness, Volatility risk premia, Pre-averaging, Statistical arbitrage, The Realized Kernel Estimator, Asynchronous trading, Parameter Reference, Realized Kernels, Ultra-high-frequency, Mathematical Framework, signature plot, Prerequisites, Intraday Volatility Forecasting via Realized Kernels, VaR models
- References: brownian-motion, finance/spectral-analysis, finance/value-at-risk, garch-models, geometric-brownian-motion, volatility-forecasting, wavelet-transform
- Backlinks: finance/bipower-variation, finance/spectral-analysis, finance/wavelet-transform, jump-robust-volatility, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: kalman-filter
- Title: Kalman Filter
- Category: Signal Analysis
- Language: en
- Key Concepts: Rauch-Tung-Striebel (RTS), Log-Likelihood for Parameter Estimation, Kalman Gain Dynamics, State-Space Representation, Kalman Smoother (RTS Smoother), Parameter Reference, predicted covariance, Kalman filter, observation equation, Extended Kalman Filter (EKF), state equation, Volatility estimation, Order flow imbalance, State (transition) equation:, Observation equation:
- References: finance/particle-filter, hidden-markov-models, mcmc, volatility-forecasting
- Backlinks: conditionally-gaussian-processes, factor-graphs-inference, finance/cointegration, finance/hidden-markov-models, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/transformer-timeseries, innovation-process, math/conditional-expectation-sigma, math/sequential-hypothesis-testing, math/spectral-representation-processes, math/stationary-wide-spectral, multivariate-normal-distribution, nonlinear-filtering, state-space-models

## Entity: finance/lempel-ziv-complexity
- Title: Lempel-Ziv Complexity
- Category: Signal Analysis
- Language: en
- Key Concepts: Background and History, Non-parametric, LZ78 vs LZ76, Sensitivity to order, Mathematical Framework, Python: LZ Complexity with Rolling Analysis, Market Efficiency, Alternative complexity measures, Finite-sample applicability, Asymptotic consistency, Binarization choice, Regime Detection, Limitations and Extensions, Core Principle, High LZ Complexity
- References: finance/hurst-exponent, finance/phase-space-reconstruction, finance/shannon-entropy, hidden-markov-models
- Backlinks: finance/hurst-exponent, finance/phase-space-reconstruction, finance/sha-256, finance/shannon-entropy, financial-entropy, kolmogorov-complexity

## Entity: finance/phase-space-reconstruction
- Title: Phase Space Reconstruction
- Category: Signal Analysis
- Language: en
- Key Concepts: Data Requirements, Embedding as features, Background and Motivation, Embedding Dimension $m$: False Nearest Neighbors, False Nearest Neighbor (FNN), Lyapunov Exponents and Chaos Detection, largest Lyapunov exponent, Stationarity, Skepticism in finance, Non-linear Forecasting, correlation dimension, Prerequisites, Python: Phase Space Reconstruction and FNN, Key Limitations, Parameter Table
- References: finance/hurst-exponent, finance/lempel-ziv-complexity, finance/particle-filter, finance/spectral-analysis, hidden-markov-models
- Backlinks: finance/hidden-markov-models, finance/hurst-exponent, finance/lempel-ziv-complexity

## Entity: finance/prony-hankel-spectral
- Title: Prony's Method and Hankel Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Step 1: Linear Prediction via Hankel System, Related Articles, Regime Interpretation, Hankel matrix, Prony's method, Hankel SVD Filtering, Step 2: Root Finding, Step 3: Amplitude Estimation, Comparison with FFT, Prony's Method and Hankel Spectral Analysis, Problem Formulation, Implementation, Algorithm
- References: finance/hilbert-huang-transform, finance/singular-spectral-analysis, finance/spectral-analysis, fourier-transform, wavelet-transform

## Entity: finance/singular-spectral-analysis
- Title: Singular Spectral Analysis (SSA)
- Category: Signal Analysis
- Language: en
- Key Concepts: Empirical Orthogonal Functions, Step 4 — Diagonal Averaging (Hankelization), Trend, Identifiability, Singular Spectral Analysis (SSA), Multivariate SSA (M-SSA), Business cycle identification, Change-point detection, Window choice, Parameter Reference, Mathematical Framework, Prerequisites, Linear Recurrence Forecasting (LRF), Step 2 — Singular Value Decomposition, W-Correlation
- References: finance/random-matrix-theory, finance/spectral-analysis, math/spectral-theory-operators, volatility-forecasting, wavelet-transform
- Backlinks: finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform

## Entity: finance/spectral-analysis
- Title: Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Leakage, Spectral Analysis, Power Spectrum Visualization, Parseval's theorem, Short series, Lomb-Scargle periodogram, Aliasing, Cross-market lead-lag, Parameter Reference, cross-spectrum, Mathematical Framework, Continuous Fourier Transform, Business cycle detection, Multitaper Spectral Estimation, Filter design
- References: finance/fisher-transform, finance/hilbert-huang-transform, finance/realized-kernels, finance/singular-spectral-analysis, wavelet-transform
- Backlinks: ar-models, arma-models, convolutional-volatility-resolution-clustering, finance/dft, finance/fft, finance/fisher-transform, finance/hilbert-huang-transform, finance/phase-space-reconstruction, finance/prony-hankel-spectral, finance/realized-kernels, finance/shor-algorithm, finance/singular-spectral-analysis, finance/wavelet-transform, finance/zeta-field, fourier-transform, kan, kolmogorov-arnold-theorem, volatility-modulated-spectral-surface

## Entity: volatility-modulated-spectral-surface
- Title: Volatility-Modulated Spectral Surface (VMSS)
- Category: Signal Analysis
- Language: en
- Key Concepts: Deep learning integration, spectral [[shannon-entropy|entropy]], Regime detection, Wigner-Ville Distribution (WVD), standardized returns, Interpretation of absolute levels, Adaptive denoising, Parameter Reference, Adaptive Window Selection, Pseudo-WVD, Mathematical Framework, adaptive window, Invariance to volatility level, Prerequisites, Regime transition signals
- References: finance/gan, finance/realized-kernels, finance/shannon-entropy, finance/spectral-analysis, garch-models, inference-serving, volatility-forecasting, wavelet-transform
- Backlinks: convolutional-volatility-resolution-clustering

## Entity: finance/wavelet-transform
- Title: Wavelet Transform (CWT)
- Category: Signal Analysis
- Language: en
- Key Concepts: phase angle, translation, scalogram, Orthonormality (DWT), Multi-Scale Wavelet Power, power spectrum, Scale-dependent correlation, Common Mother Wavelets, scale, Cross-market lead-lag, Discrete Wavelet Transform (DWT), Parameter Reference, wavelet correlation, Mexican Hat, wavelet coherence
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
- Key Concepts: Overview, Definition

## Entity: bayesian-nonparametrics
- Title: Bayesian Non-parametrics
- Category: Statistical Learning
- Language: en
- Key Concepts: Related Topics, Uncertainty Quantification, Why Use BNP?, The Dirichlet Process (DP), Stick-Breaking construction, Gaussian Processes, Indian Buffet Process (IBP), Visualization: Model Growth, latent feature models, Automatic Complexity Selection, Bayesian Non-parametrics, infinite-dimensional, Flexibility, Gaussian Processes (GP), Chinese Restaurant Process (CRP)
- References: gaussian-processes, mixture-of-experts
- Backlinks: gmm

## Entity: dirichlet-processes
- Title: Bayesian Non-parametrics: Dirichlet Processes
- Category: Statistical Learning
- Language: en
- Key Concepts: Bayesian Non-parametrics: Dirichlet Processes, Mathematical Definition, The Chinese Restaurant Process (CRP), Applications in Clustering, Stick-Breaking Construction

## Entity: concentration-of-measure
- Title: Concentration of Measure
- Category: Statistical Learning
- Language: en
- Key Concepts: Concentration of Measure, McDiarmid's Inequality, The Phenomenon, Talagrand's Concentration Inequality, Rademacher Complexity and Generalization

## Entity: sgd-convergence-theory
- Title: Convergence Theory of Stochastic Gradient Descent
- Category: Statistical Learning
- Language: en
- Key Concepts: Convex and Smooth Functions, Convergence Theory of Stochastic [[convex-optimization|Gradient Descent]], Non-Convex Optimization and the PL Condition, Problem Formulation, Strong Convexity
- References: convex-optimization

## Entity: differential-privacy
- Title: Differential Privacy in ML
- Category: Statistical Learning
- Language: en
- Key Concepts: High Noise, Compliance, Robustness, Low Noise, Differential Privacy in Machine Learning, The Privacy-Utility Trade-off, Gradient Clipping, $(\epsilon, \delta)$-differential privacy, membership inference attacks, Noise Addition, $\epsilon$ (Privacy Budget), User Trust, Related Topics, Why It Matters, DP-SGD: Training with Privacy
- References: ai-theory/adversarial-examples, convex-optimization, federated-learning
- Backlinks: federated-learning

## Entity: gmm
- Title: Gaussian Mixture Models (GMM)
- Category: Statistical Learning
- Language: en
- Key Concepts: Gaussian Mixture Models (GMM), Initialize, responsibility, Relationship to K-Means, Related Topics, E-step, Repeat, M-step, Soft Clustering (Responsibilities), Fitting the Model: The EM Algorithm, mixing weight, soft assignment, The Model Definition, Visualization: GMM vs K-Means
- References: bayesian-nonparametrics, expectation-maximization
- Backlinks: em-algorithm, matrix-calculus

## Entity: kernel-methods-rkhs
- Title: Kernel Methods & RKHS
- Category: Statistical Learning
- Language: en
- Key Concepts: reproducing property, characteristic, Kernel Mean Embeddings, Reproducing Kernel Hilbert Space, Kernel Methods & Reproducing Kernel Hilbert Spaces (RKHS), Mercer's Theorem, The Representer Theorem
- References: math/spectral-theory-operators
- Backlinks: attention-kernel, hilbert-banach-spaces, kde

## Entity: linear-regression
- Title: Linear Regression and Gauss-Markov
- Category: Statistical Learning
- Language: en
- Key Concepts: Homoscedasticity, 1. Ridge Regression (L2 Penalty), Related Topics, Regularization (Ridge and Lasso), 2. Lasso Regression (L1 Penalty), exactly zero, Visualization: The Bias-Variance Trade-off, BLUE (Best Linear Unbiased Estimator), Zero Mean, No Autocorrelation, Normal Equation, Ordinary Least Squares (OLS), The Gauss-Markov Theorem, Linear Regression and the Gauss-Markov Theorem, Gauss-Markov Theorem
- References: bayesian-inference, logistic-regression, mle
- Backlinks: logistic-regression

## Entity: logistic-regression
- Title: Logistic Regression
- Category: Statistical Learning
- Language: en
- Key Concepts: Convexity, Log-Odds, Odds Ratio, [[asymptotic-stats/mle|Maximum Likelihood Estimation (MLE)]], Online Learning, Sigmoid activation, 4. Modern Scaling, 1. The Logistic Model, Binary Cross-[[shannon-entropy|Entropy]], Logistic Function, 3. Interpretation: Odds and Ratios, Logistic Regression: The Link Between Stats and Neural Networks, Decision Boundary, Multinomial (Softmax), Related Topics
- References: convex-optimization, convexity, finance/shannon-entropy, linear-regression, mle, transformer-architecture
- Backlinks: linear-regression

## Entity: normalizing-flows-math
- Title: Mathematical Foundations of Normalizing Flows
- Category: Statistical Learning
- Language: en
- Key Concepts: Composition of Flows, Mathematical Foundations of Normalizing Flows, Continuous Normalizing Flows (CNFs), Liouville Equation, Change of Variables Theorem

## Entity: mechanism-design
- Title: Mechanism Design
- Category: Statistical Learning
- Language: en
- Key Concepts: second-highest price, 1. Second-Price Auction (Vickrey Auction), Visualization: Revenue vs. Welfare, rules, Famous Examples, The Goal: Incentive Compatibility, Multi-Agent Systems, Strategy-proofness, "Reverse Game Theory.", 2. Matching Algorithms (Gale-Shapley), Mechanism Design, stable, The Revelation Principle, Incentive Compatible (IC), Related Topics
- References: llm, mean-field-games, online-learning-regret, rlhf

## Entity: mcts
- Title: Monte Carlo Tree Search (MCTS)
- Category: Statistical Learning
- Language: en
- Key Concepts: Selection, The Four Stages of MCTS, AlphaGo and Neural MCTS, Monte Carlo Tree Search (MCTS), Monte Carlo simulations, Policy Network, $Q(v)/N(v)$ (Exploitation), Visualization: Tree Search vs. Rollout, zero domain knowledge, The UCT Formula, AlphaGo, Tree Search, [[automatic-differentiation|Backpropagation]], Why MCTS is Revolutionary, Simulation (Rollout)
- References: automatic-differentiation, mdp, monte-carlo-integration, multi-armed-bandits
- Backlinks: orm-prm

## Entity: multi-armed-bandits
- Title: Multi-Armed Bandits
- Category: Statistical Learning
- Language: en
- Key Concepts: 3. Thompson Sampling, Exploitation, ad placement, sublinear regret, sample, 2. UCB (Upper Confidence Bound), Contextual Bandits, Visualization: UCB Action Selection, Related Topics, Exploration vs. Exploitation trade-off, 1. $\epsilon$-Greedy, news recommendation, Exploration, Multi-Armed Bandits, Cumulative Regret
- References: bayesian-inference, mdp, online-learning-regret
- Backlinks: mcts

## Entity: naive-bayes
- Title: Naive Bayes Classifier
- Category: Statistical Learning
- Language: en
- Key Concepts: NLP, Related Topics, 3. Why it Works (The Paradox of Naive Bayes), "Naive" Assumption, Decision Boundary vs. Probability, Real-time Filtering, 2. Common Variants, Zero-Shot Baseline, Low Variance, Naive Bayes Classifier: The Power of Independence, 1. The Probabilistic Model, Multinomial Naive Bayes, 4. Modern Use Cases in AI, class label, Gaussian Naive Bayes
- References: bayesian-inference, decision-theory, finance/shannon-entropy, llm, rag
- Backlinks: bayes-theorem

## Entity: online-learning-regret
- Title: Online Learning and Regret
- Category: Statistical Learning
- Language: en
- Key Concepts: Exploration-Exploitation Trade-off, Definition of Regret, Applications, 3. Multiplicative Weights Update (MWU) / Hedge, 2. Follow the Regularized Leader (FTRL), The Online Protocol, Optimization, 1. Follow the Leader (FTL), learn, Regret, Ad Placement, Key Algorithms, Thompson Sampling, Visualization: Regret Scaling, Portfolio Selection
- References: convex-optimization, finance/shannon-entropy, math/information-theory, reinforcement-learning
- Backlinks: mechanism-design, multi-armed-bandits, universal-portfolios

## Entity: pca
- Title: Principal Component Analysis (PCA)
- Category: Statistical Learning
- Language: en
- Key Concepts: maximize the variance, Noise Reduction, Visualization: Finding the Projection, Related Topics, principal components, Applications, Explained Variance, unsupervised dimensionality reduction, empirical covariance matrix, largest eigenvalue, Visualization, explained variance ratio, Principal Component Analysis (PCA), The Mathematical Objective, Spectral Theorem Connection
- References: manifold-learning, math/spectral-theory-operators, variational-autoencoders
- Backlinks: alpha-orthogonalization, eigenvalues-eigenvectors, fastest-mean-reversion, matrix-decompositions, multivariate-normal, pca-statarb, tensor-decompositions

## Entity: attention-kernel
- Title: Self-Attention as a Kernel
- Category: Statistical Learning
- Language: en
- Key Concepts: feature map, In-Context Learning, Linear Transformers and Feature Maps, Transformers as Non-parametric Learners, Related Topics, [[convex-optimization|gradient descent]], The [[attention-mechanisms|Attention]] Mechanism, Reproducing Kernel Hilbert Space (RKHS), Visualization: Attention Surface in RKHS, The Kernel Interpretation, Kernel Methods, Nadaraya-Watson Kernel Regression, Self-[[attention-mechanisms|Attention]], Linear Transformers, Self-[[attention-mechanisms|Attention]] as a Kernel
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, kernel-methods-rkhs, state-space-models, transformer-architecture

## Entity: singular-learning-theory
- Title: Singular Learning Theory
- Category: Statistical Learning
- Language: en
- Key Concepts: Real Log Canonical Threshold (RLCT), Singular Learning Theory, The Free Energy and RLCT, Generalization Error, Resolution of Singularities

## Entity: statistical-mechanics-learning
- Title: Statistical Mechanics of Learning
- Category: Statistical Learning
- Language: en
- Key Concepts: Gardner Volume and Capacity, DERIVATION: The Free Energy of a Linear Perceptron, Replica Symmetry (RS):, Order Parameters and Overlaps, What Is It, Key Phenomena, Statistical Mechanics of Learning, Mathematical Framework, Information-Theoretic vs. Computational Gap:, The Replica Trick, The Teacher-Student Setup, Spin-Glass Transition:, Replica Trick, capacity, Related Topics
- References: ai-theory/neural-tangent-kernel, information-bottleneck-theory, pac-learning

## Entity: variational-inference-math
- Title: Variational Inference
- Category: Statistical Learning
- Language: en
- Key Concepts: The Reparameterization Trick, Mean-Field Approximation, Variational Inference, The Evidence Lower Bound (ELBO)
- References: convex-optimization
- Backlinks: factor-graphs-inference

## Entity: anova
- Title: ANOVA (One-way/Two-way)
- Category: Statistics
- Language: en
- Key Concepts: Two-way ANOVA:, One-way ANOVA:, Overview, One-way vs Two-way
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
- Key Concepts: Hazard Function $h(t)$:, Key Functions, Survival Function $S(t)$:, Overview

## Entity: time-series-basics
- Title: Time Series Basics
- Category: Statistics
- Language: en
- Key Concepts: Autocorrelation, Overview, Stationarity

## Entity: signature-based-models
- Title: Signature-based Models
- Category: Stochastic
- Language: en
- Key Concepts: feature map, Visualization: The First Few Terms, Mathematical Rigor, Dimensionality Reduction, Path Signature, linear regression, 1. Market Simulation (Generative Models), 3. Lead-Lag Relationships, 2. Pricing and Hedging, Why It's a "Game Changer", What is a Path Signature?, non-linear functional, linear, Sig-VAEs, Sig-GANs
- References: generative-models, path-dependent-volatility, rough-paths
- Backlinks: path-dependent-volatility

## Entity: copula-models-and-tail-dependence
- Title: Copula Models & Tail Dependence
- Category: Stochastic & Probability
- Language: en
- Key Concepts: See Also, Copula Models & Tail Dependence, 1. Sklar's Theorem
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
- Key Concepts: Volatility Surface & SABR Model, See Also
- References: course-quant-trading, option-greeks-and-volatility, stochastic-volatility-heston-model

## Entity: math/backward-sde
- Title: Backward Stochastic Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stochastic control:, Comparison theorem, unique solution, G-expectation, Numerical methods, adapted to the filtration, $(Y_t, Z_t)$ is the unknown pair, martingale representation, Reflected BSDEs, G-expectation and sublinear expectations, Historical and contemporary significance, Euler discretization, Risk measures:, Regression Monte Carlo, El Karoui–Peng–Quenez (1997) theorem
- References: feynman-kac, malliavin-calculus, math/martingale-representation, math/quadratic-variation, optional-decomposition, stochastic-control, stochastic-differential-equations
- Backlinks: math/spdes

## Entity: bsdes-nonlinear-pdes
- Title: Backward Stochastic Differential Equations (BSDEs) & Nonlinear PDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Applications, Backward Stochastic Differential Equations (BSDEs) & Nonlinear PDEs, Nonlinear Feynman-Kac Formula, Standard Form

## Entity: clark-ocone-formula
- Title: Clark-Ocone Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Generalizations, Financial Hedging, Clark-Ocone Formula, The Formula
- Backlinks: skorokhod-integral

## Entity: math/convergence-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Diffusion convergence:, Applications, Convergence of numerical schemes., Specialization: Convergence to Levy Processes, random, Specialization: Convergence to Diffusions, Convergence of Semimartingales, Step 1: Tightness., The Semimartingale Topology, Key point:, Justification of continuous-time models., High-frequency econometrics., Jump measure convergence:, Extension to Random Characteristics, The Main Convergence Theorem
- References: brownian-motion, characteristic-functions, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, math/contiguity-measures, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/convergence-stochastic-integrals, math/density-processes, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/martingale-problem, math/predictable-compensator, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/convergence-stochastic-integrals
- Title: Convergence of Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Application: Discrete Hedging Convergence, good sequence, Convergence of Stochastic Integrals, Definition., The Main Theorem, The Meta-Theorem: Discrete Models Approximate Continuous Models, UT (uniform tightness), Good Sequences and the UT Condition, Discrete hedging converges to continuous hedging, The Problem, Stronger version., Related Articles, Theorem (Jakubowski-Memin-Pages; Kurtz-Protter)., Application: Euler Scheme Convergence, The Semimartingale Topology
- References: finance/girsanov-semimartingales, finance/semimartingale-models, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, stochastic-differential-equations
- Backlinks: math/convergence-semimartingales, math/quadratic-variation

## Entity: feynman-kac
- Title: Feynman-Kac Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Example I: The Black-Scholes PDE, survival probability, Applications, Obstacle problems in turbulence., Physics and the Schrödinger equation., curse of dimensionality, Example II: The Heat Equation (V=0), Taking expectations:, infinitesimal generator of the diffusion, Connection to Martingale Representation, Related Articles, Structural credit risk models., Discounting and the Stochastic Discount Factor, American option theory., Numerical Solution: Monte Carlo Instead of Finite Differences
- References: black-scholes, finance/girsanov-semimartingales, finance/optimal-stopping-american, fokker-planck-equation, math/martingale-representation, numerical-pde-finance, partial-differential-equations, path-integral, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/backward-sde, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, stochastic-control, stochastic-differential-equations, stochastic-processes

## Entity: hjm-framework
- Title: HJM (Heath-Jarrow-Morton) Framework
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Forward Rate Dynamics, HJM (Heath-Jarrow-Morton) Framework, Infinite-Dimensional Perspective, HJM Drift Condition
- References: math/spdes, stochastic-differential-equations
- Backlinks: finance/cir-hull-white, finance/libor-market-model

## Entity: fractional-brownian-motion-integration
- Title: Integration with Respect to Fractional Brownian Motion
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Pathwise Young and Rough Path Integration, Financial Modeling, Integration with Respect to Fractional Brownian Motion, Malliavin and Wick-Itô Integrals

## Entity: libor-market-model
- Title: LIBOR Market Model (LMM)
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Calibration and Implementation, LIBOR Market Model (LMM), Measure Change and Drift, Lognormal Forward Rates
- Backlinks: finance/bootstrapping-yield-curve

## Entity: local-time-tanaka
- Title: Local Time and Tanaka Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Yamada-Watanabe Theorem, Paul Lévy's theorem, Related Topics, Applications, Local Time and Tanaka's Formula, Lévy's Theorem and the Reflection Principle, Local Time, Definition and Intuition: Measuring Residence, Sticky Brownian Motion, Tanaka's Formula, Itô calculus of non-smooth functions, Optimal Stopping, Occupation Time Formula, Excursion Decomposition, Visualization: The Occupation Density
- References: brownian-motion, excursion-theory, math/doob-meyer-decomposition, math/optimal-stopping-markov, stochastic-differential-equations
- Backlinks: math/quadratic-variation

## Entity: levy-ito-decomposition
- Title: Lévy-Itô Decomposition
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Key Insights, compensated random measure, Stable process, Small vs. large jump distinction is mathematical, not economic, Poisson random measure is universal, Quadratic variation is discontinuous, Stationary independent increments, Right-continuity with left limits, Small jumps, CGMY Model, Theorem (Lévy-Itô), Lévy Measure and Characteristic Function, Merton Jump-Diffusion, Lévy-Khintchine formula, Large jumps
- References: finance/levy-processes, finance/variance-gamma, math/doleans-dade-exponential, math/infinitely-divisible-distributions, math/predictable-compensator, merton-jump-diffusion, stochastic-differential-equations
- Backlinks: math/point-processes, math/quadratic-variation, math/sde-numerical-methods, math/subordinators

## Entity: malliavin-calculus
- Title: Malliavin Calculus
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Introduction, Clark-Ocone Formula, Malliavin Calculus, Malliavin Derivative, Applications: Greeks in Finance
- Backlinks: course-math-for-ai, fbm-integration, math/backward-sde, math/quadratic-variation, math/spdes, math/stratonovich-integral, wiener-chaos

## Entity: malliavin-greeks
- Title: Malliavin Greeks
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Integration by Parts on Wiener Space, Malliavin Greeks, Delta and Gamma Weights, Advantages

## Entity: mckean-vlasov-sdes
- Title: McKean-Vlasov SDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: McKean-Vlasov SDEs, $N$-Particle System and Propagation of Chaos, Non-linear Fokker-Planck Equation, Definition
- References: partial-differential-equations, stochastic-differential-equations

## Entity: numerical-methods-jump-diffusions
- Title: Numerical Methods for Jump-Diffusions
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Higher-Order Milstein Schemes, Infinite Activity Lévy Noise, Euler-Maruyama with Jumps, Numerical Methods for Jump-Diffusions
- References: central-limit-theorem, stochastic-differential-equations

## Entity: math/sde-numerical-methods
- Title: Numerical Methods for SDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Euler–Maruyama, Dimension, Wagner–Platen Expansion, Applications, Implicit Methods for Stiff SDEs, Milstein scheme, Verification, Weak convergence, Generative Modeling, Step-size tuning, The Standard [[stochastic-differential-equations|SDE]], Lie–Trotter, Physics Simulations, Wagner–Platen (stochastic Taylor) expansion, Milstein Scheme
- References: brownian-bridge, diffusion-models, feynman-kac, finance/monte-carlo-method, levy-ito-decomposition, math/cameron-martin-formula, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/stratonovich-integral

## Entity: math/predictable-compensator
- Title: Predictable Compensator and Dual Predictable Projection
- Category: Stochastic Calculus
- Language: en
- Key Concepts: the law of a semimartingale with independent increments is completely determined by its triplet, Applications, Example: Hawkes process., Theorem (Dual predictable projection)., Compensator of a Point Process, Role in Convergence Theory, Filtering., Neuroscience., The Predictable Triplet $(B, C, \nu)$, Example: Cox process., Levy processes., foundation, Compensator of a Random Measure, predictable compensator, The Innovation Martingale
- References: brownian-motion, finance/levy-processes, finance/semimartingale-models, martingale-clt, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-martingales, math/doob-meyer-decomposition, math/functional-limit-theorems
- Backlinks: levy-ito-decomposition, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/density-processes, math/infinitely-divisible-distributions, math/martingale-problem, math/quadratic-variation, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/quadratic-variation
- Title: Quadratic Variation
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Itô isometry, Definition and fundamental properties, Brownian motion: the canonical example, Quadratic Variation, The Kunita–Watanabe inequality, Monotonicity, semimartingale, Bilinearity, Discontinuous semimartingales and jump decomposition, Related foundations, Path continuity, Covariation and the polarization identity, Realized variance, Semimartingale decomposition and predictable quadratic variation, Tanaka formula
- References: levy-ito-decomposition, local-time-tanaka, malliavin-calculus, math/convergence-stochastic-integrals, math/doob-meyer-decomposition, math/predictable-compensator, stochastic-differential-equations
- Backlinks: math/backward-sde, math/stratonovich-integral

## Entity: reflected-sdes-skorokhod
- Title: Reflected SDEs & Skorokhod Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Reflected SDEs & Skorokhod Problem, Application to American Options, RSDE Dynamics, The Skorokhod Problem
- References: stochastic-control

## Entity: rough-paths
- Title: Rough Path Theory
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Robustness, iterated integrals, Signature Transform, The Signature of a Path, Signature, 2 ≤ p < 3, The Fundamental Problem, 3 ≤ p, p-rough path, Stochastic Differential Equations (SDEs), Terry Lyons, Applications in AI: Signature Transforms, Path Networks, p < 2, Compact Representation
- References: brownian-motion, deep-rl-execution, stochastic-differential-equations
- Backlinks: fbm-integration, math/spdes, math/stratonovich-integral, path-dependent-volatility, signature-based-models

## Entity: math/stochastic-calculus/rough-path-signatures
- Title: Rough Path Theory and Signatures
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Signatures in Machine Learning, Related Topics, Noise Robustness:, deterministic, Invariance to Reparameterization:, Universal Feature Map:, Dimension Reduction:, The Problem, Rough Path Theory, Signature Transform, Key Properties:, Rough Path Theory and Signatures, What is a Path Signature?, Signature Transforms, Quantitative Finance
- References: time-series

## Entity: rough-volatility-bergomi
- Title: Rough Volatility: The Rough Bergomi Model
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Computational Challenges, The Volatility Smile, Rough Volatility: The Rough Bergomi Model, The Rough Bergomi (rBergomi) Model

## Entity: semimartingales-on-manifolds
- Title: Semimartingales on Manifolds
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Semimartingales on Manifolds, Eells-Elworthy-Malliavin Construction, Stratonovich Calculus, Stochastic Development and Parallel Transport
- References: manifold-learning, math/differential-geometry, stochastic-differential-equations

## Entity: math/skorokhod-topology
- Title: Skorokhod Topology and the Space D
- Category: Stochastic Calculus
- Language: en
- Key Concepts: separable complete metric space, Applications, Why C-Space Topology Is Insufficient, The Multidimensional Case, Key properties of $(\mathbb{D}[0,T], J_1)$:, Convergence of Discrete-Time to Continuous-Time Processes, Definition., The M1 Topology, M1 topology, Related Articles, completed graph, The J1 Topology (Skorokhod's Main Topology), Skorokhod Representation Theorem, Diffusion approximation., predictable characteristics
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, math/discrete-martingales, math/weak-convergence-prokhorov
- Backlinks: math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/martingale-problem, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/triangular-arrays-processes

## Entity: stable-processes
- Title: Stable Processes and Lévy Flights
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Lévy Flights, Lévy Flight, Applications, Heavy Tails, Optimization, $\alpha < 2$, Alpha-Stable Distributions, Stable Processes and Lévy Flights, Stable Processes, Foraging Patterns, Lévy-flight-based Metaheuristics, Super-diffusion, The Fractional [[spectral-graph-theory|Laplacian]], Financial Crashes, Lévy Flights vs. Brownian Motion
- References: extreme-value-theory, finance/levy-processes, fractional-brownian-motion, spectral-graph-theory

## Entity: stochastic-manifolds
- Title: Stochastic Calculus on Manifolds
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Applications, half the Laplace-Beltrami operator, Probability Theory, Visualization: Random Walk on a Sphere, Stratonovich integral, The Challenge of Curvature, Itô, Brownian Motion on a [[manifold-learning|Manifold]], stochastic parallel transport, Robotics and Control, Eells-Elworthy-Malliavin (EEM), Stratonovich, Biophysics, Related Topics, Information Geometry
- References: manifold-learning, math/differential-geometry, ricci-flow, stochastic-differential-equations

## Entity: stochastic-control
- Title: Stochastic Control
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Linear-Quadratic-Gaussian (LQG) Control, [[markowitz-mean-variance|Markowitz portfolio theory]], Optimal Execution and Market Microstructure, Riccati differential equation, value function, free boundary problem, [[stochastic-differential-equations|Stochastic differential equations]], Stochastic Control, singular, Further Reading, The Hamilton-Jacobi-Bellman Equation, The optimal risky allocation is constant, linear in state, [[feynman-kac|Feynman-Kac formula]], policy optimization
- References: avellaneda-stoikov, feynman-kac, finance/markowitz-mean-variance, finance/optimal-stopping-american, numerical-pde-finance, optimal-execution, reinforcement-learning, stochastic-differential-equations
- Backlinks: convex-analysis, convex-optimization, math/backward-sde, math/ode-stability, mdp, merton-portfolio, optimal-execution, path-integral-control, reflected-sdes-skorokhod, stochastic-games, stochastic-maximum-principle

## Entity: stochastic-control-partial-info
- Title: Stochastic Control with Partial Information
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stochastic Control with Partial Information, Filtering:, Separation Principle, The Information State, Control:, Dual Control
- References: nonlinear-filtering, reinforcement-learning

## Entity: stochastic-differential-equations
- Title: Stochastic Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stochastic Differential Equations (SDE), 3. Itô's Lemma, Strong Solutions, Reverse SDE, Physics, Forward SDE, Fokker-Planck equation, Itô integral, 2. General Form of an SDE, Finance, part of the solution, Wiener process, strong solution, drift coefficient, 1. Foundations: Brownian Motion
- References: brownian-motion, feynman-kac, geometric-brownian-motion, heston-model, math/martingale-problem, nonlinear-filtering
- Backlinks: activation-functions-math, brownian-bridge, computational-complexity-pac-bayes, conditionally-gaussian-processes, course-math-for-ai, differential-equations, diffusion-models, diffusion-sde-math, equivariant-diffusion-models, ergodic-theory-sgd, feller-processes, feynman-kac, finance/hjm-framework, finance/libor-market-model, finance/short-rate-models, fokker-planck-equation, generative-scenario-models, geometric-brownian-motion, hjm-framework, information-theory-rate-distortion, levy-ito-decomposition, local-time-tanaka, math-reasoning-chains-rl, math/backward-sde, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/interacting-particle-systems, math/martingale-problem, math/martingale-representation, math/ode-stability, math/quadratic-variation, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, math/tightness-semimartingales, mckean-vlasov-sdes, merton-portfolio, mixture-of-experts-routing, neural-operators, neural-sdes-finance, nonequilibrium-stat-mech-diffusion, nonequilibrium-statmech, nonlinear-filtering, numerical-methods-jump-diffusions, ornstein-uhlenbeck, ornstein-uhlenbeck-process, pde-hamilton-jacobi, poisson-jump-sdes, quantization-ptq-information, reasoning-models-prm-orm, regularization-implicit-bias, renormalization-group-dl, rough-paths, semimartingales-on-manifolds, speculative-decoding-medusa, spin-glasses-hopfield, stochastic-calculus-manifolds, stochastic-control, stochastic-games, stochastic-manifolds, stochastic-maximum-principle, stochastic-processes, tokenization-bpe-unigram, wentzell-freidlin, wiener-chaos

## Entity: stochastic-games
- Title: Stochastic Differential Games
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stochastic Differential Equations (SDEs), Visualization: Strategy Interaction, saddle-point, Types of Equilibria, Related Topics, Applications, 2. Zero-Sum Games, The Master Equation and MFGs, Mathematical Formulation, Master Equation, Stochastic Differential Games, Cybersecurity, Isaacs Equation, Climate Change, Quantitative Finance
- References: mean-field-games, stochastic-control, stochastic-differential-equations

## Entity: fbm-integration
- Title: Stochastic Integration for fBM
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Wick product, 2. The Stratonovich-type Integral (Wick Product), Related Topics, Long-Memory Systems, Why It Matters for Finance and AI, Visualization: Integration Regularity, The Challenge, Young Integration, Malliavin derivative, Fractional Volatility, Rough Volatility, Stochastic Integration for Fractional Brownian Motion, Rough Path Theory, not, 1. The Skorokhod Integral (Malliavin Calculus)
- References: fractional-brownian-motion, malliavin-calculus, rough-paths

## Entity: stochastic-maximum-principle
- Title: Stochastic Maximum Principle
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Comparison with HJB, Maximum Principle, Stochastic Maximum Principle, Hamiltonian and Adjoint Equations
- References: stochastic-control, stochastic-differential-equations

## Entity: math/spdes
- Title: Stochastic Partial Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: paracontrolled distributions, Cole–Hopf transformation, Hairer's Regularity Structures and Paracontrolled Distributions, The Semilinear SPDE Framework, variational methods, Kardar–Parisi–Zhang (KPZ) equation, stochastic heat equation, Walsh integral, Finance, References, Introduction, Atmospheric and geophysical fluid dynamics, stochastic Burgers equation, Materials science, Mathematical biology
- References: feynman-kac, malliavin-calculus, math/backward-sde, math/interacting-particle-systems, partial-differential-equations, rough-paths, spectral-graph-theory, stochastic-differential-equations
- Backlinks: hjm-framework

## Entity: math/stratonovich-integral
- Title: Stratonovich Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Example: Geometric Brownian Motion., coordinate-invariant, Martingale property, Quadratic covariation, Stratonovich [[stochastic-differential-equations|SDE]], Comparison Table: Itô vs. Stratonovich, without correction, The Onsager-Machlup Functional, Conversion Formula: Stratonovich to Itô, calculus, Proof sketch:, Definition via Midpoint Riemann Sums, geometric structure, Physics, Physical Interpretation and Langevin Equations
- References: brownian-motion, feynman-kac, malliavin-calculus, manifold-learning, math/cameron-martin-formula, math/quadratic-variation, math/sde-numerical-methods, rough-paths, stochastic-differential-equations
- Backlinks: wiener-chaos

## Entity: skorokhod-integral
- Title: The Skorokhod Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Skorokhod Integral, Duality with Malliavin Derivative, Non-Adapted Integration, Anticipative Calculus
- References: clark-ocone-formula

## Entity: math/martingale-problem
- Title: The Stroock-Varadhan Martingale Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: diffusion approximation, duality, Formulation, Semimartingale Perspective, probability measure, Queueing systems., Theorem., Interacting particle systems., Fokker-Planck equation, Why Martingale Problems Are Easier, solves the martingale problem, martingale problem, Proof Sketch of Uniqueness, Connection to SDEs, Theorem (Stroock-Varadhan).
- References: brownian-motion, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, stochastic-differential-equations
- Backlinks: stochastic-differential-equations

## Entity: math/tightness-semimartingales
- Title: Tightness of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Rebolledo's Theorem, Applications, UT (uniform tightness), C-Tightness, Tightness and the Main Convergence Theorem, Characterization., Definition., tightness, Related Articles, Aldous's Condition, Diffusion approximations., Converse direction., tight, Donsker's invariance principle., Bounded initial values:
- References: brownian-motion, finance/semimartingale-models, martingale-clt, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov, stochastic-differential-equations
- Backlinks: math/convergence-stochastic-integrals, math/triangular-arrays-processes

## Entity: math/triangular-arrays-processes
- Title: Triangular Arrays and Convergence to Processes with Independent Increments
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Diffusion convergence:, Tightness., Setting: Triangular Arrays of Processes, Triangular Arrays and Convergence to Processes with Independent Increments, Theorem., Convergence to general processes with independent increments., functional Lindeberg-Feller theorem, The Functional Lindeberg-Feller Theorem, Jump measure convergence:, Realized volatility, Infinitesimal condition (Lindeberg):, Connection to Classical Results, Convergence to Brownian motion (functional CLT)., Proof Architecture, Power variations
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/levy-processes, finance/semimartingale-models, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales
- Backlinks: math/functional-limit-theorems

## Entity: wiener-chaos
- Title: Wiener Chaos and Multiple Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Hypercontractivity, Wiener-Itô Decomposition, [[stratonovich-integral|Stratonovich integrals]], [[characteristic-functions|Characteristic functions]], Hermite Polynomials and Orthogonality, Applications in Financial Mathematics, Integration by parts, Relation to [[malliavin-calculus|Malliavin calculus]], Theorem, Malliavin Derivative, Fourth Moment Theorem (Nualart-Peccati), Product rule, Equivalent definition, Quantum Field Theory, Wiener Chaos and Multiple Stochastic Integrals
- References: characteristic-functions, malliavin-calculus, math/information-theory, math/stratonovich-integral, stochastic-differential-equations

## Entity: arch-models
- Title: ARCH Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: Strict stationarity, Non-negativity constraints, Parameter constraints, VaR Calculation, Kurtosis, FIGARCH, ARCH Models, Mathematical Framework, Prerequisites, Conditional Volatility: ARCH(1) Simulation, unconditional variance, Limitations & Extensions, ARCH(q) requires large $q$, EGARCH, ARCH-LM Test
- References: ar-models, arma-models, finance/levy-processes, garch-models, mcmc, volatility-forecasting
- Backlinks: ar-models, convolutional-volatility-resolution-clustering, finance/stylized-facts-returns, math/central-limit-theorem, math/ergodic-theorems-birkhoff, math/martingale-clt, math/stochastic-recursive-sequences

## Entity: bmo-martingales
- Title: BMO Martingales
- Category: Stochastic Processes
- Language: en
- Key Concepts: John-Nirenberg Inequality, Definition, Application: Kazamaki and Novikov, BMO Martingales

## Entity: finance/bipower-variation
- Title: Bipower Variation
- Category: Stochastic Processes
- Language: en
- Key Concepts: tripower quarticity, Bipower Variation, Background: Realised Variance and Jumps, Jump Test, Definition, Implementation, HAR-RV-J Model, Convergence, Related Articles, continuous component, Bipower Variation (BPV), Heterogeneous Autoregressive
- References: extreme-value-theory, finance/levy-processes, finance/realized-kernels, garch-models, volatility-forecasting
- Backlinks: finance/rough-volatility, finance/stylized-facts-returns, finance/variance-swaps, jump-robust-volatility

## Entity: brownian-bridge
- Title: Brownian Bridge
- Category: Stochastic Processes
- Language: en
- Key Concepts: Sequential testing:, Bridge sampling:, Barrier option pricing:, Bridge Between Arbitrary Points, Definition, Applications in Finance and Numerical Methods, Karhunen-Loève Expansion, Kolmogorov-Smirnov Statistics, Brownian Meanders and Excursions, [[stochastic-differential-equations|SDE]] Representation and Numerical Singularity, Related Constructions
- References: finance/barrier-asian-options, finance/monte-carlo-method, math/spectral-theory-operators, ornstein-uhlenbeck-process, stochastic-differential-equations
- Backlinks: course-math-for-ai, empirical-processes, math/gaussian-process-sample-paths, math/random-walks, math/sde-numerical-methods

## Entity: brownian-motion
- Title: Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: heat equation, Strong Markov, reflection principle, Geometric Brownian Motion, Multidimensional Brownian Motion, Derivative Pricing, Martingale, quadratic variation, Itô's Lemma, Independent increments, Mathematical Framework, Connection to PDEs, standard Wiener process, Quadratic Variation, Limitations & Extensions
- References: avellaneda-stoikov, black-scholes, finance/levy-processes, geometric-brownian-motion, mcmc, schrodinger-equation
- Backlinks: avellaneda-stoikov, black-scholes, copula-models, cox-process, dv01, excursion-theory, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/change-of-numeraire, finance/coherent-risk-measures, finance/efficient-market-hypothesis, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/free-boundary-american, finance/girsanov-semimartingales, finance/hjm-framework, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/libor-market-model, finance/quasi-monte-carlo, finance/real-options, finance/realized-kernels, finance/self-similarity-fractality, finance/semimartingale-models, finance/short-rate-models, finance/stable-distributions, fokker-planck-equation, geometric-brownian-motion, innovation-process, law-iterated-logarithm, local-time-tanaka, martingale, math/absolute-continuity-process-measures, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/central-limit-theorem, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-markov-chains, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/ergodic-theorems-birkhoff, math/functional-limit-theorems, math/glivenko-cantelli, math/hausdorff-measure, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/martingale-clt, math/martingale-problem, math/martingale-representation, math/predictable-compensator, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, math/stratonovich-integral, math/tightness-semimartingales, math/triangular-arrays-processes, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, multifractal-processes, neural-odes, nonlinear-filtering, ornstein-uhlenbeck, partial-differential-equations, rough-paths, sle, stochastic-differential-equations, stochastic-processes

## Entity: finance/cir-hull-white
- Title: CIR and Hull-White Interest Rate Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: Feller condition, Hull-White Model, Related Articles, Hull-White, Zero-coupon bond price, Cox-Ingersoll-Ross Model, Cox-Ingersoll-Ross (CIR), Implementation, CIR and Hull-White Interest Rate Models
- References: finance/libor-sofr, finance/nelson-siegel-svensson, finance/swaps, hjm-framework, ornstein-uhlenbeck-process
- Backlinks: finance/bond-options-gaussian, finance/bootstrapping-yield-curve, finance/libor-market-model, finance/libor-sofr, finance/short-rate-models

## Entity: convergence-of-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Processes
- Language: en
- Key Concepts: Convergence of Semimartingales, Convergence of Characteristics, Tightness and Aldous' Criterion, Skorokhod Space $J_1$ Topology
- References: statistical-mechanics

## Entity: cox-process
- Title: Cox Process (Doubly Stochastic)
- Category: Stochastic Processes
- Language: en
- Key Concepts: Intensity, Independence assumption, Comparison: Poisson vs Cox Process, hazard rate, Cox process, intensity-based (reduced-form) credit risk models, overdispersion, Cox Process (Doubly Stochastic), Mathematical Framework, CIR Intensity Path and Event Arrivals, Feller condition, doubly stochastic Poisson process, Overdispersion, stochastic randomness at two levels, Limitations & Extensions
- References: avellaneda-stoikov, brownian-motion, copula-models, cs01, finance/levy-processes
- Backlinks: avellaneda-stoikov, copula-models, cs01, finance/copula-models, finance/hawkes-process, finance/levy-processes, finance/semimartingale-models, math/point-processes

## Entity: dirichlet-forms
- Title: Dirichlet Forms
- Category: Stochastic Processes
- Language: en
- Key Concepts: Dirichlet form, Dirichlet Forms, Markovian, Fractals and Manifolds, Dirichlet Form, The Core Concept: Energy and [[shannon-entropy|Entropy]], Why Use Dirichlet Forms?, energy, Markov Process, Visualization: Energy Minimization, Markov processes, Closed, Brownian motion, Stability, Connection to Operators and Processes
- References: finance/shannon-entropy, measure-theory, operator-semigroups

## Entity: excursion-theory
- Title: Excursion Theory
- Category: Stochastic Processes
- Language: en
- Key Concepts: Kiyosi Itô, Itô's Excursion Measure ($n$), Related Topics, Fine Structure of Trajectories, Applications, Stochastic Integration, excursions, Visualization: Excursion Decomposition, Itô Measure, Poisson Point Process, Fluctuation Theory, The Excursion Process, Excursion Theory, The Intuition: Slicing the Path
- References: brownian-motion, poisson-process
- Backlinks: local-time-tanaka

## Entity: feller-processes
- Title: Feller Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: 4. Probabilistic Consequences, Hille-Yosida Theorem, Feller Property (Invariant Space), pseudo-differential operator, functional analysis, Lévy-type operator, Infinitesimal Generator, Feller process, A. Feller Processes in Quantitative Finance, Courrège's Theorem, Strong Continuity, Lévy jump kernel $\nu(x, dy)$, 1. The Functional Analytic Definition, Feller Processes: The Analytic Foundation of Markov Dynamics, Drift vector $b_i(x)$
- References: finance/levy-processes, operator-semigroups, spectral-graph-theory, stochastic-differential-equations
- Backlinks: martingale, operator-semigroups

## Entity: finance/fractional-fokker-planck
- Title: Fractional Fokker-Planck Equation
- Category: Stochastic Processes
- Language: en
- Key Concepts: Option pricing under anomalous diffusion, Connection to the Hurst Exponent, Continuous Time Random Walks (CTRW), Multiscaling, Normal diffusion, non-Markovian, Stationarity, Parameter Reference, Space-Fractional FPE (Lévy Flights), Visualization: Standard vs. Fractional Variance Scaling, Python: Numerical Concept (CTRW Simulation), Prerequisites, Lévy flights, VaR with memory, Background
- References: brownian-motion, finance/hurst-exponent, finance/levy-processes, garch-models, geometric-brownian-motion, mcmc, spectral-graph-theory
- Backlinks: finance/hurst-exponent, finance/levy-processes, finance/self-similarity-fractality, partial-differential-equations, pinns

## Entity: freidlin-wentzell-theory
- Title: Freidlin-Wentzell Theory
- Category: Stochastic Processes
- Language: en
- Key Concepts: Action Functional (Rate Function), Small Noise Perturbation, Freidlin-Wentzell Theory, Exit Problem and Kramers' Law
- References: statistical-mechanics

## Entity: gff
- Title: Gaussian Free Field (GFF)
- Category: Stochastic Processes
- Language: en
- Key Concepts: SLE curves, Spatial Correlation Structures, Effective Field Theory, Markov Random Fields, Quantum Gravity, Random Surfaces, 1. Mathematical Definition, [[sle|Schramm-Loewner Evolution]], Green's Function, Graph Theory, 3. The Link to SLE and Geometry, 4. Discrete GFF and Algorithms, Intuition, 5. Why Tier-1 Quants care, Dirichlet Energy
- References: laplacian, quantum-information-entropy, schwartz-distributions, sle
- Backlinks: sle

## Entity: math/gaussian-process-sample-paths
- Title: Gaussian Process Sample Paths
- Category: Stochastic Processes
- Language: en
- Key Concepts: Dudley's [[shannon-entropy|Entropy]] Integral, Dudley's entropy integral, metric [[shannon-entropy|entropy]], Overview, Talagrand's majorizing measures, smooth, [[Brownian bridge]], equivalent, Cameron–Martin formula, Proof sketch, Kolmogorov criterion, Example (Ornstein–Uhlenbeck), Dudley's [[shannon-entropy|entropy]] integral, Key insight, majorizing measures
- References: brownian-bridge, empirical-processes, finance/shannon-entropy, fractional-brownian-motion, math/cameron-martin-formula, math/concentration-inequalities
- Backlinks: math/nonparametric-regression

## Entity: geometric-brownian-motion
- Title: Geometric Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Key Statistical Properties, Correlation structure, Geometric Brownian Motion, Simulated Path Fan, Parameter Reference, Portfolio simulation, Risk-Neutral Pricing, Monte Carlo simulation, Gaussian log-returns, Prerequisites, Background, log-normally distributed, Itô's Lemma and the Closed-Form Solution, Continuous paths, The Stochastic Differential Equation
- References: black-scholes, brownian-motion, finance/levy-processes, heston-model, stochastic-differential-equations, volatility-forecasting
- Backlinks: black-scholes, brownian-motion, differential-equations, finance/bachelier-formula, finance/black-scholes-derivations, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hurst-exponent, finance/levy-esscher-continuous, finance/realized-kernels, finance/semimartingale-models, finance/stefan-problem-american, finance/volatility-surface, fokker-planck-equation, futures-hedging, greeks-options, math/absolute-continuity-process-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/functional-limit-theorems, math/martingale-problem, math/sequential-hypothesis-testing, merton-portfolio, risk-neutral-valuation, stochastic-differential-equations, stochastic-processes

## Entity: finance/hawkes-process
- Title: Hawkes Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Neural Hawkes, Parameter Reference, Order book dynamics, branching ratio, baseline intensity, Hawkes with inhibition, Flash crashes, Background, Compensator and Likelihood, News impact, Stationarity requirement, Python: Simulating a Hawkes Process, Mathematical Definition, compensator, Hawkes process
- References: cox-process, finance/monte-carlo-method, garch-models, geometric-brownian-motion
- Backlinks: finance/order-flow-imbalance, finance/semimartingale-models, lob-propagators, market-microstructure, multivariate-hawkes, queue-reactive-models

## Entity: finance/hurst-exponent
- Title: Hurst Exponent
- Category: Stochastic Processes
- Language: en
- Key Concepts: Variance Ratio Test, Random Walk (Brownian Motion), Spurious long memory, Estimation bias, Anti-persistent (Mean-Reverting) Series, Python: Multiple Hurst Estimators, $H = 0.5$, Parameter Reference, $0 < H < 0.5$, Market Regimes Visualization, Strategy selection, Hurst Exponent (H), Interpretation of H, Market efficiency testing, Background
- References: finance/fractional-fokker-planck, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, geometric-brownian-motion, hidden-markov-models
- Backlinks: arima-models, finance/fisher-transform, finance/fractional-fokker-planck, finance/hilbert-huang-transform, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, finance/self-similarity-fractality, finance/stable-distributions, finance/stylized-facts-returns, fractional-cointegration

## Entity: finance/hyperbolic-distributions
- Title: Hyperbolic Distributions and Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: VaR and CVaR, Hyperbolic Distributions and Processes, Pricing model calibration, Student $t$, Eberlein-Keller (1995), infinitely divisible, Connection to Lévy processes, Related Articles, [[stable-distributions|Stable]], Normal, Credit models, Generalized hyperbolic distributions, semi-heavy tails, heavy tails, finite moments of all orders, and analytical formulas, all moments are finite
- References: brownian-motion, cornish-fisher-cvar, finance/fft, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/levy-processes
- Title: Lévy Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: CGMY / KoBoL Process, Background and Motivation, Correlation structure, Poisson Process, Stationary increments, Key Examples, Python: Jump-Diffusion Simulation, Diffusion, Definition and Properties, Scaling, Independent increments, Compound Poisson Process, characteristic triplet, Calibration complexity, Variance Gamma (VG) Process
- References: cox-process, finance/fractional-fokker-planck, finance/monte-carlo-method, heston-model, ornstein-uhlenbeck-process
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, brownian-motion, characteristic-functions, clt, cornish-fisher-cvar, cox-process, feller-processes, finance/bipower-variation, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/merton-jump-diffusion, finance/variance-gamma, finance/zeta-field, geometric-brownian-motion, kelly-criterion, levy-ito-decomposition, levy-structured-products, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/martingale-representation, math/predictable-compensator, math/skorokhod-topology, math/stochastic-recursive-sequences, math/subordinators, math/triangular-arrays-processes, math/wiener-hopf-factorization, multifractal-processes, numeraire-invariant-hedging, occupation-measures-local-times, ornstein-uhlenbeck-process, stable-processes, stochastic-processes

## Entity: math/markov-chain-mixing
- Title: Markov Chain Mixing Times
- Category: Stochastic Processes
- Language: en
- Key Concepts: burn-in period, Geometry of state space:, Coupon Collector Example, Spectral Gap and Convergence Rate, preconditioning, reversible, Total Variation Distance and Stationarity, Poincaré inequality, Minimum stationary probability, total variation distance, Summary of Key Results, See also, Cheeger's inequality, Spectral gap, Mixing Time Definition
- References: central-limit-theorem, math/concentration-inequalities, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/renewal-theory, math/spectral-theory-operators
- Backlinks: math/coupling-methods, math/geometric-ergodicity, math/interacting-particle-systems, math/spectral-theory-operators, queuing-theory, random-walks-groups, time-series

## Entity: finance/merton-jump-diffusion
- Title: Merton Jump-Diffusion Model
- Category: Stochastic Processes
- Language: en
- Key Concepts: Option Pricing Formula, Merton Jump-Diffusion Model, Merton (1976) Jump-Diffusion model, Related Articles, Implementation, Model
- References: black-scholes, finance/levy-processes, finance/variance-gamma, heston-model

## Entity: multifractal-processes
- Title: Multifractal Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Fluid Turbulence, Multiplicative Cascade, Multifractal Spectrum ($f(\alpha)$), Brownian motion, Related Topics, The Limitation of Monofractals, Financial Markets (MSMR), Multifractal Processes, Network Traffic, Visualization: Monofractal vs. Multifractal, Applications in Finance and Physics, Multifractal Cascade Models, Multifractal Process, Multifractal Random Walk
- References: brownian-motion, finance/levy-processes, fractional-brownian-motion

## Entity: occupation-measures-local-times
- Title: Occupation Measures and Local Times of Lévy Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Tanaka's Formula and Discontinuities, Occupation Measures and Local Times of Lévy Processes, Fourier Analytic Conditions, Occupation Measure
- References: finance/levy-processes, fourier-transform

## Entity: ornstein-uhlenbeck
- Title: Ornstein-Uhlenbeck Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Finance (Vasicek Model), Visualization: Mean Reversion Path, Ornstein-Uhlenbeck Process, Related Topics, $\mu$ (Long-term mean), AI (Diffusion Models), 2. Stationarity and Normality, Applications, 1. Mean Reversion, The [[stochastic-differential-equations|SDE]] Definition, $\theta > 0$ (Rate of mean reversion), $\sigma > 0$ (Volatility), Physics, 3. Autocovariance, mean-reverting
- References: brownian-motion, math/stationary-wide-spectral, stochastic-differential-equations
- Backlinks: course-math-for-ai, stochastic-processes

## Entity: ornstein-uhlenbeck-process
- Title: Ornstein-Uhlenbeck Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Background and History, stationary (invariant) distribution, Vasicek (1977), MLE Parameter Estimation, Pairs Trading Spread Model, Autocorrelation Function, Time-varying parameters, half-life, Stochastic Differential Equation ([[stochastic-differential-equations|SDE]]), Exact Solution via Integrating Factor, volatility, Ornstein-Uhlenbeck (OU) process, Mean-Reverting Property, Multidimensional OU, Visualization
- References: black-scholes, finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, heston-model, hidden-markov-models, mcmc, pairs-trading, stochastic-differential-equations
- Backlinks: brownian-bridge, diffusion-models, fastest-mean-reversion, finance/cir-hull-white, finance/levy-processes, finance/longstaff-schwartz, finance/particle-filter, fokker-planck-equation, pairs-trading, pca-statarb

## Entity: math/point-processes
- Title: Point Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Daley & Vere-Jones, Campbell's theorem, Applications, intensity measure, Cox process, Void probabilities, Spatial statistics, Hawkes Processes: Self-Exciting Dynamics, point process, Superposition, Independent increments, stationary and ergodic, Finance, References, Papangelou conditional intensity
- References: cox-process, levy-ito-decomposition, math/branching-processes, math/kolmogorov-equations-ctmc, math/renewal-theory
- Backlinks: math/survival-analysis, poisson-process

## Entity: poisson-process
- Title: Poisson Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Independent Increments, Applications, Visualization: Arrivals over Time, Poisson Process, Physics, Reliability, Superposition, Poisson Processes, Finance, Start, counting random events, Gamma Distribution, Exponential Distribution, 1. Inter-arrival Times, Queueing Theory
- References: distributions-zoo, math/point-processes, math/renewal-theory
- Backlinks: course-math-for-ai, distributions-zoo, excursion-theory, exponential-distribution, queuing-theory, stochastic-processes

## Entity: math/random-walks
- Title: Random Walks
- Category: Stochastic Processes
- Language: en
- Key Concepts: characteristic function, Strassen's law of the iterated logarithm, Renewal theory, Arc-Sine Laws (Lévy), reflection principle, First Passage Times and Spitzer's Identity, Brownian bridge, Applications and References, functional central limit theorem, rate function, Donsker's Theorem and Functional Limit Theory, Electrical networks, Random Walks on Groups and Lattices, General Random Walks and Cramér Condition, transient
- References: brownian-bridge, central-limit-theorem, math/discrete-martingales, math/functional-limit-theorems, math/large-deviations-cramer, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/rough-volatility
- Title: Rough Volatility and Fractional Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Rough Bergomi Model (Bayer, Friz, Gatheral 2016), Rough Volatility and Fractional Brownian Motion, Implied vol skew, Rough Volatility, Empirical finding, Related Articles, Implementation, Fractional Brownian Motion
- References: finance/bipower-variation, finance/sabr-model, finance/variance-gamma, heston-model
- Backlinks: deep-hedging, finance/dupire-local-vol, garch-models, neural-sdes-finance, volatility-arbitrage, volatility-smile

## Entity: finance/self-similarity-fractality
- Title: Self-Similarity and Fractality of Financial Series
- Category: Stochastic Processes
- Language: en
- Key Concepts: pure, arbitrage exists, Simplest example:, Rough volatility, anti-persistence, MLE for fBm, rough volatility, R/S analysis, Wavelet methods, Definition., calibrate option-market surfaces significantly better, volatility, Fractional Brownian motion (fBm), Trading volumes, not a semimartingale
- References: brownian-motion, finance/bs-market-self-financing, finance/fractional-fokker-planck, finance/ftap-first-fundamental-theorem, finance/hurst-exponent, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns, math/stationary-wide-spectral

## Entity: small-ball-probabilities
- Title: Small Ball Probabilities for Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Applications, Connection to [[shannon-entropy|Entropy]] and Spectra, Small Ball Probabilities for Stochastic Processes, Asymptotic Definition
- References: finance/shannon-entropy, quantization

## Entity: finance/stable-distributions
- Title: Stable Distributions and α-Stable Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: first mathematically rigorous way, characteristic function, Connection to risk management practice, Stable Distributions and α-Stable Processes, same, asymmetry, stable distribution with the same $\alpha$, The parameter $\alpha$ and tails, Calibration complexity., Definition., stable distribution, α-stable Lévy processes, finite variance, only, infinite variance
- References: brownian-motion, cornish-fisher-cvar, extreme-value-theory, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/self-similarity-fractality, finance/stylized-facts-returns
- Backlinks: finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/stylized-facts-returns, math/central-limit-theorem, math/infinitely-divisible-distributions, math/local-limit-theorems, math/lundberg-cramer-ruin, math/triangular-arrays-processes

## Entity: stochastic-processes
- Title: Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Discrete state space, Applications, Stochastic Processes, Stationary Processes, Overview, [[stochastic-calculus]], [[ornstein-uhlenbeck]], Physics, Engineering, [[feynman-kac]] Formula, [[geometric-brownian-motion]], [[poisson-process]], Biology, Finance, Discrete-time processes
- References: brownian-motion, ergodic-theory, feynman-kac, finance/levy-processes, geometric-brownian-motion, markov-chains, math/discrete-markov-chains, math/discrete-martingales, math/kolmogorov-equations-ctmc, math/martingale-representation, math/stationary-wide-spectral, ornstein-uhlenbeck, poisson-process, random-walks, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: kuramoto-model, law-iterated-logarithm

## Entity: math/subordinators
- Title: Subordinators
- Category: Stochastic Processes
- Language: en
- Key Concepts: variance-gamma process, $\alpha$-stable subordinator, Fractional Calculus and Time-Changed Processes, Key Examples, Subordinators, The Laplace Exponent, CGMY model, drift coefficient, subordinator, Inverse Subordinators and Mittag-Leffler Processes, inverse, fractional Riemann-Liouville differential equation, Mittag-Leffler function, Applications: Finance and Stochastic Volatility, Stable subordinator.
- References: finance/levy-processes, fractional-brownian-motion, levy-ito-decomposition, math/branching-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/variance-gamma
- Title: Variance Gamma Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Variance Gamma (VG), Definition, Option Pricing via FFT, Parameter Effects, Related Articles, Characteristic function, Variance Gamma Process
- References: finance/levy-processes, heston-model, merton-jump-diffusion
- Backlinks: finance/barrier-asian-options, finance/merton-jump-diffusion, finance/rough-volatility, levy-ito-decomposition, svi-model

## Entity: volatility-forecasting
- Title: Volatility Forecasting (GARCH, HAR)
- Category: Stochastic Processes
- Language: en
- Key Concepts: Persistence, Volatility forecasting, leverage effect, Student-t GARCH, Stationarity, Parameter Reference, Mathematical Framework, QLIKE Loss Function, GARCH Extensions, Volatility Forecasting (GARCH, HAR), Heterogeneous Autoregressive Realized Volatility (HAR-RV), EGARCH, HAR-RV Model, Intraday risk, Background
- References: finance/monte-carlo-method, finance/realized-kernels, finance/value-at-risk, garch-models, heston-model, mcmc, transformer-architecture
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, arma-models, convolutional-volatility-resolution-clustering, cornish-fisher-cvar, finance/bipower-variation, finance/multivariate-hmm, finance/realized-kernels, finance/sabr-model, finance/singular-spectral-analysis, finance/variance-swaps, finance/wavelet-transform, geometric-brownian-motion, kalman-filter, temporal-fusion-transformer, volatility-modulated-spectral-surface

## Entity: finance/zeta-field
- Title: Zeta Field
- Category: Stochastic Processes
- Language: en
- Key Concepts: Zeros, Zeta Field Spectral Landscape, GUE Statistics and Eigenvalue Spacing, The Riemann Zeta Function, Dirichlet Series Model for Asset Prices, GUE pair correlation, Riemann-Siegel Z-function, Theoretical status, Riemann explicit formula, Riemann-Siegel Z-Function, Long-memory modeling, Critical strip, Explicit Formula and Market Fluctuations, Multifractal scaling, Mathematical Framework
- References: finance/levy-processes, finance/random-matrix-theory, finance/shannon-entropy, finance/spectral-analysis, math/spectral-theory-operators, quantum-entanglement

## Entity: financial-entropy
- Title: Entropy and Market Complexity
- Category: Time Series
- Language: en
- Key Concepts: Efficiency Connection, market regime indicator, [[shannon-entropy|Entropy]] in Finance: Lempel-Ziv and Market Complexity, variance, Granger Causality, Anomalies, Visualization: Entropy during a Crash, predictability, Shannon [[shannon-entropy|Entropy]], Transfer Entropy, 2. Lempel-Ziv Complexity (LZ), 3. Approximate Entropy (ApEn) and Sample Entropy, 1. Shannon [[shannon-entropy|Entropy]] as Predictability, Lempel-Ziv complexity, Related Topics
- References: causal-inference, finance/lempel-ziv-complexity, finance/shannon-entropy, nlp-financial-analysis
- Backlinks: entropy-pooling

## Entity: fractional-cointegration
- Title: Fractional Cointegration
- Category: Time Series
- Language: en
- Key Concepts: long-range dependence, Related Topics, Fractional Cointegration Mechanism, Fractional Cointegration, ARFIMA, Trading Application, The Long Memory Problem, ARFIMA Models, fractionally cointegrated, Long Memory, Visualization: Decay Speeds, half-life of mean reversion
- References: finance/hurst-exponent, fractional-brownian-motion, pairs-trading

## Entity: garch-models
- Title: GARCH and ARCH Models
- Category: Time Series
- Language: en
- Key Concepts: 4. Estimation and AI Integration, Related Topics, Insight, ARCH, Maximum Likelihood (MLE), ARCH and GARCH Models: Volatility Clustering, Deep GARCH, Neural GARCH, Leverage Effect, GARCH, The Persistence, 1. ARCH Model (Engle, 1982), 3. Asymmetric GARCH (GJR-GARCH), IGARCH, Visualization: Volatility Spikes
- References: finance/rough-volatility, mle, time-series
- Backlinks: arch-models, convolutional-volatility-resolution-clustering, finance/bipower-variation, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hidden-markov-models, finance/realized-kernels, finance/stylized-facts-returns, finance/value-at-risk, finance/variance-swaps-vix, generative-scenario-models, math/ergodic-theorems-birkhoff, math/martingale-clt, math/stochastic-recursive-sequences, temporal-fusion-transformer, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: hmm-particle-filters
- Title: Hidden Markov Models & Particle Filters
- Category: Time Series
- Language: en
- Key Concepts: Hidden Markov Models & Particle Filters, Predict (Mutate), The Non-Linear Problem: Particle Filters, Kalman Filter, Hidden Markov Models (HMM), The Algorithm:, Update (Weight), Transition Matrix, Resample (Darwinian Selection), Emission Probability, Application in HFT and StatArb, Filtering, Baum-Welch algorithm, Dynamic Spread Quoting, latent
- References: mcmc, regime-switching-factors
- Backlinks: hmm, lead-lag-analysis, lsv-model, mcmc, path-dependent-volatility, total-probability-variance, vpin

## Entity: jump-robust-volatility
- Title: Jump-Robust Realized Variance
- Category: Time Series
- Language: en
- Key Concepts: Realized Variance (RV), MinRV, MedRV, Price Jumps, Why It Matters: Identifying Jumps, Related Topics, 2. MinRV and MedRV (Andersen et al., 2012), The Problem with Standard RV, Visualization: Volatility vs. Jumps, 1. Bipower Variation (BV), Jump-Robust Realized Variance (MinRV and MedRV), Jump-Robust Estimators, volatility risk premium
- References: finance/bipower-variation, finance/realized-kernels, merton-jump-diffusion

## Entity: morse-theory
- Title: Morse Theory
- Category: Topology
- Language: en
- Key Concepts: The Fundamental Theorem, non-degenerate, loss landscape, Morse Inequalities, index, Topology of Loss Surfaces, critical points, Index 1, Index 0, The Morse Index, Mode Connectivity, Morse Theory, topology of a [[manifold-learning|manifold]], CW complex, Related Topics
- References: manifold-learning, math/algebraic-topology, math/differential-geometry, math/spectral-theory-operators, training-dynamics

## Entity: persistent-homology
- Title: Persistent Homology
- Category: Topology
- Language: en
- Key Concepts: Persistent Homology, Filtration and Homology, Topology of Data, Stability Theorem, Barcodes and Persistence Diagrams

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
- Key Concepts: See Also, Tests:, Cointegration:, Statistical Arbitrage & Pairs Trading, Correlation:, 2. Ornstein-Uhlenbeck Process, 1. Cointegration vs Correlation
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
- Key Concepts: Translation group, Important Lie Groups (Continuous Groups) in AI:, Why does it matter for Deep Learning?, physically correct guarantees, Sample Efficiency, Steerable CNNs, Closure:, Special Orthogonal group, Group, Group Theory, Group Theory and Symmetries in Deep Learning, Special Euclidean group, What is a Group?, Identity:, Inductive Bias
- Backlinks: ai-theory/spatial/equivariant-gnn

## Entity: math/analysis-geometry/information-geometry
- Title: Information Geometry
- Category: Unknown
- Language: en
- Key Concepts: e-connection ($\alpha=1$):, Natural [[convex-optimization|Gradient Descent]] (NGD), Amari-Chentsov tensor, Applications in Deep Learning, Fisher Information Matrix, Information Geometry, Related Topics, Dual Connections and $\alpha$-Geometry, Cramér-Rao Bound:, dual connections, Riemannian manifolds, Statistical [[manifold-learning|Manifold]] and Fisher Metric, m-connection ($\alpha=-1$):, Generalized Pythagorean Theorem, [[llm]] Latent Spaces:
- References: convex-optimization, fisher-information, llm, manifold-learning, optimal-transport, transformer-architecture
- Backlinks: convex-analysis, course-math-for-ai, fisher-information, language-models/safety/rlhf-dpo, manifold-learning, math/bayesian-asymptotics, math/cramer-rao-bound, math/differential-geometry, math/minimax-estimation, math/neyman-pearson, maximum-entropy, multivariable-calculus

## Entity: geometric-mechanics-lie-groups
- Title: Geometric Mechanics: Control on Lie Groups
- Category: ai-physics
- Language: en
- Key Concepts: Conclusion, Differential and Information Geometry, Geometric Mechanics: Control on Lie Groups, Symplectic Geometry and Hamiltonian Mechanics
- References: convex-optimization, manifold-learning

## Entity: neural-operators-fno
- Title: Neural Operators: FNO vs. DeepONet
- Category: ai-physics
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Neural Operators: FNO vs. DeepONet, Differential and Information Geometry, Conclusion
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: pinns-convergence
- Title: Physics-Informed Neural Networks (PINNs)
- Category: ai-physics
- Language: en
- Key Concepts: Conclusion, Differential and Information Geometry, Physics-Informed Neural Networks (PINNs), Random Matrix Theory and Spectral Dynamics
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: symplectic-hamiltonian-nn
- Title: Symplectic Geometry & Hamiltonian Neural Networks
- Category: ai-physics
- Language: en
- Key Concepts: Conclusion, Differential and Information Geometry, Symplectic Geometry & Hamiltonian Neural Networks, Symplectic Geometry and Hamiltonian Mechanics
- References: convex-optimization, manifold-learning

## Entity: mechanistic-interpretability-sae
- Title: AI Safety: Mechanistic Interpretability of SAEs
- Category: ai-theory
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, AI Safety: Mechanistic Interpretability of SAEs, Conclusion, Random Matrix Theory and Spectral Dynamics
- References: attention-mechanisms, math/spectral-theory-operators

## Entity: activation-functions-math
- Title: Activation Functions: SwiGLU & GeLU
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Stochastic Dynamics and Statistical Mechanics, Activation Functions: SwiGLU & GeLU
- References: attention-mechanisms, stochastic-differential-equations

## Entity: ergodic-theory-sgd
- Title: Ergodic Theory of Stochastic Gradient Descent
- Category: ai-theory
- Language: en
- Key Concepts: Differential and Information Geometry, Stochastic Dynamics and Statistical Mechanics, Ergodic Theory of Stochastic [[convex-optimization|Gradient Descent]], Conclusion
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: gnn-weisfeiler-lehman
- Title: Graph Neural Networks: Weisfeiler-Lehman
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Algebraic Topology, Sheaves, and Category Theory, Graph Neural Networks: Weisfeiler-Lehman
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: higher-category-theory-ai
- Title: Higher Category Theory: N-categories in AI
- Category: ai-theory
- Language: en
- Key Concepts: Higher Category Theory: N-categories in AI, Algebraic Topology, Sheaves, and Category Theory, Conclusion
- References: spectral-graph-theory

## Entity: multimodal-alignment-clip
- Title: Multimodal Alignment: CLIP Math
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Multimodal Alignment: CLIP Math, Differential and Information Geometry, Optimal Transport and Wasserstein Metrics
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
- Key Concepts: Conclusion, Differential and Information Geometry, Random Matrix Theory and Spectral Dynamics, Normalization Layers: BatchNorm vs RMSNorm
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: regularization-implicit-bias
- Title: Regularization: Implicit Bias of GD
- Category: ai-theory
- Language: en
- Key Concepts: Differential and Information Geometry, Stochastic Dynamics and Statistical Mechanics, Regularization: Implicit Bias of GD, Conclusion
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: renormalization-group-dl
- Title: Renormalization Group in Deep Learning
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Renormalization Group in Deep Learning, Stochastic Dynamics and Statistical Mechanics, Quantum Field Theory and Renormalization Group
- References: stochastic-differential-equations

## Entity: spin-glasses-hopfield
- Title: Spin Glasses & Hopfield Networks
- Category: ai-theory
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Stochastic Dynamics and Statistical Mechanics, Spin Glasses & Hopfield Networks, Conclusion
- References: math/spectral-theory-operators, stochastic-differential-equations

## Entity: geometry-loss-landscapes
- Title: The Geometry of Deep Learning Loss Landscapes
- Category: ai-theory
- Language: en
- Key Concepts: Differential and Information Geometry, The Geometry of Deep Learning Loss Landscapes, Conclusion, Random Matrix Theory and Spectral Dynamics
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: math-reasoning-chains-rl
- Title: The Mathematics of Reasoning Chains: RL Reward Modeling
- Category: ai-theory
- Language: en
- Key Concepts: The Mathematics of Reasoning Chains: RL Reward Modeling, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Stochastic Dynamics and Statistical Mechanics, Conclusion
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
- Key Concepts: Conclusion, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Quantum Field Theory and Renormalization Group, Vision Transformers: Scaling Laws of ViT
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
- Key Concepts: Computational Complexity: PAC-Bayes Bounds, Optimal Transport and Wasserstein Metrics, Stochastic Dynamics and Statistical Mechanics, Conclusion
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
- Key Concepts: Differential and Information Geometry, Information Theory: Rate-Distortion & VAEs, Stochastic Dynamics and Statistical Mechanics, Conclusion
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
- Key Concepts: Conclusion, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Quantum Machine Learning: Quantum Kernels, Symplectic Geometry and Hamiltonian Mechanics
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
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, [[attention-mechanisms|Attention]] Mechanisms: Linear [[attention-mechanisms|Attention]], Architecture Mechanics: Attention and Dimensionality
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
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, KV Cache Compression: Token Eviction, Conclusion
- References: attention-mechanisms
- Backlinks: research/mla-financial-reasoning, speculative-decoding

## Entity: long-context-yarn-longrope
- Title: Long Context: YaRN and LongRoPE
- Category: language-models
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Long Context: YaRN and LongRoPE, Differential and Information Geometry, Conclusion
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
- Key Concepts: Conclusion, Mixture of Experts: Routing Math, Stochastic Dynamics and Statistical Mechanics, Optimal Transport and Wasserstein Metrics
- References: stochastic-differential-equations

## Entity: model-merging-procrustes
- Title: Model Merging: Geometry of Weight Space Alignment
- Category: language-models
- Language: en
- Key Concepts: Optimal Transport and Wasserstein Metrics, Differential and Information Geometry, Conclusion, Model Merging: Geometry of Weight Space Alignment
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
- Key Concepts: Reasoning Models: PRM vs. ORM, Stochastic Dynamics and Statistical Mechanics, Conclusion
- References: stochastic-differential-equations

## Entity: speculative-decoding-medusa
- Title: Speculative Decoding: Medusa vs. EAGLE
- Category: language-models
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Stochastic Dynamics and Statistical Mechanics, Speculative Decoding: Medusa vs. EAGLE, Conclusion
- References: attention-mechanisms, stochastic-differential-equations

## Entity: tokenization-bpe-unigram
- Title: Tokenization: BPE vs. Unigram
- Category: language-models
- Language: en
- Key Concepts: Conclusion, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Stochastic Dynamics and Statistical Mechanics, Tokenization: BPE vs. Unigram
- References: attention-mechanisms, stochastic-differential-equations

## Entity: quantization-ptq-information
- Title: Quantization: Information Loss in PTQ
- Category: llm-infra
- Language: en
- Key Concepts: Conclusion, Optimal Transport and Wasserstein Metrics, Stochastic Dynamics and Statistical Mechanics, [[quantization]]: Information Loss in PTQ
- References: quantization, stochastic-differential-equations

## Entity: algebraic-geometry-slt
- Title: Algebraic Geometry in Singular Learning Theory
- Category: math
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Algebraic Topology, Sheaves, and Category Theory, Conclusion, Algebraic Geometry in Singular Learning Theory
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: algebraic-topology-persistent
- Title: Algebraic Topology: Persistent Laplacian & Persistent Bundles
- Category: math
- Language: en
- Key Concepts: Algebraic Topology: Persistent [[spectral-graph-theory|Laplacian]] & Persistent Bundles, Algebraic Topology, Sheaves, and Category Theory, Conclusion, Random Matrix Theory and Spectral Dynamics
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
- Key Concepts: Conclusion, Functional Analysis: C*-algebras, Symplectic Geometry and Hamiltonian Mechanics, Random Matrix Theory and Spectral Dynamics
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
- Key Concepts: Differential and Information Geometry, Information Geometry: Natural Gradient, Conclusion
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
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Algebraic Topology, Sheaves, and Category Theory, Number Theory: L-functions & Langlands
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: optimal-transport-gromov-wasserstein
- Title: Optimal Transport: Gromov-Wasserstein Distance
- Category: math
- Language: en
- Key Concepts: Optimal Transport and Wasserstein Metrics, Differential and Information Geometry, Conclusion, Optimal Transport: Gromov-Wasserstein Distance
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
- Key Concepts: Differential and Information Geometry, Stochastic Dynamics and Statistical Mechanics, Stochastic Calculus on Manifolds, Conclusion
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
- Key Concepts: Differential and Information Geometry, Fluid Dynamics: Navier-Stokes Existence, Conclusion, Random Matrix Theory and Spectral Dynamics
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
- Key Concepts: Conclusion, Differential and Information Geometry, Quantum Field Theory on Curved Spacetime, Quantum Field Theory and Renormalization Group
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
- Key Concepts: Differential and Information Geometry, String Theory: Calabi-Yau Manifolds, Algebraic Topology, Sheaves, and Category Theory, Conclusion
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
- Key Concepts: Conclusion, Supersymmetry (SUSY): Formalism, Quantum Field Theory and Renormalization Group, Symplectic Geometry and Hamiltonian Mechanics

## Entity: yang-mills-mass-gap
- Title: Yang-Mills Mass Gap
- Category: physics
- Language: en
- Key Concepts: Yang-Mills Mass Gap

## Entity: hyperbolic-vol-geometry
- Title: Correlation Is a Hyperbolic Distance
- Category: research
- Language: en
- Key Concepts: Theoretical:, References, Methodology, Numerical:, Context, Tools:, Current Findings, Insights for AI, Open Questions, Objective
- References: finance/sabr-model, heston-model, math/differential-geometry

## Entity: research/mla-financial-reasoning
- Title: Impact of MLA Compression on Financial Time-Series Reasoning
- Category: research
- Language: en
- Key Concepts: Metric, Dataset, References, Models, Methodology, Context, Insights for AI, Current Findings, Open Questions, Objective
- References: attention-mechanisms, deepseek-v3-mla-compression, kv-cache-compression, llm-financial-analysis, quantization, rag, tool-use

## Entity: levy-structured-products
- Title: Lévy Processes and Stochastic-Volatility Models for Structured-Product Pricing
- Category: research
- Language: en
- Key Concepts: References, Methodology, Calibration:, Simulation:, Pricing:, Tools:, Context, Insights for AI, Open Questions, Objective, Current Findings
- References: finance/levy-processes

## Entity: student-t-hmm-bond-regimes
- Title: Student-t HMM for Bank Bond Portfolio Regimes
- Category: research
- Language: en
- Key Concepts: Model:, References, Validation:, Data:, Methodology, Context, Tools:, Current Findings, Insights for AI, Open Questions, Objective
- References: finance/value-at-risk, hidden-markov-models

## Entity: research/quantum-risk-management
- Title: Квантовые алгоритмы в риск-менеджменте
- Category: research
- Language: ru
- Key Concepts: Результаты, Инсайты для ИИ, Цель, Контекст, Ссылки, Открытые вопросы, Методология
- References: quantum-computing-vqe, quantum-machine-learning-kernels

## Entity: copula-models
- Title: Копула-модели
- Category: Модели ценообразования
- Language: ru
- Key Concepts: Динамические копулы, Копула, Копула-модели, Практическое применение, Пар-трейдинг, Основные семейства копул, Портфельный VaR, Хвостовая зависимость t-копулы, Хвостовые коэффициенты зависимости, Таблица параметров, Ценообразование кредитных корзин (CDO, CLN), Реализация на Python, Мультиактивные деривативы, Математическая база, Стресс-тестирование
- References: brownian-motion, cox-process, finance/monte-carlo-method, finance/value-at-risk, finance/xva
- Backlinks: cornish-fisher-cvar, cox-process, cs01, cva-wrong-way-risk, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/isda-simm, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/securitization, finance/stylized-facts-returns, finance/swaps, finance/value-at-risk, finance/xva, generative-scenario-models, gnn-credit-risk, graph-neural-networks, survival-risk-prediction, vine-copulas

