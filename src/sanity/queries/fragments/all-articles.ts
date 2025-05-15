import { groq } from "next-sanity";

export const allArticlesQuery = groq`
  _type == "all-articles" => {
    _type,
    _key,
    padding,
    colorVariant,
  }
`;
