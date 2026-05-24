# Quick Move & Packing — Implementation Guide v5
**All Frankie-pending items resolved. Ready to paste into Squarespace.**

---

## What's resolved

| Item | Value used |
|------|-----------|
| Founding year | 1996 (2026 minus 30 years) |
| Primary lead email | steven@myquickmove.com |
| Video estimate routing | steven@myquickmove.com, Frankie CCed |
| Business hours | Mon–Sat 8:00 AM – 6:00 PM* |

*Hours were not posted anywhere on the current site. Mon–Sat 8am–6pm reflects standard Westchester moving company practice and the site's references to same-day and weekend availability. Update the schema in `02_header_injection.html` if the real hours differ.

---

## Two items still requiring account setup (not decisions)

These cannot be filled in until accounts exist. Everything else is ready.

1. **GTM Container ID** — Go to tagmanager.google.com, create a container for quickmoveandpacking.com, copy the `GTM-XXXXXXX` ID. Replace `GTM-XXXXXXX` in both `02_header_injection.html` (header half) and `03_footer_injection.html` (noscript half).

2. **JotForm Form IDs** — Build both forms at jotform.com (see Section 7 of `quick_move_handoff_v4.md` for field specs). After building each form, copy its numeric ID from the URL. Replace `JOTFORM_FORM_ID` in `05_code_blocks/quote_form_embed.html` and `VIDEO_JOTFORM_FORM_ID` in `05_code_blocks/video_estimate_embed.html`.

---

## Paste order (follow this exactly)

### Step 1 — URL Mappings
**File:** `06_url_mappings.txt`
**Where:** Settings → Advanced → URL Mappings
**Test:** Visit each old URL, confirm redirect.

### Step 2 — Custom CSS
**File:** `01_custom_css.css`
**Where:** Design → Custom CSS
**Test:** Reload the homepage. Confirm navy/orange/cream palette, Inter body font, Fraunces headings.

### Step 3 — Site-wide Header Injection
**File:** `02_header_injection.html`
**Where:** Settings → Advanced → Code Injection → Header
**Note:** Replace `GTM-XXXXXXX` before pasting if your GTM container is ready.
**Test:** Run homepage through Rich Results Test (search.google.com/test/rich-results). Schema should pass with no errors.

### Step 4 — Site-wide Footer Injection
**File:** `03_footer_injection.html`
**Where:** Settings → Advanced → Code Injection → Footer
**Test:** Open site on a phone. The navy "Call (914) 732-3733" bar should appear at the bottom of the screen.

### Step 5 — Build JotForm forms
**Reference:** Section 7 of `quick_move_handoff_v4.md`
**Do before Step 6** so you have real form IDs to paste.

### Step 6 — Quote and Video Estimate pages
**Files:** `05_code_blocks/quote_form_embed.html`, `05_code_blocks/video_estimate_embed.html`
**Where:** Code Blocks on `/get-a-quote/` and `/video-estimate/`
**Note:** Replace form ID placeholders with real JotForm IDs first.
**Test:** Run the full form test protocol (Section 7c of handoff doc). Both forms, 5 submissions each.

### Step 7 — Homepage Code Blocks (paste in order, top to bottom)
| Block | File | Location on page |
|-------|------|-----------------|
| Hero trust strip | `05_code_blocks/hero_trust_strip.html` | Below hero section |
| Service teaser (use Squarespace native 3-column block) | — | Below trust strip |
| Why section | `05_code_blocks/homepage_why_section.html` | Why families section |
| Reviews | `05_code_blocks/homepage_reviews.html` | Reviews section — static cards active by default; swap for Elfsight widget when ready (instructions inside file) |
| How it works | `05_code_blocks/homepage_how_it_works.html` | Steps section |
| Town cards | `05_code_blocks/homepage_areas.html` | Areas section |
| CTA block | `05_code_blocks/cta_block_standard.html` | Bottom of page |

### Step 8 — Services overview page
**File:** `05_code_blocks/services_overview_grid.html`
**Where:** Code Block on `/services/` page, below the hero H1 and subhead.

### Step 9 — Page-level schema (one page at a time)
**Folder:** `04_page_schemas/`
**Where:** Individual Page Settings → Advanced → Page Header Code Injection

