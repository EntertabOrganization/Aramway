"use client";

import { motion } from "framer-motion";

export default function ValueBadge({ label, delay = 0 }: { label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -25, scale: 0.85 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex min-h-[120px] w-full items-center justify-center bg-contain bg-center bg-no-repeat p-4 text-center"
      style={{ backgroundImage: "url('/images/value-badge-shape.svg')" }}
    >
      <span className="font-body text-base font-medium text-ink sm:text-lg">{label}</span>
    </motion.div>
  );
}
