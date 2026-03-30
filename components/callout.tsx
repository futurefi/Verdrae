export function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-panel border border-accentGreen/20 bg-accentGreen/10 p-6 shadow-soft">
      <div className="text-sm uppercase tracking-[0.2em] text-textSecondary">{title}</div>
      <div className="mt-4 text-sm leading-7 text-textPrimary">{children}</div>
    </div>
  );
}
