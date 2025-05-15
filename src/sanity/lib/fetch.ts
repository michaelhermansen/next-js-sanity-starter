import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_QUERY, PAGES_SLUGS_QUERY } from "@/sanity/queries/page";
import {
  ARTICLE_QUERY,
  ARTICLES_QUERY,
  ARTICLES_SLUGS_QUERY,
} from "@/sanity/queries/article";
import {
  PAGE_QUERYResult,
  PAGES_SLUGS_QUERYResult,
  ARTICLE_QUERYResult,
  ARTICLES_QUERYResult,
  ARTICLES_SLUGS_QUERYResult,
} from "../sanity.types";

export const fetchSanityPageBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<PAGE_QUERYResult> => {
  const { data } = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug },
  });

  return data;
};

export const fetchSanityPagesStaticParams =
  async (): Promise<PAGES_SLUGS_QUERYResult> => {
    const { data } = await sanityFetch({
      query: PAGES_SLUGS_QUERY,
      perspective: "published",
      stega: false,
    });

    return data;
  };

export const fetchSanityArticles = async (): Promise<ARTICLES_QUERYResult> => {
  const { data } = await sanityFetch({
    query: ARTICLES_QUERY,
  });

  return data;
};

export const fetchSanityArticleBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<ARTICLE_QUERYResult> => {
  const { data } = await sanityFetch({
    query: ARTICLE_QUERY,
    params: { slug },
  });

  return data;
};

export const fetchSanityArticlesStaticParams =
  async (): Promise<ARTICLES_SLUGS_QUERYResult> => {
    const { data } = await sanityFetch({
      query: ARTICLES_SLUGS_QUERY,
      perspective: "published",
      stega: false,
    });

    return data;
  };
