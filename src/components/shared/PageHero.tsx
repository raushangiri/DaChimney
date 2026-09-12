import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  crumbs: { name: string; path: string }[];
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, image, crumbs, children }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[420px] items-end overflow-hidden bg-night pt-32 pb-16 md:min-h-[460px]">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="gradient-overlay absolute inset-0" />
      </div>
      <div className="lux-container relative z-10 w-full">
        <div className="mb-6 text-cream/80">
          <Breadcrumbs items={crumbs} />
        </div>
        <h1 className="text-balance text-4xl font-bold text-cream text-shadow-lg md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}