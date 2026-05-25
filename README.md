# AI Trust Frontier

A public, Vercel-hosted research log for nightly AI trust research.

## Local setup

```bash
npm install
npm run dev
```

## Nightly research

The runner works with open metadata sources and optionally uses an OpenAI-compatible chat completion endpoint for synthesis.

```bash
export AI_TRUST_LLM_PROVIDER=openai-compatible
export AI_TRUST_LLM_API_KEY=...
export AI_TRUST_LLM_MODEL=...
export AI_TRUST_LLM_BASE_URL=https://api.openai.com/v1
npm run research:nightly
```

Without LLM credentials, the runner still collects sources and writes a conservative heuristic dossier.

## Vercel deployment

Create a GitHub repo for this folder, import it in Vercel as a Next.js project, then let the nightly job commit and push `data/` updates. Vercel will redeploy on each push.

```bash
git init
git add .
git commit -m "Initial AI trust frontier"
git remote add origin <your-repo-url>
git push -u origin main
```

If you prefer manual deployment, run `vercel --prod` after linking the project with the Vercel CLI.

## Schedule

```bash
npm run install:launchd
```

The job runs daily at `01:15` local Mac time.

Run once manually before relying on the schedule:

```bash
npm run research:nightly
```
