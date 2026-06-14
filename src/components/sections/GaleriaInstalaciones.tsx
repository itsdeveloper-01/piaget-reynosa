"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import galeriaData from "@/content/galeria.json";

const VISUAL = [
  { gradient: "from-deep-green to-brand-green/60",              gridClass: "lg:col-start-1 lg:row-start-1" },
  { gradient: "from-[#3D1A6E]/90 to-deep-blue/70",             gridClass: "lg:col-start-1 lg:row-start-2" },
  { gradient: "from-deep-blue via-deep-blue/90 to-brand-blue/60", gridClass: "lg:col-start-2 lg:row-span-2" },
  { gradient: "from-ink to-deep-green/80",                      gridClass: "lg:col-start-3 lg:row-start-1" },
  { gradient: "from-deep-green/85 to-brand-green/45",           gridClass: "lg:col-start-3 lg:row-start-2" },
];

const galeria = galeriaData.items.map((item, i) => ({
  ...item,
  id: `galeria-${i}`,
  ...VISUAL[i % VISUAL.length],
}));

function GaleriaCard({
  item,
  className,
}: {
  item: (typeof galeria)[0];
  className?: string;
}) {
  return (
    <div className={cn("group relative overflow-hidden rounded-2xl cursor-pointer", className)}>
      {item.image ? (
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 1024px) 78vw, 33vw"
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br transition-transform duration-500 ease-out group-hover:scale-[1.04]",
            item.gradient
          )}
          aria-hidden="true"
        >
          <div className="absolute top-[8%] right-[8%] w-1/3 h-1/3 rounded-full bg-white/[0.04]" />
          <div className="absolute bottom-[10%] left-[6%] w-1/2 h-1/2 rounded-full bg-white/[0.03]" />
        </div>
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-55 group-hover:opacity-85 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Texto */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <p className="font-sans text-[10px] uppercase tracking-widest text-white/55 mb-0.5">
          {item.subtitle}
        </p>
        <h3 className="font-serif text-base font-semibold text-white leading-tight">
          {item.title}
        </h3>
      </div>
    </div>
  );
}

export function GaleriaInstalaciones() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const count = galeria.length;

  /* Desplaza al card N y actualiza el índice */
  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (!card) return;
    card.scrollIntoView({ inline: "start", behavior: "smooth", block: "nearest" });
    setCurrent(index);
  }, []);

  const prev = useCallback(
    () => scrollToIndex(Math.max(0, current - 1)),
    [current, scrollToIndex]
  );
  const next = useCallback(
    () => scrollToIndex(Math.min(count - 1, current + 1)),
    [current, count, scrollToIndex]
  );

  /* Detecta el card más centrado mientras el usuario desliza */
  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const midpoint = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - midpoint);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setCurrent(closest);
  }, []);

  return (
    <section
      id="galeria"
      aria-label="Galería de instalaciones"
      className="py-3 lg:py-4"
    >
      {/* ── Móvil: carril con snap-scroll + controles ───── */}
      <div className="lg:hidden">
        {/* Carril */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3 px-4 sm:px-6 pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {galeria.map((item) => (
            <GaleriaCard
              key={item.id}
              item={item}
              className="shrink-0 snap-start w-[78vw] sm:w-[44vw] h-60 sm:h-72"
            />
          ))}
        </div>

        {/* Controles: flecha ← · dots · flecha → */}
        <div className="flex items-center justify-between px-4 sm:px-6 mt-4">
          {/* Prev */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Imagen anterior"
            className={cn(
              "h-9 w-9 rounded-full border border-brand-gray flex items-center justify-center",
              "text-ink disabled:opacity-25",
              "active:scale-[0.97] transition-[transform,opacity] duration-150",
              "hover:border-ink/25 hover:bg-ink/[0.03]"
            )}
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5" role="tablist">
            {galeria.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Imagen ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === current
                    ? "w-8 h-1.5 bg-deep-blue"
                    : "w-1.5 h-1.5 bg-brand-gray hover:bg-muted/40"
                )}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={current === count - 1}
            aria-label="Imagen siguiente"
            className={cn(
              "h-9 w-9 rounded-full border border-brand-gray flex items-center justify-center",
              "text-ink disabled:opacity-25",
              "active:scale-[0.97] transition-[transform,opacity] duration-150",
              "hover:border-ink/25 hover:bg-ink/[0.03]"
            )}
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* ── Desktop: grid editorial 2 | 1 | 2 ───────────── */}
      <div
        className="hidden lg:grid gap-3 px-4 lg:px-8 h-[580px] xl:h-[640px]"
        style={{ gridTemplateColumns: "1fr 1.35fr 1fr", gridTemplateRows: "1fr 1fr" }}
      >
        {galeria.map((item) => (
          <GaleriaCard
            key={item.id}
            item={item}
            className={item.gridClass}
          />
        ))}
      </div>
    </section>
  );
}
