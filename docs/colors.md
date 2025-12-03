# Color System

BuilderCSS uses a Tailwind-compatible color system with full palette support.

## Usage

Set the primary color via query parameter:

```html
<link rel="stylesheet" href="/styles/landing.css?color=purple">
```

Or with specific shade:

```html
<link rel="stylesheet" href="/styles/landing.css?color=purple-600">
```

## Available Colors

### Neutrals

| Name | 500 | Description |
|------|-----|-------------|
| `slate` | `#64748b` | Blue-gray neutral |
| `gray` | `#6b7280` | Pure gray |
| `zinc` | `#71717a` | Warm gray |

### Reds

| Name | 500 | Description |
|------|-----|-------------|
| `red` | `#ef4444` | Pure red |
| `orange` | `#f97316` | Warm orange |
| `amber` | `#f59e0b` | Golden amber |
| `yellow` | `#eab308` | Bright yellow |

### Greens

| Name | 500 | Description |
|------|-----|-------------|
| `lime` | `#84cc16` | Yellow-green |
| `green` | `#22c55e` | Pure green |
| `emerald` | `#10b981` | Blue-green |
| `teal` | `#14b8a6` | Cyan-green |

### Blues

| Name | 500 | Description |
|------|-----|-------------|
| `cyan` | `#06b6d4` | Light blue |
| `sky` | `#0ea5e9` | Sky blue |
| `blue` | `#3b82f6` | Pure blue |
| `indigo` | `#6366f1` | Blue-purple (default) |

### Purples

| Name | 500 | Description |
|------|-----|-------------|
| `violet` | `#8b5cf6` | Blue-violet |
| `purple` | `#a855f7` | Pure purple |
| `fuchsia` | `#d946ef` | Magenta-purple |
| `pink` | `#ec4899` | Pink |
| `rose` | `#f43f5e` | Red-pink |

## Shade Scale

Each color has 11 shades (50-950):

| Shade | Usage |
|-------|-------|
| `50` | Very light backgrounds |
| `100` | Light backgrounds |
| `200` | Light borders, subtle elements |
| `300` | Borders, dividers |
| `400` | Disabled states, secondary text |
| `500` | Primary color (default) |
| `600` | Hover states, emphasis |
| `700` | Active states, strong emphasis |
| `800` | Heavy emphasis |
| `900` | Very dark elements |
| `950` | Near-black elements |

## Examples

```html
<!-- Default shade (500) -->
<link rel="stylesheet" href="/styles/landing.css?color=blue">

<!-- Specific shade -->
<link rel="stylesheet" href="/styles/landing.css?color=blue-600">

<!-- Hex color (advanced) -->
<link rel="stylesheet" href="/styles/landing.css?color=%236366f1">
```

## Generated CSS Variables

When you select a color, BuilderCSS generates a full palette:

```css
:root {
  --primary: #6366f1;
  --primary-50: #eef2ff;
  --primary-100: #e0e7ff;
  --primary-200: #c7d2fe;
  --primary-300: #a5b4fc;
  --primary-400: #818cf8;
  --primary-500: #6366f1;
  --primary-600: #4f46e5;
  --primary-700: #4338ca;
  --primary-800: #3730a3;
  --primary-900: #312e81;
  --primary-950: #1e1b4b;
}
```

## Color Mode Integration

Colors automatically adjust for light and dark modes:

**Light Mode:**
- Primary uses `600` shade for better contrast
- Backgrounds are light (`50-100`)
- Text is dark (`900-950`)

**Dark Mode:**
- Primary uses `500` shade for vibrance
- Backgrounds are dark (`900-950`)
- Text is light (`50-100`)

## Semantic Colors

BuilderCSS generates semantic colors from the primary:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: #6366f1;
  --primary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --border: oklch(0.922 0 0);
  --ring: #6366f1;
}
```

## Brand Colors

For brand-specific colors, use hex values:

```yaml
---
$type: LandingPage
$style:
  color: "#ff5500"  # Custom brand color
---
```

Or via URL (URL-encoded):

```html
<link rel="stylesheet" href="/styles/landing.css?color=%23ff5500">
```
