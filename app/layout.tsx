import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fixing Broken Marketing | From Random Acts to a Growth System",
  description:
    "A structured guide to turning marketing into a growth system. Learn segmentation, value proposition, positioning, lifecycle, operations, feedback loops, and attribution in one connected model.",
  keywords: [
    "marketing strategy",
    "growth system",
    "marketing operations",
    "B2B marketing",
    "ICP",
    "segmentation",
    "value proposition",
    "lifecycle marketing",
    "marketing attribution",
    "CRM strategy",
  ],
  openGraph: {
    title: "Fixing Broken Marketing | From Random Acts to a Growth System",
    description:
      "A structured guide to turning marketing into a growth system across segmentation, value, lifecycle, operations, and attribution.",
    type: "article",
    url: "https://marketing-liart-five.vercel.app/",
    siteName: "Verdrae",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fixing Broken Marketing | From Random Acts to a Growth System",
    description:
      "A structured guide to turning marketing into a growth system across segmentation, value, lifecycle, operations, and attribution.",
  },
  alternates: {
    canonical: "https://marketing-liart-five.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
