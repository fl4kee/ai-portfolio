# Deploying to a VPS (cloudvps.host)

Target stack: **Docker** (Next.js standalone) → **Nginx** reverse-proxy → **certbot** TLS.
The container listens on `127.0.0.1:3000`; Nginx terminates TLS and proxies to it.

---

## 0. Prerequisites

- A VPS (Ubuntu 22.04/24.04) with SSH access.
- An OpenRouter API key.
- A domain (for HTTPS). You can deploy and test over `http://<server-ip>` first;
  TLS via certbot requires a domain with an A-record pointing at the VPS.

## 1. Server bootstrap

```bash
# as root on first login
adduser deploy && usermod -aG sudo deploy
ufw allow OpenSSH && ufw allow 80 && ufw allow 443 && ufw enable

# Docker + compose plugin
curl -fsSL https://get.docker.com | sh
usermod -aG docker deploy
# log out / back in as `deploy` so the docker group applies
```

## 2. Get the code + secrets

```bash
# as deploy
git clone https://github.com/fl4kee/ai-portfolio.git
cd ai-portfolio

# .env is NOT in git — create it on the server
printf 'OPENROUTER_API_KEY=sk-or-YOUR_KEY\n' > .env

# (optional) the résumé file is gitignored — copy it from your machine if you
# want the "résumé" button to work:
#   scp portfolio.pdf deploy@<server-ip>:~/ai-portfolio/public/resume.pdf
```

Then set your domain in `docker-compose.yml` (the `SITE_URL` env), used as the
OpenRouter `HTTP-Referer`.

## 3. Build + run

```bash
docker compose up -d --build
docker compose logs -f          # check it started
curl -s localhost:3000 | head   # should return HTML
```

The app is now live on `127.0.0.1:3000` (not yet exposed to the internet).

## 4. Nginx reverse-proxy

```bash
sudo apt install -y nginx
sudo cp deploy/nginx/ai-portfolio.conf /etc/nginx/sites-available/ai-portfolio.conf
# edit it: replace example.com with your domain
sudo ln -s /etc/nginx/sites-available/ai-portfolio.conf /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

At this point `http://<your-domain>` should serve the site.

## 5. TLS (HTTPS)

Make sure the domain's A-record points at the VPS IP (`dig +short your-domain`), then:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain -d www.your-domain
```

certbot rewrites the Nginx config to add the `443` server block and sets up
auto-renewal (systemd timer). Done — `https://your-domain` is live.

## 6. Updating later

```bash
cd ~/ai-portfolio
git pull
docker compose up -d --build
```

---

## Notes

- **API key** lives only in `.env` on the server (and is never in git or the
  client bundle). On a managed host you can instead inject it as an environment
  variable.
- **Streaming:** the Nginx config disables `proxy_buffering` so the AI chat streams
  token-by-token. Keep that.
- **Free model limits:** `openai/gpt-oss-120b:free` is rate-limited by OpenRouter.
  For real traffic, add rate-limiting and/or switch to a paid model in
  `app/api/chat/route.ts`.
- **No domain yet?** `docker compose up -d` + opening port 3000 (or a quick Nginx
  proxy) lets you demo over `http://<server-ip>` immediately; add the domain + certbot
  whenever it's ready.
