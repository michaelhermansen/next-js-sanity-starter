import { Button } from "@/components/ui/button";
import Link from "next/link";
import { stegaClean } from "next-sanity";
import PortableTextRenderer from "@/components/portable-text-renderer";
import { PAGE_QUERYResult } from "../../../sanity/sanity.types";

type Hero2Props = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "hero-2" }
>;

export default function Hero2({ tagLine, title, body, links }: Hero2Props) {
  return (
    <div className="dark:bg-background container py-20 text-center lg:pt-40">
      {tagLine && (
        <h1 className="animate-fade-up font-sans leading-[0] opacity-0 [animation-delay:100ms]">
          <span className="text-base font-semibold">{tagLine}</span>
        </h1>
      )}
      {title && (
        <h2 className="animate-fade-up mt-6 text-4xl leading-[1.1] font-bold opacity-0 [animation-delay:200ms] md:text-5xl lg:text-6xl">
          {title}
        </h2>
      )}
      {body && (
        <div className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg opacity-0 [animation-delay:300ms]">
          <PortableTextRenderer value={body} />
        </div>
      )}
      {links && links.length > 0 && (
        <div className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4 opacity-0 [animation-delay:400ms]">
          {links.map((link) => (
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
  );
}
