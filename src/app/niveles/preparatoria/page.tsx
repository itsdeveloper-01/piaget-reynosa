import type { Metadata } from "next";
import { PreparatoriaPage } from "@/components/niveles/PreparatoriaPage";

export const metadata: Metadata = {
  title: "Preparatoria Piaget (15 – 18 años)",
  description:
    "Preparatoria en Instituto Piaget Reynosa. Especialidad en Traducción de Inglés y Administración. Club Interact, programa bilingüe y 100% de egresados en universidad.",
};

export default function Page() {
  return <PreparatoriaPage />;
}
