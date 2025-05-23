import { defineQuery } from "next-sanity";

export const SEARCH_RESULT_QUERY = defineQuery(
  `*[_id in $documentIds]{
    _id,
    _type,
    title,
    slug,
    excerpt,
  }`,
);
