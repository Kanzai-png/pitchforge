# PitchForge

**Turn rough ideas into winning proposals.**

PitchForge is a local-first web app that helps grant applicants, hackathon builders, and model credit seekers transform messy project notes into polished, reviewer-ready pitches. Instead of spending hours on application forms, PitchForge structures your work into clear proposals that reviewers can scan in 30 seconds.

## Live project

- Live demo: https://pitchforge-app.vercel.app
- Builder: https://pitchforge-app.vercel.app/builder
- Examples: https://pitchforge-app.vercel.app/examples
- PRD: https://pitchforge-app.vercel.app/PRD.md
- GitHub: https://github.com/Kanzai-png/pitchforge

## Why this matters

You built something real. But when it comes time to apply for grants, credits, or prizes, you spend hours wrestling with forms instead of shipping. Your proof is scattered. Reviewers see a mess, not your work.

PitchForge solves that. It takes your raw project details and evidence, then generates structured proposals that map claims to proof.

## What PitchForge generates

**Input:**
- Project name, problem, solution, target users
- Tech stack and AI model used
- Repository and demo links
- Evidence items (repos, demos, screenshots, logs, artifacts)
- Target grant or program

**Output:**
- Structured Markdown pitch pack for reviewers
- Concise grant answer for application forms
- Claim-to-evidence mapping

## Features

- Capture project profile with public proof links
- Add evidence entries with source and claim mapping
- Generate two modes: Pitch Pack (full dossier) or Grant Answer (concise copy)
- Copy or download generated Markdown
- Load a MiMo-flavored example to see the workflow
- Runs in the browser — no login, no database, no API key

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Vercel deployment

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
```

## Project structure

```
app/              Next.js routes
app/builder/      Interactive pitch builder
app/examples/     Example pitch gallery
lib/              Generation logic
public/           Static assets and examples
docs/             Architecture notes
PRD.md            Product requirements
```

## AI Integration

PitchForge integrates Xiaomi MiMo-2.5-Pro for intelligent pitch generation:
- Rewrites rough notes into polished prose
- Suggests stronger evidence framing
- Generates reviewer-optimized summaries
- Detects weak claims needing more evidence

Current MVP uses template-based generation. MiMo API integration is the next milestone.

## Who it's for

- Grant applicants proving real AI usage
- Hackathon teams shipping submission docs fast
- Model credit seekers demonstrating genuine use cases
- Open-source maintainers documenting impact

## Status

PitchForge is live and publicly accessible at https://pitchforge-app.vercel.app
