import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import ubicacionData from "@/content/ubicacion.json";

const {
  address,
  address_detail,
  schedule,
  schedule_detail,
  phone,
  map_embed_url,
  google_maps_url,
} = ubicacionData;

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

          {/* Botón Cómo llegar */}
          {google_maps_url && (
            <a
              href={google_maps_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 h-11 px-6 rounded-full font-semibold text-sm text-deep-blue border-2 border-deep-blue/20 hover:border-deep-blue/50 hover:bg-deep-blue/[0.04] transition-[border-color,background-color,transform] duration-200 active:scale-[0.97]"
            >
              <Navigation className="h-4 w-4" strokeWidth={1.5} />
              Cómo llegar
            </a>
          )}
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
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="h-14 w-14 rounded-full bg-deep-blue/8 flex items-center justify-center">
                <MapPin className="h-7 w-7 text-deep-blue" strokeWidth={1.5} />
              </div>
              <div className="text-center px-8">
                <p className="font-sans text-sm font-semibold text-ink mb-1">
                  Reynosa, Tamaulipas
                </p>
                <p className="font-sans text-xs text-muted">
                  El mapa se configura desde el panel de administración
                </p>
              </div>
              {google_maps_url && (
                <a
                  href={google_maps_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs font-semibold text-deep-blue underline underline-offset-2 hover:text-brand-blue transition-colors"
                >
                  Ver en Google Maps →
                </a>
              )}
            </div>
          )}
        </div>

      </div>
    </SectionContainer>
  );
}
