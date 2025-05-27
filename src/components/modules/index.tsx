import { ComponentType } from "react";
import { PAGE_QUERYResult } from "../../sanity/sanity.types";
import { AllArticles } from "./all-articles";
import { Cta1 } from "./cta-1";
import { PageHero } from "./page-hero";
import { SectionHeader } from "./section-header";

const componentMap: ComponentMap = {
  "page-hero": PageHero,
  "section-header": SectionHeader,
  "cta-1": Cta1,
  "all-articles": AllArticles,
};

export function ModulesRenderer(props: { modules: AnyModuleProps[] }) {
  return (
    <>
      {props.modules?.map((module) => {
        const ModuleComponent = componentMap[module._type] as ComponentType<
          typeof module
        >;

        if (!ModuleComponent) {
          // Fallback for development/debugging of new component types
          console.warn(
            `No component implemented for module type: ${module._type}`,
          );
          return null;
        }

        return <ModuleComponent {...module} key={module._key} />;
      })}
    </>
  );
}

export type AnyModuleProps = NonNullable<
  NonNullable<PAGE_QUERYResult>["modules"]
>[number];

export type ModuleProps<T extends AnyModuleProps["_type"]> = Extract<
  AnyModuleProps,
  { _type: T }
>;

type ComponentMap = {
  [K in AnyModuleProps["_type"]]: ComponentType<ModuleProps<K>>;
};
