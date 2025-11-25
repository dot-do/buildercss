# Semantic HTML Waitlist Page

A semantic HTML implementation of the [waitlist.do](https://github.com/dot-do/waitlist.do) template - demonstrating how to create beautiful, modern designs using pure semantic HTML and CSS.

## The Concept

This project demonstrates the BuilderCSS philosophy:
- **Write semantic HTML once** - No divs, no utility classes, just meaningful markup
- **Transform with CSS** - Change the entire design by swapping stylesheets
- **Zero complexity** - No build tools, no frameworks, no JavaScript dependencies

## What's Different?

While waitlist.do uses:
- Next.js + React
- Tailwind CSS v4 with utility classes
- shadcn/ui components
- Complex component hierarchies

This version uses:
- **Pure semantic HTML** - `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- **No divs** - Every element has semantic meaning
- **No classes** - Styling through element selectors only
- **Modern CSS** - CSS variables, oklch colors, backdrop-filter, color-mix

## Semantic Elements Used

```html
<header>        <!-- Fixed navigation bar -->
  <nav>         <!-- Navigation container -->
    <strong>    <!-- Logo/brand name -->
    <menu>      <!-- Navigation menu -->

<main>          <!-- Primary content area -->
  <section>     <!-- Hero section -->
    <small>     <!-- Eyebrow text -->
    <h1>        <!-- Main headline -->
    <p>         <!-- Subtitle -->
    <form>      <!-- Email capture -->

<footer>        <!-- Page footer -->
  <section>     <!-- Footer content grid -->
    <div>       <!-- Brand section -->
    <article>   <!-- Footer columns -->
  <aside>       <!-- Copyright bar -->
```

## Features

### Sticky Navigation
- Fixed header with backdrop blur
- Smooth transitions on scroll
- Responsive menu

### Hero Section
- Full-height centered layout
- Typography-driven design
- Inline email form

### Comprehensive Footer
- Grid layout (responsive)
- Multiple link sections
- Embedded waitlist form
- Social media links
- Copyright bar

### Modern Styling
- **oklch color space** - Perceptually uniform colors
- **CSS color-mix()** - Dynamic color mixing
- **backdrop-filter** - Frosted glass effect
- **text-wrap: balance** - Balanced multi-line headings
- **clamp()** - Fluid typography
- **Dark mode** - Automatic via `prefers-color-scheme`

## Files

- `index.html` - Pure semantic HTML (87 lines, zero divs)
- `style.css` - Complete styling (401 lines, semantic selectors only)
- `README.md` - This file

## Design Philosophy

From the waitlist.do PRD:
> **Minimal. Modern. Clean.**
> - Whitespace-First
> - Typography-Driven
> - Subtle Interactions
> - Purposeful Color
> - Clean Borders

This implementation achieves all these goals using semantic HTML as the foundation.

## Browser Support

- Chrome/Edge 111+ (oklch colors)
- Safari 16.4+ (oklch colors)
- Firefox 113+ (oklch colors)
- Backdrop blur supported in all modern browsers

## Why Semantic HTML?

1. **Accessibility** - Screen readers understand the structure
2. **SEO** - Search engines parse semantic meaning
3. **Maintainability** - Code describes what it is, not how it looks
4. **Flexibility** - Redesign without touching HTML
5. **Standards** - Following web platform conventions

## The Power of Separation

This is what the web platform intended:
- **HTML** = Structure and meaning
- **CSS** = Presentation and design
- **JS** = Behavior and interaction

Change the entire visual design without touching a single HTML tag. That's the goal.

## Comparison

**waitlist.do Component** (React/Tailwind):
```jsx
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
  <p className="eyebrow text-muted-foreground">Introducing</p>
  <h1 className="hero hero-1 text-card-foreground">
    Build the ultimate management layer
  </h1>
</div>
```

**This Implementation** (Semantic HTML):
```html
<section>
  <small>Introducing</small>
  <h1>Build the ultimate management layer</h1>
</section>
```

Same visual result. Zero classes. Pure semantics.

## Inspiration

- [waitlist.do](https://github.com/dot-do/waitlist.do) - Original template
- [Linear](https://linear.app) - Design inspiration
- [Vercel](https://vercel.com) - Clean aesthetics
- [Stripe](https://stripe.com) - Typography-first approach

## License

This is a demonstration project showing how to implement modern designs with semantic HTML. The original waitlist.do template belongs to its creators.
