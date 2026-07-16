import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

import { getProjectBySlug, PROJECTS } from "@/lib/data";
import type { CaseStudyLayer } from "@/lib/types";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Tag from "@/components/data-display/tag";
import Link from "@/components/navigation/link";
import Button from "@/components/general/button";
import ProjectVisual from "@/components/data-display/project-visual";
import { buildCaseStudyJsonLd, JsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function hasCaseStudy(project: (typeof PROJECTS)[number]) {
  return Boolean(project.featured || project.problem);
}

function LayerSection({
  title,
  layer,
}: {
  title: string;
  layer: CaseStudyLayer;
}) {
  return (
    <section className="flex flex-col gap-4 rounded-2xl bg-gray-50/80 p-5 ring-1 ring-gray-100/80 dark:bg-gray-100/40 md:p-6">
      <Typography variant="h3" className="!text-xl md:!text-2xl">
        {title}
      </Typography>
      <Typography className="text-gray-600">{layer.summary}</Typography>
      <div className="flex flex-wrap gap-2">
        {layer.stack.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>
      <ul className="flex list-disc flex-col gap-2 pl-5 text-gray-600">
        {layer.details.map((item) => (
          <Typography component="li" key={item} className="text-gray-600">
            {item}
          </Typography>
        ))}
      </ul>
    </section>
  );
}

export async function generateStaticParams() {
  return PROJECTS.filter(hasCaseStudy).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  const title = `${project.name} case study`;
  const description = project.overview
    ? project.overview.slice(0, 160)
    : project.description;
  const url = `/work/${project.slug}`;
  const image =
    typeof project.previewImage === "string"
      ? project.previewImage
      : project.previewImage?.src;

  return {
    title,
    description,
    keywords: [
      project.name,
      "Devesh Maurya",
      "case study",
      ...project.categories,
      ...project.technologies.slice(0, 12),
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.name} | Devesh Maurya`,
      description,
      url,
      type: "article",
      images: image ? [{ url: image, alt: `${project.name} preview` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Devesh Maurya`,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !hasCaseStudy(project)) {
    notFound();
  }

  return (
    <Container className="gap-10 py-16 md:py-24">
      <JsonLd data={buildCaseStudyJsonLd(project)} />
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft size={16} />
        Back to work
      </Link>

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((cat) => (
            <Tag key={cat} label={cat} />
          ))}
        </div>
        <Typography variant="h1">{project.name}</Typography>
        {project.role ? (
          <Typography className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
            {project.role}
          </Typography>
        ) : null}
        <Typography className="max-w-3xl text-lg text-gray-600">
          {project.description}
        </Typography>
        <div className="flex flex-wrap gap-3">
          {project.url ? (
            <Link href={project.url} externalLink noCustomization>
              <Button className="gap-2">
                {project.url.includes("github.com") ? "GitHub" : "Live demo"}{" "}
                <ExternalLink size={16} />
              </Button>
            </Link>
          ) : null}
        </div>
      </div>

      {project.previewImage ? (
        <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-10">
          <Image
            src={project.previewImage}
            alt={`${project.name} preview`}
            className="mx-auto h-auto max-h-[480px] w-full object-contain"
            priority
          />
        </div>
      ) : (
        <div className="relative h-56 overflow-hidden rounded-2xl border border-gray-100 md:h-72">
          <ProjectVisual name={project.name} slug={project.slug} />
        </div>
      )}

      {project.overview ? (
        <section className="flex flex-col gap-3">
          <Typography variant="h3">Overview</Typography>
          <Typography className="max-w-3xl text-gray-600">
            {project.overview}
          </Typography>
        </section>
      ) : null}

      <div className="grid gap-10 md:grid-cols-2">
        <section className="flex flex-col gap-3">
          <Typography variant="h3">Problem</Typography>
          <Typography className="text-gray-600">{project.problem}</Typography>
        </section>
        <section className="flex flex-col gap-3">
          <Typography variant="h3">Solution</Typography>
          <Typography className="text-gray-600">{project.solution}</Typography>
        </section>
      </div>

      {project.frontend || project.backend ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {project.frontend ? (
            <LayerSection title="Frontend" layer={project.frontend} />
          ) : null}
          {project.backend ? (
            <LayerSection title="Backend" layer={project.backend} />
          ) : null}
        </div>
      ) : null}

      {project.modules?.length ? (
        <section className="flex flex-col gap-4">
          <Typography variant="h3">Modules</Typography>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.modules.map((mod) => (
              <div
                key={mod.name}
                className="rounded-xl bg-gray-50/80 p-4 ring-1 ring-gray-100/80 dark:bg-gray-100/40"
              >
                <Typography className="font-semibold text-gray-900">
                  {mod.name}
                </Typography>
                <Typography className="mt-1 text-sm text-gray-600">
                  {mod.description}
                </Typography>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {project.apiHighlights?.length ? (
        <section className="flex flex-col gap-4">
          <Typography variant="h3">API & integration highlights</Typography>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            {project.apiHighlights.map((item) => (
              <Typography component="li" key={item} className="text-gray-600">
                {item}
              </Typography>
            ))}
          </ul>
        </section>
      ) : null}

      {project.challenges?.length ? (
        <section className="flex flex-col gap-4">
          <Typography variant="h3">Challenges</Typography>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            {project.challenges.map((item) => (
              <Typography component="li" key={item} className="text-gray-600">
                {item}
              </Typography>
            ))}
          </ul>
        </section>
      ) : null}

      {project.impact?.length ? (
        <section className="flex flex-col gap-4">
          <Typography variant="h3">Impact</Typography>
          <ul className="flex flex-col gap-3">
            {project.impact.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-1 shrink-0 text-emerald-500" size={18} />
                <Typography className="text-gray-600">{item}</Typography>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.architecture?.nodes?.length ? (
        <section className="flex flex-col gap-4">
          <Typography variant="h3">Architecture</Typography>
          <div className="flex flex-col items-stretch gap-2 md:max-w-lg">
            {project.architecture.nodes.map((node, index) => (
              <div key={node} className="flex flex-col items-center gap-2">
                <div className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-center font-medium text-gray-900 dark:border-gray-200 dark:bg-gray-100">
                  {node}
                </div>
                {index < project.architecture!.nodes.length - 1 ? (
                  <div className="h-4 w-px bg-gray-300" aria-hidden />
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="flex flex-col gap-4">
        <Typography variant="h3">Tech</Typography>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech} label={tech} />
          ))}
        </div>
      </section>
    </Container>
  );
}
