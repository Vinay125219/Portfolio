export type TechCategory =
  | "Mobile"
  | "Frontend"
  | "Desktop UI"
  | "Data & Analysis"
  | "Backend & Storage"
  | "AI-Assisted"
  | "Developer Tools";

export type TechItem = {
  name: string;
  category: TechCategory;
  description: string;
  iconName: string;
};

export const TECHNOLOGIES: TechItem[] = [
  { name: "Flutter", category: "Mobile", description: "Cross-platform app UI", iconName: "Smartphone" },
  { name: "Dart", category: "Mobile", description: "Flutter application logic", iconName: "Code" },
  { name: "Mobile UI", category: "Mobile", description: "Phone-first forms and dashboards", iconName: "Layers" },

  { name: "Astro", category: "Frontend", description: "Fast SPA/static portfolio shell", iconName: "Zap" },
  { name: "TypeScript", category: "Frontend", description: "Typed browser behavior", iconName: "FileCode" },
  { name: "HTML5 & CSS3", category: "Frontend", description: "Semantic responsive layouts", iconName: "Layout" },
  { name: "Tailwind CSS", category: "Frontend", description: "Utility-first styling system", iconName: "Palette" },

  { name: "Qt/QML", category: "Desktop UI", description: "Modern desktop UI migration", iconName: "Component" },
  { name: "C++", category: "Desktop UI", description: "Backend integration for Qt apps", iconName: "Cpu" },
  { name: "Tkinter", category: "Desktop UI", description: "Python desktop GUI tooling", iconName: "Monitor" },
  { name: "PyQt", category: "Desktop UI", description: "Desktop utilities and forms", iconName: "Layout" },

  { name: "Python", category: "Data & Analysis", description: "Automation and analysis scripts", iconName: "Terminal" },
  { name: "CSV Processing", category: "Data & Analysis", description: "Bus-monitoring workflows", iconName: "Table" },
  { name: "Matplotlib", category: "Data & Analysis", description: "Engineering plots and charts", iconName: "BarChart2" },
  { name: "MS Excel", category: "Data & Analysis", description: "Data review and reporting", iconName: "FileCode" },

  { name: "Supabase", category: "Backend & Storage", description: "Auth, database, storage prototypes", iconName: "Database" },
  { name: "PostgreSQL", category: "Backend & Storage", description: "Relational schema design", iconName: "Database" },
  { name: "SQLite", category: "Backend & Storage", description: "Local/offline storage", iconName: "HardDrive" },
  { name: "SQL", category: "Backend & Storage", description: "Queries and data modeling", iconName: "Table" },

  { name: "VS Code", category: "Developer Tools", description: "Primary IDE workspace", iconName: "Edit3" },
  { name: "Git / GitHub", category: "Developer Tools", description: "Version control and source hosting", iconName: "GitBranch" },
  { name: "Linux", category: "Developer Tools", description: "Daily engineering environment", iconName: "Monitor" },
  { name: "Android Studio", category: "Developer Tools", description: "Android and Flutter builds", iconName: "Smartphone" },
  { name: "Xcode", category: "Developer Tools", description: "iOS build and signing workflow", iconName: "Apple" },

  { name: "OpenAI Codex", category: "AI-Assisted", description: "Agentic coding workflows", iconName: "Sparkles" },
  { name: "Claude Code", category: "AI-Assisted", description: "AI-assisted implementation", iconName: "Sparkles" },
  { name: "Cursor", category: "AI-Assisted", description: "AI IDE workflows", iconName: "Edit3" },
  { name: "Prompt Engineering", category: "AI-Assisted", description: "Context and workflow design", iconName: "MessageSquare" }
];
