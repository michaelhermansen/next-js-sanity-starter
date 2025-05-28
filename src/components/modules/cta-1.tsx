import { PortableTextRenderer } from "@/features/portable-text/portable-text-renderer";
import { cn } from "@/lib/utils";
import { stegaClean } from "next-sanity";
import { ModuleByType } from ".";
import { CtaLinks } from "../cta-links";

type Cta1Props = {
  module: ModuleByType<"cta-1">;
};

export function Cta1(props: Cta1Props) {
  const isNarrow = stegaClean(props.module.sectionWidth) === "narrow";
  const align = stegaClean(props.module.stackAlign);
  const color = stegaClean(props.module.colorVariant);

  return (
    <div className="py-section">
      <div
        className={cn(
          align === "center" ? "mx-auto max-w-[48rem] text-center" : undefined,
          isNarrow ? "mx-auto max-w-[48rem]" : undefined,
        )}
      >
        <div
          className={cn(color === "primary" ? "text-background" : undefined)}
        >
          {props.module.tagLine && (
            <h1 className="mb-4 leading-[0]">
              <span className="text-base font-semibold">
                {props.module.tagLine}
              </span>
            </h1>
          )}
          <h2 className="mb-4">{props.module.title}</h2>
          {props.module.body && (
            <PortableTextRenderer value={props.module.body} />
          )}
        </div>
        {props.module.links && props.module.links.length > 0 && (
          <div
            className={cn(
              "mt-10 flex flex-wrap gap-4",
              align === "center" ? "justify-center" : undefined,
            )}
          >
            {props.module.links && <CtaLinks links={props.module.links} />}
          </div>
        )}
      </div>
    </div>
  );
}
