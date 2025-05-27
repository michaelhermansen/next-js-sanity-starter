export const cta1Query = `
  _type == "cta-1" => {
    _type,
    _key,
    padding,
    colorVariant,
    sectionWidth,
    stackAlign,
    tagLine,
    title,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->{
          _id,
          url,
          mimeType,
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
