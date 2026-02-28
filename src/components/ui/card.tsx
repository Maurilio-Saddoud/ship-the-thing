import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className, delay = 0 }: CardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50/50" />
      <div className="relative z-10">{children}</div>
    </motion.article>
  );
}
