/**
 * Portfolio Configuration
 *
 * All content here comes from Kishore's resume.
 * Edit this file to update the portfolio.
 */

export const siteConfig = {
  name: "Kishore",
  initials: "K",
  title: "Kishore | Backend Developer",
  description:
    "Kishore - Backend Developer specializing in Node.js, Go, distributed systems, and AI-powered developer tools.",
  tagline:
    "Backend Developer • Node.js & Go • AI Agents • Distributed Systems",
  resumeLink: "/kishore_resume.pdf",
};

export const contactInfo = {
  email: "krishkishore972@gmail.com",
  phone: "7075997895",
};

export const socialLinks = [
  {
    platform: "github",
    url: "https://github.com/krishkishore972",
    icon: "fab fa-github",
    label: "GitHub",
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/kishore-sabavath-9aab8b242/",
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
  },
  {
    platform: "email",
    url: "mailto:krishkishore972@gmail.com",
    icon: "fas fa-envelope",
    label: "Email",
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    rating: "Coding Profile",
    url: "https://leetcode.com/u/KrishKishore/",
    className: "leetcode",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const education = {
  institution: "Maharaja Agrasen Institute of Technology",
  degree: "B.Tech in Computer Science",
  duration: "June 2023 – June 2027",
  location: "Delhi, India",
};

export const experiences = [
  {
    company: "ConviSaaS Inc.",
    role: "Backend Developer Intern",
    duration: "Sep 2025 – Feb 2026",
    type: "Remote",
    tech: "Node.js • Express.js • React.js • REST APIs • Databases",
    points: [
      "Designed and built <strong>12+ RESTful APIs</strong> using Node.js and Express.js, powering core product modules consumed by the React.js frontend",
      "Implemented cron-based schedulers to automate recurring data processing, saving <strong>~5 hours/week</strong> of manual work",
      "Optimized slow database queries with indexing, cutting average API response time by <strong>~35%</strong>",
      "Added request validation, error handling, and role-based access control; shipped <strong>15+ features and fixes</strong> via code reviews",
    ],
  },
];

export const projects = [
  {
    title: "Code AI",
    description:
      "Terminal-based autonomous coding agent with filesystem, shell, and git tools, integrating Gemini, Groq, and Anthropic models behind one provider-agnostic streaming interface. Features an autonomous read-act loop with tool-call reassembly, context compaction, JSONL session persistence with resume, and permission prompts for write, shell, and git tools.",
    icon: "fas fa-terminal",
    tech: ["TypeScript", "Node.js", "LLM APIs", "Ink"],
    githubLink: "https://github.com/krishkishore972/code_ai",
  },
  {
    title: "UploadRelay",
    description:
      "Video collaboration platform with multipart uploads directly to AWS S3 via presigned URLs. The Go backend uses Redis + Asynq for asynchronous video processing and FFmpeg to generate multi-quality HLS previews, with an approval-driven workflow that streams approved originals to YouTube via OAuth.",
    icon: "fas fa-video",
    tech: ["Go", "Redis", "AWS S3", "FFmpeg", "YouTube API"],
    githubLink: "https://github.com/krishkishore972/UploadRelay",
    liveLink: "https://upload-relay-web.vercel.app/",
  },
  {
    title: "Vercel Clone",
    description:
      "Self-hosted deployment platform that clones a public GitHub repo, builds it in a one-off Docker sandbox, uploads the output to S3, and serves it on generated subdomains via a custom reverse proxy. Uses a BullMQ + Redis build queue, streams live build logs to ClickHouse, tracks deployment status in PostgreSQL, and hardens sandboxes with non-root users, dropped capabilities, resource limits, and archive validation.",
    icon: "fas fa-cloud-upload-alt",
    tech: [
      "Node.js",
      "Next.js",
      "Docker",
      "BullMQ",
      "Redis",
      "ClickHouse",
      "PostgreSQL",
      "S3",
    ],
    githubLink: "https://github.com/krishkishore972/vercel",
    liveLink: "https://deploy-with.vercel.app/",
  },
];

export const skillCategories = [
  {
    title: "AI & Agents",
    icon: "fas fa-robot",
    skills: [
      "LLM APIs (Gemini, Groq, Anthropic)",
      "Tool / Function Calling",
      "Agentic Workflows",
      "Streaming",
      "Context Management",
      "Prompt Engineering",
    ],
  },
  {
    title: "Languages",
    icon: "fas fa-code",
    skills: ["TypeScript", "JavaScript", "Go", "Java", "SQL"],
  },
  {
    title: "Backend & Data",
    icon: "fas fa-server",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "ClickHouse",
      "Prisma",
    ],
  },
  {
    title: "Cloud & Tools",
    icon: "fas fa-tools",
    skills: [
      "AWS (S3, ECS, EC2)",
      "Docker",
      "Git",
      "GitHub",
      "React.js",
      "Next.js",
      "Vitest",
    ],
  },
];
