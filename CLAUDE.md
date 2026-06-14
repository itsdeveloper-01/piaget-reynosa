# CLAUDE.md — Proyecto Piaget Reynosa

## Rol

Actúa como desarrollador frontend senior especializado en:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Decap CMS
* Netlify
* GSAP + ScrollTrigger

Este proyecto es el sitio web de una escuela con inspiración Montessori e identidad institucional.

Debes mantener el rumbo visual definido y no rediseñar libremente sin autorización.

---

## Stack obligatorio

Usar:

* Node 24 LTS
* Next.js en su versión estable más reciente compatible
* React en su versión estable más reciente compatible con Next.js
* TypeScript
* Tailwind CSS
* GSAP + ScrollTrigger
* Decap CMS
* Netlify

No usar:

* Bootstrap
* Vite
* Backend personalizado con Express
* APIs reales de Facebook o Instagram en esta primera fase

---

## Skills instaladas

El usuario indicó que tiene 3 skills instaladas para Claude Code.

Antes de empezar, revisa las skills disponibles y usa las que apliquen al flujo del proyecto.

Usa skills cuando ayuden a:

* Mantener consistencia visual.
* Revisar calidad del código.
* Mejorar estructura de componentes.
* Validar responsive.
* Documentar decisiones.
* Evitar desviarte del diseño aprobado.

No inventes skills. Usa únicamente las que estén disponibles en el entorno.

---

## Estilo visual esperado

El sitio debe sentirse:

* Institucional
* Cálido
* Educativo
* Premium
* Familiar
* Moderno
* Inspirado en Montessori

Debe evitar sentirse:

* Genérico
* Saturado
* Infantil barato
* Como plantilla sin identidad
* Sobrecargado de colores

---

## Paleta institucional

Usar estos colores como base:

```ts
brandBlue: "#1D4CA1"
brandYellow: "#FFDE16"
brandRed: "#ED1C24"
brandGreen: "#39B54A"
brandGray: "#E7E7E8"

warmWhite: "#FFFDF7"
ink: "#1F2933"
muted: "#5F6B7A"
deepBlue: "#102E63"
deepGreen: "#1F6B35"
```

Reglas:

* No usar todos los colores primarios al mismo tiempo.
* Usar colores vivos como acentos.
* Usar fondos claros y cálidos.
* Usar azul oscuro o verde oscuro para jerarquía.
* Mantener contraste accesible.

---

## Responsive

El sitio debe ser mobile-first.

Prioridades:

1. Celulares
2. Tablets
3. Desktop
4. Pantallas grandes de 34 pulgadas 16:9

Reglas:

* En móvil todo debe apilarse correctamente.
* Botones deben ser fáciles de tocar.
* El navbar debe convertirse en hamburguesa.
* En pantallas grandes usar contenedores con ancho máximo.
* No permitir textos con líneas demasiado largas.
* Probar breakpoints durante cada etapa.

---

## Secciones de la homepage

Orden obligatorio:

1. Navbar
2. Hero / carrusel principal
3. Frase María Montessori
4. Animación scroll-driven Montessori
5. Misión, visión y valores
6. Propuesta educativa
7. Niveles educativos alternados
8. Carrusel de instalaciones
9. Galería estática de instalaciones
10. Tecnologías y plataformas educativas
11. Comunidad / redes sociales simuladas
12. Testimonios
13. Ubicación
14. CTA final
15. Botones flotantes WhatsApp y correo

---

## Hero principal

El primer carrusel debe parecerse a la referencia aprobada:

* Texto a la izquierda.
* Imagen grande a la derecha.
* Fondo blanco cálido.
* Degradado suave entre texto e imagen.
* Mínimo 3 slides.
* Preparado para más slides desde CMS.
* Flechas.
* Indicadores.
* Transiciones suaves.

Ejemplo de título:

“Formamos personas para el presente y el futuro.”

---

