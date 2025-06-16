import type { Link } from "@/sanity/sanity.types";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import NextLink from "next/link";
import { Button } from "./ui/button";

export function CtaLinks(props: { links: Link[] }) {
  return (
    <>
      {props.links.map((link, i) => (
        <Button
          key={[link.href, link.title].join()}
          variant={i === 0 ? "default" : "secondary"}
          size="lg"
          asChild
        >
          <NextLink
            href={link.href || "#"}
            target={link.targetBlank ? "_blank" : undefined}
            rel={link.targetBlank ? "noopener noreferrer" : undefined}
          >
            {link.title}
            {link.targetBlank && <SquareArrowOutUpRight />}
            {!link.targetBlank && <ArrowRight />}
          </NextLink>
        </Button>
      ))}
    </>
  );
}
