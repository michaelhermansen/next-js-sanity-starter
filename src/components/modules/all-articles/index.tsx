import { ArticleCard } from "@/components/article-card";
import { fetchSanityArticles } from "@/sanity/lib/fetch";
import { ModuleByType } from "..";
import ArticlesFilter from "./articles-filter";
import { PageSearchParams } from "@/lib/types";
import { Suspense } from "react";
import { range } from "radash";
import { Skeleton } from "@/components/ui/skeleton";

type AllArticlesProps = {
  module: ModuleByType<"all-articles">;
  searchParams: PageSearchParams;
};

export async function AllArticles(props: AllArticlesProps) {
  const articles = await fetchSanityArticles();
  const categoriesSearchParams = props.searchParams.c?.toString();

  return (
    <div className="py-section container space-y-8">
      <ArticlesFilter articles={articles} />

      <Suspense
        fallback={<ArticlesGridSkeleton />}
        key={categoriesSearchParams}
      >
        <ArticlesGrid categoriesSearchParams={categoriesSearchParams} />
      </Suspense>
    </div>
  );
}

async function ArticlesGrid(props: {
  categoriesSearchParams: string | undefined;
}) {
  const articles = await fetchSanityArticles(
    props.categoriesSearchParams?.split(","),
  );

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
