import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "navigationSection",
  title: "Navigasjonsseksjon",
  type: "object",
  fields: [
    defineField({
      name: "deactivated",
      title: "Deaktivert",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
    }),
    defineField({
      name: "navigationCards",
      title: "Navigasjonskort",
      type: "array",
      of: [
        defineArrayMember({
          type: "navigationCard",
          title: "Navigasjonskort",
          name: "navigationCard",
        }),
      ],
    }),
  ],
});
