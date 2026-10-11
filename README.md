# Rezowana Afrin (Lisa) — Haute Couture & Textile Art Portfolio

An aesthetic, editorial portfolio website crafted for fashion designer **Rezowana Afrin**, built with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**.

Designed with an **Art Board & Painted Canvas aesthetic**, the experience features real-time fluid watercolor pigments, handmade washi-tape framing, editorial typography, smooth scroll transitions, and interactive atelier capsules.

---

## 🎨 Visual Design & Features

- **Art Board Canvas Aesthetic**: Deckle-edge shadows, washi tape pin mounts, paper grain textures, and handwritten designer annotations.
- **Dynamic Painting Background**: Living, interactive watercolor pigment washes rendered on an HTML5 canvas that gently shift like wet-on-wet paint.
- **Animated Haute Couture Monogram**: Tailor's needle, threading loop, and rotating astrological stitch ring monogram seal.
- **Curated Lookbook & Swatch Gallery**: Filterable by silhouette category (*Haute Couture*, *Bridal & Heritage*, *Contemporary Draping*, *Avant-Garde & Textures*, *Sketches & Craft*).
- **Atelier Inspection Modal**: Click any swatch to reveal high-resolution photography, fabric composition, color swatches, and silhouette notes.
- **Horizontal Runway Reel**: Filmstrip reel with smooth scrolling navigation.
- **Comprehensive Dossier & Academic Pedigree**: Complete personal information, SSC & HSC credentials (*Millennium Scholastic School & College*), technical proficiencies, and contact information.
- **Direct Showreel & Drive Integration**: One-click access to the designer's Google Drive archive and `Rezowana Afrin.mp4` video reel.
- **Commission Inquiry Form**: Interactive bespoke bridal & couture commission request interface.

---

## 📁 How to Update Personal Information & Looks

All designer information and portfolio pieces are centralized in a single configuration file:

```bash
src/data/portfolioData.ts
```

### 1. Updating Personal Information
Open [`src/data/portfolioData.ts`](file:///home/abdullah/Abdullah/Projects/FAshion%20Design%20Portfolio/src/data/portfolioData.ts) and modify `PERSONAL_INFO`:
- Name, bio, statement, and contact info (phone, email, addresses).
- Academic history, institutions, and GPA results.
- Skills, textile techniques, and design philosophy pillars.

### 2. Adding or Modifying Portfolio Looks
In the same file, update the `PORTFOLIO_ITEMS` array:
```ts
{
  id: "look-20",
  title: "Your New Outfit Title",
  category: "Haute Couture",
  collection: "Nocturne & Opulence",
  year: "2024",
  src: "/portfolio/your-image.jpg",
  thumbnail: "/portfolio/your-image.jpg",
  description: "Description of the drape and craftsmanship...",
  materials: ["Silk Velvet", "Hand-beaded Crystals"],
  palette: ["#121014", "#d4af37"],
  silhouette: "Mermaid with Cathedral Train",
  isFeatured: true
}
```
Place new images in the [`public/portfolio/`](file:///home/abdullah/Abdullah/Projects/FAshion%20Design%20Portfolio/public/portfolio/) folder.

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```
