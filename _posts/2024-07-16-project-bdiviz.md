---
layout: default
title: "BDIViz"
tags: projects
---

# BDIViz: An Interactive Visualization System for Biomedical Schema Matching with LLM-Powered Validation

[![read-the-docs](https://img.shields.io/badge/User_Manual-Read_the_Docs-blue?style=flat&logo=read-the-docs)](https://vida-nyu.github.io/bdi-viz-manual/)
[![paper-arxiv](https://img.shields.io/badge/Paper-IEEE_VIS_2025-brown?style=flat&logo=arxiv)](https://arxiv.org/abs/2507.16117)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github&logoColor=white)](https://github.com/VIDA-NYU/bdi-viz)

[![docker-amd64-portkey](https://img.shields.io/badge/docker-amd64_gemini-lightblue?style=flat&logo=docker)](https://hub.docker.com/layers/edenwu/bdi-viz-react/amd64/images/sha256-be8167ca3bb406e0d704a9805cb990e5cde04fd929ac23c51e13e5aed6c6d901)
[![docker-arm64-portkey](https://img.shields.io/badge/docker-arm64_gemini-lightblue?style=flat&logo=docker)](https://hub.docker.com/layers/edenwu/bdi-viz-react/arm64/images/sha256-dfedf5a2c525182c65e3b30b31c0fe2e986a98cb9b17d1c9c876479bfee39800)

## 📑 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Docker](#docker)
- [Demo](#demo)
  - [Video Demo](#video-demo)
  - [Live Demo](#live-demo)
- [Documentation & User Manual](#documentation--user-manual)
- [Publication](#publication)
- [Releases & New Features](#releases--new-features)
  - [v0.0.3 - MITRE ARPA-H Release (Latest)](#v003---mitre-arpa-h-release-latest)
  - [v0.0.2 - CRA MITRE Release](#v002---cra-mitre-release)
  - [v0.0.1 - VIS 2025](#v001---vis-2025)
- [Technical Details](#technical-details)

---

## Introduction

**BDIViz** is an interactive web-based visualization tool developed as part of the **ARPA-H ASKEM/BDF project** to support schema matching and value mapping tasks in biomedical data integration. It helps researchers align their raw datasets with standardized formats such as the Genomic Data Commons (GDC) and Proteomic Data Commons (PDC).

**BDIViz** is a visualization-driven, expert-in-the-loop tool designed to simplify and improve schema matching and value mapping in biomedical data integration. It provides users with a rich visual interface—including heatmaps, explanations, and value comparisons—to streamline the process of aligning raw biomedical datasets with standardized data schemas.

**BDIViz** is model agnostic, meaning it can be used with any schema matching model. It is designed to work with the [BDI-Kit](https://github.com/VIDA-NYU/bdi-kit) module, which is a Python library that provides a set of tools for schema matching and value mapping tasks. The BDI-Kit module includes a variety of schema matching algorithms, including supervised and unsupervised methods, as well as tools for data preprocessing and feature extraction.

**Open Source** - BDIViz is MIT Licensed and available on [GitHub](https://github.com/VIDA-NYU/bdi-viz).

## Features

BDIViz is designed to be intuitive, powerful, and research-ready. Explore the key features that make BDIViz an essential tool for biomedical data integration:

- 🔍 **Interactive Heatmap**: Visualize schema matching candidates across all columns using an intuitive heatmap interface. Color-coded cues help quickly identify strong and weak matches.
- 📊 **Value Comparison**: Easily compare unique values between source and target columns using fuzzy matching and histograms to validate semantic alignment.
- 🤖 **LLM Agent Explanations**: Get contextual explanations for candidate matches powered by large language models. Understand the rationale behind every recommendation.
- ⏪ **Timeline & Undo/Redo**: Track every decision with a timeline view and easily reverse or reapply actions using undo/redo support.
- 📤 **Export & Integration**: Export your final mappings as CSV or JSON to use in downstream tools, or integrate with other pipelines such as Beaker or BDIKit.
- 🎯 **Control Panel**: Adjust similarity threshold and navigate source columns with an intuitive control interface.
- 🧬 **Built for Biomedicine**: Tailored for biomedical researchers, BDIViz supports common data commons like GDC and PDC, and was co-designed with domain experts through the ARPA-H ASKEM project.

## Getting Started

### Installation

First, install the required dependencies:

```bash
npm i .
```

### Running Locally

To run locally with Gemini-2.5-flash:

```bash
npm run build && npm run start
```

To run locally with GPT-4.1-mini:

```bash
npm run build && LLM_PROVIDER=openai npm run start
```

### Docker

Pre-built Docker images are available for both AMD64 and ARM64 architectures. Pull and run the container:

```bash
docker pull edenwu/bdi-viz-react:amd64
# or
docker pull edenwu/bdi-viz-react:arm64
```

## Demo

### Video Demo

[![BDIViz Demo](https://img.youtube.com/vi/1eAbDicO0oXIbbVg56m3H8xdNDDsBGBLI/0.jpg)](https://drive.google.com/file/d/1RY3XjRmLIkBNjcZWkUZhG3vA-ZvPc6Ug/view?usp=drive_link)

### Live Demo

Try BDIViz online: [https://bdiviz.users.hsrn.nyu.edu/dashboard/](https://bdiviz.users.hsrn.nyu.edu/dashboard/)

## Documentation & User Manual

Complete user manual with detailed guides, tutorials, and API documentation: [https://vida-nyu.github.io/bdi-viz-manual/](https://vida-nyu.github.io/bdi-viz-manual/)

The user manual includes:
- Getting started guide
- Feature walkthroughs
- Best practices for schema matching
- Integration examples
- Troubleshooting tips

## Publication

**BDIViz: An Interactive Visualization System for Biomedical Schema Matching with LLM-Powered Validation**  
*IEEE VIS 2025*  
[![arXiv](https://img.shields.io/badge/arXiv-2507.16117-b31b1b.svg)](https://arxiv.org/abs/2507.16117)

## Releases & New Features

### v0.0.3 - MITRE ARPA-H Release (Latest)

**New Features & Improvements:**

- **Session Management**: Users can now create and switch between multiple sessions within the web application, enabling better task organization for different schema-matching or value-mapping projects.
- **Interactive Filtering**: Enhanced filtering by allowing direct interaction with source and target axes. Users can now filter by categories and specific nodes for more precise exploration.
- **Canvas Interaction**: Added the ability to click on an empty area of the heatmap canvas to create new candidate nodes between selected source-target attributes.
- **Collaborative Comments**: Users can now add and view comments on individual nodes, supporting shared curation and discussion between collaborators.
- **Agent Streaming and API Enhancements**: 
  - Added a new `/api/agent/explore` GET endpoint that streams agent updates using Server-Sent Events (SSE), providing real-time feedback for thoughts, tool calls, and results.
  - Implemented event-streaming logic with a queue and threading system to handle agent events efficiently, normalize payloads for SSE, and ensure backward compatibility with older agent response formats.
- **Bug Fixes & Stability**: Various fixes and optimizations across the frontend and backend to improve reliability, responsiveness, and performance.

[View Release on GitHub](https://github.com/VIDA-NYU/bdi-viz/releases/tag/v0.0.3)

### v0.0.2 - CRA MITRE Release

**Feedbacks Addressed:**

- Provide a global explanation in the interface for the criteria used to automatically accept attributes (easy matches), potentially through hover tooltips.
- Restructure the attribute dropdown menu to better group and differentiate matched, selected, and unmatched attributes.
- Explore ways to provide more detailed information alongside the heat map visualization, such as a detailed view or additional labels.
- Add labels or information tags to the drag-and-drop area to indicate the acceptable file types and formats.
- Retouch UpSet Plot.

[View Release on GitHub](https://github.com/VIDA-NYU/bdi-viz/releases/tag/v0.0.2)

### v0.0.1 - VIS 2025

Initial release for IEEE VIS 2025 publication, featuring core functionality including:

- Schema matching with multiple algorithms
- LLM-powered validation and explanations
- Interactive heatmap visualization
- Value comparison tables
- Export capabilities

[View Release on GitHub](https://github.com/VIDA-NYU/bdi-viz/releases/tag/v0.0.1)

**View all releases**: [https://github.com/VIDA-NYU/bdi-viz/releases](https://github.com/VIDA-NYU/bdi-viz/releases)

## Technical Details

BDIViz combines multiple schema matching methods with LLM-based validation to improve biomedical schema matching accuracy. The system employs an ensemble approach that:

- Combines multiple matching algorithms for robust results
- Uses LLM-based validation to reduce false positives
- Provides interactive visualizations for expert curation
- Enables efficient workflow through coordinated views and heatmaps

The system is designed to be method-agnostic, allowing integration with various schema matching algorithms and adaptation to application-specific needs.

