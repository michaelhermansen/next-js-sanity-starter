"use client";

import Link from "next/link";
import { useRef } from "react";

export function SearchResultItem(props: {
  href: string;
  title: string;
  excerpt?: string;
}) {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  return (
    <li
      className="group cursor-pointer space-y-1 py-4"
      onClick={() => linkRef.current?.click()}
    >
      <Link
        href={props.href}
        className="flex items-center gap-2 text-xl font-medium group-hover:underline"
        ref={linkRef}
      >
        {props.title}
      </Link>
      {props.excerpt && (
        <p className="text-muted-foreground line-clamp-1">{props.excerpt}</p>
      )}
    </li>
  );
}
