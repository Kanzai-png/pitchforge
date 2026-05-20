# PitchForge — Product Requirements Document

## Vision
PitchForge helps builders turn messy project notes into polished, reviewer-ready proposals for grants, hackathons, and model credit programs.

## Problem Statement
Builders spend hours crafting application narratives instead of shipping product. Evidence is scattered across repos, logs, demos, and screenshots. Reviewers see fragmented submissions and reject strong projects due to poor presentation.

## Solution
A local-first web application that:
1. Captures project details in a structured form
2. Maps evidence to claims
3. Generates two output formats: full pitch pack and concise grant answer
4. Runs entirely in the browser — no login, no API key, no database

## Target Users
- Grant applicants (AI programs, ecosystem funds)
- Hackathon participants
- Model credit seekers (Xiaomi MiMo, OpenAI, Anthropic)
- Open-source maintainers seeking sponsorship

## Core Features (MVP)
- Project profile capture (name, problem, solution, users, tech)
- Evidence management (repo, demo, screenshots, logs, artifacts)
- Pitch Pack generation (structured Markdown dossier)
- Grant Answer generation (concise, copy-ready text)
- Example gallery with real submissions
- One-click copy and Markdown download
- MiMo-flavored example preloaded

## Non-Goals (v1)
- User authentication
- Persistent storage / database
- PDF export
- Team collaboration
- Direct API integration with grant platforms

## Technical Architecture
- Next.js 15 with App Router
- React 19 with client-side state
- TypeScript for type safety
- Tailwind CSS for styling
- Vercel for deployment
- No backend — all generation logic runs client-side

## Success Metrics
- Time to generate a pitch: < 5 minutes
- Copy-paste ready output
- Positive reviewer feedback on structure clarity

## Roadmap
- v0.1: MVP with pitch and grant answer generation
- v0.2: AI-enhanced generation via MiMo API
- v0.3: Template library and community examples
- v1.0: Direct submission to grant platforms

## AI Integration Plan
PitchForge uses Xiaomi MiMo-2.5-Pro for:
- Rewriting rough notes into polished prose
- Suggesting stronger evidence framing
- Generating reviewer-optimized summaries
- Detecting weak claims that need more evidence

The current MVP uses template-based generation. MiMo integration is planned for v0.2, pending API credit approval.
