import { PageSearchParams } from "@/lib/types";
import { ComponentType } from "react";
import { PAGE_QUERYResult } from "../../sanity/sanity.types";
import { AllArticles } from "./all-articles";
import { Cta1 } from "./cta-1";
import { PageHero } from "./page-hero";
import { SectionHeader } from "./section-header";

const componentMap = {
  "page-hero": PageHero,
  "section-header": SectionHeader,
  "cta-1": Cta1,
  "all-articles": AllArticles,
};

export function ModulesRenderer(props: {
  modules: Module[];
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

export type Module = NonNullable<
  NonNullable<PAGE_QUERYResult>["modules"]
>[number];

export type ModuleByType<T extends Module["_type"]> = Extract<
  Module,
  { _type: T }
>;
