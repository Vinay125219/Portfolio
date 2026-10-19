import { useState } from 'react';
import Ico from './Ico';

type Mode = 'grid' | 'domain' | 'tools' | 'impact';

const modes: { id: Mode; label: string; sub: string; icon: string }[] = [
  { id: 'grid', label: 'Grid View', sub: 'All projects at a glance', icon: 'grid' },
  { id: 'domain', label: 'By Domain', sub: 'Explore by application area', icon: 'compass' },
  { id: 'tools', label: 'By Tools', sub: 'Filter by technologies used', icon: 'settings' },
  { id: 'impact', label: 'By Impact', sub: 'See real-world impact & outcomes', icon: 'chart' },
];

/**
 * "Ways to Explore" panel: re-orders the server-rendered project cards
 * with CSS order based on the selected lens.
 */
export default function ProjectSortModes() {
  const [mode, setMode] = useState<Mode>('grid');

  function apply(next: Mode) {
    setMode(next);
    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-domains]'));
    cards.forEach((card) => {
      let key = card.dataset.order ?? '0';
      if (next === 'domain') key = (card.dataset.domains ?? '').split(',')[0] ?? '0';
      if (next === 'tools') key = (card.dataset.tools ?? '').split(',')[0] ?? '0';
      if (next === 'impact') key = card.dataset.impact ?? '';
      const rank =
        next === 'grid' ? Number(key) || 0 : key.toLowerCase().charCodeAt(0) * 100 + (key.toLowerCase().charCodeAt(1) ?? 0);
      card.style.order = String(rank);
    });
  }

  return (
    <div className="card p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
          <Ico name="compass" className="h-4.5 w-4.5" />
        </span>
        <div>
          <h2 className="font-display text-base font-extrabold text-navy-950">Ways to Explore</h2>
          <p className="text-xs text-navy-400">Find projects the way that interests you.</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {modes.map((m) => {
          const isActive = mode === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => apply(m.id)}
              aria-pressed={isActive}
              className={[
                'rounded-2xl border p-3 text-left transition',
                isActive
                  ? 'border-brand-400 bg-brand-50 shadow-[0_14px_28px_-20px_rgba(29,110,245,0.9)]'
                  : 'border-ice-100 bg-ice-50/70 hover:border-brand-200 hover:bg-white',
              ].join(' ')}
            >
              <Ico
                name={m.icon}
                className={`h-4.5 w-4.5 ${isActive ? 'text-brand-600' : 'text-navy-400'}`}
              />
              <span className="mt-2 block font-display text-[0.82rem] font-extrabold text-navy-950">
                {m.label}
              </span>
              <span className="mt-0.5 block text-[0.66rem] leading-snug text-navy-400">{m.sub}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
