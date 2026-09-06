import type { Metadata } from "next";
import { PrimariaPage } from "@/components/niveles/PrimariaPage";

export const metadata: Metadata = {
  title: "Primaria Montessori (6 – 12 años)",
  description:
    "Primaria Montessori en Instituto Piaget Reynosa. Educación cósmica, programa bilingüe, pensamiento crítico y aprendizaje basado en proyectos para niños de 6 a 12 años.",
};

export default function Page() {
  return <PrimariaPage />;
}
