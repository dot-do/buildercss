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

## License

MIT
