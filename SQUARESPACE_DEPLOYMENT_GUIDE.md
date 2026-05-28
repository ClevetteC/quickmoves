# Quick Move & Packing — Squarespace Deployment Guide
**For: Marsha / Deploying person**
**Prepared by: Clevette Coombs Consulting**

---

> **How to use this guide**
> Work through each phase in order. Do not skip ahead. Each phase has a checkbox at the end — check it off before moving to the next one.
> The files you will be copying from are in the `site_build/` folder on your computer.

---

## Before You Start — What You Need Ready

Complete these three account tasks before touching Squarespace. You cannot finish the deployment without them.

---

### Account Task 1: Get Your Google Tag Manager ID

Google Tag Manager is a free tool that tracks form submissions and phone clicks for reporting.

1. Go to **tagmanager.google.com**
2. Sign in with the business Google account (or create one)
3. Click **Create Account**
4. Account Name: `Quick Move & Packing`
5. Country: `United States`
6. Container Name: `quickmoveandpacking.com`
7. Target platform: `Web`
8. Click **Create** → agree to terms
9. You will see a popup with code. **Close it for now.** You just need the ID.
10. In the top bar, you will see your container ID — it looks like `GTM-XXXXXXX`
11. Write it down. You will need it in Phase 3 and Phase 4.

---

### Account Task 2: Build Your Two JotForm Forms

JotForm is a free form builder. These replace the old contact form.

**Form 1: Standard Quote Request**

1. Go to **jotform.com** and create a free account
2. Click **Create Form** → Start from Scratch → Classic Form
3. Name it: `Quick Move — Quote Request`
4. Add these fields in order:
   - **Full Name** (required)
   - **Phone Number** (required)
   - **Email Address** (required)
   - **Move Date** — use a Date Picker field (required)
   - **Moving From — Zip Code** (required)
   - **Moving To — Zip Code** (required)
   - **Home Size** — use a Dropdown: Studio, 1 Bedroom, 2 Bedrooms, 3 Bedrooms, 4+ Bedrooms, Office/Commercial
   - **Notes or Special Items** — use a Long Text field (optional)
5. Click **Settings → Emails**
6. Set the notification email to: `steven@myquickmove.com`
7. Click **Publish**
8. Look at the URL in your browser. It will contain a long number, like: `jotform.com/build/242387654321`
9. Copy that number. That is your **Quote Form ID**. Write it down.

**Form 2: Video Estimate**

1. Click **Create Form** again → Start from Scratch → Classic Form
2. Name it: `Quick Move — Video Estimate`
3. Add the same fields as Form 1, then add:
   - **Upload Your Walkthrough Video** — use a File Upload field
   - Set the file size limit to **1 GB**
   - In the field description, type: `Record in 1080p, not 4K. Walk slowly through each room.`
4. Click **Settings → Emails**
5. Set the notification email to: `steven@myquickmove.com`
6. Click **Add New Email** → add a CC notification to Frankie's email address
7. Click **Publish**
8. Copy the form ID number from the URL. That is your **Video Form ID**. Write it down.

---

### Account Task 3: Create Your Social Share Image

This is the image that appears when someone shares the website on Facebook, iMessage, or LinkedIn.

1. Go to **Canva** (canva.com) — free account is fine
2. Create a new design, size: **1200 × 630 pixels** (use Custom Size)
3. Use the orange brand color (`#F37623`), the Quick Move logo, and a short tagline like: *"Family-Owned Westchester Movers Since 1996"*
4. Download as a JPG file
5. Log into your Squarespace site
6. Go to **Website → Media Library** (or **Assets** in newer versions)
7. Upload the JPG
8. After uploading, click the image and copy its full URL (it will start with `https://static1.squarespace.com/...`)
9. Write it down. You will paste it in Phase 3.

---

**You now have everything you need. Move to Phase 1.**

---

## Phase 1 — URL Redirects

**Why this matters:** The old website had different page addresses. These redirects tell the internet to automatically send anyone visiting an old link to the correct new page.

**File to use:** `site_build/06_url_mappings.txt`

**Steps:**

