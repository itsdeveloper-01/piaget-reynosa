import { Building2, Star, Clock, Layers, Users, Leaf } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import propuestaData from "@/content/propuesta.json";

const ICONS = [Building2, Star, Clock, Layers, Users, Leaf];
const ICON_COLORS = ["text-deep-blue", "text-deep-green", "text-deep-blue", "text-deep-green", "text-deep-blue", "text-deep-green"];

const { description_1, description_2, pillars: rawPillars } = propuestaData;

const pillars = rawPillars.map((p, i) => ({
  ...p,
  number: String(i + 1).padStart(2, "0"),
  icon: ICONS[i % ICONS.length],
  iconColor: ICON_COLORS[i % ICON_COLORS.length],
}));

export function PropuestaEducativa() {
  return (
    <SectionContainer id="propuesta" className="bg-warm-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ── Columna izquierda: declaración ── */}
        <div className="lg:sticky lg:top-24">
          <p className="font-sans text-xs uppercase tracking-widest text-deep-green font-semibold mb-3">
            Propuesta educativa
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-6">
            Educamos para la vida,<br />
            no para el examen.
          </h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            {description_1}
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-10">
            {description_2}
          </p>
          <Button variant="secondary">
            Conoce nuestra metodología
          </Button>
        </div>

        {/* ── Columna derecha: 6 pilares ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          {pillars.map(({ number, icon: Icon, title, description, iconColor }) => (
            <div key={number}>
              {/* Ícono */}
              <div className="mb-3">
                <Icon className={`h-5 w-5 ${iconColor} shrink-0`} strokeWidth={1.5} />
              </div>
              {/* Título */}
              <h3 className="font-serif text-lg font-semibold text-ink mb-2 leading-snug">
                {title}
              </h3>
              {/* Descripción */}
              <p className="font-sans text-sm text-muted leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </SectionContainer>
  );
}
