import { defineField, defineType } from "sanity";

export default defineType({
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "href",
      title: "href",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          // scheme: ["https", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "targetBlank",
      type: "boolean",
      title: "Åpne i ny fane",
      initialValue: false,
    }),
  ],
});
