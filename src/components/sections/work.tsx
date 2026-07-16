"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { PROJECTS, PROJECT_FILTERS } from "@/lib/data";
import type { ProjectCategory } from "@/lib/types";
import Tag from "@/components/data-display/tag";
import ProjectVisual from "@/components/data-display/project-visual";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import Link from "@/components/navigation/link";
import { mergeClasses } from "@/lib/utils";

const WorkSection = () => {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <Container id="work" className="!py-16 md:!py-20">
      <div className="mb-8 flex flex-col items-center gap-3">
        <Tag label="Selected Work" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          Selected web, mobile, AI, and SaaS projects
        </Typography>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {PROJECT_FILTERS.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => setFilter(chip)}
            className={mergeClasses(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
              filter === chip
                ? "bg-gray-900 text-gray-50 shadow-lg shadow-emerald-500/10"
                : "bg-gray-50 text-gray-600 hover:bg-emerald-50 hover:text-gray-900 dark:bg-gray-100/50"
            )}
          >
            {chip}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50/90 via-transparent to-emerald-50/20 ring-1 ring-gray-100/80 transition hover:ring-emerald-300/40 dark:from-gray-100/40 dark:to-emerald-950/10"
            >
              <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gray/40">
                {project.previewImage ? (
                  <div className="flex h-full w-full items-center justify-center p-6">
                    <Image
                      src={project.previewImage}
                      alt={project.name}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : (
                  <ProjectVisual
                    name={project.name}
                    slug={project.slug}
                    className="transition duration-500 group-hover:scale-[1.02]"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.categories.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-gray-900/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gray-600 dark:bg-white/5"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <Typography className="font-semibold text-gray-900">
                  {project.name}
                </Typography>
                <Typography className="line-clamp-2 text-sm text-gray-600">
                  {project.description}
                </Typography>
                <div className="mt-auto flex flex-wrap gap-3 pt-1">
                  {project.featured || project.problem ? (
                    <Link
                      href={`/work/${project.slug}`}
                      noCustomization
                      className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 dark:text-emerald-400"
                    >
                      Case study <ArrowUpRight size={14} />
                    </Link>
                  ) : null}
                  {project.url ? (
                    <Link
                      href={project.url}
                      externalLink
                      noCustomization
                      className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                    >
                      {project.url.includes("github.com") ? "GitHub" : "Live"}{" "}
                      <ExternalLink size={12} />
                    </Link>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default WorkSection;
