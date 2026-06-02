# Knowledge Base Aggregate for AI Synthesis

## System Instructions
All agents should refer to [[GEMINI.md]] for project-wide standards and research protocols. New research findings are located in the `research/` category with structured metadata.

## Entity: course-math-for-ai
- Title: Mathematics for Deep Learning: The PhD Path
- Category: AI & Math
- Language: en
- Key Concepts: 12-week, Capstone project, Prerequisites, Goal:, Week 4 — Optimisation and convexity, Week 3 — Multivariable calculus, Week 6 — Probability theory, Recommended reading, Exercise:, Checkpoint:, Week 11 — Information geometry, Week 9 — Stochastic calculus, Information bottleneck inside a [[transformer-architecture|transformer]]., Week 2 — Spectrum, SVD, tensor decompositions, Week 12 — Optimal transport
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
- Key Concepts: Overview, Mechanism
- References: attention-mechanisms, llm, transformer-architecture

## Entity: lstm-gru
- Title: LSTM and GRU
- Category: AI Architectures
- Language: en
- Key Concepts: GRU (Gated Recurrent Unit):, LSTM (Long Short-Term Memory):, Overview, Gating Mechanisms

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
- Key Concepts: Reward, Mathematical Framework, Simulator gap, Hyperparameter sensitivity, Avellaneda-Stoikov Model, Huang (2023) — SAC for crypto market making, Spooner et al. (2018) — RL Market Making, skew, Action, Related Topics, RL Market Making MDP, Strategy Performance Comparison, Limitations, Overview, Gasperov & Kostanjcar (2021) — RL with adversarial training
- References: attention-mechanisms, deep-rl-execution, optimal-execution, temporal-fusion-transformer
- Backlinks: market-microstructure

## Entity: alpha-factor-research
- Title: Alpha Factor Research
- Category: AI Finance
- Language: en
- Key Concepts: Factor Decay, Mathematical Framework, Information Ratio, Turnover vs Alpha Trade-off, ML-Based Factor Construction, Auto-Encoder Latent Factors, Double Machine Learning for Causal Factors, IC Decay by Factor Type, Alpha Factor Research, Related Topics, Double ML for Fama-French factors (Oprescu et al., 2023), Gradient Boosting Factors, Limitations, Regime sensitivity, factor zoo problem
- References: deep-rl-execution, llm-financial-analysis, temporal-fusion-transformer
- Backlinks: double-ml, nlp-financial-analysis, vine-copulas

## Entity: ml-options-pricing
- Title: ML for Options Pricing
- Category: AI Finance
- Language: en
- Key Concepts: neural network pricing, Mathematical Framework, Volatility Surface Interpolation with LSTMs, Horvath et al. (2021) — Rough vol surface fitting, Regime shifts, ML for Options Pricing, Deep Hedging (Buehler et al., 2019), Interpretability, Related Topics, No-Arbitrage Constraints as Regularisation, Gaussian Process Pricing, Limitations, Overview, Cohen et al. (2023) — No-arbitrage neural vol surface, implied volatility surface
- References: black-scholes, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, temporal-fusion-transformer

## Entity: nlp-financial-analysis
- Title: NLP for Financial Analysis
- Category: AI Finance
- Language: en
- Key Concepts: Mathematical Framework, Loughran & McDonald (2011), Sentiment as a Latent Variable, Earnings Call Analysis, Risk factor changes, Material events (8-K), [[llm]]-Based Information Extraction, FinBERT [[fine-tuning]], Market impact of signals, Event-Driven Return Model, Survivorship bias, Related Topics, NLP for Financial Analysis, Sentiment Signal Accuracy by Model, alternative data
- References: alpha-factor-research, finance/shannon-entropy, fine-tuning, llm, llm-financial-analysis, rag, temporal-fusion-transformer, transformer-architecture
- Backlinks: financial-entropy

## Entity: fourier-neural-operators
- Title: Fourier Neural Operators
- Category: AI Physics
- Language: en
- Key Concepts: Fourier domain, Partial Differential Equations (PDEs), Non-linearity, Fourier Neural Operators (FNO), Operator Neural Network, Fluid Dynamics, Local Skip Connection, How FNO Works, physics of the continuous operator, Material Science, The Operator Learning Problem, Applications, Why It Matters: Resolution Invariance, Related Topics, Weather Forecasting
- References: neural-operators, partial-differential-equations, pinns
- Backlinks: fredholm-theory

## Entity: ai-physics/hamiltonian-nn
- Title: Hamiltonian Neural Networks (HNN)
- Category: AI Physics
- Language: en
- Key Concepts: Energy Conservation:, Phase Space Consistency:, Applications, Celestial Mechanics:, Hamiltonian, Hamiltonian Neural Networks (HNN), The Problem with Black-Box Models, Mathematical Core, How HNNs Work:, Control Systems:, Related Topics, Data Efficiency:, Auto-Differentiation, Key Advantages, Molecular Dynamics:
- References: equivariant-nn, math/variational-calculus, pinns
- Backlinks: ai-theory/spatial/equivariant-gnn, equivariant-nn, kuramoto-model, lagrange-multipliers, neural-odes, neural-operators, pinns, symplectic-geometry

## Entity: 3d-gaussian-splatting
- Title: 3D Gaussian Splatting
- Category: AI Theory
- Language: en
- Key Concepts: Storage, Virtual Reality, Covariance Matrix ($\Sigma$), Opacity ($\alpha$), 3D Gaussian Splatting (3DGS), Splatting, Editing, 1. The Core Idea: Gaussians as Primitives, Position ($x, y, z$), Training Speed, 4. 3DGS vs. NeRF, 3. Optimization and Learning, Related Topics, Visualization: Gaussian Projections, Color
- References: automatic-differentiation, convex-optimization, geometric-deep-learning, manifold-learning, nerf, transformer-architecture
- Backlinks: nerf, neural-radiance-fields-math

## Entity: activation-patching
- Title: Activation Patching
- Category: AI Theory
- Language: en
- Key Concepts: Combinatorial explosion., Activation Patching, Indirect Object Identification (IOI), Duplicate Token Heads, Path Patching vs Activation Patching, Correlation ≠ causation., The IOI Task, Related Topics, Name Mover Heads, The Clean/Corrupted Paradigm, Limitations, Nonlinearity., Factual Recall Patching, Path patching, Activation patching
- References: attention-mechanisms, circuit-discovery, mechanistic-interpretability, transformer-architecture
- Backlinks: circuit-discovery, probing-classifiers, superposition

## Entity: ai-theory/adversarial-examples
- Title: Adversarial Examples
- Category: AI Theory
- Language: en
- Key Concepts: Mathematical Framework, Noise vs. adversarial robustness., Carlini–Wagner ($\ell_2$) Attack., Min-Max Formulation., Adversarial Examples, Transferability and feature alignment., LLMs and adversarial robustness., Certification Radius., Advantages and limitations., Limitations and Open Questions, Related Topics, Certified Robustness, PGD (Projected [[convex-optimization|Gradient Descent]]) Attack., Visualization, Applications and Threats
- References: convex-optimization, diffusion-models, math/concentration-inequalities, mechanistic-interpretability, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: differential-privacy, metric-spaces

## Entity: attention-mechanisms
- Title: Attention Mechanisms
- Category: AI Theory
- Language: en
- Key Concepts: Visualization: Attention Matrix, A. Multi-Query Attention (MQA), 4. Hardware Optimization: FlashAttention, $\sqrt{d_k}$, Queries ($Q$), Values ($V$), FlashAttention, 1. Scaled Dot-Product Attention, Keys ($K$), Related Topics, "Attention Is All You Need", Memory-Bound, Recomputation, Llama 3, single pair of Key and Value heads
- References: flash-attention, inference-serving, llm, paged-attention, transformer-architecture
- Backlinks: activation-functions-math, activation-patching, ai-market-making, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-linear-kernel, autoregressive-models, circuit-discovery, code-models, context-length, deepseek-v3-mla-compression, diffusion-models, distributed-training-3d, embedding-models, equivariant-diffusion-models, equivariant-nn, finance/adversarial-stress-testing, finance/bachelier-formula, finance/gnn-finance, finance/transformer-timeseries, fine-tuning, flash-attention, geometry-of-attention, gnn-credit-risk, gpt-architecture, gpu-architecture, graph-neural-networks, hardware-io-attention, induction-heads, inference-serving, kan, kv-cache-compression, language-models/mamba-ssm, linear-algebra, llm, long-context-yarn-longrope, math-reasoning-chains-rl, mechanistic-interpretability, mechanistic-interpretability-sae, meta-learning, mixture-of-depths, mla, model-parallelism, moe-routing, neural-scaling-laws, paged-attention, positional-encodings, probing-classifiers, quantization, quantum-machine-learning-kernels, research/mla-financial-reasoning, rl-trader, rope-scaling, slm, speculative-decoding-medusa, state-space-models, temporal-fusion-transformer, tensors-and-contractions, tokenization, tokenization-bpe-unigram, training-dynamics, transformer-architecture, universal-approximation-theory, vision-transformers, vision-transformers-scaling, vlm

## Entity: automatic-differentiation
- Title: Automatic Differentiation
- Category: AI Theory
- Language: en
- Key Concepts: Implicit differentiation, backpropagation, Automatic differentiation (AD, autodiff), Efficient when $n \gg m$, Source-to-source., PDE residuals in [[pinns]]:, Differentiable physics., Numerical considerations, Applications, Mixed precision., Related Topics, Checkpointing., Reverse mode, Source-to-source vs tracing, Dual numbers and operator overloading
- References: black-scholes, convex-optimization, finance/monte-carlo-method, inference-serving, neural-scaling-laws, partial-differential-equations, pinns
- Backlinks: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, category-theory-ml, chain-rule-autodiff, convex-analysis, deep-galerkin, differential-equations, gradient-hessian-jacobian, linear-algebra, mcts, multivariable-calculus, neural-odes, partial-differential-equations, pinns, qat, reinforcement-learning, tensors-and-contractions, variational-autoencoders

## Entity: bayesian-deep-learning
- Title: Bayesian Deep Learning
- Category: AI Theory
- Language: en
- Key Concepts: Expected Calibration Error (ECE), Medical Imaging:, epistemic, Financial Forecasting:, Kronecker-Factored Laplace (KFAC-Laplace), Autonomous Driving:, Mean-field variational inference, Variational Inference and the ELBO, Applications and Impact, functional diversity, Laplace Approximation, SGLD and MCMC in Neural Networks, Epistemic versus Aleatoric Uncertainty, Calibration and Expected Calibration Error, Open Frontiers
- References: evaluation-llms, gaussian-processes, math/kolmogorov-probability-axioms, mcmc, neural-scaling-laws, statistical-mechanics, variational-autoencoders
- Backlinks: ai-theory/in-context-learning, de-finetti-exchangeability, gaussian-processes

## Entity: causal-inference-do-calculus
- Title: Causal Inference: Do-Calculus & SCM
- Category: AI Theory
- Language: en
- Key Concepts: DERIVATION: Identification of the Frontdoor Formula, Action:, Counterfactuals, Rule 3 (Insertion/Deletion of actions):, Rule 1 (Insertion/Deletion of observations):, What Is It, Related Topics, Causal Inference: Do-Calculus & SCM, do-calculus, Backdoor Criterion, The Do-Operator, The Rules of Do-Calculus, Rule 2 (Action/Observation exchange):, Causal Effect, Abduction:
- References: bayesian-networks, causal-inference-trading, graph-theory, math/m-estimators

## Entity: circuit-discovery
- Title: Circuit Discovery
- Category: AI Theory
- Language: en
- Key Concepts: Circuit discovery, Step 4: Verification., features, Negative heads., OV circuit, Edge Attribution Patching (EAP), Name mover heads., Copy heads., Related Topics, Induction heads, Circuit Discovery, ACDC, polysemantic, QK circuit, circuit
- References: activation-patching, attention-mechanisms, mechanistic-interpretability, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching

## Entity: contrastive-learning
- Title: Contrastive Learning
- Category: AI Theory
- Language: en
- Key Concepts: CLIP, Network design, Memory queue, Zero-shot classification, Why Contrastive Learning Works, Financial time series, MoCo: Memory and Momentum, Metric learning, BYOL: Learning Without Negatives, Loss, CLIP: Cross-Modal Contrastive Learning, NT-Xent Loss and Information Maximization, Collapse prevention, Online network, SimCLR
- References: embedding-models, finance/shannon-entropy, fine-tuning, generative-models, neural-scaling-laws, pac-learning, transformer-architecture, variational-autoencoders
- Backlinks: vision-transformers

## Entity: diffusion-models
- Title: Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: forward process, Training, Reverse process (learned):, Molecular design., denoising score matching, Forward process (tractable Markov chain):, Scalability and Conditioning, Evidence Lower Bound (ELBO) Connection, Memory of training data., Applications, Classifier-free guidance, Slow sampling., Related Topics, marginal distribution, Inference (sampling):
- References: attention-mechanisms, fokker-planck-equation, generative-models, manifold-learning, neural-scaling-laws, ornstein-uhlenbeck-process, stochastic-differential-equations, transformer-architecture, variational-autoencoders
- Backlinks: ai-theory/adversarial-examples, energy-based-models, equivariant-diffusion-models, generative-models, laplacian, math/sde-numerical-methods, nonequilibrium-statmech, variational-autoencoders

## Entity: energy-based-models
- Title: Energy-Based Models
- Category: AI Theory
- Language: en
- Key Concepts: contrastive divergence, Contrastive Divergence and Approximation, Score Matching: Avoiding the Partition Function, direct, Connection to [[statistical-mechanics|Statistical Mechanics]], Restricted Boltzmann Machines, Joint Energy Modeling (JEM), Denoising score matching, MLE and the Partition Function Problem, RBM, Modern EBMs and Hybrid Modeling
- References: convex-optimization, diffusion-models, manifold-learning, statistical-mechanics

## Entity: equivariant-diffusion-models
- Title: Equivariant Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: Non-compact Groups:, equivariant, Robotics:, Advantages:, Applications, Special Euclidean group, Invariant Schedulers:, Related Topics, Message passing:, Protein Folding and Design:, Computational Complexity:, Robustness:, Equivariant [[stochastic-differential-equations|SDE]] Framework, Equivariant Diffusion Models (EDMs), Molecular Generation:
- References: ai-theory/spatial/equivariant-gnn, attention-mechanisms, diffusion-models, laplacian, lie-algebras-physics, lie-groups, manifold-learning, stochastic-differential-equations

## Entity: ai-theory/spatial/equivariant-gnn
- Title: Equivariant GNN (E(n)-GNN)
- Category: AI Theory
- Language: en
- Key Concepts: Why Equivariance?, AI for Science, Invariance, Molecular Modeling:, Coordinate Updates:, Equivariant Message Passing, Impact and Applications, Related Topics, Equivariance, Mathematical Concept, Robotics:, Structural Biology:, Invariant Messages:, Equivariant Graph Neural Networks (E(n)-GNN)
- References: ai-physics/hamiltonian-nn, math/foundations/group-theory-symmetries, spectral-graph-theory
- Backlinks: equivariant-diffusion-models

## Entity: equivariant-nn
- Title: Equivariant Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: $G$-equivariant, SchNet (2017):, Mathematical Framework, Physical consistency:, $G$-invariant, NequIP (2022):, Prerequisites, Robotics:, type-$\ell$ features, Protein structure prediction:, AlphaFold insight:, SE(3)-[[transformer-architecture|Transformer]] (2020):, Applications, spherical tensors, Physics / mathematics:
- References: ai-physics/hamiltonian-nn, attention-mechanisms, group-theory, pinns, qft-basic, scattering-amplitudes, transformer-architecture
- Backlinks: ai-physics/hamiltonian-nn, graph-neural-networks, group-theory, kan, lie-groups, neural-operators, pinns, representation-theory-ml

## Entity: factor-graphs-inference
- Title: Factor Graphs & Sum-Product Algorithm
- Category: AI Theory
- Language: en
- Key Concepts: Loopy Belief Propagation, Message Passing Rules, Sum-Product Algorithm, factor nodes, Max-Product Algorithm, What Is It, Related Topics, The Sum-Product Algorithm, Variable to Factor Message:, Bethe Free Energy, Factor to Variable Message:, Factor Graphs & Sum-Product Algorithm, Beyond Sum-Product: Max-Product, Convergence, DERIVATION: Marginal on a Chain
- References: bayesian-networks, graph-theory, kalman-filter, variational-inference-math

## Entity: gauge-equivariant-nn
- Title: Gauge Equivariant Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Fiber Bundles and Connections, Gauge Equivariant Convolution, Mathematical Formulation, Gauge Equivariant Neural Networks
- References: manifold-learning

## Entity: gaussian-processes
- Title: Gaussian Processes
- Category: AI Theory
- Language: en
- Key Concepts: Bayesian optimization, GP Regression and Posterior, Kernel Engineering and Knowledge Encoding, Financial volatility, Applications, Matérn kernel:, ARD (Automatic Relevance Determination), Gaussian Processes, Marginal Likelihood and Hyperparameter Learning, Deep kernels, expectation propagation, Kernels and Positive Semidefiniteness, Laplace approximation, Computational Bottlenecks and Sparse Approximations, Nyström approximation
- References: bayesian-deep-learning, finance/monte-carlo-method, math/kolmogorov-probability-axioms, neural-scaling-laws, pinns, statistical-mechanics
- Backlinks: ai-theory/neural-tangent-kernel, bayesian-deep-learning, bayesian-nonparametrics, hilbert-banach-spaces, multivariate-normal

## Entity: generative-models
- Title: Generative Models
- Category: AI Theory
- Language: en
- Key Concepts: Decoder, tractability of density, [[llm|large language models]], Sample, variational autoencoder, Normalizing Flows, sample quality, Encoder, forward process, Prior, Autoregressive models, Learn latent representations, Energy-Based Models, Audio and speech., training is unstable
- References: diffusion-models, finance/monte-carlo-method, flow-matching, generative-scenario-models, hamiltonian-mechanics, llm, neural-odes, schrodinger-equation, sparse-autoencoders
- Backlinks: contrastive-learning, diffusion-models, generative-scenario-models, signature-based-models, variational-autoencoders

## Entity: autoregressive-models
- Title: Generative Models: Autoregressive Math
- Category: AI Theory
- Language: en
- Key Concepts: Causal [[attention-mechanisms|Attention]] (Transformers):, Masked Architectures, Masked Convolutions (PixelCNN):, Factorization
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
- Key Concepts: Formulation and Notation, GraphSAGE (Hamilton et al. 2017)., Regression on graph properties, Applications, Pharmacology and materials., Graph [[attention-mechanisms|Attention]] Network (GAT, Veličković et al. 2018)., Architectural Variants, Graph classification, Structural dependence., Related Topics, Expressiveness., Message Passing Paradigm (MPNN), message passing, Over-smoothing and Over-squashing, Over-squashing.
- References: attention-mechanisms, copula-models, equivariant-nn, fraud-detection, gnn-credit-risk, neural-odes, spectral-graph-theory, transformer-architecture
- Backlinks: gnn-credit-risk, graph-curvature-oversquashing, graph-theory, laplacian

## Entity: ai-theory/in-context-learning
- Title: In-Context Learning
- Category: AI Theory
- Language: en
- Key Concepts: See Also, Verbalization sensitivity, Zero-shot, Mechanistic Substrate: Induction Heads, Sensitivity to Prompt Format and Label Permutation, task vectors, Task Vectors and Representation Engineering, Bayesian Interpretation and Posterior Inference, Copy mechanism, Spurious correlations, Label order effects, In-Context Learning vs [[fine-tuning]], demo–query, Few-Shot vs Zero-Shot Scaling, Attend to next token
- References: attention-mechanisms, bayesian-deep-learning, chain-of-thought, fine-tuning, mechanistic-interpretability, neural-scaling-laws, prompt-engineering, transformer-architecture
- Backlinks: ai-theory/neural-tangent-kernel, attention-kernel, induction-heads, training-dynamics

## Entity: induction-heads
- Title: Induction Heads
- Category: AI Theory
- Language: en
- Key Concepts: Visualization: The "Aha!" Moment, Induction Heads, Query (Q), What Is It, phase transition, Increases, Related Topics, Why It Matters, Circuit Discovery, In-Context Learning (ICL), Layer 1: Previous Token Head, Layer 2: Induction Head, Value (V), The Two-Layer Mechanism, two layers
- References: ai-theory/in-context-learning, attention-mechanisms, mechanistic-interpretability, transformer-architecture

## Entity: information-bottleneck-theory
- Title: Information Bottleneck Theory
- Category: AI Theory
- Language: en
- Key Concepts: Fitting Phase, Exact Solution and the IB Curve, Application to Deep Learning, Compression Phase, IB curve, The Information Bottleneck Objective, Information Bottleneck Theory
- References: convex-optimization
- Backlinks: statistical-mechanics-learning

## Entity: ai-theory/knowledge-distillation
- Title: Knowledge Distillation
- Category: AI Theory
- Language: en
- Key Concepts: Conditional independence structure., Orca-style distillation:, Why soft labels work: dark knowledge, Privacy-preserving ML:, Cross-domain transfer:, Self-distillation and born-again networks, Pseudo-labeling:, Alpaca-style distillation:, prior or constraint, Curriculum learning:, [[quantization]]-aware distillation, Applications, Example: vision, PAC-Bayes theory, FitNet (Romero et al., 2015)
- References: attention-mechanisms, evaluation-llms, fine-tuning, manifold-learning, neural-scaling-laws, pac-learning, quantization, transformer-architecture

## Entity: kolmogorov-complexity
- Title: Kolmogorov Complexity
- Category: AI Theory
- Language: en
- Key Concepts: Constant dependence on UTM., Mathematical Framework, No finite-sample guarantees., Prerequisites, Kolmogorov Complexity, Bioinformatics:, Compression-based AGI:, Applications, Key Results & Properties, Related Topics, Invariance theorem., Anomaly detection:, Shannon-Kolmogorov duality:, Definition., Visualization
- References: finance/lempel-ziv-complexity, finance/shannon-entropy, pac-learning
- Backlinks: chain-of-thought, math/cantor-diagonal, math/godel-incompleteness, pac-learning

## Entity: learnable-activations
- Title: Learnable Activations and B-splines
- Category: AI Theory
- Language: en
- Key Concepts: Bayesian neural networks., High-dimensional tasks., Swish., Scientific tasks., Local support., Polynomial activations., Practical considerations, KAN: activations on edges, Initialisation., B-spline activations., Applications, Learnable activation functions, Related Topics, Smoothness., Why not fixed activations
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
- Key Concepts: The Probability Flow ODE, Mathematical Foundations of Diffusion Models, Reverse [[stochastic-differential-equations|SDE]] and Score Matching, Langevin Dynamics Connection, Forward [[stochastic-differential-equations|SDE]], score function
- References: stochastic-differential-equations

## Entity: mechanistic-interpretability
- Title: Mechanistic Interpretability
- Category: AI Theory
- Language: en
- Key Concepts: Mechanistic Interpretability, Circuit Analysis:, Activation Patching:, Induction Heads:, Detecting Deception:, Mathematical Core, polysemanticity, Related Topics, Superposition Hypothesis:, Sparse Autoencoders (SAE):, Logit Lens:, Residual Stream:, Alignment Verification:, Model Editing (ROME/MEMIT):, Implementation Snippet
- References: attention-mechanisms, constitutional-ai, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, chain-of-thought, circuit-discovery, constitutional-ai, induction-heads, language-models/safety/rlhf-dpo, llm, math/godel-incompleteness, mixture-of-experts, neural-scaling-laws, pac-learning, probing-classifiers, rlhf, slm, sparse-autoencoders, superposition

## Entity: meta-learning
- Title: Meta-Learning
- Category: AI Theory
- Language: en
- Key Concepts: Applications:, second-order derivatives, in-context learning (ICL), Reptile, Model-Agnostic Meta-Learning (MAML), Formal Setup, Alternative Meta-Learners, Limitations:, Matching Networks, Prototypical Networks, Meta-Learning and In-Context Learning, First-Order MAML (FOMAML):, Applications and Limitations, Algorithm:
- References: attention-mechanisms, chain-of-thought, convex-optimization, llm, neural-scaling-laws, reinforcement-learning, rlhf, transformer-architecture
- Backlinks: prompt-engineering

## Entity: model-based-rl
- Title: Model-Based Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: MBPO: Model-Based Policy Optimization, MCTS and AlphaZero, Monte Carlo Tree Search (MCTS), DreamerV3, Model-Based Reinforcement Learning, The Dyna Architecture, Probabilistic models., Dyna, Model Error Compounding, Related Topics, world model, Ensembles., Model-Free vs Model-Based, Dreamer / DreamerV3, Model-based RL (MBRL)
- References: offline-rl, ppo, reinforcement-learning, soft-actor-critic
- Backlinks: offline-rl, ppo, soft-actor-critic

## Entity: neural-odes
- Title: Neural ODEs
- Category: AI Theory
- Language: en
- Key Concepts: $O(1)$, adaptive compute, Adjoint method for [[automatic-differentiation|backpropagation]], adjoint sensitivity method, [[hamiltonian-nn|Hamiltonian Neural Networks (HNNs)]], Advantages of the continuous formulation, Neural Ordinary Differential Equations (Neural ODEs), Latent ODE., Generative modelling., Physics and scientific models., Control and reinforcement learning., Applications, Cost., Training difficulty., Related Topics
- References: ai-physics/hamiltonian-nn, automatic-differentiation, brownian-motion, hamiltonian-mechanics, pinns
- Backlinks: calculus-of-variations, generative-models, graph-neural-networks, math/ode-stability, neural-sdes-finance, operator-semigroups, reinforcement-learning, state-space-models, variational-autoencoders

## Entity: nerf
- Title: Neural Radiance Fields (NeRF)
- Category: AI Theory
- Language: en
- Key Concepts: Volume Rendering, Inference, Capture, 1. The Core Concept: Volumetric Rendering, Training, A. Positional Encoding, Pose Estimation, Speed, Input, 3. The NeRF Pipeline, Visualization: The NeRF Ray Casting, 2. Key Innovations, Related Topics, Output, Instant-NGP
- References: 3d-gaussian-splatting, manifold-learning, positional-encodings, transformer-architecture
- Backlinks: 3d-gaussian-splatting, neural-radiance-fields-math

## Entity: neural-scaling-laws
- Title: Neural Scaling Laws
- Category: AI Theory
- Language: en
- Key Concepts: Mathematical Framework, Performance prediction:, Distribution shift., Prerequisites, Research prioritisation:, Emergent abilities., Chinchilla (Hoffmann et al. 2022)., Log-linear reliability:, Scaling beats architecture search:, Inference-time scaling (test-time compute)., Architecture dependence., Inference-time compute allocation:, Quality metrics., Chinchilla correction:, Applications
- References: attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, pac-learning
- Backlinks: ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, automatic-differentiation, bayesian-deep-learning, bitnet, contrastive-learning, curriculum-learning, diffusion-models, gaussian-processes, learnable-activations, llm, meta-learning, mixture-of-experts, pac-learning, positional-encodings, quantization, reasoning-models, rlhf, slm, test-time-scaling, training-dynamics, transformer-architecture

## Entity: ai-theory/neural-tangent-kernel
- Title: Neural Tangent Kernel
- Category: AI Theory
- Language: en
- Key Concepts: Practical Implications, what happens to the function dynamics as the network width (number of hidden units) $m \to \infty$?, Finite-Width Corrections and Mean Field Theory, PAC-style guarantees, [[transformer-architecture|transformer]] architectures, NTK for Transformers and Modern Architectures, The NTK Definition, Width requirements:, Convergence Guarantees and Over-Parameterization, Gradient Flow in Function Space, lazy training regime, Learning rate scaling:, at infinite width, this kernel becomes deterministic and constant in time, Mean field theory, feature learning regime
- References: ai-theory/in-context-learning, attention-mechanisms, automatic-differentiation, convex-optimization, finance/shannon-entropy, gaussian-processes, math/concentration-inequalities, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: neural-radiance-fields-math, ntk, statistical-mechanics-learning

## Entity: offline-rl
- Title: Offline Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: Healthcare., TD3+BC, The Distributional Shift Problem, Behaviour Cloning Baseline, Autonomous driving., Decision [[transformer-architecture|Transformer]], Applications, Related Topics, Implicit Q-Learning (IQL), batch RL, Conservative Q-Learning (CQL), IQL, Robotics., Offline Reinforcement Learning, Finance.
- References: deep-rl-execution, model-based-rl, reinforcement-learning, soft-actor-critic, transformer-architecture
- Backlinks: model-based-rl, soft-actor-critic

## Entity: pac-learning
- Title: PAC Learning & VC Dimension
- Category: AI Theory
- Language: en
- Key Concepts: Active learning:, shattered, Scientific learning:, Mathematical Framework, Lower bounds:, Differential privacy:, Applications, Key Results & Properties, Related Topics, Theoretical foundation for SVMs:, Bias-variance decomposition., Boosting:, Visualization, Limitations, Deep learning gap.
- References: finance/shannon-entropy, kolmogorov-complexity, mechanistic-interpretability, neural-scaling-laws
- Backlinks: ai-theory/adversarial-examples, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, code-models, contrastive-learning, empirical-processes, kolmogorov-complexity, neural-scaling-laws, sparse-autoencoders, statistical-mechanics-learning, vlm

## Entity: probing-classifiers
- Title: Probing Classifiers
- Category: AI Theory
- Language: en
- Key Concepts: Linear vs Nonlinear Probes, Probing classifiers, Bias detection., Representation vs computation., probes, Representational Geometry, Applications, Representation quality metrics., Related Topics, Layer-Wise Analysis in BERT, Linear probes, Probing Classifiers, Limitations, probing selectivity, Causality gap.
- References: activation-patching, attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, sparse-autoencoders

## Entity: ppo
- Title: Proximal Policy Optimization (PPO)
- Category: AI Theory
- Language: en
- Key Concepts: [[rlhf]] / [[llm]] alignment., PPO-Clip, Applications, Proximal Policy Optimization (PPO), Hyperparameters, Generalized Advantage Estimation (GAE), Full PPO Loss, TRPO, Motivation: The Policy Update Problem, Games., Related Topics, Continuous control., GAE, The Clipped Surrogate Objective, Training Dynamics
- References: finance/shannon-entropy, llm, model-based-rl, reinforcement-learning, rlhf, soft-actor-critic
- Backlinks: model-based-rl, soft-actor-critic

## Entity: rlhf
- Title: RLHF (Reinforcement Learning from Human Feedback)
- Category: AI Theory
- Language: en
- Key Concepts: Multi-Objective Alignment:, Disadvantages:, Constitutional AI: AI Critique Instead of Human Labels, Advantages:, Preference Data Quality:, Three-Stage Pipeline, Why KL Regularization: Preventing Reward Hacking, Stage 2: Reward Model Training, Open Problems, Reward Model Generalization:, alignment tax, Why RLHF Works: Human Preference as Orthogonal Signal, [[dpo]]: Direct Preference Optimization, Stage 3: PPO Optimization, Alignment Tax: Capability-Alignment Tradeoff
- References: chain-of-thought, dpo, finance/shannon-entropy, fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, reinforcement-learning, transformer-architecture
- Backlinks: causal-inference, chain-of-thought, constitutional-ai, dpo, evaluation-llms, f-divergences, fine-tuning, language-models/safety/rlhf-dpo, llm, mechanism-design, meta-learning, orm-prm, ppo, preference-optimization, preference-optimization-variants, prm, prompt-engineering, reasoning-models, reinforcement-learning, soft-actor-critic, synthetic-data-alignment

## Entity: reinforcement-learning
- Title: Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: replay buffer, $\epsilon$-greedy, Actor-Critic., Resource optimisation., target network, Bellman equation, Games., Reinforcement Learning, explore/exploit, Q-learning., Language models., Off-policy vs On-policy, Model-based vs Model-free, Intrinsic curiosity, Applications, Soft Actor-Critic (SAC)
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
- Key Concepts: REINFORCE, The Theorem

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
- Key Concepts: $SO(3)$ and $SE(3)$ Representations, Representation Theory for Machine Learning, Group Actions and Equivariance, Tensor Products and Clebsch-Gordan Coefficients
- References: equivariant-nn

## Entity: soft-actor-critic
- Title: Soft Actor-Critic (SAC)
- Category: AI Theory
- Language: en
- Key Concepts: Reparameterization Trick, Architecture: Three Networks, Twin critics, Actor Loss, Finance., Applications, Soft Actor-Critic (SAC), MBPO., Automatic Entropy Tuning, Sample Efficiency vs PPO, Related Topics, policy [[shannon-entropy|entropy]], SAC vs TD3 vs PPO, Energy systems., Maximum [[shannon-entropy|Entropy]] RL
- References: finance/shannon-entropy, model-based-rl, offline-rl, ppo, reinforcement-learning, rlhf
- Backlinks: model-based-rl, offline-rl, ppo

## Entity: sparse-autoencoders
- Title: Sparse Autoencoders (SAE)
- Category: AI Theory
- Language: en
- Key Concepts: Training pipeline., Circuit analysis:, Mathematical Framework, L1-penalty SAE., Computational cost., Prerequisites, monosemantic, Superposition geometry:, Steering vectors:, Interpretability gap., Cross-layer universality:, Applications, Feature splitting:, Key Results & Properties, Related Topics
- References: finance/shannon-entropy, llm, mechanistic-interpretability, pac-learning, transformer-architecture
- Backlinks: circuit-discovery, generative-models, learnable-activations, mechanistic-interpretability, probing-classifiers, superposition, variational-autoencoders

## Entity: state-space-models
- Title: State Space Models (SSM)
- Category: AI Theory
- Language: en
- Key Concepts: Comparison: SSM vs. Attention, with linear constant factors, Audio & music, Explicit diagonalization, parallel prefix scan, HiPPO: Long-Range Polynomial Approximation, unrolled as a convolution, Bridging, $\sim 1000\times$ speedup, selection mechanism, S4: Structured State Matrices, Applications, Interpretability, Structured State Space Duality, Control & robotics
- References: attention-mechanisms, kalman-filter, llm, math/spectral-theory-operators, mixture-of-experts, neural-odes, nonlinear-filtering, transformer-architecture
- Backlinks: attention-kernel, context-length

## Entity: superposition
- Title: Superposition & Linear Representation
- Category: AI Theory
- Language: en
- Key Concepts: Superposition and Linear Representation, What Is It, Mathematical Framework, Implications for AI Safety, Model Steerability, Detecting Deception, Polysemanticity, Related Topics, more features than it has dimensions, Visualizing Dimension vs. Features, Sparse Autoencoders (SAE), polytopes, Uncovering Hidden Capabilities, Linear Representation Hypothesis, The Toy Model of Superposition
- References: activation-patching, llm, mechanistic-interpretability, sparse-autoencoders

## Entity: transformer-architecture
- Title: Transformer Architecture
- Category: AI Theory
- Language: en
- Key Concepts: 4. The Softmax Bottleneck, Post-Norm, Transformer Architecture: The Foundation of LLMs, Pre-Norm, Sinusoidal, RMSNorm, Related Topics, 2. Normalization: Stability at Scale, RoPE (Rotary Positional Embeddings), [[attention-mechanisms|Attention]] Layer, Stability, 3. Positional Embeddings: Giving Time to Space, 5. Architectural Variants, The Bottleneck, Relative Distance
- References: attention-mechanisms, mixture-of-experts, neural-scaling-laws
- Backlinks: 3d-gaussian-splatting, activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-mechanisms, bitnet, chain-of-thought, circuit-discovery, code-models, context-length, contrastive-learning, course-math-for-ai, decision-transformers, deep-hedging, diffusion-models, embedding-models, equivariant-nn, finance/transformer-timeseries, fine-tuning, fraud-detection, gnn-credit-risk, gpt-architecture, graph-neural-networks, induction-heads, inference-serving, kan, kolmogorov-arnold-theorem, language-models/mamba-ssm, learnable-activations, linear-algebra, llm, logistic-regression, lora-peft, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/godel-incompleteness, mechanistic-interpretability, meta-learning, mixture-of-depths, mixture-of-experts, model-parallelism, moe-routing, multi-token-prediction, nerf, neural-radiance-fields-math, news-sentiment-trading, nlp-financial-analysis, offline-rl, portfolio-optimization-ml, positional-encodings, quantization, rlhf, rope-scaling, slm, sparse-autoencoders, state-space-models, temporal-fusion-transformer, tokenization, training-dynamics, universal-approximation-theory, vector-databases, vision-transformers, vlm, volatility-forecasting

## Entity: variational-autoencoders
- Title: Variational Autoencoders (VAE)
- Category: AI Theory
- Language: en
- Key Concepts: disentangled, decoder, The Reparameterization Trick, VQ-VAE, Related Articles, Extensions and Applications, Connection to Diffusion Models, Theoretical Significance, reparameterization trick, encoder, The Evidence Lower Bound (ELBO), Architecture: Encoder and Decoder, Variational Autoencoder, Stable Diffusion, discrete
- References: automatic-differentiation, convex-optimization, diffusion-models, generative-models, math/kolmogorov-probability-axioms, neural-odes, sparse-autoencoders, statistical-mechanics
- Backlinks: bayesian-deep-learning, bayesian-inference, change-of-variables, contrastive-learning, convexity, diffusion-models, information-theory-basics, jensens-inequality, manifold, pca, variational-inference

## Entity: vision-transformers
- Title: Vision Transformers (ViT)
- Category: AI Theory
- Language: en
- Key Concepts: Mathematical Framework, [[transformer-architecture|Transformer]] architecture, Python Implementation (Conceptual), Learnable Embeddings, What Is It, Data Requirement, Related Topics, Patch Partitioning, Position Embeddings, Vision Transformers (ViT), Inductive Bias, [CLS] Token, Architecture, Scaling, ViT vs. CNNs
- References: attention-mechanisms, contrastive-learning, transformer-architecture, vlm

## Entity: about
- Title: About Me
- Category: About Me
- Language: en
- Key Concepts: Event Manager, [[llm]] Wiki, Nyquist, 2022 – 2023, EGOR GALKIN, Technical Stack, Quantum Physics, Methodologies, 2025 – Present, Principal Economist / Risk Analyst, AI in Finance, Expert, Ultima Thule, Tools, Principal Economist at the Bank of Russia
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
- Key Concepts: Laplace's Method, Method of Stationary Phase, The Saddle-Point Method (Method of Steepest Descent), Asymptotic Analysis of Integrals

## Entity: calculus-of-variations
- Title: Calculus of Variations
- Category: Advanced Analysis
- Language: en
- Key Concepts: Lagrangian, Euler-Lagrange equation, Regularization, Visualization: The Shortest Path (Geodesic), Calculus of Variations, Related Topics, functionals, Geodesics, Variational Inference (VI), Principles of Physics, Variation and Modern AI, Hamilton's Principle, Euler-Lagrange Equation, Neural ODEs, The Fundamental Problem
- References: functional-analysis, lagrangian-mechanics, neural-odes, variational-inference
- Backlinks: deep-ritz-method, fixed-point-theorems

## Entity: fixed-point-theorems
- Title: Fixed Point Theorems
- Category: Advanced Analysis
- Language: en
- Key Concepts: existence, 3. Schauder Fixed Point Theorem (The Engine of PDEs), compact, Reinforcement Learning, The Intuition, Solving ODEs, 1. Banach Contraction Principle (The Engine of Convergence), Economics, Applications, set-valued functions, "engines of existence", Related Topics, contraction mapping, Game Theory, 2. Brouwer Fixed Point Theorem (The Engine of Topology)
- References: calculus-of-variations, convexity, hilbert-banach-spaces, reinforcement-learning
- Backlinks: proximal-algorithms-admm

## Entity: fredholm-theory
- Title: Fredholm Theory
- Category: Advanced Analysis
- Language: en
- Key Concepts: Visualization: Kernel Smoothing, Fredholm Theory, Inverse Problems, Index and Fredholm Operators, Atiyah-Singer Index Theorem, integral equations, The Integral Equation, Related Topics, Fredholm Alternative, kernel, Spectral Analysis, Kernel Machines, Why It Matters for AI: Neural Operators, index, Fredholm operator
- References: fourier-neural-operators, functional-analysis, partial-differential-equations

## Entity: microlocal-analysis
- Title: Microlocal Analysis
- Category: Advanced Analysis
- Language: en
- Key Concepts: AI Interpretability, cotangent bundle, Microlocal Analysis, symbol, Wave Front Set, Hamiltonian trajectories, Inverse Problems, Related Topics, Why It Matters, The Wave Front Set ($WF$), where, Pseudodifferential Operators ($\Psi$DO), which direction, Propagation of Singularities, phase space
- References: schwartz-distributions, symplectic-geometry

## Entity: proximal-algorithms-admm
- Title: Proximal Algorithms & ADMM
- Category: Advanced Analysis
- Language: en
- Key Concepts: DERIVATION: Proximal Operator of the $L_1$ Norm, The Proximal Operator, What Is It, Proximal Gradient Method, Convergence, ADMM: Alternating Direction Method of Multipliers, Proximal Algorithms & ADMM, Alternating Direction Method of Multipliers (ADMM), Related Topics, proximal operator, soft-thresholding, Augmented Lagrangian
- References: convex-optimization, fixed-point-theorems

## Entity: deep-ritz-method
- Title: The Deep Ritz Method
- Category: Advanced Analysis
- Language: en
- Key Concepts: Mesh-free:, What Is It, Deep Ritz Framework, DERIVATION: Ritz Method for the Heat Equation, Architecture: Residual Networks, Penalty Method, Handling Boundary Conditions, Residual Networks (ResNets), Related Topics, The Deep Ritz Method, Smoothness:, Curse of Dimensionality:, Advantages and High Dimensions, variational principle, The Variational Principle
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
- Key Concepts: LL(k) Parsers:, Syntax Analysis (Parsing), Lexical Analysis, LR(k) Parsers:

## Entity: p-vs-np
- Title: Complexity Theory: P vs NP and Cook-Levin
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Cook-Levin Theorem, P vs NP problem, Formal Definitions

## Entity: cryptography-math
- Title: Cryptography: RSA and Elliptic Curves
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Elliptic Curve Cryptography (ECC), RSA (Rivest-Shamir-Adleman)

## Entity: distributed-systems-consensus
- Title: Distributed Systems: CAP and Consensus
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Availability:, Paxos Consensus, Consistency:, Partition tolerance:, CAP Theorem

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
- Key Concepts: Vertex Coloring, Brooks' Theorem:, chromatic number, Bounds and Theorems, Four Color Theorem:

## Entity: max-flow-min-cut
- Title: Graph Theory: Max-Flow Min-Cut Theorem
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Max-Flow Min-Cut Theorem, The Theorem, Ford-Fulkerson Algorithm

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
- Key Concepts: The IV Estimator, Relevance:, 2SLS, Exogeneity (Exclusion Restriction):

## Entity: sobolev-embeddings
- Title: Functional Analysis: Sobolev Embeddings
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The Spaces, Sobolev Embedding Theorems

## Entity: harmonic-analysis
- Title: Harmonic Analysis: Fourier Convergence
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Convergence Theorems, Fourier Series, Carleson's Theorem:, $L^2$ Convergence:, Pointwise Convergence (Dirichlet/Jordan):
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
- Key Concepts: Model Parameters, The Viterbi Algorithm
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
- Key Concepts: ARCH(q), GARCH(p, q)

## Entity: cointegration-johansen
- Title: Time Series: Cointegration & Johansen Test
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Johansen Test, Error Correction Model (ECM)

## Entity: differential-forms
- Title: Differential Forms & Exterior Calculus
- Category: Advanced Theory
- Language: en
- Key Concepts: closed, Generalized Stokes' Theorem, Exterior Derivative, Wedge Product, exact
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
- Key Concepts: Spectral Theorem, Hilbert Spaces and Riesz Representation, Riesz Representation Theorem
- Backlinks: calculus-of-variations, complex-analysis, fredholm-theory, hilbert-banach-spaces, math/algebraic-topology, math/differential-geometry, math/differentiation-of-measures, math/harmonic-analysis, math/lp-spaces, math/nonparametric-regression, math/ode-stability, math/spectral-theory-operators, math/topology-basics, spectral-theorem-unbounded

## Entity: galois-theory
- Title: Galois Theory: Fields and Solvability
- Category: Advanced Theory
- Language: en
- Key Concepts: Solvability by Radicals, solvable group, Field Extensions and Automorphisms, Galois extension, The Fundamental Theorem

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
- Key Concepts: Probability Spaces, Martingales, Radon-Nikodym Theorem, martingale

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
- Key Concepts: Overlapping Subproblems:, Overview, Optimal Substructure:, Properties

## Entity: alpha-factor-discovery
- Title: Alpha Factor Discovery
- Category: Algorithms and ML
- Language: en
- Key Concepts: Synthetic Data Generation, Mathematical Framework, Decay analysis, Non-linearity, Reinforcement Learning, Key Properties & Assumptions, IC Decay Profile, Orthogonality, Survivorship bias, Alpha Factor Discovery, Overview & Background, Related Topics, Overfitting, Parameter Table, Multiple testing bias
- References: bayesian-black-litterman, finance/alpha-stacking, finance/gan, finance/monte-carlo-method, mcmc
- Backlinks: alpha-orthogonalization, alternative-data-alpha, finance/alpha-stacking, finance/lightgbm-xgboost, finance/meta-labeling, finance/online-learning-mab, finance/shap-interpretability, model-free-rl-factors

## Entity: alpha-orthogonalization
- Title: Alpha Orthogonalization
- Category: Algorithms and ML
- Language: en
- Key Concepts: Why Orthogonalization is Critical, 1. Residualization, Performance Attribution, decay rate, Visualization: Vector Orthogonalization, The Problem: Factor Crowding, Alpha Orthogonalization, Currency Neutral, Related Topics, 2. Risk Neutralization, Neutral, Alpha Decay Analysis, Market Neutral, The Mathematical Process, Incremental Information
- References: alpha-factor-discovery, finance/factor-attribution, pca
- Backlinks: causal-inference-trading, pca-statarb

## Entity: alternative-data-alpha
- Title: Alternative Data Alpha
- Category: Algorithms and ML
- Language: en
- Key Concepts: Mathematical Framework, Lead Time, Signal-to-noise decomposition, [[gan]]-based augmentation, Macro, Lead-lag structure, [[mcmc]], Overview & Background, Consumer Sector, Real Estate, Related Topics, Parameter Table, NLP + alt-data fusion, Sparsity, Alt-Data Signal Decay Profile
- References: alpha-factor-discovery, finance/alpha-stacking, finance/gan, finance/value-at-risk, mcmc, news-sentiment-trading
- Backlinks: news-sentiment-trading

## Entity: causal-inference-trading
- Title: Causal Inference in Trading
- Category: Algorithms and ML
- Language: en
- Key Concepts: Causal Inference in Trading, 2. The Do-Calculus (Judea Pearl), 3. Granger Causality vs. True Causality, correlation, Visualization: The Confounder Trap, Policy Evaluation, Tools of the Trade, Control, Confounders and Spurious Alphas, Natural Experiments, Related Topics, Granger Causality, 1. Directed Acyclic Graphs (DAGs), Causal Inference, Why Citadel uses Causal AI
- References: alpha-orthogonalization, causal-inference, finance/probability-of-backtest-overfitting
- Backlinks: causal-inference-do-calculus

## Entity: finance/cointegration
- Title: Cointegration
- Category: Algorithms and ML
- Language: en
- Key Concepts: max-eigenvalue test, Engle-Granger two-step method, vector error correction model (VECM), error correction representation, Granger Representation Theorem., cointegration, Applications in finance, Pitfalls, stable long-run equilibrium, integrated of order $d$, Purchasing power parity (PPP)., cointegrated, The error correction model (ECM), trace test, Integration and spurious regression
- References: arima-models, central-limit-theorem, copula-models, finance/value-at-risk, hidden-markov-models, kalman-filter, math/law-of-large-numbers, math/spectral-theory-operators
- Backlinks: arima-models, pairs-trading

## Entity: convolutional-volatility-resolution-clustering
- Title: Convolutional Volatility Resolution Clustering (CVRC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Mathematical Framework, Adversarial regime generation, Regime-Adaptive Trading, Volatility Regime Clusters, volatility resolution clusters, Prerequisites, Vol Surface Imputation, Layer 2, Adaptive Denoising, Layer 3, Data requirements, Interpretability, Non-Stationary Risk Modeling, Transient Turbulence, Overview & Background
- References: arch-models, finance/gan, finance/spectral-analysis, garch-models, manifold-learning, volatility-forecasting, volatility-modulated-spectral-surface, wavelet-transform

## Entity: deep-galerkin
- Title: Deep Galerkin Method (DGM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Optimization, Visualization: The Curse Broken, Autograd, The Core Idea: PDE as a Loss Function, Sampling, Deep Galerkin Method (DGM) in Finance, Continuous Solution, Related Topics, Neural Network, Automatic Differentiation, Deep Galerkin Method (DGM), How It Works, High Dimensions, Curse of Dimensionality, Why Tier-1 Quants Use It
- References: automatic-differentiation, black-scholes, convex-optimization, neural-sdes-finance, numerical-pde-finance
- Backlinks: deep-ritz-method, schwartz-distributions

## Entity: deep-hedging
- Title: Deep Hedging
- Category: Algorithms and ML
- Language: en
- Key Concepts: 2. The Neural Network, optimal hedge ratio, Friction-Aware, Related Topics, Complete Markets, Buehler et al. (2019), Convex Risk Measure, Universal, market frictions, Global Optimization, The Deep Hedging Approach, Deep Hedging: Reinforcement Learning for Derivatives, 1. The Objective Function, Zero Transaction Costs, Key Advantages
- References: finance/delta-hedging-practice, finance/rough-volatility, reinforcement-learning, transformer-architecture

## Entity: fama-macbeth-regression
- Title: Fama-MacBeth Regression
- Category: Algorithms and ML
- Language: en
- Key Concepts: Final Estimate, Academic asset pricing, Characteristic-based models, Risk Premia Simulation Chart, Fama-MacBeth Regression, Shanken correction, Why Fama-MacBeth Standard Errors Work, Limitations and Extensions, Alpha attribution, Step 2: Cross-Sectional Regressions (Risk Premia), Related Topics, Smart beta validation, risk premium, errors-in-variables (EIV), Small cross-section
- References: black-scholes, finance/hierarchical-risk-parity, mcmc, portfolio-optimization-ml, ts-cs-factor-analysis
- Backlinks: causal-inference, finance/apt-ross, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, ts-cs-factor-analysis

## Entity: finance/gan
- Title: GANs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Evaluation difficulty, Absence of linear autocorrelation, CTGAN, Python: Conceptual Training Loop, The Discriminator ($D$), Fat tails, Leverage effect, Visualization: Real vs. Synthetic Paths, Training instability, Limitations and Extensions, Distributional shift, Data requirements, Related Topics, Privacy-preserving analytics, Risk management (VaR/ES)
- References: finance/monte-carlo-method, finance/value-at-risk, fraud-detection, heston-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, convolutional-volatility-resolution-clustering, f-divergences, finance/adversarial-stress-testing, fraud-detection, lob-prediction, news-sentiment-trading, portfolio-optimization-ml, timegan, volatility-modulated-spectral-surface

## Entity: finance/gnn-finance
- Title: Graph Neural Networks in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Graph Convolutional Networks (GCN), Related Articles, Graph Neural Networks in Finance, GNNs (Graph Neural Networks), Graph [[attention-mechanisms|Attention]] Networks (GAT), Implementation, Financial Applications
- References: attention-mechanisms, finance/eigenportfolio-rmt, finance/systemic-contagion-debtrank, finance/transformer-timeseries, fraud-detection

## Entity: finance/hidden-markov-models
- Title: Hidden Markov Models (HMM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Hidden Markov Model (HMM), Adaptive strategies, Core Components, Risk management, First-order assumption, Trading Applications, Initial Distribution $\pi$, Limitations and Extensions, Fixed number of states, 1. Evaluation (Forward-Backward Algorithm), M-step, Emission Distribution $B$, Volatility forecasting, market regime detection, Related Topics
- References: avellaneda-stoikov, finance/phase-space-reconstruction, finance/shannon-entropy, garch-models, kalman-filter

## Entity: finance/lightgbm-xgboost
- Title: LightGBM and XGBoost for Factor Signals
- Category: Algorithms and ML
- Language: en
- Key Concepts: LightGBM and XGBoost for Factor Signals, LightGBM, Related Articles, Temporality, Non-stationarity, Overfitting Controls, Financial Data Challenges, Class imbalance, XGBoost, Implementation, Gradient Boosting
- References: alpha-factor-discovery, finance/probability-of-backtest-overfitting, finance/shap-interpretability, finance/transformer-timeseries
- Backlinks: finance/shap-interpretability, finance/transformer-timeseries

## Entity: lob-prediction
- Title: Limit Order Book (LOB) Prediction
- Category: Algorithms and ML
- Language: en
- Key Concepts: Micro-Price Correlation, Weighted Mid-price, Order Imbalance, Adverse selection, Limitations and Extensions, Trade flow imbalance (TFI), DeepLOB, Bid-ask spread, Realized volatility, Related Topics, Market Making, Mid-price return, Extensions, Price pressure, natural 2D structure
- References: finance/gan, finance/market-impact-scaling, finance/value-at-risk, model-free-rl-factors, optimal-execution
- Backlinks: deep-rl-execution, finance/market-impact-scaling, finance/order-flow-imbalance, finance/transformer-timeseries

## Entity: finance/longstaff-schwartz
- Title: Longstaff-Schwartz Method (LSM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Mathematical Framework, Continue Holding, Flexibility, Prerequisites, LSM Algorithm Steps, Limitations and Extensions, Forward Pass, Intrinsic value, Simplicity, Related Topics, Longstaff-Schwartz Method (LSM), Longstaff-Schwartz Method, Parameter Table, Variance, Exercise Now
- References: black-scholes, finance/monte-carlo-method, heston-model, numerical-pde-finance, ornstein-uhlenbeck-process
- Backlinks: convertible-bonds, finance/barrier-asian-options, finance/follmer-schweizer, finance/free-boundary-american, finance/monte-carlo-method, finance/oas, numerical-pde-finance

## Entity: finance/meta-labeling
- Title: Meta-Labeling Framework
- Category: Algorithms and ML
- Language: en
- Key Concepts: Financial Application, Mathematical Framework, Imbalanced classes, Prerequisites, Stacking, Benefits, Python: Full Meta-Labeling Pipeline, Meta-Labeling Framework (Marcos Lopez de Prado), Earnings Plays, Position sizing, Limitations and Extensions, Trend Following, size, Interpretability, Related Topics
- References: alpha-factor-discovery, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/random-matrix-theory
- Backlinks: finance/alpha-stacking, finance/probability-of-backtest-overfitting, model-free-rl-factors, news-sentiment-trading

## Entity: model-free-rl-factors
- Title: Model-Free RL for Factor Portfolios
- Category: Algorithms and ML
- Language: en
- Key Concepts: Mathematical Framework, Reward Shaping, Challenges and Validation, PPO (Proximal Policy Optimization), Prerequisites, Policy Gradient Methods (PPO/DDPG), State Space, Limitations and Extensions, Differential Sharpe Ratio, SAC (Soft Actor-Critic), Related Topics, Hierarchical RL, Key Design Choices, Python: Dynamic Factor Allocation with Stable Baselines3, Visualization
- References: alpha-factor-discovery, black-scholes, finance/hierarchical-risk-parity, finance/meta-labeling, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/shannon-entropy, hidden-markov-models, mcmc, rl-trader
- Backlinks: finance/online-learning-mab, finance/probability-of-backtest-overfitting, lob-prediction, portfolio-optimization-ml

## Entity: finance/monte-carlo-method
- Title: Monte Carlo Method
- Category: Algorithms and ML
- Language: en
- Key Concepts: Convergence Visualization, Accuracy and Convergence, Flexibility, 2. Control Variates, Multi-Asset Correlation via Cholesky Decomposition, Python: Vectorized Asian Option Pricing with Variance Reduction, Limitations and Extensions, Generate Random Paths, Simplicity, Quasi-MC, Related Topics, American options, Discount, Parameter Table, Pros and Cons
- References: black-scholes, finance/longstaff-schwartz, finance/particle-filter, finance/quasi-monte-carlo, finance/value-at-risk, inference-serving, mcmc, qft-basic
- Backlinks: alpha-factor-discovery, automatic-differentiation, avellaneda-stoikov, black-scholes, bootstrap, brownian-bridge, convertible-bonds, copula-models, finance/adversarial-stress-testing, finance/barrier-asian-options, finance/black-swan-scenarios, finance/follmer-schweizer, finance/free-boundary-american, finance/gan, finance/hawkes-process, finance/levy-processes, finance/libor-market-model, finance/longstaff-schwartz, finance/market-impact-scaling, finance/meta-labeling, finance/nash-equilibrium, finance/oas, finance/particle-filter, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/sha-256, finance/shor-algorithm, finance/systemic-contagion-debtrank, finance/value-at-risk, finance/xva, fraud-detection, gaussian-processes, generative-models, generative-scenario-models, kelly-criterion, lln-clt, math/sde-numerical-methods, model-free-rl-factors, numerical-pde-finance, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, qft-basic, quantum-amplitude-estimation, risk-neutral-valuation, rl-trader, volatility-forecasting

## Entity: finance/multivariate-hmm
- Title: Multivariate Hidden Markov Models
- Category: Algorithms and ML
- Language: en
- Key Concepts: M-step, Initial distribution, Forward, Transition matrix, E-step: Forward-Backward, Interpretation, Model Structure, Multivariate HMM, Gaussian emission, Related Articles, Model Selection, Baum-Welch (EM) Algorithm, Posteriors, Implementation, Multivariate Hidden Markov Models
- References: copula-models, hidden-markov-models, kalman-filter, regime-switching-factors, volatility-forecasting

## Entity: finance/nash-equilibrium
- Title: Nash Equilibrium
- Category: Algorithms and ML
- Language: en
- Key Concepts: Dynamic games, Mixed Strategy, Market Making as a Game, Computing Mixed Strategy Equilibria, Limitations and Extensions, Pure Strategy, Oligopoly Models, Theoretical Foundation, Related Topics, Rationality assumption, Parameter Table, Evolutionary game theory, Visualization, Mean-field games, Background and History
- References: avellaneda-stoikov, finance/adversarial-stress-testing, finance/market-impact-scaling, finance/monte-carlo-method, optimal-execution
- Backlinks: finance/systemic-contagion-debtrank

## Entity: neural-sdes-finance
- Title: Neural SDEs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: The Mathematical Framework, The Adjoint Method, Visualization: Neural vs. Classical Diffusion, Neural ODEs, High-Dimensional Pricing, Applications, Neural SDEs in Finance, Related Topics, Generative Market Simulation, Path-Dependency, Calibration, Drift Network, Training via Adjoint Sensitivity, Stochastic Re-parameterization, Why Use Neural SDEs?
- References: finance/rough-volatility, finance/volatility-surface, neural-odes, stochastic-differential-equations
- Backlinks: deep-galerkin, path-dependent-volatility, timegan

## Entity: news-sentiment-trading
- Title: News Sentiment Trading System
- Category: Algorithms and ML
- Language: en
- Key Concepts: Sentiment Dispersion, Signal Decay, Data Ingestion, Fake news risk, Relevance Scoring, Sentiment Scoring, Limitations and Extensions, Multilingual news, Aspect-Based Sentiment, Related Topics, Practical Implementation Guide, Parameter Table, Signal Generation, Lexicon-based, Market impact
- References: alternative-data-alpha, finance/gan, finance/meta-labeling, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: alternative-data-alpha, llm-financial-analysis

## Entity: numerical-pde-finance
- Title: Numerical PDE Methods in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: complementarity condition, Greeks, Barrier options, Projected SOR, [[convertible-bonds]], Real-time risk, Alternating Direction Implicit, Unconditionally stable, Grid Construction, Uniform in log-space, Python: Crank-Nicolson for European Put, Penalty method, American option pricing, Comparison: PDE vs Trees vs Monte Carlo, Finite Difference Schemes
- References: black-scholes, convertible-bonds, finance/longstaff-schwartz, finance/monte-carlo-method, finance/optimal-stopping-american, partial-differential-equations
- Backlinks: black-scholes, deep-galerkin, feynman-kac, finance/longstaff-schwartz, neural-operators, stochastic-control

## Entity: finance/online-learning-mab
- Title: Online Learning and Multi-Armed Bandits
- Category: Algorithms and ML
- Language: en
- Key Concepts: Online Learning and Multi-Armed Bandits, Problem and Regret, cumulative regret, Exp3 for Adversarial Environments, Related Articles, UCB1 achieves, UCB (Upper Confidence Bound), Multi-Armed Bandit (MAB), Lai-Robbins lower bound, Implementation, Thompson Sampling
- References: alpha-factor-discovery, model-free-rl-factors, rl-trader

## Entity: finance/alpha-stacking
- Title: Orthogonal Alpha Stacking
- Category: Algorithms and ML
- Language: en
- Key Concepts: Mathematical Framework, Orthogonal Alpha Stacking & Residualization, Risk Management, Multi-Factor Models, Prerequisites, Cross-sectional vs. time-series, Key Properties & Assumptions, Signal Correlation Before/After Residualization, ICIR-weighted, Overview & Background, Multi-Signal Gram-Schmidt, Related Topics, Factor Neutralization, Proprietary Trading, Non-linear neutralization
- References: alpha-factor-discovery, convex-optimization-trading, finance/hierarchical-risk-parity, finance/meta-labeling, finance/random-matrix-theory
- Backlinks: alpha-factor-discovery, alternative-data-alpha, finance/apt-ross, finance/asymptotic-arbitrage-large-markets

## Entity: finance/particle-filter
- Title: Particle Filter (SMC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Mathematical Framework, Risk Management, Particle Filter (SMC), Prerequisites, Initialize, Limitations and Extensions, Hidden State Tracking, Computation, Update, Volatility Estimation, Online Parameter Estimation, Predict, Related Topics, Algorithm: Bootstrap Particle Filter, Particle Filter
- References: finance/monte-carlo-method, heston-model, hidden-markov-models, mcmc, ornstein-uhlenbeck-process
- Backlinks: conditionally-gaussian-processes, finance/heston-model, finance/monte-carlo-method, finance/phase-space-reconstruction, kalman-filter, nonlinear-filtering, pairs-trading

## Entity: fastest-mean-reversion
- Title: Portfolios of Fastest Mean Reversion
- Category: Algorithms and ML
- Language: en
- Key Concepts: smallest generalized eigenvalue, Fastest Mean Reversion, Sparse Mean-Reverting Portfolios, Portfolios of Fastest Mean Reversion, Rayleigh Quotient, speed of mean reversion, $L_1$-regularization (LASSO), Related Topics, Sparse PCA, Sparse Portfolio, The Mathematical Objective, The Box-Tiao / Generalized Eigenvalue Approach, Visualization: Reversion Speed, Ornstein-Uhlenbeck (OU) process
- References: ornstein-uhlenbeck-process, pairs-trading, pca
- Backlinks: pca-statarb

## Entity: finance/probability-of-backtest-overfitting
- Title: Probability of Backtest Overfitting
- Category: Algorithms and ML
- Language: en
- Key Concepts: Haircut Sharpe Ratio, Selection Bias under Multiple Testing (SBM), Limitations and Extensions, Deflated Sharpe Ratio (DSR), Dependent strategies, Python: Full PBO Calculation with CSCV, Related Topics, Parameter Table, Visualization, Probability of Backtest Overfitting (PBO), The "Silent Killer" of Quant Funds, Background and Motivation, Out-of-Sample (OOS), The Deflated Sharpe Ratio, Selection Bias under Multiple Testing
- References: finance/meta-labeling, finance/monte-carlo-method, finance/value-at-risk, model-free-rl-factors
- Backlinks: bayesian-black-litterman, causal-inference-trading, convex-optimization-trading, finance/lightgbm-xgboost, finance/meta-labeling, finance/shap-interpretability, model-free-rl-factors, numeraire-invariant-hedging, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, timegan, ts-cs-factor-analysis

## Entity: finance/quasi-monte-carlo
- Title: Quasi-Monte Carlo Methods
- Category: Algorithms and ML
- Language: en
- Key Concepts: Koksma-Hlawka inequality, Applications in finance, Calibration., Niederreiter-Xing., Effective dimension and ANOVA, Low-discrepancy sequences, The Koksma-Hlawka inequality, Related Articles, Risk aggregation., QMC vs MC convergence, Brownian bridge construction, effective dimension, Quasi-Monte Carlo Methods, star discrepancy, Halton sequence.
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, kalman-filter, math/law-of-large-numbers
- Backlinks: finance/monte-carlo-method

## Entity: finance/random-matrix-theory
- Title: Random Matrix Theory (RMT)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Oracle Shrinkage, The Problem of Noisy Correlations, Mathematical Framework, Marchenko-Pastur (MP) law, condition number, Step 3 — Reconstruct:, Deep learning, Non-Gaussian returns, Stress testing, Random Matrix Theory (RMT), Limitations and Extensions, IID assumption, Execution cost models, Factor structure, Wigner semicircle
- References: finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/value-at-risk, math/spectral-theory-operators, quantum-entanglement
- Backlinks: convex-optimization-trading, cross-impact, eigenvalues-eigenvectors, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/meta-labeling, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, nonlinear-shrinkage, portfolio-optimization-ml, quantum-entanglement, regime-switching-factors

## Entity: regime-switching-factors
- Title: Regime-Switching Factor Strategies
- Category: Algorithms and ML
- Language: en
- Key Concepts: Mathematical Framework, Dynamic factor allocation, stationary distribution, Identifiability, Macro timing, Risk management, Regime-Switching Factor Strategies, Hidden Markov Model (HMM) for Regimes, Limitations and Extensions, Credit risk, Correlation regimes, Related Topics, Regime-Dependent Factor Returns, Key Properties, Over-fitting
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc
- Backlinks: finance/multivariate-hmm, hmm-particle-filters, rl-trader

## Entity: rl-trader
- Title: Reinforcement Learning (RL) Trader
- Category: Algorithms and ML
- Language: en
- Key Concepts: Reward, Mathematical Framework, State space, Transition, Adversarial market, Limitations and Extensions, Interpretability, Sample efficiency, Related Topics, Discount, Overfitting, Crypto HFT, Key Properties, action-value function, Markov Decision Process (MDP)
- References: attention-mechanisms, finance/monte-carlo-method, finance/value-at-risk, mcmc, optimal-execution, regime-switching-factors
- Backlinks: deep-rl-execution, finance/online-learning-mab, model-free-rl-factors, reinforcement-learning

## Entity: finance/sha-256
- Title: SHA-256 (Secure Hash Algorithm)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Mathematical Framework, Efficiency, Message Schedule, Bitcoin proof-of-work, Quantum resistance, HMAC Construction, Compression Function, Quantum threat (partial), Limitations and Extensions, HMAC-SHA256, SHA-256, Hardware acceleration, SHA-3, API authentication, Output length
- References: finance/lempel-ziv-complexity, finance/monte-carlo-method, finance/shannon-entropy, finance/shor-algorithm, mcmc
- Backlinks: finance/shor-algorithm

## Entity: finance/shap-interpretability
- Title: SHAP and ML Model Interpretability
- Category: Algorithms and ML
- Language: en
- Key Concepts: Financial Use Cases, Efficiency, Symmetry, Related Articles, SHAP and ML Model Interpretability, SHAP vs LIME vs Permutation Importance, Shapley Values, SHAP (SHapley Additive exPlanations), TreeSHAP, Null player, Properties
- References: alpha-factor-discovery, finance/lightgbm-xgboost, finance/probability-of-backtest-overfitting, fraud-detection
- Backlinks: finance/lightgbm-xgboost

## Entity: finance/shannon-entropy
- Title: Shannon Entropy in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Mutual Information, Feature selection, Mathematical Framework, Topological entropy, Approximate Entropy (ApEn), Maximum Entropy Portfolios, Approximate Entropy and Sample Entropy, Transfer Entropy, Kullback-Leibler divergence, Regime detection, Data processing inequality, Binning sensitivity, Information-theoretic portfolio construction, Limitations and Extensions, Entropy Over Market Regimes
- References: finance/lempel-ziv-complexity, finance/random-matrix-theory, hidden-markov-models, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ai-theory/neural-tangent-kernel, change-of-variables, contrastive-learning, course-math-for-ai, decision-theory, deep-rl-execution, dirichlet-forms, distributions-zoo, dpo, embedding-models, empirical-processes, entropy-information, entropy-pooling, ergodic-theory, ergodic-theory-markov, f-divergences, finance/coherent-risk-measures, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hidden-markov-models, finance/lempel-ziv-complexity, finance/levy-esscher-continuous, finance/quasi-monte-carlo, finance/sha-256, finance/shor-algorithm, finance/upper-lower-hedging-prices, finance/zeta-field, financial-entropy, free-probability, hydrodynamic-limits, information-geometry-finance, information-theory-basics, jensen-inequality, jensens-inequality, kolmogorov-complexity, language-models/safety/rlhf-dpo, laplacian, logistic-regression, martingale, math/bayesian-asymptotics, math/concentration-inequalities, math/ergodic-theorems-birkhoff, math/gaussian-process-sample-paths, math/harmonic-analysis, math/information-theory, math/interacting-particle-systems, math/large-deviations-cramer, math/m-estimators, math/sigma-algebra-measurability, maximum-entropy, maximum-entropy-irl, mle, model-free-rl-factors, multi-token-prediction, multivariate-normal, mutual-information-divergence, naive-bayes, neural-scaling-laws, nlp-financial-analysis, online-learning-regret, pac-learning, path-integral-control, ppo, probability-distributions, probing-classifiers, quantum-entanglement, quantum-information-entropy, ricci-flow, risk-neutral-valuation, rlhf, sac-math, slm, small-ball-probabilities, soft-actor-critic, sparse-autoencoders, statistical-mechanics, training-dynamics, volatility-modulated-spectral-surface

## Entity: finance/shor-algorithm
- Title: Shor's Algorithm
- Category: Algorithms and ML
- Language: en
- Key Concepts: Discrete Logarithm, Timeline uncertainty, Mathematical Framework, Quantum risk premium, multiplicative order, continued fraction algorithm, elliptic curve cryptography (ECC), Qubit requirements, Cryptographic migration planning, Error correction overhead, Blockchain quantum risk, Limitations and Extensions, Total, Complexity Analysis, Secure multi-party computation
- References: finance/monte-carlo-method, finance/sha-256, finance/shannon-entropy, finance/spectral-analysis, mcmc
- Backlinks: finance/fft, finance/sha-256

## Entity: pca-statarb
- Title: StatArb with PCA (Avellaneda-Lee)
- Category: Algorithms and ML
- Language: en
- Key Concepts: synthetic market factors, Extract Factors, The Residual ($\tilde{R}_i$), Why it Dominates, The Signal (S-score), Statistical Arbitrage with PCA (Avellaneda-Lee), Execution, Statistical Arbitrage, Visualization: The S-Score, Modeling the Residual (The Trade), Short, The Problem with Pairs, Principal Component Analysis (PCA), Beta-neutral and Sector-neutral, Related Topics
- References: alpha-orthogonalization, fastest-mean-reversion, ornstein-uhlenbeck-process, pairs-trading, pca

## Entity: ts-cs-factor-analysis
- Title: TS vs CS Factor Analysis
- Category: Algorithms and ML
- Language: en
- Key Concepts: Mathematical Framework, Jensen's alpha, Primary output, Risk attribution, Long-short factor portfolios, Factor model validation, EIV bias, TS vs CS Factor Analysis, Risk Premia Estimates by Factor, Limitations and Extensions, Test statistic, Time-Series (TS) Regression, Cross-Sectional (CS) Regression, Zoo of factors, SDF (Stochastic Discount Factor) Formulation
- References: black-scholes, fama-macbeth-regression, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: fama-macbeth-regression, finance/factor-attribution

## Entity: timegan
- Title: TimeGAN: Generating Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: Adversarial Loss, The Flaw of Standard GANs, TimeGAN: Generating Synthetic Financial Data, The Magic: Three Loss Functions, Embedder (Encoder), Generator, Related Topics, Supervised Loss (The Key), Discriminator, Visualization: Autocorrelation Preservation, Data Augmentation, Why Quants Use It, TimeGAN, Privacy, temporal dynamics
- References: finance/gan, finance/probability-of-backtest-overfitting, neural-sdes-finance

## Entity: finance/transformer-timeseries
- Title: Transformers for Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: Normalization, Temporal Self-[[attention-mechanisms|Attention]], Transformers, Gradient clipping, Informer (Zhou et al. 2021), Positional encoding, Temporal Fusion [[transformer-architecture|Transformer]] (TFT, Lim et al. 2021), Variable Selection, Transformers for Time Series, Implementation, Practical Advice, Related Articles, Gate Residual Networks, Key Architectures, Self-[[attention-mechanisms|Attention]] Mechanism
- References: attention-mechanisms, finance/lightgbm-xgboost, hidden-markov-models, kalman-filter, lob-prediction, transformer-architecture
- Backlinks: finance/gnn-finance, finance/lightgbm-xgboost

## Entity: vine-copulas
- Title: Vine Copulas for StatArb
- Category: Algorithms and ML
- Language: en
- Key Concepts: bivariate (2D) pair-copulas, The Flaw of Multivariate Normal, Why it Beats Linear Models, The Vine Structure, Conditional Probability (The Signal), The Trade, Vine Copulas for Statistical Arbitrage, What is a Vine Copula?, Related Topics, Fit the Vine, Visualization: Bivariate Building Blocks, Vine Copulas, Sklar's Theorem, Application: Statistical Arbitrage, Copulas
- References: alpha-factor-research, copula-models, pairs-trading

## Entity: clifford-algebras
- Title: Clifford Algebras & Geometric Algebra
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Rotors and Spinors, Applications in Physics, Multivectors, Definition, Clifford Algebras & Geometric Algebra

## Entity: complex-manifolds
- Title: Complex and Kähler Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hodge Decomposition, integrable, Mirror Symmetry, 5. Mirror Symmetry, Hermitian Metric, 4. Calabi-Yau Manifolds, Symplectic manifold, 1. Almost Complex Structures, Complex and Kähler Manifolds: The Geometry of String Theory, Hodge Theory on Kähler Manifolds, Related Topics, $J^2 = -I$, Complex Manifold, Kähler Manifold, must form a Calabi-Yau 3-fold
- References: hodge-theory, manifold-learning, spectral-graph-theory, symplectic-geometry, tensor-calculus
- Backlinks: manifold, ricci-flow

## Entity: connections-curvature
- Title: Connections and Covariant Derivatives
- Category: Analysis & Geometry
- Language: en
- Key Concepts: 5. Geometric Flow: The Ricci Flow, Metric-compatible, Ricci Flow, Torsion-free, Connections, Curvature, and Holonomy, Ricci Curvature ($R_{\mu\nu}$), Covariant Derivative, 4. Decomposing Curvature: Ricci vs. Weyl, Gravitational Waves, Affine Connection, Related Topics, Holonomy Group, Einstein Tensor, Weyl Tensor ($C_{\rho\sigma\mu\nu}$), Physical Implication: Energy Conservation
- References: gauge-theory-yang-mills, manifold-learning, ricci-flow, tensor-calculus
- Backlinks: course-math-for-ai, geometric-deep-learning, hodge-theory, ricci-flow, symplectic-geometry, tensor-calculus

## Entity: delay-differential-equations
- Title: Delay Differential Equations in Neural Systems
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Delay Differential Equations in Neural Systems, Hopf bifurcation, Mathematical Formulation, Delay-Induced Bifurcations, Linear Stability Analysis

## Entity: geometric-deep-learning
- Title: Geometric Deep Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: The Solution, Transformers, Symmetry, Non-linear Activation, Gauge Equivariance, Deep Sets, Geometric Deep Learning (GDL), 3. Gauge Equivariant CNNs (Geodesic CNNs), CNNs, Manifolds, Pooling / Coarsening, 4. Mathematical Implementation, 2. The 5 Domains of GDL, Related Topics, Geometric Deep Learning: The Erlangen Program for ML
- References: connections-curvature, lie-groups-algebras, manifold-learning, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, course-math-for-ai, graph-curvature-oversquashing, lie-groups-algebras, tensor-calculus

## Entity: graph-curvature-oversquashing
- Title: Graph Curvature & Over-squashing
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Stochastic Discrete Ricci Flow (SDRF), Ollivier-Ricci curvature, Graph Curvature & Over-squashing, What Is It, Spectral Gap and Cheeger Constant, Graph Rewiring (SDRF), Over-squashing and Sensitivity, Positive curvature, MATHEMATICAL DERIVATION: ORC on a Triangle, Ollivier-Ricci Curvature, Over-squashing, Related Topics, Ricci curvature, Negative curvature
- References: geometric-deep-learning, graph-neural-networks, math/spectral-theory-operators, optimal-transport, ricci-flow, spectral-graph-theory

## Entity: hodge-theory
- Title: Hodge Theory and Harmonic Forms
- Category: Analysis & Geometry
- Language: en
- Key Concepts: A. Electromagnetism, Hodge Decomposition, Hodge Theory, 3. The Laplace-de Rham Operator, Codifferential, 2. The Hodge Star and Codifferential, Divergence, Betti Number, B. Topological Data Analysis (TDA), 4. The Hodge Decomposition Theorem, Related Topics, exact, 1. De Rham Cohomology, $k$-th De Rham Cohomology Group, co-exact
- References: connections-curvature, manifold-learning, spectral-graph-theory, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, homological-algebra, tensor-calculus

## Entity: information-geometry-nn
- Title: Information Geometry of Neural Networks
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Fisher Information Metric, Natural [[convex-optimization|Gradient Descent]], Curvature and Flat Minima, Information Geometry of Neural Networks
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: lie-algebras-physics
- Title: Lie Algebras in Physics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: strangeness, Strong Force (QCD), 1. Angular Momentum and $\mathfrak{su}(2)$, Gauge Theories and Connections, Hermitian operator, isospin, Visualization: Spin Multiplets, Lie-algebra valued 1-forms, Related Topics, Adjoint Representation, Heisenberg Uncertainty Principle, The Adjoint Representation and Force Carriers, Electromagnetism, 2. Particle Physics and $\mathfrak{su}(3)$, Lie Algebras
- References: general-relativity, lie-groups
- Backlinks: equivariant-diffusion-models

## Entity: lie-groups
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Pose Estimation, Basic Definitions, [[manifold-learning|Manifold]] Optimization, continuous symmetries, Equivariant Neural Networks, Related Topics, Lie Groups in Modern AI, The Exponential Map, tangent space at the identity, 2. Lie Algebra ($\mathfrak{g}$), Lie Groups and Lie Algebras, Examples:, roots, Dynkin diagrams, Lie bracket
- References: equivariant-nn, manifold-learning, math/differential-geometry
- Backlinks: course-math-for-ai, equivariant-diffusion-models, lie-algebras-physics, random-walks-groups

## Entity: lie-groups-algebras
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Smooth [[manifold-learning|Manifold]], Lie Algebra, $SE(3)$ (Special Euclidean), 4. Adjoint Representation ($Ad$), CNNs, 5. Applications in Machine Learning, 1. The Lie Algebra ($\mathfrak{g}$), Baker-Campbell-Hausdorff (BCH) Formula, Equivariant Neural Networks, Related Topics, 2. The Exponential Map, $SO(n)$ (Special Orthogonal), Antisymmetry, Physical Intuition, Exponential Map
- References: gauge-theory-yang-mills, geometric-deep-learning, manifold-learning, tensor-calculus
- Backlinks: geometric-deep-learning

## Entity: manifold-learning
- Title: Manifold Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: UMAP, Key Algorithms, 4. UMAP and t-SNE, Spectral Graph Theory, Visualization: Euclidean vs. Geodesic, Anomaly Detection, 1. Isomap (Isometric Mapping), Laplace-Beltrami operator, Applications, Related Topics, 2. Locally Linear Embedding (LLE), Manifold Hypothesis, The Manifold Hypothesis, Mathematical Engine: The Beltrami Operator, Image Analysis
- References: math/analysis-geometry/information-geometry, math/differential-geometry, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, ai-theory/knowledge-distillation, category-theory-ml, complex-manifolds, connections-curvature, convolutional-volatility-resolution-clustering, course-math-for-ai, differential-forms, diffusion-models, energy-based-models, equivariant-diffusion-models, ergodic-theory-sgd, f-divergences, finance/asymptotic-expansion-finance, fisher-information, gauge-equivariant-nn, geometric-deep-learning, geometric-mechanics-lie-groups, geometry-loss-landscapes, geometry-of-attention, hodge-theory, implicit-function-theorem, information-geometry-finance, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lie-groups, lie-groups-algebra, lie-groups-algebras, linear-algebra, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/non-euclidean-geometry, math/ode-stability, math/stratonovich-integral, maximum-entropy, metric-spaces, mle, model-merging-procrustes, morse-theory, multimodal-alignment-clip, nerf, neural-operators-fno, neural-radiance-fields-math, nonlinear-filtering, normalization-layers-math, optimal-transport-gromov-wasserstein, pca, pinns-convergence, regularization-implicit-bias, ricci-flow, riemannian-geometry, semimartingales-on-manifolds, stochastic-calculus-manifolds, stochastic-manifolds, symplectic-geometry, symplectic-hamiltonian-nn, tensor-calculus

## Entity: neural-radiance-fields-math
- Title: Mathematical Foundations of NeRF
- Category: Analysis & Geometry
- Language: en
- Key Concepts: volume rendering equation, Relationship to Other Techniques, Radiative Transfer Equation (RTE), [[manifold-learning|Manifold Learning]]:, NeuS / VolSDF:, quadrature, positional encoding, Differential Geometry and Inverse Rendering, Related Topics, Extensions and Generalisations, accumulated transmittance, Mathematical Foundations of NeRF, inverse problem, Mip-NeRF:, Volume Rendering Equation
- References: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, calculus-integration, manifold-learning, nerf, transformer-architecture

## Entity: mean-field-games
- Title: Mean Field Games
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hamilton-Jacobi-Bellman (HJB) equation, Mean Field Games, Mathematical Formulation, The MFG System, Variational Structure, Fokker-Planck (Kolmogorov forward) equation
- Backlinks: hydrodynamic-limits, mechanism-design, stochastic-games

## Entity: optimal-transport
- Title: Optimal Transport & Wasserstein Metrics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Entropic Regularization and Sinkhorn Divergence, Applications, Introduction, Optimal Transport & Wasserstein Metrics, Kantorovich Relaxation
- Backlinks: convex-analysis, course-math-for-ai, graph-curvature-oversquashing, linear-programming, martingale-optimal-transport, math/analysis-geometry/information-geometry, metric-spaces, radon-nikodym

## Entity: ricci-flow
- Title: Ricci Flow and Geometric Evolution
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Mesh Parameterization, Ricci Flow with Surgery, Ricci Flow, Geometrization Conjecture, Ricci Flow: The Evolution of Geometry, Short-time Existence, Related Topics, 2. Singularities and Surgery, Proof Strategy, 4. Solving the Poincaré Conjecture, Graph Curvature, Poincaré Conjecture, 1. The Evolution Equation, 3. Perelman's [[shannon-entropy|Entropy]] Functional, Perelman's Breakthrough
- References: complex-manifolds, connections-curvature, finance/shannon-entropy, manifold-learning
- Backlinks: connections-curvature, course-math-for-ai, differential-equations, graph-curvature-oversquashing, stochastic-manifolds

## Entity: spectral-graph-theory
- Title: Spectral Graph Theory
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Cheeger's Inequality, Spectral Graph Theory, Expander Graphs, Graph Laplacian
- References: math/spectral-theory-operators
- Backlinks: ai-theory/spatial/equivariant-gnn, algebraic-geometry-slt, algebraic-topology-persistent, complex-manifolds, differential-galois-theory, ergodic-theory-markov, feller-processes, finance/fractional-fokker-planck, fourier-transform, geometric-deep-learning, gnn-credit-risk, gnn-weisfeiler-lehman, graph-curvature-oversquashing, graph-neural-networks, graph-theory, higher-category-theory-ai, hodge-theory, laplacian, linear-algebra, manifold-learning, map-estimation, math/spdes, math/spectral-theory-operators, non-commutative-geometry, number-theory-l-functions, operator-semigroups, schwartz-distributions, spectral-clustering, spectral-theorem-unbounded, stable-processes, string-theory-calabi-yau, tensor-calculus, topos-neural-networks

## Entity: neural-ode-stability
- Title: Stability Theory for Neural ODEs
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Stability Theory for Neural ODEs, Adjoint Method and Backward Stability, Mathematical Formulation, Lyapunov Stability, Lipschitz Constants and Uniqueness
- References: math/spectral-theory-operators

## Entity: symplectic-geometry
- Title: Symplectic Geometry
- Category: Analysis & Geometry
- Language: en
- Key Concepts: A. Symplectomorphisms, B. Liouville's Theorem, locally indistinguishable, Hamilton's Equations, Symplectic Geometry, Non-degenerate, Computational Physics, 1. The Symplectic Form ($\omega$), Symplectomorphism, 5. Advanced Frontier: Symplectic Integrators, Area, 3. Poisson Brackets, Visualization: The Area Preserving Flow, Darboux's Theorem, Machine Learning
- References: ai-physics/hamiltonian-nn, connections-curvature, manifold-learning, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, manifold, microlocal-analysis

## Entity: tensor-calculus
- Title: Tensor Calculus on Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Smooth [[manifold-learning|Manifold]], Wedge Product ($\wedge$), Tensor Calculus: Invariant Descriptions of Curvature and Flow, Metric Tensor, 5. Advanced Applications, C. Differential Geometric ML, Tensor Calculus, Killing Vector Field, Related Topics, Antisymmetric Tensors, Levi-Civita Symbol ($\epsilon_{\mu\nu\rho\sigma}$), Hodge Dual, A. General Relativity, Property, Lie Derivative
- References: connections-curvature, geometric-deep-learning, hodge-theory, manifold-learning, spectral-graph-theory
- Backlinks: complex-manifolds, connections-curvature, hodge-theory, lie-groups-algebras, linear-spaces-basis, symplectic-geometry

## Entity: geometry-of-attention
- Title: The Geometry of Attention Mechanisms
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Softmax as a Kernel Smoother, Lipschitz Continuity and Stability, The Geometry of [[attention-mechanisms|Attention]] Mechanisms, Information Geometry of Softmax
- References: attention-mechanisms, manifold-learning, math/spectral-theory-operators

## Entity: tda-mapper-algorithm
- Title: The Mapper Algorithm in TDA
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Higher-dimensional simplices ($k$-simplices), Vertices (0-simplices), Mathematical Formulation, Nerve, Algorithm Parameters and Functoriality, filter function, The Mapper Algorithm in TDA, Edges (1-simplices), The Nerve Complex

## Entity: math/branching-processes
- Title: Branching Processes
- Category: Applied Probability
- Language: en
- Key Concepts: Proof sketch., Subcritical case., 1. Population genetics., Supercritical case (Kesten-Stigum theorem)., 2. Geometric offspring., 4. Viral content propagation., Branching in random environment., The martingale $W_n$, Theorem., Continuous-time branching (Bellman-Harris process)., functional equation, Applications, Related Articles, Multi-type branching., Extensions
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/renewal-theory, math/wiener-hopf-factorization
- Backlinks: math/percolation, math/point-processes, math/random-graphs, math/renewal-theory, math/subordinators, math/wiener-hopf-factorization

## Entity: clt
- Title: Central Limit Theorem (CLT)
- Category: Applied Probability
- Language: en
- Key Concepts: always Gaussian, Lévy Distribution, Deep Learning, 2. When Does it Fail? (Lindeberg-Feller), 1. The Classical CLT (Lindeberg–Lévy), The Miracle, Related Topics, Standard Deviation, Central Limit Theorem (CLT): The Law of Cosmic Order, 3. Rate of Convergence: Berry–Esseen Theorem, Lindeberg Condition, 4. Role in Modern Systems, Visualization: Convergence to Gaussian, Finance, Normal Distribution
- References: finance/levy-processes, frtb-es, mle
- Backlinks: characteristic-functions, mgf-characteristic-functions

## Entity: change-of-variables
- Title: Change of Variables
- Category: Applied Probability
- Language: en
- Key Concepts: Log-Normal, Mutual Information, Visualization: Stretching the Density, Scaling Factor, [[gradient-hessian-jacobian|Jacobian Matrix]], B. Log-Normal Distribution, Generative AI, Intuition, Related Topics, 2. The Multivariate Case (The Jacobian), 1. The 1D Case, A. The Box-Muller Transform, 3. Key Applications, Normalizing Flows, C. Differential [[shannon-entropy|Entropy]]
- References: black-scholes, finance/shannon-entropy, gradient-hessian-jacobian, mle, variational-autoencoders

## Entity: characteristic-functions
- Title: Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: C. Moment Generation, Characteristic Functions: The Fourier View of Probability, Variance Gamma, [[central-limit-theorem|Central Limit Theorem]], B. Sums of Variables, Characteristic Function, Universal Existence, Related Topics, 2. Fundamental Properties, always exists, 4. Application in Quantitative Finance, 3. The Lévy Continuity Theorem, B. Infinite Divisibility, [[fourier-transform|Fourier Transform]], Carr-Madan method
- References: central-limit-theorem, clt, finance/levy-processes, fourier-transform, merton-jump-diffusion, mgf
- Backlinks: copulas, course-math-for-ai, extreme-value-theory, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/contiguity-measures, math/convergence-semimartingales, math/glivenko-cantelli, math/infinitely-divisible-distributions, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/product-measures-fubini, math/renewal-theory, math/stable-convergence, math/stationary-wide-spectral, math/stein-method, math/triangular-arrays-processes, math/u-statistics, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, wiener-chaos

## Entity: math/concentration-inequalities
- Title: Concentration Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: Theorem (Azuma–Hoeffding)., Hoeffding's inequality, Sample complexity for PAC learning:, Azuma–Hoeffding inequality for martingales, Theorem (Hoeffding)., sub-Gaussian, Large deviations theory:, Markov's inequality., exponential bounds, bounded i.i.d. random variables, Related Articles, High-dimensional statistics:, change of measure, only on the range, Chernoff bound
- References: central-limit-theorem, characteristic-functions, empirical-processes, finance/shannon-entropy, martingale-clt, math/large-deviations-cramer, math/law-of-large-numbers
- Backlinks: ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, distributions-zoo, extreme-value-theory, fundamental-inequalities, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/markov-chain-mixing, math/minimax-estimation, math/multiple-testing, math/percolation, math/random-graphs, math/stein-method, random-matrices

## Entity: convergence-types
- Title: Convergence of Random Variables
- Category: Applied Probability
- Language: en
- Key Concepts: Why It Matters for AI, Consistency, 3. Convergence in Mean ($L^p$), Weak Law of Large Numbers, false, Generalization, Stability, 4. Convergence in Distribution (d), Relationship Map, Visualization: Convergence Speed, Related Topics, Convergence of Random Variables, Central Limit Theorem, 2. Convergence in Probability (p), 1. Convergence Almost Surely (a.s.)
- References: central-limit-theorem, math/law-of-large-numbers

## Entity: copulas
- Title: Copulas and Dependence
- Category: Applied Probability
- Language: en
- Key Concepts: Copulas and Dependence Structures, Types of Copulas, unique, isolate the dependency structure, asymmetric tail dependence, Related Topics, 3. Archimedean Copulas (Clayton, Gumbel, Frank), Tail Dependence, 2. Student's t-Copula, Sklar's Theorem, linear, zero tail dependence, Why Not Just Use Correlation?, Visualization: Tail Dependence, 1. Gaussian Copula
- References: characteristic-functions, extreme-value-theory, statistical-mechanics
- Backlinks: correlation-association, joint-distributions

## Entity: math/coupling-methods
- Title: Coupling Methods
- Category: Applied Probability
- Language: en
- Key Concepts: Perfect Simulation, coupling, coupling inequality, Definition of Coupling, Applications, maximal coupling strategy, monotone coupling, Monotone Coupling and Stochastic Ordering, Central Limit Theorem Proofs, perfect simulation, optimal coupling, Grand Coupling, Markov Chain Coupling and Mixing Time Bounds, Optimal Coupling and Strassen's Theorem, Rates of Convergence
- References: central-limit-theorem, de-finetti-exchangeability, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/weak-convergence-prokhorov
- Backlinks: math/geometric-ergodicity, math/interacting-particle-systems, math/markov-chain-mixing, math/percolation

## Entity: cramer-rao-bound
- Title: Cramer-Rao Lower Bound
- Category: Applied Probability
- Language: en
- Key Concepts: Fisher Information, Efficiency, UMVUE, 3. General Form (Biased Estimators), Efficient Estimator, MLE, Related Topics, 4. Importance in Estimation Theory, Statistical Efficiency, 1. Fisher Information, Score Function, 2. The Inequality, Cramer-Rao Lower Bound (CRLB)
- References: estimator-properties, fisher-information, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information, math/bayesian-asymptotics, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, mle, mle-estimation, sufficient-statistics, umvue-completeness

## Entity: delta-method
- Title: Delta Method
- Category: Applied Probability
- Language: en
- Key Concepts: Standard Errors, Related Topics, 3. Applications, MLE Functions, 1. Formal Statement, Delta Method, Multivariate Delta Method, 2. Derivation Idea
- References: lln-clt, mle-estimation, statistical-inference
- Backlinks: slutsky-theorem, umvue-completeness

## Entity: entropy-information
- Title: Entropy and Information Gain
- Category: Applied Probability
- Language: en
- Key Concepts: Low Entropy, highest Information Gain, Visualization: Entropy vs. Probability, any kind of dependency, 4. Information Gain (IG), 1. Shannon [[shannon-entropy|Entropy]] ($H$), 3. Mutual Information ($I$), Related Topics, High [[shannon-entropy|Entropy]], 2. Conditional Entropy $H(Y \mid X)$, [[shannon-entropy|Entropy]] and Information Gain
- References: finance/shannon-entropy, maximum-entropy
- Backlinks: course-math-for-ai

## Entity: ergodic-theory
- Title: Ergodic Theory & Mixing
- Category: Applied Probability
- Language: en
- Key Concepts: Mixing and [[shannon-entropy|Entropy]], Ergodicity, Birkhoff's Ergodic Theorem, Ergodic Theory & Mixing, Measure-Preserving Dynamical Systems
- References: finance/shannon-entropy
- Backlinks: stochastic-processes

## Entity: ergodic-theory-markov
- Title: Ergodic Theory of Markov Chains
- Category: Applied Probability
- Language: en
- Key Concepts: PageRank, Statistical Physics, Time Averages vs Space Averages, MCMC (Markov Chain Monte Carlo), Slow Mixing, Applications, Bayesian Inference, Unique Equilibrium, Related Topics, Metropolis-Hastings, Reversibility and Detailed Balance, Does the chain settle into a stable equilibrium (stationary distribution), regardless of where it started?, Rapid Mixing, spectral gap, Ergodic Theory of Markov Chains
- References: finance/shannon-entropy, math/information-theory, spectral-graph-theory
- Backlinks: mdp

## Entity: de-finetti-exchangeability
- Title: Exchangeability and de Finetti's Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: de Finetti's theorem, Diaconis–Freedman theorem, mixing measure, Chinese Restaurant Process, Partial Exchangeability and Hierarchical Models, Connections and Applications, de Finetti's Theorem (1931), Binary case:, Random partition theory:, Scaling limits:, Markov chain Monte Carlo:, Bayesian consistency, every Bayesian model, exchangeability, exchangeable
- References: bayesian-deep-learning, math/law-of-large-numbers, mcmc
- Backlinks: math/coupling-methods, math/random-graphs, math/stein-method

## Entity: extreme-value-theory
- Title: Extreme Value Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Poisson point process, Asymptotic Stability and Functional Limits, exponentially decaying tails, Point Process Approach, Domains of Attraction, domain of attraction, Gumbel Domain (Type I), Return Levels and Return Periods, extremal types theorem, Fréchet, $\xi > 0$ (Fréchet), Climate and Weather, Conditional Value-at-Risk, Weibull, regular variation
- References: characteristic-functions, finance/coherent-risk-measures, math/concentration-inequalities, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/large-deviations-cramer, math/stable-convergence
- Backlinks: copulas, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/bipower-variation, finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/repo-market-systemic, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, frtb-es, generative-scenario-models, math/lundberg-cramer-ruin, order-statistics, stable-processes

## Entity: free-probability
- Title: Free Probability
- Category: Applied Probability
- Language: en
- Key Concepts: Optimization, Applications in Deep Learning, Wigner Semicircle Distribution, R-transform, freeness, independence, The R-Transform, Free Independence, Related Topics, freely independent, Free Probability, free convolution, Signal Propagation, Weight Initialization, The Free Central Limit Theorem
- References: finance/shannon-entropy, math/information-theory, random-matrices

## Entity: math/geometric-ergodicity
- Title: Geometric Ergodicity
- Category: Applied Probability
- Language: en
- Key Concepts: Subgeometric rates and polynomial ergodicity, Sample size planning, polynomial ergodicity, Gibbs samplers and conditional models, Definition and convergence rate, Langevin diffusion, Meyn–Tweedie Theorem, Central Limit Theorem (CLT), Geometric Ergodicity, The minorization condition and Meyn–Tweedie theorem, petite set, Construction of Lyapunov functions, Gibbs and Metropolis–Hastings, spectral gap, geometrically ergodic
- References: math/coupling-methods, math/discrete-markov-chains, math/large-deviations-cramer, math/markov-chain-mixing, math/stochastic-recursive-sequences
- Backlinks: math/ode-stability

## Entity: hmm
- Title: Hidden Markov Models (HMM)
- Category: Applied Probability
- Language: en
- Key Concepts: Hidden Markov Model (HMM), Expectation-Maximization (EM), 1. The Model Structure, 2. The Three Fundamental Problems, [[hmm-particle-filters|Particle Filters]], B. The Decoding Problem (Viterbi), 3. Beyond Discrete States: Particle Filters, Hidden States ($Z_t$), hidden, Observations ($X_t$), Baum-Welch Algorithm, C. The Learning Problem (Baum-Welch), Related Topics, In Finance, Hidden Markov Models (HMM)
- References: hmm-particle-filters, mle
- Backlinks: bayesian-networks, em-algorithm, multivariate-normal

## Entity: hydrodynamic-limits
- Title: Hydrodynamic Limits
- Category: Applied Probability
- Language: en
- Key Concepts: [[shannon-entropy|Entropy]] Method and Large Deviations, empirical density, Hydrodynamic Limits, macroscopic world, Space Scaling, [[shannon-entropy|Entropy]] Method (Guo-Papanicolaou-Varadhan), Large Deviations, Related Topics, Why It Matters, AI and Neural Mean Fields, microscopic world, Traffic and Crowd Flow, The Empirical Measure, Time Scaling, Macroscopic Fluctuation Theory (MFT)
- References: finance/shannon-entropy, math/interacting-particle-systems, mean-field-games, partial-differential-equations

## Entity: likelihood-ratio-tests
- Title: Hypothesis Testing II: Likelihood Ratio Tests
- Category: Applied Probability
- Language: en
- Key Concepts: 2. Wilks' Theorem, Power, Neyman-Pearson Lemma, 4. Relation to Other Tests, Most Powerful, Wald Test, 3. Power of the Test, Related Topics, 1. The Likelihood Ratio, Hypothesis Testing II: Likelihood Ratio Tests, Score Test (Lagrange Multiplier)
- References: fisher-information, mle-estimation, statistical-inference
- Backlinks: rank-tests

## Entity: math/information-theory
- Title: Information Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Information Theory, Core Concepts, Channel Capacity Theorem:, 1. Shannon [[shannon-entropy|Entropy]] $H(X)$, Applications in AI, Fundamental Theorems, 2. Mutual Information $I(X;Y)$, Related Topics, Data Processing Inequality:, Source Coding Theorem:, ELBO (Variational Inference):, Information Bottleneck:, Cross-[[shannon-entropy|Entropy]] Loss:, 3. Kullback-Leibler (KL) Divergence
- References: finance/shannon-entropy, fisher-information, variational-inference
- Backlinks: convex-optimization, course-math-for-ai, ergodic-theory-markov, free-probability, math/harmonic-analysis, maximum-entropy, online-learning-regret, probabilistic-combinatorics, random-matrices, universal-portfolios, wiener-chaos

## Entity: math/interacting-particle-systems
- Title: Interacting Particle Systems
- Category: Applied Probability
- Language: en
- Key Concepts: Voter Model, symmetric exclusion process (SEP), McKean–Vlasov equation, Major Model Classes, Comparison coupling, critical infection rate, Large deviations, only if that site is empty, hydrodynamic limit, [[ergodic-theorems-birkhoff|Birkhoff Ergodic Theorem]], Neural Mean Field, Finite-time mean-field theory, coalescence, Exact scaling for ASEP, Hydrodynamic Limit
- References: convex-optimization, finance/shannon-entropy, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/percolation, stochastic-differential-equations
- Backlinks: hydrodynamic-limits, math/spdes

## Entity: law-iterated-logarithm
- Title: Law of Iterated Logarithm
- Category: Applied Probability
- Language: en
- Key Concepts: [[brownian-motion|Brownian Motion]], 3. Role in Stochastic Processes, LLN, CLT, LIL, Law of Iterated Logarithm (LIL), Related Topics, 1. Formal Statement, 2. Interpretation
- References: brownian-motion, lln-clt, stochastic-processes
- Backlinks: math/borel-cantelli-zero-one, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers

## Entity: mcmc
- Title: MCMC (Markov Chain Monte Carlo)
- Category: Applied Probability
- Language: en
- Key Concepts: Sample, Statistical Physics, Uncertainty, MCMC: Markov Chain Monte Carlo, 4. Why it Matters for AI and Finance, PyMC, Derivative Pricing, 1. The Core Idea: Sampling by Walking, Related Topics, 3. Crucial Concepts for Practitioners, Burn-in, Mixing, C. Hamiltonian Monte Carlo (HMC), B. Gibbs Sampling, Bayesian Hierarchical Models
- References: bayesian-inference, hamiltonian-mechanics, hmm-particle-filters, lsv-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, ar-models, arch-models, arima-models, arma-models, bayesian-black-litterman, bayesian-deep-learning, bayesian-inference, brownian-motion, causal-inference, convex-optimization-trading, cornish-fisher-cvar, de-finetti-exchangeability, fama-macbeth-regression, finance/fractional-fokker-planck, finance/monte-carlo-method, finance/particle-filter, finance/sha-256, finance/shor-algorithm, fraud-detection, hmm-particle-filters, kalman-filter, model-free-rl-factors, monte-carlo-integration, news-sentiment-trading, numeraire-invariant-hedging, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, regime-switching-factors, rl-trader, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis, variational-inference, volatility-forecasting

## Entity: mdp
- Title: Markov Decision Processes (MDP)
- Category: Applied Probability
- Language: en
- Key Concepts: The Mathematical Framework, Bellman Optimality Equation, Reinforcement Learning, Policy Iteration, $R(s, a, s')$, $\mathcal{S}$, Visualization: Value Discounting, Related Topics, Markov Property, Action-Value Function $Q^\pi(s, a)$, $P(s' \mid s, a)$, Policies and Value Functions, Markov Decision Processes (MDP), optimal policy, Policy
- References: ergodic-theory-markov, reinforcement-learning, stochastic-control
- Backlinks: mcts, multi-armed-bandits

## Entity: markov-chebyshev
- Title: Markov and Chebyshev Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Markov's Inequality (The First Moment Bound), B. PAC Learning and AI Safety, non-negative, Weak Law of Large Numbers (WLLN), Related Topics, Concentration inequalities, Visualization: The Tail Bounds, A. Proving the Law of Large Numbers, 3. Applications in Advanced Systems, The Power of the Bound, C. Algorithmic Complexity (Randomized Algorithms), Usage, The Theorem, Probably Approximately Correct (PAC), Chebyshev's Inequality
- References: central-limit-theorem, frtb-es, measure-theory

## Entity: mgf
- Title: Moment Generating Functions (MGF)
- Category: Applied Probability
- Language: en
- Key Concepts: 3. Relationship to Other Transforms, exact same distribution, [[central-limit-theorem|Central Limit Theorem]], Characteristic Function, A. Generating Moments, Related Topics, 2. The Power of MGFs, always exists, 4. Application in Finance: Portfolio Tail Risk, Probability Generating Function (PGF), Moment Generating Function (MGF), Cramér's Bound, product, Why it's useful, Chernoff Bound
- References: central-limit-theorem, fourier-transform, math/large-deviations-cramer
- Backlinks: characteristic-functions

## Entity: mgf-characteristic-functions
- Title: Moment Generating Functions (MGFs) and Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: Symmetry, Independent Sums, Limit Theorems, 2. Characteristic Functions, Summation of Distributions, Moment Generating Functions (MGFs) and Characteristic Functions, 1. Moment Generating Functions (MGF), Related Topics, Inversion Formula, 3. Applications, Moment Generation, always exists, Properties, Uniqueness Theorem, Linear Transformation
- References: clt, fourier-transform, probability-distributions

## Entity: monte-carlo-integration
- Title: Monte Carlo Integration
- Category: Applied Probability
- Language: en
- Key Concepts: Rejection Sampling, The Core Concept, Monte Carlo Integration and Importance Sampling, importance weight, high-dimensional spaces, Related Topics, Visualization: Convergence Rate, Law of Large Numbers, Central Limit Theorem, Importance Sampling
- References: math/law-of-large-numbers, mcmc, variational-inference
- Backlinks: bootstrap-jackknife, deep-ritz-method, mcts

## Entity: multivariate-normal
- Title: Multivariate Normal Distribution
- Category: Applied Probability
- Language: en
- Key Concepts: Consequences, PCA., Sampling., exact confidence ellipsoids, 11. Correlation visualisation, 6. [[shannon-entropy|Entropy]], Marginals., squared Mahalanobis distance, Theorem (Lauritzen)., 2. Geometry: Mahalanobis ellipsoids, Standardisation., Gaussian graphical model, Kalman filter., Theorem., Theorem (Cramér-Wold).
- References: f-divergences, finance/shannon-entropy, fisher-information, gaussian-processes, hmm, pca
- Backlinks: course-math-for-ai, distributions-zoo, joint-distributions

## Entity: rank-tests
- Title: Non-parametric Statistics: Rank Tests
- Category: Applied Probability
- Language: en
- Key Concepts: 1. Wilcoxon Signed-Rank Test, Limitations, Procedure, 4. Advantages and Limitations, Asymptotic Property, Hypothesis, Statistic, Related Topics, 2. Mann-Whitney U Test (Wilcoxon Rank-Sum), 3. Kruskal-Wallis Test, Non-parametric Statistics: Rank Tests, Advantages, ranks
- References: bootstrap-jackknife, likelihood-ratio-tests, statistical-inference
- Backlinks: order-statistics

## Entity: order-statistics
- Title: Order Statistics
- Category: Applied Probability
- Language: en
- Key Concepts: 2. Distribution of the $i$-th Order Statistic, 3. Joint Distribution, 1. Definition, Minimum $X_{(1)}$, Related Topics, Extreme Value Theory, Reliability, Order Statistics, Distribution of Min and Max, Maximum $X_{(n)}$, Non-parametric Inference, 4. Applications
- References: extreme-value-theory, probability-distributions, rank-tests

## Entity: math/percolation
- Title: Percolation
- Category: Applied Probability
- Language: en
- Key Concepts: occupied, backbone, connectivity, damage spreading, percolation probability, Oriented percolation and damage spreading, Related articles, almost surely at most one, subcritical, correlation length, strictly increasing, Second moment:, Critical probability and phase transitions, Russo–Seymour–Welsh theorem, hyperscaling relations
- References: math/branching-processes, math/concentration-inequalities, math/coupling-methods, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/random-graphs
- Backlinks: math/interacting-particle-systems, probabilistic-combinatorics

## Entity: map-estimation
- Title: Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference
- Category: Applied Probability
- Language: en
- Key Concepts: Gaussian Prior, Likelihood, Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference, Credible Intervals, 3. Relation to MLE and Regularization, Related Topics, Prior, [[spectral-graph-theory|Laplacian]] Prior, 1. Bayesian Framework, 2. MAP Derivation, 4. Bayesian Credible Intervals, Posterior
- References: bayes-theorem, linear-regression-ols, mle-estimation, spectral-graph-theory, statistical-inference
- Backlinks: mle-estimation

## Entity: mle-estimation
- Title: Point Estimation: Maximum Likelihood Estimation (MLE)
- Category: Applied Probability
- Language: en
- Key Concepts: Point Estimation: Maximum Likelihood Estimation (MLE), Efficiency, Consistency, Invariance, Related Topics, 3. Example: Gaussian Mean, 2. Properties of MLE, Asymptotic Normality, Log-Likelihood, 1. Formal Derivation, Likelihood Function
- References: cramer-rao-bound, fisher-information, map-estimation, statistical-inference
- Backlinks: cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, map-estimation, sufficient-statistics

## Entity: probabilistic-combinatorics
- Title: Probabilistic Combinatorics
- Category: Applied Probability
- Language: en
- Key Concepts: Paul Erdős, The Probabilistic Method, Threshold Phenomena in Random Graphs, must exist, Visualization: The Giant Component Transition, Randomized Algorithms, Related Topics, Connectivity, threshold, Giant Component, Probabilistic Method, Hashing, Error-Correcting Codes, Probabilistic Combinatorics, Applications in Computer Science
- References: math/information-theory, math/percolation, math/random-graphs

## Entity: distributions-zoo
- Title: Probability Distributions Zoo
- Category: Applied Probability
- Language: en
- Key Concepts: Stable distributions, Binomial($n, p$), Exponential($\lambda$), MaxEnt., 3. Heavy-tailed vs light-tailed, Special cases., Heavy tails:, Gamma($\alpha, \beta$), Dirichlet($\boldsymbol\alpha$), Student's $t_\nu$, Multinomial / Categorical, Mean / variance., Sub-exponential, Use., MGF.
- References: bayesian-inference, central-limit-theorem, exponential-families, finance/shannon-entropy, math/concentration-inequalities, maximum-entropy, multivariate-normal, poisson-process
- Backlinks: course-math-for-ai, poisson-process

## Entity: estimator-properties
- Title: Properties of Estimators: Bias, Variance, and MSE
- Category: Applied Probability
- Language: en
- Key Concepts: Mean Squared Error (MSE), unbiased, consistent, Interpretation, Related Topics, 1. Definitions, Bias, 2. The Bias-Variance Tradeoff, 3. Consistency, Properties of Estimators: Bias, Variance, and MSE, Variance
- References: cramer-rao-bound, linear-regression-ols, mle-estimation, statistical-inference, sufficient-statistics
- Backlinks: bootstrap-jackknife, cramer-rao-bound, sufficient-statistics

## Entity: queuing-theory
- Title: Queuing Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Visualization: Queue Length vs. Utilization, K (System capacity), A (Arrival process), Utilization ($\rho$), Key Results (Little's Law), Average time in system ($W$), Network Congestion, Little's Law, Related Topics, Kendall's Notation, Probability of $n$ customers, The M/M/1 Queue, Average number in system ($L$), A / S / c / K, c (Number of servers)
- References: inference-serving, math/markov-chain-mixing, poisson-process

## Entity: math/random-graphs
- Title: Random Graphs
- Category: Applied Probability
- Language: en
- Key Concepts: Stochastic Block Model and Community Detection, first moment method, threshold phenomenon, The Erdős–Rényi Models, Random Regular Graphs and Local Limits, Applications, Stochastic Block Model, Threshold Phenomena and the Phase Transition, Supercritical regime, random $d$-regular graph, local limit, Threshold Methods: First and Second Moment, Further reading, Subcritical and Supercritical Regimes, Connectivity and Percolation Thresholds
- References: central-limit-theorem, de-finetti-exchangeability, math/branching-processes, math/concentration-inequalities, math/large-deviations-cramer, math/poisson-approximation
- Backlinks: math/high-dimensional-statistics, math/percolation, probabilistic-combinatorics

## Entity: random-matrices
- Title: Random Matrix Theory
- Category: Applied Probability
- Language: en
- Key Concepts: free central limit theorem, Stieltjes transform, 10 symmetry classes, Applications in Statistics and Machine Learning, Gaussian Orthogonal and Unitary Ensembles, free convolution, Neural Network Spectra, Tracy-Widom distribution, Sparse and structured matrices, Literature and Further Study, Marchenko-Pastur distribution, freely independent, Free Probability, Marchenko-Pastur Law, Stieltjes Transform and Self-Consistent Equations
- References: empirical-processes, math/concentration-inequalities, math/high-dimensional-statistics, math/information-theory, math/lp-spaces, math/minimax-estimation, math/spectral-theory-operators
- Backlinks: free-probability

## Entity: random-walks-groups
- Title: Random Walks on Groups
- Category: Applied Probability
- Language: en
- Key Concepts: Card Shuffling, Cryptography, Key Questions and Concepts, Applications in AI and Science, 3. Boundary Theory and Poisson Boundary, Random Walks on Groups, Related Topics, Polya's Theorem, Formal Definition, Poisson Boundary, Mixing Time, Geometry, Visualization: Return Probabilities, Algebra, 1. Recurrence vs. Transience
- References: lie-groups, math/discrete-markov-chains, math/markov-chain-mixing, math/spectral-theory-operators

## Entity: math/renewal-theory
- Title: Renewal Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Proof sketch., 4. Regenerative simulation., renewal function, Blackwell's theorem., current life, renewal counting process, Overshoot, undershoot, and the inspection paradox, partial sums, stationary, 5. Reliability theory., Elementary renewal theorem, Theorem., excess life, Applications, Related Articles
- References: characteristic-functions, math/branching-processes, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/wiener-hopf-factorization
- Backlinks: math/branching-processes, math/markov-chain-mixing, math/point-processes, math/poisson-approximation, math/random-walks, math/subordinators, math/wiener-hopf-factorization, poisson-process

## Entity: bootstrap-jackknife
- Title: Resampling Methods: Bootstrap & Jackknife
- Category: Applied Probability
- Language: en
- Key Concepts: Procedure, The Bootstrap Principle, Computations, with replacement, Method, Resampling Methods: Bootstrap & Jackknife, 3. Comparison, Related Topics, 1. The Jackknife, 2. The Bootstrap, Limitation, Variance Estimation, Main Use
- References: estimator-properties, monte-carlo-integration, statistical-inference
- Backlinks: rank-tests

## Entity: sle
- Title: Schramm-Loewner Evolution (SLE)
- Category: Applied Probability
- Language: en
- Key Concepts: $\kappa \geq 8$, Space-filling, 3. The Kappa Parameter ($\kappa$) and Universality Classes, Liouville Quantum Gravity, Conformally Invariant, Percolation, Visualization: The Growing Curve, Oded Schramm, 1. The Physical Motivation: Critical Interfaces, Related Topics, Famous Values:, $\kappa = 8$, Loewner Equation, $\kappa = 3$, $\xi_t = \sqrt{\kappa} B_t$
- References: brownian-motion, conformal-field-theory, gff, statistical-mechanics
- Backlinks: gff

## Entity: math/stein-method
- Title: Stein's Method
- Category: Applied Probability
- Language: en
- Key Concepts: References and Further Reading, Exchangeable Pairs and Stein Discrepancy, Number theory, Stein operator, Combinatorics, Statistical physics, The Stein Operator and Stein Equation, Stein equation, Concrete Example: Fixed Points in Random Permutations, local dependence, exchangeable pairs, Kolmogorov distance, Total variation distance, Chen–Stein Method for Poisson Approximation, Local Dependence and Dissociation
- References: central-limit-theorem, characteristic-functions, de-finetti-exchangeability, math/concentration-inequalities, math/local-limit-theorems, math/poisson-approximation

## Entity: sufficient-statistics
- Title: Sufficient Statistics & Factorization Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: Minimal Sufficient Statistic, Sufficient Statistics & Factorization Theorem, 1. Definition, 3. Minimal Sufficiency and Completeness, 2. Fisher-Neyman Factorization Theorem, Rao-Blackwellization, Related Topics, 4. Rao-Blackwell Theorem, sufficient, Completeness
- References: cramer-rao-bound, estimator-properties, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information

## Entity: time-series
- Title: Time Series Analysis
- Category: Applied Probability
- Language: en
- Key Concepts: Weak Stationarity, Autocorrelation Function (ACF) and PACF, 2. MA (Moving Average), Time Series Analysis, ACF, differences, Related Topics, Visualization: Stationarity, Classical Models (Box-Jenkins), GARCH(1,1), Stationarity, temporal dependence, Spectral Density, Spectral Analysis, PACF (Partial Autocorrelation)
- References: math/markov-chain-mixing
- Backlinks: garch-models, language-models/mamba-ssm, math/stochastic-calculus/rough-path-signatures

## Entity: total-probability-variance
- Title: Total Probability and Total Variance
- Category: Applied Probability
- Language: en
- Key Concepts: In AI, Variance Decomposition, Component 2 (Variance of Conditional Expectation), Related Topics, 3. Law of Total Variance (Eve's Law), 2. Law of Total Expectation (Adam's Law), Bias, 4. Application in Machine Learning, Generative Models, Variance, Bayesian Hierarchical Models, Example: Financial Alpha, Stochastic Processes, Component 1 (Expected Conditional Variance), Visualization: Variance Decomposition
- References: bayesian-inference, hmm-particle-filters

## Entity: wentzell-freidlin
- Title: Wentzell-Freidlin Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Neural Networks, Chemistry, Instantone, The Setting: Small Noise Limits, Applications, The Action Functional ($S$), 2. The Quasi-Potential, Related Topics, Visualization: The Escape Path, Rate Function, Exit Time, Large Deviation Principles (LDP), 1. Metastability and Exit Times, Climate Science, Wentzell-Freidlin Theory (Large Deviations for SDEs)
- References: math/large-deviations-cramer, statistical-mechanics, stochastic-differential-equations

## Entity: math/wiener-hopf-factorization
- Title: Wiener-Hopf Factorization
- Category: Applied Probability
- Language: en
- Key Concepts: 2. Sequential analysis., 5. Boundary crossing problems., Historical notes, ascending ladder height, Setup and ladder variables, ascending ladder epoch, Pollaczek-Khinchine formula, Wiener-Hopf Factorization, Applications, Related Articles, Baxter combinatorial lemma, Connection to integral equations, The Wiener-Hopf identity, 3. GI/G/1 queueing., Theorem (Spitzer).
- References: brownian-motion, characteristic-functions, finance/levy-processes, math/branching-processes, math/discrete-martingales, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory, math/weak-convergence-prokhorov
- Backlinks: math/branching-processes, math/random-walks, math/renewal-theory, math/subordinators

## Entity: f-divergences
- Title: f-Divergences
- Category: Applied Probability
- Language: en
- Key Concepts: 4. Why Tier-1 ML Researchers care, Fisher Information Metric, 2. Famous Special Cases, f-Divergences: Measuring the Distance Between Distributions, $f$ is a convex function, Local Geometry, Related Topics, Positivity, Visualization: Mode Seeking vs. Mass Covering, f-divergences, KL Divergence, Total Variation, Generative Adversarial Networks (GANs), Data Processing Inequality, Reverse KL
- References: finance/gan, finance/shannon-entropy, information-geometry-finance, jensens-inequality, llm, manifold-learning, rlhf
- Backlinks: course-math-for-ai, fisher-information, multivariate-normal

## Entity: math/absolute-continuity-process-measures
- Title: Absolute Continuity of Process Measures
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Model comparison in finance., absolute continuity and singularity, different, Novikov's condition., Theorem., Applications, Related Articles, same diffusion coefficient, Why Different Volatilities Imply Singularity, Signal detection., The Setup, Structure Theorem, true martingale, The Liptser-Shiryaev Theorem, [[contiguity-measures|Contiguity]] analysis.
- References: brownian-motion, finance/girsanov-semimartingales, geometric-brownian-motion, heston-model, innovation-process, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering
- Backlinks: math/cameron-martin-formula, math/differentiation-of-measures, math/signed-measures

## Entity: math/bayesian-asymptotics
- Title: Bayesian Asymptotics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: [[cramer-rao-bound]], Efficiency, posterior contraction rates, Identifiability, [[exponential-families]], Cramér regularity, [[empirical-processes]], [[minimax-estimation]], Gaussian Process Priors and Rate-Optimal Posteriors, Connections to Other Topics, Statement, Model Misspecification, Variational Bayes Asymptotics, Boundary Issues, Posterior Contraction Rates
- References: cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/m-estimators, math/minimax-estimation
- Backlinks: math/semiparametric-efficiency

## Entity: bayesian-inference
- Title: Bayesian Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Optimization, Evidence $P(D)$, A. MCMC (Markov Chain Monte Carlo), Bayesian, Prior $P(\theta)$, 3. Numerical Methods (When Math is Hard), Random Variables, 2. Conjugate Priors, Related Topics, 4. Bayesian vs. Frequentist (MLE), Metropolis-Hastings, B. Variational Inference (VI), Frequentist (MLE), Posterior $P(\theta \mid D)$, Variational Autoencoders (VAEs)
- References: bayesian-black-litterman, bayesian-kelly, mcmc, measure-theory, mle, variational-autoencoders
- Backlinks: decision-theory, distributions-zoo, linear-regression, maximum-entropy, mcmc, mle, multi-armed-bandits, naive-bayes, total-probability-variance, variational-inference

## Entity: causal-inference
- Title: Causal Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: See Also, Relevance, Exclusion, compliers, backdoor criterion, Inverse probability weighting, Regression discontinuity, directed acyclic graph, average treatment effect on the treated, Exogeneity, do-calculus, local treatment effect, Wald estimand, Unconfoundedness and Matching, Matching
- References: fama-macbeth-regression, finance/efficient-market-hypothesis, math/kolmogorov-probability-axioms, math/local-asymptotic-normality, mcmc, rlhf
- Backlinks: bayesian-networks, causal-inference-trading, correlation-association, double-ml, financial-entropy, math/semiparametric-efficiency, math/survival-analysis, probability-paradoxes

## Entity: math/contiguity-measures
- Title: Contiguity and the Le Cam Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Applications in Jacod-Shiryaev Framework, Definition of Contiguity, sequences, Theorem (Le Cam's first lemma)., Dichotomy:, entirely separated, Hajek-Le Cam bound, Hellinger Distance Connection, local asymptotic normality, Contiguity and the Le Cam Theory, Theorem., Le Cam's Third Lemma, Related Articles, mutually contiguous, Theorem (Le Cam's third lemma).
- References: central-limit-theorem, characteristic-functions, finance/girsanov-semimartingales, finance/semimartingale-models, math/large-deviations-cramer, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/hellinger-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: correlation-association
- Title: Correlation and Association
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 2. Spearman's Rank Correlation ($r_s$), 1. Pearson Product-Moment Correlation ($\rho$), Range, controlling for, linear, Correlation and Association Measures, 4. Distance Correlation (dCor), Use case, Related Topics, 3. Kendall's Tau ($\tau$), Limitation, monotonic function, Best for, concordant, Visualization: Correlation vs. Dependence
- References: causal-inference, copulas

## Entity: math/cramer-rao-bound
- Title: Cramér–Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Fisher information, efficient, uniformly minimum variance unbiased estimator (UMVUE), Efficiency and UMVUE, Cramér regularity conditions, Support independent of $\theta$:, Regularity conditions (Cramér regularity), Fisher information matrix, The bound is tight (equality) if and only if the score is a linear function of the statistic $T$:, efficient estimators, Cramér–Rao Bound, Fisher information finite and positive:, standardized squared error, asymptotic theory, asymptotically efficient
- References: empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/conditional-expectation-sigma, math/local-asymptotic-normality, math/neyman-pearson

## Entity: math/density-processes
- Title: Density Processes and Likelihood Ratios
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Fisher information, $P$-martingale, log-likelihood, dichotomy, Girsanov's Theorem as a Corollary, Definition and Basic Properties, Change-point detection., Log-likelihood process., Theorem., Sequential testing (SPRT)., Applications, Related Articles, optimal, supermartingale, innovation martingale
- References: finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/predictable-compensator
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/regular-conditional-probability, math/sequential-hypothesis-testing, math/signed-measures

## Entity: double-ml
- Title: Double Machine Learning
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: causal effects, The DML Procedure (Nuisance Parameter Removal), Double Machine Learning (Causal Inference), The Core Problem: Confounding, Cross-fitting, Model the Outcome, Applications, Related Topics, true causal effect, biased, Chernozhukov et al., Model the Treatment, AI Finance, Why "Double"?, Marketing
- References: alpha-factor-research, causal-inference, mle

## Entity: empirical-processes
- Title: Empirical Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Metric [[shannon-entropy|Entropy]] and Bracketing Numbers, empirical process, shattered, Glivenko–Cantelli Theorem, VC dimension, Bracketing number, Covering number, sufficient condition, symmetrization, Definition and Core Object, VC-classes are Donsker classes, Rademacher complexity, Gaussian process, Donsker Condition via [[shannon-entropy|Entropy]] Integral, Donsker class
- References: brownian-bridge, central-limit-theorem, finance/shannon-entropy, math/local-asymptotic-normality, math/weak-convergence-prokhorov, pac-learning
- Backlinks: math/bayesian-asymptotics, math/concentration-inequalities, math/cramer-rao-bound, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/survival-analysis, math/u-statistics, random-matrices

## Entity: expectation-maximization
- Title: Expectation-Maximization (EM)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: local maximum, Applications, Expectation-Maximization (EM) Algorithm, Visualization: Clustering Progress, The Problem: Latent Variables, Maximum Likelihood (MLE), latent variables, MAP, 1. E-Step (Expectation), Natural Language Processing, Missing Data, The Two Steps, Related Topics, Gaussian Mixture Models, 2. M-Step (Maximization)
- References: mle, variational-inference
- Backlinks: gmm, jensen-inequality

## Entity: fisher-information
- Title: Fisher Information and the Cramér-Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 7. Natural-[[convex-optimization|gradient descent]], efficient, negative expected Hessian, tighter finite-sample confidence intervals, Regularity, observed Fisher information, 9. Fisher information and the chi-squared test, natural-[[convex-optimization|gradient descent]], Theorem., asymptotic efficiency, asymptotically efficient, Theorem (Cramér-Rao, scalar)., orthogonal parameterisation, TRPO, 11. Related topics
- References: convex-optimization, cramer-rao-bound, exponential-families, f-divergences, manifold-learning, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, mle, sufficient-statistics
- Backlinks: course-math-for-ai, cramer-rao-bound, likelihood-ratio-tests, math/analysis-geometry/information-geometry, math/information-theory, maximum-entropy, mle-estimation, multivariate-normal

## Entity: math/hellinger-processes
- Title: Hellinger Integrals and Hellinger Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Connection to Likelihood Ratios, Statistical testing., Connection to Contiguity, Le Cam theory., Hellinger process, filtration, Hellinger affinity, rate at which the two measures separate, Applications, Related Articles, accumulates over time, Hellinger Integrals and Hellinger Processes, Definition., For point processes., Hellinger integral
- References: finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/contiguity-measures, math/doleans-dade-exponential, math/sigma-algebra-measurability, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: math/high-dimensional-statistics
- Title: High-Dimensional Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Restricted Eigenvalue Condition (REC), Restricted Isometry Property and Compressed Sensing, knockoffs, Gaussian width, False Discovery Rate (FDR), Gaussian Width and Gordon's Theorem, Gordon's Theorem, LASSO, statistical error, Failure of Classical Methods and Regularization, The Gaussian Sequence Model, Gaussian sequence model, optimization error, Matrix Estimation and Nuclear Norm Minimization, Fano information-theoretic criterion
- References: convex-analysis, cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/lp-spaces, math/minimax-estimation, math/random-graphs
- Backlinks: math/multiple-testing, math/nonparametric-regression, random-matrices

## Entity: hypothesis-testing
- Title: Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: The Framework, A/B Testing, 3. Kolmogorov-Smirnov Test, Null Hypothesis ($H_0$), p-value, 2. Pearson's Chi-Square Test ($\chi^2$), $\alpha$ (Significance Level), Hypothesis Testing Foundations, Related Topics, Rule, Power ($1-\beta$), Common Tests, not, Fail to Reject $H_0$, Bonferroni Correction
- References: bootstrap, central-limit-theorem, math/neyman-pearson
- Backlinks: probability-paradoxes, sampling-distributions

## Entity: math/kernel-density-estimation
- Title: Kernel Density Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: bandwidth matrix, Gaussian, Symmetry, Pointwise Asymptotics, Adaptive Bandwidth, Uniform, curse of dimensionality, minimax risk, Nadaraya–Watson estimator, kernel density estimator, Plug-in and Diffusion Methods, Connection to Nonparametric Regression Smoothing, Optimal Bandwidth, optimal bandwidth scales as $h^* \sim n^{-1/5}$, Sobolev space
- References: cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/glivenko-cantelli, math/local-asymptotic-normality, math/u-statistics
- Backlinks: math/minimax-estimation, math/nonparametric-regression

## Entity: kde
- Title: Kernel Density Estimation (KDE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 3. Advantages over Histograms, 1. The Core Estimator, Optimal Bandwidth Selection, High Bias but Low Variance, Continuity and Differentiability, Mean-Shift Clustering, Small $h$ (Under-smoothing), Related Topics, Visualization: The Smoothing Effect, 2. The Bias-Variance Tradeoff and Bandwidth ($h$), Kernel Density Estimation (KDE), $h$ (The Bandwidth), Large $h$ (Over-smoothing), 4. Applications in Quantitative Finance and AI, Volatility Surface Smoothing
- References: kernel-methods-rkhs, math/nonparametric-regression, mle

## Entity: math/local-asymptotic-normality
- Title: Local Asymptotic Normality (LAN)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Le Cam's Third Lemma and Contiguity, LAQ (Locally Asymptotically Quadratic)., Rao score test, The LAN Condition, Theorem., asymptotically efficient, LAMN and LAQ Extensions, Related Articles, Local Asymptotic Normality, Neyman-Pearson test, LAMN (Locally Asymptotically Mixed Normal)., Definition., Wald test, asymptotic power, regular
- References: central-limit-theorem, finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/functional-limit-theorems, math/hellinger-processes, math/law-of-large-numbers, math/stable-convergence
- Backlinks: causal-inference, empirical-processes, fisher-information, math/absolute-continuity-process-measures, math/bayesian-asymptotics, math/cameron-martin-formula, math/cramer-rao-bound, math/density-processes, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/sequential-hypothesis-testing, math/survival-analysis

## Entity: math/m-estimators
- Title: M-Estimators and Z-Estimators
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Special case: Maximum likelihood and local asymptotic normality, Sandwich variance estimation, Z-estimators: Definition and theory, Identifiability, uniform law of large numbers (uniform LLN), Huber's robust regression, estimating function, Theorem (Consistency via Argmax Theorem):, information matrix, Asymptotic normality of M-estimators, bounded support, M-Estimators and Z-Estimators, M-estimators: Definition and basic theory, iteratively reweighted least squares, Consistency of Z-estimators
- References: bootstrap, cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/concentration-inequalities, math/local-asymptotic-normality, math/neyman-pearson
- Backlinks: causal-inference-do-calculus, convex-optimization, math/bayesian-asymptotics, math/semiparametric-efficiency, math/survival-analysis

## Entity: mle
- Title: Maximum Likelihood Estimation (MLE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Fisher Information, 4. Connection to Information Theory, Efficiency, Consistency, Maximum Likelihood Estimation (MLE), 2. Asymptotic Properties, Related Topics, Cross-[[shannon-entropy|Entropy]] Loss, Kullback-Leibler (KL) Divergence, 3. Fisher Information ($I(\theta)$), Cramér-Rao Lower Bound, Asymptotic Normality, 1. The Likelihood Function, Log-Likelihood, Likelihood Function
- References: bayesian-inference, cramer-rao-bound, finance/shannon-entropy, information-geometry-finance, manifold-learning
- Backlinks: bayesian-inference, change-of-variables, clt, double-ml, expectation-maximization, fisher-information, garch-models, hmm, kde, linear-regression, logistic-regression, maximum-entropy, slutsky-theorem, umvue-completeness

## Entity: math/minimax-estimation
- Title: Minimax Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Connection to Other Frameworks, Adaptive Estimation and Lepski's Method, Computational Considerations, asymptotically minimax optimal, oracle inequality, Lepski's method, Open Problems and Future Directions, Rate-Optimal Estimators: Examples, Gordon's inequality, Oracle Inequalities, Product Experiments and Information-Theoretic Minima, Assouad's Lemma, Fano's inequality, Minimax Rates over Nonparametric Classes, minimax optimal estimator
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/concentration-inequalities, math/kernel-density-estimation, math/local-asymptotic-normality
- Backlinks: math/bayesian-asymptotics, math/high-dimensional-statistics, math/nonparametric-regression, random-matrices

## Entity: math/multiple-testing
- Title: Multiple Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Holm, Knockoff, FWER, The Multiple Testing Problem, Summary Table, False Discovery Rate (FDR), Local False Discovery Rate, Benjamini–Hochberg Procedure, Connections to Empirical Bayes, Knockoff Filter (Candès et al.), Extensions and Refinements, Storey, Related Topics, More powerful, FDR control without distributional assumptions
- References: bootstrap, empirical-processes, exponential-families, math/concentration-inequalities, math/high-dimensional-statistics, math/neyman-pearson, math/sequential-hypothesis-testing

## Entity: math/neyman-pearson
- Title: Neyman–Pearson Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: uniformly most powerful (UMP), Test Efficiency and Power Asymptotics, Monotone Likelihood Ratio Property, Composite hypotheses, randomized tests, Limitations and Extensions, P-values as Test Statistics, Karlin–Rubin Theorem, p-value, Size and Power, Type I error (size), power, Neyman–Pearson Lemma, Connections to [[Sequential-Hypothesis-Testing]] and [[Cramer-Rao-Bound]], Non-regular models
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/sequential-hypothesis-testing
- Backlinks: hypothesis-testing, math/cramer-rao-bound, math/m-estimators, math/multiple-testing, math/survival-analysis

## Entity: math/nonparametric-regression
- Title: Nonparametric Regression
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: The Bias–Variance Tradeoff, Green's functions, Reproducing Kernel Hilbert Space (RKHS), Local polynomial regression, cubic spline, Statistical properties, B-spline basis, Splines, Generalized cross-validation (GCV), Nadaraya–Watson (NW) estimator, Bias–variance decomposition, Key advantages, adaptively, Bias, Automatic boundary correction
- References: bootstrap, functional-analysis, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/minimax-estimation, sobolev-spaces
- Backlinks: kde

## Entity: bootstrap
- Title: Resampling: Bootstrap and Jackknife
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Visualization: Resampling Distribution, 2. The Jackknife, Sampling, When to Use Which?, Complexity, Related Topics, The Procedure, Leave-one-out, sampling with replacement, bias correction, Main Use, Why it works: The "Plug-in" Principle, 1. The Bootstrap, Resampling: Bootstrap and Jackknife, Robustness
- References: central-limit-theorem, finance/monte-carlo-method
- Backlinks: hypothesis-testing, math/m-estimators, math/multiple-testing, math/nonparametric-regression

## Entity: sampling-distributions
- Title: Sampling Distributions
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: fatter tails, Fisher's F, Summary Table, Normal (Z), Use case, Sampling Distribution, sum of squares, Related Topics, sample size is small, Property, Chi-Square ($\chi^2$), 3. The F-Distribution, Comparison to Normal, unknown, 1. The Chi-Square Distribution ($\chi^2$)
- References: anova, central-limit-theorem, hypothesis-testing

## Entity: math/semiparametric-efficiency
- Title: Semiparametric Efficiency
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: orthogonal/Neyman-robust, tangent space, An estimator is semiparametrically efficient if its asymptotic variance equals $V$., IV model, Cox model, Robinson estimator, Instrumental Variables Estimation, Tangent space $\mathcal{T}_{\theta_0, \eta_0}$., Pathwise Differentiability and the Tangent Set, efficient estimating equations, profile likelihood, Efficient estimating equations., doubly robust, Related Articles, semiparametric efficiency bound
- References: causal-inference, cramer-rao-bound, empirical-processes, exponential-families, math/bayesian-asymptotics, math/local-asymptotic-normality, math/m-estimators
- Backlinks: math/survival-analysis

## Entity: math/sequential-hypothesis-testing
- Title: Sequential Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: smallest expected sample size, Connection to Optimal Stopping, quickest detection problem, Sequential Hypothesis Testing, The Likelihood Ratio Process, The SPRT, Shiryaev-Roberts procedure., Applications, Related Articles, Sequential Probability Ratio Test, Wald's Identities, sequential test, Signal processing., The Sequential Testing Problem, Definition.
- References: brownian-motion, geometric-brownian-motion, hidden-markov-models, kalman-filter, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality
- Backlinks: math/absolute-continuity-process-measures, math/multiple-testing, math/neyman-pearson

## Entity: slutsky-theorem
- Title: Slutsky's Theorem
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Multiplication, 1. The Theorem, 4. Continuous Mapping Theorem (CMT), By Slutsky's Theorem, constant, 2. Why the Difference in Convergence Matters?, 3. Application: The t-statistic and Wald Tests, Related Topics, Slutsky's Theorem: The Algebra of Limits, Continuous Mapping Theorem, Asymptotic Normality, distribution, Division, Addition, probability
- References: central-limit-theorem, delta-method, math/law-of-large-numbers, mle

## Entity: math/survival-analysis
- Title: Survival Analysis
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: counting processes, empirical information matrix, Kaplan–Meier estimator, log-rank test statistic, Mantel–Haenszel test, Cox model, Connection to local asymptotic normality and nonparametric theory, Key advantages:, Martingale residuals, Kaplan–Meier (KM) estimator, log-rank test, Log-rank test for comparing groups, baseline hazard, Breslow estimator, Semiparametric efficiency and influence functions
- References: causal-inference, empirical-processes, math/local-asymptotic-normality, math/m-estimators, math/neyman-pearson, math/point-processes, math/semiparametric-efficiency

## Entity: math/u-statistics
- Title: U-Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Key Theorems Summary, Role in Hypothesis Testing, Degenerate U-Statistics, Sample Variance:, V-statistic, Gini Coefficient:, Strong Law of Large Numbers, U-Statistics, Variance Estimation and the Jackknife, Wilcoxon Statistic:, Asymptotic Normality, projected U-statistic, variance structure, jackknife variance estimation, Classical Examples
- References: central-limit-theorem, characteristic-functions, cramer-rao-bound, empirical-processes, exponential-families, martingale-clt
- Backlinks: math/kernel-density-estimation

## Entity: umvue-completeness
- Title: UMVUE and Completeness
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Sufficient Statistics, MLE vs UMVUE, Sufficient, Factorization Theorem, Complete Sufficient Statistic, unique UMVUE, Efficiency, Steps to find the UMVUE, Uniformly Minimum Variance Unbiased Estimator (UMVUE), 2. Rao-Blackwell Theorem: Improving Estimators, 4. Lehmann-Scheffé Theorem: Finding the UMVUE, 5. Why Tier-1 Quants care, Related Topics, 3. Completeness and Uniqueness, less than or equal to
- References: cramer-rao-bound, delta-method, mle

## Entity: variational-inference
- Title: Variational Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Optimization, The Intractability Problem, The Variational Idea, Visualization: Approximating a Distribution, Approach, The ELBO (Evidence Lower Bound), Accuracy, Related Topics, ELBO, Variational Inference (VI), Kullback-Leibler (KL) Divergence, Scalability, Posteriors, Application in AI: Variational Autoencoders (VAE), Speed
- References: bayesian-inference, convex-optimization, mcmc, variational-autoencoders
- Backlinks: bayes-theorem, bayesian-kelly, calculus-of-variations, expectation-maximization, math/information-theory, math/variational-calculus, monte-carlo-integration

## Entity: nonequilibrium-statmech
- Title: Nonequilibrium Statistical Mechanics
- Category: Classical Physics
- Language: en
- Key Concepts: Fokker-Planck, Reverse [[stochastic-differential-equations|SDE]], Maxwell's Demon, 2. The Arrow of Time: Crooks Theorem (1999), Nonequilibrium Statistical Mechanics: Fluctuation Theorems, Arrow of Time, 3. The Jarzynski Equality: Equilibrium from Chaos, Equilibrium Free Energy, Landauer’s Limit, Related Topics, Fluctuation Theorems, erase information, Nonequilibrium, Computational Drug Discovery, 5. Application in Machine Learning: Diffusion Models
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
- Key Concepts: Overview, Chaining, Performance, Open Addressing

## Entity: account-abstraction
- Title: Account Abstraction (ERC-4337)
- Category: DeFi
- Language: en
- Key Concepts: UserOperation, 3. Session Keys and Security Policies, 2. Advanced Paymaster Mechanics, 1. The ERC-4337 State Machine, Validation Loop, Execution Loop, Execution Overhead, Step-by-Step Execution:, Session Keys, Account Abstraction (ERC-4337): The Modular Wallet Standard, Native Multi-sig, Related Topics, Deployment Cost, Bundler, Paymaster
- References: cedefi-gateway-architecture, zk-kyc
- Backlinks: course-cedefi

## Entity: amm-mechanics
- Title: Automated Market Makers (AMM)
- Category: DeFi
- Language: en
- Key Concepts: Efficiency, AMM as an Oracle, Constant Product Market Maker (CPMM), Impermanent Loss (IL), Complexity, Concentrated Liquidity (Uniswap V3), Automated Market Makers (AMM), Related Topics, Visualization: The Bonding Curve, Price Oracles, Oracle Manipulation Attacks, Impermanent Loss, Liquidity Pool, The Constant Product Formula (Uniswap V2), Concentrated Liquidity
- References: optimal-execution, smart-order-routing
- Backlinks: asset-tokenization, cedefi-mechanics, course-cedefi, liquid-staking-restaking, mev, stablecoin-mechanisms

## Entity: bridge-security
- Title: Bridge Security and Settlement Finality
- Category: DeFi
- Language: en
- Key Concepts: B. Trustless (Decentralized) Bridges, Visualization: The Reorg Risk, Instant Finality, Safety Buffer, Related Topics, Cons, Bridges, CeDeFi, The Attack Scenario, Settlement Finality, Bridge Security and Settlement Finality, Mints, 1. The Core Risk: The Bridge as a Vault, CeDeFi use case, A. Trusted (Centralized) Bridges
- References: asset-tokenization, cedefi-gateway-architecture, stablecoin-mechanisms
- Backlinks: cedefi-gateway-architecture, cross-chain-interop

## Entity: cedefi-gateway-architecture
- Title: CeDeFi Gateway Architecture
- Category: DeFi
- Language: en
- Key Concepts: The Solution, B. Dynamic Gas Strategies, Cold Storage Interaction, Event Logs, MPC (Multi-Party Computation), Implementation Tip: Idempotency, Reconciliation Engine, Related Topics, Exponential Bump, A. Nonce Management and Concurrency, The Problem, Nonce Queue, EIP-1559 Support, 2. The Indexer and Reconciliation (Data Integrity), 4. Operational Resilience: Circuit Breakers
- References: bridge-security, cedefi-mechanics, zk-kyc
- Backlinks: account-abstraction, bridge-security, contract-upgradeability, course-cedefi, cross-chain-interop, number-theory-basics, oracle-design, privacy-defi, zk-kyc

## Entity: cedefi-mechanics
- Title: CeDeFi: Centralized Decentralized Finance
- Category: DeFi
- Language: en
- Key Concepts: B. Enterprise Blockchains and Layer 2s, Sanction Screening, Low Latency, Oracle Vulnerability, 3. Compliance as Code, CeDeFi: The Convergence of Institutional and Decentralized Finance, Aave Arc, Coinbase's Base, Control, Related Topics, Bridges, Centralization Risk, Visualization: The Hybrid Stack, CeDeFi, 4. Risks and Trade-offs
- References: amm-mechanics, smart-order-routing
- Backlinks: asset-tokenization, cedefi-gateway-architecture, course-cedefi, number-theory-basics, onchain-credit, stablecoin-mechanisms

## Entity: cross-chain-interop
- Title: Cross-chain Interoperability Protocols
- Category: DeFi
- Language: en
- Key Concepts: arbitrary data and logic, Wormhole, Defense-in-Depth, B. Chainlink CCIP: Risk Management Network, Bridging, Omnichain Lending, Cross-chain Interoperability Protocols, Relayer, Unified Liquidity, 1. Messaging vs. Bridging, Oracle, Related Topics, A. LayerZero: Ultra Light Nodes, Benefit, Visualization: Omnichain Logic Flow
- References: asset-tokenization, bridge-security, cedefi-gateway-architecture, smart-order-routing
- Backlinks: course-cedefi

## Entity: lending-mechanics
- Title: Lending and Money Market Mechanics
- Category: DeFi
- Language: en
- Key Concepts: Utilization Rate, 5. Implementation for CeDeFi, Liquidation Threshold, 1. The Liquidity Pool Model, Reserve Factor, After the Kink ($U > U_{optimal}$), Lending and Money Market Mechanics: The Aave Model, Rate Parameters, Health Factor ($H_f$), Compound, Related Topics, Kinked Interest Rate Curve, Liquidation, 3. Risk Management: LTV and Health Factor, Peer-to-Pool
- References: onchain-credit, stablecoin-mechanisms
- Backlinks: course-cedefi, metric-spaces, oracle-design, yield-aggregators

## Entity: liquid-staking-restaking
- Title: Liquid Staking and Restaking
- Category: DeFi
- Language: en
- Key Concepts: Liquid Staking, 1. Liquid Staking Tokens (LSTs), The Systemic Risk, 4. Institutional Implications: The "Internet Bond", multiple services, Lido, Treasury Bills, stETH, Visualization: The Yield Pyramid, Deposit, Liquid Staking and Restaking: The Yield Layer, Related Topics, Receipt, Productivity, ether.fi
- References: amm-mechanics, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: mev
- Title: Maximal Extractable Value (MEV)
- Category: DeFi
- Language: en
- Key Concepts: PBS, High-Frequency Trading (HFT) and Front-Running, Private RPCs, 3. MEV as an Institutional Risk, Toxic, Builders, Buy, Implementation Shortfall, B. Sandwich Attacks, Mempool, Information Leakage, Sell, 2. The Proposer-Builder Separation (PBS), Related Topics, 4. Toxic vs. Non-Toxic MEV
- References: amm-mechanics, latency-arbitrage, smart-order-routing
- Backlinks: contract-upgradeability, course-cedefi, oracle-design, privacy-defi

## Entity: onchain-credit
- Title: On-chain Credit Markets
- Category: DeFi
- Language: en
- Key Concepts: Goldfinch, Efficiency, Composability, Visualization: The Credit Pipeline, 4. Why it Matters for High-Finance, Pool Delegates, Transparency, Tranche, Undercollateralized (Institutional), 1. Undercollateralized vs. Asset-Backed Lending, Asset-Backed (RWA), Centrifuge, Related Topics, Overcollateralized, 2. The Tranche Structure (Waterfall Model)
- References: asset-tokenization, cedefi-mechanics
- Backlinks: course-cedefi, lending-mechanics, zk-kyc

## Entity: onchain-perps
- Title: On-chain Perpetuals and vAMM Mechanics
- Category: DeFi
- Language: en
- Key Concepts: If Perp Price > Spot Price, Liquidation Cascades, Visualization: vAMM vs. Oracle Model, Settlement, Bad Debt, Perpetual Protocol, GMX, 2. vAMM (Virtual Automated Market Maker), Matching Engine, Related Topics, 5. Risk for Your Project, GLP, On-chain Perpetuals and vAMM Mechanics, 4. Order-book Based DEXs (dYdX Model), 3. LP-as-Counterparty Model (GMX Model)
- References: oracle-design, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: oracle-design
- Title: Oracle Design and Resilience
- Category: DeFi
- Language: en
- Key Concepts: Mitigation, 1. Triggering Mechanisms: Heartbeat and Deviation, Project Risk, Scenario, TWAP (Time-Weighted Average Price), Safe Mode, Logic, Spot Price, Secondary Source, Math, Medianizer, Multi-Oracle Consensus, 3. Oracle Extractable Value (OEV), 4. Resilience Patterns for CeDeFi, Visualization: The Multi-Layer Oracle
- References: cedefi-gateway-architecture, lending-mechanics, mev
- Backlinks: course-cedefi, onchain-perps

## Entity: privacy-defi
- Title: Privacy-Preserving DeFi (Shielded Pools)
- Category: DeFi
- Language: en
- Key Concepts: 1. How Shielded Pools Work, 5. Value for Your Project, ZK-SNARKs, Privacy DeFi, Copy-trading bots, MEV bots, Visualization: The Shielding Process, Dark Pool, View Keys, Shielded Pools, 2. Institutional Privacy vs. Anonymity, Panther, Related Topics, Railgun, 3. Dark Pools (The Institutional Dream)
- References: cedefi-gateway-architecture, mev, zk-kyc
- Backlinks: course-cedefi

## Entity: asset-tokenization
- Title: Real World Asset (RWA) Tokenization
- Category: DeFi
- Language: en
- Key Concepts: Oracle Manipulation, Legal Enforceability, Counterparty Risk, C. Liquidity for Illiquid Assets, A. The Legal Wrapper (SPV), Centralization, Asset Tokenization, Related Topics, B. Standards (ERC-3643 and ERC-1400), A. Atomic Settlement, FOBXX, 2. Strategic Benefits, Real World Asset (RWA) Tokenization, B. Fractional Ownership, atomically
- References: amm-mechanics, cedefi-mechanics, smart-order-routing
- Backlinks: bridge-security, course-cedefi, cross-chain-interop, onchain-credit, stablecoin-mechanisms, zk-kyc

## Entity: contract-upgradeability
- Title: Smart Contract Upgradeability
- Category: DeFi
- Language: en
- Key Concepts: Storage, Gas, Security, Broken V2 Layout, Mitigation, Smart Contract Upgradeability: Patterns, Risks, and Storage Layout, A. UUPS (Universal Upgradeable Proxy Standard), Logic, Implementation, Storage Gaps, Upgradeability Patterns, Proxy, Related Topics, 4. Storage Collisions: The Technical Nightmare, The Problem
- References: cedefi-gateway-architecture, mev
- Backlinks: course-cedefi

## Entity: stablecoin-mechanisms
- Title: Stablecoin Mechanisms
- Category: DeFi
- Language: en
- Key Concepts: Mechanism, Delta-Neutral (Ethena), Visualization: Collateral vs. Stability, 1. Fiat-Collateralized (Off-chain), 3. Algorithmic and Delta-Neutral, Risk, Decentralization, 2. Crypto-Collateralized (On-chain Overcollateralization), Stability Logic (CDP), Related Topics, Stablecoin Mechanisms: The Infrastructure of Value, Overcollateralized, PSM (Peg Stability Module), Short Perpetual position, Liquidated
- References: amm-mechanics, asset-tokenization, cedefi-mechanics
- Backlinks: bridge-security, combinatorics-induction, course-cedefi, lending-mechanics, liquid-staking-restaking, onchain-perps, yield-aggregators

## Entity: yield-aggregators
- Title: Yield Aggregators and Strategy Automation
- Category: DeFi
- Language: en
- Key Concepts: 3. Risk Assessment: The Strategy Stack, Curated Strategies, Liquidity Risk, Strategy, Low-Volatility Farming, The Controller, Compounded APY, Related Topics, Vaults, Yield Aggregators, 1. The Vault Architecture, Auto-Compounding, Protocol Risk, 4. Institutional Customization, Yield Aggregators and Strategy Automation
- References: lending-mechanics, smart-order-routing, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: zk-kyc
- Title: ZK-KYC: Privacy-Preserving Compliance
- Category: DeFi
- Language: en
- Key Concepts: Legal Compliance, Issuer, Proof of Funds, ZK-KYC: Privacy-Preserving Compliance in CeDeFi, User Trust, Visualization: The ZK-KYC Flow, 1. The Core Mechanism: Proof of Identity, Institutional Access, Transparency, ZK-Proof Generation, ZK-KYC, Related Topics, Soulbound Tokens, Wallet Address, Zero-Knowledge Proof
- References: asset-tokenization, cedefi-gateway-architecture, onchain-credit
- Backlinks: account-abstraction, cedefi-gateway-architecture, course-cedefi, privacy-defi

## Entity: course-cedefi
- Title: CeDeFi Engineering: Institutional Web3
- Category: DeFi & Engineering
- Language: en
- Key Concepts: fully private, Compliance-yield gateway., Recommended reading, Week 2 — AMM and liquidity microstructure, Capstone project, Week 4 — Stablecoins, Oracles, MEV, CeDeFi Engineering — institutional Web3 in 8 weeks, Prerequisites, Week 1 — EVM and stack architecture, Week 3 — Lending and risk, Goal:, Outcomes, Week 6 — ZK and private KYC, Course map, Week 7 — Cross-chain and bridges
- References: account-abstraction, amm-mechanics, asset-tokenization, cedefi-gateway-architecture, cedefi-mechanics, contract-upgradeability, cross-chain-interop, lending-mechanics, liquid-staking-restaking, mev, onchain-credit, onchain-perps, oracle-design, privacy-defi, smart-order-routing, stablecoin-mechanisms, yield-aggregators, zk-kyc

## Entity: multi-curve-framework
- Title: Multi-Curve Framework
- Category: Derivatives
- Language: en
- Key Concepts: Forward (Projection) Curves, Credit Support Annex (CSA), Modern Multi-Curve Framework, SOFR, Risk-Free Rates (RFRs), Why Do Curves Diverge?, CSA and Collateral Discounting, The Paradigm Shift, Visualization: The Basis Spread, Liquidity Risk, Related Topics, OIS (Overnight) curve, Multi-Curve Framework (Post-2008 Modern Yield Curves), Discounting Curve, LIBOR Transition (The "End of LIBOR")
- References: finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/xva

## Entity: volatility-arbitrage
- Title: Volatility Arbitrage and Variance Swaps
- Category: Derivatives
- Language: en
- Key Concepts: Volatility Arbitrage and Variance Swaps, variance strike, 1. The Variance Risk Premium (VRP), 3. The VIX Index, Variance Swap, implied volatility, 1. Volatility Carry, Related Topics, Variance Risk Premium, model-independent, 4. Trading Strategies, Log-Contract Replication, VIX Index, 2. Variance Swaps, 2. Dispersion Trading
- References: black-scholes, finance/rough-volatility, volatility-smile

## Entity: math/ergodic-theorems-birkhoff
- Title: Birkhoff-Khintchine Ergodic Theorem
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Fast mixing, 4. Gases in statistical mechanics., 2. Time-series econometrics., stationary, Birkhoff-Khintchine Ergodic Theorem, time averages, physical hypothesis, ensemble averages, long observation of one system, Theorem., Stationarity and ergodicity, Stationary process., Applications, 2. Markov chain with a unique stationary measure., Related Articles
- References: arch-models, brownian-motion, central-limit-theorem, finance/shannon-entropy, garch-models, law-iterated-logarithm, math/discrete-markov-chains, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/stochastic-recursive-sequences
- Backlinks: math/borel-cantelli-zero-one, math/branching-processes, math/coupling-methods, math/discrete-markov-chains, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/law-of-large-numbers, math/markov-chain-mixing, math/martingale-clt, math/percolation, math/renewal-theory, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, statistical-mechanics

## Entity: math/discrete-markov-chains
- Title: Discrete Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Convergence rate, Connection to martingales, stationary distribution, Existence and uniqueness., Markov chain, Basic operations, State classification, Stationary distribution, harmonic, Communicating states., stationary, communicating classes, Theorem., 4. Financial regime models., Applications
- References: brownian-motion, finance/crr-model, hidden-markov-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, reinforcement-learning
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, math/branching-processes, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/geometric-ergodicity, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/markov-chain-mixing, math/optimal-stopping-markov, math/renewal-theory, math/stochastic-recursive-sequences, random-walks-groups, stochastic-processes

## Entity: math/kolmogorov-equations-ctmc
- Title: Kolmogorov Equations and Continuous-Time Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: birth-death process, transition semigroup, Matrix exponential solution, stationary, forward equation, Comparison with discrete chains, terminal, backward equation, rate matrix, Foster-Lyapunov criteria, Kolmogorov forward equation (Fokker-Planck), Related Articles, Q-matrix, generator, Fokker-Planck equation
- References: brownian-motion, finance/levy-processes, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms, math/spectral-theory-operators
- Backlinks: fokker-planck-equation, math/discrete-markov-chains, math/point-processes, math/subordinators, stochastic-processes

## Entity: math/spectral-representation-processes
- Title: Spectral Representation of Stationary Processes
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Wavelet transforms, purely non-deterministic, Integrator, Locally stationary processes, stationary, stronger, Applications, Orthogonal random measure, Related Articles, spectral representation, process itself, linear filter, orthogonal random measure, 1. Frequency-structure analysis of financial series., autocovariance
- References: brownian-motion, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/stationary-wide-spectral, wavelet-transform
- Backlinks: math/spectral-theory-operators, math/stationary-wide-spectral

## Entity: math/stochastic-recursive-sequences
- Title: Stochastic Recursive Sequences
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: heavy (Pareto) tails, Lindley recursion, Theorem (Loynes, 1962)., coupling events, The linear case: products of random matrices, Theorem (Furstenberg-Kesten, 1960)., Theorem., top Lyapunov exponent, Theorem (Kesten, 1973; Vervaat, 1979)., Applications, Related Articles, stability, Autoregressive processes., contractive, Queueing theory.
- References: arch-models, brownian-motion, finance/levy-processes, garch-models, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/law-of-large-numbers
- Backlinks: math/ergodic-theorems-birkhoff, math/geometric-ergodicity

## Entity: math/stationary-wide-spectral
- Title: Wide-Sense Stationary Processes and Spectral Density
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: wide-sense stationary, Symmetry, constant, some, non-negative, autocorrelation function, which frequencies are present, autocovariance function, periodogram, the first two moments coincide, 2. AR(1) process., 1. White noise., Related Articles, 4. Long memory., Connection to the Kalman filter
- References: brownian-motion, characteristic-functions, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/self-similarity-fractality, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/spectral-representation-processes
- Backlinks: math/spectral-representation-processes, ornstein-uhlenbeck, stochastic-processes

## Entity: conditionally-gaussian-processes
- Title: Conditionally Gaussian Processes
- Category: Filtering Theory
- Language: en
- Key Concepts: Theorem (Liptser-Shiryaev)., log-linear in $\theta$, Related Articles, Comparison with Kalman-Bucy, conditionally Gaussian, Conditional Gaussianity under $\tilde{P}$., Reference measure., Definition., matrix Riccati equation, Conditionally Gaussian Processes, linear in $\theta$, Derive the equations, Interest rate models., Multivariate Extensions, Absolute continuity.
- References: finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, math/doleans-dade-exponential, nonlinear-filtering, stochastic-differential-equations
- Backlinks: innovation-process, nonlinear-filtering

## Entity: innovation-process
- Title: Innovation Process
- Category: Filtering Theory
- Language: en
- Key Concepts: Prediction, Theorem (Liptser-Shiryaev)., Filtering, Definition and Basic Properties, Smoothing, Theorem., Applications, Consequence., Related Articles, Connection to Girsanov's Theorem, Control theory., Innovation Process, integral representation, The Innovation Representation Theorem, Whitening Interpretation
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, kalman-filter, math/conditional-expectation-sigma, math/discrete-martingales, nonlinear-filtering
- Backlinks: conditionally-gaussian-processes, math/absolute-continuity-process-measures, math/martingale-representation, nonlinear-filtering

## Entity: nonlinear-filtering
- Title: Nonlinear Filtering
- Category: Filtering Theory
- Language: en
- Key Concepts: Numerical Methods, Proof Architecture, Kallianpur-Striebel formula., The Kushner-Stratonovich Equation, optimal filter, linear, Projection filters., curse of dimensionality, Zakai equation, Derive the Zakai equation, Kushner-Stratonovich (KS) equation, Related Articles, observation process, Target tracking and navigation., signal
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, manifold-learning, math/doleans-dade-exponential, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, innovation-process, math/absolute-continuity-process-measures, math/martingale-representation, state-space-models, stochastic-control-partial-info, stochastic-differential-equations

## Entity: bayesian-networks
- Title: Bayesian Networks
- Category: Foundations
- Language: en
- Key Concepts: Inference, Structure Learning, Belief Propagation, Nodes, The Factorization Property, Related Topics, Chain Rule for Bayesian Networks, Edges, Acyclicity, Bayesian Networks, Collider (V-structure), D-Separation (Conditional Independence), Parameter Learning, Visualization: A Simple Network, Variable Elimination
- References: bayes-theorem, causal-inference, hmm
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, graph-theory-basics

## Entity: category-theory
- Title: Category Theory
- Category: Foundations
- Language: en
- Key Concepts: Distributed Representations, Visualization: The Hierarchy of Abstraction, Haskell, 3. Natural Transformations, Category, Monads, Functional Programming, Quantum Physics, Related Topics, 5. Applications in AI and Physics, Morphisms (Arrows), Natural Transformations, 4. The Yoneda Lemma: Identity via Relationships, an object is completely determined by its relationships to all other objects., 1. Objects and Morphisms
- References: homological-algebra, topos-theory, type-theory
- Backlinks: homological-algebra, homotopy-type-theory, math/algebraic-topology, topos-theory, type-theory

## Entity: probability-paradoxes
- Title: Classic Paradoxes in Probability
- Category: Foundations
- Language: en
- Key Concepts: 2. Berkson's Paradox (Selection Bias), Visualization: Simpson's Reversal, Abraham Wald, Classic Paradoxes in Probability and Statistics, no holes, 4. Survivor Bias, Intuition, Reality, Related Topics, confounding variables, 1. Simpson's Paradox, 3. The Birthday Paradox, Example, Lesson
- References: bayes-theorem, causal-inference, hypothesis-testing

## Entity: convex-optimization
- Title: Convex Optimization
- Category: Foundations
- Language: en
- Key Concepts: Proximal Operator, dual function, Primal feasibility:, Nesterov Accelerated Method:, Convexity-preserving operations:, Subdifferential, epigraph, Complementary slackness:, Portfolio Optimization:, proximal operator, Alternating Direction Method of Multipliers, FISTA, conjugate function, subdifferential, First-order optimality condition:
- References: math/information-theory, math/m-estimators, math/variational-calculus, stochastic-control
- Backlinks: 3d-gaussian-splatting, ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, attention-kernel, automatic-differentiation, convex-analysis, convexity, course-math-for-ai, deep-galerkin, differential-privacy, energy-based-models, ergodic-theory-sgd, fine-tuning, fisher-information, fluid-dynamics-navier-stokes, geometric-mechanics-lie-groups, geometry-loss-landscapes, gradient-hessian-jacobian, information-bottleneck-theory, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lagrange-multipliers, linear-algebra, linear-systems-gauss, logistic-regression, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/interacting-particle-systems, math/large-deviations-cramer, math/martingale-clt, math/ode-stability, meta-learning, model-merging-procrustes, multimodal-alignment-clip, multivariable-calculus, neural-operators-fno, normalization-layers-math, ntk, online-learning-regret, optimal-transport-gromov-wasserstein, optimization-basics, pinns-convergence, proximal-algorithms-admm, qft-curved-spacetime, regularization-implicit-bias, sgd-convergence-theory, sgd-variants, stochastic-calculus-manifolds, string-theory-calabi-yau, symplectic-hamiltonian-nn, training-dynamics, ttt-layers, vae-elbo, variational-autoencoders, variational-inference, variational-inference-math

## Entity: eigenvalues-eigenvectors
- Title: Eigenvalues and Eigenvectors
- Category: Foundations
- Language: en
- Key Concepts: Trace, Interpretation, Neural Stability, Statistical Arbitrage, The Spectral Theorem, In AI, The Characteristic Equation, Google PageRank, 4. Singular Value Decomposition (SVD), Related Topics, [[spectral-theory-operators|Eigenvalues]] and Eigenvectors: The DNA of Linear Logic, Singular Values, eigenvector, Eigendecomposition, Physical Intuition
- References: finance/random-matrix-theory, linear-spaces-basis, math/discrete-markov-chains, math/spectral-theory-operators, pca
- Backlinks: cross-impact, laplacian, linear-spaces-basis, linear-systems-gauss, matrix-decompositions, nonlinear-shrinkage, vector-spaces-orthogonality

## Entity: math/functional-analysis
- Title: Functional Analysis
- Category: Foundations
- Language: en
- Key Concepts: Reproducing Kernel Hilbert Spaces (RKHS):, Normed Spaces:, linear operator, Functional Analysis, Banach Spaces:, Core Spaces, Kernel Trick:, Hilbert Spaces ($\mathcal{H}$):, Stability Analysis:, Operators and Spectrum, Applications in Machine Learning, Related Topics, Spectral Theorem:, orthogonality, Eigenfunctions:
- References: hilbert-banach-spaces, linear-algebra, math/spectral-theory-operators, quantum-mechanics

## Entity: graph-theory
- Title: Graph Theory
- Category: Foundations
- Language: en
- Key Concepts: Important Theorems, Spectral Graph Theory, Fundamental Concepts, Undirected Graph, directed graph, Path and Cycle, in-degree, [[graph-neural-networks]], Related Topics, edges, Path, Connectivity, weakly connected, Handshaking Lemma, Cycle
- References: finance/systemic-contagion-debtrank, graph-neural-networks, knowledge-graph, linear-algebra, math/spectral-theory-operators, spectral-graph-theory
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, kuramoto-model, linear-algebra, logic-set-theory

## Entity: homological-algebra
- Title: Homological Algebra
- Category: Foundations
- Language: en
- Key Concepts: homology, Chain Complexes, Visualization: Long Exact Sequence, Diagram Chasing and Lemmas, Abelian Categories, Applications, Related Topics, Homological Algebra, The Five Lemma, Derived Functors: Ext and Tor, The Snake Lemma, 1. Tor (Torsion), exact, $n$-th homology group, Algebraic Geometry
- References: category-theory, hodge-theory, math/algebraic-topology, quantization
- Backlinks: category-theory, topos-theory, tor-ext-functors

## Entity: jensens-inequality
- Title: Jensen's Inequality
- Category: Foundations
- Language: en
- Key Concepts: Deep Learning, C. Finance: The Volatility Tax, 2. Geometric Intuition, above, Statistical Physics, A. Information Theory (Gibbs' Inequality), Information Theory, B. Variational Inference and VAEs, Convex Case, Related Topics, Evidence Lower Bound (ELBO), Finite Version, Integral Version, Kullback-Leibler (KL) Divergence, 4. Generalizations
- References: convexity, finance/shannon-entropy, variational-autoencoders
- Backlinks: f-divergences

## Entity: linear-algebra
- Title: Linear Algebra
- Category: Foundations
- Language: en
- Key Concepts: Optimization, Fundamental Objects, Singular Value Decomposition (SVD), linear transformation, Linear Algebra, Key Concepts, Vector Spaces, basis, Related Topics, Rank, [[spectral-theory-operators|Eigenvalues]] and Eigenvectors, Matrices, dimension, Weights, Overview
- References: attention-mechanisms, automatic-differentiation, convex-optimization, graph-theory, manifold-learning, math/spectral-theory-operators, quantization, spectral-graph-theory, transformer-architecture
- Backlinks: graph-theory, language-models/mamba-ssm, math/functional-analysis

## Entity: quantum-math
- Title: Math of Quantum Computing
- Category: Foundations
- Language: en
- Key Concepts: 2. Tensor Products and Entanglement, Linear Algebra, Born Rule, Schmidt Rank, Related Topics, The Mathematics of Quantum Computing, Superposition, Grover's Algorithm, 5. Key Quantum Algorithms, Visualization: The Bloch Sphere, Entanglement, 1. The Qubit as a Hilbert Space Vector, Hadamard Gate ($H$), Unitary Matrix, tensor product
- References: hilbert-banach-spaces, quantum-amplitude-estimation, quantum-information-entropy, spectral-theorem-unbounded
- Backlinks: hilbert-banach-spaces, path-integral-control, quantum-amplitude-estimation

## Entity: decision-theory
- Title: Statistical Decision Theory
- Category: Foundations
- Language: en
- Key Concepts: 2. Decision Rules and Risk, Utility Theory, Decision Rule, Reinforcement Learning, Adversarial Machine Learning, 4. Connection to Modern AI, Parameter Space ($\Theta$), Dominant, Loss Function $L(\theta, a)$, Bayesian Inference, Statistical Decision Theory: The Logic of Choice, Related Topics, Action Space ($\mathcal{A}$), The Admissibility Crisis, Bellman Equation
- References: bayesian-inference, finance/shannon-entropy, reinforcement-learning
- Backlinks: naive-bayes

## Entity: tensor-decompositions
- Title: Tensor Decompositions
- Category: Foundations
- Language: en
- Key Concepts: Tensors, Interpretation, Compression Power, 1. The Core Problem: Rank of a Tensor, Tensor Decompositions, Related Topics, Communication, Limitation, 3. Tucker Decomposition (Higher-Order SVD), NP-hard, Core Tensor, 4. Tensor-Train (TT) Decomposition, rank-1 tensors, 5. Why it Matters for AI Infrastructure, Visualization: CP vs. Tucker
- References: distributed-training, many-body-tensor-networks, modern-quantization, pca
- Backlinks: course-math-for-ai, lora-peft

## Entity: maximum-entropy
- Title: The Maximum Entropy Principle
- Category: Foundations
- Language: en
- Key Concepts: 3. Duality with maximum likelihood, m-flat, 1. Formal statement, convex dual, 4. The MaxEnt zoo, 9. Information-geometric view, 10. Applications in modern ML, MaxEnt ↔ MLE equivalence, 7. Bayesian priors via MaxEnt, not a postulate, 11. Visualisation: entropy decreases with constraints, maximally uncertain, [[shannon-entropy|entropy]] is a unifying concept, exactly the canonical form of an [[exponential-families|exponential family]], Key takeaway.
- References: bayesian-inference, exponential-families, finance/shannon-entropy, fisher-information, manifold-learning, math/analysis-geometry/information-geometry, math/information-theory, mle, statistical-mechanics
- Backlinks: course-math-for-ai, distributions-zoo, entropy-information, information-theory-basics

## Entity: topos-theory
- Title: Topos Theory
- Category: Foundations
- Language: en
- Key Concepts: Two Views of a Topos, Independence Proofs, Quantum Logic, Exponentials, Alexandre Grothendieck, Why It Matters for AI and Physics, Intuitionistic Logic, Holography, Related Topics, What is a Topos?, Sheaves, Subobject Classifier ($\Omega$), Synthetic Differential Geometry, Visualization: Truth Value Spectrum, Etale Cohomology
- References: category-theory, homological-algebra, math/algebraic-topology
- Backlinks: category-theory, category-theory-ml, type-theory

## Entity: type-theory
- Title: Type Theory and Formal Logic
- Category: Foundations
- Language: en
- Key Concepts: Type, 3. Homotopy Type Theory (HoTT), Type Theory and Formal Logic, 2. Dependent Types, 1. The Curry-Howard Correspondence, Related Topics, Lean, spaces, Programs, Proofs are Programs, Coq, Dependent types, Visualization: The Proof-Program Ladder, Propositions are Types, paths
- References: category-theory, reasoning-models, topos-theory
- Backlinks: category-theory, category-theory-ml, homotopy-type-theory

## Entity: math/variational-calculus
- Title: Variational Calculus
- Category: Foundations
- Language: en
- Key Concepts: symmetries to conservation laws, Hamilton's Principle:, Variational Principles in AI, 2. Variational Inference, Momentum, Action, Lagrangian, 1. Physics-Informed Neural Networks (PINNs), Noether's Theorem, Related Topics, functionals, Geodesics:, Classical Examples, Angular Momentum, ELBO
- References: lagrangian-mechanics, noether-theorem, variational-inference
- Backlinks: ai-physics/hamiltonian-nn, convex-optimization, math/differential-geometry, math/ode-stability

## Entity: math/cantor-diagonal
- Title: Cantor's Diagonal Argument
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Cantor's diagonal argument, between, Countability, [[godel-incompleteness|Gödel's incompleteness theorems]], Theorem: $\mathbb{R}$ is Uncountable, Related Articles, Cardinal Numbers, uncountable, Cantor's theorem, Cantor's Diagonal Argument, countable, Turing's halting problem, Proof., Self-reference in [[chain-of-thought|chain-of-thought reasoning]], Continuum Hypothesis
- References: chain-of-thought, kolmogorov-complexity, llm, math/banach-tarski, math/godel-incompleteness
- Backlinks: chain-of-thought, math/banach-tarski, math/godel-incompleteness

## Entity: math/godel-incompleteness
- Title: Gödel's Incompleteness Theorems
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: The Gödel Sentence, Gödel's incompleteness theorems, Consequences, Connection to computability and AI, true but unprovable, Related Articles, "I am unprovable in $T$", Gödel Numbering, incomplete, Diagonalization lemma, Python Demonstration, Second Incompleteness Theorem, [[kolmogorov-complexity|Kolmogorov complexity]], Gödel's Incompleteness Theorems, First Incompleteness Theorem
- References: chain-of-thought, information-paradox, kolmogorov-complexity, llm, math/banach-tarski, math/cantor-diagonal, mechanistic-interpretability, transformer-architecture
- Backlinks: chain-of-thought, homotopy-type-theory, math/banach-tarski, math/cantor-diagonal, math/kolmogorov-probability-axioms, math/non-euclidean-geometry

## Entity: math/non-euclidean-geometry
- Title: Non-Euclidean Geometry
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: fifth postulate, Non-Euclidean Geometry, Gaussian Curvature, Related Articles, Non-Euclidean geometry, Metric, Three Geometries, Gauss's Theorema Egregium, The Parallel Postulate, Geodesics, Connection to Physics, [[general-relativity|general relativity]], exactly one, Poincaré Disk Model
- References: asymptotic-spacetime, bms-group, celestial-holography, general-relativity, gravitational-waves-gr, manifold-learning, math/banach-tarski, math/godel-incompleteness
- Backlinks: math/algebraic-topology, math/banach-tarski, math/differential-geometry

## Entity: math/banach-tarski
- Title: The Banach-Tarski Paradox
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: 3. Axiom of Choice, 1. Free Group on Two Generators, 2. Hausdorff Paradox (1914), without, The Role of the Axiom of Choice, two balls of the same size, two copies of itself, non-measurable sets, Statement, Echoes in physics, Related Articles, free group, measure theory and symmetry transformations break down at the quantum level, all subsets of $\mathbb{R}$ are Lebesgue measurable, Axiom of Choice
- References: anomalies, math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry
- Backlinks: math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry

## Entity: operator-semigroups
- Title: Operator Semigroups
- Category: Functional Analysis
- Language: en
- Key Concepts: One-Parameter Semigroup, 4. Contractive Semigroups and Stability, Partial Differential Equations (PDEs), time-domain behavior, Operator Semigroups: The Math of Evolution, Neural ODEs, 3. Physical Examples, Contractive, Heat Equation, Generator, Related Topics, Semigroup Property, Stochastic Processes, The Hille-Yosida Theorem, Markov Processes
- References: feller-processes, laplacian, neural-odes, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: dirichlet-forms, feller-processes, spectral-theorem-unbounded

## Entity: schwartz-distributions
- Title: Schwartz Distributions
- Category: Functional Analysis
- Language: en
- Key Concepts: 4. Fundamental Solutions (Green's Functions), Schwartz Space, Partial Differential Equations (PDEs), every distribution has a derivative, Convolution, 1. The Core Idea: Functions as Linear Maps, 2. Weak Derivatives: Differentiating the Non-Differentiable, Visualization: Derivative of a Step, Related Topics, Tempered Distributions, Dirac Delta, Fundamental Solution, Test Functions, 3. The Fourier Transform of Distributions, Schwartz Distributions
- References: deep-galerkin, fourier-transform, laplacian, partial-differential-equations, spectral-graph-theory
- Backlinks: gff, microlocal-analysis

## Entity: sobolev-spaces
- Title: Sobolev Spaces & Weak Solutions
- Category: Functional Analysis
- Language: en
- Key Concepts: Sobolev Embeddings, Sobolev Spaces & Weak Solutions, Sobolev Spaces $W^{k,p}$, Physics-Informed Neural Networks (PINNs), Rellich-Kondrachov Theorem, Weak Derivatives
- Backlinks: deep-ritz-method, hilbert-banach-spaces, math/harmonic-analysis, math/lp-spaces, math/nonparametric-regression, math/spectral-theory-operators, math/topology-basics

## Entity: spectral-theorem-unbounded
- Title: Spectral Theorem for Unbounded Operators
- Category: Functional Analysis
- Language: en
- Key Concepts: The Spectral Decomposition, Self-Adjointness, Spectral Theorem for Unbounded Operators, Self-Adjointness: The Key Requirement, Quantum Mechanics, Related Topics, Schrödinger equation, Stable Processes, Visualization: Discrete vs. Continuous Spectrum, Kernel Methods, Spectral Measure, Stochastic PDEs, Why It Matters in Physics and AI, unbounded, Functional Calculus
- References: functional-analysis, math/spectral-theory-operators, operator-semigroups, spectral-graph-theory
- Backlinks: laplacian, operator-semigroups, quantum-math

## Entity: bayes-theorem
- Title: Bayes' Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: $P(B)$ (Evidence):, Base Rate Fallacy, uncertainty, Applications in AI, $P(B|A)$ (Likelihood):, $P(A)$ (Prior):, Logical Pitfalls, Related Topics, Naive Bayes Classifier:, $P(A|B)$ (Posterior):, Bayesian Neural Networks:, Bayesian Inference:, The Formula, Bayes' Theorem, Variational Autoencoders (VAE):
- References: naive-bayes, prm, variational-inference
- Backlinks: bayesian-networks, conditional-probability, map-estimation, probability-distributions, probability-paradoxes, statistical-inference

## Entity: combinatorics-induction
- Title: Combinatorics and Mathematical Induction
- Category: Fundamentals
- Language: en
- Key Concepts: Combinations ($C_n^k$), Probability in Deep Learning, 3. Mathematical Induction, 4. Why it Matters in CS and AI, 1. The Rules of Counting, Mathematical Induction, Combinatorics, Complexity Analysis, Related Topics, Product Rule, Binomial Distribution, 5. Pigeonhole Principle, Hardware Design, not, Intuition: The Domino Effect
- References: lln-clt, stablecoin-mechanisms
- Backlinks: number-theory-basics

## Entity: lagrange-multipliers
- Title: Constrained Optimization and Lagrange Multipliers
- Category: Fundamentals
- Language: en
- Key Concepts: Lagrange Multipliers, Karush-Kuhn-Tucker (KKT), Visualization: Tangent Gradients, A. Support Vector Machines (SVMs), Lagrange Multiplier, C. Advanced: KKT Conditions, 2. Geometric Intuition, Related Topics, Constrained Optimization: The Method of Lagrange Multipliers, Euler-Lagrange equations, tangent, subject to, Support Vectors, 3. The Lagrangian Function ($\mathcal{L}$), 4. Why it Matters in AI and Physics
- References: ai-physics/hamiltonian-nn, convex-optimization, convex-optimization-trading, multivariable-calculus
- Backlinks: course-math-for-ai, linear-programming

## Entity: convexity
- Title: Convexity
- Category: Fundamentals
- Language: en
- Key Concepts: Non-Convex, C. Log-Concavity in Stats, Convexity: The Safety Net of Optimization, Strong Convexity, local minimum is the global minimum, In AI, A. Convex Sets, Quadratic Convex Program, Related Topics, Log-Concave, In Finance, B. Portfolio Optimization, 4. Jensen's Inequality, Positive Semi-Definite, Karush-Kuhn-Tucker (KKT)
- References: convex-optimization, convex-optimization-trading, gradient-hessian-jacobian, martingale-optimal-transport, variational-autoencoders
- Backlinks: course-math-for-ai, fixed-point-theorems, jensen-inequality, jensens-inequality, logistic-regression, martingale-optimal-transport

## Entity: differential-equations
- Title: Differential Equations: The Laws of Change
- Category: Fundamentals
- Language: en
- Key Concepts: Differential Equations (DEs), 1. Ordinary Differential Equations (ODEs), Euler methods, Exponential Growth, 3. Linearity and Superposition, Decay, Heat Equation, 4. Analytical vs. Numerical Solutions, Related Topics, Analytical, 2. Partial Differential Equations (PDEs), Second Order, Numerical, 5. Why it Matters in AI and Finance, Superposition Principle
- References: automatic-differentiation, geometric-brownian-motion, ricci-flow, stochastic-differential-equations

## Entity: fourier-transform
- Title: Fourier Transform
- Category: Fundamentals
- Language: en
- Key Concepts: Frequency Domain, Fourier Transform: The Language of Waves, Positional Encodings, Duality, Parseval's Theorem, Fourier Neural Operators (FNO), Inverse Transform, Time Domain, Geometric Deep Learning (GNNs), Related Topics, 5. Why it Matters in AI and Science, Uncertainty Principle, 3. Discrete and Fast Transform (FFT), Visualization: From Time to Frequency, Fourier Transform
- References: finance/spectral-analysis, spectral-graph-theory
- Backlinks: characteristic-functions, complex-analysis, finance/dft, finance/fft, finance/prony-hankel-spectral, mgf, mgf-characteristic-functions, occupation-measures-local-times, schwartz-distributions

## Entity: gradient-hessian-jacobian
- Title: Gradient, Hessian, and Jacobian
- Category: Fundamentals
- Language: en
- Key Concepts: Optimization, Linearization, Visualization: Landscape Analysis, Deep Learning, Jacobian-Vector Products (JVP), Newton's Method, In AI, 2. The Jacobian ($J$) - The Linearizer, Gradient, Hessian, and Jacobian: The Geometry of Derivatives, 1. The Gradient ($\nabla f$) - The Compass, Related Topics, Hessian-Free & K-FAC, 4. Advanced Optimization: Beyond SGD, Geometric Meaning, vector-valued
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, laplacian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, change-of-variables, convexity, course-math-for-ai, laplacian, optimization-basics, qat

## Entity: hilbert-banach-spaces
- Title: Hilbert and Banach Spaces
- Category: Fundamentals
- Language: en
- Key Concepts: Closed graph theorem, never norm-compact, Moore-Aronszajn theorem., 10. Quantum mechanics, Reflexivity., Banach fixed-point theorem, bounded, Open mapping theorem, Sobolev spaces, Normal:, Riesz-Fréchet theorem., kernel trick, 9. RKHS and the kernel trick, Compact:, 11. Visualisation
- References: functional-analysis, gaussian-processes, kernel-methods-rkhs, math/lp-spaces, math/spectral-theory-operators, quantum-math, sobolev-spaces
- Backlinks: course-math-for-ai, fixed-point-theorems, math/functional-analysis, quantum-math

## Entity: calculus-integration
- Title: Integration and the Fundamental Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: Integration by Parts, Probability Density Function (PDF), Part 1, Antiderivative, B. Physics: Work and Energy, Related Topics, 2. The Fundamental Theorem of Calculus (FTC), 4. Why it Matters in Science, 3. Techniques of Integration, Lebesgue Integration, C. Finance: Risk Accumulation, Integration and the Fundamental Theorem of Calculus, A. Probability and AI, Substitution (u-substitution), Intuition
- References: measure-theory, taylor-series
- Backlinks: neural-radiance-fields-math

## Entity: lln-clt
- Title: LLN and CLT: The Pillars of Statistics
- Category: Fundamentals
- Language: en
- Key Concepts: Weak LLN, Power Laws, 1. Law of Large Numbers (LLN), 4. Limitations and "Fat Tails", Related Topics, Central Limit Theorem (CLT), Visualization: Convergence to Normal, 3. Why the CLT is the "Magic" of the Universe, finite variance, Finance, LLN and CLT: Why Probability Works, Error Modeling, Law of Large Numbers (LLN), Hypothesis Testing, sum
- References: black-scholes, finance/black-swan-scenarios, finance/monte-carlo-method
- Backlinks: combinatorics-induction, course-math-for-ai, delta-method, discrete-random-variables, fundamental-inequalities, law-iterated-logarithm, probability-distributions, sequences-series-convergence

## Entity: laplacian
- Title: Laplacian Operator
- Category: Fundamentals
- Language: en
- Key Concepts: Spectral Bias in Neural Networks, Trace, The [[spectral-graph-theory|Laplacian]] Operator ($\Delta$), equilibrium, diffusion, and smoothness, 4. Relationship to the Hessian, Heat Equation, 3. Role in Modern AI, Related Topics, Dirichlet Energy, The Discrete [[spectral-graph-theory|Laplacian]] (Graphs), Diffusion Models, Physics-Informed Neural Networks (PINNs), Graph Laplacian, B. Curvature and Energy, Harmonic Functions
- References: diffusion-models, eigenvalues-eigenvectors, finance/shannon-entropy, gradient-hessian-jacobian, graph-neural-networks, math/spectral-theory-operators, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: course-math-for-ai, equivariant-diffusion-models, gff, gradient-hessian-jacobian, operator-semigroups, schwartz-distributions

## Entity: linear-programming
- Title: Linear Programming and Duality
- Category: Fundamentals
- Language: en
- Key Concepts: Linear Programming (LP), Linear Programming: The Science of Resource Allocation, A. Optimal Transport, 2. The Simplex Method, Linear Objective Function, Related Topics, Linear Equality and Inequality Constraints, B. Portfolio Optimization, Algorithm, C. Large-Scale Logistics, Dual, Strong Duality Theorem, Primal, 1. The Standard Form, 3. Duality: The Hidden Logic
- References: convex-optimization-trading, lagrange-multipliers, optimal-transport
- Backlinks: course-math-for-ai

## Entity: linear-spaces-basis
- Title: Linear Spaces, Basis, and Dimension
- Category: Fundamentals
- Language: en
- Key Concepts: Span, 1. Defining a Linear Space ($V$), Linear Independence, Linear Spaces, Basis, and Dimension: The Scaffold of Algebra, Linear Combination, Uniqueness, PCA, Distributivity, Fourier Transforms, 3. Basis and Dimension, Linear Transformation, 5. Subspaces and Rank, Subspace, Existence of Zero, Linear Space
- References: eigenvalues-eigenvectors, quantum-entanglement, quantum-information-entropy, tensor-calculus
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, linear-systems-gauss, taylor-series

## Entity: linear-systems-gauss
- Title: Linear Systems and Gaussian Elimination
- Category: Fundamentals
- Language: en
- Key Concepts: A. Computer Graphics, 4. Why it Matters in the Digital Age, Gauss-Jordan Elimination, The Process:, Multiplying, Infinitely Many Solutions, 2. Gaussian Elimination, Gaussian Elimination, Related Topics, Rank, No Solution (Inconsistent), Free Variables, Back Substitution, C. Large Language Models (LLMs), Swapping
- References: convex-optimization, eigenvalues-eigenvectors, linear-spaces-basis
- Backlinks: course-math-for-ai

## Entity: manifold
- Title: Manifold
- Category: Fundamentals
- Language: en
- Key Concepts: Charts, Geodesics, Metric Tensor, Riemannian Manifold, 3. Riemannian Manifolds: Measuring Distance, Application: Riemannian Optimization, Riemannian [[convex-optimization|Gradient Descent]], Related Topics, Curvature, Transition Maps, Differentiable Manifold, 2. The Manifold Hypothesis in AI, 4. Types of Manifolds in Wiki, 1. The Intuition: Atlas and Charts, Real-world high-dimensional data is not spread uniformly across space.
- References: complex-manifolds, convex-optimization, general-relativity, manifold-learning, math/differential-geometry, math/topology-basics, symplectic-geometry, variational-autoencoders
- Backlinks: course-math-for-ai, information-geometry-finance

## Entity: martingale
- Title: Martingale
- Category: Fundamentals
- Language: en
- Key Concepts: Martingale, Martingale: The Math of a Fair Game, B. Doob-Meyer Decomposition, Efficient Market Hypothesis, A. The Optional Stopping Theorem, Related Topics, In Finance, 2. Types of Martingales, Risk-Neutral Pricing, Integrability, Risk-Neutral Valuation, Supermartingale, Martingale Optimal Transport (MOT), Convergence of Algorithms, Adaptation
- References: brownian-motion, feller-processes, finance/shannon-entropy, martingale-optimal-transport, risk-neutral-valuation
- Backlinks: course-math-for-ai, martingale-optimal-transport, measure-theory

## Entity: measure-theory
- Title: Measure Theory Basics
- Category: Fundamentals
- Language: en
- Key Concepts: Null empty set, 2. Key Concepts, 3. Crucial Theorems for AI and Finance, Radon-Nikodym Derivative, Expected Shortfall (ES), Countable Additivity, B. Fatou's Lemma and Monotone Convergence, 1. What is a Measure ($\mu$)?, In Finance, Related Topics, A. Radon-Nikodym Theorem, A. Sigma-Algebras ($\mathcal{F}$), Likelihood Ratio, B. The Lebesgue Integral, Change of Measure
- References: frtb-es, martingale, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: axiomatic-probability, bayesian-inference, calculus-integration, continuous-random-variables, course-math-for-ai, dirichlet-forms, markov-chebyshev

## Entity: metric-spaces
- Title: Metric Spaces and Topology
- Category: Fundamentals
- Language: en
- Key Concepts: Triangle Inequality, Symmetry, 1. What is a Metric?, Topology, Open Sets, 2. Topology: Geometry without Measuring, 3. Key Concepts, Compact, [[manifold-learning|Manifold]] Learning, Embedding Spaces, Visualization: Continuous Deformation, Related Topics, Metric Spaces and Topology: The Fabric of Continuity, B. Completeness, Metric Spaces
- References: ai-theory/adversarial-examples, lending-mechanics, manifold-learning, optimal-transport

## Entity: multivariable-calculus
- Title: Multivariable Calculus: Jacobians and Hessians
- Category: Fundamentals
- Language: en
- Key Concepts: Optimization, 2. The Jacobian Matrix ($\mathbf{J}$), 1. The Gradient ($\nabla f$), 4. Why it Matters for High-Finance, Multivariable Calculus, Jacobian Matrix, Multivariable Calculus: The Language of Optimization, [[convex-optimization|Gradient Descent]], Delta, 3. The Hessian Matrix ($\mathbf{H}$), Related Topics, Curvature, Hessian, Saddle Point, TensorFlow
- References: automatic-differentiation, black-scholes, convex-optimization, math/analysis-geometry/information-geometry, math/spectral-theory-operators, taylor-series
- Backlinks: course-math-for-ai, lagrange-multipliers, taylor-series

## Entity: number-theory-basics
- Title: Number Theory and Cryptography
- Category: Fundamentals
- Language: en
- Key Concepts: Number Theory, Visualization: Modular Cycles, Prime Number, Collision Resistance, 2. Modular Arithmetic (Clock Math), Related Topics, Public Key Cryptography, 3. Fermat's Little Theorem, Elliptic Curve Cryptography (ECC), Euclidean Algorithm, 1. Divisibility and Prime Numbers, Modular Inverses, The Discrete Logarithm Problem, 5. Hash Functions and Collisions, The Difficulty of Factoring
- References: cedefi-gateway-architecture, cedefi-mechanics, combinatorics-induction

## Entity: taylor-series
- Title: Taylor Series and Approximation
- Category: Fundamentals
- Language: en
- Key Concepts: 4. Why it Matters in Physics and AI, Sine, 1. The Taylor Formula, 3. Important Expansions to Memorize, B. Euler's Identity, 5. Remainder and Convergence, Related Topics, Second-order Taylor expansion, Curvature, Maclaurin Series, Exponential, C. Optimization, A. Small Angle Approximation, 2nd Order (Quadratic), 1st Order (Linear)
- References: black-scholes, linear-spaces-basis, multivariable-calculus
- Backlinks: calculus-integration, course-math-for-ai, multivariable-calculus, sequences-series-convergence

## Entity: ads-cft-deep
- Title: AdS/CFT Correspondence
- Category: Holography
- Language: en
- Key Concepts: Visualization: The AdS Tin Can, 1. The Two Sides of the Bridge, Strange Metals, 2. The Ryu-Takayanagi Formula: Geometry is Information, AdS/CFT correspondence, Juan Maldacena, Related Topics, gravity is not a fundamental force, Spacetime and Entanglement, Computational Complexity, Quantum Complexity, ER = EPR, 3. ER = EPR: The Wormhole Paradox, AdS/CFT Correspondence: The Holographic Principle, Boundary
- References: black-hole-thermodynamics, conformal-field-theory, quantum-information-entropy
- Backlinks: quantum-information-entropy

## Entity: agentic-patterns
- Title: Agentic Design Patterns
- Category: LLM Infrastructure
- Language: en
- Key Concepts: What Is It, Core Patterns, Implementation: Simple Reflection Pattern, Mathematical Perspective: Iterative Refinement, 4. Multi-Agent Collaboration, ReAct, New Standard, Agentic Design Patterns, 3. Tool Use (Reasoning + Acting), Related Topics, 1. Reflection (Self-Correction), Why, Frameworks, 2. Planning, Workflow
- References: agents, llm, mcp, tool-use

## Entity: preference-optimization
- Title: Beyond DPO: KTO & IPO
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Direct Preference Optimization ([[dpo]]), Data Requirement, overfitting problem, Foundation, Related Topics, Unpaired (Binary), Which One to Choose?, Best For, Data Efficiency, Prospect Theory, Diversity, Stability, Beyond [[dpo]]: KTO and IPO, Advantages, 1. KTO: Kahneman-Tversky Optimization
- References: dpo, fine-tuning, rlhf
- Backlinks: llm

## Entity: chain-of-thought
- Title: Chain-of-Thought Reasoning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Mathematical / Formal Framework, Variants & Extensions, Self-consistency:, Prerequisites, Extended thinking:, search-time amortisation of a fixed information budget, When CoT Helps vs. Hurts, [[godel-incompleteness|Gödel's incompleteness theorems]], Emergent behavior:, Educational tutoring:, Medical diagnosis:, Tree of Thoughts (ToT):, Implementation, Theoretical limits, Multi-step quantitative finance:
- References: fine-tuning, kolmogorov-complexity, llm, math/cantor-diagonal, math/godel-incompleteness, mcp, mechanistic-interpretability, rag, rlhf, speculative-decoding, tool-use, transformer-architecture
- Backlinks: agents, ai-theory/in-context-learning, evaluation-llms, math/cantor-diagonal, math/godel-incompleteness, mcp, meta-learning, prm, reasoning-models, rlhf, test-time-scaling, tool-use

## Entity: context-length
- Title: Context Length Extension
- Category: LLM Infrastructure
- Language: en
- Key Concepts: RoPE Scaling, requires no retraining to extend context, Claude 3, GPT-4, Llama 3, Context Length Extension, FlashAttention and Memory-Efficient Long Context, RoPE: Rotary Position Embedding, Gemini 1.5, Current Landscape, ALiBi: [[attention-mechanisms|Attention]] with Linear Biases, The Sinusoidal Baseline and Its Limits, Sliding Window Attention, The "Lost in the Middle" Problem, only on relative position
- References: attention-mechanisms, fine-tuning, inference-serving, llm, rag, speculative-decoding, state-space-models, transformer-architecture, vector-databases

## Entity: continuous-batching
- Title: Continuous Batching
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Two Phases of Generation, chunked prefill, padded, Prefill Phase, Continuous Batching (In-Flight Batching), batch, 10x to 20x, Related Topics, Operate at the iteration (token) level, not the request level, Why It Matters, Result, Decode Phase, Visualization: Static vs. Continuous, Insertion, Eviction
- References: hardware-io-attention, inference-serving, llm, paged-attention
- Backlinks: speculative-decoding

## Entity: curriculum-learning
- Title: Curriculum Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Competence Scaling, Applications in LLMs, Heuristics, Why Ordering Matters, Curriculum Learning, Related Topics, Types of Curricula, 1. Predefined Curriculum, Context Length, 2. Automated Curriculum Learning (ACL), complexity, Better Generalization, Coding, Faster Convergence, Reasoning
- References: fine-tuning, neural-scaling-laws, training-dynamics

## Entity: dl-compilers
- Title: Deep Learning Compilers
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Solution: Operator Fusion, Deep Learning Compilers and Kernel Fusion, 2. Triton, Related Topics, 3. `torch.compile` (PyTorch 2.0), The Problem: Kernel Launch Overhead and Memory Bound, Why It Matters, Deep Learning Compilers, Visualization: The Compilation Pipeline, Technologies: XLA, Triton, and `torch.compile`, Operator Fusion, 1. XLA (Accelerated Linear Algebra)
- References: flash-attention, gpu-architecture, hardware-io-attention, inference-serving, moe-routing
- Backlinks: flash-attention, gpu-architecture

## Entity: dpo
- Title: Direct Preference Optimization (DPO)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Likelihood Over-optimization, Complexity, Reward Model, What Is It, binary cross-[[shannon-entropy|entropy]] loss, Related Topics, preferred, Compute, Limitations, Sampling, Stability, rejected, Implementation with `trl`, [[rlhf]], DPO Loss Function
- References: agents, finance/shannon-entropy, fine-tuning, llm, rlhf
- Backlinks: language-models/safety/rlhf-dpo, llm, preference-optimization, preference-optimization-variants, rlhf, self-rewarding

## Entity: distributed-training
- Title: Distributed Training
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Modern Solution, Efficiency, Visualization: Parallelism Spectrum, Reduce-Scatter, ZeRO, 1. The Three Pillars of Parallelism, DDP (Distributed Data Parallel), Bubble Time, ZeRO-2, Related Topics, All-Reduce, C. Pipeline Parallelism (PP), Weights, Distributed Training, Distributed Training: Scaling LLMs to Trillions of Parameters
- References: fine-tuning, flash-attention, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: fsdp, hardware-io-attention, model-parallelism, tensor-decompositions

## Entity: federated-learning
- Title: Federated Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Smart Keyboards, The Core Algorithm: FedAvg, 1. Statistical Heterogeneity (Non-IID), LoRA, Federated Learning, Federated Averaging (FedAvg), Applications, Upload, Sparsification, Related Topics, Local Training, Mobile Health, Visualization: Convergence Delay, Broadcast, Aggregation
- References: differential-privacy, fine-tuning, llm, quantization
- Backlinks: differential-privacy

## Entity: flash-attention
- Title: FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: B. Online Softmax, Tri Dao et al. (2022), Streaming Multiprocessors (SMs), Speed, SRAM, 3. Results: Scaling to 1M Tokens, Related Topics, Impact, 2. The Solution: Tiling and Recomputation, HBM (High Bandwidth Memory), 1. The Bottleneck: The Memory Wall, does not store it, Claude 3, FlashAttention: Fast and Memory-Efficient [[attention-mechanisms|Attention]] with Tiling, 16 GB
- References: attention-mechanisms, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, distributed-training, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, language-models/mamba-ssm, paged-attention, rope-scaling

## Entity: fsdp
- Title: Fully Sharded Data Parallel (FSDP)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Lifecycle of a Layer, Virtually unlimited, Distributed Data Parallel (DDP), Backward Pass, Complexity, Reduce-Scatter, Hybrid Sharding, Forward Pass, Communication Efficiency, Fully Sharded Data Parallel (FSDP), Scales down, Sharded, Related Topics, How FSDP Works, Discard
- References: distributed-training, fine-tuning, inference-serving, model-parallelism
- Backlinks: model-parallelism

## Entity: gpu-architecture
- Title: GPU Architecture for Deep Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 32 threads, [[inference-serving|GPU]] Architecture: SMs, Warps, and Tensor Cores, Streaming Multiprocessors (SMs), Registers, 2. Threads and Warps, Related Topics, L2 Cache, Visualization: Matrix Multiplication, Thread, [[flash-attention|HBM]] (Global Memory), L1 Cache / Shared Memory, 1. Streaming Multiprocessors (SMs), Mixed Precision, 4. The Memory Hierarchy, single clock cycle
- References: attention-mechanisms, dl-compilers, flash-attention, hardware-io-attention, inference-serving, modern-quantization
- Backlinks: distributed-training, dl-compilers, flash-attention, modern-quantization

## Entity: hardware-io-attention
- Title: Hardware IO and FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Role, Communication-Avoiding, [[flash-attention|HBM]] (High Bandwidth Memory), 90% of its time waiting, Tiling, Size, The "Memory Wall" Problem, Visualization: Memory Speed vs. Access, The Memory Hierarchy of a [[inference-serving|GPU]], FlashAttention: IO-Awareness, Related Topics, IO-bound, Why It Matters for the Future, Hardware IO and the Physics of FlashAttention, entirely within SRAM
- References: attention-mechanisms, distributed-training, flash-attention, inference-serving
- Backlinks: continuous-batching, distributed-training, dl-compilers, flash-attention, gpu-architecture, paged-attention

## Entity: agents
- Title: LLM Agents
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Progressive refinement:, Sliding window:, Propose:, Current Frontier and Reliability, Reasoning models (o1/o3):, Computation:, Action:, Prerequisites, Observation injection:, Tool-use [[fine-tuning]]:, Memory Types in Agents, Multi-Agent Systems, Loop detection:, Pseudocode:, Tree of Thoughts (ToT)
- References: chain-of-thought, fine-tuning, llm, mcp, rag, reinforcement-learning, tool-use
- Backlinks: agentic-patterns, dpo, inference-serving, prompt-engineering, vector-databases

## Entity: evaluation-llms
- Title: LLM Evaluation
- Category: LLM Infrastructure
- Language: en
- Key Concepts: BIG-Bench Hard, MMLU (Massive Multitask Language Understanding), Emergence and Scaling: Artifact or Reality?, Rotate benchmarks monthly., Compare to human performance., BIG-Bench and BIG-Bench Hard, Multi-Turn Preference Evaluation, orthogonal evaluation across diverse benchmarks never used for training, Never optimize for a single metric., Membership inference, Knowledge & Reasoning Benchmarks, Goodhart's Law: Measure Becomes Target, MT-Bench, Holistic Evaluation: HELM, Calibration
- References: chain-of-thought, llm, rlhf
- Backlinks: ai-theory/knowledge-distillation, bayesian-deep-learning, prompt-engineering

## Entity: fine-tuning
- Title: LLM Fine-Tuning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: only on response tokens, Data, QLoRA: Quantized LoRA, LoRA, Monitoring, When to Fine-Tune, Adapter Layers, catastrophic forgetting, Prompt Tuning, PEFT: Parameter-Efficient Fine-Tuning, LoRA: Low-Rank Adaptation, Parameter reduction:, Instruction Tuning vs. [[rlhf]], Prompting / [[rag]] if:, LoRA rank
- References: attention-mechanisms, convex-optimization, inference-serving, quantization, rag, rlhf, transformer-architecture
- Backlinks: adalora, agents, ai-theory/in-context-learning, ai-theory/knowledge-distillation, chain-of-thought, code-models, constitutional-ai, context-length, contrastive-learning, curriculum-learning, distributed-training, dora, dpo, effective-field-theory, federated-learning, fsdp, language-models/safety/rlhf-dpo, llm, llm-financial-analysis, lora-peft, mixture-of-experts, ml-options-pricing, model-merging, modern-quantization, nlp-financial-analysis, positional-encodings, preference-optimization, prompt-engineering, qat, qlora, quantization, rag, rlhf, self-rewarding, slm, synthetic-data-alignment, tool-use, training-dynamics, weight-averaging

## Entity: inference-serving
- Title: LLM Inference Serving
- Category: LLM Infrastructure
- Language: en
- Key Concepts: pages, memory-bound, Continuous batching, Prefill vs. decode: asymmetric computational graph, Prefill, Dynamic index remapping, KV-cache: the memory-compute trade-off, vLLM, Flash [[attention-mechanisms|Attention]] for long contexts, TBT (time-between-tokens), Continuous batching: asynchronous pipeline, PagedAttention, Related topics, TensorRT-[[llm]], Disaggregation
- References: agents, attention-mechanisms, flash-attention, llm, mixture-of-experts, quantization, speculative-decoding, transformer-architecture
- Backlinks: attention-mechanisms, automatic-differentiation, context-length, continuous-batching, distributed-training, dl-compilers, finance/monte-carlo-method, finance/xva, fine-tuning, flash-attention, fsdp, gpu-architecture, hardware-io-attention, language-models/mamba-ssm, llm-financial-analysis, lora-peft, mla, model-merging, model-parallelism, modern-quantization, paged-attention, quantization, queuing-theory, rope-scaling, slm, speculative-decoding, temporal-fusion-transformer, tokenization, vector-databases, volatility-modulated-spectral-surface

## Entity: lora-peft
- Title: LoRA and PEFT
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Mathematical Intuition, IA3, Prompt Tuning, Zero Inference Latency, Multi-tenancy, Advantages of LoRA, rank $r \ll d$, low intrinsic rank, QLoRA, LoRA and Parameter-Efficient [[fine-tuning]] (PEFT), Other PEFT Techniques, Related Topics, LoRA, VRAM Savings, Portability
- References: fine-tuning, inference-serving, quantization, tensor-decompositions, transformer-architecture

## Entity: mcp
- Title: MCP (Model Context Protocol)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Data science workflows:, QuantLib-backed pricers, Mathematical / Formal Framework, Variants & Extensions, Prerequisites, Overhead:, Enterprise knowledge access:, Primitives, Internal valuation memos and risk dashboards, MCP for quantitative finance, Market-data feeds, Implementation, Remote MCP over HTTP:, MCP with OAuth:, DevOps agents:
- References: chain-of-thought, llm, llm-financial-analysis, rag, slm, speculative-decoding, tool-use
- Backlinks: agentic-patterns, agents, chain-of-thought, tool-use

## Entity: model-parallelism
- Title: Model Parallelism: Tensor and Pipeline
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Efficiency, Visualization: The Pipeline Bubble, The Problem: Pipeline Bubbles, Model Parallelism, 1. Tensor Parallelism (TP), 3D Parallelism, Data Parallelism (DP/ZeRO), Related Topics, Cons, Pipeline Parallelism (PP), Communication, Split unit, NVLink, Model Parallelism: Tensor vs. Pipeline, 2. Pipeline Parallelism (PP)
- References: attention-mechanisms, distributed-training, fsdp, inference-serving, transformer-architecture
- Backlinks: fsdp

## Entity: quantization
- Title: Model Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: second-order optimization, See Also, signal-to-noise ratio, symmetric, Weight vs. Activation Quantization, Q8_0, Integration with Inference Pipelines, activation scales, NF4, Activation-Aware Weight Quantization: AWQ, Absmax Quantization, uniform, Q5_K_M, GGUF Format and Local Inference, Accuracy Trade-offs
- References: attention-mechanisms, fine-tuning, inference-serving, llm, mixture-of-experts, neural-scaling-laws, speculative-decoding, transformer-architecture
- Backlinks: ai-theory/knowledge-distillation, bitnet, conformal-field-theory, federated-learning, fine-tuning, hamiltonian-mechanics, homological-algebra, inference-serving, linear-algebra, lora-peft, modern-quantization, pauli-exclusion-quantization, qat, qft-basic, qlora, quantization-error-math, quantization-ptq-information, research/mla-financial-reasoning, slm, small-ball-probabilities, vector-databases

## Entity: modern-quantization
- Title: Modern Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: [[quantization]] Error, Normal (Gaussian) Distribution, Mechanism, Training, Hopper (H100), 1. The Challenge of Low Precision, Related Topics, 1% of weights, Result, Hessian, 5. FP8 and the Future, Visualization: Distribution-Aware Binning, 2. NormalFloat4 (NF4): Quantization for All, bitsandbytes, FP8
- References: fine-tuning, gpu-architecture, inference-serving, quantization
- Backlinks: deep-lob, gpu-architecture, qat, tensor-decompositions

## Entity: orm-prm
- Title: ORM vs PRM: Preference Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Inference-time Search, ORM vs PRM: Two Ways to Reward Reasoning, Visualization: Reward Density, how to reward, False Positives, Excellent, PRM, 2. Process Reward Models (PRM), Comparison: Accuracy on Complex Tasks, Related Topics, each individual step, Implementation in [[rlhf]], final answer, 1. Outcome Reward Models (ORM), The Signal
- References: llm, mcts, prm, reasoning-models, rlhf

## Entity: paged-attention
- Title: PagedAttention and KV Cache
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Contiguous Allocation, Block Tables, The Problem: Memory Fragmentation, The Solution: Operating System Inspiration, Visualization: Paged Memory Allocation, vLLM, share the same physical blocks, Paging, external fragmentation, 1. Near-Zero Waste, Unpredictability, PagedAttention and KV Cache Management, Copy-on-Write (CoW), Related Topics, KV Cache
- References: attention-mechanisms, flash-attention, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, continuous-batching

## Entity: prompt-engineering
- Title: Prompt Engineering
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Zero-shot and Few-shot Learning, Tree of Thoughts and Search, Assistant turn, Prompt Sensitivity and Optimization, APE, User turn, System Prompts and Jailbreaking, Limitations and Trade-offs, Tree of Thoughts, Self-consistency, System message, Structured Output and Grammar Constraints, DSPy, Chain-of-Thought Prompting, prompt optimization
- References: agents, evaluation-llms, fine-tuning, llm, meta-learning, rlhf, tool-use
- Backlinks: ai-theory/in-context-learning

## Entity: qat
- Title: Quantization Aware Training (QAT)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Forward Pass, 2-bit or 3-bit, Visualization: STE Gradient Flow, Fake [[quantization]], Step Size, Straight-Through Estimator (STE), Backward Pass, PTQ (Post-Training), [[quantization]] Aware Training (QAT), QLoRA, 5. Modern Variant: QLoRA, Related Topics, 4. QAT vs. PTQ: When to use which?, QAT (Aware Training), 3. LSQ: Learned Step Size Quantization
- References: automatic-differentiation, fine-tuning, gradient-hessian-jacobian, modern-quantization, quantization

## Entity: rag
- Title: RAG (Retrieval-Augmented Generation)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Visualization: Retrieval Precision, Vector Search, Multi-Query, Global Queries, HyDE (Hypothetical Document Embeddings), Retrieval (Hybrid Search), Mathematical Framework: RRF, Relational Reasoning, Related Topics, RAG (Retrieval-Augmented Generation), Post-Retrieval (Reranking), Faithfulness, Context Recall, Overview, Keyword Search
- References: embedding-models, fine-tuning, llm, llm-financial-analysis, tool-use, vector-databases
- Backlinks: about, agents, chain-of-thought, context-length, embedding-models, fine-tuning, llm-financial-analysis, mcp, naive-bayes, nlp-financial-analysis, projects/llm-wiki, research/mla-financial-reasoning, slm, tool-use, vector-databases

## Entity: self-rewarding
- Title: Self-Rewarding Models
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Reward Hacking, Why It Works, Mathematical Formulation: Iterative [[dpo]], student, The Iterative Loop, Related Topics, Real-World Examples, Self-Evaluation, Llama 3, Echo Chambers, Response Generation, Risks and Limitations, [[dpo]]/[[fine-tuning]], teacher, Visualization: Performance Scaling
- References: dpo, fine-tuning, prm, reasoning-models

## Entity: speculative-decoding
- Title: Speculative Decoding
- Category: LLM Infrastructure
- Language: en
- Key Concepts: The Core Concept, 2. EAGLE (Extrapolation Algorithm for Greater Language-model Efficiency), memory-bound, Performance Gains, Mathematical Foundation: Rejection Sampling, Visualization: Parallel Verification, Medusa, Code/Prose, Related Topics, Drafting, Accepting, Acceptance Rate, Mathematical Reasoning, 3. Self-Speculative Decoding, 1. Medusa (Draft-less Speculative Decoding)
- References: continuous-batching, inference-serving, kv-cache-compression, llm, multi-token-prediction, prm
- Backlinks: chain-of-thought, context-length, inference-serving, mcp, multi-token-prediction, quantization, tool-use

## Entity: tokenization
- Title: Tokenization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Byte-level BPE, likelihood ratio, Common Algorithms, Fertility, Sub-word, Vocabulary Size vs. Perplexity, Whitespace, Related Topics, Token Fertility and Inference Cost, 1. Byte-Pair Encoding (BPE), 3. Unigram Language Model, Tokenization, Numbers, Byte-level models, Artifacts and Challenges
- References: attention-mechanisms, inference-serving, transformer-architecture

## Entity: tool-use
- Title: Tool Use / Function Calling
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Cost:, Mathematical / Formal Framework, Step 3 — Tool execution., Variants & Extensions, [[deep-rl-execution|Deep RL for execution]], Tool Use / Function Calling, Tool-use as agent action space, Step 1 — Tool schema definition., Latency:, Implementation, [[mcp]] (Model Context Protocol), inference-time planning, Financial copilots:, Multi-agent tool delegation, DevOps agents:
- References: chain-of-thought, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, mcp, rag, reinforcement-learning, speculative-decoding
- Backlinks: agentic-patterns, agents, chain-of-thought, mcp, prompt-engineering, rag, research/mla-financial-reasoning

## Entity: vector-databases
- Title: Vector Databases
- Category: LLM Infrastructure
- Language: en
- Key Concepts: See Also, Storage, Similarity Metrics, Pre-filter, Managed vs. Self-hosted, IndexFlatL2, Complexity, multi-layer graph, IndexIVFFlat, pgvector, Convention, Search query, IndexIVFPQ, Cosine similarity, HNSW: Hierarchical Navigable Small World
- References: agents, embedding-models, inference-serving, llm, quantization, rag, transformer-architecture
- Backlinks: context-length, matryoshka-embeddings, rag

## Entity: weight-averaging
- Title: Weight Averaging and SWA
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Why It Works: The Flatness Hypothesis, Averaging, flat minima, Phase 2, flatness, Polyak-Ruppert Averaging (EMA), Related Topics, The Problem: Sharp Minima, Phase 1, Stochastic Weight Averaging (SWA), sharp minimum, Exponential Moving Average (EMA), Visualization: Converging to the Center, Weight Averaging and Stochastic Weight Averaging (SWA)
- References: fine-tuning, model-merging, training-dynamics

## Entity: preference-optimization-variants
- Title: Advanced Preference Optimization
- Category: Language Models
- Language: en
- Key Concepts: Prospect Theory, Comparison of Methods, 3. ORM and PRM Integration, DPO, 1. KTO (Kahneman-Tversky Optimization), Beyond [[dpo]], unpaired data, ORM (Outcome Reward Model), PPO, Related Topics, Process-based, Outcome-based, IPO, Advanced Preference Optimization, KTO
- References: dpo, prm, reasoning-models, rlhf
- Backlinks: synthetic-data-alignment

## Entity: language-models/safety/rlhf-dpo
- Title: Alignment: RLHF and DPO
- Category: Language Models
- Language: en
- Key Concepts: Reward Modeling:, PPO (Proximal Policy Optimization):, Drawbacks:, The Core Idea:, Constitutional AI, Stability, Complexity, SFT (Supervised [[fine-tuning]]):, Related Topics, [[rlhf]] (Reinforcement Learning from Human Feedback), Alignment: [[rlhf]] and [[dpo]], Alignment, [[dpo]] (Direct Preference Optimization), Reward Model (RM), [[rlhf]] vs. DPO
- References: constitutional-ai, dpo, finance/shannon-entropy, fine-tuning, llm, math/analysis-geometry/information-geometry, mechanistic-interpretability, rlhf

## Entity: bitnet
- Title: BitNet & 1.58-bit LLMs
- Category: Language Models
- Language: en
- Key Concepts: Visualization, Small Model Gap, What Is It, Training Complexity, Hardware Optimization, Throughput, Ternary Weight [[quantization]], Trade-offs, Related Topics, How It Works, Activation Quantization, Benefits, Scaling Laws, BitNet & 1.58-bit LLMs (Ternary [[quantization]]), Memory Footprint
- References: llm, mixture-of-experts, neural-scaling-laws, quantization, reasoning-models, slm, transformer-architecture

## Entity: code-models
- Title: Code Language Models
- Category: Language Models
- Language: en
- Key Concepts: Key Properties & Capabilities, Mathematical Framework, Security, General pre-training, Benchmark overfitting, Prerequisites, Data composition, Code completion, Code Language Models, Execution feedback objective (RLEF), What Is It, Multi-file awareness, RLEF, Positional encoding, Supervised [[fine-tuning]] (SFT)
- References: attention-mechanisms, fine-tuning, llm, mixture-of-experts, pac-learning, slm, transformer-architecture
- Backlinks: multi-token-prediction

## Entity: constitutional-ai
- Title: Constitutional AI and RLAIF
- Category: Language Models
- Language: en
- Key Concepts: Black-box, Constitutional AI (CAI), Generation, Transparency, Related Topics, 1. The Core Problem with [[rlhf]], Scalability, RLAIF, Phase 1: Supervised Learning (Critique and Revision), Expensive, 2. The CAI Process, Subjective, Safety-Efficiency Frontier, 4. Strategic Benefits, Phase 2: Reinforcement Learning (RLAIF)
- References: fine-tuning, llm, mechanistic-interpretability, reinforcement-learning, rlhf
- Backlinks: language-models/safety/rlhf-dpo, mechanistic-interpretability

## Entity: embedding-models
- Title: Embedding Models
- Category: Language Models
- Language: en
- Key Concepts: mean pooling, Key Properties & Capabilities, Embedding Models, Mathematical Framework, Asymmetric architectures, Anomaly detection, Contrastive loss on triplets, What Is It, InfoNCE / NT-Xent loss, Semantic search, Sentence similarity, Long documents, Related Topics, Cross-lingual transfer, Out-of-domain generalization
- References: attention-mechanisms, finance/shannon-entropy, llm, mixture-of-experts, rag, transformer-architecture, vlm
- Backlinks: contrastive-learning, llm, matryoshka-embeddings, rag, slm, vector-databases, vlm

## Entity: llm
- Title: Large Language Models (LLMs)
- Category: Language Models
- Language: en
- Key Concepts: Key Properties & Capabilities, Mathematical Framework, Hallucination, Autoregressive generation, Knowledge, 3. Alignment via [[rlhf]] or [[dpo]]., Rotary Position Embedding (RoPE), What Is It, Reasoning gaps, Positional encoding, Static knowledge, Pre-training objective, Chain-of-thought reasoning, Large Language Models (LLMs), Prompt sensitivity
- References: attention-mechanisms, dpo, embedding-models, fine-tuning, mechanistic-interpretability, mixture-of-experts, model-merging, neural-scaling-laws, preference-optimization, prm, reasoning-models, rlhf, slm, transformer-architecture
- Backlinks: about, agentic-patterns, agents, attention-mechanisms, bert, bitnet, chain-of-thought, code-models, constitutional-ai, context-length, continuous-batching, distributed-training, dpo, embedding-models, evaluation-llms, f-divergences, federated-learning, flash-attention, generative-models, gnn-credit-risk, gpt-architecture, inference-serving, language-models/safety/rlhf-dpo, llm-financial-analysis, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/cantor-diagonal, math/godel-incompleteness, matryoshka-embeddings, mcp, mechanism-design, meta-learning, mixture-of-experts, ml-options-pricing, model-merging, multi-token-prediction, naive-bayes, nlp-financial-analysis, orm-prm, paged-attention, positional-encodings, ppo, projects/llm-wiki, projects/vibefix, prompt-engineering, quantization, rag, reasoning-models, rlhf, slm, sparse-autoencoders, speculative-decoding, state-space-models, superposition, test-time-scaling, tool-use, vector-databases, vlm

## Entity: matryoshka-embeddings
- Title: Matryoshka Embeddings
- Category: Language Models
- Language: en
- Key Concepts: Visualization, What Is It, Use Cases, Adaptive Accuracy/Efficiency Trade-off, No Re-indexing, Low Latency, Matryoshka Embeddings (MRL), Related Topics, Vector Search, Nested Loss Function, How It Works, Benefits, On-device AI, Hierarchical Navigation, Storage Savings
- References: embedding-models, llm, vector-databases, vlm

## Entity: mixture-of-experts
- Title: Mixture of Experts (MoE)
- Category: Language Models
- Language: en
- Key Concepts: Key Properties & Capabilities, Memory cost, Router (gating network), Mathematical Framework, MoE layer, Capacity factor, $N$ expert FFNs, Prerequisites, Token dropping, Token dropping and inconsistency, What Is It, Gradient flow, Router logits and gating, Expert routing instability, Router initialization
- References: fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, slm, transformer-architecture
- Backlinks: bayesian-nonparametrics, bitnet, code-models, embedding-models, inference-serving, llm, mla, model-merging, moe-routing, quantization, slm, state-space-models, transformer-architecture

## Entity: moe-routing
- Title: MoE Routing and Specialization
- Category: Language Models
- Language: en
- Key Concepts: Advanced Routing Strategies, 1. Expert Collapse (Winner-Take-All), 2. Expert Overflow, Routing Challenges, Auxiliary Load Balancing Loss, MoE Routing and Expert Specialization, Router, experts choose tokens, Mixture of Experts (MoE), 1. Switch [[transformer-architecture|Transformer]] (Top-1), 2. Expert Choice Routing, 3. DeepSeek-V3: Multi-Head Latent [[attention-mechanisms|Attention]] & DeepSeekMoE, Related Topics, shared experts, Visualization: Token Distribution
- References: attention-mechanisms, mixture-of-experts, mla, transformer-architecture
- Backlinks: dl-compilers

## Entity: model-merging
- Title: Model Merging & FrankenMoE
- Category: Language Models
- Language: en
- Key Concepts: FrankenMoE: Creating Sparse Models, Model Merging & FrankenMoE, Flexibility, Merge, 3. DARE (Drop And REscale), Advantages and Limitations, What Is It, Model Merging, MergeKit, Base Model, Related Topics, 2. TIES-Merging, Compute, Performance, FrankenMoE
- References: fine-tuning, inference-serving, llm, mixture-of-experts
- Backlinks: llm, weight-averaging

## Entity: mla
- Title: Multi-Head Latent Attention (MLA)
- Category: Language Models
- Language: en
- Key Concepts: RoPE, Position Part, large-scale MoE, Comparison: KV-Cache Per Token, 2. Expansion, latent vector, The Architecture: Low-Rank Compression, better compression than GQA, What Is It, GQA, Related Topics, Why It Matters, Visualization: Memory Efficiency, DeepSeek (V2/V3), Multi-Head Latent [[attention-mechanisms|Attention]] (MLA)
- References: attention-mechanisms, inference-serving, mixture-of-experts
- Backlinks: moe-routing, rope-scaling

## Entity: multi-token-prediction
- Title: Multi-Token Prediction
- Category: Language Models
- Language: en
- Key Concepts: The Core Concept, Better Long-Term Dependency, Architecture: Shared Trunk and Independent Heads, Sample Efficiency, The Modified Loss Function, Multi-Token Prediction (MTP), Related Topics, $n$ Prediction Heads, Why It Works, Benefits, Improved Reasoning, Shared Trunk, Inference Speedup, Meta AI (2024)
- References: code-models, finance/shannon-entropy, llm, speculative-decoding, training-dynamics, transformer-architecture
- Backlinks: speculative-decoding

## Entity: positional-encodings
- Title: Positional Encodings
- Category: Language Models
- Language: en
- Key Concepts: Sinusoidal (Vaswani et al. 2017)., RoPE, T5 Relative Bias., Positional Encodings, Absolute Positional Encodings, Extrapolation Beyond Training Length, Positional encodings, RoPE: Rotary Position Embedding, Related Topics, Context Extension: YaRN, ALiBi (Press et al. 2022)., YaRN, Learned absolute., Relative Positional Encodings, Comparison Summary
- References: attention-mechanisms, fine-tuning, llm, neural-scaling-laws, transformer-architecture
- Backlinks: nerf, rope-scaling

## Entity: prm
- Title: Process-Based Supervision
- Category: Language Models
- Language: en
- Key Concepts: DeepSeek-R1, What Is It, Process-Based Supervision, The Mathematical Intuition, PRM vs. ORM Performance, Process-Based Supervision (PRMs), Why PRMs Matter, Related Topics, OpenAI PRM800K, Real-World Examples, Outcome-Based Supervision (ORMs), Hallucination Reduction, ORM, Credit Assignment, Search at Inference Time
- References: chain-of-thought, reasoning-models, rlhf
- Backlinks: bayes-theorem, llm, orm-prm, preference-optimization-variants, self-rewarding, speculative-decoding, test-time-scaling

## Entity: reasoning-models
- Title: Reasoning Models
- Category: Language Models
- Language: en
- Key Concepts: Mathematical Framework: GRPO, The "Aha" Moment, Cost, Key Capabilities, Visualization: Inference Scaling, Trade-offs, What Is It, Reasoning Models (o1/R1 Style), Complex Mathematics, Systematic Coding, Related Topics, Best For, Chain-of-Thought (CoT), Group Relative Policy Optimization (GRPO), How They Are Trained
- References: chain-of-thought, llm, neural-scaling-laws, rlhf
- Backlinks: bitnet, llm, orm-prm, preference-optimization-variants, prm, self-rewarding, test-time-scaling, type-theory

## Entity: rope-scaling
- Title: RoPE Scaling & YaRN
- Category: Language Models
- Language: en
- Key Concepts: base frequency, Ring Attention, Retrieval Accuracy, RoPE Scaling, What Is It, 3. YaRN (Yet another RoPE extensioN), Related Topics, RoPE Scaling and Long Context, PagedAttention, Compute, Practical Constraints, 1. Linear Interpolation, Comparison of Methods, [[attention-mechanisms|Attention]] Logit Decay, Techniques
- References: attention-mechanisms, flash-attention, inference-serving, mla, positional-encodings, transformer-architecture

## Entity: slm
- Title: Small Language Models (SLMs)
- Category: Language Models
- Language: en
- Key Concepts: Key Properties & Capabilities, Mathematical Framework, Small Language Models (SLMs), [[quantization]]-aware training, Smaller knowledge base, Prerequisites, What Is It, Curriculum training, Related Topics, Prompt sensitivity, Grouped Query [[attention-mechanisms|Attention]] (GQA), Knowledge breadth, Tied embeddings, Distillation from a strong teacher, Visualization
- References: attention-mechanisms, embedding-models, finance/shannon-entropy, fine-tuning, inference-serving, llm, mechanistic-interpretability, mixture-of-experts, neural-scaling-laws, quantization, rag, transformer-architecture
- Backlinks: bitnet, code-models, llm, mcp, mixture-of-experts, synthetic-data-alignment

## Entity: language-models/mamba-ssm
- Title: State Space Models (Mamba)
- Category: Language Models
- Language: en
- Key Concepts: State Space Models and Mamba Architecture, Limitations, Scalable Context:, Why Mamba Matters, The SSM Framework, The Mamba Innovation: Selection Mechanism, Related Topics, Selection, Selectively, State Space Models (SSM), Hardware-Aware Design:, The [[transformer-architecture|Transformer]] Bottleneck, Mamba, linear-time complexity, Inference Speed:
- References: attention-mechanisms, flash-attention, inference-serving, linear-algebra, time-series, transformer-architecture

## Entity: synthetic-data-alignment
- Title: Synthetic Data & Self-Alignment
- Category: Language Models
- Language: en
- Key Concepts: 1. Self-Instruct, 3. ReST (Reinforced Self-Training), 2. Constitutional AI (Self-Correction), Filtering, Self-Instruct, Alpaca, Model Collapse, Related Topics, Supervised Phase, RLAIF, Constitutional AI, Synthetic Data & Self-Alignment, Fine-tune, Seed Tasks, ReST
- References: fine-tuning, preference-optimization-variants, rlhf, slm

## Entity: test-time-scaling
- Title: Test-Time Scaling
- Category: Language Models
- Language: en
- Key Concepts: Best-of-N (Rejection Sampling), Efficiency, Test-Time Scaling (Inference-Time Compute), Beam Search, Flexibility, Complexity, 3. Verification-Guided Search, Benefits, Cost, Trade-offs, What Is It, Related Topics, [[prm|Process Reward Models (PRM)]], Error Correction, How It Works
- References: chain-of-thought, llm, neural-scaling-laws, prm, reasoning-models

## Entity: training-dynamics
- Title: Training Dynamics
- Category: Language Models
- Language: en
- Key Concepts: See Also, Sharp vs. flat minima, Early training, barriers, Activation statistics, Capability emergence, Gradient Norm Evolution, Representation geometry shifts, continual training, proxy model hyperparameter search, memorises, Induction head formation, Loss Landscape Geometry, Gradient norm per layer, generalises
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, finance/shannon-entropy, fine-tuning, neural-scaling-laws, transformer-architecture
- Backlinks: curriculum-learning, morse-theory, multi-token-prediction, weight-averaging

## Entity: vlm
- Title: Vision-Language Models (VLMs)
- Category: Language Models
- Language: en
- Key Concepts: Key Properties & Capabilities, Mathematical Framework, Linear projector, Multi-image and video, Hallucination, Cross-[[attention-mechanisms|attention]] layers, Document and chart understanding, Generative objective, Vision-Language Models (VLMs), Prerequisites, High-resolution details, Cross-modal connector, Contrastive VLMs, What Is It, Visual encoder (ViT)
- References: attention-mechanisms, embedding-models, llm, pac-learning, transformer-architecture
- Backlinks: embedding-models, matryoshka-embeddings, vision-transformers

## Entity: math/large-deviations-cramer
- Title: Large Deviations and Cramer's Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: Upper and lower bounds, 2. Gaussian., large, Lower bound., Kullback-Leibler divergence, Sanov's theorem (1957)., Cramer rate function, 1. Binomial., Applications, Related Articles, Chernoff bound, Sanov's theorem, Cramer's theorem, 6. Algorithms., exponentially
- References: central-limit-theorem, characteristic-functions, convex-optimization, cornish-fisher-cvar, finance/shannon-entropy, law-iterated-logarithm, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/lundberg-cramer-ruin
- Backlinks: extreme-value-theory, math/branching-processes, math/concentration-inequalities, math/contiguity-measures, math/coupling-methods, math/doleans-dade-exponential, math/geometric-ergodicity, math/interacting-particle-systems, math/local-limit-theorems, math/lundberg-cramer-ruin, math/percolation, math/poisson-approximation, math/random-graphs, math/random-walks, math/renewal-theory, math/wiener-hopf-factorization, mgf, wentzell-freidlin

## Entity: math/lundberg-cramer-ruin
- Title: Lundberg-Cramer Ruin Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: 4. Queueing theory., Probability of ruin:, Non-Poisson claim arrivals., Stochastic premiums., Investment models., Historical context, The Cramer-Lundberg model, 3. Heavy tails., Filip Lundberg (1876-1965), 5. Reliability theory., Cramer rate function, Lundberg-Cramer theorem, Heavy-tailed distributions., Martingale proof, Applications
- References: extreme-value-theory, finance/stable-distributions, finance/value-at-risk, math/discrete-martingales, math/large-deviations-cramer
- Backlinks: math/large-deviations-cramer, math/poisson-approximation, math/renewal-theory, math/wiener-hopf-factorization

## Entity: math/central-limit-theorem
- Title: Central Limit Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: CLT for martingale differences, Independence, generalized Lévy CLT, Ergodic CLT, Theorem (classical CLT)., history of mathematics, Berry-Esseen: a quantitative CLT, their large sums look the same, Finite variance, the normal distribution is everywhere, in distribution, Multivariate CLT., Related Articles, Lindeberg-Feller theorem., CLT for geometrically α-mixing processes
- References: arch-models, brownian-motion, characteristic-functions, finance/crr-model, finance/stable-distributions, finance/stylized-facts-returns, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/weak-convergence-prokhorov

## Entity: math/functional-limit-theorems
- Title: Functional Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: Convergence of Discrete to Continuous Semimartingales, Theorem (Aldous-Rebolledo)., Convergence via Predictable Characteristics, functional, Donsker's Invariance Principle, Diffusion approximations., Theorem., Applications, Related Articles, Functional Limit Theorems, Convergence of Compound Poisson to Levy, Theorem (Rebolledo, 1980)., process, Queueing theory., Tightness Criteria
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, martingale-clt, math/convergence-semimartingales, math/skorokhod-topology, math/triangular-arrays-processes, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-problem, math/predictable-compensator, math/random-walks, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/infinitely-divisible-distributions
- Title: Infinitely Divisible Distributions
- Category: Limit Theorems
- Language: en
- Key Concepts: Levy measure, Theorem (Levy-Khintchine)., infinitely divisible, Theorem., Connection to Processes with Independent Increments, Infinitely Divisible Distributions, Related Articles, The Levy Measure, Relation to Stable Distributions, Kolmogorov's Formula and De Finetti's Theorem, The Levy-Khintchine Representation, Role in Jacod-Shiryaev's Limit Theory, Key Examples, canonical triplet, Kolmogorov's formula.
- References: central-limit-theorem, characteristic-functions, finance/levy-processes, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, levy-ito-decomposition, math/subordinators, math/triangular-arrays-processes

## Entity: math/law-of-large-numbers
- Title: Law of Large Numbers
- Category: Limit Theorems
- Language: en
- Key Concepts: What the LLN does not say, convergence, Proof of the strong LLN (idea), Strong law of large numbers, exact rate, rates, set of trajectories of probability 1, rigorous proof, Weak law of large numbers, substantially stronger, does not say, Related Articles, the average return of a diversified portfolio, Theorem (strong LLN, Kolmogorov 1933)., Connection to finance
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/markowitz-mean-variance, law-iterated-logarithm, math/borel-cantelli-zero-one, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms
- Backlinks: convergence-types, de-finetti-exchangeability, finance/coherent-risk-measures, finance/cointegration, finance/quasi-monte-carlo, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-clt, math/poisson-approximation, math/renewal-theory, math/stochastic-recursive-sequences, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, monte-carlo-integration, slutsky-theorem

## Entity: math/local-limit-theorems
- Title: Local Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: Cramer's condition., Proof sketch., The de Moivre-Laplace theorem, Theorem (de Moivre-Laplace, local form)., Rates of convergence, Number theory., Local theorems for large deviations, Applications, Related Articles, lattice distribution, Theorem (Gnedenko, 1948)., Stone's general local theorem, Gnedenko's local theorem for lattice distributions, densities, Theorem (non-lattice local CLT).
- References: central-limit-theorem, characteristic-functions, finance/stable-distributions, math/functional-limit-theorems, math/large-deviations-cramer, math/law-of-large-numbers, math/spectral-theory-operators, math/weak-convergence-prokhorov
- Backlinks: math/central-limit-theorem, math/stein-method

## Entity: math/poisson-approximation
- Title: Poisson Approximation
- Category: Limit Theorems
- Language: en
- Key Concepts: Relation to the Central Limit Theorem, Historical note, Proof sketch (direct calculation)., Beyond the basics, Hashing and computer science., Theorem (Le Cam)., Random permutations., Coupon collector., Theorem., Applications, Related Articles, Poisson process approximation., local dependence structure, Proof sketch of Chen-Stein, rare events
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory
- Backlinks: math/central-limit-theorem, math/random-graphs, math/stein-method

## Entity: math/stable-convergence
- Title: Stable Convergence
- Category: Limit Theorems
- Language: en
- Key Concepts: Role in Jacod-Shiryaev's Framework, Theorem (Stable CLT)., Comparison., Proposition., Related Articles, Tightness, joint convergence, Definition., stably, Identification:, Realized volatility CLT., Stable Convergence, Why Stable Convergence Matters, mixing convergence, Applications in High-Frequency Statistics
- References: characteristic-functions, heston-model, martingale-clt, math/convergence-semimartingales, math/discrete-martingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/local-asymptotic-normality

## Entity: math/weak-convergence-prokhorov
- Title: Weak Convergence and Prokhorov's Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: Theorem (Skorokhod)., Prokhorov's compactness theorem, Prokhorov's theorem (1956)., tight, 3. Convergence of the binomial model to Black-Scholes:, excludes, Skorokhod's representation theorem, Weak Convergence and Prokhorov's Theorem, weak convergence of distributions, 1. Central limit theorem:, Applications, Why tightness, if $\sup_n \mathbb{E}[|X_n|^p] < \infty$ for some $p > 0$, Related Articles, fail
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/asymptotic-arbitrage-large-markets, finance/crr-model, math/kolmogorov-probability-axioms, math/law-of-large-numbers
- Backlinks: empirical-processes, math/central-limit-theorem, math/contiguity-measures, math/convergence-semimartingales, math/coupling-methods, math/functional-limit-theorems, math/glivenko-cantelli, math/hellinger-processes, math/infinitely-divisible-distributions, math/local-limit-theorems, math/skorokhod-topology, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/wiener-hopf-factorization

## Entity: determinant-properties
- Title: Determinant Properties
- Category: Linear Algebra
- Language: en
- Key Concepts: Multiplicativity:, Overview, Key Properties, Volume:, Transpose:, Inverse:

## Entity: matrix-exponential
- Title: Matrix Exponential
- Category: Linear Algebra
- Language: en
- Key Concepts: Definition, Overview

## Entity: matrix-norms
- Title: Matrix Norms
- Category: Linear Algebra
- Language: en
- Key Concepts: Frobenius Norm, Overview, Induced Norms

## Entity: trace-identities
- Title: Trace Identities
- Category: Linear Algebra
- Language: en
- Key Concepts: Identities, Cyclic Property:, Trace of Derivative:, Overview, Eigenvalue Sum:, Linearity:

## Entity: vector-norms
- Title: Vector Norms
- Category: Linear Algebra
- Language: en
- Key Concepts: L-p Norms, $L_2$ Norm:, Overview, $L_\infty$ Norm:, $L_1$ Norm:

## Entity: spread
- Title: Bid-Ask Spread
- Category: Market Microstructure
- Language: en
- Key Concepts: Effective Spread, Crypto, Determinants of Spread, Market Cap, Bid-Ask Spread, Related Topics, Components of the Spread, Spread in Different Markets, Order Processing Costs, ask, bid, Forex, Absolute Spread, Overview, Adverse Selection Costs
- References: avellaneda-stoikov, finance/kyle-lambda, glosten-milgrom, market-impact, market-microstructure
- Backlinks: market-microstructure

## Entity: market-microstructure
- Title: Market Microstructure
- Category: Market Microstructure
- Language: en
- Key Concepts: Market Impact, Kyle's Lambda, adverse selection risk, Limit Order, Reinforcement Learning, Depth, Limit Order Book, Key Concepts, square-root law, Noise Traders (Liquidity Traders), Order Flow Imbalance (OFI), Kyle's Model (1985), Temporary Impact, Bid-Ask Spread, Market Order
- References: ai-market-making, avellaneda-stoikov, deep-lob, finance/hawkes-process, finance/kyle-lambda, finance/order-flow-imbalance, finance/pin-easley-ohara, generative-scenario-models, market-impact, optimal-execution, spread
- Backlinks: smart-order-routing, spread

## Entity: math/martingale-clt
- Title: Central Limit Theorem for Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: 4. Prediction errors., Important variants, Comparison with CLT for stationary processes, strict generalization, Brown's theorem (1971)., Limitations and subtleties, martingale differences, 1. Asymptotic normality of maximum-likelihood estimators., Functional martingale CLT (invariance principle)., 5. Martingale transforms., Related Articles, Normalization condition, Quadratic variation (Doob):, Examples of martingale differences, independence
- References: arch-models, brownian-motion, central-limit-theorem, convex-optimization, garch-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/law-of-large-numbers

## Entity: math/discrete-martingales
- Title: Discrete Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: Doob decomposition, 2. Conditional expectation., discrete analogue of the [[girsanov-semimartingales|Girsanov density]], Theorem (Doob decomposition)., Martingale property, Existence of limit distributions, Martingale convergence theorems, Optional stopping, American option pricing, Doob's $L^p$ inequality., $L^p$ convergence theorem., $L^1$-bounded submartingales converge almost surely, 1. Financial mathematics., Applications, Related Articles
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/optimal-stopping-american, law-iterated-logarithm, math/conditional-expectation-sigma, math/discrete-markov-chains, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/branching-processes, math/conditional-expectation-sigma, math/discrete-markov-chains, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/lundberg-cramer-ruin, math/martingale-clt, math/martingale-representation, math/optimal-stopping-markov, math/predictable-compensator, math/random-walks, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/stable-convergence, math/wiener-hopf-factorization, stochastic-processes

## Entity: math/doleans-dade-exponential
- Title: Doleans-Dade Stochastic Exponential
- Category: Martingale Theory
- Language: en
- Key Concepts: Definition and the Equation, Proof sketch., bridge, Explicit Formula, Continuous semimartingale., Novikov's condition., Brownian motion with drift., Theorem., Yor's Formula, Applications, Consequence., Exponential martingales., Related Articles, Connection to Girsanov's Theorem, Definition.
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, math/discrete-martingales, math/large-deviations-cramer, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, levy-ito-decomposition, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-stochastic-integrals, math/density-processes, math/hellinger-processes, math/martingale-problem, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering, risk-neutral-valuation

## Entity: math/doob-meyer-decomposition
- Title: Doob-Meyer Decomposition
- Category: Martingale Theory
- Language: en
- Key Concepts: Theorem (Doob)., Uniqueness, quadratic variation, Theorem (Lenglart)., dual predictable projection, The Compensator, Related Articles, class (D), optional decomposition, special semimartingale, Lenglart's inequality, Lenglart's Domination Property, Connection to Semimartingale Theory, Doob-Meyer Decomposition, Definition.
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability
- Backlinks: local-time-tanaka, math/density-processes, math/martingale-representation, math/predictable-compensator, math/quadratic-variation

## Entity: math/martingale-representation
- Title: Martingale Representation Theorem
- Category: Martingale Theory
- Language: en
- Key Concepts: Backward SDEs., Failure Beyond Brownian Filtrations, innovation representation, integrand representation, Hedging and replication., Clark-Ocone formula, Martingale Representation Theorem, market incompleteness, Applications, Related Articles, Wiener functionals., Proof Strategy, [[innovation-process|innovation process]], The Clark-Ocone Formula, every square-integrable martingale adapted to the Brownian filtration is a stochastic integral with respect to the Brownian motion
- References: black-scholes, brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, hidden-markov-models, innovation-process, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, nonlinear-filtering, stochastic-differential-equations
- Backlinks: clark-ocone, feynman-kac, math/absolute-continuity-process-measures, math/backward-sde, stochastic-processes

## Entity: math/optimal-stopping-markov
- Title: Optimal Stopping of Markov Chains
- Category: Martingale Theory
- Language: en
- Key Concepts: main practical motivation, Structure of the problem, Connection to martingales, 1. Finance., Penalty method and variational inequality, Observation 1., Observation 2., superharmonic, Stopping region:, Bellman equation, Infinite horizon, 3. Economics., variational inequality, Theorem., Applications
- References: finance/black-scholes-derivations, finance/crr-model, finance/optimal-stopping-american, math/discrete-markov-chains, math/discrete-martingales, reinforcement-learning
- Backlinks: local-time-tanaka

## Entity: axiomatic-probability
- Title: Axiomatic Probability
- Category: Math Foundations
- Language: en
- Key Concepts: Probability Measure ($P$), Inclusion-Exclusion, Andrey Kolmogorov, Related Topics, Sample Space ($\Omega$), $\sigma$-algebra ($\mathcal{F}$), Bertrand's Paradox, Complement Rule, Normalization, 3. Derived Properties, Axiomatic Probability: The Kolmogorov Foundation, 1.1 The $\sigma$-algebra $\mathcal{F}$, Borel $\sigma$-algebra, 1. The Probability Space $(\Omega, \mathcal{F}, P)$, Monotonicity
- References: conditional-probability, measure-theory

## Entity: bayesian-linear-regression
- Title: Bayesian Linear Regression
- Category: Math Foundations
- Language: en
- Key Concepts: prior, likelihood, The Model, conjugate, The Posterior Distribution, Predictive Distribution, Bayesian Linear Regression

## Entity: boolean-algebra
- Title: Boolean Algebra & Circuit Logic
- Category: Math Foundations
- Language: en
- Key Concepts: AND, Karnaugh map (K-map), Karnaugh Maps, false, Logic Gates, NOT, true, Complexity Basics
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
- Key Concepts: Optics, What Is It, Backward:, The Para Construction, chain rule, Lens, Para, Lenses and [[automatic-differentiation|Backpropagation]], Categorical Cybernetics, Related Topics, optics, Open Games, Forward:, Learning as a Morphism, lenses
- References: automatic-differentiation, manifold-learning, topos-theory, type-theory

## Entity: conditional-probability
- Title: Conditional Probability and Total Probability
- Category: Math Foundations
- Language: en
- Key Concepts: conditional probability of $A$ given $B$, Proof, Likelihood, 2. The Multiplication Rule, Chain Rule, Conditional Probability and the Law of Total Probability, 1. Definition of Conditional Probability, Prior, 1.1 Intuition: Shrinking the Sample Space, 3.2 The Theorem, Related Topics, 3. Law of Total Probability (LTP), 4. Bayes' Theorem, 3.1 Definition of a Partition, Bayes' Theorem
- References: bayes-theorem, markov-chains
- Backlinks: axiomatic-probability

## Entity: continuous-random-variables
- Title: Continuous Random Variables
- Category: Math Foundations
- Language: en
- Key Concepts: PDF, Uniform($a, b$), Exponential($\lambda$), Continuous Random Variables, 1.1 Properties of the PDF, 4. Transformation of Variables, Cauchy($x_0, \gamma$), Continuous Random Variable, 1. Probability Density Function (PDF), Intuition, Related Topics, Normal($\mu, \sigma^2$), 2. Cumulative Distribution Function (CDF), CDF, 3. Expected Value and Variance
- References: discrete-random-variables, joint-distributions, measure-theory
- Backlinks: discrete-random-variables

## Entity: coordinate-systems
- Title: Coordinate Systems & Transforms
- Category: Math Foundations
- Language: en
- Key Concepts: Jacobian determinant, The Jacobian Determinant, spherical coordinates, Polar and Spherical Coordinates, polar coordinates
- References: implicit-function-theorem
- Backlinks: implicit-function-theorem, integration-techniques

## Entity: covariance-correlation
- Title: Covariance, Correlation, and Independence
- Category: Math Foundations
- Language: en
- Key Concepts: Zero Correlation $\not\implies$ Independence, Spearman ($\rho_s$), 1. Covariance, 2.1 Properties, Units, linear, Pearson, Related Topics, 4. Independence vs. Zero Correlation, Covariance, Negative Covariance, 5. Independence, Positive Covariance, 3. Pearson vs. Spearman Correlation, ranks
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
- Key Concepts: Binomial($n, p$), 6. Common Discrete Distributions, 3. Cumulative Distribution Function (CDF), Discrete Random Variables, Geometric($p$), 5. Variance and Standard Deviation, Linearity of Expectation, Related Topics, CDF, discrete, Bernoulli($p$), step function, Law of the Unconscious Statistician (LOTUS), 2.1 Properties of the PMF, Discrete Random Variable
- References: continuous-random-variables, lln-clt
- Backlinks: continuous-random-variables

## Entity: eigendecomposition-vs-svd
- Title: Eigenvalue Decomposition vs. SVD
- Category: Math Foundations
- Language: en
- Key Concepts: Orthogonality:, Eigenvalue Decomposition vs. SVD, Eigenvalue Decomposition (EVD), left singular vectors, right singular vectors, Singular Value Decomposition (SVD), Technical Comparison, Spectral Theorem:, Domain and Codomain:, Applicability:, singular values
- References: math/spectral-theory-operators, pca-math
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: exponential-families
- Title: Exponential Families
- Category: Math Foundations
- Language: en
- Key Concepts: Canonical Form, Examples, Role in Machine Learning, Mean:, natural (or canonical) parameter, log-partition function, Variance:, Exponential Families, Properties of the Log-Partition Function, sufficient statistic
- Backlinks: course-math-for-ai, distributions-zoo, fisher-information, math/bayesian-asymptotics, math/cramer-rao-bound, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, maximum-entropy

## Entity: fundamental-inequalities
- Title: Fundamental Inequalities: Markov & Chebyshev
- Category: Math Foundations
- Language: en
- Key Concepts: Proof, Sharpness, 2. Chebyshev's Inequality, Chernoff Bounds, Related Topics, Fundamental Inequalities: Markov & Chebyshev, 3. Tightness and Bounds, 1. Markov's Inequality
- References: jensen-inequality, lln-clt, math/concentration-inequalities

## Entity: conic-sections
- Title: Geometry: Conic Sections & Quadratic Forms
- Category: Math Foundations
- Language: en
- Key Concepts: Diagonalization, quadratic forms, Matrix Representation
- References: change-of-basis, math/spectral-theory-operators

## Entity: graph-theory-basics
- Title: Graph Theory Basics
- Category: Math Foundations
- Language: en
- Key Concepts: Tree:, Paths and Trees, Adjacency Matrices, adjacency matrix, Path:
- References: bayesian-networks, sparse-matrices
- Backlinks: sparse-matrices

## Entity: group-theory-basics
- Title: Group Theory Basics
- Category: Math Foundations
- Language: en
- Key Concepts: Field:, Associativity:, Ring:, Identity:, group, Closure:, Rings and Fields, Groups, Inverse:
- References: formal-proof-techniques

## Entity: homotopy-type-theory
- Title: Homotopy Type Theory (HoTT)
- Category: Math Foundations
- Language: en
- Key Concepts: Structural Learning:, Program Synthesis:, The Circle ($S^1$):, MATHEMATICAL CONCEPT: Path Induction, path induction, $h=0$ (Sets):, What Is It, Related Topics, $\infty$-groupoid, Quotients:, Intensional Type Theory, Relevance to AI and Program Synthesis, The Univalence Axiom, Homotopy Type Theory (HoTT), $h=1$ (Groupoids):
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
- Key Concepts: Frobenius Norm, inner product space, $L_\infty$ Norm (Chebyshev norm):, $L_2$ Norm (Euclidean norm):, $L_p$ Norms, Inner Product Spaces & Norms, Dual Norms, $L_1$ Norm (Manhattan distance):
- References: eigendecomposition-vs-svd, kkt-conditions, pca-math

## Entity: jensen-inequality
- Title: Jensen's Inequality
- Category: Math Foundations
- Language: en
- Key Concepts: [[expectation-maximization|EM algorithm]], A. Information Theory, Related Topics, 3. Applications, Evidence Lower Bound (ELBO), 1. Formal Statement, 2. Geometric Proof, Jensen's Inequality, B. Machine Learning: ELBO and EM-Algorithm
- References: convexity, expectation-maximization, finance/shannon-entropy, information-theory-basics
- Backlinks: fundamental-inequalities

## Entity: joint-distributions
- Title: Joint, Marginal, and Conditional Distributions
- Category: Math Foundations
- Language: en
- Key Concepts: 1.1 Discrete Case: Joint PMF, 3.1 Conditional Expectation, Discrete, Law of Iterated Expectations, Jacobians, 2. Marginal Distributions, 1. Joint Distributions, 4. Independence, Continuous, Double Integrals, 1.2 Continuous Case: Joint PDF, 3. Conditional Distributions, 5. Multivariate Calculus Foundation, Related Topics, Joint, Marginal, and Conditional Distributions
- References: copulas, covariance-correlation, multivariate-normal
- Backlinks: continuous-random-variables, covariance-correlation

## Entity: kkt-conditions
- Title: Lagrange Multipliers & KKT Conditions
- Category: Math Foundations
- Language: en
- Key Concepts: KKT Conditions (Inequality Constraints), Dual Feasibility:, Primal Feasibility:, Lagrange Multipliers & KKT Conditions, Complementary Slackness:, Lagrange Multipliers (Equality Constraints), Stationarity:, Karush-Kuhn-Tucker (KKT)
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: large-deviations
- Title: Large Deviations: Hoeffding & Bernstein Inequalities
- Category: Math Foundations
- Language: en
- Key Concepts: Chebyshev's:, Bernstein's Inequality, Key takeaway:, Hoeffding's Inequality, Markov's:, Large Deviations: Hoeffding & Bernstein, Markov's and Chebyshev's Inequalities, exponentially

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
- Key Concepts: Fundamental Subspaces, Kernel (Null Space, $\ker A$):, The Rank-Nullity Theorem, Rank-Nullity Theorem, Image (Column Space, $\text{im} A$):
- References: change-of-basis
- Backlinks: change-of-basis

## Entity: sparse-matrices
- Title: Linear Algebra: Sparse Matrices
- Category: Math Foundations
- Language: en
- Key Concepts: Mathematical Properties, CSR (Compressed Sparse Row):, sparse, CSC (Compressed Sparse Column):, Storage Formats
- References: graph-theory-basics, numerical-stability
- Backlinks: graph-theory-basics, numerical-stability

## Entity: formal-proof-techniques
- Title: Logic: Formal Proof Techniques
- Category: Math Foundations
- Language: en
- Key Concepts: Mathematical Induction, Proof by Contradiction, Direct Proof, Base Case:, Inductive Step:
- References: lln-proofs
- Backlinks: group-theory-basics, lln-proofs, recursion-recurrence

## Entity: markov-chains
- Title: Markov Chains
- Category: Math Foundations
- Language: en
- Key Concepts: Ergodic Theorem:, Transition Matrix, stationary distribution, stochastic matrix, Aperiodic:, Markov property, Irreducibility and Aperiodicity, Markov Chains, The Markov Property, Irreducible:, Stationary Distributions
- Backlinks: conditional-probability, stochastic-processes

## Entity: matrix-calculus
- Title: Matrix Calculus
- Category: Math Foundations
- Language: en
- Key Concepts: Layout Conventions, Gradients Involving Determinants, Gradients of Quadratic Forms, denominator layout, Matrix Calculus, Gradients Involving Traces
- References: em-algorithm, gmm, multivariate-normal-distribution
- Backlinks: tensors-and-contractions

## Entity: multivariable-taylor-series
- Title: Multivariable Taylor Series
- Category: Math Foundations
- Language: en
- Key Concepts: Gradient, Saddle Point:, Multivariable Taylor Series, Newton's Method, Local Minimum:, Hessian, The Taylor Expansion, Local Maximum:, Hessian Properties and Optimization
- References: math/spectral-theory-operators, positive-definite-matrices

## Entity: multivariate-normal-distribution
- Title: Multivariate Normal Distribution
- Category: Math Foundations
- Language: en
- Key Concepts: Conditional Distribution:, Marginals and Conditionals, Mahalanobis Distance, Density Function, Marginal Distribution:, Multivariate Normal Distribution
- References: kalman-filter, positive-definite-matrices
- Backlinks: matrix-calculus, positive-definite-matrices

## Entity: mutual-information-divergence
- Title: Mutual Information & Divergence
- Category: Math Foundations
- Language: en
- Key Concepts: Mutual Information, Mutual Information & Divergence, Data Processing Inequality, Kullback-Leibler (KL) Divergence, Gibbs' Inequality:, Asymmetry:, Interpretation:
- References: em-algorithm, finance/shannon-entropy

## Entity: numerical-integration
- Title: Numerical Integration
- Category: Math Foundations
- Language: en
- Key Concepts: Gaussian Quadrature, Monte Carlo Integration, Curse of Dimensionality, Importance Sampling, Numerical Integration

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
- Key Concepts: Convex Sets, convex, strictly convex, Convex Functions
- References: implicit-function-theorem
- Backlinks: implicit-function-theorem

## Entity: positive-definite-matrices
- Title: Positive Definite Matrices
- Category: Math Foundations
- Language: en
- Key Concepts: Principal Minors:, Positive Definite Matrices, Optimization:, positive semi-definite (PSD), Kernels:, [[spectral-theory-operators|Eigenvalues]]:, Role in Kernels and Optimization, Invertibility:, positive definite (PD), Trace and Determinant:, Cholesky Decomposition, Properties
- References: math/spectral-theory-operators, multivariate-normal-distribution
- Backlinks: multivariable-taylor-series, multivariate-normal-distribution

## Entity: pca-math
- Title: Principal Component Analysis (PCA) Math
- Category: Math Foundations
- Language: en
- Key Concepts: Principal Component Analysis (PCA), Maximum Variance Formulation, Minimum Error Formulation, Connection to SVD
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
- Key Concepts: random walk, 1D and 2D Simple Walks, recurrent, transient, Recurrence vs Transience
- References: lln-proofs
- Backlinks: lln-proofs, stochastic-processes

## Entity: p-values-effect-size
- Title: Statistics: P-values & Effect Size
- Category: Math Foundations
- Language: en
- Key Concepts: p-value, P-values, Effect size, Effect Size, Cohen's d, p-hacking, P-Hacking
- References: statistical-paradoxes
- Backlinks: statistical-paradoxes

## Entity: statistical-paradoxes
- Title: Statistics: Paradoxes
- Category: Math Foundations
- Language: en
- Key Concepts: Monty Hall Problem, Berkson's Paradox, Simpson's Paradox
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
- Key Concepts: Tensor Notation, Einstein Summation Convention, Inner Product:, Examples:, Matrix Multiplication:, Matrix-Vector Product:, Trace:, Tensors and Contractions, Tensor Contraction
- References: attention-mechanisms, automatic-differentiation, matrix-calculus

## Entity: em-algorithm
- Title: The EM Algorithm
- Category: Math Foundations
- Language: en
- Key Concepts: The Expectation-Maximization (EM) Algorithm, The EM Steps, latent variables, Problem Setup, E-step (Expectation):, Evidence Lower Bound (ELBO), M-step (Maximization):
- References: gmm, hmm
- Backlinks: matrix-calculus, mutual-information-divergence

## Entity: universal-approximation-theory
- Title: Universal Approximation Theory
- Category: Math Foundations
- Language: en
- Key Concepts: Approximation by Transformers, Barron's Theorem, Classical Formulation, Extension to Deep Networks, Universal Approximation Theory
- References: attention-mechanisms, transformer-architecture

## Entity: information-theory-basics
- Title: Information Theory Basics
- Category: Math Fundamentals
- Language: en
- Key Concepts: 3. Cross-Entropy: The ML Loss Function, Binary Cross-Entropy (BCE), Cross-Entropy ($H(p, q)$), 1. [[shannon-entropy|Entropy]]: The Measure of Uncertainty, 5. Summary of Terms, Information Theory Basics: Measuring Surprise, Intuition, Related Topics, not symmetric, Kullback-Leibler (KL) Divergence, [[shannon-entropy|Entropy]] ($H$), 2. KL Divergence: Comparing Distributions, Entropy, Mutual Information ($I(X; Y)$), Cross-Entropy
- References: finance/shannon-entropy, maximum-entropy, probability-distributions, variational-autoencoders
- Backlinks: jensen-inequality, probability-distributions

## Entity: linear-regression-ols
- Title: Linear Regression & OLS
- Category: Math Fundamentals
- Language: en
- Key Concepts: Residual Sum of Squares (RSS), R-squared ($R^2$), 5. Beyond OLS: Regularization, 1. The Model Equation, orthogonal projection, Homoscedasticity, Exogeneity, Related Topics, Ridge Regression, Mean Squared Error (MSE), The Normal Equation, 4. Evaluation Metrics, Ordinary Least Squares (OLS), Lasso Regression, 3. Assumptions of OLS (Gauss-Markov)
- References: matrix-decompositions, statistical-inference, vector-spaces-orthogonality
- Backlinks: covariance-correlation, estimator-properties, map-estimation, matrix-decompositions, vector-spaces-orthogonality

## Entity: matrix-decompositions
- Title: Matrix Decompositions: SVD, LU, and QR
- Category: Math Fundamentals
- Language: en
- Key Concepts: Upper, Efficiency, Orthogonal, Matrix Decompositions: The Structural Integrity of Data, Latent Semantic Analysis (LSA), Applications, Related Topics, Lower, 1. LU Decomposition: Solving Linear Systems, Model Compression, Least Squares, SVD, 3. Singular Value Decomposition (SVD): The Master Key, 2. QR Decomposition: Stability and Orthogonality, Applications in AI
- References: eigenvalues-eigenvectors, linear-regression-ols, math/spectral-theory-operators, pca
- Backlinks: linear-regression-ols, vector-spaces-orthogonality

## Entity: optimization-basics
- Title: Optimization 101: Gradient Descent & Newton's Method
- Category: Math Fundamentals
- Language: en
- Key Concepts: The Update Rule, 2. Newton's Method: The Second-Order Specialist, Stochastic [[convex-optimization|Gradient Descent]] (SGD), Positive Definite, Learning Rate, Computation, 4. Key Challenges, Related Topics, Loss Function, Why avoid it?, Hessian, Variations in ML, Optimization 101: Training the Machines, Adam, Why use it?
- References: chain-rule-autodiff, convex-optimization, gradient-hessian-jacobian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, sequences-series-convergence

## Entity: probability-distributions
- Title: Probability Distributions Encyclopedia
- Category: Math Fundamentals
- Language: en
- Key Concepts: 3. Moments of a Distribution, Normal (Gaussian) Distribution, Fourth Moment (Kurtosis), Poisson Distribution, Bernoulli Distribution, Parameters, Second Moment (Variance), Probability Distributions Encyclopedia: The Shapes of Randomness, Beta Distribution, PDF, Related Topics, 1. Discrete Distributions, 2. Continuous Distributions, 4. Key Relationships, Multinomial
- References: bayes-theorem, finance/shannon-entropy, information-theory-basics, lln-clt
- Backlinks: information-theory-basics, mgf-characteristic-functions, order-statistics, statistical-inference

## Entity: sequences-series-convergence
- Title: Sequences, Series & Convergence
- Category: Math Fundamentals
- Language: en
- Key Concepts: Convergence in Probability, Linearization, Series, Why it matters in AI, 1. Sequences and Limits, 5. Convergence in Probability, partial sums, Sequence, Radius of Convergence, Hessian Intuition, converges, Geometric Series, Related Topics, Harmonic Series, Hessian
- References: lln-clt, optimization-basics, taylor-series

## Entity: logic-set-theory
- Title: Set Theory & Formal Logic
- Category: Math Fundamentals
- Language: en
- Key Concepts: Function ($f: A \to B$), Surjective (Onto), Disjunction ($\lor$), Constraint Satisfaction, Formal Verification, 3. Relations and Functions, Injective (One-to-One), Relation, 5. Why it Matters in AI, Boolean Algebra, Cartesian Product ($A \times B$), 2. Set Theory: The Universal Container, Conjunction ($\land$), Subset ($A \subseteq B$), Intersection ($A \cap B$)
- References: graph-theory

## Entity: statistical-inference
- Title: Statistical Inference & Hypothesis Testing
- Category: Math Fundamentals
- Language: en
- Key Concepts: Significance Level ($\alpha$), ANOVA, Interpretation, Null Hypothesis ($H_0$), Bayesian, Chi-Squared Test, p-value, Related Topics, 4. Common Tests, Statistical Inference: Drawing Conclusions from Data, The p-value, 3. Confidence Intervals (CI), Fail to Reject $H_0$, 5. Bayesian Inference vs. Frequentist, Frequentist
- References: bayes-theorem, probability-distributions
- Backlinks: bootstrap-jackknife, cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, linear-regression-ols, map-estimation, mle-estimation, rank-tests, sufficient-statistics

## Entity: chain-rule-autodiff
- Title: The Chain Rule & Auto-Diff Foundations
- Category: Math Fundamentals
- Language: en
- Key Concepts: Optimization, Reverse Mode (Backprop), Efficiency, Backward Pass, 2. Multivariable Chain Rule, Reverse Mode vs. Forward Mode, 4. The Computational Graph, 5. Why it Matters in AI, Forward Pass, Chain Rule, Loss Function, Related Topics, 1. The Single Variable Chain Rule, Forward Mode, The Chain Rule & Auto-Diff: The Engine of Deep Learning
- References: automatic-differentiation, gradient-hessian-jacobian, optimization-basics
- Backlinks: optimization-basics

## Entity: vector-spaces-orthogonality
- Title: Vector Spaces & Orthogonality
- Category: Math Fundamentals
- Language: en
- Key Concepts: Orthogonal, 5. Summary of Key Concepts, Vector Space, 4. The Gram-Schmidt Process, Related Topics, orthonormal, 2. Orthogonality: The Power of 90 Degrees, 3. Projection Matrices, independence, 1. Vector Spaces and Bases, AI Context, Vectors, Dimension, Orthonormal, Image (Column Space)
- References: eigenvalues-eigenvectors, linear-regression-ols, matrix-decompositions
- Backlinks: linear-regression-ols

## Entity: math/algebraic-topology
- Title: Algebraic Topology
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Euler characteristic, homotopy equivalent, contractible, The Fundamental Group, amalgamated free product, Algebraic Topology, covering space, Connection to Other Areas, van Kampen's Theorem, homology groups, cycles, boundaries, correspondence between coverings and groups, Applications: Topological Data Analysis and Persistent Homology, singular $n$-simplex
- References: category-theory, complex-analysis, functional-analysis, math/differential-geometry, math/non-euclidean-geometry, math/topology-basics
- Backlinks: homological-algebra, homotopy-type-theory, math/differential-geometry, morse-theory, topos-theory

## Entity: complex-analysis
- Title: Complex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Cauchy integral formula, conformal, Power Series and Analyticity, Essential singularity, Singularities and Laurent Series, Maximum Modulus Principle, The Residue Theorem, Connection to Harmonic Functions and Partial Differential Equations, Casorati–Weierstrass theorem, analytic continuation, The Cauchy Integral Theorem and Formula, Conformal Mappings, Laurent series, residue, holomorphic
- References: fourier-transform, functional-analysis, harmonic-analysis, math/differential-geometry, math/topology-basics
- Backlinks: math/algebraic-topology, math/differential-geometry, math/harmonic-analysis

## Entity: convex-analysis
- Title: Convex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Dual feasibility, Stationarity, Proximal operators and algorithms, Information geometry, LASSO and sparsification, Primal feasibility, Applications across domains, Portfolio optimization, Conjugate functions and duality, KKT conditions and optimality, Convex sets and functions, Variational methods in control, The subdifferential, Optimal transport, Complementary slackness
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, finance/markowitz-mean-variance, math/analysis-geometry/information-geometry, math/kolmogorov-probability-axioms, optimal-transport, stochastic-control
- Backlinks: math/high-dimensional-statistics, math/topology-basics

## Entity: math/differential-geometry
- Title: Differential Geometry
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Riemannian Metrics, Curvature and the Riemann Tensor, smooth [[manifold-learning|manifold]], tangent bundle, atlas, geodesically complete, tangent space, cotangent bundle, length, Christoffel symbols, Levi-Civita connection, connection, Applications and Extensions, Machine Learning, References and Further Study
- References: complex-analysis, convex-optimization, functional-analysis, manifold-learning, math/algebraic-topology, math/analysis-geometry/information-geometry, math/non-euclidean-geometry, math/topology-basics, math/variational-calculus
- Backlinks: asymptotic-spacetime, complex-analysis, course-math-for-ai, fluid-dynamics-navier-stokes, goldstone-modes, gravitational-waves-gr, group-theory, lie-groups, manifold, manifold-learning, many-body-tensor-networks, math/algebraic-topology, morse-theory, qft-curved-spacetime, semimartingales-on-manifolds, special-relativity, stochastic-manifolds, string-theory-calabi-yau

## Entity: math/harmonic-analysis
- Title: Harmonic Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Dirichlet kernel, weak $L^1$ bound, convergence, Concluding Remarks, Sobolev Spaces via Fourier, Information-Theoretic Connections, Spectral theory, Schrödinger equation, Applications: Heat Equation and Spectral Theory, Sobolev spaces, The Hardy-Littlewood Maximal Function, The $L^1 \cap L^2$ Theory: Plancherel's Theorem, The Uncertainty Principle, Heisenberg uncertainty principle, Schwartz space
- References: complex-analysis, finance/shannon-entropy, functional-analysis, math/information-theory, math/lp-spaces, math/spectral-theory-operators, partial-differential-equations, sobolev-spaces

## Entity: math/ode-stability
- Title: ODE Theory and Lyapunov Stability
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Stable subspace:, Theorem (LaSalle's Invariance Principle)., unstable, LaSalle's Invariance Principle, Pitchfork Bifurcation, Theorem (Lyapunov Stability Theorem)., Jordan Normal Form, Hopf Bifurcation, [[convex-optimization|Gradient Descent]] as Gradient Flow, Introduction, Neural ODEs, Theorem (Hartman-Grobman)., Theorem (Lyapunov Asymptotic Stability Theorem)., Definitions, Structure of Solutions
- References: convex-optimization, functional-analysis, manifold-learning, math/geometric-ergodicity, math/spectral-theory-operators, math/variational-calculus, neural-odes, stochastic-control, stochastic-differential-equations

## Entity: math/spectral-theory-operators
- Title: Spectral Theory of Operators
- Category: Mathematical Foundations
- Language: en
- Key Concepts: resolvent set, Singular Value Decomposition (SVD), Spectrum of Markov Operators, resolvent identity, Bounded Self-Adjoint Operators, Continuous spectrum, Stability of dynamical systems, Functional Calculus, spectral theorem, resolvent, Applications, Sturm–Liouville Theory, Spectral Theory of Operators, Classification of Spectrum, Fredholm Alternative
- References: functional-analysis, math/lp-spaces, math/markov-chain-mixing, math/spectral-representation-processes, partial-differential-equations, schrodinger-equation, sobolev-spaces, spectral-graph-theory
- Backlinks: algebraic-geometry-slt, algebraic-topology-persistent, ar-models, attention-linear-kernel, brownian-bridge, change-of-basis, conic-sections, eigendecomposition-vs-svd, eigenvalues-eigenvectors, finance/cointegration, finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, fluid-dynamics-navier-stokes, functional-analysis-c-star, geometry-loss-landscapes, geometry-of-attention, gnn-weisfeiler-lehman, gradient-hessian-jacobian, graph-curvature-oversquashing, graph-theory, hilbert-banach-spaces, information-geometry-nn, kernel-methods-rkhs, laplacian, linear-algebra, math/functional-analysis, math/harmonic-analysis, math/kolmogorov-equations-ctmc, math/local-limit-theorems, math/markov-chain-mixing, math/ode-stability, matrix-decompositions, mechanistic-interpretability-sae, morse-theory, multivariable-calculus, multivariable-taylor-series, neural-ode-stability, neural-operators-fno, nonlinear-shrinkage, normalization-layers-math, number-theory-l-functions, optimization-basics, pca, pinns-convergence, portfolio-optimization-ml, positive-definite-matrices, quantum-computing-vqe, quantum-information-entropy, quantum-mechanics, quantum-phase-estimation, random-matrices, random-matrix-theory-marchenko, random-walks-groups, renormalization-group, spectral-clustering, spectral-graph-theory, spectral-theorem-unbounded, spin-glasses-hopfield, state-space-models, weight-initialization-signal

## Entity: math/topology-basics
- Title: Topology and Metric Spaces
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Tychonoff's Theorem, Polish Spaces and Probability, Symmetry, Polish space, Topological Spaces, compact, Urysohn's Lemma, Introduction, Convergence and Continuity, Identity of indiscernibles, Connectedness, continuous, open, topology, Applications
- References: convex-analysis, functional-analysis, math/sigma-algebra-measurability, math/skorokhod-topology, math/weak-convergence-prokhorov, sobolev-spaces
- Backlinks: complex-analysis, manifold, math/algebraic-topology, math/differential-geometry, math/hausdorff-measure, topological-phases

## Entity: math/borel-cantelli-zero-one
- Title: Borel-Cantelli Lemmas and Zero-One Laws
- Category: Measure Theory
- Language: en
- Key Concepts: Hewitt-Savage zero-one law, zero-one laws, dichotomy, Theorem (Kolmogorov 0-1 law, 1933)., zero information, Lemma 2 (reverse Borel-Cantelli)., tail σ-algebra, The 0/1 dichotomy, Hewitt and Savage (1955), Lemma 1 (Borel-Cantelli)., symmetric, Connection to ergodic theory, Theorem., Application to the strong LLN, Related Articles
- References: brownian-motion, characteristic-functions, law-iterated-logarithm, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: math/branching-processes, math/glivenko-cantelli, math/law-of-large-numbers, math/lebesgue-integral, math/poisson-approximation

## Entity: math/cameron-martin-formula
- Title: Cameron-Martin Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: Large Deviations: Freidlin-Wentzell Theory, Cameron-Martin space, deterministic special case, Wiener measure zero, Cameron-Martin Theorem, Applications, Related Articles, Connection to Girsanov's Theorem, Infinite-dimensional analysis., Definition., not, Signal detection., Theorem (Cameron-Martin)., reproducing kernel Hilbert space, shifts Wiener measure by a deterministic function
- References: brownian-motion, finance/girsanov-semimartingales, math/absolute-continuity-process-measures, math/conditional-expectation-sigma, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/sigma-algebra-measurability
- Backlinks: math/absolute-continuity-process-measures, math/gaussian-process-sample-paths, math/sde-numerical-methods, math/sequential-hypothesis-testing, math/stratonovich-integral

## Entity: math/conditional-expectation-sigma
- Title: Conditional Expectation w.r.t. a σ-Algebra
- Category: Measure Theory
- Language: en
- Key Concepts: Independence, Connection to martingales, Contractivity, orthogonal projection, Martingale property, average, conditional distribution, Related Articles, Conditional Expectation w.r.t. a σ-Algebra, regular conditional probability, Motivation: conditioning on a null event, single most useful object, Definition., L² projection, globally
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, kalman-filter, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/cameron-martin-formula, math/cramer-rao-bound, math/discrete-martingales, math/doob-meyer-decomposition, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/predictable-compensator, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/differentiation-of-measures
- Title: Differentiation of Measures
- Category: Measure Theory
- Language: en
- Key Concepts: Vitali covering theorem, Radon–Nikodym theorem, Related topics:, Applications and Connections, The Besicovitch Covering Lemma, The Hardy–Littlewood Maximal Function, upper density, Several-variable theory, Core concepts:, Differentiation of Measures, Theorem:, Weak-type $(1,1)$ bound:, Stochastic calculus, Geometric measure theory, Calderón–Zygmund decomposition
- References: functional-analysis, math/absolute-continuity-process-measures, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure

## Entity: math/glivenko-cantelli
- Title: Glivenko-Cantelli Theorem and Empirical Processes
- Category: Measure Theory
- Language: en
- Key Concepts: empirical process, Kolmogorov distribution, VC dimension and uniform convergence, The DKW inequality, The empirical CDF, Theorem (Glivenko 1933, Cantelli 1933)., Dvoretzky-Kiefer-Wolfowitz (1956) inequality, non-asymptotic, Applications, Related Articles, Kolmogorov-Smirnov (KS) statistic, Nonparametric statistics., Empirical processes, Glivenko-Cantelli Theorem and Empirical Processes, distribution-free
- References: brownian-motion, central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/weak-convergence-prokhorov
- Backlinks: math/borel-cantelli-zero-one, math/kernel-density-estimation

## Entity: math/hausdorff-measure
- Title: Hausdorff Measure and Fractal Dimension
- Category: Measure Theory
- Language: en
- Key Concepts: Interpretation via Iterated Function Systems, unique fixed compact, Sets of Exceptional Points, References and Further Reading, $s$-Dimensional Hausdorff Measure, Iterated Function System (IFS), Introduction, Besicovitch covering theorem, open set condition (OSC), Applications and Examples, Box-counting dimension, $\mathcal{H}^s$-measurable, countable disjoint cover, Hutchinson's theorem, Self-Similar Sets and Hutchinson's Theorem
- References: brownian-motion, math/differentiation-of-measures, math/lebesgue-integral, math/product-measures-fubini, math/sigma-algebra-measurability, math/topology-basics, radon-nikodym

## Entity: math/kolmogorov-probability-axioms
- Title: Kolmogorov's Probability Axioms
- Category: Measure Theory
- Language: en
- Key Concepts: Continuity from above and below:, The basic construction, separating formal structure from interpretation, crucial, Why a σ-algebra, invariant under interpretation, What follows, pairwise disjoint, continuous, The axioms, Axiom 2 (normalization)., Connection to mathematical modernism, Related Articles, sample space, probability measure
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/ftap-first-fundamental-theorem, math/conditional-expectation-sigma, math/godel-incompleteness, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: bayesian-deep-learning, causal-inference, convex-analysis, course-math-for-ai, gaussian-processes, math/borel-cantelli-zero-one, math/central-limit-theorem, math/conditional-expectation-sigma, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-equations-ctmc, math/large-deviations-cramer, math/law-of-large-numbers, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, math/weak-convergence-prokhorov, measure-theory, radon-nikodym, variational-autoencoders

## Entity: math/lp-spaces
- Title: L^p Spaces
- Category: Measure Theory
- Language: en
- Key Concepts: essential supremum, complete normed vector space, Banach space, weak $L^p$ space, Completeness and the Riesz–Fischer Theorem, Sobolev spaces, Hölder's Inequality, Sobolev Spaces and Generalizations, Riesz representation theorem, Riesz–Fischer Theorem, Definition and Norm, Cauchy–Schwarz inequality, Hilbert space, Marcinkiewicz Interpolation Theorem, Hilbert Structure of $L^2$
- References: functional-analysis, math/conditional-expectation-sigma, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym, sobolev-spaces
- Backlinks: course-math-for-ai, hilbert-banach-spaces, math/differentiation-of-measures, math/harmonic-analysis, math/high-dimensional-statistics, math/lebesgue-integral, math/signed-measures, math/spectral-theory-operators, measure-theory, random-matrices

## Entity: math/lebesgue-integral
- Title: Lebesgue Integral
- Category: Measure Theory
- Language: en
- Key Concepts: Fubini's theorem, Monotone Convergence Theorem (MCT), Comparison with Riemann Integration, integrable, Approximation Results, Simple Functions and Elementary Integration, Fatou's Lemma, Convergence Theorems, Extension to Signed and Complex Functions, Product Integration and Fubini-Tonelli, simple functions, Change of Variables, References, Homogeneity, Monotonicity
- References: math/borel-cantelli-zero-one, math/conditional-expectation-sigma, math/lp-spaces, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: course-math-for-ai, math/differentiation-of-measures, math/hausdorff-measure, math/lp-spaces, math/product-measures-fubini, math/signed-measures, measure-theory

## Entity: math/product-measures-fubini
- Title: Product Measures and Fubini's Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: Characteristic Functions., Existence and Uniqueness of Product Measure, Counterexample (Fubini failure)., Independence and Product Measure Factorization, Tonelli's Theorem, product σ-algebra, σ-finiteness requirement:, Essential properties:, Theorem (Fubini)., Kolmogorov Extension Theorem., Key observation:, Proof sketch:, measurable with respect to the product σ-algebra, Product Measures and Fubini's Theorem, See also:
- References: characteristic-functions, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure, math/lebesgue-integral, math/regular-conditional-probability

## Entity: radon-nikodym
- Title: Radon-Nikodym Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: absolute continuity, market price of risk, Chain Rule and Change of Variables, Applications in Quantitative Finance, Conditional Expectation, Uniqueness:, $\nu$-almost everywhere, Theorem., Essential properties:, Girsanov Theorem and Measure Change, See also:, The Radon-Nikodym Theorem, Definition., σ-finiteness:, Extensions:
- References: finance/girsanov-semimartingales, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optimal-transport
- Backlinks: math/differentiation-of-measures, math/hausdorff-measure, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/signed-measures, measure-theory

## Entity: math/regular-conditional-probability
- Title: Regular Conditional Probability
- Category: Measure Theory
- Language: en
- Key Concepts: conditional probability kernel, References and Further Reading, Markov Kernels and Stochastic Processes, Conditional Independence and Bayes' Theorem, Radon-Nikodym theorem, Conditional Probability Kernels, transition probability, Markov processes, Probability measure in the first argument, Bayes' formula, Measurability in the second argument, Disintegration of Measures, The Borel Isomorphism Theorem, Existence and Uniqueness, conditionally independent given $C$
- References: math/conditional-expectation-sigma, math/density-processes, math/kolmogorov-probability-axioms, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/signed-measures
- Title: Signed Measures and Decomposition Theorems
- Category: Measure Theory
- Language: en
- Key Concepts: Countable additivity, Banach space, likelihood ratio, Finite measures, [[lebesgue-integral|Lebesgue Integral]], Definition and Basic Properties, Absolute Continuity and Singularity, Density processes, Theorem (Lebesgue Decomposition)., [[lp-spaces|$L^p$ Spaces]], Hahn Decomposition Theorem, Radon–Nikodym derivative, Related Topics, Riesz representation theorem, [[absolute-continuity-process-measures|Absolute Continuity of Processes and Measures]]
- References: math/absolute-continuity-process-measures, math/contiguity-measures, math/density-processes, math/hellinger-processes, math/lebesgue-integral, math/lp-spaces, radon-nikodym

## Entity: math/sigma-algebra-measurability
- Title: σ-Algebras and Measurability
- Category: Measure Theory
- Language: en
- Key Concepts: Information interpretation, strictly before, Stochastic integral, π-system, measurable, "representation", filtration, Examples., Related Articles, algebra, σ-Algebras and Measurability, smallest, Trivial σ-algebra, σ-algebra generated by $X$, π-λ systems and Dynkin's theorem
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms
- Backlinks: course-math-for-ai, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/conditional-expectation-sigma, math/differentiation-of-measures, math/discrete-martingales, math/doob-meyer-decomposition, math/hausdorff-measure, math/hellinger-processes, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/topology-basics, measure-theory, radon-nikodym

## Entity: cross-impact
- Title: Cross-Impact Models
- Category: Microstructure
- Language: en
- Key Concepts: Off-diagonal elements, Cross-Impact Models in Microstructure, Visualization: The Cross-Impact Network, Direct Impact, The Mechanism of Cross-Impact, Market factor, Positive Semi-Definite (PSD), Principal Components, Cross-Impact, Mathematical Formulation, The No-Arbitrage Condition, Diagonal elements, Related Topics, Sector factors, Cross-Impact Matrix
- References: eigenvalues-eigenvectors, finance/random-matrix-theory, kyle-model, market-impact, optimal-execution
- Backlinks: lead-lag-analysis, market-impact, multivariate-hawkes

## Entity: finance/dark-pools
- Title: Dark Pools and Market Fragmentation
- Category: Microstructure
- Language: en
- Key Concepts: Dark Pools, Related Articles, Herfindahl-Hirschman Index, Dark Pools and Market Fragmentation, MiFID II Double Volume Cap (EU), Market Fragmentation, Types of Dark Pools, Implementation
- References: finance/kyle-lambda, finance/pin-easley-ohara, optimal-execution, vpin

## Entity: deep-lob
- Title: Deep LOB (Order Book CNNs)
- Category: Microstructure
- Language: en
- Key Concepts: Liquidity Void Detection, Stationarity, The Network Architecture, The Order Book as an Image, Practical Challenges in Deployment, Visualization: The CNN sliding over LOB, Convolutional Neural Networks (CNNs), Inception Modules (CNNs), Limit Order Book (LOB), Output, Deep LOB, Latency, Deep LOB: Convolutional Networks for the Order Book, Related Topics, FPGAs
- References: finance/order-flow-imbalance, modern-quantization, queue-reactive-models
- Backlinks: market-microstructure

## Entity: glosten-milgrom
- Title: Glosten-Milgrom Model
- Category: Microstructure
- Language: en
- Key Concepts: Glosten-Milgrom Model: Adverse Selection Spread, Informed, The Bid-Ask Spread, Noise, Bid-Ask Spread, Bid Price ($P_B$), buy, sell, The Mathematical Mechanism, Key Takeaways, bid-ask spread, The Core Intuition, Related Topics, Ask Price ($P_A$), Liquidity Externalities
- References: kyle-model, vpin
- Backlinks: latency-arbitrage, roll-model, spread, vpin

## Entity: lead-lag-analysis
- Title: High-Frequency Lead-Lag Analysis
- Category: Microstructure
- Language: en
- Key Concepts: Order Flow Execution, Latency Arbitrage, Cross-Correlation Function, High-Frequency Lead-Lag Analysis, Mathematical Detection: The Hayashi-Yoshida Estimator, Finding the Lag ($\theta$), Why Citadel cares, Visualization: Lag Peak, Related Topics, Lead-Lag Analysis, Hayashi-Yoshida (HY) Estimator, The Epps Effect, Negative $\theta$, HMM Regime Detection, Positive $\theta$
- References: cross-impact, hmm-particle-filters, latency-arbitrage, vpin
- Backlinks: multivariate-hawkes

## Entity: finance/kyle-lambda
- Title: Kyle's Lambda: The Price Impact Coefficient
- Category: Microstructure
- Language: en
- Key Concepts: Kyle's Lambda: The Price Impact Coefficient, Kyle's Model (1985), Hasbrouck's (1991) Information Share, Applications, Kyle's Lambda, Market-maker, Noise traders, market depth, Market depth, Empirical Estimation, Related Articles, Almgren-Chriss Impact Decomposition, Equilibrium $\lambda$, market depth decreases toward the close, Insider
- References: amihud-illiquidity, avellaneda-stoikov, finance/order-flow-imbalance, optimal-execution, vpin
- Backlinks: finance/dark-pools, finance/order-flow-imbalance, finance/pin-easley-ohara, finance/repo-market-systemic, finance/vwap-twap, market-microstructure, spread

## Entity: latency-arbitrage
- Title: Latency Arbitrage and Frequent Batch Auctions
- Category: Microstructure
- Language: en
- Key Concepts: The Solution: Frequent Batch Auctions (FBA), Latency Arbitrage, Kills the Footrace, The Liquidity Tax, single clearing price, Why FBA fixes the market:, Frequent Batch Auctions, Continuous Limit Order Book (CLOB), footrace, Related Topics, Visualization: The HFT Race, widening the bid-ask spread, Latency Arbitrage and Frequent Batch Auctions, Removes the Liquidity Tax, Adverse Selection via Latency
- References: glosten-milgrom, smart-order-routing
- Backlinks: lead-lag-analysis, mev

## Entity: market-impact
- Title: Market Impact and Square-root Law
- Category: Microstructure
- Language: en
- Key Concepts: Why is this surprising?, 1. Permanent vs. Temporary Impact, Illiquid, Temporary Impact, 2. The Square-root Law, Related Topics, 3. Price Discovery as Physics, Cross-Impact Matrix, Market Impact and the Square-root Law, square root, Information Discovery, Latent Liquidity, Permanent Impact, Cause, Square-root Law
- References: cross-impact, lob-propagators, optimal-execution, smart-order-routing, vpin
- Backlinks: cross-impact, kyle-model, lob-propagators, market-microstructure, spread

## Entity: lob-propagators
- Title: Mechanical Price Discovery: Propagators
- Category: Microstructure
- Language: en
- Key Concepts: Propagator models, sign of the trade, transient and mechanical, Mean Reversion (Decay), Propagator function, Related Topics, Immediate Impact, The Efficiency Condition, The Meaning of G(τ), Mechanical vs. Informational, The Propagator Equation, Permanent Impact, mechanical, Visualization: Response to a Trade, Mechanical Price Discovery and Propagator Models
- References: finance/hawkes-process, market-impact
- Backlinks: market-impact, queue-reactive-models

## Entity: multivariate-hawkes
- Title: Multivariate Hawkes Processes
- Category: Microstructure
- Language: en
- Key Concepts: Off-diagonal elements ($\alpha_{ij}$), Micro-Price Prediction, Multivariate Hawkes Process, Diagonal elements ($\alpha_{ii}$), Multivariate Hawkes Processes: Micro-Contagion, Related Topics, Market Making, Excitation Matrix, Application in Algorithmic Trading, The Intensity Matrix, Flash Crash Detection, The Cross-Excitation Network, Visualization: The Excitation Impulse, cross-excitation
- References: cross-impact, finance/hawkes-process, lead-lag-analysis

## Entity: liquidation-signals
- Title: Optimal Liquidation with Alpha Signals
- Category: Microstructure
- Language: en
- Key Concepts: Alpha Signals, Cross-Asset Signals, The Augmented Objective Function, Optimal Liquidation with Alpha Signals, Opportunistic Execution, The Optimal Strategy: Drift-Adjusted Schedulling, Optimal Liquidation with Signals, Related Topics, Trade Flow (Hawkes), Key Signals used in Modern Desks, LOB Imbalance, Visualization: Signal-Driven Slicing, Urgency
- References: finance/order-flow-imbalance, optimal-execution, vpin

## Entity: finance/order-flow-imbalance
- Title: Order Flow Imbalance and Microprice
- Category: Microstructure
- Language: en
- Key Concepts: Order Flow Imbalance (OFI), Order Flow Imbalance and Microprice, Related Articles, Multi-Level OFI, Predictive Model, LOB-Based Definition, Microprice, Motivation, Spread-Normalized Skew, Predictive Performance, Order Flow Imbalance, Implementation, Stoikov's Generalised Microprice (2018)
- References: avellaneda-stoikov, finance/hawkes-process, finance/kyle-lambda, lob-prediction, vpin
- Backlinks: deep-lob, finance/kyle-lambda, finance/vwap-twap, liquidation-signals, market-microstructure, queue-reactive-models

## Entity: vpin
- Title: Order Flow Toxicity and VPIN
- Category: Microstructure
- Language: en
- Key Concepts: VPIN, 3. Interpretation and Usage, 1. The Informed Trading Risk, 2. VPIN: The Mechanism, 4. Why it Matters for AI and HFT, B. Order Imbalance, Low VPIN (< 0.2), Order Flow Toxicity, Related Topics, Easley, Lopez de Prado, and O'Hara, A. Volume Bucketing, C. The VPIN Formula, The Flash Crash (2010), "Volume Time.", Visualization: Toxicity vs. Price
- References: finance/pin-easley-ohara, glosten-milgrom, hmm-particle-filters, optimal-execution
- Backlinks: finance/dark-pools, finance/kyle-lambda, finance/order-flow-imbalance, finance/pin-easley-ohara, glosten-milgrom, kyle-model, lead-lag-analysis, liquidation-signals, market-impact, optimal-execution, roll-model

## Entity: finance/pin-easley-ohara
- Title: PIN: Probability of Informed Trading
- Category: Microstructure
- Language: en
- Key Concepts: PIN, Game structure:, PIN (Probability of Informed Trading), PIN vs VPIN, PIN: Probability of Informed Trading, Related Articles, Single-day likelihood, EKOP Model, Implementation
- References: finance/kyle-lambda, roll-model, vpin
- Backlinks: finance/dark-pools, market-microstructure, vpin

## Entity: queue-reactive-models
- Title: Queue-Reactive Models (LOB Dynamics)
- Category: Microstructure
- Language: en
- Key Concepts: Why HFTs Use It, Market Orders, The "Reactive" Insight, The Physics of the Queue, The Micro-Price, Limit Orders (Arrivals), Limit Order Book (LOB), Related Topics, these rates depend strongly on the current size of the queues, Market Making, Visualization: Transition Intensities, Queue-Reactive Models of the Limit Order Book, Cancellations, Queue-Reactive Models, Micro-Price
- References: finance/hawkes-process, finance/order-flow-imbalance, lob-propagators
- Backlinks: deep-lob

## Entity: smart-order-routing
- Title: Smart Order Routing (SOR)
- Category: Microstructure
- Language: en
- Key Concepts: slippage, Liquidity Aggregation:, Dark Pools, SOR in Decentralized Finance (DeFi), Related Topics, Best Execution, MEV Protection:, Multi-hop Paths:, Price & Volume Analysis:, Smart Order Routing (SOR), SOR in Traditional Finance (CeFi), How SOR Works, Dynamic Execution:, Gas Optimization:
- References: market-microstructure
- Backlinks: amm-mechanics, asset-tokenization, cedefi-mechanics, course-cedefi, cross-chain-interop, latency-arbitrage, market-impact, mev, yield-aggregators

## Entity: kyle-model
- Title: The Kyle Model
- Category: Microstructure
- Language: en
- Key Concepts: The Equilibrium Solution, Informed Trader, Market Maker (MM), Kyle's Lambda ($\lambda$), slowly and linearly, Related Topics, market liquidity, Noise Traders, Strategic Slowing, The Kyle Model: Strategic Informed Trading, Visualization: Insider Hiding, The Three Players, informed trader, Price Discovery, Market Depth
- References: market-impact, optimal-execution, vpin
- Backlinks: cross-impact, glosten-milgrom

## Entity: roll-model
- Title: The Roll Model
- Category: Microstructure
- Language: en
- Key Concepts: Visualization: The Bouncing Price, Effective Spread, Liquidity Proxy, 2. The Mathematical Derivation, The Roll Model: Estimating the Effective Spread, 3. Why it Matters, negatively correlated, Related Topics, Low-Frequency Data, 1. The Bid-Ask Bounce, Roll Estimator, Zero Covariance, Hidden Costs, 4. Limitations in Modern Markets, effective bid-ask spread
- References: amihud-illiquidity, glosten-milgrom, vpin
- Backlinks: finance/pin-easley-ohara

## Entity: finance/vwap-twap
- Title: VWAP and TWAP Execution Algorithms
- Category: Microstructure
- Language: en
- Key Concepts: TWAP, VWAP, Market VWAP, VWAP (Volume-Weighted Average Price), Related Articles, Participation algorithm, TWAP (Time-Weighted Average Price), Implementation, Implementation Shortfall, VWAP and TWAP Execution Algorithms
- References: avellaneda-stoikov, finance/kyle-lambda, finance/order-flow-imbalance, optimal-execution

## Entity: kuramoto-model
- Title: Kuramoto Model
- Category: Nonlinear Dynamics
- Language: en
- Key Concepts: Mathematical Framework, AI Applications, complex order parameter, Kuramoto Model, Finance Applications, Phase Transition & Order Parameter, extreme synchronization, Visualization of Synchronization, phase transition, 2. Adversarial Robustness, Related Topics, 3. Solving Combinatorial Problems, Artificial Intelligence, 1. Market Synchronization & Crises, Overview
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
- Key Concepts: Overview, Algorithm

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
- Key Concepts: L1 and L2, Overview, L1 (Lasso):, L2 (Ridge):

## Entity: sgd-variants
- Title: Stochastic Gradient Descent
- Category: Optimization
- Language: en
- Key Concepts: RMSProp:, Variants, Overview, Adam:, Vanilla SGD:
- References: convex-optimization

## Entity: weight-initialization
- Title: Weight Initialization
- Category: Optimization
- Language: en
- Key Concepts: Xavier/Glorot Initialization:, Overview, Techniques, He (Kaiming) Initialization:

## Entity: ads-cft
- Title: AdS/CFT & Holographic Principle
- Category: Physics
- Language: en
- Key Concepts: type IIB string theory on AdS$_5 \times S^5$, Anti-de Sitter space, Beyond AdS: celestial holography, $\mathcal N = 4$ super Yang-Mills theory with gauge group $SU(N)$, The Ryu-Takayanagi formula, Impact, Related Topics, [[celestial-holography]], Maldacena's conjecture, Why AdS/CFT is trusted, holographic principle, The holographic idea, entanglement [[gravitational-entropy|entropy]], timelike boundary, AdS/CFT & Holographic Principle
- References: black-hole-soft-hair, bms-group, celestial-holography, conformal-field-theory, general-relativity, gravitational-entropy, hawking-radiation, information-paradox, large-gauge-transformations, pasterski-triangle, soft-theorems
- Backlinks: black-hole-thermodynamics, gravitational-entropy, hawking-radiation, information-paradox

## Entity: anomalies
- Title: Anomalies
- Category: Physics
- Language: en
- Key Concepts: Gauge anomalies and the Standard Model, Anomalies, Anomaly matching and 't Hooft's constraint, Gravitational and mixed anomalies, global, Scale / trace anomaly, Related Topics, anomaly-free, The general picture, exact, trace anomaly, The chiral anomaly, Why anomalies matter, anomaly, Anomalously
- References: gauge-theory-yang-mills, goldstone-modes, noether-theorem, path-integral, renormalization-group, ward-identities
- Backlinks: math/banach-tarski, renormalization-group

## Entity: asymptotic-spacetime
- Title: Asymptotic Spacetime
- Category: Physics
- Language: en
- Key Concepts: Visualization, Physical Interpretation, See Also, Connections to Information Theory & Holography, Bondi-Sachs mass loss, Theoretical Foundation, Mathematical Formulation, Peeling property, Vacuum degeneracy, Asymptotic Spacetime, Key Properties, ADM mass, Conformal structure
- References: asymptotic-symmetries, bms-group, celestial-holography, math/differential-geometry
- Backlinks: gravitational-waves-gr, math/non-euclidean-geometry, scattering-amplitudes

## Entity: asymptotic-symmetries
- Title: Asymptotic Symmetries
- Category: Physics
- Language: en
- Key Concepts: Infinite vacuum degeneracy, Electromagnetic analogy, Visualization, Physical Interpretation, Connections to Information Theory & Holography, See Also, Asymptotic Symmetries, Theoretical Foundation, Mathematical Formulation, Superrotation charges, Key Properties, Large vs. small gauge transformations, Matching conditions
- References: bms-group, celestial-holography, soft-theorems
- Backlinks: asymptotic-spacetime, black-hole-soft-hair, bms-group, celestial-holography, goldstone-modes, group-theory, information-paradox, large-gauge-transformations, noether-theorem, pasterski-triangle, pauli-exclusion-quantization, soft-theorems, ward-identities

## Entity: bms-group
- Title: BMS Group
- Category: Physics
- Language: en
- Key Concepts: Infinite vacuum degeneracy, Visualization, Physical Interpretation, See Also, Connections to Information Theory & Holography, Theoretical Foundation, Memory effect, Celestial sphere action, Goldstone interpretation, Prerequisites, Mathematical Formulation, Key Properties, Ward identity = Soft theorem, BMS Group
- References: asymptotic-symmetries, celestial-holography, group-theory, pasterski-triangle
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, conformal-field-theory, gravitational-waves-gr, group-theory, large-gauge-transformations, math/non-euclidean-geometry, noether-theorem, pasterski-triangle, spin-memory, ward-identities

## Entity: information-paradox
- Title: Black Hole Information Paradox
- Category: Physics
- Language: en
- Key Concepts: Black Hole Information Paradox, Page curve, Page time, Firewall, Soft hair, Replica wormholes and the island formula, Why it matters, The Page curve, Open questions, Related Topics, black hole information paradox, Black hole complementarity, Candidate resolutions, Statement of the paradox, Information is lost.
- References: ads-cft, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, general-relativity, gravitational-entropy, hawking-radiation, pasterski-triangle, path-integral, qft-basic
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, hawking-radiation, large-gauge-transformations, math/godel-incompleteness

## Entity: black-hole-soft-hair
- Title: Black Hole Soft Hair
- Category: Physics
- Language: en
- Key Concepts: Limitations, Infinite degeneracy, Physical Interpretation, Black Hole Soft Hair, Connections to Information Theory & Holography, See Also, Theoretical Foundation, Mathematical Formulation, Prerequisites, Zero energy, Electromagnetic hair, Key Properties, The Area Law of [[gravitational-entropy|Entropy]], Horizon vs. infinity, Visualization: [[gravitational-entropy|Entropy]] Scaling
- References: asymptotic-symmetries, bms-group, celestial-holography, gravitational-entropy, gravitational-memory, soft-theorems
- Backlinks: ads-cft, information-paradox, large-gauge-transformations, memory-effects, quantum-entanglement, spin-memory

## Entity: black-hole-thermodynamics
- Title: Black Hole Thermodynamics
- Category: Physics
- Language: en
- Key Concepts: 3rd, Penrose process, Bekenstein-Hawking entropy, irreducible mass, Related Topics, The Firewall Paradox, 0th, firewall, Black Hole Thermodynamics, ergosphere, Bekenstein-Hawking [[gravitational-entropy|Entropy]], Entropy vs Mass Chart, holographic principle, The Penrose Process, 1st
- References: ads-cft, general-relativity, gravitational-entropy, gravitational-waves-gr, hawking-radiation, information-paradox
- Backlinks: ads-cft-deep, gravitational-entropy, hawking-radiation, quantum-information-entropy

## Entity: celestial-holography
- Title: Celestial Holography
- Category: Physics
- Language: en
- Key Concepts: Lorentz = global conformal group, Visualization, Soft theorems as Ward identities, Physical Interpretation, Connections to Information Theory & Holography, See Also, Loop corrections, Theoretical Foundation, Mathematical Formulation, $w_{1+\infty}$ symmetry, Prerequisites, Key Properties, Celestial Holography, Continuous spectrum
- References: asymptotic-symmetries, bms-group, conformal-field-theory, gravitational-entropy, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, bms-group, conformal-field-theory, gravitational-entropy, gravitational-waves-gr, group-theory, information-paradox, large-gauge-transformations, math/non-euclidean-geometry, pasterski-triangle, qft-basic, scattering-amplitudes, soft-theorems, spin-memory, wave-particle-duality

## Entity: conformal-field-theory
- Title: Conformal Field Theory (CFT)
- Category: Physics
- Language: en
- Key Concepts: Cardy formula, Physical Interpretation, See Also, Connections to Information Theory & Holography, Conformal blocks, Unitarity bounds, Modular invariance, Theoretical Foundation, Mathematical Formulation, Prerequisites, Key Properties, Conformal Field Theory (CFT), State-operator correspondence
- References: bms-group, celestial-holography, gravitational-entropy, group-theory, qft-basic, quantization, schrodinger-equation
- Backlinks: ads-cft, ads-cft-deep, celestial-holography, kan, renormalization-group, sle

## Entity: dirac-equation
- Title: Dirac Equation
- Category: Physics
- Language: en
- Key Concepts: right-handed, quantum field, Spinors and Lorentz transformations, Related Topics, Chirality and the Standard Model, Coupling to gauge fields, Dirac's problem, Clifford algebra, positrons, Fine structure of hydrogen., Dirac equation, Spin $\tfrac{1}{2}$., left-handed, Predictions, Dirac spinor
- References: gauge-theory-yang-mills, maxwell-electromagnetism, pauli-exclusion-quantization, qft-basic, schrodinger-equation, special-relativity
- Backlinks: gauge-theory-yang-mills, maxwell-electromagnetism

## Entity: fokker-planck-equation
- Title: Fokker-Planck Equation
- Category: Physics
- Language: en
- Key Concepts: Finite differences:, Fokker-Planck Equation, Path integral representation, Multidimensional generalization, probability current, Stationary distribution, backward Kolmogorov equation, Fokker-Planck equation (FP), Forward and backward Kolmogorov equations, detailed balance condition, Related Topics, Boltzmann distribution, Fokker-Planck equation, Application to option pricing, heat equation
- References: brownian-motion, geometric-brownian-motion, math/kolmogorov-equations-ctmc, ornstein-uhlenbeck-process, partial-differential-equations, path-integral, stochastic-differential-equations
- Backlinks: diffusion-models, feynman-kac, neural-operators, nonequilibrium-statmech

## Entity: gauge-theory-yang-mills
- Title: Gauge Theory & Yang-Mills
- Category: Physics
- Language: en
- Key Concepts: ghost fields, Non-abelian case: Yang-Mills, confines, global, covariant derivative, Asymptotic freedom and confinement, Why gauge theory is inevitable, asymptotic freedom, Gauge Theory & Yang-Mills, The three forces of the Standard Model, Related Topics, Quantisation: Faddeev-Popov and BRST, From global to local symmetry, Massless spin-1 particles must couple through a conserved current., Gauge theories
- References: dirac-equation, goldstone-modes, maxwell-electromagnetism, noether-theorem, path-integral, qft-basic, renormalization-group, ward-identities
- Backlinks: anomalies, connections-curvature, dirac-equation, large-gauge-transformations, lie-groups-algebras, maxwell-electromagnetism, renormalization-group, topological-phases

## Entity: goldstone-modes
- Title: Goldstone Modes
- Category: Physics
- Language: en
- Key Concepts: Spontaneous symmetry breaking, Sketch of the proof., Soft theorems and the asymptotic connection, The Higgs mechanism: eating Goldstones, Weinberg soft theorems, non-linear sigma model, Related Topics, pseudo-Goldstone bosons, vacuum [[differential-geometry|manifold]], Physical examples, effective Lagrangian, Example., Goldstone modes of spontaneously broken large gauge transformations and BMS supertranslations, gauged, massless modes
- References: asymptotic-symmetries, math/differential-geometry, noether-theorem, pasterski-triangle, qft-basic, soft-theorems, ward-identities
- Backlinks: anomalies, gauge-theory-yang-mills, large-gauge-transformations

## Entity: gravitational-entropy
- Title: Gravitational Entropy and Holography
- Category: Physics
- Language: en
- Key Concepts: Gravitational Entropy and Holography, Ryu-Takayanagi Formula, After the Page time, The Bekenstein Bound, Early times, light sheet, Page curve, Holography Beyond AdS, Related Topics, Bousso bound, area, Bousso-Engelhardt, quantum extremal surface, emergent spacetime from entanglement, not
- References: ads-cft, black-hole-thermodynamics, celestial-holography, general-relativity, hawking-radiation, information-paradox
- Backlinks: ads-cft, black-hole-soft-hair, black-hole-thermodynamics, celestial-holography, conformal-field-theory, hawking-radiation, information-paradox, laws-of-thermodynamics, nonequilibrium-statmech, pauli-exclusion-quantization, quantum-entanglement, quantum-information-entropy, statistical-mechanics, uncertainty-principle

## Entity: gravitational-memory
- Title: Gravitational Memory
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Connections to Information Theory & Holography, DC offset, Theoretical Foundation, Detectable, Mathematical Formulation, Two types, Prerequisites, Key Properties, Supertranslation transition, Spin memory, Gravitational Memory
- References: gravitational-waves-gr, memory-effects, pasterski-triangle, soft-theorems
- Backlinks: black-hole-soft-hair, gravitational-waves-gr, memory-effects, spin-memory

## Entity: gravitational-waves-gr
- Title: Gravitational Waves & General Relativity
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Connections to Information Theory & Holography, Two polarizations, Theoretical Foundation, Mathematical Formulation, Strain sensitivity, Key Properties, Peeling, Quadrupole emission, Speed, Gravitational Waves & General Relativity (GR)
- References: asymptotic-spacetime, bms-group, celestial-holography, gravitational-memory, math/differential-geometry, pasterski-triangle
- Backlinks: black-hole-thermodynamics, gravitational-memory, hawking-radiation, math/non-euclidean-geometry

## Entity: group-theory
- Title: Group Theory
- Category: Physics
- Language: en
- Key Concepts: Visualization, Physical Interpretation, See Also, Connections to Information Theory & Holography, Spontaneous symmetry breaking, Theoretical Foundation, Mathematical Formulation, Schur's lemma, Applications in Machine Learning, Peter-Weyl theorem, Representation theory of the Poincaré group, Key Properties, Group Theory in Physics, Anomalies
- References: asymptotic-symmetries, bms-group, celestial-holography, equivariant-nn, math/differential-geometry, quantum-entanglement
- Backlinks: bms-group, conformal-field-theory, equivariant-nn, noether-theorem, qft-basic

## Entity: hawking-radiation
- Title: Hawking Radiation
- Category: Physics
- Language: en
- Key Concepts: trans-Planckian problem, Hawking Temperature, Black Hole Evaporation, The Bogoliubov Transformation, evaporation timescale, Connection to the Unruh Effect, Related Topics, In-modes, Why This Matters, The Trans-Planckian Problem, Hawking Radiation, Virtual Pair Production Near the Horizon, Planck spectrum, Out-modes, Bogoliubov transformation
- References: ads-cft, black-hole-thermodynamics, general-relativity, gravitational-entropy, gravitational-waves-gr, information-paradox
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, information-paradox

## Entity: uncertainty-principle
- Title: Heisenberg Uncertainty Principle
- Category: Physics
- Language: en
- Key Concepts: Measurement backaction, Physical Interpretation, Fourier duality, See Also, Connections to Information Theory & Holography, Canonical pairs, Theoretical Foundation, Mathematical Formulation, Heisenberg Uncertainty Principle, Zero-point energy, Generalized uncertainty principle (GUP), Key Properties
- References: gravitational-entropy, quantum-entanglement, schrodinger-equation, wave-particle-duality
- Backlinks: wave-particle-duality

## Entity: kolmogorov-arnold-theorem
- Title: Kolmogorov-Arnold Theorem
- Category: Physics
- Language: en
- Key Concepts: Non-smoothness of inner functions., universal approximation theorem, independently of $f$, Implications for neural networks, curse of dimensionality, Statement, Related Topics, Kolmogorov-Arnold theorem, a number of neurons that grows with accuracy, learnable univariate functions on edges, Relation to approximation theory, negative answer to Hilbert's thirteenth problem, not smooth, Parametrisation trade-off., Interpretability.
- References: finance/spectral-analysis, kan, learnable-activations, partial-differential-equations, pinns, transformer-architecture
- Backlinks: kan, learnable-activations

## Entity: large-gauge-transformations
- Title: Large Gauge Transformations
- Category: Physics
- Language: en
- Key Concepts: Asymptotic charges, Ward identities = soft theorems, Large Gauge Transformations, Large gauge in non-abelian theories and instantons, large, instantons, strong CP problem, Spontaneous symmetry breaking of large gauge, [[bms-group|BMS]] group, Related Topics, Large gauge transformations, Why this is a big deal, Large gauge on the horizon: soft hair, asymptotic charges, spontaneously broken
- References: asymptotic-symmetries, black-hole-soft-hair, bms-group, celestial-holography, gauge-theory-yang-mills, goldstone-modes, information-paradox, memory-effects, noether-theorem, pasterski-triangle, soft-theorems, ward-identities
- Backlinks: ads-cft

## Entity: maxwell-electromagnetism
- Title: Maxwell's Electromagnetism
- Category: Physics
- Language: en
- Key Concepts: Maxwell's Electromagnetism, Maxwell's equations, Liénard-Wiechert potentials, Bianchi identity, Lagrangian, quantum electrodynamics (QED), $U(1)$ gauge symmetry, Larmor power, Covariant formulation, Electromagnetic waves, Energy, momentum, and radiation, displacement current, Related Topics, The equations, From Maxwell to QED
- References: dirac-equation, gauge-theory-yang-mills, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes, soft-theorems, special-relativity, ward-identities
- Backlinks: dirac-equation, gauge-theory-yang-mills

## Entity: memory-effects
- Title: Memory Effects
- Category: Physics
- Language: en
- Key Concepts: Visualization, Physical Interpretation, See Also, Connections to Information Theory & Holography, Theoretical Foundation, Mathematical Formulation, Hierarchy, Prerequisites, Key Properties, Infrared origin, Universality, Memory Effects, Vacuum transitions, Detectability
- References: black-hole-soft-hair, gravitational-memory, pasterski-triangle, soft-theorems, spin-memory
- Backlinks: gravitational-memory, large-gauge-transformations, spin-memory

## Entity: noether-theorem
- Title: Noether's Theorem
- Category: Physics
- Language: en
- Key Concepts: Ward-Takahashi identities, conserved current, Bianchi identities, global, large gauge transformations, Statement, The dictionary of symmetries and charges, Ward identities, Quantum Noether, Noether's Theorem, Related Topics, Example: energy from time-translation invariance, Local, Noether's theorem, Example: electric charge from global phase symmetry
- References: asymptotic-symmetries, bms-group, group-theory, hamiltonian-mechanics, lagrangian-mechanics, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, math/variational-calculus, maxwell-electromagnetism, path-integral, ward-identities

## Entity: partial-differential-equations
- Title: Partial Differential Equations
- Category: Physics
- Language: en
- Key Concepts: Schrödinger equation, Dirichlet, Solution methods, identifying, Neumann, Navier-Stokes boundary layers:, Canonical equations of physics, Hyperbolic, Heat equation, Partial Differential Equations, Related Topics, Mesh-based vs mesh-free., Navier-Stokes, Inverse problems, Parabolic
- References: automatic-differentiation, brownian-motion, finance/fractional-fokker-planck, pinns, schrodinger-equation
- Backlinks: automatic-differentiation, convertible-bonds, feynman-kac, fokker-planck-equation, fourier-neural-operators, fredholm-theory, hydrodynamic-limits, kolmogorov-arnold-theorem, math/harmonic-analysis, math/spdes, math/spectral-theory-operators, mckean-vlasov-sdes, neural-operators, numerical-pde-finance, pinns, risk-neutral-valuation, schwartz-distributions

## Entity: pasterski-triangle
- Title: Pasterski's Triangle Theory
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, Leg 3 — Memory Effects $\leftrightarrow$ Soft Theorems (Fourier transform):, See Also, Connections to Information Theory & Holography, Universal, Theoretical Foundation, Quantum level, Mathematical Formulation, Prerequisites, Cross-theory, Subleading triangle, Key Properties, Leg 1 — Soft Theorems $\leftrightarrow$ Asymptotic Symmetries (Ward identities):, Pasterski's Triangle Theory, Sub-subleading
- References: asymptotic-symmetries, bms-group, celestial-holography, scattering-amplitudes, soft-theorems, spin-memory
- Backlinks: ads-cft, bms-group, goldstone-modes, gravitational-memory, gravitational-waves-gr, information-paradox, large-gauge-transformations, memory-effects, soft-theorems, ward-identities

## Entity: path-integral
- Title: Path Integral Formulation
- Category: Physics
- Language: en
- Key Concepts: Symmetries are transparent., path integral formulation, Gauge theories and the Faddeev-Popov trick, lattice QFT, Euclidean path integral and statistical mechanics, The basic idea, Related Topics, Caveats, partition function, ghost fields, Feynman diagrams, The classical limit, Non-perturbative physics., Why the path integral, Path Integral Formulation
- References: hamiltonian-mechanics, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes
- Backlinks: anomalies, feynman-kac, fokker-planck-equation, gauge-theory-yang-mills, information-paradox, path-integrals, renormalization-group, statistical-mechanics, ward-identities

## Entity: pauli-exclusion-quantization
- Title: Pauli Exclusion Principle & Quantization
- Category: Physics
- Language: en
- Key Concepts: Exchange interaction, Physical Interpretation, See Also, Fermi pressure, Connections to Information Theory & Holography, Theoretical Foundation, Mathematical Formulation, Anyons, Key Properties, Cooper pairs, Pauli Exclusion Principle & [[quantization]], Atomic shell structure
- References: asymptotic-symmetries, gravitational-entropy, quantization, quantum-entanglement
- Backlinks: dirac-equation, qft-basic

## Entity: qft-basic
- Title: QFT: Basic Level
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Crossing symmetry, Connections to Information Theory & Holography, Spontaneous symmetry breaking, Theoretical Foundation, Mathematical Formulation, Prerequisites, Key Properties, CPT theorem, Renormalization, Optical theorem, Quantum Field Theory (QFT): Basic Level
- References: celestial-holography, finance/monte-carlo-method, group-theory, pauli-exclusion-quantization, quantization, scattering-amplitudes, schrodinger-equation, wave-particle-duality
- Backlinks: conformal-field-theory, dirac-equation, equivariant-nn, finance/monte-carlo-method, gauge-theory-yang-mills, goldstone-modes, information-paradox, kan, maxwell-electromagnetism, path-integral, quantum-mechanics, renormalization-group, statistical-mechanics, ward-identities

## Entity: quantum-entanglement
- Title: Quantum Entanglement
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Connections to Information Theory & Holography, Area law, Theoretical Foundation, Mathematical Formulation, Monogamy, Non-locality, Key Properties, Entanglement as resource, Quantum Entanglement, Entanglement distillation
- References: black-hole-soft-hair, finance/random-matrix-theory, finance/shannon-entropy, gravitational-entropy, schrodinger-equation, superposition-collapse
- Backlinks: finance/random-matrix-theory, finance/shannon-entropy, finance/zeta-field, group-theory, linear-spaces-basis, pauli-exclusion-quantization, quantum-information-entropy, quantum-mechanics, superposition-collapse, uncertainty-principle

## Entity: renormalization-group
- Title: Renormalization Group
- Category: Physics
- Language: en
- Key Concepts: Asymptotic safety and the space of theories, asymptotic freedom, Running couplings in QFT, Renormalization Group, asymptotically safe, Related Topics, Wilsonian RG transformation, QCD., Continuum limits and effective field theory, universality, beta function, fixed point, effective field theories, leading-log resummation, Callan-Symanzik equation
- References: anomalies, conformal-field-theory, gauge-theory-yang-mills, math/spectral-theory-operators, path-integral, qft-basic, ward-identities
- Backlinks: anomalies, effective-field-theory, gauge-theory-yang-mills, many-body-tensor-networks

## Entity: scattering-amplitudes
- Title: Scattering Amplitudes & S-matrix
- Category: Physics
- Language: en
- Key Concepts: Color decomposition, Physical Interpretation, See Also, On-shell methods, Connections to Information Theory & Holography, Theoretical Foundation, Mathematical Formulation, Scattering Amplitudes & S-matrix, Collinear limits, Key Properties, Soft limits, BCJ duality and double copy
- References: asymptotic-spacetime, celestial-holography, soft-theorems
- Backlinks: celestial-holography, equivariant-nn, maxwell-electromagnetism, pasterski-triangle, path-integral, qft-basic, soft-theorems

## Entity: soft-theorems
- Title: Soft Theorems
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Soft Theorems, Connections to Information Theory & Holography, Theoretical Foundation, Mathematical Formulation, Soft photon vs. graviton, Quantum corrections, Prerequisites, Infrared divergences, Key Properties, Universality, Color
- References: asymptotic-symmetries, celestial-holography, pasterski-triangle, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-symmetries, black-hole-soft-hair, goldstone-modes, gravitational-memory, large-gauge-transformations, maxwell-electromagnetism, memory-effects, noether-theorem, pasterski-triangle, scattering-amplitudes, ward-identities

## Entity: spin-memory
- Title: Spin Memory
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Connections to Information Theory & Holography, Circular orbit detection, Theoretical Foundation, Spin Memory, Mathematical Formulation, Superrotation Ward identity, Amplitude, Angular momentum signature, Prerequisites, Key Properties, Subleading order
- References: black-hole-soft-hair, bms-group, celestial-holography, gravitational-memory, memory-effects
- Backlinks: memory-effects, pasterski-triangle

## Entity: statistical-mechanics
- Title: Statistical Mechanics
- Category: Physics
- Language: en
- Key Concepts: Wick rotation and connection to quantum mechanics, [[gravitational-entropy|Entropy]] and information, Canonical ensemble, Summary, Microcanonical ensemble, Introduction, Boltzmann machines, Free energy minimization as unifying principle, the macroscopic state of an equilibrium system is completely described by a probabilistic ensemble, Applications to machine learning, The ergodic hypothesis, Gibbs [[gravitational-entropy|entropy]], Boltzmann distribution, Grand canonical ensemble, partition function
- References: finance/shannon-entropy, gravitational-entropy, math/ergodic-theorems-birkhoff, path-integral, qft-basic
- Backlinks: bayesian-deep-learning, convergence-of-semimartingales, copulas, energy-based-models, freidlin-wentzell-theory, gaussian-processes, maximum-entropy, nonequilibrium-statmech, sle, variational-autoencoders, wentzell-freidlin

## Entity: superposition-collapse
- Title: Superposition & Collapse
- Category: Physics
- Language: en
- Key Concepts: Physical Interpretation, See Also, Connections to Information Theory & Holography, Theoretical Foundation, Mathematical Formulation, Quantum Zeno effect, Macroscopic superpositions, Superposition & Collapse, Key Properties, No-cloning theorem, Pointer states, Linearity
- References: quantum-entanglement, schrodinger-equation
- Backlinks: quantum-entanglement

## Entity: ward-identities
- Title: Ward Identities
- Category: Physics
- Language: en
- Key Concepts: Chiral anomaly, Ward identities for gauge symmetries: Slavnov-Taylor, Anomalies, Gauge anomalies, The basic identity, From classical conservation to exact quantum identities, Conformal / trace anomaly, every soft theorem in scattering is a Ward identity of an asymptotic symmetry, Related Topics, Slavnov-Taylor identities, $Z_1 = Z_2$, Subleading soft-graviton theorem, Weinberg's soft-photon theorem, QED Ward-Takahashi identity, anomaly
- References: asymptotic-symmetries, bms-group, noether-theorem, pasterski-triangle, path-integral, qft-basic, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, maxwell-electromagnetism, renormalization-group

## Entity: wave-particle-duality
- Title: Wave-Particle Duality
- Category: Physics
- Language: en
- Key Concepts: Coherence length, Thermal de Broglie wavelength, Physical Interpretation, See Also, Connections to Information Theory & Holography, Matter-wave interferometry, Wave-Particle Duality, Complementarity, Theoretical Foundation, Mathematical Formulation, Delayed-choice experiments, Key Properties
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
- Key Concepts: Second Law:, The Four Laws, Third Law:, First Law (Conservation of Energy):, Zeroth Law:
- References: gravitational-entropy

## Entity: maxwells-equations
- Title: Maxwell's Equations
- Category: Physics Foundations
- Language: en
- Key Concepts: Gauss's Law for Magnetism:, Overview, Ampère-Maxwell Law:, Differential Form, Gauss's Law:, Faraday's Law:
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
- Key Concepts: Overview, Mathematical Formulation

## Entity: bayesian-kelly
- Title: Bayesian Kelly Criterion
- Category: Portfolio
- Language: en
- Key Concepts: Bayesian Kelly Criterion and Parameter Uncertainty, The Bayesian Solution, Posterior Distribution, mathematical justification for Fractional Kelly, Related Topics, The Flaw of Plug-in Estimates, expected growth across all possible values of $\mu$, Bayesian Kelly, Visualization: The Kelly Cliff, Fractional Kelly as a Heuristic, Drawdown Control
- References: kelly-criterion, merton-portfolio, variational-inference
- Backlinks: bayesian-inference, kelly-jump-diffusion

## Entity: entropy-pooling
- Title: Entropy Pooling (Meucci)
- Category: Portfolio
- Language: en
- Key Concepts: Stress Testing, [[shannon-entropy|Entropy]] Pooling: Advanced Portfolio Construction, [[shannon-entropy|Entropy]] Pooling, Options and Non-Linearities, Convex Optimization, The Core Concept: Minimum Relative [[shannon-entropy|Entropy]], Why Tier-1 Funds Use It, Related Topics, Prior, Ranking Signals, Kullback-Leibler (KL) Divergence, The Optimization Problem, Visualization: Shifting the Distribution, normally distributed, linear
- References: bayesian-black-litterman, convex-optimization-trading, finance/shannon-entropy, financial-entropy
- Backlinks: information-geometry-finance

## Entity: kelly-jump-diffusion
- Title: Kelly Criterion with Jump-Diffusion
- Category: Portfolio
- Language: en
- Key Concepts: Geometric Brownian Motion (GBM), jumps, Jumps, Visualization: The Jump-Aware Curve, You are bankrupt., The Bankruptcy Constraint, The Modified Kelly Formula, Jump-Diffusion Kelly, Related Topics, Kelly Criterion in Jump-Diffusion Models, The Danger of Continuous Leverage, Why Funds Use Fractional Kelly, negative infinity, The Jump-Diffusion Setup
- References: bayesian-kelly, frtb-es, kelly-criterion, merton-jump-diffusion, merton-portfolio

## Entity: merton-portfolio
- Title: Merton's Portfolio Problem
- Category: Portfolio
- Language: en
- Key Concepts: Kelly Criterion Limit, Risk-free Bond, Risk Premium, constant, Hamilton-Jacobi-Bellman (HJB) Equation, The Elegant Solution, Key Insights from the Formula:, Related Topics, Myopic Behavior, Merton's Portfolio Problem, The Mathematical Setup, Risk Adjustment, Solving via the HJB Equation, Risky Asset (Stock), Visualization: The Optimal Path
- References: geometric-brownian-motion, kelly-criterion, stochastic-control, stochastic-differential-equations
- Backlinks: bayesian-kelly, kelly-jump-diffusion, path-integral-control

## Entity: nonlinear-shrinkage
- Title: Nonlinear Shrinkage of Covariance
- Category: Portfolio
- Language: en
- Key Concepts: Nonlinear Shrinkage (2017), Nonlinear Shrinkage, Linear vs. Nonlinear Shrinkage, Hilbert Transform, each eigenvalue, Linear Shrinkage (2004), Stability, Transaction Costs, Nonlinear Shrinkage of Covariance (Ledoit-Wolf), The Mathematical Mechanism, Why Citadel Uses It, Visualization: Eigenvalue Cleaning, Related Topics, The Eigenvalue Distortion (Marchenko-Pastur), Random Matrix Theory (RMT)
- References: eigenvalues-eigenvectors, finance/markowitz-mean-variance, finance/random-matrix-theory, math/spectral-theory-operators

## Entity: universal-portfolios
- Title: Universal Portfolios
- Category: Portfolio
- Language: en
- Key Concepts: Universal Portfolios, Cover's Algorithm, Practical Limitations, sublinear regret, best constant-rebalanced portfolio (BCRP), MCMC sampling, The Guarantee (No Regret), Related Topics, ensemble method, Visualization: Catching the Optimum, The Problem Setup, Universal Portfolios (Cover's Algorithm), Constant-Rebalanced Portfolio (CRP)
- References: kelly-criterion, math/information-theory, online-learning-regret

## Entity: finance/bs-market-self-financing
- Title: (B,S)-Market and Self-Financing Strategies
- Category: Pricing
- Language: en
- Key Concepts: Self-Financing, (B,S)-Market and Self-Financing Strategies, Strategy and Capital, discrete stochastic integral, admissible, Admissibility, Related Articles, The Model, discounted, Connection to the broader theory, strategy (portfolio), self-financing strategy, Risky assets, capital, Bank account
- References: brownian-motion, finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/self-similarity-fractality, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability, put-call-parity

## Entity: finance/apt-ross
- Title: Arbitrage Pricing Theory (APT)
- Category: Pricing
- Language: en
- Key Concepts: Comparison with CAPM, factor zoo problem, uncorrelated across assets, Related Articles, Main statement, which, most assets, Arbitrage Pricing Theory (APT), Setup, weaker but more universal, Proof (idea), first, alternative to [[capm|CAPM]], no asymptotic arbitrage in a large market, APT theorem (Ross 1976; Huberman 1982).
- References: fama-macbeth-regression, finance/alpha-stacking, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/markowitz-mean-variance

## Entity: finance/arbitrage-definition
- Title: Arbitrage and Its Absence
- Category: Pricing
- Language: en
- Key Concepts: main filter, Via the set of attainable claims., arbitrage-free, continuous, modelling axiom, Via discounted increments., Strengthenings and Generalizations, Related Articles, Arbitrage and Its Absence, Equivalent Formulations, NA1 / NUPBR (No Unbounded Profit with Bounded Risk), NFLVR (No Free Lunch with Vanishing Risk), Formal Definition, arbitrage opportunity, first fundamental theorem of financial mathematics (FTAP)
- References: finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models
- Backlinks: cost-of-carry, finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/crr-model, finance/ftap-first-fundamental-theorem

## Entity: finance/asymptotic-arbitrage-large-markets
- Title: Asymptotic Arbitrage and Large Markets
- Category: Pricing
- Language: en
- Key Concepts: diversify in the limit, large financial market, Model convergence and contiguity, The large market, asymptotic arbitrage of the first kind, model convergence, Related Articles, Asymptotic Arbitrage and Large Markets, Definition., Asymptotic arbitrage, statistical arbitrage, Practical significance, Contiguity as a criterion, formally arbitrage-free, contiguity
- References: black-scholes, fama-macbeth-regression, finance/alpha-stacking, finance/arbitrage-definition, finance/crr-model, finance/ftap-first-fundamental-theorem
- Backlinks: finance/apt-ross, finance/arbitrage-definition, math/weak-convergence-prokhorov

## Entity: finance/asymptotic-expansion-finance
- Title: Asymptotic Expansions in Finance
- Category: Pricing
- Language: en
- Key Concepts: Prerequisites, asymptotic expansion in the vol-of-vol $\nu$ and time $T$, Analytic Greeks, Asymptotic Expansions in Finance, geodesic volatility, Asymptotic and perturbation methods, Singular Perturbation: Fast Mean-Reverting Stochastic Vol, Related Topics, Model intuition, Small-Time Expansion for Local Volatility, Heat Kernel Expansion, SABR implied volatility formula, Fast calibration, The SABR Formula (Hagan-Woodward), Practical Applications
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/dupire-local-vol, finance/sabr-model, heston-model, manifold-learning
- Backlinks: finance/sabr-model

## Entity: avellaneda-stoikov
- Title: Avellaneda-Stoikov Model
- Category: Pricing
- Language: en
- Key Concepts: The Optimal Spread, Mathematical Framework, Symmetry, Model Setup, Adverse selection component, The Reservation Price, Avellaneda-Stoikov Model, Avellaneda-Stoikov model, Arithmetic Brownian motion, Constant parameters, Reservation Price vs. Inventory, Equity Market Making, Inventory risk component, Overview & Background, Volatility effect
- References: brownian-motion, cox-process, finance/monte-carlo-method, hidden-markov-models, optimal-execution
- Backlinks: brownian-motion, cox-process, finance/hidden-markov-models, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/order-flow-imbalance, finance/vwap-twap, market-microstructure, spread, stochastic-control

## Entity: finance/bachelier-formula
- Title: Bachelier Formula
- Category: Pricing
- Language: en
- Key Concepts: 5 years before, 73 years, coexist, absolute, When to use it, Bachelier's model, Related Articles, revived, arithmetic Brownian motion, Bachelier as the "small-vol limit" of BS, April 2020 episode, Historical significance, complete, Derivation, historical predecessor
- References: attention-mechanisms, black-scholes, brownian-motion, finance/black-scholes-derivations, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, geometric-brownian-motion
- Backlinks: blacks-model, finance/black-scholes-derivations, finance/efficient-market-hypothesis

## Entity: finance/barrier-asian-options
- Title: Barrier and Asian Options
- Category: Pricing
- Language: en
- Key Concepts: Exotic options, Arithmetic Asian Call, Related Articles, Barrier and Asian Options, Geometric Asian, Rubinstein-Reiner Formula (Down-and-Out Call, $H < K$), Barrier Options, Barrier option types:, Down-and-Out Call, Implementation, Asian Options
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/variance-gamma
- Backlinks: brownian-bridge, finance/upper-lower-hedging-prices

## Entity: blacks-model
- Title: Black's Model (1976)
- Category: Pricing
- Language: en
- Key Concepts: Black's Model for Caplets, Derivation Under the Forward Measure, Normal (Bachelier) Variant, shifted, Commodity options, cap, Black's model, Implied Volatility Conventions, Black's Model for Swaptions, Applications, Interest rate derivatives, Related Topics, caplet, Python Implementation, payer swaption
- References: black-scholes, finance/bachelier-formula, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/sabr-model, finance/swaps, finance/volatility-surface, heston-model
- Backlinks: cost-of-carry, risk-neutral-valuation

## Entity: black-scholes
- Title: Black-Scholes Model
- Category: Pricing
- Language: en
- Key Concepts: Mathematical Framework, Option Price vs Spot Price, Greeks, Risk Management, Constant volatility, European exercise, Delta Hedging, Gamma-Theta tradeoff, Key Properties & Assumptions, No dividends, The Greeks, Continuous hedging, Log-normality, Local volatility (Dupire, 1994), Convertible Bond Pricing
- References: brownian-motion, exotic-options, finance/monte-carlo-method, finance/sabr-model, geometric-brownian-motion, heston-model, numerical-pde-finance
- Backlinks: arma-models, automatic-differentiation, bayesian-black-litterman, blacks-model, brownian-motion, change-of-variables, convertible-bonds, convex-optimization-trading, deep-galerkin, dv01, fama-macbeth-regression, feynman-kac, finance/asymptotic-arbitrage-large-markets, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/barrier-asian-options, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/credit-risk-models, finance/crr-model, finance/delta-hedging-practice, finance/dispersion-trading, finance/energy-commodity-derivatives, finance/follmer-schweizer, finance/free-boundary-american, finance/girsanov-semimartingales, finance/heston-model, finance/levy-esscher-continuous, finance/libor-market-model, finance/longstaff-schwartz, finance/merton-jump-diffusion, finance/monte-carlo-method, finance/nelson-siegel-svensson, finance/optimal-stopping-american, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/stefan-problem-american, finance/swaps, finance/variance-swaps-vix, finance/volatility-surface, garman-kohlhagen, geometric-brownian-motion, greeks-options, lln-clt, math/martingale-representation, ml-options-pricing, model-free-rl-factors, multivariable-calculus, numeraire-invariant-hedging, numerical-pde-finance, option-strategies, ornstein-uhlenbeck-process, pinns, put-call-parity, regime-switching-factors, risk-neutral-valuation, sharpe-ratio-statistics, survival-risk-prediction, svi-model, taylor-series, ts-cs-factor-analysis, volatility-arbitrage, volatility-smile

## Entity: finance/bond-options-gaussian
- Title: Bond Options in Gaussian Models
- Category: Pricing
- Language: en
- Key Concepts: Change of measure: the forward measure $T$, asset, observed zero-coupon yield curve, Bond Options in Gaussian Models, Zero-coupon bond price, Bond option, Jacobs-Jones formula (1986), Related Articles, The Vasicek model, negative, HJM framework, American, The Hull-White model, discount rate, exactly the [[black-scholes|Black-Scholes formula]]
- References: black-scholes, brownian-motion, dv01, finance/cir-hull-white, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american
- Backlinks: finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/interest-rate-term-structure, finance/libor-market-model, finance/short-rate-models, finance/stefan-problem-american

## Entity: finance/bootstrapping-yield-curve
- Title: Bootstrapping the Yield Curve
- Category: Pricing
- Language: en
- Key Concepts: Turn-of-Year Effects, Prerequisites, Long End: Swaps (2Y to 50Y), separate curves, Bond relative value, Bootstrapping the Yield Curve, Model calibration, Input Instruments, Middle: Futures or FRAs (3M to 2Y), Projection curve, Yield curve bootstrapping, Related Topics, bootstrap equation, Swap pricing, Short End: Deposits (O/N to 12M)
- References: finance/bond-options-gaussian, finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, libor-market-model
- Backlinks: finance/nelson-siegel-svensson, finance/swaps, multi-curve-framework

## Entity: finance/capm
- Title: CAPM (Capital Asset Pricing Model)
- Category: Pricing
- Language: en
- Key Concepts: Conditional and intertemporal extensions, [[ftap-first-fundamental-theorem|FTAP]], Alpha is the bread and butter of the active management industry, alpha, they all hold the same optimal risky portfolio, relative market capitalizations, Value, Security Market Line (SML), starting point, Conditional CAPM., Beta vs. return, Intertemporal CAPM (ICAPM), "asset risk premium" = "beta" × "market risk premium", Related Articles, Size
- References: fama-macbeth-regression, finance/apt-ross, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: finance/apt-ross, finance/efficient-market-hypothesis, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/caps-floors-swaptions
- Title: Caps, Floors and Swaptions
- Category: Pricing
- Language: en
- Key Concepts: Prerequisites, Cap vol surface, cube, European Swaptions, cap, Black Vol vs Normal Vol, Black's Formula for Swaptions, HJM to the Full Cube, Related Articles, Hull-White to Caps, Skew and smile, caplet, Cap-Floor Parity, SOFR transition, Day count conventions
- References: black-scholes, finance/bond-options-gaussian, finance/sabr-model, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, cost-of-carry, finance/change-of-numeraire, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/change-of-numeraire
- Title: Change of Numeraire
- Category: Pricing
- Language: en
- Key Concepts: Choose the numeraire, change of numeraire, Evaluate, Prerequisites, Quanto Adjustment, Standard Numeraire Choices, Compute the Radon-Nikodym derivative, Radon-Nikodym Derivative Between Measures, The Fundamental Theorem, numeraire-invariance principle, numeraire, Related Topics, The T-Forward Measure, Key Identities Summary, The Swap Measure and Swaptions
- References: black-scholes, brownian-motion, finance/caps-floors-swaptions, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/complete-incomplete-markets
- Title: Complete and Incomplete Markets. Second Fundamental Theorem
- Category: Pricing
- Language: en
- Key Concepts: none, What to do on an incomplete market, incomplete, Complete and Incomplete Markets. Second Fundamental Theorem, Proof idea, Minimal martingale measure, Theorem., Related Articles, Super-hedging, $\Leftarrow$ (uniqueness $\Rightarrow$ completeness)., Complete:, either a single point, Pricing a claim, completeness, equivalent martingale measure is unique
- References: finance/bs-market-self-financing, finance/crr-model, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion, heston-model, optional-decomposition
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/crr-model, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: convertible-bonds
- Title: Convertible Bonds
- Category: Pricing
- Language: en
- Key Concepts: Greeks, time value, Soft call (conditional call), Embedded Features, Premium, Payoff Structure, Credit mispricing, Structured products, Conversion Price, Conversion Ratio, continuation value, Put feature, convertible bond, Hard call protection, Rho
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/xva, heston-model, partial-differential-equations
- Backlinks: numerical-pde-finance

## Entity: finance/copula-models
- Title: Copula Models
- Category: Pricing
- Language: en
- Key Concepts: Mathematical Framework, Gaussian, Tail Dependence Coefficients, Uniqueness, Copula Estimation, Student-t Copula, Tail Dependence Comparison, dependence structure, Key Properties & Assumptions, Insurance Cat Bonds, Vine copulas (pair-copula constructions), upper tail dependence coefficient, Overview & Background, Related Topics, Dynamic copulas (Patton, 2006)
- References: cornish-fisher-cvar, cox-process, extreme-value-theory, finance/value-at-risk, finance/xva

## Entity: cost-of-carry
- Title: Cost of Carry
- Category: Pricing
- Language: en
- Key Concepts: FX forwards, Contango and Backwardation, Stock with continuous dividend yield $q$, Index futures fair value, Financial Assets, Cost of Carry Components, Stock with discrete dividends, When Cost of Carry Breaks Down, Backwardation, Contango, The General Formula, No counterparty risk, Applications, basis, Related Topics
- References: blacks-model, finance/arbitrage-definition, finance/caps-floors-swaptions, finance/swaps, finance/xva, risk-neutral-valuation
- Backlinks: finance/swaps

## Entity: finance/crr-model
- Title: Cox-Ross-Rubinstein Binomial Model (CRR)
- Category: Pricing
- Language: en
- Key Concepts: Claim., Convergence to Black-Scholes, Martingale measure, binomial formula, Replicating portfolio (hedging), complete, Related Articles, Cox-Ross-Rubinstein Binomial Model (CRR), Model, true, working tool, Why this matters in practice, No-arbitrage condition, European option price, discrete delta hedging
- References: black-scholes, finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/black-scholes-derivations, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/stefan-problem-american, math/central-limit-theorem, math/discrete-markov-chains, math/optimal-stopping-markov, math/weak-convergence-prokhorov

## Entity: finance/delta-hedging-practice
- Title: Delta Hedging in Practice
- Category: Pricing
- Language: en
- Key Concepts: Vega Hedging and Greeks-Neutral Portfolios, Leland (1985) Adjusted Volatility, Continuous vs Discrete Hedging, Greeks-neutral portfolio, total P&L of a delta-hedged position, Vega risk, The Ideal, Practical Challenges, The Cost of Rebalancing, Hedging Error vs Rebalancing Frequency, Discrete Rebalancing Error, Related Topics, Gamma risk, Gamma Scalping, Hedging Frequency Optimization
- References: black-scholes, finance/variance-swaps-vix, finance/volatility-surface, greeks-options, heston-model, option-strategies
- Backlinks: deep-hedging, greeks-options

## Entity: finance/discrete-girsanov-esscher
- Title: Discrete Girsanov and the Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: The Esscher transform: general case, Discrete Girsanov theorem., Idea., Why have both, Related Articles, Esscher transform, Esscher, Discrete Girsanov and the Esscher Transform, minimum Esscher measure, mean shift, Conditional Esscher., arbitrary, how, explicit, Discrete Girsanov: the conditionally Gaussian case
- References: finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion
- Backlinks: finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous

## Entity: finance/dupire-local-vol
- Title: Dupire Local Volatility Model
- Category: Pricing
- Language: en
- Key Concepts: calibrated once, Local Vol vs Stochastic Vol, Local Volatility (Dupire, 1994), Related Articles, Dupire Equation, Dupire Local Volatility Model, Implementation
- References: finance/rough-volatility, finance/sabr-model, finance/variance-swaps, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/black-scholes-derivations, finance/variance-swaps, finance/volatility-surface, lsv-model, volatility-smile

## Entity: finance/efficient-market-hypothesis
- Title: Efficient Market Hypothesis (EMH)
- Category: Pricing
- Language: en
- Key Concepts: Critique and revision, behavioural finance, Connection to the martingale property, Strong form., publicly available, Momentum, Herding and bubbles, Efficient Market Hypothesis (EMH), Related Articles, Adaptive Market Hypothesis (AMH), Value anomaly, historical bridge, EMH and algorithmic trading, FTAP, under the original measure
- References: brownian-motion, fama-macbeth-regression, finance/apt-ross, finance/bachelier-formula, finance/capm, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: causal-inference, finance/apt-ross, finance/capm, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/energy-commodity-derivatives
- Title: Energy & Commodity Derivatives
- Category: Pricing
- Language: en
- Key Concepts: Weather Derivatives, Price spikes, Storage as a Real Option, Mean reversion, Scarcity dynamics, Electricity Markets, Prerequisites, Price floor at zero, Backwardation, Contango, equilibrium price, price ceiling, Emission Permits, mean-reverting GBM, Regime switching
- References: black-scholes, brownian-motion, finance/levy-processes, finance/optimal-stopping-american, finance/real-options, finance/swaps
- Backlinks: finance/real-options

## Entity: finance/ftap-first-fundamental-theorem
- Title: First Fundamental Theorem (FTAP)
- Category: Pricing
- Language: en
- Key Concepts: Statement (discrete case), risk-neutral measure, equivalent martingale measure, Related Articles, arbitrage price, Theorem (Harrison-Pliska, 1981; Dalang-Morton-Willinger)., geometric, The crucial point:, Pricing a derivative via the martingale measure, fails, Continuous time: NFLVR, Historical note, First Fundamental Theorem (FTAP), Construction., Proof idea: necessity ($\Rightarrow$)
- References: finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/apt-ross, finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/capm, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/efficient-market-hypothesis, finance/girsanov-semimartingales, finance/optimal-stopping-american, finance/self-similarity-fractality, finance/semimartingale-models, finance/stefan-problem-american, finance/upper-lower-hedging-prices, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optional-decomposition, risk-neutral-valuation

## Entity: finance/free-boundary-american
- Title: Free Boundary Problem for American Options
- Category: Pricing
- Language: en
- Key Concepts: free boundary problem, Finite Differences (PDE), Numerical Methods, Real options, Connection to Optimal Stopping, Prerequisites, Smooth Pasting Conditions, Mortgage prepayment, Perpetual American Put, continuation region, perpetual, Exercise Boundary Shape, Early Exercise Premium, Related Topics, American options
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/longstaff-schwartz, finance/monte-carlo-method
- Backlinks: finance/optimal-stopping-american

## Entity: garman-kohlhagen
- Title: Garman-Kohlhagen Model
- Category: Pricing
- Language: en
- Key Concepts: Delta Conventions, Emerging market FX, Setup and Assumptions, Garman-Kohlhagen (GK) model, Put-Call Symmetry in FX, 25-delta risk reversal, Spot Delta, Related Topics, Vanna-Volga Method, Carry trade options, Garman-Kohlhagen Model, Central bank intervention, Garman-Kohlhagen Greeks, Practical Applications, ATM volatility
- References: black-scholes, greeks-options, heston-model, option-strategies, put-call-parity
- Backlinks: option-strategies, put-call-parity

## Entity: finance/girsanov-semimartingales
- Title: Girsanov's Theorem for Semimartingales
- Category: Pricing
- Language: en
- Key Concepts: Theorem (Jacod-Mémin)., The semimartingale version, Girsanov's Theorem for Semimartingales, Application to Black-Scholes, what exactly, The classical Brownian case, Novikov's condition, the same, path-wise invariant, Related Articles, density process, drift $B$ and jump compensator $\nu$ change, Theorem (Girsanov, 1960)., Jump part and incompleteness, unchanged
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/levy-esscher-continuous, finance/semimartingale-models, finance/shannon-entropy, heston-model
- Backlinks: feynman-kac, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/change-of-numeraire, finance/discrete-girsanov-esscher, finance/hjm-framework, finance/levy-esscher-continuous, finance/semimartingale-models, finance/short-rate-models, innovation-process, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/conditional-expectation-sigma, math/contiguity-measures, math/convergence-stochastic-integrals, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, nonlinear-filtering, radon-nikodym, risk-neutral-valuation

## Entity: finance/hjm-framework
- Title: HJM Framework
- Category: Pricing
- Language: en
- Key Concepts: Practical Limitations, Short-Rate Models as Special Cases, Prerequisites, finite-dimensional Markov process, HJM drift restriction, Key Result, HJM Framework, Related Topics, Volatility specification, Heath-Jarrow-Morton (HJM) framework, Calibration, Computational cost, Markovian HJM: Ritchken-Sankarasubramanian, Monte Carlo Implementation, HJM drift condition
- References: brownian-motion, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps, stochastic-differential-equations

## Entity: finance/heston-model
- Title: Heston Model
- Category: Pricing
- Language: en
- Key Concepts: Calibration Procedure, Greeks, Semi-Analytic Pricing via Characteristic Function, Volatility Dynamics Visualization, Volatility Smile, Calibration instability, Prerequisites, Carr-Madan FFT Pricing, Structured products, Dynamics (SDEs), Risk management, Parameters, Exotic options pricing, Limitations and Extensions, Rough volatility
- References: black-scholes, finance/particle-filter, finance/sabr-model, garch-models, geometric-brownian-motion
- Backlinks: heston-fourier, heston-model

## Entity: finance/interest-rate-term-structure
- Title: Interest Rate Term Structure
- Category: Pricing
- Language: en
- Key Concepts: Derivatives pricing, Forward Rates, term structure of interest rates, Affine Term Structure Models, Curve trading, Bond relative value, Risk management, Par Rates, Term Premium Estimation, Interest Rate Term Structure, Applications, preferred maturities, Related Topics, The Inverted Yield Curve, Market Segmentation
- References: dv01, finance/bond-options-gaussian, finance/libor-sofr, finance/nelson-siegel-svensson, finance/short-rate-models, finance/swaps
- Backlinks: finance/nelson-siegel-svensson, finance/short-rate-models, multi-curve-framework

## Entity: optional-decomposition
- Title: Kramkov Optional Decomposition
- Category: Pricing
- Language: en
- Key Concepts: super-hedging duality, self-financing capital, Doob-Meyer recap, Kramkov Optional Decomposition, universal, Connection to duality theory, super-hedging strategy, Lagrangian duality, Related Topics, Difference from Doob-Meyer., simultaneously under every EMM, Overview, Dual, Primal, the values of these two problems are equal
- References: finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/complete-incomplete-markets, finance/optimal-stopping-american, finance/upper-lower-hedging-prices, math/backward-sde

## Entity: finance/libor-market-model
- Title: LIBOR Market Model (BGM)
- Category: Pricing
- Language: en
- Key Concepts: Calibration Procedure, Comparison with Other Models, Forward LIBOR Rates, Swaption Pricing — Rebonato's Approximation, Prerequisites, Swaption vols, Brace-Gatarek-Musiela (BGM) model, Range accruals, [[stochastic-differential-equations|SDE]] under the Forward Measure, Caplet Pricing — Black's Formula, Related Topics, SOFR transition, Bermudan swaptions, Correlation, CMS products
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/monte-carlo-method, finance/swaps, hjm-framework, stochastic-differential-equations

## Entity: lsv-model
- Title: Local Stochastic Volatility (LSV)
- Category: Pricing
- Language: en
- Key Concepts: Stochastic Volatility (SV), Local Stochastic Volatility (LSV), Particle Methods (Monte Carlo with interacting particles), The LSV Synthesis, Related Topics, Visualization: The Volatility Hierarchy, Why Tier-1 Banks Require LSV, The Flaws of Predecessors, Local Leverage Function, The Calibration Nightmare (Particle Methods), Local Volatility (LV), Stochastic Volatility (SV) e.g., Heston, Local Volatility (LV) e.g., Dupire
- References: finance/dupire-local-vol, heston-model, hmm-particle-filters
- Backlinks: mcmc, path-dependent-volatility

## Entity: finance/levy-esscher-continuous
- Title: Lévy Processes and the Continuous Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: Brownian motion, Calibration to the market, Stationary increments, Symmetric $\alpha$-stable process, continuous-time Esscher transform, Variance Gamma, CGMY, The Esscher martingale measure, Related Articles, Independent increments, Continuous-time Esscher transform, price models with heavy tails and jumps, exponential Lévy model, Poisson process, exponentially re-weights
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/fft, finance/girsanov-semimartingales, finance/semimartingale-models, finance/shannon-entropy, geometric-brownian-motion, heston-model
- Backlinks: finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/semimartingale-models, finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/markowitz-mean-variance
- Title: Markowitz Mean-Variance Portfolio Theory
- Category: Pricing
- Language: en
- Key Concepts: hyperbola, Gaussianity., efficient frontier, Sharpe ratio, Markowitz problem:, heart, Related Articles, Black-Litterman (1992), maximum-Sharpe portfolio, pre-stochastic, Sensitivity to inputs., straight line, pre-arbitrage, Weaknesses of classical Markowitz:, Efficient frontier
- References: bayesian-black-litterman, convex-optimization-trading, cornish-fisher-cvar, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/stylized-facts-returns
- Backlinks: convex-analysis, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/stylized-facts-returns, information-geometry-finance, math/law-of-large-numbers, nonlinear-shrinkage, stochastic-control

## Entity: martingale-optimal-transport
- Title: Martingale Optimal Transport
- Category: Pricing
- Language: en
- Key Concepts: model-free, Primal Problem, Dual Problem (Super-Replication), Martingale Optimal Transport, The Setup: Model-Free Pricing, Connection to Optimal Transport, Related Topics, Martingale, Why Citadel and Tier-1 Banks Use It, Visualization: Sand vs. Martingale Sand, Martingale Optimal Transport (MOT), The Primal and Dual Problems
- References: convex-optimization-trading, convexity, martingale, optimal-transport, risk-neutral-valuation
- Backlinks: convexity, martingale

## Entity: finance/nelson-siegel-svensson
- Title: Nelson-Siegel-Svensson Yield Curve Model
- Category: Pricing
- Language: en
- Key Concepts: Calibration, Nelson-Siegel-Svensson Yield Curve Model, Uses, Related Articles, Duration management, Bond pricing, Svensson Extension (1994), Nelson-Siegel (1987), Instantaneous Forward Rate, Nelson-Siegel-Svensson (NSS), Example, Typical Curve Shapes, Central bank publication, XVA
- References: black-scholes, finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/oas, finance/swaps, finance/xva, heston-model
- Backlinks: finance/bootstrapping-yield-curve, finance/cir-hull-white, finance/interest-rate-term-structure, finance/libor-sofr

## Entity: numeraire-invariant-hedging
- Title: Numeraire-Invariant Quadratic Hedging
- Category: Pricing
- Language: en
- Key Concepts: Galtchouk-Kunita-Watanabe (GKW) Decomposition, Deep hedging, Advanced Context, Utility-based alternatives, Variance-Optimal Martingale Measure (VOMM), Optimality, Limitations and Extensions, Related Topics, Key Properties, Model dependency, Parameter Table, Connection to delta hedging, Visualization, Quadratic Hedging, Numeraire Invariance
- References: black-scholes, finance/hierarchical-risk-parity, finance/levy-processes, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/follmer-schweizer

## Entity: optimal-execution
- Title: Optimal Execution: Almgren-Chriss
- Category: Pricing
- Language: en
- Key Concepts: Market Impact, Dark Pools, The Mathematical Framework, Price Risk (Volatility), Almgren-Chriss model, Price Risk, Exponential Decay, Optimal Execution: The Almgren-Chriss Model, Temporary Impact, Related Topics, Risk-Neutral ($\lambda \to 0$), Deep RL Execution, Modern Extensions, Permanent Impact, The Fundamental Trade-off
- References: deep-rl-execution, stochastic-control, vpin
- Backlinks: ai-market-making, amihud-illiquidity, amm-mechanics, avellaneda-stoikov, cross-impact, deep-rl-execution, finance/dark-pools, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/vwap-twap, futures-hedging, kyle-model, liquidation-signals, lob-prediction, market-impact, market-microstructure, path-integral-control, reinforcement-learning, rl-trader, stochastic-control, vpin

## Entity: finance/optimal-stopping-american
- Title: Optimal Stopping and American Options
- Category: Pricing
- Language: en
- Key Concepts: at any time, strictly more expensive, Snell envelope, Connection to PDE: the Stefan problem, Hedging an American option, continuous, The payoff, Optimal Stopping and American Options, Theorem., Stefan problem, put, Related Articles, supermartingale characterization, Proof (sketch)., The Snell envelope
- References: black-scholes, finance/crr-model, finance/free-boundary-american, finance/ftap-first-fundamental-theorem, finance/stefan-problem-american, finance/upper-lower-hedging-prices, optional-decomposition
- Backlinks: feynman-kac, finance/crr-model, finance/energy-commodity-derivatives, finance/real-options, finance/stefan-problem-american, math/discrete-martingales, math/optimal-stopping-markov, numerical-pde-finance, optional-decomposition, stochastic-control

## Entity: greeks-options
- Title: Option Greeks
- Category: Pricing
- Language: en
- Key Concepts: Pin risk, Portfolio aggregation, Barrier options, Greeks, Higher-Order Greeks, Theta, Greeks for Exotic Options, Option Greeks, Rho, Delta, Related Topics, Digital options, Discrete hedging, First-Order Greeks, Vega Hedging
- References: black-scholes, dv01, exotic-options, finance/delta-hedging-practice, geometric-brownian-motion, heston-model, option-strategies, put-call-parity
- Backlinks: finance/delta-hedging-practice, finance/variance-swaps-vix, frtb-sa-mr, garman-kohlhagen, option-strategies, put-call-parity, volatility-smile

## Entity: option-strategies
- Title: Option Strategies
- Category: Pricing
- Language: en
- Key Concepts: Bear Put Spread, Butterfly and Condor, Greeks, Breakeven, Early exercise, Ratio Spreads, Straddle, Butterfly Spread, Strangle, Related Topics, Margin, Iron Condor, Volatility Strategies, diagonal spread, Bull Call Spread
- References: black-scholes, garman-kohlhagen, greeks-options, heston-model, put-call-parity
- Backlinks: finance/delta-hedging-practice, garman-kohlhagen, greeks-options, put-call-parity

## Entity: pairs-trading
- Title: Pairs Trading Strategy
- Category: Pricing
- Language: en
- Key Concepts: Python: Full Pairs Trading Backtest Pipeline, Win rate, Transaction costs and borrow, Multivariate, Risk: Cointegration Breakdown and Crowding, Pairs Trading, cointegrated, cointegration breakdown, Limitations and Extensions, expected return per trade, Pairs Trading Strategy, Kalman filter, Related Topics, Parameter Table, Z-Score
- References: finance/cointegration, finance/monte-carlo-method, finance/particle-filter, finance/value-at-risk, mcmc, ornstein-uhlenbeck-process
- Backlinks: fastest-mean-reversion, fractional-cointegration, ornstein-uhlenbeck-process, pca-statarb, vine-copulas

## Entity: path-dependent-volatility
- Title: Path-Dependent Volatility
- Category: Pricing
- Language: en
- Key Concepts: Moving Average, 3. Calibration via Particle Methods, realized path, path-dependent exotic options, Running Maximum, Julien Guyon, Visualization: Path-Memory effect, Path-Dependent Volatility: Beyond Local Volatility, Path-Dependent Volatility (PDV), 1. The Limitation of Dupire's Model, Related Topics, Interacting Particle System, McKean-Vlasov, Advantage, 4. Connection to Signature-based Models
- References: hmm-particle-filters, lsv-model, neural-sdes-finance, rough-paths, signature-based-models
- Backlinks: signature-based-models

## Entity: put-call-parity
- Title: Put-Call Parity
- Category: Pricing
- Language: en
- Key Concepts: Synthetic Positions, American Options, Arbitrage from Violations, Forward Version, Extracting Market Information, Portfolio A, Case 2, Implied dividends, Futures Options, no-arbitrage band, Vol surface construction, No-Arbitrage Proof, Related Topics, Extensions, Portfolio B
- References: black-scholes, finance/bs-market-self-financing, garman-kohlhagen, greeks-options, option-strategies
- Backlinks: garman-kohlhagen, greeks-options, option-strategies

## Entity: finance/follmer-schweizer
- Title: Quadratic Hedging and the Föllmer-Schweizer Approach
- Category: Pricing
- Language: en
- Key Concepts: Stochastic volatility, Mean-Variance Hedging, Cost process, variance-optimal martingale measure, Jumps, Quadratic Hedging and the Föllmer-Schweizer Approach, Related Articles, Methods Comparison, incomplete markets, Key property, Föllmer-Schweizer Decomposition, Minimal Martingale Measure (MMM), Local Risk-Minimisation (Schweizer 1991), Minimal Martingale Measure, Motivation: Incomplete Markets
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, heston-model, numeraire-invariant-hedging
- Backlinks: finance/complete-incomplete-markets, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: quantum-amplitude-estimation
- Title: Quantum Amplitude Estimation (QAE)
- Category: Pricing
- Language: en
- Key Concepts: 1,000 times, Payoff Encoding, quadratic speedup, Grover Operator ($\mathcal{Q}$), The Quadratic Speedup, Visualization: Convergence Speed, Related Topics, Monte Carlo (MC) Simulation, Quantum Amplitude Estimation (QAE), State Preparation, Quantum Amplitude Estimation (QAE) in Finance, Near-Term Implementation (NISQ), Iterative QAE (IQAE), How QAE Works, Maximum Likelihood QAE (ML-QAE)
- References: finance/monte-carlo-method, finance/xva, quantum-math
- Backlinks: quantum-math

## Entity: finance/real-options
- Title: Real Options
- Category: Pricing
- Language: en
- Key Concepts: Oil exploration, Real options, Suboptimal exercise, Technology investment, Prerequisites, Pricing Framework, Option to abandon, option to invest later, Pharmaceutical R&D, NPV vs Real Options, dividend-like yield, Types of Real Options, Applications, Option to expand, equilibrium approach
- References: black-scholes, brownian-motion, finance/energy-commodity-derivatives, finance/optimal-stopping-american, finance/swaps, heston-model
- Backlinks: finance/energy-commodity-derivatives

## Entity: risk-neutral-valuation
- Title: Risk-Neutral Valuation
- Category: Pricing
- Language: en
- Key Concepts: market price of risk, equivalent martingale measure, risk-neutral, Option pricing, The Replication Argument, Incomplete Markets, Monte Carlo simulation, PDE methods, not unique, Applications, Interest rate derivatives, Related Topics, Risk-neutral valuation, Connection to Girsanov's Theorem, Fundamental Theorems of Asset Pricing
- References: black-scholes, blacks-model, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/monte-carlo-method, finance/shannon-entropy, finance/swaps, finance/xva, geometric-brownian-motion, heston-model, math/doleans-dade-exponential, partial-differential-equations
- Backlinks: cost-of-carry, feynman-kac, martingale, martingale-optimal-transport, stochastic-processes

## Entity: finance/sabr-model
- Title: SABR Model
- Category: Pricing
- Language: en
- Key Concepts: Mathematical Framework, $\rho$ controls skew, Arbitrage violations, Hagan's Asymptotic Implied Volatility Formula, Normal SABR, Calibration instability, Real-time risk, Prerequisites, Smile dynamics, Parameters, Limitations and Extensions, $\beta$ determines backbone, density-projection, SABR Model, Stochastic Interest Rates (SABR-LMM)
- References: black-scholes, finance/asymptotic-expansion-finance, finance/oas, finance/swaps, heston-model, volatility-forecasting
- Backlinks: black-scholes, blacks-model, finance/asymptotic-expansion-finance, finance/caps-floors-swaptions, finance/dispersion-trading, finance/dupire-local-vol, finance/heston-model, finance/oas, finance/rough-volatility, finance/swaps, finance/volatility-surface, volatility-smile

## Entity: finance/semimartingale-models
- Title: Semimartingale Models and Predictable Characteristics
- Category: Pricing
- Language: en
- Key Concepts: Connection to Girsanov, [[geometric-brownian-motion|GBM]], not unique, Theorem (NFLVR-FTAP)., Related Articles, semimartingale, Why this matters, Definition., minimal, semimartingales, special, "stochastic DNA", [[levy-esscher-continuous|Lévy process]], Definition, Semimartingale Models and Predictable Characteristics
- References: brownian-motion, cox-process, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/hawkes-process, finance/levy-esscher-continuous, geometric-brownian-motion, heston-model
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, math/triangular-arrays-processes, optional-decomposition

## Entity: finance/black-scholes-derivations
- Title: Several Derivations of the Black-Scholes Formula
- Category: Pricing
- Language: en
- Key Concepts: pedagogically transparent, none, Idea., constant, classical heat equation, Derivation 3: Binomial limit (CRR), Martingale, Derivation 2: Martingale (risk-neutral measure), What this shows:, Heat equation, limit of elementary computations, Related Articles, PDE derivation, baseline reference, that
- References: black-scholes, finance/bachelier-formula, finance/crr-model, finance/dupire-local-vol, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american, geometric-brownian-motion, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/free-boundary-american, finance/stefan-problem-american, math/optimal-stopping-markov

## Entity: finance/short-rate-models
- Title: Short Rate Models
- Category: Pricing
- Language: en
- Key Concepts: Gaussian, Every short rate model implies an HJM model, Affine Bond Pricing, Short rate models, Prerequisites, Lattice Methods, Curve fitting, Cox-Ingersoll-Ross (CIR, 1985), exactly fit the initial term structure, Related Articles, Equilibrium Models, CIR:, Vasicek (1977), Calibration, Volatility calibration
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/girsanov-semimartingales, finance/interest-rate-term-structure, finance/swaps, stochastic-differential-equations
- Backlinks: finance/caps-floors-swaptions, finance/change-of-numeraire, finance/hjm-framework, finance/interest-rate-term-structure

## Entity: finance/stefan-problem-american
- Title: Stefan Problem and American Options
- Category: Pricing
- Language: en
- Key Concepts: PDE form, [[crr-model|CRR binomial tree with early-exercise check]]., Integral equations for $S^*(t)$., Monte Carlo regression (Longstaff-Schwartz, 2001)., Structure of the Stefan problem, Stefan problem, Free-boundary analytics, Related Articles, Stefan Problem and American Options, No closed form for $S^*(t)$ exists., Exercise region, degenerate, Setup for the American put, Numerical methods, smooth pasting condition
- References: black-scholes, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/black-scholes-derivations, finance/bond-options-gaussian, finance/optimal-stopping-american

## Entity: svi-model
- Title: Stochastic Volatility Inspired (SVI) Model
- Category: Pricing
- Language: en
- Key Concepts: Stochastic Volatility Inspired (SVI) Model, $b$, Why Parameterize the Surface?, Butterfly Arbitrage, The Raw SVI Formula, Eliminating Arbitrage, Surface SVI (SSVI), $\sigma > 0$, Calendar Arbitrage, Related Topics, Visualization: The Hyperbolic Smile, $\rho \in [-1, 1]$, $m$, $a$, SSVI: Surface SVI
- References: black-scholes, finance/variance-gamma, heston-model

## Entity: finance/swaps
- Title: Types of Swaps
- Category: Pricing
- Language: en
- Key Concepts: plain vanilla IRS, Mathematical Framework, Interest Rate Swap (IRS) Valuation, Counterparty risk, Hedge fund leverage, Relative value trading, Basis risk, Convexity, Par Swap Rate, Limitations and Extensions, Digital/binary swaps, Types of Swaps, Related Topics, DV01, Key Properties
- References: black-scholes, copula-models, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/sabr-model, finance/xva
- Backlinks: blacks-model, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/cir-hull-white, finance/energy-commodity-derivatives, finance/hjm-framework, finance/interest-rate-term-structure, finance/isda-simm, finance/libor-market-model, finance/libor-sofr, finance/nelson-siegel-svensson, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/xva, futures-hedging, risk-neutral-valuation

## Entity: finance/upper-lower-hedging-prices
- Title: Upper and Lower Hedging Prices
- Category: Pricing
- Language: en
- Key Concepts: Interval of consistent prices, Connection to risk aversion, utility indifference pricing, Constructive computation, backward induction, Theorem (price trichotomy)., Definitions, Related Articles, Dual characterization, does, Attainability and exact replication, attainable, infimum, Upper and Lower Hedging Prices, below
- References: finance/barrier-asian-options, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, heston-model, optional-decomposition
- Backlinks: finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, optional-decomposition

## Entity: finance/variance-swaps
- Title: Variance Swaps and Volatility Risk Premium
- Category: Pricing
- Language: en
- Key Concepts: Volatility Risk Premium, variance swap, Carr-Madan Model-Free Replication, Related Articles, Var Swap vs Vol Swap vs VIX Futures, Variance Swaps and Volatility Risk Premium, Implementation, Payoff
- References: finance/bipower-variation, finance/dupire-local-vol, heston-model, volatility-forecasting
- Backlinks: finance/dispersion-trading, finance/dupire-local-vol, finance/variance-swaps-vix, finance/volatility-surface

## Entity: volatility-smile
- Title: Volatility Smile
- Category: Pricing
- Language: en
- Key Concepts: Sticky strike, Definition and Empirical Observation, 2. Jump Diffusion ([[merton-jump-diffusion|Merton Jump-Diffusion]]), crash risk, Commodity options, 25-delta risk reversal, The smile shape varies by asset class:, SVI, SABR, Explanatory Models, No-arbitrage constraints, Equity markets, Sticky Strike vs. Sticky Delta, Excess kurtosis, Equity options
- References: black-scholes, finance/dupire-local-vol, finance/rough-volatility, finance/sabr-model, finance/volatility-surface, greeks-options, heston-model, merton-jump-diffusion
- Backlinks: volatility-arbitrage

## Entity: finance/volatility-surface
- Title: Volatility Surface
- Category: Pricing
- Language: en
- Key Concepts: Sticky strike, Local Volatility via Dupire, Stochastic Volatility Inspired, fatter tails, Prerequisites, skew, Lee's moment formula, Related Articles, Calendar spread constraint, The Smile and Skew, SVI Parameterization (Gatheral), symmetric smile, Practical Calibration Workflow, FX markets, Commodity markets
- References: black-scholes, finance/dupire-local-vol, finance/sabr-model, finance/variance-swaps, geometric-brownian-motion, heston-model
- Backlinks: blacks-model, finance/delta-hedging-practice, finance/variance-swaps-vix, neural-sdes-finance, volatility-smile

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
- Key Concepts: Beta Function, Overview, Gamma Function

## Entity: projects/j-cole-fall-off
- Title: J. Cole — The Fall Off Review
- Category: Projects
- Language: en
- Key Concepts: Brutalism, The Idea, React 19, Framer Motion, Kinetic typography, Status, brutalist, kinetic typography, J. Cole — The Fall Off Review, Stack, TypeScript, Vite, Design Language

## Entity: projects/llm-wiki
- Title: LLM-Wiki
- Category: Projects
- Language: en
- Key Concepts: files the finding back into the vault, Sources, The schema, Stack, The [[llm]], Query, Role separation, Knowledge graph, Content, updates 10–15 notes in the vault, [[llm]]-Wiki, Three operations, compounding artifact, Rendering, Implementation architecture
- References: llm, rag

## Entity: projects/music-results-2025
- Title: Music Results 2025
- Category: Projects
- Language: en
- Key Concepts: Foreign, Inline CSS + styles.css, The Idea, Structure, Stack, Videos, A personal year-in-music archive, `.nojekyll`, Statistics, Editorial brutalism, Music Results 2025, Design, GitHub Pages, Status, Discoveries

## Entity: projects/nyquist
- Title: Nyquist
- Category: Projects
- Language: en
- Key Concepts: What It Can Do, Nyquist, Status, Market Regimes, Macro, Derivatives Pricing, Asset managers, Async data architecture., Banks, Who It's For, Frontend, The Problem, Fixed Income, Meso, Execution & Trading

## Entity: projects/ultima-thule
- Title: Ultima Thule
- Category: Projects
- Language: en
- Key Concepts: Dashboard, What It Can Do, AI Trip Generator, Bucket List & POI Discovery, Maps, Status, Offline navigation rerouting., Dynamic Island Live Activity, Map, @State Trip? goes stale., The Problem, The map is a state machine, not a sheet., SwiftData is unforgiving., Development, One Context, Five Views

## Entity: projects/vibefix
- Title: VibeFix
- Category: Projects
- Language: en
- Key Concepts: Escrow payments, Notifications & email, The code doesn't work., Stack, What's inside, Ratings & reviews, Built-in chat, VibeFix, Frontend, A coder picks it up., No deal protection., Freelancers can't be vetted., Target audience, Architecture, Infrastructure
- References: llm

## Entity: projects/samizdat
- Title: Кто живёт в панельке Хаски?
- Category: Projects
- Language: en
- Key Concepts: Status, Brutal shadows:, Stack, Structure, Design Language, Materials, Motion, Кто живёт в панельке Хаски?, Hero, React 19 + TypeScript, A brutalist samizdat zine about Russian rap., Imprint, Quotes, Tailwind 4, GitHub Pages

## Entity: information-geometry-finance
- Title: Information Geometry in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: The Statistical [[manifold-learning|Manifold]], Related Topics, Riemannian [[manifold-learning|Manifold]], Visualization: Curved Probability Space, Information-Geometric Portfolio Optimization, Fisher Information Metric (FIM), Information Geometry in Finance, Connection to [[shannon-entropy|Entropy]], Application: Portfolio Optimization, Information Geometry, Application: Distance Between Market Regimes, Regime Shifts
- References: entropy-pooling, finance/fisher-transform, finance/markowitz-mean-variance, finance/shannon-entropy, manifold, manifold-learning
- Backlinks: f-divergences, mle

## Entity: path-integral-control
- Title: Path Integral Control in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: Path Integral Control in Finance, Visualization: The Path Integral, Path Integral Control (Path Integral Differential Dynamic Programming - PI-DDP), Soft Actor-Critic (SAC), The Quantum Physics Connection, Related Topics, High-Dimensional Execution, linear Schrödinger-type PDE, Reinforcement Learning, Softmax (or Boltzmann) weighted average, Maximum [[shannon-entropy|Entropy]] RL, The Mathematical Breakthrough, Feynman-Kac Theorem, Applications in High-Frequency Trading
- References: finance/shannon-entropy, merton-portfolio, optimal-execution, quantum-math, reinforcement-learning, stochastic-control

## Entity: quantum-phase-estimation
- Title: Quantum Phase Estimation & Shor's Algorithm
- Category: Quantum
- Language: en
- Key Concepts: Initialization, Shor's Algorithm, Inverse QFT, Quantum Fourier Transform (QFT), Quantum Phase Estimation & Shor's Algorithm, Controlled Unitaries, Quantum Phase Estimation
- References: math/spectral-theory-operators

## Entity: effective-field-theory
- Title: Effective Field Theory (EFT)
- Category: Quantum Physics
- Language: en
- Key Concepts: Core idea, Renormalisation, Examples, NRQED / NRQCD, Why it matters, Naturalness, Effective Field Theory (EFT), Related topics, General relativity, Predictive power without a UV theory, Chiral perturbation theory, Fermi theory of weak interactions
- References: fine-tuning, renormalization-group
- Backlinks: quantum-mechanics

## Entity: many-body-tensor-networks
- Title: Many-Body Problem and Tensor Networks
- Category: Quantum Physics
- Language: en
- Key Concepts: DMRG Algorithm, A. Matrix Product States (MPS), Tensor Networks, MERA (Multi-scale Entanglement Renormalization Ansatz), 5. Applications in Machine Learning, Low-Entanglement [[differential-geometry|Manifold]], 300 qubits, 2. Theoretical Foundation: The Area Law, Related Topics, Quantum Machine Learning, Discrete Spacetime, B. Projected Entangled Pair States (PEPS), 3. Tensor Network Architectures, Entanglement, [[llm]] Compression
- References: llm, math/differential-geometry, quantum-information-entropy, renormalization-group, transformer-architecture
- Backlinks: tensor-decompositions

## Entity: quantum-information-entropy
- Title: Quantum Information and Entropy
- Category: Quantum Physics
- Language: en
- Key Concepts: Holevo's Bound, Von Neumann [[gravitational-entropy|Entropy]], 4. Quantum Communication Limits, Strong Subadditivity, 1 bit, Reduced Density Matrix, Information Theory, Landauer's Principle, Holography, Related Topics, Concavity, Key Mathematical Axioms:, Visualization: Pure vs. Mixed State, Quantum Information and Von Neumann [[gravitational-entropy|Entropy]], Thermodynamics
- References: ads-cft-deep, black-hole-thermodynamics, finance/shannon-entropy, gravitational-entropy, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ads-cft-deep, gff, linear-spaces-basis, many-body-tensor-networks, quantum-math, quantum-mechanics, topological-phases

## Entity: quantum-mechanics
- Title: Quantum Mechanics
- Category: Quantum Physics
- Language: en
- Key Concepts: Many-Worlds Interpretation, Born's Rule, Operators and Observables, Applications, MRI, The Wave Function, Related Topics, Copenhagen Interpretation, Lasers, Uncertainty Principle, Superposition, Quantum Computing, Entanglement, Overview, Mathematical Formalism
- References: effective-field-theory, math/spectral-theory-operators, qft-basic, quantum-entanglement, quantum-information-entropy, schrodinger-equation
- Backlinks: math/functional-analysis

## Entity: topological-phases
- Title: Topological Phases of Matter
- Category: Quantum Physics
- Language: en
- Key Concepts: Non-Abelian Anyons, Chern Number, Integer Quantum Hall Effect, Conductance as Topology, Bulk, Topological Invariant, Topological Phases of Matter, immune to local noise, 1. What is Topological Order?, Visualization: The One-Way Street, 4. Anyons and Non-Abelian Braiding, Abelian Anyons, Symmetry Breaking, Related Topics, Berry Phase
- References: gauge-theory-yang-mills, math/topology-basics, quantum-information-entropy

## Entity: finance/adversarial-stress-testing
- Title: Adversarial Stress Testing
- Category: Risk
- Language: en
- Key Concepts: Mathematical Framework, Prerequisites, Model Validation, Counterparty Risk, Key Properties & Assumptions, Convexity, Adversarial Stress Testing via Generative Models, Overview & Background, Generator, Related Topics, Sequential adversarial testing, Parameter Table, Portfolio Robustness Testing, Discriminator, Limitations & Extensions
- References: attention-mechanisms, convex-optimization-trading, copula-models, extreme-value-theory, finance/gan, finance/monte-carlo-method, finance/value-at-risk
- Backlinks: finance/nash-equilibrium, generative-scenario-models

## Entity: amihud-illiquidity
- Title: Amihud Illiquidity Ratio
- Category: Risk
- Language: en
- Key Concepts: Sadka (2006) decomposition, Mathematical Framework, Signed vs. unsigned impact, Risk Management, liquidity risk premium, Key Properties & Assumptions, High-frequency noise, Market-wide illiquidity, Liquidity-Adjusted Portfolio Construction, Overview & Background, Pastor-Stambaugh (2003) liquidity factor, Liquidity Risk Factor, Intraday aggregation, Amihud Ratio vs Market Stress, Related Topics
- References: finance/levy-processes, finance/market-impact-scaling, finance/value-at-risk, optimal-execution, volatility-forecasting
- Backlinks: finance/kyle-lambda, roll-model

## Entity: bayesian-black-litterman
- Title: Bayesian Black-Litterman Portfolio Optimization
- Category: Risk
- Language: en
- Key Concepts: Mathematical Framework, prior, Equilibrium Market Prior, Prior dominates with no views, [[hierarchical-risk-parity]], Prerequisites, Step 2: Investor Views, Factor Investing, View consistency, Theil-Goldberger mixed estimator, Bayesian Black-Litterman Portfolio Optimization, Diversification, Equilibrium prior may be wrong, Overview & Background, Related Topics
- References: black-scholes, convex-optimization-trading, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: alpha-factor-discovery, bayesian-inference, convex-optimization-trading, entropy-pooling, finance/markowitz-mean-variance

## Entity: finance/black-swan-scenarios
- Title: Black Swan Scenario Generator
- Category: Risk
- Language: en
- Key Concepts: Critical error, 1. EVT Statistical Extrapolation, 2. Scaled Historical Scenarios, Use stressed correlations, 3. Narrative Hypothetical Scenarios, Implementation, Stressed Correlations, Extreme Value Theory (EVT), Black Swan Scenario Generator, black swan scenario generator, Related Articles, Back-test, Theoretical Foundation, Best Practices, Never rely solely on VaR
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/systemic-contagion-debtrank, finance/value-at-risk
- Backlinks: lln-clt

## Entity: finance/cdo-tranches
- Title: CDO Tranches
- Category: Risk
- Language: en
- Key Concepts: Stochastic recovery, Correlation and Pricing, The Correlation Smile, Compound Correlation, Tranche Structure, Collateral, Prepayment risk, Base Correlation, Gaussian Copula Model, The Li (2000) Framework, Collateralized Debt Obligation (CDO), Transparency, Student-t copula, Mezzanine, Bespoke tranches
- References: copula-models, finance/coherent-risk-measures, finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization, finance/value-at-risk
- Backlinks: finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization

## Entity: cs01
- Title: CS01 (Credit Spread 01)
- Category: Risk
- Language: en
- Key Concepts: Regulatory Capital, Mathematical Framework, Scenario CS01, Credit DV01, Full Spread Curve CS01, CS01, spread convexity, Basis risk, Convexity, Bond CS01 via Duration, Risky PV01, Relative Value, DVCS, Overview & Background, Related Topics
- References: copula-models, cox-process, dv01, finance/swaps, finance/xva
- Backlinks: cox-process, dv01, finance/swaps, finance/xva

## Entity: cva-wrong-way-risk
- Title: CVA and Wrong-Way Risk
- Category: Risk
- Language: en
- Key Concepts: What is CVA?, Wrong-Way Risk, Credit Valuation Adjustment (CVA), positively correlated, Jump-to-Default Models, FRTB and WWR, Oil Example, Right-Way Risk, Stochastic Correlation, Credit Valuation Adjustment (CVA) and Wrong-Way Risk, Modeling WWR, Related Topics, expected loss, Example, Visualization: WWR Exposure Spike
- References: copula-models, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: network-risk-cascades

## Entity: finance/market-impact-scaling
- Title: Capacity & Market Impact Scaling
- Category: Risk
- Language: en
- Key Concepts: Financial Application, Non-stationarity of ADV, Intraday volume profile, Mathematical Framework, Strategy Selection, Alpha Erosion Chart, Scaling Laws, Limitations and Extensions, square-root law, Power-Law Generalization, Backtest Correction, Permanent vs. Temporary Impact, Related Topics, Strategy Capacity Formula, Parameter Table
- References: avellaneda-stoikov, finance/monte-carlo-method, lob-prediction, optimal-execution
- Backlinks: amihud-illiquidity, deep-rl-execution, finance/nash-equilibrium, lob-prediction

## Entity: finance/coherent-risk-measures
- Title: Coherent Risk Measures
- Category: Risk
- Language: en
- Key Concepts: 4. Subadditivity., Coherent Risk Measures, Conditional VaR, Spectral risk measures, coherent, jointly elicitable, dual (robust) representation, Expected Shortfall (ES / CVaR), The four axioms, Dual representation, Theorem., 97.5% Expected Shortfall, Related Articles, subadditivity, 1. Monotonicity.
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, math/law-of-large-numbers
- Backlinks: extreme-value-theory, finance/cdo-tranches, finance/credit-derivatives-cds, frtb-es

## Entity: cornish-fisher-cvar
- Title: Cornish-Fisher CVaR
- Category: Risk
- Language: en
- Key Concepts: Four-moment summary, Mathematical Framework, Portfolio-level application, [[extreme-value-theory]], Gram-Charlier expansion, Only four moments, Prerequisites, Cornish-Fisher CVaR, Modified CVaR (Expected Shortfall), Normal vs Modified VaR by Confidence Level, Overview & Background, Related Topics, Modified VaR, Portfolio Screening, Key Properties
- References: copula-models, extreme-value-theory, finance/levy-processes, finance/value-at-risk, mcmc, volatility-forecasting
- Backlinks: finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/hyperbolic-distributions, finance/isda-simm, finance/markowitz-mean-variance, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, math/large-deviations-cramer

## Entity: finance/credit-derivatives-cds
- Title: Credit Default Swaps
- Category: Risk
- Language: en
- Key Concepts: CDS Indices, Single-name vs. index basis, CDS Spread Term Structure, Pricing Framework, risky duration, CDX, Index roll trades, Applications, protection leg, basis, Related Topics, Bootstrapping Hazard Rates, fair CDS spread, Credit hedging, Roll
- References: copula-models, finance/cdo-tranches, finance/coherent-risk-measures, finance/credit-risk-models, finance/value-at-risk, finance/xva
- Backlinks: finance/cdo-tranches, finance/credit-migration, finance/credit-risk-models, finance/securitization

## Entity: finance/credit-migration
- Title: Credit Migration and Rating Transitions
- Category: Risk
- Language: en
- Key Concepts: Credit Migration and Rating Transitions, Typical One-Year Transition Probabilities (%), Transition Matrix Framework, Rating Momentum, Continuous-Time Generator Matrix, IFRS 9 Staging Application, transition matrix, momentum, Through-the-Cycle vs Point-in-Time, Discrete-Time Matrix, Point-in-time (PIT), Related Topics, Estimation Methods, Asset Value Model, Duration (Hazard Rate) Method
- References: copula-models, finance/credit-derivatives-cds, finance/value-at-risk, hidden-markov-models, survival-risk-prediction
- Backlinks: finance/credit-risk-models

## Entity: finance/credit-risk-models
- Title: Credit Risk Models
- Category: Risk
- Language: en
- Key Concepts: Default Probability Term Structure, Machine learning, Jarrow-Turnbull (1995), equity is a call option on firm value, rating transitions, Structural models, First-Passage Extensions, Credit Risk Models, structural models, Reduced-Form Models, Intensity-Based Framework, Merton (1974), Use case, Duffie-Singleton (1999), Limitations and Extensions
- References: black-scholes, copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-migration, finance/value-at-risk, finance/xva, gnn-credit-risk, survival-risk-prediction
- Backlinks: finance/cdo-tranches, finance/credit-derivatives-cds, finance/securitization

## Entity: dv01
- Title: DV01 (Dollar Value of a 01)
- Category: Risk
- Language: en
- Key Concepts: Mathematical Framework, Yield Curve Key-Rate DV01, receive-fixed swap, Credit-contaminated yield, Futures DV01, OAS DV01, Units, Convexity Correction, Curve Trading, Interest Rate Swap DV01, Portfolio DV01 by Tenor, Asset-Liability Management, Overview & Background, Related Topics, DV01
- References: black-scholes, brownian-motion, cs01, finance/oas, finance/swaps
- Backlinks: cs01, finance/bond-options-gaussian, finance/interest-rate-term-structure, finance/oas, finance/swaps, futures-hedging, greeks-options

## Entity: finance/dispersion-trading
- Title: Dispersion Trading
- Category: Risk
- Language: en
- Key Concepts: Gap risk, short index variance, long single-stock variance, Tail hedging, Risk Management, Bank dispersion desks, implied correlation, Prerequisites, Correlation spike risk, P&L Decomposition, Basis risk, Cross-gamma, Related Topics, correlation risk premium, Implied Correlation, Correlation Risk Premium
- References: black-scholes, copula-models, finance/sabr-model, finance/value-at-risk, finance/variance-swaps, heston-model
- Backlinks: finance/variance-swaps-vix

## Entity: finance/eigenportfolio-rmt
- Title: Eigenportfolio Construction via RMT
- Category: Risk
- Language: en
- Key Concepts: Mathematical Foundation, First Eigenvector, Statistical Arbitrage, Prerequisites, Denoised Correlation Matrix, Eigenportfolio Construction via RMT, Sparse factor models, Non-Gaussian returns, Noise cluster, Random Matrix Theory (RMT), Limitations and Extensions, denoised, Related Topics, Key Properties, Alpha Signal Construction
- References: finance/hierarchical-risk-parity, finance/random-matrix-theory, heston-model, math/spectral-theory-operators
- Backlinks: finance/factor-attribution, finance/gnn-finance, finance/hierarchical-risk-parity, finance/markowitz-mean-variance, finance/random-matrix-theory

## Entity: frtb-sa-mr
- Title: FRTB Standardized Approach (SA-MR)
- Category: Risk
- Language: en
- Key Concepts: C. Curvature Risk, A. Delta Risk, Con, Related Topics, 1. The Sensitivities-Based Method (SBM), Visualization: Capital Stack under FRTB, Standardized Approach for Market Risk (SA-MR), 2. Default Risk Charge (DRC), 3. Residual Risk Add-on (RRAO), FRTB, Pro, Greeks (Sensitivities), conservative, FRTB Standardized Approach (SA-MR), Why Banks Hate/Love It
- References: finance/xva, frtb-es, greeks-options

## Entity: frtb-es
- Title: FRTB and Expected Shortfall
- Category: Risk
- Language: en
- Key Concepts: Liquidity Horizons, 97.5% confidence level, Why Replace VaR?, 2. Standardized vs. Internal Models (IMA), Visualization: VaR vs. ES, P&L Attribution (PLA), Expected Shortfall (ES), Fundamental Review of the Trading Book (FRTB), FRTB and Expected Shortfall (ES), Tail Blindness, 3. Non-Modellable Risk Factors (NMRF), Related Topics, 1. Liquidity Horizons, Key Features of FRTB, Lack of Coherence
- References: extreme-value-theory, finance/coherent-risk-measures, finance/value-at-risk
- Backlinks: clt, frtb-sa-mr, kelly-jump-diffusion, markov-chebyshev, measure-theory

## Entity: finance/frtb
- Title: FRTB: Fundamental Review of the Trading Book
- Category: Risk
- Language: en
- Key Concepts: FRTB (Basel IV / BCBS 2019), FRTB ES scaled for liquidity horizons, Related Articles, Expected Shortfall, P&L Attribution Test (PLA), FRTB: Fundamental Review of the Trading Book, Key Changes vs Basel 2.5, Implementation, FRTB Liquidity Horizons
- References: cornish-fisher-cvar, extreme-value-theory, finance/isda-simm, finance/value-at-risk

## Entity: finance/factor-attribution
- Title: Factor Risk Attribution and Decomposition
- Category: Risk
- Language: en
- Key Concepts: Marginal Contribution to Risk (MCTR), Related Articles, Percent Contribution to Risk, Factor Risk Decomposition, Factor attribution, Ex-Post vs Ex-Ante vs Risk Budgeting, Factor Risk Attribution and Decomposition, Brinson-Hood-Beebower (BHB) Decomposition, Implementation
- References: fama-macbeth-regression, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, ts-cs-factor-analysis
- Backlinks: alpha-orthogonalization, finance/apt-ross, finance/capm

## Entity: fraud-detection
- Title: Fraud Detection for Transactions
- Category: Risk
- Language: en
- Key Concepts: XGBoost / LightGBM, False Positive Rate (FPR), Cost-sensitive learning, Explainability, Isolation Forest, Precision, Device/channel features, Recall (Sensitivity), Adversarial attacks, Limitations and Extensions, Undersampling, Account takeover (ATO), Related Topics, Real-time latency, Graph features
- References: finance/gan, finance/monte-carlo-method, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: finance/gan, finance/gnn-finance, finance/shap-interpretability, gnn-credit-risk, graph-neural-networks

## Entity: futures-hedging
- Title: Futures Hedging
- Category: Risk
- Language: en
- Key Concepts: Tailing the Hedge, Futures hedging, Rollover P&L, Agricultural hedging, Basis risk, basis, Cross-Hedging, stacks, Related Topics, Duration-Based Hedging, Portfolio Insurance, Minimum Variance Hedge Ratio, Beta Hedging, Interest rate hedging, Equity Portfolio Hedging
- References: dv01, finance/swaps, finance/value-at-risk, geometric-brownian-motion, optimal-execution
- Backlinks: finance/value-at-risk

## Entity: finance/hierarchical-risk-parity
- Title: Hierarchical Risk Parity (HRP)
- Category: Risk
- Language: en
- Key Concepts: inverse of each cluster's variance, dendrogram, recursive risk allocation, Limitations and Extensions, Tail risk, Handles Singular $\Sigma$, HERC extension, Full Python Implementation, graph theory, Linkage sensitivity, Related Topics, Accounts for Hierarchy, Allocation Method Comparison, Dynamic rebalancing, Crisis resilience
- References: finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/value-at-risk, kelly-criterion
- Backlinks: bayesian-black-litterman, convex-optimization-trading, fama-macbeth-regression, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/factor-attribution, finance/markowitz-mean-variance, finance/meta-labeling, finance/random-matrix-theory, model-free-rl-factors, numeraire-invariant-hedging, portfolio-optimization-ml, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis

## Entity: finance/isda-simm
- Title: ISDA SIMM: Standard Initial Margin Model
- Category: Risk
- Language: en
- Key Concepts: Vega and Curvature, Implementation (IR Delta), Sensitivity Types, Margin Formula, Vega margin, SIMM Calibration, 1. Weighted Sensitivity, Related Articles, Delta, Curvature, ISDA SIMM: Standard Initial Margin Model, 10 business days, 4. Total SIMM, Architecture, Risk Classes
- References: copula-models, cornish-fisher-cvar, finance/swaps, finance/value-at-risk, finance/xva
- Backlinks: finance/frtb, finance/repo-market-systemic

## Entity: kelly-criterion
- Title: Kelly Criterion
- Category: Risk
- Language: en
- Key Concepts: Expected Utility Foundation, Drawdown Analysis, Proportional Kelly with drawdown control, Python Implementation: Growth Simulation, Sharpe ratio divided by $\sigma$, The Kelly Formula: Discrete Case, logarithmic utility function, Limitations and Extensions, Interactive Simulation, Discrete vs. continuous time, Related Topics, The Kelly Formula: Continuous Case, Practical constraints, Correlation, Kelly Criterion
- References: finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, portfolio-optimization-ml
- Backlinks: bayesian-kelly, finance/hierarchical-risk-parity, finance/pe-fund-metrics, kelly-jump-diffusion, merton-portfolio, universal-portfolios

## Entity: finance/libor-sofr
- Title: LIBOR to SOFR Transition
- Category: Risk
- Language: en
- Key Concepts: ISDA Fixed Spread Adjustments, LIBOR to SOFR Transition, Related Articles, SOFR In Arrears, LIBOR (London Interbank Offered Rate), SOFR (Secured Overnight Financing Rate), SOFR Compounded, Term SOFR, LIBOR vs SOFR, Rate Types, Transition Timeline, Implementation, Replacement Rates
- References: finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, finance/xva
- Backlinks: finance/cir-hull-white, finance/interest-rate-term-structure

## Entity: network-risk-cascades
- Title: Network Models and Default Cascades
- Category: Risk
- Language: en
- Key Concepts: Directed Graph, Default Cascades and the Domino Effect, Edges ($E$), DebtRank, The Financial Network as a Graph, Related Topics, Weights ($L_{ij}$), The Eisenberg-Noe Model, Default Cascade, Contagion Threshold, Nodes ($V$), The Paradox of Connectivity, DebtRank: Centrality for Risk, Visualization: Network Contagion, Network Models and Default Cascades
- References: cva-wrong-way-risk, finance/repo-market-systemic, finance/systemic-contagion-debtrank

## Entity: finance/oas
- Title: Option-Adjusted Spread (OAS)
- Category: Risk
- Language: en
- Key Concepts: Mathematical Framework, OAS < Z-Spread, Why Adjust for Options?, OAS, ASW, Limitations and Extensions, OAS stability, Volatility sensitivity, Related Topics, Prepayment model, Model dependency, Parameter Table, Spread Comparison, Multi-factor models, For Callable Bonds
- References: dv01, finance/longstaff-schwartz, finance/monte-carlo-method, finance/sabr-model
- Backlinks: dv01, finance/nelson-siegel-svensson, finance/sabr-model, finance/securitization

## Entity: portfolio-optimization-ml
- Title: Portfolio Optimization with ML
- Category: Risk
- Language: en
- Key Concepts: efficient frontier, agglomerative clustering, No expected return input, Step 3: Quasi-Diagonalization, Estimation window sensitivity, Portfolio Optimization, Limitations and Extensions, Step 4: Recursive Bisection, Related Topics, Classical Markowitz Framework, Python: Full HRP Implementation, Parameter Table, Portfolio Optimization with Machine Learning, Visualization, Black-Litterman model
- References: finance/gan, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/random-matrix-theory, finance/value-at-risk, math/spectral-theory-operators, mcmc, model-free-rl-factors, transformer-architecture
- Backlinks: convex-optimization-trading, fama-macbeth-regression, finance/pe-fund-metrics, kelly-criterion

## Entity: finance/pe-fund-metrics
- Title: Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve
- Category: Risk
- Language: en
- Key Concepts: MOIC — Multiple on Invested Capital, IRR — Internal Rate of Return, DPI (Distributions to Paid-In), DPI and RVPI, Related Articles, Implementation, RVPI (Residual Value to Paid-In), The J-Curve, TVPI = DPI + RVPI = MOIC, PME — Public Market Equivalent, Core Metrics, Target Benchmarks by Strategy, timing, Example, Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve
- References: finance/monte-carlo-method, finance/repo-market-systemic, finance/value-at-risk, kelly-criterion, portfolio-optimization-ml

## Entity: finance/repo-market-systemic
- Title: Repo Market and Systemic Risk
- Category: Risk
- Language: en
- Key Concepts: Cash Flows, FSB haircut floors (2023), Regulatory Response, Rehypothecation, haircut, Primary Reserve Fund, GCF Repo, EU SFTR, Related Articles, Haircut, Lessons from the 2008 Crisis, Systemic implication, Systemic Risk Analysis, Cash lender, Special Repo
- References: extreme-value-theory, finance/isda-simm, finance/kyle-lambda, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: finance/pe-fund-metrics, network-risk-cascades

## Entity: finance/securitization
- Title: Securitization
- Category: Risk
- Language: en
- Key Concepts: Reserve account, CDO-Squared, Mezzanine interest, Securitization, Agency MBS, Monoline insurance, Liquidity evaporation, Mortgage-Backed Securities (MBS), Correlation breakdown, Senior tranche interest, OAS, PSA (Public Securities Association), CDO-squared, Agency vs. Non-Agency, Excess spread
- References: copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-risk-models, finance/oas, finance/value-at-risk
- Backlinks: finance/cdo-tranches

## Entity: sharpe-ratio-statistics
- Title: Statistics of Sharpe Ratios
- Category: Risk
- Language: en
- Key Concepts: Mathematical Framework, Sharpe Ratio (SR), Minimum Track Record Length, Statistics of Sharpe Ratios, Limitations and Extensions, Deflated SR, IID assumption, Probabilistic Sharpe Ratio (PSR), Multiple testing inflation, Regulatory reporting, Hierarchical testing, Performance attribution, Related Topics, Serial correlation inflates SR, Key Properties
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/value-at-risk, hidden-markov-models, mcmc

## Entity: finance/stylized-facts-returns
- Title: Stylized Facts of Financial Returns
- Category: Risk
- Language: en
- Key Concepts: quadratic variation, Canonical list (Rama Cont, 2001), absolute, 1. Absence of autocorrelation in returns, Related Articles, multifractal, 9. Calendar effects, Modern programme, 7. Intermittency, correlations between assets jump up, empirical foundation, Exception:, universally, 3. Volatility clustering, multifractal models
- References: arch-models, copula-models, finance/bipower-variation, finance/capm, finance/efficient-market-hypothesis, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, garch-models, heston-model
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/hyperbolic-distributions, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, math/central-limit-theorem, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: survival-risk-prediction
- Title: Survival-Based Risk Prediction
- Category: Risk
- Language: en
- Key Concepts: risk set, Mathematical Framework, Time-Varying Covariates, Multi-state models, Portfolio credit risk, Survival-Based Risk Prediction, Machine learning extensions, Cox model, cumulative incidence function, Limitations and Extensions, Breslow estimator, Proportional hazards violation, survival function, Related Topics, Fund liquidation risk
- References: black-scholes, copula-models, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/credit-migration, finance/credit-risk-models, gnn-credit-risk

## Entity: convex-optimization-trading
- Title: Systematic Portfolio Trading via Convex Optimization
- Category: Risk
- Language: en
- Key Concepts: Currency Overlay, Mathematical Framework, Systematic Equity Long/Short, [[hierarchical-risk-parity]], Duality, Prerequisites, Non-linear costs, Systematic Portfolio Trading via Convex Optimization, [[mcmc]], Overview & Background, Convex Optimization, Warm starting, Single-Period Optimization, Model Predictive Control, Related Topics
- References: bayesian-black-litterman, black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc, portfolio-optimization-ml
- Backlinks: bayesian-black-litterman, convex-analysis, convexity, entropy-pooling, finance/adversarial-stress-testing, finance/alpha-stacking, finance/markowitz-mean-variance, gradient-hessian-jacobian, lagrange-multipliers, linear-programming, martingale-optimal-transport

## Entity: finance/systemic-contagion-debtrank
- Title: Systemic Risk and DebtRank
- Category: Risk
- Language: en
- Key Concepts: Systemic Risk and DebtRank, Propagation, Systemic Impact Score, Related Articles, Implementation, Stress level, Node States, Relative impact matrix, Financial Networks, Extensions, Dynamic DebtRank, Example, DebtRank Algorithm, DebtRank, State
- References: cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/nash-equilibrium, finance/value-at-risk
- Backlinks: cva-wrong-way-risk, finance/black-swan-scenarios, finance/gnn-finance, finance/repo-market-systemic, graph-theory, network-risk-cascades

## Entity: finance/value-at-risk
- Title: Value at Risk (VaR)
- Category: Risk
- Language: en
- Key Concepts: Mathematical Framework, 2. Parametric (Delta-Normal), Conditional VaR (CVaR), Stress testing, Backtesting VaR, Limitations and Extensions, 3. Monte Carlo Simulation, Expected Shortfall (ES), Expected Shortfall (CVaR), Related Topics, Non-subadditivity, 1. Historical Simulation, Formal Definition, Christoffersen Conditional Coverage Test, Regulatory capital (Basel III/IV)
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/xva, futures-hedging, garch-models
- Backlinks: alternative-data-alpha, amihud-illiquidity, copula-models, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/copula-models, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/frtb, finance/gan, finance/hierarchical-risk-parity, finance/isda-simm, finance/monte-carlo-method, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/quasi-monte-carlo, finance/random-matrix-theory, finance/realized-kernels, finance/securitization, finance/systemic-contagion-debtrank, finance/xva, fraud-detection, frtb-es, futures-hedging, generative-scenario-models, kelly-criterion, llm-financial-analysis, lob-prediction, math/lundberg-cramer-ruin, news-sentiment-trading, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, rl-trader, sharpe-ratio-statistics, volatility-forecasting

## Entity: finance/variance-swaps-vix
- Title: Variance Swaps and the VIX
- Category: Risk
- Language: en
- Key Concepts: Volatility Risk Premium, Variance Swap Mechanics, model-independent, variance risk premium, VIX term structure, VIX futures, Variance Swaps and the VIX, Volatility trading, P&L of a Delta-Hedged Option, Applications, Related Topics, VIX Derivatives, Model-Free Replication, Risk budgeting, variance swap
- References: black-scholes, finance/dispersion-trading, finance/variance-swaps, finance/volatility-surface, garch-models, greeks-options
- Backlinks: finance/delta-hedging-practice

## Entity: finance/xva
- Title: XVA (Valuation Adjustments)
- Category: Risk
- Language: en
- Key Concepts: Exposure Profile Visualization, Wrong-way risk (WWR), FCA, Mathematical Framework, Trade pricing, FVA — Funding Valuation Adjustment, Stress testing, Limitations and Extensions, FBA, Related Topics, CSA negotiations, MVA, Key Properties, KVA — Capital Valuation Adjustment, Model dependency
- References: copula-models, cs01, finance/monte-carlo-method, finance/swaps, finance/value-at-risk, inference-serving
- Backlinks: convertible-bonds, copula-models, cost-of-carry, cs01, cva-wrong-way-risk, finance/copula-models, finance/credit-derivatives-cds, finance/credit-risk-models, finance/isda-simm, finance/libor-sofr, finance/nelson-siegel-svensson, finance/repo-market-systemic, finance/swaps, finance/value-at-risk, frtb-sa-mr, gnn-credit-risk, multi-curve-framework, quantum-amplitude-estimation, risk-neutral-valuation

## Entity: deep-rl-execution
- Title: Deep RL for Trade Execution
- Category: Scientific ML
- Language: en
- Key Concepts: Reward, Ning et al. (2021), Mathematical Framework, Simulator gap, Sell-side execution desks, Prerequisites, Transition, Reward hacking, Algorithm: Proximal Policy Optimisation, Implementation Shortfall, Action, Performance Comparison, Ritter (2022), Related Topics, Portfolio rebalancing
- References: finance/market-impact-scaling, finance/shannon-entropy, generative-scenario-models, lob-prediction, optimal-execution, reinforcement-learning, rl-trader, temporal-fusion-transformer
- Backlinks: ai-market-making, alpha-factor-research, ml-options-pricing, offline-rl, optimal-execution, reinforcement-learning, rough-paths, temporal-fusion-transformer, tool-use

## Entity: generative-scenario-models
- Title: Generative Models for Scenario Generation
- Category: Scientific ML
- Language: en
- Key Concepts: Conditional GAN for Regime-Conditional Scenarios, Mathematical Framework, GAN Minimax Objective, Prerequisites, CVaR accuracy, VAE Training Objective, Portfolio optimisation under fat tails, Diffusion models for equity returns, Options pricing and hedging, Leverage effect, Training instability, Distribution Comparison, Regulatory acceptance, Regulatory stress scenarios, Generative Models for Scenario Generation
- References: copula-models, extreme-value-theory, finance/adversarial-stress-testing, finance/monte-carlo-method, finance/value-at-risk, garch-models, generative-models, stochastic-differential-equations, temporal-fusion-transformer
- Backlinks: deep-rl-execution, generative-models, gnn-credit-risk, llm-financial-analysis, market-microstructure, temporal-fusion-transformer

## Entity: gnn-credit-risk
- Title: Graph Neural Networks for Credit Risk
- Category: Scientific ML
- Language: en
- Key Concepts: Mathematical Framework, ESG-linked credit, Prerequisites, Interbank contagion analysis, Graph [[attention-mechanisms|Attention]] Network (GAT), Architecture: GraphSAGE for Large Credit Graphs, Corporate credit rating, Graph Formulation, Interpretability, Related Topics, FICO (2022), Graph construction is the bottleneck, Scalability, Heterogeneous Credit Graph, Visualization
- References: attention-mechanisms, copula-models, finance/xva, fraud-detection, generative-scenario-models, graph-neural-networks, llm, llm-financial-analysis, spectral-graph-theory, survival-risk-prediction, transformer-architecture
- Backlinks: finance/credit-risk-models, graph-neural-networks, llm-financial-analysis

## Entity: kan
- Title: Kolmogorov-Arnold Networks (KAN)
- Category: Scientific ML
- Language: en
- Key Concepts: Mathematical Framework, refined adaptively, Extrapolation:, Still maturing., Physics equation discovery:, Differential equations:, Prerequisites, learnable univariate function, B-spline activations., Mathematics:, Kolmogorov-Arnold Theorem (1957)., Applications, vs [[transformer-architecture|MLP]]:, Theorem:, Scalability to high dimensions.
- References: attention-mechanisms, conformal-field-theory, equivariant-nn, finance/spectral-analysis, kolmogorov-arnold-theorem, learnable-activations, pinns, qft-basic, transformer-architecture
- Backlinks: kolmogorov-arnold-theorem, learnable-activations, pinns

## Entity: llm-financial-analysis
- Title: LLM for Financial Analysis
- Category: Scientific ML
- Language: en
- Key Concepts: Mathematical Framework, Tool Use for Live Data, Two Sides, Credit covenant surveillance, Architecture / Algorithm, Macro research synthesis, Hallucination rates in financial tasks, FinBERT, [[rag]] Pipeline for SEC Filings, Key Results and Performance, Retrieval-Augmented Generation, Structured Output via JSON Schema Enforcement, Domain-Specific Models, Related Topics, FinGPT
- References: finance/value-at-risk, fine-tuning, generative-scenario-models, gnn-credit-risk, inference-serving, llm, news-sentiment-trading, rag, temporal-fusion-transformer
- Backlinks: alpha-factor-research, gnn-credit-risk, mcp, ml-options-pricing, nlp-financial-analysis, rag, research/mla-financial-reasoning, temporal-fusion-transformer, tool-use

## Entity: neural-operators
- Title: Neural Operators
- Category: Scientific ML
- Language: en
- Key Concepts: Complexity:, See Also, Grid type, Fourier layers:, Extrapolation:, Complexity, Fourier Neural Operators (FNO), DeepONet: Branch and Trunk Decomposition, Weather & climate:, Key operation:, Training and Data Generation, Resolution transfer, Trunk network:, Applications, Output:
- References: ai-physics/hamiltonian-nn, equivariant-nn, fokker-planck-equation, numerical-pde-finance, partial-differential-equations, pinns, stochastic-differential-equations
- Backlinks: fourier-neural-operators

## Entity: pinns
- Title: Physics-Informed Neural Networks (PINNs)
- Category: Scientific ML
- Language: en
- Key Concepts: Mathematical Framework, Heat transfer:, Mesh-free:, Spectral bias., Applications, Architecture choice., Stiff PDEs., Key Results & Properties, Related Topics, Data assimilation:, Quantum mechanics:, Pathological loss landscapes., Visualization, Limitations, Benchmark PDEs:
- References: ai-physics/hamiltonian-nn, automatic-differentiation, black-scholes, equivariant-nn, finance/fractional-fokker-planck, kan, partial-differential-equations, schrodinger-equation
- Backlinks: ai-physics/hamiltonian-nn, automatic-differentiation, deep-ritz-method, equivariant-nn, fourier-neural-operators, gaussian-processes, kan, kolmogorov-arnold-theorem, kuramoto-model, learnable-activations, neural-odes, neural-operators, partial-differential-equations

## Entity: temporal-fusion-transformer
- Title: Temporal Fusion Transformer
- Category: Scientific ML
- Language: en
- Key Concepts: Macro regime-conditional forecasting, Risk budgeting signals, Mathematical Framework, Gating Mechanism, Static enrichment, Two Sides, P50 forecast error, Temporal Fusion [[transformer-architecture|Transformer]] (TFT), Static covariates, Gated Residual Network (GRN), Key Results and Performance, Observed inputs, Related Topics, Interpretability Surface, Known future inputs
- References: arima-models, attention-mechanisms, deep-rl-execution, garch-models, generative-scenario-models, inference-serving, llm-financial-analysis, transformer-architecture, volatility-forecasting
- Backlinks: ai-market-making, alpha-factor-research, deep-rl-execution, generative-scenario-models, llm-financial-analysis, ml-options-pricing, nlp-financial-analysis

## Entity: ar-models
- Title: AR (Autoregressive) Models
- Category: Signal Analysis
- Language: en
- Key Concepts: Mathematical Framework, Lag selection uncertainty, Yule-Walker equations, Pairs Trading, VAR (Vector AR), ARIMA, Volatility Forecasting, AR (Autoregressive) Models, Overview & Background, Related Topics, Key Properties, Unconditional variance, ARMA, Parameter Table, Autocorrelation Function (ACF)
- References: arch-models, arima-models, arma-models, finance/levy-processes, finance/spectral-analysis, math/spectral-theory-operators, mcmc, volatility-forecasting
- Backlinks: arch-models, arima-models, arma-models

## Entity: arima-models
- Title: ARIMA (Integrated ARMA)
- Category: Signal Analysis
- Language: en
- Key Concepts: SARIMA, Mathematical Framework, Earnings Forecasting, Seasonal ARIMA (SARIMA), ARIMA Forecast with Confidence Intervals, Prerequisites, KPSS test, ARIMAX / Transfer Function, Yield Curve Dynamics, Macro Forecasting, Autoregressive Integrated Moving Average (ARIMA), ARIMA Models, VAR/VECM, Volatility Forecasting, Overview & Background
- References: ar-models, arma-models, finance/cointegration, finance/hurst-exponent, finance/levy-processes, mcmc, volatility-forecasting
- Backlinks: ar-models, arma-models, finance/cointegration, temporal-fusion-transformer

## Entity: arma-models
- Title: ARMA (Autoregressive Moving Average)
- Category: Signal Analysis
- Language: en
- Key Concepts: Mathematical Framework, Macro Signal Construction, Stationarity condition, ARMA Models, Prerequisites, Autocovariance structure, ARIMA, Volatility Forecasting, Parameter redundancy, Overview & Background, Parsimony, AR models, Kalman filter, ARMA-GARCH, Related Topics
- References: ar-models, arima-models, black-scholes, finance/spectral-analysis, mcmc, volatility-forecasting
- Backlinks: ar-models, arch-models, arima-models

## Entity: finance/dft
- Title: Discrete Fourier Transform (DFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Outlier sensitivity:, Hamming, window function, Periodic extension:, alias, Blackman-Harris, sampling rate, Uniqueness:, conjugate-symmetric, Nyquist–Shannon Sampling Theorem, Flat-top, Spectral Leakage and Window Functions, Related Topics, Spectral leakage, Limitations
- References: finance/fft, finance/hilbert-huang-transform, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/fft, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fft
- Title: Fast Fourier Transform (FFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Cooley-Tukey Algorithm (1965), Algorithm Variants, butterfly, primitive $N$-th root of unity, two, Neural networks:, Applications, Complexity Analysis, Linear convolution, Digital filtering:, Related Topics, Mixed-radix, Radix-2 DIF, decimation-in-time (DIT), Split-radix
- References: finance/dft, finance/shor-algorithm, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/dft, finance/hyperbolic-distributions, finance/levy-esscher-continuous, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fisher-transform
- Title: Fisher Transform
- Category: Signal Analysis
- Language: en
- Key Concepts: Mathematical Formula, Mean-reversion signals, Trading Logic, Statistical Interpretation, Multi-asset ranking, Options positioning, Limitations and Extensions, Related Topics, Visualization: Sharpening the Peaks, Transformation, Signal Generation, Range dependency, Signal normalisation, The Fisher Transform, Normalisation
- References: finance/hilbert-huang-transform, finance/hurst-exponent, finance/spectral-analysis
- Backlinks: finance/hilbert-huang-transform, finance/spectral-analysis, information-geometry-finance

## Entity: finance/hilbert-huang-transform
- Title: Hilbert-Huang Transform (HHT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Market cycle extraction, Stage 1: Empirical Mode Decomposition (EMD), Intrinsic Mode Functions (IMFs), Physical interpretability, Key Limitations, Completeness, Python: EMD Workflow, Frequency Resolution, Hilbert-Huang Spectrum, Related Topics, Not required, Adaptive denoising, Ensemble EMD (EEMD), Stationarity, instantaneous frequency
- References: finance/fisher-transform, finance/hurst-exponent, finance/spectral-analysis, wavelet-transform
- Backlinks: finance/dft, finance/fisher-transform, finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/realized-kernels
- Title: Intraday Volatility via Realized Kernels
- Category: Signal Analysis
- Language: en
- Key Concepts: HAR-RK model, Consistency and Convergence Rate, Mathematical Framework, Jumps, Prerequisites, Realized Kernels, Parzen kernel, Execution algorithms, VaR models, Statistical arbitrage, Limitations and Extensions, signature plot, Related Topics, Key Properties, Unbiasedness
- References: brownian-motion, finance/spectral-analysis, finance/value-at-risk, garch-models, geometric-brownian-motion, volatility-forecasting, wavelet-transform
- Backlinks: finance/bipower-variation, finance/spectral-analysis, finance/wavelet-transform, jump-robust-volatility, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: kalman-filter
- Title: Kalman Filter
- Category: Signal Analysis
- Language: en
- Key Concepts: maximum likelihood estimation, Unscented Kalman Filter (UKF), Practical Financial Applications, Kalman Gain Dynamics, State (transition) equation:, Yield curve fitting, Observation equation:, Step 1: Prediction, Step 2: Update, observation equation, Kalman filter, The Two-Step Algorithm, Order flow imbalance, Related Topics, state equation
- References: finance/particle-filter, hidden-markov-models, mcmc, volatility-forecasting
- Backlinks: conditionally-gaussian-processes, factor-graphs-inference, finance/cointegration, finance/hidden-markov-models, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/transformer-timeseries, innovation-process, math/conditional-expectation-sigma, math/sequential-hypothesis-testing, math/spectral-representation-processes, math/stationary-wide-spectral, multivariate-normal-distribution, nonlinear-filtering, state-space-models

## Entity: finance/lempel-ziv-complexity
- Title: Lempel-Ziv Complexity
- Category: Signal Analysis
- Language: en
- Key Concepts: Non-parametric, Asymptotic consistency, Mathematical Framework, Short sequences, Lempel-Ziv Complexity (LZ), Core Principle, Limitations and Extensions, Lempel-Ziv (LZ) Complexity, LZ78 vs LZ76, Related Topics, Finite-sample applicability, Key Properties, Parameter Table, Sensitivity to order, Python: LZ Complexity with Rolling Analysis
- References: finance/hurst-exponent, finance/phase-space-reconstruction, finance/shannon-entropy, hidden-markov-models
- Backlinks: finance/hurst-exponent, finance/phase-space-reconstruction, finance/sha-256, finance/shannon-entropy, financial-entropy, kolmogorov-complexity

## Entity: finance/phase-space-reconstruction
- Title: Phase Space Reconstruction
- Category: Signal Analysis
- Language: en
- Key Concepts: correlation dimension, Visualization: Attractor (2D Projection), Prerequisites, Noise Sensitivity, Embedding Dimension $m$: False Nearest Neighbors, Key Limitations, Takens' Embedding Theorem, Average Mutual Information, Data Requirements, Python: Phase Space Reconstruction and FNN, embedding dimension, Related Topics, Embedding as features, Parameter Table, time delay
- References: finance/hurst-exponent, finance/lempel-ziv-complexity, finance/particle-filter, finance/spectral-analysis, hidden-markov-models
- Backlinks: finance/hidden-markov-models, finance/hurst-exponent, finance/lempel-ziv-complexity

## Entity: finance/prony-hankel-spectral
- Title: Prony's Method and Hankel Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Algorithm, Step 3: Amplitude Estimation, Related Articles, Implementation, Comparison with FFT, Prony's Method and Hankel Spectral Analysis, Prony's method, Hankel matrix, Step 2: Root Finding, Hankel SVD Filtering, Step 1: Linear Prediction via Hankel System, Regime Interpretation, Problem Formulation
- References: finance/hilbert-huang-transform, finance/singular-spectral-analysis, finance/spectral-analysis, fourier-transform, wavelet-transform

## Entity: finance/singular-spectral-analysis
- Title: Singular Spectral Analysis (SSA)
- Category: Signal Analysis
- Language: en
- Key Concepts: W-Correlation, No stationarity assumption, Mathematical Framework, Window length choice, Noise, Change-point detection, Step 2 — Singular Value Decomposition, Oscillations, Linear Recurrence Forecasting (LRF), Identifiability, Prerequisites, Forecasting limitations, Limitations and Extensions, Price trend extraction, Multivariate SSA (M-SSA)
- References: finance/random-matrix-theory, finance/spectral-analysis, math/spectral-theory-operators, volatility-forecasting, wavelet-transform
- Backlinks: finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform

## Entity: finance/spectral-analysis
- Title: Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Aliasing, Mathematical Framework, Limitations and Extensions, Multiple testing, Filter design, inconsistent, Related Topics, Autoregressive (Parametric) Spectral Estimation, Cross-Spectral Density and Coherence, Key Properties, Short series, Stationarity requirement, Business cycle detection, Slepian sequences, Parseval's theorem
- References: finance/fisher-transform, finance/hilbert-huang-transform, finance/realized-kernels, finance/singular-spectral-analysis, wavelet-transform
- Backlinks: ar-models, arma-models, convolutional-volatility-resolution-clustering, finance/dft, finance/fft, finance/fisher-transform, finance/hilbert-huang-transform, finance/phase-space-reconstruction, finance/prony-hankel-spectral, finance/realized-kernels, finance/shor-algorithm, finance/singular-spectral-analysis, finance/wavelet-transform, finance/zeta-field, fourier-transform, kan, kolmogorov-arnold-theorem, volatility-modulated-spectral-surface

## Entity: volatility-modulated-spectral-surface
- Title: Volatility-Modulated Spectral Surface (VMSS)
- Category: Signal Analysis
- Language: en
- Key Concepts: Mathematical Framework, spectral [[shannon-entropy|entropy]], Prerequisites, Regime transition signals, Regime detection, Volatility-Modulated Spectral Surface (VMSS), adaptive window, Limitations and Extensions, Circular dependency, Risk decomposition, Volatility-Modulated Transform, Related Topics, persistent spectral patterns, Key Properties, Cross-asset spectral coherence
- References: finance/gan, finance/realized-kernels, finance/shannon-entropy, finance/spectral-analysis, garch-models, inference-serving, volatility-forecasting, wavelet-transform
- Backlinks: convolutional-volatility-resolution-clustering

## Entity: finance/wavelet-transform
- Title: Wavelet Transform (CWT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Mathematical Framework, translation, scaling function, scale, Choice of mother wavelet, wavelet variance, Sparse representation, Limitations and Extensions, Daubechies wavelets, 2D wavelets, Multi-Scale Wavelet Power, Related Topics, Cone of influence, Regime shift detection, Orthonormality (DWT)
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
- Key Concepts: Gaussian Processes (GP), latent feature models, Stick-Breaking construction, The Dirichlet Process (DP), rich-get-richer, Indian Buffet Process (IBP), Automatic Complexity Selection, Gaussian Processes, Flexibility, Bayesian Non-parametrics, Related Topics, Chinese Restaurant Process (CRP), Uncertainty Quantification, Visualization: Model Growth, infinite-dimensional
- References: gaussian-processes, mixture-of-experts
- Backlinks: gmm

## Entity: dirichlet-processes
- Title: Bayesian Non-parametrics: Dirichlet Processes
- Category: Statistical Learning
- Language: en
- Key Concepts: The Chinese Restaurant Process (CRP), Stick-Breaking Construction, Mathematical Definition, Applications in Clustering, Bayesian Non-parametrics: Dirichlet Processes

## Entity: concentration-of-measure
- Title: Concentration of Measure
- Category: Statistical Learning
- Language: en
- Key Concepts: Rademacher Complexity and Generalization, The Phenomenon, Talagrand's Concentration Inequality, Concentration of Measure, McDiarmid's Inequality

## Entity: sgd-convergence-theory
- Title: Convergence Theory of Stochastic Gradient Descent
- Category: Statistical Learning
- Language: en
- Key Concepts: Non-Convex Optimization and the PL Condition, Convergence Theory of Stochastic [[convex-optimization|Gradient Descent]], Strong Convexity, Problem Formulation, Convex and Smooth Functions
- References: convex-optimization

## Entity: differential-privacy
- Title: Differential Privacy in ML
- Category: Statistical Learning
- Language: en
- Key Concepts: User Trust, membership inference attacks, Low Noise, High Noise, Differential Privacy in Machine Learning, Visualization: Privacy Budget vs. Accuracy, Related Topics, Why It Matters, $\epsilon$ (Privacy Budget), Gradient Clipping, $(\epsilon, \delta)$-differential privacy, Robustness, $\delta$, The Privacy-Utility Trade-off, Differentially Private Stochastic [[convex-optimization|Gradient Descent]] (DP-SGD)
- References: ai-theory/adversarial-examples, convex-optimization, federated-learning
- Backlinks: federated-learning

## Entity: gmm
- Title: Gaussian Mixture Models (GMM)
- Category: Statistical Learning
- Language: en
- Key Concepts: soft assignment, responsibility, M-step, The Model Definition, mixing weight, Related Topics, Initialize, Visualization: GMM vs K-Means, Relationship to K-Means, Repeat, Soft Clustering (Responsibilities), Fitting the Model: The EM Algorithm, E-step, Gaussian Mixture Models (GMM)
- References: bayesian-nonparametrics, expectation-maximization
- Backlinks: em-algorithm, matrix-calculus

## Entity: kernel-methods-rkhs
- Title: Kernel Methods & RKHS
- Category: Statistical Learning
- Language: en
- Key Concepts: Reproducing Kernel Hilbert Space, characteristic, Mercer's Theorem, The Representer Theorem, reproducing property, Kernel Methods & Reproducing Kernel Hilbert Spaces (RKHS), Kernel Mean Embeddings
- References: math/spectral-theory-operators
- Backlinks: attention-kernel, hilbert-banach-spaces, kde

## Entity: linear-regression
- Title: Linear Regression and Gauss-Markov
- Category: Statistical Learning
- Language: en
- Key Concepts: Regularization (Ridge and Lasso), Linear Regression and the Gauss-Markov Theorem, The Model, Ordinary Least Squares (OLS), The Gauss-Markov Theorem, 1. Ridge Regression (L2 Penalty), Related Topics, BLUE (Best Linear Unbiased Estimator), Visualization: The Bias-Variance Trade-off, No Autocorrelation, Zero Mean, Homoscedasticity, Gauss-Markov Theorem, 2. Lasso Regression (L1 Penalty), exactly zero
- References: bayesian-inference, logistic-regression, mle
- Backlinks: logistic-regression

## Entity: logistic-regression
- Title: Logistic Regression
- Category: Statistical Learning
- Language: en
- Key Concepts: 1. The Logistic Model, Binary Cross-[[shannon-entropy|Entropy]], 4. Modern Scaling, 2. Estimation: Cross-[[shannon-entropy|Entropy]] Loss, Sigmoid activation, Convexity, Related Topics, Log-Odds, [[asymptotic-stats/mle|Maximum Likelihood Estimation (MLE)]], Multinomial (Softmax), Odds Ratio, Softmax, Online Learning, Decision Boundary, Regularization (LASSO/Ridge)
- References: convex-optimization, convexity, finance/shannon-entropy, linear-regression, mle, transformer-architecture
- Backlinks: linear-regression

## Entity: normalizing-flows-math
- Title: Mathematical Foundations of Normalizing Flows
- Category: Statistical Learning
- Language: en
- Key Concepts: Change of Variables Theorem, Continuous Normalizing Flows (CNFs), Mathematical Foundations of Normalizing Flows, Composition of Flows, Liouville Equation

## Entity: mechanism-design
- Title: Mechanism Design
- Category: Statistical Learning
- Language: en
- Key Concepts: Direct Mechanism, Application in AI: Alignment and Governance, 1. Second-Price Auction (Vickrey Auction), Visualization: Revenue vs. Welfare, Multi-Agent Systems, rules, Famous Examples, Strategy-proofness, second-highest price, The Goal: Incentive Compatibility, Related Topics, Incentive Compatible (IC), 2. Matching Algorithms (Gale-Shapley), "Reverse Game Theory.", Mechanism Design
- References: llm, mean-field-games, online-learning-regret, rlhf

## Entity: mcts
- Title: Monte Carlo Tree Search (MCTS)
- Category: Statistical Learning
- Language: en
- Key Concepts: Simulation (Rollout), Why MCTS is Revolutionary, Value Network, UCT, The UCT Formula, Monte Carlo simulations, Monte Carlo Tree Search (MCTS), AlphaGo and Neural MCTS, Related Topics, Visualization: Tree Search vs. Rollout, $Q(v)/N(v)$ (Exploitation), AlphaGo, Expansion, Tree Search, Policy Network
- References: automatic-differentiation, mdp, monte-carlo-integration, multi-armed-bandits
- Backlinks: orm-prm

## Entity: multi-armed-bandits
- Title: Multi-Armed Bandits
- Category: Statistical Learning
- Language: en
- Key Concepts: Exploration, news recommendation, Key Algorithms, sublinear regret, The Setup, 2. UCB (Upper Confidence Bound), 3. Thompson Sampling, Contextual Bandits, Related Topics, Cumulative Regret, sample, Multi-Armed Bandits, Regret, Visualization: UCB Action Selection, 1. $\epsilon$-Greedy
- References: bayesian-inference, mdp, online-learning-regret
- Backlinks: mcts

## Entity: naive-bayes
- Title: Naive Bayes Classifier
- Category: Statistical Learning
- Language: en
- Key Concepts: "Naive" Assumption, NLP, Multinomial Naive Bayes, Related Topics, Bernoulli Naive Bayes, Decision Boundary vs. Probability, Zero-Shot Baseline, Naive Bayes Classifier: The Power of Independence, Low Variance, Real-time Filtering, 1. The Probabilistic Model, 4. Modern Use Cases in AI, Gaussian Naive Bayes, Bayes' Theorem, 3. Why it Works (The Paradox of Naive Bayes)
- References: bayesian-inference, decision-theory, finance/shannon-entropy, llm, rag
- Backlinks: bayes-theorem

## Entity: online-learning-regret
- Title: Online Learning and Regret
- Category: Statistical Learning
- Language: en
- Key Concepts: Optimization, Key Algorithms, The Online Protocol, Regret, Visualization: Regret Scaling, Applications, Related Topics, Exploration-Exploitation Trade-off, Online Learning and Regret Minimization, Portfolio Selection, 2. Follow the Regularized Leader (FTRL), Ad Placement, 3. Multiplicative Weights Update (MWU) / Hedge, 1. Follow the Leader (FTL), learn
- References: convex-optimization, finance/shannon-entropy, math/information-theory, reinforcement-learning
- Backlinks: mechanism-design, multi-armed-bandits, universal-portfolios

## Entity: pca
- Title: Principal Component Analysis (PCA)
- Category: Statistical Learning
- Language: en
- Key Concepts: Visualization, Explained Variance, Spectral Theorem Connection, empirical covariance matrix, Noise Reduction, Applications, explained variance ratio, Data Compression, Related Topics, Principal Component Analysis (PCA), eigenvector, The Mathematical Objective, SVD (Singular Value Decomposition), largest eigenvalue, maximize the variance
- References: manifold-learning, math/spectral-theory-operators, variational-autoencoders
- Backlinks: alpha-orthogonalization, eigenvalues-eigenvectors, fastest-mean-reversion, matrix-decompositions, multivariate-normal, pca-statarb, tensor-decompositions

## Entity: attention-kernel
- Title: Self-Attention as a Kernel
- Category: Statistical Learning
- Language: en
- Key Concepts: The [[attention-mechanisms|Attention]] Mechanism, Linear Transformers and Feature Maps, Self-[[attention-mechanisms|Attention]] as a Kernel, Visualization: Attention Surface in RKHS, feature map, Self-[[attention-mechanisms|Attention]], Related Topics, Reproducing Kernel Hilbert Space (RKHS), [[convex-optimization|gradient descent]], Transformers as Non-parametric Learners, Nadaraya-Watson Kernel Regression, Kernel Methods, Linear Transformers, In-Context Learning, The Kernel Interpretation
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, kernel-methods-rkhs, state-space-models, transformer-architecture

## Entity: singular-learning-theory
- Title: Singular Learning Theory
- Category: Statistical Learning
- Language: en
- Key Concepts: Generalization Error, Singular Learning Theory, Real Log Canonical Threshold (RLCT), Resolution of Singularities, The Free Energy and RLCT

## Entity: statistical-mechanics-learning
- Title: Statistical Mechanics of Learning
- Category: Statistical Learning
- Language: en
- Key Concepts: Mathematical Framework, Spin-Glass Transition:, The Replica Trick, What Is It, capacity, Related Topics, SAT/UNSAT Transition:, Replica Symmetry Breaking (RSB):, Replica Trick, DERIVATION: The Free Energy of a Linear Perceptron, Replica Symmetry (RS):, Order Parameters and Overlaps, Information-Theoretic vs. Computational Gap:, Key Phenomena, Gardner Volume and Capacity
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
- Key Concepts: Overview, Mathematical Formulation

## Entity: survival-analysis
- Title: Survival Analysis Basics
- Category: Statistics
- Language: en
- Key Concepts: Hazard Function $h(t)$:, Survival Function $S(t)$:, Key Functions, Overview

## Entity: time-series-basics
- Title: Time Series Basics
- Category: Statistics
- Language: en
- Key Concepts: Overview, Autocorrelation, Stationarity

## Entity: signature-based-models
- Title: Signature-based Models
- Category: Stochastic
- Language: en
- Key Concepts: Sig-GANs, 1. Market Simulation (Generative Models), non-linear functional, linear, linear regression, Mathematical Rigor, Related Topics, 2. Pricing and Hedging, Path Signature, What is a Path Signature?, Signatures in Quantitative Finance, Universal Property, 3. Lead-Lag Relationships, Dimensionality Reduction, Visualization: The First Few Terms
- References: generative-models, path-dependent-volatility, rough-paths
- Backlinks: path-dependent-volatility

## Entity: math/backward-sde
- Title: Backward Stochastic Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: $(Y_t, Z_t)$ is the unknown pair, El Karoui–Peng–Quenez (1997) theorem, Linear BSDEs and martingale representation, sublinear expectations, Regression Monte Carlo, Historical and contemporary significance, adapted to the filtration, Existence and uniqueness theory, Polynomial chaos, Nonlinear Feynman–Kac and connection to PDEs, generator, Definition and basic structure, Numerical methods, Related concepts, G-expectation
- References: feynman-kac, malliavin-calculus, math/martingale-representation, math/quadratic-variation, optional-decomposition, stochastic-control, stochastic-differential-equations
- Backlinks: math/spdes

## Entity: bsdes-nonlinear-pdes
- Title: Backward Stochastic Differential Equations (BSDEs) & Nonlinear PDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Applications, Standard Form, Nonlinear Feynman-Kac Formula, Backward Stochastic Differential Equations (BSDEs) & Nonlinear PDEs

## Entity: clark-ocone-formula
- Title: Clark-Ocone Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Financial Hedging, The Formula, Clark-Ocone Formula, Generalizations
- Backlinks: skorokhod-integral

## Entity: math/convergence-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Extension to Random Characteristics, Convergence of numerical schemes., Connection to Contiguity, High-frequency econometrics., Applications, Related Articles, Step 3: Characteristic function convergence., Setup and Notation, Proof Strategy, The Main Convergence Theorem, Step 4: Combine., Key point:, Justification of continuous-time models., Specialization: Convergence to Levy Processes, convergence of the predictable triplets implies convergence of the processes
- References: brownian-motion, characteristic-functions, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, math/contiguity-measures, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/convergence-stochastic-integrals, math/density-processes, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/martingale-problem, math/predictable-compensator, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/convergence-stochastic-integrals
- Title: Convergence of Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Discrete hedging converges to continuous hedging, UT (uniform tightness), Application: Discrete Hedging Convergence, any reasonable discrete-time financial model converges to a continuous-time model, and any trading strategy in the discrete model converges to the corresponding continuous-time strategy, Convergence of Stochastic Integrals, Good Sequences and the UT Condition, The Semimartingale Topology, Related Articles, The Main Theorem, good sequence, The Problem, Application: Euler Scheme Convergence, The Meta-Theorem: Discrete Models Approximate Continuous Models, Stronger version., Theorem (Jakubowski-Memin-Pages; Kurtz-Protter).
- References: finance/girsanov-semimartingales, finance/semimartingale-models, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, stochastic-differential-equations
- Backlinks: math/convergence-semimartingales, math/quadratic-variation

## Entity: feynman-kac
- Title: Feynman-Kac Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Taking expectations:, Example II: The Heat Equation (V=0), Numerical Solution: Monte Carlo Instead of Finite Differences, Example I: The Black-Scholes PDE, Structural credit risk models., backward Kolmogorov equation, Proof Sketch: The Martingale Approach, Obstacle problems in turbulence., curse of dimensionality, American option theory., Connection to the Backward Kolmogorov Equation, Applications, Related Articles, alternative, Connection to Martingale Representation
- References: black-scholes, finance/girsanov-semimartingales, finance/optimal-stopping-american, fokker-planck-equation, math/martingale-representation, numerical-pde-finance, partial-differential-equations, path-integral, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/backward-sde, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, stochastic-control, stochastic-differential-equations, stochastic-processes

## Entity: hjm-framework
- Title: HJM (Heath-Jarrow-Morton) Framework
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Infinite-Dimensional Perspective, Forward Rate Dynamics, HJM Drift Condition, HJM (Heath-Jarrow-Morton) Framework
- References: math/spdes, stochastic-differential-equations
- Backlinks: finance/cir-hull-white, finance/libor-market-model

## Entity: fractional-brownian-motion-integration
- Title: Integration with Respect to Fractional Brownian Motion
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Integration with Respect to Fractional Brownian Motion, Malliavin and Wick-Itô Integrals, Pathwise Young and Rough Path Integration, Financial Modeling

## Entity: libor-market-model
- Title: LIBOR Market Model (LMM)
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Measure Change and Drift, LIBOR Market Model (LMM), Calibration and Implementation, Lognormal Forward Rates
- Backlinks: finance/bootstrapping-yield-curve

## Entity: local-time-tanaka
- Title: Local Time and Tanaka Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Occupation Time Formula, Applications, Yamada-Watanabe Theorem, Local Time, Related Topics, Tanaka's Formula, Definition and Intuition: Measuring Residence, density of time, Sticky Brownian Motion, Lévy's Theorem and the Reflection Principle, Visualization: The Occupation Density, Optimal Stopping, Itô calculus of non-smooth functions, Local Time and Tanaka's Formula, Excursion Decomposition
- References: brownian-motion, excursion-theory, math/doob-meyer-decomposition, math/optimal-stopping-markov, stochastic-differential-equations
- Backlinks: math/quadratic-variation

## Entity: levy-ito-decomposition
- Title: Lévy-Itô Decomposition
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Financial Applications, Poisson random measure is universal, Poisson Random Measure, 1. Deterministic drift, Decomposition isolates sources, Lévy Measure and Characteristic Function, 4. Large jumps, Lévy-Khintchine triplet, Quadratic variation is discontinuous, Poisson process, The Lévy-Itô Decomposition, Itô Formula for Semimartingales, Examples, Merton Jump-Diffusion, Small jumps
- References: finance/levy-processes, finance/variance-gamma, math/doleans-dade-exponential, math/infinitely-divisible-distributions, math/predictable-compensator, merton-jump-diffusion, stochastic-differential-equations
- Backlinks: math/point-processes, math/quadratic-variation, math/sde-numerical-methods, math/subordinators

## Entity: malliavin-calculus
- Title: Malliavin Calculus
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Malliavin Derivative, Applications: Greeks in Finance, Clark-Ocone Formula, Introduction, Malliavin Calculus
- Backlinks: course-math-for-ai, fbm-integration, math/backward-sde, math/quadratic-variation, math/spdes, math/stratonovich-integral, wiener-chaos

## Entity: malliavin-greeks
- Title: Malliavin Greeks
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Integration by Parts on Wiener Space, Malliavin Greeks, Advantages, Delta and Gamma Weights

## Entity: mckean-vlasov-sdes
- Title: McKean-Vlasov SDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: $N$-Particle System and Propagation of Chaos, Definition, McKean-Vlasov SDEs, Non-linear Fokker-Planck Equation
- References: partial-differential-equations, stochastic-differential-equations

## Entity: numerical-methods-jump-diffusions
- Title: Numerical Methods for Jump-Diffusions
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Infinite Activity Lévy Noise, Numerical Methods for Jump-Diffusions, Euler-Maruyama with Jumps, Higher-Order Milstein Schemes
- References: central-limit-theorem, stochastic-differential-equations

## Entity: math/sde-numerical-methods
- Title: Numerical Methods for SDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Split-Step Methods, Strong order of convergence, Lie–Trotter, Euler–Maruyama Scheme, Derivative access, Numerical Methods for SDEs, Applications, split-step, Strang splitting, Milstein Scheme, Wagner–Platen (stochastic Taylor) expansion, Wagner–Platen Expansion, Strong vs. Weak Convergence, Generative Modeling, Mathematical Finance
- References: brownian-bridge, diffusion-models, feynman-kac, finance/monte-carlo-method, levy-ito-decomposition, math/cameron-martin-formula, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/stratonovich-integral

## Entity: math/predictable-compensator
- Title: Predictable Compensator and Dual Predictable Projection
- Category: Stochastic Calculus
- Language: en
- Key Concepts: foundation, The Doob-Meyer Decomposition Revisited, Computing Compensators in Practice, predictable compensator, Example: Hawkes process., Theorem (Dual predictable projection)., Applications, compensator of the jump measure, Related Articles, Example: Poisson process., Neuroscience., Marked point processes., Credit risk., Levy processes., innovation martingale
- References: brownian-motion, finance/levy-processes, finance/semimartingale-models, martingale-clt, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-martingales, math/doob-meyer-decomposition, math/functional-limit-theorems
- Backlinks: levy-ito-decomposition, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/density-processes, math/infinitely-divisible-distributions, math/martingale-problem, math/quadratic-variation, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/quadratic-variation
- Title: Quadratic Variation
- Category: Stochastic Calculus
- Language: en
- Key Concepts: polarization identity, Definition and fundamental properties, Quadratic Variation, Semimartingale decomposition and predictable quadratic variation, Related foundations, Covariation and the polarization identity, Discontinuous semimartingales and jump decomposition, Path continuity, Brownian motion: the canonical example, Realized variance, quadratic covariation, semimartingale, Itô's formula, Itô's formula through quadratic variation, Bilinearity
- References: levy-ito-decomposition, local-time-tanaka, malliavin-calculus, math/convergence-stochastic-integrals, math/doob-meyer-decomposition, math/predictable-compensator, stochastic-differential-equations
- Backlinks: math/backward-sde, math/stratonovich-integral

## Entity: reflected-sdes-skorokhod
- Title: Reflected SDEs & Skorokhod Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: RSDE Dynamics, The Skorokhod Problem, Application to American Options, Reflected SDEs & Skorokhod Problem
- References: stochastic-control

## Entity: rough-paths
- Title: Rough Path Theory
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Applications in AI: Signature Transforms, Rough Paths and p-variation, Compact Representation, p-rough path, 2 ≤ p < 3, Related Topics, Signature, p < 2, Signature Transform, Path Networks, Terry Lyons, iterated integrals, Robustness, 3 ≤ p, Rough Path Theory
- References: brownian-motion, deep-rl-execution, stochastic-differential-equations
- Backlinks: fbm-integration, math/spdes, math/stratonovich-integral, path-dependent-volatility, signature-based-models

## Entity: math/stochastic-calculus/rough-path-signatures
- Title: Rough Path Theory and Signatures
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Key Properties:, Rough Path Theory, Signature Transforms, Rough Path Theory and Signatures, Quantitative Finance, Signature Transform, Signatures in Machine Learning, Related Topics, The Problem, Signature, Universal Feature Map:, Noise Robustness:, Invariance to Reparameterization:, Dimension Reduction:, What is a Path Signature?
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
- Key Concepts: Stochastic Development and Parallel Transport, Eells-Elworthy-Malliavin Construction, Stratonovich Calculus, Semimartingales on Manifolds
- References: manifold-learning, math/differential-geometry, stochastic-differential-equations

## Entity: math/skorokhod-topology
- Title: Skorokhod Topology and the Space D
- Category: Stochastic Calculus
- Language: en
- Key Concepts: jump times, Aldous condition, Financial mathematics., Theorem (Aldous-Rebolledo criterion)., Convergence to Levy processes., values, Identify the limit, The J1 Topology (Skorokhod's Main Topology), jumps, Applications, Related Articles, strictly finer, Embed, The Space $\mathbb{D}[0,T]$, Key properties of $(\mathbb{D}[0,T], J_1)$:
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, math/discrete-martingales, math/weak-convergence-prokhorov
- Backlinks: math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/martingale-problem, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/triangular-arrays-processes

## Entity: stable-processes
- Title: Stable Processes and Lévy Flights
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Optimization, $\alpha = 1$, Heavy Tails, Super-diffusion, Financial Crashes, Lévy-flight-based Metaheuristics, Applications, Related Topics, Foraging Patterns, infinite variance, Visualization: Trajectory Comparison, Fractional [[spectral-graph-theory|Laplacian]], Lévy Flights, Stable Processes and Lévy Flights, Brownian Motion
- References: extreme-value-theory, finance/levy-processes, fractional-brownian-motion, spectral-graph-theory

## Entity: stochastic-manifolds
- Title: Stochastic Calculus on Manifolds
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stratonovich vs. Itô, Brownian Motion on a [[manifold-learning|Manifold]], Applications, Related Topics, Biophysics, stochastic parallel transport, Robotics and Control, The Challenge of Curvature, Visualization: Random Walk on a Sphere, Differential Geometry, Stratonovich integral, Stratonovich, Probability Theory, Itô, Eells-Elworthy-Malliavin (EEM)
- References: manifold-learning, math/differential-geometry, ricci-flow, stochastic-differential-equations

## Entity: stochastic-control
- Title: Stochastic Control
- Category: Stochastic Calculus
- Language: en
- Key Concepts: free boundary problem, Bellman equation, policy optimization, linear in state, Verification theorem, Riccati differential equation, Linear-Quadratic-Gaussian (LQG) Control, The optimal risky allocation is constant, Optimal Execution and Market Microstructure, adapted control process, The Merton Portfolio Problem (1969), Viscosity Solutions and Singular Control, [[stochastic-differential-equations|Stochastic differential equations]], value function, Stochastic control
- References: avellaneda-stoikov, feynman-kac, finance/markowitz-mean-variance, finance/optimal-stopping-american, numerical-pde-finance, optimal-execution, reinforcement-learning, stochastic-differential-equations
- Backlinks: convex-analysis, convex-optimization, math/backward-sde, math/ode-stability, mdp, merton-portfolio, optimal-execution, path-integral-control, reflected-sdes-skorokhod, stochastic-games, stochastic-maximum-principle

## Entity: stochastic-control-partial-info
- Title: Stochastic Control with Partial Information
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stochastic Control with Partial Information, The Information State, Dual Control, Filtering:, Separation Principle, Control:
- References: nonlinear-filtering, reinforcement-learning

## Entity: stochastic-differential-equations
- Title: Stochastic Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: 3. Itô's Lemma, Reverse SDE, 6. Applications, nowhere differentiable, Physics, Yamada-Watanabe Theorem, 4. Theory of Solutions, Weak Solutions, Generative AI, strong solution, Related Topics, Score function, Fokker-Planck equation, 5. The Martingale Problem (Stroock-Varadhan), Mathematical Finance
- References: brownian-motion, feynman-kac, geometric-brownian-motion, heston-model, math/martingale-problem, nonlinear-filtering
- Backlinks: activation-functions-math, brownian-bridge, computational-complexity-pac-bayes, conditionally-gaussian-processes, course-math-for-ai, differential-equations, diffusion-models, diffusion-sde-math, equivariant-diffusion-models, ergodic-theory-sgd, feller-processes, feynman-kac, finance/hjm-framework, finance/libor-market-model, finance/short-rate-models, fokker-planck-equation, generative-scenario-models, geometric-brownian-motion, hjm-framework, information-theory-rate-distortion, levy-ito-decomposition, local-time-tanaka, math-reasoning-chains-rl, math/backward-sde, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/interacting-particle-systems, math/martingale-problem, math/martingale-representation, math/ode-stability, math/quadratic-variation, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, math/tightness-semimartingales, mckean-vlasov-sdes, merton-portfolio, mixture-of-experts-routing, neural-operators, neural-sdes-finance, nonequilibrium-stat-mech-diffusion, nonequilibrium-statmech, nonlinear-filtering, numerical-methods-jump-diffusions, ornstein-uhlenbeck, ornstein-uhlenbeck-process, pde-hamilton-jacobi, poisson-jump-sdes, quantization-ptq-information, reasoning-models-prm-orm, regularization-implicit-bias, renormalization-group-dl, rough-paths, semimartingales-on-manifolds, speculative-decoding-medusa, spin-glasses-hopfield, stochastic-calculus-manifolds, stochastic-control, stochastic-games, stochastic-manifolds, stochastic-maximum-principle, stochastic-processes, tokenization-bpe-unigram, wentzell-freidlin, wiener-chaos

## Entity: stochastic-games
- Title: Stochastic Differential Games
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Types of Equilibria, Applications, Stochastic Differential Games, 2. Zero-Sum Games, 1. Nash Equilibrium, Mathematical Formulation, Visualization: Strategy Interaction, Related Topics, The Master Equation and MFGs, saddle-point, Isaacs Equation, Quantitative Finance, Cybersecurity, Climate Change, Stochastic Differential Equations (SDEs)
- References: mean-field-games, stochastic-control, stochastic-differential-equations

## Entity: fbm-integration
- Title: Stochastic Integration for fBM
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Rough Path Theory, not, not a semimartingale, Divergence Operator (Skorokhod Integral), The Challenge, Young Integration, Why It Matters for Finance and AI, Stochastic Integration for Fractional Brownian Motion, Related Topics, Wick product, Visualization: Integration Regularity, Long-Memory Systems, Fractional Volatility, 2. The Stratonovich-type Integral (Wick Product), Rough Volatility
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
- Key Concepts: stochastic Burgers equation, asymmetric simple exclusion process, Connections to Interacting Particle Systems, Kardar–Parisi–Zhang (KPZ) equation, The Semilinear SPDE Framework, Introduction, stochastic heat equation, fixed-point arguments, KPZ universality class, variational methods, renormalization, paracontrolled distributions, Hairer's Regularity Structures and Paracontrolled Distributions, Regularity structures, Applications and Open Problems
- References: feynman-kac, malliavin-calculus, math/backward-sde, math/interacting-particle-systems, partial-differential-equations, rough-paths, spectral-graph-theory, stochastic-differential-equations
- Backlinks: hjm-framework

## Entity: math/stratonovich-integral
- Title: Stratonovich Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Stratonovich Chain Rule, rough paths theory, Malliavin Calculus and Functional Derivatives, Physics, $O(1)$ difference, Malliavin calculus, Martingale property, without correction, statistical mechanics, Stratonovich lift, Physical Interpretation and Langevin Equations, Rough Paths and the Stratonovich Lift, Wong-Zakai limit, subdivides the Brownian increments, Definition via Midpoint Riemann Sums
- References: brownian-motion, feynman-kac, malliavin-calculus, manifold-learning, math/cameron-martin-formula, math/quadratic-variation, math/sde-numerical-methods, rough-paths, stochastic-differential-equations
- Backlinks: wiener-chaos

## Entity: skorokhod-integral
- Title: The Skorokhod Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Non-Adapted Integration, The Skorokhod Integral, Duality with Malliavin Derivative, Anticipative Calculus
- References: clark-ocone-formula

## Entity: math/martingale-problem
- Title: The Stroock-Varadhan Martingale Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: solves the martingale problem, Connection to SDEs, Examples and Applications, Weak existence and uniqueness in law for the [[stochastic-differential-equations|SDE]] are equivalent to well-posedness of the martingale problem., Proof Sketch of Uniqueness, Why Martingale Problems Are Easier, Theorem., Semimartingale Perspective, The Stroock-Varadhan Martingale Problem, Related Articles, probability measure, Interacting particle systems., Theorem (Stroock-Varadhan)., Fokker-Planck equation, No reference probability space needed.
- References: brownian-motion, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, stochastic-differential-equations
- Backlinks: stochastic-differential-equations

## Entity: math/tightness-semimartingales
- Title: Tightness of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: tight, Diffusion approximations., Applications, Related Articles, Tightness of Semimartingales, reduces tightness of the process to tightness of its characteristics, Bounded initial values:, C-tight, Numerical schemes., Tightness in the Skorokhod Space, tightness, Definition., UT (uniform tightness), Theorem (Rebolledo, 1979)., C-Tightness
- References: brownian-motion, finance/semimartingale-models, martingale-clt, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov, stochastic-differential-equations
- Backlinks: math/convergence-stochastic-integrals, math/triangular-arrays-processes

## Entity: math/triangular-arrays-processes
- Title: Triangular Arrays and Convergence to Processes with Independent Increments
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Proof Architecture, Convergence to Levy processes., Theorem., Tightness., Convergence to general processes with independent increments., Related Articles, Uniqueness forces full convergence., Convergence to Brownian motion (functional CLT)., Realized volatility, The Infinitesimal Condition, Setting: Triangular Arrays of Processes, Power variations, infinitesimal, Drift convergence:, Infinitesimal condition (Lindeberg):
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/levy-processes, finance/semimartingale-models, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales
- Backlinks: math/functional-limit-theorems

## Entity: wiener-chaos
- Title: Wiener Chaos and Multiple Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: [[characteristic-functions|Characteristic functions]], Ornstein-Uhlenbeck Operator, Product rule, Itô Isometry for Multiple Integrals, Wiener-Itô Decomposition, Malliavin Derivative, First Wiener Chaos, Equivalent definition, Fourth Moment Theorem (Nualart-Peccati), Integration by parts, Hypercontractivity, Applications in Financial Mathematics, Quantum Field Theory, Number-operator approach, [[stratonovich-integral|Stratonovich integrals]]
- References: characteristic-functions, malliavin-calculus, math/information-theory, math/stratonovich-integral, stochastic-differential-equations

## Entity: arch-models
- Title: ARCH Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: Mathematical Framework, Kurtosis, Tail estimation, Mean reversion, Prerequisites, Heavy tails, EGARCH, Portfolio Optimization, unconditional variance, Strict stationarity, volatility clustering, GARCH(p,q), Overview & Background, Related Topics, Key Properties
- References: ar-models, arma-models, finance/levy-processes, garch-models, mcmc, volatility-forecasting
- Backlinks: ar-models, convolutional-volatility-resolution-clustering, finance/stylized-facts-returns, math/central-limit-theorem, math/ergodic-theorems-birkhoff, math/martingale-clt, math/stochastic-recursive-sequences

## Entity: bmo-martingales
- Title: BMO Martingales
- Category: Stochastic Processes
- Language: en
- Key Concepts: Definition, Application: Kazamaki and Novikov, BMO Martingales, John-Nirenberg Inequality

## Entity: finance/bipower-variation
- Title: Bipower Variation
- Category: Stochastic Processes
- Language: en
- Key Concepts: HAR-RV-J Model, Background: Realised Variance and Jumps, tripower quarticity, Convergence, Related Articles, Bipower Variation, Bipower Variation (BPV), continuous component, Heterogeneous Autoregressive, Jump Test, Definition, Implementation
- References: extreme-value-theory, finance/levy-processes, finance/realized-kernels, garch-models, volatility-forecasting
- Backlinks: finance/rough-volatility, finance/stylized-facts-returns, finance/variance-swaps, jump-robust-volatility

## Entity: brownian-bridge
- Title: Brownian Bridge
- Category: Stochastic Processes
- Language: en
- Key Concepts: Karhunen-Loève Expansion, Sequential testing:, Barrier option pricing:, Applications in Finance and Numerical Methods, Bridge sampling:, Related Constructions, Brownian Meanders and Excursions, Kolmogorov-Smirnov Statistics, [[stochastic-differential-equations|SDE]] Representation and Numerical Singularity, Definition, Bridge Between Arbitrary Points
- References: finance/barrier-asian-options, finance/monte-carlo-method, math/spectral-theory-operators, ornstein-uhlenbeck-process, stochastic-differential-equations
- Backlinks: course-math-for-ai, empirical-processes, math/gaussian-process-sample-paths, math/random-walks, math/sde-numerical-methods

## Entity: brownian-motion
- Title: Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Continuous paths, Mathematical Framework, Portfolio Simulation, Risk Management, first passage time, Quadratic Variation, quadratic variation, Martingale, Itô's Lemma, Multidimensional Brownian Motion, Axiomatic Definition, Stationary Gaussian increments, Infinite variation, Sample Brownian Paths, Derivative Pricing
- References: avellaneda-stoikov, black-scholes, finance/levy-processes, geometric-brownian-motion, mcmc, schrodinger-equation
- Backlinks: avellaneda-stoikov, black-scholes, copula-models, cox-process, dv01, excursion-theory, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/change-of-numeraire, finance/coherent-risk-measures, finance/efficient-market-hypothesis, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/free-boundary-american, finance/girsanov-semimartingales, finance/hjm-framework, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/libor-market-model, finance/quasi-monte-carlo, finance/real-options, finance/realized-kernels, finance/self-similarity-fractality, finance/semimartingale-models, finance/short-rate-models, finance/stable-distributions, fokker-planck-equation, geometric-brownian-motion, innovation-process, law-iterated-logarithm, local-time-tanaka, martingale, math/absolute-continuity-process-measures, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/central-limit-theorem, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-markov-chains, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/ergodic-theorems-birkhoff, math/functional-limit-theorems, math/glivenko-cantelli, math/hausdorff-measure, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/martingale-clt, math/martingale-problem, math/martingale-representation, math/predictable-compensator, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, math/stratonovich-integral, math/tightness-semimartingales, math/triangular-arrays-processes, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, multifractal-processes, neural-odes, nonlinear-filtering, ornstein-uhlenbeck, partial-differential-equations, rough-paths, sle, stochastic-differential-equations, stochastic-processes

## Entity: finance/cir-hull-white
- Title: CIR and Hull-White Interest Rate Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: Cox-Ingersoll-Ross (CIR), Zero-coupon bond price, Hull-White, Related Articles, CIR and Hull-White Interest Rate Models, Implementation, Hull-White Model, Feller condition, Cox-Ingersoll-Ross Model
- References: finance/libor-sofr, finance/nelson-siegel-svensson, finance/swaps, hjm-framework, ornstein-uhlenbeck-process
- Backlinks: finance/bond-options-gaussian, finance/bootstrapping-yield-curve, finance/libor-market-model, finance/libor-sofr, finance/short-rate-models

## Entity: convergence-of-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Processes
- Language: en
- Key Concepts: Tightness and Aldous' Criterion, Skorokhod Space $J_1$ Topology, Convergence of Characteristics, Convergence of Semimartingales
- References: statistical-mechanics

## Entity: cox-process
- Title: Cox Process (Doubly Stochastic)
- Category: Stochastic Processes
- Language: en
- Key Concepts: exponential functional, Mathematical Framework, CIR Intensity Model, Var / Mean, Filtering, Insurance Catastrophe, Comparison: Poisson vs Cox Process, Hawkes process, No memory given intensity, Cox Process (Doubly Stochastic), Marked Cox process, Jump intensity, Overview & Background, Intensity unobservability, intensity-based (reduced-form) credit risk models
- References: avellaneda-stoikov, brownian-motion, copula-models, cs01, finance/levy-processes
- Backlinks: avellaneda-stoikov, copula-models, cs01, finance/copula-models, finance/hawkes-process, finance/levy-processes, finance/semimartingale-models, math/point-processes

## Entity: dirichlet-forms
- Title: Dirichlet Forms
- Category: Stochastic Processes
- Language: en
- Key Concepts: Brownian motion, Connection to Operators and Processes, Dirichlet Form, Fractals and Manifolds, Markov processes, Generator, Related Topics, SDEs with Bad Drift, Markov Process, Formal Definition, Why Use Dirichlet Forms?, energy, The Core Concept: Energy and [[shannon-entropy|Entropy]], Stability, Dirichlet Forms
- References: finance/shannon-entropy, measure-theory, operator-semigroups

## Entity: excursion-theory
- Title: Excursion Theory
- Category: Stochastic Processes
- Language: en
- Key Concepts: excursions, The Excursion Process, Fine Structure of Trajectories, The Intuition: Slicing the Path, Fluctuation Theory, Applications, Itô Measure, Stochastic Integration, Kiyosi Itô, Related Topics, Poisson Point Process, Excursion Theory, Itô's Excursion Measure ($n$), Visualization: Excursion Decomposition
- References: brownian-motion, poisson-process
- Backlinks: local-time-tanaka

## Entity: feller-processes
- Title: Feller Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Courrège's Theorem, Càdlàg Paths, Strong Markov Property, 3. Courrège's Theorem: The Anatomy of a Generator, Hille-Yosida Theorem, Lévy jump kernel $\nu(x, dy)$, B. Fractional Kinetics and Anomalous Diffusion, [[levy-processes|Lévy Process]], 1. The Functional Analytic Definition, Diffusion matrix $a_{ij}(x)$, Related Topics, Lévy-type operator, A. Feller Processes in Quantitative Finance, Cox-Ingersoll-Ross (CIR), Infinitesimal Generator
- References: finance/levy-processes, operator-semigroups, spectral-graph-theory, stochastic-differential-equations
- Backlinks: martingale, operator-semigroups

## Entity: finance/fractional-fokker-planck
- Title: Fractional Fokker-Planck Equation
- Category: Stochastic Processes
- Language: en
- Key Concepts: Sub-diffusion, Multiscaling, Prerequisites, anomalous diffusion, Practical Applications in Quant Finance, Python: Numerical Concept (CTRW Simulation), Connection to the Hurst Exponent, Tempered Lévy processes, Anomalous Diffusion in Markets, Super-diffusion, non-Gaussian, Space-Fractional FPE (Lévy Flights), Limitations and Extensions, non-Markovian, Related Topics
- References: brownian-motion, finance/hurst-exponent, finance/levy-processes, garch-models, geometric-brownian-motion, mcmc, spectral-graph-theory
- Backlinks: finance/hurst-exponent, finance/levy-processes, finance/self-similarity-fractality, partial-differential-equations, pinns

## Entity: freidlin-wentzell-theory
- Title: Freidlin-Wentzell Theory
- Category: Stochastic Processes
- Language: en
- Key Concepts: Freidlin-Wentzell Theory, Action Functional (Rate Function), Exit Problem and Kramers' Law, Small Noise Perturbation
- References: statistical-mechanics

## Entity: gff
- Title: Gaussian Free Field (GFF)
- Category: Stochastic Processes
- Language: en
- Key Concepts: 3. The Link to SLE and Geometry, Effective Field Theory, SLE curves, Spatial Correlation Structures, Random Surfaces, Related Topics, Dirichlet Energy, 2. Physical Significance, Gaussian Free Field (GFF), [[sle|Schramm-Loewner Evolution]], Brownian Motion, Green's Function, Intuition, 5. Why Tier-1 Quants care, Statistical Mechanics
- References: laplacian, quantum-information-entropy, schwartz-distributions, sle
- Backlinks: sle

## Entity: math/gaussian-process-sample-paths
- Title: Gaussian Process Sample Paths
- Category: Stochastic Processes
- Language: en
- Key Concepts: Dudley's [[shannon-entropy|entropy]] integral, Consequence, Hölder Exponents and Fractional Brownian Motion, metric structure, Talagrand majorizing measure theorem, Interpretation, Application to Brownian motion, Talagrand's Majorizing Measures, [[Concentration inequalities]], mean-square differentiable, Reproducing Kernel Hilbert Space (RKHS), sub-Gaussian, Dudley's entropy integral, metric [[shannon-entropy|entropy]], Cameron–Martin formula
- References: brownian-bridge, empirical-processes, finance/shannon-entropy, fractional-brownian-motion, math/cameron-martin-formula, math/concentration-inequalities
- Backlinks: math/nonparametric-regression

## Entity: geometric-brownian-motion
- Title: Geometric Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Continuous paths, Constant volatility, Prerequisites, Real options analysis, Monte Carlo simulation, log-normally distributed, Limitations and Extensions, Itô's Lemma and the Closed-Form Solution, Interactive Path Simulation, Portfolio simulation, Related Topics, The Stochastic Differential Equation, Key Statistical Properties, Risk-Neutral Pricing, Correlation structure
- References: black-scholes, brownian-motion, finance/levy-processes, heston-model, stochastic-differential-equations, volatility-forecasting
- Backlinks: black-scholes, brownian-motion, differential-equations, finance/bachelier-formula, finance/black-scholes-derivations, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hurst-exponent, finance/levy-esscher-continuous, finance/realized-kernels, finance/semimartingale-models, finance/stefan-problem-american, finance/volatility-surface, fokker-planck-equation, futures-hedging, greeks-options, math/absolute-continuity-process-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/functional-limit-theorems, math/martingale-problem, math/sequential-hypothesis-testing, merton-portfolio, risk-neutral-valuation, stochastic-differential-equations, stochastic-processes

## Entity: finance/hawkes-process
- Title: Hawkes Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Exponential kernel assumption, Financial Applications, Flash crashes, excitation kernel, Hawkes process, Limitations and Extensions, Python: Simulating a Hawkes Process, Order book dynamics, News impact, Related Topics, Hawkes Process, Stationarity requirement, Multivariate Extension, Credit default cascades, Calibration
- References: cox-process, finance/monte-carlo-method, garch-models, geometric-brownian-motion
- Backlinks: finance/order-flow-imbalance, finance/semimartingale-models, lob-propagators, market-microstructure, multivariate-hawkes, queue-reactive-models

## Entity: finance/hurst-exponent
- Title: Hurst Exponent
- Category: Stochastic Processes
- Language: en
- Key Concepts: Persistent (Trending) Series, Financial Applications, Estimation bias, Time-varying H, Limitations and Extensions, Random Walk (Brownian Motion), Hurst Exponent (H), Multifractal markets, Mathematical Foundation: R/S Analysis, Related Topics, Regime classification, Python: Multiple Hurst Estimators, Market efficiency testing, Spurious long memory, Strategy selection
- References: finance/fractional-fokker-planck, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, geometric-brownian-motion, hidden-markov-models
- Backlinks: arima-models, finance/fisher-transform, finance/fractional-fokker-planck, finance/hilbert-huang-transform, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, finance/self-similarity-fractality, finance/stable-distributions, finance/stylized-facts-returns, fractional-cointegration

## Entity: finance/hyperbolic-distributions
- Title: Hyperbolic Distributions and Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: infinitely divisible, "hand-crafted" compromise, Generalized Hyperbolic (GH), Variance Gamma, Stress testing, Comparison with alternatives, Connection to stable distributions, Hyperbolic, Related Articles, Lévy process with GH increments, VaR and CVaR, [[stable-distributions|Stable]], Connection to Lévy processes, all moments are finite, heavy tails, finite moments of all orders, and analytical formulas
- References: brownian-motion, cornish-fisher-cvar, finance/fft, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/levy-processes
- Title: Lévy Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: No path continuity, Jumps, Variance Gamma (VG) Process, Stationary increments, Diffusion, Definition and Properties, Mathematical Framework: The Lévy-Itô Decomposition, Compound Poisson Process, Limitations and Extensions, CGMY / KoBoL Process, Related Topics, Independent increments, Key Properties, Continuity in probability, Parameter Table
- References: cox-process, finance/fractional-fokker-planck, finance/monte-carlo-method, heston-model, ornstein-uhlenbeck-process
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, brownian-motion, characteristic-functions, clt, cornish-fisher-cvar, cox-process, feller-processes, finance/bipower-variation, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/merton-jump-diffusion, finance/variance-gamma, finance/zeta-field, geometric-brownian-motion, kelly-criterion, levy-ito-decomposition, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/martingale-representation, math/predictable-compensator, math/skorokhod-topology, math/stochastic-recursive-sequences, math/subordinators, math/triangular-arrays-processes, math/wiener-hopf-factorization, multifractal-processes, numeraire-invariant-hedging, occupation-measures-local-times, ornstein-uhlenbeck-process, stable-processes, stochastic-processes

## Entity: math/markov-chain-mixing
- Title: Markov Chain Mixing Times
- Category: Stochastic Processes
- Language: en
- Key Concepts: Reversibility and the Poincaré Inequality, Cheeger's inequality, Spectral gap, Minimum stationary probability, lazy, Coupon Collector Example, mixing time at tolerance $\varepsilon$, preconditioning, detailed balance condition, burn-in period, conductance, Mixing Time Definition, total variation distance, Conductance and Cheeger's Inequality, Poincaré inequality
- References: central-limit-theorem, math/concentration-inequalities, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/renewal-theory, math/spectral-theory-operators
- Backlinks: math/coupling-methods, math/geometric-ergodicity, math/interacting-particle-systems, math/spectral-theory-operators, queuing-theory, random-walks-groups, time-series

## Entity: finance/merton-jump-diffusion
- Title: Merton Jump-Diffusion Model
- Category: Stochastic Processes
- Language: en
- Key Concepts: Merton Jump-Diffusion Model, Related Articles, Model, Option Pricing Formula, Merton (1976) Jump-Diffusion model, Implementation
- References: black-scholes, finance/levy-processes, finance/variance-gamma, heston-model

## Entity: multifractal-processes
- Title: Multifractal Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Fluid Turbulence, Network Traffic, Brownian motion, Financial Markets (MSMR), Multifractal Spectrum ($f(\alpha)$), Applications in Finance and Physics, Multifractal Cascade Models, Visualization: Monofractal vs. Multifractal, Related Topics, The Limitation of Monofractals, Multifractal Random Walk, Multifractal Processes, Multiplicative Cascade, Multifractal Process
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
- Key Concepts: The [[stochastic-differential-equations|SDE]] Definition, stationary Gaussian distribution, Applications, 3. Autocovariance, Physics, mean-reverting, Related Topics, $\mu$ (Long-term mean), Visualization: Mean Reversion Path, Ornstein-Uhlenbeck Process, Key Properties, 2. Stationarity and Normality, $\theta > 0$ (Rate of mean reversion), $\sigma > 0$ (Volatility), 1. Mean Reversion
- References: brownian-motion, math/stationary-wide-spectral, stochastic-differential-equations
- Backlinks: course-math-for-ai, stochastic-processes

## Entity: ornstein-uhlenbeck-process
- Title: Ornstein-Uhlenbeck Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Pairs Trading Spread Model, Stochastic Differential Equation ([[stochastic-differential-equations|SDE]]), Negative values, long-term mean, Limitations and Extensions, Exact Solution via Integrating Factor, Mean-Reverting Property, Related Topics, Parameter Table, Vasicek (1977), Multidimensional OU, Visualization, volatility, MLE Parameter Estimation, Time-varying parameters
- References: black-scholes, finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, heston-model, hidden-markov-models, mcmc, pairs-trading, stochastic-differential-equations
- Backlinks: brownian-bridge, diffusion-models, fastest-mean-reversion, finance/cir-hull-white, finance/levy-processes, finance/longstaff-schwartz, finance/particle-filter, fokker-planck-equation, pairs-trading, pca-statarb

## Entity: math/point-processes
- Title: Point Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Poisson point process, Poisson process with intensity, counting function, Thinning, conditional intensity function, point process, Cox Processes (Doubly Stochastic Poisson), moment measure, Poisson marginals, Neuroscience, Superposition and Thinning Theorems, Hawkes process, Papangelou conditional intensity, Void probabilities, stationary and ergodic
- References: cox-process, levy-ito-decomposition, math/branching-processes, math/kolmogorov-equations-ctmc, math/renewal-theory
- Backlinks: math/survival-analysis, poisson-process

## Entity: poisson-process
- Title: Poisson Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Thinning, Physics, Poisson Distribution, counting random events, Exponential Distribution, Visualization: Arrivals over Time, Applications, memoryless, Related Topics, 2. Waiting Times (Arrival Times), Queueing Theory, Key Properties, 3. Superposition and Thinning, Superposition, 1. Inter-arrival Times
- References: distributions-zoo, math/point-processes, math/renewal-theory
- Backlinks: course-math-for-ai, distributions-zoo, excursion-theory, exponential-distribution, queuing-theory, stochastic-processes

## Entity: math/random-walks
- Title: Random Walks
- Category: Stochastic Processes
- Language: en
- Key Concepts: First Passage Times and Spitzer's Identity, Recurrence and Transience (Pólya's Theorem), Queuing theory, random walk, Renewal theory, Strassen's law of the iterated logarithm, Generating Functions and Fourier Analysis, Donsker's Invariance Principle, Wald's Identity and Optional Stopping, General Random Walks and Cramér Condition, Lévy's arc-sine laws, Spitzer's Identity, Random Walks, Simple Symmetric Random Walk, Reflection Principle and Ballot Problem
- References: brownian-bridge, central-limit-theorem, math/discrete-martingales, math/functional-limit-theorems, math/large-deviations-cramer, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/rough-volatility
- Title: Rough Volatility and Fractional Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Rough Volatility and Fractional Brownian Motion, Related Articles, Fractional Brownian Motion, Empirical finding, Rough Bergomi Model (Bayer, Friz, Gatheral 2016), Rough Volatility, Implementation, Implied vol skew
- References: finance/bipower-variation, finance/sabr-model, finance/variance-gamma, heston-model
- Backlinks: deep-hedging, finance/dupire-local-vol, garch-models, neural-sdes-finance, volatility-arbitrage, volatility-smile

## Entity: finance/self-similarity-fractality
- Title: Self-Similarity and Fractality of Financial Series
- Category: Stochastic Processes
- Language: en
- Key Concepts: DFA, Log-absolute returns, rough Heston, Fractional Brownian motion (fBm), Empirical $H$ in finance:, arbitrage exists, Self-Similarity and Fractality of Financial Series, prices themselves, scale invariance, Stock log-prices, Rough volatility, anti-persistence, Mixed fBm, their volatility, not a semimartingale
- References: brownian-motion, finance/bs-market-self-financing, finance/fractional-fokker-planck, finance/ftap-first-fundamental-theorem, finance/hurst-exponent, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns, math/stationary-wide-spectral

## Entity: small-ball-probabilities
- Title: Small Ball Probabilities for Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Applications, Asymptotic Definition, Small Ball Probabilities for Stochastic Processes, Connection to [[shannon-entropy|Entropy]] and Spectra
- References: finance/shannon-entropy, quantization

## Entity: finance/stable-distributions
- Title: Stable Distributions and α-Stable Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: α-stable Lévy processes, The stability property, EVT, Key property., Generalized Central Limit Theorem, Infinite variance., Mandelbrot's price model., Related Articles, asymmetry, infinite variance, heavy tails, only, stable distribution, Truncated stable, Parametric heavy tails
- References: brownian-motion, cornish-fisher-cvar, extreme-value-theory, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/self-similarity-fractality, finance/stylized-facts-returns
- Backlinks: finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/stylized-facts-returns, math/central-limit-theorem, math/infinitely-divisible-distributions, math/local-limit-theorems, math/lundberg-cramer-ruin, math/triangular-arrays-processes

## Entity: stochastic-processes
- Title: Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: By State Space $S$, Physics, [[brownian-motion]] (Wiener Process), Continuous-time processes, [[geometric-brownian-motion]], By Index Set $T$, Stationary Processes, Discrete-time processes, [[stochastic-differential-equations]] (SDEs), Martingales, Applications, Related Topics, Filtrations, Biology, [[feynman-kac]] Formula
- References: brownian-motion, ergodic-theory, feynman-kac, finance/levy-processes, geometric-brownian-motion, markov-chains, math/discrete-markov-chains, math/discrete-martingales, math/kolmogorov-equations-ctmc, math/martingale-representation, math/stationary-wide-spectral, ornstein-uhlenbeck, poisson-process, random-walks, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: kuramoto-model, law-iterated-logarithm

## Entity: math/subordinators
- Title: Subordinators
- Category: Stochastic Processes
- Language: en
- Key Concepts: Bochner subordination, Laplace exponent, Mittag-Leffler function, Connection to Renewal Theory, Inverse Subordinators and Mittag-Leffler Processes, Time-deformed models, Stable subordinator., Fractional Calculus and Time-Changed Processes, Gamma process., stochastic time clocks, time-change, Related Articles, Compound Poisson process., $\alpha$-stable subordinator, Subordinators
- References: finance/levy-processes, fractional-brownian-motion, levy-ito-decomposition, math/branching-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/variance-gamma
- Title: Variance Gamma Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Variance Gamma Process, Option Pricing via FFT, Related Articles, Characteristic function, Variance Gamma (VG), Definition, Parameter Effects
- References: finance/levy-processes, heston-model, merton-jump-diffusion
- Backlinks: finance/barrier-asian-options, finance/merton-jump-diffusion, finance/rough-volatility, levy-ito-decomposition, svi-model

## Entity: volatility-forecasting
- Title: Volatility Forecasting (GARCH, HAR)
- Category: Stochastic Processes
- Language: en
- Key Concepts: GARCH Extensions, Mathematical Framework, ML forecasting, Realized GARCH, Mean reversion, VaR/ES computation, EGARCH, Student-t GARCH, Volatility targeting, Multivariate vol, bipower variation, Limitations and Extensions, Intraday risk, Volatility forecasting, volatility clustering
- References: finance/monte-carlo-method, finance/realized-kernels, finance/value-at-risk, garch-models, heston-model, mcmc, transformer-architecture
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, arma-models, convolutional-volatility-resolution-clustering, cornish-fisher-cvar, finance/bipower-variation, finance/multivariate-hmm, finance/realized-kernels, finance/sabr-model, finance/singular-spectral-analysis, finance/variance-swaps, finance/wavelet-transform, geometric-brownian-motion, kalman-filter, temporal-fusion-transformer, volatility-modulated-spectral-surface

## Entity: finance/zeta-field
- Title: Zeta Field
- Category: Stochastic Processes
- Language: en
- Key Concepts: Mathematical Framework, Long-memory modeling, Zeros, The Riemann Zeta Function, Empirical testing, Zeta Field, Euler product, Multifractal risk, Computational intractability, Dirichlet Series Model for Asset Prices, Limitations and Extensions, zeta regularization, functional equation, Hilbert-Pólya conjecture, level repulsion
- References: finance/levy-processes, finance/random-matrix-theory, finance/shannon-entropy, finance/spectral-analysis, math/spectral-theory-operators, quantum-entanglement

## Entity: financial-entropy
- Title: Entropy and Market Complexity
- Category: Time Series
- Language: en
- Key Concepts: Lempel-Ziv complexity, structure, 1. Shannon [[shannon-entropy|Entropy]] as Predictability, Transfer Entropy, Granger Causality, Anomalies, Efficiency Connection, Shannon [[shannon-entropy|Entropy]], Related Topics, variance, 4. Transfer Entropy and Causality, 3. Approximate Entropy (ApEn) and Sample Entropy, predictability, [[shannon-entropy|Entropy]] in Finance: Lempel-Ziv and Market Complexity, Visualization: Entropy during a Crash
- References: causal-inference, finance/lempel-ziv-complexity, finance/shannon-entropy, nlp-financial-analysis
- Backlinks: entropy-pooling

## Entity: fractional-cointegration
- Title: Fractional Cointegration
- Category: Time Series
- Language: en
- Key Concepts: Fractional Cointegration, The Long Memory Problem, Fractional Cointegration Mechanism, long-range dependence, ARFIMA, Related Topics, Long Memory, half-life of mean reversion, ARFIMA Models, Trading Application, fractionally cointegrated, Visualization: Decay Speeds
- References: finance/hurst-exponent, fractional-brownian-motion, pairs-trading

## Entity: garch-models
- Title: GARCH and ARCH Models
- Category: Time Series
- Language: en
- Key Concepts: Insight, 1. ARCH Model (Engle, 1982), The Persistence, 2. GARCH Model (Bollerslev, 1986), Visualization: Volatility Spikes, Maximum Likelihood (MLE), 4. Estimation and AI Integration, Related Topics, GARCH, Deep GARCH, 3. Asymmetric GARCH (GJR-GARCH), Neural GARCH, ARCH, Leverage Effect, ARCH and GARCH Models: Volatility Clustering
- References: finance/rough-volatility, mle, time-series
- Backlinks: arch-models, convolutional-volatility-resolution-clustering, finance/bipower-variation, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hidden-markov-models, finance/realized-kernels, finance/stylized-facts-returns, finance/value-at-risk, finance/variance-swaps-vix, generative-scenario-models, math/ergodic-theorems-birkhoff, math/martingale-clt, math/stochastic-recursive-sequences, temporal-fusion-transformer, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: hmm-particle-filters
- Title: Hidden Markov Models & Particle Filters
- Category: Time Series
- Language: en
- Key Concepts: Particle Filters, Hidden Markov Models & Particle Filters, Update (Weight), Filtering, Pairs Trading, Predict (Mutate), Particle Filter (Sequential Monte Carlo), Related Topics, Hidden Markov Models (HMM), Transition Matrix, Emission Probability, Visualization: Particle Survival, Viterbi algorithm, Kalman Filter, Resample (Darwinian Selection)
- References: mcmc, regime-switching-factors
- Backlinks: hmm, lead-lag-analysis, lsv-model, mcmc, path-dependent-volatility, total-probability-variance, vpin

## Entity: jump-robust-volatility
- Title: Jump-Robust Realized Variance
- Category: Time Series
- Language: en
- Key Concepts: 2. MinRV and MedRV (Andersen et al., 2012), Realized Variance (RV), The Problem with Standard RV, Visualization: Volatility vs. Jumps, MinRV, Related Topics, Price Jumps, Jump-Robust Realized Variance (MinRV and MedRV), 1. Bipower Variation (BV), MedRV, Why It Matters: Identifying Jumps, volatility risk premium, Jump-Robust Estimators
- References: finance/bipower-variation, finance/realized-kernels, merton-jump-diffusion

## Entity: morse-theory
- Title: Morse Theory
- Category: Topology
- Language: en
- Key Concepts: Morse Theory and Neural Networks, Index 0, The Fundamental Theorem, topology of a [[manifold-learning|manifold]], Morse Functions, critical points, Related Topics, Index $n$, Mode Connectivity, loss landscape, Gradient Flows, index, Index 1, Topology of Loss Surfaces, The Morse Index
- References: manifold-learning, math/algebraic-topology, math/differential-geometry, math/spectral-theory-operators, training-dynamics

## Entity: persistent-homology
- Title: Persistent Homology
- Category: Topology
- Language: en
- Key Concepts: Filtration and Homology, Barcodes and Persistence Diagrams, Topology of Data, Stability Theorem, Persistent Homology

## Entity: math/foundations/group-theory-symmetries
- Title: Group Theory and Symmetries in Deep Learning
- Category: Unknown
- Language: en
- Key Concepts: Associativity:, Special Orthogonal group, Group Theory and Symmetries in Deep Learning, Identity:, 2. Equivariance, Closure:, What is a Group?, Group Theory, Why does it matter for Deep Learning?, Group Equivariant Neural Networks (G-CNNs), Sample Efficiency, Special Euclidean group, mathematically embedding equivariance into the architecture, Important Lie Groups (Continuous Groups) in AI:, Steerable CNNs
- Backlinks: ai-theory/spatial/equivariant-gnn

## Entity: math/analysis-geometry/information-geometry
- Title: Information Geometry
- Category: Unknown
- Language: en
- Key Concepts: [[llm]] Latent Spaces:, Applications in Deep Learning, dual connections, Cramér-Rao Bound:, Riemannian manifolds, Related Topics, TRPO/PPO, Dual Connections and $\alpha$-Geometry, Statistical [[manifold-learning|Manifold]] and Fisher Metric, Natural [[convex-optimization|Gradient Descent]] (NGD), Amari-Chentsov tensor, K-FAC, Generalized Pythagorean Theorem, e-connection ($\alpha=1$):, Information Geometry
- References: convex-optimization, fisher-information, llm, manifold-learning, optimal-transport, transformer-architecture
- Backlinks: convex-analysis, course-math-for-ai, fisher-information, language-models/safety/rlhf-dpo, manifold-learning, math/bayesian-asymptotics, math/cramer-rao-bound, math/differential-geometry, math/minimax-estimation, math/neyman-pearson, maximum-entropy, multivariable-calculus

## Entity: geometric-mechanics-lie-groups
- Title: Geometric Mechanics: Control on Lie Groups
- Category: ai-physics
- Language: en
- Key Concepts: Geometric Mechanics: Control on Lie Groups, Symplectic Geometry and Hamiltonian Mechanics, Conclusion, Differential and Information Geometry
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
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Physics-Informed Neural Networks (PINNs), Differential and Information Geometry
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: symplectic-hamiltonian-nn
- Title: Symplectic Geometry & Hamiltonian Neural Networks
- Category: ai-physics
- Language: en
- Key Concepts: Differential and Information Geometry, Symplectic Geometry and Hamiltonian Mechanics, Conclusion, Symplectic Geometry & Hamiltonian Neural Networks
- References: convex-optimization, manifold-learning

## Entity: mechanistic-interpretability-sae
- Title: AI Safety: Mechanistic Interpretability of SAEs
- Category: ai-theory
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Random Matrix Theory and Spectral Dynamics, AI Safety: Mechanistic Interpretability of SAEs, Conclusion
- References: attention-mechanisms, math/spectral-theory-operators

## Entity: activation-functions-math
- Title: Activation Functions: SwiGLU & GeLU
- Category: ai-theory
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Activation Functions: SwiGLU & GeLU, Conclusion
- References: attention-mechanisms, stochastic-differential-equations

## Entity: ergodic-theory-sgd
- Title: Ergodic Theory of Stochastic Gradient Descent
- Category: ai-theory
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Ergodic Theory of Stochastic [[convex-optimization|Gradient Descent]], Conclusion, Differential and Information Geometry
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: gnn-weisfeiler-lehman
- Title: Graph Neural Networks: Weisfeiler-Lehman
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Graph Neural Networks: Weisfeiler-Lehman, Algebraic Topology, Sheaves, and Category Theory
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
- Key Concepts: Optimal Transport and Wasserstein Metrics, Multimodal Alignment: CLIP Math, Conclusion, Differential and Information Geometry
- References: convex-optimization, manifold-learning

## Entity: nonequilibrium-stat-mech-diffusion
- Title: Non-equilibrium Statistical Mechanics of Diffusion Models
- Category: ai-theory
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Non-equilibrium Statistical Mechanics of Diffusion Models, Conclusion
- References: stochastic-differential-equations

## Entity: normalization-layers-math
- Title: Normalization Layers: BatchNorm vs RMSNorm
- Category: ai-theory
- Language: en
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Normalization Layers: BatchNorm vs RMSNorm, Differential and Information Geometry
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: regularization-implicit-bias
- Title: Regularization: Implicit Bias of GD
- Category: ai-theory
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Regularization: Implicit Bias of GD, Conclusion, Differential and Information Geometry
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
- Key Concepts: Spin Glasses & Hopfield Networks, Stochastic Dynamics and Statistical Mechanics, Random Matrix Theory and Spectral Dynamics, Conclusion
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
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, The Mathematics of Reasoning Chains: RL Reward Modeling, Conclusion
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
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Quantum Field Theory and Renormalization Group, Conclusion, Vision Transformers: Scaling Laws of ViT
- References: attention-mechanisms

## Entity: weight-initialization-signal
- Title: Weight Initialization: Signal Propagation
- Category: ai-theory
- Language: en
- Key Concepts: Quantum Field Theory and Renormalization Group, Random Matrix Theory and Spectral Dynamics, Weight Initialization: Signal Propagation, Conclusion
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
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Computational Complexity: PAC-Bayes Bounds, Optimal Transport and Wasserstein Metrics, Conclusion
- References: stochastic-differential-equations

## Entity: distributed-training-3d
- Title: Distributed Training: 3D Parallelism Math
- Category: cs
- Language: en
- Key Concepts: Distributed Training: 3D Parallelism Math, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Optimal Transport and Wasserstein Metrics, Conclusion
- References: attention-mechanisms

## Entity: information-theory-rate-distortion
- Title: Information Theory: Rate-Distortion & VAEs
- Category: cs
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Information Theory: Rate-Distortion & VAEs, Conclusion, Differential and Information Geometry
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: quantum-computing-vqe
- Title: Quantum Computing: VQE Math
- Category: cs
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Symplectic Geometry and Hamiltonian Mechanics, Quantum Computing: VQE Math, Conclusion
- References: math/spectral-theory-operators
- Backlinks: research/quantum-risk-management

## Entity: quantum-machine-learning-kernels
- Title: Quantum Machine Learning: Quantum Kernels
- Category: cs
- Language: en
- Key Concepts: Quantum Machine Learning: Quantum Kernels, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Symplectic Geometry and Hamiltonian Mechanics, Conclusion
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
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Architecture Mechanics: Attention and Dimensionality, [[attention-mechanisms|Attention]] Mechanisms: Linear [[attention-mechanisms|Attention]]
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
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Differential and Information Geometry, Conclusion, Long Context: YaRN and LongRoPE
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
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Mixture of Experts: Routing Math, Optimal Transport and Wasserstein Metrics, Conclusion
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
- Key Concepts: Reasoning Models: PRM vs. ORM, Stochastic Dynamics and Statistical Mechanics, Conclusion
- References: stochastic-differential-equations

## Entity: speculative-decoding-medusa
- Title: Speculative Decoding: Medusa vs. EAGLE
- Category: language-models
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Speculative Decoding: Medusa vs. EAGLE, Conclusion, Stochastic Dynamics and Statistical Mechanics
- References: attention-mechanisms, stochastic-differential-equations

## Entity: tokenization-bpe-unigram
- Title: Tokenization: BPE vs. Unigram
- Category: language-models
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Tokenization: BPE vs. Unigram, Conclusion
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
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Algebraic Geometry in Singular Learning Theory, Algebraic Topology, Sheaves, and Category Theory, Conclusion
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: algebraic-topology-persistent
- Title: Algebraic Topology: Persistent Laplacian & Persistent Bundles
- Category: math
- Language: en
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Algebraic Topology: Persistent [[spectral-graph-theory|Laplacian]] & Persistent Bundles, Algebraic Topology, Sheaves, and Category Theory
- References: math/spectral-theory-operators, spectral-graph-theory

## Entity: differential-galois-theory
- Title: Differential Galois Theory
- Category: math
- Language: en
- Key Concepts: Differential Galois Theory, Algebraic Topology, Sheaves, and Category Theory, Conclusion
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
- Key Concepts: Functional Analysis: C*-algebras, Random Matrix Theory and Spectral Dynamics, Symplectic Geometry and Hamiltonian Mechanics, Conclusion
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
- Key Concepts: Non-commutative Geometry, Symplectic Geometry and Hamiltonian Mechanics, Algebraic Topology, Sheaves, and Category Theory, Conclusion
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
- Key Concepts: Differential and Information Geometry, Optimal Transport and Wasserstein Metrics, Conclusion, Optimal Transport: Gromov-Wasserstein Distance
- References: convex-optimization, manifold-learning

## Entity: pde-hamilton-jacobi
- Title: Partial Differential Equations: Hamilton-Jacobi
- Category: math
- Language: en
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Conclusion, Symplectic Geometry and Hamiltonian Mechanics, Partial Differential Equations: Hamilton-Jacobi
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
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Stochastic Calculus on Manifolds, Conclusion, Differential and Information Geometry
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
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Differential and Information Geometry, Conclusion, Fluid Dynamics: Navier-Stokes Existence
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
- Key Concepts: Quantum Field Theory and Renormalization Group, Quantum Field Theory on Curved Spacetime, Conclusion, Differential and Information Geometry
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
- Key Concepts: String Theory: Calabi-Yau Manifolds, Algebraic Topology, Sheaves, and Category Theory, Conclusion, Differential and Information Geometry
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

## Entity: research/mla-financial-reasoning
- Title: Impact of MLA Compression on Financial Time-Series Reasoning
- Category: research
- Language: en
- Key Concepts: Methodology, Dataset, Metric, Insights for AI, Context, Models, References, Objective, Open Questions, Current Findings
- References: attention-mechanisms, deepseek-v3-mla-compression, kv-cache-compression, llm-financial-analysis, quantization, rag, tool-use

## Entity: research/quantum-risk-management
- Title: Квантовые алгоритмы в риск-менеджменте
- Category: research
- Language: ru
- Key Concepts: Цель, Контекст, Открытые вопросы, Инсайты для ИИ, Методология, Ссылки, Результаты
- References: quantum-computing-vqe, quantum-machine-learning-kernels

## Entity: copula-models
- Title: Копула-модели
- Category: Модели ценообразования
- Language: ru
- Key Concepts: Хвостовые коэффициенты зависимости, Условные копулы, Математическая база, Обзор и предпосылки, Ценообразование кредитных корзин (CDO, CLN), Стресс-тестирование, Копула, Пар-трейдинг, Практическое применение, Таблица параметров, Расширения:, Реализация на Python, Ограничения и расширения, Динамические копулы, Ключевые свойства
- References: brownian-motion, cox-process, finance/monte-carlo-method, finance/value-at-risk, finance/xva
- Backlinks: cornish-fisher-cvar, cox-process, cs01, cva-wrong-way-risk, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/isda-simm, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/securitization, finance/stylized-facts-returns, finance/swaps, finance/value-at-risk, finance/xva, generative-scenario-models, gnn-credit-risk, graph-neural-networks, survival-risk-prediction, vine-copulas

