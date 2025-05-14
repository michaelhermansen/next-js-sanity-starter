import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { stegaClean } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult, ColorVariant } from "../../../sanity/sanity.types";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];
type GridRow = Extract<Block, { _type: "grid-row" }>;
type GridColumn = NonNullable<NonNullable<GridRow["columns"]>>[number];
type GridCard = Extract<GridColumn, { _type: "grid-card" }>;

interface GridCardProps extends Omit<GridCard, "_type" | "_key"> {
  color?: ColorVariant;
}

export default function GridCard({
  color,
  title,
  excerpt,
  image,
  link,
}: GridCardProps) {
  return (
    <Link
      key={title}
      className="ring-offset-background focus-visible:ring-ring group flex w-full rounded-3xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
      href={link?.href ?? "#"}
      target={link?.target ? "_blank" : undefined}
    >
      <div
        className={cn(
          "flex w-full flex-col justify-between overflow-hidden rounded-3xl border p-4 transition ease-in-out",
          color === "primary"
            ? "group-hover:border-primary-foreground/50"
            : "group-hover:border-primary",
        )}
      >
        <div>
          {image && image.asset?._id && (
            <div className="relative mb-4 h-[15rem] overflow-hidden rounded-2xl sm:h-[20rem] md:h-[25rem] lg:h-[9.5rem] xl:h-[12rem]">
              <Image
                src={urlFor(image).url()}
                alt={image.alt || ""}
                placeholder={image?.asset?.metadata?.lqip ? "blur" : undefined}
                blurDataURL={image?.asset?.metadata?.lqip || ""}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
                quality={100}
              />
            </div>
          )}
          <div
            className={cn(color === "primary" ? "text-background" : undefined)}
          >
            {title && (
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold">{title}</h3>
              </div>
            )}
            {excerpt && <p>{excerpt}</p>}
          </div>
        </div>
        <Button
          className="mt-6"
          size="lg"
          variant={stegaClean(link?.buttonVariant)}
          asChild
        >
          <div>{link?.title ?? "Learn More"}</div>
        </Button>
      </div>
    </Link>
  );
}
