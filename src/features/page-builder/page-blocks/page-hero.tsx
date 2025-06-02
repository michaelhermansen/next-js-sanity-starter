import { cn } from "@/lib/utils";
import { TypographyH1, TypographyP } from "@/components/typography";
import { CtaLinks } from "@/components/cta-links";
import { PageBlockByType } from "../page-blocks-renderer";

type PageHeroProps = {
  pageBlock: PageBlockByType<"page-hero">;
};

export function PageHero(props: PageHeroProps) {
  const { pageBlock } = props;

  return (
    <header className="border-b">
      <div className="py-section container">
        <div
          className={cn("max-w-3xl text-balance", {
            "mx-auto text-center": pageBlock.centered,
            "py-section": pageBlock.paragraph || pageBlock.links?.length,
          })}
        >
          <div className="animate-fade-up">
            <TypographyH1>{pageBlock.title}</TypographyH1>
            {pageBlock.paragraph && (
              <TypographyP className="font-serif text-xl sm:text-2xl md:text-3xl">
                {pageBlock.paragraph}
              </TypographyP>
            )}
          </div>

          {pageBlock.links && pageBlock.links.length > 0 && (
            <div
              className={cn(
                "animate-fade-up flex flex-wrap gap-4 pt-8 opacity-0 delay-150",
                { "justify-center": pageBlock.centered },
              )}
            >
              <CtaLinks links={pageBlock.links} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
