# Animated Backgrounds

Pure vanilla JavaScript animated backgrounds - no React, no build tools required. Just include the script and add a data attribute.

## Available Backgrounds

### Gradient Mesh
Animated gradient orbs with smooth organic movement.

```html
<main data-background="gradient">
  <!-- Your content -->
</main>
<script src="dist/backgrounds/gradient.js"></script>
```

### Particles
Connected particles with floating animation.

```html
<main data-background="particles" data-particle-count="100">
  <!-- Your content -->
</main>
<script src="dist/backgrounds/particles.js"></script>
```

Options:
- `data-particle-count` - Number of particles (default: 50)

### Animated Grid
Interactive grid with mouse ripple effects.

```html
<main data-background="grid" data-grid-size="50">
  <!-- Your content -->
</main>
<script src="dist/backgrounds/grid.js"></script>
```

Options:
- `data-grid-size` - Size of grid cells in pixels (default: 40)

### Waves
Smooth animated waves.

```html
<main data-background="waves">
  <!-- Your content -->
</main>
<script src="dist/backgrounds/waves.js"></script>
```

## Usage

### 1. Automatic Initialization

The backgrounds auto-initialize when the DOM loads. Just add the `data-background` attribute:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    main {
      position: relative;
      min-height: 100vh;
      overflow: hidden;
    }

    main > * {
      position: relative;
      z-index: 1;
    }
  </style>
</head>
<body>
  <main data-background="gradient">
    <h1>Your Content</h1>
  </main>

  <script src="dist/backgrounds/gradient.js"></script>
</body>
</html>
```

### 2. Manual Initialization

You can also create backgrounds programmatically:

```html
<div id="hero"></div>

<script src="dist/backgrounds/gradient.js"></script>
<script>
  const hero = document.getElementById('hero');
  const background = new GradientBackground(hero, {
    orbCount: 4,
    colors: [
      'rgba(255, 0, 0, 0.3)',
      'rgba(0, 255, 0, 0.3)',
      'rgba(0, 0, 255, 0.3)'
    ]
  });
</script>
```

## CSS Requirements

The container element must have:
- `position: relative` or `position: absolute`
- A defined height (backgrounds fill the container)
- `overflow: hidden` to prevent canvas overflow

Content inside should have:
- `position: relative`
- `z-index: 1` or higher (to appear above background)

Example:

```css
.hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
}
```

## Building

To build the backgrounds:

```bash
npm run build:backgrounds
```

This copies the vanilla JS files to `dist/backgrounds/`.

## Performance

All backgrounds use:
- `requestAnimationFrame` for smooth 60fps animation
- Canvas 2D API (no WebGL required)
- Efficient rendering (only redraws what changed)
- Automatic cleanup on element removal

## Browser Support

- Chrome/Edge (all versions)
- Firefox (all versions)
- Safari (all versions)
- All modern browsers with Canvas 2D support

## Customization

### Gradient Mesh

```javascript
new GradientBackground(element, {
  orbCount: 3,           // Number of gradient orbs
  colors: [...],         // Array of rgba colors
  speed: 0.0005          // Animation speed
});
```

### Particles

```javascript
new ParticlesBackground(element, {
  count: 50,             // Number of particles
  size: 2,               // Particle size
  speed: 0.5,            // Movement speed
  color: 'rgba(...)',    // Particle color
  connectDistance: 150   // Distance to draw connections
});
```

### Grid

```javascript
new GridBackground(element, {
  gridSize: 40,          // Grid cell size
  color: 'rgba(...)',    // Grid line color
  lineWidth: 1,          // Line thickness
  rippleRadius: 200,     // Mouse interaction radius
  interactive: true      // Enable mouse interaction
});
```

### Waves

```javascript
new WavesBackground(element);
// Waves have predefined animation - no options needed
```

## Examples

See the `/waitlist` directory for examples of backgrounds in use with semantic HTML templates.

## License

MIT - Free to use in any project.
