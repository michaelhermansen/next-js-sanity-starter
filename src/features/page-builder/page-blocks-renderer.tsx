import { PageSearchParams } from "@/lib/types";
import { SinglePageQueryResult } from "@/sanity/sanity.types";
import { ComponentType } from "react";
import { AllArticles } from "./page-blocks/all-articles";
import { PageHero } from "./page-blocks/page-hero";
import { NavigationSection } from "./page-blocks/navigation-section";

const componentMap = {
  allArticles: AllArticles,
  pageHero: PageHero,
  navigationSection: NavigationSection,
} as const;

export function PageBlocksRenderer(props: {
  pageBlocks: AnyPageBlock[];
  searchParams: PageSearchParams;
}) {
  return (
    <div>
      {props.pageBlocks?.map((pageBlock) => {
        if (!(pageBlock._type in componentMap)) {
          // Fallback for development/debugging of new page block types
          console.warn(`No component implemented for type: ${pageBlock._type}`);
          return null;
        }

        const currentType = pageBlock._type as keyof typeof componentMap;
        type CurrentPageBlock = PageBlockByType<typeof currentType>;

        const PageBlockComponent = componentMap[currentType] as ComponentType<{
          pageBlock: CurrentPageBlock;
          searchParams?: PageSearchParams;
        }>;

        return (
          <PageBlockComponent
            pageBlock={pageBlock as CurrentPageBlock}
            searchParams={props.searchParams}
            key={pageBlock._key}
          />
        );
      })}
    </div>
  );
}

export type AnyPageBlock = NonNullable<
  NonNullable<SinglePageQueryResult>["pageBlocks"]
>[number];

export type PageBlockByType<T extends AnyPageBlock["_type"]> = Extract<
  AnyPageBlock,
  { _type: T }
>;
