"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { OPEN_SOURCE_TOOLS } from "@/lib/data";
import type { OpenSourceTool } from "@/lib/types";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import Button from "@/components/general/button";
import Link from "@/components/navigation/link";
import { mergeClasses } from "@/lib/utils";

function ToolLinks({
  tool,
  onDark = false,
}: {
  tool: OpenSourceTool;
  onDark?: boolean;
}) {
  const ghost = onDark
    ? "rounded-full bg-transparent px-3 py-1 text-xs text-gray-100 ring-1 ring-white/20 hover:bg-white/10"
    : "rounded-full bg-transparent px-3 py-1 text-xs text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50";

  return (
    <div className="flex flex-wrap gap-2">
      {tool.npmUrl ? (
        <Link href={tool.npmUrl} externalLink noCustomization>
          <Button className="rounded-full px-3 py-1 text-xs">
            npm <ExternalLink size={12} />
          </Button>
        </Link>
      ) : null}
      {tool.githubUrl ? (
        <Link href={tool.githubUrl} externalLink noCustomization>
          <Button className={ghost}>GitHub</Button>
        </Link>
      ) : null}
      {tool.websiteUrl ? (
        <Link href={tool.websiteUrl} externalLink noCustomization>
          <Button className={ghost}>Website</Button>
        </Link>
      ) : null}
      {tool.blogSlug ? (
        <Link href={`/blog/${tool.blogSlug}`} noCustomization>
          <Button className={ghost}>Story</Button>
        </Link>
      ) : null}
    </div>
  );
}

function ToolPreview({
  tool,
  className,
}: {
  tool: OpenSourceTool;
  className?: string;
}) {
  if (tool.coverImage) {
    return (
      <div
        className={mergeClasses(
          "relative h-40 w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900/40",
          className
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tool.coverImage}
          alt={tool.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    );
  }
  return (
    <div className="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900">
      <Typography className="px-4 text-center text-sm font-semibold text-white/90">
        {tool.name}
      </Typography>
    </div>
  );
}

const OpenSourceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const nodes = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        const idx = Number(
          (visible[0].target as HTMLElement).dataset.toolIndex
        );
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55, 0.75],
      }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  const active = OPEN_SOURCE_TOOLS[activeIndex] ?? OPEN_SOURCE_TOOLS[0];

  return (
    <Container id="open-source" className="!py-16 md:!py-20">
      <div className="mb-10 flex flex-col items-center gap-3">
        <Tag label="Open Source & Tools" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          Tools and platforms I maintain, including Dartix
        </Typography>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="flex flex-col gap-5">
          {OPEN_SOURCE_TOOLS.map((tool, i) => (
            <motion.article
              key={tool.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-tool-index={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={mergeClasses(
                "flex flex-col gap-3 rounded-3xl p-5 ring-1 transition",
                i === activeIndex
                  ? "bg-emerald-50/70 ring-emerald-300/50 dark:bg-emerald-950/20 dark:ring-emerald-500/30"
                  : "bg-gradient-to-br from-gray-50 to-transparent ring-gray-100/80 dark:from-gray-100/40"
              )}
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                  <Sparkles size={10} /> {tool.brand ?? "Tool"}
                </span>
              </div>
              <ToolPreview tool={tool} />
              <Typography className="font-semibold text-gray-900">
                {tool.name}
              </Typography>
              <Typography className="text-sm text-gray-600">
                {tool.tagline}
              </Typography>
              <Typography className="text-sm text-gray-500">
                {tool.description}
              </Typography>
              {tool.installCommand ? (
                <code className="mt-1 block w-full whitespace-pre-wrap break-all rounded-xl bg-white px-3 py-2.5 font-mono text-[11px] leading-relaxed text-black ring-1 ring-gray-200">
                  {tool.installCommand}
                </code>
              ) : null}
              <div className="mt-auto pt-2">
                <ToolLinks tool={tool} />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="sticky top-24 hidden lg:block">
          <div className="overflow-hidden rounded-3xl bg-gray-950 p-5 text-gray-100 shadow-xl ring-1 ring-white/5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/90" />
              </div>
              <Typography className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500">
                {activeIndex + 1} / {OPEN_SOURCE_TOOLS.length}
              </Typography>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="flex flex-col gap-4"
              >
                <ToolPreview tool={active} />
                <div className="flex flex-col gap-1.5">
                  <Typography className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    {active.brand ?? "Tool"}
                  </Typography>
                  <Typography className="text-lg font-semibold text-white">
                    {active.name}
                  </Typography>
                  <Typography className="text-sm text-gray-400">
                    {active.tagline}
                  </Typography>
                </div>
                <Typography className="text-sm leading-relaxed text-gray-300">
                  {active.description}
                </Typography>
                {active.installCommand ? (
                  <code className="block whitespace-pre-wrap break-all rounded-xl bg-white px-3 py-2.5 font-mono text-[11px] leading-relaxed text-black ring-1 ring-white/20">
                    {active.installCommand}
                  </code>
                ) : null}
                <ul className="flex flex-col gap-2">
                  {active.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {h}
                    </li>
                  ))}
                </ul>
                <ToolLinks tool={active} onDark />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OpenSourceSection;
