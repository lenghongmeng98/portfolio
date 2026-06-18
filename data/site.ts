/** Site content — mirrors CV. Place your PDF at `public/resume.pdf`. */

export const site = {
  name: "Leng Hongmeng",
  role: "IT Instructor · Software Engineer",
  summary:
    "Building and teaching production-ready backend systems with Java and Spring Boot at Korea Software HRD Center.",
  location: "Phnom Penh, Cambodia",
  availability: "Open to software engineering & teaching roles",
  url: "https://lenghongmeng.site",
  photo: "/profile.jpg",
  photoAlt: "Leng Hongmeng — professional photo",
  resume: { href: "/resume.pdf", label: "Download CV" } as const,
  phone: "(+855) 87 355 685",
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leng-hongmeng" },
  { label: "Email", href: "mailto:lenghongmeng98@gmail.com" },
  { label: "Website", href: "https://lenghongmeng.site" },
] as const;

export const about = {
  bio: "IT Instructor and Software Engineer with 2+ years in backend development and technical education. I design Spring Boot APIs, mentor cohort projects, and focus on clean architecture, SOLID principles, and industry-ready delivery.",
  education: "BSc Software Development, Norton University · Software Expert Training, KSHRD",
} as const;

export const skillGroups = [
  {
    label: "Backend",
    skills: ["Java", "Spring Boot", "REST APIs", "Spring Security", "MyBatis", "JWT"],
  },
  {
    label: "Web",
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
  },
  {
    label: "Data & tools",
    skills: ["PostgreSQL", "SQL", "Git", "Data modeling"],
  },
] as const;

export const experience = [
  {
    period: "2023 — Present",
    title: "IT Instructor",
    company: "Korea Software HRD Center (KSHRD)",
    location: "Phnom Penh",
    summary:
      "Teach Java and Spring Boot through project-based training aligned with industry partners.",
    highlights: [
      "Mentor student teams on partner projects from requirements to delivery.",
      "Conduct code reviews and guide scalable backend implementation.",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST", "JWT"],
  },
  {
    period: "2022",
    title: "Software Expert Training",
    company: "KSHRD",
    location: "Phnom Penh",
    summary: "870-hour intensive program covering full-stack Java development.",
    highlights: [
      "Java J2SE/J2EE, Spring Boot, MyBatis, and Spring Security.",
      "Web fundamentals, React, PostgreSQL, and data modeling.",
    ],
    tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
  },
] as const;

export const projects = [
  {
    title: "KSHRD partner projects",
    description:
      "Mentored student teams on real partner projects—from requirements and design through Spring Boot delivery.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "REST", "JWT"],
    demo: "https://lenghongmeng.site",
    github: "https://github.com",
  },
  {
    title: "Full-stack training capstone",
    description:
      "Secured Spring Boot APIs with React front ends, MyBatis persistence, and PostgreSQL data models.",
    stack: ["Spring Boot", "React", "MyBatis", "Spring Security", "PostgreSQL"],
    demo: "https://lenghongmeng.site",
    github: "https://github.com",
  },
] as const;

export const contact = {
  email: "lenghongmeng98@gmail.com",
} as const;

export const nav = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

/** @deprecated Use skillGroups — kept for SkillIcon mapping if needed */
export type SkillIconId =
  | "java"
  | "spring"
  | "react"
  | "postgres"
  | "typescript"
  | "tailwind"
  | "git";
