// Pics: public/images/achievements/suparco/ ya skkillo/ me rakho, phir yahan path likho,
// jaise "/images/achievements/suparco/1.jpg". Jab tak paste nahi karti, placeholder dikhta hai.
// certificate: Drive link. Khali ho to button chhup jata hai.
// url (LinkedIn): post ki link. Khali ho to button chhup jata hai.

const PH = "/images/placeholder.svg";

export const achievements = [
  {
    slug: "suparco",
    label: "3rd Place",
    title: "Innovative Ideas Competition on Rocket System Design and Future Challenges",
    event: "World Space Week Pakistan 2026",
    details:
      "Held at RESOLVE (South), SUPARCO Complex, Karachi. Team Astra Core (with Mashaal Ali), representing NED University.",
    idea: "FPGA-Accelerated Onboard Anomaly Detection for Sounding Rocket Health Monitoring",
    tags: ["FPGA", "Edge AI", "Anomaly Detection"],
    bullets: [
      "Proposed edge AI on an FPGA for real-time onboard fault detection, so the rocket does not depend entirely on ground monitoring.",
      "Used hybrid monitoring, with a lightweight AI model working alongside independent safety limits on vibration, temperature and pressure data.",
      "In simulation, the system detected all 180 injected faults with zero false safe-mode triggers across 200 simulated normal flights. Hardware validation is the next step.",
    ],
    images: [PH, PH, PH], // PASTE PRESENTATION PIC PATHS HERE
    certificate: "", // PASTE CERTIFICATE DRIVE LINK HERE
  },
  {
    slug: "skkillo",
    label: "Winner",
    title: "Sync x Skkillo Backend and AI Engineering Challenge",
    event: "",
    details:
      "A one-hour backend and AI engineering internship assessment for Sync, a company building AI-powered conversational digital profiles.",
    idea: "",
    tags: ["Python", "Backend", "LLM APIs"],
    bullets: [
      "Built a robust chat completion wrapper with input validation, retries with exponential backoff and clean error handling.",
    ],
    images: [PH], // PASTE LEADERBOARD PIC PATH HERE
    certificate: "",
  },
];

export const linkedinPosts = [
  {
    title: "State Bank of Pakistan Internship",
    note: "LinkedIn post",
    url: "", // PASTE LINKEDIN POST LINK HERE
  },
  {
    title: "Stanford Code in Place Completion",
    note: "LinkedIn post",
    url: "", // PASTE LINKEDIN POST LINK HERE
  },
  {
    title: "Power BI Vulnerability Dashboard",
    note: "LinkedIn post",
    url: "", // PASTE LINKEDIN POST LINK HERE
  },
];