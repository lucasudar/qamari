export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    facebook: string;
  };
  mailSupport: string;
  phone: string;
  address: string;
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type coreFeaturesConfig = {
  coreFeatures: {
    name: string;
    desc: string;
  }[];
};

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
    | {
      href: string;
      items?: never;
    }
    | {
      href?: string;
      items: NavLink[];
    }
  );