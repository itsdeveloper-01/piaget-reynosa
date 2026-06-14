"use client";

import { cn } from "@/lib/utils";
import { Mail, MessageCircle } from "lucide-react";
import settings from "@/content/settings.json";

export function FloatingContactButtons({ className }: { className?: string }) {
  const { whatsapp_number, whatsapp_message, email } = settings;
  const whatsappNumber = whatsapp_number;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsapp_message)}`;
  return (
    <div
      className={cn(
        "fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3",
        className
      )}
      aria-label="Contacto rápido"
    >
      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contáctanos por WhatsApp"
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full shadow-lg",
          "bg-[#25D366] text-white",
          "transition-[transform,box-shadow] duration-200",
          "hover:scale-110 hover:shadow-xl active:scale-[0.97]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        )}
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2} />
      </a>

      {/* Email */}
      <a
        href={`mailto:${email}`}
        aria-label="Envíanos un correo electrónico"
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full shadow-lg",
          "bg-ink text-warm-white",
          "transition-[transform,box-shadow] duration-200",
          "hover:scale-110 hover:shadow-xl active:scale-[0.97]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
        )}
      >
        <Mail className="h-6 w-6" strokeWidth={2} />
      </a>
    </div>
  );
}