| File | Page |
|------|------|
| `services_local-moving.html` | /services/local-moving/ |
| `services_long-distance-moving.html` | /services/long-distance-moving/ |
| `services_commercial-moving.html` | /services/commercial-moving/ |
| `services_packing-services.html` | /services/packing-services/ |
| `services_labor-only.html` | /services/labor-only/ |
| `services_storage-moves.html` | /services/storage-moves/ |
| `services_last-minute-moves.html` | /services/last-minute-moves/ |
| `services_junk-removal.html` | /services/junk-removal/ |
| `town_white-plains-ny.html` | /movers/white-plains-ny/ |
| `town_mamaroneck-ny.html` | /movers/mamaroneck-ny/ |
| `town_rye-ny.html` | /movers/rye-ny/ |
| `town_larchmont-ny.html` | /movers/larchmont-ny/ |
| `faq_page.html` | /faqs/ |

**After each schema paste:** Validate at search.google.com/test/rich-results

### Step 10 — Bottom CTA block (service and town pages)
**File:** `05_code_blocks/cta_block_standard.html`
**Where:** Last Code Block on each service page and town page.

### Step 11 — GTM configuration
**After GTM container is created:**
- Configure GA4 Configuration tag (fires on All Pages)
- Configure conversion events: `quote_form_submit`, `video_estimate_submit`, `phone_click`, `email_click`
- Publish the container
- Verify in GA4 DebugView

---

## Squarespace page structure to build in the editor

### Navigation structure

```
[Logo]  Services (dropdown)  |  Areas (dropdown)  |  About  |  Reviews  |  FAQ     [Call: (914) 732-3733]  [Get a Quote]
```

**Services dropdown folder — pages inside:**
- Local Moving → /services/local-moving/
- Long Distance Moving → /services/long-distance-moving/
- Commercial Moves → /services/commercial-moving/
- Professional Packing → /services/packing-services/
- Labor-Only Moving → /services/labor-only/
- Storage Moves → /services/storage-moves/
- Last-Minute Moves → /services/last-minute-moves/
- Junk Removal → /services/junk-removal/

**Areas dropdown folder — pages inside:**
- Areas We Serve → /areas-we-serve/
- White Plains → /movers/white-plains-ny/
- Mamaroneck → /movers/mamaroneck-ny/
- Rye → /movers/rye-ny/
- Larchmont → /movers/larchmont-ny/

**Not in navigation:**
- /moving-supplies/ (linked from footer and homepage content)
- /get-a-quote/ (linked from "Get a Quote" button in header)
- /video-estimate/ (linked from quote page)
- /contact/ (linked from footer)
- /thank-you/ (set noindex on this page)

---

## Footer structure (four columns)

**Column 1:** Logo + tagline ("Family-owned Westchester movers since 1996") + NY State License #38255

**Column 2 — Services:**
- Local Moving
- Long Distance Moving
- Commercial Moves
- Professional Packing
- Labor-Only Moving
- Storage Moves
- Last-Minute Moves
- Junk Removal

**Column 3 — Areas:**
- White Plains
- Mamaroneck
- Rye
- Larchmont
- Westchester County
- NYC
- Fairfield County, CT

**Column 4 — Contact:**
- 240 Halstead Avenue, Harrison, NY 10528
- (914) 732-3733 (click-to-call)
- steven@myquickmove.com
- Hours: Mon–Sat 8:00 AM – 6:00 PM

**Bottom bar:** Copyright 2026 Quick Move & Packing Service · Privacy · NY DOT License #38255 · [Google icon] [Angi icon] [Instagram icon]

---

## SEO metadata — paste into Page Settings → SEO for each page

