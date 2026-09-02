import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import FeaturedPostCard from "@/components/FeaturedPostCard";
import PostFilterGrid from "@/components/PostFilterGrid";
import Newsletter from "@/components/Newsletter";
import { posts as allPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Strategic perspectives on cross-border expansion, market entry excellence, and building global enterprises.",
};

export default function BlogsPage() {
  const [featured, ...rest] = allPosts;
  const tags = Array.from(new Set(allPosts.flatMap((p) => p.tags))).slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow="Our Blogs"
        title="News and insights"
        description="Strategic perspectives on cross border expansion, market entry excellence, and building global enterprises that transform industries."
        pattern
      />

      <section className="pb-10">
        <div className="container-max flex flex-wrap gap-x-6 gap-y-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blogs?tag=${encodeURIComponent(tag)}#our-insights`}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>

      {featured && (
        <section className="pb-16">
          <div className="container-max">
            <AnimateIn>
              <FeaturedPostCard post={featured} basePath="/blogs" />
            </AnimateIn>
          </div>
        </section>
      )}

      <section className="pb-20">
        <div className="container-max">
          <Newsletter />
        </div>
      </section>

      <section id="our-insights" className="scroll-mt-28 pb-16">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <h2 className="font-heading text-3xl font-extrabold text-ink sm:text-4xl">Our Insights</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Keep up with our handpicked market insights, success stories, and expert opinions.
                Whether you&apos;re moving from MENA to the U.S. or exploring the Gulf, our programs
                offer local tips and support.
              </p>
            </AnimateIn>
          </div>
          <div className="mt-12">
            <Suspense fallback={null}>
              <PostFilterGrid posts={rest} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
