import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  title,
  description,
  children,
  titleClassName,
}: {
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  titleClassName?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-background py-10 lg:py-16 text-center md:py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-5">
        <Reveal>
          <h1 className={cn("mt-4 max-w-4xl mx-auto", titleClassName)}>
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </div>
  );
}
