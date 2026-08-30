# RBH Design Studio — Project Zero
## Website Product Brief + Codex Implementation Prompt
**Version:** 0.1  
**Status:** Ready for first implementation  
**Working brand name:** RBH Design Studio  
> Keep the brand name in a single configuration constant so it can be changed to `RBUH Design Studio` without refactoring.

---

# 1. Project Objective

Build the first public-facing website for **RBH Design Studio**, a small digital studio that helps small and growing businesses establish and improve their digital presence.

This website is **Project Zero**: the studio's own website is also its first portfolio piece.

The site must demonstrate the studio's four initial capabilities:

1. Website development
2. Content writing / content creation
3. Graphic design / branding
4. Ads and digital marketing

The website must feel professionally designed, but **must not feel like an expensive, intimidating, high-end technology consultancy**.

The desired reaction from a small business owner is:

> "These people know what they are doing, they seem easy to talk to, and I can probably start with something within my budget."

---

# 2. Primary Audience

Design primarily for:

- Local shops
- Family-run businesses
- Small retailers
- Restaurants and cafés
- Salons and local service businesses
- Tutors / coaching businesses
- Independent professionals
- Clinics and small healthcare practices
- Small manufacturers / traders
- New founders
- Home businesses
- Businesses currently operating mostly through WhatsApp, Instagram, Facebook, or offline word-of-mouth
- Businesses that may have never hired a web/design/marketing agency before

Many users may:

- be cost-sensitive,
- have low technical literacy,
- feel overwhelmed by digital terminology,
- not know exactly what service they need,
- prefer WhatsApp or phone communication over formal sales calls.

Design and copy must account for this.

---

# 3. Positioning

## Core positioning

**Digital help for small businesses — made simple.**

RBH should present itself as a **friendly digital studio / business partner**, not as a group of disconnected freelancers.

The four services should be presented as one connected journey:

**Get online → Look professional → Reach customers → Grow**

## Recommended homepage message

### Primary headline
**Big digital help for small businesses.**

### Supporting copy
**Websites, content, design and digital marketing made simple for businesses that want to grow.**

Alternative headline that can be tested later:

**Your business deserves to look as good online as it does in real life.**

## Primary CTA
**Tell us what you need**

## Secondary CTA
**See what we can do**

A prominent WhatsApp contact option should be available, especially on mobile.

---

# 4. Brand Personality

RBH should feel:

- Friendly
- Human
- Optimistic
- Clear
- Helpful
- Practical
- Creative
- Modern
- Reliable
- Affordable without looking cheap
- Confident without sounding arrogant

Avoid:

- Corporate jargon
- Startup/AI buzzword overload
- Dense technical terminology
- Dark cyberpunk aesthetics
- Excessive black backgrounds
- Glassmorphism-heavy design
- Complex 3D scenes
- WebGL effects
- Aggressive neon
- Overly luxurious/minimalist agency presentation
- Pretending to have clients, awards, reviews, or statistics that do not exist

---

# 5. Visual Direction

## Overall direction

Think:

**modern creative studio + friendly neighborhood business partner**

The interface should be bright and warm with generous whitespace.

Use:

- Large friendly headlines
- Rounded cards
- Soft corners
- Small playful visual details
- Simple illustrations / abstract shapes
- Occasional doodle-like accents
- Warm photography later when real projects are available
- Strong hierarchy
- Short sections
- Plain-language copy
- Visible calls to action

### Recommended border radius
- Cards: 20–28px
- Buttons: 999px pill OR 14–18px rounded
- Images: 20–28px

Avoid making every element rounded; use it purposefully.

---

# 6. Provisional Color System

This is a starting palette, not a permanent brand decision.

## Core colors

| Role | Color | Hex |
|---|---|---|
| Background | Warm Cream | `#FFF8EE` |
| Main text / dark UI | Ink Navy | `#1F2937` |
| Primary warm accent | Coral | `#FF6B57` |
| Secondary accent | Mustard | `#F5C451` |
| Supporting accent | Soft Mint | `#B9E6D3` |
| Plain surface | White | `#FFFFFF` |

Use **Ink Navy** for important text and primary action buttons.

Coral, mustard, and mint are primarily supporting colors for:

