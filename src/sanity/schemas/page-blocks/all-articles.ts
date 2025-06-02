import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "all-articles",
  type: "object",
  title: "Alle artikler",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "deactivated",
      title: "Deaktivert",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { deactivated: "deactivated" },
    prepare({ deactivated }) {
      return {
        title: "Alle artikler",
        subtitle: deactivated ? "Deaktivert" : undefined,
      };
    },
  },
});
