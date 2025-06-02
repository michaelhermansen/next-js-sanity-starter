import { defineField, defineType } from "sanity";

export default defineType({
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
    }),
    defineField({
      title: "URL",
      name: "href",
      type: "url",
      description: "F.eks. «/artikler» eller «https://example.com».",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
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
