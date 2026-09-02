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

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#666666" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.6665 1.66675V5.00008" />
      <path d="M13.3335 1.66675V5.00008" />
      <path d="M15.8333 3.33325H4.16667C3.24619 3.33325 2.5 4.07944 2.5 4.99992V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99992C17.5 4.07944 16.7538 3.33325 15.8333 3.33325Z" />
      <path d="M2.5 8.33325H17.5" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M4.42856 1.14998C4.6246 0.949961 4.94669 0.94996 5.14273 1.14998L6.76554 2.80575L8.4213 4.42856C8.62133 4.6246 8.62133 4.94669 8.42131 5.14273L6.76554 6.76554L5.14273 8.4213C4.94669 8.62133 4.6246 8.62133 4.42856 8.42131L2.80575 6.76554L1.14998 5.14273C0.949961 4.94669 0.94996 4.6246 1.14998 4.42856L2.80575 2.80575L4.42856 1.14998Z"
        fill="#E1BF8B"
      />
    </svg>
  );
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span
      className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
      style={{ backgroundColor: "rgba(12,9,3,0.55)" }}
    >
      <DiamondIcon />
      {category}
    </span>
  );
}

export default function PostCard({ post, basePath }: { post: Post; basePath?: string }) {
  const href = `${basePath ?? (post.type === "blog" ? "/blogs" : "/news-insights")}/${post.slug}`;

  if (post.image) {
    return (
      <Link
        href={href}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-deep bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
      >
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <CategoryBadge category={post.category} />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted">
            <CalendarIcon />
            {formatDate(post.date)}
          </div>
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
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="flex items-center gap-1.5 text-xs font-medium text-muted">
        <CalendarIcon />
        {formatDate(post.date)}
      </div>
      <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-ink">{post.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Continue Reading
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
