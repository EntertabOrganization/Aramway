import AnimateIn from "@/components/AnimateIn";

export default function PageHero({
  eyebrow,
  title,
  description,
  pattern = false,
  heroImage,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  pattern?: boolean;
  heroImage?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden py-24 sm:py-28 ${heroImage ? "pb-56 sm:pb-80" : ""}`}
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(244,233,214,0.5) 0%, rgba(244,233,214,0) 60%)",
      }}
    >
      {pattern && (
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/images/hero-overlay-pattern.svg')",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
      )}
      {heroImage && (
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "min(900px, 70%) auto",
          }}
        />
      )}
      <div className="container-max text-center">
        <AnimateIn>
          <span className="section-eyebrow">{eyebrow}</span>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-extrabold capitalize leading-tight text-ink sm:text-5xl">
            {title}
          </h1>
        </AnimateIn>
        {description && (
          <AnimateIn delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-xl">{description}</p>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
