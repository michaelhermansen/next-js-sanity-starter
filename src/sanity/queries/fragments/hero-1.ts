import { groq } from "next-sanity";

export const hero1Query = groq`
  _type == "hero-1" => {
    _type,
    _key,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->{
          _id,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      }
    },
    image{
      ...,
      asset->{
        _id,
        metadata {
          dimensions {
            width,
            height
          }
        }
      },
      alt
    },
    links,
  }
`;
