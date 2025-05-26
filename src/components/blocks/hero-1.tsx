import { Button } from "@/components/ui/button";
import { PortableTextRenderer } from "@/features/portable-text/portable-text-renderer";
import { PAGE_QUERYResult } from "@/sanity/sanity.types";
import { stegaClean } from "next-sanity";
import Link from "next/link";
import { CmsImage } from "../cms-image";
import { cn } from "@/lib/utils";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";

type Hero1Props = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["modules"]>[number],
  { _type: "hero-1" }
>;

export function Hero1(props: Hero1Props) {
  return (
    <header className="border-b">
      <div className="py-section container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="flex flex-col justify-center gap-8">
            {props.body && (
              <div className="animate-fade-up">
                <PortableTextRenderer value={props.body} />
              </div>
            )}

            {props.links && props.links.length > 0 && (
              <div className="animate-fade-up flex flex-wrap gap-4 opacity-0 delay-150">
                {props.links.map((link) => (
                  <Button
                    key={link.title}
                    variant={stegaClean(link?.buttonVariant)}
                    size="lg"
                    asChild
                  >
                    <Link
                      href={link.href || "#"}
                      target={link.target ? "_blank" : undefined}
                      rel={link.target ? "noopener" : undefined}
                    >
                      {link.title}
                      {link.target ? <SquareArrowOutUpRight /> : <ArrowRight />}
                    </Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
          {props.image && props.image.asset?._id && (
            <div className="flex flex-col justify-center">
              <CmsImage
                image={props.image}
                alt={props.image.alt || ""}
                width={600}
                height={500}
                className={cn("h-[250px] w-full rounded sm:h-[450px]", {
                  "object-cover": !props.image.contain,
                  "object-contain object-left": props.image.contain,
                })}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
