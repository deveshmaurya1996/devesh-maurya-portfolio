import BuildingCreateFullstackAppCli from "@/components/blog/posts/building-create-fullstack-app-cli";
import BuildingAiAssistantPlatform from "@/components/blog/posts/building-ai-assistant-platform";
import LaunchingAiGate from "@/components/blog/posts/launching-ai-gate";

const POST_BODIES: Record<string, React.ReactNode> = {
  "launching-ai-gate": <LaunchingAiGate />,
  "building-create-fullstack-app-cli": <BuildingCreateFullstackAppCli />,
  "building-ai-assistant-platform": <BuildingAiAssistantPlatform />,
};

export function getBlogPostBody(slug: string): React.ReactNode | null {
  return POST_BODIES[slug] ?? null;
}
