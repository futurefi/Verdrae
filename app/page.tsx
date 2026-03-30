'use client';

import { useState } from 'react';

const stageData = [
  {
    id: 'awareness',
    number: '01',
    stage: 'Awareness',
    phase: 'Pre-purchase',
    accent: 'from-cyan-400/30 to-sky-400/10',
    ring: 'border-cyan-300/30',
    text: 'text-cyan-200',
    icon: '◉',
    value: 'Clarify the problem and make it visible',
    trigger: 'First meaningful engagement with the problem space',
    signals: [
      'First visit from ICP',
      'Search intent aligned with the problem',
      'Initial content interaction',
    ],
    short: 'Make the problem visible.',
  },
  {
    id: 'consideration',
    number: '02',
    stage: 'Consideration',
    phase: 'Pre-purchase',
    accent: 'from-sky-400/30 to-indigo-400/10',
    ring: 'border-sky-300/30',
    text: 'text-sky-200',
    icon: '◎',
    value: 'Frame the solution and build understanding',
    trigger: 'Shift from passive interest to active evaluation',
    signals: [
      'Repeat visits',
      'Depth of content consumption',
      'Comparison or solution-focused content engagement',
    ],
    short: 'Move from interest to evaluation.',
  },
  {
    id: 'purchase',
    number: '03',
    stage: 'Purchase',
    phase: 'Pre-purchase',
    accent: 'from-indigo-400/30 to-violet-400/10',
    ring: 'border-indigo-300/30',
    text: 'text-indigo-200',
    icon: '▣',
    value: 'Create confidence to act and reduce decision friction',
    trigger: 'Explicit buying intent',
    signals: [
      'Pricing page interaction',
      'Demo or contact request',
      'Sales conversation initiated',
    ],
    short: 'Reduce friction and create confidence.',
  },
  {
    id: 'onboarding',
    number: '04',
    stage: 'Onboarding',
    phase: 'Post-purchase',
    accent: 'from-amber-300/30 to-orange-400/10',
    ring: 'border-amber-300/30',
    text: 'text-amber-200',
    icon: '◌',
    value: 'Deliver first value and reduce uncertainty',
    trigger: 'Activation moment reached or at risk',
    signals: [
      'First successful use',
      'Onboarding steps completed',
      'Time-to-value achieved',
    ],
    short: 'Deliver first value fast.',
  },
  {
    id: 'experience',
    number: '05',
    stage: 'Experience',
    phase: 'Post-purchase',
    accent: 'from-orange-300/30 to-yellow-300/10',
    ring: 'border-orange-300/30',
    text: 'text-orange-200',
    icon: '◔',
    value: 'Ensure continuous value and reinforce usage',
    trigger: 'Change in engagement, whether positive or negative',
    signals: [
      'Usage frequency',
      'Feature adoption',
      'Inactivity versus baseline',
    ],
    short: 'Reinforce value through use.',
  },
  {
    id: 'expansion',
    number: '06',
    stage: 'Expansion',
    phase: 'Post-purchase',
    accent: 'from-yellow-300/30 to-orange-400/10',
    ring: 'border-yellow-300/30',
    text: 'text-yellow-200',
    icon: '✦',
    value: 'Unlock additional value and growth opportunities',
    trigger: 'Emerging needs or capacity limits',
    signals: [
      'Increased usage intensity',
      'Multi-team adoption',
      'Requests for additional features or scale',
    ],
    short: 'Find the next layer of value.',
  },
  {
    id: 'advocacy',
    number: '07',
    stage: 'Advocacy',
    phase: 'Post-purchase',
    accent: 'from-orange-400/30 to-amber-300/10',
    ring: 'border-orange-200/30',
    text: 'text-orange-100',
    icon: '✳',
    value: 'Turn satisfaction into active promotion',
    trigger: 'Trust and satisfaction threshold exceeded',
    signals: [
      'High NPS or satisfaction',
      'Repeat usage with low friction',
      'Referrals or organic sharing',
    ],
    short: 'Turn satisfaction into promotion.',
  },
];

const winbackData = [
  {
    id: 'risk',
    title: 'Risk detected',
    value: 'Identify potential churn before it happens',
    trigger: 'Negative change in behavior pattern',
    signals: [
      'Drop in usage',
      'Negative feedback',
      'Reduced engagement versus baseline',
    ],
  },
  {
    id: 'intervention',
    title: 'Intervention',
    value: 'Remove friction and restore perceived value',
    trigger: 'Confirmed risk signal',
    signals: ['Support requests', 'Feature gaps', 'Friction points in usage'],
  },
  {
    id: 'winback',
    title: 'Winback',
    value: 'Re-establish value and return to lifecycle',
    trigger: 'Re-engagement opportunity detected',
    signals: ['Return activity', 'Offer interaction', 'Re-activation events'],
  },
];

