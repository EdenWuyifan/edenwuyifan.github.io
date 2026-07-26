---
layout: default
title: "UrbanTrace"
window_title: "UrbanTrace — spatial data workflows"
description: A visual, LLM-assisted environment for discovering, integrating, and analyzing urban spatial data.
tags: projects
---

<article class="research-case">
  <p class="case-eyebrow">Spatial data · Visual workflows · LLM assistance</p>
  <h1>UrbanTrace: LLM-Assisted Discovery and Integration of Spatial Data</h1>
  <p class="case-deck">UrbanTrace is a node-based environment for building transparent spatial data workflows—from finding relevant urban datasets to combining and analyzing them on a map.</p>

  <div class="case-actions">
    <a href="https://github.com/VIDA-NYU/urbanTrace">View on GitHub</a>
    <a href="/me/#projects">All projects</a>
  </div>

  <div class="case-facts">
    <div><span>Focus</span><strong>Urban spatial analysis</strong></div>
    <div><span>Role</span><strong>Second author</strong></div>
    <div><span>Availability</span><strong>Open-source prototype</strong></div>
  </div>

  <figure id="system-figure" class="case-media case-media-wide">
    <img src="/assets/img/projects/urbantrace/urbantrace-workspace.png" alt="UrbanTrace interface with a data library, node-based spatial workflow, map previews, tools, and integration topology">
    <figcaption>The UrbanTrace workspace combines a searchable data library, executable spatial nodes, map previews, and an integration-topology view.</figcaption>
  </figure>

  <h2>From question to spatial workflow</h2>
  <p>Urban analysis often requires discovering datasets across different portals, understanding unfamiliar schemas, and chaining spatial operations. UrbanTrace brings those steps into one visual canvas where intermediate data and operations remain explicit.</p>

  <h2>A spatial analysis canvas</h2>
  <ul>
    <li>A searchable data library exposes GeoJSON datasets and their metadata.</li>
    <li>React Flow provides an infinite canvas for arranging sources and operations.</li>
    <li>Deck.GL mini-maps show choropleth and geometry previews directly inside each node.</li>
    <li>Resizable operation nodes execute Buffer, Intersection, Join, H3 Union, and H3 Intersect workflows.</li>
    <li>An integration-topology view summarizes how sources contribute to derived outputs.</li>
  </ul>

  <h2>Live spatial computation</h2>
  <p>The FastAPI backend converts geometries to H3 cells for deterministic union and intersection operations. Results can be viewed as flat density maps or extruded 3D surfaces, with contextual legends calculated from overlap counts. Processing overlays and node-level results keep execution feedback close to the operation that produced it.</p>

  <h2>Integration Copilot</h2>
  <p>The “Ask AI” assistant uses dataset metadata and geometry context to recommend zoning and aggregation operators. Grid operations stay deterministic in the interface, keeping the model in an advisory role while the analytical steps remain visible and reproducible.</p>

  <div class="case-callout">UrbanTrace connects two continuing themes in my work: helping people discover and integrate heterogeneous data, and making computational workflows easier to understand.</div>

  <p class="case-tech-line">React · Vite · React Flow · Deck.GL · H3 · FastAPI · GeoJSON</p>
</article>
