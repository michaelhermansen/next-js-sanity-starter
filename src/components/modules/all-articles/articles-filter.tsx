"use client";

import { ARTICLES_QUERYResult } from "@/sanity/sanity.types";
import { useMemo } from "react";

export default function ArticlesFilter(props: {
  articles: ARTICLES_QUERYResult;
}) {
  const categories = useMemo(() => {
    const categoriesMap = new Map<string, string>();

    props.articles.forEach((article) => {
      article.categories?.forEach((category) => {
        if (!category.slug?.current || !category.title) return;
        categoriesMap.set(category.slug.current, category.title);
      });
    });

    return Array.from(categoriesMap.entries()).map(([slug, title]) => ({
      slug,
      title,
    }));
  }, [props.articles]);

  return (
    <div>
      {categories.map((category) => (
        <div key={category.slug}>{category.title}</div>
      ))}
    </div>
  );
}
