/** Site content — mirrors CV. Place your PDF at `public/resume.pdf`. */

export const site = {
  name: "Leng Hongmeng",
  role: "IT Instructor · Software Engineer",
  summary:
    "Software Engineer and IT Instructor with over 2 years of experience in software development and technical mentorship, specializing in Java, Spring Boot, and backend system development. Experienced in designing scalable applications, developing RESTful APIs, and system integration, with a strong foundation in backend architecture and system design.",
  location: "Sen Sok, Phnom Penh",
  availability: "Open to software engineering & teaching roles",
  url: "https://lenghongmeng.site",
  photo: "/profile.jpg",
  photoAlt: "Leng Hongmeng — professional photo",
  resume: { href: "/resume.pdf", label: "Download CV" } as const,
  phone: "(+855) 87 355 685",
  phoneAlt: "(+855) 99 502 997",
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leng-hongmeng" },
  { label: "Email", href: "mailto:lenghongmeng98@gmail.com" },
  { label: "Website", href: "https://lenghongmeng.site" },
] as const;

export const about = {
  bio: "Software Engineer and IT Instructor with over 2 years of experience in software development and technical mentorship, specializing in Java, Spring Boot, and backend system development. At the Korea Software HRD Center, I mentor and guide aspiring students through real-world partner projects, supporting them in requirements analysis, system design, implementation, testing, and deployment. Passionate about fostering technical excellence, continuous learning, and bridging the gap between academic knowledge and industry expectations through hands-on, project-based learning.",
  education:
    "BSc Software Development, Norton University (2019–2023) · Software Expert Training, KSHRD (2023) · C&C++ Training, ETEC (2019–2020)",
} as const;

export const skillGroups = [
  {
    label: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "Spring Cloud Microservices",
      "REST APIs",
      "OAuth",
      "JWT",
      "Keycloak",
      "MyBatis",
      "Flyway",
      "Liquibase",
    ],
  },
  {
    label: "Web",
    skills: ["ReactJS", "NextJS", "HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    label: "Data & Tools",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Docker Compose",
      "Cloud Services",
      "Git",
      "Data Modeling",
    ],
  },
  {
    label: "AI-Assisted Dev",
    skills: ["Cursor", "Claude Code", "MCP", "Sub-agents", "Hooks"],
  },
] as const;

export const experience = [
  {
    period: "Jan 2024 — Present",
    title: "IT Instructor",
    company: "Korea Software HRD Center (KSHRD)",
    location: "Phnom Penh",
    summary:
      "Deliver Java and Spring Boot training and mentor students through real-world partner projects from requirements to production.",
    highlights: [
      "Train students in Java OOP, Collections Framework, Stream API, Multithreading, JDBC, and Design Patterns.",
      "Teach Spring Boot and Spring Cloud Microservices — RESTful APIs, Spring Data JPA, Spring Security, API Gateway, Service Discovery (Eureka), Config Server, Circuit Breaker, and Distributed Tracing.",
      "Mentor students through project-based learning, translating business requirements into production-ready applications.",
    ],
    tech: ["Java", "Spring Boot", "Spring Cloud", "PostgreSQL", "REST", "JWT"],
  },
  {
    period: "Feb 2023 — Dec 2023",
    title: "Software Expert Training",
    company: "Korea Software HRD Center (KSHRD)",
    location: "Phnom Penh",
    summary:
      "1,566-hour intensive program covering full-stack Java development and blockchain technology.",
    highlights: [
      "Basic (870 hrs): Java J2SE/J2EE, Spring Boot, MyBatis, Spring Security, JWT, ReactJS, PostgreSQL, and data modeling.",
      "Advanced (696 hrs): Blockchain via Hyperledger Fabric — Docker, CouchDB, Spring Boot APIs, Golang smart contracts, Raft consensus.",
    ],
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Hyperledger Fabric", "Golang", "Docker"],
  },
  {
    period: "Oct 2021 — Nov 2022",
    title: "Web Developer",
    company: "CheckInMe",
    location: "Phnom Penh",
    summary:
      "Built and maintained frontend and backend features for a client portal and admin web portal.",
    highlights: [
      "Implemented and enhanced functionalities within the Client Portal to support business processes.",
      "Developed and maintained an early-stage Admin Web Portal using PHP, Laravel, and MySQL.",
      "Collaborated on feature customization to meet the operational requirements of Preah Kossamak Hospital.",
    ],
    tech: ["PHP", "Laravel", "MySQL"],
  },
] as const;

export const projects = [
  {
    title: "KSHRD Partner Projects",
    description:
      "Mentored student teams on real partner projects — from requirements and system design through Spring Boot delivery and deployment.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "REST", "JWT"],
    demo: "https://lenghongmeng.site",
    github: "https://github.com",
  },
  {
    title: "Blockchain Training Capstone",
    description:
      "Built decentralized applications on Hyperledger Fabric with Spring Boot REST APIs, Golang smart contracts, Docker containerization, and CouchDB.",
    stack: ["Hyperledger Fabric", "Spring Boot", "Golang", "Docker", "CouchDB"],
    demo: "https://lenghongmeng.site",
    github: "https://github.com",
  },
  {
    title: "CheckInMe Admin Portal",
    description:
      "Developed and maintained an early-stage Admin Web Portal with PHP/Laravel for Preah Kossamak Hospital's operational workflows.",
    stack: ["PHP", "Laravel", "MySQL"],
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
