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
      'Demo / contact request',
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
    trigger: 'Change in engagement (increase or decline)',
    signals: [
      'Usage frequency',
      'Feature adoption',
      'Inactivity vs baseline',
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
      'Reduced engagement vs baseline',
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
          : 'opacity-85 hover:opacity-100'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/55">
            {item.number} · {item.phase}
          </div>
          <div className={`mt-3 text-2xl tracking-[-0.03em] ${item.text}`} style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>
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

      <h3 className="mt-4 font-display text-4xl tracking-[-0.03em] text-white">
        {item.stage}
      </h3>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <div className="text-xs uppercase tracking-[0.22em] text-textMuted">
            Value
          </div>
          <p className="mt-3 text-base leading-7 text-textPrimary">
            {item.value}
          </p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <div className="text-xs uppercase tracking-[0.22em] text-textMuted">
            Decision trigger
          </div>
          <p className="mt-3 text-base leading-7 text-textPrimary">
            {item.trigger}
          </p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <div className="text-xs uppercase tracking-[0.22em] text-textMuted">
            Observed signals
          </div>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-textSecondary">
            {item.signals.map((signal) => (
              <li key={signal}>• {signal}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function HomeLifecycleInteractive() {
  const [activeStage, setActiveStage] = useState(stageData[0]);

  return (
    <section id="interactive-lifecycle" className="border-b border-white/10">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 text-sm uppercase tracking-[0.2em] text-textMuted">
            The lifecycle
          </div>
          <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
            Where the system becomes action
          </h2>
          <p className="mt-6 max-w-content text-lg leading-8 text-textSecondary">
            This is where marketing actually runs. Not as campaigns, but as a continuous flow of decisions and actions.
          </p>
          <p className="mt-4 max-w-content text-lg leading-8 text-textSecondary">
            Each stage answers three questions: what value is created, when do we act, and what signals tell us.
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

        <div id="winback" className="mt-8 rounded-[32px] border border-white/10 bg-surface p-6 md:p-8">
          <div className="text-xs uppercase tracking-[0.24em] text-textMuted">
            Winback
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {winbackData.map((item) => (
              <div key={item.id} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="font-display text-xl text-white">{item.title}</div>

                <div className="mt-4 text-xs uppercase tracking-[0.22em] text-textMuted">
                  Value
                </div>
                <p className="mt-2 text-sm leading-7 text-textPrimary">
                  {item.value}
                </p>

                <div className="mt-4 text-xs uppercase tracking-[0.22em] text-textMuted">
                  Decision trigger
                </div>
                <p className="mt-2 text-sm leading-7 text-textPrimary">
                  {item.trigger}
                </p>

                <div className="mt-4 text-xs uppercase tracking-[0.22em] text-textMuted">
                  Observed signals
                </div>
                <ul className="mt-2 space-y-1 text-sm leading-7 text-textSecondary">
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
  );
}
