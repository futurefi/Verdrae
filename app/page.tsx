import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/json-ld';
import { SectionShell } from '@/components/section-shell';
import { Callout } from '@/components/callout';
import { HomeSystemVisual } from '@/components/home-system-visual';
import { faqs, insights, pillars, principles, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'From Random Acts of Marketing to a Growth System',
  description:
    'Most companies do not need more marketing. They need a system that consistently creates, communicates, and delivers value.'
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Fixing Broken Marketing',
  description: siteConfig.description,
  url: siteConfig.url
};

export default function HomePage() {
  return (
    <main id="main">
      <JsonLd data={homeSchema} />

      <section className="hero-noise surface-grid relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(127,166,161,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(143,167,191,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">
          <div className="grid gap-14 xl:grid-cols-[minmax(0,0.92fr)_minmax(460px,0.88fr)] xl:items-end">
            <div className="max-w-5xl">
              <div className="mb-6 text-sm uppercase tracking-[0.22em] text-textSecondary">Marketing operating system</div>
              <h1 className="prose-balance max-w-5xl font-display text-5xl font-semibold leading-[0.94] tracking-[-0.045em] md:text-7xl lg:text-[6.35rem]">
                From Random Acts of Marketing to a Growth System
              </h1>
              <p className="mt-8 max-w-content text-lg leading-8 text-textSecondary md:text-xl">
                Most companies do not need more marketing. They need a system that consistently creates,
                communicates, and delivers value.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#system" className="rounded-full border border-accentGreen/40 bg-accentGreen/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-accentGreen/20">
                  Explore the system
                </a>
                <Link href="/lifecycle" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-textPrimary transition hover:border-white/30 hover:bg-white/5">
                  Start with lifecycle
                </Link>
              </div>
            </div>
            <HomeSystemVisual />
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="The reality most companies face"
        title="Marketing rarely fails because of effort. It fails because of structure."
        intro="When expectations are unclear, activity grows but direction weakens. The result is effort without compounding results."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Campaigns without clear direction',
            'Messaging that sounds like everyone else',
            'Customer understanding based on assumptions',
            'Marketing and sales not aligned',
            'Product development disconnected from real needs',
            'Data fragmented across tools'
          ].map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-textSecondary">
              {item}
            </div>
          ))}
        </div>
      </SectionShell>

      <section id="system" className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 text-sm uppercase tracking-[0.2em] text-textMuted">The model</div>
            <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
              Marketing starts working when it becomes a connected structure.
            </h2>
            <p className="mt-6 max-w-content text-lg leading-8 text-textSecondary">
              The system starts from real customer problems, defines value clearly, connects marketing,
              sales, and product, and uses data to learn continuously.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((item) => (
              <article key={item.number} className="group rounded-panel border border-white/10 bg-surface p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-white/20">
                <div className="text-xs uppercase tracking-[0.22em] text-accentGreen">{item.number}</div>
                <h3 className="mt-4 font-display text-2xl tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-textSecondary">{item.text}</p>
                <ul className="mt-5 space-y-2 text-sm text-textMuted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <Link href={item.href} className="mt-6 inline-flex text-sm text-accentBlue transition group-hover:text-white">
                  Read guide →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Featured guide"
        title="Lifecycle thinking changes how everything else is built."
        intro="Most companies focus only on acquisition. The lifecycle guide shows how value is created before the sale, after the sale, and through recovery."
      >
        <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <Callout title="What the lifecycle guide covers">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Why acquisition-only thinking breaks growth',
                'How value evolves across stages',
                'How to detect risk before churn happens',
                'Why winback often has the highest ROI'
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/10 p-4 text-sm text-textPrimary">
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/lifecycle"
              className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Read the lifecycle guide
            </Link>
          </Callout>
          <Callout title="How to use this site">
            <ol className="space-y-3 text-sm text-textPrimary">
              <li>1. Start with the full system.</li>
              <li>2. Go deeper into the weakest layer.</li>
              <li>3. Use the PDF for sharing and internal alignment.</li>
            </ol>
            <Link href="/downloads" className="mt-4 inline-flex text-sm text-accentBlue transition hover:text-white">
              Open downloads →
            </Link>
          </Callout>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Operations and tracking"
        title="Connect signals across the lifecycle."
        intro="A shared funnel, clear tracking, and a visible feedback loop create the operating conditions for predictable growth."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: 'Shared funnel',
              body: 'Visitor → Lead → MQL → SQL → Opportunity → Customer'
            },
            {
              title: 'Tracking',
              body: 'First-party data, UTM parameters, consented event tracking, server-side tracking, and conversion APIs.'
            },
            {
              title: 'Feedback loop',
              body: 'Sales objections and lost deals, marketing engagement and signals, product usage and feedback.'
            },
            {
              title: 'Operating rhythm',
              body: 'Long-term strategy, mid-term themes, and short-term execution cycles.'
            }
          ].map((item) => (
            <article key={item.title} className="rounded-panel border border-white/10 bg-surface p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-accentBlue">{item.title}</div>
              <p className="mt-4 text-sm leading-7 text-textSecondary">{item.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Selected insights" title="Activity without accumulation is not growth.">
        <div className="grid gap-5 md:grid-cols-3">
          {insights.map((item) => (
            <article key={item.title} className="rounded-panel border border-white/10 bg-surface p-6">
              <h3 className="font-display text-2xl tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-textSecondary">{item.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="faq" eyebrow="FAQ" title="Clear answers for search, readers, and AI systems.">
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-[24px] border border-white/10 bg-surface p-6 open:border-white/20">
              <summary className="cursor-pointer list-none text-lg text-white">{item.q}</summary>
              <p className="mt-4 max-w-content text-sm leading-7 text-textSecondary">{item.a}</p>
            </details>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="principles"
        eyebrow="Core principles"
        title="Clarity creates leverage."
        intro="The goal is not to add more tactics. It is to build a system that makes decisions clearer, execution more consistent, and growth more predictable."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-textPrimary">
              {item}
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="about"
        eyebrow="About this site"
        title="Not more tactics. A better way to think."
        intro="Most marketing problems are not caused by lack of effort or intelligence. They are caused by weak structure, unclear ownership, and disconnected decisions. This site exists to make the system visible."
      >
        <Callout title="Point of view">
          A system without a point of view becomes efficient distribution for generic ideas. The purpose of this site is to make the system visible enough to improve real decisions.
        </Callout>
      </SectionShell>

      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(127,166,161,0.14),rgba(143,167,191,0.08),rgba(255,255,255,0.02))] p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="mb-4 text-sm uppercase tracking-[0.2em] text-textSecondary">Final outcome</div>
              <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
                Aligned teams. Clear value. Better decisions. Predictable growth.
              </h2>
              <p className="mt-6 max-w-content text-lg leading-8 text-textSecondary">
                Marketing starts driving revenue when it stops behaving like disconnected activity and starts operating as a system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
