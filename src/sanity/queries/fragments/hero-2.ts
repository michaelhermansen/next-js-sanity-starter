export const hero2Query = `
  _type == "hero-2" => {
    _type,
    _key,
    tagLine,
    title,
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
    links,
  }
`;
