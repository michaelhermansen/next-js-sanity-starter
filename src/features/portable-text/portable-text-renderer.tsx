import { CmsImage } from "@/components/cms-image";
import { VideoPlayer } from "@/components/video-player";
import { PortableText, PortableTextProps } from "next-sanity";

import Link from "next/link";
import { getHeadingId } from "./headings";

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
        <div className="my-8 aspect-video overflow-clip rounded-md">
          <VideoPlayer url={value.videoUrl} />
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="mb-4 max-w-[65ch] text-xl">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="mt-6 mb-4 text-5xl font-semibold first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={getHeadingId(children)}
        className="mt-6 mb-4 text-4xl font-semibold first:mt-0"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={getHeadingId(children)}
        className="mt-6 mb-4 text-3xl font-semibold first:mt-0"
      >
        {children}
      </h3>
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
