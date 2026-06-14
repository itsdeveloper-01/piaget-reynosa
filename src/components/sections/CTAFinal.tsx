import { Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import ctaData from "@/content/cta.json";
import settings from "@/content/settings.json";

export function CTAFinal() {
  const { heading, description, whatsapp_cta_text, email_cta_text, note } = ctaData;
  const whatsappUrl = `https://wa.me/${settings.whatsapp_number}?text=${encodeURIComponent(settings.whatsapp_message)}`;
  const emailUrl = `mailto:${settings.email}`;

  return (
    <section
      id="contacto"
      aria-label="Contáctanos"
      className="relative bg-deep-blue overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-blue/20" />
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-brand-blue/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.02]" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mx-auto max-w-xl text-center">

        {/* Acento amarillo */}
        <div
          className="h-0.5 w-12 bg-brand-yellow rounded-full mx-auto mb-6"
          aria-hidden="true"
        />

        {/* Encabezado */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-white leading-tight mb-4">
          {heading}
        </h2>

        {/* Subtexto */}
        <p className="font-sans text-sm sm:text-base text-warm-white/65 leading-relaxed mb-8">
          {description}
        </p>

        {/* Botones: WhatsApp primero, email segundo */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* WhatsApp — verde */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 font-semibold text-sm tracking-wide select-none",
              "h-12 px-7 rounded-xl",
              "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25",
              "hover:bg-[#20c05c] hover:shadow-xl hover:shadow-[#25D366]/30",
              "active:scale-[0.97]",
              "transition-[background-color,box-shadow,transform] duration-200"
            )}
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            {whatsapp_cta_text}
          </a>

          {/* Email — amarillo */}
          <a
            href={emailUrl}
            className={cn(
              "inline-flex items-center gap-2 font-semibold text-sm tracking-wide select-none",
              "h-12 px-7 rounded-xl",
              "bg-brand-yellow text-ink shadow-lg shadow-brand-yellow/20",
              "hover:bg-brand-yellow/90 hover:shadow-xl hover:shadow-brand-yellow/25",
              "active:scale-[0.97]",
              "transition-[background-color,box-shadow,transform] duration-200"
            )}
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            {email_cta_text}
          </a>
        </div>

        {/* Detalle inferior */}
        <p className="font-sans text-xs text-warm-white/35 mt-6">
          {note}
        </p>
      </div>
    </section>
  );
}
