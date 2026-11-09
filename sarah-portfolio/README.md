# Sarah Khairunnisa Adi Kusuma — Professional Portfolio

A single-page professional portfolio website for **Sarah Khairunnisa Adi Kusuma**, Bachelor of Management
(Business Management in Telecommunications & Informatics), Universitas Telkom.

Built with **HTML5**, **Tailwind CSS**, and **vanilla JavaScript** — no build step, no framework.

---

## Live preview

Open `index.html` directly in a browser, or serve the folder locally:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit <http://localhost:8000>.

> An internet connection is needed on first load: Tailwind CSS and the Plus Jakarta Sans
> webfont are loaded from a CDN. Everything else (photo, CV, styles, scripts) is local.

---

## File structure

```text
sarah-portfolio/
├── index.html                              # all page markup
├── css/
│   └── styles.css                          # custom component styles + motion
├── js/
│   └── main.js                             # navigation, scroll spy, reveal, project modal
├── assets/
│   ├── profile.jpg                         # profile photo
│   └── SARAH-KHAIRUNNISA-ADI-KUSUMA-CV.pdf # downloadable CV
└── README.md
```

---

## Sections

| Section | Contents |
| --- | --- |
| **Hero** | `Fresh Graduate` badge, headline with `Business Analyst Enthusiast` highlighted, CV summary, CTA buttons, phone / email / LinkedIn links, profile photo |
| **About** | Profile summary plus four statistic cards (professional experience, organization experience, academic project, certifications) |
| **Skills** | Four cards — Business Skills, Marketing Skills, Data & Tools, Soft Skills |
| **Experience** | Alternating timeline: CeLOE Telkom University, PERKARA, Peace, Creative Entrepreneurship Festival |
| **Education** | Universitas Telkom, GPA 3.48/4.00, final project title, relevant coursework |
| **Projects** | Three clickable cards, each opening a detail modal |
| **Certifications** | BNSP Manajemen Risiko (2023), RevoU Digital Marketing (2025), RevoU Data Analytics (2025) |
| **Contact** | `Ready to Create Business Impact` CTA with Email Me / LinkedIn / Call buttons |

---

## Features

- Sticky navbar with shadow-on-scroll and a hamburger menu below `lg` (1024px)
- Smooth scrolling with automatic offset for the sticky header
- Active navigation state that follows the scroll position
- Scroll progress indicator and back-to-top button
- Scroll-reveal animations via `IntersectionObserver`
- Clickable project cards opening an accessible modal, closable by **X**, **Escape**, or **overlay click**
- Keyboard accessible: cards respond to Enter/Space, the modal traps focus and restores it on close
- `mailto:` email, `tel:` phone, LinkedIn opening in a new tab with `rel="noopener noreferrer"`
- CV download via the `download` attribute
- Responsive across desktop, tablet, and mobile
- Honours `prefers-reduced-motion`

---

## Design system

| Token | Value |
| --- | --- |
| Navy (primary) | `#0f2547` |
| Blue accent | `#2563eb` |
| Accent light | `#3b82f6` |
| Accent soft | `#e8effc` |
| Background | `#f5f8fc` (light blue-gray) |
| Border | `#e2e8f0` |
| Typeface | Plus Jakarta Sans |

Visual character: white cards, thin borders, soft shadows, small-to-medium rounded corners,
generous whitespace, a wide (`1240px`) desktop container, and a thin blue rail down the left
edge of the page.

---

## Content policy

**The CV is the single source of truth.** Every company, role, date, responsibility, course,
certification, skill, and tool on this site comes from
`assets/SARAH-KHAIRUNNISA-ADI-KUSUMA-CV.pdf`. Specifically:

- No invented employers, job titles, or achievement metrics.
- No skill proficiency percentages — the CV states no proficiency levels, so none are shown.
- No tools beyond those listed in the CV (Microsoft Word, PowerPoint, Excel, Canva).
- No fabricated project URLs. The CV lists none, so the site states that documentation is
  available on request instead of linking anywhere.
- The statistic cards count real CV entries: 1 professional experience, 3 organization
  experiences, 1 academic final project, 3 certifications.

Indonesian job titles and course names are kept in their original form, with English
descriptions of the responsibilities as written in the CV.

---

## Updating the content

- **Text, experience, education, certifications** — edit `index.html` directly.
- **Project modal content** — edit the `PROJECTS` object at the top of `js/main.js`.
- **Colors and fonts** — the Tailwind theme lives in the inline `tailwind.config` block in
  `index.html`; matching CSS variables are at the top of `css/styles.css`.
- **CV** — replace `assets/SARAH-KHAIRUNNISA-ADI-KUSUMA-CV.pdf`, keeping the same filename.
- **Photo** — replace `assets/profile.jpg` (portrait orientation works best).

---

## Deployment

The site is fully static, so it can be hosted anywhere:

- **GitHub Pages** — push the folder and enable Pages on the branch root.
- **Netlify / Vercel** — drag and drop the folder; no build command required.

---

## Contact

- Email: <sarahkhai48@gmail.com>
- Phone: 081316231212
- LinkedIn: <https://linkedin.com/in/sarahkhairunnisaadikusuma/>
