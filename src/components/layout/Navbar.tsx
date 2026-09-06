"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Niveles",    href: "/#niveles"    },
  { label: "Comunidad",  href: "/#comunidad"  },
  { label: "Reseñas",    href: "/#testimonios" },
  { label: "Ubicación",  href: "/#ubicacion"  },
  { label: "Contacto",   href: "/#contacto"   },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Close drawer on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full py-3 bg-warm-white/90 backdrop-blur-sm">

      {/* ── Outer padding wrapper ─────────────────────────── */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 mx-auto max-w-screen-2xl w-full">

        {/* ── Floating card ─────────────────────────────────── */}
        <nav
          className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/95 backdrop-blur-lg shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-black/[0.08]"
          aria-label="Navegación principal"
        >

          {/* ── Logos ─────────────────────────────────────────
              Coloca los archivos en:
                /public/logo02.jpg  (ícono cuadrado / isotipo)
                /public/logo.jpg    (logo horizontal / nombre)
          ──────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="Instituto Piaget — Inicio"
          >
            {/* logo02: 4268×1359 → ratio 3.14:1 — logo horizontal oficial */}
            <Image
              src="/logo02.jpg"
              alt="Instituto Piaget"
              width={252}
              height={80}
              className="h-8 lg:h-10 w-auto"
              priority
            />
            {/* logo: 2550×1884 → ratio 1.35:1 — logo 30 años */}
            <Image
              src="/logo.jpg"
              alt="Instituto Piaget 30 años"
              width={108}
              height={80}
              className="h-8 lg:h-10 w-auto hidden sm:block"
              priority
            />
          </Link>

          {/* ── Desktop links ─────────────────────────────── */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium text-slate-700",
                    "hover:text-brand-blue transition-colors duration-150",
                    "after:absolute after:bottom-0 after:left-0",
                    "after:h-[2px] after:w-0 after:bg-brand-blue after:rounded-full",
                    "hover:after:w-full after:transition-[width] after:duration-200"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ───────────────────────────────── */}
          <div className="hidden lg:block">
            <a
              href="/#contacto"
              className={cn(
                "inline-flex items-center font-semibold text-sm text-white select-none",
                "px-5 py-2.5 rounded-lg bg-brand-blue",
                "hover:bg-slate-900 hover:shadow-md hover:-translate-y-0.5",
                "active:translate-y-0 active:scale-[0.97]",
                "transition-[background-color,box-shadow,transform] duration-200"
              )}
            >
              Contáctanos
            </a>
          </div>

          {/* ── Hamburger button ──────────────────────────── */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className={cn(
              "lg:hidden flex flex-col items-center justify-center gap-[5px]",
              "h-10 w-10 rounded-lg border border-black/[0.08] bg-white shadow-sm",
              "hover:bg-slate-50 transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            )}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={cn(
                "block h-0.5 w-5 bg-slate-700 rounded-full",
                "transition-transform duration-200",
                isOpen && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-slate-700 rounded-full",
                "transition-opacity duration-200",
                isOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-slate-700 rounded-full",
                "transition-transform duration-200",
                isOpen && "-translate-y-[7px] -rotate-45"
              )}
            />
          </button>
        </nav>
      </div>

      {/* ══════════════════════════════════════════════════════
          MOBILE DRAWER
      ══════════════════════════════════════════════════════ */}

      {/* Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[60] bg-black/40",
          "transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Menú principal"
        className={cn(
          "lg:hidden fixed top-0 right-0 z-[70] h-dvh w-[88%] max-w-sm",
          "bg-white border-l border-black/10 shadow-2xl",
          "transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.06]">
          <div className="flex items-center gap-2">
            <Image
              src="/logo02.jpg"
              alt="Instituto Piaget"
              width={252}
              height={80}
              className="h-8 w-auto"
            />
          </div>
          <button
            onClick={close}
            className={cn(
              "flex items-center justify-center h-9 w-9 rounded-lg",
              "border border-black/[0.08] bg-white shadow-sm text-slate-600 text-lg leading-none",
              "hover:bg-slate-50 transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            )}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        {/* Drawer body */}
        <div className="overflow-y-auto h-[calc(100dvh-4.5rem)] px-4 py-4 flex flex-col gap-2">

          {/* Nav items */}
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={close}
              className={cn(
                "flex items-center justify-between",
                "px-4 py-4 rounded-xl",
                "border border-black/10 bg-white shadow-sm",
                "font-sans text-base font-medium text-ink",
                "hover:border-brand-blue/30 hover:bg-blue-50/30",
                "transition-[border-color,background-color] duration-150"
              )}
            >
              <span>{link.label}</span>
              <span className="text-muted text-xl leading-none select-none">›</span>
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href="/#contacto"
            onClick={close}
            className={cn(
              "mt-4 flex items-center justify-center gap-2",
              "px-6 py-4 rounded-xl",
              "bg-brand-blue text-white font-semibold text-sm tracking-wide",
              "hover:bg-deep-blue",
              "active:scale-[0.97]",
              "transition-[background-color,transform] duration-200"
            )}
          >
            WhatsApp / Correo
          </a>
        </div>
      </div>

    </header>
  );
}
