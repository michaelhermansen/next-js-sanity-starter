import { defineLive } from "next-sanity";
import { client } from "./client";
import { env } from "@/lib/env";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken: env.SANITY_API_READ_TOKEN,
  serverToken: env.SANITY_API_READ_TOKEN,
  fetchOptions: { revalidate: 86_400 }, // 24 hours
});
