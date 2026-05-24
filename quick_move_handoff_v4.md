# Quick Move & Packing Service. Website Refresh Handoff (v3, Consolidated)
**For:** Claude Code
**Client:** Quick Move & Packing Service (Harrison, NY)
**Prepared by:** Marketing strategy team
**Status:** Ready for development. Supersedes v1 and v2.
**Platform:** Squarespace 7.1, refresh in place
**Target launch:** Peak-season window, May–June 2026

---

## Changelog from v2

This version folds in the client's uploaded Website Architecture doc and applies a full anti-slop pass to every block of website copy. Specifically:

1. Added Video Estimate as a second path on the quote page and as a secondary CTA on the homepage hero. Frankie's architecture spec called for this and it changes the lead flow meaningfully.
2. Added Long Distance Moving as a service page (7 services now, up from 6 net of junk removal's position).
3. Added Labor Only Moving as a service page.
4. Set `steven@myquickmove.com` as the primary lead email (from Frankie's upload). Still pending written confirmation before launch.
5. Standardized "over 30 years" throughout per Marsha's direction (v4). This resolves the 25 / 26 / 30 inconsistency in favor of the highest number already used on the existing Westchester page. Founding-year confirmation for schema is still pending.
6. Removed every em dash from the document. Removed every emoji from the website copy. Cleaned colon reveals, rhetorical question openers, triple-adjective patterns, and other AI tells.

Copy blocks in Section 5 are now final and ready to paste into Squarespace without further editing. Bracketed `[pending]` items are the only remaining holes, all flagged for Frankie.

---

## 0. Read this first

This is a refresh in place, not a rebuild. We are keeping Squarespace, keeping the existing domain, and keeping the business recognizable. What we are changing: the navigation structure, the broken quote form, the ugly URL slugs, the thin town-level content, and the overall visual polish.

Claude Code's role on this project is specific:

1. Writing code for injection points. Custom CSS site-wide, JSON-LD schema site-wide and page-level, GA4 and GTM scripts in header and footer, and custom Code Blocks for components Squarespace's native blocks can't produce cleanly.
2. Producing paste-ready content. Every block of body copy in Section 5 is ready for Frankie or an implementer to paste into Squarespace's section editor with no further edits.
3. Setting up URL mappings. Providing the exact redirect strings to paste into Settings, Advanced, URL Mappings.
4. Specifying what the implementer does in the Squarespace editor. Page order, section types to use, image placement, block arrangement.

Claude Code is not rebuilding the templating engine. Everything must work within Squarespace 7.1's constraints.

**Primary business goal.** Move from roughly 3 booked moves per week to 5–7 booked moves per week.
**Primary website goal.** Turn more visitors into quote requests. Everything on the site serves this.

**What done looks like:**

1. A visitor lands on the homepage and within 5 seconds knows what we do, where we serve, how long we've been doing it, and how to request a quote.
2. The quote form works reliably and routes leads to Frankie with both email and SMS alerts. Video estimate uploads route to Steven.
3. Four town landing pages (White Plains, Mamaroneck, Rye, Larchmont) exist at clean URLs with local schema, ready to rank.
4. The site loads fast on mobile, passes Core Web Vitals within Squarespace's ceiling, and has clean indexable URLs.

---

## 1. Squarespace implementation approach

### The three layers of work

**Layer 1. Editor work, done by Frankie or an implementer in the Squarespace UI:**

* Restructure the navigation
* Create new pages with the clean URL slugs in Section 2
* Paste the block copy from Section 5 into each page
* Upload photos provided by Frankie
* Set meta titles and descriptions on each page (Page Settings, SEO)

**Layer 2. Code injection, done by Claude Code, pasted into Squarespace by the implementer:**

* Site-wide Custom CSS (Design, Custom CSS)
* Site-wide Header injection (Settings, Advanced, Code Injection, Header): fonts, master schema, GA4, GTM
* Site-wide Footer injection: any closing scripts
* Page-level Header injection (individual Page Settings, Advanced, Page Header Code Injection): per-page schema for service and town pages

**Layer 3. Custom Code Blocks, done by Claude Code, embedded as Squarespace Code Blocks:**

* Quote form (JotForm embed with custom styling). See Section 7.
* Video estimate upload component. See Section 7.
* Sticky mobile "Call Now" button
* Trust badge strip
* Google Reviews widget
* Any section that needs custom layout Squarespace can't produce natively

### What not to try in Squarespace

* Do not build a custom server-side form handler. Use a third-party form tool (JotForm, recommended) with a Squarespace Code Block embed.
* Do not fight the template's max content width. Work with it via CSS.
* Do not introduce build tools, npm, or bundlers. Everything ships as vanilla HTML, CSS, and JavaScript snippets.
* Do not override the site navigation with JavaScript. Use Squarespace's native nav and style it with CSS.

### Squarespace version and template

Confirm before starting: this site is on Squarespace 7.1. If it's still on 7.0, flag it. Some of the CSS selectors and injection points differ.

---

## 2. Sitemap and URL structure

### New sitemap

```
/
├── /services/
│   ├── /services/local-moving/
│   ├── /services/long-distance-moving/
│   ├── /services/commercial-moving/
│   ├── /services/packing-services/
│   ├── /services/labor-only/
│   ├── /services/storage-moves/
│   ├── /services/last-minute-moves/
│   └── /services/junk-removal/
├── /moving-supplies/
├── /areas-we-serve/
│   ├── /movers/white-plains-ny/
│   ├── /movers/mamaroneck-ny/
│   ├── /movers/rye-ny/
│   └── /movers/larchmont-ny/
├── /about/
├── /reviews/
├── /faqs/
├── /get-a-quote/
├── /video-estimate/
└── /contact/
```

Two conversion pages: `/get-a-quote/` and `/video-estimate/`. Both feed into the same downstream routing; they just reflect the two paths customers prefer.

### Squarespace URL slug setup

In the Squarespace editor, each page has a URL slug field (Page Settings, General, URL Slug). Set these slugs to match the sitemap above. For nested paths like `/services/local-moving/`, create a folder in the Pages panel named `services` and put each service page inside. Same pattern for `/movers/[town]-ny/`. Create a folder called `movers` (not linked in navigation; only `/areas-we-serve/` is linked) and put the four town pages inside it.

### URL Mappings, 301 redirects

Paste these into Settings, Advanced, URL Mappings. Squarespace's syntax is `/old-path -> /new-path 301`, one per line:

```
/contact-2-1 -> /areas-we-serve 301
/contact-2-1-1 -> /areas-we-serve 301
/contact-2-1-1-2 -> /areas-we-serve 301
/contact-2-1-1-3-1 -> /services/junk-removal 301
/contact-2-1-1-3 -> /services/junk-removal 301
/new-dropdown -> /services 301
/partners -> /about 301
/contact -> /get-a-quote 301
```

Squarespace URL Mappings do not support trailing slashes in the mapping syntax. Test each redirect after adding.

---

## 3. Design direction

### Tone of the site

Calm. Practical. Neighbourly. Like a trusted foreman explaining what's going to happen. Not corporate. Not hypey. No exclamation points in headlines. No stock photos of people high-fiving in an empty office. No emoji in body copy.

### Visual aesthetic

* **Feel.** A local business that has been around 30 plus years and knows it. Looks like 2026, not 2012.
* **References to look at.** bellhop.com (clean, service-first), collegehunkshaulingjunk.com (clear services, strong trust), piecearchitecture.com/moving (simple, photographic).
* **Avoid.** The default Squarespace-template vibe, generic moving truck clip art, stock photos of a smiling couple in front of boxes.

### Color palette

Set these in Design, Site Styles, Colors as the site color palette.

* **Primary, dark.** Deep navy `#1B2A4A`. Trust, stability.
* **Accent.** Warm orange `#E8743B`. Pulled from the existing logo and HomeAdvisor badges for continuity.
* **Background.** Warm off-white `#FAF8F4`.
* **Text primary.** `#1A1A1A`.
* **Text secondary.** `#5A5A5A`.
* **CTA button.** Orange background, navy text, white-on-navy hover.

Keep the orange from the current site. It's a familiar anchor. Navy is the new calmer primary.

### Typography

Set in Design, Site Styles, Fonts.

* **Headings.** Fraunces (or Instrument Serif). A serif that reads established, not stiff.
* **Body.** Inter (or DM Sans).

Both available in Squarespace's Google Fonts library.

### Custom CSS

Claude Code will produce a single Custom CSS file covering global typography overrides, button styling, section padding, trust-badge band, mobile sticky call button, form styling, review card styling, footer layout, and the video-upload component styling. Delivered as one commented file so Frankie can tune individual parts without breaking the rest.

### Spacing and layout

* Generous white space. The current site feels cluttered because everything is jammed together. CSS enforces section padding.
* Max content width around 1200px.
* Mobile first. More than half the traffic will be phones.
* One primary CTA per viewport section. The current hero has "Get a Quote" repeated three times, which dilutes the action. Strip back to one primary plus the video option as a secondary.

---

## 4. Global elements

### Header (Design, Site Header)

Desired structure:

```
[Logo]   Services | Areas | About | Reviews | FAQ     [Call: (914) 732-3733]   [Get a Quote]
```

* Logo links to `/`
* Services is a dropdown folder containing the eight service pages
* Areas is a dropdown folder with the four town pages plus a link to `/areas-we-serve/`
* Phone number is a styled `tel:` link. On mobile, pinned visible outside the hamburger.
* "Get a Quote" is a button, navy background, orange hover
* Header sticky on scroll via Custom CSS

Do not recreate the current navigation where "Moving Locations" contained both locations and services (Small Moves, Junk Removal). That was the biggest information-architecture problem on the current site. Services and Areas are separate categories.

### Footer (Design, Site Footer)

Four columns plus a bottom bar. Build using Squarespace section blocks.

* **Column 1.** Logo, one-line tagline ("Family-owned Westchester movers since [year, pending]"), NY State Moving License #38255.
* **Column 2.** Services. Links to all eight service pages.
* **Column 3.** Areas. Four town pages plus "Westchester County", "NYC", "Fairfield County CT".
* **Column 4.** Contact. Address, phone (click-to-call), email, hours (pending Frankie).
* **Bottom bar.** Copyright 2026 Quick Move & Packing Service. Privacy. NY DOT # [pending]. Social icons (Google, Angi, Instagram). Fix the broken Instagram link in this pass.

### Global CTAs

Three CTAs, everywhere, no others.

* **Primary.** Get a Quote, linking to `/get-a-quote/`
* **Secondary video path.** Upload a Video for a Fast Estimate, linking to `/video-estimate/`
* **Phone.** Call (914) 732-3733, linking to `tel:+19147323733`

Drop the "Free Material Delivery!" CTA from the hero. Move it to `/moving-supplies/` where it belongs.

### Mobile sticky call button

A persistent bottom-of-viewport call button, mobile only, across all pages. Code Block injected once in Footer Code Injection (site-wide) with CSS media queries to show only on small screens. Claude Code produces this snippet.

---

## 5. Page-by-page specs

Each page below includes: (a) purpose, (b) section-by-section content ready to paste, (c) SEO metadata for the Page Settings, SEO fields.

**Note for the implementer.** Build each page using Squarespace's section editor. For hero sections, use a Cover or image-background section type. For feature grids, use multi-column section blocks. For testimonials, use the Testimonial block or a custom Code Block if the design needs it.

**Anti-slop note.** The copy below uses periods where the original upload used em dashes. It uses declarative sentences where the original used rhetorical questions. It uses specific nouns where the original used AI placeholder words. Do not reintroduce emoji, em dashes, or rhetorical question openers during implementation.

---

### 5.1 Homepage. `/`

**Purpose.** Establish trust in 5 seconds, drive quote requests.

#### Hero section (full-width, image background)

* **Headline.** Local Westchester movers who treat your home like their own.
* **Subhead.** Family-owned for over 30 years. Full-service packing, moving, and storage across Westchester, NYC, and the tri-state area. No surprises. No lowball pricing. Just a crew you can trust in your home.
* **Primary button.** Get a Free Quote, linking to `/get-a-quote/`
* **Secondary button.** Upload a Video for Estimate, linking to `/video-estimate/`
* **Phone link.** Call (914) 732-3733, linking to `tel:+19147323733`
* **Trust strip underneath (narrow band).** 4.9 stars on Google (88 reviews). 4.8 stars on Angi (198 reviews). NY State License #38255. Fully insured.
* **Background.** Photo of a real Quick Move truck and crew in front of a Westchester home (from Frankie).

If the real photo isn't available at launch, use a muted map graphic of the tri-state area with a Harrison pin. Do not use stock moving photos.

#### Three-column service teaser

Heading: **How we help you move.**

1. **Full-service local moves.** Packing, loading, transport, and setup. Handled by the same small crew from start to finish. Link to `/services/local-moving/`.
2. **Professional packing.** Kitchens, fragile items, whole homes. Padded, labeled, and actually findable at the other end. Link to `/services/packing-services/`.
3. **Storage and clean-outs.** In, out, or between units. Plus decluttering help when you're downsizing or selling. Link to `/services/storage-moves/`.

Under the grid: **See all services**, linking to `/services/`.

#### Trust band, four icons in a row

Heading: **Why families in Westchester call us.**

* **Over 30 years local.** Same family, same crew, same name on the truck.
* **No surprises.** In-person or video estimate before we start. No lowball pricing.
* **Trained crew, not gig workers.** We hire and train our own team.
* **Fully licensed and insured.** NY State #38255. COIs provided on request.

#### Reviews section

Heading: **What our neighbours say.**

Six testimonial blocks. Each shows the star rating, first name and last initial, town, and review text. Below: link to `/reviews/`. Implement with Squarespace's Testimonial Slider block or a custom Code Block if more control is needed.

#### Areas section

Heading: **Based in Harrison. Working across Westchester and beyond.**

Body: We're a Harrison, NY team serving all of Westchester County, the five boroughs of New York City, and southern Connecticut. Most of our moves happen in White Plains, Mamaroneck, Rye, Larchmont, Harrison, Port Chester, and Scarsdale.

Grid of four town cards (White Plains, Mamaroneck, Rye, Larchmont), each linking to its `/movers/[town]/` page. Below: **See all areas**, linking to `/areas-we-serve/`.

#### How it works, four-step section

Heading: **Simple, from first call to last box.**

1. **Tell us about your move.** Fill out a short form, upload a video, or call us. We'll ask about your home, your timeline, and anything fragile or complicated.
2. **Get a real estimate.** We do in-person or video walkthroughs before quoting. No sight-unseen guesses.
3. **We show up prepared.** Same crew, on time, with the right truck, materials, and padding.
4. **You move in.** We place boxes and furniture where you want them. You don't lift a finger.

#### Final CTA block

Heading: **Ready to plan your move?**
Subhead: Get a free estimate in under 24 hours.
Primary button: Get a Free Quote
Secondary button: Upload a Video for Estimate
Phone link: Call (914) 732-3733

#### SEO metadata

* **Page title.** Westchester Movers | Quick Move & Packing Service (Harrison, NY)
* **Meta description.** Family-owned Westchester moving company with over 30 years of experience. Full-service packing, moving, and storage across Westchester, NYC, and the tri-state area. Get a free quote or upload a video for a fast estimate.

---

### 5.2 Services overview. `/services/`

**Purpose.** Help visitors navigate to the right service page. Reinforce full-service positioning.

**Hero.**

* **H1.** Full-service moving, packing, and storage.
* **Subhead.** You can hand the whole move to us. Or just the part you don't want to deal with. Here is what we do.

**Grid of eight service cards (title, one line, link).**

1. Local Moving → `/services/local-moving/`
2. Long Distance Moving → `/services/long-distance-moving/`
3. Commercial and Office Moves → `/services/commercial-moving/`
4. Professional Packing → `/services/packing-services/`
5. Labor-Only Moving → `/services/labor-only/`
6. Storage Moves → `/services/storage-moves/`
7. Last-Minute Moves → `/services/last-minute-moves/`
8. Junk Removal → `/services/junk-removal/`

**CTA block at bottom.** Get a Free Quote.

#### SEO metadata

* **Page title.** Moving Services in Westchester, NY | Quick Move & Packing
* **Meta description.** Local and long distance moving, commercial relocations, packing, labor-only, storage, last-minute moves, and junk removal across Westchester and the tri-state area. Licensed, insured, family-owned.

---

### 5.3 Individual service pages

Template structure, same for all eight:

1. Hero with H1, subhead, and quote button
2. What's included, bulleted list
3. Who this is for, two or three ICP descriptions
4. Testimonial, where relevant to the service
5. Why Quick Move, three trust bullets
6. Related services, two or three cards
7. Final quote CTA

#### 5.3.1 Local Moving. `/services/local-moving/`

**H1.** Local moving across Westchester County.

**Subhead.** Full-service local moves across Westchester, handled by a small, experienced crew that treats your home like their own. Packing through unpacking, one team, one plan.

**Intro paragraph.** We've been moving families and professionals across Westchester County for over 30 years. That includes White Plains, Mamaroneck, Rye, Larchmont, Harrison, Port Chester, Scarsdale, and every town in between. We know the buildings, the streets, and the rules.

**What's included.**

* Pre-move walkthrough, in person or by video
* Protection for floors, walls, stairs, and doorways
* Professional wrapping and padding of furniture
* Loading, secure transport, and unloading
* Box and furniture placement in the correct rooms
* Same crew from start to finish

**Who this is for.**

* Busy families moving within Westchester on a tight school-and-work timeline
* Downsizing homeowners who need patient, respectful help
* Apartment and condo movers coordinating elevators, building rules, and parking

**Why Quick Move.**

* Over 30 years of Westchester experience
* Small, consistent crews. No random day laborers.
* No lowball pricing. Real estimates before we start.

**Page title.** Local Movers in Westchester, NY | Quick Move & Packing
**Meta description.** Family-owned local movers serving Westchester County for over 30 years. Licensed, insured, fair pricing. Free quote.

---

#### 5.3.2 Long Distance Moving. `/services/long-distance-moving/`

**H1.** Long distance moving from Westchester.

**Subhead.** We handle select long distance moves out of Westchester into the surrounding region. Organized. Well-planned. Not rushed.

**Intro paragraph.** Long distance moves need more coordination than local work. That's fine. We plan for it. Before we book anything we talk through the route, the timing, and the pricing in detail. If it's not a good fit for us, we'll say so and point you to a company that handles it better.

**What's included.**

* Detailed move planning and written timeline
* Secure packing and furniture protection
* Scheduled transport and delivery
* Direct communication throughout the trip

**Who this is for.**

* Families relocating from Westchester to the broader Northeast or Mid-Atlantic
* Moves where you want the same crew packing and delivering, not a handoff to a sub-contracted driver
* Customers who've been burned by bait-and-switch long-distance pricing and want honest numbers up front

**Why Quick Move.**

* Flat pricing agreed up front. No add-ons at the delivery door.
* Same crew packing and delivering where the route allows
* We turn down routes we can't handle well. You won't be passed off.

**Page title.** Long Distance Movers from Westchester, NY | Quick Move & Packing
**Meta description.** Long distance moves from Westchester to the surrounding region. Flat pricing, careful handling, honest timelines. Request a quote.

---

#### 5.3.3 Commercial and Office Moves. `/services/commercial-moving/`

**H1.** Office and commercial moves, handled on your schedule.

**Subhead.** Overnight, weekend, or holiday relocations so your team is working again by Monday morning.

**What's included.**

* Planning walkthrough with your office manager
* Packing and labeling of desks, files, and equipment
* Careful handling of monitors, servers, and fragile office items
* After-hours and weekend scheduling
* Unpacking and placement at the new location

**Who this is for.**

* Small and mid-sized offices in Westchester and the five boroughs
* Medical, legal, and professional practices relocating without disruption
* Retail and showroom moves with tight windows

**Why Quick Move.**

* We've done this a lot. Steve and Frankie personally plan commercial jobs.
* Flexible scheduling. If you need it done overnight, that's how we schedule it.
* COIs and building coordination handled without extra hand-holding.

**Page title.** Office Movers in Westchester and NYC | Quick Move & Packing
**Meta description.** Weekend and overnight office relocations across Westchester and NYC. Licensed commercial movers with over 30 years of experience.

---

#### 5.3.4 Professional Packing. `/services/packing-services/`

**H1.** Professional packing, done right the first time.

**Subhead.** Whole-home packs or just the rooms you don't want to deal with. Labeled, padded, and ready to travel.

**What's included.**

* All packing materials supplied, or we'll work with yours
* Careful wrapping of fragile items, china, art, and electronics
* Clear labeling by room and contents
* Wardrobe boxes for hanging clothes
* Unpacking at the new home if you want it

**Who this is for.**

* Families who can move themselves but don't want to pack
* Homeowners staging for sale who need items packed and stored
* Anyone with a kitchen or china cabinet they don't want to touch

**Why Quick Move.**

* Packers trained to our standard. Not random labor.
* Real labeling. You'll know where everything is at the other end.
* Packing only is fine. You don't have to use us for the whole move.

**Page title.** Professional Packing Services in Westchester | Quick Move & Packing
**Meta description.** Whole-home or partial packing by an experienced local crew. Proper materials, proper labeling. Available as a standalone service.

---

#### 5.3.5 Labor-Only Moving. `/services/labor-only/`

**H1.** Labor-only moving help.

**Subhead.** Already have a truck? We'll supply the crew. Load, unload, or rearrange, by experienced movers who've done this thousands of times.

**What's included.**

* Loading and unloading of rental trucks or PODS
* Furniture moving within your home
* Rearranging heavy items
* Moving into or out of storage

**Who this is for.**

* DIY movers who rented a truck and need muscle for the heavy end of the job
* Customers moving into or out of a storage unit
* Anyone who just needs a couple of large pieces relocated

**Why Quick Move.**

* Same trained crew that handles full moves. No gig workers on labor-only jobs either.
* Right-sized team for the job. We'll tell you honestly whether you need two, three, or four.
* Available same-day on occasion, depending on the schedule.

**Page title.** Labor-Only Movers in Westchester, NY | Quick Move & Packing
**Meta description.** Experienced movers for loading, unloading, and rearranging. Truck not included. Serving Westchester and the tri-state area.

---

#### 5.3.6 Storage Moves. `/services/storage-moves/`

**H1.** Moves into, out of, and between storage.

**Subhead.** Renovation, home sale, or downsizing project. We handle the storage leg without a second trip.

**What's included.**

* Packing of items going into storage
* Transport to the storage facility of your choice, or one we recommend
* Retrieval and return trips when you're ready
* Short-term and long-term storage coordination

**Why Quick Move.**

* One crew handling pack, store, and return. No handoffs.
* We've worked with most Westchester storage facilities and know their rules.
* Long-term storage handled carefully, not dumped and forgotten.

**Page title.** Storage Movers in Westchester, NY | Quick Move & Packing
**Meta description.** Storage move-ins, move-outs, and transfers across Westchester. One team, one plan, one truck.

---

#### 5.3.7 Last-Minute Moves. `/services/last-minute-moves/`

**H1.** Last-minute moves, handled with the same care.

**Subhead.** Got a short timeline? We'll tell you honestly whether we can help. If we can, we show up ready.

**What's included.**

* Quick-response quote, usually same day
* Emergency packing and material delivery
* Flexible scheduling including evenings and weekends
* Same crew quality as a planned move

**Why Quick Move.**

* Honest answer fast. If we can't fit you in, we'll tell you right away.
* Same crew, same standard. A rush job doesn't mean a worse job.
* Packing help on short notice is available.

**Page title.** Last-Minute Movers in Westchester, NY | Quick Move & Packing
**Meta description.** Short-notice moves across Westchester and the tri-state area. Call (914) 732-3733 for same-day quotes.

---

#### 5.3.8 Junk Removal. `/services/junk-removal/`

**H1.** Junk removal that pairs with your move.

**Subhead.** Clean out a basement, a garage, or a whole house. We haul it away the same day we move you.

**What's included.**

* Full-home and partial clean-outs
* Furniture, appliances, and general debris
* Donation runs where possible
* Scheduled alongside your move or as a standalone job

**Why Quick Move.**

* One crew, one day. We move you in and take the junk out in the same visit.
* We'll tell you honestly what's worth donating and what isn't.
* No pure junk jobs without a connection to moving. We focus on what we're good at.

**Page title.** Junk Removal and Clean-Outs in Westchester | Quick Move & Packing
**Meta description.** Home clean-outs and junk removal across Westchester. Paired with a move or as a standalone service. Get a free quote.

---

### 5.4 Moving Supplies. `/moving-supplies/`

**H1.** Moving supplies, delivered free in Westchester.

**Subhead.** Boxes, tape, padding, wardrobe boxes. We drop them at your door before move day. No pickup fees and no minimums in our delivery area.

**Section.** What we deliver (grid of supply types; call-to-order until an e-commerce flow is decided).

**CTA.** Call (914) 732-3733 to place an order, or use the form.

**Page title.** Moving Boxes and Supplies Delivered in Westchester | Quick Move & Packing
**Meta description.** Moving boxes, tape, padding, and wardrobe boxes delivered free across Westchester. Call (914) 732-3733.

---

### 5.5 Areas We Serve. `/areas-we-serve/`

**H1.** Based in Harrison. Moving families across Westchester, NYC, and the tri-state area.

**Intro paragraph.** Quick Move has been part of the Westchester community for over 30 years. Our trucks and crews work out of Harrison, NY. Most of our moves happen right in our own backyard, which means we know the buildings, the streets, and the parking rules.

**Grid of four featured town cards.**

* White Plains
* Mamaroneck
* Rye
* Larchmont

Each card includes a photo, a two-line description, and a "See details" link.

**Secondary list, "We also serve".**

* Harrison, Scarsdale, Port Chester, Rye Brook, New Rochelle, Bronxville, Yonkers, Eastchester, Tuckahoe
* All five NYC boroughs
* Fairfield County, CT (Greenwich, Stamford, Darien)

**CTA.** Don't see your town? Call (914) 732-3733. We probably cover it.

**Page title.** Areas We Serve | Westchester, NYC and Tri-State Movers
**Meta description.** Quick Move serves Westchester County, NYC boroughs, and southern Connecticut. Based in Harrison, NY.

---

### 5.6 Town pages. `/movers/[town]-ny/`

Template per page:

1. Hero with the town name in H1
2. Local context paragraph
3. Popular moves we handle in [town]
4. Testimonial from a real customer in that town
5. Drive time from Harrison HQ
6. Nearby towns we serve
7. Quote CTA
8. Page-level schema (see Section 6)

#### 5.6.1 White Plains. `/movers/white-plains-ny/`

**H1.** Movers in White Plains, NY.

**Subhead.** The county seat is ten minutes from our Harrison home base. We handle condo moves on Main Street, family relocations in Gedney, and everything in between.

**Local context.** White Plains has every kind of move we handle: high-rise condos downtown, townhouses in Battle Hill, single-family homes in Gedney and Rosedale, and professional offices on Bloomingdale Road. We know the buildings that need COIs, the streets with loading-zone rules, and which garages fit a 26-foot truck. We've been moving White Plains residents for over three decades.

**Testimonial.** *[Pull the strongest White Plains review. Until one is collected, use a Westchester review with a clear voice.]*

**Popular moves we handle in White Plains.**

* Downtown condo and high-rise moves (The Residences, The Ritz-Carlton, 221 Main)
* Family homes in Gedney, Rosedale, and Battle Hill
* Office relocations on Bloomingdale Road and Bank Street
* Moves to and from storage facilities around Westchester Avenue

**Drive time.** Ten minutes from our Harrison HQ.
**Nearby towns we serve.** Scarsdale, Harrison, Eastchester, Greenburgh, Tarrytown.

**Page title.** White Plains Movers | Local Westchester Moving Company
**Meta description.** Family-owned movers serving White Plains, NY for over 30 years. Condo, home, and office relocations. Licensed, insured, fair pricing. Free quote.

---

#### 5.6.2 Mamaroneck. `/movers/mamaroneck-ny/`

**H1.** Movers in Mamaroneck, NY.

**Subhead.** Five minutes from our Harrison base, and a place we know by heart. Waterfront homes, village apartments, and everything from the Post Road to Orienta Point.

**Local context.** Mamaroneck is one of the towns we move in most often. We're proud members of the Mamaroneck Chamber of Commerce. We've handled moves up and down Boston Post Road, in the village, in Orienta, and out by Harbor Island. We know the summer traffic, the streets that need permits, and how to protect hardwoods in a 1920s colonial.

**Testimonial.** Ashley D., Mamaroneck. "If I could give them 10 stars I would. Staff was kind, attentive and efficient. They also had the best price around. I would recommend them to absolutely everyone."

**Popular moves we handle in Mamaroneck.**

* Waterfront and Orienta single-family homes
* Village apartments and condos
* Harbor Island and Shore Acres moves
* Storage moves for summer residents
* Senior downsizing into the village

**Drive time.** Five minutes from our Harrison HQ.
**Nearby towns we serve.** Larchmont, Harrison, Rye, New Rochelle.

**Page title.** Mamaroneck Movers | Local Westchester Moving Company
**Meta description.** Mamaroneck movers based minutes away in Harrison, NY. Family-owned, over 30 years, fully insured. Chamber of Commerce members. Free quote.

---

#### 5.6.3 Rye. `/movers/rye-ny/`

**H1.** Movers in Rye, NY.

**Subhead.** Across the border from our Harrison HQ. Historic homes, families moving up, and downsizers moving down. We handle them all with care.

**Local context.** Rye is one of our most-served towns. We see every type of move here. Historic homes in Rye City. Newer families moving into Milton Point and Indian Village. A steady flow of downsizers heading into condos. We know the parking rules, the narrow driveways, and how to protect the older staircases and hardwood floors that these homes deserve.

**Testimonial.** Michael N., Rye. "Professional, knowledgeable, always available for any questions. Outstanding service."

**Popular moves we handle in Rye.**

* Historic single-family homes in Rye City and Milton Point
* Condo and townhouse moves near downtown
* Senior downsizing from long-time family homes
* Waterfront properties in Indian Village
* Moves to and from Rye Brook and Port Chester

**Drive time.** Seven minutes from our Harrison HQ.
**Nearby towns we serve.** Harrison, Rye Brook, Port Chester, Mamaroneck.

**Page title.** Rye NY Movers | Local Westchester Moving Company
**Meta description.** Rye, NY movers with over 30 years of local experience. Historic homes, condos, and family relocations. Licensed, insured, family-owned. Free quote.

---

#### 5.6.4 Larchmont. `/movers/larchmont-ny/`

**H1.** Movers in Larchmont, NY.

**Subhead.** Ten minutes from our Harrison base. Family homes, commuter moves, and the occasional trip to the city. We've been part of the Larchmont rhythm for years.

**Local context.** Larchmont families tend to know what they want. A careful crew, a fair price, no surprises. We've moved people into the Manor, out of the Flats, and up and down Boston Post Road. We know the timing of the morning commute. We know which streets get tight around school drop-off. We schedule around all of it.

**Testimonial.** *[Pull strongest Larchmont review. Placeholder for Frankie to select from past customers.]*

**Popular moves we handle in Larchmont.**

* Family homes in the Manor and the Flats
* Commuter moves to and from NYC
* Condo and co-op moves on Boston Post Road
* Senior downsizing and in-town transitions
* Summer and fall moves around the school calendar

**Drive time.** Ten minutes from our Harrison HQ.
**Nearby towns we serve.** Mamaroneck, New Rochelle, Harrison, Rye.

**Page title.** Larchmont Movers | Local Westchester Moving Company
**Meta description.** Larchmont, NY movers based in Harrison. Family-owned, over 30 years, licensed and insured. Commuter, family, and senior moves. Free quote.

---

### 5.7 About. `/about/`

**H1.** A Westchester family business, moving Westchester families.

**Subhead.** Started in the Bronx. Based in Harrison since [year, pending]. Same family, same crew, same name on the truck.

**Section 1. Our story, three paragraphs.**

Quick Move & Packing was started by Steve Rocco over 30 years ago with one truck and one rule. Treat every home like it was your own mother's. Steve grew up in the Bronx, learned the trade the hard way, and built a reputation one move at a time.

Today the business runs out of 240 Halstead Avenue in Harrison, NY, with Steve still involved in every major job and his son Frankie running the day-to-day. Our crew is small by design. We don't hire gig workers. We train our own people and keep them, which is why the same faces show up at your door that showed up at your neighbour's.

We've moved families across Westchester, the five boroughs, and southern Connecticut. We've moved offices, packed kitchens, coordinated storage, and done clean-outs. What hasn't changed in over 30 years is how we do it. Carefully, on time, and with no surprises.

**Section 2. What we believe.**

* **No surprises.** You get a real estimate from a real person before we start. No bait-and-switch.
* **Trained crew, not gig workers.** Every person on your move is trained, uniformed, and part of our team.
* **Your home, handled like ours.** Floor protection, door padding, careful wrapping. Always.

**Section 3. Credentials.**

* NY State Moving License #38255
* US DOT and NYDOT compliant
* Fully insured, COIs on request
* HomeAdvisor Elite Service, 5 years screened and approved
* Members, Mamaroneck Chamber of Commerce

**Section 4. The team.** Photos of Steve, Frankie, and key crew (from Frankie). Names and short bios.

**Section 5. Partners (fold in the old `/partners` content).** If there are real partner relationships (realtors, storage facilities, staging companies), list them here. Otherwise skip.

**Final CTA.** Get a Free Quote.

**Page title.** About Quick Move & Packing | Family-Owned Westchester Movers
**Meta description.** Family-owned and operated by the Rocco family for over 30 years. Based in Harrison, NY. Licensed, insured, trusted across Westchester.

---

### 5.8 Reviews. `/reviews/`

**H1.** 288 reviews and counting.

**Subhead.** 88 reviews on Google averaging 4.9 stars. 198 reviews on Angi averaging 4.8. Here is what our neighbours are saying.

**Section 1. Google reviews widget.** Embed via a Squarespace Code Block. Use Trustindex or Elfsight Google reviews widget. Both have free tiers and both embed cleanly as a script snippet.

**Section 2. Selected Angi reviews.** Angi reviews aren't currently on the site at all. Give them a dedicated section. Pull top 6 to 10 manually and format as testimonial cards.

**Section 3. Long-form stories (optional, 2 or 3).** Pull the Sharon W. storage-during-renovation story and one or two others as case-study-style blocks.

**Section 4. CTA.** Moved with us recently? We'd appreciate a quick Google review. Button linking to the Google review URL.

**Page title.** Reviews | 288 Reviews for Quick Move & Packing Service
**Meta description.** Real reviews from Westchester families on Google and Angi. 4.9 stars average. Family-owned movers with over 30 years of experience.

---

### 5.9 FAQs. `/faqs/`

**H1.** Frequently asked questions.

**Subhead.** If we missed one, call us at (914) 732-3733.

Build using Squarespace's Accordion block.

**Pricing and estimates**

* How do you quote a move? (Answer: In-person or video walkthrough, then a written estimate. Flat rate available on request.)
* Are there hidden fees? (Never. We discuss all fees before, during, and after your job.)
* Do you offer flat-rate moves? (Yes. Ask for one at quote time.)
* Do you require a deposit? (Pending Frankie.)

**Services**

* Do you pack? (Yes. Full pack or partial pack.)
* Do you do last-minute moves? (Yes, when our schedule allows.)
* Do you do storage? (Yes. Short and long term.)
* Do you do office moves? (Yes. Evenings and weekends available.)
* Do you do labor only? (Yes. We bring the crew. You bring the truck.)
* Do you haul away junk? (Yes, usually paired with a move.)

**Logistics**

* What areas do you serve? (Westchester, NYC, Fairfield County CT.)
* How far in advance should I book? (Two to four weeks is ideal in peak season.)
* Can you move me on a weekend? (Yes, with booking lead time.)
* Can I upload a video for an estimate? (Yes. Go to /video-estimate.)

**Credentials and insurance**

* Are you licensed? (Yes. NY State #38255. NYDOT and USDOT compliant.)
* Do you provide a Certificate of Insurance (COI)? (Yes.)
* Are you insured? (Yes, fully.)

**Supplies**

* Where can I buy moving supplies? (At our Harrison store, or free delivery across Westchester.)

**Schema.** Add `FAQPage` schema markup via page-level Code Injection. See Section 6.

**Page title.** FAQ | Quick Move & Packing Service (Westchester, NY)
**Meta description.** Common questions about our moving services, pricing, packing, storage, video estimates, and more. Call (914) 732-3733 for anything we missed.

---

### 5.10 Get a Quote. `/get-a-quote/`

**This page plus `/video-estimate/` is the most important page on the site.** The current Squarespace native form is broken per the project memory. It is actively losing leads. Fix this before anything else. See Section 7 for the full form solution.

**H1.** Tell us about your move.

**Subhead.** Fill out the form below, upload a video, or call (914) 732-3733. We respond within a few hours during business hours, usually the same day.

**Two-path block near the top of the page:**

* **Path 1. In-home or phone estimate.** Fill out the form. We'll schedule a quick walkthrough. Most accurate pricing because we see exactly what's moving.
* **Path 2. Video estimate.** Faster option. Record a walkthrough on your phone and upload it. Steve or Frankie watches it personally and sends pricing back the same day during business hours. Button linking to `/video-estimate/`.

Below the two-path block, the quote form. (Fields and embed spec in Section 7.)

**Trust band under the form.** 4.9 stars on Google. 4.8 stars on Angi. NY License #38255. Fully insured.

**Alternative contact block (sidebar on desktop, stacked on mobile).**

* Call: (914) 732-3733
* Email: [confirmed lead address pending Frankie]
* Visit: 240 Halstead Avenue, Harrison, NY 10528
* Hours: [pending Frankie]

**Page title.** Get a Free Moving Quote | Quick Move & Packing (Westchester)
**Meta description.** Request a free estimate from Quick Move & Packing. In-person, phone, or video walkthrough. Same-day response during business hours.

---

### 5.11 Video Estimate. `/video-estimate/`

**Purpose.** Give visitors a faster path to pricing. Upload a walkthrough video. Steven reviews it and follows up with a quote.

**H1.** Get a quote by video.

**Subhead.** Faster than scheduling a visit. Record a quick walkthrough on your phone, upload it here, and we'll send you pricing back the same day during business hours.

**Section: How it works.**

1. **Walk and record.** Start in your entryway and walk through each room with the camera. Open closets, pan furniture, show us what's fragile or oversized.
2. **Upload the file.** Drag it into the form below, or upload directly from your phone. File sizes up to 2GB supported.
3. **Get a quote.** Steven reviews the video and follows up with a written estimate. Usually within a few hours during business hours.

**Human-review trust strip (place directly under "How it works").**

A reviewed person, not a robot. Every video is watched by Steve or Frankie personally. No AI guesses. No auto-generated quotes. You get a number from someone who has run this crew for over 30 years.

**Section: What to show in the video.**

* Every room with furniture to be moved
* Closets, basement, attic, garage
* Anything heavy, fragile, or oversized (piano, safe, artwork, large mirrors)
* The path out of the home (stairs, elevators, driveway access)

**Upload form fields.**

* First name
* Last name
* Phone
* Email
* Moving from (address or town)
* Moving to (address or town)
* Ideal move date
* Video upload (drag-and-drop, or record directly)
* Anything special we should know? (optional)

**Submit button.** Send Video and Request Quote.

**Routing.** Video uploads route to `steven@myquickmove.com` (pending confirmation). Standard form fields also route through the normal JotForm flow so both Frankie and Steven see the lead.

**Trust band under the form.** Same as `/get-a-quote/`.

**Page title.** Video Estimate | Quick Move & Packing (Westchester, NY)
**Meta description.** Upload a walkthrough video and get a moving estimate back the same day. Westchester movers, licensed and insured, family-owned.

---

### 5.12 Contact. `/contact/`

This page is nearly redundant with `/get-a-quote/` but some visitors specifically search "contact us." Keep it simple.

**H1.** Get in touch.

Three blocks.

1. **Need a quote?** Link to `/get-a-quote/`
2. **Prefer video?** Link to `/video-estimate/`
3. **Call us.** (914) 732-3733 (click-to-call on mobile)
4. **Visit the store.** 240 Halstead Ave, Harrison, NY. Embedded map using Squarespace's Map block.
5. **Email.** [confirmed lead address pending Frankie]

**Page title.** Contact Quick Move & Packing | (914) 732-3733
**Meta description.** Call, email, or visit Quick Move & Packing at 240 Halstead Ave, Harrison NY. Serving Westchester and the tri-state area for over 30 years.

---

## 6. Schema markup, SEO-critical

All schema ships as JSON-LD injected via Squarespace's Code Injection points.

### Site-wide schema, master block

Goes in Settings, Advanced, Code Injection, Header. This block runs on every page and establishes the core business entity. Use the master `MovingCompany` JSON-LD block already drafted in File 05 of the knowledge base. Pending Frankie confirmation of business hours, founding year, and primary contact email before pasting.

### Page-level schema, per page

Goes in individual Page Settings, Advanced, Page Header Code Injection. Each is a separate JSON-LD block.

* **Service pages.** `Service` schema with `provider` pointing back to the main business.
* **Town pages.** `MovingCompany` schema with `areaServed` set to the specific town. Other fields stay identical to the master block. Google understands these as expressions of the same entity with variable service areas.
* **FAQ page.** `FAQPage` schema with each Q and A as a `Question` and `Answer` node.
* **Reviews page.** `AggregateRating` pulled from the master block, plus individual `Review` nodes for the highlighted testimonials.

### Validation

After launch of each page, run the URL through Google's Rich Results Test (search.google.com/test/rich-results). Fix any errors before moving to the next page.

Claude Code will produce each schema block as a separate HTML-wrapped snippet ready to paste into the relevant Code Injection field.

---

## 7. Forms and lead capture (CRITICAL PATH)

The broken native Squarespace form is the single biggest revenue leak. Fix this first, even before design polish.

### Recommended solution: JotForm embed for both paths

JotForm handles both the standard quote form at `/get-a-quote/` and the video upload form at `/video-estimate/`. Two separate forms, both embedded via Squarespace Code Blocks.

**Why JotForm over the native Squarespace form:**

* Reliable email delivery. The native Squarespace form has known delivery issues on some Gmail-fronted domains.
* Built-in spam protection, honeypot plus reCAPTCHA
* Native SMS notifications to Frankie's phone. No third-party tool needed.
* Supports large file uploads up to 2GB, required for the video estimate path
* Native webhook and Zapier integration for future CRM connection
* Built-in submission storage as a backstop. We never lose a lead to an email delivery issue.
* Full CSS customization to match the site

**Alternative.** Formspree plus a custom HTML form if Frankie prefers full visual control. Slightly more setup. Not recommended for the video upload path because Formspree's file limits are smaller.

### JotForm setup checklist

Claude Code delivers:

1. A styled HTML embed snippet for the standard quote form. Goes into a Squarespace Code Block on `/get-a-quote/`.
2. A styled HTML embed snippet for the video upload form. Goes into a Squarespace Code Block on `/video-estimate/`.
3. A matching snippet for the sidebar or contact block.

Frankie (or the implementer) sets up in JotForm:

1. Both forms with the fields below
2. Email notification routing: standard quote form to Frankie with Steve CCed. Video estimate to Steven at `steven@myquickmove.com` with Frankie CCed.
3. SMS notification to Frankie's phone on both forms
4. Auto-reply to the customer on both forms with a clear "here is what happens next" message
5. Zapier trigger or native webhook pointing to a placeholder URL for future CRM

### Standard quote form fields

Required unless marked optional.

1. First name
2. Last name
3. Phone
4. Email
5. Moving from (address or town)
6. Moving to (address or town)
7. Ideal move date (date picker, include a "flexible" option)
8. Home size (dropdown: Studio, 1BR, 2BR, 3BR, 4BR plus, Office, Other)
9. Service needed (checkboxes: Moving, Packing, Labor only, Storage, Junk removal, Moving supplies only)
10. Anything special we should know? (textarea, optional)
11. How did you hear about us? (dropdown, optional: Google, Referral, Angi, LSA, Realtor, Other)

### Video estimate form fields

Same as above, plus:

* Video upload field, drag-and-drop or direct record
* 2GB file size limit
* Accepts MP4, MOV, and common phone formats

### Post-submit experience

* Both forms redirect to a thank-you page at `/thank-you/`. Set `noindex` on this page.
* Thank-you copy. We got it. [Frankie or Steven, depending on form] will reach out within a few hours. If it's urgent, call (914) 732-3733.
* GA4 conversion event fires on thank-you page load. Event name: `quote_form_submit` for the standard form, `video_estimate_submit` for the video form.

### Pre-launch form test protocol

Before flipping DNS or announcing the refresh, run this test five times with three different people on three different devices. Run it for both the standard form and the video upload form.

1. Fill and submit the form.
2. Confirm email arrives in the correct inbox within 60 seconds (Frankie for standard, Steven for video).
3. Confirm SMS arrives on Frankie's phone.
4. Confirm submission appears in JotForm's backend log.
5. Confirm auto-reply reaches the submitter.
6. Confirm GA4 conversion event fires.

All ten test submissions (five per form) must pass all six checks. If any step fails, stop and fix before launch.

---

## 8. Performance within Squarespace

Squarespace has a performance ceiling because of the platform's bundled CSS and JS, but we can still push to respectable scores.

**Targets, Squarespace-realistic.**

* Lighthouse mobile performance: 70 plus. Squarespace typically maxes around 75 to 85 with careful optimization.
* LCP: under 3.0s
* CLS: under 0.1
* No render-blocking custom scripts above the fold

**Implementation rules.**

* Upload all images via Squarespace's image blocks. It handles AVIF and WebP conversion and srcset automatically. Do not hotlink external images.
* Compress all photos under 500KB before upload.
* Use self-hosted Google Fonts via Squarespace's Fonts panel. Do not load extra font files via Custom CSS.
* Keep Custom CSS under 15KB.
* All third-party embeds (forms, reviews widget) lazy-load where possible.
* Defer Google Tag Manager and analytics to after page load. Put them in Footer Code Injection, not Header, unless the tag explicitly requires header placement.
* Do not add multiple review widgets or chat widgets. Pick one of each.

---

## 9. Mobile considerations

More than half the traffic will be phones.

* **Sticky "Call Now" button at the bottom of the viewport on mobile, all pages.** Delivered as a Code Block plus CSS injected site-wide in Footer Code Injection. Claude Code produces this snippet.
* **Simple flat hamburger menu.** No nested folders. The current site's nested dropdown in mobile is a usability killer. Reconfigure in Squarespace's Mobile Information Bar and header settings.
* **Phone number visible in the header on mobile** without opening the menu.
* **Quote form fully usable on mobile.** JotForm handles this well natively. Verify after setup.
* **Video upload from mobile.** Test specifically. Phones are the most likely device for video uploads.
* **Tel and mailto links** wired on every phone number and email across the site.

---

## 10. Analytics and tracking

Set up before launch.

**GA4.** Two options in Squarespace.

1. Native integration (Settings, Developer Tools, External API Keys, Google Analytics). Easy but limited.
2. Google Tag Manager via Code Injection. More flexible, recommended.

Go with GTM via Code Injection.

* Paste the GTM container snippet into Settings, Advanced, Code Injection, Header plus Footer. The snippet includes both halves.
* Configure GA4 inside GTM.
* Configure conversion events: `quote_form_submit` (fires on `/thank-you/`), `video_estimate_submit` (fires on `/thank-you/` from video path), `phone_click` (fires on tel: clicks), `email_click` (fires on mailto: clicks).

**Google Search Console.**

* Verify ownership via DNS TXT record. Squarespace supports this.
* Submit the sitemap at `https://www.quickmoveandpacking.com/sitemap.xml`. Squarespace auto-generates it.

**Bing Webmaster Tools.** Same setup. Submit sitemap.

**Call tracking.** Use CallRail with a dynamic number insertion script in Footer Code Injection. CallRail swaps the displayed number based on traffic source so we attribute calls to LSA vs. organic vs. direct.

**UTM discipline.** All ad URLs (LSA landing, RSA landing, social posts) use UTM parameters. Document UTM conventions in a shared sheet so everyone uses consistent values.

---

## 11. Assets needed from Frankie

Before launch, collect:

* [ ] Confirmed founding year for schema markup. We are using "over 30 years" in the copy (Marsha's v4 decision). The schema JSON-LD requires an exact `foundingDate`, which Frankie still needs to confirm.
* [ ] Business hours
* [ ] Confirmation that `steven@myquickmove.com` is the correct destination for video estimate leads
* [ ] Confirmed primary email for standard quote form submissions (likely Frankie's, not the public Gmail)
* [ ] 10 to 20 real photos of trucks, crews (with permission), and move days
* [ ] Headshots or candid photos of Steve and Frankie
* [ ] Current license and insurance document scans
* [ ] Confirmed service area list (which towns are YES, MAYBE, NO)
* [ ] One Larchmont testimonial. Collect from a past customer if needed.
* [ ] Confirmation of current deposit and cancellation policies
* [ ] Any partner or realtor logos to display, with permission
* [ ] Credentials to access: Squarespace admin, JotForm (create if needed), GA4, Google Tag Manager, Google Search Console, CallRail, Google Business Profile
* [ ] Confirm the "myquickmove.com" domain is owned and active. It appears in the architecture doc but differs from the main `quickmoveandpacking.com` domain.

---

## 12. Launch checklist

Before announcing the refresh:

* [ ] All 301 URL Mappings tested in a browser. Hit each old URL, confirm redirect lands on the right new URL.
* [ ] Standard quote form tested end-to-end 5x by 3 different people on 3 different devices.
* [ ] Video upload form tested end-to-end 5x. Include tests from iPhone and Android.
* [ ] Schema validated in Rich Results Test for: homepage, one service page, all four town pages, FAQ page.
* [ ] GA4 conversion events firing correctly (both form paths).
* [ ] Mobile Lighthouse score 70 plus.
* [ ] All phone numbers click-to-call.
* [ ] Google Business Profile URL updated to new homepage.
* [ ] All inbound ad links (LSA landing, RSA landing) updated where URLs have changed.
* [ ] Sitemap.xml submitted to Google Search Console.
* [ ] robots.txt allows indexing (Squarespace default).
* [ ] Broken Instagram link fixed and linked in footer.
* [ ] Copyright year in footer updated to 2026.
* [ ] Angi reviews visible on `/reviews/`.
* [ ] 404 page has a quote CTA (Design, Custom 404).

---

## 13. Out of scope for this phase

Noting for future phases.

* Blog or content hub (Month 3 plus)
* Online booking or calendar integration (Month 3 plus)
* Customer portal for tracking a move (Month 6 plus)
* E-commerce for moving supplies (Month 3 plus)
* Additional town pages beyond the four (Harrison, Scarsdale, Port Chester, Rye Brook for Month 2)
* NYC borough pages (Month 3 plus)
* Realtor and partner portal (Month 3 plus)
* Platform migration off Squarespace. Revisit in 12 months if organic growth demands more flexibility.

---

## 14. Competitive note for the implementer

The site we're trying to beat in organic search is Miller's Honest Moving. They rank #1 on Local Services Ads despite having fewer Google reviews than Quick Move. That means LSAs are doing heavy lifting for them, and our organic SEO has a real opening if we execute the town pages and schema well. Their site is visually unremarkable. We don't need to be flashy. We need to be clean, fast, trusted, and clearly local.

Do not mention competitors anywhere in the copy.

---

## 15. Open items needing Frankie/Steve sign-off

Block launch until resolved:

1. Exact founding year needed for JSON-LD schema `foundingDate`. Copy uses "over 30 years" as the marketing phrasing (Marsha's v4 decision). Schema needs the specific year.
2. Official business hours.
3. Primary lead email address for the standard form. Not the public Gmail.
4. Confirmation that `steven@myquickmove.com` is correct for video estimate routing, and that `myquickmove.com` is an owned/active domain.
5. Deposit and cancellation policies for the FAQ.

Nice to have, not blocking:

6. JotForm account creation and ownership. Who owns the billing. Marsha, Frankie, or Steve.
7. CallRail account creation and budget approval.
8. Access credentials handed to the implementer (Squarespace admin, GA4, GSC).

---

## 16. Suggested delivery order for Claude Code

1. **First: the forms.** Both standard quote and video upload. JotForm embeds, styled Code Blocks. This is the revenue leak.
2. **Site-wide Custom CSS.** Colors, typography, button styles, section spacing, mobile sticky call button. Everything else sits on top of this.
3. **Master schema JSON-LD block** for Header Code Injection. Once Frankie confirms hours, year, and email.
4. **URL Mappings list** formatted for direct paste into Squarespace.
5. **Homepage content layout.** Copy is already final. Arrange in Squarespace editor.
6. **Service pages.** Eight pages, same template. Fast to produce.
7. **Areas hub plus four town pages** with per-page schema.
8. **About, Reviews, FAQ, Contact, Video Estimate, Thank-you.**
9. **Analytics and tracking.** GTM, GA4, CallRail.
10. **Launch checklist end-to-end.** Before flipping anything live.

---

## 17. Alignment notes: this doc vs. Frankie's uploaded architecture doc

For the record, so nothing gets lost.

**What Frankie's architecture doc added that we folded in.**

1. Video Estimate path as a separate conversion route. Folded into homepage hero, Section 5.11 (full page), Section 7 (forms), and analytics (Section 10).
2. Long Distance Moving as a service page. Added at 5.3.2.
3. Labor Only Moving as a service page. Added at 5.3.5.
4. `steven@myquickmove.com` as the destination for video estimate leads. Folded into Section 7 and Section 11.
5. The "years in business" figure. Marsha's v4 decision standardizes on "over 30 years" across all copy, overriding the 25+ in Frankie's architecture doc and the 26+ that was in the project knowledge base.

**Where this doc overrides Frankie's upload.**

1. Copy style. Frankie's upload used heavy emoji headings, rhetorical question openers, and em-dash-driven sentences. That's standard web-copy template style. It conflicts with Quick Move's voice guide (calm, practical, neighbourly, plain). The copy in this doc is rewritten to match the voice guide. This is a deliberate override, not a miss.
2. Service list. Frankie's doc listed five services. The project knowledge base lists more (storage, last-minute, junk removal, supplies). This doc carries all eight so no revenue-generating service gets orphaned off the sitemap.
3. Town page structure. Frankie's upload used a near-identical template across the four towns. This doc uses town-specific context (Gedney, Orienta, Milton Point, the Manor) to make each page locally useful and harder to copy.

**Where this doc agrees with Frankie's upload.**

* Four priority town pages: White Plains, Mamaroneck, Rye, Larchmont.
* Family ownership framing (Steve and Frankie) on the About page.
* Dynamic reviews section on the homepage (Google plus Angi combined).
* Service-and-location hybrid structure for SEO.
* Full-service positioning as primary, with simpler services (labor only, small, junk) treated as feeders.

---

**End of handoff.**

All major strategy and copy decisions route through Frankie for text approval per the standard workflow.
