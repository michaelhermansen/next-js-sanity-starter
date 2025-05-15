import { defineField, defineType } from "sanity";
import { ThLargeIcon } from "@sanity/icons";

export default defineType({
  name: "hero-1",
  title: "Hero 1",
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
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
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
        title: "Hero 1",
        subtitle: title,
      };
    },
  },
});
