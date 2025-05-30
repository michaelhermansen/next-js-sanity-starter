import { PageSearchParams } from "@/lib/types";
import { SinglePageQueryResult } from "@/sanity/sanity.types";
import { ComponentType } from "react";
import { AllArticles } from "./page-blocks/all-articles";
import { PageHero } from "./page-blocks/page-hero";
import { SectionHeader } from "./page-blocks/section-header";

const componentMap = {
  "page-hero": PageHero,
  "section-header": SectionHeader,
  "all-articles": AllArticles,
} as const;

export function PageBlocksRenderer(props: {
  pageBlocks: AnyPageBlock[];
  searchParams: PageSearchParams;
}) {
  return (
    <>
      {props.pageBlocks?.map((pageBlock) => {
        const PageBlockComponent = componentMap[
          pageBlock._type
        ] as ComponentType<{
          pageBlock: typeof pageBlock;
          searchParams: PageSearchParams;
        }>;

        if (!PageBlockComponent) {
          // Fallback for development/debugging of new page block types
          console.warn(
            `No component implemented for page block type: ${pageBlock._type}`,
          );
          return null;
        }

        return (
          <PageBlockComponent
            key={pageBlock._key}
            pageBlock={pageBlock}
            searchParams={props.searchParams}
          />
        );
      })}
    </>
  );
}

export type AnyPageBlock = NonNullable<
  NonNullable<SinglePageQueryResult>["pageBlocks"]
>[number];

export type PageBlockByType<T extends AnyPageBlock["_type"]> = Extract<
  AnyPageBlock,
  { _type: T }
>;
