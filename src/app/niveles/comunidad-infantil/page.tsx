import type { Metadata } from "next";
import { ComunidadInfantilPage } from "@/components/niveles/ComunidadInfantilPage";

export const metadata: Metadata = {
  title: "Comunidad Infantil — Maternal (1 año 8 meses – 3 años)",
  description:
    "El primer ambiente Montessori fuera del hogar en Reynosa. Programa maternal certificado AMI para niños de 1 año 8 meses a 3 años. Descubre nuestro ambiente preparado, guías certificadas y programa de desarrollo integral.",
};

export default function Page() {
  return <ComunidadInfantilPage />;
}
