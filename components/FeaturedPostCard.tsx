import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/posts";

export default function FeaturedPostCard({ post, basePath }: { post: Post; basePath?: string }) {
  const href = `${basePath ?? (post.type === "blog" ? "/blogs" : "/news-insights")}/${post.slug}`;

  return (
    <Link
      href={href}
      className="group relative flex h-[420px] w-full items-end overflow-hidden rounded-3xl sm:h-[480px]"
    >
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="relative flex w-full flex-col items-start gap-4 p-8 sm:flex-row sm:items-end sm:justify-between sm:p-12">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">{post.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">{post.excerpt}</p>
        </div>
        <span className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-ink shadow-lg transition-transform group-hover:-translate-y-0.5">
          Read Full Article
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
