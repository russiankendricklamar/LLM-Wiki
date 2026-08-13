# Knowledge Base Aggregate for AI Synthesis

## System Instructions
All agents should refer to [[GEMINI.md]] for project-wide standards and research protocols. New research findings are located in the `research/` category with structured metadata.

## Entity: course-math-for-ai
- Title: Mathematics for Deep Learning: The PhD Path
- Category: AI & Math
- Language: en
- Key Concepts: Goal:, Capstone project, Checkpoint:, Course map, Recommended reading, Week 7 — Information theory, Week 6 — Probability theory, Week 2 — Spectrum, SVD, tensor decompositions, Module 0, Outcomes, Week 9 — Stochastic calculus, Module 0 (optional, 1 week): Warm-up, Week 10 — Differential geometry, Week 8 — Stochastic processes, Prerequisites
- References: brownian-bridge, characteristic-functions, connections-curvature, convex-optimization, convexity, distributions-zoo, entropy-information, exponential-families, f-divergences, feynman-kac, finance/shannon-entropy, fisher-information, geometric-deep-learning, gradient-hessian-jacobian, hilbert-banach-spaces, hodge-theory, lagrange-multipliers, laplacian, lie-groups, linear-programming, linear-spaces-basis, linear-systems-gauss, lln-clt, malliavin-calculus, manifold, manifold-learning, martingale, math/analysis-geometry/information-geometry, math/differential-geometry, math/discrete-markov-chains, math/information-theory, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/sde-numerical-methods, math/sigma-algebra-measurability, maximum-entropy, measure-theory, multivariable-calculus, multivariate-normal, optimal-transport, ornstein-uhlenbeck, poisson-process, ricci-flow, stochastic-differential-equations, symplectic-geometry, taylor-series, tensor-decompositions, transformer-architecture

## Entity: bert
- Title: BERT
- Category: AI Architectures
- Language: en
- Key Concepts: Next Sentence Prediction (NSP):, Masked Language Modeling (MLM):, Pre-training, Overview
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
- Key Concepts: GRU (Gated Recurrent Unit):, LSTM (Long Short-Term Memory):, Gating Mechanisms, Overview

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
- Key Concepts: Avellaneda-Stoikov Model, Strategy Performance Comparison, Adverse Selection Detection via ML, Overview, Key Results, skew, Action, Quote Skewing, Python Implementation, Related Topics, Huang (2023) — SAC for crypto market making, Mathematical Framework, Regulatory constraints, RL Market Making MDP, Objective
- References: attention-mechanisms, deep-rl-execution, optimal-execution, temporal-fusion-transformer
- Backlinks: market-microstructure

## Entity: alpha-factor-research
- Title: Alpha Factor Research
- Category: AI Finance
- Language: en
- Key Concepts: Turnover vs Alpha Trade-off, The Factor Model, Multiple testing / overfitting, Factor decay study (Hansis et al., 2022), Capacity constraints, Overview, factor zoo problem, Key Results, Double ML for Fama-French factors (Oprescu et al., 2023), Python Implementation, Related Topics, Mathematical Framework, Information Coefficient, Information Coefficient (IC), Information Ratio
- References: deep-rl-execution, llm-financial-analysis, temporal-fusion-transformer
- Backlinks: double-ml, nlp-financial-analysis, vine-copulas

## Entity: ml-options-pricing
- Title: ML for Options Pricing
- Category: AI Finance
- Language: en
- Key Concepts: Gaussian Process Pricing, Deep Hedging (Buehler et al., 2019), neural network pricing, No-Arbitrage Constraints as Regularisation, Buehler et al. (2019) — Deep Hedging, Interpretability, Neural Network Pricing, Overview, ML for Options Pricing, Black-Scholes Baseline, Key Results, Deep hedging simulation dependency, Python Implementation, Regime shifts, Related Topics
- References: black-scholes, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, temporal-fusion-transformer

## Entity: nlp-financial-analysis
- Title: NLP for Financial Analysis
- Category: AI Finance
- Language: en
- Key Concepts: Bot filtering, Earnings call NLP alpha (Li et al., 2021), Loughran & McDonald (2011), Earnings Call Analysis, Market impact of signals, FinBERT [[fine-tuning]], Loughran-McDonald Dictionary, Risk factor changes, 8-K event classification (Kogan et al., 2022), Survivorship bias, Overview, Key Results, Limitations and Challenges, Python Implementation, Earnings call staging
- References: alpha-factor-research, finance/shannon-entropy, fine-tuning, llm, llm-financial-analysis, rag, temporal-fusion-transformer, transformer-architecture
- Backlinks: financial-entropy

## Entity: fourier-neural-operators
- Title: Fourier Neural Operators
- Category: AI Physics
- Language: en
- Key Concepts: Weather Forecasting, physics of the continuous operator, 100x to 1000x faster, infinite-dimensional function spaces, Performance: Speed and Accuracy, Material Science, Non-linearity, Linear Transform (Weighting), The Operator Learning Problem, Inverse Fourier Transform, Fourier Neural Operators (FNO), Related Topics, Operator Neural Network, Visualization: Spectral Filtering, Applications
- References: neural-operators, partial-differential-equations, pinns
- Backlinks: fredholm-theory

## Entity: ai-physics/hamiltonian-nn
- Title: Hamiltonian Neural Networks (HNN)
- Category: AI Physics
- Language: en
- Key Concepts: Hamiltonian, Energy Conservation:, Key Advantages, Applications, Phase Space Consistency:, Celestial Mechanics:, Control Systems:, Mathematical Core, Auto-Differentiation, The Problem with Black-Box Models, Hamiltonian Neural Networks (HNN), Molecular Dynamics:, Related Topics, How HNNs Work:, Data Efficiency:
- References: equivariant-nn, math/variational-calculus, pinns
- Backlinks: ai-theory/spatial/equivariant-gnn, equivariant-nn, kuramoto-model, lagrange-multipliers, neural-odes, neural-operators, pinns, symplectic-geometry

## Entity: 3d-gaussian-splatting
- Title: 3D Gaussian Splatting
- Category: AI Theory
- Language: en
- Key Concepts: 4. 3DGS vs. NeRF, Covariance Matrix ($\Sigma$), Representation, 100+ FPS, 5. Applications, Rendering Speed, Virtual Reality, Training Speed, Alpha Blending, 1. The Core Idea: Gaussians as Primitives, 3D Gaussian Splatting: Real-Time Radiance Fields, Opacity ($\alpha$), Related Topics, Sorting, Splatting
- References: automatic-differentiation, convex-optimization, geometric-deep-learning, manifold-learning, nerf, transformer-architecture
- Backlinks: nerf, neural-radiance-fields-math

## Entity: activation-patching
- Title: Activation Patching
- Category: AI Theory
- Language: en
- Key Concepts: Correlation ≠ causation., Activation Patching, Activation patching, Nonlinearity., Formalisation, The IOI Task, Path Patching vs Activation Patching, Related Topics, Duplicate Token Heads, Corrupted input, Combinatorial explosion., Factual Recall Patching, Clean input, Indirect Object Identification (IOI), Symmetry assumption.
- References: attention-mechanisms, circuit-discovery, mechanistic-interpretability, transformer-architecture
- Backlinks: circuit-discovery, probing-classifiers, superposition

## Entity: ai-theory/adversarial-examples
- Title: Adversarial Examples
- Category: AI Theory
- Language: en
- Key Concepts: Definition of adversarial example., Scalability of randomized smoothing., Certification Radius., Standard accuracy–robustness trade-off., Lack of principled theory., Transferability and feature alignment., Robust overfitting., Certified Robustness, Adversarial Training, Randomized Smoothing., Carlini–Wagner ($\ell_2$) Attack., LLMs and adversarial robustness., PGD (Projected [[convex-optimization|Gradient Descent]]) Attack., Noise vs. adversarial robustness., Adversarial Examples
- References: convex-optimization, diffusion-models, math/concentration-inequalities, mechanistic-interpretability, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: differential-privacy, metric-spaces

## Entity: attention-mechanisms
- Title: Attention Mechanisms
- Category: AI Theory
- Language: en
- Key Concepts: 3. Efficient Variants ([[llm]] Optimization), Tiling, A. Multi-Query Attention (MQA), Attention Mechanisms: The Engine of Modern AI, Values ($V$), Llama 3, 1. Scaled Dot-Product Attention, $\sqrt{d_k}$, Related Topics, single pair of Key and Value heads, Keys ($K$), B. Grouped-Query Attention (GQA), Recomputation, Memory-Bound, 4. Hardware Optimization: FlashAttention
- References: flash-attention, inference-serving, llm, paged-attention, transformer-architecture
- Backlinks: activation-functions-math, activation-patching, ai-market-making, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-linear-kernel, autoregressive-models, circuit-discovery, code-models, context-length, deepseek-v3-mla-compression, diffusion-models, distributed-training-3d, embedding-models, equivariant-diffusion-models, equivariant-nn, finance/adversarial-stress-testing, finance/bachelier-formula, finance/gnn-finance, finance/transformer-timeseries, fine-tuning, flash-attention, geometry-of-attention, gnn-credit-risk, gpt-architecture, gpu-architecture, graph-neural-networks, hardware-io-attention, induction-heads, inference-serving, kan, kv-cache-compression, language-models/mamba-ssm, linear-algebra, llm, long-context-yarn-longrope, math-reasoning-chains-rl, mechanistic-interpretability, mechanistic-interpretability-sae, meta-learning, mixture-of-depths, mla, model-parallelism, moe-routing, neural-scaling-laws, paged-attention, positional-encodings, probing-classifiers, quantization, quantum-machine-learning-kernels, research/mla-financial-reasoning, rl-trader, rope-scaling, slm, speculative-decoding-medusa, state-space-models, temporal-fusion-transformer, tensors-and-contractions, tokenization, tokenization-bpe-unigram, training-dynamics, transformer-architecture, universal-approximation-theory, vision-transformers, vision-transformers-scaling, vlm

## Entity: automatic-differentiation
- Title: Automatic Differentiation
- Category: AI Theory
- Language: en
- Key Concepts: Differentiable physics., Bayesian inference., Efficient when $n \ll m$, Meta-learning., Implicit differentiation, adjoints, Tracing (dynamic AD)., Related Topics, Stop-gradient., directed acyclic graph (DAG), dual numbers, The idea: function as a computational graph, Automatic differentiation (AD, autodiff), Higher-order derivatives, Portfolio optimisation.
- References: black-scholes, convex-optimization, finance/monte-carlo-method, inference-serving, neural-scaling-laws, partial-differential-equations, pinns
- Backlinks: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, category-theory-ml, chain-rule-autodiff, convex-analysis, deep-galerkin, differential-equations, gradient-hessian-jacobian, linear-algebra, mcts, multivariable-calculus, neural-odes, partial-differential-equations, pinns, qat, reinforcement-learning, tensors-and-contractions, variational-autoencoders

## Entity: bayesian-deep-learning
- Title: Bayesian Deep Learning
- Category: AI Theory
- Language: en
- Key Concepts: Epistemic versus Aleatoric Uncertainty, SGLD and MCMC in Neural Networks, Calibration and Expected Calibration Error, Medical Imaging:, Applications and Impact, Epistemic uncertainty, MC Dropout: Variational Inference via Dropout, temperature scaling, aleatoric, Laplace Approximation, Active Learning:, epistemic, functional diversity, Financial Forecasting:, Autonomous Driving:
- References: evaluation-llms, gaussian-processes, math/kolmogorov-probability-axioms, mcmc, neural-scaling-laws, statistical-mechanics, variational-autoencoders
- Backlinks: ai-theory/in-context-learning, de-finetti-exchangeability, gaussian-processes

## Entity: causal-inference-do-calculus
- Title: Causal Inference: Do-Calculus & SCM
- Category: AI Theory
- Language: en
- Key Concepts: The Rules of Do-Calculus, Rule 3 (Insertion/Deletion of actions):, DERIVATION: Identification of the Frontdoor Formula, Causal Inference: Do-Calculus & SCM, Rule 2 (Action/Observation exchange):, Rule 1 (Insertion/Deletion of observations):, What Is It, do-calculus, Related Topics, Prediction:, Action:, The Do-Operator, Counterfactuals, Abduction:, Backdoor Criterion
- References: bayesian-networks, causal-inference-trading, graph-theory, math/m-estimators

## Entity: circuit-discovery
- Title: Circuit Discovery
- Category: AI Theory
- Language: en
- Key Concepts: Step 1: Task definition., Step 3: Path patching., The IOI Circuit, Name mover heads., Sparse autoencoders (SAEs), Negative heads., Step 4: Verification., circuits, [[attention-mechanisms|Attention]] Head Roles, features, Superposition and Polysemanticity, The OV and QK Circuits, ACDC, Related Topics, Circuit discovery
- References: activation-patching, attention-mechanisms, mechanistic-interpretability, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching

## Entity: contrastive-learning
- Title: Contrastive Learning
- Category: AI Theory
- Language: en
- Key Concepts: CLIP: Cross-Modal Contrastive Learning, SimCLR: Simplicity at Scale, Label-free invariance, Network design, normalized temperature-scaled cross-[[shannon-entropy|entropy]] (NT-Xent), Symmetric contrastive loss, Information-theoretic view, Online network, Sentence embeddings, Momentum update rule, Applications and Transfer Gap, Information maximization, CLIP, BYOL: Learning Without Negatives, Bootstrap Your Own Latent
- References: embedding-models, finance/shannon-entropy, fine-tuning, generative-models, neural-scaling-laws, pac-learning, transformer-architecture, variational-autoencoders
- Backlinks: vision-transformers

## Entity: diffusion-models
- Title: Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: noise prediction, Advantages over DDPM:, marginal distribution, Forward process (tractable Markov chain):, Training and Inference, Audio., Inference (sampling):, Scalability and Conditioning, probability flow ODE, Evidence Lower Bound (ELBO) Connection, iterative denoising, Image generation., Connection to Stochastic Differential Equations, Computational cost., Score
- References: attention-mechanisms, fokker-planck-equation, generative-models, manifold-learning, neural-scaling-laws, ornstein-uhlenbeck-process, stochastic-differential-equations, transformer-architecture, variational-autoencoders
- Backlinks: ai-theory/adversarial-examples, energy-based-models, equivariant-diffusion-models, generative-models, laplacian, math/sde-numerical-methods, nonequilibrium-statmech, variational-autoencoders

## Entity: energy-based-models
- Title: Energy-Based Models
- Category: AI Theory
- Language: en
- Key Concepts: Modern EBMs and Hybrid Modeling, Joint Energy Modeling (JEM), Denoising score matching, Contrastive Divergence and Approximation, MLE and the Partition Function Problem, Connection to [[statistical-mechanics|Statistical Mechanics]], direct, contrastive divergence, Score Matching: Avoiding the Partition Function, RBM, Restricted Boltzmann Machines
- References: convex-optimization, diffusion-models, manifold-learning, statistical-mechanics

## Entity: equivariant-diffusion-models
- Title: Equivariant Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: Molecular Generation:, Protein Folding and Design:, Computer Vision:, Physical Consistency:, Symmetry in Generative Modelling, Robustness:, Non-compact Groups:, Position update:, Robotics:, Feature update:, Special Euclidean group, Euclidean group, Equivariant Diffusion Models, Advantages:, Related Topics
- References: ai-theory/spatial/equivariant-gnn, attention-mechanisms, diffusion-models, laplacian, lie-algebras-physics, lie-groups, manifold-learning, stochastic-differential-equations

## Entity: ai-theory/spatial/equivariant-gnn
- Title: Equivariant GNN (E(n)-GNN)
- Category: AI Theory
- Language: en
- Key Concepts: Equivariance, Robotics:, Structural Biology:, AI for Science, Equivariant Message Passing, Related Topics, Invariant Messages:, Invariance, Coordinate Updates:, Mathematical Concept, Impact and Applications, Molecular Modeling:, Why Equivariance?, Equivariant Graph Neural Networks (E(n)-GNN)
- References: ai-physics/hamiltonian-nn, math/foundations/group-theory-symmetries, spectral-graph-theory
- Backlinks: equivariant-diffusion-models

## Entity: equivariant-nn
- Title: Equivariant Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: NequIP (2022):, spherical tensors, Message passing on point clouds., Wigner D-matrices, Particle physics:, Exact symmetry:, Tensor product layers., Parity subtleties., Drug discovery:, Robotics:, Molecular dynamics:, Physical consistency:, Non-compact groups., Crystal property prediction:, Overview
- References: ai-physics/hamiltonian-nn, attention-mechanisms, group-theory, pinns, qft-basic, scattering-amplitudes, transformer-architecture
- Backlinks: ai-physics/hamiltonian-nn, graph-neural-networks, group-theory, kan, lie-groups, neural-operators, pinns, representation-theory-ml

## Entity: factor-graphs-inference
- Title: Factor Graphs & Sum-Product Algorithm
- Category: AI Theory
- Language: en
- Key Concepts: Loopy Belief Propagation, The Sum-Product Algorithm, Mathematical Formulation, treewidth, variable nodes, Factor to Variable Message:, Sum-Product Algorithm, Variable to Factor Message:, What Is It, Related Topics, Message Passing Rules, Convergence, Factor Graphs & Sum-Product Algorithm, Beyond Sum-Product: Max-Product, Junction Tree Algorithm
- References: bayesian-networks, graph-theory, kalman-filter, variational-inference-math

## Entity: gauge-equivariant-nn
- Title: Gauge Equivariant Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Gauge Equivariant Convolution, Fiber Bundles and Connections, Mathematical Formulation, Gauge Equivariant Neural Networks
- References: manifold-learning

## Entity: gaussian-processes
- Title: Gaussian Processes
- Category: AI Theory
- Language: en
- Key Concepts: RBF (squared exponential) kernel:, Matérn kernel:, Kernel Engineering and Knowledge Encoding, Neural Tangent Kernel (NTK), Financial volatility, Connection to Neural Networks, Uncertainty quantification, Nyström approximation, ARD (Automatic Relevance Determination), Marginal Likelihood and Hyperparameter Learning, expectation propagation, Sparse GP approximations, Computational Bottlenecks and Sparse Approximations, Scientific ML, Bayesian optimization
- References: bayesian-deep-learning, finance/monte-carlo-method, math/kolmogorov-probability-axioms, neural-scaling-laws, pinns, statistical-mechanics
- Backlinks: ai-theory/neural-tangent-kernel, bayesian-deep-learning, bayesian-nonparametrics, hilbert-banach-spaces, multivariate-normal

## Entity: generative-models
- Title: Generative Models
- Category: AI Theory
- Language: en
- Key Concepts: Normalizing Flows, Learn latent representations, Energy-Based Models (EBM), variational autoencoder, Generator, Properties:, Normalizing flows, Decoder, sample quality, Image generation., Energy-Based Models, Connection with [[schrodinger-equation|the Schrödinger equation]]:, Autoregressive Models, [[llm|large language models]], Prior
- References: diffusion-models, finance/monte-carlo-method, flow-matching, generative-scenario-models, hamiltonian-mechanics, llm, neural-odes, schrodinger-equation, sparse-autoencoders
- Backlinks: contrastive-learning, diffusion-models, generative-scenario-models, signature-based-models, variational-autoencoders

## Entity: autoregressive-models
- Title: Generative Models: Autoregressive Math
- Category: AI Theory
- Language: en
- Key Concepts: Factorization, Masked Convolutions (PixelCNN):, Causal [[attention-mechanisms|Attention]] (Transformers):, Masked Architectures
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
- Key Concepts: The ELBO Derivation, Reparameterization Trick
- References: convex-optimization

## Entity: graph-neural-networks
- Title: Graph Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Structural dependence., Graph Neural Networks, Message Passing Neural Networks (MPNN)., Graph [[attention-mechanisms|Attention]] Diffusion (GRAND), message passing, Over-smoothing and Over-squashing, Node classification, Regression on graph properties, Training complexity., Scaling to Large Graphs, GraphSAGE (Hamilton et al. 2017)., Message Passing Neural Networks, Cluster-GCN, Recommender systems., Graph classification
- References: attention-mechanisms, copula-models, equivariant-nn, fraud-detection, gnn-credit-risk, neural-odes, spectral-graph-theory, transformer-architecture
- Backlinks: gnn-credit-risk, graph-curvature-oversquashing, graph-theory, laplacian

## Entity: ai-theory/in-context-learning
- Title: In-Context Learning
- Category: AI Theory
- Language: en
- Key Concepts: Emergence at Scale and Open Questions, Definition and Core Mechanism, Task Vectors and Representation Engineering, Mechanistic Substrate: Induction Heads, task vectors, Few-Shot vs Zero-Shot Scaling, Label order effects, Sensitivity to Prompt Format and Label Permutation, demo–query, See Also, Attend to next token, induction heads, In-Context Learning vs [[fine-tuning]], Task arithmetic, In-Context Learning
- References: attention-mechanisms, bayesian-deep-learning, chain-of-thought, fine-tuning, mechanistic-interpretability, neural-scaling-laws, prompt-engineering, transformer-architecture
- Backlinks: ai-theory/neural-tangent-kernel, attention-kernel, induction-heads, training-dynamics

## Entity: induction-heads
- Title: Induction Heads
- Category: AI Theory
- Language: en
- Key Concepts: Visualization: The "Aha!" Moment, Identifies, Increases, two layers, Model Scaling, Mathematical Formulation, Why It Matters, The Two-Layer Mechanism, Layer 1: Previous Token Head, What Is It, Related Topics, Induction Heads, Query (Q), In-Context Learning (ICL), mechanistic interpretability
- References: ai-theory/in-context-learning, attention-mechanisms, mechanistic-interpretability, transformer-architecture

## Entity: information-bottleneck-theory
- Title: Information Bottleneck Theory
- Category: AI Theory
- Language: en
- Key Concepts: Information Bottleneck Theory, The Information Bottleneck Objective, IB curve, Fitting Phase, Exact Solution and the IB Curve, Application to Deep Learning, Compression Phase
- References: convex-optimization
- Backlinks: statistical-mechanics-learning

## Entity: ai-theory/knowledge-distillation
- Title: Knowledge Distillation
- Category: AI Theory
- Language: en
- Key Concepts: Weight $\alpha$:, Knowledge distillation (KD), Data-free distillation, [[quantization]]-aware distillation, Self-distillation and born-again networks, KL-regularized SFT:, Born-again networks, Implicit regularization., feature-based distillation, student network, Pseudo-labeling:, Cross-domain transfer:, Prototypical activation patterns:, Distillation for large language models, Soft targets from teacher
- References: attention-mechanisms, evaluation-llms, fine-tuning, manifold-learning, neural-scaling-laws, pac-learning, quantization, transformer-architecture

## Entity: kolmogorov-complexity
- Title: Kolmogorov Complexity
- Category: AI Theory
- Language: en
- Key Concepts: Normalized Information Distance (NID):, Constant dependence on UTM., Solomonoff's algorithmic probability:, Language identification:, Definition., Conditional complexity:, Minimum Description Length (MDL)., Financial complexity:, Overview, Shannon-Kolmogorov duality:, Model selection:, Coding theorem:, Bioinformatics:, Incomputability., Python Implementation
- References: finance/lempel-ziv-complexity, finance/shannon-entropy, pac-learning
- Backlinks: chain-of-thought, math/cantor-diagonal, math/godel-incompleteness, pac-learning

## Entity: learnable-activations
- Title: Learnable Activations and B-splines
- Category: AI Theory
- Language: en
- Key Concepts: Kernel activation function (KAF)., Symbolic regression., Parametrisations, Learnable activation functions, Bayesian neural networks., B-splines: essence, Practical considerations, Ecosystem maturity., Rational activations., Learnable activations, Shape-preserving., Interpretability., Learnable Activations and B-splines, Regularisation., Speed.
- References: kan, kolmogorov-arnold-theorem, neural-scaling-laws, pinns, sparse-autoencoders, transformer-architecture
- Backlinks: kan, kolmogorov-arnold-theorem

## Entity: quantization-error-math
- Title: Mathematical Error Analysis in Model Quantization
- Category: AI Theory
- Language: en
- Key Concepts: Stochastic Rounding, Uniform Quantization, Mathematical Error Analysis in Model [[quantization]], Error Propagation in Linear Layers
- References: quantization

## Entity: diffusion-sde-math
- Title: Mathematical Foundations of Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: The Probability Flow ODE, Forward [[stochastic-differential-equations|SDE]], score function, Reverse [[stochastic-differential-equations|SDE]] and Score Matching, Mathematical Foundations of Diffusion Models, Langevin Dynamics Connection
- References: stochastic-differential-equations

## Entity: mechanistic-interpretability
- Title: Mechanistic Interpretability
- Category: AI Theory
- Language: en
- Key Concepts: Model Editing (ROME/MEMIT):, Activation Patching:, Logit Lens:, Mechanistic Interpretability, Circuit Analysis:, Implementation Snippet, Residual Stream:, Key Methodology, Mathematical Core, Related Topics, polysemanticity, Importance for AI Safety, Induction Heads:, Detecting Deception:, Alignment Verification:
- References: attention-mechanisms, constitutional-ai, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, chain-of-thought, circuit-discovery, constitutional-ai, induction-heads, language-models/safety/rlhf-dpo, llm, math/godel-incompleteness, mixture-of-experts, neural-scaling-laws, pac-learning, probing-classifiers, rlhf, slm, sparse-autoencoders, superposition

## Entity: meta-learning
- Title: Meta-Learning
- Category: AI Theory
- Language: en
- Key Concepts: Applications:, First-Order MAML (FOMAML):, Algorithm:, in-context learning (ICL), Applications and Limitations, Meta-Learning and In-Context Learning, Alternative Meta-Learners, second-order derivatives, Prototypical Networks, Limitations:, Model-Agnostic Meta-Learning (MAML), Formal Setup, Reptile, Matching Networks
- References: attention-mechanisms, chain-of-thought, convex-optimization, llm, neural-scaling-laws, reinforcement-learning, rlhf, transformer-architecture
- Backlinks: prompt-engineering

## Entity: model-based-rl
- Title: Model-Based Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: The Dyna Architecture, MBPO: Model-Based Policy Optimization, Model-based RL (MBRL), Model-Free vs Model-Based, Dyna, Recurrent world models., Model-Based Reinforcement Learning, world model, World Models, Probabilistic models., Related Topics, Model Error Compounding, Neural Network World Models, MCTS and AlphaZero, Dreamer / DreamerV3
- References: offline-rl, ppo, reinforcement-learning, soft-actor-critic
- Backlinks: offline-rl, ppo, soft-actor-critic

## Entity: neural-odes
- Title: Neural ODEs
- Category: AI Theory
- Language: en
- Key Concepts: Variants and extensions, Continuous normalising flows (CNFs)., ODE-RNN / GRU-ODE-Bayes., Adjoint method for [[automatic-differentiation|backpropagation]], Generative modelling., Advantages of the continuous formulation, adjoint sensitivity method, Related Topics, Computer vision., Visualization, Applications, adaptive compute, Time series., Invertibility., Irregularly sampled time series.
- References: ai-physics/hamiltonian-nn, automatic-differentiation, brownian-motion, hamiltonian-mechanics, pinns
- Backlinks: calculus-of-variations, generative-models, graph-neural-networks, math/ode-stability, neural-sdes-finance, operator-semigroups, reinforcement-learning, state-space-models, variational-autoencoders

## Entity: nerf
- Title: Neural Radiance Fields (NeRF)
- Category: AI Theory
- Language: en
- Key Concepts: Volume Rendering, Neural Radiance Fields (NeRF): Synthesizing 3D from 2D, Visualization: The NeRF Ray Casting, Inference, Instant-NGP, Output, 2. Key Innovations, Pose Estimation, Related Topics, A. Positional Encoding, 1. The Core Concept: Volumetric Rendering, Speed, Input, 3. The NeRF Pipeline, Neural Radiance Fields (NeRF)
- References: 3d-gaussian-splatting, manifold-learning, positional-encodings, transformer-architecture
- Backlinks: 3d-gaussian-splatting, neural-radiance-fields-math

## Entity: neural-scaling-laws
- Title: Neural Scaling Laws
- Category: AI Theory
- Language: en
- Key Concepts: Research prioritisation:, Training loss vs. compute curves., Compute budgeting:, Kaplan et al. (2020) scaling laws., Overview, Emergent abilities controversy:, Scaling beats architecture search:, Performance prediction:, Inference-time compute allocation:, Irreducible [[shannon-entropy|entropy]]:, Python Implementation, Quality metrics., Statistical mechanics analogy:, Related Topics, Prerequisites
- References: attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, pac-learning
- Backlinks: ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, automatic-differentiation, bayesian-deep-learning, bitnet, contrastive-learning, curriculum-learning, diffusion-models, gaussian-processes, learnable-activations, llm, meta-learning, mixture-of-experts, pac-learning, positional-encodings, quantization, reasoning-models, rlhf, slm, test-time-scaling, training-dynamics, transformer-architecture

## Entity: ai-theory/neural-tangent-kernel
- Title: Neural Tangent Kernel
- Category: AI Theory
- Language: en
- Key Concepts: Convergence Guarantees and Over-Parameterization, Limitations:, Learning rate scaling:, NTK for Transformers and Modern Architectures, PAC-style guarantees, Practical Implications, lazy training regime, Width requirements:, Kernel Regime vs. Feature Learning Regime, at infinite width, this kernel becomes deterministic and constant in time, decays exponentially, Further Reading, Mean field theory, Neural Tangent Kernel, Gradient Flow in Function Space
- References: ai-theory/in-context-learning, attention-mechanisms, automatic-differentiation, convex-optimization, finance/shannon-entropy, gaussian-processes, math/concentration-inequalities, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: neural-radiance-fields-math, ntk, statistical-mechanics-learning

## Entity: offline-rl
- Title: Offline Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: Offline RL, Autonomous driving., TD3+BC, Offline Reinforcement Learning, Conservative Q-Learning (CQL), extrapolation errors, expectile loss, Related Topics, Behaviour Cloning Baseline, batch RL, IQL, Applications, Finance., Healthcare., The Distributional Shift Problem
- References: deep-rl-execution, model-based-rl, reinforcement-learning, soft-actor-critic, transformer-architecture
- Backlinks: model-based-rl, soft-actor-critic

## Entity: pac-learning
- Title: PAC Learning & VC Dimension
- Category: AI Theory
- Language: en
- Key Concepts: Boosting:, Theoretical foundation for SVMs:, Sample complexity with VC dimension:, MDL and Occam's Razor., VC Dimension., Active learning:, Sauer's Lemma., Deep learning paradox:, Bias-variance decomposition., Computational complexity., Overview, Lower bounds:, Tight bounds for SVMs:, Differential privacy:, Python Implementation
- References: finance/shannon-entropy, kolmogorov-complexity, mechanistic-interpretability, neural-scaling-laws
- Backlinks: ai-theory/adversarial-examples, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, code-models, contrastive-learning, empirical-processes, kolmogorov-complexity, neural-scaling-laws, sparse-autoencoders, statistical-mechanics-learning, vlm

## Entity: probing-classifiers
- Title: Probing Classifiers
- Category: AI Theory
- Language: en
- Key Concepts: CKA (Centered Kernel Alignment):, Representation quality metrics., Causality gap., Representation vs computation., Representational Geometry, Multitask representations., Linear probes, Linguistic structure in LLMs., Related Topics, Setup, probes, Applications, Nonlinear probes, LEACE (Least-squares Concept Erasure):, The MDL probe
- References: activation-patching, attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, sparse-autoencoders

## Entity: ppo
- Title: Proximal Policy Optimization (PPO)
- Category: AI Theory
- Language: en
- Key Concepts: [[rlhf]] / [[llm]] alignment., The Clipped Surrogate Objective, Full PPO Loss, Hyperparameters, Applications, PPO vs TRPO, Motivation: The Policy Update Problem, Generalized Advantage Estimation (GAE), PPO-Clip, GAE, Continuous control., TRPO, Games., Related Topics, Proximal Policy Optimization (PPO)
- References: finance/shannon-entropy, llm, model-based-rl, reinforcement-learning, rlhf, soft-actor-critic
- Backlinks: model-based-rl, soft-actor-critic

## Entity: rlhf
- Title: RLHF (Reinforcement Learning from Human Feedback)
- Category: AI Theory
- Language: en
- Key Concepts: Stage 2: Reward Model Training, Open Problems, Constitutional AI: AI Critique Instead of Human Labels, alignment tax, [[dpo]]: Direct Preference Optimization, Stage 1: Supervised [[fine-tuning]] (SFT), training on human preferences contains information orthogonal to model scale, Stage 3: PPO Optimization, Reward Model Generalization:, Alignment Tax: Capability-Alignment Tradeoff, Multi-Objective Alignment:, Preference Data Quality:, Three-Stage Pipeline, Why KL Regularization: Preventing Reward Hacking, Why RLHF Works: Human Preference as Orthogonal Signal
- References: chain-of-thought, dpo, finance/shannon-entropy, fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, reinforcement-learning, transformer-architecture
- Backlinks: causal-inference, chain-of-thought, constitutional-ai, dpo, evaluation-llms, f-divergences, fine-tuning, language-models/safety/rlhf-dpo, llm, mechanism-design, meta-learning, orm-prm, ppo, preference-optimization, preference-optimization-variants, prm, prompt-engineering, reasoning-models, reinforcement-learning, soft-actor-critic, synthetic-data-alignment

## Entity: reinforcement-learning
- Title: Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: Policy Gradient., Games., Off-policy, target network, Intrinsic curiosity, Markov property, Deep RL, Bellman equation, policy, Q-learning., Reinforcement Learning, Markov Decision Process, Language models., Off-policy vs On-policy, Model-based vs Model-free, Related Topics
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
- Key Concepts: The Update Rule, Contraction Mapping and Convergence

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
- Key Concepts: Tensor Products and Clebsch-Gordan Coefficients, Group Actions and Equivariance, $SO(3)$ and $SE(3)$ Representations, Representation Theory for Machine Learning
- References: equivariant-nn

## Entity: soft-actor-critic
- Title: Soft Actor-Critic (SAC)
- Category: AI Theory
- Language: en
- Key Concepts: Robotics., Architecture: Three Networks, MBPO., Sample Efficiency vs PPO, Applications, Maximum [[shannon-entropy|Entropy]] RL, Finance., Soft Actor-Critic (SAC), Reparameterization Trick, Critic Loss, Automatic Entropy Tuning, Related Topics, Energy systems., policy [[shannon-entropy|entropy]], Twin critics
- References: finance/shannon-entropy, model-based-rl, offline-rl, ppo, reinforcement-learning, rlhf
- Backlinks: model-based-rl, offline-rl, ppo

## Entity: sparse-autoencoders
- Title: Sparse Autoencoders (SAE)
- Category: AI Theory
- Language: en
- Key Concepts: Evaluation metrics:, Sparse Autoencoders (SAE), Knowledge localisation:, Causal role unknown., Training pipeline., Reconstruction-sparsity tradeoff., Top-K advantage:, Overview, Computational cost., Steering vectors:, Python Implementation, Geometry of feature space., Related Topics, Prerequisites, Cross-layer universality:
- References: finance/shannon-entropy, llm, mechanistic-interpretability, pac-learning, transformer-architecture
- Backlinks: circuit-discovery, generative-models, learnable-activations, mechanistic-interpretability, probing-classifiers, superposition, variational-autoencoders

## Entity: state-space-models
- Title: State Space Models (SSM)
- Category: AI Theory
- Language: en
- Key Concepts: Mamba-2: Structured State Space Duality, selection mechanism, Bridging, Zero-Order Hold, S4: Structured State Matrices, Mamba, Content-addressable, Convolutional View: Kernel Representation, Interpretability, Cauchy kernel trick, unrolled as a convolution, Time complexity, Hybrid architectures, Explicit diagonalization, Language modeling
- References: attention-mechanisms, kalman-filter, llm, math/spectral-theory-operators, mixture-of-experts, neural-odes, nonlinear-filtering, transformer-architecture
- Backlinks: attention-kernel, context-length

## Entity: superposition
- Title: Superposition & Linear Representation
- Category: AI Theory
- Language: en
- Key Concepts: Uncovering Hidden Capabilities, polysemantic, Superposition, The Toy Model of Superposition, Polysemanticity, Sparse Autoencoders (SAE), Detecting Deception, Superposition and Linear Representation, Visualizing Dimension vs. Features, Model Steerability, What Is It, Linear Representation Hypothesis, polytopes, more features than it has dimensions, Implications for AI Safety
- References: activation-patching, llm, mechanistic-interpretability, sparse-autoencoders

## Entity: transformer-architecture
- Title: Transformer Architecture
- Category: AI Theory
- Language: en
- Key Concepts: RoPE (Rotary Positional Embeddings), Sinusoidal, Encoder-Decoder (T5), The Bottleneck, Post-Norm, [[attention-mechanisms|Attention]] Layer, Feed-Forward Network (FFN), 4. The Softmax Bottleneck, 2. Normalization: Stability at Scale, RMSNorm, Related Topics, Stability, 5. Architectural Variants, Encoder-Only (BERT), Pre-Norm
- References: attention-mechanisms, mixture-of-experts, neural-scaling-laws
- Backlinks: 3d-gaussian-splatting, activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-mechanisms, bitnet, chain-of-thought, circuit-discovery, code-models, context-length, contrastive-learning, course-math-for-ai, decision-transformers, deep-hedging, diffusion-models, embedding-models, equivariant-nn, finance/transformer-timeseries, fine-tuning, fraud-detection, gnn-credit-risk, gpt-architecture, graph-neural-networks, induction-heads, inference-serving, kan, kolmogorov-arnold-theorem, language-models/mamba-ssm, learnable-activations, linear-algebra, llm, logistic-regression, lora-peft, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/godel-incompleteness, mechanistic-interpretability, meta-learning, mixture-of-depths, mixture-of-experts, model-parallelism, moe-routing, multi-token-prediction, nerf, neural-radiance-fields-math, news-sentiment-trading, nlp-financial-analysis, offline-rl, portfolio-optimization-ml, positional-encodings, quantization, rlhf, rope-scaling, slm, sparse-autoencoders, state-space-models, temporal-fusion-transformer, tokenization, training-dynamics, universal-approximation-theory, vector-databases, vision-transformers, vlm, volatility-forecasting

## Entity: variational-autoencoders
- Title: Variational Autoencoders (VAE)
- Category: AI Theory
- Language: en
- Key Concepts: β-VAE, Theoretical Significance, Variational Autoencoder, Extensions and Applications, reparameterization trick, The Evidence Lower Bound (ELBO), encoder, decoder, Architecture: Encoder and Decoder, disentangled, Stable Diffusion, Connection to Diffusion Models, Interpretation:, VQ-VAE, Related Articles
- References: automatic-differentiation, convex-optimization, diffusion-models, generative-models, math/kolmogorov-probability-axioms, neural-odes, sparse-autoencoders, statistical-mechanics
- Backlinks: bayesian-deep-learning, bayesian-inference, change-of-variables, contrastive-learning, convexity, diffusion-models, information-theory-basics, jensens-inequality, manifold, pca, variational-inference

## Entity: vision-transformers
- Title: Vision Transformers (ViT)
- Category: AI Theory
- Language: en
- Key Concepts: Python Implementation (Conceptual), ViT vs. CNNs, Patch Partitioning, Receptive Field, [[transformer-architecture|Transformer]] architecture, Position Embeddings, Learnable Embeddings, Scaling, What Is It, Related Topics, Mathematical Framework, Architecture, Vision Transformers (ViT), [CLS] Token, Inductive Bias
- References: attention-mechanisms, contrastive-learning, transformer-architecture, vlm

## Entity: about
- Title: About Me
- Category: About Me
- Language: en
- Key Concepts: 2023 – 2024, Technical Stack, Interests, Ultima Thule, Expert, Event Manager, Principal Economist at the Bank of Russia, 2022 – 2023, EGOR GALKIN, Risk Manager, Quantitative Analyst and AI Engineer, Nyquist, 2025 – Present, Methodologies, Quantum Physics
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
- Key Concepts: Method of Stationary Phase, Laplace's Method, The Saddle-Point Method (Method of Steepest Descent), Asymptotic Analysis of Integrals

## Entity: calculus-of-variations
- Title: Calculus of Variations
- Category: Advanced Analysis
- Language: en
- Key Concepts: functionals, Euler-Lagrange equation, Euler-Lagrange Equation, Variation and Modern AI, Regularization, Principles of Physics, Related Topics, Geodesics, Variational Inference (VI), Neural ODEs, Hamilton's Principle, Lagrangian, Visualization: The Shortest Path (Geodesic), The Fundamental Problem, Calculus of Variations
- References: functional-analysis, lagrangian-mechanics, neural-odes, variational-inference
- Backlinks: deep-ritz-method, fixed-point-theorems

## Entity: fixed-point-theorems
- Title: Fixed Point Theorems
- Category: Advanced Analysis
- Language: en
- Key Concepts: "engines of existence", 4. Kakutani Fixed Point Theorem (Set-Valued Mappings), compact, contraction mapping, Game Theory, set-valued functions, Reinforcement Learning, The Intuition, 2. Brouwer Fixed Point Theorem (The Engine of Topology), 1. Banach Contraction Principle (The Engine of Convergence), Related Topics, unique, The Theorem, Applications, Applications in AI
- References: calculus-of-variations, convexity, hilbert-banach-spaces, reinforcement-learning
- Backlinks: proximal-algorithms-admm

## Entity: fredholm-theory
- Title: Fredholm Theory
- Category: Advanced Analysis
- Language: en
- Key Concepts: Index and Fredholm Operators, Fredholm Alternative, Why It Matters for AI: Neural Operators, Kernel Machines, Spectral Analysis, Fredholm Theory, integral equations, index, Visualization: Kernel Smoothing, kernel, Fredholm operator, Related Topics, Atiyah-Singer Index Theorem, Inverse Problems, The Integral Equation
- References: fourier-neural-operators, functional-analysis, partial-differential-equations

## Entity: microlocal-analysis
- Title: Microlocal Analysis
- Category: Advanced Analysis
- Language: en
- Key Concepts: Wave Front Set, cotangent bundle, AI Interpretability, where, Hörmander, Why It Matters, symbol, The Wave Front Set ($WF$), Related Topics, Quantum Chaos, Propagation of Singularities, Inverse Problems, phase space, Hamiltonian trajectories, Pseudodifferential Operators ($\Psi$DO)
- References: schwartz-distributions, symplectic-geometry

## Entity: proximal-algorithms-admm
- Title: Proximal Algorithms & ADMM
- Category: Advanced Analysis
- Language: en
- Key Concepts: soft-thresholding, Proximal Gradient Method, DERIVATION: Proximal Operator of the $L_1$ Norm, ADMM: Alternating Direction Method of Multipliers, The Proximal Operator, What Is It, proximal operator, Proximal Algorithms & ADMM, Augmented Lagrangian, Alternating Direction Method of Multipliers (ADMM), Related Topics, Convergence
- References: convex-optimization, fixed-point-theorems

## Entity: deep-ritz-method
- Title: The Deep Ritz Method
- Category: Advanced Analysis
- Language: en
- Key Concepts: Advantages and High Dimensions, Residual Networks (ResNets), Handling Boundary Conditions, Curse of Dimensionality:, Architecture: Residual Networks, Smoothness:, The Variational Principle, DERIVATION: Ritz Method for the Heat Equation, Deep Ritz Framework, Mesh-free:, Penalty Method, What Is It, The Deep Ritz Method, variational principle, Related Topics
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
- Key Concepts: Lexical Analysis, LL(k) Parsers:, Syntax Analysis (Parsing), LR(k) Parsers:

## Entity: p-vs-np
- Title: Complexity Theory: P vs NP and Cook-Levin
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Formal Definitions, P vs NP problem, Cook-Levin Theorem

## Entity: cryptography-math
- Title: Cryptography: RSA and Elliptic Curves
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Elliptic Curve Cryptography (ECC), RSA (Rivest-Shamir-Adleman)

## Entity: distributed-systems-consensus
- Title: Distributed Systems: CAP and Consensus
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Partition tolerance:, Consistency:, CAP Theorem, Availability:, Paxos Consensus

## Entity: pagerank-math
- Title: Graph Algorithms: PageRank Mathematics
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: The PageRank Equation, Random Surfer Model

## Entity: strongly-connected-components
- Title: Graph Algorithms: Strongly Connected Components
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Kosaraju's Algorithm, Tarjan's Algorithm

## Entity: graph-coloring
- Title: Graph Theory: Coloring and Chromatic Number
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: chromatic number, Vertex Coloring, Brooks' Theorem:, Four Color Theorem:, Bounds and Theorems

## Entity: max-flow-min-cut
- Title: Graph Theory: Max-Flow Min-Cut Theorem
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: The Theorem, Ford-Fulkerson Algorithm, Max-Flow Min-Cut Theorem

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
- Key Concepts: Overview, Mathematical Formulation

## Entity: greens-theorem
- Title: Green's Theorem
- Category: Advanced Calculus
- Language: en
- Key Concepts: Overview, Mathematical Formulation
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
- Key Concepts: Overview, Mathematical Formulation
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
- Key Concepts: Pointwise Convergence (Dirichlet/Jordan):, Carleson's Theorem:, Fourier Series, $L^2$ Convergence:, Convergence Theorems
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
- Key Concepts: Iterative Updates, The Lagrangian Relaxation, Dual update (gradient ascent):, Primal update (parallelizable):

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
- Key Concepts: Variable Elimination, Junction Tree Algorithm

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
- Key Concepts: Unscented Kalman Filter (UKF), Unscented Transform, Extended Kalman Filter (EKF)

## Entity: compressed-sensing
- Title: Signal Processing: Compressed Sensing
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: L1 Minimization, The Problem

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
- Key Concepts: Discrete Wavelet Transform (DWT), Continuous Wavelet Transform (CWT)
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
- Key Concepts: Johansen Test, Error Correction Model (ECM)

## Entity: differential-forms
- Title: Differential Forms & Exterior Calculus
- Category: Advanced Theory
- Language: en
- Key Concepts: Wedge Product, closed, Generalized Stokes' Theorem, Exterior Derivative, exact
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
- Key Concepts: Hilbert Spaces and Riesz Representation, Riesz Representation Theorem, Spectral Theorem
- Backlinks: calculus-of-variations, complex-analysis, fredholm-theory, hilbert-banach-spaces, math/algebraic-topology, math/differential-geometry, math/differentiation-of-measures, math/harmonic-analysis, math/lp-spaces, math/nonparametric-regression, math/ode-stability, math/spectral-theory-operators, math/topology-basics, spectral-theorem-unbounded

## Entity: galois-theory
- Title: Galois Theory: Fields and Solvability
- Category: Advanced Theory
- Language: en
- Key Concepts: solvable group, Field Extensions and Automorphisms, The Fundamental Theorem, Galois extension, Solvability by Radicals

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
- Key Concepts: Probability Spaces, Radon-Nikodym Theorem, Martingales, martingale

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
- Key Concepts: Overview, Heuristics

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
- Key Concepts: Genetic Programming (GP), Fundamental Law of Active Management, Limitations:, Multiple testing bias, Deep Feature Learning, Alpha Factor Discovery, Overfitting, IC Information Ratio (ICIR), Universality, Practical Applications, Survivorship bias, Non-linearity, Limitations & Extensions, Reinforcement Learning, Factor Attribution
- References: bayesian-black-litterman, finance/alpha-stacking, finance/gan, finance/monte-carlo-method, mcmc
- Backlinks: alpha-orthogonalization, alternative-data-alpha, finance/alpha-stacking, finance/lightgbm-xgboost, finance/meta-labeling, finance/online-learning-mab, finance/shap-interpretability, model-free-rl-factors

## Entity: alpha-orthogonalization
- Title: Alpha Orthogonalization
- Category: Algorithms and ML
- Language: en
- Key Concepts: Performance Attribution, Gram-Schmidt process, Residual, The Problem: Factor Crowding, True Capacity, Currency Neutral, Alpha Decay Analysis, Alpha Orthogonalization: Factor Independence, Related Topics, Alpha Orthogonalization, The Mathematical Process, 2. Risk Neutralization, Alphas, 1. Residualization, Neutral
- References: alpha-factor-discovery, finance/factor-attribution, pca
- Backlinks: causal-inference-trading, pca-statarb

## Entity: alternative-data-alpha
- Title: Alternative Data Alpha
- Category: Algorithms and ML
- Language: en
- Key Concepts: [[gan]]-based augmentation, Limitations:, Lead Time, IC vs. Crowding, Signal-to-noise decomposition, Sparsity, Consumer Sector, Practical Applications, Limitations & Extensions, Python Implementation, Information Decay, Macro, Related Topics, Mathematical Framework, Key Metrics
- References: alpha-factor-discovery, finance/alpha-stacking, finance/gan, finance/value-at-risk, mcmc, news-sentiment-trading
- Backlinks: news-sentiment-trading

## Entity: causal-inference-trading
- Title: Causal Inference in Trading
- Category: Algorithms and ML
- Language: en
- Key Concepts: Alpha Orthogonalization, Causal Inference in Trading, 1. Directed Acyclic Graphs (DAGs), Visualization: The Confounder Trap, Natural Experiments, 2. The Do-Calculus (Judea Pearl), Control, Related Topics, Granger Causality, Confounders and Spurious Alphas, Why Citadel uses Causal AI, Causal Inference, Backtest Overfitting, 3. Granger Causality vs. True Causality, Tools of the Trade
- References: alpha-orthogonalization, causal-inference, finance/probability-of-backtest-overfitting
- Backlinks: causal-inference-do-calculus

## Entity: finance/cointegration
- Title: Cointegration
- Category: Algorithms and ML
- Language: en
- Key Concepts: stable long-run equilibrium, vector error correction model (VECM), error correction term, Johansen procedure, cointegrating vector, Testing., cointegration, max-eigenvalue test, Pitfalls, Definition., trace test, Applications in finance, Granger Representation Theorem., Spurious regression (Granger and Newbold, 1974)., Engle-Granger two-step method
- References: arima-models, central-limit-theorem, copula-models, finance/value-at-risk, hidden-markov-models, kalman-filter, math/law-of-large-numbers, math/spectral-theory-operators
- Backlinks: arima-models, pairs-trading

## Entity: convolutional-volatility-resolution-clustering
- Title: Convolutional Volatility Resolution Clustering (CVRC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Variational Autoencoder Bottleneck, Interpretable latent space, Adversarial regime generation, Volatility Surface as an Image, Limitations:, Convolutional Feature Extraction, Interpretability, Multi-scale, Regime Cluster Characteristics, Overfitting, Low-Frequency Equilibrium, Adaptive Denoising, Variational Autoencoder (VAE), Practical Applications, Vol Surface Imputation
- References: arch-models, finance/gan, finance/spectral-analysis, garch-models, manifold-learning, volatility-forecasting, volatility-modulated-spectral-surface, wavelet-transform

## Entity: deep-galerkin
- Title: Deep Galerkin Method (DGM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Optimization, Neural Network, Curse of Dimensionality, Autograd, Deep Galerkin Method (DGM), Sampling, Continuous Solution, Deep Galerkin Method (DGM) in Finance, Related Topics, The Core Idea: PDE as a Loss Function, How It Works, Automatic Differentiation, Visualization: The Curse Broken, Why Tier-1 Quants Use It, High Dimensions
- References: automatic-differentiation, black-scholes, convex-optimization, neural-sdes-finance, numerical-pde-finance
- Backlinks: deep-ritz-method, schwartz-distributions

## Entity: deep-hedging
- Title: Deep Hedging
- Category: Algorithms and ML
- Language: en
- Key Concepts: Key Advantages, Global Optimization, Convex Risk Measure, Zero Transaction Costs, Visualization: BS Delta vs. Deep Hedging, Buehler et al. (2019), Model-Agnostic, optimal hedge ratio, The Failure of Black-Scholes Hedging, 2. The Neural Network, Related Topics, Complete Markets, market frictions, 1. The Objective Function, Universal
- References: finance/delta-hedging-practice, finance/rough-volatility, reinforcement-learning, transformer-architecture

## Entity: fama-macbeth-regression
- Title: Fama-MacBeth Regression
- Category: Algorithms and ML
- Language: en
- Key Concepts: Step 2: Cross-Sectional Regressions (Risk Premia), Final Estimate, Smart beta validation, Multifactor Extension, Limitations and Extensions, Fama-MacBeth Regression, Small cross-section, Background, Errors-in-Variables Problem, Practical Applications, Pricing factor discovery, Python Implementation, risk premium, Related Topics, Parameter Reference
- References: black-scholes, finance/hierarchical-risk-parity, mcmc, portfolio-optimization-ml, ts-cs-factor-analysis
- Backlinks: causal-inference, finance/apt-ross, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, ts-cs-factor-analysis

## Entity: finance/gan
- Title: GANs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Risk management (VaR/ES), Key Variants for Finance, Stylised Facts the GAN Must Capture, The Generator ($G$), Applications in Quant Finance, FinGAN, Mathematical Concept: Minimax Game, TimeGAN, Distributional shift, Limitations and Extensions, Mode collapse, Background, The Discriminator ($D$), Leverage effect, CGAN
- References: finance/monte-carlo-method, finance/value-at-risk, fraud-detection, heston-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, convolutional-volatility-resolution-clustering, f-divergences, finance/adversarial-stress-testing, fraud-detection, lob-prediction, news-sentiment-trading, portfolio-optimization-ml, timegan, volatility-modulated-spectral-surface

## Entity: finance/gnn-finance
- Title: Graph Neural Networks in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Financial Applications, Implementation, GNNs (Graph Neural Networks), Graph [[attention-mechanisms|Attention]] Networks (GAT), Related Articles, Graph Neural Networks in Finance, Graph Convolutional Networks (GCN)
- References: attention-mechanisms, finance/eigenportfolio-rmt, finance/systemic-contagion-debtrank, finance/transformer-timeseries, fraud-detection

## Entity: finance/hidden-markov-models
- Title: Hidden Markov Models (HMM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: 1. Evaluation (Forward-Backward Algorithm), Online regime detection, Hidden Markov Model (HMM), Initial Distribution $\pi$, M-step, Emission Distribution $B$, market regime detection, Limitations and Extensions, Background, E-step, Adaptive strategies, The Markov Property, Core Components, Fixed number of states, Volatility forecasting
- References: avellaneda-stoikov, finance/phase-space-reconstruction, finance/shannon-entropy, garch-models, kalman-filter

## Entity: finance/lightgbm-xgboost
- Title: LightGBM and XGBoost for Factor Signals
- Category: Algorithms and ML
- Language: en
- Key Concepts: Gradient Boosting, LightGBM and XGBoost for Factor Signals, Non-stationarity, Implementation, XGBoost, LightGBM, Class imbalance, Financial Data Challenges, Related Articles, Temporality, Overfitting Controls
- References: alpha-factor-discovery, finance/probability-of-backtest-overfitting, finance/shap-interpretability, finance/transformer-timeseries
- Backlinks: finance/shap-interpretability, finance/transformer-timeseries

## Entity: lob-prediction
- Title: Limit Order Book (LOB) Prediction
- Category: Algorithms and ML
- Language: en
- Key Concepts: F1-Score, Weighted Mid-price, Adverse selection, Depth imbalance at level $k$, Mathematical Formulation, Limitations and Extensions, Order imbalance $OI_t$, Mid-price return, Background, Price pressure, Multi-Level Features, Financial Context, Extensions, Bid-ask spread, Model Architectures
- References: finance/gan, finance/market-impact-scaling, finance/value-at-risk, model-free-rl-factors, optimal-execution
- Backlinks: deep-rl-execution, finance/market-impact-scaling, finance/order-flow-imbalance, finance/transformer-timeseries

## Entity: finance/longstaff-schwartz
- Title: Longstaff-Schwartz Method (LSM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Advantages, Forward Pass, Dimensionality, Terminal Value, LSM Algorithm Steps, Limitations and Extensions, Background, Continuation value, Exercise Now, Python: Pricing an American Put Option, Multi-Asset Extension, Intrinsic value, Continue Holding, Related Topics, Prerequisites
- References: black-scholes, finance/monte-carlo-method, heston-model, numerical-pde-finance, ornstein-uhlenbeck-process
- Backlinks: convertible-bonds, finance/barrier-asian-options, finance/follmer-schweizer, finance/free-boundary-american, finance/monte-carlo-method, finance/oas, numerical-pde-finance

## Entity: finance/meta-labeling
- Title: Meta-Labeling Framework
- Category: Algorithms and ML
- Language: en
- Key Concepts: Credit Scoring, Imbalanced classes, Python: Full Meta-Labeling Pipeline, size, Primary Model, Meta-Labeling, Interpretability, Trend Following, Secondary Model, Limitations and Extensions, Triple barrier labeling, Position sizing, Improved F1-Score, Meta-Labeling Framework (Marcos Lopez de Prado), Look-ahead bias
- References: alpha-factor-discovery, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/random-matrix-theory
- Backlinks: finance/alpha-stacking, finance/probability-of-backtest-overfitting, model-free-rl-factors, news-sentiment-trading

## Entity: model-free-rl-factors
- Title: Model-Free RL for Factor Portfolios
- Category: Algorithms and ML
- Language: en
- Key Concepts: Policy Gradient Methods (PPO/DDPG), Challenges and Validation, DDPG (Deep Deterministic Policy Gradient), Model-Free RL for Factor Portfolios, SAC (Soft Actor-Critic), Action Space, Hierarchical RL, Limitations and Extensions, Differential Sharpe Ratio, Multi-objective, Prerequisites, Related Topics, Mathematical Framework, Visualization, Key Design Choices
- References: alpha-factor-discovery, black-scholes, finance/hierarchical-risk-parity, finance/meta-labeling, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/shannon-entropy, hidden-markov-models, mcmc, rl-trader
- Backlinks: finance/online-learning-mab, finance/probability-of-backtest-overfitting, lob-prediction, portfolio-optimization-ml

## Entity: finance/monte-carlo-method
- Title: Monte Carlo Method
- Category: Algorithms and ML
- Language: en
- Key Concepts: Multi-Asset Correlation via Cholesky Decomposition, Steps in Option Pricing, Monte Carlo Method, Quasi-MC, Greeks computation, Limitations and Extensions, Discount, Multidimensionality, Convergence Visualization, 2. Control Variates, Generate Random Paths, Accuracy and Convergence, Python: Vectorized Asian Option Pricing with Variance Reduction, Calculate Payoffs, Average
- References: black-scholes, finance/longstaff-schwartz, finance/particle-filter, finance/quasi-monte-carlo, finance/value-at-risk, inference-serving, mcmc, qft-basic
- Backlinks: alpha-factor-discovery, automatic-differentiation, avellaneda-stoikov, black-scholes, bootstrap, brownian-bridge, convertible-bonds, copula-models, finance/adversarial-stress-testing, finance/barrier-asian-options, finance/black-swan-scenarios, finance/follmer-schweizer, finance/free-boundary-american, finance/gan, finance/hawkes-process, finance/levy-processes, finance/libor-market-model, finance/longstaff-schwartz, finance/market-impact-scaling, finance/meta-labeling, finance/nash-equilibrium, finance/oas, finance/particle-filter, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/sha-256, finance/shor-algorithm, finance/systemic-contagion-debtrank, finance/value-at-risk, finance/xva, fraud-detection, gaussian-processes, generative-models, generative-scenario-models, kelly-criterion, lln-clt, math/sde-numerical-methods, model-free-rl-factors, numerical-pde-finance, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, qft-basic, quantum-amplitude-estimation, risk-neutral-valuation, rl-trader, volatility-forecasting

## Entity: finance/multivariate-hmm
- Title: Multivariate Hidden Markov Models
- Category: Algorithms and ML
- Language: en
- Key Concepts: Model Structure, Baum-Welch (EM) Algorithm, Transition matrix, Multivariate Hidden Markov Models, E-step: Forward-Backward, Posteriors, Interpretation, Implementation, Model Selection, M-step, Gaussian emission, Related Articles, Forward, Initial distribution, Multivariate HMM
- References: copula-models, hidden-markov-models, kalman-filter, regime-switching-factors, volatility-forecasting

## Entity: finance/nash-equilibrium
- Title: Nash Equilibrium
- Category: Algorithms and ML
- Language: en
- Key Concepts: Evolutionary game theory, Nash Equilibrium, Mean-field games, Mixed Strategy, Market Microstructure, Auction Theory, Mathematical Formulation, Limitations and Extensions, Best Response, Market Making as a Game, Algorithmic Trading, Pure Strategy, Python: Finding Equilibria in a 2x2 Game, Multiple equilibria, Related Topics
- References: avellaneda-stoikov, finance/adversarial-stress-testing, finance/market-impact-scaling, finance/monte-carlo-method, optimal-execution
- Backlinks: finance/systemic-contagion-debtrank

## Entity: neural-sdes-finance
- Title: Neural SDEs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Generative Market Simulation, Visualization: Neural vs. Classical Diffusion, The Adjoint Method, Neural SDEs in Finance, Neural ODEs, High-Dimensional Pricing, Calibration, Path-Dependency, Model Discovery, Diffusion Network, Related Topics, Stochastic Re-parameterization, Applications, Training via Adjoint Sensitivity, The Mathematical Framework
- References: finance/rough-volatility, finance/volatility-surface, neural-odes, stochastic-differential-equations
- Backlinks: deep-galerkin, path-dependent-volatility, timegan

## Entity: news-sentiment-trading
- Title: News Sentiment Trading System
- Category: Algorithms and ML
- Language: en
- Key Concepts: Signal decay model, Preprocessing, Regulatory risk, Lexicon-based, Sentiment Dispersion, Python: Full Sentiment Pipeline, Signal Decay, Mathematical Formulation, Sarcasm and irony, Entity Linking, Limitations and Extensions, Coverage, Financial Context, Sentiment Accuracy, Fake news risk
- References: alternative-data-alpha, finance/gan, finance/meta-labeling, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: alternative-data-alpha, llm-financial-analysis

## Entity: numerical-pde-finance
- Title: Numerical PDE Methods in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Greeks, Multi-Asset: ADI Methods, Local volatility, tridiagonal, Penalty method, Exotic path-dependent, Projected SOR, General $\Theta$-Scheme, Transformation to the Heat Equation, Crank-Nicolson ($\theta = 1/2$), Non-uniform (stretched), American Options: Free Boundary Problem, The Black-Scholes PDE, American option pricing, Numerical PDE Methods in Finance
- References: black-scholes, convertible-bonds, finance/longstaff-schwartz, finance/monte-carlo-method, finance/optimal-stopping-american, partial-differential-equations
- Backlinks: black-scholes, deep-galerkin, feynman-kac, finance/longstaff-schwartz, neural-operators, stochastic-control

## Entity: finance/online-learning-mab
- Title: Online Learning and Multi-Armed Bandits
- Category: Algorithms and ML
- Language: en
- Key Concepts: Online Learning and Multi-Armed Bandits, Thompson Sampling, Multi-Armed Bandit (MAB), Implementation, Problem and Regret, Related Articles, cumulative regret, UCB1 achieves, Lai-Robbins lower bound, Exp3 for Adversarial Environments, UCB (Upper Confidence Bound)
- References: alpha-factor-discovery, model-free-rl-factors, rl-trader

## Entity: finance/alpha-stacking
- Title: Orthogonal Alpha Stacking
- Category: Algorithms and ML
- Language: en
- Key Concepts: Robust PCA / [[random-matrix-theory]], Regularization, Risk Management, Factor Neutralization, Limitations:, Order dependence in Gram-Schmidt, ICIR-weighted, Practical Applications, Limitations & Extensions, Dynamic residualization, Regulatory Reporting, Python Implementation, Orthogonal Alpha Stacking, Related Topics, Prerequisites
- References: alpha-factor-discovery, convex-optimization-trading, finance/hierarchical-risk-parity, finance/meta-labeling, finance/random-matrix-theory
- Backlinks: alpha-factor-discovery, alternative-data-alpha, finance/apt-ross, finance/asymptotic-arbitrage-large-markets

## Entity: finance/particle-filter
- Title: Particle Filter (SMC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Distributions, Importance Weight Update, Computation, Comparison, Accuracy, Particle Filter, Risk Management, SMC², Degeneracy, Resample, Effective Sample Size, Limitations and Extensions, Volatility Estimation, Related Topics, Prerequisites
- References: finance/monte-carlo-method, heston-model, hidden-markov-models, mcmc, ornstein-uhlenbeck-process
- Backlinks: conditionally-gaussian-processes, finance/heston-model, finance/monte-carlo-method, finance/phase-space-reconstruction, kalman-filter, nonlinear-filtering, pairs-trading

## Entity: fastest-mean-reversion
- Title: Portfolios of Fastest Mean Reversion
- Category: Algorithms and ML
- Language: en
- Key Concepts: The Mathematical Objective, Visualization: Reversion Speed, Sparse Portfolio, speed of mean reversion, Portfolios of Fastest Mean Reversion, Sparse Mean-Reverting Portfolios, smallest generalized eigenvalue, Rayleigh Quotient, The Box-Tiao / Generalized Eigenvalue Approach, Related Topics, Ornstein-Uhlenbeck (OU) process, Sparse PCA, $L_1$-regularization (LASSO), Fastest Mean Reversion
- References: ornstein-uhlenbeck-process, pairs-trading, pca
- Backlinks: pca-statarb

## Entity: finance/probability-of-backtest-overfitting
- Title: Probability of Backtest Overfitting
- Category: Algorithms and ML
- Language: en
- Key Concepts: The "Silent Killer" of Quant Funds, CSCV, Deflated Sharpe Ratio (DSR), Minimum backtest length, Limitations and Extensions, Combinatorially Symmetric Cross-Validation (CSCV), In-Sample (IS), Selection Bias under Multiple Testing, The PBO Formula, The Deflated Sharpe Ratio, Related Topics, Visualization, Out-of-Sample (OOS), Probability of Backtest Overfitting (PBO), Dependent strategies
- References: finance/meta-labeling, finance/monte-carlo-method, finance/value-at-risk, model-free-rl-factors
- Backlinks: bayesian-black-litterman, causal-inference-trading, convex-optimization-trading, finance/lightgbm-xgboost, finance/meta-labeling, finance/shap-interpretability, model-free-rl-factors, numeraire-invariant-hedging, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, timegan, ts-cs-factor-analysis

## Entity: finance/quasi-monte-carlo
- Title: Quasi-Monte Carlo Methods
- Category: Algorithms and ML
- Language: en
- Key Concepts: Koksma-Hlawka inequality, Low-discrepancy sequences, Effective dimension and ANOVA, ANOVA decomposition, Quasi-Monte Carlo (QMC), Scrambled (randomized) QMC, QMC vs MC convergence, effective dimension in the superposition sense, Brownian bridge construction, Applications in finance, star discrepancy, Risk aggregation., The Koksma-Hlawka inequality, Halton sequence., Quasi-Monte Carlo Methods
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, kalman-filter, math/law-of-large-numbers
- Backlinks: finance/monte-carlo-method

## Entity: finance/random-matrix-theory
- Title: Random Matrix Theory (RMT)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Systemic risk monitoring, Marchenko-Pastur (MP) law, Key Properties and Assumptions, Eigenvector noise, No shrinkage of direction, Limitations and Extensions, Risk factor discovery, Eigenvalue Cleaning Procedure, Practical Applications, Deep learning, Factor model interpretation, Python Implementation, Related Topics, Step 3 — Reconstruct:, Parameter Reference
- References: finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/value-at-risk, math/spectral-theory-operators, quantum-entanglement
- Backlinks: convex-optimization-trading, cross-impact, eigenvalues-eigenvectors, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/meta-labeling, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, nonlinear-shrinkage, portfolio-optimization-ml, quantum-entanglement, regime-switching-factors

## Entity: regime-switching-factors
- Title: Regime-Switching Factor Strategies
- Category: Algorithms and ML
- Language: en
- Key Concepts: Options market making, Identifiability, filtered probability, Macro timing, Regime-Conditional Factor Betas, Correlation regimes, Limitations and Extensions, smoothed probability, Regime-Switching Factor Strategies, Background, Practical Applications, Persistence, Dynamic factor allocation, stationary distribution, Python Implementation
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc
- Backlinks: finance/multivariate-hmm, hmm-particle-filters, rl-trader

## Entity: rl-trader
- Title: Reinforcement Learning (RL) Trader
- Category: Algorithms and ML
- Language: en
- Key Concepts: Learning Curve Visualization, Sample efficiency, Dynamic hedging, Adversarial market, Interpretability, Offline RL, Position-Based Formulation, Limitations and Extensions, Crypto HFT, Overfitting, Background, Practical Applications, Policy Gradient (PPO), Discount, Python Implementation
- References: attention-mechanisms, finance/monte-carlo-method, finance/value-at-risk, mcmc, optimal-execution, regime-switching-factors
- Backlinks: deep-rl-execution, finance/online-learning-mab, model-free-rl-factors, reinforcement-learning

## Entity: finance/sha-256
- Title: SHA-256 (Secure Hash Algorithm)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Data integrity, Second pre-image resistance, Bitcoin proof-of-work, Digital signatures, Davies-Meyer, Quantum threat (partial), Security Properties, Proof-of-Work, Deterministic, HMAC-SHA256, Efficiency, Limitations and Extensions, Merkle proofs, Compression Function, Truncated variants
- References: finance/lempel-ziv-complexity, finance/monte-carlo-method, finance/shannon-entropy, finance/shor-algorithm, mcmc
- Backlinks: finance/shor-algorithm

## Entity: finance/shap-interpretability
- Title: SHAP and ML Model Interpretability
- Category: Algorithms and ML
- Language: en
- Key Concepts: Symmetry, Shapley Values, Financial Use Cases, SHAP (SHapley Additive exPlanations), Properties, Null player, Related Articles, SHAP and ML Model Interpretability, SHAP vs LIME vs Permutation Importance, Efficiency, TreeSHAP
- References: alpha-factor-discovery, finance/lightgbm-xgboost, finance/probability-of-backtest-overfitting, fraud-detection
- Backlinks: finance/lightgbm-xgboost

## Entity: finance/shannon-entropy
- Title: Shannon Entropy in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Market Efficiency via Entropy, Relative Entropy (KL Divergence), Mutual Information, Information-theoretic portfolio construction, Limitations and Extensions, Shannon Entropy in Finance, Entropy Over Market Regimes, Practical Applications, Approximate Entropy and Sample Entropy, Model validation, Channel capacity, Topological entropy, Python Implementation, Shannon Entropy, Axiomatic Derivation
- References: finance/lempel-ziv-complexity, finance/random-matrix-theory, hidden-markov-models, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ai-theory/neural-tangent-kernel, change-of-variables, contrastive-learning, course-math-for-ai, decision-theory, deep-rl-execution, dirichlet-forms, distributions-zoo, dpo, embedding-models, empirical-processes, entropy-information, entropy-pooling, ergodic-theory, ergodic-theory-markov, f-divergences, finance/coherent-risk-measures, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hidden-markov-models, finance/lempel-ziv-complexity, finance/levy-esscher-continuous, finance/quasi-monte-carlo, finance/sha-256, finance/shor-algorithm, finance/upper-lower-hedging-prices, finance/zeta-field, financial-entropy, free-probability, hydrodynamic-limits, information-geometry-finance, information-theory-basics, jensen-inequality, jensens-inequality, kolmogorov-complexity, language-models/safety/rlhf-dpo, laplacian, logistic-regression, martingale, math/bayesian-asymptotics, math/concentration-inequalities, math/ergodic-theorems-birkhoff, math/gaussian-process-sample-paths, math/harmonic-analysis, math/information-theory, math/interacting-particle-systems, math/large-deviations-cramer, math/m-estimators, math/sigma-algebra-measurability, maximum-entropy, maximum-entropy-irl, mle, model-free-rl-factors, multi-token-prediction, multivariate-normal, mutual-information-divergence, naive-bayes, neural-scaling-laws, nlp-financial-analysis, online-learning-regret, pac-learning, path-integral-control, ppo, probability-distributions, probing-classifiers, quantum-entanglement, quantum-information-entropy, ricci-flow, risk-neutral-valuation, rlhf, sac-math, slm, small-ball-probabilities, soft-actor-critic, sparse-autoencoders, statistical-mechanics, training-dynamics, volatility-modulated-spectral-surface

## Entity: finance/shor-algorithm
- Title: Shor's Algorithm
- Category: Algorithms and ML
- Language: en
- Key Concepts: Symmetric key safety, continued fraction algorithm, Timeline uncertainty, Qubit requirements, discrete logarithm problem, elliptic curve cryptography (ECC), Quantum risk premium, Blockchain quantum risk, Limitations and Extensions, RSA Key Size vs. Required Logical Qubits, Secure multi-party computation, Background, Practical Applications, Elliptic curve extension, Cryptographic migration planning
- References: finance/monte-carlo-method, finance/sha-256, finance/shannon-entropy, finance/spectral-analysis, mcmc
- Backlinks: finance/fft, finance/sha-256

## Entity: pca-statarb
- Title: StatArb with PCA (Avellaneda-Lee)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Principal Component Analysis (PCA), The Signal (S-score), Extract Factors, Modeling the Residual (The Trade), synthetic market factors, Execution, Short, Buy, The Problem with Pairs, The PCA Approach, Statistical Arbitrage, Visualization: The S-Score, Statistical Arbitrage with PCA (Avellaneda-Lee), Why it Dominates, The Residual ($\tilde{R}_i$)
- References: alpha-orthogonalization, fastest-mean-reversion, ornstein-uhlenbeck-process, pairs-trading, pca

## Entity: ts-cs-factor-analysis
- Title: TS vs CS Factor Analysis
- Category: Algorithms and ML
- Language: en
- Key Concepts: Cross-Sectional (CS) regression, Zoo of factors, Time-Series (TS) Regression, Long-short factor portfolios, Identifies, Risk attribution, Cross-Sectional (CS) Regression, Jensen's alpha, Limitations and Extensions, Weak identification, Background, Time-Series (TS) regression, SDF framework, Data requirement, Practical Applications
- References: black-scholes, fama-macbeth-regression, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: fama-macbeth-regression, finance/factor-attribution

## Entity: timegan
- Title: TimeGAN: Generating Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: Supervised Loss (The Key), Recovery (Decoder), Data Augmentation, Generator, temporal dynamics, TimeGAN, TimeGAN: Generating Synthetic Financial Data, Reconstruction Loss, Related Topics, Adversarial Loss, Why Quants Use It, there is only one history, The Flaw of Standard GANs, Embedder (Encoder), The Magic: Three Loss Functions
- References: finance/gan, finance/probability-of-backtest-overfitting, neural-sdes-finance

## Entity: finance/transformer-timeseries
- Title: Transformers for Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: Temporal Self-[[attention-mechanisms|Attention]], Key Architectures, Transformers, Practical Advice, Variable Selection, Informer (Zhou et al. 2021), Temporal Fusion [[transformer-architecture|Transformer]] (TFT, Lim et al. 2021), Positional encoding, Lookback, Transformers for Time Series, PatchTST (Nie et al. 2023), Self-[[attention-mechanisms|Attention]] Mechanism, Implementation, Related Articles, Normalization
- References: attention-mechanisms, finance/lightgbm-xgboost, hidden-markov-models, kalman-filter, lob-prediction, transformer-architecture
- Backlinks: finance/gnn-finance, finance/lightgbm-xgboost

## Entity: vine-copulas
- Title: Vine Copulas for StatArb
- Category: Algorithms and ML
- Language: en
- Key Concepts: Conditional Probability (The Signal), Visualization: Bivariate Building Blocks, The Flaw of Multivariate Normal, Copulas, Fit the Vine, The Trade, bivariate (2D) pair-copulas, Vine Copulas for Statistical Arbitrage, Application: Statistical Arbitrage, Related Topics, The Vine Structure, Sklar's Theorem, Vine Copulas, Why it Beats Linear Models, What is a Vine Copula?
- References: alpha-factor-research, copula-models, pairs-trading

## Entity: clifford-algebras
- Title: Clifford Algebras & Geometric Algebra
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Multivectors, Rotors and Spinors, Applications in Physics, Definition, Clifford Algebras & Geometric Algebra

## Entity: complex-manifolds
- Title: Complex and Kähler Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Complex [[manifold-learning|Manifold]], 1. Almost Complex Structures, $J^2 = -I$, Complex Manifold, Kähler Manifold, Mirror Symmetry, Complex manifold, integrable, must form a Calabi-Yau 3-fold, Complex and Kähler Manifolds: The Geometry of String Theory, 4. Calabi-Yau Manifolds, 5. Mirror Symmetry, Local Potential, Related Topics, Fundamental 2-form
- References: hodge-theory, manifold-learning, spectral-graph-theory, symplectic-geometry, tensor-calculus
- Backlinks: manifold, ricci-flow

## Entity: connections-curvature
- Title: Connections and Covariant Derivatives
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Differential (Second) Bianchi Identity, Affine Connection, 2. Holonomy: The Geometric Signature of Curvature, Metric-compatible, Gravitational Waves, 4. Decomposing Curvature: Ricci vs. Weyl, Levi-Civita Connection, Holonomy Group, Christoffel Symbols, Poincaré Conjecture, 5. Geometric Flow: The Ricci Flow, 1. The Covariant Derivative and Christoffel Symbols, Ambrose-Singer Theorem, Related Topics, Ricci Flow
- References: gauge-theory-yang-mills, manifold-learning, ricci-flow, tensor-calculus
- Backlinks: course-math-for-ai, geometric-deep-learning, hodge-theory, ricci-flow, symplectic-geometry, tensor-calculus

## Entity: delay-differential-equations
- Title: Delay Differential Equations in Neural Systems
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hopf bifurcation, Linear Stability Analysis, Mathematical Formulation, Delay Differential Equations in Neural Systems, Delay-Induced Bifurcations

## Entity: geometric-deep-learning
- Title: Geometric Deep Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: 5. Applications at the PhD Level, Grids (Euclidean Space), Symmetry, Climate Science, CNNs, Gauge Equivariant CNNs, Transformers, The Solution, Non-linear Activation, Manifolds, Linear Propagation, Invariance, GNNs, Pooling / Coarsening, Geometric Deep Learning (GDL)
- References: connections-curvature, lie-groups-algebras, manifold-learning, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, course-math-for-ai, graph-curvature-oversquashing, lie-groups-algebras, tensor-calculus

## Entity: graph-curvature-oversquashing
- Title: Graph Curvature & Over-squashing
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Negative curvature, MATHEMATICAL DERIVATION: ORC on a Triangle, Positive curvature, Graph Curvature & Over-squashing, Spectral Gap and Cheeger Constant, Graph Rewiring (SDRF), Ollivier-Ricci Curvature, Stochastic Discrete Ricci Flow (SDRF), Ricci curvature, Ollivier-Ricci curvature, Over-squashing, Over-squashing and Sensitivity, What Is It, Related Topics
- References: geometric-deep-learning, graph-neural-networks, math/spectral-theory-operators, optimal-transport, ricci-flow, spectral-graph-theory

## Entity: hodge-theory
- Title: Hodge Theory and Harmonic Forms
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hodge Star Operator, [[spectral-graph-theory|Laplacian]], Harmonic form, 5. Applications, B. Topological Data Analysis (TDA), Visualization: Hodge Decomposition, one unique harmonic form, Codifferential, 4. The Hodge Decomposition Theorem, Hodge Theory, Hodge Theory: Bridging Topology and Differential Equations, Related Topics, Hodge Laplacians, co-exact, 3. The Laplace-de Rham Operator
- References: connections-curvature, manifold-learning, spectral-graph-theory, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, homological-algebra, tensor-calculus

## Entity: information-geometry-nn
- Title: Information Geometry of Neural Networks
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Natural [[convex-optimization|Gradient Descent]], Fisher Information Metric, Curvature and Flat Minima, Information Geometry of Neural Networks
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: lie-algebras-physics
- Title: Lie Algebras in Physics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Lie Algebras in Physics, isospin, Electromagnetism, strangeness, Strong Force (QCD), The Adjoint Representation and Force Carriers, Lie Algebras, Adjoint Representation, Lie-algebra valued 1-forms, 2. Particle Physics and $\mathfrak{su}(3)$, Visualization: Spin Multiplets, Gauge Theories and Connections, Hermitian operator, Heisenberg Uncertainty Principle, 1. Angular Momentum and $\mathfrak{su}(2)$
- References: general-relativity, lie-groups
- Backlinks: equivariant-diffusion-models

## Entity: lie-groups
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Lie bracket, [[manifold-learning|Manifold]] Optimization, Lie Groups and Lie Algebras, exponential map, 2. Lie Algebra ($\mathfrak{g}$), Visualization: Group vs. Algebra, 1. Lie Group ($G$), Basic Definitions, tangent space at the identity, Dynkin diagrams, Pose Estimation, Related Topics, roots, Representations and Root Systems, Lie Groups in Modern AI
- References: equivariant-nn, manifold-learning, math/differential-geometry
- Backlinks: course-math-for-ai, equivariant-diffusion-models, lie-algebras-physics, random-walks-groups

## Entity: lie-groups-algebras
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Exponential Map, Group, $SU(n)$ (Special Unary), CNNs, Visualization: Group vs. Algebra, 5. Applications in Machine Learning, Smooth [[manifold-learning|Manifold]], Lie Groups and Lie Algebras: The Geometry of Symmetry, Baker-Campbell-Hausdorff (BCH) Formula, Physical Intuition, Related Topics, Jacobi Identity, Lie Algebra, Equivariant Neural Networks, Strong Nuclear Force
- References: gauge-theory-yang-mills, geometric-deep-learning, manifold-learning, tensor-calculus
- Backlinks: geometric-deep-learning

## Entity: manifold-learning
- Title: Manifold Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: 3. [[spectral-graph-theory|Laplacian]] Eigenmaps, Spectral Graph Theory, Anomaly Detection, Visualization: Euclidean vs. Geodesic, 2. Locally Linear Embedding (LLE), Image Analysis, geodesic distances, 1. Isomap (Isometric Mapping), Related Topics, Laplace-Beltrami operator, Applications, Manifold Learning, Manifold Hypothesis, Key Algorithms, Single-cell RNA Sequencing
- References: math/analysis-geometry/information-geometry, math/differential-geometry, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, ai-theory/knowledge-distillation, category-theory-ml, complex-manifolds, connections-curvature, convolutional-volatility-resolution-clustering, course-math-for-ai, differential-forms, diffusion-models, energy-based-models, equivariant-diffusion-models, ergodic-theory-sgd, f-divergences, finance/asymptotic-expansion-finance, fisher-information, gauge-equivariant-nn, geometric-deep-learning, geometric-mechanics-lie-groups, geometry-loss-landscapes, geometry-of-attention, hodge-theory, implicit-function-theorem, information-geometry-finance, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lie-groups, lie-groups-algebra, lie-groups-algebras, linear-algebra, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/non-euclidean-geometry, math/ode-stability, math/stratonovich-integral, maximum-entropy, metric-spaces, mle, model-merging-procrustes, morse-theory, multimodal-alignment-clip, nerf, neural-operators-fno, neural-radiance-fields-math, nonlinear-filtering, normalization-layers-math, optimal-transport-gromov-wasserstein, pca, pinns-convergence, regularization-implicit-bias, ricci-flow, riemannian-geometry, semimartingales-on-manifolds, stochastic-calculus-manifolds, stochastic-manifolds, symplectic-geometry, symplectic-hamiltonian-nn, tensor-calculus

## Entity: neural-radiance-fields-math
- Title: Mathematical Foundations of NeRF
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Positional Encoding and Harmonic Analysis, [[manifold-learning|Manifold Learning]]:, Relationship to Other Techniques, Differential Geometry and Inverse Rendering, The Radiance Field Function, Volume Rendering Equation, NeuS / VolSDF:, volume rendering equation, [[pdes|Partial Differential Equations]]:, Plenoxels / Instant NGP:, positional encoding, volume rendering, Related Topics, Integrated Positional Encoding (IPE), Neural Radiance Fields (NeRF)
- References: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, calculus-integration, manifold-learning, nerf, transformer-architecture

## Entity: mean-field-games
- Title: Mean Field Games
- Category: Analysis & Geometry
- Language: en
- Key Concepts: The MFG System, Fokker-Planck (Kolmogorov forward) equation, Variational Structure, Hamilton-Jacobi-Bellman (HJB) equation, Mathematical Formulation, Mean Field Games
- Backlinks: hydrodynamic-limits, mechanism-design, stochastic-games

## Entity: optimal-transport
- Title: Optimal Transport & Wasserstein Metrics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Introduction, Applications, Kantorovich Relaxation, Optimal Transport & Wasserstein Metrics, Entropic Regularization and Sinkhorn Divergence
- Backlinks: convex-analysis, course-math-for-ai, graph-curvature-oversquashing, linear-programming, martingale-optimal-transport, math/analysis-geometry/information-geometry, metric-spaces, radon-nikodym

## Entity: ricci-flow
- Title: Ricci Flow and Geometric Evolution
- Category: Analysis & Geometry
- Language: en
- Key Concepts: 5. Applications in Computer Vision and AI, 4. Solving the Poincaré Conjecture, Perelman's Breakthrough, 1. The Evolution Equation, Singularities, Ricci Flow with Surgery, Intuition, Poincaré Conjecture, 3. Perelman's [[shannon-entropy|Entropy]] Functional, 2. Singularities and Surgery, Proof Strategy, Neck-pinch, Ricci Flow, Geometrization Conjecture, Related Topics
- References: complex-manifolds, connections-curvature, finance/shannon-entropy, manifold-learning
- Backlinks: connections-curvature, course-math-for-ai, differential-equations, graph-curvature-oversquashing, stochastic-manifolds

## Entity: spectral-graph-theory
- Title: Spectral Graph Theory
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Expander Graphs, Graph Laplacian, Cheeger's Inequality, Spectral Graph Theory
- References: math/spectral-theory-operators
- Backlinks: ai-theory/spatial/equivariant-gnn, algebraic-geometry-slt, algebraic-topology-persistent, complex-manifolds, differential-galois-theory, ergodic-theory-markov, feller-processes, finance/fractional-fokker-planck, fourier-transform, geometric-deep-learning, gnn-credit-risk, gnn-weisfeiler-lehman, graph-curvature-oversquashing, graph-neural-networks, graph-theory, higher-category-theory-ai, hodge-theory, laplacian, linear-algebra, manifold-learning, map-estimation, math/spdes, math/spectral-theory-operators, non-commutative-geometry, number-theory-l-functions, operator-semigroups, schwartz-distributions, spectral-clustering, spectral-theorem-unbounded, stable-processes, string-theory-calabi-yau, tensor-calculus, topos-neural-networks

## Entity: neural-ode-stability
- Title: Stability Theory for Neural ODEs
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Adjoint Method and Backward Stability, Lipschitz Constants and Uniqueness, Stability Theory for Neural ODEs, Lyapunov Stability, Mathematical Formulation
- References: math/spectral-theory-operators

## Entity: symplectic-geometry
- Title: Symplectic Geometry
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Visualization: The Area Preserving Flow, A. Symplectomorphisms, Symplectic Manifolds, Hamilton's Equations, 4. Key Properties, Area, Computational Physics, Symplectic Geometry, Symplectic Form, 2. Hamiltonian Vector Fields, Poisson Bracket, Hamiltonian, Symplectic Geometry: The Geometry of Phase Space, Hamiltonian Mechanics, B. Liouville's Theorem
- References: ai-physics/hamiltonian-nn, connections-curvature, manifold-learning, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, manifold, microlocal-analysis

## Entity: tensor-calculus
- Title: Tensor Calculus on Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Antisymmetric Tensors, A. General Relativity, Geometric Deep Learning, Killing Vector Field, 5. Advanced Applications, Tensor Calculus: Invariant Descriptions of Curvature and Flow, Killing's Equation, Smooth [[manifold-learning|Manifold]], Related Topics, Determinant and Volume, 1. Multilinear Algebra and Tensor Spaces, Hodge Dual, Levi-Civita Symbol ($\epsilon_{\mu\nu\rho\sigma}$), Property, Lie Derivative
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
- Key Concepts: Nerve, filter function, Higher-dimensional simplices ($k$-simplices), Edges (1-simplices), The Nerve Complex, Mathematical Formulation, Vertices (0-simplices), The Mapper Algorithm in TDA, Algorithm Parameters and Functoriality

## Entity: math/branching-processes
- Title: Branching Processes
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Binary splitting., mean offspring number, Subcritical, Continuous-time branching (Bellman-Harris process)., 2. Nuclear chain reactions., Critical, Supercritical, 3. Poisson offspring., Proof sketch., Critical case (Kolmogorov, 1938)., Subcritical case., 1. Population genetics., 3. Epidemic modelling., Extinction probability, Extensions
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/renewal-theory, math/wiener-hopf-factorization
- Backlinks: math/percolation, math/point-processes, math/random-graphs, math/renewal-theory, math/subordinators, math/wiener-hopf-factorization

## Entity: clt
- Title: Central Limit Theorem (CLT)
- Category: Applied Probability
- Language: en
- Key Concepts: Fat Tails, Deep Learning, Central Limit Theorem (CLT): The Law of Cosmic Order, 2. When Does it Fail? (Lindeberg-Feller), 3. Rate of Convergence: Berry–Esseen Theorem, Visualization: Convergence to Gaussian, 4. Role in Modern Systems, Standard Deviation, Lindeberg Condition, 1. The Classical CLT (Lindeberg–Lévy), Finance, The Miracle, Berry–Esseen Theorem, Normal Distribution, always Gaussian
- References: finance/levy-processes, frtb-es, mle
- Backlinks: characteristic-functions, mgf-characteristic-functions

## Entity: change-of-variables
- Title: Change of Variables
- Category: Applied Probability
- Language: en
- Key Concepts: Normalizing Flows, Log-Normal, Intuition, A. The Box-Muller Transform, Scaling Factor, Generative AI, Change of Variables: The Geometry of Probability, 3. Key Applications, Visualization: Stretching the Density, 2. The Multivariate Case (The Jacobian), Mutual Information, 1. The 1D Case, C. Differential [[shannon-entropy|Entropy]], Related Topics, B. Log-Normal Distribution
- References: black-scholes, finance/shannon-entropy, gradient-hessian-jacobian, mle, variational-autoencoders

## Entity: characteristic-functions
- Title: Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: 3. The Lévy Continuity Theorem, 1. Definition, Carr-Madan method, Fast Fourier Transform (FFT), Variance Gamma, A. Uniqueness (Lévy's Inversion Theorem), Related Topics, [[fourier-transform|Fourier Transform]], Characteristic Function, A. Fast Option Pricing (FFT), 2. Fundamental Properties, B. Infinite Divisibility, always exists, B. Sums of Variables, Universal Existence
- References: central-limit-theorem, clt, finance/levy-processes, fourier-transform, merton-jump-diffusion, mgf
- Backlinks: copulas, course-math-for-ai, extreme-value-theory, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/contiguity-measures, math/convergence-semimartingales, math/glivenko-cantelli, math/infinitely-divisible-distributions, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/product-measures-fubini, math/renewal-theory, math/stable-convergence, math/stationary-wide-spectral, math/stein-method, math/triangular-arrays-processes, math/u-statistics, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, wiener-chaos

## Entity: math/concentration-inequalities
- Title: Concentration Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: rate function, moment generating function, Chernoff bound, only on the range, exponential bounds, change of measure, Applications and perspective, polynomial, Chebyshev's inequality., Examples:, Theorem (Azuma–Hoeffding)., Sub-Gaussian random variables, Concentration Inequalities, Chernoff bound for Bernoulli sums, McDiarmid's bounded differences inequality
- References: central-limit-theorem, characteristic-functions, empirical-processes, finance/shannon-entropy, martingale-clt, math/large-deviations-cramer, math/law-of-large-numbers
- Backlinks: ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, distributions-zoo, extreme-value-theory, fundamental-inequalities, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/markov-chain-mixing, math/minimax-estimation, math/multiple-testing, math/percolation, math/random-graphs, math/stein-method, random-matrices

## Entity: convergence-types
- Title: Convergence of Random Variables
- Category: Applied Probability
- Language: en
- Key Concepts: Generalization, false, Central Limit Theorem, Stability, Visualization: Convergence Speed, Consistency, 1. Convergence Almost Surely (a.s.), 2. Convergence in Probability (p), Related Topics, Relationship Map, Weak Law of Large Numbers, 4. Convergence in Distribution (d), 3. Convergence in Mean ($L^p$), The Hierarchy of Convergence, Convergence of Random Variables
- References: central-limit-theorem, math/law-of-large-numbers

## Entity: copulas
- Title: Copulas and Dependence
- Category: Applied Probability
- Language: en
- Key Concepts: zero tail dependence, Copulas and Dependence Structures, 3. Archimedean Copulas (Clayton, Gumbel, Frank), linear, 1. Gaussian Copula, asymmetric tail dependence, Types of Copulas, Tail Dependence, Visualization: Tail Dependence, isolate the dependency structure, Sklar's Theorem, Why Not Just Use Correlation?, 2. Student's t-Copula, Related Topics, unique
- References: characteristic-functions, extreme-value-theory, statistical-mechanics
- Backlinks: correlation-association, joint-distributions

## Entity: math/coupling-methods
- Title: Coupling Methods
- Category: Applied Probability
- Language: en
- Key Concepts: Optimal Coupling and Strassen's Theorem, coupling inequality, Markov Chain Coupling and Mixing Time Bounds, Strassen's theorem, optimal coupling, monotone coupling, Coupling Inequality for Convergence Time, Central Limit Theorem Proofs, Grand Coupling, Applications, [[weak-convergence-prokhorov|Weak Convergence]] and [[de-finetti-exchangeability|Exchangeability]], coupling, Rates of Convergence, maximal coupling strategy, Coupling Methods
- References: central-limit-theorem, de-finetti-exchangeability, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/weak-convergence-prokhorov
- Backlinks: math/geometric-ergodicity, math/interacting-particle-systems, math/markov-chain-mixing, math/percolation

## Entity: cramer-rao-bound
- Title: Cramer-Rao Lower Bound
- Category: Applied Probability
- Language: en
- Key Concepts: Score Function, UMVUE, 4. Importance in Estimation Theory, 1. Fisher Information, 3. General Form (Biased Estimators), Related Topics, 2. The Inequality, MLE, Fisher Information, Efficiency, Cramer-Rao Lower Bound (CRLB), Statistical Efficiency, Efficient Estimator
- References: estimator-properties, fisher-information, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information, math/bayesian-asymptotics, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, mle, mle-estimation, sufficient-statistics, umvue-completeness

## Entity: delta-method
- Title: Delta Method
- Category: Applied Probability
- Language: en
- Key Concepts: Multivariate Delta Method, Standard Errors, 3. Applications, Related Topics, MLE Functions, 1. Formal Statement, Delta Method, 2. Derivation Idea
- References: lln-clt, mle-estimation, statistical-inference
- Backlinks: slutsky-theorem, umvue-completeness

## Entity: entropy-information
- Title: Entropy and Information Gain
- Category: Applied Probability
- Language: en
- Key Concepts: Visualization: Entropy vs. Probability, Low Entropy, 1. Shannon [[shannon-entropy|Entropy]] ($H$), [[shannon-entropy|Entropy]] and Information Gain, any kind of dependency, High [[shannon-entropy|Entropy]], highest Information Gain, 4. Information Gain (IG), Related Topics, 2. Conditional Entropy $H(Y \mid X)$, 3. Mutual Information ($I$)
- References: finance/shannon-entropy, maximum-entropy
- Backlinks: course-math-for-ai

## Entity: ergodic-theory
- Title: Ergodic Theory & Mixing
- Category: Applied Probability
- Language: en
- Key Concepts: Birkhoff's Ergodic Theorem, Measure-Preserving Dynamical Systems, Ergodicity, Mixing and [[shannon-entropy|Entropy]], Ergodic Theory & Mixing
- References: finance/shannon-entropy
- Backlinks: stochastic-processes

## Entity: ergodic-theory-markov
- Title: Ergodic Theory of Markov Chains
- Category: Applied Probability
- Language: en
- Key Concepts: Does the chain settle into a stable equilibrium (stationary distribution), regardless of where it started?, Stationary Distribution ($\pi$), Bayesian Inference, aperiodic, The Ergodic Theorem for Markov Chains, Rapid Mixing, Mixing Time, irreducible, reversible, Related Topics, Convergence, Metropolis-Hastings, Reversibility and Detailed Balance, Visualization: Convergence to Stationarity, Applications
- References: finance/shannon-entropy, math/information-theory, spectral-graph-theory
- Backlinks: mdp

## Entity: de-finetti-exchangeability
- Title: Exchangeability and de Finetti's Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: de Finetti's Theorem (1931), Statement:, mixing measure, Dirichlet Process and Nonparametric Bayesian Models, Proof Sketch, exchangeability, Finite Exchangeability, Exchangeability, Connections and Applications, Scaling limits:, every Bayesian model, Binary case:, Bayesian modelling, hierarchical Bayesian models, Diaconis–Freedman theorem
- References: bayesian-deep-learning, math/law-of-large-numbers, mcmc
- Backlinks: math/coupling-methods, math/random-graphs, math/stein-method

## Entity: extreme-value-theory
- Title: Extreme Value Theory
- Category: Applied Probability
- Language: en
- Key Concepts: domain of attraction, return levels, centering and scaling sequences, Fisher-Tippett-Gnedenko theorem, Return Levels and Return Periods, Climate and Weather, Value-at-Risk and Expected Shortfall, Poisson point process, Connection to Regular Variation, Pickands-Balkema-de Haan theorem, Fréchet Domain (Type II), generalized Pareto distribution, $\xi < 0$ (Weibull), Environmental Engineering, generalized extreme value (GEV) distribution
- References: characteristic-functions, finance/coherent-risk-measures, math/concentration-inequalities, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/large-deviations-cramer, math/stable-convergence
- Backlinks: copulas, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/bipower-variation, finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/repo-market-systemic, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, frtb-es, generative-scenario-models, math/lundberg-cramer-ruin, order-statistics, stable-processes

## Entity: free-probability
- Title: Free Probability
- Category: Applied Probability
- Language: en
- Key Concepts: Visualization: Free vs. Classical Convolution, Optimization, Free Independence, freely independent, The R-Transform, Applications in Deep Learning, Weight Initialization, The Free Central Limit Theorem, free convolution, R-transform, Free Probability, freeness, Signal Propagation, independence, Related Topics
- References: finance/shannon-entropy, math/information-theory, random-matrices

## Entity: math/geometric-ergodicity
- Title: Geometric Ergodicity
- Category: Applied Probability
- Language: en
- Key Concepts: Harris recurrent, Gibbs samplers and conditional models, geometrically ergodic, polynomial ergodicity, Applications to MCMC, Connections to related concepts, uniformly geometrically ergodic, Heavy-tailed or jump processes, asymptotic variance, Langevin diffusion, Practical significance, The Foster–Lyapunov drift condition, Burn-in estimation, Diagnostics, Geometric Ergodicity
- References: math/coupling-methods, math/discrete-markov-chains, math/large-deviations-cramer, math/markov-chain-mixing, math/stochastic-recursive-sequences
- Backlinks: math/ode-stability

## Entity: hmm
- Title: Hidden Markov Models (HMM)
- Category: Applied Probability
- Language: en
- Key Concepts: A. The Evaluation Problem (Forward-Backward), Hidden Markov Model (HMM), Transition Matrix ($A$), Emission Probabilities ($B$), Baum-Welch Algorithm, 1. The Model Structure, Related Topics, Visualization: HMM State Transition, Expectation-Maximization (EM), Observations ($X_t$), 2. The Three Fundamental Problems, C. The Learning Problem (Baum-Welch), Hidden States ($Z_t$), Forward Algorithm, Viterbi Algorithm
- References: hmm-particle-filters, mle
- Backlinks: bayesian-networks, em-algorithm, multivariate-normal

## Entity: hydrodynamic-limits
- Title: Hydrodynamic Limits
- Category: Applied Probability
- Language: en
- Key Concepts: diffusion coefficient, Traffic and Crowd Flow, Statistical Mechanics, Hydrodynamic Limits, empirical density, Why It Matters, [[shannon-entropy|Entropy]] Method (Guo-Papanicolaou-Varadhan), Large Deviations, The Scaling Idea, Related Topics, Visualization: From Particles to Density, macroscopic world, AI and Neural Mean Fields, Macroscopic Fluctuation Theory (MFT), microscopic world
- References: finance/shannon-entropy, math/interacting-particle-systems, mean-field-games, partial-differential-equations

## Entity: likelihood-ratio-tests
- Title: Hypothesis Testing II: Likelihood Ratio Tests
- Category: Applied Probability
- Language: en
- Key Concepts: Most Powerful, 1. The Likelihood Ratio, 2. Wilks' Theorem, Hypothesis Testing II: Likelihood Ratio Tests, Neyman-Pearson Lemma, 4. Relation to Other Tests, Wald Test, Power, Related Topics, Score Test (Lagrange Multiplier), 3. Power of the Test
- References: fisher-information, mle-estimation, statistical-inference
- Backlinks: rank-tests

## Entity: math/information-theory
- Title: Information Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Cross-[[shannon-entropy|Entropy]] Loss:, Information Theory, Data Processing Inequality:, Fundamental Theorems, Applications in AI, Related Topics, Information Bottleneck:, 3. Kullback-Leibler (KL) Divergence, Core Concepts, 2. Mutual Information $I(X;Y)$, 1. Shannon [[shannon-entropy|Entropy]] $H(X)$, ELBO (Variational Inference):, Channel Capacity Theorem:, Source Coding Theorem:
- References: finance/shannon-entropy, fisher-information, variational-inference
- Backlinks: convex-optimization, course-math-for-ai, ergodic-theory-markov, free-probability, math/harmonic-analysis, maximum-entropy, online-learning-regret, probabilistic-combinatorics, random-matrices, universal-portfolios, wiener-chaos

## Entity: math/interacting-particle-systems
- Title: Interacting Particle Systems
- Category: Applied Probability
- Language: en
- Key Concepts: Open Problems, Phase transitions in high dimensions, Exact scaling for ASEP, coalescence, Finite-time mean-field theory, only if that site is empty, symmetric exclusion process (SEP), Comparison coupling, Distributed Algorithms, Opinion Dynamics, Configuration Space and State Representation, Overview, McKean–Vlasov equation, asymmetric simple exclusion process (ASEP), hydrodynamic limit
- References: convex-optimization, finance/shannon-entropy, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/percolation, stochastic-differential-equations
- Backlinks: hydrodynamic-limits, math/spdes

## Entity: law-iterated-logarithm
- Title: Law of Iterated Logarithm
- Category: Applied Probability
- Language: en
- Key Concepts: LIL, Law of Iterated Logarithm (LIL), LLN, CLT, Related Topics, 1. Formal Statement, 3. Role in Stochastic Processes, [[brownian-motion|Brownian Motion]], 2. Interpretation
- References: brownian-motion, lln-clt, stochastic-processes
- Backlinks: math/borel-cantelli-zero-one, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers

## Entity: mcmc
- Title: MCMC (Markov Chain Monte Carlo)
- Category: Applied Probability
- Language: en
- Key Concepts: 2. Key Algorithms, C. Hamiltonian Monte Carlo (HMC), Bayesian Hierarchical Models, Stationary Distribution, Bayesian Statistics, A. Metropolis-Hastings, 1. The Core Idea: Sampling by Walking, Related Topics, Burn-in, B. Gibbs Sampling, Sample, Acceptance Ratio, MCMC: Markov Chain Monte Carlo, Mixing, PyMC
- References: bayesian-inference, hamiltonian-mechanics, hmm-particle-filters, lsv-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, ar-models, arch-models, arima-models, arma-models, bayesian-black-litterman, bayesian-deep-learning, bayesian-inference, brownian-motion, causal-inference, convex-optimization-trading, cornish-fisher-cvar, de-finetti-exchangeability, fama-macbeth-regression, finance/fractional-fokker-planck, finance/monte-carlo-method, finance/particle-filter, finance/sha-256, finance/shor-algorithm, fraud-detection, hmm-particle-filters, kalman-filter, model-free-rl-factors, monte-carlo-integration, news-sentiment-trading, numeraire-invariant-hedging, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, regime-switching-factors, rl-trader, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis, variational-inference, volatility-forecasting

## Entity: mdp
- Title: Markov Decision Processes (MDP)
- Category: Applied Probability
- Language: en
- Key Concepts: Markov Property, $\gamma \in [0, 1)$, The Bellman Equations, $\mathcal{S}$, Visualization: Value Discounting, Reinforcement Learning, Value Iteration, $R(s, a, s')$, Related Topics, optimal policy, State-Value Function $V^\pi(s)$, Policy Iteration, Policy, Bellman Optimality Equation, The Mathematical Framework
- References: ergodic-theory-markov, reinforcement-learning, stochastic-control
- Backlinks: mcts, multi-armed-bandits

## Entity: markov-chebyshev
- Title: Markov and Chebyshev Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: Markov and Chebyshev Inequalities: Bounding the Unknown, Markov's Inequality, Visualization: The Tail Bounds, Intuition, A. Proving the Law of Large Numbers, Weak Law of Large Numbers (WLLN), 1. Markov's Inequality (The First Moment Bound), C. Algorithmic Complexity (Randomized Algorithms), 2. Chebyshev's Inequality (The Second Moment Bound), Proof mechanism, Usage, Related Topics, The Theorem, 3. Applications in Advanced Systems, Probably Approximately Correct (PAC)
- References: central-limit-theorem, frtb-es, measure-theory

## Entity: mgf
- Title: Moment Generating Functions (MGF)
- Category: Applied Probability
- Language: en
- Key Concepts: Cramér's Bound, Visualization: MGF of a Gaussian, Chernoff Bound, 2. The Power of MGFs, B. Sums of Independent Variables, C. Uniqueness, 1. Definition, Moment Generating Functions (MGF), exact same distribution, A. Generating Moments, Related Topics, Probability Generating Function (PGF), Characteristic Function, 4. Application in Finance: Portfolio Tail Risk, 3. Relationship to Other Transforms
- References: central-limit-theorem, fourier-transform, math/large-deviations-cramer
- Backlinks: characteristic-functions

## Entity: mgf-characteristic-functions
- Title: Moment Generating Functions (MGFs) and Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Moment Generating Functions (MGF), 2. Characteristic Functions, Linear Transformation, Uniqueness Theorem, Symmetry, Summation of Distributions, Moment Generating Functions (MGFs) and Characteristic Functions, 3. Applications, Moment Generation, Limit Theorems, Independent Sums, Properties, Inversion Formula, always exists, Related Topics
- References: clt, fourier-transform, probability-distributions

## Entity: monte-carlo-integration
- Title: Monte Carlo Integration
- Category: Applied Probability
- Language: en
- Key Concepts: Central Limit Theorem, The Core Concept, Law of Large Numbers, importance weight, Monte Carlo Integration and Importance Sampling, high-dimensional spaces, Visualization: Convergence Rate, Related Topics, Importance Sampling, Rejection Sampling
- References: math/law-of-large-numbers, mcmc, variational-inference
- Backlinks: bootstrap-jackknife, deep-ritz-method, mcts

## Entity: multivariate-normal
- Title: Multivariate Normal Distribution
- Category: Applied Probability
- Language: en
- Key Concepts: squared Mahalanobis distance, Bayesian linear regression, Consequences, normal, conditional covariance does not depend on $\mathbf{x}_2$, exact confidence ellipsoids, 1. Definition, 5. Precision matrix and conditional independence, ELBO, Gaussian processes., 12. Related topics, Theorem (Lauritzen)., Sampling., 4. Conditional distribution, Marginals.
- References: f-divergences, finance/shannon-entropy, fisher-information, gaussian-processes, hmm, pca
- Backlinks: course-math-for-ai, distributions-zoo, joint-distributions

## Entity: rank-tests
- Title: Non-parametric Statistics: Rank Tests
- Category: Applied Probability
- Language: en
- Key Concepts: Procedure, 4. Advantages and Limitations, Advantages, Statistic, 3. Kruskal-Wallis Test, Limitations, 2. Mann-Whitney U Test (Wilcoxon Rank-Sum), Hypothesis, ranks, Non-parametric Statistics: Rank Tests, Asymptotic Property, 1. Wilcoxon Signed-Rank Test, Related Topics
- References: bootstrap-jackknife, likelihood-ratio-tests, statistical-inference
- Backlinks: order-statistics

## Entity: order-statistics
- Title: Order Statistics
- Category: Applied Probability
- Language: en
- Key Concepts: 3. Joint Distribution, Distribution of Min and Max, 2. Distribution of the $i$-th Order Statistic, Minimum $X_{(1)}$, Order Statistics, Maximum $X_{(n)}$, 4. Applications, 1. Definition, Non-parametric Inference, Reliability, Related Topics, Extreme Value Theory
- References: extreme-value-theory, probability-distributions, rank-tests

## Entity: math/percolation
- Title: Percolation
- Category: Applied Probability
- Language: en
- Key Concepts: FKG inequality, Universality:, same critical exponents, critical phenomena, Related articles, critical, The RSW theorem and crossing probabilities, strictly increasing, Scaling relations:, RSW Theorem (informal):, almost surely at most one, hyperscaling relations, Site percolation:, Theorem (uniqueness, Harris–Seymour):, Key consequence:
- References: math/branching-processes, math/concentration-inequalities, math/coupling-methods, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/random-graphs
- Backlinks: math/interacting-particle-systems, probabilistic-combinatorics

## Entity: map-estimation
- Title: Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference
- Category: Applied Probability
- Language: en
- Key Concepts: Credible Intervals, Gaussian Prior, Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference, 1. Bayesian Framework, [[spectral-graph-theory|Laplacian]] Prior, Likelihood, 2. MAP Derivation, Prior, Posterior, 3. Relation to MLE and Regularization, 4. Bayesian Credible Intervals, Related Topics
- References: bayes-theorem, linear-regression-ols, mle-estimation, spectral-graph-theory, statistical-inference
- Backlinks: mle-estimation

## Entity: mle-estimation
- Title: Point Estimation: Maximum Likelihood Estimation (MLE)
- Category: Applied Probability
- Language: en
- Key Concepts: Asymptotic Normality, Consistency, Point Estimation: Maximum Likelihood Estimation (MLE), 3. Example: Gaussian Mean, Invariance, 2. Properties of MLE, 1. Formal Derivation, Likelihood Function, Efficiency, Related Topics, Log-Likelihood
- References: cramer-rao-bound, fisher-information, map-estimation, statistical-inference
- Backlinks: cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, map-estimation, sufficient-statistics

## Entity: probabilistic-combinatorics
- Title: Probabilistic Combinatorics
- Category: Applied Probability
- Language: en
- Key Concepts: The Probabilistic Method, Ramsey Numbers and Bounds, Paul Erdős, Giant Component, Hashing, Threshold Phenomena in Random Graphs, Randomized Algorithms, Visualization: The Giant Component Transition, Related Topics, Connectivity, must exist, Probabilistic Combinatorics, Error-Correcting Codes, Applications in Computer Science, The Lovász Local Lemma (LLL)
- References: math/information-theory, math/percolation, math/random-graphs

## Entity: distributions-zoo
- Title: Probability Distributions Zoo
- Category: Applied Probability
- Language: en
- Key Concepts: MGF., 7. Related topics, Negative binomial., Geometric / Negative Binomial, Wishart and inverse Wishart, Multinomial / Categorical, Stable., 6. Visualisation: tail contrast, Stable, Probability Distributions Zoo, PMF., Multivariate normal $\mathcal{N}_d(\boldsymbol\mu, \Sigma)$, 2. Continuous distributions, Beta($\alpha, \beta$), Geometric($p$).
- References: bayesian-inference, central-limit-theorem, exponential-families, finance/shannon-entropy, math/concentration-inequalities, maximum-entropy, multivariate-normal, poisson-process
- Backlinks: course-math-for-ai, poisson-process

## Entity: estimator-properties
- Title: Properties of Estimators: Bias, Variance, and MSE
- Category: Applied Probability
- Language: en
- Key Concepts: Variance, Mean Squared Error (MSE), consistent, 2. The Bias-Variance Tradeoff, 1. Definitions, Interpretation, unbiased, Bias, Properties of Estimators: Bias, Variance, and MSE, 3. Consistency, Related Topics
- References: cramer-rao-bound, linear-regression-ols, mle-estimation, statistical-inference, sufficient-statistics
- Backlinks: bootstrap-jackknife, cramer-rao-bound, sufficient-statistics

## Entity: queuing-theory
- Title: Queuing Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Utilization ($\rho$), Kendall's Notation, Queuing Theory, API Rate Limiting, c (Number of servers), Average number in system ($L$), Network Congestion, K (System capacity), Visualization: Queue Length vs. Utilization, Related Topics, Service Rate, S (Service time distribution), A (Arrival process), Average time in system ($W$), Arrival Rate
- References: inference-serving, math/markov-chain-mixing, poisson-process

## Entity: math/random-graphs
- Title: Random Graphs
- Category: Applied Probability
- Language: en
- Key Concepts: Threshold Methods: First and Second Moment, Supercritical regime, Subcritical regime, Degree Distribution and Chromatic Number, Connectivity and Percolation Thresholds, Critical window, Subcritical and Supercritical Regimes, random $d$-regular graph, Stochastic Block Model and Community Detection, Threshold Phenomena and the Phase Transition, Further reading, threshold phenomenon, Applications, first moment method, Random Regular Graphs and Local Limits
- References: central-limit-theorem, de-finetti-exchangeability, math/branching-processes, math/concentration-inequalities, math/large-deviations-cramer, math/poisson-approximation
- Backlinks: math/high-dimensional-statistics, math/percolation, probabilistic-combinatorics

## Entity: random-matrices
- Title: Random Matrix Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Ledoit-Wolf shrinkage, Tracy-Widom Distribution, Current Research Directions, 10 symmetry classes, free central limit theorem, [[Concentration-inequalities|Concentration of Measure]] and Spectral Regularization, Stieltjes Transform and Self-Consistent Equations, Non-linear models, Covariance Matrix Estimation, Stieltjes transform, Marchenko-Pastur Law, Local characteristics, Literature and Further Study, self-consistent equation, Sparse and structured matrices
- References: empirical-processes, math/concentration-inequalities, math/high-dimensional-statistics, math/information-theory, math/lp-spaces, math/minimax-estimation, math/spectral-theory-operators
- Backlinks: free-probability

## Entity: random-walks-groups
- Title: Random Walks on Groups
- Category: Applied Probability
- Language: en
- Key Concepts: Formal Definition, Geometric Deep Learning, Algebra, Polya's Theorem, Molecular Dynamics, Key Questions and Concepts, Card Shuffling, 1. Recurrence vs. Transience, Mixing Time, Geometry, Related Topics, Visualization: Return Probabilities, 2. Convergence to Uniform (Mixing), Random Walks on Groups, 3. Boundary Theory and Poisson Boundary
- References: lie-groups, math/discrete-markov-chains, math/markov-chain-mixing, math/spectral-theory-operators

## Entity: math/renewal-theory
- Title: Renewal Theory
- Category: Applied Probability
- Language: en
- Key Concepts: 3. Insurance and ruin., Overshoot, undershoot, and the inspection paradox, Example., Direct Riemann integrability, Laplace transform methods, Key renewal theorem (Smith)., renewal measure, Renewal reward theorem, renewal function, 1. Replacement and maintenance policies., Delayed and stationary renewal processes, Elementary renewal theorem, current life, 2. The M/G/1 queue., renewal equation
- References: characteristic-functions, math/branching-processes, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/wiener-hopf-factorization
- Backlinks: math/branching-processes, math/markov-chain-mixing, math/point-processes, math/poisson-approximation, math/random-walks, math/subordinators, math/wiener-hopf-factorization, poisson-process

## Entity: bootstrap-jackknife
- Title: Resampling Methods: Bootstrap & Jackknife
- Category: Applied Probability
- Language: en
- Key Concepts: Procedure, Resampling Methods: Bootstrap & Jackknife, 1. The Jackknife, Main Use, 2. The Bootstrap, 3. Comparison, Limitation, Variance Estimation, with replacement, The Bootstrap Principle, Method, Related Topics, Computations
- References: estimator-properties, monte-carlo-integration, statistical-inference
- Backlinks: rank-tests

## Entity: sle
- Title: Schramm-Loewner Evolution (SLE)
- Category: Applied Probability
- Language: en
- Key Concepts: Driving Function, $\kappa = 3$, 1. The Physical Motivation: Critical Interfaces, Visualization: The Growing Curve, Loewner Equation, $\kappa = 2$, $\xi_t = \sqrt{\kappa} B_t$, Conformal Invariance, $\kappa = 8$, [[gff|Gaussian Free Field (GFF)]], Percolation, $g_t(z)$, $4 < \kappa < 8$, Related Topics, Famous Values:
- References: brownian-motion, conformal-field-theory, gff, statistical-mechanics
- Backlinks: gff

## Entity: math/stein-method
- Title: Stein's Method
- Category: Applied Probability
- Language: en
- Key Concepts: Stein equation, Stein's Method, Number theory, Local Dependence and Dissociation, Bounds and Metrics, Concrete Example: Fixed Points in Random Permutations, Wasserstein distance, The Stein Operator and Stein Equation, exchangeable pairs, Applications and Extensions, Chen–Stein Method for Poisson Approximation, Stein operator, Graph theory, Statistical physics, Exchangeable Pairs and Stein Discrepancy
- References: central-limit-theorem, characteristic-functions, de-finetti-exchangeability, math/concentration-inequalities, math/local-limit-theorems, math/poisson-approximation

## Entity: sufficient-statistics
- Title: Sufficient Statistics & Factorization Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: Minimal Sufficient Statistic, Sufficient Statistics & Factorization Theorem, Completeness, 4. Rao-Blackwell Theorem, 2. Fisher-Neyman Factorization Theorem, Rao-Blackwellization, sufficient, 1. Definition, 3. Minimal Sufficiency and Completeness, Related Topics
- References: cramer-rao-bound, estimator-properties, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information

## Entity: time-series
- Title: Time Series Analysis
- Category: Applied Probability
- Language: en
- Key Concepts: Time Series Analysis, Weak Stationarity, frequency domain, 2. MA (Moving Average), Stationarity, temporal dependence, differences, GARCH(1,1), Autocorrelation Function (ACF) and PACF, Visualization: Stationarity, Related Topics, Spectral Analysis, Spectral Density, Classical Models (Box-Jenkins), 3. ARIMA (Auto-Regressive Integrated Moving Average)
- References: math/markov-chain-mixing
- Backlinks: garch-models, language-models/mamba-ssm, math/stochastic-calculus/rough-path-signatures

## Entity: total-probability-variance
- Title: Total Probability and Total Variance
- Category: Applied Probability
- Language: en
- Key Concepts: In AI, 3. Law of Total Variance (Eve's Law), Variance Decomposition, Intuition, Bayesian Hierarchical Models, 4. Application in Machine Learning, Visualization: Variance Decomposition, Laws of Total Probability and Total Variance, Bias, Related Topics, 2. Law of Total Expectation (Adam's Law), Stochastic Processes, Example: Financial Alpha, Component 1 (Expected Conditional Variance), Variance
- References: bayesian-inference, hmm-particle-filters

## Entity: wentzell-freidlin
- Title: Wentzell-Freidlin Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Instantone, Neural Networks, The Action Functional ($S$), Quasi-potential, Applications, Climate Science, Rate Function, Wentzell-Freidlin Theory (Large Deviations for SDEs), 2. The Quasi-Potential, Exit Time, Key Phenomena, Visualization: The Escape Path, Chemistry, Large Deviation Principles (LDP), 1. Metastability and Exit Times
- References: math/large-deviations-cramer, statistical-mechanics, stochastic-differential-equations

## Entity: math/wiener-hopf-factorization
- Title: Wiener-Hopf Factorization
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Ruin probabilities., Example: symmetric random walk, 4. Barrier options in finance., ascending ladder epoch, The Wiener-Hopf identity, The Spitzer-Baxter identity, Corollary (Spitzer's identity for $\mathbb{P}(M_n = 0)$)., Historical notes, 2. Sequential analysis., Wiener-Hopf Factorization, Theorem (Spitzer)., Theorem (Wiener-Hopf factorization)., 3. GI/G/1 queueing., Connection to integral equations, Applications
- References: brownian-motion, characteristic-functions, finance/levy-processes, math/branching-processes, math/discrete-martingales, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory, math/weak-convergence-prokhorov
- Backlinks: math/branching-processes, math/random-walks, math/renewal-theory, math/subordinators

## Entity: f-divergences
- Title: f-Divergences
- Category: Applied Probability
- Language: en
- Key Concepts: f-divergences, 2. Famous Special Cases, KL Divergence, 1. Definition, Variational Inference, Fisher Information Metric, Total Variation, Visualization: Mode Seeking vs. Mass Covering, Intuition, Monotonicity, 4. Why Tier-1 ML Researchers care, f-GANs, Data Processing Inequality, Pearson $\chi^2$, Positivity
- References: finance/gan, finance/shannon-entropy, information-geometry-finance, jensens-inequality, llm, manifold-learning, rlhf
- Backlinks: course-math-for-ai, fisher-information, multivariate-normal

## Entity: math/absolute-continuity-process-measures
- Title: Absolute Continuity of Process Measures
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Model comparison in finance., pathwise observable, same diffusion coefficient, Signal detection., always, The Cramer-Rao Bound for Drift Estimation, The Setup, Novikov's condition., Connection to Filtering, absolute continuity and singularity, Applications, The Liptser-Shiryaev Theorem, different, true martingale, Absolute Continuity of Process Measures
- References: brownian-motion, finance/girsanov-semimartingales, geometric-brownian-motion, heston-model, innovation-process, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering
- Backlinks: math/cameron-martin-formula, math/differentiation-of-measures, math/signed-measures

## Entity: math/bayesian-asymptotics
- Title: Bayesian Asymptotics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Variational Bayes Asymptotics, [[exponential-families]], Regularity Conditions, Gaussian Process Priors and Rate-Optimal Posteriors, Metric [[shannon-entropy|entropy]], Identifiability, Efficiency, [[minimax-estimation]], Prior positivity, Bayesian Asymptotics, Connections to Other Topics, [[information-geometry]], Variational Bayes, Cramér regularity, Credible sets ≈ confidence sets
- References: cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/m-estimators, math/minimax-estimation
- Backlinks: math/semiparametric-efficiency

## Entity: bayesian-inference
- Title: Bayesian Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Bayesian Inference: Updating Knowledge with Data, 4. Bayesian vs. Frequentist (MLE), Variational Autoencoders (VAEs), Bayesian, B. Variational Inference (VI), Related Topics, Bayes' Theorem, 1. Bayes' Theorem, Metropolis-Hastings, Posterior $P(\theta \mid D)$, Optimization, Frequentist (MLE), Random Variables, Prior $P(\theta)$, Evidence $P(D)$
- References: bayesian-black-litterman, bayesian-kelly, mcmc, measure-theory, mle, variational-autoencoders
- Backlinks: decision-theory, distributions-zoo, linear-regression, maximum-entropy, mcmc, mle, multi-armed-bandits, naive-bayes, total-probability-variance, variational-inference

## Entity: causal-inference
- Title: Causal Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Relevance, local treatment effect, Matching, LATE, Wald estimand, Inverse Probability Weighting, Applications: Causality in Large Language Models, Do-Calculus and Causal Graphs, Unconfoundedness, compliers, Exclusion, average treatment effect on the treated, front-door criterion, Instrumental Variables, Causal Inference
- References: fama-macbeth-regression, finance/efficient-market-hypothesis, math/kolmogorov-probability-axioms, math/local-asymptotic-normality, mcmc, rlhf
- Backlinks: bayesian-networks, causal-inference-trading, correlation-association, double-ml, financial-entropy, math/semiparametric-efficiency, math/survival-analysis, probability-paradoxes

## Entity: math/contiguity-measures
- Title: Contiguity and the Le Cam Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: asymptotic power, mutually contiguous, Theorem (Le Cam's first lemma)., local asymptotic normality, The Gaussian case., Dichotomy:, contiguous, Financial Mathematics Application, entire separation, Definition., Theorem (Jacod-Shiryaev)., LAN, Le Cam's Third Lemma, sequences, Applications in Jacod-Shiryaev Framework
- References: central-limit-theorem, characteristic-functions, finance/girsanov-semimartingales, finance/semimartingale-models, math/large-deviations-cramer, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/hellinger-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: correlation-association
- Title: Correlation and Association
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 5. Partial Correlation, 2. Spearman's Rank Correlation ($r_s$), 1. Pearson Product-Moment Correlation ($\rho$), Best for, 4. Distance Correlation (dCor), 3. Kendall's Tau ($\tau$), Correlation and Association Measures, Range, ranks, Related Topics, discordant, controlling for, Visualization: Correlation vs. Dependence, Robustness, if and only if
- References: causal-inference, copulas

## Entity: math/cramer-rao-bound
- Title: Cramér–Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: quantum Fisher information, Multiparameter case: Fisher matrix and information inequality, score function, Cramér–Rao Bound, Related concepts, efficient, asymptotically efficient, quantum advantage, Quantum Fisher information, Biased estimators and general linear forms, multiparameter Cramér-Rao inequality, asymptotic theory, efficient estimators, The Cramér–Rao inequality, Fisher information and the score function
- References: empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/conditional-expectation-sigma, math/local-asymptotic-normality, math/neyman-pearson

## Entity: math/density-processes
- Title: Density Processes and Likelihood Ratios
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Density Processes and Likelihood Ratios, dichotomy, $P$-martingale, innovation martingale, unchanged, density process, Parameter estimation for diffusions., Representation via Stochastic Exponential, Definition., locally absolutely continuous, Definition and Basic Properties, Hellinger Process Connection, Girsanov's Theorem as a Corollary, Log-likelihood process., Applications
- References: finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/predictable-compensator
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/regular-conditional-probability, math/sequential-hypothesis-testing, math/signed-measures

## Entity: double-ml
- Title: Double Machine Learning
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Causal Estimation, AI Finance, Visualization: Removing the Bias, biased, The DML Procedure (Nuisance Parameter Removal), Related Topics, Double Machine Learning (Causal Inference), Applications, causal effects, Cross-Fitting, true causal effect, The Core Problem: Confounding, Marketing, Chernozhukov et al., Cross-fitting
- References: alpha-factor-research, causal-inference, mle

## Entity: empirical-processes
- Title: Empirical Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Covering number, complexity, generalization bounds, Metric [[shannon-entropy|Entropy]] and Bracketing Numbers, VC dimension, Donsker class, The fundamental result, sufficient condition, Glivenko–Cantelli Theorem, bootstrap sample, Bracketing number, sets, uniform, VC-classes are Donsker classes, Donsker Condition via [[shannon-entropy|Entropy]] Integral
- References: brownian-bridge, central-limit-theorem, finance/shannon-entropy, math/local-asymptotic-normality, math/weak-convergence-prokhorov, pac-learning
- Backlinks: math/bayesian-asymptotics, math/concentration-inequalities, math/cramer-rao-bound, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/survival-analysis, math/u-statistics, random-matrices

## Entity: expectation-maximization
- Title: Expectation-Maximization (EM)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Expectation-Maximization (EM) Algorithm, Convergence Properties, Applications, 2. M-Step (Maximization), Maximum Likelihood (MLE), Natural Language Processing, local maximum, The Two Steps, MAP, 1. E-Step (Expectation), Visualization: Clustering Progress, Missing Data, latent variables, Related Topics, Gaussian Mixture Models
- References: mle, variational-inference
- Backlinks: gmm, jensen-inequality

## Entity: fisher-information
- Title: Fisher Information and the Cramér-Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Theorem (Cramér-Rao, scalar)., additive, 9. Fisher information and the chi-squared test, Multivariate case., 10. Observed vs. expected information, efficient, negative expected Hessian, asymptotically efficient, on the statistical [[manifold-learning|manifold]], 1. Definition, 8. Examples, 11. Related topics, 8.3. Exponential $\text{Exp}(\lambda)$, Caveat., orthogonal parameterisation
- References: convex-optimization, cramer-rao-bound, exponential-families, f-divergences, manifold-learning, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, mle, sufficient-statistics
- Backlinks: course-math-for-ai, cramer-rao-bound, likelihood-ratio-tests, math/analysis-geometry/information-geometry, math/information-theory, maximum-entropy, mle-estimation, multivariate-normal

## Entity: math/hellinger-processes
- Title: Hellinger Integrals and Hellinger Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Hellinger Process for Filtered Spaces, Hellinger integral, Statistical testing., Hellinger Integrals and Hellinger Processes, For Lévy processes., Hellinger Integrals on a Single $\sigma$-Algebra, Definition., Mathematical finance., For diffusions., Hellinger process, Connection to Likelihood Ratios, filtration analogue, Applications, accumulates over time, Connection to Contiguity
- References: finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/contiguity-measures, math/doleans-dade-exponential, math/sigma-algebra-measurability, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: math/high-dimensional-statistics
- Title: High-Dimensional Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Restricted Eigenvalue Condition (REC), Multiple Testing Control: Knockoffs, Minimax Lower Bounds and Information Theory, Connection to Convex Optimization, Gaussian sequence model, Theorem (Bickel–Ritov–Tsybakov, 2009)., Gaussian width, LASSO, sparsity, Failure of Classical Methods and Regularization, The Gaussian Sequence Model, knockoffs, Restricted Isometry Property and Compressed Sensing, Fano information-theoretic criterion, Gordon's Theorem
- References: convex-analysis, cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/lp-spaces, math/minimax-estimation, math/random-graphs
- Backlinks: math/multiple-testing, math/nonparametric-regression, random-matrices

## Entity: hypothesis-testing
- Title: Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Bonferroni Correction, Multiple Testing Problem, $\alpha$ (Significance Level), not, The Framework, p-value, Type II Error, FDR (False Discovery Rate), Alternative Hypothesis ($H_1$), Type I and Type II Errors, Related Topics, 2. Pearson's Chi-Square Test ($\chi^2$), Common Tests, Type I Error, A/B Testing
- References: bootstrap, central-limit-theorem, math/neyman-pearson
- Backlinks: probability-paradoxes, sampling-distributions

## Entity: math/kernel-density-estimation
- Title: Kernel Density Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: kernel density estimator, pointwise bias, Pointwise MSE and MISE, Plug-in and Diffusion Methods, Symmetry, minimax optimal, Gaussian, curse of dimensionality, kernel function, adaptive KDE, minimax risk, Silverman's Rule of Thumb, Bandwidth Selection, Triangular, Minimax Theory and Sobolev Classes
- References: cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/glivenko-cantelli, math/local-asymptotic-normality, math/u-statistics
- Backlinks: math/minimax-estimation, math/nonparametric-regression

## Entity: kde
- Title: Kernel Density Estimation (KDE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Mean-Shift Clustering, Volatility Surface Smoothing, $K$ (The Kernel), Silverman's Rule of Thumb, Small $h$ (Under-smoothing), $h$ (The Bandwidth), Faster Convergence, Optimal Bandwidth Selection, 4. Applications in Quantitative Finance and AI, Large $h$ (Over-smoothing), Related Topics, 2. The Bias-Variance Tradeoff and Bandwidth ($h$), Kernel Density Estimation (KDE), Continuity and Differentiability, Anomaly Detection (Fraud)
- References: kernel-methods-rkhs, math/nonparametric-regression, mle

## Entity: math/local-asymptotic-normality
- Title: Local Asymptotic Normality (LAN)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Minimax optimality., asymptotic power, LAMN and LAQ Extensions, asymptotic Cramer-Rao bound, asymptotically efficient, locally asymptotically normal, Neyman-Pearson test, Optimal Tests, Definition., Gaussian shift approximation, Girsanov, LAN for Diffusion Models, Wald test, random, LAQ (Locally Asymptotically Quadratic).
- References: central-limit-theorem, finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/functional-limit-theorems, math/hellinger-processes, math/law-of-large-numbers, math/stable-convergence
- Backlinks: causal-inference, empirical-processes, fisher-information, math/absolute-continuity-process-measures, math/bayesian-asymptotics, math/cameron-martin-formula, math/cramer-rao-bound, math/density-processes, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/sequential-hypothesis-testing, math/survival-analysis

## Entity: math/m-estimators
- Title: M-Estimators and Z-Estimators
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Theorem (Consistency via Argmax Theorem):, empirical sandwich estimator, score function, epi-convergence, Maximum likelihood, breakdown point, Asymptotic normality of Z-estimators, Z-estimator, Robust M-estimators, uniform law of large numbers (uniform LLN), Connection to empirical processes and [[shannon-entropy|entropy]], Identifiability, not, M-estimators: Definition and basic theory, Tukey bisquare
- References: bootstrap, cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/concentration-inequalities, math/local-asymptotic-normality, math/neyman-pearson
- Backlinks: causal-inference-do-calculus, convex-optimization, math/bayesian-asymptotics, math/semiparametric-efficiency, math/survival-analysis

## Entity: mle
- Title: Maximum Likelihood Estimation (MLE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 2. Asymptotic Properties, 4. Connection to Information Theory, Asymptotic Normality, 1. The Likelihood Function, Consistency, Maximum Likelihood Estimation (MLE), Kullback-Leibler (KL) Divergence, Cross-[[shannon-entropy|Entropy]] Loss, 3. Fisher Information ($I(\theta)$), Fisher Information, Likelihood Function, Efficiency, Related Topics, Log-Likelihood, Cramér-Rao Lower Bound
- References: bayesian-inference, cramer-rao-bound, finance/shannon-entropy, information-geometry-finance, manifold-learning
- Backlinks: bayesian-inference, change-of-variables, clt, double-ml, expectation-maximization, fisher-information, garch-models, hmm, kde, linear-regression, logistic-regression, maximum-entropy, slutsky-theorem, umvue-completeness

## Entity: math/minimax-estimation
- Title: Minimax Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Computational Considerations, Minimax Rates over Nonparametric Classes, Gaussian comparison principle, Matrix recovery, Gaussian sequence model, Hellinger Distance and Le Cam Distance, Minimax Estimation and Le Cam's Theory, Rate-Optimal Estimators: Examples, Gordon's inequality, Adaptive Estimation and Lepski's Method, Product Experiments and Information-Theoretic Minima, Lower Bounds: Le Cam's Two-Point Method, asymptotically minimax optimal, Assouad's Lemma, Lepski's method
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/concentration-inequalities, math/kernel-density-estimation, math/local-asymptotic-normality
- Backlinks: math/bayesian-asymptotics, math/high-dimensional-statistics, math/nonparametric-regression, random-matrices

## Entity: math/multiple-testing
- Title: Multiple Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Holm's Step-Down Procedure, FWER, Bonferroni Correction, Family-Wise Error Rate (FWER), uniformly valid, More powerful, Holm (1979), positive regression dependence on subset (PRDS), FDR control without distributional assumptions, per-hypothesis error rates, Extensions and Refinements, Holm, Key property, empirical Bayes, multiple testing problem
- References: bootstrap, empirical-processes, exponential-families, math/concentration-inequalities, math/high-dimensional-statistics, math/neyman-pearson, math/sequential-hypothesis-testing

## Entity: math/neyman-pearson
- Title: Neyman–Pearson Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Neyman–Pearson Lemma, likelihood ratio test, power, Non-regular models, Simple hypotheses, Connections to [[Sequential-Hypothesis-Testing]] and [[Cramer-Rao-Bound]], Limitations and Extensions, p-value, Size and Power, P-values as Test Statistics, Test Efficiency and Power Asymptotics, Neyman–Pearson theory, Neyman–Pearson Theory, UMP Unbiased Tests and Exponential Families, randomized tests
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/sequential-hypothesis-testing
- Backlinks: hypothesis-testing, math/cramer-rao-bound, math/m-estimators, math/multiple-testing, math/survival-analysis

## Entity: math/nonparametric-regression
- Title: Nonparametric Regression
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: smoothing splines are equivalent to GP regression, Nadaraya–Watson (NW) estimator, Bandwidth and Smoothness Selection, Generalized cross-validation (GCV), adaptively, Regression Splines, Nadaraya–Watson Kernel Estimator, Bias, Bias reduction, Bias–variance decomposition, Gaussian Process Regression, Leave-one-out cross-validation, choice of kernel, Local polynomial regression, Local Polynomial Regression
- References: bootstrap, functional-analysis, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/minimax-estimation, sobolev-spaces
- Backlinks: kde

## Entity: bootstrap
- Title: Resampling: Bootstrap and Jackknife
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: The Procedure, Leave-one-out, Main Use, 2. The Jackknife, Complexity, 1. The Bootstrap, When to Use Which?, Visualization: Resampling Distribution, sampling with replacement, Sampling, Related Topics, bias correction, Robustness, Why it works: The "Plug-in" Principle, Bradley Efron
- References: central-limit-theorem, finance/monte-carlo-method
- Backlinks: hypothesis-testing, math/m-estimators, math/multiple-testing, math/nonparametric-regression

## Entity: sampling-distributions
- Title: Sampling Distributions
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Sampling Distribution, sum of squares, 1. The Chi-Square Distribution ($\chi^2$), Intuition, 3. The F-Distribution, Student's t, Sampling Distributions: t, χ², and F, Related Topics, fatter tails, Fisher's F, Visualization: t vs Normal, Comparison to Normal, Property, sample size is small, 2. Student's t-Distribution
- References: anova, central-limit-theorem, hypothesis-testing

## Entity: math/semiparametric-efficiency
- Title: Semiparametric Efficiency
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: One-step estimator., Cox Proportional Hazards Model, Doubly Robust Estimation and AIPW, tangent space, efficient influence function, Robinson estimator, The Tangent Space and the Nuisance Tangent Space, even if one of, Partially Linear Model, pathwise differentiability, IV model, profile likelihood, likelihood-based, Definition., subspace of nuisance-orthogonal directions
- References: causal-inference, cramer-rao-bound, empirical-processes, exponential-families, math/bayesian-asymptotics, math/local-asymptotic-normality, math/m-estimators
- Backlinks: math/survival-analysis

## Entity: math/sequential-hypothesis-testing
- Title: Sequential Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Connection to Optimal Stopping, The Likelihood Ratio Process, Signal processing., Optimality: The Wald-Wolfowitz Theorem, Sequential Probability Ratio Test, Change-Point Detection, Definition., CUSUM procedure., Shiryaev-Roberts procedure., closed-form expressions, The SPRT, smallest expected sample size, sequential test, Applications, Regime detection in finance.
- References: brownian-motion, geometric-brownian-motion, hidden-markov-models, kalman-filter, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality
- Backlinks: math/absolute-continuity-process-measures, math/multiple-testing, math/neyman-pearson

## Entity: slutsky-theorem
- Title: Slutsky's Theorem
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 2. Why the Difference in Convergence Matters?, Asymptotic Normality, Continuous Mapping Theorem, Z-test, 4. Continuous Mapping Theorem (CMT), Multiplication, Slutsky's Theorem: The Algebra of Limits, 1. The Theorem, probability, 3. Application: The t-statistic and Wald Tests, distribution, Addition, Division, By Slutsky's Theorem, Related Topics
- References: central-limit-theorem, delta-method, math/law-of-large-numbers, mle

## Entity: math/survival-analysis
- Title: Survival Analysis
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: counting processes, Nelson–Aalen estimator, baseline hazard, log-rank test statistic, Greenwood's formula for variance, Martingale residuals, Cox proportional hazards model, cumulative hazard, Key advantages:, discrete component, Related topics, Semiparametric efficiency and influence functions, Log-rank test for comparing groups, Survival function and hazard rate, Greenwood's formula
- References: causal-inference, empirical-processes, math/local-asymptotic-normality, math/m-estimators, math/neyman-pearson, math/point-processes, math/semiparametric-efficiency

## Entity: math/u-statistics
- Title: U-Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: variance structure, Wilcoxon Statistic:, Key Theorems Summary, Hoeffding's projection theorem, Classical Examples, unbiased, Role in Hypothesis Testing, projected U-statistic, Degenerate Convergence:, Strong Law of Large Numbers, Jackknife Consistency:, Unbiasedness:, Asymptotic Normality, Hoeffding's Decomposition, Sample Variance:
- References: central-limit-theorem, characteristic-functions, cramer-rao-bound, empirical-processes, exponential-families, martingale-clt
- Backlinks: math/kernel-density-estimation

## Entity: umvue-completeness
- Title: UMVUE and Completeness
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: unique UMVUE, Sufficient Statistics, Uniformly Minimum Variance Unbiased Estimator (UMVUE), Steps to find the UMVUE, Factorization Theorem, Completeness, MLE vs UMVUE, UMVUE and Completeness: The Theory of Optimal Estimation, 1. Sufficiency and Data Compression, 3. Completeness and Uniqueness, Sufficient, Complete Sufficient Statistic, 2. Rao-Blackwell Theorem: Improving Estimators, 4. Lehmann-Scheffé Theorem: Finding the UMVUE, less than or equal to
- References: cramer-rao-bound, delta-method, mle

## Entity: variational-inference
- Title: Variational Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Visualization: Approximating a Distribution, Optimization, VI vs. MCMC, Approach, Speed, Application in AI: Variational Autoencoders (VAE), Accuracy, Posteriors, The Variational Idea, Kullback-Leibler (KL) Divergence, Variational Inference (VI), The ELBO (Evidence Lower Bound), Scalability, Related Topics, The Intractability Problem
- References: bayesian-inference, convex-optimization, mcmc, variational-autoencoders
- Backlinks: bayes-theorem, bayesian-kelly, calculus-of-variations, expectation-maximization, math/information-theory, math/variational-calculus, monte-carlo-integration

## Entity: nonequilibrium-statmech
- Title: Nonequilibrium Statistical Mechanics
- Category: Classical Physics
- Language: en
- Key Concepts: 3. The Jarzynski Equality: Equilibrium from Chaos, Forward [[stochastic-differential-equations|SDE]], Information as a Physical Commodity, 4. Landauer’s Principle and the Demon, 2. The Arrow of Time: Crooks Theorem (1999), erase information, 5. Application in Machine Learning: Diffusion Models, Nonequilibrium Statistical Mechanics: Fluctuation Theorems, Fokker-Planck, Related Topics, Nonequilibrium, Nonequilibrium Physics, Fluctuation Theorems, Maxwell's Demon, 1. Beyond the Second Law
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
- Key Concepts: Overview, Open Addressing, Chaining, Performance

## Entity: account-abstraction
- Title: Account Abstraction (ERC-4337)
- Category: DeFi
- Language: en
- Key Concepts: EntryPoint, Granular Permissioning, Step-by-Step Execution:, 2. Advanced Paymaster Mechanics, Gasless Onboarding, Execution Overhead, ERC-20 Gas Payment, 4. Engineering Trade-offs, 3. Session Keys and Security Policies, Native Multi-sig, Deployment Cost, Account Abstraction (ERC-4337): The Modular Wallet Standard, Validation Loop, UserOperation, Visualization: The ERC-4337 Flow
- References: cedefi-gateway-architecture, zk-kyc
- Backlinks: course-cedefi

## Entity: amm-mechanics
- Title: Automated Market Makers (AMM)
- Category: DeFi
- Language: en
- Key Concepts: Concentrated Liquidity, Liquidity Pool, Impermanent Loss, Price Oracles, AMM as an Oracle, Complexity, Visualization: The Bonding Curve, Oracle Manipulation Attacks, Impermanent Loss (IL), Automated Market Makers (AMM), Concentrated Liquidity (Uniswap V3), The Constant Product Formula (Uniswap V2), Efficiency, Related Topics, Constant Product Market Maker (CPMM)
- References: optimal-execution, smart-order-routing
- Backlinks: asset-tokenization, cedefi-mechanics, course-cedefi, liquid-staking-restaking, mev, stablecoin-mechanisms

## Entity: bridge-security
- Title: Bridge Security and Settlement Finality
- Category: DeFi
- Language: en
- Key Concepts: Bridges, Mints, CeDeFi, Probabilistic Finality, Rate Limiting, Blockchain Reorg, Locks, 3. The Finality Problem, The Attack Scenario, Instant Finality, B. Trustless (Decentralized) Bridges, Safety Buffer, Related Topics, Hash Time-Lock Contracts (HTLC), Pros
- References: asset-tokenization, cedefi-gateway-architecture, stablecoin-mechanisms
- Backlinks: cedefi-gateway-architecture, cross-chain-interop

## Entity: cedefi-gateway-architecture
- Title: CeDeFi Gateway Architecture
- Category: DeFi
- Language: en
- Key Concepts: Cold Storage Interaction, Global Pause, Visualization: The "Double-Check" Architecture, 4. Operational Resilience: Circuit Breakers, 1. The Transaction Management Layer (Relayer), B. Dynamic Gas Strategies, 3. Custody Architecture: MPC vs. Multi-sig, Drift Detection, CeDeFi Gateway, The Solution, Nonce Queue, Event Logs, Reconciliation Engine, Double Spend Protection, Related Topics
- References: bridge-security, cedefi-mechanics, zk-kyc
- Backlinks: account-abstraction, bridge-security, contract-upgradeability, course-cedefi, cross-chain-interop, number-theory-basics, oracle-design, privacy-defi, zk-kyc

## Entity: cedefi-mechanics
- Title: CeDeFi: Centralized Decentralized Finance
- Category: DeFi
- Language: en
- Key Concepts: Transaction Limits, CeFi Constraint, Centralization Risk, CeDeFi, Oracle Vulnerability, Bridges, Low Latency, Bridge Risk, Visualization: The Hybrid Stack, Sanction Screening, 2. Technical Architectures, Permissioned Environments, CeDeFi: The Convergence of Institutional and Decentralized Finance, 1. The Core Paradox, Regional Restrictions
- References: amm-mechanics, smart-order-routing
- Backlinks: asset-tokenization, cedefi-gateway-architecture, course-cedefi, number-theory-basics, onchain-credit, stablecoin-mechanisms

## Entity: cross-chain-interop
- Title: Cross-chain Interoperability Protocols
- Category: DeFi
- Language: en
- Key Concepts: Unified Liquidity, Bridging, Visualization: Omnichain Logic Flow, A. LayerZero: Ultra Light Nodes, Oracle, Cross-chain Interoperability Protocols: Beyond Bridges, Cross-chain Interoperability Protocols, Omnichain Lending, Cross-chain Governance, Solution, Wormhole, Chainlink CCIP, Related Topics, 2. Key Architectures, 4. The "Trust Assumption" Risk
- References: asset-tokenization, bridge-security, cedefi-gateway-architecture, smart-order-routing
- Backlinks: course-cedefi

## Entity: lending-mechanics
- Title: Lending and Money Market Mechanics
- Category: DeFi
- Language: en
- Key Concepts: 5. Implementation for CeDeFi, Liquidation Bonus, Health Factor ($H_f$), Compound, Lenders, Utilization Rate, Kinked Interest Rate Curve, Before the Kink ($U < U_{optimal}$), Visualization: The Kinked Rate Curve, Peer-to-Pool, 2. Interest Rate Models (The Utilization Curve), Liquidation, Related Topics, LTV (Loan-to-Value), After the Kink ($U > U_{optimal}$)
- References: onchain-credit, stablecoin-mechanisms
- Backlinks: course-cedefi, metric-spaces, oracle-design, yield-aggregators

## Entity: liquid-staking-restaking
- Title: Liquid Staking and Restaking
- Category: DeFi
- Language: en
- Key Concepts: Treasury Bills, Lido, Renzo, Visualization: The Yield Pyramid, Productivity, ether.fi, stETH, Restaking, 3. Liquid Restaking Tokens (LRTs), 4. Institutional Implications: The "Internet Bond", Related Topics, EigenLayer, Receipt, Deposit, 2. The EigenLayer Revolution: Restaking
- References: amm-mechanics, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: mev
- Title: Maximal Extractable Value (MEV)
- Category: DeFi
- Language: en
- Key Concepts: Maximal Extractable Value (MEV), Buy, Mempool, Toxic, reordering, 4. Toxic vs. Non-Toxic MEV, 1. The "Dark Forest" Mechanism, 2. The Proposer-Builder Separation (PBS), Sell, Solution, Buys, High-Frequency Trading (HFT) and Front-Running, B. Sandwich Attacks, Related Topics, PBS
- References: amm-mechanics, latency-arbitrage, smart-order-routing
- Backlinks: contract-upgradeability, course-cedefi, oracle-design, privacy-defi

## Entity: onchain-credit
- Title: On-chain Credit Markets
- Category: DeFi
- Language: en
- Key Concepts: Visualization: The Credit Pipeline, 2. The Tranche Structure (Waterfall Model), Efficiency, Senior Tranche (Junior First Loss), Centrifuge, Asset-Backed (RWA), Undercollateralized (Institutional), Pool Delegates, 4. Why it Matters for High-Finance, Overcollateralized, On-chain Credit Markets: Bridging TradFi and DeFi, 3. The Role of Underwriters (Delegates), Related Topics, Junior Tranche (Equity), Composability
- References: asset-tokenization, cedefi-mechanics
- Backlinks: course-cedefi, lending-mechanics, zk-kyc

## Entity: onchain-perps
- Title: On-chain Perpetuals and vAMM Mechanics
- Category: DeFi
- Language: en
- Key Concepts: price movement, Perpetual Protocol, If Perp Price < Spot Price, 2. vAMM (Virtual Automated Market Maker), GLP, 5. Risk for Your Project, If Perp Price > Spot Price, Bad Debt, 3. LP-as-Counterparty Model (GMX Model), 4. Order-book Based DEXs (dYdX Model), Settlement, GMX, Market Makers, Related Topics, 1. Funding Rates: The Peg Mechanism
- References: oracle-design, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: oracle-design
- Title: Oracle Design and Resilience
- Category: DeFi
- Language: en
- Key Concepts: Math, CeDeFi, Oracle, Median, Deviation Threshold, Multi-Oracle Consensus, Scenario, Heartbeat, Logic, Safe Mode, Medianizer, 2. Robust Price Discovery: The Medianizer, 3. Oracle Extractable Value (OEV), Oracle Design and Resilience: Engineering Financial Truth, 1. Triggering Mechanisms: Heartbeat and Deviation
- References: cedefi-gateway-architecture, lending-mechanics, mev
- Backlinks: course-cedefi, onchain-perps

## Entity: privacy-defi
- Title: Privacy-Preserving DeFi (Shielded Pools)
- Category: DeFi
- Language: en
- Key Concepts: Unshielding, Shielded Pools, Confidentiality, Shielding, Institutional Confidentiality, Visualization: The Shielding Process, 4. Risks and Regulatory Pressure, 1. How Shielded Pools Work, Dark Pool, 3. Dark Pools (The Institutional Dream), 5. Value for Your Project, MEV bots, Privacy-Preserving DeFi: The Shielded Economy, Related Topics, Railgun
- References: cedefi-gateway-architecture, mev, zk-kyc
- Backlinks: course-cedefi

## Entity: asset-tokenization
- Title: Real World Asset (RWA) Tokenization
- Category: DeFi
- Language: en
- Key Concepts: atomically, 1. The Architecture of Tokenization, Private Credit, Visualization: The Tokenization Lifecycle, Commodities, A. The Legal Wrapper (SPV), Identity Registry, 4. Risks and the "Off-chain Coupling" Problem, 3. Institutional Use Cases, B. Fractional Ownership, Real World Assets (RWA), BUIDL, Asset Tokenization, B. Standards (ERC-3643 and ERC-1400), Compliance Rules
- References: amm-mechanics, cedefi-mechanics, smart-order-routing
- Backlinks: bridge-security, course-cedefi, cross-chain-interop, onchain-credit, stablecoin-mechanisms, zk-kyc

## Entity: contract-upgradeability
- Title: Smart Contract Upgradeability
- Category: DeFi
- Language: en
- Key Concepts: CeDeFi, 2. Advanced Upgrade Patterns, Security, 3. The Initialization Paradox, Storage Gaps, Visualization: UUPS Architecture, 4. Storage Collisions: The Technical Nightmare, Timelock, Logic, Smart Contract Upgradeability: Patterns, Risks, and Storage Layout, Balance, Upgradeability Patterns, 1. The Mechanics of Delegatecall, cannot use constructors, Multi-sig
- References: cedefi-gateway-architecture, mev
- Backlinks: course-cedefi

## Entity: stablecoin-mechanisms
- Title: Stablecoin Mechanisms
- Category: DeFi
- Language: en
- Key Concepts: Seigniorage (Terra/UST), 3. Algorithmic and Delta-Neutral, Capital Efficiency, Decentralization, The Death Spiral, 2. Crypto-Collateralized (On-chain Overcollateralization), 4. The Stability Trilemma, Risk, Overcollateralized, Liquidated, Short Perpetual position, Related Topics, Stability, Mechanism, Delta-Neutral (Ethena)
- References: amm-mechanics, asset-tokenization, cedefi-mechanics
- Backlinks: bridge-security, combinatorics-induction, course-cedefi, lending-mechanics, liquid-staking-restaking, onchain-perps, yield-aggregators

## Entity: yield-aggregators
- Title: Yield Aggregators and Strategy Automation
- Category: DeFi
- Language: en
- Key Concepts: Vaults, Yield Aggregators and Strategy Automation, 3. Risk Assessment: The Strategy Stack, Curated Strategies, 2. Auto-Compounding Mechanics, Liquidity Risk, Delta-Neutral Staking, Protocol Risk, Compounded APY, Auto-Compounding, Visualization: The Harvest Loop, Related Topics, 1. The Vault Architecture, Yearn Finance, The Controller
- References: lending-mechanics, smart-order-routing, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: zk-kyc
- Title: ZK-KYC: Privacy-Preserving Compliance
- Category: DeFi
- Language: en
- Key Concepts: CeDeFi, Proof of Accreditation, Commitment, Verification, Institutional Access, Proof, Issuer, ZK-Proof Generation, Proof of Residency, 2. Selective Disclosure, Zero-Knowledge Proof, Related Topics, On-chain Verification, Legal Compliance, Visualization: The ZK-KYC Flow
- References: asset-tokenization, cedefi-gateway-architecture, onchain-credit
- Backlinks: account-abstraction, cedefi-gateway-architecture, course-cedefi, privacy-defi

## Entity: course-cedefi
- Title: CeDeFi Engineering: Institutional Web3
- Category: DeFi & Engineering
- Language: en
- Key Concepts: Goal:, Outcomes, Week 4 — Stablecoins, Oracles, MEV, Week 6 — ZK and private KYC, CeDeFi Engineering — institutional Web3 in 8 weeks, fully private, Course map, Capstone project, Week 5 — Smart-contract security, Compliance-yield gateway., Kata:, Week 7 — Cross-chain and bridges, Week 8 — Institutional stack, Week 3 — Lending and risk, Recommended reading
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
- Key Concepts: Risk-Free Rates (RFRs), Visualization: The Basis Spread, SOFR, Liquidity Risk, Why Do Curves Diverge?, CSA and Collateral Discounting, Credit Support Annex (CSA), OIS (Overnight) curve, Multi-Curve Framework (Post-2008 Modern Yield Curves), Credit Risk, Forward (Projection) Curves, The Paradigm Shift, Discounting Curve, Related Topics, Modern Multi-Curve Framework
- References: finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/xva

## Entity: option-greeks-and-volatility
- Title: Option Greeks, Volatility & Hedging
- Category: Derivatives
- Language: en
- Key Concepts: 3. Delta Hedging, Theta ($\Theta$):, Option Greeks, Volatility & Hedging, Vega ($\nu$):, 1. Put-Call Parity, Gamma ($\Gamma$):, See Also, 2. Option Greeks, Delta ($\Delta$):
- References: course-quant-trading, optimal-stopping-and-kelly, quant-market-making-mechanics
- Backlinks: credit-risk-modeling-and-structural-models, exotic-options-and-structured-products, fixed-income-quant-rates-and-yield-curve, interest-rate-derivatives-swaps-caps-floors, monte-carlo-option-pricing-and-variance-reduction, quant-market-making-mechanics, stochastic-calculus-and-ito-lemma, volatility-surface-sabr-model, volatility-trading-and-variance-swaps

## Entity: volatility-arbitrage
- Title: Volatility Arbitrage and Variance Swaps
- Category: Derivatives
- Language: en
- Key Concepts: VIX Index, 1. The Variance Risk Premium (VRP), Variance Risk Premium, Volatility Arbitrage and Variance Swaps, Visualization: The VIX vs. Realized Vol, Log-Contract Replication, 1. Volatility Carry, 2. Dispersion Trading, 3. The VIX Index, forecasted future volatility, implied volatility, 4. Trading Strategies, No Delta Hedging, model-independent, 2. Variance Swaps
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
- Key Concepts: long observation of one system, 2. Time-series econometrics., measure-preserving, If $T$ is ergodic, Birkhoff-Khintchine theorem, 1. Statistical mechanics., much stronger, Ergodicity., 3. Circle rotation., Connection to information and [[shannon-entropy|entropy]], 2. Markov chain with a unique stationary measure., Proof (via the maximal theorem), invariant, ergodic theory, 4. Gases in statistical mechanics.
- References: arch-models, brownian-motion, central-limit-theorem, finance/shannon-entropy, garch-models, law-iterated-logarithm, math/discrete-markov-chains, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/stochastic-recursive-sequences
- Backlinks: math/borel-cantelli-zero-one, math/branching-processes, math/coupling-methods, math/discrete-markov-chains, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/law-of-large-numbers, math/markov-chain-mixing, math/martingale-clt, math/percolation, math/renewal-theory, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, statistical-mechanics

## Entity: math/discrete-markov-chains
- Title: Discrete Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Communicating states., communicate, Distribution after $n$ steps., 2. MCMC (Markov Chain Monte Carlo)., Ergodic theorem for chains, Markov chain, 5. Classical physics and chemistry., positive recurrent, Definition., aperiodic, transient, invariant, Aperiodicity, recurrent, 1. PageRank.
- References: brownian-motion, finance/crr-model, hidden-markov-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, reinforcement-learning
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, math/branching-processes, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/geometric-ergodicity, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/markov-chain-mixing, math/optimal-stopping-markov, math/renewal-theory, math/stochastic-recursive-sequences, random-walks-groups, stochastic-processes

## Entity: math/kolmogorov-equations-ctmc
- Title: Kolmogorov Equations and Continuous-Time Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Setup and the Q-matrix, generator, Foster-Lyapunov criteria, transition semigroup, Q-matrix, backward equation, terminal, Markov property, Stationary distribution and detailed balance, M/M/1 queue, Kolmogorov's forward and backward equations, stationary, boundary condition, Birth-death processes, minimal
- References: brownian-motion, finance/levy-processes, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms, math/spectral-theory-operators
- Backlinks: fokker-planck-equation, math/discrete-markov-chains, math/point-processes, math/subordinators, stochastic-processes

## Entity: math/spectral-representation-processes
- Title: Spectral Representation of Stationary Processes
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Wold's theorem., Link to Wiener-Khintchine, Kolmogorov-Wiener forecasting, Differencing, 3. Wavelets., 4. Speech and image processing., process itself, Theorem (Cramer, 1940; Kolmogorov)., Spectral Representation of Stationary Processes, purely non-deterministic, uncorrelated, autocovariance, Lag, Definition., Linear transformations
- References: brownian-motion, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/stationary-wide-spectral, wavelet-transform
- Backlinks: math/spectral-theory-operators, math/stationary-wide-spectral

## Entity: math/stochastic-recursive-sequences
- Title: Stochastic Recursive Sequences
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: top Lyapunov exponent, contractive, Theorem (Loynes, 1962)., coupling events, Finance beyond GARCH., Definition., The linear case: products of random matrices, The GARCH connection, stability, heavy (Pareto) tails, Applications, Borovkov's renovation approach, Autoregressive processes., Lindley recursion, Stochastic Recursive Sequences
- References: arch-models, brownian-motion, finance/levy-processes, garch-models, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/law-of-large-numbers
- Backlinks: math/ergodic-theorems-birkhoff, math/geometric-ergodicity

## Entity: math/stationary-wide-spectral
- Title: Wide-Sense Stationary Processes and Spectral Density
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: squared, autocovariance function, Symmetry, Wiener-Khintchine theorem, Herglotz's theorem., right language, Herglotz-Bochner decomposition, Wide-Sense Stationary Processes and Spectral Density, 3. Harmonic component., Definition., Spectral density, spectral density, which frequencies are present, 3. Periodogram and test for periodicity., 1. White noise.
- References: brownian-motion, characteristic-functions, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/self-similarity-fractality, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/spectral-representation-processes
- Backlinks: math/spectral-representation-processes, ornstein-uhlenbeck, stochastic-processes

## Entity: conditionally-gaussian-processes
- Title: Conditionally Gaussian Processes
- Category: Filtering Theory
- Language: en
- Key Concepts: Target tracking with range-dependent noise., Multivariate Extensions, Proof Sketch, Reference measure., The Filtering Equations, Definition., linear in $\theta$, Comparison with Kalman-Bucy, matrix Riccati equation, Conditionally Gaussian Processes, Stochastic volatility filtering., Credit risk with latent state., Theorem (Liptser-Shiryaev)., Absolute continuity., The Conditionally Gaussian Model
- References: finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, math/doleans-dade-exponential, nonlinear-filtering, stochastic-differential-equations
- Backlinks: innovation-process, nonlinear-filtering

## Entity: innovation-process
- Title: Innovation Process
- Category: Filtering Theory
- Language: en
- Key Concepts: Innovation Process, Kushner-Stratonovich equation, Example: Scalar Linear Model, Causal vs. Non-Causal Estimation, Prediction, innovation process, integral representation, reference measure, Likelihood computation., The Innovation Approach to Filtering, Definition and Basic Properties, Whitening Interpretation, Applications, Smoothing, Connection to Girsanov's Theorem
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, kalman-filter, math/conditional-expectation-sigma, math/discrete-martingales, nonlinear-filtering
- Backlinks: conditionally-gaussian-processes, math/absolute-continuity-process-measures, math/martingale-representation, nonlinear-filtering

## Entity: nonlinear-filtering
- Title: Nonlinear Filtering
- Category: Filtering Theory
- Language: en
- Key Concepts: unnormalized, Proof Architecture, Reference measure method., Nonlinear Filtering, Kushner-Stratonovich (KS) equation, Theorem (Benes-Hazewinkel-Marcus)., Why Nonlinear Filtering is Hard, Target tracking and navigation., curse of dimensionality, The Partially Observed System, Projection filters., Zakai equation, Extended Kalman filter (EKF)., Spectral methods., observation process
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, manifold-learning, math/doleans-dade-exponential, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, innovation-process, math/absolute-continuity-process-measures, math/martingale-representation, state-space-models, stochastic-control-partial-info, stochastic-differential-equations

## Entity: bayesian-networks
- Title: Bayesian Networks
- Category: Foundations
- Language: en
- Key Concepts: Directed Acyclic Graph (DAG), Nodes, Fork, Learning, Edges, Variable Elimination, The DAG Structure, Inference, Chain, Acyclicity, dependent, Inference and Learning, Visualization: A Simple Network, Collider (V-structure), Related Topics
- References: bayes-theorem, causal-inference, hmm
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, graph-theory-basics

## Entity: category-theory
- Title: Category Theory
- Category: Foundations
- Language: en
- Key Concepts: 4. The Yoneda Lemma: Identity via Relationships, Distributed Representations, 2. Functors: Moving Between Worlds, Morphisms (Arrows), 3. Natural Transformations, Categorical Quantum Mechanics, Functor, Visualization: The Hierarchy of Abstraction, Haskell, Category Theory: The Mathematics of Mathematics, Objects, Related Topics, Quantum Physics, Natural Transformations, 1. Objects and Morphisms
- References: homological-algebra, topos-theory, type-theory
- Backlinks: homological-algebra, homotopy-type-theory, math/algebraic-topology, topos-theory, type-theory

## Entity: probability-paradoxes
- Title: Classic Paradoxes in Probability
- Category: Foundations
- Language: en
- Key Concepts: Visualization: Simpson's Reversal, Intuition, 3. The Birthday Paradox, Lesson, confounding variables, no holes, 1. Simpson's Paradox, Reality, Abraham Wald, 2. Berkson's Paradox (Selection Bias), 4. Survivor Bias, Related Topics, Classic Paradoxes in Probability and Statistics, Example
- References: bayes-theorem, causal-inference, hypothesis-testing

## Entity: convex-optimization
- Title: Convex Optimization
- Category: Foundations
- Language: en
- Key Concepts: Convex Sets and Functions, Dual feasibility:, subdifferential, Weak duality, Primal feasibility:, Proximal Operator, Complementary slackness:, Gradient Descent, ADMM, epigraph, Algorithms, Strongly Convex Smooth:, conjugate function, First-order optimality condition:, Gradient Descent (convex, smooth):
- References: math/information-theory, math/m-estimators, math/variational-calculus, stochastic-control
- Backlinks: 3d-gaussian-splatting, ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, attention-kernel, automatic-differentiation, convex-analysis, convexity, course-math-for-ai, deep-galerkin, differential-privacy, energy-based-models, ergodic-theory-sgd, fine-tuning, fisher-information, fluid-dynamics-navier-stokes, geometric-mechanics-lie-groups, geometry-loss-landscapes, gradient-hessian-jacobian, information-bottleneck-theory, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lagrange-multipliers, linear-algebra, linear-systems-gauss, logistic-regression, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/interacting-particle-systems, math/large-deviations-cramer, math/martingale-clt, math/ode-stability, meta-learning, model-merging-procrustes, multimodal-alignment-clip, multivariable-calculus, neural-operators-fno, normalization-layers-math, ntk, online-learning-regret, optimal-transport-gromov-wasserstein, optimization-basics, pinns-convergence, proximal-algorithms-admm, qft-curved-spacetime, regularization-implicit-bias, sgd-convergence-theory, sgd-variants, stochastic-calculus-manifolds, string-theory-calabi-yau, symplectic-hamiltonian-nn, training-dynamics, ttt-layers, vae-elbo, variational-autoencoders, variational-inference, variational-inference-math

## Entity: eigenvalues-eigenvectors
- Title: Eigenvalues and Eigenvectors
- Category: Foundations
- Language: en
- Key Concepts: Eigendecomposition, The Characteristic Equation, In AI, Singular Values, model compression, Neural Stability, Portfolio Risk, Determinant, [[spectral-theory-operators|Eigenvalues]] and Eigenvectors: The DNA of Linear Logic, Normal Modes, SVD, eigenvector, Physical Intuition, Related Topics, Market Factor
- References: finance/random-matrix-theory, linear-spaces-basis, math/discrete-markov-chains, math/spectral-theory-operators, pca
- Backlinks: cross-impact, laplacian, linear-spaces-basis, linear-systems-gauss, matrix-decompositions, nonlinear-shrinkage, vector-spaces-orthogonality

## Entity: math/functional-analysis
- Title: Functional Analysis
- Category: Foundations
- Language: en
- Key Concepts: Spectral Theorem:, Functional Analysis, Stability Analysis:, Kernel Trick:, Reproducing Kernel Hilbert Spaces (RKHS):, projection, Banach Spaces:, Related Topics, Eigenfunctions:, orthogonality, Normed Spaces:, Core Spaces, Operators and Spectrum, Hilbert Spaces ($\mathcal{H}$):, Applications in Machine Learning
- References: hilbert-banach-spaces, linear-algebra, math/spectral-theory-operators, quantum-mechanics

## Entity: graph-theory
- Title: Graph Theory
- Category: Foundations
- Language: en
- Key Concepts: Directed Acyclic Graph (DAG), connected, Weighted Graph, Formal Definition, Spectral Graph Theory, Four Color Theorem, strongly connected, Connectivity, Fundamental Concepts, Graph Theory, in-degree, Path and Cycle, Important Theorems, Undirected Graph, Overview
- References: finance/systemic-contagion-debtrank, graph-neural-networks, knowledge-graph, linear-algebra, math/spectral-theory-operators, spectral-graph-theory
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, kuramoto-model, linear-algebra, logic-set-theory

## Entity: homological-algebra
- Title: Homological Algebra
- Category: Foundations
- Language: en
- Key Concepts: chain complex, extensions, Category Theory, Related Topics, $n$-th homology group, Theoretical Physics, Applications, Abelian Categories, Visualization: Long Exact Sequence, Derived Functors: Ext and Tor, Homological Algebra, 2. Ext (Extension), Homology Groups, The Snake Lemma, Chain Complexes
- References: category-theory, hodge-theory, math/algebraic-topology, quantization
- Backlinks: category-theory, topos-theory, tor-ext-functors

## Entity: jensens-inequality
- Title: Jensen's Inequality
- Category: Foundations
- Language: en
- Key Concepts: above, Evidence Lower Bound (ELBO), Concave Case, B. Variational Inference and VAEs, Finite Version, 4. Generalizations, Related Topics, Deep Learning, 2. Geometric Intuition, Convex Case, Jensen's Inequality: The Geometry of Averages, C. Finance: The Volatility Tax, Information Theory, Integral Version, 1. The Mathematical Statement
- References: convexity, finance/shannon-entropy, variational-autoencoders
- Backlinks: f-divergences

## Entity: linear-algebra
- Title: Linear Algebra
- Category: Foundations
- Language: en
- Key Concepts: Linear Algebra, Inverse ($A^{-1}$), Weights, Fundamental Objects, Low-rank approximations, Determinant, linearly independent, Overview, eigenvector, basis, Related Topics, Determinant and Inverse, Vectors, linear transformation, Optimization
- References: attention-mechanisms, automatic-differentiation, convex-optimization, graph-theory, manifold-learning, math/spectral-theory-operators, quantization, spectral-graph-theory, transformer-architecture
- Backlinks: graph-theory, language-models/mamba-ssm, math/functional-analysis

## Entity: quantum-math
- Title: Math of Quantum Computing
- Category: Foundations
- Language: en
- Key Concepts: Linear Algebra, Superposition, Schmidt Rank, Entanglement, 5. Key Quantum Algorithms, tensor product, Unitary Matrix, Reversibility, 3. Unitary Operators (Quantum Gates), Visualization: The Bloch Sphere, 4. Measurement as Projection, Hadamard Gate ($H$), Related Topics, Born Rule, The Mathematics of Quantum Computing
- References: hilbert-banach-spaces, quantum-amplitude-estimation, quantum-information-entropy, spectral-theorem-unbounded
- Backlinks: hilbert-banach-spaces, path-integral-control, quantum-amplitude-estimation

## Entity: decision-theory
- Title: Statistical Decision Theory
- Category: Foundations
- Language: en
- Key Concepts: Classification, A. Bayes Criterion (The Average Case), Utility Theory, 3. Optimal Strategies, Risk Function, Admissible, Visualization: Bayes vs. Minimax, Bellman Equation, Bayesian Inference, Action Space ($\mathcal{A}$), Adversarial Machine Learning, Reinforcement Learning, Robust Control, Parameter Space ($\Theta$), The Admissibility Crisis
- References: bayesian-inference, finance/shannon-entropy, reinforcement-learning
- Backlinks: naive-bayes

## Entity: tensor-decompositions
- Title: Tensor Decompositions
- Category: Foundations
- Language: en
- Key Concepts: 5. Why it Matters for AI Infrastructure, Tensor Decompositions, Large Language Models, Visualization: CP vs. Tucker, Core Tensor, rank-1 tensors, 2. CP Decomposition (CANDECOMP/PARAFAC), Reducing FLOPs, 1. The Core Problem: Rank of a Tensor, Related Topics, 3. Tucker Decomposition (Higher-Order SVD), Tensors, Interpretation, NP-hard, Application
- References: distributed-training, many-body-tensor-networks, modern-quantization, pca
- Backlinks: course-math-for-ai, lora-peft

## Entity: maximum-entropy
- Title: The Maximum Entropy Principle
- Category: Foundations
- Language: en
- Key Concepts: Logistic regression, stretched exponentials, close to the prior, inverse temperature, power laws, m-flat, fat-tailed distributions, 2. Solution by Lagrange multipliers, convex dual, 6. Statistical mechanics: Boltzmann from MaxEnt, 12. Related topics, MaxEnt RL, 11. Visualisation: entropy decreases with constraints, 4. The MaxEnt zoo, 1. Formal statement
- References: bayesian-inference, exponential-families, finance/shannon-entropy, fisher-information, manifold-learning, math/analysis-geometry/information-geometry, math/information-theory, mle, statistical-mechanics
- Backlinks: course-math-for-ai, distributions-zoo, entropy-information, information-theory-basics

## Entity: topos-theory
- Title: Topos Theory
- Category: Foundations
- Language: en
- Key Concepts: Independence Proofs, Visualization: Truth Value Spectrum, Alexandre Grothendieck, Why It Matters for AI and Physics, Holography, Sheaves, Related Topics, 1. As a Generalized Space (Grothendieck), Finite Limits and Colimits, Topos Theory, Subobject Classifier ($\Omega$), Synthetic Differential Geometry, Etale Cohomology, Intuitionistic Logic, Two Views of a Topos
- References: category-theory, homological-algebra, math/algebraic-topology
- Backlinks: category-theory, category-theory-ml, type-theory

## Entity: type-theory
- Title: Type Theory and Formal Logic
- Category: Foundations
- Language: en
- Key Concepts: Propositions are Types, 1. The Curry-Howard Correspondence, Simplification is Computation, Neuro-symbolic AI, Type, Visualization: The Proof-Program Ladder, AI for Math, Agda, Lean, Programs, Univalence Axiom, Dependent types, Proofs are Programs, Related Topics, spaces
- References: category-theory, reasoning-models, topos-theory
- Backlinks: category-theory, category-theory-ml, homotopy-type-theory

## Entity: math/variational-calculus
- Title: Variational Calculus
- Category: Foundations
- Language: en
- Key Concepts: Angular Momentum, Brachistochrone:, Classical Examples, Euler–Lagrange Equation, ELBO, Variational Principles in AI, Momentum, Action, Lagrangian, Related Topics, functionals, Geodesics:, symmetries to conservation laws, Noether's Theorem, Energy
- References: lagrangian-mechanics, noether-theorem, variational-inference
- Backlinks: ai-physics/hamiltonian-nn, convex-optimization, math/differential-geometry, math/ode-stability

## Entity: math/cantor-diagonal
- Title: Cantor's Diagonal Argument
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: [[kolmogorov-complexity|Kolmogorov complexity]], independent, Python Demonstration, Turing's halting problem, Continuum Hypothesis, Self-reference in [[chain-of-thought|chain-of-thought reasoning]], uncountable, [[godel-incompleteness|Gödel's incompleteness theorems]], Diagonalization beyond set theory, Cardinal Numbers, Countability, countable, Cantor's Diagonal Argument, Cantor's theorem, Cantor's diagonal argument
- References: chain-of-thought, kolmogorov-complexity, llm, math/banach-tarski, math/godel-incompleteness
- Backlinks: chain-of-thought, math/banach-tarski, math/godel-incompleteness

## Entity: math/godel-incompleteness
- Title: Gödel's Incompleteness Theorems
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: true but unprovable, "I am unprovable in $T$", The Gödel Sentence, First Incompleteness Theorem, halting problem, incomplete, Consequences, Diagonalization lemma, [[kolmogorov-complexity|Kolmogorov complexity]], Python Demonstration, Gödel's Incompleteness Theorems, cannot prove its own consistency, Second Incompleteness Theorem, Connection to computability and AI, Gödel's incompleteness theorems
- References: chain-of-thought, information-paradox, kolmogorov-complexity, llm, math/banach-tarski, math/cantor-diagonal, mechanistic-interpretability, transformer-architecture
- Backlinks: chain-of-thought, homotopy-type-theory, math/banach-tarski, math/cantor-diagonal, math/kolmogorov-probability-axioms, math/non-euclidean-geometry

## Entity: math/non-euclidean-geometry
- Title: Non-Euclidean Geometry
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Non-Euclidean Geometry, exactly one, Metric, Non-Euclidean geometry, Three Geometries, Gaussian Curvature, Geodesics, Gauss's Theorema Egregium, fifth postulate, Poincaré Disk Model, [[general-relativity|general relativity]], The Parallel Postulate, Connection to Physics, Related Articles
- References: asymptotic-spacetime, bms-group, celestial-holography, general-relativity, gravitational-waves-gr, manifold-learning, math/banach-tarski, math/godel-incompleteness
- Backlinks: math/algebraic-topology, math/banach-tarski, math/differential-geometry

## Entity: math/banach-tarski
- Title: The Banach-Tarski Paradox
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Proof Sketch, The Banach-Tarski Paradox, measure theory and symmetry transformations break down at the quantum level, Banach-Tarski paradox, Echoes in physics, without, Why This Is Not a Contradiction, two copies of itself, Axiom of Choice, non-measurable sets, all subsets of $\mathbb{R}$ are Lebesgue measurable, 1. Free Group on Two Generators, two balls of the same size, 3. Axiom of Choice, The Role of the Axiom of Choice
- References: anomalies, math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry
- Backlinks: math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry

## Entity: operator-semigroups
- Title: Operator Semigroups
- Category: Functional Analysis
- Language: en
- Key Concepts: Operator Semigroups: The Math of Evolution, spectral properties, Generator, Markov Processes, Neural ODEs, 3. Physical Examples, Visualization: Smoothing Effect, Semigroup Property, Identity, Heat Equation, 4. Contractive Semigroups and Stability, time-domain behavior, Schrödinger Equation, 2. The Infinitesimal Generator ($A$), Contractive
- References: feller-processes, laplacian, neural-odes, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: dirichlet-forms, feller-processes, spectral-theorem-unbounded

## Entity: schwartz-distributions
- Title: Schwartz Distributions
- Category: Functional Analysis
- Language: en
- Key Concepts: Partial Differential Equations (PDEs), Test Functions, Fundamental Solution, 2. Weak Derivatives: Differentiating the Non-Differentiable, 3. The Fourier Transform of Distributions, Visualization: Derivative of a Step, Convolution, Fourier Transform, Schwartz Distributions: Generalized Functions, Schwartz Space, 4. Fundamental Solutions (Green's Functions), every distribution has a derivative, Tempered Distributions, Dirac Delta, Schwartz Distributions
- References: deep-galerkin, fourier-transform, laplacian, partial-differential-equations, spectral-graph-theory
- Backlinks: gff, microlocal-analysis

## Entity: sobolev-spaces
- Title: Sobolev Spaces & Weak Solutions
- Category: Functional Analysis
- Language: en
- Key Concepts: Sobolev Spaces $W^{k,p}$, Sobolev Embeddings, Sobolev Spaces & Weak Solutions, Rellich-Kondrachov Theorem, Physics-Informed Neural Networks (PINNs), Weak Derivatives
- Backlinks: deep-ritz-method, hilbert-banach-spaces, math/harmonic-analysis, math/lp-spaces, math/nonparametric-regression, math/spectral-theory-operators, math/topology-basics

## Entity: spectral-theorem-unbounded
- Title: Spectral Theorem for Unbounded Operators
- Category: Functional Analysis
- Language: en
- Key Concepts: Functional Calculus, Spectral Measure, Quantum Mechanics, Stochastic PDEs, Kernel Methods, Self-Adjointness, Why It Matters in Physics and AI, Visualization: Discrete vs. Continuous Spectrum, Schrödinger equation, Stable Processes, Self-Adjointness: The Key Requirement, Spectral Theorem for Unbounded Operators, Related Topics, The Spectral Decomposition, unbounded
- References: functional-analysis, math/spectral-theory-operators, operator-semigroups, spectral-graph-theory
- Backlinks: laplacian, operator-semigroups, quantum-math

## Entity: bayes-theorem
- Title: Bayes' Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: Base Rate Fallacy, $P(B)$ (Evidence):, $P(A)$ (Prior):, Bayesian Neural Networks:, Applications in AI, Naive Bayes Classifier:, Logical Pitfalls, The Formula, Related Topics, uncertainty, Variational Autoencoders (VAE):, $P(A|B)$ (Posterior):, Bayesian Inference:, $P(B|A)$ (Likelihood):, Bayes' Theorem
- References: naive-bayes, prm, variational-inference
- Backlinks: bayesian-networks, conditional-probability, map-estimation, probability-distributions, probability-paradoxes, statistical-inference

## Entity: combinatorics-induction
- Title: Combinatorics and Mathematical Induction
- Category: Fundamentals
- Language: en
- Key Concepts: Binomial Distribution, Mathematical Induction, Combinations ($C_n^k$), Inductive Step, Pascal's Triangle, not, 2. Binomial Theorem, Intuition: The Domino Effect, Base Case, Related Topics, Probability in Deep Learning, Hash Functions, 5. Pigeonhole Principle, Combinatorics and Induction: The Tools of Counting and Proving, Hardware Design
- References: lln-clt, stablecoin-mechanisms
- Backlinks: number-theory-basics

## Entity: lagrange-multipliers
- Title: Constrained Optimization and Lagrange Multipliers
- Category: Fundamentals
- Language: en
- Key Concepts: 1. The Core Problem, 3. The Lagrangian Function ($\mathcal{L}$), Lagrange Multiplier, 4. Why it Matters in AI and Physics, Support Vectors, 2. Geometric Intuition, B. Classical Mechanics, Euler-Lagrange equations, Related Topics, Action, Karush-Kuhn-Tucker (KKT), Constrained Optimization: The Method of Lagrange Multipliers, C. Advanced: KKT Conditions, A. Support Vector Machines (SVMs), Lagrange Multipliers
- References: ai-physics/hamiltonian-nn, convex-optimization, convex-optimization-trading, multivariable-calculus
- Backlinks: course-math-for-ai, linear-programming

## Entity: convexity
- Title: Convexity
- Category: Fundamentals
- Language: en
- Key Concepts: A. Convex Sets, exponentially fast, In AI, Non-Convex, local minimum is the global minimum, B. Portfolio Optimization, ELBO, 4. Jensen's Inequality, Strong Convexity, Positive Semi-Definite, 1. Mathematical Rigor, B. Convex Functions, Convexity: The Safety Net of Optimization, Related Topics, 3. Applications
- References: convex-optimization, convex-optimization-trading, gradient-hessian-jacobian, martingale-optimal-transport, variational-autoencoders
- Backlinks: course-math-for-ai, fixed-point-theorems, jensen-inequality, jensens-inequality, logistic-regression, martingale-optimal-transport

## Entity: differential-equations
- Title: Differential Equations: The Laws of Change
- Category: Fundamentals
- Language: en
- Key Concepts: First Order, Euler methods, Decay, 1. Ordinary Differential Equations (ODEs), Wave Equation, Numerical, Harmonic Oscillator, Second Order, Heat Equation, 5. Why it Matters in AI and Finance, PDE, ODE, 3. Linearity and Superposition, Related Topics, A. Neural ODEs
- References: automatic-differentiation, geometric-brownian-motion, ricci-flow, stochastic-differential-equations

## Entity: fourier-transform
- Title: Fourier Transform
- Category: Fundamentals
- Language: en
- Key Concepts: Uncertainty Principle, 4. Key Properties, Positional Encodings, 5. Why it Matters in AI and Science, Visualization: From Time to Frequency, Parseval's Theorem, Inverse Transform, 2. The Fourier Transform (Continuous Case), Intuition, Fast Fourier Transform (FFT), 3. Discrete and Fast Transform (FFT), 1. Fourier Series (Periodic Signals), Fourier Neural Operators (FNO), Discrete Fourier Transform (DFT), Related Topics
- References: finance/spectral-analysis, spectral-graph-theory
- Backlinks: characteristic-functions, complex-analysis, finance/dft, finance/fft, finance/prony-hankel-spectral, mgf, mgf-characteristic-functions, occupation-measures-local-times, schwartz-distributions

## Entity: gradient-hessian-jacobian
- Title: Gradient, Hessian, and Jacobian
- Category: Fundamentals
- Language: en
- Key Concepts: 1. The Gradient ($\nabla f$) - The Compass, In AI, Hessian-Free & K-FAC, Linearization, Visualization: Landscape Analysis, 4. Advanced Optimization: Beyond SGD, 2. The Jacobian ($J$) - The Linearizer, Saddle Point, Related Topics, Geometric Meaning, Deep Learning, Optimization, vector-valued, [[automatic-differentiation|Backpropagation]], Jacobian-Vector Products (JVP)
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, laplacian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, change-of-variables, convexity, course-math-for-ai, laplacian, optimization-basics, qat

## Entity: hilbert-banach-spaces
- Title: Hilbert and Banach Spaces
- Category: Fundamentals
- Language: en
- Key Concepts: Compact:, Closed graph theorem, 1. Normed space, 7. Compactness and weak convergence, Key Hilbert spaces, Moore-Aronszajn theorem., reproducing kernel, Self-adjoint:, Fourier expansion., reflexive, Definition., Riesz-Fréchet theorem., 11. Visualisation, 12. Related topics, Open mapping theorem
- References: functional-analysis, gaussian-processes, kernel-methods-rkhs, math/lp-spaces, math/spectral-theory-operators, quantum-math, sobolev-spaces
- Backlinks: course-math-for-ai, fixed-point-theorems, math/functional-analysis, quantum-math

## Entity: calculus-integration
- Title: Integration and the Fundamental Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: Probability Density Function (PDF), Part 1, 4. Why it Matters in Science, Intuition, Integration by Parts, B. Physics: Work and Energy, Related Topics, Visualization: Accumulation, Integration and the Fundamental Theorem of Calculus, A. Probability and AI, 5. Beyond Riemann: Lebesgue Integration, 2. The Fundamental Theorem of Calculus (FTC), 3. Techniques of Integration, 1. The Definite Integral (Riemann Sum), Part 2
- References: measure-theory, taylor-series
- Backlinks: neural-radiance-fields-math

## Entity: lln-clt
- Title: LLN and CLT: The Pillars of Statistics
- Category: Fundamentals
- Language: en
- Key Concepts: Hypothesis Testing, 3. Why the CLT is the "Magic" of the Universe, Intuition: The Casino's Edge, Weak LLN, Visualization: Convergence to Normal, Error Modeling, Normal Distribution, Law of Large Numbers (LLN), Lognormal, sum, Power Laws, LLN and CLT: Why Probability Works, Related Topics, $n \geq 30$, Finance
- References: black-scholes, finance/black-swan-scenarios, finance/monte-carlo-method
- Backlinks: combinatorics-induction, course-math-for-ai, delta-method, discrete-random-variables, fundamental-inequalities, law-iterated-logarithm, probability-distributions, sequences-series-convergence

## Entity: laplacian
- Title: Laplacian Operator
- Category: Fundamentals
- Language: en
- Key Concepts: Laplace Equation, equilibrium, diffusion, and smoothness, 4. Relationship to the Hessian, Dirichlet Energy, into, Graph Laplacian, Heat Equation, Spectral Bias in Neural Networks, The Discrete [[spectral-graph-theory|Laplacian]] (Graphs), Diffusion Models, The [[spectral-graph-theory|Laplacian]] Operator ($\Delta$), Related Topics, Harmonic Functions, A. The Diffusion Engine, 1. Mathematical Definition
- References: diffusion-models, eigenvalues-eigenvectors, finance/shannon-entropy, gradient-hessian-jacobian, graph-neural-networks, math/spectral-theory-operators, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: course-math-for-ai, equivariant-diffusion-models, gff, gradient-hessian-jacobian, operator-semigroups, schwartz-distributions

## Entity: linear-programming
- Title: Linear Programming and Duality
- Category: Fundamentals
- Language: en
- Key Concepts: Simplex Algorithm, B. Portfolio Optimization, Intuition, 3. Duality: The Hidden Logic, Strong Duality Theorem, Visualization: The Feasible Region, Convex Polytope, Linear Programming: The Science of Resource Allocation, 1. The Standard Form, Related Topics, 4. Why it Matters in AI and Finance, C. Large-Scale Logistics, Shadow Prices, Linear Programming (LP), A. Optimal Transport
- References: convex-optimization-trading, lagrange-multipliers, optimal-transport
- Backlinks: course-math-for-ai

## Entity: linear-spaces-basis
- Title: Linear Spaces, Basis, and Dimension
- Category: Fundamentals
- Language: en
- Key Concepts: 2. Linear Independence and Span, Span, Distributivity, Dimension, Linear Independence, Linear Transformation, Commutativity, 1. Defining a Linear Space ($V$), The Rank-Nullity Theorem, Fourier Transforms, 3. Basis and Dimension, Basis, Existence of Zero, Related Topics, Linear Combination
- References: eigenvalues-eigenvectors, quantum-entanglement, quantum-information-entropy, tensor-calculus
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, linear-systems-gauss, taylor-series

## Entity: linear-systems-gauss
- Title: Linear Systems and Gaussian Elimination
- Category: Fundamentals
- Language: en
- Key Concepts: Forward Elimination, B. Finite Element Method (FEM), 4. Why it Matters in the Digital Age, 2. Gaussian Elimination, C. Large Language Models (LLMs), 5. Computational Complexity, Row Echelon Form (REF), No Solution (Inconsistent), Iterative Methods, Infinitely Many Solutions, Multiplying, System of Linear Equations (SLE), Back Substitution, Swapping, 1. Matrix Representation
- References: convex-optimization, eigenvalues-eigenvectors, linear-spaces-basis
- Backlinks: course-math-for-ai

## Entity: manifold
- Title: Manifold
- Category: Fundamentals
- Language: en
- Key Concepts: [[manifold-learning|Manifold]]: The Geometry of Data and Spacetime, Real-world high-dimensional data is not spread uniformly across space., Charts, Riemannian [[convex-optimization|Gradient Descent]], [[manifold-learning|Manifold]] Hypothesis, low-dimensional manifold, Related Topics, 4. Types of Manifolds in Wiki, 3. Riemannian Manifolds: Measuring Distance, Curvature, Atlas, Differentiable Manifold, Geodesics, 1. The Intuition: Atlas and Charts, Neural Networks as Coordinate Seekers
- References: complex-manifolds, convex-optimization, general-relativity, manifold-learning, math/differential-geometry, math/topology-basics, symplectic-geometry, variational-autoencoders
- Backlinks: course-math-for-ai, information-geometry-finance

## Entity: martingale
- Title: Martingale
- Category: Fundamentals
- Language: en
- Key Concepts: Risk-Neutral Valuation, 1. Definition, Supermartingale, Visualization: The Expectations, Adaptation, Efficient Market Hypothesis, Integrability, Related Topics, Convergence of Algorithms, The Fair Property, 4. Why Tier-1 Quants Care, Martingale Optimal Transport (MOT), Submartingale, B. Doob-Meyer Decomposition, 3. Fundamental Theorems
- References: brownian-motion, feller-processes, finance/shannon-entropy, martingale-optimal-transport, risk-neutral-valuation
- Backlinks: course-math-for-ai, martingale-optimal-transport, measure-theory

## Entity: measure-theory
- Title: Measure Theory Basics
- Category: Fundamentals
- Language: en
- Key Concepts: 1. What is a Measure ($\mu$)?, Radon-Nikodym Derivative, B. The Lebesgue Integral, Measure Theory Basics: The Foundation of Probability, Continuous-time Martingales, Expected Shortfall (ES), Detailed Sections, Likelihood Ratio, Countable Additivity, Stochastic Discount Factor, 2. Key Concepts, Null empty set, Related Topics, Non-negativity, A. Sigma-Algebras ($\mathcal{F}$)
- References: frtb-es, martingale, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: axiomatic-probability, bayesian-inference, calculus-integration, continuous-random-variables, course-math-for-ai, dirichlet-forms, markov-chebyshev

## Entity: metric-spaces
- Title: Metric Spaces and Topology
- Category: Fundamentals
- Language: en
- Key Concepts: 4. Why it Matters in AI and Data Science, Symmetry, Identity of Indiscernibles, 1. What is a Metric?, Embedding Spaces, [[manifold-learning|Manifold]] Learning, Metric Spaces, Triangle Inequality, Compact, 2. Topology: Geometry without Measuring, Related Topics, Non-negativity, [[manifold-learning|Manifold]], Open Sets, 3. Key Concepts
- References: ai-theory/adversarial-examples, lending-mechanics, manifold-learning, optimal-transport

## Entity: multivariable-calculus
- Title: Multivariable Calculus: Jacobians and Hessians
- Category: Fundamentals
- Language: en
- Key Concepts: Hessian, steepest ascent, Multivariable Calculus: The Language of Optimization, 3. The Hessian Matrix ($\mathbf{H}$), 4. Why it Matters for High-Finance, Visualization: Steepest Descent, Saddle Point, Geometry, Related Topics, Gamma, Jacobian, Optimization, 2. The Jacobian Matrix ($\mathbf{J}$), Curvature, [[spectral-theory-operators|Eigenvalues]] of H
- References: automatic-differentiation, black-scholes, convex-optimization, math/analysis-geometry/information-geometry, math/spectral-theory-operators, taylor-series
- Backlinks: course-math-for-ai, lagrange-multipliers, taylor-series

## Entity: number-theory-basics
- Title: Number Theory and Cryptography
- Category: Fundamentals
- Language: en
- Key Concepts: Collision Resistance, 5. Hash Functions and Collisions, Modulus, Visualization: Modular Cycles, Elliptic Curve Cryptography (ECC), Extended Version, Cryptographic Hash Functions, Euclidean Algorithm, 2. Modular Arithmetic (Clock Math), Greatest Common Divisor (GCD), Fundamental Theorem of Arithmetic, The Discrete Logarithm Problem, Related Topics, Public Key Cryptography, 1. Divisibility and Prime Numbers
- References: cedefi-gateway-architecture, cedefi-mechanics, combinatorics-induction

## Entity: taylor-series
- Title: Taylor Series and Approximation
- Category: Fundamentals
- Language: en
- Key Concepts: Maclaurin Series, Second-order Taylor expansion, Sine, Taylor Series: The Art of Polynomial Approximation, 1st Order (Linear), B. Euler's Identity, Tangent Line, Related Topics, A. Small Angle Approximation, Taylor Series, 0th Order, Curvature, Taylor Polynomial of degree $n$, C. Optimization, 4. Why it Matters in Physics and AI
- References: black-scholes, linear-spaces-basis, multivariable-calculus
- Backlinks: calculus-integration, course-math-for-ai, multivariable-calculus, sequences-series-convergence

## Entity: ads-cft-deep
- Title: AdS/CFT Correspondence
- Category: Holography
- Language: en
- Key Concepts: Visualization: The AdS Tin Can, ER = EPR, 3. ER = EPR: The Wormhole Paradox, Computational Complexity, AdS/CFT Correspondence: The Holographic Principle, Boundary, Related Topics, Quark-Gluon Plasma, gravity is not a fundamental force, Spacetime and Entanglement, AdS/CFT correspondence, negative cosmological constant, 2. The Ryu-Takayanagi Formula: Geometry is Information, Conformal Field Theory (CFT), Holographic Principle
- References: black-hole-thermodynamics, conformal-field-theory, quantum-information-entropy
- Backlinks: quantum-information-entropy

## Entity: agentic-patterns
- Title: Agentic Design Patterns
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Frameworks, Agentic Design Patterns, Why, 1. Reflection (Self-Correction), Implementation: Simple Reflection Pattern, Workflow, ReAct, What Is It, Visualization: Single Pass vs. Agentic, 4. Multi-Agent Collaboration, 3. Tool Use (Reasoning + Acting), Agentic Workflows, 2. Planning, Related Topics, Mathematical Perspective: Iterative Refinement
- References: agents, llm, mcp, tool-use

## Entity: preference-optimization
- Title: Beyond DPO: KTO & IPO
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Advantages, KTO, Human-Centric, Diversity, Data Efficiency, Visualization: Loss Landscape Comparison, Best For, 2. IPO: Identity Preference Optimization, Related Topics, Stability, Prospect Theory, IPO, Foundation, overfitting problem, Which One to Choose?
- References: dpo, fine-tuning, rlhf
- Backlinks: llm

## Entity: chain-of-thought
- Title: Chain-of-Thought Reasoning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Theoretical limits, [[kolmogorov-complexity|Kolmogorov complexity]], Zero-shot CoT:, Self-consistency:, Emergent behavior:, [[cantor-diagonal|Cantor's diagonal argument]], Tree of Thoughts (ToT):, Medical diagnosis:, Legal reasoning:, Multi-step quantitative finance:, Faithful CoT:, Helps:, Practical Applications, When CoT Helps vs. Hurts, Overview
- References: fine-tuning, kolmogorov-complexity, llm, math/cantor-diagonal, math/godel-incompleteness, mcp, mechanistic-interpretability, rag, rlhf, speculative-decoding, tool-use, transformer-architecture
- Backlinks: agents, ai-theory/in-context-learning, evaluation-llms, math/cantor-diagonal, math/godel-incompleteness, mcp, meta-learning, prm, reasoning-models, rlhf, test-time-scaling, tool-use

## Entity: context-length
- Title: Context Length Extension
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Llama 3, The Sinusoidal Baseline and Its Limits, ALiBi: [[attention-mechanisms|Attention]] with Linear Biases, The "Lost in the Middle" Problem, RoPE: Rotary Position Embedding, Sliding Window Attention, GPT-4, requires no retraining to extend context, Claude 3, middle, FlashAttention and Memory-Efficient Long Context, Retrieval-Augmented Context, only on relative position, Gemini 1.5, Context Length Extension
- References: attention-mechanisms, fine-tuning, inference-serving, llm, rag, speculative-decoding, state-space-models, transformer-architecture, vector-databases

## Entity: continuous-batching
- Title: Continuous Batching
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Problem with Static Batching, 10x to 20x, Why It Matters, padded, The Orca Breakthrough, Operate at the iteration (token) level, not the request level, Continuous Batching (In-Flight Batching), Related Topics, Prefill Phase, Result, Visualization: Static vs. Continuous, Decode Phase, batch, The Two Phases of Generation, Insertion
- References: hardware-io-attention, inference-serving, llm, paged-attention
- Backlinks: speculative-decoding

## Entity: curriculum-learning
- Title: Curriculum Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: complexity, Why Ordering Matters, 2. Automated Curriculum Learning (ACL), Mathematical Formulation, Heuristics, Context Length, Applications in LLMs, Faster Convergence, Competence Scaling, Visualization: Learning Dynamics, Zone of Proximal Development, Curriculum Learning, Related Topics, Types of Curricula, Better Generalization
- References: fine-tuning, neural-scaling-laws, training-dynamics

## Entity: dl-compilers
- Title: Deep Learning Compilers
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Operator Fusion, Technologies: XLA, Triton, and `torch.compile`, Why It Matters, The Solution: Operator Fusion, Deep Learning Compilers, The Problem: Kernel Launch Overhead and Memory Bound, 2. Triton, Deep Learning Compilers and Kernel Fusion, 3. `torch.compile` (PyTorch 2.0), Visualization: The Compilation Pipeline, 1. XLA (Accelerated Linear Algebra), Related Topics
- References: flash-attention, gpu-architecture, hardware-io-attention, inference-serving, moe-routing
- Backlinks: flash-attention, gpu-architecture

## Entity: dpo
- Title: Direct Preference Optimization (DPO)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Reference Model Dependency, Compute, The Mathematical Breakthrough, DPO Loss Function, Implementation with `trl`, What Is It, Comparison: DPO vs. [[rlhf]], Related Topics, Stability, Complexity, Sampling, Direct Preference Optimization (DPO), [[rlhf]], Dataset Quality, Reward Model
- References: agents, finance/shannon-entropy, fine-tuning, llm, rlhf
- Backlinks: language-models/safety/rlhf-dpo, llm, preference-optimization, preference-optimization-variants, rlhf, self-rewarding

## Entity: distributed-training
- Title: Distributed Training
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Visualization: Parallelism Spectrum, Check-pointing, Weights, All-Reduce, All-Gather, Distributed Training: Scaling LLMs to Trillions of Parameters, Efficiency, Gradients, Optimizer States, 1. The Three Pillars of Parallelism, FSDP (Fully Sharded Data Parallelism), Solution, ZeRO, 2. ZeRO: Zero Redundancy Optimizer, Reduce-Scatter
- References: fine-tuning, flash-attention, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: fsdp, hardware-io-attention, model-parallelism, tensor-decompositions

## Entity: federated-learning
- Title: Federated Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Local Training, The Core Algorithm: FedAvg, Visualization: Convergence Delay, Mobile Health, Challenges in Federated Learning, Related Topics, Federated Learning, Applications, Federated Averaging (FedAvg), Repeat, Broadcast, Finance, 2. Communication Efficiency, LoRA, Upload
- References: differential-privacy, fine-tuning, llm, quantization
- Backlinks: differential-privacy

## Entity: flash-attention
- Title: FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: IO-Aware, Impact, 4. FlashAttention-2 and Beyond, A. Tiling (SRAM Management), Streaming Multiprocessors (SMs), SRAM, FlashAttention: Fast and Memory-Efficient [[attention-mechanisms|Attention]] with Tiling, Tri Dao et al. (2022), 3. Results: Scaling to 1M Tokens, 16 GB, Memory, Visualization: Memory Flow, Claude 3, Memory IO, Related Topics
- References: attention-mechanisms, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, distributed-training, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, language-models/mamba-ssm, paged-attention, rope-scaling

## Entity: fsdp
- Title: Fully Sharded Data Parallel (FSDP)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Communication Efficiency, Forward Pass, The Lifecycle of a Layer, Key Advantages, Weights, Comparison: DDP vs. FSDP, All-Gather, How FSDP Works, Backward Pass, Memory usage, Massive Memory Savings, Reduce-Scatter, Related Topics, Hybrid Sharding, Scales down
- References: distributed-training, fine-tuning, inference-serving, model-parallelism
- Backlinks: model-parallelism

## Entity: gpu-architecture
- Title: GPU Architecture for Deep Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Alignment, [[inference-serving|GPU]] Architecture: SMs, Warps, and Tensor Cores, Thread, 3. Tensor Cores, Streaming Multiprocessors (SMs), Tensor Cores, L2 Cache, Visualization: Matrix Multiplication, L1 Cache / Shared Memory, 4. The Memory Hierarchy, must be multiples of 8, 16, or 32, single clock cycle, 32 threads, Related Topics, 1. Streaming Multiprocessors (SMs)
- References: attention-mechanisms, dl-compilers, flash-attention, hardware-io-attention, inference-serving, modern-quantization
- Backlinks: distributed-training, dl-compilers, flash-attention, modern-quantization

## Entity: hardware-io-attention
- Title: Hardware IO and FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: IO-bound, Role, [[flash-attention|HBM]] (High Bandwidth Memory), Speed, Hardware IO and the Physics of FlashAttention, The Memory Hierarchy of a [[inference-serving|GPU]], FlashAttention: IO-Awareness, Visualization: Memory Speed vs. Access, Tiling, entirely within SRAM, The "Memory Wall" Problem, Why It Matters for the Future, Size, 90% of its time waiting, Related Topics
- References: attention-mechanisms, distributed-training, flash-attention, inference-serving
- Backlinks: continuous-batching, distributed-training, dl-compilers, flash-attention, gpu-architecture, paged-attention

## Entity: agents
- Title: LLM Agents
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Model invocation:, Initialization:, Process reward models:, Task automation:, Orchestrator + Workers, Max steps:, Planning and Tree of Thoughts, MCP and Modular Tools, The Agent Loop, [[llm]] Agents, Reflection:, Acting, Financial analysis:, Context Overflow, Clear descriptions:
- References: chain-of-thought, fine-tuning, llm, mcp, rag, reinforcement-learning, tool-use
- Backlinks: agentic-patterns, dpo, inference-serving, prompt-engineering, vector-databases

## Entity: evaluation-llms
- Title: LLM Evaluation
- Category: LLM Infrastructure
- Language: en
- Key Concepts: MMLU (Massive Multitask Language Understanding), Rotate benchmarks monthly., Goodhart's Law: Measure Becomes Target, Membership inference, Exact matching, Run A/B tests with real users., orthogonal evaluation across diverse benchmarks never used for training, Best Practices for Honest Evaluation, Perplexity: Information-Theoretic Foundation, BIG-Bench Hard, HELM, Knowledge & Reasoning Benchmarks, Calibration, Holistic Evaluation: HELM, BIG-Bench and BIG-Bench Hard
- References: chain-of-thought, llm, rlhf
- Backlinks: ai-theory/knowledge-distillation, bayesian-deep-learning, prompt-engineering

## Entity: fine-tuning
- Title: LLM Fine-Tuning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Parameter reduction:, Supervised Fine-Tuning (SFT), Epochs, PEFT: Parameter-Efficient Fine-Tuning, catastrophic forgetting, When to Fine-Tune, Instruction tuning, Practical Guidelines, Data, Adapter Layers, LoRA: Low-Rank Adaptation, Monitoring, LoRA, Instruction Tuning vs. [[rlhf]], Learning rate
- References: attention-mechanisms, convex-optimization, inference-serving, quantization, rag, rlhf, transformer-architecture
- Backlinks: adalora, agents, ai-theory/in-context-learning, ai-theory/knowledge-distillation, chain-of-thought, code-models, constitutional-ai, context-length, contrastive-learning, curriculum-learning, distributed-training, dora, dpo, effective-field-theory, federated-learning, fsdp, language-models/safety/rlhf-dpo, llm, llm-financial-analysis, lora-peft, mixture-of-experts, ml-options-pricing, model-merging, modern-quantization, nlp-financial-analysis, positional-encodings, preference-optimization, prompt-engineering, qat, qlora, quantization, rag, rlhf, self-rewarding, slm, synthetic-data-alignment, tool-use, training-dynamics, weight-averaging

## Entity: inference-serving
- Title: LLM Inference Serving
- Category: LLM Infrastructure
- Language: en
- Key Concepts: continuous batching, Ollama, Token budgets, 98-99% utilization, pages, vLLM, Related topics, time-to-first-token (TTFT), Fragmentation elimination, PagedAttention: virtual memory for KV-cache, Dynamic index remapping, GPU utilization, Production systems, Decode, block table
- References: agents, attention-mechanisms, flash-attention, llm, mixture-of-experts, quantization, speculative-decoding, transformer-architecture
- Backlinks: attention-mechanisms, automatic-differentiation, context-length, continuous-batching, distributed-training, dl-compilers, finance/monte-carlo-method, finance/xva, fine-tuning, flash-attention, fsdp, gpu-architecture, hardware-io-attention, language-models/mamba-ssm, llm-financial-analysis, lora-peft, mla, model-merging, model-parallelism, modern-quantization, paged-attention, quantization, queuing-theory, rope-scaling, slm, speculative-decoding, temporal-fusion-transformer, tokenization, vector-databases, volatility-modulated-spectral-surface

## Entity: lora-peft
- Title: LoRA and PEFT
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Other PEFT Techniques, Zero Inference Latency, Visualization: Rank vs. Parameters, Advantages of LoRA, low intrinsic rank, Portability, Related Topics, Parameter-Efficient [[fine-tuning]] (PEFT), LoRA and Parameter-Efficient [[fine-tuning]] (PEFT), Prefix Tuning, rank $r \ll d$, VRAM Savings, The Mathematical Intuition, IA3, LoRA
- References: fine-tuning, inference-serving, quantization, tensor-decompositions, transformer-architecture

## Entity: mcp
- Title: MCP (Model Context Protocol)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Versioning:, DevOps agents:, MCP with OAuth:, QuantLib-backed pricers, Internal valuation memos and risk dashboards, Resources, IDE assistants:, Transport Layer, Key Trade-offs, MCP for quantitative finance, Real-world MCP servers (community ecosystem):, Solves:, Practical Applications, Overview, Remote MCP over HTTP:
- References: chain-of-thought, llm, llm-financial-analysis, rag, slm, speculative-decoding, tool-use
- Backlinks: agentic-patterns, agents, chain-of-thought, tool-use

## Entity: model-parallelism
- Title: Model Parallelism: Tensor and Pipeline
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Problem: Pipeline Bubbles, Efficiency, The Solution: Micro-batching, Split unit, Related Topics, 3D Parallelism, Model Parallelism: Tensor vs. Pipeline, Hardware, Pros, Model Parallelism, Data Parallelism (DP/ZeRO), The Idea, NVLink, Visualization: The Pipeline Bubble, Pipeline Parallelism (PP)
- References: attention-mechanisms, distributed-training, fsdp, inference-serving, transformer-architecture
- Backlinks: fsdp

## Entity: quantization
- Title: Model Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Q5_K_M, NF4, GGUF Format and Local Inference, Weight quantization, Activation quantization, activation scales, NF4: 4-Bit Normal Float, Memory Footprint Calculations, second-order optimization, See Also, Integration with Inference Pipelines, uniform, Absmax Quantization, Weight vs. Activation Quantization, symmetric
- References: attention-mechanisms, fine-tuning, inference-serving, llm, mixture-of-experts, neural-scaling-laws, speculative-decoding, transformer-architecture
- Backlinks: ai-theory/knowledge-distillation, bitnet, conformal-field-theory, federated-learning, fine-tuning, hamiltonian-mechanics, homological-algebra, inference-serving, linear-algebra, lora-peft, modern-quantization, pauli-exclusion-quantization, qat, qft-basic, qlora, quantization-error-math, quantization-ptq-information, research/mla-financial-reasoning, slm, small-ball-probabilities, vector-databases

## Entity: modern-quantization
- Title: Modern Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Visualization: Distribution-Aware Binning, 3. GPTQ: Post-Training Quantization (PTQ), Hessian, Hopper (H100), Inversion Problem, [[quantization]] Error, FP8, 2. NormalFloat4 (NF4): Quantization for All, Normal (Gaussian) Distribution, Related Topics, Mechanism, Modern [[quantization]]: NF4, GPTQ, and AWQ, 1% of weights, 1. The Challenge of Low Precision, bitsandbytes
- References: fine-tuning, gpu-architecture, inference-serving, quantization
- Backlinks: deep-lob, gpu-architecture, qat, tensor-decompositions

## Entity: orm-prm
- Title: ORM vs PRM: Preference Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Yes, The Pros, PRM, Inference-time Search, 2. Process Reward Models (PRM), The Cons, ORM vs PRM: Two Ways to Reward Reasoning, Comparison: Accuracy on Complex Tasks, Visualization: Reward Density, Related Topics, False Positives, Implementation in [[rlhf]], final answer, each individual step, The Signal
- References: llm, mcts, prm, reasoning-models, rlhf

## Entity: paged-attention
- Title: PagedAttention and KV Cache
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 2x to 4x, The Solution: Operating System Inspiration, Visualization: Paged Memory Allocation, Key Advantages, Fragmentation, vLLM, 2. Prompt Sharing, Block Tables, Blocks, KV Cache, Related Topics, internal fragmentation, Contiguous Allocation, Paging, Unpredictability
- References: attention-mechanisms, flash-attention, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, continuous-batching

## Entity: prompt-engineering
- Title: Prompt Engineering
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Reasoning and Acting (ReAct), Assistant turn, Prompt Sensitivity and Optimization, System message, DSPy, Tree of Thoughts, APE, User turn, Chain-of-Thought Prompting, Structured Output and Grammar Constraints, Zero-shot and Few-shot Learning, Self-consistency, Tree of Thoughts and Search, prompt optimization, System Prompts and Jailbreaking
- References: agents, evaluation-llms, fine-tuning, llm, meta-learning, rlhf, tool-use
- Backlinks: ai-theory/in-context-learning

## Entity: qat
- Title: Quantization Aware Training (QAT)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Backward Pass, 5. Modern Variant: QLoRA, Forward Pass, 3. LSQ: Learned Step Size Quantization, Visualization: STE Gradient Flow, The Core Problem, PTQ (Post-Training), 1. The Simulated [[quantization]] (Fake Quant), 4. QAT vs. PTQ: When to use which?, [[quantization]] Aware Training (QAT), Step Size, 2-bit or 3-bit, QLoRA, Straight-Through Estimator (STE), 2. Straight-Through Estimator (STE)
- References: automatic-differentiation, fine-tuning, gradient-hessian-jacobian, modern-quantization, quantization

## Entity: rag
- Title: RAG (Retrieval-Augmented Generation)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Faithfulness, Evaluation: RAGAS, Pre-Retrieval (Query Transformation), GraphRAG: The Next Frontier, Visualization: Retrieval Precision, Vector Search, Post-Retrieval (Reranking), Cross-Encoder Reranker, Overview, Knowledge Graphs, Global Queries, RAG (Retrieval-Augmented Generation), Related Topics, Keyword Search, Context Precision
- References: embedding-models, fine-tuning, llm, llm-financial-analysis, tool-use, vector-databases
- Backlinks: about, agents, chain-of-thought, context-length, embedding-models, fine-tuning, llm-financial-analysis, mcp, naive-bayes, nlp-financial-analysis, projects/llm-wiki, research/mla-financial-reasoning, slm, tool-use, vector-databases

## Entity: self-rewarding
- Title: Self-Rewarding Models
- Category: LLM Infrastructure
- Language: en
- Key Concepts: student, Self-Evaluation, Mathematical Formulation: Iterative [[dpo]], Why It Works, Risks and Limitations, Llama 3, The Iterative Loop, teacher, DeepSeek-R1, Related Topics, Self-Rewarding Language Models, Repeat, Visualization: Performance Scaling, Reward Hacking, Response Generation
- References: dpo, fine-tuning, prm, reasoning-models

## Entity: speculative-decoding
- Title: Speculative Decoding
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Verifying, Code/Prose, Mathematical Foundation: Rejection Sampling, Drafting, Accepting, Draft Model, Visualization: Parallel Verification, 1. Medusa (Draft-less Speculative Decoding), memory-bound, Related Topics, Acceptance Rate, The Core Concept, Medusa, Target Model, The Workflow
- References: continuous-batching, inference-serving, kv-cache-compression, llm, multi-token-prediction, prm
- Backlinks: chain-of-thought, context-length, inference-serving, mcp, multi-token-prediction, quantization, tool-use

## Entity: tokenization
- Title: Tokenization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Characters, Why Not Characters or Words?, Common Algorithms, 1. Byte-Pair Encoding (BPE), Tokenization, Numbers, likelihood ratio, Words, Sub-word, 2. WordPiece, Token Fertility and Inference Cost, Whitespace, Related Topics, Artifacts and Challenges, Byte-level BPE
- References: attention-mechanisms, inference-serving, transformer-architecture

## Entity: tool-use
- Title: Tool Use / Function Calling
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Step 2 — Model decision., Database query generation:, Tool Use / Function Calling, Tool Safety Architecture, inference-time planning, Tool-use as agent action space, DevOps agents:, Destructive tools, ToolBench / Gorilla, Key Trade-offs, [[reinforcement-learning|Reinforcement learning]], Financial copilots:, Code interpreters:, Solves:, Practical Applications
- References: chain-of-thought, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, mcp, rag, reinforcement-learning, speculative-decoding
- Backlinks: agentic-patterns, agents, chain-of-thought, mcp, prompt-engineering, rag, research/mla-financial-reasoning

## Entity: vector-databases
- Title: Vector Databases
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Production Systems, Advantages, Cosine similarity, and, IndexIVFFlat, Hybrid, IndexIVFPQ, Trade-offs, Malkov & Yashunin, 2016, Search query, Pre-filter, Idea, Managed vs. Self-hosted, Filtered Search, HNSW: Hierarchical Navigable Small World
- References: agents, embedding-models, inference-serving, llm, quantization, rag, transformer-architecture
- Backlinks: context-length, matryoshka-embeddings, rag

## Entity: weight-averaging
- Title: Weight Averaging and SWA
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Why It Works: The Flatness Hypothesis, The Problem: Sharp Minima, Visualization: Converging to the Center, flatness, flat minima, Related Topics, Phase 1, Phase 2, Weight Averaging and Stochastic Weight Averaging (SWA), Stochastic Weight Averaging (SWA), sharp minimum, Averaging, Exponential Moving Average (EMA), Polyak-Ruppert Averaging (EMA)
- References: fine-tuning, model-merging, training-dynamics

## Entity: preference-optimization-variants
- Title: Advanced Preference Optimization
- Category: Language Models
- Language: en
- Key Concepts: PRM (Process Reward Model), Comparison of Methods, ORM (Outcome Reward Model), KTO, Prospect Theory, Process-based, Outcome-based, PPO, IPO, Related Topics, Beyond [[dpo]], DPO, 3. ORM and PRM Integration, Advanced Preference Optimization, 2. IPO (Identity Preference Optimization)
- References: dpo, prm, reasoning-models, rlhf
- Backlinks: synthetic-data-alignment

## Entity: language-models/safety/rlhf-dpo
- Title: Alignment: RLHF and DPO
- Category: Language Models
- Language: en
- Key Concepts: Alignment, Stability, Alignment: [[rlhf]] and [[dpo]], Compute, Reward Modeling:, Complexity, Safety and Constitutional AI, [[rlhf]] vs. DPO, SFT (Supervised [[fine-tuning]]):, Drawbacks:, [[rlhf]] (Reinforcement Learning from Human Feedback), PPO (Proximal Policy Optimization):, The Core Idea:, Reward Model (RM), [[dpo]] (Direct Preference Optimization)
- References: constitutional-ai, dpo, finance/shannon-entropy, fine-tuning, llm, math/analysis-geometry/information-geometry, mechanistic-interpretability, rlhf

## Entity: bitnet
- Title: BitNet & 1.58-bit LLMs
- Category: Language Models
- Language: en
- Key Concepts: BitNet & 1.58-bit LLMs (Ternary [[quantization]]), Scaling Laws, Activation Quantization, Ternary Weight [[quantization]], Visualization, BitLinear, Energy Efficiency, Small Model Gap, Hardware Optimization, Training Complexity, How It Works, Memory Footprint, Trade-offs, What Is It, Throughput
- References: llm, mixture-of-experts, neural-scaling-laws, quantization, reasoning-models, slm, transformer-architecture

## Entity: code-models
- Title: Code Language Models
- Category: Language Models
- Language: en
- Key Concepts: Python Usage Pattern, Rare languages and frameworks, Tokenization, Security, HumanEval pass@k metric, Tokenization sensitivity, Execution feedback objective (RLEF), Test generation, Execution environment unawareness, Data composition, Code-focused continued pre-training, FIM training, Context length, Correctness vs. plausibility, Multi-file awareness
- References: attention-mechanisms, fine-tuning, llm, mixture-of-experts, pac-learning, slm, transformer-architecture
- Backlinks: multi-token-prediction

## Entity: constitutional-ai
- Title: Constitutional AI and RLAIF
- Category: Language Models
- Language: en
- Key Concepts: Safety-Efficiency Frontier, Phase 1: Supervised Learning (Critique and Revision), 3. The Constitution, [[fine-tuning]], 4. Strategic Benefits, Constitutional AI and RLAIF: Self-Aligning Systems, RLAIF, Black-box, Scalability, Phase 2: Reinforcement Learning (RLAIF), Related Topics, 2. The CAI Process, 1. The Core Problem with [[rlhf]], Constitutional AI (CAI), Revision
- References: fine-tuning, llm, mechanistic-interpretability, reinforcement-learning, rlhf
- Backlinks: language-models/safety/rlhf-dpo, mechanistic-interpretability

## Entity: embedding-models
- Title: Embedding Models
- Category: Language Models
- Language: en
- Key Concepts: Python Usage Pattern, Asymmetric architectures, Semantic vs. factual similarity, Long documents, In-batch hard negatives, Sentence similarity, Contrastive loss on triplets, Language and script coverage, Cross-lingual transfer, Retrieval-augmented generation, mean pooling, Semantic search, Training Paradigm, Clustering, Matryoshka Representation Learning (MRL)
- References: attention-mechanisms, finance/shannon-entropy, llm, mixture-of-experts, rag, transformer-architecture, vlm
- Backlinks: contrastive-learning, llm, matryoshka-embeddings, rag, slm, vector-databases, vlm

## Entity: llm
- Title: Large Language Models (LLMs)
- Category: Language Models
- Language: en
- Key Concepts: 1. Pre-training., Python Usage Pattern, Instruction following, Large Language Models (LLMs), 2. Supervised [[fine-tuning]] (SFT)., Knowledge, Residual connections, Static knowledge, Prompt sensitivity, Autoregressive generation, Context compression, Compute cost, Context window, decoder-only [[transformer-architecture|transformer]], Chain-of-thought reasoning
- References: attention-mechanisms, dpo, embedding-models, fine-tuning, mechanistic-interpretability, mixture-of-experts, model-merging, neural-scaling-laws, preference-optimization, prm, reasoning-models, rlhf, slm, transformer-architecture
- Backlinks: about, agentic-patterns, agents, attention-mechanisms, bert, bitnet, chain-of-thought, code-models, constitutional-ai, context-length, continuous-batching, distributed-training, dpo, embedding-models, evaluation-llms, f-divergences, federated-learning, flash-attention, generative-models, gnn-credit-risk, gpt-architecture, inference-serving, language-models/safety/rlhf-dpo, llm-financial-analysis, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/cantor-diagonal, math/godel-incompleteness, matryoshka-embeddings, mcp, mechanism-design, meta-learning, mixture-of-experts, ml-options-pricing, model-merging, multi-token-prediction, naive-bayes, nlp-financial-analysis, orm-prm, paged-attention, positional-encodings, ppo, projects/llm-wiki, prompt-engineering, quantization, rag, reasoning-models, rlhf, slm, sparse-autoencoders, speculative-decoding, state-space-models, superposition, test-time-scaling, tool-use, vector-databases, vlm

## Entity: matryoshka-embeddings
- Title: Matryoshka Embeddings
- Category: Language Models
- Language: en
- Key Concepts: Visualization, No Re-indexing, Storage Savings, Matryoshka Embeddings (MRL), Low Latency, Hierarchical Navigation, Vector Search, Adaptive Accuracy/Efficiency Trade-off, On-device AI, Nested Loss Function, How It Works, What Is It, Related Topics, Use Cases, Benefits
- References: embedding-models, llm, vector-databases, vlm

## Entity: mixture-of-experts
- Title: Mixture of Experts (MoE)
- Category: Language Models
- Language: en
- Key Concepts: Python Usage Pattern, Memory cost, Load balancing auxiliary loss, Capacity factor, Router initialization, Mixture of Experts (MoE), Parameter efficiency, $N$ expert FFNs, Router (gating network), Token dropping, MoE layer, Expert specialization, Scaling, Training Paradigm, Gradient flow
- References: fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, slm, transformer-architecture
- Backlinks: bayesian-nonparametrics, bitnet, code-models, embedding-models, inference-serving, llm, mla, model-merging, moe-routing, quantization, slm, state-space-models, transformer-architecture

## Entity: moe-routing
- Title: MoE Routing and Specialization
- Category: Language Models
- Language: en
- Key Concepts: MoE Routing and Expert Specialization, experts choose tokens, Advanced Routing Strategies, 3. DeepSeek-V3: Multi-Head Latent [[attention-mechanisms|Attention]] & DeepSeekMoE, How Routing Works, Solution, Top-k Routing, 2. Expert Overflow, shared experts, Auxiliary Load Balancing Loss, 1. Expert Collapse (Winner-Take-All), 1. Switch [[transformer-architecture|Transformer]] (Top-1), 2. Expert Choice Routing, Mixture of Experts (MoE), Routing Challenges
- References: attention-mechanisms, mixture-of-experts, mla, transformer-architecture
- Backlinks: dl-compilers

## Entity: model-merging
- Title: Model Merging & FrankenMoE
- Category: Language Models
- Language: en
- Key Concepts: Compute, 3. DARE (Drop And REscale), MergeKit, Performance, Base Model, Merge, Reset, FrankenMoE, Model Merging & FrankenMoE, Advantages and Limitations, Gate/Router, What Is It, Related Topics, Model Merging, 2. TIES-Merging
- References: fine-tuning, inference-serving, llm, mixture-of-experts
- Backlinks: llm, weight-averaging

## Entity: mla
- Title: Multi-Head Latent Attention (MLA)
- Category: Language Models
- Language: en
- Key Concepts: GQA, better compression than GQA, MHA, Multi-Head Latent [[attention-mechanisms|Attention]] (MLA), Why It Matters, Grouped-Query [[attention-mechanisms|Attention]] (GQA), RoPE, ~5% - 10%, 1. Compression, Comparison: KV-Cache Per Token, What Is It, Related Topics, Visualization: Memory Efficiency, Position Part, The Architecture: Low-Rank Compression
- References: attention-mechanisms, inference-serving, mixture-of-experts
- Backlinks: moe-routing, rope-scaling

## Entity: multi-token-prediction
- Title: Multi-Token Prediction
- Category: Language Models
- Language: en
- Key Concepts: Shared Trunk, $n$ Prediction Heads, Better Long-Term Dependency, Improved Reasoning, The Modified Loss Function, Sample Efficiency, Multi-Token Prediction (MTP), The Core Concept, Related Topics, Meta AI (2024), Inference Speedup, Architecture: Shared Trunk and Independent Heads, Why It Works, Benefits
- References: code-models, finance/shannon-entropy, llm, speculative-decoding, training-dynamics, transformer-architecture
- Backlinks: speculative-decoding

## Entity: positional-encodings
- Title: Positional Encodings
- Category: Language Models
- Language: en
- Key Concepts: Absolute Positional Encodings, Comparison Summary, Relative Positional Encodings, Extrapolation Beyond Training Length, Sinusoidal (Vaswani et al. 2017)., RoPE: Rotary Position Embedding, RoPE, T5 Relative Bias., Positional Encodings, ALiBi (Press et al. 2022)., Positional encodings, YaRN, Learned absolute., Context Extension: YaRN, Related Topics
- References: attention-mechanisms, fine-tuning, llm, neural-scaling-laws, transformer-architecture
- Backlinks: nerf, rope-scaling

## Entity: prm
- Title: Process-Based Supervision
- Category: Language Models
- Language: en
- Key Concepts: PRM vs. ORM Performance, PRM, Process-Based Supervision, OpenAI PRM800K, DeepSeek-R1, Real-World Examples, Process Reward Models (PRMs), Why PRMs Matter, Outcome-Based Supervision (ORMs), Credit Assignment, Hallucination Reduction, The Mathematical Intuition, ORM, What Is It, Search at Inference Time
- References: chain-of-thought, reasoning-models, rlhf
- Backlinks: bayes-theorem, llm, orm-prm, preference-optimization-variants, self-rewarding, speculative-decoding, test-time-scaling

## Entity: reasoning-models
- Title: Reasoning Models
- Category: Language Models
- Language: en
- Key Concepts: Reinforcement Learning (RL) on Reasoning Traces, Key Capabilities, User Experience, Complex Mathematics, Trade-offs, Rejection Sampling & Distillation, DeepSeek-R1, Group Relative Policy Optimization (GRPO), Best For, The "Aha" Moment, What Is It, Related Topics, Reasoning Models (o1/R1 Style), Chain-of-Thought (CoT), How They Are Trained
- References: chain-of-thought, llm, neural-scaling-laws, rlhf
- Backlinks: bitnet, llm, orm-prm, preference-optimization-variants, prm, self-rewarding, test-time-scaling, type-theory

## Entity: rope-scaling
- Title: RoPE Scaling & YaRN
- Category: Language Models
- Language: en
- Key Concepts: Compute, [[attention-mechanisms|Attention]] Logit Decay, Practical Constraints, Comparison of Methods, Memory, Techniques, RoPE Scaling and Long Context, What Is It, FlashAttention-2, Retrieval Accuracy, Related Topics, Ring Attention, 2. NTK-aware Scaling, RoPE Scaling, Dimension Sensitivity
- References: attention-mechanisms, flash-attention, inference-serving, mla, positional-encodings, transformer-architecture

## Entity: slm
- Title: Small Language Models (SLMs)
- Category: Language Models
- Language: en
- Key Concepts: Python Usage Pattern, Distillation from a strong teacher, Prompt sensitivity, Tied embeddings, Distillation ceiling, Curriculum training, Context length, LoRA [[fine-tuning]], Smaller hidden dimensions with more layers vs. fewer layers, Knowledge distillation, [[quantization]]-aware training, Training Paradigm, What Is It, Sliding Window [[attention-mechanisms|Attention]] (SWA), Related Topics
- References: attention-mechanisms, embedding-models, finance/shannon-entropy, fine-tuning, inference-serving, llm, mechanistic-interpretability, mixture-of-experts, neural-scaling-laws, quantization, rag, transformer-architecture
- Backlinks: bitnet, code-models, llm, mcp, mixture-of-experts, synthetic-data-alignment

## Entity: language-models/mamba-ssm
- Title: State Space Models (Mamba)
- Category: Language Models
- Language: en
- Key Concepts: Selectively, The [[transformer-architecture|Transformer]] Bottleneck, State Space Models (SSM), Mamba, The Mamba Innovation: Selection Mechanism, State Space Models and Mamba Architecture, Limitations, The SSM Framework, Scalable Context:, Why Mamba Matters, Selection, Hardware-Aware Design:, Inference Speed:, Related Topics, linear-time complexity
- References: attention-mechanisms, flash-attention, inference-serving, linear-algebra, time-series, transformer-architecture

## Entity: synthetic-data-alignment
- Title: Synthetic Data & Self-Alignment
- Category: Language Models
- Language: en
- Key Concepts: Seed Tasks, Synthetic Data, [[fine-tuning]], Synthetic Data & Self-Alignment, Self-Alignment, Supervised Phase, 2. Constitutional AI (Self-Correction), RLAIF, Comparison Table, Alpaca, 4. Scaling Laws for Synthetic Data, Task Generation, 1. Self-Instruct, Self-Instruct, Model Collapse
- References: fine-tuning, preference-optimization-variants, rlhf, slm

## Entity: test-time-scaling
- Title: Test-Time Scaling
- Category: Language Models
- Language: en
- Key Concepts: Reasoning Breakthroughs, Outcome Reward Models (ORM), Step-wise Beam Search, Trade-offs, [[prm|Process Reward Models (PRM)]], Efficiency, Best-of-N (Rejection Sampling), Look-ahead Search, What Is It, 2. Verification and Reward Models, Related Topics, Benefits, Complexity, Tree Search (MCTS), Latency
- References: chain-of-thought, llm, neural-scaling-laws, prm, reasoning-models

## Entity: training-dynamics
- Title: Training Dynamics
- Category: Language Models
- Language: en
- Key Concepts: Loss Spikes, Loss spikes, Grokking, Linear mode connectivity, Sharp vs. flat minima, Loss Landscape Geometry, Mitigations, feature learning magnitude is width-independent, generalises, Weight norm per layer, Maximal Update Parameterisation (muP), Saddle points, memorises, Early training, Middle training
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, finance/shannon-entropy, fine-tuning, neural-scaling-laws, transformer-architecture
- Backlinks: curriculum-learning, morse-theory, multi-token-prediction, weight-averaging

## Entity: vlm
- Title: Vision-Language Models (VLMs)
- Category: Language Models
- Language: en
- Key Concepts: Python Usage Pattern, Cross-modal connector, Compositional generalization, Generative objective, Linear projector, Document and chart understanding, Training Paradigm, What Is It, Visual hallucination, Related Topics, Video temporal reasoning, Prerequisites, Architecture, High-resolution details, Mathematical Framework
- References: attention-mechanisms, embedding-models, llm, pac-learning, transformer-architecture
- Backlinks: embedding-models, matryoshka-embeddings, vision-transformers

## Entity: math/large-deviations-cramer
- Title: Large Deviations and Cramer's Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: rate function, The Cramer rate function, Chernoff bound, Upper and lower bounds, exponentially fast, empirical distribution, Large deviation principle, 2. Gaussian., Large Deviation Principle, 1. Statistical mechanics., 1. Binomial., Cramer's theorem, concentration of measure, Definition., the probability of ruin
- References: central-limit-theorem, characteristic-functions, convex-optimization, cornish-fisher-cvar, finance/shannon-entropy, law-iterated-logarithm, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/lundberg-cramer-ruin
- Backlinks: extreme-value-theory, math/branching-processes, math/concentration-inequalities, math/contiguity-measures, math/coupling-methods, math/doleans-dade-exponential, math/geometric-ergodicity, math/interacting-particle-systems, math/local-limit-theorems, math/lundberg-cramer-ruin, math/percolation, math/poisson-approximation, math/random-graphs, math/random-walks, math/renewal-theory, math/wiener-hopf-factorization, mgf, wentzell-freidlin

## Entity: math/lundberg-cramer-ruin
- Title: Lundberg-Cramer Ruin Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: Investment models., Probability of ruin:, Theorem (Lundberg inequality)., 1. Exponential claims., The Cramer-Lundberg model, 3. Financial risk management., Harald Cramer (1893-1985), Stochastic premiums., Net profit condition:, Definition., does not exist, 2. Mixture of exponentials., Modern formulations, one of the first applications of [[large-deviations-cramer|large deviations theory]], Lundberg-Cramer Ruin Theorem
- References: extreme-value-theory, finance/stable-distributions, finance/value-at-risk, math/discrete-martingales, math/large-deviations-cramer
- Backlinks: math/large-deviations-cramer, math/poisson-approximation, math/renewal-theory, math/wiener-hopf-factorization

## Entity: math/central-limit-theorem
- Title: Central Limit Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: weakly dependent, Finite variance, fail, rate, Multivariate CLT., independent, practically useful, Berry-Esseen theorem (1941)., Lindeberg's condition., What CLT does not cover, CLT for martingale differences, Theorem (classical CLT)., Functional CLT (Donsker, 1951)., Proof via characteristic functions, Multivariate and functional CLT
- References: arch-models, brownian-motion, characteristic-functions, finance/crr-model, finance/stable-distributions, finance/stylized-facts-returns, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/weak-convergence-prokhorov

## Entity: math/functional-limit-theorems
- Title: Functional Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: Donsker's Invariance Principle, Convergence of Discrete to Continuous Semimartingales, Diffusion approximations., The Role of Skorokhod Topology, process, read off from the predictable triplets, Rebolledo's Martingale CLT, Convergence of Compound Poisson to Levy, High-frequency finance., functional, Convergence via Predictable Characteristics, Tightness Criteria, Applications, Theorem (Rebolledo, 1980)., Functional Limit Theorems
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, martingale-clt, math/convergence-semimartingales, math/skorokhod-topology, math/triangular-arrays-processes, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-problem, math/predictable-compensator, math/random-walks, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/infinitely-divisible-distributions
- Title: Infinitely Divisible Distributions
- Category: Limit Theorems
- Language: en
- Key Concepts: The Levy Measure, Theorem., canonical triplet, De Finetti's theorem (for ID distributions)., The Levy-Khintchine Representation, Key Examples, infinitely divisible, Theorem (Levy-Khintchine)., Connection to Processes with Independent Increments, Relation to Stable Distributions, Kolmogorov's formula., Role in Jacod-Shiryaev's Limit Theory, Infinitely Divisible Distributions, Related Articles, Levy measure
- References: central-limit-theorem, characteristic-functions, finance/levy-processes, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, levy-ito-decomposition, math/subordinators, math/triangular-arrays-processes

## Entity: math/law-of-large-numbers
- Title: Law of Large Numbers
- Category: Limit Theorems
- Language: en
- Key Concepts: Strengthenings and generalizations, set of trajectories of probability 1, Weak law of large numbers, Proof (Chebyshev), rates, Kolmogorov's inequality, substantially stronger, rigorous proof, Theorem (strong LLN, Kolmogorov 1933)., concentration of measure, What the LLN does not say, convergence, mean is infinite, Birkhoff-Khintchine ergodic theorem, Kronecker's lemma
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/markowitz-mean-variance, law-iterated-logarithm, math/borel-cantelli-zero-one, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms
- Backlinks: convergence-types, de-finetti-exchangeability, finance/coherent-risk-measures, finance/cointegration, finance/quasi-monte-carlo, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-clt, math/poisson-approximation, math/renewal-theory, math/stochastic-recursive-sequences, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, monte-carlo-integration, slutsky-theorem

## Entity: math/local-limit-theorems
- Title: Local Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: densities, The de Moivre-Laplace theorem, Cramer's condition., skewness, Gnedenko's local theorem for lattice distributions, point probabilities, Historical development, The non-lattice (density) case, Local theorems for large deviations, Theorem (non-lattice local CLT)., Proof sketch., Statistical mechanics., Rates of convergence, inversion formula, Theorem (Stone).
- References: central-limit-theorem, characteristic-functions, finance/stable-distributions, math/functional-limit-theorems, math/large-deviations-cramer, math/law-of-large-numbers, math/spectral-theory-operators, math/weak-convergence-prokhorov
- Backlinks: math/central-limit-theorem, math/stein-method

## Entity: math/poisson-approximation
- Title: Poisson Approximation
- Category: Limit Theorems
- Language: en
- Key Concepts: Stein equation, Hashing and computer science., Theorem (Chen-Stein bound)., Theorem (Le Cam)., Compound Poisson approximation., Insurance mathematics., Poisson process approximation., rare events, Random permutations., Relation to the Central Limit Theorem, Proof sketch (direct calculation)., dependent, Birthday problem., Classical Poisson limit theorem, Proof sketch of Chen-Stein
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory
- Backlinks: math/central-limit-theorem, math/random-graphs, math/stein-method

## Entity: math/stable-convergence
- Title: Stable Convergence
- Category: Limit Theorems
- Language: en
- Key Concepts: Proof Sketch, Theorem (Stable CLT)., Comparison., Realized volatility CLT., Power variations, bipower variation, and other functionals, Definition., joint convergence, Tightness, Proposition., Role in Jacod-Shiryaev's Framework, random, Stable Convergence, Identification:, stably, Applications in High-Frequency Statistics
- References: characteristic-functions, heston-model, martingale-clt, math/convergence-semimartingales, math/discrete-martingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/local-asymptotic-normality

## Entity: math/weak-convergence-prokhorov
- Title: Weak Convergence and Prokhorov's Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: 5. Bayesian statistics:, Why tightness, fail, 4. Empirical distributions:, 2. Functional CLT (Donsker):, Lévy's continuity theorem, Definition., Prokhorov's theorem (1956)., In distribution, weak convergence of distributions, Almost surely, Prokhorov's theorem, Bolzano-Weierstrass analogue, Theorem (Skorokhod)., Hierarchy of convergences
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/asymptotic-arbitrage-large-markets, finance/crr-model, math/kolmogorov-probability-axioms, math/law-of-large-numbers
- Backlinks: empirical-processes, math/central-limit-theorem, math/contiguity-measures, math/convergence-semimartingales, math/coupling-methods, math/functional-limit-theorems, math/glivenko-cantelli, math/hellinger-processes, math/infinitely-divisible-distributions, math/local-limit-theorems, math/skorokhod-topology, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/wiener-hopf-factorization

## Entity: determinant-properties
- Title: Determinant Properties
- Category: Linear Algebra
- Language: en
- Key Concepts: Volume:, Inverse:, Multiplicativity:, Overview, Key Properties, Transpose:

## Entity: matrix-exponential
- Title: Matrix Exponential
- Category: Linear Algebra
- Language: en
- Key Concepts: Overview, Definition

## Entity: matrix-norms
- Title: Matrix Norms
- Category: Linear Algebra
- Language: en
- Key Concepts: Overview, Induced Norms, Frobenius Norm

## Entity: trace-identities
- Title: Trace Identities
- Category: Linear Algebra
- Language: en
- Key Concepts: Cyclic Property:, Overview, Identities, Trace of Derivative:, Eigenvalue Sum:, Linearity:

## Entity: vector-norms
- Title: Vector Norms
- Category: Linear Algebra
- Language: en
- Key Concepts: L-p Norms, $L_1$ Norm:, Overview, $L_2$ Norm:, $L_\infty$ Norm:

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
- Key Concepts: 1. Purged Group TimeSeries Cross-Validation, See Also, Machine Learning for Quant Trading
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
- Key Concepts: Volatility, Determinants of Spread, Equities, Bid-Ask Spread, bid, Market Cap, Components of the Spread, Overview, Forex, Effective Spread, ask, Related Topics, Absolute Spread, Adverse Selection Costs, Inventory Risk
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
- Key Concepts: 1. HFT Order Types, Midpoint Peg:, Iceberg Orders:, See Also, Post-Only:, HFT Order Types & Dark Pools
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: cryptographic-zero-knowledge-in-finance

## Entity: high-frequency-trading-and-orderbook
- Title: High-Frequency Trading (HFT) & Order Book Infrastructure
- Category: Market Microstructure
- Language: en
- Key Concepts: Colocation:, 1. HFT Tech Stack, See Also, VPIN (Volume-Synchronized Probability of Toxicity):, 2. Queue Priority & VPIN, FIFO vs Pro-Rata:, High-Frequency Trading (HFT) & Order Book Infrastructure, Protocols:, FPGA & ASICs:
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
- Key Concepts: 1. Fundamentals & Spreads, 2. Avellaneda-Stoikov Inventory Model, Bid Price ($P_b$):, Market Making Mechanics & Asymmetric Information, 3. Asymmetric Information & Adverse Selection, Bid-Ask Spread ($\delta$):, Trading Takeaway:, Mid Price ($P_m$):, See Also, Ask Price ($P_a$):
- References: course-quant-trading, optimal-stopping-and-kelly, option-greeks-and-volatility
- Backlinks: algorithmic-execution-twap-vwap, crypto-quant-trading-and-amm-curves, deep-reinforcement-learning-for-trading, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-trading-and-orderbook, limit-order-book-matching-engine-design, market-microstructure-noise-and-realized-volatility, optimal-stopping-and-kelly, option-greeks-and-volatility, order-book-dynamics-and-lOB-modeling, quant-brainteasers-handbook, quant-interview-cheat-sheet, volatility-trading-and-variance-swaps

## Entity: market-microstructure
- Title: Market Microstructure
- Category: Market Microstructure
- Language: en
- Key Concepts: The Limit Order Book (LOB), Liquidity, Market Microstructure, Mathematical Models, Bid-Ask Spread, Arbitrageurs, Kyle's Model (1985), effective spread, Depth, Resiliency, Market Impact, Overview, Tightness, Reinforcement Learning, inventory risk
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
- Key Concepts: 2. Volume Imbalance Ratio, 1. Hawkes Processes, See Also, Order Book Dynamics & LOB Modeling
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: machine-learning-for-quant-trading

## Entity: math/martingale-clt
- Title: Central Limit Theorem for Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: Comparison with CLT for stationary processes, 5. Bayesian algorithms., 3. Maximum-likelihood score., 1. Independent zero-mean variables, Functional martingale CLT (invariance principle)., 2. GMM estimators., Link to the classical CLT, martingale differences, 5. Martingale transforms., 4. Prediction errors., random, independence, clean assumptions, Theorem (Lévy-Doob-Lindeberg for martingales), Brown's theorem (1971).
- References: arch-models, brownian-motion, central-limit-theorem, convex-optimization, garch-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/law-of-large-numbers

## Entity: math/discrete-martingales
- Title: Discrete Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: the origin, Doob's optional stopping theorem., Discrete Itô formula, Doob's $L^p$ inequality., basis of all martingale theory, Adaptedness, 4. Exponential martingale., predictable, Doob's maximal inequality., Supermartingale, Martingale property, Optional stopping, Definition., Doob's convergence theorem., Doob's inequalities
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/optimal-stopping-american, law-iterated-logarithm, math/conditional-expectation-sigma, math/discrete-markov-chains, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/branching-processes, math/conditional-expectation-sigma, math/discrete-markov-chains, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/lundberg-cramer-ruin, math/martingale-clt, math/martingale-representation, math/optimal-stopping-markov, math/predictable-compensator, math/random-walks, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/stable-convergence, math/wiener-hopf-factorization, stochastic-processes

## Entity: math/doleans-dade-exponential
- Title: Doleans-Dade Stochastic Exponential
- Category: Martingale Theory
- Language: en
- Key Concepts: Exponential martingales., stochastic exponential, Special Cases, predictable, Brownian motion with drift., Doleans-Dade Stochastic Exponential, Definition., not, Geometric Levy models., Proof sketch., Proof idea., Positivity and Strict Positivity, Novikov's condition., Theorem (Yor)., Explicit Formula
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, math/discrete-martingales, math/large-deviations-cramer, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, levy-ito-decomposition, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-stochastic-integrals, math/density-processes, math/hellinger-processes, math/martingale-problem, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering, risk-neutral-valuation

## Entity: math/doob-meyer-decomposition
- Title: Doob-Meyer Decomposition
- Category: Martingale Theory
- Language: en
- Key Concepts: predictable, compensator, Historical Remark, The Continuous-Time Theorem, Definition., optional, The Optional Decomposition, Lenglart's Domination Property, Theorem (Lenglart)., dual predictable projection, quadratic variation, Theorem (Doob)., Uniqueness, class (D), Theorem (Doob-Meyer).
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability
- Backlinks: local-time-tanaka, math/density-processes, math/martingale-representation, math/predictable-compensator, math/quadratic-variation

## Entity: math/martingale-representation
- Title: Martingale Representation Theorem
- Category: Martingale Theory
- Language: en
- Key Concepts: Backward SDEs., integrand representation, market completeness, total, The Clark-Ocone Formula, fails, Clark-Ocone formula, Multiple Brownian Motions, Theorem (Clark-Ocone)., Proof Strategy, Malliavin derivative, market incompleteness, attainable, Martingale Representation Theorem, Applications
- References: black-scholes, brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, hidden-markov-models, innovation-process, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, nonlinear-filtering, stochastic-differential-equations
- Backlinks: clark-ocone, feynman-kac, math/absolute-continuity-process-measures, math/backward-sde, stochastic-processes

## Entity: math/optimal-stopping-markov
- Title: Optimal Stopping of Markov Chains
- Category: Martingale Theory
- Language: en
- Key Concepts: smallest, Bellman optimality equation, 4. Quality control and maintenance., Selecting the best observation, Problem., optimal value, variational inequality, Classical example: the secretary problem, dynamic programming, fixed point, Infinite horizon, Optimal stopping time:, Stopping Wald's statistical test, Quickest detection of a regime change, Bellman equation
- References: finance/black-scholes-derivations, finance/crr-model, finance/optimal-stopping-american, math/discrete-markov-chains, math/discrete-martingales, reinforcement-learning
- Backlinks: local-time-tanaka

## Entity: optimal-stopping-and-kelly
- Title: Kelly Criterion & Optimal Stopping Theory
- Category: Math & Game Theory
- Language: en
- Key Concepts: 1. Kelly Criterion, 2. Optimal Stopping & Secretary Problem, See Also, Kelly Criterion & Optimal Stopping Theory
- References: course-quant-trading, quant-brainteasers-handbook, quant-market-making-mechanics
- Backlinks: optimal-stopping-american-options, option-greeks-and-volatility, quant-brainteasers-handbook, quant-market-making-mechanics, quant-risk-management-var-cvar

## Entity: stochastic-calculus-and-ito-lemma
- Title: Stochastic Calculus & Ito's Lemma
- Category: Math & Game Theory
- Language: en
- Key Concepts: See Also, Stochastic Calculus & Ito's Lemma, 1. Ito's Lemma
- References: course-quant-trading, monte-carlo-option-pricing-and-variance-reduction, option-greeks-and-volatility
- Backlinks: fixed-income-quant-rates-and-yield-curve, monte-carlo-option-pricing-and-variance-reduction, stochastic-volatility-heston-model

## Entity: axiomatic-probability
- Title: Axiomatic Probability
- Category: Math Foundations
- Language: en
- Key Concepts: $\sigma$-algebra ($\mathcal{F}$), Andrey Kolmogorov, Empty Set, Monotonicity, 4. Why Measure Theory?, events, Probability Measure ($P$), Countable Additivity ($\sigma$-additivity), 3. Derived Properties, Related Topics, Non-negativity, Continuity from below, Inclusion-Exclusion, Borel $\sigma$-algebra, Sample Space ($\Omega$)
- References: conditional-probability, measure-theory

## Entity: bayesian-linear-regression
- Title: Bayesian Linear Regression
- Category: Math Foundations
- Language: en
- Key Concepts: prior, The Posterior Distribution, conjugate, Predictive Distribution, likelihood, The Model, Bayesian Linear Regression

## Entity: boolean-algebra
- Title: Boolean Algebra & Circuit Logic
- Category: Math Foundations
- Language: en
- Key Concepts: true, Logic Gates, false, Karnaugh map (K-map), Complexity Basics, Karnaugh Maps, NOT, AND
- References: recursion-recurrence

## Entity: integration-techniques
- Title: Calculus: Advanced Integration Techniques
- Category: Math Foundations
- Language: en
- Key Concepts: Integration by Parts, Trigonometric Substitution, Partial Fractions
- References: coordinate-systems
- Backlinks: generating-functions

## Entity: category-theory-ml
- Title: Category Theory for Machine Learning
- Category: Math Foundations
- Language: en
- Key Concepts: The Para Construction, Categorical Cybernetics, DERIVATION: [[automatic-differentiation|Backpropagation]] as Lens Composition, Lens, optics, Lenses and [[automatic-differentiation|Backpropagation]], chain rule, Forward:, Category Theory for Machine Learning, Learning as a Morphism, Optics, lenses, Open Games, Para, What Is It
- References: automatic-differentiation, manifold-learning, topos-theory, type-theory

## Entity: conditional-probability
- Title: Conditional Probability and Total Probability
- Category: Math Foundations
- Language: en
- Key Concepts: 3. Law of Total Probability (LTP), conditional probability of $A$ given $B$, 3.2 The Theorem, Conditional Probability and the Law of Total Probability, 4. Bayes' Theorem, Proof, 1. Definition of Conditional Probability, 5. Example: Diagnostic Testing, Likelihood, 1.1 Intuition: Shrinking the Sample Space, Prior, Posterior, Chain Rule, 2. The Multiplication Rule, 3.1 Definition of a Partition
- References: bayes-theorem, markov-chains
- Backlinks: axiomatic-probability

## Entity: continuous-random-variables
- Title: Continuous Random Variables
- Category: Math Foundations
- Language: en
- Key Concepts: Uniform($a, b$), PDF, Intuition, Cauchy($x_0, \gamma$), 5. Common Continuous Distributions, CDF, Normal($\mu, \sigma^2$), 2. Cumulative Distribution Function (CDF), 4. Transformation of Variables, 3. Expected Value and Variance, Related Topics, Continuous Random Variable, Exponential($\lambda$), 1.1 Properties of the PDF, 1. Probability Density Function (PDF)
- References: discrete-random-variables, joint-distributions, measure-theory
- Backlinks: discrete-random-variables

## Entity: coordinate-systems
- Title: Coordinate Systems & Transforms
- Category: Math Foundations
- Language: en
- Key Concepts: spherical coordinates, polar coordinates, The Jacobian Determinant, Polar and Spherical Coordinates, Jacobian determinant
- References: implicit-function-theorem
- Backlinks: implicit-function-theorem, integration-techniques

## Entity: covariance-correlation
- Title: Covariance, Correlation, and Independence
- Category: Math Foundations
- Language: en
- Key Concepts: Units, Independence $\implies$ Zero Correlation, Zero Correlation $\not\implies$ Independence, 2. Pearson Correlation Coefficient, Positive Covariance, Pearson, 4. Independence vs. Zero Correlation, 3. Pearson vs. Spearman Correlation, ranks, Example, Related Topics, Covariance, Correlation, and Independence, 5. Independence, monotonic, 2.1 Properties
- References: joint-distributions, linear-regression-ols
- Backlinks: joint-distributions

## Entity: generating-functions
- Title: Discrete Math: Generating Functions
- Category: Math Foundations
- Language: en
- Key Concepts: generating function, Counting and Analogies, Solving Recurrences
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
- Key Concepts: CDF, Probability Mass Function (PMF), Law of the Unconscious Statistician (LOTUS), Properties, step function, Binomial($n, p$), 2. Probability Mass Function (PMF), Discrete Random Variable, 5. Variance and Standard Deviation, Linearity of Expectation, 4. Expected Value (Mean), Geometric($p$), Related Topics, 2.1 Properties of the PMF, Bernoulli($p$)
- References: continuous-random-variables, lln-clt
- Backlinks: continuous-random-variables

## Entity: eigendecomposition-vs-svd
- Title: Eigenvalue Decomposition vs. SVD
- Category: Math Foundations
- Language: en
- Key Concepts: Spectral Theorem:, Technical Comparison, Eigenvalue Decomposition (EVD), Singular Value Decomposition (SVD), Domain and Codomain:, Applicability:, right singular vectors, singular values, left singular vectors, Eigenvalue Decomposition vs. SVD, Orthogonality:
- References: math/spectral-theory-operators, pca-math
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: exponential-families
- Title: Exponential Families
- Category: Math Foundations
- Language: en
- Key Concepts: Exponential Families, Role in Machine Learning, Mean:, log-partition function, Variance:, natural (or canonical) parameter, Canonical Form, Examples, sufficient statistic, Properties of the Log-Partition Function
- Backlinks: course-math-for-ai, distributions-zoo, fisher-information, math/bayesian-asymptotics, math/cramer-rao-bound, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, maximum-entropy

## Entity: fundamental-inequalities
- Title: Fundamental Inequalities: Markov & Chebyshev
- Category: Math Foundations
- Language: en
- Key Concepts: Proof, Fundamental Inequalities: Markov & Chebyshev, 3. Tightness and Bounds, 1. Markov's Inequality, 2. Chebyshev's Inequality, Sharpness, Chernoff Bounds, Related Topics
- References: jensen-inequality, lln-clt, math/concentration-inequalities

## Entity: conic-sections
- Title: Geometry: Conic Sections & Quadratic Forms
- Category: Math Foundations
- Language: en
- Key Concepts: Matrix Representation, Diagonalization, quadratic forms
- References: change-of-basis, math/spectral-theory-operators

## Entity: graph-theory-basics
- Title: Graph Theory Basics
- Category: Math Foundations
- Language: en
- Key Concepts: Path:, Paths and Trees, Adjacency Matrices, adjacency matrix, Tree:
- References: bayesian-networks, sparse-matrices
- Backlinks: sparse-matrices

## Entity: group-theory-basics
- Title: Group Theory Basics
- Category: Math Foundations
- Language: en
- Key Concepts: Associativity:, group, Field:, Inverse:, Rings and Fields, Closure:, Groups, Ring:, Identity:
- References: formal-proof-techniques

## Entity: homotopy-type-theory
- Title: Homotopy Type Theory (HoTT)
- Category: Math Foundations
- Language: en
- Key Concepts: Program Synthesis:, $\infty$-groupoid, Univalent Foundations, $h=-1$ (Propositions):, Univalence Axiom, The Univalence Axiom, Quotients:, The Circle ($S^1$):, Homotopy Type Theory (HoTT), path, What Is It, Intensional Type Theory, $h=0$ (Sets):, Relevance to AI and Program Synthesis, Related Topics
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
- Key Concepts: inner product space, Inner Product Spaces & Norms, $L_p$ Norms, $L_2$ Norm (Euclidean norm):, Dual Norms, $L_\infty$ Norm (Chebyshev norm):, $L_1$ Norm (Manhattan distance):, Frobenius Norm
- References: eigendecomposition-vs-svd, kkt-conditions, pca-math

## Entity: jensen-inequality
- Title: Jensen's Inequality
- Category: Math Foundations
- Language: en
- Key Concepts: 3. Applications, 2. Geometric Proof, A. Information Theory, Evidence Lower Bound (ELBO), Related Topics, Jensen's Inequality, B. Machine Learning: ELBO and EM-Algorithm, [[expectation-maximization|EM algorithm]], 1. Formal Statement
- References: convexity, expectation-maximization, finance/shannon-entropy, information-theory-basics
- Backlinks: fundamental-inequalities

## Entity: joint-distributions
- Title: Joint, Marginal, and Conditional Distributions
- Category: Math Foundations
- Language: en
- Key Concepts: Joint, Marginal, and Conditional Distributions, Double Integrals, 5. Multivariate Calculus Foundation, 4. Independence, 3.1 Conditional Expectation, Related Topics, Discrete, Law of Iterated Expectations, Continuous, Joint CDF, independent, 2. Marginal Distributions, 1. Joint Distributions, 3. Conditional Distributions, 1.1 Discrete Case: Joint PMF
- References: copulas, covariance-correlation, multivariate-normal
- Backlinks: continuous-random-variables, covariance-correlation

## Entity: kkt-conditions
- Title: Lagrange Multipliers & KKT Conditions
- Category: Math Foundations
- Language: en
- Key Concepts: Dual Feasibility:, Primal Feasibility:, KKT Conditions (Inequality Constraints), Karush-Kuhn-Tucker (KKT), Lagrange Multipliers (Equality Constraints), Stationarity:, Complementary Slackness:, Lagrange Multipliers & KKT Conditions
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: large-deviations
- Title: Large Deviations: Hoeffding & Bernstein Inequalities
- Category: Math Foundations
- Language: en
- Key Concepts: Chebyshev's:, Bernstein's Inequality, Markov's:, Hoeffding's Inequality, exponentially, Large Deviations: Hoeffding & Bernstein, Key takeaway:, Markov's and Chebyshev's Inequalities

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
- Key Concepts: Rank-Nullity Theorem, Kernel (Null Space, $\ker A$):, The Rank-Nullity Theorem, Fundamental Subspaces, Image (Column Space, $\text{im} A$):
- References: change-of-basis
- Backlinks: change-of-basis

## Entity: sparse-matrices
- Title: Linear Algebra: Sparse Matrices
- Category: Math Foundations
- Language: en
- Key Concepts: CSC (Compressed Sparse Column):, CSR (Compressed Sparse Row):, Storage Formats, sparse, Mathematical Properties
- References: graph-theory-basics, numerical-stability
- Backlinks: graph-theory-basics, numerical-stability

## Entity: formal-proof-techniques
- Title: Logic: Formal Proof Techniques
- Category: Math Foundations
- Language: en
- Key Concepts: Mathematical Induction, Base Case:, Direct Proof, Inductive Step:, Proof by Contradiction
- References: lln-proofs
- Backlinks: group-theory-basics, lln-proofs, recursion-recurrence

## Entity: markov-chains
- Title: Markov Chains
- Category: Math Foundations
- Language: en
- Key Concepts: Irreducibility and Aperiodicity, Transition Matrix, stationary distribution, Irreducible:, The Markov Property, Stationary Distributions, stochastic matrix, Ergodic Theorem:, Aperiodic:, Markov property, Markov Chains
- Backlinks: conditional-probability, stochastic-processes

## Entity: matrix-calculus
- Title: Matrix Calculus
- Category: Math Foundations
- Language: en
- Key Concepts: Gradients of Quadratic Forms, Matrix Calculus, denominator layout, Layout Conventions, Gradients Involving Traces, Gradients Involving Determinants
- References: em-algorithm, gmm, multivariate-normal-distribution
- Backlinks: tensors-and-contractions

## Entity: multivariable-taylor-series
- Title: Multivariable Taylor Series
- Category: Math Foundations
- Language: en
- Key Concepts: Gradient, Hessian, The Taylor Expansion, Saddle Point:, Local Minimum:, Hessian Properties and Optimization, Newton's Method, Local Maximum:, Multivariable Taylor Series
- References: math/spectral-theory-operators, positive-definite-matrices

## Entity: multivariate-normal-distribution
- Title: Multivariate Normal Distribution
- Category: Math Foundations
- Language: en
- Key Concepts: Mahalanobis Distance, Marginals and Conditionals, Conditional Distribution:, Density Function, Multivariate Normal Distribution, Marginal Distribution:
- References: kalman-filter, positive-definite-matrices
- Backlinks: matrix-calculus, positive-definite-matrices

## Entity: mutual-information-divergence
- Title: Mutual Information & Divergence
- Category: Math Foundations
- Language: en
- Key Concepts: Gibbs' Inequality:, Mutual Information & Divergence, Data Processing Inequality, Asymmetry:, Kullback-Leibler (KL) Divergence, Interpretation:, Mutual Information
- References: em-algorithm, finance/shannon-entropy

## Entity: numerical-integration
- Title: Numerical Integration
- Category: Math Foundations
- Language: en
- Key Concepts: Numerical Integration, Gaussian Quadrature, Curse of Dimensionality, Monte Carlo Integration, Importance Sampling

## Entity: numerical-stability
- Title: Numerical Stability & Floating Point Math
- Category: Math Foundations
- Language: en
- Key Concepts: condition number, Machine epsilon, Condition Number, floating-point, numerically stable, Machine Epsilon
- References: sparse-matrices
- Backlinks: sparse-matrices

## Entity: convex-sets-functions
- Title: Optimization: Convex Sets & Functions
- Category: Math Foundations
- Language: en
- Key Concepts: Convex Sets, strictly convex, convex, Convex Functions
- References: implicit-function-theorem
- Backlinks: implicit-function-theorem

## Entity: positive-definite-matrices
- Title: Positive Definite Matrices
- Category: Math Foundations
- Language: en
- Key Concepts: Positive Definite Matrices, positive definite (PD), [[spectral-theory-operators|Eigenvalues]]:, Principal Minors:, Role in Kernels and Optimization, Properties, Invertibility:, Optimization:, positive semi-definite (PSD), Cholesky Decomposition, Kernels:, Trace and Determinant:
- References: math/spectral-theory-operators, multivariate-normal-distribution
- Backlinks: multivariable-taylor-series, multivariate-normal-distribution

## Entity: pca-math
- Title: Principal Component Analysis (PCA) Math
- Category: Math Foundations
- Language: en
- Key Concepts: Maximum Variance Formulation, Connection to SVD, Principal Component Analysis (PCA), Minimum Error Formulation
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
- Key Concepts: 1D and 2D Simple Walks, random walk, transient, recurrent, Recurrence vs Transience
- References: lln-proofs
- Backlinks: lln-proofs, stochastic-processes

## Entity: p-values-effect-size
- Title: Statistics: P-values & Effect Size
- Category: Math Foundations
- Language: en
- Key Concepts: p-hacking, p-value, Effect Size, P-values, Cohen's d, P-Hacking, Effect size
- References: statistical-paradoxes
- Backlinks: statistical-paradoxes

## Entity: statistical-paradoxes
- Title: Statistics: Paradoxes
- Category: Math Foundations
- Language: en
- Key Concepts: Monty Hall Problem, Simpson's Paradox, Berkson's Paradox
- References: p-values-effect-size
- Backlinks: p-values-effect-size

## Entity: advanced-game-theory
- Title: Stochastic Games & Correlated Equilibrium
- Category: Math Foundations
- Language: en
- Key Concepts: Stochastic Games & Correlated Equilibrium, Correlated Equilibrium, Stochastic Games

## Entity: tensors-and-contractions
- Title: Tensors and Contractions
- Category: Math Foundations
- Language: en
- Key Concepts: Inner Product:, Tensors and Contractions, Tensor Notation, Tensor Contraction, Trace:, Matrix Multiplication:, Matrix-Vector Product:, Einstein Summation Convention, Examples:
- References: attention-mechanisms, automatic-differentiation, matrix-calculus

## Entity: em-algorithm
- Title: The EM Algorithm
- Category: Math Foundations
- Language: en
- Key Concepts: Problem Setup, M-step (Maximization):, Evidence Lower Bound (ELBO), E-step (Expectation):, The Expectation-Maximization (EM) Algorithm, latent variables, The EM Steps
- References: gmm, hmm
- Backlinks: matrix-calculus, mutual-information-divergence

## Entity: universal-approximation-theory
- Title: Universal Approximation Theory
- Category: Math Foundations
- Language: en
- Key Concepts: Classical Formulation, Extension to Deep Networks, Approximation by Transformers, Universal Approximation Theory, Barron's Theorem
- References: attention-mechanisms, transformer-architecture

## Entity: information-theory-basics
- Title: Information Theory Basics
- Category: Math Fundamentals
- Language: en
- Key Concepts: Intuition, [[shannon-entropy|Entropy]] ($H$), 4. Mutual Information, Entropy, 2. KL Divergence: Comparing Distributions, Kullback-Leibler (KL) Divergence, Information Theory Basics: Measuring Surprise, Mutual Information ($I(X; Y)$), Cross-Entropy, KL Divergence, not symmetric, 1. [[shannon-entropy|Entropy]]: The Measure of Uncertainty, 3. Cross-Entropy: The ML Loss Function, Cross-Entropy ($H(p, q)$), Binary Cross-Entropy (BCE)
- References: finance/shannon-entropy, maximum-entropy, probability-distributions, variational-autoencoders
- Backlinks: jensen-inequality, probability-distributions

## Entity: linear-regression-ols
- Title: Linear Regression & OLS
- Category: Math Fundamentals
- Language: en
- Key Concepts: Residual Sum of Squares (RSS), 1. The Model Equation, Geometric Interpretation, The Normal Equation, orthogonal projection, Ridge Regression, Linear Regression & OLS: The Foundation of Predictive Modeling, 3. Assumptions of OLS (Gauss-Markov), Lasso Regression, Exogeneity, Related Topics, R-squared ($R^2$), 5. Beyond OLS: Regularization, Mean Squared Error (MSE), t-statistic
- References: matrix-decompositions, statistical-inference, vector-spaces-orthogonality
- Backlinks: covariance-correlation, estimator-properties, map-estimation, matrix-decompositions, vector-spaces-orthogonality

## Entity: matrix-decompositions
- Title: Matrix Decompositions: SVD, LU, and QR
- Category: Math Fundamentals
- Language: en
- Key Concepts: 4. Comparison Summary, Gram-Schmidt process, Efficiency, The Geometric Intuition, 1. LU Decomposition: Solving Linear Systems, SVD, Related Topics, 3. Singular Value Decomposition (SVD): The Master Key, 2. QR Decomposition: Stability and Orthogonality, Orthogonal, Dimensionality Reduction (PCA), Applications, Applications in AI, Eigenvalue Algorithms, Model Compression
- References: eigenvalues-eigenvectors, linear-regression-ols, math/spectral-theory-operators, pca
- Backlinks: linear-regression-ols, vector-spaces-orthogonality

## Entity: optimization-basics
- Title: Optimization 101: Gradient Descent & Newton's Method
- Category: Math Fundamentals
- Language: en
- Key Concepts: 1. [[convex-optimization|Gradient Descent]]: The First-Order Workhorse, Computation, Vanishing/Exploding Gradients, Hessian, Stochastic [[convex-optimization|Gradient Descent]] (SGD), Loss Function, No Learning Rate, Why avoid it?, quadratic convergence, Positive Definite, Variations in ML, 2. Newton's Method: The Second-Order Specialist, 3. The Hessian Intuition, Related Topics, Convergence
- References: chain-rule-autodiff, convex-optimization, gradient-hessian-jacobian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, sequences-series-convergence

## Entity: probability-distributions
- Title: Probability Distributions Encyclopedia
- Category: Math Fundamentals
- Language: en
- Key Concepts: Parameters, Beta Distribution, Probability Distributions, Bernoulli Distribution, Poisson Distribution, 4. Key Relationships, Normal (Gaussian) Distribution, Fourth Moment (Kurtosis), First Moment (Mean), PMF, Related Topics, PDF, Multinomial, Use, 2. Continuous Distributions
- References: bayes-theorem, finance/shannon-entropy, information-theory-basics, lln-clt
- Backlinks: information-theory-basics, mgf-characteristic-functions, order-statistics, statistical-inference

## Entity: sequences-series-convergence
- Title: Sequences, Series & Convergence
- Category: Math Fundamentals
- Language: en
- Key Concepts: 4. Radius of Convergence, Sequence, Hessian, Convergence in Distribution, In ML, Linearization, Harmonic Series, Radius of Convergence, Geometric Series, Related Topics, 2. Infinite Series, Why it matters in AI, Convergence in Probability, converges, Linear Approximation
- References: lln-clt, optimization-basics, taylor-series

## Entity: logic-set-theory
- Title: Set Theory & Formal Logic
- Category: Math Fundamentals
- Language: en
- Key Concepts: Disjunction ($\lor$), 4. Boolean Algebra in Computing, Set Theory & Formal Logic: The Language of Proof, Predicate Logic (Quantifiers), Boolean Algebra, Universal Quantifier ($\forall$), Propositional Logic, Formal Verification, Bijective, Constraint Satisfaction, Cartesian Product ($A \times B$), Surjective (Onto), Implication ($\implies$), 5. Why it Matters in AI, Existential Quantifier ($\exists$)
- References: graph-theory

## Entity: statistical-inference
- Title: Statistical Inference & Hypothesis Testing
- Category: Math Fundamentals
- Language: en
- Key Concepts: 2. Type I and Type II Errors, Chi-Squared Test, Frequentist, ANOVA, 1. Hypothesis Testing: The Framework, Bayesian, p-value, Type II Error, 5. Bayesian Inference vs. Frequentist, Example, Statistical Inference: Drawing Conclusions from Data, Related Topics, Power ($1 - \beta$), Z-test / T-test, Type I Error
- References: bayes-theorem, probability-distributions
- Backlinks: bootstrap-jackknife, cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, linear-regression-ols, map-estimation, mle-estimation, rank-tests, sufficient-statistics

## Entity: chain-rule-autodiff
- Title: The Chain Rule & Auto-Diff Foundations
- Category: Math Fundamentals
- Language: en
- Key Concepts: The Chain Rule & Auto-Diff: The Engine of Deep Learning, Forward Pass, Loss Function, Efficiency, Backward Pass, 5. Why it Matters in AI, Forward Mode, Related Topics, Example, Jacobian, Optimization, 4. The Computational Graph, [[automatic-differentiation|Backpropagation]], 3. Automatic Differentiation (Auto-Diff), Reverse Mode vs. Forward Mode
- References: automatic-differentiation, gradient-hessian-jacobian, optimization-basics
- Backlinks: optimization-basics

## Entity: vector-spaces-orthogonality
- Title: Vector Spaces & Orthogonality
- Category: Math Fundamentals
- Language: en
- Key Concepts: 3. Projection Matrices, Dimension, Stability Note, 4. The Gram-Schmidt Process, 5. Summary of Key Concepts, AI Context, Orthonormal, independence, Basis, Kernel (Nullspace), Related Topics, Vectors, Orthogonal, Image (Column Space), Vector Spaces & Orthogonality: The Geometry of Data
- References: eigenvalues-eigenvectors, linear-regression-ols, matrix-decompositions
- Backlinks: linear-regression-ols

## Entity: math/algebraic-topology
- Title: Algebraic Topology
- Category: Mathematical Foundations
- Language: en
- Key Concepts: chain complex, homotopy equivalent, homotopy, Homotopy and Homotopy Equivalence, universal covering, covering space, Deck transformations, boundary operator, is independent of the choice of basepoint, singular $n$-simplex, correspondence between coverings and groups, Algebraic Topology, Euler characteristic, loop, Covering Spaces
- References: category-theory, complex-analysis, functional-analysis, math/differential-geometry, math/non-euclidean-geometry, math/topology-basics
- Backlinks: homological-algebra, homotopy-type-theory, math/differential-geometry, morse-theory, topos-theory

## Entity: complex-analysis
- Title: Complex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: monodromy, Removable singularity, Liouville's Theorem, analytic continuation, The Cauchy Integral Theorem and Formula, The Residue Theorem, Power Series and Analyticity, Cauchy integral formula, Conformal Mappings, Maximum Modulus Principle, Laurent series, residue, The Maximum Modulus Principle and Liouville's Theorem, Cauchy integral theorem, Holomorphic Functions and the Cauchy–Riemann Equations
- References: fourier-transform, functional-analysis, harmonic-analysis, math/differential-geometry, math/topology-basics
- Backlinks: math/algebraic-topology, math/differential-geometry, math/harmonic-analysis

## Entity: convex-analysis
- Title: Convex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Information geometry, Dual feasibility, Portfolio optimization, Convex sets and functions, Proximal operators and algorithms, LASSO and sparsification, Primal feasibility, Complementary slackness, Stationarity, Optimal transport, Variational methods in control, Conjugate functions and duality, The subdifferential, Applications across domains, KKT conditions and optimality
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, finance/markowitz-mean-variance, math/analysis-geometry/information-geometry, math/kolmogorov-probability-axioms, optimal-transport, stochastic-control
- Backlinks: math/high-dimensional-statistics, math/topology-basics

## Entity: math/differential-geometry
- Title: Differential Geometry
- Category: Mathematical Foundations
- Language: en
- Key Concepts: References and Further Study, tangent space, cotangent bundle, metric components, scalar curvature, The Gauss-Bonnet Theorem, Information Geometry, exponential map, sectional curvature, General Relativity, smooth [[manifold-learning|manifold]], Gauss-Bonnet theorem, Differential Geometry, charts, connection
- References: complex-analysis, convex-optimization, functional-analysis, manifold-learning, math/algebraic-topology, math/analysis-geometry/information-geometry, math/non-euclidean-geometry, math/topology-basics, math/variational-calculus
- Backlinks: asymptotic-spacetime, complex-analysis, course-math-for-ai, fluid-dynamics-navier-stokes, goldstone-modes, gravitational-waves-gr, group-theory, hyperbolic-vol-geometry, lie-groups, manifold, manifold-learning, many-body-tensor-networks, math/algebraic-topology, morse-theory, qft-curved-spacetime, semimartingales-on-manifolds, special-relativity, stochastic-manifolds, string-theory-calabi-yau

## Entity: math/harmonic-analysis
- Title: Harmonic Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Interpolation: Riesz-Thorin and Marcinkiewicz Theorems, maximal function, Information-Theoretic Connections, Applications: Heat Equation and Spectral Theory, Heisenberg uncertainty principle, Spectral theory, convergence, Sobolev spaces, Parseval's formula, The Gibbs phenomenon, Schwartz space, Riesz-Thorin interpolation theorem, The $L^1 \cap L^2$ Theory: Plancherel's Theorem, Concluding Remarks, The Schwartz Space and Tempered Distributions
- References: complex-analysis, finance/shannon-entropy, functional-analysis, math/information-theory, math/lp-spaces, math/spectral-theory-operators, partial-differential-equations, sobolev-spaces

## Entity: math/ode-stability
- Title: ODE Theory and Lyapunov Stability
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Subspaces:, unstable, asymptotically stable, Phase Plane Analysis, Definition (Stability)., Neural ODEs, Definition., The Picard-Lindelöf Theorem, Jordan Normal Form, Theorem (Lyapunov Stability Theorem)., Bifurcations, Control and Optimal Control, Further Development, Theorem (LaSalle's Invariance Principle)., Definition (Asymptotic Stability).
- References: convex-optimization, functional-analysis, manifold-learning, math/geometric-ergodicity, math/spectral-theory-operators, math/variational-calculus, neural-odes, stochastic-control, stochastic-differential-equations

## Entity: math/spectral-theory-operators
- Title: Spectral Theory of Operators
- Category: Mathematical Foundations
- Language: en
- Key Concepts: resolvent set, Spectrum and Resolvent, Residual spectrum, Classification of Spectrum, Point spectrum, resolvent, spectrum, Fredholm alternative, Spectral clustering, Bounded Self-Adjoint Operators, References, Quantum mechanics, Continuous spectrum, resolvent identity, Principal Component Analysis (PCA)
- References: functional-analysis, math/lp-spaces, math/markov-chain-mixing, math/spectral-representation-processes, partial-differential-equations, schrodinger-equation, sobolev-spaces, spectral-graph-theory
- Backlinks: algebraic-geometry-slt, algebraic-topology-persistent, ar-models, attention-linear-kernel, brownian-bridge, change-of-basis, conic-sections, eigendecomposition-vs-svd, eigenvalues-eigenvectors, finance/cointegration, finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, fluid-dynamics-navier-stokes, functional-analysis-c-star, geometry-loss-landscapes, geometry-of-attention, gnn-weisfeiler-lehman, gradient-hessian-jacobian, graph-curvature-oversquashing, graph-theory, hilbert-banach-spaces, information-geometry-nn, kernel-methods-rkhs, laplacian, linear-algebra, math/functional-analysis, math/harmonic-analysis, math/kolmogorov-equations-ctmc, math/local-limit-theorems, math/markov-chain-mixing, math/ode-stability, matrix-decompositions, mechanistic-interpretability-sae, morse-theory, multivariable-calculus, multivariable-taylor-series, neural-ode-stability, neural-operators-fno, nonlinear-shrinkage, normalization-layers-math, number-theory-l-functions, optimization-basics, pca, pinns-convergence, portfolio-optimization-ml, positive-definite-matrices, quantum-computing-vqe, quantum-information-entropy, quantum-mechanics, quantum-phase-estimation, random-matrices, random-matrix-theory-marchenko, random-walks-groups, renormalization-group, spectral-clustering, spectral-graph-theory, spectral-theorem-unbounded, spin-glasses-hopfield, state-space-models, weight-initialization-signal

## Entity: math/topology-basics
- Title: Topology and Metric Spaces
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Baire Category Theorem, connected, Compactness, Symmetry, sequential compactness, compact, interior, Heine–Borel Theorem, Tietze Extension Theorem, Space of continuous functions, open ball, Topological Spaces, boundary, Prokhorov's theorem, Metric Spaces
- References: convex-analysis, functional-analysis, math/sigma-algebra-measurability, math/skorokhod-topology, math/weak-convergence-prokhorov, sobolev-spaces
- Backlinks: complex-analysis, manifold, math/algebraic-topology, math/differential-geometry, math/hausdorff-measure, topological-phases

## Entity: math/borel-cantelli-zero-one
- Title: Borel-Cantelli Lemmas and Zero-One Laws
- Category: Measure Theory
- Language: en
- Key Concepts: Example., Lemma 2 (reverse Borel-Cantelli)., Proof, dichotomy, Lemma 1 (Borel-Cantelli)., independent, Connection to information theory, inevitably happen always or never, Kolmogorov's zero-one law, zero-one laws, zero information, Tail σ-algebra., tail events have no "intermediate" probabilities, The Borel-Cantelli lemmas, infinite
- References: brownian-motion, characteristic-functions, law-iterated-logarithm, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: math/branching-processes, math/glivenko-cantelli, math/law-of-large-numbers, math/lebesgue-integral, math/poisson-approximation

## Entity: math/cameron-martin-formula
- Title: Cameron-Martin Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: Cameron-Martin space, Importance sampling., Signal detection., abstract Wiener space, deterministic special case, Definition., not, Theorem (Cameron-Martin)., Large Deviations: Freidlin-Wentzell Theory, Wiener measure zero, The Feldman-Hajek Dichotomy, mutually singular, Infinite-dimensional analysis., The Theorem, reproducing kernel Hilbert space
- References: brownian-motion, finance/girsanov-semimartingales, math/absolute-continuity-process-measures, math/conditional-expectation-sigma, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/sigma-algebra-measurability
- Backlinks: math/absolute-continuity-process-measures, math/gaussian-process-sample-paths, math/sde-numerical-methods, math/sequential-hypothesis-testing, math/stratonovich-integral

## Entity: math/conditional-expectation-sigma
- Title: Conditional Expectation w.r.t. a σ-Algebra
- Category: Measure Theory
- Language: en
- Key Concepts: Tower property, Regular conditional probability, measurable with respect to $\mathcal{G}$, orthogonal projection, regular conditional probability, Properties, Tower of total expectation, Martingale property, globally, Definition., Connection to martingales, Intuition, Conditional Expectation w.r.t. a σ-Algebra, L² projection, Claim (Radon-Nikodym).
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, kalman-filter, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/cameron-martin-formula, math/cramer-rao-bound, math/discrete-martingales, math/doob-meyer-decomposition, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/predictable-compensator, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/differentiation-of-measures
- Title: Differentiation of Measures
- Category: Measure Theory
- Language: en
- Key Concepts: upper density, The Vitali Covering Theorem, pairwise almost disjoint, Differentiation of measures, Calderón–Zygmund decomposition, The Besicovitch Covering Lemma, Vitali covering theorem, Hardy–Littlewood maximal function, Theorem:, Differentiation of Measures, Besicovitch covering lemma, symmetric derivative, Radon–Nikodym theorem, Marcinkiewicz interpolation, Differentiation of General Measures
- References: functional-analysis, math/absolute-continuity-process-measures, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure

## Entity: math/glivenko-cantelli
- Title: Glivenko-Cantelli Theorem and Empirical Processes
- Category: Measure Theory
- Language: en
- Key Concepts: Bootstrap validity., The Kolmogorov-Smirnov test, nonparametric maximum likelihood estimator, VC dimension and uniform convergence, Glivenko-Cantelli Theorem and Empirical Processes, The DKW inequality, The empirical CDF, Theorem (Glivenko 1933, Cantelli 1933)., Glivenko-Cantelli class, all, Machine learning., The theorem, distribution-free, Nonparametric statistics., Donsker classes
- References: brownian-motion, central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/weak-convergence-prokhorov
- Backlinks: math/borel-cantelli-zero-one, math/kernel-density-estimation

## Entity: math/hausdorff-measure
- Title: Hausdorff Measure and Fractal Dimension
- Category: Measure Theory
- Language: en
- Key Concepts: The Standard Cantor Set in $[0,1]$, Agreement with Lebesgue Measure, countable disjoint cover, Comparison with Hausdorff Dimension, Application: Differentiation of Measures, $s$-dimensional Hausdorff measure, unique fixed compact, Hutchinson's theorem, Normalization Constant, Interpretation via Iterated Function Systems, Computation of Dimension, jump criterion, Statement, metric outer measure, Sets of Exceptional Points
- References: brownian-motion, math/differentiation-of-measures, math/lebesgue-integral, math/product-measures-fubini, math/sigma-algebra-measurability, math/topology-basics, radon-nikodym

## Entity: math/kolmogorov-probability-axioms
- Title: Kolmogorov's Probability Axioms
- Category: Measure Theory
- Language: en
- Key Concepts: Continuity from above and below:, measurable map, Axiom 3 (countable additivity, σ-additivity)., Kolmogorov's Probability Axioms, Borel σ-algebra, Axiom 2 (normalization)., smaller, Axiom 1 (non-negativity)., impossible, probability measure, Connection to mathematical modernism, pairwise disjoint, Lebesgue integral, derivable, event
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/ftap-first-fundamental-theorem, math/conditional-expectation-sigma, math/godel-incompleteness, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: bayesian-deep-learning, causal-inference, convex-analysis, course-math-for-ai, gaussian-processes, math/borel-cantelli-zero-one, math/central-limit-theorem, math/conditional-expectation-sigma, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-equations-ctmc, math/large-deviations-cramer, math/law-of-large-numbers, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, math/weak-convergence-prokhorov, measure-theory, radon-nikodym, variational-autoencoders

## Entity: math/lp-spaces
- Title: L^p Spaces
- Category: Measure Theory
- Language: en
- Key Concepts: weak $L^p$ space, Embeddings on Finite Measure Spaces, Sobolev Spaces and Generalizations, Cauchy–Schwarz inequality, Duality: The Riesz Representation Theorem, Hölder's inequality, essential supremum, Sobolev spaces, Hölder's Inequality, complete normed vector space, Minkowski's inequality, Riesz–Fischer Theorem, Riesz representation theorem, Weak $L^p$ Spaces and Marcinkiewicz Interpolation, Marcinkiewicz Interpolation Theorem
- References: functional-analysis, math/conditional-expectation-sigma, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym, sobolev-spaces
- Backlinks: course-math-for-ai, hilbert-banach-spaces, math/differentiation-of-measures, math/harmonic-analysis, math/high-dimensional-statistics, math/lebesgue-integral, math/signed-measures, math/spectral-theory-operators, measure-theory, random-matrices

## Entity: math/lebesgue-integral
- Title: Lebesgue Integral
- Category: Measure Theory
- Language: en
- Key Concepts: Monotone Convergence Theorem (MCT), Simple Functions and Elementary Integration, Extension to Signed and Complex Functions, Approximation Results, Fatou's Lemma, Monotonicity, integrable, Fubini's theorem, Integration of Nonnegative Functions, References, Lebesgue integral, Homogeneity, simple functions, $L^1$ as a Banach Space, Lebesgue Integral
- References: math/borel-cantelli-zero-one, math/conditional-expectation-sigma, math/lp-spaces, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: course-math-for-ai, math/differentiation-of-measures, math/hausdorff-measure, math/lp-spaces, math/product-measures-fubini, math/signed-measures, measure-theory

## Entity: math/product-measures-fubini
- Title: Product Measures and Fubini's Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: measurable with respect to the product σ-algebra, tensor product Hilbert space, Product σ-Algebra, Necessity of Integrability, independent, Convolution., Convolution and Characteristic Functions, Theorem (Tonelli)., Infinite Product Measures and Kolmogorov Extension Theorem, Kolmogorov Extension Theorem., See also:, Definition., Characteristic Functions., Key observation:, Essential properties:
- References: characteristic-functions, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure, math/lebesgue-integral, math/regular-conditional-probability

## Entity: radon-nikodym
- Title: Radon-Nikodym Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: Risk-Neutral Pricing., Chain Rule and Change of Variables, Girsanov Theorem and Measure Change, See also:, Definition., Proof sketch (Hilbert space method)., Conditional Expectation, Essential properties:, σ-finiteness:, Duality of $L^p$ Spaces, Absolute Continuity, $\nu$-almost everywhere, Radon-Nikodym multiplicative functional, Lebesgue Decomposition, Radon-Nikodym Theorem
- References: finance/girsanov-semimartingales, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optimal-transport
- Backlinks: math/differentiation-of-measures, math/hausdorff-measure, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/signed-measures, measure-theory

## Entity: math/regular-conditional-probability
- Title: Regular Conditional Probability
- Category: Measure Theory
- Language: en
- Key Concepts: Regular conditional probability, The Problem with Naive Conditioning, Measurability in the second argument, measure disintegration, conditional probability kernel, Markov Kernels and Stochastic Processes, Theorem (Disintegration on Polish Spaces):, likelihood kernel, Markov kernel, Disintegration of Measures, Markov processes, Conditional Independence and Bayes' Theorem, transition probability, Probability measure in the first argument, Gaussian Conditional Distributions
- References: math/conditional-expectation-sigma, math/density-processes, math/kolmogorov-probability-axioms, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/signed-measures
- Title: Signed Measures and Decomposition Theorems
- Category: Measure Theory
- Language: en
- Key Concepts: Total variation norm, Jordan Decomposition, Mutual singularity, Radon–Nikodym derivative, absolutely continuous, upper and lower variations, [[contiguity-measures|Contiguity of Measures]], Signed Measures and Decomposition Theorems, Applications: Martingale Measure Change and Mathematical Finance, [[lebesgue-integral|Lebesgue Integral]], likelihood ratio, [[radon-nikodym|Radon–Nikodym Theorem]], [[hellinger-processes|Hellinger Processes]], Definition., Finite measures
- References: math/absolute-continuity-process-measures, math/contiguity-measures, math/density-processes, math/hellinger-processes, math/lebesgue-integral, math/lp-spaces, radon-nikodym

## Entity: math/sigma-algebra-measurability
- Title: σ-Algebras and Measurability
- Category: Measure Theory
- Language: en
- Key Concepts: Closure under complements, smallest, Stochastic integral, disjoint, measurable, σ-algebra generated by $X$, σ-Algebras and Measurability, Adaptedness, Power-set σ-algebra, Borel σ-algebra, Connection to information theory, can distinguish, Generated σ-algebra, Definition., σ-algebra
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms
- Backlinks: course-math-for-ai, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/conditional-expectation-sigma, math/differentiation-of-measures, math/discrete-martingales, math/doob-meyer-decomposition, math/hausdorff-measure, math/hellinger-processes, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/topology-basics, measure-theory, radon-nikodym

## Entity: cross-impact
- Title: Cross-Impact Models
- Category: Microstructure
- Language: en
- Key Concepts: Diagonal elements, Principal Components, Cross-Impact Matrix, The No-Arbitrage Condition, eigen-space, Sector factors, Off-diagonal elements, ETF Arbitrage, Visualization: The Cross-Impact Network, Related Topics, Cross-Impact, Market factor, The Mechanism of Cross-Impact, Positive Semi-Definite (PSD), Eigen-Impact and Risk Models
- References: eigenvalues-eigenvectors, finance/random-matrix-theory, kyle-model, market-impact, optimal-execution
- Backlinks: lead-lag-analysis, market-impact, multivariate-hawkes

## Entity: finance/dark-pools
- Title: Dark Pools and Market Fragmentation
- Category: Microstructure
- Language: en
- Key Concepts: Market Fragmentation, Types of Dark Pools, MiFID II Double Volume Cap (EU), Implementation, Related Articles, Dark Pools and Market Fragmentation, Dark Pools, Herfindahl-Hirschman Index
- References: finance/kyle-lambda, finance/pin-easley-ohara, optimal-execution, vpin

## Entity: deep-lob
- Title: Deep LOB (Order Book CNNs)
- Category: Microstructure
- Language: en
- Key Concepts: Spoofing Detection, Liquidity Void Detection, LSTMs, FPGAs, Convolutional Neural Networks (CNNs), Deep LOB, Latency, Visualization: The CNN sliding over LOB, Related Topics, Stationarity, Limit Order Book (LOB), Deep LOB: Convolutional Networks for the Order Book, The Order Book as an Image, Why it Dominates Handcrafted Features, Practical Challenges in Deployment
- References: finance/order-flow-imbalance, modern-quantization, queue-reactive-models
- Backlinks: market-microstructure

## Entity: glosten-milgrom
- Title: Glosten-Milgrom Model
- Category: Microstructure
- Language: en
- Key Concepts: sell, Price Discovery, Visualization: Spread and Information, Informed, bid-ask spread, The Core Intuition, Adverse Selection, Liquidity Externalities, Glosten-Milgrom Model: Adverse Selection Spread, The Bid-Ask Spread, Key Takeaways, buy, Bid-Ask Spread, The Mathematical Mechanism, Related Topics
- References: kyle-model, vpin
- Backlinks: latency-arbitrage, roll-model, spread, vpin

## Entity: lead-lag-analysis
- Title: High-Frequency Lead-Lag Analysis
- Category: Microstructure
- Language: en
- Key Concepts: Visualization: Lag Peak, Positive $\theta$, Cross-Correlation Function, Order Flow Execution, HMM Regime Detection, Hayashi-Yoshida (HY) Estimator, The Epps Effect, Mathematical Detection: The Hayashi-Yoshida Estimator, Finding the Lag ($\theta$), Why Citadel cares, Lead-Lag Analysis, Negative $\theta$, Related Topics, High-Frequency Lead-Lag Analysis, Latency Arbitrage
- References: cross-impact, hmm-particle-filters, latency-arbitrage, vpin
- Backlinks: multivariate-hawkes

## Entity: finance/kyle-lambda
- Title: Kyle's Lambda: The Price Impact Coefficient
- Category: Microstructure
- Language: en
- Key Concepts: Empirical Estimation, Hasbrouck's (1991) Information Share, Multi-Period Extension, Almgren-Chriss Impact Decomposition, Market-maker, Applications, Noise traders, Equilibrium $\lambda$, Market depth, Kyle's Lambda: The Price Impact Coefficient, basis points per million USD, Extensions, Related Articles, market depth decreases toward the close, Kyle's Lambda
- References: amihud-illiquidity, avellaneda-stoikov, finance/order-flow-imbalance, optimal-execution, vpin
- Backlinks: finance/dark-pools, finance/order-flow-imbalance, finance/pin-easley-ohara, finance/repo-market-systemic, finance/vwap-twap, market-microstructure, spread

## Entity: latency-arbitrage
- Title: Latency Arbitrage and Frequent Batch Auctions
- Category: Microstructure
- Language: en
- Key Concepts: The Liquidity Tax, Adverse Selection via Latency, Continuous Limit Order Book (CLOB), Removes the Liquidity Tax, footrace, Frequent Batch Auctions, Kills the Footrace, Related Topics, The Solution: Frequent Batch Auctions (FBA), Visualization: The HFT Race, widening the bid-ask spread, The Flaw of Continuous Time, Latency Arbitrage and Frequent Batch Auctions, single clearing price, Why FBA fixes the market:
- References: glosten-milgrom, smart-order-routing
- Backlinks: lead-lag-analysis, mev

## Entity: market-impact
- Title: Market Impact and Square-root Law
- Category: Microstructure
- Language: en
- Key Concepts: Latent Liquidity, Incoherent, Cross-Impact Matrix, Price Discovery, Cause, Meta-order Slicing, 4. Impact in Advanced Trading, Related Topics, 1. Permanent vs. Temporary Impact, square root, Cross-Impact, Permanent Impact, Information Discovery, Temporary Impact, 2. The Square-root Law
- References: cross-impact, lob-propagators, optimal-execution, smart-order-routing, vpin
- Backlinks: cross-impact, kyle-model, lob-propagators, market-microstructure, spread

## Entity: lob-propagators
- Title: Mechanical Price Discovery: Propagators
- Category: Microstructure
- Language: en
- Key Concepts: Mean Reversion (Decay), The Meaning of G(τ), Visualization: Response to a Trade, sign of the trade, Mechanical Price Discovery and Propagator Models, transient and mechanical, Propagator function, Propagator models, Permanent Impact, The Propagator Equation, Immediate Impact, Mechanical vs. Informational, mechanical, Related Topics, The Efficiency Condition
- References: finance/hawkes-process, market-impact
- Backlinks: market-impact, queue-reactive-models

## Entity: multivariate-hawkes
- Title: Multivariate Hawkes Processes
- Category: Microstructure
- Language: en
- Key Concepts: Flash Crash Detection, The Intensity Matrix, Multivariate Hawkes Processes: Micro-Contagion, Application in Algorithmic Trading, Diagonal elements ($\alpha_{ii}$), Multivariate Hawkes Process, Market Making, Visualization: The Excitation Impulse, Micro-Price Prediction, Related Topics, Off-diagonal elements ($\alpha_{ij}$), The Cross-Excitation Network, Excitation Matrix, cross-excitation
- References: cross-impact, finance/hawkes-process, lead-lag-analysis

## Entity: liquidation-signals
- Title: Optimal Liquidation with Alpha Signals
- Category: Microstructure
- Language: en
- Key Concepts: The Optimal Strategy: Drift-Adjusted Schedulling, Trade Flow (Hawkes), Optimal Liquidation with Alpha Signals, Visualization: Signal-Driven Slicing, Related Topics, Key Signals used in Modern Desks, Urgency, Cross-Asset Signals, Opportunistic Execution, Alpha Signals, LOB Imbalance, Optimal Liquidation with Signals, The Augmented Objective Function
- References: finance/order-flow-imbalance, optimal-execution, vpin

## Entity: finance/order-flow-imbalance
- Title: Order Flow Imbalance and Microprice
- Category: Microstructure
- Language: en
- Key Concepts: Order Flow Imbalance and Microprice, Multi-Level OFI, Stoikov's Generalised Microprice (2018), Motivation, Predictive Model, Order Flow Imbalance, Implementation, Spread-Normalized Skew, Predictive Performance, Related Articles, Order Flow Imbalance (OFI), Microprice, LOB-Based Definition
- References: avellaneda-stoikov, finance/hawkes-process, finance/kyle-lambda, lob-prediction, vpin
- Backlinks: deep-lob, finance/kyle-lambda, finance/vwap-twap, liquidation-signals, market-microstructure, queue-reactive-models

## Entity: vpin
- Title: Order Flow Toxicity and VPIN
- Category: Microstructure
- Language: en
- Key Concepts: The Flash Crash (2010), 4. Why it Matters for AI and HFT, Order Flow Toxicity and VPIN, VPIN, Easley, Lopez de Prado, and O'Hara, Noise Traders, Optimal Execution, High VPIN (> 0.8), A. Volume Bucketing, Related Topics, Informed Traders, "Volume Time.", 2. VPIN: The Mechanism, C. The VPIN Formula, Order Flow Toxicity
- References: finance/pin-easley-ohara, glosten-milgrom, hmm-particle-filters, optimal-execution
- Backlinks: finance/dark-pools, finance/kyle-lambda, finance/order-flow-imbalance, finance/pin-easley-ohara, glosten-milgrom, kyle-model, lead-lag-analysis, liquidation-signals, market-impact, optimal-execution, roll-model

## Entity: finance/pin-easley-ohara
- Title: PIN: Probability of Informed Trading
- Category: Microstructure
- Language: en
- Key Concepts: PIN, EKOP Model, Game structure:, PIN vs VPIN, Implementation, Related Articles, Single-day likelihood, PIN: Probability of Informed Trading, PIN (Probability of Informed Trading)
- References: finance/kyle-lambda, roll-model, vpin
- Backlinks: finance/dark-pools, market-microstructure, vpin

## Entity: queue-reactive-models
- Title: Queue-Reactive Models (LOB Dynamics)
- Category: Microstructure
- Language: en
- Key Concepts: Limit Orders (Arrivals), Queue-Reactive Models of the Limit Order Book, The Physics of the Queue, these rates depend strongly on the current size of the queues, Why HFTs Use It, Visualization: Transition Intensities, Market Making, Related Topics, Limit Order Book (LOB), The "Reactive" Insight, The Micro-Price, Cancellations, Micro-Price, Queue-Reactive Models, Market Orders
- References: finance/hawkes-process, finance/order-flow-imbalance, lob-propagators
- Backlinks: deep-lob

## Entity: smart-order-routing
- Title: Smart Order Routing (SOR)
- Category: Microstructure
- Language: en
- Key Concepts: SOR in Decentralized Finance (DeFi), Price & Volume Analysis:, slippage, MEV Protection:, Gas Optimization:, SOR in Traditional Finance (CeFi), Liquidity Aggregation:, Smart Order Routing (SOR), Related Topics, Multi-hop Paths:, Best Execution, Dynamic Execution:, How SOR Works, Dark Pools
- References: market-microstructure
- Backlinks: amm-mechanics, asset-tokenization, cedefi-mechanics, course-cedefi, cross-chain-interop, latency-arbitrage, market-impact, mev, yield-aggregators

## Entity: kyle-model
- Title: The Kyle Model
- Category: Microstructure
- Language: en
- Key Concepts: market liquidity, Noise Traders, Price Discovery, Market Depth, informed trader, The Equilibrium Solution, The Kyle Model: Strategic Informed Trading, slowly and linearly, Informed Trader, Kyle's Lambda ($\lambda$), Strategic Slowing, The Three Players, Market Maker (MM), Related Topics, Visualization: Insider Hiding
- References: market-impact, optimal-execution, vpin
- Backlinks: cross-impact, glosten-milgrom

## Entity: roll-model
- Title: The Roll Model
- Category: Microstructure
- Language: en
- Key Concepts: 2. The Mathematical Derivation, Zero Covariance, negatively correlated, Visualization: The Bouncing Price, Roll Estimator, Related Topics, Effective Spread, Low-Frequency Data, Informed Trading, effective bid-ask spread, 4. Limitations in Modern Markets, 1. The Bid-Ask Bounce, Hidden Costs, The Roll Model: Estimating the Effective Spread, 3. Why it Matters
- References: amihud-illiquidity, glosten-milgrom, vpin
- Backlinks: finance/pin-easley-ohara

## Entity: finance/vwap-twap
- Title: VWAP and TWAP Execution Algorithms
- Category: Microstructure
- Language: en
- Key Concepts: TWAP, Implementation Shortfall, VWAP, Market VWAP, VWAP and TWAP Execution Algorithms, VWAP (Volume-Weighted Average Price), TWAP (Time-Weighted Average Price), Implementation, Related Articles, Participation algorithm
- References: avellaneda-stoikov, finance/kyle-lambda, finance/order-flow-imbalance, optimal-execution

## Entity: kuramoto-model
- Title: Kuramoto Model
- Category: Nonlinear Dynamics
- Language: en
- Key Concepts: Incoherence, AI Applications, Phase Transition & Order Parameter, 2. Systemic Risk, extreme synchronization, Global Synchrony, Kuramoto Model, Visualization of Synchronization, Overview, Artificial Intelligence, Related Topics, Mathematical Framework, Finance Applications, Finance, 1. Market Synchronization & Crises
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
- Key Concepts: Overview, Mechanism

## Entity: momentum-optimization
- Title: Momentum in Optimization
- Category: Optimization
- Language: en
- Key Concepts: Update Rule, Overview

## Entity: regularization-math
- Title: Regularization
- Category: Optimization
- Language: en
- Key Concepts: Overview, L1 and L2, L2 (Ridge):, L1 (Lasso):

## Entity: sgd-variants
- Title: Stochastic Gradient Descent
- Category: Optimization
- Language: en
- Key Concepts: RMSProp:, Vanilla SGD:, Overview, Adam:, Variants
- References: convex-optimization

## Entity: weight-initialization
- Title: Weight Initialization
- Category: Optimization
- Language: en
- Key Concepts: Xavier/Glorot Initialization:, Techniques, He (Kaiming) Initialization:, Overview

## Entity: ads-cft
- Title: AdS/CFT & Holographic Principle
- Category: Physics
- Language: en
- Key Concepts: Why AdS/CFT is trusted, Impact, Anti-de Sitter space, AdS/CFT, $\mathcal N = 4$ super Yang-Mills theory with gauge group $SU(N)$, entanglement [[gravitational-entropy|entropy]], Maldacena's conjecture, The Ryu-Takayanagi formula, Beyond AdS: celestial holography, AdS/CFT & Holographic Principle, timelike boundary, type IIB string theory on AdS$_5 \times S^5$, The holographic idea, [[celestial-holography]], holographic principle
- References: black-hole-soft-hair, bms-group, celestial-holography, conformal-field-theory, general-relativity, gravitational-entropy, hawking-radiation, information-paradox, large-gauge-transformations, pasterski-triangle, soft-theorems
- Backlinks: black-hole-thermodynamics, gravitational-entropy, hawking-radiation, information-paradox

## Entity: anomalies
- Title: Anomalies
- Category: Physics
- Language: en
- Key Concepts: trace anomaly, non-renormalisation theorem, The general picture, Anomalies, Scale / trace anomaly, Gravitational and mixed anomalies, Why anomalies matter, Gauge anomalies and the Standard Model, Anomaly matching and 't Hooft's constraint, anomaly matching, Related Topics, Spontaneously, The chiral anomaly, Explicitly, anomaly-free
- References: gauge-theory-yang-mills, goldstone-modes, noether-theorem, path-integral, renormalization-group, ward-identities
- Backlinks: math/banach-tarski, renormalization-group

## Entity: asymptotic-spacetime
- Title: Asymptotic Spacetime
- Category: Physics
- Language: en
- Key Concepts: Visualization, ADM mass, Vacuum degeneracy, Connections to Information Theory & Holography, Peeling property, Key Properties, Conformal structure, Bondi-Sachs mass loss, Theoretical Foundation, Physical Interpretation, See Also, Mathematical Formulation, Asymptotic Spacetime
- References: asymptotic-symmetries, bms-group, celestial-holography, math/differential-geometry
- Backlinks: gravitational-waves-gr, math/non-euclidean-geometry, scattering-amplitudes

## Entity: asymptotic-symmetries
- Title: Asymptotic Symmetries
- Category: Physics
- Language: en
- Key Concepts: Matching conditions, Visualization, Infinite vacuum degeneracy, Connections to Information Theory & Holography, Key Properties, Superrotation charges, Theoretical Foundation, Mathematical Formulation, Physical Interpretation, Asymptotic Symmetries, Large vs. small gauge transformations, See Also, Electromagnetic analogy
- References: bms-group, celestial-holography, soft-theorems
- Backlinks: asymptotic-spacetime, black-hole-soft-hair, bms-group, celestial-holography, goldstone-modes, group-theory, information-paradox, large-gauge-transformations, noether-theorem, pasterski-triangle, pauli-exclusion-quantization, soft-theorems, ward-identities

## Entity: bms-group
- Title: BMS Group
- Category: Physics
- Language: en
- Key Concepts: Goldstone interpretation, Visualization, BMS Group, Infinite vacuum degeneracy, Celestial sphere action, Connections to Information Theory & Holography, Key Properties, Theoretical Foundation, Physical Interpretation, Memory effect, Ward identity = Soft theorem, See Also, Mathematical Formulation, Prerequisites
- References: asymptotic-symmetries, celestial-holography, group-theory, pasterski-triangle
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, conformal-field-theory, gravitational-waves-gr, group-theory, large-gauge-transformations, math/non-euclidean-geometry, noether-theorem, pasterski-triangle, spin-memory, ward-identities

## Entity: information-paradox
- Title: Black Hole Information Paradox
- Category: Physics
- Language: en
- Key Concepts: Open questions, Soft hair, The Page curve, unitary, Statement of the paradox, Replica wormholes and the island formula, Remnants., black hole information paradox, Black Hole Information Paradox, The island formula, Page curve, Information is lost., Black hole complementarity, Firewall, Why it matters
- References: ads-cft, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, general-relativity, gravitational-entropy, hawking-radiation, pasterski-triangle, path-integral, qft-basic
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, hawking-radiation, large-gauge-transformations, math/godel-incompleteness

## Entity: black-hole-soft-hair
- Title: Black Hole Soft Hair
- Category: Physics
- Language: en
- Key Concepts: Visualization: [[gravitational-entropy|Entropy]] Scaling, Black Hole Soft Hair, Prerequisites, Infinite degeneracy, Connections to Information Theory & Holography, Key Properties, Limitations, Zero energy, Theoretical Foundation, Physical Interpretation, Horizon vs. infinity, The Area Law of [[gravitational-entropy|Entropy]], See Also, Mathematical Formulation, Electromagnetic hair
- References: asymptotic-symmetries, bms-group, celestial-holography, gravitational-entropy, gravitational-memory, soft-theorems
- Backlinks: ads-cft, information-paradox, large-gauge-transformations, memory-effects, quantum-entanglement, spin-memory

## Entity: black-hole-thermodynamics
- Title: Black Hole Thermodynamics
- Category: Physics
- Language: en
- Key Concepts: Bekenstein-Hawking entropy, The Firewall Paradox, Hawking Temperature, generalised second law, Hawking's Area Theorem (Second Law), Connection to Holography, Related Topics, 2nd, 1st, Penrose process, The Penrose Process, 3rd, information paradox, Entropy vs Mass Chart, holographic principle
- References: ads-cft, general-relativity, gravitational-entropy, gravitational-waves-gr, hawking-radiation, information-paradox
- Backlinks: ads-cft-deep, gravitational-entropy, hawking-radiation, quantum-information-entropy

## Entity: celestial-holography
- Title: Celestial Holography
- Category: Physics
- Language: en
- Key Concepts: Loop corrections, Visualization, Connections to Information Theory & Holography, Key Properties, Continuous spectrum, Theoretical Foundation, Soft theorems as Ward identities, Lorentz = global conformal group, Physical Interpretation, Celestial Holography, See Also, Mathematical Formulation, Prerequisites, $w_{1+\infty}$ symmetry
- References: asymptotic-symmetries, bms-group, conformal-field-theory, gravitational-entropy, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, bms-group, conformal-field-theory, gravitational-entropy, gravitational-waves-gr, group-theory, information-paradox, large-gauge-transformations, math/non-euclidean-geometry, pasterski-triangle, qft-basic, scattering-amplitudes, soft-theorems, spin-memory, wave-particle-duality

## Entity: conformal-field-theory
- Title: Conformal Field Theory (CFT)
- Category: Physics
- Language: en
- Key Concepts: Connections to Information Theory & Holography, Key Properties, Cardy formula, State-operator correspondence, Theoretical Foundation, Mathematical Formulation, Physical Interpretation, Modular invariance, Conformal blocks, See Also, Conformal Field Theory (CFT), Unitarity bounds, Prerequisites
- References: bms-group, celestial-holography, gravitational-entropy, group-theory, qft-basic, quantization, schrodinger-equation
- Backlinks: ads-cft, ads-cft-deep, celestial-holography, kan, renormalization-group, sle

## Entity: dirac-equation
- Title: Dirac Equation
- Category: Physics
- Language: en
- Key Concepts: Dirac Equation, Fine structure of hydrogen., Spin $\tfrac{1}{2}$., Chirality and the Standard Model, Gyromagnetic ratio $g = 2$., As a field theory, quantum field, right-handed, positrons, left-handed, Dirac's problem, Coupling to gauge fields, Related Topics, Spinors and Lorentz transformations, Clifford algebra
- References: gauge-theory-yang-mills, maxwell-electromagnetism, pauli-exclusion-quantization, qft-basic, schrodinger-equation, special-relativity
- Backlinks: gauge-theory-yang-mills, maxwell-electromagnetism

## Entity: fokker-planck-equation
- Title: Fokker-Planck Equation
- Category: Physics
- Language: en
- Key Concepts: Finite elements:, Direct simulation:, probability current, Finite differences:, backward Kolmogorov equation, detailed balance condition, Kramers-Moyal expansion, Derivation from the Kramers-Moyal expansion, Path integral representation, Related Topics, Stationary distribution, Spectral methods:, Fokker-Planck Equation, Ornstein-Uhlenbeck process, Fokker-Planck equation (FP)
- References: brownian-motion, geometric-brownian-motion, math/kolmogorov-equations-ctmc, ornstein-uhlenbeck-process, partial-differential-equations, path-integral, stochastic-differential-equations
- Backlinks: diffusion-models, feynman-kac, neural-operators, nonequilibrium-statmech

## Entity: gauge-theory-yang-mills
- Title: Gauge Theory & Yang-Mills
- Category: Physics
- Language: en
- Key Concepts: gauge bosons are charged under the gauge symmetry and interact with each other, Asymptotic freedom and confinement, Gauge Theory & Yang-Mills, covariant derivative, asymptotic freedom, confines, Related Topics, BRST symmetry, Massless spin-1 particles must couple through a conserved current., Gauge theories, global, ghost fields, Non-abelian case: Yang-Mills, Quantisation: Faddeev-Popov and BRST, Renormalisability.
- References: dirac-equation, goldstone-modes, maxwell-electromagnetism, noether-theorem, path-integral, qft-basic, renormalization-group, ward-identities
- Backlinks: anomalies, connections-curvature, dirac-equation, large-gauge-transformations, lie-groups-algebras, maxwell-electromagnetism, renormalization-group, topological-phases

## Entity: goldstone-modes
- Title: Goldstone Modes
- Category: Physics
- Language: en
- Key Concepts: massless modes, soft-pion theorem, Example., Nambu-Goldstone bosons, non-linear sigma model, vacuum [[differential-geometry|manifold]], spontaneously broken, Goldstone modes of spontaneously broken large gauge transformations and BMS supertranslations, Sketch of the proof., Physical examples, Goldstone's theorem, Related Topics, Goldstone Modes, The Higgs mechanism: eating Goldstones, Weinberg soft theorems
- References: asymptotic-symmetries, math/differential-geometry, noether-theorem, pasterski-triangle, qft-basic, soft-theorems, ward-identities
- Backlinks: anomalies, gauge-theory-yang-mills, large-gauge-transformations

## Entity: gravitational-entropy
- Title: Gravitational Entropy and Holography
- Category: Physics
- Language: en
- Key Concepts: light sheet, The Page Curve, Early times, Gravitational Entropy and Holography, The Island Formula, not, Quantum Extremal Surfaces and Emergent Spacetime, replica wormholes, Ryu-Takayanagi Formula, emergent spacetime from entanglement, Holography Beyond AdS, Related Topics, area, Bousso bound, Bousso-Engelhardt
- References: ads-cft, black-hole-thermodynamics, celestial-holography, general-relativity, hawking-radiation, information-paradox
- Backlinks: ads-cft, black-hole-soft-hair, black-hole-thermodynamics, celestial-holography, conformal-field-theory, hawking-radiation, information-paradox, laws-of-thermodynamics, nonequilibrium-statmech, pauli-exclusion-quantization, quantum-entanglement, quantum-information-entropy, statistical-mechanics, uncertainty-principle

## Entity: gravitational-memory
- Title: Gravitational Memory
- Category: Physics
- Language: en
- Key Concepts: Supertranslation transition, Gravitational Memory, Connections to Information Theory & Holography, Two types, Key Properties, See Also, Theoretical Foundation, Physical Interpretation, Spin memory, DC offset, Mathematical Formulation, Prerequisites, Detectable
- References: gravitational-waves-gr, memory-effects, pasterski-triangle, soft-theorems
- Backlinks: black-hole-soft-hair, gravitational-waves-gr, memory-effects, spin-memory

## Entity: gravitational-waves-gr
- Title: Gravitational Waves & General Relativity
- Category: Physics
- Language: en
- Key Concepts: Peeling, Speed, Gravitational Waves & General Relativity (GR), Connections to Information Theory & Holography, Key Properties, Two polarizations, Quadrupole emission, Strain sensitivity, Theoretical Foundation, Physical Interpretation, See Also, Mathematical Formulation
- References: asymptotic-spacetime, bms-group, celestial-holography, gravitational-memory, math/differential-geometry, pasterski-triangle
- Backlinks: black-hole-thermodynamics, gravitational-memory, hawking-radiation, math/non-euclidean-geometry

## Entity: group-theory
- Title: Group Theory
- Category: Physics
- Language: en
- Key Concepts: Visualization, Schur's lemma, Connections to Information Theory & Holography, Group Theory in Physics, Key Properties, Spontaneous symmetry breaking, Theoretical Foundation, Representation theory of the Poincaré group, Anomalies, Physical Interpretation, Applications in Machine Learning, See Also, Mathematical Formulation, Peter-Weyl theorem
- References: asymptotic-symmetries, bms-group, celestial-holography, equivariant-nn, math/differential-geometry, quantum-entanglement
- Backlinks: bms-group, conformal-field-theory, equivariant-nn, noether-theorem, qft-basic

## Entity: hawking-radiation
- Title: Hawking Radiation
- Category: Physics
- Language: en
- Key Concepts: The Trans-Planckian Problem, Hawking Radiation, Out-modes, Virtual Pair Production Near the Horizon, Black Hole Evaporation, Planck spectrum, Related Topics, Bogoliubov transformation, trans-Planckian problem, Connection to the Unruh Effect, Why This Matters, Unruh effect, Hawking Temperature, evaporation timescale, In-modes
- References: ads-cft, black-hole-thermodynamics, general-relativity, gravitational-entropy, gravitational-waves-gr, information-paradox
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, information-paradox

## Entity: uncertainty-principle
- Title: Heisenberg Uncertainty Principle
- Category: Physics
- Language: en
- Key Concepts: Measurement backaction, Generalized uncertainty principle (GUP), Connections to Information Theory & Holography, Key Properties, Theoretical Foundation, Fourier duality, Canonical pairs, Physical Interpretation, Zero-point energy, Heisenberg Uncertainty Principle, See Also, Mathematical Formulation
- References: gravitational-entropy, quantum-entanglement, schrodinger-equation, wave-particle-duality
- Backlinks: wave-particle-duality

## Entity: kolmogorov-arnold-theorem
- Title: Kolmogorov-Arnold Theorem
- Category: Physics
- Language: en
- Key Concepts: Symbolic regression., independently of $f$, a number of neurons that grows with accuracy, Implications for neural networks, learnable univariate functions on edges, curse of dimensionality, Interpretability., Theorem (Kolmogorov, 1957; Arnold, 1957)., exact representation, Decomposition of complexity., Physical applications., negative answer to Hilbert's thirteenth problem, History and original proof, not smooth, Kolmogorov-Arnold Theorem
- References: finance/spectral-analysis, kan, learnable-activations, partial-differential-equations, pinns, transformer-architecture
- Backlinks: kan, learnable-activations

## Entity: large-gauge-transformations
- Title: Large Gauge Transformations
- Category: Physics
- Language: en
- Key Concepts: Large gauge on the horizon: soft hair, Asymptotic charges, Small vs. large, asymptotic charges, instantons, Why this is a big deal, strong CP problem, large, Large Gauge Transformations, small, Spontaneous symmetry breaking of large gauge, Large gauge transformations, [[bms-group|BMS]] group, spontaneously broken, Ward identities = soft theorems
- References: asymptotic-symmetries, black-hole-soft-hair, bms-group, celestial-holography, gauge-theory-yang-mills, goldstone-modes, information-paradox, memory-effects, noether-theorem, pasterski-triangle, soft-theorems, ward-identities
- Backlinks: ads-cft

## Entity: maxwell-electromagnetism
- Title: Maxwell's Electromagnetism
- Category: Physics
- Language: en
- Key Concepts: quantum electrodynamics (QED), Bianchi identity, The equations, Maxwell's equations, Energy, momentum, and radiation, Liénard-Wiechert potentials, Lorentz force, Larmor power, Potentials and gauge invariance, Related Topics, Maxwell's Electromagnetism, Covariant formulation, Lagrangian, From Maxwell to QED, displacement current
- References: dirac-equation, gauge-theory-yang-mills, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes, soft-theorems, special-relativity, ward-identities
- Backlinks: dirac-equation, gauge-theory-yang-mills

## Entity: memory-effects
- Title: Memory Effects
- Category: Physics
- Language: en
- Key Concepts: Visualization, Universality, Connections to Information Theory & Holography, Key Properties, Detectability, Hierarchy, Theoretical Foundation, Infrared origin, Physical Interpretation, See Also, Mathematical Formulation, Prerequisites, Vacuum transitions, Memory Effects
- References: black-hole-soft-hair, gravitational-memory, pasterski-triangle, soft-theorems, spin-memory
- Backlinks: gravitational-memory, large-gauge-transformations, spin-memory

## Entity: noether-theorem
- Title: Noether's Theorem
- Category: Physics
- Language: en
- Key Concepts: Noether's theorem, Quantum Noether, Ward-Takahashi identities, The dictionary of symmetries and charges, conserved current, Global vs. local symmetries, Example: energy from time-translation invariance, Ward identities, Local, Example: electric charge from global phase symmetry, global, Statement, Bianchi identities, Noether's Theorem, large gauge transformations
- References: asymptotic-symmetries, bms-group, group-theory, hamiltonian-mechanics, lagrangian-mechanics, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, math/variational-calculus, maxwell-electromagnetism, path-integral, ward-identities

## Entity: partial-differential-equations
- Title: Partial Differential Equations
- Category: Physics
- Language: en
- Key Concepts: Robin / mixed, Spectral bias in PINNs:, identifying, Stiffness and multiscale structure, Inverse problems, Canonical equations of physics, stiff, Elliptic, Dirichlet, Analytic., Reaction-diffusion systems:, Parabolic, Related Topics, Spectral methods., Partial differential equations (PDEs)
- References: automatic-differentiation, brownian-motion, finance/fractional-fokker-planck, pinns, schrodinger-equation
- Backlinks: automatic-differentiation, convertible-bonds, feynman-kac, fokker-planck-equation, fourier-neural-operators, fredholm-theory, hydrodynamic-limits, kolmogorov-arnold-theorem, math/harmonic-analysis, math/spdes, math/spectral-theory-operators, mckean-vlasov-sdes, neural-operators, numerical-pde-finance, pinns, risk-neutral-valuation, schwartz-distributions

## Entity: pasterski-triangle
- Title: Pasterski's Triangle Theory
- Category: Physics
- Language: en
- Key Concepts: Leg 1 — Soft Theorems $\leftrightarrow$ Asymptotic Symmetries (Ward identities):, Leg 2 — Asymptotic Symmetries $\leftrightarrow$ Memory Effects (vacuum transitions):, Quantum level, Universal, Cross-theory, Connections to Information Theory & Holography, Key Properties, Leg 3 — Memory Effects $\leftrightarrow$ Soft Theorems (Fourier transform):, Subleading triangle, Pasterski's Triangle Theory, Theoretical Foundation, Physical Interpretation, Sub-subleading, See Also, Mathematical Formulation
- References: asymptotic-symmetries, bms-group, celestial-holography, scattering-amplitudes, soft-theorems, spin-memory
- Backlinks: ads-cft, bms-group, goldstone-modes, gravitational-memory, gravitational-waves-gr, information-paradox, large-gauge-transformations, memory-effects, soft-theorems, ward-identities

## Entity: path-integral
- Title: Path Integral Formulation
- Category: Physics
- Language: en
- Key Concepts: classical trajectory, Numerical computation., Symmetries are transparent., The classical limit, Quantum gravity., lattice QFT, Gauge theories and the Faddeev-Popov trick, Related Topics, The basic idea, Manifest Lorentz invariance., Path Integral Formulation, Non-perturbative physics., Ward identities, Caveats, path integral formulation
- References: hamiltonian-mechanics, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes
- Backlinks: anomalies, feynman-kac, fokker-planck-equation, gauge-theory-yang-mills, information-paradox, path-integrals, renormalization-group, statistical-mechanics, ward-identities

## Entity: pauli-exclusion-quantization
- Title: Pauli Exclusion Principle & Quantization
- Category: Physics
- Language: en
- Key Concepts: Fermi pressure, Pauli Exclusion Principle & [[quantization]], Connections to Information Theory & Holography, Key Properties, Atomic shell structure, Cooper pairs, Theoretical Foundation, Physical Interpretation, Anyons, See Also, Exchange interaction, Mathematical Formulation
- References: asymptotic-symmetries, gravitational-entropy, quantization, quantum-entanglement
- Backlinks: dirac-equation, qft-basic

## Entity: qft-basic
- Title: QFT: Basic Level
- Category: Physics
- Language: en
- Key Concepts: Connections to Information Theory & Holography, Key Properties, CPT theorem, Spontaneous symmetry breaking, Optical theorem, Crossing symmetry, Quantum Field Theory (QFT): Basic Level, Theoretical Foundation, Physical Interpretation, See Also, Mathematical Formulation, Renormalization, Prerequisites
- References: celestial-holography, finance/monte-carlo-method, group-theory, pauli-exclusion-quantization, quantization, scattering-amplitudes, schrodinger-equation, wave-particle-duality
- Backlinks: conformal-field-theory, dirac-equation, equivariant-nn, finance/monte-carlo-method, gauge-theory-yang-mills, goldstone-modes, information-paradox, kan, maxwell-electromagnetism, path-integral, quantum-mechanics, renormalization-group, statistical-mechanics, ward-identities

## Entity: quantum-entanglement
- Title: Quantum Entanglement
- Category: Physics
- Language: en
- Key Concepts: Monogamy, Non-locality, Area law, Connections to Information Theory & Holography, Key Properties, Entanglement distillation, Quantum Entanglement, Theoretical Foundation, Physical Interpretation, See Also, Mathematical Formulation, Entanglement as resource
- References: black-hole-soft-hair, finance/random-matrix-theory, finance/shannon-entropy, gravitational-entropy, schrodinger-equation, superposition-collapse
- Backlinks: finance/random-matrix-theory, finance/shannon-entropy, finance/zeta-field, group-theory, linear-spaces-basis, pauli-exclusion-quantization, quantum-information-entropy, quantum-mechanics, superposition-collapse, uncertainty-principle

## Entity: renormalization-group
- Title: Renormalization Group
- Category: Physics
- Language: en
- Key Concepts: Wilson's idea, The Callan-Symanzik equation, asymptotic freedom, renormalization group, non-renormalisable, Asymptotic safety and the space of theories, beta function, asymptotically safe, fixed point, Fixed points and universality, Scalar $\phi^4$., effective field theories, Callan-Symanzik equation, Renormalization Group, Running couplings in QFT
- References: anomalies, conformal-field-theory, gauge-theory-yang-mills, math/spectral-theory-operators, path-integral, qft-basic, ward-identities
- Backlinks: anomalies, effective-field-theory, gauge-theory-yang-mills, many-body-tensor-networks

## Entity: scattering-amplitudes
- Title: Scattering Amplitudes & S-matrix
- Category: Physics
- Language: en
- Key Concepts: Scattering Amplitudes & S-matrix, Connections to Information Theory & Holography, Key Properties, Color decomposition, Collinear limits, On-shell methods, Theoretical Foundation, Physical Interpretation, BCJ duality and double copy, See Also, Soft limits, Mathematical Formulation
- References: asymptotic-spacetime, celestial-holography, soft-theorems
- Backlinks: celestial-holography, equivariant-nn, maxwell-electromagnetism, pasterski-triangle, path-integral, qft-basic, soft-theorems

## Entity: soft-theorems
- Title: Soft Theorems
- Category: Physics
- Language: en
- Key Concepts: Soft Theorems, Quantum corrections, Universality, Color, Connections to Information Theory & Holography, Key Properties, Theoretical Foundation, Physical Interpretation, Soft photon vs. graviton, Infrared divergences, See Also, Mathematical Formulation, Prerequisites
- References: asymptotic-symmetries, celestial-holography, pasterski-triangle, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-symmetries, black-hole-soft-hair, goldstone-modes, gravitational-memory, large-gauge-transformations, maxwell-electromagnetism, memory-effects, noether-theorem, pasterski-triangle, scattering-amplitudes, ward-identities

## Entity: spin-memory
- Title: Spin Memory
- Category: Physics
- Language: en
- Key Concepts: Superrotation Ward identity, Prerequisites, Connections to Information Theory & Holography, Key Properties, Circular orbit detection, Theoretical Foundation, Physical Interpretation, Subleading order, See Also, Amplitude, Mathematical Formulation, Angular momentum signature, Spin Memory
- References: black-hole-soft-hair, bms-group, celestial-holography, gravitational-memory, memory-effects
- Backlinks: memory-effects, pasterski-triangle

## Entity: statistical-mechanics
- Title: Statistical Mechanics
- Category: Physics
- Language: en
- Key Concepts: principle of minimum free energy, Ensembles and fundamental distributions, Applications to machine learning, Free energy minimization as unifying principle, The ergodic hypothesis, Annealing and optimization, Canonical ensemble, Summary, Introduction, Gibbs [[gravitational-entropy|entropy]], Wick rotation, Energy-based models, Boltzmann machines, Boltzmann distribution, Microcanonical ensemble
- References: finance/shannon-entropy, gravitational-entropy, math/ergodic-theorems-birkhoff, path-integral, qft-basic
- Backlinks: bayesian-deep-learning, convergence-of-semimartingales, copulas, energy-based-models, freidlin-wentzell-theory, gaussian-processes, maximum-entropy, nonequilibrium-statmech, sle, variational-autoencoders, wentzell-freidlin

## Entity: superposition-collapse
- Title: Superposition & Collapse
- Category: Physics
- Language: en
- Key Concepts: Macroscopic superpositions, Superposition & Collapse, Connections to Information Theory & Holography, Linearity, No-cloning theorem, Quantum Zeno effect, Key Properties, Theoretical Foundation, Physical Interpretation, Pointer states, See Also, Mathematical Formulation
- References: quantum-entanglement, schrodinger-equation
- Backlinks: quantum-entanglement

## Entity: ward-identities
- Title: Ward Identities
- Category: Physics
- Language: en
- Key Concepts: Asymptotic symmetries and soft theorems, Chiral anomaly, From classical conservation to exact quantum identities, Anomalies, Conformal / trace anomaly, Ward Identities, Ward identities for gauge symmetries: Slavnov-Taylor, Related Topics, Weinberg's soft-photon theorem, QED Ward-Takahashi identity, Ward identities, every soft theorem in scattering is a Ward identity of an asymptotic symmetry, Weinberg's soft-graviton theorem, Subleading soft-graviton theorem, Gauge anomalies
- References: asymptotic-symmetries, bms-group, noether-theorem, pasterski-triangle, path-integral, qft-basic, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, maxwell-electromagnetism, renormalization-group

## Entity: wave-particle-duality
- Title: Wave-Particle Duality
- Category: Physics
- Language: en
- Key Concepts: Wave-Particle Duality, Connections to Information Theory & Holography, Key Properties, Thermal de Broglie wavelength, Complementarity, Delayed-choice experiments, Theoretical Foundation, Matter-wave interferometry, Physical Interpretation, Coherence length, See Also, Mathematical Formulation
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
- Key Concepts: Second Law:, Zeroth Law:, First Law (Conservation of Energy):, Third Law:, The Four Laws
- References: gravitational-entropy

## Entity: maxwells-equations
- Title: Maxwell's Equations
- Category: Physics Foundations
- Language: en
- Key Concepts: Faraday's Law:, Ampère-Maxwell Law:, Overview, Gauss's Law for Magnetism:, Gauss's Law:, Differential Form
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
- Key Concepts: Overview, Mathematical Formulation

## Entity: bayesian-kelly
- Title: Bayesian Kelly Criterion
- Category: Portfolio
- Language: en
- Key Concepts: Visualization: The Kelly Cliff, Bayesian Kelly Criterion and Parameter Uncertainty, expected growth across all possible values of $\mu$, The Flaw of Plug-in Estimates, The Bayesian Solution, Posterior Distribution, Fractional Kelly as a Heuristic, Drawdown Control, mathematical justification for Fractional Kelly, Bayesian Kelly, Related Topics
- References: kelly-criterion, merton-portfolio, variational-inference
- Backlinks: bayesian-inference, kelly-jump-diffusion

## Entity: entropy-pooling
- Title: Entropy Pooling (Meucci)
- Category: Portfolio
- Language: en
- Key Concepts: The Core Concept: Minimum Relative [[shannon-entropy|Entropy]], Options and Non-Linearities, Why Tier-1 Funds Use It, linear, [[shannon-entropy|Entropy]] Pooling, Kullback-Leibler (KL) Divergence, Stress Testing, Ranking Signals, [[shannon-entropy|Entropy]] Pooling: Advanced Portfolio Construction, Prior, Posterior, Convex Optimization, Related Topics, Visualization: Shifting the Distribution, normally distributed
- References: bayesian-black-litterman, convex-optimization-trading, finance/shannon-entropy, financial-entropy
- Backlinks: information-geometry-finance

## Entity: kelly-jump-diffusion
- Title: Kelly Criterion with Jump-Diffusion
- Category: Portfolio
- Language: en
- Key Concepts: The Modified Kelly Formula, jumps, Geometric Brownian Motion (GBM), You are bankrupt., Why Funds Use Fractional Kelly, negative infinity, Jumps, The Jump-Diffusion Setup, The Danger of Continuous Leverage, Kelly Criterion in Jump-Diffusion Models, Jump-Diffusion Kelly, Related Topics, Visualization: The Jump-Aware Curve, The Bankruptcy Constraint
- References: bayesian-kelly, frtb-es, kelly-criterion, merton-jump-diffusion, merton-portfolio

## Entity: merton-portfolio
- Title: Merton's Portfolio Problem
- Category: Portfolio
- Language: en
- Key Concepts: Risky Asset (Stock), Risk Adjustment, Hamilton-Jacobi-Bellman (HJB) Equation, Kelly Criterion Limit, Risk-free Bond, Myopic Behavior, The Elegant Solution, Kelly Criterion, Solving via the HJB Equation, Key Insights from the Formula:, Related Topics, Merton's Portfolio Problem, Risk Premium, Visualization: The Optimal Path, constant
- References: geometric-brownian-motion, kelly-criterion, stochastic-control, stochastic-differential-equations
- Backlinks: bayesian-kelly, kelly-jump-diffusion, path-integral-control

## Entity: nonlinear-shrinkage
- Title: Nonlinear Shrinkage of Covariance
- Category: Portfolio
- Language: en
- Key Concepts: The Eigenvalue Distortion (Marchenko-Pastur), Stability, Visualization: Eigenvalue Cleaning, Linear vs. Nonlinear Shrinkage, Why Citadel Uses It, Nonlinear Shrinkage of Covariance (Ledoit-Wolf), each eigenvalue, Nonlinear Shrinkage (2017), Linear Shrinkage (2004), Nonlinear Shrinkage, Hilbert Transform, Transaction Costs, Robustness, Random Matrix Theory (RMT), Related Topics
- References: eigenvalues-eigenvectors, finance/markowitz-mean-variance, finance/random-matrix-theory, math/spectral-theory-operators

## Entity: universal-portfolios
- Title: Universal Portfolios
- Category: Portfolio
- Language: en
- Key Concepts: Universal Portfolios (Cover's Algorithm), MCMC sampling, Visualization: Catching the Optimum, best constant-rebalanced portfolio (BCRP), Universal Portfolios, sublinear regret, The Guarantee (No Regret), Practical Limitations, Cover's Algorithm, Constant-Rebalanced Portfolio (CRP), Related Topics, ensemble method, The Problem Setup
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
- Key Concepts: Factor Investing & Fama-French Models, See Also
- References: course-quant-trading, portfolio-optimization-and-black-litterman, statistical-arbitrage-and-pairs-trading

## Entity: portfolio-optimization-and-black-litterman
- Title: Portfolio Optimization & Black-Litterman Model
- Category: Portfolio Management
- Language: en
- Key Concepts: 1. Black-Litterman Formula, See Also, Portfolio Optimization & Black-Litterman Model
- References: convex-optimization-in-trading, course-quant-trading, quant-risk-management-var-cvar
- Backlinks: convex-optimization-in-trading, copula-models-and-tail-dependence, factor-investing-and-fama-french, portfolio-risk-decomposition-marginal-var

## Entity: finance/bs-market-self-financing
- Title: (B,S)-Market and Self-Financing Strategies
- Category: Pricing
- Language: en
- Key Concepts: Definition., strategy (portfolio), discounted, Connection to the broader theory, self-financing strategy, (B,S)-Market and Self-Financing Strategies, discrete stochastic integral, admissible, The Model, Self-Financing, Related Articles, Strategy and Capital, Bank account, Admissibility, Risky assets
- References: brownian-motion, finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/self-similarity-fractality, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability, put-call-parity

## Entity: finance/apt-ross
- Title: Arbitrage Pricing Theory (APT)
- Category: Pricing
- Language: en
- Key Concepts: alternative to [[capm|CAPM]], Setup, most assets, Main statement, APT theorem (Ross 1976; Huberman 1982)., weaker but more universal, which, factor zoo problem, Weakness: choice of factors, Arbitrage Pricing Theory (APT), Comparison with CAPM, no asymptotic arbitrage in a large market, first, Related Articles, Proof (idea)
- References: fama-macbeth-regression, finance/alpha-stacking, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/markowitz-mean-variance

## Entity: finance/arbitrage-definition
- Title: Arbitrage and Its Absence
- Category: Pricing
- Language: en
- Key Concepts: first fundamental theorem of financial mathematics (FTAP), Formal Definition, arbitrage opportunity, main filter, Arbitrage and Its Absence, Intuition, A note on realism, modelling axiom, arbitrage-free, Definition 1., discounted, Via discounted increments., Definition 2., Strengthenings and Generalizations, Why bother: the first fundamental theorem
- References: finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models
- Backlinks: cost-of-carry, finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/crr-model, finance/ftap-first-fundamental-theorem

## Entity: finance/asymptotic-arbitrage-large-markets
- Title: Asymptotic Arbitrage and Large Markets
- Category: Pricing
- Language: en
- Key Concepts: large financial market, statistical arbitrage, asymptotic arbitrage of the second kind, Model convergence and contiguity, Definition (AA of the first kind)., Asymptotic arbitrage, Asymptotic Arbitrage and Large Markets, Definition., asymptotic arbitrage, mutual contiguity, Contiguity as a criterion, Practical significance, Theorem (Kabanov-Kramkov, 1994)., Definition (AA of the second kind)., contiguity
- References: black-scholes, fama-macbeth-regression, finance/alpha-stacking, finance/arbitrage-definition, finance/crr-model, finance/ftap-first-fundamental-theorem
- Backlinks: finance/apt-ross, finance/arbitrage-definition, math/weak-convergence-prokhorov

## Entity: finance/asymptotic-expansion-finance
- Title: Asymptotic Expansions in Finance
- Category: Pricing
- Language: en
- Key Concepts: Heat Kernel Expansion, geodesic volatility, Fast calibration, SABR implied volatility formula, Comparison of Methods, Asymptotic Expansions in Finance, Practical Applications, Large/Small Strike Asymptotics (Lee's Moment Formula), Singular Perturbation: Fast Mean-Reverting Stochastic Vol, Asymptotic and perturbation methods, The SABR Formula (Hagan-Woodward), Related Topics, Prerequisites, Small Volatility Expansion, Model intuition
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/dupire-local-vol, finance/sabr-model, heston-model, manifold-learning
- Backlinks: finance/sabr-model

## Entity: avellaneda-stoikov
- Title: Avellaneda-Stoikov Model
- Category: Pricing
- Language: en
- Key Concepts: No adverse selection, Symmetry, Reservation Price vs. Inventory, Limitations:, Avellaneda-Stoikov Model, Equity Market Making, Crypto Market Making, Inventory risk component, Cartea & Jaimungal, reservation price, Time effect, Intuition, Symmetric arrival rates, Bond Market Making, Volatility effect
- References: brownian-motion, cox-process, finance/monte-carlo-method, hidden-markov-models, optimal-execution
- Backlinks: brownian-motion, cox-process, finance/hidden-markov-models, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/order-flow-imbalance, finance/vwap-twap, market-microstructure, spread, stochastic-control

## Entity: finance/bachelier-formula
- Title: Bachelier Formula
- Category: Pricing
- Language: en
- Key Concepts: additive, absolute, arithmetic Brownian motion, multiplicative, "everything in Black-Scholes is already in Bachelier", April 2020 episode, historical predecessor, Comparison with Black-Scholes, naturally, 5 years before, Bachelier as the "small-vol limit" of BS, Bachelier's model, Bachelier Formula, revived, Derivation
- References: attention-mechanisms, black-scholes, brownian-motion, finance/black-scholes-derivations, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, geometric-brownian-motion
- Backlinks: blacks-model, finance/black-scholes-derivations, finance/efficient-market-hypothesis

## Entity: finance/barrier-asian-options
- Title: Barrier and Asian Options
- Category: Pricing
- Language: en
- Key Concepts: Arithmetic Asian Call, Barrier Options, Barrier option types:, Rubinstein-Reiner Formula (Down-and-Out Call, $H < K$), Implementation, Barrier and Asian Options, Exotic options, Asian Options, Geometric Asian, Related Articles, Down-and-Out Call
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/variance-gamma
- Backlinks: brownian-bridge, finance/upper-lower-hedging-prices

## Entity: blacks-model
- Title: Black's Model (1976)
- Category: Pricing
- Language: en
- Key Concepts: Interest rate derivatives, Commodity options, Black's Model (1976), normal, shifted, Derivation Under the Forward Measure, cap, Normal (Bachelier) Variant, Python Implementation, Related Topics, Calibration input, The Black Formula, Applications, Black's model, futures and forward contracts
- References: black-scholes, finance/bachelier-formula, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/sabr-model, finance/swaps, finance/volatility-surface, heston-model
- Backlinks: cost-of-carry, risk-neutral-valuation

## Entity: black-scholes
- Title: Black-Scholes Model
- Category: Pricing
- Language: en
- Key Concepts: Greeks, Stochastic volatility, Black-Scholes Model, Put-Call Parity, Gamma-Theta tradeoff, Continuous hedging, Risk Management, Limitations:, implied volatility, Convertible Bond Pricing, Vol Surface Construction, Practical Applications, No dividends, The Black-Scholes PDE, Limitations & Extensions
- References: brownian-motion, exotic-options, finance/monte-carlo-method, finance/sabr-model, geometric-brownian-motion, heston-model, numerical-pde-finance
- Backlinks: arma-models, automatic-differentiation, bayesian-black-litterman, blacks-model, brownian-motion, change-of-variables, convertible-bonds, convex-optimization-trading, deep-galerkin, dv01, fama-macbeth-regression, feynman-kac, finance/asymptotic-arbitrage-large-markets, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/barrier-asian-options, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/credit-risk-models, finance/crr-model, finance/delta-hedging-practice, finance/dispersion-trading, finance/energy-commodity-derivatives, finance/follmer-schweizer, finance/free-boundary-american, finance/girsanov-semimartingales, finance/heston-model, finance/levy-esscher-continuous, finance/libor-market-model, finance/longstaff-schwartz, finance/merton-jump-diffusion, finance/monte-carlo-method, finance/nelson-siegel-svensson, finance/optimal-stopping-american, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/stefan-problem-american, finance/swaps, finance/variance-swaps-vix, finance/volatility-surface, garman-kohlhagen, geometric-brownian-motion, greeks-options, lln-clt, math/martingale-representation, ml-options-pricing, model-free-rl-factors, multivariable-calculus, numeraire-invariant-hedging, numerical-pde-finance, option-strategies, ornstein-uhlenbeck-process, pinns, put-call-parity, regime-switching-factors, risk-neutral-valuation, sharpe-ratio-statistics, survival-risk-prediction, svi-model, taylor-series, ts-cs-factor-analysis, volatility-arbitrage, volatility-smile

## Entity: finance/bond-options-gaussian
- Title: Bond Options in Gaussian Models
- Category: Pricing
- Language: en
- Key Concepts: exactly the [[black-scholes|Black-Scholes formula]], HJM framework, discount rate, forward measure, negative, Change of measure: the forward measure $T$, Ornstein-Uhlenbeck, Jacobs-Jones formula (1986), observed zero-coupon yield curve, spot martingale measure, calibrated, American, Zero-coupon bond price, asset, Connection to multi-factor models
- References: black-scholes, brownian-motion, dv01, finance/cir-hull-white, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american
- Backlinks: finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/interest-rate-term-structure, finance/libor-market-model, finance/short-rate-models, finance/stefan-problem-american

## Entity: finance/bootstrapping-yield-curve
- Title: Bootstrapping the Yield Curve
- Category: Pricing
- Language: en
- Key Concepts: Curve Sensitivities (Jacobian), Short End: Deposits (O/N to 12M), Input Instruments, Bond relative value, Discount Factors and Zero Rates, Dual-Curve Stripping (Post-2008), Interpolation Methods, Monotone convex, Practical Applications, separate curves, Swap pricing, Bootstrapping the Yield Curve, Related Topics, Prerequisites, Curve trades
- References: finance/bond-options-gaussian, finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, libor-market-model
- Backlinks: finance/nelson-siegel-svensson, finance/swaps, multi-curve-framework

## Entity: finance/capm
- Title: CAPM (Capital Asset Pricing Model)
- Category: Pricing
- Language: en
- Key Concepts: starting point, [[ftap-first-fundamental-theorem|FTAP]], Size, The core equation, first quantitative formula, Beta as a risk metric, CAPM (Capital Asset Pricing Model), single-factor special case, "asset risk premium" = "beta" × "market risk premium", beta remains the standard risk metric, Intertemporal CAPM (ICAPM), Derivation from Markowitz, they all hold the same optimal risky portfolio, Beta vs. return, Alpha is the bread and butter of the active management industry
- References: fama-macbeth-regression, finance/apt-ross, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: finance/apt-ross, finance/efficient-market-hypothesis, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/caps-floors-swaptions
- Title: Caps, Floors and Swaptions
- Category: Pricing
- Language: en
- Key Concepts: cap vol curve, Hull-White to Caps, HJM to the Full Cube, floor, LIBOR Market Model, Swaption vol matrix, Black's Formula for Swaptions, Black (1976) model, cube, cap, Black Vol vs Normal Vol, Black volatility, Caps, Floors and Swaptions, Practical Considerations, Cap-Floor Parity
- References: black-scholes, finance/bond-options-gaussian, finance/sabr-model, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, cost-of-carry, finance/change-of-numeraire, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/change-of-numeraire
- Title: Change of Numeraire
- Category: Pricing
- Language: en
- Key Concepts: Quanto Adjustment, The T-Forward Measure, Identify the payoff, Application to caplets., change of numeraire, Evaluate, Choose the numeraire, numeraire, Compute the Radon-Nikodym derivative, The Swap Measure and Swaptions, Related Topics, Prerequisites, Radon-Nikodym Derivative Between Measures, Standard Numeraire Choices, numeraire-invariance principle
- References: black-scholes, brownian-motion, finance/caps-floors-swaptions, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/complete-incomplete-markets
- Title: Complete and Incomplete Markets. Second Fundamental Theorem
- Category: Pricing
- Language: en
- Key Concepts: Second Fundamental Theorem, or an entire convex set, equivalent martingale measure is unique, Definition., incomplete, What to do on an incomplete market, complete, Complete and Incomplete Markets. Second Fundamental Theorem, completeness, attainable, none, Incomplete:, Complete:, Super-hedging, Mean-square error minimization
- References: finance/bs-market-self-financing, finance/crr-model, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion, heston-model, optional-decomposition
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/crr-model, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: convertible-bonds
- Title: Convertible Bonds
- Category: Pricing
- Language: en
- Key Concepts: Greeks, Par (Face Value), Embedded Features, Structured products, Credit mispricing, call condition, Balanced, Python: Binomial Tree Pricing, Carry, Convertible Regimes, Put feature, convertible bond, Credit-equity relative value, Vega, Hedge fund strategies
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/xva, heston-model, partial-differential-equations
- Backlinks: numerical-pde-finance

## Entity: finance/copula-models
- Title: Copula Models
- Category: Pricing
- Language: en
- Key Concepts: Insurance Cat Bonds, Tail asymmetry, Dimensionality, Gaussian, Portfolio VaR, Copula Estimation, Frank copula, Stationarity, Clayton, Limitations:, lower tail dependence coefficient, Tail Dependence Coefficients, Sklar's Theorem, Gumbel copula, tail dependence
- References: cornish-fisher-cvar, cox-process, extreme-value-theory, finance/value-at-risk, finance/xva

## Entity: cost-of-carry
- Title: Cost of Carry
- Category: Pricing
- Language: en
- Key Concepts: Cost of Carry, Index futures fair value, Options pricing, convexity bias, Backwardation, Reverse cash-and-carry, Index Arbitrage, Stock with continuous dividend yield $q$, Storable asset, Contango, Stock index futures, Stock with discrete dividends, No short-selling constraints, Forward Curves and Term Structure, Python Implementation
- References: blacks-model, finance/arbitrage-definition, finance/caps-floors-swaptions, finance/swaps, finance/xva, risk-neutral-valuation
- Backlinks: finance/swaps

## Entity: finance/crr-model
- Title: Cox-Ross-Rubinstein Binomial Model (CRR)
- Category: Pricing
- Language: en
- Key Concepts: true, discrete delta hedging, Why this matters in practice, Martingale measure, binomial formula, Claim., Model, No-arbitrage condition, Convergence to Black-Scholes, Related Articles, Cox-Ross-Rubinstein Binomial Model (CRR), Replicating portfolio (hedging), complete, working tool, European option price
- References: black-scholes, finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/black-scholes-derivations, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/stefan-problem-american, math/central-limit-theorem, math/discrete-markov-chains, math/optimal-stopping-markov, math/weak-convergence-prokhorov

## Entity: finance/delta-hedging-practice
- Title: Delta Hedging in Practice
- Category: Pricing
- Language: en
- Key Concepts: Gamma Scalping, Greeks-neutral portfolio, Transaction Costs and Leland's Adjustment, Hedging Frequency Optimization, Gap Risk, Model Risk, Vega Hedging and Greeks-Neutral Portfolios, total P&L of a delta-hedged position, Gamma scalping, Delta Hedging in Practice, Python Implementation, The Ideal, Related Topics, Continuous vs Discrete Hedging, Practical Challenges
- References: black-scholes, finance/variance-swaps-vix, finance/volatility-surface, greeks-options, heston-model, option-strategies
- Backlinks: deep-hedging, greeks-options

## Entity: finance/discrete-girsanov-esscher
- Title: Discrete Girsanov and the Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: Discrete Girsanov theorem., Esscher, Girsanov, The Esscher transform: general case, Connection to [[ftap-first-fundamental-theorem|FTAP]], A note on incomplete markets, how, arbitrary, explicit, mean shift, Esscher transform, Discrete Girsanov and the Esscher Transform, Why have both, Related Articles, Idea.
- References: finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion
- Backlinks: finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous

## Entity: finance/dupire-local-vol
- Title: Dupire Local Volatility Model
- Category: Pricing
- Language: en
- Key Concepts: Dupire Equation, Dupire Local Volatility Model, Implementation, Related Articles, calibrated once, Local Volatility (Dupire, 1994), Local Vol vs Stochastic Vol
- References: finance/rough-volatility, finance/sabr-model, finance/variance-swaps, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/black-scholes-derivations, finance/variance-swaps, finance/volatility-surface, lsv-model, volatility-smile

## Entity: finance/efficient-market-hypothesis
- Title: Efficient Market Hypothesis (EMH)
- Category: Pricing
- Language: en
- Key Concepts: Excess volatility, Adaptive Market Hypothesis (AMH), January effect, Connection to the martingale property, there exists, EMH and algorithmic trading, all, Momentum, under the original measure, Adaptive Market Hypothesis, evolutionarily adaptive, Strong form., Herding and bubbles, Semi-strong form., Value anomaly
- References: brownian-motion, fama-macbeth-regression, finance/apt-ross, finance/bachelier-formula, finance/capm, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: causal-inference, finance/apt-ross, finance/capm, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/energy-commodity-derivatives
- Title: Energy & Commodity Derivatives
- Category: Pricing
- Language: en
- Key Concepts: Cooling Degree Days (CDD), Gibson-Schwartz: Stochastic Convenience Yield, Cumulative HDD/CDD, Schwartz One-Factor Model, Electricity Markets, Backwardation, Emission Permits, Weather Derivatives, Regime switching, option on the spread, Mean reversion, Storage as a Real Option, Seasonality, Contango, short-term deviation
- References: black-scholes, brownian-motion, finance/levy-processes, finance/optimal-stopping-american, finance/real-options, finance/swaps
- Backlinks: finance/real-options

## Entity: finance/ftap-first-fundamental-theorem
- Title: First Fundamental Theorem (FTAP)
- Category: Pricing
- Language: en
- Key Concepts: The crucial point:, Theorem (Harrison-Pliska, 1981; Dalang-Morton-Willinger)., risk-neutral measure, First Fundamental Theorem (FTAP), fails, Historical note, Proof idea: necessity ($\Rightarrow$), equivalent martingale measure, conditional Esscher transforms, Statement (discrete case), arbitrage price, Proof idea: sufficiency ($\Leftarrow$), Related Articles, geometric, Construction.
- References: finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/apt-ross, finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/capm, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/efficient-market-hypothesis, finance/girsanov-semimartingales, finance/optimal-stopping-american, finance/self-similarity-fractality, finance/semimartingale-models, finance/stefan-problem-american, finance/upper-lower-hedging-prices, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optional-decomposition, risk-neutral-valuation

## Entity: finance/free-boundary-american
- Title: Free Boundary Problem for American Options
- Category: Pricing
- Language: en
- Key Concepts: Convertible bonds, free boundary problem, Smooth Pasting Conditions, Free Boundary Problem for American Options, The Black-Scholes PDE with Constraint, exercise region, Early Exercise Premium, Connection to Optimal Stopping, Finite Differences (PDE), value matching, Perpetual American Put, Exercise Boundary Shape, Real options, Problem Formulation, Practical Applications
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/longstaff-schwartz, finance/monte-carlo-method
- Backlinks: finance/optimal-stopping-american

## Entity: garman-kohlhagen
- Title: Garman-Kohlhagen Model
- Category: Pricing
- Language: en
- Key Concepts: 25-delta risk reversal, Spot Delta, Corporate hedging, ATM volatility, 25-delta butterfly, Setup and Assumptions, Practical Applications, Put-Call Symmetry in FX, vanna-volga, Central bank intervention, Forward Delta, Garman-Kohlhagen Model, Related Topics, Pricing Formulas, Vanna-Volga Method
- References: black-scholes, greeks-options, heston-model, option-strategies, put-call-parity
- Backlinks: option-strategies, put-call-parity

## Entity: finance/girsanov-semimartingales
- Title: Girsanov's Theorem for Semimartingales
- Category: Pricing
- Language: en
- Key Concepts: re-intensify, Theorem (Jacod-Mémin)., Theorem (Girsanov, 1960)., unchanged, Novikov's condition, Application to Black-Scholes, density process, the same, incompleteness, what exactly, Girsanov's Theorem for Semimartingales, the quadratic variation $C$ is preserved, Invariance of $C$, shifts Brownian motion by a drift, path-wise invariant
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/levy-esscher-continuous, finance/semimartingale-models, finance/shannon-entropy, heston-model
- Backlinks: feynman-kac, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/change-of-numeraire, finance/discrete-girsanov-esscher, finance/hjm-framework, finance/levy-esscher-continuous, finance/semimartingale-models, finance/short-rate-models, innovation-process, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/conditional-expectation-sigma, math/contiguity-measures, math/convergence-stochastic-integrals, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, nonlinear-filtering, radon-nikodym, risk-neutral-valuation

## Entity: finance/hjm-framework
- Title: HJM Framework
- Category: Pricing
- Language: en
- Key Concepts: HJM drift condition, Volatility specification, HJM drift restriction, Calibration, Short-Rate Models as Special Cases, Negative rates, Bond Price Dynamics, Markovian HJM: Ritchken-Sankarasubramanian, Related Topics, Prerequisites, Monte Carlo Implementation, HJM Framework, The LIBOR Market Model Connection, Heath-Jarrow-Morton (HJM) framework, Key Result
- References: brownian-motion, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps, stochastic-differential-equations

## Entity: finance/heston-model
- Title: Heston Model
- Category: Pricing
- Language: en
- Key Concepts: Parameters, Greeks, Volatility, Rough volatility, Structured products, Semi-Analytic Pricing via Characteristic Function, characteristic function, Limitations and Extensions, Carr-Madan method, Calibration, Background, The Feller Condition, Carr-Madan FFT Pricing, Practical Applications, Comparison with Black-Scholes
- References: black-scholes, finance/particle-filter, finance/sabr-model, garch-models, geometric-brownian-motion
- Backlinks: heston-fourier, heston-model

## Entity: finance/interest-rate-term-structure
- Title: Interest Rate Term Structure
- Category: Pricing
- Language: en
- Key Concepts: Curve trading, Interest Rate Term Structure, Monetary policy analysis, Par Rates, Bond relative value, Expectations Hypothesis, Adrian-Crump-Moench (ACM, 2013), bootstrapping, instantaneous forward rate, term premium, zero-coupon (spot) rate, term structure of interest rates, Python Implementation, Preferred Habitat (Modigliani-Sutch, 1966), affine
- References: dv01, finance/bond-options-gaussian, finance/libor-sofr, finance/nelson-siegel-svensson, finance/short-rate-models, finance/swaps
- Backlinks: finance/nelson-siegel-svensson, finance/short-rate-models, multi-curve-framework

## Entity: optional-decomposition
- Title: Kramkov Optional Decomposition
- Category: Pricing
- Language: en
- Key Concepts: Doob-Meyer recap, predictable, self-financing capital, Application to super-hedging, the values of these two problems are equal, Optional decomposition and American options, Overview, every, universal, upper price, surely covers, Related Topics, Proof (sketch), Theorem (Kramkov, Föllmer-Kabanov)., simultaneously under every EMM
- References: finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/complete-incomplete-markets, finance/optimal-stopping-american, finance/upper-lower-hedging-prices, math/backward-sde

## Entity: finance/libor-market-model
- Title: LIBOR Market Model (BGM)
- Category: Pricing
- Language: en
- Key Concepts: Volatility, Volatility and Correlation Parameterization, LIBOR Market Model, Swaption vols, terminal measure, Swaption Pricing — Rebonato's Approximation, CMS products, Practical Applications, Brace-Gatarek-Musiela (BGM) model, Bermudan swaptions, Related Topics, Prerequisites, LIBOR Market Model (BGM), Forward LIBOR Rates, [[stochastic-differential-equations|SDE]] under the Forward Measure
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/monte-carlo-method, finance/swaps, hjm-framework, stochastic-differential-equations

## Entity: lsv-model
- Title: Local Stochastic Volatility (LSV)
- Category: Pricing
- Language: en
- Key Concepts: Local Leverage Function, Local Volatility (LV), Particle Methods (Monte Carlo with interacting particles), The Calibration Nightmare (Particle Methods), Stochastic Volatility (SV) e.g., Heston, The LSV Synthesis, Why Tier-1 Banks Require LSV, Visualization: The Volatility Hierarchy, Related Topics, Local Stochastic Volatility (LSV), The Flaws of Predecessors, Stochastic Volatility (SV), Local Volatility (LV) e.g., Dupire
- References: finance/dupire-local-vol, heston-model, hmm-particle-filters
- Backlinks: mcmc, path-dependent-volatility

## Entity: finance/levy-esscher-continuous
- Title: Lévy Processes and the Continuous Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: Stationary increments, price models with heavy tails and jumps, Compound Poisson process, Continuous-time Esscher transform, Independent increments, Option pricing in Lévy models, exponentially re-weights, Definition., incompleteness, Lévy financial models, Lévy Processes and the Continuous Esscher Transform, Symmetric $\alpha$-stable process, Variance Gamma, cumulant, The Lévy triplet
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/fft, finance/girsanov-semimartingales, finance/semimartingale-models, finance/shannon-entropy, geometric-brownian-motion, heston-model
- Backlinks: finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/semimartingale-models, finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/markowitz-mean-variance
- Title: Markowitz Mean-Variance Portfolio Theory
- Category: Pricing
- Language: en
- Key Concepts: pre-arbitrage, Capital Market Line (CML), heart, "market portfolio", efficient frontier, Historical role, Limitations and extensions, Sharpe ratio, Static., Hierarchical Risk Parity (López de Prado, 2016), a rational investor should jointly optimize expected return and risk, Black-Litterman (1992), Setup, pre-stochastic, Efficient frontier
- References: bayesian-black-litterman, convex-optimization-trading, cornish-fisher-cvar, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/stylized-facts-returns
- Backlinks: convex-analysis, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/stylized-facts-returns, information-geometry-finance, math/law-of-large-numbers, nonlinear-shrinkage, stochastic-control

## Entity: martingale-optimal-transport
- Title: Martingale Optimal Transport
- Category: Pricing
- Language: en
- Key Concepts: Dual Problem (Super-Replication), Why Citadel and Tier-1 Banks Use It, model-free, Related Topics, The Setup: Model-Free Pricing, Connection to Optimal Transport, The Primal and Dual Problems, Primal Problem, Martingale, Visualization: Sand vs. Martingale Sand, Martingale Optimal Transport (MOT), Martingale Optimal Transport
- References: convex-optimization-trading, convexity, martingale, optimal-transport, risk-neutral-valuation
- Backlinks: convexity, martingale

## Entity: finance/nelson-siegel-svensson
- Title: Nelson-Siegel-Svensson Yield Curve Model
- Category: Pricing
- Language: en
- Key Concepts: Calibration, Nelson-Siegel (1987), Bond pricing, Svensson Extension (1994), Central bank publication, Related Articles, XVA, Nelson-Siegel-Svensson Yield Curve Model, Duration management, Instantaneous Forward Rate, Example, Nelson-Siegel-Svensson (NSS), Uses, Typical Curve Shapes
- References: black-scholes, finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/oas, finance/swaps, finance/xva, heston-model
- Backlinks: finance/bootstrapping-yield-curve, finance/cir-hull-white, finance/interest-rate-term-structure, finance/libor-sofr

## Entity: numeraire-invariant-hedging
- Title: Numeraire-Invariant Quadratic Hedging
- Category: Pricing
- Language: en
- Key Concepts: Optimality, Numeraire Invariance, Python: Simulating and Measuring Hedging Error, Limitations and Extensions, Quadratic Hedging, Decomposition additivity, Galtchouk-Kunita-Watanabe (GKW) Decomposition, Connection to delta hedging, Related Topics, Visualization, Numeraire invariance, Minimal Martingale Measure (MMM), Parameter Table, Model dependency, Transaction costs
- References: black-scholes, finance/hierarchical-risk-parity, finance/levy-processes, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/follmer-schweizer

## Entity: optimal-execution
- Title: Optimal Execution: Almgren-Chriss
- Category: Pricing
- Language: en
- Key Concepts: Risk-Neutral ($\lambda \to 0$), Almgren-Chriss model, The Solution: The Efficient Frontier, Price Risk (Volatility), Deep RL Execution, Market Impact, Risk-Averse ($\lambda \to \infty$), The Fundamental Trade-off, Related Topics, Modern Extensions, Expected Cost + Risk Aversion $\times$ Variance, Permanent Impact, Visualization: Trading Trajectories, Exponential Decay, The Mathematical Framework
- References: deep-rl-execution, stochastic-control, vpin
- Backlinks: ai-market-making, amihud-illiquidity, amm-mechanics, avellaneda-stoikov, cross-impact, deep-rl-execution, finance/dark-pools, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/vwap-twap, futures-hedging, kyle-model, liquidation-signals, lob-prediction, market-impact, market-microstructure, path-integral-control, reinforcement-learning, rl-trader, stochastic-control, vpin

## Entity: finance/optimal-stopping-american
- Title: Optimal Stopping and American Options
- Category: Pricing
- Language: en
- Key Concepts: The optimal stopping time, put, Difference from European, The payoff, Definition., optimal stopping problem, Stefan problem, strictly more expensive, supermartingale characterization, free boundary, Optimal Stopping and American Options, at any time, Hedging an American option, stopping time, at every time
- References: black-scholes, finance/crr-model, finance/free-boundary-american, finance/ftap-first-fundamental-theorem, finance/stefan-problem-american, finance/upper-lower-hedging-prices, optional-decomposition
- Backlinks: feynman-kac, finance/crr-model, finance/energy-commodity-derivatives, finance/real-options, finance/stefan-problem-american, math/discrete-martingales, math/optimal-stopping-markov, numerical-pde-finance, optional-decomposition, stochastic-control

## Entity: greeks-options
- Title: Option Greeks
- Category: Pricing
- Language: en
- Key Concepts: Greeks, Second-Order Greeks, Greeks for Exotic Options, Option Greeks, Discrete hedging, Theta, Practical Considerations, Vega, Gamma scalping, Digital options, Rho, Smile effects, Higher-Order Greeks, Related Topics, Gamma
- References: black-scholes, dv01, exotic-options, finance/delta-hedging-practice, geometric-brownian-motion, heston-model, option-strategies, put-call-parity
- Backlinks: finance/delta-hedging-practice, finance/variance-swaps-vix, frtb-sa-mr, garman-kohlhagen, option-strategies, put-call-parity, volatility-smile

## Entity: option-strategies
- Title: Option Strategies
- Category: Pricing
- Language: en
- Key Concepts: Greeks, Butterfly and Condor, Liquidity, Option Strategies, Vol smile, Dividends, Risk Reversal, Margin, Calendar (Time) Spreads, Practical Considerations, diagonal spread, Max profit, Strangle, Bull Call Spread, Ratio Spreads
- References: black-scholes, garman-kohlhagen, greeks-options, heston-model, put-call-parity
- Backlinks: finance/delta-hedging-practice, garman-kohlhagen, greeks-options, put-call-parity

## Entity: pairs-trading
- Title: Pairs Trading Strategy
- Category: Pricing
- Language: en
- Key Concepts: Win rate, Z-Score, Transaction costs and borrow, Holding period, Limitations and Extensions, Half-Life of Mean Reversion, Pairs Trading Strategy, expected return per trade, Related Topics, Hedge Ratio ($\beta$), Cointegration P-Value, Visualization, Spread Modeling as OU Process, Key Metrics, Cointegration
- References: finance/cointegration, finance/monte-carlo-method, finance/particle-filter, finance/value-at-risk, mcmc, ornstein-uhlenbeck-process
- Backlinks: fastest-mean-reversion, fractional-cointegration, ornstein-uhlenbeck-process, pca-statarb, vine-copulas

## Entity: path-dependent-volatility
- Title: Path-Dependent Volatility
- Category: Pricing
- Language: en
- Key Concepts: Julien Guyon, Local Volatility (LV), 1. The Limitation of Dupire's Model, 3. Calibration via Particle Methods, Interacting Particle System, 2. Models of Julien Guyon, Related Topics, path-dependent exotic options, McKean-Vlasov, Path Signatures, Path-Dependent Volatility (PDV), Running Maximum, Path-Dependent Volatility: Beyond Local Volatility, realized path, Moving Average
- References: hmm-particle-filters, lsv-model, neural-sdes-finance, rough-paths, signature-based-models
- Backlinks: signature-based-models

## Entity: put-call-parity
- Title: Put-Call Parity
- Category: Pricing
- Language: en
- Key Concepts: Put-Call Parity, no-arbitrage band, Implied dividends, Implied interest rate, Case 1, Conversion/reversal arbitrage, Practical Applications, American Options, Synthetic positions, Portfolio B, Dividend-Paying Stocks, Extensions, Model validation, Connection to Greeks, The Core Identity
- References: black-scholes, finance/bs-market-self-financing, garman-kohlhagen, greeks-options, option-strategies
- Backlinks: garman-kohlhagen, greeks-options, option-strategies

## Entity: finance/follmer-schweizer
- Title: Quadratic Hedging and the Föllmer-Schweizer Approach
- Category: Pricing
- Language: en
- Key Concepts: Methods Comparison, Key property, Local Risk-Minimisation (Schweizer 1991), Mean-Variance Hedging, Stochastic volatility, Minimal Martingale Measure (MMM), Cost process, Föllmer-Schweizer Decomposition, Discrete trading, Jumps, Motivation: Incomplete Markets, Minimal Martingale Measure, incomplete markets, Related Articles, Discrete Approximation
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, heston-model, numeraire-invariant-hedging
- Backlinks: finance/complete-incomplete-markets, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: quantum-amplitude-estimation
- Title: Quantum Amplitude Estimation (QAE)
- Category: Pricing
- Language: en
- Key Concepts: quadratic speedup, Quantum Phase Estimation, Quantum Amplitude Estimation (QAE), The Quadratic Speedup, State Preparation, Maximum Likelihood QAE (ML-QAE), How QAE Works, Grover Operator ($\mathcal{Q}$), Near-Term Implementation (NISQ), Visualization: Convergence Speed, Iterative QAE (IQAE), Monte Carlo (MC) Simulation, Quantum Amplitude Estimation (QAE) in Finance, 1,000 times, Related Topics
- References: finance/monte-carlo-method, finance/xva, quantum-math
- Backlinks: quantum-math

## Entity: finance/real-options
- Title: Real Options
- Category: Pricing
- Language: en
- Key Concepts: Real Options, Spanning assumption, Binomial trees, substantial premium, Suboptimal exercise, equilibrium approach, Types of Real Options, dividend-like yield, Real options, Oil exploration, Criticisms and Limitations, Hysteresis: Entry and Exit, NPV vs Real Options, Option to switch, Perpetual Option to Invest
- References: black-scholes, brownian-motion, finance/energy-commodity-derivatives, finance/optimal-stopping-american, finance/swaps, heston-model
- Backlinks: finance/energy-commodity-derivatives

## Entity: risk-neutral-valuation
- Title: Risk-Neutral Valuation
- Category: Pricing
- Language: en
- Key Concepts: Interest rate derivatives, Risk-Neutral Valuation, risk-neutral, $T$-forward measure, The Central Formula, Fundamental Theorems of Asset Pricing, PDE methods, First Fundamental Theorem., Related Topics, unique, Option pricing, Multi-Asset and Numeraire Changes, The Replication Argument, Applications, computational device
- References: black-scholes, blacks-model, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/monte-carlo-method, finance/shannon-entropy, finance/swaps, finance/xva, geometric-brownian-motion, heston-model, math/doleans-dade-exponential, partial-differential-equations
- Backlinks: cost-of-carry, feynman-kac, martingale, martingale-optimal-transport, stochastic-processes

## Entity: finance/sabr-model
- Title: SABR Model
- Category: Pricing
- Language: en
- Key Concepts: Parameters, SABR model, Swaption vol cube, Stochastic Differential Equations, SABR Model, Limitations and Extensions, Background, CMS products, Practical Applications, $\rho$ controls skew, Approximation breaks down, Negative rates, $\nu$ controls smile curvature, Python Implementation, Related Topics
- References: black-scholes, finance/asymptotic-expansion-finance, finance/oas, finance/swaps, heston-model, volatility-forecasting
- Backlinks: black-scholes, blacks-model, finance/asymptotic-expansion-finance, finance/caps-floors-swaptions, finance/dispersion-trading, finance/dupire-local-vol, finance/heston-model, finance/oas, finance/rough-volatility, finance/swaps, finance/volatility-surface, hyperbolic-vol-geometry, volatility-smile

## Entity: finance/semimartingale-models
- Title: Semimartingale Models and Predictable Characteristics
- Category: Pricing
- Language: en
- Key Concepts: [[brownian-motion|Brownian motion]], Semimartingale market models, quadratic variation $C$ is invariant, [[levy-esscher-continuous|Lévy process]], continuous-time analogue of [[ftap-first-fundamental-theorem|FTAP]], Definition., Why this matters, [[geometric-brownian-motion|GBM]], semimartingales, special, minimal, Theorem (NFLVR-FTAP)., semimartingale, Triplet examples, Semimartingale Models and Predictable Characteristics
- References: brownian-motion, cox-process, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/hawkes-process, finance/levy-esscher-continuous, geometric-brownian-motion, heston-model
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, math/triangular-arrays-processes, optional-decomposition

## Entity: finance/black-scholes-derivations
- Title: Several Derivations of the Black-Scholes Formula
- Category: Pricing
- Language: en
- Key Concepts: Derivation 1: BS PDE (replication and hedging), Robustness and weaknesses, What this shows:, classical heat equation, four fundamentally different derivations, that, Idea., replicable, why, Equivalence of derivations, one page, pedagogically transparent, baseline reference, limit of elementary computations, same assumptions
- References: black-scholes, finance/bachelier-formula, finance/crr-model, finance/dupire-local-vol, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american, geometric-brownian-motion, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/free-boundary-american, finance/stefan-problem-american, math/optimal-stopping-markov

## Entity: finance/short-rate-models
- Title: Short Rate Models
- Category: Pricing
- Language: en
- Key Concepts: Connection to HJM, Comparison, Gaussian, Every short rate model implies an HJM model, Affine Bond Pricing, Calibration, Volatility calibration, CIR:, Equilibrium Models, Multi-Factor Extensions, affine, non-negativity, Cox-Ingersoll-Ross (CIR, 1985), Prerequisites, Curve fitting
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/girsanov-semimartingales, finance/interest-rate-term-structure, finance/swaps, stochastic-differential-equations
- Backlinks: finance/caps-floors-swaptions, finance/change-of-numeraire, finance/hjm-framework, finance/interest-rate-term-structure

## Entity: finance/stefan-problem-american
- Title: Stefan Problem and American Options
- Category: Pricing
- Language: en
- Key Concepts: Free-boundary analytics, American call: the trivial case, Exercise region, No closed form for $S^*(t)$ exists., obstacle, Equations, Holding region, Structure of the Stefan problem, PDE form, Stefan Problem and American Options, Stefan problem, free boundary, degenerate, option price, Claim.
- References: black-scholes, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/black-scholes-derivations, finance/bond-options-gaussian, finance/optimal-stopping-american

## Entity: svi-model
- Title: Stochastic Volatility Inspired (SVI) Model
- Category: Pricing
- Language: en
- Key Concepts: $\rho \in [-1, 1]$, Butterfly Arbitrage, Visualization: The Hyperbolic Smile, Eliminating Arbitrage, Stochastic Volatility Inspired (SVI), The Raw SVI Formula, $\sigma > 0$, $m$, SSVI: Surface SVI, Surface SVI (SSVI), Why Parameterize the Surface?, Calendar Arbitrage, $a$, Stochastic Volatility Inspired (SVI) Model, Related Topics
- References: black-scholes, finance/variance-gamma, heston-model

## Entity: finance/swaps
- Title: Types of Swaps
- Category: Pricing
- Language: en
- Key Concepts: Basis risk, swap, Interest Rate Swap (IRS) Valuation, Convexity, DV01, Corporate hedging, Types of Swaps, Key Swap Types, Floating leg, Market risk, Variance Swap, Cross-Currency Swap (CCS), Limitations and Extensions, Asset-liability management, Model risk for exotics
- References: black-scholes, copula-models, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/sabr-model, finance/xva
- Backlinks: blacks-model, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/cir-hull-white, finance/energy-commodity-derivatives, finance/hjm-framework, finance/interest-rate-term-structure, finance/isda-simm, finance/libor-market-model, finance/libor-sofr, finance/nelson-siegel-svensson, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/xva, futures-hedging, risk-neutral-valuation

## Entity: finance/upper-lower-hedging-prices
- Title: Upper and Lower Hedging Prices
- Category: Pricing
- Language: en
- Key Concepts: upper and lower hedging prices, independent, Upper and Lower Hedging Prices, Theorem (price trichotomy)., lower price, upper price, Connection to risk aversion, below, supremum, attainable, Dual characterization, does, Definitions, surely, interval
- References: finance/barrier-asian-options, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, heston-model, optional-decomposition
- Backlinks: finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, optional-decomposition

## Entity: finance/variance-swaps
- Title: Variance Swaps and Volatility Risk Premium
- Category: Pricing
- Language: en
- Key Concepts: Payoff, Carr-Madan Model-Free Replication, Volatility Risk Premium, Implementation, Related Articles, Var Swap vs Vol Swap vs VIX Futures, Variance Swaps and Volatility Risk Premium, variance swap
- References: finance/bipower-variation, finance/dupire-local-vol, heston-model, volatility-forecasting
- Backlinks: finance/dispersion-trading, finance/dupire-local-vol, finance/variance-swaps-vix, finance/volatility-surface

## Entity: volatility-smile
- Title: Volatility Smile
- Category: Pricing
- Language: en
- Key Concepts: Connections and Further Topics, crash risk, Commodity options, 25-delta risk reversal, Stochastic volatility, Why Black-Scholes Fails: Fat Tails and Skewness, Skew Metrics: Risk Reversal, Calibration and the Volatility Surface, Sticky dynamics, Sticky strike, 2. Jump Diffusion ([[merton-jump-diffusion|Merton Jump-Diffusion]]), Theory: Risk-Neutral Density and Breeden-Litzenberger, Negative skew, Definition and Empirical Observation, The smile shape varies by asset class:
- References: black-scholes, finance/dupire-local-vol, finance/rough-volatility, finance/sabr-model, finance/volatility-surface, greeks-options, heston-model, merton-jump-diffusion
- Backlinks: volatility-arbitrage

## Entity: finance/volatility-surface
- Title: Volatility Surface
- Category: Pricing
- Language: en
- Key Concepts: Breeden-Litzenberger, symmetric smile, Practical Calibration Workflow, Term Structure of Skew, skewness, Connection to Risk-Neutral Density: Breeden-Litzenberger, SVI Parameterization (Gatheral), Sticky Strike vs Sticky Delta, The Smile and Skew, flattens with maturity, Local Volatility via Dupire, Lee's moment formula, skew, Sticky strike, Equity indices
- References: black-scholes, finance/dupire-local-vol, finance/sabr-model, finance/variance-swaps, geometric-brownian-motion, heston-model
- Backlinks: blacks-model, finance/delta-hedging-practice, finance/variance-swaps-vix, neural-sdes-finance, volatility-smile

## Entity: algorithmic-execution-twap-vwap
- Title: Algorithmic Execution: TWAP, VWAP & Almgren-Chriss
- Category: Pricing & Execution
- Language: en
- Key Concepts: Market Impact, Algorithmic Execution: TWAP, VWAP & Almgren-Chriss, TWAP:, 2. Almgren-Chriss Model, See Also, Timing Risk, VWAP:, 1. TWAP & VWAP Strategies
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
- Key Concepts: Overview, Mathematical Formulation
- Backlinks: bootstrap, characteristic-functions, convergence-types, distributions-zoo, empirical-processes, finance/coherent-risk-measures, finance/cointegration, finance/quasi-monte-carlo, hypothesis-testing, markov-chebyshev, math/branching-processes, math/concentration-inequalities, math/contiguity-measures, math/coupling-methods, math/ergodic-theorems-birkhoff, math/functional-limit-theorems, math/glivenko-cantelli, math/infinitely-divisible-distributions, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/law-of-large-numbers, math/local-asymptotic-normality, math/local-limit-theorems, math/markov-chain-mixing, math/martingale-clt, math/poisson-approximation, math/random-graphs, math/random-walks, math/skorokhod-topology, math/stein-method, math/triangular-arrays-processes, math/u-statistics, math/weak-convergence-prokhorov, mgf, numerical-methods-jump-diffusions, sampling-distributions, slutsky-theorem

## Entity: exponential-distribution
- Title: Exponential Distribution
- Category: Probability
- Language: en
- Key Concepts: Overview, Mathematical Formulation
- References: poisson-process

## Entity: gamma-beta-functions
- Title: Gamma & Beta Functions
- Category: Probability
- Language: en
- Key Concepts: Overview, Gamma Function, Beta Function

## Entity: projects/j-cole-fall-off
- Title: J. Cole — The Fall Off Review
- Category: Projects
- Language: en
- Key Concepts: Kinetic typography, Design Language, Status, Vite, React 19, brutalist, kinetic typography, J. Cole — The Fall Off Review, TypeScript, Stack, Framer Motion, The Idea, Brutalism

## Entity: projects/llm-wiki
- Title: LLM-Wiki
- Category: Projects
- Language: en
- Key Concepts: The vault, Why this works, Why not [[rag]], Rendering, Three layers, The human, Implementation architecture, compounding artifact, Three operations, Content, Query, Lint, Role separation, The [[llm]], Knowledge Garden
- References: llm, rag

## Entity: projects/music-results-2025
- Title: Music Results 2025
- Category: Projects
- Language: en
- Key Concepts: Design, A personal year-in-music archive, Discoveries, Status, Artists, Plain HTML, GitHub Pages, Structure, Albums, Foreign, `.nojekyll`, Statistics, Videos, Inline CSS + styles.css, Editorial brutalism

## Entity: projects/nyquist
- Title: Nyquist
- Category: Projects
- Language: en
- Key Concepts: Why It's Hard to Build, Compute, Asset managers, Technology, Status, The Name, The Telescope Principle, Async data architecture., Quant traders, Derivatives Pricing, Who It's For, Development, Market Data, Execution & Trading, 89 API routers, 437 HTTP endpoints, 118+ services.

## Entity: projects/ultima-thule
- Title: Ultima Thule
- Category: Projects
- Language: en
- Key Concepts: Why It's Hard to Build, Status, External data, The Dynamic Island contract., Dynamic Island Live Activity, Offline navigation rerouting., AR Navigation, Ultima Thule, The map is a state machine, not a sheet., Development, Travel Stats, Persistence, Expenses, All API keys are server-side., Smart Packing

## Entity: projects/samizdat
- Title: Кто живёт в панельке Хаски?
- Category: Projects
- Language: en
- Key Concepts: Кто живёт в панельке Хаски?, Status, Structure, Palette:, React 19 + TypeScript, Materials, Random rotations:, A brutalist samizdat zine about Russian rap., Hero, Quotes, Vite, Brutal shadows:, GitHub Pages, Tailwind 4, Imprint

## Entity: quant-trading-interview-roadmap
- Title: 30-Day Quant Trading Interview Roadmap
- Category: Quant Trading
- Language: en
- Key Concepts: Days 23–27:, 30-Day Quant Trading Interview Preparation Roadmap, Weekly Roadmap, Days 1–7:, Days 8–15:, Days 16–22:, See Also, Days 28–30:
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
- Key Concepts: Coupon Collector:, Quant Interview Cheat Sheet: Formulas, Distributions & Shortcuts, 1. Key Probability Formulas, Kelly Criterion:, Dice stopping adjustment:, Geometric $Geom(p)$:, See Also, Put-Call Parity:
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
- Key Concepts: Section 3. How to Prepare for Interviews, Section 0. Author's Introduction, 2.2 Internship Structure, Glassdoor & WallStreetOasis, Citadel Securities:, 3.2 Problem Categories, Strategy game problems:, Social Events:, Flow Traders:, Bid Price:, 3.5 Fit Questions, Fermi Problems PDF, quant trading, LeetCode, Asymmetric Information:
- Backlinks: algorithmic-execution-twap-vwap, convex-optimization-in-trading, copula-models-and-tail-dependence, credit-risk-modeling-and-structural-models, crypto-quant-trading-and-amm-curves, cryptographic-zero-knowledge-in-finance, deep-reinforcement-learning-for-trading, exotic-options-and-structured-products, factor-investing-and-fama-french, fixed-income-quant-rates-and-yield-curve, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-stat-arb-lead-lag, high-frequency-trading-and-orderbook, interest-rate-derivatives-swaps-caps-floors, limit-order-book-matching-engine-design, machine-learning-for-quant-trading, market-impact-models-square-root-law, market-microstructure-noise-and-realized-volatility, monte-carlo-option-pricing-and-variance-reduction, optimal-stopping-american-options, optimal-stopping-and-kelly, option-greeks-and-volatility, order-book-dynamics-and-lOB-modeling, portfolio-optimization-and-black-litterman, portfolio-risk-decomposition-marginal-var, quant-brainteasers-handbook, quant-coding-interview-leetcode-patterns, quant-firm-interview-math-brainteasers, quant-firm-interview-playbooks, quant-interview-cheat-sheet, quant-market-making-mechanics, quant-mental-math-tricks-handbook, quant-risk-management-var-cvar, quant-trader-mental-math-rapid-trainer, quant-trading-interview-qna, quant-trading-interview-roadmap, stat-tests-for-trading-strategies, statistical-arbitrage-and-pairs-trading, stochastic-calculus-and-ito-lemma, stochastic-volatility-heston-model, systematic-alpha-research-and-backtesting, volatility-surface-sabr-model, volatility-trading-and-variance-swaps

## Entity: information-geometry-finance
- Title: Information Geometry in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: Application: Portfolio Optimization, Information-Geometric Portfolio Optimization, The Statistical [[manifold-learning|Manifold]], Application: Distance Between Market Regimes, Visualization: Curved Probability Space, Information Geometry, Connection to [[shannon-entropy|Entropy]], Information Geometry in Finance, Regime Shifts, Related Topics, Riemannian [[manifold-learning|Manifold]], Fisher Information Metric (FIM)
- References: entropy-pooling, finance/fisher-transform, finance/markowitz-mean-variance, finance/shannon-entropy, manifold, manifold-learning
- Backlinks: f-divergences, mle

## Entity: path-integral-control
- Title: Path Integral Control in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: High-Dimensional Execution, linear Schrödinger-type PDE, Visualization: The Path Integral, Maximum [[shannon-entropy|Entropy]] RL, The Mathematical Breakthrough, Soft Actor-Critic (SAC), Reinforcement Learning, The Quantum Physics Connection, Applications in High-Frequency Trading, Path Integral Control (Path Integral Differential Dynamic Programming - PI-DDP), Feynman-Kac Theorem, Path Integral Control in Finance, Softmax (or Boltzmann) weighted average, Related Topics
- References: finance/shannon-entropy, merton-portfolio, optimal-execution, quantum-math, reinforcement-learning, stochastic-control

## Entity: quantum-phase-estimation
- Title: Quantum Phase Estimation & Shor's Algorithm
- Category: Quantum
- Language: en
- Key Concepts: Quantum Phase Estimation, Quantum Fourier Transform (QFT), Controlled Unitaries, Inverse QFT, Shor's Algorithm, Initialization, Quantum Phase Estimation & Shor's Algorithm
- References: math/spectral-theory-operators

## Entity: effective-field-theory
- Title: Effective Field Theory (EFT)
- Category: Quantum Physics
- Language: en
- Key Concepts: Related topics, NRQED / NRQCD, Core idea, Effective Field Theory (EFT), Renormalisation, Fermi theory of weak interactions, Naturalness, Chiral perturbation theory, General relativity, Examples, Why it matters, Predictive power without a UV theory
- References: fine-tuning, renormalization-group
- Backlinks: quantum-mechanics

## Entity: many-body-tensor-networks
- Title: Many-Body Problem and Tensor Networks
- Category: Quantum Physics
- Language: en
- Key Concepts: Entanglement, 1. The Exponential Explosion, [[llm]] Compression, DMRG Algorithm, 5. Applications in Machine Learning, B. Projected Entangled Pair States (PEPS), Many-Body Problem and Tensor Networks, Quantum Machine Learning, Hastings' Area Law Theorem (2007), Related Topics, Discrete Spacetime, 4. MERA and the Geometry of Renormalization, Low-Entanglement [[differential-geometry|Manifold]], Bond Dimension ($\chi$), Holographic Principle
- References: llm, math/differential-geometry, quantum-information-entropy, renormalization-group, transformer-architecture
- Backlinks: tensor-decompositions

## Entity: quantum-information-entropy
- Title: Quantum Information and Entropy
- Category: Quantum Physics
- Language: en
- Key Concepts: Holevo's Bound, Quantum Mechanics, 1 bit, Concavity, Holography, Data Processing Inequality, Pure State, 1. The Density Matrix ($\rho$) and Purity, reversible, Quantum Teleportation, Related Topics, Quantum Information and Von Neumann [[gravitational-entropy|Entropy]], Density Matrix, Reduced Density Matrix, Landauer's Principle
- References: ads-cft-deep, black-hole-thermodynamics, finance/shannon-entropy, gravitational-entropy, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ads-cft-deep, gff, linear-spaces-basis, many-body-tensor-networks, quantum-math, quantum-mechanics, topological-phases

## Entity: quantum-mechanics
- Title: Quantum Mechanics
- Category: Quantum Physics
- Language: en
- Key Concepts: Superposition, The Schrödinger Equation, Born's Rule, Quantum Mechanics, Uncertainty Principle, Entanglement, Many-Worlds Interpretation, Operators and Observables, The Wave Function, MRI, Copenhagen Interpretation, Overview, Interpretation of Quantum Mechanics, Lasers, Related Topics
- References: effective-field-theory, math/spectral-theory-operators, qft-basic, quantum-entanglement, quantum-information-entropy, schrodinger-equation
- Backlinks: math/functional-analysis

## Entity: topological-phases
- Title: Topological Phases of Matter
- Category: Quantum Physics
- Language: en
- Key Concepts: Non-Abelian Anyons, Chern Number, Conductance as Topology, immune to local noise, Visualization: The One-Way Street, Anyons, perfectly conducting states on its Edge, Topological Phases, Matrix Rotation, Abelian Anyons, Integer Quantum Hall Effect, 3. The Bulk-Boundary Correspondence, 2. The TKNN Invariant and Chern Numbers, Related Topics, Topological Data Analysis (TDA)
- References: gauge-theory-yang-mills, math/topology-basics, quantum-information-entropy

## Entity: finance/adversarial-stress-testing
- Title: Adversarial Stress Testing
- Category: Risk
- Language: en
- Key Concepts: Dimensionality, Convexity, Generator, GAN-Based Scenario Generation, Limitations:, Stationarity assumption, Practical Applications, Limitations & Extensions, Python Implementation, Sequential adversarial testing, Related Topics, Prerequisites, Mathematical Framework, Key Properties & Assumptions, Wasserstein distance
- References: attention-mechanisms, convex-optimization-trading, copula-models, extreme-value-theory, finance/gan, finance/monte-carlo-method, finance/value-at-risk
- Backlinks: finance/nash-equilibrium, generative-scenario-models

## Entity: amihud-illiquidity
- Title: Amihud Illiquidity Ratio
- Category: Risk
- Language: en
- Key Concepts: Amihud Illiquidity Ratio, Risk Management, Liquidity Risk Factor, Limitations:, Transaction Cost Estimation, Practical Applications, Seasonality, Amihud illiquidity ratio, Availability, Limitations & Extensions, liquidity risk premium, Benchmark sensitivity, Academic Factor Research, Python Implementation, Pastor-Stambaugh (2003) liquidity factor
- References: finance/levy-processes, finance/market-impact-scaling, finance/value-at-risk, optimal-execution, volatility-forecasting
- Backlinks: finance/kyle-lambda, roll-model

## Entity: bayesian-black-litterman
- Title: Bayesian Black-Litterman Portfolio Optimization
- Category: Risk
- Language: en
- Key Concepts: Equity Long/Short, ESG Integration, BL posterior, Limitations:, Subjective Investor Views, [[hierarchical-risk-parity]], Prior dominates with no views, View consistency, Risk Parity, Global Asset Allocation, Practical Applications, Limitations & Extensions, Factor Investing, Shrinkage interpretation, Python Implementation
- References: black-scholes, convex-optimization-trading, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: alpha-factor-discovery, bayesian-inference, convex-optimization-trading, entropy-pooling, finance/markowitz-mean-variance

## Entity: finance/black-swan-scenarios
- Title: Black Swan Scenario Generator
- Category: Risk
- Language: en
- Key Concepts: Generalised Pareto Distribution (GPD), 1. EVT Statistical Extrapolation, Peaks Over Threshold (POT), Use stressed correlations, Best Practices, Never rely solely on VaR, Critical error, Stressed Correlations, black swan scenario generator, Black Swan Scenario Generator, Theoretical Foundation, 2. Scaled Historical Scenarios, Back-test, T-copula, Three Scenario Sources
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/systemic-contagion-debtrank, finance/value-at-risk
- Backlinks: lln-clt

## Entity: finance/cdo-tranches
- Title: CDO Tranches
- Category: Risk
- Language: en
- Key Concepts: Issuance, The Correlation Smile, Liquidity, detachment, compound (implied) correlation, Compound Correlation, zero tail dependence, Collateral, Tail dependence matters, Transparency, Collateralized Debt Obligation (CDO), Remainder, Senior, Tranche Structure, Cash CDOs vs. Synthetic CDOs
- References: copula-models, finance/coherent-risk-measures, finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization, finance/value-at-risk
- Backlinks: finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization

## Entity: cs01
- Title: CS01 (Credit Spread 01)
- Category: Risk
- Language: en
- Key Concepts: Credit DV01, CS02, Basis risk, Convexity, Relative Value, Limitations:, spread convexity, CS02 (spread convexity), Risk Limits, Sign, Factor CS01, bucketed CS01, Practical Applications, Limitations & Extensions, Scenario CS01
- References: copula-models, cox-process, dv01, finance/swaps, finance/xva
- Backlinks: cox-process, dv01, finance/swaps, finance/xva

## Entity: cva-wrong-way-risk
- Title: CVA and Wrong-Way Risk
- Category: Risk
- Language: en
- Key Concepts: expected loss, Wrong-Way Risk (WWR), Credit Valuation Adjustment (CVA), Jump-to-Default Models, Oil Example, Copulas, Related Topics, What is CVA?, Stochastic Correlation, Credit Valuation Adjustment (CVA) and Wrong-Way Risk, Modeling WWR, positively correlated, Right-Way Risk, Wrong-Way Risk, Example
- References: copula-models, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: network-risk-cascades

## Entity: finance/market-impact-scaling
- Title: Capacity & Market Impact Scaling
- Category: Risk
- Language: en
- Key Concepts: Regime dependence, Limitations and Extensions, Backtest Correction, Cross-impact, Market Impact Scaling, Execution Optimization, Alpha Erosion Chart, Intraday volume profile, Related Topics, Mathematical Framework, Non-stationarity of ADV, Square Root Law of Impact, Power-Law Generalization, Parameter Table, Background and Motivation
- References: avellaneda-stoikov, finance/monte-carlo-method, lob-prediction, optimal-execution
- Backlinks: amihud-illiquidity, deep-rl-execution, finance/nash-equilibrium, lob-prediction

## Entity: finance/coherent-risk-measures
- Title: Coherent Risk Measures
- Category: Risk
- Language: en
- Key Concepts: ES is not elicitable, diversification axiom, Conditional VaR, 2. Translation invariance., Basel II, Kusuoka's theorem (2001), Value at Risk, 97.5% Expected Shortfall, not, Basel III / FRTB, Expected Shortfall, Spectral risk measures, convex risk measures, Dual representation, coherent
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, math/law-of-large-numbers
- Backlinks: extreme-value-theory, finance/cdo-tranches, finance/credit-derivatives-cds, frtb-es

## Entity: cornish-fisher-cvar
- Title: Cornish-Fisher CVaR
- Category: Risk
- Language: en
- Key Concepts: Portfolio-level application, Cornish-Fisher adjusted z-score, Validity Conditions, Cornish-Fisher expansion, Modified CVaR (Expected Shortfall), Limitations:, Accuracy breaks down at extremes, Modified VaR, Carry Trade Monitoring, Consistency with normal case, Term-by-term interpretation, Four-moment summary, Monotonicity, Modified VaR (mVaR), Practical Applications
- References: copula-models, extreme-value-theory, finance/levy-processes, finance/value-at-risk, mcmc, volatility-forecasting
- Backlinks: finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/hyperbolic-distributions, finance/isda-simm, finance/markowitz-mean-variance, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, math/large-deviations-cramer

## Entity: finance/credit-derivatives-cds
- Title: Credit Default Swaps
- Category: Risk
- Language: en
- Key Concepts: CDX, CDS Indices, upfront payment, Bootstrapping Hazard Rates, CDS Mechanics, Roll, Single-name vs. index basis, CVA hedging, Python Implementation, Mark-to-Market of an Existing CDS, Credit Default Swap (CDS), basis, Related Topics, cash settlement, Credit hedging
- References: copula-models, finance/cdo-tranches, finance/coherent-risk-measures, finance/credit-risk-models, finance/value-at-risk, finance/xva
- Backlinks: finance/cdo-tranches, finance/credit-migration, finance/credit-risk-models, finance/securitization

## Entity: finance/credit-migration
- Title: Credit Migration and Rating Transitions
- Category: Risk
- Language: en
- Key Concepts: Through-the-Cycle vs Point-in-Time, Rating Momentum, drift, Duration (Hazard Rate) Method, momentum, Typical One-Year Transition Probabilities (%), Asset Value Model, Estimation Methods, Continuous-Time Generator Matrix, Credit migration, Python Implementation, Related Topics, CreditMetrics, Discrete-Time Matrix, Point-in-time (PIT)
- References: copula-models, finance/credit-derivatives-cds, finance/value-at-risk, hidden-markov-models, survival-risk-prediction
- Backlinks: finance/credit-risk-models

## Entity: finance/credit-risk-models
- Title: Credit Risk Models
- Category: Risk
- Language: en
- Key Concepts: state-dependent intensity, Economic intuition, Intensity-Based Framework, reduced-form (intensity) models, Comparison, Reduced-form models, Inputs, Credit Migration Models, Structural Models, Short-term PD, First-Passage Extensions, Structural models, distance to default (DD), Limitations and Extensions, Calibration
- References: black-scholes, copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-migration, finance/value-at-risk, finance/xva, gnn-credit-risk, survival-risk-prediction
- Backlinks: finance/cdo-tranches, finance/credit-derivatives-cds, finance/securitization

## Entity: dv01
- Title: DV01 (Dollar Value of a 01)
- Category: Risk
- Language: en
- Key Concepts: Relationship to Modified Duration, Risk Aggregation, FRTB Capital, Curve Trading, Units, DV01, Limitations:, Interest Rate Swap DV01, OAS DV01, Yield Curve Key-Rate DV01, Practical Applications, PV01, Limitations & Extensions, full price, Asset-Liability Management
- References: black-scholes, brownian-motion, cs01, finance/oas, finance/swaps
- Backlinks: cs01, finance/bond-options-gaussian, finance/interest-rate-term-structure, finance/oas, finance/swaps, futures-hedging, greeks-options

## Entity: finance/dispersion-trading
- Title: Dispersion Trading
- Category: Risk
- Language: en
- Key Concepts: Basis risk, Correlation Risk Premium, correlation risk premium, Dispersion Trading, Risk Management, short index variance, long single-stock variance, Implied Correlation, The Dispersion Trade, left-tail correlation risk, Bank dispersion desks, implied correlation, Gap risk, Practical Applications, Vega-Weighting, Systematic vol strategies
- References: black-scholes, copula-models, finance/sabr-model, finance/value-at-risk, finance/variance-swaps, heston-model
- Backlinks: finance/variance-swaps-vix

## Entity: finance/eigenportfolio-rmt
- Title: Eigenportfolio Construction via RMT
- Category: Risk
- Language: en
- Key Concepts: Subsequent significant vectors, Denoised Optimization, Limitations and Extensions, Eigenvalue Spectrum Visualization, denoised, Style Factors, Eigenportfolio Construction via RMT, Related Topics, Prerequisites, Parameter Reference, Market Factor, Eigenportfolio, Eigenportfolios, Python: Extracting Signal Eigenportfolios, Financial Applications
- References: finance/hierarchical-risk-parity, finance/random-matrix-theory, heston-model, math/spectral-theory-operators
- Backlinks: finance/factor-attribution, finance/gnn-finance, finance/hierarchical-risk-parity, finance/markowitz-mean-variance, finance/random-matrix-theory

## Entity: frtb-sa-mr
- Title: FRTB Standardized Approach (SA-MR)
- Category: Risk
- Language: en
- Key Concepts: B. Vega Risk, 2. Default Risk Charge (DRC), Con, Standardized Approach for Market Risk (SA-MR), FRTB Standardized Approach (SA-MR), Why Banks Hate/Love It, Visualization: Capital Stack under FRTB, A. Delta Risk, 3. Residual Risk Add-on (RRAO), Greeks (Sensitivities), The Core Logic: Sensitivities, FRTB, conservative, Pro, Related Topics
- References: finance/xva, frtb-es, greeks-options

## Entity: frtb-es
- Title: FRTB and Expected Shortfall
- Category: Risk
- Language: en
- Key Concepts: 97.5% confidence level, Expected Shortfall (ES), Visualization: VaR vs. ES, Tail Blindness, Key Features of FRTB, coherent risk measure, 3. Non-Modellable Risk Factors (NMRF), average loss, 2. Standardized vs. Internal Models (IMA), 1. Liquidity Horizons, P&L Attribution (PLA), Liquidity Horizons, Why Replace VaR?, Fundamental Review of the Trading Book (FRTB), FRTB and Expected Shortfall (ES)
- References: extreme-value-theory, finance/coherent-risk-measures, finance/value-at-risk
- Backlinks: clt, frtb-sa-mr, kelly-jump-diffusion, markov-chebyshev, measure-theory

## Entity: finance/frtb
- Title: FRTB: Fundamental Review of the Trading Book
- Category: Risk
- Language: en
- Key Concepts: FRTB: Fundamental Review of the Trading Book, FRTB ES scaled for liquidity horizons, Expected Shortfall, Key Changes vs Basel 2.5, Implementation, P&L Attribution Test (PLA), Related Articles, FRTB Liquidity Horizons, FRTB (Basel IV / BCBS 2019)
- References: cornish-fisher-cvar, extreme-value-theory, finance/isda-simm, finance/value-at-risk

## Entity: finance/factor-attribution
- Title: Factor Risk Attribution and Decomposition
- Category: Risk
- Language: en
- Key Concepts: Ex-Post vs Ex-Ante vs Risk Budgeting, Factor Risk Attribution and Decomposition, Marginal Contribution to Risk (MCTR), Implementation, Factor Risk Decomposition, Related Articles, Brinson-Hood-Beebower (BHB) Decomposition, Percent Contribution to Risk, Factor attribution
- References: fama-macbeth-regression, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, ts-cs-factor-analysis
- Backlinks: alpha-orthogonalization, finance/apt-ross, finance/capm

## Entity: fraud-detection
- Title: Fraud Detection for Transactions
- Category: Risk
- Language: en
- Key Concepts: Undersampling, Graph Neural Networks, Graph fraud rings, F1-Score, False Positive Rate (FPR), KS Statistic, Model Selection, Precision, Concept drift, Mathematical Formulation, Python: Anomaly Detection with Isolation Forest, Limitations and Extensions, Background, Practical Applications, SMOTE (Synthetic Minority Over-sampling Technique)
- References: finance/gan, finance/monte-carlo-method, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: finance/gan, finance/gnn-finance, finance/shap-interpretability, gnn-credit-risk, graph-neural-networks

## Entity: futures-hedging
- Title: Futures Hedging
- Category: Risk
- Language: en
- Key Concepts: Basis and Basis Risk, Basis risk, Futures Hedging, Interest rate hedging, Airline fuel hedging, Futures hedging, Equity Portfolio Hedging, Stack and Roll, Equity portfolio insurance, rolls, Practical Applications, Metallgesellschaft case, Hedge Effectiveness Chart, basis, stacks
- References: dv01, finance/swaps, finance/value-at-risk, geometric-brownian-motion, optimal-execution
- Backlinks: finance/value-at-risk

## Entity: finance/hierarchical-risk-parity
- Title: Hierarchical Risk Parity (HRP)
- Category: Risk
- Language: en
- Key Concepts: Requires Returns Forecast, Sensitivity to Noise, Very High, Crisis resilience, Step 1: Hierarchical Clustering, dendrogram, Limitations and Extensions, No matrix inversion, Matrix Inversion, Low, Practical Applications, The Three Steps of HRP, recursive risk allocation, Why HRP?, Full Python Implementation
- References: finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/value-at-risk, kelly-criterion
- Backlinks: bayesian-black-litterman, convex-optimization-trading, fama-macbeth-regression, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/factor-attribution, finance/markowitz-mean-variance, finance/meta-labeling, finance/random-matrix-theory, model-free-rl-factors, numeraire-invariant-hedging, portfolio-optimization-ml, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis

## Entity: finance/isda-simm
- Title: ISDA SIMM: Standard Initial Margin Model
- Category: Risk
- Language: en
- Key Concepts: ISDA SIMM: Standard Initial Margin Model, Operational Details, 3. Risk-Class Margin, 4. Total SIMM, Risk Classes, Regulatory Context, Implementation (IR Delta), Vega, Vega and Curvature, Architecture, SIMM Calibration, Curvature, Vega margin, Sensitivity Types, Delta
- References: copula-models, cornish-fisher-cvar, finance/swaps, finance/value-at-risk, finance/xva
- Backlinks: finance/frtb, finance/repo-market-systemic

## Entity: kelly-criterion
- Title: Kelly Criterion
- Category: Risk
- Language: en
- Key Concepts: Quarter-Kelly, Algorithmic trading position sizing, The Kelly Formula: Discrete Case, Limitations and Extensions, Venture capital allocation, Background, Practical Applications, Discrete vs. continuous time, Practical constraints, Drawdown Analysis, Sports betting and prediction markets, Parameter estimation risk, Log-Wealth Maximization, Related Topics, Parameter Reference
- References: finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, portfolio-optimization-ml
- Backlinks: bayesian-kelly, finance/hierarchical-risk-parity, finance/pe-fund-metrics, kelly-jump-diffusion, merton-portfolio, universal-portfolios

## Entity: finance/libor-sofr
- Title: LIBOR to SOFR Transition
- Category: Risk
- Language: en
- Key Concepts: LIBOR vs SOFR, LIBOR (London Interbank Offered Rate), Rate Types, SOFR Compounded, Replacement Rates, Implementation, Transition Timeline, ISDA Fixed Spread Adjustments, SOFR In Arrears, Related Articles, Term SOFR, SOFR (Secured Overnight Financing Rate), LIBOR to SOFR Transition
- References: finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, finance/xva
- Backlinks: finance/cir-hull-white, finance/interest-rate-term-structure

## Entity: network-risk-cascades
- Title: Network Models and Default Cascades
- Category: Risk
- Language: en
- Key Concepts: Edges ($E$), Directed Graph, The Eisenberg-Noe Model, DebtRank, The Paradox of Connectivity, Default Cascades and the Domino Effect, Weights ($L_{ij}$), Nodes ($V$), more connectivity can be dangerous, interconnectedness, Default Cascade, Contagion Threshold, Visualization: Network Contagion, DebtRank: Centrality for Risk, Network Models and Default Cascades
- References: cva-wrong-way-risk, finance/repo-market-systemic, finance/systemic-contagion-debtrank

## Entity: finance/oas
- Title: Option-Adjusted Spread (OAS)
- Category: Risk
- Language: en
- Key Concepts: ASW, Spread Decomposition, Why Adjust for Options?, Spread Comparison, G-Spread, Z-Spread, Limitations and Extensions, Python: OAS Calculation via Monte Carlo, OAS stability, Hull-White Model for Rate Path Generation, Multi-factor models, Prepayment model, OAS in Mortgage-Backed Securities (MBS), Related Topics, Mathematical Framework
- References: dv01, finance/longstaff-schwartz, finance/monte-carlo-method, finance/sabr-model
- Backlinks: dv01, finance/nelson-siegel-svensson, finance/sabr-model, finance/securitization

## Entity: portfolio-optimization-ml
- Title: Portfolio Optimization with ML
- Category: Risk
- Language: en
- Key Concepts: Diversification Ratio, efficient frontier, Python: Full HRP Implementation, Concentration, CVaR optimization, Deep RL, Limitations and Extensions, Black-Litterman model, Turnover, Estimation window sensitivity, Financial Context, Sharpe Ratio, Maximum Drawdown, Related Topics, Step 4: Recursive Bisection
- References: finance/gan, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/random-matrix-theory, finance/value-at-risk, math/spectral-theory-operators, mcmc, model-free-rl-factors, transformer-architecture
- Backlinks: convex-optimization-trading, fama-macbeth-regression, finance/pe-fund-metrics, kelly-criterion

## Entity: finance/pe-fund-metrics
- Title: Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve
- Category: Risk
- Language: en
- Key Concepts: PME — Public Market Equivalent, timing, Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve, TVPI = DPI + RVPI = MOIC, DPI (Distributions to Paid-In), The J-Curve, MOIC — Multiple on Invested Capital, DPI and RVPI, IRR limitations, Implementation, Target Benchmarks by Strategy, Core Metrics, Related Articles, IRR — Internal Rate of Return, Example
- References: finance/monte-carlo-method, finance/repo-market-systemic, finance/value-at-risk, kelly-criterion, portfolio-optimization-ml

## Entity: finance/repo-market-systemic
- Title: Repo Market and Systemic Risk
- Category: Risk
- Language: en
- Key Concepts: Primary Reserve Fund, Liquidity Spiral, Haircut, Lessons from the 2008 Crisis, Dodd-Frank / EMIR, Repo Market and Systemic Risk, Mechanics, EU SFTR, Tri-party repo, Cash Flows, Collateral Chains and Rehypothecation, Simulation, FSB haircut floors (2023), General vs Special Collateral, Regulatory Response
- References: extreme-value-theory, finance/isda-simm, finance/kyle-lambda, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: finance/pe-fund-metrics, network-risk-cascades

## Entity: finance/securitization
- Title: Securitization
- Category: Risk
- Language: en
- Key Concepts: Waterfall Structure, prepayment risk, Mortgage-Backed Securities (MBS), Post-Crisis Regulation, Monoline insurance, Senior tranche interest, Securitization, Correlation breakdown, Mechanics, CDO-Squared, EU Securitisation Regulation (2019), waterfall, Mezzanine interest, Subordination, Reserve account
- References: copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-risk-models, finance/oas, finance/value-at-risk
- Backlinks: finance/cdo-tranches

## Entity: sharpe-ratio-statistics
- Title: Statistics of Sharpe Ratios
- Category: Risk
- Language: en
- Key Concepts: Non-spherical distributions, Non-normality matters, Deflated Sharpe Ratio, Probabilistic Sharpe Ratio (PSR), Limitations and Extensions, Jobson-Korkie Test, Background, Mertens Correction for Non-Normal Returns, Practical Applications, Hierarchical testing, Python Implementation, Strategy evaluation, Related Topics, Parameter Reference, Mathematical Framework
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/value-at-risk, hidden-markov-models, mcmc

## Entity: finance/stylized-facts-returns
- Title: Stylized Facts of Financial Returns
- Category: Risk
- Language: en
- Key Concepts: squared, For market making, rule out, multifractal models, Exception:, absolute, returns, power law, 5. Leverage effect, 11. Multifractality, 9. Calendar effects, 6. Aggregational Gaussianity, empirical foundation, 7. Intermittency, correlations between assets jump up
- References: arch-models, copula-models, finance/bipower-variation, finance/capm, finance/efficient-market-hypothesis, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, garch-models, heston-model
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/hyperbolic-distributions, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, math/central-limit-theorem, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: survival-risk-prediction
- Title: Survival-Based Risk Prediction
- Category: Risk
- Language: en
- Key Concepts: Cox Proportional Hazards Model, cumulative hazard function, Accelerated Failure Time (AFT) Models, Survival Curves by Risk Group, Time-Varying Covariates, discrete-time logistic hazard model, cumulative incidence function, Survival and Hazard Functions, Limitations and Extensions, Background, Practical Applications, cause-specific hazard, Concordance (C-statistic), Breslow estimator, Machine learning extensions
- References: black-scholes, copula-models, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/credit-migration, finance/credit-risk-models, gnn-credit-risk

## Entity: convex-optimization-trading
- Title: Systematic Portfolio Trading via Convex Optimization
- Category: Risk
- Language: en
- Key Concepts: Quadratic/quadratic regularization, Covariance estimation, Non-convex constraints, Limitations:, [[bayesian-black-litterman]], [[hierarchical-risk-parity]], Multi-Period Optimization, Non-linear costs, Risk Parity, Practical Applications, Systematic Equity Long/Short, Currency Overlay, Limitations & Extensions, Transaction Cost Models, Scalability
- References: bayesian-black-litterman, black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc, portfolio-optimization-ml
- Backlinks: bayesian-black-litterman, convex-analysis, convexity, entropy-pooling, finance/adversarial-stress-testing, finance/alpha-stacking, finance/markowitz-mean-variance, gradient-hessian-jacobian, lagrange-multipliers, linear-programming, martingale-optimal-transport

## Entity: finance/systemic-contagion-debtrank
- Title: Systemic Risk and DebtRank
- Category: Risk
- Language: en
- Key Concepts: Financial Networks, Stress level, DebtRank, State, DebtRank Algorithm, Systemic Risk and DebtRank, Implementation, Extensions, Relative impact matrix, Propagation, Example, Node States, Related Articles, Comparison with Other Systemic Risk Metrics, Systemic Impact Score
- References: cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/nash-equilibrium, finance/value-at-risk
- Backlinks: cva-wrong-way-risk, finance/black-swan-scenarios, finance/gnn-finance, finance/repo-market-systemic, graph-theory, network-risk-cascades

## Entity: finance/value-at-risk
- Title: Value at Risk (VaR)
- Category: Risk
- Language: en
- Key Concepts: Margin requirements, Formal Definition, Non-subadditivity, Backtesting VaR, Parametric (Variance-Covariance) VaR, Limitations and Extensions, Expected Shortfall (ES), Portfolio construction, Basel IV (FRTB), Practical Applications, coherent risk measure, 1. Historical Simulation, Python Implementation, Three Calculation Methods, Parameter Reference
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/xva, futures-hedging, garch-models
- Backlinks: alternative-data-alpha, amihud-illiquidity, copula-models, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/copula-models, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/frtb, finance/gan, finance/hierarchical-risk-parity, finance/isda-simm, finance/monte-carlo-method, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/quasi-monte-carlo, finance/random-matrix-theory, finance/realized-kernels, finance/securitization, finance/systemic-contagion-debtrank, finance/xva, fraud-detection, frtb-es, futures-hedging, generative-scenario-models, kelly-criterion, llm-financial-analysis, lob-prediction, math/lundberg-cramer-ruin, news-sentiment-trading, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, rl-trader, sharpe-ratio-statistics, student-t-hmm-bond-regimes, volatility-forecasting

## Entity: finance/variance-swaps-vix
- Title: Variance Swaps and the VIX
- Category: Risk
- Language: en
- Key Concepts: Payoff, VIX index, Volatility Risk Premium, Variance Swap vs Volatility Swap, Volatility trading, Variance Swap Mechanics, VIX options, P&L of a Delta-Hedged Option, Model-Free Replication, VIX basis, Python Implementation, Related Topics, variance swap, VIX Derivatives, Dispersion trading
- References: black-scholes, finance/dispersion-trading, finance/variance-swaps, finance/volatility-surface, garch-models, greeks-options
- Backlinks: finance/delta-hedging-practice

## Entity: finance/xva
- Title: XVA (Valuation Adjustments)
- Category: Risk
- Language: en
- Key Concepts: Expected Exposure, Dynamic hedging, CVA, DVA — Debit Valuation Adjustment, FBA, KVA, FCA, DVA, FRTB-CVA, Limitations and Extensions, Background, Practical Applications, XVA Component Summary, Exposure Profile Visualization, XVA netting
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
- Key Concepts: Value at Risk ($VaR_\alpha$):, Quantitative Risk Management: VaR & CVaR, 1. VaR & Expected Shortfall (CVaR), 2. Performance Metrics, Expected Shortfall ($CVaR_\alpha$):, See Also
- References: course-quant-trading, optimal-stopping-and-kelly, statistical-arbitrage-and-pairs-trading
- Backlinks: copula-models-and-tail-dependence, credit-risk-modeling-and-structural-models, portfolio-optimization-and-black-litterman, portfolio-risk-decomposition-marginal-var, stat-tests-for-trading-strategies, statistical-arbitrage-and-pairs-trading

## Entity: deep-rl-execution
- Title: Deep RL for Trade Execution
- Category: Scientific ML
- Language: en
- Key Concepts: Ning et al. (2021), Risk controls, MDP Formulation, Comparison table, Overview, Reward hacking, Action, Cross-venue routing, Python Implementation, Related Topics, Prerequisites, Mathematical Framework, Regulatory constraints, High-frequency liquidation, Implementation Shortfall
- References: finance/market-impact-scaling, finance/shannon-entropy, generative-scenario-models, lob-prediction, optimal-execution, reinforcement-learning, rl-trader, temporal-fusion-transformer
- Backlinks: ai-market-making, alpha-factor-research, ml-options-pricing, offline-rl, optimal-execution, reinforcement-learning, rough-paths, temporal-fusion-transformer, tool-use

## Entity: generative-scenario-models
- Title: Generative Models for Scenario Generation
- Category: Scientific ML
- Language: en
- Key Concepts: VAE Training Objective, Near-zero return autocorrelation, stylised facts, Options pricing and hedging, FinGAN, Diffusion models for equity returns, CVaR accuracy, Variational Autoencoders (VAEs), Distribution Comparison, TimeGAN, Regulatory acceptance, Leverage effect, CCR stress testing, Stylised Facts as Validation Targets, Overview
- References: copula-models, extreme-value-theory, finance/adversarial-stress-testing, finance/monte-carlo-method, finance/value-at-risk, garch-models, generative-models, stochastic-differential-equations, temporal-fusion-transformer
- Backlinks: deep-rl-execution, generative-models, gnn-credit-risk, llm-financial-analysis, market-microstructure, temporal-fusion-transformer

## Entity: gnn-credit-risk
- Title: Graph Neural Networks for Credit Risk
- Category: Scientific ML
- Language: en
- Key Concepts: Graph [[attention-mechanisms|Attention]] Network (GAT), ESG-linked credit, Interpretability, Interbank contagion analysis, Bao et al. (2023), Heterogeneous Credit Graph, Overview, Retail credit fraud, Performance benchmarks, Label scarcity, Scalability, Python Implementation, Related Topics, Prerequisites, Corporate credit rating
- References: attention-mechanisms, copula-models, finance/xva, fraud-detection, generative-scenario-models, graph-neural-networks, llm, llm-financial-analysis, spectral-graph-theory, survival-risk-prediction, transformer-architecture
- Backlinks: finance/credit-risk-models, graph-neural-networks, llm-financial-analysis

## Entity: kan
- Title: Kolmogorov-Arnold Networks (KAN)
- Category: Scientific ML
- Language: en
- Key Concepts: Symbolic regression fragility., Still maturing., Differential equations:, Kolmogorov-Arnold Networks (KAN), refined adaptively, learnable univariate function, Kolmogorov-Arnold Theorem (1957)., Neuroscience:, The two sides of KAN, vs [[transformer-architecture|MLP]]:, Mathematics:, Theorem:, Overview, Symbolic regression interface., Spectral analysis:
- References: attention-mechanisms, conformal-field-theory, equivariant-nn, finance/spectral-analysis, kolmogorov-arnold-theorem, learnable-activations, pinns, qft-basic, transformer-architecture
- Backlinks: kolmogorov-arnold-theorem, learnable-activations, pinns

## Entity: llm-financial-analysis
- Title: LLM for Financial Analysis
- Category: Scientific ML
- Language: en
- Key Concepts: Sentiment classification, Structured Output via JSON Schema Enforcement, Domain-Specific Models, Timeliness, Context window economics, Credit covenant surveillance, Earnings event trading, Overview, [[rag]] Pipeline for SEC Filings, Python Implementation, Hallucination risk, ConvFinQA, Hallucination rates in financial tasks, Related Topics, Mathematical Framework
- References: finance/value-at-risk, fine-tuning, generative-scenario-models, gnn-credit-risk, inference-serving, llm, news-sentiment-trading, rag, temporal-fusion-transformer
- Backlinks: alpha-factor-research, gnn-credit-risk, mcp, ml-options-pricing, nlp-financial-analysis, rag, research/mla-financial-reasoning, temporal-fusion-transformer, tool-use

## Entity: neural-operators
- Title: Neural Operators
- Category: Scientific ML
- Language: en
- Key Concepts: FNO Architecture in Practice, Training and Data Generation, Weather & climate:, Limited to smooth regimes:, Output:, Best for, Lift:, Limitations and Outlook, DeepONet: Branch and Trunk Decomposition, Data hunger:, Complexity:, Extrapolation:, Resolution transfer, Fourier Neural Operators (FNO), See Also
- References: ai-physics/hamiltonian-nn, equivariant-nn, fokker-planck-equation, numerical-pde-finance, partial-differential-equations, pinns, stochastic-differential-equations
- Backlinks: fourier-neural-operators

## Entity: pinns
- Title: Physics-Informed Neural Networks (PINNs)
- Category: Scientific ML
- Language: en
- Key Concepts: Pathological loss landscapes., Stiff PDEs., Heat transfer:, Data assimilation:, Analytical exactness:, Automatic differentiation., Requires known PDE., Spectral bias., Scalability., Overview, Python Implementation, Mesh-free:, Benchmark PDEs:, Related Topics, Mathematical Framework
- References: ai-physics/hamiltonian-nn, automatic-differentiation, black-scholes, equivariant-nn, finance/fractional-fokker-planck, kan, partial-differential-equations, schrodinger-equation
- Backlinks: ai-physics/hamiltonian-nn, automatic-differentiation, deep-ritz-method, equivariant-nn, fourier-neural-operators, gaussian-processes, kan, kolmogorov-arnold-theorem, kuramoto-model, learnable-activations, neural-odes, neural-operators, partial-differential-equations

## Entity: temporal-fusion-transformer
- Title: Temporal Fusion Transformer
- Category: Scientific ML
- Language: en
- Key Concepts: Quantile Loss, Input Taxonomy, Interpretability Surface, LSTM, Stationarity assumption, Sequence encoding, Variable Selection Networks, Temporal [[attention-mechanisms|attention]] patterns, Factor return forecasting, Attention does not equal causation, Macro regime-conditional forecasting, Overview, Gated Residual Network (GRN), Variable selection, Data hunger
- References: arima-models, attention-mechanisms, deep-rl-execution, garch-models, generative-scenario-models, inference-serving, llm-financial-analysis, transformer-architecture, volatility-forecasting
- Backlinks: ai-market-making, alpha-factor-research, deep-rl-execution, generative-scenario-models, llm-financial-analysis, ml-options-pricing, nlp-financial-analysis

## Entity: ar-models
- Title: AR (Autoregressive) Models
- Category: Signal Analysis
- Language: en
- Key Concepts: Autocorrelation Function (ACF), ARCH/GARCH, Volatility Forecasting, lag operator, Limitations:, Market Microstructure, Stationarity requirement, Partial Autocorrelation Function (PACF), Lag selection uncertainty, Stationarity Condition, ACF/PACF Pattern for AR(2), ARIMA, Autoregressive (AR) model, Practical Applications, Innovation representation
- References: arch-models, arima-models, arma-models, finance/levy-processes, finance/spectral-analysis, math/spectral-theory-operators, mcmc, volatility-forecasting
- Backlinks: arch-models, arima-models, arma-models

## Entity: arima-models
- Title: ARIMA (Integrated ARMA)
- Category: Signal Analysis
- Language: en
- Key Concepts: Special cases, Volatility Forecasting, Limitations:, VAR/VECM, ARIMA Models, SARIMA, ARFIMA, Long memory, Augmented Dickey-Fuller (ADF), Practical Applications, Information criteria, Limitations & Extensions, ARIMAX / Transfer Function, Algorithmic Trading, Unit Root Tests
- References: ar-models, arma-models, finance/cointegration, finance/hurst-exponent, finance/levy-processes, mcmc, volatility-forecasting
- Backlinks: ar-models, arma-models, finance/cointegration, temporal-fusion-transformer

## Entity: arma-models
- Title: ARMA (Autoregressive Moving Average)
- Category: Signal Analysis
- Language: en
- Key Concepts: AR models, Volatility Forecasting, Parsimony, Risk Factor Residuals, Limitations:, ACF Comparison: AR(1) vs MA(1) vs ARMA(1,1), Stationarity requirement, State-space / Kalman filter, Box-Jenkins Identification, Spectral density, Long memory, ARIMA, Practical Applications, ARMA-GARCH, Limitations & Extensions
- References: ar-models, arima-models, black-scholes, finance/spectral-analysis, mcmc, volatility-forecasting
- Backlinks: ar-models, arch-models, arima-models

## Entity: finance/dft
- Title: Discrete Fourier Transform (DFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Power Spectral Density (PSD), Periodic extension:, Fixed resolution:, sampling rate, Hann, Interpreting the Coefficients, Blackman, Flat-top, not, Rectangular, Window Comparison, Hamming, Python Implementation, Nyquist–Shannon Sampling Theorem, Discrete Fourier Transform (DFT)
- References: finance/fft, finance/hilbert-huang-transform, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/fft, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fft
- Title: Fast Fourier Transform (FFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: The Butterfly Operation, Linear convolution, butterfly, decimation-in-time (DIT), Digital filtering:, FFTW, Algorithm Variants, FFT vs DFT Speedup, Fast Fourier Transform (FFT), Mixed-radix, Neural networks:, two, Spectral analysis:, Python Implementation, Shor's algorithm:
- References: finance/dft, finance/shor-algorithm, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/dft, finance/hyperbolic-distributions, finance/levy-esscher-continuous, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fisher-transform
- Title: Fisher Transform
- Category: Signal Analysis
- Language: en
- Key Concepts: Visualization: Sharpening the Peaks, Normalisation, Mathematical Formula, Trading Logic, Adaptive Fisher, Lag, Mean-reversion signals, Limitations and Extensions, Practical Applications, Options positioning, Trigger Line, Related Topics, Parameter Reference, Multi-asset ranking, Signal Generation
- References: finance/hilbert-huang-transform, finance/hurst-exponent, finance/spectral-analysis
- Backlinks: finance/hilbert-huang-transform, finance/spectral-analysis, information-geometry-finance

## Entity: finance/hilbert-huang-transform
- Title: Hilbert-Huang Transform (HHT)
- Category: Signal Analysis
- Language: en
- Key Concepts: instantaneous frequency, Hilbert-Huang Spectrum, Ensemble EMD (EEMD), Physical interpretability, Stationarity, Completeness, Market cycle extraction, Stage 1: Empirical Mode Decomposition (EMD), Non-uniqueness, IMF Decomposition Visualization, Time-varying volatility analysis, Related Topics, Parameter Reference, HHT vs. Fourier vs. Wavelets, Financial Applications
- References: finance/fisher-transform, finance/hurst-exponent, finance/spectral-analysis, wavelet-transform
- Backlinks: finance/dft, finance/fisher-transform, finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/realized-kernels
- Title: Intraday Volatility via Realized Kernels
- Category: Signal Analysis
- Language: en
- Key Concepts: Integrated Variance, HAR-RK model, Options pricing, Positive semi-definiteness, Statistical arbitrage, Execution algorithms, Asynchronous trading, Tukey-Hanning Kernel, Optimal Sampling via Signature Plots, Limitations and Extensions, Pre-averaging, Background, Practical Applications, Parzen kernel, Python Implementation
- References: brownian-motion, finance/spectral-analysis, finance/value-at-risk, garch-models, geometric-brownian-motion, volatility-forecasting, wavelet-transform
- Backlinks: finance/bipower-variation, finance/spectral-analysis, finance/wavelet-transform, jump-robust-volatility, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: kalman-filter
- Title: Kalman Filter
- Category: Signal Analysis
- Language: en
- Key Concepts: state-space form, Observation equation:, Python: Full Implementation, Factor model estimation, Log-Likelihood for Parameter Estimation, Practical Financial Applications, state equation, Background, sigma points, Kalman gain, Extensions, Rauch-Tung-Striebel (RTS), Unscented Kalman Filter (UKF), observation equation, Kalman Filter
- References: finance/particle-filter, hidden-markov-models, mcmc, volatility-forecasting
- Backlinks: conditionally-gaussian-processes, factor-graphs-inference, finance/cointegration, finance/hidden-markov-models, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/transformer-timeseries, innovation-process, math/conditional-expectation-sigma, math/sequential-hypothesis-testing, math/spectral-representation-processes, math/stationary-wide-spectral, multivariate-normal-distribution, nonlinear-filtering, state-space-models

## Entity: finance/lempel-ziv-complexity
- Title: Lempel-Ziv Complexity
- Category: Signal Analysis
- Language: en
- Key Concepts: Market Efficiency, Sensitivity to order, Short sequences, Low LZ Complexity, Multidimensional extension, Alternative complexity measures, Limitations and Extensions, Python: LZ Complexity with Rolling Analysis, Practical Applications, Algorithmic Trading, Finite-sample applicability, Market Fragility / Crashes, Related Topics, Lempel-Ziv Complexity (LZ), Mathematical Framework
- References: finance/hurst-exponent, finance/phase-space-reconstruction, finance/shannon-entropy, hidden-markov-models
- Backlinks: finance/hurst-exponent, finance/phase-space-reconstruction, finance/sha-256, finance/shannon-entropy, financial-entropy, kolmogorov-complexity

## Entity: finance/phase-space-reconstruction
- Title: Phase Space Reconstruction
- Category: Signal Analysis
- Language: en
- Key Concepts: Parameter Selection, Chaos vs. Noise, Embedding as features, Stationarity, Lyapunov Exponents and Chaos Detection, Phase Space Reconstruction, embedding dimension, correlation dimension, Noise Sensitivity, Average Mutual Information, Attractor Identification, False Nearest Neighbor (FNN), Embedding Dimension $m$: False Nearest Neighbors, Time Delay $\tau$: Mutual Information Method, Related Topics
- References: finance/hurst-exponent, finance/lempel-ziv-complexity, finance/particle-filter, finance/spectral-analysis, hidden-markov-models
- Backlinks: finance/hidden-markov-models, finance/hurst-exponent, finance/lempel-ziv-complexity

## Entity: finance/prony-hankel-spectral
- Title: Prony's Method and Hankel Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Prony's method, Step 2: Root Finding, Problem Formulation, Comparison with FFT, Regime Interpretation, Hankel SVD Filtering, Implementation, Prony's Method and Hankel Spectral Analysis, Related Articles, Hankel matrix, Algorithm, Step 1: Linear Prediction via Hankel System, Step 3: Amplitude Estimation
- References: finance/hilbert-huang-transform, finance/singular-spectral-analysis, finance/spectral-analysis, fourier-transform, wavelet-transform

## Entity: finance/singular-spectral-analysis
- Title: Singular Spectral Analysis (SSA)
- Category: Signal Analysis
- Language: en
- Key Concepts: Oscillations, Change-point detection, Macro forecasting, Step 2 — Singular Value Decomposition, trajectory matrix, Empirical Orthogonal Functions, Identifiability, Limitations and Extensions, Online SSA, Background, SSA Variance Decomposition, SSA-LRF Forecasting, Practical Applications, Window choice, Singular Spectral Analysis (SSA)
- References: finance/random-matrix-theory, finance/spectral-analysis, math/spectral-theory-operators, volatility-forecasting, wavelet-transform
- Backlinks: finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform

## Entity: finance/spectral-analysis
- Title: Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Power Spectral Density (PSD), Aliasing, Leakage, Business cycle detection, Stationarity requirement, Nonlinear spectra, Power Spectrum Visualization, Limitations and Extensions, Background, Practical Applications, Fast Fourier Transform (FFT), Slepian sequences, Autoregressive (Parametric) Spectral Estimation, Python Implementation, phase spectrum
- References: finance/fisher-transform, finance/hilbert-huang-transform, finance/realized-kernels, finance/singular-spectral-analysis, wavelet-transform
- Backlinks: ar-models, arma-models, convolutional-volatility-resolution-clustering, finance/dft, finance/fft, finance/fisher-transform, finance/hilbert-huang-transform, finance/phase-space-reconstruction, finance/prony-hankel-spectral, finance/realized-kernels, finance/shor-algorithm, finance/singular-spectral-analysis, finance/wavelet-transform, finance/zeta-field, fourier-transform, kan, kolmogorov-arnold-theorem, volatility-modulated-spectral-surface

## Entity: volatility-modulated-spectral-surface
- Title: Volatility-Modulated Spectral Surface (VMSS)
- Category: Signal Analysis
- Language: en
- Key Concepts: Risk decomposition, Volatility-Modulated Transform, persistent spectral patterns, Pseudo-WVD, Multidimensional extension, Interpretation of absolute levels, Circular dependency, Limitations and Extensions, Cross-asset spectral coherence, Background, Resonance Zones, Practical Applications, Resonance zones, adaptive window, volatility-adjusted spectral power
- References: finance/gan, finance/realized-kernels, finance/shannon-entropy, finance/spectral-analysis, garch-models, inference-serving, volatility-forecasting, wavelet-transform
- Backlinks: convolutional-volatility-resolution-clustering

## Entity: finance/wavelet-transform
- Title: Wavelet Transform (CWT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Multi-Scale Wavelet Power, phase angle, admissibility constant, Heisenberg uncertainty, wavelets, power spectrum, Limitations and Extensions, cone of influence (COI), Background, Regime shift detection, Practical Applications, Continuous Wavelet Transform, Discrete Wavelet Transform (DWT), Edge effects, wavelet correlation
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
- Key Concepts: Overview, Formulation
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
- Key Concepts: Overview, Definition

## Entity: bayesian-nonparametrics
- Title: Bayesian Non-parametrics
- Category: Statistical Learning
- Language: en
- Key Concepts: Visualization: Model Growth, Gaussian Processes (GP), Indian Buffet Process (IBP), Automatic Complexity Selection, Stick-Breaking construction, Why Use BNP?, latent feature models, infinite-dimensional, The Dirichlet Process (DP), Flexibility, Bayesian Non-parametrics, Chinese Restaurant Process (CRP), Related Topics, Gaussian Processes, Uncertainty Quantification
- References: gaussian-processes, mixture-of-experts
- Backlinks: gmm

## Entity: dirichlet-processes
- Title: Bayesian Non-parametrics: Dirichlet Processes
- Category: Statistical Learning
- Language: en
- Key Concepts: Applications in Clustering, Mathematical Definition, The Chinese Restaurant Process (CRP), Stick-Breaking Construction, Bayesian Non-parametrics: Dirichlet Processes

## Entity: concentration-of-measure
- Title: Concentration of Measure
- Category: Statistical Learning
- Language: en
- Key Concepts: Concentration of Measure, Rademacher Complexity and Generalization, Talagrand's Concentration Inequality, The Phenomenon, McDiarmid's Inequality

## Entity: sgd-convergence-theory
- Title: Convergence Theory of Stochastic Gradient Descent
- Category: Statistical Learning
- Language: en
- Key Concepts: Problem Formulation, Strong Convexity, Non-Convex Optimization and the PL Condition, Convergence Theory of Stochastic [[convex-optimization|Gradient Descent]], Convex and Smooth Functions
- References: convex-optimization

## Entity: differential-privacy
- Title: Differential Privacy in ML
- Category: Statistical Learning
- Language: en
- Key Concepts: $\delta$, High Noise, Differential Privacy in Machine Learning, Why It Matters, Gradient Clipping, Compliance, Noise Addition, Related Topics, The Definition: (ε, δ)-Privacy, $\epsilon$ (Privacy Budget), Visualization: Privacy Budget vs. Accuracy, membership inference attacks, Robustness, The Privacy-Utility Trade-off, User Trust
- References: ai-theory/adversarial-examples, convex-optimization, federated-learning
- Backlinks: federated-learning

## Entity: gmm
- Title: Gaussian Mixture Models (GMM)
- Category: Statistical Learning
- Language: en
- Key Concepts: Soft Clustering (Responsibilities), responsibility, E-step, soft assignment, The Model Definition, Gaussian Mixture Models (GMM), Visualization: GMM vs K-Means, Fitting the Model: The EM Algorithm, Repeat, Relationship to K-Means, mixing weight, Initialize, M-step, Related Topics
- References: bayesian-nonparametrics, expectation-maximization
- Backlinks: em-algorithm, matrix-calculus

## Entity: kernel-methods-rkhs
- Title: Kernel Methods & RKHS
- Category: Statistical Learning
- Language: en
- Key Concepts: characteristic, reproducing property, Kernel Methods & Reproducing Kernel Hilbert Spaces (RKHS), Mercer's Theorem, Reproducing Kernel Hilbert Space, The Representer Theorem, Kernel Mean Embeddings
- References: math/spectral-theory-operators
- Backlinks: attention-kernel, hilbert-banach-spaces, kde

## Entity: linear-regression
- Title: Linear Regression and Gauss-Markov
- Category: Statistical Learning
- Language: en
- Key Concepts: Zero Mean, 2. Lasso Regression (L1 Penalty), Normal Equation, Homoscedasticity, Linear Regression and the Gauss-Markov Theorem, Gauss-Markov Theorem, BLUE (Best Linear Unbiased Estimator), No Autocorrelation, The Model, Regularization (Ridge and Lasso), Ordinary Least Squares (OLS), exactly zero, Visualization: The Bias-Variance Trade-off, Related Topics, 1. Ridge Regression (L2 Penalty)
- References: bayesian-inference, logistic-regression, mle
- Backlinks: logistic-regression

## Entity: logistic-regression
- Title: Logistic Regression
- Category: Statistical Learning
- Language: en
- Key Concepts: Logistic Regression: The Link Between Stats and Neural Networks, Decision Boundary, Convexity, 4. Modern Scaling, Logistic Function, Odds Ratio, Online Learning, Softmax, Binary Cross-[[shannon-entropy|Entropy]], [[asymptotic-stats/mle|Maximum Likelihood Estimation (MLE)]], 3. Interpretation: Odds and Ratios, Related Topics, 2. Estimation: Cross-[[shannon-entropy|Entropy]] Loss, Linear Hyperplane, Log-Odds
- References: convex-optimization, convexity, finance/shannon-entropy, linear-regression, mle, transformer-architecture
- Backlinks: linear-regression

## Entity: normalizing-flows-math
- Title: Mathematical Foundations of Normalizing Flows
- Category: Statistical Learning
- Language: en
- Key Concepts: Continuous Normalizing Flows (CNFs), Liouville Equation, Mathematical Foundations of Normalizing Flows, Composition of Flows, Change of Variables Theorem

## Entity: mechanism-design
- Title: Mechanism Design
- Category: Statistical Learning
- Language: en
- Key Concepts: "Reverse Game Theory.", Strategy-proofness, Application in AI: Alignment and Governance, Famous Examples, 2. Matching Algorithms (Gale-Shapley), Related Topics, The Revelation Principle, Direct Mechanism, Incentive Compatible (IC), second-highest price, 1. Second-Price Auction (Vickrey Auction), Multi-Agent Systems, AI Alignment, stable, The Goal: Incentive Compatibility
- References: llm, mean-field-games, online-learning-regret, rlhf

## Entity: mcts
- Title: Monte Carlo Tree Search (MCTS)
- Category: Statistical Learning
- Language: en
- Key Concepts: AlphaGo, heuristic evaluation functions, Monte Carlo Tree Search (MCTS), $Q(v)/N(v)$ (Exploitation), AlphaGo and Neural MCTS, Value Network, zero domain knowledge, Policy Network, Simulation (Rollout), Tree Search, Related Topics, $\sqrt{\dots}$ (Exploration), UCT, The Four Stages of MCTS, Why MCTS is Revolutionary
- References: automatic-differentiation, mdp, monte-carlo-integration, multi-armed-bandits
- Backlinks: orm-prm

## Entity: multi-armed-bandits
- Title: Multi-Armed Bandits
- Category: Statistical Learning
- Language: en
- Key Concepts: Exploration vs. Exploitation trade-off, Key Algorithms, Visualization: UCB Action Selection, Exploitation, ad placement, Multi-Armed Bandits, sample, Cumulative Regret, sublinear regret, news recommendation, The Setup, 1. $\epsilon$-Greedy, Regret, 2. UCB (Upper Confidence Bound), Contextual Bandits
- References: bayesian-inference, mdp, online-learning-regret
- Backlinks: mcts

## Entity: naive-bayes
- Title: Naive Bayes Classifier
- Category: Statistical Learning
- Language: en
- Key Concepts: Naive Bayes Classifier: The Power of Independence, Real-time Filtering, Gaussian Naive Bayes, 2. Common Variants, NLP, "Naive" Assumption, 1. The Probabilistic Model, 4. Modern Use Cases in AI, Decision Boundary vs. Probability, Low Variance, Multinomial Naive Bayes, Zero-Shot Baseline, Bernoulli Naive Bayes, class label, Related Topics
- References: bayesian-inference, decision-theory, finance/shannon-entropy, llm, rag
- Backlinks: bayes-theorem

## Entity: online-learning-regret
- Title: Online Learning and Regret
- Category: Statistical Learning
- Language: en
- Key Concepts: The Online Protocol, 1. Follow the Leader (FTL), Regret, Ad Placement, Related Topics, 3. Multiplicative Weights Update (MWU) / Hedge, Optimization, Applications, Exploration-Exploitation Trade-off, Cumulative Regret, learn, Multi-armed Bandits (MAB), Portfolio Selection, Visualization: Regret Scaling, Definition of Regret
- References: convex-optimization, finance/shannon-entropy, math/information-theory, reinforcement-learning
- Backlinks: mechanism-design, multi-armed-bandits, universal-portfolios

## Entity: pca
- Title: Principal Component Analysis (PCA)
- Category: Statistical Learning
- Language: en
- Key Concepts: The Mathematical Objective, Visualization, Principal Component Analysis (PCA), Spectral Theorem Connection, Explained Variance, Noise Reduction, largest eigenvalue, Applications, maximize the variance, unsupervised dimensionality reduction, empirical covariance matrix, eigenvector, SVD (Singular Value Decomposition), principal components, Data Compression
- References: manifold-learning, math/spectral-theory-operators, variational-autoencoders
- Backlinks: alpha-orthogonalization, eigenvalues-eigenvectors, fastest-mean-reversion, matrix-decompositions, multivariate-normal, pca-statarb, tensor-decompositions

## Entity: attention-kernel
- Title: Self-Attention as a Kernel
- Category: Statistical Learning
- Language: en
- Key Concepts: [[convex-optimization|gradient descent]], The Kernel Interpretation, Reproducing Kernel Hilbert Space (RKHS), Transformers as Non-parametric Learners, Self-[[attention-mechanisms|Attention]], Self-[[attention-mechanisms|Attention]] as a Kernel, Kernel Methods, Nadaraya-Watson Kernel Regression, Visualization: Attention Surface in RKHS, Linear Transformers, The [[attention-mechanisms|Attention]] Mechanism, Related Topics, Linear Transformers and Feature Maps, In-Context Learning, feature map
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, kernel-methods-rkhs, state-space-models, transformer-architecture

## Entity: singular-learning-theory
- Title: Singular Learning Theory
- Category: Statistical Learning
- Language: en
- Key Concepts: Resolution of Singularities, Generalization Error, The Free Energy and RLCT, Singular Learning Theory, Real Log Canonical Threshold (RLCT)

## Entity: statistical-mechanics-learning
- Title: Statistical Mechanics of Learning
- Category: Statistical Learning
- Language: en
- Key Concepts: Information-Theoretic vs. Computational Gap:, Gibbs distribution, Key Phenomena, Gardner Volume and Capacity, DERIVATION: The Free Energy of a Linear Perceptron, Replica Symmetry Breaking (RSB):, SAT/UNSAT Transition:, The Replica Trick, Order Parameters and Overlaps, What Is It, Related Topics, Mathematical Framework, Spin-Glass Transition:, The Teacher-Student Setup, capacity
- References: ai-theory/neural-tangent-kernel, information-bottleneck-theory, pac-learning

## Entity: variational-inference-math
- Title: Variational Inference
- Category: Statistical Learning
- Language: en
- Key Concepts: Mean-Field Approximation, Variational Inference, The Reparameterization Trick, The Evidence Lower Bound (ELBO)
- References: convex-optimization
- Backlinks: factor-graphs-inference

## Entity: anova
- Title: ANOVA (One-way/Two-way)
- Category: Statistics
- Language: en
- Key Concepts: Overview, One-way ANOVA:, Two-way ANOVA:, One-way vs Two-way
- Backlinks: sampling-distributions

## Entity: chi-squared-tests
- Title: Chi-Squared Tests
- Category: Statistics
- Language: en
- Key Concepts: Overview, Test Statistic

## Entity: logistic-regression-math
- Title: Logistic Regression Math
- Category: Statistics
- Language: en
- Key Concepts: Overview, Mathematical Formulation

## Entity: survival-analysis
- Title: Survival Analysis Basics
- Category: Statistics
- Language: en
- Key Concepts: Overview, Key Functions, Survival Function $S(t)$:, Hazard Function $h(t)$:

## Entity: time-series-basics
- Title: Time Series Basics
- Category: Statistics
- Language: en
- Key Concepts: Stationarity, Overview, Autocorrelation

## Entity: signature-based-models
- Title: Signature-based Models
- Category: Stochastic
- Language: en
- Key Concepts: Visualization: The First Few Terms, non-linear functional, Universal Property, Sig-VAEs, Mathematical Rigor, What is a Path Signature?, 1. Market Simulation (Generative Models), Dimensionality Reduction, Related Topics, feature map, Sig-GANs, Why It's a "Game Changer", 3. Lead-Lag Relationships, linear regression, 2. Pricing and Hedging
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
- Key Concepts: generator, Regression Monte Carlo, martingale representation, Related concepts, Stochastic control:, Nonlinear Feynman–Kac and connection to PDEs, unique solution, $(Y_t, Z_t)$ is the unknown pair, Backward Stochastic Differential Equations, Deep neural networks, G-expectation and sublinear expectations, Malliavin calculus:, G-expectation, Utility maximization:, Polynomial chaos
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
- Key Concepts: Clark-Ocone Formula, Generalizations, The Formula, Financial Hedging
- Backlinks: skorokhod-integral

## Entity: math/convergence-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Jump measure convergence:, CLT for stochastic integrals., Convergence of Semimartingales, stable convergence, Theorem (Jacod-Shiryaev)., Convergence of numerical schemes., The Main Convergence Theorem, Specialization: Convergence to Diffusions, Justification of continuous-time models., Step 2: Identification of limits., Extension to Random Characteristics, Setup and Notation, High-frequency econometrics., Key point:, random
- References: brownian-motion, characteristic-functions, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, math/contiguity-measures, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/convergence-stochastic-integrals, math/density-processes, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/martingale-problem, math/predictable-compensator, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/convergence-stochastic-integrals
- Title: Convergence of Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Definition., Theorem (Jakubowski-Memin-Pages; Kurtz-Protter)., any reasonable discrete-time financial model converges to a continuous-time model, and any trading strategy in the discrete model converges to the corresponding continuous-time strategy, The Semimartingale Topology, The Problem, The Meta-Theorem: Discrete Models Approximate Continuous Models, Application: Discrete Hedging Convergence, good sequence, Discrete hedging converges to continuous hedging, The Main Theorem, Stronger version., Good Sequences and the UT Condition, UT (uniform tightness), Application: Euler Scheme Convergence, Related Articles
- References: finance/girsanov-semimartingales, finance/semimartingale-models, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, stochastic-differential-equations
- Backlinks: math/convergence-semimartingales, math/quadratic-variation

## Entity: feynman-kac
- Title: Feynman-Kac Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: backward Kolmogorov equation, Connection to Martingale Representation, curse of dimensionality, survival probability, Connection to the Backward Kolmogorov Equation, stochastic discount factor, Physics and the Schrödinger equation., Discounting and the Stochastic Discount Factor, Formulation: The Main Result, Structural credit risk models., dimension-independent, Key step:, Numerical Solution: Monte Carlo Instead of Finite Differences, Example II: The Heat Equation (V=0), American option theory.
- References: black-scholes, finance/girsanov-semimartingales, finance/optimal-stopping-american, fokker-planck-equation, math/martingale-representation, numerical-pde-finance, partial-differential-equations, path-integral, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/backward-sde, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, stochastic-control, stochastic-differential-equations, stochastic-processes

## Entity: hjm-framework
- Title: HJM (Heath-Jarrow-Morton) Framework
- Category: Stochastic Calculus
- Language: en
- Key Concepts: HJM (Heath-Jarrow-Morton) Framework, Infinite-Dimensional Perspective, HJM Drift Condition, Forward Rate Dynamics
- References: math/spdes, stochastic-differential-equations
- Backlinks: finance/cir-hull-white, finance/libor-market-model

## Entity: fractional-brownian-motion-integration
- Title: Integration with Respect to Fractional Brownian Motion
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Malliavin and Wick-Itô Integrals, Integration with Respect to Fractional Brownian Motion, Financial Modeling, Pathwise Young and Rough Path Integration

## Entity: libor-market-model
- Title: LIBOR Market Model (LMM)
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Measure Change and Drift, Lognormal Forward Rates, Calibration and Implementation, LIBOR Market Model (LMM)
- Backlinks: finance/bootstrapping-yield-curve

## Entity: local-time-tanaka
- Title: Local Time and Tanaka Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Optimal Stopping, Itô calculus of non-smooth functions, Excursion Decomposition, Applications, Related Topics, Yamada-Watanabe Theorem, Lévy's Theorem and the Reflection Principle, density of time, Sticky Brownian Motion, Dupire Local Volatility, Local Time and Tanaka's Formula, Paul Lévy's theorem, Visualization: The Occupation Density, Local Time, Tanaka's Formula
- References: brownian-motion, excursion-theory, math/doob-meyer-decomposition, math/optimal-stopping-markov, stochastic-differential-equations
- Backlinks: math/quadratic-variation

## Entity: levy-ito-decomposition
- Title: Lévy-Itô Decomposition
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stationary independent increments, Theorem (Lévy-Itô), Advantages, Definition of Lévy Processes, Gamma-Variance process, martingale random measure, Compound Poisson process, Decomposition isolates sources, Quadratic variation is discontinuous, compensator, 4. Large jumps, The Four Components, Variance-Gamma, Lévy-Khintchine triplet, Intuition
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
- Key Concepts: Malliavin Greeks, Delta and Gamma Weights, Integration by Parts on Wiener Space, Advantages

## Entity: mckean-vlasov-sdes
- Title: McKean-Vlasov SDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Non-linear Fokker-Planck Equation, McKean-Vlasov SDEs, Definition, $N$-Particle System and Propagation of Chaos
- References: partial-differential-equations, stochastic-differential-equations

## Entity: numerical-methods-jump-diffusions
- Title: Numerical Methods for Jump-Diffusions
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Euler-Maruyama with Jumps, Infinite Activity Lévy Noise, Numerical Methods for Jump-Diffusions, Higher-Order Milstein Schemes
- References: central-limit-theorem, stochastic-differential-equations

## Entity: math/sde-numerical-methods
- Title: Numerical Methods for SDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Semi-implicit, Multilevel Monte Carlo, Verification, Lie–Trotter, Strang splitting, Numerical Methods for SDEs, Euler–Maruyama Scheme, Generative Modeling, Weak order of convergence, Dimension, Implicit Methods for Stiff SDEs, Split-Step Methods, Physics Simulations, Runge–Kutta Methods for SDEs, Practical Considerations
- References: brownian-bridge, diffusion-models, feynman-kac, finance/monte-carlo-method, levy-ito-decomposition, math/cameron-martin-formula, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/stratonovich-integral

## Entity: math/predictable-compensator
- Title: Predictable Compensator and Dual Predictable Projection
- Category: Stochastic Calculus
- Language: en
- Key Concepts: foundation, drift, Marked point processes., Filtering., innovation martingale, compensated jump measure, compensator, Role in Convergence Theory, The Predictable Triplet $(B, C, \nu)$, compensator of the jump measure, predictable quadratic variation, Example: Poisson process., the law of a semimartingale with independent increments is completely determined by its triplet, Diffusions with jumps., continuous quadratic variation
- References: brownian-motion, finance/levy-processes, finance/semimartingale-models, martingale-clt, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-martingales, math/doob-meyer-decomposition, math/functional-limit-theorems
- Backlinks: levy-ito-decomposition, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/density-processes, math/infinitely-divisible-distributions, math/martingale-problem, math/quadratic-variation, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/quadratic-variation
- Title: Quadratic Variation
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Path continuity, Brownian motion: the canonical example, Discontinuous semimartingales and jump decomposition, Quadratic Variation, Itô isometry, quadratic covariation, Tanaka formula, Bilinearity, Itô's formula through quadratic variation, Itô's formula, Covariation and the polarization identity, Monotonicity, Applications in mathematical finance, polarization identity, predictable quadratic variation
- References: levy-ito-decomposition, local-time-tanaka, malliavin-calculus, math/convergence-stochastic-integrals, math/doob-meyer-decomposition, math/predictable-compensator, stochastic-differential-equations
- Backlinks: math/backward-sde, math/stratonovich-integral

## Entity: reflected-sdes-skorokhod
- Title: Reflected SDEs & Skorokhod Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Application to American Options, RSDE Dynamics, Reflected SDEs & Skorokhod Problem, The Skorokhod Problem
- References: stochastic-control

## Entity: rough-paths
- Title: Rough Path Theory
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Compact Representation, Terry Lyons, Signature Transform, iterated integrals, p < 2, 2 ≤ p < 3, Rough Paths and p-variation, The Signature of a Path, p-rough path, Related Topics, Signature, Visualization: The Signature Map, 3 ≤ p, Path Networks, Applications in AI: Signature Transforms
- References: brownian-motion, deep-rl-execution, stochastic-differential-equations
- Backlinks: fbm-integration, math/spdes, math/stratonovich-integral, path-dependent-volatility, signature-based-models

## Entity: math/stochastic-calculus/rough-path-signatures
- Title: Rough Path Theory and Signatures
- Category: Stochastic Calculus
- Language: en
- Key Concepts: deterministic, Rough Path Theory, What is a Path Signature?, Noise Robustness:, The Problem, Universal Feature Map:, Signature, Signature Transforms, Invariance to Reparameterization:, Rough Path Theory and Signatures, Quantitative Finance, Key Properties:, Signature Transform, Dimension Reduction:, Related Topics
- References: time-series

## Entity: rough-volatility-bergomi
- Title: Rough Volatility: The Rough Bergomi Model
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Computational Challenges, The Rough Bergomi (rBergomi) Model, The Volatility Smile, Rough Volatility: The Rough Bergomi Model

## Entity: semimartingales-on-manifolds
- Title: Semimartingales on Manifolds
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stochastic Development and Parallel Transport, Semimartingales on Manifolds, Eells-Elworthy-Malliavin Construction, Stratonovich Calculus
- References: manifold-learning, math/differential-geometry, stochastic-differential-equations

## Entity: math/skorokhod-topology
- Title: Skorokhod Topology and the Space D
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Space $\mathbb{D}[0,T]$, jumps, Donsker's theorem., Why C-Space Topology Is Insufficient, strictly finer, M1 topology, completed graph, Definition., Identify the limit, The J1 Topology (Skorokhod's Main Topology), jump times, Diffusion approximation., Convergence of Discrete-Time to Continuous-Time Processes, values, Financial mathematics.
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, math/discrete-martingales, math/weak-convergence-prokhorov
- Backlinks: math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/martingale-problem, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/triangular-arrays-processes

## Entity: stable-processes
- Title: Stable Processes and Lévy Flights
- Category: Stochastic Calculus
- Language: en
- Key Concepts: stability index, Lévy Flights vs. Brownian Motion, Alpha-Stable Distributions, Fractional [[spectral-graph-theory|Laplacian]], The Fractional [[spectral-graph-theory|Laplacian]], Financial Crashes, $\alpha < 2$, $\alpha = 2$, Stable Processes and Lévy Flights, Lévy Flights, Lévy Flight, Brownian Motion, Related Topics, Optimization, Applications
- References: extreme-value-theory, finance/levy-processes, fractional-brownian-motion, spectral-graph-theory

## Entity: stochastic-manifolds
- Title: Stochastic Calculus on Manifolds
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Information Geometry, Differential Geometry, Stratonovich, Robotics and Control, Stochastic Calculus on Manifolds, Visualization: Random Walk on a Sphere, Related Topics, Stratonovich integral, stochastic parallel transport, Applications, half the Laplace-Beltrami operator, The Challenge of Curvature, Brownian Motion on a [[manifold-learning|Manifold]], Eells-Elworthy-Malliavin (EEM), Stratonovich vs. Itô
- References: manifold-learning, math/differential-geometry, ricci-flow, stochastic-differential-equations

## Entity: stochastic-control
- Title: Stochastic Control
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Linear-Quadratic-Gaussian (LQG) Control, free boundary problem, The Hamilton-Jacobi-Bellman Equation, policy optimization, [[numerical-pde-finance|Numerical PDE methods]], The Merton Portfolio Problem (1969), Viscosity solution, Verification theorem, Bellman equation, Optimal Execution and Market Microstructure, Stochastic control, linear in state, Stochastic Control, singular, Connections to Reinforcement Learning
- References: avellaneda-stoikov, feynman-kac, finance/markowitz-mean-variance, finance/optimal-stopping-american, numerical-pde-finance, optimal-execution, reinforcement-learning, stochastic-differential-equations
- Backlinks: convex-analysis, convex-optimization, math/backward-sde, math/ode-stability, mdp, merton-portfolio, optimal-execution, path-integral-control, reflected-sdes-skorokhod, stochastic-games, stochastic-maximum-principle

## Entity: stochastic-control-partial-info
- Title: Stochastic Control with Partial Information
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Control:, Dual Control, Filtering:, The Information State, Stochastic Control with Partial Information, Separation Principle
- References: nonlinear-filtering, reinforcement-learning

## Entity: stochastic-differential-equations
- Title: Stochastic Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: drift coefficient, 1. Foundations: Brownian Motion, Weak Solutions, Wiener process, Score function, Generative AI, given, Reverse SDE, 6. Applications, Itô integral, diffusion coefficient, Forward SDE, part of the solution, 5. The Martingale Problem (Stroock-Varadhan), Strong Solutions
- References: brownian-motion, feynman-kac, geometric-brownian-motion, heston-model, math/martingale-problem, nonlinear-filtering
- Backlinks: activation-functions-math, brownian-bridge, computational-complexity-pac-bayes, conditionally-gaussian-processes, course-math-for-ai, differential-equations, diffusion-models, diffusion-sde-math, equivariant-diffusion-models, ergodic-theory-sgd, feller-processes, feynman-kac, finance/hjm-framework, finance/libor-market-model, finance/short-rate-models, fokker-planck-equation, generative-scenario-models, geometric-brownian-motion, hjm-framework, information-theory-rate-distortion, levy-ito-decomposition, local-time-tanaka, math-reasoning-chains-rl, math/backward-sde, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/interacting-particle-systems, math/martingale-problem, math/martingale-representation, math/ode-stability, math/quadratic-variation, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, math/tightness-semimartingales, mckean-vlasov-sdes, merton-portfolio, mixture-of-experts-routing, neural-operators, neural-sdes-finance, nonequilibrium-stat-mech-diffusion, nonequilibrium-statmech, nonlinear-filtering, numerical-methods-jump-diffusions, ornstein-uhlenbeck, ornstein-uhlenbeck-process, pde-hamilton-jacobi, poisson-jump-sdes, quantization-ptq-information, reasoning-models-prm-orm, regularization-implicit-bias, renormalization-group-dl, rough-paths, semimartingales-on-manifolds, speculative-decoding-medusa, spin-glasses-hopfield, stochastic-calculus-manifolds, stochastic-control, stochastic-games, stochastic-manifolds, stochastic-maximum-principle, stochastic-processes, tokenization-bpe-unigram, wentzell-freidlin, wiener-chaos

## Entity: stochastic-games
- Title: Stochastic Differential Games
- Category: Stochastic Calculus
- Language: en
- Key Concepts: saddle-point, Stochastic Differential Games, Cybersecurity, The Master Equation and MFGs, Applications, Isaacs Equation, Quantitative Finance, Types of Equilibria, Climate Change, Master Equation, Stochastic Differential Equations (SDEs), 1. Nash Equilibrium, Visualization: Strategy Interaction, 2. Zero-Sum Games, Mathematical Formulation
- References: mean-field-games, stochastic-control, stochastic-differential-equations

## Entity: fbm-integration
- Title: Stochastic Integration for fBM
- Category: Stochastic Calculus
- Language: en
- Key Concepts: not, Rough Path Theory, Long-Memory Systems, Wick product, Stochastic Integration for Fractional Brownian Motion, Divergence Operator (Skorokhod Integral), not a semimartingale, Fractional Volatility, Rough Volatility, 1. The Skorokhod Integral (Malliavin Calculus), The Challenge, 2. The Stratonovich-type Integral (Wick Product), Why It Matters for Finance and AI, Related Topics, Young Integration
- References: fractional-brownian-motion, malliavin-calculus, rough-paths

## Entity: stochastic-maximum-principle
- Title: Stochastic Maximum Principle
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Maximum Principle, Comparison with HJB, Stochastic Maximum Principle, Hamiltonian and Adjoint Equations
- References: stochastic-control, stochastic-differential-equations

## Entity: math/spdes
- Title: Stochastic Partial Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Burgers Equation with Noise, Hairer's Regularity Structures and Paracontrolled Distributions, The Semilinear SPDE Framework, Kardar–Parisi–Zhang (KPZ) equation, Applications and Open Problems, Martin Hairer, paracontrolled distributions, variational methods, asymmetric simple exclusion process, The Stochastic Heat Equation, Mild Solutions and the Semigroup Approach, mild solution, fixed-point arguments, Atmospheric and geophysical fluid dynamics, References
- References: feynman-kac, malliavin-calculus, math/backward-sde, math/interacting-particle-systems, partial-differential-equations, rough-paths, spectral-graph-theory, stochastic-differential-equations
- Backlinks: hjm-framework

## Entity: math/stratonovich-integral
- Title: Stratonovich Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: geometric structure, quadratic covariation, Stochastic Differential Equations: Stratonovich Form, calculus, kinetic energy cost, Stratonovich [[stochastic-differential-equations|SDE]], Example: Geometric Brownian Motion., Conversion Formula: Stratonovich to Itô, Martingale property, Definition., not, statistical mechanics, Comparison Table: Itô vs. Stratonovich, $O(1)$ difference, nonequilibrium dynamics
- References: brownian-motion, feynman-kac, malliavin-calculus, manifold-learning, math/cameron-martin-formula, math/quadratic-variation, math/sde-numerical-methods, rough-paths, stochastic-differential-equations
- Backlinks: wiener-chaos

## Entity: skorokhod-integral
- Title: The Skorokhod Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Duality with Malliavin Derivative, Non-Adapted Integration, Anticipative Calculus, The Skorokhod Integral
- References: clark-ocone-formula

## Entity: math/martingale-problem
- Title: The Stroock-Varadhan Martingale Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Formulation, Semimartingale Perspective, probability measure, The Stroock-Varadhan Martingale Problem, duality, Weak existence and uniqueness in law for the [[stochastic-differential-equations|SDE]] are equivalent to well-posedness of the martingale problem., Why Martingale Problems Are Easier, Theorem (Stroock-Varadhan)., Localization., martingale problem, Connection to SDEs, Diffusion Approximation, solves the martingale problem, Proof Sketch of Uniqueness, Interacting particle systems.
- References: brownian-motion, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, stochastic-differential-equations
- Backlinks: stochastic-differential-equations

## Entity: math/tightness-semimartingales
- Title: Tightness of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: High-frequency limits., Diffusion approximations., C-Tightness, Bounded initial values:, C-tight, UT (uniform tightness), Converse direction., Definition., The UT Condition, Tightness and the Main Convergence Theorem, Aldous's Condition, Numerical schemes., reduces tightness of the process to tightness of its characteristics, Theorem (Rebolledo, 1979)., Criterion.
- References: brownian-motion, finance/semimartingale-models, martingale-clt, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov, stochastic-differential-equations
- Backlinks: math/convergence-stochastic-integrals, math/triangular-arrays-processes

## Entity: math/triangular-arrays-processes
- Title: Triangular Arrays and Convergence to Processes with Independent Increments
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Proof Architecture, Identification of limits., Multivariate Extensions, Jump measure convergence:, Convergence to Brownian motion (functional CLT)., Convergence to general processes with independent increments., Infinitesimal condition (Lindeberg):, Applications to High-Frequency Statistics, Convergence to Levy processes., Realized volatility, Diffusion convergence:, Triangular Arrays and Convergence to Processes with Independent Increments, Drift convergence:, Power variations, The Infinitesimal Condition
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/levy-processes, finance/semimartingale-models, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales
- Backlinks: math/functional-limit-theorems

## Entity: wiener-chaos
- Title: Wiener Chaos and Multiple Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Number-operator approach, Product rule, Malliavin Derivative, Fourth Moment Theorem (Nualart-Peccati), Itô Isometry for Multiple Integrals, Integration by parts, [[stratonovich-integral|Stratonovich integrals]], Wiener-Itô Decomposition, Relation to [[malliavin-calculus|Malliavin calculus]], Relationship with Other Structures, [[characteristic-functions|Characteristic functions]], Hermite Polynomials and Orthogonality, Conclusion, Wiener Chaos and Multiple Stochastic Integrals, Theorem
- References: characteristic-functions, malliavin-calculus, math/information-theory, math/stratonovich-integral, stochastic-differential-equations

## Entity: arch-models
- Title: ARCH Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: Heavy tails, Limitations:, GARCH(p,q), Risk Model Backtesting, GJR-GARCH, FIGARCH, Mean reversion, Practical Applications, conditional, Limitations & Extensions, Algorithmic Trading, Python Implementation, volatility clustering, Related Topics, Prerequisites
- References: ar-models, arma-models, finance/levy-processes, garch-models, mcmc, volatility-forecasting
- Backlinks: ar-models, convolutional-volatility-resolution-clustering, finance/stylized-facts-returns, math/central-limit-theorem, math/ergodic-theorems-birkhoff, math/martingale-clt, math/stochastic-recursive-sequences

## Entity: bmo-martingales
- Title: BMO Martingales
- Category: Stochastic Processes
- Language: en
- Key Concepts: Definition, John-Nirenberg Inequality, BMO Martingales, Application: Kazamaki and Novikov

## Entity: finance/bipower-variation
- Title: Bipower Variation
- Category: Stochastic Processes
- Language: en
- Key Concepts: continuous component, Heterogeneous Autoregressive, tripower quarticity, Bipower Variation, Implementation, Convergence, Background: Realised Variance and Jumps, Related Articles, Bipower Variation (BPV), Jump Test, Definition, HAR-RV-J Model
- References: extreme-value-theory, finance/levy-processes, finance/realized-kernels, garch-models, volatility-forecasting
- Backlinks: finance/rough-volatility, finance/stylized-facts-returns, finance/variance-swaps, jump-robust-volatility

## Entity: brownian-bridge
- Title: Brownian Bridge
- Category: Stochastic Processes
- Language: en
- Key Concepts: Barrier option pricing:, Applications in Finance and Numerical Methods, Sequential testing:, Karhunen-Loève Expansion, Bridge sampling:, Brownian Meanders and Excursions, Kolmogorov-Smirnov Statistics, [[stochastic-differential-equations|SDE]] Representation and Numerical Singularity, Bridge Between Arbitrary Points, Related Constructions, Definition
- References: finance/barrier-asian-options, finance/monte-carlo-method, math/spectral-theory-operators, ornstein-uhlenbeck-process, stochastic-differential-equations
- Backlinks: course-math-for-ai, empirical-processes, math/gaussian-process-sample-paths, math/random-walks, math/sde-numerical-methods

## Entity: brownian-motion
- Title: Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Constant diffusion coefficient, Quadratic Variation, Sample Brownian Paths, Risk Management, Independent increments, Limitations:, Multidimensional Brownian Motion, Markov property, Optimal Execution, Practical Applications, Interest Rate Models, reflection principle, Nowhere differentiable, Ornstein-Uhlenbeck, Limitations & Extensions
- References: avellaneda-stoikov, black-scholes, finance/levy-processes, geometric-brownian-motion, mcmc, schrodinger-equation
- Backlinks: avellaneda-stoikov, black-scholes, copula-models, cox-process, dv01, excursion-theory, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/change-of-numeraire, finance/coherent-risk-measures, finance/efficient-market-hypothesis, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/free-boundary-american, finance/girsanov-semimartingales, finance/hjm-framework, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/libor-market-model, finance/quasi-monte-carlo, finance/real-options, finance/realized-kernels, finance/self-similarity-fractality, finance/semimartingale-models, finance/short-rate-models, finance/stable-distributions, fokker-planck-equation, geometric-brownian-motion, innovation-process, law-iterated-logarithm, local-time-tanaka, martingale, math/absolute-continuity-process-measures, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/central-limit-theorem, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-markov-chains, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/ergodic-theorems-birkhoff, math/functional-limit-theorems, math/glivenko-cantelli, math/hausdorff-measure, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/martingale-clt, math/martingale-problem, math/martingale-representation, math/predictable-compensator, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, math/stratonovich-integral, math/tightness-semimartingales, math/triangular-arrays-processes, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, multifractal-processes, neural-odes, nonlinear-filtering, ornstein-uhlenbeck, partial-differential-equations, rough-paths, sle, stochastic-differential-equations, stochastic-processes

## Entity: finance/cir-hull-white
- Title: CIR and Hull-White Interest Rate Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: Zero-coupon bond price, CIR and Hull-White Interest Rate Models, Hull-White, Implementation, Related Articles, Cox-Ingersoll-Ross Model, Feller condition, Hull-White Model, Cox-Ingersoll-Ross (CIR)
- References: finance/libor-sofr, finance/nelson-siegel-svensson, finance/swaps, hjm-framework, ornstein-uhlenbeck-process
- Backlinks: finance/bond-options-gaussian, finance/bootstrapping-yield-curve, finance/libor-market-model, finance/libor-sofr, finance/short-rate-models

## Entity: convergence-of-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Processes
- Language: en
- Key Concepts: Convergence of Characteristics, Convergence of Semimartingales, Tightness and Aldous' Criterion, Skorokhod Space $J_1$ Topology
- References: statistical-mechanics

## Entity: cox-process
- Title: Cox Process (Doubly Stochastic)
- Category: Stochastic Processes
- Language: en
- Key Concepts: Hawkes process, stochastic randomness at two levels, Formal Definition, Var / Mean, CIR Intensity Path and Event Arrivals, Comparison: Poisson vs Cox Process, High-Frequency Order Flow, Limitations:, Feller condition, Survival Probability (Credit Risk), Calibration, affine expression, Practical Applications, No memory given intensity, Intensity unobservability
- References: avellaneda-stoikov, brownian-motion, copula-models, cs01, finance/levy-processes
- Backlinks: avellaneda-stoikov, copula-models, cs01, finance/copula-models, finance/hawkes-process, finance/levy-processes, finance/semimartingale-models, math/point-processes

## Entity: dirichlet-forms
- Title: Dirichlet Forms
- Category: Stochastic Processes
- Language: en
- Key Concepts: Formal Definition, energy, Generator, Visualization: Energy Minimization, Why Use Dirichlet Forms?, Markov processes, Markovian, Connection to Operators and Processes, Dirichlet Forms, Related Topics, Stability, Brownian motion, SDEs with Bad Drift, The Core Concept: Energy and [[shannon-entropy|Entropy]], Markov Process
- References: finance/shannon-entropy, measure-theory, operator-semigroups

## Entity: excursion-theory
- Title: Excursion Theory
- Category: Stochastic Processes
- Language: en
- Key Concepts: excursions, Excursion Theory, Itô's Excursion Measure ($n$), The Intuition: Slicing the Path, Applications, Visualization: Excursion Decomposition, Stochastic Integration, Fluctuation Theory, Poisson Point Process, Kiyosi Itô, Itô Measure, The Excursion Process, Related Topics, Fine Structure of Trajectories
- References: brownian-motion, poisson-process
- Backlinks: local-time-tanaka

## Entity: feller-processes
- Title: Feller Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: probability theory, Diffusion matrix $a_{ij}(x)$, Lévy-type operator, Courrège's Theorem, pseudo-differential operator, B. Fractional Kinetics and Anomalous Diffusion, 2. The Infinitesimal Generator ($A$), Feller process, Heston stochastic volatility, Feller Processes: The Analytic Foundation of Markov Dynamics, Related Topics, Strong Markov Property, Feller Property (Invariant Space), 1. The Functional Analytic Definition, 3. Courrège's Theorem: The Anatomy of a Generator
- References: finance/levy-processes, operator-semigroups, spectral-graph-theory, stochastic-differential-equations
- Backlinks: martingale, operator-semigroups

## Entity: finance/fractional-fokker-planck
- Title: Fractional Fokker-Planck Equation
- Category: Stochastic Processes
- Language: en
- Key Concepts: Lévy flights, VaR with memory, Stationarity, Mathematical Formulation, Limitations and Extensions, fractional generalization, Background, Visualization: Standard vs. Fractional Variance Scaling, Anomalous Diffusion in Markets, Parameter identification, anomalous diffusion, Fractional Fokker-Planck Equation (FFPE), entire history, Continuous Time Random Walks (CTRW), Option pricing under anomalous diffusion
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
- Key Concepts: Quantum Gravity, Statistical Mechanics, Graph Theory, Dirichlet Energy, Intuition, Gaussian Free Field (GFF), Brownian Motion, Random Surfaces, Related Topics, 5. Why Tier-1 Quants care, 1. Mathematical Definition, Roughness, 2. Physical Significance, SLE curves, Green's Function
- References: laplacian, quantum-information-entropy, schwartz-distributions, sle
- Backlinks: sle

## Entity: math/gaussian-process-sample-paths
- Title: Gaussian Process Sample Paths
- Category: Stochastic Processes
- Language: en
- Key Concepts: Brownian Motion Paths: Hölder but Not Differentiable, fractional Brownian motion, absolutely continuous, [[cameron-martin-formula]], Sample Path Differentiability, Sketch of proof, integrability of the supremum, [[Fractional Brownian motion]], Fernique, smooth, not, Hölder continuous of order, Theorem (Dudley, 1967), Kolmogorov continuity theorem, Application to Brownian motion
- References: brownian-bridge, empirical-processes, finance/shannon-entropy, fractional-brownian-motion, math/cameron-martin-formula, math/concentration-inequalities
- Backlinks: math/nonparametric-regression

## Entity: geometric-brownian-motion
- Title: Geometric Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: No mean reversion, Options pricing, Itô's Lemma and the Closed-Form Solution, Limitations and Extensions, The Stochastic Differential Equation, Background, Practical Applications, Geometric Brownian Motion (GBM), Correlation structure, Interactive Path Simulation, Python Implementation, Itô correction, Related Topics, Prerequisites, Parameter Reference
- References: black-scholes, brownian-motion, finance/levy-processes, heston-model, stochastic-differential-equations, volatility-forecasting
- Backlinks: black-scholes, brownian-motion, differential-equations, finance/bachelier-formula, finance/black-scholes-derivations, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hurst-exponent, finance/levy-esscher-continuous, finance/realized-kernels, finance/semimartingale-models, finance/stefan-problem-american, finance/volatility-surface, fokker-planck-equation, futures-hedging, greeks-options, math/absolute-continuity-process-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/functional-limit-theorems, math/martingale-problem, math/sequential-hypothesis-testing, merton-portfolio, risk-neutral-valuation, stochastic-differential-equations, stochastic-processes

## Entity: finance/hawkes-process
- Title: Hawkes Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Hawkes process, Zumbach effect, branching ratio, Mathematical Definition, Neural Hawkes, Stationarity requirement, compensator, Python: Simulating a Hawkes Process, Hawkes Process, Stationarity Condition, Limitations and Extensions, Calibration, Background, Exponential kernel assumption, Parameter Reference
- References: cox-process, finance/monte-carlo-method, garch-models, geometric-brownian-motion
- Backlinks: finance/order-flow-imbalance, finance/semimartingale-models, lob-propagators, market-microstructure, multivariate-hawkes, queue-reactive-models

## Entity: finance/hurst-exponent
- Title: Hurst Exponent
- Category: Stochastic Processes
- Language: en
- Key Concepts: Multifractal markets, Time-varying H, Anti-persistent (Mean-Reverting) Series, Estimation bias, Hurst Exponent (H), Variance Ratio Test, Limitations and Extensions, Background, Interpretation of H, rescaled range (R/S) analysis, Random Walk (Brownian Motion), Strategy selection, Spurious long memory, Parameter Reference, Related Topics
- References: finance/fractional-fokker-planck, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, geometric-brownian-motion, hidden-markov-models
- Backlinks: arima-models, finance/fisher-transform, finance/fractional-fokker-planck, finance/hilbert-huang-transform, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, finance/self-similarity-fractality, finance/stable-distributions, finance/stylized-facts-returns, fractional-cointegration

## Entity: finance/hyperbolic-distributions
- Title: Hyperbolic Distributions and Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: not stable, NIG, Generalized hyperbolic distributions, Tail behaviour, infinitely divisible, Eberlein-Keller (1995), [[stable-distributions|Stable]], Hyperbolic Distributions and Processes, Financial application, golden middle, Comparison with alternatives, semi-heavy tails, Variance Gamma, Lévy process with GH increments, VaR and CVaR
- References: brownian-motion, cornish-fisher-cvar, finance/fft, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/levy-processes
- Title: Lévy Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Stationary increments, Drift, CGMY / KoBoL Process, Key Examples, Independent increments, Lévy Processes, Limitations and Extensions, Poisson Process, Lévy triplet, Mathematical Framework: The Lévy-Itô Decomposition, The Lévy-Khintchine Representation, Practical Applications, Calibration complexity, Continuity in probability, Scaling
- References: cox-process, finance/fractional-fokker-planck, finance/monte-carlo-method, heston-model, ornstein-uhlenbeck-process
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, brownian-motion, characteristic-functions, clt, cornish-fisher-cvar, cox-process, feller-processes, finance/bipower-variation, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/merton-jump-diffusion, finance/variance-gamma, finance/zeta-field, geometric-brownian-motion, kelly-criterion, levy-ito-decomposition, levy-structured-products, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/martingale-representation, math/predictable-compensator, math/skorokhod-topology, math/stochastic-recursive-sequences, math/subordinators, math/triangular-arrays-processes, math/wiener-hopf-factorization, multifractal-processes, numeraire-invariant-hedging, occupation-measures-local-times, ornstein-uhlenbeck-process, stable-processes, stochastic-processes

## Entity: math/markov-chain-mixing
- Title: Markov Chain Mixing Times
- Category: Stochastic Processes
- Language: en
- Key Concepts: Total Variation Distance and Stationarity, burn-in period, total variation distance, lazy, Conductance and Cheeger's Inequality, Practical diagnostics:, detailed balance condition, Spectral gap, Cheeger's inequality, Minimum stationary probability, Card Shuffling: Diaconis' Classical Result, Geometry of state space:, Poincaré inequality, Summary of Key Results, preconditioning
- References: central-limit-theorem, math/concentration-inequalities, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/renewal-theory, math/spectral-theory-operators
- Backlinks: math/coupling-methods, math/geometric-ergodicity, math/interacting-particle-systems, math/spectral-theory-operators, queuing-theory, random-walks-groups, time-series

## Entity: finance/merton-jump-diffusion
- Title: Merton Jump-Diffusion Model
- Category: Stochastic Processes
- Language: en
- Key Concepts: Merton Jump-Diffusion Model, Merton (1976) Jump-Diffusion model, Implementation, Model, Related Articles, Option Pricing Formula
- References: black-scholes, finance/levy-processes, finance/variance-gamma, heston-model

## Entity: multifractal-processes
- Title: Multifractal Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Brownian motion, Financial Markets (MSMR), Fluid Turbulence, The Limitation of Monofractals, Multifractal Spectrum ($f(\alpha)$), Visualization: Monofractal vs. Multifractal, Network Traffic, Multifractal Processes, Multifractal Cascade Models, Multifractal Process, Applications in Finance and Physics, Multiplicative Cascade, Related Topics, Multifractal Random Walk
- References: brownian-motion, finance/levy-processes, fractional-brownian-motion

## Entity: occupation-measures-local-times
- Title: Occupation Measures and Local Times of Lévy Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Tanaka's Formula and Discontinuities, Occupation Measure, Fourier Analytic Conditions, Occupation Measures and Local Times of Lévy Processes
- References: finance/levy-processes, fourier-transform

## Entity: ornstein-uhlenbeck
- Title: Ornstein-Uhlenbeck Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: 3. Autocovariance, The [[stochastic-differential-equations|SDE]] Definition, 2. Stationarity and Normality, stationary Gaussian distribution, Ornstein-Uhlenbeck Process, $W_t$, $\sigma > 0$ (Volatility), $\mu$ (Long-term mean), Finance (Vasicek Model), Physics, $\theta > 0$ (Rate of mean reversion), Key Properties, Applications, mean-reverting, Visualization: Mean Reversion Path
- References: brownian-motion, math/stationary-wide-spectral, stochastic-differential-equations
- Backlinks: course-math-for-ai, stochastic-processes

## Entity: ornstein-uhlenbeck-process
- Title: Ornstein-Uhlenbeck Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Exact Solution via Integrating Factor, mean-reverting, Multidimensional OU, half-life, volatility, Python: Simulation and Parameter Estimation, Limitations and Extensions, Non-Gaussian noise, Ornstein-Uhlenbeck Process, Stationary Distribution, Autocorrelation Function, Ornstein-Uhlenbeck (OU) process, rate of mean reversion, Related Topics, Visualization
- References: black-scholes, finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, heston-model, hidden-markov-models, mcmc, pairs-trading, stochastic-differential-equations
- Backlinks: brownian-bridge, diffusion-models, fastest-mean-reversion, finance/cir-hull-white, finance/levy-processes, finance/longstaff-schwartz, finance/particle-filter, fokker-planck-equation, pairs-trading, pca-statarb

## Entity: math/point-processes
- Title: Point Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Hawkes process, point process, cluster structure, excitation function, Superposition, stationary and ergodic, Void probabilities, counting function, Poisson point process, Independent increments, modulated heterogeneity, kernel, Neuroscience, Campbell's Theorem and Moment Measures, Papangelou conditional intensity
- References: cox-process, levy-ito-decomposition, math/branching-processes, math/kolmogorov-equations-ctmc, math/renewal-theory
- Backlinks: math/survival-analysis, poisson-process

## Entity: poisson-process
- Title: Poisson Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Superposition, Exponential Distribution, counting random events, Independent Increments, Reliability, Poisson Process, Poisson Distribution, Gamma Distribution, 1. Inter-arrival Times, Visualization: Arrivals over Time, Related Topics, Applications, Physics, Finance, Poisson Processes
- References: distributions-zoo, math/point-processes, math/renewal-theory
- Backlinks: course-math-for-ai, distributions-zoo, excursion-theory, exponential-distribution, queuing-theory, stochastic-processes

## Entity: math/random-walks
- Title: Random Walks
- Category: Stochastic Processes
- Language: en
- Key Concepts: ballot problem, random walk, rate function, Donsker's Invariance Principle, Arc-sine Law II, Renewal theory, Wiener–Hopf factorization, Electrical networks, Strassen's law of the iterated logarithm, First Passage Times and Spitzer's Identity, characteristic function, Generating Functions and Fourier Analysis, Random Walks, Reflection Principle and Ballot Problem, transient
- References: brownian-bridge, central-limit-theorem, math/discrete-martingales, math/functional-limit-theorems, math/large-deviations-cramer, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/rough-volatility
- Title: Rough Volatility and Fractional Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Rough Bergomi Model (Bayer, Friz, Gatheral 2016), Empirical finding, Rough Volatility, Implementation, Rough Volatility and Fractional Brownian Motion, Related Articles, Fractional Brownian Motion, Implied vol skew
- References: finance/bipower-variation, finance/sabr-model, finance/variance-gamma, heston-model
- Backlinks: deep-hedging, finance/dupire-local-vol, garch-models, neural-sdes-finance, volatility-arbitrage, volatility-smile

## Entity: finance/self-similarity-fractality
- Title: Self-Similarity and Fractality of Financial Series
- Category: Stochastic Processes
- Language: en
- Key Concepts: prices themselves, arbitrage exists, calibrate option-market surfaces significantly better, MLE for fBm, Rough volatility, Regularization, technical tool, fractional Brownian motion, not a semimartingale, volatility, Mixed fBm, Definition., Self-similar processes, Empirical $H$ in finance:, Bitcoin and crypto
- References: brownian-motion, finance/bs-market-self-financing, finance/fractional-fokker-planck, finance/ftap-first-fundamental-theorem, finance/hurst-exponent, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns, math/stationary-wide-spectral

## Entity: small-ball-probabilities
- Title: Small Ball Probabilities for Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Connection to [[shannon-entropy|Entropy]] and Spectra, Applications, Small Ball Probabilities for Stochastic Processes, Asymptotic Definition
- References: finance/shannon-entropy, quantization

## Entity: finance/stable-distributions
- Title: Stable Distributions and α-Stable Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Parametric heavy tails, classical CLT, same, Key property., Generalized CLT (Lévy-Khintchine)., Infinite variance., heavy tails, first mathematically rigorous way, No unique EMM., Financial application, Truncated stable, characteristic function, Definition., all, The stability property
- References: brownian-motion, cornish-fisher-cvar, extreme-value-theory, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/self-similarity-fractality, finance/stylized-facts-returns
- Backlinks: finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/stylized-facts-returns, math/central-limit-theorem, math/infinitely-divisible-distributions, math/local-limit-theorems, math/lundberg-cramer-ruin, math/triangular-arrays-processes

## Entity: stochastic-processes
- Title: Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Classification, [[stochastic-differential-equations]] (SDEs), [[geometric-brownian-motion]], Discrete-time processes, [[ornstein-uhlenbeck]], Markov Processes, Lévy Processes, [[feynman-kac]] Formula, By State Space $S$, Discrete state space, Overview, [[stochastic-calculus]], Related Topics, Continuous-time processes, Martingales
- References: brownian-motion, ergodic-theory, feynman-kac, finance/levy-processes, geometric-brownian-motion, markov-chains, math/discrete-markov-chains, math/discrete-martingales, math/kolmogorov-equations-ctmc, math/martingale-representation, math/stationary-wide-spectral, ornstein-uhlenbeck, poisson-process, random-walks, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: kuramoto-model, law-iterated-logarithm

## Entity: math/subordinators
- Title: Subordinators
- Category: Stochastic Processes
- Language: en
- Key Concepts: drift coefficient, hitting time process, Key Examples, Fractional Calculus and Time-Changed Processes, Bochner Subordination, not, Subordinators, $\alpha$-stable subordinator, Compound Poisson process., inverse, variance-gamma process, Stable subordinator., The Laplace Exponent, fractional Riemann-Liouville differential equation, Connection to Renewal Theory
- References: finance/levy-processes, fractional-brownian-motion, levy-ito-decomposition, math/branching-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/variance-gamma
- Title: Variance Gamma Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Characteristic function, Option Pricing via FFT, Variance Gamma Process, Related Articles, Definition, Variance Gamma (VG), Parameter Effects
- References: finance/levy-processes, heston-model, merton-jump-diffusion
- Backlinks: finance/barrier-asian-options, finance/merton-jump-diffusion, finance/rough-volatility, levy-ito-decomposition, svi-model

## Entity: volatility-forecasting
- Title: Volatility Forecasting (GARCH, HAR)
- Category: Stochastic Processes
- Language: en
- Key Concepts: Multivariate vol, Volatility Forecasting (GARCH, HAR), Multi-step forecast, Stationarity, GARCH Extensions, Options pricing, GJR-GARCH, Limitations and Extensions, QLIKE Loss Function, Background, Long memory, Variance risk premium, GARCH(1,1), Mean reversion, Asymmetry (leverage effect)
- References: finance/monte-carlo-method, finance/realized-kernels, finance/value-at-risk, garch-models, heston-model, mcmc, transformer-architecture
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, arma-models, convolutional-volatility-resolution-clustering, cornish-fisher-cvar, finance/bipower-variation, finance/multivariate-hmm, finance/realized-kernels, finance/sabr-model, finance/singular-spectral-analysis, finance/variance-swaps, finance/wavelet-transform, geometric-brownian-motion, kalman-filter, temporal-fusion-transformer, volatility-modulated-spectral-surface

## Entity: finance/zeta-field
- Title: Zeta Field
- Category: Stochastic Processes
- Language: en
- Key Concepts: level repulsion, Pole, critical strip, Riemann-Siegel Z-function, Quantum computing connection, Hilbert-Pólya conjecture, Zeta Field Spectral Landscape, Limitations and Extensions, Zeta Regularization, Critical line, Spectral risk measure design, Background, Practical Applications, The Riemann Zeta Function, Euler product
- References: finance/levy-processes, finance/random-matrix-theory, finance/shannon-entropy, finance/spectral-analysis, math/spectral-theory-operators, quantum-entanglement

## Entity: financial-entropy
- Title: Entropy and Market Complexity
- Category: Time Series
- Language: en
- Key Concepts: LZ = 1, predictability, LZ is High, Lempel-Ziv complexity, Anomalies, Shannon [[shannon-entropy|Entropy]], 1. Shannon [[shannon-entropy|Entropy]] as Predictability, 3. Approximate Entropy (ApEn) and Sample Entropy, drop, Related Topics, Visualization: Entropy during a Crash, variance, market regime indicator, Efficiency Connection, 2. Lempel-Ziv Complexity (LZ)
- References: causal-inference, finance/lempel-ziv-complexity, finance/shannon-entropy, nlp-financial-analysis
- Backlinks: entropy-pooling

## Entity: fractional-cointegration
- Title: Fractional Cointegration
- Category: Time Series
- Language: en
- Key Concepts: ARFIMA, Fractional Cointegration Mechanism, Fractional Cointegration, Long Memory, Trading Application, Visualization: Decay Speeds, fractionally cointegrated, long-range dependence, ARFIMA Models, half-life of mean reversion, Related Topics, The Long Memory Problem
- References: finance/hurst-exponent, fractional-brownian-motion, pairs-trading

## Entity: garch-models
- Title: GARCH and ARCH Models
- Category: Time Series
- Language: en
- Key Concepts: Neural GARCH, IGARCH, Insight, The Persistence, Maximum Likelihood (MLE), GARCH, ARCH, ARCH and GARCH Models: Volatility Clustering, 1. ARCH Model (Engle, 1982), Deep GARCH, 4. Estimation and AI Integration, Leverage Effect, Visualization: Volatility Spikes, 2. GARCH Model (Bollerslev, 1986), Related Topics
- References: finance/rough-volatility, mle, time-series
- Backlinks: arch-models, convolutional-volatility-resolution-clustering, finance/bipower-variation, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hidden-markov-models, finance/realized-kernels, finance/stylized-facts-returns, finance/value-at-risk, finance/variance-swaps-vix, generative-scenario-models, math/ergodic-theorems-birkhoff, math/martingale-clt, math/stochastic-recursive-sequences, temporal-fusion-transformer, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: hmm-particle-filters
- Title: Hidden Markov Models & Particle Filters
- Category: Time Series
- Language: en
- Key Concepts: Particle Filters, Resample (Darwinian Selection), Visualization: Particle Survival, Transition Matrix, Particle Filter (Sequential Monte Carlo), The Algorithm:, Hidden Markov Models & Particle Filters, Kalman Filter, Related Topics, Viterbi algorithm, Baum-Welch algorithm, The Non-Linear Problem: Particle Filters, Predict (Mutate), Pairs Trading, Filtering
- References: mcmc, regime-switching-factors
- Backlinks: hmm, lead-lag-analysis, lsv-model, mcmc, path-dependent-volatility, total-probability-variance, vpin

## Entity: jump-robust-volatility
- Title: Jump-Robust Realized Variance
- Category: Time Series
- Language: en
- Key Concepts: volatility risk premium, Realized Variance (RV), Visualization: Volatility vs. Jumps, Jump-Robust Realized Variance (MinRV and MedRV), MedRV, MinRV, The Problem with Standard RV, 1. Bipower Variation (BV), Price Jumps, 2. MinRV and MedRV (Andersen et al., 2012), Why It Matters: Identifying Jumps, Related Topics, Jump-Robust Estimators
- References: finance/bipower-variation, finance/realized-kernels, merton-jump-diffusion

## Entity: morse-theory
- Title: Morse Theory
- Category: Topology
- Language: en
- Key Concepts: CW complex, Topology of Loss Surfaces, critical points, Gradient Flows, Index 1, Index 0, The Morse Index, Morse Inequalities, Morse Functions, Mode Connectivity, loss landscape, Morse function, Morse Theory, Related Topics, non-degenerate
- References: manifold-learning, math/algebraic-topology, math/differential-geometry, math/spectral-theory-operators, training-dynamics

## Entity: persistent-homology
- Title: Persistent Homology
- Category: Topology
- Language: en
- Key Concepts: Topology of Data, Stability Theorem, Filtration and Homology, Barcodes and Persistence Diagrams, Persistent Homology

## Entity: crypto-quant-trading-and-amm-curves
- Title: Crypto Quant Trading, AMM Curves & MEV
- Category: Trading Theory
- Language: en
- Key Concepts: Crypto Quant Trading, AMM Curves & MEV, See Also
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
- Key Concepts: High-Frequency Lead-Lag StatArb, See Also
- References: course-quant-trading, high-frequency-trading-and-orderbook, statistical-arbitrage-and-pairs-trading

## Entity: quant-brainteasers-handbook
- Title: Quant Brainteasers Python Handbook
- Category: Trading Theory
- Language: en
- Key Concepts: See Also, Quant Brainteasers Python Handbook, 1. Dice Re-roll Game Simulation
- References: course-quant-trading, optimal-stopping-and-kelly, quant-market-making-mechanics
- Backlinks: optimal-stopping-and-kelly, quant-firm-interview-math-brainteasers, quant-interview-cheat-sheet, quant-trading-interview-roadmap, statistical-arbitrage-and-pairs-trading

## Entity: statistical-arbitrage-and-pairs-trading
- Title: Statistical Arbitrage & Pairs Trading
- Category: Trading Theory
- Language: en
- Key Concepts: 1. Cointegration vs Correlation, 2. Ornstein-Uhlenbeck Process, Statistical Arbitrage & Pairs Trading, Correlation:, Cointegration:, Tests:, See Also
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
- Key Concepts: Geometric Deep Learning, 1. Invariance, Group, Closure:, Group Theory and Symmetries in Deep Learning, Translation group, mathematically embedding equivariance into the architecture, Special Euclidean group, Group Equivariant Neural Networks (G-CNNs), physically correct guarantees, Why does it matter for Deep Learning?, What is a Group?, Invariance and Equivariance, Associativity:, Important Lie Groups (Continuous Groups) in AI:
- Backlinks: ai-theory/spatial/equivariant-gnn

## Entity: math/analysis-geometry/information-geometry
- Title: Information Geometry
- Category: Unknown
- Language: en
- Key Concepts: m-connection ($\alpha=-1$):, Applications in Deep Learning, dual connections, Dual Connections and $\alpha$-Geometry, e-connection ($\alpha=1$):, Natural [[convex-optimization|Gradient Descent]] (NGD), K-FAC, Riemannian manifolds, Information Bottleneck:, Fisher Information Matrix, Generalized Pythagorean Theorem, Cramér-Rao Bound:, [[llm]] Latent Spaces:, TRPO/PPO, Information Geometry
- References: convex-optimization, fisher-information, llm, manifold-learning, optimal-transport, transformer-architecture
- Backlinks: convex-analysis, course-math-for-ai, fisher-information, language-models/safety/rlhf-dpo, manifold-learning, math/bayesian-asymptotics, math/cramer-rao-bound, math/differential-geometry, math/minimax-estimation, math/neyman-pearson, maximum-entropy, multivariable-calculus

## Entity: geometric-mechanics-lie-groups
- Title: Geometric Mechanics: Control on Lie Groups
- Category: ai-physics
- Language: en
- Key Concepts: Geometric Mechanics: Control on Lie Groups, Differential and Information Geometry, Conclusion, Symplectic Geometry and Hamiltonian Mechanics
- References: convex-optimization, manifold-learning

## Entity: neural-operators-fno
- Title: Neural Operators: FNO vs. DeepONet
- Category: ai-physics
- Language: en
- Key Concepts: Neural Operators: FNO vs. DeepONet, Random Matrix Theory and Spectral Dynamics, Conclusion, Differential and Information Geometry
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
- Key Concepts: Differential and Information Geometry, Symplectic Geometry & Hamiltonian Neural Networks, Conclusion, Symplectic Geometry and Hamiltonian Mechanics
- References: convex-optimization, manifold-learning

## Entity: mechanistic-interpretability-sae
- Title: AI Safety: Mechanistic Interpretability of SAEs
- Category: ai-theory
- Language: en
- Key Concepts: AI Safety: Mechanistic Interpretability of SAEs, Random Matrix Theory and Spectral Dynamics, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion
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
- Key Concepts: Differential and Information Geometry, Stochastic Dynamics and Statistical Mechanics, Ergodic Theory of Stochastic [[convex-optimization|Gradient Descent]], Conclusion
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: gnn-weisfeiler-lehman
- Title: Graph Neural Networks: Weisfeiler-Lehman
- Category: ai-theory
- Language: en
- Key Concepts: Algebraic Topology, Sheaves, and Category Theory, Random Matrix Theory and Spectral Dynamics, Graph Neural Networks: Weisfeiler-Lehman, Conclusion
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: higher-category-theory-ai
- Title: Higher Category Theory: N-categories in AI
- Category: ai-theory
- Language: en
- Key Concepts: Algebraic Topology, Sheaves, and Category Theory, Higher Category Theory: N-categories in AI, Conclusion
- References: spectral-graph-theory

## Entity: multimodal-alignment-clip
- Title: Multimodal Alignment: CLIP Math
- Category: ai-theory
- Language: en
- Key Concepts: Differential and Information Geometry, Optimal Transport and Wasserstein Metrics, Conclusion, Multimodal Alignment: CLIP Math
- References: convex-optimization, manifold-learning

## Entity: nonequilibrium-stat-mech-diffusion
- Title: Non-equilibrium Statistical Mechanics of Diffusion Models
- Category: ai-theory
- Language: en
- Key Concepts: Non-equilibrium Statistical Mechanics of Diffusion Models, Stochastic Dynamics and Statistical Mechanics, Conclusion
- References: stochastic-differential-equations

## Entity: normalization-layers-math
- Title: Normalization Layers: BatchNorm vs RMSNorm
- Category: ai-theory
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Differential and Information Geometry, Conclusion, Normalization Layers: BatchNorm vs RMSNorm
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: regularization-implicit-bias
- Title: Regularization: Implicit Bias of GD
- Category: ai-theory
- Language: en
- Key Concepts: Regularization: Implicit Bias of GD, Stochastic Dynamics and Statistical Mechanics, Conclusion, Differential and Information Geometry
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: renormalization-group-dl
- Title: Renormalization Group in Deep Learning
- Category: ai-theory
- Language: en
- Key Concepts: Renormalization Group in Deep Learning, Stochastic Dynamics and Statistical Mechanics, Conclusion, Quantum Field Theory and Renormalization Group
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
- Key Concepts: Random Matrix Theory and Spectral Dynamics, The Geometry of Deep Learning Loss Landscapes, Conclusion, Differential and Information Geometry
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: math-reasoning-chains-rl
- Title: The Mathematics of Reasoning Chains: RL Reward Modeling
- Category: ai-theory
- Language: en
- Key Concepts: The Mathematics of Reasoning Chains: RL Reward Modeling, Stochastic Dynamics and Statistical Mechanics, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion
- References: attention-mechanisms, stochastic-differential-equations

## Entity: topos-neural-networks
- Title: Topos Theory for Neural Networks
- Category: ai-theory
- Language: en
- Key Concepts: Algebraic Topology, Sheaves, and Category Theory, Topos Theory for Neural Networks, Conclusion
- References: spectral-graph-theory

## Entity: vision-transformers-scaling
- Title: Vision Transformers: Scaling Laws of ViT
- Category: ai-theory
- Language: en
- Key Concepts: Vision Transformers: Scaling Laws of ViT, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Quantum Field Theory and Renormalization Group
- References: attention-mechanisms

## Entity: weight-initialization-signal
- Title: Weight Initialization: Signal Propagation
- Category: ai-theory
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Weight Initialization: Signal Propagation, Conclusion, Quantum Field Theory and Renormalization Group
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
- Key Concepts: Optimal Transport and Wasserstein Metrics, Stochastic Dynamics and Statistical Mechanics, Conclusion, Computational Complexity: PAC-Bayes Bounds
- References: stochastic-differential-equations

## Entity: distributed-training-3d
- Title: Distributed Training: 3D Parallelism Math
- Category: cs
- Language: en
- Key Concepts: Distributed Training: 3D Parallelism Math, Optimal Transport and Wasserstein Metrics, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion
- References: attention-mechanisms

## Entity: information-theory-rate-distortion
- Title: Information Theory: Rate-Distortion & VAEs
- Category: cs
- Language: en
- Key Concepts: Differential and Information Geometry, Stochastic Dynamics and Statistical Mechanics, Conclusion, Information Theory: Rate-Distortion & VAEs
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: quantum-computing-vqe
- Title: Quantum Computing: VQE Math
- Category: cs
- Language: en
- Key Concepts: Symplectic Geometry and Hamiltonian Mechanics, Random Matrix Theory and Spectral Dynamics, Conclusion, Quantum Computing: VQE Math
- References: math/spectral-theory-operators
- Backlinks: research/quantum-risk-management

## Entity: quantum-machine-learning-kernels
- Title: Quantum Machine Learning: Quantum Kernels
- Category: cs
- Language: en
- Key Concepts: Quantum Machine Learning: Quantum Kernels, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion, Symplectic Geometry and Hamiltonian Mechanics
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
- Key Concepts: [[attention-mechanisms|Attention]] Mechanisms: Linear [[attention-mechanisms|Attention]], Random Matrix Theory and Spectral Dynamics, Conclusion, Architecture Mechanics: Attention and Dimensionality
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
- Key Concepts: KV Cache Compression: Token Eviction, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion
- References: attention-mechanisms
- Backlinks: research/mla-financial-reasoning, speculative-decoding

## Entity: long-context-yarn-longrope
- Title: Long Context: YaRN and LongRoPE
- Category: language-models
- Language: en
- Key Concepts: Conclusion, Differential and Information Geometry, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Long Context: YaRN and LongRoPE
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
- Key Concepts: Optimal Transport and Wasserstein Metrics, Mixture of Experts: Routing Math, Stochastic Dynamics and Statistical Mechanics, Conclusion
- References: stochastic-differential-equations

## Entity: model-merging-procrustes
- Title: Model Merging: Geometry of Weight Space Alignment
- Category: language-models
- Language: en
- Key Concepts: Optimal Transport and Wasserstein Metrics, Differential and Information Geometry, Model Merging: Geometry of Weight Space Alignment, Conclusion
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
- Key Concepts: Speculative Decoding: Medusa vs. EAGLE, Stochastic Dynamics and Statistical Mechanics, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Conclusion
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
- Key Concepts: Optimal Transport and Wasserstein Metrics, Stochastic Dynamics and Statistical Mechanics, [[quantization]]: Information Loss in PTQ, Conclusion
- References: quantization, stochastic-differential-equations

## Entity: algebraic-geometry-slt
- Title: Algebraic Geometry in Singular Learning Theory
- Category: math
- Language: en
- Key Concepts: Algebraic Topology, Sheaves, and Category Theory, Random Matrix Theory and Spectral Dynamics, Algebraic Geometry in Singular Learning Theory, Conclusion
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: algebraic-topology-persistent
- Title: Algebraic Topology: Persistent Laplacian & Persistent Bundles
- Category: math
- Language: en
- Key Concepts: Algebraic Topology, Sheaves, and Category Theory, Random Matrix Theory and Spectral Dynamics, Algebraic Topology: Persistent [[spectral-graph-theory|Laplacian]] & Persistent Bundles, Conclusion
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: differential-galois-theory
- Title: Differential Galois Theory
- Category: math
- Language: en
- Key Concepts: Algebraic Topology, Sheaves, and Category Theory, Conclusion, Differential Galois Theory
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
- Key Concepts: Functional Analysis: C*-algebras, Random Matrix Theory and Spectral Dynamics, Conclusion, Symplectic Geometry and Hamiltonian Mechanics
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
- Key Concepts: Algebraic Topology, Sheaves, and Category Theory, Non-commutative Geometry, Conclusion, Symplectic Geometry and Hamiltonian Mechanics
- References: spectral-graph-theory

## Entity: number-theory-l-functions
- Title: Number Theory: L-functions & Langlands
- Category: math
- Language: en
- Key Concepts: Number Theory: L-functions & Langlands, Random Matrix Theory and Spectral Dynamics, Algebraic Topology, Sheaves, and Category Theory, Conclusion
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: optimal-transport-gromov-wasserstein
- Title: Optimal Transport: Gromov-Wasserstein Distance
- Category: math
- Language: en
- Key Concepts: Differential and Information Geometry, Optimal Transport and Wasserstein Metrics, Optimal Transport: Gromov-Wasserstein Distance, Conclusion
- References: convex-optimization, manifold-learning

## Entity: pde-hamilton-jacobi
- Title: Partial Differential Equations: Hamilton-Jacobi
- Category: math
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Partial Differential Equations: Hamilton-Jacobi, Conclusion, Symplectic Geometry and Hamiltonian Mechanics
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
- Key Concepts: Stochastic Calculus on Manifolds, Differential and Information Geometry, Stochastic Dynamics and Statistical Mechanics, Conclusion
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
- Key Concepts: Quantum Field Theory on Curved Spacetime, Differential and Information Geometry, Conclusion, Quantum Field Theory and Renormalization Group
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
- Key Concepts: Algebraic Topology, Sheaves, and Category Theory, Differential and Information Geometry, String Theory: Calabi-Yau Manifolds, Conclusion
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

## Entity: hyperbolic-vol-geometry
- Title: Correlation Is a Hyperbolic Distance
- Category: research
- Language: en
- Key Concepts: Current Findings, Objective, Numerical:, Context, Methodology, Open Questions, Theoretical:, Tools:, References, Insights for AI
- References: finance/sabr-model, heston-model, math/differential-geometry

## Entity: research/mla-financial-reasoning
- Title: Impact of MLA Compression on Financial Time-Series Reasoning
- Category: research
- Language: en
- Key Concepts: Current Findings, Metric, Objective, Context, Models, Methodology, Open Questions, References, Dataset, Insights for AI
- References: attention-mechanisms, deepseek-v3-mla-compression, kv-cache-compression, llm-financial-analysis, quantization, rag, tool-use

## Entity: levy-structured-products
- Title: Lévy Processes and Stochastic-Volatility Models for Structured-Product Pricing
- Category: research
- Language: en
- Key Concepts: Pricing:, Current Findings, Calibration:, Objective, Context, Methodology, Open Questions, Tools:, Simulation:, References, Insights for AI
- References: finance/levy-processes

## Entity: student-t-hmm-bond-regimes
- Title: Student-t HMM for Bank Bond Portfolio Regimes
- Category: research
- Language: en
- Key Concepts: Model:, Current Findings, Insights for AI, Objective, Data:, Context, Methodology, Open Questions, Tools:, References, Validation:
- References: finance/value-at-risk, hidden-markov-models

## Entity: research/quantum-risk-management
- Title: Квантовые алгоритмы в риск-менеджменте
- Category: research
- Language: ru
- Key Concepts: Цель, Ссылки, Методология, Результаты, Инсайты для ИИ, Открытые вопросы, Контекст
- References: quantum-computing-vqe, quantum-machine-learning-kernels

## Entity: copula-models
- Title: Копула-модели
- Category: Модели ценообразования
- Language: ru
- Key Concepts: Расширения:, Обзор и предпосылки, Ограничения и расширения, Основные семейства копул, Динамические копулы, Таблица параметров, Теорема Скляра, Портфельный VaR, Связанные темы, Хвостовые коэффициенты зависимости, Математическая база, Копула-модели, Копула, Ограничения:, Хвостовые коэффициенты зависимости по типам копул
- References: brownian-motion, cox-process, finance/monte-carlo-method, finance/value-at-risk, finance/xva
- Backlinks: cornish-fisher-cvar, cox-process, cs01, cva-wrong-way-risk, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/isda-simm, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/securitization, finance/stylized-facts-returns, finance/swaps, finance/value-at-risk, finance/xva, generative-scenario-models, gnn-credit-risk, graph-neural-networks, survival-risk-prediction, vine-copulas

