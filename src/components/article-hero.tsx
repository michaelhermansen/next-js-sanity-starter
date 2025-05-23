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
        <h1 className="mb-4 text-3xl md:mb-6 lg:text-5xl">{props.title}</h1>
      )}
      {props.image && props.image.asset?._id && (
        <div className="my-4 overflow-hidden rounded-2xl md:my-6">
          <CmsImage
            className="w-full"
            image={props.image}
            alt={props.image.alt || ""}
            width={1200}
            height={800}
            loading="eager"
          />
        </div>
      )}
      <div className="flex items-center justify-between gap-2 md:text-base">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            {props.author?.image && props.author.image.asset?._id && (
              <div className="relative h-6 w-6 md:h-10 md:w-10">
                <Image
                  src={urlFor(props.author.image).url()}
                  alt={props.author.image.alt ? props.author.image.alt : ""}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  sizes="40px"
                  className="mr-2 h-10 w-10 rounded-full"
                />
              </div>
            )}
            {props.author?.name && <div>{props.author.name}</div>}
            <div className="hidden md:block">•</div>
          </div>
          <div>{formatDate(props._createdAt)}</div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <div>Share this article</div>
          <div className="flex gap-2">
            <a
              className="hover:opacity-70"
              href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/artikler/${props.slug?.current}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              title="Share on Facebook"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z"
                  className="fill-black dark:fill-white"
                />
              </svg>
            </a>
            <a
              className="hover:opacity-70"
              href={`mailto:?subject=${props.title}&body=${props.title}%0A%0A${process.env.NEXT_PUBLIC_SITE_URL}/artikler/${props.slug?.current}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share via email"
              title="Share via email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-primary/30 my-4 md:my-6" />
    </>
  );
}
