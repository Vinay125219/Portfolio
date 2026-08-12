export function initScrollSpy() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));

  if (sections.length === 0 || navLinks.length === 0) return;

  function updateActiveLink() {
    const scrollPosition = window.scrollY + 120; // header offset

    let currentSectionId = '';

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.offsetTop <= scrollPosition) {
        currentSectionId = section.getAttribute('id') || '';
        break;
      }
    }

    if (!currentSectionId && sections.length > 0) {
      currentSectionId = sections[0].getAttribute('id') || '';
    }

    navLinks.forEach((link) => {
      const href = link.getAttribute('href') || '';
      const targetId = href.replace('#', '');

      if (targetId === currentSectionId) {
        link.classList.add('text-accent', 'font-semibold');
        link.classList.remove('text-token-secondary');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('text-accent', 'font-semibold');
        link.classList.add('text-token-secondary');
        link.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}
