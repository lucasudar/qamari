import { SidebarNavItem, SiteConfig } from "../types";

const site_url: string = process.env.NEXT_PUBLIC_APP_URL || '';

export const siteConfig: SiteConfig = {
  name: "Qamari Construction",
  description:
    "Fencing, Deck, Framing, Railing, Planter Box and more.",
  url: site_url,
  links: {
    github: "https://github.com/lucasudar",
    facebook: "https://www.facebook.com/profile.php?id=61560355806046&mibextid=LQQJ4d",
  },
  ogImage: `${site_url}/og.jpg`,
  mailSupport: "info@qamari.ca",
  phone: "403-617-2813",
  address: "240 Berwick Dr NW Calgary, AB",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Qamari Construction",
    items: [
      { title: "Home", href: "/" },
      { title: "Gallery", href: "/gallery" },
      { title: "Contact us", href: "/contact" },
    ],
  },
];