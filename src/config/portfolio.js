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
  resumeLink: "kishore_resume.pdf",
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
    product: "eazyPetition — immigration petition platform",
    role: "Backend Developer Intern",
    duration: "Sep 2025 – Feb 2026",
    type: "Remote",
    tech: "Node.js • Express.js • PostgreSQL • Stripe • AWS SES • React.js",
    points: [
      "Built <strong>12+ REST APIs</strong> in Node.js/Express.js across authentication, petition form submission, case tracking, payments/subscriptions (Stripe), and document uploads, consumed by the React.js frontend",
      "Built a cron-based scheduler that detects case status updates and sends email notifications via <strong>AWS SES</strong> to paid subscribers, replacing manual follow-ups and saving <strong>~5 hours/week</strong>",
      "Cut average API response time by <strong>~35%</strong> by profiling slow queries and adding indexes in PostgreSQL",
      "Implemented role-based access control, request validation, and centralized error handling to protect sensitive user and case data",
      "Shipped <strong>15+ features and bug fixes</strong> through Git pull requests and peer code reviews",
    ],
  },
];

export const projects = [
  {
    title: "Code AI",
    description:
      "Terminal-based autonomous coding agent with filesystem, shell, and git tools, integrating Gemini, Groq, and Anthropic models behind one provider-agnostic streaming interface. Designed an autonomous read-act loop that streams responses, reassembles tool calls from partial fragments, executes tools, and feeds results back with a max-turn cap to bound cost. Normalizes provider quirks—including Gemini's missing tool-call IDs and Groq's raw-text tool calls on some Llama models—into a common content-block format, with context compaction, JSONL session persistence with resume, and permission prompts for write, shell, and git tools.",
    icon: "fas fa-terminal",
    tech: ["TypeScript", "Node.js", "LLM APIs", "Ink"],
    githubLink: "https://github.com/krishkishore972/code_ai",
  },
  {
    title: "UploadRelay",
    description:
      "Video collaboration platform where collaborators upload large files directly to AWS S3 through multipart uploads with presigned URLs, bypassing the backend. A Go backend with Redis + Asynq processes videos asynchronously, using FFmpeg to generate multi-quality HLS previews for adaptive streaming. Includes an approval-driven workflow that streams approved originals from S3 to YouTube via OAuth 2.0 and the YouTube Data API.",
    icon: "fas fa-video",
    tech: ["Go", "Redis", "AWS S3", "FFmpeg", "YouTube API"],
    githubLink: "https://github.com/krishkishore972/UploadRelay",
    liveLink: "https://upload-relay-web.vercel.app/",
  },
  {
    title: "Vercel Clone",
    description:
      "Self-hosted deployment platform that clones a public GitHub repo, builds it in a one-off Docker sandbox, uploads the output to S3, and serves it on generated subdomains via a custom S3 reverse proxy. Uses a BullMQ + Redis build queue with a Docker-API worker, streams live build logs to ClickHouse, and tracks deployment status in PostgreSQL (Prisma), with automatic failure and timeout handling. Hardens sandboxes with non-root users, dropped capabilities, resource limits, an isolated network, and no credentials, and validates output archives against path traversal and symlinks.",
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
      "Ink",
      "React.js",
      "Next.js",
      "Vitest",
    ],
  },
];
