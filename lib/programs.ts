export type Program = {
  slug: string;
  title: string;
  shortDescription: string;
  heroSubheading: string;
  intro: string;
  benefits: string[];
  image: string;
};

export const programs: Program[] = [
  {
    slug: "the-us-market-entry-program",
    title: "The U.S. Market Entry Program",
    shortDescription:
      "A guided pathway for GCC businesses to establish and grow their presence in the United States.",
    heroSubheading:
      "Everything a GCC business needs to enter the U.S. market with confidence, in one structured program.",
    intro:
      "The U.S. Market Entry Program takes GCC businesses from initial market assessment through operational launch. We combine strategic planning, entity setup, compliance, and warm introductions into a single, structured pathway.",
    benefits: [
      "Market readiness assessment tailored to your sector",
      "U.S. entity formation and regulatory setup",
      "Introductions to partners, distributors, and investors",
      "Dedicated on-the-ground support in Virginia",
      "48-hour application review and response",
    ],
    image: "/images/program-us.webp",
  },
  {
    slug: "the-saudi-gcc-market-program",
    title: "The Saudi & GCC Market Program",
    shortDescription:
      "A dedicated track for U.S. companies expanding into Saudi Arabia and the wider GCC.",
    heroSubheading:
      "Enter Saudi Arabia and the GCC with a local partner who understands the market from the inside.",
    intro:
      "Saudi Arabia and the broader GCC reward businesses that respect local relationships and regulatory nuance. This program pairs U.S. companies with our Riyadh-based team for licensing, partnership development, and go-to-market execution.",
    benefits: [
      "Saudi and GCC market entry strategy and licensing support",
      "Local partner and distributor identification",
      "Cultural and regulatory readiness briefings",
      "Government and Vision 2030-aligned sector guidance",
      "On-the-ground representation in Riyadh",
    ],
    image: "/images/program-saudi-gcc.webp",
  },
  {
    slug: "international-trade-program",
    title: "International Trade Program",
    shortDescription:
      "Support for businesses navigating cross-border trade, tariffs, and logistics.",
    heroSubheading:
      "Move goods and services across borders with fewer surprises and less friction.",
    intro:
      "Our International Trade Program helps businesses understand trade policy, tariffs, and logistics that affect cross-border commerce between the U.S. and MENA, keeping you ahead of regulatory shifts rather than reacting to them.",
    benefits: [
      "Trade policy and tariff impact analysis",
      "Import/export compliance guidance",
      "Logistics and supply chain partner introductions",
      "Ongoing trade policy monitoring and briefings",
      "Dispute and regulatory issue support",
    ],
    image: "/images/program-intl-trade.webp",
  },
  {
    slug: "corporate-communication-and-relations",
    title: "Corporate Communications and Relations Program",
    shortDescription:
      "Positioning and communications support for companies entering a new market's public eye.",
    heroSubheading:
      "Build the reputation and relationships that make a new market welcome you.",
    intro:
      "Entering a new market means building trust with media, government, and industry stakeholders from scratch. This program combines media production, public relations, and government relations to establish your brand's credibility from day one.",
    benefits: [
      "Media strategy and corporate content production",
      "Public relations and press introductions",
      "Government and stakeholder relationship building",
      "Executive positioning and thought leadership support",
      "Crisis and reputation management guidance",
    ],
    image: "/images/program-corporate-comms.webp",
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((p) => p.slug === slug);
}
