# @buildercss/core

Semantic HTML templates with pure CSS styling. No utility classes. No build tools. No complexity.

## Installation

```bash
npm install @buildercss/core
# or
pnpm add @buildercss/core
```

## Usage

### CSS

Import the complete stylesheet:

```css
@import '@buildercss/core/styles';
```

Or import individual files:

```css
@import '@buildercss/core/styles/variables.css';
@import '@buildercss/core/styles/base.css';
@import '@buildercss/core/styles/layouts/docs.css';
```

### HTML

Use semantic HTML with `data-layout` attributes:

```html
<body data-layout="docs">
  <header>
    <nav>
      <a href="/">Logo</a>
      <ul>
        <li><a href="/docs">Docs</a></li>
      </ul>
    </nav>
  </header>

  <aside>
    <nav aria-label="Sidebar">
      <a href="/intro">Introduction</a>
      <a href="/install" aria-current="page">Installation</a>
    </nav>
  </aside>

  <main>
    <article>
      <header>
        <h1>Installation</h1>
        <p>Get started with BuilderCSS</p>
      </header>
      <section>
        <!-- Content -->
      </section>
    </article>
    <aside>
      <nav aria-label="On this page">
        <!-- TOC -->
      </nav>
    </aside>
  </main>

  <footer>
    <!-- Footer content -->
  </footer>
</body>
```

## Layouts

| Layout | Description |
|--------|-------------|
| `stacked` | Simple vertical layout with header, main, footer |
| `sidebar` | Two-column layout with sidebar navigation |
| `docs` | Three-column documentation layout with sidebar and TOC |
| `auth` | Centered authentication form layout |
| `split` | Two-column split layout |
| `dashboard` | Application dashboard layout |
| `fullscreen` | Full viewport layout |

## MDX Components

The package includes MDX component definitions for:

### Layouts
- AuthLayout, DashboardLayout, DocsLayout, FullscreenLayout
- SidebarLayout, SplitLayout, StackedLayout

### Pages
- About, Article, Blog, Careers, Changelog, Contact
- Docs, Error, Home, NotFound, Pricing, PrivacyPolicy
- Product, Terms, Waitlist

### Sections
- CTA, FAQ, Features, Hero, Logos, Newsletter
- Stats, Team, Testimonials

### Views
- APIKeys, Billing, Calendar, Chat, Dashboard, Detail
- Editor, Form, Grid, Kanban, List, Settings, Table
- UserProfile, Users

### Containers
- Drawer, Fullscreen, Inline, Modal, Popup, Slideover

## CSS Variables

BuilderCSS uses CSS custom properties compatible with shadcn/ui:

```css
:root {
  --background: oklch(100% 0 0);
  --foreground: oklch(14.1% 0.005 285.82);
  --primary: oklch(20.5% 0.006 285.88);
  --primary-foreground: oklch(98.5% 0 0);
  --muted: oklch(96.9% 0.001 286.37);
  --muted-foreground: oklch(55.1% 0.014 285.94);
  --border: oklch(91.4% 0.004 286.32);
  /* ... */
}
```

## Philosophy

BuilderCSS uses CSS selectors based on HTML structure, not class names:

```css
/* NOT this */
.site-header { ... }
.sidebar { ... }

/* But THIS - pure semantic selectors */
body > header { ... }
body > aside { ... }
body > main > article { ... }
```

This approach means:
- **Zero class name conventions** to learn
- **Self-documenting HTML** - the structure IS the styling
- **CSS-only theming** - swap stylesheets, keep the same HTML

## Browser Support

Modern browsers (2+ years):
- Chrome/Edge 111+ (OKLCH colors)
- Safari 16.4+ (OKLCH colors)
- Firefox 113+ (OKLCH colors)

## License

MIT
