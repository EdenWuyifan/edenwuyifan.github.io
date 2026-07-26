---
layout: default
title: "BDIViz"
window_title: "BDIViz — biomedical schema matching"
description: An interactive visual analytics system for biomedical schema matching with LLM-powered validation.
tags: projects
---

<article class="research-case">
  <p class="case-eyebrow">Visual analytics · Biomedical data · Human–AI collaboration</p>
  <h1>BDIViz: Interactive Biomedical Schema Matching</h1>
  <p class="case-deck">BDIViz helps domain experts inspect, validate, and curate schema matches through coordinated visualizations and language-model explanations.</p>

  <div class="case-actions">
    <a href="https://www.computer.org/csdl/journal/tg/2026/01/11299421/2cojjOAcRCo">Read the TVCG paper</a>
    <a href="https://doi.org/10.1145/3788853.3801596">SIGMOD demo paper</a>
    <a href="https://github.com/VIDA-NYU/bdi-viz">View on GitHub</a>
    <a href="https://vida-nyu.github.io/bdi-viz-manual/">User manual</a>
    <a href="https://bdiviz.users.hsrn.nyu.edu/dashboard/">Live demo</a>
  </div>

  <div class="case-facts">
    <div><span>Publication</span><strong>IEEE TVCG 32(1), 2026</strong></div>
    <div><span>Role</span><strong>Lead and first author</strong></div>
    <div><span>Availability</span><strong>Open source</strong></div>
  </div>

  <figure id="system-figure" class="case-media case-media-wide">
    <img src="/assets/img/projects/bdiviz/bdiviz-dashboard.png" alt="BDIViz dashboard with a candidate-match heatmap, biomedical attribute details, value distributions, and an LLM validation panel">
    <figcaption>The BDIViz workspace coordinates candidate overview, attribute evidence, value comparison, and LLM-assisted validation.</figcaption>
  </figure>

  <h2>The problem</h2>
  <p>Biomedical data integration depends on aligning raw datasets with standardized schemas such as the Genomic Data Commons and Proteomic Data Commons. Automated matchers can generate candidates at scale, but experts still need to understand uncertain matches and correct model errors.</p>

  <h2>Expert-in-the-loop design</h2>
  <ul>
    <li>A coordinated heatmap provides an overview of candidate matches.</li>
    <li>Value comparisons expose evidence behind source and target attributes.</li>
    <li>LLM-generated explanations help experts assess ambiguous recommendations.</li>
    <li>A decision timeline supports review, undo, redo, and reproducible curation.</li>
    <li>Curated mappings can be exported for downstream integration workflows.</li>
  </ul>

  <figure class="case-media case-media-wide">
    <img src="/assets/img/projects/bdiviz/bdiviz-system-overview.png" alt="BDIViz system overview showing data import, matcher recommendations, visual exploration, LLM-assisted validation, and export">
    <figcaption>The end-to-end workflow keeps the expert in control from candidate generation through validation and export.</figcaption>
  </figure>

  <div class="case-callout">BDIViz is model-agnostic: matching methods propose candidates, while the visual interface keeps domain experts in control of the final decisions.</div>

  <a id="demo-video" class="case-video" href="https://drive.google.com/file/d/1RY3XjRmLIkBNjcZWkUZhG3vA-ZvPc6Ug/view?usp=drive_link" aria-label="Watch the BDIViz video demonstration">
    <figure class="case-media">
      <div class="case-video-frame">
        <img src="/assets/img/projects/bdiviz/bdiviz-demo.jpg" alt="BDIViz video frame illustrating the challenge of matching a source dataset to a schema with more than 700 attributes">
        <span aria-hidden="true">▶</span>
      </div>
      <figcaption>Watch the BDIViz research video: from the biomedical schema-matching challenge to an interactive expert workflow.</figcaption>
    </figure>
  </a>

  <h2>Evaluation with domain experts</h2>
  <p>The system design was grounded in formative interviews with biomedical researchers. Two case studies and a within-subject user study showed that the coordinated workflow improved matching accuracy while reducing cognitive load and curation time compared with baseline approaches.</p>

  <h2>From research prototype to reusable system</h2>
  <p>The project grew from the TVCG research system into a maintained open-source platform and a SIGMOD 2026 demonstration. The newer release adds matcher plug-ins, live benchmarking against evolving expert ground truth, session management, collaborative comments, interactive filtering, streaming agent feedback, Docker images, and a complete user manual.</p>

  <p class="case-citation">Wu E, Turakhia DG, Wu G, et al. <em>IEEE Transactions on Visualization and Computer Graphics.</em> 2026;32(1):1208-1218. DOI: <a href="https://doi.org/10.1109/TVCG.2025.3634843">10.1109/TVCG.2025.3634843</a>. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/41385430/">41385430</a>.</p>
</article>
