// Pics: public/images/achievements/suparco/ ya skkillo/ me rakho, phir yahan path likho,
// jaise "/images/achievements/suparco/1.jpg". Jab tak paste nahi karti, placeholder dikhta hai.
// certificate: Drive link. Khali ho to button chhup jata hai.
// url (LinkedIn): post ki link. Khali ho to button chhup jata hai.

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
    images: [
      "/images/achievements/suparco/6.jpeg",
      "/images/achievements/suparco/1.jpeg",
      "/images/achievements/suparco/2.jpeg",
      "/images/achievements/suparco/3.jpeg",
      "/images/achievements/suparco/4.jpeg",
      "/images/achievements/suparco/5.jpeg",
      "/images/achievements/suparco/7.jpeg",
      "/images/achievements/suparco/8.jpeg",
    ], // PASTE PRESENTATION PIC PATHS HERE
    certificate: "", // PASTE CERTIFICATE DRIVE LINK HERE
  },
  {
    slug: "skkillo",
    label: "Winner",
    title: "Sync x Skkillo Backend and AI Engineering Challenge",
    event: "Online Event",
    details:
      "A one-hour backend and AI engineering internship assessment for Sync, a company building AI-powered conversational digital profiles.",
    idea: "",
    tags: ["Python", "Backend", "LLM APIs"],
    bullets: [
      "Built a robust chat completion wrapper with input validation, retries with exponential backoff and clean error handling.",
    ],
    images: [
      "/images/achievements/skkillo/leaderboard.png"
    ], // PASTE LEADERBOARD PIC PATH HERE
    certificate: "",
  },
];

export const linkedinPosts = [
  {
    title: "SUPARCO World Space Week Competition",
    note: "LinkedIn post",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7514387710636220416/", // PASTE LINKEDIN POST LINK HERE
  },
  {
    title: "Sync x Skkillo Challenge",
    note: "LinkedIn post",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7507426975150436353/", // PASTE LINKEDIN POST LINK HERE
  },
];