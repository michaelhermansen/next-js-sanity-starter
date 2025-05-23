import { groq } from "next-sanity";

export const ARTICLE_QUERY = groq`*[_type == "article" && slug.current == $slug][0]{
    title,
    slug,
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
    author->{
      name,
      image {
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
      }
    },
    _createdAt,
    _updatedAt,
    meta_title,
    meta_description,
    noindex,
    ogImage {
      asset->{
        _id,
        metadata {
          dimensions {
            width,
            height
          }
        }
      },
    }
}`;

export const ARTICLES_QUERY = groq`*[_type == "article" && defined(slug)] | order(_createdAt desc){
    title,
    slug,
    excerpt,
    image{
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
}`;
