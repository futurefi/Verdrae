export const siteConfig = {
  name: "Fixing Broken Marketing",
  description:
    "From random acts of marketing to a structured growth system.",
  url: "https://ramisalem.com",
  ogImage: "https://ramisalem.com/og-image.png",
  links: {
    linkedin: "https://www.linkedin.com/in/salemrami",
  },
};

export const primaryNav = [
  { href: '/#system', label: 'System' },
  { href: '/lifecycle', label: 'Lifecycle' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#about', label: 'About' }
];

export const systemPages = [
  {
    slug: 'market-reality',
    number: '01',
    title: 'Market Reality',
    summary:
      'Start from real customer problems by combining direct customer insight with broader market signals.',
    heroTitle: 'Start from real signals, not workshop assumptions.',
    intro:
      'Customer insight shows the present. Market signals show where things are going. Strong decisions need both.',
    bullets: ['Direct customer interviews', 'Trend and media monitoring', 'Signal interpretation'],
    sections: [
      {
        title: 'The problem',
        body: 'Customers are often defined in workshops instead of reality. That creates confident assumptions but weak relevance.'
      },
      {
        title: 'What to do',
        body: 'Build understanding from two sources: direct customer insight and market signals from conversations, publications, events, technology shifts, regulation, and behavior change.'
      },
      {
        title: 'What to look for',
        body: 'Problems, trigger events, objections, alternatives, complaint patterns, hiring signals, automation discussions, and signs that priorities are shifting.'
      }
    ],
    keyPoints: [
      'Talk to real customers',
      'Monitor market conversations and trends',
      'Interpret patterns, not isolated comments'
    ]
  },
  {
    slug: 'identity',
    number: '02',
    title: 'Identity',
    summary:
      'Define segmentation, ideal customer profile, and buying group so targeting becomes specific and decisions become clearer.',
    heroTitle: 'You do not sell to a company. You align a group.',
    intro:
      'Identity should be built in layers: segmentation, ICP per segment, and the buying group that shapes the decision.',
    bullets: ['Segmentation', 'ICP per segment', 'Buying group roles'],
    sections: [
      {
        title: 'The problem',
        body: 'Most companies use generic targeting and single personas. That creates vague targeting and weak relevance.'
      },
      {
        title: 'What to do',
        body: 'Define meaningful segments using industry, company size, maturity, and geography. Then define an ICP for each priority segment.'
      },
      {
        title: 'Buying group',
        body: 'Clarify decision-maker, influencer, and user. Each role evaluates risk, feasibility, and usability differently.'
      }
    ],
    keyPoints: [
      'Prioritize the most relevant segments',
      'Make ICP specific enough to guide decisions',
      'Map the concerns of each buying role'
    ]
  },
  {
    slug: 'value-proposition',
    number: '03',
    title: 'Value Proposition',
    summary:
      'Value should answer why act, why you, and why trust while making the cost of inaction visible.',
    heroTitle: 'If objections are not addressed, decisions stall.',
    intro:
      'Strong value is not just a promise. It connects problem, outcome, approach, objections, and proof.',
    bullets: ['Problem', 'Outcome', 'Objections'],
    sections: [
      {
        title: 'The problem',
        body: 'Most value propositions ignore objections, so even interested buyers hesitate.'
      },
      {
        title: 'What to do',
        body: 'Define who you help, what they struggle with, the outcome you create, how you create it, what objections you remove, and what proof supports the claim.'
      },
      {
        title: 'Cost of inaction',
        body: 'Most decisions are not lost to competitors. They are lost to doing nothing. Make the status quo feel expensive, slow, risky, or difficult to scale.'
      }
    ],
    keyPoints: [
      'Clarify why act, why you, and why trust',
      'Address objections directly',
      'Show why inaction is costly'
    ]
  },
  {
    slug: 'positioning',
    number: '04',
    title: 'Positioning',
    summary:
      'Positioning decides where you compete. Point of view gives your message weight.',
    heroTitle: 'Companies do not drift into good positioning. They choose it.',
    intro:
      'Define category, alternative, differentiation, and proof. Then make your point of view visible and consistent.',
    bullets: ['Category', 'Alternative', 'Differentiation'],
    sections: [
      {
        title: 'The problem',
        body: 'Many companies do not choose a position. They default into one, often sounding interchangeable with the market.'
      },
      {
        title: 'What to do',
        body: 'Define your category, what buyers compare you against, how you differ, and what proof supports the difference.'
      },
      {
        title: 'Brand principle',
        body: 'Brand is positioning applied consistently. Point of view makes the message stronger than efficient distribution alone.'
      }
    ],
    keyPoints: [
      'Define the category clearly',
      'Name the real alternatives',
      'Support differentiation with proof'
    ]
  },
  {
    slug: 'lifecycle',
    number: '05',
    title: 'Funnel + Lifecycle',
    summary:
      'Treat the lifecycle as a continuous system of decisions and actions across pre-purchase, post-purchase, and winback.',
    heroTitle: 'Marketing does not end at purchase.',
    intro:
      'Growth is created through value before the sale, after the sale, and through recovery when risk appears.',
    bullets: ['Pre-purchase', 'Post-purchase', 'Winback'],
    sections: [
      {
        title: 'The problem',
        body: 'Most companies focus only on acquisition. They generate demand but fail to convert it into sustained growth.'
      },
      {
        title: 'What to do',
        body: 'Build a full lifecycle system where every stage delivers value, every action is triggered, and signal strength determines the response.'
      },
      {
        title: 'Key principle',
        body: 'Actions are triggered, not scheduled. Signals accumulate and escalate. Winback belongs inside the system.'
      }
    ],
    keyPoints: [
      'Every stage must drive the next',
      'Retention drives growth',
      'If it is not tracked, it cannot be managed'
    ]
  },
  {
    slug: 'operations',
    number: '06',
    title: 'Operations',
    summary:
      'Connect CRM, shared funnel definitions, channels, and tracking so signals move through the system.',
    heroTitle: 'Systems win when ownership and data are visible.',
    intro:
      'Operations turn strategy into repeatable execution. A shared funnel and connected tracking make the system manageable.',
    bullets: ['Shared funnel', 'Tracking design', 'Channel execution'],
    sections: [
      {
        title: 'Shared funnel',
        body: 'Define a common funnel: Visitor, Lead, MQL, SQL, Opportunity, Customer. Shared definitions reduce confusion and improve coordination.'
      },
      {
        title: 'Tracking',
        body: 'Track website behavior, content engagement, conversion events, meetings, events, and sales interactions using first-party data, UTMs, consented event tracking, server-side tracking, and conversion APIs.'
      },
      {
        title: 'Outcome',
        body: 'When signals are connected across channels and lifecycle stages, action becomes more timely and performance becomes easier to understand.'
      }
    ],
    keyPoints: [
      'Use shared funnel language',
      'Connect digital and offline signals',
      'Design tracking around action'
    ]
  },
  {
    slug: 'feedback-loop',
    number: '07',
    title: 'Feedback Loop',
    summary:
      'Feedback from sales, marketing, and product should be centralized, analyzed, and acted on continuously.',
    heroTitle: 'Feedback should be continuous and visible.',
    intro:
      'Strong systems do not rely on occasional alignment. They use an ongoing loop that improves decisions across functions.',
    bullets: ['Visible inputs', 'Centralized analysis', 'Continuous action'],
    sections: [
      {
        title: 'Inputs',
        body: 'Sales contributes objections and lost deals. Marketing contributes engagement and signals. Product contributes usage and feedback.'
      },
      {
        title: 'What to do',
        body: 'Centralize the inputs, analyze patterns, and turn them into concrete changes in messaging, lifecycle actions, and product priorities.'
      },
      {
        title: 'Why it matters',
        body: 'Without a visible loop, teams repeat assumptions. With one, the system learns and improves continuously.'
      }
    ],
    keyPoints: [
      'Centralize inputs across functions',
      'Make patterns visible',
      'Turn insight into action quickly'
    ]
  },
  {
    slug: 'operating-model',
    number: '08',
    title: 'Operating Model',
    summary:
      'Run the system in layers: long-term strategy, mid-term themes, and short-term execution cycles.',
    heroTitle: 'Without protected proactive time, the system collapses.',
    intro:
      'A working operating model separates long-term direction from short-term reaction and keeps proactive work protected.',
    bullets: ['Strategy', 'Themes', 'Execution'],
    sections: [
      {
        title: 'Layered rhythm',
        body: 'Use long-term strategy for direction, mid-term themes for focus, and short-term cycles for execution and iteration.'
      },
      {
        title: 'Reactive vs proactive',
        body: 'Protect proactive time. When all time is consumed by reactive work, the system loses its ability to improve.'
      },
      {
        title: 'How to frame it',
        body: 'For finance or engineering leaders, the system can be understood as a production line for revenue: inputs, process, and output.'
      }
    ],
    keyPoints: [
      'Separate direction from activity',
      'Protect proactive capacity',
      'Create clarity, predictability, and alignment'
    ]
  }
] as const;

export const pillars = systemPages.map((page) => ({
  number: page.number,
  title: page.title,
  text: page.summary,
  bullets: page.bullets,
  href: page.slug === 'lifecycle' ? '/lifecycle' : `/system/${page.slug}`
}));

export const lifecycleGroups = [
  {
    label: 'Pre-purchase',
    accentClass: 'text-accentBlue',
    stages: [
      { stage: 'Awareness', value: 'Problem clarity', action: 'Capture attention and drive to content', trigger: 'Audience match and search intent', signal: 'Weak', owner: 'Marketing' },
      { stage: 'Consideration', value: 'Solution', action: 'Educate and guide deeper', trigger: 'Engagement depth and repeat visits', signal: 'Moderate', owner: 'Marketing + Sales' },
      { stage: 'Purchase', value: 'Confidence', action: 'Reduce risk and drive decision', trigger: 'Pricing visits and demo requests', signal: 'Strong', owner: 'Sales' }
    ]
  },
  {
    label: 'Post-purchase',
    accentClass: 'text-accentGreen',
    stages: [
      { stage: 'Onboarding', value: 'Reassurance', action: 'Guide activation', trigger: 'Purchase and first login', signal: 'Strong', owner: 'Customer Success' },
      { stage: 'Experience', value: 'Value', action: 'Reinforce usage', trigger: 'Usage patterns and inactivity', signal: 'Moderate → Strong', owner: 'Success / Product' },
      { stage: 'Expansion', value: 'Growth', action: 'Upsell or cross-sell', trigger: 'Usage maturity', signal: 'Strong', owner: 'Sales + Success' },
      { stage: 'Advocacy', value: 'Sharing', action: 'Activate referrals and case stories', trigger: 'Satisfaction and NPS', signal: 'Strong', owner: 'Marketing + Success' }
    ]
  },
  {
    label: 'Winback',
    accentClass: 'text-accentWarm',
    stages: [
      { stage: 'Risk detected', value: 'Responsiveness', action: 'Identify drop-off', trigger: 'Reduced usage', signal: 'Moderate → Strong', owner: 'Success' },
      { stage: 'Intervention', value: 'Support', action: 'Re-engage', trigger: 'Thresholds reached', signal: 'Strong', owner: 'Sales + Marketing' },
      { stage: 'Winback', value: 'Regained value', action: 'Return to lifecycle', trigger: 'Re-activation', signal: 'Strong', owner: 'Sales + Success' }
    ]
  }
] as const;

export const principles = [
  'Start from real signals',
  'Define value clearly',
  'Connect all functions',
  'Own your data',
  'Build systems',
  'Think lifecycle'
] as const;

export const faqs = [
  {
    q: 'What is broken marketing?',
    a: 'Broken marketing is activity without accumulation. Campaigns run, tools multiply, and teams stay busy, but value does not compound because the underlying structure is weak.'
  },
  {
    q: 'What changes when marketing becomes a system?',
    a: 'Decisions become clearer, ownership is easier to define, signals move across teams, and marketing starts contributing to predictable revenue rather than isolated activity.'
  },
  {
    q: 'Why does lifecycle matter so much?',
    a: 'Because growth is not created only before the sale. Onboarding, usage, expansion, advocacy, and winback determine whether value is realized or lost.'
  },
  {
    q: 'What should teams track?',
    a: 'Track signals that indicate intent, usage, friction, satisfaction, and commercial movement. If a stage is not tracked, it cannot be managed well.'
  }
] as const;

export const insights = [
  {
    title: 'Why activity without accumulation never compounds',
    text: 'Most marketing teams are not underactive. They are structurally fragmented.'
  },
  {
    title: 'Lifecycle beats acquisition-only thinking',
    text: 'The biggest growth opportunities often emerge after purchase, not before it.'
  },
  {
    title: 'Signals should trigger action',
    text: 'The value is not in collecting data. It is in responding at the right time and with the right owner.'
  }
] as const;
