"use client";

import {
  ClickableCard,
  ClickableCardLink,
} from "@/components/ui/clickable-card";
import { ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import { PageBlockByType } from "../page-blocks-renderer";

type NavigationSectionProps = {
  pageBlock: PageBlockByType<"navigationSection">;
};

export function NavigationSection(props: NavigationSectionProps) {
  const { pageBlock } = props;

  return (
    <div className="border-b py-10">
      <div className="container">
        {pageBlock.navigationCards && (
          <nav aria-label={pageBlock.title}>
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
    </div>
  );
}

function NavigationCard(props: {
  title: string;
  href: string;
  description?: string;
  targetBlank?: boolean;
}) {
  return (
    <ClickableCard asChild>
      <li className="bg-card group flex items-center gap-2 rounded border px-4 py-3">
        <div className="h-full flex-1">
          <ClickableCardLink
            href={props.href || ""}
            target={props.targetBlank ? "_blank" : undefined}
            rel={props.targetBlank ? "noopener" : undefined}
            className="block text-lg font-medium group-hover:underline"
          >
            {props.title}
          </ClickableCardLink>

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
    </ClickableCard>
  );
}
