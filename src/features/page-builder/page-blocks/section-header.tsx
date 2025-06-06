import { cn } from "@/lib/utils";
import { stegaClean } from "next-sanity";
import { PageBlockByType } from ".";

type SectionHeaderProps = {
  pageBlock: PageBlockByType<"section-header">;
};

export function SectionHeader(props: SectionHeaderProps) {
  const { sectionWidth = "default", stackAlign = "left" } = props.pageBlock;

  const isNarrow = stegaClean(sectionWidth) === "narrow";
  const align = stegaClean(stackAlign);
  const color = stegaClean(props.pageBlock.colorVariant);

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
          {props.pageBlock.tagLine && (
            <h1 className="mb-4 leading-[0]">
              <span className="text-base font-semibold">
                {props.pageBlock.tagLine}
              </span>
            </h1>
          )}
          <h2 className="mb-4 text-3xl md:text-5xl">{props.pageBlock.title}</h2>
        </div>
        <p>{props.pageBlock.description}</p>
      </div>
    </div>
  );
}
