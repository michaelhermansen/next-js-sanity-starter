import { defineField, defineType } from "sanity";
import { ThLargeIcon } from "@sanity/icons";

export default defineType({
  name: "page-hero",
  title: "Toppbanner",
  type: "object",
  icon: ThLargeIcon,
  fields: [
    defineField({
      name: "body",
      type: "block-content",
      title: "Innhold",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
        {
          name: "contain",
          title: "Ikke beskjær",
          type: "boolean",
          initialValue: false,
        },
      ],
    }),
    defineField({
      name: "links",
      type: "array",
      of: [{ type: "link" }],
      validation: (rule) => rule.max(2),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: "Toppbanner",
        subtitle: title,
      };
    },
  },
});
