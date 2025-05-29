import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export async function fetchMultipleCategories() {
  const multipleCategoriesQuery = defineQuery(`
    *[_type == "category"] | order(orderRank asc) {
      title,
      slug
    }
  `);

  return sanityFetch({
    query: multipleCategoriesQuery,
    tags: ["category"],
  });
}
