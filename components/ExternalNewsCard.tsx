import type { ExternalNewsItem } from "@/lib/externalNews";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ExternalNewsCard({ item }: { item: ExternalNewsItem }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-deep bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10">
      {item.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.image}
          alt=""
          loading="lazy"
          referrerPolicy="no-referrer"
          className="h-40 w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-muted">
          <span>{formatDate(item.date)}</span>
          <span className="text-primary">·</span>
          <span className="rounded-full bg-cream-soft px-2.5 py-0.5 font-semibold text-secondary">{item.category}</span>
        </div>

        <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-ink">{item.headline}</h3>

        {item.excerpt ? <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.excerpt}</p> : <div className="flex-1" />}

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
          <span className="text-xs text-muted">
            Source: <span className="font-semibold text-ink">{item.publisher}</span>
          </span>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary"
          >
            Read Full Article
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
