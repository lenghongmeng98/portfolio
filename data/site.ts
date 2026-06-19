/** Site content — mirrors CV. Place your PDF at `public/resume.pdf`. */

export const site = {
  name: "Leng Hongmeng",
  role: "IT Instructor · Software Engineer",
  summary:
    "Software Engineer and IT Instructor with experience in software development and technical mentorship, specializing in Java, Spring Boot, and backend system development. Experienced in designing scalable applications, developing RESTful APIs, and system integration, with a strong foundation in backend architecture and system design.",
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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leng-hongmeng-07a2a8287/" },
  { label: "Email", href: "mailto:lenghongmeng98@gmail.com" },
  { label: "Website", href: "https://lenghongmeng.site" },
] as const;

export const about = {
  bio: "Software Engineer and IT Instructor with experience in software development and technical mentorship, specializing in Java, Spring Boot, and backend system development. At the Korea Software HRD Center, I mentor and guide aspiring students through real-world partner projects, supporting them in requirements analysis, system design, implementation, testing, and deployment. Passionate about fostering technical excellence, continuous learning, and bridging the gap between academic knowledge and industry expectations through hands-on, project-based learning.",
} as const;

export const education = [
  {
    period: "2019 – 2023",
    degree: "Bachelor's Degree of Software Development",
    institution: "Norton University (NU)",
    location: "Phnom Penh, Cambodia",
    highlights: [
      "Focused on software engineering principles, algorithms, and full-stack development.",
    ],
  },
  {
    period: "2023",
    degree: "Software Expert Training",
    institution: "Korea Software HRD Center (KSHRD)",
    location: "Phnom Penh, Cambodia",
    highlights: [
      "1,566-hour intensive program covering Java, Spring Boot, ReactJS, PostgreSQL, and Hyperledger Fabric blockchain.",
    ],
  },
  {
    period: "2019 – 2020",
    degree: "2 Months C & C++ Training",
    institution: "Engineering of Technology and Electronic Center (ETEC)",
    location: "Phnom Penh, Cambodia",
    highlights: [
      "Foundational training in systems programming and low-level memory management.",
    ],
  },
] as const;

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
    period: "Jan 2024 – Present",
    title: "IT Instructor",
    company: "Korea Software HRD Center (KSHRD)",
    location: "Phnom Penh",
    summary:
      "Deliver training in Java Programming and Spring Boot, and mentor students through real-world, project-based learning experiences.",
    highlights: [
      "Deliver training in Java Programming (OOP, Collections Framework, Stream API, Multithreading, JDBC, and Design Patterns), equipping students with strong software engineering fundamentals and problem-solving skills.",
      "Teach Spring Boot and Spring Cloud Microservices, covering RESTful API development, Spring Data JPA, Spring Security, API Gateway, Service Discovery (Eureka), Config Server, Circuit Breaker, Distributed Tracing, and inter-service communication.",
      "Lead project-based learning activities, helping students apply software engineering concepts to real-world business requirements.",
      "Mentor student teams in collaborative projects with industry partners, including KOSIGN and Hunesion company, providing technical guidance throughout the software development lifecycle."
    ],
    tech: ["Java", "Spring Boot", "Spring Cloud", "PostgreSQL", "REST", "JWT"],
  },
  {
    period: "Feb 2023 – Dec 2023",
    title: "Software Expert Training Program",
    company: "Korea Software HRD Center (KSHRD)",
    location: "Phnom Penh",
    summary:
      "1,566-hour intensive program covering full-stack Java development and Hyperledger Fabric blockchain technology.",
    highlights: [],
    courses: [
      {
        name: "Basic Course",
        period: "February, 01st – July, 20th 2023, Mon-Fri, 7.5 hours per day, 870 hours",
        items: [
          { label: "JAVA", content: "J2SE (Basic Java and OOP concepts), J2EE (MVC pattern)" },
          { label: "WEB", content: "HTML, CSS, JavaScript, CSS FlexBox, Bootstrap 4, ReactJS, JSON" },
          { label: "SPRING", content: "Spring Boot, MyBatis Data Access, Spring RESTful Web Service, Spring Security, JSON Web Token, Thymeleaf Engine" },
          { label: "Database", content: "Data Modeling, PostgreSQL, SQL (Basic SQL, Advanced SQL)" },
        ],
      },
      {
        name: "Advanced Course",
        period: "July, 31st – December, 07th 2023, Mon-Fri, 7.5 hours per day, 696 hours",
        items: [
          { label: "Blockchain", content: "Completed blockchain course focusing on Distributed Ledger Technology and decentralized networks via Hyperledger Fabric. Gained technical proficiency in Linux, Docker containerization, CouchDB NoSQL management, and backend development utilizing Spring Boot for RESTful APIs and Golang for Smart Contract (Chaincode) lifecycles. Additionally, acquired hands-on experience in securing blockchain environments, generating cryptographic materials, and maintaining fault tolerance using Raft consensus and Hyperledger Explorer." },
        ],
      },
    ],
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Hyperledger Fabric", "Golang", "Docker"],
  },
  {
    period: "Oct 2021 – Nov 2022",
    title: "Web Developer",
    company: "CheckInMe",
    location: "Phnom Penh",
    summary:
      "Implemented and maintained frontend and backend features for a client portal and admin web portal.",
    highlights: [
      "Implemented and enhanced functionalities within the Client Portal to support business processes.",
      "Developed and maintained frontend and backend features for an early-stage Admin Web Portal using PHP, Laravel, and MySQL.",
      "Collaborated in the customization and feature implementation to meet the operational requirements of Preah Kossamak Hospital.",
    ],
    tech: ["PHP", "Laravel", "MySQL"],
  },
] as const;

export const projects = [
  {
    title: "My GitHub",
    description:
      "All my personal projects live here — explore my repositories covering backend systems, APIs, and more.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "REST", "JWT"],
    demo: "https://lenghongmeng.site",
    github: "https://github.com/lenghongmeng98",
  },
  {
    title: "Dental Clinic CMS",
    description:
      "Built a Customer Management System for a dental hospital to manage patient profiles, contact information, appointment scheduling, and treatment records. Designed for clinic staff to streamline daily operations and improve patient care workflows.",
    stack: ["Spring Boot", "ReactJS", "PostgreSQL", "REST API", "JWT"],
    demo: "https://lenghongmeng.site",
    github: "https://github.com/lenghongmeng98/cms",
  },
  {
    title: "Private Blockchain Network Setup",
    description:
      "Configured and deployed a private Hyperledger Fabric network with multiple organizations, channels, and peers. Set up crypto materials, Raft consensus ordering service, CouchDB state database, and Hyperledger Explorer for monitoring.",
    stack: ["Hyperledger Fabric", "Docker", "CouchDB", "Raft Consensus", "Linux"],
    demo: "https://lenghongmeng.site",
    github: "https://github.com/orgs/setup-private-blockchain-network/repositories",
  },
] as const;

export const contact = {
  email: "lenghongmeng98@gmail.com",
} as const;

export const nav = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

/** @deprecated Use skillGroups - kept for SkillIcon mapping if needed */
export type SkillIconId =
  | "java"
  | "spring"
  | "react"
  | "postgres"
  | "typescript"
  | "tailwind"
  | "git";


