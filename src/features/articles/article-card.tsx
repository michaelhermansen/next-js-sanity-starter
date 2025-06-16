"use client";

import { cn, formatDate } from "@/lib/utils";
import { MultipleArticlesQueryResult } from "@/sanity/sanity.types";
import { isEmpty } from "radash";
import { CmsImage } from "../../components/cms-image";
import {
  ClickableCard,
  ClickableCardLink,
} from "../../components/ui/clickable-card";
import { Card, CardContent, CardLink } from "@/components/ui/card";

interface ArticleCardProps {
  article: MultipleArticlesQueryResult[number];
  className?: string;
}

export function ArticleCard(props: ArticleCardProps) {
  return (
    <Card className={cn("group flex flex-col", props.className)} clickable>
      {props.article.image && props.article.image && (
        <div className="overflow-clip border-b">
          <CmsImage
            image={props.article.image}
            alt={props.article.image.alt || ""}
            width={600}
            height={350}
            className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      )}

      <CardContent className="flex flex-1 flex-col gap-8 p-4">
        <div>
          {props.article.title && (
            <CardLink
              href={`/artikler/${props.article.slug?.current}`}
              className="group-hover:underline"
            >
              <h3 className="text-2xl font-medium">{props.article.title}</h3>
            </CardLink>
          )}

          {props.article.excerpt && (
            <p className="text-muted-foreground mt-1 mb-3 line-clamp-3">
              {props.article.excerpt}
            </p>
          )}

          <p className="text-muted-foreground">
            {formatDate(props.article._createdAt)}
          </p>
        </div>

        {!isEmpty(props.article.categories) && (
          <ul
            className="flex flex-wrap items-center gap-1"
            aria-label="Kategorier"
          >
            {props.article.categories?.map((category) => (
              <li
                key={category._id}
                className="text-muted-foreground bg-muted rounded-full px-2.5 py-0.5"
              >
                <span className="sr-only">Merkelapp: </span>
                {category.title}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
