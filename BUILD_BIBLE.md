# VEOM Website Build Bible v1.0

**Project:** viscera-energy.com — full rebuild **Owner:** Modupe  Famurewa, FNSE **Methodology:** Static site, low-maintenance, AI-assisted, content-led **Time commitment:** 2 hours daily, 6 weeks to launch **Last revised:** May 2026 — this is the locked version. Changes require explicit re-approval.

---

## 1\. The Decision Record

These decisions are now closed. Do not reopen them mid-build.

| \# | Decision | Locked Position |
| :---- | :---- | :---- |
| 1 | Stack | Static HTML \+ Decap CMS, hosted on GitHub Pages, fronted by Cloudflare. WordPress is permanently rejected. |
| 2 | Positioning | Fused (a)+(b): OEM-led integrity argument. Procurement-led for evidence; O\&M and AIM positioned as lifecycle extensions of OEM authority. |
| 3 | Geographic frame | Global Energy Infrastructure Partner. Nigeria HQ, Delaware affiliate, twelve OEM countries, four-region active project geography. |
| 4 | Entity scope | Energy entities only. VEOM Ltd, VEOM LLC, VEL legacy, VIGS (logistics for energy ops), VIPL (power). BDCs, VoiceHit, Viscera Home are not surfaced on this domain. |
| 5 | Brand frame | "Viscera Energy" as the public-facing brand. Full legal name (Viscera Energy Operations and Maintenance Limited) appears in footer, contact, and credentials only. |
| 6 | Founder visibility | Confirmed. Dedicated Leadership page with photo, FNSE credential, LinkedIn link, founder's letter. |
| 7 | Content fidelity | Pillar 3 (O\&M / AIM) is honestly framed as "active capability build-out, anchored by OEM technical authority and founder credentials." We do not pad it with proposals-as-projects. |
| 8 | Tone | Industrial precision. Confident, technical, evidence-led. No marketing fluff. Operators read this. |

---

## 2\. Brand Freeze

The five-year logo iteration cycle ends here. Decide once. Do not iterate during the build.

### 2.1 Logo

**Decision required from Oluwa before Week 2:** which of the existing files becomes the final logo. Recommendation — pick whichever VE O\&M variant is already on the most current corporate documents (NUPRC permit, D\&B profile, Delaware filing) and freeze it. Brand consistency with regulatory documents matters more than design preference.

If no clear front-runner exists, default to the most legible monochrome version. Convert to SVG. Store in `/assets/brand/` as `logo.svg`, `logo-white.svg`, `logo-mono.svg`. No further iteration.

### 2.2 Colour System

| Role | Hex | Use |
| :---- | :---- | :---- |
| Ink (primary background) | `#0A1420` | Page backgrounds, dark sections |
| Surface (elevated) | `#0E1B2A` | Cards, elevated panels |
| Border | `rgba(255,255,255,0.08)` | Hairline dividers |
| Brand Amber | `#E8A33D` | Accents, links, CTAs, the one colour the eye finds |
| Text Primary | `#FFFFFF` | Headlines on dark |
| Text Secondary | `rgba(255,255,255,0.65)` | Body copy on dark |
| Text Muted | `rgba(255,255,255,0.45)` | Labels, metadata |
| Light Surface | `#F8F6F1` | Alternate light sections (case studies, insights body) |
| Light Ink | `#1A1A1A` | Body text on light |

Rationale: dark industrial palette signals the operating environment. The single amber accent is the "Viscera mark" — used sparingly, it makes the brand recognisable. No secondary colours. No gradients except the subtle hero glow.

### 2.3 Typography

**Display:** Inter Tight (700, 600\) — substituting for Syne to keep load weight low. Tight letter-spacing on headlines. **Body:** Inter (400, 500\) — already loaded across most browsers, performant in West African bandwidth conditions. **Monospace** (for credentials, permit numbers, technical specs): JetBrains Mono (400).

