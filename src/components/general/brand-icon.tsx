"use client";

import { Icon } from "@iconify/react";

export function BrandIcon({
  icon,
  size = 24,
  className,
}: {
  icon: string;
  size?: number;
  className?: string;
}) {
  return (
    <Icon
      icon={icon}
      width={size}
      height={size}
      className={className}
      aria-hidden
    />
  );
}
