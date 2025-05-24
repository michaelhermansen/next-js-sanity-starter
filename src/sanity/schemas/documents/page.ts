import { DocumentIcon } from "@sanity/icons";
import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  type: "document",
  title: "Page",
  icon: DocumentIcon,
  groups: [
    {
      name: "content",
      title: "Innhold",
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "settings",
      title: "Innstillinger",
    },
  ],
  fields: [
    defineField({ name: "title", type: "string", group: "content" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "settings",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "blocks",
      type: "array",
      group: "content",
      of: [
        { type: "hero-1" },
        { type: "hero-2" },
        { type: "section-header" },
        { type: "cta-1" },
        { type: "all-articles" },
      ],
      options: {
        insertMenu: {
          groups: [
            {
              name: "headers",
              title: "Bannere",
              of: ["hero-1", "hero-2", "section-header"],
            },
            {
              name: "cta",
              title: "Call to action",
              of: ["cta-1"],
            },
            {
              name: "document-lists",
              title: "Dokumentlister",
              of: ["all-articles"],
            },
          ],
          views: [
            {
              name: "grid",
              previewImageUrl: (block) => `/sanity/preview/${block}.jpg`,
            },
            { name: "list" },
          ],
        },
      },
    }),
    defineField({
      name: "meta_title",
      title: "Meta Title",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "text",
      group: "seo",
    }),
    defineField({
      name: "noindex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
      group: "seo",
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "seo",
    }),
    orderRankField({ type: "page" }),
  ],
});
