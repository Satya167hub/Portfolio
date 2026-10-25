import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  html,
  css,
  java,
  springboot,
  mysql,
  studyplanner,
  companydesk,
  queuepulse,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "journey",
    title: "Journey",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "Java & Spring Boot APIs",
    icon: backend,
  },
  {
    title: "MySQL & Database Design",
    icon: creator,
  },
  {
    title: "React & TypeScript UIs",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Docker (Basics)",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Core Java & CS Fundamentals",
    companyName: "Academic & Conceptual Foundations",
    icon: backend,
    iconBg: "#1d1836",
    date: "Foundations",
    points: [
      "Mastered Object-Oriented Programming (OOP) principles, inheritance, polymorphism, abstraction, and encapsulation in Java.",
      "Developed problem-solving skills across essential data structures: arrays, linked lists, stacks, queues, and hashing.",
      "Learned relational database concepts, entity relationship modeling, and SQL querying with MySQL.",
    ],
  },
  {
    title: "Backend Engineering with Spring Boot",
    companyName: "REST API & Architectural Practices",
    icon: creator,
    iconBg: "#1d1836",
    date: "Backend Stack",
    points: [
      "Developed structured RESTful web services in Spring Boot adhering to controller-service-repository architectural patterns.",
      "Managed entity lifecycles, relationships, and queries using Spring Data JPA and Hibernate with MySQL.",
      "Practiced input validations, clean DTO mapping, and standardized HTTP response handling.",
    ],
  },
  {
    title: "Frontend & Web Integration",
    companyName: "Modern UI Engineering",
    icon: web,
    iconBg: "#1d1836",
    date: "Frontend Stack",
    points: [
      "Built dynamic, responsive user interfaces using React, TypeScript, and Tailwind CSS.",
      "Connected client components with backend REST APIs via asynchronous HTTP requests, handling loading states and errors.",
      "Adopted disciplined version control habits, modular code structure, and Git workflows.",
    ],
  },
  {
    title: "AI Smart Study Planner",
    companyName: "Active Full-Stack Project",
    icon: mobile,
    iconBg: "#1d1836",
    date: "Present • In Development",
    points: [
      "Architecting an intelligent study management system to generate dynamic schedules, track subject mastery, and pace learning.",
      "Designing the MySQL schema for users, subjects, revision cycles, and study sessions.",
      "Building the Java and Spring Boot backend services with clean separation of concerns and planned adaptive scheduling algorithms.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "CompanyDesk",
    tagline:
      "A role-based employee management platform designed to organize multiple companies and their administrators in one place.",
    status: "Development / Deployment in Progress",
    isFeatured: false,
    description:
      "Full-stack web application for company administration and employee record management. Engineered with a role-based workflow where Super Admins create companies and assign administrators, while Company Admins access their company dashboard to manage employee records via RESTful endpoints.",
    features: [
      "Super Admin dashboard for multi-company management & onboarding",
      "Company administrator creation and role-based assignment",
      "Spring Security configuration with JWT-based admin authentication",
      "Employee create, read, update, and delete (CRUD) operations",
      "REST API integration connecting React frontend with Spring Boot backend",
      "Relational persistence configured with MySQL / TiDB Cloud Starter",
    ],
    distinction:
      "Unlike basic single-user CRUD applications, CompanyDesk introduces a multi-tier governance layer organizing company entities, administrator assignments, and employee records in a structured relational model.",
    techStackDetails: {
      frontend: "React.js, Vite, JavaScript, CSS, Axios",
      backend: "Java, Spring Boot, Spring Web, Spring Data JPA, Hibernate",
      security: "Spring Security, JWT Authentication Configuration",
      database: "MySQL-compatible / TiDB Cloud Starter",
      tools: "VS Code, Git, npm, Maven",
    },
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "spring-security-jwt",
        color: "pink-text-gradient",
      },
      {
        name: "mysql-tidb",
        color: "orange-text-gradient",
      },
    ],
    image: companydesk,
    sourceCodeLink: "",
    liveLink: "",
  },
  {
    name: "AI Smart Study Planner",
    tagline:
      "Intelligent study scheduling platform with dynamic pacing & topic management.",
    status: "In Development",
    isFeatured: true,
    description:
      "An intelligent study management platform designed to help students generate dynamic study schedules, track syllabus progress, and stay organized. Engineered with a Java and Spring Boot backend, a relational MySQL database schema, and planned responsive dashboard interfaces.",
    features: [
      "Dynamic study schedule generation based on topic difficulty and deadlines",
      "Normalized MySQL database schema for subjects, modules, and sessions",
      "Modular Spring Boot REST architecture following clean layer separation",
      "Planned adaptive pacing algorithms and spaced repetition schedules",
    ],
    distinction:
      "Features an intelligent scheduling engine tailored to students' actual learning pace rather than static calendar reminders.",
    techStackDetails: {
      backend: "Java 17, Spring Boot, Spring Data JPA",
      database: "MySQL Relational Database",
      frontend: "Modern Web / React (Planned)",
      tools: "Git, Maven, VS Code",
    },
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "rest-api",
        color: "orange-text-gradient",
      },
    ],
    image: studyplanner,
    sourceCodeLink: "",
    liveLink: "",
    dedicatedRoute: "/projects/ai-smart-study-planner",
  },
  {
    name: "QueuePulse",
    tagline:
      "A smart queue and wait-time management platform designed to streamline customer flow and reduce waiting friction.",
    status: "Planned / Coming Soon",
    isFeatured: false,
    description:
      "A planned smart queue management system designed to streamline customer flow, handle digital token issuance, estimate wait times, and optimize counter allocations for service centers. Architecture and requirement planning currently underway.",
    features: [
      "Digital token generation and service categorization architecture",
      "Estimated wait-time algorithm based on historical service durations",
      "Counter allocation and queue balancing design",
      "Relational database logging for daily throughput and audit trails",
    ],
    distinction:
      "A proactive system designed to replace physical waiting lines with predictive wait-time transparency and load-balanced counter allocation.",
    techStackDetails: {
      backend: "Java, Spring Boot (Planned Architecture)",
      database: "MySQL (Planned Architecture)",
      frontend: "React / Real-Time Dashboard (Planned)",
      status: "Architecture & Requirement Planning Stage",
    },
    tags: [
      {
        name: "java-spring",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "queue-algorithms",
        color: "green-text-gradient",
      },
      {
        name: "planned",
        color: "orange-text-gradient",
      },
    ],
    image: queuepulse,
    sourceCodeLink: "",
    liveLink: "",
  },
];

const testimonials: TTestimonial[] = [];

export { services, technologies, experiences, testimonials, projects };
