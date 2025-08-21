import { CmsImage } from "@/components/cms-image";
import { Avatar } from "@/components/ui/avatar";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { formatDate } from "@/lib/utils";
import { SingleArticleQueryResult } from "@/sanity/sanity.types";

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
    <div className="pt-12 sm:pb-12">
      <div className="container">
        <div className="max-w-4xl pb-8 lg:pb-10 2xl:pr-11">
          <TypographyH1 className="animate-fade-up">{title}</TypographyH1>

          {excerpt && (
            <TypographyP className="animate-fade-up font-serif text-xl opacity-0 delay-100 sm:text-2xl">
              {excerpt}
            </TypographyP>
          )}
        </div>
      </div>

      <div className="container grid lg:grid-cols-3 lg:gap-10 xl:gap-16">
        {image?.asset?._id && (
          <CmsImage
            className="col-span-2 w-full rounded object-cover"
            image={image}
            alt={image.alt || ""}
            width={700}
            loading="eager"
          />
        )}

        <div className="flex h-max items-center gap-3">
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
  );
}
