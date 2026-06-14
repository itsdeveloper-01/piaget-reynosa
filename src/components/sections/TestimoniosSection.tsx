import { SectionContainer } from "@/components/ui/SectionContainer";
import { cn } from "@/lib/utils";
import testimoniosData from "@/content/testimonios.json";

const accents = ["bg-deep-blue", "bg-deep-green", "bg-brand-blue", "bg-deep-blue", "bg-deep-green"];

const testimonios = testimoniosData.testimonios.map((t, i) => ({
  ...t,
  id: i + 1,
  initial: t.name.charAt(0).toUpperCase(),
  accent: accents[i % accents.length],
}));

export function TestimoniosSection() {
  return (
    <SectionContainer id="testimonios" className="bg-white" padded>

      {/* Encabezado */}
      <div className="mb-12 lg:mb-16">
        <p className="font-sans text-xs uppercase tracking-widest text-deep-green font-semibold mb-2">
          Testimonios
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight max-w-xl">
          Lo que dicen las familias
          <br className="hidden sm:block" />
          que ya forman parte de Piaget
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonios.map((t) => (
          <div
            key={t.id}
            className="flex flex-col p-7 sm:p-8 rounded-2xl border border-brand-gray/60 bg-warm-white"
          >
            {/* Comilla decorativa */}
            <span
              className="font-serif text-[72px] leading-none text-brand-blue/10 select-none mb-1"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Cita */}
            <p className="font-serif text-base italic text-ink/80 leading-relaxed flex-1 mb-8">
              {t.quote}
            </p>

            {/* Autor */}
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center shrink-0",
                  t.accent
                )}
              >
                <span className="font-serif font-bold text-white text-sm">
                  {t.initial}
                </span>
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-ink leading-tight">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-muted mt-0.5">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </SectionContainer>
  );
}
