"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import instalacionesData from "@/content/instalaciones.json";

const VISUAL = [
  { gradient: "from-deep-blue via-deep-blue/90 to-brand-blue/60",    accent: "bg-brand-yellow" },
  { gradient: "from-deep-green via-deep-green/85 to-brand-green/50", accent: "bg-brand-green"  },
  { gradient: "from-[#3D1A6E] via-brand-blue/70 to-deep-blue/50",    accent: "bg-brand-blue"   },
  { gradient: "from-ink via-deep-green/80 to-brand-green/40",        accent: "bg-brand-green"  },
  { gradient: "from-deep-green via-brand-green/70 to-brand-green/30",accent: "bg-brand-yellow" },
  { gradient: "from-deep-blue via-ink/90 to-deep-blue/60",           accent: "bg-brand-blue"   },
];

const slides = instalacionesData.slides.map((s, i) => ({
  ...s,
  id: `slide-${i}`,
  ...VISUAL[i % VISUAL.length],
}));

export function InstalacionesCarrusel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  // Swipe
  const touchStartX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  return (
    <section id="instalaciones" aria-label="Instalaciones del colegio" className="overflow-hidden">

      {/* Encabezado */}
      <div className="px-4 sm:px-6 lg:px-8 pt-16 pb-10 lg:pt-24 lg:pb-14 mx-auto max-w-7xl">
        <p className="font-sans text-xs uppercase tracking-widest text-deep-green font-semibold mb-2">
          Instalaciones
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight max-w-lg">
          Espacios diseñados{" "}
          <br className="hidden sm:block" />
          para aprender y crecer
        </h2>
      </div>

      {/* Carrusel full-bleed */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Viewport */}
        <div className="relative h-[380px] sm:h-[480px] lg:h-[580px] overflow-hidden">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                i === current ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
              aria-hidden={i !== current}
            >
              {/* Fondo: imagen desde CMS o gradiente placeholder */}
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                />
              ) : (
                <div
                  className={cn("absolute inset-0 bg-gradient-to-br", slide.gradient)}
                  aria-hidden="true"
                >
                  <div className="absolute top-[6%] right-[6%] w-72 h-72 rounded-full bg-white/[0.04]" />
                  <div className="absolute bottom-[8%] left-[4%] w-96 h-96 rounded-full bg-white/[0.03]" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.05]">
                    <span className="font-serif font-bold text-white leading-none text-[300px] sm:text-[360px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              )}

              {/* Overlay de legibilidad */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                aria-hidden="true"
              />

              {/* Texto — solo visible en el slide activo */}
              {i === current && (
                <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 lg:px-16 pb-16 sm:pb-18 lg:pb-20">
                  <div
                    className={cn("h-0.5 w-8 rounded-full mb-4", slide.accent)}
                    aria-hidden="true"
                  />
                  <p className="font-sans text-xs uppercase tracking-widest text-white/60 mb-2">
                    {slide.tag}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                    {slide.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed max-w-xl">
                    {slide.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Controles */}
        <div className="absolute bottom-6 sm:bottom-7 left-6 sm:left-10 lg:left-16 z-20 flex items-center gap-6">
          {/* Dots */}
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Diapositivas">
            {slides.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Instalación ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === current
                    ? "w-8 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/65"
                )}
              />
            ))}
          </div>

          {/* Flechas */}
          <div className="flex items-center gap-0.5">
            <button
              onClick={prev}
              aria-label="Instalación anterior"
              className="h-10 w-8 flex items-center justify-center text-white/65 hover:text-white transition-[color,transform] duration-150 active:scale-[0.97]"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente instalación"
              className="h-10 w-8 flex items-center justify-center text-white/65 hover:text-white transition-[color,transform] duration-150 active:scale-[0.97]"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
