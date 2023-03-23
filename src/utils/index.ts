import { useRouter } from "next/router";

export function isValidUrl(url:string) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }  
}

interface IFormatFieldName {
  [key: string]: string
}

export function formatFieldName(field: string) {
  const name:IFormatFieldName = {
    bg_color: "Background",
    text_color: "Text color",
    border_color: "Border color",
    bg_color_link: "Link Background",
    title: "Title",
    url: "URL",
    default: "Field"
  }

  return name[field] || name['default'];
}