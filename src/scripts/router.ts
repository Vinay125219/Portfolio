import { initMotionObserver } from './motion';

export type TabId = 'work' | 'projects' | 'capabilities' | 'process' | 'journey' | 'about' | 'contact';

const VALID_TABS: TabId[] = ['work', 'projects', 'capabilities', 'process', 'journey', 'about', 'contact'];

export function initAppRouter() {
  if (typeof window === 'undefined') return;

  const navTriggers = document.querySelectorAll<HTMLElement>('[data-tab-target]');
  const tabPanels = document.querySelectorAll<HTMLElement>('[data-tab-panel]');
  const activeTabTitle = document.getElementById('activeTabTitle');
  const activeTabBadge = document.getElementById('activeTabBadge');

  if (tabPanels.length === 0) return;

  function setActiveTab(tabId: TabId, updateHash = true) {
    if (!VALID_TABS.includes(tabId)) return;

    // 1. Update Navigation Button Highlights
    navTriggers.forEach((trigger) => {
      const target = trigger.getAttribute('data-tab-target') as TabId;
      if (target === tabId) {
        trigger.classList.add('bg-accent', 'text-white', 'shadow-sm', 'font-bold');
        trigger.classList.remove('text-token-secondary', 'hover:bg-surface-elevated', 'hover:text-token-primary');
        trigger.setAttribute('aria-selected', 'true');
      } else {
        trigger.classList.remove('bg-accent', 'text-white', 'shadow-sm', 'font-bold');
        trigger.classList.add('text-token-secondary', 'hover:bg-surface-elevated', 'hover:text-token-primary');
        trigger.setAttribute('aria-selected', 'false');
      }
    });

    // 2. Morph Workspace Tab Panels
    tabPanels.forEach((panel) => {
      const panelId = panel.getAttribute('data-tab-panel') as TabId;
      if (panelId === tabId) {
        panel.style.display = 'block';
        panel.classList.add('is-visible');
        panel.setAttribute('aria-hidden', 'false');
      } else {
        panel.style.display = 'none';
        panel.classList.remove('is-visible');
        panel.setAttribute('aria-hidden', 'true');
      }
    });

    // 3. Update Workspace Header Title & Badge
    if (activeTabTitle) {
      activeTabTitle.textContent = getTabTitleLabel(tabId);
    }
    if (activeTabBadge) {
      activeTabBadge.textContent = `Tab 0${VALID_TABS.indexOf(tabId) + 1} of 07`;
    }

    // 4. Update Hash if requested
    if (updateHash && !window.location.hash.startsWith('#project-')) {
      history.pushState('', document.title, `#${tabId}`);
    }

    // 5. Scroll Workspace view back to top
    const workspaceContainer = document.getElementById('workspaceScrollContainer');
    if (workspaceContainer) {
      workspaceContainer.scrollTop = 0;
    }

    // Re-init motion triggers for revealed elements
    initMotionObserver();
  }

  function getTabTitleLabel(tabId: TabId): string {
    switch (tabId) {
      case 'work': return 'Featured Work & Simulator';
      case 'projects': return 'All Projects Explorer';
      case 'capabilities': return 'Capabilities & Architecture';
      case 'process': return 'Product & Engineering Process';
      case 'journey': return 'Experience Journey';
      case 'about': return 'About Vinay Sagar';
      case 'contact': return 'Get In Touch & Enquiries';
      default: return 'Featured Work';
    }
  }

  function parseCurrentHash(): TabId {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('project-')) {
      return 'projects'; // Modal handles opening project details
    }
    if (VALID_TABS.includes(hash as TabId)) {
      return hash as TabId;
    }
    return 'work'; // Default tab
  }

  // Bind click handlers to triggers
  navTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const target = trigger.getAttribute('data-tab-target') as TabId;
      if (target) {
        setActiveTab(target);

        // Close mobile drawer if open
        const mobileDrawer = document.getElementById('mobileDrawer');
        if (mobileDrawer && !mobileDrawer.classList.contains('hidden')) {
          mobileDrawer.classList.add('hidden');
          document.body.style.overflow = '';
        }
      }
    });
  });

  // Handle URL hash changes
  window.addEventListener('hashchange', () => {
    const active = parseCurrentHash();
    setActiveTab(active, false);
  });

  // Keyboard Shortcuts (Key 1 to 7 for quick tab jumping)
  window.addEventListener('keydown', (e) => {
    // Ignore if typing inside input / textarea
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT')) {
      return;
    }

    const keyNum = parseInt(e.key, 10);
    if (!isNaN(keyNum) && keyNum >= 1 && keyNum <= 7) {
      const targetTab = VALID_TABS[keyNum - 1];
      if (targetTab) {
        setActiveTab(targetTab);
      }
    }
  });

  // Initial Load Tab Activation
  const initialTab = parseCurrentHash();
  setActiveTab(initialTab, false);
}