Total font weight: under 80kb. No display-font experiments. Type is the spine of credibility, not the place to be creative.

### 2.4 Tagline (locked)

**Primary tagline:** *Global Energy Infrastructure Partner.* **Hero substatement:** *Authorized OEM equipment. Engineered to operate, maintain, and outlast.* **Footer signature:** *Direct OEM authority across twelve countries.*

### 2.5 Founder Bio (long version, for About / Leadership page)

Modupe Famurewa, FNSE, founded Viscera Energy in 2012 after a career building energy infrastructure across Sub-Saharan Africa. A Fellow of the Nigerian Society of Engineers, mechanical engineer by training, with an M.Sc. in Project Management and an Executive MBA from Lagos Business School, Modupe brings two decades of operator-side experience to a company built on a simple proposition: the most credible partner to operate and maintain energy equipment is the partner authorized to supply it.

Under his leadership, Viscera has secured direct OEM agreements with thirty manufacturers across twelve countries, registered a Texas affiliate, obtained the NUPRC Oil & Gas Industry Service Provider permit, and executed equipment supply across Nigeria, Ghana, Senegal, Cameroon,Ivory Coast, Angola, Equatorial Guinea, and Congos. He continues to serve in senior roles in the African energy sector.

### 2.6 Founder Bio (short version, for hero adjacency or partnership pitches)

Modupe Famurewa, FNSE — mechanical engineer, twenty-year energy executive, founder of Viscera Energy. Builds where operators need OEM authority and engineering depth in the same partner.

---

## 3\. Information Architecture

Twelve pages. No more. No fewer. Each one earns its place in the navigation.

### 3.1 Primary Navigation

1. **Home** — `/`  
2. **About** — `/about` (with sub-anchor: Group Companies, Leadership)  
3. **Services** — `/services` (with sub-pages per pillar)  
4. **OEM Partners** — `/partners`  
5. **Projects** — `/projects` (case studies \+ active engagements separately framed)  
6. **Credentials** — `/credentials`  
7. **Insights** — `/insights` (CMS-driven blog)  
8. **Contact** — `/contact`

### 3.2 Footer / Secondary Navigation

9. **Leadership** — `/leadership` (founder \+ key team, deep-link from About)  
10. **Industries** — `/industries` (Upstream, Midstream, Power, Industrial — SEO landing pages)  
11. **Global Presence** — `/global` (the country/jurisdiction map)  
12. **Careers** — `/careers` (placeholder until first hire post-launch)

### 3.3 Service Sub-Pages

- `/services/source` — Procurement & Supply  
- `/services/deploy` — Engineering & Integration  
- `/services/operate` — Operations, Maintenance & Asset Integrity

### 3.4 Hidden but indexed

- `/admin` — Decap CMS login (no nav link, but not blocked from search engines for the login page itself)  
- `/sitemap.xml`, `/robots.txt`, `/og-image.png`

---

## 4\. Page-by-Page Content Brief

### 4.1 Home (`/`)

The single most important page. Operators decide whether to keep reading in five seconds.

**Section 1 — Hero**

- Tag: Global Energy Infrastructure Partner  
- H1: Authorized OEM equipment. Engineered to operate, maintain, and outlast.  
- Sub: From procurement to commissioning, operations to integrity management — Viscera Energy is the direct OEM partner for thirty manufacturers across twelve countries, delivering certified equipment and the engineering depth to keep it running. Anywhere energy infrastructure is built.  
- Primary CTA: Request Quote → `/contact`  
- Secondary CTA: Explore OEM Network → `/partners`  
- Stats strip: 13+ years · 12 OEM countries · 30+ authorized brands · 2 registered jurisdictions

**Section 2 — The OEM-Led Integrity Argument** The fused-positioning paragraph from our agreed copy. Renders as a pull-quote with the amber left-border treatment. This is the brand statement — sets up the rest of the site logically.

