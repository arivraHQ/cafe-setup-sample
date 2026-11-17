# Mitti Cafe, Kanpur — Studio Portfolio Piece

> **A boutique design studio showcase for a cosy neighbourhood cafe in Swaroop Nagar & Civil Lines, Kanpur.**  
> Crafted with an earthy, tactile aesthetic that feels like a well-loved physical menu card, completely avoiding generic AI templates or corporate tech startup tropes.

🌐 **Live Production URL**: [https://miti-demo.arivra.com](https://miti-demo.arivra.com)  
⚡ **Vercel Mirror**: [https://miti-cafe-demo.vercel.app](https://miti-cafe-demo.vercel.app)  

---

## ☕ Client & Brand Essence

- **Client**: Mitti Cafe, Swaroop Nagar / Civil Lines, Kanpur.
- **Concept**: Cosy neighbourhood cafe serving specialty single-origin Indian coffee, adrak-elaichi kulhad chai, slow sourdough breakfast, hand-rolled pastas, artisanal sandwiches, and seasonal desserts. Weekly Friday evening open mic.
- **Primary Goals**: Drive high-intent footfall and streamline direct table reservations via WhatsApp (`+91 90000 00000`).
- **Personality**: Earthy, tactile, warm, conversational, authentic to Kanpur.

---

## 🎨 Design System & Visual Language

### 1. Color Tokens
All colors are centralized as semantic tokens in `tailwind.config.ts` and `app/globals.css`. Never hardcoded:

| Token | Hex Code | Swatch & Role |
| :--- | :--- | :--- |
| `bg` / `paper` | `#FBF3E4` | Warm craft paper background |
| `surface` | `#F1E3C8` | Warm cream card and container surface |
| `text` | `#2B1B12` | Deep roasted espresso brown (high contrast text) |
| `primary` | `#6B3A22` | Rich dark roast coffee accent |
| `accent` | `#D9902F` | Vibrant Indian marigold accent |
| `sage` | `#7C8A5A` | Earthen dried sage leaf tone |

### 2. Typography Pairings
- **Headings**: `Young Serif` — A warm, vintage serif with heavy personality and soft terminals.
- **Body**: `Hanken Grotesk` — A readable, human-centric grotesque for menus and long copy.
- **Handwritten Annotations**: `Caveat` — Exclusively reserved for tiny hand-scrawled notes (e.g., *"our fav!"*, *"steeped 18 hours"*, price notes, hand-drawn arrows).

### 3. Tactile Textures & Craft Elements
- **Paper Grain Texture**: Embedded SVG fractal noise overlay at 5% opacity (`pointer-events-none`).
- **Polaroid Frames**: Food and ambience photography presented in tilted (-2° to 2°) polaroids with white borders and warm diffuse shadows.
- **Washi Tape & Pushpins**: Subtle decorative washi tape on polaroid corners and brass pushpins on review slips.
- **Dividers**: Dashed and dotted craft dividers rather than sterile solid 1px lines.
- **Hand-Drawn Doodles**: Bespoke SVG doodles (`SteamDoodle`, `LeafDoodle`, `HandArrowDoodle`, `StarSparkle`).

---

## 🚫 Anti-AI-Slop Governance (Strict Anti-Patterns)

This project strictly adheres to agency-level design governance to prevent typical AI generation tropes:

- ❌ **No Purple/Blue Gradients or Glassmorphism**: Replaced by warm earthen pigments and tactile paper surfaces.
- ❌ **No Cliché Fonts**: Banned Inter, Roboto, Poppins, and Montserrat in favor of Young Serif and Hanken Grotesk.
- ❌ **No 3-Equal-Cards Grids**: Every section features a distinct bespoke editorial layout.
- ❌ **No Cliché AI Copywriting**: Banned words such as *revolutionize*, *elevate*, *seamless*, *"culinary journey"*, *"crafted with passion"*, and *"taste the difference"*. All copy is real, warm, and authentic to Kanpur's neighbourhood culture.
- ❌ **No Generic Stock Photography**: All imagery slots have detailed art-direction briefs documenting lighting, angle, and subject matter.

---

## 📐 The 10 Unique Section Layouts

1. **Navbar**:
   - Wordmark with vintage stamp badge.
   - Quick navigation links with dotted hover underlines.
   - Live **"Open now • till 11 PM"** dynamic status chip based on Kanpur operating hours (8:00 AM – 11:00 PM).
   - "Reserve a Table" WhatsApp pill CTA.
   - Full accessible mobile navigation drawer.

2. **Hero**:
   - Oversized 84px serif headline: *"Slow mornings. Strong coffee."*
   - Contextual lead text and dual CTAs (*"Reserve on WhatsApp"*, *"See the Menu"*).
   - Handwritten Caveat annotation with hand-drawn arrow doodle.
   - Collage of 3 overlapping tilted polaroid frames with washi tape and soft spring hover reset.

3. **Signatures**:
   - 5 signature cafe items arranged in a staggered editorial collage (not a card grid).
   - Handwritten price tags, tasting notes, and preparation specifics.

4. **Menu**:
   - Tabbed menu system (Coffee, Chai, Breakfast, Mains, Desserts).
   - Real Indian cafe pricing (₹120 – ₹450).
   - FSSAI-style green/red veg and non-veg indicators.
   - Classic cafe dotted leader lines connecting item names to prices.
   - Handwritten *"bestseller"* tags.

5. **Story**:
   - Editorial magazine spread with a 2-column layout.
   - Large italic serif pull quote.
   - Lead paragraph featuring a vintage drop cap.
   - Artisan founder portrait polaroid with handwritten tape note.
   - 3 brand philosophy pillars (Ethical Sourcing, In-House Baking, Slow Space).

6. **Ambience**:
   - Horizontal snap-scrolling gallery of varying aspect ratios (4:3, 16:9, 1:1, 3:2).
   - Desktop arrow controls and smooth swipe gestures on mobile devices.

7. **Happenings**:
   - Vintage perforated ticket-stub layout with semicircular punch notches.
   - Ticket stub details: *"ADMIT ONE"*, serial numbers, date, time, and cover charge.
   - One-click WhatsApp seat reservation prefilled with the event title.

8. **Reviews**:
   - Tactile corkboard wall with 5 pinned paper slips.
   - Brass pushpins and slight organic rotations (-2° to 1.5°).
   - Real customer voices from Swaroop Nagar, Civil Lines, and IIT Kanpur regulars.

9. **Visit & Hours**:
   - Clean tabular operating hours.
   - Full address with Kanpur landmarks (opp. Rave 3 / Swaroop Nagar).
   - Zomato and Swiggy delivery integration pills.
   - Direct WhatsApp table reservation widget.
   - Hand-drawn vintage map placeholder with River Ganga bend and cafe pin.

10. **Footer**:
    - Deep roasted espresso background (`#2B1B12`).
    - Massive warm paper display headline: *"See you soon."*
    - Quick links, live operating times, social links, and studio colophon.

---

## 🛠️ Tech Stack & Implementation Details

- **Framework**: Next.js 15 (App Router, React 19)
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Animations**: Framer Motion (respects `prefers-reduced-motion`)
- **Typography**: `@next/font/google` (`Young_Serif`, `Hanken_Grotesk`, `Caveat`)
- **Icons**: Lucide React (used purposefully as micro-indicators)
- **Single Source of Truth**: All dynamic content and metadata configured in `content/site.ts`

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/arivraHQ/cafe-setup-sample.git
cd cafe-setup-sample

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for local development, or view the live deployment at [https://miti-demo.arivra.com](https://miti-demo.arivra.com).

### Production Build
```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 🌐 Live Deployments

- **Custom Domain (Cloudflare DNS)**: [https://miti-demo.arivra.com](https://miti-demo.arivra.com)
- **Vercel Production Mirror**: [https://miti-cafe-demo.vercel.app](https://miti-cafe-demo.vercel.app)

---

## 🧪 Testing & Verification

- **Responsive Testing**: Fully audited and verified at 375px (mobile) and 1440px (desktop) using headless Chromium Playwright tests.
- **Accessibility**: Semantic HTML5 landmark structure, proper `aria-labels`, focus-visible rings, WCAG AAA color contrast for body copy on paper background.
- **Motion**: Fallbacks in place for `prefers-reduced-motion: reduce`.

---

© Mitti Cafe, Swaroop Nagar, Kanpur. Designed as an agency portfolio demonstration.
