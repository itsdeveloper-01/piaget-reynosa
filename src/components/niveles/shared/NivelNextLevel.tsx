import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import nivelesData from "@/content/niveles.json";

export function NivelNextLevel({ currentSlug }: { currentSlug: string }) {
  const niveles = nivelesData.niveles;
  const idx = niveles.findIndex((n) => n.slug === currentSlug);
  if (idx === -1 || idx >= niveles.length - 1) return null;

  const next = niveles[idx + 1];
  const shortDesc = next.description.length > 90
    ? next.description.slice(0, 90).trimEnd() + "…"
    : next.description;

  return (
    <section aria-label={`Siguiente nivel: ${next.name}`} className="overflow-hidden">
      <Link
        href={`/niveles/${next.slug}`}
        className="group relative flex min-h-[280px] sm:min-h-[340px] items-end"
      >
        {/* Background image */}
        <div className="absolute inset-0 bg-ink">
          {next.image && (
            <Image
              src={next.image}
              alt={next.name}
              fill
              className="object-cover opacity-60 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-70 group-hover:scale-[1.02]"
              sizes="100vw"
            />
          )}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-10 sm:py-14 max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-white/40 font-semibold mb-2">
                Siguiente etapa
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 transition-colors duration-300 group-hover:text-brand-yellow">
                {next.name}
              </h2>
              <p className="font-sans text-sm text-white/55 max-w-sm leading-relaxed">
                {next.ageRange} · {shortDesc}
              </p>
            </div>
            <div className="shrink-0 hidden sm:flex items-center justify-center h-12 w-12 rounded-full border border-white/20 text-white transition-[background-color,border-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:bg-white/10 group-hover:border-white/40 group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
