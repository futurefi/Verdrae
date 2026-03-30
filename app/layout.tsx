import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { JsonLd } from '@/components/json-ld';
import { siteConfig } from '@/lib/site';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display'
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Fixing Broken Marketing',
    template: '%s | Fixing Broken Marketing'
  },
  description: siteConfig.description,
  openGraph: {
    title: 'Fixing Broken Marketing',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Fixing Broken Marketing'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fixing Broken Marketing',
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  alternates: {
    canonical: '/'
  }
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="skip-link fixed left-4 top-4 z-[100] rounded-full border border-white/15 bg-surface px-4 py-2 text-sm text-white"
        >
          Skip to content
        </a>
        <JsonLd data={websiteSchema} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
