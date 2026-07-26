---
layout: default
title: "AgentProvenance"
window_title: "AgentProvenance — AgentTrails"
description: A visual analytics system for inspecting, comparing, and reusing agentic task executions.
tags: projects
---

<article class="research-case">
  <p class="case-eyebrow">Agent provenance · Visual analytics · Research system</p>
  <h1>AgentProvenance / AgentTrails</h1>
  <p class="case-deck">AgentTrails turns raw agent trajectories into interactive provenance graphs, helping people understand what an agent did, compare alternative executions, and extract patterns worth reusing.</p>

  <div class="case-actions">
    <a href="/assets/file/research/AgentTrails-DASHSys-2026.pdf">Read the paper</a>
    <a href="https://github.com/EdenWuyifan/AgentProvenance">View on GitHub</a>
    <a href="/me/#publications">All publications</a>
  </div>

  <div class="case-facts">
    <div><span>Venue</span><strong>VLDB DASHSys 2026</strong></div>
    <div><span>Role</span><strong>Lead and first author</strong></div>
    <div><span>Status</span><strong>Accepted</strong></div>
  </div>

  <figure id="system-figure" class="case-media">
    <img src="/assets/img/projects/agentprovenance/agenttrails-provenance-pipeline.png" alt="AgentTrails pipeline from raw traces to chronological workflows, provenance graphs, and a joined provenance graph">
    <figcaption>AgentTrails reconstructs provenance from raw traces, then aligns recurring activities across executions.</figcaption>
  </figure>

  <h2>Why provenance?</h2>
  <p>Agentic systems can complete complex tasks, but their execution histories are often long, fragmented, and difficult to audit. A final answer alone does not explain which tools were used, how intermediate artifacts were transformed, or why two runs reached different outcomes. Provenance makes that process visible.</p>

  <div class="case-callout"><strong>My current research direction:</strong> designing provenance representations and visual interfaces that make agent behavior easier to inspect, trust, reproduce, and reuse.</div>

  <h2>How AgentTrails works</h2>
  <ul>
    <li>Transforms tool calls into actions and their inputs and outputs into artifacts.</li>
    <li>Recovers producer-consumer dependencies using trace evidence such as artifact identifiers, paths, filenames, URLs, and reused semantic values.</li>
    <li>Joins multiple executions into a quotient graph for structural comparison.</li>
    <li>Uses activity capsules to align related steps while preserving divergent branches.</li>
    <li>Supports pattern extraction, downstream analysis, and reusable skill abstraction.</li>
  </ul>

  <h2>Coordinated visual analysis</h2>
  <p>The overview uses an UpSet-style matrix to compare tool usage across selected traces. From there, users can inspect a single reconstructed graph or move to the joined graph, where node size communicates activity support, edge width shows dependency support, and color preserves trace membership. Filtering helps separate dominant workflows from anomalies and low-support behavior.</p>

  <h2>React system and provenance backend</h2>
  <p>The current system uses a React frontend for trace input, comparison, and interactive provenance visualization. A separate Python API backend owns PROV graph construction, evidence-based candidate edges, graph caching, and optional LLM refinement and chat.</p>

  <p>The compact graph representation keeps activities, entities, and dependency evidence distinct. Raw calls are sanitized before refinement, and suggested relationships remain auditable rather than being silently promoted to ground truth. The frontend and backend run as separate services, keeping visualization concerns independent from provenance reconstruction and model calls.</p>
</article>
