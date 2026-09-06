"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight, ChevronDown, ArrowRight, Clock,
  Eye, MessageCircle, Music, Sprout, Globe, Languages,
  Hash, Palette, Paintbrush, FlaskConical, Users, Activity,
  Monitor, Search, BookOpen, BookMarked, Lightbulb, Theater,
  Briefcase, GraduationCap, Heart, Handshake, Star, Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "@/components/ui/SectionContainer";

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface SubBlock  { title: string; body: string }
interface AreaItem  { icon: string; title: string; body: string }
interface Taller    { icon: string; name: string; description: string }
interface Horario   { dia: string; horario: string }
interface FaqItem   { question: string; answer: string }
interface ValorCard { icon: string; title: string; body: string }

export interface NivelData {
  slug: string;
  displayName: string;
  subtitle: string;
  ageRange: string;
  accentColor: "green" | "yellow" | "blue" | "deepBlue" | "red";
  heroImage?: string;
  ctaText: string;
  ctaLink: string;
  distingueHeading: string;
  distingueBody?: string;
  distingueSubblocks: SubBlock[];
  distingueImage?: string;
  distingueCtaText: string;
  distingueCtaLink: string;
  areasTitle: string;
  areasSubtitle?: string;
  areasItems: AreaItem[];
  programasTitle?: string;
  programasItems?: { name: string }[];
  valoresItems?: string[];
  valoresTitle?: string;
  valoresSubtitle?: string;
  valoresCards?: ValorCard[];
  valoresFooter?: string;
  multigradoTitle?: string;
  multigradoBody?: string;
  bilingueTitle?: string;
  bilingueItems?: AreaItem[];
  etapaTitle: string;
  etapaSubtitle?: string;
  etapaFooter?: string;
  etapaItems: AreaItem[];
  trabajanHeading: string;
  trabajanBody: string;
  trabajanBullets?: string[];
  trabajanImage?: string;
  trabajanCtaText: string;
  trabajanCtaLink: string;
  trabajanFooter?: string;
  orgulloItems?: AreaItem[];
  interactTitle?: string;
  interactBody?: string;
  interactItems?: AreaItem[];
  talleres: Taller[];
  horariosSubtitle?: string;
  horarios: Horario[];
  faq: FaqItem[];
}

/* ─── Emoji → Lucide icon map ───────────────────────────────────────────── */

const ICON_MAP: Record<string, LucideIcon> = {
  "👐": Handshake,
  "👀": Eye,
  "🗣": MessageCircle,
  "🎵": Music,
  "🎶": Music,
  "🌱": Sprout,
  "🌎": Globe,
  "🌍": Globe,
  "🔤": Languages,
  "🌐": Languages,
  "🔢": Hash,
  "🎨": Palette,
  "🖌": Paintbrush,
  "🧹": Sparkles,
  "🔬": FlaskConical,
  "🤝": Users,
  "🏃": Activity,
  "🤸": Activity,
  "💻": Monitor,
  "🔎": Search,
  "📚": BookOpen,
  "📘": BookMarked,
  "📗": BookMarked,
  "📙": BookMarked,
  "📕": BookMarked,
  "💡": Lightbulb,
  "🎭": Theater,
  "💼": Briefcase,
  "🎓": GraduationCap,
  "❤️": Heart,
  "🌈": Sparkles,
  "🎤": MessageCircle,
  "🧑‍💼": Briefcase,
  "🎉": Star,
};

function AreaIcon({ emoji, className }: { emoji: string; className?: string }) {
  const Icon = ICON_MAP[emoji] ?? Star;
  return <Icon className={cn("h-5 w-5 shrink-0", className)} strokeWidth={1.5} />;
}

/* ─── Accent tokens ──────────────────────────────────────────────────────── */

