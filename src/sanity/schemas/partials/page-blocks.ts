import { defineType } from "sanity";

export default defineType({
  name: "pageBlocks",
  title: "Byggeblokker",
  type: "array",
  of: [
    { type: "all-articles" },
    { type: "navigationSection" },
    { type: "page-hero" },
    { type: "section-header" },
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