- cards,
- highlights,
- tags,
- illustration areas,
- section backgrounds,
- hover states.

Do not fill the entire page with multiple bright colors simultaneously.

### Accessibility
Maintain WCAG-readable contrast for all body copy and buttons.

Dark text (`#1F2937`) works well over the proposed cream, coral, mustard and mint backgrounds.

---

# 7. Color Exploration Workflow

Before permanently locking the palette:

1. Take screenshots from 5–10 reference sites.
2. Identify palettes that feel:
   - warm,
   - trustworthy,
   - friendly,
   - non-premium/intimidating.
3. Extract colors from screenshots.
4. Test candidate colors in a real-page visualizer.
5. Test button/text contrast.
6. Keep no more than:
   - 1 dark neutral,
   - 1 light neutral,
   - 1 primary brand color,
   - 2 supporting accent colors.

Useful tools:
- Realtime Colors
- Coolors
- Happy Hues
- Adobe Color / equivalent color-wheel tooling

Never select a palette only because five swatches look attractive together. Test the colors in realistic UI sections.

---

# 8. Typography

Use a modern, friendly sans-serif.

Initial recommendation:

**Plus Jakarta Sans**

Fallbacks:
- Manrope
- DM Sans
- Inter

Use one family for V0 unless a clear need for a second typeface emerges.

Typography should feel approachable rather than editorial or fashion-oriented.

Suggested hierarchy:

- Hero: 56–72px desktop / 40–48px mobile
- H2: 38–48px desktop
- H3: 22–28px
- Body: 17–19px
- Small: 14–15px

Keep line lengths comfortable.

---

# 9. Homepage Information Architecture — V0

Build one polished homepage first.

## 9.1 Header

Left:
- RBH Design Studio wordmark

Navigation:
- Services
- Work
- How It Works
- About
- Contact

Primary header CTA:
**Let's Talk**

Mobile:
- simple menu
- visible WhatsApp/contact action

---

## 9.2 Hero

Headline:

**Big digital help for small businesses.**

Supporting copy:

**Websites, content, design and digital marketing made simple for businesses that want to grow.**

Primary CTA:
**Tell us what you need**

Secondary CTA:
**Explore our services**

Include one friendly visual composition.

Do not use a laptop mockup as the only hero idea.

Possible visual direction:

Four colorful pieces/cards representing:

- Website
- Content
- Design
- Growth

The four pieces visually connect into one business presence.

Use restrained motion only.

---

## 9.3 Audience / Empathy Strip

Headline:

**Starting small? That's completely fine.**

Copy:

Whether you're opening your first shop, improving an existing business, or simply want customers to find you online, we can start with what you actually need today.

Audience tags could include:

- Local shop
- Restaurant
- Salon
- Professional
- New business
- Family business
- Creator
- Small brand

Purpose: immediately tell cost-sensitive visitors that they are welcome.

---

# 9.4 Four Core Services

Use four highly visual cards.

### Website & Online Presence
Simple websites, landing pages, business pages and online stores.

### Content & Social
Website copy, blogs, social posts and business content.

### Design & Branding
Logos, brand basics, posters, social graphics and marketing material.

### Ads & Growth
Google/Meta campaigns, local visibility and practical digital marketing.

Each card should answer:

1. What is it?
2. Who needs it?
3. What can RBH deliver?

Do not lead with technology names.

---

# 9.5 "Not Sure What You Need?" Section

This is important for the target audience.

Headline:

**You don't need to know the technical words.**

Copy:

Tell us about your business and what you're trying to achieve. We'll help you figure out the simplest place to start.

CTA:

**Tell us about your business**

This section should feel particularly friendly and reassuring.

---

# 9.6 Concept Work / Portfolio

At launch, RBH may not have enough client work.

Never invent customers.

Use a section explicitly labelled:

**Concept Projects**

Possible initial projects:

1. Local restaurant
2. Salon
3. Coaching centre
4. Small retail store

Each project should eventually show multiple services working together.

Example:

**Neighborhood Café**
- Website
- Menu design
- Instagram posts
- Local ad campaign concept

Cards should be visually strong because Project Zero is itself a portfolio.

---

# 9.7 Simple Process

Title:

**Working together should be simple.**

