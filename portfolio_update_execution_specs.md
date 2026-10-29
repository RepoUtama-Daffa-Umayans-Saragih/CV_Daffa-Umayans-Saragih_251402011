# 🚀 Portfolio Architecture & Execution Specs (V4 - Auto-Rotating Gallery)

**Target:** `index.html`, `style.css`, and `script.js` (Vanilla HTML/CSS/JS)
**Context:** Based on the architecture analyzed in `READMECV.md`.
**Goal:** Inject the new CV data and build a highly interactive, auto-rotating 3D/Infinite Carousel for ALL activity documentations.

> **⚠️ STRICT DIRECTIVE FOR CLAUDE:**
> Act as an Expert Web Developer & UI/UX Designer. Do NOT use any frameworks (React/Vue/jQuery). Keep everything in the existing Vanilla environment. You must generate the exact code snippets needed.

## 🎨 PART 1: "MUTER-MUTER" INTERACTIVE GALLERY (UI/UX)

Create a new `<section id="activities">` (Title: "Experience & Activities").

**UI/UX Requirements for Claude:**
1. **Auto-Rotating Carousel / Infinite Slider:** Implement a sleek, auto-scrolling or 3D rotating carousel ("muter-muter" effect) using Vanilla CSS/JS. It must rotate automatically, pause on hover, and be draggable/scrollable.
2. **Dynamic Rendering:** Since there are many assets, DO NOT hardcode 30+ `<img>` tags in the HTML. Instead, create a JavaScript array containing the asset paths below, and dynamically inject them into the carousel container on `DOMContentLoaded`.
3. **Lightbox (Modal Popup):** When an image or video in the carousel is clicked, it must open in a fullscreen Lightbox modal (dimmed background, close button).
4. **Media Handling:** Render `<video>` tags with `autoplay loop muted` for `.MOV` files in the carousel preview, but enable controls when opened in the Lightbox.

**EXACT ASSET PATHS (Inject these exactly as written, do not change filenames):**

*   **FOTO GDG MEDAN:** 
    `./assets/FOTO GDG MEDAN/videoGDC1.MOV`, `./assets/FOTO GDG MEDAN/videoGDG2.MOV`, `./assets/FOTO GDG MEDAN/1.JPG`, `./assets/FOTO GDG MEDAN/2.JPG`, `./assets/FOTO GDG MEDAN/3.JPG`, `./assets/FOTO GDG MEDAN/4.JPG`, `./assets/FOTO GDG MEDAN/5.JPG`, `./assets/FOTO GDG MEDAN/6.JPG`, `./assets/FOTO GDG MEDAN/DSC_5333.JPG`, `./assets/FOTO GDG MEDAN/DSC_5334.JPG`, `./assets/FOTO GDG MEDAN/DSC_5335.JPG`, `./assets/FOTO GDG MEDAN/DSC_5338.JPG`, `./assets/FOTO GDG MEDAN/DSC_5343.JPG`, `./assets/FOTO GDG MEDAN/DSC_5344.JPG`, `./assets/FOTO GDG MEDAN/DSC_5345.JPG`, `./assets/FOTO GDG MEDAN/IMG_3078.jpg`
*   **CODEFST:** 
    `./assets/CODEFST/2.jpeg`, `./assets/CODEFST/3.jpeg`, `./assets/CODEFST/4.jpeg`, `./assets/CODEFST/5.jpeg`, `./assets/CODEFST/WhatsApp Image 2026-10-29 at 12.52.27.jpeg`
*   **UKMI:** 
    `./assets/UKMI/Copy of DSC084B6JPG.jpeg`, `./assets/UKMI/Copy of DSC084B7JPG.jpeg`, `./assets/UKMI/Copy of DSC084B9JPG.jpeg`
*   **SUCP CATUR:** 
    `./assets/SUCP CATUR/1.jpg`, `./assets/SUCP CATUR/2.jpg`, `./assets/SUCP CATUR/3.jpg`, `./assets/SUCP CATUR/4.jpg`, `./assets/SUCP CATUR/5.jpg`, `./assets/SUCP CATUR/6.jpg`, `./assets/SUCP CATUR/7.jpg`, `./assets/SUCP CATUR/KYT00070.jpg`, `./assets/SUCP CATUR/KYT00073.jpg`, `./assets/SUCP CATUR/KYT00195.jpg`, `./assets/SUCP CATUR/KYT00253.jpg`, `./assets/SUCP CATUR/SGV05553.jpg`
*   **CATUR PKKMB:** 
    `./assets/CATUR PKKMB/2.jpeg`, `./assets/CATUR PKKMB/3.jpeg`, `./assets/CATUR PKKMB/WhatsApp Image 2026-10-29 at 12.58.55.jpeg`
*   **MENGAJAR:** 
    `./assets/MENGAJAR/1.JPE`, `./assets/MENGAJAR/2.JPE`, `./assets/MENGAJAR/3.JPE`, `./assets/MENGAJAR/4.JPE`

## 📄 PART 2: CV DATA INJECTION

### 1. ACHIEVEMENTS SECTION
Add these 3 new cards to the top of the grid:
*   🏆 **Juara 3 - Lomba "Tarik Data" GDG Medan (2026)**
*   🌍 **Finalis Global (Top ±450 Tim) - International Agentic AI Sokrates Binus**
*   🏅 **Finalis - Codefest UI/UX Designer**
    *   **CRITICAL:** Inside the Codefest card, link a download button for the certificate: `<a href="./assets/CODEFST/kata dapa nama timnya (1).pdf" class="btn-pdf" target="_blank"><i class="fa-solid fa-file-pdf"></i> Lihat Sertifikat</a>`

### 2. PROJECTS SECTION (Rexa AI)
Replace the existing top/featured project with:
*   **Rexa - Agentic AI Retail Logistics**
*   **Tags:** `AWS Bedrock` · `SAP S/4HANA OData` · `React 19` · `Phaser 3` · `Python FastAPI`
*   **Description:** "Sistem Agentic AI otonom untuk otomasi rantai pasok UMKM. Mengintegrasikan Virtual HQ 3D interaktif dengan staf NPC AI spesifik untuk memproses persetujuan PO secara real-time ke sistem ERP SAP."

### 3. EXPERIENCE SECTION 
Add a new professional work section below Education:
*   **IT Support Staff** at *Yayasan Cahaya Inspirasi Sofyan Tan*. (Mengelola infrastruktur IT, pemeliharaan perangkat, dan troubleshooting sistem operasional).