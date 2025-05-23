"use server";

import { env } from "@/lib/env";
import { sanityFetch } from "@/sanity/lib/live";
import { SEARCH_RESULT_QUERY } from "@/sanity/queries/search-results";
import type { SEARCH_RESULT_QUERYResult } from "@/sanity/sanity.types";
import { z } from "zod";

const SCORE_THRESHOLD = 0;

const endpoint = `https://${env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/vX/embeddings-index/query/${env.NEXT_PUBLIC_SANITY_DATASET}/search`;
const embeddingsIndexResultSchema = z.array(
  z.object({
    score: z.number(),
    value: z.object({ documentId: z.string(), type: z.string() }),
  }),
);

export type DocumentType = SEARCH_RESULT_QUERYResult[number]["_type"];

export async function getSearchResults(options: {
  query: string;
  maxResults: number;
  types?: DocumentType[];
}) {
  if (!options.query) return [];

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${env.SANITY_API_EDITOR_TOKEN}`,
    },
    body: JSON.stringify({
      query: options.query,
      maxResults: options.maxResults,
      filter: {
        type: options.types,
      },
    }),
  });

  const json = await response.json();
  const hits = embeddingsIndexResultSchema.parse(json);
  const relevantHits = hits.filter((hit) => hit.score > SCORE_THRESHOLD);
  const documentIds = relevantHits.map((item) => item.value.documentId);

  const scoreMap = new Map(
    relevantHits.map((item) => [item.value.documentId, item.score]),
  );

  const { data: results } = await sanityFetch({
    query: SEARCH_RESULT_QUERY,
    params: { documentIds },
  });

  // Sort documents by score descending
  const sortedResults = results.sort((a, b) => {
    const scoreA = scoreMap.get(a._id) || 0;
    const scoreB = scoreMap.get(b._id) || 0;
    return scoreB - scoreA;
  });

  return sortedResults.map((doc) => ({
    ...doc,
    score: scoreMap.get(doc._id),
  }));
}
