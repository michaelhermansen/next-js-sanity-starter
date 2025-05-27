import { cn } from "@/lib/utils";
import { ModuleProps } from ".";
import { CtaLinks } from "../cta-links";
import { TypographyH1, TypographyP } from "../typography";

type PageHeroProps = ModuleProps<"page-hero">;

export function PageHero(props: PageHeroProps) {
  return (
    <header className="border-b">
      <div className="py-section container">
        <div
          className={cn("max-w-3xl", {
            "mx-auto text-center text-balance": props.centered,
            "py-section": props.paragraph || props.links?.length,
          })}
        >
          <div className="animate-fade-up pb-2">
            <TypographyH1>{props.title}</TypographyH1>
            {props.paragraph && (
              <TypographyP className="font-serif text-2xl sm:text-3xl">
                {props.paragraph}
              </TypographyP>
            )}
          </div>

          {props.links && props.links.length > 0 && (
            <div
              className={cn(
                "animate-fade-up flex flex-wrap gap-4 pt-6 opacity-0 delay-150",
                { "justify-center": props.centered },
              )}
            >
              <CtaLinks links={props.links} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
