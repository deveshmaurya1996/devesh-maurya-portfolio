import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";

const NPM =
  "https://www.npmjs.com/package/@dartix-software-solutions/ai-gate";
const LIVE = "https://aigate.dartix.live";
const DOCS = "https://aigate.dartix.live/docs";
const GITHUB = "https://github.com/deveshmaurya1996/ai-gate";
const DARTIX = "https://www.dartix.live/";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-3">
    <Typography variant="h3" className="!text-xl md:!text-2xl">
      {title}
    </Typography>
    <div className="flex flex-col gap-3 text-gray-600 [&_a]:font-medium [&_a]:text-gray-900 [&_a]:underline [&_a]:underline-offset-4">
      {children}
    </div>
  </div>
);

export default function LaunchingAiGatePost() {
  return (
    <article className="flex max-w-3xl flex-col gap-10">
      <Section title="What it is">
        <Typography variant="body2">
          <strong className="text-gray-900">AI Gate</strong> is a unified AI
          gateway from Dartix: one project API key for chat and image generation
          across multiple providers, with routing, failover, usage limits, and a
          developer dashboard. The TypeScript client is{" "}
          <Link href={NPM} externalLink withUnderline noCustomization>
            @dartix-software-solutions/ai-gate
          </Link>{" "}
          on npm. Product URL:{" "}
          <Link href={LIVE} externalLink withUnderline noCustomization>
            aigate.dartix.live
          </Link>
          .
        </Typography>
      </Section>

      <Section title="Why I built it">
        <Typography variant="body2">
          Every new AI feature meant another vendor SDK, another key, and ad-hoc
          retries when a free tier failed. AI Gate puts that behind one HTTP API
          and one client so apps stay vendor-agnostic while the gateway handles
          ranking and failover.
        </Typography>
      </Section>

      <Section title="What ships today">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Typography variant="body2" component="span">
              Project keys from the dashboard, generate / stream / image APIs
            </Typography>
          </li>
          <li>
            <Typography variant="body2" component="span">
              Free-provider routing with failover; optional encrypted premium
              credentials per project
            </Typography>
          </li>
          <li>
            <Typography variant="body2" component="span">
              Providers include Gemini, NVIDIA, OpenRouter, Pollinations, Groq,
              OpenAI, Anthropic, and more as the catalog grows
            </Typography>
          </li>
          <li>
            <Typography variant="body2" component="span">
              Stack: Fastify + Prisma + PostgreSQL + Redis, Next.js dashboard,
              BullMQ workers
            </Typography>
          </li>
        </ul>
      </Section>

      <Section title="Quick start">
        <Typography variant="body2">
          Create an account on{" "}
          <Link href={LIVE} externalLink withUnderline noCustomization>
            aigate.dartix.live
          </Link>
          , add a project, copy a key, then:
        </Typography>
        <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 font-mono text-sm text-gray-900 dark:bg-gray-200">
          {`npm i @dartix-software-solutions/ai-gate

import { AIClient } from "@dartix-software-solutions/ai-gate";

const ai = new AIClient({ apiKey: process.env.AI_GATE_API_KEY! });
const result = await ai.generate({ prompt: "Hello" });
console.log(result.content, result.provider);`}
        </pre>
        <Typography variant="body2">
          Full notes:{" "}
          <Link href={DOCS} externalLink withUnderline noCustomization>
            in-app docs
          </Link>{" "}
          ·{" "}
          <Link href={GITHUB} externalLink withUnderline noCustomization>
            GitHub
          </Link>
          .
        </Typography>
      </Section>

      <Section title="Product vs tools">
        <Typography variant="body2">
          AI Gate is a product (keys, routing, usage), not a one-off utility
          under{" "}
          <Link
            href="https://www.dartix.live/tools"
            externalLink
            withUnderline
            noCustomization
          >
            dartix.live/tools
          </Link>
          . Studio and company home stay on{" "}
          <Link href={DARTIX} externalLink withUnderline noCustomization>
            dartix.live
          </Link>
          .
        </Typography>
      </Section>
    </article>
  );
}
