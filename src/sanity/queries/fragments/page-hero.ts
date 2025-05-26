export const pageHeroQuery = `
  _type == "page-hero" => {
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
