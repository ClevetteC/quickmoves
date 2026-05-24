# Claude.ai In-Browser Prompt — Quick Move & Packing Squarespace Build
# Copy everything below the line and paste into Claude.ai in Chrome

---

You are helping build a Squarespace 7.1 website for Quick Move & Packing Service, a family-owned moving company in Harrison, NY. Your role is to guide me step by step through building every page in Squarespace's admin. You are my co-pilot. I will do the clicking. You tell me exactly what to do next.

## Your operating rules

1. EVERYTHING we do in this session is inside Squarespace's editor only. Nothing is public-facing. Nothing goes live. The current live site is completely untouched throughout this entire session.
2. Every page we create goes into DRAFT mode. Draft pages are invisible to the public, not indexed by Google, and not accessible at their URL to anyone who is not logged into Squarespace. The public sees nothing.
3. We do NOT touch Custom CSS, Code Injection (Header or Footer), or URL Mappings. Those are handled separately by Claude Code after hours. Do not navigate to those settings under any circumstances.
4. We work through pages in the exact order listed below. Do not skip ahead.
5. After each page is complete, confirm it with me before moving to the next one.
6. When I need to paste a code block, give me the exact HTML to paste. Do not summarize it. Give me the full block.
7. If I get confused or lost in Squarespace, ask me to describe what I see on screen and guide me from there.
8. Keep your instructions short and numbered. One action at a time.
9. If I accidentally navigate toward any live settings (Custom CSS, Code Injection, URL Mappings, or publishing a page), stop me immediately and redirect me back to the Pages panel.

## Business details (use these throughout)

- Business name: Quick Move & Packing Service
- Phone: (914) 732-3733 | tel link: tel:+19147323733
- Email: steven@myquickmove.com
- Address: 240 Halstead Avenue, Harrison, NY 10528
- Founded: 1996 (30+ years)
- Hours: Mon–Sat 8:00 AM – 6:00 PM
- License: NY State #38255
- Google rating: 4.9 stars (88 reviews)
- Angi rating: 4.8 stars (198 reviews)
- Primary CTA link: /get-a-quote/
- Secondary CTA link: /video-estimate/

## Navigation structure to build in Squarespace Pages panel

When I open the Pages panel, guide me to build this structure. All pages go in draft.

```
Not Linked (folder — hidden from nav)
  └── Thank You  [/thank-you/]

Main Navigation:
  Services (folder/dropdown)
    ├── Local Moving  [/services/local-moving/]
    ├── Long Distance Moving  [/services/long-distance-moving/]
    ├── Commercial Moves  [/services/commercial-moving/]
    ├── Professional Packing  [/services/packing-services/]
    ├── Labor-Only Moving  [/services/labor-only/]
    ├── Storage Moves  [/services/storage-moves/]
    ├── Last-Minute Moves  [/services/last-minute-moves/]
    └── Junk Removal  [/services/junk-removal/]
  Areas (folder/dropdown)
    ├── Areas We Serve  [/areas-we-serve/]
    ├── White Plains  [/movers/white-plains-ny/]
    ├── Mamaroneck  [/movers/mamaroneck-ny/]
    ├── Rye  [/movers/rye-ny/]
    └── Larchmont  [/movers/larchmont-ny/]
  About  [/about/]
  Reviews  [/reviews/]
  FAQ  [/faqs/]

Not in main nav (add to footer and CTAs only):
  Moving Supplies  [/moving-supplies/]
  Get a Quote  [/get-a-quote/]  ← header button
  Video Estimate  [/video-estimate/]
  Contact  [/contact/]
```

---

## HOW TO ADD A PAGE IN SQUARESPACE (reference this every time)

1. Pages panel (left sidebar) → click the + button
2. Choose "Blank Page"
3. In Page Settings → General tab → set the Page Title and URL Slug exactly as specified
4. In Page Settings → SEO tab → paste the exact SEO Title and Meta Description provided
5. Make sure the page status is set to DRAFT (not Published)
6. Click Save, then close Page Settings
7. Click into the page to start adding sections and blocks

---

## PAGE 1 — Homepage

**Page title:** Home
**URL slug:** / (this is the homepage, already exists — edit it rather than creating new)
**Draft:** Keep draft if possible. If the homepage is already live and cannot be drafted, build the sections anyway — CSS is not loaded yet so it will look unstyled until after hours.

**SEO Title:** Westchester Movers | Quick Move & Packing Service (Harrison, NY)
**Meta Description:** Family-owned Westchester moving company with over 30 years of experience. Full-service packing, moving, and storage across Westchester, NYC, and the tri-state area. Free quote or video estimate.

### Section 1 — Hero (Cover section, full-width image background)

Use a Cover section type or full-width image background section.

- **Headline (H1):** Local Westchester movers who treat your home like their own.
- **Subhead:** Family-owned for over 30 years. Full-service packing, moving, and storage across Westchester, NYC, and the tri-state area. No surprises. No lowball pricing. Just a crew you can trust in your home.
- **Button 1 (primary):** Get a Free Quote → links to /get-a-quote/
- **Button 2 (secondary):** Upload a Video for Estimate → links to /video-estimate/
- **Text link below buttons:** Call (914) 732-3733 → links to tel:+19147323733
- **Background image:** Upload the hero truck photo when available. Use a dark overlay so text is readable.

### Section 2 — Trust Strip (Code Block, directly below hero)

Add a Code Block section directly below the hero. Paste this exactly:

```html
<div class="qm-trust-strip">
  <span><span class="qm-star">★</span> 4.9 on Google (88 reviews)</span>
  <span><span class="qm-star">★</span> 4.8 on Angi (198 reviews)</span>
  <span>NY State License #38255</span>
  <span>Fully insured</span>
</div>
```

### Section 3 — Service Teaser (3-column native Squarespace block)

Add a new section. Use a 3-column layout with native Squarespace text blocks.

**Section heading (H2):** How we help you move.

Column 1:
- **Heading:** Full-service local moves.
- **Body:** Packing, loading, transport, and setup. Handled by the same small crew from start to finish.
- **Link:** See local moving → /services/local-moving/

Column 2:
- **Heading:** Professional packing.
- **Body:** Kitchens, fragile items, whole homes. Padded, labeled, and actually findable at the other end.
- **Link:** See packing services → /services/packing-services/

