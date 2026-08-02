import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: {
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >

      <h2 className="[text-wrap:balance]">
        {title}
      </h2>
      {description && (
        <p className="mt-5">
          {description}
        </p>
      )}
    </Reveal>
  );
}
