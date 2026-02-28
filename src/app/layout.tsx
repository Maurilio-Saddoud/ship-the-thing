import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Footer } from "@/components/ui/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forge Fund",
  description: "ship the thing — scholarship fund for Claude Code and Codex Max builders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-cyan-200/30 selection:text-cyan-900 flex flex-col min-h-screen`}>
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
