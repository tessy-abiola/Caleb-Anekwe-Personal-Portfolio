// src/data/content.js — single source of truth for all portfolio copy.
// Everything here is drawn from Caleb's resume and project brief.

export const PROFILE = {
  name: "Caleb Anekwe",
  title: "Graphic Designer | Motion Designer",
  email: "calebanekwe@gmail.com",
  location: "Nigeria",
  photo: "/images/caleb.webp",
};

export const SOCIALS = [
  { id: "behance", label: "Behance", handle: "behance.net/calebanekwe", href: "https://www.behance.net/calebanekwe" },
  { id: "linkedin", label: "LinkedIn", handle: "in/caleb-anekwe", href: "https://www.linkedin.com/in/caleb-anekwe-621bb0302" },
  { id: "instagram", label: "Instagram", handle: "@calebthekreator", href: "https://www.instagram.com/calebthekreator/" },
];

export const BEHANCE_URL = "https://www.behance.net/calebanekwe";

export const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const HERO_FACTS = [
  { value: "4+", label: "Years designing" },
  { value: "6", label: "Roles across teams" },
  { value: "30%", label: "Engagement increase" },
  { value: "Open", label: "To new opportunities" },
];

export const PROJECTS = [
  {
    id: "01",
    title: "Techlam",
    category: "Social Media Design",
    image: "/images/work/techlam.webp",
    href: "https://www.behance.net/gallery/233110505/Social-Media-design-for-Techlam",
    accent: "#2b6bff",
  },
  {
    id: "02",
    title: "NO4get",
    category: "Design Assets",
    image: "/images/no4get.webp",
    href: "https://www.behance.net/gallery/253124867/Design-Asset-for-NO4get",
    accent: "#6a1fe0",
  },
  {
    id: "03",
    title: "The Business Catalyst Africa",
    category: "Brand Identity",
    image: "/images/work/business-catalyst.webp",
    href: "https://www.behance.net/gallery/256873797/The-Business-Catalyst-Africa",
    accent: "#c20a0a",
  },
  {
    id: "04",
    title: "Mylola",
    category: "Brand Identity",
    image: "/images/work/mylola.webp",
    href: "https://www.behance.net/gallery/244362353/Mylola",
    accent: "#7a0000",
  },
  {
    id: "05",
    title: "Premiumpoint (E-commerce)",
    category: "Brand Identity",
    image: "/images/work/premiumpoint.webp",
    href: "https://www.behance.net/gallery/255852761/Premiumpoint-(E-commerce)",
    accent: "#174ec0",
  },
  {
    id: "06",
    title: "AOR Autos",
    category: "Social Media Design",
    image: "/images/work/aor-autos.webp",
    href: "https://www.behance.net/gallery/253981643/AOR-Autos-social-media-designs",
    accent: "#d01a1a",
  },
  {
    id: "07",
    title: "5star Buka",
    category: "Social Media Design",
    image: "/images/work/5star-buka.webp",
    href: "https://www.behance.net/gallery/253983407/5star-Buka-Social-Media-Design",
    accent: "#e01a1f",
  },
];

export const ABOUT_PARAGRAPHS = [
  "I'm a graphic and motion designer with more than four years of experience building brands, campaigns and social content for teams in Nigeria and abroad.",
  "My work moves between brand identity, logo and typography, social media systems, motion graphics and UI/UX for web and mobile. I take projects from brief to production-ready files, and I keep the visual language consistent wherever it shows up: a feed, a flyer, an event screen or an app.",
  "I've worked in remote, hybrid, contract and full-time settings, usually across several projects at once and against tight deadlines. At Creative Groove, data-informed creative direction contributed to a 30% increase in audience engagement.",
  "Alongside Adobe Creative Suite, Figma, Canva and CapCut, I use AI tools such as Midjourney and Nano Banana as part of my process. I'm currently available for new opportunities.",
];

