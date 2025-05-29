import { PageSearchParams } from "@/lib/types";
import { SinglePageQueryResult } from "@/sanity/sanity.types";
import { ComponentType } from "react";
import { AllArticles } from "./all-articles";
import { PageHero } from "./page-hero";
import { SectionHeader } from "./section-header";

const componentMap = {
  "page-hero": PageHero,
  "section-header": SectionHeader,
  "all-articles": AllArticles,
} as const;

export function ModulesRenderer(props: {
  modules: AnyModule[];
  searchParams: PageSearchParams;
}) {
  return (
    <>
      {props.modules?.map((module) => {
        const ModuleComponent = componentMap[module._type] as ComponentType<{
          module: typeof module;
          searchParams: PageSearchParams;
        }>;

        if (!ModuleComponent) {
          // Fallback for development/debugging of new component types
          console.warn(
            `No component implemented for module type: ${module._type}`,
          );
          return null;
        }

        return (
          <ModuleComponent
            key={module._key}
            module={module}
            searchParams={props.searchParams}
          />
        );
      })}
    </>
  );
}

export type AnyModule = NonNullable<
  NonNullable<SinglePageQueryResult>["modules"]
>[number];

export type ModuleByType<T extends AnyModule["_type"]> = Extract<
  AnyModule,
  { _type: T }
>;
