"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUp } from "lucide-react";
import stagesData from "@/content/montessori-stages.json";

gsap.registerPlugin(ScrollTrigger);

const stages      = stagesData.stages;
const finalVideo  = stagesData.final_video;
const finalPhrase = stagesData.final_phrase;

const splitIdx   = finalPhrase.indexOf(" through ");
const finalLine1 = splitIdx > -1 ? finalPhrase.slice(0, splitIdx) : finalPhrase;
const finalLine2 = splitIdx > -1 ? finalPhrase.slice(splitIdx + 1) : "";

export function MontessoriScroll() {
  const componentRef = useRef<HTMLDivElement>(null);
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const pinnedRef    = useRef<HTMLDivElement>(null);

  const photoRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs    = useRef<(HTMLDivElement | null)[]>([]);

  const finalVideoRef  = useRef<HTMLVideoElement>(null);
  const finalVeilRef   = useRef<HTMLDivElement>(null);
  const finalLine1Ref  = useRef<HTMLParagraphElement>(null);
  const finalLine2Ref  = useRef<HTMLParagraphElement>(null);

  // Posiciones del ScrollTrigger para skip / regresar
  const sectionStartRef = useRef(0);
  const sectionEndRef   = useRef(0);

  const [inSection, setInSection] = useState(false);
  const [isBelow,   setIsBelow]   = useState(false);

  const skipSection = useCallback(() => {
    window.scrollTo({ top: sectionEndRef.current + 10, behavior: "smooth" });
  }, []);

  const returnAbove = useCallback(() => {
    window.scrollTo({ top: Math.max(0, sectionStartRef.current - 80), behavior: "smooth" });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── Desktop: cinematic pinned timeline ──────────────────────
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: `+=${stages.length * 100}%`,   // 500 vh — más corto y ágil
            pin: pinnedRef.current,
            scrub: 0.6,                           // respuesta rápida al scroll
            anticipatePin: 1,
            onRefresh: (self) => {
              sectionStartRef.current = self.start;
              sectionEndRef.current   = self.end;
            },
            onEnter:      () => { setInSection(true);  setIsBelow(false); },
            onLeave:      () => { setInSection(false); setIsBelow(true);  },
            onEnterBack:  () => { setInSection(true);  setIsBelow(false); },
            onLeaveBack:  () => { setInSection(false); setIsBelow(false); },
          },
        });

        // Pausa inicial en stage 01
        tl.to({}, { duration: 0.7 });

        // Transiciones stage i → i+1
        for (let i = 0; i < stages.length - 1; i++) {
          tl
            .to(textRefs.current[i],  { opacity: 0, yPercent: -6, duration: 0.4, ease: "power2.in" })
            .to(photoRefs.current[i], { opacity: 0, duration: 0.55 }, "<0.05")
            .to(overlayRefs.current[i], { opacity: 0, duration: 0.55 }, "<")
            .fromTo(
              photoRefs.current[i + 1],
              { opacity: 0, scale: 1.05 },
              { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" },
              "<"
            )
            .to(overlayRefs.current[i + 1], { opacity: 1, duration: 0.55, ease: "power2.out" }, "<0.1")
            .fromTo(
              textRefs.current[i + 1],
              { opacity: 0, yPercent: 6 },
              { opacity: 1, yPercent: 0, duration: 0.4, ease: "power2.out" },
              "<0.2"
            )
            .to({}, { duration: 0.7 }); // pausa por stage
        }

        // Transición final: stage 05 → video + frase
        const last = stages.length - 1;
        tl
          .to(textRefs.current[last], { opacity: 0, yPercent: -6, duration: 0.4, ease: "power2.in" })
          .to(photoRefs.current[last],   { opacity: 0, duration: 0.75 }, "<0.05")
          .to(overlayRefs.current[last], { opacity: 0, duration: 0.75 }, "<")
          .to(finalVideoRef.current,     { opacity: 1, duration: 0.75, ease: "power2.out" }, "<")
          .to(finalVeilRef.current,      { opacity: 1, duration: 0.75, ease: "power2.out" }, "<")
          .fromTo(finalLine1Ref.current, { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0, duration: 0.5, ease: "power2.out" }, "<0.5")
          .fromTo(finalLine2Ref.current, { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0, duration: 0.5, ease: "power2.out" }, "<0.4")
          .to({}, { duration: 1.2 }); // pausa final
      });

      // ── Mobile: tarjetas apiladas ────────────────────────────────
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(
          ".montessori-card",
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
            scrollTrigger: { trigger: ".montessori-mobile", start: "top 80%", once: true },
          }
        );
        gsap.fromTo(
          ".montessori-final-phrase",
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: ".montessori-final-phrase", start: "top 85%", once: true },
          }
        );
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  const showButton = inSection || isBelow;

  return (
    <div ref={componentRef}>

      {/* ── Botón flotante skip / regresar (solo desktop) ────────── */}
      <button
        onClick={isBelow ? returnAbove : skipSection}
        aria-label={isBelow ? "Regresar al inicio de la sección" : "Saltar sección"}
        className="hidden lg:flex fixed bottom-8 right-8 z-50 items-center gap-2 h-10 px-5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white/90 text-sm font-sans font-medium hover:bg-black/60 transition-[background-color,opacity,transform] duration-300 active:scale-[0.97] select-none"
        style={{
          opacity:       showButton ? 1 : 0,
          pointerEvents: showButton ? "auto" : "none",
          transform:     showButton ? "translateY(0)" : "translateY(6px)",
        }}
      >
        {isBelow ? (
          <>
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={2} />
            Regresar
          </>
        ) : (
          <>
            Saltar sección
            <ArrowDown className="h-3.5 w-3.5" strokeWidth={2} />
          </>
        )}
      </button>

      {/* ═══════════════════════════════════════════════════════
          DESKTOP — scroll cinematográfico
      ═══════════════════════════════════════════════════════ */}
      <div ref={wrapperRef} className="hidden lg:block">
        <div
          ref={pinnedRef}
          className="relative h-screen w-full overflow-hidden bg-black"
          aria-label="Etapas del aprendizaje Montessori"
        >

          {/* Layer 1: Fotos de stage */}
          {stages.map((stage, i) => (
            <div
              key={`photo-${i}`}
              ref={(el) => { photoRefs.current[i] = el; }}
              className="absolute inset-0"
              style={{ opacity: i === 0 ? 1 : 0, willChange: "opacity, transform" }}
              aria-hidden="true"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${stage.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          ))}

          {/* Video final (opacity 0 → timeline lo controla) */}
          <video
            ref={finalVideoRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0 }}
            src={finalVideo}
            autoPlay muted loop playsInline
            aria-hidden="true"
          />

          {/* Velo oscuro sobre el video */}
          <div
            ref={finalVeilRef}
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.15) 100%)",
              opacity: 0,
            }}
            aria-hidden="true"
          />

          {/* Layer 2: Overlays de color por stage */}
          {stages.map((stage, i) => (
            <div
              key={`overlay-${i}`}
              ref={(el) => { overlayRefs.current[i] = el; }}
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${stage.bg}f0 0%, ${stage.bg}cc 30%, ${stage.bg}66 60%, transparent 80%)`,
                opacity: i === 0 ? 1 : 0,
                willChange: "opacity",
              }}
              aria-hidden="true"
            />
          ))}

          {/* Layer 3: Tipografía por stage */}
          {stages.map((stage, i) => (
            <div
              key={`text-${i}`}
              ref={(el) => { textRefs.current[i] = el; }}
              className="absolute inset-0 flex flex-col justify-end px-16 xl:px-24 2xl:px-32 pb-20 xl:pb-28"
              style={{ opacity: i === 0 ? 1 : 0, willChange: "opacity, transform" }}
              aria-hidden={i > 0}
            >
              <h2
                className="font-serif font-bold text-white leading-[0.9] mb-7"
                aria-label={stage.word.join(" ")}
              >
                {stage.word.map((w, wi) => (
                  <span key={wi} className="block text-[clamp(4rem,9vw,11rem)]">{w}</span>
                ))}
              </h2>
              <p className="font-sans text-base xl:text-lg text-white/55 leading-relaxed max-w-sm xl:max-w-md">
                {stage.description}
              </p>
            </div>
          ))}

          {/* Frase final en dos tiempos */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
            aria-label={finalPhrase}
          >
            <p
              ref={finalLine1Ref}
              className="font-serif font-bold text-white leading-[0.95] text-[clamp(3rem,6.5vw,8rem)]"
              style={{ opacity: 0, willChange: "opacity, transform" }}
            >
              {finalLine1}
            </p>
            <p
              ref={finalLine2Ref}
              className="font-serif font-bold text-white leading-[0.95] text-[clamp(3rem,6.5vw,8rem)]"
              style={{ opacity: 0, willChange: "opacity, transform" }}
            >
              {finalLine2}
            </p>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          MOBILE — tarjetas apiladas
      ═══════════════════════════════════════════════════════ */}
      <section
        className="montessori-mobile lg:hidden bg-deep-blue py-16 px-4 sm:px-6"
        aria-label="Etapas del aprendizaje Montessori"
      >
        <div className="mx-auto max-w-sm sm:max-w-md">
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-yellow/60 mb-3 text-center">
            Aprendizaje Montessori
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white text-center mb-10 leading-tight">
            Así aprenden<br />nuestros niños
          </h2>
          <div className="space-y-3">
            {stages.map((stage, i) => (
              <div
                key={i}
                className="montessori-card relative overflow-hidden rounded-2xl p-5 border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                  style={{ backgroundColor: stage.bg }}
                  aria-hidden="true"
                />
                <p className="font-sans text-[10px] uppercase tracking-widest text-brand-yellow/60 font-semibold mb-1 pl-3">
                  {stage.number}
                </p>
                <h3 className="font-serif text-xl font-bold text-white mb-2 pl-3">
                  {stage.word.join(" ")}
                </h3>
                <p className="font-sans text-sm text-white/55 leading-relaxed pl-3">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
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