**Section 3 — Three Lifecycle Pillars** 01 SOURCE · 02 DEPLOY · 03 OPERATE — each with one-paragraph description and an evidence line linking to the relevant projects. Cards link to `/services/source`, `/services/deploy`, `/services/operate`.

**Section 4 — OEM Network Preview** Headline: "Direct factory authority across twelve countries." Grid of 18 logos (12 visible \+ 6 in a "+more" tile linking to `/partners`). Each cell shows country flag and brand name. On hover/tap, shows agreement type and product category.

**Section 5 — Selected Projects** Three executed projects only — TOPEK, Egina FPSO, Dietsmann, MODEC / Woodside Sangomar FPSO. Each as a horizontal card with: client, scope, OEM partner, year, outcome. CTA to full `/projects`.

**Section 6 — Global Footprint** Two-column block — Nigeria HQ, USA Texas. Plus the active project geography strip (NG · GH · TX · AUT · SE in progress).

**Section 7 — Credentials Strip** Horizontal monochrome strip of credential references: NUPRC OGISP\_20\_1175801 · D\&B DUNS · SAP Ariba · NUSA · FIRS TCC 2025\. Plain text, monospace, no logos. Looks like a regulatory citation, reads as proof. Click-through to `/credentials`.

**Section 8 — Founder voice** One-paragraph quote from Modupe, photo, name, FNSE designation, LinkedIn link. Humanises the company. Critical for African B2B trust.

**Section 9 — CTA footer** "Specify, supply, operate. With OEM authority." Two buttons: Request a Quote · Schedule a Call (Calendly embed).

### 4.2 About (`/about`)

**Sections:**

1. Hero: "Founded 2012\. Consolidated 2026\. Built around OEM authority."  
2. The Viscera story: founding narrative, evolution from valve specialist to global infrastructure partner, the 2026 consolidation under VEOM.  
3. Group Companies (energy-only): VEOM Ltd, VEOM LLC, VEL legacy, VIGS, VIPL — each with one-line description of operational role.  
4. Leadership preview → links to `/leadership`.  
5. Operating principles: short list — OEM authority, regulatory rigour, engineering depth, operational discipline.

### 4.3 Services Pillar Pages

Each pillar page (`/services/source`, `/deploy`, `/operate`) follows the same template:

1. Pillar headline \+ sub  
2. What we do (3–5 sub-services with technical specifics)  
3. The OEMs / partners we deliver under  
4. Reference projects (executed, with Evidence-on-request framing)  
5. Process / methodology  
6. Compliance and certification stack relevant to this pillar  
7. CTA: Request Quote / Specify Equipment

**Pillar 3 specific note:** the page must lead with the OEM-led credibility argument before listing services. The framing should read: *"Operations and Maintenance at Viscera is delivered under OEM technical authority. Where we hold direct factory agreements, we hold the documentation, training, and parts access that make integrity-led maintenance defensible. The capability is being actively expanded; the foundation is the equipment authority itself."*

### 4.4 OEM Partners (`/partners`)

The single most powerful page on the site. Treat it accordingly.

- Hero: "Direct factory authority across twelve countries. Thirty manufacturers. Not resellers."  
- Filterable grid: by country, by product category (valves / compressors / pumps / power / instrumentation / HVAC / pipes), by certification.  
- Each OEM entry: name, country flag, agreement type, year of agreement, products covered, certifications held, brief partner description, link to factory site.  
- Bottom of page: explainer of "what direct OEM agreement means" — distribution agreement vs. agency agreement vs. sole authorization, and why this matters for tender qualification.

### 4.5 Projects (`/projects`)

The honesty page. Two clearly separated sections:

**Executed Projects (6).** Each as a full case study card: TOPEK, Tema Pipeline, LPE3, IDC Ghana, NGIC CTMS (advanced procurement stage — flagged honestly), HERZ HVAC portfolio. Structure per case: Client / Scope / OEM Partners / Year / Outcome / Evidence (available on request).

