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
  const sections: GuideSection[] = [
    {
      id: "market-reality",
      number: "01",
      title: "Market Reality",
      summary:
        "Start from real signals. Customer insight shows the present. Market signals show where things are going.",
      problemIntro:
        "Most companies build their understanding of customers internally.",
      problemInstead: [
        "talking to real customers",
        "observing real behavior",
        "tracking real market movement",
      ],
      problemRely: ["opinions", "past experience", "internal alignment"],
      breaks: [
        "Customers are defined in workshops instead of reality",
        "Decisions are based on assumptions instead of evidence",
      ],
      expandLabel: "What to do",
      deepDiveSections: [
        {
          heading: "Build understanding from two sources",
          paragraphs: [],
        },
        {
          heading: "1. Direct customer insight",
          paragraphs: ["Talk to real customers."],
          bullets: [
            "What problem were you trying to solve?",
            "What triggered action?",
            "What almost stopped you?",
            "What alternatives did you consider?",
          ],
          table: {
            headers: ["Signal", "Example"],
            rows: [
              ["Problem", "Too much manual reporting"],
              ["Trigger", "Need to scale team"],
              ["Objection", "Too expensive"],
              ["Alternative", "Excel"],
            ],
          },
        },
        {
          heading: "2. Market signals",
          paragraphs: ["Monitor:"],
          bullets: [
            "prospects and customers (what they discuss)",
            "industry conversations",
            "events and publications",
            "megatrends (technology, regulation, behavior)",
          ],
        },
        {
          heading: "Example signals",
          bullets: [
            "increasing automation discussions",
            "complaints about manual work",
            "hiring for data roles",
          ],
        },
        {
          heading: "Interpretation",
          paragraphs: ["→ market shifting toward efficiency and scalability"],
        },
      ],
      principles: [
        "Customer insight shows the present",
        "Market signals show direction",
        "You need both",
      ],
      image: <SignalImage />,
    },
    {
      id: "identity",
      number: "02",
      title: "Identity",
      summary:
        "Define who you actually target. Without clear segmentation, ICP, and buying groups, marketing becomes generic and loses relevance.",
      problemIntro:
        "Most companies rely on broad personas that don’t reflect real buying situations.",
      problemInstead: ["real customer situations", "real decision dynamics"],
      problemRely: ["assumptions", "internal opinions", "simplified personas"],
      breaks: [
        "Generic targeting leads to generic messaging",
        "Teams prioritize the wrong accounts and roles",
      ],
      expandLabel: "What to do",
      deepDiveSections: [
        { heading: "Build identity in three layers" },
        {
          heading: "Layer 1 — Segmentation",
          paragraphs: ["Define meaningful segments such as:"],
          bullets: ["industry", "company size", "maturity", "geography"],
        },
        {
          heading: "Guideline",
          paragraphs: [
            "Prioritize the most relevant segments.",
            "In complex organizations, this can easily be 20–30 active segments.",
          ],
        },
        {
          heading: "Layer 2 — Ideal Customer Profile (per segment)",
          paragraphs: ["Define what a good customer actually looks like."],
          table: {
            headers: ["Field", "Example"],
            rows: [
              ["Company Type", "Mid-size SaaS (50–300 employees)"],
              ["Situation", "Scaling without structure"],
              ["Core Problem", "Marketing doesn’t generate pipeline"],
              ["Trigger Event", "Hiring sales / entering new market"],
              ["Objections", "“We tried agencies” / “Will this impact revenue?”"],
              ["Alternatives", "Internal / agencies / tools"],
              ["Willingness to Pay", "High"],
            ],
          },
        },
        {
          heading: "🔥 Key rule",
          paragraphs: ["If ICP is vague → everything fails"],
        },
        {
          heading: "Layer 3 — Buying Group",
          paragraphs: ["Define how decisions are actually made."],
          table: {
            headers: ["Role", "Responsibility"],
            rows: [
              ["Decision-maker", "Budget / final decision"],
              ["Influencer", "Internal stakeholder shaping decision"],
              ["User", "Daily use and adoption"],
            ],
          },
        },
        {
          heading: "Example",
          table: {
            headers: ["Role", "Concern"],
            rows: [
              ["CEO", "ROI"],
              ["Manager", "Feasibility"],
              ["User", "Usability"],
            ],
          },
        },
        {
          heading: "🔥 Key insight",
          paragraphs: ["You don’t sell to a company — you align a group"],
        },
      ],
      principles: [
        "Segmentation is prioritization, not grouping",
        "ICP defines relevance",
        "Buying group defines messaging",
        "Identity defines everything that follows",
      ],
      image: <IdentityImage />,
    },
    {
      id: "value-proposition",
      number: "03",
      title: "Value Proposition",
      summary:
        "Clarify why act, why you, and why trust. If value is unclear or incomplete, decisions stall.",
      problemIntro:
        "Most value propositions describe what a company does — not why it matters.",
      problemInstead: ["create urgency", "remove doubt", "justify the decision"],
      problemRely: ["explain features", "list capabilities", "assume relevance"],
      breaks: [
        "Value focuses on features instead of outcomes",
        "Objections are ignored instead of addressed",
      ],
      expandLabel: "What to do",
      deepDiveSections: [
        {
          heading: "Answer three questions",
          bullets: ["Why act?", "Why you?", "Why trust?"],
        },
        {
          heading: "Use a structured template",
          paragraphs: [
            "We help [ICP]",
            "who struggle with [problem]",
            "to achieve [outcome]",
            "by [approach]",
            "without [objection 1]",
            "and without [objection 2]",
            "while ensuring [proof]",
          ],
        },
        {
          heading: "Example",
          paragraphs: [
            "We help scaling companies",
            "turn disconnected operations into predictable growth",
            "by building structured systems across strategy, execution, and data",
            "without replacing existing teams or tools",
            "and without unnecessary complexity",
            "while ensuring clear visibility into results",
          ],
        },
        {
          heading: "Define the cost of inaction",
          paragraphs: [
            "Most decisions are not lost to competitors.",
            "They are lost to doing nothing.",
            "Make inaction visible:",
          ],
          bullets: [
            "What becomes slower?",
            "What becomes more expensive?",
            "What becomes harder to scale?",
            "What risks increase over time?",
          ],
        },
        {
          heading: "Examples",
          bullets: [
            "Manual work continues → limits scalability",
            "Lack of structure → inconsistent pipeline",
            "Poor visibility → delayed decisions",
          ],
        },
        {
          heading: "Value across the lifecycle",
          table: {
            headers: ["Stage", "Value"],
            rows: [
              ["Awareness", "Care"],
              ["Consideration", "Trust"],
              ["Purchase", "Choice"],
              ["Onboarding", "Confirmation"],
              ["Experience", "Delivery"],
              ["Expansion", "Growth"],
              ["Advocacy", "Recommendation"],
            ],
          },
        },
      ],
      principles: [
        "If objections are not addressed → decisions stall",
        "If inaction feels acceptable → no decision is made",
        "If value disappears → churn starts",
      ],
      image: <ValueImage />,
    },
    {
      id: "positioning",
      number: "04",
      title: "Positioning",
      summary:
        "Positioning defines where you compete and why your difference matters. Point of view gives that position weight.",
      problemIntro: "Companies don’t choose a position — they default into one.",
      problemInstead: [
        "decide what market position to own",
        "define what they stand for",
        "build a message with weight",
      ],
      problemRely: [
        "generic claims",
        "category ambiguity",
        "content without a point of view",
      ],
      breaks: [
        "Content sounds active but not distinctive",
        "Customers cannot clearly explain what makes you different",
      ],
      expandLabel: "What to do",
      deepDiveSections: [
        {
          heading: "Step 1 — Define category",
          paragraphs: ["Examples:"],
          bullets: ["software provider", "efficiency platform", "cost reduction solution"],
        },
        {
          heading: "Step 2 — Define alternative",
          paragraphs: ["Customers compare you to:"],
          bullets: ["competitors", "internal solutions", "doing nothing"],
        },
        {
          heading: "Step 3 — Define differentiation",
          paragraphs: ["Examples:"],
          bullets: ["reliability vs cost", "speed vs quality"],
        },
        {
          heading: "Step 4 — Define proof",
          paragraphs: ["Examples:"],
          bullets: ["measurable outcomes", "real use cases"],
        },
        {
          heading: "Step 5 — Build statement",
          paragraphs: [
            "For [customer]",
            "who rely on [alternative]",
            "we provide [category]",
            "that delivers [benefit]",
            "by [difference]",
          ],
        },
        {
          heading: "Point of View",
          paragraphs: [
            "Positioning defines where you compete.",
            "Point of view defines what you stand for.",
            "A system without a point of view becomes efficient distribution for generic ideas.",
            "Define what you believe that others don’t, what you consistently emphasize, and what you challenge in the market.",
          ],
        },
      ],
      principles: [
        "Positioning decides your place",
        "Point of view gives your message weight",
        "Brand = positioning applied consistently",
      ],
      image: <PositioningImage />,
    },
    {
      id: "funnel-lifecycle",
      number: "05",
      title: "Funnel + Lifecycle",
      summary:
        "Most companies focus only on acquisition. A working growth system covers pre-purchase, post-purchase, and winback as one continuous structure.",
      problemIntro:
        "Marketing is often treated as a front-end function, while most value and most revenue are created after the purchase.",
      problemInstead: [
        "manage the full customer relationship",
        "connect actions to signals",
        "treat winback as part of growth",
      ],
      problemRely: [
        "optimize lead generation only",
        "ignore retention and expansion",
        "treat churn recovery as ad hoc",
      ],
      breaks: [
        "Demand is generated but not converted into sustained growth",
        "Retention, expansion, and winback remain unmanaged",
      ],
      expandLabel: "What to do",
      deepDiveSections: [
        {
          heading: "Build a full lifecycle system",
          paragraphs: [
            "Each stage delivers clear value.",
            "Each stage has a defined action.",
            "Each action is activated by a trigger.",
            "Each trigger is prioritized by signal strength.",
            "The lifecycle is not a sequence of stages. It is a continuous system of decisions and actions.",
          ],
        },
        {
          heading: "Pre-purchase",
          table: {
            headers: ["Stage", "Value", "Action", "Trigger", "Signal", "Primary Owner"],
            rows: [
              ["Awareness", "Problem clarity", "Capture attention → drive to content", "Audience match, search intent", "Weak", "Marketing"],
              ["Consideration", "Solution", "Educate → guide deeper", "Engagement depth, repeat visits", "Moderate", "Marketing + Sales"],
              ["Purchase", "Confidence", "Reduce risk → drive decision", "Pricing visits, demo requests", "Strong", "Sales"],
            ],
          },
        },
        {
          heading: "Post-purchase",
          table: {
            headers: ["Stage", "Value", "Action", "Trigger", "Signal", "Primary Owner"],
            rows: [
              ["Onboarding", "Reassurance", "Guide activation", "Purchase, first login", "Strong", "Customer Success"],
              ["Experience", "Value", "Reinforce usage", "Usage patterns, inactivity", "Moderate → Strong", "Success / Product"],
              ["Expansion", "Growth", "Upsell / cross-sell", "Usage maturity", "Strong", "Sales + Success"],
              ["Advocacy", "Sharing", "Referrals, case studies", "Satisfaction, NPS", "Strong", "Marketing + Success"],
            ],
          },
        },
        {
          heading: "Winback (Recovery)",
          table: {
            headers: ["Stage", "Value", "Action", "Trigger", "Signal", "Primary Owner"],
            rows: [
              ["Risk detected", "Responsiveness", "Identify drop-off", "Reduced usage", "Moderate → Strong", "Success"],
              ["Intervention", "Support", "Re-engage", "Trigger thresholds", "Strong", "Sales + Marketing"],
              ["Winback", "Regained value", "Return to lifecycle", "Re-activation", "Strong", "Sales + Success"],
            ],
          },
        },
      ],
      principles: [
        "The lifecycle is continuous",
        "Every stage must drive the next",
        "Actions are triggered, not scheduled",
        "Signal strength determines action",
        "Signals accumulate and escalate",
        "Winback is part of the system",
        "Retention drives growth",
        "If it’s not tracked, it can’t be managed",
      ],
      image: <LifecycleImage />,
    },
    {
      id: "operations",
      number: "06",
      title: "Operations",
      summary:
        "Connect CRM, funnel definitions, channels, and tracking into one operating layer. This is where strategy becomes measurable execution.",
      problemIntro:
        "Most teams have tools, data, and channels — but not one connected operating model.",
      problemInstead: [
        "define the commercial path clearly",
        "track the right interactions",
        "connect channels and CRM both ways",
      ],
      problemRely: [
        "fragmented tools",
        "unclear funnel definitions",
        "activity without measurable progression",
      ],
      breaks: [
        "Data exists, but does not support decisions or shared accountability",
        "Teams work in separate tools without a common commercial model",
      ],
      expandLabel: "What to do",
      deepDiveSections: [
        {
          heading: "Define shared funnel",
          paragraphs: ["Visitor → Lead → MQL → SQL → Opportunity → Customer"],
        },
        {
          heading: "Track all interactions",
          paragraphs: ["Digital"],
          bullets: ["website visits", "landing pages", "engagement"],
        },
        {
          heading: "Tracking",
          bullets: ["cookies", "UTM parameters", "pixels"],
        },
        {
          heading: "Offline",
          bullets: ["meetings", "events", "store visits"],
        },
        {
          heading: "Connect channels ↔ CRM",
          bullets: ["channels send data to CRM", "CRM sends data back to channels"],
        },
        {
          heading: "Example",
          bullets: [
            "best customers → lookalike audiences",
            "engaged leads → retargeting",
            "customers → retention campaigns",
          ],
        },
        {
          heading: "Guide the journey",
          paragraphs: ["Ad → landing → content → contact → meeting"],
          bullets: ["Each step has a clear next action"],
        },
        {
          heading: "Use CRM triggers",
          bullets: [
            "pricing visit → notify sales",
            "inactivity → re-engagement",
            "behavior → automated flows",
          ],
        },
      ],
      principles: ["If you don’t track it, you can’t manage it"],
      image: <OperationsImage />,
    },
    {
      id: "feedback-loop",
      number: "07",
      title: "Feedback Loop",
      summary:
        "Feedback exists everywhere — but in most companies it is not connected. A working system makes it continuous, structured, and visible.",
      problemIntro: "The issue is rarely lack of feedback. The issue is lack of structure.",
      problemInstead: [
        "capture feedback consistently",
        "centralize it into one data layer",
        "turn patterns into action",
      ],
      problemRely: [
        "isolated observations",
        "team-specific anecdotes",
        "feedback that disappears after meetings",
      ],
      breaks: [
        "The same issues repeat across teams because nobody sees the full pattern",
        "Insights stay anecdotal instead of changing messaging, sales, or product decisions",
      ],
      expandLabel: "What to do",
      deepDiveSections: [
        { heading: "Create a structured, continuous feedback system" },
        {
          heading: "Inputs",
          table: {
            headers: ["Function", "Data"],
            rows: [
              ["Sales", "objections, lost deals, feature requests"],
              ["Marketing", "engagement, recurring questions, market signals"],
              ["Product", "usage data, adoption, feedback"],
            ],
          },
        },
        {
          heading: "Structure it",
          paragraphs: ["This is critical."],
          bullets: ["store feedback in structured fields", "categorize inputs", "ensure consistency"],
        },
        {
          heading: "Centralize → analyze → share",
          paragraphs: [
            "All feedback flows into the data layer.",
            "AI summarizes patterns.",
            "Insights become visible across teams.",
          ],
        },
        {
          heading: "Example output",
          table: {
            headers: ["Issue", "Frequency", "Impact"],
            rows: [
              ["Missing integrations", "High", "deal blocker"],
              ["Onboarding friction", "Medium", "slows adoption"],
              ["Pricing confusion", "High", "delays decision"],
            ],
          },
        },
        {
          heading: "Turn into action",
          bullets: ["marketing → messaging", "sales → approach", "product → roadmap"],
        },
      ],
      principles: ["Feedback must be continuous, structured, and visible"],
      image: <FeedbackImage />,
    },
    {
      id: "operating-model",
      number: "08",
      title: "Operating Model",
      summary:
        "Marketing becomes reactive without structure. A working operating model connects long-term direction, mid-term themes, and short-term release rhythm.",
      problemIntro:
        "Without structure, marketing responds to requests instead of creating momentum.",
      problemInstead: [
        "create a predictable rhythm",
        "connect strategy to release planning",
        "give sales timely reasons to engage",
      ],
      problemRely: ["reactive requests", "scattered content planning", "unstructured timing"],
      breaks: [
        "Marketing reacts to requests instead of creating momentum",
        "Sales lacks timely reasons to re-engage accounts consistently",
      ],
      expandLabel: "What to do",
      deepDiveSections: [
        { heading: "Build layered model" },
        {
          heading: "Layer 1 — Long-term",
          bullets: ["strategy", "positioning", "narrative"],
        },
        {
          heading: "Layer 2 — Mid-term",
          bullets: ["6-month themes", "consistent message"],
        },
        {
          heading: "Layer 3 — Short-term",
          table: {
            headers: ["Period", "Focus"],
            rows: [
              ["Jan–Feb", "Build"],
              ["Mar–Apr", "Release"],
            ],
          },
        },
        {
          heading: "Real example",
          paragraphs: ["Sales needed reason to contact customers every 6–8 weeks"],
        },
        {
          heading: "Solution",
          paragraphs: ["Marketing builds structured release calendar"],
        },
        {
          heading: "Output",
          bullets: ["timing", "themes", "content"],
        },
        {
          heading: "Example releases",
          bullets: ["case study", "industry insight", "campaign", "pricing initiative"],
        },
      ],
      principles: ["Marketing creates reasons", "Sales activates them"],
      image: <OperatingModelImage />,
    },
    {
      id: "proactive-vs-reactive",
      number: "09",
      title: "Proactive vs Reactive",
      summary:
        "A strong system protects proactive work. Reactive work is necessary, but it cannot become the default operating mode.",
      problemIntro:
        "Without protected proactive time, the system collapses into urgent response.",
      problemInstead: [
        "protect the time that builds growth",
        "limit reactive pull on the system",
        "treat reactive work as bounded, not dominant",
      ],
      problemRely: [
        "constant interruption",
        "request-driven planning",
        "short-term survival mode",
      ],
      breaks: [
        "The system collapses into urgent responses and scattered requests",
        "Long-term improvements never get enough protected time to compound",
      ],
      expandLabel: "What to do",
      deepDiveSections: [
        {
          heading: "Allocation",
          table: {
            headers: ["Type", "Allocation"],
            rows: [
              ["Proactive", "70–90%"],
              ["Reactive", "10–30%"],
            ],
          },
        },
        {
          heading: "Insight",
          bullets: ["proactive builds growth", "reactive handles reality"],
        },
      ],
      principles: ["Without protected proactive time, the system collapses"],
      image: <ProactiveImage />,
    },
    {
      id: "attribution",
      number: "10",
      title: "Attribution",
      summary:
        "Marketing must prove impact across acquisition, retention, and winback. Attribution is directional clarity across the full lifecycle.",
      problemIntro:
        "Most attribution models stop too early and miss how value is actually created.",
      problemInstead: [
        "track contribution across the lifecycle",
        "make retention visible as growth",
        "show how functions share revenue impact",
      ],
      problemRely: [
        "acquisition-only measurement",
        "partial touchpoint views",
        "missing recovery and retention logic",
      ],
      breaks: [
        "Marketing impact is debated instead of measured directionally",
        "Retention and recovery revenue disappear from growth discussions",
      ],
      expandLabel: "What to do",
      deepDiveSections: [
        {
          heading: "Why",
          paragraphs: ["Marketing must prove impact"],
        },
        {
          heading: "Acquisition",
          paragraphs: ["Track touchpoints (weighted)"],
        },
        {
          heading: "Retention",
          paragraphs: ["Customer health scoring:"],
          bullets: ["engagement", "usage", "sentiment"],
        },
        {
          heading: "Winback",
          paragraphs: ["Track recovery:"],
          bullets: ["automation", "sales", "product"],
        },
        {
          heading: "Example",
          table: {
            headers: ["Channel", "Contribution"],
            rows: [
              ["Email", "30%"],
              ["Sales", "50%"],
              ["Product", "20%"],
            ],
          },
        },
        {
          heading: "Revenue distribution",
          bullets: ["marketing", "sales", "product"],
        },
      ],
      principles: ["Attribution is directional clarity", "Retention revenue is new revenue"],
      image: <AttributionImage />,
    },
  ];

  const faqs = [
    {
      q: "What is broken marketing?",
      a: "Broken marketing is activity without accumulation: campaigns, content, and tools exist, but they are not connected into a system that consistently creates, communicates, and delivers value.",
    },
    {
      q: "What is the core shift in this guide?",
      a: "The shift is from random acts of marketing to a growth system. Marketing starts working when it becomes a connected structure that starts from real customer problems, defines clear value, connects marketing, sales, and product, and uses data to learn and improve continuously.",
    },
    {
      q: "What is the final outcome of a working system?",
      a: "Aligned teams, clear value, better decisions, and predictable growth.",
    },
  ];

  const realityPoints = [
    "Campaigns without clear direction",
    "Messaging that sounds like everyone else",
    "Customer understanding based on assumptions",
    "Marketing and sales not aligned",
    "Product development disconnected from real needs",
    "Data fragmented across tools",
    "Decisions based on intuition instead of evidence",
  ];

  const corePrinciples = [
    "Start from real signals",
    "Define value clearly",
    "Connect all functions",
    "Own your data",
    "Build systems",
    "Think lifecycle",
  ];

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#C7CACD]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
        <header className="rounded-[28px] border border-white/10 bg-[#111111]/80 p-8 shadow-2xl shadow-black/30 backdrop-blur md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-[#C2A96A]/30 bg-[#C2A96A]/8 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#D8C58A]">
                Verdrae Guide
              </div>
              <h1 className="max-w-3xl text-4xl font-light leading-tight text-[#E1E4E6] sm:text-5xl lg:text-6xl">
                From Random Acts of Marketing to a Growth System
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#A5ABB1]">
                How marketing starts driving predictable revenue.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#8A8F94]">
                Most companies don’t need more marketing. They need a system that consistently creates, communicates, and delivers value.
              </p>
            </div>
            <HeroDiagram />
          </div>
        </header>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-[#121212] p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#8A8F94]">The reality most companies face</p>
              <h2 className="mt-2 text-2xl font-light text-[#E1E4E6] md:text-3xl">
                Marketing rarely fails because of effort. It fails because of structure.
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {realityPoints.map((point) => (
                  <div key={point} className="rounded-[20px] border border-white/8 bg-white/[0.02] px-4 py-3 text-sm leading-7 text-[#B7BDC2]">
                    {point}
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-3xl text-sm leading-8 text-[#AEB4B9]">
                And in many organizations — especially in Finland — marketing is led without a strong marketing background. This is not a criticism. It means expectations are unclear: what should marketing actually deliver, how should it connect to revenue, and how should it work with sales and product?
              </p>
            </div>
            <div className="rounded-[24px] border border-[#C2A96A]/15 bg-[#C2A96A]/[0.04] p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-[#8A8F94]">This leads to</p>
              <h3 className="mt-2 text-2xl font-light text-[#E1E4E6]">Random Acts of Marketing</h3>
              <p className="mt-4 text-base leading-8 text-[#B7BDC2]">
                Activity without accumulation. Effort without compounding results.
              </p>
              <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#C2A96A]/40 to-transparent" />
              <p className="mt-8 text-sm uppercase tracking-[0.22em] text-[#8A8F94]">The shift</p>
              <p className="mt-3 text-sm leading-8 text-[#AEB4B9]">
                Marketing starts working when it becomes a system. Not a set of activities — but a connected structure that starts from real customer problems, defines clear value, connects marketing, sales, and product, and uses data to learn and improve continuously.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-[#121212] p-7 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.22em] text-[#8A8F94]">The model</p>
              <h2 className="mt-2 text-2xl font-light text-[#E1E4E6] md:text-3xl">Ten connected layers</h2>
              <p className="mt-4 text-base leading-8 text-[#A5ABB1]">
                Short enough for a CEO or CMO to scan. Deep enough for managers and specialists to use as an operating guide.
              </p>
            </div>
            <nav className="grid gap-2 text-sm sm:grid-cols-2 lg:w-[540px]">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 text-[#B7BDC2] transition hover:border-[#5F7F73]/40 hover:bg-[#5F7F73]/8 hover:text-[#E1E4E6]"
                >
                  <span className="mr-3 text-[#C2A96A]">{section.number}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="mt-10 space-y-8">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="overflow-hidden rounded-[30px] border border-white/10 bg-[#121212]/90 shadow-xl shadow-black/20"
            >
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="border-b border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-6 lg:border-b-0 lg:border-r lg:p-8">
                  <div className="mb-5 text-sm uppercase tracking-[0.24em] text-[#C2A96A]">
                    Section {section.number}
                  </div>
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#0F0F0F]">
                    {section.image}
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <h2 className="text-2xl font-light text-[#E1E4E6] md:text-3xl">{section.title}</h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-[#A5ABB1]">{section.summary}</p>

                  <div className="mt-6 rounded-[24px] border border-white/8 bg-black/10 p-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-[#8A8F94]">Why it breaks</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[#B5BBC0]">
                      {section.breaks.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C2A96A]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.02] p-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-[#8A8F94]">The problem</p>
                    <p className="mt-4 max-w-2xl text-sm leading-8 text-[#B7BDC2]">{section.problemIntro}</p>

                    <div className="mt-5">
                      <p className="text-sm text-[#D9DCDF]">Instead of:</p>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-[#B5BBC0]">
                        {section.problemInstead.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5F7F73]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5">
                      <p className="text-sm text-[#D9DCDF]">They rely on:</p>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-[#B5BBC0]">
                        {section.problemRely.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A8F94]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <details className="group mt-6 rounded-[24px] border border-[#5F7F73]/18 bg-[#5F7F73]/[0.05] p-5 open:bg-[#5F7F73]/[0.07]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm uppercase tracking-[0.2em] text-[#D7DBDE]">
                      <span>{section.expandLabel}</span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#C2A96A] transition group-open:rotate-180">
                        ↓
                      </span>
                    </summary>

                    <div className="mt-6 space-y-6">
                      {section.deepDiveSections.map((part) => (
                        <DeepDiveSectionBlock key={part.heading} part={part} />
                      ))}

                      <div className="rounded-[20px] border border-[#C2A96A]/14 bg-[#C2A96A]/[0.04] p-5">
                        <p className="text-sm uppercase tracking-[0.2em] text-[#8A8F94]">Principles</p>
                        <ul className="mt-4 space-y-2 text-sm leading-7 text-[#D7DBDE]">
                          {section.principles.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C2A96A]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border border-white/10 bg-[#121212] p-7 md:p-9">
            <p className="text-sm uppercase tracking-[0.22em] text-[#8A8F94]">Final outcome</p>
            <h2 className="mt-2 text-2xl font-light text-[#E1E4E6] md:text-3xl">
              What changes when marketing works as a system
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["Aligned teams", "Clear value", "Better decisions", "Predictable growth"].map((point) => (
                <div key={point} className="rounded-[22px] border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-[#B7BDC2]">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#121212] p-7 md:p-9">
            <p className="text-sm uppercase tracking-[0.22em] text-[#8A8F94]">Answer layer</p>
            <h2 className="mt-2 text-2xl font-light text-[#E1E4E6] md:text-3xl">Core questions</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-[22px] border border-white/8 bg-white/[0.02] p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base text-[#DCE0E2]">
                    <span>{faq.q}</span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#C2A96A] transition group-open:rotate-180">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-8 text-[#AEB4B9]">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-[#121212] p-7 md:p-9">
          <p className="text-sm uppercase tracking-[0.22em] text-[#8A8F94]">Condensed</p>
          <h2 className="mt-2 text-2xl font-light text-[#E1E4E6] md:text-3xl">Core principles</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {corePrinciples.map((item) => (
              <div key={item} className="rounded-[22px] border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-[#B7BDC2]">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function DeepDiveSectionBlock({ part }: { part: DeepDiveSection }) {
  return (
    <div>
      <h3 className="text-base font-medium text-[#E1E4E6]">{part.heading}</h3>

      {part.paragraphs && part.paragraphs.length > 0 ? (
        <div className="mt-3 space-y-3 text-sm leading-8 text-[#B7BDC2]">
          {part.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {part.bullets && part.bullets.length > 0 ? (
        <ul className="mt-3 space-y-2 text-sm leading-7 text-[#B7BDC2]">
          {part.bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5F7F73]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {part.table ? (
        <div className="mt-4 overflow-hidden rounded-[18px] border border-white/8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-white/[0.04] text-[#DCE0E2]">
                <tr>
                  {part.table.headers.map((header) => (
                    <th key={header} className="px-4 py-3 font-medium">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {part.table.rows.map((row, idx) => (
                  <tr key={idx} className="border-t border-white/8 text-[#B7BDC2]">
                    {row.map((cell, cellIdx) => (
                      <td key={`${idx}-${cellIdx}`} className="px-4 py-3 align-top leading-7">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function HeroDiagram() {
  const nodes = [
    { label: "Reality", x: "12%", y: "38%" },
    { label: "Identity", x: "24%", y: "22%" },
    { label: "Value", x: "38%", y: "34%" },
    { label: "Positioning", x: "52%", y: "22%" },
    { label: "Lifecycle", x: "30%", y: "64%" },
    { label: "Operations", x: "48%", y: "68%" },
    { label: "Feedback", x: "62%", y: "52%" },
    { label: "Model", x: "70%", y: "72%" },
    { label: "Focus", x: "82%", y: "36%" },
    { label: "Attribution", x: "86%", y: "58%" },
  ];

  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0F0F0F] p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(95,127,115,0.18),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(74,99,115,0.18),transparent_26%),radial-gradient(circle_at_65%_80%,rgba(194,169,106,0.10),transparent_18%)]" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-90">
        <path d="M12 38 C18 30, 20 25, 24 22 S32 28,38 34 S46 26,52 22 S62 30,70 36 S78 46,86 58" fill="none" stroke="rgba(194,169,106,0.65)" strokeWidth="0.4" />
        <path d="M24 22 C24 40, 26 52,30 64 S40 67,48 68 S58 62,62 52 S66 64,70 72" fill="none" stroke="rgba(95,127,115,0.55)" strokeWidth="0.38" />
        <path d="M62 52 C70 46, 76 40,82 36 S86 44,86 58" fill="none" stroke="rgba(74,99,115,0.55)" strokeWidth="0.35" />
      </svg>
      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#141414]/90 px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-[#D2D6D9] backdrop-blur"
          style={{ left: node.x, top: node.y }}
        >
          {node.label}
        </div>
      ))}
    </div>
  );
}

function SignalImage() {
  return (
    <div className="relative h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(95,127,115,0.16),transparent_26%),radial-gradient(circle_at_80%_30%,rgba(74,99,115,0.18),transparent_28%),linear-gradient(180deg,#101010,#0D0D0D)]">
      <Grid />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <path d="M6 70 C18 52, 28 58, 38 48 S58 28, 72 36 S88 34, 94 20" fill="none" stroke="rgba(95,127,115,0.85)" strokeWidth="0.8" />
        <path d="M8 80 C22 72, 36 74, 48 64 S66 52, 92 58" fill="none" stroke="rgba(138,143,148,0.5)" strokeWidth="0.6" />
        <circle cx="72" cy="36" r="2.2" fill="rgba(194,169,106,0.9)" />
        <circle cx="38" cy="48" r="1.8" fill="rgba(74,99,115,0.85)" />
      </svg>
    </div>
  );
}

function IdentityImage() {
  return (
    <div className="relative h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(74,99,115,0.18),transparent_24%),linear-gradient(180deg,#111,#0D0D0D)]">
      <Grid />
      <div className="absolute left-[18%] top-[24%] h-16 w-16 rounded-full border border-[#5F7F73]/40 bg-[#5F7F73]/12" />
      <div className="absolute left-[42%] top-[18%] h-24 w-24 rounded-full border border-[#8A8F94]/30 bg-[#8A8F94]/8" />
      <div className="absolute left-[60%] top-[44%] h-20 w-20 rounded-full border border-[#4A6373]/40 bg-[#4A6373]/12" />
      <div className="absolute left-[28%] top-[52%] h-28 w-28 rounded-full border border-[#C2A96A]/25 bg-[#C2A96A]/[0.06]" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <path d="M26 32 C42 26, 50 30, 62 54" fill="none" stroke="rgba(194,169,106,0.65)" strokeWidth="0.45" />
        <path d="M32 68 C42 58, 54 56, 70 54" fill="none" stroke="rgba(95,127,115,0.5)" strokeWidth="0.45" />
      </svg>
    </div>
  );
}

function ValueImage() {
  return (
    <div className="relative h-full w-full bg-[radial-gradient(circle_at_70%_18%,rgba(194,169,106,0.12),transparent_24%),linear-gradient(180deg,#111,#0D0D0D)]">
      <Grid />
      <div className="absolute inset-x-[16%] top-[20%] h-px bg-gradient-to-r from-transparent via-[#8A8F94]/40 to-transparent" />
      <div className="absolute inset-x-[12%] top-[38%] h-px bg-gradient-to-r from-transparent via-[#5F7F73]/40 to-transparent" />
      <div className="absolute inset-x-[22%] top-[56%] h-px bg-gradient-to-r from-transparent via-[#4A6373]/35 to-transparent" />
      <div className="absolute inset-x-[30%] top-[74%] h-px bg-gradient-to-r from-transparent via-[#C2A96A]/45 to-transparent" />
      <div className="absolute left-1/2 top-[56%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[18px] border border-[#C2A96A]/35 bg-[#C2A96A]/[0.05]" />
    </div>
  );
}

function PositioningImage() {
  return (
    <div className="relative h-full w-full bg-[radial-gradient(circle_at_18%_70%,rgba(95,127,115,0.14),transparent_24%),linear-gradient(180deg,#111,#0D0D0D)]">
      <Grid />
      <div className="absolute left-[20%] top-[20%] h-28 w-28 rounded-[30px] border border-[#8A8F94]/20 bg-[#8A8F94]/[0.04]" />
      <div className="absolute left-[40%] top-[34%] h-28 w-28 rounded-[30px] border border-[#4A6373]/25 bg-[#4A6373]/[0.05]" />
      <div className="absolute left-[58%] top-[18%] h-28 w-28 rounded-[30px] border border-[#5F7F73]/30 bg-[#5F7F73]/[0.06]" />
      <div className="absolute left-[48%] top-[42%] h-10 w-10 rounded-full border border-[#C2A96A]/45 bg-[#C2A96A]/[0.12] shadow-[0_0_30px_rgba(194,169,106,0.15)]" />
    </div>
  );
}

function LifecycleImage() {
  return (
    <div className="relative h-full w-full bg-[radial-gradient(circle_at_80%_24%,rgba(74,99,115,0.16),transparent_28%),linear-gradient(180deg,#111,#0D0D0D)]">
      <Grid />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <path d="M16 56 C18 28, 48 16, 68 24 C82 29, 90 42, 88 58" fill="none" stroke="rgba(95,127,115,0.6)" strokeWidth="0.65" />
        <path d="M84 56 C82 76, 64 88, 42 84 C24 80, 14 66, 16 48" fill="none" stroke="rgba(74,99,115,0.7)" strokeWidth="0.65" />
        <circle cx="50" cy="50" r="10" fill="rgba(194,169,106,0.08)" stroke="rgba(194,169,106,0.35)" strokeWidth="0.5" />
        <circle cx="68" cy="24" r="2" fill="rgba(194,169,106,0.9)" />
        <circle cx="42" cy="84" r="2" fill="rgba(194,169,106,0.9)" />
      </svg>
    </div>
  );
}

function OperationsImage() {
  return (
    <div className="relative h-full w-full bg-[radial-gradient(circle_at_20%_22%,rgba(95,127,115,0.18),transparent_24%),linear-gradient(180deg,#111,#0D0D0D)]">
      <Grid />
      <div className="absolute left-[18%] top-[24%] h-14 w-24 rounded-2xl border border-[#5F7F73]/35 bg-[#5F7F73]/[0.08]" />
      <div className="absolute left-[56%] top-[18%] h-14 w-24 rounded-2xl border border-[#4A6373]/35 bg-[#4A6373]/[0.08]" />
      <div className="absolute left-[34%] top-[58%] h-14 w-32 rounded-2xl border border-[#8A8F94]/28 bg-[#8A8F94]/[0.05]" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <path d="M42 31 C46 31, 53 31, 56 31" fill="none" stroke="rgba(194,169,106,0.6)" strokeWidth="0.5" />
        <path d="M30 38 C34 52, 42 56, 50 58" fill="none" stroke="rgba(95,127,115,0.6)" strokeWidth="0.45" />
        <path d="M68 32 C66 50, 58 54, 50 58" fill="none" stroke="rgba(74,99,115,0.65)" strokeWidth="0.45" />
        <circle cx="50" cy="58" r="2.2" fill="rgba(194,169,106,0.85)" />
      </svg>
    </div>
  );
}

function FeedbackImage() {
  return (
    <div className="relative h-full w-full bg-[radial-gradient(circle_at_24%_28%,rgba(95,127,115,0.16),transparent_24%),linear-gradient(180deg,#111,#0D0D0D)]">
      <Grid />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <circle cx="24" cy="34" r="10" fill="rgba(95,127,115,0.10)" stroke="rgba(95,127,115,0.45)" strokeWidth="0.5" />
        <circle cx="74" cy="30" r="10" fill="rgba(74,99,115,0.10)" stroke="rgba(74,99,115,0.45)" strokeWidth="0.5" />
        <circle cx="50" cy="70" r="12" fill="rgba(194,169,106,0.08)" stroke="rgba(194,169,106,0.45)" strokeWidth="0.5" />
        <path d="M33 39 C40 48, 44 54, 46 58" fill="none" stroke="rgba(138,143,148,0.55)" strokeWidth="0.45" />
        <path d="M67 38 C62 48, 58 54, 54 59" fill="none" stroke="rgba(138,143,148,0.55)" strokeWidth="0.45" />
        <path d="M50 58 C48 50, 48 44, 50 38" fill="none" stroke="rgba(194,169,106,0.5)" strokeWidth="0.4" strokeDasharray="2 2" />
      </svg>
    </div>
  );
}

function OperatingModelImage() {
  return (
    <div className="relative h-full w-full bg-[radial-gradient(circle_at_72%_24%,rgba(74,99,115,0.14),transparent_24%),linear-gradient(180deg,#111,#0D0D0D)]">
      <Grid />
      <div className="absolute left-[18%] top-[18%] h-16 w-64 rounded-[22px] border border-[#8A8F94]/20 bg-[#8A8F94]/[0.04]" />
      <div className="absolute left-[24%] top-[42%] h-16 w-52 rounded-[22px] border border-[#5F7F73]/28 bg-[#5F7F73]/[0.06]" />
      <div className="absolute left-[34%] top-[66%] h-16 w-40 rounded-[22px] border border-[#C2A96A]/30 bg-[#C2A96A]/[0.06]" />
    </div>
  );
}

function ProactiveImage() {
  return (
    <div className="relative h-full w-full bg-[radial-gradient(circle_at_22%_22%,rgba(95,127,115,0.16),transparent_24%),linear-gradient(180deg,#111,#0D0D0D)]">
      <Grid />
      <div className="absolute left-[16%] top-[30%] h-8 w-[68%] rounded-full bg-[#5F7F73]/16" />
      <div className="absolute left-[16%] top-[30%] h-8 w-[56%] rounded-full border border-[#5F7F73]/38 bg-[#5F7F73]/18" />
      <div className="absolute left-[16%] top-[52%] h-8 w-[40%] rounded-full bg-[#4A6373]/10" />
      <div className="absolute left-[16%] top-[52%] h-8 w-[18%] rounded-full border border-[#C2A96A]/35 bg-[#C2A96A]/14" />
    </div>
  );
}

function AttributionImage() {
  return (
    <div className="relative h-full w-full bg-[radial-gradient(circle_at_70%_22%,rgba(194,169,106,0.10),transparent_24%),linear-gradient(180deg,#111,#0D0D0D)]">
      <Grid />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <path d="M18 70 L18 46 L34 46" fill="none" stroke="rgba(95,127,115,0.55)" strokeWidth="0.65" />
        <path d="M42 70 L42 34 L58 34" fill="none" stroke="rgba(74,99,115,0.65)" strokeWidth="0.65" />
        <path d="M66 70 L66 24 L82 24" fill="none" stroke="rgba(194,169,106,0.65)" strokeWidth="0.65" />
      </svg>
    </div>
  );
}

function Grid() {
  return (
    <div className="absolute inset-0 opacity-30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(138,143,148,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(138,143,148,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(13,13,13,0.75)_100%)]" />
    </div>
  );
}