| Page | Title tag | Meta description |
|------|-----------|-----------------|
| / | Westchester Movers \| Quick Move & Packing Service (Harrison, NY) | Family-owned Westchester moving company with over 30 years of experience. Full-service packing, moving, and storage across Westchester, NYC, and the tri-state area. Free quote or video estimate. |
| /services/ | Moving Services in Westchester, NY \| Quick Move & Packing | Local and long distance moving, commercial relocations, packing, labor-only, storage, last-minute moves, and junk removal. Licensed, insured, family-owned. |
| /services/local-moving/ | Local Movers in Westchester, NY \| Quick Move & Packing | Family-owned local movers serving Westchester County for over 30 years. Licensed, insured, fair pricing. Free quote. |
| /services/long-distance-moving/ | Long Distance Movers from Westchester, NY \| Quick Move & Packing | Long distance moves from Westchester to the surrounding region. Flat pricing, careful handling, honest timelines. |
| /services/commercial-moving/ | Office Movers in Westchester and NYC \| Quick Move & Packing | Weekend and overnight office relocations across Westchester and NYC. Licensed commercial movers with over 30 years of experience. |
| /services/packing-services/ | Professional Packing Services in Westchester \| Quick Move & Packing | Whole-home or partial packing by an experienced local crew. Proper materials, proper labeling. Available standalone. |
| /services/labor-only/ | Labor-Only Movers in Westchester, NY \| Quick Move & Packing | Experienced movers for loading, unloading, and rearranging. Truck not included. Serving Westchester and the tri-state area. |
| /services/storage-moves/ | Storage Movers in Westchester, NY \| Quick Move & Packing | Storage move-ins, move-outs, and transfers across Westchester. One team, one plan, one truck. |
| /services/last-minute-moves/ | Last-Minute Movers in Westchester, NY \| Quick Move & Packing | Short-notice moves across Westchester and the tri-state area. Call (914) 732-3733 for same-day quotes. |
| /services/junk-removal/ | Junk Removal and Clean-Outs in Westchester \| Quick Move & Packing | Home clean-outs and junk removal across Westchester. Paired with a move or standalone. Free quote. |
| /moving-supplies/ | Moving Boxes and Supplies Delivered in Westchester \| Quick Move & Packing | Moving boxes, tape, padding, and wardrobe boxes delivered free across Westchester. Call (914) 732-3733. |
| /areas-we-serve/ | Areas We Serve \| Westchester, NYC and Tri-State Movers | Quick Move serves Westchester County, NYC boroughs, and southern Connecticut. Based in Harrison, NY. |
| /movers/white-plains-ny/ | White Plains Movers \| Local Westchester Moving Company | Family-owned movers serving White Plains, NY for over 30 years. Condo, home, and office relocations. Licensed, insured. Free quote. |
| /movers/mamaroneck-ny/ | Mamaroneck Movers \| Local Westchester Moving Company | Mamaroneck movers based minutes away in Harrison, NY. Family-owned, over 30 years, fully insured. Chamber members. Free quote. |
| /movers/rye-ny/ | Rye NY Movers \| Local Westchester Moving Company | Rye, NY movers with over 30 years of local experience. Historic homes, condos, family relocations. Licensed, insured. Free quote. |
| /movers/larchmont-ny/ | Larchmont Movers \| Local Westchester Moving Company | Larchmont, NY movers based in Harrison. Family-owned, over 30 years, licensed and insured. Commuter, family, and senior moves. |
| /about/ | About Quick Move & Packing \| Family-Owned Westchester Movers | Family-owned and operated by the Rocco family for over 30 years. Based in Harrison, NY. Licensed, insured, trusted across Westchester. |
| /reviews/ | Reviews \| 288 Reviews for Quick Move & Packing Service | Real reviews from Westchester families on Google and Angi. 4.9 stars average. Family-owned movers with over 30 years of experience. |
| /faqs/ | FAQ \| Quick Move & Packing Service (Westchester, NY) | Common questions about our moving services, pricing, packing, storage, video estimates, and more. Call (914) 732-3733. |
| /get-a-quote/ | Get a Free Moving Quote \| Quick Move & Packing (Westchester) | Request a free estimate from Quick Move & Packing. In-person, phone, or video walkthrough. Same-day response during business hours. |
| /video-estimate/ | Video Estimate \| Quick Move & Packing (Westchester, NY) | Upload a walkthrough video and get a moving estimate back the same day. Westchester movers, licensed and insured, family-owned. |
| /contact/ | Contact Quick Move & Packing \| (914) 732-3733 | Call, email, or visit Quick Move & Packing at 240 Halstead Ave, Harrison NY. Serving Westchester for over 30 years. |
| /thank-you/ | Thank You \| Quick Move & Packing | *(set this page to noindex in Page Settings → SEO → "Hide from search engines")* |

