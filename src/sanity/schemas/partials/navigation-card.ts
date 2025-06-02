import { defineField, defineType } from "sanity";

export default defineType({
  type: "object",
  title: "Navigasjonskort",
  name: "navigationCard",
  fields: [
    defineField({
      type: "link",
      name: "link",
      title: "Lenke",
    }),
    defineField({
      type: "text",
      name: "description",
      title: "Beskrivelse",
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: "link.title",
      subtitle: "link.href",
    },
  },
});
