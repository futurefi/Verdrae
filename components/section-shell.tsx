import { ReactNode } from 'react';

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  columns?: string;
};

export function SectionShell({ id, eyebrow, title, intro, children, columns }: SectionShellProps) {
  return (
    <section id={id} className="border-b border-white/10">
      <div className={`mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28 ${columns ?? 'lg:grid-cols-12'}`}>
        <div className="lg:col-span-4">
          {eyebrow ? <div className="mb-4 text-sm uppercase tracking-[0.2em] text-textMuted">{eyebrow}</div> : null}
          <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] md:text-5xl">{title}</h2>
          {intro ? <p className="mt-6 max-w-content text-lg leading-8 text-textSecondary">{intro}</p> : null}
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}
