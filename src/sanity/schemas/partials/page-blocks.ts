import { defineType } from "sanity";

export default defineType({
  name: "pageBlocks",
  title: "Byggeblokker",
  type: "array",
  of: [
    { type: "page-hero" },
    { type: "section-header" },
    { type: "all-articles" },
  ],
  options: {
    insertMenu: {
      groups: [
        {
          name: "headers",
          title: "Bannere",
          of: ["page-hero", "hero-2", "section-header"],
        },
        {
          name: "cta",
          title: "Call to action",
          of: [],
        },
        {
          name: "document-lists",
          title: "Dokumentlister",
          of: ["all-articles"],
        },
      ],
      views: [
        {
          name: "grid",
          previewImageUrl: (block) => `/sanity/preview/${block}.jpg`,
        },
        { name: "list" },
      ],
    },
  },
});
