"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-surface"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/images/logo.svg" alt="Aramway" width={72} height={72} priority className="h-[72px] w-[72px]" />
          </motion.div>
          <p className="text-sm font-medium tracking-wide text-muted text-center px-6">
            Loading your gateway to
            <br />
            international success...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
