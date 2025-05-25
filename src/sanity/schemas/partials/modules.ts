import { defineType } from "sanity";

export default defineType({
  name: "modules",
  title: "Moduler",
  type: "array",
  of: [
    { type: "hero-1" },
    { type: "section-header" },
    { type: "cta-1" },
    { type: "all-articles" },
  ],
  options: {
    insertMenu: {
      groups: [
        {
          name: "headers",
          title: "Bannere",
          of: ["hero-1", "hero-2", "section-header"],
        },
        {
          name: "cta",
          title: "Call to action",
          of: ["cta-1"],
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
