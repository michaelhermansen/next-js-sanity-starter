"use client";

import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import { useRef } from "react";
import { ARTICLES_QUERYResult } from "../../sanity/sanity.types";
import { CmsImage } from "../cms-image";

interface ArticleCardProps {
  article: ARTICLES_QUERYResult[number];
  className?: string;
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
      {props.article.image && props.article.image.asset?._id && (
        <div className="overflow-clip border-b">
          <CmsImage
            image={props.article.image}
            alt={props.article.image.alt || ""}
            width={400}
            height={250}
            className="w-full transition-transform duration-700 ease-out group-focus-within:scale-105 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col gap-1 p-4">
        {props.article.title && (
          <Link
            ref={linkRef}
            href={`/artikler/${props.article.slug?.current}`}
            className="focus:outline-0"
          >
            <h3 className="text-2xl leading-normal font-medium">
              {props.article.title}
            </h3>
          </Link>
        )}
        {props.article.excerpt && (
          <p className="line-clamp-3">{props.article.excerpt}</p>
        )}
        <p className="text-muted-foreground pt-4">
          {formatDate(props.article._createdAt)}
        </p>
      </div>
    </div>
  );
}
