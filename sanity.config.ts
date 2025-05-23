"use client";

import { visionTool } from "@sanity/vision";
import { nbNOLocale } from "@sanity/locale-nb-no";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { embeddingsIndexDashboard } from "@sanity/embeddings-index-ui";
import { schema } from "@/sanity/schema";
import { structure } from "@/sanity/structure";
import { env } from "@/lib/env";
import { config } from "@/lib/config";

const isDevelopment = env.NEXT_PUBLIC_SITE_ENV === "development";

const developmentPlugins = [
  visionTool({ defaultApiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION }),
  embeddingsIndexDashboard(),
];

export default defineConfig({
  basePath: "/studio",
  title: config.siteName,
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  schema,
  plugins: [
    nbNOLocale(),
    structureTool({ structure, title: "Innhold" }),
    presentationTool({
      title: "Forhåndsvisning",
      previewUrl: { draftMode: { enable: "/api/draft-mode/enable" } },
    }),
    ...(isDevelopment ? developmentPlugins : []),
  ],
});
