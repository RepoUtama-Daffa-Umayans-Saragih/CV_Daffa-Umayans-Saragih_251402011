# 🚀 Portfolio Architecture & Execution Specs (V5 - Ultimate Auto-Rotating Bento Gallery & Deep Data)

**Target Files:** `index.html`, `style.css`, and `script.js`
**Context:** Based on the architecture analyzed in `READMECV.md`.
**Goal:** Inject new CV data, add an "Experience" section, build a highly interactive Bento Gallery, and showcase elite technical copywriting for projects and achievements.

> ⚠️ **STRICT DIRECTIVE FOR CLAUDE:**
> Act as an Expert Web Developer & UI/UX Designer. **DO NOT use any external frameworks (No React, Vue, jQuery, Tailwind, etc.).** Use ONLY Vanilla HTML, CSS, and JavaScript. You must provide the exact code snippets needed to update the existing files without breaking the current layout.

## 🎨 PHASE 1: "MUTER-MUTER" INTERACTIVE GALLERY (UI/UX)

Create a brand new section: `<section id="activities" class="section-pad">` (Title: "Experience & Activities").

### UI/UX Requirements:
1. **Auto-Rotating Carousel / Infinite Marquee:**
   * Implement a sleek, horizontally auto-scrolling gallery using Vanilla CSS `@keyframes`.
   * The animation must pause on `hover`.
   * The layout should resemble a modern **Bento Box Grid** or staggered masonry if possible.

2. **Dynamic JS Rendering (CRITICAL):**
   * **DO NOT** hardcode 30+ `<img>` tags in `index.html`.
   * Instead, create a JavaScript array of objects in `script.js`.
   * Dynamically generate the HTML elements and inject them into the carousel container on `DOMContentLoaded`.

3. **Lightbox Modal (Popup):**
   * Clicking any image/video in the carousel must open it in a fullscreen Lightbox modal.
   * The modal needs a dimmed background (`rgba(0,0,0,0.8)`), a close button (✕), and centered content.

4. **Media Handling:**
   * Render `<video>` tags with `autoplay loop muted playsinline` for `.MOV` files. Enable `controls` only in the Lightbox.

*(Assume the same exact asset paths from V4 for the JS array: FOTO GDG MEDAN, CODEFST, UKMI, SUCP CATUR, CATUR PKKMB, MENGAJAR. Specifically include `IMG_3878.jpg` in the GDG folder).*

## 📄 PHASE 2: CV DATA INJECTION (HTML UPDATES)

### 1. New "Professional Experience" Section
Create a new list or card layout right below the Education section. Include TWO items:

*   **Role:** IT Support Staff
    **Company:** Yayasan Cahaya Inspirasi Sofyan Tan
    **Description:** Mengelola infrastruktur IT, pemeliharaan perangkat, serta menangani troubleshooting sistem secara operasional untuk mendukung kebutuhan yayasan.
*   **Role:** Informatics Olympiad Instructor (C++ Oriented)
    **Company:** SMA & SMK Sultan Iskandar Muda
    **Description:** Membimbing dan melatih siswa dalam pemecahan masalah algoritmik tingkat lanjut dan soal HOTS olimpiade. Menekankan pada efisiensi struktur data dan logika pemrograman kompetitif menggunakan bahasa C/C++.

### 2. Achievements Section Update (High-Impact Copywriting)
Add these 3 new cards to the **TOP** of the `#achievements` grid (before the OSPO medals):

1. **Juara 3 - Lomba "Tarik Data" GDG Medan (2026)**
   * **Thumbnail Image:** Inject `<img src="./assets/FOTO GDG MEDAN/IMG_3878.jpg" alt="Tim Juara 3 GDG Medan" class="achieve-card-img" />` at the top of the card. Make this image clickable to open in the Lightbox.
   * **Deskripsi:** Mengalahkan puluhan tim praktisi profesional dan dosen dalam kompetisi Data Science bergengsi. Membangun model analisis prediktif dan visualisasi data interaktif berskala besar menggunakan Google BigQuery dan Google Data Studio dengan presisi analitis tingkat tinggi.

2. **Finalis Global (Top ±450 Tim) - International Agentic AI Sokrates Binus**
   * **Deskripsi:** Merancang dan men-deploy arsitektur Agentic AI otonom tingkat *enterprise*. Mendemonstrasikan penguasaan teknis mendalam dalam mengintegrasikan *Large Language Models* (LLM) via AWS Bedrock dengan sistem ERP SAP S/4HANA OData, menyisihkan ratusan tim *engineer* profesional dan akademisi global.

3. **Finalis - Codefest UI/UX Designer**
   * **Deskripsi:** Membuktikan keahlian dalam *User Experience Engineering*. Sangat terampil menggunakan *tool* Google Stitch dan memadukannya secara *seamless* dengan alat desain standar industri seperti Figma untuk menciptakan *prototyping* antarmuka yang fungsional dan berpusat pada pengguna.
   * **Action:** Add `<a href="./assets/CODEFST/kata dapa nama timnya (1).pdf" class="btn-pdf" target="_blank"><i class="fa-solid fa-file-pdf"></i> Lihat Sertifikat</a>`

### 3. Projects Section Update (Rexa)
Update the main Featured Project (`.project-card--featured`) to emphasize UX and elite coding skills:

* **Title:** Rexa — Agentic AI Retail Logistics
* **Tech Stack Tags:** `AWS Bedrock`, `SAP S/4HANA OData`, `React 19`, `Phaser 3`, `Python FastAPI`
* **Description:** "Sistem Agentic AI otonom untuk otomasi rantai pasok UMKM. Tidak hanya berfokus pada *backend*, saya mendesain visualisasi *Virtual Environment* 3D sebagai solusi antarmuka agar pengguna (*user*) non-teknis tertarik dan sangat *enjoy* menggunakannya. Membutuhkan arsitektur *coding* tingkat lanjut untuk menghubungkan staf NPC AI (Gudang, Keuangan, Guardrails) di dunia virtual agar dapat memproses persetujuan PO secara *real-time* ke sistem ERP SAP."

### 4. About Section Update (Tech Stack Badges)
Update the `.tech-stack` badges to include modern tools:
`Agentic AI` · `AWS Bedrock` · `SAP S/4HANA` · `Phaser 3` · `Google BigQuery` · `C/C++ Algorithmic`

*Claude, please generate the updated HTML blocks, the new CSS for the infinite carousel & lightbox, and the Vanilla JS script to render the media array dynamically.*