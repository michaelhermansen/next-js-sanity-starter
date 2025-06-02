import { type SchemaTypeDefinition } from "sanity";
import article from "./schemas/documents/article";
import author from "./schemas/documents/author";
import category from "./schemas/documents/category";
import page from "./schemas/documents/page";
import allArticles from "./schemas/page-blocks/all-articles";
import navigationSection from "./schemas/page-blocks/navigation-section";
import pageHero from "./schemas/page-blocks/page-hero";
import sectionHeader from "./schemas/page-blocks/section-header";
import blockContent from "./schemas/partials/block-content";
import link from "./schemas/partials/link";
import pageBlocks from "./schemas/partials/page-blocks";
import navigationCard from "./schemas/partials/navigation-card";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    page,
    article,
    author,
    category,

    // Partials
    pageBlocks,
    blockContent,
    link,
    navigationCard,

    // Page blocks
    allArticles,
    navigationSection,
    pageHero,
    sectionHeader,
  ],
};
