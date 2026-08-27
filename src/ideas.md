---
title: Noise to Signal – Ideas
description: Ideas and lessons learned from real-world data, analytics, and AI engagements.
layout: base.njk
permalink: /ideas.html
current: ideas
---

<!-- Hero Section -->
<section class="screen article-hero" style="background-image: url('/img/6-twilight.jpg');">
  <div class="mod-fill" style="opacity: 0.2; background: linear-gradient(45deg, #7FB8FF, #E8C0ED);"></div>
  <div class="screen-mid">
    <article class="plot">
      <span style="font-size: 50px; line-height: 45px;" class="caps mod-frame text-white">Ideas</span>
      <br><br>
      <span class="text-white text-lg">Lessons learned from real-world data &amp; AI engagements</span>
    </article>
  </div>
</section>

<!-- Article List -->
<section class="article-body">
  <article class="idea-teaser">
    <h2><a href="/ideas/semantic-layers-in-production/">The 4 Questions to Ask Before Deploying Semantic Layers in Production</a></h2>
    <div class="article-meta caps">August 2026</div>
    <p>Semantic layers have come roaring back onto the scene as a critical ingredient for agentic analytics — yet mature, production deployments remain rare in the wild. Over the last year I've rolled out two different agentic analytics systems backed by semantic layers from two different vendors. This article distills those lessons into four questions you should ask of any solution design, comparing how dbt and Malloy/Credible answer each one.</p>
    <p><a class="read-more" href="/ideas/semantic-layers-in-production/">Read the full article &rarr;</a></p>
  </article>

  <hr class="idea-divider">

  <article class="idea-teaser">
    <h2><a href="/ideas/ai-data-analyst-semantic-layer/">Why your AI data analyst won't work without a semantic layer</a></h2>
    <div class="article-meta caps">April 2026</div>
    <p>We pointed an LLM directly at real operational data in BigQuery. For a simple question about billable hours, it worked perfectly in 30 seconds — the exact moment most companies declare victory and deploy their new "AI analyst." But that initial success is a trap. As soon as the questions required actual business logic, the raw text-to-SQL approach collapsed. Here's the bake-off that shows why a trustworthy AI analyst needs a semantic layer.</p>
    <p><a class="read-more" href="/ideas/ai-data-analyst-semantic-layer/">Read the full article &rarr;</a></p>
  </article>
</section>
