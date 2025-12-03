# Document Types

BuilderCSS provides semantic HTML templates for MDXLD document types. Each type has a consistent HTML structure enabling CSS-only theming with **pure semantic selectors** - no classes needed.

## Available Types

| Type | Aliases | URL | Use Case |
|------|---------|-----|----------|
| Website | - | `/styles/website.css` | General content pages |
| LandingPage | `landing` | `/styles/landing.css` | Marketing pages |
| Blog | - | `/styles/blog.css` | Blog listing |
| BlogPost | `article` | `/styles/blogpost.css` | Individual posts |
| Docs | `documentation` | `/styles/docs.css` | Documentation |
| Collection | `gallery` | `/styles/collection.css` | Card grids |
| Directory | `folder`, `index` | `/styles/directory.css` | File listings |
| Slides | `presentation` | `/styles/slides.css` | Presentations |
| App | `dashboard` | `/styles/app.css` | Applications |
| Waitlist | - | `/styles/waitlist.css` | Pre-launch |
| PricingPage | `pricing` | `/styles/pricing.css` | Pricing tiers |
| Agent | `chat` | `/styles/agent.css` | AI chat interface |

## Website

Base template for general content pages.

**HTML Structure:**
```html
<body>
  <header>
    <nav>
      <a href="/"><strong>Site Name</strong></a>
      <ul><!-- Navigation items --></ul>
    </nav>
  </header>
  <main>
    <article><!-- Content --></article>
  </main>
  <footer>
    <p><small>&copy; 2025 Site Name</small></p>
  </footer>
</body>
```

**CSS Selectors:**
```css
body > header { /* Site header */ }
body > header nav { /* Navigation */ }
body > main { /* Main content */ }
body > main > article { /* Article content */ }
body > footer { /* Site footer */ }
```

**Frontmatter:**
```yaml
---
$type: Website
title: Page Title
description: Page description
---
```

## LandingPage

Hero-focused layout for marketing and product pages.

**HTML Structure:**
```html
<body data-type="LandingPage">
  <header class="site-header"><!-- Nav --></header>
  <main class="container">
    <section id="hero">
      <small>Tagline</small>
      <h1>Headline</h1>
      <p>Description</p>
      <form>
        <input type="email" placeholder="Enter your email">
        <button type="submit">Get Started</button>
      </form>
    </section>
    <section id="content"><!-- Features, etc --></section>
  </main>
  <footer class="site-footer"><!-- Footer --></footer>
</body>
```

**Frontmatter:**
```yaml
---
$type: LandingPage
title: Product Name
tagline: Build faster
headline: The best way to build MDX apps
description: Ship your ideas in minutes
cta: Get Started
---
```

## Blog

Blog index/listing page.

**HTML Structure:**
```html
<body data-type="Blog">
  <header class="site-header"><!-- Nav --></header>
  <main class="container">
    <header>
      <h1>Blog Title</h1>
      <p>Blog description</p>
    </header>
    <section>
      <article>
        <time datetime="2025-01-15">January 15, 2025</time>
        <h2><a href="/post">Post Title</a></h2>
        <p>Excerpt...</p>
        <aside><span>tag1</span><span>tag2</span></aside>
      </article>
      <!-- More articles -->
    </section>
  </main>
  <footer class="site-footer"><!-- Footer --></footer>
</body>
```

## BlogPost

Individual blog post/article.

**HTML Structure:**
```html
<body data-type="BlogPost">
  <header class="site-header"><!-- Nav --></header>
  <main class="container">
    <article>
      <header>
        <time datetime="2025-01-15">January 15, 2025</time>
        <h1>Post Title</h1>
        <p>Post description</p>
        <address>By Author Name</address>
        <aside><span>tag1</span><span>tag2</span></aside>
      </header>
      <section><!-- Content --></section>
    </article>
  </main>
  <footer class="site-footer"><!-- Footer --></footer>
</body>
```

**Frontmatter:**
```yaml
---
$type: BlogPost
title: Post Title
description: Post description
date: 2025-01-15
author: Author Name
tags: [tag1, tag2]
---
```

## Docs

Fumadocs-inspired three-column layout using **semantic selectors only** - no classes needed.

**HTML Structure:**
```html
<body>
  <!-- Top nav bar -->
  <header>
    <nav>
      <a href="/"><strong>Site Name</strong></a>
      <ul>
        <li><a href="/docs">Docs</a></li>
        <li><a href="/api">API</a></li>
      </ul>
    </nav>
  </header>

  <!-- Left sidebar -->
  <aside>
    <nav aria-label="Documentation">
      <ul>
        <li><a href="/docs/intro">Introduction</a></li>
        <li><a href="/docs/getting-started" aria-current="page">Getting Started</a></li>
      </ul>
    </nav>
  </aside>

  <!-- Main content area -->
  <main>
    <!-- Article content -->
    <article>
      <header>
        <h1>Page Title</h1>
        <p>Description</p>
      </header>
      <section>
        <!-- Prose content -->
      </section>
      <footer>
        <!-- Prev/Next navigation -->
        <a href="/prev"><small>Previous</small><span>Prev Title</span></a>
        <a href="/next"><small>Next</small><span>Next Title</span></a>
      </footer>
    </article>

    <!-- Right TOC -->
    <aside>
      <nav aria-label="On this page">
        <strong>On this page</strong>
        <ul>
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
        </ul>
      </nav>
    </aside>
  </main>

  <!-- Footer -->
  <footer>
    <p><small>&copy; 2025 Site Name</small></p>
  </footer>
</body>
```