**Active Engagements (separate section, separate framing).** Honestly labelled: "These are bids submitted, proposals under evaluation, and engagements in progress. They demonstrate pipeline depth, not delivered work." Then list 6–8 of the strongest from the bid pipeline (SEPLAT, Shell via Pristine, Duport, KwaleGenco, etc.). Discipline: never call a proposal a project.

### 4.6 Credentials (`/credentials`)

The trust-restoration page. The page that fixes the December 2023 scam-checker problem.

- Lead with: "Independently verifiable credentials. Cross-reference any of the below."  
- Full table of 11 Nigerian regulatory credentials with permit/reference numbers visible.  
- International registrations: D\&B DUNS (with verification link), Delaware LLC, NUSA, Austrian Embassy Commercial Section.  
- Banking partners: Standard Chartered, Stanbic IBTC.  
- Compliance certifications: SCUML, NSITF, AXA Mansard.  
- For each: a small "Verify →" link where third-party verification is publicly possible (D\&B, NUPRC vendor database, FIRS TIN check).

### 4.7 Insights (`/insights`)

CMS-driven. At launch, three pieces — see Section 8 for the launch content plan.

Template per article: hero with title, date, author, reading time. Body in long-form prose. Sidebar with "More from Viscera" and "Subscribe" form pointing to a Zoho-hosted newsletter.

### 4.8 Contact (`/contact`)

The conversion page. Three modes of contact, ranked by Nigerian B2B reality:

1. **WhatsApp Business button** — top of page, prominent.  
2. **Calendly embed** — direct call scheduling, anchored to your real calendar.  
3. **Structured RFQ form** — fields: Company, Contact Name, Role, Email, Phone, Country, Service category (Source/Deploy/Operate), Brief description, Timeline, How they found us. Submission → n8n webhook → Zoho Mail \+ Slack/WhatsApp notification.

Plus: Lagos office address with embedded map. Delaware registered agent address. Direct email ([info@visceraenergy.com](mailto:info@visceraenergy.com) or appropriate Zoho-hosted mailbox).

### 4.9 Leadership (`/leadership`)

Founder profile (long bio from Section 2.5). Photo. FNSE credential. LinkedIn link. Quote / founder's letter.

If/when key technical team members are added, this page accommodates them. For launch, founder-only is fine and authentic.

### 4.10 Industries (`/industries`)

SEO landing pages — these exist to capture search intent. Four pages: Upstream Oil & Gas, Midstream, Power Generation, Industrial Facilities. Each \~600-word page describing how Viscera's three pillars serve that sector, with relevant OEM partners and projects called out. These are workhorse pages, not flagship pages. Light design treatment.

### 4.11 Global Presence (`/global`)

The country/jurisdiction visualisation. Map graphic (SVG, simple) showing OEM countries (12), operational countries (5), registered jurisdictions (2). Tabular list below the map. Replicates and expands the homepage Global Footprint section.

### 4.12 Careers (`/careers`)

Placeholder for launch. One page: "We hire engineers, project managers, and operations specialists who understand both OEM equipment and field reality. To be considered, send your CV to [careers@visceraenergy.com](mailto:careers@visceraenergy.com)." Add structured listings as roles open.

---

## 5\. Technical Architecture

### 5.1 The Stack (locked)

DOMAIN

└── visceraenergy.com (GoDaddy registrar, Cloudflare DNS)

CDN / SECURITY LAYER

└── Cloudflare (free tier — SSL, CDN, DDoS, page rules, redirects)

HOSTING

└── GitHub Pages (free, version-controlled, reliable)

    └── Repo: visceraenergy/visceraenergy.com (private)

        ├── Static HTML pages (built from templates)

        ├── /content/\* (Markdown-driven CMS data)

        ├── /assets/\* (images, brand, downloadable specs)

        └── /admin (Decap CMS interface)

