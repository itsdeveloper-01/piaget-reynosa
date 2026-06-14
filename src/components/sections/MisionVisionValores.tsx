import { SectionContainer } from "@/components/ui/SectionContainer";
import data from "@/content/mision-vision.json";

const { mision, vision, valores } = data;

export function MisionVisionValores() {
  return (
    <SectionContainer id="nosotros" className="bg-white">
      {/* Encabezado */}
      <div className="mb-14">
        <p className="font-sans text-xs uppercase tracking-widest text-brand-blue font-semibold mb-2">
          Quiénes somos
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink max-w-xl leading-tight">
          Misión, Visión y Valores
        </h2>
      </div>

      {/* Tres columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

        {/* Misión */}
        <div className="border-t-2 border-deep-blue pt-7">
          <h3 className="font-serif text-2xl font-bold text-deep-blue mb-5">
            Misión
          </h3>
          <p className="font-sans text-base text-muted leading-relaxed">
            {mision}
          </p>
        </div>

        {/* Visión */}
        <div className="border-t-2 border-deep-green pt-7">
          <h3 className="font-serif text-2xl font-bold text-deep-green mb-5">
            Visión
          </h3>
          <p className="font-sans text-base text-muted leading-relaxed">
            {vision}
          </p>
        </div>

        {/* Valores */}
        <div className="border-t-2 border-brand-yellow pt-7">
          <h3 className="font-serif text-2xl font-bold text-ink mb-5">
            Valores
          </h3>
          <ul className="space-y-3">
            {valores.map((v, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-[7px] h-1.5 w-1.5 rounded-full bg-brand-yellow shrink-0"
                  aria-hidden="true"
                />
                <span className="font-sans text-sm text-muted leading-relaxed">
                  {v}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </SectionContainer>
  );
}
