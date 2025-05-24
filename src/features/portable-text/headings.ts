import { isArray, isObject, isString, sift } from "radash";
import { PortableTextProps } from "next-sanity";
import slugify from "slugify";

export function getHeading(headingChildren: unknown) {
  let heading = headingChildren;

  if (isArray(heading)) {
    heading = heading[0];
  }

  if (isString(heading)) {
    return heading;
  }

  if (isObject(heading) && "text" in heading && isString(heading.text)) {
    return heading.text;
  }

  if (
    isObject(heading) &&
    "props" in heading &&
    isObject(heading.props) &&
    "children" in heading.props
  ) {
    return getHeading(heading.props.children);
  }
}

export function getHeadingId(headingChildren: unknown) {
  const heading = getHeading(headingChildren);
  if (heading) return slugify(heading);
}

export function getHeadings(value: PortableTextProps["value"]) {
  const headingStyles = ["h2", "h3"] as const;
  if (!isArray(value)) return [];

  const headings = value.map((item) => {
    if (headingStyles.includes(item.style)) {
      const headingText = getHeading(item.children);
      if (!headingText) return null;

      return {
        text: headingText,
        id: slugify(headingText),
        style: item.style as (typeof headingStyles)[number],
      };
    }
  });

  return sift(headings);
}

export type ResolvedHeading = ReturnType<typeof getHeadings>[number];
