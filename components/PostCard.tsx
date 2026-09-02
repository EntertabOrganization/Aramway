import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post, basePath }: { post: Post; basePath: string }) {
  if (post.image) {
    return (
      <Link
        href={`${basePath}/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-deep bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
      >
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <time className="text-xs font-medium text-muted">{formatDate(post.date)}</time>
          <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-ink">{post.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Continue Reading
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`${basePath}/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
    >
      <time className="text-xs font-medium text-muted">{formatDate(post.date)}</time>
      <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-ink">{post.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Continue Reading
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
