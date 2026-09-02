"use client";

import { motion } from "framer-motion";

export type TimelinePhase = {
  badge: string;
  title: string;
  description: string;
};

export default function ProgramTimeline({ phases }: { phases: TimelinePhase[] }) {
  return (
    <div className="relative max-w-3xl">
      <div
        className="absolute top-3 bottom-10 left-[20px] w-[2px]"
        style={{ backgroundColor: "var(--color-gold-light)" }}
      />
      <div className="flex flex-col gap-7">
        {phases.map((phase, i) => (
          <motion.div
            key={`${phase.badge}-${phase.title}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: "easeOut" }}
            className="relative pl-[60px]"
          >
            <span
              className="absolute left-1.5 top-0 h-[30px] w-[30px] rounded-full border-[7px] border-white"
              style={{ backgroundColor: "var(--color-primary)", boxShadow: "0 0 0 1px var(--color-gold-light)" }}
            />
            <div className="rounded-2xl p-6 sm:p-8">
              <span
                className="inline-block rounded-lg px-3.5 py-1.5 text-sm text-white"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                {phase.badge}
              </span>
              <h3 className="mt-5 font-body text-xl font-medium text-ink sm:text-[22px]">{phase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{phase.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
