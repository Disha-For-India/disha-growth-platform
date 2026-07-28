import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-background py-10 lg:py-16 text-center md:py-24">
      <div className="relative z-10 mx-auto max-w-3xl px-5">
        <Reveal>
          <h1 className="mt-4 max-w-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </div>
  );
}
