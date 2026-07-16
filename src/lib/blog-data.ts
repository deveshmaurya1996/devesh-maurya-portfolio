import type { BlogPost } from "@/lib/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-ai-assistant-platform",
    title: "Building an AI assistant with chat, memory, and voice",
    publishedAt: "2026-07-10",
    tag: "AI",
    coverImage: "/images/blog/ai-assistant-cover.svg",
    excerpt:
      "How the monorepo is structured for streaming chat, Qdrant memory, multi-agent planning, and a voice pipeline across Expo and Next.js.",
  },
  {
    slug: "building-create-fullstack-app-cli",
    title: "create-fullstack-app: scaffolding stacks I use at work",
    publishedAt: "2026-04-07",
    tag: "Tooling",
    coverImage: "/images/blog/create-fullstack-cli-cover.png",
    excerpt:
      "Dartix CLI built with Inquirer. It asks for frontend, backend, database, auth, and Docker, then writes the project. Releases go to npm through GitHub Actions.",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
