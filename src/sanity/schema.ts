import { type SchemaTypeDefinition } from "sanity";
import article from "./schemas/documents/article";
import author from "./schemas/documents/author";
import category from "./schemas/documents/category";
import page from "./schemas/documents/page";
import allArticles from "./schemas/modules/all-articles";
import cta1 from "./schemas/modules/cta-1";
import pageHero from "./schemas/modules/page-hero";
import sectionHeader from "./schemas/modules/section-header";
import blockContent from "./schemas/partials/block-content";
import { colorVariant } from "./schemas/partials/color-variant";
import link from "./schemas/partials/link";
import modules from "./schemas/partials/modules";
import sectionPadding from "./schemas/partials/section-padding";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    article,
    author,
    category,
    // partials
    modules,
    blockContent,
    link,
    colorVariant,
    sectionPadding,
    // modules
    pageHero,
    sectionHeader,
    cta1,
    allArticles,
  ],
};
