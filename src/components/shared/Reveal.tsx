import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, type ElementType } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: ElementType | string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Component = (as && typeof as === "string" && (motion as any)[as]) ? (motion as any)[as] : motion.div;
  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </Component>
  );
}
