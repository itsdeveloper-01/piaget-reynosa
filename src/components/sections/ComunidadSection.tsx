import React from "react";
import { cn } from "@/lib/utils";
import { Heart, MessageCircle, ThumbsUp } from "lucide-react";

const instagramPosts = [
  {
    id: "ig-1",
    caption: "Explorando materiales sensoriales en Casa de Niños 🌿",
    tag: "#MontessoriMoments",
    likes: 128,
    comments: 14,
    gradient: "from-deep-green to-brand-green/60",
  },
  {
    id: "ig-2",
    caption: "Día de la Ciencia — experimentos en el laboratorio 🔬",
    tag: "#DíaDeLaCiencia",
    likes: 214,
    comments: 23,
    gradient: "from-deep-blue to-brand-blue/60",
  },
  {
    id: "ig-3",
    caption: "Festival de Arte y Cultura — talento que nos llena de orgullo ✨",
    tag: "#FestivalPiaget",
    likes: 341,
    comments: 47,
    gradient: "from-[#3D1A6E]/90 to-deep-blue/70",
  },
];

const facebookPosts = [
  {
    id: "fb-1",
    caption: "Cosecha del huerto escolar con Comunidad Infantil — un día lleno de aprendizaje y naturaleza 🌱",
    tag: "Instituto Piaget Reynosa",
    reactions: 97,
    comments: 9,
    gradient: "from-deep-green/90 to-brand-green/45",
  },
  {
    id: "fb-2",
    caption: "Felicitamos a nuestros alumnos de Preparatoria por su presentación de proyecto de emprendimiento 🚀",
    tag: "Instituto Piaget Reynosa",
    reactions: 302,
    comments: 44,
    gradient: "from-deep-blue/90 to-brand-blue/50",
  },
  {
    id: "fb-3",
    caption: "Tarde de lectura compartida con familias — porque la educación es un proyecto de todos 📖",
    tag: "Instituto Piaget Reynosa",
    reactions: 145,
    comments: 19,
    gradient: "from-ink to-deep-blue/80",
  },
];

function PostCell({
  gradient,
  caption,
  metricIcon,
  metricCount,
  comments,
}: {
  gradient: string;
  caption: string;
  metricIcon: React.ReactNode;
  metricCount: number;
  comments: number;
}) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-lg sm:rounded-xl cursor-pointer">
      {/* Fondo placeholder — reemplazar con <Image> desde CMS */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br transition-transform duration-500 ease-out group-hover:scale-105",
          gradient
        )}
        aria-hidden="true"
      >
        <div className="absolute top-[8%] right-[8%] w-1/3 h-1/3 rounded-full bg-white/[0.04]" />
        <div className="absolute bottom-[10%] left-[6%] w-1/2 h-1/2 rounded-full bg-white/[0.03]" />
      </div>

      {/* Overlay hover */}
      <div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300"
        aria-hidden="true"
      />

      {/* Contenido hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-white font-semibold text-sm">
            {metricIcon}
            {metricCount}
          </span>
          <span className="flex items-center gap-1.5 text-white font-semibold text-sm">
            <MessageCircle className="h-4 w-4 fill-white" strokeWidth={0} />
            {comments}
          </span>
        </div>
        <p className="hidden lg:block font-sans text-xs text-white/80 text-center leading-snug line-clamp-2">
          {caption}
        </p>
      </div>
    </div>
  );
}

const ctaBase =
  "inline-flex items-center gap-2.5 font-semibold text-sm tracking-wide select-none cursor-pointer h-11 px-6 rounded-full active:scale-[0.97] transition-[border-color,background-color,transform] duration-200";

export function ComunidadSection() {
  return (
    <section id="comunidad" aria-label="Comunidad Piaget" className="bg-warm-white overflow-hidden">

      {/* ── Encabezado ──────────────────────────────── */}
      <div className="px-4 sm:px-6 lg:px-8 pt-16 pb-10 lg:pt-24 lg:pb-12 mx-auto max-w-7xl">
        <p className="font-sans text-xs uppercase tracking-widest text-deep-green font-semibold mb-2">
          Comunidad
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight max-w-lg">
          Momentos que compartimos
          <br className="hidden sm:block" />
          con nuestra comunidad
        </h2>
      </div>

      {/* ── Contenido de redes ──────────────────────── */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 mx-auto max-w-7xl space-y-8 lg:space-y-10">

        {/* Instagram */}
        <div>
          {/* Label de plataforma */}
          <div className="flex items-center gap-3 mb-3 lg:mb-4">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-yellow via-brand-red to-brand-blue flex items-center justify-center shrink-0">
              <span className="font-sans font-bold text-white text-xs leading-none">IG</span>
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-ink leading-tight">@colegio.piaget</p>
              <p className="font-sans text-[10px] text-muted uppercase tracking-widest">Instagram</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3">
            {instagramPosts.map((p) => (
              <PostCell
                key={p.id}
                gradient={p.gradient}
                caption={p.caption}
                metricIcon={<Heart className="h-4 w-4 fill-white" strokeWidth={0} />}
                metricCount={p.likes}
                comments={p.comments}
              />
            ))}
          </div>
        </div>

        {/* Facebook */}
        <div>
          {/* Label de plataforma */}
          <div className="flex items-center gap-3 mb-3 lg:mb-4">
            <div className="h-8 w-8 rounded-lg bg-[#1877F2] flex items-center justify-center shrink-0">
              <span className="font-sans font-bold text-white text-sm leading-none">f</span>
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-ink leading-tight">Instituto Piaget Reynosa</p>
              <p className="font-sans text-[10px] text-muted uppercase tracking-widest">Facebook</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3">
            {facebookPosts.map((p) => (
              <PostCell
                key={p.id}
                gradient={p.gradient}
                caption={p.caption}
                metricIcon={<ThumbsUp className="h-4 w-4 fill-white" strokeWidth={0} />}
                metricCount={p.reactions}
                comments={p.comments}
              />
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              ctaBase,
              "border border-ink/15 text-ink bg-transparent hover:border-ink/30 hover:bg-ink/[0.03]"
            )}
          >
            Ver más en Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              ctaBase,
              "border border-[#1877F2]/20 text-[#1877F2] bg-transparent hover:border-[#1877F2]/40 hover:bg-[#1877F2]/[0.04]"
            )}
          >
            Ver más en Facebook
          </a>
        </div>

      </div>
    </section>
  );
}
