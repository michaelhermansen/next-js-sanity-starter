import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";
import { modules } from "./fragments/modules";
import { imageAsset } from "./fragments/image-asset";

export async function fetchSinglePage(params: { slug: string }) {
  const singlePageQuery = defineQuery(`
    *[_type == "page" && slug.current == $slug][0]{
      _id,
      _type,
      slug,
      title,
      meta_title,
      meta_description,
      noindex,
      ogImage {
        ...,
        ${imageAsset}
      },
      ${modules}
    }
  `);

  return sanityFetch({
    query: singlePageQuery,
    params,
    tags: [`page:${params.slug}`],
  });
}
