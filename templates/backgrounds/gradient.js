/**
 * Animated Gradient Mesh Background
 * Pure vanilla JavaScript - no dependencies
 */
(function() {
  'use strict';

  class GradientBackground {
    constructor(container, options = {}) {
      this.container = container;
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.animationId = null;
      this.orbs = [];

      this.options = {
        orbCount: options.orbCount || 3,
        colors: options.colors || [
          'rgba(102, 126, 234, 0.3)',
          'rgba(168, 85, 247, 0.3)',
          'rgba(236, 72, 153, 0.3)'
        ],
        speed: options.speed || 0.0005
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
      this.canvas.style.filter = 'blur(60px)';

      this.container.appendChild(this.canvas);

      this.resize();
      this.createOrbs();

      window.addEventListener('resize', () => this.resize());
      this.animate();
    }

    resize() {
      const rect = this.container.getBoundingClientRect();
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
    }

    createOrbs() {
      const width = this.canvas.width;
      const height = this.canvas.height;

      for (let i = 0; i < this.options.orbCount; i++) {
        this.orbs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 150 + 100,
          color: this.options.colors[i % this.options.colors.length],
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    updateOrbs(time) {
      const width = this.canvas.width;
      const height = this.canvas.height;

      this.orbs.forEach(orb => {
        // Smooth organic movement
        orb.x += orb.vx + Math.sin(time * this.options.speed + orb.phase) * 0.3;
        orb.y += orb.vy + Math.cos(time * this.options.speed + orb.phase * 1.3) * 0.3;

        // Bounce off edges
        if (orb.x < -orb.radius || orb.x > width + orb.radius) {
          orb.vx *= -1;
          orb.x = Math.max(-orb.radius, Math.min(width + orb.radius, orb.x));
        }
        if (orb.y < -orb.radius || orb.y > height + orb.radius) {
          orb.vy *= -1;
          orb.y = Math.max(-orb.radius, Math.min(height + orb.radius, orb.y));
        }

        // Pulse size slightly
        orb.currentRadius = orb.radius + Math.sin(time * 0.001 + orb.phase) * 20;
      });
    }

    drawOrbs() {
      this.orbs.forEach(orb => {
        const gradient = this.ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.currentRadius
        );

        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(orb.x, orb.y, orb.currentRadius, 0, Math.PI * 2);
        this.ctx.fill();
      });
    }

    animate() {
      const time = Date.now();

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.updateOrbs(time);
      this.drawOrbs();

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

  // Auto-initialize on elements with data-background="gradient"
  function initGradient() {
    const elements = document.querySelectorAll('[data-background="gradient"]');
    elements.forEach(el => {
      if (!el._gradientBackground) {
        el._gradientBackground = new GradientBackground(el);
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGradient);
  } else {
    initGradient();
  }

  // Export for manual use
  window.GradientBackground = GradientBackground;
})();
