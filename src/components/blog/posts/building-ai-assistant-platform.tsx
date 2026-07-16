import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";

const GITHUB = "https://github.com/deveshmaurya1996/ai-assistant";

export default function BuildingAiAssistantPlatform() {
  return (
    <div className="flex flex-col gap-6 text-gray-600">
      <Typography>
        I set out to build a personal AI assistant that behaves like a full
        product. That means streaming replies, durable memory, tools, and voice
        on both mobile and web.
      </Typography>

      <Typography variant="h3" className="text-gray-900">
        Scope
      </Typography>
      <Typography>
        The{" "}
        <Link href={GITHUB} externalLink withUnderline noCustomization>
          AI Assistant Platform
        </Link>{" "}
        is a monorepo with Expo and Next.js clients, a Fastify API gateway with
        Socket.IO, and a FastAPI runtime for model routing, retrieval, planning,
        and voice.
      </Typography>

      <ul className="flex list-disc flex-col gap-2 pl-5">
        <Typography component="li">
          Streaming chat over sockets with a shared capability catalog
        </Typography>
        <Typography component="li">
          Memory with PostgreSQL and Qdrant for retrieval
        </Typography>
        <Typography component="li">
          Voice path from speech to text, model response, then text to speech
        </Typography>
        <Typography component="li">
          Local development with Tilt, Docker Compose, and monitoring hooks
        </Typography>
      </ul>

      <Typography variant="h3" className="text-gray-900">
        Architecture
      </Typography>
      <Typography>
        Clients do not call model providers directly. Traffic goes through the
        gateway into the AI runtime so auth, rate limits, and tracing stay
        consistent on mobile and web.
      </Typography>

      <Typography variant="h3" className="text-gray-900">
        What this demonstrates
      </Typography>
      <Typography>
        The project covers product UI, realtime systems, AI integration, and
        infrastructure in one codebase, rather than a thin React layer on top of
        an external API.
      </Typography>

      <Typography>
        See it on the homepage under{" "}
        <Link href="/#open-source" withUnderline noCustomization>
          Open Source &amp; Tools
        </Link>
        , or on{" "}
        <Link href={GITHUB} externalLink withUnderline noCustomization>
          GitHub
        </Link>
        .
      </Typography>
    </div>
  );
}