1. In Squarespace, click **Settings** in the left sidebar
2. Scroll down and click **Advanced**
3. Click **URL Mappings**
4. Open the file `06_url_mappings.txt` from the `site_build` folder on your computer
5. Select all the lines that begin with `/` (not the instructions at the top)
6. Copy them
7. Paste them into the URL Mappings box in Squarespace
8. Click **Save**

**Test:** Open a new browser tab. Type the site's full address with one of the old paths, for example: `https://www.quickmoveandpacking.com/contact`. It should automatically go to the `/get-a-quote` page. Do this for two or three of the lines to confirm they work.

- [ ] Phase 1 complete

---

## Phase 2 — Custom Styling (Colors and Fonts)

**Why this matters:** This file controls the brand colors (navy, orange, cream), the typefaces (Inter for body text, Fraunces for headings), and the mobile "Call" button that sticks to the bottom of the screen on phones.

**File to use:** `site_build/01_custom_css.css`

**Steps:**

1. In Squarespace, click **Design** in the left sidebar
2. Click **Custom CSS**
3. Open `01_custom_css.css` from the `site_build` folder
4. Select everything (Ctrl+A on Windows, Cmd+A on Mac)
5. Copy it
6. Paste it into the Custom CSS box in Squarespace
7. Click **Save**

**Test:** Go to the site's homepage. Refresh the page. The colors should shift to the correct navy and orange brand palette. The body text should be clean and modern (Inter font). Headings should have a slightly editorial look (Fraunces font).

- [ ] Phase 2 complete

---

## Phase 3 — Site-Wide Header Code

**Why this matters:** This code does three things: (1) loads the fonts from Google, (2) tells Google and social platforms what the business is, where it is, and what it does — which helps with search rankings, and (3) activates Google Tag Manager tracking.

**File to use:** `site_build/02_header_injection.html`

**Before you paste — two replacements to make first:**

> Open `02_header_injection.html` in a plain text editor (Notepad on Windows, TextEdit on Mac). Do not use Word.

**Replacement 1 — GTM Container ID:**
- Find the text: `GTM-MFV3L5HH`
- Replace it with your actual GTM container ID from Account Task 1
- It appears once in this file
- (If the ID shown is already `GTM-MFV3L5HH` and that is your real ID, no change needed)

**Replacement 2 — Social Share Image URL:**
- Find the text: `https://www.quickmoveandpacking.com/og-image.jpg`
- It appears twice in the file
- Replace both with the Squarespace Media Library URL you copied in Account Task 3
- Example of what it should look like after: `https://static1.squarespace.com/static/abc123/og-image.jpg`

**Now paste:**

1. In Squarespace, click **Settings**
2. Click **Advanced**
3. Click **Code Injection**
4. Click into the **Header** box
5. Select all the text in the `02_header_injection.html` file
6. Copy and paste it into the Header box
7. Click **Save**

**Test:** Go to the homepage. Right-click anywhere on the page and choose **View Page Source**. Press Ctrl+F (or Cmd+F) and search for `MovingCompany`. If you see it, the schema code is live. Search for `GTM-` to confirm Tag Manager code is present.

- [ ] Phase 3 complete

---

## Phase 4 — Site-Wide Footer Code

**Why this matters:** This adds the mobile sticky call button (the navy bar that appears at the bottom of phones with the phone number) and the second half of the Google Tag Manager code.

**File to use:** `site_build/03_footer_injection.html`

**Before you paste — one replacement to make:**

> Open `03_footer_injection.html` in a plain text editor.

- Find: `GTM-MFV3L5HH`
- Replace with your actual GTM container ID (same ID you used in Phase 3)

**Steps:**

1. In Squarespace, go to **Settings → Advanced → Code Injection**
2. This time, scroll down and click into the **Footer** box
3. Select all text in `03_footer_injection.html`
4. Copy and paste into the Footer box
5. Click **Save**

**Test:** Open the website on your phone. Scroll down. A navy bar with "Call (914) 732-3733" should appear pinned to the bottom of the screen. Tapping it should open the phone's dial pad.

- [ ] Phase 4 complete

---

## Phase 5 — Replace JotForm Placeholders in the Embed Files

**Why this matters:** Two of the code files have placeholder text where the real form ID numbers go. You need to swap in the real IDs before pasting those files later.

**Files to update:**

**File 1:** `site_build/05_code_blocks/quote_form_embed.html`

