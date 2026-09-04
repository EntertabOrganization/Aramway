"use client";

import { useEffect, useState } from "react";
import type { MarketTickerEntry } from "@/app/api/market-ticker/route";

const POLL_MS = 60_000;

export default function MarketTicker() {
  const [entries, setEntries] = useState<MarketTickerEntry[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch("/api/market-ticker", { cache: "no-store" });
        const data = await res.json();
        if (!cancelled && data.ok) setEntries(data.entries);
      } catch {
        // Keep showing the last known values on a transient network error.
      }
    };

    load();
    const id = setInterval(load, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  if (!entries || entries.length === 0) return null;

  const loop = [...entries, ...entries];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex h-9 items-stretch border-t border-border bg-white text-ink shadow-[0_-2px_8px_rgba(0,0,0,0.06)] sm:h-10">
      <span className="flex shrink-0 items-center gap-1.5 bg-primary px-3 text-[11px] font-bold uppercase tracking-wide text-white sm:px-4 sm:text-xs">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
        Markets
      </span>

      <div className="no-scrollbar flex-1 overflow-hidden">
        <div className="marquee-track flex h-full w-max items-center gap-8 whitespace-nowrap sm:gap-10">
          {loop.map((entry, i) => {
            const up = entry.change >= 0;
            return (
              <span key={`${entry.symbol}-${i}`} className="flex items-center gap-2 text-[11px] font-medium sm:text-xs">
                <span className="text-muted">{entry.label}</span>
                <span className="font-semibold text-ink">
                  {entry.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className={up ? "text-emerald-600" : "text-red-600"}>
                  {up ? "▲" : "▼"} {Math.abs(entry.change).toFixed(2)} ({up ? "+" : ""}
                  {entry.percentChange.toFixed(2)}%)
                </span>
              </span>
            );
          })}
        </div>
      </div>

      <span className="hidden shrink-0 items-center border-l border-border px-3 text-[10px] text-muted sm:flex">
        Data via Yahoo Finance
      </span>
    </div>
  );
}
