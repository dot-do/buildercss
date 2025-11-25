/**
 * Animated Waves Background
 * Pure vanilla JavaScript - no dependencies
 */
(function() {
  'use strict';

  class WavesBackground {
    constructor(container) {
      this.container = container;
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.waves = [];
      this.animationId = null;

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
      this.canvas.style.opacity = '0.4';

      this.container.appendChild(this.canvas);

      // Get primary color from CSS variable
      const primary = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary').trim();

      // Create waves
      this.waves = [
        { amplitude: 30, frequency: 0.015, speed: 0.001, offset: 0, opacity: 0.3 },
        { amplitude: 40, frequency: 0.012, speed: 0.0015, offset: Math.PI, opacity: 0.2 },
        { amplitude: 25, frequency: 0.018, speed: 0.0008, offset: Math.PI / 2, opacity: 0.25 }
      ];

      this.resize();
      window.addEventListener('resize', () => this.resize());
      this.animate();
    }

    resize() {
      const rect = this.container.getBoundingClientRect();
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
    }

    drawWave(wave, time) {
      const { amplitude, frequency, speed, offset, opacity } = wave;
      const width = this.canvas.width;
      const height = this.canvas.height;
      const centerY = height / 2;

      this.ctx.beginPath();
      this.ctx.moveTo(0, centerY);

      for (let x = 0; x <= width; x += 2) {
        const y = centerY + Math.sin(x * frequency + time * speed + offset) * amplitude;
        this.ctx.lineTo(x, y);
      }

      this.ctx.lineTo(width, height);
      this.ctx.lineTo(0, height);
      this.ctx.closePath();

      // Use primary color with opacity
      this.ctx.fillStyle = `rgba(102, 126, 234, ${opacity})`;
      this.ctx.fill();
    }

    animate() {
      const time = Date.now();

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.waves.forEach(wave => {
        this.drawWave(wave, time);
      });

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

  // Auto-initialize on elements with data-background="waves"
  function initWaves() {
    const elements = document.querySelectorAll('[data-background="waves"]');
    elements.forEach(el => {
      if (!el._wavesBackground) {
        el._wavesBackground = new WavesBackground(el);
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWaves);
  } else {
    initWaves();
  }

  // Export for manual use
  window.WavesBackground = WavesBackground;
})();
