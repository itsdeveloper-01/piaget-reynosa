import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const BASE_URL = "https://institutopiaget.edu.mx";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Instituto Piaget Reynosa — Educación Montessori",
    template: "%s | Instituto Piaget Reynosa",
  },
  description:
    "Formamos personas para el presente y el futuro. Educación con inspiración Montessori en Reynosa, Tamaulipas: Comunidad Infantil, Casa de Niños, Primaria, Secundaria y Preparatoria.",
  keywords: [
    "escuela Montessori Reynosa",
    "colegio privado Reynosa",
    "educación Montessori Tamaulipas",
    "Instituto Piaget",
    "primaria Reynosa",
    "secundaria Reynosa",
    "preparatoria Reynosa",
  ],
  authors: [{ name: "Instituto Piaget Reynosa" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: BASE_URL,
    siteName: "Instituto Piaget Reynosa",
    title: "Instituto Piaget Reynosa — Educación Montessori",
    description:
      "Formamos personas para el presente y el futuro. Educación con inspiración Montessori en Reynosa, Tamaulipas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Instituto Piaget Reynosa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituto Piaget Reynosa — Educación Montessori",
    description:
      "Formamos personas para el presente y el futuro. Educación con inspiración Montessori en Reynosa, Tamaulipas.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-warm-white text-ink font-sans antialiased">
        <Navbar />
        {/* pt-16 offsets the fixed navbar (h-16 = 4rem) */}
        <div className="flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
