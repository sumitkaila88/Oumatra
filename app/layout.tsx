import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oumatra.com"),
  title: {
    default: "OUMATRA — From Sound. Beyond Silence.",
    template: "%s | OUMATRA",
  },
  description:
    "OUMATRA is a global parent company created to build, nurture, and own enduring category-defining companies across technology and future industries.",
  applicationName: "OUMATRA",
  keywords: ["OUMATRA", "parent company", "holding company"],
  openGraph: {
    title: "OUMATRA — From Sound. Beyond Silence.",
    description:
      "Building enduring category-defining companies across technology and future industries.",
    type: "website",
    locale: "en_US",
    siteName: "OUMATRA",
  },
  twitter: {
    card: "summary",
    title: "OUMATRA — From Sound. Beyond Silence.",
    description:
      "Building enduring category-defining companies across technology and future industries.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
