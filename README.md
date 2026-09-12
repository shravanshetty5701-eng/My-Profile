<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/3558ca8f-a582-4b81-b1b2-efb55a1d6c8c

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy on GitHub Pages

1. Create a **public** GitHub repository named `shravan-shetty-portfolio`.
2. Push this project to the `main` branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Push to `main` (or run the workflow manually from the Actions tab).
6. Your site will be available at:
   `https://YOUR-GITHUB-USERNAME.github.io/shravan-shetty-portfolio/`

### Environment variables

Never commit a real Gemini API key. Keep secrets in your local `.env` file or, if the app genuinely needs server-side API access, move that API call to a backend/serverless function. GitHub Pages is a static host and cannot safely hide a browser-exposed API key.
