import { size } from "@/app/api/og/route";
import { env } from "@/lib/env";
import { siteConfig } from "@/lib/site-config";
import { urlFor } from "@/sanity/lib/image";
import {
  SingleArticleQueryResult,
  SinglePageQueryResult,
} from "@/sanity/sanity.types";
import { Metadata } from "next";

const isProduction = env.NEXT_PUBLIC_SITE_ENV === "production";

export function generatePageMetadata(
  document: SinglePageQueryResult | SingleArticleQueryResult,
): Metadata {
  const title = document?.meta_title || undefined;
  const description = document?.meta_description || undefined;
  const locale = siteConfig.locales[0];

  const generatedOgUrl = new URL("/api/og", env.NEXT_PUBLIC_SITE_URL);
  generatedOgUrl.searchParams.set("title", title || "");

  const ogImageUrl = document?.ogImage
    ? urlFor(document?.ogImage).quality(100).width(1200).height(630).url()
    : generatedOgUrl.toString();

  const robots = !isProduction
    ? "noindex, nofollow"
    : document?.noindex
      ? "noindex"
      : "index, follow";

  // Generate canonical URL based on document type and slug
  let canonicalPath: string | undefined;

  if (document?.slug?.current) {
    switch (document._type) {
      case "page":
        canonicalPath = `/${document.slug.current}`;
      case "article":
        canonicalPath = `/artikler/${document.slug.current}`;
    }
  }

  const canonicalUrl = canonicalPath
    ? new URL(canonicalPath, env.NEXT_PUBLIC_SITE_URL).toString()
    : undefined;

  return {
    title,
    description,
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
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
