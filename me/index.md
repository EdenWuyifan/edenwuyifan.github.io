---
layout: me
title: me
window_title: Eden Wu — PhD researcher at TU Graz
description: PhD student at TU Graz connecting data visualization, provenance, and data integration, with applications in biomedical data.
hide_donate: true
---
<div class="research-profile">
  <nav class="profile-nav" aria-label="Profile sections">
    <a href="#research">Research</a>
    <a href="#publications">Publications</a>
    <a href="#projects">Projects</a>
    <a href="#experience">Experience</a>
    <a href="#personal">Personal</a>
  </nav>

  <header class="profile-hero">
    <div class="hero-copy">
      <p class="eyebrow"><span class="status-light" aria-hidden="true"></span> PhD Student · TU Graz · Visualization Design Lab</p>
      <h1>Yifan <span>(Eden)</span> Wu</h1>
      <p class="hero-thesis">I study how integration, visualization, and provenance can make complex data and AI workflows understandable and trustworthy.</p>
      <p class="hero-detail">I am a PhD student at <strong>TU Graz</strong>, advised by <a href="https://www.visdesignlab.net/team/lex/">Prof. Alexander Lex</a> in the <a href="https://www.visdesignlab.net/">Visualization Design Lab</a>. My research connects <strong>data visualization and visual analytics (VAST)</strong>, <strong>provenance</strong>, and <strong>data integration</strong>, with a particular interest in biomedical data. Previously, I worked with Prof. Juliana Freire at NYU VIDA on data discovery and integration.</p>
      <div class="hero-actions" aria-label="Contact and profile links">
        <a class="win-button primary" href="mailto:verkho404@gmail.com">Email me</a>
        <a class="win-button" href="https://scholar.google.com/citations?user=nDnuVOAAAAAJ&hl=en">Google Scholar</a>
        <a class="win-button" href="https://github.com/EdenWuyifan">GitHub</a>
        <a class="win-button" href="https://www.linkedin.com/in/eden-wu-9a2784192/">LinkedIn</a>
      </div>
      <p class="hero-meta">Graz, Austria · Institute of Human-Centred Computing · <a href="https://www.visdesignlab.net/team/wu/">VDL profile ↗</a><br>
        Email: <a href="mailto:verkho404@gmail.com">Personal</a> · <a href="mailto:wu@tugraz.at">TU Graz</a> · <a href="mailto:eden.wu@nyu.edu">NYU</a>
      </p>
    </div>
    <figure class="profile-portrait">
      <div class="portrait-frame">
        <img src="/assets/img/profile/Eden-2023-12-12-23.24.18.jpeg" alt="Eden Wu outdoors in a wooded landscape">
      </div>
      <figcaption>Researcher, engineer, and visual thinker.</figcaption>
    </figure>
  </header>

  <aside class="now-card" aria-label="Current update">
    <div class="now-label">NOW</div>
    <div>
      <strong>New research direction: provenance for agentic systems</strong>
      <p>AgentTrails, our visual analytics approach for inspecting and reusing agent executions, is accepted to VLDB DASHSys 2026.</p>
    </div>
    <span class="now-date">JUL 2026</span>
  </aside>

  <section id="research" class="profile-section">
    <div class="section-heading">
      <p class="section-index">01</p>
      <div>
        <h2>Research direction</h2>
        <p>From heterogeneous data to visual understanding and accountable computation, with LLMs supporting each layer rather than forming a separate research silo.</p>
      </div>
    </div>

    <div class="research-flow" aria-label="Research direction from data integration through visualization to provenance">
      <article>
        <span class="flow-number">A</span>
        <h3>Integration</h3>
        <p>Discover, align, and harmonize heterogeneous data. From heuristics to embedding-based approaches, then LLMs.</p>
        <span class="flow-tag">Data integration · Schema matching · Biomedical data</span>
      </article>
      <span class="flow-arrow" aria-hidden="true">›</span>
      <article>
        <span class="flow-number">B</span>
        <h3>Visualization</h3>
        <p>Build interactive views that help experts explore complex data and do decision-making. LLMs assist and coevolve with human experts.</p>
        <span class="flow-tag">Visual analytics (VAST) · Human–AI sensemaking</span>
      </article>
      <span class="flow-arrow" aria-hidden="true">›</span>
      <article>
        <span class="flow-number">C</span>
        <h3>Provenance</h3>
        <p>Capture the data, decisions, and dependencies behind system and agent workflows so they can be inspected, reproduced, and reused.</p>
        <span class="flow-tag">Provenance · Agentic systems · Reproducibility</span>
      </article>
    </div>
  </section>

  <section id="publications" class="profile-section">
    <div class="section-heading publication-heading">
      <div>
        <p class="section-index">02</p>
        <div>
          <h2>Publications</h2>
          <p>Peer-reviewed work and current manuscripts. Eden Wu is highlighted in each author list.</p>
        </div>
      </div>
      <a class="text-link" href="https://scholar.google.com/citations?user=nDnuVOAAAAAJ&hl=en">Scholar profile ↗</a>
    </div>

    <div class="publication-filters" aria-label="Filter publications by year">
      <button type="button" class="filter-button active" data-publication-filter="all" aria-pressed="true">All</button>
      <button type="button" class="filter-button" data-publication-filter="2026" aria-pressed="false">2026</button>
      <button type="button" class="filter-button" data-publication-filter="2025" aria-pressed="false">2025</button>
      <button type="button" class="filter-button" data-publication-filter="2024" aria-pressed="false">2024</button>
    </div>

    <div class="publication-list">
      {% for publication in site.data.publications %}
      <article class="publication-card{% if publication.featured %} featured{% endif %}" data-publication-year="{{ publication.year }}">
        <div class="publication-year">{{ publication.year }}</div>
        <div class="publication-body">
          <div class="publication-meta">
            <span class="publication-status">{{ publication.status }}</span>
            <span>{{ publication.venue }}</span>
          </div>
          <h3>{{ publication.title }}</h3>
          <p class="publication-authors">{{ publication.authors | replace: "Eden Wu", "<strong>Eden Wu</strong>" }}</p>
          <p class="publication-note">{{ publication.note }}</p>
          <div class="publication-links">
            {% for link in publication.links %}
            <a href="{{ link.url }}">{{ link.label }} ↗</a>
            {% endfor %}
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
  </section>

  <section id="projects" class="profile-section">
    <div class="section-heading">
      <p class="section-index">03</p>
      <div>
        <h2>Selected systems</h2>
        <p>Research ideas made testable through working software.</p>
      </div>
    </div>

    <div class="project-grid">
      <article class="project-card project-provenance">
        <div class="project-visual provenance-visual" aria-hidden="true">
          <span class="node action">A1</span><i></i><span class="node artifact">D1</span><i></i><span class="node action">A2</span>
          <b></b><em></em><strong></strong>
        </div>
        <p class="project-kicker">Provenance · Visual analytics · Lead author</p>
        <h3>AgentProvenance</h3>
        <p>The open-source prototype behind AgentTrails transforms agent traces into provenance graphs for inspection, comparison, and reuse.</p>
        <div class="project-links">
          <a href="/20260724/project-agentprovenance">Case study</a>
          <a href="/assets/file/research/AgentTrails-DASHSys-2026.pdf">Paper ↗</a>
          <a href="https://github.com/EdenWuyifan/AgentProvenance">GitHub ↗</a>
        </div>
      </article>

      <article class="project-card project-mosaic">
        <div class="project-visual mosaic-visual" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span>
        </div>
        <p class="project-kicker">Join discovery · Semantic sketches · Second author</p>
        <h3>MosaicJoin</h3>
        <p>Compact semantic sketches make value-level join discovery practical for large and heterogeneous columns.</p>
        <div class="project-links">
          <a href="/20260723/project-mosaicjoin">Case study</a>
          <a href="/assets/file/research/MosaicJoin-PVLDB-2026.pdf">Paper ↗</a>
          <a href="https://github.com/VIDA-NYU/MosaicJoin">GitHub ↗</a>
        </div>
      </article>

      <article class="project-card project-urbantrace">
        <div class="project-visual map-visual" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
          <i></i><i></i><i></i>
          <b></b><b></b><b></b>
        </div>
        <p class="project-kicker">Spatial data · LLM assistance · Second author</p>
        <h3>UrbanTrace</h3>
        <p>A visual, node-based environment for discovering, integrating, and analyzing urban spatial data.</p>
        <div class="project-links">
          <a href="/20260722/project-urbantrace">Case study</a>
          <a href="https://github.com/VIDA-NYU/urbanTrace">GitHub ↗</a>
        </div>
      </article>

      <article class="project-card project-bdiviz">
        <div class="project-visual" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <p class="project-kicker">Visual analytics · LLMs</p>
        <h3>BDIViz</h3>
        <p>Interactive schema matching and benchmarking for experts working with biomedical data.</p>
        <div class="project-links">
          <a href="/20240716/project-bdiviz">Case study</a>
          <a href="https://www.computer.org/csdl/journal/tg/2026/01/11299421/2cojjOAcRCo">Paper ↗</a>
          <a href="https://github.com/VIDA-NYU/bdi-viz">GitHub ↗</a>
        </div>
      </article>

      <article class="project-card project-magneto">
        <div class="project-visual pipeline-visual" aria-hidden="true">
          <span>SLM</span><i></i><span>LLM</span><i></i><span>✓</span>
        </div>
        <p class="project-kicker">Data integration · Language models</p>
        <h3>Magneto</h3>
        <p>A cost-aware retrieval and reranking architecture for accurate schema matching.</p>
        <div class="project-links">
          <a href="/20250728/project-magneto">Case study</a>
          <a href="https://doi.org/10.14778/3742728.3742757">Paper ↗</a>
          <a href="https://github.com/VIDA-NYU/magneto-matcher">GitHub ↗</a>
        </div>
      </article>

      <article class="project-card project-automl">
        <div class="project-visual tree-visual" aria-hidden="true">
          <span></span>
          <div><i></i><i></i><i></i></div>
          <div><b></b><b></b><b></b><b></b><b></b></div>
        </div>
        <p class="project-kicker">AutoML · Reinforcement learning</p>
        <h3>Alpha-AutoML</h3>
        <p>Pipeline search and reproducible model development across multiple data modalities.</p>
        <div class="project-links">
          <a href="/20240406/project-alpha-automl">Case study</a>
          <a href="https://github.com/VIDA-NYU/alpha-automl">GitHub ↗</a>
        </div>
      </article>
    </div>
  </section>

  <section id="experience" class="profile-section">
    <div class="section-heading">
      <p class="section-index">04</p>
      <div>
        <h2>Experience</h2>
        <p>A research path grounded in production engineering.</p>
      </div>
    </div>

    <div class="timeline">
      <article>
        <time>JUL 2026 — NOW</time>
        <div>
          <h3>PhD Student · TU Graz</h3>
          <p>Working with Prof. Alexander Lex in the Visualization Design Lab on provenance, reproducibility, and visual analytics for agentic systems.</p>
        </div>
      </article>
      <article>
        <time>2023 — JUN 2026</time>
        <div>
          <h3>Research Engineer · NYU VIDA</h3>
          <p>Worked with Prof. Juliana Freire on research systems spanning schema matching, visual analytics, data-lake question answering, and AutoML.</p>
        </div>
      </article>
      <article>
        <time>2024 — 2025</time>
        <div>
          <h3>Startup technical leadership</h3>
          <p>Led product and engineering work at RichCRM and Arkive; co-founded TagMe Network. Shipped AI-assisted and full-stack products from prototype to pilot.</p>
        </div>
      </article>
      <article>
        <time>2021 — 2023</time>
        <div>
          <h3>ICT Software Developer · Huawei</h3>
          <p>Built packet-core networking and high-availability container infrastructure in Go and C; received the Huawei Future Star Award.</p>
        </div>
      </article>
    </div>

    <div class="education-strip">
      <div>
        <span>M.S. Computer Science · 2024</span>
        <strong>NYU Tandon School of Engineering</strong>
      </div>
      <div>
        <span>B.S. Computer Science · 2021</span>
        <strong>NYU Shanghai</strong>
      </div>
    </div>
  </section>

  <section id="personal" class="profile-section personal-section">
    <div>
      <p class="section-index">05</p>
      <h2>Beyond the lab</h2>
      <p>I enjoy cooking, hiking, and camping—especially cooking while camping. I keep a small culinary archive here as a record of meals, experiments, and good times shared outdoors.</p>
      <a class="win-button" href="/20230101/other-cookings">Open culinary archive</a>
    </div>
    <div class="personal-photo">
      <img src="/assets/img/cookings/Eden 2023-12-12 23.28.15.jpeg" alt="A dish from Eden's culinary archive">
    </div>
  </section>

  <footer class="profile-footer">
    <p>Last updated July 2026 · Built with Jekyll, still happily running Windows 95.</p>
    <div class="footer-emails">
      <a href="mailto:verkho404@gmail.com">verkho404@gmail.com</a>
      <a href="mailto:wu@tugraz.at">wu@tugraz.at</a>
      <a href="mailto:eden.wu@nyu.edu">eden.wu@nyu.edu</a>
    </div>
  </footer>
</div>
