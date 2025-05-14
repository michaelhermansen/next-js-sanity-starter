import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { stegaClean } from "next-sanity";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { PAGE_QUERYResult, ColorVariant } from "../../../sanity/sanity.types";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];
type GridRow = Extract<Block, { _type: "grid-row" }>;
type GridColumn = NonNullable<NonNullable<GridRow["columns"]>>[number];
type PricingCard = Extract<GridColumn, { _type: "pricing-card" }>;

interface PricingCardProps extends Omit<PricingCard, "_type" | "_key"> {
  color?: ColorVariant;
}

export default function PricingCard({
  color,
  title,
  tagLine,
  excerpt,
  price,
  list,
  link,
}: PricingCardProps) {
  return (
    <div
      key={title}
      className="ring-offset-background focus-visible:ring-ring group flex w-full rounded-3xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
    >
      <div className="flex w-full flex-col justify-between rounded-3xl border p-8">
        <div
          className={cn(color === "primary" ? "text-background" : undefined)}
        >
          {title && (
            <div className="flex items-center justify-between">
              <h3 className="text-xl leading-[1.2] font-bold">{title}</h3>
              {tagLine && <Badge>{tagLine}</Badge>}
            </div>
          )}
          {price && price.value && (
            <div className="my-8 flex items-end gap-1">
              <div className="text-3xl leading-none font-bold">
                ${price.value}
              </div>
              {price.period && <div className="">{price.period}</div>}
            </div>
          )}
          {list && list.length > 0 && (
            <ul className="my-8 flex flex-col gap-2">
              {list.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {excerpt && <p>{excerpt}</p>}
        </div>
        <Button
          className="mt-6"
          size="lg"
          variant={stegaClean(link?.buttonVariant)}
          asChild
        >
          <Link
            href={link?.href ? link.href : "#"}
            target={link?.target ? "_blank" : undefined}
          >
            {link?.title}
          </Link>
        </Button>
      </div>
    </div>
  );
}
