"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
              "overflow-hidden rounded-2xl border bg-white transition-colors duration-300",
              isOpen ? "border-sky-200 shadow-sm ring-1 ring-sky-100" : "border-slate-200 hover:border-slate-300"
            )}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <h3 className="text-lg font-medium tracking-tight text-slate-900">
                {item.question}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
