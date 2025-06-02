import { ArticleHero } from "@/components/article-hero";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import { TableOfContents } from "@/components/table-of-contents";
import { getHeadings } from "@/features/portable-text/headings";
import { PortableTextRenderer } from "@/features/portable-text/portable-text-renderer";
import { generatePageMetadata } from "@/lib/metadata";
import { fetchSingleArticle } from "@/sanity/queries/article";
import { notFound } from "next/navigation";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { data: article } = await fetchSingleArticle(params);
  if (!article) notFound();

  return generatePageMetadata(article);
}

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { data: article } = await fetchSingleArticle(params);
  if (!article) notFound();

  const headings = article.body && getHeadings(article.body);

  return (
    <>
      <PageBreadcrumbs
        links={[{ title: "Artikler", href: "/artikler" }]}
        currentPageTitle={article.title || ""}
      />

      <article>
        <ArticleHero article={article} />

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 xl:gap-16">
            {headings && (
              <aside className="py-section max-h-screen overflow-y-auto border-b lg:sticky lg:top-0 lg:border-b-0 lg:border-l lg:pl-10 xl:pl-16">
                <TableOfContents headings={headings} />
              </aside>
            )}

            <div className="py-section max-w-3xl lg:order-first lg:col-span-2">
              {article.body && <PortableTextRenderer value={article.body} />}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
