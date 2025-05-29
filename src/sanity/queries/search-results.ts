import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export function fetchSearchResults(params: { documents: string[] }) {
  const searchResultsQuery = defineQuery(`
    *[_type in ["page", "article"] && _id in $documents] {
      _id,
      _type,
      title,
      slug,
      excerpt
    }
  `);

  return sanityFetch({
    query: searchResultsQuery,
    params,
    tags: ["page", "article"],
  });
}
