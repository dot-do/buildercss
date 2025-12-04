# Semantic HTML Waitlist Templates

Complete collection of waitlist page variants built with semantic HTML, pure CSS, and animated backgrounds. Inspired by [waitlist.do](https://github.com/dot-do/waitlist.do).

## Philosophy

**Zero complexity. Maximum semantics.**

- ✅ Pure semantic HTML - `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ✅ No utility classes - Just element selectors
- ✅ No divs (except where absolutely necessary)
- ✅ Modern CSS - oklch colors, color-mix(), backdrop-filter
- ✅ Animated backgrounds - Pure vanilla JavaScript
- ✅ Fully responsive - Mobile-first design
- ✅ Dark mode - Automatic via `prefers-color-scheme`

## Template Variants

### 1. Simple Hero (`index.html`)
**Background:** Gradient Mesh

Clean, centered hero section with email capture. Perfect for minimal product launches.

```html
<main data-background="gradient">
  <section id="join">
    <small>Introducing</small>
    <h1>Your headline</h1>
    <p>Your subtitle</p>
    <form>...</form>
  </section>
</main>
```

### 2. Code Side-by-Side (`variant-code-side.html`)
**Background:** Gradient Mesh

Hero text alongside a code snippet window. Ideal for developer tools and APIs.

```html
<section class="hero-side-by-side">
  <div>Hero content</div>
  <figure>
    <figcaption>example.ts</figcaption>
    <pre><code>...</code></pre>
  </figure>
</section>
```

### 3. Code Stacked (`variant-code-stacked.html`)
**Background:** Particles

Hero section with code window below the fold. Great for showcasing SDK usage.

### 4. Video Side-by-Side (`variant-video-side.html`)
**Background:** Waves

Hero text with YouTube embed alongside. Perfect for product demos.

### 5. Video Stacked (`variant-video-stacked.html`)
**Background:** Particles

Hero section with video below the fold.

### 6. Image Side-by-Side (`variant-image-side.html`)
**Background:** Interactive Grid

Hero text with product screenshot alongside. Ideal for SaaS products.

### 7. Image Stacked (`variant-image-stacked.html`)
**Background:** Waves

Hero section with featured image below the fold.

### 8. Cards Layout (`variant-cards.html`)
**Background:** Interactive Grid

Hero with multiple code snippet cards in masonry-style grid. Perfect for showcasing multiple features.

## Blog Integration

- `blog.html` - Blog listing page
- `blog/getting-started.html` - Sample blog post
- Semantic article structure with tags
- Same footer as waitlist pages

## Files

```
waitlist/
├── index.html                    # Simple hero (default)
├── variant-code-side.html        # Code window side-by-side
├── variant-code-stacked.html     # Code window stacked
├── variant-video-side.html       # Video side-by-side
├── variant-video-stacked.html    # Video stacked
├── variant-image-side.html       # Image side-by-side
├── variant-image-stacked.html    # Image stacked
├── variant-cards.html            # Cards masonry layout
├── variants.html                 # Gallery of all variants
├── blog.html                     # Blog listing
├── blog/
│   └── getting-started.html      # Sample blog post
├── style.css                     # Complete stylesheet
└── README.md                     # This file
```

## Animated Backgrounds

All templates use vanilla JavaScript backgrounds from `/dist/backgrounds/`:

- **gradient.js** - Animated gradient mesh
- **particles.js** - Connected floating particles
- **grid.js** - Interactive ripple grid
- **waves.js** - Smooth wave animation

Include with:
```html
<main data-background="gradient">
  <!-- content -->
</main>
<script src="../dist/backgrounds/gradient.js"></script>
```

## Semantic Elements

Every template uses proper semantic HTML:

```html
<header>                 <!-- Site header -->
  <nav>                  <!-- Navigation -->
    <strong>             <!-- Logo/brand -->
    <menu>               <!-- Menu items -->

<main>                   <!-- Primary content -->
  <section>              <!-- Content section -->
    <small>              <!-- Eyebrow text -->
    <h1>                 <!-- Main heading -->
    <form>               <!-- Email capture -->
    <figure>             <!-- Code/media -->
      <figcaption>       <!-- File name -->

<footer>                 <!-- Site footer -->
  <section>              <!-- Footer grid -->
    <div>                <!-- Brand column -->
    <article>            <!-- Link columns -->
  <aside>                <!-- Copyright -->
```

## Styling Approach

### Color System
Uses OKLCH for perceptually uniform colors:
```css
--background: oklch(1.0000 0 0);
--foreground: oklch(0.2686 0 0);
--primary: oklch(0.7686 0.1647 70.0804);
```

### Typography
- **Body**: System sans-serif stack
- **Headings**: 700-800 weight, tight tracking
- **Code**: SF Mono / Monaco / Consolas

### Spacing
Consistent rhythm with CSS custom properties:
- Container: `max-width: 48rem` (hero) / `80rem` (wide)
- Padding: `3rem` vertical, `1.5rem` horizontal
- Gaps: `0.75rem` (small), `1.5rem` (medium), `3rem` (large)

### Responsive
Mobile-first with semantic breakpoints:
```css
@media (min-width: 640px)  { /* Mobile landscape */ }
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

## Features

### Sticky Navigation
Fixed header with backdrop blur and smooth transitions.

### Form Focus
Clicking "Join waitlist" button auto-focuses the email input.

### Dark Mode
Automatic via `prefers-color-scheme: dark`.

### Accessibility
- Proper heading hierarchy
- ARIA labels on links
- Semantic form elements
- Keyboard navigation
- Focus indicators

## Usage

1. **Choose a variant** from `variants.html` gallery
2. **Copy the HTML** - No build step required
3. **Customize content** - Edit text, colors, and images
4. **Deploy anywhere** - Pure static HTML/CSS/JS

## Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary: oklch(0.7686 0.1647 70.0804);  /* Brand color */
  --background: oklch(1.0000 0 0);          /* Light background */
}
```

### Change Background
Replace `data-background` attribute:
```html
<main data-background="particles">  <!-- or: gradient, grid, waves -->
```

### Change Layout
Swap between variants:
- Simple: No class
- Side-by-side: `class="hero-side-by-side"`
- Stacked: `class="hero-stacked"`
- Cards: `class="hero-cards"`

## Comparison with waitlist.do

**waitlist.do** uses:
- Next.js 15 + React
- Tailwind CSS v4
- shadcn/ui components
- Complex build pipeline

**This implementation** uses:
- Pure HTML5
- Semantic elements only
- Modern CSS (no preprocessors)
- Vanilla JavaScript backgrounds
- Zero build tools

Same visual result. Dramatically simpler code.

## Browser Support

- Chrome/Edge 111+
- Safari 16.4+
- Firefox 113+

All features degrade gracefully in older browsers.

## Performance

- **No JavaScript required** for layout/styling
- **Backgrounds are optional** - works without them
- **Lazy-loaded images** via native `loading="lazy"`
- **Optimized animations** - 60fps via `requestAnimationFrame`

## License

MIT - Free to use for any project. No attribution required.

## Credits

Inspired by [waitlist.do](https://github.com/dot-do/waitlist.do) by dot-do team.
Reimagined with semantic HTML and zero utility classes.
