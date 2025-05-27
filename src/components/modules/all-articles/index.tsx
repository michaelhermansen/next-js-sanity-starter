import { ArticleCard } from "@/components/ui/article-card";
import { fetchSanityArticles } from "@/sanity/lib/fetch";
import { ModuleProps } from "..";
import ArticlesFilter from "./articles-filter";

type AllArticlesProps = ModuleProps<"all-articles">;

export async function AllArticles(props: AllArticlesProps) {
  const articles = await fetchSanityArticles();
  console.log(props);

  return (
    <div className="py-section container space-y-8">
      <ArticlesFilter articles={articles} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard
            key={article._id}
            article={article}
            className="md:first:col-span-2"
          />
        ))}
      </div>
    </div>
  );
}
