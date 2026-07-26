---
layout: default
title: "Magneto"
window_title: "Magneto — efficient schema matching"
description: A cost-aware schema-matching architecture combining small and large language models.
tags: projects
---

<article class="research-case">
  <p class="case-eyebrow">Schema matching · Language models · Data integration</p>
  <h1>Magneto: Combining Small and Large Language Models for Schema Matching</h1>
  <p class="case-deck">Magneto combines efficient retrieval with selective language-model reranking to improve schema-matching accuracy without paying the cost of applying a large model to every candidate.</p>

  <div class="case-actions">
    <a href="https://doi.org/10.14778/3742728.3742757">Read the paper</a>
    <a href="https://github.com/VIDA-NYU/magneto-matcher">View on GitHub</a>
    <a href="/me/#publications">All publications</a>
  </div>

  <div class="case-facts">
    <div><span>Venue</span><strong>PVLDB 2025</strong></div>
    <div><span>Role</span><strong>Co-author</strong></div>
    <div><span>Availability</span><strong>Open source</strong></div>
  </div>

  <h2>The matching bottleneck</h2>
  <p>Schema matching requires finding semantically equivalent attributes across datasets. Large language models can reason about ambiguous candidates, but applying them exhaustively is expensive and slow.</p>

  <h2>A staged architecture</h2>
  <div class="case-process" aria-label="Magneto processing stages">
    <div><span>01</span><strong>Encode</strong><p>Represent schema headers and values with an efficient pretrained model.</p></div>
    <div><span>02</span><strong>Retrieve</strong><p>Reduce the full search space to a compact top-k candidate set.</p></div>
    <div><span>03</span><strong>Rerank</strong><p>Use an LLM only where deeper semantic reasoning is useful.</p></div>
  </div>

  <div class="case-callout">Magneto treats model choice as a systems problem: use efficient models broadly, then reserve expensive reasoning for the candidates where it adds the most value.</div>

  <h2>Flexible retrieval and reranking</h2>
  <p>The implementation supports several pretrained retrievers, including MPNet, RoBERTa, E5, Arctic, and MiniLM. An optional fine-tuning path generates synthetic matches and adapts the retriever to a target domain. The reranking stage can use GPT-4o mini or Llama 3.3 70B.</p>

  <h2>Reproducible benchmarks</h2>
  <p>The repository includes experiment drivers for the Genomic Data Commons and Valentine schema-matching benchmarks, ablation studies, and top-k retrieval metrics. A domain-adapted GDC retriever is also available through Hugging Face, allowing the published pipeline to be used without rebuilding the model locally.</p>

  <div class="case-code"><code>vida-nyu/magneto-schema-retriever-gdc</code><span>Fine-tuned retriever on Hugging Face</span></div>
</article>
