import type { SocialLinkId, SocialLinkItem } from "../types/social";

export const socialLinks: readonly SocialLinkItem[] = [
  {
    id: "mail",
    icon: "mail",
    name: "Mail",
    href: "mailto:zjc020118@gmail.com",
    handle: "zjc020118@gmail.com",
    enabled: true,
  },
  {
    id: "github",
    icon: "github",
    name: "GitHub",
    href: "https://github.com/Amamiya23",
    handle: "Amamiya23",
    enabled: true,
  },
  {
    id: "bilibili",
    icon: "bilibili",
    name: "Bilibili",
    href: "https://space.bilibili.com/000000",
    handle: "000000",
    enabled: false,
  },
  {
    id: "telegram",
    icon: "telegram",
    name: "Telegram",
    href: "https://t.me/your-name",
    handle: "your-name",
    enabled: false,
  },
] satisfies readonly SocialLinkItem[];

export const socialDisplay = {
  home: ["github", "mail"],
  about: ["mail", "github", "bilibili", "telegram"],
} as const satisfies Record<string, readonly SocialLinkId[]>;
