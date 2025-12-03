# BuilderCSS Semantic HTML Conventions

This document defines the semantic HTML conventions for MDXLD types. All BuilderCSS templates follow these conventions, enabling CSS-only theming.

## Core Principle

**Same HTML structure + Different CSS = Different theme**

Every MDXLD `$type` maps to a specific semantic HTML structure. Templates only change the CSS (and optionally JS for interactivity), never the HTML structure.

## Base Structure (All Types)

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="{{description}}">
  <title>{{title}}</title>
  <link rel="stylesheet" href="{{theme}}.css">
</head>
<body data-type="{{$type}}">
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>
</html>
```

## Type-Specific Structures

### Website

Base structure for all sites. Other types extend this.

```html
<body data-type="Website">
  <header>
    <nav>
      <strong><a href="/">{{siteName}}</a></strong>
      <menu>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </menu>
    </nav>
  </header>

  <main>
    {{content}}
  </main>

  <footer>
    <section>
      <div>
        <h2>{{siteName}}</h2>
        <p>{{description}}</p>
      </div>
      <article>
        <h3>Links</h3>
        <ul>...</ul>
      </article>
    </section>
    <aside>
      <small>&copy; {{year}} {{siteName}}</small>
    </aside>
  </footer>
</body>
```

### LandingPage

Hero-focused layout for marketing pages.

```html
<body data-type="LandingPage">
  <header>
    <nav>
      <strong>{{siteName}}</strong>
      <menu>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#cta">Get Started</a></li>
      </menu>
    </nav>
  </header>

  <main>
    <section id="hero" data-background="{{background}}">
      <small>{{tagline}}</small>
      <h1>{{headline}}</h1>
      <p>{{subheadline}}</p>
      <form>
        <input type="email" placeholder="Enter your email" required>
        <button type="submit">{{cta}}</button>
      </form>
    </section>

    <section id="features">
      <h2>Features</h2>
      <div>
        <article>
          <h3>{{feature.title}}</h3>
          <p>{{feature.description}}</p>
        </article>
        ...
      </div>
    </section>

    <section id="pricing">
      <h2>Pricing</h2>
      <div>
        <article data-plan="{{plan.id}}">
          <h3>{{plan.name}}</h3>
          <strong>{{plan.price}}</strong>
          <ul>{{plan.features}}</ul>
          <button>{{plan.cta}}</button>
        </article>
      </div>
    </section>

    <section id="cta">
      <h2>{{finalCta.headline}}</h2>
      <p>{{finalCta.description}}</p>
      <form>...</form>
    </section>
  </main>

  <footer>...</footer>
</body>
```

### Blog

List of blog posts.

```html
<body data-type="Blog">
  <header>
    <nav>
      <strong><a href="/">{{siteName}}</a></strong>
      <menu>
        <li><a href="/">Home</a></li>
        <li><a href="#subscribe">Subscribe</a></li>
      </menu>
    </nav>
  </header>

  <main>
    <header>
      <h1>{{title}}</h1>
      <p>{{description}}</p>
    </header>

    <section>
      <article>
        <time datetime="{{post.date}}">{{post.dateFormatted}}</time>
        <h2><a href="{{post.url}}">{{post.title}}</a></h2>
        <p>{{post.excerpt}}</p>
        <aside>
          <span>{{tag}}</span>
          ...
        </aside>
      </article>
      ...
    </section>
  </main>

  <footer id="subscribe">
    <section>
      <div>
        <h2>Subscribe</h2>
        <p>Get notified when new articles are published.</p>
        <form>
          <input type="email" placeholder="your@email.com" required>
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <article>
        <h3>Categories</h3>
        <ul>{{categories}}</ul>
      </article>
    </section>
    <aside>
      <small>&copy; {{year}} {{siteName}}</small>
    </aside>
  </footer>
