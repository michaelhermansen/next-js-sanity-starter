import { formatDate } from "@/lib/utils";
import { ARTICLE_QUERYResult } from "@/sanity/sanity.types";
import { CmsImage } from "./cms-image";
import {
  Breadcrumbs,
  BreadcrumbsCurrentPage,
  BreadcrumbsHomeLink,
  BreadcrumbsLink,
  BreadcrumbsSeparator,
} from "./ui/breadcrumbs";

type ArticleHeroProps = NonNullable<ARTICLE_QUERYResult>;

export default function ArticleHero(props: ArticleHeroProps) {
  return (
    <div className="bg-muted border-b">
      <div className="container grid grid-cols-2 gap-16">
        <div className="flex flex-col justify-between gap-20 py-12">
          <Breadcrumbs>
            <BreadcrumbsHomeLink />
            <BreadcrumbsSeparator />
            <BreadcrumbsLink href="/artikler">Artikler</BreadcrumbsLink>
            <BreadcrumbsSeparator />
            <BreadcrumbsCurrentPage>{props.title}</BreadcrumbsCurrentPage>
          </Breadcrumbs>

          <div className="space-y-6 pb-8">
            <h1 className="text-3xl font-medium lg:text-5xl">
              {props.title || "Uten tittel"}
            </h1>
            {props.excerpt && <p className="text-2xl">{props.excerpt}</p>}
          </div>

          <div className="flex items-center gap-3">
            {props.author?.image && (
              <CmsImage
                className="size-12 rounded-full"
                image={props.author.image}
                width={80}
                height={80}
                loading="eager"
                alt=""
              />
            )}
            <div>
              <p className="font-medium">{props.author?.name}</p>
              <p>{formatDate(props._createdAt)}</p>
            </div>
          </div>
        </div>

        <div>
          {props.image && props.image.asset?._id && (
            <CmsImage
              className="h-full w-full object-cover"
              image={props.image}
              alt={props.image.alt || ""}
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
