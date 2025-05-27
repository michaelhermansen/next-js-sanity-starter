import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { stegaClean } from "next-sanity";
import Link from "next/link";
import { PortableTextRenderer } from "@/features/portable-text/portable-text-renderer";
import { PAGE_QUERYResult } from "@/sanity/sanity.types";
import { CtaLinks } from "../cta-links";

type Cta1Props = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["modules"]>[number],
  { _type: "cta-1" }
>;

export function Cta1(props: Cta1Props) {
  const isNarrow = stegaClean(props.sectionWidth) === "narrow";
  const align = stegaClean(props.stackAlign);
  const color = stegaClean(props.colorVariant);

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
          {props.tagLine && (
            <h1 className="mb-4 leading-[0]">
              <span className="text-base font-semibold">{props.tagLine}</span>
            </h1>
          )}
          <h2 className="mb-4">{props.title}</h2>
          {props.body && <PortableTextRenderer value={props.body} />}
        </div>
        {props.links && props.links.length > 0 && (
          <div
            className={cn(
              "mt-10 flex flex-wrap gap-4",
              align === "center" ? "justify-center" : undefined,
            )}
          >
            {props.links && <CtaLinks links={props.links} />}
          </div>
        )}
      </div>
    </div>
  );
}
