import { ComponentType } from "react";
import { PAGE_QUERYResult } from "../../sanity/sanity.types";
import { AllArticles } from "./all-articles";
import { Cta1 } from "./cta-1";
import { PageHero } from "./page-hero";
import { SectionHeader } from "./section-header";

type Module = NonNullable<NonNullable<PAGE_QUERYResult>["modules"]>[number];

const componentMap: {
  [K in Module["_type"]]: ComponentType<Extract<Module, { _type: K }>>;
} = {
  "page-hero": PageHero,
  "section-header": SectionHeader,
  "cta-1": Cta1,
  "all-articles": AllArticles,
};

export function ModulesRenderer(props: { modules: Module[] }) {
  return (
    <>
      {props.modules?.map((module) => {
        const Component = componentMap[module._type];

        if (!Component) {
          // Fallback for development/debugging of new component types
          console.warn(
            `No component implemented for module type: ${module._type}`,
          );
          return null;
        }

        return <Component {...(module as any)} key={module._key} />;
      })}
    </>
  );
}
