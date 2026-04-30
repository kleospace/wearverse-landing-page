# WEARV3RSE — Landing Page

> *The AI that knows what you already own.*

WEARV3RSE is an AI-powered wardrobe operating system designed to fight overconsumption in fashion. Instead of buying more, users are helped to wear what they already own — better, smarter, and more intentionally.

This repository contains the **public landing page** for the WEARV3RSE product, built to communicate the concept, introduce the AI agent architecture, and collect early waitlist sign-ups.

---

## The Problem

The average consumer buys 60 new pieces of clothing per year but only actively wears around 20% of their wardrobe. Online return rates exceed 50%. Wardrobes have become graveyards of impulse purchases.

WEARV3RSE addresses this by turning your existing closet into an intelligent, queryable system — not by selling you more.

---

## The Solution: Two-Agent Architecture

The product is built around two specialised AI agents that work in sequence:

### Agent 01 — The Cataloguer *(Perception)*
Responsible for processing visual input from the user's wardrobe. The user photographs each garment once; the Cataloguer identifies category, material composition, dominant colour, silhouette, and styling family in under a second. It builds and maintains the permanent mental model of the entire wardrobe.

**Capabilities:**
- Computer vision model for garment recognition
- Auto-tagging (< 0.8s per item)
- Material and texture recognition
- Colour extraction and palette mapping

### Agent 02 — The Stylist *(Reasoning + Action)*
Takes the structured wardrobe data from the Cataloguer and reasons across it to produce daily outfit recommendations. It weighs weather conditions, the user's calendar, and a learned personal taste model to generate three outfit decisions every morning.

**Capabilities:**
- Cross-wardrobe pattern matching
- Weather-aware outfit selection
- Calendar context integration
- Daily triptych output (always exactly three looks)

**System handoff:** `Cataloguer (Perception) → Stylist (Reasoning + Action)`

---

## Landing Page

The landing page communicates the product vision and collects early interest from Berlin-based users. It is structured as follows:

| Section | Purpose |
|---|---|
| **Hero** | Brand identity, tagline, waitlist CTA |
| **Manifesto** | The problem — overconsumption statistics |
| **Agents** | Introduction of the two-agent system |
| **How It Works** | Two-step onboarding: Capture → Curate |
| **CTA** | Waitlist sign-up |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite 7](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| UI Primitives | [Radix UI](https://www.radix-ui.com/) |
| Deployment | [Vercel](https://vercel.com/) |

---

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173`.

---

## Project Context

WEARV3RSE is a student project exploring the intersection of **AI agent systems** and **sustainable consumer behaviour**. The landing page serves as a product prototype to validate demand and communicate the architecture before technical implementation begins.

**Stage:** Concept + Landing Page  
**Location:** Berlin, 2026  
**Focus:** Anti-overconsumption · AI wardrobe operating system · Two-agent pipeline
