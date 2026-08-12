export function initProjectFilters() {
  const filterBtns = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-filter-btn]'));
  const projectCards = Array.from(document.querySelectorAll<HTMLElement>('[data-project-card]'));

  if (filterBtns.length === 0 || projectCards.length === 0) return;

  function filterProjects(category: string) {
    const activeCategory = category.toLowerCase().trim();

    filterBtns.forEach((btn) => {
      const btnCategory = (btn.getAttribute('data-filter-btn') || '').toLowerCase().trim();
      if (btnCategory === activeCategory) {
        btn.classList.add('bg-accent', 'text-white', 'shadow-sm');
        btn.classList.remove('bg-surface-elevated', 'text-token-secondary', 'hover:text-token-primary');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('bg-accent', 'text-white', 'shadow-sm');
        btn.classList.add('bg-surface-elevated', 'text-token-secondary', 'hover:text-token-primary');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    projectCards.forEach((card) => {
      const categoriesRaw = card.getAttribute('data-categories') || '';
      const platformsRaw = card.getAttribute('data-platforms') || '';
      const categories = categoriesRaw.toLowerCase().split(',').map(s => s.trim());
      const platforms = platformsRaw.toLowerCase().split(',').map(s => s.trim());

      if (activeCategory === 'all' || categories.includes(activeCategory) || platforms.includes(activeCategory)) {
        card.style.display = '';
        card.setAttribute('aria-hidden', 'false');
      } else {
        card.style.display = 'none';
        card.setAttribute('aria-hidden', 'true');
      }
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter-btn') || 'All';
      filterProjects(category);
    });
  });
}
