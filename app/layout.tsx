import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oumatra.com"),
  title: {
    default: "OUMATRA — From Sound. Beyond Silence.",
    template: "%s | OUMATRA",
  },
  description:
    "OUMATRA is a global parent company creating and nurturing enduring companies from meaningful ideas.",
  applicationName: "OUMATRA",
  keywords: ["OUMATRA", "parent company", "holding company"],
  openGraph: {
    title: "OUMATRA — From Sound. Beyond Silence.",
    description:
      "OUMATRA is a global parent company creating and nurturing enduring companies from meaningful ideas.",
    images: [{ url: "/brand/social/oumatra-social-avatar.png", width: 512, height: 512, alt: "OUMATRA" }],
    type: "website",
    locale: "en_US",
    siteName: "OUMATRA",
  },
  twitter: {
    card: "summary",
    title: "OUMATRA — From Sound. Beyond Silence.",
    description:
      "OUMATRA is a global parent company creating and nurturing enduring companies from meaningful ideas.",
    images: ["/brand/social/oumatra-social-avatar.png"],
  },
  icons: {
    icon: [
      { url: "/brand/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon/favicon.ico", sizes: "any" },
    ],
    apple: "/brand/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sourceSerif.variable}`}>{children}</body>
    </html>
  );
}
