import { ArticleHero } from "@/components/article-hero";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import { TableOfContents } from "@/components/table-of-contents";
import { getHeadings } from "@/features/portable-text/headings";
import { PortableTextRenderer } from "@/features/portable-text/portable-text-renderer";
import { fetchSanityArticleBySlug } from "@/sanity/lib/fetch";
import { generatePageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = await fetchSanityArticleBySlug({ slug: params.slug });
  if (!article) notFound();

  return generatePageMetadata({
    page: article,
    slug: `/artikler/${params.slug}`,
  });
}

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = await fetchSanityArticleBySlug(params);
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
          <div className="grid grid-cols-1 items-start lg:grid-cols-3 lg:gap-12 2xl:gap-24">
            {headings && (
              <aside className="section-padding border-b lg:sticky lg:top-0 lg:border-b-0">
                <TableOfContents headings={headings} />
              </aside>
            )}

            <div className="section-padding lg:order-first lg:col-span-2">
              {article.body && <PortableTextRenderer value={article.body} />}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
