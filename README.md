# Rojgar Setu (रोजगार सेतु)

A government-jobs information portal — Latest Jobs, Admit Card, Results, Answer Key, Syllabus and Admission notifications, all on one page.

Built as a static, responsive front-end (HTML/CSS/JS), inspired by the layout and functionality of India's popular Sarkari-jobs portals, with an original brand identity, name and logo.

## 🗂️ Project structure

```
rojgar-setu/
├── index.html          # Main page (structure & content)
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # Mobile nav, ticker, search filter, scroll-spy
└── README.md
```

## ✨ Features

- Sticky header with logo, nav, and language switcher
- Scrolling notice-board ticker for latest updates
- Hero section with search + quick filter tags
- Live client-side search/filter across all listing panels
- 6-category listings board: Latest Jobs, Admit Card, Results, Answer Key, Syllabus, Admission
- Fully responsive (mobile hamburger nav)
- Accessible: skip link, keyboard focus states, `prefers-reduced-motion` respected

## 🚀 Run locally

Just open `index.html` in any browser — no build step, no dependencies.

```bash
git clone https://github.com/<your-username>/rojgar-setu.git
cd rojgar-setu
# open index.html in your browser
```

## 📤 Push this project to GitHub

1. Create a new (empty) repository on GitHub — do **not** initialize it with a README.
2. In this project folder, run:

```bash
git init
git add .
git commit -m "Initial commit: Rojgar Setu job portal"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3. (Optional) Enable **GitHub Pages** to host it for free:
   - Go to your repo → **Settings** → **Pages**
   - Under "Source", select branch `main`, folder `/ (root)`
   - Save — your site will be live at `https://<your-username>.github.io/<repo-name>/`

## 📝 Notes

- All job listings shown are illustrative/sample entries — connect this to a real data source or API before using in production.
- The name "Rojgar Setu" and its logo are original to this project.

## ⚠️ Disclaimer

This is an independent, educational/hackathon-style project. It is not affiliated with, endorsed by, or connected to any government body or any existing job-portal brand.
