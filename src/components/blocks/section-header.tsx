import { cn } from "@/lib/utils";
import { PAGE_QUERYResult } from "@/sanity/sanity.types";
import { stegaClean } from "next-sanity";

type SectionHeaderProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["modules"]>[number],
  { _type: "section-header" }
>;

export function SectionHeader(props: SectionHeaderProps) {
  const { sectionWidth = "default", stackAlign = "left" } = props;

  const isNarrow = stegaClean(sectionWidth) === "narrow";
  const align = stegaClean(stackAlign);
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
          <h2 className="mb-4 text-3xl md:text-5xl">{props.title}</h2>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
