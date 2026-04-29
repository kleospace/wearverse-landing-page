# WEARV3RSE

AI-powered wardrobe styling app. Berlin, 2026.

## Deploy to Cloudflare

This project runs on Cloudflare Workers (with Static Assets — the new unified Pages/Workers platform).

### One-time setup

```bash
bun install
bunx wrangler login
```

### Deploy

```bash
bun run build
bunx wrangler deploy
```

That's it — your site is live at `https://wearv3rse.<your-account>.workers.dev`.

### Custom domain

1. In the Cloudflare dashboard → **Workers & Pages → wearv3rse → Settings → Domains & Routes**.
2. Click **Add → Custom Domain**, enter your domain (e.g. `wearv3rse.com`).
3. Cloudflare auto-provisions DNS + SSL if the domain is on Cloudflare. Otherwise follow the CNAME instructions shown.

### Local dev

```bash
bun run dev
```
