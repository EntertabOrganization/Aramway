export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
  tags: string[];
  type: "blog" | "news";
  image?: string;
};

export const posts: Post[] = [
  {
    slug: "consultancy-management-research",
    title: "Consultancy & Management Research: Top Tips for Staying Competitive",
    excerpt:
      "In today's business world, consulting and management practices are evolving fast. Here's what forward-looking companies are getting right.",
    content: [
      "In today's business world, consulting and management practices are evolving fast. Companies that treat strategy as a living process, rather than an annual exercise, consistently outperform those that don't.",
      "The firms winning in cross-border expansion share three habits: they invest in local market intelligence before committing capital, they build advisory relationships that outlast a single project, and they measure success in operational outcomes, not just deliverables.",
      "For businesses eyeing the U.S. or MENA markets, this means picking partners who combine strategic thinking with the ability to execute on the ground.",
    ],
    date: "2025-11-13",
    category: "Consultancy & Management",
    tags: ["Market Entry", "Success Stories"],
    type: "blog",
    image: "/images/services-hero.webp",
  },
  {
    slug: "united-states-market-entry-program",
    title: "The United States Market Entry Program",
    excerpt:
      "A closer look at how Aramway's U.S. Market Entry Program takes GCC businesses from assessment to launch.",
    content: [
      "Entering the U.S. market is rarely just a matter of registering a company. Regulatory complexity, cultural differences, and the sheer scale of the market can overwhelm even well-resourced teams.",
      "Our U.S. Market Entry Program was built to compress the learning curve: a structured path from market assessment through entity formation, compliance, and warm introductions to partners who matter.",
      "Businesses that follow a structured entry path reach revenue-generating operations significantly faster than those navigating alone.",
    ],
    date: "2025-11-18",
    category: "Market Entry",
    tags: ["Market Entry", "United States"],
    type: "blog",
    image: "/images/program-us.webp",
  },
  {
    slug: "sustainable-business-practices",
    title: "Sustainable Business Practices",
    excerpt:
      "Why sustainability is becoming a competitive differentiator for companies expanding across the U.S. and MENA.",
    content: [
      "Sustainability is no longer a compliance checkbox, it's a market expectation. Investors, regulators, and customers in both the U.S. and MENA increasingly factor sustainability into who they do business with.",
      "Companies that build sustainable practices into their expansion strategy from day one avoid costly retrofits later, and often find it easier to secure local partnerships and government support.",
    ],
    date: "2025-11-18",
    category: "Market Entry",
    tags: ["Sustainability", "Market Entry"],
    type: "blog",
    image: "/images/program-intl-trade.webp",
  },
  {
    slug: "economic-growth-ksa-industry",
    title: "Economic Growth and the Promotion of Industry in the KSA",
    excerpt:
      "Saudi Arabia's Vision 2030 continues to reshape the Kingdom's industrial landscape, creating new openings for foreign partners.",
    content: [
      "Saudi Arabia's Vision 2030 agenda has accelerated investment in manufacturing, technology, and logistics, creating meaningful openings for foreign companies willing to build genuine local partnerships.",
      "For U.S. businesses, the opportunity is significant, but success depends on understanding local regulation, culture, and the pace at which relationships are built in the Kingdom.",
    ],
    date: "2025-11-18",
    category: "International Trade & Global Commerce",
    tags: ["International Trade", "Trade Policy"],
    type: "blog",
    image: "/images/program-saudi-gcc.webp",
  },
  {
    slug: "russia-wto-carbon-border-dispute",
    title:
      "Russia requests dispute panel on EU carbon border adjustment and emissions trading scheme",
    excerpt:
      "At a meeting of the Dispute Settlement Body (DSB) on 24 July, members considered a request from Russia regarding the EU's carbon border adjustment mechanism.",
    content: [
      "At a meeting of the Dispute Settlement Body (DSB) on 24 July, members considered a request from Russia for the establishment of a dispute panel concerning the EU's Carbon Border Adjustment Mechanism (CBAM) and Emissions Trading Scheme.",
      "The outcome of this dispute could have significant implications for exporters navigating carbon-related trade measures across multiple jurisdictions.",
    ],
    date: "2026-08-14",
    category: "External News",
    tags: ["WTO", "Trade Policy"],
    type: "news",
  },
  {
    slug: "wto-panel-turkish-ev-measures",
    title: "WTO panel issues report regarding Turkish measures on EVs and other types of vehicles",
    excerpt:
      "On 28 July, the WTO circulated the panel report in the case brought by China concerning Turkish measures on electric vehicles.",
    content: [
      "On 28 July, the WTO circulated the panel report in the case brought by China concerning Turkish measures affecting electric vehicles and other vehicle types.",
      "The report is expected to influence how emerging markets structure incentives and requirements for the EV sector going forward.",
    ],
    date: "2026-08-14",
    category: "External News",
    tags: ["WTO", "Technology Policy"],
    type: "news",
  },
  {
    slug: "trade-policy-review-india",
    title: "Trade Policy Review: India",
    excerpt:
      "The Eighth review of the trade policies and practices of India takes place on 21 July at the WTO.",
    content: [
      "The Eighth review of the trade policies and practices of India took place at the WTO, offering member states an opportunity to assess India's trade framework and recent policy shifts.",
      "For companies trading with or through India, these reviews are a useful signal of where regulatory friction may ease or tighten.",
    ],
    date: "2026-07-24",
    category: "International Trade & Global Commerce",
    tags: ["International Trade", "Trade Policy", "WTO"],
    type: "news",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByType(type: Post["type"]) {
  return posts
    .filter((p) => p.type === type)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
