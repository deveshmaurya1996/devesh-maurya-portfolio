import {
  Github,
  Twitter,
  LucideLinkedin,
  Brain,
  Cloud,
  Code,
  Server,
  Zap,
  Cpu,
  Network,
  Workflow,
} from "lucide-react";
import LogoReactNative from "/public/images/logos/icon-react-native.svg";
import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoGatsby from "/public/images/logos/icon-gatsby.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoMUI from "/public/images/logos/icon-Material-UI.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import Keystone from "/public/images/logos/icon-keystonejs.svg";
import LogoVite from "/public/images/logos/icon-vite.svg";
import LogoRedux from "/public/images/logos/icon-redux.svg";
import LogoTanstack from "/public/images/logos/icon-tanstack.png";
import LogoExpo from "/public/images/logos/icon-expo.svg";
import LogoExpoLight from "/public/images/logos/icon-expo-light.svg";
import LogoGraphQL from "/public/images/logos/icon-graphql.svg";
import LogoPython from "/public/images/logos/icon-python.svg";
import LogoFastAPI from "/public/images/logos/icon-fastapi.svg";
import LogoDocker from "/public/images/logos/icon-docker.svg";
import LogoAzureAd from "/public/images/logos/icon-azure-ad.svg";
import LogoPrisma from "/public/images/logos/icon-prisma.svg";

import labLambworks from "/public/images/logos/logo-lablamb.png";
import YoChatGPT from "/public/images/yogpt.png";
import Airhub from "/public/images/airhub-thumbnail.png";
import IncentivizED from "/public/images/IncentivizEDNew.png";
import YLHH from "/public/images/YLHHThumbnail.png";
import LabLamb from "/public/images/LabLambWorks.png";
import Meet from "/public/images/meet.jpg";
import Nathan from "/public/images/nathan.jpg";
import Sreedharan from "/public/images/sreedharan.jpg";
import Aicade from "/public/images/Aicade.svg";
import BullShark from "/public/images/bullshark_studio_logo.jpg";
import LandsAuthority from "../../public/images/Landing Screen.png";
import ThriveOn from "../../public/images/Thriveon.png";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetailsType,
  TestimonialDetails,
  SkillCategory,
  FrequencySkillGroup,
  HowIBuildPrinciple,
  OpenSourceTool,
  ProjectCategory,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/deveshmaurya1996",
  GITHUB_REPO: "https://github.com/deveshmaurya1996/devesh-maurya-portfolio",
  TWITTER: "https://x.com/deveshmaurya3",
  LINKEDIN: "https://www.linkedin.com/in/deveshmaurya1996/",
  EMAIL: "deveshmaurya1996@gmail.com",
  RESUME_VIEW:
    "https://docs.google.com/document/d/1l6lSa-Ycd-FlBCvXRtRELYzBcXMEiVFo6vqU-xZRH5U/edit?usp=sharing",
  RESUME_PDF:
    "https://docs.google.com/document/d/1l6lSa-Ycd-FlBCvXRtRELYzBcXMEiVFo6vqU-xZRH5U/export?format=pdf&attachment=true",
  CREATE_FULLSTACK_NPM:
    "https://www.npmjs.com/package/@dartix-software-solutions/create-fullstack-app",
  CREATE_FULLSTACK_GITHUB:
    "https://github.com/deveshmaurya1996/create-fullstack-app",
  AI_ASSISTANT_GITHUB: "https://github.com/deveshmaurya1996/ai-assistant",
  MEDIA_BUNCH_GITHUB: "https://github.com/deveshmaurya1996/Media_Bunch_Frontend",
  MEDIA_BUNCH_LIVE: "https://media-bunch-frontend.vercel.app",
  DARTIX: "https://www.dartix.live/",
  DARTIX_EMAIL: "mailto:dartix.software.solutions@gmail.com",
  DARTIX_TOOLS: "https://www.dartix.live/tools",
};

const whatsappNumber = "919670551347";

