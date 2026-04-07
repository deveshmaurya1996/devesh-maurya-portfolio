import type { BlogPost } from "@/lib/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-create-fullstack-app-cli",
    title: "create-fullstack-app: a CLI that scaffolds stacks I actually use",
    publishedAt: "2026-04-07",
    excerpt:
      "Node + TypeScript CLI using Inquirer. Picks your frontend, backend, DB, auth, Docker, then writes the tree. I keep iterating on it. Tagged releases on npm via GitHub Actions.",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
