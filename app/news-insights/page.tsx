import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import PostCard from "@/components/PostCard";
import ExternalNewsCard from "@/components/ExternalNewsCard";
import Newsletter from "@/components/Newsletter";
import { getPostsByType } from "@/lib/posts";
import { getExternalNews } from "@/lib/externalNews";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Aramway's hub for market intelligence, success stories, and expert commentary on U.S. and MENA trade.",
};

export default async function NewsInsightsPage() {
  const posts = getPostsByType("news");
  const externalNews = await getExternalNews();

  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        title="Market Intelligence, Curated"
        description="Keep up with our handpicked market insights, success stories, and expert opinions. Whether you're moving from MENA to the U.S. or exploring the Gulf, our programs offer local tips and support."
        pattern
      />

      {externalNews.length > 0 ? (
        <section>
          <div className="container-max">
            <div className="max-w-2xl">
              <span className="section-eyebrow">From Our Sources</span>
              <h2 className="mt-4 font-heading text-2xl font-bold text-ink sm:text-3xl">
                External Coverage, Automatically Tracked
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Headlines and summaries pulled from trusted institutions and news sources, refreshed
                automatically every few hours. Each item links directly to the original publisher — read
                the full story there.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {externalNews.map((item, i) => (
                <AnimateIn key={item.id} delay={(i % 3) * 0.08}>
                  <ExternalNewsCard item={item} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
