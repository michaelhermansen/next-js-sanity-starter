import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export default defineType({
  name: "section-header",
  type: "object",
  title: "Seksjonsbanner",
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: "deactivated",
      title: "Deaktivert",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "paragraph",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
      deactivated: "deactivated",
    },
    prepare({ title, deactivated }) {
      return {
        title: "Seksjonsbanner",
        subtitle: deactivated ? "Deaktivert" : title,
      };
    },
  },
});
