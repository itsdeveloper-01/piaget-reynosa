import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { NivelFaq } from "@/components/niveles/shared/NivelFaq";
import { NivelNextLevel } from "@/components/niveles/shared/NivelNextLevel";
import { AreaIcon } from "@/components/niveles/shared/icons";
import data from "@/content/niveles/comunidad-infantil.json";
import nivelesData from "@/content/niveles.json";

const ACC = {
  bg:      "bg-brand-green",
  text:    "text-deep-green",
  border:  "border-brand-green",
  iconCls: "text-deep-green",
  light:   "bg-brand-green/10",
  pill:    "bg-brand-green/10 text-deep-green border border-brand-green/30",
  btnCls:  "bg-brand-green text-white hover:bg-deep-green shadow-md shadow-brand-green/20",
};

const btnBase = cn(
  "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm",
  "transition-[transform,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
  "hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.97]"
);

export function ComunidadInfantilPage() {
  const bodyParagraphs = data.trabajanBody.split("\n\n");
  const nivelesDesc = nivelesData.niveles.find((n) => n.slug === data.slug)?.description ?? "";

  return (
    <main>

      {/* ══════════════════════════════════════════════════════════════
          HERO — editorial split: content left, image right
          Warm, open, institutional — no dark overlay
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative bg-warm-white overflow-hidden"
        aria-label="Comunidad Infantil"
      >
        {/* Decorative background circles */}
        <div
          className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-brand-green/[0.06] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 translate-y-1/3 -translate-x-1/3 rounded-full bg-brand-green/[0.05] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Hero grid */}
          <div className="grid lg:grid-cols-11 gap-8 lg:gap-12 items-center pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">

            {/* Left: content */}
            <div className="lg:col-span-5 hero-text-enter">
              <div
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-6 text-white tracking-wide",
                  ACC.bg
                )}
              >
                {data.ageRange}
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-5">
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
                    alt="Niños explorando en el ambiente Montessori de Comunidad Infantil"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-green via-brand-green/80 to-brand-green/40" />
                )}
                {/* Left edge fade to match warm-white background */}
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
          Warm vertical bar subblocks instead of border-top cards
      ══════════════════════════════════════════════════════════════ */}
      <SectionContainer id="distingue" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Image — left on desktop */}
          <div className="relative h-80 sm:h-[500px] rounded-3xl overflow-hidden order-2 lg:order-1">
            {data.distingueImage ? (
              <Image
                src={data.distingueImage}
                alt="Ambiente Montessori preparado en Comunidad Infantil"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-deep-green to-brand-green/50" />
            )}
          </div>

          {/* Content — right on desktop */}
          <div className="order-1 lg:order-2">
            <p className="font-sans text-xs uppercase tracking-widest text-deep-green font-semibold mb-3">
              {data.displayName}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-8">
              {data.distingueHeading}
            </h2>
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
          Sticky intro left + vertical icon list right
      ══════════════════════════════════════════════════════════════ */}
      <SectionContainer id="areas" className="bg-warm-white">
        <div className="grid lg:grid-cols-[1fr_1.7fr] gap-14 lg:gap-20 items-start">

          {/* Left: intro + valores */}
          <div className="lg:sticky lg:top-28">
            <p className="font-sans text-xs uppercase tracking-widest text-brand-blue font-semibold mb-3">
              Programa académico
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-8">
              {data.areasTitle}
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.valoresItems?.map((v, i) => (
                <span
                  key={i}
                  className={cn("px-3 py-1.5 rounded-full text-xs font-semibold", ACC.pill)}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Right: areas as vertical editorial list */}
          <div className="divide-y divide-black/[0.05]">
            {data.areasItems.map((item, i) => (
              <div key={i} className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
                <div
                  className={cn(
                    "flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center",
                    ACC.light
                  )}
                >
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
          ¿QUÉ LOGRARÁ TU PEQUEÑO/A? — image + content
      ══════════════════════════════════════════════════════════════ */}
      <SectionContainer id="logra" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content — left */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-brand-blue font-semibold mb-3">
              Académico
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-6">
              {data.trabajanHeading}
            </h2>
            <div className="space-y-4 mb-8">
              {bodyParagraphs.map((p, i) => (
                <p key={i} className="font-sans text-base text-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* etapaItems como grid compacto de temas */}
            <div className="mt-2 mb-8">
              <p className="font-sans text-xs uppercase tracking-widest text-muted font-semibold mb-4">
                En esta etapa trabajan
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {data.etapaItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span
                      className={cn("h-1.5 w-1.5 rounded-full shrink-0", ACC.bg)}
                      aria-hidden="true"
                    />
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

          {/* Image — right */}
          <div className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden">
            {data.trabajanImage ? (
              <Image
                src={data.trabajanImage}
                alt="Niños trabajando con materiales Montessori"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-deep-green to-brand-green/50" />
            )}
          </div>

        </div>
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════
          ORGULLO PIAGET — 3 social proof items
          Único uso del patrón border-t-2 en esta página
      ══════════════════════════════════════════════════════════════ */}
      {data.orgulloItems && data.orgulloItems.length > 0 && (
        <SectionContainer id="orgullo" className="bg-warm-white">
          <div className="mb-12">
            <p className="font-sans text-xs uppercase tracking-widest text-deep-green font-semibold mb-2">
              Nuestra institución
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Orgullo Piaget
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
            {data.orgulloItems.map((item, i) => (
              <div key={i} className="border-t-2 border-brand-green pt-6">
                <div
                  className={cn(
                    "h-10 w-10 rounded-xl flex items-center justify-center mb-5",
                    ACC.light
                  )}
                >
                  <AreaIcon emoji={item.icon} className={ACC.iconCls} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-ink mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* ══════════════════════════════════════════════════════════════
          TALLERES + HORARIOS — combined compact section
      ══════════════════════════════════════════════════════════════ */}
      <SectionContainer id="talleres" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Talleres */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-deep-green font-semibold mb-3">
              Extracurricular
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink leading-tight mb-8">
              Talleres
            </h2>
            <div className="space-y-6">
              {data.talleres.map((t, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className={cn(
                      "h-10 w-10 rounded-xl flex items-center justify-center shrink-0",
                      ACC.light
                    )}
                  >
                    <AreaIcon emoji={t.icon} className={cn("h-4 w-4", ACC.iconCls)} />
                  </div>
                  <div>
                    <p className="font-sans text-base font-semibold text-ink">
                      {t.name}
                    </p>
                    <p className="font-sans text-sm text-muted leading-relaxed mt-0.5">
                      {t.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Horarios */}
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
                <div
                  key={i}
                  className="flex items-start gap-4 border-t-2 border-brand-green pt-5"
                >
                  <Clock
                    className={cn("h-4 w-4 shrink-0 mt-0.5", ACC.text)}
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="font-sans text-xs font-semibold text-muted uppercase tracking-wide">
                      {h.dia}
                    </p>
                    <p className={cn("font-sans text-base font-bold mt-0.5", ACC.text)}>
                      {h.horario}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════
          FAQ — Client component (único useState en la página)
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
          CTA FINAL — deep-blue, igual que homepage CTAFinal
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
          <div
            className="h-0.5 w-8 bg-brand-green rounded-full mx-auto mb-8"
            aria-hidden="true"
          />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#contacto"
              className={cn(
                "inline-flex items-center justify-center gap-2 font-semibold text-sm",
                "h-12 px-7 rounded-xl",
                "bg-brand-green text-white shadow-lg shadow-brand-green/20",
                "hover:bg-deep-green hover:shadow-xl",
                "active:scale-[0.97]",
                "transition-[background-color,box-shadow,transform] duration-200"
              )}
            >
              Solicitar información
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
          NEXT LEVEL — Casa de Niños
      ══════════════════════════════════════════════════════════════ */}
      <NivelNextLevel currentSlug={data.slug} />

    </main>
  );
}
