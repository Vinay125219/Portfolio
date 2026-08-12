import { PROJECTS, type Project } from '../data/projects';

export function initProjectDialog() {
  const dialog = document.getElementById('projectDialog') as HTMLDialogElement | null;
  if (!dialog) return;

  const closeBtn = document.getElementById('closeProjectDialog');
  const dialogContent = document.getElementById('projectDialogContent');
  const backdrop = document.getElementById('projectDialogBackdrop');

  let previousFocusedElement: HTMLElement | null = null;

  function openModalForProject(projectId: string) {
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project || !dialogContent || !dialog) return;

    previousFocusedElement = document.activeElement as HTMLElement;

    // Render case study details inside dialog
    dialogContent.innerHTML = renderProjectCaseStudy(project);

    // Show dialog
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', 'true');
    }

    document.body.classList.add('dialog-open');
    window.location.hash = `project-${project.id}`;

    // Focus close button or first interactive element
    setTimeout(() => {
      const firstFocusable = dialogContent.querySelector<HTMLElement>('button, a, input, [tabindex="0"]');
      if (firstFocusable) firstFocusable.focus();
    }, 50);

    // Bind inside navigation buttons (Prev / Next project)
    bindInternalModalNavigation();
  }

  function closeModal() {
    if (!dialog) return;

    if (dialog.hasAttribute('open')) {
      if (typeof dialog.close === 'function') {
        dialog.close();
      } else {
        dialog.removeAttribute('open');
      }
    }

    document.body.classList.remove('dialog-open');

    // Clean up hash if hash is a project hash
    if (window.location.hash.startsWith('#project-')) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }

    if (previousFocusedElement) {
      previousFocusedElement.focus();
    }
  }

  function bindInternalModalNavigation() {
    if (!dialogContent) return;
    const prevBtn = dialogContent.querySelector<HTMLButtonElement>('[data-prev-project]');
    const nextBtn = dialogContent.querySelector<HTMLButtonElement>('[data-next-project]');

    prevBtn?.addEventListener('click', () => {
      const prevId = prevBtn.getAttribute('data-prev-project');
      if (prevId) openModalForProject(prevId);
    });

    nextBtn?.addEventListener('click', () => {
      const nextId = nextBtn.getAttribute('data-next-project');
      if (nextId) openModalForProject(nextId);
    });
  }

  // Trigger buttons in project grid
  document.querySelectorAll<HTMLElement>('[data-open-project]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-open-project');
      if (projectId) openModalForProject(projectId);
    });
  });

  // Close handlers
  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);

  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Check URL Hash on page load (e.g. #project-schooldesk)
  const initialHash = window.location.hash;
  if (initialHash.startsWith('#project-')) {
    const targetId = initialHash.replace('#project-', '');
    openModalForProject(targetId);
  }

  // Handle hash change events
  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash;
    if (newHash.startsWith('#project-')) {
      const targetId = newHash.replace('#project-', '');
      openModalForProject(targetId);
    }
  });
}