CONTENT MANAGEMENT

└── Decap CMS (free, Git-backed, no database)

    └── Editing panel at visceraenergy.com/admin

    └── Edits commit Markdown to GitHub

    └── Cloudflare propagates within 30 seconds

FORM HANDLING

└── n8n (existing automation layer)

    └── RFQ form → webhook → Zoho Mail notification \+ WhatsApp ping \+ CRM record

EMAIL

└── Zoho Mail (existing)

    └── MX records via Cloudflare

ANALYTICS

└── Google Analytics 4 (free)

└── Microsoft Clarity (free, heatmaps \+ session recordings)

└── Google Search Console (free, SEO health)

AI WORKFLOW LAYER (content production)

└── Claude (drafting, editing, structured generation)

└── ChatGPT (alternate drafting, fact-check)

└── OpenRouter (model routing as needed)

### 5.2 Performance Targets

| Metric | Target | Why |
| :---- | :---- | :---- |
| Lighthouse Performance | 95+ | Industry-credible standard |
| Largest Contentful Paint | \<2.0s on 3G | Nigerian bandwidth reality |
| Cumulative Layout Shift | \<0.1 | Polish marker |
| Total page weight (home) | \<500kb | Forces image discipline |
| Time to Interactive | \<2.5s on 3G | Operators on phones in field |

### 5.3 Data Layer

The site's structured content (OEMs, projects, credentials, partners, clients) lives as YAML or JSON files in the repo, not as hardcoded HTML. This is the architectural decision that makes maintenance trivial.

/content/

├── oems.yaml          \# 30+ OEM partners with all metadata

├── projects.yaml      \# Executed projects (case studies)

├── engagements.yaml   \# Active bids/proposals (honestly framed)

├── credentials.yaml   \# Regulatory credentials with reference numbers

├── clients.yaml       \# Major clients (with permission flags for visibility)

├── industries.yaml    \# Industry sector taxonomy

└── insights/          \# Markdown files per article

    ├── 2026-05-oem-led-integrity-argument.md

    ├── 2026-06-asset-integrity-niger-delta.md

    └── 2026-07-procurement-vs-reseller.md

When you add a new OEM agreement, you edit `oems.yaml`. The OEM Partners page rebuilds automatically. No HTML editing. No plugin updates. No contractor required.

### 5.4 SEO Infrastructure

Mandatory at launch:

- `<title>` and `<meta description>` per page, hand-written  
- Open Graph tags \+ Twitter Card tags  
- Schema.org structured data: `Organization`, `LocalBusiness`, `Service`, `Article` (for insights)  
- `sitemap.xml` auto-generated  
- `robots.txt` configured  
- Canonical URLs on every page  
- Hreflang not needed (English-only)  
- Submit to Google Search Console \+ Bing Webmaster Tools at launch

Target keywords (Nigeria \+ global mix):

- Asset integrity Nigeria  
- OEM valve supply Nigeria  
- O\&M services West Africa upstream  
- Industrial valve distributor Nigeria  
- CTMS supplier Nigeria  
- Energy infrastructure procurement Africa  
- DUNS-registered Nigerian energy supplier  
- NUPRC OGISP service provider

---

## 6\. The Six-Week Build Sequence

Each week is structured around your 2-hour daily commitment (14 hours/week). Total build budget: 84 hours, with buffer.

### Week 1 — Foundation & Brand Freeze (14h)

| Day | Task | Hours |
| :---- | :---- | :---- |
| Mon | Confirm logo decision. Convert to SVG variants. | 2 |
| Tue | Set up GitHub repo. Initialise project structure. Cloudflare ↔ GitHub Pages connection test. | 2 |
| Wed | Build the design system stylesheet (CSS variables for colours, type, spacing). Create base layout template. | 2 |
| Thu | Write Home page hero \+ OEM-led argument section. Get HTML structure right. | 2 |
| Fri | Build Home page Sections 3–5 (pillars, OEM grid, projects preview). | 2 |
| Sat | Build Home page Sections 6–9 (footprint, credentials strip, founder voice, footer). | 2 |
| Sun | Review the full Home page. Mobile responsiveness check. Commit. Push to staging. | 2 |

