import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import { getPostsByType } from "@/lib/posts";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Aramway's hub for market intelligence, success stories, and expert commentary on U.S. and MENA trade.",
};

export default function NewsInsightsPage() {
  const posts = getPostsByType("news");

  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        title="Market Intelligence, Curated"
        description="Keep up with our handpicked market insights, success stories, and expert opinions. Whether you're moving from MENA to the U.S. or exploring the Gulf, our programs offer local tips and support."
        pattern
      />

      <section className="pb-16">
        <div className="container-max grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <AnimateIn key={post.slug} delay={(i % 3) * 0.08}>
              <PostCard post={post} basePath="/news-insights" />
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  );
}
