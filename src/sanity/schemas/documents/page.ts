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
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "En URL-vennlig versjon av tittelen",
      type: "slug",
      group: "settings",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pageBlocks",
      title: "Byggeblokker",
      type: "pageBlocks",
      group: "content",
    }),
    defineField({
      name: "meta_title",
      title: "Meta-tittel",
      description: "Tittelen som vises av søkemotorer.",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "meta_description",
      title: "Meta-beskrivelse",
      description: "Beskrivelsen som vises av søkemotorer.",
      type: "text",
      group: "seo",
    }),
    defineField({
      name: "noindex",
      title: "Ikke indekser",
      description: "Be søkemotorer om å ikke indeksere denne siden.",
      type: "boolean",
      initialValue: false,
      group: "seo",
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      description: "Bildet som vises når siden blir delt på sosiale medier.",
      type: "image",
      options: { hotspot: true },
      group: "seo",
    }),
    orderRankField({ type: "page" }),
  ],
});
