import { ArticleCard } from "@/components/article-card";
import { Skeleton } from "@/components/ui/skeleton";
import { PageSearchParams } from "@/lib/types";
import { fetchMultipleArticles } from "@/sanity/queries/article";
import { fetchMultipleCategories } from "@/sanity/queries/category";
import { range } from "radash";
import { Suspense } from "react";
import { PageBlockByType } from "..";
import ArticlesFilter from "./articles-filter";

type AllArticlesProps = {
  pageBlock: PageBlockByType<"all-articles">;
  searchParams: PageSearchParams;
};

export async function AllArticles(props: AllArticlesProps) {
  const { data: categories } = await fetchMultipleCategories();
  const appliedCategoriesString = props.searchParams.c?.toString();
  const appliedCategories = appliedCategoriesString?.split(",");

  return (
    <div className="py-section container space-y-8">
      <ArticlesFilter categories={categories} />

      <Suspense
        fallback={<ArticlesGridSkeleton />}
        key={appliedCategoriesString}
      >
        <ArticlesGrid appliedCategories={appliedCategories} />
      </Suspense>
    </div>
  );
}

async function ArticlesGrid(props: {
  appliedCategories: string[] | undefined;
}) {
  const { data: articles } = await fetchMultipleArticles({
    categories: props.appliedCategories,
  });

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard
          key={article._id}
          article={article}
          className="md:first:col-span-2"
        />
      ))}
    </div>
  );
}

function ArticlesGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...range(1, 10)].map((i) => (
        <Skeleton key={i} className="min-h-72 rounded md:first:col-span-2" />
      ))}
    </div>
  );
}
