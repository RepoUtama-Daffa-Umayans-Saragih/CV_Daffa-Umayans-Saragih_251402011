# 🚀 Portfolio Revision & Enhancement Prompt (Stage 2)

**To Claude:**
Act as an Expert Senior Web Developer and UI/UX Designer. I have a few specific revisions and new features to add to my current portfolio codebase. 

Please execute the following 3 tasks meticulously and provide the updated Vanilla HTML, CSS, and JS code. **For Task 3, you MUST output a Markdown (`.md`) report.**

## 🎯 TASK 1: Fix Missing Images in Awards Section
Currently, some cards in my Awards/Achievements section are missing their specific thumbnail images and are using default icons. Please update the HTML to map these exact images from my `PERBAIKANASSET` folder:
*   For **"Finalis - Codefest UI/UX Designer"**: Use `<img src="./assets/PERBAIKANASSET/codefest.jpeg" alt="Codefest UI/UX Finalist" ... />`
*   For **"Finalis Global (Top ±450 Tim) - International Agentic AI Sokrates Binus"**: Use `<img src="./assets/PERBAIKANASSET/chibirex.jpeg" alt="Agentic AI Sokrates Binus Finalist" ... />`

## 🎯 TASK 2: Generate a Gallery Asset Mapping Report (Output as .md)
Before I let the auto-rotating gallery run with 30+ images, I need to curate them because it's too crowded. 
*   **Action Required:** DO NOT write the final JS array for the gallery yet. Instead, look at all the asset paths from my previous prompt (FOTO GDG MEDAN, CODEFST, UKMI, SUCP CATUR, CATUR PKKMB, MENGAJAR).
*   **Deliverable:** Generate a Markdown (`.md`) report listing EVERY single image/video you are planning to put in the gallery. Include the folder path, the exact filename, and the temporary `title` or `caption` you assigned to it. 
*   **Purpose:** I will use your Markdown report to review, check which ones I want to keep, and tell you which ones to delete in my next prompt.

---
**Summary of Your Output:**
1. Updated HTML/CSS for Task 1 (Awards Images).
2. Updated HTML/CSS/JS for Task 2 (Modern Video Highlight).
3. A distinct Markdown (`.md`) file report for Task 3 containing the mapping of all gallery assets.