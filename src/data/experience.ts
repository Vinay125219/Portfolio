export type ExperienceItem = {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  keyAchievements: string[];
  techUsed: string[];
};

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    period: "Sep 2024 — Present",
    role: "Contract Engineer",
    organization: "DRDL",
    location: "Hyderabad, India",
    summary: "Working on internal software interfaces, Qt/QML migration, C++ front-end integration, and engineering data analysis workflows.",
    keyAchievements: [
      "Migrated legacy XML-based user interfaces into modern QML layouts",
      "Integrated QML components with existing C++ backend modules",
      "Processed, cleaned, and visualized bus-monitoring data for engineering analysis"
    ],
    techUsed: ["Qt/QML", "C++", "Python", "Data Visualization", "Technical Reports"]
  },
  {
    period: "Jun 2024 — Sep 2024",
    role: "CS CAP Associate",
    organization: "Amazon",
    location: "Hyderabad, India",
    summary: "Investigated complex fraud and risk cases, evaluated evidence, documented findings, and made timely decisions within defined service-quality expectations.",
    keyAchievements: [
      "Investigated complex fraud and risk cases with strong attention to evidence quality",
      "Documented findings and escalated high-risk cases within defined operating procedures"
    ],
    techUsed: ["Data Analysis", "Risk Analysis", "Workflow Auditing"]
  },
  {
    period: "May 2022 — Jun 2022",
    role: "Intern",
    organization: "DRDL",
    location: "Hyderabad, India",
    summary: "Built a GUI-based post-flight analysis application for CSV bus-monitoring data under DRDL scientist guidance.",
    keyAchievements: [
      "Designed and developed a Python/Tkinter desktop GUI",
      "Enabled parameter plotting for CSV-based bus-monitoring analysis",
      "Supported technical analysis preparation for engineering review"
    ],
    techUsed: ["Python", "Tkinter", "CSV Processing", "Plotting"]
  },
  {
    period: "Jul 2019 — Jul 2023",
    role: "Bachelor of Technology in ECE",
    organization: "Brilliant Engineering College (JNTUH)",
    location: "Hyderabad, India",
    summary: "Graduated in Electronics and Communication Engineering with a GPA of 7.2.",
    keyAchievements: [
      "Specialized in electronics, communication systems, and core computer science fundamentals",
      "Maintained strong academic performance while building independent software tools"
    ],
    techUsed: ["C++", "Python", "Data Structures", "Signal Processing", "Electronics"]
  }
];
