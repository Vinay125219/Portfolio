import { animate, inView, stagger } from 'motion';

export function initMotionObserver() {
  if (typeof window === 'undefined') return;

  // 1. Scroll Reveal Observer
  const revealElements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
  if (revealElements.length > 0) {
    revealElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(26px) scale(0.98)';
    });

    inView('.reveal-on-scroll', (element) => {
      animate(
        element,
        { opacity: 1, transform: 'translateY(0px) scale(1)' },
        { duration: 0.58, easing: [0.16, 1, 0.3, 1] }
      );
    }, { margin: '0px 0px -12% 0px' });

    animate('.skill-tile', { opacity: [0, 1], y: [18, 0] }, { delay: stagger(0.045), duration: 0.42, easing: [0.16, 1, 0.3, 1] });
  } else if ('IntersectionObserver' in window && revealElements.length > 0) {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.02,
      rootMargin: '320px 0px 320px 0px'
    });

    revealElements.forEach((el, index) => {
      el.style.setProperty('--motion-delay', `${Math.min(index * 45, 360)}ms`);
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight * 1.8) {
        el.classList.add('is-visible');
      } else {
        observer.observe(el);
      }
    });
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  initMagneticElements();
  initActiveNavigation();

  // 2. Number Ticker Observer
  const tickerElements = document.querySelectorAll<HTMLElement>('[data-ticker-target]');
  if ('IntersectionObserver' in window && tickerElements.length > 0) {
    const tickerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const targetNum = parseInt(el.getAttribute('data-ticker-target') || '0', 10);
          const suffix = el.getAttribute('data-ticker-suffix') || '';
          const prefix = el.getAttribute('data-ticker-prefix') || '';
          
          animateNumberTicker(el, targetNum, prefix, suffix);
          tickerObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    tickerElements.forEach(el => tickerObserver.observe(el));
  }
}

function initMagneticElements() {
  const elements = document.querySelectorAll<HTMLElement>('.primary-cta, .secondary-cta, .primary-mini, .compact-project-card, .portfolio-project-card, .tech-cell, .skill-tile');
  elements.forEach((el) => {
    if (el.dataset.motionBound === 'true') return;
    el.dataset.motionBound = 'true';

    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      el.style.setProperty('--motion-x', `${x * 0.04}px`);
      el.style.setProperty('--motion-y', `${y * 0.04}px`);
    });

    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--motion-x', '0px');
      el.style.setProperty('--motion-y', '0px');
    });
  });
}

function initActiveNavigation() {
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.desktop-links a[href^="#"]'));
  const sections = navLinks
    .map((link) => document.querySelector<HTMLElement>(link.getAttribute('href') || ''))
    .filter(Boolean) as HTMLElement[];

  if (!('IntersectionObserver' in window) || navLinks.length === 0 || sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
    });
  }, { threshold: [0.22, 0.4, 0.65] });

  sections.forEach((section) => observer.observe(section));
}

function animateNumberTicker(el: HTMLElement, target: number, prefix: string, suffix: string) {
  let current = 0;
  const duration = 1200; // ms
  const steps = 30;
  const increment = target / steps;
  const stepTime = duration / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = `${prefix}${Math.round(current).toLocaleString()}${suffix}`;
  }, stepTime);
}
