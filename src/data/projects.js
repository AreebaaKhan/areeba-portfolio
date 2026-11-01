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

const PH = "/images/placeholder.svg";

export const categories = ["All", "AI & ML", "Backend", "Data & Analytics", "Embedded"];

export const projects = [
  {
    slug: "ai-banking-advisor",
    title: "AI Banking Advisor",
    subtitle: "Multi-agent assistant for Pakistani banking",
    categories: ["AI & ML", "Backend"],
    badge: "",
    featured: true,
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Groq / LLaMA 3.3-70B", "JWT", "SSE"],
    objective:
      "Designed for Pakistani banks, to give customers one conversational interface for questions about accounts, loans, cards, investments and digital banking, instead of searching across separate channels.",
    result:
      "A multi-agent system in which a triage agent routes each query to one of six specialist agents, with JWT authentication and real-time streamed responses.",
    github: "", // PASTE GITHUB LINK HERE
    driveId: "", // PASTE DRIVE VIDEO ID HERE
    cover: PH, // PASTE COVER PIC PATH HERE
    preview: "", // PASTE PREVIEW CLIP PATH HERE
    gallery: [PH, PH, PH], // PASTE PIC PATHS HERE
  },
  {
    slug: "qabil",
    title: "QABIL",
    subtitle: "AI skill assessment platform",
    categories: ["AI & ML", "Backend"],
    badge: "GenAI Hackathon by HEC & Pak-Angels",
    featured: true,
    stack: ["Python", "FastAPI", "LangGraph", "Streamlit"],
    objective:
      "Replace self-reported CV claims with a measurable assessment of a candidate's skills, communication and credibility.",
    result:
      "Architected a 7-agent LangGraph system for adaptive skill assessment, AI communication coaching and trust scoring. Built the FastAPI backend with JWT authentication and a Career Passport generator with LLM-powered job matching.",
    github: "", // PASTE GITHUB LINK HERE
    driveId: "", // PASTE DRIVE VIDEO ID HERE
    cover: PH, // PASTE COVER PIC PATH HERE
    preview: "", // PASTE PREVIEW CLIP PATH HERE
    gallery: [PH, PH, PH], // PASTE PIC PATHS HERE
  },
  {
    slug: "vulnerability-dashboard",
    title: "Vulnerability Assessment Dashboard",
    subtitle: "Self-updating Power BI report on Tenable scan data",
    categories: ["Data & Analytics"],
    badge: "",
    featured: true,
    stack: ["Power BI", "Power Query (M)", "DAX", "Tenable"],
    objective:
      "Replace manually built vulnerability reports with a self-updating tool, since a new scan arrives every month across Network, Windows, Linux and Application environments in inconsistent formats.",
    result:
      "A Power Query pipeline that standardizes and consolidates the monthly Tenable exports into a single data model. DAX measures track remediation rate, average vulnerability age and CVEs. The report has an Overview page and a Site Deep Dive page with drill-through and dynamic slicers.",
    github: "", // PASTE GITHUB LINK HERE (khali chhor sakti ho, button chhup jayega)
    driveId: "", // PASTE DRIVE VIDEO ID HERE
    cover: PH, // PASTE COVER PIC PATH HERE
    preview: "", // PASTE PREVIEW CLIP PATH HERE
    gallery: [PH, PH, PH], // PASTE PIC PATHS HERE
  },
  {
    slug: "weather-monitoring",
    title: "Smart Weather Monitoring System",
    subtitle: "Real-time sensing and alerts on ATmega328P",
    categories: ["Embedded"],
    badge: "",
    featured: false,
    stack: ["C", "ATmega328P", "I2C", "USART", "PWM", "Proteus 8"],
    objective:
      "Monitor temperature and humidity in real time and raise an alert when safety thresholds are crossed.",
    result:
      "An ATmega328P system that reads a DHT11 sensor with non-blocking polling, shows data on an I2C LCD, triggers a buzzer on threshold breach, adjusts LED brightness with PWM, and logs over USART at 9600 baud. Verified in Proteus 8, then built on a breadboard.",
    github: "", // PASTE GITHUB LINK HERE
    driveId: "", // PASTE DRIVE VIDEO ID HERE
    cover: PH, // PASTE COVER PIC PATH HERE
    preview: "", // PASTE PREVIEW CLIP PATH HERE
    gallery: [PH, PH, PH], // PASTE PIC PATHS HERE
  },
  {
    slug: "plant-disease-detection",
    title: "Plant Disease Detection",
    subtitle: "Deep learning classifier with a live webcam interface",
    categories: ["AI & ML"],
    badge: "",
    featured: false,
    stack: ["Python", "TensorFlow", "Keras", "ipywidgets"],
    objective:
      "Identify common leaf diseases from photographs and reject inputs that are not leaves.",
    result:
      "Trained nine deep learning models (custom CNN, MobileNetV2, ResNet50) on a self-collected dataset of 1,141 images across five classes. ResNet50 reached about 94% test accuracy. The interface supports live webcam capture, file upload, outlier detection and exportable reports.",
    github: "", // PASTE GITHUB LINK HERE
    driveId: "", // khali chhor do (is project ki video nahi hai)
    cover: PH, // PASTE COVER PIC PATH HERE
    preview: "",
    gallery: [PH, PH, PH], // PASTE PIC PATHS HERE
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
    github: "", // PASTE GITHUB LINK HERE
    driveId: "", // khali chhor do (is project ki video nahi hai)
    cover: PH, // PASTE COVER PIC PATH HERE
    preview: "",
    gallery: [PH, PH], // PASTE PIC PATHS HERE
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}