// ⚠️ Your types stay the same (unchanged)

type DeepDiveSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  } | null;
};

type GuideSection = {
  id: string;
  number: string;
  title: string;
  summary: string;
  problemIntro: string;
  problemInstead: string[];
  problemRely: string[];
  breaks: string[];
  expandLabel: string;
  deepDiveSections: DeepDiveSection[];
  principles: string[];
  image: React.ReactNode;
};

export default function Page() {

  // ⚠️ YOUR SECTIONS ARRAY STAYS EXACTLY AS YOU HAVE IT
  // (I am not repeating it to keep this readable — DO NOT CHANGE IT)

  const sections: GuideSection[] = [/* KEEP YOUR FULL ARRAY HERE */];

  const faqs = [
    {
      q: "What is broken marketing?",
      a: "Broken marketing is activity without accumulation: campaigns, content, and tools exist, but they are not connected into a system that consistently creates, communicates, and delivers value.",
    },
    {
      q: "What is a marketing growth system?",
      a: "A marketing growth system is a structured model that connects customer understanding, value proposition, lifecycle, operations, and data into one coherent system that drives predictable growth.",
    },
    {
      q: "What is an ICP (Ideal Customer Profile)?",
      a: "An ICP defines what a good customer looks like, including company type, situation, problem, triggers, and willingness to pay.",
    },
    {
      q: "What is lifecycle marketing?",
      a: "Lifecycle marketing manages the full customer journey from awareness to retention, expansion, and winback.",
    },
    {
      q: "Why does marketing fail in B2B?",
      a: "Marketing fails when it lacks structure, clear targeting, aligned value, and connection to revenue and sales processes.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#C7CACD]">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* HERO */}
        <header className="rounded-[28px] border border-white/10 bg-[#111] p-8">

          <h1 className="text-4xl text-[#E1E4E6]">
            Fixing Broken Marketing
          </h1>

          <p className="mt-4 text-[#A5ABB1]">
            From random acts of marketing to a growth system.
          </p>

          {/* ✅ GEO / SEO intro */}
          <p className="mt-6 text-sm text-[#8A8F94] max-w-2xl">
            This guide explains how to build a marketing system that connects segmentation,
            value proposition, positioning, lifecycle, operations, and attribution into
            predictable growth.
          </p>
        </header>

        {/* NAV */}
        <nav className="sticky top-0 z-50 mt-6 mb-6 bg-[#0D0D0D]/80 backdrop-blur p-3 rounded-xl border border-white/10">
          <div className="flex flex-wrap gap-2 text-xs uppercase">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="px-3 py-1 border border-white/10 rounded-full">
                {section.title}
              </a>
            ))}
          </div>
        </nav>

        {/* SECTIONS */}
        <section className="mt-16 space-y-12">

          {sections.map((section, index) => (
            <div key={section.id} className="relative">

              {index !== 0 && (
                <div className="absolute -top-6 left-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#5F7F73]/30 to-transparent" />
              )}

              <article id={section.id} className="rounded-[30px] border border-white/10 p-8">

                {/* TITLE */}
                <h2 className="text-2xl text-[#E1E4E6]">
                  {section.title}
                </h2>

                {/* ✅ SEO subtitle */}
                <p className="text-sm text-[#8A8F94] mt-2">
                  {section.title} in B2B marketing systems
                </p>

                {/* ✅ AEO definition */}
                <p className="mt-4 text-[#A5ABB1]">
                  <strong>{section.title}</strong> is a core component of a marketing growth system,
                  defining how organizations create, communicate, and deliver value.
                </p>

                {/* SUMMARY */}
                <p className="mt-4 text-[#A5ABB1]">
                  {section.summary}
                </p>

                {/* EXPAND */}
                <details className="mt-6 border border-white/10 p-5 rounded-xl">
                  <summary className="cursor-pointer text-sm uppercase">
                    {section.expandLabel}
                  </summary>

                  <div className="mt-6 space-y-4">

                    {section.deepDiveSections.map((part) => (
                      <div key={part.heading}>
                        <h3 className="text-[#E1E4E6]">{part.heading}</h3>

                        {part.paragraphs?.map((p) => (
                          <p key={p} className="text-sm text-[#B7BDC2]">{p}</p>
                        ))}

                        {part.bullets && (
                          <ul className="text-sm mt-2">
                            {part.bullets.map((b) => (
                              <li key={b}>• {b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                  </div>
                </details>

                {/* ✅ INTERNAL LINK */}
                {index < sections.length - 1 && (
                  <a href={`#${sections[index + 1].id}`} className="block mt-6 text-sm text-[#C2A96A]">
                    Next: {sections[index + 1].title} →
                  </a>
                )}

              </article>
            </div>
          ))}

        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-2xl text-[#E1E4E6]">FAQ</h2>

          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-white/10 p-4 rounded-xl">
                <summary>{faq.q}</summary>
                <p className="mt-3 text-sm text-[#AEB4B9]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ✅ AUTHOR / GEO TRUST */}
        <section className="mt-16 border border-white/10 p-6 rounded-xl">
          <h3 className="text-[#E1E4E6]">About this guide</h3>
          <p className="mt-3 text-sm text-[#AEB4B9]">
            This guide is written by a marketing and growth professional with experience in
            building CRM, lifecycle, and automation systems across global organizations,
            focusing on connecting strategy, operations, and data into measurable growth.
          </p>
        </section>

      </div>
    </main>
  );
}
