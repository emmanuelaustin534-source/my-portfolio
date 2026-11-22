import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { personJsonLd } from "@/lib/seo";
import { Providers } from "@/components/providers/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/effects/Preloader";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Cursor } from "@/components/effects/Cursor";
import { BackToTop } from "@/components/effects/BackToTop";
import { StickyCTA } from "@/components/effects/StickyCTA";
import { JsonLd } from "@/components/sections/JsonLd";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.role}`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    siteName: site.brand,
    locale: site.locale,
    title: `${site.name} | ${site.role}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050a19" },
    { media: "(prefers-color-scheme: light)", color: "#f4f7ff" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

const preloadScript = `try{if(sessionStorage.getItem("ea-preloaded"))document.documentElement.setAttribute("data-preloaded","")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloadScript }} />
        <noscript>
          <style>{`.preloader{display:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <Providers>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Preloader />
          <ScrollProgress />
          <Cursor />
          <Navbar />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <BackToTop />
          <StickyCTA />
        </Providers>
        <JsonLd data={personJsonLd()} />
      </body>
    </html>
  );
}
