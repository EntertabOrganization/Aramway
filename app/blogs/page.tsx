import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import { getPostsByType } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Strategic perspectives on cross-border expansion, market entry excellence, and building global enterprises.",
};

export default function BlogsPage() {
  const posts = getPostsByType("blog");

  return (
    <>
      <PageHero
        eyebrow="News and Insights"
        title="Our Blogs"
        description="Strategic perspectives on cross-border expansion, market entry excellence, and building global enterprises that transform industries."
      />

      <section className="pb-16">
        <div className="container-max grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <AnimateIn key={post.slug} delay={(i % 3) * 0.08}>
              <PostCard post={post} basePath="/blogs" />
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-max">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
