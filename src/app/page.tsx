import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { MontessoriQuote } from "@/components/sections/MontessoriQuote";
import { MontessoriScroll } from "@/components/sections/MontessoriScroll";
import { MisionVisionValores } from "@/components/sections/MisionVisionValores";
import { PropuestaEducativa } from "@/components/sections/PropuestaEducativa";
import { NivelesEducativos } from "@/components/sections/NivelesEducativos";
import { InstalacionesCarrusel } from "@/components/sections/InstalacionesCarrusel";
import { GaleriaInstalaciones } from "@/components/sections/GaleriaInstalaciones";
import { TecnologiaEducativa } from "@/components/sections/TecnologiaEducativa";
import { ComunidadSection } from "@/components/sections/ComunidadSection";
import { TestimoniosSection } from "@/components/sections/TestimoniosSection";
import { UbicacionSection } from "@/components/sections/UbicacionSection";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { ScrollToHash } from "@/components/ScrollToHash";

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <HeroCarousel />
      <MontessoriQuote />
      <MontessoriScroll />
      <MisionVisionValores />
      <PropuestaEducativa />
      <NivelesEducativos />
      <InstalacionesCarrusel />
      <GaleriaInstalaciones />
      <TecnologiaEducativa />
      <ComunidadSection />
      <TestimoniosSection />
      <UbicacionSection />
      <CTAFinal />
      <FloatingContactButtons />
    </>
  );
}
