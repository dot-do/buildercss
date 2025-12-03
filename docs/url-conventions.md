# URL Conventions

BuilderCSS serves dynamic stylesheets via URL patterns with query parameter customization.

## Basic Pattern

```
/styles/{type}.css
```

Where `{type}` is one of the supported document types.

## Query Parameters

All style customization happens through URL query parameters:

```
/styles/{type}.css?color={color}&bg={background}&mode={mode}&font={font}&radius={radius}
```

### color

Primary color from Tailwind palette.

| Value | Description |
|-------|-------------|
| `slate`, `gray`, `zinc` | Neutral tones |
| `red`, `orange`, `amber`, `yellow` | Warm colors |
| `lime`, `green`, `emerald`, `teal` | Green tones |
| `cyan`, `sky`, `blue`, `indigo` | Blue tones |
| `violet`, `purple`, `fuchsia`, `pink`, `rose` | Purple/pink tones |

Can include shade: `color=blue-600`

**Default:** `indigo`

### bg (background)

Background effect applied to the page.

| Value | Description |
|-------|-------------|
| `gradient` | Radial gradient overlay |
| `grid` | CSS grid pattern |
| `dots` | Polka dot pattern |
| `waves` | Soft wave gradients |
| `stars` | Star field effect |
| (none) | Solid background |

**Default:** none

### mode

Color mode preference.

| Value | Description |
|-------|-------------|
| `auto` | System preference |
| `light` | Force light mode |
| `dark` | Force dark mode |

**Default:** `auto`

### font

Font family stack.

| Value | Description |
|-------|-------------|
| `system` | System UI fonts |
| `sans` | Inter Variable |
| `serif` | Merriweather |
| `mono` | JetBrains Mono |

**Default:** `system`

### radius

Border radius scale.

| Value | CSS |
|-------|-----|
| `none` | `0rem` |
| `sm` | `0.25rem` |
| `md` | `0.5rem` |
| `lg` | `0.75rem` |
| `xl` | `1rem` |
| `2xl` | `1.5rem` |
| `full` | `9999px` |

**Default:** `md`

## Examples

```html
<!-- Default indigo theme -->
<link rel="stylesheet" href="/styles/landing.css">

<!-- Purple with gradient background, dark mode -->
<link rel="stylesheet" href="/styles/landing.css?color=purple&bg=gradient&mode=dark">

<!-- Green dots pattern, large radius -->
<link rel="stylesheet" href="/styles/docs.css?color=green&bg=dots&radius=lg">

<!-- Minimal serif typography -->
<link rel="stylesheet" href="/styles/blogpost.css?font=serif&radius=none">

<!-- Enterprise look -->
<link rel="stylesheet" href="/styles/app.css?color=slate&font=system&radius=sm">
```

## Shorthand Aliases

Some parameters accept shorthand values:

| Full | Short |
|------|-------|
| `color` | `c` |
| `background` | `bg` |
| `mode` | `m` |
| `font` | `f` |
| `radius` | `r` |

```html
<!-- These are equivalent -->
<link rel="stylesheet" href="/styles/landing.css?color=purple&background=gradient">
<link rel="stylesheet" href="/styles/landing.css?c=purple&bg=gradient">
```

## MDX Frontmatter

Set style preferences in MDX frontmatter:

```yaml
---
$type: LandingPage
title: My Product
$style:
  color: purple
  background: gradient
  mode: auto
  font: sans
  radius: md
---
```

The server automatically generates the appropriate CSS URL.

## Caching

CSS responses are cacheable with appropriate headers. Each unique parameter combination produces a distinct cached response.
