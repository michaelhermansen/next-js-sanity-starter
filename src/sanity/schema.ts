import { type SchemaTypeDefinition } from "sanity";
import allArticles from "./schemas/modules/all-articles";
import pageHero from "./schemas/modules/page-hero";
import sectionHeader from "./schemas/modules/section-header";
import blockContent from "./schemas/partials/block-content";
import { buttonVariant } from "./schemas/partials/button-variant";
import { colorVariant } from "./schemas/partials/color-variant";
import link from "./schemas/partials/link";
import sectionPadding from "./schemas/partials/section-padding";
import author from "./schemas/documents/author";
import category from "./schemas/documents/category";
import page from "./schemas/documents/page";
import article from "./schemas/documents/article";
import cta1 from "./schemas/modules/cta-1";
import modules from "./schemas/partials/modules";

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
    buttonVariant,
    sectionPadding,
    // modules
    pageHero,
    sectionHeader,
    cta1,
    allArticles,
  ],
};
