export const pageBlocks = `
  pageBlocks[deactivated != true]{
    _type == "page-hero" => {...},
    _type == "all-articles" => {...},
    _type == "section-header" => {...}
  }
`;