1. Open this file in a plain text editor
2. Find the text: `JOTFORM_FORM_ID`
3. Replace it with the Quote Form ID number you wrote down in Account Task 2
4. Save the file

**File 2:** `site_build/05_code_blocks/video_estimate_embed.html`

1. Open this file in a plain text editor
2. Find the text: `VIDEO_JOTFORM_FORM_ID`
3. Replace it with the Video Form ID number from Account Task 2
4. Save the file

- [ ] Phase 5 complete

---

## Phase 6 — Build the Page Structure in Squarespace

**Why this matters:** Squarespace needs the pages to exist before you can paste content into them. You are building the skeleton of the site here — no content yet, just the pages and their web addresses.

### Step 6A: Create the navigation folders and pages

In Squarespace, go to **Pages** in the left sidebar.

**Main navigation pages (top level):**

Create these pages one by one. For each one, after clicking Add Page, click the settings gear icon next to it and set the **URL Slug** exactly as shown.

| Page Name | URL Slug to Set |
|-----------|----------------|
| Home | `/` (already exists) |
| Services | `services` |
| Areas We Serve | `areas-we-serve` |
| About | `about` |
| Reviews | `reviews` |
| FAQ | `faqs` |

**Services dropdown (Folder):**

1. Click **+** and add a **Folder** — name it `Services`
2. Inside the Services folder, add these pages:

| Page Name | URL Slug |
|-----------|----------|
| Local Moving | `services/local-moving` |
| Long Distance Moving | `services/long-distance-moving` |
| Commercial Moves | `services/commercial-moving` |
| Professional Packing | `services/packing-services` |
| Labor-Only Moving | `services/labor-only` |
| Storage Moves | `services/storage-moves` |
| Last-Minute Moves | `services/last-minute-moves` |
| Junk Removal | `services/junk-removal` |

**Areas dropdown (Folder):**

1. Add another **Folder** — name it `Areas`
2. Inside it, add these pages:

| Page Name | URL Slug |
|-----------|----------|
| Areas We Serve | `areas-we-serve` |
| White Plains | `movers/white-plains-ny` |
| Mamaroneck | `movers/mamaroneck-ny` |
| Rye | `movers/rye-ny` |
| Larchmont | `movers/larchmont-ny` |

**Not in navigation — add to Not Linked section:**

| Page Name | URL Slug |
|-----------|----------|
| Get a Quote | `get-a-quote` |
| Video Estimate | `video-estimate` |
| Moving Supplies | `moving-supplies` |
| Contact | `contact` |
| Thank You | `thank-you` |

**For the Thank You page only:** After creating it, go to its **Page Settings → SEO tab** and turn on **"Hide from search engines"**.

---

### Step 6B: Build the navigation header in Squarespace

Go to **Design → Navigation** (or edit it directly by clicking the nav bar in the editor).

Set it up to look like this:

```
[Logo]   Services ▾   |   Areas ▾   |   About   |   Reviews   |   FAQ      [Call (914) 732-3733]   [Get a Quote]
```

- The `Services` and `Areas` items should link to their folders
- The phone number in the top right should be a click-to-call link: `tel:+19147323733`
- The `Get a Quote` button should link to `/get-a-quote/`

---

### Step 6C: Build the footer in Squarespace

Go to **Design → Footer** (or click the footer in the page editor).

Set it up as four columns:

**Column 1:**
- Logo image
- Tagline: `Family-owned Westchester movers since 1996`
- `NY State License #38255`

**Column 2 — Services:**
- Local Moving → `/services/local-moving/`
- Long Distance Moving → `/services/long-distance-moving/`
- Commercial Moves → `/services/commercial-moving/`
- Professional Packing → `/services/packing-services/`
- Labor-Only Moving → `/services/labor-only/`
- Storage Moves → `/services/storage-moves/`
- Last-Minute Moves → `/services/last-minute-moves/`
- Junk Removal → `/services/junk-removal/`

**Column 3 — Areas:**
- White Plains
- Mamaroneck
- Rye
- Larchmont
- Westchester County
- NYC
- Fairfield County, CT

