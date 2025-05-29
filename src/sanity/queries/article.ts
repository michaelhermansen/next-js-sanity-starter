import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";
import { imageAsset } from "./fragments/image-asset";

export async function fetchSingleArticle(params: { slug: string }) {
  const singleArticleQuery = defineQuery(`
    *[_type == "article" && slug.current == $slug][0] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      slug,
      title,
      slug,
      excerpt,
      image,
      body,
      meta_title,
      meta_description,
      noindex,
      ogImage {
        ...,
        ${imageAsset}
      },
      author->{
        name,
        image {
          ...,
          ${imageAsset},
        }
      },
      image {
        ...,
        ${imageAsset}
      },
      categories[]->{
        _id,
        title,
        slug,
      },
    }
  `);

  return sanityFetch({
    query: singleArticleQuery,
    params,
    tags: [`article:${params.slug}`],
  });
}

export async function fetchMultipleArticles(params?: {
  categories?: string[];
}) {
  const multipleArticlesQuery = defineQuery(`
    *[_type == "article" && defined(slug) && (
      !defined($categories) || 
      count($categories) == 0 || 
      count((categories[]->slug.current)[@ in $categories]) > 0
    )] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      excerpt,
      image {
        ...,
        ${imageAsset}
      },
      categories[]->{
        _id,
        title,
        slug,
      },
    }
  `);

  return sanityFetch({
    query: multipleArticlesQuery,
    params: { categories: params?.categories || [] },
    tags: ["article"],
  });
}
