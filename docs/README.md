# BuilderCSS Documentation

BuilderCSS is a semantic HTML + CSS theming system for MDXLD documents. It generates dynamic stylesheets customizable via URL query parameters.

## Core Principle

**Same HTML structure + Different CSS = Different theme**

Every MDXLD `$type` maps to a specific semantic HTML structure. Templates only change CSS variables, never the HTML structure.

## Documentation

- [URL Conventions](./url-conventions.md) - CSS URL patterns and query parameters
- [Document Types](./types.md) - Available document types and their HTML structures
- [Backgrounds](./backgrounds.md) - Background effects and patterns
- [Colors](./colors.md) - Color system and Tailwind integration
- [CSS Variables](./variables.md) - shadcn/ui compatible CSS custom properties

## Quick Start

```html
<!-- Basic usage -->
<link rel="stylesheet" href="/styles/landing.css">

<!-- With customization -->
<link rel="stylesheet" href="/styles/landing.css?color=purple&bg=gradient&mode=dark">
```

## URL Convention

```
/styles/{type}.css?color={color}&bg={background}&mode={mode}&font={font}&radius={radius}
```

## Available Types

| Type | Description |
|------|-------------|
| `website` | General content pages |
| `landing` | Marketing/landing pages |
| `blog` | Blog listing pages |
| `blogpost` | Individual blog posts |
| `docs` | Documentation with sidebar |
| `collection` | Card grid layouts |
| `directory` | File/folder listings |
| `slides` | Presentations |
| `app` | Application layouts |
| `waitlist` | Pre-launch signup pages |

## Query Parameters

| Parameter | Values | Default |
|-----------|--------|---------|
| `color` | Tailwind color names | `indigo` |
| `bg` | `gradient`, `grid`, `dots`, `waves`, `stars` | none |
| `mode` | `auto`, `light`, `dark` | `auto` |
| `font` | `system`, `sans`, `serif`, `mono` | `system` |
| `radius` | `none`, `sm`, `md`, `lg`, `xl`, `full` | `md` |
