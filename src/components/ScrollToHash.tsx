"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

const NAVBAR_H = 88;

export function ScrollToHash() {
  const idRef = useRef<string | null>(null);

  // ── 1. Antes del primer paint ──────────────────────────────────────────
  // Elimina el hash del URL con replaceState para que el browser no intente
  // scrollear a él — ni ahora ni de forma diferida (algunos navegadores
  // disparan el hash-scroll después del primer paint).
  // También fuerza scroll a 0 por si el browser ya scrolleó antes de que
  // React hidratara.
  useLayoutEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    idRef.current = hash.slice(1);
    history.replaceState(null, "", window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  }, []);

  // ── 2. Salta a la posición correcta ────────────────────────────────────
  // Usa dos requestAnimationFrame en desktop para garantizar que GSAP haya
  // terminado de crear el pin-spacer (puede diferirlo al siguiente frame).
  // En mobile GSAP no pina, así que un solo rAF es suficiente.
  useEffect(() => {
    const id = idRef.current;
    if (!id) return;

    const jump = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_H;
      (document.scrollingElement ?? document.documentElement).scrollTop = top;
      // Restaura el hash en el URL sin disparar scroll
      history.replaceState(null, "", "#" + id);
    };

    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

    let raf1: number, raf2: number;

    if (isMobile) {
      raf1 = requestAnimationFrame(jump);
      return () => cancelAnimationFrame(raf1);
    }

    // Desktop: espera 2 frames para que el pin-spacer de GSAP exista
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(jump);
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  return null;
}