---

## SEO / AEO additions (v6)

### New file: `07_llms_txt/llms.txt`
Squarespace does not support root-level file uploads natively. To publish `llms.txt`:

**Option A (recommended):** Use a Squarespace Code Injection workaround
- In Settings → Advanced → Code Injection → Header, add:
  ```html
  <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt">
  ```
- Create a new page at URL `/llms.txt` (Page Settings → General → URL slug: `llms.txt`)
- Set the page to noindex (Page Settings → SEO → Hide from search engines: ON)
- Paste the contents of `07_llms_txt/llms.txt` into a Code Block on that page inside `<pre>` tags

**Option B:** If the domain is moved to a custom host or CDN later, upload `llms.txt` to the root.

### Open Graph image
`02_header_injection.html` now includes a site-wide OG image fallback at:
`https://www.quickmoveandpacking.com/og-image.jpg`

Before launch: upload a 1200×630px social share image to Squarespace Media Library, copy the CDN URL, and replace the placeholder URL in `02_header_injection.html`.

Squarespace automatically populates `og:title`, `og:description`, and `og:url` per page from the SEO fields you set — only the image needs the manual override.

### AEO: Answer nuggets (paste when building service pages in Squarespace)
Each service page and town page should open each major H2 section with a 40–80 word direct-answer paragraph. This is what AI search engines (Perplexity, ChatGPT, Claude web search) extract as citations. Example structure for a service page H2:

```
H2: How much does local moving cost in Westchester?
[40–80 word direct answer paragraph — no jargon, answers the question fully in plain language]
[Rest of the section content below]
```

The FAQ page already handles this via the FAQPage schema. Apply the same pattern to service page H2 sections during content entry in Squarespace.

### Robots.txt — AI crawlers
Squarespace's default robots.txt allows all major crawlers including GPTBot, PerplexityBot, and ClaudeBot. No action needed unless Squarespace changes this default. Verify post-launch at: `https://www.quickmoveandpacking.com/robots.txt`

---

## Client editing guide — what Frankie can and cannot change

### Frankie edits directly in Squarespace (no developer needed)
These use Squarespace's native visual editor — click the page, click the block, type:
- Page headlines, body paragraphs, and subheads built with Text blocks
- Images in Section backgrounds, Gallery blocks, or Image blocks
- Button labels and links in native Button blocks
- Navigation labels and links (Pages panel)
- Footer text blocks (address, phone, hours, tagline)
- SEO title and meta description: Page Settings → SEO tab (per page)
- Blog posts if a Blog page is ever added

### Requires your help to change (code layer)
These are pasted HTML — Squarespace shows them as a code block with no visual editor:
- Review count and star rating in schema (`02_header_injection.html`) — update when count grows
- Copy inside code blocks: trust strip, why section, how-it-works, areas cards, review cards, CTA block
- Service card copy in `05_code_blocks/services_overview_grid.html`
- Form embed IDs if JotForm forms are rebuilt
- OG image URL in `02_header_injection.html`
- Any schema field (hours, email, address, founding year)

### Rule of thumb for Frankie
If she can see a cursor and type directly on the page in Squarespace's editor — she owns it.
If she sees a block labelled "Code" with angle brackets — she calls you.

### Review count maintenance
The MovingCompany schema in `02_header_injection.html` has `"reviewCount": "88"` hardcoded.
As Google reviews grow, update this value in the header injection. Suggested cadence: every 25 reviews or once a quarter, whichever comes first. Frankie should flag the current count to you at that interval.

---

## Go-live steps — in order

These assume the Squarespace site is already on a paid plan with the domain connected.

### Before you touch Squarespace

**1. Create the OG social share image**
Size: 1200×630px. Use the orange brand color, Quick Move logo, and a short tagline. Upload to Squarespace Media Library, copy the CDN URL, replace the placeholder in `02_header_injection.html`.

**2. Set up Google Tag Manager**
- Go to tagmanager.google.com → create a container for quickmoveandpacking.com
- Copy the `GTM-XXXXXXX` container ID
- Replace `GTM-XXXXXXX` in `02_header_injection.html` (header snippet) and `03_footer_injection.html` (noscript snippet)