const ACCENT = {
  green: {
    bg:        "bg-brand-green",
    text:      "text-deep-green",
    borderTop: "border-t-2 border-brand-green",
    light:     "bg-brand-green/10",
    pill:      "bg-brand-green/10 text-deep-green border border-brand-green/30",
    btnCls:    "bg-brand-green text-white hover:bg-deep-green shadow-brand-green/20",
    label:     "text-deep-green",
    dot:       "bg-brand-green",
    iconCls:   "text-deep-green",
  },
  yellow: {
    bg:        "bg-brand-yellow",
    text:      "text-[#7A6200]",
    borderTop: "border-t-2 border-brand-yellow",
    light:     "bg-brand-yellow/15",
    pill:      "bg-brand-yellow/15 text-[#7A6200] border border-brand-yellow/40",
    btnCls:    "bg-brand-yellow text-ink hover:bg-[#e8c800] shadow-brand-yellow/20",
    label:     "text-[#7A6200]",
    dot:       "bg-brand-yellow",
    iconCls:   "text-[#7A6200]",
  },
  blue: {
    bg:        "bg-brand-blue",
    text:      "text-brand-blue",
    borderTop: "border-t-2 border-brand-blue",
    light:     "bg-brand-blue/10",
    pill:      "bg-brand-blue/10 text-brand-blue border border-brand-blue/30",
    btnCls:    "bg-deep-blue text-white hover:bg-brand-blue shadow-deep-blue/20",
    label:     "text-brand-blue",
    dot:       "bg-brand-blue",
    iconCls:   "text-brand-blue",
  },
  deepBlue: {
    bg:        "bg-deep-blue",
    text:      "text-deep-blue",
    borderTop: "border-t-2 border-deep-blue",
    light:     "bg-deep-blue/10",
    pill:      "bg-deep-blue/10 text-deep-blue border border-deep-blue/30",
    btnCls:    "bg-deep-blue text-white hover:bg-ink shadow-deep-blue/20",
    label:     "text-deep-blue",
    dot:       "bg-deep-blue",
    iconCls:   "text-deep-blue",
  },
  red: {
    bg:        "bg-brand-red",
    text:      "text-brand-red",
    borderTop: "border-t-2 border-brand-red",
    light:     "bg-brand-red/10",
    pill:      "bg-brand-red/10 text-brand-red border border-brand-red/30",
    btnCls:    "bg-brand-red text-white hover:bg-[#c01020] shadow-brand-red/20",
    label:     "text-brand-red",
    dot:       "bg-brand-red",
    iconCls:   "text-brand-red",
  },
};

const HERO_GRADIENT: Record<string, string> = {
  green:   "from-deep-green via-deep-green/90 to-brand-green/50",
  yellow:  "from-[#5a4000] via-[#7A6200]/90 to-[#b89a00]/40",
  blue:    "from-deep-blue via-deep-blue/90 to-brand-blue/50",
  deepBlue:"from-ink via-deep-blue/95 to-deep-blue/80",
  red:     "from-[#700010] via-brand-red/80 to-brand-red/40",
};

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function SectionLabel({ children, color = "text-deep-green" }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={cn("font-sans text-xs uppercase tracking-widest font-semibold mb-2", color)}>
      {children}
    </p>
  );
}

function SectionHeading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight", className)}>
      {children}
    </h2>
  );
}

