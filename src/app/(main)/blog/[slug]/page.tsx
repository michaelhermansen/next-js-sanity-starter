import { notFound } from "next/navigation";
import Breadcrumbs, { BreadcrumbLinkType } from "@/components/ui/breadcrumbs";
import ArticleHero from "@/components/article-hero";
import PortableTextRenderer from "@/features/portable-text/portable-text-renderer";
import { fetchSanityArticleBySlug } from "@/sanity/lib/fetch";
import { generatePageMetadata } from "@/sanity/lib/metadata";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = await fetchSanityArticleBySlug({ slug: params.slug });

  if (!article) {
    notFound();
  }

  return generatePageMetadata({ page: article, slug: `/blog/${params.slug}` });
}

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const article = await fetchSanityArticleBySlug(params);

  if (!article) {
    notFound();
  }

  const links: BreadcrumbLinkType[] = article
    ? [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Blog",
          href: "/blog",
        },
        {
          label: article.title as string,
          href: "#",
        },
      ]
    : [];

  return (
    <section>
      <div className="container py-16 xl:py-20">
        <article className="mx-auto max-w-3xl">
          <Breadcrumbs links={links} />
          <ArticleHero {...article} />
          {article.body && <PortableTextRenderer value={article.body} />}
        </article>
      </div>
    </section>
  );
}
