import { CmsImage } from "@/components/cms-image";
import { VideoPlayer } from "@/components/video-player";
import { PortableText, PortableTextProps } from "@portabletext/react";
import Link from "next/link";

const portableTextComponents: PortableTextProps["components"] = {
  types: {
    image: ({ value }) => {
      return (
        <CmsImage
          image={value}
          alt={value.alt || ""}
          className="mx-auto rounded-md"
        />
      );
    },
    video: ({ value }) => {
      return (
        <div className="my-6 aspect-video overflow-clip rounded-md">
          <VideoPlayer url={value.videoUrl} />
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => <p className="mb-4 text-xl">{children}</p>,
    h1: ({ children }) => (
      <h1 className="mt-6 mb-4 text-5xl font-semibold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-6 mb-4 text-4xl font-semibold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-4 text-3xl font-semibold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 mb-4 text-2xl font-semibold">{children}</h4>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const isExternal =
        (value?.href || "").startsWith("http") ||
        (value?.href || "").startsWith("https") ||
        (value?.href || "").startsWith("mailto");

      const target = isExternal ? "_blank" : undefined;

      return (
        <Link
          href={value?.href}
          target={target}
          rel={target ? "noopener" : undefined}
          className="underline hover:no-underline"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 list-inside list-disc pl-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 list-inside list-decimal pl-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};

function PortableTextRenderer(props: { value: PortableTextProps["value"] }) {
  return (
    <PortableText value={props.value} components={portableTextComponents} />
  );
}

export default PortableTextRenderer;
