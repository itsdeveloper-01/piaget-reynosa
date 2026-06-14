This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



## Cuando despliegues a Netlify: descomenta la línea del identity widget en public/admin/index.html, activa Netlify Identity en el dashboard y listo.

### Imágenes necesarias para Instituto Piaget Reynosa
  
  Estilo general para el prompt de IA:

  ▎ "Real photography style, warm natural lighting, Montessori school environment, Mexico, diverse Latin American children, clean and modern spaces, institutional and premium feel. No 
  ▎ cartoon, no illustration."

  ---
  1. Hero / Carrusel principal — 3 imágenes

  Guardar en: public/images/hero/
  Campo JSON: src/content/hero.json → "image": "/images/hero/hero-01.webp"

  ┌──────────────┬──────────────┬─────────┬─────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │   Archivo    │ Dimensiones  │ Formato │  Peso   │                                                       Qué debe mostrar                                                        │
  │              │              │         │   máx   │                                                                                                                               │
  ├──────────────┼──────────────┼─────────┼─────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ hero-01.webp │ 1400 × 900   │ WebP    │ 250 KB  │ Niños de distintas edades trabajando con materiales Montessori en un aula luminosa y ordenada. Perspectiva desde un costado,  │
  │              │ px           │         │         │ ambiente cálido y espacioso                                                                                                   │
  ├──────────────┼──────────────┼─────────┼─────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ hero-02.webp │ 1400 × 900   │ WebP    │ 250 KB  │ Maestra acompañando a un grupo pequeño de alumnos en una actividad colaborativa. Relación cercana, ambiente de confianza, luz │
  │              │ px           │         │         │  natural entrando por ventanas                                                                                                │
  ├──────────────┼──────────────┼─────────┼─────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ hero-03.webp │ 1400 × 900   │ WebP    │ 250 KB  │ Jóvenes de preparatoria en una presentación o proyecto, seguros de sí mismos, espacio moderno dentro del colegio              │
  │              │ px           │         │         │                                                                                                                               │
  └──────────────┴──────────────┴─────────┴─────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

  ---
  2. Niveles educativos — 5 imágenes
  
  Guardar en: public/images/niveles/
  Campo JSON: src/content/niveles.json → "image": "/images/niveles/comunidad-infantil.webp"

  ┌─────────────────────────┬─────────────┬─────────┬─────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │         Archivo         │ Dimensiones │ Formato │  Peso   │                                                  Qué debe mostrar                                                  │
  │                         │             │         │   máx   │                                                                                                                    │
  ├─────────────────────────┼─────────────┼─────────┼─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ comunidad-infantil.webp │ 900 × 700   │ WebP    │ 180 KB  │ Bebés y niños de 1-3 años explorando objetos sensoriales en el piso, espacio muy ordenado y acogedor, muebles a su │
  │                         │ px          │         │         │  escala                                                                                                            │
  ├─────────────────────────┼─────────────┼─────────┼─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ casa-de-ninos.webp      │ 900 × 700   │ WebP    │ 180 KB  │ Niños de 3-5 años trabajando individualmente con materiales Montessori (bandejas, cuentas, letras de lija),        │
  │                         │ px          │         │         │ concentración visible                                                                                              │
  ├─────────────────────────┼─────────────┼─────────┼─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ primaria.webp           │ 900 × 700   │ WebP    │ 180 KB  │ Niños de 8-10 años extendiendo una gran línea del tiempo en el piso o trabajando con mapas, curiosidad y           │
  │                         │ px          │         │         │ descubrimiento                                                                                                     │
  ├─────────────────────────┼─────────────┼─────────┼─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ secundaria.webp         │ 900 × 700   │ WebP    │ 180 KB  │ Adolescentes de 12-14 años en un proyecto de construcción o experimento real, trabajo en equipo, seriedad y        │
  │                         │ px          │         │         │ entusiasmo                                                                                                         │
  ├─────────────────────────┼─────────────┼─────────┼─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ preparatoria.webp       │ 900 × 700   │ WebP    │ 180 KB  │ Jóvenes de 16-18 años en debate o presentación formal, postura segura, ambiente que transmite madurez y liderazgo  │
  │                         │ px          │         │         │                                                                                                                    │
  └─────────────────────────┴─────────────┴─────────┴─────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

  ---
  3. Carrusel de instalaciones — 6 imágenes
  
  Guardar en: public/images/instalaciones/
  Campo JSON: src/content/instalaciones.json → "image": "/images/instalaciones/biblioteca.webp"
  Nota: Estas son imágenes panorámicas full-screen. Deben ser anchas y horizontales.

  ┌──────────────────────────┬──────────────┬─────────┬─────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │         Archivo          │ Dimensiones  │ Formato │  Peso   │                                                 Qué debe mostrar                                                 │
  │                          │              │         │   máx   │                                                                                                                  │
  ├──────────────────────────┼──────────────┼─────────┼─────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ biblioteca.webp          │ 1920 × 800   │ WebP    │ 350 KB  │ Biblioteca escolar con estantes llenos de libros, mesas de lectura con luz cálida, un alumno leyendo en primer   │
  │                          │ px           │         │         │ plano                                                                                                            │
  ├──────────────────────────┼──────────────┼─────────┼─────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ laboratorio.webp         │ 1920 × 800   │ WebP    │ 350 KB  │ Laboratorio de ciencias con mesas de trabajo, microscopios y tubos de ensayo. Alumnos con bata haciendo          │
  │                          │ px           │         │         │ experimento                                                                                                      │
  ├──────────────────────────┼──────────────┼─────────┼─────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ taller-arte.webp         │ 1920 × 800   │ WebP    │ 350 KB  │ Taller con caballetes, pinturas, instrumentos musicales al fondo. Niño pintando con concentración, colores       │
  │                          │ px           │         │         │ vibrantes                                                                                                        │
  ├──────────────────────────┼──────────────┼─────────┼─────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ areas-deportivas.webp    │ 1920 × 800   │ WebP    │ 350 KB  │ Cancha o área deportiva exterior al mediodía, alumnos en movimiento, instalaciones limpias y bien equipadas      │
  │                          │ px           │         │         │                                                                                                                  │
  ├──────────────────────────┼──────────────┼─────────┼─────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ jardines.webp            │ 1920 × 800   │ WebP    │ 350 KB  │ Jardín y huerto escolar con plantas verdes, niños cuidando plantas o cosechando. Luz natural, ambiente natural y │
  │                          │ px           │         │         │  vivo                                                                                                            │
  ├──────────────────────────┼──────────────┼─────────┼─────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ambiente-montessori.webp │ 1920 × 800   │ WebP    │ 350 KB  │ Aula Montessori desde la puerta: estanterías bajas con materiales ordenados, tapetes en el piso, niños           │
  │                          │ px           │         │         │ trabajando solos                                                                                                 │
  └──────────────────────────┴──────────────┴─────────┴─────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

  ---
  4. Galería estática — 5 imágenes

  Guardar en: public/images/galeria/
  Campo JSON: src/content/galeria.json → "image": "/images/galeria/lab-ciencias.webp"
  Nota: La imagen del centro (imagen 3, Biblioteca) ocupa el doble de altura en desktop. Debe ser vertical o cuadrada.

  ┌─────────────────────────┬──────────────┬─────────┬──────────┬───────────────────────┬──────────────────────────────────────────────────────────────────────────────────────┐
  │         Archivo         │ Dimensiones  │ Formato │ Peso máx │   Posición en grid    │                                   Qué debe mostrar                                   │
  ├─────────────────────────┼──────────────┼─────────┼──────────┼───────────────────────┼──────────────────────────────────────────────────────────────────────────────────────┤
  │ lab-ciencias.webp       │ 600 × 450 px │ WebP    │ 120 KB   │ Columna izq, arriba   │ Primer plano de materiales de ciencias: microscopio, planta, cuaderno de anotaciones │
  ├─────────────────────────┼──────────────┼─────────┼──────────┼───────────────────────┼──────────────────────────────────────────────────────────────────────────────────────┤
  │ taller-arte.webp        │ 600 × 450 px │ WebP    │ 120 KB   │ Columna izq, abajo    │ Manos de niño pintando, pintura en los dedos, expresión de gozo                      │
  ├─────────────────────────┼──────────────┼─────────┼──────────┼───────────────────────┼──────────────────────────────────────────────────────────────────────────────────────┤
  │ biblioteca-galeria.webp │ 600 × 900 px │ WebP    │ 180 KB   │ Centro (doble altura) │ Vista vertical de la biblioteca desde adentro, estantes altos, luz cenital           │
  ├─────────────────────────┼──────────────┼─────────┼──────────┼───────────────────────┼──────────────────────────────────────────────────────────────────────────────────────┤
  │ areas-deportivas.webp   │ 600 × 450 px │ WebP    │ 120 KB   │ Columna der, arriba   │ Cancha exterior, niños corriendo o jugando, cielo azul de fondo                      │
  ├─────────────────────────┼──────────────┼─────────┼──────────┼───────────────────────┼──────────────────────────────────────────────────────────────────────────────────────┤
  │ jardines.webp           │ 600 × 450 px │ WebP    │ 120 KB   │ Columna der, abajo    │ Macro de plantas del huerto, manos de niño sosteniendo fruto o flor                  │
  └─────────────────────────┴──────────────┴─────────┴──────────┴───────────────────────┴──────────────────────────────────────────────────────────────────────────────────────┘

  ---
  5. Tecnología — socios educativos — 1 imagen

  Guardar en: public/images/tecnologia/
  Campo JSON: src/content/tecnologia.json → "socios_image": "/images/tecnologia/socios.png"

  ┌────────────┬──────────────┬─────────┬─────────┬─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │  Archivo   │ Dimensiones  │ Formato │  Peso   │                                                        Qué debe mostrar                                                         │
  │            │              │         │   máx   │                                                                                                                                 │
  ├────────────┼──────────────┼─────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ socios.png │ 1200 × 200   │ PNG     │ 80 KB   │ Logos alineados horizontalmente de plataformas educativas: Google Classroom, Khan Academy, Duolingo, Quizlet, Canva for         │
  │            │ px           │         │         │ Education. Fondo transparente o blanco                                                                                          │
  └────────────┴──────────────┴─────────┴─────────┴─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

  ▎ Nota: Esta imagen la puedes hacer tú mismo descargando los logos oficiales de cada plataforma y acomodándolos en Canva o Figma. No es necesario generarla con IA.

  ---
  6. Open Graph — imagen para redes sociales — 1 imagen

  Guardar en: public/
  Referenciada automáticamente en el SEO del sitio.
  
  ┌──────────────┬──────────────┬─────────┬────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │   Archivo    │ Dimensiones  │ Formato │ Peso   │                                                       Qué debe mostrar                                                        │
  │              │              │         │  máx   │                                                                                                                               │
  ├──────────────┼──────────────┼─────────┼────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ og-image.jpg │ 1200 × 630   │ JPG     │ 200 KB │ Composición institucional: fondo azul oscuro (#102E63), logo o nombre "Instituto Piaget" en blanco, frase "Educación          │
  │              │ px           │         │        │ Montessori · Reynosa" y una foto de alumnos en el lado derecho                                                                │
  └──────────────┴──────────────┴─────────┴────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

  ---
  Resumen

  ┌───────────────────┬──────────┬─────────────┐
  │      Sección      │ Cantidad │ Total aprox │
  ├───────────────────┼──────────┼─────────────┤
  │ Hero              │ 3        │ ~750 KB     │
  ├───────────────────┼──────────┼─────────────┤
  │ Niveles           │ 5        │ ~900 KB     │
  ├───────────────────┼──────────┼─────────────┤
  │ Instalaciones     │ 6        │ ~2.1 MB     │
  ├───────────────────┼──────────┼─────────────┤
  │ Galería           │ 5        │ ~630 KB     │
  ├───────────────────┼──────────┼─────────────┤
  │ Socios tecnología │ 1        │ ~80 KB      │
  ├───────────────────┼──────────┼─────────────┤
  │ OG image          │ 1        │ ~200 KB     │
  ├───────────────────┼──────────┼─────────────┤
  │ Total             │ 21       │ ~4.7 MB     │
  └───────────────────┴──────────┴─────────────┘

  Prompt base recomendado para cada imagen

  Photorealistic image, warm natural lighting, Instituto Piaget Reynosa,
  Montessori school in northern Mexico. [descripción específica de la imagen].
  Clean, premium, institutional atmosphere. Latin American diverse children.
  No text, no logos, no watermarks. Horizontal composition.

  Una vez que tengas las imágenes, las subes a public/images/ y en el CMS (/admin) reemplazas los campos de imagen en cada sección. El sitio las tomará automáticamente.
###