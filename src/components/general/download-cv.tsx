"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Eye } from "lucide-react";

import Button from "@/components/general/button";
import { EXTERNAL_LINKS } from "@/lib/data";

const DownloadCV = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <Button
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((prev) => !prev)}
        className="gap-2"
      >
        <Eye size={16} />
        Resume
        <ChevronDown size={16} />
      </Button>

      {isOpen ? (
        <div className="absolute right-0 top-full z-40 mt-2 min-w-[220px] rounded-xl border border-gray-100 bg-gray p-2 shadow-lg">
          <a
            href={EXTERNAL_LINKS.RESUME_VIEW}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            <Eye size={16} />
            View / Download Resume
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default DownloadCV;
