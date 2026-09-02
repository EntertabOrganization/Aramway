import Link from "next/link";
import Image from "next/image";
import type { Program } from "@/lib/programs";

export default function ProgramCardLarge({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-cream-deep bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-6 font-heading text-2xl font-bold text-ink">{program.title}</h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{program.shortDescription}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        learn more
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
