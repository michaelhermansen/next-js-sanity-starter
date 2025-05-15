import { PortableText, PortableTextProps } from "@portabletext/react";
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Highlight, themes } from "prism-react-renderer";
import { CopyButton } from "@/components/ui/copy-button";
import { CmsImage } from "./cms-image";

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
    youtube: ({ value }) => {
      const { videoId } = value;
      return (
        <div className="mb-4 aspect-video max-w-[45rem] overflow-hidden rounded-md">
          <YouTubeEmbed videoid={videoId} params="rel=0" />
        </div>
      );
    },
    code: ({ value }) => {
      return (
        <div className="border-border lg: bg-primary/80 dark:bg-muted/80 my-4 grid overflow-x-auto rounded-lg border text-xs">
          <div className="border-border bg-primary/80 dark:bg-muted flex items-center justify-between border-b px-4 py-2">
            <div className="text-muted-foreground font-mono">
              {value.filename || ""}
            </div>
            <CopyButton code={value.code} />
          </div>
          <Highlight
            theme={themes.vsDark}
            code={value.code}
            language={value.language || "typescript"}
          >
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className="m-0 overflow-auto bg-transparent p-6"
                style={style}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => <p className="mb-4 text-xl">{children}</p>,
    h1: ({ children }) => (
      <h1 className="my-4 text-5xl font-semibold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="my-4 text-4xl font-semibold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="my-4 text-3xl font-semibold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="my-4 text-2xl font-semibold">{children}</h4>
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
