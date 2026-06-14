import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import nivelesData from "@/content/niveles.json";

const VISUAL = [
  { gradient: "from-brand-green/90 via-brand-green/60 to-deep-green", accentBg: "bg-brand-green", accentText: "text-deep-green" },
  { gradient: "from-deep-green via-deep-green/80 to-brand-green/50",  accentBg: "bg-deep-green", accentText: "text-deep-green" },
  { gradient: "from-brand-blue/90 via-brand-blue to-deep-blue",       accentBg: "bg-brand-blue", accentText: "text-brand-blue" },
  { gradient: "from-deep-blue via-deep-blue/90 to-brand-blue/60",     accentBg: "bg-deep-blue",  accentText: "text-deep-blue" },
  { gradient: "from-ink via-deep-blue/90 to-brand-blue/50",           accentBg: "bg-ink",        accentText: "text-ink" },
];

const niveles = nivelesData.niveles.map((n, i) => ({
  ...n,
  href: `/niveles/${n.slug}`,
  ...VISUAL[i % VISUAL.length],
}));

export function NivelesEducativos() {
  return (
    <section id="niveles" aria-label="Niveles educativos" className="overflow-hidden">

      {/* ── Encabezado de sección ─────────────────────────── */}
      <div className="px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16 mx-auto max-w-7xl">
        <p className="font-sans text-xs uppercase tracking-widest text-deep-green font-semibold mb-2">
          Niveles educativos
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight max-w-lg">
          Un camino completo,
          <br className="hidden sm:block" />
          del inicio a la preparatoria
        </h2>
      </div>

      {/* ── Bloques alternados ────────────────────────────── */}
      <div className="flex flex-col gap-3 lg:gap-4">
      {niveles.map((nivel, i) => {
        const imageRight = i % 2 !== 0; // pares → imagen izquierda, impares → imagen derecha

        return (
          <div
            key={nivel.slug}
            className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[520px] overflow-hidden"
          >
            {/* ── Columna de imagen ───────────────────────── */}
            <div
              className={cn(
                "relative min-h-72 overflow-hidden rounded-2xl",
                imageRight && "lg:order-2"
              )}
            >
              {nivel.image ? (
                <Image
                  src={nivel.image}
                  alt={nivel.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div
                  className={cn("absolute inset-0 bg-gradient-to-br", nivel.gradient)}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.07]">
                    <span className="font-serif font-bold text-white leading-none text-[160px] sm:text-[200px] lg:text-[220px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute top-[10%] left-[12%] w-36 h-36 rounded-full bg-white/5" />
                  <div className="absolute bottom-[12%] right-[10%] w-52 h-52 rounded-full bg-white/5" />
                </div>
              )}
            </div>

            {/* ── Columna de texto ─────────────────────────── */}
            <div
              className={cn(
                "flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 xl:px-20",
                imageRight && "lg:order-1"
              )}
            >
              {/* Línea de acento de color + eyebrow */}
              <div
                className={cn("h-0.5 w-8 mb-4 rounded-full", nivel.accentBg)}
                aria-hidden="true"
              />
              <p
                className={cn(
                  "font-sans text-xs uppercase tracking-widest font-semibold mb-3",
                  nivel.accentText
                )}
              >
                {nivel.ageRange}
              </p>

              {/* Nombre del nivel */}
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-5">
                {nivel.name}
              </h3>

              {/* Descripción */}
              <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-md">
                {nivel.description}
              </p>

              {/* CTA — Link estilizado como botón primario */}
              <div>
                <Link
                  href={nivel.href}
                  className={cn(
                    "inline-flex items-center gap-2 font-semibold tracking-wide select-none cursor-pointer",
                    "h-11 px-6 text-sm rounded-lg",
                    "transition-[background-color,box-shadow,transform] duration-200",
                    "bg-deep-blue text-warm-white shadow-sm",
                    "hover:bg-brand-blue hover:shadow-md",
                    "active:scale-[0.97]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-blue focus-visible:ring-offset-2"
                  )}
                >
                  Ver nivel
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </div>

          </div>
        );
      })}
      </div>

    </section>
  );
}
