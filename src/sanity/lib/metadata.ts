import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult, POST_QUERYResult } from "../../../sanity.types";
const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

export function generatePageMetadata({
  page,
  slug,
}: {
  page: PAGE_QUERYResult | POST_QUERYResult;
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
            ? urlFor(page?.ogImage).quality(100).url()
            : generatedOgUrl.toString(),
          width: page?.ogImage?.asset?.metadata?.dimensions?.width || 1200,
          height: page?.ogImage?.asset?.metadata?.dimensions?.height || 630,
        },
      ],
      locale: "nb_NO",
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
