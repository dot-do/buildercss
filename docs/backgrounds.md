# Background Effects

BuilderCSS includes CSS-only background effects applied via the `bg` query parameter.

## Usage

```html
<link rel="stylesheet" href="/styles/landing.css?bg=gradient&color=indigo">
```

Or in frontmatter:

```yaml
---
$type: LandingPage
$style:
  background: gradient
  color: indigo
---
```

## Available Effects

### gradient

Radial gradient effect with color-tinted overlays.

```css
body::before {
  background: linear-gradient(135deg, {color}10 0%, transparent 50%, {color}05 100%);
}
#hero::before {
  background: radial-gradient(ellipse at top, {color}20, transparent 70%);
}
```

**Best for:** Landing pages, marketing sites, SaaS products

### grid

CSS grid line pattern.

```css
body::before {
  background-image:
    linear-gradient({color}10 1px, transparent 1px),
    linear-gradient(90deg, {color}10 1px, transparent 1px);
  background-size: 40px 40px;
}
```

**Best for:** Tech products, developer tools, engineering sites

### dots

Polka dot pattern.

```css
body::before {
  background-image: radial-gradient({color}30 1px, transparent 1px);
  background-size: 20px 20px;
}
```

**Best for:** Creative sites, portfolios, design agencies

### waves

Soft wave-like radial gradients.

```css
body::before {
  background:
    radial-gradient(ellipse at 20% 80%, {color}15, transparent 50%),
    radial-gradient(ellipse at 80% 20%, {color}10, transparent 50%),
    radial-gradient(ellipse at 40% 40%, {color}05, transparent 60%);
}
```

**Best for:** Professional sites, enterprise, corporate

### stars

Star field effect with scattered points.

```css
body::before {
  background:
    radial-gradient(1px 1px at 20px 30px, {color}60, transparent),
    radial-gradient(1px 1px at 40px 70px, {color}40, transparent),
    radial-gradient(2px 2px at 200px 50px, {color}70, transparent),
    /* ... more stars */
  background-size: 350px 200px;
}
```

**Best for:** Space themes, night modes, gaming sites

## Color Integration

Background effects use the primary color at varying opacity levels:

| Opacity | Usage |
|---------|-------|
| `{color}05` | Very subtle accents |
| `{color}10` | Light backgrounds, grid lines |
| `{color}15` | Medium accents |
| `{color}20` | Stronger accents |
| `{color}30` | Visible patterns (dots) |
| `{color}40-70` | Prominent elements (stars) |

## Combining with Mode

Background effects adapt to color mode:

```html
<!-- Light mode with gradient -->
<link rel="stylesheet" href="/styles/landing.css?bg=gradient&mode=light">

<!-- Dark mode with stars -->
<link rel="stylesheet" href="/styles/landing.css?bg=stars&mode=dark">
```

In dark mode, background effects automatically adjust to complement the darker surface colors.

## Performance

All backgrounds are CSS-only:
- No JavaScript required
- No additional HTTP requests
- GPU-accelerated rendering
- Works with any color scheme
- Cacheable with the stylesheet

## Examples

```html
<!-- Purple gradient for SaaS -->
<link rel="stylesheet" href="/styles/landing.css?color=purple&bg=gradient">

<!-- Green grid for dev tools -->
<link rel="stylesheet" href="/styles/docs.css?color=green&bg=grid">

<!-- Pink dots for creative portfolio -->
<link rel="stylesheet" href="/styles/collection.css?color=pink&bg=dots">

<!-- Blue waves for enterprise -->
<link rel="stylesheet" href="/styles/website.css?color=blue&bg=waves">

<!-- Indigo stars for dark mode -->
<link rel="stylesheet" href="/styles/landing.css?color=indigo&bg=stars&mode=dark">
```

## Creating Custom Backgrounds

Add new background effects by extending the `backgroundCSS` function:

```typescript
function customBackground(color: string): string {
  return `
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -1;
  /* Your custom CSS */
}
`
}
```
