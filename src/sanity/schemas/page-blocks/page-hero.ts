import { defineField, defineType } from "sanity";
import { ThLargeIcon } from "@sanity/icons";

export default defineType({
  name: "page-hero",
  title: "Sidebanner",
  type: "object",
  icon: ThLargeIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Tittel",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "paragraph",
      type: "text",
      title: "Avsnitt",
      rows: 3,
    }),
    defineField({
      name: "links",
      title: "Linker",
      type: "array",
      of: [{ type: "link" }],
      validation: (rule) => rule.max(2),
    }),
    defineField({
      name: "centered",
      title: "Midtstilt",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: "Sidebanner",
        subtitle: title,
      };
    },
  },
});
