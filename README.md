# Rojgar Setu (रोजगार सेतु)

A government-jobs information portal — Latest Jobs, Admit Card, Results, Answer Key, Syllabus and Admission notifications, all on one page.

Built as a static, responsive front-end (HTML/CSS/JS), inspired by the layout and functionality of India's popular Sarkari-jobs portals, with an original brand identity, name and logo.

## 🗂️ Project structure

```
Rojgar-Setu-/
├── index.html          # Main page (structure & content)
├── css/
│   └── style.css       # All styling with CSS variables
├── js/
│   └── script.js       # Mobile nav, ticker, search filter, scroll-spy
└── README.md
```

## ✨ Features

- ✅ **Sticky header** with logo, navigation, and language switcher
- ✅ **Scrolling notice-board ticker** for latest updates
- ✅ **Hero section** with search + quick filter tags
- ✅ **Live client-side search/filter** across all listing panels
- ✅ **6-category listings board**: Latest Jobs, Admit Card, Results, Answer Key, Syllabus, Admission
- ✅ **Fully responsive** (mobile hamburger nav)
- ✅ **Accessible**: skip link, keyboard focus states, `prefers-reduced-motion` respected
- ✅ **Stats strip** with key numbers
- ✅ **Featured job cards** with status badges
- ✅ **Back to top** button with smooth scroll
- ✅ **Active nav highlighting** on scroll

## 🎨 Design

- **Color Scheme**: Navy, Saffron, Green (Indian flag inspired)
- **Typography**: Fraunces (display), Inter (body), JetBrains Mono (monospace)
- **Responsive Breakpoints**: Desktop, Tablet, Mobile
- **Accessibility**: WCAG 2.1 compliant

## 🚀 View Live

Your website is now live on GitHub Pages:

📍 **https://manish-devx.github.io/Rojgar-Setu-/**

(If GitHub Pages is enabled in Settings → Pages)

## 🔧 How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/manish-devx/Rojgar-Setu-.git
cd Rojgar-Setu-
```

2. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Windows
start index.html

# Or just double-click index.html
```

No build tools, no dependencies needed! ⚡

## 📦 Files Included

| File | Purpose |
|------|---------|
| `index.html` | Main HTML structure with semantic markup |
| `css/style.css` | Complete styling, grid layouts, animations |
| `js/script.js` | Mobile nav toggle, search filter, IntersectionObserver for scroll-spy |

## 🎯 JavaScript Functionality

### Mobile Navigation
- Hamburger menu toggle on screens < 920px
- Auto-close on link click
- ARIA labels for accessibility

### Search & Filter
- Real-time client-side filtering
- Works with quick tag buttons
- Case-insensitive text matching

### Scroll Effects
- Ticker animation (seamless looping)
- Back-to-top button (appears after 400px scroll)
- Active nav link highlighting based on section visibility

### Intersection Observer
- Detects which section is in view
- Updates active nav link accordingly
- Performance optimized

## 📝 Notes

- All job listings shown are **illustrative/sample entries**
- Connect this to a real data source or API before using in production
- The name "Rojgar Setu" and its logo are original to this project

## ⚠️ Disclaimer

This is an independent, educational project. It is not affiliated with, endorsed by, or connected to any government body or any existing job-portal brand.

## 🤝 Contributing

Feel free to fork, modify, and improve! Suggestions welcome.

## 📄 License

Open source - use freely, modify as needed.

---

**Made for job seekers across India** 🇮🇳

**Live on GitHub Pages** 🚀
