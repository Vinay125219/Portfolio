export type ThemeMode = 'light' | 'dark' | 'system';

export function getStoredTheme(): ThemeMode {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('theme-preference') as ThemeMode;
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
  }
  return 'light';
}

export function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  let effectiveTheme: 'light' | 'dark' = 'dark';

  if (mode === 'system') {
    effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } else {
    effectiveTheme = mode;
  }

  root.setAttribute('data-theme', effectiveTheme);
  localStorage.setItem('theme-preference', mode);

  // Dispatch custom event for UI updates if needed
  window.dispatchEvent(new CustomEvent('theme-changed', { detail: { mode, effectiveTheme } }));
}

export function initTheme() {
  const initialMode = getStoredTheme();
  applyTheme(initialMode);

  // Watch for system OS theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getStoredTheme() === 'system') {
      applyTheme('system');
    }
  });
}
