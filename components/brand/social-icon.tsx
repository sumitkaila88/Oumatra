import type { SocialPlatform } from "@/lib/site";

export function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "linkedin") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.2V19H3V8.2h3.5ZM4.75 3A2.05 2.05 0 1 1 4.74 7.1 2.05 2.05 0 0 1 4.75 3ZM12.2 8.2v1.48h.05c.49-.93 1.7-1.91 3.5-1.91 3.73 0 4.42 2.46 4.42 5.65V19h-3.5v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V19h-3.5V8.2h2.58Z" /></svg>;
  }

  if (platform === "instagram") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.25" /><circle className="social-icon__solid" cx="17.4" cy="6.7" r="1.1" /></svg>;
  }

  if (platform === "x") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3.5h4.7l3.9 5.2 4.6-5.2H20l-6.1 7.1L20.5 20h-4.7l-4.3-5.8L6.4 20H3.6l6.6-7.7L4 3.5Zm3.5 2.1 9.3 12.3h1.3L8.8 5.6H7.5Z" /></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.65 4.5 12 4.5 12 4.5s-5.65 0-7.5.5a3 3 0 0 0-2.1 2.1A31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .4 4.9A3 3 0 0 0 4.5 19c1.85.5 7.5.5 7.5.5s5.65 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.4-4.9ZM10 15.35v-6.7L15.8 12 10 15.35Z" /></svg>;
}