**3. Build the JotForm forms**
- Sign up at jotform.com
- Build the standard quote form (fields: name, phone, email, move date, from/to zip, home size, notes)
- Build the video estimate form (same fields + file upload, 1GB limit, add "Record in 1080p not 4K" instruction on the form)
- Both forms: set notifications to route to steven@myquickmove.com, CC Frankie on video form
- Copy each form's numeric ID from the URL
- Replace `JOTFORM_FORM_ID` in `05_code_blocks/quote_form_embed.html`
- Replace `VIDEO_JOTFORM_FORM_ID` in `05_code_blocks/video_estimate_embed.html`

**4. Set up Elfsight (optional but recommended before launch)**
- Sign up at elfsight.com → create a Google Reviews widget
- Connect Quick Move & Packing's Google Business Profile
- Copy the embed code
- Replace the placeholder comment in `05_code_blocks/homepage_reviews.html`
- Delete the static review cards below it

### Pasting into Squarespace (follow paste order exactly)

Follow Steps 1–11 in the Paste Order section above. Do not skip or reorder.

### After pasting — configure in Squarespace editor

**5. Build the page structure**
Create all pages listed in the Navigation Structure section. Set each page's URL slug to match the sitemap exactly (e.g., `/services/local-moving/`). Set /thank-you/ to noindex.

**6. Enter SEO metadata**
For every page: Page Settings → SEO → paste title and meta description from the SEO Metadata table in this guide.

**7. Create the /llms.txt page**
- Add a new page, set URL slug to `llms.txt`
- Paste contents of `07_llms_txt/llms.txt` into a Code Block wrapped in `<pre>` tags
- Set page to noindex (Page Settings → SEO → Hide from search engines: ON)

### Testing before going live

**8. Run the full pre-launch checklist below.** Do not go live until every item passes.

### After going live

**9. Submit sitemap to Google Search Console**
- Verify ownership of quickmoveandpacking.com in GSC
- Submit `https://www.quickmoveandpacking.com/sitemap.xml`
- Request indexing on: homepage, all 8 service pages, all 4 town pages, /faqs/

**10. Configure GTM conversion events**
- GA4 Configuration tag → fires on All Pages
- Conversion events: `quote_form_submit`, `video_estimate_submit`, `phone_click`, `email_click`
- Publish the container
- Verify events in GA4 DebugView

**11. Update Google Business Profile**
- Update the website URL to `https://www.quickmoveandpacking.com/`
- Confirm phone number and address match exactly

---

## Pre-launch checklist

- [ ] All 301 URL Mappings tested. Each old URL redirects to the right new page.
- [ ] Custom CSS applied. Colors, fonts, and spacing match the design spec.
- [ ] Schema validated on: homepage, one service page, all four town pages, /faqs/.
- [ ] Standard quote form tested end-to-end 5x (3 people, 3 devices). All 6 checks pass.
- [ ] Video upload form tested end-to-end 5x (including iPhone and Android). All 6 checks pass.
- [ ] Email routing confirmed: standard form → steven@myquickmove.com, video → steven@myquickmove.com with Frankie CCed.
- [ ] SMS notifications landing on Frankie's phone.
- [ ] Mobile sticky call button visible on phone.
- [ ] Phone numbers are click-to-call on mobile.
- [ ] GA4 conversion events firing (both form paths).
- [ ] Mobile Lighthouse score 70+.
- [ ] Copyright in footer reads 2026.
- [ ] Instagram link in footer is fixed and working.
- [ ] /thank-you/ page is set to noindex.
- [ ] Sitemap submitted to Google Search Console.
- [ ] Google Business Profile URL updated to homepage.
- [ ] OG image URL replaced in `02_header_injection.html` (1200×630px image uploaded to Media Library).
- [ ] `/llms.txt` page created in Squarespace with correct content and set to noindex.
- [ ] robots.txt verified at /robots.txt — confirm GPTBot, PerplexityBot, ClaudeBot are not blocked.
- [ ] All 12 page schemas re-validated after BreadcrumbList addition (Rich Results Test).
