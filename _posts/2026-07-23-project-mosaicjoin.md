---
layout: default
title: "MosaicJoin"
window_title: "MosaicJoin — semantic join discovery"
description: Compact semantic sketches for scalable value-level join discovery.
tags: projects
---

<article class="research-case">
  <p class="case-eyebrow">Data discovery · Semantic retrieval · Research system</p>
  <h1>MosaicJoin: Compact Semantic Sketches for Value-Level Join Discovery</h1>
  <p class="case-deck">MosaicJoin represents columns with small but expressive semantic sketches, making value-level join discovery faster without requiring model training or fine-tuning.</p>

  <div class="case-actions">
    <a href="/assets/file/research/MosaicJoin-PVLDB-2026.pdf">Read the paper</a>
    <a href="https://github.com/VIDA-NYU/MosaicJoin">View on GitHub</a>
    <a href="/me/#publications">All publications</a>
  </div>

  <div class="case-facts">
    <div><span>Venue</span><strong>PVLDB 2026</strong></div>
    <div><span>Role</span><strong>Second author</strong></div>
    <div><span>Status</span><strong>Accepted</strong></div>
  </div>

  <figure id="system-figure" class="case-media">
    <img src="/assets/img/projects/mosaicjoin/mosaicjoin-pipeline.jpg" alt="MosaicJoin offline sketch construction and online query-processing pipeline">
    <figcaption>MosaicJoin builds compact sketches offline and compares query values against those sketches during retrieval.</figcaption>
  </figure>

  <h2>The problem</h2>
  <p>Value-level join discovery compares the contents of columns rather than relying only on names or schemas. This can uncover semantically related data, but direct comparisons become expensive when query columns and data-lake columns contain many values.</p>

  <h2>Compact semantic sketches</h2>
  <p>MosaicJoin embeds the values in each data-lake column, then selects a fixed number of representatives with a farthest-first k-center procedure. The result is a semantic sketch that covers the column’s embedding space while preserving rare but join-critical values.</p>

  <div class="case-process" aria-label="MosaicJoin processing stages">
    <div><span>01</span><strong>Embed</strong><p>Represent individual column values in a shared semantic space.</p></div>
    <div><span>02</span><strong>Sketch</strong><p>Select k representatives that cover each data-lake column.</p></div>
    <div><span>03</span><strong>Retrieve</strong><p>Rank candidates with a Chamfer-style value-level similarity score.</p></div>
  </div>

  <h2>Efficient online search</h2>
  <p>At query time, MosaicJoin can subsample large query columns and score each candidate sketch at a cost bounded by sketch size rather than full column cardinality. The repository supports multiple embedding models, sketch-selection methods, Chamfer variants, and retrieval metrics for reproducing the evaluation.</p>

  <div class="case-callout">In the paper’s experiments, MosaicJoin is up to <strong>66× faster</strong> than other value-level methods and scales to queries with 57,000 values against data-lake columns containing one million values.</div>

  <h2>Why it matters</h2>
  <p>The approach makes semantic join discovery practical at scales where exhaustive value comparison is prohibitive, while remaining training-free and adaptable to heterogeneous data. The evaluation spans AutoFJ, Freyja, WT, and WDC-augmented search spaces and reports HITS, precision, recall, NDCG, and MRR.</p>
</article>
