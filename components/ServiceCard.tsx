import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
      style={{ borderColor: "var(--color-cream-deep)" }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 text-2xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]"
      >
        {service.icon}
      </div>
      <h3 className="mt-5 font-heading text-lg font-bold text-ink">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Learn more
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
