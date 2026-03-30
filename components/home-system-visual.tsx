export function HomeSystemVisual() {
  const nodes = [
    { label: 'Market reality', x: '10%', y: '20%' },
    { label: 'Identity', x: '32%', y: '10%' },
    { label: 'Value', x: '53%', y: '18%' },
    { label: 'Positioning', x: '74%', y: '12%' },
    { label: 'Lifecycle', x: '28%', y: '58%' },
    { label: 'Operations', x: '55%', y: '56%' },
    { label: 'Feedback', x: '78%', y: '54%' },
    { label: 'Operating model', x: '52%', y: '82%' }
  ];

  return (
    <div className="relative overflow-hidden rounded-panel border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-soft md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(127,166,161,0.14),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(143,167,191,0.08),transparent_35%)]" />
      <div className="surface-grid absolute inset-0" />
      <div className="relative h-[360px] w-full md:h-[420px]">
        <svg viewBox="0 0 1000 600" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="line" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(127,166,161,0.75)" />
              <stop offset="100%" stopColor="rgba(143,167,191,0.55)" />
            </linearGradient>
          </defs>
          <path d="M120 140 C 260 60, 390 90, 510 130 S 760 120, 850 170" fill="none" stroke="url(#line)" strokeWidth="1.5" />
          <path d="M340 150 C 320 260, 320 300, 335 390" fill="none" stroke="url(#line)" strokeWidth="1.5" />
          <path d="M540 165 C 540 250, 555 300, 575 380" fill="none" stroke="url(#line)" strokeWidth="1.5" />
          <path d="M780 165 C 740 260, 760 320, 780 380" fill="none" stroke="url(#line)" strokeWidth="1.5" />
          <path d="M290 390 C 430 330, 600 330, 730 390" fill="none" stroke="url(#line)" strokeWidth="1.5" />
          <path d="M565 410 C 555 470, 535 505, 520 545" fill="none" stroke="url(#line)" strokeWidth="1.5" />
        </svg>

        {nodes.map((node, index) => (
          <div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#151922]/90 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#F3F1EA] backdrop-blur"
            style={{ left: node.x, top: node.y, boxShadow: index === 4 ? '0 0 0 6px rgba(127,166,161,0.08)' : undefined }}
          >
            {node.label}
          </div>
        ))}
      </div>
      <div className="relative mt-3 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-textMuted">
        <span>Signal-led</span>
        <span>Lifecycle-based</span>
        <span>Cross-functional</span>
      </div>
    </div>
  );
}
