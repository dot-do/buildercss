# Semantic HTML Blog Template

A minimal, typography-focused blog template built entirely with semantic HTML and modern CSS. Zero JavaScript, no build tools, no classes.

## Philosophy

This blog template demonstrates:
- **Semantic-first HTML** - Every element has meaning
- **Typography-driven design** - Serif body text, sans-serif headings
- **Pure CSS styling** - No utility classes, no preprocessors
- **Zero complexity** - No build steps, no dependencies

## Features

### Blog Index
- Clean article listing
- Date, title, excerpt, and tags
- Semantic `<article>` elements
- Tag filtering UI

### Blog Posts
- Long-form content support
- Proper heading hierarchy
- Code blocks with syntax highlighting
- Blockquotes and emphasis
- Responsive typography

### Responsive Layout
- Mobile-first design
- Fluid typography with `clamp()`
- Semantic breakpoints
- Touch-friendly interactions

## Files

- `index.html` - Blog listing page
- `blog/semantic-html.html` - Sample blog post
- `style.css` - Complete stylesheet
- `README.md` - This file

## Design Choices

### Typography

**Body Text**: Georgia serif for comfortable long-form reading
**Headings**: System sans-serif for clear hierarchy
**Code**: SF Mono / Monaco for code blocks

**Scale**:
- Body: 18px base (16px on mobile)
- H1: 3rem (2.25rem on mobile)
- H2: 2rem (1.5rem on mobile)
- H3: 1.75rem (1.25rem on mobile)

### Color System

Uses OKLCH color space for perceptually uniform colors:
- **Background**: Near-white (light) / Dark gray (dark)
- **Foreground**: Near-black (light) / Off-white (dark)
- **Primary**: Blue accent
- **Muted**: Subtle backgrounds and reduced emphasis

Automatic dark mode via `prefers-color-scheme`.

### Spacing

Generous whitespace for readability:
- 3rem between articles
- 2.5rem before H2 headings
- 1.5rem paragraph margins
- 4rem footer padding

## Semantic Elements

```html
<header>          <!-- Site/page header -->
  <nav>           <!-- Navigation -->
    <strong>      <!-- Logo/brand -->
    <menu>        <!-- Navigation menu -->

<main>            <!-- Primary content -->
  <header>        <!-- Page header -->
  <section>       <!-- Article list -->
    <article>     <!-- Individual posts -->
      <time>      <!-- Publication date -->
      <h2>        <!-- Post title -->
      <aside>     <!-- Post tags -->

<footer>          <!-- Site footer -->
  <section>       <!-- Footer content -->
    <article>     <!-- Footer columns -->
  <aside>         <!-- Copyright -->
```

## Usage

1. Clone or download this template
2. Edit `index.html` to add your blog posts
3. Create new posts in the `blog/` directory
4. Customize colors in `style.css`
5. Deploy anywhere (no build step!)

## Customization

### Changing Colors

Edit the `:root` variables in `style.css`:

```css
:root {
  --primary: oklch(0.50 0.20 250);  /* Change hue for brand color */
  --background: oklch(0.99 0 0);    /* Adjust lightness */
}
```

### Changing Typography

Update the font stacks:

```css
:root {
  --font-sans: 'Your Sans', sans-serif;
  --font-serif: 'Your Serif', serif;
}
```

### Adjusting Layout

Modify the max-width on main content:

```css
main {
  max-width: 56rem;  /* Adjust for narrower/wider */
}
```

## Browser Support

- Chrome/Edge 111+
- Safari 16.4+
- Firefox 113+

All features degrade gracefully in older browsers.

## Why No Classes?

Classes create coupling between HTML and CSS. Semantic HTML with element selectors is:
- **More maintainable** - Structure describes meaning
- **More accessible** - Assistive tech understands intent
- **More flexible** - Redesign without touching HTML
- **More standard** - Using the platform as designed

## Inspiration

- [Brutalist Web Design](https://brutalist-web.design/)
- [MDN Web Docs](https://developer.mozilla.org/) - Clean, semantic structure
- [A List Apart](https://alistapart.com/) - Typography-first design
- Classic blog aesthetics from the 2000s

## License

This template is free to use for any purpose. No attribution required.
