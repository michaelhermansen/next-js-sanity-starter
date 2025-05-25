import { ComponentType } from "react";
import { PAGE_QUERYResult } from "../../sanity/sanity.types";
import { AllArticles } from "./all-articles";
import { Cta1 } from "./cta-1";
import { Hero1 } from "./hero-1";
import { SectionHeader } from "./section-header";

type Module = NonNullable<NonNullable<PAGE_QUERYResult>["modules"]>[number];

const componentMap: {
  [K in Module["_type"]]: ComponentType<Extract<Module, { _type: K }>>;
} = {
  "hero-1": Hero1,
  "section-header": SectionHeader,
  "cta-1": Cta1,
  "all-articles": AllArticles,
};

export function ModuleRenderer(props: { modules: Module[] }) {
  return (
    <>
      {props.modules?.map((module) => {
        const Component = componentMap[module._type];
        if (!Component) {
          // Fallback for development/debugging of new component types
          console.warn(
            `No component implemented for module type: ${module._type}`,
          );
          return <div data-type={module._type} key={module._key} />;
        }
        return <Component {...(module as any)} key={module._key} />;
      })}
    </>
  );
}
