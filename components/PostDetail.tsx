import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import PostCard from "@/components/PostCard";
import type { Post } from "@/lib/posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
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

export default function PostDetail({
  post,
  backHref,
  backLabel,
  related,
}: {
  post: Post;
  backHref: string;
  backLabel: string;
  related: Post[];
}) {
  return (
    <>
      <section className="pb-4 pt-28 sm:pt-32">
        <div className="container-max">
          <Link href={backHref} className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 12H7M7 12l4-4M7 12l4 4" />
            </svg>
            {backLabel}
          </Link>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-max grid items-center gap-10 lg:grid-cols-2">
          <AnimateIn>
            <h1 className="font-heading text-3xl font-extrabold leading-tight text-ink sm:text-4xl">{post.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-muted">{post.excerpt}</p>
            <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-muted">
              <CalendarIcon />
              {formatDate(post.date)}
            </div>
          </AnimateIn>
          {post.image && (
            <AnimateIn delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
            </AnimateIn>
          )}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-max max-w-3xl">
          <AnimateIn className="space-y-5 text-base leading-relaxed text-ink">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </AnimateIn>
          <AnimateIn delay={0.1} className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="section-eyebrow">
                {tag}
              </span>
            ))}
          </AnimateIn>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 sm:py-20" style={{ backgroundColor: "var(--color-cream)" }}>
          <div className="container-max">
            <AnimateIn className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-extrabold text-ink sm:text-4xl">Latest News &amp; Updates</h2>
              <p className="mt-4 text-base text-muted">Continue exploring insights on international expansion</p>
            </AnimateIn>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <AnimateIn key={p.slug} delay={(i % 3) * 0.08}>
                  <PostCard post={p} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
