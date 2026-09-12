import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-3 md:mb-14",
        align === "center" && "items-center text-center"
      )}
    >
      {eyebrow && <Badge variant="gold">{eyebrow}</Badge>}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
          dark ? "text-cream" : "text-charcoal-dark"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-light",
          align === "center" && "mx-auto"
        )}
      />
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed md:text-lg",
            dark ? "text-cream/70" : "text-charcoal-light",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}