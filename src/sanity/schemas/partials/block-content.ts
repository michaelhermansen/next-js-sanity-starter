import { defineType, defineArrayMember } from "sanity";
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
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineArrayMember({
      name: "video",
      type: "object",
      title: "Video",
      icon: VideoIcon,
      fields: [
        {
          name: "videoUrl",
          title: "Video-URL",
          type: "string",
          description: "Lim inn en video-URL",
        },
      ],
      preview: {
        select: {
          title: "videoUrl",
        },
      },
      components: {
        preview: VideoPreview,
      },
    }),
  ],
});
