import Link from "next/link";
import { Container } from "./container";
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200/50 bg-white/40 pt-16 pb-8">
      <Container>
        <div className="grid gap-12 md:grid-cols-4 lg:gap-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-white shadow-sm">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5" />
                  <path d="M12 15l-3-3a22 22 0 0 1 3.82-5.74l3.1-3.1a2 2 0 0 1 2.83 2.83l-3.1 3.1A22 22 0 0 1 15 12l-3 3z" />
                  <path d="m9 11 4 4" />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-[0.15em] text-slate-800 uppercase">
                Forge Fund
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              Removing tooling cost barriers for high-conviction builders. The sky is the limit.
            </p>
            
            <div className="mt-6 flex items-center gap-4 text-slate-400">
              <a href="https://twitter.com/maurili007" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/maurili007" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/mauriliosaddoud/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-tight">Organization</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="mailto:maurilio@alignaisolutions.io" className="text-sm text-slate-500 hover:text-sky-600 transition-colors inline-flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  Contact Us
                </a>
              </li>
              <li>
                <Link href="/apply" className="text-sm text-slate-500 hover:text-sky-600 transition-colors">Apply</Link>
              </li>
              <li>
                <Link href="/donate" className="text-sm text-slate-500 hover:text-sky-600 transition-colors">Donate</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-tight">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-slate-500 hover:text-sky-600 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-500 hover:text-sky-600 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/50 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Forge Fund. All rights reserved.
          </p>
          <div className="text-xs text-slate-400">
            Note: Forge Fund is not currently established as a registered non-profit.
          </div>
        </div>
      </Container>
    </footer>
  );
}
