import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
