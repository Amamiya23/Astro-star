export interface SocialLinkItem {
  id: string;
  icon: string;
  name: string;
  href: string;
  enabled: boolean;
}

export const socialLinks = [
  {
    id: "mail",
    icon: "mail",
    name: "Mail",
    href: "mailto:hello@example.com",
    enabled: true,
  },
  {
    id: "github",
    icon: "github",
    name: "GitHub",
    href: "https://github.com/your-name",
    enabled: true,
  },
  {
    id: "bilibili",
    icon: "bilibili",
    name: "Bilibili",
    href: "https://space.bilibili.com/000000",
    enabled: true,
  },
  {
    id: "telegram",
    icon: "telegram",
    name: "Telegram",
    href: "https://t.me/your-name",
    enabled: true,
  },
] satisfies readonly SocialLinkItem[];
