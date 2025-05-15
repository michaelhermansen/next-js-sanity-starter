import PortableTextRenderer from "@/features/portable-text/portable-text-renderer";
import { Button } from "@/components/ui/button";
import { PAGE_QUERYResult } from "@/sanity/sanity.types";
import { stegaClean } from "next-sanity";
import Link from "next/link";
import { CmsImage } from "../cms-image";

type Hero1Props = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "hero-1" }
>;

export default function Hero1(props: Hero1Props) {
  return (
    <header className="bg-muted dark:bg-muted/10">
      <div className="container py-20">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col justify-center pb-12">
            {props.body && (
              <div className="mt-6 text-lg">
                <PortableTextRenderer value={props.body} />
              </div>
            )}
            {props.links && props.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-4">
                {props.links.map((link) => (
                  <Button
                    key={link.title}
                    variant={stegaClean(link?.buttonVariant)}
                    size="lg"
                    asChild
                  >
                    <Link
                      href={link.href as string}
                      target={link.target ? "_blank" : undefined}
                      rel={link.target ? "noopener" : undefined}
                    >
                      {link.title}
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
                className="rounded-xl"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
