---
layout: me
title: me
---
# Yifan (Eden) Wu

:email: eden.wu@nyu.edu | yfw215@nyu.edu  
:telephone_receiver: +1 (646) 706-1025  
:house: Brooklyn, NY, USA  
:globe_with_meridians: [**LinkedIn**](https://www.linkedin.com/in/yifan-wu-9a2784192/) · [**GitHub**](https://github.com/EdenWuyifan)  
:clipboard: [**CV (PDF)**](/assets/file/Yifan_Wu_Resume_v3_w_pub.pdf)  

**Research Engineer, NYU Visualization Imaging and Data Analysis (VIDA) Center**  
**Research focus:** data integration, schema matching, AutoML, large language models for data systems, data visualization, biomedical visualization, and visual analysis.

![profile](/assets/img/profile/Eden-2023-12-12-23.25.35.jpeg)

## Table of Contents

- [ABOUT](#about)
- [RESEARCH INTERESTS](#research-interests)
- [POSITIONS](#positions)
  - [New York University, VIDA Center](#new-york-university-vida-center)
  - [Huawei Technologies](#huawei-technologies)
  - [Selected Startup Roles](#selected-startup-roles)
- [PUBLICATIONS](#publications)
- [SELECTED PROJECTS](#selected-projects)
- [EDUCATION](#education)

---

# ABOUT

I am a Research Engineer at New York University’s VIDA Center, where I work on human-in-the-loop systems for data integration, schema matching, and automated machine learning. My work combines LLMs, visual analytics, and reinforcement learning to build practical tools that help domain experts work with complex, heterogeneous data.  

Before NYU, I developed large-scale network software at Huawei, building core 5G packet networking components and high-availability container infrastructure. I also co-founded and led engineering for several startups (RichCRM, TagMe Network, Arkive), giving me experience shipping full-stack systems end-to-end, from research prototypes to production deployments.

# RESEARCH INTERESTS

- LLMs for data discovery, integration, and schema matching  
- Human-in-the-loop and interactive visualization systems  
- Automated machine learning (AutoML) and reinforcement learning for pipeline search  
- Data-centric ML for biomedical and scientific applications  

# POSITIONS

## New York University, VIDA Center
<p style="text-align:left;">
    <b>Research Engineer</b>, New York, NY
    <span style="float:right;">
        <i>Apr 2023 – Present</i>
    </span>
</p>

- Lead development of **BDIViz**, an LLM-powered visual analytics system for biomedical schema matching and data harmonization.  
- Develop data harmonization workflows using fine-tuned language models and a LangChain-based LLM agent, enabling interactive schema matching and data exploration.  
- Manage and maintain the **Alpha-AutoML** codebase, building pipelines for image classification (CLIP, ViT), time series forecasting (DeepAR, ARIMA), and semi-supervised learning with PPO and other reinforcement learning methods.  

## Huawei Technologies
<p style="text-align:left;">
    <b>ICT Software Developer</b>, Shanghai, China
    <span style="float:right;">
        <i>Jul 2021 – Jan 2023</i>
    </span>
</p>

- Developed packet core service functionalities for Huawei’s **5G Network Engine Router** in Golang and C, with 80%+ test coverage and very low critical bug rate.  
- Engineered disaster tolerance features for Kubernetes and Docker CaaS clusters, including a Hot Backup finite-state machine for rapid cluster recovery.  
- Maintained IP stack and IPSec VPN modules; received the **Huawei Future Star Award** for impact and performance.  

## Selected Startup Roles

- **CTO, RichCRM** (Jun 2024 – Jun 2025) — Led development of a MERN-stack CRM platform, integrating LangChain, DocuSign, and major cloud APIs. Helped secure \$50k pre-seed funding and placed 3rd in the 2nd Midwest Chinese Entrepreneurship Competition.  
- **Co-founder, TagMe Network** (May 2024 – Jul 2024) — Built a DePIN project using NFC and blockchain; implemented Solidity smart contracts (ERC-20, staking) and a full-stack Web3 dApp with wallet and token minting.  
- **CTO, Arkive** (Jul 2024 – Dec 2024) — Architected **Arkive 2.0** (Next.js, Firebase), integrating e-commerce (Shopify, Amazon, TradeDoubler) and Stripe payments; delivered MVP in two months and supported fundraising efforts.  

# PUBLICATIONS

- **BDIViz: An Interactive Visualization System for Biomedical Schema Matching with LLM-Powered Validation**  
  *IEEE VIS 2025.*  
  [![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github&logoColor=white)](https://github.com/VIDA-NYU/bdi-viz) [![arXiv](https://img.shields.io/badge/arXiv-2507.16117-b31b1b.svg)](https://arxiv.org/abs/2507.16117)  
  Authors: **Eden Wu**, Dishita G. Turakhia, Guande Wu, Christos Koutras, Sarah Keegan, Wenke Liu, Beata Szeitz, David Fenyo, Cláudio T. Silva, Juliana Freire.  
  <small>Biomedical data harmonization is essential for enabling exploratory analyses and meta-studies, but the process of schema matching - identifying semantic correspondences between elements of disparate datasets (schemas) - remains a labor-intensive and error-prone task. Even state-of-the-art automated methods often yield low accuracy when applied to biomedical schemas due to the large number of attributes and nuanced semantic differences between them. We present BDIViz, a novel visual analytics system designed to streamline the schema matching process for biomedical data. Through formative studies with domain experts, we identified key requirements for an effective solution and developed interactive visualization techniques that address both scalability challenges and semantic ambiguity. BDIViz employs an ensemble approach that combines multiple matching methods with LLM-based validation, summarizes matches through interactive heatmaps, and provides coordinated views that enable users to quickly compare attributes and their values. Our method-agnostic design allows the system to integrate various schema matching algorithms and adapt to application-specific needs. Through two biomedical case studies and a within-subject user study with domain experts, we demonstrate that BDIViz significantly improves matching accuracy while reducing cognitive load and curation time compared to baseline approaches.</small>  

- **Magneto: Combining Small and Large Language Models for Schema Matching**  
  *VLDB 2025.*  
  [![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github&logoColor=white)](https://github.com/VIDA-NYU/magneto-matcher) [![Paper](https://img.shields.io/badge/Paper-VLDB-blue)](https://dl.acm.org/doi/10.14778/3742728.3742757)  
  Authors: Yurong Liu, Eduardo Pena, Aecio Santos, **Eden Wu**, Juliana Freire.  
  <small>Recent advances in language models opened new opportunities to address complex schema matching tasks. Schema matching approaches have been proposed that demonstrate the usefulness of language models, but they have also uncovered important limitations: Small language models (SLMs) require training data (which can be both expensive and challenging to obtain), and large language models (LLMs) often incur high computational costs and must deal with constraints imposed by context windows. We present Magneto, a cost-effective and accurate solution for schema matching that combines the advantages of SLMs and LLMs to address their limitations. By structuring the schema matching pipeline in two phases, retrieval and reranking, Magneto can use computationally efficient SLM-based strategies to derive candidate matches which can then be reranked by LLMs, thus making it possible to reduce runtime without compromising matching accuracy. We propose a self-supervised approach to fine-tune SLMs which uses LLMs to generate syntactically diverse training data, and prompting strategies that are effective for reranking. We also introduce a new benchmark, developed in collaboration with domain experts, which includes real biomedical datasets and presents new challenges to schema matching methods. Through a detailed experimental evaluation, using both our new and existing benchmarks, we show that Magneto is scalable and attains high accuracy for datasets from different domains.</small>  

- **Large Language Models for Data Discovery and Integration: Challenges and Opportunities**  
  *IEEE Data Engineering Bulletin, 2025.*  
  [![PDF](https://img.shields.io/badge/PDF-Article-red)](http://sites.computer.org/debull/A25mar/p3.pdf)  
  Authors: Juliana Freire, Grace Fan, Benjamin Feuer, Christos Koutras, Yurong Liu, Eduardo Peña, Aécio S. R. Santos, Cláudio T. Silva, **Eden Wu**.  
  <small>The exponential growth of data across diverse sources—from the web and scientific repositories to enterprise systems—has amplified the need for effective data discovery and integration methods. While data integration has been extensively studied for decades, traditional approaches face limitations in generalization and scalability, often requiring a time-consuming and error-prone process that demands manual effort. Dataset discovery, though a more recent research direction, encounters similar challenges. A fundamental issue across both domains is semantic heterogeneity and ambiguity, as existing methods frequently struggle to understand the underlying meaning of data, limiting their effectiveness across diverse applications. Large Language Models (LLMs) have emerged as a promising solution to enhance both data integration and discovery tasks. These models encode vast amounts of knowledge from ...</small>  

- **Enhancing Biomedical Schema Matching with LLM-Based Training Data Generation**  
  *NeurIPS 2024, Third Table Representation Learning Workshop.*  
  [![Poster](https://img.shields.io/badge/Poster-NeurIPS%202024-brightgreen)](https://neurips.cc/virtual/2024/103152)  
  Authors: Yurong Liu, Aécio Santos, Eduardo H. M. Pena, Roque Lopez, **Eden Wu**, Juliana Freire.  
  <small>Data harmonization is the practice of combining datasets in a way that ensures that the information is compatible and can be accurately compared. In this context, schema matching is an essential task that allows for establishing correspondences between attributes coming from different data sources. In this paper, we show that existing schema-matching methods often struggle to adequately capture the semantics necessary for aligning complex schemas, particularly those in biomedicine domains, which can result in less effective data integration. To address this problem, we introduce an approach for schema matching that leverages LLMs for (1) generating semantically coherent training data pairs that can be used to train effective column embedding models using the contrastive learning framework and (2) refining final column match selections. This approach allows us to overcome the limitations posed by scarce in-domain and semantically diverse training data. Our approach demonstrates significant improvements over traditional methods, as validated by experiments with real-world biomedical datasets.</small>  

# SELECTED PROJECTS

- **BDIViz** (2024 – Present)  
  LLM-powered visual analytics system for biomedical schema matching and data harmonization, co-designed with biomedical experts at NYU Langone. Combines multiple matching methods with LLM-based validation and interactive visualizations for expert curation.  

- **Alpha-AutoML** (2023 – 2024)  
  AutoML framework using Monte Carlo Tree Search and reinforcement learning to optimize ML pipelines across modalities (vision, time series, semi-supervised learning). Containerized and maintained for scalable deployment at VIDA.  

- **RichCRM** (2024 – 2025)  
  CRM platform with integrated document signing, cloud provider APIs, and AI-assisted workflows. Led architecture, implementation, and team coordination from MVP to pilot deployment.  

# EDUCATION

| Period | Degree / Program |
| :-------------- | :-------------- |
| 2021-09 – Present | M.S. in Computer Science, **NYU Tandon School of Engineering**, New York, NY |
| 2017-09 – 2021-07 | B.S. in Computer Science (Minor in Interactive Media Art), **NYU Shanghai** |
| 2019-09 – 2020-06 | Visiting student, Computer Science (Minor in Game Design), **New York University**, New York, NY |