</body>
```

### BlogPost

Single blog post/article.

```html
<body data-type="BlogPost">
  <header>
    <nav>
      <strong><a href="/">{{siteName}}</a></strong>
      <menu>
        <li><a href="/blog">Blog</a></li>
        <li><a href="#comments">Comments</a></li>
      </menu>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <time datetime="{{date}}">{{dateFormatted}}</time>
        <h1>{{title}}</h1>
        <p>{{excerpt}}</p>
        <address>
          By <a href="{{author.url}}">{{author.name}}</a>
        </address>
        <aside>
          <span>{{tag}}</span>
          ...
        </aside>
      </header>

      <section>
        {{content}}
      </section>

      <footer>
        <nav>
          <a href="{{prev.url}}" rel="prev">{{prev.title}}</a>
          <a href="{{next.url}}" rel="next">{{next.title}}</a>
        </nav>
      </footer>
    </article>

    <section id="comments">
      <h2>Comments</h2>
      {{comments}}
    </section>
  </main>

  <footer>...</footer>
</body>
```

### Docs

Documentation with sidebar navigation.

```html
<body data-type="Docs">
  <header>
    <nav>
      <strong><a href="/">{{siteName}}</a></strong>
      <menu>
        <li><a href="/docs">Docs</a></li>
        <li><a href="/api">API</a></li>
        <li><a href="https://github.com/...">GitHub</a></li>
      </menu>
    </nav>
  </header>

  <main>
    <aside>
      <nav>
        <section>
          <h2>{{section.title}}</h2>
          <ul>
            <li><a href="{{page.url}}" aria-current="{{current}}">{{page.title}}</a></li>
            ...
          </ul>
        </section>
        ...
      </nav>
    </aside>

    <article>
      <header>
        <h1>{{title}}</h1>
        <p>{{description}}</p>
      </header>

      <section>
        {{content}}
      </section>

      <footer>
        <nav>
          <a href="{{prev.url}}" rel="prev">{{prev.title}}</a>
          <a href="{{next.url}}" rel="next">{{next.title}}</a>
        </nav>
        <aside>
          <a href="{{editUrl}}">Edit this page</a>
        </aside>
      </footer>
    </article>

    <aside>
      <nav>
        <h2>On this page</h2>
        <ul>
          <li><a href="#{{heading.id}}">{{heading.text}}</a></li>
          ...
        </ul>
      </nav>
    </aside>
  </main>

  <footer>...</footer>
</body>
```

### App

Dashboard/application layout.

```html
<body data-type="App">
  <header>
    <nav>
      <strong>{{appName}}</strong>
      <menu>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/settings">Settings</a></li>
        <li><a href="/account">Account</a></li>
      </menu>
    </nav>
  </header>

  <main>
    <aside>
      <nav>
        <ul>
          <li><a href="{{item.url}}" aria-current="{{current}}">{{item.label}}</a></li>
          ...
        </ul>
      </nav>
    </aside>

    <section>
      <header>
        <h1>{{title}}</h1>
        <menu>
          <li><button>Action 1</button></li>
          <li><button>Action 2</button></li>
        </menu>
      </header>

      <article>
        {{content}}
      </article>
    </section>
  </main>
</body>
```

### Slides

Presentation/slide deck (like Reveal.js or Slidev).

```html
<body data-type="Slides">
  <header>
    <nav>
      <strong>{{title}}</strong>
      <menu>
        <li><button data-action="prev">Previous</button></li>
        <li><span>{{current}} / {{total}}</span></li>
        <li><button data-action="next">Next</button></li>
        <li><button data-action="fullscreen">Fullscreen</button></li>
      </menu>
    </nav>
  </header>

  <main>
    <section data-slide="1" aria-current="true">
      <h1>{{title}}</h1>
      <p>{{subtitle}}</p>
      <address>{{author}}</address>
    </section>

    <section data-slide="2">
      <h2>{{slide.title}}</h2>
      {{slide.content}}
    </section>

    <section data-slide="3" data-layout="two-column">
      <h2>{{slide.title}}</h2>
      <div>
        <article>{{left}}</article>
        <article>{{right}}</article>
      </div>
    </section>

    <section data-slide="4" data-layout="image-full">
      <figure>
        <img src="{{image}}" alt="{{alt}}">
        <figcaption>{{caption}}</figcaption>
      </figure>
    </section>

    <section data-slide="5" data-layout="code">
      <h2>{{slide.title}}</h2>
      <pre><code>{{code}}</code></pre>
    </section>

    <section data-slide="n" data-background="{{background}}">
      <h2>Thank You</h2>
      <p>{{closing}}</p>
      <ul>
        <li><a href="{{link}}">{{link.label}}</a></li>
      </ul>
    </section>
  </main>

  <aside data-role="progress">
    <progress value="{{current}}" max="{{total}}"></progress>
  </aside>

  <aside data-role="notes">
    <h2>Speaker Notes</h2>
    <p>{{notes}}</p>
  </aside>
