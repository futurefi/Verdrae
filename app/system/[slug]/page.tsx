import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/json-ld';
import { PageHero } from '@/components/page-hero';
import { Callout } from '@/components/callout';
import { siteConfig, systemPages } from '@/lib/site';

export function generateStaticParams() {
  return systemPages
    .filter((page) => page.slug !== 'lifecycle')
    .map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = systemPages.find((item) => item.slug === params.slug);
  if (!page || page.slug === 'lifecycle') {
    return {};
  }

  return {
    title: page.title,
    description: page.summary,
    alternates: { canonical: `/system/${page.slug}` }
  };
}

export default function SystemDetailPage({ params }: { params: { slug: string } }) {
  const page = systemPages.find((item) => item.slug === params.slug);

  if (!page || page.slug === 'lifecycle') {
    notFound();
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.title,
    description: page.summary,
    author: { '@type': 'Organization', name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/system/${page.slug}`
  };

  return (
    <main id="main">
      <JsonLd data={schema} />
      <PageHero
        eyebrow={`${page.number} · ${page.title}`}
        title={page.heroTitle}
        intro={page.intro}
        primaryCta={{ href: '/downloads', label: 'Download the PDF' }}
        secondaryCta={{ href: '/#system', label: 'Back to the system' }}
      />

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-4">
            <div className="mb-4 text-sm uppercase tracking-[0.2em] text-textMuted">Guide structure</div>
            <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
              A practical way to make this layer usable.
            </h2>
          </div>
          <div className="space-y-5 lg:col-span-8">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-panel border border-white/10 bg-surface p-6 shadow-soft">
                <div className="text-sm uppercase tracking-[0.2em] text-accentBlue">{section.title}</div>
                <p className="mt-4 max-w-content text-base leading-8 text-textSecondary">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-4">
            <div className="mb-4 text-sm uppercase tracking-[0.2em] text-textMuted">Key points</div>
            <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
              What this layer should make possible.
            </h2>
          </div>
          <div className="grid gap-4 lg:col-span-8 md:grid-cols-2">
            {page.keyPoints.map((point) => (
              <div key={point} className="rounded-[24px] border border-accentGreen/20 bg-accentGreen/10 p-5 text-textPrimary">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <Callout title="Next steps">
            <div className="flex flex-wrap gap-4">
              <Link href="/lifecycle" className="rounded-full border border-white/15 px-5 py-3 text-sm text-white transition hover:border-white/30 hover:bg-white/5">
                Go to lifecycle
              </Link>
              <Link href="/downloads" className="rounded-full border border-white/15 px-5 py-3 text-sm text-white transition hover:border-white/30 hover:bg-white/5">
                Open downloads
              </Link>
            </div>
          </Callout>
        </div>
      </section>
    </main>
  );
}
