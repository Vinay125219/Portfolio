export const profile = {
  name: 'M Vinay Sagar',
  display: 'Vinay Sagar',
  tagline: 'Engineer • Builder • Problem Solver',
  role: 'Contract Engineer at DRDL, Hyderabad',
  intro:
    "I'm M Vinay Sagar, a B.Tech ECE graduate and a Contract Engineer at DRDL, Hyderabad. I build engineering applications, data visualization products and secure, user-centric tools that turn complex data into clear insights. I'm passionate about product-minded development, continuous learning and creating better experiences through technology.",
  aboutIntro:
    "I'm M Vinay Sagar, a B.Tech ECE graduate and a Contract Engineer at DRDL, Hyderabad. I enjoy building engineering tools, data visualizations and user-centric applications that turn complex data into clear insights. I'm passionate about product-minded development, continuous learning and creating technology with real-world impact.",
  summary:
    'Experienced professional seeking a challenging opportunity in an esteemed organization that values continuous individual development. Strong communication and convening abilities, proactive and goal-oriented with excellent time management and problem-solving skills. Recognized for reliability and adaptability, possesses a swift capacity to learn and apply new skills. Committed to leveraging these qualities to drive team success and contribute to organizational growth.',
  email: 'm.vinay.sagar21@gmail.com',
  phone: '+91 91105 21804',
  phoneHref: '+919110521804',
  location: 'Hyderabad, India',
  locationNote: 'Available for full-time opportunities and interesting projects.',
  linkedin: 'https://www.linkedin.com/in/vinay-sagar-659b551b4',
  resumePdf: '/resume/M_Vinay_Sagar_Resume.pdf',
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
] as const;

export const heroStats = [
  { icon: 'briefcase', value: '2+', label: 'Years Experience' },
  { icon: 'cube', value: '3+', label: 'Key Projects' },
  { icon: 'layers', value: '10+', label: 'Tools & Technologies' },
  { icon: 'target', value: '', label: 'Open to Opportunities', dot: true },
] as const;

export const heroCards = [
  {
    icon: 'chart',
    title: 'Engineering Visualization',
    body: 'Turning complex engineering data into clear insights.',
    href: '/projects/1553b-bus-monitoring',
    action: 'Explore visualization',
    motion: 'chart',
  },
  {
    icon: 'database',
    title: 'Data to Decisions',
    body: 'Analyse. Visualize. Create impact.',
    href: '/projects/post-flight-data-analysis',
    action: 'Explore data analysis',
    motion: 'signal',
  },
  {
    icon: 'monitor',
    title: 'UI/UX for Technical Systems',
    body: 'Better tools. Simpler workflows. Happier users.',
    href: '/projects/legacy-xml-to-qml',
    action: 'Explore the interface',
    motion: 'interface',
  },
  {
    icon: 'settings',
    title: 'Build • Analyse • Improve',
    body: 'Engineering tools. Data products. Better experiences.',
    href: '/skills',
    action: 'Explore my toolkit',
    motion: 'build',
  },
] as const;

export const exploreMore = [
  {
    icon: 'folder',
    title: 'Projects',
    body: 'Explore my key projects in engineering tools, data analysis and more.',
    href: '/projects',
    tech: ['python', 'qt', 'flutter', 'sql'],
  },
  {
    icon: 'layers',
    title: 'Skills',
    body: 'Technologies and tools I work with.',
    href: '/skills',
    tech: ['python', 'qt', 'flutter', 'sql'],
  },
  {
    icon: 'users',
    title: 'About Me',
    body: 'My experience, education and the story behind my work.',
    href: '/about',
  },
  {
    icon: 'send',
    title: 'Contact',
    body: "Let's connect for opportunities or collaborations.",
    href: '/contact',
  },
] as const;

export const contactCards = [
  { icon: 'mail', label: 'Email', value: 'm.vinay.sagar21@gmail.com', href: 'mailto:m.vinay.sagar21@gmail.com' },
  { icon: 'phone', label: 'Phone', value: '+91 91105 21804', href: 'tel:+919110521804' },
  { icon: 'pin', label: 'Location', value: 'Hyderabad, India' },
  { icon: 'linkedin', label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
] as const;

export const whyConnect = [
  {
    icon: 'briefcase',
    title: 'Opportunities',
    body: 'Discuss full-time roles, internships or contract opportunities.',
  },
  {
    icon: 'chart',
    title: 'Engineering Tools',
    body: 'Talk about data tools, visualization products, and technical systems.',
  },
  {
    icon: 'monitor',
    title: 'UI/UX Collaboration',
    body: 'Explore ideas for better user experiences and design solutions.',
  },
  {
    icon: 'bulb',
    title: 'Product Conversations',
    body: 'Share thoughts on product ideas, side projects or real-world impact.',
  },
] as const;

export const subjectOptions = [
  'Full-time opportunity',
  'Contract / freelance project',
  'Collaboration or side project',
  'Product / engineering conversation',
  'Something else',
] as const;

export const aboutValues = ['Engineering Tools', 'Data Analysis', 'Automation', 'User-Centric Design'] as const;

export const aboutStats = [
  { icon: 'cap', value: 'B.Tech ECE', label: 'Graduated' },
  { icon: 'briefcase', value: '3+', label: 'Professional Roles' },
  { icon: 'code', value: 'C++ • Python', sub: 'QML • Data', label: 'Core Stack' },
  { icon: 'target', value: 'Real-world', label: 'Impact Focus' },
] as const;

export const alwaysLearning = [
  'Better tools',
  'Cleaner data stories',
  'Smoother user experiences',
  'More real-world impact',
] as const;