**Column 4 — Contact:**
- `240 Halstead Avenue, Harrison, NY 10528`
- `(914) 732-3733` — make it a click-to-call link: `tel:+19147323733`
- `steven@myquickmove.com`
- `Hours: Mon–Sat 8:00 AM – 6:00 PM`

**Bottom bar (copyright strip):**
`Copyright 2026 Quick Move & Packing Service · Privacy · NY DOT License #38255`
Add icons/links for Google, Angi, and Instagram.

- [ ] Phase 6 complete

---

## Phase 7 — Enter SEO Titles and Descriptions for Every Page

**Why this matters:** These are the words that appear in Google search results under the page title. They directly affect whether people click on the site.

For each page below:
1. In Squarespace, click the page
2. Go to **Page Settings** (the gear icon)
3. Click the **SEO tab**
4. Paste the title into **SEO Title**
5. Paste the description into **SEO Description**
6. Click **Save**

| Page | SEO Title | Meta Description |
|------|-----------|-----------------|
| / (Home) | Westchester Movers \| Quick Move & Packing Service (Harrison, NY) | Family-owned Westchester moving company with over 30 years of experience. Full-service packing, moving, and storage across Westchester, NYC, and the tri-state area. Free quote or video estimate. |
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

- [ ] Phase 7 complete

---

## Phase 8 — Homepage Code Blocks

**Why this matters:** The homepage has several custom-designed sections that need to be pasted in as Code Blocks. Squarespace's built-in editor cannot create these designs.

**How to add a Code Block in Squarespace:**
1. Go to the page you are editing
2. Click the `+` button to add a new content block
3. Scroll through the options and choose **Code**
4. Paste the code into the box that appears
5. Click **Apply** or **Save**

Paste these blocks in order from top to bottom on the homepage:

---

**Block 1: Trust Strip (goes just below the hero/banner image)**
File: `site_build/05_code_blocks/hero_trust_strip.html`
- Add a Code Block below the hero section
- Paste the full contents of this file

---

**Block 2: Service Teaser Grid**
This one uses Squarespace's native 3-column block — no code needed.
- Add a **3-column layout block** below the trust strip
- In each column, add a heading (service name) and a short description
- Link each column heading to the relevant service page

---

**Block 3: Why Families Choose Us Section**
File: `site_build/05_code_blocks/homepage_why_section.html`
- Add a Code Block in the Why section of the homepage
- Paste the full contents

---

**Block 4: Customer Reviews**
File: `site_build/05_code_blocks/homepage_reviews.html`
- Add a Code Block in the Reviews section
- Paste the full contents
- Note: This shows static review cards by default. When you are ready to display live Google reviews, follow the Elfsight instructions inside the file.

---

**Block 5: How It Works Steps**
File: `site_build/05_code_blocks/homepage_how_it_works.html`
- Add a Code Block in the How It Works section
- Paste the full contents

---

**Block 6: Town / Areas Cards**
File: `site_build/05_code_blocks/homepage_areas.html`
- Add a Code Block in the Areas section
- Paste the full contents

---

**Block 7: Bottom CTA Banner**
File: `site_build/05_code_blocks/cta_block_standard.html`
- Add a Code Block at the very bottom of the homepage (above the footer)
- Paste the full contents

- [ ] Phase 8 complete

---

## Phase 9 — Quote and Video Estimate Pages

**Why this matters:** These pages contain the contact forms that visitors fill out to request a quote.

**Quote Page (/get-a-quote/):**
1. Open this page in the Squarespace editor
2. Add a Code Block
3. Open `site_build/05_code_blocks/quote_form_embed.html`
4. Paste the contents into the Code Block
5. The form should appear as a preview

**Video Estimate Page (/video-estimate/):**
1. Open this page in the Squarespace editor
2. Add a Code Block
3. Open `site_build/05_code_blocks/video_estimate_embed.html`
4. Paste the contents

**Test both forms:**
- Fill out the quote form completely and submit it
- Check that `steven@myquickmove.com` receives the submission
- Fill out the video estimate form and upload a small test video
- Check that both Steven and Frankie receive that submission
- Repeat this test on a phone

- [ ] Phase 9 complete

---

## Phase 10 — Services Overview Page (/services/)

**Why this matters:** The main services page shows a grid of all eight services with descriptions and links.

