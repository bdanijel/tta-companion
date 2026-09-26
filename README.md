# Through the Ages Companion & Setup Assistant

A comprehensive mobile & tablet friendly companion web app for the board game **Through the Ages: A New Story of Civilization** (including the **New Leaders & Wonders** expansion).

## Features
- 📜 **Setup Assistant**: Interactive step-by-step game setup tailored to player count (2, 3, 4), game version (Simple, Advanced, Full), Expansion, and Peaceful Variant.
- 📘 **Rules & FAQ Search**: Fast search across all base game and expansion rules, combat, military, leaders, wonders, and special variants.
- 🕊️ **Peaceful Variant Support**: Full breakdown and custom setup rules for peaceful play.
- 📱 **Mobile & Tablet Optimized**: Responsive layout designed for easy viewing next to your game board.

---

## 🚀 How to Publish to GitHub Pages via GitHub Actions

This repository is already configured with a **GitHub Actions workflow** (`.github/workflows/deploy.yml`) that automatically builds and deploys the application to GitHub Pages whenever code is pushed to `main` or `master`.

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and click **New Repository**.
2. Name your repository (e.g., `through-the-ages-companion`).
3. Leave it Public (or Private if you have GitHub Pro) and **do not** initialize with a README/gitignore (you already have them).
4. Click **Create repository**.

### Step 2: Push Code to GitHub
Run the following commands in your local project folder:

```bash
git init
git add .
git commit -m "Initial commit - Through the Ages companion"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/through-the-ages-companion.git
git push -u origin main
```

### Step 3: Enable GitHub Pages Source in Repository Settings
1. On GitHub, go to your repository **Settings**.
2. On the left sidebar, click **Pages** (under Code and automation).
3. Under **Build and deployment**:
   - Change **Source** from *Deploy from a branch* to **GitHub Actions**.
4. Click **Save** if prompted.

---

### ⚙️ Automatic Deployment
Every time you push new updates to `main` or `master`, GitHub Actions will automatically run the build workflow and publish the site. Your app will be accessible at:

`https://YOUR_USERNAME.github.io/through-the-ages-companion/`
