"use client";

import { cn } from "@/lib/utils";
import { forwardRef, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "accent" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-deep-blue text-warm-white shadow-sm hover:bg-brand-blue hover:shadow-md",
  secondary:
    "bg-transparent text-deep-blue border-2 border-deep-blue hover:bg-deep-blue hover:text-warm-white",
  accent:
    "bg-brand-yellow text-ink shadow-sm hover:brightness-105 hover:shadow-md",
  ghost:
    "bg-transparent text-muted hover:text-ink hover:bg-brand-gray/50",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm gap-1.5 rounded-md",
  md: "h-11 px-6 text-base gap-2 rounded-lg",
  lg: "h-14 px-8 text-lg gap-2.5 rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold tracking-wide select-none cursor-pointer",
          "transition-[background-color,box-shadow,color,opacity,transform] duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          "active:scale-[0.97]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
