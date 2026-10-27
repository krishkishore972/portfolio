# Kishore | Portfolio

A modern, responsive portfolio website built with **Next.js 16** featuring a sleek dark theme, glassmorphism effects, and smooth animations.

## Features

- **Dark Theme** with glassmorphism and gradient effects
- **Fully Responsive** — Mobile, tablet, and desktop optimized
- **Fast Performance** — Built with Next.js App Router
- **Modular Architecture** — Separate components and centralized config
- **Smooth Animations** — Scroll reveal effects using Intersection Observer
- **Dynamic Content** — Easy to update via a single config file

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** JavaScript/React
- **Styling:** CSS with custom properties
- **Icons:** Font Awesome 6
- **Font:** Inter (Google Fonts)

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles with dark theme
│   ├── layout.js        # Root layout with metadata
│   └── page.js          # Main page composition
├── components/
│   ├── Navbar.js        # Responsive navigation
│   ├── Hero.js          # Hero section
│   ├── About.js         # Education & stats
│   ├── Experience.js    # Work history
│   ├── Projects.js      # Featured projects
│   ├── Skills.js        # Technical skills
│   ├── Contact.js       # Contact info
│   └── Footer.js        # Footer
└── config/
    └── portfolio.js     # All portfolio data — edit this to update content
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

All portfolio content is managed in a single file: `src/config/portfolio.js`.

## Contact

- **GitHub:** [@krishkishore972](https://github.com/krishkishore972)
- **LinkedIn:** [Kishore](https://www.linkedin.com/in/kishore-sabavath-9aab8b242/)
- **Email:** krishkishore972@gmail.com
