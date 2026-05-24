import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
}
