import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult, ARTICLE_QUERYResult } from "../sanity.types";
import { config } from "@/lib/config";
const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

export function generatePageMetadata({
  page,
  slug,
}: {
  page: PAGE_QUERYResult | ARTICLE_QUERYResult;
  slug: string;
}) {
  const generatedOgUrl = new URL("/api/og", process.env.NEXT_PUBLIC_SITE_URL);

  if (page?.meta_title) {
    generatedOgUrl.searchParams.set("title", page.meta_title);
  }

  return {
    title: page?.meta_title,
    description: page?.meta_description,
    openGraph: {
      title: page?.meta_title,
      description: page?.meta_description,
      images: [
        {
          url: page?.ogImage
            ? urlFor(page?.ogImage).quality(100).width(1200).height(630).url()
            : generatedOgUrl.toString(),
          width: 1200,
          height: 630,
        },
      ],
      locale: config.locales[0],
      type: "website",
    },
    robots: !isProduction
      ? "noindex, nofollow"
      : page?.noindex
        ? "noindex"
        : "index, follow",
    alternates: {
      canonical: `/${slug === "index" ? "" : slug}`,
    },
  };
}