1. Open the `/services/` page in the Squarespace editor
2. Below the page heading, add a Code Block
3. Open `site_build/05_code_blocks/services_overview_grid.html`
4. Paste the contents

- [ ] Phase 10 complete

---

## Phase 11 — Page-Level Schema for Service and Town Pages

**Why this matters:** Each service page and town page has its own block of code that tells Google specifically what that page is about. This is what generates the special Google search features (like star ratings and breadcrumb trails in search results).

**How to add page-level schema in Squarespace:**
1. Click the page (service or town page)
2. Click the **gear icon** to open Page Settings
3. Click the **Advanced tab**
4. Look for the box labelled **Page Header Code Injection**
5. Paste the code from the matching file
6. Click **Save**

Repeat this for every page in the table below:

| File in `site_build/04_page_schemas/` | Paste into this page |
|--------------------------------------|---------------------|
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

**Test one page after pasting:**
1. Go to **search.google.com/test/rich-results**
2. Type in the full URL of one of the pages you just set up (e.g., `https://www.quickmoveandpacking.com/services/local-moving/`)
3. Click **Test URL**
4. It should show green checkmarks for the schema

- [ ] Phase 11 complete

---

## Phase 12 — CTA Block on All Service and Town Pages

**Why this matters:** Every service page and town page needs the orange "Ready to plan your move?" call-to-action block at the bottom. This drives visitors to contact the business.

**File:** `site_build/05_code_blocks/cta_block_standard.html`

For each page listed below, do this:
1. Open the page in the Squarespace editor
2. Scroll to the very bottom of the page content
3. Add a Code Block as the last item
4. Paste the contents of `cta_block_standard.html`

Pages that need this block:

- /services/local-moving/
- /services/long-distance-moving/
- /services/commercial-moving/
- /services/packing-services/
- /services/labor-only/
- /services/storage-moves/
- /services/last-minute-moves/
- /services/junk-removal/
- /movers/white-plains-ny/
- /movers/mamaroneck-ny/
- /movers/rye-ny/
- /movers/larchmont-ny/
- /about/

- [ ] Phase 12 complete

---

## Phase 13 — Create the LLMs.txt Page

**Why this matters:** AI tools like ChatGPT, Perplexity, and Google's AI summaries read a file called `llms.txt` to understand what a business does. This helps the business show up in AI-generated answers when people ask about movers in Westchester.

1. In Squarespace, add a new page in the **Not Linked** section
2. Set the page name to: `LLMs`
3. Set the URL slug to: `llms.txt`
4. Go to **Page Settings → SEO → turn on "Hide from search engines"**
5. Add a Code Block on the page
6. Open `site_build/07_llms_txt/llms.txt` in a plain text editor
7. In the Code Block, type: `<pre>` then paste the full contents of the file, then type `</pre>`
8. It should look like this in the code block:

```
<pre>
# Quick Move & Packing Service
[...rest of the file contents...]
</pre>
```

9. Save the page

- [ ] Phase 13 complete

---

## Phase 14 — Final Testing Before Going Live

Go through every item on this checklist. Do not go live until every box is checked.

**Redirects**
- [ ] Visit `/contact-2-1` — confirms it redirects to `/areas-we-serve/`
- [ ] Visit `/contact` — confirms it redirects to `/get-a-quote/`
- [ ] Visit `/partners` — confirms it redirects to `/about/`

**Design and Fonts**
- [ ] Colors on the homepage are navy and orange (not default Squarespace blue)
- [ ] Body text is clean/modern (Inter font)
- [ ] Headings have a slightly editorial serif look (Fraunces font)

**Mobile**
- [ ] Open site on an iPhone or Android
- [ ] Navy "Call (914) 732-3733" bar is visible at the bottom of the screen
- [ ] Tapping the call bar opens the phone's dial pad
- [ ] All text is readable without zooming in
- [ ] Buttons are easy to tap with a thumb

**Forms**
- [ ] Fill out the quote form on `/get-a-quote/` and submit
- [ ] Confirm Steven receives the email at `steven@myquickmove.com`
- [ ] Fill out the video estimate form on `/video-estimate/` and submit
- [ ] Confirm Steven AND Frankie both receive that email
- [ ] Test both forms on a phone

