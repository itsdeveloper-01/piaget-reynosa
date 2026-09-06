import Image from "next/image";
import { cn } from "@/lib/utils";
import comunidadData from "@/content/comunidad.json";
import settingsData from "@/content/settings.json";

const { instagram_posts, facebook_posts } = comunidadData;
const { instagram_url, facebook_url, facebook_page_name } = settingsData;

// Paletas de gradientes para posts sin imagen
const IG_GRADIENTS = [
  "from-deep-green to-brand-green/60",
  "from-deep-blue to-brand-blue/60",
  "from-[#3D1A6E]/90 to-deep-blue/70",
  "from-ink to-deep-green/80",
  "from-deep-blue/80 to-brand-blue/40",
  "from-deep-green/80 to-brand-yellow/30",
];

const FB_GRADIENTS = [
  "from-deep-green/90 to-brand-green/45",
  "from-deep-blue/90 to-brand-blue/50",
  "from-ink to-deep-blue/80",
  "from-deep-green/70 to-brand-blue/50",
  "from-[#1877F2]/50 to-deep-blue/80",
  "from-ink/90 to-brand-green/40",
];

function extractIgHandle(url: string): string {
  try {
    const parts = new URL(url).pathname.replace(/\/$/, "").split("/").filter(Boolean);
    return parts.length > 0 ? `@${parts[parts.length - 1]}` : "@institutopiaget";
  } catch {
    return "@institutopiaget";
  }
}

function PostCell({
  image,
  caption,
  url,
  gradient,
}: {
  image: string;
  caption: string;
  url: string;
  gradient: string;
}) {
  const cell = (
    <div className="group relative aspect-square overflow-hidden rounded-lg sm:rounded-xl">
      {/* Fondo: imagen real o gradiente placeholder */}
      {image ? (
        <Image
          src={image}
          alt={caption}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 33vw, (max-width: 1280px) 22vw, 18vw"
        />
      ) : (
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
      )}

      {/* Overlay hover */}
      <div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-300"
        aria-hidden="true"
      />

      {/* Caption en hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 pb-3">
        <p className="hidden sm:block font-sans text-xs text-white/90 text-center leading-snug line-clamp-3">
          {caption}
        </p>
        {url && (
          <span className="font-sans text-[10px] text-white/55 uppercase tracking-widest">
            Ver publicación →
          </span>
        )}
      </div>
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={caption}
        className="cursor-pointer"
      >
        {cell}
      </a>
    );
  }

  return <div>{cell}</div>;
}

const ctaBase =
  "inline-flex items-center gap-2.5 font-semibold text-sm tracking-wide select-none cursor-pointer h-11 px-6 rounded-full active:scale-[0.97] transition-[border-color,background-color,transform] duration-200";

export function ComunidadSection() {
  const igHandle = extractIgHandle(instagram_url);

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
          <div className="flex items-center gap-3 mb-3 lg:mb-4">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-yellow via-brand-red to-brand-blue flex items-center justify-center shrink-0">
              <span className="font-sans font-bold text-white text-xs leading-none">IG</span>
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-ink leading-tight">{igHandle}</p>
              <p className="font-sans text-[10px] text-muted uppercase tracking-widest">Instagram</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3">
            {instagram_posts.map((post, i) => (
              <PostCell
                key={i}
                image={post.image}
                caption={post.caption}
                url={post.url}
                gradient={IG_GRADIENTS[i % IG_GRADIENTS.length]}
              />
            ))}
          </div>
        </div>

        {/* Facebook */}
        <div>
          <div className="flex items-center gap-3 mb-3 lg:mb-4">
            <div className="h-8 w-8 rounded-lg bg-[#1877F2] flex items-center justify-center shrink-0">
              <span className="font-sans font-bold text-white text-sm leading-none">f</span>
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-ink leading-tight">{facebook_page_name}</p>
              <p className="font-sans text-[10px] text-muted uppercase tracking-widest">Facebook</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3">
            {facebook_posts.map((post, i) => (
              <PostCell
                key={i}
                image={post.image}
                caption={post.caption}
                url={post.url}
                gradient={FB_GRADIENTS[i % FB_GRADIENTS.length]}
              />
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href={instagram_url}
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
            href={facebook_url}
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
