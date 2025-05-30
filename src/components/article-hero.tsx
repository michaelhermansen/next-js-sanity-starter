import { formatDate } from "@/lib/utils";
import { SingleArticleQueryResult } from "@/sanity/sanity.types";
import { CmsImage } from "./cms-image";
import { TypographyH1, TypographyP } from "./typography";
import { Avatar } from "./ui/avatar";

type ArticleHeroProps = {
  article: SingleArticleQueryResult;
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
    <div className="pt-section sm:pb-section border-b">
      <div className="container">
        <div className="max-w-4xl pb-8 lg:pb-10">
          <TypographyH1 className="animate-fade-up">{title}</TypographyH1>

          {excerpt && (
            <TypographyP className="animate-fade-up font-serif text-xl opacity-0 delay-100 sm:text-2xl">
              {excerpt}
            </TypographyP>
          )}

          <div className="flex items-center gap-3 pt-4 lg:pt-8">
            {author.name && (
              <Avatar name={author.name}>
                {author.image && (
                  <CmsImage
                    image={author.image}
                    alt={author.image.alt || ""}
                    width={80}
                    height={80}
                    loading="eager"
                  />
                )}
              </Avatar>
            )}
            <div>
              {author.name && <p className="font-medium">{author.name}</p>}
              {createdAt && (
                <time
                  dateTime={createdAt}
                  className="text-muted-foreground text-sm sm:text-base"
                >
                  {formatDate(createdAt)}
                </time>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="sm:container">
        {image?.asset?._id && (
          <CmsImage
            className="aspect-[4/3] w-full object-cover sm:aspect-video sm:rounded lg:aspect-[2/1]"
            image={image}
            alt={image.alt || ""}
            width={1000}
            height={600}
            loading="eager"
          />
        )}
      </div>
    </div>
  );
}
