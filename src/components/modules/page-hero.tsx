import { cn } from "@/lib/utils";
import { ModuleByType } from ".";
import { CtaLinks } from "../cta-links";
import { TypographyH1, TypographyP } from "../typography";

type PageHeroProps = {
  module: ModuleByType<"page-hero">;
};

export function PageHero(props: PageHeroProps) {
  const { module } = props;

  return (
    <header className="border-b">
      <div className="py-section container">
        <div
          className={cn("max-w-3xl", {
            "mx-auto text-center text-balance": module.centered,
            "py-section": module.paragraph || module.links?.length,
          })}
        >
          <div className="animate-fade-up pb-2">
            <TypographyH1>{module.title}</TypographyH1>
            {module.paragraph && (
              <TypographyP className="font-serif text-2xl sm:text-3xl">
                {module.paragraph}
              </TypographyP>
            )}
          </div>

          {module.links && module.links.length > 0 && (
            <div
              className={cn(
                "animate-fade-up flex flex-wrap gap-4 pt-6 opacity-0 delay-150",
                { "justify-center": module.centered },
              )}
            >
              <CtaLinks links={module.links} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
