"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

export function SkipLink() {
  return (
    <Link
      href={"#hovedinnhold"}
      className={cn(
        "bg-primary text-primary-foreground pointer-events-none absolute top-2 left-2 block max-w-max -translate-y-4 rounded-sm px-4 py-2 opacity-0 transition-all focus:pointer-events-auto focus:translate-y-0 focus:opacity-100",
      )}
    >
      Hopp til hovedinnhold
    </Link>
  );
}
