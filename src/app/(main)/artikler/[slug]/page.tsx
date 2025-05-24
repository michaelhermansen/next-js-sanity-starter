import ArticleHero from "@/components/article-hero";
import TableOfContents from "@/components/table-of-contents";
import { getHeadingId, getHeadings } from "@/features/portable-text/headings";
import PortableTextRenderer from "@/features/portable-text/portable-text-renderer";
import { cn } from "@/lib/utils";
import { fetchSanityArticleBySlug } from "@/sanity/lib/fetch";
import { generatePageMetadata } from "@/sanity/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isEmpty } from "radash";

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
    <article>
      <ArticleHero {...article} />

      <div className="container grid grid-cols-3 gap-24 py-12">
        {headings && (
          <aside className="sticky col-span-1 col-start-3 row-start-1">
            <TableOfContents headings={headings} className="sticky top-12" />
          </aside>
        )}

        <div className="col-span-2 col-start-1 row-start-1">
          {article.body && <PortableTextRenderer value={article.body} />}
        </div>
      </div>
    </article>
  );
}
