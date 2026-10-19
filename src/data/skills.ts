export type SkillCategory =
  | 'Development'
  | 'Data & Analysis'
  | 'UI/UX'
  | 'AI Tools'
  | 'Professional'
  | 'Platforms';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  blurb: string;
  icon: string;
  areas?: string[];
  related?: string[];
}

export const skillCategories: SkillCategory[] = [
  'Development',
  'Data & Analysis',
  'UI/UX',
  'AI Tools',
  'Professional',
  'Platforms',
];

export const skills: Skill[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Development',
    blurb: 'Scripting, automation, data analysis, ML.',
    icon: 'python',
    areas: [
      'Scripting & Automation',
      'Data Analysis',
      'API Integration',
      'Backend Development',
      'Visualization',
      'Machine Learning (Basics)',
    ],
    related: ['1553b-bus-monitoring', 'post-flight-data-analysis', 'internal-engineering-dashboard'],
  },
  {
    id: 'qt-cpp',
    name: 'Qt / C++',
    category: 'Development',
    blurb: 'Desktop applications and system tools.',
    icon: 'qt',
    areas: ['Desktop GUIs', 'Backend Integration', 'Performance-critical Code', 'Qt Framework'],
    related: ['legacy-xml-to-qml', 'securelink-defence-communication', '1553b-bus-monitoring'],
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'Development',
    blurb: 'Cross-platform mobile apps.',
    icon: 'flutter',
    areas: ['Cross-platform UI', 'Widget Composition', 'Rapid Prototyping'],
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Development',
    blurb: 'Data analysis and databases.',
    icon: 'database',
    areas: ['Querying', 'Data Cleaning', 'Reporting'],
    related: ['internal-engineering-dashboard'],
  },
  {
    id: 'git',
    name: 'Git / GitHub',
    category: 'Development',
    blurb: 'Version control and collaboration.',
    icon: 'git',
    areas: ['Branching & Reviews', 'Collaboration', 'Release Hygiene'],
  },
  {
    id: 'debugging',
    name: 'Debugging',
    category: 'Development',
    blurb: 'Troubleshooting and optimization.',
    icon: 'bug',
    areas: ['Root-cause Analysis', 'Profiling', 'Regression Hunting'],
  },
  {
    id: 'testing',
    name: 'Testing',
    category: 'Development',
    blurb: 'Unit, integration and system testing.',
    icon: 'flask',
    areas: ['Unit Tests', 'Integration Tests', 'System Validation'],
  },
  {
    id: 'sdlc',
    name: 'SDLC',
    category: 'Development',
    blurb: 'Agile development and project lifecycle.',
    icon: 'cycle',
    areas: ['Planning', 'Iteration', 'Delivery'],
  },
  {
    id: 'data-viz',
    name: 'Data Visualization',
    category: 'Data & Analysis',
    blurb: 'Turning raw data into clear, interactive insights.',
    icon: 'chart',
    areas: ['Interactive Charts', 'Parameter Plots', 'Dashboards'],
    related: ['post-flight-data-analysis', 'internal-engineering-dashboard', '1553b-bus-monitoring'],
  },
  {
    id: 'plotting',
    name: 'Plotting & Graphs',
    category: 'Data & Analysis',
    blurb: 'Engineering parameter plots and review graphs.',
    icon: 'activity',
    areas: ['Matplotlib', 'Time-series Plots', 'Correlation Views'],
    related: ['post-flight-data-analysis'],
  },
  {
    id: 'csv-analysis',
    name: 'CSV & Dataset Analysis',
    category: 'Data & Analysis',
    blurb: 'Cleaning and processing engineering datasets.',
    icon: 'table',
    areas: ['Data Cleaning', 'Batch Processing', 'Anomaly Detection'],
    related: ['post-flight-data-analysis', '1553b-bus-monitoring'],
  },
  {
    id: 'qml',
    name: 'QML & UI Modernization',
    category: 'UI/UX',
    blurb: 'Modern interfaces for technical systems.',
    icon: 'layers',
    areas: ['Component Design', 'Declarative UI', 'Legacy Migration'],
    related: ['legacy-xml-to-qml', 'securelink-defence-communication'],
  },
  {
    id: 'user-centric',
    name: 'User-Centric Design',
    category: 'UI/UX',
    blurb: 'Simpler workflows, happier users.',
    icon: 'palette',
    areas: ['Workflow Design', 'Information Hierarchy', 'Usability'],
  },
  {
    id: 'dashboards',
    name: 'Interface Dashboards',
    category: 'UI/UX',
    blurb: 'Operational views built for engineers.',
    icon: 'grid',
    areas: ['Live Status Views', 'Role-based Access', 'Low-latency UI'],
    related: ['internal-engineering-dashboard', 'securelink-defence-communication'],
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    category: 'AI Tools',
    blurb: 'Agentic coding workflows in the terminal.',
    icon: 'terminal',
    areas: ['Agentic Refactors', 'Repo-scale Edits', 'Review Loops'],
  },
  {
    id: 'codex',
    name: 'OpenAI Codex',
    category: 'AI Tools',
    blurb: 'AI-assisted development and code generation.',
    icon: 'sparkles',
    areas: ['Code Generation', 'Test Authoring', 'Prototyping'],
  },
  {
    id: 'cursor',
    name: 'Cursor / Kiro / Antigravity',
    category: 'AI Tools',
    blurb: 'AI-native editors I build with daily.',
    icon: 'wand',
    areas: ['Context-aware Editing', 'Multi-file Changes', 'Fast Iteration'],
  },
  {
    id: 'prompt-eng',
    name: 'Prompt & Context Engineering',
    category: 'AI Tools',
    blurb: 'Designing instructions and context for reliable AI output.',
    icon: 'brain',
    areas: ['Prompt Design', 'Context Windows', 'Human-in-the-loop Workflows'],
  },
  {
    id: 'communication',
    name: 'Communication',
    category: 'Professional',
    blurb: 'Clear written and verbal technical communication.',
    icon: 'message',
    areas: ['Technical Writing', 'Stakeholder Updates', 'Documentation'],
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    category: 'Professional',
    blurb: 'Breaking ambiguous problems into working solutions.',
    icon: 'puzzle',
    areas: ['Root-cause Thinking', 'Trade-off Analysis', 'Pragmatic Delivery'],
  },
  {
    id: 'collaboration',
    name: 'Collaboration & Adaptability',
    category: 'Professional',
    blurb: 'Working across teams, tools and changing requirements.',
    icon: 'users',
    areas: ['Cross-team Work', 'Fast Onboarding', 'Attention to Detail'],
  },
  {
    id: 'time-management',
    name: 'Time Management',
    category: 'Professional',
    blurb: 'Owning priorities in high-volume workflows.',
    icon: 'clock',
    areas: ['Prioritization', 'Reliable Delivery', 'Multi-tasking'],
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'Platforms',
    blurb: 'Primary environment for engineering tooling.',
    icon: 'tux',
    areas: ['Shell & Tooling', 'Build Systems', 'Remote Workflows'],
  },
  {
    id: 'windows',
    name: 'Windows',
    category: 'Platforms',
    blurb: 'Desktop deployment and internal tooling.',
    icon: 'windows',
    areas: ['Desktop Packaging', 'Qt on Windows', 'Enterprise Tooling'],
  },
  {
    id: 'macos',
    name: 'macOS',
    category: 'Platforms',
    blurb: 'Cross-platform validation and daily use.',
    icon: 'apple',
    areas: ['Cross-platform Checks', 'UI Validation'],
  },
];

export const skillHighlights = [
  { icon: 'sparkles', title: 'AI Tools', body: 'Prompt engineering and AI-powered development tools.', items: ['Claude Code', 'OpenAI Codex', 'Cursor'] },
  { icon: 'server', title: 'Platforms', body: 'Development across different operating systems.', items: ['Linux', 'Windows', 'macOS'] },
  { icon: 'users', title: 'Professional Skills', body: 'Essential skills for collaboration and real-world impact.', items: ['Communication', 'Adaptability', 'Problem Solving'] },
  { icon: 'file', title: 'Technical Documentation', body: 'Writing clear documentation and knowledge sharing.', items: ['Technical Docs', 'API Docs', 'User Guides'] },
];
