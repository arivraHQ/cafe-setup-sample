# Mitti Cafe, Kanpur - Design System & Governance Rules

## CLIENT & ESSENCE
- **Client**: Mitti Cafe, Swaroop Nagar / Civil Lines, Kanpur. Cosy neighbourhood cafe: specialty coffee, chai, all-day breakfast, pastas, sandwiches, desserts. Open mic every Friday evening.
- **Goal**: Table reservations via WhatsApp (+91 90000 00000) and drive footfall.
- **Personality**: Earthy, cosy, tactile (like a well-loved menu card, not a tech startup).
- **Stack**: Next.js (App Router) + Tailwind CSS + Framer Motion. Mobile-first.

---

## DESIGN SYSTEM (Final - Highest Priority)
- **Colors** (Tokens, never hardcode):
  - `bg`: `#FBF3E4` (warm paper)
  - `surface`: `#F1E3C8` (warm cream surface)
  - `text`: `#2B1B12` (deep roasted espresso brown)
  - `primary`: `#6B3A22` (rich coffee)
  - `accent`: `#D9902F` (Indian marigold)
  - `sage`: `#7C8A5A` (earthen sage leaf)
- **Fonts**:
  - Headings: `Young Serif`
  - Body: `Hanken Grotesk`
  - Handwritten annotations: `Caveat` ONLY (for tiny handwritten annotations: arrows, "our fav!", price notes)
- **Typography Scale**:
  - Hero: `88px` desktop / `48px` mobile
  - H2: `52px` desktop / `34px` mobile
  - Body: `17px`
- **Shape & Texture**:
  - Radius: `14px` on images
  - Polaroids: Slightly rotated (-2deg to 2deg) polaroid-style frames for food photos
  - Texture: Paper-grain texture at 5% opacity
  - Dividers: Dashed / dotted dividers
  - Shadows: Soft diffuse warm shadows only. NO hard drop shadows.
- **Layout**:
  - Overlapping elements, layered photos, off-grid placements
  - Hand-drawn SVG doodles (steam, leaf, arrow) used sparingly
- **Motion**:
  - Easing: `[0.34, 1.56, 0.64, 1]` (soft spring), 500-700ms duration
  - Polaroids settle into place on scroll
  - Menu rows fade in staggered
  - Hover on food photo: tilt transitions smoothly to `0deg`
  - Respect `prefers-reduced-motion` at all times

---

## BANNED (Strict Anti-Patterns)
- ❌ Purple / blue gradients, glassmorphism, gradient blobs
- ❌ Inter, Roboto, Poppins, Montserrat
- ❌ Emoji or icon-in-circle decoration, 3-equal-cards grids, centered-everything layouts
- ❌ Cliché Words: *revolutionize*, *elevate*, *seamless*, *"culinary journey"*, *"crafted with passion"*, *"taste the difference"*
- ❌ Cold corporate blue/white look and over-polished stock-photo feel

---

## ARCHITECTURE & CONVENTIONS
- Components in `/components`
- Content in `/content/site.ts` (WhatsApp number as dummy `+91 90000 00000`)
- Design tokens defined in one place (`tailwind.config.ts` / CSS variables)
- Real, warm, conversational copy. Zero lorem ipsum.
- Image slots: `next/image` with warm placeholder blocks + detailed comment describing the exact photograph brief.
- QA: Acceptance criteria includes responsive check at 375px & 1440px, keyboard accessibility, console error free, Lighthouse 90+.
