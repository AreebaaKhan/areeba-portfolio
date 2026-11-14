# Areeba Khan Portfolio

Personal portfolio of Areeba Khan, a final-year Computer Systems Engineering student at NED University, Karachi. It presents backend and AI projects with demo videos, screenshots and source links, along with experience, teaching, achievements and certifications.

Live site: https://areeba-khan.vercel.app/

## Features

- Project pages with an embedded walkthrough video, a screenshot gallery and a keyboard-accessible lightbox
- Category filter on the Projects page
- Dark and light theme with a toggle, saved in the browser
- Resume menu with a view option and a PDF download
- Achievements slideshow with pause control
- Timeline for experience and a separate page for volunteer teaching
- Certifications grouped into professional certificates and workshops
- Per-page metadata, Open Graph share image, sitemap and robots file
- Missing images, links or videos fall back gracefully instead of breaking the page

## Tech stack

- Next.js 16 (App Router, Turbopack, Cache Components)
- React 19, JavaScript
- Tailwind CSS v4 (CSS-first configuration in `src/app/globals.css`)
- Framer Motion for animation
- Lucide React for icons
- Inter and Plus Jakarta Sans, self-hosted through Fontsource
- Hosted on Vercel

## Run locally

Requires Node.js 20 or later.

```bash
git clone https://github.com/AreebaaKhan/areeba-portfolio.git
cd areeba-portfolio
npm install
npm run dev
```

Open http://localhost:3000.

Other commands:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Project structure

```text
public/
  images/            profile, project and achievement images, logos, placeholder
  videos/previews/   optional short hover clips
  resume/            resume PDF used by the Download button
src/
  app/               routes: home, about, projects, experience,
                     global-classroom, achievements, certifications
  components/        layout, home, about, projects, experience,
                     achievements, certifications, ui
  data/              all content and links (see below)
  lib/               small helpers
```

## Editing content

All text, links and media paths live in `src/data/`. Components only read from these files.

| File | Content |
| --- | --- |
| `site.js` | name, headline, contact details, social links, resume links, navigation |
| `projects.js` | project details, stack, links, video IDs, images |
| `experience.js` | experience timeline |
| `teaching.js` | Global Classroom entries |
| `achievements.js` | achievements and LinkedIn post cards |
| `certifications.js` | certificates, in two groups |
| `skills.js` | About text, education, skills, languages |

### Add a project

1. Put images in `public/images/projects/<folder>/`.
2. Add a new object in `src/data/projects.js` with a unique `slug`, a `cover` and a `gallery` list.
3. For a video, paste only the Google Drive file ID into `driveId`. The file must be shared as "Anyone with the link".
4. Leave `github`, `driveId` or `linkedin` empty to hide that button or video.

### Update the resume

1. Replace `public/resume/Areeba_Khan_Resume.pdf`.
2. Replace the same file on Google Drive so the view link stays valid, and keep `resumeView` in `src/data/site.js` pointing to it.

## Theming

Colors are CSS variables in `src/app/globals.css`, mapped to Tailwind classes such as `bg-bg`, `bg-surface`, `border-line`, `text-fg`, `text-muted` and `text-accent`. Use these classes instead of hardcoded colors.

## Deployment

The site is deployed on Vercel from the `main` branch. Every push to `main` builds and deploys automatically. If a build fails, the previous version stays live. Run `npm run build` locally before pushing to catch errors early.