# BuilderCSS

Semantic HTML templates and CSS-only theming for MDXLD document types. Inspired by [PicoCSS](https://picocss.com) but with **pure semantic element selectors** - no classes needed.

## Philosophy

BuilderCSS uses CSS selectors based on HTML structure, not class names:

```css
/* NOT this */
.site-header { ... }
.content-wrapper { ... }
.sidebar { ... }

/* But THIS - pure semantic selectors */
body > header { ... }
body > main > article { ... }
body > aside { ... }
```

This approach means:
- **Zero class name conventions** to learn
- **Self-documenting HTML** - the structure IS the styling
- **Type-specific layouts** - each document type has consistent HTML patterns
- **CSS-only theming** - swap stylesheets, keep the same HTML

## Core Convention

Every document follows a consistent semantic structure:

```
body
├── header        → Site header with nav
├── aside         → Left sidebar (if needed)
├── main          → Main content area
│   ├── header    → Page title/description
│   ├── article   → Primary content
│   ├── section   → Content sections
│   └── aside     → Right sidebar/TOC
└── footer        → Site footer
```

CSS targets these elements directly:

```css
body > header { /* site header */ }
body > aside { /* left sidebar */ }
body > main { /* main content wrapper */ }
body > main > article { /* primary content */ }
body > main > aside { /* right sidebar/TOC */ }
body > footer { /* site footer */ }
```

## Available Types

| Type | Aliases | Use Case |
|------|---------|----------|
| Website | - | General content pages |
| LandingPage | `landing` | Marketing/hero pages |
| Waitlist | - | Pre-launch signup |
| Blog | - | Blog listing |
| BlogPost | `article` | Individual posts |
| Docs | `documentation` | Documentation (3-column) |
| Collection | `gallery` | Card grids |
| Directory | `folder`, `index` | File listings |
| Slides | `presentation` | Presentations |
| App | `dashboard` | Applications |
| PricingPage | `pricing` | Pricing tiers |
| Agent | - | AI chat interface |

## Quick Start

```yaml
---
$type: Docs
title: Getting Started
description: Learn how to use BuilderCSS
---
```

The runtime automatically:
1. Renders semantic HTML based on `$type`
2. Serves type-specific CSS at `/styles/{type}.css`
3. Supports theming via URL parameters

## Customization

Style via URL parameters:

```html
<link rel="stylesheet" href="/styles/docs.css?color=indigo&bg=gradient">
```

| Parameter | Description | Values |
|-----------|-------------|--------|
| `color` | Primary color | Any Tailwind color name |
| `bg` | Background effect | `gradient`, `grid`, `dots`, `waves`, `stars` |
| `mode` | Color mode | `auto`, `light`, `dark` |
| `font` | Font family | `system`, `sans`, `serif`, `mono` |
| `radius` | Border radius | `none`, `sm`, `md`, `lg`, `xl`, `full` |

Or in frontmatter:

```yaml
---
$type: LandingPage
$style:
  color: purple
  background: gradient
  mode: dark
---
```

## Documentation

- [Semantic Convention](./docs/semantic.md) - Full semantic HTML/CSS paradigm
- [Types Reference](./docs/types.md) - All types with HTML structure
- [URL Conventions](./docs/url-conventions.md) - Dynamic CSS URLs
- [Colors](./docs/colors.md) - Color system
- [Backgrounds](./docs/backgrounds.md) - Background effects
- [CSS Variables](./docs/variables.md) - shadcn/ui compatible variables

## Layout Definitions

Each layout is defined as an MDX file with semantic abstract interfaces:

```
layouts/
├── Website.mdx      # Base content page
├── LandingPage.mdx  # Hero marketing page
├── Blog.mdx         # Blog listing
├── BlogPost.mdx     # Individual article
├── Docs.mdx         # Three-column documentation
├── Collection.mdx   # Card grid gallery
├── Directory.mdx    # File browser
├── Slides.mdx       # Presentation
├── App.mdx          # Dashboard/application
├── Waitlist.mdx     # Pre-launch signup
├── PricingPage.mdx  # Pricing tiers
└── Agent.mdx        # AI chat interface
```

Each MDX file defines:
- **$type**: `Layout` with JSON-LD metadata
- **Semantic Structure**: Abstract component tree using semantic HTML
- **CSS Selectors**: Pure semantic selectors for styling
- **Abstract Interfaces**: Slot mappings for content injection

## Design Principles

1. **Semantic First** - HTML elements define layout, not classes
2. **Type-Driven** - Each `$type` maps to specific HTML patterns
3. **CSS-Only Theming** - Style changes don't require HTML changes
4. **Progressive Enhancement** - Works without JavaScript
5. **shadcn Compatible** - Uses OKLCH color variables

## Example: Docs Layout

The Docs type creates a Fumadocs-inspired three-column layout using pure semantic selectors:

```html
<body>
  <header><!-- Top nav --></header>
  <aside><!-- Left sidebar --></aside>
  <main>
    <article>
      <header><!-- Title --></header>
      <section><!-- Content --></section>
      <footer><!-- Prev/Next --></footer>
    </article>
    <aside><!-- Right TOC --></aside>
  </main>
  <footer><!-- Site footer --></footer>
</body>
```

CSS uses grid layout with semantic selectors:

```css
body {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

body > header { grid-area: header; }
body > aside { grid-area: sidebar; }
body > main { grid-area: main; }
body > footer { grid-area: footer; }
```

---

## Projects

### Waitlist Templates
**Location:** `/waitlist/`

8 complete waitlist page variants with animated backgrounds:
- Simple Hero
- Code Side-by-Side / Stacked
- Video Side-by-Side / Stacked
- Image Side-by-Side / Stacked
- Cards Layout

**Features:**
- Pure semantic HTML
- 4 animated backgrounds (gradient, particles, grid, waves)
- Blog integration
- Fully responsive
- Auto dark mode

[View Gallery →](waitlist/variants.html) | [Read Docs →](waitlist/README.md)

### Blog Template
**Location:** `/blog/`

Minimal, typography-focused blog:
- Clean article listing
- Long-form content support
- Serif body text, sans-serif headings
- No JavaScript required

[View Template →](blog/index.html) | [Read Docs →](blog/README.md)

### Animated Backgrounds
**Location:** `/components/backgrounds/`

Vanilla JavaScript backgrounds - no React, no dependencies:
- **Gradient Mesh** - Organic animated gradients
- **Particles** - Connected floating particles
- **Grid** - Interactive ripple effects
- **Waves** - Smooth wave animation

[View Demo →](components/backgrounds/demo.html) | [Read Docs →](components/backgrounds/README.md)

## Key Features

### Zero Utility Classes
Every template uses semantic HTML elements styled with element selectors:

```html
<header>
  <nav>
    <strong>Brand</strong>
    <menu>
      <li><a href="/">Home</a></li>
    </menu>
  </nav>
</header>
```

```css
header {
  background: var(--card);
  border-bottom: 1px solid var(--border);
}

nav {
  max-width: 64rem;
  margin: 0 auto;
}
```

### Modern CSS
- **OKLCH color space** - Perceptually uniform
- **CSS variables** - Themeable without preprocessors
- **color-mix()** - Dynamic color mixing
- **backdrop-filter** - Frosted glass effects
- **clamp()** - Fluid typography

### No Build Tools
- No Webpack, no Vite (for templates)
- No Babel, no PostCSS
- No npm install required
- Just HTML, CSS, and vanilla JS

## File Structure

```
buildercss/
├── waitlist/                    # Waitlist templates
│   ├── index.html               # Simple hero
│   ├── variant-*.html           # 7 more variants
│   ├── variants.html            # Gallery page
│   ├── blog.html                # Blog listing
│   ├── blog/                    # Blog posts
│   └── style.css                # Complete stylesheet
│
├── blog/                        # Standalone blog
│   ├── index.html               # Blog home
│   ├── blog/                    # Posts directory
│   └── style.css                # Blog stylesheet
│
├── components/
│   └── backgrounds/             # Animated backgrounds
│       ├── gradient.js          # Gradient mesh
│       ├── particles.js         # Particles
│       ├── grid.js              # Interactive grid
│       ├── waves.js             # Waves
│       └── demo.html            # Demo page
│
├── dist/
│   └── backgrounds/             # Built backgrounds
│
└── package.json                 # Build scripts
```

## Additional Design Principles

### Whitespace-First
Generous spacing, never cramped:
- 3rem vertical padding
- 48rem content width for readability
- 1.6-1.7 line-height

### Typography-Driven
Clear hierarchy with limited fonts:
- System fonts (no external requests)
- 700-800 weight for headings
- Tight letter-spacing for large text

### Subtle Interactions
Smooth micro-animations:
- 0.2-0.3s transitions
- Hover states without jarring effects
- Focus indicators for accessibility

### Purposeful Color
Intentional color use:
- Predominantly monochromatic
- OKLCH for perceptual uniformity
- Accent color for CTAs and links

## Browser Support

**Modern browsers only** (2+ years old):
- Chrome/Edge 111+ (OKLCH colors)
- Safari 16.4+ (OKLCH colors)
- Firefox 113+ (OKLCH colors)

Features degrade gracefully in older browsers.

## Inspiration

- [waitlist.do](https://github.com/dot-do/waitlist.do) - Original React/Tailwind template
- [Linear](https://linear.app) - Clean, minimal design
- [Vercel](https://vercel.com) - Typography-first aesthetics
- [Stripe](https://stripe.com) - Purposeful use of space

## Use Cases

Perfect for:
- Product launches and waitlists
- Personal blogs
- Marketing pages
- Documentation sites
- Portfolio pages
- Landing pages

Not ideal for:
- Complex web applications
- Dynamic dashboards
- E-commerce platforms

## Contributing

This is a demonstration project showing semantic HTML patterns. Feel free to:
- Fork and customize for your needs
- Submit improvements via PRs
- Use in your projects (MIT license)

## License

MIT - Free to use for any purpose. No attribution required.

---

**Built with semantic HTML. Styled with modern CSS. Zero complexity.**
