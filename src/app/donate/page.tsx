"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowLeft, Sparkles } from "lucide-react";

const amounts = [25, 50, 100, 250, 500, 1000];

export default function DonatePage() {
  return (
    <div className="relative min-h-screen bg-[#fcfcfd] selection:bg-sky-200/50 selection:text-sky-900 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none sky-mesh-bg" />

      <Container className="relative z-10 py-12 md:py-16">
        <Button href="/" variant="ghost" className="px-0 gap-2 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-3xl glass-panel p-8 md:p-12 shadow-sm max-w-2xl border border-white/60 bg-white/70 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600 shadow-sm border border-sky-200/50">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          <SectionHeading
            eyebrow="Donor Flow"
            title="Fund a builder"
            subtitle="Mock checkout for POC. We capture donor and amount data to connect donations to shipped outcomes."
            className="mb-10"
          />

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 block">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input className="field" placeholder="Ada Lovelace" type="text" />
              </label>
              <label className="space-y-2 block">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input className="field" placeholder="ada@build.com" type="email" />
              </label>
            </div>

            <div className="pt-2">
              <p className="mb-3 text-sm font-medium text-slate-700">Amount (USD)</p>
              <div className="grid grid-cols-3 gap-3 md:grid-cols-6 mb-4">
                {amounts.map((v) => (
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={v} 
                    type="button" 
                    className="rounded-xl border border-slate-200 bg-white py-2 px-3 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-sky-300 hover:bg-sky-50 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none"
                  >
                    ${v}
                  </motion.button>
                ))}
              </div>
              <input className="field" placeholder="Custom amount" type="number" min="1" />
            </div>

            <div className="pt-6">
              <Button type="button" size="lg" className="w-full">
                Complete Donation
              </Button>
            </div>
          </form>
        </motion.div>
      </Container>
    </div>
  );
}
