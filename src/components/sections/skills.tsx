"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

import { SKILL_FREQUENCY, getTechLogo } from "@/lib/data";
import { resolveSkillIcon } from "@/lib/skill-icons";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { mergeClasses } from "@/lib/utils";

const FALLBACK_URLS: Record<string, string> = {
  "AI APIs": "https://platform.openai.com/docs",
  Redis: "https://redis.io/",
};

const FREQUENCY_META: Record<
  string,
  { hint: string; accent: string; bar: string }
> = {
  Daily: {
    hint: "In active product work most days",
    accent: "text-emerald-700 dark:text-emerald-300",
    bar: "from-emerald-500 to-teal-400",
  },
  Weekly: {
    hint: "Regular shipping and integrations",
    accent: "text-teal-700 dark:text-teal-300",
    bar: "from-teal-500 to-cyan-400",
  },
  Occasionally: {
    hint: "Pulled in when the project needs it",
    accent: "text-cyan-800 dark:text-cyan-300",
    bar: "from-cyan-500 to-sky-400",
  },
};

function SkillIcon({
  label,
  techLabel,
}: {
  label: string;
  techLabel?: string;
}) {
  const { resolvedTheme } = useTheme();
  const spec = resolveSkillIcon(label, techLabel);

  if (spec) {
    const color =
      resolvedTheme === "dark" && spec.darkColor
        ? spec.darkColor
        : spec.color;
    return (
      <Icon
        icon={spec.icon}
        width={28}
        height={28}
        style={{ color }}
        className="h-7 w-7 shrink-0"
        aria-hidden
      />
    );
  }

  const tech = techLabel ? getTechLogo(techLabel) : getTechLogo(label);

  if (tech?.logo) {
    return (
      <span className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center">
        <Image
          src={tech.logo}
          alt=""
          width={28}
          height={28}
          className={mergeClasses(
            "h-7 w-7 object-contain",
            tech.darkModeLogo ? "dark:hidden" : ""
          )}
        />
        {tech.darkModeLogo ? (
          <Image
            src={tech.darkModeLogo}
            alt=""
            width={28}
            height={28}
            className="hidden h-7 w-7 object-contain dark:block"
          />
        ) : null}
      </span>
    );
  }

  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-[10px] font-bold uppercase text-emerald-700 dark:text-emerald-300">
      {label.slice(0, 2)}
    </span>
  );
}

const SkillsSection = () => {
  return (
    <Container id="skills" className="!py-16 md:!py-20">
      <div className="mb-10 flex flex-col items-center gap-3">
        <Tag label="Skills" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          Tools grouped by how often I use them
        </Typography>
        <Typography className="max-w-lg text-center text-sm text-gray-500">
          Click a skill to open its docs or official site
        </Typography>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-5 lg:grid-cols-3">
        {SKILL_FREQUENCY.map((group, gi) => {
          const meta = FREQUENCY_META[group.frequency] ?? FREQUENCY_META.Daily;
          return (
            <motion.div
              key={group.frequency}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: gi * 0.08, duration: 0.4 }}
              className="relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-gray-50/90 to-transparent p-5 ring-1 ring-gray-100/80 dark:from-gray-100/40"
            >
              <div
                className={mergeClasses(
                  "mb-4 h-1 w-16 rounded-full bg-gradient-to-r",
                  meta.bar
                )}
              />
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <Typography
                    className={mergeClasses(
                      "text-xs font-semibold uppercase tracking-[0.2em]",
                      meta.accent
                    )}
                  >
                    {group.frequency}
                  </Typography>
                  <Typography className="text-xs text-gray-500">
                    {meta.hint}
                  </Typography>
                </div>
                <span className="rounded-full bg-gray-900/5 px-2.5 py-1 text-[11px] font-medium text-gray-600 dark:bg-white/5">
                  {group.skills.length}
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {group.skills.map((skill, si) => {
                  const tech = skill.techLabel
                    ? getTechLogo(skill.techLabel)
                    : getTechLogo(skill.label);
                  const href = tech?.url ?? FALLBACK_URLS[skill.label];
                  const content = (
                    <>
                      <SkillIcon
                        label={skill.label}
                        techLabel={skill.techLabel}
                      />
                      <span className="min-w-0 flex-1 text-left text-sm font-medium text-gray-900 transition group-hover:text-emerald-800 dark:group-hover:text-emerald-300">
                        {skill.label}
                      </span>
                      {href ? (
                        <ArrowUpRight
                          size={14}
                          className="shrink-0 text-gray-400 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-600 group-hover:opacity-100"
                        />
                      ) : null}
                    </>
                  );

                  return (
                    <motion.li
                      key={skill.label}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.05 + si * 0.03 }}
                    >
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition hover:bg-emerald-50/70 hover:ring-1 hover:ring-emerald-300/40 dark:hover:bg-emerald-950/25"
                          aria-label={`${skill.label} documentation`}
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="group flex items-center gap-3 rounded-2xl px-3 py-2.5">
                          {content}
                        </div>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
};

export default SkillsSection;
