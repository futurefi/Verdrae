import Link from 'next/link';

type Cta = { href: string; label: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
}) {
  return (
    <section className="hero-noise surface-grid relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(127,166,161,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(143,167,191,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
        <div className="max-w-5xl">
          <div className="mb-6 text-sm uppercase tracking-[0.22em] text-textSecondary">{eyebrow}</div>
          <h1 className="prose-balance max-w-5xl font-display text-5xl font-semibold leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[5.8rem]">
            {title}
          </h1>
          <p className="mt-8 max-w-content text-lg leading-8 text-textSecondary md:text-xl">{intro}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {primaryCta && (
                <Link href={primaryCta.href} className="rounded-full border border-accentGreen/40 bg-accentGreen/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-accentGreen/20">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-textPrimary transition hover:border-white/30 hover:bg-white/5">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