function renderProjectCaseStudy(project: Project): string {
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const archList = project.architecture || [];

  return `
    <div class="space-y-8 max-w-4xl mx-auto pb-6">
      <!-- Header -->
      <div class="space-y-4 border-b border-token pb-6">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20">
              ${project.status}
            </span>
            <span class="text-xs text-token-muted font-medium">${project.year}</span>
          </div>
          <div class="flex items-center gap-3">
            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
                 class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-surface-elevated text-token-primary hover:bg-surface-hover transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub Repository
              </a>
            ` : ''}
            ${project.liveUrl ? `
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" 
                 class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-colors shadow-sm">
                Live App Demo ↗
              </a>
            ` : ''}
          </div>
        </div>

        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-token-primary tracking-tight">
          ${project.name}
        </h2>
        <p class="text-base sm:text-lg text-token-secondary leading-relaxed">
          ${project.longDescription || project.shortDescription}
        </p>

        <!-- Metadata Bar -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-surface-elevated border border-token">
          <div>
            <span class="block text-xs text-token-muted uppercase tracking-wider font-semibold">Platforms</span>
            <span class="text-sm font-medium text-token-primary">${project.platform.join(' · ')}</span>
          </div>
          <div>
            <span class="block text-xs text-token-muted uppercase tracking-wider font-semibold">Role</span>
            <span class="text-sm font-medium text-token-primary">${project.role.join(' · ')}</span>
          </div>
          <div>
            <span class="block text-xs text-token-muted uppercase tracking-wider font-semibold">Categories</span>
            <span class="text-sm font-medium text-token-primary">${project.category.join(' · ')}</span>
          </div>
          <div>
            <span class="block text-xs text-token-muted uppercase tracking-wider font-semibold">Tech Stack</span>
            <span class="text-sm font-medium text-token-primary">${project.technologies.slice(0, 3).join(' · ')}</span>
          </div>
        </div>
      </div>

      <!-- Main Cover Media -->
      <div class="rounded-2xl overflow-hidden border border-token shadow-md bg-surface">
        <img src="${project.coverImage}" alt="${project.name} interface screenshot" class="w-full h-auto max-h-[480px] object-cover" />
      </div>

      <!-- Problem, Solution, Impact Grid -->
      ${(project.problem || project.solution) ? `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          ${project.problem ? `
            <div class="p-5 rounded-xl bg-surface-elevated border border-token space-y-2">
              <div class="flex items-center gap-2 text-warning font-semibold text-sm">
                <span>!</span> The Problem
              </div>
              <p class="text-xs sm:text-sm text-token-secondary leading-relaxed">${project.problem}</p>
            </div>
          ` : ''}
          ${project.solution ? `
            <div class="p-5 rounded-xl bg-surface-elevated border border-token space-y-2">
              <div class="flex items-center gap-2 text-accent font-semibold text-sm">
                <span>*</span> My Solution
              </div>
              <p class="text-xs sm:text-sm text-token-secondary leading-relaxed">${project.solution}</p>
            </div>
          ` : ''}
          ${project.impact ? `
            <div class="p-5 rounded-xl bg-surface-elevated border border-token space-y-2">
              <div class="flex items-center gap-2 text-success font-semibold text-sm">
                <span>+</span> Verified Result & Impact
              </div>
              <p class="text-xs sm:text-sm text-token-secondary leading-relaxed">${project.impact}</p>
            </div>
          ` : ''}
        </div>
      ` : ''}

      <!-- Responsibilities Checklist -->
      ${project.responsibilities && project.responsibilities.length > 0 ? `
        <div class="space-y-3 p-6 rounded-xl bg-surface border border-token">
          <h3 class="text-lg font-bold text-token-primary">My Key Contributions</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-token-secondary">
            ${project.responsibilities.map(resp => `
              <li class="flex items-start gap-2">
                <span class="text-accent mt-0.5 font-bold">+</span>
                <span>${resp}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- Visual Architecture Pipeline -->
      ${archList.length > 0 ? `
        <div class="space-y-4 p-6 rounded-xl bg-surface-elevated border border-token">
          <h3 class="text-lg font-bold text-token-primary">System Architecture Pipeline</h3>
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 overflow-x-auto py-2">
            ${archList.map((step, idx) => `
              <div class="flex-1 p-3 rounded-lg bg-surface border border-token text-center text-xs font-semibold text-token-primary shadow-sm">
                ${step}
              </div>
              ${idx < archList.length - 1 ? `
                <span class="text-token-muted font-bold text-center self-center hidden sm:block">-&gt;</span>
                <span class="text-token-muted font-bold text-center self-center sm:hidden">↓</span>
              ` : ''}
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Technical Challenges Accordion -->
      ${project.challenges && project.challenges.length > 0 ? `
        <div class="space-y-3">
          <h3 class="text-lg font-bold text-token-primary">Key Engineering Challenges Solved</h3>
          <div class="space-y-2">
            ${project.challenges.map(ch => `
              <details class="group p-4 rounded-xl bg-surface border border-token transition-colors">
                <summary class="flex items-center justify-between font-semibold text-sm text-token-primary cursor-pointer list-none select-none">
                  <span>${ch.title}</span>
                  <span class="text-token-muted group-open:rotate-180 transition-transform">v</span>
                </summary>
                <p class="mt-3 text-xs sm:text-sm text-token-secondary leading-relaxed pt-2 border-t border-token/50">
                  ${ch.detail}
                </p>
              </details>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Additional Gallery Media -->
      ${project.gallery && project.gallery.length > 0 ? `
        <div class="space-y-3">
          <h3 class="text-lg font-bold text-token-primary">Product Gallery</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${project.gallery.map(img => `
              <div class="space-y-2">
                <div class="rounded-xl overflow-hidden border border-token shadow-sm bg-surface">
                  <img src="${img.url}" alt="${img.caption}" class="w-full h-48 object-cover" />
                </div>
                <p class="text-xs text-token-muted italic text-center">${img.caption}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Footer Navigation Buttons -->
      <div class="flex items-center justify-between pt-6 border-t border-token">
        <button data-prev-project="${prevProject.id}" class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-surface-elevated text-token-primary hover:bg-surface-hover transition-colors">
          ← Previous (${prevProject.name})
        </button>
        <button data-next-project="${nextProject.id}" class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-surface-elevated text-token-primary hover:bg-surface-hover transition-colors">
          Next (${nextProject.name}) -&gt;
        </button>
      </div>
    </div>
  `;
}
