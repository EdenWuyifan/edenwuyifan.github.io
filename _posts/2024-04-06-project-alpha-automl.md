---
layout: default
title: "Alpha-AutoML"
window_title: "Alpha-AutoML — reproducible pipeline search"
description: An AutoML system for finding reproducible end-to-end machine-learning pipelines.
tags: projects
---

<article class="research-case">
  <p class="case-eyebrow">AutoML · Reinforcement learning · Reproducible pipelines</p>
  <h1>Alpha-AutoML</h1>
  <p class="case-deck">Alpha-AutoML searches for end-to-end machine-learning pipelines that read and preprocess data, select models, and train them across multiple application domains.</p>

  <div class="case-actions">
    <a href="https://github.com/VIDA-NYU/alpha-automl">View on GitHub</a>
    <a href="https://alpha-automl.readthedocs.io/">Documentation</a>
    <a href="https://pypi.org/project/alpha-automl/0.2.0/">PyPI package</a>
    <a href="/me/#projects">All projects</a>
  </div>

  <div class="case-facts">
    <div><span>Focus</span><strong>Automated pipeline search</strong></div>
    <div><span>Context</span><strong>NYU · D3M</strong></div>
    <div><span>Availability</span><strong>Open source</strong></div>
  </div>

  <figure id="system-figure" class="case-media case-media-contain">
    <img src="/assets/img/projects/alpha-automl/pipeline-comparison.png" alt="Alpha-AutoML pipeline comparison interface showing primitives, model scores, and pipeline graphs">
    <figcaption>Pipeline-comparison views help users relate primitive choices, model performance, and end-to-end workflow structure.</figcaption>
  </figure>

  <h2>Adaptive pipeline discovery</h2>
  <p>Alpha-AutoML uses deep reinforcement learning to search over model and preprocessing choices. Incremental learning allows the system to adapt its search behavior across different problem types and data modalities.</p>

  <h2>From data to complete pipelines</h2>
  <p>Rather than selecting only an estimator, the system searches over full workflows: loading data, preprocessing features, selecting useful representations, fitting a model, and producing predictions. The component-based design draws from the Python ecosystem and can incorporate new primitives as they become available.</p>

  <h2>Designed for reproducible work</h2>
  <ul>
    <li>Builds complete pipelines rather than recommending isolated models.</li>
    <li>Uses the broader Python machine-learning ecosystem as its component library.</li>
    <li>Supports collaborative experimentation and repeatable model development.</li>
    <li>Ships as a Python package and through prebuilt Docker environments.</li>
  </ul>

  <div class="case-callout">The project was developed as part of New York University’s implementation of the DARPA Data-Driven Discovery of Models program.</div>

  <h2>Packaging and deployment</h2>
  <p>Alpha-AutoML is distributed through PyPI and as prebuilt Docker images with Jupyter. The repository also includes Kubernetes resources for shared JupyterHub deployments, making it possible to move from local experiments to collaborative infrastructure.</p>

  <div class="case-code"><code>pip install alpha-automl</code><span>Python package for local pipeline search</span></div>
</article>
