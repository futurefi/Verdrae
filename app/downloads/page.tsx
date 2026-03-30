import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/json-ld';
import { PageHero } from '@/components/page-hero';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Downloads',
  description: 'Download the PDF guide and use it alongside the website version.',
  alternates: { canonical: '/downloads' }
};

const downloadsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Downloads',
  description: 'Download the PDF guide and use it alongside the website version.',
  url: `${siteConfig.url}/downloads`
};

export default function DownloadsPage() {
  return (
    <main id="main">
      <JsonLd data={downloadsSchema} />
      <PageHero
        eyebrow="Downloads"
        title="Use the website and the PDF together."
        intro="The website gives you a structured, readable version of the framework. The PDF gives you a compact format for sharing, reviewing, and offline reading."
        primaryCta={{ href: siteConfig.pdfPath, label: 'Download the PDF' }}
        secondaryCta={{ href: '/#system', label: 'Back to the homepage' }}
      />

      <section>
        <div className="mx-auto grid max-w-[1440px] gap-5 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:px-12 lg:py-28">
          <article className="rounded-panel border border-white/10 bg-surface p-6 lg:col-span-7 shadow-soft">
            <div className="text-sm uppercase tracking-[0.2em] text-accentBlue">Included file</div>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.03em]">Marketing education v2 PDF</h2>
            <p className="mt-4 max-w-content text-base leading-8 text-textSecondary">
              This PDF is included in the project under the public folder so it can be downloaded directly from the deployed site.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href={siteConfig.pdfPath} className="rounded-full border border-accentGreen/40 bg-accentGreen/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-accentGreen/20">
                Download PDF
              </Link>
              <Link href="/lifecycle" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-textPrimary transition hover:border-white/30 hover:bg-white/5">
                Read lifecycle page
              </Link>
            </div>
          </article>

          <article className="rounded-panel border border-white/10 bg-surface p-6 lg:col-span-5 shadow-soft">
            <div className="text-sm uppercase tracking-[0.2em] text-accentWarm">Deployment note</div>
            <p className="mt-4 text-base leading-8 text-textSecondary">
              Update the site URL and Open Graph image path in <code>lib/site.ts</code> before deploying, so metadata and social previews point to your real domain.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