Four steps:

1. **Tell us about your business**
2. **We suggest the simplest plan**
3. **We create it with you**
4. **Launch, learn and improve**

Avoid agency-process language such as:
- discovery sprint,
- stakeholder alignment,
- design systems workshop,
unless explaining it to sophisticated customers on deeper pages.

---

# 9.8 Start Small / Packages Teaser

Do not publish hard prices in V0 unless explicitly configured later.

Message:

**Start with what you need. Add more when you're ready.**

Possible package concepts:

### Get Online
For a business that needs its first professional digital presence.

### Look Professional
For businesses needing website + visual/content consistency.

### Grow Locally
For businesses ready to actively reach customers.

CTA:
**Ask what fits my business**

These are positioning devices, not finalized commercial packages yet.

---

# 9.9 Why RBH

Possible points:

- Plain-language guidance
- Flexible starting scope
- One place for web, design, content and marketing
- Built around real business needs
- Easy communication
- No unnecessary complexity

Do not display fake statistics.

---

# 9.10 FAQ

Initial questions:

1. I don't know what kind of website I need. Can you help?
2. Can I start with only one service?
3. Do I need to already have a logo and content?
4. Can you manage the website after launch?
5. Can you help a business that mainly uses WhatsApp/Instagram?
6. Do you work with very small businesses?
7. How much will it cost?
8. How long does a basic website take?

Answers in V0 can remain concise and non-committal where commercial decisions are not final.

---

# 9.11 Final CTA

Large friendly closing section.

Headline:

**Have a business in mind? Let's make the next step simple.**

Buttons:

- **Tell us what you need**
- **Chat on WhatsApp**

---

# 9.12 Footer

Include:

- RBH Design Studio
- Services
- Work
- About
- Contact
- Email placeholder
- WhatsApp placeholder
- Social placeholders
- Privacy
- Copyright

Do not add social platforms that are not actually configured.

---

# 10. Interaction & Motion

Use motion to make the site feel crafted, not to demonstrate technical ability.

Allowed:

- soft fade/slide entrance,
- small hover lift,
- subtle button transitions,
- service-card hover states,
- gentle hero-object movement,
- tasteful section reveal.

Avoid:

- scroll hijacking,
- parallax everywhere,
- cursor replacement,
- 3D navigation,
- long intro animations,
- page loaders,
- auto-playing sound,
- anything that delays access to content.

Motion must respect `prefers-reduced-motion`.

---

# 11. Reference Strategy

Do not clone any reference.

Use references for individual decisions.

## KOTA
Study:
- combining multiple creative/digital services,
- service architecture,
- project presentation,
- clear CTAs,
- conversion-minded creative design.

Do NOT copy:
- premium positioning,
- aggressive agency attitude,
- pricing perception.

## Clay
Study:
- whitespace,
- typography discipline,
- content hierarchy,
- polished case-study presentation.

Do NOT copy:
- enterprise/premium tone.

## Refokus
Study:
- small interaction details,
- storytelling,
- motion quality,
- section transitions.

Do NOT copy:
- immersive complexity,
- technology-heavy presentation.

## Design Gal Studio
Study:
- playful color,
- friendly creative tone,
- rounded blocks,
- approachable presentation.

This is closer to RBH's emotional direction than most premium agency sites.

## Affordable Indian small-business agencies
Study sites such as:
- GoPixel
- Webolive
- SynxLite / comparable small-business website services
- other local-market competitors

Study:
- plain language,
- price sensitivity,
- WhatsApp-first behavior,
- common client questions,
- lead-generation patterns.

Do NOT copy:
- crowded layouts,
- discount-heavy presentation,
- excessive badges,
- "cheap website" visual language.

RBH should combine the accessibility of these businesses with a much stronger design system.

---

# 12. Technical Implementation — V0

Use:

- Latest stable Next.js
- App Router
- TypeScript
- Tailwind CSS
- A lightweight animation library only if needed
- `next/font` or equivalent optimized local font loading
- semantic HTML

Do NOT introduce:

- CMS
- database
- authentication
- complex backend
- 3D libraries
- WebGL
- state-management framework
- component library that dictates the visual style

unless the repository already requires one.

The V0 homepage should be mostly static and data-driven.