function StageCard({
  item,
  active,
  onEnter,
}: {
  item: (typeof stageData)[number];
  active: boolean;
  onEnter: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      className={`group relative rounded-[28px] border ${item.ring} bg-gradient-to-br ${item.accent} p-5 text-left transition duration-300 ${
        active
          ? 'scale-[1.02] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.35)]'
          : 'opacity-80 hover:opacity-100'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/55">
            {item.number} · {item.phase}
          </div>
          <div
            className={`mt-3 text-2xl tracking-[-0.03em] ${item.text}`}
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
          >
            {item.stage}
          </div>
        </div>
        <div className={`text-2xl ${item.text}`}>{item.icon}</div>
      </div>
      <p className="mt-4 text-sm leading-7 text-white/72">{item.short}</p>
    </button>
  );
}

function DetailPanel({ item }: { item: (typeof stageData)[number] }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-[#151922] p-6 md:p-8">
      <div className="mt-1 flex items-center gap-3">
        <div className={`text-sm uppercase tracking-[0.22em] ${item.text}`}>
          {item.phase}
        </div>
        <div className="h-px flex-1 bg-white/10" />
        <div className="text-xs text-white/40">{item.number}</div>
      </div>

      <h3
        className="mt-4 text-4xl tracking-[-0.03em] text-white"
        style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
      >
        {item.stage}
      </h3>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <div className="text-xs uppercase tracking-[0.22em] text-[#8791A1]">
            Value
          </div>
          <p className="mt-3 text-base leading-7 text-[#F3F1EA]">
            {item.value}
          </p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <div className="text-xs uppercase tracking-[0.22em] text-[#8791A1]">
            Decision trigger
          </div>
          <p className="mt-3 text-base leading-7 text-[#F3F1EA]">
            {item.trigger}
          </p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <div className="text-xs uppercase tracking-[0.22em] text-[#8791A1]">
            Observed signals
          </div>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-[#B7BDC8]">
            {item.signals.map((signal) => (
              <li key={signal}>• {signal}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function FixingBrokenMarketingSite() {
  const [activeStage, setActiveStage] = useState(stageData[0]);

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#F3F1EA] selection:bg-[#7FA6A1]/30">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F1115]/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <div className="text-sm uppercase tracking-[0.18em] text-[#B7BDC8]">
            Fixing Broken Marketing
          </div>
          <nav className="hidden gap-8 text-sm text-[#B7BDC8] md:flex">
            <a href="#interactive-lifecycle" className="transition hover:text-white">
              Lifecycle
            </a>
            <a href="#winback" className="transition hover:text-white">
              Winback
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(127,166,161,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(143,167,191,0.12),transparent_30%)]" />
          <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32 lg:px-12 lg:py-36">
            <div className="max-w-4xl">
              <div className="mb-6 text-sm uppercase tracking-[0.22em] text-[#B7BDC8]">
                Funnel + Lifecycle
              </div>
              <h1
                className="max-w-5xl text-5xl font-medium leading-[0.96] tracking-[-0.04em] md:text-7xl lg:text-[6rem]"
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
              >
                Where the system becomes action.
              </h1>
              <p className="mt-8 max-w-[65ch] text-lg leading-8 text-[#B7BDC8] md:text-xl">
                Each stage answers three questions: what value is created, when
                to act, and which signals indicate movement.
              </p>
            </div>
          </div>
        </section>

        <section id="interactive-lifecycle" className="border-b border-white/10">
          <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8791A1]">
                The continuous lifecycle
              </div>
              <h2
                className="text-3xl leading-tight tracking-[-0.03em] md:text-5xl"
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
              >
                Marketing does not end at purchase.
              </h2>
              <p className="mt-6 max-w-[65ch] text-lg leading-8 text-[#B7BDC8]">
                The stage order is fixed: Awareness, Consideration, Purchase,
                Onboarding, Experience, Expansion, Advocacy. Winback sits below
                as a separate recovery layer triggered by risk.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-7">
              {stageData.map((item) => (
                <StageCard
                  key={item.id}
                  item={item}
                  active={activeStage.id === item.id}
                  onEnter={() => setActiveStage(item)}
                />
              ))}
            </div>

            <div className="mt-8">
              <DetailPanel item={activeStage} />
            </div>

            <div
              id="winback"
              className="mt-8 rounded-[32px] border border-white/10 bg-[#151922] p-6 md:p-8"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-[#8791A1]">
                Winback
              </div>
              <div className="mt-5 grid gap-5 md:grid-cols-3">
                {winbackData.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div
                      className="text-xl text-white"
                      style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
                    >
                      {item.title}
                    </div>

                    <div className="mt-4 text-xs uppercase tracking-[0.22em] text-[#8791A1]">
                      Value
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[#F3F1EA]">
                      {item.value}
                    </p>

                    <div className="mt-4 text-xs uppercase tracking-[0.22em] text-[#8791A1]">
                      Decision trigger
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[#F3F1EA]">
                      {item.trigger}
                    </p>

                    <div className="mt-4 text-xs uppercase tracking-[0.22em] text-[#8791A1]">
                      Observed signals
                    </div>
                    <ul className="mt-2 space-y-1 text-sm leading-7 text-[#B7BDC8]">
                      {item.signals.map((signal) => (
                        <li key={signal}>• {signal}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
