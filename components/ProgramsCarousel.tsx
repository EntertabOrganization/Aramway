"use client";

import { useRef } from "react";
import type { Program } from "@/lib/programs";
import ProgramCard from "@/components/ProgramCard";

export default function ProgramsCarousel({ programs }: { programs: Program[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.querySelector<HTMLElement>("[data-carousel-item]");
    const amount = item ? item.offsetWidth + 24 : track.clientWidth * 0.85;
    track.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
      >
        {programs.map((program) => (
          <div
            key={program.slug}
            data-carousel-item
            className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc(33.333%-16px)]"
          >
            <ProgramCard program={program} />
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3 lg:hidden">
        <button
          type="button"
          onClick={() => scrollByAmount("prev")}
          aria-label="Previous program"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-deep bg-white text-ink transition-colors duration-300 hover:border-primary hover:text-primary"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount("next")}
          aria-label="Next program"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-deep bg-white text-ink transition-colors duration-300 hover:border-primary hover:text-primary"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