function Bullet({ label, dot }: { label: string; dot: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className={cn("mt-[7px] h-1.5 w-1.5 rounded-full shrink-0", dot)} aria-hidden="true" />
      <span className="font-sans text-sm text-muted leading-relaxed">{label}</span>
    </li>
  );
}

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-black/[0.06]">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className={cn(
              "w-full flex items-center justify-between py-5 text-left group",
              "transition-colors duration-150"
            )}
            aria-expanded={open === i}
          >
            <span className="font-sans text-sm font-medium text-ink pr-4 group-hover:text-brand-blue transition-colors duration-150">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-muted shrink-0",
                "transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                open === i && "rotate-180"
              )}
            />
          </button>
          {open === i && (
            <p className="pb-5 font-sans text-sm text-muted leading-relaxed">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */

export function NivelPageLayout({ data }: { data: NivelData }) {
  const acc = ACCENT[data.accentColor];
  const heroGrad = HERO_GRADIENT[data.accentColor];

  const btnBase = cn(
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm shadow-md",
    "transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
    "hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.97]"
  );

  return (
    <main>

      {/* ══════════════════════════════════════════════════════════════════
          HERO — breadcrumb lives here, z-20 above overlay, no separate strip
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[480px] sm:min-h-[560px] flex flex-col overflow-hidden"
        aria-label={`Nivel ${data.displayName}`}
      >
        {/* Background */}
        {data.heroImage ? (
          <Image src={data.heroImage} alt={data.displayName} fill className="object-cover" priority />
        ) : (
          <div className={cn("absolute inset-0 bg-gradient-to-br", heroGrad)} aria-hidden="true">
            <div className="absolute top-[6%] right-[5%] w-72 h-72 rounded-full bg-white/[0.04]" />
            <div className="absolute bottom-[10%] left-[4%] w-96 h-96 rounded-full bg-white/[0.03]" />
            <div className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-20 pointer-events-none select-none opacity-[0.05]">
              <span className="font-serif font-bold text-white leading-none text-[200px] sm:text-[280px] lg:text-[360px]">
                {data.ageRange.split("")[0]}
              </span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" aria-hidden="true" />

        {/* ── Breadcrumb — z-20, first child, sits at top of hero ────── */}
        <nav
          aria-label="Ruta de navegación"
          className="relative z-20 w-full px-4 sm:px-6 lg:px-8 pt-5"
        >
          <ol className="mx-auto max-w-7xl flex items-center gap-1.5">
            <li>
              <Link
                href="/"
                className="font-sans text-xs text-white/50 hover:text-white transition-colors duration-150 font-medium"
              >
                Instituto Piaget
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3 w-3 text-white/30" />
            </li>
            <li>
              <Link
                href="/#niveles"
                className="font-sans text-xs text-white/50 hover:text-white transition-colors duration-150"
              >
                Niveles
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3 w-3 text-white/30" />
            </li>
            <li>
              <span className="font-sans text-xs text-white/80 font-semibold">{data.displayName}</span>
            </li>
          </ol>
        </nav>

        {/* Spacer — pushes hero content to bottom */}
        <div className="flex-1" />

        {/* ── Hero content — bottom of section ───────────────────────── */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 max-w-7xl mx-auto">
          <div className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-5 text-white", acc.bg)}>
            {data.ageRange}
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl mb-4">
            {data.displayName}
          </h1>
          <p className="font-sans text-base text-white/70 max-w-xl mb-8 leading-relaxed">
            {data.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={data.ctaLink}
              className={cn(btnBase, acc.btnCls)}
            >
              {data.ctaText}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/#niveles"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm",
                "bg-white/10 text-white border border-white/20",
                "transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                "hover:bg-white/20 active:scale-[0.97]"
              )}
            >
              Ver todos los niveles
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          NOS DISTINGUE
      ══════════════════════════════════════════════════════════════════ */}
      <SectionContainer id="distingue" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <SectionLabel color={acc.label}>{data.displayName}</SectionLabel>
            <SectionHeading className="mb-5">{data.distingueHeading}</SectionHeading>
            {data.distingueBody && (
              <p className="font-sans text-base text-muted leading-relaxed mb-8">{data.distingueBody}</p>
            )}
            <div className="grid sm:grid-cols-2 gap-8 mt-6">
              {data.distingueSubblocks.map((block, i) => (
                <div key={i} className={cn("pt-6", acc.borderTop)}>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2 leading-snug">{block.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">{block.body}</p>
                </div>
              ))}
            </div>
            <a
              href={data.distingueCtaLink}
              className={cn("mt-10", btnBase, acc.btnCls)}
            >
              {data.distingueCtaText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Image / gradient placeholder */}
          <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden">
            {data.distingueImage ? (
              <Image src={data.distingueImage} alt={data.distingueHeading} fill className="object-cover" />
            ) : (
              <>
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", heroGrad)} />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="font-serif text-white text-lg font-bold leading-snug">{data.displayName}</p>
                    <p className="font-sans text-white/60 text-xs mt-0.5">{data.ageRange}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════════
          ÁREAS DE DESARROLLO — pillar style matching PropuestaEducativa
      ══════════════════════════════════════════════════════════════════ */}
      <SectionContainer id="areas" className="bg-warm-white">
        <div className="mb-12">
          <SectionLabel color="text-brand-blue">Programa académico</SectionLabel>
          <SectionHeading>{data.areasTitle}</SectionHeading>
          {data.areasSubtitle && (
            <p className="font-sans text-base text-muted mt-3 max-w-2xl leading-relaxed">{data.areasSubtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {data.areasItems.map((item, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-3">
                <AreaIcon emoji={item.icon} className={acc.iconCls} />
                <span className="font-mono text-[11px] text-muted/50 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2 leading-snug">{item.title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {data.programasItems && data.programasItems.length > 0 && (
          <div className="mt-12 pt-10 border-t border-black/[0.06]">
            <p className="font-sans text-xs uppercase tracking-widest font-semibold text-deep-green mb-4">
              {data.programasTitle || "Programas Académicos"}
            </p>
            <div className="flex flex-wrap gap-2">
              {data.programasItems.map((p, i) => (
                <span key={i} className={cn("px-3 py-1.5 rounded-lg text-xs font-semibold", acc.pill)}>
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════════
          VALORES
      ══════════════════════════════════════════════════════════════════ */}
      <SectionContainer id="valores" className="bg-white">
        <SectionLabel color="text-deep-green">{data.valoresTitle || "Formación"}</SectionLabel>
        <SectionHeading className="mb-3">Valores</SectionHeading>
        {data.valoresSubtitle && (
          <p className="font-sans text-base text-muted mb-8 max-w-2xl leading-relaxed">{data.valoresSubtitle}</p>
        )}

        {data.valoresItems && data.valoresItems.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8">
            {data.valoresItems.map((v, i) => (
              <span key={i} className={cn("px-4 py-2 rounded-full text-sm font-medium", acc.pill)}>
                {v}
              </span>
            ))}
          </div>
        )}

        {data.valoresCards && data.valoresCards.length > 0 && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-8">
              {data.valoresCards.map((card, i) => (
                <div key={i} className={cn("pt-6", acc.borderTop)}>
                  <div className="mb-3">
                    {/* emoji kept for valor cards since they're decorative/expressive */}
                    <span className="text-2xl">{card.icon}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-2 leading-snug">{card.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
            {data.valoresFooter && (
              <p className="font-sans text-sm text-muted italic mt-10 max-w-2xl leading-relaxed">{data.valoresFooter}</p>
            )}
          </>
        )}
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════════
          MULTIGRADO + BILINGÜE  (Casa de Niños)
      ══════════════════════════════════════════════════════════════════ */}
      {data.multigradoTitle && (
        <SectionContainer id="multigrado" className="bg-warm-white">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionLabel color="text-deep-green">Metodología</SectionLabel>
              <SectionHeading className="mb-5">{data.multigradoTitle}</SectionHeading>
              <p className="font-sans text-base text-muted leading-relaxed">{data.multigradoBody}</p>
            </div>
            {data.bilingueTitle && data.bilingueItems && (
              <div>
                <SectionLabel color="text-brand-blue">Idiomas</SectionLabel>
                <SectionHeading className="mb-8">{data.bilingueTitle}</SectionHeading>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                  {data.bilingueItems.map((item, i) => (
                    <div key={i} className={cn("pt-6", acc.borderTop)}>
                      <div className="flex items-center gap-2 mb-2">
                        <AreaIcon emoji={item.icon} className={acc.iconCls} />
                        <h3 className="font-serif text-base font-semibold text-ink leading-snug">{item.title}</h3>
                      </div>
                      <p className="font-sans text-sm text-muted leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </SectionContainer>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          EN ESTA ETAPA / PROYECTOS ESPECIALES
      ══════════════════════════════════════════════════════════════════ */}
      <SectionContainer id="etapa" className={data.multigradoTitle ? "bg-white" : "bg-warm-white"}>
        <div className="mb-12">
          <SectionLabel color="text-deep-green">Actividades</SectionLabel>
          <SectionHeading>{data.etapaTitle}</SectionHeading>
          {data.etapaSubtitle && (
            <p className="font-sans text-base text-muted mt-3 max-w-2xl leading-relaxed">{data.etapaSubtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {data.etapaItems.map((item, i) => (
            <div key={i} className={cn("pt-6", acc.borderTop)}>
              <div className="flex items-center gap-2 mb-3">
                <AreaIcon emoji={item.icon} className={acc.iconCls} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2 leading-snug">{item.title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        {data.etapaFooter && (
          <p className="font-sans text-sm text-muted italic mt-10 max-w-3xl leading-relaxed border-l-2 pl-5 border-brand-gray">
            {data.etapaFooter}
          </p>
        )}
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════════
          DESARROLLO ACADÉMICO
      ══════════════════════════════════════════════════════════════════ */}
      <SectionContainer id="academico" className={data.multigradoTitle ? "bg-warm-white" : "bg-white"}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="lg:sticky lg:top-24">
            <SectionLabel color="text-brand-blue">Académico</SectionLabel>
            <SectionHeading className="mb-5">{data.trabajanHeading}</SectionHeading>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">{data.trabajanBody}</p>
            {data.trabajanBullets && data.trabajanBullets.length > 0 && (
              <ul className="space-y-3 mb-6">
                {data.trabajanBullets.map((b, i) => <Bullet key={i} label={b} dot={acc.dot} />)}
              </ul>
            )}
            {data.trabajanFooter && (
              <p className="font-sans text-sm font-semibold text-ink italic mb-6">{data.trabajanFooter}</p>
            )}
            <a href={data.trabajanCtaLink} className={cn("mt-2", btnBase, acc.btnCls)}>
              {data.trabajanCtaText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden">
            {data.trabajanImage ? (
              <Image src={data.trabajanImage} alt={data.trabajanHeading} fill className="object-cover" />
            ) : (
              <>
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-85", heroGrad)} />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="font-serif text-white text-base font-bold">{data.trabajanHeading}</p>
                    <p className="font-sans text-white/60 text-xs mt-0.5">{data.displayName}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════════
          CLUB INTERACT  (Preparatoria)
      ══════════════════════════════════════════════════════════════════ */}
      {data.interactTitle && (
        <SectionContainer id="interact" className="bg-warm-white">
          <SectionLabel color={acc.label}>Liderazgo</SectionLabel>
          <SectionHeading className="mb-4">{data.interactTitle}</SectionHeading>
          <p className="font-sans text-base text-muted leading-relaxed mb-12 max-w-2xl">{data.interactBody}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {data.interactItems?.map((item, i) => (
              <div key={i} className={cn("pt-6", acc.borderTop)}>
                <div className="flex items-center gap-2 mb-3">
                  <AreaIcon emoji={item.icon} className={acc.iconCls} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-ink mb-2 leading-snug">{item.title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          ORGULLO PIAGET  (Comunidad Infantil)
      ══════════════════════════════════════════════════════════════════ */}
      {data.orgulloItems && data.orgulloItems.length > 0 && (
        <SectionContainer id="orgullo" className="bg-white">
          <SectionLabel color="text-deep-green">Nuestra institución</SectionLabel>
          <SectionHeading className="mb-12">Orgullo Piaget</SectionHeading>
          <div className="grid sm:grid-cols-3 gap-x-8 gap-y-10">
            {data.orgulloItems.map((item, i) => (
              <div key={i} className={cn("pt-6", acc.borderTop)}>
                <div className="flex items-center gap-2 mb-4">
                  <AreaIcon emoji={item.icon} className={acc.iconCls} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-ink mb-2 leading-snug">{item.title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          TALLERES
      ══════════════════════════════════════════════════════════════════ */}
      <SectionContainer id="talleres" className="bg-warm-white">
        <SectionLabel color="text-deep-green">Extracurricular</SectionLabel>
        <SectionHeading className="mb-12">Talleres</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-6">
          {data.talleres.map((t, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="shrink-0 mt-0.5">
                <AreaIcon emoji={t.icon} className={cn("h-4 w-4", acc.iconCls)} />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-ink">{t.name}</p>
                <p className="font-sans text-xs text-muted leading-relaxed mt-0.5">{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════════
          HORARIOS
      ══════════════════════════════════════════════════════════════════ */}
      <SectionContainer id="horarios" className="bg-white">
        <SectionLabel color="text-brand-blue">Organización</SectionLabel>
        <SectionHeading className="mb-2">Horarios</SectionHeading>
        {data.horariosSubtitle && (
          <p className={cn("font-sans text-sm font-semibold mb-10", acc.text)}>{data.horariosSubtitle}</p>
        )}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          {data.horarios.map((h, i) => (
            <div key={i} className={cn("flex items-start gap-4 pt-5", acc.borderTop)}>
              <Clock className={cn("h-4 w-4 shrink-0 mt-0.5", acc.text)} strokeWidth={1.5} />
              <div>
                <p className="font-sans text-xs font-semibold text-muted uppercase tracking-wide">{h.dia}</p>
                <p className={cn("font-sans text-base font-bold mt-0.5", acc.text)}>{h.horario}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════════ */}
      <SectionContainer id="faq" className="bg-warm-white">
        <div className="max-w-3xl">
          <SectionLabel color="text-deep-green">Dudas frecuentes</SectionLabel>
          <SectionHeading className="mb-10">Preguntas frecuentes</SectionHeading>
          <FaqAccordion items={data.faq} />
        </div>
      </SectionContainer>

      {/* ══════════════════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════════════════ */}
      <SectionContainer id="contacto-nivel" className="bg-white">
        <div className="max-w-xl mx-auto text-center">
          <div className={cn("h-0.5 w-8 rounded-full mx-auto mb-8", acc.bg)} aria-hidden="true" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-4 leading-tight">
            ¿Quieres conocer {data.displayName}?
          </h2>
          <p className="font-sans text-base text-muted mb-8 leading-relaxed">
            Agenda una visita y descubre de cerca nuestro ambiente, metodología y comunidad educativa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#contacto"
              className={cn(btnBase, acc.btnCls)}
            >
              Solicitar información
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/#niveles"
              className={cn(
                "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm",
                "border border-black/10 text-muted",
                "transition-[border-color,color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                "hover:text-ink hover:border-black/20 active:scale-[0.97]"
              )}
            >
              Ver otros niveles
            </Link>
          </div>
        </div>
      </SectionContainer>

    </main>
  );
}
