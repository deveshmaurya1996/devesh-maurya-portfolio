"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { EXTERNAL_LINKS, NAV_LINKS, PROJECTS } from "@/lib/data";
import { mergeClasses } from "@/lib/utils";
import Typography from "@/components/general/typography";
import { useRecruiterMode } from "@/components/general/recruiter-mode";

type CommandItem = {
  id: string;
  label: string;
  group: string;
  href?: string;
  action?: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { openRecruiterMode } = useRecruiterMode();

  const items = useMemo<CommandItem[]>(() => {
    const base: CommandItem[] = [
      ...NAV_LINKS.map((l) => ({
        id: `nav-${l.href}`,
        label: l.label,
        group: "Navigate",
        href: l.href,
      })),
      {
        id: "resume",
        label: "Resume",
        group: "Links",
        action: () => window.open(EXTERNAL_LINKS.RESUME_VIEW, "_blank"),
      },
      {
        id: "github",
        label: "GitHub",
        group: "Links",
        action: () => window.open(EXTERNAL_LINKS.GITHUB, "_blank"),
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        group: "Links",
        action: () => window.open(EXTERNAL_LINKS.LINKEDIN, "_blank"),
      },
      {
        id: "email",
        label: "Email",
        group: "Links",
        action: () => {
          window.location.href = `mailto:${EXTERNAL_LINKS.EMAIL}`;
        },
      },
      {
        id: "recruiters",
        label: "For Recruiters",
        group: "Actions",
        action: () => openRecruiterMode(),
      },
      ...PROJECTS.filter((p) => p.featured).map((p) => ({
        id: `project-${p.slug}`,
        label: p.name,
        group: "Projects",
        href: `/work/${p.slug}`,
      })),
      {
        id: "blog",
        label: "Blog",
        group: "Navigate",
        href: "/blog",
      },
    ];
    return base;
  }, [openRecruiterMode]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const runItem = (item: CommandItem) => {
    setOpen(false);
    if (item.action) {
      item.action();
      return;
    }
    if (item.href) {
      if (item.href.startsWith("http")) {
        window.open(item.href, "_blank");
      } else {
        router.push(item.href);
      }
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 px-4 pt-[15vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-gray-100 bg-gray shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Command palette"
      >
        <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
          <Search size={18} className="text-gray-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
              }
              if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIndex((i) => Math.max(i - 1, 0));
              }
              if (e.key === "Enter" && filtered[activeIndex]) {
                e.preventDefault();
                runItem(filtered[activeIndex]);
              }
            }}
            placeholder="Search resume, projects, contact…"
            className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />
          <kbd className="hidden rounded border border-gray-200 px-1.5 py-0.5 text-[10px] text-gray-500 sm:inline">
            Esc
          </kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <li className="px-3 py-6 text-center text-sm text-gray-500">
              No results
            </li>
          ) : (
            filtered.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => runItem(item)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={mergeClasses(
                    "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm",
                    index === activeIndex
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <span>{item.label}</span>
                  <Typography className="text-xs text-gray-400">
                    {item.group}
                  </Typography>
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="border-t border-gray-100 px-4 py-2 text-xs text-gray-400">
          Press Ctrl/Cmd + K anytime
        </div>
      </div>
    </div>
  );
}