**Week 1 deliverable:** Home page live on a staging URL. Brand frozen.

### Week 2 — About, Services, Leadership (14h)

| Day | Task | Hours |
| :---- | :---- | :---- |
| Mon | Write About page copy from brief. Build the page. | 2 |
| Tue | Write Founder bio long version (refine 2.5). Build Leadership page. | 2 |
| Wed | Write Services overview page. Build with three-pillar structure. | 2 |
| Thu | Build /services/source pillar page with full content. | 2 |
| Fri | Build /services/deploy pillar page with full content. | 2 |
| Sat | Build /services/operate pillar page — careful framing of capability honesty. | 2 |
| Sun | Cross-link review. Navigation check. Mobile pass. Commit. | 2 |

**Week 2 deliverable:** Five additional pages live. Site has navigable structure.

### Week 3 — OEM Partners, Projects, Credentials (14h)

The proof layer. The most important week.

| Day | Task | Hours |
| :---- | :---- | :---- |
| Mon | Structure `oems.yaml` with all 30+ OEMs. Each entry complete. | 2 |
| Tue | Build OEM Partners page template. Render from YAML. Filter logic. | 2 |
| Wed | Source OEM logos (request from each OEM if not on hand; otherwise text-only at launch — perfectly acceptable). | 2 |
| Thu | Structure `projects.yaml` with 6 executed projects. Write detailed case studies for top 3 (TOPEK, Tema, LPE3). | 2 |
| Fri | Structure `engagements.yaml` with active pipeline. Build Projects page. | 2 |
| Sat | Structure `credentials.yaml` with all 11 Nigerian \+ international registrations with reference numbers. Build Credentials page. | 2 |
| Sun | Quality pass on all three pages. The proof layer must be flawless. | 2 |

**Week 3 deliverable:** The credibility engine is live. The site can survive a serious due-diligence review.

### Week 4 — Insights, Contact, n8n Integration, CMS (14h)

| Day | Task | Hours |
| :---- | :---- | :---- |
| Mon | Set up Decap CMS configuration. Test admin login. | 2 |
| Tue | Write Insight Article 1: "The OEM-Led Integrity Argument" (2,500 words). | 2 |
| Wed | Write Insight Article 2: "What 'Direct OEM Authority' Actually Means in Tender Qualification" (1,800 words). | 2 |
| Thu | Build Insights index page \+ article template. Publish first two articles. | 2 |
| Fri | Build Contact page. WhatsApp Business setup. Calendly link integration. | 2 |
| Sat | n8n RFQ webhook workflow. Test end-to-end submission → Zoho \+ Slack \+ WhatsApp. | 2 |
| Sun | Add remaining pages: Industries (4 stub pages), Global Presence, Careers placeholder. | 2 |

**Week 4 deliverable:** Site is functionally complete. Can technically launch. Will not yet, because Week 5 is polish \+ trust restoration.

### Week 5 — Trust Restoration & SEO Infrastructure (14h)

This is the week that undoes the December 2023 credibility flag.

| Day | Task | Hours |
| :---- | :---- | :---- |
| Mon | GA4 setup. Microsoft Clarity. Google Search Console verification. Bing Webmaster. | 2 |
| Tue | All meta tags audit. OG images. Schema.org markup. Sitemap generation. | 2 |
| Wed | Google Business Profile claim/reclaim. Address verification. Photo upload. | 2 |
| Thu | LinkedIn Company Page refresh — match website copy, link prominently to site. | 2 |
| Fri | NUPRC vendor portal sync. SAP Ariba profile refresh. D\&B profile update. | 2 |
| Sat | Performance audit. Lighthouse must hit 95+. Compress all images. Preload critical assets. | 2 |
| Sun | Accessibility pass. WCAG 2.1 AA. Keyboard navigation. Screen reader test on Home \+ Contact. | 2 |