---

# 13. Suggested Component Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css

  components/
    site/
      Header.tsx
      MobileNav.tsx
      Footer.tsx

    home/
      Hero.tsx
      AudienceStrip.tsx
      Services.tsx
      GuidanceSection.tsx
      ConceptWork.tsx
      Process.tsx
      PackagesTeaser.tsx
      WhyRBH.tsx
      FAQ.tsx
      FinalCTA.tsx

    ui/
      Button.tsx
      Section.tsx
      Container.tsx
      ServiceCard.tsx
      ProjectCard.tsx
      Tag.tsx

  config/
    brand.ts
    site.ts

  data/
    services.ts
    projects.ts
    faq.ts
```

Adapt to existing repository conventions instead of forcing this exact structure.

---

# 14. Brand Configuration

Centralize editable brand information.

Example conceptual structure:

```ts
export const brand = {
  name: "RBH Design Studio",
  shortName: "RBH",
  email: "hello@example.com",
  whatsapp: "",
  phone: "",
};
```

Do not scatter business information through components.

---

# 15. Design Tokens

Use CSS custom properties or Tailwind theme variables.

Example conceptual tokens:

```css
--background: #FFF8EE;
--foreground: #1F2937;
--accent-coral: #FF6B57;
--accent-yellow: #F5C451;
--accent-mint: #B9E6D3;
--surface: #FFFFFF;
```

Also centralize:

- spacing,
- border radius,
- max content width,
- typography scale,
- shadows.

Use very subtle shadows.

---

# 16. Responsive Requirements

The site must be intentionally designed for mobile.

Primary mobile widths to verify:

- 320px
- 375px
- 390px
- 430px

Also verify:

- tablet
- 1280px desktop
- 1440px desktop
- large screen

Do not simply shrink desktop layouts.

On mobile:

- CTAs should be easy to tap,
- typography should not overflow,
- cards stack naturally,
- WhatsApp contact should be highly accessible,
- no horizontal scrolling.

---

# 17. Accessibility Requirements

- semantic landmarks,
- keyboard-accessible navigation,
- visible focus indicators,
- proper heading hierarchy,
- appropriate labels,
- alt text strategy,
- reduced-motion support,
- sufficient color contrast,
- minimum comfortable tap targets.

Do not sacrifice accessibility for animation.

---

# 18. Performance Requirements

Aim for:

- Lighthouse Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Avoid:

- huge hero video,
- unnecessarily large JavaScript,
- excessive font weights,
- unoptimized images.

Use responsive optimized images.

---

# 19. SEO Foundation

V0 should include:

- sensible page title,
- meta description,
- OpenGraph metadata,
- favicon placeholder,
- canonical strategy if appropriate,
- semantic service content,
- structured headings,
- robots defaults appropriate for production.

Suggested title:

**RBH Design Studio | Websites, Design, Content & Digital Marketing**

Suggested description:

**Friendly web design, content, branding and digital marketing for small and growing businesses. Start with what you need and grow from there.**

Do not keyword-stuff.

---

# 20. Integrity Requirements

The launch site must contain no fabricated:

- clients,
- logos,
- testimonials,
- awards,
- years of experience,
- project counts,
- review scores,
- revenue figures,
- ad-performance claims.

Concept work must be labelled as concept work.

Use placeholders where real business details are still missing.

---

# 21. V0 Scope — Build Now

The first implementation should contain ONLY:

1. Header
2. Hero
3. Audience/empathy section
4. Four services
5. "Not sure what you need?" section
6. Concept-work placeholder cards
7. Four-step process
8. Start-small/package teaser
9. Why RBH
10. FAQ
11. Final contact/WhatsApp CTA
12. Footer

Do not build separate service pages yet.

Do not build blog infrastructure yet.

Do not build CMS yet.

Do not create elaborate animations yet.

The goal is to create a coherent base that can be reviewed quickly.

---

# 22. Iteration Plan

## Iteration 0 — Structural V0
Goal:
- complete homepage,
- responsive,
- correct hierarchy,
- correct content,
- rough design system.

No time spent polishing complicated animation.

## Iteration 1 — Visual Refinement
Review:
- palette,
- typography,
- spacing,
- card shapes,
- hero composition,
- illustration direction.

## Iteration 2 — Copy & Positioning
Test:
- hero copy,
- service language,
- calls to action,
- packages,
- FAQ.

## Iteration 3 — Portfolio
Create 3–4 high-quality concept projects.

## Iteration 4 — Motion
Add only interactions that strengthen the site.

## Iteration 5 — Conversion
Add:
- working contact form,
- WhatsApp,
- analytics,
- conversion tracking,
- real package/pricing decisions.

## Iteration 6 — Expansion
Then consider:
- individual service pages,
- case studies,
- blog,
- local SEO pages,
- CMS.

---

# 23. Codex Execution Instructions

## Your task

You are working on **Project Zero for RBH Design Studio**.

First inspect the existing repository before making changes.

### Step 1 — Inspect
Understand:

- framework,
- package manager,
- existing folder structure,
- styling system,
- lint/test/build commands,
- existing reusable components.

Do not replace a functioning project structure merely to match this document.

### Step 2 — Plan
Before implementation, create or update:

`docs/project-zero-plan.md`

It should contain:

- existing-state summary,
- implementation approach,
- components to create/change,
- dependencies proposed,
- risks/assumptions,
- exact validation commands.

Do not begin a major refactor.

### Step 3 — Implement V0
Implement only the V0 scope described above.

Prioritize:

1. hierarchy,
2. responsive behavior,
3. visual consistency,
4. accessibility,
5. performance,
6. maintainability.

### Step 4 — Do not over-engineer
Do not:

- create unnecessary abstractions,
- add a backend,
- install a CMS,
- create authentication,
- add 3D,
- add dozens of packages,
- create fake data implying real customers.

### Step 5 — Validate
Run the repository's relevant:

- formatter,
- lint,
- typecheck,
- tests,
- production build.

Fix failures caused by your changes.

### Step 6 — Report
At completion provide:

- files changed,
- major design decisions,
- commands run,
- test/build results,
- known placeholders,
- recommended next iteration.

---

# 24. First Codex Prompt

Use the following prompt after putting this document in the repository:

> Read `PROJECT_ZERO_RBH.md` completely. Treat it as the product and design brief for this task.
>
> Inspect the repository first and do not assume its architecture.
>
> Create `docs/project-zero-plan.md` describing how you will implement Iteration 0 using the existing stack. Then implement the V0 homepage defined in the brief.
>
> Keep the implementation intentionally simple and easy to iterate. Do not add a backend, CMS, authentication, WebGL/3D, or fake testimonials/client claims.
>
> Centralize brand information and design tokens so that the name, contact information, palette and copy can be changed quickly.
>
> Make mobile design a first-class requirement.
>
> After implementation, run all relevant lint/typecheck/test/build commands available in the repository, fix issues caused by your work, and give me a concise implementation report.
>
> Stop after Iteration 0. Do not proceed into later iterations automatically.

---

# 25. Review Checklist for the Human Team

When V0 is ready, do NOT initially ask:

"Is this beautiful?"

Ask:

1. Can a visitor understand what RBH does in 5 seconds?
2. Does it clearly welcome very small businesses?
3. Does it feel affordable without looking cheap?
4. Does anything feel too technical?
5. Is the primary CTA obvious?
6. Would a shop owner know what to do next?
7. Does mobile feel as good as desktop?
8. Are the four services clearly related?
9. Does the site have enough personality to be remembered?
10. Is anything present merely to impress designers rather than help customers?

Record the answers before starting Iteration 1.

---

# 26. Items Still Intentionally Open

Do not block V0 for these decisions:

- Final RBH vs RBUH spelling
- Final logo
- Final color palette
- Exact WhatsApp number
- Exact email
- Pricing
- Client testimonials
- Portfolio client work
- Legal business details
- Analytics provider
- Hosting provider
- CMS choice

Use clearly isolated placeholders or configuration values.

---

# 27. Design Principle to Protect Throughout the Project

**Sophisticated execution. Simple experience.**

RBH may use excellent engineering and design internally, but the customer should experience:

- clarity,
- warmth,
- confidence,
- simplicity.

The site is successful when a small business owner thinks:

> "I can talk to these people."

not merely:

> "These people know how to make fancy websites."