**CSS Selectors (semantic only):**
```css
body { display: grid; grid-template-areas: "header header" "sidebar main" "footer footer"; }
body > header { grid-area: header; }
body > aside { grid-area: sidebar; }
body > main { grid-area: main; display: grid; grid-template-columns: 1fr 220px; }
body > main > article { /* Main content */ }
body > main > aside { /* Right TOC */ }
body > footer { grid-area: footer; }
```

**Features:**
- Three-column grid layout (sidebar | content | TOC)
- Sticky header, sidebar, and TOC
- Responsive: TOC hides at 1280px, sidebar at 768px
- Previous/Next navigation in article footer
- No classes needed - pure semantic HTML

## Collection

Card grid layout for collections.

**HTML Structure:**
```html
<body data-type="Collection">
  <header class="site-header"><!-- Nav --></header>
  <main class="container">
    <header class="collection-header">
      <h1>Collection Title</h1>
      <p class="lead">Description</p>
    </header>
    <section class="collection-content">
      <!-- Content -->
    </section>
    <section class="card-grid">
      <h2>Items</h2>
      <div class="grid">
        <article>
          <header>
            <span class="icon">icon</span>
            <hgroup>
              <h3><a href="/item">Item Name</a></h3>
              <p>Description</p>
            </hgroup>
          </header>
        </article>
        <!-- More cards -->
      </div>
    </section>
  </main>
  <footer class="site-footer"><!-- Footer --></footer>
</body>
```

**CSS Features:**
- Responsive grid (auto-fill, minmax 280px)
- Hover effects with elevation
- Icon + text card layout

## Directory

File/folder listing (GitHub-style).

**HTML Structure:**
```html
<body data-type="Directory">
  <header class="site-header"><!-- Nav --></header>
  <main class="container">
    <header class="directory-header">
      <nav class="breadcrumb">Home / src / components</nav>
      <h1>Directory Title</h1>
      <p>Description</p>
    </header>
    <section class="directory-content">
      <!-- Content -->
    </section>
    <section class="directory-list">
      <article>
        <span class="icon">folder</span>
        <span class="name"><a href="/folder">folder-name</a></span>
        <span class="description">Description</span>
        <span class="meta">Modified date</span>
      </article>
      <!-- More items -->
    </section>
  </main>
  <footer class="site-footer"><!-- Footer --></footer>
</body>
```

**Frontmatter:**
```yaml
---
$type: Directory
title: Directory Title
breadcrumb: [Home, src, components]
---
```

## Slides

Presentation/slideshow.

**HTML Structure:**
```html
<body data-type="Slides">
  <header class="site-header">
    <nav>
      <ul><li><strong>Presentation Title</strong></li></ul>
      <ul>
        <li><button data-action="prev">Prev</button></li>
        <li><span data-role="counter">1 / 10</span></li>
        <li><button data-action="next">Next</button></li>
        <li><button data-action="fullscreen">Fullscreen</button></li>
      </ul>
    </nav>
  </header>
  <main>
    <section data-slide="1" aria-current="true">
      <!-- Slide 1 content -->
    </section>
    <section data-slide="2">
      <!-- Slide 2 content -->
    </section>
  </main>
  <aside data-role="progress">
    <progress value="1" max="10"></progress>
  </aside>
</body>
```

**Features:**
- Horizontal scroll with snap
- Keyboard navigation (arrows, space)
- Progress bar
- Fullscreen support

**Content Separator:** Use `---` (horizontal rule) in MDX to separate slides.

## App

Dashboard/application layout.

**HTML Structure:**
```html
<body data-type="App">
  <header class="site-header">
    <nav><!-- App name, user menu --></nav>
  </header>
  <main>
    <aside>
      <nav><!-- Sidebar navigation --></nav>
    </aside>
    <section>
      <header>
        <h1>Page Title</h1>
        <menu><!-- Action buttons --></menu>
      </header>
      <article><!-- Content --></article>
    </section>
  </main>
</body>
```

## Waitlist

Pre-launch signup page.

**HTML Structure:**
```html
<body data-type="Waitlist">
  <header class="site-header"><!-- Nav --></header>
  <main class="container">
    <section id="hero">
      <small>Coming Soon</small>
      <h1>Product Name</h1>
      <p>Be the first to know when we launch.</p>
      <form>
        <input type="email" placeholder="your@email.com" required>
        <button type="submit">Join Waitlist</button>
      </form>
      <aside><small>Join 1,234 others waiting</small></aside>
    </section>
  </main>
  <footer class="site-footer"><!-- Footer --></footer>
</body>
```

## Custom Types

Extend the type system by mapping new types to existing templates or creating new CSS:

```typescript
// Map custom type to existing template
const typeMap = {
  Portfolio: 'collection',
  Resume: 'docs',
  ProductPage: 'landing',
}
```
