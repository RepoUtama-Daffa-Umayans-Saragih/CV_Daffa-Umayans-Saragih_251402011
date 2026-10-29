# Portfolio / CV — Daffa Umayans Saragih

> **Architecture & Developer Reference Document**  
> Last analysed: 2026-10-29

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Tooling](#2-tech-stack--tooling)
3. [File Structure](#3-file-structure)
4. [Architecture Diagram](#4-architecture-diagram)
5. [Section / Component Breakdown](#5-section--component-breakdown)
   - 5.1 [Navigation](#51-navigation--icon-nav)
   - 5.2 [Hero](#52-hero-section)
   - 5.3 [About](#53-about-section)
   - 5.4 [Education](#54-education-section)
   - 5.5 [Achievements / Awards](#55-achievements--awards-section)
   - 5.6 [Projects](#56-projects-section)
   - 5.7 [Contact / Social Links](#57-contact--social-links-section)
   - 5.8 [Footer](#58-footer)
6. [CSS Architecture](#6-css-architecture)
   - 6.1 [Design Tokens (CSS Custom Properties)](#61-design-tokens-css-custom-properties)
   - 6.2 [style.css Responsibility Map](#62-stylecss-responsibility-map)
   - 6.3 [mediaqueries.css Responsibility Map](#63-mediaqueriescss-responsibility-map)
7. [JavaScript Behaviour](#7-javascript-behaviour)
8. [Data Handling Strategy](#8-data-handling-strategy)
9. [Assets Inventory](#9-assets-inventory)
10. [Known Issues & Technical Debt](#10-known-issues--technical-debt)
11. [Update Guide (How to Edit Each Section)](#11-update-guide-how-to-edit-each-section)

---

## 1. Project Overview

This is a **single-page, static portfolio/CV website** for Daffa Umayans Saragih, a first-year Information Technology student at Universitas Sumatera Utara (USU). The site showcases academic background, personal projects, honours, and contact channels to prospective academic partners or employers.

| Property | Value |
|---|---|
| Language (HTML) | Indonesian (`lang="id"`) with some English headings |
| Page type | Single-Page Application (SPA-style scroll) |
| Deployment | Static file hosting (no server-side processing required) |
| Build system | **None** — zero build step, files served directly |
| Entry point | `index.html` |

---

## 2. Tech Stack & Tooling

### Core

| Layer | Technology | Notes |
|---|---|---|
| Markup | HTML5 | Single `index.html` |
| Styling | Vanilla CSS3 | Split across two files |
| Interactivity | Vanilla JavaScript (ES6+) | 38 lines total |

### External Dependencies (CDN only — no npm, no bundler)

| Library | Purpose | Version |
|---|---|---|
| **Google Fonts — Poppins** | Primary typeface (weights 300–700) | Latest |
| **Font Awesome** | All icons used throughout the page | 6.4.0 via cdnjs |

### Build & Dev Tools

| Tool | Status |
|---|---|
| Build bundler (Webpack, Vite, Parcel…) | ❌ None |
| CSS pre-processor (Sass, Less…) | ❌ None |
| JavaScript framework (React, Vue…) | ❌ None |
| Package manager (npm, pnpm…) | ❌ None |
| Linter / formatter | ❌ None detected |

> **IMPORTANT:** There is **no build step**. All source files (`index.html`, `style.css`, `mediaqueries.css`, `script.js`) are the production files. Editing them directly modifies the live output.

---

## 3. File Structure

```
CV_Daffa-Umayans-Saragih_251402011/
│
├── index.html            ← Single HTML file; all page sections live here
├── style.css             ← Primary stylesheet (desktop-first, ~1052 lines)
├── mediaqueries.css      ← Responsive overrides for <=1024px + global contact styles
├── script.js             ← Minimal JS; active-nav highlight via IntersectionObserver
├── README.md             ← This file
│
└── assets/               ← All static media
    ├── profil.jpeg       ← Hero profile photo
    ├── USU.jpg           ← Education card — Universitas Sumatera Utara
    ├── SIM.jpg           ← Education card — SMA Sultan Iskandar Muda
    ├── STS.png           ← Achievement — Sofyan Tan Scholarship
    ├── SNBP.jpeg         ← Achievement — SNBP / PTN admission
    ├── award1.jpg        ← Achievement — OSPO 2023 (Bronze)
    ├── award2.jpg        ← Achievement — OSPO 2024 (Silver)
    ├── AWARD.webp        ← Achievement card thumbnail — full PDF list
    ├── P1.jpeg           ← Project card — Tic Tac Toe AI
    ├── P2.jpeg           ← Project card — The Crusty Crab
    ├── P3.jpeg           ← Project card — Toko Barang Elektronik
    ├── P4.jpeg           ← Project card — Snake IO
    ├── P2023.pdf         ← Downloadable achievement document (2023)
    ├── P2024.pdf         ← Downloadable achievement document (2024)
    └── P2025.pdf         ← Downloadable achievement document (2025)
```

> **NOTE:** The Rexa featured project uses a **YouTube `<iframe>` embed** instead of a local asset. No video file exists in `assets/`.

---

## 4. Architecture Diagram

```
index.html
│
├── <head>
│   ├── Google Fonts CDN  (Poppins)
│   ├── style.css
│   ├── mediaqueries.css
│   └── Font Awesome 6 CDN
│
└── <body>
    └── .cv-paper  (max-width: 900px centred card wrapper)
        │
        ├── <nav class="icon-nav">          ← Sticky top navigation
        │
        ├── <section id="hero">             ← Landing / intro
        ├── <section id="about">            ← Bio + tech stack badges
        ├── <section id="education">        ← Academic history cards
        ├── <section id="achievements">     ← Awards grid + PDF downloads
        ├── <section id="projects">         ← Project cards grid (incl. Rexa featured)
        ├── <section id="contact">          ← Social / contact link grid
        │
        └── <footer>

<script src="script.js">                    ← IntersectionObserver active nav
```

---

## 5. Section / Component Breakdown

### 5.1 Navigation — `icon-nav`

**File:** `index.html` lines 25–46

- A **sticky** (`position: sticky; top: 0`) horizontal nav bar.
- Built as a flex row of `<a class="nav-item">` links.
- Each item contains a Font Awesome `<i>` icon + a `<span>` label.
- Active state (`.active`) is managed by `script.js` via `IntersectionObserver`.

| Nav Item | Icon Class | Target Section |
|---|---|---|
| Intro | `fa-user` | `#hero` |
| About | `fa-address-card` | `#about` |
| Education | `fa-graduation-cap` | `#education` |
| Awards | `fa-star` | `#achievements` |
| Projects | `fa-laptop-code` | `#projects` |
| Contact | `fa-envelope` | `#contact` |

> **NOTE:** The HTML hardcodes `class="nav-item active"` on the Education link (L33). This is immediately overridden at runtime by `script.js`, so the default active state is transient.

---

### 5.2 Hero Section

**File:** `index.html` lines 48–75

- Two-column flex layout: **text column** left, **image column** right.
- Profile image: `./assets/profil.jpeg` with a decorative `.hero-blob` animated element behind it.
- Two CTA buttons: `#projects` (primary gradient) and `#contact` (outline).

> **WARNING:** The "Contact Me" button label is misspelt as **"Conract Me"** on line 63.

**Hardcoded content locations:**

| Content | Line |
|---|---|
| Name | L52 |
| Subtitle | L53–55 |
| Bio description | L56–60 |

---

### 5.3 About Section

**File:** `index.html` lines 77–107

Two-column flex layout:
- **Left** (`.about-text`): two biographical paragraphs.
- **Right** (`.tech-stack`): a card containing `.stack-badge` pill tags.

**Current "Fokus Saat Ini" badges:**

C++ Algorithms · Game Development · HTML5 & CSS3 · Modern JavaScript · Database Basis · Academic Research

---

### 5.4 Education Section

**File:** `index.html` lines 109–170

Uses the reusable `.card.edu-card` component (horizontal flex layout with image + content columns).

| # | Institution | Period | Degree/Level | File lines |
|---|---|---|---|---|
| 1 | Universitas Sumatera Utara (USU) | 2025 – Sekarang | S1 Teknologi Informasi | L116–L144 |
| 2 | SMA Sultan Iskandar Muda | Lulus 2025 | IPA / Saintek | L146–L168 |

Each card contains:
- `.edu-image-section` → image + `.img-overlay` gradient
- `.edu-header` → institution name + year badge (`.edu-year`)
- `.edu-role` → degree/stream label
- `.tags-group` → subject/highlight pill tags
- `.btn-visit` → external link to institution website

---

### 5.5 Achievements / Awards Section

**File:** `index.html` lines 171–268

Uses a `.grid-3` (CSS Grid, `auto-fit`, `minmax(280px, 1fr)`) container with 5 `.card.achieve-card` items.

| # | Title | Year | Asset | File lines |
|---|---|---|---|---|
| 1 | Awardee Sofyan Tan Scholarship | 2025 | `STS.png` | L179–L192 |
| 2 | Lulus Seleksi Masuk PTN | 2025 | `SNBP.jpeg` | L194–L207 |
| 3 | Medali Perak OSPO | 2024 | `award2.jpg` | L209–L222 |
| 4 | Medali Perunggu OSPO | 2023 | `award1.jpg` | L224–L238 |
| 5 | My Full List of Achievements | 2023–2025 | `AWARD.webp` | L240–L265 |

Card 5 (the "Full List" card) is special:
- Spans 70% width at desktop (`#achievements .achieve-card:nth-child(5)`)
- Renders three `.btn-pdf` download links → `./assets/P2023.pdf`, `./assets/P2024.pdf`, `./assets/P2025.pdf`

All cards use an `onerror` handler on `<img>` to fall back to a solid colour background if the asset fails.

> **NOTE:** There is a stray unclosed `</p>` tag at line 236 inside card #4 (OSPO 2023). This is harmless in all major browsers but is a markup error.

---

### 5.6 Projects Section

**File:** `index.html` lines 270–383

Uses the same `.grid-3` container as the Achievements section. Contains **5 project cards** total.

#### Featured Card — Rexa (Agentic AI)

**Position:** First child of `.grid-3` | **File lines:** L277–L317

- Class: `.card.project-card.project-card--featured`
- `grid-column: 1 / -1` → spans the **full width** of the grid (prominently featured)
- Media: `<iframe>` YouTube embed (video ID `BsZc4as7os8`) wrapped in `.project-video-wrapper` (responsive `aspect-ratio: 16/9`)
- Displays a `★ Featured Project` badge via CSS `::before` pseudo-element
- Title styled with gradient text via `-webkit-text-fill-color: transparent`

**Three CTA buttons in `.project-cta-group`:**

| Button | Class | Destination |
|---|---|---|
| Live Demo: Virtual HQ 3D | `.btn-cta--primary` | `https://main.d30b19xkk8lknt.amplifyapp.com/hq/index.html?store=74` |
| Live Demo: Dashboard | `.btn-cta--secondary` | `https://main.d30b19xkk8lknt.amplifyapp.com/` |
| Lihat Kode → | `.btn-cta--outline` | `https://github.com/Daffa-Umayans-Saragih` |

**Tech tags:** AWS Bedrock · SAP S/4HANA · Python FastAPI · React 19 · Phaser 3 (Virtual HQ)

#### Standard Project Cards (2–5)

These use `<a class="card project-card">` — the **entire card is the link** to the GitHub repo.

| # | Project | Tech Tags | GitHub Repo | Asset | File lines |
|---|---|---|---|---|---|
| 2 | Tic Tac Toe w/ Bot | MIT App Inventor, AI Logic, Pattern Rec. | `tictactoeaidaffa` | `P1.jpeg` | L318–L332 |
| 3 | The Crusty Crab | HTML, CSS, PHP, MySQL, Responsive | `WEBKRUSTYCRAB_Daffa-Umayans-Saragih` | `P2.jpeg` | L334–L348 |
| 4 | Toko Barang Elektronik | CRUD System, C, Management | `TB-K1-Toko-Barang-Elektronik` | `P3.jpeg` | L350–L364 |
| 5 | Snake IO Game | JavaScript, HTML, CSS, PHP, DOM, Game Loop | `snakeiodaffa` | `P4.jpeg` | L366–L380 |

Each standard card contains:
- `.project-img-wrapper` (fixed `height: 200px`) → static `<img>` + hover overlay via `::after`
- `.project-content` → `<h3>`, `.tech-tags` spans, `<p>` description, `.btn-text` pseudo-link

> **IMPORTANT:** Standard project cards have **no separate GitHub button** — the entire `<a>` card element IS the link. Only the Rexa featured card uses explicit multi-CTA buttons.

---

### 5.7 Contact / Social Links Section

**File:** `index.html` lines 385–428

Wrapped in a `.contact-box` centred container. Uses CSS Grid (`repeat(3, 1fr)`) of 6 `.contact-card` items.

| Platform | Icon Class | URL / Address | CSS Hover Modifier | File lines |
|---|---|---|---|---|
| WhatsApp | `fa-whatsapp` | `https://wa.me/6281283575656` | `.btn-wa` | L396–L399 |
| Instagram | `fa-instagram` | `https://www.instagram.com/daffa_umayans?igsh=…` | `.btn-ig` | L401–L404 |
| Facebook | `fa-facebook-f` | `https://www.facebook.com/daffa.umayans` | `.btn-fb` | L406–L409 |
| TikTok | `fa-tiktok` | `https://www.tiktok.com/@daffa_umayans?…` | `.btn-tt` | L411–L414 |
| Email | `fa-envelope` | `mailto:daffaumayans@students.usu.ac.id` | `.btn-mail` | L416–L419 |
| LinkedIn | `fa-linkedin-in` | `https://www.linkedin.com/in/daffa-umayans-saragih-41466a372?…` | `.btn-in` | L421–L424 |

Each card shows a brand-colour hover state defined per platform in `style.css` (lines 781–811).

---

### 5.8 Footer

**File:** `index.html` lines 430–432

Simple centred `<footer>` with static copyright text:  
`© 2026 Daffa Umayans Saragih. Dibuat dengan 💙 dan kode.`

---

## 6. CSS Architecture

### 6.1 Design Tokens (CSS Custom Properties)

Defined in `:root` at the top of `style.css` (lines 1–18). All components consume these variables.

```css
:root {
  --primary:        #6366f1;   /* Indigo — main accent */
  --secondary:      #ec4899;   /* Pink — secondary accent */
  --accent-cyan:    #06b6d4;   /* Cyan — used for featured card CTA */

  --gradient-main:  linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
  --gradient-hover: linear-gradient(135deg, #ec4899 0%, #6366f1 100%);

  --bg-body:        #f0fdfa;
  --bg-light:       #f8fafc;
  --text-main:      #1e293b;
  --text-muted:     #64748b;
  --text-nav:       #888888;

  --shadow-sm:      0 4px 6px -1px rgba(99, 102, 241, 0.1), ...;
  --shadow-glow:    0 10px 25px -5px rgba(99, 102, 241, 0.4);
  --shadow-nav:     0 4px 20px rgba(0, 0, 0, 0.05);

  --radius-lg:      16px;
}
```

### 6.2 `style.css` Responsibility Map

| Line Range | Responsibility |
|---|---|
| L1–L18 | `:root` design tokens |
| L20–L50 | Global reset, scrollbar styling, `::selection` colour |
| L51–L72 | `body` animated gradient background (`gradientBG` keyframe) |
| L74–L86 | `.cv-paper` — centred white card wrapper (max-width 900px) |
| L88–L155 | Navigation: `icon-nav`, `nav-container`, `nav-item`, `.active` state |
| L156–L260 | Hero section, profile image, blob animation (`pulseBlob` keyframe) |
| L262–L355 | Shared utilities: `.section-pad`, `.bg-light`, `.section-title`, `.btn`, `.grid-3`, `.card` |
| L374–L420 | About section: `.about-container`, `.tech-stack`, `.stack-badge` |
| L422–L545 | Education section: `.edu-card`, `.edu-image-section`, `.edu-content`, `.btn-visit` |
| L547–L645 | Achievements section: `.achieve-card`, `.achieve-img-wrapper`, `.btn-pdf`, `.pdf-list` |
| L647–L721 | Projects section: `.project-card`, `.project-img-wrapper`, `.project-content`, `.tech-tags` |
| L723–L811 | Contact section: `.contact-box`, `.contact-grid`, `.contact-card`, per-platform hover colours |
| L813–L942 | Global overrides: section backgrounds, card shadows, edu-card glassmorphism |
| **L943–L1052** | **Featured project card additions** — `.project-card--featured`, `.project-video-wrapper`, `.btn-cta` variants (added for Rexa) |

### 6.3 `mediaqueries.css` Responsibility Map

All conditional breakpoints target `max-width: 1024px` (tablet and mobile).

| Line Range | Responsibility |
|---|---|
| L1 | Opens `@media screen and (max-width: 1024px)` |
| L3–L12 | Strip animated background from `html, body` on mobile |
| L14–L25 | `.cv-paper` full-width, no border/radius/shadow |
| L27–L37 | `nav.icon-nav` sticky, adjusted border-radius |
| L39–L59 | Nav 3-column grid layout, smaller icon/text |
| L61–L64 | `scroll-margin-top: 80px` on all sections |
| L66–L69 | `.section-pad` reduced padding |
| L71–L126 | Achievements grid — 2-column, compacted card sizes |
| L127–L166 | Hero — stacked vertical layout, centred, smaller profile image |
| L168–L196 | Education cards stacked, About stacked, Contact stacked |
| **L197** | Closes the `@media` block |
| **L198–L230** | **Global** (unconditional) contact section overrides — applied at all widths |
| **L232–L247** | Second `@media (max-width: 1024px)` — Featured card mobile overrides: `.project-cta-group` stacked, `.btn-cta` full-width |

> **WARNING:** Lines 198–230 in `mediaqueries.css` are **outside any `@media` block** — they are unconditional global rules that apply at all viewport widths. This was applied as a targeted patch for the contact section.

---

## 7. JavaScript Behaviour

**File:** `script.js` lines 1–38

The entire JavaScript file is **38 lines** with a single responsibility: active navigation highlight.

```
DOMContentLoaded
│
├── Cache: all .nav-item links + all <section> elements
│
├── setActiveMenu(id)
│   └── Remove .active from all nav items
│       Add .active to the nav-item whose href matches "#<id>"
│
├── Click handler on each nav-item
│   └── Immediately calls setActiveMenu() on click (before scroll settles)
│
└── IntersectionObserver
    ├── rootMargin: "-30% 0px -70% 0px"  (triggers when ~30% into viewport)
    └── On intersect → setActiveMenu(section.id)
```

There is **no other JavaScript** in the project. All animations (gradient background, hover transforms, blob pulse) are pure CSS `@keyframes` / `transition`.

---

## 8. Data Handling Strategy

> **IMPORTANT:** All content is **hardcoded directly in `index.html`**. There is no data layer, no JSON file, no JavaScript data object, and no templating engine.

| Content Type | Location | How to Update |
|---|---|---|
| Personal bio / description | `index.html` text nodes | Edit inline |
| Education entries | `#education .edu-card` blocks | Add/remove `.card.edu-card` blocks |
| Achievement entries | `#achievements .achieve-card` blocks | Add/remove `.card.achieve-card` blocks |
| Project entries | `#projects .project-card` blocks | Add/remove card blocks |
| Contact links | `#contact .contact-card` anchors | Update `href` attributes |
| Profile photo | `./assets/profil.jpeg` | Replace file or update `src` |
| Project thumbnails | `./assets/P1.jpeg` … `P4.jpeg` | Replace file or update `src` |

There is **no runtime data fetching** — no `fetch()`, no API calls, no `localStorage`.

---

## 9. Assets Inventory

| File | Type | Used In | Approx. Size |
|---|---|---|---|
| `profil.jpeg` | JPEG | Hero profile photo | ~105 KB |
| `USU.jpg` | JPEG | Education card #1 | ~12 KB |
| `SIM.jpg` | JPEG | Education card #2 | ~822 KB |
| `STS.png` | PNG | Achievement card #1 | ~1.4 MB ⚠️ |
| `SNBP.jpeg` | JPEG | Achievement card #2 | ~39 KB |
| `award1.jpg` | JPEG | Achievement card #4 | ~122 KB |
| `award2.jpg` | JPEG | Achievement card #3 | ~102 KB |
| `AWARD.webp` | WebP | Achievement card #5 | ~37 KB |
| `P1.jpeg` | JPEG | Project card — Tic Tac Toe | ~108 KB |
| `P2.jpeg` | JPEG | Project card — Krusty Crab | ~87 KB |
| `P3.jpeg` | JPEG | Project card — Toko Elektronik | ~79 KB |
| `P4.jpeg` | JPEG | Project card — Snake IO | ~36 KB |
| `P2023.pdf` | PDF | Achievement download | ~1.6 MB |
| `P2024.pdf` | PDF | Achievement download | ~1.8 MB |
| `P2025.pdf` | PDF | Achievement download | ~755 KB |

> **TIP:** `STS.png` (~1.4 MB) and `SIM.jpg` (~822 KB) are the two largest assets. Converting them to WebP would significantly improve Lighthouse performance scores.

---

## 10. Known Issues & Technical Debt

| # | Severity | Issue | Location |
|---|---|---|---|
| 1 | 🟡 Minor | Typo: **"Conract Me"** should be "Contact Me" | `index.html` L63 |
| 2 | 🟡 Minor | Stray unclosed `</p>` tag inside OSPO 2023 achievement card | `index.html` L236 |
| 3 | 🟡 Minor | `class="nav-item active"` hardcoded on Education link — immediately overridden by JS | `index.html` L33 |
| 4 | 🔵 Info | Lines 198–230 of `mediaqueries.css` are outside the `@media` block — they are global rules | `mediaqueries.css` L198–L230 |
| 5 | 🔵 Info | `STS.png` is ~1.4 MB — significantly larger than optimal | `assets/STS.png` |
| 6 | 🔵 Info | All content is hardcoded in HTML — no data/content separation | `index.html` (all) |
| 7 | 🔵 Info | No `<meta name="description">` or Open Graph tags for SEO/social sharing | `index.html` `<head>` |
| 8 | 🔵 Info | Mixed line endings (CRLF in original content, LF in Rexa block) | `index.html` L276–L317 |

---

## 11. Update Guide (How to Edit Each Section)

### Adding a New Project Card (Standard)

1. Open `index.html`.
2. Locate `<section id="projects">` → `<div class="grid-3">`.
3. Copy an existing `<a class="card project-card">` block (e.g., lines 318–332).
4. Paste it directly after the Rexa featured card (after line 317).
5. Update: `href` (GitHub URL), `<img src>`, `<img alt>`, `<h3>` title, `.tech-tags` spans, `<p>` description.
6. Add the thumbnail image to `./assets/` and reference it in the `src` attribute.

### Updating a Contact Link / Adding a New Platform

1. Open `index.html`.
2. Find `<section id="contact">` → `<div class="contact-grid">` (lines 394–426).
3. To **update**: find the specific `.contact-card` and change the `href`.
4. To **add**: copy a `.contact-card` block, update icon class, `href`, `<span>` label, and add a new `.btn-xx` hover rule in `style.css` (following the pattern at lines 781–811).

### Adding a New Achievement

1. Open `index.html`.
2. Find `<section id="achievements">` → `<div class="grid-3">` (line 177).
3. Insert a new `<div class="card achieve-card">` block **before** card #5 (the PDF list card should always remain last).
4. Add the corresponding image to `./assets/`.

### Changing Personal Information

| Content | File | Line |
|---|---|---|
| Name (Hero) | `index.html` | L52 |
| Subtitle/role | `index.html` | L53–55 |
| Hero bio paragraph | `index.html` | L56–60 |
| About bio paragraphs | `index.html` | L81–91 |
| "Fokus Saat Ini" badges | `index.html` | L98–103 |
| Footer copyright | `index.html` | L431 |

### Adding a New Education Entry

1. Copy an existing `.card.edu-card` block (lines 116–144 or 146–168).
2. Paste inside `<div class="edu-container">` at the desired order.
3. Update: institution name, year, role label, tags, website URL, and image `src`.
4. Add the institution image to `./assets/`.

---

*This README was auto-generated from a full source-code analysis on 2026-10-29. Update this document whenever structural changes are made to the project.*
