import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";

const NPM_URL =
  "https://www.npmjs.com/package/@dartix-software-solutions/create-fullstack-app";
const PORTFOLIO_URL = "https://devesh-maurya-portfolio.vercel.app/";
const DARTIX_URL = "https://www.dartix.live/";

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

export default function BuildingCreateFullstackAppPost() {
  return (
    <article className="flex max-w-3xl flex-col gap-10">
      <Section title="What it does">
        <Typography variant="body2">
          <strong className="text-gray-900">create-fullstack-app</strong> is a
          small CLI I wrote in TypeScript. You run it in a directory where you
          want a new folder; it prompts for structure (single repo vs monorepo vs
          microservices), package manager (npm, pnpm, yarn, bun), web or mobile
          stack, backend if you want one, REST vs tRPC vs GraphQL where it
          applies, database, ORM, auth, logging, tests, Docker. Then it generates
          files under that project name. No magic runtime: it is scaffolding
          only, so you still own deps, env vars, and deployment.
        </Typography>
      </Section>

      <Section title="Why I bothered">
        <Typography variant="body2">
          I kept copying the same decisions into new repos: Next or Vite, Nest or
          Express, Prisma or Drizzle, compose files, eslint. A YAML template or a
          static starter repo never matched the next project. A prompt-driven
          generator at least encodes the matrix of options in one codebase and
          outputs something I can delete or extend per client.
        </Typography>
      </Section>

      <Section title="Implementation notes">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Typography variant="body2" component="span">
              Runtime: Node, ESM, compiled with <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">tsc</code>.
              Prompts: Inquirer. Subprocess / shell glue: zx. Output is plain
              filesystem writes (fs-extra), no embedded framework at runtime.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" component="span">
              The wizard is a big switch on answers: frontend setup (Next, Remix,
              Astro, SvelteKit, Vue, Expo, Flutter, etc.), optional backend
              (Nest, Express, Fastify, FastAPI, Django, Spring, Hono, Koa, …),
              then monorepo tooling (Turborepo, Nx, or a basic workspace) when
              you pick that layout.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" component="span">
              Optional Docker artifacts and an OpenAI-related package stub only
              if you tick those boxes in the flow. Nothing is forced.
            </Typography>
          </li>
        </ul>
      </Section>

      <Section title="Release process">
        <Typography variant="body2">
          Published under{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">
            @dartix-software-solutions/create-fullstack-app
          </code>
          . CI is GitHub Actions on tag pushes matching{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">
            v*
          </code>
          . The workflow fails if the tag does not match{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">
            version
          </code>{" "}
          in{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">
            package.json
          </code>
          , then{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">
            npm ci
          </code>
          ,{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">
            npm run build
          </code>
          , and{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">
            npm publish --access public
          </code>{" "}
          with an automation token in repo secrets.
        </Typography>
      </Section>

      <Section title="Push changes and publish to npm">
        <Typography variant="body2">
          Committing to <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">main</code> only updates GitHub. The registry gets a new version when you push a tag that matches{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">version</code> in{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">package.json</code> and the workflow runs.
        </Typography>
        <Typography variant="body2">
          One-time: in the repo on GitHub, add secret{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">NPM_TOKEN</code> with an npm <strong className="text-gray-900">Automation</strong> token (Classic) or a granular token that can publish without OTP. A Classic <strong className="text-gray-900">Publish</strong> token tends to break in CI with 2FA (<code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">EOTP</code>).
        </Typography>
        <Typography variant="body2">
          Typical release:
        </Typography>
        <pre className="overflow-x-auto rounded-xl bg-gray-100 p-4 text-sm text-gray-900 dark:bg-gray-200">
          {`git add .
git commit -m "your message"
git push origin main

npm version patch   # or minor | major
git push origin main --follow-tags`}
        </pre>
        <Typography variant="body2">
          Then check GitHub Actions for <strong className="text-gray-900">Publish to npm</strong>. If the workflow failed before you fixed the token, re-run the job or delete and re-push the tag after updating the secret.
        </Typography>
        <Typography variant="body2">
          Optional: publish from your machine after <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">npm run build</code> with <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">npm publish --access public</code> and <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-200">npm login</code> on an account that can publish the scope.
        </Typography>
      </Section>

      <Section title="Run it">
        <Typography variant="body2">
          From the parent folder where the new project directory should appear:
        </Typography>
        <pre className="overflow-x-auto rounded-xl bg-gray-100 p-4 text-sm text-gray-900 dark:bg-gray-200">
          {`npx @dartix-software-solutions/create-fullstack-app@latest`}
        </pre>
        <Typography variant="body2">
          npm:{" "}
          <Link href={NPM_URL} externalLink withUnderline>
            @dartix-software-solutions/create-fullstack-app
          </Link>
        </Typography>
        <Typography variant="body2">
          Developer:{" "}
          <Link href={PORTFOLIO_URL} externalLink withUnderline>
            devesh-maurya-portfolio.vercel.app
          </Link>
          {" · "}
          Dartix:{" "}
          <Link href={DARTIX_URL} externalLink withUnderline>
            dartix.live
          </Link>
        </Typography>
      </Section>

      <Section title="Still improving">
        <Typography variant="body2">
          This is not a one-off release. I use the CLI on real work, and when I
          hit friction (a broken template, a missing option, a bad default), I
          patch the generator and cut a new version. Prompts, generated files,
          and docs move together. Expect semver bumps as I refine things. This
          page might lag the latest npm release; the package is the source of
          truth.
        </Typography>
        <Typography variant="body2">
          Next up: more edge-case fixes, new stacks only when I trust the
          template, and defaults that match what I actually run in production. If
          your setup breaks, open an issue on the repo or use the contact section
          on this site.
        </Typography>
      </Section>
    </article>
  );
}
