# WEARV3RSE — Landing Page

> *Your wardrobe. Digitalised. Styled by AI.*

WEARV3RSE verwandelt deinen physischen Kleiderschrank in einen smarten digitalen Twin — angetrieben von zwei KI-Agenten. Es hilft dir, schnellere Entscheidungen zu treffen, Zeit zu sparen, und das was du schon besitzt wirklich zu tragen. Nebenbei: bewussterer Konsum, weniger Impulskäufe, besser für die Umwelt.

This repository contains the **public landing page**, deployed at Vercel. The app itself lives in a separate repository: [`wearverse-app`](https://github.com/kleospace/wearverse-app).

---

## The Problem

The average consumer buys 60 new pieces of clothing per year but actively wears only 20% of their wardrobe. Clothes pile up unworn. Decisions are made every morning under time pressure. Duplicates get bought. Nothing gets sorted out.

WEARV3RSE fixes this — not by selling you more, but by making what you already own work harder for you.

---

## The Solution: Two-Agent Architecture

Two specialised AI agents work in sequence to power the experience.

### Agent 01 — The Cataloguer *(Perception)*

You photograph a garment with your phone. The Cataloguer analyses it via Claude Vision API and extracts structured data automatically: category, colour, material, season, and style. Every item is saved to your personal digital wardrobe in Airtable.

Over time the Cataloguer also surfaces what you haven't worn in a while — so you can actually decide what to keep and what to let go.

**Capabilities:**
- Computer vision for garment recognition (Claude Vision API)
- Auto-tagging: category · colour · material · season · style
- Detects underused items to support conscious sorting

### Agent 02 — The Stylist *(Reasoning + Action)*

The Stylist takes your digital wardrobe and reasons across it using two sources:

1. **Your wardrobe** — everything the Cataloguer has catalogued
2. **Today's weather** — via Open-Meteo API (real-time, location-based)

Output: three concrete outfit suggestions every day, composed entirely from what you already own, matched to the weather, and explained with a short rationale.

**Capabilities:**
- Claude API with Tool Use (structured reasoning)
- Weather-aware outfit selection (Open-Meteo)
- Always three looks — never more, never less
- Rationale per outfit (why this combination works today)

**System handoff:** `Cataloguer (Perception) → Airtable → Stylist (Reasoning + Action)`

---

## Repositories

| Repo | Purpose | Stack |
|---|---|---|
| `wearverse-landing-page` | This repo — public marketing page | Vite · React · Tailwind · Vercel |
| `wearverse-app` | The actual product (MVP) | Vite · React · FastAPI · Airtable · Railway |

---

## Landing Page Structure

| Section | Purpose |
|---|---|
| **Hero** | Brand identity, tagline, waitlist CTA |
| **Manifesto** | The problem — overconsumption statistics |
| **Agents** | Introduction of the two-agent system |
| **How It Works** | Two-step onboarding: Capture → Curate |
| **CTA** | Waitlist sign-up |

---

## Landing Page — Local Setup

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build
npm run preview   # preview production build
```

---

## MVP Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vite + React + TypeScript + Tailwind CSS v4 |
| Backend | Python + FastAPI |
| Agent 01 (Vision) | Claude Vision API (claude-sonnet-4-5) |
| Agent 02 (Stylist) | Claude API with Tool Use |
| Database | Airtable |
| Weather | Open-Meteo API |
| Deployment | Vercel (frontend) · Railway (backend) |

---

## Project Context

WEARV3RSE is a student project at CODE University Berlin, exploring the intersection of **agentic AI systems** and **sustainable consumer behaviour**.

**Course relevance:**

| Course | Where it appears |
|---|---|
| Computer Vision | Agent 01: garment recognition, image classification |
| Generative AI / LLMs | Agent 02: outfit reasoning, structured output |
| Agentic AI | Two-agent pipeline with Tool Use |
| NLP | Prompt engineering, structured extraction |
| MLOps / Agentic Ops | API versioning, logging, agent observability |

**Stage:** MVP in development  
**Location:** Berlin, 2026  
**Focus:** Digital wardrobe twin · Two-agent AI pipeline · Conscious consumption
