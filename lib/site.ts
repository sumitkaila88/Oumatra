export type SocialPlatform = "linkedin" | "instagram" | "x" | "youtube";

const socialLinks: Record<SocialPlatform, string | null> = {
  linkedin: null,
  instagram: null,
  x: null,
  youtube: null,
};

export const siteConfig = {
  name: "OUMATRA",
  url: "https://oumatra.com",
  contactEmail: "founders@oumatra.com",
  companies: {
    klans: "https://klans.app/",
    memry: "https://memry.homes/",
  },
  socialLinks,
} as const;

export const primaryNavigation = [
  ["About", "/about"],
  ["Companies", "/companies"],
  ["Contact", "/contact"],
] as const;

export const legalNavigation = [
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
] as const;
