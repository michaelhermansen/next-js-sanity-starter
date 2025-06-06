import { defineType } from "sanity";

export default defineType({
  name: "pageBlocks",
  title: "Byggeblokker",
  type: "array",
  of: [
    { type: "pageHero" },
    { type: "navigationSection" },
    { type: "allArticles" },
  ],
  options: {
    insertMenu: {
      groups: [
        {
          name: "modules",
          title: "Moduler",
          of: ["pageHero", "navigationSection"],
        },
        {
          name: "documentLists",
          title: "Dokumentlister",
          of: ["allArticles"],
        },
      ],
      filter: true,
      views: [
        { name: "list" },
        {
          name: "grid",
          previewImageUrl: (block) => `/sanity/preview/${block}.png`,
        },
      ],
    },
  },
});
