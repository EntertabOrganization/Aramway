"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import PostCard from "@/components/PostCard";
import type { Post } from "@/lib/posts";

export default function PostFilterGrid({ posts, basePath }: { posts: Post[]; basePath?: string }) {
  const categories = useMemo(() => Array.from(new Set(posts.map((p) => p.category))), [posts]);
  const [active, setActive] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const tag = searchParams.get("tag");

  useEffect(() => {
    if (tag) setActive(null);
  }, [tag]);

  const filtered = tag
    ? posts.filter((p) => p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
    : active
      ? posts.filter((p) => p.category === active)
      : posts;

  return (
    <div>
      {tag && (
        <div className="mb-4 flex items-center gap-2">
          <span className="text-sm text-muted">
            Filtered by tag: <span className="font-semibold text-ink">{tag}</span>
          </span>
          <button
            type="button"
            onClick={() => router.push(pathname)}
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Clear ×
          </button>
        </div>
      )}
      <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
        <button
          type="button"
          onClick={() => {
            setActive(null);
            if (tag) router.push(pathname);
          }}
          className={`px-3 py-1 text-sm font-medium transition-colors ${
            active === null && !tag ? "text-primary" : "text-muted hover:text-ink"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <span key={category} className="flex items-center gap-1">
            <span className="text-muted/40">|</span>
            <button
              type="button"
              onClick={() => {
                setActive(category);
                if (tag) router.push(pathname);
              }}
              className={`px-3 py-1 text-sm font-medium transition-colors ${
                active === category && !tag ? "text-primary" : "text-muted hover:text-ink"
              }`}
            >
              {category}
            </button>
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((post) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <PostCard post={post} basePath={basePath} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
