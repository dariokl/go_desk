export const titleParser = (url) => {
  const domain = new URL(url);

  const title = domain.hostname.replace("www.", "").replace(".com", "");

  return title.charAt(0).toUpperCase() + title.slice(1);
};

export const iconParser = (url) => {
  const parsedTitle = titleParser(url);

  return "IoLogo" + parsedTitle.substring(parsedTitle.indexOf("."));
};
