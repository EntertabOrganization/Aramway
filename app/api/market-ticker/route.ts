import { NextResponse } from "next/server";

const INDEXES = [
  { symbol: "^GSPC", label: "S&P 500" },
  { symbol: "^DJI", label: "Dow Jones" },
  { symbol: "^IXIC", label: "Nasdaq" },
];

const REVALIDATE_SECONDS = 300;

type YahooChartResponse = {
  chart: {
    result: [{ meta: { regularMarketPrice: number; chartPreviousClose: number } }] | null;
    error: unknown;
  };
};

export type MarketTickerEntry = {
  symbol: string;
  label: string;
  price: number;
  change: number;
  percentChange: number;
};

async function fetchIndex({ symbol, label }: { symbol: string; label: string }): Promise<MarketTickerEntry | null> {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=1d`;

  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; AramwayTicker/1.0)" },
    next: { revalidate: REVALIDATE_SECONDS },
  });
  const data: YahooChartResponse = await res.json();
  const meta = data.chart.result?.[0]?.meta;

  if (!meta || typeof meta.regularMarketPrice !== "number") return null;

  const price = meta.regularMarketPrice;
  const previousClose = meta.chartPreviousClose;
  const change = price - previousClose;
  const percentChange = previousClose ? (change / previousClose) * 100 : 0;

  return { symbol, label, price, change, percentChange };
}

export async function GET() {
  try {
    const results = await Promise.all(INDEXES.map(fetchIndex));
    const entries = results.filter((e): e is MarketTickerEntry => e !== null);

    if (entries.length === 0) {
      return NextResponse.json({ ok: false, error: "No market data available." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, entries, updatedAt: new Date().toISOString() });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to fetch market data." }, { status: 502 });
  }
}
