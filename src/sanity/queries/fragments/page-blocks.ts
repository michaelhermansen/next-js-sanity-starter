export const pageBlocks = `
  pageBlocks[deactivated != true]{
    _type == "allArticles" => {...},
    _type == "pageHero" => {...},
    _type == "navigationSection" => {...},
  }
`;
