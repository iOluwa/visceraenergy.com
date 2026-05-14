# Viscera Energy — visceraenergy.com

**Global Energy Infrastructure Partner**
Static website — GitHub Pages + Cloudflare + Decap CMS

---

## Quick Start

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Week 1: Foundation build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/visceraenergy.com.git
git push -u origin main
```

### 2. Enable GitHub Pages

Go to: **GitHub repo → Settings → Pages**
- Source: `Deploy from a branch`
- Branch: `main` / `/ (root)`
- Save

GitHub will show a deployment URL (e.g. `your-username.github.io/visceraenergy.com`)

### 3. Connect Cloudflare

In Cloudflare DNS for `visceraenergy.com`:
```
CNAME  @    your-username.github.io   (Proxied: ON)
CNAME  www  your-username.github.io   (Proxied: ON)
```

Add a custom domain in GitHub Pages settings: `visceraenergy.com`

### 4. Update admin/config.yml

Replace `visceraenergy/visceraenergy.com` with your actual GitHub `username/repo-name`.

### 5. Enable Decap CMS (optional, Week 4)

- Deploy to Netlify (drag-and-drop the folder) for OAuth support
- Or use GitHub as OAuth provider directly
- CMS will be accessible at `visceraenergy.com/admin/`

---

## File Structure

```
/
├── index.html              ← Homepage
├── about/index.html        ← About page
├── services/index.html     ← Services overview
├── services/source/        ← Procurement & Supply
├── services/deploy/        ← Engineering & Integration
├── services/operate/       ← Operations & Integrity
├── partners/index.html     ← OEM Partners
├── projects/index.html     ← Projects
├── credentials/index.html  ← Credentials
├── insights/index.html     ← Insights index
├── contact/index.html      ← Contact & RFQ
├── leadership/index.html   ← Founder & Team
├── global/index.html       ← Global Presence
├── industries/index.html   ← Industries
├── careers/index.html      ← Careers
├── css/
│   ├── design-system.css   ← All tokens, components, utilities
│   └── home.css            ← Home-page-specific styles
├── js/
│   └── main.js             ← Nav, reveals, form handling
├── assets/
│   ├── brand/              ← Logo files
│   └── images/             ← Photography
├── content/
│   ├── insights/           ← Article Markdown files
│   ├── projects/           ← Project data files
│   └── partners/           ← OEM partner data
├── admin/
│   ├── index.html          ← Decap CMS interface
│   └── config.yml          ← CMS configuration
├── robots.txt
└── BUILD_BIBLE.md
```

---

## Monthly Maintenance (30 minutes)

Run on the first Saturday of every month:

1. **0–5 min** — GA4 review: traffic, top pages, conversions
2. **5–10 min** — Search Console: queries, errors
3. **10–15 min** — Update any YAML data (new OEM, credential renewal)
4. **15–25 min** — Publish one insight article via `/admin/`
5. **25–30 min** — Commit and push

---

## Content Updates (no code required)

**To add a new OEM partner:**
Edit `content/partners/oems.yaml` — copy one entry block, fill in fields, save.

**To add a new project:**
Edit `content/projects/projects.yaml` — copy one entry, fill in fields, save.

**To publish an insight article:**
Go to `visceraenergy.com/admin/` → New Insight → Fill fields → Publish.

**To update contact details:**
Edit `_includes/footer.html` — find the phone/email, change it.

---

## n8n RFQ Webhook

In `js/main.js`, find:
```javascript
const webhookUrl = rfqForm.dataset.webhook || '';
```

In `contact/index.html`, add to the form tag:
```html
<form id="rfq-form" data-webhook="https://YOUR_N8N_INSTANCE/webhook/rfq">
```

Replace with your actual n8n webhook URL from the n8n workflow you build in Week 4.

---

## Build Bible

See `BUILD_BIBLE.md` for the full project specification, decisions record,
and 6-week build sequence.

---

*viscera-energy.com — built May 2026*
