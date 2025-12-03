# Semantic HTML/CSS Paradigm

BuilderCSS uses **pure semantic element selectors** instead of CSS class names. This approach is inspired by [PicoCSS](https://picocss.com) but takes it further by defining specific HTML patterns for each document type.

## Why No Classes?

Traditional CSS frameworks require memorizing class conventions:
```html
<!-- Traditional approach - must learn class names -->
<div class="container">
  <header class="site-header">
    <nav class="main-nav">...</nav>
  </header>
</div>
```

BuilderCSS uses the HTML structure itself:
```html
<!-- Semantic approach - structure IS the styling -->
<body>
  <header>
    <nav>...</nav>
  </header>
</body>
```

CSS targets elements by their position in the DOM:
```css
body > header { /* site header */ }
body > header nav { /* main navigation */ }
```

## Benefits

1. **Zero learning curve** - no class conventions to memorize
2. **Self-documenting** - HTML structure reveals its purpose
3. **Portable** - same HTML works with different stylesheets
4. **Accessible** - semantic HTML is screen-reader friendly
5. **Maintainable** - fewer moving parts means fewer bugs

## Core Structure

Every BuilderCSS document follows this hierarchy:

```
body
├── header          → Site header (nav, logo, links)
├── aside           → Left sidebar (navigation)
├── main            → Main content wrapper
│   ├── header      → Page header (title, description)
│   ├── nav         → Breadcrumb or secondary nav
│   ├── article     → Primary content
│   │   ├── header  → Article header (title, meta)
│   │   ├── section → Article body
│   │   └── footer  → Article footer (nav, related)
│   ├── section     → Additional sections
│   └── aside       → Right sidebar (TOC)
└── footer          → Site footer
```

## CSS Selector Patterns

### Direct Children
Use `>` to target direct children:
```css
body > header { }       /* Site header only */
body > main { }         /* Main content wrapper */
body > footer { }       /* Site footer only */
```

### Nested Elements
Chain selectors for nested elements:
```css
body > main > article { }                  /* Primary article */
body > main > article > header { }         /* Article header */
body > main > article > section { }        /* Article content */
body > main > article > footer { }         /* Article footer */
```

### Positional Selectors
Use `:first-of-type`, `:last-of-type` for sections:
```css
body > main > section:first-of-type { }    /* Hero section */
body > main > section:not(:first-of-type) { }  /* Other sections */
```

### Attribute Selectors
Use ARIA attributes for state:
```css
nav a[aria-current="page"] { }             /* Active nav item */
section[aria-current="true"] { }           /* Current slide */
```

## Type-Specific Patterns

### Simple Types (Website, Blog, BlogPost)
```
body > header
body > main > article
body > main > aside (optional TOC)
body > footer
```

### Two-Column Types (Docs, App)
```
body > header
body > aside (left sidebar)
body > main > article
body > main > aside (right TOC)
body > footer
```

### Hero Types (LandingPage, Waitlist)
```
body > header
body > main > section:first-of-type (hero)
body > main > section:not(:first-of-type) (content)
body > footer
```

### List Types (Blog, Collection, Directory)
```
body > header
body > main > header (list title)
body > main > section (contains article elements)
body > footer
```

### Fullscreen Types (Slides)
```
body > header (controls)
body > main > section (slides)
body > aside (progress)
```

## Grid Layouts

Use CSS Grid with semantic areas:

```css
body {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: auto 1fr auto;
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

### Responsive Grid

```css
@media (max-width: 768px) {
  body {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "footer";
  }
  body > aside { display: none; }
}
```

## Accessibility

Semantic HTML improves accessibility. Use ARIA labels:

```html
<aside>
  <nav aria-label="Documentation">
    <!-- Left sidebar nav -->
  </nav>
</aside>

<main>
  <aside>
    <nav aria-label="On this page">
      <!-- Right TOC -->
    </nav>
  </aside>
</main>
```

## Extending

To add custom styling, target semantic elements:

```css
/* Custom hero styling */
body > main > section:first-of-type h1 {
  background: linear-gradient(...);
}

/* Custom card styling in collections */
body > main > section article {
  border-radius: 1rem;
}

/* Custom TOC styling */
body > main > aside nav a {
  font-size: 0.75rem;
}
```

## Comparison with Other Frameworks

| Feature | BuilderCSS | Tailwind | PicoCSS | Bootstrap |
|---------|-----------|----------|---------|-----------|
| Class names | None | Many | Few | Many |
| Learning curve | Low | High | Low | Medium |
| Bundle size | Small | Large* | Small | Large |
| Customization | CSS vars | Config | CSS vars | SASS vars |
| Semantic HTML | Required | Optional | Encouraged | Optional |

*with purging

## Best Practices

1. **Use semantic elements** - `<header>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
2. **Avoid generic divs** - Only use `<div>` for styling hooks when absolutely necessary
3. **One article per page** - The main content should be in `body > main > article`
4. **Use nav for navigation** - `<nav>` elements are for groups of links
5. **ARIA for context** - Add `aria-label` to distinguish multiple nav/aside elements