**Schema (Google Rich Results)**
- [ ] Go to `search.google.com/test/rich-results`
- [ ] Test the homepage URL — should pass with no errors
- [ ] Test one service page URL — should pass
- [ ] Test one town page URL — should pass
- [ ] Test `/faqs/` — should pass

**SEO Titles**
- [ ] Click through five pages and confirm the browser tab shows the correct SEO title for each

**Footer**
- [ ] Footer shows correct address: 240 Halstead Avenue, Harrison, NY 10528
- [ ] Phone number is clickable (click-to-call link active)
- [ ] Copyright reads: Copyright 2026
- [ ] Instagram link goes to the correct Instagram profile

**Thank You Page**
- [ ] `/thank-you/` page exists
- [ ] It is set to noindex (hidden from search engines)

**CTA Blocks**
- [ ] Visit two service pages — orange CTA block is at the bottom of each

- [ ] Phase 14 complete — site is ready to go live

---

## Phase 15 — Go Live Steps

Complete these after the site passes all Phase 14 checks.

**Step 1: Connect or verify the domain**
- In Squarespace, go to **Settings → Domains**
- Confirm `quickmoveandpacking.com` is connected and showing a green active status

**Step 2: Verify the site in Google Search Console**
1. Go to **search.google.com/search-console**
2. Click **Add Property**
3. Enter: `https://www.quickmoveandpacking.com`
4. Follow the verification steps (Squarespace has a built-in integration — go to Settings → Advanced → Google Search Console to connect it directly)

**Step 3: Submit the sitemap to Google**
1. In Google Search Console, click **Sitemaps** in the left menu
2. Type: `sitemap.xml`
3. Click **Submit**
4. Google will begin crawling the site within a few days

**Step 4: Request indexing for priority pages**
1. In Google Search Console, click **URL Inspection**
2. Type each URL below and click **Request Indexing** for each:
   - `https://www.quickmoveandpacking.com/`
   - `https://www.quickmoveandpacking.com/services/local-moving/`
   - `https://www.quickmoveandpacking.com/movers/white-plains-ny/`
   - `https://www.quickmoveandpacking.com/movers/mamaroneck-ny/`
   - `https://www.quickmoveandpacking.com/movers/rye-ny/`
   - `https://www.quickmoveandpacking.com/movers/larchmont-ny/`
   - `https://www.quickmoveandpacking.com/faqs/`

**Step 5: Update Google Business Profile**
1. Go to **business.google.com**
2. Find the Quick Move & Packing listing
3. Click **Edit Profile → Contact information**
4. Update the website URL to: `https://www.quickmoveandpacking.com/`
5. Confirm the phone number matches: (914) 732-3733
6. Confirm the address matches: 240 Halstead Avenue, Harrison, NY 10528
7. Save

**Step 6: Configure Google Tag Manager conversion events**
1. Go to **tagmanager.google.com**
2. Open your Quick Move container
3. Create a **GA4 Configuration tag** — set it to fire on All Pages trigger
4. Create four conversion event tags:
   - `quote_form_submit`
   - `video_estimate_submit`
   - `phone_click`
   - `email_click`
5. Click **Submit** to publish the container
6. Go to your **GA4 account** and open **DebugView** — submit a test form and confirm the event appears

- [ ] Phase 15 complete — site is live and tracking is active

---

## Ongoing Maintenance — What Frankie Can Do Herself

**Frankie can change these herself by clicking directly on the page in Squarespace:**
- Page headlines, body paragraphs, subheadings
- Images and section backgrounds
- Button labels and links
- Navigation labels
- Footer text (address, phone, hours, tagline)
- SEO title and meta description for each page

**These require Marsha's help (they live inside Code Blocks):**
- Review count and star rating (update every 25 reviews or quarterly)
- Content inside the trust strip, why section, how-it-works, areas cards, review cards
- The services overview grid
- Form embed IDs if JotForm forms are ever rebuilt
- Social share image URL
- Any business hours, address, or email changes in the schema

**Frankie's simple rule:**
> If I can click on it and type, I can edit it.
> If I see a block with angle brackets and code, I call Marsha.

---

*Guide version 1.0 — May 2026*
*Prepared by Clevette Coombs Consulting for Quick Move & Packing Service*
