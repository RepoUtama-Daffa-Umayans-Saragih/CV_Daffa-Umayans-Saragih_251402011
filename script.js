/**
 * Daffa Umayans Saragih - Portfolio Scripts
 * 1. IntersectionObserver Active Navigation Tracker
 * 2. Curated Dynamic Bento Activity Marquee (Infinite Auto-Rotating Carousel)
 * 3. Fullscreen Sleek Lightbox Modal (Image & Video)
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. ACTIVE NAVIGATION TRACKER (INTERSECTION OBSERVER)
     ========================================================================== */
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");

  function setActiveMenu(id) {
    if (!id) return;
    navItems.forEach((item) => item.classList.remove("active"));
    const activeLink = document.querySelector(`.nav-item[href="#${id}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("href").replace("#", "");
      setActiveMenu(targetId);
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        setActiveMenu(id);
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  /* ==========================================================================
     2. CURATED DYNAMIC BENTO ACTIVITIES DATA (3 Best Items per Category)
     ========================================================================== */
  const activitiesData = [
    // 1. GDG Medan (Data Science & Hackathon) - Streamed via YouTube
    {
      src: "./assets/FOTO GDG MEDAN/IMG_3878.jpg",
      type: "image",
      title: "Juara 3 - Lomba Tarik Data GDG Medan 2026",
      category: "GDG Medan",
      bentoClass: "bento-card--wide",
    },
    {
      src: "https://www.youtube.com/embed/EZzZ-TPSlCI",
      type: "youtube",
      title: "Highlight Pitching Solusi Data @ GDG Medan (Part 1)",
      category: "GDG Medan",
      bentoClass: "bento-card--tall",
    },
    {
      src: "https://www.youtube.com/embed/2c7kerb5RQ4",
      type: "youtube",
      title: "Live Pitching & Tanya Jawab Juri @ GDG Medan (Part 2)",
      category: "GDG Medan",
      bentoClass: "bento-card--wide",
    },
    {
      src: "./assets/FOTO GDG MEDAN/4.JPG",
      type: "image",
      title: "Presentasi Solusi Analisis Prediktif BigQuery",
      category: "GDG Medan",
      bentoClass: "bento-card--square",
    },

    // 2. Codefest (UI/UX Engineering)
    {
      src: "./assets/CODEFST/2.jpeg",
      type: "image",
      title: "Finalis Codefest - Desain UI/UX Berpusat Pengguna",
      category: "Codefest UI/UX",
      bentoClass: "bento-card--wide",
    },
    {
      src: "./assets/CODEFST/3.jpeg",
      type: "image",
      title: "Interactive Prototyping Figma & Google Stitch",
      category: "Codefest UI/UX",
      bentoClass: "bento-card--tall",
    },
    {
      src: "./assets/CODEFST/5.jpeg",
      type: "image",
      title: "Presentasi Final Solusi Produk Digital Codefest",
      category: "Codefest UI/UX",
      bentoClass: "bento-card--square",
    },

    // 3. Mengajar (C++ Olympiad Instructor)
    {
      src: "./assets/MENGAJAR/1.JPE",
      type: "image",
      title: "Mentoring Algoritma & Struktur Data C++ Siswa",
      category: "Instruktur C++",
      bentoClass: "bento-card--square",
    },
    {
      src: "./assets/MENGAJAR/2.JPE",
      type: "image",
      title: "Bedah Soal Logika & HOTS Olimpiade Informatika",
      category: "Instruktur C++",
      bentoClass: "bento-card--wide",
    },
    {
      src: "./assets/MENGAJAR/4.JPE",
      type: "image",
      title: "Pembinaan Siswa Berprestasi Olimpiade Sains C++",
      category: "Instruktur C++",
      bentoClass: "bento-card--tall",
    },

    // 4. SUCP Catur (Competitive Chess)
    {
      src: "./assets/SUCP CATUR/1.jpg",
      type: "image",
      title: "Pertandingan Catur Klasik SUCP Tournament",
      category: "Kompetisi Catur",
      bentoClass: "bento-card--wide",
    },
    {
      src: "./assets/SUCP CATUR/2.jpg",
      type: "image",
      title: "Fokus Analisis Taktik & End-Game Strategy",
      category: "Kompetisi Catur",
      bentoClass: "bento-card--tall",
    },
    {
      src: "./assets/SUCP CATUR/6.jpg",
      type: "image",
      title: "Babak Final Kejuaraan Catur Mahasiswa SUCP",
      category: "Kompetisi Catur",
      bentoClass: "bento-card--square",
    },

    // 5. Catur PKKMB USU (Fasilkom-TI Tournament)
    {
      src: "./assets/CATUR PKKMB/2.jpeg",
      type: "image",
      title: "Pertandingan Catur Cepat PKKMB Fasilkom-TI USU",
      category: "Catur PKKMB",
      bentoClass: "bento-card--wide",
    },
    {
      src: "./assets/CATUR PKKMB/3.jpeg",
      type: "image",
      title: "Adu Strategi & Kecepatan Berpikir Catur",
      category: "Catur PKKMB",
      bentoClass: "bento-card--square",
    },
    {
      src: "./assets/CATUR PKKMB/WhatsApp Image 2026-10-29 at 12.58.55.jpeg",
      type: "image",
      title: "Dokumentasi Kejuaraan Catur Mahasiswa USU",
      category: "Catur PKKMB",
      bentoClass: "bento-card--tall",
    },

    // 6. UKMI USU (Organisasi & Kepemimpinan)
    {
      src: "./assets/UKMI/Copy of DSC08486.JPG.jpeg",
      type: "image",
      title: "Rapat Kerja & Pengorganisasian Program UKMI USU",
      category: "Organisasi UKMI",
      bentoClass: "bento-card--square",
    },
    {
      src: "./assets/UKMI/Copy of DSC08487.JPG.jpeg",
      type: "image",
      title: "Sinergi Tim & Kepanitiaan Event Kampus USU",
      category: "Organisasi UKMI",
      bentoClass: "bento-card--wide",
    },
    {
      src: "./assets/UKMI/Copy of DSC08489.JPG.jpeg",
      type: "image",
      title: "Kebersamaan Anggota & Pengurus UKMI USU",
      category: "Organisasi UKMI",
      bentoClass: "bento-card--tall",
    },
  ];

  /* ==========================================================================
     3. RENDER BENTO INFINITE MARQUEE CAROUSEL
     ========================================================================== */
  const marqueeTrack = document.getElementById("activityMarqueeTrack");

  function createBentoCard(item) {
    const card = document.createElement("div");
    card.className = `bento-card ${item.bentoClass || ""}`;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Buka ${item.title}`);
    card.dataset.src = item.src;
    card.dataset.type = item.type;
    card.dataset.title = item.title;
    card.dataset.category = item.category;

    let mediaHTML = "";
    if (item.type === "youtube") {
      // YouTube Embed preview in Marquee (pointer-events: none to avoid blocking hover-to-pause & click)
      const videoId = item.src.split("/embed/")[1]?.split("?")[0] || "";
      const embedSrc = `${item.src}?enablejsapi=1&autoplay=0&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0`;
      mediaHTML = `
        <iframe 
          class="bento-media bento-media--youtube" 
          src="${embedSrc}" 
          title="${item.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          loading="lazy"
          style="pointer-events: none; width: 100%; height: 100%; border: none;">
        </iframe>
      `;
    } else if (item.type === "video") {
      mediaHTML = `
        <video 
          class="bento-media" 
          src="${item.src}" 
          autoplay 
          loop 
          muted 
          playsinline 
          preload="metadata">
        </video>
      `;
    } else {
      mediaHTML = `
        <img 
          class="bento-media" 
          src="${item.src}" 
          alt="${item.title}" 
          loading="lazy" 
          onerror="this.style.display='none'; this.parentElement.style.backgroundColor='#1e293b';" 
        />
      `;
    }

    card.innerHTML = `
      <div class="bento-media-box">
        ${mediaHTML}
      </div>
      <div class="bento-overlay">
        <div class="bento-overlay-top">
          <span class="bento-pill">${item.category}</span>
          <span class="bento-zoom-icon"><i class="fas fa-expand-alt"></i></span>
        </div>
        <div class="bento-overlay-bottom">
          <p class="bento-card-title">${item.title}</p>
          ${item.type === "video" || item.type === "youtube" ? '<span class="bento-video-badge"><i class="fab fa-youtube"></i> Video</span>' : ""}
        </div>
      </div>
    `;

    // Click & Keyboard Enter listener for Lightbox
    card.addEventListener("click", () => {
      openLightbox(item.src, item.type, item.title, item.category);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(item.src, item.type, item.title, item.category);
      }
    });

    return card;
  }

  if (marqueeTrack) {
    marqueeTrack.innerHTML = ""; // Clear existing track content

    // Group 1 (Primary)
    const group1 = document.createElement("div");
    group1.className = "marquee-group";
    activitiesData.forEach((item) => {
      group1.appendChild(createBentoCard(item));
    });

    // Group 2 (Clone for 100% seamless infinite scroll loop)
    const group2 = document.createElement("div");
    group2.className = "marquee-group";
    group2.setAttribute("aria-hidden", "true");
    activitiesData.forEach((item) => {
      group2.appendChild(createBentoCard(item));
    });

    marqueeTrack.appendChild(group1);
    marqueeTrack.appendChild(group2);
  }

  /* ==========================================================================
     4. FULLSCREEN SLEEK LIGHTBOX MODAL CONTROLLER
     ========================================================================== */
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxContentBox = document.getElementById("lightboxContentBox");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxCategoryTag = document.getElementById("lightboxCategoryTag");

  function openLightbox(src, type, title, category) {
    if (!lightboxModal || !lightboxContentBox) return;

    lightboxContentBox.innerHTML = "";

    if (type === "youtube" || (src && (src.includes("youtube.com") || src.includes("youtu.be")))) {
      // Inject and play YouTube iframe with controls and autoplay
      const iframe = document.createElement("iframe");
      const cleanSrc = src.split("?")[0];
      iframe.src = `${cleanSrc}?autoplay=1&controls=1&rel=0&playsinline=1`;
      iframe.title = title || "YouTube Video";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.className = "lightbox-media lightbox-media--youtube";
      iframe.style.width = "85vw";
      iframe.style.height = "48vw";
      iframe.style.maxWidth = "960px";
      iframe.style.maxHeight = "540px";
      iframe.style.aspectRatio = "16 / 9";
      iframe.style.border = "none";
      iframe.style.borderRadius = "12px";
      lightboxContentBox.appendChild(iframe);
    } else if (type === "video") {
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.className = "lightbox-media";
      lightboxContentBox.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = src;
      img.alt = title || "Pratinjau Foto";
      img.className = "lightbox-media";
      lightboxContentBox.appendChild(img);
    }

    if (lightboxCaption) lightboxCaption.textContent = title || "";
    if (lightboxCategoryTag) {
      if (category) {
        lightboxCategoryTag.textContent = category;
        lightboxCategoryTag.style.display = "inline-block";
      } else {
        lightboxCategoryTag.style.display = "none";
      }
    }

    lightboxModal.classList.add("active");
    lightboxModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  function closeLightbox() {
    if (!lightboxModal) return;

    // Stop any playing video or YouTube iframe immediately
    const iframe = lightboxContentBox.querySelector("iframe");
    if (iframe) {
      iframe.src = "";
    }
    const video = lightboxContentBox.querySelector("video");
    if (video) {
      video.pause();
    }

    lightboxModal.classList.remove("active");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Clear content after transition
    setTimeout(() => {
      if (!lightboxModal.classList.contains("active")) {
        lightboxContentBox.innerHTML = "";
      }
    }, 350);
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener("click", closeLightbox);
  }

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxModal && lightboxModal.classList.contains("active")) {
      closeLightbox();
    }
  });

  // Attach Lightbox to any other .clickable-media elements (Awards, Hero floating widget, etc.)
  document.querySelectorAll(".clickable-media").forEach((el) => {
    const trigger = () => {
      const src = el.dataset.src || el.getAttribute("src");
      const isYouTube = src && (src.includes("youtube.com") || src.includes("youtu.be"));
      const isVideo = src && (src.endsWith(".MOV") || src.endsWith(".mov") || src.endsWith(".mp4"));
      const type = el.dataset.type || (isYouTube ? "youtube" : (isVideo ? "video" : "image"));
      const title = el.dataset.title || el.getAttribute("alt") || "Pratinjau Media";
      const category = el.dataset.category || "Dokumentasi";
      openLightbox(src, type, title, category);
    };

    el.addEventListener("click", trigger);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trigger();
      }
    });
  });
});
