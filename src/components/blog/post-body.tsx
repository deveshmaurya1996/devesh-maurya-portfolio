import BuildingCreateFullstackAppCli from "@/components/blog/posts/building-create-fullstack-app-cli";

const POST_BODIES: Record<string, React.ReactNode> = {
  "building-create-fullstack-app-cli": <BuildingCreateFullstackAppCli />,
};

export function getBlogPostBody(slug: string): React.ReactNode | null {
  return POST_BODIES[slug] ?? null;
}
