import { defineType, defineArrayMember, defineField } from "sanity";
import { VideoPreview } from "@/sanity/schemas/previews/video-preview";
import { VideoIcon } from "@sanity/icons";

export default defineType({
  title: "Block Content",
  name: "block-content",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Overskrift", value: "h2" },
        { title: "Underoverskrift", value: "h3" },
        { title: "Sitat", value: "blockquote" },
      ],
      lists: [
        { title: "Punktliste", value: "bullet" },
        { title: "Nummerert liste", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
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
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternativ tekt",
        }),
        defineField({
          name: "figcaption",
          type: "string",
          title: "Bildetekst",
        }),
      ],
    }),
    defineArrayMember({
      name: "video",
      type: "object",
      title: "Video",
      icon: VideoIcon,
      fields: [
        defineField({
          name: "videoUrl",
          title: "Video-URL",
          description:
            "Lim inn en video-URL (støtter YouTube, Vimeo og andre videokilder).",
          type: "url",
          validation: (Rule) => Rule.required().uri({ scheme: ["https"] }),
        }),
        defineField({
          name: "aspectRatio",
          title: "Format",
          type: "string",
          options: {
            list: [
              { title: "Liggende", value: "16/9" },
              { title: "Kvadrat", value: "1/1" },
            ],
          },
          initialValue: "16:9",
        }),
      ],
      preview: {
        select: {
          title: "videoUrl",
          subtitle: "aspectRatio",
        },
      },
      components: {
        preview: VideoPreview,
      },
    }),
  ],
});
