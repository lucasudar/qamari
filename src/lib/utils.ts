import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Fencing",
      "Decking",
      "Framing",
      "Railing",
      "Planter Box",
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title,
      description,
      siteName: title,
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    manifest: `${siteConfig.url}/site.webmanifest`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

const capitalize = (input: string) =>
  `${input.charAt(0).toUpperCase()}${input.slice(1)}`;

const capitalizeKey = (input: string) =>
  input.split(/(?=[A-Z])/).map(word => capitalize(word)).join(' ');

const newLineToken = '\n';

const lineBreak = newLineToken.repeat(2);

const formatTitle = (title: string) => `*${title}*`;

const formatEntry = ([key, value]: string[]) => {

  const formattedTitle = formatTitle(capitalizeKey(key));
  const formattedBody = value ? value : '(empty)';

  return `${formattedTitle}:${newLineToken}${formattedBody}`;
};

export const toMarkdownFormat = (date: string, body: Object) => {

  const formattedTitle = formatTitle(date);
  const formattedBody = Object.entries(body).map(formatEntry).join(lineBreak);
  return `${formattedTitle}${lineBreak}${formattedBody}`
};