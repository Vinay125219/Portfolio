import { useEffect, useState } from 'react';
import Ico from './Ico';

export interface FilterItem {
  id: string;
  label: string;
  icon: string;
  count: number;
}

/**
 * Category chips that filter the server-rendered project grid by
 * toggling visibility of [data-domains]/[data-tools] cards.
 */
export default function ProjectFilters({ items }: { items: FilterItem[] }) {
  const [active, setActive] = useState('all');

  useEffect(() => {
    document.querySelectorAll<HTMLElement>('[data-domains]').forEach((card) => {
      const domains = (card.dataset.domains ?? '').split(',').filter(Boolean);
      const tools = (card.dataset.tools ?? '').split(',').filter(Boolean);
      const show = active === 'all' || domains.includes(active) || tools.includes(active);
      card.classList.toggle('hidden', !show);
    });
    document.querySelectorAll<HTMLElement>('[data-grid-count]').forEach((el) => {
      el.textContent = String(document.querySelectorAll('[data-domains]:not(.hidden)').length);
    });
  }, [active]);

  return (
    <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter projects">
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            aria-pressed={isActive}
            className={[
              'inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.82rem] font-bold transition',
              isActive
                ? 'bg-gradient-to-r from-brand-600 to-aqua-500 text-white shadow-[0_14px_28px_-14px_rgba(29,110,245,0.8)]'
                : 'border border-ice-200 bg-white text-navy-700 hover:border-brand-300 hover:text-brand-600',
            ].join(' ')}
          >
            <Ico name={item.icon} className="h-4 w-4" />
            {item.label} ({item.count})
          </button>
        );
      })}
      <span className="sr-only" aria-live="polite">
        Showing <span data-grid-count>{items[0]?.count ?? 0}</span> projects
      </span>
    </div>
  );
}
