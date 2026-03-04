"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { ArrowRight, Sparkles, Rocket, Globe } from "lucide-react";

// (Skipped principles and faqItems for brevity here but keeping them in the replace block target exactly below)
const principles = [
  {
    icon: <Sparkles className="h-6 w-6 text-sky-500" />,
    title: "Fund access",
    body: "Donations pool into annual scholarships, breaking down the cost barrier for college students, bootstrapped founders, and international builders.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-indigo-500" />,
    title: "Back builders",
    body: "Applicants share what they’re building and why it matters. We prioritize clear execution intent.",
  },
  {
    icon: <Globe className="h-6 w-6 text-teal-500" />,
    title: "Show outcomes",
    body: "Recipients publish progress so donors can see what their contribution helped bring to life.",
  },
];

const ANNUAL_PLAN_USD = 2400;
const WINNER_ANNOUNCEMENT_DATE = new Date("2026-07-15T00:00:00");

const faqItems = [
  { id: "who", question: "Who can apply?", answer: "Anyone actively building and shipping. Whether you're a local student, a self-funded entrepreneur, or a builder from an emerging economy, we want to help." },
  { id: "what", question: "What does a scholarship cover?", answer: "One annual Claude Code or Codex Max plan ($2,400/year value)." },
  { id: "both", question: "Can one person get both plans?", answer: "No. One recipient gets one plan to ensure we can support as many builders as possible." },
];

export default function Home() {
  const [fundsRaised, setFundsRaised] = useState(18450);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const ticker = setInterval(() => {
      setFundsRaised((current) => current + Math.floor(Math.random() * 40));
    }, 5500);

    const clock = setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => {
      clearInterval(ticker);
      clearInterval(clock);
    };
  }, []);

  const scholarshipsAvailable = Math.floor(fundsRaised / ANNUAL_PLAN_USD);

  const daysLeft = useMemo(() => {
    const ms = WINNER_ANNOUNCEMENT_DATE.getTime() - now.getTime();
    return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
  }, [now]);

  const liveStats = [
    {
      value: `$${fundsRaised.toLocaleString()}`, 
      label: "Total funds raised",
      context: "Pooled from community donations."
    },
    {
      value: scholarshipsAvailable.toString(), 
      label: "Scholarships available",
      context: "$2,400 value per annual plan."
    },
    {
      value: `${daysLeft} days`, 
      label: "Until winners announced",
      context: "Global access. Anyone can apply."
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#fcfcfd] selection:bg-sky-200/50 selection:text-sky-900 overflow-x-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none sky-mesh-bg" />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel-darker border-b-0">
        <Container className="flex h-16 items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-white shadow-sm">
              <Rocket className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold tracking-[0.15em] text-slate-800 uppercase">
              Ship the Thing
            </span>
          </motion.div>
          
          <nav className="hideen md:flex items-center gap-8">
            <motion.a 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              href="#mission" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
            >
              Mission
            </motion.a>
            <motion.a 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              href="#how" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
            >
              How it works
            </motion.a>
            <motion.a 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              href="#faq" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
            >
              FAQ
            </motion.a>
          </nav>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <Button href="/donate" variant="secondary" size="sm" className="hidden sm:inline-flex">
              Donate
            </Button>
          </motion.div>
        </Container>
      </header>

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-32 md:pt-16 md:pb-40">
          <div className="hero-glow" />
          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <h1 className="max-w-4xl text-balance text-6xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-8xl">
                Scholarships for builders who <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">actually ship.</span>
              </h1>
              
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl md:leading-relaxed">
                Ship the Thing removes tooling cost barriers. We fund annual Claude Code or Codex Max plans for high-conviction builders ready to turn potential into product.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <Button href="/apply" size="lg" className="w-full sm:w-auto gap-2 group">
                  Apply for Scholarship
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href="/donate" variant="secondary" size="lg" className="w-full sm:w-auto">
                  Donate to Fund
                </Button>
              </div>
            </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-20 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto"
              >
                {liveStats.map(({ value, label, context }, i) => (
                  <Card key={label} delay={0.4 + (i * 0.1)} className="text-center py-6 flex flex-col justify-center">
                    <p className="text-4xl font-bold tracking-tight text-slate-900 tabular-nums">{value}</p>
                    <p className="mt-2 text-sm font-bold text-slate-700 uppercase tracking-widest">{label}</p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-500 opacity-90 max-w-[240px] mx-auto">
                      {context}
                    </p>
                  </Card>
                ))}
              </motion.div>
            
            <p className="mt-4 text-center text-xs uppercase tracking-[0.12em] text-slate-500">
              Demo metrics • placeholder values with live-style updates
            </p>
          </Container>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-24 bg-white/40 border-y border-slate-200/50">
          <Container>
            <SectionHeading
              eyebrow="Mission"
              title="Turn blocked potential into shipped products."
              subtitle="Brilliance is evenly distributed, but tooling budgets are not. Premium AI subscriptions are a massive barrier for college students, early-stage founders, and international builders alike. We level the playing field for anyone ready to build in public."
              className="text-center mx-auto"
            />
            
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {principles.map((item, i) => (
                <Card key={item.title} delay={0.1 * i} className="group">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{item.body}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* How it Works Section */}
        <section id="how" className="py-24">
          <Container>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  eyebrow="How it works"
                  title="Simple funding loop, transparent impact."
                  subtitle="Designed for clarity and conversion—donors know exactly where money goes, recipients know exactly what’s expected."
                />
                
                <div className="mt-10 flex gap-4">
                  <Button href="/apply" variant="outline">Start an Application</Button>
                </div>
              </div>

              <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-sky-200 via-indigo-200 to-transparent hidden md:block" />
                
                <div className="space-y-8 map">
                  {[
                    "Donors contribute any amount to the combined pool.",
                    "Builders apply with strong project intent & execution plan.",
                    "Selected recipients receive one full annual scholarship.",
                    "Impact stories show donors exactly what got shipped.",
                  ].map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.15 }}
                      className="relative flex gap-6"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-sky-600 shadow-sm ring-1 ring-slate-200 z-10">
                        {index + 1}
                      </div>
                      <div className="pt-3">
                        <p className="text-lg font-medium leading-relaxed text-slate-700">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white/60 border-t border-slate-200/50">
          <Container className="max-w-4xl">
            <div className="text-center mb-16">
              <SectionHeading eyebrow="FAQ" title="Fast answers" className="mx-auto" />
            </div>
            <Accordion items={faqItems} />
          </Container>
        </section>
        
        {/* CTA Footer */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-indigo-600 opacity-5" />
          <Container className="relative text-center max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Ready to ship?
            </h2>
            <p className="mt-6 text-xl text-slate-600">
              Join a community of builders turning ideas into reality.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/apply" size="lg" className="w-full sm:w-auto">Apply Now</Button>
              <Button href="/donate" variant="outline" size="lg" className="w-full sm:w-auto">Donate</Button>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
