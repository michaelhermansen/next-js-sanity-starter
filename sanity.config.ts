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
import { siteConfig } from "@/lib/site-config";

const adminTools = ["vision", "embeddings-index"];

export default defineConfig({
  basePath: "/studio",
  title: siteConfig.name,
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
    visionTool({ defaultApiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION }),
    embeddingsIndexDashboard(),
  ],
  // Enable certain tools only for admin users
  tools: (tools, context) => {
    const isAdmin = Boolean(
      context.currentUser?.roles.find(({ name }) => name === "administrator"),
    );

    if (isAdmin) return tools;
    return tools.filter((tool) => !adminTools.includes(tool.name));
  },
});
