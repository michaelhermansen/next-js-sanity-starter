import { type SchemaTypeDefinition } from "sanity";
import article from "./schemas/documents/article";
import author from "./schemas/documents/author";
import category from "./schemas/documents/category";
import page from "./schemas/documents/page";
import allArticles from "./schemas/page-blocks/all-articles";
import pageHero from "./schemas/page-blocks/page-hero";
import sectionHeader from "./schemas/page-blocks/section-header";
import blockContent from "./schemas/partials/block-content";
import { colorVariant } from "./schemas/partials/color-variant";
import link from "./schemas/partials/link";
import pageBlocks from "./schemas/partials/page-blocks";
import sectionPadding from "./schemas/partials/section-padding";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    article,
    author,
    category,
    // partials
    pageBlocks,
    blockContent,
    link,
    colorVariant,
    sectionPadding,
    // page blocks
    pageHero,
    sectionHeader,
    allArticles,
  ],
};
