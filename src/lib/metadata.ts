import { siteConfig } from "@/lib/site-config";
import { env } from "@/lib/env";
import { urlFor } from "@/sanity/lib/image";
import { Metadata } from "next";
import { ARTICLE_QUERYResult, PAGE_QUERYResult } from "../sanity/sanity.types";
import { size } from "@/app/api/og/route";

const isProduction = env.NEXT_PUBLIC_SITE_ENV === "production";

export function generatePageMetadata(options: {
  page: PAGE_QUERYResult | ARTICLE_QUERYResult;
  slug: string;
}): Metadata {
  const title = options.page?.meta_title || undefined;
  const description = options.page?.meta_description || undefined;
  const locale = siteConfig.locales[0];

  const generatedOgUrl = new URL("/api/og", env.NEXT_PUBLIC_SITE_URL);
  generatedOgUrl.searchParams.set("title", title || "");

  const ogImageUrl = options.page?.ogImage
    ? urlFor(options.page?.ogImage).quality(100).width(1200).height(630).url()
    : generatedOgUrl.toString();

  const robots = !isProduction
    ? "noindex, nofollow"
    : options.page?.noindex
      ? "noindex"
      : "index, follow";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
        },
      ],
      locale,
      type: "website",
    },
    robots,
  };
}

export const rootLayoutMetadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL!),
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  openGraph: {
    title: siteConfig.name,
    images: [
      {
        url: `/api/og`,
        width: size.width,
        height: size.height,
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  robots: !isProduction ? "noindex, nofollow" : "index, follow",
};
