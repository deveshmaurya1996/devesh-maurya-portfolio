"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import Button from "@/components/general/button";
import Link from "@/components/navigation/link";
import ProjectVisual from "@/components/data-display/project-visual";
import { calculateYearsOfExperience } from "@/lib/utils";
import { EXTERNAL_LINKS, getFeaturedProjects } from "@/lib/data";
import { useRecruiterMode } from "@/components/general/recruiter-mode";

const HeroSection = () => {
  const yearsOfExperience = calculateYearsOfExperience();
  const { openRecruiterMode } = useRecruiterMode();
  const featured = getFeaturedProjects().slice(0, 4);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (featured.length < 2) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % featured.length);
    }, 4200);
    return () => clearInterval(id);
  }, [featured.length]);

  const project = featured[active];

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-gray-100"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24 lg:flex-row lg:items-center lg:gap-8">
        <motion.div
          className="relative z-10 flex max-w-2xl flex-grow flex-col justify-center gap-8 lg:w-[52%]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex flex-col gap-4">
            <Typography className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
              Full Stack Engineer
            </Typography>
            <Typography
              variant="h1"
              className="text-4xl leading-tight md:text-5xl lg:text-[3.25rem]"
            >
              Full stack engineer for web, mobile, and AI products
            </Typography>
            <Typography className="max-w-xl text-lg text-gray-600">
              I work with React, Next.js, React Native, Node.js, and FastAPI.{" "}
              {yearsOfExperience} years of professional experience delivering
              applications used in production.
            </Typography>
            <div className="flex flex-wrap gap-2 pt-1">
              {["React", "Next.js", "Node.js", "FastAPI", "TypeScript"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-500/20 dark:text-emerald-300"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-2 text-gray-600">
              <MapPin size={16} /> Mumbai, India
            </span>
            <span className="inline-flex items-center gap-2 text-gray-600">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Open to opportunities
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/#work" noCustomization>
              <Button className="rounded-full px-5">View Projects</Button>
            </Link>
            <a
              href={EXTERNAL_LINKS.RESUME_VIEW}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-full bg-transparent px-5 text-gray-900 ring-1 ring-gray-300/80 hover:bg-gray-50">
                Resume
              </Button>
            </a>
            <Button
              type="button"
              onClick={openRecruiterMode}
              className="rounded-full bg-transparent px-5 text-gray-900 ring-1 ring-gray-300/80 hover:bg-gray-50"
            >
              For Recruiters
            </Button>
          </div>
        </motion.div>

        {/* Half dial on the right: cards rotate top -> center -> bottom */}
        <div className="relative h-[340px] w-full overflow-hidden md:h-[420px] lg:h-[480px] lg:w-[48%]">
          <div className="absolute inset-y-0 right-0 w-[min(100%,420px)] overflow-hidden md:w-[460px] lg:w-[520px]">
            {/* Soft arc hint without a full circle */}
            <div className="pointer-events-none absolute -right-[55%] top-1/2 h-[140%] w-[140%] -translate-y-1/2 rounded-full bg-gradient-to-l from-emerald-500/5 via-transparent to-transparent" />

            <AnimatePresence mode="sync" initial={false}>
              {featured.map((item, i) => {
                const offset =
                  (i - active + featured.length) % featured.length;
                // Only show a half dial: prev (top), current (center), next (bottom)
                let slot: "enter" | "active" | "exit" | "hidden" = "hidden";
                if (offset === 0) slot = "active";
                else if (offset === 1) slot = "exit";
                else if (offset === featured.length - 1) slot = "enter";

                if (slot === "hidden") return null;

                const variants = {
                  enter: {
                    y: "-58%",
                    x: "18%",
                    rotate: -18,
                    scale: 0.82,
                    opacity: 0.35,
                    zIndex: 1,
                  },
                  active: {
                    y: "-50%",
                    x: "0%",
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    zIndex: 3,
                  },
                  exit: {
                    y: "8%",
                    x: "18%",
                    rotate: 18,
                    scale: 0.82,
                    opacity: 0.35,
                    zIndex: 1,
                  },
                } as const;

                return (
                  <motion.button
                    key={item.slug}
                    type="button"
                    onClick={() => setActive(i)}
                    className="absolute left-2 right-8 top-1/2 w-[min(100%,340px)] cursor-pointer text-left md:left-6 md:right-10 md:w-[360px]"
                    initial={false}
                    animate={variants[slot]}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                      mass: 0.9,
                    }}
                    style={{ transformOrigin: "right center" }}
                  >
                    <div
                      className={`flex flex-col gap-3 rounded-3xl bg-gray/95 p-5 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.45)] ring-1 ring-gray-100 backdrop-blur-md dark:bg-gray-50/95 ${
                        slot === "active" ? "ring-emerald-400/30" : ""
                      }`}
                    >
                      <Typography className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                        Featured · {i + 1}/{featured.length}
                      </Typography>
                      <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-xl">
                        {item.previewImage ? (
                          <Image
                            src={item.previewImage}
                            alt={item.name}
                            className="max-h-28 w-auto max-w-full object-contain"
                            priority={i === 0}
                          />
                        ) : (
                          <ProjectVisual
                            name={item.name}
                            slug={item.slug}
                            className="absolute inset-0"
                          />
                        )}
                      </div>
                      <Typography className="line-clamp-2 text-sm font-semibold text-gray-900">
                        {item.name}
                      </Typography>
                      <Typography className="line-clamp-1 text-xs text-gray-500">
                        {item.categories.join(" · ")}
                      </Typography>
                      {slot === "active" && item.featured ? (
                        <Link
                          href={`/work/${item.slug}`}
                          noCustomization
                          className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 hover:underline dark:text-emerald-400"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Case study <ArrowUpRight size={12} />
                        </Link>
                      ) : null}
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>

            {/* Progress ticks (not a circle) */}
            <div className="absolute bottom-4 right-6 z-10 flex gap-1.5">
              {featured.map((p, i) => (
                <button
                  key={p.slug}
                  type="button"
                  aria-label={`Show ${p.name}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active
                      ? "w-6 bg-emerald-500"
                      : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
