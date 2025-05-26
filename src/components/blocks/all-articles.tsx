import { ArticleCard } from "@/components/ui/article-card";
import { fetchSanityArticles } from "@/sanity/lib/fetch";
import { PAGE_QUERYResult } from "../../sanity/sanity.types";

type AllArticlesProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["modules"]>[number],
  { _type: "all-articles" }
>;

export async function AllArticles(props: AllArticlesProps) {
  const articles = await fetchSanityArticles();

  return (
    <div className="py-section container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
