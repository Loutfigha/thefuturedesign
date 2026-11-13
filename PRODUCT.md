# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no framework, no build step (confirmed, existing repo convention — see CLAUDE.md: "Geen frameworks of build-tools toevoegen zonder overleg"). 14 HTML pages sharing one style.css and one main.js.

## Users

Dutch MKB-ers (small/medium business owners) who want a website built for them — the brief's stated audience for this redesign round. Existing site copy frames them as owners frustrated with past results ("te veel ondernemers betalen voor websites die niets opleveren, of voor advertenties naar een site die niet converteert") and unsure where to start (strategie FAQ: "ondernemers die willen groeien maar twijfelen waar te beginnen: nieuwe site, meer advertenties of iets anders").

## Product Purpose

Marketing site for The Future Design, a web design & digital marketing studio (Almere, NL) offering webdesign, e-commerce, strategy, and ad campaigns under one roof. The site's job is to get a visiting MKB-er to book the free intro call (Cal.com) or send a contact-form message. Explicit brief for this round: the site itself should feel "innovatief" (innovative) to a buyer evaluating whether this agency can build something good for them.

## Positioning

One team handles strategy, design, and marketing together, instead of a buyer juggling separate freelancers/agencies per discipline. Existing copy: "Een mooie site zonder bezoekers levert niets op. Sterke advertenties naar een zwakke site ook niet. Daarom pakken we het samen op."

## Operating Context

- Contact form submits via FormSubmit.co (`formsubmit.co/ajax/info@thefuturedesign.nl`) — no backend.
- Booking happens through an embedded Cal.com iframe (dark theme).
- A WhatsApp floating button links to `wa.me/31657815202`.
- An e-book popup (lead magnet, "3 tips...") collects an email via the same FormSubmit endpoint and triggers a local PDF download; shown once per browser after 10s, tracked via localStorage.
- Case studies and services pages exist as real, separately templated pages (not a CMS) — any new page/section is hand-authored HTML.
- Deploy is automatic: push to `main` triggers a GitHub Actions FTP deploy to Vimexx hosting. Nothing is live until merged to `main`.

## Capabilities and Constraints

- No CMS, no server-side code, no database — everything is static markup, so "content editing" happens by hand-editing HTML.
- 5 real named client cases exist (ROHI, iWannaBurnFat, Bestehondenvoer.nl, The Candy Safe, Sakeenah Reizen) with real case narratives; the quantitative stats on them are rough estimates, explicitly labeled as such on at least one case page, not verified metrics — future work must not present them as audited figures.
- No real work screenshots or team photos exist yet (confirmed open gap, see Evidence below); this redesign round continues with placeholder/abstract treatment for both.
- Services are currently consolidated onto one `diensten.html` with four anchored sections (webdesign, e-commerce, strategie, campagnes); the four old standalone service URLs are redirect stubs preserved for SEO/bookmarks.
- Dutch-language site, je/jij address form throughout.

## Brand Commitments

- Name: "the future design" (lowercase wordmark in the logo lockup).
- Logo: a three-flame mark (violet/cyan/pink-coral gradient flames) with mono variants; real vector artwork not yet supplied, current SVGs are a redraw.
- Real contact facts to preserve: email info@thefuturedesign.nl, phone/WhatsApp +31 6 57 81 52 02, Almere, Nederland.
- Current visual identity ("Aurora Night": dark midnight/navy grounds, aurora blue/glacier/nebula light, Sora+Inter type) is the incumbent look, not a locked brand constraint for this round — the user explicitly asked for 3 completely new designs to choose from, so the palette/type/visual world is open for new-work to reconsider, evolve, or reinterpret per comp. The flame logo's own colours stay reserved for the mark itself in the incumbent system; whether that rule carries into each new comp is a new-work decision, not assumed here.

## Evidence on Hand

- Real: 5 named client cases with real narrative copy (see case-*.html); real contact details; a real Cal.com booking link; a real WhatsApp number; a real downloadable e-book PDF.
- Not on hand (confirmed by the user for this round): team photos, office photos, real screenshots of delivered client work. Comps must keep using placeholder/abstract representations for these, not fabricated photography.
- Client logos used in the homepage marquee are real company names/logos already in the repo (`images/clients/`).

## Product Principles

1. The agency's own site is a portfolio piece — it must read as credible proof of the craft being sold, not a generic template.
2. One coherent team/story across disciplines (webdesign, e-commerce, strategy, campaigns) — never silo them as unrelated services.
3. Real client evidence (named cases) carries the persuasion; never invent testimonials, names, or verified metrics to fill gaps.
4. No backend/CMS — every capability (forms, booking, lead magnet) must work as static markup calling third-party endpoints.
5. Dutch, direct, no-fluff voice; buyers are time-pressed small-business owners, not enterprise procurement.

## Accessibility & Inclusion

No product-specific accessibility requirement was stated beyond general web accessibility (contrast, focus states, touch targets) already addressed in the current implementation.
