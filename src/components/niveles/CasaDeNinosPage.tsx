import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { NivelFaq } from "@/components/niveles/shared/NivelFaq";
import { NivelNextLevel } from "@/components/niveles/shared/NivelNextLevel";
import { AreaIcon } from "@/components/niveles/shared/icons";
import data from "@/content/niveles/casa-de-ninos.json";
import nivelesData from "@/content/niveles.json";

const ACC = {
  bg:      "bg-brand-yellow",
  text:    "text-[#7A6200]",
  border:  "border-brand-yellow",
  iconCls: "text-[#7A6200]",
  light:   "bg-brand-yellow/15",
  pill:    "bg-brand-yellow/15 text-[#7A6200] border border-brand-yellow/40",
  btnCls:  "bg-brand-yellow text-ink hover:bg-[#e8c800] shadow-md shadow-brand-yellow/20",
};

const btnBase = cn(
  "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm",
  "transition-[transform,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
  "hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.97]"
);

export function CasaDeNinosPage() {
  const nivelesDesc = nivelesData.niveles.find((n) => n.slug === data.slug)?.description ?? "";

  return (
    <main>

      {/* ══════════════════════════════════════════════════════════════
          HERO — editorial split: content left, image right
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative bg-warm-white overflow-hidden"
        aria-label="Casa de Niños"
      >
        <div
          className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-brand-yellow/[0.08] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 translate-y-1/3 -translate-x-1/3 rounded-full bg-brand-yellow/[0.06] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Hero grid */}
          <div className="grid lg:grid-cols-11 gap-8 lg:gap-12 items-center pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">

            {/* Left: content */}
            <div className="lg:col-span-5 hero-text-enter">
              <div
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-wide",
                  ACC.bg, ACC.text
                )}
              >
                {data.ageRange}
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-4">
                {data.displayName}
              </h1>
              <p className="font-sans text-lg text-muted leading-relaxed mb-4 max-w-lg">
                {data.subtitle}
              </p>
              {nivelesDesc && (
                <p className="font-sans text-base text-muted/80 leading-relaxed mb-10 max-w-lg">
                  {nivelesDesc}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                <a href={data.ctaLink} className={cn(btnBase, ACC.btnCls)}>
                  {data.ctaText}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/#niveles"
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm",
                    "border border-black/10 text-muted",
                    "transition-[border-color,color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                    "hover:text-ink hover:border-black/20 active:scale-[0.97]"
                  )}
                >
                  Ver todos los niveles
                </Link>
              </div>
            </div>

            {/* Right: image */}
            <div className="lg:col-span-6 lg:-mr-8 xl:-mr-14">
              <div className="relative h-72 sm:h-96 lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl shadow-ink/10">
                {data.heroImage ? (
                  <Image
                    src={data.heroImage}
                    alt={data.displayName}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5a4000] via-[#7A6200]/90 to-brand-yellow/40" />
                )}
                <div
                  className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-warm-white to-transparent hidden lg:block"
                  aria-hidden="true"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NOS DISTINGUE — image left, content right
      ══════════════════════════════════════════════════════════════ */}
      <SectionContainer id="distingue" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Image */}
          <div className="relative h-80 sm:h-[500px] rounded-3xl overflow-hidden order-2 lg:order-1">
            {data.distingueImage ? (
              <Image
                src={data.distingueImage}
                alt={data.distingueHeading}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#5a4000] to-brand-yellow/40" />
            )}
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="font-sans text-xs uppercase tracking-widest text-[#7A6200] font-semibold mb-3">
              {data.displayName}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-6">
              {data.distingueHeading}
            </h2>
            {data.distingueBody && (
              <p className="font-sans text-base text-muted leading-relaxed mb-8">
                {data.distingueBody}
              </p>
            )}
            <div className="space-y-7">
              {data.distingueSubblocks.map((block, i) => (
                <div key={i} className="flex gap-5">
                  <div
                    className={cn("w-0.5 rounded-full shrink-0 self-stretch min-h-[3rem]", ACC.bg)}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ink mb-1.5 leading-snug">
                      {block.title}
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed">
                      {block.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a href={data.distingueCtaLink} className={cn("mt-10", btnBase, ACC.btnCls)}>
              {data.distingueCtaText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════
          ÁREAS DE DESARROLLO — editorial 2-col
      ══════════════════════════════════════════════════════════════ */}
      <SectionContainer id="areas" className="bg-warm-white">
        <div className="grid lg:grid-cols-[1fr_1.7fr] gap-14 lg:gap-20 items-start">

          {/* Left: heading + valores */}
          <div className="lg:sticky lg:top-28">
            <p className="font-sans text-xs uppercase tracking-widest text-brand-blue font-semibold mb-3">
              Programa académico
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-8">
              {data.areasTitle}
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.valoresItems?.map((v, i) => (
                <span key={i} className={cn("px-3 py-1.5 rounded-full text-xs font-semibold", ACC.pill)}>
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Right: areas vertical list */}
          <div className="divide-y divide-black/[0.05]">
            {data.areasItems.map((item, i) => (
              <div key={i} className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
                <div className={cn("flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center", ACC.light)}>
                  <AreaIcon emoji={item.icon} className={ACC.iconCls} />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-ink mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════
          MULTIGRADO + PROGRAMA BILINGÜE — 2-col, exclusivo CDN
      ══════════════════════════════════════════════════════════════ */}
      {data.multigradoTitle && (
        <SectionContainer id="multigrado" className="bg-white">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Multigrado */}
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-deep-green font-semibold mb-3">
                Metodología
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-6">
                {data.multigradoTitle}
              </h2>
              <p className="font-sans text-base text-muted leading-relaxed">
                {data.multigradoBody}
              </p>
            </div>

            {/* Bilingüe */}
            {data.bilingueTitle && data.bilingueItems && (
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-brand-blue font-semibold mb-3">
                  Idiomas
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-8">
                  {data.bilingueTitle}
                </h2>
                <div className="divide-y divide-black/[0.05]">
                  {data.bilingueItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                      <div className={cn("flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center", ACC.light)}>
                        <AreaIcon emoji={item.icon} className={cn("h-4 w-4", ACC.iconCls)} />
                      </div>
                      <div>
                        <h3 className="font-serif text-sm font-semibold text-ink mb-0.5 leading-snug">
                          {item.title}
                        </h3>
                        <p className="font-sans text-sm text-muted leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {data.programasItems && data.programasItems.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-black/[0.06]">
                    <p className="font-sans text-xs uppercase tracking-widest font-semibold text-deep-green mb-4">
                      {data.programasTitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {data.programasItems.map((p, i) => (
                        <span key={i} className={cn("px-3 py-1.5 rounded-lg text-xs font-semibold", ACC.pill)}>
                          {p.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>
        </SectionContainer>
      )}

      {/* ══════════════════════════════════════════════════════════════
          DESARROLLO ACADÉMICO — content left, image right
      ══════════════════════════════════════════════════════════════ */}
      <SectionContainer id="academico" className="bg-warm-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-brand-blue font-semibold mb-3">
              Académico
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-6">
              {data.trabajanHeading}
            </h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              {data.trabajanBody}
            </p>
            {data.trabajanBullets && data.trabajanBullets.length > 0 && (
              <ul className="space-y-2.5 mb-8">
                {data.trabajanBullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={cn("mt-[7px] h-1.5 w-1.5 rounded-full shrink-0", ACC.bg)} aria-hidden="true" />
                    <span className="font-sans text-sm text-muted leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {/* etapaItems compact grid */}
            <div className="mt-2 mb-8">
              <p className="font-sans text-xs uppercase tracking-widest text-muted font-semibold mb-4">
                {data.etapaTitle}
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {data.etapaItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", ACC.bg)} aria-hidden="true" />
                    <span className="font-sans text-sm text-ink">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <a href={data.trabajanCtaLink} className={cn(btnBase, ACC.btnCls)}>
              {data.trabajanCtaText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Image */}
          <div className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden">
            {data.trabajanImage ? (
              <Image
                src={data.trabajanImage}
                alt={data.trabajanHeading}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#5a4000] to-brand-yellow/40" />
            )}
          </div>

        </div>
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════
          TALLERES + HORARIOS
      ══════════════════════════════════════════════════════════════ */}
      <SectionContainer id="talleres" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Talleres — 7 items, 2-col grid */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-deep-green font-semibold mb-3">
              Extracurricular
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink leading-tight mb-8">
              Talleres
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              {data.talleres.map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center shrink-0", ACC.light)}>
                    <AreaIcon emoji={t.icon} className={cn("h-4 w-4", ACC.iconCls)} />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-ink">{t.name}</p>
                    <p className="font-sans text-xs text-muted leading-relaxed mt-0.5">{t.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Horarios — 4 items */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-brand-blue font-semibold mb-3">
              Organización
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink leading-tight mb-2">
              Horarios
            </h2>
            {data.horariosSubtitle && (
              <p className={cn("font-sans text-sm font-semibold mb-8", ACC.text)}>
                {data.horariosSubtitle}
              </p>
            )}
            <div className="space-y-5">
              {data.horarios.map((h, i) => (
                <div key={i} className="flex items-start gap-4 border-t-2 border-brand-yellow pt-5">
                  <Clock className={cn("h-4 w-4 shrink-0 mt-0.5", ACC.text)} strokeWidth={1.5} />
                  <div>
                    <p className="font-sans text-xs font-semibold text-muted uppercase tracking-wide">{h.dia}</p>
                    <p className={cn("font-sans text-base font-bold mt-0.5", ACC.text)}>{h.horario}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════ */}
      <SectionContainer id="faq" className="bg-warm-white">
        <div className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-widest text-deep-green font-semibold mb-2">
            Dudas frecuentes
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-10">
            Preguntas frecuentes
          </h2>
          <NivelFaq items={data.faq} />
        </div>
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════
          CTA FINAL — deep-blue
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="contacto-nivel"
        aria-label="Contáctanos"
        className="relative bg-deep-blue overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-blue/20" />
          <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-brand-blue/10" />
        </div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 mx-auto max-w-xl text-center">
          <div className="h-0.5 w-8 bg-brand-yellow rounded-full mx-auto mb-8" aria-hidden="true" />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#contacto"
              className={cn(
                "inline-flex items-center justify-center gap-2 font-semibold text-sm",
                "h-12 px-7 rounded-xl",
                "bg-brand-yellow text-ink shadow-lg shadow-brand-yellow/20",
                "hover:bg-[#e8c800] hover:shadow-xl",
                "active:scale-[0.97]",
                "transition-[background-color,box-shadow,transform] duration-200"
              )}
            >
              {data.ctaText}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/#niveles"
              className={cn(
                "inline-flex items-center justify-center gap-2 font-semibold text-sm",
                "h-12 px-7 rounded-xl",
                "border border-white/20 text-white/80",
                "hover:bg-white/10 hover:text-white",
                "active:scale-[0.97]",
                "transition-[background-color,color,transform] duration-200"
              )}
            >
              Ver todos los niveles
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NEXT LEVEL — Primaria
      ══════════════════════════════════════════════════════════════ */}
      <NivelNextLevel currentSlug={data.slug} />

    </main>
  );
}
