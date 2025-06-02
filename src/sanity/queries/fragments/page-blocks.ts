export const pageBlocks = `
  pageBlocks[deactivated != true]{
    _type == "all-articles" => {...},
    _type == "page-hero" => {...},
    _type == "navigationSection" => {...},
    _type == "section-header" => {...}
  }
`;
