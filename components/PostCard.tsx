import Link from "next/link";
import type { Post } from "@/lib/posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post, basePath }: { post: Post; basePath: string }) {
  return (
    <Link
      href={`${basePath}/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
    >
      <span className="section-eyebrow w-fit">{post.category}</span>
      <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-ink">{post.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between">
        <time className="text-xs font-medium text-muted">{formatDate(post.date)}</time>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Read more
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
