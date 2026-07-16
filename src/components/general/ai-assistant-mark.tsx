import { mergeClasses } from "@/lib/utils";

type AiAssistantMarkProps = {
  className?: string;
  title?: string;
};

/** Theme-aware neural node mark using currentColor. */
export default function AiAssistantMark({
  className,
  title = "AI Assistant",
}: AiAssistantMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label={title}
      className={mergeClasses("text-gray-900 dark:text-gray-50", className)}
    >
      <title>{title}</title>
      <circle cx="50" cy="50" r="11" stroke="currentColor" strokeWidth="3.4" />
      <g stroke="currentColor" strokeWidth="3.4" strokeLinecap="round">
        <line x1="50" y1="39" x2="50" y2="26.5" />
        <circle cx="50" cy="20" r="6.5" />
        <line x1="57.78" y1="42.22" x2="66.6" y2="33.4" />
        <circle cx="71.21" cy="28.79" r="6.5" />
        <line x1="61" y1="50" x2="73.5" y2="50" />
        <circle cx="80" cy="50" r="6.5" />
        <line x1="57.78" y1="57.78" x2="66.6" y2="66.6" />
        <circle cx="71.21" cy="71.21" r="6.5" />
        <line x1="50" y1="61" x2="50" y2="73.5" />
        <circle cx="50" cy="80" r="6.5" />
        <line x1="42.22" y1="57.78" x2="33.4" y2="66.6" />
        <circle cx="28.79" cy="71.21" r="6.5" />
        <line x1="39" y1="50" x2="26.5" y2="50" />
        <circle cx="20" cy="50" r="6.5" />
        <line x1="42.22" y1="42.22" x2="33.4" y2="33.4" />
        <circle cx="28.79" cy="28.79" r="6.5" />
      </g>
    </svg>
  );
}
