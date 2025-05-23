import { type SchemaTypeDefinition } from "sanity";
import allArticles from "./schemas/blocks/all-articles";
import hero1 from "./schemas/blocks/hero-1";
import hero2 from "./schemas/blocks/hero-2";
import sectionHeader from "./schemas/blocks/section-header";
import blockContent from "./schemas/blocks/shared/block-content";
import { buttonVariant } from "./schemas/blocks/shared/button-variant";
import { colorVariant } from "./schemas/blocks/shared/color-variant";
import link from "./schemas/blocks/shared/link";
import sectionPadding from "./schemas/blocks/shared/section-padding";
import author from "./schemas/documents/author";
import category from "./schemas/documents/category";
import page from "./schemas/documents/page";
import article from "./schemas/documents/article";
import cta1 from "./schemas/blocks/cta-1";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    article,
    author,
    category,
    // shared objects
    blockContent,
    link,
    colorVariant,
    buttonVariant,
    sectionPadding,
    // blocks
    hero1,
    hero2,
    sectionHeader,
    cta1,
    allArticles,
  ],
};
