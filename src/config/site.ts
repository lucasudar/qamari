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
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];