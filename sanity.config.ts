"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { nbNOLocale } from "@sanity/locale-nb-no";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { schema } from "@/sanity/schema";
import { resolve } from "@/sanity/presentation/resolve";
import { structure } from "@/sanity/structure";
import { codeInput } from "@sanity/code-input";
import { env } from "@/lib/env";
import { config } from "@/lib/config";

export default defineConfig({
  basePath: "/studio",
  title: config.siteName,
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  // Add and edit the content schema in the '@/sanity/schema' folder
  schema,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft-mode/enable",
        },
      },
      resolve,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION }),
    codeInput(),
    nbNOLocale(),
  ],
});
