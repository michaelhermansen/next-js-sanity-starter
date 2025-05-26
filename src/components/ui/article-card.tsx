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

export function ArticleCard(props: ArticleCardProps) {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  return (
    <div
      className={cn(
        "group bg-card cursor-pointer overflow-clip rounded border transition-all focus-within:ring-2 focus-within:ring-offset-2 hover:-translate-y-0.5",
        props.className,
      )}
      onClick={() => linkRef.current?.click()}
    >
      {props.article.image && props.article.image.asset?._id && (
        <div className="overflow-clip border-b">
          <CmsImage
            image={props.article.image}
            alt={props.article.image.alt || ""}
            width={600}
            height={350}
            className="w-full transition-transform duration-700 ease-out group-focus-within:scale-105 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col gap-1 p-4">
        {props.article.title && (
          <Link
            ref={linkRef}
            href={`/artikler/${props.article.slug?.current}`}
            className="group-hover:underline focus:ring-0 focus:ring-offset-0"
          >
            <h3 className="text-2xl font-medium">{props.article.title}</h3>
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
