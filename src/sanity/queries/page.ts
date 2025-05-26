import { defineQuery } from "next-sanity";
import { pageHeroQuery } from "./fragments/page-hero";
import { sectionHeaderQuery } from "./fragments/section-header";
import { cta1Query } from "./fragments/cta-1";
import { allArticlesQuery } from "./fragments/all-articles";

export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    modules[]{
      ${pageHeroQuery},
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
