import { type SchemaTypeDefinition } from "sanity";
import allPosts from "./schemas/blocks/all-posts";
import cta1 from "./schemas/blocks/cta/cta-1";
import gridCard from "./schemas/blocks/grid/grid-card";
import gridPost from "./schemas/blocks/grid/grid-post";
import gridRow from "./schemas/blocks/grid/grid-row";
import pricingCard from "./schemas/blocks/grid/pricing-card";
import hero1 from "./schemas/blocks/hero/hero-1";
import hero2 from "./schemas/blocks/hero/hero-2";
import sectionHeader from "./schemas/blocks/section-header";
import blockContent from "./schemas/blocks/shared/block-content";
import { buttonVariant } from "./schemas/blocks/shared/button-variant";
import { colorVariant } from "./schemas/blocks/shared/color-variant";
import link from "./schemas/blocks/shared/link";
import sectionPadding from "./schemas/blocks/shared/section-padding";
import splitCard from "./schemas/blocks/split/split-card";
import splitCardsList from "./schemas/blocks/split/split-cards-list";
import splitContent from "./schemas/blocks/split/split-content";
import splitImage from "./schemas/blocks/split/split-image";
import splitInfo from "./schemas/blocks/split/split-info";
import splitInfoList from "./schemas/blocks/split/split-info-list";
import splitRow from "./schemas/blocks/split/split-row";
import timelineRow from "./schemas/blocks/timeline/timeline-row";
import timelinesOne from "./schemas/blocks/timeline/timelines-1";
import author from "./schemas/documents/author";
import category from "./schemas/documents/category";
import page from "./schemas/documents/page";
import post from "./schemas/documents/post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    post,
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
    splitRow,
    splitContent,
    splitCardsList,
    splitCard,
    splitImage,
    splitInfoList,
    splitInfo,
    gridCard,
    pricingCard,
    gridPost,
    gridRow,
    timelineRow,
    timelinesOne,
    cta1,
    allPosts,
  ],
};
