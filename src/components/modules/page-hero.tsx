import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { ModuleProps } from ".";
import { TypographyH1, TypographyP } from "../typography";
import { CtaLinks } from "../cta-links";

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
