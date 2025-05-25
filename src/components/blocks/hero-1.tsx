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
    <header className="bg-muted border-b">
      <div className="section-padding container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            {props.body && (
              <div className="text-lg">
                <PortableTextRenderer value={props.body} />
              </div>
            )}
            {props.links && props.links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
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
          <div className="flex flex-col justify-center">
            {props.image && props.image.asset?._id && (
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
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
