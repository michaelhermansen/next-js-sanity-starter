import { notFound } from "next/navigation";
import ArticleHero from "@/components/article-hero";
import PortableTextRenderer from "@/features/portable-text/portable-text-renderer";
import { fetchSanityArticleBySlug } from "@/sanity/lib/fetch";
import { generatePageMetadata } from "@/sanity/lib/metadata";
import {
  Breadcrumbs,
  BreadcrumbsCurrentPage,
  BreadcrumbsHomeLink,
  BreadcrumbsLink,
  BreadcrumbsSeparator,
} from "@/components/ui/breadcrumbs";

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

  return (
    <article className="container py-6 lg:py-12">
      <Breadcrumbs className="mb-6 lg:mb-12">
        <BreadcrumbsHomeLink />
        <BreadcrumbsSeparator />
        <BreadcrumbsLink href="/artikler">Artikler</BreadcrumbsLink>
        <BreadcrumbsSeparator />
        <BreadcrumbsCurrentPage>{article.title}</BreadcrumbsCurrentPage>
      </Breadcrumbs>
      <ArticleHero {...article} />
      <div className="max-w-3xl">
        {article.body && <PortableTextRenderer value={article.body} />}
      </div>
    </article>
  );
}