export const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "How I build", href: "/#how-i-build" },
  { label: "Open Source", href: "/#open-source" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const SOCIAL_LINKS = [
  { icon: Github, url: EXTERNAL_LINKS.GITHUB },
  { icon: Twitter, url: EXTERNAL_LINKS.TWITTER },
  { icon: LucideLinkedin, url: EXTERNAL_LINKS.LINKEDIN },
  { icon: "whatsapp", url: `https://wa.me/${whatsappNumber}` },
];

export const PROJECT_FILTERS: Array<"All" | ProjectCategory> = [
  "All",
  "Web",
  "Mobile",
  "AI",
  "SaaS",
];

export const SKILL_FREQUENCY: FrequencySkillGroup[] = [
  {
    frequency: "Daily",
    skills: [
      { label: "React", techLabel: "React" },
      { label: "Next.js", techLabel: "Next.js" },
      { label: "TypeScript", techLabel: "Typescript" },
      { label: "Node.js", techLabel: "Node.js" },
      { label: "FastAPI", techLabel: "FastAPI" },
      { label: "Tailwind CSS", techLabel: "Tailwindcss" },
      { label: "Git", techLabel: "Git" },
    ],
  },
  {
    frequency: "Weekly",
    skills: [
      { label: "React Native", techLabel: "React Native" },
      { label: "Expo", techLabel: "Expo" },
      { label: "PostgreSQL", techLabel: "PostgreSQL" },
      { label: "Prisma", techLabel: "Prisma" },
      { label: "GraphQL", techLabel: "GraphQL" },
      { label: "TanStack Query", techLabel: "TanStack Query" },
      { label: "AI APIs" },
      { label: "Python", techLabel: "Python" },
    ],
  },
  {
    frequency: "Occasionally",
    skills: [
      { label: "MongoDB", techLabel: "MongoDB" },
      { label: "Socket.io", techLabel: "Socket.io" },
      { label: "Gatsby", techLabel: "Gatsby" },
      { label: "Docker", techLabel: "Docker" },
      { label: "Azure AD B2C", techLabel: "Azure AD B2C" },
    ],
  },
];

export const HOW_I_BUILD: HowIBuildPrinciple[] = [
  {
    title: "Own the full feature",
    description:
      "I take work from API design and data models through UI polish and release, across the stack.",
  },
  {
    title: "Structure first",
    description:
      "Auth, access control, caching, and clear service boundaries come before visual polish so systems stay maintainable.",
  },
  {
    title: "Practical AI",
    description:
      "I use LLMs and AI APIs inside real product flows such as game tooling, student chat, and automation.",
  },
  {
    title: "Web and mobile as one product",
    description:
      "Shared TypeScript contracts with GraphQL or REST, plus Expo and React Native when both surfaces are required.",
  },
];

export const OPEN_SOURCE_TOOLS: OpenSourceTool[] = [
  {
    name: "AI Assistant Platform",
    brand: "Open Source",
    tagline: "Open source assistant with chat, memory, and voice",
    description:
      "Streaming chat, memory, multi-agent planning, and voice across Expo, Next.js, Fastify, and FastAPI, with Qdrant for retrieval and observability in the stack.",
    githubUrl: EXTERNAL_LINKS.AI_ASSISTANT_GITHUB,
    blogSlug: "building-ai-assistant-platform",
    coverImage: "/images/blog/ai-assistant-cover.svg",
    highlights: [
      "Mobile and web clients",
      "Voice STT to LLM to TTS",
      "Catalog driven tools",
      "Tilt and Docker local setup",
    ],
  },
  {
    name: "create-fullstack-app",
    brand: "Dartix",
    tagline: "Project scaffolding for stacks I use in production",
    description:
      "CLI that asks for frontend, backend, database, auth, and Docker options, then generates a ready project tree. Published as @dartix-software-solutions/create-fullstack-app.",
    installCommand:
      "npx @dartix-software-solutions/create-fullstack-app@latest",
    npmUrl: EXTERNAL_LINKS.CREATE_FULLSTACK_NPM,
    githubUrl: EXTERNAL_LINKS.CREATE_FULLSTACK_GITHUB,
    blogSlug: "building-create-fullstack-app-cli",
    coverImage: "/images/blog/create-fullstack-cli-cover.png",
    highlights: [
      "Interactive stack selection",
      "TypeScript templates",
      "Auth and Docker options",
      "Automated npm releases",
    ],
  },
  {
    name: "Media Bunch",
    brand: "Dartix",
    tagline: "Cross-post and schedule social content from one place",
    description:
      "Full-stack social cross-posting platform from Dartix. Compose and schedule posts, connect Discord, Facebook, Instagram, LinkedIn, Reddit, Telegram, Threads, and Twitter. Next.js 15 frontend, Express API with Passport/JWT, Agenda scheduling, and MongoDB.",
    githubUrl: EXTERNAL_LINKS.MEDIA_BUNCH_GITHUB,
    websiteUrl: EXTERNAL_LINKS.MEDIA_BUNCH_LIVE,
    coverImage: "/images/tools/media-bunch.png",
    highlights: [
      "Multi-network posting in one flow",
      "Passport OAuth for major social networks",
      "Agenda-based scheduling jobs",
      "Live at media-bunch-frontend.vercel.app",
    ],
  },
  {
    name: "Dartix Studio",
    brand: "Dartix",
    tagline: "From Vision to Product",
    description:
      "Software studio founded by Devesh Maurya in Mumbai. Dartix builds web apps, mobile apps, backend APIs, AI solutions, and digital products—plus free browser tools on dartix.live for image editing, AI image studio, QR, voice, and code formatting.",
    websiteUrl: EXTERNAL_LINKS.DARTIX,
    coverImage: "/images/tools/dartix-logo.png",
    highlights: [
      "Custom software, cloud, and AI delivery",
      "Web, mobile, and backend systems",
      "Free tools at dartix.live/tools",
      "Client-first, result-driven process",
    ],
  },
];

/** @deprecated use OPEN_SOURCE_TOOLS */
export const OPEN_SOURCE_TOOL = OPEN_SOURCE_TOOLS[0];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { label: "AI Integration", icon: Brain },
      { label: "LLM Implementation", icon: Cpu },
      { label: "OpenAI / NVIDIA APIs", icon: Zap },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { label: "AWS Services", icon: Cloud },
      { label: "CI/CD Implementation", icon: Workflow },
    ],
  },
  {
    name: "Development",
    icon: Code,
    skills: [
      { label: "REST API Design", icon: Code },
      { label: "System Architecture", icon: Server },
      { label: "Microservices", icon: Network },
    ],
  },
];

