"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import stagesData from "@/content/montessori-stages.json";

gsap.registerPlugin(ScrollTrigger);

const stages = stagesData.stages;
const finalPhrase = stagesData.final_phrase;

export function MontessoriScroll() {
  const componentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const finalRef = useRef<HTMLDivElement>(null);
  const finalBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── Desktop: animación pinned con scrub ─────────────────
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: `+=${(stages.length + 1) * 100}%`,
            pin: pinnedRef.current,
            scrub: 1.2,
            anticipatePin: 1,
          },
        });

        // Pausa inicial en stage 0
        tl.to({}, { duration: 1 });

        // Transiciones entre stages
        for (let i = 0; i < stages.length - 1; i++) {
          tl
            .to(stageRefs.current[i], { opacity: 0, y: -24, duration: 0.5 })
            .to(bgRefs.current[i + 1], { opacity: 1, duration: 0.5 }, "<")
            .fromTo(
              stageRefs.current[i + 1],
              { opacity: 0, y: 32 },
              { opacity: 1, y: 0, duration: 0.5 },
              "<0.15"
            )
            .to({}, { duration: 1 });
        }

        // Transición a frase final
        tl
          .to(stageRefs.current[stages.length - 1], { opacity: 0, y: -24, duration: 0.5 })
          .to(finalBgRef.current, { opacity: 1, duration: 0.6 }, "<")
          .fromTo(
            finalRef.current,
            { opacity: 0, scale: 0.97 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
            "<0.25"
          )
          .to({}, { duration: 1.5 });
      });

      // ── Mobile: fade-in sencillo al scroll ──────────────────
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(
          ".montessori-card",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".montessori-mobile",
              start: "top 80%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".montessori-final-phrase",
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".montessori-final-phrase",
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef}>

      {/* ═══════════════════════════════════════════════════════
          DESKTOP — Animación pinned con GSAP ScrollTrigger
      ═══════════════════════════════════════════════════════ */}
      <div ref={wrapperRef} className="hidden lg:block">
        <div
          ref={pinnedRef}
          className="relative h-screen w-full overflow-hidden"
          aria-label="Etapas del aprendizaje Montessori"
        >
          {/* Fondos por stage */}
          {stages.map((stage, i) => (
            <div
              key={`bg-${i}`}
              ref={(el) => { bgRefs.current[i] = el; }}
              className="absolute inset-0"
              aria-hidden="true"
              style={{ backgroundColor: stage.bg, opacity: i === 0 ? 1 : 0 }}
            />
          ))}

          {/* Fondo de la frase final (warm-white) */}
          <div
            ref={finalBgRef}
            className="absolute inset-0 bg-warm-white"
            aria-hidden="true"
            style={{ opacity: 0 }}
          />

          {/* Contenido de cada stage */}
          {stages.map((stage, i) => (
            <div
              key={`stage-${i}`}
              ref={(el) => { stageRefs.current[i] = el; }}
              className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center"
              style={{ opacity: i === 0 ? 1 : 0 }}
              aria-hidden={i > 0}
            >
              {/* Contador sutil */}
              <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-white/25 mb-8 select-none">
                {stage.number} &nbsp;/&nbsp; 0{stages.length}
              </p>

              {/* Palabra(s) principal(es) — cada elemento del array en su propia línea */}
              <h2 className="font-serif font-bold text-white leading-none mb-8" aria-label={stage.word.join(" ")}>
                {stage.word.map((w, wi) => (
                  <span
                    key={wi}
                    className="block text-6xl xl:text-8xl 2xl:text-9xl"
                  >
                    {w}
                  </span>
                ))}
              </h2>

              {/* Descripción */}
              <p className="font-sans text-base text-white/50 leading-relaxed max-w-sm">
                {stage.description}
              </p>
            </div>
          ))}

          {/* Frase final */}
          <div
            ref={finalRef}
            className="absolute inset-0 flex items-center justify-center px-8 text-center"
            style={{ opacity: 0 }}
            aria-label="View the world through their eyes"
          >
            <div>
              <p className="font-serif font-bold text-ink leading-[1.05] text-6xl xl:text-7xl 2xl:text-8xl max-w-4xl mx-auto">
                {finalPhrase}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          MOBILE — Tarjetas apiladas con fade-in en scroll
      ═══════════════════════════════════════════════════════ */}
      <section
        className="montessori-mobile lg:hidden bg-deep-blue py-16 px-4 sm:px-6"
        aria-label="Etapas del aprendizaje Montessori"
      >
        <div className="mx-auto max-w-sm sm:max-w-md">
          {/* Encabezado */}
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-yellow/60 mb-3 text-center">
            Aprendizaje Montessori
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white text-center mb-10 leading-tight">
            Así aprenden<br />nuestros niños
          </h2>

          {/* Tarjetas de stages */}
          <div className="space-y-3">
            {stages.map((stage, i) => (
              <div
                key={i}
                className="montessori-card rounded-2xl p-5 border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              >
                <p className="font-sans text-[10px] uppercase tracking-widest text-brand-yellow/60 font-semibold mb-1">
                  {stage.number}
                </p>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {stage.word.join(" ")}
                </h3>
                <p className="font-sans text-sm text-white/55 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Frase final mobile */}
          <div className="montessori-final-phrase mt-14 text-center">
            <p className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              {finalPhrase}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
