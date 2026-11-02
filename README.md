# Ethio Entrance website

Simple marketing + legal pages for Google OAuth / Play Store:

- `/` — landing with Play Store CTA
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service

## Run

```bash
cd /Users/jeba/Documents/projects/ethio-entrance-web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deploy to Vercel/Netlify. Then use these URLs in Google OAuth:

- Home: `https://YOUR-DOMAIN/`
- Privacy: `https://YOUR-DOMAIN/privacy`
- Terms: `https://YOUR-DOMAIN/terms`

Play Store URL is set in `src/lib/site.ts`.
