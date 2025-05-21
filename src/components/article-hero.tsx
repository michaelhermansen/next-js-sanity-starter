import Image from "next/image";
import { Mail } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/lib/utils";
import { CmsImage } from "./cms-image";
import { ARTICLE_QUERYResult } from "@/sanity/sanity.types";

type ArticleHeroProps = NonNullable<ARTICLE_QUERYResult>;

export default function ArticleHero(props: ArticleHeroProps) {
  return (
    <>
      {props.title && (
        <h1 className="mb-4 text-3xl font-semibold md:mb-8 lg:text-5xl">
          {props.title}
        </h1>
      )}
      {props.image && props.image.asset?._id && (
        <div className="my-4 overflow-hidden rounded-2xl md:my-6">
          <CmsImage
            className="w-full"
            image={props.image}
            alt={props.image.alt || ""}
            width={1200}
            height={650}
            loading="eager"
          />
        </div>
      )}
      <div className="flex items-center justify-between gap-3 md:text-base">
        <div className="flex items-center gap-3">
          <div className="bg-muted size-8 overflow-clip rounded-full">
            {props.author?.image && (
              <CmsImage
                image={props.author.image}
                alt={props.author.image.alt || ""}
                width={60}
                height={60}
              />
            )}
          </div>
          <div>{props?.author?.name || "Ingen forfatter"}</div>
        </div>
        <div>{formatDate(props._createdAt)}</div>
      </div>
      <hr className="my-4 md:my-6" />
    </>
  );
}
