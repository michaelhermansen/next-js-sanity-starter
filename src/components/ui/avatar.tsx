"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Avatar(props: {
  name: string;
  children?: ReactNode;
  className?: string;
}) {
  const names = props.name.split(" ");
  let fallback = names[0][0];
  if (names.length > 1) fallback += names[names.length - 1][0];

  return (
    <span
      className={cn(
        "bg-accent relative size-10 overflow-clip rounded-full",
        props.className,
      )}
    >
      <div className="relative z-10 *:size-full *:object-cover">
        {props.children}
      </div>
      <span
        aria-hidden
        className="text-accent-foreground pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-1/2 text-sm font-medium uppercase"
      >
        {fallback}
      </span>
    </span>
  );
}
