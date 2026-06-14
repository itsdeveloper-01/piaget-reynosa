"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import heroData from "@/content/hero.json";

const SLIDE_BG = [
  "from-deep-blue via-brand-blue/80 to-brand-blue/50",
  "from-deep-green via-brand-green/70 to-brand-yellow/30",
  "from-ink via-deep-blue to-brand-blue/60",
];

const slides = heroData.slides.map((s, i) => ({
  id: i + 1,
  eyebrow: s.eyebrow,
  title: s.title,
  description: s.description,
  primaryCta:   { label: s.primary_cta_label,   href: s.primary_cta_href },
  secondaryCta: { label: s.secondary_cta_label, href: s.secondary_cta_href },
  badge: s.badge,
  image: s.image,
  imageBg: SLIDE_BG[i % SLIDE_BG.length],
}));

const SLIDE_DURATION = 6000;
const SWIPE_THRESHOLD = 50;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) =>
      setCurrent(((index % slides.length) + slides.length) % slides.length),
    []
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="relative bg-warm-white overflow-hidden"
      aria-label="Carrusel principal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── MOBILE: imagen prominente en la parte superior ─── */}
      <div className="relative lg:hidden h-64 sm:h-80 overflow-hidden" aria-hidden="true">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === current ? "opacity-100" : "opacity-0"
            )}
          >
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
              <div className={cn("absolute inset-0 bg-gradient-to-br", slide.imageBg)}>
                <div className="absolute top-[12%] left-[18%] w-48 h-48 rounded-full bg-white/6" />
                <div className="absolute bottom-[18%] right-[12%] w-64 h-64 rounded-full bg-white/6" />
                <div className="absolute top-[45%] right-[28%] w-32 h-32 rounded-full bg-white/6" />
              </div>
            )}
          </div>
        ))}
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-warm-white to-transparent" />
      </div>

      {/* ── DESKTOP: panel de imagen en lado derecho (viewport) ─ */}
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%]"
        aria-hidden="true"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === current ? "opacity-100" : "opacity-0"
            )}
          >
            {slide.image ? (
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                sizes="52vw"
                priority={i === 0}
              />
            ) : (
              <div className={cn("absolute inset-0 bg-gradient-to-br", slide.imageBg)}>
                <div className="absolute top-[15%] left-[20%] w-56 h-56 rounded-full bg-white/5" />
                <div className="absolute bottom-[20%] right-[15%] w-72 h-72 rounded-full bg-white/5" />
                <div className="absolute top-[50%] right-[30%] w-36 h-36 rounded-full bg-white/5" />
              </div>
            )}
          </div>
        ))}

        {/* Degradado: imagen → blanco cálido */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-warm-white to-transparent z-10" />

        {/* Badge informativo */}
        <div className="absolute bottom-8 right-8 z-20">
          <p
            key={current}
            className="font-sans text-xs text-white/60 tracking-wide"
          >
            {slides[current].badge}
          </p>
        </div>
      </div>

      {/* ── Contenido de texto (mobile: debajo de imagen, desktop: columna izquierda) ── */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-0 lg:min-h-[calc(100vh-4rem)] lg:flex lg:items-center">
        <div className="lg:max-w-[46%]">
          {/*
           * key={current} remonta este div en cada cambio de slide,
           * re-disparando la animación hero-text-enter definida en globals.css
           */}
          <div key={current} className="hero-text-enter">

            {/* Eyebrow */}
            <p className="font-sans text-xs uppercase tracking-widest text-brand-blue font-semibold">
              {slides[current].eyebrow}
            </p>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl xl:text-5xl font-bold text-ink leading-tight mt-4 max-w-lg">
              {slides[current].title}
            </h1>

            {/* Descripción */}
            <p className="font-sans text-base lg:text-lg text-muted leading-relaxed mt-5 max-w-md">
              {slides[current].description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Button size="lg">{slides[current].primaryCta.label}</Button>
              <Button variant="secondary" size="lg">
                {slides[current].secondaryCta.label}
              </Button>
            </div>

            {/* Controles — flechas minimalistas + puntos + contador */}
            <div className="flex items-center gap-3 mt-8 pb-2">

              {/* Flecha anterior — sin borde, solo el ícono */}
              <button
                onClick={prev}
                aria-label="Slide anterior"
                className="flex items-center justify-center h-10 w-8 text-muted hover:text-ink transition-[color,transform] duration-150 active:scale-[0.97] focus-visible:outline-none focus-visible:text-ink"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
              </button>

              {/* Puntos indicadores */}
              <div className="flex gap-2" role="tablist" aria-label="Slides del carrusel">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    role="tab"
                    aria-selected={idx === current}
                    aria-label={`Ir al slide ${idx + 1}`}
                    onClick={() => goTo(idx)}
                    className={cn(
                      "h-1.5 rounded-full transition-[width,background-color] duration-300",
                      idx === current
                        ? "w-8 bg-deep-blue"
                        : "w-1.5 bg-brand-gray hover:bg-muted"
                    )}
                  />
                ))}
              </div>

              {/* Flecha siguiente — sin borde, solo el ícono */}
              <button
                onClick={next}
                aria-label="Siguiente slide"
                className="flex items-center justify-center h-10 w-8 text-muted hover:text-ink transition-[color,transform] duration-150 active:scale-[0.97] focus-visible:outline-none focus-visible:text-ink"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
              </button>

              {/* Contador discreto */}
              <span
                className="ml-1 font-sans text-xs text-muted/50 tabular-nums select-none"
                aria-live="polite"
                aria-atomic="true"
              >
                {current + 1} / {slides.length}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
