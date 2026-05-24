# Claude Code SEO/AEO + CMS: The Integrated Build System (April 2026)

> *The definitive practitioner guide — referencing Anthropic's official resources, the Claude Code Skills ecosystem, and field-tested workflows from real builds.*

***

## Executive Summary

The core insight this guide delivers: **SEO/AEO and CMS are not separate phases — they must be built simultaneously, from the first prompt.** Going back to retrofit either after a site is built is the most common and most expensive mistake in AI-assisted web development.

Anthropic's official Claude Code best practices document (at `code.claude.com/docs/en/best-practices`) establishes that Claude performs best with a clear upfront target and specific instructions — "specificity leads to better alignment with expectations". Applied to websites, this means the SEO architecture, CMS content model, and AEO content structure must all be defined in the `CLAUDE.md` before Claude writes a single line of code. A practitioner who rebuilt their site with Claude Code reported that it "handled the initial build impressively fast. But it did not handle SEO optimization, Google Analytics integration, security hardening, or Google PageSpeed tuning on its own. These are the things that separate an amateur website from a production-ready one — I had to drive all of them myself because I had spent years understanding why they matter."[^1][^2]

This guide makes that expertise explicit, repeatable, and injectable into every Claude Code build.

***

## Part 1: Why AI-Built Sites Fail — The Root Cause, Not the Symptoms

Before fixing anything, understand the actual mechanism of failure. A LinkedIn audit of vibe-coded sites identified these core technical errors — *not* content problems:[^3]

- **~90% of content hidden inside accordions/tab states** — content exists in the DOM but is interaction-gated, making it invisible to crawlers
- **Tooltip-driven text acting as primary content** — hover/click interactions as main content; bots never trigger these
- **JavaScript-fragmented headings** — decorative `<span>` elements breaking semantic heading structure
- **Duplicate content across DOM** — device-based rendering variations creating canonical confusion
- **Missing Open Graph tags** — broken social previews on every shared link
- **No Twitter/X cards** — poor sharing experience on X/LinkedIn
- **No structured data** — Google and AI engines lack context to understand and cite the content
- **H1 missing keywords** — weakest possible ranking signal on every page
- **Hero image not optimized** — LCP failure on every page load
- **Images missing dimensions** — layout shift (CLS) failure on page render

The single largest failure across all AI-built sites is **client-side rendering (CSR)**. AI training data is dominated by React patterns that default to CSR because most examples were written before SEO implications were understood. When Claude Code follows these patterns, it creates sites that look perfect in a browser but are invisible to search engines — Googlebot sees a `<div id="root">` and nothing else.[^4][^5]

**The 5-second test every site must pass:**
```
Right-click any page → View Page Source
If you can read your actual headlines, body text, and navigation in the source HTML → PASS
If you see mostly <script> tags and an empty <body> → FAIL (CSR problem)
```

AI search engines (Perplexity, ChatGPT, Claude web search) are even more demanding — many don't render JavaScript at all and scrape raw HTML only. A CSR site is not just invisible to Google; it is completely excluded from the AI discovery ecosystem.[^5]

***

## Part 2: The Official Claude Code Resources You Need

### Anthropic's Official Documentation

| Resource | URL | What It Provides |
|---|---|---|
| **Claude Code Best Practices** | `code.claude.com/docs/en/best-practices` | Official workflow, CLAUDE.md setup, agentic patterns[^6] |
| **Anthropic Engineering Blog** | `anthropic.com/engineering/claude-code-best-practices` | Deep-dive on CLAUDE.md, specificity, iteration[^1] |
| **84 Claude Code Best Practices (GitHub)** | `github.com/shanraisshan/claude-code-best-practice` | Community-compiled, 20K+ stars, covers CLAUDE.md, skills, debugging[^7] |

Anthropic's official recommended workflow for any build is: **Explore → Plan → Implement → Commit**. For SEO-critical sites, the Plan phase must include defining the rendering strategy, CMS content model, and SEO field schema *before* implementation begins.[^7]

### The Official Claude Code Skills Ecosystem

Claude Code Skills are reusable, installable workflows — the official mechanism for encoding domain expertise into repeatable Claude Code behaviors. The following skills are directly relevant to SEO, AEO, and CMS:

#### SEO-Specific Skills