export const TECHNOLOGIES: TechDetailsType[] = [
  {
    label: "React Native",
    logo: LogoReactNative,
    url: "https://reactnative.dev/",
  },
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  { label: "React", logo: LogoReact, url: "https://react.dev/" },
  { label: "Next.js", logo: LogoNextjs, url: "https://nextjs.org/" },
  { label: "Gatsby", logo: LogoGatsby, url: "https://www.gatsbyjs.com/" },
  { label: "Node.js", logo: LogoNodejs, url: "https://nodejs.org/en" },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  { label: "Keystonejs", logo: Keystone, url: "https://keystonejs.com/" },
  { label: "MongoDB", logo: LogoMongoDB, url: "https://www.mongodb.com/" },
  { label: "MUI", logo: LogoMUI, url: "https://mui.com/" },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  { label: "Figma", logo: LogoFigma, url: "https://www.figma.com/" },
  { label: "Git", logo: LogoGit, url: "https://git-scm.com/" },
  { label: "Vite", logo: LogoVite, url: "https://vitejs.dev/" },
  { label: "Redux", logo: LogoRedux, url: "https://redux.js.org/" },
  {
    label: "TanStack Query",
    logo: LogoTanstack,
    url: "https://tanstack.com/query/",
  },
  {
    label: "Expo",
    logo: LogoExpo,
    darkModeLogo: LogoExpoLight,
    url: "https://expo.dev/",
  },
  { label: "GraphQL", logo: LogoGraphQL, url: "https://graphql.org/" },
  { label: "Python", logo: LogoPython, url: "https://www.python.org/" },
  {
    label: "FastAPI",
    logo: LogoFastAPI,
    url: "https://fastapi.tiangolo.com/",
  },
  {
    label: "Docker",
    logo: LogoDocker,
    url: "https://www.docker.com/",
  },
  {
    label: "Azure AD B2C",
    logo: LogoAzureAd,
    url: "https://learn.microsoft.com/en-us/azure/active-directory-b2c/",
  },
  {
    label: "Prisma",
    logo: LogoPrisma,
    url: "https://www.prisma.io/",
  },
];

export function getTechLogo(label: string) {
  return TECHNOLOGIES.find(
    (t) => t.label.toLowerCase() === label.toLowerCase()
  );
}

