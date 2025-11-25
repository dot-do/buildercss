/**
 * Animated Grid Background
 * Pure vanilla JavaScript - no dependencies
 */
(function() {
  'use strict';

  class GridBackground {
    constructor(container, options = {}) {
      this.container = container;
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.animationId = null;
      this.mouse = { x: -1000, y: -1000 };

      this.options = {
        gridSize: options.gridSize || 40,
        color: options.color || 'rgba(102, 126, 234, 0.2)',
        lineWidth: options.lineWidth || 1,
        rippleRadius: options.rippleRadius || 200,
        interactive: options.interactive !== false
      };

      this.init();
    }

    init() {
      // Style canvas
      this.canvas.style.position = 'absolute';
      this.canvas.style.top = '0';
      this.canvas.style.left = '0';
      this.canvas.style.width = '100%';
      this.canvas.style.height = '100%';
      this.canvas.style.pointerEvents = 'none';

      this.container.appendChild(this.canvas);

      this.resize();

      if (this.options.interactive) {
        this.container.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.container.addEventListener('mouseleave', () => this.handleMouseLeave());
      }

      window.addEventListener('resize', () => this.resize());
      this.animate();
    }

    resize() {
      const rect = this.container.getBoundingClientRect();
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
    }

    handleMouseMove(e) {
      const rect = this.container.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    }

    handleMouseLeave() {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    }

    drawGrid() {
      const { gridSize, color, lineWidth, rippleRadius } = this.options;
      const width = this.canvas.width;
      const height = this.canvas.height;

      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = lineWidth;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, 0);

        for (let y = 0; y <= height; y += 2) {
          const dx = x - this.mouse.x;
          const dy = y - this.mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let offsetX = x;
          if (distance < rippleRadius) {
            const intensity = 1 - distance / rippleRadius;
            offsetX += Math.sin(distance * 0.1 - Date.now() * 0.003) * intensity * 20;
          }

          this.ctx.lineTo(offsetX, y);
        }

        this.ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, y);

        for (let x = 0; x <= width; x += 2) {
          const dx = x - this.mouse.x;
          const dy = y - this.mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let offsetY = y;
          if (distance < rippleRadius) {
            const intensity = 1 - distance / rippleRadius;
            offsetY += Math.sin(distance * 0.1 - Date.now() * 0.003) * intensity * 20;
          }

          this.ctx.lineTo(x, offsetY);
        }

        this.ctx.stroke();
      }
    }

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawGrid();
      this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
      if (this.canvas.parentNode) {
        this.canvas.parentNode.removeChild(this.canvas);
      }
    }
  }

  // Auto-initialize on elements with data-background="grid"
  function initGrid() {
    const elements = document.querySelectorAll('[data-background="grid"]');
    elements.forEach(el => {
      if (!el._gridBackground) {
        const gridSize = el.dataset.gridSize || 40;
        el._gridBackground = new GridBackground(el, { gridSize: parseInt(gridSize) });
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGrid);
  } else {
    initGrid();
  }

  // Export for manual use
  window.GridBackground = GridBackground;
})();
