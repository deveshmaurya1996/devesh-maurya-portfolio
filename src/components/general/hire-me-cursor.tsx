"use client";

import { useEffect, useRef, useState } from "react";

const HireMeCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!canHover.matches) return;

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, label';

    const handleMouseMove = (event: MouseEvent) => {
      if (badgeRef.current) {
        badgeRef.current.style.transform = `translate(${event.clientX + 16}px, ${
          event.clientY + 16
        }px)`;
      }
      setIsVisible(true);

      const target = event.target as HTMLElement | null;
      setIsInteractive(Boolean(target?.closest(interactiveSelector)));
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={badgeRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1000]"
    >
      <div
        className={`animate-heartbeat whitespace-nowrap rounded-full border border-white/60 bg-blue-600 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-blue-900/40 ${
          isInteractive ? "scale-110" : "scale-100"
        }`}
      >
        Hire Me
      </div>
    </div>
  );
};

export default HireMeCursor;
