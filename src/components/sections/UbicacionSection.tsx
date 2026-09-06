import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import ubicacionData from "@/content/ubicacion.json";

const { address, address_detail, schedule, schedule_detail, phone, map_embed_url } = ubicacionData;

const info = [
  { icon: MapPin, label: "Dirección", value: address, sub: address_detail },
  { icon: Clock,  label: "Horario",   value: schedule, sub: schedule_detail },
  { icon: Phone,  label: "Teléfono",  value: phone,    sub: "También disponibles por WhatsApp" },
  { icon: Mail,   label: "Correo",    value: "contacto@institutopiaget.edu.mx", sub: "Respondemos en menos de 24 horas" },
];

export function UbicacionSection() {
  return (
    <SectionContainer id="ubicacion" className="bg-warm-white" padded>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* ── Columna de información ───────────────── */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-deep-green font-semibold mb-3">
            Ubicación
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-10">
            Encuéntranos en{" "}
            <br className="hidden sm:block" />
            Reynosa, Tamaulipas.
          </h2>

          <div className="space-y-7">
            {info.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="flex gap-4">
                <div className="shrink-0 h-10 w-10 rounded-xl bg-deep-blue/8 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-deep-blue" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-muted font-semibold mb-0.5">
                    {label}
                  </p>
                  <p className="font-sans text-sm font-semibold text-ink leading-snug">
                    {value}
                  </p>
                  <p className="font-sans text-xs text-muted mt-0.5">
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mapa ─────────────────────────────────── */}
        <div className="relative w-full h-72 sm:h-96 lg:h-[480px] overflow-hidden rounded-2xl bg-brand-gray/40 border border-brand-gray/60">
          {map_embed_url ? (
            <iframe
              src={map_embed_url}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Instituto Piaget Reynosa"
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="h-12 w-12 rounded-full bg-deep-blue/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-deep-blue" strokeWidth={1.5} />
              </div>
              <p className="font-sans text-sm text-muted/70 text-center px-8">
                Reynosa, Tamaulipas
              </p>
            </div>
          )}
        </div>

      </div>
    </SectionContainer>
  );
}