## Animación scroll-driven

Usar GSAP + ScrollTrigger.

Debe mostrar etapas Montessori:

1. Observar
2. Explorar
3. Concentrarse
4. Conectar ideas
5. Construir conocimiento

La frase final debe ser protagonista:

“View the world through their eyes”

Reglas para esta frase:

* Muy grande.
* Centrada.
* Serif elegante.
* Mucho espacio visual.
* Debe sentirse como el cierre de la animación.

En móvil, si la animación completa es pesada, usar fallback con tarjetas apiladas.

---

## Niveles educativos

No usar cards pequeñas en fila.

Usar bloques horizontales alternados:

* Bloque 1: imagen izquierda, texto derecha.
* Bloque 2: texto izquierda, imagen derecha.
* Bloque 3: imagen izquierda, texto derecha.
* Continuar alternando.

Niveles:

* Comunidad infantil
* Casa de Niños
* Primaria
* Secundaria
* Preparatoria

Cada bloque debe tener:

* Imagen
* Nombre
* Rango de edad
* Descripción
* Color institucional asociado
* Botón “Ver nivel”
* Link preparado

Links:

* `/niveles/comunidad-infantil`
* `/niveles/casa-de-ninos`
* `/niveles/primaria`
* `/niveles/secundaria`
* `/niveles/preparatoria`

No crear todavía las páginas internas completas.

---

## Decap CMS

Preparar contenido editable para:

* Hero slides
* Frase Montessori
* Etapas de animación
* Misión, visión y valores
* Propuesta educativa
* Niveles educativos
* Instalaciones
* Galería
* Tecnología
* Comunidad
* Testimonios
* Ubicación
* CTA final
* WhatsApp
* Correo

Decap CMS se trabajará en una etapa posterior. Primero usar datos mockeados locales.

---

## Regla principal de trabajo

No avances todo de golpe.

Debes trabajar por etapas.

Al terminar cada etapa:

1. Ejecuta revisión básica.
2. Asegúrate de que compile.
3. Asegúrate de que `npm run dev` funcione.
4. Detente.
5. Pregunta exactamente:

“Ya terminé esta etapa. Revísalo en localhost y dime si visualmente vamos bien o si quieres ajustar algo antes de continuar.”

No continuar hasta que el usuario confirme.

---

## Etapas

### Etapa 1 — Setup visual base

Crear:

* Theme de Tailwind.
* Fuentes.
* Layout base.
* Componentes base.
* Paleta.
* Botones.
* Contenedor responsive.
* Botones flotantes básicos.

No crear Navbar ni Hero todavía.

### Etapa 2 — Navbar + Hero Carousel

Crear:

* Navbar responsive.
* Hero carrusel según referencia.
* Mínimo 3 slides.
* Flechas e indicadores.

### Etapa 3 — Frase Montessori + Scroll-driven

Crear:

* Frase María Montessori.
* Animación Montessori con GSAP.
* Frase grande final.

### Etapa 4 — Misión, visión, valores + Propuesta educativa

Crear secciones informativas.

### Etapa 5 — Niveles educativos alternados

Crear bloques alternados clickeables.

### Etapa 6 — Instalaciones

Crear carrusel y galería.

### Etapa 7 — Tecnología + Comunidad

Crear tecnología y redes sociales simuladas.

### Etapa 8 — Testimonios + Ubicación + CTA final

Crear cierre completo de homepage.

### Etapa 9 — Decap CMS

Configurar CMS y conectar contenido editable.

### Etapa 10 — Responsive, SEO y Netlify

Pulido final, metadata y preparación para deploy.

---

## Primera tarea

Comienza únicamente con la Etapa 1.

No avances a Navbar ni Hero.

Al finalizar, detente y pregunta:

“Ya terminé la Etapa 1. Revísalo en localhost y dime si la base visual, colores y tipografías van en la dirección correcta antes de continuar.”
