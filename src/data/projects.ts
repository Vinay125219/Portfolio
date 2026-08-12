export type ProjectStatus = "Published" | "Completed" | "In Development" | "Prototype" | "Private";

export type Project = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  category: string[];
  platform: string[];
  technologies: string[];
  role: string[];
  year: string;
  status: ProjectStatus;
  featured: boolean;
  coverImage: string;
  gallery?: { url: string; caption: string }[];
  liveUrl?: string;
  storeUrl?: string;
  githubUrl?: string;
  problem?: string;
  solution?: string;
  impact?: string;
  responsibilities?: string[];
  challenges?: { title: string; detail: string }[];
  architecture?: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "drdl-data-analysis",
    name: "DRDL Data Analysis Application",
    shortDescription: "Desktop tool for bus-monitoring and post-flight parameter plotting.",
    longDescription: "A GUI-based analysis application built around CSV bus-monitoring data. The tool helps engineers load, clean, inspect, and plot selected parameters for post-flight review and technical reporting.",
    category: ["Desktop", "Data Analysis", "Dev Tools"],
    platform: ["Desktop"],
    technologies: ["Python", "Tkinter", "Qt/QML", "C++", "Matplotlib"],
    role: ["Developer", "UI Migration", "Data Analysis"],
    year: "2022 - Present",
    status: "Private",
    featured: true,
    coverImage: "/assets/images/Data_Analysis_Application.png",
    gallery: [
      { url: "/assets/images/Data_Analysis_Application.png", caption: "Parameter plotting workspace for engineering analysis" }
    ],
    problem: "Post-flight bus-monitoring data needed a faster way to inspect parameters and prepare analysis outputs.",
    solution: "Built and improved desktop GUI workflows for CSV ingestion, parameter selection, plotting, and report-ready visual review.",
    impact: "Reduced manual plotting effort and gave engineering users a clearer interface for anomaly observation and data review.",
    responsibilities: [
      "Built GUI screens for post-flight data analysis",
      "Migrated legacy XML UI layouts into QML-based interfaces",
      "Integrated QML front-end components with existing C++ backend logic",
      "Cleaned and visualized bus-monitoring data for reports"
    ],
    architecture: [
      "Desktop GUI",
      "CSV Data Processing",
      "Parameter Plotting",
      "Technical Review Output"
    ],
    challenges: [
      {
        title: "Legacy UI Modernization",
        detail: "Converted older XML-based interface patterns into structured QML components while keeping compatibility with C++ backend workflows."
      }
    ]
  },
  {
    id: "focustoday",
    name: "FocusToday",
    shortDescription: "Cross-platform news and media application for Android and iOS.",
    longDescription: "FocusToday is a Flutter news and media application focused on delivering and organizing content through a responsive mobile experience across Android and iOS.",
    category: ["Mobile", "Media"],
    platform: ["Android", "iOS"],
    technologies: ["Flutter", "Dart", "Firebase", "Android", "iOS"],
    role: ["Flutter Developer", "Mobile UI Developer"],
    year: "2024",
    status: "Completed",
    featured: true,
    coverImage: "/assets/images/project-placeholder-mobile.svg",
    problem: "News and media content needs a fast mobile interface that keeps browsing, reading, and discovery simple.",
    solution: "Built a Flutter-based cross-platform app structure with responsive screens for organizing and consuming media content.",
    impact: "Created a production-oriented mobile experience that can reach Android and iOS users from one Flutter codebase.",
    responsibilities: [
      "Developed cross-platform Flutter screens",
      "Structured content browsing and detail flows",
      "Integrated Firebase-backed app capabilities",
      "Tested responsive behavior across mobile form factors"
    ],
    architecture: [
      "Flutter Mobile Client",
      "Firebase Services",
      "Content Feed UI",
      "Android and iOS Delivery"
    ],
    challenges: [
      {
        title: "Cross-platform consistency",
        detail: "Balanced Android and iOS interface expectations while keeping shared Flutter components reusable."
      }
    ]
  },
  {
    id: "schooldesk",
    name: "School Management Application",
    shortDescription: "Role-based school app for principals/admins, teachers, and parents.",
    longDescription: "A cross-platform school management application built with Flutter, Riverpod, GoRouter, and Supabase. It supports role-specific workflows for principals/admins, teachers, and parents across attendance, fees, academic calendar, and timetable management.",
    category: ["SaaS", "Mobile", "Business Tools"],
    platform: ["Android", "iOS"],
    technologies: ["Flutter", "Riverpod", "GoRouter", "Supabase", "PostgreSQL", "Dart"],
    role: ["Flutter Developer", "Full-Stack Developer", "Product Designer"],
    year: "2024",
    status: "Prototype",
    featured: true,
    coverImage: "/assets/images/project-placeholder-mobile.svg",
    gallery: [
      { url: "/assets/images/project-placeholder-mobile.svg", caption: "Placeholder for school-management mobile screens" }
    ],
    githubUrl: "https://github.com/Vinay125219",
    problem: "School workflows often split attendance, fees, calendars, and timetable updates across separate manual channels.",
    solution: "Implemented role-based application flows with Flutter, Riverpod, GoRouter, and Supabase-backed data models.",
    impact: "Created a clear implementation base for daily school administration and parent/teacher usage.",
    responsibilities: [
      "Built role-based flows for principals/admins, teachers, and parents",
      "Implemented attendance, fees, academic calendar, and timetable workflows",
      "Used Riverpod and GoRouter for state and navigation structure",
      "Planned Supabase-backed auth and database flows"
    ],
    architecture: [
      "Flutter Cross-Platform Client",
      "Riverpod State Management",
      "GoRouter Navigation",
      "Supabase Auth and PostgreSQL"
    ],
    challenges: [
      {
        title: "Multi-role product structure",
        detail: "Separated admin, teacher, and parent flows so each role sees only the screens and actions needed for their workflow."
      },
      {
        title: "Operational Clarity",
        detail: "Organized attendance, fees, timetables, and announcements into a simpler information architecture for daily school usage."
      }
    ]
  },
  {
    id: "notiva",
    name: "Notiva",
    shortDescription: "AI voice-notes app for fast capture, transcription, and organization.",
    longDescription: "Notiva is an AI-assisted voice-notes application centered on fast information capture and organization. It supports AI transcription, automatic organization, location-aware note workflows, export/sharing, dark mode, and privacy-focused usage flows.",
    category: ["Mobile", "Productivity", "AI-Assisted"],
    platform: ["Android"],
    technologies: ["Flutter", "Dart", "AI Transcription", "Location Workflows", "Dark Mode"],
    role: ["Flutter Developer", "Product Designer"],
    year: "2024",
    status: "Prototype",
    featured: true,
    coverImage: "/assets/images/project-placeholder-mobile.svg",
    gallery: [
      { url: "/assets/images/project-placeholder-mobile.svg", caption: "Placeholder for Notiva AI voice-notes screens" }
    ],
    githubUrl: "https://github.com/Vinay125219",
    problem: "Important spoken ideas are easy to lose when note capture requires typing, tagging, and cleanup in the moment.",
    solution: "Built a voice-first note workflow with AI transcription, automatic organization, sharing, dark mode, and privacy-focused flows.",
    impact: "Produced a focused Android productivity app that makes quick capture and later retrieval easier.",
    responsibilities: [
      "Designed voice-note capture and review flows",
      "Integrated AI-assisted transcription and automatic organization concepts",
      "Built dark-mode mobile UI patterns",
      "Implemented export and sharing workflows"
    ],
    architecture: [
      "Flutter Android Client",
      "Voice Capture Workflow",
      "AI Transcription Layer",
      "Export and Sharing Flow"
    ],
    challenges: [
      {
        title: "Fast capture without clutter",
        detail: "Kept the interface focused on recording, transcribing, organizing, and finding notes without overloading the core workflow."
      }
    ]
  },
  {
    id: "spendscanr",
    name: "SpendScanner",
    shortDescription: "Privacy-focused personal finance app for manual expense tracking.",
    longDescription: "SpendScanner is a privacy-focused personal finance application for Android and iOS. It supports manual expense recording, spending organization, and personal financial tracking without relying on SMS or bank sync.",
    category: ["Mobile", "Business Tools"],
    platform: ["Android", "iOS"],
    technologies: ["Flutter", "Dart", "Charts", "Local Storage", "Mobile UI"],
    role: ["Flutter Developer", "UI Designer"],
    year: "2024",
    status: "Completed",
    featured: true,
    coverImage: "/assets/images/Income_tracker_1.png",
    gallery: [
      { url: "/assets/images/Income_tracker_1.png", caption: "Visual Income & Expense Analytics Dashboard" },
      { url: "/assets/images/Income_tracker_2.png", caption: "Detailed Cash Flow Ledger & Categorization" }
    ],
    githubUrl: "https://github.com/vinaysagar15/income-tracker",
    problem: "Small daily expenses become hard to review when they live in memory, notes, or spreadsheets, and many users do not want bank/SMS sync.",
    solution: "Built a compact manual tracking flow with categorized entries and readable spending summaries.",
    impact: "Made personal cash-flow review easier while keeping the product privacy-focused.",
    responsibilities: [
      "Designed mobile personal-finance dashboards",
      "Implemented manual transaction entry flows",
      "Created chart-based spending summaries"
    ],
    architecture: [
      "Flutter Mobile Interface",
      "Manual Expense Entry",
      "Local Transaction Store",
      "Spending Summary Views"
    ],
    challenges: [
      {
        title: "Fast Manual Entry",
        detail: "Kept the add-entry workflow compact so users can record income and expenses without moving through heavy forms."
      }
    ]
  },
  {
    id: "code-compare-tool",
    name: "Code Compare Tool",
    shortDescription: "Side-by-side code and configuration diff visualizer for desktop use.",
    longDescription: "A desktop comparison utility for reviewing code or configuration changes side by side with a focused visual interface.",
    category: ["Desktop", "Dev Tools"],
    platform: ["Desktop"],
    technologies: ["C++", "Qt", "Diff Workflow"],
    role: ["Developer", "UI Specialist"],
    year: "2024",
    status: "Completed",
    featured: true,
    coverImage: "/assets/images/Code-Compare_SS.png",
    gallery: [
      { url: "/assets/images/Code-Compare_SS.png", caption: "Side-by-side comparison workspace" }
    ],
    githubUrl: "https://github.com/vinaysagar15/code-compare-tool",
    problem: "Reviewing file changes can be slow when comparison tools are heavy or visually noisy.",
    solution: "Built a focused desktop UI for comparing two files and scanning differences quickly.",
    impact: "Improved local review workflows with a lightweight dedicated tool.",
    responsibilities: [
      "Designed the comparison workspace",
      "Built desktop UI controls in Qt",
      "Structured file loading and diff review flows"
    ],
    architecture: [
      "Qt Desktop Interface",
      "File Loading Workflow",
      "Difference Review Pane"
    ],
    challenges: [
      {
        title: "Readable Difference Scanning",
        detail: "Balanced side-by-side density with enough visual contrast to make changed lines easier to inspect."
      }
    ]
  },
  {
    id: "checklist-generator",
    name: "Checklist Generator App",
    shortDescription: "Desktop utility for automated engineering checklist generation & PDF export.",
    longDescription: "A specialized desktop productivity tool designed for rapid creation, management, and printing of operational and technical checklists. Supports custom category templates, progress tracking, and clean formatting for print output.",
    category: ["Desktop", "Business Tools"],
    platform: ["Desktop"],
    technologies: ["Python", "PyQt", "SQLite"],
    role: ["Sole Developer"],
    year: "2023",
    status: "Completed",
    featured: false,
    coverImage: "/assets/images/Checklist_generator_App.png",
    githubUrl: "https://github.com/vinaysagar15/checklist-generator",
    problem: "Engineering teams required standardized, error-free physical checklist templates before commencing system diagnostics.",
    solution: "Built a lightweight desktop app that lets operators select preset procedure modules and compile instant printable PDF checklists.",
    impact: "Standardized team diagnostic routines and reduced preparation setup time.",
    responsibilities: ["GUI layout design", "SQLite template storage engine", "ReportLab PDF rendering engine"],
    architecture: ["PyQt Desktop UI", "ReportLab PDF Engine", "SQLite Template DB"],
    challenges: [
      {
        title: "Dynamic PDF Layout Formatting",
        detail: "Designed dynamic page flow algorithms in ReportLab to automatically adjust font sizes and table row heights based on item count."
      }
    ]
  },
  {
    id: "image-to-ppt",
    name: "Image to PPT Converter",
    shortDescription: "Automated desktop presentation generator converting batch images into formatted slide decks.",
    longDescription: "Desktop automation software that transforms batches of diagram screenshots, charts, or slides into cleanly structured Microsoft PowerPoint (.pptx) presentations with automated sizing and slide positioning.",
    category: ["Desktop", "Business Tools"],
    platform: ["Desktop"],
    technologies: ["Python", "PyQt", "python-pptx"],
    role: ["Developer"],
    year: "2023",
    status: "Completed",
    featured: false,
    coverImage: "/assets/images/Image_to_PPT_App.png",
    githubUrl: "https://github.com/vinaysagar15/image-to-ppt",
    problem: "Preparing presentation slides from dozens of raw test chart images required hours of manual copy-paste formatting.",
    solution: "Developed a desktop tool that parses image directories, auto-detects aspect ratios, and generates slide presentations instantly.",
    impact: "Saved hours of repetitive manual presentation creation for engineering review meetings.",
    responsibilities: ["GUI builder", "python-pptx automation script", "Batch file processing engine"],
    architecture: ["PyQt Interface", "Python-pptx Generator Engine", "FileSystem Batch Watcher"],
    challenges: [
      {
        title: "Aspect Ratio Preservation",
        detail: "Wrote image boundary math logic to automatically center images on 16:9 and 4:3 slide canvas formats without stretching."
      }
    ]
  },
  {
    id: "package-installer-downloader",
    name: "Offline Python Package Installer & Downloader",
    shortDescription: "Desktop utility for managing & deploying Python packages in air-gapped network environments.",
    longDescription: "A developer tool built for secure enterprise networks. It downloads Python wheels and dependency trees on connected machines and installs them seamlessly on isolated air-gapped systems without internet access.",
    category: ["Desktop", "Dev Tools"],
    platform: ["Desktop"],
    technologies: ["Python", "PyQt", "Pip API"],
    role: ["Sole Developer"],
    year: "2023",
    status: "Completed",
    featured: false,
    coverImage: "/assets/images/Offline_Python_Package_Installer.png",
    gallery: [
      { url: "/assets/images/Offline_Python_Package_Installer.png", caption: "Offline Package Installer GUI" },
      { url: "/assets/images/Online_Python_Packages_Downloader.png", caption: "Online Dependency Bundle Downloader" }
    ],
    githubUrl: "https://github.com/Vinay125219",
    problem: "Developing on air-gapped enterprise systems made installing complex Python dependencies extremely cumbersome.",
    solution: "Created a dual GUI suite that builds offline recursive wheel archives on connected nodes and installs them offline cleanly.",
    impact: "Streamlined environment setup for air-gapped development environments.",
    responsibilities: ["Pip dependency resolution integration", "GUI layout design", "Zip archive bundler"],
    architecture: ["PyQt Client Interface", "Pip CLI & Wheel Resolver Module", "Archive Extraction Engine"],
    challenges: [
      {
        title: "Transitive Dependency Traversal",
        detail: "Leveraged pip wheel resolution to guarantee all sub-dependencies and platform-specific binaries are downloaded in a single bundle."
      }
    ]
  },
  {
    id: "multi-vendor-ecommerce-rbac",
    name: "Multi-Vendor E-Commerce RBAC Platform",
    shortDescription: "Full-stack commerce platform with Admin, Vendor, and Customer roles.",
    longDescription: "A full-stack web application with distinct Admin, Vendor, and Customer roles. The platform includes authentication, product management, order management, and role-based access-control workflows.",
    category: ["SaaS", "Web", "Business Tools"],
    platform: ["Web"],
    technologies: ["NextJS", "Supabase", "PostgreSQL", "RBAC", "Authentication"],
    role: ["Full-Stack Developer"],
    year: "2024",
    status: "Completed",
    featured: false,
    coverImage: "/assets/images/project-placeholder-web.svg",
    gallery: [
      { url: "/assets/images/project-placeholder-web.svg", caption: "Placeholder for multi-vendor e-commerce dashboard" }
    ],
    githubUrl: "https://github.com/Vinay125219",
    problem: "Multi-vendor commerce systems need different permissions and workflows for admins, vendors, and customers.",
    solution: "Built role-aware screens and access-control flows around authentication, products, and order operations.",
    impact: "Created a working foundation for a controlled multi-role commerce platform.",
    responsibilities: [
      "Implemented Admin, Vendor, and Customer role flows",
      "Built authentication and RBAC behavior",
      "Created product and order-management screens",
      "Structured Supabase/PostgreSQL-backed data flows"
    ],
    architecture: [
      "NextJS Web Frontend",
      "Supabase Auth",
      "PostgreSQL Data Model",
      "Role-Based Access Control"
    ],
    challenges: [
      {
        title: "Permission clarity",
        detail: "Kept role-specific product and order workflows separate so each user type only sees allowed actions."
      }
    ]
  },
  {
    id: "gate-materials-register",
    name: "Vendor & Godown Management Application",
    shortDescription: "Inventory and business workflow app for vendors, material records, and stock movement.",
    longDescription: "A business workflow application for vendor records, inventory, material records, stock movement, and godown-management operations with role-based access-control concepts.",
    category: ["Business Tools", "Mobile"],
    platform: ["Mobile"],
    technologies: ["Flutter", "Firebase", "RBAC", "Inventory Workflows"],
    role: ["Flutter Developer"],
    year: "2024",
    status: "Completed",
    featured: false,
    coverImage: "/assets/images/project-placeholder-mobile.svg",
    githubUrl: "https://github.com/Vinay125219",
    problem: "Vendor records, inventory movement, and godown material logs become difficult to audit when handled manually.",
    solution: "Built mobile workflows for vendor data, inventory records, material tracking, and godown operations.",
    impact: "Improved structure and traceability for day-to-day inventory and business operations.",
    responsibilities: [
      "Built vendor-record and inventory screens",
      "Implemented material-record and stock-movement flows",
      "Structured role-based workflow access",
      "Integrated Firebase-backed app behavior"
    ],
    architecture: ["Flutter Mobile App", "Firebase Backend", "Inventory Records", "RBAC Workflows"],
    challenges: [
      {
        title: "Operational traceability",
        detail: "Organized vendor, material, and godown data so movement history can be reviewed without searching through disconnected records."
      }
    ]
  },
  {
    id: "focusflow",
    name: "FocusFlow",
    shortDescription: "Offline-first productivity app with guided focus sessions and reflection.",
    longDescription: "FocusFlow is a productivity application for Android with timer-driven focus sessions, distraction capture, task breakdown, session tracking, reflection, and offline-first workflows.",
    category: ["Mobile", "Productivity"],
    platform: ["Android"],
    technologies: ["Flutter", "Dart", "Offline-First", "Productivity Workflows"],
    role: ["Flutter Developer", "Product Designer"],
    year: "2024",
    status: "Prototype",
    featured: false,
    coverImage: "/assets/images/project-placeholder-mobile.svg",
    gallery: [
      { url: "/assets/images/project-placeholder-mobile.svg", caption: "Placeholder for FocusFlow productivity screens" }
    ],
    githubUrl: "https://github.com/Vinay125219",
    problem: "Focus sessions often fail when tasks are vague and distractions are captured outside the workflow.",
    solution: "Designed guided focus sessions with timers, task breakdown, distraction capture, session history, and reflection.",
    impact: "Created a focused offline-first productivity flow for planning and reviewing deep-work sessions.",
    responsibilities: [
      "Designed timer-driven focus workflows",
      "Built task breakdown and distraction-capture screens",
      "Created session tracking and reflection flows",
      "Kept the experience usable offline"
    ],
    architecture: [
      "Flutter Android Client",
      "Offline Session Store",
      "Timer Workflow",
      "Reflection History"
    ],
    challenges: [
      {
        title: "Low-friction focus flow",
        detail: "Kept the session setup and reflection steps lightweight so the app supports focus instead of becoming another task to manage."
      }
    ]
  }
];
