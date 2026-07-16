
export type SkillIconSpec = {
  icon: string;
  color: string;
  darkColor?: string;
};

export const ICONIFY_BY_SKILL: Record<string, SkillIconSpec> = {
  React: { icon: "simple-icons:react", color: "#61DAFB" },
  "Next.js": {
    icon: "simple-icons:nextdotjs",
    color: "#000000",
    darkColor: "#FFFFFF",
  },
  TypeScript: { icon: "simple-icons:typescript", color: "#3178C6" },
  Typescript: { icon: "simple-icons:typescript", color: "#3178C6" },
  JavaScript: { icon: "simple-icons:javascript", color: "#F7DF1E" },
  Javascript: { icon: "simple-icons:javascript", color: "#F7DF1E" },
  "Node.js": { icon: "simple-icons:nodedotjs", color: "#5FA04E" },
  "Express.js": {
    icon: "simple-icons:express",
    color: "#000000",
    darkColor: "#FFFFFF",
  },
  Express: {
    icon: "simple-icons:express",
    color: "#000000",
    darkColor: "#FFFFFF",
  },
  FastAPI: { icon: "simple-icons:fastapi", color: "#009688" },
  "Tailwind CSS": { icon: "simple-icons:tailwindcss", color: "#06B6D4" },
  Tailwindcss: { icon: "simple-icons:tailwindcss", color: "#06B6D4" },
  Git: { icon: "simple-icons:git", color: "#F05032" },
  "React Native": { icon: "simple-icons:react", color: "#61DAFB" },
  Expo: {
    icon: "simple-icons:expo",
    color: "#000020",
    darkColor: "#FFFFFF",
  },
  PostgreSQL: { icon: "simple-icons:postgresql", color: "#4169E1" },
  Prisma: {
    icon: "simple-icons:prisma",
    color: "#2D3748",
    darkColor: "#FFFFFF",
  },
  MongoDB: { icon: "simple-icons:mongodb", color: "#47A248" },
  GraphQL: { icon: "simple-icons:graphql", color: "#E10098" },
  "TanStack Query": { icon: "simple-icons:reactquery", color: "#FF4154" },
  Redux: { icon: "simple-icons:redux", color: "#764ABC" },
  Vite: { icon: "simple-icons:vite", color: "#646CFF" },
  Python: { icon: "simple-icons:python", color: "#3776AB" },
  "Azure OpenAI": { icon: "simple-icons:openai", color: "#412991" },
  "AI APIs": { icon: "simple-icons:openai", color: "#10A37F" },
  NestJS: { icon: "simple-icons:nestjs", color: "#E0234E" },
  Redis: { icon: "simple-icons:redis", color: "#FF4438" },
  Strapi: { icon: "simple-icons:strapi", color: "#4945FF" },
  "Socket.io": {
    icon: "simple-icons:socketdotio",
    color: "#010101",
    darkColor: "#FFFFFF",
  },
  Gatsby: { icon: "simple-icons:gatsby", color: "#663399" },
  Docker: { icon: "simple-icons:docker", color: "#2496ED" },
  "Azure AD B2C": { icon: "simple-icons:microsoftazure", color: "#0078D4" },
  "Material UI": { icon: "simple-icons:mui", color: "#007FFF" },
  MUI: { icon: "simple-icons:mui", color: "#007FFF" },
  Figma: { icon: "simple-icons:figma", color: "#F24E1E" },
  Keystone: { icon: "simple-icons:keystone", color: "#166BFF" },
  Keystonejs: { icon: "simple-icons:keystone", color: "#166BFF" },
};

export function resolveSkillIcon(
  label: string,
  techLabel?: string
): SkillIconSpec | undefined {
  return (
    ICONIFY_BY_SKILL[label] ??
    (techLabel ? ICONIFY_BY_SKILL[techLabel] : undefined)
  );
}
