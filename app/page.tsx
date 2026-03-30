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

const systemLayers = [
  {
    title: 'Market Reality',
    text: 'Understanding real signals, not assumptions.',
  },
  {
    title: 'Identity',
    text: 'Defining who you actually serve.',
  },
  {
    title: 'Value',
    text: 'Making decisions easier and inaction costly.',
  },
  {
    title: 'Positioning',
    text: 'Choosing where and how you compete.',
  },
  {
    title: 'Lifecycle',
    text: 'Turning interest into sustained value.',
  },
  {
    title: 'Operations',
    text: 'Connecting data, channels, and execution.',
  },
  {
    title: 'Feedback Loop',
    text: 'Learning from sales, marketing, and product.',
  },
  {
    title: 'Operating Model',
    text: 'How the system runs over time.',
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8791A1]">
      {children}
    </div>
  );
}

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

export default function HomePage() {
  const [activeStage, setActiveStage] = useState(stageData[0]);

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#F3F1EA] selection:bg-[#7FA6A1]/30">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F1115]/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <div className="text-sm uppercase tracking-[0.18em] text-[#B7BDC8]">
            Fixing Broken Marketing
          </div>
          <nav className="hidden gap-8 text-sm text-[#B7BDC8] md:flex">
            <a href="#system" className="transition hover:text-white">
              System
            </a>
            <a href="#lifecycle" className="transition hover:text-white">
              Lifecycle
            </a>
            <a href="#outcome" className="transition hover:text-white">
              Outcome
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(127,166,161,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(143,167,191,0.12),transparent_30%)]" />
          <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">
            <div className="max-w-5xl">
              <SectionEyebrow>Marketing operating system</SectionEyebrow>
              <h1
                className="max-w-5xl text-5xl font-medium leading-[0.96] tracking-[-0.04em] md:text-7xl lg:text-[6.2rem]"
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
              >
                From Random Acts of Marketing to a Growth System
              </h1>
              <p className="mt-8 max-w-[65ch] text-xl leading-9 text-[#F3F1EA] md:text-2xl">
                Most companies do not have a marketing problem. They have a structure problem.
              </p>
              <p className="mt-6 max-w-[60ch] text-lg leading-8 text-[#B7BDC8]">
                Marketing activity increases. Results do not.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:px-12 lg:py-28">
            <div className="lg:col-span-5">
              <SectionEyebrow>The break</SectionEyebrow>
              <h2
                className="text-3xl leading-tight tracking-[-0.03em] md:text-5xl"
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
              >
                Why marketing feels busy but does not compound
              </h2>
            </div>
            <div className="space-y-5 lg:col-span-7">
              <p className="max-w-[65ch] text-lg leading-8 text-[#B7BDC8]">
                Campaigns run, but do not connect. Messaging exists, but does not differentiate. Data is collected, but not used to decide.
              </p>
              <p className="max-w-[65ch] text-lg leading-8 text-[#B7BDC8]">
                Marketing becomes a series of isolated actions instead of a system.
              </p>
              <div className="rounded-[28px] border border-white/10 bg-[#151922] p-6">
                <p className="text-2xl leading-9 text-white" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
                  Activity without accumulation is not growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:px-12 lg:py-28">
            <div className="lg:col-span-5">
              <SectionEyebrow>The shift</SectionEyebrow>
              <h2
                className="text-3xl leading-tight tracking-[-0.03em] md:text-5xl"
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
              >
                Marketing starts working when it becomes a system
              </h2>
            </div>
            <div className="space-y-6 lg:col-span-7">
              <p className="max-w-[65ch] text-lg leading-8 text-[#B7BDC8]">
                Not a set of activities. A structure.
              </p>
              <p className="max-w-[65ch] text-lg leading-8 text-[#B7BDC8]">
                A system connects what you learn from the market, how you define value, how decisions are made, how actions are triggered, how results are measured, and how all of it improves over time.
              </p>
              <div className="grid gap-4 md:grid-cols-5">
                {['Signals', 'Decisions', 'Actions', 'Outcomes', 'Learning'].map((item) => (
                  <div key={item} className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-5 text-center text-sm uppercase tracking-[0.18em] text-[#F3F1EA]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="system" className="border-b border-white/10">
          <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
            <div className="mb-12 max-w-3xl">
              <SectionEyebrow>The system</SectionEyebrow>
              <h2
                className="text-3xl leading-tight tracking-[-0.03em] md:text-5xl"
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
              >
                The model behind predictable growth
              </h2>
              <p className="mt-6 max-w-[65ch] text-lg leading-8 text-[#B7BDC8]">
                A growth system is not one thing. It is a set of connected layers. Each layer strengthens the others. Remove one, and the system weakens.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {systemLayers.map((item, index) => (
                <article key={item.title} className="rounded-[28px] border border-white/10 bg-[#151922] p-6">
                  <div className="text-xs uppercase tracking-[0.22em] text-[#7FA6A1]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3
                    className="mt-4 text-2xl tracking-[-0.02em] text-white"
                    style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#B7BDC8]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="lifecycle" className="border-b border-white/10">
          <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
            <div className="mb-10 max-w-3xl">
              <SectionEyebrow>The lifecycle</SectionEyebrow>
              <h2
                className="text-3xl leading-tight tracking-[-0.03em] md:text-5xl"
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
              >
                Where the system becomes action
              </h2>
              <p className="mt-6 max-w-[65ch] text-lg leading-8 text-[#B7BDC8]">
                This is where marketing actually runs. Not as campaigns, but as a continuous flow of decisions and actions.
              </p>
              <p className="mt-4 max-w-[65ch] text-lg leading-8 text-[#B7BDC8]">
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

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-12 lg:px-12 lg:py-28">
            <div className="lg:col-span-5">
              <SectionEyebrow>The real insight</SectionEyebrow>
              <h2
                className="text-3xl leading-tight tracking-[-0.03em] md:text-5xl"
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
              >
                Marketing does not end at purchase
              </h2>
            </div>
            <div className="space-y-5 lg:col-span-7">
              <p className="max-w-[65ch] text-lg leading-8 text-[#B7BDC8]">
                Growth is not created only before the sale.
              </p>
              <ul className="space-y-3 text-lg leading-8 text-[#B7BDC8]">
                <li>• when value is delivered</li>
                <li>• when usage is reinforced</li>
                <li>• when expansion is unlocked</li>
                <li>• when trust turns into advocacy</li>
                <li>• when risk is detected before churn happens</li>
              </ul>
              <div className="rounded-[28px] border border-white/10 bg-[#151922] p-6">
                <p className="text-2xl leading-9 text-white" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
                  Winback is not an exception. It is part of the system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="outcome" className="border-b border-white/10">
          <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
            <div className="mb-10 max-w-3xl">
              <SectionEyebrow>The outcome</SectionEyebrow>
              <h2
                className="text-3xl leading-tight tracking-[-0.03em] md:text-5xl"
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
              >
                What changes when this works
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                'Teams align around the same logic',
                'Value is clear at every stage',
                'Decisions become faster and better',
                'Marketing connects directly to revenue',
              ].map((item) => (
                <div key={item} className="rounded-[28px] border border-white/10 bg-[#151922] p-6 text-lg leading-8 text-[#F3F1EA]">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-8 text-xl leading-9 text-white" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
              Growth becomes more predictable.
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(127,166,161,0.14),rgba(143,167,191,0.08),rgba(255,255,255,0.02))] p-8 md:p-12">
              <div className="max-w-3xl">
                <SectionEyebrow>The close</SectionEyebrow>
                <h2
                  className="text-3xl leading-tight tracking-[-0.03em] md:text-5xl"
                  style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
                >
                  This is not another marketing framework.
                </h2>
                <p className="mt-6 max-w-[65ch] text-lg leading-8 text-[#B7BDC8]">
                  It is a way to make marketing actually work.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
