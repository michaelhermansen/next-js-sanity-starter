"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRef } from "react";
import { ARTICLES_QUERYResult } from "../../sanity/sanity.types";
import { CmsImage } from "../cms-image";

type ArticleCard = NonNullable<ARTICLES_QUERYResult[number]>;

interface ArticleCardProps extends Omit<ArticleCard, "slug" | "_id"> {
  className?: string;
  slug: string;
}

export default function ArticleCard(props: ArticleCardProps) {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  return (
    <div
      className={cn(
        "group hover:border-primary focus-within:border-primary cursor-pointer overflow-clip rounded border transition-colors",
        props.className,
      )}
      onClick={() => linkRef.current?.click()}
    >
      {props.image && props.image.asset?._id && (
        <div className="overflow-clip border-b">
          <CmsImage
            image={props.image}
            alt={props.image.alt || ""}
            width={400}
            height={250}
            className="w-full transition-transform duration-700 ease-out group-focus-within:scale-105 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col gap-1 p-4 pb-6">
        {props.title && (
          <Link
            ref={linkRef}
            href={`/artikler/${props.slug}`}
            className="focus:outline-0"
          >
            <h3 className="text-2xl leading-normal font-medium">
              {props.title}
            </h3>
          </Link>
        )}
        {props.excerpt && <p>{props.excerpt}</p>}
      </div>
    </div>
  );
}
