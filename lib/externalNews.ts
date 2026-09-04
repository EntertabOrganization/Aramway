// Server-only: fetches headline/excerpt/link summaries from free, publicly
// documented RSS feeds and the GDELT news index. Never stores, never
// reproduces full article bodies — each item exists to send readers to the
// original publisher, matching Aramway's News & Insights compliance rules.

const REVALIDATE_SECONDS = 6 * 60 * 60; // refresh every ~6 hours
const FETCH_TIMEOUT_MS = 8000;

// Publishers we deliberately never pull via the automated pipeline (e.g.
// commercial-license-only wire services). Keep in sync with the sources
// review — see the News & Insights proposal.
const EXCLUDED_DOMAINS = ["reuters.com"];

export type ExternalNewsItem = {
  id: string;
  headline: string;
  excerpt: string;
  image?: string;
  date: string; // ISO 8601
  category: string;
  publisher: string;
  publisherUrl: string;
  link: string;
};

type RssSource = {
  kind: "rss";
  id: string;
  publisher: string;
  publisherUrl: string;
  feedUrl: string;
  category: string;
  keywordFilter?: RegExp;
};

type GdeltSource = {
  kind: "gdelt";
  id: string;
  query: string;
  category: string;
  maxRecords?: number;
};

type Source = RssSource | GdeltSource;

const SOURCES: Source[] = [
  {
    kind: "rss",
    id: "wto",
    publisher: "World Trade Organization",
    publisherUrl: "https://www.wto.org",
    feedUrl: "https://www.wto.org/library/rss/latest_news_e.xml",
    category: "International Trade & Regulations",
  },
  {
    kind: "rss",
    id: "nist",
    publisher: "NIST",
    publisherUrl: "https://www.nist.gov",
    feedUrl: "https://www.nist.gov/news-events/news/rss.xml",
    category: "AI Governance & Responsible AI",
    keywordFilter: /\b(AI|artificial intelligence|risk management framework|machine learning)\b/i,
  },
  {
    kind: "gdelt",
    id: "gdelt-market-entry",
    query: '"foreign direct investment" OR "market entry"',
    category: "Market Entry & Foreign Investment",
    maxRecords: 4,
  },
  {
    kind: "gdelt",
    id: "gdelt-digital",
    query: '"digital transformation" OR "emerging technology" business',
    category: "Digital Transformation & Emerging Tech",
    maxRecords: 4,
  },
  {
    kind: "gdelt",
    id: "gdelt-economy",
    query: '"global economy" OR "trade policy" business',
    category: "Global Economic & Business Developments",
    maxRecords: 4,
  },
];

async function fetchWithTimeout(url: string, init?: RequestInit) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function decodeEntities(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function stripHtml(text: string): string {
  return decodeEntities(text.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).replace(/\s+\S*$/, "")}…`;
}

function extractTag(block: string, tag: string): string | null {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  return match ? decodeEntities(match[1]) : null;
}

function extractImage(block: string): string | undefined {
  const enclosure = block.match(/<enclosure[^>]*url=["']([^"']+)["'][^>]*>/i);
  if (enclosure) return enclosure[1];
  const media = block.match(/<media:(?:content|thumbnail)[^>]*url=["']([^"']+)["'][^>]*>/i);
  if (media) return media[1];
  return undefined;
}

async function fetchRss(source: RssSource): Promise<ExternalNewsItem[]> {
  const res = await fetchWithTimeout(source.feedUrl, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; AramwayNewsBot/1.0)" },
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) return [];

  const xml = await res.text();
  const items = xml.match(/<item[\s\S]*?<\/item>/gi) ?? [];

  return items
    .map((block): ExternalNewsItem | null => {
      const title = extractTag(block, "title");
      const link = extractTag(block, "link");
      if (!title || !link) return null;

      const description = extractTag(block, "description") ?? "";
      const pubDate = extractTag(block, "pubDate");
      const date = pubDate ? new Date(pubDate).toISOString() : new Date().toISOString();
      const excerpt = truncate(stripHtml(description), 220);

      if (source.keywordFilter && !source.keywordFilter.test(`${title} ${excerpt}`)) return null;

      return {
        id: `${source.id}:${link}`,
        headline: stripHtml(title),
        excerpt,
        image: extractImage(block),
        date,
        category: source.category,
        publisher: source.publisher,
        publisherUrl: source.publisherUrl,
        link,
      };
    })
    .filter((item): item is ExternalNewsItem => item !== null);
}

type GdeltArticle = {
  url: string;
  title: string;
  seendate: string;
  domain: string;
  socialimage?: string;
};

async function fetchGdelt(source: GdeltSource): Promise<ExternalNewsItem[]> {
  const params = new URLSearchParams({
    query: source.query,
    mode: "ArtList",
    format: "json",
    sort: "datedesc",
    maxrecords: String(source.maxRecords ?? 4),
    timespan: "3d",
  });
  const res = await fetchWithTimeout(`https://api.gdeltproject.org/api/v2/doc/doc?${params}`, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; AramwayNewsBot/1.0)" },
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) return [];

  const text = await res.text();
  let data: { articles?: GdeltArticle[] };
  try {
    data = JSON.parse(text);
  } catch {
    return []; // GDELT returns a plain-text notice (rate limit, etc.) instead of JSON on failure
  }

  return (data.articles ?? [])
    .filter((a) => !EXCLUDED_DOMAINS.some((d) => a.domain?.includes(d)))
    .map((a): ExternalNewsItem => {
      const isoDate = /^\d{8}T\d{6}Z$/.test(a.seendate)
        ? `${a.seendate.slice(0, 4)}-${a.seendate.slice(4, 6)}-${a.seendate.slice(6, 8)}T${a.seendate.slice(9, 11)}:${a.seendate.slice(11, 13)}:${a.seendate.slice(13, 15)}Z`
        : new Date().toISOString();

      return {
        id: `${source.id}:${a.url}`,
        headline: stripHtml(a.title ?? a.domain),
        excerpt: "",
        image: a.socialimage,
        date: isoDate,
        category: source.category,
        publisher: a.domain,
        publisherUrl: `https://${a.domain}`,
        link: a.url,
      };
    });
}

export async function getExternalNews(): Promise<ExternalNewsItem[]> {
  const results = await Promise.allSettled(
    SOURCES.map((source) => (source.kind === "rss" ? fetchRss(source) : fetchGdelt(source)))
  );

  const items = results.flatMap((r) => (r.status === "fulfilled" ? r.value : []));

  const seen = new Set<string>();
  const deduped = items.filter((item) => {
    if (seen.has(item.link)) return false;
    seen.add(item.link);
    return true;
  });

  return deduped.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 12);
}
