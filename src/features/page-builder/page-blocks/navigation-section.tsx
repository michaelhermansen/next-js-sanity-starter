"use client";

import { ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { useId, useRef } from "react";
import { PageBlockByType } from "../page-blocks-renderer";

type NavigationSectionProps = {
  pageBlock: PageBlockByType<"navigationSection">;
};

export function NavigationSection(props: NavigationSectionProps) {
  const id = useId();
  const { pageBlock } = props;

  return (
    <div className="container py-10">
      <h2 id={id} className="sr-only">
        {pageBlock.title}
      </h2>
      {pageBlock.navigationCards && (
        <nav aria-labelledby={id}>
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 2xl:gap-4">
            {pageBlock.navigationCards.map((card) => (
              <NavigationCard
                key={card._key}
                title={card.link?.title || ""}
                href={card.link?.href || ""}
                description={card.description}
                targetBlank={card.link?.targetBlank}
              />
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

function NavigationCard(props: {
  title: string;
  href: string;
  description?: string;
  targetBlank?: boolean;
}) {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  return (
    <li
      className="bg-card group flex cursor-pointer items-center gap-2 rounded border px-4 py-3 focus-within:ring-2 focus-within:ring-offset-2"
      onClick={() => linkRef.current?.click()}
    >
      <div className="flex-1">
        <Link
          href={props.href || ""}
          ref={linkRef}
          target={props.targetBlank ? "_blank" : undefined}
          rel={props.targetBlank ? "noopener" : undefined}
          className="block text-lg font-medium group-hover:underline focus:ring-0 focus:ring-offset-0"
        >
          {props.title}
        </Link>
        {props.description && (
          <div className="text-muted-foreground">{props.description}</div>
        )}
      </div>
      {!props.targetBlank && (
        <ChevronRight
          size="1.25rem"
          className="text-muted-foreground -translate-x-1 opacity-0 transition-all group-focus-within:translate-x-0 group-focus-within:opacity-100 group-hover:translate-x-0 group-hover:opacity-100"
        />
      )}
      {props.targetBlank && (
        <SquareArrowOutUpRight
          size="1.25em"
          className="text-muted-foreground scale-90 opacity-0 transition-all group-focus-within:scale-100 group-focus-within:opacity-100 group-hover:scale-100 group-hover:opacity-100"
        />
      )}
    </li>
  );
}
