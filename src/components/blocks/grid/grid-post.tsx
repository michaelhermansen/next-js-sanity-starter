import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PAGE_QUERYResult, ColorVariant } from "../../../sanity/sanity.types";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];
type GridRow = Extract<Block, { _type: "grid-row" }>;
type GridColumn = NonNullable<NonNullable<GridRow["columns"]>>[number];
type GridPost = Extract<GridColumn, { _type: "grid-post" }>;

interface GridPostProps extends Omit<NonNullable<GridPost>, "_type" | "_key"> {
  color?: ColorVariant;
}

export default function GridPost({ color, post }: GridPostProps) {
  if (!post) return null;

  const { title, slug, excerpt, image, categories } = post;

  return (
    <Link
      key={title}
      className="ring-offset-background focus-visible:ring-ring group flex w-full rounded-3xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
      href={`/blog/${slug?.current}`}
    >
      <div
        className={cn(
          "group hover:border-primary flex w-full flex-col justify-between overflow-hidden rounded-3xl border p-4 transition ease-in-out",
          color === "primary"
            ? "group-hover:border-primary-foreground/50"
            : "group-hover:border-primary",
        )}
      >
        <div className="flex flex-col">
          {image && image.asset?._id && (
            <div className="relative mb-4 h-[15rem] overflow-hidden rounded-2xl sm:h-[20rem] md:h-[25rem] lg:h-[9.5rem] xl:h-[12rem]">
              <Image
                src={urlFor(image).url()}
                alt={image.alt || ""}
                placeholder={image?.asset?.metadata?.lqip ? "blur" : undefined}
                blurDataURL={image?.asset?.metadata?.lqip || ""}
                fill
                style={{
                  objectFit: "cover",
                }}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                quality={100}
              />
            </div>
          )}
          {title && (
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[1.5rem] leading-[1.2] font-bold">{title}</h3>
            </div>
          )}
          {categories && categories.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge key={category._id} color="primary">
                  {category.title}
                </Badge>
              ))}
            </div>
          )}
          {excerpt && <p>{excerpt}</p>}
        </div>
        <div className="group-hover:border-primary mt-3 flex h-10 w-10 items-center justify-center rounded-full border xl:mt-6">
          <ChevronRight
            className="text-border group-hover:text-primary"
            size={24}
          />
        </div>
      </div>
    </Link>
  );
}
