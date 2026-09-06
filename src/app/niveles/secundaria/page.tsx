import type { Metadata } from "next";
import { SecundariaPage } from "@/components/niveles/SecundariaPage";

export const metadata: Metadata = {
  title: "Secundaria Montessori (12 – 15 años)",
  description:
    "Secundaria Montessori en Instituto Piaget Reynosa. Proyectos de investigación, programa bilingüe avanzado, emprendimiento y formación integral para jóvenes de 12 a 15 años.",
};

export default function Page() {
  return <SecundariaPage />;
}