Column 3:
- **Heading:** Storage and clean-outs.
- **Body:** In, out, or between units. Plus decluttering help when you're downsizing or selling.
- **Link:** See storage moves → /services/storage-moves/

Below the three columns, add a button or text link:
- **Text:** See all services → /services/

### Section 4 — Why Section (Code Block)

Add a new section. Add a Text block with:
- **H2:** Why families in Westchester call us.

Then add a Code Block directly below. Paste this exactly:

```html
<div class="qm-why-grid">
  <div class="qm-why-item">
    <h3>Over 30 years local</h3>
    <p>Same family, same crew, same name on the truck.</p>
  </div>
  <div class="qm-why-item">
    <h3>No surprises</h3>
    <p>In-person or video estimate before we start. No lowball pricing.</p>
  </div>
  <div class="qm-why-item">
    <h3>Trained crew, not gig workers</h3>
    <p>We hire and train our own team. The same faces show up at your door.</p>
  </div>
  <div class="qm-why-item">
    <h3>Fully licensed and insured</h3>
    <p>NY State #38255. COIs provided on request.</p>
  </div>
</div>
```

### Section 5 — Reviews (Code Block)

Add a new section. Add a Text block with:
- **H2:** What our neighbours say.

Then add a Code Block directly below. Paste this exactly:

```html
<div class="qm-review-grid">
  <div class="qm-review-card">
    <div class="qm-review-stars">★★★★★</div>
    <p class="qm-review-text">If I could give them 10 stars I would. Staff was kind, attentive and efficient. They also had the best price around. I would recommend them to absolutely everyone.</p>
    <div class="qm-review-author">Ashley D. — Mamaroneck, NY</div>
  </div>
  <div class="qm-review-card">
    <div class="qm-review-stars">★★★★★</div>
    <p class="qm-review-text">Professional, knowledgeable, always available for any questions. Outstanding service.</p>
    <div class="qm-review-author">Michael N. — Rye, NY</div>
  </div>
  <div class="qm-review-card">
    <div class="qm-review-stars">★★★★★</div>
    <p class="qm-review-text">Quick Move handled our storage during a full home renovation. They packed everything, stored it, and returned it when we were ready. Not one thing was damaged. Frankie kept us updated the whole time.</p>
    <div class="qm-review-author">Sharon W. — Westchester, NY</div>
  </div>
  <div class="qm-review-card">
    <div class="qm-review-stars">★★★★★</div>
    <p class="qm-review-text">These guys are the real deal. On time, careful with our furniture, and fair on price. Have used them twice now and will use them again.</p>
    <div class="qm-review-author">James R. — White Plains, NY</div>
  </div>
  <div class="qm-review-card">
    <div class="qm-review-stars">★★★★★</div>
    <p class="qm-review-text">Frankie and the crew moved our office over a weekend so we were back up Monday morning. Zero downtime. Every box was labeled and exactly where it needed to be.</p>
    <div class="qm-review-author">Patricia M. — Harrison, NY</div>
  </div>
  <div class="qm-review-card">
    <div class="qm-review-stars">★★★★★</div>
    <p class="qm-review-text">We called with two days notice and they made it happen. The crew was professional, fast, and handled our grandmother's antiques like they were their own. Incredible service.</p>
    <div class="qm-review-author">David L. — Scarsdale, NY</div>
  </div>
</div>
<p style="text-align:center; margin-top: 24px;">
  <a href="/reviews/" style="color: var(--qm-navy); font-weight: 600; font-family: 'Inter', sans-serif;">Read all 288 reviews &rarr;</a>
</p>
```

### Section 6 — Areas (Code Block)

Add a new section. Add a Text block with:
- **H2:** Based in Harrison. Working across Westchester and beyond.
- **Body:** We're a Harrison, NY team serving all of Westchester County, the five boroughs of New York City, and southern Connecticut. Most of our moves happen in White Plains, Mamaroneck, Rye, Larchmont, Harrison, Port Chester, and Scarsdale.

Then add a Code Block directly below. Paste this exactly:

```html
<div class="qm-town-grid">
  <a href="/movers/white-plains-ny/" class="qm-town-card">
    <h3>White Plains</h3>
    <p>County seat. 10 min from our Harrison HQ.</p>
  </a>
  <a href="/movers/mamaroneck-ny/" class="qm-town-card">
    <h3>Mamaroneck</h3>
    <p>5 min away. Chamber of Commerce members.</p>
  </a>
  <a href="/movers/rye-ny/" class="qm-town-card">
    <h3>Rye</h3>
    <p>Historic homes and waterfront. 7 min from HQ.</p>
  </a>
  <a href="/movers/larchmont-ny/" class="qm-town-card">
    <h3>Larchmont</h3>
    <p>Family homes and commuter moves. 10 min away.</p>
  </a>
</div>
<p style="text-align:center; margin-top: 24px;">
  <a href="/areas-we-serve/" style="color: var(--qm-navy); font-weight: 600; font-family: 'Inter', sans-serif;">See all areas we serve &rarr;</a>
</p>
```

### Section 7 — How It Works (Code Block)

Add a new section. Add a Text block with:
- **H2:** Simple, from first call to last box.

Then add a Code Block directly below. Paste this exactly:

```html
<div class="qm-steps">
  <div class="qm-step">
    <div class="qm-step-num">1</div>
    <h3>Tell us about your move</h3>
    <p>Fill out a short form, upload a video, or call us. We'll ask about your home, your timeline, and anything fragile or complicated.</p>
  </div>
  <div class="qm-step">
    <div class="qm-step-num">2</div>
    <h3>Get a real estimate</h3>
    <p>We do in-person or video walkthroughs before quoting. No sight-unseen guesses.</p>
  </div>
  <div class="qm-step">
    <div class="qm-step-num">3</div>
    <h3>We show up prepared</h3>
    <p>Same crew, on time, with the right truck, materials, and padding.</p>
  </div>
  <div class="qm-step">
    <div class="qm-step-num">4</div>
    <h3>You move in</h3>
    <p>We place boxes and furniture where you want them. You don't lift a finger.</p>
  </div>
</div>
```

### Section 8 — Final CTA (Code Block)

