export const pageHeroQuery = `
  _type == "page-hero" => {
    _type,
    _key,
    title,
    paragraph,
    links,
    centered
  }
`;
