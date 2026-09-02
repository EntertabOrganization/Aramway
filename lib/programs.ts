export type Program = {
  slug: string;
  title: string;
  shortDescription: string;
  heroSubheading: string;
  intro: string;
  benefits: string[];
  image: string;
  heroImage?: string;
  timeline?: { badge: string; title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
  ctaTitle?: string;
};

const STANDARD_TIMELINE = [
  {
    badge: "Phase 1",
    title: "Discovery & Research",
    description:
      "We conduct thorough market assessments to identify customer segments, competitive dynamics, and emerging trends. This research forms the foundation for strategic decision-making and tailored market entry planning.",
  },
  {
    badge: "Phase 2",
    title: "Business planning",
    description:
      "We support the development of effective business plans, including financial modeling, marketing strategies, and operational frameworks aligned with local market expectations and regulatory conditions.",
  },
  {
    badge: "Phase 3",
    title: "Promotional (marketing)",
    description:
      "We design targeted promotional strategies to enhance product visibility and brand recognition across the GCC markets.",
  },
  {
    badge: "Phase 4",
    title: "Legal and regulatory support",
    description:
      "We provide guidance on compliance with local regulations, including registration, licensing, and visa procedures with trusted legal experts.",
  },
  {
    badge: "Phase 5",
    title: "Partner identification",
    description:
      "We help identify local partners, distributors, and suppliers aligned with your business goals and operational needs.",
  },
  {
    badge: "Phase 5",
    title: "Business matchmaking",
    description:
      "We facilitate introductions and meetings with key stakeholders to enable direct engagement with potential partners and clients.",
  },
];

export const programs: Program[] = [
  {
    slug: "the-us-market-entry-program",
    title: "The U.S. Market Entry Program",
    shortDescription:
      "Our engagement with local suppliers to promote products in the local market addressing different industries will help our international suppliers to realize the market value and needs.",
    heroSubheading:
      "Everything a GCC business needs to enter the U.S. market with confidence, in one structured program.",
    intro:
      "The U.S. Market Entry Program is designed to support foreign businesses in launching and expanding their operations across the United States. Drawing from our operational experience and localized expertise, the program offers practical tools and strategic support to navigate regulatory frameworks, define positioning, and activate market presence.",
    benefits: [
      "Market readiness assessment tailored to your sector",
      "U.S. entity formation and regulatory setup",
      "Introductions to partners, distributors, and investors",
      "Dedicated on-the-ground support in Virginia",
      "48-hour application review and response",
    ],
    image: "/images/program-us.webp",
    heroImage: "/images/program-us-detail-hero.webp",
    timeline: STANDARD_TIMELINE,
    faqs: [
      {
        question: "What makes the U.S. market entry process unique?",
        answer:
          "The U.S. market presents unique challenges including federal and state-level regulations, diverse consumer preferences across regions, competitive landscape complexity, and the importance of local partnerships. Our program addresses these through comprehensive planning and localized expertise.",
      },
      {
        question: "Do you support operations across all U.S. states?",
        answer:
          "Yes, we provide nationwide support with particular expertise in major business hubs including New York, California, Texas, Florida, and Illinois. Our network extends across all states to support your expansion wherever needed.",
      },
      {
        question: "How long does it typically take to establish operations in the U.S.?",
        answer:
          "Timeline varies based on business structure and industry. Entity formation typically takes 1-2 months, while full operational setup including regulatory compliance, partner identification, and market activation can span 6-12 months. We provide customized timeline planning based on your specific situation.",
      },
      {
        question: "What types of business structures do you help establish?",
        answer:
          "We support various entity types including LLCs, C-Corporations, S-Corporations, and branch offices of foreign companies. We help determine the optimal structure based on your business objectives, tax considerations, and operational requirements.",
      },
    ],
  },
  {
    slug: "the-saudi-gcc-market-program",
    title: "The Saudi & GCC Market Program",
    shortDescription:
      "Explore the Saudi & GCC Market Entry Program, your guide to thriving in Saudi Arabia and the GCC. We combine local insights with global strategies, building connections and providing support.",
    heroSubheading:
      "Enter Saudi Arabia and the GCC with a local partner who understands the market from the inside.",
    intro:
      "Our Saudi & GCC Market Entry Program is a comprehensive initiative designed to support foreign companies seeking to establish and expand their presence in Saudi Arabia and the broader Gulf Cooperation Council (GCC) region. Through a structured approach and a wide range of support services, we help businesses navigate the regional landscape and execute effective market entry strategies.",
    benefits: [
      "Saudi and GCC market entry strategy and licensing support",
      "Local partner and distributor identification",
      "Cultural and regulatory readiness briefings",
      "Government and Vision 2030-aligned sector guidance",
      "On-the-ground representation in Riyadh",
    ],
    image: "/images/program-saudi-gcc.webp",
    heroImage: "/images/program-saudi-detail-hero.webp",
    timeline: STANDARD_TIMELINE,
    faqs: [
      {
        question: "How long does it typically take to establish presence in Saudi Arabia?",
        answer:
          "Timeline varies based on business structure and industry. Company registration typically takes 2-3 months, while full market activation including partner identification and regulatory compliance can span 6-12 months. We provide detailed timeline planning during consultation.",
      },
      {
        question: "What makes the GCC market entry process unique?",
        answer:
          "The GCC market requires understanding of local business culture, regulatory frameworks that vary by country, and the importance of personal relationships in business dealings. Our program addresses these unique aspects through local expertise and established networks.",
      },
      {
        question: "What industries have you successfully supported in GCC market entry?",
        answer:
          "We've supported diverse industries including technology, healthcare, manufacturing, professional services, retail, hospitality, and consumer goods. Each program is customized based on industry-specific requirements and market dynamics.",
      },
      {
        question: "Do you support ongoing operations after market entry?",
        answer:
          "Yes. Beyond initial market entry, we offer continued support through our services including legal compliance, financial management, corporate communication, and business development to ensure sustained success in the GCC market.",
      },
    ],
  },
  {
    slug: "international-trade-program",
    title: "International Trade Program",
    shortDescription:
      "Our program connects international suppliers with local markets, addressing unique industry needs. We help partners understand market dynamics and customer needs for product success.",
    heroSubheading:
      "Move goods and services across borders with fewer surprises and less friction.",
    intro:
      "Our program facilitates a seamless bridge between international suppliers and local markets, addressing the unique needs of various industries. Through collaboration with local suppliers, we enable international partners to understand market dynamics and customer needs, ensuring that their products are positioned for success. By maintaining close, transparent relationships and conducting regular assessments, we help international suppliers measure and refine their product offerings in line with market demand.",
    benefits: [
      "Trade policy and tariff impact analysis",
      "Import/export compliance guidance",
      "Logistics and supply chain partner introductions",
      "Ongoing trade policy monitoring and briefings",
      "Dispute and regulatory issue support",
    ],
    image: "/images/program-intl-trade.webp",
    heroImage: "/images/program-intl-trade-detail-hero.webp",
    timeline: STANDARD_TIMELINE,
    faqs: [
      {
        question: "What types of products does this program support?",
        answer:
          "Our International Trade Program supports a wide range of products across various industries including consumer goods, industrial supplies, technology products, healthcare items, and more. We assess each product's market viability and provide tailored support based on industry-specific requirements and regulations.",
      },
      {
        question: "What is your approach to demand fulfillment?",
        answer:
          "We continuously monitor market trends, consumer behavior, and demand patterns to ensure optimal inventory levels and product availability. Our approach includes forecasting, responsive supply chain management, and scalable fulfillment strategies that adapt to market dynamics.",
      },
      {
        question: "How do you handle customs clearance and compliance?",
        answer:
          "We have established relationships with customs authorities and deep expertise in import/export regulations. Our team manages documentation, tariff classification, duty payments, and compliance requirements to ensure smooth customs clearance while minimizing delays and complications.",
      },
      {
        question: "Do you provide warehousing and storage facilities?",
        answer:
          "Yes, through our network of partners, we provide access to strategic warehouse locations and storage facilities in key markets. We can accommodate various storage needs including temperature-controlled environments, secure storage, and distribution-ready facilities.",
      },
    ],
  },
  {
    slug: "corporate-communication-and-relations",
    title: "Corporate Communication and Relations",
    shortDescription:
      "The strategic discipline responsible for shaping, managing, and harmonizing all internal and external communication to ensure clarity and a strong, reputable presence among stakeholders.",
    heroSubheading:
      "Build the reputation and relationships that make a new market welcome you.",
    intro:
      "Corporate Communication and Relations is a strategic discipline focused on aligning all internal and external communication with organizational goals. It builds trust, reinforces corporate identity, and strengthens the organization's reputation across stakeholders. By integrating internal communication, external communication, public relations, investor relations, and CSR efforts, it ensures consistent messaging and strong brand perception. Its mission is to enhance credibility, influence, and long-term organizational success.",
    benefits: [
      "Media strategy and corporate content production",
      "Public relations and press introductions",
      "Government and stakeholder relationship building",
      "Executive positioning and thought leadership support",
      "Crisis and reputation management guidance",
    ],
    image: "/images/program-corporate-comms.webp",
    heroImage: "/images/program-corporate-detail-hero.webp",
    timeline: STANDARD_TIMELINE,
    faqs: [
      {
        question: "What Is Corporate Communication and Relations Responsible For?",
        answer:
          "Corporate Communication and Relations is the strategic discipline responsible for shaping, managing, and harmonizing all internal and external communication to ensure clarity, alignment with organizational goals, and a strong, reputable presence among stakeholders.",
      },
      {
        question: "What Are the Key Objectives of Corporate Communication and Relations?",
        answer:
          "Its objectives include building a favorable and influential reputation, fostering trust with all audiences, aligning stakeholders around shared goals, and safeguarding the organization's image through effective crisis preparedness and response for sustainable success.",
      },
      {
        question: "What Are the Core Activities Included in This Discipline?",
        answer:
          "It integrates internal communication that engages employees and aligns them with the institution's mission and values; external communication that cultivates meaningful relationships with customers, partners, the media, and the broader community; public relations efforts including crisis management; investor relations; and corporate social responsibility programs.",
      },
      {
        question: "How Does Corporate Communication and Relations Strengthen Organizational Identity?",
        answer:
          "It ensures that internal messages support external narratives and that every communication channel reinforces the organization's identity, credibility, and long-term vision, empowering employees as ambassadors of the brand.",
      },
    ],
  },
  {
    slug: "ai-transformation-and-governance",
    title: "AI Transformation and Governance",
    shortDescription:
      "The AI Transformation and Governance program is designed to help businesses, government entities, and public-sector organizations adopt and use artificial intelligence responsibly. Drawing from our operational experience and cross-sector expertise, the program offers practical frameworks and strategic support to manage AI risk, define clear policies, and maintain human oversight as AI adoption scales.",
    heroSubheading:
      "Adopt AI responsibly, with clear policies and human oversight built in from the start.",
    intro:
      "As AI adoption accelerates across businesses and public-sector organizations, the risks of moving without a framework grow just as fast. This program draws on our operational experience and cross-sector expertise to help you manage AI risk, define clear governance policies, and maintain human oversight as adoption scales.",
    benefits: [
      "AI readiness and risk assessment",
      "Governance frameworks and policy design",
      "Responsible adoption roadmaps for public and private sector",
      "Human oversight and accountability structures",
      "Ongoing compliance monitoring as regulations evolve",
    ],
    image: "/images/program-ai-governance.png",
    heroImage: "/images/program-ai-governance.png",
    timeline: [
      {
        badge: "Phase 1",
        title: "AI Readiness Assessment",
        description:
          "We evaluate your organization's current AI maturity, data infrastructure, and operational readiness. This assessment identifies gaps and forms the foundation for a governance roadmap aligned with your goals and risk tolerance.",
      },
      {
        badge: "Phase 2",
        title: "AI Use Case and Risk Assessment",
        description:
          "We review existing and planned AI use cases to identify potential risks, including data privacy, bias, security, and operational impact. This mapping prioritizes areas requiring governance attention and controls.",
      },
      {
        badge: "Phase 3",
        title: "AI Governance Framework Development",
        description:
          "We design a governance framework tailored to your organization, defining roles, accountability structures, and decision-making processes for the responsible development and use of AI systems.",
      },
      {
        badge: "Phase 4",
        title: "AI Policies and Operational Controls",
        description:
          "We develop clear policies and operational controls covering data handling, model oversight, vendor management, and escalation procedures to support consistent and responsible AI use across the organization.",
      },
      {
        badge: "Phase 5",
        title: "Implementation and Workforce Training",
        description:
          "We support the rollout of governance frameworks and policies, including tailored training that equips employees and decision-makers with the knowledge needed to apply AI responsibly in daily operations.",
      },
      {
        badge: "Phase 6",
        title: "Monitoring and Continuous Improvement",
        description:
          "We help establish ongoing monitoring practices to track AI system performance, flag emerging risks, and support periodic reviews that keep governance frameworks aligned with evolving organizational needs and technology.",
      },
    ],
    faqs: [
      {
        question: "What Does the AI Transformation and Governance Program Help Organizations With?",
        answer:
          "The program helps organizations adopt AI responsibly by managing risk, creating clear policies, establishing oversight, and building governance frameworks that support safe, accountable AI use.",
      },
      {
        question: "What does the AI Readiness Assessment include?",
        answer:
          "The assessment reviews your organization's AI maturity, data infrastructure, and operational readiness, identifying gaps, goals, and risk tolerance to guide the program's next phases.",
      },
      {
        question: "How does Aramway assess AI risks?",
        answer:
          "We review your existing and planned AI use cases to identify risks related to privacy, bias, security, and operational impact, so governance efforts focus on the areas that matter most.",
      },
      {
        question: "What is included in the AI Governance Framework?",
        answer:
          "The framework defines clear roles and accountability, decision-making processes, and governance procedures for the responsible development and use of AI systems.",
      },
      {
        question: "Does the program include policies and operational controls?",
        answer:
          "Yes. The program covers data handling, model oversight, vendor management, and escalation procedures to keep AI use compliant and well managed day to day.",
      },
      {
        question: "Does the program include ongoing monitoring?",
        answer:
          "Yes. We help establish ongoing monitoring and periodic reviews for your AI systems and governance frameworks, so they stay aligned as your organization and technology evolve.",
      },
    ],
    ctaTitle: "Ready to Govern AI With Confidence?",
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((p) => p.slug === slug);
}
