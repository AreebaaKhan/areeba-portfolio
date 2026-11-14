// Har project ek { ... } block hai. Links aur pics sirf yahin badalni hain.
//
// 1) github   : apne repo ka poora link paste karo, jaise "https://github.com/AreebaaKhan/repo-name"
// 2) driveId  : Drive video ki link se sirf ID paste karo.
//               Link aisi hoti hai: https://drive.google.com/file/d/ABC123xyz/view?usp=sharing
//               Is mein ID "ABC123xyz" hai. Sirf wahi "" ke andar likhna.
// 3) cover    : card ki main picture. Pic ko public/images/projects/<folder>/ mein rakho,
//               phir yahan "/images/projects/<folder>/cover.png" jaisa path likho.
// 4) gallery  : detail page ki pics, isi tarah paths ki list.
// 5) preview  : hover wali 10 second ki clip. public/videos/previews/ mein rakho,
//               phir "/videos/previews/naam.mp4" likho. Na ho to "" rehne do.
//
// Jab tak kuch paste nahi karti, site placeholder dikhati hai, error nahi aata.

export const categories = [
  "All",
  "AI & ML",
  "Backend",
  "Data & Analytics",
  "Embedded",
];

export const projects = [

    {
    slug: "fpga-sbas-acquisition",
    title: "AI-Assisted FPGA SBAS Acquisition Engine",
    subtitle: "Final year project in collaboration with SUPARCO",
    categories: ["Embedded", "AI & ML"],
    badge: "In progress",
    role: "Final Year Project",
    featured: true,
    stack: ["FPGA", "Vivado", "MATLAB", "Arty Z7-20"],
    objective:
      "Design an FPGA-based acquisition engine for SBAS L1 C/A satellite signals with AI assistance, developed as an industry project in collaboration with SUPARCO.",
    result:
      "Work in progress. The PRN generator, carrier NCO, code NCO, multipliers and 1 ms accumulator are built and being verified in Vivado behavioral simulation, with supporting MATLAB simulation. Synthesis, AI integration and board testing on the Arty Z7-20 are the next stages.",
    github: "",
    linkedin: "",
    driveId: "",
    cover: "/images/projects/fpga-sbas-acquisition/2.png",
    preview: "",
    gallery: [
      "/images/projects/fpga-sbas-acquisition/1.png",
      "/images/projects/fpga-sbas-acquisition/2.png",
      "/images/projects/fpga-sbas-acquisition/3.jpeg",
      "/images/projects/fpga-sbas-acquisition/4.jpeg",
      "/images/projects/fpga-sbas-acquisition/5.jpeg",
    ],
  },

  {
    slug: "ai-banking-advisor",
    title: "AI Banking Advisor",
    subtitle: "Multi-agent assistant for Pakistani banking",
    categories: ["AI & ML", "Backend"],
    badge: "",
    featured: true,
    stack: [
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Groq",
      "Gemini",
      "JWT",
      "SSE",
    ],
    objective:
      "Designed for Pakistani banks, to give customers one conversational interface for questions about accounts, loans, cards, investments and digital banking, instead of searching across separate channels.",
    result:
      "A multi-agent system in which a triage agent routes each query to one of six specialist agents, with JWT authentication, real-time streamed responses and an automatic fallback from Groq to Gemini if the primary model fails.",
    github: "https://github.com/AreebaaKhan/banking-ai-agent.git",
    linkedin: "",
    driveId: "1R2qVfSm4rEOQgtYy_Lq6-Ta6vnYC8ppX",
    cover: "/images/projects/ai-banking-advisor/cover.jpg",
    preview: "",
    gallery: [
      "/images/projects/ai-banking-advisor/1.jpg",
      "/images/projects/ai-banking-advisor/2.jpg",
      "/images/projects/ai-banking-advisor/3.jpg",
      "/images/projects/ai-banking-advisor/4.jpg",
      "/images/projects/ai-banking-advisor/5.jpg",
      "/images/projects/ai-banking-advisor/6.jpg",
      "/images/projects/ai-banking-advisor/7.jpg",
      "/images/projects/ai-banking-advisor/8.jpg",
      "/images/projects/ai-banking-advisor/9.jpg",
    ],
  },
  {
    slug: "qabil",
    title: "QABIL",
    subtitle: "AI skill assessment platform",
    categories: ["AI & ML", "Backend"],
    badge: "GenAI Hackathon by HEC x PakAngels",
    role: "Core Developer",
    featured: true,
    stack: ["Python", "FastAPI", "LangGraph", "Streamlit"],
    objective:
      "Replace self-reported CV claims with a measurable assessment of a candidate's skills, communication and credibility.",
    result:
      "Architected a 7-agent LangGraph system for adaptive skill assessment, AI communication coaching and trust scoring. Built the FastAPI backend with JWT authentication and a Career Passport generator with LLM-powered job matching.",
    github: "https://github.com/AreebaaKhan/GenAi-Hackathon.git",
    linkedin: "",
    driveId: "1yid8XKT6U01H6XFcJqzZLqq_AwNIt_fI",
    cover: "/images/projects/qabil/2.jpg",
    preview: "",
    gallery: [
      "/images/projects/qabil/1.jpg",
      "/images/projects/qabil/2.jpg",
      "/images/projects/qabil/3.jpg",
      "/images/projects/qabil/4.jpg",
      "/images/projects/qabil/5.jpg",
      "/images/projects/qabil/6.jpg",
      "/images/projects/qabil/7.jpg",
      "/images/projects/qabil/9.jpg",
      "/images/projects/qabil/10.jpg",
    ],
  },
  {
    slug: "vulnerability-dashboard",
    title: "Vulnerability Assessment Dashboard",
    subtitle: "Self-updating Power BI report on Tenable scan data",
    categories: ["Data & Analytics"],
    badge: "",
    featured: false,
    stack: [
      "Power BI",
      "Power Query (M)",
      "DAX",
      "Tenable Exports",
    ],
    objective:
      "Replace manually built vulnerability reports with a self-updating tool, since a new scan arrives every month across Network, Windows, Linux and Application environments in inconsistent formats.",
    result:
      "A Power Query pipeline that standardizes and consolidates the monthly Tenable exports into a single data model. DAX measures track remediation rate, average vulnerability age and CVEs. The report has an Overview page and a Site Deep Dive page with drill-through and dynamic slicers.",
    github:
      "https://github.com/AreebaaKhan/automated-vulnerabilities-assessment-dashboard.git",
    linkedin: "https://lnkd.in/p/dseDzKpD",
    driveId: "1ONhkrcJbUBfctqJ2fhbuB3RuE7gPg9h9",
    cover: "/images/projects/vulnerability-dashboard/cover.jpg",
    preview: "",
    gallery: [
      "/images/projects/vulnerability-dashboard/SS2.png",
      "/images/projects/vulnerability-dashboard/SS3.png",
      "/images/projects/vulnerability-dashboard/SS4.png",
      "/images/projects/vulnerability-dashboard/SS5.png",
    ],
  },
  {
    slug: "weather-monitoring",
    title: "Smart Weather Monitoring System",
    subtitle: "Real-time sensing and alerts on ATmega328P",
    categories: ["Embedded"],
    badge: "",
    featured: false,
    stack: [
      "C",
      "ATmega328P",
      "I2C",
      "USART",
      "PWM",
      "Proteus 8",
    ],
    objective:
      "Monitor temperature and humidity in real time and raise an alert when safety thresholds are crossed.",
    result:
      "An ATmega328P system that reads a DHT11 sensor with non-blocking polling, shows data on an I2C LCD, triggers a buzzer on threshold breach, adjusts LED brightness with PWM, and logs over USART at 9600 baud. Verified in Proteus 8, then built on a breadboard.",
    github: "",
    linkedin: "https://lnkd.in/p/dTsSP_dh",
    driveId: "1822r8qrmLQvPxyDpJE12DvBBIWTTfK04",
    cover: "/images/projects/weather-monitoring/ss1.png",
    preview: "",
    gallery: [
      "/images/projects/weather-monitoring/ss1.png",
      "/images/projects/weather-monitoring/ss2.png",
      "/images/projects/weather-monitoring/ss3.png",
      "/images/projects/weather-monitoring/ss4.png",
    ],
  },
  {
    slug: "plant-disease-detection",
    title: "Plant Disease Detection",
    subtitle: "Deep learning classifier with a live webcam interface",
    categories: ["AI & ML"],
    badge: "",
    featured: false,
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "ipywidgets",
    ],
    objective:
      "Identify common leaf diseases from photographs and reject inputs that are not leaves.",
    result:
      "Trained nine deep learning models (custom CNN, MobileNetV2, ResNet50) on a self-collected dataset of 1,141 images across five classes, four leaf conditions plus a non-leaf class. The best model, MobileNetV2 with a 256-unit head, reached about 90% test accuracy. The interface supports live webcam capture, file upload, outlier detection and exportable reports.",
    github: "https://github.com/AreebaaKhan/Leaf-Disease-Detection.git",
    linkedin: "https://lnkd.in/p/dMqi4vSd",
    driveId: "1GtSVArovGe0PMpKQuAi8DoYju7rNtuMd",
    cover: "/images/projects/plant-disease/i.png",
    preview: "",
    gallery: [
      "/images/projects/plant-disease/i.png",
      "/images/projects/plant-disease/j.png",
      "/images/projects/plant-disease/k.png",
      "/images/projects/plant-disease/l.png",
      "/images/projects/plant-disease/m.png",
      "/images/projects/plant-disease/n.png",
      "/images/projects/plant-disease/o.png",
      "/images/projects/plant-disease/a.png",
      "/images/projects/plant-disease/b.png",
      "/images/projects/plant-disease/c.png",
      "/images/projects/plant-disease/d.png",
      "/images/projects/plant-disease/e.png",    
      "/images/projects/plant-disease/f.png",
      "/images/projects/plant-disease/g.png",
      "/images/projects/plant-disease/h.png",
    ],
  },
  {
    slug: "n-queens-solver",
    title: "AI Dual N-Queens Solver",
    subtitle: "A* Search versus CSP Backtracking",
    categories: ["AI & ML"],
    badge: "",
    featured: false,
    stack: ["Python", "A* Search", "CSP"],
    objective:
      "Compare how two different AI approaches solve the same constraint problem.",
    result:
      "Implemented A* Search and CSP Backtracking with a step-by-step visualisation tool that compares the performance of both.",
    github: "https://github.com/AreebaaKhan/Dual-N-Queens-Solver-.git",
    linkedin: "",
    driveId: "1tH28lQMli21om3Sv9uMsZWYaZAApUsBU",
    cover: "/images/projects/n-queens/a.png",
    preview: "",
    gallery: [
      "/images/projects/n-queens/a.png",
      "/images/projects/n-queens/b.png",
      "/images/projects/n-queens/c.png",
      "/images/projects/n-queens/d.png",
      "/images/projects/n-queens/e.png",    
      "/images/projects/n-queens/f.png",
    ],
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
