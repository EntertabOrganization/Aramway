import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import { getPostBySlug, getPostsByType } from "@/lib/posts";

export function generateStaticParams() {
  return getPostsByType("news").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.type !== "news") notFound();

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} description={formatDate(post.date)} pattern />
      <section className="pb-20">
        <div className="container-max max-w-2xl">
          <AnimateIn className="space-y-5 text-base leading-relaxed text-muted">
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
    </>
  );
}