export const TRUSTED_BY = [
  {
    name: "Bullshark",
    logo: BullShark,
    url: "https://bullshark.studio/",
  },
  {
    name: "Aicade",
    logo: Aicade,
    url: "https://aicade.io",
  },
  {
    name: "LabLamb Works",
    logo: labLambworks,
    url: "https://lablambworks.com",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: BullShark,
    logoAlt: "Bullshark",
    company: "Bullshark",
    companyUrl: "https://bullshark.studio/",
    position: "Full Stack Engineer",
    startDate: new Date(2025, 8),
    currentlyWorkHere: true,
    summary: [
      "Building full-stack solutions with React, Next.js, Node.js, Expo, and Azure OpenAI (ThriveOn wizards).",
      "Shipping cross-platform mobile apps with high performance on iOS and Android.",
      "Integrating AI models for automation, coaching wizards, and intelligent UX.",
    ],
  },
  {
    logo: Aicade,
    logoAlt: "Aicade",
    company: "Aicade",
    companyUrl: "https://aicade.io",
    position: "Full Stack Engineer",
    startDate: new Date(2024, 11),
    endDate: new Date(2025, 8),
    currentlyWorkHere: false,
    summary: [
      "Built 2D game generation tools with Vite, Next.js, Redux, and TanStack Query.",
      "Integrated AI-driven APIs for asset recommendations and procedural content.",
      "Designed interactive UI for game level design and optimized performance.",
    ],
  },
  {
    logo: labLambworks,
    logoAlt: "LabLamb Works",
    company: "LabLamb Works Limited",
    companyUrl: "https://lablambworks.com",
    position: "Full Stack Developer",
    startDate: new Date(2022, 2),
    endDate: new Date(2024, 9),
    currentlyWorkHere: false,
    summary: [
      "Shipped Airhub and multiple client products across web and mobile.",
      "Stack: React Native, React, Next.js, Gatsby, TypeScript, PostgreSQL, GraphQL, MongoDB.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Lands Authority Platform",
    slug: "lands-authority",
    description:
      "Enterprise employee time tracking and admin platform for a government / corporate client: Azure AD B2C SSO, punch in/out APIs, RBAC, SQL Server via Prisma, Web Worker timers, and .NET Aspire orchestration.",
    url: "",
    previewImage: LandsAuthority,
    technologies: [
      "React",
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS 4",
      "Prisma",
      "SQL Server",
      "NextAuth.js v4",
      "Azure AD B2C",
      "Web Workers",
      ".NET Aspire",
      "Jest",
      "Docker",
    ],
    androidLink: "",
    iosLink: "",
    categories: ["Web", "SaaS"],
    featured: true,
    role: "Full Stack Engineer — frontend, API routes, auth, Prisma models, and Aspire-local delivery",
    overview:
      "Lands Authority is a secure time-tracking and employee management system. Admins manage employees, departments, flags, and reports. Employees punch in/out from a self-service dashboard with an accurate session timer. Identity is Azure AD B2C (government e-ID capable). Data lives in SQL Server through Prisma. Local services run under .NET Aspire.",
    problem:
      "The client needed auditable punch in/out, department-level admin controls, and SSO that fits a government identity stack—not a generic timesheet SaaS with weak auth.",
    solution:
      "Shipped a Next.js 15 App Router product with authenticated admin and employee areas, NextAuth v4 + Azure AD B2C, Prisma against SQL Server, punch and configuration APIs, cron-driven missed-punch flags, Web Workers for the active timer, and Aspire for container orchestration.",
    frontend: {
      summary:
        "Next.js 15 + React 19 App Router UI with separate admin and employee shells, 25+ Tailwind components, and a Web Worker–backed session timer.",
      stack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "Web Workers",
        "Jest + RTL",
      ],
      details: [
        "App Router split: (authenticated)/admin for employees, departments, reports, settings; (authenticated)/employee/dashboard for punch and history",
        "Design system around teal primary (#00A997) with Inter typography and reusable modals, tables, headers, and layouts",
        "SessionTimer uses a Web Worker so punch duration stays accurate without blocking the main thread",
        "Client services (adminApiService, punchHistoryService, reportService, etc.) call typed API routes",
        "Middleware + route-guards.ts enforce admin vs employee access before render",
      ],
    },
    backend: {
      summary:
        "Next.js API routes + server cron tasks on Prisma/SQL Server, with NextAuth JWT validation on every endpoint.",
      stack: [
        "Next.js Route Handlers",
        "Prisma (SQL Server)",
        "NextAuth.js v4",
        "Azure AD B2C",
        "Cron service",
        ".NET Aspire",
      ],
      details: [
        "POST /api/punch for punch in/out; configuration, employees, flags, and reports routes for admin operations",
        "Prisma models: Employee, Role, Department, PunchHistory, WorkingHours, DailyWorkingHours, Configuration, FlagConfiguration, EmployeeFlag, plus NextAuth Account/User",
        "cronService + tasks auto-flag employees who miss punch confirmations",
        "DAL under lib/dal and server operations keep query logic out of UI",
        "Aspire AppHost orchestrates Dockerized SQL Server and the web app for local parity",
      ],
    },
    modules: [
      {
        name: "Admin · Employees",
        description: "CRUD for staff profiles, roles, and department assignment",
      },
      {
        name: "Admin · Departments & flags",
        description: "Org units plus lateness/absence flag rules and applied flags",
      },
      {
        name: "Employee · Punch dashboard",
        description: "Punch in/out, live timer, and punch history",
      },
      {
        name: "Reports & configuration",
        description: "Exports/analytics and grace-period / alert configuration",
      },
    ],
    apiHighlights: [
      "POST /api/punch — punch in/out with session timing",
      "GET/POST /api/employees — admin employee list and create",
      "GET/PUT /api/configuration — alert and grace settings",
      "GET/POST /api/flags — flag configuration",
      "GET /api/reports — report generation",
    ],
    challenges: [
      "Wiring NextAuth v4 to Azure AD B2C across admin and employee roles with server route guards",
      "Punch API design plus accurate client timers via Web Workers",
      "Cron flags for missed confirmations without blocking interactive UI",
      "Keeping Prisma SQL Server models aligned with Aspire-local services",
    ],
    impact: [
      "Enterprise SSO for time tracking and admin operations",
      "Clear RBAC separating admin and employee workflows",
      "Reliable punch sessions with isolated timer work",
      "Typed Next.js surface ready to grow with Aspire-backed services",
    ],
    architecture: {
      nodes: [
        "Next.js 15 App Router (admin + employee)",
        "NextAuth v4 + Azure AD B2C",
        "API routes + cronService",
        "Prisma → SQL Server",
        "Web Worker SessionTimer",
        ".NET Aspire + Docker",
      ],
    },
  },
  {
    name: "ThriveOn Digital Platform",
    slug: "thriveon",
    description:
      "Health and wellness platform: Expo React Native client, Express thriveon-api with Azure OpenAI Assistants for purpose/goal/PSM wizards, Strapi 5 CMS, WordPress plugin, Revolut payments, and .NET Aspire orchestration.",
    url: "",
    previewImage: ThriveOn,
    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "Express",
      "Azure OpenAI",
      "OpenAI Assistants API",
      "Strapi 5",
      "PostgreSQL",
      "WordPress",
      "PHP",
      "Revolut Checkout",
      ".NET Aspire",
      "React Hook Form",
      "Zod",
      "Passport",
    ],
    androidLink: "",
    iosLink: "",
    categories: ["Mobile", "Web", "SaaS", "AI"],
    featured: true,
    role: "Full Stack Engineer — Expo app, thriveon-api (Azure OpenAI wizards), Strapi/WordPress surfaces, shared packages",
    overview:
      "ThriveOn is a multi-surface wellness product from the Bullshark thriveon-digital-platform monorepo. Clients use an Expo Router app for coaching, courses, events, toolkit, account, and wizard journeys. A shared Express package (thriveon-api) handles auth, bookings, payments webhooks, growth plans, and AI-assisted wizards via Azure OpenAI (Assistants API threads/runs). Content is administered in Strapi 5; a WordPress plugin bridges marketing pages to Strapi. Aspire orchestrates local services.",
    problem:
      "Wellness journeys (purpose, goals, habits, coaching, courses, events) needed one mobile product plus CMS and website embedding—and guided wizards that could generate personalized coaching-style guidance, not static forms alone.",
    solution:
      "Shipped and extended the Expo client, thriveon-api Express services (including Azure OpenAI Assistants for Purpose, Goal, and PSM wizards), Strapi 5 content APIs, shared thriveon-data types, WordPress shortcode/PHP Strapi client, Revolut checkout/webhooks, and Aspire-hosted local delivery.",
    frontend: {
      summary:
        "Expo ~54 app with file-based Expo Router groups for auth, tabs, wizard flows, and WordPress WebView integration.",
      stack: [
        "Expo 54",
        "React Native",
        "Expo Router",
        "TypeScript",
        "React Hook Form + Zod",
        "Revolut Checkout",
        "Reanimated",
        "thriveon-data shared types",
      ],
      details: [
        "Tab surfaces: Home, Coaching, Courses, Events, Toolkit, Account, Thriveon Wizard (purpose / goals / habits / change actions)",
        "Auth, public onboarding, and nested protected (inner) screens via route groups",
        "(web-integration) WebView path for WordPress-hosted content",
        "API client calls into thriveon-api for wizards, profile, courses, events, bookings, and payments",
        "Payments via @revolut/checkout; media via expo-image / image-picker; markdown and HTML renderers for CMS content",
      ],
    },
    backend: {
      summary:
        "Express thriveon-api with Azure OpenAI Assistants for wizard messaging, Strapi 5 CMS, WordPress PHP Strapi client, Revolut/Reach360 webhooks, Passport auth providers, Aspire orchestration.",
      stack: [
        "Express (thriveon-api)",
        "Azure OpenAI (openai SDK AzureOpenAI client)",
        "Assistants API (threads / runs / messages)",
        "Strapi 5.18",
        "PostgreSQL / SQLite",
        "Passport (incl. Azure AD OAuth paths)",
        "Revolut webhooks",
        "WordPress PHP plugin",
        ".NET Aspire",
      ],
      details: [
        "Azure OpenAI client configured with AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_KEY, and deployment (e.g. gpt-4.1) via purposeWizardConfig / goalWizardConfig / psmWizardConfig",
        "Wizard controllers create Assistants threads, post user context (focus area, values, passions, goals), poll runs, and return assistant message content to the app",
        "Routes for purpose, goal, PSM, daily-habit, and change-action wizards plus growth plans and change-action reports",
        "Auth routes with Passport strategies; profile, courses, events, books, groups, posts, perks, orders, transactions",
        "SimplyBookMe booking integration; Revolut and Reach360 webhook handlers",
        "Strapi content types + bootstrap for wellness domains; WordPress thriveon-strapi-client.php and exercise shortcodes for site parity",
        "Aspire AppHost runs Strapi, DB, API, and related containers locally",
      ],
    },
    modules: [
      {
        name: "AI wizards (Azure OpenAI)",
        description:
          "Purpose, Goal, and PSM wizards using Azure OpenAI Assistants threads/runs for personalized guidance",
      },
      {
        name: "Coaching & courses",
        description: "Session booking/viewing and course library consumption",
      },
      {
        name: "Events, toolkit & habits",
        description:
          "Calendar registration, wellness toolkit, daily habit and change-action flows",
      },
      {
        name: "CMS & WordPress bridge",
        description:
          "Strapi 5 admin plus PHP shortcodes/client for marketing ↔ app content",
      },
    ],
    apiHighlights: [
      "POST purpose/goal/PSM wizard messages → Azure OpenAI Assistants thread + run polling",
      "Save purpose/goal outcomes onto user profile via thriveon-data services",
      "Auth sign-in callbacks (incl. Azure OAuth paths) with mobile deep-link exchange codes",
      "Revolut checkout webhooks and SimplyBookMe booking routes",
      "Strapi REST from WordPress via thriveon-strapi-client.php",
    ],
    challenges: [
      "Reliable Azure OpenAI Assistants run polling and error envelopes for mobile wizards",
      "Keeping Expo, thriveon-api, and Strapi models aligned across coaching, courses, events, and toolkit",
      "WordPress plugin integration without forking the content pipeline",
      "Aspire-local multi-service setup matching Strapi/Postgres/API parity",
    ],
    impact: [
      "AI-assisted wellness wizards on Azure OpenAI inside the same product as courses and coaching",
      "Single mobile surface for core wellness journeys",
      "CMS-driven content ops in Strapi 5 with WordPress embedding",
      "Shared thriveon-api / thriveon-data packages that shortened feature delivery",
    ],
    architecture: {
      nodes: [
        "Expo client (Expo Router)",
        "Express thriveon-api",
        "Azure OpenAI Assistants",
        "Strapi 5 REST API",
        "PostgreSQL / SQLite",
        "WordPress plugin → Strapi",
        ".NET Aspire orchestration",
      ],
    },
  },
  {
    name: "Aicade 2D Game Builder",
    slug: "aicade",
    description:
      "AI-assisted 2D game builder: React/Vite/Next.js editor frontend plus FastAPI services for generation, asset recommendations, and procedural content into a Phaser runtime.",
    url: "https://create.aicade.io/",
    previewImage: Aicade,
    technologies: [
      "React",
      "Next.js",
      "Vite",
      "TypeScript",
      "Redux",
      "TanStack Query",
      "Tailwind CSS",
      "Phaser",
      "FastAPI",
      "Python",
      "REST APIs",
      "AI / LLM APIs",
    ],
    androidLink: "",
    iosLink: "",
    categories: ["Web", "AI", "SaaS"],
    featured: true,
    role: "Full Stack Engineer — game builder frontend, FastAPI AI services, and API integration",
    overview:
      "Aicade lets creators turn a game idea into a playable Phaser 2D experience. The product surface is a high-interaction editor (Vite/React and Next.js product pages) with Redux for editor state and TanStack Query for server data. Generation, asset recommendation, and procedural content run through FastAPI backends that wrap model providers and return structured payloads the editor can apply to the scene graph.",
    problem:
      "Prototyping a 2D game usually means hand-building assets, levels, and wiring before anything is playable. Creators needed an editor that could propose assets and structure while staying responsive under heavy client state.",
    solution:
      "Owned frontend architecture for the builder and product UI, and FastAPI services that expose generation and recommendation endpoints. The editor consumes those APIs, applies results into Phaser scenes, and keeps Redux + Query caches coherent during long-running generation.",
    frontend: {
      summary:
        "Interactive 2D builder UI: Vite React editor, Next.js product surfaces, Redux for scene/editor state, TanStack Query for FastAPI-backed resources.",
      stack: [
        "React",
        "Vite",
        "Next.js",
        "TypeScript",
        "Redux",
        "TanStack Query",
        "Tailwind CSS",
        "Phaser",
      ],
      details: [
        "Level/editor canvas with Phaser for playable preview and interactive level design",
        "Redux slices for selection, tool mode, entity trees, and in-progress generation jobs",
        "TanStack Query for listing assets, polling generation status, and invalidating after FastAPI completions",
        "Next.js surfaces for marketing/product entry; Vite app for the heavyweight editor tooling",
        "Optimistic UI and loading states so AI latency does not freeze the canvas",
        "Typed API client mapping FastAPI JSON schemas into editor-friendly models",
      ],
    },
    backend: {
      summary:
        "FastAPI (Python) services for AI game generation, asset recommendations, and procedural content—REST endpoints consumed by the React editor.",
      stack: [
        "FastAPI",
        "Python",
        "Pydantic",
        "Uvicorn",
        "LLM / AI provider APIs",
        "REST + JSON schemas",
      ],
      details: [
        "FastAPI routers for generate-game / recommend-assets / procedural-level style operations with Pydantic request/response models",
        "Async handlers calling model providers, normalizing outputs into structured game/asset DTOs for Phaser",
        "Status and result endpoints so the frontend can poll long-running generation via TanStack Query",
        "Validation and error envelopes that the editor can surface without crashing the scene",
        "Separation of product Next.js BFF-style calls from the Vite editor’s direct FastAPI client where latency matters",
        "Environment-based provider keys and timeouts tuned for interactive creator workflows",
      ],
    },
    modules: [
      {
        name: "Game editor",
        description: "Canvas, tools, entity inspector, and Phaser playable preview",
      },
      {
        name: "AI generation",
        description: "Prompt-to-structure flows backed by FastAPI generation routes",
      },
      {
        name: "Asset recommendations",
        description: "Suggested sprites/audio/tiles returned as typed asset payloads",
      },
      {
        name: "Procedural content",
        description: "Level/layout suggestions applied into the editor scene graph",
      },
    ],
    apiHighlights: [
      "FastAPI POST generate — structured game/level payloads from creator prompts",
      "FastAPI GET/POST assets — recommendation and retrieval for editor libraries",
      "FastAPI job/status — poll long-running generation for TanStack Query",
      "Editor applies API DTOs into Redux + Phaser without full page reloads",
    ],
    challenges: [
      "Keeping editor UI responsive while FastAPI generation jobs are in flight",
      "Stable contracts between Pydantic schemas and TypeScript client types",
      "Coherent Redux scene state when AI overwrites large subgraphs",
      "Balancing Vite editor tooling with Next.js product surfaces",
    ],
    impact: [
      "Faster idea → playable 2D prototype path for creators",
      "AI assets and procedural content inside the same editor loop",
      "Clear FE/BE split: React editor ↔ FastAPI AI services ↔ Phaser runtime",
    ],
    architecture: {
      nodes: [
        "Next.js product + Vite React editor",
        "Redux + TanStack Query",
        "FastAPI AI services (Pydantic)",
        "LLM / asset providers",
        "Phaser 2D runtime",
      ],
    },
  },
  {
    name: "Lamima Workflow Management",
    slug: "lamima-workflow",
    description:
      "Internal operations platform for clients, employees, projects, workflows, quotations, timesheets, and reports—Next.js 16, Prisma, PostgreSQL, NextAuth v5, and .NET Aspire.",
    url: "",
    previewImage: "",
    technologies: [
      "React 19",
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Prisma 7",
      "PostgreSQL",
      "NextAuth.js v5",
      "TanStack Query",
      "TanStack Table",
      "React Hook Form",
      "Zod",
      "Radix UI",
      ".NET Aspire",
      "Jest",
    ],
    androidLink: "",
    iosLink: "",
    categories: ["Web", "SaaS"],
    featured: true,
    role: "Full Stack Engineer — App Router modules, server actions, Prisma repositories, auth",
    overview:
      "Lamima is a full-stack workflow and project operations system. It covers CRM-style clients, employee HR views, project tracking, a workflow designer with runnable instances and stages, quotations, timesheets, notifications, reports, and settings. The app uses Next.js 16 App Router with Server Components, Server Actions, a repository/service layer over Prisma/PostgreSQL, and NextAuth v5 sessions. Aspire runs the local stack.",
    problem:
      "Operations data (clients, staff, projects, quotes, time, pipeline stages) lived in disconnected tools. The business needed one authenticated system with clear modules and role-aware access.",
    solution:
      "Built a Next.js 16 dashboard monorepo with protected (dashboard) routes per domain, Server Actions + API routes for mutations, Prisma repositories and services for business logic, TanStack Query/Table on the client, and NextAuth v5 with a Prisma adapter.",
    frontend: {
      summary:
        "Next.js 16 App Router dashboard with RSC + client islands, Radix/Tailwind UI, TanStack Table for dense ops grids, and dark mode via next-themes.",
      stack: [
        "Next.js 16 + Turbopack",
        "React 19",
        "Tailwind CSS 4",
        "TanStack Query + Table",
        "React Hook Form + Zod",
        "Radix UI",
        "Sonner",
        "next-themes",
      ],
      details: [
        "Route groups: (auth) for login/register; (dashboard) for clients, employees, projects, workflows, instances, stages, quotations, timesheets, reports, notifications, settings",
        "Server Components fetch where possible; client components for interactive tables and forms",
        "TanStack Table for filterable/sortable operational lists",
        "RHF + Zod for quotations, employee, and project forms with Sonner toasts",
        "Shared UI primitives (Dialog, etc.) via Radix and CVA/clsx utilities",
      ],
    },
    backend: {
      summary:
        "Next.js Server Actions and Route Handlers over a repository → service → Prisma stack on PostgreSQL, with NextAuth v5 sessions.",
      stack: [
        "Next.js Server Actions",
        "Route Handlers",
        "Prisma 7",
        "PostgreSQL",
        "NextAuth.js v5",
        "bcryptjs",
        ".NET Aspire",
      ],
      details: [
        "repositories/ abstract Prisma queries; services/ hold business rules for workflows, quotes, timesheets",
        "Substantial Prisma schema covering clients, employees, projects, workflow templates, instances, stages, quotations, timesheets, notifications",
        "NextAuth v5 beta with Prisma adapter and database-backed sessions",
        "proxy.ts for controlled external API routing when needed",
        "Aspire AppHost + Docker Postgres for local orchestration; Jest for unit/integration coverage",
      ],
    },
    modules: [
      {
        name: "Clients & employees",
        description: "CRM contacts/companies and staff profiles with roles",
      },
      {
        name: "Projects & quotations",
        description: "Project lifecycle plus quote generation and approval paths",
      },
      {
        name: "Workflows · instances · stages",
        description: "Template designer, running instances, and pipeline stages",
      },
      {
        name: "Timesheets & reports",
        description: "Time logging and analytics dashboards for operations",
      },
    ],
    apiHighlights: [
      "Server Actions for form mutations across CRM, projects, and timesheets",
      "Repository pattern isolating Prisma from UI and actions",
      "NextAuth v5 session checks on dashboard and mutation paths",
      "Seed scripts for realistic workflow/demo data",
    ],
    challenges: [
      "Modeling workflows/instances/stages without a heavy external BPMN engine",
      "Keeping RSC + Server Actions and TanStack Query caches consistent",
      "Large Prisma schema maintainability across many ops modules",
      "NextAuth v5 beta behavior while still shipping secure sessions",
    ],
    impact: [
      "Single internal system for clients, projects, workflows, quotes, and time",
      "Clear layered architecture (UI → actions → services → repositories → Prisma)",
      "Dashboard modules that ops can grow without rewriting auth or data access",
      "Aspire-local environment matching containerized Postgres",
    ],
    architecture: {
      nodes: [
        "Next.js 16 App Router (RSC + client)",
        "Server Actions / API routes",
        "Services + repositories",
        "Prisma → PostgreSQL",
        "NextAuth v5",
        ".NET Aspire",
      ],
    },
  },
  {
    name: "YoChatGPT",
    slug: "yochatgpt",
    description:
      "Student learning platform with AI chat rooms and interactive sessions—Next.js, Material UI, MongoDB, and ChatGPT API.",
    url: "https://www.yochatgpt.io/",
    previewImage: YoChatGPT,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "MongoDB",
      "ChatGPT API",
    ],
    androidLink: "",
    iosLink: "",
    categories: ["Web", "AI", "SaaS"],
    featured: true,
    role: "Full Stack Engineer — product UI, chat rooms, MongoDB persistence, ChatGPT integration",
    overview:
      "YoChatGPT focuses on structured study chats rather than a single generic bot. Students join rooms and sessions; conversations persist in MongoDB; responses stream from the ChatGPT API into Material UI surfaces.",
    problem:
      "Students needed shared, study-oriented AI rooms—not a disposable one-off chatbot without history or structure.",
    solution:
      "Shipped a Next.js TypeScript app with MUI, MongoDB-backed rooms/sessions, and ChatGPT API integration for interactive learning chats.",
    frontend: {
      summary:
        "Next.js + Material UI for rooms, session views, and streaming chat UX.",
      stack: ["Next.js", "React", "TypeScript", "Material UI"],
      details: [
        "Room and session navigation for concurrent student use",
        "Chat UI tuned for streaming tokens without janky list updates",
        "Typed client models for rooms, messages, and session metadata",
      ],
    },
    backend: {
      summary:
        "Next.js API routes + MongoDB persistence with ChatGPT API calls for completions.",
      stack: ["Next.js API routes", "MongoDB", "ChatGPT API"],
      details: [
        "Persist rooms, sessions, and message history in MongoDB",
        "Prompt/context assembly for study workflows before provider calls",
        "Rate and error handling so failed generations do not corrupt room state",
      ],
    },
    challenges: [
      "Concurrent room state and session consistency",
      "Useful study prompting vs generic chat noise",
      "Streaming responses inside Material UI lists",
      "Reliable conversation persistence in MongoDB",
    ],
    impact: [
      "Live student chat rooms powered by ChatGPT",
      "Interactive learning sessions on a typed Next.js stack",
      "MongoDB-backed history for rooms and sessions",
    ],
    architecture: {
      nodes: [
        "Next.js + Material UI",
        "API routes",
        "ChatGPT API",
        "MongoDB",
      ],
    },
  },
  {
    name: "Airhub",
    slug: "airhub",
    description:
      "Social platform for airsoft enthusiasts covering community, shopping, and events on web and mobile.",
    url: "https://www.airhub-app.com/",
    previewImage: Airhub,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "GraphQL",
      "Expo",
      "React Native",
      "Keystone",
      "Postgres",
      "Socket.io",
    ],
    androidLink: "https://play.google.com/store/apps/details?id=com.airhub.app",
    iosLink: "https://apps.apple.com/us/app/airhub/id1661240899",
    categories: ["Web", "Mobile", "SaaS"],
  },
  {
    name: "IncentivizED",
    slug: "incentivized",
    description:
      "Student rewards app that encourages progress and recognizes achievement on web and mobile.",
    url: "https://incentivized.app/",
    previewImage: IncentivizED,
    technologies: [
      "React",
      "Gatsby",
      "TypeScript",
      "Material UI",
      "Expo",
      "React Native",
      "GraphQL",
      "Keystone",
      "Postgres",
    ],
    androidLink:
      "https://play.google.com/store/apps/details?id=hk.eduhk.IncentivizED",
    iosLink: "https://apps.apple.com/us/app/incentivized/id6460642742",
    categories: ["Web", "Mobile"],
  },
  {
    name: "YLHH",
    slug: "ylhh",
    description:
      "Mobile app connecting a traditional Hong Kong snack store with its regular customers.",
    url: "",
    previewImage: YLHH,
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Material UI",
      "GraphQL",
      "Keystone",
      "Postgres",
    ],
    androidLink: "https://play.google.com/store/apps/details?id=com.ylhh.app",
    iosLink: "https://apps.apple.com/us/app/yuen-long-hop-hing/id6473820687",
    categories: ["Mobile"],
  },
  {
    name: "LabLamb Works Official Website",
    slug: "lablamb-website",
    description: "Company website built with Gatsby, React, and TypeScript.",
    url: "https://lablambworks.com/",
    previewImage: LabLamb,
    technologies: ["React", "Gatsby", "TypeScript", "Material UI"],
    androidLink: "",
    iosLink: "",
    categories: ["Web"],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Nathan Engelbreth Diegues",
    personAvatar: Nathan,
    title: "Senior Full Stack Developer, Bullshark",
    testimonial:
      "I supervised Devesh from roughly October 2025 through February 2026 at Bullshark. He showed strong commitment, delivered what was required, and steadily improved his skills. He was open to giving and receiving feedback, and his work became essential across multiple company projects.",
  },
  {
    personName: "Sreedharan Namboodiri C",
    personAvatar: Sreedharan,
    title: "Senior Full Stack Engineer, formerly Aicade",
    testimonial:
      "Devesh moved quickly on React and Next.js features at Aicade, handled AI integrations carefully, and kept frontend quality high while shipping on schedule.",
  },
  {
    personName: "Meet Patel",
    personAvatar: Meet,
    title: "Senior Full Stack Developer",
    testimonial:
      "Devesh was easy to work with and cared about the project succeeding. He knows the MERN stack well and handled my application without friction.",
  },
];

export function getProjectBySlug(slug: string): ProjectDetails | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectDetails[] {
  return PROJECTS.filter((p) => p.featured);
}
