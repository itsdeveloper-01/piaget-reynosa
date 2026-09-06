"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import stagesData from "@/content/montessori-stages.json";

gsap.registerPlugin(ScrollTrigger);

const stages     = stagesData.stages;
const finalVideo = stagesData.final_video;
const finalPhrase = stagesData.final_phrase;

// Split phrase at "through" for the two-beat animation
const splitIdx  = finalPhrase.indexOf(" through ");
const finalLine1 = splitIdx > -1 ? finalPhrase.slice(0, splitIdx) : finalPhrase;
const finalLine2 = splitIdx > -1 ? finalPhrase.slice(splitIdx + 1) : "";

export function MontessoriScroll() {
  const componentRef = useRef<HTMLDivElement>(null);
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const pinnedRef    = useRef<HTMLDivElement>(null);

  // Layer 1 — stage photos
  const photoRefs   = useRef<(HTMLDivElement | null)[]>([]);
  // Layer 2 — stage color overlays
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Layer 3 — stage typography
  const textRefs    = useRef<(HTMLDivElement | null)[]>([]);

  // Final slide — video + its dark veil + split phrase
  const finalVideoRef   = useRef<HTMLVideoElement>(null);
  const finalVeilRef    = useRef<HTMLDivElement>(null);
  const finalLine1Ref   = useRef<HTMLParagraphElement>(null);
  const finalLine2Ref   = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── Desktop: cinematic pinned timeline ──────────────────────
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

        // Hold on stage 01
        tl.to({}, { duration: 1 });

        // Transitions: stage i → stage i+1
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
            .to({}, { duration: 1 });
        }

        // Final transition: stage 05 → video + split phrase
        const last = stages.length - 1;
        tl
          // Stage 05 text out
          .to(textRefs.current[last], { opacity: 0, yPercent: -6, duration: 0.4, ease: "power2.in" })
          // build.webp + its overlay fade out; video + veil crossfade in simultaneously
          .to(photoRefs.current[last],   { opacity: 0, duration: 0.75 }, "<0.05")
          .to(overlayRefs.current[last], { opacity: 0, duration: 0.75 }, "<")
          .to(finalVideoRef.current,     { opacity: 1, duration: 0.75, ease: "power2.out" }, "<")
          .to(finalVeilRef.current,      { opacity: 1, duration: 0.75, ease: "power2.out" }, "<")
          // "View the world" fades in first
          .fromTo(
            finalLine1Ref.current,
            { opacity: 0, yPercent: 10 },
            { opacity: 1, yPercent: 0, duration: 0.5, ease: "power2.out" },
            "<0.5"
          )
          // "through their eyes" follows
          .fromTo(
            finalLine2Ref.current,
            { opacity: 0, yPercent: 10 },
            { opacity: 1, yPercent: 0, duration: 0.5, ease: "power2.out" },
            "<0.4"
          )
          // Hold on final
          .to({}, { duration: 2 });
      });

      // ── Mobile: stacked cards ────────────────────────────────────
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

  return (
    <div ref={componentRef}>

      {/* ═══════════════════════════════════════════════════════
          DESKTOP — pinned cinematic scroll
          Sequence: 01 observe → 02 explore → 03 discover →
                    04 connect → 05 build → VIDEO + PHRASE
      ═══════════════════════════════════════════════════════ */}
      <div ref={wrapperRef} className="hidden lg:block">
        <div
          ref={pinnedRef}
          className="relative h-screen w-full overflow-hidden bg-black"
          aria-label="Etapas del aprendizaje Montessori"
        >

          {/* ── Layer 1: Stage photos ───────────────────────────── */}
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

          {/* ── Final: video (opacity 0 → controlled by timeline) ── */}
          <video
            ref={finalVideoRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0 }}
            src={finalVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />

          {/* ── Final: dark veil over video for text readability ─── */}
          <div
            ref={finalVeilRef}
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.15) 100%)",
              opacity: 0,
            }}
            aria-hidden="true"
          />

          {/* ── Layer 2: Stage color overlays ───────────────────── */}
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

          {/* ── Layer 3: Stage typography ───────────────────────── */}
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

          {/* ── Final phrase: two-beat entrance over video ──────── */}
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
          MOBILE — stacked cards + final phrase
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
