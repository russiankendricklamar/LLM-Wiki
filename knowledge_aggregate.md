# Knowledge Base Aggregate for AI Synthesis

## System Instructions
All agents should refer to [[GEMINI.md]] for project-wide standards and research protocols. New research findings are located in the `research/` category with structured metadata.

## Entity: course-math-for-ai
- Title: Mathematics for Deep Learning: The PhD Path
- Category: AI & Math
- Language: en
- Key Concepts: Module 0 (optional, 1 week): Warm-up, Mathematics for Deep Learning — a PhD-grade syllabus, Checkpoint:, Prerequisites, Week 11 — Information geometry, Recommended reading, Week 2 — Spectrum, SVD, tensor decompositions, Week 3 — Multivariable calculus, Week 8 — Stochastic processes, Exercise:, Week 6 — Probability theory, Week 12 — Optimal transport, Information bottleneck inside a [[transformer-architecture|transformer]]., Module 0, Outcomes
- References: brownian-bridge, characteristic-functions, connections-curvature, convex-optimization, convexity, distributions-zoo, entropy-information, exponential-families, f-divergences, feynman-kac, finance/shannon-entropy, fisher-information, geometric-deep-learning, gradient-hessian-jacobian, hilbert-banach-spaces, hodge-theory, lagrange-multipliers, laplacian, lie-groups, linear-programming, linear-spaces-basis, linear-systems-gauss, lln-clt, malliavin-calculus, manifold, manifold-learning, martingale, math/analysis-geometry/information-geometry, math/differential-geometry, math/discrete-markov-chains, math/information-theory, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/sde-numerical-methods, math/sigma-algebra-measurability, maximum-entropy, measure-theory, multivariable-calculus, multivariate-normal, optimal-transport, ornstein-uhlenbeck, poisson-process, ricci-flow, stochastic-differential-equations, symplectic-geometry, taylor-series, tensor-decompositions, transformer-architecture

## Entity: bert
- Title: BERT
- Category: AI Architectures
- Language: en
- Key Concepts: Overview, Next Sentence Prediction (NSP):, Pre-training, Masked Language Modeling (MLM):
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
- Key Concepts: Overview, LSTM (Long Short-Term Memory):, GRU (Gated Recurrent Unit):, Gating Mechanisms

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
- Key Concepts: Key Results, Overview, Spooner et al. (2018) — RL Market Making, Reward, Limitations, Mathematical Framework, Python Implementation, AI Market Making, State, Gasperov & Kostanjcar (2021) — RL with adversarial training, Action, Strategy Performance Comparison, Objective, Hyperparameter sensitivity, Avellaneda-Stoikov Model
- References: attention-mechanisms, deep-rl-execution, optimal-execution, temporal-fusion-transformer
- Backlinks: market-microstructure

## Entity: alpha-factor-research
- Title: Alpha Factor Research
- Category: AI Finance
- Language: en
- Key Concepts: Key Results, Multiple testing / overfitting, Information Coefficient, Information Ratio, Double ML for Fama-French factors (Oprescu et al., 2023), Overview, Double Machine Learning for Causal Factors, Information Coefficient (IC), Factor Decay, Capacity constraints, Turnover vs Alpha Trade-off, The Factor Model, factor zoo problem, Limitations, Mathematical Framework
- References: deep-rl-execution, llm-financial-analysis, temporal-fusion-transformer
- Backlinks: double-ml, nlp-financial-analysis, vine-copulas

## Entity: ml-options-pricing
- Title: ML for Options Pricing
- Category: AI Finance
- Language: en
- Key Concepts: Key Results, No-Arbitrage Constraints as Regularisation, Overview, Gaussian Process Pricing, Interpretability, Cohen et al. (2023) — No-arbitrage neural vol surface, Horvath et al. (2021) — Rough vol surface fitting, deep hedging, Buehler et al. (2019) — Deep Hedging, Data sparsity at wings, Black-Scholes Baseline, Limitations, Mathematical Framework, Python Implementation, Volatility Surface Interpolation with LSTMs
- References: black-scholes, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, temporal-fusion-transformer

## Entity: nlp-financial-analysis
- Title: NLP for Financial Analysis
- Category: AI Finance
- Language: en
- Key Concepts: Key Results, 8-K event classification (Kogan et al., 2022), Event-Driven Return Model, Alternative Data: Reddit and Twitter, FinBERT and Domain-Adapted Transformers, Survivorship bias, Overview, Bot filtering, [[llm]]-Based Information Extraction, Key NLP Approaches, MD&A tone, Market impact of signals, Mathematical Framework, Python Implementation, Loughran & McDonald (2011)
- References: alpha-factor-research, finance/shannon-entropy, fine-tuning, llm, llm-financial-analysis, rag, temporal-fusion-transformer, transformer-architecture
- Backlinks: financial-entropy

## Entity: fourier-neural-operators
- Title: Fourier Neural Operators
- Category: AI Physics
- Language: en
- Key Concepts: How FNO Works, Local Skip Connection, Visualization: Spectral Filtering, Fourier Transform, Weather Forecasting, 100x to 1000x faster, physics of the continuous operator, Why It Matters: Resolution Invariance, Inverse Fourier Transform, Material Science, Operator Neural Network, Fluid Dynamics, infinite-dimensional function spaces, Partial Differential Equations (PDEs), Linear Transform (Weighting)
- References: neural-operators, partial-differential-equations, pinns
- Backlinks: fredholm-theory

## Entity: ai-physics/hamiltonian-nn
- Title: Hamiltonian Neural Networks (HNN)
- Category: AI Physics
- Language: en
- Key Concepts: How HNNs Work:, Celestial Mechanics:, Control Systems:, Key Advantages, Data Efficiency:, Molecular Dynamics:, Energy Conservation:, The Problem with Black-Box Models, Hamiltonian, Mathematical Core, Related Topics, Auto-Differentiation, Hamiltonian Neural Networks (HNN), Applications, Phase Space Consistency:
- References: equivariant-nn, math/variational-calculus, pinns
- Backlinks: ai-theory/spatial/equivariant-gnn, equivariant-nn, kuramoto-model, lagrange-multipliers, neural-odes, neural-operators, pinns, symplectic-geometry

## Entity: 3d-gaussian-splatting
- Title: 3D Gaussian Splatting
- Category: AI Theory
- Language: en
- Key Concepts: 100+ FPS, 5. Applications, [[automatic-differentiation|Backpropagation]], 2. The Rendering Pipeline: Splatting, Splatting, Pruning, Spherical Harmonics (SH), Representation, Training Speed, E-commerce, Projection, Covariance Matrix ($\Sigma$), Virtual Reality, 3. Optimization and Learning, Visualization: Gaussian Projections
- References: automatic-differentiation, convex-optimization, geometric-deep-learning, manifold-learning, nerf, transformer-architecture
- Backlinks: nerf, neural-radiance-fields-math

## Entity: activation-patching
- Title: Activation Patching
- Category: AI Theory
- Language: en
- Key Concepts: Combinatorial explosion., Indirect Object Identification (IOI), Correlation ≠ causation., Path Patching vs Activation Patching, Factual Recall Patching, Activation Patching, The IOI Task, Nonlinearity., Limitations, S-Inhibition Heads, Name Mover Heads, Corrupted input, patch, The Clean/Corrupted Paradigm, Formalisation
- References: attention-mechanisms, circuit-discovery, mechanistic-interpretability, transformer-architecture
- Backlinks: circuit-discovery, probing-classifiers, superposition

## Entity: ai-theory/adversarial-examples
- Title: Adversarial Examples
- Category: AI Theory
- Language: en
- Key Concepts: Scalability of randomized smoothing., PGD (Projected [[convex-optimization|Gradient Descent]]) Attack., Key Results and Hypotheses, Certification Radius., Prompt Injection for LLMs., Certified Robustness, Adversarial Training, Overview, Definition of adversarial example., Lack of principled theory., Carlini–Wagner ($\ell_2$) Attack., Randomized Smoothing., Transferability and feature alignment., Mathematical Framework, LLMs and adversarial robustness.
- References: convex-optimization, diffusion-models, math/concentration-inequalities, mechanistic-interpretability, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: differential-privacy, metric-spaces

## Entity: attention-mechanisms
- Title: Attention Mechanisms
- Category: AI Theory
- Language: en
- Key Concepts: FlashAttention, Recomputation, Visualization: Attention Matrix, Memory-Bound, 4. Hardware Optimization: FlashAttention, Values ($V$), Llama 3, single pair of Key and Value heads, Tiling, Keys ($K$), 1. Scaled Dot-Product Attention, 2. Multi-Head Attention (MHA), 3. Efficient Variants ([[llm]] Optimization), Attention Mechanisms: The Engine of Modern AI, B. Grouped-Query Attention (GQA)
- References: flash-attention, inference-serving, llm, paged-attention, transformer-architecture
- Backlinks: activation-functions-math, activation-patching, ai-market-making, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-linear-kernel, autoregressive-models, circuit-discovery, code-models, context-length, deepseek-v3-mla-compression, diffusion-models, distributed-training-3d, embedding-models, equivariant-diffusion-models, equivariant-nn, finance/adversarial-stress-testing, finance/bachelier-formula, finance/gnn-finance, finance/transformer-timeseries, fine-tuning, flash-attention, geometry-of-attention, gnn-credit-risk, gpt-architecture, gpu-architecture, graph-neural-networks, hardware-io-attention, induction-heads, inference-serving, kan, kv-cache-compression, language-models/mamba-ssm, linear-algebra, llm, long-context-yarn-longrope, math-reasoning-chains-rl, mechanistic-interpretability, mechanistic-interpretability-sae, meta-learning, mixture-of-depths, mla, model-parallelism, moe-routing, neural-scaling-laws, paged-attention, positional-encodings, probing-classifiers, quantization, quantum-machine-learning-kernels, research/mla-financial-reasoning, rl-trader, rope-scaling, slm, speculative-decoding-medusa, state-space-models, temporal-fusion-transformer, tensors-and-contractions, tokenization, tokenization-bpe-unigram, training-dynamics, transformer-architecture, universal-approximation-theory, vision-transformers, vision-transformers-scaling, vlm

## Entity: automatic-differentiation
- Title: Automatic Differentiation
- Category: AI Theory
- Language: en
- Key Concepts: Example: PyTorch, Stop-gradient., Differentiable physics., The idea: function as a computational graph, PDE residuals in [[pinns]]:, Reverse mode, Training neural networks., Efficient when $n \gg m$, Portfolio optimisation., Numerical considerations, Mixed precision., an entire row of the Jacobian, directed acyclic graph (DAG), Tracing (dynamic AD)., Bayesian inference.
- References: black-scholes, convex-optimization, finance/monte-carlo-method, inference-serving, neural-scaling-laws, partial-differential-equations, pinns
- Backlinks: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, category-theory-ml, chain-rule-autodiff, convex-analysis, deep-galerkin, differential-equations, gradient-hessian-jacobian, linear-algebra, mcts, multivariable-calculus, neural-odes, partial-differential-equations, pinns, qat, reinforcement-learning, tensors-and-contractions, variational-autoencoders

## Entity: bayesian-deep-learning
- Title: Bayesian Deep Learning
- Category: AI Theory
- Language: en
- Key Concepts: Kronecker-Factored Laplace (KFAC-Laplace), Mean-field variational inference, Autonomous Driving:, Financial Forecasting:, Epistemic versus Aleatoric Uncertainty, temperature scaling, SGLD and MCMC in Neural Networks, Deep Ensembles, Medical Imaging:, Applications and Impact, MC Dropout: Variational Inference via Dropout, Active Learning:, Variational Inference and the ELBO, Laplace Approximation, Epistemic uncertainty
- References: evaluation-llms, gaussian-processes, math/kolmogorov-probability-axioms, mcmc, neural-scaling-laws, statistical-mechanics, variational-autoencoders
- Backlinks: ai-theory/in-context-learning, de-finetti-exchangeability, gaussian-processes

## Entity: causal-inference-do-calculus
- Title: Causal Inference: Do-Calculus & SCM
- Category: AI Theory
- Language: en
- Key Concepts: Abduction:, Counterfactuals, Causal Inference: Do-Calculus & SCM, Rule 3 (Insertion/Deletion of actions):, Rule 2 (Action/Observation exchange):, Backdoor Criterion, Prediction:, Causal Effect, Frontdoor Criterion, DERIVATION: Identification of the Frontdoor Formula, Structural Causal Models (SCM), The Rules of Do-Calculus, Identification Strategies, The Do-Operator, do-calculus
- References: bayesian-networks, causal-inference-trading, graph-theory, math/m-estimators

## Entity: circuit-discovery
- Title: Circuit Discovery
- Category: AI Theory
- Language: en
- Key Concepts: The Circuits Hypothesis, OV circuit, Copy heads., Superposition and Polysemanticity, Step 3: Path patching., Step 1: Task definition., features, Sparse autoencoders (SAEs), The IOI Circuit, superposition, Circuit Discovery Methodology, Circuit discovery, Negative heads., circuit, Induction heads
- References: activation-patching, attention-mechanisms, mechanistic-interpretability, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching

## Entity: contrastive-learning
- Title: Contrastive Learning
- Category: AI Theory
- Language: en
- Key Concepts: Collapse prevention, CLIP and computer vision, Momentum update rule, Connections to Other Paradigms, SimCLR, Metric learning, Zero-shot classification, Why Contrastive Learning Works, Online network, Applications and Transfer Gap, SimCLR: Simplicity at Scale, Molecular discovery, BYOL: Learning Without Negatives, Target network, Bootstrap Your Own Latent
- References: embedding-models, finance/shannon-entropy, fine-tuning, generative-models, neural-scaling-laws, pac-learning, transformer-architecture, variational-autoencoders
- Backlinks: vision-transformers

## Entity: diffusion-models
- Title: Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: marginal distribution, Theoretical understanding., Forward process (tractable Markov chain):, Classifier-free guidance, denoising score matching, Diffusion models, Image generation., forward [[stochastic-differential-equations|SDE]], Flow Matching: Deterministic Paths to Data, Advantages over DDPM:, probability flow ODE, Molecular design., Training, Memory of training data., Connection to Stochastic Differential Equations
- References: attention-mechanisms, fokker-planck-equation, generative-models, manifold-learning, neural-scaling-laws, ornstein-uhlenbeck-process, stochastic-differential-equations, transformer-architecture, variational-autoencoders
- Backlinks: ai-theory/adversarial-examples, energy-based-models, equivariant-diffusion-models, generative-models, laplacian, math/sde-numerical-methods, nonequilibrium-statmech, variational-autoencoders

## Entity: energy-based-models
- Title: Energy-Based Models
- Category: AI Theory
- Language: en
- Key Concepts: Restricted Boltzmann Machines, RBM, Modern EBMs and Hybrid Modeling, Connection to [[statistical-mechanics|Statistical Mechanics]], Score Matching: Avoiding the Partition Function, contrastive divergence, Denoising score matching, MLE and the Partition Function Problem, Contrastive Divergence and Approximation, direct, Joint Energy Modeling (JEM)
- References: convex-optimization, diffusion-models, manifold-learning, statistical-mechanics

## Entity: equivariant-diffusion-models
- Title: Equivariant Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: Computer Vision:, Robustness:, Invariant Schedulers:, Equivariant [[stochastic-differential-equations|SDE]] Framework, Feature update:, Isotropic Gaussian, Symmetry in Generative Modelling, Protein Folding and Design:, Equivariant Graph Neural Network (EGNN), Special Euclidean group, Riemannian Diffusion:, Computational Complexity:, equivariant, Robotics:, Equivariant Diffusion Models
- References: ai-theory/spatial/equivariant-gnn, attention-mechanisms, diffusion-models, laplacian, lie-algebras-physics, lie-groups, manifold-learning, stochastic-differential-equations

## Entity: ai-theory/spatial/equivariant-gnn
- Title: Equivariant GNN (E(n)-GNN)
- Category: AI Theory
- Language: en
- Key Concepts: Invariance, AI for Science, Mathematical Concept, Equivariant Message Passing, Equivariance, Coordinate Updates:, Why Equivariance?, Equivariant Graph Neural Networks (E(n)-GNN), Structural Biology:, Robotics:, Invariant Messages:, Related Topics, Molecular Modeling:, Impact and Applications
- References: ai-physics/hamiltonian-nn, math/foundations/group-theory-symmetries, spectral-graph-theory
- Backlinks: equivariant-diffusion-models

## Entity: equivariant-nn
- Title: Equivariant Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Parity subtleties., NequIP (2022):, Exact symmetry:, spherical tensors, SchNet (2017):, Overview, The two sides, Prerequisites, Message-passing bottleneck., $G$-invariant, Protein structure prediction:, Equivariant Neural Networks, SE(3)-[[transformer-architecture|Transformer]] (2020):, AI:, Crystal property prediction:
- References: ai-physics/hamiltonian-nn, attention-mechanisms, group-theory, pinns, qft-basic, scattering-amplitudes, transformer-architecture
- Backlinks: ai-physics/hamiltonian-nn, graph-neural-networks, group-theory, kan, lie-groups, neural-operators, pinns, representation-theory-ml

## Entity: factor-graphs-inference
- Title: Factor Graphs & Sum-Product Algorithm
- Category: AI Theory
- Language: en
- Key Concepts: Bethe Free Energy, factor nodes, DERIVATION: Marginal on a Chain, Variable to Factor Message:, Beyond Sum-Product: Max-Product, The Sum-Product Algorithm, Junction Tree Algorithm, Convergence, Sum-Product Algorithm, Loopy Belief Propagation, treewidth, Mathematical Formulation, Factor Graphs & Sum-Product Algorithm, Max-Product Algorithm, Factor to Variable Message:
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
- Key Concepts: Variational inference, Kernel Engineering and Knowledge Encoding, Inducing points, Computational Bottlenecks and Sparse Approximations, Marginal Likelihood and Hyperparameter Learning, Further Reading, expectation propagation, GP Regression and Posterior, Matérn kernel:, Scientific ML, Classification and Approximate Posteriors, Laplace approximation, RBF (squared exponential) kernel:, Uncertainty quantification, Sparse GP approximations
- References: bayesian-deep-learning, finance/monte-carlo-method, math/kolmogorov-probability-axioms, neural-scaling-laws, pinns, statistical-mechanics
- Backlinks: ai-theory/neural-tangent-kernel, bayesian-deep-learning, bayesian-nonparametrics, hilbert-banach-spaces, multivariate-normal

## Entity: generative-models
- Title: Generative Models
- Category: AI Theory
- Language: en
- Key Concepts: Quality:, Decoder, Autoregressive models, GANs, Learn latent representations, Diffusion models, Pharma., Image generation., Problem Setup, Generative Adversarial Networks (GAN), [[llm|large language models]], sample quality, Generator, exact sampling, Properties:
- References: diffusion-models, finance/monte-carlo-method, flow-matching, generative-scenario-models, hamiltonian-mechanics, llm, neural-odes, schrodinger-equation, sparse-autoencoders
- Backlinks: contrastive-learning, diffusion-models, generative-scenario-models, signature-based-models, variational-autoencoders

## Entity: autoregressive-models
- Title: Generative Models: Autoregressive Math
- Category: AI Theory
- Language: en
- Key Concepts: Masked Architectures, Masked Convolutions (PixelCNN):, Causal [[attention-mechanisms|Attention]] (Transformers):, Factorization
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
- Key Concepts: The ELBO Derivation, Reparameterization Trick
- References: convex-optimization

## Entity: graph-neural-networks
- Title: Graph Neural Networks
- Category: AI Theory
- Language: en
- Key Concepts: Message Passing Neural Networks (MPNN)., Neighbour mini-batches, Graph Neural Networks, Training complexity., Graph Isomorphism Network (GIN, Xu et al. 2019)., Regression on graph properties, Message Passing Neural Networks, Graph [[attention-mechanisms|Attention]] Diffusion (GRAND), Scaling to Large Graphs, aggregates messages, message passing, Over-smoothing., Finance., Edge prediction, Equivariant GNNs.
- References: attention-mechanisms, copula-models, equivariant-nn, fraud-detection, gnn-credit-risk, neural-odes, spectral-graph-theory, transformer-architecture
- Backlinks: gnn-credit-risk, graph-curvature-oversquashing, graph-theory, laplacian

## Entity: ai-theory/in-context-learning
- Title: In-Context Learning
- Category: AI Theory
- Language: en
- Key Concepts: Label order effects, Task Vectors and Representation Engineering, Zero-shot, See Also, Mechanistic Substrate: Induction Heads, Verbalization sensitivity, In-Context Learning, Few-shot, Task arithmetic, demo–query, Prompt distillation, Copy mechanism, Attend to next token, Chain-of-Thought as Extended In-Context Learning, Bayesian Interpretation and Posterior Inference
- References: attention-mechanisms, bayesian-deep-learning, chain-of-thought, fine-tuning, mechanistic-interpretability, neural-scaling-laws, prompt-engineering, transformer-architecture
- Backlinks: ai-theory/neural-tangent-kernel, attention-kernel, induction-heads, training-dynamics

## Entity: induction-heads
- Title: Induction Heads
- Category: AI Theory
- Language: en
- Key Concepts: Layer 1: Previous Token Head, two layers, Model Scaling, Increases, Why It Matters, Key (K), Identifies, Phase Transition in Training, In-Context Learning (ICL), The Two-Layer Mechanism, mechanistic interpretability, Induction Heads, Value (V), Mathematical Formulation, Query (Q)
- References: ai-theory/in-context-learning, attention-mechanisms, mechanistic-interpretability, transformer-architecture

## Entity: information-bottleneck-theory
- Title: Information Bottleneck Theory
- Category: AI Theory
- Language: en
- Key Concepts: Compression Phase, Information Bottleneck Theory, IB curve, Application to Deep Learning, Fitting Phase, Exact Solution and the IB Curve, The Information Bottleneck Objective
- References: convex-optimization
- Backlinks: statistical-mechanics-learning

## Entity: ai-theory/knowledge-distillation
- Title: Knowledge Distillation
- Category: AI Theory
- Language: en
- Key Concepts: Implicit regularization., Pedagogical Knowledge Distillation (PKD), [[quantization]]-aware distillation, Compression ratio:, QAT ([[quantization]]-Aware Training), prior or constraint, Model compression:, temperature, Example: vision, Prototypical activation patterns:, Soft targets from teacher, Semantic similarity., The Hinton framework: temperature-scaled softmax and distillation loss, Adversarial reconstruction:, student network
- References: attention-mechanisms, evaluation-llms, fine-tuning, manifold-learning, neural-scaling-laws, pac-learning, quantization, transformer-architecture

## Entity: kolmogorov-complexity
- Title: Kolmogorov Complexity
- Category: AI Theory
- Language: en
- Key Concepts: Model selection:, Overview, Minimum Description Length (MDL)., Anomaly detection:, Prerequisites, Bioinformatics:, Invariance theorem., Limitations, Language identification:, Mathematical Framework, Python Implementation, Compression-based AGI:, Incompressible strings are "random.", Mutual information (algorithmic):, Financial complexity:
- References: finance/lempel-ziv-complexity, finance/shannon-entropy, pac-learning
- Backlinks: chain-of-thought, math/cantor-diagonal, math/godel-incompleteness, pac-learning

## Entity: learnable-activations
- Title: Learnable Activations and B-splines
- Category: AI Theory
- Language: en
- Key Concepts: Symbolic regression., KAN: activations on edges, High-dimensional tasks., Hyperparameter choices., Adaptive refinement., Regularisation., Scientific tasks., Local support., Learnable activation functions, Kernel activation function (KAF)., Interpretability., B-splines: essence, Limitations, universal approximation, Bayesian neural networks.
- References: kan, kolmogorov-arnold-theorem, neural-scaling-laws, pinns, sparse-autoencoders, transformer-architecture
- Backlinks: kan, kolmogorov-arnold-theorem

## Entity: quantization-error-math
- Title: Mathematical Error Analysis in Model Quantization
- Category: AI Theory
- Language: en
- Key Concepts: Uniform Quantization, Error Propagation in Linear Layers, Stochastic Rounding, Mathematical Error Analysis in Model [[quantization]]
- References: quantization

## Entity: diffusion-sde-math
- Title: Mathematical Foundations of Diffusion Models
- Category: AI Theory
- Language: en
- Key Concepts: Langevin Dynamics Connection, score function, The Probability Flow ODE, Reverse [[stochastic-differential-equations|SDE]] and Score Matching, Mathematical Foundations of Diffusion Models, Forward [[stochastic-differential-equations|SDE]]
- References: stochastic-differential-equations

## Entity: mechanistic-interpretability
- Title: Mechanistic Interpretability
- Category: AI Theory
- Language: en
- Key Concepts: Activation Patching:, Superposition Hypothesis:, Circuit Analysis:, Detecting Deception:, Residual Stream:, Induction Heads:, Mechanistic Interpretability, Model Editing (ROME/MEMIT):, Importance for AI Safety, Sparse Autoencoders (SAE):, Logit Lens:, Implementation Snippet, Mathematical Core, Related Topics, Alignment Verification:
- References: attention-mechanisms, constitutional-ai, sparse-autoencoders, transformer-architecture
- Backlinks: activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, chain-of-thought, circuit-discovery, constitutional-ai, induction-heads, language-models/safety/rlhf-dpo, llm, math/godel-incompleteness, mixture-of-experts, neural-scaling-laws, pac-learning, probing-classifiers, rlhf, slm, sparse-autoencoders, superposition

## Entity: meta-learning
- Title: Meta-Learning
- Category: AI Theory
- Language: en
- Key Concepts: Matching Networks, Applications:, Limitations:, Applications and Limitations, Algorithm:, Model-Agnostic Meta-Learning (MAML), second-order derivatives, Formal Setup, in-context learning (ICL), Alternative Meta-Learners, Reptile, Prototypical Networks, First-Order MAML (FOMAML):, Meta-Learning and In-Context Learning
- References: attention-mechanisms, chain-of-thought, convex-optimization, llm, neural-scaling-laws, reinforcement-learning, rlhf, transformer-architecture
- Backlinks: prompt-engineering

## Entity: model-based-rl
- Title: Model-Based Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: MBPO: Model-Based Policy Optimization, Neural Network World Models, Recurrent world models., Model Error Compounding, Model-Free vs Model-Based, Ensembles., Dyna, Monte Carlo Tree Search (MCTS), MCTS and AlphaZero, The Dyna Architecture, Probabilistic models., World Models, DreamerV3, Model-Based Reinforcement Learning, Model-based RL (MBRL)
- References: offline-rl, ppo, reinforcement-learning, soft-actor-critic
- Backlinks: offline-rl, ppo, soft-actor-critic

## Entity: neural-odes
- Title: Neural ODEs
- Category: AI Theory
- Language: en
- Key Concepts: Neural Ordinary Differential Equations (Neural ODEs), [[hamiltonian-nn|Hamiltonian Neural Networks (HNNs)]], Continuous normalising flows (CNFs)., Computer vision., adaptive compute, Stiff dynamics., Invertibility., $O(1)$, Training difficulty., Generative modelling., Neural SDEs., Neural PDEs., Limitations, Adjoint method for [[automatic-differentiation|backpropagation]], From ResNet to continuous depth
- References: ai-physics/hamiltonian-nn, automatic-differentiation, brownian-motion, hamiltonian-mechanics, pinns
- Backlinks: calculus-of-variations, generative-models, graph-neural-networks, math/ode-stability, neural-sdes-finance, operator-semigroups, reinforcement-learning, state-space-models, variational-autoencoders

## Entity: nerf
- Title: Neural Radiance Fields (NeRF)
- Category: AI Theory
- Language: en
- Key Concepts: Instant-NGP, Capture, Input, Neural Radiance Fields (NeRF): Synthesizing 3D from 2D, 3. The NeRF Pipeline, 2. Key Innovations, 4. Limitations and Evolution, Training, Visualization: The NeRF Ray Casting, 1. The Core Concept: Volumetric Rendering, A. Positional Encoding, Speed, Volume Rendering, Inference, Output
- References: 3d-gaussian-splatting, manifold-learning, positional-encodings, transformer-architecture
- Backlinks: 3d-gaussian-splatting, neural-radiance-fields-math

## Entity: neural-scaling-laws
- Title: Neural Scaling Laws
- Category: AI Theory
- Language: en
- Key Concepts: Power law mechanistic interpretation., Inference-time compute allocation:, Training loss vs. compute curves., Overview, Distribution shift., Prerequisites, Compute budgeting:, Chinchilla (Hoffmann et al. 2022)., Scaling beats architecture search:, Quality metrics., Research prioritisation:, Emergent abilities., Limitations, Statistical mechanics analogy:, Kaplan et al. (2020) scaling laws.
- References: attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, pac-learning
- Backlinks: ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, automatic-differentiation, bayesian-deep-learning, bitnet, contrastive-learning, curriculum-learning, diffusion-models, gaussian-processes, learnable-activations, llm, meta-learning, mixture-of-experts, pac-learning, positional-encodings, quantization, reasoning-models, rlhf, slm, test-time-scaling, training-dynamics, transformer-architecture

## Entity: ai-theory/neural-tangent-kernel
- Title: Neural Tangent Kernel
- Category: AI Theory
- Language: en
- Key Concepts: Convergence Guarantees and Over-Parameterization, [[transformer-architecture|transformer]] architectures, NTK for Transformers and Modern Architectures, Practical Implications, Further Reading, Motivation: The Infinite-Width Limit, Connection to Gaussian Processes, The NTK Definition, what happens to the function dynamics as the network width (number of hidden units) $m \to \infty$?, at infinite width, this kernel becomes deterministic and constant in time, Limitations:, feature learning regime, Mean field theory, Width requirements:, Learning rate scaling:
- References: ai-theory/in-context-learning, attention-mechanisms, automatic-differentiation, convex-optimization, finance/shannon-entropy, gaussian-processes, math/concentration-inequalities, neural-scaling-laws, pac-learning, transformer-architecture
- Backlinks: neural-radiance-fields-math, ntk, statistical-mechanics-learning

## Entity: offline-rl
- Title: Offline Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: extrapolation errors, Implicit Q-Learning (IQL), The Distributional Shift Problem, Offline RL, Offline Reinforcement Learning, Decision [[transformer-architecture|Transformer]], Finance., expectile loss, TD3+BC, Conservative Q-Learning (CQL), IQL, Healthcare., Robotics., batch RL, Autonomous driving.
- References: deep-rl-execution, model-based-rl, reinforcement-learning, soft-actor-critic, transformer-architecture
- Backlinks: model-based-rl, soft-actor-critic

## Entity: pac-learning
- Title: PAC Learning & VC Dimension
- Category: AI Theory
- Language: en
- Key Concepts: Worst-case nature., Differential privacy:, Boosting:, Sample complexity with VC dimension:, Sauer's Lemma., Overview, MDL and Occam's Razor., Rademacher complexity., Theoretical foundation for SVMs:, Fundamental Theorem of Statistical Learning., PAC Learning & VC Dimension, shattered, Limitations, Mathematical Framework, Scientific learning:
- References: finance/shannon-entropy, kolmogorov-complexity, mechanistic-interpretability, neural-scaling-laws
- Backlinks: ai-theory/adversarial-examples, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, code-models, contrastive-learning, empirical-processes, kolmogorov-complexity, neural-scaling-laws, sparse-autoencoders, statistical-mechanics-learning, vlm

## Entity: probing-classifiers
- Title: Probing Classifiers
- Category: AI Theory
- Language: en
- Key Concepts: CKA (Centered Kernel Alignment):, The MDL probe, Linear vs Nonlinear Probes, Representational Geometry, Multitask representations., Probing classifiers, LEACE (Least-squares Concept Erasure):, Bias detection., Limitations, Representation quality metrics., Representation vs computation., probes, Layer-Wise Analysis in BERT, Linguistic structure in LLMs., Probing Classifiers
- References: activation-patching, attention-mechanisms, finance/shannon-entropy, mechanistic-interpretability, sparse-autoencoders

## Entity: ppo
- Title: Proximal Policy Optimization (PPO)
- Category: AI Theory
- Language: en
- Key Concepts: Generalized Advantage Estimation (GAE), PPO-Clip, Hyperparameters, PPO vs TRPO, TRPO, Motivation: The Policy Update Problem, Training Dynamics, Full PPO Loss, GAE, Related Topics, Continuous control., Games., [[rlhf]] / [[llm]] alignment., The Clipped Surrogate Objective, Proximal Policy Optimization (PPO)
- References: finance/shannon-entropy, llm, model-based-rl, reinforcement-learning, rlhf, soft-actor-critic
- Backlinks: model-based-rl, soft-actor-critic

## Entity: rlhf
- Title: RLHF (Reinforcement Learning from Human Feedback)
- Category: AI Theory
- Language: en
- Key Concepts: Why KL Regularization: Preventing Reward Hacking, Constitutional AI: AI Critique Instead of Human Labels, Advantages:, Stage 1: Supervised [[fine-tuning]] (SFT), Stage 3: PPO Optimization, Alignment Tax: Capability-Alignment Tradeoff, alignment tax, Multi-Objective Alignment:, Open Problems, Disadvantages:, Reward Model Generalization:, training on human preferences contains information orthogonal to model scale, Three-Stage Pipeline, Stage 2: Reward Model Training, Preference Data Quality:
- References: chain-of-thought, dpo, finance/shannon-entropy, fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, reinforcement-learning, transformer-architecture
- Backlinks: causal-inference, chain-of-thought, constitutional-ai, dpo, evaluation-llms, f-divergences, fine-tuning, language-models/safety/rlhf-dpo, llm, mechanism-design, meta-learning, orm-prm, ppo, preference-optimization, preference-optimization-variants, prm, prompt-engineering, reasoning-models, reinforcement-learning, soft-actor-critic, synthetic-data-alignment

## Entity: reinforcement-learning
- Title: Reinforcement Learning
- Category: AI Theory
- Language: en
- Key Concepts: Markov property, target network, Intrinsic curiosity, On-policy, Bellman equation, Off-policy vs On-policy, Model-based vs Model-free, Language models., Q-learning., SARSA., Markov Decision Process (MDP), Reinforcement Learning, Finance., Actor-Critic., UCB / Thompson sampling, Classical Algorithms
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
- Key Concepts: The Update Rule, Contraction Mapping and Convergence

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
- Key Concepts: Group Actions and Equivariance, Representation Theory for Machine Learning, Tensor Products and Clebsch-Gordan Coefficients, $SO(3)$ and $SE(3)$ Representations
- References: equivariant-nn

## Entity: soft-actor-critic
- Title: Soft Actor-Critic (SAC)
- Category: AI Theory
- Language: en
- Key Concepts: Sample Efficiency vs PPO, Twin critics, Finance., MBPO., Reparameterization Trick, Actor Loss, Robotics., Soft Actor-Critic (SAC), Applications, Energy systems., SAC vs TD3 vs PPO, Critic Loss, Automatic Entropy Tuning, Maximum [[shannon-entropy|Entropy]] RL, Related Topics
- References: finance/shannon-entropy, model-based-rl, offline-rl, ppo, reinforcement-learning, rlhf
- Backlinks: model-based-rl, offline-rl, ppo

## Entity: sparse-autoencoders
- Title: Sparse Autoencoders (SAE)
- Category: AI Theory
- Language: en
- Key Concepts: Model comparison:, monosemantic, Overview, Cross-layer universality:, Prerequisites, Dictionary learning objective., Top-K SAEs., L0 sparsity:, Steering vectors:, Geometry of feature space., Feature splitting:, Reconstruction MSE:, Limitations, Mathematical Framework, Python Implementation
- References: finance/shannon-entropy, llm, mechanistic-interpretability, pac-learning, transformer-architecture
- Backlinks: circuit-discovery, generative-models, learnable-activations, mechanistic-interpretability, probing-classifiers, superposition, variational-autoencoders

## Entity: state-space-models
- Title: State Space Models (SSM)
- Category: AI Theory
- Language: en
- Key Concepts: SOTA language models, Explicit diagonalization, fixed, Interpretability, Hybrid architectures, HiPPO, parallel prefix scan, Mamba: Selective SSM, unrolled as a convolution, Content-addressable, Genomics, References, Mamba, Theoretical understanding, Classical State Space Formulation
- References: attention-mechanisms, kalman-filter, llm, math/spectral-theory-operators, mixture-of-experts, neural-odes, nonlinear-filtering, transformer-architecture
- Backlinks: attention-kernel, context-length

## Entity: superposition
- Title: Superposition & Linear Representation
- Category: AI Theory
- Language: en
- Key Concepts: Polysemanticity, Sparse Autoencoders (SAE), Visualizing Dimension vs. Features, polysemantic, Implications for AI Safety, Model Steerability, Uncovering Hidden Capabilities, What Is It, The Toy Model of Superposition, Mathematical Framework, Superposition, Superposition and Linear Representation, Related Topics, Detecting Deception, more features than it has dimensions
- References: activation-patching, llm, mechanistic-interpretability, sparse-autoencoders

## Entity: transformer-architecture
- Title: Transformer Architecture
- Category: AI Theory
- Language: en
- Key Concepts: Relative Distance, Encoder-Only (BERT), 3. Positional Embeddings: Giving Time to Space, RMSNorm, 5. Architectural Variants, Sinusoidal, RoPE (Rotary Positional Embeddings), Transformer Architecture: The Foundation of LLMs, 2. Normalization: Stability at Scale, Visualization: The Layer Stack, Stability, The Bottleneck, [[attention-mechanisms|Attention]] Layer, Post-Norm, Feed-Forward Network (FFN)
- References: attention-mechanisms, mixture-of-experts, neural-scaling-laws
- Backlinks: 3d-gaussian-splatting, activation-patching, ai-theory/adversarial-examples, ai-theory/in-context-learning, ai-theory/knowledge-distillation, ai-theory/neural-tangent-kernel, attention-kernel, attention-mechanisms, bitnet, chain-of-thought, circuit-discovery, code-models, context-length, contrastive-learning, course-math-for-ai, decision-transformers, deep-hedging, diffusion-models, embedding-models, equivariant-nn, finance/transformer-timeseries, fine-tuning, fraud-detection, gnn-credit-risk, gpt-architecture, graph-neural-networks, induction-heads, inference-serving, kan, kolmogorov-arnold-theorem, language-models/mamba-ssm, learnable-activations, linear-algebra, llm, logistic-regression, lora-peft, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/godel-incompleteness, mechanistic-interpretability, meta-learning, mixture-of-depths, mixture-of-experts, model-parallelism, moe-routing, multi-token-prediction, nerf, neural-radiance-fields-math, news-sentiment-trading, nlp-financial-analysis, offline-rl, portfolio-optimization-ml, positional-encodings, quantization, rlhf, rope-scaling, slm, sparse-autoencoders, state-space-models, temporal-fusion-transformer, tokenization, training-dynamics, universal-approximation-theory, vector-databases, vision-transformers, vlm, volatility-forecasting

## Entity: variational-autoencoders
- Title: Variational Autoencoders (VAE)
- Category: AI Theory
- Language: en
- Key Concepts: encoder, Connection to Diffusion Models, Variational Autoencoder, disentangled, The Evidence Lower Bound (ELBO), Architecture: Encoder and Decoder, Closed-Form KL Divergence, decoder, VQ-VAE, β-VAE, discrete, Stable Diffusion, reparameterization trick, The Reparameterization Trick, Extensions and Applications
- References: automatic-differentiation, convex-optimization, diffusion-models, generative-models, math/kolmogorov-probability-axioms, neural-odes, sparse-autoencoders, statistical-mechanics
- Backlinks: bayesian-deep-learning, bayesian-inference, change-of-variables, contrastive-learning, convexity, diffusion-models, information-theory-basics, jensens-inequality, manifold, pca, variational-inference

## Entity: vision-transformers
- Title: Vision Transformers (ViT)
- Category: AI Theory
- Language: en
- Key Concepts: Linear Projection, Inductive Bias, "An Image is Worth 16x16 Words.", [CLS] Token, [[transformer-architecture|Transformer]] Encoder, Receptive Field, Python Implementation (Conceptual), Mathematical Framework, Scaling, Architecture, Patch Partitioning, Data Requirement, [[transformer-architecture|Transformer]] architecture, Position Embeddings, Learnable Embeddings
- References: attention-mechanisms, contrastive-learning, transformer-architecture, vlm

## Entity: about
- Title: About Me
- Category: About Me
- Language: en
- Key Concepts: Tools, Projects, Methodologies, 2019 – 2022, Quantum Physics, AI in Finance, 2022 – 2023, Risk Analyst, Risk Manager, [[llm]] Wiki, 2023 – 2024, Expert, Timeline, Interests, Ultima Thule
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
- Key Concepts: The Saddle-Point Method (Method of Steepest Descent), Method of Stationary Phase, Laplace's Method, Asymptotic Analysis of Integrals

## Entity: calculus-of-variations
- Title: Calculus of Variations
- Category: Advanced Analysis
- Language: en
- Key Concepts: Geodesics, Euler-Lagrange equation, functionals, Variational Inference (VI), Regularization, Calculus of Variations, Euler-Lagrange Equation, Principles of Physics, Related Topics, Lagrangian, The Fundamental Problem, Hamilton's Principle, Variation and Modern AI, Neural ODEs, Visualization: The Shortest Path (Geodesic)
- References: functional-analysis, lagrangian-mechanics, neural-odes, variational-inference
- Backlinks: deep-ritz-method, fixed-point-theorems

## Entity: fixed-point-theorems
- Title: Fixed Point Theorems
- Category: Advanced Analysis
- Language: en
- Key Concepts: 2. Brouwer Fixed Point Theorem (The Engine of Topology), Fixed Point Theorems: The Engines of Existence, "engines of existence", Game Theory, compact, convex set, Applications in AI, Reinforcement Learning, Economics, Solving ODEs, Nash Equilibria, 3. Schauder Fixed Point Theorem (The Engine of PDEs), compact, set-valued functions, The Intuition, unique
- References: calculus-of-variations, convexity, hilbert-banach-spaces, reinforcement-learning
- Backlinks: proximal-algorithms-admm

## Entity: fredholm-theory
- Title: Fredholm Theory
- Category: Advanced Analysis
- Language: en
- Key Concepts: kernel, Kernel Machines, Spectral Analysis, Visualization: Kernel Smoothing, Inverse Problems, integral equations, Fredholm operator, Why It Matters for AI: Neural Operators, Fredholm Theory, Index and Fredholm Operators, Related Topics, Atiyah-Singer Index Theorem, index, The Integral Equation, Fredholm Alternative
- References: fourier-neural-operators, functional-analysis, partial-differential-equations

## Entity: microlocal-analysis
- Title: Microlocal Analysis
- Category: Advanced Analysis
- Language: en
- Key Concepts: Pseudodifferential Operators ($\Psi$DO), Visualization: Singularity Propagation, Pseudodifferential Operators, The Wave Front Set ($WF$), Hörmander, Inverse Problems, Microlocal Analysis, Why It Matters, where, cotangent bundle, phase space, which direction, Quantum Chaos, Propagation of Singularities, symbol
- References: schwartz-distributions, symplectic-geometry

## Entity: proximal-algorithms-admm
- Title: Proximal Algorithms & ADMM
- Category: Advanced Analysis
- Language: en
- Key Concepts: soft-thresholding, Alternating Direction Method of Multipliers (ADMM), proximal operator, Proximal Algorithms & ADMM, What Is It, ADMM: Alternating Direction Method of Multipliers, Related Topics, Augmented Lagrangian, Convergence, The Proximal Operator, Proximal Gradient Method, DERIVATION: Proximal Operator of the $L_1$ Norm
- References: convex-optimization, fixed-point-theorems

## Entity: deep-ritz-method
- Title: The Deep Ritz Method
- Category: Advanced Analysis
- Language: en
- Key Concepts: Residual Networks (ResNets), Advantages and High Dimensions, variational principle, Smoothness:, Penalty Method, The Variational Principle, What Is It, Architecture: Residual Networks, Mesh-free:, The Deep Ritz Method, Deep Ritz Framework, Related Topics, Handling Boundary Conditions, Curse of Dimensionality:, DERIVATION: Ritz Method for the Heat Equation
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
- Key Concepts: Syntax Analysis (Parsing), LL(k) Parsers:, Lexical Analysis, LR(k) Parsers:

## Entity: p-vs-np
- Title: Complexity Theory: P vs NP and Cook-Levin
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Cook-Levin Theorem, P vs NP problem, Formal Definitions

## Entity: cryptography-math
- Title: Cryptography: RSA and Elliptic Curves
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: RSA (Rivest-Shamir-Adleman), Elliptic Curve Cryptography (ECC)

## Entity: distributed-systems-consensus
- Title: Distributed Systems: CAP and Consensus
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Consistency:, Paxos Consensus, CAP Theorem, Partition tolerance:, Availability:

## Entity: pagerank-math
- Title: Graph Algorithms: PageRank Mathematics
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Random Surfer Model, The PageRank Equation

## Entity: strongly-connected-components
- Title: Graph Algorithms: Strongly Connected Components
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Kosaraju's Algorithm, Tarjan's Algorithm

## Entity: graph-coloring
- Title: Graph Theory: Coloring and Chromatic Number
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Brooks' Theorem:, Vertex Coloring, Bounds and Theorems, chromatic number, Four Color Theorem:

## Entity: max-flow-min-cut
- Title: Graph Theory: Max-Flow Min-Cut Theorem
- Category: Advanced CS and Graphs
- Language: en
- Key Concepts: Max-Flow Min-Cut Theorem, Ford-Fulkerson Algorithm, The Theorem

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
- Key Concepts: The IV Estimator, 2SLS, Relevance:, Exogeneity (Exclusion Restriction):

## Entity: sobolev-embeddings
- Title: Functional Analysis: Sobolev Embeddings
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: The Spaces, Sobolev Embedding Theorems

## Entity: harmonic-analysis
- Title: Harmonic Analysis: Fourier Convergence
- Category: Advanced Math and Stats
- Language: en
- Key Concepts: Carleson's Theorem:, $L^2$ Convergence:, Convergence Theorems, Pointwise Convergence (Dirichlet/Jordan):, Fourier Series
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
- Key Concepts: Primal update (parallelizable):, Iterative Updates, Dual update (gradient ascent):, The Lagrangian Relaxation

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
- Key Concepts: Exterior Derivative, Wedge Product, exact, Generalized Stokes' Theorem, closed
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
- Key Concepts: Galois extension, solvable group, Solvability by Radicals, Field Extensions and Automorphisms, The Fundamental Theorem

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
- Key Concepts: Radon-Nikodym Theorem, martingale, Probability Spaces, Martingales

## Entity: special-relativity
- Title: Special Relativity: Minkowski Space and Lorentz Transforms
- Category: Advanced Theory
- Language: en
- Key Concepts: Lorentz Transformations, Minkowski space, Four-Vectors
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
- Key Concepts: Overview, Optimal Substructure:, Properties, Overlapping Subproblems:

## Entity: alpha-factor-discovery
- Title: Alpha Factor Discovery
- Category: Algorithms and ML
- Language: en
- Key Concepts: Overview & Background, Survivorship bias, Universality, [[mcmc]] sampling, Fundamental Law of Active Management, Information Coefficient (IC), Cross-Sectional Signal Combination, Reinforcement Learning, Alpha Factor Discovery & Mining, Mathematical Framework, Python Implementation, Genetic Programming (GP), Parameter Table, Transaction costs, Alpha Factor Discovery
- References: bayesian-black-litterman, finance/alpha-stacking, finance/gan, finance/monte-carlo-method, mcmc
- Backlinks: alpha-orthogonalization, alternative-data-alpha, finance/alpha-stacking, finance/lightgbm-xgboost, finance/meta-labeling, finance/online-learning-mab, finance/shap-interpretability, model-free-rl-factors

## Entity: alpha-orthogonalization
- Title: Alpha Orthogonalization
- Category: Algorithms and ML
- Language: en
- Key Concepts: 1. Residualization, True Capacity, Alpha Orthogonalization: Factor Independence, The Problem: Factor Crowding, decay rate, Residual, Alpha Decay Analysis, Sector Neutral, Why Orthogonalization is Critical, Gram-Schmidt process, Neutral, Visualization: Vector Orthogonalization, 2. Risk Neutralization, The Mathematical Process, Performance Attribution
- References: alpha-factor-discovery, finance/factor-attribution, pca
- Backlinks: causal-inference-trading, pca-statarb

## Entity: alternative-data-alpha
- Title: Alternative Data Alpha
- Category: Algorithms and ML
- Language: en
- Key Concepts: Agriculture, Sparsity, Overview & Background, Legal and regulatory risk, Lead Time, Missing data mechanics, Exclusivity, NLP + alt-data fusion, Information Decay, Key Metrics, Alternative Data Alpha, Mathematical Framework, Python Implementation, [[gan]]-based augmentation, Parameter Table
- References: alpha-factor-discovery, finance/alpha-stacking, finance/gan, finance/value-at-risk, mcmc, news-sentiment-trading
- Backlinks: news-sentiment-trading

## Entity: causal-inference-trading
- Title: Causal Inference in Trading
- Category: Algorithms and ML
- Language: en
- Key Concepts: 2. The Do-Calculus (Judea Pearl), Granger Causality, Natural Experiments, Causal Inference, Visualization: The Confounder Trap, Policy Evaluation, Confounders and Spurious Alphas, Control, Tools of the Trade, Backtest Overfitting, Structural Causal Model (SCM), correlation, 3. Granger Causality vs. True Causality, Why Citadel uses Causal AI, 1. Directed Acyclic Graphs (DAGs)
- References: alpha-orthogonalization, causal-inference, finance/probability-of-backtest-overfitting
- Backlinks: causal-inference-do-calculus

## Entity: finance/cointegration
- Title: Cointegration
- Category: Algorithms and ML
- Language: en
- Key Concepts: augmented Dickey-Fuller (ADF), Applications in finance, Granger Representation Theorem., Yield curve modelling., Purchasing power parity (PPP)., adjustment speeds, Definition, max-eigenvalue test, error correction term, error correction representation, Structural breaks, Near-integration., Cointegration, Pitfalls, Overfitting in pairs trading.
- References: arima-models, central-limit-theorem, copula-models, finance/value-at-risk, hidden-markov-models, kalman-filter, math/law-of-large-numbers, math/spectral-theory-operators
- Backlinks: arima-models, pairs-trading

## Entity: convolutional-volatility-resolution-clustering
- Title: Convolutional Volatility Resolution Clustering (CVRC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Layer 1, Regime-Adaptive Trading, Adversarial regime generation, Overview & Background, Interpretability, Prerequisites, Transient Turbulence, Variational Autoencoder Bottleneck, Multi-scale, Convolutional Volatility Resolution Clustering (CVRC), Volatility Regime Clusters, Layer 3, Mathematical Framework, Python Implementation, Vol Surface Imputation
- References: arch-models, finance/gan, finance/spectral-analysis, garch-models, manifold-learning, volatility-forecasting, volatility-modulated-spectral-surface, wavelet-transform

## Entity: deep-galerkin
- Title: Deep Galerkin Method (DGM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Sampling, Why Tier-1 Quants Use It, Deep Galerkin Method (DGM) in Finance, The Core Idea: PDE as a Loss Function, Deep Galerkin Method (DGM), Continuous Solution, Visualization: The Curse Broken, Automatic Differentiation, How It Works, Optimization, Related Topics, Autograd, Curse of Dimensionality, High Dimensions, Neural Network
- References: automatic-differentiation, black-scholes, convex-optimization, neural-sdes-finance, numerical-pde-finance
- Backlinks: deep-ritz-method, schwartz-distributions

## Entity: deep-hedging
- Title: Deep Hedging
- Category: Algorithms and ML
- Language: en
- Key Concepts: Convex Risk Measure, The Failure of Black-Scholes Hedging, Friction-Aware, 2. The Neural Network, Universal, Continuous Trading, 1. The Objective Function, Global Optimization, Visualization: BS Delta vs. Deep Hedging, market frictions, The Deep Hedging Approach, optimal hedge ratio, Buehler et al. (2019), Complete Markets, Zero Transaction Costs
- References: finance/delta-hedging-practice, finance/rough-volatility, reinforcement-learning, transformer-architecture

## Entity: fama-macbeth-regression
- Title: Fama-MacBeth Regression
- Category: Algorithms and ML
- Language: en
- Key Concepts: Generated regressors, risk premium, Alpha attribution, Background, Pricing factor discovery, errors-in-variables (EIV), Academic asset pricing, Fama-MacBeth regression, Risk Premia Simulation Chart, Fama-MacBeth Regression, Step 1: Time-Series Regressions (Factor Loadings), Characteristic-based models, Step 2: Cross-Sectional Regressions (Risk Premia), Python Implementation, Smart beta validation
- References: black-scholes, finance/hierarchical-risk-parity, mcmc, portfolio-optimization-ml, ts-cs-factor-analysis
- Backlinks: causal-inference, finance/apt-ross, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, ts-cs-factor-analysis

## Entity: finance/gan
- Title: GANs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Missing data imputation, Mode collapse, Synthetic time series generation, Privacy-preserving analytics, Applications in Quant Finance, Background, Fat tails, GAN Architecture, Stylised Facts the GAN Must Capture, Volatility clustering, The Discriminator ($D$), Training instability, Leverage effect, Risk management (VaR/ES), Cross-asset dependencies
- References: finance/monte-carlo-method, finance/value-at-risk, fraud-detection, heston-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, convolutional-volatility-resolution-clustering, f-divergences, finance/adversarial-stress-testing, fraud-detection, lob-prediction, news-sentiment-trading, portfolio-optimization-ml, timegan, volatility-modulated-spectral-surface

## Entity: finance/gnn-finance
- Title: Graph Neural Networks in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Graph Neural Networks in Finance, Implementation, Graph Convolutional Networks (GCN), Graph [[attention-mechanisms|Attention]] Networks (GAT), Related Articles, Financial Applications, GNNs (Graph Neural Networks)
- References: attention-mechanisms, finance/eigenportfolio-rmt, finance/systemic-contagion-debtrank, finance/transformer-timeseries, fraud-detection

## Entity: finance/hidden-markov-models
- Title: Hidden Markov Models (HMM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Regime Switching Visualization, Core Components, Hidden Markov Models (HMM), E-step, Background, Fixed number of states, 1. Evaluation (Forward-Backward Algorithm), market regime detection, Multivariate HMMs, Dynamic asset allocation, Initial Distribution $\pi$, Adaptive strategies, The Three Fundamental Problems, Volatility forecasting, 2. Decoding (Viterbi Algorithm)
- References: avellaneda-stoikov, finance/phase-space-reconstruction, finance/shannon-entropy, garch-models, kalman-filter

## Entity: finance/lightgbm-xgboost
- Title: LightGBM and XGBoost for Factor Signals
- Category: Algorithms and ML
- Language: en
- Key Concepts: LightGBM, Financial Data Challenges, Class imbalance, Implementation, Temporality, Overfitting Controls, Non-stationarity, XGBoost, LightGBM and XGBoost for Factor Signals, Related Articles, Gradient Boosting
- References: alpha-factor-discovery, finance/probability-of-backtest-overfitting, finance/shap-interpretability, finance/transformer-timeseries
- Backlinks: finance/shap-interpretability, finance/transformer-timeseries

## Entity: lob-prediction
- Title: Limit Order Book (LOB) Prediction
- Category: Algorithms and ML
- Language: en
- Key Concepts: Order Imbalance, Multi-Level Features, Mid-price return, Background, Level-1 Features (Best Bid/Ask), Derived Features, Latency, F1-Score, Weighted Mid-price, Key Features for LOB Prediction, Depth imbalance at level $k$, DeepLOB, Extensions, Adverse selection, Key Metrics
- References: finance/gan, finance/market-impact-scaling, finance/value-at-risk, model-free-rl-factors, optimal-execution
- Backlinks: deep-rl-execution, finance/market-impact-scaling, finance/order-flow-imbalance, finance/transformer-timeseries

## Entity: finance/longstaff-schwartz
- Title: Longstaff-Schwartz Method (LSM)
- Category: Algorithms and ML
- Language: en
- Key Concepts: The Challenge of American Options, Simplicity, Longstaff-Schwartz Method, Background, Forward Pass, Python: Pricing an American Put Option, Prerequisites, Advantages, Backward Induction, Multi-Asset Extension, Mathematical Framework, Visualization: Exercise vs. Continuation, Parameter Table, Stochastic rates/volatility, Longstaff-Schwartz Method (LSM)
- References: black-scholes, finance/monte-carlo-method, heston-model, numerical-pde-finance, ornstein-uhlenbeck-process
- Backlinks: convertible-bonds, finance/barrier-asian-options, finance/follmer-schweizer, finance/free-boundary-american, finance/monte-carlo-method, finance/oas, numerical-pde-finance

## Entity: finance/meta-labeling
- Title: Meta-Labeling Framework
- Category: Algorithms and ML
- Language: en
- Key Concepts: Meta-Labeling Framework (Marcos Lopez de Prado), Interpretability, Triple barrier labeling, Prerequisites, size, Improved F1-Score, Earnings Plays, Sizing, Mathematical Framework, Parameter Table, side, Benefits, Addresses Overfitting, Visualization, Imbalanced classes
- References: alpha-factor-discovery, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/random-matrix-theory
- Backlinks: finance/alpha-stacking, finance/probability-of-backtest-overfitting, model-free-rl-factors, news-sentiment-trading

## Entity: model-free-rl-factors
- Title: Model-Free RL for Factor Portfolios
- Category: Algorithms and ML
- Language: en
- Key Concepts: DDPG (Deep Deterministic Policy Gradient), Prerequisites, Model-Free RL for Factor Portfolios, Policy Gradient Methods (PPO/DDPG), Key Design Choices, PPO (Proximal Policy Optimization), SAC (Soft Actor-Critic), Multi-objective, Model-Free Reinforcement Learning (RL), Python: Dynamic Factor Allocation with Stable Baselines3, Action Space, State Space, Reward Shaping, Mathematical Framework, Transaction costs
- References: alpha-factor-discovery, black-scholes, finance/hierarchical-risk-parity, finance/meta-labeling, finance/monte-carlo-method, finance/probability-of-backtest-overfitting, finance/shannon-entropy, hidden-markov-models, mcmc, rl-trader
- Backlinks: finance/online-learning-mab, finance/probability-of-backtest-overfitting, lob-prediction, portfolio-optimization-ml

## Entity: finance/monte-carlo-method
- Title: Monte Carlo Method
- Category: Algorithms and ML
- Language: en
- Key Concepts: 3. Importance Sampling, Quasi-Monte Carlo, Accuracy and Convergence, Python: Vectorized Asian Option Pricing with Variance Reduction, Simplicity, 1. Antithetic Variates, Quasi-MC, Background and History, Greeks computation, Monte Carlo Method, Steps in Option Pricing, Parameter Table, Generate Random Paths, 4. Stratified Sampling, Multidimensionality
- References: black-scholes, finance/longstaff-schwartz, finance/particle-filter, finance/quasi-monte-carlo, finance/value-at-risk, inference-serving, mcmc, qft-basic
- Backlinks: alpha-factor-discovery, automatic-differentiation, avellaneda-stoikov, black-scholes, bootstrap, brownian-bridge, convertible-bonds, copula-models, finance/adversarial-stress-testing, finance/barrier-asian-options, finance/black-swan-scenarios, finance/follmer-schweizer, finance/free-boundary-american, finance/gan, finance/hawkes-process, finance/levy-processes, finance/libor-market-model, finance/longstaff-schwartz, finance/market-impact-scaling, finance/meta-labeling, finance/nash-equilibrium, finance/oas, finance/particle-filter, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/sha-256, finance/shor-algorithm, finance/systemic-contagion-debtrank, finance/value-at-risk, finance/xva, fraud-detection, gaussian-processes, generative-models, generative-scenario-models, kelly-criterion, lln-clt, math/sde-numerical-methods, model-free-rl-factors, numerical-pde-finance, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, qft-basic, quantum-amplitude-estimation, risk-neutral-valuation, rl-trader, volatility-forecasting

## Entity: finance/multivariate-hmm
- Title: Multivariate Hidden Markov Models
- Category: Algorithms and ML
- Language: en
- Key Concepts: Interpretation, Posteriors, Baum-Welch (EM) Algorithm, Transition matrix, Implementation, Model Selection, M-step, Gaussian emission, Forward, Multivariate Hidden Markov Models, Related Articles, Initial distribution, Multivariate HMM, E-step: Forward-Backward, Model Structure
- References: copula-models, hidden-markov-models, kalman-filter, regime-switching-factors, volatility-forecasting

## Entity: finance/nash-equilibrium
- Title: Nash Equilibrium
- Category: Algorithms and ML
- Language: en
- Key Concepts: Pure Strategy, Evolutionary game theory, Rationality assumption, Theoretical Foundation, Multiple equilibria, Algorithmic Trading, Nash Equilibrium, Mixed Strategy, Practical Relevance in Finance, Oligopoly Models, Dynamic games, Systemic Risk, Background and History, Auction Theory, Market Making as a Game
- References: avellaneda-stoikov, finance/adversarial-stress-testing, finance/market-impact-scaling, finance/monte-carlo-method, optimal-execution
- Backlinks: finance/systemic-contagion-debtrank

## Entity: neural-sdes-finance
- Title: Neural SDEs in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Neural SDEs in Finance, Training via Adjoint Sensitivity, High-Dimensional Pricing, Neural ODEs, Path-Dependency, Stochastic Re-parameterization, The Adjoint Method, Why Use Neural SDEs?, Neural Stochastic Differential Equations (Neural SDEs), continuous-time generative model, Calibration, Diffusion Network, Model Discovery, Drift Network, Applications
- References: finance/rough-volatility, finance/volatility-surface, neural-odes, stochastic-differential-equations
- Backlinks: deep-galerkin, path-dependent-volatility, timegan

## Entity: news-sentiment-trading
- Title: News Sentiment Trading System
- Category: Algorithms and ML
- Language: en
- Key Concepts: Signal Decay, Entity Linking, Regulatory risk, Latency, Fake news risk, Lexicon-based, NLP Pipeline Components, Aspect-Based Sentiment, Sentiment Dispersion, Sentiment shock signal, Key Metrics, BERT/FinBERT, Parameter Table, Practical Implementation Guide, Sentiment Accuracy
- References: alternative-data-alpha, finance/gan, finance/meta-labeling, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: alternative-data-alpha, llm-financial-analysis

## Entity: numerical-pde-finance
- Title: Numerical PDE Methods in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: [[convertible-bonds]], Second-order in both space and time, Multi-Asset: ADI Methods, Local volatility, The Black-Scholes PDE, Explicit (Forward Euler), Uniform in log-space, American option pricing, Implicit (Backward Euler), General $\Theta$-Scheme, Alternating Direction Implicit, Python: Crank-Nicolson for European Put, American Options: Free Boundary Problem, complementarity condition, Finite Difference Schemes
- References: black-scholes, convertible-bonds, finance/longstaff-schwartz, finance/monte-carlo-method, finance/optimal-stopping-american, partial-differential-equations
- Backlinks: black-scholes, deep-galerkin, feynman-kac, finance/longstaff-schwartz, neural-operators, stochastic-control

## Entity: finance/online-learning-mab
- Title: Online Learning and Multi-Armed Bandits
- Category: Algorithms and ML
- Language: en
- Key Concepts: Thompson Sampling, Exp3 for Adversarial Environments, UCB (Upper Confidence Bound), Online Learning and Multi-Armed Bandits, Lai-Robbins lower bound, Implementation, Related Articles, Problem and Regret, cumulative regret, Multi-Armed Bandit (MAB), UCB1 achieves
- References: alpha-factor-discovery, model-free-rl-factors, rl-trader

## Entity: finance/alpha-stacking
- Title: Orthogonal Alpha Stacking
- Category: Algorithms and ML
- Language: en
- Key Concepts: Orthogonal Alpha Stacking, Orthogonal Alpha Stacking & Residualization, Overview & Background, Regulatory Reporting, Robust PCA / [[random-matrix-theory]], Prerequisites, ICIR-weighted, Dynamic residualization, Signal Correlation Before/After Residualization, Risk Management, Residualization via Regression, Mathematical Framework, Python Implementation, Multi-Factor Models, Parameter Table
- References: alpha-factor-discovery, convex-optimization-trading, finance/hierarchical-risk-parity, finance/meta-labeling, finance/random-matrix-theory
- Backlinks: alpha-factor-discovery, alternative-data-alpha, finance/apt-ross, finance/asymptotic-arbitrage-large-markets

## Entity: finance/particle-filter
- Title: Particle Filter (SMC)
- Category: Algorithms and ML
- Language: en
- Key Concepts: For each time step $t = 1, 2, \ldots$:, Comparison, Particle Cloud Visualization, Linearity, Prerequisites, Python: Stochastic Volatility Tracking, Accuracy, Particle Filter, Degeneracy, Transition equation, Regime Detection, Risk Management, Distributions, State-Space Formulation, Mathematical Framework
- References: finance/monte-carlo-method, heston-model, hidden-markov-models, mcmc, ornstein-uhlenbeck-process
- Backlinks: conditionally-gaussian-processes, finance/heston-model, finance/monte-carlo-method, finance/phase-space-reconstruction, kalman-filter, nonlinear-filtering, pairs-trading

## Entity: fastest-mean-reversion
- Title: Portfolios of Fastest Mean Reversion
- Category: Algorithms and ML
- Language: en
- Key Concepts: The Box-Tiao / Generalized Eigenvalue Approach, Rayleigh Quotient, The Mathematical Objective, Sparse PCA, Portfolios of Fastest Mean Reversion, smallest generalized eigenvalue, Sparse Portfolio, Related Topics, $L_1$-regularization (LASSO), Sparse Mean-Reverting Portfolios, Visualization: Reversion Speed, speed of mean reversion, Ornstein-Uhlenbeck (OU) process, Fastest Mean Reversion
- References: ornstein-uhlenbeck-process, pairs-trading, pca
- Backlinks: pca-statarb

## Entity: finance/probability-of-backtest-overfitting
- Title: Probability of Backtest Overfitting
- Category: Algorithms and ML
- Language: en
- Key Concepts: The Deflated Sharpe Ratio, The "Silent Killer" of Quant Funds, Selection Bias under Multiple Testing, In-Sample (IS), Combinatorially Symmetric Cross-Validation (CSCV), Out-of-Sample (OOS), Deflated Sharpe Ratio (DSR), Parameter Table, CSCV, Python: Full PBO Calculation with CSCV, silent killer, Dependent strategies, Minimum backtest length, Selection Bias under Multiple Testing (SBM), Visualization
- References: finance/meta-labeling, finance/monte-carlo-method, finance/value-at-risk, model-free-rl-factors
- Backlinks: bayesian-black-litterman, causal-inference-trading, convex-optimization-trading, finance/lightgbm-xgboost, finance/meta-labeling, finance/shap-interpretability, model-free-rl-factors, numeraire-invariant-hedging, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, timegan, ts-cs-factor-analysis

## Entity: finance/quasi-monte-carlo
- Title: Quasi-Monte Carlo Methods
- Category: Algorithms and ML
- Language: en
- Key Concepts: Option pricing., Applications in finance, Scrambled QMC and error estimation, The Koksma-Hlawka inequality, variation of $f$ in the sense of Hardy and Krause, From random to deterministic: discrepancy, Halton sequence., Risk aggregation., effective dimension, effective dimension in the superposition sense, low-discrepancy sequences, Niederreiter-Xing., Scrambled (randomized) QMC, QMC vs MC convergence, Related Articles
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, kalman-filter, math/law-of-large-numbers
- Backlinks: finance/monte-carlo-method

## Entity: finance/random-matrix-theory
- Title: Random Matrix Theory (RMT)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Key Properties and Assumptions, Systemic risk monitoring, Oracle Shrinkage, Marchenko-Pastur (MP) law, Risk factor discovery, Execution cost models, Eigenvector noise, Bulk universality, Factor model interpretation, Step 3 — Reconstruct:, Large-$N$ limit, IID assumption, Factor structure, Stress testing, Eigenvalue Cleaning Procedure
- References: finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/value-at-risk, math/spectral-theory-operators, quantum-entanglement
- Backlinks: convex-optimization-trading, cross-impact, eigenvalues-eigenvectors, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/meta-labeling, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, nonlinear-shrinkage, portfolio-optimization-ml, quantum-entanglement, regime-switching-factors

## Entity: regime-switching-factors
- Title: Regime-Switching Factor Strategies
- Category: Algorithms and ML
- Language: en
- Key Concepts: Over-fitting, Identifiability, Background, Non-Gaussian emissions, stationary distribution, Dynamic factor allocation, Macro timing, Options market making, expected duration, Mathematical Framework, Python Implementation, smoothed probability, Regime-Switching Factor Strategies, Persistence, regimes
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc
- Backlinks: finance/multivariate-hmm, hmm-particle-filters, rl-trader

## Entity: rl-trader
- Title: Reinforcement Learning (RL) Trader
- Category: Algorithms and ML
- Language: en
- Key Concepts: Learning Curve Visualization, Reinforcement Learning (RL) Trader, Background, Reward shaping, Interpretability, Position-Based Formulation, Offline RL, Action space, Sample efficiency, Reward Functions, Multi-agent RL (MARL), Markov Decision Process (MDP), Reward, Mathematical Framework, Python Implementation
- References: attention-mechanisms, finance/monte-carlo-method, finance/value-at-risk, mcmc, optimal-execution, regime-switching-factors
- Backlinks: deep-rl-execution, finance/online-learning-mab, model-free-rl-factors, reinforcement-learning

## Entity: finance/sha-256
- Title: SHA-256 (Secure Hash Algorithm)
- Category: Algorithms and ML
- Language: en
- Key Concepts: SHA-256 Avalanche Effect, Background, Second pre-image resistance, Output length, SHA-256, Merkle proofs, Digital signatures, SHA-256 (Secure Hash Algorithm), Message Schedule, Mathematical Framework, Python Implementation, Davies-Meyer, Hardware acceleration, Truncated variants, Bitcoin proof-of-work
- References: finance/lempel-ziv-complexity, finance/monte-carlo-method, finance/shannon-entropy, finance/shor-algorithm, mcmc
- Backlinks: finance/shor-algorithm

## Entity: finance/shap-interpretability
- Title: SHAP and ML Model Interpretability
- Category: Algorithms and ML
- Language: en
- Key Concepts: Null player, Properties, Shapley Values, SHAP vs LIME vs Permutation Importance, SHAP (SHapley Additive exPlanations), SHAP and ML Model Interpretability, Financial Use Cases, Symmetry, TreeSHAP, Related Articles, Efficiency
- References: alpha-factor-discovery, finance/lightgbm-xgboost, finance/probability-of-backtest-overfitting, fraud-detection
- Backlinks: finance/lightgbm-xgboost

## Entity: finance/shannon-entropy
- Title: Shannon Entropy in Finance
- Category: Algorithms and ML
- Language: en
- Key Concepts: Information-theoretic portfolio construction, Maximality, Binning sensitivity, Approximate Entropy (ApEn), differential entropy, Von Neumann Entropy, Market Efficiency via Entropy, Transfer Entropy, Relative Entropy (KL Divergence), Entropy Over Market Regimes, Model validation, Kullback-Leibler divergence, Mathematical Framework, Axiomatic Derivation, Python Implementation
- References: finance/lempel-ziv-complexity, finance/random-matrix-theory, hidden-markov-models, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ai-theory/neural-tangent-kernel, change-of-variables, contrastive-learning, course-math-for-ai, decision-theory, deep-rl-execution, dirichlet-forms, distributions-zoo, dpo, embedding-models, empirical-processes, entropy-information, entropy-pooling, ergodic-theory, ergodic-theory-markov, f-divergences, finance/coherent-risk-measures, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hidden-markov-models, finance/lempel-ziv-complexity, finance/levy-esscher-continuous, finance/quasi-monte-carlo, finance/sha-256, finance/shor-algorithm, finance/upper-lower-hedging-prices, finance/zeta-field, financial-entropy, free-probability, hydrodynamic-limits, information-geometry-finance, information-theory-basics, jensen-inequality, jensens-inequality, kolmogorov-complexity, language-models/safety/rlhf-dpo, laplacian, logistic-regression, martingale, math/bayesian-asymptotics, math/concentration-inequalities, math/ergodic-theorems-birkhoff, math/gaussian-process-sample-paths, math/harmonic-analysis, math/information-theory, math/interacting-particle-systems, math/large-deviations-cramer, math/m-estimators, math/sigma-algebra-measurability, maximum-entropy, maximum-entropy-irl, mle, model-free-rl-factors, multi-token-prediction, multivariate-normal, mutual-information-divergence, naive-bayes, neural-scaling-laws, nlp-financial-analysis, online-learning-regret, pac-learning, path-integral-control, ppo, probability-distributions, probing-classifiers, quantum-entanglement, quantum-information-entropy, ricci-flow, risk-neutral-valuation, rlhf, sac-math, slm, small-ball-probabilities, soft-actor-critic, sparse-autoencoders, statistical-mechanics, training-dynamics, volatility-modulated-spectral-surface

## Entity: finance/shor-algorithm
- Title: Shor's Algorithm
- Category: Algorithms and ML
- Language: en
- Key Concepts: Fault tolerance gap, continued fraction algorithm, Blockchain quantum risk, Background, Post-quantum cryptography (PQC), Reduction to Order-Finding, Secure multi-party computation, Quantum Fourier Transform, Probabilistic success, Qubit requirements, Cryptographic migration planning, Discrete Logarithm, Quantum risk premium, Timeline uncertainty, Mathematical Framework
- References: finance/monte-carlo-method, finance/sha-256, finance/shannon-entropy, finance/spectral-analysis, mcmc
- Backlinks: finance/fft, finance/sha-256

## Entity: pca-statarb
- Title: StatArb with PCA (Avellaneda-Lee)
- Category: Algorithms and ML
- Language: en
- Key Concepts: Short, The Residual ($\tilde{R}_i$), Execution, Why it Dominates, The PCA Approach, Modeling the Residual (The Trade), Buy, Principal Component Analysis (PCA), Beta-neutral and Sector-neutral, Statistical Arbitrage, The Problem with Pairs, Related Topics, The Signal (S-score), Extract Factors, synthetic market factors
- References: alpha-orthogonalization, fastest-mean-reversion, ornstein-uhlenbeck-process, pairs-trading, pca

## Entity: ts-cs-factor-analysis
- Title: TS vs CS Factor Analysis
- Category: Algorithms and ML
- Language: en
- Key Concepts: Zoo of factors, EIV bias, Long-short factor portfolios, risk premium, Background, Factor model validation, Characteristic vs. covariance, Jensen's alpha, Test statistic, Cross-Sectional (CS) regression, TS vs CS Factor Analysis, Risk Premia Estimates by Factor, Regulatory stress testing, Cross-Sectional (CS) Regression, SDF framework
- References: black-scholes, fama-macbeth-regression, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: fama-macbeth-regression, finance/factor-attribution

## Entity: timegan
- Title: TimeGAN: Generating Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: Why Quants Use It, The Flaw of Standard GANs, Generator, Adversarial Loss, The Magic: Three Loss Functions, temporal dynamics, there is only one history, Embedder (Encoder), Discriminator, Data Augmentation, TimeGAN: Generating Synthetic Financial Data, Reconstruction Loss, Recovery (Decoder), Supervised Loss (The Key), The TimeGAN Architecture
- References: finance/gan, finance/probability-of-backtest-overfitting, neural-sdes-finance

## Entity: finance/transformer-timeseries
- Title: Transformers for Time Series
- Category: Algorithms and ML
- Language: en
- Key Concepts: Gate Residual Networks, Practical Advice, Implementation, Key Architectures, Informer (Zhou et al. 2021), PatchTST (Nie et al. 2023), Transformers, Variable Selection, Positional encoding, Temporal Self-[[attention-mechanisms|Attention]], Gradient clipping, Self-[[attention-mechanisms|Attention]] Mechanism, Temporal Fusion [[transformer-architecture|Transformer]] (TFT, Lim et al. 2021), Related Articles, Transformers for Time Series
- References: attention-mechanisms, finance/lightgbm-xgboost, hidden-markov-models, kalman-filter, lob-prediction, transformer-architecture
- Backlinks: finance/gnn-finance, finance/lightgbm-xgboost

## Entity: vine-copulas
- Title: Vine Copulas for StatArb
- Category: Algorithms and ML
- Language: en
- Key Concepts: Copulas, What is a Vine Copula?, Fit the Vine, The Trade, Visualization: Bivariate Building Blocks, Sklar's Theorem, Vine Copulas, bivariate (2D) pair-copulas, Why it Beats Linear Models, Application: Statistical Arbitrage, Vine Copulas for Statistical Arbitrage, Related Topics, The Vine Structure, Conditional Probability (The Signal), The Flaw of Multivariate Normal
- References: alpha-factor-research, copula-models, pairs-trading

## Entity: clifford-algebras
- Title: Clifford Algebras & Geometric Algebra
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Clifford Algebras & Geometric Algebra, Applications in Physics, Definition, Rotors and Spinors, Multivectors

## Entity: complex-manifolds
- Title: Complex and Kähler Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Complex manifold, must form a Calabi-Yau 3-fold, 5. Mirror Symmetry, Local Potential, Hermitian Metric, Visualization: The Intersection of Geometries, 3. Kähler Manifolds, String Theory Connection, Complex Manifold, Riemannian manifold, Complex [[manifold-learning|Manifold]], 2. Hermitian Metrics, Hodge Theory on Kähler Manifolds, $J^2 = -I$, Symplectic manifold
- References: hodge-theory, manifold-learning, spectral-graph-theory, symplectic-geometry, tensor-calculus
- Backlinks: manifold, ricci-flow

## Entity: connections-curvature
- Title: Connections and Covariant Derivatives
- Category: Analysis & Geometry
- Language: en
- Key Concepts: 1. The Covariant Derivative and Christoffel Symbols, 5. Geometric Flow: The Ricci Flow, Differential (Second) Bianchi Identity, Levi-Civita Connection, Poincaré Conjecture, Connections, Curvature, and Holonomy, Physical Implication: Energy Conservation, Holonomy Group, Ambrose-Singer Theorem, 4. Decomposing Curvature: Ricci vs. Weyl, Ricci Curvature ($R_{\mu\nu}$), 3. The Riemann Curvature Tensor ($R^\rho_{\sigma\mu\nu}$), 2. Holonomy: The Geometric Signature of Curvature, Covariant Derivative, Algebraic Bianchi Identity
- References: gauge-theory-yang-mills, manifold-learning, ricci-flow, tensor-calculus
- Backlinks: course-math-for-ai, geometric-deep-learning, hodge-theory, ricci-flow, symplectic-geometry, tensor-calculus

## Entity: delay-differential-equations
- Title: Delay Differential Equations in Neural Systems
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hopf bifurcation, Mathematical Formulation, Delay-Induced Bifurcations, Delay Differential Equations in Neural Systems, Linear Stability Analysis

## Entity: geometric-deep-learning
- Title: Geometric Deep Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: 3. Gauge Equivariant CNNs (Geodesic CNNs), Non-linear Activation, CNNs, Climate Science, Gauge Equivariance, Deep Sets, Graphs, Visualization: Symmetry Hierarchy, Groups (Homogeneous Spaces), 5. Applications at the PhD Level, Invariance, Equivariance, 2. The 5 Domains of GDL, GNNs, Geometric Deep Learning (GDL)
- References: connections-curvature, lie-groups-algebras, manifold-learning, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, course-math-for-ai, graph-curvature-oversquashing, lie-groups-algebras, tensor-calculus

## Entity: graph-curvature-oversquashing
- Title: Graph Curvature & Over-squashing
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Positive curvature, Ollivier-Ricci Curvature, Graph Curvature & Over-squashing, Graph Rewiring (SDRF), Over-squashing, Over-squashing and Sensitivity, Ollivier-Ricci curvature, What Is It, Spectral Gap and Cheeger Constant, MATHEMATICAL DERIVATION: ORC on a Triangle, Stochastic Discrete Ricci Flow (SDRF), Related Topics, Ricci curvature, Negative curvature
- References: geometric-deep-learning, graph-neural-networks, math/spectral-theory-operators, optimal-transport, ricci-flow, spectral-graph-theory

## Entity: hodge-theory
- Title: Hodge Theory and Harmonic Forms
- Category: Analysis & Geometry
- Language: en
- Key Concepts: 5. Applications, Hodge Laplacians, [[spectral-graph-theory|Laplacian]], $k$-th De Rham Cohomology Group, Hodge Star Operator, A. Electromagnetism, Divergence, 3. The Laplace-de Rham Operator, Harmonic, Hodge Theory: Bridging Topology and Differential Equations, B. Topological Data Analysis (TDA), one unique harmonic form, Harmonic form, Codifferential, 4. The Hodge Decomposition Theorem
- References: connections-curvature, manifold-learning, spectral-graph-theory, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, homological-algebra, tensor-calculus

## Entity: information-geometry-nn
- Title: Information Geometry of Neural Networks
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Information Geometry of Neural Networks, Curvature and Flat Minima, Natural [[convex-optimization|Gradient Descent]], Fisher Information Metric
- References: convex-optimization, manifold-learning, math/spectral-theory-operators

## Entity: lie-algebras-physics
- Title: Lie Algebras in Physics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Hermitian operator, isospin, Gauge Theories and Connections, Generators and Observables, The Adjoint Representation and Force Carriers, Adjoint Representation, strangeness, 2. Particle Physics and $\mathfrak{su}(3)$, Electromagnetism, 1. Angular Momentum and $\mathfrak{su}(2)$, Related Topics, Lie-algebra valued 1-forms, Strong Force (QCD), Lie Algebras in Physics, Lie Algebras
- References: general-relativity, lie-groups
- Backlinks: equivariant-diffusion-models

## Entity: lie-groups
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Dynkin diagrams, Basic Definitions, Examples:, roots, [[manifold-learning|Manifold]] Optimization, The Exponential Map, Equivariant Neural Networks, 1. Lie Group ($G$), continuous symmetries, Lie bracket, 2. Lie Algebra ($\mathfrak{g}$), tangent space at the identity, Lie Groups in Modern AI, exponential map, Representations and Root Systems
- References: equivariant-nn, manifold-learning, math/differential-geometry
- Backlinks: course-math-for-ai, equivariant-diffusion-models, lie-algebras-physics, random-walks-groups

## Entity: lie-groups-algebras
- Title: Lie Groups and Lie Algebras
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Group, $SO(n)$ (Special Orthogonal), Lie Groups and Lie Algebras: The Geometry of Symmetry, $SE(3)$ (Special Euclidean), CNNs, Strong Nuclear Force, Equivariant Neural Networks, 1. The Lie Algebra ($\mathfrak{g}$), $SU(n)$ (Special Unary), Spherical CNNs, Exponential Map, Baker-Campbell-Hausdorff (BCH) Formula, infinitesimal rotation, 2. The Exponential Map, Antisymmetry
- References: gauge-theory-yang-mills, geometric-deep-learning, manifold-learning, tensor-calculus
- Backlinks: geometric-deep-learning

## Entity: manifold-learning
- Title: Manifold Learning
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Key Algorithms, Mathematical Engine: The Beltrami Operator, Manifold Hypothesis, 2. Locally Linear Embedding (LLE), UMAP, geodesic distances, Anomaly Detection, Spectral Graph Theory, Laplace-Beltrami operator, The Manifold Hypothesis, 1. Isomap (Isometric Mapping), Visualization: Euclidean vs. Geodesic, Manifold Learning, Image Analysis, Single-cell RNA Sequencing
- References: math/analysis-geometry/information-geometry, math/differential-geometry, spectral-graph-theory
- Backlinks: 3d-gaussian-splatting, ai-theory/knowledge-distillation, category-theory-ml, complex-manifolds, connections-curvature, convolutional-volatility-resolution-clustering, course-math-for-ai, differential-forms, diffusion-models, energy-based-models, equivariant-diffusion-models, ergodic-theory-sgd, f-divergences, finance/asymptotic-expansion-finance, fisher-information, gauge-equivariant-nn, geometric-deep-learning, geometric-mechanics-lie-groups, geometry-loss-landscapes, geometry-of-attention, hodge-theory, implicit-function-theorem, information-geometry-finance, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lie-groups, lie-groups-algebra, lie-groups-algebras, linear-algebra, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/non-euclidean-geometry, math/ode-stability, math/stratonovich-integral, maximum-entropy, metric-spaces, mle, model-merging-procrustes, morse-theory, multimodal-alignment-clip, nerf, neural-operators-fno, neural-radiance-fields-math, nonlinear-filtering, normalization-layers-math, optimal-transport-gromov-wasserstein, pca, pinns-convergence, regularization-implicit-bias, ricci-flow, riemannian-geometry, semimartingales-on-manifolds, stochastic-calculus-manifolds, stochastic-manifolds, symplectic-geometry, symplectic-hamiltonian-nn, tensor-calculus

## Entity: neural-radiance-fields-math
- Title: Mathematical Foundations of NeRF
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Mathematical Foundations of NeRF, Mip-NeRF:, Extensions and Generalisations, [[manifold-learning|Manifold Learning]]:, differential geometry, Positional Encoding and Harmonic Analysis, harmonic analysis, [[gaussian-splatting|Gaussian Splatting]]:, positional encoding, NeuS / VolSDF:, volume rendering equation, volume rendering, The Radiance Field Function, accumulated transmittance, Differential Geometry and Inverse Rendering
- References: 3d-gaussian-splatting, ai-theory/neural-tangent-kernel, calculus-integration, manifold-learning, nerf, transformer-architecture

## Entity: mean-field-games
- Title: Mean Field Games
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Fokker-Planck (Kolmogorov forward) equation, Mathematical Formulation, The MFG System, Variational Structure, Mean Field Games, Hamilton-Jacobi-Bellman (HJB) equation
- Backlinks: hydrodynamic-limits, mechanism-design, stochastic-games

## Entity: optimal-transport
- Title: Optimal Transport & Wasserstein Metrics
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Introduction, Kantorovich Relaxation, Entropic Regularization and Sinkhorn Divergence, Optimal Transport & Wasserstein Metrics, Applications
- Backlinks: convex-analysis, course-math-for-ai, graph-curvature-oversquashing, linear-programming, martingale-optimal-transport, math/analysis-geometry/information-geometry, metric-spaces, radon-nikodym

## Entity: ricci-flow
- Title: Ricci Flow and Geometric Evolution
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Singularities, Perelman's Breakthrough, Intuition, Ricci Curvature Tensor, Poincaré Conjecture, Geometrization Conjecture, Mesh Parameterization, 1. The Evolution Equation, $\mathcal{W}$-[[shannon-entropy|Entropy]] Functional, Ricci Flow: The Evolution of Geometry, Proof Strategy, Graph Curvature, Manifold Learning, Short-time Existence, 2. Singularities and Surgery
- References: complex-manifolds, connections-curvature, finance/shannon-entropy, manifold-learning
- Backlinks: connections-curvature, course-math-for-ai, differential-equations, graph-curvature-oversquashing, stochastic-manifolds

## Entity: spectral-graph-theory
- Title: Spectral Graph Theory
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Cheeger's Inequality, Spectral Graph Theory, Graph Laplacian, Expander Graphs
- References: math/spectral-theory-operators
- Backlinks: ai-theory/spatial/equivariant-gnn, algebraic-geometry-slt, algebraic-topology-persistent, complex-manifolds, differential-galois-theory, ergodic-theory-markov, feller-processes, finance/fractional-fokker-planck, fourier-transform, geometric-deep-learning, gnn-credit-risk, gnn-weisfeiler-lehman, graph-curvature-oversquashing, graph-neural-networks, graph-theory, higher-category-theory-ai, hodge-theory, laplacian, linear-algebra, manifold-learning, map-estimation, math/spdes, math/spectral-theory-operators, non-commutative-geometry, number-theory-l-functions, operator-semigroups, schwartz-distributions, spectral-clustering, spectral-theorem-unbounded, stable-processes, string-theory-calabi-yau, tensor-calculus, topos-neural-networks

## Entity: neural-ode-stability
- Title: Stability Theory for Neural ODEs
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Lipschitz Constants and Uniqueness, Mathematical Formulation, Stability Theory for Neural ODEs, Lyapunov Stability, Adjoint Method and Backward Stability
- References: math/spectral-theory-operators

## Entity: symplectic-geometry
- Title: Symplectic Geometry
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Darboux's Theorem, A. Symplectomorphisms, Machine Learning, Visualization: The Area Preserving Flow, Poisson Bracket, even-dimensional, 5. Advanced Frontier: Symplectic Integrators, Symplectomorphism, Area, Hamiltonian Mechanics, Conservation Laws, Noether's Theorem, Canonical Transformations, Symplectic Integrators, Non-degenerate
- References: ai-physics/hamiltonian-nn, connections-curvature, manifold-learning, tensor-calculus
- Backlinks: complex-manifolds, course-math-for-ai, manifold, microlocal-analysis

## Entity: tensor-calculus
- Title: Tensor Calculus on Manifolds
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Property, Metric Tensor, Exterior Derivative ($d$), A. General Relativity, 2. Exterior Algebra and Differential Forms, Tensor Calculus, Lie Derivative, Hodge Dual, 1. Multilinear Algebra and Tensor Spaces, Geometric Deep Learning, Killing's Equation, Wedge Product ($\wedge$), 4. The Lie Derivative ($\mathcal{L}_X$), Levi-Civita Symbol ($\epsilon_{\mu\nu\rho\sigma}$), Smooth [[manifold-learning|Manifold]]
- References: connections-curvature, geometric-deep-learning, hodge-theory, manifold-learning, spectral-graph-theory
- Backlinks: complex-manifolds, connections-curvature, hodge-theory, lie-groups-algebras, linear-spaces-basis, symplectic-geometry

## Entity: geometry-of-attention
- Title: The Geometry of Attention Mechanisms
- Category: Analysis & Geometry
- Language: en
- Key Concepts: Lipschitz Continuity and Stability, The Geometry of [[attention-mechanisms|Attention]] Mechanisms, Information Geometry of Softmax, Softmax as a Kernel Smoother
- References: attention-mechanisms, manifold-learning, math/spectral-theory-operators

## Entity: tda-mapper-algorithm
- Title: The Mapper Algorithm in TDA
- Category: Analysis & Geometry
- Language: en
- Key Concepts: filter function, Edges (1-simplices), The Nerve Complex, Vertices (0-simplices), Mathematical Formulation, Nerve, Higher-dimensional simplices ($k$-simplices), The Mapper Algorithm in TDA, Algorithm Parameters and Functoriality

## Entity: math/branching-processes
- Title: Branching Processes
- Category: Applied Probability
- Language: en
- Key Concepts: Supercritical, Extinction probability, Proof sketch., Supercritical case (Kesten-Stigum theorem)., Examples, 4. Viral content propagation., Theorem., Extensions, Critical case (Kolmogorov, 1938)., 1. Binary splitting., Continuous-time branching (Bellman-Harris process)., functional equation, mean offspring number, 3. Epidemic modelling., Related Articles
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/renewal-theory, math/wiener-hopf-factorization
- Backlinks: math/percolation, math/point-processes, math/random-graphs, math/renewal-theory, math/subordinators, math/wiener-hopf-factorization

## Entity: clt
- Title: Central Limit Theorem (CLT)
- Category: Applied Probability
- Language: en
- Key Concepts: Central Limit Theorem (CLT): The Law of Cosmic Order, Lindeberg Condition, 3. Rate of Convergence: Berry–Esseen Theorem, Lévy Distribution, Berry–Esseen Theorem, 2. When Does it Fail? (Lindeberg-Feller), Visualization: Convergence to Gaussian, 1. The Classical CLT (Lindeberg–Lévy), Fat Tails, Standard Deviation, Deep Learning, The Miracle, 4. Role in Modern Systems, Related Topics, Finance
- References: finance/levy-processes, frtb-es, mle
- Backlinks: characteristic-functions, mgf-characteristic-functions

## Entity: change-of-variables
- Title: Change of Variables
- Category: Applied Probability
- Language: en
- Key Concepts: Change of Variables: The Geometry of Probability, 3. Key Applications, B. Log-Normal Distribution, A. The Box-Muller Transform, C. Differential [[shannon-entropy|Entropy]], Intuition, 2. The Multivariate Case (The Jacobian), 1. The 1D Case, Related Topics, Normalizing Flows, Scaling Factor, Mutual Information, Generative AI, [[gradient-hessian-jacobian|Jacobian Matrix]], Visualization: Stretching the Density
- References: black-scholes, finance/shannon-entropy, gradient-hessian-jacobian, mle, variational-autoencoders

## Entity: characteristic-functions
- Title: Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: always exists, Carr-Madan method, A. Uniqueness (Lévy's Inversion Theorem), [[central-limit-theorem|Central Limit Theorem]], Characteristic Function, B. Sums of Variables, 3. The Lévy Continuity Theorem, A. Fast Option Pricing (FFT), Variance Gamma, Fast Fourier Transform (FFT), C. Moment Generation, Universal Existence, B. Infinite Divisibility, 1. Definition, Characteristic Functions: The Fourier View of Probability
- References: central-limit-theorem, clt, finance/levy-processes, fourier-transform, merton-jump-diffusion, mgf
- Backlinks: copulas, course-math-for-ai, extreme-value-theory, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/contiguity-measures, math/convergence-semimartingales, math/glivenko-cantelli, math/infinitely-divisible-distributions, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/product-measures-fubini, math/renewal-theory, math/stable-convergence, math/stationary-wide-spectral, math/stein-method, math/triangular-arrays-processes, math/u-statistics, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, wiener-chaos

## Entity: math/concentration-inequalities
- Title: Concentration Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: Theorem (McDiarmid, 1989)., Examples:, Key insight:, martingales, Large deviations theory:, Sum of sub-Gaussians:, distribution-free, Concentration Inequalities, moment generating function, Sub-Gaussian random variables, statistical sample complexity, Randomized algorithms:, Hoeffding's inequality, Chernoff bound, shape
- References: central-limit-theorem, characteristic-functions, empirical-processes, finance/shannon-entropy, martingale-clt, math/large-deviations-cramer, math/law-of-large-numbers
- Backlinks: ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, distributions-zoo, extreme-value-theory, fundamental-inequalities, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/markov-chain-mixing, math/minimax-estimation, math/multiple-testing, math/percolation, math/random-graphs, math/stein-method, random-matrices

## Entity: convergence-types
- Title: Convergence of Random Variables
- Category: Applied Probability
- Language: en
- Key Concepts: 4. Convergence in Distribution (d), Relationship Map, Weak Law of Large Numbers, false, The Hierarchy of Convergence, 3. Convergence in Mean ($L^p$), Central Limit Theorem, 1. Convergence Almost Surely (a.s.), Related Topics, Why It Matters for AI, Strong Law of Large Numbers, Consistency, Convergence of Random Variables, 2. Convergence in Probability (p), Generalization
- References: central-limit-theorem, math/law-of-large-numbers

## Entity: copulas
- Title: Copulas and Dependence
- Category: Applied Probability
- Language: en
- Key Concepts: Why Not Just Use Correlation?, Visualization: Tail Dependence, Tail Dependence, Sklar's Theorem, isolate the dependency structure, Copulas and Dependence Structures, 1. Gaussian Copula, linear, 2. Student's t-Copula, Types of Copulas, Related Topics, zero tail dependence, asymmetric tail dependence, 3. Archimedean Copulas (Clayton, Gumbel, Frank), unique
- References: characteristic-functions, extreme-value-theory, statistical-mechanics
- Backlinks: correlation-association, joint-distributions

## Entity: math/coupling-methods
- Title: Coupling Methods
- Category: Applied Probability
- Language: en
- Key Concepts: coupling, Central Limit Theorem Proofs, optimal coupling, Coupling Inequality for Convergence Time, Definition of Coupling, Optimal Coupling and Strassen's Theorem, Grand Coupling, Markov Chain Coupling and Mixing Time Bounds, Monotone Coupling and Stochastic Ordering, maximal coupling strategy, Grand coupling, perfect simulation, Coupling Methods, coupling inequality, Strassen's theorem
- References: central-limit-theorem, de-finetti-exchangeability, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/weak-convergence-prokhorov
- Backlinks: math/geometric-ergodicity, math/interacting-particle-systems, math/markov-chain-mixing, math/percolation

## Entity: cramer-rao-bound
- Title: Cramer-Rao Lower Bound
- Category: Applied Probability
- Language: en
- Key Concepts: Cramer-Rao Lower Bound (CRLB), Efficient Estimator, MLE, 3. General Form (Biased Estimators), Fisher Information, 1. Fisher Information, Statistical Efficiency, 4. Importance in Estimation Theory, UMVUE, Related Topics, 2. The Inequality, Score Function, Efficiency
- References: estimator-properties, fisher-information, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information, math/bayesian-asymptotics, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, mle, mle-estimation, sufficient-statistics, umvue-completeness

## Entity: delta-method
- Title: Delta Method
- Category: Applied Probability
- Language: en
- Key Concepts: MLE Functions, Standard Errors, Delta Method, 2. Derivation Idea, Related Topics, 1. Formal Statement, 3. Applications, Multivariate Delta Method
- References: lln-clt, mle-estimation, statistical-inference
- Backlinks: slutsky-theorem, umvue-completeness

## Entity: entropy-information
- Title: Entropy and Information Gain
- Category: Applied Probability
- Language: en
- Key Concepts: highest Information Gain, High [[shannon-entropy|Entropy]], [[shannon-entropy|Entropy]] and Information Gain, Visualization: Entropy vs. Probability, 2. Conditional Entropy $H(Y \mid X)$, Low Entropy, 4. Information Gain (IG), Related Topics, any kind of dependency, 3. Mutual Information ($I$), 1. Shannon [[shannon-entropy|Entropy]] ($H$)
- References: finance/shannon-entropy, maximum-entropy
- Backlinks: course-math-for-ai

## Entity: ergodic-theory
- Title: Ergodic Theory & Mixing
- Category: Applied Probability
- Language: en
- Key Concepts: Birkhoff's Ergodic Theorem, Ergodicity, Measure-Preserving Dynamical Systems, Ergodic Theory & Mixing, Mixing and [[shannon-entropy|Entropy]]
- References: finance/shannon-entropy
- Backlinks: stochastic-processes

## Entity: ergodic-theory-markov
- Title: Ergodic Theory of Markov Chains
- Category: Applied Probability
- Language: en
- Key Concepts: Metropolis-Hastings, Mixing Time, Bayesian Inference, Visualization: Convergence to Stationarity, Ergodic Theory of Markov Chains, Statistical Physics, Time Averages vs Space Averages, Does the chain settle into a stable equilibrium (stationary distribution), regardless of where it started?, Convergence, PageRank, Stationary Distribution ($\pi$), reversible, The Ergodic Theorem for Markov Chains, Slow Mixing, spectral gap
- References: finance/shannon-entropy, math/information-theory, spectral-graph-theory
- Backlinks: mdp

## Entity: de-finetti-exchangeability
- Title: Exchangeability and de Finetti's Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: Bayesian consistency, empirical measure, Partial Exchangeability and Hierarchical Models, Proof Sketch, Chinese Restaurant Process, infinite, Random partition theory:, Connections and Applications, exchangeable, mixing measure, de Finetti's Theorem (1931), hierarchical Bayesian models, exchangeability, Bayesian consistency:, Exchangeability
- References: bayesian-deep-learning, math/law-of-large-numbers, mcmc
- Backlinks: math/coupling-methods, math/random-graphs, math/stein-method

## Entity: extreme-value-theory
- Title: Extreme Value Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Extreme Value Theory, Generalized Extreme Value Distribution, [[stable-convergence]], exponentially decaying tails, centering and scaling sequences, block maximum, Weibull Domain (Type III), regularly varying, Domains of Attraction, Value-at-Risk and Expected Shortfall, how severe losses can be beyond the VaR level, Applications and Relevance, Finance, Connection to Regular Variation, generalized extreme value (GEV) distribution
- References: characteristic-functions, finance/coherent-risk-measures, math/concentration-inequalities, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/large-deviations-cramer, math/stable-convergence
- Backlinks: copulas, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/bipower-variation, finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/repo-market-systemic, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, frtb-es, generative-scenario-models, math/lundberg-cramer-ruin, order-statistics, stable-processes

## Entity: free-probability
- Title: Free Probability
- Category: Applied Probability
- Language: en
- Key Concepts: Free Probability, Weight Initialization, independence, The R-Transform, freely independent, R-transform, Wigner Semicircle Distribution, Free Independence, Applications in Deep Learning, Visualization: Free vs. Classical Convolution, Optimization, freeness, Related Topics, The Free Central Limit Theorem, Signal Propagation
- References: finance/shannon-entropy, math/information-theory, random-matrices

## Entity: math/geometric-ergodicity
- Title: Geometric Ergodicity
- Category: Applied Probability
- Language: en
- Key Concepts: geometrically ergodic, Central Limit Theorem (CLT), Construction of Lyapunov functions, Burn-in estimation, Diagnostics, Sample size planning, Heavy-tailed or jump processes, Meyn–Tweedie Theorem, drift condition, Geometric Ergodicity, Gibbs and Metropolis–Hastings, Sampler comparison, Convergence diagnostics, Connections to related concepts, polynomial ergodicity
- References: math/coupling-methods, math/discrete-markov-chains, math/large-deviations-cramer, math/markov-chain-mixing, math/stochastic-recursive-sequences
- Backlinks: math/ode-stability

## Entity: hmm
- Title: Hidden Markov Models (HMM)
- Category: Applied Probability
- Language: en
- Key Concepts: A. The Evaluation Problem (Forward-Backward), Expectation-Maximization (EM), Hidden Markov Models (HMM), Viterbi Algorithm, Baum-Welch Algorithm, Visualization: HMM State Transition, 2. The Three Fundamental Problems, In Finance, 3. Beyond Discrete States: Particle Filters, Hidden Markov Model (HMM), C. The Learning Problem (Baum-Welch), Observations ($X_t$), Forward Algorithm, Transition Matrix ($A$), hidden
- References: hmm-particle-filters, mle
- Backlinks: bayesian-networks, em-algorithm, multivariate-normal

## Entity: hydrodynamic-limits
- Title: Hydrodynamic Limits
- Category: Applied Probability
- Language: en
- Key Concepts: [[shannon-entropy|Entropy]] Method (Guo-Papanicolaou-Varadhan), [[shannon-entropy|Entropy]] Method and Large Deviations, Time Scaling, microscopic world, Hydrodynamic Limits, The Scaling Idea, Why It Matters, Statistical Mechanics, Large Deviations, Visualization: From Particles to Density, AI and Neural Mean Fields, Macroscopic Fluctuation Theory (MFT), Traffic and Crowd Flow, empirical density, diffusion coefficient
- References: finance/shannon-entropy, math/interacting-particle-systems, mean-field-games, partial-differential-equations

## Entity: likelihood-ratio-tests
- Title: Hypothesis Testing II: Likelihood Ratio Tests
- Category: Applied Probability
- Language: en
- Key Concepts: Power, Score Test (Lagrange Multiplier), Hypothesis Testing II: Likelihood Ratio Tests, 1. The Likelihood Ratio, 4. Relation to Other Tests, Neyman-Pearson Lemma, Related Topics, Most Powerful, 2. Wilks' Theorem, Wald Test, 3. Power of the Test
- References: fisher-information, mle-estimation, statistical-inference
- Backlinks: rank-tests

## Entity: math/information-theory
- Title: Information Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Information Theory, Channel Capacity Theorem:, 1. Shannon [[shannon-entropy|Entropy]] $H(X)$, Cross-[[shannon-entropy|Entropy]] Loss:, Fundamental Theorems, Data Processing Inequality:, Applications in AI, Information Bottleneck:, Core Concepts, Related Topics, Source Coding Theorem:, 3. Kullback-Leibler (KL) Divergence, ELBO (Variational Inference):, 2. Mutual Information $I(X;Y)$
- References: finance/shannon-entropy, fisher-information, variational-inference
- Backlinks: convex-optimization, course-math-for-ai, ergodic-theory-markov, free-probability, math/harmonic-analysis, maximum-entropy, online-learning-regret, probabilistic-combinatorics, random-matrices, universal-portfolios, wiener-chaos

## Entity: math/interacting-particle-systems
- Title: Interacting Particle Systems
- Category: Applied Probability
- Language: en
- Key Concepts: Phase transitions in high dimensions, McKean–Vlasov equation, Major Model Classes, Opinion Dynamics, relative [[shannon-entropy|entropy]] method, local interactions produce collective behavior, Overview, symmetric exclusion process (SEP), Traffic Flow, Configuration Space and State Representation, Voter Model, Exclusion Processes, Distributed Algorithms, Neural Mean Field, Comparison coupling
- References: convex-optimization, finance/shannon-entropy, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/markov-chain-mixing, math/percolation, stochastic-differential-equations
- Backlinks: hydrodynamic-limits, math/spdes

## Entity: law-iterated-logarithm
- Title: Law of Iterated Logarithm
- Category: Applied Probability
- Language: en
- Key Concepts: LIL, 3. Role in Stochastic Processes, LLN, CLT, 2. Interpretation, Related Topics, Law of Iterated Logarithm (LIL), 1. Formal Statement, [[brownian-motion|Brownian Motion]]
- References: brownian-motion, lln-clt, stochastic-processes
- Backlinks: math/borel-cantelli-zero-one, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers

## Entity: mcmc
- Title: MCMC (Markov Chain Monte Carlo)
- Category: Applied Probability
- Language: en
- Key Concepts: Acceptance Ratio, MCMC: Markov Chain Monte Carlo, 3. Crucial Concepts for Practitioners, B. Gibbs Sampling, C. Hamiltonian Monte Carlo (HMC), 2. Key Algorithms, Mixing, Sample, A. Metropolis-Hastings, Statistical Physics, 4. Why it Matters for AI and Finance, Derivative Pricing, Burn-in, Bayesian Hierarchical Models, Stan
- References: bayesian-inference, hamiltonian-mechanics, hmm-particle-filters, lsv-model
- Backlinks: alpha-factor-discovery, alternative-data-alpha, ar-models, arch-models, arima-models, arma-models, bayesian-black-litterman, bayesian-deep-learning, bayesian-inference, brownian-motion, causal-inference, convex-optimization-trading, cornish-fisher-cvar, de-finetti-exchangeability, fama-macbeth-regression, finance/fractional-fokker-planck, finance/monte-carlo-method, finance/particle-filter, finance/sha-256, finance/shor-algorithm, fraud-detection, hmm-particle-filters, kalman-filter, model-free-rl-factors, monte-carlo-integration, news-sentiment-trading, numeraire-invariant-hedging, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, regime-switching-factors, rl-trader, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis, variational-inference, volatility-forecasting

## Entity: mdp
- Title: Markov Decision Processes (MDP)
- Category: Applied Probability
- Language: en
- Key Concepts: Markov Property, Visualization: Value Discounting, $R(s, a, s')$, Bellman Optimality Equation, $\gamma \in [0, 1)$, Reinforcement Learning, Policies and Value Functions, $\mathcal{A}$, Markov Decision Processes (MDP), $\mathcal{S}$, Action-Value Function $Q^\pi(s, a)$, Solving MDPs, $P(s' \mid s, a)$, Policy, State-Value Function $V^\pi(s)$
- References: ergodic-theory-markov, reinforcement-learning, stochastic-control
- Backlinks: mcts, multi-armed-bandits

## Entity: markov-chebyshev
- Title: Markov and Chebyshev Inequalities
- Category: Applied Probability
- Language: en
- Key Concepts: C. Algorithmic Complexity (Randomized Algorithms), Intuition, The Power of the Bound, Weak Law of Large Numbers (WLLN), 2. Chebyshev's Inequality (The Second Moment Bound), 1. Markov's Inequality (The First Moment Bound), B. PAC Learning and AI Safety, A. Proving the Law of Large Numbers, Proof mechanism, Chebyshev's Inequality, Markov's Inequality, Markov and Chebyshev Inequalities: Bounding the Unknown, Probably Approximately Correct (PAC), Usage, Visualization: The Tail Bounds
- References: central-limit-theorem, frtb-es, measure-theory

## Entity: mgf
- Title: Moment Generating Functions (MGF)
- Category: Applied Probability
- Language: en
- Key Concepts: always exists, product, Moment Generating Functions (MGF), C. Uniqueness, [[central-limit-theorem|Central Limit Theorem]], Chernoff Bound, A. Generating Moments, Characteristic Function, B. Sums of Independent Variables, exact same distribution, 2. The Power of MGFs, 4. Application in Finance: Portfolio Tail Risk, Cramér's Bound, Moment Generating Function (MGF), 1. Definition
- References: central-limit-theorem, fourier-transform, math/large-deviations-cramer
- Backlinks: characteristic-functions

## Entity: mgf-characteristic-functions
- Title: Moment Generating Functions (MGFs) and Characteristic Functions
- Category: Applied Probability
- Language: en
- Key Concepts: always exists, Summation of Distributions, Properties, Moment Generation, 2. Characteristic Functions, Limit Theorems, Independent Sums, Linear Transformation, Uniqueness Theorem, Moment Generating Functions (MGFs) and Characteristic Functions, Symmetry, 1. Moment Generating Functions (MGF), Related Topics, Inversion Formula, 3. Applications
- References: clt, fourier-transform, probability-distributions

## Entity: monte-carlo-integration
- Title: Monte Carlo Integration
- Category: Applied Probability
- Language: en
- Key Concepts: Law of Large Numbers, importance weight, Rejection Sampling, Monte Carlo Integration and Importance Sampling, Central Limit Theorem, The Core Concept, high-dimensional spaces, Visualization: Convergence Rate, Related Topics, Importance Sampling
- References: math/law-of-large-numbers, mcmc, variational-inference
- Backlinks: bootstrap-jackknife, deep-ritz-method, mcts

## Entity: multivariate-normal
- Title: Multivariate Normal Distribution
- Category: Applied Probability
- Language: en
- Key Concepts: 12. Related topics, Fact., VAE / diffusion models., 3. Affine closure, 8. The multivariate CLT, 10. Applications, Bayesian linear regression, closed under affine transformations, under conditioning, and under independent products, exact confidence ellipsoids, Marginals., Theorem., Schur complement, 6. [[shannon-entropy|Entropy]], Kalman filter., Maximum-[[shannon-entropy|entropy]] principle:
- References: f-divergences, finance/shannon-entropy, fisher-information, gaussian-processes, hmm, pca
- Backlinks: course-math-for-ai, distributions-zoo, joint-distributions

## Entity: rank-tests
- Title: Non-parametric Statistics: Rank Tests
- Category: Applied Probability
- Language: en
- Key Concepts: Asymptotic Property, ranks, 1. Wilcoxon Signed-Rank Test, Statistic, 4. Advantages and Limitations, Non-parametric Statistics: Rank Tests, Procedure, Limitations, 2. Mann-Whitney U Test (Wilcoxon Rank-Sum), Related Topics, Advantages, Hypothesis, 3. Kruskal-Wallis Test
- References: bootstrap-jackknife, likelihood-ratio-tests, statistical-inference
- Backlinks: order-statistics

## Entity: order-statistics
- Title: Order Statistics
- Category: Applied Probability
- Language: en
- Key Concepts: Minimum $X_{(1)}$, Extreme Value Theory, Order Statistics, Distribution of Min and Max, Maximum $X_{(n)}$, Non-parametric Inference, 1. Definition, 3. Joint Distribution, 2. Distribution of the $i$-th Order Statistic, Related Topics, 4. Applications, Reliability
- References: extreme-value-theory, probability-distributions, rank-tests

## Entity: math/percolation
- Title: Percolation
- Category: Applied Probability
- Language: en
- Key Concepts: subcritical, critical, Schramm–Loewner Evolution with parameter $\kappa = 6$, Theorem (uniqueness, Harris–Seymour):, Scaling limits and SLE$_6$, BK inequality, not, Definition:, same critical exponents, Universality:, Connections to the Ising model and random cluster model, The RSW theorem and crossing probabilities, percolation probability, Summary and modern directions, RSW theorem
- References: math/branching-processes, math/concentration-inequalities, math/coupling-methods, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/random-graphs
- Backlinks: math/interacting-particle-systems, probabilistic-combinatorics

## Entity: map-estimation
- Title: Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference
- Category: Applied Probability
- Language: en
- Key Concepts: Likelihood, 2. MAP Derivation, 1. Bayesian Framework, Posterior, 3. Relation to MLE and Regularization, Credible Intervals, Gaussian Prior, [[spectral-graph-theory|Laplacian]] Prior, 4. Bayesian Credible Intervals, Prior, Related Topics, Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference
- References: bayes-theorem, linear-regression-ols, mle-estimation, spectral-graph-theory, statistical-inference
- Backlinks: mle-estimation

## Entity: mle-estimation
- Title: Point Estimation: Maximum Likelihood Estimation (MLE)
- Category: Applied Probability
- Language: en
- Key Concepts: Invariance, 3. Example: Gaussian Mean, Asymptotic Normality, Likelihood Function, 1. Formal Derivation, Point Estimation: Maximum Likelihood Estimation (MLE), 2. Properties of MLE, Related Topics, Consistency, Log-Likelihood, Efficiency
- References: cramer-rao-bound, fisher-information, map-estimation, statistical-inference
- Backlinks: cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, map-estimation, sufficient-statistics

## Entity: probabilistic-combinatorics
- Title: Probabilistic Combinatorics
- Category: Applied Probability
- Language: en
- Key Concepts: Randomized Algorithms, Connectivity, Giant Component, Threshold Phenomena in Random Graphs, Probabilistic Method, threshold, The Probabilistic Method, Paul Erdős, must exist, Probabilistic Combinatorics, Related Topics, Visualization: The Giant Component Transition, Ramsey Numbers and Bounds, The Lovász Local Lemma (LLL), Hashing
- References: math/information-theory, math/percolation, math/random-graphs

## Entity: distributions-zoo
- Title: Probability Distributions Zoo
- Category: Applied Probability
- Language: en
- Key Concepts: equi-dispersion, Sub-Gaussian, Limit., Binomial($n, p$), Normal $\mathcal{N}(\mu, \sigma^2)$, Negative binomial., Gamma($\alpha, \beta$), Geometric / Negative Binomial, Stable distributions, Exponential family., 4. Relationship graph, Shapes., Multivariate normal $\mathcal{N}_d(\boldsymbol\mu, \Sigma)$, Stable, Student's $t_\nu$
- References: bayesian-inference, central-limit-theorem, exponential-families, finance/shannon-entropy, math/concentration-inequalities, maximum-entropy, multivariate-normal, poisson-process
- Backlinks: course-math-for-ai, poisson-process

## Entity: estimator-properties
- Title: Properties of Estimators: Bias, Variance, and MSE
- Category: Applied Probability
- Language: en
- Key Concepts: Bias, 1. Definitions, Interpretation, 2. The Bias-Variance Tradeoff, Related Topics, Mean Squared Error (MSE), Properties of Estimators: Bias, Variance, and MSE, Variance, 3. Consistency, unbiased, consistent
- References: cramer-rao-bound, linear-regression-ols, mle-estimation, statistical-inference, sufficient-statistics
- Backlinks: bootstrap-jackknife, cramer-rao-bound, sufficient-statistics

## Entity: queuing-theory
- Title: Queuing Theory
- Category: Applied Probability
- Language: en
- Key Concepts: A / S / c / K, A (Arrival process), c (Number of servers), K (System capacity), S (Service time distribution), Network Congestion, Key Results (Little's Law), Kendall's Notation, Arrival Rate, Applications in AI/CS, Queuing Theory, Visualization: Queue Length vs. Utilization, The M/M/1 Queue, API Rate Limiting, Average time in system ($W$)
- References: inference-serving, math/markov-chain-mixing, poisson-process

## Entity: math/random-graphs
- Title: Random Graphs
- Category: Applied Probability
- Language: en
- Key Concepts: Degree Distribution and Chromatic Number, Critical window, Subcritical regime, Further reading, The Erdős–Rényi Models, Connectivity and Percolation Thresholds, threshold phenomenon, Threshold Methods: First and Second Moment, Stochastic Block Model and Community Detection, local limit, random $d$-regular graph, second moment method, Supercritical regime, Threshold Phenomena and the Phase Transition, Applications
- References: central-limit-theorem, de-finetti-exchangeability, math/branching-processes, math/concentration-inequalities, math/large-deviations-cramer, math/poisson-approximation
- Backlinks: math/high-dimensional-statistics, math/percolation, probabilistic-combinatorics

## Entity: random-matrices
- Title: Random Matrix Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Neural Network Spectra, Free Probability, Literature and Further Study, Marchenko-Pastur Law, Tracy-Widom distribution, Stieltjes transform, Current Research Directions, Gaussian Unitary Ensemble (GUE), Signal Detection and Information Theory, Applications in Statistics and Machine Learning, Ledoit-Wolf shrinkage, Gaussian Orthogonal Ensemble (GOE), Gaussian Orthogonal and Unitary Ensembles, GUE, GOE
- References: empirical-processes, math/concentration-inequalities, math/high-dimensional-statistics, math/information-theory, math/lp-spaces, math/minimax-estimation, math/spectral-theory-operators
- Backlinks: free-probability

## Entity: random-walks-groups
- Title: Random Walks on Groups
- Category: Applied Probability
- Language: en
- Key Concepts: Card Shuffling, Algebra, Mixing Time, Cryptography, Polya's Theorem, Formal Definition, Molecular Dynamics, Poisson Boundary, Key Questions and Concepts, 3. Boundary Theory and Poisson Boundary, Random Walks on Groups, Geometric Deep Learning, Geometry, Visualization: Return Probabilities, 1. Recurrence vs. Transience
- References: lie-groups, math/discrete-markov-chains, math/markov-chain-mixing, math/spectral-theory-operators

## Entity: math/renewal-theory
- Title: Renewal Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Direct Riemann integrability, Elementary renewal theorem, 5. Reliability theory., Proof sketch., renewal equation, delayed, modified, partial sums, Blackwell's theorem., renewal measure, Renewal Theory, Theorem., excess life, size-biased, Renewal reward theorem
- References: characteristic-functions, math/branching-processes, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/wiener-hopf-factorization
- Backlinks: math/branching-processes, math/markov-chain-mixing, math/point-processes, math/poisson-approximation, math/random-walks, math/subordinators, math/wiener-hopf-factorization, poisson-process

## Entity: bootstrap-jackknife
- Title: Resampling Methods: Bootstrap & Jackknife
- Category: Applied Probability
- Language: en
- Key Concepts: with replacement, 1. The Jackknife, 2. The Bootstrap, The Bootstrap Principle, Computations, Main Use, Procedure, Limitation, Method, Related Topics, Resampling Methods: Bootstrap & Jackknife, Variance Estimation, 3. Comparison
- References: estimator-properties, monte-carlo-integration, statistical-inference
- Backlinks: rank-tests

## Entity: sle
- Title: Schramm-Loewner Evolution (SLE)
- Category: Applied Probability
- Language: en
- Key Concepts: Conformal Invariance, 3. The Kappa Parameter ($\kappa$) and Universality Classes, Space-filling, $\kappa = 3$, $g_t(z)$, $4 < \kappa < 8$, 2. The Driving Equation, Driving Function, Ising Model, Schramm-Loewner Evolution (SLE), Conformally Invariant, [[gff|Gaussian Free Field (GFF)]], $\kappa \leq 4$, 4. Connection to 2D Quantum Gravity, Loewner Equation
- References: brownian-motion, conformal-field-theory, gff, statistical-mechanics
- Backlinks: gff

## Entity: math/stein-method
- Title: Stein's Method
- Category: Applied Probability
- Language: en
- Key Concepts: Total variation distance, exchangeable pairs, Statistical physics, Local Dependence and Dissociation, The Stein Operator and Stein Equation, Chen–Stein Method for Poisson Approximation, Exchangeable Pairs and Stein Discrepancy, Stein's Method, Combinatorics, References and Further Reading, Wasserstein distance, Applications and Extensions, Kolmogorov distance, Number theory, Stein equation
- References: central-limit-theorem, characteristic-functions, de-finetti-exchangeability, math/concentration-inequalities, math/local-limit-theorems, math/poisson-approximation

## Entity: sufficient-statistics
- Title: Sufficient Statistics & Factorization Theorem
- Category: Applied Probability
- Language: en
- Key Concepts: Minimal Sufficient Statistic, sufficient, 2. Fisher-Neyman Factorization Theorem, Completeness, Sufficient Statistics & Factorization Theorem, Related Topics, 1. Definition, Rao-Blackwellization, 3. Minimal Sufficiency and Completeness, 4. Rao-Blackwell Theorem
- References: cramer-rao-bound, estimator-properties, mle-estimation, statistical-inference
- Backlinks: estimator-properties, fisher-information

## Entity: time-series
- Title: Time Series Analysis
- Category: Applied Probability
- Language: en
- Key Concepts: Autocorrelation Function (ACF) and PACF, 1. AR (Auto-Regressive), Classical Models (Box-Jenkins), Visualization: Stationarity, Spectral Density, Volatility Modeling (ARCH / GARCH), Time Series Analysis, 3. ARIMA (Auto-Regressive Integrated Moving Average), Stationarity, Spectral Analysis, GARCH(1,1), temporal dependence, Weak Stationarity, ACF, differences
- References: math/markov-chain-mixing
- Backlinks: garch-models, language-models/mamba-ssm, math/stochastic-calculus/rough-path-signatures

## Entity: total-probability-variance
- Title: Total Probability and Total Variance
- Category: Applied Probability
- Language: en
- Key Concepts: Component 1 (Expected Conditional Variance), Intuition, 4. Application in Machine Learning, Bias-Variance Decomposition, Visualization: Variance Decomposition, In AI, 3. Law of Total Variance (Eve's Law), Variance Decomposition, Stochastic Processes, Example: Financial Alpha, Bias, Laws of Total Probability and Total Variance, 2. Law of Total Expectation (Adam's Law), Bayesian Hierarchical Models, Generative Models
- References: bayesian-inference, hmm-particle-filters

## Entity: wentzell-freidlin
- Title: Wentzell-Freidlin Theory
- Category: Applied Probability
- Language: en
- Key Concepts: Instantone, The Action Functional ($S$), Wentzell-Freidlin Theory (Large Deviations for SDEs), The Setting: Small Noise Limits, Key Phenomena, Quasi-potential, Neural Networks, Chemistry, Visualization: The Escape Path, 1. Metastability and Exit Times, Climate Science, Related Topics, Rate Function, 2. The Quasi-Potential, Exit Time
- References: math/large-deviations-cramer, statistical-mechanics, stochastic-differential-equations

## Entity: math/wiener-hopf-factorization
- Title: Wiener-Hopf Factorization
- Category: Applied Probability
- Language: en
- Key Concepts: Setup and ladder variables, Theorem (Wiener-Hopf factorization)., ascending ladder height, Theorem (Spitzer)., The Wiener-Hopf identity, 3. GI/G/1 queueing., Pollaczek-Khinchine formula, Baxter combinatorial lemma, Example: symmetric random walk, Related Articles, 5. Boundary crossing problems., Historical notes, Applications, 4. Barrier options in finance., ascending ladder epoch
- References: brownian-motion, characteristic-functions, finance/levy-processes, math/branching-processes, math/discrete-martingales, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory, math/weak-convergence-prokhorov
- Backlinks: math/branching-processes, math/random-walks, math/renewal-theory, math/subordinators

## Entity: f-divergences
- Title: f-Divergences
- Category: Applied Probability
- Language: en
- Key Concepts: f-divergences, 2. Famous Special Cases, Pearson $\chi^2$, Fisher Information Metric, f-Divergences: Measuring the Distance Between Distributions, Intuition, Monotonicity, Variational Inference, 4. Why Tier-1 ML Researchers care, Visualization: Mode Seeking vs. Mass Covering, Reverse KL, 3. Properties, Local Geometry, Hellinger Distance, Total Variation
- References: finance/gan, finance/shannon-entropy, information-geometry-finance, jensens-inequality, llm, manifold-learning, rlhf
- Backlinks: course-math-for-ai, fisher-information, multivariate-normal

## Entity: math/absolute-continuity-process-measures
- Title: Absolute Continuity of Process Measures
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Model comparison in finance., Absolute Continuity of Process Measures, absolute continuity and singularity, Novikov's Condition, Structure Theorem, The Setup, true martingale, Theorem., different, pathwise observable, Why Different Volatilities Imply Singularity, always, Related Articles, Novikov's condition., Signal detection.
- References: brownian-motion, finance/girsanov-semimartingales, geometric-brownian-motion, heston-model, innovation-process, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering
- Backlinks: math/cameron-martin-formula, math/differentiation-of-measures, math/signed-measures

## Entity: math/bayesian-asymptotics
- Title: Bayesian Asymptotics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: posterior contraction rates, Identifiability, Regularity Conditions, Posterior Contraction Rates, Bernstein–von Mises theorem, [[information-geometry]], [[exponential-families]], Metric [[shannon-entropy|entropy]], Credible sets ≈ confidence sets, [[local-asymptotic-normality]], Prior irrelevance, Boundary Issues, Gaussian Process Priors and Rate-Optimal Posteriors, Prior positivity, Bayesian Asymptotics
- References: cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/m-estimators, math/minimax-estimation
- Backlinks: math/semiparametric-efficiency

## Entity: bayesian-inference
- Title: Bayesian Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Metropolis-Hastings, Variational Autoencoders (VAEs), Prior $P(\theta)$, 3. Numerical Methods (When Math is Hard), Bayes' Theorem, B. Variational Inference (VI), 2. Conjugate Priors, Likelihood $P(D \mid \theta)$, A. MCMC (Markov Chain Monte Carlo), Frequentist (MLE), Evidence $P(D)$, 1. Bayes' Theorem, Bayesian, Posterior $P(\theta \mid D)$, Random Variables
- References: bayesian-black-litterman, bayesian-kelly, mcmc, measure-theory, mle, variational-autoencoders
- Backlinks: decision-theory, distributions-zoo, linear-regression, maximum-entropy, mcmc, mle, multi-armed-bandits, naive-bayes, total-probability-variance, variational-inference

## Entity: causal-inference
- Title: Causal Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Unconfoundedness and Matching, average treatment effect on the treated, Potential Outcomes Framework, Regression Discontinuity, local treatment effect, directed acyclic graph, Exogeneity, Regression discontinuity, propensity score, See Also, Applications: Causality in Large Language Models, Inverse Probability Weighting, instrument, LATE, randomized controlled trial
- References: fama-macbeth-regression, finance/efficient-market-hypothesis, math/kolmogorov-probability-axioms, math/local-asymptotic-normality, mcmc, rlhf
- Backlinks: bayesian-networks, causal-inference-trading, correlation-association, double-ml, financial-entropy, math/semiparametric-efficiency, math/survival-analysis, probability-paradoxes

## Entity: math/contiguity-measures
- Title: Contiguity and the Le Cam Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: tilted, entirely separated, Contiguity and the Le Cam Theory, Theorem (Le Cam's third lemma)., uniformly integrable, LAN, entire separation, Theorem (Le Cam's first lemma)., asymptotic minimax theorem, The Gaussian case., Le Cam's Third Lemma, Local Asymptotic Normality (LAN), predictable characteristics, Theorem., Characterization via Likelihood Ratios
- References: central-limit-theorem, characteristic-functions, finance/girsanov-semimartingales, finance/semimartingale-models, math/large-deviations-cramer, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/hellinger-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: correlation-association
- Title: Correlation and Association
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: ranks, 1. Pearson Product-Moment Correlation ($\rho$), 4. Distance Correlation (dCor), 3. Kendall's Tau ($\tau$), Use case, Correlation and Association Measures, discordant, Robustness, concordant, if and only if, monotonic function, controlling for, 5. Partial Correlation, Range, linear
- References: causal-inference, copulas

## Entity: math/cramer-rao-bound
- Title: Cramér–Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Multiparameter case: Fisher matrix and information inequality, Fisher information matrix, The Cramér–Rao inequality, positive semi-definite order, Regularity conditions (Cramér regularity), Related concepts, Connection to information geometry, score function, The bound is tight (equality) if and only if the score is a linear function of the statistic $T$:, asymptotically efficient, standardized squared error, multiparameter Cramér-Rao inequality, Cramér regularity conditions, Biased estimators and general linear forms, quantum Fisher information
- References: empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/conditional-expectation-sigma, math/local-asymptotic-normality, math/neyman-pearson

## Entity: math/density-processes
- Title: Density Processes and Likelihood Ratios
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Representation via Stochastic Exponential, Change-point detection., Fundamental properties:, Hellinger Process Connection, Sequential testing (SPRT)., Theorem., locally absolutely continuous, Density Processes and Likelihood Ratios, Singularity and Absolute Continuity Dichotomy, Parameter estimation for diffusions., Girsanov's Theorem as a Corollary, supermartingale, Related Articles, Log-likelihood process., density process
- References: finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/predictable-compensator
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/regular-conditional-probability, math/sequential-hypothesis-testing, math/signed-measures

## Entity: double-ml
- Title: Double Machine Learning
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: The DML Procedure (Nuisance Parameter Removal), Marketing, Double Machine Learning (Causal Inference), Medicine, The Core Problem: Confounding, true causal effect, Model the Treatment, Cross-fitting, Model the Outcome, Chernozhukov et al., AI Finance, Visualization: Removing the Bias, Applications, biased, Causal Estimation
- References: alpha-factor-research, causal-inference, mle

## Entity: empirical-processes
- Title: Empirical Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: generalization bounds, Bootstrap for Empirical Processes, Brownian bridge, VC-Classes and Vapnik–Chervonenkis Dimension, sets, shattered, Rademacher complexity, Covering number, VC-classes, complexity, sufficient condition, Donsker class, The fundamental result, symmetrization, Rademacher Complexity and Generalization
- References: brownian-bridge, central-limit-theorem, finance/shannon-entropy, math/local-asymptotic-normality, math/weak-convergence-prokhorov, pac-learning
- Backlinks: math/bayesian-asymptotics, math/concentration-inequalities, math/cramer-rao-bound, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/survival-analysis, math/u-statistics, random-matrices

## Entity: expectation-maximization
- Title: Expectation-Maximization (EM)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: The Two Steps, Expectation-Maximization (EM) Algorithm, Visualization: Clustering Progress, Natural Language Processing, MAP, Maximum Likelihood (MLE), 2. M-Step (Maximization), Convergence Properties, latent variables, Gaussian Mixture Models, Applications, The Problem: Latent Variables, Related Topics, local maximum, 1. E-Step (Expectation)
- References: mle, variational-inference
- Backlinks: gmm, jensen-inequality

## Entity: fisher-information
- Title: Fisher Information and the Cramér-Rao Bound
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Regularity, TRPO, additive, 6. Asymptotic efficiency of the MLE, 2. Zero-mean score identity, observed Fisher information, Corollary., 7. Natural-[[convex-optimization|gradient descent]], 4. The Cramér-Rao bound, not reparameterisation-invariant, score, Theorem., asymptotically efficient, regular, 10. Observed vs. expected information
- References: convex-optimization, cramer-rao-bound, exponential-families, f-divergences, manifold-learning, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, mle, sufficient-statistics
- Backlinks: course-math-for-ai, cramer-rao-bound, likelihood-ratio-tests, math/analysis-geometry/information-geometry, math/information-theory, maximum-entropy, mle-estimation, multivariate-normal

## Entity: math/hellinger-processes
- Title: Hellinger Integrals and Hellinger Processes
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: accumulates over time, Hellinger Integrals and Hellinger Processes, filtration, Mathematical finance., Theorem (Kakutani dichotomy for filtrations)., filtration analogue, Hellinger distance, Statistical testing., Hellinger process, Criteria for Absolute Continuity and Singularity, Related Articles, For diffusions., Connection to Likelihood Ratios, Le Cam theory., Hellinger affinity
- References: finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/contiguity-measures, math/doleans-dade-exponential, math/sigma-algebra-measurability, math/weak-convergence-prokhorov
- Backlinks: math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-semimartingales, math/density-processes, math/local-asymptotic-normality, math/sequential-hypothesis-testing, math/signed-measures

## Entity: math/high-dimensional-statistics
- Title: High-Dimensional Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Nuclear norm minimization, LASSO, compressed sensing, Multiple Testing Control: Knockoffs, Restricted Isometry Property and Compressed Sensing, optimization error, Restricted Eigenvalue Condition (REC), Theorem (Bickel–Ritov–Tsybakov, 2009)., False Discovery Rate (FDR), LASSO and the Restricted Eigenvalue Condition, Gaussian width, Connection to Convex Optimization, Restricted Isometry Property (RIP), The Gaussian Sequence Model, Failure of Classical Methods and Regularization
- References: convex-analysis, cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/lp-spaces, math/minimax-estimation, math/random-graphs
- Backlinks: math/multiple-testing, math/nonparametric-regression, random-matrices

## Entity: hypothesis-testing
- Title: Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Power ($1-\beta$), Reject $H_0$, Test Statistic, Common Tests, not, Multiple Testing Problem, Hypothesis Testing Foundations, The P-Value Misinterpretation, p-value, Type II Error, 2. Pearson's Chi-Square Test ($\chi^2$), Type I and Type II Errors, A/B Testing, Rule, 3. Kolmogorov-Smirnov Test
- References: bootstrap, central-limit-theorem, math/neyman-pearson
- Backlinks: probability-paradoxes, sampling-distributions

## Entity: math/kernel-density-estimation
- Title: Kernel Density Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Epanechnikov, Mean Squared Error, kernel function, Bandwidth Selection, Overview, Plug-in and Diffusion Methods, Silverman's rule-of-thumb, pointwise bias, bandwidth, bandwidth matrix, Adaptive Bandwidth, Nadaraya–Watson estimator, Minimax Theory and Sobolev Classes, Multivariate Kernel Density Estimation, minimax optimal
- References: cramer-rao-bound, empirical-processes, math/concentration-inequalities, math/glivenko-cantelli, math/local-asymptotic-normality, math/u-statistics
- Backlinks: math/minimax-estimation, math/nonparametric-regression

## Entity: kde
- Title: Kernel Density Estimation (KDE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: $K$ (The Kernel), Large $h$ (Over-smoothing), Volatility Surface Smoothing, Continuity and Differentiability, Visualization: The Smoothing Effect, $h$ (The Bandwidth), 2. The Bias-Variance Tradeoff and Bandwidth ($h$), Optimal Bandwidth Selection, Cross-Validation, Low Bias but High Variance, Silverman's Rule of Thumb, Anomaly Detection (Fraud), Faster Convergence, 1. The Core Estimator, No Bin Origin Bias
- References: kernel-methods-rkhs, math/nonparametric-regression, mle

## Entity: math/local-asymptotic-normality
- Title: Local Asymptotic Normality (LAN)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: LAMN and LAQ Extensions, Gaussian shift approximation, random, Minimax optimality., Asymptotic Efficiency, The LAN Condition, Hajek-Le Cam convolution theorem, LAMN (Locally Asymptotically Mixed Normal)., locally asymptotically normal, Local Asymptotic Normality (LAN), Theorem., Optimal Tests, asymptotically efficient, Girsanov, regular
- References: central-limit-theorem, finance/girsanov-semimartingales, math/contiguity-measures, math/convergence-semimartingales, math/functional-limit-theorems, math/hellinger-processes, math/law-of-large-numbers, math/stable-convergence
- Backlinks: causal-inference, empirical-processes, fisher-information, math/absolute-continuity-process-measures, math/bayesian-asymptotics, math/cameron-martin-formula, math/cramer-rao-bound, math/density-processes, math/kernel-density-estimation, math/m-estimators, math/minimax-estimation, math/neyman-pearson, math/semiparametric-efficiency, math/sequential-hypothesis-testing, math/survival-analysis

## Entity: math/m-estimators
- Title: M-Estimators and Z-Estimators
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: M-Estimators and Z-Estimators, Non-singularity, Donsker condition, Huber's robust regression, Identifiability, Theorem (Asymptotic Normality of M-estimators):, Theorem (Consistency via Uniform Law of Large Numbers):, not, VC-subgraph condition, objective function, Z-estimator, Sandwich variance estimation, Asymptotic normality of Z-estimators, criterion function, Huber sandwich estimator
- References: bootstrap, cramer-rao-bound, empirical-processes, exponential-families, finance/shannon-entropy, math/concentration-inequalities, math/local-asymptotic-normality, math/neyman-pearson
- Backlinks: causal-inference-do-calculus, convex-optimization, math/bayesian-asymptotics, math/semiparametric-efficiency, math/survival-analysis

## Entity: mle
- Title: Maximum Likelihood Estimation (MLE)
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 2. Asymptotic Properties, 4. Connection to Information Theory, Cross-[[shannon-entropy|Entropy]] Loss, Asymptotic Normality, Likelihood Function, 3. Fisher Information ($I(\theta)$), Kullback-Leibler (KL) Divergence, 1. The Likelihood Function, Fisher Information, Related Topics, Consistency, Maximum Likelihood Estimation (MLE), Log-Likelihood, Cramér-Rao Lower Bound, Efficiency
- References: bayesian-inference, cramer-rao-bound, finance/shannon-entropy, information-geometry-finance, manifold-learning
- Backlinks: bayesian-inference, change-of-variables, clt, double-ml, expectation-maximization, fisher-information, garch-models, hmm, kde, linear-regression, logistic-regression, maximum-entropy, slutsky-theorem, umvue-completeness

## Entity: math/minimax-estimation
- Title: Minimax Estimation
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Computational Considerations, Lower Bounds: Le Cam's Two-Point Method, Minimax Rates over Nonparametric Classes, Gordon's inequality, Connection to Other Frameworks, Le Cam Distance and Normal Approximation, Fano's Inequality, Local polynomials, Hellinger distance, Open Problems and Future Directions, oracle inequality, Fano's inequality, minimax optimal estimator, Assouad's lemma, Oracle Inequalities
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/concentration-inequalities, math/kernel-density-estimation, math/local-asymptotic-normality
- Backlinks: math/bayesian-asymptotics, math/high-dimensional-statistics, math/nonparametric-regression, random-matrices

## Entity: math/multiple-testing
- Title: Multiple Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: The Multiple Testing Problem, Family-Wise Error Rate (FWER), FWER, Benjamini–Hochberg Procedure, Holm (1979), uniformly valid, Adaptive and Modified FDR, Storey, Efron's local FDR, per-hypothesis error rates, Benjamini & Hochberg (2000), Bonferroni, Key property, False Discovery Rate (FDR), Connections to Empirical Bayes
- References: bootstrap, empirical-processes, exponential-families, math/concentration-inequalities, math/high-dimensional-statistics, math/neyman-pearson, math/sequential-hypothesis-testing

## Entity: math/neyman-pearson
- Title: Neyman–Pearson Theory
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Composite Hypotheses: Uniformly Most Powerful Tests, Neyman–Pearson Lemma, Simple vs. Composite Hypotheses, Relation to [[Information-Geometry]], hypothesis, Karlin–Rubin Theorem, Monotone Likelihood Ratio Property, likelihood ratio test, Neyman–Pearson Theory, p-value, Composite nulls, Connections to [[Sequential-Hypothesis-Testing]] and [[Cramer-Rao-Bound]], Type I error (size), Type II error (power), Pitman efficiency
- References: cramer-rao-bound, empirical-processes, exponential-families, math/analysis-geometry/information-geometry, math/local-asymptotic-normality, math/sequential-hypothesis-testing
- Backlinks: hypothesis-testing, math/cramer-rao-bound, math/m-estimators, math/multiple-testing, math/survival-analysis

## Entity: math/nonparametric-regression
- Title: Nonparametric Regression
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Nonparametric Regression, Conclusion, Reproducing Kernel Hilbert Space (RKHS), Generalized cross-validation (GCV), smoothing spline, Local polynomial regression, Splines, Local Polynomial Regression, Bias reduction, smoothing splines are equivalent to GP regression, References & Wikilinks, Oracle Inequalities and Adaptive Rates, Leave-one-out cross-validation, Gaussian Process Regression, Nadaraya–Watson Kernel Estimator
- References: bootstrap, functional-analysis, math/gaussian-process-sample-paths, math/high-dimensional-statistics, math/kernel-density-estimation, math/minimax-estimation, sobolev-spaces
- Backlinks: kde

## Entity: bootstrap
- Title: Resampling: Bootstrap and Jackknife
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Complexity, Resampling: Bootstrap and Jackknife, Sampling, When to Use Which?, Main Use, Leave-one-out, Bradley Efron, Visualization: Resampling Distribution, sampling with replacement, 2. The Jackknife, Related Topics, bias correction, Robustness, The Procedure, Why it works: The "Plug-in" Principle
- References: central-limit-theorem, finance/monte-carlo-method
- Backlinks: hypothesis-testing, math/m-estimators, math/multiple-testing, math/nonparametric-regression

## Entity: sampling-distributions
- Title: Sampling Distributions
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 2. Student's t-Distribution, Property, Use case, Comparison to Normal, Intuition, Sampling Distributions: t, χ², and F, fatter tails, Fisher's F, sample size is small, Visualization: t vs Normal, Student's t, sum of squares, ratio of two independent chi-square variables, Chi-Square ($\chi^2$), unknown
- References: anova, central-limit-theorem, hypothesis-testing

## Entity: math/semiparametric-efficiency
- Title: Semiparametric Efficiency
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: partially linear model, Connections to Causal Inference, One-step estimator., efficient estimating equations, profile likelihood, Examples, IV model, likelihood-based, pathwise differentiable, One-Step Estimators and Efficient Estimating Equations, Tangent space $\mathcal{T}_{\theta_0, \eta_0}$., orthogonalized, Robinson estimator, subspace of nuisance-orthogonal directions, Pathwise Differentiability and the Tangent Set
- References: causal-inference, cramer-rao-bound, empirical-processes, exponential-families, math/bayesian-asymptotics, math/local-asymptotic-normality, math/m-estimators
- Backlinks: math/survival-analysis

## Entity: math/sequential-hypothesis-testing
- Title: Sequential Hypothesis Testing
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Sequential Probability Ratio Test (SPRT), both, The Sequential Testing Problem, Regime detection in finance., Shiryaev-Roberts procedure., Optimality: The Wald-Wolfowitz Theorem, CUSUM procedure., Theorem (Wald-Wolfowitz)., Sequential Hypothesis Testing, Sequential Probability Ratio Test, The Likelihood Ratio Process, Quality control., quickest detection problem, Related Articles, sequential test
- References: brownian-motion, geometric-brownian-motion, hidden-markov-models, kalman-filter, math/cameron-martin-formula, math/contiguity-measures, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality
- Backlinks: math/absolute-continuity-process-measures, math/multiple-testing, math/neyman-pearson

## Entity: slutsky-theorem
- Title: Slutsky's Theorem
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: constant, distribution, 1. The Theorem, Z-test, Asymptotic Normality, By Slutsky's Theorem, Slutsky's Theorem: The Algebra of Limits, 2. Why the Difference in Convergence Matters?, 3. Application: The t-statistic and Wald Tests, 4. Continuous Mapping Theorem (CMT), Division, Related Topics, Multiplication, Addition, probability
- References: central-limit-theorem, delta-method, math/law-of-large-numbers, mle

## Entity: math/survival-analysis
- Title: Survival Analysis
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Breslow estimator, continuous component, Survival function and hazard rate, Partial likelihood, Related topics, Counting process and martingale formulation, martingales, Kaplan–Meier estimator, hazard rate, Connection to local asymptotic normality and nonparametric theory, Breslow estimator for baseline hazard, log-rank test, Semiparametric efficiency and influence functions, Asymptotic normality of $\hat{\beta}$:, martingale central limit theorems
- References: causal-inference, empirical-processes, math/local-asymptotic-normality, math/m-estimators, math/neyman-pearson, math/point-processes, math/semiparametric-efficiency

## Entity: math/u-statistics
- Title: U-Statistics
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: degenerate case, Gini Coefficient:, quadratic forms, Key Theorems Summary, V-statistic, Definition and Core Concepts, Hoeffding's Decomposition, Asymptotic Normality, jackknife variance estimation, References, Classical Examples, Wilcoxon Statistic:, Kendall's Tau:, Unbiasedness:, Jackknife Consistency:
- References: central-limit-theorem, characteristic-functions, cramer-rao-bound, empirical-processes, exponential-families, martingale-clt
- Backlinks: math/kernel-density-estimation

## Entity: umvue-completeness
- Title: UMVUE and Completeness
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: 4. Lehmann-Scheffé Theorem: Finding the UMVUE, Uniformly Minimum Variance Unbiased Estimator (UMVUE), UMVUE and Completeness: The Theory of Optimal Estimation, 2. Rao-Blackwell Theorem: Improving Estimators, Sufficient Statistics, unique UMVUE, 5. Why Tier-1 Quants care, Sufficient, 3. Completeness and Uniqueness, Factorization Theorem, Steps to find the UMVUE, Completeness, Complete Sufficient Statistic, Related Topics, less than or equal to
- References: cramer-rao-bound, delta-method, mle

## Entity: variational-inference
- Title: Variational Inference
- Category: Asymptotic Statistics
- Language: en
- Key Concepts: Approach, Scalability, Posteriors, Application in AI: Variational Autoencoders (VAE), The ELBO (Evidence Lower Bound), Kullback-Leibler (KL) Divergence, VI vs. MCMC, Optimization, ELBO, Speed, The Intractability Problem, Visualization: Approximating a Distribution, Variational Inference (VI), Accuracy, Related Topics
- References: bayesian-inference, convex-optimization, mcmc, variational-autoencoders
- Backlinks: bayes-theorem, bayesian-kelly, calculus-of-variations, expectation-maximization, math/information-theory, math/variational-calculus, monte-carlo-integration

## Entity: nonequilibrium-statmech
- Title: Nonequilibrium Statistical Mechanics
- Category: Classical Physics
- Language: en
- Key Concepts: 1. Beyond the Second Law, Equilibrium Free Energy, Nonequilibrium, Landauer’s Limit, Fokker-Planck, Computational Drug Discovery, erase information, Violent, Nonequilibrium, Langevin, 3. The Jarzynski Equality: Equilibrium from Chaos, Visualization: The Thermodynamic Limit, Arrow of Time, 2. The Arrow of Time: Crooks Theorem (1999), 4. Landauer’s Principle and the Demon, 5. Application in Machine Learning: Diffusion Models
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
- Key Concepts: Overview, Performance, Chaining, Open Addressing

## Entity: account-abstraction
- Title: Account Abstraction (ERC-4337)
- Category: DeFi
- Language: en
- Key Concepts: 2. Advanced Paymaster Mechanics, EntryPoint, 4. Engineering Trade-offs, UserOperation, Account Abstraction (ERC-4337): The Modular Wallet Standard, ERC-20 Gas Payment, Paymaster, Validation Loop, Gasless Onboarding, Step-by-Step Execution:, 3. Session Keys and Security Policies, Visualization: The ERC-4337 Flow, Native Multi-sig, Signature Aggregation, Bundler
- References: cedefi-gateway-architecture, zk-kyc
- Backlinks: course-cedefi

## Entity: amm-mechanics
- Title: Automated Market Makers (AMM)
- Category: DeFi
- Language: en
- Key Concepts: Complexity, Constant Product Market Maker (CPMM), The Constant Product Formula (Uniswap V2), Automated Market Makers (AMM), Visualization: The Bonding Curve, Concentrated Liquidity, Impermanent Loss (IL), Related Topics, Liquidity Pool, Price Oracles, Concentrated Liquidity (Uniswap V3), Oracle Manipulation Attacks, Impermanent Loss, AMM as an Oracle, Efficiency
- References: optimal-execution, smart-order-routing
- Backlinks: asset-tokenization, cedefi-mechanics, course-cedefi, liquid-staking-restaking, mev, stablecoin-mechanisms

## Entity: bridge-security
- Title: Bridge Security and Settlement Finality
- Category: DeFi
- Language: en
- Key Concepts: Visualization: The Reorg Risk, Mints, Bridges, Probabilistic Finality, Rate Limiting, Hash Time-Lock Contracts (HTLC), Instant Finality, CeDeFi, 1. The Core Risk: The Bridge as a Vault, Bridge Security and Settlement Finality, Pros, Locks, 3. The Finality Problem, A. Trusted (Centralized) Bridges, 2. Types of Bridge Security
- References: asset-tokenization, cedefi-gateway-architecture, stablecoin-mechanisms
- Backlinks: cedefi-gateway-architecture, cross-chain-interop

## Entity: cedefi-gateway-architecture
- Title: CeDeFi Gateway Architecture
- Category: DeFi
- Language: en
- Key Concepts: Event Logs, 3. Custody Architecture: MPC vs. Multi-sig, B. Dynamic Gas Strategies, Visualization: The "Double-Check" Architecture, Drift Detection, Blacklist, 4. Operational Resilience: Circuit Breakers, Reconciliation Engine, Implementation Tip: Idempotency, Nonce Queue, CeDeFi Gateway Architecture: High-Performance Institutional Bridging, Global Pause, 1. The Transaction Management Layer (Relayer), CeDeFi Gateway, 2. The Indexer and Reconciliation (Data Integrity)
- References: bridge-security, cedefi-mechanics, zk-kyc
- Backlinks: account-abstraction, bridge-security, contract-upgradeability, course-cedefi, cross-chain-interop, number-theory-basics, oracle-design, privacy-defi, zk-kyc

## Entity: cedefi-mechanics
- Title: CeDeFi: Centralized Decentralized Finance
- Category: DeFi
- Language: en
- Key Concepts: CeFi Constraint, CeDeFi: The Convergence of Institutional and Decentralized Finance, Bridges, Oracle Vulnerability, Coinbase's Base, KYC, Permissioned Environments, CeDeFi, Bridge Risk, Control, Centralization Risk, 4. Risks and Trade-offs, B. Enterprise Blockchains and Layer 2s, Low Latency, A. Permissioned Liquidity Pools
- References: amm-mechanics, smart-order-routing
- Backlinks: asset-tokenization, cedefi-gateway-architecture, course-cedefi, number-theory-basics, onchain-credit, stablecoin-mechanisms

## Entity: cross-chain-interop
- Title: Cross-chain Interoperability Protocols
- Category: DeFi
- Language: en
- Key Concepts: Relayer, Chainlink CCIP, Messaging, Omnichain Lending, 3. Use Cases for CeDeFi, Cross-chain Governance, Cross-chain Interoperability Protocols, Solution, Benefit, Cross-chain Interoperability Protocols: Beyond Bridges, A. LayerZero: Ultra Light Nodes, Oracle, Visualization: Omnichain Logic Flow, Risk Management Network, B. Chainlink CCIP: Risk Management Network
- References: asset-tokenization, bridge-security, cedefi-gateway-architecture, smart-order-routing
- Backlinks: course-cedefi

## Entity: lending-mechanics
- Title: Lending and Money Market Mechanics
- Category: DeFi
- Language: en
- Key Concepts: Liquidation, Compound, Kinked Interest Rate Curve, After the Kink ($U > U_{optimal}$), 1. The Liquidity Pool Model, LTV (Loan-to-Value), Liquidation Bonus, 2. Interest Rate Models (The Utilization Curve), Peer-to-Pool, Borrowers, Health Factor ($H_f$), Visualization: The Kinked Rate Curve, Aave, Utilization Rate, Lending and Money Market Mechanics: The Aave Model
- References: onchain-credit, stablecoin-mechanisms
- Backlinks: course-cedefi, metric-spaces, oracle-design, yield-aggregators

## Entity: liquid-staking-restaking
- Title: Liquid Staking and Restaking
- Category: DeFi
- Language: en
- Key Concepts: Liquid Staking, The Systemic Risk, 4. Institutional Implications: The "Internet Bond", multiple services, Restaking, 1. Liquid Staking Tokens (LSTs), Lido, Treasury Bills, B. Slashing Risks, EigenLayer, Renzo, complex correlation of risk, Liquid Staking and Restaking: The Yield Layer, ether.fi, Deposit
- References: amm-mechanics, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: mev
- Title: Maximal Extractable Value (MEV)
- Category: DeFi
- Language: en
- Key Concepts: Buy, C. Arbitrage, Information Leakage, PBS, High-Frequency Trading (HFT) and Front-Running, Proposers (Validators), A. Front-running, 1. The "Dark Forest" Mechanism, 3. MEV as an Institutional Risk, Visualization: The Sandwich Attack, Toxic, Solution, 4. Toxic vs. Non-Toxic MEV, Non-Toxic, Buys
- References: amm-mechanics, latency-arbitrage, smart-order-routing
- Backlinks: contract-upgradeability, course-cedefi, oracle-design, privacy-defi

## Entity: onchain-credit
- Title: On-chain Credit Markets
- Category: DeFi
- Language: en
- Key Concepts: Asset-Backed (RWA), Visualization: The Credit Pipeline, Pool Delegates, Goldfinch, Junior Tranche (Equity), 4. Why it Matters for High-Finance, Senior Tranche (Junior First Loss), Transparency, 1. Undercollateralized vs. Asset-Backed Lending, Composability, Centrifuge, 3. The Role of Underwriters (Delegates), Efficiency, 2. The Tranche Structure (Waterfall Model), Tranche
- References: asset-tokenization, cedefi-mechanics
- Backlinks: course-cedefi, lending-mechanics, zk-kyc

## Entity: onchain-perps
- Title: On-chain Perpetuals and vAMM Mechanics
- Category: DeFi
- Language: en
- Key Concepts: 2. vAMM (Virtual Automated Market Maker), Funding Rate, If Perp Price < Spot Price, GLP, 3. LP-as-Counterparty Model (GMX Model), If Perp Price > Spot Price, GMX, On-chain Perpetuals and vAMM Mechanics, Oracle Lag, Visualization: vAMM vs. Oracle Model, 4. Order-book Based DEXs (dYdX Model), Settlement, Liquidation Cascades, Perpetual Protocol, Bad Debt
- References: oracle-design, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: oracle-design
- Title: Oracle Design and Resilience
- Category: DeFi
- Language: en
- Key Concepts: OEV, Scenario, Secondary Source, TWAP (Time-Weighted Average Price), 3. Oracle Extractable Value (OEV), CeDeFi, 4. Resilience Patterns for CeDeFi, Heartbeat, Medianizer, The Fix, Oracle Design and Resilience: Engineering Financial Truth, Cost Analysis, 5. Defense against Flash Loan Attacks, Logic, Spot Price
- References: cedefi-gateway-architecture, lending-mechanics, mev
- Backlinks: course-cedefi, onchain-perps

## Entity: privacy-defi
- Title: Privacy-Preserving DeFi (Shielded Pools)
- Category: DeFi
- Language: en
- Key Concepts: 3. Dark Pools (The Institutional Dream), Copy-trading bots, Anonymity, Dark Pool, Solvency Risk, 5. Value for Your Project, Institutional Confidentiality, Shielding, 4. Risks and Regulatory Pressure, 1. How Shielded Pools Work, Privacy DeFi, ZK-SNARKs, View Keys, Zero Information Leakage, Public Ledger Paradox
- References: cedefi-gateway-architecture, mev, zk-kyc
- Backlinks: course-cedefi

## Entity: asset-tokenization
- Title: Real World Asset (RWA) Tokenization
- Category: DeFi
- Language: en
- Key Concepts: B. Fractional Ownership, Asset Tokenization, Compliance Rules, BUIDL, Legal Enforceability, FOBXX, Special Purpose Vehicle (SPV), A. The Legal Wrapper (SPV), Real World Asset (RWA) Tokenization, A. Atomic Settlement, B. Standards (ERC-3643 and ERC-1400), Tokenized Treasuries, Real World Assets (RWA), Private Credit, 1. The Architecture of Tokenization
- References: amm-mechanics, cedefi-mechanics, smart-order-routing
- Backlinks: bridge-security, course-cedefi, cross-chain-interop, onchain-credit, stablecoin-mechanisms, zk-kyc

## Entity: contract-upgradeability
- Title: Smart Contract Upgradeability
- Category: DeFi
- Language: en
- Key Concepts: Timelock, Drawback, 3. The Initialization Paradox, Multi-sig, CeDeFi, V1 Layout, Visualization: UUPS Architecture, Gas, The Fix, Storage Gaps, Upgradeability Patterns, Logic, 4. Storage Collisions: The Technical Nightmare, Implementation, Broken V2 Layout
- References: cedefi-gateway-architecture, mev
- Backlinks: course-cedefi

## Entity: stablecoin-mechanisms
- Title: Stablecoin Mechanisms
- Category: DeFi
- Language: en
- Key Concepts: Seigniorage (Terra/UST), 2. Crypto-Collateralized (On-chain Overcollateralization), 1. Fiat-Collateralized (Off-chain), 4. The Stability Trilemma, Stablecoin Mechanisms: The Infrastructure of Value, Liquidated, PSM (Peg Stability Module), Short Perpetual position, Visualization: Collateral vs. Stability, Stability, Decentralization, Risk, Capital Efficiency, The Death Spiral, Mechanism
- References: amm-mechanics, asset-tokenization, cedefi-mechanics
- Backlinks: bridge-security, combinatorics-induction, course-cedefi, lending-mechanics, liquid-staking-restaking, onchain-perps, yield-aggregators

## Entity: yield-aggregators
- Title: Yield Aggregators and Strategy Automation
- Category: DeFi
- Language: en
- Key Concepts: 4. Institutional Customization, Protocol Risk, Low-Volatility Farming, 2. Auto-Compounding Mechanics, 3. Risk Assessment: The Strategy Stack, Beefy, Curated Strategies, Visualization: The Harvest Loop, The Controller, Auto-Compounding, Yearn Finance, Strategy, Governance Boosting, 1. The Vault Architecture, The Vault
- References: lending-mechanics, smart-order-routing, stablecoin-mechanisms
- Backlinks: course-cedefi

## Entity: zk-kyc
- Title: ZK-KYC: Privacy-Preserving Compliance
- Category: DeFi
- Language: en
- Key Concepts: Legal Compliance, 1. The Core Mechanism: Proof of Identity, Zero-Knowledge Proof, Soulbound Tokens, CeDeFi, ZK-Proof Generation, 2. Selective Disclosure, Issuer, Proof of Residency, Proof of Funds, Institutional Access, Transparency, Proof of Accreditation, 4. Strategic Value for Your Project, Proof
- References: asset-tokenization, cedefi-gateway-architecture, onchain-credit
- Backlinks: account-abstraction, cedefi-gateway-architecture, course-cedefi, privacy-defi

## Entity: course-cedefi
- Title: CeDeFi Engineering: Institutional Web3
- Category: DeFi & Engineering
- Language: en
- Key Concepts: Compliance-yield gateway., fully private, Week 7 — Cross-chain and bridges, CeDeFi Engineering — institutional Web3 in 8 weeks, Week 2 — AMM and liquidity microstructure, Week 8 — Institutional stack, Kata:, Goal:, Week 6 — ZK and private KYC, Week 3 — Lending and risk, Week 5 — Smart-contract security, Prerequisites, Week 1 — EVM and stack architecture, Recommended reading, Course map
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
- Key Concepts: LIBOR Transition (The "End of LIBOR"), SOFR, CSA and Collateral Discounting, Credit Support Annex (CSA), Multi-Curve Framework (Post-2008 Modern Yield Curves), Forward (Projection) Curves, Credit Risk, Discounting Curve, Risk-Free Rates (RFRs), Visualization: The Basis Spread, Modern Multi-Curve Framework, OIS (Overnight) curve, The Paradigm Shift, Why Do Curves Diverge?, Related Topics
- References: finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/xva

## Entity: option-greeks-and-volatility
- Title: Option Greeks, Volatility & Hedging
- Category: Derivatives
- Language: en
- Key Concepts: See Also, Theta ($\Theta$):, 1. Put-Call Parity, 3. Delta Hedging, Vega ($\nu$):, Delta ($\Delta$):, Option Greeks, Volatility & Hedging, Gamma ($\Gamma$):, 2. Option Greeks
- References: course-quant-trading, optimal-stopping-and-kelly, quant-market-making-mechanics
- Backlinks: credit-risk-modeling-and-structural-models, exotic-options-and-structured-products, fixed-income-quant-rates-and-yield-curve, interest-rate-derivatives-swaps-caps-floors, monte-carlo-option-pricing-and-variance-reduction, quant-market-making-mechanics, stochastic-calculus-and-ito-lemma, volatility-surface-sabr-model, volatility-trading-and-variance-swaps

## Entity: volatility-arbitrage
- Title: Volatility Arbitrage and Variance Swaps
- Category: Derivatives
- Language: en
- Key Concepts: 3. The VIX Index, 4. Trading Strategies, VIX Index, variance strike, Log-Contract Replication, 2. Dispersion Trading, Volatility Arbitrage and Variance Swaps, 1. Volatility Carry, forecasted future volatility, Visualization: The VIX vs. Realized Vol, model-independent, Variance Risk Premium, Related Topics, implied volatility, 2. Variance Swaps
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
- Key Concepts: physical hypothesis, Stationarity and ergodicity, ergodic theory, Ergodicity and mixing, ergodic, Mixing, maximal ergodic theorem, Theorem., Examples of ergodic systems, measure-preserving, "ergodic accessibility", 3. Circle rotation., Birkhoff-Khintchine Ergodic Theorem, Measure-preserving transformation., time averages
- References: arch-models, brownian-motion, central-limit-theorem, finance/shannon-entropy, garch-models, law-iterated-logarithm, math/discrete-markov-chains, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/stochastic-recursive-sequences
- Backlinks: math/borel-cantelli-zero-one, math/branching-processes, math/coupling-methods, math/discrete-markov-chains, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/law-of-large-numbers, math/markov-chain-mixing, math/martingale-clt, math/percolation, math/renewal-theory, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, statistical-mechanics

## Entity: math/discrete-markov-chains
- Title: Discrete Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: positive recurrent, Definition, Stationary distribution, homogeneous, martingales, Kolmogorov's equations, stationary distribution, 1. PageRank., future depends only on the present, 6. Reinforcement learning., Discrete Markov Chains, null recurrent, Continuous-time chains, Positive / null recurrent., Theorem.
- References: brownian-motion, finance/crr-model, hidden-markov-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, reinforcement-learning
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, math/branching-processes, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/geometric-ergodicity, math/interacting-particle-systems, math/kolmogorov-equations-ctmc, math/markov-chain-mixing, math/optimal-stopping-markov, math/renewal-theory, math/stochastic-recursive-sequences, random-walks-groups, stochastic-processes

## Entity: math/kolmogorov-equations-ctmc
- Title: Kolmogorov Equations and Continuous-Time Markov Chains
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: rate matrix, minimal, generator, Markov property, Kolmogorov Equations and Continuous-Time Markov Chains, Explosion and non-minimal chains, uniformization, Stationary distribution and detailed balance, initial, forward equation, Comparison with discrete chains, boundary condition, birth-death process, Kolmogorov forward equation (Fokker-Planck), Transition probability matrix
- References: brownian-motion, finance/levy-processes, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms, math/spectral-theory-operators
- Backlinks: fokker-planck-equation, math/discrete-markov-chains, math/point-processes, math/subordinators, stochastic-processes

## Entity: math/spectral-representation-processes
- Title: Spectral Representation of Stationary Processes
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Examples:, Spectral Representation of Stationary Processes, Orthogonal random measure, Ideal low-pass, [[hilbert-huang-transform|Hilbert-Huang transform]], Lag, Linear prediction problem., stronger, 4. Speech and image processing., Locally stationary processes, Connection to ARMA models, Linear transformations, Limitations, every, autocovariance
- References: brownian-motion, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/stationary-wide-spectral, wavelet-transform
- Backlinks: math/spectral-theory-operators, math/stationary-wide-spectral

## Entity: math/stochastic-recursive-sequences
- Title: Stochastic Recursive Sequences
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: Queueing theory., The GARCH connection, Iterated function systems., contractive, Contractivity and the key condition, Theorem., Theorem (Furstenberg-Kesten, 1960)., Theorem (Loynes, 1962)., heavy (Pareto) tails, coupling events, Related Articles, Borovkov's renovation approach, contractivity in mean, Theorem (Kesten, 1973; Vervaat, 1979)., Autoregressive processes.
- References: arch-models, brownian-motion, finance/levy-processes, garch-models, hidden-markov-models, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/law-of-large-numbers
- Backlinks: math/ergodic-theorems-birkhoff, math/geometric-ergodicity

## Entity: math/stationary-wide-spectral
- Title: Wide-Sense Stationary Processes and Spectral Density
- Category: Ergodic and Spectral Theory
- Language: en
- Key Concepts: 3. Periodogram and test for periodicity., Definition, 3. Harmonic component., 1. White noise., Examples, 1. Analysis of financial time series., Non-negative definiteness, constant, Properties of the autocovariance, Wiener-Khintchine theorem, wide-sense stationary, 2. AR(1) process., some, Limitations, the autocovariance and the spectral measure are two equivalent descriptions
- References: brownian-motion, characteristic-functions, finance/dft, finance/fft, finance/hilbert-huang-transform, finance/self-similarity-fractality, finance/stylized-facts-returns, kalman-filter, math/ergodic-theorems-birkhoff, math/spectral-representation-processes
- Backlinks: math/spectral-representation-processes, ornstein-uhlenbeck, stochastic-processes

## Entity: conditionally-gaussian-processes
- Title: Conditionally Gaussian Processes
- Category: Filtering Theory
- Language: en
- Key Concepts: Proof Sketch, Conditionally Gaussian Processes, conditionally Gaussian, log-linear in $\theta$, matrix Riccati equation, Credit risk with latent state., The Conditionally Gaussian Model, Reference measure., Derive the equations, Target tracking with range-dependent noise., Theorem (Liptser-Shiryaev)., Absolute continuity., Multivariate Extensions, Key structural point:, Comparison with Kalman-Bucy
- References: finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, math/doleans-dade-exponential, nonlinear-filtering, stochastic-differential-equations
- Backlinks: innovation-process, nonlinear-filtering

## Entity: innovation-process
- Title: Innovation Process
- Category: Filtering Theory
- Language: en
- Key Concepts: innovation process, Smoothing, Control theory., Whitening Interpretation, Consequence., Connection to Girsanov's Theorem, invertible causal transformation, Likelihood computation., Theorem., Theorem (Liptser-Shiryaev)., Kushner-Stratonovich equation, The Innovation Approach to Filtering, Example: Scalar Linear Model, Related Articles, Prediction
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, kalman-filter, math/conditional-expectation-sigma, math/discrete-martingales, nonlinear-filtering
- Backlinks: conditionally-gaussian-processes, math/absolute-continuity-process-measures, math/martingale-representation, nonlinear-filtering

## Entity: nonlinear-filtering
- Title: Nonlinear Filtering
- Category: Filtering Theory
- Language: en
- Key Concepts: Spectral methods., signal, Derive the Zakai equation, Derive KS, Nonlinear Filtering, Linear-Gaussian case., Why Nonlinear Filtering is Hard, Theorem (Benes-Hazewinkel-Marcus)., The Zakai Equation, Reference measure method., The Partially Observed System, observation process, Benes filter., Projection filters., Examples and Applications
- References: brownian-motion, conditionally-gaussian-processes, finance/girsanov-semimartingales, finance/particle-filter, heston-model, hidden-markov-models, innovation-process, kalman-filter, manifold-learning, math/doleans-dade-exponential, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, innovation-process, math/absolute-continuity-process-measures, math/martingale-representation, state-space-models, stochastic-control-partial-info, stochastic-differential-equations

## Entity: bayesian-networks
- Title: Bayesian Networks
- Category: Foundations
- Language: en
- Key Concepts: Structure Learning, The DAG Structure, Inference and Learning, The Factorization Property, Directed Acyclic Graph (DAG), Collider (V-structure), Edges, Bayesian Networks, Variable Elimination, Learning, dependent, Chain Rule for Bayesian Networks, Inference, Acyclicity, Belief Propagation
- References: bayes-theorem, causal-inference, hmm
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, graph-theory-basics

## Entity: category-theory
- Title: Category Theory
- Category: Foundations
- Language: en
- Key Concepts: 3. Natural Transformations, Category Theory: The Mathematics of Mathematics, Quantum Physics, Topos Theory, 2. Functors: Moving Between Worlds, Composition, 5. Applications in AI and Physics, Natural Transformations, Monads, Haskell, Category, Functor, Distributed Representations, Relationships (Morphisms), an object is completely determined by its relationships to all other objects.
- References: homological-algebra, topos-theory, type-theory
- Backlinks: homological-algebra, homotopy-type-theory, math/algebraic-topology, topos-theory, type-theory

## Entity: probability-paradoxes
- Title: Classic Paradoxes in Probability
- Category: Foundations
- Language: en
- Key Concepts: 3. The Birthday Paradox, Example, 1. Simpson's Paradox, confounding variables, Abraham Wald, 2. Berkson's Paradox (Selection Bias), Intuition, Visualization: Simpson's Reversal, Lesson, no holes, Related Topics, Classic Paradoxes in Probability and Statistics, Reality, 4. Survivor Bias
- References: bayes-theorem, causal-inference, hypothesis-testing

## Entity: convex-optimization
- Title: Convex Optimization
- Category: Foundations
- Language: en
- Key Concepts: Jensen's inequality, Examples:, Nesterov Accelerated Method:, proximal operator, LASSO, Lagrangian, conjugate function, subgradient, Convex Optimization, epigraph, Primal feasibility:, Slater's condition, Gradient Descent (convex, smooth):, Alternating Direction Method of Multipliers, Portfolio Optimization:
- References: math/information-theory, math/m-estimators, math/variational-calculus, stochastic-control
- Backlinks: 3d-gaussian-splatting, ai-theory/adversarial-examples, ai-theory/neural-tangent-kernel, attention-kernel, automatic-differentiation, convex-analysis, convexity, course-math-for-ai, deep-galerkin, differential-privacy, energy-based-models, ergodic-theory-sgd, fine-tuning, fisher-information, fluid-dynamics-navier-stokes, geometric-mechanics-lie-groups, geometry-loss-landscapes, gradient-hessian-jacobian, information-bottleneck-theory, information-geometry-natural-gradient, information-geometry-nn, information-theory-rate-distortion, lagrange-multipliers, linear-algebra, linear-systems-gauss, logistic-regression, long-context-yarn-longrope, manifold, math/analysis-geometry/information-geometry, math/differential-geometry, math/interacting-particle-systems, math/large-deviations-cramer, math/martingale-clt, math/ode-stability, meta-learning, model-merging-procrustes, multimodal-alignment-clip, multivariable-calculus, neural-operators-fno, normalization-layers-math, ntk, online-learning-regret, optimal-transport-gromov-wasserstein, optimization-basics, pinns-convergence, proximal-algorithms-admm, qft-curved-spacetime, regularization-implicit-bias, sgd-convergence-theory, sgd-variants, stochastic-calculus-manifolds, string-theory-calabi-yau, symplectic-hamiltonian-nn, training-dynamics, ttt-layers, vae-elbo, variational-autoencoders, variational-inference, variational-inference-math

## Entity: eigenvalues-eigenvectors
- Title: Eigenvalues and Eigenvectors
- Category: Foundations
- Language: en
- Key Concepts: Google PageRank, 2. Theoretical Gems, Trace, 5. Why It Matters in AI and Finance, Gershgorin Disc Theorem, eigenvalue, The Spectral Theorem, Interpretation, Principal Component Analysis (PCA), In AI, Neural Stability, Singular Values, Normal Modes, Determinant, eigenvector
- References: finance/random-matrix-theory, linear-spaces-basis, math/discrete-markov-chains, math/spectral-theory-operators, pca
- Backlinks: cross-impact, laplacian, linear-spaces-basis, linear-systems-gauss, matrix-decompositions, nonlinear-shrinkage, vector-spaces-orthogonality

## Entity: math/functional-analysis
- Title: Functional Analysis
- Category: Foundations
- Language: en
- Key Concepts: Operators and Spectrum, Kernel Trick:, Applications in Machine Learning, Functional Analysis, projection, Reproducing Kernel Hilbert Spaces (RKHS):, Banach Spaces:, Eigenfunctions:, Stability Analysis:, Normed Spaces:, Related Topics, Core Spaces, linear operator, orthogonality, Spectral Theorem:
- References: hilbert-banach-spaces, linear-algebra, math/spectral-theory-operators, quantum-mechanics

## Entity: graph-theory
- Title: Graph Theory
- Category: Foundations
- Language: en
- Key Concepts: Fundamental Concepts, [[knowledge-graph]], graphs, in-degree, Weighted Graph, Cycle, Network Contagion, Overview, Formal Definition, Key Types of Graphs, Four Color Theorem, Bipartite Graph, Applications in AI and Finance, Connectivity, Complete Graph ($K_n$)
- References: finance/systemic-contagion-debtrank, graph-neural-networks, knowledge-graph, linear-algebra, math/spectral-theory-operators, spectral-graph-theory
- Backlinks: causal-inference-do-calculus, factor-graphs-inference, kuramoto-model, linear-algebra, logic-set-theory

## Entity: homological-algebra
- Title: Homological Algebra
- Category: Foundations
- Language: en
- Key Concepts: Homological Algebra, Abelian Categories, Chain Complexes, $n$-th homology group, homology, Algebraic Geometry, 2. Ext (Extension), The Snake Lemma, Diagram Chasing and Lemmas, extensions, The Five Lemma, chain complex, Derived Functors: Ext and Tor, Applications, Category Theory
- References: category-theory, hodge-theory, math/algebraic-topology, quantization
- Backlinks: category-theory, topos-theory, tor-ext-functors

## Entity: jensens-inequality
- Title: Jensen's Inequality
- Category: Foundations
- Language: en
- Key Concepts: 1. The Mathematical Statement, Finite Version, Evidence Lower Bound (ELBO), Jensen's Inequality: The Geometry of Averages, Statistical Physics, Kullback-Leibler (KL) Divergence, Concave Case, Integral Version, B. Variational Inference and VAEs, 2. Geometric Intuition, Convex Case, C. Finance: The Volatility Tax, Information Theory, above, Equality Condition
- References: convexity, finance/shannon-entropy, variational-autoencoders
- Backlinks: f-divergences

## Entity: linear-algebra
- Title: Linear Algebra
- Category: Foundations
- Language: en
- Key Concepts: Vector Spaces, Embeddings, basis, Overview, Inverse ($A^{-1}$), linearly independent, Applications in AI, Linear Algebra, [[spectral-theory-operators|Eigenvalues]] and Eigenvectors, eigenvalue, Fundamental Objects, Determinant and Inverse, Determinant, Rank, eigenvector
- References: attention-mechanisms, automatic-differentiation, convex-optimization, graph-theory, manifold-learning, math/spectral-theory-operators, quantization, spectral-graph-theory, transformer-architecture
- Backlinks: graph-theory, language-models/mamba-ssm, math/functional-analysis

## Entity: quantum-math
- Title: Math of Quantum Computing
- Category: Foundations
- Language: en
- Key Concepts: tensor product, 1. The Qubit as a Hilbert Space Vector, Linear Algebra, Visualization: The Bloch Sphere, 4. Measurement as Projection, 2. Tensor Products and Entanglement, Shor's Algorithm, 5. Key Quantum Algorithms, Entanglement, Hadamard Gate ($H$), Unitary Matrix, Reversibility, The Mathematics of Quantum Computing, Schmidt Rank, QAE
- References: hilbert-banach-spaces, quantum-amplitude-estimation, quantum-information-entropy, spectral-theorem-unbounded
- Backlinks: hilbert-banach-spaces, path-integral-control, quantum-amplitude-estimation

## Entity: decision-theory
- Title: Statistical Decision Theory
- Category: Foundations
- Language: en
- Key Concepts: Bayes Rule, Parameter Space ($\Theta$), 1. The Formal Setup, Bayesian Inference, Robust Control, 3. Optimal Strategies, Classification, Reinforcement Learning, Loss Function $L(\theta, a)$, Statistical Decision Theory: The Logic of Choice, Observation $X$, Adversarial Machine Learning, 2. Decision Rules and Risk, The Admissibility Crisis, Visualization: Bayes vs. Minimax
- References: bayesian-inference, finance/shannon-entropy, reinforcement-learning
- Backlinks: naive-bayes

## Entity: tensor-decompositions
- Title: Tensor Decompositions
- Category: Foundations
- Language: en
- Key Concepts: Tensors, Large Language Models, 1. The Core Problem: Rank of a Tensor, 3. Tucker Decomposition (Higher-Order SVD), Tensor Decompositions: Compressing Multi-dimensional Data, Interpretation, Visualization: CP vs. Tucker, Application, Tensor Decompositions, Reducing FLOPs, 5. Why it Matters for AI Infrastructure, 2. CP Decomposition (CANDECOMP/PARAFAC), NP-hard, 4. Tensor-Train (TT) Decomposition, Use Case
- References: distributed-training, many-body-tensor-networks, modern-quantization, pca
- Backlinks: course-math-for-ai, lora-peft

## Entity: maximum-entropy
- Title: The Maximum Entropy Principle
- Category: Foundations
- Language: en
- Key Concepts: power laws, 8. Generalisations: Tsallis and Rényi, 12. Related topics, Logistic regression, E. T. Jaynes, Kullback's principle of minimum discrimination information, close to the prior, inverse temperature, 4. The MaxEnt zoo, exactly the canonical form of an [[exponential-families|exponential family]], stretched exponentials, The Maximum [[shannon-entropy|Entropy]] Principle, 9. Information-geometric view, 1. Formal statement, 11. Visualisation: entropy decreases with constraints
- References: bayesian-inference, exponential-families, finance/shannon-entropy, fisher-information, manifold-learning, math/analysis-geometry/information-geometry, math/information-theory, mle, statistical-mechanics
- Backlinks: course-math-for-ai, distributions-zoo, entropy-information, information-theory-basics

## Entity: topos-theory
- Title: Topos Theory
- Category: Foundations
- Language: en
- Key Concepts: Holography, Two Views of a Topos, Topos Theory, Quantum Logic, Independence Proofs, Visualization: Truth Value Spectrum, Synthetic Differential Geometry, What is a Topos?, Finite Limits and Colimits, Why It Matters for AI and Physics, Sheaves, Alexandre Grothendieck, AI Semantics, Intuitionistic Logic, 2. As a Logical Universe (Lawvere-Tierney)
- References: category-theory, homological-algebra, math/algebraic-topology
- Backlinks: category-theory, category-theory-ml, type-theory

## Entity: type-theory
- Title: Type Theory and Formal Logic
- Category: Foundations
- Language: en
- Key Concepts: Visualization: The Proof-Program Ladder, Lean, Type, Agda, Type Theory and Formal Logic, Propositions are Types, Curry-Howard isomorphism, paths, spaces, Coq, Programs, 3. Homotopy Type Theory (HoTT), Dependent types, Proofs are Programs, Univalence Axiom
- References: category-theory, reasoning-models, topos-theory
- Backlinks: category-theory, category-theory-ml, homotopy-type-theory

## Entity: math/variational-calculus
- Title: Variational Calculus
- Category: Foundations
- Language: en
- Key Concepts: Lagrangian, 1. Physics-Informed Neural Networks (PINNs), functionals, Hamilton's Principle:, The Core Problem, Noether's Theorem, Classical Examples, symmetries to conservation laws, Variational Principles in AI, Geodesics:, Action, Momentum, ELBO, Brachistochrone:, Angular Momentum
- References: lagrangian-mechanics, noether-theorem, variational-inference
- Backlinks: ai-physics/hamiltonian-nn, convex-optimization, math/differential-geometry, math/ode-stability

## Entity: math/cantor-diagonal
- Title: Cantor's Diagonal Argument
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: between, Diagonalization beyond set theory, Cardinal Numbers, Continuum Hypothesis, Countability, Turing's halting problem, Cantor's diagonal argument, uncountable, Proof., Related Articles, Self-reference in [[chain-of-thought|chain-of-thought reasoning]], Cantor's Diagonal Argument, Cantor's theorem, independent, [[kolmogorov-complexity|Kolmogorov complexity]]
- References: chain-of-thought, kolmogorov-complexity, llm, math/banach-tarski, math/godel-incompleteness
- Backlinks: chain-of-thought, math/banach-tarski, math/godel-incompleteness

## Entity: math/godel-incompleteness
- Title: Gödel's Incompleteness Theorems
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: cannot prove its own consistency, Second Incompleteness Theorem, [[kolmogorov-complexity|Kolmogorov complexity]], Related Articles, Connection to computability and AI, First Incompleteness Theorem, Gödel's incompleteness theorems, Diagonalization lemma, true but unprovable, Gödel's Incompleteness Theorems, Gödel Numbering, Python Demonstration, Consequences, halting problem, incomplete
- References: chain-of-thought, information-paradox, kolmogorov-complexity, llm, math/banach-tarski, math/cantor-diagonal, mechanistic-interpretability, transformer-architecture
- Backlinks: chain-of-thought, homotopy-type-theory, math/banach-tarski, math/cantor-diagonal, math/kolmogorov-probability-axioms, math/non-euclidean-geometry

## Entity: math/non-euclidean-geometry
- Title: Non-Euclidean Geometry
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Geodesics, The Parallel Postulate, Poincaré Disk Model, Non-Euclidean geometry, Metric, Connection to Physics, Related Articles, Three Geometries, Gaussian Curvature, exactly one, fifth postulate, [[general-relativity|general relativity]], Gauss's Theorema Egregium, Non-Euclidean Geometry
- References: asymptotic-spacetime, bms-group, celestial-holography, general-relativity, gravitational-waves-gr, manifold-learning, math/banach-tarski, math/godel-incompleteness
- Backlinks: math/algebraic-topology, math/banach-tarski, math/differential-geometry

## Entity: math/banach-tarski
- Title: The Banach-Tarski Paradox
- Category: Foundations of Mathematics
- Language: en
- Key Concepts: Proof Sketch, non-measurable sets, measure theory and symmetry transformations break down at the quantum level, Echoes in physics, without, two balls of the same size, Axiom of Choice, 3. Axiom of Choice, free group, Related Articles, The Banach-Tarski Paradox, 1. Free Group on Two Generators, 2. Hausdorff Paradox (1914), all subsets of $\mathbb{R}$ are Lebesgue measurable, two copies of itself
- References: anomalies, math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry
- Backlinks: math/cantor-diagonal, math/godel-incompleteness, math/non-euclidean-geometry

## Entity: operator-semigroups
- Title: Operator Semigroups
- Category: Functional Analysis
- Language: en
- Key Concepts: Semigroup Property, Markov Processes, Schrödinger Equation, Visualization: Smoothing Effect, The Hille-Yosida Theorem, Neural ODEs, Generator, Heat Equation, Strong Continuity, 1. Mathematical Definition, time-domain behavior, Stochastic Processes, Strongly Continuous (C₀) Semigroup, spectral properties, Contractive
- References: feller-processes, laplacian, neural-odes, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: dirichlet-forms, feller-processes, spectral-theorem-unbounded

## Entity: schwartz-distributions
- Title: Schwartz Distributions
- Category: Functional Analysis
- Language: en
- Key Concepts: Schwartz Distributions: Generalized Functions, 1. The Core Idea: Functions as Linear Maps, Test Functions, Fundamental Solution, Convolution, every distribution has a derivative, Tempered Distributions, Schwartz Space, Schwartz Distributions, 4. Fundamental Solutions (Green's Functions), Dirac Delta, 2. Weak Derivatives: Differentiating the Non-Differentiable, Related Topics, Partial Differential Equations (PDEs), Fourier Transform
- References: deep-galerkin, fourier-transform, laplacian, partial-differential-equations, spectral-graph-theory
- Backlinks: gff, microlocal-analysis

## Entity: sobolev-spaces
- Title: Sobolev Spaces & Weak Solutions
- Category: Functional Analysis
- Language: en
- Key Concepts: Weak Derivatives, Sobolev Embeddings, Physics-Informed Neural Networks (PINNs), Sobolev Spaces $W^{k,p}$, Rellich-Kondrachov Theorem, Sobolev Spaces & Weak Solutions
- Backlinks: deep-ritz-method, hilbert-banach-spaces, math/harmonic-analysis, math/lp-spaces, math/nonparametric-regression, math/spectral-theory-operators, math/topology-basics

## Entity: spectral-theorem-unbounded
- Title: Spectral Theorem for Unbounded Operators
- Category: Functional Analysis
- Language: en
- Key Concepts: unbounded, Schrödinger equation, Self-Adjointness: The Key Requirement, Spectral Measure, Stable Processes, Spectral Theorem for Unbounded Operators, Self-Adjointness, Why It Matters in Physics and AI, Visualization: Discrete vs. Continuous Spectrum, Functional Calculus, Related Topics, Stochastic PDEs, Kernel Methods, The Spectral Decomposition, Quantum Mechanics
- References: functional-analysis, math/spectral-theory-operators, operator-semigroups, spectral-graph-theory
- Backlinks: laplacian, operator-semigroups, quantum-math

## Entity: bayes-theorem
- Title: Bayes' Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: $P(A)$ (Prior):, Naive Bayes Classifier:, Logical Pitfalls, $P(B)$ (Evidence):, $P(B|A)$ (Likelihood):, Base Rate Fallacy, Variational Autoencoders (VAE):, Bayesian Inference:, Bayes' Theorem, The Formula, Related Topics, $P(A|B)$ (Posterior):, Bayesian Neural Networks:, Applications in AI, uncertainty
- References: naive-bayes, prm, variational-inference
- Backlinks: bayesian-networks, conditional-probability, map-estimation, probability-distributions, probability-paradoxes, statistical-inference

## Entity: combinatorics-induction
- Title: Combinatorics and Mathematical Induction
- Category: Fundamentals
- Language: en
- Key Concepts: Conclusion, Product Rule, Pascal's Triangle, 2. Binomial Theorem, Hash Functions, not, 5. Pigeonhole Principle, Combinatorics, 3. Mathematical Induction, 4. Why it Matters in CS and AI, 1. The Rules of Counting, Combinations ($C_n^k$), Binomial Distribution, Combinatorics and Induction: The Tools of Counting and Proving, Probability in Deep Learning
- References: lln-clt, stablecoin-mechanisms
- Backlinks: number-theory-basics

## Entity: lagrange-multipliers
- Title: Constrained Optimization and Lagrange Multipliers
- Category: Fundamentals
- Language: en
- Key Concepts: Euler-Lagrange equations, Action, B. Classical Mechanics, C. Advanced: KKT Conditions, Visualization: Tangent Gradients, Support Vectors, subject to, 2. Geometric Intuition, Karush-Kuhn-Tucker (KKT), A. Support Vector Machines (SVMs), Lagrange Multiplier, Related Topics, 4. Why it Matters in AI and Physics, tangent, 3. The Lagrangian Function ($\mathcal{L}$)
- References: ai-physics/hamiltonian-nn, convex-optimization, convex-optimization-trading, multivariable-calculus
- Backlinks: course-math-for-ai, linear-programming

## Entity: convexity
- Title: Convexity
- Category: Fundamentals
- Language: en
- Key Concepts: 2. Why it is the "Holy Grail", 4. Jensen's Inequality, Quadratic Convex Program, B. Convex Functions, B. Portfolio Optimization, C. Log-Concavity in Stats, Log-Concave, exponentially fast, The Hessian Test, In AI, A. Convex Sets, In Finance, Global Optimality, Convexity: The Safety Net of Optimization, Non-Convex
- References: convex-optimization, convex-optimization-trading, gradient-hessian-jacobian, martingale-optimal-transport, variational-autoencoders
- Backlinks: course-math-for-ai, fixed-point-theorems, jensen-inequality, jensens-inequality, logistic-regression, martingale-optimal-transport

## Entity: differential-equations
- Title: Differential Equations: The Laws of Change
- Category: Fundamentals
- Language: en
- Key Concepts: Wave Equation, Visualization: The Vector Field, Linearity, Geometric Brownian Motion, Analytical, B. Stochastic Differential Equations (SDEs), Heat Equation, Decay, Runge-Kutta, Harmonic Oscillator, Black-Scholes PDE, 5. Why it Matters in AI and Finance, Euler methods, First Order, ODE
- References: automatic-differentiation, geometric-brownian-motion, ricci-flow, stochastic-differential-equations

## Entity: fourier-transform
- Title: Fourier Transform
- Category: Fundamentals
- Language: en
- Key Concepts: Convolution Theorem, Parseval's Theorem, Intuition, Fourier Transform, Uncertainty Principle, Fourier Transform: The Language of Waves, 3. Discrete and Fast Transform (FFT), 5. Why it Matters in AI and Science, Duality, Fast Fourier Transform (FFT), Frequency Domain, Positional Encodings, 1. Fourier Series (Periodic Signals), 4. Key Properties, 2. The Fourier Transform (Continuous Case)
- References: finance/spectral-analysis, spectral-graph-theory
- Backlinks: characteristic-functions, complex-analysis, finance/dft, finance/fft, finance/prony-hankel-spectral, mgf, mgf-characteristic-functions, occupation-measures-local-times, schwartz-distributions

## Entity: gradient-hessian-jacobian
- Title: Gradient, Hessian, and Jacobian
- Category: Fundamentals
- Language: en
- Key Concepts: [[automatic-differentiation|Backpropagation]], Hessian-Free & K-FAC, Local Maximum, [[spectral-theory-operators|Eigenvalues]] and Stability, In AI, 2. The Jacobian ($J$) - The Linearizer, Geometric Meaning, vector-valued, 4. Advanced Optimization: Beyond SGD, Newton's Method, 1. The Gradient ($\nabla f$) - The Compass, Visualization: Landscape Analysis, Local Minimum, Optimization, Linearization
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, laplacian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, change-of-variables, convexity, course-math-for-ai, laplacian, optimization-basics, qat

## Entity: hilbert-banach-spaces
- Title: Hilbert and Banach Spaces
- Category: Fundamentals
- Language: en
- Key Concepts: 12. Related topics, Uniform boundedness principle (Banach-Steinhaus), kernel trick, Closed graph theorem, Corollary., Moore-Aronszajn theorem., 2. Banach space, Reflexivity., reproducing kernel, 1. Normed space, inner product, complete, Self-adjoint:, Fourier expansion., 4. Orthogonality and projection
- References: functional-analysis, gaussian-processes, kernel-methods-rkhs, math/lp-spaces, math/spectral-theory-operators, quantum-math, sobolev-spaces
- Backlinks: course-math-for-ai, fixed-point-theorems, math/functional-analysis, quantum-math

## Entity: calculus-integration
- Title: Integration and the Fundamental Theorem
- Category: Fundamentals
- Language: en
- Key Concepts: Part 1, Integration and the Fundamental Theorem of Calculus, 4. Why it Matters in Science, Intuition, 5. Beyond Riemann: Lebesgue Integration, Probability Density Function (PDF), Integration, Antiderivative, 3. Techniques of Integration, 2. The Fundamental Theorem of Calculus (FTC), Integration by Parts, Visualization: Accumulation, Substitution (u-substitution), C. Finance: Risk Accumulation, Lebesgue Integration
- References: measure-theory, taylor-series
- Backlinks: neural-radiance-fields-math

## Entity: lln-clt
- Title: LLN and CLT: The Pillars of Statistics
- Category: Fundamentals
- Language: en
- Key Concepts: Central Limit Theorem (CLT), Law of Large Numbers (LLN), Visualization: Convergence to Normal, 2. Central Limit Theorem (CLT), 3. Why the CLT is the "Magic" of the Universe, Weak LLN, Finance, Lognormal, Intuition: The Casino's Edge, finite variance, 4. Limitations and "Fat Tails", Strong LLN, 1. Law of Large Numbers (LLN), Error Modeling, Power Laws
- References: black-scholes, finance/black-swan-scenarios, finance/monte-carlo-method
- Backlinks: combinatorics-induction, course-math-for-ai, delta-method, discrete-random-variables, fundamental-inequalities, law-iterated-logarithm, probability-distributions, sequences-series-convergence

## Entity: laplacian
- Title: Laplacian Operator
- Category: Fundamentals
- Language: en
- Key Concepts: Graph Laplacian, into, 2. Physical and Geometric Intuition, Trace, Spectral Bias in Neural Networks, Heat Equation, 1. Mathematical Definition, equilibrium, diffusion, and smoothness, Laplace Equation, 3. Role in Modern AI, Dirichlet Energy, The [[spectral-graph-theory|Laplacian]] Operator ($\Delta$), 4. Relationship to the Hessian, A. The Diffusion Engine, Harmonic Functions
- References: diffusion-models, eigenvalues-eigenvectors, finance/shannon-entropy, gradient-hessian-jacobian, graph-neural-networks, math/spectral-theory-operators, spectral-graph-theory, spectral-theorem-unbounded
- Backlinks: course-math-for-ai, equivariant-diffusion-models, gff, gradient-hessian-jacobian, operator-semigroups, schwartz-distributions

## Entity: linear-programming
- Title: Linear Programming and Duality
- Category: Fundamentals
- Language: en
- Key Concepts: Primal, C. Large-Scale Logistics, 1. The Standard Form, Intuition, Shadow Prices, B. Portfolio Optimization, A. Optimal Transport, Dual, 2. The Simplex Method, Convex Polytope, Visualization: The Feasible Region, Linear Programming (LP), Linear Equality and Inequality Constraints, Linear Objective Function, Simplex Algorithm
- References: convex-optimization-trading, lagrange-multipliers, optimal-transport
- Backlinks: course-math-for-ai

## Entity: linear-spaces-basis
- Title: Linear Spaces, Basis, and Dimension
- Category: Fundamentals
- Language: en
- Key Concepts: Fourier Transforms, Linear Transformation, both, 3. Basis and Dimension, Linear Space, Dimension, Subspace, Commutativity, Rank, 1. Defining a Linear Space ($V$), Linear Combination, Visualization: Basis and Span, Linear Independence, The Rank-Nullity Theorem, 4. Change of Basis
- References: eigenvalues-eigenvectors, quantum-entanglement, quantum-information-entropy, tensor-calculus
- Backlinks: course-math-for-ai, eigenvalues-eigenvectors, linear-systems-gauss, taylor-series

## Entity: linear-systems-gauss
- Title: Linear Systems and Gaussian Elimination
- Category: Fundamentals
- Language: en
- Key Concepts: No Solution (Inconsistent), Back Substitution, 4. Why it Matters in the Digital Age, Swapping, Gaussian Elimination, One Unique Solution, 3. Existence and Uniqueness of Solutions, The Process:, 5. Computational Complexity, 1. Matrix Representation, Free Variables, Rank, Reduced Row Echelon Form (RREF), A. Computer Graphics, B. Finite Element Method (FEM)
- References: convex-optimization, eigenvalues-eigenvectors, linear-spaces-basis
- Backlinks: course-math-for-ai

## Entity: manifold
- Title: Manifold
- Category: Fundamentals
- Language: en
- Key Concepts: Riemannian [[convex-optimization|Gradient Descent]], Charts, low-dimensional manifold, Metric Tensor, [[manifold-learning|Manifold]]: The Geometry of Data and Spacetime, Application: Riemannian Optimization, 2. The Manifold Hypothesis in AI, 1. The Intuition: Atlas and Charts, Real-world high-dimensional data is not spread uniformly across space., Neural Networks as Coordinate Seekers, Differentiable Manifold, Atlas, Transition Maps, Riemannian Manifold, Curvature
- References: complex-manifolds, convex-optimization, general-relativity, manifold-learning, math/differential-geometry, math/topology-basics, symplectic-geometry, variational-autoencoders
- Backlinks: course-math-for-ai, information-geometry-finance

## Entity: martingale
- Title: Martingale
- Category: Fundamentals
- Language: en
- Key Concepts: Risk-Neutral Pricing, 4. Why Tier-1 Quants Care, Martingale: The Math of a Fair Game, 2. Types of Martingales, A. The Optional Stopping Theorem, Convergence of Algorithms, Martingale, In Finance, Efficient Market Hypothesis, Visualization: The Expectations, Adaptation, Integrability, Supermartingale, 1. Definition, Martingale Optimal Transport (MOT)
- References: brownian-motion, feller-processes, finance/shannon-entropy, martingale-optimal-transport, risk-neutral-valuation
- Backlinks: course-math-for-ai, martingale-optimal-transport, measure-theory

## Entity: measure-theory
- Title: Measure Theory Basics
- Category: Fundamentals
- Language: en
- Key Concepts: Continuous-time Martingales, 4. Why Tier-1 Quants Care, B. Fatou's Lemma and Monotone Convergence, A. Radon-Nikodym Theorem, Likelihood Ratio, 2. Key Concepts, 3. Crucial Theorems for AI and Finance, Detailed Sections, A. Sigma-Algebras ($\mathcal{F}$), Change of Measure, In Finance, Null empty set, Countable Additivity, 1. What is a Measure ($\mu$)?, Radon-Nikodym Derivative
- References: frtb-es, martingale, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: axiomatic-probability, bayesian-inference, calculus-integration, continuous-random-variables, course-math-for-ai, dirichlet-forms, markov-chebyshev

## Entity: metric-spaces
- Title: Metric Spaces and Topology
- Category: Fundamentals
- Language: en
- Key Concepts: Metric Spaces, Metric Space, A. Compactness, Topologically Continuous, Homeomorphism, [[manifold-learning|Manifold]], Metric Spaces and Topology: The Fabric of Continuity, 3. Key Concepts, Euclidean ($L_2$), Robustness, Embedding Spaces, Cosine Similarity, Compact, Complete, [[manifold-learning|Manifold]] Learning
- References: ai-theory/adversarial-examples, lending-mechanics, manifold-learning, optimal-transport

## Entity: multivariable-calculus
- Title: Multivariable Calculus: Jacobians and Hessians
- Category: Fundamentals
- Language: en
- Key Concepts: 1. The Gradient ($\nabla f$), [[automatic-differentiation|Backpropagation]], 5. The Chain Rule in Higher Dimensions, 4. Why it Matters for High-Finance, Local Maximum, Multivariable Calculus, 3. The Hessian Matrix ($\mathbf{H}$), Delta, PyTorch, Geometry, TensorFlow, Jacobian Matrix, Hessian, Local Minimum, Linear Approximation
- References: automatic-differentiation, black-scholes, convex-optimization, math/analysis-geometry/information-geometry, math/spectral-theory-operators, taylor-series
- Backlinks: course-math-for-ai, lagrange-multipliers, taylor-series

## Entity: number-theory-basics
- Title: Number Theory and Cryptography
- Category: Fundamentals
- Language: en
- Key Concepts: RSA encryption, Number Theory, Fundamental Theorem of Arithmetic, Euclidean Algorithm, Modular Arithmetic, Prime Number, Public Key Cryptography, 3. Fermat's Little Theorem, Collision Resistance, The Discrete Logarithm Problem, Diffie-Hellman Key Exchange, Extended Version, 5. Hash Functions and Collisions, Cryptographic Hash Functions, Modular Inverses
- References: cedefi-gateway-architecture, cedefi-mechanics, combinatorics-induction

## Entity: taylor-series
- Title: Taylor Series and Approximation
- Category: Fundamentals
- Language: en
- Key Concepts: B. Euler's Identity, 2. Intuition: Local Linearization and Beyond, Sine, Taylor Series, Geometric, 3. Important Expansions to Memorize, 4. Why it Matters in Physics and AI, 2nd Order (Quadratic), Maclaurin Series, 1st Order (Linear), Second-order Taylor expansion, Taylor Polynomial of degree $n$, Exponential, 1. The Taylor Formula, 5. Remainder and Convergence
- References: black-scholes, linear-spaces-basis, multivariable-calculus
- Backlinks: calculus-integration, course-math-for-ai, multivariable-calculus, sequences-series-convergence

## Entity: ads-cft-deep
- Title: AdS/CFT Correspondence
- Category: Holography
- Language: en
- Key Concepts: Quantum Complexity, Strange Metals, Symmetric under Scaling, Anti-de Sitter Space (AdS), Conformal Field Theory (CFT), Spacetime and Entanglement, AdS/CFT correspondence, gravity is not a fundamental force, 1. The Two Sides of the Bridge, EPR, Boundary, Quark-Gluon Plasma, ER = EPR, Juan Maldacena, 2. The Ryu-Takayanagi Formula: Geometry is Information
- References: black-hole-thermodynamics, conformal-field-theory, quantum-information-entropy
- Backlinks: quantum-information-entropy

## Entity: agentic-patterns
- Title: Agentic Design Patterns
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Why, 2. Planning, 4. Multi-Agent Collaboration, Visualization: Single Pass vs. Agentic, Workflow, Mathematical Perspective: Iterative Refinement, ReAct, Core Patterns, What Is It, 1. Reflection (Self-Correction), New Standard, 3. Tool Use (Reasoning + Acting), Related Topics, Frameworks, Agentic Workflows
- References: agents, llm, mcp, tool-use

## Entity: preference-optimization
- Title: Beyond DPO: KTO & IPO
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Data Efficiency, Best For, 2. IPO: Identity Preference Optimization, Which One to Choose?, overfitting problem, Advantages, Human-Centric, Beyond [[dpo]]: KTO and IPO, Stability, Diversity, Data Requirement, IPO, High, Prospect Theory, Unpaired (Binary)
- References: dpo, fine-tuning, rlhf
- Backlinks: llm

## Entity: chain-of-thought
- Title: Chain-of-Thought Reasoning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Hurts or is neutral:, When CoT Helps vs. Hurts, Overview, Helps:, Prerequisites, Medical diagnosis:, [[godel-incompleteness|Gödel's incompleteness theorems]], [[cantor-diagonal|Cantor's diagonal argument]], Chain-of-Thought Reasoning, Scratchpad [[fine-tuning]]:, Standard few-shot CoT:, Multi-step quantitative finance:, Faithful CoT:, Variants & Extensions, Tree of Thoughts (ToT):
- References: fine-tuning, kolmogorov-complexity, llm, math/cantor-diagonal, math/godel-incompleteness, mcp, mechanistic-interpretability, rag, rlhf, speculative-decoding, tool-use, transformer-architecture
- Backlinks: agents, ai-theory/in-context-learning, evaluation-llms, math/cantor-diagonal, math/godel-incompleteness, mcp, meta-learning, prm, reasoning-models, rlhf, test-time-scaling, tool-use

## Entity: context-length
- Title: Context Length Extension
- Category: LLM Infrastructure
- Language: en
- Key Concepts: RoPE Scaling, The Sinusoidal Baseline and Its Limits, Llama 3, Context Length Extension, middle, RoPE: Rotary Position Embedding, Sliding Window Attention, Claude 3, only on relative position, head-specific slope, ALiBi: [[attention-mechanisms|Attention]] with Linear Biases, FlashAttention and Memory-Efficient Long Context, GPT-4, Retrieval-Augmented Context, Current Landscape
- References: attention-mechanisms, fine-tuning, inference-serving, llm, rag, speculative-decoding, state-space-models, transformer-architecture, vector-databases

## Entity: continuous-batching
- Title: Continuous Batching
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Result, The Problem with Static Batching, Visualization: Static vs. Continuous, Continuous Batching (In-Flight Batching), chunked prefill, 10x to 20x, batch, Eviction, Operate at the iteration (token) level, not the request level, Why It Matters, padded, Insertion, Prefill Phase, Decode Phase, The Orca Breakthrough
- References: hardware-io-attention, inference-serving, llm, paged-attention
- Backlinks: speculative-decoding

## Entity: curriculum-learning
- Title: Curriculum Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Curriculum Learning, Types of Curricula, Reasoning, Coding, Competence Scaling, Better Generalization, Faster Convergence, Zone of Proximal Development, complexity, Context Length, Model-based, 2. Automated Curriculum Learning (ACL), Heuristics, Mathematical Formulation, 1. Predefined Curriculum
- References: fine-tuning, neural-scaling-laws, training-dynamics

## Entity: dl-compilers
- Title: Deep Learning Compilers
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Operator Fusion, 1. XLA (Accelerated Linear Algebra), The Problem: Kernel Launch Overhead and Memory Bound, Deep Learning Compilers, The Solution: Operator Fusion, 2. Triton, Why It Matters, Related Topics, Visualization: The Compilation Pipeline, Technologies: XLA, Triton, and `torch.compile`, Deep Learning Compilers and Kernel Fusion, 3. `torch.compile` (PyTorch 2.0)
- References: flash-attention, gpu-architecture, hardware-io-attention, inference-serving, moe-routing
- Backlinks: flash-attention, gpu-architecture

## Entity: dpo
- Title: Direct Preference Optimization (DPO)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Sampling, Dataset Quality, rejected, The Mathematical Breakthrough, binary cross-[[shannon-entropy|entropy]] loss, Comparison: DPO vs. [[rlhf]], Reference Model Dependency, Likelihood Over-optimization, Implementation with `trl`, Limitations, Stability, Complexity, Reward Model, Compute, preferred
- References: agents, finance/shannon-entropy, fine-tuning, llm, rlhf
- Backlinks: language-models/safety/rlhf-dpo, llm, preference-optimization, preference-optimization-variants, rlhf, self-rewarding

## Entity: distributed-training
- Title: Distributed Training
- Category: LLM Infrastructure
- Language: en
- Key Concepts: A. Data Parallelism (DP), FSDP (Fully Sharded Data Parallelism), Problem, 4. Why Tier-1 Engineers care, 1. The Three Pillars of Parallelism, All-Reduce, B. Tensor Parallelism (TP), C. Pipeline Parallelism (PP), ZeRO, Solution, Bubble Time, Optimizer States, Distributed Training, 2. ZeRO: Zero Redundancy Optimizer, ZeRO-1
- References: fine-tuning, flash-attention, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: fsdp, hardware-io-attention, model-parallelism, tensor-decompositions

## Entity: federated-learning
- Title: Federated Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: LoRA, Finance, Upload, Sparsification, Visualization: Convergence Delay, Challenges in Federated Learning, Federated Averaging (FedAvg), Mobile Health, Repeat, The Core Algorithm: FedAvg, [[quantization]], 3. System Heterogeneity, Smart Keyboards, 2. Communication Efficiency, Federated Learning
- References: differential-privacy, fine-tuning, llm, quantization
- Backlinks: differential-privacy

## Entity: flash-attention
- Title: FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Claude 3, 16 GB, does not store it, A. Tiling (SRAM Management), C. Recomputation (Gradient Checkpointing), Memory IO, Online Softmax, 1. The Bottleneck: The Memory Wall, IO-Aware, Tri Dao et al. (2022), Streaming Multiprocessors (SMs), 3. Results: Scaling to 1M Tokens, Visualization: Memory Flow, Memory, 4. FlashAttention-2 and Beyond
- References: attention-mechanisms, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, distributed-training, dl-compilers, gpu-architecture, hardware-io-attention, inference-serving, language-models/mamba-ssm, paged-attention, rope-scaling

## Entity: fsdp
- Title: Fully Sharded Data Parallel (FSDP)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Fully Sharded Data Parallel (FSDP), Communication Efficiency, Discard, Memory usage, How FSDP Works, Hybrid Sharding, Scales down, Visualization: Memory per GPU, Forward Pass, Sharded, Max Model Size, Distributed Data Parallel (DDP), Massive Memory Savings, Complexity, The Lifecycle of a Layer
- References: distributed-training, fine-tuning, inference-serving, model-parallelism
- Backlinks: model-parallelism

## Entity: gpu-architecture
- Title: GPU Architecture for Deep Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: must be multiples of 8, 16, or 32, L1 Cache / Shared Memory, Alignment, Registers, [[inference-serving|GPU]] Architecture: SMs, Warps, and Tensor Cores, 32 threads, Thread, 4. The Memory Hierarchy, 3. Tensor Cores, Streaming Multiprocessors (SMs), Tensor Cores, Visualization: Matrix Multiplication, [[flash-attention|HBM]] (Global Memory), L2 Cache, 2. Threads and Warps
- References: attention-mechanisms, dl-compilers, flash-attention, hardware-io-attention, inference-serving, modern-quantization
- Backlinks: distributed-training, dl-compilers, flash-attention, modern-quantization

## Entity: hardware-io-attention
- Title: Hardware IO and FlashAttention
- Category: LLM Infrastructure
- Language: en
- Key Concepts: [[flash-attention|SRAM]] (Static RAM), Why It Matters for the Future, 90% of its time waiting, FlashAttention: IO-Awareness, entirely within SRAM, Visualization: Memory Speed vs. Access, Hardware IO and the Physics of FlashAttention, [[flash-attention|HBM]] (High Bandwidth Memory), Speed, Size, Communication-Avoiding, The "Memory Wall" Problem, Related Topics, IO-bound, The Memory Hierarchy of a [[inference-serving|GPU]]
- References: attention-mechanisms, distributed-training, flash-attention, inference-serving
- Backlinks: continuous-batching, distributed-training, dl-compilers, flash-attention, gpu-architecture, paged-attention

## Entity: agents
- Title: LLM Agents
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Compression:, Knowledge base chat:, max_steps, Episodic Memory, Semantic embedding:, Max steps:, Overview, Summarization:, Propose:, [[llm]] Agents, Current Frontier and Reliability, Research assistants:, Example trajectory:, Prerequisites, External Memory via [[rag]]
- References: chain-of-thought, fine-tuning, llm, mcp, rag, reinforcement-learning, tool-use
- Backlinks: agentic-patterns, dpo, inference-serving, prompt-engineering, vector-databases

## Entity: evaluation-llms
- Title: LLM Evaluation
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Contamination: Structural Problem, Compare to human performance., Goodhart's Law: Measure Becomes Target, Chatbot Arena, MMLU (Massive Multitask Language Understanding), Metric artifact hypothesis, orthogonal evaluation across diverse benchmarks never used for training, Perplexity: Information-Theoretic Foundation, pass@k, Measure calibration explicitly., Emergence and Scaling: Artifact or Reality?, Membership inference, Multi-Turn Preference Evaluation, Holistic Evaluation: HELM, BIG-Bench Hard
- References: chain-of-thought, llm, rlhf
- Backlinks: ai-theory/knowledge-distillation, bayesian-deep-learning, prompt-engineering

## Entity: fine-tuning
- Title: LLM Fine-Tuning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: LoRA, catastrophic forgetting, Prompt Tuning, Full Fine-Tuning, Prefix Tuning, Monitoring, LoRA: Low-Rank Adaptation, Instruction tuning, Data, When to Fine-Tune, Instruction Tuning vs. [[rlhf]], PEFT: Parameter-Efficient Fine-Tuning, Prompting / [[rag]] if:, Practical Guidelines, Epochs
- References: attention-mechanisms, convex-optimization, inference-serving, quantization, rag, rlhf, transformer-architecture
- Backlinks: adalora, agents, ai-theory/in-context-learning, ai-theory/knowledge-distillation, chain-of-thought, code-models, constitutional-ai, context-length, contrastive-learning, curriculum-learning, distributed-training, dora, dpo, effective-field-theory, federated-learning, fsdp, language-models/safety/rlhf-dpo, llm, llm-financial-analysis, lora-peft, mixture-of-experts, ml-options-pricing, model-merging, modern-quantization, nlp-financial-analysis, positional-encodings, preference-optimization, prompt-engineering, qat, qlora, quantization, rag, rlhf, self-rewarding, slm, synthetic-data-alignment, tool-use, training-dynamics, weight-averaging

## Entity: inference-serving
- Title: LLM Inference Serving
- Category: LLM Infrastructure
- Language: en
- Key Concepts: pages, Related topics, vLLM, Token budgets, PagedAttention, time-to-first-token (TTFT), Speculative decoding, Production systems, Dynamic batch size, Key benefits:, TTFT (time-to-first-token), 98-99% utilization, Tokens/sec/GPU, Continuous batching, PagedAttention: virtual memory for KV-cache
- References: agents, attention-mechanisms, flash-attention, llm, mixture-of-experts, quantization, speculative-decoding, transformer-architecture
- Backlinks: attention-mechanisms, automatic-differentiation, context-length, continuous-batching, distributed-training, dl-compilers, finance/monte-carlo-method, finance/xva, fine-tuning, flash-attention, fsdp, gpu-architecture, hardware-io-attention, language-models/mamba-ssm, llm-financial-analysis, lora-peft, mla, model-merging, model-parallelism, modern-quantization, paged-attention, quantization, queuing-theory, rope-scaling, slm, speculative-decoding, temporal-fusion-transformer, tokenization, vector-databases, volatility-modulated-spectral-surface

## Entity: lora-peft
- Title: LoRA and PEFT
- Category: LLM Infrastructure
- Language: en
- Key Concepts: LoRA, LoRA and Parameter-Efficient [[fine-tuning]] (PEFT), Other PEFT Techniques, low intrinsic rank, Zero Inference Latency, QLoRA, Portability, Prompt Tuning, Advantages of LoRA, rank $r \ll d$, The Mathematical Intuition, Multi-tenancy, VRAM Savings, Visualization: Rank vs. Parameters, Related Topics
- References: fine-tuning, inference-serving, quantization, tensor-decompositions, transformer-architecture

## Entity: mcp
- Title: MCP (Model Context Protocol)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Sampling, Tools, host, Versioning:, Real-world MCP servers (community ecosystem):, Overview, server, Prerequisites, Client, HTTP + SSE (Server-Sent Events):, Regulatory document corpora, Transport Layer, Key Trade-offs, Internal valuation memos and risk dashboards, Enterprise knowledge access:
- References: chain-of-thought, llm, llm-financial-analysis, rag, slm, speculative-decoding, tool-use
- Backlinks: agentic-patterns, agents, chain-of-thought, tool-use

## Entity: model-parallelism
- Title: Model Parallelism: Tensor and Pipeline
- Category: LLM Infrastructure
- Language: en
- Key Concepts: NVLink, Split unit, Hardware, 3. Comparison and 3D Parallelism, The Idea, Model Parallelism: Tensor vs. Pipeline, Pros, Pipeline Parallelism (PP), The Problem: Pipeline Bubbles, Model Parallelism, Tensor Parallelism (TP), 1. Tensor Parallelism (TP), Efficiency, Communication, 2. Pipeline Parallelism (PP)
- References: attention-mechanisms, distributed-training, fsdp, inference-serving, transformer-architecture
- Backlinks: fsdp

## Entity: quantization
- Title: Model Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: NF4: 4-Bit Normal Float, second-order optimization, llama.cpp, See Also, NF4, Absmax Quantization, Weight quantization, Activation-Aware Weight Quantization: AWQ, Post-Training Quantization: GPTQ, Weight vs. Activation Quantization, Integration with Inference Pipelines, symmetric, equal quantile spacing, Q4_K_M, GGUF Format and Local Inference
- References: attention-mechanisms, fine-tuning, inference-serving, llm, mixture-of-experts, neural-scaling-laws, speculative-decoding, transformer-architecture
- Backlinks: ai-theory/knowledge-distillation, bitnet, conformal-field-theory, federated-learning, fine-tuning, hamiltonian-mechanics, homological-algebra, inference-serving, linear-algebra, lora-peft, modern-quantization, pauli-exclusion-quantization, qat, qft-basic, qlora, quantization-error-math, quantization-ptq-information, research/mla-financial-reasoning, slm, small-ball-probabilities, vector-databases

## Entity: modern-quantization
- Title: Modern Quantization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Modern [[quantization]]: NF4, GPTQ, and AWQ, 5. FP8 and the Future, bitsandbytes, 1. The Challenge of Low Precision, 4. AWQ: Activation-aware Quantization, FP8, Visualization: Distribution-Aware Binning, Training, Result, Inversion Problem, Hessian, 3. GPTQ: Post-Training Quantization (PTQ), Normal (Gaussian) Distribution, Mechanism, 2. NormalFloat4 (NF4): Quantization for All
- References: fine-tuning, gpu-architecture, inference-serving, quantization
- Backlinks: deep-lob, gpu-architecture, qat, tensor-decompositions

## Entity: orm-prm
- Title: ORM vs PRM: Preference Learning
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 1. Outcome Reward Models (ORM), how to reward, Excellent, Implementation in [[rlhf]], each individual step, Visualization: Reward Density, PRM, The Pros, 2. Process Reward Models (PRM), Comparison: Accuracy on Complex Tasks, ORM vs PRM: Two Ways to Reward Reasoning, Inference-time Search, The Cons, Related Topics, Yes
- References: llm, mcts, prm, reasoning-models, rlhf

## Entity: paged-attention
- Title: PagedAttention and KV Cache
- Category: LLM Infrastructure
- Language: en
- Key Concepts: internal fragmentation, vLLM, Contiguous Allocation, 2x to 4x, KV Cache, Fragmentation, Blocks, share the same physical blocks, Unpredictability, Paging, 2. Prompt Sharing, Logical vs. Physical, PagedAttention and KV Cache Management, Copy-on-Write (CoW), The Problem: Memory Fragmentation
- References: attention-mechanisms, flash-attention, hardware-io-attention, inference-serving, llm
- Backlinks: attention-mechanisms, continuous-batching

## Entity: prompt-engineering
- Title: Prompt Engineering
- Category: LLM Infrastructure
- Language: en
- Key Concepts: DSPy, Prompt Sensitivity and Optimization, System message, Tree of Thoughts and Search, Limitations and Trade-offs, System Prompts and Jailbreaking, Reasoning and Acting (ReAct), Chain-of-Thought Prompting, Tree of Thoughts, Assistant turn, Zero-shot and Few-shot Learning, User turn, Structured Output and Grammar Constraints, APE, prompt optimization
- References: agents, evaluation-llms, fine-tuning, llm, meta-learning, rlhf, tool-use
- Backlinks: ai-theory/in-context-learning

## Entity: qat
- Title: Quantization Aware Training (QAT)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Step Size, 3. LSQ: Learned Step Size Quantization, 4. QAT vs. PTQ: When to use which?, QLoRA, 1. The Simulated [[quantization]] (Fake Quant), 2. Straight-Through Estimator (STE), Backward Pass, Visualization: STE Gradient Flow, Straight-Through Estimator (STE), QAT (Aware Training), 5. Modern Variant: QLoRA, The Core Problem, Forward Pass, PTQ (Post-Training), Related Topics
- References: automatic-differentiation, fine-tuning, gradient-hessian-jacobian, modern-quantization, quantization

## Entity: rag
- Title: RAG (Retrieval-Augmented Generation)
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Knowledge Graphs, Context Precision, Overview, Relational Reasoning, Faithfulness, Vector Search, Architecture Workflow, Cross-Encoder Reranker, GraphRAG: The Next Frontier, Visualization: Retrieval Precision, Keyword Search, Multi-Query, Retrieval (Hybrid Search), Mathematical Framework: RRF, Pre-Retrieval (Query Transformation)
- References: embedding-models, fine-tuning, llm, llm-financial-analysis, tool-use, vector-databases
- Backlinks: about, agents, chain-of-thought, context-length, embedding-models, fine-tuning, llm-financial-analysis, mcp, naive-bayes, nlp-financial-analysis, projects/llm-wiki, research/mla-financial-reasoning, slm, tool-use, vector-databases

## Entity: self-rewarding
- Title: Self-Rewarding Models
- Category: LLM Infrastructure
- Language: en
- Key Concepts: student, Response Generation, Llama 3, Reward Hacking, The Iterative Loop, [[dpo]]/[[fine-tuning]], Repeat, Mathematical Formulation: Iterative [[dpo]], Self-Rewarding Language Models, Data Curation, Self-Evaluation, teacher, Echo Chambers, Visualization: Performance Scaling, Risks and Limitations
- References: dpo, fine-tuning, prm, reasoning-models

## Entity: speculative-decoding
- Title: Speculative Decoding
- Category: LLM Infrastructure
- Language: en
- Key Concepts: 1. Medusa (Draft-less Speculative Decoding), Drafting, The Core Concept, Verifying, 2. EAGLE (Extrapolation Algorithm for Greater Language-model Efficiency), Medusa, Advanced Variations, lossless, Draft Model, memory-bound, Target Model, Accepting, The Workflow, Performance Gains, Mathematical Foundation: Rejection Sampling
- References: continuous-batching, inference-serving, kv-cache-compression, llm, multi-token-prediction, prm
- Backlinks: chain-of-thought, context-length, inference-serving, mcp, multi-token-prediction, quantization, tool-use

## Entity: tokenization
- Title: Tokenization
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Whitespace, Words, Byte-level BPE, Tokenization, Token Fertility and Inference Cost, Byte-level models, 3. Unigram Language Model, prunes, 1. Byte-Pair Encoding (BPE), Common Algorithms, Sub-word, Vocabulary Size vs. Perplexity, Fertility, Numbers, likelihood ratio
- References: attention-mechanisms, inference-serving, transformer-architecture

## Entity: tool-use
- Title: Tool Use / Function Calling
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Step 1 — Tool schema definition., Write tools, Tool-use as agent action space, Overview, Financial copilots:, Step 3 — Tool execution., Step 4 — Result injection., ToolBench / Gorilla, Tool use with streaming, Key Trade-offs, Tool Safety Architecture, Calendar and email agents:, Step 5 — Termination., Variants & Extensions, inference-time planning
- References: chain-of-thought, deep-rl-execution, fine-tuning, llm, llm-financial-analysis, mcp, rag, reinforcement-learning, speculative-decoding
- Backlinks: agentic-patterns, agents, chain-of-thought, mcp, prompt-engineering, rag, research/mla-financial-reasoning

## Entity: vector-databases
- Title: Vector Databases
- Category: LLM Infrastructure
- Language: en
- Key Concepts: pgvector, Managed vs. Self-hosted, Cosine similarity, IndexFlatL2, Layer assignment, Problem, Context, Similarity Metrics, Query, Construction, Pinecone, Advantages, See Also, and, Post-filter
- References: agents, embedding-models, inference-serving, llm, quantization, rag, transformer-architecture
- Backlinks: context-length, matryoshka-embeddings, rag

## Entity: weight-averaging
- Title: Weight Averaging and SWA
- Category: LLM Infrastructure
- Language: en
- Key Concepts: Weight Averaging and Stochastic Weight Averaging (SWA), flat minima, flatness, The Problem: Sharp Minima, Phase 1, Polyak-Ruppert Averaging (EMA), sharp minimum, Phase 2, Exponential Moving Average (EMA), Stochastic Weight Averaging (SWA), Related Topics, Visualization: Converging to the Center, Averaging, Why It Works: The Flatness Hypothesis
- References: fine-tuning, model-merging, training-dynamics

## Entity: preference-optimization-variants
- Title: Advanced Preference Optimization
- Category: Language Models
- Language: en
- Key Concepts: 3. ORM and PRM Integration, ORM (Outcome Reward Model), Beyond [[dpo]], 2. IPO (Identity Preference Optimization), Process-based, unpaired data, Outcome-based, Step-wise DPO, IPO, DPO, Related Topics, PRM (Process Reward Model), KTO, PPO, Prospect Theory
- References: dpo, prm, reasoning-models, rlhf
- Backlinks: synthetic-data-alignment

## Entity: language-models/safety/rlhf-dpo
- Title: Alignment: RLHF and DPO
- Category: Language Models
- Language: en
- Key Concepts: The Core Idea:, Complexity, PPO (Proximal Policy Optimization):, Reward Model (RM), [[dpo]] (Direct Preference Optimization), [[rlhf]] (Reinforcement Learning from Human Feedback), [[rlhf]] vs. DPO, Drawbacks:, Alignment, SFT (Supervised [[fine-tuning]]):, Compute, Constitutional AI, Reward Modeling:, Alignment: [[rlhf]] and [[dpo]], Safety and Constitutional AI
- References: constitutional-ai, dpo, finance/shannon-entropy, fine-tuning, llm, math/analysis-geometry/information-geometry, mechanistic-interpretability, rlhf

## Entity: bitnet
- Title: BitNet & 1.58-bit LLMs
- Category: Language Models
- Language: en
- Key Concepts: Scaling Laws, Training Complexity, Small Model Gap, Visualization, BitNet & 1.58-bit LLMs (Ternary [[quantization]]), Trade-offs, Memory Footprint, What Is It, How It Works, Throughput, Activation Quantization, Hardware Optimization, Ternary Weight [[quantization]], Related Topics, Energy Efficiency
- References: llm, mixture-of-experts, neural-scaling-laws, quantization, reasoning-models, slm, transformer-architecture

## Entity: code-models
- Title: Code Language Models
- Category: Language Models
- Language: en
- Key Concepts: Rare languages and frameworks, Tokenization, Multi-stage training, Test generation, Prerequisites, Docstring and comment generation, RLEF, Fill-in-the-Middle (FIM), Multi-file awareness, Code Language Models, Limitations, Mathematical Framework, Positional encoding, General pre-training, Cross-language translation
- References: attention-mechanisms, fine-tuning, llm, mixture-of-experts, pac-learning, slm, transformer-architecture
- Backlinks: multi-token-prediction

## Entity: constitutional-ai
- Title: Constitutional AI and RLAIF
- Category: Language Models
- Language: en
- Key Concepts: Generation, Phase 1: Supervised Learning (Critique and Revision), 2. The CAI Process, Revision, Scalability, [[fine-tuning]], Constitutional AI and RLAIF: Self-Aligning Systems, Constitutional AI (CAI), Transparency, Safety-Efficiency Frontier, Expensive, Phase 2: Reinforcement Learning (RLAIF), RLAIF, Visualization: The CAI Feedback Loop, Black-box
- References: fine-tuning, llm, mechanistic-interpretability, reinforcement-learning, rlhf
- Backlinks: language-models/safety/rlhf-dpo, mechanistic-interpretability

## Entity: embedding-models
- Title: Embedding Models
- Category: Language Models
- Language: en
- Key Concepts: InfoNCE / NT-Xent loss, Cross-encoder-mined negatives, Contrastive loss on triplets, Matryoshka Representation Learning (MRL), Sentence similarity, Multi-vector representations, Limitations, Mathematical Framework, Isotropy collapse, Training Paradigm, Hard negative mining, Architecture, Asymmetric architectures, Semantic search, Visualization
- References: attention-mechanisms, finance/shannon-entropy, llm, mixture-of-experts, rag, transformer-architecture, vlm
- Backlinks: contrastive-learning, llm, matryoshka-embeddings, rag, slm, vector-databases, vlm

## Entity: llm
- Title: Large Language Models (LLMs)
- Category: Language Models
- Language: en
- Key Concepts: 1. Pre-training., Chinchilla scaling law, Residual connections, Reasoning gaps, Feed-forward network (FFN), decoder-only [[transformer-architecture|transformer]], Large Language Models (LLMs), Static knowledge, Context window, Hallucination, Limitations, Mathematical Framework, Positional encoding, Autoregressive generation, Training Paradigm
- References: attention-mechanisms, dpo, embedding-models, fine-tuning, mechanistic-interpretability, mixture-of-experts, model-merging, neural-scaling-laws, preference-optimization, prm, reasoning-models, rlhf, slm, transformer-architecture
- Backlinks: about, agentic-patterns, agents, attention-mechanisms, bert, bitnet, chain-of-thought, code-models, constitutional-ai, context-length, continuous-batching, distributed-training, dpo, embedding-models, evaluation-llms, f-divergences, federated-learning, flash-attention, generative-models, gnn-credit-risk, gpt-architecture, inference-serving, language-models/safety/rlhf-dpo, llm-financial-analysis, many-body-tensor-networks, math/analysis-geometry/information-geometry, math/cantor-diagonal, math/godel-incompleteness, matryoshka-embeddings, mcp, mechanism-design, meta-learning, mixture-of-experts, ml-options-pricing, model-merging, multi-token-prediction, naive-bayes, nlp-financial-analysis, orm-prm, paged-attention, positional-encodings, ppo, projects/llm-wiki, prompt-engineering, quantization, rag, reasoning-models, rlhf, slm, sparse-autoencoders, speculative-decoding, state-space-models, superposition, test-time-scaling, tool-use, vector-databases, vlm

## Entity: matryoshka-embeddings
- Title: Matryoshka Embeddings
- Category: Language Models
- Language: en
- Key Concepts: Nested Loss Function, Vector Search, Matryoshka Embeddings (MRL), Visualization, Low Latency, What Is It, On-device AI, How It Works, Hierarchical Navigation, Related Topics, Use Cases, Storage Savings, Adaptive Accuracy/Efficiency Trade-off, No Re-indexing, Benefits
- References: embedding-models, llm, vector-databases, vlm

## Entity: mixture-of-experts
- Title: Mixture of Experts (MoE)
- Category: Language Models
- Language: en
- Key Concepts: Expert parallelism, Parameter efficiency, Memory cost, Token dropping and inconsistency, Prerequisites, MoE layer, Router initialization, Memory vs. compute asymmetry, Expert utilization and load imbalance, Mixture of Experts (MoE), Limitations, Expert routing instability, Mathematical Framework, $N$ expert FFNs, Training Paradigm
- References: fine-tuning, llm, mechanistic-interpretability, neural-scaling-laws, slm, transformer-architecture
- Backlinks: bayesian-nonparametrics, bitnet, code-models, embedding-models, inference-serving, llm, mla, model-merging, moe-routing, quantization, slm, state-space-models, transformer-architecture

## Entity: moe-routing
- Title: MoE Routing and Specialization
- Category: Language Models
- Language: en
- Key Concepts: Routing Challenges, 1. Expert Collapse (Winner-Take-All), experts choose tokens, shared experts, Top-k Routing, Mixture of Experts (MoE), Advanced Routing Strategies, Router, 2. Expert Overflow, 2. Expert Choice Routing, 1. Switch [[transformer-architecture|Transformer]] (Top-1), Visualization: Token Distribution, 3. DeepSeek-V3: Multi-Head Latent [[attention-mechanisms|Attention]] & DeepSeekMoE, Related Topics, MoE Routing and Expert Specialization
- References: attention-mechanisms, mixture-of-experts, mla, transformer-architecture
- Backlinks: dl-compilers

## Entity: model-merging
- Title: Model Merging & FrankenMoE
- Category: Language Models
- Language: en
- Key Concepts: Base Model, Advantages and Limitations, Expert Models, Reset, Merging Techniques, 3. DARE (Drop And REscale), 2. TIES-Merging, FrankenMoE: Creating Sparse Models, Model Merging & FrankenMoE, MergeKit, Gate/Router, Performance, 1. SLERP (Spherical Linear Interpolation), Compute, Resolve signs
- References: fine-tuning, inference-serving, llm, mixture-of-experts
- Backlinks: llm, weight-averaging

## Entity: mla
- Title: Multi-Head Latent Attention (MLA)
- Category: Language Models
- Language: en
- Key Concepts: large-scale MoE, 1. Compression, Content Part, Grouped-Query [[attention-mechanisms|Attention]] (GQA), Decoupled Rotary Positional Embeddings, MHA, GQA, Position Part, 2. Expansion, Why It Matters, ~5% - 10%, latent vector, MLA, Comparison: KV-Cache Per Token, DeepSeek (V2/V3)
- References: attention-mechanisms, inference-serving, mixture-of-experts
- Backlinks: moe-routing, rope-scaling

## Entity: multi-token-prediction
- Title: Multi-Token Prediction
- Category: Language Models
- Language: en
- Key Concepts: Better Long-Term Dependency, Shared Trunk, Sample Efficiency, Inference Speedup, $n$ Prediction Heads, Architecture: Shared Trunk and Independent Heads, Improved Reasoning, The Core Concept, The Modified Loss Function, Related Topics, Multi-Token Prediction (MTP), Why It Works, Meta AI (2024), Benefits
- References: code-models, finance/shannon-entropy, llm, speculative-decoding, training-dynamics, transformer-architecture
- Backlinks: speculative-decoding

## Entity: positional-encodings
- Title: Positional Encodings
- Category: Language Models
- Language: en
- Key Concepts: RoPE, Learned absolute., ALiBi (Press et al. 2022)., YaRN, Positional Encodings, RoPE: Rotary Position Embedding, Positional encodings, Relative Positional Encodings, T5 Relative Bias., Extrapolation Beyond Training Length, Sinusoidal (Vaswani et al. 2017)., Related Topics, Absolute Positional Encodings, Context Extension: YaRN, Comparison Summary
- References: attention-mechanisms, fine-tuning, llm, neural-scaling-laws, transformer-architecture
- Backlinks: nerf, rope-scaling

## Entity: prm
- Title: Process-Based Supervision
- Category: Language Models
- Language: en
- Key Concepts: PRM vs. ORM Performance, Why PRMs Matter, PRM, DeepSeek-R1, Hallucination Reduction, Real-World Examples, The Mathematical Intuition, OpenAI PRM800K, What Is It, Process Reward Models (PRMs), Process-Based Supervision, Outcome-Based Supervision (ORMs), ORM, Search at Inference Time, Credit Assignment
- References: chain-of-thought, reasoning-models, rlhf
- Backlinks: bayes-theorem, llm, orm-prm, preference-optimization-variants, self-rewarding, speculative-decoding, test-time-scaling

## Entity: reasoning-models
- Title: Reasoning Models
- Category: Language Models
- Language: en
- Key Concepts: The "Aha" Moment, Rejection Sampling & Distillation, Complex Mathematics, Best For, Latency, Key Capabilities, OpenAI o1, Cost, Mathematical Framework: GRPO, Self-Correction, Systematic Coding, How They Are Trained, Trade-offs, User Experience, Reinforcement Learning (RL) on Reasoning Traces
- References: chain-of-thought, llm, neural-scaling-laws, rlhf
- Backlinks: bitnet, llm, orm-prm, preference-optimization-variants, prm, self-rewarding, test-time-scaling, type-theory

## Entity: rope-scaling
- Title: RoPE Scaling & YaRN
- Category: Language Models
- Language: en
- Key Concepts: RoPE Scaling, 2. NTK-aware Scaling, PagedAttention, Dimension Sensitivity, Comparison of Methods, Techniques, [[attention-mechanisms|Attention]] Logit Decay, base frequency, FlashAttention-2, Memory, 1. Linear Interpolation, Retrieval Accuracy, Compute, Practical Constraints, 3. YaRN (Yet another RoPE extensioN)
- References: attention-mechanisms, flash-attention, inference-serving, mla, positional-encodings, transformer-architecture

## Entity: slm
- Title: Small Language Models (SLMs)
- Category: Language Models
- Language: en
- Key Concepts: Curriculum training, [[quantization]]-aware training, Distillation ceiling, QLoRA, Weaker multi-step reasoning, Knowledge distillation, Latency, Small Language Models (SLMs), Prerequisites, Tied embeddings, Smaller knowledge base, Sliding Window [[attention-mechanisms|Attention]] (SWA), LoRA [[fine-tuning]], Limitations, Mathematical Framework
- References: attention-mechanisms, embedding-models, finance/shannon-entropy, fine-tuning, inference-serving, llm, mechanistic-interpretability, mixture-of-experts, neural-scaling-laws, quantization, rag, transformer-architecture
- Backlinks: bitnet, code-models, llm, mcp, mixture-of-experts, synthetic-data-alignment

## Entity: language-models/mamba-ssm
- Title: State Space Models (Mamba)
- Category: Language Models
- Language: en
- Key Concepts: Inference Speed:, The Mamba Innovation: Selection Mechanism, The [[transformer-architecture|Transformer]] Bottleneck, Selection, Why Mamba Matters, Limitations, State Space Models and Mamba Architecture, Scalable Context:, linear-time complexity, Related Topics, Hardware-Aware Design:, Mamba, The SSM Framework, State Space Models (SSM), Selectively
- References: attention-mechanisms, flash-attention, inference-serving, linear-algebra, time-series, transformer-architecture

## Entity: synthetic-data-alignment
- Title: Synthetic Data & Self-Alignment
- Category: Language Models
- Language: en
- Key Concepts: 2. Constitutional AI (Self-Correction), Synthetic Data & Self-Alignment, RL Phase, Model Collapse, Comparison Table, Synthetic Data, The Data Bottleneck, Self-Alignment, [[fine-tuning]], Input/Output Generation, Repeat, Generate, Seed Tasks, Self-Instruct, Distillation
- References: fine-tuning, preference-optimization-variants, rlhf, slm

## Entity: test-time-scaling
- Title: Test-Time Scaling
- Category: Language Models
- Language: en
- Key Concepts: 3. Verification-Guided Search, Beam Search, Step-wise Beam Search, Latency, 2. Verification and Reward Models, Reasoning Breakthroughs, Test-Time Scaling (Inference-Time Compute), Cost, Best-of-N (Rejection Sampling), Benefits, Complexity, Trade-offs, Error Correction, Tree Search (MCTS), Look-ahead Search
- References: chain-of-thought, llm, neural-scaling-laws, prm, reasoning-models

## Entity: training-dynamics
- Title: Training Dynamics
- Category: Language Models
- Language: en
- Key Concepts: Loss Spikes, Sharp vs. flat minima, Monitoring and Diagnostics, Capability emergence, continual training, Loss Landscape Geometry, Middle training, Train/val loss gap, proxy model hyperparameter search, Learning Rate Schedule, See Also, Warmup, Maximal Update Parameterisation (muP), barriers, WSD (Warmup-Stable-Decay)
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, finance/shannon-entropy, fine-tuning, neural-scaling-laws, transformer-architecture
- Backlinks: curriculum-learning, morse-theory, multi-token-prediction, weight-averaging

## Entity: vlm
- Title: Vision-Language Models (VLMs)
- Category: Language Models
- Language: en
- Key Concepts: Compositional generalization, Stage 1 — Visual-language alignment., Linear projector, Spatial reasoning, Contrastive objective (CLIP), Multi-image and video, Prerequisites, Cross-modal connector, Video temporal reasoning, Hallucination, Contrastive VLMs, Visual hallucination, Language decoder, Limitations, Mathematical Framework
- References: attention-mechanisms, embedding-models, llm, pac-learning, transformer-architecture
- Backlinks: embedding-models, matryoshka-embeddings, vision-transformers

## Entity: math/large-deviations-cramer
- Title: Large Deviations and Cramer's Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: empirical distribution, Cramer rate function, KL divergence, Upper and lower bounds, tilt, cumulant generating function, large, Examples, how fast, the probability of ruin, exponentially fast, Large Deviations and Cramer's Theorem, 2. Information theory., Kullback-Leibler divergence, Chernoff bound
- References: central-limit-theorem, characteristic-functions, convex-optimization, cornish-fisher-cvar, finance/shannon-entropy, law-iterated-logarithm, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/lundberg-cramer-ruin
- Backlinks: extreme-value-theory, math/branching-processes, math/concentration-inequalities, math/contiguity-measures, math/coupling-methods, math/doleans-dade-exponential, math/geometric-ergodicity, math/interacting-particle-systems, math/local-limit-theorems, math/lundberg-cramer-ruin, math/percolation, math/poisson-approximation, math/random-graphs, math/random-walks, math/renewal-theory, math/wiener-hopf-factorization, mgf, wentzell-freidlin

## Entity: math/lundberg-cramer-ruin
- Title: Lundberg-Cramer Ruin Theorem
- Category: Large Deviations
- Language: en
- Key Concepts: 2. Mixture of exponentials., 5. Reliability theory., Cramer rate function, 1. Exponential claims., light-tailed, one of the first applications of [[large-deviations-cramer|large deviations theory]], The Cramer-Lundberg model, The Lundberg coefficient, Historical context, Heavy-tailed distributions., Extensions, 4. Queueing theory., Non-Poisson claim arrivals., Limitations, 2. Operational risk (Basel III).
- References: extreme-value-theory, finance/stable-distributions, finance/value-at-risk, math/discrete-martingales, math/large-deviations-cramer
- Backlinks: math/large-deviations-cramer, math/poisson-approximation, math/renewal-theory, math/wiener-hopf-factorization

## Entity: math/central-limit-theorem
- Title: Central Limit Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: history of mathematics, Lindeberg's condition., Generalizations for dependent variables, function of time, Functional CLT (Donsker, 1951)., Berry-Esseen theorem (1941)., in distribution, their large sums look the same, fail, practically useful, What CLT does not cover, Multivariate and functional CLT, independent but not necessarily identically distributed, "functional" version of the CLT, CLT for martingale differences
- References: arch-models, brownian-motion, characteristic-functions, finance/crr-model, finance/stable-distributions, finance/stylized-facts-returns, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/local-limit-theorems, math/poisson-approximation, math/weak-convergence-prokhorov

## Entity: math/functional-limit-theorems
- Title: Functional Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: Queueing theory., Functional Limit Theorems, Population genetics., Meta-theorem., Theorem., Theorem (Aldous-Rebolledo)., Theorem (Donsker, 1951)., read off from the predictable triplets, The Role of Skorokhod Topology, Tightness Criteria, Related Articles, High-frequency finance., Convergence of Discrete to Continuous Semimartingales, Theorem (Rebolledo, 1980)., Donsker's Invariance Principle
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, martingale-clt, math/convergence-semimartingales, math/skorokhod-topology, math/triangular-arrays-processes, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-problem, math/predictable-compensator, math/random-walks, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/infinitely-divisible-distributions
- Title: Infinitely Divisible Distributions
- Category: Limit Theorems
- Language: en
- Key Concepts: Theorem., Levy measure, The Levy Measure, infinitely divisible, De Finetti's theorem (for ID distributions)., Theorem (Levy-Khintchine)., Relation to Stable Distributions, Role in Jacod-Shiryaev's Limit Theory, Kolmogorov's formula., Connection to Processes with Independent Increments, Infinitely Divisible Distributions, Kolmogorov's Formula and De Finetti's Theorem, The Levy-Khintchine Representation, Related Articles, canonical triplet
- References: central-limit-theorem, characteristic-functions, finance/levy-processes, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, levy-ito-decomposition, math/subordinators, math/triangular-arrays-processes

## Entity: math/law-of-large-numbers
- Title: Law of Large Numbers
- Category: Limit Theorems
- Language: en
- Key Concepts: substantially stronger, independent of the dimension, exponential, Birkhoff-Khintchine ergodic theorem, the average return of a diversified portfolio, Monte Carlo, What the LLN does not say, does not say, Proof (Chebyshev), the average loss across a portfolio of policies, rates, Strengthenings and generalizations, Law of Large Numbers, Law of the iterated logarithm, weak
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/markowitz-mean-variance, law-iterated-logarithm, math/borel-cantelli-zero-one, math/ergodic-theorems-birkhoff, math/kolmogorov-probability-axioms
- Backlinks: convergence-types, de-finetti-exchangeability, finance/coherent-risk-measures, finance/cointegration, finance/quasi-monte-carlo, math/borel-cantelli-zero-one, math/branching-processes, math/central-limit-theorem, math/concentration-inequalities, math/discrete-markov-chains, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/large-deviations-cramer, math/local-asymptotic-normality, math/local-limit-theorems, math/martingale-clt, math/poisson-approximation, math/renewal-theory, math/stochastic-recursive-sequences, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, monte-carlo-integration, slutsky-theorem

## Entity: math/local-limit-theorems
- Title: Local Limit Theorems
- Category: Limit Theorems
- Language: en
- Key Concepts: skewness, Proof sketch., Gnedenko's local theorem for lattice distributions, Number theory., Statistical mechanics., densities, Local theorems for large deviations, Theorem (Gnedenko, 1948)., Rates of convergence, The non-lattice (density) case, Stone's general local theorem, Combinatorics and asymptotic enumeration., Random walks on lattices., Related Articles, lattice distribution
- References: central-limit-theorem, characteristic-functions, finance/stable-distributions, math/functional-limit-theorems, math/large-deviations-cramer, math/law-of-large-numbers, math/spectral-theory-operators, math/weak-convergence-prokhorov
- Backlinks: math/central-limit-theorem, math/stein-method

## Entity: math/poisson-approximation
- Title: Poisson Approximation
- Category: Limit Theorems
- Language: en
- Key Concepts: Proof sketch (direct calculation)., Theorem (Chen-Stein bound)., Coupon collector., Extreme values., Proof sketch of Chen-Stein, The Le Cam inequality, Theorem., Theorem (Le Cam)., Hashing and computer science., Related Articles, Classical Poisson limit theorem, Compound Poisson approximation., Random permutations., Insurance mathematics., The Chen-Stein method
- References: central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/large-deviations-cramer, math/law-of-large-numbers, math/lundberg-cramer-ruin, math/renewal-theory
- Backlinks: math/central-limit-theorem, math/random-graphs, math/stein-method

## Entity: math/stable-convergence
- Title: Stable Convergence
- Category: Limit Theorems
- Language: en
- Key Concepts: Identification:, Proof Sketch, Theorem (Stable CLT)., Characteristic function method:, Definition, random, Role in Jacod-Shiryaev's Framework, Power variations, bipower variation, and other functionals, mixed Gaussian, Comparison., mixing convergence, Why Stable Convergence Matters, joint convergence, Realized volatility CLT., Related Articles
- References: characteristic-functions, heston-model, martingale-clt, math/convergence-semimartingales, math/discrete-martingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: extreme-value-theory, math/local-asymptotic-normality

## Entity: math/weak-convergence-prokhorov
- Title: Weak Convergence and Prokhorov's Theorem
- Category: Limit Theorems
- Language: en
- Key Concepts: Almost surely, weak convergence of distributions, 5. Bayesian statistics:, Definition, Why tightness, Theorem (Skorokhod)., 1. Central limit theorem:, In $L^p$, 3. Convergence of the binomial model to Black-Scholes:, fail, In distribution, too restrictive, relatively compact in the weak topology, In probability, 4. Empirical distributions:
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/asymptotic-arbitrage-large-markets, finance/crr-model, math/kolmogorov-probability-axioms, math/law-of-large-numbers
- Backlinks: empirical-processes, math/central-limit-theorem, math/contiguity-measures, math/convergence-semimartingales, math/coupling-methods, math/functional-limit-theorems, math/glivenko-cantelli, math/hellinger-processes, math/infinitely-divisible-distributions, math/local-limit-theorems, math/skorokhod-topology, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/wiener-hopf-factorization

## Entity: determinant-properties
- Title: Determinant Properties
- Category: Linear Algebra
- Language: en
- Key Concepts: Volume:, Multiplicativity:, Transpose:, Inverse:, Overview, Key Properties

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
- Key Concepts: Trace of Derivative:, Cyclic Property:, Overview, Eigenvalue Sum:, Linearity:, Identities

## Entity: vector-norms
- Title: Vector Norms
- Category: Linear Algebra
- Language: en
- Key Concepts: L-p Norms, Overview, $L_2$ Norm:, $L_\infty$ Norm:, $L_1$ Norm:

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
- Key Concepts: Spread in Different Markets, Overview, Determinants of Spread, Adverse Selection Costs, Information Asymmetry, Forex, Trading Volume, Order Processing Costs, Equities, offer, Components of the Spread, bid, Effective Spread, Metrics, Crypto
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
- Key Concepts: See Also, Iceberg Orders:, 1. HFT Order Types, Post-Only:, HFT Order Types & Dark Pools, Midpoint Peg:
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: cryptographic-zero-knowledge-in-finance

## Entity: high-frequency-trading-and-orderbook
- Title: High-Frequency Trading (HFT) & Order Book Infrastructure
- Category: Market Microstructure
- Language: en
- Key Concepts: See Also, VPIN (Volume-Synchronized Probability of Toxicity):, Protocols:, High-Frequency Trading (HFT) & Order Book Infrastructure, FPGA & ASICs:, 1. HFT Tech Stack, Colocation:, 2. Queue Priority & VPIN, FIFO vs Pro-Rata:
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
- Key Concepts: See Also, 3. Asymmetric Information & Adverse Selection, Bid Price ($P_b$):, Trading Takeaway:, Bid-Ask Spread ($\delta$):, 1. Fundamentals & Spreads, Ask Price ($P_a$):, 2. Avellaneda-Stoikov Inventory Model, Market Making Mechanics & Asymmetric Information, Mid Price ($P_m$):
- References: course-quant-trading, optimal-stopping-and-kelly, option-greeks-and-volatility
- Backlinks: algorithmic-execution-twap-vwap, crypto-quant-trading-and-amm-curves, deep-reinforcement-learning-for-trading, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-trading-and-orderbook, limit-order-book-matching-engine-design, market-microstructure-noise-and-realized-volatility, optimal-stopping-and-kelly, option-greeks-and-volatility, order-book-dynamics-and-lOB-modeling, quant-brainteasers-handbook, quant-interview-cheat-sheet, volatility-trading-and-variance-swaps

## Entity: market-microstructure
- Title: Market Microstructure
- Category: Market Microstructure
- Language: en
- Key Concepts: Market Participants, effective spread, inventory risk, Temporary Impact, Limit Order, Overview, Limit Order Book, Noise Traders (Liquidity Traders), Market Impact, Adverse Selection, Kyle's Model (1985), Liquidity, Reinforcement Learning, adverse selection risk, Deep LOB
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
- Key Concepts: Matching Engine Design & Kernel Bypass, See Also
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics

## Entity: order-book-dynamics-and-lOB-modeling
- Title: Order Book Dynamics & LOB Modeling
- Category: Market Microstructure
- Language: en
- Key Concepts: Order Book Dynamics & LOB Modeling, 1. Hawkes Processes, 2. Volume Imbalance Ratio, See Also
- References: course-quant-trading, high-frequency-trading-and-orderbook, quant-market-making-mechanics
- Backlinks: machine-learning-for-quant-trading

## Entity: math/martingale-clt
- Title: Central Limit Theorem for Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: Limitations and subtleties, 4. Prediction errors., 3. Maximum-likelihood score., random, 2. Squares minus conditional variances., Comparison with CLT for stationary processes, 5. Martingale transforms., 5. Bayesian algorithms., Normalization condition, Examples of martingale differences, strict generalization, Lindeberg condition, Important variants, Related Articles, Theorem (Lévy-Doob-Lindeberg for martingales)
- References: arch-models, brownian-motion, central-limit-theorem, convex-optimization, garch-models, math/discrete-martingales, math/ergodic-theorems-birkhoff, math/law-of-large-numbers

## Entity: math/discrete-martingales
- Title: Discrete Martingales
- Category: Martingale Theory
- Language: en
- Key Concepts: Insurance and credit risk theory, Definition, Martingale property, Doob decomposition, Discrete Itô formula, 1. Symmetric random walk., 2. Conditional expectation., Examples, American option pricing, Doob's optional stopping theorem., Martingale proofs of the strong [[law-of-large-numbers|LLN]], martingale, discrete analogue of the Doob-Meyer decomposition, 1. Financial mathematics., Doob's inequalities
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/optimal-stopping-american, law-iterated-logarithm, math/conditional-expectation-sigma, math/discrete-markov-chains, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/branching-processes, math/conditional-expectation-sigma, math/discrete-markov-chains, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/lundberg-cramer-ruin, math/martingale-clt, math/martingale-representation, math/optimal-stopping-markov, math/predictable-compensator, math/random-walks, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/stable-convergence, math/wiener-hopf-factorization, stochastic-processes

## Entity: math/doleans-dade-exponential
- Title: Doleans-Dade Stochastic Exponential
- Category: Martingale Theory
- Language: en
- Key Concepts: Yor's Formula, Proof sketch., not, Consequence., Exponential martingales., Connection to Girsanov's Theorem, Definition and the Equation, stochastic exponential, Theorem., Explicit Formula, Related Articles, Novikov's condition., Theorem (Yor)., Likelihood ratios in statistics., Continuous semimartingale.
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, math/discrete-martingales, math/large-deviations-cramer, stochastic-differential-equations
- Backlinks: conditionally-gaussian-processes, levy-ito-decomposition, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/convergence-stochastic-integrals, math/density-processes, math/hellinger-processes, math/martingale-problem, math/martingale-representation, math/sequential-hypothesis-testing, nonlinear-filtering, risk-neutral-valuation

## Entity: math/doob-meyer-decomposition
- Title: Doob-Meyer Decomposition
- Category: Martingale Theory
- Language: en
- Key Concepts: Examples:, The Continuous-Time Theorem, optional decomposition, Theorem (Doob)., The Compensator, Class (D) and Uniform Integrability, The Optional Decomposition, Lenglart's inequality, compensator, Why this matters:, Historical Remark, dual predictable projection, Doob-Meyer Decomposition, optional, Related Articles
- References: brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability
- Backlinks: local-time-tanaka, math/density-processes, math/martingale-representation, math/predictable-compensator, math/quadratic-variation

## Entity: math/martingale-representation
- Title: Martingale Representation Theorem
- Category: Martingale Theory
- Language: en
- Key Concepts: market incompleteness, Backward SDEs., The Clark-Ocone Formula, Wiener functionals., attainable, Market Completeness, Clark-Ocone formula, Theorem (Clark-Ocone)., Proof Strategy, Related Articles, market completeness, Multiple Brownian Motions, Hedging and replication., innovation representation, Martingale Representation Theorem
- References: black-scholes, brownian-motion, finance/girsanov-semimartingales, finance/levy-processes, hidden-markov-models, innovation-process, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, nonlinear-filtering, stochastic-differential-equations
- Backlinks: clark-ocone, feynman-kac, math/absolute-continuity-process-measures, math/backward-sde, stochastic-processes

## Entity: math/optimal-stopping-markov
- Title: Optimal Stopping of Markov Chains
- Category: Martingale Theory
- Language: en
- Key Concepts: best, 5. Machine learning., value function, Quickest detection of a regime change, smallest, Continuation region:, Bellman equation, stop now, Optimal Stopping of Markov Chains, fixed point, 4. Quality control and maintenance., Problem., Bellman optimality equation, Observation 1., Theorem.
- References: finance/black-scholes-derivations, finance/crr-model, finance/optimal-stopping-american, math/discrete-markov-chains, math/discrete-martingales, reinforcement-learning
- Backlinks: local-time-tanaka

## Entity: optimal-stopping-and-kelly
- Title: Kelly Criterion & Optimal Stopping Theory
- Category: Math & Game Theory
- Language: en
- Key Concepts: See Also, 1. Kelly Criterion, Kelly Criterion & Optimal Stopping Theory, 2. Optimal Stopping & Secretary Problem
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
- Key Concepts: Continuity from below, 1. The Probability Space $(\Omega, \mathcal{F}, P)$, $\sigma$-algebra ($\mathcal{F}$), 2. Kolmogorov's Axioms, Axiomatic Probability: The Kolmogorov Foundation, Monotonicity, events, 4. Why Measure Theory?, Probability Measure ($P$), Countable Additivity ($\sigma$-additivity), Complement Rule, Bertrand's Paradox, Normalization, 3. Derived Properties, Sample Space ($\Omega$)
- References: conditional-probability, measure-theory

## Entity: bayesian-linear-regression
- Title: Bayesian Linear Regression
- Category: Math Foundations
- Language: en
- Key Concepts: The Model, Predictive Distribution, conjugate, likelihood, Bayesian Linear Regression, The Posterior Distribution, prior

## Entity: boolean-algebra
- Title: Boolean Algebra & Circuit Logic
- Category: Math Foundations
- Language: en
- Key Concepts: Karnaugh Maps, Karnaugh map (K-map), true, false, Complexity Basics, NOT, Logic Gates, AND
- References: recursion-recurrence

## Entity: integration-techniques
- Title: Calculus: Advanced Integration Techniques
- Category: Math Foundations
- Language: en
- Key Concepts: Partial Fractions, Trigonometric Substitution, Integration by Parts
- References: coordinate-systems
- Backlinks: generating-functions

## Entity: category-theory-ml
- Title: Category Theory for Machine Learning
- Category: Math Foundations
- Language: en
- Key Concepts: lenses, The Para Construction, Lens, Backward:, Para, Learning as a Morphism, chain rule, What Is It, Forward:, Categorical Cybernetics, Lenses and [[automatic-differentiation|Backpropagation]], Related Topics, DERIVATION: [[automatic-differentiation|Backpropagation]] as Lens Composition, Category Theory for Machine Learning, Optics
- References: automatic-differentiation, manifold-learning, topos-theory, type-theory

## Entity: conditional-probability
- Title: Conditional Probability and Total Probability
- Category: Math Foundations
- Language: en
- Key Concepts: 3.2 The Theorem, Conditional Probability and the Law of Total Probability, Likelihood, Posterior, 2. The Multiplication Rule, 3. Law of Total Probability (LTP), 4. Bayes' Theorem, 5. Example: Diagnostic Testing, Chain Rule, Bayes' Theorem, Prior, conditional probability of $A$ given $B$, 1. Definition of Conditional Probability, 1.1 Intuition: Shrinking the Sample Space, 3.1 Definition of a Partition
- References: bayes-theorem, markov-chains
- Backlinks: axiomatic-probability

## Entity: continuous-random-variables
- Title: Continuous Random Variables
- Category: Math Foundations
- Language: en
- Key Concepts: CDF, 5. Common Continuous Distributions, 3. Expected Value and Variance, 1. Probability Density Function (PDF), Intuition, Continuous Random Variable, PDF, Normal($\mu, \sigma^2$), 2. Cumulative Distribution Function (CDF), 4. Transformation of Variables, 1.1 Properties of the PDF, Cauchy($x_0, \gamma$), Related Topics, Exponential($\lambda$), Uniform($a, b$)
- References: discrete-random-variables, joint-distributions, measure-theory
- Backlinks: discrete-random-variables

## Entity: coordinate-systems
- Title: Coordinate Systems & Transforms
- Category: Math Foundations
- Language: en
- Key Concepts: polar coordinates, The Jacobian Determinant, spherical coordinates, Polar and Spherical Coordinates, Jacobian determinant
- References: implicit-function-theorem
- Backlinks: implicit-function-theorem, integration-techniques

## Entity: covariance-correlation
- Title: Covariance, Correlation, and Independence
- Category: Math Foundations
- Language: en
- Key Concepts: ranks, Example, Positive Covariance, Spearman ($\rho_s$), Independence $\implies$ Zero Correlation, Zero Correlation $\not\implies$ Independence, Pearson, 4. Independence vs. Zero Correlation, 2. Pearson Correlation Coefficient, Covariance, Units, 1. Covariance, 2.1 Properties, 5. Independence, linear
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
- Key Concepts: Discrete Random Variable, Probability Mass Function (PMF), Binomial($n, p$), Linearity of Expectation, discrete, 2.1 Properties of the PMF, 3. Cumulative Distribution Function (CDF), 1. Formal Definition, Law of the Unconscious Statistician (LOTUS), Discrete Random Variables, 6. Common Discrete Distributions, 2. Probability Mass Function (PMF), CDF, Geometric($p$), 5. Variance and Standard Deviation
- References: continuous-random-variables, lln-clt
- Backlinks: continuous-random-variables

## Entity: eigendecomposition-vs-svd
- Title: Eigenvalue Decomposition vs. SVD
- Category: Math Foundations
- Language: en
- Key Concepts: Applicability:, Singular Value Decomposition (SVD), Eigenvalue Decomposition (EVD), right singular vectors, Orthogonality:, Eigenvalue Decomposition vs. SVD, Domain and Codomain:, singular values, Technical Comparison, left singular vectors, Spectral Theorem:
- References: math/spectral-theory-operators, pca-math
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: exponential-families
- Title: Exponential Families
- Category: Math Foundations
- Language: en
- Key Concepts: Variance:, Canonical Form, Mean:, log-partition function, natural (or canonical) parameter, Exponential Families, Examples, Properties of the Log-Partition Function, sufficient statistic, Role in Machine Learning
- Backlinks: course-math-for-ai, distributions-zoo, fisher-information, math/bayesian-asymptotics, math/cramer-rao-bound, math/m-estimators, math/minimax-estimation, math/multiple-testing, math/neyman-pearson, math/semiparametric-efficiency, math/u-statistics, maximum-entropy

## Entity: fundamental-inequalities
- Title: Fundamental Inequalities: Markov & Chebyshev
- Category: Math Foundations
- Language: en
- Key Concepts: 1. Markov's Inequality, Fundamental Inequalities: Markov & Chebyshev, Sharpness, Chernoff Bounds, Related Topics, 2. Chebyshev's Inequality, 3. Tightness and Bounds, Proof
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
- Key Concepts: Adjacency Matrices, Path:, Paths and Trees, adjacency matrix, Tree:
- References: bayesian-networks, sparse-matrices
- Backlinks: sparse-matrices

## Entity: group-theory-basics
- Title: Group Theory Basics
- Category: Math Foundations
- Language: en
- Key Concepts: Identity:, Inverse:, Associativity:, Ring:, Field:, group, Closure:, Groups, Rings and Fields
- References: formal-proof-techniques

## Entity: homotopy-type-theory
- Title: Homotopy Type Theory (HoTT)
- Category: Math Foundations
- Language: en
- Key Concepts: Program Synthesis:, Structural Learning:, Homotopy Theory, h-Levels (Homotopy Levels), The Univalence Axiom, $h=1$ (Groupoids):, MATHEMATICAL CONCEPT: Path Induction, The Identity Type as a Path Space, $h=0$ (Sets):, Univalent Foundations, Relevance to AI and Program Synthesis, Homotopy Type Theory (HoTT), Univalence Axiom, Formal Verification:, Intensional Type Theory
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
- Key Concepts: inner product space, Frobenius Norm, $L_1$ Norm (Manhattan distance):, $L_\infty$ Norm (Chebyshev norm):, Inner Product Spaces & Norms, $L_p$ Norms, $L_2$ Norm (Euclidean norm):, Dual Norms
- References: eigendecomposition-vs-svd, kkt-conditions, pca-math

## Entity: jensen-inequality
- Title: Jensen's Inequality
- Category: Math Foundations
- Language: en
- Key Concepts: A. Information Theory, Jensen's Inequality, B. Machine Learning: ELBO and EM-Algorithm, [[expectation-maximization|EM algorithm]], Related Topics, 2. Geometric Proof, 1. Formal Statement, Evidence Lower Bound (ELBO), 3. Applications
- References: convexity, expectation-maximization, finance/shannon-entropy, information-theory-basics
- Backlinks: fundamental-inequalities

## Entity: joint-distributions
- Title: Joint, Marginal, and Conditional Distributions
- Category: Math Foundations
- Language: en
- Key Concepts: 3.1 Conditional Expectation, Law of Iterated Expectations, 1. Joint Distributions, 4. Independence, Double Integrals, 1.2 Continuous Case: Joint PDF, Continuous, Jacobians, 3. Conditional Distributions, Related Topics, independent, 2. Marginal Distributions, Joint, Marginal, and Conditional Distributions, Discrete, 5. Multivariate Calculus Foundation
- References: copulas, covariance-correlation, multivariate-normal
- Backlinks: continuous-random-variables, covariance-correlation

## Entity: kkt-conditions
- Title: Lagrange Multipliers & KKT Conditions
- Category: Math Foundations
- Language: en
- Key Concepts: Lagrange Multipliers & KKT Conditions, Complementary Slackness:, Karush-Kuhn-Tucker (KKT), Dual Feasibility:, KKT Conditions (Inequality Constraints), Primal Feasibility:, Lagrange Multipliers (Equality Constraints), Stationarity:
- Backlinks: inner-product-spaces-norms, pca-math

## Entity: large-deviations
- Title: Large Deviations: Hoeffding & Bernstein Inequalities
- Category: Math Foundations
- Language: en
- Key Concepts: Chebyshev's:, Markov's:, Markov's and Chebyshev's Inequalities, Hoeffding's Inequality, exponentially, Bernstein's Inequality, Large Deviations: Hoeffding & Bernstein, Key takeaway:

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
- Key Concepts: Fundamental Subspaces, Image (Column Space, $\text{im} A$):, The Rank-Nullity Theorem, Kernel (Null Space, $\ker A$):, Rank-Nullity Theorem
- References: change-of-basis
- Backlinks: change-of-basis

## Entity: sparse-matrices
- Title: Linear Algebra: Sparse Matrices
- Category: Math Foundations
- Language: en
- Key Concepts: Storage Formats, sparse, Mathematical Properties, CSR (Compressed Sparse Row):, CSC (Compressed Sparse Column):
- References: graph-theory-basics, numerical-stability
- Backlinks: graph-theory-basics, numerical-stability

## Entity: formal-proof-techniques
- Title: Logic: Formal Proof Techniques
- Category: Math Foundations
- Language: en
- Key Concepts: Inductive Step:, Proof by Contradiction, Direct Proof, Mathematical Induction, Base Case:
- References: lln-proofs
- Backlinks: group-theory-basics, lln-proofs, recursion-recurrence

## Entity: markov-chains
- Title: Markov Chains
- Category: Math Foundations
- Language: en
- Key Concepts: Ergodic Theorem:, Markov property, Aperiodic:, Markov Chains, Stationary Distributions, stationary distribution, The Markov Property, Irreducible:, stochastic matrix, Irreducibility and Aperiodicity, Transition Matrix
- Backlinks: conditional-probability, stochastic-processes

## Entity: matrix-calculus
- Title: Matrix Calculus
- Category: Math Foundations
- Language: en
- Key Concepts: Gradients of Quadratic Forms, denominator layout, Matrix Calculus, Gradients Involving Determinants, Gradients Involving Traces, Layout Conventions
- References: em-algorithm, gmm, multivariate-normal-distribution
- Backlinks: tensors-and-contractions

## Entity: multivariable-taylor-series
- Title: Multivariable Taylor Series
- Category: Math Foundations
- Language: en
- Key Concepts: Newton's Method, Local Maximum:, Hessian, Gradient, Multivariable Taylor Series, The Taylor Expansion, Saddle Point:, Local Minimum:, Hessian Properties and Optimization
- References: math/spectral-theory-operators, positive-definite-matrices

## Entity: multivariate-normal-distribution
- Title: Multivariate Normal Distribution
- Category: Math Foundations
- Language: en
- Key Concepts: Density Function, Multivariate Normal Distribution, Conditional Distribution:, Marginal Distribution:, Mahalanobis Distance, Marginals and Conditionals
- References: kalman-filter, positive-definite-matrices
- Backlinks: matrix-calculus, positive-definite-matrices

## Entity: mutual-information-divergence
- Title: Mutual Information & Divergence
- Category: Math Foundations
- Language: en
- Key Concepts: Mutual Information & Divergence, Kullback-Leibler (KL) Divergence, Asymmetry:, Data Processing Inequality, Gibbs' Inequality:, Interpretation:, Mutual Information
- References: em-algorithm, finance/shannon-entropy

## Entity: numerical-integration
- Title: Numerical Integration
- Category: Math Foundations
- Language: en
- Key Concepts: Numerical Integration, Gaussian Quadrature, Importance Sampling, Monte Carlo Integration, Curse of Dimensionality

## Entity: numerical-stability
- Title: Numerical Stability & Floating Point Math
- Category: Math Foundations
- Language: en
- Key Concepts: Condition Number, floating-point, numerically stable, Machine epsilon, condition number, Machine Epsilon
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
- Key Concepts: positive semi-definite (PSD), Role in Kernels and Optimization, Properties, Optimization:, positive definite (PD), Kernels:, [[spectral-theory-operators|Eigenvalues]]:, Trace and Determinant:, Cholesky Decomposition, Principal Minors:, Positive Definite Matrices, Invertibility:
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
- Key Concepts: Strong LLN, Weak LLN
- References: formal-proof-techniques, random-walks
- Backlinks: formal-proof-techniques, random-walks

## Entity: random-walks
- Title: Probability: Random Walks
- Category: Math Foundations
- Language: en
- Key Concepts: Recurrence vs Transience, random walk, recurrent, 1D and 2D Simple Walks, transient
- References: lln-proofs
- Backlinks: lln-proofs, stochastic-processes

## Entity: p-values-effect-size
- Title: Statistics: P-values & Effect Size
- Category: Math Foundations
- Language: en
- Key Concepts: P-Hacking, P-values, p-value, p-hacking, Effect Size, Cohen's d, Effect size
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
- Key Concepts: Matrix Multiplication:, Examples:, Tensors and Contractions, Inner Product:, Matrix-Vector Product:, Einstein Summation Convention, Tensor Notation, Tensor Contraction, Trace:
- References: attention-mechanisms, automatic-differentiation, matrix-calculus

## Entity: em-algorithm
- Title: The EM Algorithm
- Category: Math Foundations
- Language: en
- Key Concepts: The EM Steps, E-step (Expectation):, The Expectation-Maximization (EM) Algorithm, latent variables, Evidence Lower Bound (ELBO), Problem Setup, M-step (Maximization):
- References: gmm, hmm
- Backlinks: matrix-calculus, mutual-information-divergence

## Entity: universal-approximation-theory
- Title: Universal Approximation Theory
- Category: Math Foundations
- Language: en
- Key Concepts: Approximation by Transformers, Barron's Theorem, Extension to Deep Networks, Universal Approximation Theory, Classical Formulation
- References: attention-mechanisms, transformer-architecture

## Entity: information-theory-basics
- Title: Information Theory Basics
- Category: Math Fundamentals
- Language: en
- Key Concepts: KL Divergence, Cross-Entropy ($H(p, q)$), Binary Cross-Entropy (BCE), Cross-Entropy, not symmetric, 3. Cross-Entropy: The ML Loss Function, 5. Summary of Terms, Entropy, Kullback-Leibler (KL) Divergence, Intuition, [[shannon-entropy|Entropy]] ($H$), Information Theory Basics: Measuring Surprise, 2. KL Divergence: Comparing Distributions, 4. Mutual Information, 1. [[shannon-entropy|Entropy]]: The Measure of Uncertainty
- References: finance/shannon-entropy, maximum-entropy, probability-distributions, variational-autoencoders
- Backlinks: jensen-inequality, probability-distributions

## Entity: linear-regression-ols
- Title: Linear Regression & OLS
- Category: Math Fundamentals
- Language: en
- Key Concepts: Linearity, Exogeneity, Ordinary Least Squares (OLS), Geometric Interpretation, orthogonal projection, t-statistic, 2. Ordinary Least Squares (OLS), 5. Beyond OLS: Regularization, Lasso Regression, Homoscedasticity, 3. Assumptions of OLS (Gauss-Markov), Mean Squared Error (MSE), R-squared ($R^2$), Residual Sum of Squares (RSS), 1. The Model Equation
- References: matrix-decompositions, statistical-inference, vector-spaces-orthogonality
- Backlinks: covariance-correlation, estimator-properties, map-estimation, matrix-decompositions, vector-spaces-orthogonality

## Entity: matrix-decompositions
- Title: Matrix Decompositions: SVD, LU, and QR
- Category: Math Fundamentals
- Language: en
- Key Concepts: 1. LU Decomposition: Solving Linear Systems, Geometric Intuition, Applications in AI, Lower, Upper, Eigenvalue Algorithms, Latent Semantic Analysis (LSA), Gram-Schmidt process, Dimensionality Reduction (PCA), Model Compression, 4. Comparison Summary, SVD, Efficiency, Applications, 3. Singular Value Decomposition (SVD): The Master Key
- References: eigenvalues-eigenvectors, linear-regression-ols, math/spectral-theory-operators, pca
- Backlinks: linear-regression-ols, vector-spaces-orthogonality

## Entity: optimization-basics
- Title: Optimization 101: Gradient Descent & Newton's Method
- Category: Math Fundamentals
- Language: en
- Key Concepts: Why avoid it?, Learning Rate, Saddle Points, Variations in ML, Loss Function, Vanishing/Exploding Gradients, Stochastic [[convex-optimization|Gradient Descent]] (SGD), The Update Rule, 4. Key Challenges, Local Minima, Optimization 101: Training the Machines, Adam, Why use it?, Convergence, Conditioning
- References: chain-rule-autodiff, convex-optimization, gradient-hessian-jacobian, math/spectral-theory-operators
- Backlinks: chain-rule-autodiff, sequences-series-convergence

## Entity: probability-distributions
- Title: Probability Distributions Encyclopedia
- Category: Math Fundamentals
- Language: en
- Key Concepts: Multinomial, PDF, Binomial & Multinomial, Beta Distribution, Third Moment (Skewness), 2. Continuous Distributions, Binomial, Poisson Distribution, Probability Distributions Encyclopedia: The Shapes of Randomness, Second Moment (Variance), 3. Moments of a Distribution, Use, [[shannon-entropy|Entropy]], Bernoulli Distribution, Parameters
- References: bayes-theorem, finance/shannon-entropy, information-theory-basics, lln-clt
- Backlinks: information-theory-basics, mgf-characteristic-functions, order-statistics, statistical-inference

## Entity: sequences-series-convergence
- Title: Sequences, Series & Convergence
- Category: Math Fundamentals
- Language: en
- Key Concepts: 5. Convergence in Probability, partial sums, Why it matters in AI, 2. Infinite Series, Geometric Series, Convergence in Probability, 1. Sequences and Limits, Series, In ML, 3. Taylor Series: Approximating Functions, Radius of Convergence, Convergence in Distribution, converges, Hessian, Linear Approximation
- References: lln-clt, optimization-basics, taylor-series

## Entity: logic-set-theory
- Title: Set Theory & Formal Logic
- Category: Math Fundamentals
- Language: en
- Key Concepts: Set, Knowledge Representation, Complement ($A^c$ or $\bar{A}$), Example, Relation, Constraint Satisfaction, Bijective, 2. Set Theory: The Universal Container, 3. Relations and Functions, Intersection ($A \cap B$), Propositional Logic, Predicate Logic (Quantifiers), Boolean Algebra, Set Theory & Formal Logic: The Language of Proof, 1. Formal Logic: The Rules of Thought
- References: graph-theory

## Entity: statistical-inference
- Title: Statistical Inference & Hypothesis Testing
- Category: Math Fundamentals
- Language: en
- Key Concepts: Reject $H_0$, Example, Crucial, Significance Level ($\alpha$), 1. Hypothesis Testing: The Framework, Interpretation, p-value, Chi-Squared Test, Type II Error, 5. Bayesian Inference vs. Frequentist, ANOVA, Bayesian, Power ($1 - \beta$), Alternative Hypothesis ($H_a$ or $H_1$), 2. Type I and Type II Errors
- References: bayes-theorem, probability-distributions
- Backlinks: bootstrap-jackknife, cramer-rao-bound, delta-method, estimator-properties, likelihood-ratio-tests, linear-regression-ols, map-estimation, mle-estimation, rank-tests, sufficient-statistics

## Entity: chain-rule-autodiff
- Title: The Chain Rule & Auto-Diff Foundations
- Category: Math Fundamentals
- Language: en
- Key Concepts: Example, [[automatic-differentiation|Backpropagation]], Loss Function, Forward Pass, Reverse Mode (Backprop), 1. The Single Variable Chain Rule, 5. Why it Matters in AI, Chain Rule, Optimization, Reverse Mode vs. Forward Mode, 2. Multivariable Chain Rule, Efficiency, 3. Automatic Differentiation (Auto-Diff), Jacobian, Forward Mode
- References: automatic-differentiation, gradient-hessian-jacobian, optimization-basics
- Backlinks: optimization-basics

## Entity: vector-spaces-orthogonality
- Title: Vector Spaces & Orthogonality
- Category: Math Fundamentals
- Language: en
- Key Concepts: Vector Space, Kernel (Nullspace), Orthonormal Basis, Vector Spaces & Orthogonality: The Geometry of Data, Orthonormal, 3. Projection Matrices, 4. The Gram-Schmidt Process, Image (Column Space), Dimension, Application, AI Context, Projection, 1. Vector Spaces and Bases, Vectors, 2. Orthogonality: The Power of 90 Degrees
- References: eigenvalues-eigenvectors, linear-regression-ols, matrix-decompositions
- Backlinks: linear-regression-ols

## Entity: math/algebraic-topology
- Title: Algebraic Topology
- Category: Mathematical Foundations
- Language: en
- Key Concepts: boundaries, universal covering, homology groups, Mayer-Vietoris Sequence, Connection to Other Areas, Persistent homology, singular $n$-simplex, is independent of the choice of basepoint, amalgamated free product, Singular Homology, homotopic, Euler Characteristic and Betti Numbers, contractible, homotopy, homotopy equivalent
- References: category-theory, complex-analysis, functional-analysis, math/differential-geometry, math/non-euclidean-geometry, math/topology-basics
- Backlinks: homological-algebra, homotopy-type-theory, math/differential-geometry, morse-theory, topos-theory

## Entity: complex-analysis
- Title: Complex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: monodromy, Cauchy integral formula, Cauchy–Riemann equations, Maximum Modulus Principle, analytic continuation, Holomorphic Functions and the Cauchy–Riemann Equations, The Maximum Modulus Principle and Liouville's Theorem, Analytic Continuation and Monodromy, Riemann Mapping Theorem, The Residue Theorem, residue, Connection to Harmonic Functions and Partial Differential Equations, Essential singularity, Casorati–Weierstrass theorem, Removable singularity
- References: fourier-transform, functional-analysis, harmonic-analysis, math/differential-geometry, math/topology-basics
- Backlinks: math/algebraic-topology, math/differential-geometry, math/harmonic-analysis

## Entity: convex-analysis
- Title: Convex Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Proximal operators and algorithms, Complementary slackness, Convex sets and functions, KKT conditions and optimality, Conjugate functions and duality, Dual feasibility, Information geometry, Primal feasibility, Stationarity, LASSO and sparsification, Applications across domains, Variational methods in control, Optimal transport, Portfolio optimization, The subdifferential
- References: automatic-differentiation, convex-optimization, convex-optimization-trading, finance/markowitz-mean-variance, math/analysis-geometry/information-geometry, math/kolmogorov-probability-axioms, optimal-transport, stochastic-control
- Backlinks: math/high-dimensional-statistics, math/topology-basics

## Entity: math/differential-geometry
- Title: Differential Geometry
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Curvature and the Riemann Tensor, Flat spaces, Connections and the Covariant Derivative, Riemannian Metrics, Christoffel symbols, covectors, Machine Learning, Geodesics and the Exponential Map, Hopf–Rinow theorem, Gauss-Bonnet theorem, scalar curvature, normal neighborhood, length, metric components, connection
- References: complex-analysis, convex-optimization, functional-analysis, manifold-learning, math/algebraic-topology, math/analysis-geometry/information-geometry, math/non-euclidean-geometry, math/topology-basics, math/variational-calculus
- Backlinks: asymptotic-spacetime, complex-analysis, course-math-for-ai, fluid-dynamics-navier-stokes, goldstone-modes, gravitational-waves-gr, group-theory, hyperbolic-vol-geometry, lie-groups, manifold, manifold-learning, many-body-tensor-networks, math/algebraic-topology, morse-theory, qft-curved-spacetime, semimartingales-on-manifolds, special-relativity, stochastic-manifolds, string-theory-calabi-yau

## Entity: math/harmonic-analysis
- Title: Harmonic Analysis
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Applications: Heat Equation and Spectral Theory, Interpolation: Riesz-Thorin and Marcinkiewicz Theorems, Fourier series, The Schwartz Space and Tempered Distributions, Information-Theoretic Connections, The Uncertainty Principle, Sobolev Spaces via Fourier, Riesz-Thorin interpolation theorem, Concluding Remarks, Parseval's formula, The inversion formula, convolution theorem, Tempered distributions, The Gibbs phenomenon, convergence
- References: complex-analysis, finance/shannon-entropy, functional-analysis, math/information-theory, math/lp-spaces, math/spectral-theory-operators, partial-differential-equations, sobolev-spaces

## Entity: math/ode-stability
- Title: ODE Theory and Lyapunov Stability
- Category: Mathematical Foundations
- Language: en
- Key Concepts: ODE Theory and Lyapunov Stability, Definition (Stability)., Control and Optimal Control, Peano's Theorem, Further Development, Spectral Classification, Conclusion, Nullclines, Lyapunov's Direct Method, Lyapunov Functions in Linear Systems, Theorem (Lyapunov Asymptotic Stability Theorem)., Theorem (Picard-Lindelöf)., Existence and Uniqueness of Solutions, Neural ODEs, Stable subspace:
- References: convex-optimization, functional-analysis, manifold-learning, math/geometric-ergodicity, math/spectral-theory-operators, math/variational-calculus, neural-odes, stochastic-control, stochastic-differential-equations

## Entity: math/spectral-theory-operators
- Title: Spectral Theory of Operators
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Spectrum of Markov Operators, resolvent set, resolvent identity, Spectral clustering, Classification of Spectrum, Fredholm alternative, spectrum, projection-valued measure, Spectrum and Resolvent, References, Principal Component Analysis (PCA), Functional Calculus, Spectral Theory of Operators, Residual spectrum, Point spectrum
- References: functional-analysis, math/lp-spaces, math/markov-chain-mixing, math/spectral-representation-processes, partial-differential-equations, schrodinger-equation, sobolev-spaces, spectral-graph-theory
- Backlinks: algebraic-geometry-slt, algebraic-topology-persistent, ar-models, attention-linear-kernel, brownian-bridge, change-of-basis, conic-sections, eigendecomposition-vs-svd, eigenvalues-eigenvectors, finance/cointegration, finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/shannon-entropy, finance/singular-spectral-analysis, finance/zeta-field, fluid-dynamics-navier-stokes, functional-analysis-c-star, geometry-loss-landscapes, geometry-of-attention, gnn-weisfeiler-lehman, gradient-hessian-jacobian, graph-curvature-oversquashing, graph-theory, hilbert-banach-spaces, information-geometry-nn, kernel-methods-rkhs, laplacian, linear-algebra, math/functional-analysis, math/harmonic-analysis, math/kolmogorov-equations-ctmc, math/local-limit-theorems, math/markov-chain-mixing, math/ode-stability, matrix-decompositions, mechanistic-interpretability-sae, morse-theory, multivariable-calculus, multivariable-taylor-series, neural-ode-stability, neural-operators-fno, nonlinear-shrinkage, normalization-layers-math, number-theory-l-functions, optimization-basics, pca, pinns-convergence, portfolio-optimization-ml, positive-definite-matrices, quantum-computing-vqe, quantum-information-entropy, quantum-mechanics, quantum-phase-estimation, random-matrices, random-matrix-theory-marchenko, random-walks-groups, renormalization-group, spectral-clustering, spectral-graph-theory, spectral-theorem-unbounded, spin-glasses-hopfield, state-space-models, weight-initialization-signal

## Entity: math/topology-basics
- Title: Topology and Metric Spaces
- Category: Mathematical Foundations
- Language: en
- Key Concepts: Compactness Criterion, Convergence and Continuity, Metric Spaces, $\mathbb{R}^n$ with Euclidean metric, path-connected, boundary, Polish Spaces and Probability, Completeness and Baire Category Theorem, complete, compact, Universal Results, Triangle inequality, totally bounded, Identity of indiscernibles, converges
- References: convex-analysis, functional-analysis, math/sigma-algebra-measurability, math/skorokhod-topology, math/weak-convergence-prokhorov, sobolev-spaces
- Backlinks: complex-analysis, manifold, math/algebraic-topology, math/differential-geometry, math/hausdorff-measure, topological-phases

## Entity: math/borel-cantelli-zero-one
- Title: Borel-Cantelli Lemmas and Zero-One Laws
- Category: Measure Theory
- Language: en
- Key Concepts: Lemma 2 (reverse Borel-Cantelli)., infinite, Hewitt and Savage (1955), Borel-Cantelli Lemmas and Zero-One Laws, Theorem., Lemma 1 (Borel-Cantelli)., Kolmogorov's zero-one law, Hewitt-Savage zero-one law, Theorem (Kolmogorov 0-1 law, 1933)., Application to the strong LLN, Connection to information theory, tail events have no "intermediate" probabilities, Tail σ-algebra., Example., almost surely
- References: brownian-motion, characteristic-functions, law-iterated-logarithm, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: math/branching-processes, math/glivenko-cantelli, math/law-of-large-numbers, math/lebesgue-integral, math/poisson-approximation

## Entity: math/cameron-martin-formula
- Title: Cameron-Martin Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: reproducing kernel Hilbert space, Large Deviations: Freidlin-Wentzell Theory, Cameron-Martin Theorem, Cameron-Martin space, not, Connection to Girsanov's Theorem, Theorem (Cameron-Martin)., Infinite-dimensional analysis., Abstract Wiener Spaces, natural domain for rate functions, Related Articles, shifts Wiener measure by a deterministic function, Signal detection., Theorem (Feldman-Hajek)., abstract Wiener space
- References: brownian-motion, finance/girsanov-semimartingales, math/absolute-continuity-process-measures, math/conditional-expectation-sigma, math/contiguity-measures, math/density-processes, math/doleans-dade-exponential, math/hellinger-processes, math/local-asymptotic-normality, math/sigma-algebra-measurability
- Backlinks: math/absolute-continuity-process-measures, math/gaussian-process-sample-paths, math/sde-numerical-methods, math/sequential-hypothesis-testing, math/stratonovich-integral

## Entity: math/conditional-expectation-sigma
- Title: Conditional Expectation w.r.t. a σ-Algebra
- Category: Measure Theory
- Language: en
- Key Concepts: Jensen's inequality, best mean-square predictor, Definition, Martingale property, Intuition, Linearity, Motivation: conditioning on a null event, martingale, "Pull out what is known", orthogonal projection, average, Contractivity, Conditional Expectation w.r.t. a σ-Algebra, Related Articles, Tower property
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, kalman-filter, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability
- Backlinks: innovation-process, math/cameron-martin-formula, math/cramer-rao-bound, math/discrete-martingales, math/doob-meyer-decomposition, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/predictable-compensator, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/differentiation-of-measures
- Title: Differentiation of Measures
- Category: Measure Theory
- Language: en
- Key Concepts: pairwise almost disjoint, Several-variable theory, Differentiation of measures, Harmonic analysis, Calderón–Zygmund decomposition, The Lebesgue Differentiation Theorem, Marcinkiewicz interpolation, Weak-type $(1,1)$ bound:, Radon–Nikodym theorem, The Hardy–Littlewood Maximal Function, The Radon–Nikodym Theorem as Differentiation, Applications and Connections, Vitali covering theorem, The Calderón–Zygmund Decomposition, Besicovitch covering lemma
- References: functional-analysis, math/absolute-continuity-process-measures, math/lebesgue-integral, math/lp-spaces, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure

## Entity: math/glivenko-cantelli
- Title: Glivenko-Cantelli Theorem and Empirical Processes
- Category: Measure Theory
- Language: en
- Key Concepts: The theorem, Donsker classes, Theorem (Glivenko 1933, Cantelli 1933)., Kolmogorov-Smirnov (KS) statistic, The Kolmogorov-Smirnov test, Glivenko-Cantelli class, all, distribution-free, Dvoretzky-Kiefer-Wolfowitz (1956) inequality, Kolmogorov distribution, Bootstrap validity., class of sets, nonparametric maximum likelihood estimator, Nonparametric statistics., Glivenko-Cantelli Theorem and Empirical Processes
- References: brownian-motion, central-limit-theorem, characteristic-functions, math/borel-cantelli-zero-one, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/weak-convergence-prokhorov
- Backlinks: math/borel-cantelli-zero-one, math/kernel-density-estimation

## Entity: math/hausdorff-measure
- Title: Hausdorff Measure and Fractal Dimension
- Category: Measure Theory
- Language: en
- Key Concepts: box-counting dimension, Conclusion, jump criterion, Hausdorff Dimension, Agreement with Lebesgue Measure, Definition, Iterated Function System (IFS), Hutchinson's theorem, Hausdorff dimension, Besicovitch Covering Theorem, $s$-dimensional Hausdorff measure, References and Further Reading, Application: Differentiation of Measures, Key property:, Computation of Dimension
- References: brownian-motion, math/differentiation-of-measures, math/lebesgue-integral, math/product-measures-fubini, math/sigma-algebra-measurability, math/topology-basics, radon-nikodym

## Entity: math/kolmogorov-probability-axioms
- Title: Kolmogorov's Probability Axioms
- Category: Measure Theory
- Language: en
- Key Concepts: impossible, smaller, measurable map, Axiom 1 (non-negativity)., discrete, pairwise disjoint, probability measure, The axioms, Connection to mathematical modernism, Lebesgue integral, Axiom 3 (countable additivity, σ-additivity)., Why a σ-algebra, σ-algebra of events, Axiom 2 (normalization)., event
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/ftap-first-fundamental-theorem, math/conditional-expectation-sigma, math/godel-incompleteness, math/law-of-large-numbers, math/sigma-algebra-measurability
- Backlinks: bayesian-deep-learning, causal-inference, convex-analysis, course-math-for-ai, gaussian-processes, math/borel-cantelli-zero-one, math/central-limit-theorem, math/conditional-expectation-sigma, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/glivenko-cantelli, math/kolmogorov-equations-ctmc, math/large-deviations-cramer, math/law-of-large-numbers, math/product-measures-fubini, math/regular-conditional-probability, math/sigma-algebra-measurability, math/weak-convergence-prokhorov, measure-theory, radon-nikodym, variational-autoencoders

## Entity: math/lp-spaces
- Title: L^p Spaces
- Category: Measure Theory
- Language: en
- Key Concepts: Hölder's Inequality, Definition and Norm, Completeness and the Riesz–Fischer Theorem, Riesz representation theorem, Hölder's inequality, projection theorem, Banach space, inner product, The Space $L^\infty$ and Essential Supremum, essential supremum, Riesz–Fischer Theorem, Sobolev spaces, Hilbert Structure of $L^2$, Weak $L^p$ Spaces and Marcinkiewicz Interpolation, Sobolev Spaces and Generalizations
- References: functional-analysis, math/conditional-expectation-sigma, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym, sobolev-spaces
- Backlinks: course-math-for-ai, hilbert-banach-spaces, math/differentiation-of-measures, math/harmonic-analysis, math/high-dimensional-statistics, math/lebesgue-integral, math/signed-measures, math/spectral-theory-operators, measure-theory, random-matrices

## Entity: math/lebesgue-integral
- Title: Lebesgue Integral
- Category: Measure Theory
- Language: en
- Key Concepts: Convergence Theorems, Monotone Convergence Theorem (MCT), Change of Variables, Comparison with Riemann Integration, Integration of Nonnegative Functions, Fubini's theorem, Monotonicity, Lebesgue integral, Product Integration and Fubini-Tonelli, References, Homogeneity, $L^1$ as a Banach Space, simple functions, Lebesgue Integral, Dominated Convergence Theorem (DCT)
- References: math/borel-cantelli-zero-one, math/conditional-expectation-sigma, math/lp-spaces, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: course-math-for-ai, math/differentiation-of-measures, math/hausdorff-measure, math/lp-spaces, math/product-measures-fubini, math/signed-measures, measure-theory

## Entity: math/product-measures-fubini
- Title: Product Measures and Fubini's Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: Product σ-Algebra, Theorem (Fubini)., Infinite Product Measures and Kolmogorov Extension Theorem, Essential properties:, measurable with respect to the product σ-algebra, σ-finiteness requirement:, Measurability:, Necessity of Integrability, Product Measures and Fubini's Theorem, Fubini's Theorem, Kolmogorov Extension Theorem., Independence and Product Measure Factorization, Tensor Products in Hilbert Spaces, Proof sketch:, tensor product Hilbert space
- References: characteristic-functions, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/sigma-algebra-measurability, radon-nikodym
- Backlinks: math/hausdorff-measure, math/lebesgue-integral, math/regular-conditional-probability

## Entity: radon-nikodym
- Title: Radon-Nikodym Theorem
- Category: Measure Theory
- Language: en
- Key Concepts: density, Girsanov Theorem and Measure Change, Chain Rule and Change of Variables, market price of risk, absolute continuity, Essential properties:, Conditional Expectation, Duality of $L^p$ Spaces, Theorem., Proof sketch (Hilbert space method)., Uniqueness:, Radon-Nikodym Theorem, The Radon-Nikodym Theorem, measure derivatives, Radon-Nikodym multiplicative functional
- References: finance/girsanov-semimartingales, math/conditional-expectation-sigma, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optimal-transport
- Backlinks: math/differentiation-of-measures, math/hausdorff-measure, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/signed-measures, measure-theory

## Entity: math/regular-conditional-probability
- Title: Regular Conditional Probability
- Category: Measure Theory
- Language: en
- Key Concepts: The Problem with Naive Conditioning, Radon-Nikodym theorem, Theorem (Borel):, Theorem (Disintegration on Polish Spaces):, Probability measure in the first argument, Conditional expectation property, Markov kernel, Markov processes, References and Further Reading, Conditional Independence and Bayes' Theorem, regular version of the conditional probability, Measurability in the second argument, Existence and Uniqueness, Conditional Probability Kernels, likelihood kernel
- References: math/conditional-expectation-sigma, math/density-processes, math/kolmogorov-probability-axioms, math/product-measures-fubini, math/sigma-algebra-measurability, radon-nikodym

## Entity: math/signed-measures
- Title: Signed Measures and Decomposition Theorems
- Category: Measure Theory
- Language: en
- Key Concepts: [[radon-nikodym|Radon–Nikodym Theorem]], minimal, [[absolute-continuity-process-measures|Absolute Continuity of Processes and Measures]], Riesz representation theorem, [[lp-spaces|$L^p$ Spaces]], [[hellinger-processes|Hellinger Processes]], [[density-processes|Density Processes]], $\sigma$-finite measures, Absolute Continuity and Singularity, Finite measures, Jordan Decomposition, absolutely continuous, Remark on uniqueness, Banach space, Theorem (Lebesgue Decomposition).
- References: math/absolute-continuity-process-measures, math/contiguity-measures, math/density-processes, math/hellinger-processes, math/lebesgue-integral, math/lp-spaces, radon-nikodym

## Entity: math/sigma-algebra-measurability
- Title: σ-Algebras and Measurability
- Category: Measure Theory
- Language: en
- Key Concepts: Simplest examples, Definition, filtration, smallest, partition, adapted, random variable, Dynkin's theorem (π-λ)., Adaptedness and filtration, Dynkin's π-λ systems, measurable, Closure under countable unions, every, Connection to information theory, disjoint
- References: brownian-motion, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms
- Backlinks: course-math-for-ai, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/conditional-expectation-sigma, math/differentiation-of-measures, math/discrete-martingales, math/doob-meyer-decomposition, math/hausdorff-measure, math/hellinger-processes, math/kolmogorov-probability-axioms, math/lebesgue-integral, math/lp-spaces, math/product-measures-fubini, math/regular-conditional-probability, math/topology-basics, measure-theory, radon-nikodym

## Entity: cross-impact
- Title: Cross-Impact Models
- Category: Microstructure
- Language: en
- Key Concepts: ETF Arbitrage, Cross-Impact, Positive Semi-Definite (PSD), Visualization: The Cross-Impact Network, eigen-space, The Mechanism of Cross-Impact, Diagonal elements, Principal Components, Mathematical Formulation, Direct Impact, Sector factors, Cross-Impact Models in Microstructure, Related Topics, The No-Arbitrage Condition, Cross-Impact Matrix
- References: eigenvalues-eigenvectors, finance/random-matrix-theory, kyle-model, market-impact, optimal-execution
- Backlinks: lead-lag-analysis, market-impact, multivariate-hawkes

## Entity: finance/dark-pools
- Title: Dark Pools and Market Fragmentation
- Category: Microstructure
- Language: en
- Key Concepts: Dark Pools, Types of Dark Pools, Implementation, Dark Pools and Market Fragmentation, Herfindahl-Hirschman Index, Related Articles, Market Fragmentation, MiFID II Double Volume Cap (EU)
- References: finance/kyle-lambda, finance/pin-easley-ohara, optimal-execution, vpin

## Entity: deep-lob
- Title: Deep LOB (Order Book CNNs)
- Category: Microstructure
- Language: en
- Key Concepts: Spoofing Detection, Convolutional Neural Networks (CNNs), FPGAs, Why it Dominates Handcrafted Features, Output, Liquidity Void Detection, Deep LOB: Convolutional Networks for the Order Book, Practical Challenges in Deployment, Deep LOB, Inception Modules (CNNs), The Network Architecture, Related Topics, Latency, Stationarity, The Order Book as an Image
- References: finance/order-flow-imbalance, modern-quantization, queue-reactive-models
- Backlinks: market-microstructure

## Entity: glosten-milgrom
- Title: Glosten-Milgrom Model
- Category: Microstructure
- Language: en
- Key Concepts: sell, Informed, Ask Price ($P_A$), Liquidity Externalities, The Mathematical Mechanism, Visualization: Spread and Information, Bid Price ($P_B$), bid-ask spread, Bid-Ask Spread, Noise, Key Takeaways, Related Topics, The Bid-Ask Spread, buy, Glosten-Milgrom Model: Adverse Selection Spread
- References: kyle-model, vpin
- Backlinks: latency-arbitrage, roll-model, spread, vpin

## Entity: lead-lag-analysis
- Title: High-Frequency Lead-Lag Analysis
- Category: Microstructure
- Language: en
- Key Concepts: Order Flow Execution, Cross-Correlation Function, Latency Arbitrage, Lead-Lag Analysis, Positive $\theta$, HMM Regime Detection, Finding the Lag ($\theta$), Negative $\theta$, Related Topics, High-Frequency Lead-Lag Analysis, Mathematical Detection: The Hayashi-Yoshida Estimator, Hayashi-Yoshida (HY) Estimator, Visualization: Lag Peak, Why Citadel cares, The Epps Effect
- References: cross-impact, hmm-particle-filters, latency-arbitrage, vpin
- Backlinks: multivariate-hawkes

## Entity: finance/kyle-lambda
- Title: Kyle's Lambda: The Price Impact Coefficient
- Category: Microstructure
- Language: en
- Key Concepts: Kyle's Lambda: The Price Impact Coefficient, Multi-Period Extension, Market-maker, Market depth, market depth, Extensions, Related Articles, Insider, Noise traders, market depth decreases toward the close, basis points per million USD, Equilibrium $\lambda$, Hasbrouck's (1991) Information Share, Empirical Estimation, Almgren-Chriss Impact Decomposition
- References: amihud-illiquidity, avellaneda-stoikov, finance/order-flow-imbalance, optimal-execution, vpin
- Backlinks: finance/dark-pools, finance/order-flow-imbalance, finance/pin-easley-ohara, finance/repo-market-systemic, finance/vwap-twap, market-microstructure, spread

## Entity: latency-arbitrage
- Title: Latency Arbitrage and Frequent Batch Auctions
- Category: Microstructure
- Language: en
- Key Concepts: The Solution: Frequent Batch Auctions (FBA), Continuous Limit Order Book (CLOB), Kills the Footrace, widening the bid-ask spread, Adverse Selection via Latency, Latency Arbitrage, Removes the Liquidity Tax, Latency Arbitrage and Frequent Batch Auctions, single clearing price, The Flaw of Continuous Time, Related Topics, Why FBA fixes the market:, Frequent Batch Auctions, The Liquidity Tax, Visualization: The HFT Race
- References: glosten-milgrom, smart-order-routing
- Backlinks: lead-lag-analysis, mev

## Entity: market-impact
- Title: Market Impact and Square-root Law
- Category: Microstructure
- Language: en
- Key Concepts: 4. Impact in Advanced Trading, Latent Liquidity, Temporary Impact, square root, Visualization: Impact vs. Order Size, 2. The Square-root Law, Information Discovery, 1. Permanent vs. Temporary Impact, Price Discovery, Square-root Law, Cross-Impact Matrix, Permanent Impact, Illiquid, Cross-Impact, 3. Price Discovery as Physics
- References: cross-impact, lob-propagators, optimal-execution, smart-order-routing, vpin
- Backlinks: cross-impact, kyle-model, lob-propagators, market-microstructure, spread

## Entity: lob-propagators
- Title: Mechanical Price Discovery: Propagators
- Category: Microstructure
- Language: en
- Key Concepts: Mechanical Price Discovery and Propagator Models, The Efficiency Condition, The Propagator Equation, sign of the trade, Propagator function, Mechanical vs. Informational, mechanical, Visualization: Response to a Trade, Immediate Impact, transient and mechanical, Propagator models, Mean Reversion (Decay), The Meaning of G(τ), Related Topics, Permanent Impact
- References: finance/hawkes-process, market-impact
- Backlinks: market-impact, queue-reactive-models

## Entity: multivariate-hawkes
- Title: Multivariate Hawkes Processes
- Category: Microstructure
- Language: en
- Key Concepts: Off-diagonal elements ($\alpha_{ij}$), cross-excitation, Diagonal elements ($\alpha_{ii}$), Flash Crash Detection, The Intensity Matrix, Application in Algorithmic Trading, Market Making, Multivariate Hawkes Process, Visualization: The Excitation Impulse, Related Topics, Micro-Price Prediction, Multivariate Hawkes Processes: Micro-Contagion, The Cross-Excitation Network, Excitation Matrix
- References: cross-impact, finance/hawkes-process, lead-lag-analysis

## Entity: liquidation-signals
- Title: Optimal Liquidation with Alpha Signals
- Category: Microstructure
- Language: en
- Key Concepts: Opportunistic Execution, Key Signals used in Modern Desks, The Optimal Strategy: Drift-Adjusted Schedulling, Visualization: Signal-Driven Slicing, Urgency, Alpha Signals, Trade Flow (Hawkes), The Augmented Objective Function, LOB Imbalance, Cross-Asset Signals, Related Topics, Optimal Liquidation with Signals, Optimal Liquidation with Alpha Signals
- References: finance/order-flow-imbalance, optimal-execution, vpin

## Entity: finance/order-flow-imbalance
- Title: Order Flow Imbalance and Microprice
- Category: Microstructure
- Language: en
- Key Concepts: Motivation, LOB-Based Definition, Stoikov's Generalised Microprice (2018), Implementation, Related Articles, Order Flow Imbalance, Order Flow Imbalance (OFI), Predictive Model, Predictive Performance, Microprice, Multi-Level OFI, Spread-Normalized Skew, Order Flow Imbalance and Microprice
- References: avellaneda-stoikov, finance/hawkes-process, finance/kyle-lambda, lob-prediction, vpin
- Backlinks: deep-lob, finance/kyle-lambda, finance/vwap-twap, liquidation-signals, market-microstructure, queue-reactive-models

## Entity: vpin
- Title: Order Flow Toxicity and VPIN
- Category: Microstructure
- Language: en
- Key Concepts: Optimal Execution, Regime Detection, Noise Traders, 4. Why it Matters for AI and HFT, VPIN, 2. VPIN: The Mechanism, Easley, Lopez de Prado, and O'Hara, A. Volume Bucketing, The Flash Crash (2010), C. The VPIN Formula, Low VPIN (< 0.2), Visualization: Toxicity vs. Price, Order Flow Toxicity, Adverse Selection Defense, High VPIN (> 0.8)
- References: finance/pin-easley-ohara, glosten-milgrom, hmm-particle-filters, optimal-execution
- Backlinks: finance/dark-pools, finance/kyle-lambda, finance/order-flow-imbalance, finance/pin-easley-ohara, glosten-milgrom, kyle-model, lead-lag-analysis, liquidation-signals, market-impact, optimal-execution, roll-model

## Entity: finance/pin-easley-ohara
- Title: PIN: Probability of Informed Trading
- Category: Microstructure
- Language: en
- Key Concepts: PIN vs VPIN, Implementation, PIN (Probability of Informed Trading), PIN, Single-day likelihood, Game structure:, EKOP Model, PIN: Probability of Informed Trading, Related Articles
- References: finance/kyle-lambda, roll-model, vpin
- Backlinks: finance/dark-pools, market-microstructure, vpin

## Entity: queue-reactive-models
- Title: Queue-Reactive Models (LOB Dynamics)
- Category: Microstructure
- Language: en
- Key Concepts: these rates depend strongly on the current size of the queues, The Physics of the Queue, Market Orders, Cancellations, Micro-Price, Market Making, Visualization: Transition Intensities, The "Reactive" Insight, The Micro-Price, Why HFTs Use It, Related Topics, Queue-Reactive Models of the Limit Order Book, Limit Order Book (LOB), Queue-Reactive Models, Limit Orders (Arrivals)
- References: finance/hawkes-process, finance/order-flow-imbalance, lob-propagators
- Backlinks: deep-lob

## Entity: smart-order-routing
- Title: Smart Order Routing (SOR)
- Category: Microstructure
- Language: en
- Key Concepts: MEV Protection:, Smart Order Routing (SOR), Best Execution, Dynamic Execution:, Dark Pools, SOR in Traditional Finance (CeFi), Price & Volume Analysis:, How SOR Works, SOR in Decentralized Finance (DeFi), slippage, Related Topics, Liquidity Aggregation:, Gas Optimization:, Multi-hop Paths:
- References: market-microstructure
- Backlinks: amm-mechanics, asset-tokenization, cedefi-mechanics, course-cedefi, cross-chain-interop, latency-arbitrage, market-impact, mev, yield-aggregators

## Entity: kyle-model
- Title: The Kyle Model
- Category: Microstructure
- Language: en
- Key Concepts: informed trader, market liquidity, The Equilibrium Solution, Kyle's Lambda ($\lambda$), The Kyle Model: Strategic Informed Trading, Noise Traders, Informed Trader, Visualization: Insider Hiding, Market Depth, Market Maker (MM), Related Topics, Strategic Slowing, The Three Players, slowly and linearly, Price Discovery
- References: market-impact, optimal-execution, vpin
- Backlinks: cross-impact, glosten-milgrom

## Entity: roll-model
- Title: The Roll Model
- Category: Microstructure
- Language: en
- Key Concepts: 3. Why it Matters, 4. Limitations in Modern Markets, negatively correlated, 2. The Mathematical Derivation, Roll Estimator, Hidden Costs, Low-Frequency Data, Visualization: The Bouncing Price, Effective Spread, Informed Trading, 1. The Bid-Ask Bounce, The Roll Model: Estimating the Effective Spread, Related Topics, Liquidity Proxy, Zero Covariance
- References: amihud-illiquidity, glosten-milgrom, vpin
- Backlinks: finance/pin-easley-ohara

## Entity: finance/vwap-twap
- Title: VWAP and TWAP Execution Algorithms
- Category: Microstructure
- Language: en
- Key Concepts: VWAP (Volume-Weighted Average Price), Implementation, VWAP and TWAP Execution Algorithms, TWAP (Time-Weighted Average Price), TWAP, VWAP, Implementation Shortfall, Related Articles, Market VWAP, Participation algorithm
- References: avellaneda-stoikov, finance/kyle-lambda, finance/order-flow-imbalance, optimal-execution

## Entity: kuramoto-model
- Title: Kuramoto Model
- Category: Nonlinear Dynamics
- Language: en
- Key Concepts: complex order parameter, 1. Market Synchronization & Crises, Overview, Finance, AI Applications, 1. Artificial Kuramoto Oscillatory Neurons (AKOrN), Finance Applications, Feature Binding:, 3. Solving Combinatorial Problems, 2. Systemic Risk, Visualization of Synchronization, Mathematical Framework, Artificial Intelligence, Kuramoto Model, 2. Adversarial Robustness
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
- Key Concepts: L1 (Lasso):, Overview, L2 (Ridge):, L1 and L2

## Entity: sgd-variants
- Title: Stochastic Gradient Descent
- Category: Optimization
- Language: en
- Key Concepts: Adam:, RMSProp:, Overview, Variants, Vanilla SGD:
- References: convex-optimization

## Entity: weight-initialization
- Title: Weight Initialization
- Category: Optimization
- Language: en
- Key Concepts: Overview, Techniques, Xavier/Glorot Initialization:, He (Kaiming) Initialization:

## Entity: ads-cft
- Title: AdS/CFT & Holographic Principle
- Category: Physics
- Language: en
- Key Concepts: [[celestial-holography]], type IIB string theory on AdS$_5 \times S^5$, AdS/CFT, Beyond AdS: celestial holography, Impact, entanglement [[gravitational-entropy|entropy]], Maldacena's conjecture, The Ryu-Takayanagi formula, timelike boundary, $\mathcal N = 4$ super Yang-Mills theory with gauge group $SU(N)$, The holographic idea, AdS/CFT & Holographic Principle, Related Topics, Why AdS/CFT is trusted, Anti-de Sitter space
- References: black-hole-soft-hair, bms-group, celestial-holography, conformal-field-theory, general-relativity, gravitational-entropy, hawking-radiation, information-paradox, large-gauge-transformations, pasterski-triangle, soft-theorems
- Backlinks: black-hole-thermodynamics, gravitational-entropy, hawking-radiation, information-paradox

## Entity: anomalies
- Title: Anomalies
- Category: Physics
- Language: en
- Key Concepts: Anomalously, anomaly-free, The general picture, Scale / trace anomaly, Anomaly matching and 't Hooft's constraint, Explicitly, gauge, Gravitational and mixed anomalies, Spontaneously, trace anomaly, non-renormalisation theorem, The chiral anomaly, Why anomalies matter, Gauge anomalies and the Standard Model, Anomalies
- References: gauge-theory-yang-mills, goldstone-modes, noether-theorem, path-integral, renormalization-group, ward-identities
- Backlinks: math/banach-tarski, renormalization-group

## Entity: asymptotic-spacetime
- Title: Asymptotic Spacetime
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, See Also, Key Properties, Visualization, ADM mass, Vacuum degeneracy, Mathematical Formulation, Physical Interpretation, Bondi-Sachs mass loss, Asymptotic Spacetime, Peeling property, Connections to Information Theory & Holography, Conformal structure
- References: asymptotic-symmetries, bms-group, celestial-holography, math/differential-geometry
- Backlinks: gravitational-waves-gr, math/non-euclidean-geometry, scattering-amplitudes

## Entity: asymptotic-symmetries
- Title: Asymptotic Symmetries
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, See Also, Electromagnetic analogy, Superrotation charges, Visualization, Mathematical Formulation, Asymptotic Symmetries, Matching conditions, Infinite vacuum degeneracy, Large vs. small gauge transformations, Physical Interpretation, Connections to Information Theory & Holography, Key Properties
- References: bms-group, celestial-holography, soft-theorems
- Backlinks: asymptotic-spacetime, black-hole-soft-hair, bms-group, celestial-holography, goldstone-modes, group-theory, information-paradox, large-gauge-transformations, noether-theorem, pasterski-triangle, pauli-exclusion-quantization, soft-theorems, ward-identities

## Entity: bms-group
- Title: BMS Group
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, Goldstone interpretation, See Also, Memory effect, BMS Group, Visualization, Mathematical Formulation, Celestial sphere action, Physical Interpretation, Ward identity = Soft theorem, Infinite vacuum degeneracy, Prerequisites, Connections to Information Theory & Holography, Key Properties
- References: asymptotic-symmetries, celestial-holography, group-theory, pasterski-triangle
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, conformal-field-theory, gravitational-waves-gr, group-theory, large-gauge-transformations, math/non-euclidean-geometry, noether-theorem, pasterski-triangle, spin-memory, ward-identities

## Entity: information-paradox
- Title: Black Hole Information Paradox
- Category: Physics
- Language: en
- Key Concepts: Remnants., The Page curve, unitary, Open questions, Information is lost., Statement of the paradox, Candidate resolutions, black hole information paradox, Soft hair, Page curve, Page time, Black Hole Information Paradox, Black hole complementarity, Firewall, The island formula
- References: ads-cft, asymptotic-symmetries, black-hole-soft-hair, celestial-holography, general-relativity, gravitational-entropy, hawking-radiation, pasterski-triangle, path-integral, qft-basic
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, hawking-radiation, large-gauge-transformations, math/godel-incompleteness

## Entity: black-hole-soft-hair
- Title: Black Hole Soft Hair
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, See Also, The Area Law of [[gravitational-entropy|Entropy]], Mathematical Formulation, Horizon vs. infinity, Visualization: [[gravitational-entropy|Entropy]] Scaling, Limitations, Physical Interpretation, Black Hole Soft Hair, Electromagnetic hair, Prerequisites, Infinite degeneracy, Connections to Information Theory & Holography, Zero energy, Key Properties
- References: asymptotic-symmetries, bms-group, celestial-holography, gravitational-entropy, gravitational-memory, soft-theorems
- Backlinks: ads-cft, information-paradox, large-gauge-transformations, memory-effects, quantum-entanglement, spin-memory

## Entity: black-hole-thermodynamics
- Title: Black Hole Thermodynamics
- Category: Physics
- Language: en
- Key Concepts: Hawking Temperature, Connection to Holography, 3rd, ergosphere, The Firewall Paradox, The Four Laws of Black Hole Mechanics, irreducible mass, The Penrose Process, 1st, information paradox, 0th, Bekenstein-Hawking entropy, holographic principle, firewall, Black Hole Thermodynamics
- References: ads-cft, general-relativity, gravitational-entropy, gravitational-waves-gr, hawking-radiation, information-paradox
- Backlinks: ads-cft-deep, gravitational-entropy, hawking-radiation, quantum-information-entropy

## Entity: celestial-holography
- Title: Celestial Holography
- Category: Physics
- Language: en
- Key Concepts: Loop corrections, Theoretical Foundation, See Also, Key Properties, Lorentz = global conformal group, Celestial Holography, Continuous spectrum, Visualization, Mathematical Formulation, Physical Interpretation, Prerequisites, $w_{1+\infty}$ symmetry, Connections to Information Theory & Holography, Soft theorems as Ward identities
- References: asymptotic-symmetries, bms-group, conformal-field-theory, gravitational-entropy, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-spacetime, asymptotic-symmetries, black-hole-soft-hair, bms-group, conformal-field-theory, gravitational-entropy, gravitational-waves-gr, group-theory, information-paradox, large-gauge-transformations, math/non-euclidean-geometry, pasterski-triangle, qft-basic, scattering-amplitudes, soft-theorems, spin-memory, wave-particle-duality

## Entity: conformal-field-theory
- Title: Conformal Field Theory (CFT)
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, Conformal blocks, See Also, Modular invariance, Conformal Field Theory (CFT), State-operator correspondence, Mathematical Formulation, Physical Interpretation, Prerequisites, Connections to Information Theory & Holography, Key Properties, Unitarity bounds, Cardy formula
- References: bms-group, celestial-holography, gravitational-entropy, group-theory, qft-basic, quantization, schrodinger-equation
- Backlinks: ads-cft, ads-cft-deep, celestial-holography, kan, renormalization-group, sle

## Entity: dirac-equation
- Title: Dirac Equation
- Category: Physics
- Language: en
- Key Concepts: Antimatter., positrons, Fine structure of hydrogen., Predictions, Coupling to gauge fields, Chirality and the Standard Model, Dirac spinor, Spinors and Lorentz transformations, right-handed, Gyromagnetic ratio $g = 2$., quantum field, Dirac's problem, Spin $\tfrac{1}{2}$., Dirac equation, As a field theory
- References: gauge-theory-yang-mills, maxwell-electromagnetism, pauli-exclusion-quantization, qft-basic, schrodinger-equation, special-relativity
- Backlinks: gauge-theory-yang-mills, maxwell-electromagnetism

## Entity: fokker-planck-equation
- Title: Fokker-Planck Equation
- Category: Physics
- Language: en
- Key Concepts: Stationary distribution, probability current, Spectral methods:, Finite elements:, Multidimensional generalization, Fokker-Planck Equation, Finite differences:, Fokker-Planck equation (FP), Derivation from the Kramers-Moyal expansion, Forward and backward Kolmogorov equations, Heat equation as a special case, Detailed balance and statistical mechanics, Kramers-Moyal expansion, backward Kolmogorov equation, Direct simulation:
- References: brownian-motion, geometric-brownian-motion, math/kolmogorov-equations-ctmc, ornstein-uhlenbeck-process, partial-differential-equations, path-integral, stochastic-differential-equations
- Backlinks: diffusion-models, feynman-kac, neural-operators, nonequilibrium-statmech

## Entity: gauge-theory-yang-mills
- Title: Gauge Theory & Yang-Mills
- Category: Physics
- Language: en
- Key Concepts: Asymptotic freedom and confinement, Non-abelian case: Yang-Mills, covariant derivative, gauge bosons are charged under the gauge symmetry and interact with each other, Why gauge theory is inevitable, asymptotic freedom, The three forces of the Standard Model, confines, BRST symmetry, Gauge theories, ghost fields, From global to local symmetry, Related Topics, Quantisation: Faddeev-Popov and BRST, Renormalisability.
- References: dirac-equation, goldstone-modes, maxwell-electromagnetism, noether-theorem, path-integral, qft-basic, renormalization-group, ward-identities
- Backlinks: anomalies, connections-curvature, dirac-equation, large-gauge-transformations, lie-groups-algebras, maxwell-electromagnetism, renormalization-group, topological-phases

## Entity: goldstone-modes
- Title: Goldstone Modes
- Category: Physics
- Language: en
- Key Concepts: massless modes, pseudo-Goldstone bosons, Goldstone Modes, non-linear sigma model, The Higgs mechanism: eating Goldstones, Weinberg soft theorems, Spontaneous symmetry breaking, Example., Goldstone's theorem, gauged, vacuum [[differential-geometry|manifold]], Physical examples, soft-pion theorem, Nambu-Goldstone bosons, Soft theorems and the asymptotic connection
- References: asymptotic-symmetries, math/differential-geometry, noether-theorem, pasterski-triangle, qft-basic, soft-theorems, ward-identities
- Backlinks: anomalies, gauge-theory-yang-mills, large-gauge-transformations

## Entity: gravitational-entropy
- Title: Gravitational Entropy and Holography
- Category: Physics
- Language: en
- Key Concepts: The Holographic Principle, Bousso-Engelhardt, not, Page curve, The Bekenstein Bound, emergent spacetime from entanglement, island, Bousso bound, Holography Beyond AdS, area, light sheet, Gravitational Entropy and Holography, Ryu-Takayanagi Formula, The Generalised Second Law, The Page Curve
- References: ads-cft, black-hole-thermodynamics, celestial-holography, general-relativity, hawking-radiation, information-paradox
- Backlinks: ads-cft, black-hole-soft-hair, black-hole-thermodynamics, celestial-holography, conformal-field-theory, hawking-radiation, information-paradox, laws-of-thermodynamics, nonequilibrium-statmech, pauli-exclusion-quantization, quantum-entanglement, quantum-information-entropy, statistical-mechanics, uncertainty-principle

## Entity: gravitational-memory
- Title: Gravitational Memory
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, See Also, Key Properties, DC offset, Spin memory, Mathematical Formulation, Detectable, Supertranslation transition, Physical Interpretation, Prerequisites, Connections to Information Theory & Holography, Two types, Gravitational Memory
- References: gravitational-waves-gr, memory-effects, pasterski-triangle, soft-theorems
- Backlinks: black-hole-soft-hair, gravitational-waves-gr, memory-effects, spin-memory

## Entity: gravitational-waves-gr
- Title: Gravitational Waves & General Relativity
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, See Also, Strain sensitivity, Peeling, Gravitational Waves & General Relativity (GR), Mathematical Formulation, Physical Interpretation, Speed, Connections to Information Theory & Holography, Quadrupole emission, Key Properties, Two polarizations
- References: asymptotic-spacetime, bms-group, celestial-holography, gravitational-memory, math/differential-geometry, pasterski-triangle
- Backlinks: black-hole-thermodynamics, gravitational-memory, hawking-radiation, math/non-euclidean-geometry

## Entity: group-theory
- Title: Group Theory
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, Representation theory of the Poincaré group, See Also, Peter-Weyl theorem, Applications in Machine Learning, Anomalies, Visualization, Mathematical Formulation, Group Theory in Physics, Physical Interpretation, Schur's lemma, Spontaneous symmetry breaking, Connections to Information Theory & Holography, Key Properties
- References: asymptotic-symmetries, bms-group, celestial-holography, equivariant-nn, math/differential-geometry, quantum-entanglement
- Backlinks: bms-group, conformal-field-theory, equivariant-nn, noether-theorem, qft-basic

## Entity: hawking-radiation
- Title: Hawking Radiation
- Category: Physics
- Language: en
- Key Concepts: In-modes, Virtual Pair Production Near the Horizon, Black Hole Evaporation, Hawking Temperature, Planck spectrum, Connection to the Unruh Effect, Why This Matters, The Bogoliubov Transformation, evaporation timescale, Out-modes, Related Topics, Hawking Radiation, trans-Planckian problem, Bogoliubov transformation, Unruh effect
- References: ads-cft, black-hole-thermodynamics, general-relativity, gravitational-entropy, gravitational-waves-gr, information-paradox
- Backlinks: ads-cft, black-hole-thermodynamics, gravitational-entropy, information-paradox

## Entity: uncertainty-principle
- Title: Heisenberg Uncertainty Principle
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, See Also, Zero-point energy, Measurement backaction, Generalized uncertainty principle (GUP), Fourier duality, Mathematical Formulation, Physical Interpretation, Connections to Information Theory & Holography, Key Properties, Heisenberg Uncertainty Principle, Canonical pairs
- References: gravitational-entropy, quantum-entanglement, schrodinger-equation, wave-particle-duality
- Backlinks: wave-particle-duality

## Entity: kolmogorov-arnold-theorem
- Title: Kolmogorov-Arnold Theorem
- Category: Physics
- Language: en
- Key Concepts: Relation to approximation theory, universal approximation theorem, Symbolic regression., Kolmogorov-Arnold Theorem, Kolmogorov-Arnold theorem, Physical applications., Interpretability., Parametrisation trade-off., Limitations, independently of $f$, Theorem (Kolmogorov, 1957; Arnold, 1957)., negative answer to Hilbert's thirteenth problem, Non-constructive., Visualization, exact representation
- References: finance/spectral-analysis, kan, learnable-activations, partial-differential-equations, pinns, transformer-architecture
- Backlinks: kan, learnable-activations

## Entity: large-gauge-transformations
- Title: Large Gauge Transformations
- Category: Physics
- Language: en
- Key Concepts: instantons, Asymptotic charges, [[bms-group|BMS]] group, asymptotic charges, Ward identities = soft theorems, spontaneously broken, Large gauge transformations, Large gauge in non-abelian theories and instantons, strong CP problem, Spontaneous symmetry breaking of large gauge, Small vs. large, Why this is a big deal, Related Topics, Large gauge on the horizon: soft hair, large
- References: asymptotic-symmetries, black-hole-soft-hair, bms-group, celestial-holography, gauge-theory-yang-mills, goldstone-modes, information-paradox, memory-effects, noether-theorem, pasterski-triangle, soft-theorems, ward-identities
- Backlinks: ads-cft

## Entity: maxwell-electromagnetism
- Title: Maxwell's Electromagnetism
- Category: Physics
- Language: en
- Key Concepts: Larmor power, Bianchi identity, Energy, momentum, and radiation, displacement current, $U(1)$ gauge symmetry, Maxwell's equations, Liénard-Wiechert potentials, The equations, Electromagnetic waves, Potentials and gauge invariance, Maxwell's Electromagnetism, Related Topics, Lagrangian, From Maxwell to QED, quantum electrodynamics (QED)
- References: dirac-equation, gauge-theory-yang-mills, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes, soft-theorems, special-relativity, ward-identities
- Backlinks: dirac-equation, gauge-theory-yang-mills

## Entity: memory-effects
- Title: Memory Effects
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, See Also, Hierarchy, Visualization, Vacuum transitions, Memory Effects, Mathematical Formulation, Infrared origin, Physical Interpretation, Universality, Prerequisites, Connections to Information Theory & Holography, Key Properties, Detectability
- References: black-hole-soft-hair, gravitational-memory, pasterski-triangle, soft-theorems, spin-memory
- Backlinks: gravitational-memory, large-gauge-transformations, spin-memory

## Entity: noether-theorem
- Title: Noether's Theorem
- Category: Physics
- Language: en
- Key Concepts: conserved current, The dictionary of symmetries and charges, Statement, Example: energy from time-translation invariance, Local, Quantum Noether, Ward identities, Ward-Takahashi identities, Noether's theorem, large gauge transformations, Noether's Theorem, Related Topics, Example: electric charge from global phase symmetry, global, Global vs. local symmetries
- References: asymptotic-symmetries, bms-group, group-theory, hamiltonian-mechanics, lagrangian-mechanics, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, math/variational-calculus, maxwell-electromagnetism, path-integral, ward-identities

## Entity: partial-differential-equations
- Title: Partial Differential Equations
- Category: Physics
- Language: en
- Key Concepts: Spectral methods., Canonical equations of physics, Finite differences (FDM)., Elliptic, Mesh-based vs mesh-free., stiff, Partial Differential Equations, Wave equation, Einstein equations, Finite elements (FEM)., Partial differential equations (PDEs), Parabolic, Solution methods, Robin / mixed, Second-order classification
- References: automatic-differentiation, brownian-motion, finance/fractional-fokker-planck, pinns, schrodinger-equation
- Backlinks: automatic-differentiation, convertible-bonds, feynman-kac, fokker-planck-equation, fourier-neural-operators, fredholm-theory, hydrodynamic-limits, kolmogorov-arnold-theorem, math/harmonic-analysis, math/spdes, math/spectral-theory-operators, mckean-vlasov-sdes, neural-operators, numerical-pde-finance, pinns, risk-neutral-valuation, schwartz-distributions

## Entity: pasterski-triangle
- Title: Pasterski's Triangle Theory
- Category: Physics
- Language: en
- Key Concepts: Subleading triangle, Quantum level, Theoretical Foundation, Sub-subleading, Universal, See Also, Leg 1 — Soft Theorems $\leftrightarrow$ Asymptotic Symmetries (Ward identities):, Pasterski's Triangle Theory, Mathematical Formulation, Physical Interpretation, Prerequisites, Leg 2 — Asymptotic Symmetries $\leftrightarrow$ Memory Effects (vacuum transitions):, Connections to Information Theory & Holography, Cross-theory, Key Properties
- References: asymptotic-symmetries, bms-group, celestial-holography, scattering-amplitudes, soft-theorems, spin-memory
- Backlinks: ads-cft, bms-group, goldstone-modes, gravitational-memory, gravitational-waves-gr, information-paradox, large-gauge-transformations, memory-effects, soft-theorems, ward-identities

## Entity: path-integral
- Title: Path Integral Formulation
- Category: Physics
- Language: en
- Key Concepts: ghost fields, Quantum gravity., partition function, Euclidean path integral and statistical mechanics, Symmetries are transparent., Gauge theories., Feynman diagrams, Manifest Lorentz invariance., Faddeev-Popov procedure, The classical limit, Gauge theories and the Faddeev-Popov trick, Numerical computation., lattice QFT, Field theory, Why the path integral
- References: hamiltonian-mechanics, lagrangian-mechanics, noether-theorem, qft-basic, scattering-amplitudes
- Backlinks: anomalies, feynman-kac, fokker-planck-equation, gauge-theory-yang-mills, information-paradox, path-integrals, renormalization-group, statistical-mechanics, ward-identities

## Entity: pauli-exclusion-quantization
- Title: Pauli Exclusion Principle & Quantization
- Category: Physics
- Language: en
- Key Concepts: Cooper pairs, Fermi pressure, Theoretical Foundation, See Also, Mathematical Formulation, Physical Interpretation, Atomic shell structure, Connections to Information Theory & Holography, Pauli Exclusion Principle & [[quantization]], Exchange interaction, Anyons, Key Properties
- References: asymptotic-symmetries, gravitational-entropy, quantization, quantum-entanglement
- Backlinks: dirac-equation, qft-basic

## Entity: qft-basic
- Title: QFT: Basic Level
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, See Also, Quantum Field Theory (QFT): Basic Level, Optical theorem, Crossing symmetry, Mathematical Formulation, Renormalization, Physical Interpretation, CPT theorem, Prerequisites, Spontaneous symmetry breaking, Connections to Information Theory & Holography, Key Properties
- References: celestial-holography, finance/monte-carlo-method, group-theory, pauli-exclusion-quantization, quantization, scattering-amplitudes, schrodinger-equation, wave-particle-duality
- Backlinks: conformal-field-theory, dirac-equation, equivariant-nn, finance/monte-carlo-method, gauge-theory-yang-mills, goldstone-modes, information-paradox, kan, maxwell-electromagnetism, path-integral, quantum-mechanics, renormalization-group, statistical-mechanics, ward-identities

## Entity: quantum-entanglement
- Title: Quantum Entanglement
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, See Also, Non-locality, Monogamy, Entanglement as resource, Mathematical Formulation, Physical Interpretation, Quantum Entanglement, Entanglement distillation, Connections to Information Theory & Holography, Key Properties, Area law
- References: black-hole-soft-hair, finance/random-matrix-theory, finance/shannon-entropy, gravitational-entropy, schrodinger-equation, superposition-collapse
- Backlinks: finance/random-matrix-theory, finance/shannon-entropy, finance/zeta-field, group-theory, linear-spaces-basis, pauli-exclusion-quantization, quantum-information-entropy, quantum-mechanics, superposition-collapse, uncertainty-principle

## Entity: renormalization-group
- Title: Renormalization Group
- Category: Physics
- Language: en
- Key Concepts: asymptotic freedom, fixed point, Scalar $\phi^4$., Callan-Symanzik equation, Marginal, Wilson's idea, Asymptotic safety and the space of theories, renormalization group, Wilsonian RG transformation, leading-log resummation, asymptotically safe, Continuum limits and effective field theory, Fixed points and universality, QCD., Renormalization Group
- References: anomalies, conformal-field-theory, gauge-theory-yang-mills, math/spectral-theory-operators, path-integral, qft-basic, ward-identities
- Backlinks: anomalies, effective-field-theory, gauge-theory-yang-mills, many-body-tensor-networks

## Entity: scattering-amplitudes
- Title: Scattering Amplitudes & S-matrix
- Category: Physics
- Language: en
- Key Concepts: Soft limits, Theoretical Foundation, See Also, Key Properties, Mathematical Formulation, On-shell methods, Physical Interpretation, Color decomposition, Scattering Amplitudes & S-matrix, Connections to Information Theory & Holography, Collinear limits, BCJ duality and double copy
- References: asymptotic-spacetime, celestial-holography, soft-theorems
- Backlinks: celestial-holography, equivariant-nn, maxwell-electromagnetism, pasterski-triangle, path-integral, qft-basic, soft-theorems

## Entity: soft-theorems
- Title: Soft Theorems
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, See Also, Key Properties, Color, Mathematical Formulation, Physical Interpretation, Infrared divergences, Universality, Prerequisites, Connections to Information Theory & Holography, Quantum corrections, Soft photon vs. graviton, Soft Theorems
- References: asymptotic-symmetries, celestial-holography, pasterski-triangle, scattering-amplitudes
- Backlinks: ads-cft, asymptotic-symmetries, black-hole-soft-hair, goldstone-modes, gravitational-memory, large-gauge-transformations, maxwell-electromagnetism, memory-effects, noether-theorem, pasterski-triangle, scattering-amplitudes, ward-identities

## Entity: spin-memory
- Title: Spin Memory
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, See Also, Circular orbit detection, Subleading order, Mathematical Formulation, Spin Memory, Physical Interpretation, Superrotation Ward identity, Prerequisites, Angular momentum signature, Connections to Information Theory & Holography, Amplitude, Key Properties
- References: black-hole-soft-hair, bms-group, celestial-holography, gravitational-memory, memory-effects
- Backlinks: memory-effects, pasterski-triangle

## Entity: statistical-mechanics
- Title: Statistical Mechanics
- Category: Physics
- Language: en
- Key Concepts: Free energy minimization as unifying principle, partition function, Applications to machine learning, Diffusion models, Gibbs [[gravitational-entropy|entropy]], Annealing and optimization, Summary, Canonical ensemble, Ensembles and fundamental distributions, Wick rotation and connection to quantum mechanics, [[gravitational-entropy|Entropy]] and information, principle of minimum free energy, the macroscopic state of an equilibrium system is completely described by a probabilistic ensemble, Wick rotation, Grand canonical ensemble
- References: finance/shannon-entropy, gravitational-entropy, math/ergodic-theorems-birkhoff, path-integral, qft-basic
- Backlinks: bayesian-deep-learning, convergence-of-semimartingales, copulas, energy-based-models, freidlin-wentzell-theory, gaussian-processes, maximum-entropy, nonequilibrium-statmech, sle, variational-autoencoders, wentzell-freidlin

## Entity: superposition-collapse
- Title: Superposition & Collapse
- Category: Physics
- Language: en
- Key Concepts: Theoretical Foundation, See Also, No-cloning theorem, Macroscopic superpositions, Mathematical Formulation, Linearity, Pointer states, Quantum Zeno effect, Physical Interpretation, Connections to Information Theory & Holography, Superposition & Collapse, Key Properties
- References: quantum-entanglement, schrodinger-equation
- Backlinks: quantum-entanglement

## Entity: ward-identities
- Title: Ward Identities
- Category: Physics
- Language: en
- Key Concepts: Conformal / trace anomaly, Ward Identities, Gauge anomalies, Chiral anomaly, Subleading soft-graviton theorem, QED Ward-Takahashi identity, Unphysical polarisations of the photon decouple., Slavnov-Taylor identities, From classical conservation to exact quantum identities, Weinberg's soft-graviton theorem, every soft theorem in scattering is a Ward identity of an asymptotic symmetry, Asymptotic symmetries and soft theorems, $Z_1 = Z_2$, Anomalies, anomaly
- References: asymptotic-symmetries, bms-group, noether-theorem, pasterski-triangle, path-integral, qft-basic, soft-theorems
- Backlinks: anomalies, gauge-theory-yang-mills, goldstone-modes, large-gauge-transformations, maxwell-electromagnetism, renormalization-group

## Entity: wave-particle-duality
- Title: Wave-Particle Duality
- Category: Physics
- Language: en
- Key Concepts: Thermal de Broglie wavelength, Theoretical Foundation, See Also, Wave-Particle Duality, Delayed-choice experiments, Complementarity, Mathematical Formulation, Physical Interpretation, Connections to Information Theory & Holography, Matter-wave interferometry, Key Properties, Coherence length
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
- Key Concepts: Zeroth Law:, Second Law:, First Law (Conservation of Energy):, The Four Laws, Third Law:
- References: gravitational-entropy

## Entity: maxwells-equations
- Title: Maxwell's Equations
- Category: Physics Foundations
- Language: en
- Key Concepts: Differential Form, Ampère-Maxwell Law:, Faraday's Law:, Gauss's Law:, Overview, Gauss's Law for Magnetism:
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
- Key Concepts: Bayesian Kelly Criterion and Parameter Uncertainty, Posterior Distribution, The Bayesian Solution, The Flaw of Plug-in Estimates, Visualization: The Kelly Cliff, mathematical justification for Fractional Kelly, Related Topics, Drawdown Control, expected growth across all possible values of $\mu$, Bayesian Kelly, Fractional Kelly as a Heuristic
- References: kelly-criterion, merton-portfolio, variational-inference
- Backlinks: bayesian-inference, kelly-jump-diffusion

## Entity: entropy-pooling
- Title: Entropy Pooling (Meucci)
- Category: Portfolio
- Language: en
- Key Concepts: Posterior, The Core Concept: Minimum Relative [[shannon-entropy|Entropy]], [[shannon-entropy|Entropy]] Pooling, Options and Non-Linearities, linear, Why Tier-1 Funds Use It, normally distributed, Kullback-Leibler (KL) Divergence, Ranking Signals, [[shannon-entropy|Entropy]] Pooling: Advanced Portfolio Construction, The Optimization Problem, Visualization: Shifting the Distribution, Prior, Related Topics, Stress Testing
- References: bayesian-black-litterman, convex-optimization-trading, finance/shannon-entropy, financial-entropy
- Backlinks: information-geometry-finance

## Entity: kelly-jump-diffusion
- Title: Kelly Criterion with Jump-Diffusion
- Category: Portfolio
- Language: en
- Key Concepts: The Danger of Continuous Leverage, Geometric Brownian Motion (GBM), jumps, Visualization: The Jump-Aware Curve, You are bankrupt., The Modified Kelly Formula, Kelly Criterion in Jump-Diffusion Models, Why Funds Use Fractional Kelly, The Jump-Diffusion Setup, Jump-Diffusion Kelly, The Bankruptcy Constraint, Related Topics, Jumps, negative infinity
- References: bayesian-kelly, frtb-es, kelly-criterion, merton-jump-diffusion, merton-portfolio

## Entity: merton-portfolio
- Title: Merton's Portfolio Problem
- Category: Portfolio
- Language: en
- Key Concepts: constant, Risk Adjustment, Visualization: The Optimal Path, Risk Premium, Solving via the HJB Equation, The Elegant Solution, Risk-free Bond, Myopic Behavior, Hamilton-Jacobi-Bellman (HJB) Equation, Merton's Portfolio Problem, Key Insights from the Formula:, Kelly Criterion, Related Topics, The Mathematical Setup, Kelly Criterion Limit
- References: geometric-brownian-motion, kelly-criterion, stochastic-control, stochastic-differential-equations
- Backlinks: bayesian-kelly, kelly-jump-diffusion, path-integral-control

## Entity: nonlinear-shrinkage
- Title: Nonlinear Shrinkage of Covariance
- Category: Portfolio
- Language: en
- Key Concepts: Why Citadel Uses It, Stability, Visualization: Eigenvalue Cleaning, sample covariance matrix, The Eigenvalue Distortion (Marchenko-Pastur), Nonlinear Shrinkage, Linear vs. Nonlinear Shrinkage, Transaction Costs, Hilbert Transform, Robustness, Related Topics, Nonlinear Shrinkage of Covariance (Ledoit-Wolf), Random Matrix Theory (RMT), Nonlinear Shrinkage (2017), Linear Shrinkage (2004)
- References: eigenvalues-eigenvectors, finance/markowitz-mean-variance, finance/random-matrix-theory, math/spectral-theory-operators

## Entity: universal-portfolios
- Title: Universal Portfolios
- Category: Portfolio
- Language: en
- Key Concepts: ensemble method, MCMC sampling, Universal Portfolios (Cover's Algorithm), Practical Limitations, The Guarantee (No Regret), Visualization: Catching the Optimum, best constant-rebalanced portfolio (BCRP), Related Topics, Cover's Algorithm, The Problem Setup, sublinear regret, Constant-Rebalanced Portfolio (CRP), Universal Portfolios
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
- Key Concepts: The Model, Connection to the broader theory, Related Articles, capital, strategy (portfolio), Bank account, Risky assets, discounted, discrete stochastic integral, admissible, (B,S)-Market and Self-Financing Strategies, Strategy and Capital, Self-Financing, Definition., Admissibility
- References: brownian-motion, finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/arbitrage-definition, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/self-similarity-fractality, finance/semimartingale-models, math/conditional-expectation-sigma, math/discrete-martingales, math/sigma-algebra-measurability, put-call-parity

## Entity: finance/apt-ross
- Title: Arbitrage Pricing Theory (APT)
- Category: Pricing
- Language: en
- Key Concepts: Connection to large markets, which, Main statement, Related Articles, alternative to [[capm|CAPM]], Arbitrage Pricing Theory (APT), Setup, APT theorem (Ross 1976; Huberman 1982)., Proof (idea), factor zoo problem, most assets, weaker but more universal, no asymptotic arbitrage in a large market, Weakness: choice of factors, uncorrelated across assets
- References: fama-macbeth-regression, finance/alpha-stacking, finance/asymptotic-arbitrage-large-markets, finance/capm, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/markowitz-mean-variance

## Entity: finance/arbitrage-definition
- Title: Arbitrage and Its Absence
- Category: Pricing
- Language: en
- Key Concepts: main filter, Intuition, modelling axiom, Formal Definition, Equivalent Formulations, arbitrage opportunity, Via the set of attainable claims., NA1 / NUPBR (No Unbounded Profit with Bounded Risk), Strengthenings and Generalizations, Related Articles, continuous, arbitrage-free, Arbitrage and Its Absence, A note on realism, Via discounted increments.
- References: finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/semimartingale-models
- Backlinks: cost-of-carry, finance/asymptotic-arbitrage-large-markets, finance/bs-market-self-financing, finance/crr-model, finance/ftap-first-fundamental-theorem

## Entity: finance/asymptotic-arbitrage-large-markets
- Title: Asymptotic Arbitrage and Large Markets
- Category: Pricing
- Language: en
- Key Concepts: diversify in the limit, Definition (AA of the first kind)., equivalence, asymptotic arbitrage of the second kind, contiguity, Connection to Ross's APT, Asymptotic arbitrage, Contiguity as a criterion, mutual contiguity, Related Articles, statistical arbitrage, Asymptotic Arbitrage and Large Markets, Model convergence and contiguity, large financial market, Definition (AA of the second kind).
- References: black-scholes, fama-macbeth-regression, finance/alpha-stacking, finance/arbitrage-definition, finance/crr-model, finance/ftap-first-fundamental-theorem
- Backlinks: finance/apt-ross, finance/arbitrage-definition, math/weak-convergence-prokhorov

## Entity: finance/asymptotic-expansion-finance
- Title: Asymptotic Expansions in Finance
- Category: Pricing
- Language: en
- Key Concepts: Model intuition, Small-Time Expansion for Local Volatility, The SABR Formula (Hagan-Woodward), Small Volatility Expansion, Asymptotic and perturbation methods, Prerequisites, Large/Small Strike Asymptotics (Lee's Moment Formula), Comparison of Methods, Heat Kernel Expansion, Fast calibration, asymptotic expansion in the vol-of-vol $\nu$ and time $T$, Smile extrapolation, Analytic Greeks, Singular Perturbation: Fast Mean-Reverting Stochastic Vol, geodesic volatility
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/dupire-local-vol, finance/sabr-model, heston-model, manifold-learning
- Backlinks: finance/sabr-model

## Entity: avellaneda-stoikov
- Title: Avellaneda-Stoikov Model
- Category: Pricing
- Language: en
- Key Concepts: Constant parameters, inventory risk, Overview & Background, Intuition, The Reservation Price, Inventory risk component, Adverse selection component, No adverse selection, Risk aversion duality, Equity Market Making, Bond Market Making, Symmetric arrival rates, Reservation Price vs. Inventory, Mathematical Framework, Volatility effect
- References: brownian-motion, cox-process, finance/monte-carlo-method, hidden-markov-models, optimal-execution
- Backlinks: brownian-motion, cox-process, finance/hidden-markov-models, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/order-flow-imbalance, finance/vwap-twap, market-microstructure, spread, stochastic-control

## Entity: finance/bachelier-formula
- Title: Bachelier Formula
- Category: Pricing
- Language: en
- Key Concepts: absolute, additive, multiplicative, Bachelier Formula, strictly positive, April 2020 episode, Bachelier as the "small-vol limit" of BS, naturally, complete, historical predecessor, 5 years before, Historical significance, can become negative, Related Articles, Bachelier's model
- References: attention-mechanisms, black-scholes, brownian-motion, finance/black-scholes-derivations, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, geometric-brownian-motion
- Backlinks: blacks-model, finance/black-scholes-derivations, finance/efficient-market-hypothesis

## Entity: finance/barrier-asian-options
- Title: Barrier and Asian Options
- Category: Pricing
- Language: en
- Key Concepts: Exotic options, Asian Options, Implementation, Barrier Options, Barrier and Asian Options, Barrier option types:, Down-and-Out Call, Arithmetic Asian Call, Rubinstein-Reiner Formula (Down-and-Out Call, $H < K$), Related Articles, Geometric Asian
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/variance-gamma
- Backlinks: brownian-bridge, finance/upper-lower-hedging-prices

## Entity: blacks-model
- Title: Black's Model (1976)
- Category: Pricing
- Language: en
- Key Concepts: caplet, Energy markets, Shifted Lognormal Model, futures and forward contracts, Implied Volatility Conventions, The Black Formula, normal, Python Implementation, Black's model, payer swaption, Interest rate derivatives, Calibration input, Black's Model (1976), Applications, Commodity options
- References: black-scholes, finance/bachelier-formula, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/sabr-model, finance/swaps, finance/volatility-surface, heston-model
- Backlinks: cost-of-carry, risk-neutral-valuation

## Entity: black-scholes
- Title: Black-Scholes Model
- Category: Pricing
- Language: en
- Key Concepts: The Black-Scholes PDE, Jump risk, Overview & Background, Gamma-Theta tradeoff, [[monte-carlo-method]], Convertible Bond Pricing, The Greeks, [[heston-model]], Geometric Brownian Motion, Risk Management, Interest rate risk, Continuous hedging, Stochastic volatility, Mathematical Framework, Python Implementation
- References: brownian-motion, exotic-options, finance/monte-carlo-method, finance/sabr-model, geometric-brownian-motion, heston-model, numerical-pde-finance
- Backlinks: arma-models, automatic-differentiation, bayesian-black-litterman, blacks-model, brownian-motion, change-of-variables, convertible-bonds, convex-optimization-trading, deep-galerkin, dv01, fama-macbeth-regression, feynman-kac, finance/asymptotic-arbitrage-large-markets, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/barrier-asian-options, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/credit-risk-models, finance/crr-model, finance/delta-hedging-practice, finance/dispersion-trading, finance/energy-commodity-derivatives, finance/follmer-schweizer, finance/free-boundary-american, finance/girsanov-semimartingales, finance/heston-model, finance/levy-esscher-continuous, finance/libor-market-model, finance/longstaff-schwartz, finance/merton-jump-diffusion, finance/monte-carlo-method, finance/nelson-siegel-svensson, finance/optimal-stopping-american, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/stefan-problem-american, finance/swaps, finance/variance-swaps-vix, finance/volatility-surface, garman-kohlhagen, geometric-brownian-motion, greeks-options, lln-clt, math/martingale-representation, ml-options-pricing, model-free-rl-factors, multivariable-calculus, numeraire-invariant-hedging, numerical-pde-finance, option-strategies, ornstein-uhlenbeck-process, pinns, put-call-parity, regime-switching-factors, risk-neutral-valuation, sharpe-ratio-statistics, survival-risk-prediction, svi-model, taylor-series, ts-cs-factor-analysis, volatility-arbitrage, volatility-smile

## Entity: finance/bond-options-gaussian
- Title: Bond Options in Gaussian Models
- Category: Pricing
- Language: en
- Key Concepts: negative, American, Jacobs-Jones formula (1986), Bond Options in Gaussian Models, Distribution., spot martingale measure, HJM framework, Connection to multi-factor models, American bond option, one-factor Gaussian models, calibrated, forward measure, exactly the [[black-scholes|Black-Scholes formula]], discount rate, Related Articles
- References: black-scholes, brownian-motion, dv01, finance/cir-hull-white, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american
- Backlinks: finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/interest-rate-term-structure, finance/libor-market-model, finance/short-rate-models, finance/stefan-problem-american

## Entity: finance/bootstrapping-yield-curve
- Title: Bootstrapping the Yield Curve
- Category: Pricing
- Language: en
- Key Concepts: Swap pricing, separate curves, Prerequisites, Curve trades, bootstrap equation, Interpolation Methods, Model calibration, Bootstrapping the Yield Curve, Yield curve bootstrapping, Long End: Swaps (2Y to 50Y), Yield Curve Shape, Discounting curve, Bond relative value, Turn-of-Year Effects, Monotone convex
- References: finance/bond-options-gaussian, finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, libor-market-model
- Backlinks: finance/nelson-siegel-svensson, finance/swaps, multi-curve-framework

## Entity: finance/capm
- Title: CAPM (Capital Asset Pricing Model)
- Category: Pricing
- Language: en
- Key Concepts: Intertemporal CAPM (ICAPM), Alpha and active management, Beta vs. return, CAPM (Capital Asset Pricing Model), Value, Size, Security Market Line (SML), relative market capitalizations, Beta as a risk metric, Alpha is the bread and butter of the active management industry, "asset risk premium" = "beta" × "market risk premium", CAPM, Homogeneity assumption, The core equation, Related Articles
- References: fama-macbeth-regression, finance/apt-ross, finance/efficient-market-hypothesis, finance/factor-attribution, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: finance/apt-ross, finance/efficient-market-hypothesis, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/caps-floors-swaptions
- Title: Caps, Floors and Swaptions
- Category: Pricing
- Language: en
- Key Concepts: swaption matrix, Bermudan swaptions, Black's Formula for Caplets, Swaption vol matrix, SOFR transition, European Swaptions, caplet, Prerequisites, Caps, Floors and Swaptions, European payer swaption, LIBOR Market Model, floor, LMM/BGM to Caps and Swaptions, cap vol curve, Related Articles
- References: black-scholes, finance/bond-options-gaussian, finance/sabr-model, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, cost-of-carry, finance/change-of-numeraire, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/change-of-numeraire
- Title: Change of Numeraire
- Category: Pricing
- Language: en
- Key Concepts: numeraire-invariance principle, Choose the numeraire, Identify the payoff, Prerequisites, Adjust drifts, Key Identities Summary, Radon-Nikodym Derivative Between Measures, numeraire, Practical Recipe, Change of Numeraire, The Swap Measure and Swaptions, change of numeraire, Application to caplets., Compute the Radon-Nikodym derivative, swaption Black formula
- References: black-scholes, brownian-motion, finance/caps-floors-swaptions, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps
- Backlinks: blacks-model, finance/hjm-framework, risk-neutral-valuation

## Entity: finance/complete-incomplete-markets
- Title: Complete and Incomplete Markets. Second Fundamental Theorem
- Category: Pricing
- Language: en
- Key Concepts: Incomplete:, or an entire convex set, additional choice, Examples of complete and incomplete markets, completeness, Definition, $\Leftarrow$ (uniqueness $\Rightarrow$ completeness)., What to do on an incomplete market, incomplete, none, Super-hedging, Mean-square error minimization, Complete:, Theorem., either a single point
- References: finance/bs-market-self-financing, finance/crr-model, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion, heston-model, optional-decomposition
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/crr-model, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: convertible-bonds
- Title: Convertible Bonds
- Category: Pricing
- Language: en
- Key Concepts: Python: Binomial Tree Pricing, Balanced, Payoff Structure, put condition, puttable convertible, Rho, convertible bond, Credit mispricing, Reduced-Form Credit Model, call condition, Conversion Price, Hard call protection, PDE Approach, Delta, Convertible Arbitrage
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, finance/xva, heston-model, partial-differential-equations
- Backlinks: numerical-pde-finance

## Entity: finance/copula-models
- Title: Copula Models
- Category: Pricing
- Language: en
- Key Concepts: Overview & Background, Tail asymmetry, Frank copula, Counterparty Credit Risk, Copula Models, average correlation, CDO Tranche Pricing, Gumbel copula, Dynamic copulas (Patton, 2006), Insurance Cat Bonds, Mathematical Framework, Tail Dependence Coefficients, Python Implementation, Stationarity, Clayton copula
- References: cornish-fisher-cvar, cox-process, extreme-value-theory, finance/value-at-risk, finance/xva

## Entity: cost-of-carry
- Title: Cost of Carry
- Category: Pricing
- Language: en
- Key Concepts: Cash-and-Carry Arbitrage, fair value, Stock with continuous dividend yield $q$, basis, Cost of Carry Components, Cost of Carry, Reverse cash-and-carry, The General Formula, Contango, Futures vs Forwards: Convexity Adjustment, cost of carry, Sufficient liquidity, Storable asset, Stock with discrete dividends, Non-dividend-paying stock
- References: blacks-model, finance/arbitrage-definition, finance/caps-floors-swaptions, finance/swaps, finance/xva, risk-neutral-valuation
- Backlinks: finance/swaps

## Entity: finance/crr-model
- Title: Cox-Ross-Rubinstein Binomial Model (CRR)
- Category: Pricing
- Language: en
- Key Concepts: binomial formula, Model, discrete delta hedging, working tool, European option price, true, complete, Martingale measure, Claim., No-arbitrage condition, Replicating portfolio (hedging), Convergence to Black-Scholes, Related Articles, Why this matters in practice, Cox-Ross-Rubinstein Binomial Model (CRR)
- References: black-scholes, finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/black-scholes-derivations, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/stefan-problem-american, math/central-limit-theorem, math/discrete-markov-chains, math/optimal-stopping-markov, math/weak-convergence-prokhorov

## Entity: finance/delta-hedging-practice
- Title: Delta Hedging in Practice
- Category: Pricing
- Language: en
- Key Concepts: Gamma risk, no-transaction band, Gamma Scalping, Model Risk, Gamma scalping, Vega risk, The Cost of Rebalancing, Practical Challenges, Gap Risk, Whalley-Wilmott Hedging Bandwidth, Discrete Rebalancing Error, total P&L of a delta-hedged position, Python Implementation, Transaction Costs and Leland's Adjustment, volga
- References: black-scholes, finance/variance-swaps-vix, finance/volatility-surface, greeks-options, heston-model, option-strategies
- Backlinks: deep-hedging, greeks-options

## Entity: finance/discrete-girsanov-esscher
- Title: Discrete Girsanov and the Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: how, explicit, Idea., arbitrary, Esscher, minimum Esscher measure, Why have both, A note on incomplete markets, Conditional Esscher., Girsanov, mean shift, The Esscher transform: general case, Related Articles, Esscher transform, Discrete Girsanov and the Esscher Transform
- References: finance/complete-incomplete-markets, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, finance/shannon-entropy, finance/upper-lower-hedging-prices, geometric-brownian-motion
- Backlinks: finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous

## Entity: finance/dupire-local-vol
- Title: Dupire Local Volatility Model
- Category: Pricing
- Language: en
- Key Concepts: Local Volatility (Dupire, 1994), Implementation, Dupire Local Volatility Model, calibrated once, Dupire Equation, Local Vol vs Stochastic Vol, Related Articles
- References: finance/rough-volatility, finance/sabr-model, finance/variance-swaps, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/black-scholes-derivations, finance/variance-swaps, finance/volatility-surface, lsv-model, volatility-smile

## Entity: finance/efficient-market-hypothesis
- Title: Efficient Market Hypothesis (EMH)
- Category: Pricing
- Language: en
- Key Concepts: Strong form., EMH, behavioural finance, Three forms, Adaptive Market Hypothesis, all, Critique and revision, Semi-strong form., evolutionarily adaptive, Herding and bubbles, Value anomaly, martingale, Weak form., there exists, FTAP
- References: brownian-motion, fama-macbeth-regression, finance/apt-ross, finance/bachelier-formula, finance/capm, finance/ftap-first-fundamental-theorem, finance/markowitz-mean-variance, finance/stylized-facts-returns
- Backlinks: causal-inference, finance/apt-ross, finance/capm, finance/markowitz-mean-variance, finance/stylized-facts-returns

## Entity: finance/energy-commodity-derivatives
- Title: Energy & Commodity Derivatives
- Category: Pricing
- Language: en
- Key Concepts: option on the spread, Schwartz-Smith Two-Factor Model, Price floor at zero, non-storable, Cooling Degree Days (CDD), Prerequisites, Heating Degree Days (HDD), Regime switching, Contango, Scarcity dynamics, equilibrium price, Cumulative HDD/CDD, Forward Pricing and Cost of Carry, Energy & Commodity Derivatives, Schwartz One-Factor Model
- References: black-scholes, brownian-motion, finance/levy-processes, finance/optimal-stopping-american, finance/real-options, finance/swaps
- Backlinks: finance/real-options

## Entity: finance/ftap-first-fundamental-theorem
- Title: First Fundamental Theorem (FTAP)
- Category: Pricing
- Language: en
- Key Concepts: Proof idea: necessity ($\Rightarrow$), The crucial point:, Continuous time: NFLVR, First Fundamental Theorem (FTAP), conditional Esscher transforms, risk-neutral measure, arbitrage price, Pricing a derivative via the martingale measure, equivalent martingale measure, fails, geometric, Theorem (Harrison-Pliska, 1981; Dalang-Morton-Willinger)., Statement (discrete case), Historical note, Proof idea: sufficiency ($\Leftarrow$)
- References: finance/arbitrage-definition, finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/apt-ross, finance/arbitrage-definition, finance/asymptotic-arbitrage-large-markets, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/capm, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/efficient-market-hypothesis, finance/girsanov-semimartingales, finance/optimal-stopping-american, finance/self-similarity-fractality, finance/semimartingale-models, finance/stefan-problem-american, finance/upper-lower-hedging-prices, math/conditional-expectation-sigma, math/discrete-martingales, math/kolmogorov-probability-axioms, math/sigma-algebra-measurability, optional-decomposition, risk-neutral-valuation

## Entity: finance/free-boundary-american
- Title: Free Boundary Problem for American Options
- Category: Pricing
- Language: en
- Key Concepts: American constraint, Binomial Tree (CRR), Free Boundary Problem for American Options, smooth pasting, Mortgage prepayment, value matching, free boundary problem, Prerequisites, Real options, Early Exercise Premium, Exercise Boundary Shape, perpetual, The Black-Scholes PDE with Constraint, Finite Differences (PDE), Problem Formulation
- References: black-scholes, brownian-motion, finance/black-scholes-derivations, finance/longstaff-schwartz, finance/monte-carlo-method
- Backlinks: finance/optimal-stopping-american

## Entity: garman-kohlhagen
- Title: Garman-Kohlhagen Model
- Category: Pricing
- Language: en
- Key Concepts: Carry trade options, ATM Conventions, Premium-Adjusted Delta, Garman-Kohlhagen Model, Volatility Smile: Risk Reversals and Butterflies, vanna-volga, Garman-Kohlhagen (GK) model, Put-Call Symmetry in FX, Emerging market FX, Corporate hedging, Pricing Formulas, 25-delta butterfly, Vanna-Volga Method, Delta Conventions, 25-delta risk reversal
- References: black-scholes, greeks-options, heston-model, option-strategies, put-call-parity
- Backlinks: option-strategies, put-call-parity

## Entity: finance/girsanov-semimartingales
- Title: Girsanov's Theorem for Semimartingales
- Category: Pricing
- Language: en
- Key Concepts: incompleteness, Short formula., shifts Brownian motion by a drift, Application to Black-Scholes, Jump part and incompleteness, The semimartingale version, Novikov's condition, Theorem (Girsanov, 1960)., path-wise invariant, Related Articles, Novikov's condition and its analogues, the quadratic variation $C$ is preserved, re-intensify, density process, drift $B$ and jump compensator $\nu$ change
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/levy-esscher-continuous, finance/semimartingale-models, finance/shannon-entropy, heston-model
- Backlinks: feynman-kac, finance/bachelier-formula, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/change-of-numeraire, finance/discrete-girsanov-esscher, finance/hjm-framework, finance/levy-esscher-continuous, finance/semimartingale-models, finance/short-rate-models, innovation-process, math/absolute-continuity-process-measures, math/cameron-martin-formula, math/conditional-expectation-sigma, math/contiguity-measures, math/convergence-stochastic-integrals, math/density-processes, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/hellinger-processes, math/local-asymptotic-normality, math/martingale-representation, nonlinear-filtering, radon-nikodym, risk-neutral-valuation

## Entity: finance/hjm-framework
- Title: HJM Framework
- Category: Pricing
- Language: en
- Key Concepts: Bond Price Dynamics, Prerequisites, Volatility specification, Markovian HJM: Ritchken-Sankarasubramanian, Forward Rate Dynamics, Monte Carlo Implementation, Computational cost, HJM Framework, Calibration, Practical Limitations, Short-Rate Models as Special Cases, Heath-Jarrow-Morton (HJM) framework, HJM drift condition, The LIBOR Market Model Connection, finite-dimensional Markov process
- References: brownian-motion, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/girsanov-semimartingales, finance/short-rate-models, finance/swaps, stochastic-differential-equations

## Entity: finance/heston-model
- Title: Heston Model
- Category: Pricing
- Language: en
- Key Concepts: Carr-Madan method, Background, Python: Path Simulation and Option Pricing, Prerequisites, Heston Model, volatility smile and skew, The Feller Condition, Pricing, Semi-Analytic Pricing via Characteristic Function, Volatility, Volatility Dynamics Visualization, Asset Distribution, Parameters, Calibration, Rough volatility
- References: black-scholes, finance/particle-filter, finance/sabr-model, garch-models, geometric-brownian-motion
- Backlinks: heston-fourier, heston-model

## Entity: finance/interest-rate-term-structure
- Title: Interest Rate Term Structure
- Category: Pricing
- Language: en
- Key Concepts: Liquidity Preference (Hicks, 1939), par rate, Affine Term Structure Models, term premium, Theories of the Term Structure, Forward Rates, Nelson-Siegel Empirical Model, instantaneous forward rate, Preferred Habitat (Modigliani-Sutch, 1966), Market Segmentation, Python Implementation, pure expectations hypothesis, The Inverted Yield Curve, Adrian-Crump-Moench (ACM, 2013), Interest Rate Term Structure
- References: dv01, finance/bond-options-gaussian, finance/libor-sofr, finance/nelson-siegel-svensson, finance/short-rate-models, finance/swaps
- Backlinks: finance/nelson-siegel-svensson, finance/short-rate-models, multi-curve-framework

## Entity: optional-decomposition
- Title: Kramkov Optional Decomposition
- Category: Pricing
- Language: en
- Key Concepts: universal, Primal, super-hedging strategy, Optional decomposition and American options, surely covers, adapted, Lagrangian duality, Overview, Proof (sketch), Dual, Application to super-hedging, every, self-financing capital, Doob-Meyer recap, Kramkov Optional Decomposition
- References: finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, finance/semimartingale-models, finance/upper-lower-hedging-prices
- Backlinks: finance/complete-incomplete-markets, finance/optimal-stopping-american, finance/upper-lower-hedging-prices, math/backward-sde

## Entity: finance/libor-market-model
- Title: LIBOR Market Model (BGM)
- Category: Pricing
- Language: en
- Key Concepts: Bermudan swaptions, Black's formula by construction, Forward LIBOR Rates, LIBOR Market Model (BGM), Correlation, Caplet vols, SOFR transition, Drift under the Terminal Measure, CMS products, Caplet Pricing — Black's Formula, Prerequisites, cap/floor calibration is trivial, LIBOR Market Model, Swaption Pricing — Rebonato's Approximation, Joint optimization
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/monte-carlo-method, finance/swaps, hjm-framework, stochastic-differential-equations

## Entity: lsv-model
- Title: Local Stochastic Volatility (LSV)
- Category: Pricing
- Language: en
- Key Concepts: The LSV Synthesis, The Calibration Nightmare (Particle Methods), Local Volatility (LV) e.g., Dupire, Particle Methods (Monte Carlo with interacting particles), Local Stochastic Volatility (LSV), Local Leverage Function, Why Tier-1 Banks Require LSV, Stochastic Volatility (SV) e.g., Heston, Local Volatility (LV), Related Topics, The Flaws of Predecessors, Stochastic Volatility (SV), Visualization: The Volatility Hierarchy
- References: finance/dupire-local-vol, heston-model, hmm-particle-filters
- Backlinks: mcmc, path-dependent-volatility

## Entity: finance/levy-esscher-continuous
- Title: Lévy Processes and the Continuous Esscher Transform
- Category: Pricing
- Language: en
- Key Concepts: Option pricing in Lévy models, exponential Lévy model, Lévy measure, incompleteness, Definition, continuous-time Esscher transform, Lévy Processes and the Continuous Esscher Transform, The Esscher martingale measure, Examples, CGMY, Stationary increments, Continuous-time Esscher transform, natural canonical choice, Lévy-Khintchine formula., Calibration to the market
- References: black-scholes, brownian-motion, finance/discrete-girsanov-esscher, finance/fft, finance/girsanov-semimartingales, finance/semimartingale-models, finance/shannon-entropy, geometric-brownian-motion, heston-model
- Backlinks: finance/discrete-girsanov-esscher, finance/girsanov-semimartingales, finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/semimartingale-models, finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/markowitz-mean-variance
- Title: Markowitz Mean-Variance Portfolio Theory
- Category: Pricing
- Language: en
- Key Concepts: Sharpe ratio, Capital Market Line (CML), "market portfolio", Black-Litterman (1992), Efficient frontier, pre-stochastic, Weaknesses of classical Markowitz:, Historical role, Markowitz Mean-Variance Portfolio Theory, Hierarchical Risk Parity (López de Prado, 2016), pre-arbitrage, CVaR/ES optimization, Related Articles, a rational investor should jointly optimize expected return and risk, hyperbola
- References: bayesian-black-litterman, convex-optimization-trading, cornish-fisher-cvar, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, finance/stylized-facts-returns
- Backlinks: convex-analysis, finance/apt-ross, finance/capm, finance/efficient-market-hypothesis, finance/stylized-facts-returns, information-geometry-finance, math/law-of-large-numbers, nonlinear-shrinkage, stochastic-control

## Entity: martingale-optimal-transport
- Title: Martingale Optimal Transport
- Category: Pricing
- Language: en
- Key Concepts: The Setup: Model-Free Pricing, model-free, Dual Problem (Super-Replication), Visualization: Sand vs. Martingale Sand, The Primal and Dual Problems, Related Topics, Why Citadel and Tier-1 Banks Use It, Martingale Optimal Transport (MOT), Martingale, Martingale Optimal Transport, Connection to Optimal Transport, Primal Problem
- References: convex-optimization-trading, convexity, martingale, optimal-transport, risk-neutral-valuation
- Backlinks: convexity, martingale

## Entity: finance/nelson-siegel-svensson
- Title: Nelson-Siegel-Svensson Yield Curve Model
- Category: Pricing
- Language: en
- Key Concepts: Calibration, Example, Duration management, XVA, Nelson-Siegel-Svensson Yield Curve Model, Nelson-Siegel (1987), Bond pricing, Nelson-Siegel-Svensson (NSS), Uses, Typical Curve Shapes, Central bank publication, Related Articles, Instantaneous Forward Rate, Svensson Extension (1994)
- References: black-scholes, finance/bootstrapping-yield-curve, finance/interest-rate-term-structure, finance/oas, finance/swaps, finance/xva, heston-model
- Backlinks: finance/bootstrapping-yield-curve, finance/cir-hull-white, finance/interest-rate-term-structure, finance/libor-sofr

## Entity: numeraire-invariant-hedging
- Title: Numeraire-Invariant Quadratic Hedging
- Category: Pricing
- Language: en
- Key Concepts: Numeraire-Invariant Quadratic Hedging, Deep hedging, Advanced Context, Minimal Martingale Measure (MMM), Variance-Optimal Martingale Measure (VOMM), Connection to delta hedging, Utility-based alternatives, Optimality, Parameter Table, Transaction costs, Visualization, Decomposition additivity, Python: Simulating and Measuring Hedging Error, Key Properties, Change of Numeraire
- References: black-scholes, finance/hierarchical-risk-parity, finance/levy-processes, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/follmer-schweizer

## Entity: optimal-execution
- Title: Optimal Execution: Almgren-Chriss
- Category: Pricing
- Language: en
- Key Concepts: Exponential Decay, Optimal Execution: The Almgren-Chriss Model, Dark Pools, Price Risk, Temporary Impact, Visualization: Trading Trajectories, The Fundamental Trade-off, Market Impact, Permanent Impact, Modern Extensions, Price Risk (Volatility), Risk-Neutral ($\lambda \to 0$), The Solution: The Efficient Frontier, Risk-Averse ($\lambda \to \infty$), Deep RL Execution
- References: deep-rl-execution, stochastic-control, vpin
- Backlinks: ai-market-making, amihud-illiquidity, amm-mechanics, avellaneda-stoikov, cross-impact, deep-rl-execution, finance/dark-pools, finance/kyle-lambda, finance/market-impact-scaling, finance/nash-equilibrium, finance/vwap-twap, futures-hedging, kyle-model, liquidation-signals, lob-prediction, market-impact, market-microstructure, path-integral-control, reinforcement-learning, rl-trader, stochastic-control, vpin

## Entity: finance/optimal-stopping-american
- Title: Optimal Stopping and American Options
- Category: Pricing
- Language: en
- Key Concepts: free boundary, Snell envelope, Connection to PDE: the Stefan problem, supermartingale characterization, The Snell envelope, Theorem., Optimal Stopping and American Options, Claim 1., call, Hedging an American option, Related Articles, continuous, The payoff, stopping time, Definition.
- References: black-scholes, finance/crr-model, finance/free-boundary-american, finance/ftap-first-fundamental-theorem, finance/stefan-problem-american, finance/upper-lower-hedging-prices, optional-decomposition
- Backlinks: feynman-kac, finance/crr-model, finance/energy-commodity-derivatives, finance/real-options, finance/stefan-problem-american, math/discrete-martingales, math/optimal-stopping-markov, numerical-pde-finance, optional-decomposition, stochastic-control

## Entity: greeks-options
- Title: Option Greeks
- Category: Pricing
- Language: en
- Key Concepts: Gamma-Theta Tradeoff and Delta Hedging, Theta, Second-Order Greeks, Gamma scalping, Rho, Higher-Order Greeks, Portfolio aggregation, Discrete hedging, The Fundamental PDE Relationship, Delta, First-Order Greeks, Smile effects, Transaction costs, Vega, Practical Considerations
- References: black-scholes, dv01, exotic-options, finance/delta-hedging-practice, geometric-brownian-motion, heston-model, option-strategies, put-call-parity
- Backlinks: finance/delta-hedging-practice, finance/variance-swaps-vix, frtb-sa-mr, garman-kohlhagen, option-strategies, put-call-parity, volatility-smile

## Entity: option-strategies
- Title: Option Strategies
- Category: Pricing
- Language: en
- Key Concepts: Greeks of Combinations, Ratio Spreads, Vol smile, Strangle, Payoff Diagram: Bull Call Spread, Liquidity, Max profit, Margin, Bull Call Spread, Dividends, Iron Condor, Breakeven, Volatility Strategies, Option Strategies, Bear Put Spread
- References: black-scholes, garman-kohlhagen, greeks-options, heston-model, put-call-parity
- Backlinks: finance/delta-hedging-practice, garman-kohlhagen, greeks-options, put-call-parity

## Entity: pairs-trading
- Title: Pairs Trading Strategy
- Category: Pricing
- Language: en
- Key Concepts: Spread Modeling as OU Process, cointegration breakdown, Hedge Ratio ($\beta$), Borrow costs, Pairs Trading, Python: Full Pairs Trading Backtest Pipeline, Background and History, Holding period, Cointegration, Z-Score, Key Metrics, Transaction costs and borrow, Multivariate, cointegrated, Parameter Table
- References: finance/cointegration, finance/monte-carlo-method, finance/particle-filter, finance/value-at-risk, mcmc, ornstein-uhlenbeck-process
- Backlinks: fastest-mean-reversion, fractional-cointegration, ornstein-uhlenbeck-process, pca-statarb, vine-copulas

## Entity: path-dependent-volatility
- Title: Path-Dependent Volatility
- Category: Pricing
- Language: en
- Key Concepts: path-dependent exotic options, Julien Guyon, Moving Average, 4. Connection to Signature-based Models, Path-Dependent Volatility (PDV), 2. Models of Julien Guyon, Visualization: Path-Memory effect, 1. The Limitation of Dupire's Model, Advantage, Path Signatures, Interacting Particle System, McKean-Vlasov, Related Topics, Local Volatility (LV), realized path
- References: hmm-particle-filters, lsv-model, neural-sdes-finance, rough-paths, signature-based-models
- Backlinks: signature-based-models

## Entity: put-call-parity
- Title: Put-Call Parity
- Category: Pricing
- Language: en
- Key Concepts: Extracting Market Information, Futures Options, Dividend-Paying Stocks, Vol surface construction, Connection to Greeks, no-arbitrage band, Extensions, Implied dividends, Model validation, Portfolio A, Synthetic Positions, Case 1, Forward Version, The Core Identity, Put-Call Parity
- References: black-scholes, finance/bs-market-self-financing, garman-kohlhagen, greeks-options, option-strategies
- Backlinks: garman-kohlhagen, greeks-options, option-strategies

## Entity: finance/follmer-schweizer
- Title: Quadratic Hedging and the Föllmer-Schweizer Approach
- Category: Pricing
- Language: en
- Key Concepts: Discrete trading, Discrete Approximation, Motivation: Incomplete Markets, variance-optimal martingale measure, Mean-Variance Hedging, Key property, Related Articles, Cost process, incomplete markets, Quadratic hedging, Stochastic volatility, Methods Comparison, Local Risk-Minimisation (Schweizer 1991), Minimal Martingale Measure (MMM), Jumps
- References: black-scholes, finance/longstaff-schwartz, finance/monte-carlo-method, heston-model, numeraire-invariant-hedging
- Backlinks: finance/complete-incomplete-markets, finance/upper-lower-hedging-prices, optional-decomposition, risk-neutral-valuation

## Entity: quantum-amplitude-estimation
- Title: Quantum Amplitude Estimation (QAE)
- Category: Pricing
- Language: en
- Key Concepts: Quantum Phase Estimation, Maximum Likelihood QAE (ML-QAE), Payoff Encoding, Quantum Amplitude Estimation (QAE) in Finance, State Preparation, 1,000 times, The Quadratic Speedup, Monte Carlo (MC) Simulation, Iterative QAE (IQAE), Grover Operator ($\mathcal{Q}$), quadratic speedup, Related Topics, Quantum Amplitude Estimation (QAE), Near-Term Implementation (NISQ), How QAE Works
- References: finance/monte-carlo-method, finance/xva, quantum-math
- Backlinks: quantum-math

## Entity: finance/real-options
- Title: Real Options
- Category: Pricing
- Language: en
- Key Concepts: Option to abandon, Technology investment, Perpetual Option to Invest, Prerequisites, Real options, Suboptimal exercise, Hysteresis: Entry and Exit, Model risk, Option to defer, Binomial trees, Option to expand, Oil exploration, Least-squares Monte Carlo, hysteresis, equilibrium approach
- References: black-scholes, brownian-motion, finance/energy-commodity-derivatives, finance/optimal-stopping-american, finance/swaps, heston-model
- Backlinks: finance/energy-commodity-derivatives

## Entity: risk-neutral-valuation
- Title: Risk-Neutral Valuation
- Category: Pricing
- Language: en
- Key Concepts: The Central Formula, Risk-Neutral Does Not Mean Risk-Indifferent, Option pricing, market price of risk, The Replication Argument, Fundamental Theorems of Asset Pricing, Connection to Girsanov's Theorem, Multi-Asset and Numeraire Changes, PDE methods, complete, risk-neutral, not unique, computational device, $T$-forward measure, Interest rate derivatives
- References: black-scholes, blacks-model, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/monte-carlo-method, finance/shannon-entropy, finance/swaps, finance/xva, geometric-brownian-motion, heston-model, math/doleans-dade-exponential, partial-differential-equations
- Backlinks: cost-of-carry, feynman-kac, martingale, martingale-optimal-transport, stochastic-processes

## Entity: finance/sabr-model
- Title: SABR Model
- Category: Pricing
- Language: en
- Key Concepts: SABR Model, Free Boundary SABR, Background, Normal SABR, CMS products, Prerequisites, Volatility Smile Visualization, $\beta$ determines backbone, Hagan's Asymptotic Implied Volatility Formula, Model risk, Stochastic Differential Equations, $\rho$ controls skew, Mathematical Framework, Python Implementation, Arbitrage violations
- References: black-scholes, finance/asymptotic-expansion-finance, finance/oas, finance/swaps, heston-model, volatility-forecasting
- Backlinks: black-scholes, blacks-model, finance/asymptotic-expansion-finance, finance/caps-floors-swaptions, finance/dispersion-trading, finance/dupire-local-vol, finance/heston-model, finance/oas, finance/rough-volatility, finance/swaps, finance/volatility-surface, hyperbolic-vol-geometry, volatility-smile

## Entity: finance/semimartingale-models
- Title: Semimartingale Models and Predictable Characteristics
- Category: Pricing
- Language: en
- Key Concepts: minimal, quadratic variation $C$ is invariant, continuous-time analogue of [[ftap-first-fundamental-theorem|FTAP]], Definition, [[brownian-motion|Brownian motion]], single language, Triplet examples, special, semimartingales, not unique, [[geometric-brownian-motion|GBM]], Related Articles, Connection to Girsanov, Theorem (NFLVR-FTAP)., Semimartingale market models
- References: brownian-motion, cox-process, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/hawkes-process, finance/levy-esscher-continuous, geometric-brownian-motion, heston-model
- Backlinks: finance/arbitrage-definition, finance/bs-market-self-financing, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/levy-esscher-continuous, math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, math/triangular-arrays-processes, optional-decomposition

## Entity: finance/black-scholes-derivations
- Title: Several Derivations of the Black-Scholes Formula
- Category: Pricing
- Language: en
- Key Concepts: Idea., replicable, one page, four fundamentally different derivations, Derivation 4: Change of variables and the heat equation, none, constant, Derivation 2: Martingale (risk-neutral measure), Binomial, limit of elementary computations, classical heat equation, why, Robustness and weaknesses, Martingale, Several Derivations of the Black-Scholes Formula
- References: black-scholes, finance/bachelier-formula, finance/crr-model, finance/dupire-local-vol, finance/ftap-first-fundamental-theorem, finance/girsanov-semimartingales, finance/stefan-problem-american, geometric-brownian-motion, heston-model
- Backlinks: finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/free-boundary-american, finance/stefan-problem-american, math/optimal-stopping-markov

## Entity: finance/short-rate-models
- Title: Short Rate Models
- Category: Pricing
- Language: en
- Key Concepts: Every short rate model implies an HJM model, Short Rate Models, Comparison, Equilibrium Models, Prerequisites, Curve fitting, Black-Derman-Toy (BDT, 1990), Short rate models, Affine Bond Pricing, Lattice Methods, Related Articles, Volatility calibration, Calibration, No-Arbitrage Models, Cox-Ingersoll-Ross (CIR, 1985)
- References: black-scholes, brownian-motion, finance/bond-options-gaussian, finance/cir-hull-white, finance/girsanov-semimartingales, finance/interest-rate-term-structure, finance/swaps, stochastic-differential-equations
- Backlinks: finance/caps-floors-swaptions, finance/change-of-numeraire, finance/hjm-framework, finance/interest-rate-term-structure

## Entity: finance/stefan-problem-american
- Title: Stefan Problem and American Options
- Category: Pricing
- Language: en
- Key Concepts: Finite differences (PSOR)., [[crr-model|CRR binomial tree with early-exercise check]]., free boundary, No closed form for $S^*(t)$ exists., obstacle, Stefan Problem and American Options, Equivalence to the optimal-stopping formulation, smooth pasting condition, Numerical methods, Holding region, Monte Carlo regression (Longstaff-Schwartz, 2001)., Integral equations for $S^*(t)$., American call: the trivial case, Setup for the American put, call
- References: black-scholes, finance/black-scholes-derivations, finance/bond-options-gaussian, finance/crr-model, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, geometric-brownian-motion
- Backlinks: finance/black-scholes-derivations, finance/bond-options-gaussian, finance/optimal-stopping-american

## Entity: svi-model
- Title: Stochastic Volatility Inspired (SVI) Model
- Category: Pricing
- Language: en
- Key Concepts: $\sigma > 0$, Stochastic Volatility Inspired (SVI), SSVI: Surface SVI, Butterfly Arbitrage, Calendar Arbitrage, $m$, Stochastic Volatility Inspired (SVI) Model, Surface SVI (SSVI), $\rho \in [-1, 1]$, Related Topics, The Raw SVI Formula, Why Parameterize the Surface?, Visualization: The Hyperbolic Smile, $a$, $b$
- References: black-scholes, finance/variance-gamma, heston-model

## Entity: finance/swaps
- Title: Types of Swaps
- Category: Pricing
- Language: en
- Key Concepts: Market risk, DV01, Par Swap Rate, PV01, Fixed leg, Background and Market Structure, Discount Curve Bootstrapping, CVA on an IRS, Asset-liability management, Cash Flow Visualization, Credit Default Swap (CDS), Mathematical Framework, Python Implementation, Model risk for exotics, Corporate hedging
- References: black-scholes, copula-models, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/sabr-model, finance/xva
- Backlinks: blacks-model, cost-of-carry, cs01, dv01, finance/bootstrapping-yield-curve, finance/caps-floors-swaptions, finance/change-of-numeraire, finance/cir-hull-white, finance/energy-commodity-derivatives, finance/hjm-framework, finance/interest-rate-term-structure, finance/isda-simm, finance/libor-market-model, finance/libor-sofr, finance/nelson-siegel-svensson, finance/real-options, finance/sabr-model, finance/short-rate-models, finance/xva, futures-hedging, risk-neutral-valuation

## Entity: finance/upper-lower-hedging-prices
- Title: Upper and Lower Hedging Prices
- Category: Pricing
- Language: en
- Key Concepts: lower price, Attainability and exact replication, Interval of consistent prices, Dual characterization, below, Theorem (price trichotomy)., utility indifference pricing, attainable, Connection to risk aversion, upper and lower hedging prices, Related Articles, Constructive computation, infimum, does, independent
- References: finance/barrier-asian-options, finance/complete-incomplete-markets, finance/follmer-schweizer, finance/ftap-first-fundamental-theorem, finance/shannon-entropy, heston-model, optional-decomposition
- Backlinks: finance/bs-market-self-financing, finance/complete-incomplete-markets, finance/discrete-girsanov-esscher, finance/ftap-first-fundamental-theorem, finance/optimal-stopping-american, optional-decomposition

## Entity: finance/variance-swaps
- Title: Variance Swaps and Volatility Risk Premium
- Category: Pricing
- Language: en
- Key Concepts: Variance Swaps and Volatility Risk Premium, Carr-Madan Model-Free Replication, Implementation, Var Swap vs Vol Swap vs VIX Futures, Payoff, Volatility Risk Premium, variance swap, Related Articles
- References: finance/bipower-variation, finance/dupire-local-vol, heston-model, volatility-forecasting
- Backlinks: finance/dispersion-trading, finance/dupire-local-vol, finance/variance-swaps-vix, finance/volatility-surface

## Entity: volatility-smile
- Title: Volatility Smile
- Category: Pricing
- Language: en
- Key Concepts: Equity markets, The smile shape varies by asset class:, FX markets, Calibration and the Volatility Surface, FX options, Historical Origin: The 1987 Crash, Why Black-Scholes Fails: Fat Tails and Skewness, Negative skew, Information content, No-arbitrage constraints, SVI, Sticky strike, Sticky delta, Negative skewness, Stochastic volatility
- References: black-scholes, finance/dupire-local-vol, finance/rough-volatility, finance/sabr-model, finance/volatility-surface, greeks-options, heston-model, merton-jump-diffusion
- Backlinks: volatility-arbitrage

## Entity: finance/volatility-surface
- Title: Volatility Surface
- Category: Pricing
- Language: en
- Key Concepts: skewness, symmetric smile, SVI Parameterization (Gatheral), Stochastic Volatility Inspired, FX markets, Breeden-Litzenberger, No-Arbitrage Constraints, Prerequisites, fatter tails, Commodity markets, Sticky strike, Sticky delta, flattens with maturity, Calendar spread constraint, Term Structure of Skew
- References: black-scholes, finance/dupire-local-vol, finance/sabr-model, finance/variance-swaps, geometric-brownian-motion, heston-model
- Backlinks: blacks-model, finance/delta-hedging-practice, finance/variance-swaps-vix, neural-sdes-finance, volatility-smile

## Entity: algorithmic-execution-twap-vwap
- Title: Algorithmic Execution: TWAP, VWAP & Almgren-Chriss
- Category: Pricing & Execution
- Language: en
- Key Concepts: See Also, 1. TWAP & VWAP Strategies, 2. Almgren-Chriss Model, TWAP:, VWAP:, Timing Risk, Market Impact, Algorithmic Execution: TWAP, VWAP & Almgren-Chriss
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
- Key Concepts: 2. Variance Reduction, 1. Monte Carlo Framework, See Also, Monte Carlo Option Pricing & Variance Reduction
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
- Key Concepts: Overview, Beta Function, Gamma Function

## Entity: projects/j-cole-fall-off
- Title: J. Cole — The Fall Off Review
- Category: Projects
- Language: en
- Key Concepts: Brutalism, Vite, Kinetic typography, The Idea, Framer Motion, Stack, TypeScript, React 19, J. Cole — The Fall Off Review, Design Language, Status, brutalist, kinetic typography

## Entity: projects/llm-wiki
- Title: LLM-Wiki
- Category: Projects
- Language: en
- Key Concepts: compounding artifact, Role separation, Implementation architecture, Stack, files the finding back into the vault, Query, [[llm]]-Wiki, The human, Ingest, Lint, Knowledge graph, Knowledge Garden, The [[llm]], Why not [[rag]], The vault
- References: llm, rag

## Entity: projects/music-results-2025
- Title: Music Results 2025
- Category: Projects
- Language: en
- Key Concepts: Discoveries, Design, Foreign, Structure, Music Results 2025, Plain HTML, The Idea, `.nojekyll`, A personal year-in-music archive, GitHub Pages, Artists, Editorial brutalism, Stack, Albums, Inline CSS + styles.css

## Entity: projects/nyquist
- Title: Nyquist
- Category: Projects
- Language: en
- Key Concepts: C++ core., What It Can Do, Market Data, Technology, Micro, Asset managers, Systemic Risk, Market Regimes, Fixed Income, Frontend, Execution & Trading, Why It's Hard to Build, Status, Meso, Compliance-grade outputs.

## Entity: projects/ultima-thule
- Title: Ultima Thule
- Category: Projects
- Language: en
- Key Concepts: Dashboard, What It Can Do, Travel Stats, Expenses, The map is a state machine, not a sheet., SwiftData is unforgiving., External data, Theme, @State Trip? goes stale., Itinerary, Journal, AI Trip Generator, Flight Tracking, Offline Access, Ultima Thule

## Entity: projects/samizdat
- Title: Кто живёт в панельке Хаски?
- Category: Projects
- Language: en
- Key Concepts: React 19 + TypeScript, Random rotations:, Кто живёт в панельке Хаски?, Stack, Quotes, Structure, The Idea, Motion, Status, Design Language, Materials, GitHub Pages, Brutal shadows:, Palette:, Vite

## Entity: quant-trading-interview-roadmap
- Title: 30-Day Quant Trading Interview Roadmap
- Category: Quant Trading
- Language: en
- Key Concepts: See Also, Days 23–27:, Days 1–7:, Days 28–30:, 30-Day Quant Trading Interview Preparation Roadmap, Weekly Roadmap, Days 8–15:, Days 16–22:
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
- Key Concepts: Put-Call Parity:, Kelly Criterion:, See Also, Geometric $Geom(p)$:, Coupon Collector:, Quant Interview Cheat Sheet: Formulas, Distributions & Shortcuts, 1. Key Probability Formulas, Dice stopping adjustment:
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
- Key Concepts: Quant Mental Math Tricks Handbook, See Also
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
- Key Concepts: 3.2 Problem Categories, 1.4 Common Misconceptions, Author's Request:, Ask / Offer Price:, Bid Price:, LeetCode, 1.6 Bad Things About Quant Trading, Section 2. Quant Trading Firms & Internships, Basic Terms:, SIG:, 1.4.3 "You Need to be a Maths Genius", Crossing the spread:, 3.1 Core Competencies, Bid-Ask Spread:, IMC:
- Backlinks: algorithmic-execution-twap-vwap, convex-optimization-in-trading, copula-models-and-tail-dependence, credit-risk-modeling-and-structural-models, crypto-quant-trading-and-amm-curves, cryptographic-zero-knowledge-in-finance, deep-reinforcement-learning-for-trading, exotic-options-and-structured-products, factor-investing-and-fama-french, fixed-income-quant-rates-and-yield-curve, hft-order-types-and-dark-pools, high-frequency-market-making-avellaneda-stoikov, high-frequency-stat-arb-lead-lag, high-frequency-trading-and-orderbook, interest-rate-derivatives-swaps-caps-floors, limit-order-book-matching-engine-design, machine-learning-for-quant-trading, market-impact-models-square-root-law, market-microstructure-noise-and-realized-volatility, monte-carlo-option-pricing-and-variance-reduction, optimal-stopping-american-options, optimal-stopping-and-kelly, option-greeks-and-volatility, order-book-dynamics-and-lOB-modeling, portfolio-optimization-and-black-litterman, portfolio-risk-decomposition-marginal-var, quant-brainteasers-handbook, quant-coding-interview-leetcode-patterns, quant-firm-interview-math-brainteasers, quant-firm-interview-playbooks, quant-interview-cheat-sheet, quant-market-making-mechanics, quant-mental-math-tricks-handbook, quant-risk-management-var-cvar, quant-trader-mental-math-rapid-trainer, quant-trading-interview-qna, quant-trading-interview-roadmap, stat-tests-for-trading-strategies, statistical-arbitrage-and-pairs-trading, stochastic-calculus-and-ito-lemma, stochastic-volatility-heston-model, systematic-alpha-research-and-backtesting, volatility-surface-sabr-model, volatility-trading-and-variance-swaps

## Entity: information-geometry-finance
- Title: Information Geometry in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: Connection to [[shannon-entropy|Entropy]], Riemannian [[manifold-learning|Manifold]], The Statistical [[manifold-learning|Manifold]], Information Geometry, Application: Distance Between Market Regimes, Application: Portfolio Optimization, Visualization: Curved Probability Space, Related Topics, Information Geometry in Finance, Fisher Information Metric (FIM), Regime Shifts, Information-Geometric Portfolio Optimization
- References: entropy-pooling, finance/fisher-transform, finance/markowitz-mean-variance, finance/shannon-entropy, manifold, manifold-learning
- Backlinks: f-divergences, mle

## Entity: path-integral-control
- Title: Path Integral Control in Finance
- Category: Quantitative Theory
- Language: en
- Key Concepts: Reinforcement Learning, Applications in High-Frequency Trading, Path Integral Control in Finance, The Quantum Physics Connection, High-Dimensional Execution, linear Schrödinger-type PDE, The Mathematical Breakthrough, Soft Actor-Critic (SAC), Related Topics, Maximum [[shannon-entropy|Entropy]] RL, Feynman-Kac Theorem, Softmax (or Boltzmann) weighted average, Path Integral Control (Path Integral Differential Dynamic Programming - PI-DDP), Visualization: The Path Integral
- References: finance/shannon-entropy, merton-portfolio, optimal-execution, quantum-math, reinforcement-learning, stochastic-control

## Entity: quantum-phase-estimation
- Title: Quantum Phase Estimation & Shor's Algorithm
- Category: Quantum
- Language: en
- Key Concepts: Quantum Phase Estimation, Shor's Algorithm, Initialization, Controlled Unitaries, Inverse QFT, Quantum Fourier Transform (QFT), Quantum Phase Estimation & Shor's Algorithm
- References: math/spectral-theory-operators

## Entity: effective-field-theory
- Title: Effective Field Theory (EFT)
- Category: Quantum Physics
- Language: en
- Key Concepts: Related topics, Predictive power without a UV theory, Chiral perturbation theory, Naturalness, Fermi theory of weak interactions, NRQED / NRQCD, Core idea, Effective Field Theory (EFT), Renormalisation, Examples, General relativity, Why it matters
- References: fine-tuning, renormalization-group
- Backlinks: quantum-mechanics

## Entity: many-body-tensor-networks
- Title: Many-Body Problem and Tensor Networks
- Category: Quantum Physics
- Language: en
- Key Concepts: Hastings' Area Law Theorem (2007), Discrete Spacetime, B. Projected Entangled Pair States (PEPS), 1. The Exponential Explosion, DMRG Algorithm, Low-Entanglement [[differential-geometry|Manifold]], A. Matrix Product States (MPS), 3. Tensor Network Architectures, Tensor Networks, surface area, Entanglement, 4. MERA and the Geometry of Renormalization, 5. Applications in Machine Learning, MERA (Multi-scale Entanglement Renormalization Ansatz), Bond Dimension ($\chi$)
- References: llm, math/differential-geometry, quantum-information-entropy, renormalization-group, transformer-architecture
- Backlinks: tensor-decompositions

## Entity: quantum-information-entropy
- Title: Quantum Information and Entropy
- Category: Quantum Physics
- Language: en
- Key Concepts: Pure States, Reduced Density Matrix, Visualization: Pure vs. Mixed State, Holography, Landauer's Principle, Quantum Mechanics, Quantum Teleportation, 5. The Thermodynamics of Information, Strong Subadditivity, 4. Quantum Communication Limits, Density Matrix, Quantum Information and Von Neumann [[gravitational-entropy|Entropy]], Key Mathematical Axioms:, Holevo's Bound, 1 bit
- References: ads-cft-deep, black-hole-thermodynamics, finance/shannon-entropy, gravitational-entropy, math/spectral-theory-operators, quantum-entanglement
- Backlinks: ads-cft-deep, gff, linear-spaces-basis, many-body-tensor-networks, quantum-math, quantum-mechanics, topological-phases

## Entity: quantum-mechanics
- Title: Quantum Mechanics
- Category: Quantum Physics
- Language: en
- Key Concepts: Overview, MRI, Quantum Mechanics, Wave-Particle Duality, The Wave Function, The Schrödinger Equation, Uncertainty Principle, Born's Rule, Operators and Observables, Entanglement, Many-Worlds Interpretation, Quantum Computing, Mathematical Formalism, Applications, Copenhagen Interpretation
- References: effective-field-theory, math/spectral-theory-operators, qft-basic, quantum-entanglement, quantum-information-entropy, schrodinger-equation
- Backlinks: math/functional-analysis

## Entity: topological-phases
- Title: Topological Phases of Matter
- Category: Quantum Physics
- Language: en
- Key Concepts: Symmetry Breaking, Chern Number, 1. What is Topological Order?, Bulk, immune to local noise, Topological Photonic Crystals, Topological Data Analysis (TDA), Topological Quantum Computing, Topological Phases, Visualization: The One-Way Street, Conductance as Topology, 3. The Bulk-Boundary Correspondence, Braiding, Anyons, Integer Quantum Hall Effect
- References: gauge-theory-yang-mills, math/topology-basics, quantum-information-entropy

## Entity: finance/adversarial-stress-testing
- Title: Adversarial Stress Testing
- Category: Risk
- Language: en
- Key Concepts: Stress Loss Comparison, Adversarial Stress Testing, Overview & Background, Prerequisites, Generator, Adversarial Stress Testing via Generative Models, Mathematical Framework, Python Implementation, Convexity, Conditional adversarial testing, Parameter Table, Regulatory Compliance, Wasserstein distance, Limitations:, Sequential adversarial testing
- References: attention-mechanisms, convex-optimization-trading, copula-models, extreme-value-theory, finance/gan, finance/monte-carlo-method, finance/value-at-risk
- Backlinks: finance/nash-equilibrium, generative-scenario-models

## Entity: amihud-illiquidity
- Title: Amihud Illiquidity Ratio
- Category: Risk
- Language: en
- Key Concepts: Emerging Markets, Availability, Intraday aggregation, Overview & Background, liquidity risk premium, Risk Management, Positive return-volume correlation, Amihud illiquidity ratio, Mathematical Framework, Pastor-Stambaugh (2003) liquidity factor, Python Implementation, Transaction Cost Estimation, Parameter Table, Market-wide illiquidity, Price impact for a trade of size $Q$ dollars:
- References: finance/levy-processes, finance/market-impact-scaling, finance/value-at-risk, optimal-execution, volatility-forecasting
- Backlinks: finance/kyle-lambda, roll-model

## Entity: bayesian-black-litterman
- Title: Bayesian Black-Litterman Portfolio Optimization
- Category: Risk
- Language: en
- Key Concepts: Factor Investing, Subjective Investor Views, Step 1: Market Equilibrium Prior, Overview & Background, Prerequisites, [[mcmc]] sampling, Equilibrium prior may be wrong, [[hierarchical-risk-parity]], Bayesian Black-Litterman Portfolio Optimization, Prior dominates with no views, pick matrix, View consistency, Step 4: Portfolio Optimization, Equilibrium Market Prior, Step 3: Posterior via Bayes' Theorem
- References: black-scholes, convex-optimization-trading, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: alpha-factor-discovery, bayesian-inference, convex-optimization-trading, entropy-pooling, finance/markowitz-mean-variance

## Entity: finance/black-swan-scenarios
- Title: Black Swan Scenario Generator
- Category: Risk
- Language: en
- Key Concepts: Theoretical Foundation, Back-test, Critical error, Never rely solely on VaR, Generalised Extreme Value (GEV), Refresh EVT parameters, Generalised Pareto Distribution (GPD), T-copula, 2. Scaled Historical Scenarios, Three Scenario Sources, 3. Narrative Hypothetical Scenarios, Black Swan Scenario Generator, 1. EVT Statistical Extrapolation, Peaks Over Threshold (POT), Related Articles
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/systemic-contagion-debtrank, finance/value-at-risk
- Backlinks: lln-clt

## Entity: finance/cdo-tranches
- Title: CDO Tranches
- Category: Risk
- Language: en
- Key Concepts: Random factor loading, Tranche Structure, Alternative Models, Equity, Rating reliance, Remainder, CDO Tranches, Liquidity, Lessons from the Crisis, Super-senior, Transparency, Python Implementation, compound (implied) correlation, zero tail dependence, Model risk is existential
- References: copula-models, finance/coherent-risk-measures, finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization, finance/value-at-risk
- Backlinks: finance/credit-derivatives-cds, finance/credit-risk-models, finance/securitization

## Entity: cs01
- Title: CS01 (Credit Spread 01)
- Category: Risk
- Language: en
- Key Concepts: Overview & Background, Risk Limits, Non-linearity for distressed credit, Relative Value, spread convexity, CDS CS01 (Risky PV01), DVCS, Duration approximation breaks down, Hedging, Recovery rate sensitivity, CS02 (spread convexity), positive number representing dollar loss per 1 bp spread widening, Orthogonality to DV01, Regulatory Capital, Mathematical Framework
- References: copula-models, cox-process, dv01, finance/swaps, finance/xva
- Backlinks: cox-process, dv01, finance/swaps, finance/xva

## Entity: cva-wrong-way-risk
- Title: CVA and Wrong-Way Risk
- Category: Risk
- Language: en
- Key Concepts: Credit Valuation Adjustment (CVA), Copulas, positively correlated, Example, Jump-to-Default Models, expected loss, What is CVA?, Visualization: WWR Exposure Spike, Oil Example, Stochastic Correlation, FRTB and WWR, Modeling WWR, Related Topics, Credit Valuation Adjustment (CVA) and Wrong-Way Risk, Wrong-Way Risk (WWR)
- References: copula-models, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: network-risk-cascades

## Entity: finance/market-impact-scaling
- Title: Capacity & Market Impact Scaling
- Category: Risk
- Language: en
- Key Concepts: Python: Full Capacity Frontier, Strategy Selection, Strategy Capacity Formula, Mathematical Framework, Power-Law Generalization, Execution Optimization, Strategy Capacity, Alpha Erosion Chart, Square Root Law of Impact, Capacity Estimation, Backtest Correction, Parameter Table, Scaling Laws, Cross-impact, Intraday volume profile
- References: avellaneda-stoikov, finance/monte-carlo-method, lob-prediction, optimal-execution
- Backlinks: amihud-illiquidity, deep-rl-execution, finance/nash-equilibrium, lob-prediction

## Entity: finance/coherent-risk-measures
- Title: Coherent Risk Measures
- Category: Risk
- Language: en
- Key Concepts: Tail VaR, subadditivity, jointly elicitable, 2. Translation invariance., increased, not, backtesting problem, entropic risk, Basel II, coherent, Spectral risk measures, Theorem., Expected Shortfall (CVaR), Basel III / FRTB, Expected Shortfall (ES / CVaR)
- References: brownian-motion, central-limit-theorem, copula-models, finance/shannon-entropy, finance/value-at-risk, math/law-of-large-numbers
- Backlinks: extreme-value-theory, finance/cdo-tranches, finance/credit-derivatives-cds, frtb-es

## Entity: cornish-fisher-cvar
- Title: Cornish-Fisher CVaR
- Category: Risk
- Language: en
- Key Concepts: Ignores serial correlation, Modified VaR (mVaR), Overview & Background, Only four moments, Cornish-Fisher expansion, Prerequisites, [[mcmc]] sampling, Monotonicity, Validity Conditions, Four-moment summary, Cornish-Fisher CVaR, The Cornish-Fisher Expansion, Accuracy breaks down at extremes, Portfolio Screening, Mathematical Framework
- References: copula-models, extreme-value-theory, finance/levy-processes, finance/value-at-risk, mcmc, volatility-forecasting
- Backlinks: finance/black-swan-scenarios, finance/copula-models, finance/frtb, finance/hyperbolic-distributions, finance/isda-simm, finance/markowitz-mean-variance, finance/stable-distributions, finance/systemic-contagion-debtrank, finance/value-at-risk, math/large-deviations-cramer

## Entity: finance/credit-derivatives-cds
- Title: Credit Default Swaps
- Category: Risk
- Language: en
- Key Concepts: Index roll trades, CDS Indices, basis, Basis trading, The Big Bang Protocol (2009), Single-name vs. index basis, CDS Spread Term Structure, CVA Connection, protection leg, Relative value, Pricing, risky duration, Credit Default Swaps, CVA hedging, upfront payment
- References: copula-models, finance/cdo-tranches, finance/coherent-risk-measures, finance/credit-risk-models, finance/value-at-risk, finance/xva
- Backlinks: finance/cdo-tranches, finance/credit-migration, finance/credit-risk-models, finance/securitization

## Entity: finance/credit-migration
- Title: Credit Migration and Rating Transitions
- Category: Risk
- Language: en
- Key Concepts: Through-the-Cycle vs Point-in-Time, Discrete-Time Matrix, Asset Value Model, Credit Migration and Rating Transitions, momentum, Transition Matrix Framework, transition matrix, Through-the-cycle (TTC), generator matrix, Python Implementation, Continuous-Time Generator Matrix, Credit migration, Estimation Methods, CreditMetrics Framework, Cohort Method
- References: copula-models, finance/credit-derivatives-cds, finance/value-at-risk, hidden-markov-models, survival-risk-prediction
- Backlinks: finance/credit-risk-models

## Entity: finance/credit-risk-models
- Title: Credit Risk Models
- Category: Risk
- Language: en
- Key Concepts: Jarrow-Turnbull (1995), First-Passage Extensions, Intensity-Based Framework, Comparison, Use case, Correlation, Inputs, Reduced-Form Models, Duffie-Singleton (1999), Machine learning, Economic intuition, Credit Migration Models, Cox process, Merton (1974), Structural models
- References: black-scholes, copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-migration, finance/value-at-risk, finance/xva, gnn-credit-risk, survival-risk-prediction
- Backlinks: finance/cdo-tranches, finance/credit-derivatives-cds, finance/securitization

## Entity: dv01
- Title: DV01 (Dollar Value of a 01)
- Category: Risk
- Language: en
- Key Concepts: full price, Definition, DV01, PV01, First-order only, convexity, Overview & Background, Convexity Correction, Hedging, Yield Curve Key-Rate DV01, Credit-contaminated yield, key-rate DV01, Risk Aggregation, Sign convention, Mathematical Framework
- References: black-scholes, brownian-motion, cs01, finance/oas, finance/swaps
- Backlinks: cs01, finance/bond-options-gaussian, finance/interest-rate-term-structure, finance/oas, finance/swaps, futures-hedging, greeks-options

## Entity: finance/dispersion-trading
- Title: Dispersion Trading
- Category: Risk
- Language: en
- Key Concepts: Gap risk, Tail hedging, Implied Correlation, Execution Methods, Bank dispersion desks, Prerequisites, Vega-Weighting, Correlation Risk Premium, Correlation spike risk, Relative value, Risk Management, Dispersion trading, Systematic vol strategies, implied correlation, Dispersion P&L Profile
- References: black-scholes, copula-models, finance/sabr-model, finance/value-at-risk, finance/variance-swaps, heston-model
- Backlinks: finance/variance-swaps-vix

## Entity: finance/eigenportfolio-rmt
- Title: Eigenportfolio Construction via RMT
- Category: Risk
- Language: en
- Key Concepts: Sparse factor models, Python: Extracting Signal Eigenportfolios, Style Factors, Alpha Signal Construction, Prerequisites, Eigenportfolio Construction via RMT, First Eigenvector, denoised, The Marchenko-Pastur Bound, Sector Factors, Rotation ambiguity, Mathematical Foundation, Random Matrix Theory (RMT), Noise cluster, Subsequent significant vectors
- References: finance/hierarchical-risk-parity, finance/random-matrix-theory, heston-model, math/spectral-theory-operators
- Backlinks: finance/factor-attribution, finance/gnn-finance, finance/hierarchical-risk-parity, finance/markowitz-mean-variance, finance/random-matrix-theory

## Entity: frtb-sa-mr
- Title: FRTB Standardized Approach (SA-MR)
- Category: Risk
- Language: en
- Key Concepts: FRTB Standardized Approach (SA-MR), Why Banks Hate/Love It, Pro, Standardized Approach for Market Risk (SA-MR), A. Delta Risk, C. Curvature Risk, Greeks (Sensitivities), 3. Residual Risk Add-on (RRAO), Visualization: Capital Stack under FRTB, 1. The Sensitivities-Based Method (SBM), conservative, FRTB, Related Topics, Con, 2. Default Risk Charge (DRC)
- References: finance/xva, frtb-es, greeks-options

## Entity: frtb-es
- Title: FRTB and Expected Shortfall
- Category: Risk
- Language: en
- Key Concepts: FRTB and Expected Shortfall (ES), coherent risk measure, Visualization: VaR vs. ES, 1. Liquidity Horizons, Lack of Coherence, Tail Blindness, Fundamental Review of the Trading Book (FRTB), Why Replace VaR?, 3. Non-Modellable Risk Factors (NMRF), Backtesting, Liquidity Horizons, Related Topics, average loss, 2. Standardized vs. Internal Models (IMA), Key Features of FRTB
- References: extreme-value-theory, finance/coherent-risk-measures, finance/value-at-risk
- Backlinks: clt, frtb-sa-mr, kelly-jump-diffusion, markov-chebyshev, measure-theory

## Entity: finance/frtb
- Title: FRTB: Fundamental Review of the Trading Book
- Category: Risk
- Language: en
- Key Concepts: FRTB Liquidity Horizons, Key Changes vs Basel 2.5, Implementation, P&L Attribution Test (PLA), FRTB: Fundamental Review of the Trading Book, Expected Shortfall, FRTB (Basel IV / BCBS 2019), FRTB ES scaled for liquidity horizons, Related Articles
- References: cornish-fisher-cvar, extreme-value-theory, finance/isda-simm, finance/value-at-risk

## Entity: finance/factor-attribution
- Title: Factor Risk Attribution and Decomposition
- Category: Risk
- Language: en
- Key Concepts: Brinson-Hood-Beebower (BHB) Decomposition, Ex-Post vs Ex-Ante vs Risk Budgeting, Factor attribution, Percent Contribution to Risk, Implementation, Related Articles, Factor Risk Attribution and Decomposition, Factor Risk Decomposition, Marginal Contribution to Risk (MCTR)
- References: fama-macbeth-regression, finance/eigenportfolio-rmt, finance/hierarchical-risk-parity, ts-cs-factor-analysis
- Backlinks: alpha-orthogonalization, finance/apt-ross, finance/capm

## Entity: fraud-detection
- Title: Fraud Detection for Transactions
- Category: Risk
- Language: en
- Key Concepts: Graph features, Concept drift, Graph Neural Networks, Background, Bayesian Online Learning, Device/channel features, Money laundering (AML), F1-Score, Feature Engineering, Cost-sensitive learning, Account takeover (ATO), Fraud Detection for Transactions, Adversarial attacks, Amount features, Merchant features
- References: finance/gan, finance/monte-carlo-method, finance/value-at-risk, mcmc, transformer-architecture
- Backlinks: finance/gan, finance/gnn-finance, finance/shap-interpretability, gnn-credit-risk, graph-neural-networks

## Entity: futures-hedging
- Title: Futures Hedging
- Category: Risk
- Language: en
- Key Concepts: basis, Metallgesellschaft case, rolls, Duration-Based Hedging, Futures Hedging, Basis and Basis Risk, Portfolio Insurance, Futures hedging, Minimum Variance Hedge Ratio, Tailing the Hedge, tailed hedge, Stack and Roll, Agricultural hedging, Cross-Hedging, Beta Hedging
- References: dv01, finance/swaps, finance/value-at-risk, geometric-brownian-motion, optimal-execution
- Backlinks: finance/value-at-risk

## Entity: finance/hierarchical-risk-parity
- Title: Hierarchical Risk Parity (HRP)
- Category: Risk
- Language: en
- Key Concepts: Very High, No matrix inversion, Risk Contribution Visualization, HERC extension, Weight Stability, inverse of each cluster's variance, Why HRP?, Dynamic rebalancing, Alternative to equal-weight, dendrogram, Sensitivity to Noise, Matrix Inversion, Step 3: Recursive Bisection, Step 1: Hierarchical Clustering, Full Python Implementation
- References: finance/eigenportfolio-rmt, finance/random-matrix-theory, finance/value-at-risk, kelly-criterion
- Backlinks: bayesian-black-litterman, convex-optimization-trading, fama-macbeth-regression, finance/alpha-stacking, finance/eigenportfolio-rmt, finance/factor-attribution, finance/markowitz-mean-variance, finance/meta-labeling, finance/random-matrix-theory, model-free-rl-factors, numeraire-invariant-hedging, portfolio-optimization-ml, regime-switching-factors, sharpe-ratio-statistics, survival-risk-prediction, ts-cs-factor-analysis

## Entity: finance/isda-simm
- Title: ISDA SIMM: Standard Initial Margin Model
- Category: Risk
- Language: en
- Key Concepts: Sensitivity Types, 4. Total SIMM, 3. Risk-Class Margin, Operational Details, sensitivity-based, Implementation (IR Delta), Delta, Curvature add-on, Related Articles, Architecture, ISDA SIMM: Standard Initial Margin Model, Vega, 10 business days, Regulatory Context, Vega margin
- References: copula-models, cornish-fisher-cvar, finance/swaps, finance/value-at-risk, finance/xva
- Backlinks: finance/frtb, finance/repo-market-systemic

## Entity: kelly-criterion
- Title: Kelly Criterion
- Category: Risk
- Language: en
- Key Concepts: Wealth Growth Comparison, Practical constraints, Correlation, Background, Discrete vs. continuous time, Quarter-Kelly, Parameter estimation risk, Proportional Kelly with drawdown control, Sharpe ratio divided by $\sigma$, The Kelly Formula: Continuous Case, Interactive Simulation, Log-Wealth Maximization, Drawdown Analysis, Algorithmic trading position sizing, logarithmic utility function
- References: finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, portfolio-optimization-ml
- Backlinks: bayesian-kelly, finance/hierarchical-risk-parity, finance/pe-fund-metrics, kelly-jump-diffusion, merton-portfolio, universal-portfolios

## Entity: finance/libor-sofr
- Title: LIBOR to SOFR Transition
- Category: Risk
- Language: en
- Key Concepts: LIBOR vs SOFR, Term SOFR, Transition Timeline, SOFR (Secured Overnight Financing Rate), Implementation, Rate Types, SOFR In Arrears, SOFR Compounded, LIBOR to SOFR Transition, LIBOR (London Interbank Offered Rate), Replacement Rates, Related Articles, ISDA Fixed Spread Adjustments
- References: finance/cir-hull-white, finance/nelson-siegel-svensson, finance/swaps, finance/xva
- Backlinks: finance/cir-hull-white, finance/interest-rate-term-structure

## Entity: network-risk-cascades
- Title: Network Models and Default Cascades
- Category: Risk
- Language: en
- Key Concepts: Default Cascades and the Domino Effect, Contagion Threshold, The Eisenberg-Noe Model, DebtRank: Centrality for Risk, interconnectedness, more connectivity can be dangerous, Nodes ($V$), Network Models and Default Cascades, The Paradox of Connectivity, Related Topics, Edges ($E$), The Financial Network as a Graph, Directed Graph, Visualization: Network Contagion, Weights ($L_{ij}$)
- References: cva-wrong-way-risk, finance/repo-market-systemic, finance/systemic-contagion-debtrank

## Entity: finance/oas
- Title: Option-Adjusted Spread (OAS)
- Category: Risk
- Language: en
- Key Concepts: Spread Decomposition, OAS < Z-Spread, OAS in Mortgage-Backed Securities (MBS), ASW, For Callable Bonds, Mathematical Framework, Parameter Table, OAS stability, Spread Comparison, Option-Adjusted Spread (OAS), G-Spread, Visualization, For Putable Bonds, Python: OAS Calculation via Monte Carlo, Volatility sensitivity
- References: dv01, finance/longstaff-schwartz, finance/monte-carlo-method, finance/sabr-model
- Backlinks: dv01, finance/nelson-siegel-svensson, finance/sabr-model, finance/securitization

## Entity: portfolio-optimization-ml
- Title: Portfolio Optimization with ML
- Category: Risk
- Language: en
- Key Concepts: Turnover, Python: Full HRP Implementation, Maximum Drawdown, Black-Litterman model, Portfolio Optimization, Concentration, Classical Markowitz Framework, CVaR optimization, agglomerative clustering, Key Metrics, Sharpe Ratio, No expected return input, Step 4: Recursive Bisection, Step 3: Quasi-Diagonalization, Parameter Table
- References: finance/gan, finance/hierarchical-risk-parity, finance/monte-carlo-method, finance/random-matrix-theory, finance/value-at-risk, math/spectral-theory-operators, mcmc, model-free-rl-factors, transformer-architecture
- Backlinks: convex-optimization-trading, fama-macbeth-regression, finance/pe-fund-metrics, kelly-criterion

## Entity: finance/pe-fund-metrics
- Title: Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve
- Category: Risk
- Language: en
- Key Concepts: timing, Example, The J-Curve, DPI (Distributions to Paid-In), Implementation, TVPI = DPI + RVPI = MOIC, Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve, Core Metrics, Target Benchmarks by Strategy, Related Articles, MOIC — Multiple on Invested Capital, PME — Public Market Equivalent, IRR — Internal Rate of Return, RVPI (Residual Value to Paid-In), DPI and RVPI
- References: finance/monte-carlo-method, finance/repo-market-systemic, finance/value-at-risk, kelly-criterion, portfolio-optimization-ml

## Entity: finance/repo-market-systemic
- Title: Repo Market and Systemic Risk
- Category: Risk
- Language: en
- Key Concepts: Cash lender, Systemic Risk Analysis, Rehypothecation, General vs Special Collateral, Regulatory Response, haircut, Collateral Chains and Rehypothecation, Liquidity Spiral, FSB haircut floors (2023), Dodd-Frank / EMIR, Lessons from the 2008 Crisis, Haircut, Cash Flows, Systemic implication, Related Articles
- References: extreme-value-theory, finance/isda-simm, finance/kyle-lambda, finance/systemic-contagion-debtrank, finance/xva
- Backlinks: finance/pe-fund-metrics, network-risk-cascades

## Entity: finance/securitization
- Title: Securitization
- Category: Risk
- Language: en
- Key Concepts: The SPV Structure, EU Securitisation Regulation (2019), CDO-squared, Correlation breakdown, Liquidity evaporation, Prepayment Risk, CLOs (Collateralized Loan Obligations), Prepayment Speed Impact on WAL, Mezzanine interest, Credit card ABS, Mark-to-market spirals, Special Purpose Vehicle (SPV), Excess spread, Equity/residual, Agency MBS
- References: copula-models, finance/cdo-tranches, finance/credit-derivatives-cds, finance/credit-risk-models, finance/oas, finance/value-at-risk
- Backlinks: finance/cdo-tranches

## Entity: sharpe-ratio-statistics
- Title: Statistics of Sharpe Ratios
- Category: Risk
- Language: en
- Key Concepts: Statistics of Sharpe Ratios, Definition, Hierarchical testing, Background, Research pipeline, Minimum Track Record Length, IID assumption, Jobson-Korkie Test, Serial correlation inflates SR, Short samples, Non-spherical distributions, Multiple testing inflation, Mathematical Framework, Python Implementation, Mertens Correction for Non-Normal Returns
- References: black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/value-at-risk, hidden-markov-models, mcmc

## Entity: finance/stylized-facts-returns
- Title: Stylized Facts of Financial Returns
- Category: Risk
- Language: en
- Key Concepts: universally, absolute, For option pricing, Canonical list (Rama Cont, 2001), correlations between assets jump up, 1. Absence of autocorrelation in returns, power law, 5. Leverage effect, 8. Volume-volatility nonlinearity, 3. Volatility clustering, rule out, 4. Long memory of volatility, 6. Aggregational Gaussianity, For volatility forecasting, multifractal
- References: arch-models, copula-models, finance/bipower-variation, finance/capm, finance/efficient-market-hypothesis, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, garch-models, heston-model
- Backlinks: finance/capm, finance/efficient-market-hypothesis, finance/hyperbolic-distributions, finance/markowitz-mean-variance, finance/self-similarity-fractality, finance/stable-distributions, math/central-limit-theorem, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: survival-risk-prediction
- Title: Survival-Based Risk Prediction
- Category: Risk
- Language: en
- Key Concepts: Breslow estimator, Survival-Based Risk Prediction, Time-Varying Covariates, Portfolio credit risk, Kaplan-Meier Estimator, Concordance (C-statistic), Background, Multi-state models, Frailty models, Survival and Hazard Functions, cumulative hazard function, Competing Risks, Mathematical Framework, Discrete-Time Hazard Models, survival function
- References: black-scholes, copula-models, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, hidden-markov-models, mcmc
- Backlinks: finance/credit-migration, finance/credit-risk-models, gnn-credit-risk

## Entity: convex-optimization-trading
- Title: Systematic Portfolio Trading via Convex Optimization
- Category: Risk
- Language: en
- Key Concepts: Covariance estimation, Multi-Period Optimization, Overview & Background, Systematic Equity Long/Short, Prerequisites, Index Replication, Convex Optimization, Non-convex constraints, [[hierarchical-risk-parity]], Scalability, Model Predictive Control, Robust Optimization, Mathematical Framework, Python Implementation, Quadratic/quadratic regularization
- References: bayesian-black-litterman, black-scholes, finance/hierarchical-risk-parity, finance/probability-of-backtest-overfitting, finance/random-matrix-theory, hidden-markov-models, mcmc, portfolio-optimization-ml
- Backlinks: bayesian-black-litterman, convex-analysis, convexity, entropy-pooling, finance/adversarial-stress-testing, finance/alpha-stacking, finance/markowitz-mean-variance, gradient-hessian-jacobian, lagrange-multipliers, linear-programming, martingale-optimal-transport

## Entity: finance/systemic-contagion-debtrank
- Title: Systemic Risk and DebtRank
- Category: Risk
- Language: en
- Key Concepts: Dynamic DebtRank, Example, Systemic Impact Score, Implementation, Stress level, Comparison with Other Systemic Risk Metrics, Extensions, Related Articles, Relative impact matrix, Financial Networks, Node States, Propagation, DebtRank Algorithm, DebtRank, State
- References: cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/nash-equilibrium, finance/value-at-risk
- Backlinks: cva-wrong-way-risk, finance/black-swan-scenarios, finance/gnn-finance, finance/repo-market-systemic, graph-theory, network-risk-cascades

## Entity: finance/value-at-risk
- Title: Value at Risk (VaR)
- Category: Risk
- Language: en
- Key Concepts: Value at Risk (VaR), Risk limits, Parametric (Variance-Covariance) VaR, 2. Parametric (Delta-Normal), Normality assumption, Portfolio construction, Formal Definition, Three Calculation Methods, 3. Monte Carlo Simulation, Model risk, Expected Shortfall (CVaR), Christoffersen Conditional Coverage Test, Stress testing, Mathematical Framework, Python Implementation
- References: copula-models, cornish-fisher-cvar, extreme-value-theory, finance/monte-carlo-method, finance/xva, futures-hedging, garch-models
- Backlinks: alternative-data-alpha, amihud-illiquidity, copula-models, cornish-fisher-cvar, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/copula-models, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/frtb, finance/gan, finance/hierarchical-risk-parity, finance/isda-simm, finance/monte-carlo-method, finance/pe-fund-metrics, finance/probability-of-backtest-overfitting, finance/quasi-monte-carlo, finance/random-matrix-theory, finance/realized-kernels, finance/securitization, finance/systemic-contagion-debtrank, finance/xva, fraud-detection, frtb-es, futures-hedging, generative-scenario-models, kelly-criterion, llm-financial-analysis, lob-prediction, math/lundberg-cramer-ruin, news-sentiment-trading, ornstein-uhlenbeck-process, pairs-trading, portfolio-optimization-ml, rl-trader, sharpe-ratio-statistics, student-t-hmm-bond-regimes, volatility-forecasting

## Entity: finance/variance-swaps-vix
- Title: Variance Swaps and the VIX
- Category: Risk
- Language: en
- Key Concepts: VIX futures, VIX Term Structure (Typical Contango), variance swap, Volatility trading, The VIX Index, Python Implementation, Volatility Risk Premium, Dispersion trading, Carry strategies, VIX index, model-independent, VIX term structure, Payoff, Risk budgeting, Variance Swap Mechanics
- References: black-scholes, finance/dispersion-trading, finance/variance-swaps, finance/volatility-surface, garch-models, greeks-options
- Backlinks: finance/delta-hedging-practice

## Entity: finance/xva
- Title: XVA (Valuation Adjustments)
- Category: Risk
- Language: en
- Key Concepts: negative exposure, Expected Exposure, CVA, Capital optimization, FBA, Background, FVA — Funding Valuation Adjustment, DVA, KVA, Trade pricing, Double-counting, initial margin (IM), FRTB-CVA, MVA, Stress testing
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
- Key Concepts: See Also, Quantitative Risk Management: VaR & CVaR, 1. VaR & Expected Shortfall (CVaR), 2. Performance Metrics, Value at Risk ($VaR_\alpha$):, Expected Shortfall ($CVaR_\alpha$):
- References: course-quant-trading, optimal-stopping-and-kelly, statistical-arbitrage-and-pairs-trading
- Backlinks: copula-models-and-tail-dependence, credit-risk-modeling-and-structural-models, portfolio-optimization-and-black-litterman, portfolio-risk-decomposition-marginal-var, stat-tests-for-trading-strategies, statistical-arbitrage-and-pairs-trading

## Entity: deep-rl-execution
- Title: Deep RL for Trade Execution
- Category: Scientific ML
- Language: en
- Key Concepts: Algorithm: Proximal Policy Optimisation, Risk controls, Finance:, Overview, Prerequisites, Performance Comparison, AI:, Ning et al. (2021), Reward, Reward hacking, Limitations, Applications in Practice, Mathematical Framework, Python Implementation, State
- References: finance/market-impact-scaling, finance/shannon-entropy, generative-scenario-models, lob-prediction, optimal-execution, reinforcement-learning, rl-trader, temporal-fusion-transformer
- Backlinks: ai-market-making, alpha-factor-research, ml-options-pricing, offline-rl, optimal-execution, reinforcement-learning, rough-paths, temporal-fusion-transformer, tool-use

## Entity: generative-scenario-models
- Title: Generative Models for Scenario Generation
- Category: Scientific ML
- Language: en
- Key Concepts: Dimensionality curse, TimeGAN for Financial Paths, Variational Autoencoders (VAEs), Finance:, Overview, Heavy-tailed cross-sectional dependence, Prerequisites, Distribution Comparison, Diffusion models, Stylised Facts as Validation Targets, Volatility clustering, Regulatory stress scenarios, Score-Based Diffusion, AI:, Training instability
- References: copula-models, extreme-value-theory, finance/adversarial-stress-testing, finance/monte-carlo-method, finance/value-at-risk, garch-models, generative-models, stochastic-differential-equations, temporal-fusion-transformer
- Backlinks: deep-rl-execution, generative-models, gnn-credit-risk, llm-financial-analysis, market-microstructure, temporal-fusion-transformer

## Entity: gnn-credit-risk
- Title: Graph Neural Networks for Credit Risk
- Category: Scientific ML
- Language: en
- Key Concepts: Retail credit fraud, Graph [[attention-mechanisms|Attention]] Network (GAT), FICO (2022), Finance:, Overview, Interpretability, Systemic Risk via Spectral Graph Theory, Prerequisites, Bao et al. (2023), Label scarcity, Performance benchmarks, AI:, Scalability, Corporate credit rating, Interbank contagion analysis
- References: attention-mechanisms, copula-models, finance/xva, fraud-detection, generative-scenario-models, graph-neural-networks, llm, llm-financial-analysis, spectral-graph-theory, survival-risk-prediction, transformer-architecture
- Backlinks: finance/credit-risk-models, graph-neural-networks, llm-financial-analysis

## Entity: kan
- Title: Kolmogorov-Arnold Networks (KAN)
- Category: Scientific ML
- Language: en
- Key Concepts: learnable univariate function, Scalability to high dimensions., learnable activation functions on edges, Grid resolution choice., Overview, The two sides of KAN, Training speed., Prerequisites, Neuroscience:, Symbolic regression fragility., AI:, refined adaptively, Sparsification and pruning., Grid extension., Limitations
- References: attention-mechanisms, conformal-field-theory, equivariant-nn, finance/spectral-analysis, kolmogorov-arnold-theorem, learnable-activations, pinns, qft-basic, transformer-architecture
- Backlinks: kolmogorov-arnold-theorem, learnable-activations, pinns

## Entity: llm-financial-analysis
- Title: LLM for Financial Analysis
- Category: Scientific ML
- Language: en
- Key Concepts: General-Purpose LLMs with Financial Prompting, Regulatory liability, Information Extraction as Conditional Generation, Finance:, Domain-Specific Models, Overview, Tool Use for Live Data, [[llm]] for Financial Analysis, Structured Output via JSON Schema Enforcement, Sentiment classification, FinBERT, AI:, financial sentiment classification, Counterparty due diligence, Limitations
- References: finance/value-at-risk, fine-tuning, generative-scenario-models, gnn-credit-risk, inference-serving, llm, news-sentiment-trading, rag, temporal-fusion-transformer
- Backlinks: alpha-factor-research, gnn-credit-risk, mcp, ml-options-pricing, nlp-financial-analysis, rag, research/mla-financial-reasoning, temporal-fusion-transformer, tool-use

## Entity: neural-operators
- Title: Neural Operators
- Category: Scientific ML
- Language: en
- Key Concepts: DeepONet, Complexity:, Option pricing:, Weather & climate:, Training data, Training and Data Generation, Grid type, FNO Architecture in Practice, Limitations and Outlook, See Also, Branch network:, DeepONet: Branch and Trunk Decomposition, Resolution invariance:, Project:, Limited to smooth regimes:
- References: ai-physics/hamiltonian-nn, equivariant-nn, fokker-planck-equation, numerical-pde-finance, partial-differential-equations, pinns, stochastic-differential-equations
- Backlinks: fourier-neural-operators

## Entity: pinns
- Title: Physics-Informed Neural Networks (PINNs)
- Category: Scientific ML
- Language: en
- Key Concepts: Architecture choice., Convergence theory:, Finance:, Overview, AI:, Analytical exactness:, Heat transfer:, Limitations, Mathematical Framework, Python Implementation, Scalability., Data assimilation:, Benchmark PDEs:, Geophysics:, Visualization
- References: ai-physics/hamiltonian-nn, automatic-differentiation, black-scholes, equivariant-nn, finance/fractional-fokker-planck, kan, partial-differential-equations, schrodinger-equation
- Backlinks: ai-physics/hamiltonian-nn, automatic-differentiation, deep-ritz-method, equivariant-nn, fourier-neural-operators, gaussian-processes, kan, kolmogorov-arnold-theorem, kuramoto-model, learnable-activations, neural-odes, neural-operators, partial-differential-equations

## Entity: temporal-fusion-transformer
- Title: Temporal Fusion Transformer
- Category: Scientific ML
- Language: en
- Key Concepts: No explicit probabilistic model, Gated Residual Network (GRN), Observed inputs, Sequence encoding, Risk budgeting signals, Finance:, Temporal Fusion [[transformer-architecture|Transformer]], Overview, Input Taxonomy, Forecast with Confidence Intervals, Temporal [[attention-mechanisms|attention]] patterns, Factor return forecasting, Static covariates, Static enrichment, Quantile calibration
- References: arima-models, attention-mechanisms, deep-rl-execution, garch-models, generative-scenario-models, inference-serving, llm-financial-analysis, transformer-architecture, volatility-forecasting
- Backlinks: ai-market-making, alpha-factor-research, deep-rl-execution, generative-scenario-models, llm-financial-analysis, ml-options-pricing, nlp-financial-analysis

## Entity: ar-models
- Title: AR (Autoregressive) Models
- Category: Signal Analysis
- Language: en
- Key Concepts: Autoregressive (AR) model, Innovation representation, Overview & Background, Forecasting, Stationarity Condition, Linearity, Pairs Trading, Interest Rate Modeling, Mean reversion speed, Stationarity requirement, weakly stationary, ARMA, AR (Autoregressive) Models, ARCH/GARCH, Mathematical Framework
- References: arch-models, arima-models, arma-models, finance/levy-processes, finance/spectral-analysis, math/spectral-theory-operators, mcmc, volatility-forecasting
- Backlinks: arch-models, arima-models, arma-models

## Entity: arima-models
- Title: ARIMA (Integrated ARMA)
- Category: Signal Analysis
- Language: en
- Key Concepts: Special cases, Information criteria, Algorithmic Trading, Yield Curve Dynamics, Normality of residuals, Full ARIMA specification, Seasonal ARIMA (SARIMA), Overview & Background, Linearity, VAR/VECM, Unit Root Tests, Prerequisites, ARIMAX / Transfer Function, Earnings Forecasting, Cointegration
- References: ar-models, arma-models, finance/cointegration, finance/hurst-exponent, finance/levy-processes, mcmc, volatility-forecasting
- Backlinks: ar-models, arma-models, finance/cointegration, temporal-fusion-transformer

## Entity: arma-models
- Title: ARMA (Autoregressive Moving Average)
- Category: Signal Analysis
- Language: en
- Key Concepts: Causality, Overview & Background, Estimation: Maximum Likelihood, Risk Factor Residuals, [[mcmc]] sampling, Prerequisites, Interest Rate Modeling, ACF Comparison: AR(1) vs MA(1) vs ARMA(1,1), Stationarity requirement, Parameter redundancy, State-space / Kalman filter, Mathematical Framework, Python Implementation, Volatility Forecasting, Innovations Algorithm
- References: ar-models, arima-models, black-scholes, finance/spectral-analysis, mcmc, volatility-forecasting
- Backlinks: ar-models, arch-models, arima-models

## Entity: finance/dft
- Title: Discrete Fourier Transform (DFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Hann, alias, Definition, Outlier sensitivity:, not, anti-aliasing low-pass filter, Power Spectral Density (PSD), Spectral leakage, Nyquist frequency, sampling rate, Fixed resolution:, Blackman-Harris, Blackman, Limitations, Interpreting the Coefficients
- References: finance/fft, finance/hilbert-huang-transform, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/fft, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fft
- Title: Fast Fourier Transform (FFT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Shor's algorithm:, butterfly, The Butterfly Operation, Mixed-radix, decimation-in-time (DIT), Digital filtering:, $N = 2^m$:, Neural networks:, Convolution Theorem via FFT, massive difference, Numerical precision:, FFT vs DFT Speedup, Limitations, Python Implementation, Correlation and autocorrelation:
- References: finance/dft, finance/shor-algorithm, finance/spectral-analysis, fourier-transform, wavelet-transform
- Backlinks: finance/dft, finance/hyperbolic-distributions, finance/levy-esscher-continuous, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/fisher-transform
- Title: Fisher Transform
- Category: Signal Analysis
- Language: en
- Key Concepts: Statistical Interpretation, Normalisation, Lag, Signal normalisation, Adaptive Fisher, Transformation, Whipsaw risk, Trading Logic, Mathematical Formula, Mean-reversion signals, Visualization: Sharpening the Peaks, Momentum confirmation, Signal Generation, Options positioning, Parameter Reference
- References: finance/hilbert-huang-transform, finance/hurst-exponent, finance/spectral-analysis
- Backlinks: finance/hilbert-huang-transform, finance/spectral-analysis, information-geometry-finance

## Entity: finance/hilbert-huang-transform
- Title: Hilbert-Huang Transform (HHT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Mode mixing, Linearity, Stage 2: Hilbert Spectral Analysis, Cycle-based trading, Stage 1: Empirical Mode Decomposition (EMD), Key Limitations, Instantaneous (Local), Intrinsic Mode Functions (IMFs), Python: EMD Workflow, Hilbert-Huang Spectrum, Ensemble EMD (EEMD), Complete EEMD with Adaptive Noise (CEEMDAN), Hilbert-Huang Transform (HHT), Completeness, Stationarity
- References: finance/fisher-transform, finance/hurst-exponent, finance/spectral-analysis, wavelet-transform
- Backlinks: finance/dft, finance/fisher-transform, finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform, math/spectral-representation-processes, math/stationary-wide-spectral

## Entity: finance/realized-kernels
- Title: Intraday Volatility via Realized Kernels
- Category: Signal Analysis
- Language: en
- Key Concepts: Pre-averaging, Volatility risk premia, Asynchronous trading, VaR models, Background, Unbiasedness, Dependent noise, Consistency and Convergence Rate, Prerequisites, Parzen Kernel, Parzen kernel, The Realized Kernel Estimator, Statistical arbitrage, Integrated Variance, Options pricing
- References: brownian-motion, finance/spectral-analysis, finance/value-at-risk, garch-models, geometric-brownian-motion, volatility-forecasting, wavelet-transform
- Backlinks: finance/bipower-variation, finance/spectral-analysis, finance/wavelet-transform, jump-robust-volatility, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: kalman-filter
- Title: Kalman Filter
- Category: Signal Analysis
- Language: en
- Key Concepts: state-space form, Step 1: Prediction, Practical Financial Applications, Background, Kalman Smoother (RTS Smoother), State-Space Representation, Extensions, Unscented Kalman Filter (UKF), Kalman Gain Dynamics, Extended Kalman Filter (EKF), Log-Likelihood for Parameter Estimation, sigma points, Volatility estimation, Pairs trading, Observation equation:
- References: finance/particle-filter, hidden-markov-models, mcmc, volatility-forecasting
- Backlinks: conditionally-gaussian-processes, factor-graphs-inference, finance/cointegration, finance/hidden-markov-models, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/transformer-timeseries, innovation-process, math/conditional-expectation-sigma, math/sequential-hypothesis-testing, math/spectral-representation-processes, math/stationary-wide-spectral, multivariate-normal-distribution, nonlinear-filtering, state-space-models

## Entity: finance/lempel-ziv-complexity
- Title: Lempel-Ziv Complexity
- Category: Signal Analysis
- Language: en
- Key Concepts: Market Efficiency, Algorithmic Trading, Binarization choice, Short sequences, Alternative complexity measures, Background and History, Market Fragility / Crashes, Low LZ Complexity, Regime Detection, Finite-sample applicability, Lempel-Ziv Complexity (LZ), Mathematical Framework, LZ78 vs LZ76, Parameter Table, Core Principle
- References: finance/hurst-exponent, finance/phase-space-reconstruction, finance/shannon-entropy, hidden-markov-models
- Backlinks: finance/hurst-exponent, finance/phase-space-reconstruction, finance/sha-256, finance/shannon-entropy, financial-entropy, kolmogorov-complexity

## Entity: finance/phase-space-reconstruction
- Title: Phase Space Reconstruction
- Category: Signal Analysis
- Language: en
- Key Concepts: Parameter Selection, Correlation Dimension, largest Lyapunov exponent, Noise Sensitivity, Python: Phase Space Reconstruction and FNN, Time Delay $\tau$: Mutual Information Method, Prerequisites, Embedding as features, Skepticism in finance, Key Limitations, Average Mutual Information, Chaos vs. Noise, embedding dimension, time delay, False Nearest Neighbor (FNN)
- References: finance/hurst-exponent, finance/lempel-ziv-complexity, finance/particle-filter, finance/spectral-analysis, hidden-markov-models
- Backlinks: finance/hidden-markov-models, finance/hurst-exponent, finance/lempel-ziv-complexity

## Entity: finance/prony-hankel-spectral
- Title: Prony's Method and Hankel Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Step 2: Root Finding, Regime Interpretation, Prony's Method and Hankel Spectral Analysis, Hankel SVD Filtering, Comparison with FFT, Implementation, Problem Formulation, Algorithm, Hankel matrix, Step 3: Amplitude Estimation, Step 1: Linear Prediction via Hankel System, Related Articles, Prony's method
- References: finance/hilbert-huang-transform, finance/singular-spectral-analysis, finance/spectral-analysis, fourier-transform, wavelet-transform

## Entity: finance/singular-spectral-analysis
- Title: Singular Spectral Analysis (SSA)
- Category: Signal Analysis
- Language: en
- Key Concepts: Identifiability, Step 4 — Diagonal Averaging (Hankelization), Background, Online SSA, Noise, Non-uniqueness of grouping, Prerequisites, Volatility regime decomposition, Forecasting limitations, Step 2 — Singular Value Decomposition, Macro forecasting, Step 3 — Grouping, Window choice, Principal Components, Mathematical Framework
- References: finance/random-matrix-theory, finance/spectral-analysis, math/spectral-theory-operators, volatility-forecasting, wavelet-transform
- Backlinks: finance/prony-hankel-spectral, finance/spectral-analysis, finance/wavelet-transform

## Entity: finance/spectral-analysis
- Title: Spectral Analysis
- Category: Signal Analysis
- Language: en
- Key Concepts: Background, Power Spectrum Visualization, Cross-market lead-lag, Linearity, Short series, Aliasing, Periodogram, Power Spectral Density (PSD), Nyquist frequency, Multitaper Spectral Estimation, Cross-Spectral Density and Coherence, Stationarity requirement, Lomb-Scargle periodogram, Continuous Fourier Transform, Mathematical Framework
- References: finance/fisher-transform, finance/hilbert-huang-transform, finance/realized-kernels, finance/singular-spectral-analysis, wavelet-transform
- Backlinks: ar-models, arma-models, convolutional-volatility-resolution-clustering, finance/dft, finance/fft, finance/fisher-transform, finance/hilbert-huang-transform, finance/phase-space-reconstruction, finance/prony-hankel-spectral, finance/realized-kernels, finance/shor-algorithm, finance/singular-spectral-analysis, finance/wavelet-transform, finance/zeta-field, fourier-transform, kan, kolmogorov-arnold-theorem, volatility-modulated-spectral-surface

## Entity: volatility-modulated-spectral-surface
- Title: Volatility-Modulated Spectral Surface (VMSS)
- Category: Signal Analysis
- Language: en
- Key Concepts: Deep learning integration, Wigner-Ville Distribution (WVD), Background, Spectral Normalization, Prerequisites, Noise separation, Alpha signal generation, standardized returns, adaptive window, Spectral [[shannon-entropy|Entropy]] of VMSS, persistent spectral patterns, spectral [[shannon-entropy|entropy]], Online computation, volatility-adjusted spectral power, Interpretation of absolute levels
- References: finance/gan, finance/realized-kernels, finance/shannon-entropy, finance/spectral-analysis, garch-models, inference-serving, volatility-forecasting, wavelet-transform
- Backlinks: convolutional-volatility-resolution-clustering

## Entity: finance/wavelet-transform
- Title: Wavelet Transform (CWT)
- Category: Signal Analysis
- Language: en
- Key Concepts: Morlet wavelet, power spectrum, Volatility decomposition, Orthonormality (DWT), wavelets, Vanishing moments, Shift variance of DWT, Daubechies wavelets, Wavelet Coherence, Background, Cross-market lead-lag, Mexican Hat, scaling function, MODWT, Scale-dependent correlation
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
- Key Concepts: Bayesian Non-parametrics, Why Use BNP?, Uncertainty Quantification, rich-get-richer, Visualization: Model Growth, Gaussian Processes (GP), Automatic Complexity Selection, The Dirichlet Process (DP), Related Topics, Flexibility, Indian Buffet Process (IBP), Stick-Breaking construction, latent feature models, infinite-dimensional, Chinese Restaurant Process (CRP)
- References: gaussian-processes, mixture-of-experts
- Backlinks: gmm

## Entity: dirichlet-processes
- Title: Bayesian Non-parametrics: Dirichlet Processes
- Category: Statistical Learning
- Language: en
- Key Concepts: Mathematical Definition, Bayesian Non-parametrics: Dirichlet Processes, Applications in Clustering, The Chinese Restaurant Process (CRP), Stick-Breaking Construction

## Entity: concentration-of-measure
- Title: Concentration of Measure
- Category: Statistical Learning
- Language: en
- Key Concepts: McDiarmid's Inequality, The Phenomenon, Rademacher Complexity and Generalization, Concentration of Measure, Talagrand's Concentration Inequality

## Entity: sgd-convergence-theory
- Title: Convergence Theory of Stochastic Gradient Descent
- Category: Statistical Learning
- Language: en
- Key Concepts: Convex and Smooth Functions, Convergence Theory of Stochastic [[convex-optimization|Gradient Descent]], Strong Convexity, Non-Convex Optimization and the PL Condition, Problem Formulation
- References: convex-optimization

## Entity: differential-privacy
- Title: Differential Privacy in ML
- Category: Statistical Learning
- Language: en
- Key Concepts: DP-SGD: Training with Privacy, $\delta$, The Definition: (ε, δ)-Privacy, Low Noise, The Privacy-Utility Trade-off, Differentially Private Stochastic [[convex-optimization|Gradient Descent]] (DP-SGD), Why It Matters, High Noise, Robustness, Visualization: Privacy Budget vs. Accuracy, Compliance, Gradient Clipping, $(\epsilon, \delta)$-differential privacy, membership inference attacks, $\epsilon$ (Privacy Budget)
- References: ai-theory/adversarial-examples, convex-optimization, federated-learning
- Backlinks: federated-learning

## Entity: gmm
- Title: Gaussian Mixture Models (GMM)
- Category: Statistical Learning
- Language: en
- Key Concepts: Soft Clustering (Responsibilities), Initialize, responsibility, Gaussian Mixture Models (GMM), soft assignment, E-step, Fitting the Model: The EM Algorithm, Visualization: GMM vs K-Means, M-step, mixing weight, Repeat, The Model Definition, Related Topics, Relationship to K-Means
- References: bayesian-nonparametrics, expectation-maximization
- Backlinks: em-algorithm, matrix-calculus

## Entity: kernel-methods-rkhs
- Title: Kernel Methods & RKHS
- Category: Statistical Learning
- Language: en
- Key Concepts: Kernel Methods & Reproducing Kernel Hilbert Spaces (RKHS), reproducing property, characteristic, Reproducing Kernel Hilbert Space, Mercer's Theorem, Kernel Mean Embeddings, The Representer Theorem
- References: math/spectral-theory-operators
- Backlinks: attention-kernel, hilbert-banach-spaces, kde

## Entity: linear-regression
- Title: Linear Regression and Gauss-Markov
- Category: Statistical Learning
- Language: en
- Key Concepts: Normal Equation, Ordinary Least Squares (OLS), The Model, exactly zero, No Autocorrelation, BLUE (Best Linear Unbiased Estimator), Homoscedasticity, Linear Regression and the Gauss-Markov Theorem, The Gauss-Markov Theorem, Visualization: The Bias-Variance Trade-off, Gauss-Markov Theorem, Regularization (Ridge and Lasso), Related Topics, 1. Ridge Regression (L2 Penalty), Zero Mean
- References: bayesian-inference, logistic-regression, mle
- Backlinks: logistic-regression

## Entity: logistic-regression
- Title: Logistic Regression
- Category: Statistical Learning
- Language: en
- Key Concepts: Log-Odds, Sigmoid activation, Logistic Regression: The Link Between Stats and Neural Networks, Convexity, [[asymptotic-stats/mle|Maximum Likelihood Estimation (MLE)]], Softmax, 4. Modern Scaling, Binary Cross-[[shannon-entropy|Entropy]], Logistic Function, 3. Interpretation: Odds and Ratios, Odds Ratio, Regularization (LASSO/Ridge), Multinomial (Softmax), Online Learning, 2. Estimation: Cross-[[shannon-entropy|Entropy]] Loss
- References: convex-optimization, convexity, finance/shannon-entropy, linear-regression, mle, transformer-architecture
- Backlinks: linear-regression

## Entity: normalizing-flows-math
- Title: Mathematical Foundations of Normalizing Flows
- Category: Statistical Learning
- Language: en
- Key Concepts: Continuous Normalizing Flows (CNFs), Composition of Flows, Change of Variables Theorem, Liouville Equation, Mathematical Foundations of Normalizing Flows

## Entity: mechanism-design
- Title: Mechanism Design
- Category: Statistical Learning
- Language: en
- Key Concepts: Famous Examples, The Goal: Incentive Compatibility, The Revelation Principle, Data Markets, Incentive Compatible (IC), second-highest price, Visualization: Revenue vs. Welfare, 1. Second-Price Auction (Vickrey Auction), rules, Application in AI: Alignment and Governance, stable, Strategy-proofness, Direct Mechanism, "Reverse Game Theory.", Mechanism Design
- References: llm, mean-field-games, online-learning-regret, rlhf

## Entity: mcts
- Title: Monte Carlo Tree Search (MCTS)
- Category: Statistical Learning
- Language: en
- Key Concepts: $Q(v)/N(v)$ (Exploitation), Monte Carlo Tree Search (MCTS), AlphaGo and Neural MCTS, $\sqrt{\dots}$ (Exploration), [[automatic-differentiation|Backpropagation]], zero domain knowledge, Simulation (Rollout), Policy Network, Tree Search, Why MCTS is Revolutionary, The UCT Formula, Expansion, Visualization: Tree Search vs. Rollout, Selection, heuristic evaluation functions
- References: automatic-differentiation, mdp, monte-carlo-integration, multi-armed-bandits
- Backlinks: orm-prm

## Entity: multi-armed-bandits
- Title: Multi-Armed Bandits
- Category: Statistical Learning
- Language: en
- Key Concepts: Multi-Armed Bandits, The Setup, 2. UCB (Upper Confidence Bound), Key Algorithms, Regret, 1. $\epsilon$-Greedy, Contextual Bandits, 3. Thompson Sampling, Visualization: UCB Action Selection, Cumulative Regret, sample, news recommendation, Related Topics, Exploration vs. Exploitation trade-off, ad placement
- References: bayesian-inference, mdp, online-learning-regret
- Backlinks: mcts

## Entity: naive-bayes
- Title: Naive Bayes Classifier
- Category: Statistical Learning
- Language: en
- Key Concepts: 3. Why it Works (The Paradox of Naive Bayes), Low Variance, Decision Boundary vs. Probability, class label, 2. Common Variants, Real-time Filtering, 1. The Probabilistic Model, "Naive" Assumption, Bayes' Theorem, NLP, Bernoulli Naive Bayes, Zero-Shot Baseline, Gaussian Naive Bayes, 4. Modern Use Cases in AI, Related Topics
- References: bayesian-inference, decision-theory, finance/shannon-entropy, llm, rag
- Backlinks: bayes-theorem

## Entity: online-learning-regret
- Title: Online Learning and Regret
- Category: Statistical Learning
- Language: en
- Key Concepts: Key Algorithms, Regret, Definition of Regret, Cumulative Regret, Multi-armed Bandits (MAB), Portfolio Selection, Thompson Sampling, Online Learning and Regret Minimization, Visualization: Regret Scaling, learn, The Online Protocol, UCB (Upper Confidence Bound), Optimization, 3. Multiplicative Weights Update (MWU) / Hedge, Ad Placement
- References: convex-optimization, finance/shannon-entropy, math/information-theory, reinforcement-learning
- Backlinks: mechanism-design, multi-armed-bandits, universal-portfolios

## Entity: pca
- Title: Principal Component Analysis (PCA)
- Category: Statistical Learning
- Language: en
- Key Concepts: SVD (Singular Value Decomposition), empirical covariance matrix, maximize the variance, The Mathematical Objective, Visualization, Noise Reduction, principal components, Data Compression, Explained Variance, Principal Component Analysis (PCA), Spectral Theorem Connection, largest eigenvalue, Related Topics, Visualization: Finding the Projection, unsupervised dimensionality reduction
- References: manifold-learning, math/spectral-theory-operators, variational-autoencoders
- Backlinks: alpha-orthogonalization, eigenvalues-eigenvectors, fastest-mean-reversion, matrix-decompositions, multivariate-normal, pca-statarb, tensor-decompositions

## Entity: attention-kernel
- Title: Self-Attention as a Kernel
- Category: Statistical Learning
- Language: en
- Key Concepts: Linear Transformers and Feature Maps, Reproducing Kernel Hilbert Space (RKHS), The Kernel Interpretation, In-Context Learning, Linear Transformers, The [[attention-mechanisms|Attention]] Mechanism, Self-[[attention-mechanisms|Attention]] as a Kernel, Nadaraya-Watson Kernel Regression, [[convex-optimization|gradient descent]], Visualization: Attention Surface in RKHS, Kernel Methods, Related Topics, Transformers as Non-parametric Learners, Self-[[attention-mechanisms|Attention]], feature map
- References: ai-theory/in-context-learning, attention-mechanisms, convex-optimization, kernel-methods-rkhs, state-space-models, transformer-architecture

## Entity: singular-learning-theory
- Title: Singular Learning Theory
- Category: Statistical Learning
- Language: en
- Key Concepts: Resolution of Singularities, The Free Energy and RLCT, Singular Learning Theory, Real Log Canonical Threshold (RLCT), Generalization Error

## Entity: statistical-mechanics-learning
- Title: Statistical Mechanics of Learning
- Category: Statistical Learning
- Language: en
- Key Concepts: Replica Symmetry (RS):, Information-Theoretic vs. Computational Gap:, Order Parameters and Overlaps, capacity, The Replica Trick, Statistical Mechanics of Learning, Replica Trick, The Teacher-Student Setup, Key Phenomena, Mathematical Framework, Gibbs distribution, Gardner Volume and Capacity, Phase Transitions, SAT/UNSAT Transition:, DERIVATION: The Free Energy of a Linear Perceptron
- References: ai-theory/neural-tangent-kernel, information-bottleneck-theory, pac-learning

## Entity: variational-inference-math
- Title: Variational Inference
- Category: Statistical Learning
- Language: en
- Key Concepts: Variational Inference, The Evidence Lower Bound (ELBO), Mean-Field Approximation, The Reparameterization Trick
- References: convex-optimization
- Backlinks: factor-graphs-inference

## Entity: anova
- Title: ANOVA (One-way/Two-way)
- Category: Statistics
- Language: en
- Key Concepts: Overview, One-way vs Two-way, Two-way ANOVA:, One-way ANOVA:
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
- Key Concepts: Overview, Autocorrelation, Stationarity

## Entity: signature-based-models
- Title: Signature-based Models
- Category: Stochastic
- Language: en
- Key Concepts: Sig-VAEs, 2. Pricing and Hedging, Dimensionality Reduction, Why It's a "Game Changer", What is a Path Signature?, Signature-based Models in Finance, 3. Lead-Lag Relationships, linear regression, Sig-GANs, Signatures in Quantitative Finance, Path Signature, 1. Market Simulation (Generative Models), Visualization: The First Few Terms, linear, Universal Property
- References: generative-models, path-dependent-volatility, rough-paths
- Backlinks: path-dependent-volatility

## Entity: copula-models-and-tail-dependence
- Title: Copula Models & Tail Dependence
- Category: Stochastic & Probability
- Language: en
- Key Concepts: See Also, 1. Sklar's Theorem, Copula Models & Tail Dependence
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
- Key Concepts: G-expectation and sublinear expectations, generator, [[quadratic-variation]] and paths:, Polynomial chaos, Comparison theorem, Nonlinear Feynman–Kac and connection to PDEs, Reflected BSDEs and optimal stopping, Deep neural networks, El Karoui–Peng–Quenez (1997) theorem, Numerical methods, Related concepts, Reflected BSDEs, Euler discretization, sublinear expectations, martingale representation
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
- Key Concepts: Generalizations, Financial Hedging, The Formula, Clark-Ocone Formula
- Backlinks: skorokhod-integral

## Entity: math/convergence-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Jump measure convergence:, Convergence of Semimartingales, Setup and Notation, Extension to Random Characteristics, Key point:, random, Step 2: Identification of limits., High-frequency econometrics., The Semimartingale Topology, Justification of continuous-time models., Diffusion convergence:, Step 1: Tightness., Proof Strategy, Related Articles, Drift convergence:
- References: brownian-motion, characteristic-functions, finance/levy-processes, finance/semimartingale-models, geometric-brownian-motion, heston-model, math/contiguity-measures, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/hellinger-processes, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov
- Backlinks: math/convergence-stochastic-integrals, math/density-processes, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/local-asymptotic-normality, math/martingale-problem, math/predictable-compensator, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/convergence-stochastic-integrals
- Title: Convergence of Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Theorem (Jakubowski-Memin-Pages; Kurtz-Protter)., Convergence of Stochastic Integrals, Application: Euler Scheme Convergence, Application: Discrete Hedging Convergence, Stronger version., Good Sequences and the UT Condition, Related Articles, good sequence, The Problem, UT (uniform tightness), any reasonable discrete-time financial model converges to a continuous-time model, and any trading strategy in the discrete model converges to the corresponding continuous-time strategy, The Main Theorem, Definition., The Meta-Theorem: Discrete Models Approximate Continuous Models, The Semimartingale Topology
- References: finance/girsanov-semimartingales, finance/semimartingale-models, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales, stochastic-differential-equations
- Backlinks: math/convergence-semimartingales, math/quadratic-variation

## Entity: feynman-kac
- Title: Feynman-Kac Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Feynman-Kac Formula, Connection to the Backward Kolmogorov Equation, Physics and the Schrödinger equation., Connection to Martingale Representation, Key step:, Formulation: The Main Result, path-integral formulation of quantum mechanics, American option theory., alternative, Structural credit risk models., Obstacle problems in turbulence., Proof Sketch: The Martingale Approach, infinitesimal generator of the diffusion, dimension-independent, Related Articles
- References: black-scholes, finance/girsanov-semimartingales, finance/optimal-stopping-american, fokker-planck-equation, math/martingale-representation, numerical-pde-finance, partial-differential-equations, path-integral, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/backward-sde, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, stochastic-control, stochastic-differential-equations, stochastic-processes

## Entity: hjm-framework
- Title: HJM (Heath-Jarrow-Morton) Framework
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Infinite-Dimensional Perspective, Forward Rate Dynamics, HJM (Heath-Jarrow-Morton) Framework, HJM Drift Condition
- References: math/spdes, stochastic-differential-equations
- Backlinks: finance/cir-hull-white, finance/libor-market-model

## Entity: fractional-brownian-motion-integration
- Title: Integration with Respect to Fractional Brownian Motion
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Financial Modeling, Integration with Respect to Fractional Brownian Motion, Pathwise Young and Rough Path Integration, Malliavin and Wick-Itô Integrals

## Entity: libor-market-model
- Title: LIBOR Market Model (LMM)
- Category: Stochastic Calculus
- Language: en
- Key Concepts: LIBOR Market Model (LMM), Measure Change and Drift, Lognormal Forward Rates, Calibration and Implementation
- Backlinks: finance/bootstrapping-yield-curve

## Entity: local-time-tanaka
- Title: Local Time and Tanaka Formula
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Visualization: The Occupation Density, Lévy's Theorem and the Reflection Principle, Itô calculus of non-smooth functions, Optimal Stopping, Local Time, Definition and Intuition: Measuring Residence, Sticky Brownian Motion, Excursion Decomposition, Yamada-Watanabe Theorem, Dupire Local Volatility, Local Time and Tanaka's Formula, Related Topics, Occupation Time Formula, Tanaka's Formula, density of time
- References: brownian-motion, excursion-theory, math/doob-meyer-decomposition, math/optimal-stopping-markov, stochastic-differential-equations
- Backlinks: math/quadratic-variation

## Entity: levy-ito-decomposition
- Title: Lévy-Itô Decomposition
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Lévy measure, Lévy Measure and Characteristic Function, Intuition, Large jumps, Examples, Definition of Lévy Processes, Advantages, The Lévy-Itô Decomposition, Poisson Random Measure, Key Insights, martingale random measure, 1. Deterministic drift, compensator, Lévy-Khintchine triplet, 3. Compensated small jumps
- References: finance/levy-processes, finance/variance-gamma, math/doleans-dade-exponential, math/infinitely-divisible-distributions, math/predictable-compensator, merton-jump-diffusion, stochastic-differential-equations
- Backlinks: math/point-processes, math/quadratic-variation, math/sde-numerical-methods, math/subordinators

## Entity: malliavin-calculus
- Title: Malliavin Calculus
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Malliavin Derivative, Malliavin Calculus, Clark-Ocone Formula, Introduction, Applications: Greeks in Finance
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
- Key Concepts: Non-linear Fokker-Planck Equation, Definition, $N$-Particle System and Propagation of Chaos, McKean-Vlasov SDEs
- References: partial-differential-equations, stochastic-differential-equations

## Entity: numerical-methods-jump-diffusions
- Title: Numerical Methods for Jump-Diffusions
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Infinite Activity Lévy Noise, Higher-Order Milstein Schemes, Numerical Methods for Jump-Diffusions, Euler-Maruyama with Jumps
- References: central-limit-theorem, stochastic-differential-equations

## Entity: math/sde-numerical-methods
- Title: Numerical Methods for SDEs
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Numerical Methods for SDEs, Strong convergence, Stochastic Filtering, Split-Step Methods, Step-size tuning, Wagner–Platen Expansion, Lie–Trotter, Implicit Euler, Generative Modeling, Multilevel Monte Carlo, Milstein Scheme, Dimension, Euler–Maruyama Scheme, The Standard [[stochastic-differential-equations|SDE]], Computational cost
- References: brownian-bridge, diffusion-models, feynman-kac, finance/monte-carlo-method, levy-ito-decomposition, math/cameron-martin-formula, stochastic-differential-equations
- Backlinks: course-math-for-ai, math/stratonovich-integral

## Entity: math/predictable-compensator
- Title: Predictable Compensator and Dual Predictable Projection
- Category: Stochastic Calculus
- Language: en
- Key Concepts: predictable quadratic variation, Credit risk., Role in Convergence Theory, continuous quadratic variation, the law of a semimartingale with independent increments is completely determined by its triplet, Predictable Compensator and Dual Predictable Projection, compensator of the jump measure, Example: Hawkes process., predictable compensator, The Innovation Martingale, compensated jump measure, Marked point processes., Example: Cox process., Example: Poisson process., compensator
- References: brownian-motion, finance/levy-processes, finance/semimartingale-models, martingale-clt, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-martingales, math/doob-meyer-decomposition, math/functional-limit-theorems
- Backlinks: levy-ito-decomposition, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/density-processes, math/infinitely-divisible-distributions, math/martingale-problem, math/quadratic-variation, math/stable-convergence, math/tightness-semimartingales, math/triangular-arrays-processes

## Entity: math/quadratic-variation
- Title: Quadratic Variation
- Category: Stochastic Calculus
- Language: en
- Key Concepts: predictable quadratic variation, Definition and fundamental properties, Path continuity, Bilinearity, Monotonicity, Realized variance, Semimartingale decomposition and predictable quadratic variation, polarization identity, Discontinuous semimartingales and jump decomposition, Tanaka formula, Related foundations, local time, The Kunita–Watanabe inequality, Itô's formula through quadratic variation, Applications in mathematical finance
- References: levy-ito-decomposition, local-time-tanaka, malliavin-calculus, math/convergence-stochastic-integrals, math/doob-meyer-decomposition, math/predictable-compensator, stochastic-differential-equations
- Backlinks: math/backward-sde, math/stratonovich-integral

## Entity: reflected-sdes-skorokhod
- Title: Reflected SDEs & Skorokhod Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Application to American Options, Reflected SDEs & Skorokhod Problem, The Skorokhod Problem, RSDE Dynamics
- References: stochastic-control

## Entity: rough-paths
- Title: Rough Path Theory
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Signature Transform, Compact Representation, Applications in AI: Signature Transforms, The Signature of a Path, Rough Paths and p-variation, p-rough path, Robustness, The Fundamental Problem, 2 ≤ p < 3, Signature, 3 ≤ p, Stochastic Differential Equations (SDEs), p < 2, Terry Lyons, iterated integrals
- References: brownian-motion, deep-rl-execution, stochastic-differential-equations
- Backlinks: fbm-integration, math/spdes, math/stratonovich-integral, path-dependent-volatility, signature-based-models

## Entity: math/stochastic-calculus/rough-path-signatures
- Title: Rough Path Theory and Signatures
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Dimension Reduction:, What is a Path Signature?, Signatures in Machine Learning, Rough Path Theory and Signatures, Quantitative Finance, Universal Feature Map:, Signature Transform, Invariance to Reparameterization:, The Problem, deterministic, Noise Robustness:, Related Topics, Rough Path Theory, Signature Transforms, Key Properties:
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
- Key Concepts: Stochastic Development and Parallel Transport, Semimartingales on Manifolds, Stratonovich Calculus, Eells-Elworthy-Malliavin Construction
- References: manifold-learning, math/differential-geometry, stochastic-differential-equations

## Entity: math/skorokhod-topology
- Title: Skorokhod Topology and the Space D
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Identify the limit, Skorokhod Representation Theorem, The Space $\mathbb{D}[0,T]$, jumps, The Multidimensional Case, Donsker's theorem., Embed, strictly finer, For semimartingales, Why C-Space Topology Is Insufficient, predictable characteristics, completed graph, cadlag, M1 topology, values
- References: brownian-motion, central-limit-theorem, finance/levy-processes, finance/semimartingale-models, math/discrete-martingales, math/weak-convergence-prokhorov
- Backlinks: math/contiguity-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/martingale-problem, math/stable-convergence, math/tightness-semimartingales, math/topology-basics, math/triangular-arrays-processes

## Entity: stable-processes
- Title: Stable Processes and Lévy Flights
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Heavy Tails, Lévy Flight, Foraging Patterns, infinite variance, stability index, Lévy Flights, Alpha-Stable Distributions, Fractional [[spectral-graph-theory|Laplacian]], $\alpha = 1$, stable, Stable Processes, Optimization, Lévy Flights vs. Brownian Motion, $\alpha = 2$, Lévy-flight-based Metaheuristics
- References: extreme-value-theory, finance/levy-processes, fractional-brownian-motion, spectral-graph-theory

## Entity: stochastic-manifolds
- Title: Stochastic Calculus on Manifolds
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Brownian Motion on a [[manifold-learning|Manifold]], Robotics and Control, Stochastic Differential Equations (SDEs) on Manifolds, Information Geometry, stochastic parallel transport, Biophysics, Stratonovich integral, half the Laplace-Beltrami operator, Differential Geometry, Eells-Elworthy-Malliavin (EEM), Stochastic Calculus on Manifolds, Itô, Visualization: Random Walk on a Sphere, Applications, The Challenge of Curvature
- References: manifold-learning, math/differential-geometry, ricci-flow, stochastic-differential-equations

## Entity: stochastic-control
- Title: Stochastic Control
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Viscosity solution, portfolio optimization, value function, [[markowitz-mean-variance|Markowitz portfolio theory]], Bellman equation, Further Reading, free boundary problem, The Merton Portfolio Problem (1969), adapted control process, [[numerical-pde-finance|Numerical PDE methods]], Stochastic control, singular, [[feynman-kac|Feynman-Kac formula]], policy optimization, [[stochastic-differential-equations|Stochastic differential equations]]
- References: avellaneda-stoikov, feynman-kac, finance/markowitz-mean-variance, finance/optimal-stopping-american, numerical-pde-finance, optimal-execution, reinforcement-learning, stochastic-differential-equations
- Backlinks: convex-analysis, convex-optimization, math/backward-sde, math/ode-stability, mdp, merton-portfolio, optimal-execution, path-integral-control, reflected-sdes-skorokhod, stochastic-games, stochastic-maximum-principle

## Entity: stochastic-control-partial-info
- Title: Stochastic Control with Partial Information
- Category: Stochastic Calculus
- Language: en
- Key Concepts: The Information State, Stochastic Control with Partial Information, Control:, Dual Control, Filtering:, Separation Principle
- References: nonlinear-filtering, reinforcement-learning

## Entity: stochastic-differential-equations
- Title: Stochastic Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Forward SDE, Physics and Filtering, weak solution, given, 1. Foundations: Brownian Motion, 3. Itô's Lemma, Finance, Weak Solutions, Physics, Yamada-Watanabe Theorem, Itô integral, 5. The Martingale Problem (Stroock-Varadhan), Stochastic Differential Equations (SDE), 2. General Form of an SDE, drift coefficient
- References: brownian-motion, feynman-kac, geometric-brownian-motion, heston-model, math/martingale-problem, nonlinear-filtering
- Backlinks: activation-functions-math, brownian-bridge, computational-complexity-pac-bayes, conditionally-gaussian-processes, course-math-for-ai, differential-equations, diffusion-models, diffusion-sde-math, equivariant-diffusion-models, ergodic-theory-sgd, feller-processes, feynman-kac, finance/hjm-framework, finance/libor-market-model, finance/short-rate-models, fokker-planck-equation, generative-scenario-models, geometric-brownian-motion, hjm-framework, information-theory-rate-distortion, levy-ito-decomposition, local-time-tanaka, math-reasoning-chains-rl, math/backward-sde, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/interacting-particle-systems, math/martingale-problem, math/martingale-representation, math/ode-stability, math/quadratic-variation, math/sde-numerical-methods, math/spdes, math/stratonovich-integral, math/tightness-semimartingales, mckean-vlasov-sdes, merton-portfolio, mixture-of-experts-routing, neural-operators, neural-sdes-finance, nonequilibrium-stat-mech-diffusion, nonequilibrium-statmech, nonlinear-filtering, numerical-methods-jump-diffusions, ornstein-uhlenbeck, ornstein-uhlenbeck-process, pde-hamilton-jacobi, poisson-jump-sdes, quantization-ptq-information, reasoning-models-prm-orm, regularization-implicit-bias, renormalization-group-dl, rough-paths, semimartingales-on-manifolds, speculative-decoding-medusa, spin-glasses-hopfield, stochastic-calculus-manifolds, stochastic-control, stochastic-games, stochastic-manifolds, stochastic-maximum-principle, stochastic-processes, tokenization-bpe-unigram, wentzell-freidlin, wiener-chaos

## Entity: stochastic-games
- Title: Stochastic Differential Games
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stochastic Differential Games, Isaacs Equation, 2. Zero-Sum Games, Cybersecurity, Mathematical Formulation, The Master Equation and MFGs, Stochastic Differential Equations (SDEs), Related Topics, 1. Nash Equilibrium, Visualization: Strategy Interaction, Master Equation, saddle-point, Quantitative Finance, Types of Equilibria, Applications
- References: mean-field-games, stochastic-control, stochastic-differential-equations

## Entity: fbm-integration
- Title: Stochastic Integration for fBM
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Stochastic Integration for Fractional Brownian Motion, 1. The Skorokhod Integral (Malliavin Calculus), Fractional Volatility, 2. The Stratonovich-type Integral (Wick Product), Wick product, Rough Volatility, Visualization: Integration Regularity, not a semimartingale, The Challenge, Divergence Operator (Skorokhod Integral), Malliavin derivative, Young Integration, not, Long-Memory Systems, Why It Matters for Finance and AI
- References: fractional-brownian-motion, malliavin-calculus, rough-paths

## Entity: stochastic-maximum-principle
- Title: Stochastic Maximum Principle
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Comparison with HJB, Stochastic Maximum Principle, Hamiltonian and Adjoint Equations, Maximum Principle
- References: stochastic-control, stochastic-differential-equations

## Entity: math/spdes
- Title: Stochastic Partial Differential Equations
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Materials science, fixed-point arguments, Burgers Equation with Noise, renormalization, Finance, References, asymmetric simple exclusion process, KPZ universality class, Martin Hairer, stochastic Burgers equation, Mild Solutions and the Semigroup Approach, stochastic heat equation, Kardar–Parisi–Zhang (KPZ) equation, Regularity structures, Atmospheric and geophysical fluid dynamics
- References: feynman-kac, malliavin-calculus, math/backward-sde, math/interacting-particle-systems, partial-differential-equations, rough-paths, spectral-graph-theory, stochastic-differential-equations
- Backlinks: hjm-framework

## Entity: math/stratonovich-integral
- Title: Stratonovich Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Wong-Zakai, Stratonovich Integral, Theorem (Wong-Zakai)., Stochastic Differential Equations: Stratonovich Form, statistical mechanics, Martingale property, midpoints, calculus, Stratonovich lift, The Onsager-Machlup Functional, not, Finance, Onsager-Machlup functional, Stratonovich [[stochastic-differential-equations|SDE]], Malliavin calculus
- References: brownian-motion, feynman-kac, malliavin-calculus, manifold-learning, math/cameron-martin-formula, math/quadratic-variation, math/sde-numerical-methods, rough-paths, stochastic-differential-equations
- Backlinks: wiener-chaos

## Entity: skorokhod-integral
- Title: The Skorokhod Integral
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Duality with Malliavin Derivative, Anticipative Calculus, Non-Adapted Integration, The Skorokhod Integral
- References: clark-ocone-formula

## Entity: math/martingale-problem
- Title: The Stroock-Varadhan Martingale Problem
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Connection to SDEs, Well-posedness, martingale problem, Queueing systems., probability measure, Theorem., duality, Formulation, Weak convergence is natural., Examples and Applications, diffusion approximation, Related Articles, Semimartingale Perspective, The Stroock-Varadhan Martingale Problem, solves the martingale problem
- References: brownian-motion, geometric-brownian-motion, math/convergence-semimartingales, math/doleans-dade-exponential, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, stochastic-differential-equations
- Backlinks: stochastic-differential-equations

## Entity: math/tightness-semimartingales
- Title: Tightness of Semimartingales
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Tightness and the Main Convergence Theorem, C-Tightness, Numerical schemes., Tightness in the Skorokhod Space, Characterization., Criterion., Aldous's Condition, High-frequency limits., Donsker's invariance principle., Control of oscillations:, The UT Condition, Related Articles, Converse direction., Tightness of Semimartingales, C-tight
- References: brownian-motion, finance/semimartingale-models, martingale-clt, math/convergence-semimartingales, math/functional-limit-theorems, math/predictable-compensator, math/skorokhod-topology, math/weak-convergence-prokhorov, stochastic-differential-equations
- Backlinks: math/convergence-stochastic-integrals, math/triangular-arrays-processes

## Entity: math/triangular-arrays-processes
- Title: Triangular Arrays and Convergence to Processes with Independent Increments
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Jump measure convergence:, Applications to High-Frequency Statistics, infinitesimal, Tightness., Identification of limits., Theorem., The Infinitesimal Condition, Multivariate Extensions, functional Lindeberg-Feller theorem, Diffusion convergence:, Realized volatility, The Functional Lindeberg-Feller Theorem, Power variations, Related Articles, Proof Architecture
- References: brownian-motion, central-limit-theorem, characteristic-functions, finance/levy-processes, finance/semimartingale-models, finance/stable-distributions, math/convergence-semimartingales, math/functional-limit-theorems, math/infinitely-divisible-distributions, math/predictable-compensator, math/skorokhod-topology, math/tightness-semimartingales
- Backlinks: math/functional-limit-theorems

## Entity: wiener-chaos
- Title: Wiener Chaos and Multiple Stochastic Integrals
- Category: Stochastic Calculus
- Language: en
- Key Concepts: Conclusion, Hermite Polynomials and Orthogonality, Equivalent definition, First Wiener Chaos, Multiple Stochastic Integrals, Relationship with Other Structures, Quantum Field Theory, Applications in Financial Mathematics, [[characteristic-functions|Characteristic functions]], Relation to [[malliavin-calculus|Malliavin calculus]], Wiener-Itô Decomposition, Malliavin Derivative, [[stratonovich-integral|Stratonovich integrals]], Hypercontractivity, Number-operator approach
- References: characteristic-functions, malliavin-calculus, math/information-theory, math/stratonovich-integral, stochastic-differential-equations

## Entity: arch-models
- Title: ARCH Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: Strict stationarity, Algorithmic Trading, Autoregressive Conditional Heteroskedasticity (ARCH), Overview & Background, GARCH(p,q), Prerequisites, volatility clustering, Portfolio Optimization, Volatility clustering, Risk Model Backtesting, Mathematical Framework, Python Implementation, No leverage effect, GJR-GARCH, Parameter Table
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
- Key Concepts: continuous component, Definition, Implementation, HAR-RV-J Model, Jump Test, tripower quarticity, Bipower Variation (BPV), Bipower Variation, Convergence, Related Articles, Background: Realised Variance and Jumps, Heterogeneous Autoregressive
- References: extreme-value-theory, finance/levy-processes, finance/realized-kernels, garch-models, volatility-forecasting
- Backlinks: finance/rough-volatility, finance/stylized-facts-returns, finance/variance-swaps, jump-robust-volatility

## Entity: brownian-bridge
- Title: Brownian Bridge
- Category: Stochastic Processes
- Language: en
- Key Concepts: Kolmogorov-Smirnov Statistics, Applications in Finance and Numerical Methods, Definition, Sequential testing:, Related Constructions, Bridge Between Arbitrary Points, Brownian Meanders and Excursions, [[stochastic-differential-equations|SDE]] Representation and Numerical Singularity, Bridge sampling:, Barrier option pricing:, Karhunen-Loève Expansion
- References: finance/barrier-asian-options, finance/monte-carlo-method, math/spectral-theory-operators, ornstein-uhlenbeck-process, stochastic-differential-equations
- Backlinks: course-math-for-ai, empirical-processes, math/gaussian-process-sample-paths, math/random-walks, math/sde-numerical-methods

## Entity: brownian-motion
- Title: Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Optimal Execution, Itô's Lemma, Markov property, standard Wiener process, first passage time, Overview & Background, Axiomatic Definition, Geometric Brownian Motion, Fractional Brownian Motion, total variation, [[levy-processes]], reflection principle, Connection to PDEs, Risk Management, Fractal dimension
- References: avellaneda-stoikov, black-scholes, finance/levy-processes, geometric-brownian-motion, mcmc, schrodinger-equation
- Backlinks: avellaneda-stoikov, black-scholes, copula-models, cox-process, dv01, excursion-theory, finance/asymptotic-expansion-finance, finance/bachelier-formula, finance/bond-options-gaussian, finance/bs-market-self-financing, finance/change-of-numeraire, finance/coherent-risk-measures, finance/efficient-market-hypothesis, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/free-boundary-american, finance/girsanov-semimartingales, finance/hjm-framework, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/libor-market-model, finance/quasi-monte-carlo, finance/real-options, finance/realized-kernels, finance/self-similarity-fractality, finance/semimartingale-models, finance/short-rate-models, finance/stable-distributions, fokker-planck-equation, geometric-brownian-motion, innovation-process, law-iterated-logarithm, local-time-tanaka, martingale, math/absolute-continuity-process-measures, math/borel-cantelli-zero-one, math/cameron-martin-formula, math/central-limit-theorem, math/conditional-expectation-sigma, math/convergence-semimartingales, math/discrete-markov-chains, math/discrete-martingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/ergodic-theorems-birkhoff, math/functional-limit-theorems, math/glivenko-cantelli, math/hausdorff-measure, math/kolmogorov-equations-ctmc, math/kolmogorov-probability-axioms, math/law-of-large-numbers, math/martingale-clt, math/martingale-problem, math/martingale-representation, math/predictable-compensator, math/sequential-hypothesis-testing, math/sigma-algebra-measurability, math/skorokhod-topology, math/spectral-representation-processes, math/stationary-wide-spectral, math/stochastic-recursive-sequences, math/stratonovich-integral, math/tightness-semimartingales, math/triangular-arrays-processes, math/weak-convergence-prokhorov, math/wiener-hopf-factorization, multifractal-processes, neural-odes, nonlinear-filtering, ornstein-uhlenbeck, partial-differential-equations, rough-paths, sle, stochastic-differential-equations, stochastic-processes

## Entity: finance/cir-hull-white
- Title: CIR and Hull-White Interest Rate Models
- Category: Stochastic Processes
- Language: en
- Key Concepts: Hull-White, CIR and Hull-White Interest Rate Models, Hull-White Model, Implementation, Feller condition, Zero-coupon bond price, Cox-Ingersoll-Ross (CIR), Related Articles, Cox-Ingersoll-Ross Model
- References: finance/libor-sofr, finance/nelson-siegel-svensson, finance/swaps, hjm-framework, ornstein-uhlenbeck-process
- Backlinks: finance/bond-options-gaussian, finance/bootstrapping-yield-curve, finance/libor-market-model, finance/libor-sofr, finance/short-rate-models

## Entity: convergence-of-semimartingales
- Title: Convergence of Semimartingales
- Category: Stochastic Processes
- Language: en
- Key Concepts: Skorokhod Space $J_1$ Topology, Convergence of Semimartingales, Convergence of Characteristics, Tightness and Aldous' Criterion
- References: statistical-mechanics

## Entity: cox-process
- Title: Cox Process (Doubly Stochastic)
- Category: Stochastic Processes
- Language: en
- Key Concepts: Independence assumption, Overview & Background, Formal Definition, hazard rate, stochastic randomness at two levels, Feller condition, doubly stochastic Poisson process, Jump intensity, affine expression, Cox Process (Doubly Stochastic), No memory given intensity, Overdispersion, Hawkes process, CIR Intensity Model, intensity
- References: avellaneda-stoikov, brownian-motion, copula-models, cs01, finance/levy-processes
- Backlinks: avellaneda-stoikov, copula-models, cs01, finance/copula-models, finance/hawkes-process, finance/levy-processes, finance/semimartingale-models, math/point-processes

## Entity: dirichlet-forms
- Title: Dirichlet Forms
- Category: Stochastic Processes
- Language: en
- Key Concepts: Fractals and Manifolds, Formal Definition, Dirichlet Forms, Generator, Why Use Dirichlet Forms?, Markov processes, Markovian, Closed, Stability, Brownian motion, Visualization: Energy Minimization, Markov Process, Dirichlet Form, energy, SDEs with Bad Drift
- References: finance/shannon-entropy, measure-theory, operator-semigroups

## Entity: excursion-theory
- Title: Excursion Theory
- Category: Stochastic Processes
- Language: en
- Key Concepts: Fine Structure of Trajectories, Poisson Point Process, Visualization: Excursion Decomposition, Itô Measure, excursions, Excursion Theory, Kiyosi Itô, Fluctuation Theory, Stochastic Integration, The Excursion Process, Itô's Excursion Measure ($n$), Related Topics, The Intuition: Slicing the Path, Applications
- References: brownian-motion, poisson-process
- Backlinks: local-time-tanaka

## Entity: feller-processes
- Title: Feller Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Diffusion matrix $a_{ij}(x)$, Strong Markov Property, Lévy-type operator, 1. The Functional Analytic Definition, Càdlàg Paths, 4. Probabilistic Consequences, Strong Continuity, Courrège's Theorem, Heston stochastic volatility, Stopping Times, Feller Processes: The Analytic Foundation of Markov Dynamics, 5. Modern Applications, functional analysis, pseudo-differential operator, Feller Property (Invariant Space)
- References: finance/levy-processes, operator-semigroups, spectral-graph-theory, stochastic-differential-equations
- Backlinks: martingale, operator-semigroups

## Entity: finance/fractional-fokker-planck
- Title: Fractional Fokker-Planck Equation
- Category: Stochastic Processes
- Language: en
- Key Concepts: Background, Sub-diffusion, Prerequisites, non-Gaussian, Space-Fractional FPE (Lévy Flights), Python: Numerical Concept (CTRW Simulation), non-Markovian, Practical Applications in Quant Finance, Fractional Fokker-Planck Equation (FFPE), fractional generalization, Crypto and emerging markets, Stationarity, Computational cost, Option pricing under anomalous diffusion, Multiscaling
- References: brownian-motion, finance/hurst-exponent, finance/levy-processes, garch-models, geometric-brownian-motion, mcmc, spectral-graph-theory
- Backlinks: finance/hurst-exponent, finance/levy-processes, finance/self-similarity-fractality, partial-differential-equations, pinns

## Entity: freidlin-wentzell-theory
- Title: Freidlin-Wentzell Theory
- Category: Stochastic Processes
- Language: en
- Key Concepts: Freidlin-Wentzell Theory, Small Noise Perturbation, Exit Problem and Kramers' Law, Action Functional (Rate Function)
- References: statistical-mechanics

## Entity: gff
- Title: Gaussian Free Field (GFF)
- Category: Stochastic Processes
- Language: en
- Key Concepts: Intuition, Gaussian Free Field (GFF), [[sle|Schramm-Loewner Evolution]], 5. Why Tier-1 Quants care, 1. Mathematical Definition, Statistical Mechanics, Graph Theory, Dirichlet Energy, 4. Discrete GFF and Algorithms, SLE curves, Quantum Gravity, 3. The Link to SLE and Geometry, Green's Function, Effective Field Theory, Markov Random Fields
- References: laplacian, quantum-information-entropy, schwartz-distributions, sle
- Backlinks: sle

## Entity: math/gaussian-process-sample-paths
- Title: Gaussian Process Sample Paths
- Category: Stochastic Processes
- Language: en
- Key Concepts: Theorem (Dudley, 1967), reproducing kernel Hilbert space, Theorem (Fernique), Fernique, Definition, Reproducing Kernel Hilbert Space (RKHS), Connections to Other Processes, Corollary, Sketch of proof, Overview, not, The Canonical Metric, majorizing measures, smooth, equivalent
- References: brownian-bridge, empirical-processes, finance/shannon-entropy, fractional-brownian-motion, math/cameron-martin-formula, math/concentration-inequalities
- Backlinks: math/nonparametric-regression

## Entity: geometric-brownian-motion
- Title: Geometric Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Risk-Neutral Pricing, Geometric Brownian Motion (GBM), Key Statistical Properties, Background, Euler-Maruyama Discretization, Prerequisites, Geometric Brownian Motion, Portfolio simulation, Options pricing, Python Implementation, Simulated Path Fan, Itô correction, Real options analysis, Continuous paths, Constant volatility
- References: black-scholes, brownian-motion, finance/levy-processes, heston-model, stochastic-differential-equations, volatility-forecasting
- Backlinks: black-scholes, brownian-motion, differential-equations, finance/bachelier-formula, finance/black-scholes-derivations, finance/complete-incomplete-markets, finance/crr-model, finance/discrete-girsanov-esscher, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hurst-exponent, finance/levy-esscher-continuous, finance/realized-kernels, finance/semimartingale-models, finance/stefan-problem-american, finance/volatility-surface, fokker-planck-equation, futures-hedging, greeks-options, math/absolute-continuity-process-measures, math/convergence-semimartingales, math/convergence-stochastic-integrals, math/doleans-dade-exponential, math/functional-limit-theorems, math/martingale-problem, math/sequential-hypothesis-testing, merton-portfolio, risk-neutral-valuation, stochastic-differential-equations, stochastic-processes

## Entity: finance/hawkes-process
- Title: Hawkes Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Hawkes with inhibition, Mathematical Definition, Background, Stationarity Condition, Exponential kernel assumption, Volatility clustering, Python: Simulating a Hawkes Process, Hawkes process, Stationarity requirement, Flash crashes, Hawkes Process, compensator, excitation kernel, Zumbach effect, Order book dynamics
- References: cox-process, finance/monte-carlo-method, garch-models, geometric-brownian-motion
- Backlinks: finance/order-flow-imbalance, finance/semimartingale-models, lob-propagators, market-microstructure, multivariate-hawkes, queue-reactive-models

## Entity: finance/hurst-exponent
- Title: Hurst Exponent
- Category: Stochastic Processes
- Language: en
- Key Concepts: rescaled range (R/S) analysis, Background, $H = 0.5$, Multifractal Detrended Fluctuation Analysis (MFDFA), Time-varying H, Regime classification, Multifractal Model of Asset Returns (MMAR), Anti-persistent (Mean-Reverting) Series, Random Walk (Brownian Motion), Estimation bias, Strategy selection, Spurious long memory, Parameter Reference, Mathematical Foundation: R/S Analysis, Interpretation of H
- References: finance/fractional-fokker-planck, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, geometric-brownian-motion, hidden-markov-models
- Backlinks: arima-models, finance/fisher-transform, finance/fractional-fokker-planck, finance/hilbert-huang-transform, finance/lempel-ziv-complexity, finance/phase-space-reconstruction, finance/self-similarity-fractality, finance/stable-distributions, finance/stylized-facts-returns, fractional-cointegration

## Entity: finance/hyperbolic-distributions
- Title: Hyperbolic Distributions and Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Generalized Hyperbolic (GH), Definition, Normal, Financial application, Eberlein-Keller (1995), "hand-crafted" compromise, Lévy process with GH increments, Stress testing, Connection to stable distributions, Tail behaviour, Variance Gamma, VaR and CVaR, Related Articles, Connection to Lévy processes, Hyperbolic
- References: brownian-motion, cornish-fisher-cvar, finance/fft, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns

## Entity: finance/levy-processes
- Title: Lévy Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Martingale condition, Drift, Mathematical Framework: The Lévy-Itô Decomposition, Time-inhomogeneity, Skewness and kurtosis, Stationary increments, CGMY / KoBoL Process, The Lévy-Khintchine Representation, Jumps, Scaling, Parameter Table, Lévy Processes, Definition and Properties, Lévy process, Poisson Process
- References: cox-process, finance/fractional-fokker-planck, finance/monte-carlo-method, heston-model, ornstein-uhlenbeck-process
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, brownian-motion, characteristic-functions, clt, cornish-fisher-cvar, cox-process, feller-processes, finance/bipower-variation, finance/energy-commodity-derivatives, finance/fractional-fokker-planck, finance/merton-jump-diffusion, finance/variance-gamma, finance/zeta-field, geometric-brownian-motion, kelly-criterion, levy-ito-decomposition, levy-structured-products, math/convergence-semimartingales, math/doleans-dade-exponential, math/doob-meyer-decomposition, math/functional-limit-theorems, math/hellinger-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/martingale-representation, math/predictable-compensator, math/skorokhod-topology, math/stochastic-recursive-sequences, math/subordinators, math/triangular-arrays-processes, math/wiener-hopf-factorization, multifractal-processes, numeraire-invariant-hedging, occupation-measures-local-times, ornstein-uhlenbeck-process, stable-processes, stochastic-processes

## Entity: math/markov-chain-mixing
- Title: Markov Chain Mixing Times
- Category: Stochastic Processes
- Language: en
- Key Concepts: Conductance and Cheeger's Inequality, Poincaré inequality, Practical diagnostics:, Coupon Collector Example, total variation distance, Reversibility and the Poincaré Inequality, burn-in period, Upper Bounds and Hitting Times, conductance, preconditioning, Summary of Key Results, Conductance, $n$-step total variation distance to stationarity, Card Shuffling: Diaconis' Classical Result, Mixing Time Definition
- References: central-limit-theorem, math/concentration-inequalities, math/coupling-methods, math/discrete-markov-chains, math/ergodic-theorems-birkhoff, math/renewal-theory, math/spectral-theory-operators
- Backlinks: math/coupling-methods, math/geometric-ergodicity, math/interacting-particle-systems, math/spectral-theory-operators, queuing-theory, random-walks-groups, time-series

## Entity: finance/merton-jump-diffusion
- Title: Merton Jump-Diffusion Model
- Category: Stochastic Processes
- Language: en
- Key Concepts: Model, Merton (1976) Jump-Diffusion model, Implementation, Related Articles, Option Pricing Formula, Merton Jump-Diffusion Model
- References: black-scholes, finance/levy-processes, finance/variance-gamma, heston-model

## Entity: multifractal-processes
- Title: Multifractal Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Financial Markets (MSMR), Brownian motion, Fluid Turbulence, Multifractal Spectrum ($f(\alpha)$), Multifractal Cascade Models, Visualization: Monofractal vs. Multifractal, Multifractal Random Walk, Applications in Finance and Physics, Related Topics, Network Traffic, Multifractal Processes, The Limitation of Monofractals, Multifractal Process, Multiplicative Cascade
- References: brownian-motion, finance/levy-processes, fractional-brownian-motion

## Entity: occupation-measures-local-times
- Title: Occupation Measures and Local Times of Lévy Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Occupation Measure, Occupation Measures and Local Times of Lévy Processes, Tanaka's Formula and Discontinuities, Fourier Analytic Conditions
- References: finance/levy-processes, fourier-transform

## Entity: ornstein-uhlenbeck
- Title: Ornstein-Uhlenbeck Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Key Properties, 3. Autocovariance, $\mu$ (Long-term mean), 2. Stationarity and Normality, Physics, $\theta > 0$ (Rate of mean reversion), 1. Mean Reversion, Ornstein-Uhlenbeck Process, stationary Gaussian distribution, mean-reverting, Visualization: Mean Reversion Path, Related Topics, AI (Diffusion Models), The [[stochastic-differential-equations|SDE]] Definition, Finance (Vasicek Model)
- References: brownian-motion, math/stationary-wide-spectral, stochastic-differential-equations
- Backlinks: course-math-for-ai, stochastic-processes

## Entity: ornstein-uhlenbeck-process
- Title: Ornstein-Uhlenbeck Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: rate of mean reversion, MLE Parameter Estimation, Ornstein-Uhlenbeck Process, Background and History, half-life, Autocorrelation Function, Pairs Trading Spread Model, Python: Simulation and Parameter Estimation, Parameter Table, Ornstein-Uhlenbeck (OU) process, Non-Gaussian noise, volatility, Visualization, Multidimensional OU, long-term mean
- References: black-scholes, finance/levy-processes, finance/monte-carlo-method, finance/value-at-risk, heston-model, hidden-markov-models, mcmc, pairs-trading, stochastic-differential-equations
- Backlinks: brownian-bridge, diffusion-models, fastest-mean-reversion, finance/cir-hull-white, finance/levy-processes, finance/longstaff-schwartz, finance/particle-filter, fokker-planck-equation, pairs-trading, pca-statarb

## Entity: math/point-processes
- Title: Point Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: kernel, moment measure, The Poisson Process as Canonical Reference, Thinning, intensity measure, Poisson process with intensity, Finance, conditional intensity function, Palm Distributions and Conditioning, Hawkes Processes: Self-Exciting Dynamics, Cox Processes (Doubly Stochastic Poisson), Hawkes process, Daley & Vere-Jones, Superposition and Thinning Theorems, Cox process
- References: cox-process, levy-ito-decomposition, math/branching-processes, math/kolmogorov-equations-ctmc, math/renewal-theory
- Backlinks: math/survival-analysis, poisson-process

## Entity: poisson-process
- Title: Poisson Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Visualization: Arrivals over Time, Thinning, Definition, Poisson Processes, 3. Superposition and Thinning, Finance, Poisson Distribution, Physics, 2. Waiting Times (Arrival Times), Reliability, memoryless, Independent Increments, Poisson Process, Queueing Theory, Key Properties
- References: distributions-zoo, math/point-processes, math/renewal-theory
- Backlinks: course-math-for-ai, distributions-zoo, excursion-theory, exponential-distribution, queuing-theory, stochastic-processes

## Entity: math/random-walks
- Title: Random Walks
- Category: Stochastic Processes
- Language: en
- Key Concepts: Lévy's arc-sine laws, Reflection Principle and Ballot Problem, random walk, Wald's Identity, Brownian bridge, Arc-sine Law II, ballot problem, General Random Walks and Cramér Condition, martingale, reflection principle, trace, Wiener–Hopf factorization, Generating Functions and Fourier Analysis, Applications and References, Biophysics
- References: brownian-bridge, central-limit-theorem, math/discrete-martingales, math/functional-limit-theorems, math/large-deviations-cramer, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/rough-volatility
- Title: Rough Volatility and Fractional Brownian Motion
- Category: Stochastic Processes
- Language: en
- Key Concepts: Rough Volatility, Implementation, Related Articles, Implied vol skew, Rough Bergomi Model (Bayer, Friz, Gatheral 2016), Empirical finding, Rough Volatility and Fractional Brownian Motion, Fractional Brownian Motion
- References: finance/bipower-variation, finance/sabr-model, finance/variance-gamma, heston-model
- Backlinks: deep-hedging, finance/dupire-local-vol, garch-models, neural-sdes-finance, volatility-arbitrage, volatility-smile

## Entity: finance/self-similarity-fractality
- Title: Self-Similarity and Fractality of Financial Series
- Category: Stochastic Processes
- Language: en
- Key Concepts: The Hurst exponent and memory, fBm in finance: the arbitrage problem, scale invariance, R/S analysis, technical tool, self-similar with exponent $H \in (0, 1)$, Log-absolute returns, Hurst exponent, MLE for fBm, Trading volumes, fractional Brownian motion, arbitrage exists, calibrate option-market surfaces significantly better, Self-similar processes, their volatility
- References: brownian-motion, finance/bs-market-self-financing, finance/fractional-fokker-planck, finance/ftap-first-fundamental-theorem, finance/hurst-exponent, finance/levy-esscher-continuous, finance/stable-distributions, finance/stylized-facts-returns, heston-model
- Backlinks: finance/stable-distributions, finance/stylized-facts-returns, math/stationary-wide-spectral

## Entity: small-ball-probabilities
- Title: Small Ball Probabilities for Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Asymptotic Definition, Connection to [[shannon-entropy|Entropy]] and Spectra, Small Ball Probabilities for Stochastic Processes, Applications
- References: finance/shannon-entropy, quantization

## Entity: finance/stable-distributions
- Title: Stable Distributions and α-Stable Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Generalized Central Limit Theorem, only, infinite variance, The stability property, all, asymmetry, stable distribution, same, Financial application, first mathematically rigorous way, conceptual starting point, Connection to risk management practice, Generalized CLT (Lévy-Khintchine)., finite variance, Parametric heavy tails
- References: brownian-motion, cornish-fisher-cvar, extreme-value-theory, finance/hurst-exponent, finance/hyperbolic-distributions, finance/levy-esscher-continuous, finance/self-similarity-fractality, finance/stylized-facts-returns
- Backlinks: finance/hyperbolic-distributions, finance/self-similarity-fractality, finance/stylized-facts-returns, math/central-limit-theorem, math/infinitely-divisible-distributions, math/local-limit-theorems, math/lundberg-cramer-ruin, math/triangular-arrays-processes

## Entity: stochastic-processes
- Title: Stochastic Processes
- Category: Stochastic Processes
- Language: en
- Key Concepts: Key Classes of Processes, Markov Processes, Overview, [[geometric-brownian-motion]], [[brownian-motion]] (Wiener Process), [[stochastic-calculus]], Finance, Classification, By State Space $S$, Physics, Biology, Discrete-time processes, [[feynman-kac]] Formula, Fundamental Examples, Filtrations
- References: brownian-motion, ergodic-theory, feynman-kac, finance/levy-processes, geometric-brownian-motion, markov-chains, math/discrete-markov-chains, math/discrete-martingales, math/kolmogorov-equations-ctmc, math/martingale-representation, math/stationary-wide-spectral, ornstein-uhlenbeck, poisson-process, random-walks, risk-neutral-valuation, stochastic-differential-equations
- Backlinks: kuramoto-model, law-iterated-logarithm

## Entity: math/subordinators
- Title: Subordinators
- Category: Stochastic Processes
- Language: en
- Key Concepts: Lévy measure, Compound Poisson process., fractional Riemann-Liouville differential equation, not, Bochner Subordination, hitting time process, Bochner subordination, renewal process, Laplace exponent, Mittag-Leffler function, inverse, Time-deformed models, The Laplace Exponent, Subordinators, Variance-Gamma model
- References: finance/levy-processes, fractional-brownian-motion, levy-ito-decomposition, math/branching-processes, math/infinitely-divisible-distributions, math/kolmogorov-equations-ctmc, math/renewal-theory, math/wiener-hopf-factorization

## Entity: finance/variance-gamma
- Title: Variance Gamma Process
- Category: Stochastic Processes
- Language: en
- Key Concepts: Variance Gamma (VG), Parameter Effects, Definition, Option Pricing via FFT, Characteristic function, Related Articles, Variance Gamma Process
- References: finance/levy-processes, heston-model, merton-jump-diffusion
- Backlinks: finance/barrier-asian-options, finance/merton-jump-diffusion, finance/rough-volatility, levy-ito-decomposition, svi-model

## Entity: volatility-forecasting
- Title: Volatility Forecasting (GARCH, HAR)
- Category: Stochastic Processes
- Language: en
- Key Concepts: Student-t GARCH, Realized GARCH, mean reversion, Background, Intraday risk, Jump contamination, GARCH Extensions, Variance risk premium, QLIKE Loss Function, volatility clustering, HAR stationarity, Multivariate vol, HAR-CJ, Generalized ARCH(1,1), QLIKE
- References: finance/monte-carlo-method, finance/realized-kernels, finance/value-at-risk, garch-models, heston-model, mcmc, transformer-architecture
- Backlinks: amihud-illiquidity, ar-models, arch-models, arima-models, arma-models, convolutional-volatility-resolution-clustering, cornish-fisher-cvar, finance/bipower-variation, finance/multivariate-hmm, finance/realized-kernels, finance/sabr-model, finance/singular-spectral-analysis, finance/variance-swaps, finance/wavelet-transform, geometric-brownian-motion, kalman-filter, temporal-fusion-transformer, volatility-modulated-spectral-surface

## Entity: finance/zeta-field
- Title: Zeta Field
- Category: Stochastic Processes
- Language: en
- Key Concepts: Riemann-Siegel Z-function, level repulsion, Analytic Continuation and the Critical Strip, Zeta Field, GUE pair correlation, Spectral risk measure design, GUE spacing, Background, Cross-disciplinary research, Crash precursor detection, Hilbert-Pólya conjecture, Non-Hermitian extensions, Theoretical status, Riemann-Siegel Z-Function, Empirical testing
- References: finance/levy-processes, finance/random-matrix-theory, finance/shannon-entropy, finance/spectral-analysis, math/spectral-theory-operators, quantum-entanglement

## Entity: financial-entropy
- Title: Entropy and Market Complexity
- Category: Time Series
- Language: en
- Key Concepts: 3. Approximate Entropy (ApEn) and Sample Entropy, variance, Transfer Entropy, 4. Transfer Entropy and Causality, LZ is High, Efficiency Connection, [[shannon-entropy|Entropy]] in Finance: Lempel-Ziv and Market Complexity, drop, market regime indicator, structure, Granger Causality, 1. Shannon [[shannon-entropy|Entropy]] as Predictability, Visualization: Entropy during a Crash, 2. Lempel-Ziv Complexity (LZ), Anomalies
- References: causal-inference, finance/lempel-ziv-complexity, finance/shannon-entropy, nlp-financial-analysis
- Backlinks: entropy-pooling

## Entity: fractional-cointegration
- Title: Fractional Cointegration
- Category: Time Series
- Language: en
- Key Concepts: half-life of mean reversion, Fractional Cointegration Mechanism, The Long Memory Problem, Long Memory, fractionally cointegrated, long-range dependence, Trading Application, ARFIMA, ARFIMA Models, Visualization: Decay Speeds, Related Topics, Fractional Cointegration
- References: finance/hurst-exponent, fractional-brownian-motion, pairs-trading

## Entity: garch-models
- Title: GARCH and ARCH Models
- Category: Time Series
- Language: en
- Key Concepts: 2. GARCH Model (Bollerslev, 1986), IGARCH, Deep GARCH, Insight, Maximum Likelihood (MLE), Neural GARCH, 3. Asymmetric GARCH (GJR-GARCH), 1. ARCH Model (Engle, 1982), Related Topics, 4. Estimation and AI Integration, Leverage Effect, ARCH and GARCH Models: Volatility Clustering, Visualization: Volatility Spikes, ARCH, GARCH
- References: finance/rough-volatility, mle, time-series
- Backlinks: arch-models, convolutional-volatility-resolution-clustering, finance/bipower-variation, finance/fractional-fokker-planck, finance/hawkes-process, finance/heston-model, finance/hidden-markov-models, finance/realized-kernels, finance/stylized-facts-returns, finance/value-at-risk, finance/variance-swaps-vix, generative-scenario-models, math/ergodic-theorems-birkhoff, math/martingale-clt, math/stochastic-recursive-sequences, temporal-fusion-transformer, volatility-forecasting, volatility-modulated-spectral-surface

## Entity: hmm-particle-filters
- Title: Hidden Markov Models & Particle Filters
- Category: Time Series
- Language: en
- Key Concepts: Resample (Darwinian Selection), Hidden Markov Models (HMM), Hidden Markov Models & Particle Filters, Pairs Trading, Particle Filter (Sequential Monte Carlo), Dynamic Spread Quoting, The Non-Linear Problem: Particle Filters, Transition Matrix, latent, Kalman Filter, Baum-Welch algorithm, The Algorithm:, Emission Probability, Update (Weight), Filtering
- References: mcmc, regime-switching-factors
- Backlinks: hmm, lead-lag-analysis, lsv-model, mcmc, path-dependent-volatility, total-probability-variance, vpin

## Entity: jump-robust-volatility
- Title: Jump-Robust Realized Variance
- Category: Time Series
- Language: en
- Key Concepts: 1. Bipower Variation (BV), Why It Matters: Identifying Jumps, Visualization: Volatility vs. Jumps, Jump-Robust Realized Variance (MinRV and MedRV), 2. MinRV and MedRV (Andersen et al., 2012), volatility risk premium, Related Topics, The Problem with Standard RV, MinRV, Jump-Robust Estimators, Price Jumps, MedRV, Realized Variance (RV)
- References: finance/bipower-variation, finance/realized-kernels, merton-jump-diffusion

## Entity: morse-theory
- Title: Morse Theory
- Category: Topology
- Language: en
- Key Concepts: Morse Theory, non-degenerate, Topology of Loss Surfaces, loss landscape, Morse Inequalities, Index 1, Index $n$, The Morse Index, Visualization: Reconstructing a Torus, Index 0, Morse Theory and Neural Networks, index, Gradient Flows, Morse function, topology of a [[manifold-learning|manifold]]
- References: manifold-learning, math/algebraic-topology, math/differential-geometry, math/spectral-theory-operators, training-dynamics

## Entity: persistent-homology
- Title: Persistent Homology
- Category: Topology
- Language: en
- Key Concepts: Filtration and Homology, Persistent Homology, Barcodes and Persistence Diagrams, Stability Theorem, Topology of Data

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
- Key Concepts: See Also, Quant Brainteasers Python Handbook, 1. Dice Re-roll Game Simulation
- References: course-quant-trading, optimal-stopping-and-kelly, quant-market-making-mechanics
- Backlinks: optimal-stopping-and-kelly, quant-firm-interview-math-brainteasers, quant-interview-cheat-sheet, quant-trading-interview-roadmap, statistical-arbitrage-and-pairs-trading

## Entity: statistical-arbitrage-and-pairs-trading
- Title: Statistical Arbitrage & Pairs Trading
- Category: Trading Theory
- Language: en
- Key Concepts: 2. Ornstein-Uhlenbeck Process, See Also, Correlation:, 1. Cointegration vs Correlation, Cointegration:, Statistical Arbitrage & Pairs Trading, Tests:
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
- Key Concepts: Group, Inductive Bias, Group Theory, Identity:, Special Orthogonal group, Associativity:, Closure:, Sample Efficiency, 2. Equivariance, Special Euclidean group, Why does it matter for Deep Learning?, 1. Invariance, Group Equivariant Neural Networks (G-CNNs), Geometric Deep Learning, mathematically embedding equivariance into the architecture
- Backlinks: ai-theory/spatial/equivariant-gnn

## Entity: math/analysis-geometry/information-geometry
- Title: Information Geometry
- Category: Unknown
- Language: en
- Key Concepts: [[llm]] Latent Spaces:, dual connections, e-connection ($\alpha=1$):, TRPO/PPO, Dual Connections and $\alpha$-Geometry, m-connection ($\alpha=-1$):, Generalized Pythagorean Theorem, Natural [[convex-optimization|Gradient Descent]] (NGD), Fisher Information Matrix, K-FAC, Information Geometry, Applications in Deep Learning, Amari-Chentsov tensor, Riemannian manifolds, Information Bottleneck:
- References: convex-optimization, fisher-information, llm, manifold-learning, optimal-transport, transformer-architecture
- Backlinks: convex-analysis, course-math-for-ai, fisher-information, language-models/safety/rlhf-dpo, manifold-learning, math/bayesian-asymptotics, math/cramer-rao-bound, math/differential-geometry, math/minimax-estimation, math/neyman-pearson, maximum-entropy, multivariable-calculus

## Entity: geometric-mechanics-lie-groups
- Title: Geometric Mechanics: Control on Lie Groups
- Category: ai-physics
- Language: en
- Key Concepts: Differential and Information Geometry, Geometric Mechanics: Control on Lie Groups, Conclusion, Symplectic Geometry and Hamiltonian Mechanics
- References: convex-optimization, manifold-learning

## Entity: neural-operators-fno
- Title: Neural Operators: FNO vs. DeepONet
- Category: ai-physics
- Language: en
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Neural Operators: FNO vs. DeepONet, Differential and Information Geometry
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
- Key Concepts: Differential and Information Geometry, Symplectic Geometry & Hamiltonian Neural Networks, Conclusion, Symplectic Geometry and Hamiltonian Mechanics
- References: convex-optimization, manifold-learning

## Entity: mechanistic-interpretability-sae
- Title: AI Safety: Mechanistic Interpretability of SAEs
- Category: ai-theory
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, AI Safety: Mechanistic Interpretability of SAEs, Conclusion
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
- Key Concepts: Ergodic Theory of Stochastic [[convex-optimization|Gradient Descent]], Stochastic Dynamics and Statistical Mechanics, Conclusion, Differential and Information Geometry
- References: convex-optimization, manifold-learning, stochastic-differential-equations

## Entity: gnn-weisfeiler-lehman
- Title: Graph Neural Networks: Weisfeiler-Lehman
- Category: ai-theory
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Graph Neural Networks: Weisfeiler-Lehman, Conclusion, Algebraic Topology, Sheaves, and Category Theory
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
- Key Concepts: Conclusion, Optimal Transport and Wasserstein Metrics, Differential and Information Geometry, Multimodal Alignment: CLIP Math
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
- Key Concepts: Normalization Layers: BatchNorm vs RMSNorm, Random Matrix Theory and Spectral Dynamics, Conclusion, Differential and Information Geometry
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
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Renormalization Group in Deep Learning, Quantum Field Theory and Renormalization Group, Conclusion
- References: stochastic-differential-equations

## Entity: spin-glasses-hopfield
- Title: Spin Glasses & Hopfield Networks
- Category: ai-theory
- Language: en
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Spin Glasses & Hopfield Networks, Stochastic Dynamics and Statistical Mechanics, Conclusion
- References: math/spectral-theory-operators, stochastic-differential-equations

## Entity: geometry-loss-landscapes
- Title: The Geometry of Deep Learning Loss Landscapes
- Category: ai-theory
- Language: en
- Key Concepts: The Geometry of Deep Learning Loss Landscapes, Random Matrix Theory and Spectral Dynamics, Conclusion, Differential and Information Geometry
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
- Key Concepts: Topos Theory for Neural Networks, Conclusion, Algebraic Topology, Sheaves, and Category Theory
- References: spectral-graph-theory

## Entity: vision-transformers-scaling
- Title: Vision Transformers: Scaling Laws of ViT
- Category: ai-theory
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Vision Transformers: Scaling Laws of ViT, Quantum Field Theory and Renormalization Group, Conclusion
- References: attention-mechanisms

## Entity: weight-initialization-signal
- Title: Weight Initialization: Signal Propagation
- Category: ai-theory
- Language: en
- Key Concepts: Weight Initialization: Signal Propagation, Random Matrix Theory and Spectral Dynamics, Quantum Field Theory and Renormalization Group, Conclusion
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
- Key Concepts: Stochastic Dynamics and Statistical Mechanics, Optimal Transport and Wasserstein Metrics, Computational Complexity: PAC-Bayes Bounds, Conclusion
- References: stochastic-differential-equations

## Entity: distributed-training-3d
- Title: Distributed Training: 3D Parallelism Math
- Category: cs
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Optimal Transport and Wasserstein Metrics, Distributed Training: 3D Parallelism Math, Conclusion
- References: attention-mechanisms

## Entity: information-theory-rate-distortion
- Title: Information Theory: Rate-Distortion & VAEs
- Category: cs
- Language: en
- Key Concepts: Information Theory: Rate-Distortion & VAEs, Stochastic Dynamics and Statistical Mechanics, Conclusion, Differential and Information Geometry
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

## Entity: quant-interview-roadmap
- Title: Дорожная Карта Подготовки Quant Researcher / Trader
- Category: finance
- Language: ru
- Key Concepts: 2. Интерактивные Задачники и Платформы, Paul Wilmott — *Frequently Asked Questions in Quantitative Finance, Раздел 4. Полная Книжная Полка и Библиотека Ресурсов (Quant Library & Media), Optiver Mental Math Trainer:, Xinfeng Zhou — *A Practical Guide To Quantitative Finance Interviews* ("Зеленая Книга"), QuantNet (`quantnet.com`):, Видеокурс по Алготрейдингу (osa.net — Лекции 1–3):, 3. Видеокурсы и Научно-Образовательные Лекции, Обработка временных рядов в `pandas` & `numpy`:, Emanuel Derman — *My Life as a Quant: Reflections on Physics and Finance, Курс МФТИ — *«Математические модели и численные методы в финансах»* (Михаил Андреев):, Логические головоломки и Brainteasers:, Сборник 1000+ Задач с Реальных Собеседований (`yk4r2.github.io`):, 3.1 Ключевые понятия, 4. Статьи по Маркет-Микроструктуре и Трейдингу

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
- Key Concepts: Conclusion, Architecture Mechanics: Attention and Dimensionality, Random Matrix Theory and Spectral Dynamics, [[attention-mechanisms|Attention]] Mechanisms: Linear [[attention-mechanisms|Attention]]
- References: attention-mechanisms, math/spectral-theory-operators

## Entity: deepseek-v3-mla-compression
- Title: DeepSeek-V3 Architecture: MLA & Deep-Compression
- Category: language-models
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, DeepSeek-V3 Architecture: MLA & Deep-Compression, Conclusion
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
- Key Concepts: Mixture of Experts: Routing Math, Optimal Transport and Wasserstein Metrics, Stochastic Dynamics and Statistical Mechanics, Conclusion
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
- Key Concepts: Reasoning Models: PRM vs. ORM, Stochastic Dynamics and Statistical Mechanics, Conclusion
- References: stochastic-differential-equations

## Entity: speculative-decoding-medusa
- Title: Speculative Decoding: Medusa vs. EAGLE
- Category: language-models
- Language: en
- Key Concepts: Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality, Stochastic Dynamics and Statistical Mechanics, Conclusion, Speculative Decoding: Medusa vs. EAGLE
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
- Key Concepts: [[quantization]]: Information Loss in PTQ, Optimal Transport and Wasserstein Metrics, Stochastic Dynamics and Statistical Mechanics, Conclusion
- References: quantization, stochastic-differential-equations

## Entity: algebraic-geometry-slt
- Title: Algebraic Geometry in Singular Learning Theory
- Category: math
- Language: en
- Key Concepts: Algebraic Topology, Sheaves, and Category Theory, Random Matrix Theory and Spectral Dynamics, Conclusion, Algebraic Geometry in Singular Learning Theory
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
- Key Concepts: Random Matrix Theory and Spectral Dynamics, Symplectic Geometry and Hamiltonian Mechanics, Conclusion, Functional Analysis: C*-algebras
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
- Key Concepts: Conclusion, Optimal Transport and Wasserstein Metrics, Differential and Information Geometry, Optimal Transport: Gromov-Wasserstein Distance
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
- Key Concepts: Conclusion, Random Matrix Theory and Spectral Dynamics, Random Matrix Theory: Marchenko-Pastur Law
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
- Key Concepts: Stochastic Calculus on Manifolds, Stochastic Dynamics and Statistical Mechanics, Conclusion, Differential and Information Geometry
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
- Key Concepts: Fluid Dynamics: Navier-Stokes Existence, Random Matrix Theory and Spectral Dynamics, Conclusion, Differential and Information Geometry
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
- Key Concepts: Quantum Field Theory on Curved Spacetime, Quantum Field Theory and Renormalization Group, Conclusion, Differential and Information Geometry
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
- Key Concepts: Algebraic Topology, Sheaves, and Category Theory, String Theory: Calabi-Yau Manifolds, Conclusion, Differential and Information Geometry
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
- Key Concepts: Symplectic Geometry and Hamiltonian Mechanics, Quantum Field Theory and Renormalization Group, Conclusion, Supersymmetry (SUSY): Formalism

## Entity: yang-mills-mass-gap
- Title: Yang-Mills Mass Gap
- Category: physics
- Language: en
- Key Concepts: Yang-Mills Mass Gap

## Entity: hyperbolic-vol-geometry
- Title: Correlation Is a Hyperbolic Distance
- Category: research
- Language: en
- Key Concepts: Numerical:, Methodology, Theoretical:, Open Questions, References, Objective, Tools:, Context, Current Findings, Insights for AI
- References: finance/sabr-model, heston-model, math/differential-geometry

## Entity: research/mla-financial-reasoning
- Title: Impact of MLA Compression on Financial Time-Series Reasoning
- Category: research
- Language: en
- Key Concepts: Metric, Methodology, Open Questions, References, Objective, Context, Current Findings, Models, Dataset, Insights for AI
- References: attention-mechanisms, deepseek-v3-mla-compression, kv-cache-compression, llm-financial-analysis, quantization, rag, tool-use

## Entity: levy-structured-products
- Title: Lévy Processes and Stochastic-Volatility Models for Structured-Product Pricing
- Category: research
- Language: en
- Key Concepts: Methodology, Open Questions, Current Findings, References, Calibration:, Objective, Tools:, Context, Pricing:, Simulation:, Insights for AI
- References: finance/levy-processes

## Entity: student-t-hmm-bond-regimes
- Title: Student-t HMM for Bank Bond Portfolio Regimes
- Category: research
- Language: en
- Key Concepts: Model:, Methodology, Open Questions, Data:, References, Validation:, Objective, Tools:, Context, Current Findings, Insights for AI
- References: finance/value-at-risk, hidden-markov-models

## Entity: research/quantum-risk-management
- Title: Квантовые алгоритмы в риск-менеджменте
- Category: research
- Language: ru
- Key Concepts: Методология, Контекст, Инсайты для ИИ, Результаты, Цель, Ссылки, Открытые вопросы
- References: quantum-computing-vqe, quantum-machine-learning-kernels

## Entity: copula-models
- Title: Копула-модели
- Category: Модели ценообразования
- Language: ru
- Key Concepts: Ограничения и расширения, Пар-трейдинг, Ценообразование кредитных корзин (CDO, CLN), Практическое применение, Хвостовые коэффициенты зависимости по типам копул, Копула-модели, Хвостовая зависимость t-копулы, Обзор и предпосылки, Хвостовые коэффициенты зависимости, Стресс-тестирование, Таблица параметров, Расширения:, Ограничения:, Копула, Vine-копулы (R-vine, C-vine)
- References: brownian-motion, cox-process, finance/monte-carlo-method, finance/value-at-risk, finance/xva
- Backlinks: cornish-fisher-cvar, cox-process, cs01, cva-wrong-way-risk, finance/adversarial-stress-testing, finance/black-swan-scenarios, finance/cdo-tranches, finance/coherent-risk-measures, finance/cointegration, finance/credit-derivatives-cds, finance/credit-migration, finance/credit-risk-models, finance/dispersion-trading, finance/isda-simm, finance/multivariate-hmm, finance/quasi-monte-carlo, finance/securitization, finance/stylized-facts-returns, finance/swaps, finance/value-at-risk, finance/xva, generative-scenario-models, gnn-credit-risk, graph-neural-networks, survival-risk-prediction, vine-copulas