Add a new section with a dark background (navy #1B2A4A). Add a Code Block. Paste this exactly:

```html
<div class="qm-cta-block">
  <h2>Ready to plan your move?</h2>
  <p>Get a free estimate in under 24 hours.</p>
  <div class="qm-cta-buttons">
    <a href="/get-a-quote/" style="background-color: #E8743B; color: #fff; padding: 14px 28px; border-radius: 4px; font-family: 'Inter', sans-serif; font-weight: 600; text-decoration: none; display: inline-block;">Get a Free Quote</a>
    <a href="/video-estimate/" style="background-color: transparent; color: #fff; border: 2px solid #fff; padding: 12px 28px; border-radius: 4px; font-family: 'Inter', sans-serif; font-weight: 600; text-decoration: none; display: inline-block;">Upload a Video for Estimate</a>
    <a href="tel:+19147323733" style="color: rgba(255,255,255,0.8); font-family: 'Inter', sans-serif; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; padding: 14px 0;">Call (914) 732-3733</a>
  </div>
</div>
```

**Confirm homepage complete before moving on.**

---

## PAGE 2 — Services Overview

**Page title:** Services
**URL slug:** services
**Folder:** Create a folder called "Services" in the Pages panel. Put this page inside it as the index page.
**Draft:** Yes

**SEO Title:** Moving Services in Westchester, NY | Quick Move & Packing
**Meta Description:** Local and long distance moving, commercial relocations, packing, labor-only, storage, last-minute moves, and junk removal. Licensed, insured, family-owned.

### Section 1 — Hero

- **H1:** Full-service moving, packing, and storage.
- **Subhead:** You can hand the whole move to us. Or just the part you don't want to deal with. Here is what we do.

### Section 2 — Services Grid (Code Block)

Add a Code Block. Paste this exactly:

```html
<div class="qm-service-grid">
  <a href="/services/local-moving/" class="qm-service-card">
    <h3>Local Moving</h3>
    <p>Full-service moves across Westchester County. Packing through unpacking, one crew, one plan.</p>
  </a>
  <a href="/services/long-distance-moving/" class="qm-service-card">
    <h3>Long Distance Moving</h3>
    <p>Select long distance moves from Westchester. Flat pricing agreed up front, no add-ons at delivery.</p>
  </a>
  <a href="/services/commercial-moving/" class="qm-service-card">
    <h3>Commercial and Office Moves</h3>
    <p>Overnight, weekend, or holiday relocations. Your team is working again by Monday.</p>
  </a>
  <a href="/services/packing-services/" class="qm-service-card">
    <h3>Professional Packing</h3>
    <p>Whole home or just the rooms you don't want to deal with. Labeled and ready to travel.</p>
  </a>
  <a href="/services/labor-only/" class="qm-service-card">
    <h3>Labor-Only Moving</h3>
    <p>Already have a truck? We supply the crew. Loading, unloading, and rearranging.</p>
  </a>
  <a href="/services/storage-moves/" class="qm-service-card">
    <h3>Storage Moves</h3>
    <p>Move-ins, move-outs, and transfers. One team handles it all with no handoffs.</p>
  </a>
  <a href="/services/last-minute-moves/" class="qm-service-card">
    <h3>Last-Minute Moves</h3>
    <p>Short notice? We'll tell you honestly if we can help. If we can, we show up ready.</p>
  </a>
  <a href="/services/junk-removal/" class="qm-service-card">
    <h3>Junk Removal</h3>
    <p>Clean out a basement, garage, or whole house. Hauled away the same day we move you.</p>
  </a>
</div>
```

### Section 3 — CTA

Add a Button block: Get a Free Quote → /get-a-quote/

**Confirm before moving on.**

---

## PAGES 3–10 — The Eight Service Pages

All eight service pages go inside the Services folder. Each follows the same template. Create them one at a time.

### Template for every service page:

1. Hero section: H1 + subhead + Button (Get a Free Quote → /get-a-quote/)
2. What's included: H2 + bulleted list
3. Who this is for: H2 + 2–3 short paragraphs
4. Why Quick Move: H2 + 3 bullet points
5. CTA block (Code Block — paste same CTA HTML as homepage Section 8)

---

### PAGE 3 — Local Moving

**URL slug:** local-moving (inside Services folder → path becomes /services/local-moving/)
**Draft:** Yes

**SEO Title:** Local Movers in Westchester, NY | Quick Move & Packing
**Meta Description:** Family-owned local movers serving Westchester County for over 30 years. Licensed, insured, fair pricing. Free quote.

**H1:** Local moving across Westchester County.
**Subhead:** Full-service local moves across Westchester, handled by a small, experienced crew that treats your home like their own. Packing through unpacking, one team, one plan.

**Intro paragraph:**
We've been moving families and professionals across Westchester County for over 30 years. That includes White Plains, Mamaroneck, Rye, Larchmont, Harrison, Port Chester, Scarsdale, and every town in between. We know the buildings, the streets, and the rules.

**H2: What's included.**
- Pre-move walkthrough, in person or by video
- Protection for floors, walls, stairs, and doorways
- Professional wrapping and padding of furniture
- Loading, secure transport, and unloading
- Box and furniture placement in the correct rooms
- Same crew from start to finish

**H2: Who this is for.**
- Busy families moving within Westchester on a tight school-and-work timeline
- Downsizing homeowners who need patient, respectful help
- Apartment and condo movers coordinating elevators, building rules, and parking

**H2: Why Quick Move.**
- Over 30 years of Westchester experience
- Small, consistent crews. No random day laborers.
- No lowball pricing. Real estimates before we start.

**Bottom CTA:** Paste the standard CTA code block (same as homepage Section 8).

---

### PAGE 4 — Long Distance Moving

**URL slug:** long-distance-moving
**Draft:** Yes

**SEO Title:** Long Distance Movers from Westchester, NY | Quick Move & Packing
**Meta Description:** Long distance moves from Westchester to the surrounding region. Flat pricing, careful handling, honest timelines.

**H1:** Long distance moving from Westchester.
**Subhead:** We handle select long distance moves out of Westchester into the surrounding region. Organized. Well-planned. Not rushed.

**Intro paragraph:**
Long distance moves need more coordination than local work. That's fine. We plan for it. Before we book anything we talk through the route, the timing, and the pricing in detail. If it's not a good fit for us, we'll say so and point you to a company that handles it better.

**H2: What's included.**
- Detailed move planning and written timeline
- Secure packing and furniture protection
- Scheduled transport and delivery
- Direct communication throughout the trip

**H2: Who this is for.**
- Families relocating from Westchester to the broader Northeast or Mid-Atlantic
- Moves where you want the same crew packing and delivering, not a handoff to a sub-contracted driver
- Customers who've been burned by bait-and-switch long-distance pricing and want honest numbers up front

**H2: Why Quick Move.**
- Flat pricing agreed up front. No add-ons at the delivery door.
- Same crew packing and delivering where the route allows
- We turn down routes we can't handle well. You won't be passed off.

**Bottom CTA:** Paste standard CTA code block.

---

### PAGE 5 — Commercial Moving

**URL slug:** commercial-moving
**Draft:** Yes

**SEO Title:** Office Movers in Westchester and NYC | Quick Move & Packing
**Meta Description:** Weekend and overnight office relocations across Westchester and NYC. Licensed commercial movers with over 30 years of experience.

**H1:** Office and commercial moves, handled on your schedule.
**Subhead:** Overnight, weekend, or holiday relocations so your team is working again by Monday morning.

**H2: What's included.**
- Planning walkthrough with your office manager
- Packing and labeling of desks, files, and equipment
- Careful handling of monitors, servers, and fragile office items
- After-hours and weekend scheduling
- Unpacking and placement at the new location

**H2: Who this is for.**
- Small and mid-sized offices in Westchester and the five boroughs
- Medical, legal, and professional practices relocating without disruption
- Retail and showroom moves with tight windows

**H2: Why Quick Move.**
- Steve and Frankie personally plan commercial jobs.
- Flexible scheduling. If you need it done overnight, that's how we schedule it.
- COIs and building coordination handled without extra hand-holding.

**Bottom CTA:** Paste standard CTA code block.

---

### PAGE 6 — Professional Packing

**URL slug:** packing-services
**Draft:** Yes

**SEO Title:** Professional Packing Services in Westchester | Quick Move & Packing
**Meta Description:** Whole-home or partial packing by an experienced local crew. Proper materials, proper labeling. Available standalone.

**H1:** Professional packing, done right the first time.
**Subhead:** Whole-home packs or just the rooms you don't want to deal with. Labeled, padded, and ready to travel.

**H2: What's included.**
- All packing materials supplied, or we'll work with yours
- Careful wrapping of fragile items, china, art, and electronics
- Clear labeling by room and contents
- Wardrobe boxes for hanging clothes
- Unpacking at the new home if you want it

**H2: Who this is for.**
- Families who can move themselves but don't want to pack
- Homeowners staging for sale who need items packed and stored
- Anyone with a kitchen or china cabinet they don't want to touch

**H2: Why Quick Move.**
- Packers trained to our standard. Not random labor.
- Real labeling. You'll know where everything is at the other end.
- Packing only is fine. You don't have to use us for the whole move.

**Bottom CTA:** Paste standard CTA code block.

---

### PAGE 7 — Labor-Only Moving

**URL slug:** labor-only
**Draft:** Yes

**SEO Title:** Labor-Only Movers in Westchester, NY | Quick Move & Packing
**Meta Description:** Experienced movers for loading, unloading, and rearranging. Truck not included. Serving Westchester and the tri-state area.

**H1:** Labor-only moving help.
**Subhead:** Already have a truck? We'll supply the crew. Load, unload, or rearrange, by experienced movers who've done this thousands of times.

**H2: What's included.**
- Loading and unloading of rental trucks or PODS
- Furniture moving within your home
- Rearranging heavy items
- Moving into or out of storage

**H2: Who this is for.**
- DIY movers who rented a truck and need muscle for the heavy end of the job
- Customers moving into or out of a storage unit
- Anyone who just needs a couple of large pieces relocated

**H2: Why Quick Move.**
- Same trained crew that handles full moves. No gig workers on labor-only jobs either.
- Right-sized team for the job. We'll tell you honestly whether you need two, three, or four.
- Available same-day on occasion, depending on the schedule.

**Bottom CTA:** Paste standard CTA code block.

---

### PAGE 8 — Storage Moves

**URL slug:** storage-moves
**Draft:** Yes

**SEO Title:** Storage Movers in Westchester, NY | Quick Move & Packing
**Meta Description:** Storage move-ins, move-outs, and transfers across Westchester. One team, one plan, one truck.

**H1:** Moves into, out of, and between storage.
**Subhead:** Renovation, home sale, or downsizing project. We handle the storage leg without a second trip.

**H2: What's included.**
- Packing of items going into storage
- Transport to the storage facility of your choice, or one we recommend
- Retrieval and return trips when you're ready
- Short-term and long-term storage coordination

**H2: Who this is for.**
- Homeowners mid-renovation who need furniture out of the way
- People selling a home who need to stage and store simultaneously
- Downsizers transitioning between homes on different timelines

**H2: Why Quick Move.**
- One crew handling pack, store, and return. No handoffs.
- We've worked with most Westchester storage facilities and know their rules.
- Long-term storage handled carefully, not dumped and forgotten.

**Bottom CTA:** Paste standard CTA code block.

---

### PAGE 9 — Last-Minute Moves

**URL slug:** last-minute-moves
**Draft:** Yes

**SEO Title:** Last-Minute Movers in Westchester, NY | Quick Move & Packing
**Meta Description:** Short-notice moves across Westchester and the tri-state area. Call (914) 732-3733 for same-day quotes.

**H1:** Last-minute moves, handled with the same care.
**Subhead:** Got a short timeline? We'll tell you honestly whether we can help. If we can, we show up ready.

**H2: What's included.**
- Quick-response quote, usually same day
- Emergency packing and material delivery
- Flexible scheduling including evenings and weekends
- Same crew quality as a planned move

**H2: Who this is for.**
- Renters with surprise end-of-lease situations
- Anyone whose original movers fell through
- Families dealing with unexpected life events that require a fast move

**H2: Why Quick Move.**
- Honest answer fast. If we can't fit you in, we'll tell you right away.
- Same crew, same standard. A rush job doesn't mean a worse job.
- Packing help on short notice is available.

**Bottom CTA:** Paste standard CTA code block.

---

### PAGE 10 — Junk Removal

**URL slug:** junk-removal
**Draft:** Yes

**SEO Title:** Junk Removal and Clean-Outs in Westchester | Quick Move & Packing
**Meta Description:** Home clean-outs and junk removal across Westchester. Paired with a move or standalone. Free quote.

**H1:** Junk removal that pairs with your move.
**Subhead:** Clean out a basement, a garage, or a whole house. We haul it away the same day we move you.

**H2: What's included.**
- Full-home and partial clean-outs
- Furniture, appliances, and general debris
- Donation runs where possible
- Scheduled alongside your move or as a standalone job

**H2: Who this is for.**
- Homeowners clearing out before a sale
- Families cleaning out a parent's home
- Anyone downsizing who needs the old stuff gone before the new stuff arrives

**H2: Why Quick Move.**
- One crew, one day. We move you in and take the junk out in the same visit.
- We'll tell you honestly what's worth donating and what isn't.
- No pure junk jobs without a connection to moving. We focus on what we're good at.

**Bottom CTA:** Paste standard CTA code block.

---

## PAGE 11 — Moving Supplies

**Page title:** Moving Supplies
**URL slug:** moving-supplies
**Draft:** Yes
**Not in main nav — add to footer only**

**SEO Title:** Moving Boxes and Supplies Delivered in Westchester | Quick Move & Packing
**Meta Description:** Moving boxes, tape, padding, and wardrobe boxes delivered free across Westchester. Call (914) 732-3733.

**H1:** Moving supplies, delivered free in Westchester.
**Subhead:** Boxes, tape, padding, wardrobe boxes. We drop them at your door before move day. No pickup fees and no minimums in our delivery area.

**Section: What we supply**

Add a bulleted list:
- Standard moving boxes (small, medium, large)
- Heavy-duty wardrobe boxes with hanging bar
- Packing tape and dispensers
- Bubble wrap and packing paper
- Furniture pads and moving blankets
- Specialty boxes (dish packs, mirror boxes)

**CTA section:**

Add a Text block:
- **H2:** Order by phone or form.
- **Body:** Call (914) 732-3733 to place an order. We'll confirm delivery timing and drop everything at your door before move day.
- **Button:** Call (914) 732-3733 → tel:+19147323733

---

## PAGE 12 — Areas We Serve

**Page title:** Areas We Serve
**URL slug:** areas-we-serve
**Draft:** Yes
**In nav under Areas dropdown**

**SEO Title:** Areas We Serve | Westchester, NYC and Tri-State Movers
**Meta Description:** Quick Move serves Westchester County, NYC boroughs, and southern Connecticut. Based in Harrison, NY.

**H1:** Based in Harrison. Moving families across Westchester, NYC, and the tri-state area.

**Intro paragraph:**
Quick Move has been part of the Westchester community for over 30 years. Our trucks and crews work out of Harrison, NY. Most of our moves happen right in our own backyard, which means we know the buildings, the streets, and the parking rules.

**Section: Featured towns**

Add a Text block: **H2:** Our most-served towns.

Then below it add four town cards using a 2x2 grid or 4-column layout. Each card links to its town page:
- White Plains → /movers/white-plains-ny/
- Mamaroneck → /movers/mamaroneck-ny/
- Rye → /movers/rye-ny/
- Larchmont → /movers/larchmont-ny/

**Section: We also serve**

Add a Text block: **H2:** We also serve.

**Body text:**
Harrison, Scarsdale, Port Chester, Rye Brook, New Rochelle, Bronxville, Yonkers, Eastchester, Tuckahoe, all five NYC boroughs, and Fairfield County, CT (Greenwich, Stamford, Darien).

**H3:** Don't see your town?
Call (914) 732-3733 → tel:+19147323733. We probably cover it.

**Bottom CTA:** Paste standard CTA code block.

---

## PAGES 13–16 — The Four Town Pages

Create a folder called "movers" (not linked in main navigation — only Areas We Serve is linked). Put all four town pages inside it. Their URLs will be /movers/[town-slug]/.

---

### PAGE 13 — White Plains

**URL slug:** white-plains-ny (inside movers folder → /movers/white-plains-ny/)
**Draft:** Yes

**SEO Title:** White Plains Movers | Local Westchester Moving Company
**Meta Description:** Family-owned movers serving White Plains, NY for over 30 years. Condo, home, and office relocations. Licensed, insured. Free quote.

**H1:** Movers in White Plains, NY.
**Subhead:** The county seat is ten minutes from our Harrison home base. We handle condo moves on Main Street, family relocations in Gedney, and everything in between.

**Local context paragraph:**
White Plains has every kind of move we handle: high-rise condos downtown, townhouses in Battle Hill, single-family homes in Gedney and Rosedale, and professional offices on Bloomingdale Road. We know the buildings that need COIs, the streets with loading-zone rules, and which garages fit a 26-foot truck. We've been moving White Plains residents for over three decades.

**H2: Popular moves we handle in White Plains.**
- Downtown condo and high-rise moves (The Residences, The Ritz-Carlton, 221 Main)
- Family homes in Gedney, Rosedale, and Battle Hill
- Office relocations on Bloomingdale Road and Bank Street
- Moves to and from storage facilities around Westchester Avenue

**H2: Our neighbours say.**

Add a review card using a Text block:
"Quick Move is the best. On time, efficient, and careful with everything. Have used them for two moves in White Plains and would not use anyone else."
— Karen B., White Plains, NY

**Quick facts:**
- Drive time from Harrison HQ: 10 minutes
- Nearby towns we also serve: Scarsdale, Harrison, Eastchester, Greenburgh

**Bottom CTA:** Paste standard CTA code block.

---

### PAGE 14 — Mamaroneck

**URL slug:** mamaroneck-ny
**Draft:** Yes

**SEO Title:** Mamaroneck Movers | Local Westchester Moving Company
**Meta Description:** Mamaroneck movers based minutes away in Harrison, NY. Family-owned, over 30 years, fully insured. Chamber members. Free quote.

**H1:** Movers in Mamaroneck, NY.
**Subhead:** Five minutes from our Harrison base, and a place we know by heart. Waterfront homes, village apartments, and everything from the Post Road to Orienta Point.

**Local context paragraph:**
Mamaroneck is one of the towns we move in most often. We're proud members of the Mamaroneck Chamber of Commerce. We've handled moves up and down Boston Post Road, in the village, in Orienta, and out by Harbor Island. We know the summer traffic, the streets that need permits, and how to protect hardwoods in a 1920s colonial.

**H2: Popular moves we handle in Mamaroneck.**
- Waterfront and Orienta single-family homes
- Village apartments and condos
- Harbor Island and Shore Acres moves
- Storage moves for summer residents
- Senior downsizing into the village

**H2: Our neighbours say.**

Add a review card:
"If I could give them 10 stars I would. Staff was kind, attentive and efficient. They also had the best price around. I would recommend them to absolutely everyone."
— Ashley D., Mamaroneck, NY

**Quick facts:**
- Drive time from Harrison HQ: 5 minutes
- Member: Mamaroneck Chamber of Commerce
- Nearby towns: Larchmont, Harrison, Rye, New Rochelle

**Bottom CTA:** Paste standard CTA code block.

---

### PAGE 15 — Rye

**URL slug:** rye-ny
**Draft:** Yes

**SEO Title:** Rye NY Movers | Local Westchester Moving Company
**Meta Description:** Rye, NY movers with over 30 years of local experience. Historic homes, condos, family relocations. Licensed, insured. Free quote.

**H1:** Movers in Rye, NY.
**Subhead:** Across the border from our Harrison HQ. Historic homes, families moving up, and downsizers moving down. We handle them all with care.

**Local context paragraph:**
Rye is one of our most-served towns. We see every type of move here. Historic homes in Rye City. Newer families moving into Milton Point and Indian Village. A steady flow of downsizers heading into condos. We know the parking rules, the narrow driveways, and how to protect the older staircases and hardwood floors that these homes deserve.

**H2: Popular moves we handle in Rye.**
- Historic single-family homes in Rye City and Milton Point
- Condo and townhouse moves near downtown
- Senior downsizing from long-time family homes
- Waterfront properties in Indian Village
- Moves to and from Rye Brook and Port Chester

**H2: Our neighbours say.**

Add a review card:
"Professional, knowledgeable, always available for any questions. Outstanding service."
— Michael N., Rye, NY

**Quick facts:**
- Drive time from Harrison HQ: 7 minutes
- Nearby towns: Harrison, Rye Brook, Port Chester, Mamaroneck

**Bottom CTA:** Paste standard CTA code block.

---

### PAGE 16 — Larchmont

**URL slug:** larchmont-ny
**Draft:** Yes

**SEO Title:** Larchmont Movers | Local Westchester Moving Company
**Meta Description:** Larchmont, NY movers based in Harrison. Family-owned, over 30 years, licensed and insured. Commuter, family, and senior moves. Free quote.

**H1:** Movers in Larchmont, NY.
**Subhead:** Ten minutes from our Harrison base. Family homes, commuter moves, and the occasional trip to the city. We've been part of the Larchmont rhythm for years.

**Local context paragraph:**
Larchmont families tend to know what they want. A careful crew, a fair price, no surprises. We've moved people into the Manor, out of the Flats, and up and down Boston Post Road. We know the timing of the morning commute. We know which streets get tight around school drop-off. We schedule around all of it.

**H2: Popular moves we handle in Larchmont.**
- Family homes in the Manor and the Flats
- Commuter moves to and from NYC
- Condo and co-op moves on Boston Post Road
- Senior downsizing and in-town transitions
- Summer and fall moves around the school calendar

**H2: Our neighbours say.**

Add placeholder text: [Frankie to provide Larchmont customer review before launch]

**Quick facts:**
- Drive time from Harrison HQ: 10 minutes
- Nearby towns: Mamaroneck, New Rochelle, Harrison, Rye

**Bottom CTA:** Paste standard CTA code block.

---

## PAGE 17 — About

**Page title:** About
**URL slug:** about
**Draft:** Yes

**SEO Title:** About Quick Move & Packing | Family-Owned Westchester Movers
**Meta Description:** Family-owned and operated by the Rocco family for over 30 years. Based in Harrison, NY. Licensed, insured, trusted across Westchester.

**H1:** A Westchester family business, moving Westchester families.
**Subhead:** Started in the Bronx. Based in Harrison since 1996. Same family, same crew, same name on the truck.

**H2: Our story.**

Add three paragraphs:

Paragraph 1:
Quick Move & Packing was started by Steve Rocco over 30 years ago with one truck and one rule. Treat every home like it was your own mother's. Steve grew up in the Bronx, learned the trade the hard way, and built a reputation one move at a time.

Paragraph 2:
Today the business runs out of 240 Halstead Avenue in Harrison, NY, with Steve still involved in every major job and his son Frankie running the day-to-day. Our crew is small by design. We don't hire gig workers. We train our own people and keep them, which is why the same faces show up at your door that showed up at your neighbour's.

Paragraph 3:
We've moved families across Westchester, the five boroughs, and southern Connecticut. We've moved offices, packed kitchens, coordinated storage, and done clean-outs. What hasn't changed in over 30 years is how we do it. Carefully, on time, and with no surprises.

**H2: What we believe.**
- No surprises. You get a real estimate from a real person before we start. No bait-and-switch.
- Trained crew, not gig workers. Every person on your move is trained, uniformed, and part of our team.
- Your home, handled like ours. Floor protection, door padding, careful wrapping. Always.

**H2: Our credentials.**
- NY State Moving License #38255
- US DOT and NYDOT compliant
- Fully insured, COIs on request
- HomeAdvisor Elite Service, 5 years screened and approved
- Members, Mamaroneck Chamber of Commerce

**H2: The team.**

Add placeholder: [Frankie to provide photos of Steve, Frankie, and crew with short bios before launch]

**Bottom CTA:** Paste standard CTA code block.

---

## PAGE 18 — Reviews

**Page title:** Reviews
**URL slug:** reviews
**Draft:** Yes

**SEO Title:** Reviews | 288 Reviews for Quick Move & Packing Service
**Meta Description:** Real reviews from Westchester families on Google and Angi. 4.9 stars average. Family-owned movers with over 30 years of experience.

**H1:** 288 reviews and counting.
**Subhead:** 88 reviews on Google averaging 4.9 stars. 198 reviews on Angi averaging 4.8. Here is what our neighbours are saying.

**Section 1 — Google Reviews**

Add a Text block: **H2:** Google Reviews.

Add a placeholder note: [Elfsight Google Reviews widget goes here — set up at elfsight.com, embed code added before launch. ~$9/month.]

**Section 2 — Selected Angi Reviews**

Add a Text block: **H2:** What Angi customers say.

Add these review cards as Text blocks:

Review 1:
"If I could give them 10 stars I would. Staff was kind, attentive and efficient. They also had the best price around."
— Ashley D., Mamaroneck, NY | Angi

Review 2:
"Professional, knowledgeable, always available for any questions. Outstanding service."
— Michael N., Rye, NY | Angi

Review 3:
"Quick Move handled our storage during a full home renovation. Not one thing was damaged. Frankie kept us updated the whole time."
— Sharon W., Westchester, NY | Angi

Review 4:
"These guys are the real deal. On time, careful with our furniture, and fair on price. Have used them twice now and will use them again."
— James R., White Plains, NY | Angi

Review 5:
"Frankie and the crew moved our office over a weekend so we were back up Monday morning. Zero downtime."
— Patricia M., Harrison, NY | Angi

Review 6:
"We called with two days notice and they made it happen. The crew was professional, fast, and handled our grandmother's antiques like they were their own."
— David L., Scarsdale, NY | Angi

**Section 3 — Leave a Review CTA**

Add a Text block:
**H2:** Moved with us recently?
**Body:** We'd appreciate a quick Google review. It helps other Westchester families find a mover they can trust.
**Button:** Leave a Google Review → [Frankie to provide Google review URL before launch]

---

## PAGE 19 — FAQs

**Page title:** FAQ
**URL slug:** faqs
**Draft:** Yes

**SEO Title:** FAQ | Quick Move & Packing Service (Westchester, NY)
**Meta Description:** Common questions about our moving services, pricing, packing, storage, video estimates, and more. Call (914) 732-3733.

**H1:** Frequently asked questions.
**Subhead:** If we missed one, call us at (914) 732-3733.

Use Squarespace's Accordion block for all Q&A pairs below. Each Q is the accordion title, each A is the expanded content.

**Pricing and estimates:**

Q: How do you quote a move?
A: We do an in-person or video walkthrough, then send a written estimate. Flat rate available on request.

Q: Are there hidden fees?
A: Never. We discuss all fees before, during, and after your job.

Q: Do you offer flat-rate moves?
A: Yes. Ask for one at quote time.

Q: Do you require a deposit?
A: [Frankie to confirm deposit policy before launch]

**Services:**

Q: Do you pack?
A: Yes. Full pack or partial pack, whichever fits your move.

Q: Do you do last-minute moves?
A: Yes, when our schedule allows. Call (914) 732-3733 for same-day availability.

Q: Do you do storage?
A: Yes. Short and long term. We pack it, move it in, and return it when you're ready.

Q: Do you do office moves?
A: Yes. Evenings and weekends available to minimize your downtime.

Q: Do you do labor only?
A: Yes. We bring the crew. You bring the truck.

Q: Do you haul away junk?
A: Yes, usually paired with a move. Call us to discuss.

**Logistics:**

Q: What areas do you serve?
A: Westchester County, New York City, and Fairfield County, CT. Call (914) 732-3733 if you don't see your town listed.

Q: How far in advance should I book?
A: Two to four weeks is ideal in peak season (May through September). We do take last-minute jobs when the schedule allows.

Q: Can you move me on a weekend?
A: Yes, with booking lead time.

Q: Can I upload a video for an estimate?
A: Yes. Record a walkthrough on your phone and upload it at /video-estimate/. Steve or Frankie reviews it personally.

**Credentials and insurance:**

Q: Are you licensed?
A: Yes. NY State Moving License #38255. NYDOT and USDOT compliant.

Q: Do you provide a Certificate of Insurance (COI)?
A: Yes, on request.

Q: Are you insured?
A: Yes, fully insured.

**Supplies:**

Q: Where can I buy moving supplies?
A: At our Harrison store at 240 Halstead Avenue, or we deliver free across Westchester. See /moving-supplies/ for details.

---

## PAGE 20 — Get a Quote

**Page title:** Get a Quote
**URL slug:** get-a-quote
**Draft:** Yes
**This is the primary conversion page.**

**SEO Title:** Get a Free Moving Quote | Quick Move & Packing (Westchester)
**Meta Description:** Request a free estimate from Quick Move & Packing. In-person, phone, or video walkthrough. Same-day response during business hours.

**H1:** Tell us about your move.
**Subhead:** Fill out the form below, upload a video, or call (914) 732-3733. We respond within a few hours during business hours, usually the same day.

### Two-path block

Add a 2-column section:

Column 1:
**H3:** In-home or phone estimate.
Fill out the form. We'll schedule a quick walkthrough. Most accurate pricing because we see exactly what's moving.

Column 2:
**H3:** Video estimate (faster).
Record a walkthrough on your phone and upload it. Steve or Frankie watches it personally and sends pricing back the same day during business hours.
Link: Upload a video → /video-estimate/

### Quote form (Code Block)

Add a Code Block below the two-path section. Paste this exactly:

```html
<div class="qm-form-wrapper" style="margin-top: 32px;">
  <script type="text/javascript" src="https://form.jotform.com/jsform/261155435755056"></script>
</div>
<div class="qm-trust-strip" style="margin-top: 24px;">
  <span><span class="qm-star">★</span> 4.9 on Google</span>
  <span><span class="qm-star">★</span> 4.8 on Angi</span>
  <span>NY License #38255</span>
  <span>Fully insured</span>
</div>
```

### Contact sidebar

Add a section below the form with contact details:
- Call: (914) 732-3733 → tel:+19147323733
- Email: steven@myquickmove.com → mailto:steven@myquickmove.com
- Visit: 240 Halstead Avenue, Harrison, NY 10528
- Hours: Mon–Sat 8:00 AM – 6:00 PM

---

## PAGE 21 — Video Estimate

**Page title:** Video Estimate
**URL slug:** video-estimate
**Draft:** Yes

**SEO Title:** Video Estimate | Quick Move & Packing (Westchester, NY)
**Meta Description:** Upload a walkthrough video and get a moving estimate back the same day. Westchester movers, licensed and insured, family-owned.

**H1:** Get a quote by video.
**Subhead:** Faster than scheduling a visit. Record a quick walkthrough on your phone, upload it here, and we'll send you pricing back the same day during business hours.

### Video form (Code Block)

Add a Code Block. Paste this exactly:

```html
<div class="qm-steps" style="margin-bottom: 40px;">
  <div class="qm-step">
    <div class="qm-step-num">1</div>
    <h3>Walk and record</h3>
    <p>Start in your entryway and walk through each room. Open closets, pan furniture, show us anything fragile or oversized.</p>
  </div>
  <div class="qm-step">
    <div class="qm-step-num">2</div>
    <h3>Upload the file</h3>
    <p>Drag it into the form below, or upload directly from your phone. Record in 1080p — not 4K — to keep the file under 1GB.</p>
  </div>
  <div class="qm-step">
    <div class="qm-step-num">3</div>
    <h3>Get a quote</h3>
    <p>Steven reviews the video and follows up with a written estimate. Usually within a few hours during business hours.</p>
  </div>
</div>
<div class="qm-trust-strip" style="margin-bottom: 32px;">
  <span>Reviewed by Steve or Frankie personally, not AI</span>
  <span>NY License #38255</span>
  <span>Fully insured</span>
</div>
<div class="qm-form-wrapper">
  <script type="text/javascript" src="https://form.jotform.com/jsform/261114582203042"></script>
</div>
<div class="qm-trust-strip" style="margin-top: 24px;">
  <span><span class="qm-star">★</span> 4.9 on Google (88 reviews)</span>
  <span><span class="qm-star">★</span> 4.8 on Angi (198 reviews)</span>
  <span>Same-day response during business hours</span>
</div>
```

### What to show in the video

Add a Text block:
**H2:** What to show in the video.
- Every room with furniture to be moved
- Closets, basement, attic, garage
- Anything heavy, fragile, or oversized (piano, safe, artwork, large mirrors)
- The path out of the home (stairs, elevators, driveway access)

---

## PAGE 22 — Contact

**Page title:** Contact
**URL slug:** contact
**Draft:** Yes
**Not in main nav — footer only**

**SEO Title:** Contact Quick Move & Packing | (914) 732-3733
**Meta Description:** Call, email, or visit Quick Move & Packing at 240 Halstead Ave, Harrison NY. Serving Westchester for over 30 years.

**H1:** Get in touch.

Add four blocks:

Block 1:
**H3:** Need a quote?
Button: Get a Free Quote → /get-a-quote/

Block 2:
**H3:** Prefer video?
Button: Upload a Video Estimate → /video-estimate/

Block 3:
**H3:** Call us.
(914) 732-3733 → tel:+19147323733

Block 4:
**H3:** Visit the store.
240 Halstead Avenue, Harrison, NY 10528
Add a Squarespace Map block with this address.

Block 5:
**H3:** Email.
steven@myquickmove.com → mailto:steven@myquickmove.com

Block 6:
**H3:** Hours.
Monday – Saturday: 8:00 AM – 6:00 PM

---

## PAGE 23 — Thank You

**Page title:** Thank You
**URL slug:** thank-you
**Draft:** Yes
**IMPORTANT: Set this page to noindex. In Page Settings → SEO tab → check "Hide page from search engines"**

**H1:** We got it.
**Body:** Frankie or Steven will reach out within a few hours during business hours (Mon–Sat 8am–6pm). If it's urgent, call (914) 732-3733.

Button: Back to Home → /

---

## FOOTER STRUCTURE

After all pages are built, set up the footer using four columns of native Squarespace blocks.

**Column 1:**
- Logo image block
- Text: Family-owned Westchester movers since 1996
- Text: NY State License #38255

**Column 2 — Services:**
Text links to each service page:
- Local Moving → /services/local-moving/
- Long Distance Moving → /services/long-distance-moving/
- Commercial Moves → /services/commercial-moving/
- Professional Packing → /services/packing-services/
- Labor-Only Moving → /services/labor-only/
- Storage Moves → /services/storage-moves/
- Last-Minute Moves → /services/last-minute-moves/
- Junk Removal → /services/junk-removal/

**Column 3 — Areas:**
Text links:
- White Plains → /movers/white-plains-ny/
- Mamaroneck → /movers/mamaroneck-ny/
- Rye → /movers/rye-ny/
- Larchmont → /movers/larchmont-ny/
- Westchester County (plain text, no link)
- NYC (plain text)
- Fairfield County, CT (plain text)

**Column 4 — Contact:**
- Text: 240 Halstead Avenue, Harrison, NY 10528
- Text with link: (914) 732-3733 → tel:+19147323733
- Text with link: steven@myquickmove.com → mailto:steven@myquickmove.com
- Text: Mon–Sat 8:00 AM – 6:00 PM

**Bottom bar (full width):**
Text: Copyright 2026 Quick Move & Packing Service · NY State License #38255

---

## FINAL CHECKS BEFORE HANDOFF TO CLAUDE CODE

Before we finish, confirm each item:

- [ ] All 23 pages exist in the Pages panel
- [ ] All pages are in DRAFT status (not Published)
- [ ] Every page has its correct URL slug set in Page Settings
- [ ] Every page has its SEO Title and Meta Description entered
- [ ] /thank-you/ is set to noindex
- [ ] All JotForm embeds are on /get-a-quote/ and /video-estimate/
- [ ] All code blocks are pasted on the homepage
- [ ] Footer is built with all four columns
- [ ] Navigation folder structure matches the spec above
- [ ] No CSS or Code Injection has been touched

When all items are checked, this session is complete.

---

## HANDOFF NOTE FOR CLAUDE CODE (after hours)

The following work is done by Claude Code in a separate session after these pages are built:

1. Custom CSS → Design → Custom CSS (file: site_build/01_custom_css.css)
2. Site-wide Header Injection → Settings → Advanced → Code Injection → Header (file: site_build/02_header_injection.html) — requires GTM Container ID
3. Site-wide Footer Injection → Settings → Advanced → Code Injection → Footer (file: site_build/03_footer_injection.html) — requires GTM Container ID
4. URL Mappings → Settings → Advanced → URL Mappings (file: site_build/06_url_mappings.txt)
5. Page-level schema for all 13 pages → individual Page Settings → Advanced → Page Header Code Injection (folder: site_build/04_page_schemas/)
6. Publish all draft pages simultaneously
7. Run pre-launch checklist from site_build/00_IMPLEMENTATION_GUIDE.md
