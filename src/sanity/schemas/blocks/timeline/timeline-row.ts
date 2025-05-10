import { defineType, defineField } from "sanity";
import { TimelineIcon } from "@sanity/icons";

export default defineType({
  name: "timeline-row",
  type: "object",
  title: "Timeline Row",
  description: "Row of Timeline Sections",
  icon: TimelineIcon,
  fields: [
    defineField({
      name: "padding",
      type: "section-padding",
    }),
    defineField({
      name: "colorVariant",
      type: "color-variant",
      description: "Select a background color variant",
    }),
    defineField({
      name: "timelines",
      type: "array",
      of: [{ type: "timelines-1" }],
      options: {
        insertMenu: {
          views: [
            {
              name: "grid",
              previewImageUrl: (block) => `/sanity/preview/${block}.jpg`,
            },
            { name: "list" },
          ],
        },
      },
    }),
  ],
  preview: {
    select: {
      subtitle: "timelines.0.title",
    },
    prepare({ subtitle }) {
      return {
        title: "Timelines Row",
        subtitle,
      };
    },
  },
});
