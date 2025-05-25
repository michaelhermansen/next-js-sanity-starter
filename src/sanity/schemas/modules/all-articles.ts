import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "all-articles",
  type: "object",
  title: "Alle artikler",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "padding",
      type: "section-padding",
    }),
    defineField({
      name: "colorVariant",
      type: "color-variant",
      title: "Color Variant",
      description: "Select a background color variant",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "All Articles",
      };
    },
  },
});
