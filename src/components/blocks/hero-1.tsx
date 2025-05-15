import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { stegaClean } from "next-sanity";
import PortableTextRenderer from "@/components/portable-text-renderer";
import { PAGE_QUERYResult } from "@/sanity/sanity.types";

type Hero1Props = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "hero-1" }
>;

export default function Hero1(props: Hero1Props) {
  return (
    <div className="container bg-red-100 py-20 dark:bg-red-950">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          {props.body && (
            <div className="animate-fade-up mt-6 text-lg opacity-0 [animation-delay:300ms]">
              <PortableTextRenderer value={props.body} />
            </div>
          )}
          {props.links && props.links.length > 0 && (
            <div className="animate-fade-up mt-10 flex flex-wrap gap-4 opacity-0 [animation-delay:400ms]">
              {props.links.map((link) => (
                <Button
                  key={link.title}
                  variant={stegaClean(link?.buttonVariant)}
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
            <Image
              className="animate-fade-up rounded-xl opacity-0 [animation-delay:500ms]"
              src={urlFor(props.image).url()}
              alt={props.image.alt || ""}
              width={props.image.asset?.metadata?.dimensions?.width || 800}
              height={props.image.asset?.metadata?.dimensions?.height || 800}
              placeholder={
                props.image?.asset?.metadata?.lqip ? "blur" : undefined
              }
              blurDataURL={props.image?.asset?.metadata?.lqip || ""}
              quality={100}
            />
          )}
        </div>
      </div>
    </div>
  );
}
