import { env } from "@/lib/env";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: env.NEXT_PUBLIC_SITE_ENV === "production",
  perspective: "published",
  stega: {
    studioUrl: `${env.NEXT_PUBLIC_SITE_URL}/studio`,
  },
});
