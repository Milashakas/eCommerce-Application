export const makeTag = (
  tagName: string,
  attributes: Record<string, string> = {},
  innerContent: string = "",
): string => {
  const attrs = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
  return `<${tagName} ${attrs}>${innerContent}</${tagName}>`;
};

export const makeDiv = (attributes: Record<string, string>, innerContent: string = ""): string =>
  makeTag("div", attributes, innerContent);

export const makeImg = (attributes: Record<string, string>): string => makeTag("img", attributes);

export const makeH3 = (attributes: Record<string, string>, innerContent: string = ""): string =>
  makeTag("h3", attributes, innerContent);
