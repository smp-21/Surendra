<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
# AGENTS.md

## Project Name
Surendra & Co. — Premium Scroll-Cinematic Industrial Brand Website

---

# 1. Mission

Build a world-class premium B2B industrial website for Surendra & Co.

This is NOT:
- a startup landing page
- a SaaS dashboard
- a flashy animation-heavy toy
- a generic agency template
- a content-first brochure site

This IS:
A cinematic, premium, editorial, industrial, durable-feeling digital experience that communicates:

- Precision
- Structural strength
- Reliability
- Heritage
- Engineering confidence
- Luxury restraint
- Long-term trust

The site should feel like:
**Steel + Heritage + Quiet Luxury + Industrial Precision**

Everything must reflect coachbuilding quality.

---

# 2. Core UX Philosophy

Every design decision must follow:

## 2.1 Durability > Decoration
UI should feel strong and engineered.

Avoid:
- noisy gradients
- excessive blur
- neon highlights
- over-styled floating elements
- trendy gimmicks
- oversized rounded cartoon UI

Prefer:
- crisp lines
- structured grids
- thin borders
- restrained shadows
- high-quality spacing
- confident alignment

---

## 2.2 Minimal But Not Empty
Whitespace is intentional.

The UI should breathe.

Never:
- cram text
- stack cards too tightly
- create dense blocks
- let sections collapse visually

Spacing must feel premium.

---

## 2.3 Cinematic But Controlled
Motion should feel expensive.

Animations:
- smooth
- restrained
- slow enough to feel luxurious
- no playful bounce
- no exaggerated spring physics

---

# 3. Non-Negotiable Scroll-Cinematic Hero

## 3.1 Frame-Based Rendering
DO NOT use a video tag.

Frames exist inside:

/public/frames/

Use image-sequence rendering.

Render frame progression:

1 → end

based on vertical scroll progress.

---

## 3.2 Scroll Mapping Rules

Must:
- preload all frames
- map scroll progress deterministically
- clamp frame index
- no skipping
- no flicker
- no tearing
- no visible lag
- no janky repainting

Preferred:
requestAnimationFrame

Fallback:
optimized scroll observer

---

## 3.3 Layout Rule (CRITICAL)

The video/frames are centered.

BUT:

Content must NOT be designed around the frame.

Wrong:
frame + text hugging image

Correct:
frame sits centrally as cinematic anchor,
while layout is built around entire viewport.

Think:
editorial composition.

Possible placements:
- left edge
- right edge
- floating lower corners
- balanced overlay zones
- margin-aligned blocks

Use spatial composition.

---

## 3.4 Hero Feel

Should feel like:
premium automotive / architectural storytelling.

Not:
YouTube banner.

---

# 4. Design Language

## 4.1 Visual Identity

Keywords:
- industrial luxury
- architectural
- precise
- steel-inspired
- calm
- expensive
- timeless
- engineered

---

## 4.2 Color Palette

Primary:
- graphite
- charcoal
- off-black
- warm steel
- soft stone
- muted ivory

Accent:
very restrained metallic tone

Never:
- bright gradients
- electric blue
- loud gold
- neon

---

## 4.3 Surfaces

Use:
- matte surfaces
- layered depth
- subtle panels
- restrained glassmorphism only where useful
- soft contrast separation

Never:
heavy frosted-glass abuse.

---

# 5. Typography

Typography must feel editorial.

Use:
strong sans-serif + elegant serif contrast.

Examples:
- Inter / Geist / Suisse-like sans
- Garamond / Cormorant / refined serif

Use serif selectively:
- Legacy.
- Engineering.
- emphasis words

Do not overuse italics.

---

# 6. Spacing Rules

Premium spacing.

Desktop:
- section padding: 120–180px
- card gaps: 24–40px
- container max width: 1400–1600px
- strong breathing room

Tablet:
reduce proportionally.

Mobile:
stack elegantly.

Never:
cramped layouts.

---

# 7. Section Architecture

Build sections in this order:

1. Hero cinematic scroll
2. Origin / About
3. Coach Range
4. Services
5. Process
6. Compliance
7. Commission
8. Footer

Each section must feel distinct.

Do not duplicate layout patterns excessively.

Alternate:
- split grid
- asymmetric editorial
- sticky layout
- horizontal emphasis
- structured cards
- large metric bands

---

# 8. Motion System

Allowed:
- fade
- transform
- subtle scale
- soft parallax
- reveal
- stagger
- opacity layering

Not allowed:
- bounce
- rubber band
- spin
- playful elastic motion
- chaotic particles

Easing:
premium slow-ease.

---

# 9. Coach Range Cards

Must feel technical + premium.

Each card:
- weighty
- structured
- high-trust
- slightly architectural

Avoid:
cheap SaaS card look.

---

# 10. Process Timeline

Should feel:
editorial + engineered.

Visual inspiration:
technical blueprint rhythm.

Could use:
- alternating axis
- structured steps
- bold step numerics
- timeline spine

Must feel premium.

---

# 11. Compliance Section

Must communicate:
trust, certification, engineering legitimacy.

Layout:
structured grid or technical matrix.

Feel:
regulated + strong.

---

# 12. Commission / Contact Section

This is strongest CTA.

Must feel:
exclusive and trustworthy.

Like:
commissioning something engineered.

Form:
large touch targets
premium spacing
formal tone

Avoid:
cheap contact-form look.

---

# 13. Footer (Very Important)

Footer is not a leftover.

It is final narrative closure.

Must transition elegantly from last scroll state.

Should feel:
heavy
resolved
architectural
final

Use:
- large spacing
- strong columns
- subtle dividers
- legal clarity
- premium composition

Should feel like:
closing chapter.

---

# 14. Performance Rules

Non-negotiable.

Must optimize:
- frame preloading
- lazy rendering
- scroll smoothness
- repaint minimization
- image memory usage
- no CLS
- low main-thread blocking

Prefer:
GPU-safe transforms.

Avoid:
unnecessary rerenders.

---

# 15. Accessibility

Maintain:
- readable contrast
- keyboard access
- semantic headings
- aria labels
- reduced-motion support
- mobile touch clarity

Luxury ≠ inaccessible.

---

# 16. Code Quality Rules

Must:
- modular components
- clean folders
- reusable UI primitives
- no giant monolith files
- typed where possible
- maintainable animation logic
- composable hooks

Avoid:
- messy inline logic
- duplicated motion code
- layout hacks
- magic numbers everywhere

---

# 17. What To NEVER Build

Do NOT generate:
- placeholder layouts
- generic Tailwind landing pages
- startup hero sections
- bright SaaS UI
- overly futuristic neon themes
- cartoon softness
- exaggerated glassmorphism
- random floating blobs
- cluttered grids
- over-animated scroll gimmicks

If unsure:
choose restraint.

---

# 18. Final Quality Bar

Before finishing, ask:

Does this feel like:
“40 years of engineered trust and premium coachbuilding”?

If not:
rework.

The final experience should feel:
**minimal, durable, premium, cinematic, engineered, and memorable.**