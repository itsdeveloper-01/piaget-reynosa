import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  as?: React.ElementType;
  id?: string;
  padded?: boolean;
}

export function SectionContainer({
  children,
  className,
  innerClassName,
  as: Tag = "section",
  id,
  padded = true,
}: SectionContainerProps) {
  return (
    <Tag id={id} className={cn("w-full", padded && "py-16 md:py-24 lg:py-32", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 3xl:max-w-screen-2xl",
          innerClassName
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
