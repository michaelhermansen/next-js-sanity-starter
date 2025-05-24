import ArticleHero from "@/components/article-hero";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import TableOfContents from "@/components/table-of-contents";
import { getHeadings } from "@/features/portable-text/headings";
import PortableTextRenderer from "@/features/portable-text/portable-text-renderer";
import { fetchSanityArticleBySlug } from "@/sanity/lib/fetch";
import { generatePageMetadata } from "@/sanity/lib/metadata";

import { notFound } from "next/navigation";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = await fetchSanityArticleBySlug({ slug: params.slug });

  if (!article) {
    notFound();
  }

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

  if (!article) {
    notFound();
  }

  const headings = article.body && getHeadings(article.body);

  return (
    <>
      <PageBreadcrumbs
        links={[{ title: "Artikler", href: "/artikler" }]}
        currentPageTitle={article.title || ""}
      />

      <article>
        <ArticleHero {...article} />

        <div className="container grid grid-cols-3 gap-24 py-16">
          {headings && (
            <aside className="sticky col-span-1 col-start-3 row-start-1">
              <TableOfContents headings={headings} className="sticky top-12" />
            </aside>
          )}

          <div className="col-span-2 col-start-1 row-start-1 max-w-3xl">
            {article.body && <PortableTextRenderer value={article.body} />}
          </div>
        </div>
      </article>
    </>
  );
}