**Week 5 deliverable:** Site is performant, indexed, accessible, and externally verifiable.

### Week 6 — Soft Launch, Outreach, Hardening (14h)

| Day | Task | Hours |
| :---- | :---- | :---- |
| Mon | Final QA pass. Click every link. Submit every form. Test on three devices. | 2 |
| Tue | Soft launch — DNS cutover via Cloudflare. Old site redirects. | 2 |
| Wed | Submit sitemap to Google \+ Bing. Request indexing of all primary pages. | 2 |
| Thu | LinkedIn announcement post (you, personal account) \+ Viscera Company Page. | 2 |
| Fri | Direct outreach to top 10 active engagements/clients announcing the new site. | 2 |
| Sat | Insight Article 3: write and publish — establishes the publishing rhythm. | 2 |
| Sun | First analytics review. Note what's working, what isn't. Set 30-day goals. | 2 |

**Week 6 deliverable:** Live site. Indexed. Announced. First analytics baseline. Publishing rhythm established.

---

## 7\. The 30-Minute Monthly Maintenance Protocol

The piece that has been missing for five years. This routine is what keeps the site from becoming attempt \#6.

**Run this on the first Saturday of every month. Set a recurring calendar block.**

| Minutes | Task |
| :---- | :---- |
| 0–5 | GA4 review: traffic, top pages, top sources, conversions (form submissions). Note anything anomalous. |
| 5–10 | Search Console review: top queries, click-through rates, indexing errors. Fix any errors. |
| 10–15 | OEM and credentials check: any new agreements signed? Any credentials renewed? Update YAML files. |
| 15–25 | Publish one insight article (drafted in advance — see Section 8 publication cadence). |
| 25–30 | Update one project case study or active engagement entry. Commit all changes. |

That is the entire ongoing burden of running this site. Thirty minutes a month. The model assumes content drafting (the longer task) happens separately, in your daily 2-hour blocks or as natural by-product of LBS / EMBA / consulting work.

---

## 8\. Launch Content Plan

Three insight articles ready by launch. Editorial calendar covering the following six months drafted by Week 6\.

### Launch Insights (Weeks 4–6)

**Article 1 — "The OEM-Led Integrity Argument" (2,500 words)** The brand statement, expanded. Why direct OEM authority changes the economics of asset integrity in African upstream. Cites global procurement frameworks (SAP Ariba, World Bank vendor qualification), regulatory context (NUPRC, NCDMB), and Viscera's own structural choice. Establishes the intellectual position the site is built around.

**Article 2 — "What 'Direct OEM Authority' Actually Means in Tender Qualification" (1,800 words)** Practical, technical, useful. Distinguishes distribution agreement / agency agreement / sole authorization. Shows what each unlocks in tender response (factory training certificates, certification packs, technical documentation rights). Targets procurement leads doing vendor research.

**Article 3 — "Asset Integrity Management in the Niger Delta: An OEM-Anchored Approach" (2,000 words)** Sector-specific. Niger Delta upstream realities (corrosion environments, regulatory rigour under NUPRC, cost pressures). How OEM-led O\&M reduces total cost of ownership over a typical asset lifecycle. References to API 580/581, ASME B31.4, NCDMB local content rules.

### Months 2–6 Editorial Calendar

