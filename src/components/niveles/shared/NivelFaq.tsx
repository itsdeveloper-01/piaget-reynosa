"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

export function NivelFaq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-black/[0.06]">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left group transition-colors duration-150"
            aria-expanded={open === i}
          >
            <span className="font-sans text-sm font-medium text-ink pr-4 group-hover:text-brand-blue transition-colors duration-150">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-muted shrink-0",
                "transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                open === i && "rotate-180"
              )}
            />
          </button>
          {open === i && (
            <p className="pb-5 font-sans text-sm text-muted leading-relaxed">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