**`jezweb/claude-skills` → `seo-meta` skill**
Generates complete SEO meta tags for every page — title patterns, meta descriptions, Open Graph, Twitter Cards, and JSON-LD structured data (LocalBusiness, Service, FAQ, BreadcrumbList).[^8][^9]

Install:
```bash
npx playbooks add skill jezweb/claude-skills --skill seo-meta
```

**`AgriciDaniel/claude-seo` (full SEO toolkit)**
13 sub-skills for SEO including sitemap generation, E-E-A-T grading, and technical auditing. Available at `github.com/AgriciDaniel/claude-seo`.[^10]

**Universal SEO Skill (15 sub-skills, 12 parallel subagents)**
Covers technical SEO, E-E-A-T, schema markup, GEO/AEO, local SEO, Google APIs.[^11]

Install and use:
```bash
# Run a technical SEO audit
claude -p 'Run an SEO audit on the pages in ./pages/.
Check for: missing meta descriptions, duplicate titles,
missing alt text, broken internal links, and schema markup issues.'
```

**SEO Skill via FastMCP (from official Claude Code skill registry)**
Covers robots.txt, sitemap, meta tags, structured data, and Core Web Vitals. Includes SEO factor weighting: Content quality (~40%), Backlinks (~25%), Technical SEO (~15%), Core Web Vitals (~10%), On-page (~10%).[^12]

#### CMS Skills

**`jezweb/claude-skills` → `sveltia-cms` skill** — the most important CMS skill for client-handoff sites (covered in depth in Part 4):[^13][^14]
```bash
npx skills add jezweb/claude-skills
# or
git clone https://github.com/jezweb/claude-skills.git ~/.claude/skills/sveltia-cms
```

***

## Part 3: The Integrated Build Approach — SEO + AEO + CMS Together

### Why Integration, Not Sequence

The instinct to "build the site first, then add SEO, then bolt on a CMS" is the root cause of most failures. Here is why integration is superior:

| Approach | What Happens |
|---|---|
| **Build → then SEO → then CMS** | Claude rewrites components it already built. CMS schema conflicts with existing data models. Rendering strategy may be locked in CSR and require major refactoring. |
| **Build all three simultaneously** | Rendering strategy (SSR/SSG) is set from page 1. CMS content model defines the data that generates meta tags — no disconnection. SEO fields are native to every CMS document type. |

The key is encoding the complete integrated architecture into `CLAUDE.md` before Claude Code writes any code.

### The Master CLAUDE.md for Integrated Builds

This is the `CLAUDE.md` block that ensures Claude Code builds SEO/AEO/CMS correctly from the first prompt:

```markdown
# [Project Name] — Build Standards

## RENDERING (NON-NEGOTIABLE)
- ALL pages that appear in search results MUST use SSR (Server-Side Rendering) 
  or SSG (Static Site Generation)
- NEVER use useEffect or fetch() to load content that must be indexed
- Dashboard pages and authenticated routes may use client-side rendering
- Test: run `curl https://localhost:3000/[any-page]` — all headlines, body 
  text, and navigation must be visible in the raw HTML response

