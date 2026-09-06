import Image from "next/image";
import { SectionContainer } from "@/components/ui/SectionContainer";
import tecnologiaData from "@/content/tecnologia.json";

export function TecnologiaEducativa() {
  const { description, socios_image } = tecnologiaData;
  return (
    <SectionContainer id="tecnologia" className="bg-white" padded>

      {/* ── Bloque de texto ─────────────────────────── */}
      <div className="max-w-3xl mb-12 lg:mb-16">
        <p className="font-sans text-xs uppercase tracking-widest text-deep-green font-semibold mb-3">
          Tecnología educativa
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-6">
          Tecnología al servicio{" "}
          <br className="hidden sm:block" />
          del aprendizaje.
        </h2>
        <p className="font-sans text-base sm:text-lg text-muted leading-relaxed">
          {description}
        </p>
      </div>

      {/* ── Imagen de socios comerciales ────────────── */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-brand-gray/30 border border-brand-gray/60">
        {socios_image ? (
          <Image
            src={socios_image}
            alt="Socios comerciales de Instituto Piaget"
            width={1400}
            height={400}
            className="w-full h-auto object-contain"
          />
        ) : (
          <div className="flex items-center justify-center py-16 sm:py-20 lg:py-24 px-8">
            <div className="text-center">
              <div className="h-0.5 w-12 bg-brand-gray mx-auto mb-5 rounded-full" />
              <p className="font-sans text-sm text-muted/60 mb-1">
                Imagen de socios comerciales
              </p>
              <p className="font-mono text-xs text-muted/40">
                Sube la imagen desde el CMS → Tecnología Educativa
              </p>
              <div className="h-0.5 w-12 bg-brand-gray mx-auto mt-5 rounded-full" />
            </div>
          </div>
        )}
      </div>

    </SectionContainer>
  );
}