export const ABOUT_FACTS = [
  { label: "Based in", value: "Nigeria" },
  { label: "Focus", value: "Brand identity, social media, motion, UI/UX" },
  { label: "Education", value: "B.Sc. Mathematics, University of Ibadan (2022 – 2025)" },
  { label: "Status", value: "Available for new opportunities" },
];

export const EXPERIENCE = [
  {
    date: "Dec 2025 – May 2026",
    role: "Lead Designer / Motion Designer",
    org: "Coolsmoke Pipe USA",
    type: "Remote, Contract",
    bullets: [
      "Led brand-wide creative direction, ensuring visual consistency across social media, campaign and institutional communications.",
      "Managed social media content from concept to production-ready delivery, covering static and motion graphics.",
      "Developed high-impact marketing materials and event-supporting visuals that strengthened audience engagement.",
      "Maintained strict adherence to brand guidelines across all platforms.",
    ],
  },
  {
    date: "Dec 2024 – Aug 2025",
    role: "Digital Designer",
    org: "Palmernorthridge CS",
    type: "Hybrid",
    bullets: [
      "Designed creative assets across social media, academic and campaign contexts, managing multiple concurrent projects from brief to delivery.",
      "Produced motion graphics and promotional materials for digital and print channels.",
      "Designed user interfaces for web and mobile applications with a focus on usability.",
      "Collaborated cross-functionally to deliver client-aligned design solutions on time and within scope.",
    ],
  },
  {
    date: "Jun 2024 – Nov 2024",
    role: "Digital Designer",
    org: "Creative Groove",
    type: "Remote, Contract",
    bullets: [
      "Designed high-impact creative assets for multiple brands across digital platforms, driving a 30% increase in audience engagement.",
      "Developed motion graphics and UI designs for web and mobile.",
      "Managed projects from concept through to production-ready output, on brief and on time.",
    ],
  },
  {
    date: "Jan 2024 – May 2024",
    role: "Graphic / Motion Designer",
    org: "Techlam NG",
    type: "Remote, Project",
    bullets: [
      "Created social media static and motion graphics aligned with brand messaging and visual identity guidelines.",
      "Delivered high-quality visuals consistently and on time using Adobe Creative Suite.",
    ],
  },
  {
    date: "Mar 2023 – Dec 2023",
    role: "Brand Identity Designer",
    org: "Invest With Me",
    type: "Remote",
    bullets: [
      "Developed a cohesive suite of brand identity materials, including social media carousels and ad creatives.",
      "Translated complex financial concepts into clear, visually digestible content.",
    ],
  },
  {
    date: "Jan 2022 – Aug 2022",
    role: "Graphic Designer",
    org: "Garba Event Promotion",
    type: "Hybrid, Contract",
    bullets: [
      "Designed culturally resonant social media content and event promotional materials that increased engagement and brand visibility.",
      "Produced interactive campaign assets that supported event attendance.",
    ],
  },
];

export const EDUCATION = {
  degree: "B.Sc. Mathematics",
  school: "University of Ibadan",
  date: "2022 – 2025",
};

export const SKILL_GROUPS = [
  {
    title: "Brand & Identity",
    items: [
      "Brand Identity & Visual Consistency",
      "Logo & Typography Design",
      "Flyer & Poster Design",
      "Digital Illustration",
    ],
  },
  {
    title: "Social & Campaign",
    items: [
      "Social Media Graphics",
      "Campaign & Event Design",
      "Digital & Print Production",
    ],
  },
  {
    title: "Motion & Interface",
    items: ["Motion Graphics & Animation", "UI/UX Design", "AI-Integrated Design"],
  },
];

export const TOOLS = [
  { name: "Adobe Creative Suite" },
  { name: "Figma" },
  { name: "Canva" },
  { name: "CapCut" },
  { name: "Midjourney", note: "AI-assisted" },
  { name: "Nano Banana", note: "AI-assisted" },
];
