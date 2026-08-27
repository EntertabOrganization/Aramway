export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  heroSubheading: string;
  intro: string;
  deliverables: string[];
  faqs: { question: string; answer: string }[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "global-market-access",
    title: "Global Market Access",
    icon: "🌍",
    shortDescription:
      "Strategic market entry solutions connecting businesses between the U.S. and MENA regions.",
    heroSubheading:
      "We support companies, particularly from the GCC region, in navigating the U.S. business landscape, and help American companies find opportunities in the Gulf.",
    intro:
      "Aramway develops customized market entry strategies for Gulf-based organizations expanding to the U.S., and for American companies exploring the Gulf. Through local expertise and an established network of partners, we deliver a smooth, compliant, and effective expansion process from day one.",
    deliverables: [
      "Tailored market entry and expansion strategies for GCC organizations",
      "Strategic partnership development in the Gulf region for U.S. companies",
      "Support for establishing and growing your U.S. market footprint",
      "A smooth, compliant, and effective expansion process",
      "Local insight and a trusted partner network",
      "Cross-border business opportunity identification",
    ],
    faqs: [
      {
        question: "What makes Aramway different from other market entry consultancies?",
        answer:
          "We operate on the ground in both Virginia and Riyadh, giving clients direct, dual-market execution rather than remote advisory alone.",
      },
      {
        question: "Which industries do you specialize in?",
        answer:
          "Technology, healthcare, consumer goods, financial services, real estate, and professional services are our core focus areas, though our network extends further.",
      },
      {
        question: "Can you help identify and vet local partners?",
        answer:
          "Yes. Partner identification, due diligence, and introductions are a core part of our market access engagements.",
      },
      {
        question: "How long does a typical market entry take?",
        answer:
          "Most engagements run 4 to 12 months depending on the industry, regulatory complexity, and entry strategy chosen.",
      },
    ],
  },
  {
    slug: "consultancy-management",
    title: "Consultancy & Management",
    icon: "📊",
    shortDescription:
      "Expert advisory services providing strategic guidance for sustainable growth.",
    heroSubheading:
      "Strategic guidance from planning through execution, so every expansion decision is grounded in market reality.",
    intro:
      "Our consultancy and management practice pairs seasoned advisors with hands-on operators. We help leadership teams set strategy, structure operations, and manage performance across borders, so growth is deliberate rather than accidental.",
    deliverables: [
      "Market and competitive analysis",
      "Business strategy and expansion roadmaps",
      "Operational structuring and process design",
      "Interim and fractional management support",
      "Performance monitoring and KPI frameworks",
      "Change management for cross-border teams",
    ],
    faqs: [
      {
        question: "Do you work with startups as well as large enterprises?",
        answer:
          "Yes, our advisory engagements scale from early-stage founders to established enterprises entering a new region.",
      },
      {
        question: "Can you provide interim management, not just advice?",
        answer:
          "Absolutely. We can embed experienced operators on the ground while your permanent leadership is established.",
      },
      {
        question: "How is an engagement typically structured?",
        answer:
          "We start with a diagnostic phase, then move to a phased roadmap with clear milestones and monthly reviews.",
      },
      {
        question: "Is this a one-time engagement or ongoing support?",
        answer:
          "Both models are available — a fixed-scope project or a retained advisory relationship.",
      },
    ],
  },
  {
    slug: "client-representation",
    title: "Client Representation",
    icon: "🤝",
    shortDescription:
      "Professional representation services acting on behalf of clients across markets.",
    heroSubheading:
      "We act as your trusted local presence, representing your interests where you cannot yet be.",
    intro:
      "Client representation gives you a credible, on-the-ground presence in a new market before you commit to a full local entity. We represent your interests in meetings, negotiations, and regulatory processes, always aligned to your objectives.",
    deliverables: [
      "Local representation in meetings and negotiations",
      "Government and regulatory liaison",
      "Contract and partnership negotiation support",
      "Ongoing relationship management with local stakeholders",
      "Market intelligence gathering and reporting",
      "Confidential deal exploration on your behalf",
    ],
    faqs: [
      {
        question: "Can you represent us without disclosing our identity initially?",
        answer:
          "Yes, we frequently conduct confidential, unbranded exploration on a client's behalf before a formal introduction.",
      },
      {
        question: "Do you handle government relations too?",
        answer:
          "Yes, we liaise with regulators and government bodies as part of our representation services.",
      },
      {
        question: "Is representation exclusive to one client per sector?",
        answer:
          "We manage potential conflicts carefully and disclose any overlapping engagements upfront.",
      },
      {
        question: "How often will we receive updates?",
        answer:
          "Standard cadence is weekly written updates plus scheduled calls, adjustable to your preference.",
      },
    ],
  },
  {
    slug: "legal-and-compliance-services",
    title: "Legal and Compliance Services",
    icon: "⚖️",
    shortDescription:
      "Comprehensive legal support including regulatory compliance across jurisdictions.",
    heroSubheading:
      "Regulatory complexity shouldn't slow your expansion. We make compliance a non-issue.",
    intro:
      "Our legal and compliance team helps you navigate licensing, corporate structuring, employment law, and regulatory filings across the U.S. and GCC, working alongside trusted local counsel where needed.",
    deliverables: [
      "Entity formation and corporate structuring guidance",
      "Regulatory compliance audits and filings",
      "Employment and labor law guidance",
      "Contract drafting and review support",
      "Licensing and permit coordination",
      "Ongoing compliance monitoring",
    ],
    faqs: [
      {
        question: "Do you provide legal advice directly, or coordinate with local counsel?",
        answer:
          "We coordinate with vetted local counsel in each jurisdiction and manage the process end-to-end so nothing falls through the cracks.",
      },
      {
        question: "What entity types can you help set up?",
        answer:
          "LLCs, branch offices, joint ventures, and free-zone entities, depending on your target market and strategy.",
      },
      {
        question: "Can you help with ongoing compliance, not just setup?",
        answer:
          "Yes, we offer retained compliance monitoring so filings and renewals never slip.",
      },
      {
        question: "How do you handle confidential documents?",
        answer:
          "All documentation is handled under NDA with secure, access-controlled storage.",
      },
    ],
  },
  {
    slug: "financial-management",
    title: "Financial Management",
    icon: "💼",
    shortDescription:
      "Expert financial services including accounting, tax planning, and reporting.",
    heroSubheading:
      "Sound financial foundations, built for cross-border operations from the start.",
    intro:
      "From accounting and tax planning to financial reporting, our finance practice keeps your cross-border operations transparent, compliant, and ready for growth or investment.",
    deliverables: [
      "Bookkeeping and accounting setup",
      "Cross-border tax planning and structuring",
      "Financial reporting and reporting cadence design",
      "Budgeting and cash flow forecasting",
      "Investor-ready financial packages",
      "Payroll and benefits administration support",
    ],
    faqs: [
      {
        question: "Can you manage accounting for entities in both the U.S. and GCC?",
        answer:
          "Yes, we coordinate accounting across jurisdictions and consolidate reporting for a single, clear view.",
      },
      {
        question: "Do you help with fundraising-related financials?",
        answer:
          "We prepare investor-ready financial packages and support due diligence processes.",
      },
      {
        question: "Is payroll included?",
        answer:
          "Payroll and benefits administration support is available as part of our financial management service.",
      },
      {
        question: "How do you handle currency and tax treaty considerations?",
        answer:
          "Our tax planning accounts for applicable treaties and currency exposure to minimize cost and risk.",
      },
    ],
  },
  {
    slug: "corporate-media-production",
    title: "Corporate Media & Production",
    icon: "🎬",
    shortDescription:
      "Professional media production services creating compelling content for your brand.",
    heroSubheading:
      "Content that builds trust and credibility with new audiences, in a new market.",
    intro:
      "First impressions matter most when entering a new market. Our media and production team creates brand films, corporate content, and campaign assets tailored to resonate with U.S. and MENA audiences alike.",
    deliverables: [
      "Corporate brand films and documentaries",
      "Product and campaign video production",
      "Photography for brand and executive profiles",
      "Localized content adaptation for target markets",
      "Event coverage and production",
      "Content strategy for market launches",
    ],
    faqs: [
      {
        question: "Do you produce content in both English and Arabic?",
        answer:
          "Yes, our production team works natively in both languages and adapts messaging for cultural resonance.",
      },
      {
        question: "Can you support a full market-launch campaign?",
        answer:
          "We plan and produce complete launch content packages, from strategy through final assets.",
      },
      {
        question: "Do you handle event production too?",
        answer:
          "Yes, including launch events, roadshows, and executive engagements in either market.",
      },
      {
        question: "What is the typical turnaround for a brand film?",
        answer:
          "Most brand films are delivered within 4 to 6 weeks from kickoff, depending on scope.",
      },
    ],
  },
  {
    slug: "business-support-services",
    title: "Business Support Services",
    icon: "🧭",
    shortDescription:
      "Comprehensive operational support including administrative services for growing businesses.",
    heroSubheading:
      "The operational backbone that lets you focus on growth, not logistics.",
    intro:
      "From administrative support to office setup and vendor management, our business support services handle the operational details of running across two markets, so your team can focus on the business.",
    deliverables: [
      "Virtual and physical office setup",
      "Administrative and executive support",
      "Vendor sourcing and management",
      "Travel and logistics coordination",
      "HR and recruitment support",
      "Translation and localization services",
    ],
    faqs: [
      {
        question: "Can you set up a physical office presence for us?",
        answer:
          "Yes, from virtual offices to fully staffed physical locations in Virginia or Riyadh.",
      },
      {
        question: "Do you help with hiring local staff?",
        answer:
          "We support recruitment, screening, and onboarding for local hires in both markets.",
      },
      {
        question: "Is translation included?",
        answer:
          "Business and legal document translation and localization are available as part of this service.",
      },
      {
        question: "Can these services scale as we grow?",
        answer:
          "Yes, support scales from a single point of contact to a full outsourced operations team.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
