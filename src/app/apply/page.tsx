"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowLeft, Rocket } from "lucide-react";

export default function ApplyPage() {
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
          className="rounded-3xl glass-panel p-8 md:p-12 shadow-sm max-w-3xl border border-white/60 bg-white/70 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 text-white shadow-sm">
              <Rocket className="h-5 w-5" />
            </div>
          </div>
          
          <SectionHeading
            eyebrow="Recipient Flow"
            title="Apply for a scholarship"
            subtitle="One recipient gets one annual plan ($2,400/year). Open globally to any age."
            className="mb-10"
          />

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 block">
                <span className="text-sm font-medium text-slate-700">Full name</span>
                <input className="field" type="text" placeholder="Ada Lovelace" />
              </label>
              <label className="space-y-2 block">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input className="field" type="email" placeholder="ada@build.com" />
              </label>
            </div>

            <label className="space-y-2 block">
              <span className="text-sm font-medium text-slate-700">Why do you want this scholarship?</span>
              <textarea className="field min-h-28 resize-y" placeholder="Tell us your current situation..." />
            </label>

            <label className="space-y-2 block">
              <span className="text-sm font-medium text-slate-700">What will you build with it?</span>
              <textarea className="field min-h-28 resize-y" placeholder="Describe the project and timeline..." />
            </label>

            <label className="space-y-2 block">
              <span className="text-sm font-medium text-slate-700">Why does this matter to you?</span>
              <textarea className="field min-h-28 resize-y" placeholder="What impact will this have..." />
            </label>

            <div className="pt-4">
              <Button type="button" size="lg" className="w-full sm:w-auto">
                Submit Application
              </Button>
            </div>
          </form>
        </motion.div>
      </Container>
    </div>
  );
}
