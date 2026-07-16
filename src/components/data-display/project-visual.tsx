import { mergeClasses } from "@/lib/utils";

type ProjectVisualProps = {
  name: string;
  slug: string;
  className?: string;
};

const PALETTES: Record<string, { from: string; via: string; to: string; accent: string }> = {
  "lamima-workflow": {
    from: "#0f766e",
    via: "#115e59",
    to: "#134e4a",
    accent: "#5eead4",
  },
  "create-fullstack-app": {
    from: "#1d4ed8",
    via: "#1e3a8a",
    to: "#172554",
    accent: "#93c5fd",
  },
  "ai-assistant": {
    from: "#065f46",
    via: "#064e3b",
    to: "#022c22",
    accent: "#6ee7b7",
  },
};

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

function paletteFor(slug: string) {
  if (PALETTES[slug]) return PALETTES[slug];
  const h = hashSlug(slug);
  const hues = [158, 200, 24, 280, 340];
  const hue = hues[h % hues.length];
  return {
    from: `hsl(${hue} 55% 28%)`,
    via: `hsl(${hue} 50% 22%)`,
    to: `hsl(${hue} 45% 16%)`,
    accent: `hsl(${hue} 70% 72%)`,
  };
}

function initialsFromName(name: string): string {
  const parts = name
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .split(/[\s-]+/)
    .filter(Boolean);
  if (parts.length === 0) return "P";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

/** Geometric gradient cover for projects without a preview image. */
export default function ProjectVisual({
  name,
  slug,
  className,
}: ProjectVisualProps) {
  const palette = paletteFor(slug);
  const monogram = initialsFromName(name);
  const h = hashSlug(slug);

  return (
    <div
      className={mergeClasses(
        "relative h-full w-full overflow-hidden",
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${palette.from} 0%, ${palette.via} 48%, ${palette.to} 100%)`,
      }}
      aria-hidden
    >
      {/* Subtle grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${slug}`}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="white"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${slug})`} />
      </svg>

      {/* Abstract shapes */}
      <div
        className="absolute -right-8 -top-10 h-40 w-40 rounded-full opacity-40 blur-2xl"
        style={{ background: palette.accent }}
      />
      <div
        className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full opacity-30 blur-2xl"
        style={{ background: palette.accent }}
      />
      <div
        className="absolute right-[12%] top-[18%] h-16 w-16 rotate-12 rounded-2xl border border-white/25 bg-white/10"
        style={{ transform: `rotate(${(h % 30) - 15}deg)` }}
      />
      <div
        className="absolute bottom-[22%] left-[14%] h-10 w-10 rounded-full border border-white/20 bg-white/5"
      />
      <div
        className="absolute bottom-[30%] right-[22%] h-0 w-0 border-l-[18px] border-r-[18px] border-b-[30px] border-l-transparent border-r-transparent opacity-40"
        style={{ borderBottomColor: palette.accent }}
      />

      {/* Monogram */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="select-none text-5xl font-semibold tracking-tight text-white/90 drop-shadow-sm md:text-6xl"
          style={{ fontFamily: "var(--font-display, inherit)" }}
        >
          {monogram}
        </span>
      </div>
    </div>
  );
}
