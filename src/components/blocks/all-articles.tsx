import SectionContainer from "@/components/ui/section-container";
import ArticleCard from "@/components/ui/article-card";
import Link from "next/link";
import { stegaClean } from "next-sanity";
import { fetchSanityArticles } from "@/sanity/lib/fetch";
import { PAGE_QUERYResult } from "../../sanity/sanity.types";

type AllArticlesProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "all-articles" }
>;

export default async function AllArticles(props: AllArticlesProps) {
  const color = stegaClean(props.colorVariant);
  const articles = await fetchSanityArticles();

  return (
    <SectionContainer color={color} padding={props.padding}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article?.slug?.current}
            className="ring-offset-background focus-visible:ring-ring flex w-full rounded-3xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
            href={`/artikler/${article?.slug?.current}`}
          >
            <ArticleCard
              title={article?.title ?? ""}
              excerpt={article?.excerpt ?? ""}
              image={article?.image ?? null}
            />
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
