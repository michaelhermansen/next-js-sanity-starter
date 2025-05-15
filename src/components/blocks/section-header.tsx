import { cn } from "@/lib/utils";
import SectionContainer from "@/components/ui/section-container";
import { stegaClean } from "next-sanity";
import { PAGE_QUERYResult } from "@/sanity/sanity.types";

type SectionHeaderProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "section-header" }
>;

export default function SectionHeader(props: SectionHeaderProps) {
  const { sectionWidth = "default", stackAlign = "left" } = props;

  const isNarrow = stegaClean(sectionWidth) === "narrow";
  const align = stegaClean(stackAlign);
  const color = stegaClean(props.colorVariant);

  return (
    <SectionContainer color={color} padding={props.padding}>
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
    </SectionContainer>
  );
}
