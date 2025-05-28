import { sanityFetch } from "@/sanity/lib/live";
import { ARTICLE_QUERY, ARTICLES_QUERY } from "@/sanity/queries/article";
import { PAGE_QUERY } from "@/sanity/queries/page";
import {
  ARTICLE_QUERYResult,
  ARTICLES_QUERYResult,
  PAGE_QUERYResult,
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

export const fetchSanityArticles = async (
  categorySlugs?: string[],
): Promise<ARTICLES_QUERYResult> => {
  const { data } = await sanityFetch({
    query: ARTICLES_QUERY,
    params: { categorySlugs: categorySlugs || [] },
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
