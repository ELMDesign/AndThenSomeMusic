# AndThenSomeMusic
AndThenSomeMusic

## Development

    npm install
    npm run dev

## Deploying to GoDaddy

The site is a static export. Run `npm run build` and upload the contents of `out/` to your GoDaddy hosting root (e.g. `public_html`).

Instagram feed: copy `.env.example` to `.env.local` and set `INSTAGRAM_ACCESS_TOKEN` before building. The feed is fetched at build time; rebuild/redeploy to refresh it.
