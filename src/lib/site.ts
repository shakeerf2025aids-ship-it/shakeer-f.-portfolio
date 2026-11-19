import irisImg from "@/assets/project-iris.jpg";
import realifyImg from "@/assets/project-realify.jpg";
import rakshaImg from "@/assets/project-raksha.jpg";

export const profile = {
  name: "SHAKEER F.",
  shortName: "Shakeer F.",
  role: "Full Stack Developer | AI & ML Enthusiast",
  tagline: "Building Intelligent Solutions. Creating Real-World Impact.",
  footerQuote: "Turning Ideas Into Intelligent Solutions.",
  intro:
    "I am an Artificial Intelligence and Data Science student passionate about developing intelligent applications, scalable software solutions and innovative technologies that solve real-world problems.",
  college: "Sri Eshwar College of Engineering",
};

export const contact = {
  phone: "+91 9994488314",
  phoneHref: "tel:+919994488314",
  email: "shakeer.f2025aids@sece.ac.in",
  linkedin: "https://www.linkedin.com/in/shakeer-f-6454a5395/",
  github: "https://github.com/shakeerf2025aids-ship-it",
};

/** Resume PDF served from public/resume.pdf. */
export const RESUME_PATH = `${import.meta.env.BASE_URL}resume.pdf`;

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;

export const skillGroups = [
  {
    title: "Programming",
    code: "01",
    items: ["Python", "C", "C++", "Java", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    code: "02",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Scikit-learn",
      "PyTorch",
    ],
  },
  {
    title: "Data Science",
    code: "03",
    items: ["NumPy", "Pandas", "Matplotlib", "Data Analysis", "Data Visualization"],
  },
  {
    title: "Web & App Development",
    code: "04",
    items: ["HTML", "CSS", "JavaScript", "React", "Flask", "FastAPI", "Flutter"],
  },
  {
    title: "Tools",
    code: "05",
    items: ["Git", "GitHub", "VS Code", "MySQL", "Firebase", "Postman"],
  },
] as const;

export type Project = {
  slug: string;
  index: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  /** Leave undefined until a real URL exists — the button then shows "coming soon". */
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "iris",
    index: "01",
    name: "IRIS",
    subtitle: "Intelligent Retinal Imaging & Screening System",
    description:
      "An AI-powered retinal screening platform designed to support early identification of eye diseases, including Glaucoma, Diabetic Retinopathy and Age-related Macular Degeneration.",
    features: [
      "AI-powered retinal image analysis",
      "Early disease screening support",
      "Portable and affordable screening hardware",
      "Offline-first architecture",
      "Mobile application integration",
      "Screening report generation",
    ],
    tech: ["Python", "Deep Learning", "EfficientNet", "FastAPI", "Flutter", "Raspberry Pi"],
    image: irisImg,
  },
  {
    slug: "realify-ai",
    index: "02",
    name: "REALIFY AI",
    subtitle: "Fake News and Fake Image Detector",
    description:
      "An AI-powered platform designed to identify potentially misleading news and manipulated images using machine learning and intelligent verification techniques.",
    features: [
      "Fake and real news classification",
      "Fake image detection",
      "Confidence score",
      "Emotion analysis",
      "Suspicious keyword highlighting",
      "Trusted source verification",
    ],
    tech: ["Python", "Machine Learning", "NLP", "BERT", "Flask", "APIs"],
    image: realifyImg,
  },
  {
    slug: "raksha-ai",
    index: "03",
    name: "RAKSHA AI",
    subtitle: "Intelligent Road Safety and Emergency Response System",
    description:
      "A smart emergency response platform designed to help people access emergency services quickly during road accidents and critical situations.",
    features: [
      "One-tap SOS",
      "Voice-based emergency SOS",
      "Nearby hospital discovery",
      "Ambulance and police discovery",
      "Emergency route navigation",
      "Offline emergency support",
    ],
    tech: ["Flutter", "Python", "Firebase", "Google Maps APIs"],
    image: rakshaImg,
  },
];

export const education = [
  {
    title: "B.Tech – Artificial Intelligence and Data Science",
    place: "Sri Eshwar College of Engineering",
    period: "2025 – 2029",
    score: "CGPA 8.5",
    current: true,
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    place: "Higher Secondary",
    period: "2025",
    score: "91%",
    current: false,
  },
  {
    title: "Secondary School Leaving Certificate (SSLC)",
    place: "Secondary School",
    period: "2023",
    score: "88.6%",
    current: false,
  },
];

export type Achievement = {
  title: string;
  detail: string;
  highlight?: boolean;
};

export type AchievementGroup = {
  category: string;
  description: string;
  icon: "trophy" | "award" | "users" | "briefcase" | "code";
  items: Achievement[];
};

export const achievementGroups: AchievementGroup[] = [
  {
    category: "Hackathons & Contests",
    description: "Competitive wins across national hackathons and inter-college contests.",
    icon: "trophy",
    items: [
      { title: "1st Runner Up", detail: "HACKFEST'26 — National Level Hackathon", highlight: true },
      { title: "1st Prize", detail: "Web Design Contest", highlight: true },
      { title: "1st Prize", detail: "Coding Contest — VSB College", highlight: true },
      { title: "1st Prize", detail: "Debug Contest — Dhaanish Ahmed College", highlight: true },
      { title: "2nd Prize", detail: "Coding Contest — Dhaanish Ahmed College" },
      { title: "Finalist", detail: "Coding Contest — SECE" },
      { title: "Finalist", detail: "Self-E Hackathon (Team Leader)" },
      { title: "Runner-Up", detail: "Freshathon" },
    ],
  },
  {
    category: "Leadership & Recognition",
    description: "Community roles and team leadership.",
    icon: "users",
    items: [
      { title: "Microsoft Learn Student Ambassador", detail: "Microsoft student community programme" },
      {
        title: "Robotics & Innovation Community",
        detail: "Active member at Sri Eshwar College of Engineering",
      },
      { title: "Team Leader", detail: "Led the team at Self-E Hackathon (Finalist)" },
      { title: "Hackathons & Coding Contests", detail: "Participated in multiple events" },
    ],
  },
  {
    category: "Certifications",
    description: "Technical certifications completed.",
    icon: "award",
    items: [
      { title: "NPTEL", detail: "Programming in Python" },
      { title: "Simplilearn", detail: "C Programming" },
      { title: "C Beginners Certification", detail: "Foundations of C programming" },
    ],
  },
  {
    category: "Project Development",
    description: "End-to-end AI products built from idea to working system (2026).",
    icon: "code",
    items: [
      { title: "IRIS", detail: "AI retinal screening with portable hardware and a mobile app" },
      { title: "Realify AI", detail: "Fake news and manipulated image detection platform" },
      { title: "Raksha AI", detail: "AI-powered safety and emergency response platform" },
    ],
  },
  {
    category: "Experience",
    description: "Real-world work alongside studies.",
    icon: "briefcase",
    items: [
      {
        title: "Sales and Billing (Part-Time) — Central Store",
        detail: "2 years · Managed billing and customer transactions; built communication and sales skills",
      },
    ],
  },
];

export const highlightStats = [
  { value: "8.5", label: "CGPA" },
  { value: "4×", label: "1st prizes" },
  { value: "3", label: "AI products built" },
  { value: "MLSA", label: "Microsoft Learn Student Ambassador" },
];
