# CSS Variables

BuilderCSS generates shadcn/ui compatible CSS custom properties for consistent theming.

## Theme Variables

### Colors

```css
:root {
  /* Base colors */
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);

  /* Card/popover surfaces */
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);

  /* Primary action color */
  --primary: #6366f1;
  --primary-foreground: oklch(0.985 0 0);

  /* Secondary elements */
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);

  /* Muted/subtle elements */
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);

  /* Accent/highlight */
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);

  /* Destructive actions */
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);

  /* Borders and inputs */
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: #6366f1;
}
```

### Dark Mode

```css
[data-mode="dark"], .dark {
  --background: oklch(0.145 0.015 285);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0.015 285);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0.015 285);
  --popover-foreground: oklch(0.985 0 0);
  --primary: #818cf8;
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.269 0.015 285);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0.015 285);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.371 0.015 285);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(0.35 0.015 285);
  --input: oklch(0.35 0.015 285);
  --ring: #818cf8;
}
```

### Typography

```css
:root {
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
}

/* With font=sans option */
:root {
  --font-sans: "Inter Variable", Inter, system-ui, sans-serif;
}

/* With font=serif option */
:root {
  --font-sans: "Merriweather", Georgia, Cambria, serif;
}

/* With font=mono option */
:root {
  --font-sans: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}
```

### Spacing & Layout

```css
:root {
  --radius: 0.5rem;  /* Controlled by radius param */
}
```

Radius values:
| Param | Value |
|-------|-------|
| `none` | `0rem` |
| `sm` | `0.25rem` |
| `md` | `0.5rem` |
| `lg` | `0.75rem` |
| `xl` | `1rem` |
| `2xl` | `1.5rem` |
| `full` | `9999px` |

### Chart Colors

```css
:root {
  --chart-1: oklch(0.60 0.18 150);
  --chart-2: oklch(0.55 0.15 200);
  --chart-3: oklch(0.65 0.12 60);
  --chart-4: oklch(0.50 0.20 280);
  --chart-5: oklch(0.60 0.15 330);
}
```

### Sidebar (App type)

```css
:root {
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: #4f46e5;
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: #6366f1;
}
```

## Usage in CSS

```css
.button {
  background: var(--primary);
  color: var(--primary-foreground);
  border-radius: var(--radius);
}

.card {
  background: var(--card);
  color: var(--card-foreground);
  border: 1px solid var(--border);
}

.input {
  border: 1px solid var(--input);
  background: var(--background);
}

.input:focus {
  outline: 2px solid var(--ring);
}
```

## OKLCH Color Space

BuilderCSS uses OKLCH for perceptually uniform colors:

```css
oklch(lightness chroma hue)
```

- **Lightness:** 0 (black) to 1 (white)
- **Chroma:** 0 (gray) to ~0.4 (saturated)
- **Hue:** 0-360 degrees

Benefits:
- Consistent perceived brightness across colors
- Smooth transitions and gradients
- Better accessibility contrast ratios

## Compatibility

These variables are compatible with:
- shadcn/ui components
- Tailwind CSS (with CSS variable config)
- Radix UI primitives
- Any CSS-in-JS solution
