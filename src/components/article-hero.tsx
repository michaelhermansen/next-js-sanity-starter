import { formatDate } from "@/lib/utils";
import { ARTICLE_QUERYResult } from "@/sanity/sanity.types";
import { CmsImage } from "./cms-image";

type ArticleHeroProps = {
  article: ARTICLE_QUERYResult;
};

export function ArticleHero(props: ArticleHeroProps) {
  const title = props.article?.title || "Ingen tittel";
  const excerpt = props.article?.excerpt || null;
  const image = props.article?.image || null;
  const createdAt = props.article?._createdAt || null;
  const author = {
    name: props.article?.author?.name || null,
    image: props.article?.author?.image || null,
  };

  return (
    <div className="bg-muted border-b pb-4 xl:py-8">
      <div className="grid grid-cols-1 gap-6 sm:container sm:gap-8 md:gap-0 xl:grid-cols-2 xl:gap-16">
        <div className="flex flex-col justify-between gap-8 px-4 pb-6 sm:gap-10 sm:px-0 md:gap-12 md:py-8 lg:py-10 xl:gap-14 xl:py-16 2xl:py-20">
          <div className="space-y-3 md:space-y-6">
            <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {excerpt && (
              <p className="text-lg sm:text-xl lg:text-2xl">{excerpt}</p>
            )}
          </div>

          <div className="flex items-center gap-3">
            {author.image && author.name && (
              <CmsImage
                className="size-10 rounded-full sm:size-12"
                image={author.image}
                width={80}
                height={80}
                loading="eager"
                alt={author.image.alt || ""}
              />
            )}
            <div>
              {author.name && <p className="font-medium">{author.name}</p>}
              {createdAt && (
                <p className="text-muted-foreground text-sm sm:text-base">
                  {formatDate(createdAt)}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="order-first xl:order-last">
          {image?.asset?._id && (
            <CmsImage
              className="h-[300px] w-full object-cover sm:h-[350px] sm:rounded-b md:h-[400px] lg:h-full xl:rounded"
              image={image}
              alt={image.alt || ""}
              width={800}
              height={500}
              loading="eager"
            />
          )}
        </div>
      </div>
    </div>
  );
}
