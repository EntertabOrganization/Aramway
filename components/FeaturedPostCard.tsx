import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/posts";

export default function FeaturedPostCard({ post, basePath }: { post: Post; basePath: string }) {
  return (
    <Link
      href={`${basePath}/${post.slug}`}
      className="group relative flex h-[420px] w-full overflow-hidden rounded-3xl sm:h-[480px]"
    >
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-ink/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex w-full flex-col items-center justify-center gap-4 p-8 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-16">
        <h2 className="max-w-2xl font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
          {post.title}
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">{post.excerpt}</p>
        <span className="mt-2 inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-ink shadow-lg">
          Read Full Article
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
