import {
  defineLocations,
  defineDocuments,
  PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    // Add more locations for other types
    article: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `/artikler/${doc?.slug}`,
          },
          { title: "Artikler", href: `/artikler` },
        ],
      }),
    }),
  },
  mainDocuments: defineDocuments([
    {
      route: "/",
      filter: `_type == 'page' && slug.current == 'index'`,
    },
    {
      route: "/:slug",
      filter: `_type == 'page' && slug.current == $slug`,
    },
    {
      route: "/artikler/:slug",
      filter: `_type == 'article' && slug.current == $slug`,
    },
  ]),
};
