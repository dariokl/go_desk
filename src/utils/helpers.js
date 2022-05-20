export const titleParser = (url) => {
  const domain = new URL(url);

  let title = domain.hostname.replace("www.", "").replace(".com", "");
  if (title.indexOf(".") !== -1) {
    title = title.substring(0, title.indexOf("."));
  }

  return title.charAt(0).toUpperCase() + title.slice(1);
};

export const iconParser = (url) => {
  const parsedTitle = titleParser(url);

  return "IoLogo" + parsedTitle.substring(parsedTitle.indexOf("."));
};
