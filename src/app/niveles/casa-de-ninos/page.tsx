import type { Metadata } from "next";
import { CasaDeNinosPage } from "@/components/niveles/CasaDeNinosPage";

export const metadata: Metadata = {
  title: "Casa de Niños — Kinder (3 – 6 años)",
  description:
    "Casa de Niños en Instituto Piaget Reynosa. Educación Montessori para niños de 3 a 6 años. Sistema Multigrado, Programa Bilingüe y áreas de desarrollo integral.",
};

export default function Page() {
  return <CasaDeNinosPage />;
}
