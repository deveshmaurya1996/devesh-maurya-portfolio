import {
  Github,
  Twitter,
  LucideLinkedin,
  Brain,
  Cloud,
  Code,
  Database,
  GitBranch,
  Server,
  Zap,
  Cpu,
  Network,
  Shield,
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

import labLambworks from "/public/images/logos/logo-lablamb.png";
import YoChatGPT from "/public/images/yogpt.png";
import Airhub from "/public/images/airhub-thumbnail.png";
import IncentivizED from "/public/images/IncentivizEDNew.png";
import YLHH from "/public/images/YLHHThumbnail.png";
import LabLamb from "/public/images/LabLambWorks.png";
import Meet from "/public/images/meet.jpg";
import Aicade from "/public/images/Aicade.svg";
import Ahenstech from "/public/images/ahenstech_logo.jpeg";
import BullShark from "/public/images/bullshark_studio_logo.jpg";
import {
  ExperienceDetails,
  ProjectDetails,
  TechDetailsType,
  TestimonialDetails,
  SkillCategory,
  SkillItem,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/deveshmaurya1996",
  GITHUB_REPO: "https://github.com/deveshmaurya1996/devesh-maurya-portfolio",
  TWITTER: "https://x.com/deveshmaurya3",
};

const whatsappNumber = "919670551347";

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  // {
  //   label: "Testimonials",
  //   href: "#testimonials",
  // },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/deveshmaurya1996",
  },
  {
    icon: Twitter,
    url: "https://x.com/deveshmaurya3",
  },
  {
    icon: LucideLinkedin,
    url: "https://www.linkedin.com/in/deveshmaurya1996/",
  },
  {
    icon: "whatsapp",
    url: `https://wa.me/${whatsappNumber}`,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    icon: Brain,
    skills: [
      {
        label: "AI Integration",
        icon: Brain,
      },
      {
        label: "LLM Implementation",
        icon: Cpu,
      },
      {
        label: "OpenAI API",
        icon: Zap,
      },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      {
        label: "AWS Services",
        icon: Cloud,
      },
      {
        label: "CI/CD Implementation",
        icon: Workflow,
      },
    ],
  },
  {
    name: "Development",
    icon: Code,
    skills: [
      {
        label: "REST API Design",
        icon: Code,
      },
      {
        label: "System Architecture",
        icon: Server,
      },
      {
        label: "Microservices",
        icon: Network,
      },
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
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Gatsby",
    logo: LogoGatsby,
    url: "https://www.gatsbyjs.com/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
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
  {
    label: "Keystonejs",
    logo: Keystone,
    url: "https://keystonejs.com/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "MUI",
    logo: LogoMUI,
    url: "https://mui.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "Vite",
    logo: LogoVite,
    url: "https://vitejs.dev/",
  },
  {
    label: "Redux",
    logo: LogoRedux,
    url: "https://redux.js.org/",
  },
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
  {
    label: "GraphQL",
    logo: LogoGraphQL,
    url: "https://graphql.org/",
  },
  {
    label: "Python",
    logo: LogoPython,
    url: "https://www.python.org/",
  },
  {
    label: "FastAPI",
    logo: LogoFastAPI,
    url: "https://fastapi.tiangolo.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: BullShark,
    logoAlt: "Bull Shark",
    company: "Bull Shark",
    companyUrl: "https://bullshark.studio/",
    position: "Full Stack Developer",
    startDate: new Date(2025, 8),
    currentlyWorkHere: true,
    summary: [
      "We build full-stack solutions using modern frameworks (React, Next.js, Node.js, FastAPI).",
      "Our mobile apps leverage cross-platform tech for high performance on iOS & Android.",
      "We integrate AI models for automation, computer vision, and intelligent user experiences.",
    ],
  },
  {
    logo: Ahenstech,
    logoAlt: "Ahenstech",
    company: "Ahenstech",
    companyUrl: "https://ahenstech.com",
    position: "Full Stack Developer - Part Time",
    startDate: new Date(2025, 6),
    endDate: new Date(2025, 7),
    currentlyWorkHere: false,
    summary: [
      "Developed a resume builder using React, Next.js, Tailwind CSS, and TypeScript.",
    ],
  },
  {
    logo: Aicade,
    logoAlt: "Aicade",
    company: "Aicade Inc.",
    companyUrl: "https://aicade.io",
    position: "Full Stack Developer | Frontend Specialist",
    startDate: new Date(2024, 11),
    endDate: new Date(2025, 6),
    currentlyWorkHere: false,
    summary: [
      "Developed 2D game generation tools using Vite.js, Next.js, Redux, and TanStack Query.",
      "Integrated AI-powered APIs to enhance game asset recommendations and procedural content generation.",
      "Designed interactive UI components for game level design and asset customization.",
      "Optimized performance to ensure a seamless and responsive gaming experience.",
    ],
  },
  {
    logo: labLambworks,
    logoAlt: "LabLamb Works",
    company: "LabLamb Works",
    companyUrl: "https://lablambworks.com",
    position: "Full Stack Developer",
    startDate: new Date(2023, 2),
    currentlyWorkHere: false,
    endDate: new Date(2024, 10),
    summary: [
      "Worked for various clients like Airhub, Education University of Hong Kong.",
      "Worked with a variety of technologies, including React Native, React, Next.js, Gatsby, Typescript, PostgreSQL, Mui, MongoDB and others.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Aicade 2D Game Builder",
    description:
      "Make Your Own Games with AI Just Type and Create. Effortlessly Transform Your Ideas Into Interactive Experiences Now With Our AI Game Builder",
    url: "https://create.aicade.io/",
    previewImage: Aicade,
    technologies: [
      "React",
      "Nextjs",
      "Vitejs",
      "Redux",
      "Typescript",
      "Phaser",
      "Tailwind CSS",
      "Styled Components",
    ],
    androidLink: "",
    iosLink: "",
  },
  {
    name: "YoChatGPT",
    description:
      "A platform for students where student actively engage with AI. And access or create interactive digital chatrooms with ChatGPT!",
    url: "https://www.yochatgpt.io/",
    previewImage: YoChatGPT,
    technologies: [
      "React",
      "Nextjs",
      "Typescript",
      "Material UI",
      "MongoDB",
      "useSWR",
      "ChatGPT API",
      "Styled Components",
    ],
    androidLink: "",
    iosLink: "",
  },
  {
    name: "Airhub",
    description:
      "Connect. Shop. Experience. The ultimate social platform designed for airsoft enthusiasts.",
    url: "https://www.airhub-app.com/",
    previewImage: Airhub,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Material UI",
      "GraphQL",
      "Expo",
      "React Native",
      "Keystone",
      "Postgres",
      "Socket.io",
      "Twilio",
      "Agenda",
    ],
    androidLink: "https://play.google.com/store/apps/details?id=com.airhub.app",
    iosLink: "https://apps.apple.com/us/app/airhub/id1661240899",
  },
  {
    name: "IncentivizED",
    description:
      "Move more, Earn more. IncentivizED helps students to unlock their potential and rewards their success",
    url: "https://incentivized.app/",
    previewImage: IncentivizED,
    technologies: [
      "React",
      "Gatsby",
      "Typescript",
      "Material UI",
      "Expo",
      "React Native",
      "Material UI",
      "GraphQL",
      "Expo",
      "Keystone",
      "Postgres",
    ],
    androidLink:
      "https://play.google.com/store/apps/details?id=hk.eduhk.IncentivizED",
    iosLink: "https://apps.apple.com/us/app/incentivized/id6460642742",
  },
  {
    name: "YLHH",
    description:
      "With the aim of bridging the gap between a traditional snack store in Hong Kong and its loyal customer base, our project aims to create a dedicated mobile application that helps close this gap.",
    url: "",
    previewImage: YLHH,
    technologies: [
      "React Native",
      "Expo",
      "Typescript",
      "Material UI",
      "GraphQL",
      "Keystone",
      "Postgres",
    ],
    androidLink: "https://play.google.com/store/apps/details?id=com.ylhh.app",
    iosLink: "https://apps.apple.com/us/app/yuen-long-hop-hing/id6473820687",
  },
  {
    name: "LabLamb Works Official Website",
    description: "A official webpage with Gatsby framework.",
    url: "https://lablambworks.com/",
    previewImage: LabLamb,
    technologies: ["React", "Gatsby", "Typescript", "Material UI"],
    androidLink: "",
    iosLink: "",
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Meet Patel",
    personAvatar: Meet,
    title: " Sr. Full Stack Developer",
    testimonial:
      "Devesh was extremely easy and pleasant to work with and he truly cares about the project being a success. Devesh has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
