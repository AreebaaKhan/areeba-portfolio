// Newest first. Har entry ek { ... } block hai.
// bullets: sirf text likho. Agar kisi bullet se project page ka link chahiye to
// { text: "...", href: "/projects/slug", linkLabel: "View project" } likho.
// type: chhota tag jo card pe dikhta hai. Na chahiye to "" rehne do.

export const experience = [
  {
    role: "IT Operations Intern",
    org: "State Bank of Pakistan (SBP)",
    location: "Karachi",
    type: "",
    dates: "29 June to 7 August 2026",
    skills: ["Power BI", "Power Query (M)", "DAX", "Tenable", "FastAPI", "Next.js", "PostgreSQL", "Groq", "Gemini", "JWT", "SSE", "SIEM", "IDS/IPS", "NetBackup"],
    bullets: [
      {
        text: "Built an automated Power BI vulnerability assessment dashboard on Tenable scan data, using a Power Query M pipeline and DAX measures.",
        href: "/projects/vulnerability-dashboard",
        linkLabel: "View project",
      },
      {
        text: "Designed and built AI Banking Advisor, a multi-agent system using FastAPI, Next.js, PostgreSQL, Groq with a Gemini fallback, JWT and SSE.",
        href: "/projects/ai-banking-advisor",
        linkLabel: "View project",
      },
      {
        text: "Completed structured rotations across 8 departments: Data Centre Operations, Networking, Change and Configuration Management (CCMC), SOC, System Administration, Backup and Disaster Recovery, Application Development and Database. Gained exposure to SIEM, IDS/IPS, virtualization, NetBackup cyber-recovery, ERP and data warehousing.",
      },
    ],
  },
  {
    role: "Technology Consulting",
    org: "Deloitte Australia (via Forage)",
    location: "",
    type: "Virtual Experience Program",
    dates: "June 2026 (1 month)",
    skills: ["Technology Consulting", "Cloud Computing", "Risk Assessment", "Project Planning", "Requirements Gathering"],
    bullets: [
      {
        text: "Assessed cloud adoption strategies, covering benefits, risks, feasibility and readiness, and ran cloud suitability evaluations to prioritise applications for a cloud proof of concept.",
      },
      {
        text: "Wrote consulting-style project plans covering scope, requirements, resources, timeline, risk and budget, and performed technology market scans for cloud-based financial accounting systems.",
      },
    ],
  },
  {
    role: "Backend Developer",
    org: "Certura",
    location: "",
    type: "Virtual Intern",
    dates: "July 2025 (1 month)",
    skills: ["Python", "Flask", "REST APIs", "JWT", "SQLAlchemy", "SQLite", "Postman"],
    bullets: [
      {
        text: "Built REST APIs in Flask for task management, authentication and secure data handling.",
      },
      {
        text: "Implemented JWT authentication with role-based access control, used SQLite with the SQLAlchemy ORM, and ran end-to-end testing with Postman.",
      },
    ],
  },
  {
    role: "Frontend Developer",
    org: "DimensionD Inc.",
    location: "",
    type: "",
    dates: "March 2025 to April 2025",
    skills: ["React.js", "Tailwind CSS", "Responsive Design"],
    bullets: [
      {
        text: "Built a responsive UI for a professional car club web app with React.js and Tailwind CSS, including login, event listings, blog pages and a member dashboard, with consistent behaviour across devices.",
      },
    ],
  },
];