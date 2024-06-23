import { SidebarNavItem, SiteConfig } from "../types";

const site_url = process.env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Qumari Constraction",
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
  address: "Calgary, AB",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "Home", href: "/" },
      { title: "Gallery", href: "/gallery" },
      { title: "Contact us", href: "/contact" },
    ],
  },
];