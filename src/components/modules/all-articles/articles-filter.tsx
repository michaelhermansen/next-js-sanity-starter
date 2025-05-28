"use client";

import { ARTICLES_QUERYResult } from "@/sanity/sanity.types";
import { useMemo } from "react";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { useSearchParamsState } from "@/hooks/use-search-params-state";
import { sift } from "radash";

export default function ArticlesFilter(props: {
  articles: ARTICLES_QUERYResult;
}) {
  const categories = useArticleCategories(props.articles);
  const { value, setValue } = useSearchParamsState("c");

  return (
    <ToggleGroup
      type="multiple"
      className="flex gap-2"
      value={sift(value.split(","))}
      onValueChange={(newValue) => setValue(newValue.join(","))}
    >
      {categories.map((category) => (
        <ToggleGroupItem
          key={category.slug}
          value={category.slug}
          className="data-[state=on]:bg-accent bg-card rounded border px-3 py-2 transition-colors"
        >
          {category.title}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

function useArticleCategories(articles: ARTICLES_QUERYResult) {
  return useMemo(() => {
    const categoriesMap = new Map<string, string>();

    articles.forEach((article) => {
      article.categories?.forEach((category) => {
        if (!category.slug?.current || !category.title) return;
        categoriesMap.set(category.slug.current, category.title);
      });
    });

    return Array.from(categoriesMap.entries()).map(([slug, title]) => ({
      slug,
      title,
    }));
  }, [articles]);
}
