import AnimateIn from "@/components/AnimateIn";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(244,233,214,0.5) 0%, rgba(244,233,214,0) 60%)",
      }}
    >
      <div className="container-max text-center">
        <AnimateIn>
          <span className="section-eyebrow">{eyebrow}</span>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            {title}
          </h1>
        </AnimateIn>
        {description && (
          <AnimateIn delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg">{description}</p>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