## SEO STACK (BUILD INTO EVERY PAGE TEMPLATE)
Title: unique, 55–60 chars, primary keyword first
Meta description: unique, 150–160 chars, includes action phrase
Canonical: self-referencing on every page (https://, trailing slash consistent)
Robots: index,follow on public pages; noindex on /admin, /login, /thank-you

## OPEN GRAPH + TWITTER CARDS (EVERY PAGE)
og:title, og:description, og:image (1200×630px), og:url, og:type, og:site_name
twitter:card=summary_large_image, twitter:title, twitter:description, twitter:image

## JSON-LD SCHEMA (INJECT IN <head> PER PAGE TYPE)
Homepage: Organization + WebSite (with SearchAction)
Blog posts: Article (author Person entity, datePublished, dateModified)
Service pages: Service (Organization as provider)
FAQ sections: FAQPage (matching visible Q&A content only)
All non-homepage: BreadcrumbList
Author bios: Person (with sameAs to LinkedIn)

## CRAWL GOVERNANCE (GENERATE ON FIRST BUILD)
robots.txt: Allow Googlebot, Bingbot, GPTBot, PerplexityBot, ClaudeBot, Claude-Web
Disallow: /admin/, /api/private/, /login/, /_next/
sitemap.xml: HTTP 200 + indexable + canonical pages only; lastmod from Git
llms.txt: site description + key content URLs (root level)

## IMAGE STANDARDS
Format: WebP (convert all JPEGs/PNGs at build time using sharp)
Always: explicit width and height on every <img>
Hero image: fetchpriority="high"
All images: descriptive alt text (not "image1.jpg")
Below-fold images: loading="lazy"

## CMS CONTENT MODEL
[Selected CMS] manages: [blog posts, services, team bios — define here]
Every CMS document type includes these SEO fields:
  - metaTitle (string, max 60 chars)
  - metaDescription (text, max 160 chars)  
  - ogImage (image upload, 1200×630px)
  - canonicalUrl (url, optional override)
  - noIndex (boolean, default false)
CMS admin accessible at: /admin or /[cms-route]
CMS content stored as: [Markdown in /content | Sanity dataset | Payload DB]

## PERFORMANCE TARGETS
LCP: < 2.5 seconds
INP: < 200ms  
CLS: < 0.1
Third-party scripts (analytics, chat): load via defer or after page interactive

## AEO CONTENT STRUCTURE
Every service/landing page: include FAQ section with 3–5 Q&As + FAQPage schema
Content pages: open each major section with 40–80 word direct-answer paragraph
Author attribution: every content page has named author with bio and Person schema
```

***

## Part 4: The Simplest CMS for Non-Technical Clients

This is the most-asked question in Claude Code web development communities in 2026. The answer depends on one key variable: does the client need to edit **only content/text**, or do they also need to **add/remove pages**?

### The Simplest Path: Sveltia CMS (for Static Sites)

For the majority of coach, consultant, and SMB client sites built on Astro or Next.js static generation, **Sveltia CMS** is the fastest, most client-friendly, zero-infrastructure option available in 2026.[^15][^14]

**What it is:** A Git-backed CMS — a modern, actively maintained successor to Decap/Netlify CMS with a 5× smaller bundle (<500KB vs 1.5–2.6MB for competitors), 270+ fixes over its predecessor, and a clean web-based editor that requires no Git knowledge from the client.[^14][^13]

**Why it's the simplest for non-technical clients:**
- The client logs into a web UI at `/admin` (or your custom path) on their own domain
- They see a clean editor with labeled fields (Blog Posts, Services, Team Members)
- They write content in a rich text editor — no Markdown, no code, no Git commands
- When they save, changes commit to GitHub automatically and trigger a Vercel/Netlify deploy
- The site is live with their changes within 60 seconds
- **No CMS server to manage, no monthly CMS cost, no vendor lock-in** — content lives in the GitHub repo

**Install via Claude Code skill:**
```bash
npx skills add jezweb/claude-skills
# Then ask Claude: "Add Sveltia CMS to this Astro project 
# with collections for blog posts, services, and team members.
# Include SEO fields (metaTitle, metaDescription, ogImage, noIndex) 
# in every collection. Configure OAuth via Cloudflare Workers."
```

**Sveltia CMS compatibility matrix:**
| Framework | Status | Notes |
|---|---|---|
| Astro | ✅ First-class | Best pairing |
| Next.js (SSG) | ✅ Supported | Static export required |
| Hugo / Jekyll / 11ty | ✅ Supported | Framework-agnostic |
| SvelteKit | ✅ Supported | — |
| Next.js (SSR/App Router) | ⚠️ Partial | SSR pages need API route for preview |

**When NOT to use Sveltia CMS:**
- Client needs real-time collaborative editing (multiple people editing simultaneously) → Use Sanity
- Client needs drag-and-drop visual page building → Use Webflow or Builder.io
- Complex relational content, e-commerce, or authenticated users → Use Payload CMS

### The Sanity Path (for Dynamic/Complex Sites)

For clients on dynamic Next.js sites with complex content needs (membership, multi-author, product catalogs), **Sanity Studio** provides the best balance of client-friendliness and developer control.[^16][^17]

Sanity has an official **SEO schema system** — the `seoType` schema object is a reusable content block that attaches to every document type with fields for metaTitle, metaDescription, canonical URL, OG image, and noIndex toggle. The client sees these as labeled form fields in Sanity Studio — no technical understanding required.[^16]

**Claude Code integration:** Sanity has a native MCP server. Claude Code can create collections, define schemas, and insert content entries via natural language prompts.[^18]

### The Payload CMS Path (for Developer-Led Full-Stack Apps)

Payload CMS is the best choice when the developer wants full ownership of the data model, authentication, and admin panel. Payload auto-generates a full admin UI from collection definitions — no frontend work required for the admin panel. The official Payload MCP plugin connects Claude Code directly to content management.[^19][^20]

**Practical reality check:** Payload requires more setup time than Sveltia or Sanity for client handoff, but gives developers complete control and has no ongoing CMS costs.[^21]

### CMS Decision Matrix for Claude Code Projects

| Client Type | Tech Stack | Best CMS | Reason |
|---|---|---|---|
| Coach/consultant, non-technical, blog + pages | Astro or Next.js SSG | **Sveltia CMS** | Zero cost, clean editor, no CMS server[^14] |
| SMB with services + blog, non-technical | Next.js | **Sanity** | Real-time studio, built-in SEO schema[^17] |
| Agency managing 5+ client sites | Any | **ElmapiCMS self-hosted** | $59 one-time, unlimited clients, MCP server[^18] |
| Complex app, e-commerce, membership | Next.js | **Payload CMS** | Full control, open-source, MCP plugin[^20] |
| Client already familiar with WP | Next.js headless | **WordPress headless** | Familiar admin + modern frontend[^22] |

***

## Part 5: The Integrated Build Workflow — Step by Step

This is the exact sequence that ensures SEO, AEO, and CMS are built together correctly.

### Step 0: Before Writing Any Code (10 minutes)

Create two files in the project root before opening Claude Code:

**`CLAUDE.md`** — copy the master template from Part 3 and fill in the project-specific values (domain, CMS choice, content types, target keywords)

**`project-brief.md`** — a brief document Claude will read that contains:
- Site name, domain, target audience
- Page list with URL structure
- CMS collections needed (e.g., "Blog Posts, Services, Team Members, Case Studies")
- Brand colors, fonts, any design assets

Anthropic's official guidance: *"Claude can infer intent, but it can't read minds. Specificity leads to better alignment with expectations."* These two files are how you give Claude the complete picture upfront.[^1]

### Step 1: The Foundation Build Prompt

```
Read CLAUDE.md and project-brief.md before writing any code.

Build this site using [Astro | Next.js] with [Sveltia CMS | Sanity | Payload].

RENDERING: All public pages must use SSG (static generation). No useEffect for 
content that must be indexed. Verify by checking that curl on any page returns 
full HTML content.

CMS SETUP: Install and configure [chosen CMS]. Create collections for: 
[list from brief]. Add SEO fields to every collection: metaTitle, metaDescription, 
ogImage, canonicalUrl, noIndex.

SEO FOUNDATION (build simultaneously with pages):
1. Generate robots.txt allowing all crawlers including GPTBot and ClaudeBot
2. Generate dynamic sitemap.xml from all public pages
3. Generate llms.txt at root with site description and key URLs
4. Add complete meta tag layer (SEO + OG + Twitter) to every page template
5. Add JSON-LD schema to every page type per CLAUDE.md
6. Convert all images to WebP at build time using sharp
7. Add explicit width/height to all images; fetchpriority="high" on hero

Build the CMS and SEO simultaneously — not sequentially.
```

### Step 2: The Verification Pass

After the initial build, run this audit before any content is added:

```
Perform the following verification checks on the completed build:

RENDERING CHECK:
- Run curl on the homepage, a blog page, and a service page
- Confirm all headline text, body content, and navigation appear in raw HTML
- Flag any page where content requires JavaScript to render

SEO CHECK:
- Confirm every page template has unique title, meta description, canonical
- Confirm robots.txt allows Googlebot, GPTBot, PerplexityBot, ClaudeBot
- Confirm sitemap.xml exists and includes only public, canonical pages
- Confirm llms.txt exists at root
- Validate all JSON-LD schema blocks (output the schema for each template)
- Confirm all images have explicit width/height and alt text
- Confirm hero image has fetchpriority="high"

CMS CHECK:
- Confirm /admin route loads the CMS editor
- Confirm SEO fields (metaTitle, metaDescription, ogImage) appear in CMS editor
- Confirm changes in CMS generate correct HTML output on rebuild

Output: Pass/Fail for each check with specific file path for any failure.
Fix all failures before reporting complete.
```

### Step 3: AEO Layer (15 minutes after foundation)

```
Add AEO (Answer Engine Optimization) enhancements to this site:

1. FAQ sections: Add a FAQ section with 3–5 Q&As to every service page 
   and landing page. Add FAQPage JSON-LD schema matching the visible Q&A content.

2. Answer nuggets: On all blog posts and service pages, add a 40–80 word 
   direct-answer paragraph at the start of each major H2 section.

3. Author attribution: Add a named author bio block to all content pages 
   with Person schema (name, jobTitle, url, sameAs to LinkedIn).

4. Update llms.txt: Include the site's key FAQ topics and service areas 
   so AI systems understand the site's content scope.
```

### Step 4: Google Search Console Setup (Claude Code prompt)

```
Set up Google Search Console integration for this site:
1. Generate a GSC verification HTML tag for insertion in <head>
2. Create a GSC submission script that:
   - Submits sitemap.xml to GSC
   - Requests indexing for the homepage, all service pages, and the blog index
3. Add GA4 tracking script with proper defer loading 
   (must not block page rendering or affect Core Web Vitals)
Output the GSC meta tag to insert and confirm all scripts are deferred.
```

***

## Part 6: Solving the Most Common Failures — The 30-Prompt Fix

For sites already built (vibe-coded or AI-generated) that are failing SEO, use this structured fix sequence. A practitioner on LinkedIn documented applying this system and getting sites to pass Core Web Vitals and rank on Google:[^3]

### Priority 1: Rendering (Highest Impact)
```
1. Audit every page for CSR content. Fix by adding 'use server' or 
   converting to SSG. Verify with curl.
2. Ensure page.tsx files exist for each URL — not a React shell routing 
   to dynamic components.
3. Confirm no SEO content is inside accordion/tab/tooltip interaction states.
```

### Priority 2: Meta & Schema (High Impact)
```
4. Add unique title (55–60 chars) to every page
5. Add unique meta description (150–160 chars) to every page  
6. Add canonical tags to every page
7. Add og:title, og:description, og:image (1200×630px) to every page
8. Add twitter:card tags to every page
9. Add Organization + WebSite schema to homepage
10. Add Article schema to all blog posts
11. Add FAQPage schema to service/landing pages (with visible FAQ sections)
12. Add BreadcrumbList to all non-homepage pages
```

### Priority 3: Crawl Governance
```
13. Generate robots.txt (allow all crawlers)
14. Generate dynamic sitemap.xml (exclude 404s, noindex, admin pages)
15. Add sitemap declaration to robots.txt
16. Generate llms.txt at root
17. Submit sitemap to Google Search Console
```

### Priority 4: Performance
```
18. Convert all images to WebP
19. Add explicit width + height to all images
20. Add fetchpriority="high" to hero/LCP image
21. Move analytics and chat scripts to defer
22. Audit and remove render-blocking scripts from <head>
```

### Priority 5: AEO Additions
```
23. Add FAQ section + FAQPage schema to service pages
24. Add answer-first paragraphs to all blog posts
25. Add author bio + Person schema to content pages
26. Add llms.txt with key topic descriptions
27. Ensure all headings follow H1→H2→H3 hierarchy (never skip levels)
28. Add internal links from cluster posts to pillar pages
29. Name all image files descriptively (seo-audit-guide.webp not IMG123.jpg)
30. Verify GSC shows no manual actions or coverage errors
```

***

## Part 7: The Non-Technical Client's Experience (What They Actually See)

### With Sveltia CMS (Simplest Setup)

After Claude Code integrates Sveltia CMS, the client's workflow is:

1. **Log in** at `https://yourdomain.com/admin` with their GitHub account (one-time OAuth setup)
2. **See collections** — "Blog Posts," "Services," "Team Members" as labeled sections
3. **Click "New Blog Post"** — see a form with fields: Title, Content (rich text editor), Publish Date, Featured Image, plus SEO fields: Meta Title, Meta Description, Social Share Image, Hide from Search Engines (checkbox)
4. **Write content** in a Medium-style rich text editor
5. **Click Publish** — Sveltia commits to GitHub, Vercel/Netlify deploys, site is live in 60 seconds

The client **never touches code, never touches GitHub, never sees Markdown**. The SEO fields are visible in the same form as their content — there is no separate "SEO tab" or separate tool. This is why building the CMS schema with SEO fields integrated into every collection from the start is non-negotiable.[^15]

### What the Client Should and Should Not Edit

**Always safe:**
- Blog post title, content, publish date, featured image
- Meta title (SEO field — keep under 60 characters)
- Meta description (under 160 characters)
- Social share image (upload 1200×630px images)
- Service page copy and pricing
- Team bios and photos

**Never change without developer:**
- URL slugs of existing pages with traffic (requires 301 redirect)
- robots.txt and sitemap.xml (auto-generated — manual edits get overwritten)
- The `noIndex` checkbox on any page currently receiving traffic
- Canonical URL fields (unless instructed)

This boundary map should be included in the written handoff guide — the single most appreciated deliverable clients receive.[^23]

***

## Conclusion: The Integrated Standard

Building SEO, AEO, and CMS as a simultaneous integrated layer is not a refinement of AI-assisted web development — it is the minimum standard for professional delivery. The documented failure rate of AI-built sites (62% failing basic SEO, zero of 6,000 AI-built sites ranking in organic search) is entirely caused by treating these as afterthoughts.[^24][^25]

The workflow is: write a complete `CLAUDE.md` → build CMS schema with SEO fields embedded → generate crawl governance files (robots.txt, sitemap.xml, llms.txt) on first build → verify rendering with curl → add AEO layers (FAQ schema, answer nuggets, author E-E-A-T) → run GSC setup → deliver client handoff with CMS editor guide.

A practitioner who built a VitePress site using this integrated AI-assisted approach completed what would normally take a developer 4–8 hours of specialized SEO work in 30 minutes. The advantage is not just speed — it is the systematic elimination of the failure modes that sink AI-built sites before they ever see traffic.[^26]

---

## References

1. [Claude Code: Best practices for agentic coding - Anthropicanthropic.com › engineering › claude-code-best-practices](https://www.anthropic.com/engineering/claude-code-best-practices) - A blog post covering tips and tricks that have proven effective for using Claude Code across various...

2. [Claude Code Best Practices: Lessons From Real Projects](https://ranthebuilder.cloud/blog/claude-code-best-practices-lessons-from-real-projects/) - Practical Claude Code lessons from shipping real projects: my setup, BMAD vs plan mode, how I struct...

3. [Fixing SEO Issues in Vibe Coded Sites with 30-Prompt Checklist](https://www.linkedin.com/posts/johndavidsaunders_most-vibe-coded-websites-have-a-serious-seo-activity-7445106924460613633-t5p8) - The approach that works: give Claude Code a complete SEO strategy and let it build the site. Strateg...

4. [What We Learned Building Our Website with Claude (The Hard Way)](https://signalandform.ca/blog/building-website-with-ai-lessons) - JavaScript rendering and SEO conflicts. This was our biggest lesson. Early versions of the site reli...

5. [JavaScript SEO In 2026: 7 Mistakes Killing Your Rankings - Zumeirah](https://zumeirah.com/javascript-seo-in-2026/) - JavaScript SEO in 2026 is evolving. Avoid these 7 common mistakes that kill your Google rankings. Le...

6. [code.claude.com › docs › best-practices](https://code.claude.com/docs/en/best-practices) - Tips and patterns for getting the most out of Claude Code, from configuring your environment to scal...

7. [10 Essential Claude Code Best Practices You Need to Know](https://discuss.huggingface.co/t/10-essential-claude-code-best-practices-you-need-to-know/174731) - The author compiled 84 best practices for Claude Code, covering everything from prompting to CLAUDE....

8. [seo-meta - Skill](https://tessl.io/skills/github/jezweb/claude-skills/seo-meta) - Generate complete SEO meta tags for every page. Covers title patterns, meta descriptions, Open Graph...

9. [seo-meta skill by jezweb/claude-skills](https://playbooks.com/skills/jezweb/claude-skills/seo-meta) - This skill generates complete SEO meta tags for pages, including title patterns, descriptions, og/tw...

10. [claude-seo/skills/seo-sitemap/SKILL.md at main - GitHub](https://github.com/AgriciDaniel/claude-seo/blob/main/skills/seo-sitemap/SKILL.md) - Universal SEO skill for Claude Code. 13 sub-skills, 7 subagents, extensions system with DataForSEO M...

11. [Complete SEO Skill for Claude Code - TokRepo](https://tokrepo.com/en/workflows/cb068086-1c7d-408e-90a1-c39cfc6ffe87) - Universal SEO analysis skill with 15 sub-skills and 12 parallel subagents. Covers technical SEO, E-E...

12. [seo — Claude Code Skill | FastMCP](https://fastmcp.me/skills/details/1467/seo) - Optimize for search engine visibility and ranking. Use when asked to "improve SEO", "optimize for se...

13. [sveltia-cms - Claude Skill | MCP Hub | 模型上下文协议中心](https://www.aimcp.info/zh/skills/4ca916a0-ce9a-438d-919b-e14a51c92ae5) - Sveltia CMS Skill Complete skill for integrating Sveltia CMS into static site projects. --- What is ...

14. [sveltia-cms by jezweb/claude-skills - Skills.sh](https://skills.sh/jezweb/claude-skills/sveltia-cms) - Discover and install skills for AI agents.

15. [sveltia-cms - Claude Skills - Claude Code Plugins](https://claude-plugins.dev/skills/@ovachiever/droid-tings/sveltia-cms) - |

16. [SEO schema types and metadata - SEO optimized content with Next.js](https://www.sanity.io/learn/course/seo-optimization/seo-schema-types-and-metadata) - Prepare useful, optional and reusable schema types specifically for SEO content and render them into...

17. [The Complete Guide to Sanity CMS SEO - Webstacks](https://www.webstacks.com/blog/sanity-seo) - What Sanity Provides for SEO · Automatic meta tag rendering (must be configured in frontend framewor...

18. [Headless CMS with Claude Code Integration (2026) - ElmapiCMS](https://elmapicms.com/mp/claude-code-headless-cms) - Connect Claude Code to your CMS with NomaCMS or ElmapiCMS MCP servers. Manage collections, content, ...

19. [Integrating Payload with MCP in 6 Minutes #ai #payloadcms](https://www.youtube.com/watch?v=6UVxbfIQwVs) - In this video, I walk you through how to integrate the Payload CMS MCP plugin with Claude Desktop! T...

20. [Claude Code for Payload CMS — Workflow Guide](https://claudecodeguides.com/claude-code-for-payload-cms-workflow-guide/) - Build headless CMS features with Payload and Claude Code. Tested setup with copy-paste CLAUDE.md con...

21. [Headless CMS 2026: Sanity vs Contentful vs Payload - Digital Applied](https://www.digitalapplied.com/blog/headless-cms-2026-sanity-contentful-payload-comparison) - Compare Sanity, Contentful, and Payload CMS on pricing, developer experience, and performance. Find ...

22. [Turn WordPress into an AI-Powered CMS with MCP + Claude Code](https://www.youtube.com/watch?v=xPZJACF11es) - 👉 Cloudways - https://www.cloudways.com/en/?id=1016576

In this video, I’ll show you how to install ...

23. [How to hand-off a website to a client - The devil is in the details](https://blog.duda.co/how-to-hand-off-a-website-to-a-client) - We've gathered insights from agency leaders who have perfected the art of website handoffs, revealin...

24. [Building Your Website With AI in 2025: Smart Move or Major Mistake ...](https://najumi.fr/en/article/build-website-ai-2025-smart-move-or-mistake) - A Search Engine Journal audit in 2025 revealed that 62 percent of AI built websites failed basic loc...

25. [Do AI-Built Websites Hurt SEO? Insights NZ Businesses Should See](https://kiwiwebsitedesign.nz/ai-websites-are-failing-seo-what-kiwi-businesses-need-to-know/) - Thinking about an AI-built website? New findings show serious SEO issues that could stop your site f...

26. [SEO Implementation with AI: A Real-World Case Study](https://moinsen-dev.github.io/claude_code_vibe_coding_guide/use-cases/seo-implementation) - Complete guide to vibe coding with Claude Code. Learn prompt engineering, multi-agent patterns, and ...