| Month | Article | Audience |
| :---- | :---- | :---- |
| Month 2 | "CTMS in West Africa: Procurement, Engineering, Operation" | Midstream operators |
| Month 3 | "How to Specify a Valve Package That Will Pass FAT Without Surprises" | EPC contractors |
| Month 4 | "DUNS, NUSA, and the Trade Finance Path for Nigerian Energy Suppliers" | Founder peers, partnership candidates |
| Month 5 | "Rotating Equipment Maintenance: The Documentation Chain You Can't Fake" | Operations managers |
| Month 6 | "Six Months In: What We've Learned About Africa's Energy Procurement Bottlenecks" | All audiences — anniversary post |

Cadence: one article every two weeks ideally; one article every three weeks acceptable. Below that, the site dies.

---

## 9\. AI Workflow for Content Production

You have Claude, ChatGPT, and OpenRouter. Here is the workflow that turns 2 hours of your time into 2,000 words of publishable insight.

| Step | Tool | Time | What you do |
| :---- | :---- | :---- | :---- |
| 1\. Outline | Claude | 15min | Tell Claude the topic, audience, angle, and key points. Get a structured outline back. |
| 2\. First draft | Claude or ChatGPT | 20min | Generate full first draft from outline. Use the model whose tone you prefer for this topic. |
| 3\. Substance pass | You | 30min | Edit for technical accuracy, add real examples from your project history, correct any AI-fabricated facts. **This is the only irreplaceable step.** |
| 4\. Voice pass | Claude | 15min | "Rewrite this in the voice of Oluwa, FNSE, founder of Viscera Energy — direct, technical, evidence-led, no marketing fluff." Iterate until it sounds like you. |
| 5\. SEO pass | Claude | 10min | "Suggest title variants, meta description, three keyword variants, internal link opportunities to existing pages." |
| 6\. Publish | Decap CMS | 10min | Paste, format, set OG image, publish. |

Total: \~100 minutes per article. One article every two weeks \= 50 minutes/week of content time. Sustainable.

**Critical discipline:** the "substance pass" (step 3\) is the only step you cannot delegate to AI. Everything Viscera publishes must be technically accurate to your real experience. AI fabricates. You correct. That is the deal.

---

## 10\. Risk Register

The honest list of things that could derail this build, with mitigations.

| \# | Risk | Likelihood | Mitigation |
| :---- | :---- | :---- | :---- |
| 1 | Logo decision stalls again | High | Lock by end of Week 1\. If undecided, default to most-current corporate-document version. No further iteration. |
| 2 | Founder time gets pulled into Petropipe / EMBA / Yale | High | The 6-week sequence has buffer. If a week slips, the build slips one week. Do not try to compress; that is how attempts 1–4 died. |
| 3 | OEM logos unavailable at launch | Medium | Acceptable. Launch with text-only OEM grid in Week 3\. Add logos as they arrive. The grid still works. |
| 4 | Decap CMS auth complexity | Medium | If GitHub OAuth setup proves difficult, defer CMS by one week. Edit Markdown files directly via GitHub web UI in the interim — works fine. |
| 5 | n8n RFQ workflow breaks at launch | Low | Form has email fallback (mailto submission) until n8n flow is verified. |
| 6 | Domain SEO slow to recover from 2023 dormancy | High but expected | Trust restoration is a 90-day process. Continuous publishing \+ structured data \+ Google Business Profile recovery are the levers. Patience required. |
| 7 | Scope creep — desire to add features mid-build | Very high | This document closes that door. Feature requests post-launch only. |

---

## 11\. Sign-off

This Build Bible is locked when:

- Oluwa reviews and explicitly approves  
- The document is committed to the GitHub repo as `BUILD_BIBLE.md`  
- A start date is set for Week 1, Day 1

After sign-off, changes to scope require explicit re-approval and a corresponding adjustment to the timeline. No silent scope expansion.

The objective is simple: viscera-energy.com goes live in six weeks, stays live, and reflects the truth of Viscera Energy's thirteen-year operating record. Honestly. Defensibly. Globally.

Approved by: \_\_Modupe Famurewa\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_12th May 2026\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Start date for Week 1: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
