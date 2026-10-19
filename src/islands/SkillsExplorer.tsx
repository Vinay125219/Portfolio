import { useMemo, useState } from 'react';
import Ico from './Ico';
import { skills, skillCategories, type Skill, type SkillCategory } from '../data/skills';

export interface ProjectMeta {
  title: string;
  tags: string[];
  image: string;
}

interface Props {
  projects: Record<string, ProjectMeta>;
}

/**
 * Skills explorer: category tabs, clickable skill cards, a radial node map
 * and a detail panel with key areas and related projects.
 */
export default function SkillsExplorer({ projects }: Props) {
  const [category, setCategory] = useState<SkillCategory>('Development');
  const [selectedId, setSelectedId] = useState('python');

  const list = useMemo(() => skills.filter((s) => s.category === category), [category]);
  const selected: Skill = skills.find((s) => s.id === selectedId) ?? list[0];

  function pickCategory(c: SkillCategory) {
    setCategory(c);
    const first = skills.find((s) => s.category === c);
    if (first) setSelectedId(first.id);
  }

  const nodes = list.slice(0, 9);
  const n = nodes.length;
  const pos = (i: number) => {
    const a = ((-90 + (i * 360) / n) * Math.PI) / 180;
    return { x: 50 + 37 * Math.cos(a), y: 50 + 37 * Math.sin(a) };
  };

  const related = (selected.related ?? []).filter((id) => projects[id]);

  const detail = selected.areas?.length
    ? `${selected.blurb} I work with it across ${selected.areas.slice(0, 3).join(', ').toLowerCase()}.`
    : selected.blurb;

  return (
    <div className="card p-5 sm:p-6">
      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Skill categories">
        {skillCategories.map((c) => {
          const on = c === category;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => pickCategory(c)}
              className={[
                'inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.82rem] font-bold transition',
                on
                  ? 'bg-gradient-to-r from-brand-600 to-aqua-500 text-white shadow-[0_14px_28px_-14px_rgba(29,110,245,0.8)]'
                  : 'border border-ice-200 bg-white text-navy-700 hover:border-brand-300 hover:text-brand-600',
              ].join(' ')}
            >
              <Ico
                name={
                  c === 'Development'
                    ? 'code'
                    : c === 'Data & Analysis'
                      ? 'chart'
                      : c === 'UI/UX'
                        ? 'palette'
                        : c === 'AI Tools'
                          ? 'sparkles'
                          : c === 'Professional'
                            ? 'users'
                            : 'server'
                }
                className="h-4 w-4"
              />
              {c}
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
        {/* Left: skill cards */}
        <div className="grid grid-cols-[minmax(0,1fr)] gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" role="list">
          {list.map((s) => {
            const on = s.id === selectedId;
            return (
              <button
                key={s.id}
                type="button"
                role="listitem"
                onClick={() => setSelectedId(s.id)}
                aria-pressed={on}
                className={[
                  'flex items-center gap-3 rounded-2xl border p-3 text-left transition',
                  on
                    ? 'border-brand-400 bg-brand-50 shadow-[0_14px_30px_-22px_rgba(29,110,245,0.9)]'
                    : 'border-ice-100 bg-white hover:border-brand-200 hover:bg-ice-50',
                ].join(' ')}
              >
                <span
                  className={[
                    'grid h-10 w-10 shrink-0 place-items-center rounded-xl',
                    on ? 'bg-gradient-to-br from-brand-500 to-aqua-400 text-white' : 'bg-ice-100 text-brand-600',
                  ].join(' ')}
                >
                  <Ico name={s.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[0.86rem] font-extrabold text-navy-950">{s.name}</span>
                  <span className="block truncate text-[0.7rem] text-navy-400">{s.blurb}</span>
                </span>
                <Ico name="chevron-right" className="ml-auto h-4 w-4 shrink-0 text-brand-400" />
              </button>
            );
          })}
        </div>

        {/* Center: radial map */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[26rem] md:block">
          <div className="absolute inset-[6%] rounded-full border border-dashed border-brand-200" aria-hidden="true" />
          <div className="absolute inset-[16%] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,233,255,0.9),rgba(255,255,255,0))] blur-[2px]" aria-hidden="true" />

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
            {nodes.map((s, i) => {
              const p = pos(i);
              return (
                <line
                  key={s.id}
                  x1="50"
                  y1="50"
                  x2={p.x}
                  y2={p.y}
                  stroke={s.id === selectedId ? '#1d6ef5' : '#c9e0ff'}
                  strokeWidth={s.id === selectedId ? 2 : 1}
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>

          {/* Hub */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-aqua-400 font-display text-2xl font-extrabold text-white shadow-[0_16px_34px_-14px_rgba(29,110,245,0.9)]">
              V
            </span>
            <p className="mt-1.5 font-display text-[0.78rem] font-extrabold text-navy-950">Skills Explorer</p>
            <p className="text-[0.6rem] text-navy-400">Click any node to explore</p>
          </div>

          {/* Nodes */}
          {nodes.map((s, i) => {
            const p = pos(i);
            const on = s.id === selectedId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedId(s.id)}
                aria-pressed={on}
                aria-label={`Explore skill: ${s.name}`}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <span
                  className={[
                    'mx-auto grid h-12 w-12 place-items-center rounded-full border-2 bg-white transition',
                    on
                      ? 'border-brand-500 text-brand-600 shadow-[0_0_0_6px_rgba(29,110,245,0.15),0_14px_26px_-14px_rgba(29,110,245,0.9)] scale-110'
                      : 'border-brand-200 text-navy-600 shadow-[0_10px_22px_-14px_rgba(13,60,140,0.6)] hover:border-brand-400',
                  ].join(' ')}
                >
                  <Ico name={s.icon} className="h-5 w-5" />
                </span>
                <span
                  className={[
                    'mt-1 block whitespace-nowrap rounded-full bg-white/90 px-2 py-0.5 text-[0.62rem] font-bold shadow-sm',
                    on ? 'text-brand-600' : 'text-navy-500',
                  ].join(' ')}
                >
                  {s.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: detail panel */}
        <div key={selected.id} className="rise-in card !rounded-3xl p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-aqua-400 text-white">
                <Ico name={selected.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-extrabold text-navy-950">{selected.name}</h3>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  <span className="chip !py-0.5 !text-[0.64rem]">{selected.category}</span>
                  <span className="chip !bg-brand-50 !py-0.5 !text-[0.64rem] !text-brand-600">Core Skill</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-navy-500">{detail}</p>

          <div className="mt-4 flex flex-wrap gap-2.5">
            <a href="/projects" className="btn-primary !px-4 !py-2.5 text-xs">
              <Ico name="folder" className="h-4 w-4" />
              View Related Projects
            </a>
            <a
              href={related.length ? '/projects' : '/about#experience'}
              className="btn-ghost !px-4 !py-2.5 text-xs"
            >
              Learn More
              <Ico name="external" className="h-3.5 w-3.5 text-brand-600" />
            </a>
          </div>

          {selected.areas && (
            <>
              <p className="mt-5 font-display text-[0.8rem] font-extrabold text-navy-950">Key Areas I Work With</p>
              <ul className="mt-2 grid grid-cols-[minmax(0,1fr)] gap-1.5 sm:grid-cols-2">
                {selected.areas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-[0.76rem] text-navy-500">
                    <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                      <Ico name="check" className="h-2.5 w-2.5" />
                    </span>
                    {area}
                  </li>
                ))}
              </ul>
            </>
          )}

          {related.length > 0 && (
            <>
              <div className="mt-5 flex items-center justify-between">
                <p className="font-display text-[0.8rem] font-extrabold text-navy-950">Related Projects</p>
                <a href="/projects" className="text-[0.7rem] font-bold text-brand-600 hover:underline">
                  View All →
                </a>
              </div>
              <ul className="mt-2 space-y-2">
                {related.slice(0, 2).map((id) => {
                  const p = projects[id];
                  return (
                    <li key={id}>
                      <a
                        href={`/projects/${id}`}
                        className="flex items-center gap-3 rounded-2xl border border-ice-100 bg-ice-50/70 p-2.5 transition hover:border-brand-300 hover:bg-white"
                      >
                        <img
                          src={p.image}
                          alt=""
                          width="84"
                          height="34"
                          loading="lazy"
                          className="h-9 w-20 shrink-0 rounded-lg object-cover"
                        />
                        <span className="min-w-0">
                          <span className="block truncate font-display text-[0.78rem] font-extrabold text-navy-950">
                            {p.title}
                          </span>
                          <span className="block truncate text-[0.64rem] text-navy-400">{p.tags.join(' • ')}</span>
                        </span>
                        <Ico name="chevron-right" className="ml-auto h-4 w-4 shrink-0 text-brand-400" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