</body>
```

**Slide Layouts (data-layout):**
- `centered` - Default, content centered
- `two-column` - Side by side content
- `image-full` - Full-bleed image
- `image-left` / `image-right` - Image with text
- `code` - Code-focused with syntax highlighting
- `quote` - Large quote display

**Slide Navigation:**
- Arrow keys (left/right)
- Space bar (next)
- Click/tap sides
- Swipe on touch devices

### Collection

List of items (products, resources, etc).

```html
<body data-type="Collection">
  <header>...</header>

  <main>
    <header>
      <h1>{{title}}</h1>
      <p>{{description}}</p>
    </header>

    <aside>
      <nav>
        <h2>Filter</h2>
        <ul>
          <li><a href="?filter={{filter}}">{{filter.label}}</a></li>
          ...
        </ul>
      </nav>
    </aside>

    <section>
      <article data-id="{{item.$id}}">
        <img src="{{item.image}}" alt="{{item.title}}">
        <h2><a href="{{item.url}}">{{item.title}}</a></h2>
        <p>{{item.description}}</p>
        <footer>
          <span>{{item.meta}}</span>
        </footer>
      </article>
      ...
    </section>

    <nav aria-label="Pagination">
      <a href="?page={{prev}}" rel="prev">Previous</a>
      <span>Page {{current}} of {{total}}</span>
      <a href="?page={{next}}" rel="next">Next</a>
    </nav>
  </main>

  <footer>...</footer>
</body>
```

## Data Attributes

Use `data-*` attributes for styling hooks that don't affect semantics:

| Attribute | Purpose | Values |
|-----------|---------|--------|
| `data-type` | MDXLD type | `Website`, `Blog`, `Docs`, etc. |
| `data-theme` | Color theme | `light`, `dark`, `auto` |
| `data-background` | Background effect | `gradient`, `grid`, `particles` |
| `data-layout` | Layout variant | `centered`, `wide`, `sidebar` |
| `data-plan` | Pricing tier | `free`, `pro`, `enterprise` |

## CSS Custom Properties

All themes should use these CSS custom properties:

```css
:root {
  /* Colors */
  --color-primary: oklch(60% 0.15 250);
  --color-secondary: oklch(70% 0.10 200);
  --color-accent: oklch(75% 0.20 150);
  --color-background: oklch(98% 0.01 250);
  --color-surface: oklch(100% 0 0);
  --color-text: oklch(20% 0.02 250);
  --color-muted: oklch(50% 0.02 250);
  --color-border: oklch(90% 0.01 250);

  /* Typography */
  --font-sans: system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, monospace;
  --font-size-base: 16px;
  --line-height: 1.6;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;

  /* Layout */
  --max-width: 1200px;
  --content-width: 800px;
  --sidebar-width: 280px;
  --radius: 0.5rem;
}

[data-theme="dark"] {
  --color-background: oklch(15% 0.02 250);
  --color-surface: oklch(20% 0.02 250);
  --color-text: oklch(95% 0.01 250);
  --color-muted: oklch(60% 0.02 250);
  --color-border: oklch(30% 0.02 250);
}
```

## Template Structure

Each template in buildercss follows this structure:

```
templates/
  blog/
    README.md           # Template documentation
    index.html          # Blog list page
    post.html           # Single post page
    style.css           # Default theme
    dark.css            # Dark variant
    minimal.css         # Minimal variant
  docs/
    ...
  landing/
    ...
```

## Creating New Templates

1. Follow the semantic HTML structure for the `$type`
2. Use only CSS custom properties for colors/spacing
3. Add `data-*` attributes for variant styling
4. Test with multiple content lengths
5. Ensure accessibility (focus states, ARIA)
6. Document any JavaScript dependencies
