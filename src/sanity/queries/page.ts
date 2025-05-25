import { defineQuery } from "next-sanity";
import { hero1Query } from "./fragments/hero-1";
import { sectionHeaderQuery } from "./fragments/section-header";
import { cta1Query } from "./fragments/cta-1";
import { allArticlesQuery } from "./fragments/all-articles";

export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    modules[]{
      ${hero1Query},
      ${sectionHeaderQuery},
      ${cta1Query},
      ${allArticlesQuery},
    },
    meta_title,
    title,
    meta_description,
    noindex,
    ogImage {
      ...,
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      },
    }
  }
`);
