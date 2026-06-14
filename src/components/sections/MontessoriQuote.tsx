import { SectionContainer } from "@/components/ui/SectionContainer";
import quoteData from "@/content/montessori-quote.json";

export function MontessoriQuote() {
  const { quote, author, author_detail } = quoteData;

  return (
    <SectionContainer className="bg-deep-blue" padded>
      <div className="max-w-3xl mx-auto text-center">
        {/* Accent superior */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-10 bg-brand-yellow/40" />
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-yellow/60 select-none">
            {author}
          </span>
          <div className="h-px w-10 bg-brand-yellow/40" />
        </div>

        {/* Quote */}
        <blockquote>
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-warm-white leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>

        {/* Accent inferior */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="h-px w-10 bg-brand-yellow/40" />
          <span className="font-sans text-xs text-warm-white/35 select-none">
            {author_detail}
          </span>
          <div className="h-px w-10 bg-brand-yellow/40" />
        </div>
      </div>
    </SectionContainer>
  );
}
