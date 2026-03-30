import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { PageHero } from '@/components/page-hero';
import { lifecycleGroups, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Funnel + Lifecycle',
  description: 'A lifecycle guide covering pre-purchase, post-purchase, and winback as one continuous growth system.',
  alternates: { canonical: '/lifecycle' }
};

const lifecycleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Funnel + Lifecycle',
  description: 'A lifecycle guide covering pre-purchase, post-purchase, and winback as one continuous growth system.',
  author: { '@type': 'Organization', name: siteConfig.name },
  mainEntityOfPage: `${siteConfig.url}/lifecycle`
};

export default function LifecyclePage() {
  return (
    <main id="main">
      <JsonLd data={lifecycleSchema} />
      <PageHero
        eyebrow="Funnel + Lifecycle"
        title="The lifecycle is not a sequence of stages. It is a continuous system of decisions and actions."
        intro="Build a full lifecycle system where each stage delivers value, each action is activated by a trigger, and each trigger is prioritized by signal strength."
        primaryCta={{ href: '/downloads', label: 'Download the PDF' }}
        secondaryCta={{ href: '/#system', label: 'Back to the system' }}
      />

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-4">
            <div className="mb-4 text-sm uppercase tracking-[0.2em] text-textMuted">The problem</div>
            <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
              Most companies focus only on acquisition.
            </h2>
          </div>
          <div className="lg:col-span-8 max-w-content text-lg leading-8 text-textSecondary">
            They generate demand but fail to convert it into sustained growth. Marketing is treated as a front-end
            function, even though most value and most revenue are created after the purchase.
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-5 xl:grid-cols-3">
            {lifecycleGroups.map((group) => (
              <section key={group.label} className="rounded-panel border border-white/10 bg-surface p-6 shadow-soft">
                <div className={`text-sm uppercase tracking-[0.2em] ${group.accentClass}`}>{group.label}</div>
                <div className="mt-6 space-y-4">
                  {group.stages.map((item) => (
                    <article key={item.stage} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <div className="text-base text-white">{item.stage}</div>
                      <div className="mt-2 text-sm text-textSecondary">Value: {item.value}</div>
                      <div className="mt-2 text-sm text-textMuted">Action: {item.action}</div>
                      <div className="mt-1 text-sm text-textMuted">Trigger: {item.trigger}</div>
                      <div className="mt-1 text-sm text-textMuted">Signal: {item.signal}</div>
                      <div className="mt-1 text-sm text-textMuted">Owner: {item.owner}</div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-4">
            <div className="mb-4 text-sm uppercase tracking-[0.2em] text-textMuted">Key system principles</div>
            <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
              Actions are triggered, not scheduled.
            </h2>
          </div>
          <div className="grid gap-4 lg:col-span-8 md:grid-cols-2">
            {[
              'The lifecycle is continuous',
              'Every stage must drive the next',
              'Signal strength determines action',
              'Signals accumulate and escalate',
              'Winback is part of the system',
              'Retention drives growth',
              'If it is not tracked, it cannot be managed',
              'Ownership should be visible across the system'
            ].map((item) => (
              <div key={item} className="rounded-[24px] border border-accentGreen/20 bg-accentGreen/10 p-5 text-textPrimary">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="operations">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-4">
            <div className="mb-4 text-sm uppercase tracking-[0.2em] text-textMuted">Operations</div>
            <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
              Connect lifecycle, tracking, and feedback into one operating model.
            </h2>
          </div>
          <div className="grid gap-5 lg:col-span-8 md:grid-cols-2">
            {[
              {
                title: 'Shared funnel',
                body: 'Visitor → Lead → MQL → SQL → Opportunity → Customer'
              },
              {
                title: 'Tracking system',
                body: 'Website behavior, content engagement, conversion events, meetings, events, sales interactions, and consented event tracking.'
              },
              {
                title: 'Feedback loop',
                body: 'Centralize sales objections, marketing signals, and product usage so they can be analyzed and acted on continuously.'
              },
              {
                title: 'Operating model',
                body: 'Long-term strategy, mid-term themes, and short-term execution cycles create clarity, predictability, and alignment.'
              }
            ].map((item) => (
              <article key={item.title} className="rounded-panel border border-white/10 bg-surface p-6">
                <div className="text-sm uppercase tracking-[0.2em] text-accentBlue">{item.title}</div>
                <p className="mt-4 text-sm leading-7 text-textSecondary">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
