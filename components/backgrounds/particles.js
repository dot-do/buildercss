/**
 * Animated Particles Background
 * Pure vanilla JavaScript - no dependencies
 */
(function() {
  'use strict';

  class ParticlesBackground {
    constructor(container, options = {}) {
      this.container = container;
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.animationId = null;

      this.options = {
        count: options.count || 50,
        size: options.size || 2,
        speed: options.speed || 0.5,
        color: options.color || 'rgba(102, 126, 234, 0.6)',
        connectDistance: options.connectDistance || 150
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
      this.createParticles();

      window.addEventListener('resize', () => this.resize());
      this.animate();
    }

    resize() {
      const rect = this.container.getBoundingClientRect();
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
    }

    createParticles() {
      this.particles = [];
      for (let i = 0; i < this.options.count; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          vx: (Math.random() - 0.5) * this.options.speed,
          vy: (Math.random() - 0.5) * this.options.speed,
          radius: Math.random() * this.options.size + 1
        });
      }
    }

    updateParticles() {
      this.particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = this.canvas.width;
        if (particle.x > this.canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = this.canvas.height;
        if (particle.y > this.canvas.height) particle.y = 0;
      });
    }

    drawParticles() {
      this.particles.forEach(particle => {
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.options.color;
        this.ctx.fill();
      });
    }

    drawConnections() {
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.options.connectDistance) {
            const opacity = 1 - distance / this.options.connectDistance;
            this.ctx.beginPath();
            this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
            this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
            this.ctx.strokeStyle = `rgba(102, 126, 234, ${opacity * 0.3})`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
          }
        }
      }
    }

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.updateParticles();
      this.drawConnections();
      this.drawParticles();

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

  // Auto-initialize on elements with data-background="particles"
  function initParticles() {
    const elements = document.querySelectorAll('[data-background="particles"]');
    elements.forEach(el => {
      if (!el._particlesBackground) {
        const count = el.dataset.particleCount || 50;
        el._particlesBackground = new ParticlesBackground(el, { count: parseInt(count) });
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticles);
  } else {
    initParticles();
  }

  // Export for manual use
  window.ParticlesBackground = ParticlesBackground;
})();
